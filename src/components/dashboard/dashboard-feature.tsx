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
    "E5cPw3j8aXKucNP9zBBxAfw5JNBPWnMc1e6TRsnvcTkfXHddFrZgjXU1WhMT8AeaVDxKURNcyDGuHu5KBoL6RG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DnkorbFXRvfzp4rUMftL7i5yrvLA3vkdrubxodcrh6K8DEdvWN9jB7sY4HHWWedENHYNWgCHT3ZktYaWLbGLPu8",
  "key1": "3Sf1wci8ANuSsbVZ85nvRZfAhzQnDENHiy6iCRCW3dMcFUCCe7RCzbaQtafzxkLm7r3LHG7eS3yTXRtAGXhwaJ5z",
  "key2": "3Tspfafdh3Swn1eaWD3ydhhSMH8S8kBUL6sWuiXhDpAsbx3QbZLcTb3vq8asTCN9QgnEpAknYRc1kt2CW3y6cX19",
  "key3": "45BH5MXVK3TRywKzRwR6Et4nP4kYRHLnVX5yxQhHycC412ymGkiDKUZEy6kCggsq3RTscQTqjuKWxNZ3C2KZn6db",
  "key4": "4w73Ypz463gdf6a6h1CmuZDEff1Z8AmjwcJrU5fMixUAoCDShZGuPrGQijr2ZyRLQcq9Y1yHQLrPCsFHz3MTNncR",
  "key5": "2NU7ch61BbHoyTeHuwyTtNRHVGPt1RHneHufd8YWeRjiGSXZYhD3QAsLWtqmZBospDm83ZUR33LU1qisZzmKf18s",
  "key6": "2o6eEzTipa21UiPCBuTib3MUS4jMFC8KhPRHxdqJS2SqWjQnVq2SdBUEoEWh9EKkHWnvkpLvvW1xB7KAQGGLTdTN",
  "key7": "59a45FQieUmLyKRhhjgG8Kr3YaPm4FJGiRGeMB2sKpxtP4pw2he4nxbtRdbTLeL4HPzowFYp22M9HH6iX4dMfn4d",
  "key8": "2vzZ4LHw8dAJhTkRLi6RxgL7ZtXZws7aFHzqEyVjhcSk5T1NWWBHmWydND9Cxf8a5BwWEynyacnxezG5MZP2YeTQ",
  "key9": "k7m17KZUbuqnfZ4ezc7ahmD18mtUyZm5pFmrp6eM2SH96RQhFtDtf8QErnVYvDtopYtVosPRX7XAaML6inte7FW",
  "key10": "2v6w49YHHdeBJuxFL3J3qUNBHSQBPrT8nGGcoB6PCHUGMmcpqNGNkV5oNnFN973YAFmm29QFEdXZYfVZZ3EeQ2hW",
  "key11": "2nBf6DckrSJrMzwnMrrVJvq18TEaicyEWUDntfiXQev7XUVnkYVzF2Db51Usue4DZp2SYQ9FW4MpMxwxLA86mmqv",
  "key12": "4LcgoaRD5qQbEqyaVgM42ZMq6kEq3GiDcqYnMZsoiGpd3b9y4T3QafDKC32i4mWc9fFHnFihBgZmStzuqZvQba3G",
  "key13": "5YEK5fKH9H5FkhrZboA3RTU14RZHzb42W95GihonU5kgyLNXzss8zV2USYoM6xH6uugi8udB1dQ4axTpHr9EPP5x",
  "key14": "3L4dxZVPZ5sNjmgKgNrevvF1GxB3cHVx5csjjSztdoFkJueai8pqkjEKzedRY8Nv1f1NuMfqXp2XysysMtYRdWzv",
  "key15": "5bcK9e48e2PqQJhBHWPy8HgcmUjDsdfbonpEYoCyjuKug9qu5egxrjekSG9yswxCAbQMH9VJUoAeDWt2FspexFT",
  "key16": "3D7SgbtwvFN74hNJvozXQNeFogj3sU6JJgjYWDyu5hUba4sepU32ZMKQxWTLymt3aQWi34DWf3Aaqe6bhePbGm5M",
  "key17": "2fSCvqdtpBnVQP2X8x18mz7BsP6GZ3nNTHck6C51k4a9ZQ1ZXpRQzsVm3WjAYCtxjcvD7hxntikr9MfBKvr6nNc7",
  "key18": "AfMjR4SuGG63LtwXUZBqqCozJBdSdrs9LgKXgfJvPSCcw4djXNynCspXCFKQg39RaYyg6u4JgKAsN82P6qZF1SJ",
  "key19": "wxWjsLtbhjHpBAtM13pQ2Zbs3nRkZEosTvKaycKkQAUc3mNf5JMKGmAFDJLHgPSAXyp2ESEZJYa4tntPGWVns9y",
  "key20": "2QR6MMweHGh28BiKFh9npVNMTxSmjuqF2NMW5y5LGf3QRMDXhtE3FUKe5vf1WfamUmxmL2Pe3RuEehiq9NPU7LW4",
  "key21": "5NeGXHUM8ZXp8j5jEfofBxP6fAmuZhdXDXk1bPrNymtjaQptSfdUB85zfLRkfh5mSFYzREb7uf4W7jfcRzfBhoxb",
  "key22": "21AGDGToE81GaNiAXDanRVJ5KFHzPPkefQeWhgKysCUFCuaQmcr5vvzPPqUmGNkCfKCjhRH3YMEXWBERoRjaCVjK",
  "key23": "GR4jDJesQQrvR9TbH5HwsxjojgedW2yG7xLYmuUSGPoRheEbxkCzKgRrhQ3bJacjQ3HAeHR5cJki1YqQzQiX61Z",
  "key24": "2G3BdWSfdTfPgyd825w5jKo4Us59aBQZA73EA9dUvLLrnKL4CFJckHkgF7HYtdJdoKaRvQN8FBhfuHY7qAXzoiEm",
  "key25": "3mhXETZLMGDvVFHf2ieGRpyxYiBzLX1ByjURR7uYGTwyRqsFHHGKSFc5N9iAR1N4ekdKqoShKSMGo1yw3icw6iBP",
  "key26": "bEWWUsoyDaevSNrWRjkp4D75ev4rg92wGbeUaSTn4ujb3YYQmiVuwq9HChvm14UwEbzdtZGXt2UZUzYF3gcwA2w",
  "key27": "64drNJTARaY6hmwQrofVauog78GcXu8PFzA4mGX2yCZTPp9pDBTdAjr2t9cC1hN5adxyxUVYmhe3FvRTpKa72xAT",
  "key28": "2FuNHvEEyHRYayB6rJYZtMGWqw657Ythc5QwLgVxwi4zUcAp5gCeVWidWVW8NLvQdopQXrT3MuLXFfRAvmb7127b",
  "key29": "64xALTmbsL9mh4iQmX8RmQSyW6zcuHQKsuf9dqHRKky7q5wR9czAQoCBLDyTifYWNH2FEFoTHzgyn6LHh3k5ABaH",
  "key30": "4PJ6S1H1zT1eLJDNvWKZkTbGnditnJuB9girtBQbMR7mx39A4CJzfJ5H3VhMCemNRBMmm4JKz5VLENi1qk2o8Dyi",
  "key31": "312LFkgkWSTNJCDz9Xg4pDEbC7mAQ1umrgvAwcec92gwPZYhxgnVbsLEkLV9hdq7Fk1P1fSUnPN5VBwQioh9BT67",
  "key32": "64dwBtwEfBhsweA7jwyUUYYsKrUoU3HiTvjBrDG4tofQ2KFyjgEXmVx8KZyx8Y4ZErjpAJAXTfi2RgaWEjjy3zfo",
  "key33": "BWfSGUYoUqZqqYne4MZ6xjPJw8m1fRHW9fXpKNvSCmzR86y3RbjmcoM8AmtMkrVPrWfYciVyzTQjQVwTa5dHZWG",
  "key34": "AEz6hSryPJhdzALxaaEyn53aUv7jsqDxyrhQu2tXTEKHxyhDCEzfHwzV75zf1SBcoiWG3hdhfpenbkSLp9ept9L",
  "key35": "3qgtxa5FrjwGNfqpFqTHcG1KPbogWK3wyCrRf7sZ5ue8pa7PrPzk2RqBz1Tn1ZEEKRdcLiVDVpcsXm2aCbMWTYcm",
  "key36": "2VAHeGkRFc8DUAyuNusQka5yoQeib12iVqXRkjGXDthpWuLUnp8y9qaoQYL5YPapPk7kLc4uB2Q1798fPZWAf9Vt"
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
