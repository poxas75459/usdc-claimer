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
    "3BveqGs3ocPTBaAbdDkmZftqVaEcv3kEuHZvcKsYYfPzoWaZ22NNTz9fYNnpdetvnjhs7jBm5twq3H7DdsXb54PQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gdsQ3SgxW6RkXLYqSP2ERMgvFKY4RTje9xYfyHjPbHVxR8kroc4Zmc5AvLz8kAEwNEjqS94Z2B1XSdVqhDMmoh4",
  "key1": "63oo8EpVeHeUzjnEFXcR4LLyix9MGfBNp9rue3BYPAqAvGup1HEB6QkAKK3pRvGG7uhan9M6ULGZT7JBb9BsUGiK",
  "key2": "24NVn4qRLrGeJQa7nYaZih986H1HbexzatbdbdRmChJ8wd9bVvWQZNcYxxy7iGPqot44q5bcgy5bmmRjkZytXtBx",
  "key3": "4pE73DHsQ8sriyb2GVb5zSL3r5q8BqpgLZj5AEUUd9tTZM1tMMephzvTjdR8R4aWHNLDa7raaHtMMSq63Hw5q5HF",
  "key4": "4adAfr8ZEskpfv5uVDPPwSHQp1vAmfmCvpXMLjF9wbi1W9D8oRLvdLYmZDPaxX6GrfwNpmMUAB3iXLwkDd8n3AYb",
  "key5": "ohJzNmEuWLwxYFYGnuWeWPNH9DiqfTvem15NdFgtd1yZaq3coqk7A2gepn73P3ZNx6TN41MwzfWjPtYGkFocXAJ",
  "key6": "qsqsq3rdskv9hw9NJXFFizBUL5Epdy4HiVJ1jMH8CFsViruQvcfka3QR4WqvschMQ2irNo6s5ABCvtvMniQ11f3",
  "key7": "buoCxiWaMAFWVtrc3J27CYochSZnBNZLcoBSw5psvdisFcDbcZ9PMRWAhNGF9DqcYvvEbGsht6LNPE5EPxkfJrp",
  "key8": "2xdDtrP9YyKND3GPQcGBtFLPfs2umnrgX7HKHEvzPVGgLdRLvdKNtbw1sefGthBuN9cGucCsvSAFbL1ZntuPa3yb",
  "key9": "24jz3aqiHQwSZDP53cEK5viswtX7juSvWCHZE8khD6CPqi9MYL9hRnLETq6RwwWeo2Au2eVPEH3cZbWCAroBJzgw",
  "key10": "aFXRxq8EuU81zASnwcyBNnJJk5LYVReNS7pnwvxomdYMSeZNQmVxd6Akwmq1EMQrzoJZRthwcCHKpsEGtZ7ewo1",
  "key11": "2teDMcMji8p6ts298AhwEG4kYC972epYjkrpQCdftVpbfTyQ6XQBZDXSaSo79RM9D2Kso7yk27H69QSmuqAcvgVS",
  "key12": "5dbWcDy9vUfxLzTAASbynQhuWzu8ECGMBfpag9AAzUQnf5TyKecaVnNmT7t7xKKu23q6BJnU24nvc9Ztutkn9491",
  "key13": "4N247VGAPX3WDPt28Nwv7SXnHny3rY19Wv84ecSjHw7hQ51AvmdaMz5A78igtUb6thJAR6nksdgCxpn11q4aLp2S",
  "key14": "gGCxwUJRbD6DtXUHSfWKHNqDUhUGoHQVe8SJBK481fxH9ZYqzG9WFWsPi5dxSx3uGQNzSXVKhjSFmfyEnAuas3j",
  "key15": "2UyHydrxU7kJhtXV5crgDUuTgLjyamqP2WTVFCxKuNBVYVkEw1W7j7fxet1zejwvXdCFEHHpmAjgYQzjwEFUvdLu",
  "key16": "5ZdFZXxwbgtCpp4CbBGzGDppjKAytknRMFczTTzuWvo4xED1WvA5EvAGhHLMstGH1W6TDqThNeT3zdX5VicJfhqn",
  "key17": "4K4kmLuAeangUhkzh4fdV3GX9UdBni7gSga49b7uSvAPfSZfevwQmubGcLXdD5Jvuutw6gs2fThr1QMSEcxnHkDh",
  "key18": "CEr6SnpbNsWP7pFJFg2TksqiVAfd7g9HAp3TaeD1vcb7zCtaxY2pSE8UtTezqNHeV2MzoHZ1nr4WGPBLVg6V2BE",
  "key19": "2wFbrjgCkS8KpsEJPWoYz1y8tM8dp5BCpjuXfHr2jnd5utxD7bsFdCeMLzQsBY8hsRCcYrQRU79bQcdXN3uqCLkz",
  "key20": "vACFzWRuyWmzVmWpBpfJ4kH9RN1JFiiQ3wNSHoqpQDhL2B42v1srWAx1qLWXjTzgzZaPLt4AZXG4pbncscWTLAZ",
  "key21": "2k8HXip8Y8EGhn5onjMA7Tam9xxjJUWtS6KzD6MF3RzoKUpr7kSTzWMpfCFGdYE1DTtj8moGrYuaAgnsQVB9WLJn",
  "key22": "3LE1fhQTGn4H6UQQsN8KhrxdHGfuRVQtQ4DAoceaCxSPsE6eRmjaRFY4eWV4yn14WtpBbVCAkGhR8s2edUHaSV89",
  "key23": "5pwGiun3qbYFHFmyDovbv11RDE5P9ZeMPKUPuDNGyHuacZWHkLURYudMMBc1uQKfTHTdWAhatKqLqFVW1P8JR14j",
  "key24": "34asrqXVNFTg2VuUo2Lcnd4AKakvWYkjXtzEX4ZLhrbaNutm6pfxqsJpKcY5jKq2GKg5ZK4dZVXeKauFDscnRTjZ",
  "key25": "3jWv96W6PqeNMrsBWDFAwqK5vpqteifGMT9BvrwyyJFXskDH5QAoMfMRvK3o2sda4uRPWGYPZS7KZ8m9rwGLd8d",
  "key26": "2ATJor8v5CDam5jgBao5ZAWWSSRVSTCuwePs3zBGutf4F2fqTbXaSG3762iQjfSbQAi5JzXTpkjA3AwEvUtYd6k4",
  "key27": "3DcHQ5QdHWRHf2ryuKsmnybqVuRNfqNdfNpmzJrDtrd1CTS6EdogTuNwkUZWSbUB5poaCiYYtAiaECamo6cwo4FQ",
  "key28": "2n7fZpjiKTsmw6qz5VN3KcBo2fCfyMNrGqZbFvPSpLv4AyHqdNPoHfyTzvCbYXqyJkBs2XzGoTEFEM2uDMRrEcCH",
  "key29": "42mPRDqRpkf718X2dfCBW8AuED3vFDHJVzqBt6asKJDfvWEDHNzscmkcx5ofpTVu7i1AojwXahrS35EZNEetcxKi",
  "key30": "3nLoCpp6DqyQzSraf5Bubq2SiEQ6aUCVYWuntofD41VNCVbEq1Z7uhjGUvrEo3oMEbSj3gUfPk58dJmefRuna8z4",
  "key31": "3BPwaSC3kRxSycqN7vExeet18c9aM7JGthyrzH3ei2iv9Rdq8wUWruYm2QsCSqCTwcogZnLYk2vak4zdoY294xsE",
  "key32": "2pm1qb6VTHmp4gcNTinSkhEniYnVrVsyacN3RkagtqEqPXcka4wxGsSF1ou4Ln9jfB7Pp5Bop6D97n6wYTtRA217",
  "key33": "4txsLB4ymYSFK7ZFWUwpqSwApLTK9xThEYhAVcxAtiN8uny3zfZmzQNeF2BrVvJsbvx4ftpkiHcJqrQNRTcwwnvg",
  "key34": "3rhPR3vhyEHFCTsFhquBGXNnjCJdwdzLik2X1BZX4RJMYqZe2rLHje6c9P3Jo5Wa4ZxGif9cVKu9fgKsWs9qvnRN",
  "key35": "2A9gjmWg5TUbt4GbhGgooAm3oTDvjbyqGWeToMYn3PWGxAHFNAvkg8qGseD9xEePdvP1QXRG2AZvarz5fn3sHkJ1",
  "key36": "wakDEPSKgMbTgnW7Ui1WYXCSNmSoHGXdXCh2AV3E3bLJHCG1oL32JwPL6eBVLcosPX4AHqFBuhrqwfN6WQXPnmW",
  "key37": "2YuQNJKkHBbUpf1J1jRRdNVd5M3hKR3pxKB4PYNK9w3a89Eui1zwtpDVzMamU5eWp2SQU42W1pYfd9QMSg9j1ATS",
  "key38": "2ZFRG4ySFq3FKfVv8yKUjiq6pYaGfpwBsXrBdYTJ4Bai3tCmiNNzVKMco2nhV4rYiWCCs6BnSSBV3dmYHt5yjUnJ",
  "key39": "4uwKwTWiqDsS7StNEa6yQfmLoFAoPn6NQxiNR4anhiteeCZA1Sqyuuy9ELd4g8xr4uYwD4nVnNfDbQX7J43Qo2nw",
  "key40": "3fr5HGYDqRQFwFWPdweUxUC5zK9bEnDfhUTJLD5gKdU2JJMbd1sacNvqR555BeStfthW14kqnBG8MtgxYjNsoxDC",
  "key41": "4bSzrWmAonmMPXfbjJN7W6M8gzZedJ6G2KQ9Ywr3WymLZUPeWJwE8BrasgVGUr1cgYQgcjgSJNVNfzwCDXCcycqd",
  "key42": "7U9utZ5ck7xNoTbv2H5mdcANKbNHR2ydTAZbGuXBegq9gsCWTu2wDdNtYXkfN5q2fpLCAwamzrVeaD6jL23duvF",
  "key43": "2iT1JKo1BjFaCN112X8hxQykvrbpDzc9Ge7LtPEC9nYPdCgxLnJyZVv6AVC529XruUoGPn7QmTG7wQRvAGn4g8w1",
  "key44": "2qLXsjXfsW43SRvU3jnPyRUzPanF9Gr73sLG6gmNNi1CnAtcJSsGGKkvkiovYmYXqf7ziatjxJFpV74MaEMpBjaF",
  "key45": "2WHekN84HBLe9a2dhrYcz61asPVdwMSEXUFAgcREpARYSVuCbVepVzHS1MA1WQycSoD5CLK4PaLsNrYRdZem7qEj",
  "key46": "S9BiRo5cKMQZNiNP1tHhG3MWAbAZfUuUm67StGzd8JnkBTm44peWCAA2rA3wsniYPYNnHryWZRP7JaS3DjWeGGg",
  "key47": "41WN33MWnmbjCnmkic1GTGwT6xLU3nnZBdGBbcTtWXmDJyJddZ7mDq5Vo5m3Rogbq2Ds7oyY4FtChqShjRUqMcS3"
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
