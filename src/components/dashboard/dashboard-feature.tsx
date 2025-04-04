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
    "HodVa7yF2pQiL6XzMY5fyCHmveZztL8MsFLCPsooyByMWs8jGJaAXcpmNsemosGMDt3EwpGzCmAfP5JC4c2TaNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rUcEHw5dxUgYgpJeL9J41iMDCutBr9dAhmcPejMpPbEPTXnpKHDuvs1YXS6rdDJzKqohrcopwdCxbVqZZYWHdUQ",
  "key1": "4EJPoaCf1wmTw9y8sUZJYuRvLxJLmPYX1EWQZ9hCf4ZREakm8Z9s4KqKh7sbSKZLrc7hgBDuQHgS8FYGpP4HHkAf",
  "key2": "Cxn3cXSqeRiiL4YaFmnc5FTCawW5stkU2yNU8ugyiV5evKS5svSyLwSRsWjYD3nwqehhpp6Y4Bk8uWMEAe1b3eG",
  "key3": "42RG2sxQ2mmmLb1e1GqRoux2MHHLK9xSpmSTQ8q43mZ35FtVAGBozgDkPSB8ox6JBo61xwmQHJ56pkR8VAv27sPG",
  "key4": "4865SN8mQuEj9H6eUVLn87YwB58p7iUTfbkQN7rnH4ptuK1nMnBs1WfPzFzYcCBgkXBhD7YgGAfCL3M1z6pPxMeH",
  "key5": "3sLnAi2UiNfxMKjchB6SBtdqGPfk3szc6JsvcjLKSuMx9EDJcbVsaopWvLc2TpWzRm5GAz9zCSzbMRNuCbLiqEsZ",
  "key6": "5cNMQ7vHW35SHCsvLcJM2Yi4CmLH9mZjWv8fFr1Xsgf6iMTEArGyc7HK4Xa7dVVnpQmPA5UZTKcQKR5kUzToQc44",
  "key7": "2Sdt9Zuw7fpugesqXQdSsLJXZZ2mgL5PgExwyBj5zMMXGAZUfTewRnfg1vxXtQVNQHAknR8V33qeLCjWNTQXWWM",
  "key8": "3RqFiVguJ6t2GKk9QdToYt5W1WoH9uoPranauC9KMT2CdfzH5QTYdYY9chx5pk1YiMF4nrmVFkbpAVPFodUMkypn",
  "key9": "5YUgMUfw3wtKFxC5S4ARGmFy1nov6s1qFTMFPTtzCEdAEnn2G25rVqr4iA9851mAQiTHSpEhBS8DR5ipMhjmJ4Gm",
  "key10": "58ZawqX9D65GsYeDwusaonp7fcbYBLHkxzo7Yn9ftHMP6qUEDctGZwiC4Fgb4EHJQrF8jZkAb47a3dqLwdpfRyAV",
  "key11": "3MD7LRkPRvTBE4LqXL7hLS83hLRa49SdwUXnoNB8HWYDxgzWegB2UbXTgKtL28Byd9dDuSgecsbvyN5bMySes6At",
  "key12": "3V2mjnMvYr6oVmn3hAcP3qHeyEmTTxP1H1pDL4tA2BpTFaLkXYaH9hAAXFzyTusttpLRh3sJ1mzAjrqJXQ1Q2pwC",
  "key13": "5kEYjGBM2tH7hYry5oTFMFYQk1vwnSDobREn9ZBWn5XbH5CtAK9GW7QxRUBiBdTaD7k2fMGZxQT1DiGfPNh5pmKR",
  "key14": "225KvX7krT3Rftvt4oqJMw5TZhXhiUCEj15RfYgZEiydcgBit2uYAHE6wEEBcy8czpR4T6tMgw3VrUmWwqnHWMNF",
  "key15": "4VqrSBNnr6btajgdyxzGuDCXRquc61UGmigkJ6V3u7k3py38jFszyM7vrKUA7oJswMhEQQ5xykDLFE6eQysyh7Z5",
  "key16": "2ofymD9BAPaXWwvievpPE17bVxoQrdkPDuY9rpQphT8nsstBE34ggoSVyMLeSq3cJ1vPPunBBQLPD34VGh7Lp6yT",
  "key17": "5zPYhvA2rpED1HSGq4gncMEb8MkS3vxmtx9bnwNcuGs4J6z2n49RMgnQbRwLHmXJwuyxagBRSPt5cWidX6VvzGC",
  "key18": "4UbRXkRwjDSHXGDt1RViUVzNraCtsJVyzZ5U8JnEZypXp2qbnyHQPJkrADzuHqY2zm7QSPgC9a1tQ6BQoZCXxpxR",
  "key19": "2KZVcJA2Rx2xzfafRCpYJG7pDqxcjtFrKXDK4PJbWth3WMi93Wkk1BudPU9UZpQEJHppZPvpzKWxtpqEbBRbyqA5",
  "key20": "3tSePqFyKotcNTTetYt17fUzpowQh3RkSLPaN6h1NraxtpNh6qkV5j59ciBiZkgggGGetfQ16UHbNN6h1iT31opD",
  "key21": "2eCDoBmXvteridW2BMJDhnMBjW9m6gmwXeEiQ8GNQwusLGF4K9n7gjBpeDTTFBuAYZNCsDzdThFnL3oSwCacDjkd",
  "key22": "5Kv4AAz5neaL5SX9kSVD1Z36y435byytm7qxZ5X4sdBz4W4kAZ8Aj1kdYx1MhJ9n8DQd7whrVEu83H9gBz3Uia45",
  "key23": "2HQs2GTxNerJa3XUq2DG7TCtj6vcwTSY1opB89AnPHEct2q6pEE7eqRtCo3pkMkwQuEovB3sygEvjGMfdKWehE2p",
  "key24": "2vsC3s6GxN9XPvU4uRn21WBpCbd8qdyDAJy1rbyf4hru8trTAdBduoC8xVZH3FjtxYxpi1VdZHkBRTd5mic6tASj",
  "key25": "4unoEp5JADY6A6z16AsA5SQczCBAqLcasmvq6xKFbJnFPnTEfihD3RmoHCfJHcqGRgJUZJedvA4oSXxoqtmPs7Tm",
  "key26": "3Xw5RccB9yacXfRNmGrpuLsWMy9UXbgYKpup3EAWDqn1vCeiKGx3SEHFanLCuiMLak7noE6pc7JvfAos7DzZE7T9",
  "key27": "66fEpZkXCFAepYedgy37pGDnpdL6BUhj69UAho1Ybcy5Nvudw2yfY5NKvSRFNPV63mK3ZnxnC1NLJiG3MSucg5Gd",
  "key28": "4TBLEakRyrqoMezZBWjy2aWaW8T84SUKBZiZT2fBRLCt5xwkKjiJHCAba2uJu6gH8hgUpFZJWvxZSEVtuVgsbNgN",
  "key29": "UEffgmWLmANfGRjdgVZJQRuN24J69tPpHR3auYUGkQ7hpeshrPpWqD4BhAEQmyub63MhKve7BL1WCWyAUaD37po",
  "key30": "67qXTrC1XHAfWf7REP5sArpiWk1NxCpGRRLsXfG78HkXPM3VsVbrYe54cN9XEk8bwZ8dh9XkVdWLc8S8b1A2R6Eh",
  "key31": "Qq3P1LgReDP4oZ1yXHFF6h59JFqWFrFJtpocdC7ifd3uZMSFWtXwERrBHdZFgo4VzAnkMhD1KRxeo3RH6BhPuE4",
  "key32": "58fy9viRAxLCwLuHQCQNBv6e1x59KoEpQsenXWLnjjTkedj6gYyCPv9eoEk14NAK49suPwjR4DRjSgg639suGTwQ",
  "key33": "WkRCXgYxFaBoqgGqs4SfcM3aWn9M82L4HPC9U1TTqcBmkwqxq4FmNfmf6GHxCvDT1Q8V7g5QxtGE3S9nMBie9pH",
  "key34": "51RKiUdzdLejHAJhjrN4kWwsjvLDihHZqrH3WAt7TBhRupaFjM5CegkmsTUDa9rZYAy4YtKMZvrA32b83mzGP8tX",
  "key35": "3UcMcMp1fUSrJHSkEXQz2zUwBy7rtaerKVrKD1w36gTwe6a5FiQSpKrfHJYbQXQhxpCiiPYFmeWM2KtCyZJdXUiB",
  "key36": "2mrS3v91A9HRSG3PZp2xf2LRJg6mpQupL3qWcQQkofexseLTdVQvYapZqr2Uzs4kiBubV3vZMYmSe85JU6ERbjFo",
  "key37": "213HiuWMGf1UCHet9PwbFRSAy73ak63rK4QW6L52dZG8NnDLhZ9Cqf82xcdmj1nHd3kd4ju7asvR4waYcwN7QZPa",
  "key38": "3ihSCFf5YzskBrtB4zfwPcWHWvLRxi3bP71tYZnQREaL2BFHuoM2VLwSPqjm227bT6n99vFUMzPR5nhFPYAowKEm",
  "key39": "2jR4ZpkXwZzcgoX6tnLN2HYibH6mzbvTdyo6tuo2pdF2uUb8UAVk85FBUV7dCRKFFq63rEp2kGvSNJY4bodr5yoN",
  "key40": "2j799LyqcVVgFHCHGbfMmDactaqAxMk21pRdLZMAfoHj6cQ85CezLivCELeXJN123q8Hv1ucsEBuwz9mbEAVxD9s",
  "key41": "33KPS4PsrKDLADXsM7Xgo3uVG63NWWwNCv5RcKDGUnWFgfHfjZXoUkoVbJNZPacMPnSZaD4qbp7X8SAe2Xq6uC8i",
  "key42": "2fZyZau5Qkgpfsya8Zi8xcPkykQqj9TphcbCF3fGgL4EYPVVhebcpiFRw55BJccpTYEf3z4JD3tqhDnW7C6p62uA",
  "key43": "3DDFEYuJFQNzP5XRsRKKmwEvXEipqMasnAquFMq2WjgLTMRP85hZFwd6L2tU2WnwbC4abD9KqpFk7QKPPcSm5CgX",
  "key44": "3YBhDpSnC5dPkobqzaJfMtQxg9SxK7y19mvg1eVKDxDWKYorsUwNGSRx7JVLjuvu8643JqytHBnoBAD1YNhNbmm6",
  "key45": "4nmXCraBhXJsR6wgCQzN9ie97GJ4rK4caRt86DbMP9dLS1eAmgYfNm79BZ63F2ZG9nEtWZxaQAB8Fc1Q88hThbCi",
  "key46": "36NCrtGqB3dP9bcjpTRJkqicJfY7hxYio38TMcE3dMfyEoeBuNjwHd4EBiqkYUFHMZ2B4YttJFvvyFNNV6YhcKru"
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
