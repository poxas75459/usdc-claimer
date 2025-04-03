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
    "5Y1zWjCgHeg2XSthbf7RiURsow9H52WdsJemJ5RuxxEypwSqAyvJeEx4HLM4oKKws5drT915fwVpYcdoLV7XB1Kn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rojd6VGPoKeMZ4AYDksebKVd62jA22AnqRBfoYDmqupgHFZX1JGovRdyperp6D1oV7fbFq5b7feszXH1JK5fHY9",
  "key1": "3ZjAnMzRjtjunc6JbEjjZ8nzZpMAzhuiZ8EaaqHur2dtwz1KVviiR9BMv3E76ZxnKvesMrRVVjkSv4F3PK4PkQ6t",
  "key2": "5qXB9aEKNGL4sXW4nursbN98FQjgSwTZ1x9kfhZSYX1PKWWxWjkCrstY3QPPxDyRmCWixNgWtQqk1yVWiVLBKiVw",
  "key3": "5XYtMwdy5aJXvFw1pBrpKPRp4qnno2nVEcysBNgianMigN755RFeu9z8jdZfGTq4YUUEdX7dXczvTjJTSmbtst3D",
  "key4": "5brv8ncWp6BUMRSgaNofGS7cXQphTdngwFc8ghJpi5QB1h1B6im2wZJSbgF2hPKiq9dFPJQ1qj1McdKEyVvnjUsK",
  "key5": "2u8ATL2hfPge9VHFaeebY1A6Vs7ogvqNm935ZPR6AF1Yi41xkuR3twYM7X3nXNaQiieUkt13ZPdk73xfX1sMByL8",
  "key6": "NAHBYeApj7qnhYYXuy9QQCJWtyzJYEGpoWDRxqaSZGBcPgPiWAyf8P9vAj5cvje2RtMgFKTxcvu92yPUf7gGAho",
  "key7": "3DcZc2cj9YiH589DmAFLbJtcu8hDKDUK6optM9e7NYkBCHDYx7kimPKHFdQcMhFUkFKGi6jtY8KZZjfRKhpDpUy9",
  "key8": "5TKeC5jVgecd4hfByXbaQqrADiGLJ648EWXaRGVZTSyvE6exZ2dKHLgp7KhAMNEuWn5aDUb2HSbxC9KvyYnwN57z",
  "key9": "7PfjMaFgy3EBpQbprsusmVeugWDs1eM7wYBTxyH9RdgPBSbg35uWCNN2VV2KMHwSziVMyMhqXPrnioZsisBKRYR",
  "key10": "5SnGRB8JgkWQJXMHJ7UpUJdjaFSZMUpB43DqwDHA74MUhfWAs6cY5X2gZhgwo3zicWdz3t11L4VYr2gGmqJJbDKd",
  "key11": "4VgWspfuk57ZUmXq8j3g6VuXKZzog78rMcPPQDbSJVWrpDKejahkmXnnjuXqrX27n77DTn1384CyCyWFZoWK2Sti",
  "key12": "d8iC2k6Mti3ZWqQqtjk3ok467NyWpxqCoinQvoiGp5sUGLBbN5TDL2iF7zSPQM4jAS5c4jwACn58voiBMnPBD4w",
  "key13": "2pSNnLrJuUN9aGUJdy8Qmo2CawgCDjxhsARXEJSLvx6WoLRNVvqqChtncZXAaKe2YpSYtSrwc71xrb2DSgkKnfUo",
  "key14": "r3CzMP5jGbbLCkRyKFXjRcogFBqTD1QndGhydPnSiGfBxrdu6tceb8kRKPkBSqn9D5Kkqv4o48zjT6oC3jpJ3tc",
  "key15": "3rgVBvFnvJmi3g7QTYHkZiXHKbCTSA6EqcL97FQBdZb34fXXZ9k6S7LxmyW5sQ3C9dGM4fxF16hLH1a5EixNXv8w",
  "key16": "4GuYrtAyHBizESmb7e73boWSoXA6xQhS7K3gju65av6Q7cPgMrBz1tiXFDohSVv1Js76KV8vA1KEesxyiKPmjR85",
  "key17": "2okbUfQchBDGqiDxiKzeQkLhBR63N48KsVpFPyX6QPKjq9F3vGEU9konxPVuUQaXNayv8sk8Rry6hFi9qk4hbyi1",
  "key18": "2RTXCZrKbx2CSkshNZCzPts3s8GYfoJRtm5erVCbLfnNj2CdSpjkVWvKEXp6C6KnfCiucvYBd6M8cERRuyJ656ig",
  "key19": "4BCs49Ts1iJ3kb3u3Hj5XxbxiWLcDAV6NjE3VQ3M7pFBcx4oR8vanUSQLFDKjk6SiSQxUQFeJD5vpC7a1qmej8v4",
  "key20": "3xocTG832GjZUhQeMDZw1hMyozkg26PZ42eqLmydY5wbv8kQ2Di8PSA56puheS28gaGTXnACVA697PYx75UYsjVV",
  "key21": "HxiRYR9YEYVDnqzUDZVxGvbJynwpQmAR6U8pn6i5d723b41qzRYBieFFNH4Huju1GgJin5BzTEk1795h2PvzCqk",
  "key22": "itGnFmYk1QkciMBkmKHeuuP7CwQmab2L4EVnDdXQF8qwGQCLm547dE8XXNh5uCptWZ5gTw8Xrqk5hgdzVQ6y7Hk",
  "key23": "5V3pdkTxoe6gPgkH3XrPzMg75nKTREFbNFozXsgn3heWFYuwGpfpzqZpVdpFEgxxu3NT1dKg8D6w5FKScx4KawmN",
  "key24": "4Y3bC9mNbQQzmk7Zhz671xXDLqa1E84FPRefqy5FaNfoSue5aitLcaXyfZxw9sbdeP1Ka268xuz67gY8co6Jzvmk",
  "key25": "4EFbkyiiD4Rie5iTfeDvLfukbB1tBBY15fEPRRS5QSLsEUcnDzNn6uQMZUvmyK3FYJkFHYzapU8LY5VpKNJhmzdt",
  "key26": "2127oVZkTDvmYiLL9ja8KSbcY8Qbq3zz6dvpXfbbTRCjnqYTocbuEd1ZejBHtZfmatkKKXBNjGyWKuQG3Ng5JiqL",
  "key27": "3gh7vJuiBBMGoRbeXhw1SU6NQhUJYkPaUxtyUsumdq3x9v5Lh2s31xdT32ncg6YkbHW9s5cnyrK6fApoi8sbAfLf",
  "key28": "aFgMcVLZjSJo2rD8Ebq2BGDkR3yjaA185ZnAimMm2WdPj4Jxh1a8PfQZNc8Y5GeuvNPuWujrwF1BQKg8WMFjzYZ",
  "key29": "5XsKhnnc6q1MyzRkzt8v9rkkNWeRRdSyrtcsg9iZUvJQEP2qd8T1NTrmjuJhBAd3FyXQVUb3GfiCKPVas2Hayyfi",
  "key30": "4uBgcTdM7K29KzzFSo9tzGEF7NycjbMu5c1bGQN72xuTL5czAYoySZo97AqeztnQJRDVJ2h7uzWUwAS5mvWyMANp",
  "key31": "WBQUUkojv6Rgr7WmT7txmWB2ugRAEgeawSBVhN9QAeWBZvd4TWVumfqXBJVmXV55HsxEPviDgSGv44HjDDLVfV5",
  "key32": "2KYLWLQufHKdo3Z89Z5VJMHmPjFch5b71cZjBBbtoXHJpDtKMsj7c43U9yCSUKv5PfQQNNVGKMgjwSQHEwyXrtMC",
  "key33": "3rhCtW8z5x4ucQzLx5QxAXMXpUU8r7WDFcj6ozdmBHE2aUAy1JF6C38otPemFMvib7HtqijkcyRrqfk75Mrd3Aua",
  "key34": "2cEBLbrn2YDKbwwcPZwNoFtnoWPMenTNBkFSiwiDbQukeLHzofq2AbVCEMG5BuCBm59yhk6gQ2wLaMZFTRvRBc7o",
  "key35": "5A2w6H326frN3o88LePuzyGED6ogHjLAbE4qCh2Fwjgt5QAZb9HXZm2FNRnb5iFDvmMn3n6BJWvSb7JQrcF48uY2",
  "key36": "5v3piMbwHeveLodmy9pmX83qciNZ8eXgVafRgwuX5yzJD3HTBM13ft6LG9aWRzBNXT1toJ8aZ735Ho8P8XVqCYQx",
  "key37": "vcuJREW5XwA8YEKH18WjgxBSyZwAavivbV5rn86grpSBP2BtPjp5Le2Xc9yLnhnXF9ZhQSnKHhXgJisZmZiPZ1f",
  "key38": "3FXwpURZWBkr4o9oFge1kJwYM9KySssGigTbqab2beKCA7kkm44suywHVE8Ear8cxtdZFPYPLKddxZenjpk2VsWb",
  "key39": "4TTbN3SbCKQop3SVXiWhn8RgZM3UXCrTeyHx4v82UDbKRqqUbHoc9A8Nx8kcZqJKpt9LjyrpxB9gFdhk6Am6pj9U",
  "key40": "36NSh8XUmHfAVZ42NBYF8zFKPNepptduvXbFmKaC3RqF2NdpSJGedSXf5J4RXS2p4BJzm9yfJGggnS7GtG9bRjg9",
  "key41": "5eL4Vr6AbeT2soeitHi7aE71hKrY32o22pv97KKkCpQkwE9qfNoSqnA8gBUpYma9j28Xsu6DtS4XXW9KBYRKk6RS",
  "key42": "5fC3ny73HuaVD13ELDxrbc2udsL8L2qGkVoVwqQvTBr7YUBvu8me7YPDqKYopfTen9SVzheP4G3sNBRwLkryHd6",
  "key43": "5DAH9vJ6jrAob7URgo74RMEGnarGmfr921AWGc12wdK9frqP5CZAPpynoL5Vz3JtSg8d44AuG6RA4ek2tt5nbJvX"
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
