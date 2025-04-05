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
    "2ESY9j3Jmaeq9kZ2HU8oER8MrbWLt9WrSbvbds8D6Z3rdUVEnT5ukUSSAVvHQDzGqnLB4jruJoMUbcYZLTWNpGoN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JuKDhf54LmUvYLaXDaxWaMscxnzh8J2bMrH4JYBXfthvnykRqKJSBacnNQUkEfVokCuEKGoNMqNtXTVhA9W3Wm6",
  "key1": "AZt1v3yE2h6DFfyvxJSoouDkrN1Nz5DTn6xDbAPBvVVAgtWzjAZBX19BmgiBLP9jNNgRVWTzhANypkf83Xe91dP",
  "key2": "8fSvzWtK2YpsQZN3vL7opCMJYUHtbrTHRTFxiN25UcRKsxv4WgTmuB1KD5MTA97wtEfauB5ZcqrJZmgKpTC1Jzc",
  "key3": "c2M8ybm3i5aMBeYVYxkfkAWJS71cxxkeWeYaEXEyJ4hurvqbcLFpJeX2PP3o728BGr8bymFQfN6ogQp1MMTJ8HP",
  "key4": "653H6NB4kDFuMt89LEV3n1gHmtF1VYa4VwdCYaEZa4KnL5axxyMy9qUcXmCZCatvMUjtWtRtKe7AN23ixHwmeWae",
  "key5": "2MTkqPt9iiHsedvjShazz7VoSNEv6Po2zKufVhaVgnzveGuyHvqiZU1zZbj8hqNLZ946mWpxLMvNf5g3wSTSsrmE",
  "key6": "3qCjhvxzszCxsuBSQMpLAvAR7z2CrVHVLBgwWoVEeR9JfLxRvVC94bXSqUmPboJY9Xe7RBvLLm7ko8jsazN15KnZ",
  "key7": "4qS4WzhE9LEtj3EtUNv7r4UJR9rcFCZvcZjJvVdrvt4to7hGgHdCxDPc8bRSAm4GmKvNokvAtsk4tbBP6FVsuRHz",
  "key8": "4mvfDnd8jMgT6ZJeTnJW2kVp3HhvRMfA6eoL883AqzNusiwq7uW5Pqfzj5B2bizPEqCuejuHMWvnJpCN7rDPLrdH",
  "key9": "2GgPy4eWe7XT3Ki3wU9Pc3AtmZhtiCbUKRWs9yvApiJYkbV8xMERoKGvrpVGGWw5ekj1rve6mgTFno3Y43mumfHh",
  "key10": "4aV1379TmFhct81HBApRtsTwi3V27MmRRmWz5Xbdbqp7Anq3HJGiysTs58xGd7k7Xt5VSZu142Jhy6CcQjpy34o5",
  "key11": "EEnivbNpUBMfg4xjrVuV9YryaDcHvHELqWJtTWXhq85Xzoih4H89SzjXCUZnMirsoMFpeiJ4oyS5f3E721bfRtb",
  "key12": "2eR5eMpgwPPF6GSZfhYsn6Pbca5a1FUi7X19Jz5QGtqRVHrJxnPYLHJ9eWSZwg4AvMk5K3AFDtFR6nyeQHEekJbi",
  "key13": "35BKrVn4VXC3r3YzFwDVDMBBHqr323tKbNjN2UDmyKcdjk2d2UWB1AWytQaJjNGwVLqXP9996LJpvRCv9MadpzEv",
  "key14": "3m9ey8Wd7Z5wk4sWWHTjR9XzpWjhMAjPDKt1bzTyKRm9kryMcY5SDkeG4yX4nMP4PZTMhxiEuurn7mPuDirZzZWJ",
  "key15": "3KqEV1FNnEnj4RrWKodCxQgTzKYs5qcq8v981ruQ9oLWEs2ECeYkp7MvgfpycajqaUEM8vQPRjPQy7hNnebQjgaU",
  "key16": "3L9BtXH4ivc1gRa55FUsDWniw4bGK1h72XX1q14XuKMev2DWXvvamW7UZRZHxXk3mT653uZACyT4LBK7hV5YroAN",
  "key17": "43PDv37BhgB6oJuxqzWXAF7vSzQhBQNGyQ9XpXMhDuRnfevJrJvqbSjdTr9NBgoXzDPQd9UxP4aUsMfRGpGTWx7N",
  "key18": "51fyayPXnQzhhenaGDRqCZAxaYzCHtYPKNBam6CjnWqEZ2cGAKmq6VZ5yFNEG3cY1HZw532Du9XixBTxc1Yoo5FK",
  "key19": "2N7XaR2DF4PAY2FKCSf3Ywagbc3WaHirca8LVx1Ae7aSUBve31MTHXB28iaXYnwsfrxk3qdxTtwA3v8ohUPGC2nB",
  "key20": "5Rgg7vBHXjMbfSNZGgPJA9DvRxWh2J7icUuMimVajZYUXfCM28eSWz2uM81NK6fsjzG8ZM9pgKzPDUKVNa6PC4R6",
  "key21": "5kvrEUhfbZa7UrSB74JVW2GKTiixAHr2YjyMGuPqKXrfCQQtVHAsL4irQSVWf5KnFFXuH14k3v7xXhvfVdS1spvj",
  "key22": "2PMhm26C3CEs6z4KyjRYZcwmXGGoGPhvQV3ZoSz5To2AfVe1FFauXWDpAHcc7R8wtUQMh5qjStGeoGSuDSKz89NZ",
  "key23": "kuNYFJVt1ATrfuTUgShYtgDNy2P6esxJRaPcU4m8WdJmY6vWEUn8iRCqqSHoGfRu7GeQ2fB5Z6UfF1GWBAgiHw3",
  "key24": "2Q1MLZydmqMGnqRUdZDKeNNCCrgfPDe34kmPMtRczRa4Z6Uv5qUcVrjdNJJBBmzZoBoJtsUBWmXRzvmbDDWpoMXt",
  "key25": "2HwBSeVHEUUGVSi1VyS2zd7sgu3frTbZ8bY2i4AiHxNkbiFsPpyS1vtpwYBzGbQkLMfPtBR6jHbnoxDUgxurJvq5",
  "key26": "36KD9Bc8WfDhDLbZFfaGiCmmQi9vj5M5bv5p2GAWSXRbk4gDuTCiSMhzFVZMjCRPY5tA78cHzLDMmLBrz9J12C3L",
  "key27": "5fzHL41rHTgnUXzU42STfKafxyRtwDMsUSSEnfnTkt5xqkuZkfWiWXjo5FryRGFVco2jE3WzRjp6s14UNJd453yJ",
  "key28": "5XYZAbscLkNXeGT2XmCUvFsEkjRbMVwZEA95PqjVJ46KuGf1EWjMscei8eZVjdA2eKKuXXrT2rJm6NsWJ72WcgBU",
  "key29": "5Jt8ogxwtp2CdNrUyWd3JbAs3XpznMM1PUUokhu5gC3LW8epMH4VTaekryxdvKN1w9t3gXjgF3K8fwMTJe8DbPXX",
  "key30": "61hdTN3fk9RNFZtB4PCWAapqrofqhbqp28HnB6GnYjutCwFskagNJNEMAoRZPWjqRisdLLF4rY3mpsb19pKbhZ8P",
  "key31": "4AitqUgngXD1GqxGD4oBTPehTbhXHodKnYKrDhMMdn9UQG1cySNSfLQvEKR3ko7YQk8DWQqjNVMXwgwXA6WBFC4D",
  "key32": "57HMj9nP2YBy2cbbErgMaKBTbwZZQt4uzZNoqUtSPXNPnhGWFPJGt2HHwdJLY7FyKtuN6XZXdYWSket8vk8eccXy",
  "key33": "5RpsxvCHkJpqrioBHBVb6tAGufqoWL8iqD4e7MnzoAGVuVQwqeDagJ5bhqRtMRqEGYwRMfkQ3Eo2GdaAxfcZ4PMH",
  "key34": "enja6op7diXMZXMe5Dw5j8gYJt8P9GdKgmb2MTWPUUzwjg7xJJ7kvqhRRYGMQEJtbWKLwfzG7Ym32pgsAZgvo3V",
  "key35": "6kYoQ1q2FaYyzi8eM6ife6FtbcyYbjYtT1WGxtJpecbCc2SDMixUNjzdrTLJuB5MRvjB2MbH8s2m4ZrVWDihC3L",
  "key36": "67jMv3QkHFhSzVYaPbNf2hWmM5CR2Mr95bRDvMzA7vHHFsfbXGMqDaMmimCQkbMaxiJn98F9AioXeCb3sEsosYf5",
  "key37": "3Dw7pNuiCnV29AUoEDcLeJSRE9T91f6cC5MFjJdUptd1G3b3Q96sANA1trUhuBKZMoWuzbUHPFJR9XEt5FqbGw4W"
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
