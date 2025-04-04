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
    "4XtNL9uRAeEXCDtZ7UHM9knrUA4gCn9qRzBZ1A4LPSFWbFmqsN5VgcqhJDfBhbQMfsS6Gp2QvJaosCWirkZ7hZko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uQKwEPRNxhwbxkS2kpvmsWadK7vGDDsaBDVCmuFh7JiDRriKEttUg5YYbmT9bHoQrtBKDH8oXSSNYGouMUhbCcQ",
  "key1": "3x2NDGxfa9Qg4qWgvrMzY1xkGyycvuT91hcRottJEzdoEun8TwUM8CVYE5wqN6GgX3soyBZf7zpQAqr45TbxP5VX",
  "key2": "4QdfJoVXxzJiGxjekpWieZupzzKx13y8hwyrGnwYNGyNpMJpYRAhp1n7Da4tHSzJdxsco6YQQSvLMGYpYL8BZgsv",
  "key3": "2tGuWGaco2chfkZ2zXZFF6gH2xPJzwiFA4eTVCyKAwJsGXPVG3w7JWcaGFokJqxACgAnUTxFJoGLMMSUWqTDGytm",
  "key4": "bXZ1drpzYhy3zFppHWCzzQugHMkiGq5u5aWRB8h26kbTfZk38Ld7Pmf6MzeMipeq1tbp1jyxAmEtGoYdTnXkCyK",
  "key5": "4QwRkHGACxc5PktLzNjLX6NnjF3t7T1xkA64w1KD3C1eE6PRtKME8tryRzSpNRkc1A8h1ucXcd8axtWmXcLd2pTL",
  "key6": "5cJv6T9AUQQVttg9JXwKWYYhxTrCkLHwgYNdY62vJY8jC81LtpTRVRfZuxqcpiHfmKDadK79gjgz29aNmTsWztqV",
  "key7": "2YP4Pk8872pXffUEk8iUUZd7BjVBi6iwzmVsEKGqnHtFHEGb8bBNzWE1gjmbXSnrqMsF5rb58e2LABh5K1dty8zA",
  "key8": "2wBwzhcnqLQsv2xDW22vDRR2BTk5N9HUwdqD31sjRr1zMMusbNMKrNiA7PRgSC1T8mQBNkMaqVaV3kYRkYte4DV6",
  "key9": "61X57xCmrryQsBsH9UW9BurEfiry3PaNW86hD6uwRk4AY1j1EgSi2eZddeP9XcrCXcFNicqxe8FHKAiKtNUvV5tW",
  "key10": "5NrAUsa2MPPpfXS7n3XJhDkWKqVgvedmsfWLXoXxy31NXR6Aqdkd6dtr2equVvpJb1bDe4x2iQbZCtNY5TKs3W9V",
  "key11": "2ZCskHYLhFs2StSHXTdt5V1ynXdKSpgPRdkYc3rLzN54ZvSnMqkMe64G16xRdZRqYavvCXVeqydovsLGAH5jVAJ7",
  "key12": "tgWfftg6Fa3hpk8mfsaTyMHFUxxUx2h2PrxT7t6ruARo6SiCQJUrAtfgX8Kw9QLqPU9sDnASpSpppzJxmdLnW3W",
  "key13": "25Q6qPZrZg28z8JGSHwAqYkYwZYEJSnjH5sXhdAjcdYbDJFMcYrRugCRQocTV9Wiohy31mQJgVtPUWttF5GDSkbW",
  "key14": "2mGQFGEwau3kAqjqdfVevMTbsDNhbbzXDitBYroTLpWQAKAAMrPafsdpFDhgQwxKjtcSMerYMtLNwfnSGPKhKqFU",
  "key15": "j1VQ26fcgMrt5M8HaY4i42VRGTbEZ6J4egdx8NYvg37UPp3nWB6Ef7JiGom5ZZwDAi2d9TRAMtr49jynrFYytds",
  "key16": "ktcz5VrJUUJJiJTB9MVBn5jAVWuazEKgzMRfFs1HVcyNRFHKupQSWq8wuqPXpRTkte8n6zsWVXg5sDJZqrRhjoU",
  "key17": "4GvSoa6Lqczw1g773iQBhfvGr4UX5ef7J7z5aTyfiCY5CdC12VGaq4PBi92hfJQioBUVSeaEPy7eQdKqU3Ls3E9B",
  "key18": "4PE3FCcTXpQ2ytzW3cHHywgcxPwRbkcYk7zp25MdhTzbVPSDgmEuoRxz4J152XJjbSjyo3bgFJVU1KbKmJK8Utpa",
  "key19": "5x1yCWzizDP5Ayfh1PonXeHSiU5XgEGaaqTczvXPFNtQiHQZQcsTtK1AywwkS8ADfrk8SPfisTqmGBVJJBkYQtkh",
  "key20": "Feyt2bskc3QzbEXuZRBW1HdKwLo2PVUkbJph3gHiSPm6vTt7b9D8oB4T47a8QdZpXDFL6KnjgnNAjeQUNCwh3dp",
  "key21": "51DJERKoeMXF3V2GLTpokgscfLb3vppLwWAewxRGWJ1XMJ7RgtEMxyW134C2RY8MEbSs1dPyj85BJbJ9qkY31t2Q",
  "key22": "5p8c1YkV5H7uiTQALkH8VChMbGXZQ2qimpHwM3H9qFGSzgAdehF4YoDeRh9PrLqcQHKLbnVvDSxpUEQ4tEPnX749",
  "key23": "54EGwMRy8iyqRt1BVYFZoN4BCkVYyyvDcu1NKdo6nNo8ykpsJKhkrk1JwG3aJkvK76DXYRRDcRAZKUJuhmLXMRoh",
  "key24": "4212QeCvQFFYaiPMTyLxq7S65Nu3e31ECG1GMryA4DC5VsWc9TR7gt9Wif5SuRLKAn44ZvMTs69vwtWFGcCoFXp4",
  "key25": "4cAvGyWwLMVfht4DjhCRLGBxRFo4wnBjvNbzsH6ceH1htmB6QN5pGa6pjDr5m8M7PEg4L55zdcvNqr3a9TbtYjcf",
  "key26": "3tLyGYr96G6AuAwLu1Hq5tLx1LKNMivNXpp28ouaMo3Y7ewk7pHZSmj2sjapLNLUfCwqRNafxx1m5ChWiGoakjvV",
  "key27": "3k5gh7fw1vdE4wrYLHdu1pTmSfjG5RdEVAPBAQ47Umsq2A6wMUHv4AHHmjj2YfJ1MiAs8pSVzyoqfZcMjUbPdAvv",
  "key28": "4ouowcC9xvaFt1xrYQwoyybDMG95pxcQ7yUTBcGc8wPuoVxLyUk593BDoNf6TtvkkLincMDwhnr6FQchneseAvMd",
  "key29": "4YJw1DzEFiQfp9RKnvdXtx7u3fLNoKKS9ddEiunR4jFJHtes4SNWKQupv79tvFrRygbkB44GXizEiRrSqcDYRLRH",
  "key30": "5Ns8HGF4kv8nfhGdoWvLY2FZ7spF8WZShX5fHiLMzPzdKM3LX3JTaPU2QKnKfjw1WEUpkwxY1bjnFbKbsnF6Ug9H",
  "key31": "m6DHi8B4pdBZybzrzg9mWwY6ANaABPsSM9R2NN1onsZSQbWHyhYKkU2bC1GKR8ZFigdRxaPdKfts63m32hAXxPs",
  "key32": "2rmj64cgddSnmpJ4yiVdSCMq64di3xWPYJRpd65EWabGJ1b2LEMXSrbLnWiAjFRX1fdwHozHJ3C494DXdS6R7iXh",
  "key33": "4PVb6qvj4SaF3XwDoJwBDoEvcFLjZEzB2acBBiNi8rMDVtVAt3usxSZhLxnGwhPsqhcqEov2nJY8zy17RJ5T7ru",
  "key34": "5QfXpACbD5hA4U1kY9CDvhfo5C5uzoyvHWgDzEbbEHKCTkvkMBcvLLZMMTk1nw6rz5S39yCRXTzsurR2CVX4AZh4",
  "key35": "65ocVuXe9kDysUDkbGwjz3nUGzc87M6CTzihxnCqhG2foz7C2NqjCSHS3N1bYYByNe82h3jxsgFKvduAMLxcPdt1",
  "key36": "4NFbtqFjjLTcmo4ekmxciyPRs5u9w3v39YLgfqLT8DSUWkqxQQDUjoza6Ny1opNMv9YntFLqUw9YZeUf73PAgaN1",
  "key37": "aCVXyh3KbCNDZQyAmCNZLY69RsNHHosGjYiTqYbAWxb2Rhryb8nAnaK5etsqTcncbjWqihCMTcZCoaH8n3v6wHS",
  "key38": "36yQgXLZ6dbK1suQy2QM5xTCfYhDBFhjcBYreL7fhB8vBXHrUW6ek8L2tkKq4CLMqMSntoDoGcuQ7YiRZRQU12mf",
  "key39": "uZRJz62fDzDBQoL1ZCdRfyF9vTmV87nkpiHXWsorndikM7oGNhYGtk8VKBZRi42x4H8srU69kbPzX8aLDDGn6tJ"
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
