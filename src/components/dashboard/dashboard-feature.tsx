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
    "5VdiihAHXBsxofSXphoxAQkpBwy83EhSPmQ2GsciubxB8RPXu4iUJVUNHbncWhQjG9dPi3U8PR7EaUEwzkxfbgf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29BXqRjWp742DRe8pdBbdt9me6kYN91ryX5mdHdQaEdAivUPuXt6RA5AbBE9oFt6z3m8CLBVeqYvRByhxjxde1Dy",
  "key1": "5n2oHNiEsjpis1hmcMAJPjW5kMWvMfP5ay9konsNpcU7VSryrBdWpu95g9mbZF4CCRW4XCCEKtLmzPWyv8EMYvFA",
  "key2": "3fQTgRsMymbRdhjcpSGGZA52b27g4Z6UHmAc3o6szt8Vx2Xu8bWYHFDWUd6VFgVwGu8qkxrAfPMREYPo2WmxNE45",
  "key3": "5eLE7S4AjML2jG4GAXryTHwfMm8RZBV8ZDYhx4kER8xsYZJc4gj5YvF4qzhRLdFAcfnGHzX5mNugruymY7dQfne1",
  "key4": "3YQ4ijkAYwthz99dwNALFQtdkkSif43s4vbvM5icHXxmv7BFNcJFm9qH13X4QNwg5zAfwXHNbKqfojEhMK1UYWqE",
  "key5": "5LMAz4aoNhZqS33RfVQHgXwqrKFDbP6Yfrx1GQKvAjvJAZe81mmwVHmVyh44Xeekqz9TeBdgFUaG4oDuoucQz86B",
  "key6": "3ckaxFks8gBXyNCi7Xr4omtApYyV3CXz7ikMypXMdStA2wGhdQXpSz4xPd8kPmLC3W9AyQPQtqjkJ2CHDmdShQbe",
  "key7": "21VAbF49zVZpFAVSd8wVoPezwoxvNKgFRYcy8WCB15ARcGz8KWkFsCP2gVWZuCwpFnGbCUTPLrw2WmhxXxG1mQhb",
  "key8": "59FFJkdRwkEaPQp8vvZ4MMetrXRCtQP8R93ajRj8ZPoGPfqSKwaf2hQXQdM6bZYLSTbxGBR9Zg1LfEAysuPy7UHv",
  "key9": "5WP2zPpE2Bb9wUmUFv2vo2wJ1JpZASUu1N8R77avAo15TVycXNbHeF6nxkdN8fjyHbzNpEM1cqjtZVyBDCLPYEof",
  "key10": "GsduRmxXg3qatG4RfTdLqCQSML3ffUbqUAoBeFfYnVjm5tTMJbdSACg2zKMndewG9fn43MgSJF7JVF6Qfx9YyQj",
  "key11": "kDbc7WdjQBGpW8iWrhMyS9PXSfRZs71eU4zBrvmkTEA7ke66QbeM3dFKFgjWjnvVqj8XPaL61DSyixVUGVGSUu5",
  "key12": "54KVtdHYuv6JtcRaPhd5SCQJq1V9LNKKVwYLLzfRUVaYFQp1YzC4oJQMPGqZPbcYJzmy6Zf8iYST5CxPZ5aJs8aj",
  "key13": "32HJwsY3AYEakqDghUSeSvw6gorfNz9kymmCtuXxMULUM7GfihBgLLo2V2kpRXp1jLnrrM8zstSYFPSAGUJETyYJ",
  "key14": "3am1yCRhrrdpgUqePZGtAigT8HwBaNbNZLMjzMJKVZ4Fp2abkSFY1QSSfKYejywxvsmXt5MEALLD8XYBnNRdBcEr",
  "key15": "3vnB9Q7zYEXJbL57RkxcHnbC9VkBmaqjkuf84nMPK3Cgy43roXGY8L7hDMg5rwxE4M73hz6EB2uaBEKE83wihnsJ",
  "key16": "654bCbqCUj4zjUghaWiJsfY41ULfj9u4tYaSxfn5o4eEFfiGsV5L7q8bTJmwaTTSugLvA4ixxJYdWZkt4zwwzAEN",
  "key17": "5mxmfypxfTMryJA1hP2EXEJKY9XEbWLpQDkjMNhWnzbBBxUEzXHZTi587SfBAx6KoZP1uCrLWZiDfA6y5sWE9UtY",
  "key18": "2xExk2zrYDXEiVLjvzEWx2289SmmYXQxDzmjuMQrnRE3oAH5hDRpuNhTyDBHtpgQxtSuDJxkSKCi7xdJAZFVmwcq",
  "key19": "5piodSZDWXbWuHMH9A28dWFk3My86qnLhjv6mWpHNS82DveizeZVhnYqLdSXrfKWGFf1Wdy5zBNjVYVPrUy8akqL",
  "key20": "Y9JUzmj6wAjvMbCPXsvHcDS8iLdFDe8wWbsNL1ELPKiyhGBJhhQLAyRhEEWBWQfSsSZMz5mPrmZWe3g2oY3EPXz",
  "key21": "aPArftFhm9qDH485MtudycE7mky9wZEPpCAK4xBRe73VYKPMeBigtcHCtjzLyhuBcLcuUKT4PUWrgEzQE6s1wzY",
  "key22": "5XuF4yNFhUT8mx6fPYRYxdhQ4RMzxv9xSqEDE5qr39kDUdPT1H3pgWp6u77W4YuLByQEgQTBJ1F45KoJs8ee65Hc",
  "key23": "3FKrCqcYfTNdXGp8NTAXLvkLCEj7vxRGFchY9kgtp5seCehYEzGSR719zsef5S1P2LgBcegdgqeBBkb51L6HxR8i",
  "key24": "R3g9yQ7QZwYqdBRDmVY2ebzYyiGCeb5L1VvSk5n7jn3YvNSfNt9xBGLtUmbEQF8kmc5dTbPeUXyL4J4RsbJRn6k",
  "key25": "55inBziBdpGhCAxHydcVG17AnVCfxT79e7mVHUNfttLvMSbHCvjF7ED3Hp2hnUEJA8FNRoSvaHRLafiXupNckHjx",
  "key26": "5z5MaFU7cXQNbb2nxs6N5SmwPkR9qNsFME25AskciHDbocW6wBYuVYE7AcUpPS4u666pnnRk2vTBn7T3onSbNMhY",
  "key27": "47LAiYwhtM4ZNTkXAdFBJiMR5JAHLoVGsX64yK5csxmAwZ9mnTXHGUYQLwzs3P6FWwag6AoDZjzRTQKuzPgp6Xe6",
  "key28": "51uhcoBkhZuqJZE2C7cjXg2cvjT4BhJQKLDpVEaZEnQCjdmrvYueQP7SDGw64uiVWLpdnxSG4DuBe2TarfoR4xAa",
  "key29": "28n6NgSRAR6DWas94wEicvcGNxvsogVrvccRCY463VT77pKNJ324PoGMXSEST6cVH2Yg9vD4xju4iw2KKJ2HxBdX",
  "key30": "nmd8FETmJKkBLnf6AkXjemWKZZ8RoNXtFrthL7nHR7KJo91jRGKjiAeiLdDL6dhCt6ucKjsUrHgJ4J1cHa1Pu4e",
  "key31": "5ooReLCdWp3zkSo7zhr32bkKWiigtAG2spCe6MAhvxuFjmwSb3Hr51m4QtAEcoEpkGbiEZ4kqzc4sAmj75UEuFUd",
  "key32": "5jQpd2yvYYoHzyCjJpQx3bMKHrNtVBPZsUFxMjmeMSmFh12irR5ZxcXSbVzw7aHrefsWVAa1e5G9e2teSYKGdvTy",
  "key33": "4TqWbtM5cMySiU141X1DdD5oCqTRmeyJaqgPavLweoLj3E6Ydw1v6UzBMKpraGR6U6xyyKgkLHXJyhEQh5xpoP5b",
  "key34": "3wWU9aXDDcWmjEyL9VFRS51iGQh2QwmNxcVcVJUb8p3zfFyEhWoP7bTd5uKFxsxKEsTxzymEnNwcjawgCjppXWto",
  "key35": "2XCJeaqE3zNBYioUemahYq5WjaVV4eyiVMK3VzUEzvrho2q34zispbEo9vT4Mmmhff4jpi4LBHFknfCHPHSmVBDn",
  "key36": "5vUCbJMhYF2Zy9nGg11WzJALB2nVhWtgRDurMX4bvVSjrtR8izpp4G1J391E283NQm37x37rN1TeNdTVRL7KadVZ",
  "key37": "DZeNzNBekSyenk4DLjMBA9JgCmDxZ8nMnzor3dYMvbRjTY7Jqdd9dSQWdh1vwsLebPo9u5yC3SnUfrhjVQmEhDV",
  "key38": "2PEmw7eZhfbCz4g2YwbVg6hf4LoYjKLWWWv7GZFpLEsimCbTRZ2vDXNzcqmthAmqM5i2GxjAYdAwBhHvi6J5VtKX",
  "key39": "29bjRAVAxbgp3xvp7NZRAQYNggUqS3QXf39GRGmGdNc6cLfeUxkPLkDzsD16XP2oi1We6CrNc3Dfhn2GAVGDkc82",
  "key40": "5vHUBYBASvtJJfViwpA9mprRVVLV75gpfg6tUpYm5FF9e2fLjD3q7i4H5GK8WuiSfp1Zg9Hgc1G86sjb7W6sp5Hq",
  "key41": "W3frAotd8HnDfjhZfFwsWVy2RGkpX9ZZpzhNVVS5gvu9CqH5JAWcBKFkF7picYkpuGpHsZhaNCjwU8AqGaa6Wqx",
  "key42": "5Q4G8tV7KHkKfARxjFNoQRnQJBvkPhXi3sFqRgzL2Q4U5xdAnpMcrr7FacxCEMVZugB6hy4fRHkL5mxVzyAaCMsk",
  "key43": "4Hf62EWcEqC7zvA4pdrzGCvLCCpN2EHDE1QFS9Qnwb2A4so63CsKYNCjthqFmFbat3hf5GgnL1AZt9hcb5issyA3",
  "key44": "4L7NzktkgVuo8UQY6Z9sL8WUevEbkHrWK9iMdHMV9vLmzPdUHDca5ihUvY2qVjhPVrsKFcxRUaym2bmHaQopU166",
  "key45": "62WGkmVANYkPSgbhe6aMSKMU2zuXzz1zaogKCxSsj5bB2EXDK7E6ixSAWqk5zZ8LFsvxqubsVDifgDM2vGvf1Y8c",
  "key46": "3x4XiDbHnVowD6Zcvrg3j93xgkZADSeSXuUVq5Tkeo4w1mvCPNVinTYVX8HVzLfE8ek8YjQmDcdugRxjFxtCCbpU"
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
