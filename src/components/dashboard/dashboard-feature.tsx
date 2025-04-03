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
    "J5GFTKSCoCDaBfPVYpTXedNTMDsueBFT2y6DkgHFvahLzmTnU71vRR59RDim9ycCBdgXFciiYGTwGaLLxAziLHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hTHXZsQtigqdP6vz9FEFzUAoGZgEUSTBhMew5MoEsThUMYBpgdQNy1QjWCD5ywxwXcCGsPn9mpXfLzewZGDSXKX",
  "key1": "EzsuZPdWb5sWLc9wNW8NuYmHB9iS2XVERuBQPg2wjhJaGWMTcjZqdtM4D7kkbfxPtZFHy7yK9ZYEjK9fJHaoFUZ",
  "key2": "32EuWYk3iYsD584UbZJejCxekc71apQnMLfXifM5zcfFBC85XdN2BbFr65A4xZEww6zu8Rgn69Dhaih3ZFNbAhbo",
  "key3": "PHo34T6JHM5vrSZfGSD7LP5R2eXzRXYNwV2yqP4ZXYUtnsEJovcC9Qbg6qjKg4Y9NyUZ141AQ941dcx78GtFYhH",
  "key4": "2PegPsfitERYuBWtPUFLvcPCkgARnBtCUdMRFUDQk1N9wxwjhvGehPQPjVnuHAyWxgJdq8q6gZGofjG1cz2F9vZS",
  "key5": "3xEdybFfTRLw5wnRTa51vWC4RgXvLSXaKKFzNC45E3y4bRcYgyA5b8HULfxW36SwMCwFbeTzKSZfRxut45T9JfVJ",
  "key6": "5FMTFzZxje7FcB4hbdv6TjCTNgqt3e8Yua8u8zu3AgyanGf7aZU3XX2PKVLiVHMWYFh1Zi7P2K87b9bGrTsPKEnW",
  "key7": "31mcX785zb41tVDoq9K4JW7QWxwLu4vC3gJY6EwM7Vt2Cq5P8pp9EaKJRnq6LreGZQEHELTHSTyt5oQk5p1CQysB",
  "key8": "5yKDQY1xfTB9JhVF4H4M6MfAYSxWf9bQmvTSwWnPrrZn6KCNDf65AHMwoKeuAYv62PbFTNX6dDX8e3Gr9gdLDqNz",
  "key9": "4ZE3Qp6zQQGBq9BPQk3qiYnB8pDrjKef4ZTMsk3bbvCsCYjTFYmWG8PfwiHNk8zvktX4HdJ8SMNqasQ1xc2rt919",
  "key10": "3SakjoVqZVNxsstuhGMx471wD6ZW8k2NTLJNXFdfrjhxN74p9xTNczyAga3JeVSjUeKMMdgcwJRMkJ1b4GQmEJYk",
  "key11": "55QkghQk7KJacdvBA4QJGb9vvtz32dAgMLJCksfjGKenBTZQVJEr8Ente82Zbno5nAr4rP1i5aWgF8gq7vifuBPN",
  "key12": "9FgJfGKGPGSmEjxAKrgDQASUsKDiHqLQneaLvGY4kCgXdqpxCgX5BgbHYTqi7DBJ738DtrXLMeAGDgSPiMvfLRk",
  "key13": "3sodfVA8hWHQPQ4MpvQ2JgiDK6GSNqFxsKn9ohEqrBvFNqwAb2PEJ13YbX9c9utUHMXsW86Tm6pMA3KWh7Kph6Wa",
  "key14": "61hVJRb2vwJbqfxnxEXJ51YgCUi5nTA2THjWeMQdLAJQhAQ3u8JDgxcfhwpB3V9FgJwwsWw8brLgWhanG1q2aTkV",
  "key15": "4gVX6vW7S2AByibyV5gGkevNijRUtVsZZggK6H48Gt9NvZYD6DqDKfePvt8XPFRxgU8ZEhpCPDTnWpRE6YRiMqCZ",
  "key16": "4ViRZMvvMiicMZkjfYaBMKi8XH7mL577FG7yZAAivHA4aeLDd9bSKrzKiDWTYtUHgAM2GcvWfZaMuwnCudBsEkur",
  "key17": "2E2WAPKKiisSwmWxhpT2HPqB3ctZ1rEVLpsW1w1mPupE65s7MEz5Y1J1znwGiYZbA9FJofZAfgNt59UUmLMr52oy",
  "key18": "56WCwSznAxWMDYimqvm5HJ9myKNPKACEGenERoiiDVDLbVf5zwSUKoa1QLDpp5wappfuhVSfBrR59LZ8XunX5quY",
  "key19": "5zop6dtd17xjxPQjReL8D8dbJKLW9DsDybhaQuFkPjFTZnp5Pr8AANsWLuASsVc6Ds1wzQUKv3mMk1Km3kCFbwsM",
  "key20": "5DrHwgEacef7HedmbJwzkELeqBB3VDZJzfghekMHgjn58rBqLghzLH3X9rtyzsUFT2SDDgX1cCfnxWbjgikkRfMJ",
  "key21": "5qAXQeR1nqKPGcE1RALfFoXsJWBP6XmUYxpTyfxRyXtBvbgSfot9MqE8qC2okNysLYNMtNUqZSXXyvB4bEJN19sF",
  "key22": "3w9W6wAZXG7Qfa9SgC5Wdh46ynnEAZCAP3TB83UQMha3QVtL4kccmRxDhQitU2D3BHwVczWHtViM17k4JmwG1t3a",
  "key23": "XSGEJuYtLCkXBveUeRbk6YEMKVafkjQS8fwnMX5nBo8nVBCXvpVWVDpLrNFBPms7PKKJAWPAQzB7XgGuhWuVbBq",
  "key24": "5BYnogpEvsJkbWxAjByxJGAwRj7Az2Q5mW4otANsQCpvfUqc28EkhsJKvBQ87zb6eySYWHcyEYHrHp1q9qZYMfar",
  "key25": "XvcPxhrBkBZxUsiLPgsyFfs8T4tLu4yrwaLgSWg6VtV91kWCtYuzuXrqpvgYXXQB2incvxcdpTVQNdHix4Jt9Et",
  "key26": "2pYdixvTqrzSZm37hyBm9hMbVojJ1t6579GQvkza58ENDTkm4d5YS67WMMx8SedwWpYQPufnYr7WmvVmXM7Ce9zC",
  "key27": "2ZmpwL9opgmMpKM7ebafCaP6k434acULxhyTE48pbETxwwiXQXTo62FCUN8ah2zXwfPiByxcUFYoEXYYNicc6j5p",
  "key28": "UsKu9rBjKek8j9DdFStBTZNHDsjyr9gvNSPokPjjQtBiMAcNuSSRPJKP7ViyUYz5aCDQdXJLjFj215zX6USwoJn",
  "key29": "2UYGVgCTpP4GPWwDiEP7zFj7ww7ieTEEWfkrz7wkdZSzhjh6gMnteeFfcwa5g3focW4wbR6bEqvthQSTbnENaANs",
  "key30": "4s2kSCQBWS17hcaAqobqYPwP2f1jtLPWm3D6LZTZfLVcfH5N9GbDgUoCRig4dK1pYXBgypUKuB2QzauRTFoooCzq",
  "key31": "5kDwzEbLHvD5DiFTBBa68w2Ah5ZYEjBhYXTu6eRdB3tnk8pjGQRgpbxpdT8FPwNJ5Vz1ybL19qPc7kaA6RwocFFe",
  "key32": "5U9BsbAsXsAwhNUXahpijFx5Lcongr1dbEv1iY8si6koxNs7WjArfjEXMXzRRVe3Z2ipuWych152TF6KsybbcJxf",
  "key33": "3kHavRMxbhTV9X9pkdgQrzMhixHJQD7UxNowJfoTrdxKe98QSmMBwnFRhG7GYk9J98tVh7crkYg5iWR3PhKUqAgg",
  "key34": "3ARMXqVpeHa9KPRx4CNpwZ5aD5SW81jjK3i4YhG16DHh9RCXrpADBPQmbJiG11YGU3gsEmkDWy9LpA6dBDcJf65c",
  "key35": "4KHBHkeSAcaMTiShRvmCmf7g9TebCXc6RnWnxCa55ra9Moov2nNrhAUKoZfhkxEVgQ9kguTVi4PptmK9pByseLFy",
  "key36": "2FkHPd7pM7rbFJRj6bxjkHDZrxYfVPBF7ngREcXG4ccJqKaC9D1fNBhowTbsGe87jmJquMcgRegUyNs6BvRZbijb",
  "key37": "4GK7ZmS1c2ibwEK9M2cEnEbQr7d7Z73WZDmCUXKzNhp8XTuHaXBehuNSQNMsYv67MaYVvyeYb9isk7rttinKm5eU",
  "key38": "2rrdH2MAg1A5UU5JYjn7Jxvy3uivzaMEydKfxF71nYUwoTbUGz2vmkthzw2sY8Yze5Q4bK5PqBo1uGL27YNNpxze",
  "key39": "L5p9KVzjyez6J7J4z15sgQW3TDYFWx2aFF81gNtk1Ryrn5iwpdWH8eXFThj9qT14EUw1Skn7XgzrR8vuHM8VLSu",
  "key40": "3gZESE8CmagKLoPmE7fFa9vJ9yiQsRccJ7kHuXxFA977sPhC51FoGQYfVPKiSa7Dyx7xwCatTCM5NNkfbJrhF3zM",
  "key41": "5c77r1YVCbqj5mpMgD9tqXn6JgQ1Sa1M37cPStpDAaKARecPshJTG3ermQ4VUWnNjiENfv3vp6pGZNm2LbHoupHs",
  "key42": "k1qE8emX8vCJm96hRUooa6sdaGFGLk87Bfrf2FywhidsrSGyHZd4WsXo4xqFgAu2PWvbXvDudPnxTtyVUDuT41s",
  "key43": "3KM4FcXkmMgrrDBSCqGkkvsqyqPTFr6VrYEBVf5YQ34wBMZuT8E4BAiX3FhY3u7mgqseUQTE8CnWmznAaBnxtpFz",
  "key44": "4uFTyCbbwgfRxNRqQ1eoTkkpK9SG5G5vxXieBV2rRyzphsM9rcJD6fk4WtKcRcoCvZ9cqLx33HNENBZPGCspveBM",
  "key45": "3Z6HqN2t9jEBX8sfAjrnoJTW8Ua2jjrFZH6j1TwgWwFXZSXytbLtdzrnaE4Tne95MS1ioZMN2YodJ27Q5k22Weu1",
  "key46": "38oTYy7Upc2JUXKbzSQaPv2y6ECXJXRxCQ1igC4Syg3EEJqmt2MGGvJuEniXAwevqfQLCyA9m2cqbwJxxfMDa9KN",
  "key47": "5agYoeCuENpUyzVSKXh5E5gfNkdQbFf2FtsbSRC72WNhXtPZB28kFBCiFJVtbkbQhYicktjTKFKVy9Cb3DV6eWtU"
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
