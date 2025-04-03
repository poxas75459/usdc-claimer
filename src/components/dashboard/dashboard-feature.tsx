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
    "AKyXNwqBuwpyAaoZsu6wzKnDFiBhtiAmzafHiMz8s9EsYWKTcCa21c62r4Cvtsa5hLgKEa1eaJZvvaktVChg6Hh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UFgws3WozyLauFozJBd2ByF6qtVjS1EMGUoCH5H9DYqHyCpogQeJoYWqAsmBSKiBKQKQnzA8TyqrnnzLXL13CsA",
  "key1": "4iqpq2GBA9qMpucsSFGgRFMmxR3rceRTGvNyLW3XC5551aZuHHR8n3Z6scRdrvc5RNChvnSfpgwrGrkM3NKa5J6w",
  "key2": "3wdsZJLG1QZin1Zw3r4oVjb5KrAcqkQHhX9gUxXZsDgG78MDURy31p1ro2Vgt4YaWcP6xjTFvWDzVWHU1ArSGMSf",
  "key3": "4uPQY1UYMqb1KVRUovcKhLPMvT3r7nubkp41sWg1oh2td2RR4RircjL8nsVoio366qJd3hnMtgDEXxukB7gwSSo5",
  "key4": "5qoygdAy624Caz8CPkD91tCRPMk9dtDCgyXZ6dw6uMkn3G91bn1YEPH4aGDwBzwz92JFHPpMSTjLdHuESgwPSoLD",
  "key5": "4n96oWo24eQSJZhh9Bw2zgaMBYjAayHFMFVbMaDgJXwirFtrN78zN9pB5KADsBMm68bDgTM45qqtU8ikZqVEw9gw",
  "key6": "4AuzDJRkG4FwYdffNsJUVKyk6wpDfPo5FxTLDdNrGANSBRkcWCMP7C7GUNqp6aLkRvkh8FV5UiW34TNKkmcT6NUA",
  "key7": "2z8gjZBgCv9N6mmCubcLUDB8sNjausYMNundgQ9dVz8cU1YXjGPZyJdZB6Rsh7i3sZihcs7erhncVfAooxSuSMfA",
  "key8": "3p8P1EL13yjjLD4QzeabEh187r7P9ov9m5NhZgbyNPPWWg1LceD5bq3Pr7Z9DNqmuibYkLSjaVBMsGN2W8NVpgRy",
  "key9": "ZwddrahvBDKPAUfNB1xgkDpnAJDRGAr8gWosWL5jL8dSsz5pdHCQCokbhhhgogXcx7yeYM2FgP3rdxo8DgWeNGp",
  "key10": "2TQg8NcK1JzHSDkc3BceUdvNtcGZsyTmWs2QV7NdKH9aja4enqh4UhoYqvKemixexcwpHCBmuwEvbeAummrTPs6A",
  "key11": "3NgHD4G1w6GHXYskCb14CqxSpY3Q1yWRgkQ3pRjqbWoYh7wq6pWFmhxjwNKTcLTkfDBksYepKWBcdeHYF4L2aP3",
  "key12": "4HqjKKgwe8dA9C5eSKoaJzfxBkeyvw1vafkgGNrsrsVrByTZnK7GvXNGxqntRV1nzRSWy382Xp9BFsGqzqT5Pm3V",
  "key13": "3THNwi9wnyKmvEKryhnsMZbHWNAHSCbvBAfuLmn4SySfm1iyTuJfTLnhZK55etdjwaVeUGrVKTgb3zc1SwRdK5X5",
  "key14": "2irEa3hxpvUSVpk4vLiJMisCeEBANS3Q59LXy22gvHKtzJjChSKiANeeuVCk7yFrrB8mHimPfAKcw66mogJMJmQB",
  "key15": "rA4VFw8aNjiPt3tr84w4eZrsrGLvqMbQgfJTtcsm5eEPvHSnxz4VyaGGFEAZV2n3ZJn5dTJ34Y5GSM2WMz4k8H9",
  "key16": "3JRwaf5Cy9wpMmG6A29X6HZmRZGvUmEB8wZoxf9oFgY5XytBkHv5tSUTDLZjsorxPCuYdezTxryXRpzWFReqEvtf",
  "key17": "3kZ5LpeeSENdRzFfbcfEAacbfKnWFTUaXVpEfRa2Vbgjx14PCczEcVWcfQsWa9Vvf6t8NqdhYN5GeMpRpPFNiV1F",
  "key18": "5VFMkHEd5zdVF2DKZZ3kfDdQgmrBcTZG4dLqGXqyz69TLcPdFhiybHqe6WeuQ7qV2Ag3hMjke65mKqfbN1JUpZ44",
  "key19": "58XNMXgRRUiVBvyQ4DbjmoUMe4XJYfUCdwPjxTg3ffKCPMaM6NXrjdcsutCvYTxw22UsAQHpaLMA4MKqosM4B2Fr",
  "key20": "3BxxFMPmNS3J9GzveT8FnDJSXVChJ1dzBgbAxHD9CuTxB65ZUvjUH7vab9bks14JhVpB9jwhVBMJZ8rvHBNSDXJH",
  "key21": "4RRjr5b9VnbWwgYWPMKKP9f3LLAW9AShP6PYmFvaoEDAon8mXH7YYbFEXcKHuc2dGnnKK8P2YAR7Me2Qv9fpff4m",
  "key22": "2VvriynoWg8pfkakVyHcBdLdSeYEvfqZNzCKYCSxu49HZhHWGuhpMfhjeDqzGEnc72VWUhMR8U95JDwFv3MJ2o9i",
  "key23": "2LeNLYL3TyCWewHCFqyJsKVbutFvFWq1Q8t6ATeVvoW28KmobJuPopPZnyhCQctrZTUiEVHYyMeHnhRwqn4j5P2x",
  "key24": "4zCTnDC1KM6KEZwSaPDKydzEtqa7MN91BFoNbX8x1Xnc8RxMWdKKQjca7LzXeAbPjaRwJSRYGWYfKtR7MyB3aW7y",
  "key25": "d73JaQ8BezxXqpVGERgTgmD8gfJCnrHPSs68AbKSpgWfCcWnWXRv4nEGD6ps56qqyiyZ3eiJxreqPpW99FC1uC4",
  "key26": "5HY1aJYMns6JDMLZ3KuqFkgRjYieaRgjMCSH6KN8edPXavw6CGq3x7wC4tLkdqPy8vqfQSqFA8hK9tdEfrFQn1Hx",
  "key27": "Jw6TPGQJqUv33oZsGMHqdbTsH15jiegeb758d9KYsWyTpsoy2iAKvF5MGHhEr5A5yMADvE46iAdMt5h9GD2RnJq",
  "key28": "122tKiSRgTzc6ka7KzxM2Rov64KfKmyJj9Kn784AY5uKcUBKNUbCCzZXJp4EJf6bbxGhi6xh5mj9YbuNvp8rCEeS",
  "key29": "3qjokEnRoKJdwgRianWEJjUgYR4wGXXvWDYftKR3wXzhPxzcCAh9D1GpTWuaPudnxTcGRPrdH2mW2WL254FQNuFe",
  "key30": "5sJMg1ygcjSPVP978Ez7E2CyfyYKj87KHnvtKYJ8XV3qB6LL5fy8Gbh1L6c3gnbwGLwsNL6JwtFViMwTMzegde7e",
  "key31": "2r7VNCmohXKrrEqB5mNBZg9MLvMBb3WyJGHUXnCUJmsHf55xmdmH2DDMJgpHQxnFmSPzBN5V7rcVDabHseVNvmV3",
  "key32": "coq9yTELqnMgmN6PaeaBvEZthZeTmicovAYz1Px8pfbV3UVZzyL3wmRjStDYn6Kv9TuSfqhyd37G7dmmuAmYpzg",
  "key33": "29GHPkrri261gKpFg45eLogpTajoXJ71o8hLM2urLVjpRAxjxKbF17vCtvarJ5DcecKeL1Mnt7PV5gwU4QSfE51w",
  "key34": "Uc1NY6J4pBfoym5N6mZPEQtVAAwwGZpkPT5Rkii4UKVkNH3NiKXaVN8HTXWfGB3v4HzaiTwQXe2fy5yGZsKkN4z",
  "key35": "4BeyU2cKZSp1wVLxoFRPC75cozRAJKvFsaJXoc41SKbgnzMGqiAfZvP5j4aeEU3cuc7ZuL8d1JrU8R6h8xYaecpX",
  "key36": "43genYf1b4CE8Uy2P939pySqv7zq1nYq9L9MzT9EzhCa5UL5YCL5738PRpJtBAZ1vzc4xoGMeSXwBXdo43u1iobQ",
  "key37": "6666vQzBVs91BhPLFs5LKXYiU3C7y66ShVJNNV9FoycGBDnhQ5A7Jhr7NPzFg1VCUBEVgpdA6hsjH7baRtLKhVXK",
  "key38": "462Yu68DhRgK5je1T88NktzzFuKaXxY6KRCVq6jgx2m2r7DNicJmTd7WPNNiqEQUCFhKPaz8Q17D5X8NAYRpVQF1",
  "key39": "2Lgx2qve9dt7wAKoGfB7PcJuf8uxChwLV312oyFbSQuEsvdrfqSvRPzqLwLVs6vaSkomoUbziWBintba5AqkWTJA",
  "key40": "42bSuzj2r57T6it63R5qnbZVLMYLPZHumiTQcYxrJV97D1Uz7u1ztqGhUrWRArfH6kr69MsK7mJzzqA5BhaMzMKR",
  "key41": "DB2H4J1acjxZV9PXa92Zc6dzXdLQQ2VStWjqnSJ8K9rfaRnZn6UHrFN7CYMZFeBVNmrDbkWSthNXaH76s4Eu9d1",
  "key42": "4BkKZwbJntQdRhGM7YXWLX3cAwvBa3UQRLgKCVjWUpsrjhxQ9R3d9kyGSg62A2EL9gKR9VeexbrbfZJSk7u5Ptr6",
  "key43": "21NdW1LDVGx9i4M15bfjTxtRrQ7mzJoFzKtXvUKT1CapQSFBN58stNuk5cudL93wAj9Y3op45k1T6qXvoHYxxH6J",
  "key44": "BcoWGwi44Xe3T8jiCHmWtn3spGy4o8HJefFLVCKqMJxpL8HnizD2DFsL8sh2jJ9qeRiXGcrpTRzSn8Nf5f81WNx",
  "key45": "4ceZEBzjLpg2KSwnkKXubLYCDfKFBGizGp5WTox61594S7KHfoTKRgdfunjcTSHywbpuuZEpJndhk22wB189whaT",
  "key46": "5B5QFcN7aaTpX6ZB5B7W1CDV2NzgjwXQZhfay1Wdbv3LihcSZYcZo7kQyXNozFrvvQNgFQxZNS9sr6TwDY8qspsx",
  "key47": "27h4pELZYe2gijzSebv12jRmxkPrx2tVrRKXGD2yQZo8wnJw1PN18M2rGTEHkdbsJ3D5dUB6pbn2qgNNA8JKJ91a",
  "key48": "41vP4NLBKq3yFmHwKKpLhq8ba4gS2maRFrCWKgyd7eiijPraFPqsbdnwHTCkq9H4LhXXSpAYMJd6MfFqM7nRraiB",
  "key49": "2DGD9y88vEhQbiFFuZc5wtbu63movEZwp13dMjB1NWTPAGXNRVUCpzZksuN6n3kXMasz5HGVwKXMNNsKenwFpR7a"
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
