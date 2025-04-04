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
    "4srEf6cvZTVPpz4Gzm16EUrvbpQxhx6jc1kYuGKQibyM4tNNZj6pvEJmD3axbYEXAHXq4An6pi6qsKatQ7oeK4Lb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tfh738gudipDACJ2o8QUBaS9kaub6PexmuRBLEmnLVBVo9KyoRfSCSNJtQWjfezQnEotV2hmDH1YoD5ZqqoiJ2K",
  "key1": "nGSsgEUX2UUKXqSESQKcD2bfPDiJtQ5QbYkNL6PYXEN27HabLA1frSeQoXmybL6X1T6yw3AG7S7pXgZqi1get7b",
  "key2": "2tguqwihxq3Ws9DiPQjVJ8U1TBKe2u5bgtpKQTU7sigZAcm8NmLqKucwhK8ZsAt7E7Rokj8H1dWY9ZA9xZ7SSSc6",
  "key3": "257M7TyZSuoeWyhvHXUmLvBfQJfVhyfNFunzkR5PZJ8nqU8d4h63HfPmEPMNMkkzyC1bwPGZz6mkgBg1pZHZkyJk",
  "key4": "2XZHRkZWhorFjxiEjEjUN7Pingk2kjxnfkEHTsTNBnJZRsFVY8t4ovFaEa2ihNHi4ZxtS9wzvsLeN4XNF3PGaQ2N",
  "key5": "3L4FkgQHpo26ZbkuJxULFqhGbv5qZDRLDzGtBRFGgdUGjNZWFgJrhchYgetHXHaVVUNsR97RX3u6Gzvvx4rSJucw",
  "key6": "2kZuBLrbHk8up1LpNxgerYQaAZEaxAJi5s6SzE2NvcLPcUit3ab4Km1fv8ggAVc4n9udZ6tVaBSL8BGeFBX3598N",
  "key7": "1WgNabB9o4agGRaL9PeMJ3FcYCW5aFuZeQtc1ewTu4WeTxpTCnGDbhWSVEPFRDhNcpCktrsdZafgbjERv3GmFLZ",
  "key8": "zc1MPukaUejExRY127crUgfg5UemYKWJssddTo6G9kSrwHBJacAKUbi33K9rMb7gb1hRSoX7K5THCARtVQ7qSK2",
  "key9": "25PSnBLRMpZaWgG9RHuCGkagiMUhztStg2gT8MBQ7LZAGRt51z84knf7q9EgL7mhutBF4Y8Sd7o1ywMddV2h4SgT",
  "key10": "7pDKEf9pLZXNhpxcnisPuPkFXhiYTXy35QkCJAEijVBHP58WcpFBQXxhgpRePHRAuaHbsiGH4aMByLM15BEh8vs",
  "key11": "QVKqHFUwrjrGC7uQA6R7fC4Yf8jGRCq6mD87nNGAdfr7r5onWhY7SiZswGjXHDkzYGBY4A9yhiHo9qWtWRiLvPa",
  "key12": "NaqWNYKoar321WAoE4FhG4wXm2gSoTX4NumFAVLsakQip3pwD96TyF4nf6XExJYQWPF3uqTPMmbkTqgqdPh9ttJ",
  "key13": "3n6Ud3jfMJEfiAREMHU7obgrnMPNjR21UcZBu7EFUEUYpTSBXWurCLcrkHxZ3JNEpzja1LkqGkjEuT6dn9qVg3PF",
  "key14": "4fzNgVL45GXBrps2mLgzAy6WsNmgm7mUnVPL5z2aLgzrN9uz49u5tNJo7tDiZd6theW8jBZY1qVmq2qK4PvXUZYb",
  "key15": "k8D5f82rRnySALPBs4uZzK72N8K6PDMQcKAn8v4TCGtaY7KTQa3r9bL4CS7t9WtM3ybiJoPUHaS1rCbj7pAhtDh",
  "key16": "4fNU5kYTyHahyxAGYryhQL3Gb1ZspydzAoKZNfTj31gixhkym543WAcZVyLpPMJJxqBNP8NWxY6YLHyRQVsCJzP5",
  "key17": "2hCcKnCthfC9teHa4L8ipSFXpS4NqtyagJt1QRHRz4QRzocCv7zihEMSG5qKy2QpS62HLszwG16wNwtpXSKit6Zb",
  "key18": "2RnVEixy32iGvuAwptxzE537kmsLfzeMJ7AD2DKQojzyQXco2W8BKACQWr9oMyRCTwuU5wJDGSGi7T9uLBiGWUam",
  "key19": "4VWU8zbCmxpwKo4wTwqfhX6fqfcC8aoskBSuAgkLYip5KwWBUFzoWnkGNWrVb56UojgFax1bejfEmiLKjDXeXH2D",
  "key20": "5DyYVsQhhYYXa954mzcR53GoboMWt44scjvGkyR2E5BEjpUDEgbV4j1oB2X9YKSqNhfYeHSFK6xUQJcKeQMd5a6B",
  "key21": "569s8DVMHXrRMPaxQEzF1WzyEQZD9VnvULF9Q3LuXQVVRRd87Vwsx6dRCPv5Dyi12mvvno3K25yHbjtckBUmhzgV",
  "key22": "5YYbg52i2jkPkSv9215q4uDcbNdUSn9YxLJpLgEFB6LGLNduzHREMidJpcYzQtPeRtLnpvc9EVsd84KkL3w912qC",
  "key23": "2XkLoRNkQ4ENZLYxFoamPuPtFoCx7sefNRFvBPXG3qMnW58ExdCbqRZqrRrgk5zL3rDRk1Lj7uoKupT1aPeHryQn",
  "key24": "PJ7rny7LmuPZTmBt1PKJmdguMYYBBZkkWyhBRSKsYxyRfdR1oR5ptyfBgUUUwSixdSRTEGsx2iekr3UvMpyUQZu",
  "key25": "2KJbmL43ZuZu6G26X28cAT6H9azBjYs1s9U6SKwwcPigaDC4qeQMKyWu9hF63zgmk6cKYrWUkZBiRmAiuYpwkpud",
  "key26": "5ptW2h1LNFzhdJxSuMAnGBezyCqRtko4jtehECryeqPNozVKPVWQi3k8NG9RHHaQyLDkqNga86bNdTnfAx45FJaD",
  "key27": "3ZHKWykHpmmknPpvU3pkRu3A2bv2goYrXSBfqgL9D7ckjG7WgdWQBsKwPyEG8bHHfgyqxjnG1YxZfb4kuiLmdUzR",
  "key28": "2HYZvWGWjYPchqDVMZ55fVKYf9JMjZbdSAo4Kykzaf7SZk8qXSkQK6m9QyN56eiWZiHaa9hghtKtEX1J5T3DssW6",
  "key29": "rijEsWq4avJpgptaBvEvHpTT9dsG54W5vbU2Kwq8VmzqYtP3nn4NvGRf8jfRE8ErDytBptF1gai7NnQNHh1EzT5",
  "key30": "3DvN3iCSC6knmF2nPoNK1bkMebfsswUYvFDaAbrvbaHBWwUdqyJko2aAVDgw77CRLT2rz5ekzz9ySycrP2uRmcgy",
  "key31": "4o3ebaq2bTiveckidzV9aNAAAJBjLZaBWeaSMVKJSCmGRVQvcvKDrqdWPS2XpKrwRBgXiN9P7EjQsPWwQ7H8EMmj",
  "key32": "3gBUruuXrgzAFW1P4czopgqd5rkkF2ZGPqAJTeMz4tGDaM4HjPx59rPwBMKG9nwLMN75gaPLzurCg4m3qVQHBRc6",
  "key33": "4bYfY4E9KJhRiAG8WmPA8QdDAqRbEuNiPNWUH58VRsBS6FXuX8yPHfnRJXw5obZqJctDWwTbMehukdAsJHk2JTf",
  "key34": "2Jcx7jVqybbyFcvyqoAWVge8YPptT5SoYoJ4YAHoKeqZrRqbN7npvgtZvu4Jr9SWNgeXSdvo973AWHP4MtikaCCW",
  "key35": "3hLohW7MY2eaTRY1cSveCpd1kDcANmbnKLSoGNmPvpAonKxyvDnYxSY96hDQYTDi7BETmsro8QccoSNMFaiA6xZP",
  "key36": "4TaGMbtZd9Hh1kKKtmGLC9ZaDudLRC6nKbuWyF18bDDqFANCnjtXZKJTy1csVFTH9xvkGvSjVSfGZVTVLbS4YU8Z",
  "key37": "DTZDo1NN5asNXoaoR4nMU8HjPCqY6xA4rWcdCzcySMA2t6mBsVLuaDZm2LZsqg8CxaL62dqigteQyb3UEG7EjCU"
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
