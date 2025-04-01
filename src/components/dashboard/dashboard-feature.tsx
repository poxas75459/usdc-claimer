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
    "4GDZZvxJCAT4ZkCMRV6tRuMUajqtKA2MkEdr15Xe5EJ2wrbPaxxvGkwmLGoBcZsBdb82c9AJfMkYYs96rpDNe8Ju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KCQhAZq1pS5NYSXKBpnaiq4uGbNTbNPgYpekViEvCsNMZhaAfys9qPsWRieLyYEDjaF8wXBxPX3kBf5CMB2eEz5",
  "key1": "4jwHY9AGHaeXZgaXJW48zUa7szgTqhGGKyaDkifoJAWoKRMkBW3WEVt2p5Kyag6UZFitfMSK9wVWCpXZ8zS4MnJa",
  "key2": "3tP8126U9mxvpU6JK9bBrY4bNRoc9ZT3cQaTzHWifeabER9ao48ZkrHye56PJo98W6hgUs8CFv4HpyRL6igjz8f",
  "key3": "4mou6jA5jmSpQPcVjuFYv9imFiaAFP9wVaWEUq3UPPiusMHE8sSBcXhNZCkAmSHyaMoH4CLbCUT55w6rccyixsWL",
  "key4": "2qP9bJmnWDpXEnmhg9xL7jyScDNXMKbu41zmU4ZDHJDmKFKf5QYmVJx7sxrXzPmyexa3LxXQT9QZp59rwmTkRaYi",
  "key5": "352GK1YeZKe2wrANUfQsWA8oMeucnX9rPYfC8KweKL2WYLZqJ7W5hJ5vRBeKH5JSepsfP8Ydq13VBdvL43Cg8G3f",
  "key6": "5o3TFFV457DzYM4gC9hm41G7yzXHfweU9ZJrqoyn534xqYrcs7Sw9ZRmJcmCQ8ydWCz8HqxxJw3M8sq8W166w9MU",
  "key7": "5ZArFSrXGVpSCFu6bJWCDPdmbwDYKrfCEZ8xaFicJQgEUNthgBssmUc6THuvh1aD2q3yLgQRhxPa3K87JizvK3BN",
  "key8": "57xoZk51sxZCpGbSjbEmfSo42zb3CdYMFhbNuFFWPtCRjHt49ESp5kdhdMPGDsaicqdjLPBvfCjy2W9CjtqdvJ8f",
  "key9": "3FmQ5K4AQH3SHLa7JzHmXFpyc9ce36yPc6YbGP4LxoWmwaxbUZDyEyV5nCch2WECFmcbP3JbYMsyGJ3g7svbRWzi",
  "key10": "57LugZ4QMcnnwqXWERmbbj36JM6H2Qskio1owpg7b8TyHiHU7obbRu8U2CZfZDLSDcezp2suNsJFpFN9R4MamfLH",
  "key11": "FCoufk2HGfprSg7s18MUvh9j5ct8A4wL4xUMR7qbCXmSKNWyPVSbM2KFjSdNzagsYc6hzoFYBUGiCLz5hSJiMEv",
  "key12": "3ZcN81WcRWQW6C9jDtN4mwY6mfZEVXZU11dscdi1FgZ6KcTSvkBQrC3hPYA81X1F9mBq6BnYu3m6MioTz3mS1sBQ",
  "key13": "5JMn87hjTgPJxb65qDATqhCpQqnd9ActZxKzUzY33Da8Y5a2yE1AptobwzUTYB2aYRzA34dPkCRMooMbqdTvTQzu",
  "key14": "2D5RjuiquihwnbaaS4LpX79FVTiUHEE1evAwgQUCDbbXH3h5XUGt7R6ZacMzAJ9PLKdHd5qxXYP7eks4dzpQpo3o",
  "key15": "4Jpg5Y3P8EMSFrKpF8MRQJsJWnw6dh8NHfKKasm3ENJFrGgPS8p3oNM4iaaWF2dW4ZswGWBeWbXuuurvj8pDoBWv",
  "key16": "yq1LXPrdzss48LXNNrgXUNnzWf6BiFvwVPsW6CmeZ7XcXbJqBko5BjGFDmag9UWqYrh25iGJtfapzERgE7T3KMR",
  "key17": "2gPj2a2KnnD7BWQebWa8d7DYL47Pe9S7x9JExcciqSJ3yTtUtVXjFinhAMVkvpfXP31MDEcAK3aFgm3DEXV7x9hu",
  "key18": "3ngJHyyu7Ni7nSP86wuACzpq3cEJZdaioeeJyu1qxfrU3cTErNXPH14W3yzxAA7SHVRLBBUnY9sqyWEt1pEMwtVk",
  "key19": "5toToq5m7xhGZsgmTAjJtCiyZs1MQhW6YuNoAQhhtweG5ncrbATRJEDjQzeLt4nc7zVKMNAfmKP7oQLkbBn2YFTf",
  "key20": "51di5myo7qNGDGpuAACMXVRSHfr8cWgiNxyNdcaXxPQjEZMv8zV6LaPAforf17JSt8heWwm7TiGkSWQntgKE7jSd",
  "key21": "2Xjnpxjr5CtEH8MAso1qx7RXNZWPULsuDyrHvQA6YEUcRQh9RDCqmLNJ4gVX5xNiTqtFUsxqDEZsXjzdiBAW7Q6P",
  "key22": "4EuCscKLCb1SW6CYqXvE5uiAemLCb8Dez7AESKWh5FqW79DYFfzqok6LDeUyurEPWPwQ847Lpgg9jM8WPnhnPaAE",
  "key23": "5GttchAf6FraumogohjByA8oEdMcFMP9fsiqTUahe1y4ofuJj7bFk9sGFofAisVpTAfYGE2AKHs66XjBZrSb5HWd",
  "key24": "4NP5WV45HUJ3GCWoXd2g2dwcMxF6WAEyGSCR8GiVzmEss8nAbBLkkrHTRMCLBcPXxmhRQhsg4SenZC4ZRa8qqQin",
  "key25": "5DpxVGNXE2fmMmmc8hnb9ZiAxtVQf8z8vqbyNj55VKBvo65sLXvYetzKPisjwVDNjxX1D5ShyMwQJS3KtjA9QRG4",
  "key26": "e1CwJP6AXC6GKQBpKasiWTchqZMrnshmec9Jzr6VvNctnGSzphCboUhEHUVCtUT36veEXz2QZBkPF2LX1wV1seS",
  "key27": "a2MHNjUjNEgQQ3ZsHVsvf6LLgDQagi3LQU1r4ncHgFJscNTC9Rm3jwBdmhyqueSNrgnwqMgK1dXhS5N8788DzCe",
  "key28": "2Uvn7ZHCxNH3b97MxzoKzE4o1b7x2S15G3yk8CAb94xjXFCbsQPjnzB5LzsLUhKEA3VZA3o5oLDtbMzahpr2c2uz",
  "key29": "4eabpwiyp6ETs4mBhtABAhcePZm5eDLB17TyERcYMWi1Gc3sC3xGsUUY8HCUL2EDVLY5PagtTzrZnSCpZe2tdxCr",
  "key30": "5wuvsyqXTW62nN7wBeR1jvkKXHe93KddrshigejmJ7KMeKou7Kc99Fs6ATPKu2WaCxK5mpUrbUK1LSVqcebzNAop",
  "key31": "4HjKfpoKhWcTmwUwdD2epjcUf1hoWjVHSoPNNc9tDbo21XkHgdPFNPdpPgi518JKXQiVgkzUeqPv2gJB4PR5utJf",
  "key32": "5oHYFCGdTpvB7ztQbjW61aYqv8cSmYbBsFxGn5mwP6xu4LjH4phgNXa9togKWxK6HZcQskj2jpT3EghSKZaQr9Qo",
  "key33": "439ysttREskd8WjcT5fUXVG9cYJ2eUtB4pkuxmXwmF9FJUUnzLLWvCoeQ5iCZP7w2Z7B3M3mzWeaJJ4upwpLvDRk",
  "key34": "4iPULU8qDs8A6udBseu7dYSv7zGx66vxPBVGGM1Qi5aNKtJxkos2eNmzMCcn3m8rrfuvYnK4PisC6WHLkpZ7kxNZ",
  "key35": "3NqaqmXwvPbrSKvvTpSjc3Ei5VSMzWBgxhJeGjcMaYSFNWvN5DJqpTuxmuhfE7RohkU1nrg3bGAWdWLRbcc2JLTv",
  "key36": "3rov38RsvxAtRGNs2DotAh4L3dy29nafZqb8ioNExN63vysxWkuHXDfFnUiMmKPtWBi7qFKgexhn1FDvQTobA9u8",
  "key37": "4QptXVMhjCUQzz7KU4bgSi22uXtBLpFsXgB3zCBPoBe1AZqaRykxHCR8KS34XiqXVowzs5ez7jxsyUjm35ghdVhh",
  "key38": "38a8v8u8hNEFBjKwXS5uWiw2sjx8tXTxzt4nv1N1ukcfXSrhMi5xPFR3GjYpwcfRLekBzJUgAGvgd8sRUsndxbmT",
  "key39": "5ZoPr7fwpXhC1UocvZ3itjNxPaN2qiX5Tn16bKHKAjV319nzo8FypBUFbhscqnoBv13SAuxRrYQJcSy2UzdXcsxT",
  "key40": "36jhmujsnndr7vpSbrYxBi6RhvN9QxEcdB14UXYFPfgSEQ3NDg3sLvHRYu3WUftz9K4EF8LRZu3xMcgWwqxGgoTp",
  "key41": "26gWQZ1uc3E8ysQuArvTrzUFXunCkYFfd58ZFmTERyiQtAiQQHWjioJSzqaN7byUDzoKZjAScByDG7YU6Frnd55f",
  "key42": "5ehGLCXbw8tf7DXQTs9b1wWdsEvViSDma89ZA9qVwfBg2898JcD3zvVErRDReyyJaZVcRxDVyKYQ3tJo6vxXbW1L",
  "key43": "2u4mA9bmdeNJpoo7bLbFc22PizQgtdHnyeozxoHj5KK4BarcMa74yxzaj7x18iBV9tAUeHQnyNzUBEos9yFoBSdA"
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
