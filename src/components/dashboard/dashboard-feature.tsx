/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5orWqpxAqUjupHs7PFP8B5stkcDbU3NMbPt7Mqc7447TMC1Jx8AJsRscctZZGEALrefgoXuUrdrexxPNRDf2JyR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wirg24VDYW5Y66qcrufxTNbtouRAnAvyvza9ac1eJdyyWynjnj3K4FDfFpW4qK8MRVaH7PmSmcNKamW2mbXfgiD",
  "key1": "2LYmJiURx4XsZbDewATk1t51SK8QB6btkSqCD2jRfyEfiEThokMQnrfoTjP6rjxrTKvqox9ScLWy5chNEzaP6vkC",
  "key2": "Wq1Jm4kgNJj42DZPNyj4XE8FWZTyCZEVsngB9ZF2y29hjZQH6XmH3N8WY4sXww1S4LBgJiasJs7ou1uTmqFCBTb",
  "key3": "QJQBn8cL9ebF8RDL4cS5KSuhTQtiTWUorwSBGvE7ht95tPXg1cSDNhQFCMpcUiXfqtGLbzaYAC1T5FwCGGEZGKN",
  "key4": "5ZCvs2cBHTXvYvvwnsgXhVHGeNYomvmaYxSaoNf4bVTEzFEPoDXNHderCmgkkmVtGXnho5ie1KRG85m8Xwje18iQ",
  "key5": "4xPjnYLjrMWnKHmXA6NgPrLYgg1xEqwfqsGwosZMW9QrQFbKTJRJVd8x6Zs7s7NcSWNWAvXx9sZso33ZNynzvYU5",
  "key6": "5bJhHKo6cvhFv8A9rbRasF6mXAKGaNg3HLcSf9r1qPwWiDPpMeQG7GLg2KgvN92m68rC3M9PJZoqB7f5dW3xV1jH",
  "key7": "4FKwD6myrD3brBTSAYWkMdQxaJLqVsoPgiNaqHXgTedf89Ku1vdTeWExSJqhGXyS94XSLuKVLJ43MzGH3mKEdVfw",
  "key8": "5hLczddyxHRmC32DREARtDyrdBg6Yrqom1rQVEKdUQQm4pxpxF7NrYwLZKvHb8HjBUeiesiaGiCNGjWNWbVFPJhh",
  "key9": "btpBKMkFSVu3BUXYnyNR3pobfBtr29owFf3KgJEEcRLMXi8g416BzyEPkvqUffxvmTLrW4hRedeJPNUZGUNnGtP",
  "key10": "F6ohxpfbWwgir13AfjB1bygJrXTGyiJb789MzTCqj4aft8vy23g9R71EgLTiqvQh7eRqR99NqtWCF5zha5HeDi8",
  "key11": "fvjfzauP9p6ZbiXfUkxaBHPX8xcp3bM4wyqHFMXvvd4dkpwxidQ6c3y3yGxx62k2moQ6BWZA4bM2Mp2z828qGrD",
  "key12": "4E8akAFsiCDciiHySVxiY2dSGMk9ci9N9oGkpukxzFptB2a1HbGuP1326Cj76RWNhSXPciQz7fq7UKkpbUboM8EE",
  "key13": "5ZzhfxdW4ckzJfSgHXNPrLxugntJdrMMUwv4LQe2o9YybBx9iJ5fBHQigYL58ssMQXPw3DjV1rVNdbZq12bVaEhC",
  "key14": "66BNNCqBrS1LywgT7CpgcsXxv4dPwFPmiRsgaime8CpDvPGKhTqUiTosRHFUU9xeNTN5UXLKrnYofwDif87vfSmD",
  "key15": "5BYdeom8nqfuh5cuYfqasCESHbyeAVB5PjxPMpe7XVSQf72YJ9dWm1t8zPaPRk8MWZ4XdEryqTnnhwaHjv3ViasB",
  "key16": "4uias6NVsr99W78UPCcTpRPtrF226YF1dDMrggR3DfkJWSWhbDfXRUaH4cV9bWFUxxXRauyf3pYMtqddLXpfZ3dG",
  "key17": "65oCQ7ijDnucxdma3fykNenU1yXUjVT1pr9UCKpQAF3sJzPRj2Pnq198HeDiX4P1uf2xScJ7B5SGKmXa6dvgbpE4",
  "key18": "3R81AtTCjh5MeYrPycGWtbjhSk2phqrJ1D845TCc42DdqGi19c1NS8eGSdMXwqnvf4DhEfKLob1qtKRnPoDrHTcP",
  "key19": "uMH838YXRYS5sgdhqeKohknLdzH9wDqYkMDUXDQiairpzTxnEemQnWfwQ5qoQmy8BXfev3WySX9VLRvPBaeRLAc",
  "key20": "26AgqnobbMLYJ2aUmpXWfnNU1rtJC4bmeBNHwNiWQGWmerNkZaedi1q9n1nScA6yaDKrfqWmBZdeMkT1FgJvUgk3",
  "key21": "3ZhK34YZax5CLV2sScVW7Ev3uAJQKssmMtFfgGgeEqQvvGAvusxs4bZueNkaAYX54iDkvtmW3FP4J1JUCjb51hZk",
  "key22": "2y2dGnwZasQJ862J5KsXwitaWUpaUnkQnHhSUkqeSq44rpTa1FCxfvqYEZBDMx3S7vgPaq4wv2uPHS8bEqnGBepa",
  "key23": "NaHv6zRm463yeje1wFLLZKouGsyxgz5xWkw2MSKQamGrzhcLPq8jFikDnWUweQeiYPbnoiTZSVuyziYpSRHSCcV",
  "key24": "2HuFiU24RCCXkznnh2qEh77r5MxNhsYSfzVY6vtdM6GRJm9avVQ6VnYXpAq9UV6Frya9bLTry5SZxaZcuZS36ceC",
  "key25": "4X9bNCBwoHX7GSLVgjYHEUqbutXvqmzvUwJkHVfXQWbNXTMojr6H1FJ7m7PdDjy2RLXi4Rbqk4jhxDPiGGrqatj8",
  "key26": "2qtbR3wtJBMXPfQ561DoNLekBPxsu8B72Dps9XzVt5jywAgjFdvjCNwDuAZ6EEX4Q6v4kZcR82jwC5BftJecMRHV",
  "key27": "5wRDHo2yNoEfXcWsykHsiUDoVnLbVhgjMGFaAE4Q5gqidniq4QNEySzBbbeTBoH3KAM5CZs2W7qwZi9QrwZcrTw5",
  "key28": "36Aj8cHo3ryf4b5rvXNP7pLdJmsvSK6hsaRpZsSruR1X8WDkkhjqjy9gBru2wSYZMnfVnttkfDPUXfr6Ny37tAk",
  "key29": "3JtrKJdM7vwLb1tPEGNQCuFphwew8JJ4J4erGfQKY1QCM1KqvKrs33JzhMRfbFvZ2Xjzqj2oofqb6B9EN99zNTRF",
  "key30": "7SeANMCAqA4zN3JzMNHUYBQzQP67zwNb1zj5du8RbQaC134vprUCpNH8gJAp4N3YoxmZdwYW7NHSqjthj3QZhMa",
  "key31": "52PCnRyisxEVzt4RgTdRvryiAYhnPQbRpCwoJyY5pSe83Kocrmjf7MSFxCSsfAMFX1QyxQyEomLpTdtoAYUCDSCA",
  "key32": "2qghDqKudKWAzraYhQofxCuRp4gbqi5ZmjYsghRweJtVw2to5ktzSgAtnY1eyEYsA1dC84MhAYrv9zTM4xUPrmCN",
  "key33": "2QGUFvshG3mFu6jFJ6xKKabsTSQp6wqKueE8gqznPrq8Z8uQvA3GLGk4apUuS8Xu2AH9WvXqnXRvMefohfpQS6em",
  "key34": "tzuYtLXRQPeNc6KBtN8orBmNBiAgUkhXxT6CR2WWh86VFDmdG3i1bqssdZEgweHEGpnsv5EtB8R1ocoNdAPgQFJ",
  "key35": "5JKVws2V4HQjmpuFEerPZUgCtButTuVHT6E8NH36ADQAMLAGceu7F3ibsQLGrYkS2EjcgEcui7RpDpoJ1s3PfsGT"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
