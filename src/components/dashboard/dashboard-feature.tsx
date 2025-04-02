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
    "31tcz9A8mPxYzG8GjqQtNDcu9UhG6SgTCMtZqvNQkEnyhQ76EfvaNdbD9FWi96QfFGN5RpZvzdfTbdzMsc511LXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sqiGFoVxLvZdtXuMfokHdeLKc34ETSeLUZB6qTytTpDQezNeisggp8yhaeHnxc4RQxP5csBxAuVk8ZY3TvwEpP4",
  "key1": "2zjbX5sFHj6xAeDea7hrFjRAF456zbfbSTcXMETUM6KbKwrVLqUgY8xc2fqEbKDzxi6NzWy6SUaX1vg6PpoBroxD",
  "key2": "5uKoXXieCoNby9TLrWex2AmBSsx6YEQU2ZKzeQU695agU135AcG6p5b2Hb8WMomb9gLM6wQg6pJPLALq9sGsEAf5",
  "key3": "3h92UCQMB666XJkcTckUNo8UgvB6Fa9VCxg85D87rYyFNXcVtMd7UppZjJCCW7PNnh3xjmm6mqRjnZ7jqXAZjRWi",
  "key4": "4s9Af6Mu5reyeyAb3CTZH4i3XpLBqZyLEMnh9AYwj39eTD5EzavDjsxNpaUrcvte1xmSknTrz2HAWuijV4KkTntp",
  "key5": "2u1jJrWckyixNwZBia95MTEB8xpSWi9iMV6fvPt83r6j9b3x5yGdiLazDefCaTSQEpYGa2pWCzdzc3yDXcyEHDdA",
  "key6": "G8emfhiN62aazwfrVEk4qfcDWAwvP5trqPVXqwuP24C6erdnS8dw3WeNQmLVhs1Bu5GJAHz85gHxuj4PdGbAyBA",
  "key7": "4UnP4bvHyMS9FcnYuFFSr2kCHEYRBQNka96pGYWCjSjmnmaWFdEtXADJhyLMe2Lku6fM35poDh3XARe6bB3T1uNw",
  "key8": "2EwDoBUimgCUN6EvLjrgioK3FYbDQbeY6PfbUYy87bkuZqGMtgpLKNDkkwxf9jvj3rnJosNPrsfY6xbkY9mh9f1x",
  "key9": "5EwtRkANe9iDWHktgXSbE6vEWa5a5NwkzYEUjm3UwJH2Ahu35EtXtKVTUii2DCGAJxDgDHgTmVptsRLaJUvEVwxJ",
  "key10": "4dwCEDpTkwvrTqkVVqmkB6e6pcmMMMMyKLGBi67R6xZuHpx1tLnznByd3z8jumFjpyzbFCrWq5DrzH8n7vmuTRpz",
  "key11": "5SoojkHHzwpiYPWGSkampoKb27viN5LqMKYhD3TTd1hsQLhkLL7HSPs1yJt64vXi3MWxPaTqqUUfxkGGcjxthLFf",
  "key12": "4QMyyXX6YS4evYLdcPXpZviv6nteAySN1Yuw1nABJZn7bU26sWHs6n4yBi4cYf3eAMGG3NEJz4wLdPBY6ud8Dygg",
  "key13": "4XjUjk9DKsrQTgYaQ5m7VPXEDNvNzNm1JGYMwFLJ1GmNvDnXzXcCKeHtc2tYdKFYPKjxfiTxFLwctS4j659TWTy4",
  "key14": "4tyGenaS7fLYvwX5qykQJmVRAkqFYW5tt8hKwv2QZgTNxE41LKHbPJsv8ze2sGuaZWVN2Pr9667pwMTaKLSrtRFT",
  "key15": "31AyotVC7Y1D2uApUBMSzvmKAT19QkvEb19jddw3QFrZ55DFwN9QuzPzzL7ZHznygvtd9dpxXz4yDW74im8VE6p5",
  "key16": "2Ww94ScBWNrDF2cKFeTu3WyFJLJrwV3iB9EzC884aftfrpKaGaujBdsNf9JMpaeTrLfR7gTG6UbTzTmGnHad4TGD",
  "key17": "5ixF6k4TmbA68e7nEgGG2Fpr6aPmXFDcZwm4WRSA2aBLjUQSEQTG1yp6jnN3qrt4LQrUDnXEb6m89vKcPVb7GEgf",
  "key18": "59PavPELyYHkdQCb1GQPiBX33uzEWdG1RvDyKWSbn5ehdq1nSjBGxLMU15U8qvF1TWaHQWpSWAaK6EiawsQMWNDC",
  "key19": "2yQbyqQ7madB6qYZWncBYXjhJxzcm61uzPYwHxRpX3uJ4FUuvG5KrBRmEekTS2fCgNCp8PMUZ5C1vkGR6wRaDyPK",
  "key20": "3Fa2sjS7ncvQ8cnbj7Xr1tWCeRcbgAojqeXCxFVqmLKKiP6YxG9fV2LZ6AZGG5vL8vubcar8WQF2TzvzoxwAbUjF",
  "key21": "3YjCXtYHmQHG4uSP6GyFJMxPUa6AHA19Cm2y3DCgBi4znTBWsjJiKPMsMRDNhK7BgWD9CYsBuzzztjTfXtFDZoz5",
  "key22": "gmBDn74wKisSSXFbncrd8N1bmYSjUtoivSkfW4Z4u3dy7nEB9wAsj3VaduZbGYCh6MKTYDRSUJzyUxHuz7EsB67",
  "key23": "5SEM8MuBe9taVR3MrTn4fzWEioww5XyUjXrKfnRpF337Lwh8pTr7MKAPHUBm7JE6rHNmxGgB8pVDAfFu6PchuMX7",
  "key24": "2ELMejtTwKUhzdRpwNxqfyjGnPqPFb97VTmoF2EkC7jAEYXDhqrtSe7sw3SYpFhogQquQr31ojna9Zxaz4TPzqvL",
  "key25": "2yPDkewzL4Fs534NDErL8E6V1QFR5FqNoQxFqovB3eAkxZcVeVh3nmrpfD3xsNDM2KUDB12VydmhyHYU3ZBUSonk",
  "key26": "Sa2nHpFggxzbfYUXHrZCXpgurkUrsuaQ514AZ3vZiEf48zhbMiJjxdyZRFKnJCWJhmdQ1rTFAGMfE2QurJuDSbe",
  "key27": "3k7SWTFKAy5C47aCykhfgLhbqtrCVQ3TGuxasDP98HwmamUbgng3Tso1Ho2EQ2MaJm9FhNWxzZwHBSDDksYrn3kw",
  "key28": "1sew4dzpUq1YtWrZQsTnR2aqegmLiN2wKQ2UMZVzaKTsUWqLVG186PBqvJLtvEoXieNc3yV2KM2URSKFSH5eWtm",
  "key29": "58f8vjN9RuzH7tyL7VjXHufasbNw4VjEQyMaRhezw4phVMJfnaojb6tHMnurLENe9a4aJT6n99vUqLLJcBEXjT3H",
  "key30": "2APcukg3k1UPAU6xoZEstMrXWpca4X4NrbMXmuFJq2GvPFuXPEyvUX6grYo5pdr4kDEYvWzC99jv1LiSjyXcE8F4",
  "key31": "HLC2z4ewez2b7AiJa2YdmJXQh6PXSV4hE6z9vHqknjtgnYSUctvQxaqoaBEtd8mJXSB5p2J8CELELsMMXotqxCP",
  "key32": "3iRCiJADjnLwa3cGTSy2SECpmGwkx8KAN8kuvNYf5iYSBm49p3R3huWBtwvWkx2EKEhsGSk8CqiqVJeA3Zb8Be4p",
  "key33": "RFcxuc8HfDZvhS7yy2yrJQ2iGNe1azbBkZcufnKoCf2VTQWC8Yty96zhwh8VGPH2euDChoAJJDk6jjEbbTUiGqQ",
  "key34": "3Z8zTss5xJ37JvPSEH714WGnmTuwWborZBkeerY5kVPNmwD3rjLyfpkwsTiCGGfMB67fz4fM2KT2RKxd2Do1U39Y",
  "key35": "59gpGQrG6BKVNZFaAKgv5u9zRrPpsbfAh65GohFipfL8gK1UUHeb1d6VU2TcCRLv7tCyuoMmyoTDTtR8DmcTKFVz",
  "key36": "3H86BZJ8R6UWvB69D42he29yRnLuapQ4xfDDCRayiceAFD9qJWjgLp9ojC3cq8ttPX6F6Wijty63CMfKEVA8RfFe",
  "key37": "4hgtgqXonLkbLoAXq5cUaqmvzRijp7rDvTJegfbKmhfhciyjdGTe5hSq5zswkkTjJMWUzyhkvyEn9BJyHWbNEM4q",
  "key38": "wU77Dbq1dB86N9rcaThKDUVtZjAhgf9eWFwJBu4i7tg39DhAQgSzHhpoMwmgxJ2aNkosJqMQvqE8xNrUUZnzFAD",
  "key39": "2NJ7UrFoKLri4w2Li6RuvPmK6ubphQBK6EwJQTnfdkHcrKqbQ6a4NMwmpAMUftXTH1p1QTap1rzM5uwtYcTw5cnd",
  "key40": "axbguLN5US5AQVyURzuXvSa5QMHwALXCz7Zwos5YQ11BbAC8Zwuctz4qQDaJduug8HUPX6ptUczvRmx7GpL2NJX",
  "key41": "2cb3RANjPDAExyuuC7ZMt4LpBU6UcRtavHGjyzEJU2HmdGjVgfUKhMTstHVqUiuTEPeaH7ptUuJ81RubcwZi39KG"
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
