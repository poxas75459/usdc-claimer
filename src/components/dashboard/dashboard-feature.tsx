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
    "2M99U19ZBAJ2NoWnaWAFayK9YdYH1297waAHhU4MCTNhgNaiFFGeEBuDjA4bPMu3EghiweAiZSEQZyQq6LEVoDXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33oJKHtJdy5WFE7rGotk5emkHk93iKskmUkuFwbcM8LxD3Lo1KgpCPvYz3CioFDPVj4f1ebzp1GinEXwCovQp4ws",
  "key1": "217XYeCojXxbniTPkBy43wPLwyKgbnu2Xs9Vkx2Wqkp39Z98koU87sQUn2QtTeJ51VzGygC2ZU5y2oHLT5nx5kP5",
  "key2": "Smmc8m5sP1kgXqyhLSezNaazEjpWvTY7iV7Wb3g4fYM89eLsiJwNBUwUd9tDSLESauLRoU1CctzQmjm9Yqrgc35",
  "key3": "4mLbijykEiqFh2hyAWYtDBwRs6QQ9yHntXjQsf2rCj3JAaRsrVFxCqHC1RLkznnHvUBn6tDQ1AngmBekBZyzopJW",
  "key4": "4ZMdqVbBS8noAeEjSiNZeydfeB5v1ufUJiRWsrFiyr4eGuLwoPt1EX8JsiCPrQS9A48nfz3RLHzgRv2ubxh2H1mP",
  "key5": "bRW8RxmVGd52hw8PVLw92i6jRv1LKJQLZ5J9YJ3PFbGHa8RNYPbDsRmpvNDgpdHuWGafHWBbjX5c7khHZmq68Yv",
  "key6": "2oUokFLmP7HyMkii5hYjaBwGuHCbpoJ8eapYCDCHoLMbGxe27dmJ2ZhTX8iYr6FzomRK53N5dnQ5qu9rgbsTyDtN",
  "key7": "2fDRaWLDxvpyJSrTjex6Hcf4pyT1CqerciKTE4ANMtkGQytWyjDanLaCJAo4nAnQa9ozxjSHPHhnjhYv1423TV9k",
  "key8": "4HxvCWPU4axBTAHvKhynUFmiQoUUqsCRCCMm8YFrZm1uyE1fWNq1Q2mwonWtMvntdVXgeCLcGBzDAMK1ZBWrz1DN",
  "key9": "4qippLt8amgE8DjtntXj2C5QyNo2P2qVt88GifNS8qdehESLE2PDqfhQa6G1PNGjff2gB8qaoyVNbcbb7WbEzRAb",
  "key10": "22u3MFgtCCUDwH2iRgwZQuHRjCWbgouFj5hRCKcqoyusAGZR7U2bvyjxrR9UQ4vNrj8dHWTpvGGavDZUhBxQJqob",
  "key11": "5wsE3ULDfBnWC39iR6Bv9fFQY6orafKa5y5WJznRYZi2T6HupE1bsHfLn78xMUHjTJQN98CYNzpkxdn5DoANbDER",
  "key12": "i4ceMKZrBSDk3PAoF68DHrkkiQ1dWMRcMAjxoU9wzv8koX9ALLkwojRWfk4MvKo6ibwJ7HoK62p8K8SP3szNjL2",
  "key13": "5UwQy5Ke7TcibtkdF8JcGcQoFPEsGPgdiajJW6e7RUD8EuR8ZYT1UNDEUXsobSD1uQSeDvHNP1Mor16wdukDh1s9",
  "key14": "5QSHfsZfEMVa5T7Si7n3W6YJ6Xw19Az8czhMvhKn2CcHGhTNtNn5cXaAupjt9xtgx8VehxfCTbT4AybdCp5o2fRo",
  "key15": "31nUtk1kS5AUwRWyrkZSmSBhQQDmoyubpZmz84s7WgHgvLwWtCF7RKTeyQEomrozafi8mcNKfCBWT9aiwMBgTERp",
  "key16": "3JoW3FrVEwkp3GoJ2g3TWs566k2mBtPntuWD4QQ1rNLQg28EypinKV5t12ZwPRVr2fYcqkZCFV24k4KNiPtUmvZa",
  "key17": "9zr9gNUN8PvjDuHtn7pEXyTYSwnd7t36jZCcFe8SKyX3GUbgRUU2aLN3LJeepFNmqCD6rHK6SecjdQZA3kzHuLQ",
  "key18": "5icDR3nh96v6HyPbBNuJ7SxfpKsdH8qe7qyENSuShfhtnGnTKiRroTjtzUs1NVr2xipQnyATPcg9fKUzntH88PWq",
  "key19": "YNyL4ae7rNESpgwPqs8JRgXtmPMPACJdiSJzQeaFovyU4GcvDcCHKVYgk6LfR3Qnbe7cnj6YLNZu5Dr9aEDU8QB",
  "key20": "39MwCATZ12EKva253EtZT8jW3pmWL4UEKBEctuoTWP138jmPVGBVfRAWkFqH6kTojvQ4FskSyBk2YAjDkunpEhmX",
  "key21": "2NvUGBiFeqwMrZvPBuVEq86FM6xPTkvmXuiU8dqfPsE59B3u5a5VoSdvthvTGhDz7kqyqLq2VJ3GsE3meHHrGadc",
  "key22": "4L8xin9DnM8Qpc7LZoHuv8f6LATUJXaMFrQMTanfne5YFYByLygKFnLb8JSgDPgkjFLExBVnpnDLq3xc7cTfBxx8",
  "key23": "857UKCiQPN3RPSJ2LsxEcZEiwCcXg22TVr6qjwtbkMsk4TG6ZAtSw6r5j5WnRZpaWajSsQ2wTDjFyiE6uwyvnwg",
  "key24": "GuAkDwUdZJhCAQHdZ116gNFgj25kof6WSMyuweYqx1rdbt7V6N3Q9nnME5k8bYFSs8ts9XJU9XyUj5NrtrNEYb4",
  "key25": "54ydraygqaS4BdtMjA4YamjJ7894jpVXrU1Nor7N3JtD7nvaUQ1yo2MXvWDDQ5V8oDeA7TzB6kd1jrYkaJawoUTx",
  "key26": "5P5kQAVJk6hGpabDzDAYxfnkGeCyvWPoNrcrUsfuCWa4VE9e1UY5rQ9bcugPMkbkNM8iNgxQhjoVw6jHTLZLZKZt",
  "key27": "5mR25vGmbu5TzQqg7kfZgUH83xNHwMWpTX67e8sdLLCQfkw5VpZHUVcx3KsJ2K6wj4p9wG4xGfeqfEEBQPrTvWKk",
  "key28": "4qkqG71SsfKabh7f1Q46yru8mHar5nhkLTn7BeGv1uZqRdFMMAGxarMdibACtXHwXX9rtA16j59c9t9vugf6JJKM",
  "key29": "4eJYrcSoRy1voJuCCLXnwJuzygkAG9HJqFon9CrGiuTrKJxAmyt9AivVzq95gdKnWzfAcx8xAsCGV9CTfT8vc1rk",
  "key30": "61GmWifYV8zMm6e6CvmfC7FCZSacrcgVH2j17kmb5qce9HVS73H3bTbnovSj9Kr8dzqVpxFqceV1TmFSmPR87Ene",
  "key31": "3AhKnteM8wUyR4swoZpL8Kck6joEV3yGjmjuUkHRsDwZC1wBCzc6kzCGuxH6fq8h1UmQ3WRhGi7ygZc4Dgx5ToQp",
  "key32": "5rnepMncUrTYKGTxaGDwzS34JSWSow31TRCk3xnpHKgTKZYNFs9Po1npk4QWNqb8yEifkUHJ7n12Ss9KGimbaHkF"
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
