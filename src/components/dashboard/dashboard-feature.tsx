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
    "4FcvggBBwEzgDvvDN2qKgCdEd9YwjuJ7RATkeuLRHvxy7Y1yk5TFTsNYtfYtxt5yayUxnjc3cSyMbk3v34ZhtJV1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A47kppueZxmDN6QvDjYQnK882hvjSyPTxABodLh7EBb9Y1RMpQLzk1RCDnzAGqJN6CKVbBqAArUyL17kJ5xHTmA",
  "key1": "4TZEKRj988J8g5NsDZZbF1eSDeBSUwqFJwtoaJWnH2dMoYr3oUqQGepkpy42QoF5FhXQ6GxDXNd5S2PkrUiXBYQN",
  "key2": "2CYnimkjHJ5M238UEyCJPj5aVMUcVwX1wZHJ6Pq4CyUGb8wuhRTqt6tC4M4HEkT6xxDr2P9PQmBYp7kuDZBqXXf7",
  "key3": "4n3unFuMGNgVWiLM5BQ1NBjESW7htoMc46NS98ibof9W9nqUGWecXjqGhLYuV9522d6dn76s7hYeaD9kJrTdrKLJ",
  "key4": "3sa5HBx4QyEje91azuQjkVwTXR1zf3UEc2AEMwiTe6QcG9Y7PDATNxAsdyNEXwg3QSPRT52TxDdYJQ1uQ47VcNeV",
  "key5": "3e2Xs4M3JZ5jfPHKo6vwy8F5GAApNfedwLiqGjsY7j22yDrUQn1udfcCGtJphBJM8L7rUkizCdDd7dF6nVBPhqiN",
  "key6": "4MddBH9PMpwfj9UU4dcu7DGYNS3tYf4YM4SmN5H16daRAtYy4NyCYqRzXBKRczDW4ZsuDDuR5nm8EDR3HEj1xrZd",
  "key7": "45Z6ti42ZoWQjNq8hPZBA6hnCTkQPx5biRUyYsSGpbuhSVWJ8ZAB7s22Nnr5i5jBoM25VZWt6ts6jPYN8szneokA",
  "key8": "43f2UpotNZAAtU3SnYhDyaRzQVn27p6RfrnjpAwHtxjEApFPcHTVtep8PcJfhEdR5TjBEDACcRZ83KeTPm1f3iQ9",
  "key9": "4YhP9gYsJcUDGUJABW16QfdHnYEpRuFsrvKgnnv1eAXzbzuPdo22U4AaoQH4TKigxFDuUeRWRG2ZxsBeQbu8a5Hy",
  "key10": "JqvZVvNEYQ14Fr3ys25TKjHCBN7L93vu8oDw2zSUqdBKvTAH37o6FNUeNbVQFSWbMPm1F9WQetkK62817mZ4SGg",
  "key11": "5hJcmNKuVcEaLbjC1rAbzByoCt5QQyQqySwXYThNgDvnU9PVRu1PpHhYcAVmq5GfWYAjN1Tq94AtgFqc6bFWBwxz",
  "key12": "5BRrgea5qF822d1QMTXN6rfAJ69FKVzkAHQTQzaKzfb9uKA7vdUhk2pqe5xwM6v1ZjtBkmJabYcZo387CgtQZbXD",
  "key13": "5vkduqwsQamNsE4Wc1UGc4qQpmv49JyYG5FfD9WCDWs52VaymLdT6TFuw4ZefSLKnDbesbNZGUtQLqgmiLVjrCk5",
  "key14": "4S5adXHue6ydkdnEWUV7wexsMLNJbbpMBsRLoerarxVfYzBefdsjVWfZcZxGYaFwTdxkAfDpBLxV2ZtJuEPCGm49",
  "key15": "2W2AxQMyCdfayQ1k2Kkex9DkB4FQjBEGvhizFfihGosbA4bjbShR4VeQg2ijYqTbdfcJrizhPM9pDo7G4KanwLrn",
  "key16": "gXohvghETiUnh9Fcz1nQvzM5cbDq2Cw79v887t6hV3oumai1prBhXVq9JrYaLUoLDBH8Cwpwb5KNcLJSAju53rR",
  "key17": "5DsuiRZGubszxwV4cTvNUih1tqaFDgDdFdFErrsonDuA1M2QfimiAnmtEoiXNYGnLajEfmFTVZPrQPGpoA8vraKD",
  "key18": "5on6aiw4aHgXiSGA7B2xvMQsYkYQzrFEUPTzMGKXv4kfGX5gx8RmpRC78yYCQknXB6MiVS7irmxYUXW5p3uhtds4",
  "key19": "3KWSQ2scVWodAR8LZUcVPWU6zGs2uKbHB9NtEeJNvrGuse7jCdrkcfH59SmF93TLbiDFiYCsDzSoGmkE2SFbCbsr",
  "key20": "2J4ZYF1neRWa2FzfTNUuNfELojinRF5YR1xJ4Qvu3tLSmEf4HRuF4oukaytQBNTZ98JvAxPoAN4weS2qpYr24fZj",
  "key21": "5JPGwBg5UCMH84URG2bZKbcdMtxzZ8vHAcHSyPzDrBBmTebcxzCKx3XoJDGt6b8nWxENHZ5Q1CkpRSc1Ukm383T7",
  "key22": "3cC1fuNLCZXsX3Zbw7M6zeYUqHF5Rhvb8Wc1DmF3Ec2gXgkL4zbzsSvUFUZWVmtTsqkSLp47V4jYWQ4d3zcQgrKN",
  "key23": "1sSw54LBPm2GxcfXrHcWJMPJTKFW1vrDBegwguULHhFQz5TSfSekQRbvrY6xuwYjLsah7gRRcnA9wTFp1qZB1dB",
  "key24": "5JyGibDWK3NnFNAgwrpH8wtk79Av5192MYsLMMpAEaEeBt3X8891s8A92zSUVvuSvQiDEkDjCgzGqsE7DbS1uecb",
  "key25": "2F2ApzU4iv1fDA2yvfrPgQYp6eXGAavDEvnVgwXmDe7sDf6pz3hnvMVMfdQkFdheReFt5eiiU45af6GuM4zWFkgS",
  "key26": "38QP1tcyiss78Jhv5nYcb6JpYZSn9AFAM3hdTkCtdzBeKicjoNvx9Qsv3TgWyX5STbh4TEeao5AwbhcmVMMGvKHH",
  "key27": "vB7xiEUMTLu6rJQ5hkVBFcSZo3ivnwg9Uz2x6KXh2kKwS1p61JXgAZRk85V59ZR2TwfoGxbC5jdNf72KA9EFr9K",
  "key28": "63cQvXAvEyAH77dDeZi7URhcLpVGdZj9WvmhCPcvP1threJrJHbD5XirvzpWb9DcPLkwy2hY2vngebuNdq4vwrit",
  "key29": "2giA8KPs4XNPQy2TpYEuFcoATGpD1wq9Hn4XxaHXwTULq1rDLV4Ad14iC8w1AhPnAMj6vNPx3fa7rtVL9JZhizBc",
  "key30": "RNYKyPS5twx6qeweiEJGPC5fdYCDyJZEdiX9YGqtbdh6HuDQqyc4muz1ZePCrHxx297yLxQNk8978LBavd3LnVX",
  "key31": "4kjJkamxDxvrb2NsM7Nbvka17AWD6eiSic2H2S3Rtcw2kWhd8xJKfADLpBfrzHD1a2cHUCWurj4RcTS2UZue7eDV",
  "key32": "31gXGKuzBpByjFGRuLEuyiAm4sVAYugLwTQtb1Xx4aNVaFHK2W1nX4qbGmNuUBkMXvfYLKSVSoD8rZDFJ4QyuNom",
  "key33": "iaTKna3ja4wmpQKsktzzmMsBBqzoQmygKRQn6p6CJA21Yj2iTyis5upJTEsBEWmpLdcQccufjmDwxMDSpc8t2iy",
  "key34": "C7Ae31xJyMsWpVSYPEuYU8DcVUFc4Xw1dcRidcRRUpF9Lye4DFuGjwkHjaE1Wd3wK5iiJPesceXW9gvNvESjXC1",
  "key35": "3dnjHUsdxsmfDP8t7ysSGShsKFrEcXzL8An7AZjg9zpbFTEkA3JyFnDYpbuD1E2C5X2GCRNvRTo8jmXzsEa1srmU",
  "key36": "67LGzgbT1htbgTrb8NphbAhf3ydSyK7Hq7vJzXwF32SKtnrMvBxSsrHGUzkUA2T1yktme3R23ZCCZ1ZmmE2dxNvs",
  "key37": "4pcdDgeYBXt1eAJYdhTm2G5FpzLXxBMaksovZk7xS1d3sKhivkaS1zrURVdjpdm3mh3zetzU2NtV31mgU5kvXt2q",
  "key38": "3ZUTT89QAWTTXYsMrUcsSVLBR9CkML4XyRpZA5YqoJ2RiF5b9qdQGRfhyhxHgTaD1nHWM4iRc1ksxsMPx8Tz7ZU4",
  "key39": "5FA2ia6Sbtn4h9h68eUDRAmRrEkpr4mn73Av6ZKZc4iLgaLpXicVQT2pELhCaTZn5C4CAWRKJx8aEkHTKVXgHiWJ",
  "key40": "5V3Z9bHrFSzNp5P1BLak8F9pN2vfsgYoh4nAZbdDPw6DYE4P6BMpWyakirzFLFRp5YD35KLmoAAWoXzic2DAZqF8",
  "key41": "W8PbmiEreZqn9XwSX7iLKvAAJdQR2UU4r7XhyyVoG6955dqtz3YKYAwxtmMwcdeXsbr4PGSEHTPRhA5XREUqiyh",
  "key42": "2sCTCtJvZPrngjwrFSZDfnoaMpQAt8RVvVUaqGjiiRpd6bPeCZQhfiPBDzDk2CTvSnsdvLjrq6U6NXNamGfci44j",
  "key43": "5bBvYESXTh4mMwhZ2eYisABpyefeQ1xqBDDgiHv8nZUmJQsnnoHJ8nALUYG1adALsGR73x3TCZ1cicJ1wW3jppfK",
  "key44": "ibtpAfzY67qFHbcQTm2kDz7FJ6kTDA7wvp1N3swb6vVVdKDyKP3CbFmnDEeNbZHi31BTMNqkydGKivhAMUbnJ5L",
  "key45": "3WNs8oUQ4yEKBYg6UBXzB3Y7Sy5KhZcP1V3hjAGc7RkFFy8sJQ6TtzuwXyAAjc3MM93GaoQNxnTveN5ajqdJByx"
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
