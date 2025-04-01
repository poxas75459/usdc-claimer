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
    "kwnD2XUTrzCLBbBGCit1U6haq6pmsZP4GqrFNCSuCGhTGQn97RS2Qs7dCuwjuf1NDq5vKPrEyfdBtyAHQvEtvc1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yWH1FgvfuKwCwnvLyWLvEYx18jiPebGBHf4GsJ8xZXZewhZrJMUAdes1d5rRqaf19bWCZ7wn95YEmQz6DWwgNuk",
  "key1": "2AbqeQyFv3bNyBUswByWZUB5AmiG3uQqYDovLJpDmHtiTSHygdKtf4w46KG3rmRGbp76YSAWcbkEWJmfnAzAJqhC",
  "key2": "4QZ1waKVdjMP9PLSjoapeWNqFhEFB4BQLw9pNtGeXBQT5PuKSj45YynVFMDVG7H4AAPyncPMFzbmELQ5FHRFXXZB",
  "key3": "24wNpWbTLp9BEGKDxjZWBnLfejr8MPHqkXLb95LGBFNTKLYGjfCEzD4TFYgCCLu7f9AWX2FBYTJUtV9G5zc9TL4f",
  "key4": "5tvMr8SGqHiwAwUu7Ba8XV1QioWyswQB9gwAGrxpdr3R96tjEmQXtcZSeN4AW8kCDBr2uobu3wTDpS1BrbbE7rTJ",
  "key5": "3WHZB2kk8jESZYHdD6gdCV36DWg361xNuH2tZSwKp5PwsKKVKiR1XmByhjB1ye5pePjufxgyeGmuitF7s2FuxkjZ",
  "key6": "2zDgc7gEYyZQ5ZWEgg2rnDPjojLKZPgT6qsTE7Ew5yWpVgdsmZEpZVnHRUPu2homhQ1HveAp6udu75B7vswMaHFf",
  "key7": "4d9PttmxNYaXV8BnRsM7Gm9KizUPiwKZtU95SXaNJAcXf7JWAe8NLJsz5JFCLxMjMbJnn6PgknhT9n9JzxwbZB8x",
  "key8": "RJZfVAmyRPDDQLK4CcLFMwe5fqQojA5K29bkdNT1AnsKLNemHRkumFsgb4uqisHFataKUV6HjxGBZ4mYTdQr4A4",
  "key9": "3yArN2zpqxaZGFEwaL9Yj5Xz4jDf9P8jGeiHywoJf4zAZ56qGWih9NGRE6hpfo45nXBYcb8XqnuUf8JfuPouASov",
  "key10": "5eQWbvCkbkWGnaVWC7cTDug3GBtyPUXEWcAodvLQeZYermP9hZZ4gb1KpSwsvMj3Azgye2cJMqgm9Uvv8VBTU5Pr",
  "key11": "3b73sdLi29bjAK6EER6q4ZH7VdwVuHwwQRtfRQZzChFnY8Q5bbzZxdjtH6DMaPygoJEpfVrwPeMihvvzJWPZXTcB",
  "key12": "HSQiVAEwgQnmftCr1CW66RByAAvaqULNEUhm7fk5fdwdeXcG8A7M8Fkd1FkM5evwznV2HiKyDUJN7m3i2vykymR",
  "key13": "4EyZiN2NRXx7xR7Pc1eav5Z6XZxAAVoGpqy4EvtMDR41zrYVeytBNGwHKVXQtvBDArp1MhVA4xiYYrNcdpUVbtFM",
  "key14": "4GnQR1jwx2io9eJs9BciVhsFRzkDRodTgfn8xm7JdMoF8JCnr36UjwRnst1SzwBWQEyerhczQWk2jHhhHbQfy1n1",
  "key15": "tu3yrA25guvPoYU35ThQtCfSKCMg77p1ZxqVJBRp23mZ6wUxBjAqmNMvSDrWFRsuBjqmHs3n1gyw7MUnVPYi7E5",
  "key16": "25y5MG4SUTzj3PqGmnpZBy95T1YPwyjb6naVxPbvcPzrvaeVsUdrPNtF1eKPdCUPnJuj4LahMpXyrhVFEWktACzg",
  "key17": "2GAjFR4D5JMT9efDR8zqFuiE32BqP2DgtNqLdu8CEwmutyHL4KbvRCFFN87ge8iDjCtKd6HCX7zhrshicnJhmEf5",
  "key18": "2mYSoxhLW2mrRzUrCqJPGYELiDwNzt1uhZaX25JsMEumigomqTEZLJTYE4DAfpSMAuueukadkhm1DfeHTYux5yCg",
  "key19": "2We3fqftanusdBZChcreXDpBHt9WWDUxKR9Jwhh9DXYi5RHeUEbLpA4wNJnnumoEtMvWe4JfSEeR2HDXHDP3msFB",
  "key20": "32Zp7qvux38XdVySTBRqoomiRKtpQ8ahPrzbuAo5ZRq7Ughr1VyQHc8V1vfrdWHgLnzseoFoQN7TACed7khd7MYc",
  "key21": "2GpubUwJ2KFQbyxLn6ph5M5myjWcH62WYLEwY3upyTRJdGLVEUMSs1xFXr56UPrHaktyaNCu7FJ8gTa1WKyBE6JT",
  "key22": "2t2TTaAS1zvTffexiv9FVZeZnaqHCX2z84k6gFq7jE2jHmZNKPPPS7VeuaXBUuATuhn5Sop6NH2U2R1Jc2dWiPDJ",
  "key23": "prUXCQgqx4ZSN162hFQMLVWwAtej7xvcfUDf9uWJ4en6UdHpXGEXcYfEUZnHGN5U5LPnomepHGQa7Brpp4fYXWH",
  "key24": "3UzX3dFKBcLkdrgnHPin1QbNvoY9Fdxzv5RVgBAbchNPZs23JqkoBusrwFmK6CfeSFSEJFAw3nHW6GjvM5yQ14S5",
  "key25": "3P5tUsze5sFy8dCqTRLcuhuqSv4PAGfycxitcNYRYGJj9rCfFEEHsee2mT5ssniWexgVDXqrsvcQVpU88wwQ1Y4T",
  "key26": "8tU7EbzwXoFJ4c24XmwcBCSNLaZ4xERdJPjaPSnuaQqWNbYGBd95x6a5E3kEfp2CB18HaXQPh89upYu5G4tfwKs",
  "key27": "3uNWaFASCqWopwRrszk4x7bmLhJLDXaHzWfyofraMxPKKArXowzSoWSzpQfPPUkpHktEhJUszaAu1pkjsPFnD72g",
  "key28": "3fgDGsVdbAtQ2gGcUwvsiYqyYZfrPaYSmqoDHbRDL8V9su3mUfu1ZwYDaXYoFMBgU7BYTHkV6n4t2jWi3fwKY8LW",
  "key29": "ewk6fNkQUHUMTJXzN5hAVVztoEQ6GSKmmVUPBvFVB4nvzC4rYWgxbaoTqBc6Em8uECmLuupx34wG8LasGq7PSMj",
  "key30": "2vnPP1fAtSbN7hpAPDx9g2WLJEz7EGnBy6TxqABRKbenqxrYvpX4zUFNScTyQuoqzxdZJRk6KfmE6KxtsS3ogrLn",
  "key31": "4qaFRBvRWaqCwy4PK5wznW7Fd4fdQiTpyugk6Rrt6tHJY5rroe6bUP3vYP5SvxjvKtKJVrsNzaTVVYkuv2xf81ek",
  "key32": "aMZ9siX4uMC35ynEZ6ZSVGnT5zg8zm7dT4CrRY3DxexE5VpGVqzshoweJQtVjuWnqJqUDCEaavt1u3QMAdsWUTN",
  "key33": "2uFRwam9fHAYaJ6d3rDcQygTptYUr5j58eLQoYeNUyVh5m6mfxR9s5ZdnQU1wDw3yvkFVf8QpeuJBCsFKk8UeNKN",
  "key34": "4Jy3txkdNXFFLvBMjQkzPCf9Pgntos2Gz5W7uFVyRF2Z93dKFNhD63ChT4HzMr5zhhoyeyyi2jd29DSnnDG9muGV",
  "key35": "2HAgEsBReWRwSoF7uPPTQWwSDg8MtxYGADJb12egFrcwBs6Q5BeQf4uLMWEmooZdBSxW8DFx4PTPwwtPmxLacYsg",
  "key36": "5eFhVPJUb97d1VoNDA6N3cskaoQgDAHVphxWxbZwpEpX3Fc1oBoH5hn4gqjFy8rd2irD6Qq9DMQAHZ2V41YYsxQr",
  "key37": "2sFtv4xaZdNS7Hvyi2XwXaEUAbp9xXzdqbXEPL6e4DVM6ZzuUkUDiXcUahiKBQJNG3tCZqzWfzATaTqPZ5tZeetK",
  "key38": "2mqdtdCJXACeBWmguXze6Vq7jNwcFkDbDDW9TQjDyG6h4uzt8BjgqwDrRED474FmNMMn32z2BgWGi9y1HBjF83HQ",
  "key39": "5dhVYormvckGwywhWSY3DrzzsUcmKdZgH5DYBk2DNfi6d8zTQjFv22u54H6sP8e6ExbnWZSizUf5ZfsZnGJXcLhq",
  "key40": "2GYmU5xxqHWqWC3DSB57AA6Lmn7xS5YE1QM4mpwfRaot96zcLkFKJcFy8PZJ8gUD1nhpcxTwygvZZaxKyLwPAqSn",
  "key41": "5mjcMaZ9sPpLxRVuksKMYYs1v7P9yz4Qdvj3j54waMLTSkTsUdPsEC3iykzB1uez7GNs27yUWc9rQNpb2zBAc6ms",
  "key42": "4QPXiy9h2CEhae4hpaCMJwqdKtoBas4aVxzsjbqJag6sfJiTCyq6zDZpcHpWGBbsh1JnLF8SrYA6426wJNB9Gxgt",
  "key43": "3odo9FogJjHRS9fQtHc8PjkEi317u9cw5wBsX1aBzeH3chvSTcna5tkP3Mqv9YCBi77csa6h61AhwNuAdLrobzmA",
  "key44": "3BqfzxDktbfYAL39oaRg4qazWsXcJRPCXtsitEyDepgtroWtGeh4okTLA4dvht85RsqjsXcZsAkuB8tZbegBCGK8"
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
