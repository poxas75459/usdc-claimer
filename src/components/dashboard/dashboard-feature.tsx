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
    "56Ynfs7qyCVhbnKr1pw5ojdfbSexc4JJqiXqRqf39qja6oKuSRCjcUdUfK6iQDG1pMQ9FuAeoZj28niYCoRdCtQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h3gHxW37EaPVQ2fdSLDBQrNNGvYCvWrFBe9sjR2cxSti6cg64yngLfxE6xLn4AaeDzaoUox6vz1esywNiwusN5U",
  "key1": "3zfDY6o774ABQh994deFLti3No1vKfkHEkSaWqmesaMFSk1gTNaUSS2Ch9YG74biCgz9vRkMqzyct7CQ8aennrqd",
  "key2": "3TdF7C8nm9s4VwwvMgaNQ8hjMSF3Fi8pwjF7pdfRvEErP3nia1y636YPHjNdMfy733tky4iaxE5aazZ9rkw9v7KY",
  "key3": "29YDsRSQ1gSYGEAnDLdRzCv9aNywBTPPWcz6Q2FhxnxvknNxEfZTNsR9vkv7GtHPVxRgtS88EaHc7aqAya7JtVR4",
  "key4": "qmytUvLds5T78aYusW6my5YrP6ZkT1Byh2ep48hGRQ8LwxP2bK2V5omMiHypgV3GLnPdJ26U5fdbYmusvPU8SoA",
  "key5": "5WNY49DTGWv9gtfYb24DtLx6HCfVPgu2xKzn8kN92aGyXnsrucxrj6d6Xjk725beRLsRw9qXkomTxHJ8NcmVhCkx",
  "key6": "3nk9eBHetiNt4ohcHf4dyFnpbz3j3DyLV3FSBoyGuuL5rFuYjbT5uBE2KXJwEXuXrPVyvrUYCVndd53krHuB1g8L",
  "key7": "BEUW39phDrth43zh9G73ZZXuGYkhLW9oPUTLDc3fSL2aKFLvQPMW1yRkQn3GxHZbyiWyqHDDbeu2Qf3xiGD3AGH",
  "key8": "2hRfx51x5k7oE1kWvt4bhgWN6w96EKXTmc8DqwKteSLFM1kLNjNq3HjaWBVGrsnZahGwwaNmC1AmKYPxgFNeBxaQ",
  "key9": "2ztmx4TCsX98maCUm1bcKUZnHJGbUVJijVY4vhYCh2dw2tmd6KNmueTkP3to84YLcmmfjqVeUvWQ2NhCHe8P4b59",
  "key10": "5jfemDufTaoxovFGQAmfLVz6huNvgTp7DTX6hhxbEtCFzXzuxg72ApoppcrL6hQxTS8AjHfPs2WTF4Buz4Gs9yx2",
  "key11": "4j4o8Ae8MLMzrxv53QYUabT4PzCQUD923qmqBBU1xP8tc9GsVbW1CawYxiwV9MTXEs13FEjDwcAKFRAMqRpEu1ft",
  "key12": "65amYEiG5DnrbQ2SuKqnEfxAzELjWhCZ5wN2Qu9Sz4WX7zcDMwos5iSP67y94BUr8SsJ4G2SxgKg13JNGhvRk8sx",
  "key13": "4iFVWPLCGeRZBJxXqbUhb3udzNVQ8LFBW4GHAcQ62Lhy1Uwzwrup69srGxRTP361gAqHoxMdSLoTyQy4AAenaocH",
  "key14": "9HzpjvmC1khzsBnNJtySJwCeDRgnAEjEqKHgaqzMCYQZTHKDSugyB5qznupWWcpBhfLQh4LDYEvxGFJ5Z8XXicq",
  "key15": "518As9Y7fd2JX9qCouagoib3yB2jB1JdVcdNCip6jB9Ay87EG4VfE8Y3xgtP4CrpSwALLSuh4H8GCzAjftybjoqr",
  "key16": "2Wb7ifact7m5sKSRCk9BdGUHfnkfw98tkfADm37gyv4STf5crXxnERpH33NqtMS93uVhDDePjxtmRHJhiTQDDHYD",
  "key17": "5FBSAVgMgAQP93wBW69md7ijpdEEdcjjc3RgVbkDaEf5JiZ3E1XevTjG8M5ovT48p5ovek3SgVfVy8211H8L7Aj8",
  "key18": "4ansRhNPhQEgAKtNShNGU8JbheUH4f8Lk6vy45cXKxCnkL6WYTigdnb9pdDimtZgjDRJD24DVDCjBC41rgdbJsXS",
  "key19": "3bYzxFj7zb5BTK7PorE67ZCEHo4udCDoc7NjFUXtSpoVTUsifQejjSsQyDkCSoBftpjnoejQEeq9AbB9PKttD3Eq",
  "key20": "2F59cPPBaEJCGhDLXhwwuX1fUwcwNFT2LpwN4cfF2E14ejRKAT165CYVaXGnLk5gDA3Pg67e4Fd2FJvaGsVegVoj",
  "key21": "2soetVbFb3Gcpum96ACmD5hKq9ZkBHzYTJs2bwXPr7FyLcVr6GZ64MbqvsRS5psrgQn6gw8GzhmK1nEvMv1KtcRx",
  "key22": "5LcKbU7A5x7k41VQ2UkMW5DJF7cBR4LBorkwfrTDqQwfCqYEFADT5KzEX23PziXeetQTW4Q36BZ78vQnFG3Je3o9",
  "key23": "3JBryquKEBCGBedL7GC872cETbgwoSPmrHEtw9rKmrkou1GcDFyHUaqDFxmkV9yM1QkuXSAqEYUDFf7S1QCwWz2u",
  "key24": "2D2uDGTJxAeco2m8Ew8pTRnpnUPAkJnhZUcV7Uko53JGNqV4erPTUTzAhuftFaaqeUVg3UPgTYYbd4HKo2L64fnD",
  "key25": "3UgLfUp48jqwc4UpdeXr14csB7Q6V4g5TDdY5Yf7joPxmwcA3Juaq6JvWVBuMQuka4RXNXD9MugQ4zDzDx4U8qA",
  "key26": "3XrDNTXt8CqsvDmp62Tv4f34TX2hptQVSCTDwZ5yMdp81abpFUdyWjj3297z8bqvjJnQU1eghnWDV1pwVaZq8Pj2",
  "key27": "3dUwzNzL3DvCc1a4dJAYe1ERJR3XufQxL9FVnXsCRdbmVwtoLuSPQHpZ5EiSPDPQcqsu22dwiZzw9FCS2B2dfp3m",
  "key28": "nMcoySw1bwV5bjyH5eh1VPJouF6oKSkEwTnFqUhd3dmhnzJbiCdRgpBrfyq9k6kwjTpdwr7kxL4g3nAUZeGVL7m",
  "key29": "VjgACQE8cSzKaYcSdGtyrYcvCZYLVoZ6uWR1AqAEKWbtAMNkgZ32kXzHRfCN1TkJ347wCsnR65UrBUkNtwKPp48",
  "key30": "2r6CmBVyugC2CQRZ6PNfMFoDvuFqFA24pzpVkfnNftyiUmB4zqU1Dwh3UGVcT4jRqUh5EqtapkNS9VcNYCEJhLeM",
  "key31": "4DW6293stNRZ156T6vM5PC6kGYWYja4a8dwkA2eYTeA3wahm85uPPeEh6bJ9gYvTscDdsxoc61b4WTKgstGk4aPn",
  "key32": "3kjmkHMz3cSwpSoQPmfDDCV8P9G81hdAkDU8EHEsGqN3G4L2ptkxEijNGo65UMmsWVp9JZYJVT1eW9yFN6ZvMNAz",
  "key33": "38CuwMiPriMip5vQQcjm3i7fyhhzqmaeRCAj1R5aLSSFSPCYFEuZ6Qa1u2Dw95UoipaqQSJ9XtJLHHhqiVP6hkF5",
  "key34": "GppWPSafAiXT7CG947wq74m3tt9LDRXSXDeVMM49hG6TFx4ARXHKwegrhDs69VPhtrU8JbrBiLT22N5uYaD351M",
  "key35": "2cnwkUUss1FEEcmr38gNKMkJief9ds7cJb1uyySyyLUDAooywHKr4G9t55psoVhHxXncZWcEW4FF8gNBQRaLVXCK",
  "key36": "5E2MKkj2nX7mVNW31qTpDUr6uwhip4UTfimJQJ9d59ZfdGQfU2gVvXwyeDe75bhD86gc2VRbUy2635Dfgt7RqDwR",
  "key37": "356EDwPerqh9WvQz3ooFdGPZET6JLE68ubq78WRhF7YeaobznxBjMbpNQPuhPGbhDTYDJghYoB3vZv8fZ73JRwoA",
  "key38": "27kdZQ2keaC8kErMjzCNoL6kzHkRSbWAxYDrwnoYz3iZSwhpGgKeXAWVbLJ47GrUE4oBH1VhW23yTfupV5iLgGoX",
  "key39": "daGZGbE68tnSPqohNDUV3e7wcUBUSVMF2LUeSH9o1bUWBJHjqkrLuFzqF4HqFHPHETUQ1aaUNjanBvYRJ2VUJyf",
  "key40": "354m86RnyMwcwVTgBXNxf9y4EygmF3WF1m3tZyMbxAwSASoCyciUB4CVVuJzZfvqnnPJCdYW9ptKSDHdfysmpnHK",
  "key41": "2UADi5YoeNTvdrt3qVWRDi9GbfyAzvHz5WqbzedmBKDw9eDGSXZhAcwmrT7y52Hqxj5Vpuivb6KYDaMuucnUW19d"
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
