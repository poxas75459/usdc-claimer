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
    "5Qjtt5q9Wva3wwHqv39hmVsz8Ts19smPnAQcrw6tKpFTGZNhsGLxmG7y59FbzfjEJ26N86BUxefVYxkjnVDNoQGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u22uPdcauHs7Aaa1zKW63csuJvcjkfowyXNtShQUfQuVgzqkHVwzyE9zYaayVzwKjZ4xjY3T8nPxjkXT4NqJCYy",
  "key1": "3mYrLwarGFPaR8kdHjdtEmTdAJhoB2Y1SoEAJ4QguGZLqnRdooZwKUa3u2ySMjLCaCcZwRFr4MntLoRbEEupdRyy",
  "key2": "3dDpaTwjUX88N5ciGAYg9ZPrjLXWsoL9hJ6XinrWcMwPHt3TUsn3AshM1MxevmeUuijxw8A1D97SJbpEPPzhb2Ks",
  "key3": "53jSd8qBXJMf2uxdSy5bJRgJucuBkSo7XEGCJRHqMwjJ8NJpxqYV4Rjeqgi6wUZt6DrG7R3KFztuCNpBXbuQvnic",
  "key4": "3fyhYw9nviHZSi4F69aA6E7RdKd6yKK15kscwXpzXG1j5ni9Qj5B8auoCUJiCtas9eVd6JpiC21RtXZPqzT8CQ6T",
  "key5": "3Vn9H6SSLs5HaqcdUpu6u1d47h84CAPRYGqqCCW8ZYA3zJLEf5Z4AR6kQpYiwzuWRv8WYDinMc4ASe4RicoEwvP1",
  "key6": "5QQg6W9LGonDBg6KuWxC66US5TBKXNTfB4aLTuNsufU6EmL7UrwhqPANJxFqpxwgCXs7YhaGCx8Gu5ETejSLU9rJ",
  "key7": "51dHRVKLfxPUYMCA8sJpoB7KU8UtxU4J8ktSfFx7DTa1xd9XYo8Jxtd5tCTtoZNqBkTpRZySNZbfQEKKRshsLFSv",
  "key8": "5qH3nvfWwXj2vxPFgh68gNeCGTMrx3SibgbpvBad44b8ZTTPjpW6aaSXczJoa7t8QhFheGTW7TBQtQPCjZs8jgPa",
  "key9": "2svTtmZ9jRP3NgSRD3v2xKBoKiBnYzXr56sWA3uHyUKgabF3ESBduLwCyLQ9eg9osKGGPuFb268P9akXLhBMuvPw",
  "key10": "5zf6whdZReDY5woTTxmkJP15aXvxH4k62xosDzSSet4Ra6tQGsDNKz6f8f6zj6c9wZEUBDyEm6A5rhr5LjHqhuet",
  "key11": "drnXZ3RSkyNuTjBVfe4m1NvUZXaPvBRnAXJmDa26qrWFZC2Matpav8RPA4cV7sDKG5NRzMYfYwwNSjCAx4bUA27",
  "key12": "5AFdENGezaTkgFPERj7qUvyUkTjTKSoLJNbDdPw3BRU51CTPnfBZ5GEz4qHqzTB7ggM5QopxXuRhdfaMkWFi3wnq",
  "key13": "5tmGCxuHYUEfXDToUzAnrXYMZU9BeTwxnsNUrk6CHFEF8LLNxpfxwXLqKVf3MiSDKMKocDWcMy9Lqtna2NN8EsQ5",
  "key14": "3YyH5kNVtRfEsgoiCj357zc3Hdhpoe5B7zSnugipdKAdWNQwZudF97Vzv1W14njpsGKvziGrzioRP9HpyLMNKMjP",
  "key15": "W2TvaSXkv81GQMAgePUcsaS2yKULhgjz4pF9pYkWD635R2fPVnag4ToW6umb9kYTDsA6YbovciaP5NQQhJdGnZX",
  "key16": "616pWKbf6C921Fo1xPy8QWH5T8FstsgX8bbn3azk1coXa42sU45NGg3ZsFq2kA8BmYscnMb36xMoyBNHZtHyZX15",
  "key17": "64jWVT7JwwspmjYPbADeo683kXoCDisebbmXFE85dgZoSeo3CysDPeEBH7DvyddMhR5thbaN5CpTzAD7xNXoTsNR",
  "key18": "3mv3EwX8nrF5XX8cjuGU6P9xm3D5MZHDCUxfPY1FdYmScb74Q8EkaiPLE2AUskAQXaRw6ZM168fYWnE7tHC1eRnF",
  "key19": "5oHhrcVBb9ARiox2B7DuuKrtUABHXgEBNMAuMS6Y4evfk3e3MRn7bpCqkXybTiQ38o1uw2HeHZwmiUG96NM6zk2u",
  "key20": "TwBhVHUFGVsqoGUCP6Q7GcYsSSoTTMtmNNT3n5vLSD6SVdPyDuGPbbz7rE7sJfM5c23mWpPETCqVqZzHdgjvti6",
  "key21": "FwQ1xFaLLjYVhDEMxQDYDh5q3CReEexrru5kZJfEqBXTHjFqexD5HZZZcqqiraUS4fjHQ9uXiLdxAh4pJf6gfVQ",
  "key22": "4Fm4DmQ1GYj11PAc7DXCnfyyJgB9v9kW6MXTyYfvCfAn2EiX7sytFHuSdikGnsbDhDaTJhLxgomAmLunSrEpXMPQ",
  "key23": "5eu8xp3pFBWyLTSrPYfwbiZiri8Yqo2LWjRiPq7tjqrvcSoYyy6MWuzERF88evwthdf6Yq3uGYZAg6XZSGcokcPh",
  "key24": "2b369mqMjSqWwJSyJjZJDeoHyo4vH3vQF81zeHUQw6Qzopw2rmRyugFn3hxWE9uw82GB3JHsWZpLYB71hmkAdeaF",
  "key25": "2oC62WKMC8qHCbhCXTn4HEdiWkpJVuwNW2eAwhgRmckNgy2d6DNriqnoVY5fKmSuw9APwggkJgERKAdsX3zbyE3S",
  "key26": "2s4amtNWBer7Sv6c7WkLjoMB2GP2pjKU1Hr3bmzLZPcqtcZDbjjTAt2GaLd8YvncRtsJ2RHuagDy35JeRYsJGV8q",
  "key27": "2trnBB7yJtXdWe2XmyuCLaeZg4SifHb4rtfZGBU6nT5bFFHZASeAB2YrBx4XkyHmGCL8C3LdyJaQh9YZ43zhySL2",
  "key28": "5vHD9EZRCjzUhV7Bb42inPKTfiTGF2Mn6MZKZyoDSbPr1Mqfvj62MHSn9ZnoRHj8ZA16o5xXkyRCt8qy98u24C1b",
  "key29": "462ignh5rLVAt6yVWMfRHtJifwm6q3JyMYGBtbzEmWiX2yc1DcqJNoAsorjwnFDK4bD6z6UEXbc3ygiUR7iLKFQG"
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
