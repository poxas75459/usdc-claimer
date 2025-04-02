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
    "43SxsXGmuu8FwhjJ34emZVdVEB6ifQStPTAt6pYmMq1ZEu5LYgqSs2fL4t2qGHzkBinLtkzrnneu5vdZGsTRJbhQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5otfgsRY8t1NrY5QWuveNcMHEax6EumoZKacwDmdF3PnSyZDT2XpsmLCkBrHPrbQadY6XSvPKAWSA6Zm4PXwdC7C",
  "key1": "3qZG9EShE7E8L2A2g6Q473CKGCzWU9KKsWgqp239s6ip2K9o5cdRJKyYWjPrBgBnwVABzV4bK5HLepb4FGMRZicC",
  "key2": "3HH3bdujQYnFmr1bDt6cBibQijEyJMgYpuqTGS3hFshqUQHFZ1DWaQ1MJGoh8ECFxzZgtBusm3z1XEv8A6DRmTZ5",
  "key3": "26JPsTy561pu9TaPr8CEf398nM3FYff7fXHd39xGH9BR7VQrGQUNf38i1ZLQXsvN1S7wubtM6RQUZhjYTpixrHtT",
  "key4": "4yFEZBk98kVLk1aNMitKioCzm99ym7cGKwS2koP4d78TMrhYQFLjmmeNd5EUAZDRc4SMB6XUgPSbEPvgKe219SpW",
  "key5": "35APuLgQ2eAgNj6HwUAHU3aGqjZghLHQf18qkuWHcxDnNi69wQ4qFLWNPb6312QaKv1HfoTVz2JGD6xpzjfZ8WAX",
  "key6": "2VB6gPRvodXwYr9ATs3jU9iBf5UzHoQpUh1whC7M5hCHrfjjP56JVcFW3V4WAzC2KNXCPqXG64pFPQ69WC9EKgLT",
  "key7": "3fvofXGR5THRPng3dBfQZqGPV8nnVEjyXAxyapK6RQo6m9Wfm3EmDECrFdpvusC4A4h5gVg4qVUXEoZQJvrBzKpf",
  "key8": "3GXMEkrUKxYLTfQhFfeq3xDJLUFw629zkUHKDBVYYvAne3FwMCd97shNtacNSw3nBxedWeTWxMaKYs1cF27xafbX",
  "key9": "2UzXcWhRitfpR1sJ6e3ABtD1bfn2msbnp289iTHnHbHbB6465koc4tAJvaCziutknuecqQK85krmeo5d1CpB5eXK",
  "key10": "5jvd4TfrxM6Mx8CVnSEZqa5dCHWLzu3NdtJcTE2na9JsTd4NMtrFTpn2UJd4HBnMY74eWj6HY7J6rBEtTd5HsSX9",
  "key11": "BfUbRtxo8ZomoSFVGPoqMQtF5dqeyWYiCrvA68WA5dEsrirci7tHUuQ8QmChn5yPw8TRXHYAjQGK9hKx7zHmveH",
  "key12": "5B3spCkHzFDFpQouNjAxRVdtGDmZLY6YUKnxDdtSw2zayW2LRwiHvoSCUZtzWDwGD89jrNbrM6DZY3TMYqFaQRmM",
  "key13": "2XpL1BfjCcrNCvwgCmHhtJz8KLg1DfNfSVB4xPcoRLWAjPV86tz9p2P9CKsynVbmyUPWZkXi9brSdUVfKb659DqV",
  "key14": "i5sjkjay2cLWTH9otr1YeizR8i3c6MG9ADFYgX4UF4i8EWXFqg5ScYAWR2qJWbhcqVD8c7uJDzucPMYrgTg5BQL",
  "key15": "3y9J3mJArnCY9389keqhvsJF1ttMjbPF3NsUpWQirqKbgfy52qFq1A3D44jAaYqw8qE849xonTaBMRpmCmqmaHX1",
  "key16": "3HokuvBXEA289wkGjepSfwxhRubsJQcj24uEgpHJQWh9u3M19swoCc2xbapYGPfvYxZAJWiw3CqBhEW5rvgPRhG8",
  "key17": "5die9joL6LTVZKdQJZCRQKCrZJKKudDcJt7fiH11RyK6y2mn2rKgU88Mne18iDGA499aCx6YM891gZ8f6sjybytq",
  "key18": "5PPx9gsFEuHeXNVn19wU6MhB7cFbFi6ysTDLCW7YYctK3ydrVztSjztiHwoBdtwNqy1d22HQvvffJCKPxNjvBEtm",
  "key19": "5LzLBiXzrukACLXuX9QonQVnV81M65dNcP9YUnArotPrFbuN9VkmmFyCB6oebTYrQKy8Gbibn1vLpNNaWBioC6Md",
  "key20": "4hHmNfs5vjtuoXWw1yMmk9aQ46LoLgxQzU7jtBFBGRUxYGB6eyixnVvi6XtuZjJNtZCKYdE6sXmZ641Mj6aAbckz",
  "key21": "4BzEKvxNQoWCn77gn5i5N1gtYGLQKd3qK3zgccBp5aiaoGRkiY1a6tJbqnBSYXoBgwtPFVoy4CeiBGBxbs8MoaW3",
  "key22": "4nXhk3275JVTmQXP6uK5yNrtYxmb3dqgFpFS3BAYckDypeCe9ZRWaS39ScrrcwGLdmztVXUjLqHWgU6Se79yHFQi",
  "key23": "4hpf4KRSqncgpUGqfDmKmKS5owuMj18z8Ziok171koEBR3CLcd349qMSuGkGUw3ty9fb1hbUwZzHhg1FwznQEJxU",
  "key24": "4ctzBSEVR82MGMAq8QxXReZZR3j3pBQaMUexw1MsxNrRu5g6SLG8Y5NdKH4WUa7tAvxgTTt9bhTQkZds5MKhbBz7",
  "key25": "25KkHeiC18oxqE88yMkVvZabNNnkyegLeYZTD8W1d4nV5vXpkrTWk13mXrVp5Q2sspUSuprKNNtXYJwQBqu3sQLr",
  "key26": "5mqUGqrg9pHeCx74JyjR5AAKeZ72vejpTkotHkXw3i54zBmSnf5TjnFVC3TQ56SPZ2EnABqucqh2LhkwActXkXPB",
  "key27": "5eRJhXjmX7Sf5fNQotTbWLai14E3p8Lh8T8J9Vk1Ghf3eME6euRPnLhfVW9UyH7VrRK2uFMc8KNpnoq2PJpMiwaM",
  "key28": "2ewfHEibCFqaprCcimPbEpb1xYzWpRM7n4fBNRu762oRmFdkVhSzBTLTpzY5cAgv3EsZZa1MAtZvCkeWEWxTwBY8",
  "key29": "59M6jaLETUtZLp9zxhCbydM4iStqqf7XWSaNSD9GGj2ZVYV354Xm3dFS6Y71CtpYtnU1yxDYgNfwr7QkY8Wpw5xZ"
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
