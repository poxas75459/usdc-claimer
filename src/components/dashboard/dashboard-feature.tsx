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
    "2bTv1Xz68R9Msrrx84wSF6uMs5wFVNCf6QEzVEoFQ7BRta1gJ4nwbKPFBzA1VLaQCQujZRh4bMT6RU62Wsrj1YCA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EXH4CzeR7yBunaVmFwD2kMPQYqiyVfdCmXeNjzSzcV9vkymSxQTondoUcyuexN1qsFmLN2YC5sZzXzedgJBrt23",
  "key1": "2t7ncuaDG1kctzdjzVFhvo76R5CkwJ6gDZ85oBaNsCMUtkvZcP7HpnS5GeSwMnfFTVt94LRgfdWxqpFf37oZVxay",
  "key2": "75hrM9GDVKXc3Cxqi6JEA6vdmQkF7DZFxxTsBzwJvRXvTcjLcgi2kQj8earYn5kdgwpt4csFtRZb4XnuRDXaeB4",
  "key3": "4SEvKy3QZRBKSatS7ZCdDCdGPr1yk1GJjZwoJuAd6adWYXv7jMRxPwkz88AnBPJnN8fyAnKB94xXsX7UfvX7mf8n",
  "key4": "obisjvbj8dnwZv7F1pRNign7ARksQiS58BbqhAUYhCtiETv9Z8GJhYHxNtKxhFW7bzU71RfaX9WKzE8yDyNnC73",
  "key5": "3Wv6dGadtL9nUXEQro7t1WYw2ddcUU6sDU7CAn9wynNjaxzV3xRUeAuqzAKVgFo5dzTi181TeWCvJzd2KxKU63m2",
  "key6": "5ozEnxLDxknwDTQFFY9uxCAGRP9LBN5ELkTHtX9dvfkQLYd8UsWmBwoSHpoRw8U5yVf4EhH9CEJJdrotATxqL4Jt",
  "key7": "CVbA7A4G49768fJsf4dZHmVY1mxQWnBaXFKLeFBYeEzqKy4ZKtZfjjwbXDKhQ3RvTaLiGjX46RqJgUmrsAev6gb",
  "key8": "svqkg2tMY6QSE1ovvNcC2CqExnn7fdbB4RT1jX7r5URmPyYWVV6Q8Nneh6QxUuqo6M8uHsv66FtnHQKrdJ5Agto",
  "key9": "3a2237kjx4gcYNziZR6y3b7QV1HAM4Y4VyMdzdwZvuUCWhqq9Au8PEzA9tvPJkzLokhYXy8eKJxLRZrEnavNQyAA",
  "key10": "hpQ9whVTGNpPvxFM4YNrkX4zNZscANcVWF3mTYAZKAb2ydvaqD3Mq2k8AwWg3kvFMgy99y3L1zSvoASDXQzgCYD",
  "key11": "3duEhaAM75H8feV1P79VXd6ZjULffYgL7txPzNjpHk5LvRLSmNFey7LVmtvoy272hYtgCbsGJsYqsgXBCRNqfTpn",
  "key12": "2ZL1wxVq42xBJQQewhZGkDkM9ca8edJyuH1AyiWDRGS9m4ixTyRkjmcwtcLDx8EHrrJqR3oYsxs1vBVRas79ZWdj",
  "key13": "67EcsT6FZeHd8ncBS7T4QyhCAxStXMqkGyVnKGcgbEXajMdAsU6up9NvwPsu7wY4rcDf9JckXa3c9kxKFxPBpbJY",
  "key14": "5oo5mMaCQjQvPYrWYQTsBQcyaVGrPsNi6VTUhyq2rSC5rcd2fYhnbNeJ7mWrKkG9iBehSsaxzJfU9DveLzBDf2D",
  "key15": "ZkQfXHnPshiQbU3ReHfFrc5LvSyQbNpmGd2FW349xRUaiVvtXNnZvVuE1fNA9kSAAki4PrJpxAaaNdDjNCJU2oN",
  "key16": "64WLXYhc2xATxZ4uZUQjJzYrk8ajRibgj5Wte8aqf2Bbv38XzEgoHPKxigbYF9GF2rG1ZYaByKUx8NDXxBSNBCWv",
  "key17": "4Tfvf9CnM2sR9WafhuepJSV3D7vz1becQbVfipKf2QW7cntANHBUNUDD6S4akppWX2EPWq2PTo9ztro2pR44SyyN",
  "key18": "4RPNccseneJAy4xp21Yr6znYxAbT6RizmrGgAQG7iboY1evLKxoiEAoKvVVA2vkAPsvgB7dmnvvht2YSzDted3Nm",
  "key19": "2usvspMDCrMs3CTnBww41y1HHaX8r9nSASQsYkGKmPFNMhLq9KAiBwFXx4LjvzRXgg3vkYjY2JPg7Tvffimpy4FV",
  "key20": "4VmgUHeHJ5tXKQ4FesGVqMU6tgT1e1g8Nhb9bKjz6EWQPxD2yhMntnu1YNfsNHtgQHFYsG7TckBap6T3C8WGe29v",
  "key21": "BYWZyGJPi9sZpvgbh7akMr38B4KbtwQiW7gTcZj2dfpPVbKYQm5qKYq5x8Q2w5McZFAdPevAi7F5Bx8NmimExUb",
  "key22": "5GCWD5QRgaVoGjJJFoAUsA9QaALcNfWwjQvcrtgjpFuLfUDdDvog28eXykFf1xWkcCdoLFuJv9x6VGaojpSMDTRu",
  "key23": "2DcWkDUrmcW97gQf4URJrzt7z9TV9ZN6ydcPqaY8MhuGaGaqK1SZ7P3M2f6hgnsCpneoaFtHPqkg7nDDV4FYi3vm",
  "key24": "4PcdLEpcLXqsogALu9LhpnraBZRiqt6Z8nFnT7rbGfijBjE8khNamKfuC2DjkJiP8fkiunRJVgb7s2H6aArs9AV3",
  "key25": "takwQzB85oeUcs22fW5eLNkx768r7Z1d3SApnkrR2cCHiRFVTV8vUKggrt15Rvm1rT1E36EpRNqKk3vgWJzjr6t",
  "key26": "5DK5fi9FmXEePX1jNHEc56fMEnmMoSv6zv9cK7BVEhDQkQEzcf7NcBgbnhTuX7nzbRS58hwEmthi1PFNAXp6Z7hG",
  "key27": "4X5ja8L6vCER69b1nanVKQMkuQvPyo19S4CHgDSgetFPZkQFwkSCEf7uHgdF3XTvLL8ucZvDcWF5Y95zJyAGdEg8"
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
