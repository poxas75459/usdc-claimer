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
    "63jnEYKZfFAoArN43i1xfsJY5MpngomNsbugb7BkALtX5czaG47hw2uV331mWvNESq9EYS6x7dVsSS4RjtLpkuG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tfxoe9aEjYExFzauZ37jkfxduy3t5keEd2Qrja9HVoTCS3iiDnTEp9eZvoEQY71FZh9bAvGrcLJgsYkmDQJdPRj",
  "key1": "2YRCLw9CFQ9pmu3uPdsAESP7zyw4pXrXc6J5bUERSHy2QfKiKVVrFPCYAsHhE31vqU9siNez8Z4mLc4uzJ29jcew",
  "key2": "kLUzfu486nw7ZC9iztrydSMFBfXJPeYAL23JGsATJdNGg1J9p9DVWtXWCLwAeT8Tuon5RUvvc9iehUuituA7MQJ",
  "key3": "3HTwU2NJvesW2A9DVWgSAEVcv8qzpRh9EidvTHrek9r3kufFJ1WdYmeg9M6AakTg5phy6VsFPa9GqFRg9PrfhZ3m",
  "key4": "5zXRrxYhEQeWvcWP4WikPD2ygzPvygfbesCoGKTznysUMdAsaq5xpHm6CanbFVZNjRpjUikcEHoyp1ihy1pZxntp",
  "key5": "rhLwvsrzwjeQ8SdhMDKXUns8bQe7jNMqpjVCR3vQF4JHotrDHNFWYNuhFuMySmJjRaUgnUVgQM8kuCJcj4Ng1dN",
  "key6": "8MDZKikhHJy3SgXHGg5HsioRLKSvTQCwixWQ3Nd9YS1MPXi4qzPJetNcXcMzNe6KMJJMSv43rs9RXXqo2fzQdWi",
  "key7": "3tcG79je24DHhBvyiRuiq4ZjhjgPVgfaJcPuwxHHgGv2vycfxKaydBxAEePxbkPdS4zoNNvmfSf6Mr3R6Xa2bT5U",
  "key8": "gpJCjAHJfV4K2LpBJHtoZtufmGtd55dueAfNAqnbhBm9qUDG3GYP1ST5Mfk6PNSPKZL8qz4Aj8AG4QMyP6bPd79",
  "key9": "4XTZUdFhRZvi6SjVGYxDNWWvc14ca3AXgQAP6exYNJXUyVJrsjNeSMsihHA2BVKeCXT3GZUAxARU2tBiViBwvemz",
  "key10": "54rFsVJxu1C65Anvatt59wKnq9YwiMTSRbw1xG5HvMqTRfy6t1bWAambzMARUobYMWuSdD8XradhP7FmP4PkfrPg",
  "key11": "2y1TdZTZoVqNzrGWvuEqB7yrtrDn7R4taYE9k7nQaXZPN7mF2QArbtfWXvz8a5feZyfvqTgUKY6Sn7cJvF2Vk2zY",
  "key12": "2wPoWtGFY1BxjWBaCtfkKmKD2gyyahW2vTuZAjVUEqrHDBG1SXK6ghw2hsgYyeU3G5tMcWakQdeFbAEBRCHnvsCW",
  "key13": "szoZbH96gjzfhtQ3rfojkawgXWGXVsGYxhqMpwmApL996xvNokSirAJuArM3MyNeMNctUaoSqNFPqQRspHpUB7Y",
  "key14": "2jjt3SD9T7oKjVknJasS9KFX2MKrqXuhh3xkhz391iFEtcrk3dUAjuvZTXdboyqNmdKYxnKcNFBSECfBW4D5QN86",
  "key15": "5dUTjiL6U8gNapx9sWYtYngvQnBNNcunRZGEXBJjiVkdgRsvgCLGCqtbHyikjaZnhkt2Lp4myJEyQ3ADcVLQCoqz",
  "key16": "2b9U3jYa4yoVxpnPfZtBnEaBsb8Ad8b4iVuH3p2uC9nDbe4xEBcGmhn3QCPEKF3Us61nrkyJymYEPdtkDtK99UuT",
  "key17": "35S5MpPxqo67PwXiQKFpcdkKy1rJKhc8MVxs9ivCnXJ4YqUFHRRYTgKHpJQzxDzPCDBs7dT252nd6cT6qdJgWdFT",
  "key18": "5bv9vB6WkED93U1rNCHgukeWpcUZ7LUorV8QyGQWtio6MWsNzEfZRAivoVwfAijPjKNZ8E6V6CeNcfQaQXWeuLDz",
  "key19": "53N1Ub2zJ24Kodw7omy6YR7haLagY7KwTCo67Tc4aAGMQEi1MxR1v9ystqPK61nDHiKHcDfJ8UmwSFfgTi9CEbjD",
  "key20": "64oAYbm8gZ4Mbzeu7tTZPgskTQfXtYBF7yacCp2mTcFcgWDNnQBhqrveSQ4yEnshsBeLFZ4PXT8PKk2kkiW4m8iS",
  "key21": "4dsfsdX5ik1UfQZb6wD7y9r6cYjgoUVUSGopjS88eqnBAxC6V94YB8Q6TZwKQHu5Pkzy2nQ4FJaqoPJvdLw3ohBp",
  "key22": "5mkCBzm6BjEHbrpD9FaeBSn52Gnfxzi4mBTXYkmhyfo5otFeLd1gAMmK7TBpRqEt6cF2kSzd7vgwZwjaRVhK2q2E",
  "key23": "VbEWBeB5ND4ctmBqrwaQoc5rae2v3wWfH1Sgn6RJFC7sjVGJLi1iboTcF4AwXabWBrNaxtMi6bNTB86JzDMSvzy",
  "key24": "cN8JMgLYB815mmqCB8UcFSmn7HeAKFffL3bm5hSaQZegt1D9p3WpZ1d2rqMBzQvVvNBJc8sRY86rGFm8SqoEy5T",
  "key25": "2vB4uNcQpehaLZDLQp6DW7SBiDLrHa98jfZk9UeCXkfvnSPSmk39uCcSBHvAAL6HJQmhrK7t4MKrkH9DmUbUnjDj",
  "key26": "33F61mn5jiq1nQywzdNVS6JtuDLXcDRf6Ye4M76N2WQKJezdXjqVRaS9mPZQ2mXZ6U8VB3yhfwFTyuCkqcSLjDPF",
  "key27": "4Ko7wqECmoNeVvWYVyMvc2LgY4g6bgZh6qRRZbYD7DVfHv33UChPjeuowWvKDnjdieCFKMVadzB7jf7QjsgJzL3S",
  "key28": "5ct77aWg8FPmaiG6TtKPUvoaxp9K1F2mq8p1b51T2o2UgBhoGoMLHeejsDTrGSYKVLb446AprQ4RJ8eeRYPsHrF",
  "key29": "4XjsMMgR2akuZFWtBCfmDeAKuzy9eWxV4AD8S2GZCYXr5ha8eTXbMWqdTBrwNdTS32PvsaSq4AkBKyCMr9SQxTWA",
  "key30": "mKUYVxWS5UXHm7JL1QkMgjUd2LypHjEZGubK6MuXVxt9NeJ9ZcH5MqZ2cxcaZcXrJS3nT855TwV3CrZ5vHw7BRL",
  "key31": "rSi79KKfFqzUcwBBobrGXX5EqfKpZUbu9LLu85wxZtrT8fnzwig6zTHky58nBDM676P4Tp5zVxRoMhGX3LYEfHo",
  "key32": "5KpeKS2SHRpZKd6YWRGGxCzXo1in83sjQp8sEpzztZHDHV9wYj1csdV4XMEw8ewvY4Ezz2EM9qac5QT566qhdNex",
  "key33": "3Fr5twuWttaQiddjoojxBN2Bh9ZuBWkSTjNwcbGaQmGXDPcgfQX4LL9NoS3J1BN1K2Q3Zna6npXVxb9Q6kpsLAau",
  "key34": "3DaZSoRYZowo8pnbznDJNNT7CwUiRrRWNEYMdcxRLfhkCQaDaVennonMFCViWEvH3TxB6ghFTwBcv4eHHqP13oCy",
  "key35": "w6GgpudTkm5Ro4gMAkPE28E7rWJqBQw1nH8sHgJqEVxSVNKxFdo2Mi9gfhmSd1AnEyY2rRFKUxeEhTGbBuepcdo",
  "key36": "4D3Mb5BNjhPRQaHYjE1LSzg3cvAnjtA6zyD13L5k5PWGD3iMDbrtZh3Tzuhu8GonskZqv5wJ6nJtFrSB9qNGzSgS",
  "key37": "4oM9xq2MoQjn1wj8zbRo1xZUCykCycV9jWTHd1gR5A7vum1e3KqYo3VSonL2Hs8yx27PP9LoRNLwxLrN7FoK2D6X",
  "key38": "39bT7Sy8k7Ycn8G7wWyDFbpDbW5Zw1CF2wcYUxgqg5mLopsDDRXsnufQmaSLmcCJTc5rnKiWeAWVNNULhwDWRem3",
  "key39": "5GAJ6ocJ7rJnse6G2LXAaPkLwqi4oyasQbjx8S3hPXNCBEEDyzVJXHn6uKzK4rvh85Y4N2FXyiRfEqbEgoCMrbBK",
  "key40": "5tVe2DwwrkHGCeN4nLCuqZVrAShbFkrbFnQmsT8AJmw8Us9ZBK8ayzfBSPmBtE7AZ1chZNyigpzjmkW5dhx1Z3Dm",
  "key41": "BkUg8baMw2vckipgn4rynQdLDcG8parPVnrVPM7nKpTgcqoHjN96tVjTCZ15ENsDwCn5MMdKzWzc1Zv6WjybACY",
  "key42": "nUFPUgEYoGswDSMkSqLS37JbiUEe4rNQE8UwexhYH26kzkuKAGuCTmMdWTfKwRTAQLTktGCc4y3VS3Wg1GiSNK7",
  "key43": "4f621QEhGAnz7VCSZmheZZd2JBpTZqhA2KddW6gdYCiY3E44uP7f1dmzVhSccaRhohooo2v5LGhdWeijvrAsuL8y",
  "key44": "5wV73EN5RL54iAe3sMJ8hRuv7z8SaqJQXENsA5PiHaThpJpvwuuBbN5ThxCmCyCzFMVEN8L7ZrJYjXQ7TLtndJj7",
  "key45": "2FE8D9LCZj6ZUshG1bPm95SaQsQGsv1g26EymegGLfM8rC1JLRgqQv6WJmvaaSrmFcjS8cnaEh8PjEjd9Rir9Sg1"
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
