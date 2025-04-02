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
    "3PzMCpRoos1FL3TAY7szwDHKQwtG3AADJYDyfY5tNbgRE3vty7fLdqsTBKWuLLv1ZiKcXWuYxQ3jm8kTMcZcWuqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67V8pKDGWV7HadJMDLFkF4y7JP6srfrZJFim8f21bTD33Jr2F3Kvk4PRij9E6FbLJ9cxNE4JPyuTH53RnAfzQKWC",
  "key1": "2Q2eDVFVh7zuvMThvYTdv1d3wSGaWVc6y2MGGp25sBM8C9QMfLCKFtWkJULWq3rh4S5FtfiE7aKt1sU2C3AnmJEE",
  "key2": "34VARbed8uVW6i7pRyDdsqhcp2fzAoraSZvF4Jtsf2LGwQhqEEbYC1ia1mtg6cV4N1H5e11pgJ9kHewitUcgfQTm",
  "key3": "4ao8BA67oxTcNd17QD5728WdR8wEaVsenvKTiEkkwKrSLwpwEr4Pmb11hEHQbgVVBxcH3aFGg5ycRjo8MtHVffCb",
  "key4": "211BCBG37mAAjJzQsQJm6sDG1APZgKbuUDViDbthjK3UJMv2mqiMGpQkQaQXyP4a7vrTTTaY3gp2oZWuuJM5MF8m",
  "key5": "4t4thctqBqdKupdMhKxHUz6j7GXQBMqJEnjmNR9NVM2wbB6Js7kiGbKboDv6XR3rHuTEfRJYAKYn5RGkQRe17Pdq",
  "key6": "rkicRgRqhpkZFX9Yjy2Xi3B5B2FEnCeysXnWzJeZ5U3er23VmJzoHpJxuP5NCMrWKMqj55MyiTrHRx373gbzh33",
  "key7": "5n18dqdP9taeRLGK5Q18HouUWxUrXgVUz92i5t7wBX1zt5Ljfw3U1xDh2w6Gpq3RuC53xVhyP7LFymqCLeHEDsmW",
  "key8": "3zMTgYHHZFDzNp9yEAQmnPz9gYdA1ntJTQpWVAFhQBiuMWZNhYc92Y6dsKW2xzJarQsXKma24SSLrGxUE7hvsWFC",
  "key9": "5jjQN3eEvbLNFDPycndNjvyZaWWoMopso39suRN47oHok35an4mPB7v5eGpN56sM5JUozJXMDwkv4oPy1vENPHk9",
  "key10": "3cDXaFHRVu4nFkAhAjEJX24xpiRqgHW4q1CDBRnduYD6wjntyXHucD6b9WicoCVjUWHfyu8prphE16AFbNjY3Z1d",
  "key11": "T8acn9DvaxtwPUbM2ZDLfko1g2TrXj8R25XgvNeodjZN3qNuTtkuRwj5whMKPCjLdHnh31J9L77YZEY1pyyazT2",
  "key12": "Lq5MWNMVqVsKGhPZxSCWQVRK3fXGs183hfsBiB1xb2pBEgXZe2SHbBRrubQc1ofP1gfPuJpFcPQFkieZx3HDBGG",
  "key13": "5XnrerHQh6hSjL1KH7qPE3cuxzFt7t1Vp2U2g7Hx9Bt3iUQ4h9HrteCJCiyqv3pfYdj8kUy468NoCdnmsSmSkLUL",
  "key14": "4YEPSuKqEoG3YPCrZKSgMqd1BgWS6FLJvqyy3kjM3SKJLGJecgHX4aq4bqDdFptT1kZWGCqxKM4rSmY5wNijkBCF",
  "key15": "3s8VwkFobY8T25eMRAZVPHDL4Eu3k92geAe4MUx46pV9hrhgZUZi9Fd7FsNVYkHkUSp9xXMpPSjj6zMivj3oEqGe",
  "key16": "2mSgqfXXbDyjK6aPhWGxwMyNWiqLiHrbLfCqbgdhKhpEPGbrw2Z3cb83h7MZqiazvgoQKnekoQ23paiquCyTCdQC",
  "key17": "5uAMBtYfGaun6o4fAjsHCRsJ24Mj54j3wMnXmQxD9Wp5mjNv8vBJwSMju2uLJFJjsRbVmqQXUiNgbZAn2t2J1YGP",
  "key18": "4DR2zuuzNaU6aif8R5oGFW5AHQ89K8PKr5PCLemgVUQ1phkxyMwiqzHToPLDm4zGkdeS9of1HYgcQ6UvQiUhJxhd",
  "key19": "2f68uK5C3rMn2bVTFUN2qvLoU67VgJCrbt3PsD8qVri7ni4Ug8Vp83W8u9gFR7383fgywn2HSeQxfHxgbEbAbmgM",
  "key20": "4eX8vpwECBRyZSodBqacLBHXLbqC5fYGuD7ukKYpuSjDGkyaBoYoWWnH8f535hfsEGYb5SwJaD3vPKYEKvVPzCEx",
  "key21": "wEwTFuq8rn92dSGs21yVDyQFzHCZeibbDk99dBT2MrzrBxhNb4GDEBF1LGJTDrQEsoA7WgpWAMrpr1TkyBES3Tb",
  "key22": "3A5ZkKMbvRqUqumA634T2UkUT3KTwM9uH6PweFxUsQXf9KkR99o3tTvi8jSq1rGAqmpPLEYqHrQaXd47Gfcithbt",
  "key23": "4tVSrhevVx8fBJbfoL3yCr4YAtyFzo63hCXHVPs1XuBwAMoLKPnEzw6B3p1xhRgi5BPRu33zjE94BbF9HL6uY8mU",
  "key24": "5HQTGkG5toTxz8R9whxDipfUK9ZEJ2btPdpJU4kdRwaD9Z7QA6ossiqioyBdcG4zMuPkfLaMJDUuwLt5XBPSPMJt",
  "key25": "ujZcEavuMPjJcJsmkD9FsmcVk9uYhFUxi4FQUtHv22qxLfM2gua7rrpVkLvRRLX14gDEkrN2CiCkeK35U9VwR6j",
  "key26": "3ucnchBcneHqHXPqAaVdX8NpaR9BkpJJS86X717MGmBqRyYjJhpPttwe7ErYGtnhNhLFdGmC5UxJ8XJCzzD6xYNT",
  "key27": "2f2Er3wkLzXb5Ktj6E4R74g6ZgUuQuArzVC5D4JAc121TNVKM6eTC45DB9nARGWmGgRFvFqwt19XV78AWMkJA1vK",
  "key28": "5e3nRVwGaNcLMehyASHNBhV1Ez16YwjXgpcCMMsZZERm5XGWJ3vSKfRS85n6mXtaXcZwVraxErMvVafdh1XHoNTj",
  "key29": "5GxtAM7vHkPtcGrHM6EzoM3eWtcDCfgAtqpfCParC5DcqauA78YiMsVcwQBKhVEd7dec5wduZpg6tcPVZH2HUhm7",
  "key30": "3LJqpT9mWxG5EUfGgUE23rF9PX3qt1joX3Th7HLPxuWCp5UevYBDEZ5bcippVk3sts5XWBzawUUBAdVD3ZE4zjVo",
  "key31": "36GwAGzn6UqV3abriRmfkoUbUUmqTRmpMAGRbXd5qmnWjrN3DVc41UV4nWazpAT3kY9YtJ93RTLRwDafmqfYGwHp",
  "key32": "58CC3MBtRLCCRNyh2Zw2Q1qeq3oom3YFLuzr6zxQq1c1ppUDJC9FyEkREEfkuh8eHgiNSQScKjBi7tj3aNaejsUY"
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
