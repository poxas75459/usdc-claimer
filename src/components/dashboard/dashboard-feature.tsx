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
    "34AEF6UPhFBhukKEK5atmLg2jZG7hyvFXaRdd2ZR9STKtAnfCCAJ6VCS1fcaTu65erpHuaYGhvzMzWkE5q62sgo7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eKkgK71FxJYJq66HDUDHhBoa97baEiNgfcmoCEU6UXJUkoVDbHQ8X1FLrxaTW82NUWPjLikhy7HUdfwAR3zm58y",
  "key1": "2tMzFgEr5f18zPibQgWHQQTfcez7c8MR9CkKSEjTirnsfKRmB3bYVnpsd7JgjEJF61BLCbUqAy1Ly9kA64x7Hbbt",
  "key2": "5xWYgTH7rP1e14fUrHQgrjx5HEJgSjGiHxSyrHGX4AYLW7C9xJwa2WbyRXhbxHRSSUF8794knmijpiguJQA3SJwR",
  "key3": "2nzPxQvoAi39cABkaH88vtGvTf13jw4xxUSwTSZoiBLQqfSR5rbZyeCaQ9QBm8gR1tMWaWpXNYUZaz7tFj9nFkEu",
  "key4": "5waTa48Wv4DGnwxeL1Cjk28QB9fA9Lig3qJDk1id4PYNtgnqvYwf6QiXiMxggbtqgd1df36so93UuDnpFsUEc53v",
  "key5": "3SBrddejJxACcD5faXTS1tnb4ALhLXwuD3Km8wgupyAqH1od1cyoxs1S1fPoXHYVvoiCjgnCpF3GDb6wMZ9GLvjL",
  "key6": "4KfqxnFfNkD3kjg9279BAWBFxDMd5yAbmEiN18CC4HR4uDp7HjV7rBd5H9w1wcBQnoPxXanvCn9BYVvydZEbb6rT",
  "key7": "2hGLWKxxZEjThf2iwsxYWmXrSSTHBkhgYmZvohdDwsvUM3P6V83MUDn1Di4SZNpYyzpL5YuBty3zm344qsrPtTpe",
  "key8": "4m8oFwSomJz9ms6S2HPsxCTdmL5ZACkzufu9uXW7bv3GVmBNfYELDNXAyrspxH4xZ71b2WXi2ZUYD8mG4ytr7vVF",
  "key9": "2B7pu6fzj9vUUQB6gHP3FArr8ksx7m2VuvvpJ8LZkdSWCSaoUM4fSoPAYo2FZ3gcpKSfMGTqomLFDrxEaPzPEkoH",
  "key10": "4Y94oNcGArZro73MYJcowKs97LPC7cfeDsNCw53aAzLkGr2j8NBhq5gXAk7QD3VyBsEFKTeeuQ5EZEthSqFXB6wp",
  "key11": "5sjZhuXAERJGfeKGGBWFDbKVbpEp6sWwPzXK9pQ4v1uBXuGXF9VWM6VrgwqA8Sq9LCDupdHVAfZSvFwghbLL1P2y",
  "key12": "segf11E6dt2ViFfeGJz6zcJytvLKuQtSy5UDjwUgL7zkLyJvgWmZqdMNLzp1NoF4TYdJ2tqVajjYi5PJgLuJa4v",
  "key13": "551tTMF2kY6RumopyX11Gdo4Cs7AHomi4CxeksQTseDh783CNPwJHXyy1G51cxLRpU869ipAzvJrfNpmsafphNMF",
  "key14": "2yBV7Th6XXAgGwEpFZ5B7i6UG3ofvwEwpSNgnERM7BRFUfzJbANH3dMDFUEb8TVHZzQZLcTekoc9aJ96poWaEM7C",
  "key15": "4J5rZhZFyQRWdSc3pc9tQkV5bd59mfMhZUxtUBMPYfcHzh6Yn4XUFyd5dLJrdHakEB5tARo6X1K96EZHcg9WADqn",
  "key16": "44eQ6WGiMFubzzruaWwEBzRkBzr1gQV7H21o9ES1ZKtcRxuEaFujTRrLhyH8VUvXtDiCQeuiQGuVTVNJJdJKZnU1",
  "key17": "4L2byVnHV9aqUioDJe5zjGcMxbzN9A9ZZVmr62grj3e12p3KFo2FkwS4DvVza4PtXDggTS7XmP5AKx8CXQLW2pzz",
  "key18": "NVaN8jt5dTxL5NkR6c5kiXgRv5WTwXunVSqJQLcHE7JtU2E3NskcsXRKXTxxsxMveF8udj8z4fcQmwFPNF2Wt8T",
  "key19": "3cMwmw83mhogYiwZBLWvckdAGpFiSNnATfNNYJFhdrgXd2qZas2zjCpTq4HFNxY39vtYEFPWKUnD99yvQYWd4QYo",
  "key20": "3tpxjmxf4LfVXgcJiC9y4SLfWJKxZpRaRL3fg1ktEswew8U5QHfVNXqd1ioZM6SMeC9zD3NZaUcG487V6jfxrWED",
  "key21": "5VxFwT76eVhJa1jWuP6Vqrxn7QZ2qcoHDC2cKUoMKmLwnqYDaAH9ce4CxQguJveWqecFXQth2Z688tTr9kXrLWho",
  "key22": "XULH3UZhW3jFUviRnwJFMyxidLUtPYxxuhrZFV1trKF1bzAoEyyLdiTfPQjQcPC2rVXRF7f9FJUkiJwQZXDBFSb",
  "key23": "LXpi2cHya4NMadpBrK9KXeBic2gK7seFSacrhvFjESe7tv4tepGsi41G9dprHHGRQb4RuGaUTqUz2nYXRnPq7MQ",
  "key24": "5owr5RCekeFw9Kam7wUPaFEkVtYCMHae6HpYpebBAdQuig7WzkvGPLZ8HeYrPN7dpQRKTaW8c5xoLnH6x7FZ2N64",
  "key25": "58s3eVu9EgX3rfoBfddX2kdGgks8jRksAk3SCPji2E2NduD8W6miuYfndf67b4oazRf85XVyqHrVkUdKB9MoiTzr",
  "key26": "2JkSah7ZkqRzaViHvXqxozU1BYxPs9Ugpbmu6SC9DdfyMeHaeLVLH5Nfk93imCxUGipumzKp6JTkRWSQ1z2eh9tP",
  "key27": "5Cr7zEqaYYB8QdQQfFXettC8dNubiCstqjdJQVvXaVH6mkxuHARvGH2o9yiZeEkgRy9QurzzbUHQUjv9xb8WQQVA",
  "key28": "VLDRSV6ad2XgQzvJzhTHopPyiPzzjffv5qjdTUR1Fdprzsq8KT6miw7gGkTtoBge3aJrbPesPEde5LWjzAzZY36",
  "key29": "4zxoaW14ybvrYTu91cZTofM6G5rFbcbKPo9ktut2LnzKHjLN3QqQ7gD8jY2V6jvVvY2gzZ8oeNoqJdJyMSeSMHVd"
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
