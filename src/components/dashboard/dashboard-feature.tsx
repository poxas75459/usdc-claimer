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
    "5Uacfrdhf6aAV2xTrAjDxBGf2rvVzfjBaGuzH2zDNNsFHWeaNY5sChMuUUpeAH1PPPCqxmKdSKQB45u9QXgMDpH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vUgppQGkjxtahJBRgupqENz1BheqygEYkHvUZuagKyK7Z9gvFNv3DY8wSmgcCVxo6VmY28gPnx63Bi1Pshf5Gfu",
  "key1": "5p66B4TGwkmHcX9Z6pfovf6hsJ4E16hWR3944aqiXwcLmgU9qit9KQw44EtcpW5H8szkXb5ycAhjjC4agxo9JGpK",
  "key2": "2WGb4fQSEn42do392FVeovs7g6iQd7oZjsVxGS7PLatxDnej5mmQ2YAojqcpc9wPxh2B6YFZeuBfmvLZtDEyv5ih",
  "key3": "4zpGZzgvTpLcnXx6EWWQ61GZ3fTNkPZkZoKUokXFRxYymZk6zbQk9XvaD9qVo3RBBrb7gr8qZBwwhbYsjRPfSzXo",
  "key4": "2Zfe41ykcR5Bcg4M2r2tjR72uv6gxY7m8D9emSbwKg35tVKga2vepzEsxLu8K31SzxbvxSxJRyty3BB7SiY5eAiu",
  "key5": "Z1h5N9hhwxAzPbXhVmKCc7s5eTiEkNFmf3EgMG5DrT5vp2hJfEDXiFKKw3GCJ8bL1P44HATysVWc4Apz8GQuVaE",
  "key6": "5SRwCp2DpcaMkEiojzLmi7saaCs76hybZb8cAUdWE91vXrxcTZBEdE1DaF2cGdoYNn2fetorYkRPkFZyScb8fD1E",
  "key7": "y5vM6RBP1mWhmENSVG4Wddy8EYgntcUh8YRmyQA7XkReaxjfJi9FeS8NLxJXhd3poa1WdtSpeSSPmyS27qsWSve",
  "key8": "3e5PFG3mAPsDcNRsU7AjEEYF2HPnJnrfuwLRaVsmWZ7FfA6B7wfVivaniQdW79P8DDPjYhzW7F7vkgyNQXfGFkMB",
  "key9": "3VZ73Cg6GcY3XyZb7gDFXH8CayqQAwSDpcqdhAKjvTFg8xHQEJsnSfHcobaYSziFEkWfdfrdwgn2ms2PfyBDmnWJ",
  "key10": "54rg96w4mR6G9fNoAjoxNujTLQwiwhWpdwbewv6ZCi4kTTaszLT4eGdLhCpFk1JM16s5jqtkaWk6s3XbmGaHdaKF",
  "key11": "2cTBfu3iXCC3Hwk7eauH7CKBSM8RnNtTeyBMPjnMBNtfcM7ZQHZiTBFWAQZnKtNGudm7WZb8iyjhd4Ubnb4Tvdd1",
  "key12": "2A5xhBtPfn7sLnsX7dHnmBkreyuM5s95ZeyaTjK39kZkqkoYsRQXjkTgbgdRf6Ntvu7JjEbCEwC2XWYsLgMKqdbz",
  "key13": "SafoAapQCbLYKUMLJp3DLLTTsfYYYmFdEW6vzF8DoB6tpXG8YiqR4rSj1DTE8qrcr6PYtPrvH2LMjTyPvvzjSKL",
  "key14": "2NYL5QmFZNaKbsX2ih13fBhs69M7knksRwaEnbkJBhYESL85mNJrBCDfuqJbcEv38Ri4x2GBZL5qo7zQqGVYPxJs",
  "key15": "KX2Y8T8CSEfZR35KSZCB39dWhusEdyzW3LmQC7d3Us8T2no8dUx6FXnySNS88gbGuG9oS8qZTWJebofoRAzeuYA",
  "key16": "48Fywf7qxZKLHZFW9kb8c8WE9ZEzyHMCHoqSJmRsiYx8nAfcTXys39UZAL9Vm5CRn5fGxfbPC8Zmdz2ZRL9mwpog",
  "key17": "3xffsy2aMLH4YWeQnGXhUyXbe5HGCakcsaWgmbW1u12xd8FrTJuGSVRWRmP7VhDYvZr1UYx9qvvrMkQguJGxMsep",
  "key18": "FYGKpwWPaEZAKnLKuFnimbUEG4PiSR5JB83HjfkAsxUjTyWwoW2Qf3cAme77FLUsMgw31TevmaETcygscZdDc9Q",
  "key19": "T9bdiXj4cpREpddNW9Zm8SFupCF1km18HF11uhUxMEHukkGNYZjmAt7YBKdJ5AgzB6LJgcyLDPcPUR5f8LiiFFU",
  "key20": "3Up1j9HDnvUwPe3JW958zAZ1UsH8TAtmncfS3J7nFGAXXXNsqAJEbemEBaHeyNxZfK8kLxxP9dfjKuXKoMdX5GwD",
  "key21": "54o45HoXXfLWLwuyG42XQRcyyTppvRjJ7Y2UqGFMVHNkyTna4DGWdKF7gDBFDHn9cZh5m6bzR9GE9Kmb7cVjSbtv",
  "key22": "3xxm9Ds8Rw52tKAVpp3duiGs9LeEvExEWYXdbZNFFfVYTHnXgAbEdMpk1iUwn2vHuZtcs8eJErQLmFjDADbtnHwo",
  "key23": "2roCMaVSQCYUFYtrz53WVv53GwawLnJuFJr5Dsj3mY6DQc9N2qKEhyy4MEQ9ZhVGR3bmRR7wSPPZinVdzapwRxuz",
  "key24": "fddWeahcLJSJeChjfbUTKax7tqJ5ZZxX6gpM3T8kJJCb2zwmZpXa3UU4XPBuJKNLQ7SdngLHgThsbhK2jvKPzpg",
  "key25": "4um6SUny3qUxVXNgZ3VkiaDhofd9fQY2CfezDaRqZuRZJ9V1UeyHvw1UaLMLzvptoLZu1vyNySwW6ajMf1itdxaa",
  "key26": "3B6iB9eAETekhtrLfsQGXXDC8RMESc2Zq462pgo9vWGnywhEqpGNnk16Acdc8HqZSUQsbS4i1sDcxfvTjetRZHdW",
  "key27": "VPcY4R1hL8brpmjUkjHeA944mS32yfixoLSVeZgYuejybFZgEMtMZAXQvEHoZHLFsmnu47EvdkTXm6Za3bvNTAT",
  "key28": "4q9y6rnRhxRdngeGfjuceF2y8y9j6nyYTmr3No7ZpN7ddX6qCtttBQ5357UqeRvX8oWZ94QdeeucqUokEC84t5GG",
  "key29": "AaoAXnSRA77KdyC2zBSMpShyovqmBsVd3dhswbJbWVU8Av3k4Pq4aXHEc4EstHfEwh1Jx7Kda9WxB23cSQ9CkgF",
  "key30": "2wE3FGe9annG2qXwBGRJGbMwjFzKizkEoJZhqf5HPVuxY7ikwyWFPXGC9rmdTKMcAr3siLxQMik94GJ49C5tcghD",
  "key31": "21ii69dpS3FLSsXhADyhaY4WKcEYDpaGw24fd5ztm6wJxJ1oh8Ax11C3PfT1X1NATBoBjoSis4hHr8bFsChaEGzH",
  "key32": "4YoyAENmijgY8gkBWmPoYoXtmAxbJp7cs6VAbGcVusanh9AyWBktDGaFu1mFm75og46R9U1Fgy5FU4Nv7Yz21GuN",
  "key33": "4LrzZWSJtin64gKN3CKkA6xkDZrXpUauiJQ4LmejRSzhcTB4UAp3xXyRKYT3ytVs7Whb1A13yFx2xJ5HEmeaot7P",
  "key34": "2jtN3Lrc25PSTNNQLnzQTN4PucTPFanLuE4tamrudgZWRVBfmVeYCVx28iL7UTuzoxHy9Rx5GxCbBRLEk1Em3SZy",
  "key35": "4DpfbejGDcSfduCyo7QyUVptgxTZ5RkEN8PUm2VqKwDTshERK1UVAEicnewNzoDHbzYfMB84XXnm1E5R9VPuTNLA",
  "key36": "5YTucMAVawrjem2PHxk6EE7Zc5SbQTDh1dYQ9cURUFNdnot7U7WXGDEnuTc7a88dbMjL4hNhh2wB9zSjUH4NmMsk"
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
