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
    "5PaquCjyVh8sAtF3hrvL6KGWrk7eevJaSos6q1pR9ghkkh9CJm4xFxC5k171vsNNWr6ivUDVjCdvUWVjQt7rDnUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hMCHF7p1i7bxYnVAu8zpAEz5DPVvwq9rghYV7xYyrMXWP4dFnfRoovDukkuYov9dA9J5LqicvKz1kvASooB216u",
  "key1": "2x5fjsCo4mWv1QbJFv6gXypDMmYWyj3NNAuBNrAoM7qZA2FuthEhqBtF4XiFu9Wmx1RCiLvYgruDZL1byx2ukDKw",
  "key2": "2ruxx8KKqYXU4ZdsP4mvz8NYt4yT5psdASJLjunT6zh5gBYMqQEd22zNRsuGwMDhkffhSiujt8Mxg6UFD9Z88K2",
  "key3": "3fpgqWvNE98ELWdVEL63nKLFYY4JmFcm6vTT7KFPYR1xMSwMPoCuADPwnBREZAV1rpVQ11hRDJtaxoVVioeAjdBw",
  "key4": "4rHVpBAhU8hVtP8xnnrVpqgVSvrC4BZSkdWk2W1CVK8BBaWxPZ433Ngfjq5GxhFjFLVMrJc5v3tUeQszFxRLQcuQ",
  "key5": "451YLLjN8xZWtKWJ1Qcen9Y2BJPmdWQtBvvby3kD17YgACyiTL1YgLvLiCiRBtqn1o1a4zpm9Zz9A5gDeRYBei6F",
  "key6": "3eZzwk8c9EYtJ4E7oWHJaQrxZfcrxeHTUMpPohbj7xoqcHPsPFeASMySxprYYuCuXXNFU6425XGz97M2nLX3eRxF",
  "key7": "38seQ2m8EPdkFoeKVnAZhBfmu2f6mZeWufV71dWcGnu5KwkAKdhXLTf7y5cHhen38P9mhdea93cQ6Nu9KK92yTXo",
  "key8": "5Vce7EGviBBAhYbxerzzedLa1JgjbkGi6ByGjiHUigwPaQickeeCCEcjpTMPndXXNpQ8xBcjhc1ritNVkjTvyf7g",
  "key9": "5DoKMoSmqqoRLinPkN36gEwTgXEJcrxBiKXQfZiQKRbdUyJ2icEmnDJzG4v1L3LFuzKf6cwu5EfC9RbX5Ytfcq3h",
  "key10": "2c1P3Y6eWnSEfRNSNwTMBwCQ2ghqPpKN8jcx8KpxqvmtPYrXneGqNELEYLFhiQrdYN7ygwNSjmWU9fJ7GDSAMcj1",
  "key11": "ytdS2GujmqqFGNg7eiEmcjGp4DnjoXfFxw5WUg6A8HeqYfpMSKL3oCuAMXU4P3cEptunAqWJmE2cet7WetFoJPj",
  "key12": "4zKV2GXcBBFpRNjTkDkeHD9orJTxbUW5WNW12Xz42zgG8s4tpMK28yMXs6oQ2x8kqhumDQjSWNqz6izAFWJzw61q",
  "key13": "5mH3bhPF1jFzfPtpbBDCDnxF5zp9XsAG7TBDuF1UUwDvuQgeX4vTDfZUCsjW8rB47d4xu7fppDcy9LvYKhsEvRWJ",
  "key14": "525bPTrZ8Lf7B4SfL9W26H7ZNkWkFD4uGahvb5bkEkSLVMxphhTiNthF245ECX4ZdaTdAiUyg7TAjwN6NQ8PqKaX",
  "key15": "3TA8vVF9HGjha4y4J8wFhSjVMb3ks8VpKHejtfjoGSReP2BXp9DsWfjogqfzBKDfkbw1TBcSFm6fN3XwU8EunbeY",
  "key16": "8tGXCccHpqgF3Yj7gqw631RoakJTWC6Wezq2XxNHEfcHb797RjEhw74wvTrhGE1cGEYUxE8vcg3jfadYScPyRMu",
  "key17": "oK7MfhpDky5T8EVzqDBvo8fhjz2LSZDt431564GJYEZBaZuNMw2Tgps9JP8nfLJGHEayZ2G2yk3q2L2nt7AWaK2",
  "key18": "4RqeUPP7NQAGt3YrHijnVMa6sfmwCn7UJZz2VPBz9C3RZiHb6aqdSz3N3teetphLRGPBQhNJHj6FuQJQoscxsj6H",
  "key19": "5VPDrEt8c2HX7rt7obXd9YwvBn8chMj6ryBHNpCY8jFsJEgBS8KmSLcfLuMwUoKooL6uEQd6zos51cx9kpijztXS",
  "key20": "4dkdXbgbmT9gjTw43hbQ8tdevBShQY6Hb33sn7NVyjBAnQShkugGCaejg6UughMJweW8zEJ4WzCXwTdv8vjEt5Ja",
  "key21": "5Kw3MV91UuHAs7RxRQrQvKpSFJ3kDUEtEnyMndhHR8NR6Pte47U978QGrJjryruLrs4mJW5SRgSPDSLYnXRReAPy",
  "key22": "6C39nGVLagYZio3EMoocgqGRgkWwN5bf6svTSEyubgCVEwWWayjpUyaHtVZQkoKz9PfYrq41kRH5HqNByxNvuHa",
  "key23": "5SoWhQK9XPgzsfexPbin7NbNbDB7bmX3ijGq7QNrzt9Czz8e9QBMUbMzPHCSD1Md1CCZCh8G89pmMzANf4rgqUn1",
  "key24": "5EZxrAzTwbuZg24mjHkHTN5mocxb3YowdMiiZHLMahmT8Cz6YzdUg8rw7VdQrhxAWQ2xHchVMPLRLoxJrdprXW8G",
  "key25": "5hBVCQrv6wmRxM6o5ncEVtxoXfSDQ4Argqn8VHidCYbWXvMGvZHxwy1bCd9CZ8nkvCV11gCQyTnbQxDXsFmmdQc7",
  "key26": "hzsgpnxn7W7wNmAU5MGmJy6cZx13NprjMrhyXVZAPnC9ohCpTLfcJ4yUs6HFLHTLXMKaCwXvepFzTUmBotZEoMc",
  "key27": "4pcQkg9byQ9vYaqoXJrjTbHjqKRHUaxPdij5JHZjyVCXQcvr8AXQAg3vtXVjQv1tRVfx4kLCMvTsHHb2VuP8LkpA",
  "key28": "5XakArGnAdoQwRrMgQPBJ4WbFQ3p5XaHaqCsagG25GPnjcueapcfexxNhHapBWUTehdRZhiCUzzc3VtupzKKgQfy",
  "key29": "362goNjt1UDsmZrLnQSLX3vbRpfVghG7V5aLGFP4s2Q6KeXAp9Wo18FGWR6KxH7zMLRmDHrygqNLF4YdwKqGR18k",
  "key30": "4fmVBxuRAVpMif6TCCtakcswEJiFXFULnXjxHJmEFiBpwUe9wGaaDfDi3sURwaFM7DVr6jNWj2eB4z4mZQ8FMnZ4",
  "key31": "2gtRsXcxaDUCAYGKSjgkLoYsQXK18Udpg8NvkfaY9DNw15ZfLqMd2swJCHt5pbKpFy7Whd3C3aXCjtWk8sUBL1jN",
  "key32": "4J7SAbnkpndHWR5CF11xp6pJWtcX2tvNqHy6HAUN5WN5cfheQq3p8nXCdTPxp9dMjMyoGUCFicsWXQgtRLfTRMKe",
  "key33": "5RKcW7i4Qpo5P3xaffVFh99vfwFj5LsAX2C87N6i3Z1jX5roJwBav4tzeNrYXUdvD1TXLMev1aVU7G2xKwBwtgY5",
  "key34": "GxygtKcwToDkzsFPRBekzyu9Bjrufe6AVic9sF8yzMGt6ATTxRMhsUH2RGGYfKef7tmidEx7TqPkc3wJDCZyUdC",
  "key35": "2UFRBYzz6XyQH7g5eADdjMLfeF2yoYn47S58Ne5iJQ8gkksgWi1J5zFHjYHSdysinkEnw62zRx9oNFikNyxyEF5q"
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
