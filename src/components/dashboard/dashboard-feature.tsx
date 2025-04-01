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
    "ySpWnxZK51keHVyc1C5HmmfGYoAM6y5N741EJahkFTm79bH6Lgvoi8iseWMPEvrfo1v6tfkfpR5jnH9iuakEvxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rx8sBaHEJocf9nk7NM7jc8fGAFdS2mJ7KACnjiMWv6tYvQUF28kveoUVxfvQFL6C6YmdGMkyJ2KFDRpuTx1RtKD",
  "key1": "4hqZqJu9DQ9ZsQjWBZiWswrs8bkGFoD4sPhn47mYDeGR3GGxuReW1S6jv5a9w8BF79R2RamzbfZTkvL7pTLUqwj3",
  "key2": "3REMTZCRZWvk2dTxfUF3jBApoZh2NF12GbXyqSS6e9MEPx7hT4xu9as6M7Tcei4T1syaAnxrG4PTaeAVBGT14W5n",
  "key3": "5ALkp1sY1CxdCqp8kRKyJRiVb3nGq1NhKs56SFDzvdUtWwv3KhzYpUMm86YoAfJ87U8euWW2cSeGeQUc4ZdDFfUA",
  "key4": "xKhv2pxYo5A6MT72WvndVMVE3X8Yxk2G8qDTS63jpcBP3D7WW3jSWWEYJ24EngkZxhBkT54NvVcgB4R1cnEG7Aj",
  "key5": "5sdTgBvdDozA7ow7LJSRgpkYE9WL27WjGuEK3rQHUbicXtMJeSr9kzNGh5XvDzC1evqDFWUYZ9mhugMdUUkdET7D",
  "key6": "3oU8YVvZ1B3YvoxvMJzaZKUJhTmYRFh2V8jaAvAtrTKSHRRbwR47Z32V9HTdQ8CTFfWS4g3rGeuoZnEyPW33Sc5z",
  "key7": "4YfFuoDnSCFg9AGiHXzWvAN6R2yv7JPejc85VfGLiei4mMDXFQx9Qu8jv7MC3tF38u3D13ds9rW5R1fCXA4buEMp",
  "key8": "37VimpQdnr8hPSrxoJZxqcfPg9XyNMqWT8JtpMpXiHWkJZkBrgxuunKaopk36g6EJC2WKys7GvdhTMtnKpM39CgV",
  "key9": "4AF78aS6REU7pJxbwa2F6yJaaiGTsywEMKe591UNWB1x1tznHqNNjdXTpy3MonLHgM2RZhogCLe5EaE45HLrFgHM",
  "key10": "gwfbugZgLC1AyqCgAvKUdybvCbZ8YQXSYn2qV88TkAJZKL8iyNuWk3um9xSDqqbaJPxxShYtocEfagHao5HA2BT",
  "key11": "5egQG3n7VqAJVovU4BH7Wv6q3x1Axtpidwes7mNzrbDGdSCTKBS9YaZm1f6b7EqWtMcjPXTubgZtWiAMuZjVt6K9",
  "key12": "3tCRUzfxbo6A7dYPHDzyp15tD1cdModg4MT24F8jvV2E4r3a6PNz3fxk6CZ1FDWMDmKU91n5d6n4FgxJYAF97FRS",
  "key13": "LXdDTtPi78Hop9UzYeoqZHJ6kMAjZTrvZDCjNP9ew3Rk4QhMBpvTAy9hW26aiBYGTQnfGTEKcB9Qpgs1SmWu2A9",
  "key14": "2br9XVbfhLuoVkxpX6SHnyGZxHKLgW6esa5Q56hVYG9uCnLQbtQthaaFzYhP2cAMbGvqMi4Sgts2HSDVo8PcS3FS",
  "key15": "5tmKh8RGJSpjpypCmevnkCj7abmtWsL3zBqgSeuegihheUkRaGgDb7vi4EUsSF1ZsPjKLf4xgpQKtMoQRyeBydLA",
  "key16": "3oeAM973apJEejyXaBzSHvUrb5CXmx9NUqMuQVPKcHhiwT4povr77zVp3zRvPhTkjG7PF4zqdCaW7is8SbVoMZ9Z",
  "key17": "4YS16WmcdznqNc3wdgVviU69vs7MtoSJWM9TgHweNb53WLcUp9Q3idAgYQyZajgSYFnHyjYDG8ScU6zPQPNFJpxE",
  "key18": "3eF599TtxqRGWz5jBgvcbXNFKdKrHzDYhkH8Y2pZCBmUccoQoKAKpQfv61v9VeeABbe7K2N5YafskdctzD89JpfZ",
  "key19": "4kSxAnhLQdHoexxeFfxkBp3CYebtngpdQn84uGtGveSWfcRKgcbE7t5gPEsNayJqJtuuF2H8atFmz7XAgirdpaNF",
  "key20": "4dkLbXRNrBaSpc62uhAEs5PKSvm8SAuHkM2yxJ11n9USMWVfnzD4ACKqXKWxJx8sz3B2FaD3jWtddsA74XHehXSG",
  "key21": "2nxkAqfXYpRk9A9g5ZNCyiJwRLEAGbJrjG7HZvFkFawNPqD8E1TCX2kSmYZdh4tuunRZuDjEQEmTDYsgnYh1s9Rz",
  "key22": "59SaMjDa3TVz1NEDAuEWdY95ys1PAtD4zSGD6xYfCAV1oFEi6PVRo5DFoJ6JiqVh1iqpSC1W9f8JH2UzzqWkW77o",
  "key23": "qAsyZBKScd2HiQT2wjK9GhBWra26EvdEBGs3j3mDrmwzVXkutT3Tx7wYHEt5uce31TBn1JXcwnjZ4QhbfD2rskc",
  "key24": "211k2kLCQEjQYy8JiKSKAtN7q7pt8ih1PNhKt6kFv3KJzABr5Ge9n9WdKHc8UC3hTQwRs5JKVxq7SAbQHUGgRNBZ",
  "key25": "DxHHfKncto8UFbBdCjdaRvbjvDo32m2GcBoWBYDVibfcTrGewD81TRHcmK3W8fsyir5MnQkBvSGsoxwav6GS6db",
  "key26": "rGXc2zk7MGCvgRe81b8TThojc8ApHLyr4Lq3tqrXQFkx8rZjTXvW8pSPwq3XPZvr9g21ra8Rz4Gz2Jmya5MmK2C",
  "key27": "3iGJj15btoUz7TZi4e8LpyioJYccPt6LmaNZ1w1bxubqkm16pqRZH1LST9wPHgX2Jh3PP2fpfZZWDvgjwYiR1MGY",
  "key28": "pBULGcLXJhPYdDzE4NUqVbmjVbWZHN7j1WmuUmEXpSGZDeWnwJ67kzgGZ3HXAXPexPQUqJDi7k4t15nujpQMxSt",
  "key29": "5AN6ZF3MrMPUkGQ4YxDoPgvLmFbYXSmviyDYGwA93RXzsKnZM6JaQsa3qjNxD1Bq9caunsZedzqhA8zSNCbKM5GX",
  "key30": "3zh8tEePyKhXLxw1FwPRVeJNBtEdCwuqDfUpZGmgNRJLtKNgzmczwGh53QVfEgcuJj4SRKaFWEWLyqgWhrQNcdNm",
  "key31": "5CEXCFcCU62BY9aFRv5bUK8U2EbZVwhAJFAQ4ogwMoe9vTbL5QKzTeEomk23DEQjGwzugMqdyPqUaigjaxbx8DcB",
  "key32": "5au4EG6pme3QDh17HXySnyni9xG91vybJ9zSDuSiZPvSpUgvmFAiaSAeEyzys7o3tckHNLoTHwa2tM2yvxmcxhqh",
  "key33": "3uhaZGwUstwkx7rk6a8MuP7v9mP9vbMnJMYDR1trTFPVx7AZ8Mbd4hTsR1bZrL3k42JXVBnPzT8RasgztQ7vBQ3g",
  "key34": "2QHB61YeqtuxxvFy2zoYxReeyqRrcKjqba7WZsRK8jLWzFvT7AV5ZArpRE23qiAyBMvZhzXbRj4tMSYFAqf24AiZ",
  "key35": "5YqRVxG2Ew1nCaqo8ocCXfiyhUsdaRoM4CSvg1JmkPhpWKna82NHgqFmDTEUubuMzPUq7HD6vszef7rdiKZfsgFY",
  "key36": "5pNZ4nDYWCRFxCkis91ep7BvAAmjwEXGYP13xAmUheSu9mfACJbBj4jCQA7LVwsm65Mspz5xRjD2Pr8UTuZKNWGQ",
  "key37": "4CVdEkkzFQBhV6p5bUfAKjeMrsDEamcLGbJoQaLXC2wyc1GtckUwZgZ7YHiTq3TxGJ9SuKNZmoX8deAMd8HzA5GH",
  "key38": "5rSkNkHw8EwnSzwQrvKotgn3hVeu61PKukQ8PEXGJunoecfLAZfjXjLyRFtALsguGS2PtgvxrHgHS5MQMenRZvsg"
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
