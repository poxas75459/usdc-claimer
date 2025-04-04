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
    "2jmmjDvU4WNHzombnNFjNWfk58eH2dFXzTAUgiNhh7p4AFCAgs2vwEkJ7dApxrejoNRG6wfnN8XEhnJM9cr8jaD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hL8CVVKjwxXQn6UdmivmBCJdz4DqftXz9QNNEe7pKRTJdorvJPvAp4TYVqCBKeNx6w433H4NhxxsnFjQCwjEpzF",
  "key1": "5ASmtL5AAyaqW9bagHAqHUxgUu78fhCVHTRxkQczm2mcFYZ42ZRcBEgK8tSbc3dqSMygvKsyYnXEzEBML2eCsq2",
  "key2": "43Yqk6hgQSehSmsKi9hgorqnSqA5zH519Y9zagcVphPgNk1CaLANy7bsxLGm17a9VTeMSuAhUom26qoCyUD6Cuh1",
  "key3": "3dvazk8kkM6tCDAgJ4xMFccWpTtDjjULB72DHVdrEth73xgr4kZabcQhLY7F2dafLcAhm9iFtpnyMyuPVhUciz2u",
  "key4": "2TwmurfLSMy2hDQpmgBvRts82adowAMH3Wrz5ytzzX27FaLSiMDX3Zh6DA9kj7sZJ1MipCboDhTD9srCfeuAVyZZ",
  "key5": "3XXU18qdAAds8fwWx3KrPwdkh8MQcsJYXBwksHPA2zBR8rZkkr6qWqj5dprRziKpoRuppQPV58FioXJVpBjL7a8x",
  "key6": "31tW54SV9wi6sUmPFUV28AREvFZ2xa74cUidyr4u6G95SePnBSLdAtJBznMuHnce95krdCNusoE1PEXFEaZVXEcw",
  "key7": "44EbQXGVzS6Fre56NyZTUkMbF4Dm3Ym9UeWUUE5kx5md4yS53HdoaFUGYT11EiSNcPfoJHDipoSHYLg3uPNQDNKW",
  "key8": "4GAbHuF9M1aKKgfFp1yidZdMtX8RSLUarUothyEwUvQXuG2yuZQntcyM6ZeKALSUtp4Abky5DF4fNS1Mn2v7pbq6",
  "key9": "4SmgH9oE63GQcJYbgTNwKpr1Y3q2QZwtxnwGrigqkTAzCxbYrANrMpNkgymXHT5oamndejZH69PAPA47TeEDihi3",
  "key10": "4FDtK6o9KgAY5mfm4DiXrVA8XXR1g9hR4ggy1hF7uwfKniDiKDpsBVj8RjtHQh5VtSXRMKebVSLPMVMzDwGxrEr9",
  "key11": "5ujb8pyFPjBeeq79J7GGJUEdwBKrBVDKAmLbSn9R4cW3ercMuV38b1KbLoAXdfbJ2CuuwRFzFd5U6td7geV6hdC3",
  "key12": "5Gv3wMffxzBLpsPdTL7VFcVYpPASYVFSynJiPh7w4XQpFGxrDJRqeyiD7WDuvWPQsABfeg6Xyf2YV2nT5swqvi6s",
  "key13": "4EekGECW5hU2mau6KzmqrA66hb7UVf2x7SDgwtDaCVUtQD9u2xqkeCjff7YDiHqp12URK2yQLwA3Q6LjrhVFnQ9b",
  "key14": "3tpYyazjYeRQZz4zuP7jcobujRzd4qdGDvLmMfRjsKRehe34UPaZEgQksn4nvE3Mueeu1PD1Y493qFYCZzHyaqGG",
  "key15": "5KjPKXH6Z1vyBtmJKz2Wzpm3ELHP9RdT3CqyFimpFrGXnR71b44mvJQ5M8H7ghxYcNLiX5WVxFcu2Zksy8QeCRK9",
  "key16": "sdPBZZXnLcus3NX228FbZyT3eWXFpRqLvSXHfeQP1fJhWtJAwidvJnYMW81ManxtHr6ZtPre8eaNFA4MTVs8znT",
  "key17": "znUiZHiCvZBVszMCiD55emiyh1FXWfdYydGtagjR4QfZb9Jc44BiAWV1ZvhUcPFvLKpq97dMkXXqnpBpmftQeTy",
  "key18": "XCPZDAonZZHYSH7Q33yNgZCULaXC2y6Enoaa1GGtmha2aKJq2VRgv3b5fxAcdbv8NMEnaUCoYqYPfGqe36hzNmW",
  "key19": "3KoVtdrB34G3BAMAP21ioTAgAYML4vvi1JaT1pStXDQAeHvRdFx1vMahJu9qWqzXRaScvyucHXd2XReoXpUrtpHB",
  "key20": "26hEn5kWVWxG4wE6i2XuP74rZPgSgFgoszCfZihsN7b698Y9RAK7N7qL8hFkCDhvTLvgB3eu4ExUVWZE83YXiizv",
  "key21": "ctu6nDyzJ3a9VkWC7Wf5LrvEfvZX95TzYuhPNbUYu3MzYr1sUyH59uEZqFabNjT1UGQhWtbzxhLqPSVdsGQ2VW6",
  "key22": "3sNwbH3FGUPJKtHJ4g5Xs1AL7HsUriNSsAyww8uqhzijehLT7CDPFdP4hEcyEQ8LELb7LaPULVZG8N6h5iiz7Ddq",
  "key23": "3MPY4MwbEqE12JpR6NMVkgYFBB6pcH8D1eb9URXpY4cAR52emB89zp4mAfYxeHtHF2tQfqbK8WicEJZ5pP1VcKyf",
  "key24": "4yiKSTnmVJc7TKcrSGEjJ9KMQWa1yTcw6QVD5CPHZVWKqESF1LMp5EDwk9RwJyRHHMC3ZbbH3qgZt2NB7jptqEdg",
  "key25": "3ArXrgqEKFht6qkRi8cFhEcWWc9Hsa6WrRiW8qHzbDkMMGPJutimQVKTEEREeeDGEsSpY2XCjXRbRv1oKXdKgs9K",
  "key26": "66Wgya7CUMTqPc9LLPAWkoigt4MwEiEh2mq13TyCJ7hUkUmHG6WuujuZHKugmNXnvx4TGHdsJ7ZHeWohV6gYssMu",
  "key27": "4wpFedXsa349ADZbKndxzC5WxZkDwZUuMcYNWGjmYX2Jc8i9PqiXC56Au667PXRSSJiyWs2ukvL9HZg4AJTJ5D3f",
  "key28": "2xd825CvvoCCYgG3AoNmBd5xPmYpXHMNQoU5prUGVhF98t2uxDbRN4E6P4yNkmgpamj11iRbaRAk7s5LsnHevZcF",
  "key29": "oYZQBC9AaSkNAep8XAChLt2fG9EJTtDxu63wtxbBMZXyQobtMyaUSb8L857RuwJT7t894ciWBbjDFDzo1qwnKnK",
  "key30": "2UJHZxKm5ifhGgwKidupKKL7SECovjZ8St4ndqnZnRnwPmxgPCyQJ6W5AXZwAnRUFnWC8Fuq37VTLpCJ3HcANzhR",
  "key31": "3EVg1V8jLfGwBWZKWctas1QBnFK192ScB4rtFsFPaw2nXbKqj3SXYYgsmvfp7TeMzGA8WVuaLtH5Wrqp9M3mMWo5",
  "key32": "nztCrwPQAqt4qrnuUWhvLTSYp1G6PCQ5D9Pj5qv1PUr6fqqnVpLwP5eMCL8z94gRhnUTRLnwuc7mVK6VyUPTXdV",
  "key33": "2dBxzSC52XzQ44ghHfiZwkJaUb6gYBFosJRGbHKoaDjbaNQiEiuWDQEuU3zqFNyEmWJFkaiERR3SsXXRytETsKjn",
  "key34": "3HefNB8i4i1SMniPB3kMZqYuF9oTJEtofZszYAD981Juz7LxZ8QBT3uoe34rVW1tBTP9wkUuMfK6LfeU3qbDdQWd",
  "key35": "2XGCy5EBRo4x39PVtKkNq4KFmsj2ZzZFNREXpJQcG93cYyXikGanpftKAMV5ZLJ6tde8YXmRNSRvvJzKh5z1AY2e",
  "key36": "55wYnpPk7zGywyMy4Fi2f3zebwtnKzqkQPe8kpaXvPgRPoGmNhe61pvBJUcWXxBBjgVJLyccAmRFAck9SaWceWeo",
  "key37": "4wHsPAA81WXpuxwSKrWjEpgUbd4G6DUGJLp775bozdxXzaNBBtS5qDnqtCcMryZkv9fENRub91VUwLmVMsU4zhdx",
  "key38": "AYWnV7K6fq2HBmcVxM3pKmZP6YQL3rVL99mWHCrWu48PMLSUjPhGTivXfQzks29bbbEjFyRqqzytutxiPjhRnEk",
  "key39": "3TfEn8TSqiitwcQwEqnZNvhFetpTr73N4jvHVDYpWje66xmmAeNGB2RPKNuqpBe87wKdQ9qfSiXjJMGkHYuwSX84",
  "key40": "21W5Nk7Uso35WBfQ6uGajLF6mgmhMsUjwv2EqZsGTkC8e6b945TDSKuNy9y4C57b8TEktqwty5VDev3hfh97FsYW",
  "key41": "2irTyGVtmU5ZhY9z4WdeCZkhdpGDb1DrahZJTgmA2GmNgNEX1GA5DyPTcayW8AzZxpM77QLz5UKJNTV8qSiSKDZf",
  "key42": "2TjmQi3HB7h3tebtUkEuc7QpGmLnJrTnwRzWjM45soiK2YEz9155jNzWYzU5yyDVqxtCMyFCeuXXwQgApyjiEDqH"
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
