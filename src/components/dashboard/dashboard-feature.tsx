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
    "5TkB4KmEcX4yYnyaLXEQy428XfrQeJvUJjELSBAo2dQKd8v4zvBoNdFypRsmjgYQVHDCcBxfyKC1VL3QX1LwSUaE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F6tdM7apbin6R4WTG9KxAizUhngCpSxuGNjWArrH4DkcQkWYjeKfedSTNbpHt7RRiqdGUEuX3m48rmAcxp76Avj",
  "key1": "5Tx92Z3e4yLgLcjJAsDyGnpknutkoHJFJ9UGZPFKUyxaPAnGbbCUYAnnZ9yWni5uKeiEnrda8DokMhXK6k9pMxe7",
  "key2": "g4K4ccugmEXvz1FAK6Zy7RccuFFaWXcPJa6ayVNTEUHkQLnaqfXPbVm5jSdYAQ2Pfxo2WnM6qyK8zykdqJDpvQS",
  "key3": "PxHR8Qm21kwxs2x5CFwKURnLkj5hkbnULfX266MczFwJXdU1Y14dQSTGtz1tPptvak9uNu1HEgkHXfhr5PCUSJY",
  "key4": "5gcWvyNTMMbkTjJ7NFzJhPUpyBZchZHAHSaeeTJKsAqDfJXS9k5WFseLHWWwFtYov8QfH8HEFePnY5AwheuwwCdd",
  "key5": "2yp81DE1Axbwj1cmtKRbar111JdnkKvC2JswixBSzhwGiFGNT7fJWvvGJt6Xcr6jmHEXoSq1igBFYaCqz6HHmwx3",
  "key6": "kcgPU9HWUpcUukCgkmyH5XJbAEYyoX2ajzuQaFRw8Fc8D1JT1U6z7VoQppgezVwkj3V5Yk1ypj4fVJvXe17qPXA",
  "key7": "2gfb99dmYzxZZKnhq5rztkaFRS6DfoxLeuxFPB2rPhvBeE7uGwQVJtCvbyB2wUBp1HwZ1rnzEH2Q1dGeVQGBoh1s",
  "key8": "2QzMHnuoyJXQQsEfmD4UCQLsznZYKngqjzNsHpmgMNJHgeYZGuWbYbpy6Drxg3tf38BZtXsVB2oMnftkqHEfh2Cp",
  "key9": "4hd1pLmtqQbYexVrEnfZWeTA6xYKpTGPD39VY4oo1i34LmY9YqJvnLaNzX9MMcZYDVoAWjeJowTRnsRHQB8VowP8",
  "key10": "35HftKGouPaJjiDcdriNKp9aciDZuEdxBcJR7KvErvFm1gN4YqNYAmft1Rih1Hp6Vcfz4VkYZWCNfT6wJakdAkyq",
  "key11": "3VcjQvD3P2rHnjJyXQBeM2RCTdWhTxRgfMochJX8tR34PNR5THCpHFd2y4YpsvdbRmTPoyaXXG5kd2KAJa6Q3VGN",
  "key12": "4Hd3HHmW2KiQRMK8deE9rcSeHvyj2LvuNQ3i3kdJwFVgM1ZNK2yaWMbSTuDThbh7YPzdFHULpypo1nCJqXL2yEzu",
  "key13": "3PHqTXHKutq4c8pDsNFAr5sXLinTcPsXzzd13jTn2hYaWAT7MWCBkvishnUwdpqsgaXQMx7ahve5tXoeNzDkGzQT",
  "key14": "DF85nth1t5eeipWjuuxQgCumTfniHkxzX54iRsZuoeSss7NnLKRDzpt7NREvWobWige1pCWnFGvFWQRwUMy4qNN",
  "key15": "4PxAoN545CJ8psyzuohwVLcwpcREUDZJXc1wewYYTMCRTxecdRG5wdjpug339ATgoEC9KP8A1D6yP1My9pHG6Zs7",
  "key16": "2EyA9oRDxyXgfjGNWJabHLpF2iT7jfHkWe6yibjo87p5Ues5LqgZUeopEKhfHAGgHpMGoS7tQ7pPrzvZXySqoYkg",
  "key17": "53kC4WgfAJfikx34ir6aiNPqJ9CCxT5exieCfCMMnfEpPYAZWtWMpGxn1wk8mAwEVHCTV3GX2tKM54qpGSgwMeB2",
  "key18": "dF6b1uRE5Bqm46rNsBcYog3ZCfBaE9rYrBANmKpdZWRiJtXA9VNjpUBm4bC7GaptWVMntNNmen5L51ydWAm1we1",
  "key19": "2e2bMMZWUCfsGJNi8ZTtftwb1KvEHuh7gcoZJwoR4LyVxtCtwvHRyJpNrCStS3wSwBBki9WQPEeY5yJ3shiRpXcj",
  "key20": "W2NPWzTtnaBWwNawUqs7JkUhok8xKWdH8eBbAu1cp4xBhnXbQatrZm7n3WuSf3gAtxLHpVmsw79ZNte48MFdkyu",
  "key21": "5VPBj4P62dmDDAReVfaoZ5Saow4KB8kc7yobGGcMV4E2KYsNUHNRn2JEn9zZetnneXKs5B5VPTMhTfuB7Pi4TY8b",
  "key22": "32ToE8ZTbNnijUsBCndEymSToe3Y7es7srC1FXnZFJ964RF6qkMTDfeG1TqPTHyM23LiXQNsevPhzmcacjtuGDtf",
  "key23": "66mgU1NVeJm4cfNrYfn1nMZow49T4Bzho1kep2jg2A2NysFZZiKDAmdNCX5x6vZZxeD4tXPmyymMW2qZq8r32mM8",
  "key24": "5XD9nY6GE1zqkZg32t8ka9cscU3sVTcg1PCCbdeH7cKeXV4hnEvX81jMaDPdEaqmPqA5aYoJZJhwAuzJw1SrVMQW",
  "key25": "7sSxZkdGSQkzA7WXdoPnvUVfLV2U3DefHeMuUWhoHAGNzjP3uCWiSGApCoaM2MjUT84ydVLMD7JnTdaFbctU45Q",
  "key26": "4iRrsZAiko1sTQUiPPNMXsZxBhWqauNr6bgiYTxM8bHP42atjYDhhJgYTZ5NCShCL6XhqoFCHz7EY8Dw8odxTPNH",
  "key27": "S4p8AeuqbbX6VHUxdcama91jXXdebPXyCvLJnBrFJdfRB72Ps85iLrULPEpE6nDxDMG6Ysr7HiEMakJPE4VhDJM",
  "key28": "cbgpheaVG37PebsdMroPojp6zjWVW8Czdjw1U9Ez2VsM8mLFc5FnpXz5Xto8AZUQMri9HD5hMP8pZD82jfThu9j",
  "key29": "587kaDhyrDdRBCUP7sdimL3oK8qqyyKCo46eKyeLCSaaKQEiT1PWDf8zKMexDp1wBL4wab1CQf14LFqjBpANx8Jg",
  "key30": "3Q9F8WdszawXMShUD61pvmW8NApS1gWRegkV966kazg9d1vvTwYCKSUJb1bxWn6gZLGNpCB3xgCBoJWAmPCqc91a",
  "key31": "AXbuv4WpYDxfckK2Mn7ubtX6YTXYN1zcUiAFxm9wi71yi1BVtE95JNsB5Pe1Dr9ZZQNesbeSZmh8TDec9tM8CDU",
  "key32": "4PnZ7Q8yUesqZRUhi7rDapdEbzwejS8bygUsvXow9o8ABBz1vvvYKWmpWRBkDXVhNN17cUoywoYAaDqDrKwR42xU",
  "key33": "2cmJTfiRD5uy8JYEEzzgWHXXqEMiuwyuWyVFtP1E7JG4zspZn5ksCcaLMi5u5HeiNjGZM9vKb8DFjgZfZ5PHyVch"
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
