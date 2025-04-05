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
    "3wPK1VcD8UtwYVpyDTZkX1tvHeKy8igpxt6muk8EwMa6DEqufquupd5wg1sKRo6RRtJ8kUbmwST1gPwhtjEELGC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3diBfyMVST2hM43wMMhKQqejTH4RY47DyRobio8yBhBS2D9E1t7RMczPzJaHUWEF48qcnnJgnz9RoNbW44NgkFFP",
  "key1": "3w7nCJ6vW3W9RDUyD6uX7gGrQxaP9UKpFwTGBA4uqBThwaY6zcsJuNRyL75zhhu6PWxyMuG9Abzd8V8KSHYrDQbx",
  "key2": "5LJ677HnyK7s1aNvRo94E9rmB9zQxciYt6mHyXcRufNfErfnfvkAuAJaj1xixjiFeTdbcg8St7RbVRy2keh3WNCv",
  "key3": "5QAEYsXb4SWiAMEPiNygiicM2DenP719PenAHR9rxLnxLaJEe82CoF9Rqq9ccd9HSRz3artagYUXdws5JSJ7TnXE",
  "key4": "4SMk9PFMSWDMp7HCsConiCCTLa6GCAj2CBADa9B7PNYb6gtbnDpwbwPM24HVCQAQJRFZWuXR22d36NNJZbkAxkZY",
  "key5": "3EcuW7GgXATcnXpJ22zte7RhmDymm38UaCHikmxAh8zDCPy94NfjoiZA1JJmFhVkLwFMRaBk5mF43epHU5MBkkpv",
  "key6": "62p1er8fESTQtx3hHSMzFyzP6p6p3qrNsbg6b7Ak1FCk4ZMpM9hELXhbtANBjNJDUsRURFwNRzLPXtkcE2f1UZEV",
  "key7": "4MKwKnnNm4zdFg1GEMjVrSdPfYYcDJPuAGt3mQh8RGsarGoPAXx2eay4qHrCiXPmitaHzyWJJM6ZUmJStaQ8pnt9",
  "key8": "4EFPCkQxKRz43hZ9snMbh6zeqfgvxenRff7w3R3WMKiJXAZ7jupcdFwFdMiPyFd92q62YCCGfAQnvQ1M7qVDNAaJ",
  "key9": "LoohfujNW5dT6n8k1Xb8fdwF1hWVec3hUEgovYV5vgvrajn3ZPbeaJP6wXgN6ATwzhdT3Xzb85SAZXqqvhtCsKA",
  "key10": "5Kxf3zsnx1VoPQnViux628GxBXkydsbTGnXNVXefR1sVm7d1P888ax99AhRYViBS4rXwzhorPNGgFDkWosrZFRGn",
  "key11": "5DEtxBTCmujnSPZsg6oJXfV4GggtpAPQTCxDL31FWMNWnkJ9t6Qiw8PedJGvXLXPbnPL6LC1ajamb7kawxQ4KLjF",
  "key12": "2TMj5t9ptFWBUAYcbHNLTyFN9iw3qNcyhnWqq27Bm7aTrzNQDh24PhX1mFzRGa2YZWfWd9AtZhC5eiFXAAWxEt6",
  "key13": "z24GB4AwXob5YmE6bVcVLsFHVhfiuwzj2kFRfYdSRZqzA1o8WDaxLZGwLNi6yh3MNWPyiHyTQGYjGZsmZKH5jwx",
  "key14": "3eHDUu36mwnNWWrTfWgHDqStkJpC8EqWubv2hYfnRakD3SknWhpNWecw2NrzGQsepfFQ6nBEWUhF8CS3quBYFZEz",
  "key15": "4ZHX4CEKYT2AUjF52CD3cseKka6BaKnxsaar4SD7km8VuwztjGXu3qYrqW7Nmwb9ZJuDksUoWXtNLLa1oCU4t8ay",
  "key16": "6SJnSUuFrToXjYC7N5p2UJxr26NFZvjy3mwNetxyhX8HT4MAFJ1YEqm3X9xdaWwoZmvasGkk8X9zf47t5QmhaCp",
  "key17": "513EcW3fcao7d8K4NHxgRcHoFWumWi4xLV6zJPYZgB8WwfNzbzzPmxfsfXeggVN8AvhYsvCmBG7zDWW73K9uurfJ",
  "key18": "5VhFreFNVCcfuGUFdSUM4LHaXx7V3tebnj4cST1HE7C4tyQiPomKFj2DzvDRB5C9sSo7Go4nHQcsnkv9dhzfm5Xf",
  "key19": "3UxJ5dwJYRgsEB5AsyeAhCcaQQMcs21aBunzdarGAC2ep8eAowafeTvpQxN4whGsEDfY7LLdK5ZHhYbF4SGTA8mF",
  "key20": "441kmKv9PYDBcWmU5rfKQM3Kg68wrsXJXWmrEMWdvAkuT9njXLiQZJtpbaMPP4MAUaMKaU3vm1cz8pbENa6bpTM2",
  "key21": "423iMUQeSB9pYTFVBCdkQVVBFh13WxFYZCkLAaQwokUyZgTvGkUsN9rybvhe7fSB6JcrpX8yYYKcyp36FwfrrhKV",
  "key22": "2YEp4pqxizJN9WGwx7qLNXgrZHTvb8KVemZKQaG15nEHeRuAdkRLxAXYf72sQtmyuB5pUdpoCFgXyDKqbW1uFtpz",
  "key23": "4esdhDc4s8z9HZvhfTksky8FpEw9doQP5abmwYm3kr67moPj61SdPy6Xf9ynJcWB178k81y7LaSJSiqHubazMYeF",
  "key24": "37gjL8UC5QzAfAwVRSDD7jQtJ2A5AcPtLhbW1ttEnJ8F5Kq7bTPUVJRtUc8S3Rk4JG6sfaNHsF3VwJkniQaWHYqy",
  "key25": "53VrHmdQboqQKn255zMJpdKDGcGMay6t8ZGPsVqwZwo1TV66QvMwptTBhjTtnMwzpEPSAzGfMasJ12h7qAw46Kka",
  "key26": "46kvufS3QL9QirZcmeKqrHQ836ENFEKrgJzHpSE3pCZwDqJHXBf15g6xGmjGXLR7PRtP1mPa65CGJUGWmmFBMtwg",
  "key27": "2Gxpe5VWC3azCJSzi4xbvhMB56f6a2wVTMdMnq3t6x3TSiyYeHdxUCg7Kb34sYer2rrcYDcUtfoPCYceTDb5bqCn",
  "key28": "5VW3RHXR1aXGdAy25vjU5arpWm5CRxFvekVyxEYV9GXatrmBbgwHb7wgywe9UEZHUDATWbh2GJDGtzbEsWzeGR2Y"
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
