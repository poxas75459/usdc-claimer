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
    "v7NBTM8a6ueg5P3CaGgm9pkzWFQjjtyrgTiai5HgQG9Qh1UfXEntWxxH8VJm4NBHXwzHbmp7zkQUy6VG5759Jun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WCxXoemgjyPrtyUB6JcUr9oWiEGYNVx24cFUBP7jXvxCizfydY7DYjAv8xpV7nE1eUstR3MeNAVtRtEH7hZXNE6",
  "key1": "616uuppooXSgP4RSdFEfSnrve8sTMwj34wWWQVZ3gAhJPCKtEJiRLgEZMBbKz1y1zWd1LesmEbeQhRKb7uTgvBxk",
  "key2": "5UHiZq5dD6Lk1T1GQJ1Wvf8CED7uCWvCnhEgGnGiLoqgxHucr5NLFTznntQ4r7hw1d3mhD8aSVeFvGxd8FWj4Jm",
  "key3": "4afqUb3TeHmA649yrPoi92s5vuSYhRhqe9KbTiCnEemh3UjHuagvwC44cUQzHEmDPqMbngdEnJw3pfYsRedMsBPf",
  "key4": "5sVZ8K8MhPC6E3LmD6JtJAYD9vD8i6Ro2FooMKqZCAJa1RQY9dqsPBBU6EZF4yMzm2C2u9DXLLbsr8tcYaBRMvgW",
  "key5": "2XBL7BZcLCfe1ivDfqdTcn3UnXWNBYTsTj9rkhKjnzyH9ZS1U8Ar3R7kTpRDg1jje9mkqVeVCSWXfM2x7NLg9onh",
  "key6": "3214WxTffBWnE5srR4CeYDjdigiZjrccZspYQojCpjR5qYkjY4bRxFaSci1RK4FukmB8rkBHeGoQK9o1osQNUDTh",
  "key7": "24APZFpQUtFCgeAyAg82LWBprno6XwAF9BjHtLveV8cLFQnUbYKNoc42eyeChQz3qGcSwUaUeVeNZyhb2Kz6txBT",
  "key8": "nRzPyD4KRRC1S2A3xm9hSq6hq6jQuBUSDeDChvEcms5WYdqTHpDSjExEP8LYWreM6SSFRiQbkRU6uHzQ5pwQST8",
  "key9": "3yDN3JpuWwBxAMDhWkQHyvN5zT28svunTakJ9HNGRaS2CfmtL5dfvVQeEyG6B5y9aJyU7bkr9hgzfaMo5XFY3nGh",
  "key10": "5eyE6LNCeLTFuxiWssucKYqxMxg6dSeBybyPVUdSCNeTLn2LF3YsPWfjY9463d7mJt4ZctTzPLUuAE9KzWKog92i",
  "key11": "2krMQcms1m9Qj7rFo9TSZZdW4wnfjRkW8LawyQS6iqwiVNXf9NZcVkykKVjtMh3apZvMVWHU9shLiSX3hr6Z7i8m",
  "key12": "3VRMAHKA1H7W9XDhGqfJXqR1BjgC1bxS1o5KsuPzS1hSS4q5rTpxaWCFU4odUK8yFPc5ZZAJjXPTXdL6Z5LDUmFq",
  "key13": "2monyw7sAuQarEEbsSnjCe1ok7v4V1pm8juFfTD92tjYxddRVogeooWuzxVeWD5BsAzzmSh1NB4qwXQ9ZfG4h6Kd",
  "key14": "fMUB5EjqBCEaNFLitx8f8PU5vWR4r5nkhRTT4caGM6K8GHk35QHCdcFSuASUU3HqWAWjwArxd7DRXVgsLWkuGfL",
  "key15": "4b1GC56icPLZrqAizLsx3Vi7B6XVgGrDR8CLsMb6652Kwpf7Dw8Z3QzxhVaHENuRMUauR6YooMzDQmkqEFEMMKw3",
  "key16": "2SaxNf75AV4MXkmCSNwQTyJW8h9KwBWzoXSFPxguEoYoY7oVv7L5NgG28At7HahJH4QWykHvo35UmCUYXvAczSHz",
  "key17": "28oVeFEJ6U9vDaDNgCYCNXA5nqtkZZHnsuZRsyoKNXffXrH1JW7wX3Ls6wiLLdmwB49kaoWEFvwCG7B1w5atAc5K",
  "key18": "41c3psLyHJkCTdV5qKJQuXFoQKV9qAxM689aD1TFytrtTEAxAHCoDCKUGMg6f9rwUzZRQJAcYdqqrb5Fod393VSR",
  "key19": "XJ12dzAmHJZfp6mQsMb3KzpYXPeSNWCyH8zjNc6DE4ohLdGqyMBPBaPTFq259DMDUfNHsTvQBcNWX6LN9RyNsU4",
  "key20": "4nohrYxmfCPx3pfsUrFsxir6aGdeNppg9MQa4tak1ta3nQ1h5si2WCrHGicWsippccXXKGWChL4DkZYPXkFAVp6h",
  "key21": "62AHGWxU6E5tKQDhjsHruBSfX8TL5dZR78r3hpwNpcec1oXHu7mQs3PfTxNAvForf4z6BJfU2cFNFZPowAAVxUEa",
  "key22": "5Hjung8ZF11wsBmjp17PjVkXjAQZZJQGLsyvC5fFWfkefH6SGxySK5ASA2GDpNGjyRWbxFcNm6ub2SCKmHfnHfGB",
  "key23": "5xts8j6GWi9ryH4AGbtKaCU2yHYbCZH4tKnKyifFeEUT6XjiHFa7ojDdUZUjNb7nXX7yNNjVve9DSGsrJkECzwqa",
  "key24": "5LktmKegbDEn2taaiJe9ovsNEuWSLvwGgEZCqaMqLKnvqcCyGaRM5ifGKd89RHMtQkD1niLG5QcLHXGHKCyghfZw",
  "key25": "5SDAiyzMDREg9YhSdTZqcvUKRxBNuEVRCK3zquKRkLgYAapVMYKSLcYfVuJa45djpdApwxBUUkZdkRGcycEaGuDc",
  "key26": "3chckQT3s5CopRwtV5ZZqaPfpF8p5Dp6EpFEV5hHXnRL69N33LX2SGongEoteMzFF3QDmdVFZMjEZSpwgWrWd6u4",
  "key27": "49Wxz4yQhqhCk63FysYwyRDwqeVLgJxqDQV3GeATMPedF5U1rcfqPpRYRyo35NBH8NGGnyc5Umv6do29dcFJe9LQ",
  "key28": "5ttaouvBqTrKuGTaoKTTLGWLnV3Psi4cgwv5ta8iuCCkPvkFJQtbHwgW4nwE7GBLLFDFY6YJ4sDTBZsRKJC1jvw7",
  "key29": "31qHMnyHkhPYTpQ1JKFTpX95aVbeDHFYducdzPJp3y39nyRWsPhqpHWvokop7zF9bgf512HTiZh5orTHRvyF1ynj",
  "key30": "5fGBRwX3CRZenkkC9sbN87bnKJ1Ghud4sjSmfq499iDM3m7F6YXYkwwZgAJEaAeqjdpqauY3bAKbfuGasjHNdD6M",
  "key31": "3KP7ydezM6usExu6GPFVaYhH3hi56U7auL8Hc1zd9Nt3CPFvt2EKjERQEvF3UgSy8YopYy5mBJLfDjQFJEonknmA",
  "key32": "1tZLzniZJ5bG44kP8i4XFMPfdobeEfWGKiNv8vqJEjMA4N3mUEkz8XazCKTiRMgwccFmR7hqLStBx7M96o3kJGm",
  "key33": "5qrQ9d2q2Pa98fF2Jtd3sA82jo8T2sSdrR26QReWrpkidYVGAazb85Tw6Y7pPN4r3NZK4cherBY4mDGnkWxcHQqV",
  "key34": "5aDRAH6nsVNdTUehvo76SJ1d1sLW2Hq8KAa2YGSmiM3F3Zx5AGSGx3hVm5hzbaKZgjfjtoie3jjHwTjaUEkPdoGH",
  "key35": "VBsgzKfvkjv719RxpJwB376ribEUua8QgyB8mP4N8w9YiU34YwBmvbUQaxTWwujcjpHWkTKSBniMEHBE3e4EQtZ",
  "key36": "3DVgV6oiebzpVVthEFrETginQw5Qq2RncrPvStRnvVpyyRoVmbgWT12iVdFMknv7W8fmZ2NyEAZMsPWdxn165RzF",
  "key37": "2Lhm4GbduZgMpzBxhr8vUGyhEFeex26SmUSibhx6VNNhnEBbaQRkEoTKhqdGJQzwGCyLfgnNVgUhoFTKgwB1HF8G",
  "key38": "3AhxnihmerBZmUtHbKE8Cxc5tjQi7aUeiztG4uMSx2nk2TTBz46XNzprQdhHGRVfyo7yXW2kq32jZ6XFSHgybFFY",
  "key39": "2a2CdN8y6JvZoKGaWKjhS9EkAztebaZFcN195yqUvm34NqxFXaSksoT4oAU2hDoWwDz7SQ3Bk39urvTTfepydCk4"
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
