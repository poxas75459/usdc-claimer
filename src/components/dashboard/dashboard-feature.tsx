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
    "yrwhYrSCpQHzswW9L6Xuy9cehnbgPoBCN8amzKQSYtjokQ6kB38ZvMoQZyzGWCZvjxjPNzzfmG6zG6fSCwb9q8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bjc7iqvjRZ2xqkJsYebgpyVXNXSKKQyDRJbsMGCKxzQcVXVUp3kdi3weQM1g3VfufGgyET2GJ7drNVWJXxVUZV5",
  "key1": "21LkzL7GRyzH4M1qym6XknjcqHeSStF5YZGHTxyRX7qKJEPFzXaLVwyrLjyjhK1WBED9SpeZ56Q35vbf4JxZD6EV",
  "key2": "32wmZ7ggrbApJHRkiFTYF35nby68aBEpCSqhsxJmBMK1uwQgZUEvnjhHz2CogEj6N31ei8WhewjNhNrwkBr5yktK",
  "key3": "5dZXn5xvRNj3UdBGcaqTrA3akBfDEMotEjv26HdvMsRa4ESAYXNUdTn55FG9UEurqm4yxf83sjTUewN72CCFpcu7",
  "key4": "rYDrBnHtapmHFmkaJh8mGATcd32nrz8zCYpD8LhNdvcEBwPXAN8RcnBxmUuUzawSQXVj5bARC5tkuD67ZKr6cgm",
  "key5": "2Dv2UWCXkDgRFEkGQ6zjhrHFX6LSEru1bE3pedWLfYeqKxV9YbzWcV3zDxD6vEhHrnFHg5MWL9qnEjR99BUdrCg9",
  "key6": "2Ej9e1oy3Kys2Povh1CXCYUN8GtvvY5qviBzmdE83QuUcpdFodwmyBdY3nStcCEkvhgakdVD3EqnjmTnuy9ceD8Y",
  "key7": "5rvdk62ZnAyCcBRdL8jYYs1WswtTgtLAEVwENsSdqjfyR4cicbwVcrf17JUQ5JcpjbvELem1YaC8UA6MLWZaL8fD",
  "key8": "26h42DoKefwzswBpWm8pTRAWxSt3VbK9WYb96z4yHJGfZbMBepJvQZfjayBtHAFG9Ee5cptmeZY3Mm58iPENtPi8",
  "key9": "4QX8YHRymiuLJUMTGopJoRwzNbJL8bfAcUB9bvzdu6QQYGYMKQUP1L2SNmNs2ZQxGuw7XRyyugomQF9Gqw2KTVoY",
  "key10": "4n7Nrd1wbrkrVbsuWc1u9RYKYJu7ySPXkMKRJziGDCWjf1TYM2gMesnvZKd2KatX4arvbW2kZQFU5MNkAzdVgZV6",
  "key11": "2MzujsJVEVsHUdUiHqVZ5Es1bjEfR5oEvuL6icJ5CxA87H2M64SWSFua2K8Yw5CXcKw9hDJ1rWpVDgnpJvaYzj5L",
  "key12": "3YMjXiWuskgBZ9s5RXKXS6VkdoKJuskS36FZuPZPsz7Hupx1QJ4LmZnE3Myt4yTEQeKs7ck6fVkcxnMgjkTXzq8G",
  "key13": "66gRpc1mFrK4haF2KesWhveKm2Xi3M877EBNstfW3FHGgYKta3vRbvfsKarF7b54Yzvz2s7BMjWm93JuxzkJ5MuU",
  "key14": "2QvbHi8q52ruTBr2ma8yyWyE1YheaLHdurwvGVj2mrT1raFHE8jkKAuV65NwqRLL8CZsVP2pQqom5cEUeiVDiLiF",
  "key15": "5iVcNRJn6LQGnGhRgGg2meKwfgAjQEZNYGkdp4Gfbfjb5ccRpwV7bxiKLUtCiGuhrcctyyGW9X8V9djscTnM4NvW",
  "key16": "5QCN95RdMxh1BWj9N3KBZSSrTDAoSXGho7f6h7yqkymNaiBePW2nD3Qu4iy5o2uTjY7eES7BPgGnYCEQP5dRVKAG",
  "key17": "33mXH91jyRbAUGCJiwDDdMYxP2kViCmFhhxjFE8EnWX8kdk3cAnYrpNN9ZueM9dcaZcRSKEmfL3N9PfHc5XcAymh",
  "key18": "59pNXpPCspbAhhBpgpZCXAzKipTCiMZqpDkE1WErMR5UwioRpJHK35rfT9nuGwof5Z64G1JGLZYDxKSo6GnmTSTj",
  "key19": "64Y1HUvXxaBesC1W4j69byS5XU75UCS8dNxbZUbJRuSqwWqpsmnrN336snZdpPiqkRqcjhBoitXzzC577NiJ7Epr",
  "key20": "59Yx5DHoRAxpeVt3idAC5SwuPkMYZFRh9Ls22wqNcqLYeisGnoBoP8bXC6uQbRoWVNRWun1PUEkRqeaRoaYpWkEG",
  "key21": "LMFhDvpjN2YZdMEk19GrQGHhGfgbo1pB6RTJ4gmGTPwzJxxKVS5DUQdVrQ5Bpk5MuASywTSuZiPLAmzwsWnsqJj",
  "key22": "8HW1XbSFNq8igEGSeCPSLzJh5g7ZWk16zyN4TuvwCBp7WyWUfGhgrJxFUaUSZ747qnGYFjzsynZpMLy5RL2kDXq",
  "key23": "2NvYkMSaD7uG5qf9tJnXzbruosbiDZfSxhYfZ368d2uisnfHR564bBGVukuBwX5S5c4dKsmUWJd91J2T1o292pG9",
  "key24": "2XTz5nkn29S1UyZmzgfk6mm2jKDyYBPpd3GXaqSEsMjqoG2C7XtHyEGq6sRoqsTg7EyYDf6HV856Gx3xpPYot7wx",
  "key25": "25A5ncGHdYd8fPvxkv3z1hT9Em4VKq9rreGANerPtHVC4Rzqn5iGxs3zYrB5aZKeuGnv463TEiZgwSAiH5fbsU3Y",
  "key26": "p4KtQ637LGit3mxR6ytXvojsmGrdkxkuHQuVixGt6DmE44keiA8GqeyRDdgh66R7kThQ4sBvQRTtrUkygygB9zi",
  "key27": "3eXM6ruNWCVTKmw3e6GxMDFB28B6g3oXyvrWRtRtTBZQpXMzSAcFD7i5w16ZxzwHtJ9GprNGzZTzeY9e49m2rVr2"
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
