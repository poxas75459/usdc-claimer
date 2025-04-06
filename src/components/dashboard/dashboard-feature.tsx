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
    "3ircE289P89S8VziMBKJxJ2g6hJmP2nhnr22jvcTiXQu1qW8NarsU8YLvgyac19fmGWvzqj2eEh1vtwiWg1pU6WH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LAMkvv7vbJJJBUuxHw1rRNc5MA17kGJN4hvSxN4dguoSGE3FeMHJbA2e6xmDPcJ7NYReFPYkkkB5jKepZa2aUfW",
  "key1": "22MnE3DP3fkKVyk1DTVQwVZnKHxDSwYQqokrb33SAt4UQLsdMQWPCkSnaLV2vbEF5aQuwoDoGf7Xm7h6mzESrJH3",
  "key2": "eqHWBVszQKdj3fXgVTZnroFwd2QtqyDtfGdVMSYkpZGKyt55VmGv2sVnSqefNiDKMMKwAzct5CD4MwZpc4nD6Ko",
  "key3": "56eXDMBF15RfsGGdbavXyvTzTmPMgno9KJzYnnPme6gddUgyyjMNn4mEEk5Y8E9DF71sHvMFGsGQY7QemuiW52L2",
  "key4": "4rE4NP7W2NWBXwoYkxKLCvE8RVri8t21XfcEBUGQzoEk75TVJah6ToTyAHzq2J6BvNaz72oQAkxeaZrTkhdaPCRW",
  "key5": "5odMhARDQwQLci41ZgVkibYiLCdgigT86pbC3K6vRLqo5ra4FA8jFi2cBiFrPP6WZ6Xw6NbYP1kk7hFEvV6nW72A",
  "key6": "4zmZiD6s32rJXWGnjG46kPjund1cC8MM4BapFdnntrQBh8fSyCtiMeNYHBD5V1v12B2rAJ7Uy3rYxdRKCQ1Rfek8",
  "key7": "2GLBiXjjFghCagR9gD8MT7tg5pezBYptwy1azueMCAWGxAD1DT6jVEjYAqTCUHAgkzVrdBrEgbJecHieDjZm78tB",
  "key8": "4bAUCyNyrRPebwEL6r6C1AztpKEUPWE7Hw8pTSVKP6HtExp7y8YTpEJbP7Ad12Lg2FUospoxQMatvacsfbuCwv7v",
  "key9": "3vhHihPkZK6r45tvPkBaVPMa7aDPrJ8p4rPqKVCJJQ1YEXeeZfTwLYoC3XcA34WFsFa1Uaa23tFyYHw5jgCt3tLZ",
  "key10": "4vziwJfyUPxRxJmBhFpPaYyNVivBA2gypUiMbZJKa9v6z9HGhZRjoQztvh4pE7iHKmD2pjJbC4ir8mSqraA2uRLa",
  "key11": "47gzZZDBXQJBp1SvLTpoMRc6fRKAXHiJDAtU9LDU9XmYcL3H1rBQyxfLSrbzqAMfXrFWs2f5nEcFamKcjemts78r",
  "key12": "3NuD6pBi3omUVGRWc8ZSEWopHuVGHmL4GSWp17b7dXZkv3M3eMo3BVV3vRwbg1AhBt1A2gmZUrzeWpxQuaurZ915",
  "key13": "3M9ZYLut7tm2QaEdCX2D2JcUUPGZR51eAELoYUiBDhn5gQDEckcKVkmjgwcqpwYudS8HceMKpVsxh4wDfwfPfhCR",
  "key14": "3HKzFMRWjnjtWhnJSr9NY6CDBonxN9BhJ8figMN5ZqLc2jsLqm4phrRsMzTutBeLbQxLaSvMNiaACTj9kYye377r",
  "key15": "4GCJcBLLMKxoA6kRQK6e1gXMYfghhJFzeGk9ucNfuW71Vi2TcQrMjx6vgXb6tHAxXzYpvFhYLmRixNXje8SzPq8f",
  "key16": "3mQZ7wBmyPxZ8RHCdP33XzarEj9cEqTRd6GGYL3o5kU7b2rFYSJdfE1wfJF3QUYgC4wCkhhiS77cwrtuRiUDQzY3",
  "key17": "3PUh5o57maxb77YGPyqZh2f8Ya8voNr5neWJAuEvaRkojwHnc1QEjqrfmHSAtMt3vmQ1yTwvVEZ1G95zaqCnqzdk",
  "key18": "wSLzqFz9ZcFtqxMTcP8yzZnwtb3zkyu5AuHyyDXaMj2zw2KV6dKsjUcJphbsbtZ6uRaCVoJ3tkK6z9VdeCj93kQ",
  "key19": "126pVJhb4e2KhcyKd4ryJ2CvkzxQwpAYvyT5cLLBPNg44jDeZqgXpxrfuVeuHxT1DsbHhxqnE6zvuNtbZDsw2r2k",
  "key20": "5phsXtCNo4Vu56HbMEUEdD9ir9ynaqSq3Ki1oAv9CqMaSKwMXuLP4V9QvvAZhZjwc7xbfw9ngHp7szU9SbiNw2Jf",
  "key21": "38cEhuSU5rmSdhmM1UnqQuFfZzPWAK1Z9gGVqSSqSUcoqcNuvuyY4Nsds9otdSoJ4TXpTzSCWSvwW2saFAyuvSpx",
  "key22": "59tFVMDh1RwUmRknrAhdkT9RnBPgGpjgtgM1cmHNukjBEcH55CcZDt4Zw16H46xoEZQQ49UwWAtxm1sR5knFsSVh",
  "key23": "35zFyaC96vvD2wdNonjwK2Sy2yp8gxYUGdpqmpPHP9uV1Upi3VMeThPy3A5mNT6ZDf6YynSvcmK3uU78Ko4qXfWR",
  "key24": "2vfVpphvAghEecEzVi5acEqXSsQyfNXoiGjbGGn4fewd53yCGkacXDQPkcYgHv14WP2jhXcvE7j2Ej4Wi6WBVs8D",
  "key25": "JA61w6SPVAzd8FZtp4xCvXEGb8ojG3AxmAiSnwnXKkyq21ZW54UdUyRG9Ri9K6LjZCVf4g7UescBnqo59umHYVp",
  "key26": "4Vnn3LAovAmaKcMXv7PfjKyDt1cy73whK15nbxKSDAhgHtNAELK9DbnWd8hs5exbKKEutq9nNg769CeRqJGLxWS9",
  "key27": "4HyTRGiJbXAhiJkRx7w9YopojvwBbANEivTjNqxhtCswY7T1dQuSyFatgs5CWgZLtQQvQiqv6DGTdiZYbkAPXyBh",
  "key28": "4bcszQiJGgGw11HFinLvJc3GboL9bGjKV9B6eXWYUM1VV3b7K7t78gHTLNwNTMW1fL4hcNPuJw8nyTTCVdMpLMxg"
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
