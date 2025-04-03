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
    "5ukbeCMJrRYBcb5V1FPhBYkSiWUs6nuEqTyttWe35yXwmBT2UMDtvECJ1vKX2RnPJgBHRkn73cnrtSMyQfoXxukT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yeowebKwJ2b8xzzMwG2DqNUQKgkETd1XQQ5fqqhFXcWjySVcbTWSDSa1fz5HAwBi9UsMtGpyBd1FBrtPzJUB3wr",
  "key1": "QkFsqH8h4uDXahSxBmvLvCuatLW6sRGECEfjjR9XNYPZyGRxn8qnrMTp94sotsnckjSiaPDSwHffBbgxahrhMPi",
  "key2": "3or1hPSBgbzbqX2VH9PXfoXwy21KL6zvBhGEQ7vJj9J8iRro3rxjLNC1Jty193A1dhos7aJYyF3iWuCSBzJXYqGZ",
  "key3": "4WBnwU54UErzd7bWbmknWyCAeyVDg4ZbNRjCptaysDureNWQwjY6dj7ftykJcMNXr4qcH8ozawQ9REDopRgfQiXF",
  "key4": "5hYJorkcquqGcZB6QXHLbYbQdsiKc5gH1oY4k36Whuwu7xspbtvVt1gBPpuqGF4r55k3WHZKkVGhCAraXUpHKJLM",
  "key5": "3mSro41zzNJDwARZegGZ9b5zpFtJrmsXN8CHGH4kFUvdUcfXnsmkkLj8p3hknYkfGZquUbeoYxTi1hpsa9d2nGFu",
  "key6": "36EnYBk5E1deqkVT95YpHWM7MZrApQrFthFejnDvre6WfoKBZT2huNH4v6X2inG1Smi9TMEHwv9Vy5vRFWJocRvH",
  "key7": "5ZrzLNvujTTbdxUvM4rhmmLHFrCfc2Xewyt57BXmpY7dsQbVjHgdkBKx5wUkGgiy8JPkudK8Py9muFapMm5VB2vi",
  "key8": "5dehqcSG3k6Va7LtK9jvQyy1aJuPF13TLTBoLQm4aQN1UN2u7Ct68wEFBBJo6ZsiE9hBiBex6YwjUWadkq3KN5RB",
  "key9": "4MwYDVBsMG2EXPawpwnV2xYg6dDjGGD4cbt8BudKRbv3YLr11eGFpmYduaSejUDkuFtUfioAfyKu86fU6evyCECU",
  "key10": "4h7pUWPRbbQJo5bLnX4Qh39FxzrsctHo2SdaLNfDH7srcSSKLkpf1XYTf2bXCwFqXRVvvau552nEtuMHa2UjezmE",
  "key11": "2syXhkKGuBkGihM41grPUjCyUGtmq1Hfu4GRfKD5f6eqRbFSgAjLXTSCm8b8mYVd4iuwEFLTgoqiZS4kKYndgqzi",
  "key12": "38P1yG5AtQKujSseQQSB3MBm4kbHNd3WtszcFFDSdrJDFQdAUU9zoiWbjHBNhcoRQ7TBrLRF7S8ya48inDjsut38",
  "key13": "5BpuWTTLFGPbX2vj8U5gaD5MTbF1uysSPjjz1T1Mvnuo3PnPYfv3jRbLQ3DhfFjjWu1E7eeHRTTXNYPFU7trj5on",
  "key14": "58BpDHqevk79T1JZUbKZfZo5sxA1F6rqg64uYAuWrvQ9X8Rj1LUEUxBj1sheu72A9KJ3PxB16D65e7cvyubxxoad",
  "key15": "2X64Y2ShWdEg5s28XVniKWHwoesgCenbpeUUYoufxGKCwrzXQx5oy6WkTUVcMvbWavxSVjEdCsfUtPxzjMKcUF7f",
  "key16": "5Jt147ukPCBfkqeTKbZ9BtprpEyyAtfd3afAdZdmkgPeLPxqf1NzC63AmHnAZfZe2UaVPKWzpE2GCSMZWkH3M71G",
  "key17": "2ydkb3mTEG5TPDCc9QfdV8DUfP6Quc9BWMDb2n9t3uwMWHQNv9ZQHD7cUHT9tWQrg6cjT9ArKvz85GBrRGLVa69U",
  "key18": "4PMFSk33JS8aSVfgNpKdunWyJcGrFp4hgMz5CTsXLsJwhpzPDBFpaMCGRFF2Z54hzRsb9Fad6ZXN5wYM3TkzVTBe",
  "key19": "3ZGtryhEcC5eKsVtUMgA69vN1Ff5eTYLsmrprabcVDSPnQypgqLvS6wQ7eSG33TdJSTVg1Kf6wqbCbdoWwmCZQrK",
  "key20": "2YDvobfteoEketZ5DfJL2rejtH6s6DCrEEmN5Pi6jrXWnj8fLAoouz7RLmzg7dZBYUzU81L5iYANhHkfyAFeJEGE",
  "key21": "51j1GXrJQoh5N7Vq9AJDhHQKLuZf14a56vMtBbTi6aZZhWKvcnFmQpyKELzbip4sa1eafvfppH5AAPvU7ux6Bh5Q",
  "key22": "2pwXAX1Pk78zRXaEwB12uKD7SNXBmPknHUfsCw9n18VKwvZ2bDzT1zvFSDQXugS9be5vCXaHavVdadZRuDGZKZap",
  "key23": "2SMazTa6V3WArYcNf8dkdENxHdGEo8FqLaoeECvnQEZ8z5yy5jSLkoB5getytiPFkmQU7btJDCL1KfjtLbi8S32a",
  "key24": "59hdH6S6f9q4dW1sQB5xrxtGUTH6x4gK2tXzePWt9gSdmToVV4r4kJ1hfsm4ty6GtvMnaZiex4FopCq7DiEtrZsv",
  "key25": "3AG7bskqZNibivMmN6ssqSbmGKqFXKHMwt4RhqVLYa49ySSvAvJtuczGNJZgP9G7LxY8rUpJiKJnuEB9R1bEgpvP",
  "key26": "2ugbohsrGsdfoocV34bUaXjJ8tGV7CH1AB5qFVmHBqEvdzc8QPvc6MMHF9aqo6LbAVUSrByqnmVnUDEY8H1rVd5Y",
  "key27": "28uCfymFh6mBzeHUMK6zJnXn2yPZ9LEWWYLBqcoseYweTUS3EcU8L3brhp24SA6xvPepjR7msvyiE4fpsS8LBNc3",
  "key28": "5UoQgSEChP7QqR6Bm8EdKN1H4JN4BQFEs82mKfjXEtXZYwbQo1b7uSx1Z3GPUCzPv9o3uXZDAB4KMErRXov8yZo",
  "key29": "4txJazGWEDwToHN1PEhpGwchuiWgPAXsaqCW41AgfrFXBcGk5ByZed2jsxDPVXnYJ9mgNnrgFFHN13aeA3SoT4wC",
  "key30": "kYjA1AtbRiT6acgjUtdeyrL7Y4jci5vWChbjnenCEiWTK7b9xTUWeHUztdWdENEHcE4rMAepAwcijUeJuXZfUYv",
  "key31": "JXp6ccB9QLgNVb1DD2BDpnAvLxb65yiUUEYaEVsaJkHGwEZqq2Z8LszYuLpte5UzXqjSLUEjgXMsiUKxG7FrVwZ",
  "key32": "5pf6U3T7M7NhHzj1MztHJhpmPGgjeJ5PR6fQ4R1GjEd16mwrFAhtuDCr4s7h9TGJwETAsWpULEfTBb91aEbrJfGU",
  "key33": "2QhMthhYBVzRAnRfqDVoxNY5nVNaRcAkJn1NCr15p5FHQazLTdJo5juWuLyppBYcYgHLfhcR1B8uVZVDm2vecg12",
  "key34": "5PQ4DAMheyHbfJ6Ux6CgTdzJigcX4vLUzPyKfVudPDeY8YkkDyzURRdbJutXGC3MePmuxPDFh5JNgWCppTsvjCST",
  "key35": "uV6sh8gi4h1qupB9KXg6c7SFjSWtpdnkojXJkcezgXmPQe2egXQ5uz39u46vfXwvshTsbvu9aWFzAbHibnyu6aC",
  "key36": "rQZ83Gwe4T3HctdvCdycwLXNFHLurGRfk68kJ47Q9gnTFCg4FJCP9p6zaR51Fxhvu7z3qxtiLF574HSu9LTZEGC",
  "key37": "5bs2XnMgHoAwK9cFHcXPTxGZ77pUVqRcTj47gg12vAABYSKFNgQGVSuJKRUcFquuy5Xht81KY1x9P3EwxmDEgRLU",
  "key38": "5fUcwXs7L3ZoP7LoJtaSnZikJT9JMmQuG1fBWms5ncg7vidrorjWayctMTWPmxUJGVJp7n2SE2uyjJbRs9TKTmHz",
  "key39": "4xDB617VWtqgtBmKE1bHt3kecfyLbA8ammfC5skpg4Rm5VX3zDpQn91LXyLbzN2WZ6mpepcXzZgg4x4eoUKRfdjH",
  "key40": "4XtaX644om2TP1rCiRfS73UrAz6kgBQjNtePbC2ZPwgthBybRJfL5TvxHW3GkAYcSPGFW4xfkNokqznuQ5CgNutH",
  "key41": "5Zkz5wNnE4bswdQP2tBJ7nQqmjHoc2YLjb8F2pWgPKkspTV7G8Mj8nsMWJsjGfSe3xWiqJJXmMv6T6GaeBfuCdqq"
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
