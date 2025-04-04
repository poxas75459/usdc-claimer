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
    "3xkBLxpKn7XzEAxCUffS77qaWrAw1TiifXuC6eXs3YSgUBPUhZPMneLHTBJ8fsuzNgyjgved2LCXVhnUD7tNuEGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fQqzJZz7a4z8j12C9hkkrMrQYwNJ3kyx5kNVJj91oBmJNpxzWyfLWezuopQhbcwPby5Ps43Vyag5dZF9GQidQk4",
  "key1": "2tJtLZVDhJibrqzYH4SF2LwJds5vPMshecMbmRk6YVeDJQsUspQgtUMQ2TePdBh8vK6aMSvYE873QnpJoWTBLizi",
  "key2": "3hBDNsN3JZquQGuVq8Zrs9T5UogNKKc8KxN5vPsDG2oBn3QmQeoGB1sNWwDtfHtaGYQDWHNWkapQjB1cN6PFxcdf",
  "key3": "5gRoR9kn6AE5fFNj9CQE2pJVHu6tE9iopcSVVwEJ35JjTVqbAgb4qm824YmCW2AJdznriSF3xkmZPkKfV3JBbba1",
  "key4": "4sp9ZXuRub7BMjbNgpQAKqRv9jLrDrek2n5iCAZFkk8XmjS52GP623KxKbR1o1JTFsBELVTj7JkANDXAnhRnju8E",
  "key5": "iCU8eJUH9QCYyvsCmfQ7GXEC9G16nBhqXvGAFwnwkoJG9SDSqRpwwZCHhKADS8DoaowupYHBXNerxqRpKzxPHDx",
  "key6": "5GUVznNe9U7E4EtwN37uVWAXUcNb8mxDDTwtFWA47XYndQkZtRVGxooNnMV2nWYZ8JjpkWtJc7FAg9iyZA4t99AG",
  "key7": "3xjeT2nBWAxHo4gzXuZLSfDL3RzUDsPg8DpPEMyqHQWvfhmuoKVZsS32TYpyBYt96sKmZSQ6zRCLiF2jCv4Qj5q4",
  "key8": "7VWD4zXJzkbSUw923fdmFJr2dKQpgJ1hfV4DFyo5hyPudfaxbazy9zsSiht9WaajamCKZfGUqPDxJT75B2EmmJ5",
  "key9": "3BhFi89Jgftd97WcWp4FoAdorAygYAHMA8yNyDtAF8uLzooFUYY4N8WiSjozDAKxmgKUn4xUdjsMZ2j8JHAryiKX",
  "key10": "4aNx1JTx52gpu1ABKYahwEo7SrUUaodiAujpjACyctbwTak1tPwnAsw9UzVGtrdU6hZVYVb3x6WhceFxfVgyVd5N",
  "key11": "2h1H3RLqgBhtbmNXLNPwwEpF5TpQhj4Hkk9M7jEerELLunhjHj5BfXmEMFxtZXoa8TA257K8LFPuKpcvWJgyrmLE",
  "key12": "3poUTp5GWyqvvP9ogyaaRn6dG4yrHS9aqMf1jShoxAQpaFw186Aa31LT8KrH2rQwRS5MdPqTJFcfgv7K5ih3s8Bs",
  "key13": "45ffyfbJ1yuSHp54aK2YtgfuaMyg1ow6gFXtxqT7NJxTAAYx5zo5vkUZsrbPpC4fFFqoKHdmwQA1gMmZwTMXZMH5",
  "key14": "4Nbfwb9F16qrsTsh9XSS6W8KzY3De4cfseJPLqWiichwyzE6gLTjg2fTKTuSVG9CFDzkqcW9skukgc9MbhkdEBsx",
  "key15": "5zgdjtnqjczXwG2RnP29vKmRcVLaMuctU1qcAUbba8DEHF3GxzPYEkTZ9Fp2VFhVY9VnQcGZw8YYB5jfSMaSxmvB",
  "key16": "bvkN1ScMfxXHzkL9LDNwYHveZt6myWBfuR6SM2UjqjfqW3DDtz1ocSy4Nk8MwoZeRYzEfQiU3CHSkCNJ8Z5ocY5",
  "key17": "2eCV8tA6poU9VxgjvgT57cu54nixFD94Ny3ZDFBN1a9Mezs5ejGpAigYj9u94YuxrALQzZmLfYxzwxRJLV7ZFyFe",
  "key18": "3h23dguyAhuxf212XKTwRG4tZ21VqnZrHX5xkax5jmxMKR9E1qRajbJczZmkRxid1YgdebBzy8GpuHwkNNWLYTyq",
  "key19": "4Mxc94sRSog2oLRdNVFbWY6z5i7E2SouKYuNsPVMhhYsDwwhQZ1FjWjhfvNaBwgoYxLhjsuuoztbJFtNBdsHYMaG",
  "key20": "3446L7obWSqZEZ8SQca1F5Aeb3hEWYW42fQxmdpNj7CJVvycYYXCyhvVU7dN5snr7Sc3moqSreCf1gTxxw5Z5jPY",
  "key21": "5v1R7fjk7Gb2fJGrVgLmJqczb37h6vXZxc5biCQzTJJhhcgJMRUpsoviUHQEYU5g49uZCHSHjs5VJAFeT1pp1KHP",
  "key22": "5pybmWhdYBAhyQ9kW6TtxFZfendXhUbCQaNdGuQGqYSvMksKB2o4LtkujWLCakRFszGJqSGt288geoFEoJS4xBZq",
  "key23": "2Ey5nGDHKaFVAmoENtqdy5RtSFoMpVqzAWPb81WYyFaebfuhMBBuUTofzNgk7oxDB5MR7Lvnryt3svVcGuaLori4",
  "key24": "vVKVJi5AZrZurRfRLRkUcjNTxp8DAafeoAyp8R11g8kR2Wazv8DAiLKBr8isJ4LCWxTrLHXv57JmHm2o2sFpPqv",
  "key25": "5unhGJgg6rsVLf3vZKrAt27GC1aBefgvo7UQd1kjezaP8Y4cAfgYPnpADFC75snBecWXsfYwPWFdBaRvEfhQ4T3Y",
  "key26": "2NfXMCLV2GzKncoerRwW5ZBSPah4FCUqPTba5EBYAguPuSF4HxZh333cn1STExojeL27TF2Y1JrtXejzLFu2DHqu",
  "key27": "TbHqkT9MmpwqBcdvbXgV4s18xpK44jZcDnooKqhy6SXhJn6zNibsL4uSfLYMDZ4PrPTTKB7msZxMBGYRmmpHRMx",
  "key28": "3G3Z1dwzQ1fdK9EhwDhawd4Wq1F1g7qZuDdct4PwfRYpSAytbJN2jwYGAUM5TgCgWjodsyjNSs2zVyfKofgT8v5Z",
  "key29": "24vrBb2hhcAe3Ci7XRZed7dxgkDJiH3bgnC6KpQMghN2u1VgNb8vAhmwCqwWrFYWozhKJjtnMxB2Koqq9GvALWJA",
  "key30": "5FUGEEus57RY4e4GTx1GUodr9cVBidxzGYvdTMwWkDex5jDjkkmGQKhDfyQd5jpHudjz9gXT5KhgUka5rdi3mQ2P",
  "key31": "3ssYgnrQQKBWLzKEBuXRKDxDvzeDVdVu98KChmvq6hGEuYSvUMwMELNL91Ki2C4rvPyzzDZfPLyCVmUi4EihMFgH",
  "key32": "23Dkf1Mv1wrKLwScHULUdWgQBs7mYfxActah67sB3Wdpqi8EuhGER3KogXH7fmPtwGaDExib71r3xWiRHToiJuGC",
  "key33": "3i9ToHRnqfpvD6EJtBtJ2bfE5bqMUQbLBR12KVXGS8qdsCL9ystj3UnecrYxcmYf2PcAUc7VATXQPH9HmdhGUUoK",
  "key34": "66EoCFUxeK9oxqaixUpvb5TFHg9bwKqiMRmShmya6unDZcRwbx2AhZ3HWbi9WsKiJxDwHZh6KWpSChv9mJDFu2zB",
  "key35": "3SyzxV3rT6XXJgBxLdDFKzcQ5rSWByrvxHsPRHBL5dP1m6vzYQfyFYAuS3FtJ5W8ntYEa3nuUtCjprcaXxMxxo6",
  "key36": "4SfVacvNgsCW48Bia7zR49NH1eRcWTtAzFNZj7zuT5hLDn8ffhoiYMoHE1L398D7z4bKUrWsCighA64REe4p4azA",
  "key37": "2GaGGjiU9wCCiePAxnwzjEfGSJQRacekrvDfk7qovX3bA6vmh6KwWFrPfDazE53w3AZQJwzRcoMj3GH5RnpCtbdS",
  "key38": "YBb7zrfu9WgsVMZMkWm3VW8jb6oTmm5REfJSWJjoYuXefZX8FX3wJuSWaW5PRuTKDq4ZffBAt6PXgNSFJpAV7ro",
  "key39": "2wvWJhKKWy7emyxJNoXSxm1Dqp7Y5PGCSZd6RmHH9EcuDhUKiipfMCawfzaUQenU4pbEouneKENGx3BoNNAatTic",
  "key40": "p3Z4RFoTrKcoBrqxYCEsfJmYATncqZob4MzF3Gxy4amDyXJH5dHzJSFxF8iLmqyHCcyNrVJ7nQnTsvjJeZH5ojY",
  "key41": "64HqS8qtRCtKNBQPDUZfvZqjFx5UAN5Ue3fEeKWZxGUccsJykirp9z3E2DTciQ69FU8u6rWgKBF6BhJVeNRmA7Xh",
  "key42": "2q3gaZsWczB8bj4x6rJAWyfbV23mvCQroop3DAcPjeWV7YygvkhTCjEMAZtyQrD5jGZ1KqzwUJA7FkzsB9tS2xFm",
  "key43": "3wqJPd5hV2UxwvZwBtyafNZUweXTjjnjiTdxhq5bpcsHY7viYdL7DqQTTapXDJPB26aTYS2ksBL8h5viHfivG484",
  "key44": "GmemSFVpDANCTWTPw7Wymd5uLrZAVeGt5FA1sazSpkKdaB8z8r8iMUNfyxXChtaRiMzK2NaruydnkeQJizQCRrm",
  "key45": "3WSYX3ivp4sHfHNBwJbhT1a9SkHtMsqTkeebAEnEfgHtPaALZPbhzy7NGwyLBLkCHzAX5c69cUH5K1MXaGRPkiWV",
  "key46": "2zfcyrkmMyeJnrBq2sFKz7bDj5JLreNqHzkyVJQgbHXMfnLbP2RbGf5BNEUxnWezKEvW1ybXYHKF733gkp4bGiR",
  "key47": "2nEtQ97nswpy8rgdti4ZPSnHwYoT3NAkh7pXBcm9zvbVgRcSfyAf1H1D7y9Mgbk8QyZ9Fax1rHv2DfeNuCoDrXRk"
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
