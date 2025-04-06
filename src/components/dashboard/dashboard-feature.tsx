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
    "4p6kkTWyN7oBoRRWs4xLY6RnEyob7BU5Ksi78QSL2aStpxv1Uu8cWsySBVMUyUSqbXq5pWobwppSMbt3U4RBLYnp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55bTfXxvGCgskZEf7DDEj8KRbHEF7EEtrZu52kTiStaULCpvNyiAoLn79pmkAZ5rvi7sAmLDoDWPQqwnGWuRXB4M",
  "key1": "2XV5t6aa91iekpqfaf4GNeHsgattsnLftDD2aGx9ue7Ssmg6uBDPoKyBoaAbXR3tAVDdw89r9ftQDK8ZfyWZRQSV",
  "key2": "33agG97yneP2cFUqPNa7razc1BNeqLsiUHJ7K3vNaXfqowKaYY4vAgdpkxHp1Cg2SJLskbn5p8nkG9YFdM5gNzDR",
  "key3": "4RQPd7mt87VVV7671VyVW7QXzgy9crm5yVBuLeH4w6j5riDmPTSZPVgJNCwaJ3qesZF2cqu6by6kWqriMoAuUNj",
  "key4": "2yz8p6d5k41EPTuq7vie1smpNjgD8b39Z7swGa7CUdJdj5ZrkTSjqAtc33SFpzNp7xMvyDK1eANAQmSZE5UdFufc",
  "key5": "KBA1eAXHWNKTb9Lkk9wDY1K2Z7LSpnyhHCxoTM3A1YgXsmHrMzXMRo8FDWegySumyJ2ZVyEeygAfB2NJLjTGwap",
  "key6": "38Yg4LZ97aneu45hpF3LrYX5dHtJwASDZsDbPkJdtY3MQQ4RVSerNSKJiAKmPDJdpkANBQytiS62QUVVCMkxRnEs",
  "key7": "qU8UuZYpjW1wtQ1LjjPde4FuUwu1wDtMPNAQZPvg8QtUM3Z831739bodhDh4PwUyUnpMgzWfKa8EfsCttW6c9jM",
  "key8": "2HMN8uxWYzLRPFaXVFLvLdx4UHCwAU8Ht9mZGGonp6CyF4KgSagTTVmJuhgTQN9CFDn5Z3V85ccV6NNu6S4depcC",
  "key9": "5ZVgi4vbz4Ljx3n29zAVETyrt1dQFydVHPuJi5jtTVCG3e2wQyGDfNtrKKXk3L9CMs7u4E8zYC219uz5CYqbZEGo",
  "key10": "5GVbkJMNJMP3gqqHZYaKmUrNcyzjYB5m3RHH4Xx1vSerjZdkp3t5fqgTu8kKE4TMowi9ipGFxHja8uyutQXhJXbm",
  "key11": "2yyrqSFu6vEKpZuHLbkmma4HgvucriQawxj51MMzAxxvHGWQ4wLfahGiHBFas6Fj6mqvAn6FDiLF7tg6YNZQHV3H",
  "key12": "4s9zu5Fun7LjV4TGC4pRqYDCCk9U1EnQ3283oMFeZksLruETXGUjbtifwKskPrkfoLm43Yr3SN2iVLd2ReKPUUGy",
  "key13": "4r62oG2g9Gzq17f8d7p5TuKZNWtN6V3aXwHuocMkFukM7yYuvCjoShiXK191SWBsBmRceVUVBdVaB3f3WP2XxqUA",
  "key14": "2fFVBxGiorRGWe9knGhD8E54iHE9uxUnaeKvj6bfswiFRbqjpL67sWziKUyDA6h25vbrNBMDzYnedY492TDZ2gnE",
  "key15": "3w1xuk8vx7NiPiqr69qRjUBavFSxKi4MMLu9zm7LHT87YtVKeUtysjwbuqW9TcW4BdJ7dbEXGBUckFJKadGu5oGR",
  "key16": "8QogyLfUAfB4mrv9f5Fsx7rccFt4eEeXj7S4pagesfzjAHHZ2t46MMDmsoJSKJRrFFKQkwVLYGDoaW4T2QwDeeu",
  "key17": "52RzS6oQsgF1bMhnJyAfi9pMSvQmMGV9mkzAuPnnQi6SgpvJGh3aQKGVujnLkZAmvFLSAFrzMPjnRPnqM9yrHvKc",
  "key18": "4SKJPKxcMFi2dB4DEnc4orKy6CgGeTZsyK8KqTa7Gu7hQr4TerX3PvzuV5pK3mwBJwoxWxqyLbP9tD2yCkwHqR76",
  "key19": "4KbEuRaSVevRMyJHDgtDHnM4ypwxfDW1VLPFh5TcH4gGgo4SARC6UcnQ3CiRhXjDFKoVb2ApW7dBCUh8bmz99g6h",
  "key20": "39A1NrEpX7rzmh7F7KDhTbbUbnoVZ4HVr5CZoggcExsxVyVtPnLQG2MwG15MZGJBVcrX1xNxdJr4yFC4r6S4o4Hp",
  "key21": "3wvDK1Mm3hBse1nBWqbVLARL7E5D32CM63ovwtoPhwQPQ5HzBvR9Q54cZEVY7J8s3ZSnwEWRC4DEyk9JrokQxKNd",
  "key22": "BCGV3vvwhJvP81sioVh5iRxn4zUGzQeubN3NjJ7ckVaEkpjTTY1FgDGn91BEbpBKJNcw8dZyrESb2X3sfNmzzki",
  "key23": "3s6v3tvig561uzSz9WyZK9tZ5GSeJUbonj5NavatvR2faUoaaLfP59tv9BGahbZ3AfGdTEfyjevHfPw4fDPhUZi9",
  "key24": "3JenNT5zF3M9eMEVE7RdpJKRzsAsNYoA9nNXZpZ2iJhxRftMzo7VbkJigEEx36CL7EoLbitwRVMcpGSKaU5LpaES",
  "key25": "41G8s1hjAPV39fETzHCxDitB2vbj7fjg4FrXmyaEne96MpCZsnrVq5S163sD8ttLgjz3fo7VBKEC9dh8jq5b1k59",
  "key26": "4DUjkzZd6gkK2HGnRDHL9fT2ZSRJ1CTR4rPmJFFhj4GQnwtAEteTPVLRFTvnPYe6XSrP4RzurPfZK3nu6HwJaXti",
  "key27": "4STdS5NutUAxgbkTFZhZaHiyhtipyA4xcGVZFFipwYtKKaMxXh5GqZRXSsL2KSz68D79YRKiwT6gK62YK8Ppeq7R",
  "key28": "4GTtZRgHqEcmxBErnKwAkV2vPKoBN4CvDirQJni13ksxsCtBF5X1CG1nnNTABAiGyg1xFr22qFAKbNVwFJtZbmCx",
  "key29": "5pcj6qRGpvyNehRzzfXvPtqDLXJaCu2pRRA5eZRbzrv2LNXM65pH2rjuSc7ABQT4C46RN4wH6scM43gqiAFFZEzK",
  "key30": "2XEN1H136oXYxNWPKmEsNoApjTBfwfsat4Jx6h9owTbj6jrkmbX3Xrku5X5QpwL8zSYrTjQxQeqSULpdM18uP7hU",
  "key31": "WD2MksVNjBWofmycFNeJTP2WRMETvC7Y2fMdMzs15uaN1rv6bYVTx3ZEymbnmujdyX4chas4825SQRV7VCzdUYc",
  "key32": "3nnqdVuSBBKMBxhqYFCmw7gSq5w6tEM9CoCRb3QAPtZ2DhRL7zYkydAsnZxJQoUWrm84oGG3sZdPbBhqN92tevHK",
  "key33": "3yBBhhwCXvtfGoyCZqty4j6DPru6Ei6iaMGLeivWQWDLhiDkWzg5Xp1DQrqab4BZgQfk2LfhBLyFsRXXpQ19AjVx",
  "key34": "2pGLhjdzYqN5ixFgNV15aJNYx4uF31Hu1HYEZwCgrG6xPerRpiExVxi5Xxkugvf5bf7tXZRuBLDPYuSiVB2T59yh"
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
