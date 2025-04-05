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
    "nbrU2LpXn1AMhKsWRAesR36ES3eBiR7fCZooux57oo7DLWd1yGdsxBeS2uZBvuf7HbrTZq4B9yxuS64fUsRZn2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oLtweKuWUE9z473oH6ZEbrGsfmKjubcj66GKw1yjco1Ji8zwMTQPT2DUyEL3HewvKoUA54LKqTi6HCS1GaP3zBF",
  "key1": "64V9nE54x1mToTkiHuzqz11j1gm1XqbzvvtWdDVjFct4aQev8MJRdWLxMF2tquCvWJDb2vGis5PKjUNTycChniMn",
  "key2": "916LWGdi2pCSxBcTjsrQE1nAMHvkTwU7qW9eBwxMwWxLd17eccweBuKhnALnuByHtSnpWdWbJJPehUQiipKZSiP",
  "key3": "4AFZE5H8UJVxniXcTcAerrKesxTNJ3RWxdE9NC5E2dgZ4ZodukMJhRr72XEuu5vWU16MtEz99kAH6F69dAdVTVPR",
  "key4": "2o7tCUjXVb7q1kDWfPQcjyHX2qjDy8tiGMhzKUd18Fn7NPizpatCGXsWAirsyLHEydvUgGPtG5k3NRdi1stSUnBA",
  "key5": "3H93HUHRWXU1eKsHXCGwyVdYVWUQTLWScQrzNU1BJqXvvj1L4JxReTFqh2ycsH73QVG1PWKdgLhKEhWTBLGV7K4",
  "key6": "2QX9GPQFFiTENJkRa7cegH3k3x485pMKdQfSKQQeXSppvXAV9gcaEjxrRm9a18uqehqFEj9PpYndWtibWuQ1s8oS",
  "key7": "4x2qucsxsvwza3qq13Sq8Q5GjBfBCcHGzKhkqt8LSxAtgEcfzo17AyauCWxPh8YWZB21N2oi8uhGFj9qBsAK3LPP",
  "key8": "2UQ5YWiieiwRkhKcjuar1xdkeAotbc9kH4jy2uCfyigDPn6zAa69YkrUKMC1HHb16K4GkJDs3w6sm7SoNrtohZSz",
  "key9": "3uSHfAd7zVu6W3P8YDXMuN1boUkvuq21Ud5jFyQnNxb3xM4NN3Cn44MEArhfindC1fwvf8YAoQG6NQe8uizigPeB",
  "key10": "48yfkZH7AsZWP8SMXyL1cwxzadnjAp6aMjnAf9yErvWyXG9NGcQUFtTMCrHVZfHoLEtfA9q5vArp7REnz5VQkjyA",
  "key11": "275URgQ15c5PSKnE6KFLyecjn7M9jJ5AKcbSCyeDCJfFAjjt1yKtQ9GWAwvB7n1RRBBKw89oL7pYqLrmBpyKUqoy",
  "key12": "4EstNBQUUb67XuEwN5YcgesJY4sSbMsDJg2Xp61eCAZokvjoQsM2GTff2WLc4WQu13aNSi4wti7mGDWJx41DdTJt",
  "key13": "5ePs87woBNHFsyxwJwYQTiosVV8Rc88uSpN9PrNzBvqqe2TGizcHBwxRMF8rE4f7pTgbd7YRHe25NuGmuexDofpk",
  "key14": "3AtQkudUUGRKBcApiqUfmCvPLQ1XbZe2iayPBx2qZuCRKNzjMk5UdE5JNSqdfiSiqX8Usoo2a6ZCDV8s5ExD6wDv",
  "key15": "31YgAwPeVnjbeyFcNXC48PjCHusefpwBhhAQaQK1w4KLzZSS2aznqWuCFnHgmaWcYAfLu2np91AZCYRHUa3hsUmo",
  "key16": "2mrYCU59nznWEKPBx6m3mJmHWUugXqXHZsKxtLRGz2HekP4tD2ZEdiKyjxX9UUUozLCF8ZyDgFcRVLev3gNtQdL4",
  "key17": "5azqycKAXyNkuaA1h8JvYxQ5sGPSFxRZsFwhT8wS62ym8uibKEVmP4Ei1fJwJZRvUBGtGGLkUSrTHKPHE4NMXtN4",
  "key18": "KDZj376zVpTpRze9U7jiqLjPuz47wyxfcZSnzkrY9qepQE6ocjjYeL87cRcK3fbGXzK6y9jFTwWDx899Ur8YvjA",
  "key19": "2eVxYtR7ytx2Tmd71pwmZeEA6UQ5h5wbFmDvtmxVNvEYSeEWt4KVX4SXTnUKCt2JKqLhSJCJcvLYWHGDs8J46z1j",
  "key20": "MZQ1YUbT6FrrdErV6teoN4rgkpmJpwfdnXWrJmxNEzFWUvk3xadzgWa3yKro43HJ3JQ7p6MPm8GViaENDPknfQH",
  "key21": "2faG4JGcg7N5UYLUoNY1osqAFP8MyWx9Zbqe8GqrNvWpE4ZJ7MFv6Vk4gJ7GGM2wY4E5A94hxDw1q1j6eRqPpM5h",
  "key22": "3XCstDybUgt96jgGawHt47g1JBdERNKAbV5H8L9Xpw8tsCHJxXJAn5HrcMRCfcrHLoPMjM8GxgNhPFHGdZK1KsWZ",
  "key23": "4TKKeLbi7ZbqP6bayygZYfLAUCAaZEiruEF6GUBAdHSoqVgnz374jrFetqVWTDGeoyWHz1h1CqL4sb3fkoVXUfw",
  "key24": "2JPkDHC2zRHgdjUTjJdXZk6YqUULMV3Pyk7HyVnQ5pNyBtffZ52kvVxzbSJ8CZ6MUcs1b2h46FcLuUSP9BZbRjun",
  "key25": "58B7rRp7WN6HeuMrqX7f9gx5dTEFQ5vVedZZSvVEfeP7jrnFx7WgmGDFNuj9bVpsbx19yHc3hcjpex1Xz7BuzEsi",
  "key26": "DhSX1GLUrLEeiQGmctQ5dDsA9MxzNKtR5Jt1j6MfZi93G7TPaZZoJScbYjNZ3YVVTdmiriXC9CFxuwZNECSKHZH",
  "key27": "2rukkZhF3nrqoTE2vSsgcokmPsGRrV8fJaNAkoUqtaCkgssU19jNsaReEYkcW3TeA6YkRYNckvib2aEtazPM1Y22",
  "key28": "5FDQb4eAjb6CjZUGks8Z4Bdja1eqFj1Eet12XbfXYiPpcmJ2cyHcvxxrR6jPbkRy6Rygtz7tPNjCwDWwCmB3C4nw",
  "key29": "2NtBLwYk4mM2HYyod2VwVnEHoYyhoSPv34RXdRSU9mayWiEA5q21xHw9tEqRBdxdqCovmTjvdjev77s3qNyXMt6e",
  "key30": "5XVW4L2MShPFKHYr8dE2LJsNEL8dou8fGRAEhMBpgUFvdnBjSx9v1K6Ex1ZA6vUafAtPajeZGdfbKoC58ZnhzrL2",
  "key31": "3nGpBxjqcG4UGEj1G2dcY5CXnj7swxgPfPyTgvLmLe81zackpzptW1fFKcjVQ8S8gou2XKipdLmwoJzZUWkt5CQx",
  "key32": "32NZBFfme3xsvjuLUQmqz5kqJZtRCtBKmhSFiKUPAj6SrbrDfzkDY7vGYULh8jDEt5CPVQ682MtMwwyURUJcG5aR",
  "key33": "65ZmR3Bc9zcEKuiWQbk9DNpi8yVmnGdUnWuteBn6k1sYpii2fJV82PxdqkFZqJvE3siV9e6hMMBJKCNPGR6vBDVf",
  "key34": "5L5Cx4EfSaNtRhYAGj2bXH7MPdSKDEgut6zwYrQvM28nCcA5gE3cLid4xnMH4rUwNNtgLRsEBcRXy5AErATPzifR",
  "key35": "46vCK77bmq6Nzfy3xrD3PES9ZL2cKY9ou3zwx4m8s3Mmt8xyjuAai59oreSE7AbbWyC4DRrXBwsXrQEu51t1gtcj",
  "key36": "3fH2eKk7rigSV6KCrNnhpctC67se7HMRqGQdGEUAtW2Thxps5P4zJJNB1K5pqjf7veELu2hi5hzUVi1etLwpfiCj",
  "key37": "4Xod2rwQuxyL9mE2nnJHFBdtmpjogvsXHgHodshYFyqZXeU8GD6TDsWaPbSbGg157H6Lm8Zi1j5vjmk3ixAdUKyy"
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
