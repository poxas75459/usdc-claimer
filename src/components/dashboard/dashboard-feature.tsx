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
    "4B6yPYBwBghXhBkbCYo5UgGyfN8DP6pw8asjxqxTaLrAt7ZkcbHiCpncLLBVaiwwYAuoXQmVVp5PCpRtJbfND3gh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24V33h8zKwQwZg9iXDFEoCfZDmUDzSm9KHVRusyRt6zphZTjmuZvhuTvvfksXdNhhgFvAwDsFJAf75va9FxURuCP",
  "key1": "4pvyyhQMaeXtfCwx3T5eq4SthNQdZdxvTjbyBkEsvKbXGBqyewB8Y65QAokRQe7xoPmWAm4FDTRn4LPrg3hC8s2p",
  "key2": "5P2XbGQ43yqbLNdrjmo1xhLfEFAj7vp2uxSF5S4xoFHat61eLKtCGrdY6PYYhjzMNZNosvT4Y7uVawi8suJ6xqWM",
  "key3": "39W7yx3MMRUafB4LwPEttcUPEd3EjvJp5x9jQcWqqJu6h73yMBthGyqsJZEgs5Msgd6Zvw7dBF6hMmEf57fSotPs",
  "key4": "2XiFo8YJxPheUeqH6pDX45SarkfKMKcZBgqKnqwLyarVdF958A1nbDRWo31Cituos7QVfzvBxFv63GNLbb8hvmwU",
  "key5": "3xuZfQbDT1Xm3GMc8vx7xfDWUNFM6eZV6xN7hcYYLtTz3SUmFNhhrkJgX75CRijfSVHvXr1DR228CzivteXUk7iW",
  "key6": "3QhEtE38azcMgUUUWfXKXQGZq9wnZDEkK9eFmModaxRi2vYyEVB3HygcYF3kk6qY6N3KDRiDXZ36iEAUJqDLZ29p",
  "key7": "3Hf5kDzjT7K6dzcVZm811AwXXgo4mDSMG2vi3qUyn2rUeWefWBHkNafzeHPuzdW5EXtECzoZEePvA8VBzhNzaCGS",
  "key8": "5aMYjmQN7mcspo5hkqZuLwkzx8rDxVCs7vpky5LKPjYVSTZsEtjxkwsS5wR5uXGyWwbfGLNw9rhiBtuZSQY2AzqL",
  "key9": "5t6288aJWYHxQjsi1rpMwbt5hnAb1Gud6tKiCNDRXFX62wKKENwghtomg3RoZZQWTuKFeVP3FhRGxHTyVdo5V52W",
  "key10": "4XLB1DwfoT5khFSsCDh2JF6yLmwj1KwfdLv4a6H3fUtb1wTcgc9rGhEa5RHDWnSFa9vjsckt7E34sxfS8dEZqfmq",
  "key11": "8KsYTKu2zg1Q3MMcEcdMhhTovm6uVqv2aL24ErJQ78pYTLewkUrU9GpT3Wo36UyypqTBnrcShUv9g8GsqAb9vBX",
  "key12": "4eyJA3SyEwQhv5jADpkLmNNjvovYqRKLdBFKNxpMuC6oBM3RijobkMgSVqeYacXapVnCbLWd95SuddX58UauqoRW",
  "key13": "4oPwgtBtnTUTPE7m1WUaQMm27kzQ9gsobTn3q6EVukctoHFUNTYiLHy6sUB7oBLhdeUmbVRQv5cKaboot69F22cy",
  "key14": "3XXJ9AZ8Mj98nPTacGfimQbLnznDTyAAWryZjdE6UaDfuL6HzsDRfBssPaPfWJrNnwoqVX84KJSJzEFH4CeVLVry",
  "key15": "5eCpL2w3pdgTy7erjmjVQfnV99qbjLg1ncHmPjTc3sEFFt3ANAZnZiFArntgPrbxnUfmp8vwLqcKyD86iuohRy7a",
  "key16": "4q1Dbiuc4ArgxQZmjaPqccNf8D8x36nQodr8rhaFLu74dgXSgkW9ot2oZ4n8ifRt7L9HRtoZwHNnMrELdakrNQtF",
  "key17": "52uDVrUg4pRNXmd4vW2HG3CwFc5u72cuNfMPeQPFwr1NyDSgJvgUV2S4YYuvSYtMFDmbEVAoFJiKq79KmR1ppi6M",
  "key18": "4nQ9QR71kzEni9qSzrexBERMx3mU1CqdrhiwUeQiNByPeELTYBShJhtzpsFo1b3ReNMzBDT8dSXGjpVKX9FbAJJc",
  "key19": "NhU7sxHWTocP5i4Lw28C4bEd8uoL6Ho48dPci85At5G98pdvPq3wEuaWyapfLGWxGEaGheS8mGSBLwS1Gcz9iuK",
  "key20": "3Fnt3VXFe1tuk56RKDEQiG4MPDyjEBQJpzTDJgapW4AnrReYYXBRPmua2KCs2W4wEGq8u1H8rF6waepKA83nWtYv",
  "key21": "2ZDZRvgpQxGSLrbdippwBk7vUYEPGbGwNE7Qciw9USfFqDAMq21x1g81T3w6Yo5UxoRjt8t7Xd5L6zWVxLxFt8SH",
  "key22": "ZAGL1oYkihdtFgnG5G7vRHN1PmAKtG2QAhNhDkjd56rSsQ3sBs5EW1RLeKSGGZfthWLHHm5CFpyjWufk88LjpgW",
  "key23": "3y5YaTnz5yWHbzmDjNYu15FVLMXZWSfxQZWBm4qC3TiMNfewALpsp3xUkM6Zfuphe8h8y3Cog4WWRvGBEZyMfnxH",
  "key24": "28akmXk1uwsrekKTLHr75UzqB6bC12JXKh9pVVh3ee2ntyntAoRtWt8rzVo9GjrEnz6MV47diTiVWPc1BqJJ1y2V",
  "key25": "yVmGt5wBdf1erAGh8oohJzA8jma2yjA6StLEbf2WTBjr29mSX5TGma9q8ciHKCCES5WJ8j2G4GdUGiqTGYTXoaU",
  "key26": "225aozXGGneqNqU2E2qqzQ77M7WbhhFpmWV1LGaD7NNjW2bWbe66AyiB85jYWVLSxSB9v2QRfeDqSvsthYwgKGRY",
  "key27": "V9nGpFNDduPx9fSpg5K9qzJkwdieKrNWx2AsUtq1dzQH5JzmR1tuVamy9mKjfVEYbyM9K6sMs5JQYckA26wrgqV",
  "key28": "4mqMLr8D64BuqxDRQt3AmRyBVXhbFwtvGQGnMR69WthVxonBvSwJRkqCj4eAWnrrSJDrLUUnLhmbkLBLxLdbvJTG",
  "key29": "325sP6EMnMxQB3xYzkemmwhS5WJau8S7jnhSidb9fbqUx4Qp1ageR4e7GQQGxT1NVUAa4LQTPYYGxUiXnndA8R16",
  "key30": "4MUWf7XCBSUa7vidqzHF2YyWEBST4eNdwquQ4RsDUq156yHivioecraY9JHKKJaBxvh96rtoVGcV1eWgrp7xu9j9",
  "key31": "2927As5LWFwwFVGGFfd2pG4x4W2SsJXaGRKJdPQC6Uwn63zyV3662m7wRUXR3BNJZA7KRiG4jvuCY1t9mTqYv27D",
  "key32": "2nrSZxah7P9f4Yimeg7e47joYjFavHUVpufK5zMRHWbGy4f2z9rnY2yjjkUCwr8kKWr7BmkJNegczzUSTDCHCWbM",
  "key33": "5WzHxFSQ5GEgjPbyeNLz7QW2Zmh8VS2ecgS5ckPuJ4RNLrR3X4PPPjeAfcFRiMfFkJp5gpzg6MjumM6G5riiK3io",
  "key34": "5HLmXxkjYLwNYJkbifc6Yga8GFT2ERKC4UiW2K5PW3SFaVUUy5ci6McDsbfhk2u29DWPYLYjenh4vuL8L8zjqeW7",
  "key35": "3YTHMXoPJydvXDfhHposL4BFzNftVQZ9s5Sq9DmaTZAdtsSX7whXfHsiWhNebRvWk9JGt4reKSeeqa97K7QqwVoc",
  "key36": "4yj8aUBZJaonBZcb95E82tvQdoa7Anyq7yEv2uGooxLBzAMVZR1xopcdT75kzupGPyjQjFMsUrGAZ9oqnfdmFoKr",
  "key37": "5bGUu5kf4Z2sYsHDUrX3V9os1uCNP3f6GmgrcyHznFmw4GVrfBgj26oJoLfzFqQSAAGmBgvLosZrwgbSWeuHEuFj",
  "key38": "3ui5TZ9jHoGRCdMGTSfX2xJxMWHTUPQRoazRoH32JYsSwDUnLjPqhGXfj19yFjWyFKJjpFB1YNYWAvBscB6s1EoU",
  "key39": "5nFFddMgWp41biT7Bsi6Bo6vaSGtsiDbjkux2FZ1HTfcBh7kfAydi9S6D43uHMmrzjgGpAJtmg32mdiLvB4scMZi",
  "key40": "3Vz3mFPqaNsp1hDZDAFHMrZBVi9BMq8hUi1dyp245K4VQxT9Ekk431MrAn2dKzqUrzvfqQksmUr6UQsYzsJhoQxR",
  "key41": "3Z4Dp28mjkWDg4ctYPR6ud8UBZSTsMURHzAdnzAVQjXgKf7qbGe5QGsRtyR6WeSH3Dd1mJzDPhAfTeQrnSwPS4dm",
  "key42": "5WnWbznyfy4iq82fXMWPHJyyT1JPEUrjZtTHvvr6NUxPWAbQtXVJaUo7VfG5HAvtmdRynqb2Cx58rL9dFpTQKWt7",
  "key43": "41bjVJvJEEYYw1JMyUM4X4pe5iiK13bUFGuZXX8RjhJ5JBfsGFv4zAcneL3P8jbydr7gxWwpzvbsVDTVfzdHgfC8",
  "key44": "2wizeV5YddvzWKyYxvCkpuwH8FqwgE3txyrSuzm7KvtAHGJcMiefaG2Tx5guco3kuhDiroQxLdnaWgutJvLYoppQ"
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
