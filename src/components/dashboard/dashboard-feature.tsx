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
    "5zswsSWUKu2Q7iftB5hzkDmTSijpWgiixgH5Fvg25vAnShxTMkfeQ5Na1tYVQQkUxKqQpQm39gM7Ws56jjTrQbzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G2oHqz57fgcH95g9PfEQo49asAeYmtzy6AAghhJzqKNNnN9VkLfSjTajJufovJSbj1qJYcfrfEeiUVyZfjXA6ZP",
  "key1": "3VFXJBQgeE7zdTpGhn87PudaU16buqt15u3veYk7ooUSasqsw1u95W9Esv4NKTNdMmrQSuoEyL8WjN1Px4tMeEKz",
  "key2": "2MwiYYSRdpnYF1rMV29nVFLt1q9SMLxNi7GHAou6wDUU5ez4YgrpJ2vviPak9axoqTxwHfeGAV4hmUsNTpmLW2eY",
  "key3": "2WQryPaQ3ex8XJwajSkzYkB4VCmDCUjkUFutWmB5PSdrKZAoYDeSsFEhrRkm4GuAb2NNxUxub8vPxFMXDo6qurL2",
  "key4": "2zYb4iQN9nbTT1mAZFwZQks3JcbDmTUFMHqj9XFKiYFHvMpexHcx9Xc6t1r9rnNUK6mgFii2WYWYqUvuh7wpc6bD",
  "key5": "2kGnmwLP9bXo6GctYr2pNHcvfqn4PGLMuT6Gu9oxfTwEiTWbmtSAtnpaxUsWVouX6mtNquziSZvPrKdgFGuqJmb1",
  "key6": "5CjBAQkiQrHqSZ54PozC63NSqcXPxvKLXVwTextSd55Bt8zFMJdBqBiSBC2TEoqUbsbpXGF3SGakHDkaMugFtEhM",
  "key7": "2fVHE5qxrPRJ4Cmsb95sumpRN5Z3gPyt1TVTza9kiRiQ8WYVSgMnaXgwUYSTN1FfwPJAzc4MYzFjZZe3hqBD72zE",
  "key8": "x5QYzWJVyGHdzWC8TgyWVKqCtYAVx55zUtq9Z2VDAkDMJ9vTqr2bGXQvC7jzpEdN4tzrDE4a6mV8gqxGcCY1eNR",
  "key9": "2xKDkQfPGUY2hKPRSK1p6vMu2fk5oMk2v4uebkq676nSzjeFXYw3wopuT6XS2noPM3ad32NLjNjkqq73hGptSfuz",
  "key10": "5tB88a1r1M3hRLoQPZ2NYR1nQtB9hnHNssmn59jbwttfchTcqz7hkNPUcoaz9r3YM1yf7P753iW853tNk8WZJGEJ",
  "key11": "mXnmNvfb2hQa4Fmg6uttmuPSJnc8R5Yuv256YHr6XDVYhVznPnY6hj2ajxrV4eeago1jV77ZSJRRFiXVvAMjZin",
  "key12": "3o4x6EEPps44JrNfBk21SKzzNYP6q4iiL2wfMroWvr1ExuDqtKvCaj71wbtB68hu7vxppgQpaRjSb3x8zATkNTDd",
  "key13": "2wgQZN28Nsen6FSzQ4L8PUmqektG4CDnFDgYXFw7r9VYfAopp136T6rUALpEhZkwTioMskod3Dh48sxeYGgJAUk8",
  "key14": "2WW7CZnNxHG7toZcSQys2kScy5F2L111ZP9Cbe13Sz95m2KFSnqUNGm6N5jZ57Sdpnwc6kHNTU1XxBSZr1ak4jbE",
  "key15": "BweLAvqsti6zzL6wMTxQFYbDJpGEzAB7D47PN8S4pbUpdYgNuYeWYLhyPb9WhpkZSamRrCy6dCPKAiYwzAJdnNs",
  "key16": "2ctpHXwT5EwKN7SWdkyxjoF8yMFByHJbotQpkikjkhHfu6PY5w32wgzM2thch5tbkCqfETGCtf7Gv6XfkWncCTuW",
  "key17": "5zJHVHZ4Lxr9JJtVmF5zVZHt4jb6gPj6HtMLrEqBVWo95q5551tKBZDMUQ4CsbbD9rLg3SAeB36agL2T6NsnwPCG",
  "key18": "4ALD4a1sRX9WMiPP3mk3FGsf6ryng382u5qcDcWJaqvaDaEQreuURoefHmcBH18hxARFzq1SjwihhFmz84R3hTxo",
  "key19": "2EwLz4HG6xhKu1DNxWMxxGWRG3zo3mHeXV7VX8tVMpmXRh9i7Wy1Wj1TjjWnREPrL4sy5KADUVMcqYT7k3Xt6QeK",
  "key20": "3SVuKgjMituZUgVu8N3BKaSUtq6WA6q9hn46WaYDr9fj68Q3UtRiZaDfRrPRPYeStJHDQ35ybXCuE9MXVfftmk5f",
  "key21": "5PgqJiSAJ9qtsmHzTMRJSEQai9x2fuao5G4kbVYneYFBvgmWsnSVVJawQMCjYsf4Y4rfeckzgBrXK1M5SDXFbkV7",
  "key22": "3M9G3ZaK2wKRUtSvhWxoMFSPG5r6bmeYqGi2VXmeDyo1iDZPoLj8SjR3PHzzaC1YcspxY2GvDCdnfDRoJdABAo2",
  "key23": "46yHNjsFd9oq3VEPLFCT9FBkBbQqp2umR7aqi22U1Lg2JaV9g7mqSTYiNiGS7X9mva5fSeJ3cqJzqAFYTGAZgNfE",
  "key24": "5ufFdnkoeH4uUY2zfGGf2mmVxKPcoKdQMywcrsLF1ytcpcC2VL1ercoZXtBUbZfpSbFXtwbGYdXyLFQnnNTUcJVw",
  "key25": "zAait9gGTc2j3LtFYUo7CVbwCSSz2PqM4HwGJv7UADJNTwhMxPC1T1ifoY9qoYZa33iZNCYVYHLxfPjoA6y3xd3",
  "key26": "56qCiTX25QKxz58L31Q8tTL5auqCFsVHHh1tcCnvPcicybKQ9ETxD3jHYZpdVR7JMtQo9Tzg5g6hFhAtHVfbPG7V",
  "key27": "5wmfHoj8AgM9aGJ4B7AfAUa1RjTQ888morKQMzeiSxTBefANpN64SgSNHLQ1ddvAePqgk183Rhyjmc2KiDjzEGLz",
  "key28": "4k5kbJfC5DWpr8LniaYmHZ45a7Qgd1XJsuSEZaCSHwA2ZtgiJCM3stxujX3thzRxyGxJYLTb3QQC9yFcmrJBFUhh",
  "key29": "4pQBMzM8Z2GAsYt5EpLcP4V2yrQ5eRqffULgSzghX83rnZLUjgmjsPymApVEKtgKoHgV9jwBhotkvRaAkfQbShZt",
  "key30": "pkZBf1P1x6tifqp5iBAXeNBivxPyHLHdSZSxD8iJZ2pfk77dLXvFp2MwTd63d9Pj4mWQssGqYmxwTGFWAKQFTTM",
  "key31": "2ZAQAtfos9snaMiCrDXsaGeY7SyYDyTftmW12zUemdYVUj4DTp2tTcnKHHri9fmfGugjTm8s3Eqn9Jcd22ZD5PMo",
  "key32": "mbAZsUWKCjoFvEivyCLgZ13LGkcVeVjwe8ZdThW7BBpDyk6dg1Lcw1SPuG7fmLwRgvjvnnxBPwGAegajooJi1pF",
  "key33": "2ofRVgvMpcvYNLHw1b4scwfNQdT2NS9GSefAyQbDTEGXmXyiLMeGTu3ioK4dCzgx6cJ5vFDRmBbcFJwQ17GwfD7Q",
  "key34": "3mcu9x26UxAi5WDAhvRHyrmauPKJaEdUdu2aiJNthfzUfDezPZzqYGER5HDG6RynECPVLH9UhurEiknJLApAvWjP",
  "key35": "4hCYxedLYTFMvaZZVZC5b84GpeKQyNTMM47bE2yTNuWb5X4ob2PgXQqf9D3KF1WYcJyua8AU3yoEiS5zMwwuRpR9"
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
