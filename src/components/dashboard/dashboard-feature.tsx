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
    "3esmqB9imWTaZq7Wv2fUEV5XEnKMBngnkkvdoFJ1Wjgz631T2KMLdMApQ8tAbs1pryp83dpE3fB4SQnnoYrc1Qxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VkiUNZ6FtyZM64gmoUQz4RFx93MeafmrvcDyzKSRvLnTnuj6N3PRW5rkqXzBVpAZohsvtmVj2AbaKR57sZ2VcDB",
  "key1": "3HwW8rH8bHZGkUfuy91EyU1jgG7vU2g5smK11fgnacbP59ZEp82ex4Pqudp7bqZ821pbo5ZHZUNa6DmiUeztyLjB",
  "key2": "RSRnnstFgF16hg7ERri3oKMWUMA2rESyJSkLGrjgqyucfm8gNwmprEnciiHBBqXghL3bgeuPEmBZhnJCjWsy91z",
  "key3": "3DHmJQptFDmBUGbu6sgbvaybhbyszEoKsrZESkVWY8Hz7UbCBG2SUhgeXGPhfQXNvaq4HgggddhssB5tNQdzZibc",
  "key4": "52qvRbZewYFTDWs98JaCbc69d8xktSPXwibJMCvXhn8LLQDLBjQNJ9o6gXgwNitEWDk4Zb83sPmaCTske58XAuaz",
  "key5": "haUnByP9Low3DdH7xVYzphgNGE8rCzdFBqcLpjpDSkMDV11X2xYx3Ep3dwjhB9imQwoobZNgqxLoaH4D6WQJiHa",
  "key6": "2NcSqFnMErovRYG1xrFgZbyCa3XcgCgUTYNLM1fYCD9LpizvH1JmqpdYGVAYYr2DAwhohM9bhtmtc99q4qaW45a3",
  "key7": "4d7ad19N9aE5CsZVunutZuCMuqEgpnkhZhMBZnvrtfwqwzEowDhaPChi62g3fdvXg5ihj8WWxKvB394q6kPZhRVZ",
  "key8": "4ReepUWvaV9Pbc4WANChn4qR7SEqpVBwm6dECW3aAWKFMA43Uqga3TuRzteQACPQSYk66g648J58LD3FQe4R8LXy",
  "key9": "3XViaDx4T8frXUSSMxp6HBqD9rxuyrp32Dd5VcEFSRu1bDv5rJjsZWZViUukJUoXSo6LUuvhZ5n7nonNq5b2ZB5u",
  "key10": "5Hn6vVCvs9DyHeatoWnBAtUznsTQCefbjZJkc5RsZC2JA4ExGeYzwiiEFcZPREujAkZda31CXKG1duA63YZzTjEd",
  "key11": "4B2k4KSRpCCWfpSTBbggyvJ8RHaccMD9qSMYbdMwSe1kErsZf5kZPnqvLRN4akqtATsQA89Z2By7i2QzuC4sHfPk",
  "key12": "2xvtx1inmpYBH1hzAPL1sHxgroNXdmEmXdUYu7i51wJR4QcpXJPrQdHA9H44XLtbvt5B6A9berwgqp6irvYabiNq",
  "key13": "4SoWaX1bGxsoUKGEeEmd3yH6zWt3smG7oDSrQ43LpXuvfmuW8djLq5LQfZ4FoYDAQU9oQmG5xShohujRcJs6ZjRg",
  "key14": "5cgamn2viiNP1BsNme2tDBdW567Kc4Mr9n3eReSvY5koGtSpiBdVwhEe4MtwBNRJLJzwq8DK3Fh8GWvWmrUfwc6a",
  "key15": "SgiVkXBgWCZf2ER8iPeuneFggGhXudye5HW3MKEyJvW1u6X5u8wCHkGPD4owsfTDYnfuHwyP8mbABy6KFUig8VQ",
  "key16": "3Mz5fsco2PF5ZRD6Sn7HiFzn73a5ezVFsNQRSPKcTBq85EKVcG6exdc7MUF2s7uKEzWAzokLVzHmZyGz42MYQZa9",
  "key17": "ogAykaaLnUgZVJMxHWQWWLjqfeKk2MAU5tKyznQjV7D51z3wpHMRr8DuQqXt6wUaA3zBN3ReU1KSKKXUR41vvE2",
  "key18": "5TQWwFUznivgh1wdvny9uMag13cum51S7SbJVJLQdkNayLyaaiobBeC64HRqjNhMUGTXny5YXJkq4UVBYpAc51y6",
  "key19": "5Eq3DmsiZpa6fczCCDA5Ja4EphpcNAJ26r1DXRxnGEmLFuvMyAGrzbPLGWEUQBR5MhfRaDoSZks2LpcBrWwoegv3",
  "key20": "WnQ7UvmRmTo5kbMJi82PSVd2MXiCd9fc3qiQ5xd2vsULCiktvFSh7iMHt35eAecHNsb7Fm6Pe24y5RL4R5R6Rch",
  "key21": "3w8BRxLxajyYCwHaxCrwKaBc8PeK7wPmgLE8DQZXFbGTjxbMW3nBGDBS3qF5mo7t4BoRuDtSGbrmVCBTweNedwXS",
  "key22": "4FKgBgFmiCELMh7eWhCRPaC3KKiQU92Qv9h2dUhEn4P1nRpbHQ8v6KteScUkTMqe7X9K1rRKv7CfunahQ3WtiqDd",
  "key23": "jXMvy2hiCMcpwQfg9jRRKZBNeMXzJBsRaSN5ogc8y2xA2ETXtodsQpsFryFjbere9sqAHgGfzWRd923fXBZLQQn",
  "key24": "4VaaiXrAdYP7zh5pLm3zCRLhRZLFt95qDSyjV4YD9cK2xAdSJLYKebPesd4HyqEmdJ31wDYc76ebwsf6i2hA93PC",
  "key25": "57sbXxpRSuQEqK7CXD5Zzg9hMMNatzTpkPSWVrPePXztpFMys7bTVYS9fLDnGiDS6N4JWd7jfrRfBce8TJm7kQmx",
  "key26": "65QfWE36GmV9zehhAA27BHCF2JbYNRvkKLkv85jGqZf9jVjhBX7nk8DfP4hXLBaGr1jT9GVzngb49Xpodn6PjDM4",
  "key27": "2gn2wrdJvK4jGNZ3sSjnGTHUYLCmN9JPSj8EK3y8tL3tJAzzD3mGARDJ2DX8ze6U19YbHenEwCG3u3x99ceRLTJY",
  "key28": "a6tx1V5AyYzqcLJnqTZVyrtz6zu2GKevg1gmnoHryVehmj1LHxzM1MJVw3fyTrVbEswvVwTwwALFiXADX9KAuqp",
  "key29": "4ZrCE8r4RUWBy7BVXEwvyNyPLdqAJxBaUhDxiXF9zP4YJ3H4r5tVffVM4EbTJWjQGTdAzix6ZyHDSoaT5KX2qVTW",
  "key30": "4G4DSwDAmTtkKfjZj8VJVRMZ711ibGdHZqZaR3Ej7LGTmf8RTc5JGgsNFcZTtJaiXpnr7HQXtaq7PYdmcKs8BU3n",
  "key31": "129zzYFcAF69aNmFAiy4SGTDBza69e7bJZNt3yG4YNbzDhbX5BH4KaidcdEePKMWW5oqHrAoAUZ9jv5Z9QqB9r8B",
  "key32": "2Qis1WEQd7N1JUTEBX4Lnku14umBLd29pqNPd3ND2mj9D8AfYGCNdCWDU9ogRyiWgbmixQSsiSSRw4xKFXjsjb3i",
  "key33": "2jevRquxJdT2GQ9eAGfTCFCr3RpKARB5ZSJeDA1d86RPdfpJ7wQAfkdS6Fz5J71WV6zf1HEZ5szRF1KEQTPMP3TS",
  "key34": "F6AUwH5vebWL4CXEsTW3VMFqpTEgzwGCi8Yty43u38Akwtfjf9SppMXpfenRgFF67ZQYPv73b39FqemCRYR5mTJ"
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
