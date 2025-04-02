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
    "5whyVJzvi5yPQgVCqaYM56wvtR2Yq54r8c28b7SFhghHBpBKf3K6BAxqhUpQyJS8XLgavZyZV1XdSSifyyTFwDo1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e1mkiRyArf4Ctv8Q2vnea8dAN7dxgsL19y4b8asvTSqqXKMUsisr4W7HgFxLAayW9H26PXKjSz3RBUCEYmyLqQR",
  "key1": "Rkcr365TjtJcWKfun5sUtsf5vQujjeMgG75sVGRkKSh5pXpx6GpC746asHKbYEK5zrhxEf5LPMSH3QKuZbbrCtk",
  "key2": "5Hewzx1QXxDGEr5RFXbA5cLwq2C4chQA3jjaKHsxHwEJVgb4bDb6BJkjzs2a8yxURPPTmq5JwguA6QJLqd94gNyB",
  "key3": "boyoLXYBvAZFa7uweYWGgP6B3aM1Y12RvMjbtyTKwA5QQCAhQzmohoA41sH4bcBez98ce2YMPL7TrX13kTxMNMf",
  "key4": "5Q7pnHaANyxxQMQMTCvnLsRqfZD35v1ZMv8KsKpFSQ5m9YD7HHJ9hTbwEXBX43VqYby3o8jUWPqASGmC7jkAGP6p",
  "key5": "2FNNjBFQWnjFJ7ZKMGyR6w2fejFhkv5MJN7U4E5e1XjSxaKKFWdsNtDjcZKT6mgFjhB4w2rGQEdoP2bhfwGZ3R1z",
  "key6": "41CXpNpWeZh3oP3HrSK6jmYvYfbqZ9jJr15dWakRmbo8BLajC21R4k5UnuZ6fGYR5aBK72xXyn521yPcAVtXLi7s",
  "key7": "fJmfGN8ECSL1P2diXpdv88N3FLwPdLBToCvcUYckHRceMTmFYQ3ebh9aU1yK7aL3bU78Kvww9j3S6YFq6ncvvYW",
  "key8": "3N3sW1fiDxwUHmiJs2QMkoagU3YLWrXkgeLYyTwQEpkoBYzY6RySjTqDrJU5hMDH6hrbQyAR3fjhKqiH61ZuuRAz",
  "key9": "5km9RAgcTSSyn6PunpW8mDXH5y5BtcNzJskxXdUVjGdLs17i6ZRjat6KEg1QsSvDPsgdoPvhimWme7DPexCLZrFM",
  "key10": "3CBVAQQiXELe5gwUjRkFx26hAjWjZQF27ToprufDm7Lv5r86oTRSw5op917m9DAFB2V7hAqtx9QBqzH2mskBaQ4G",
  "key11": "3SMbRrdTqQ9km6PPJbhd5Z15iUG2Mmq5umFrTD3DccgKPXb8ftNkc3iiEqqVwcWy1AdhBobtzwrh6v4XVvokPUwQ",
  "key12": "53nDWSjNR3M9qrt1M1wqeGJj3WFVyUovd6SrSP69EQVtzj7LBMt8eo3NaXtxPxw7R3SkeLBeGVVMuak63bvbLQFL",
  "key13": "2qdkPfwL2u62JTfjhwtH86Lbw7W8pwf8R25j9dpPwtzq31x8UDbYBMHMDwPxQea8zwgNwiafxxVqd97meek2KZ7S",
  "key14": "4rUFrarymr6yuUw3gAgpTnE9EgjjPtppbvotkCERHyLxD46TumdvM9vjqXAk1pvkks9zPWcWFTYsjKWjBg4aCRxF",
  "key15": "ohjLQxDBWwzUMUNY8HNDXSGFuTo8Jre1MHPz1Lipq3J9gr29jPJk5C28wKdHHzRkWpxtFjz8uG8eWcipadYCsjs",
  "key16": "3gjGZk31DrG3zgZwJGkB54a3XiL4o8MJCrtyFdrzzh7oosSPNjv6j9HpByHDax1aXKd2A3B3S9vihf7ZpC3oSaQP",
  "key17": "2F6nENDguQYupo6nQ9wbYSQRSdSCWcCGs8YtecZ6ugy21tegBxZpXyaBsgd5TpH8MEGTwveYzUv53tmPHnyRZKwL",
  "key18": "3yZM9mN8RxGSQP1PaoJidTRMHZKB2pXtW6xyjqQuVfLiqrTYPp3zh8ppwujb2owr9fKBwR985ceKjwqSq75F9cVV",
  "key19": "3RhavPuVSwhMUjYNuexPfb11ntWAAPv37FH3aeu4JJXmLXqizcvRUeYiNM51kE6fSGKdba2TfcNLTzWqvoVU3msP",
  "key20": "5Thf3HjMRnVFLs27HhHPg9v3Vubxf4J8syzLBV1meSdxtkcuLrgvqTJHWxPAJtT9grgGhcQeuuvqn6FAEuzd4RAy",
  "key21": "5fvissW2i2xVfN3p6pia3yknyw2PogewVkXpeA5yC7SxrqVgGWJDp8ZCPswGkpe1dCNNjyJrERviJqCsFN7tUzFP",
  "key22": "5ng2UkXsFFBX5XWfZYVG8aSaYaYk6gS5q4dfnQ3JUUiZXrvXXbJgX4LTWkqKnrR7s6AS6szeuYFwFHjXq3hrUtFm",
  "key23": "2qqNkG3jjJFf8SvMjKBuh8MYteQRfXRJb75Ur3fWxp2NBwEUyYPGxCnHEE72Pqpeq1ZkwuKAZjNbheHYFuHXpvrK",
  "key24": "35Pe8rTtirA2zDN9uBDJ8L6Pufq5GmURYgPtnmuYr73e2mDof1tGRmHtt6daaznYZjnmqb9hfSXzfc1qvXmVcsyQ"
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
