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
    "54hTcDNLwtHqqjtiRa1FZD6KFadeCCGyvVKPiT9uun3wRw4ZFaHEh8pt6g7Li5UZNogZBHU7SEBc6BTXAYy2P7UW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MuJCaDtohLkNJwVkUukggXCtsQTqVjoGLKPyH9sjASi54rVpfMvNDMZeJ6XXBWvfLW81kx3fN92F6Dv2mtp8J3c",
  "key1": "59srgGbmfDQNWZ5frnCiXMH5jR1tdnjkfZqLeK5CSfaZHP3t2NaYxEWFC77QfjsnVkbKaS9aoMfpZJxK1Nth37nG",
  "key2": "53ECriH6YGtFHjrjNFqjotxniyK4RpgdssmAU3Z8hkfvc65Tu7PeeLAzhLFshTanMpcU8CwfvQJ63Doenyrn7NY6",
  "key3": "3mJN6rC9dBedpdgHUzeHCN9Nv6jLoApNVSX2AY7Q5oty5fbEtiMkQ5obCjYT4ntRmBqxp2XkjYVmBMCUe8TaFA2D",
  "key4": "5yfvVoXn1jEbvnbKsmipw4PxfybRBZwprXkhtPVBfGvbgSJke2FZWeEQAAanK6gdxuH4GgLrUs861EH5o4GpRu6u",
  "key5": "4sy4J5WHgHx4eD9hVWVxeWPrkWTi2GeYJpmRyMCu79aSWZis1cPMF7ecgUmsyu3evH7c5dDRxiAkhu6Kzv8qYVco",
  "key6": "5ZuA6XrE4tiD6jEWGzYSh3daS1rMthviC9R5y5iBg55kK2oCyDgAvKPhfNrttyDEidy84DzxZbt6QfDAXry99gMS",
  "key7": "5tZrYSzY6GpKdz5Tyx6bzvpUXJbmU4TKnXbi8s4DvBjgWqQvLhMjgnVoeNbt2ECzDczsR6h1xMmoVEq5U42g89p4",
  "key8": "4q48pkKqPx713vFsNREJZkW5jGv49vfAvmKHN4kXJucfXhkrYNgS6bKueYGbWvBqC8Q9DGiiTjSWrVzih4Fo5i8Z",
  "key9": "1J8ThX1LDJ7av7FSjFEFHNCMekjBCWxMjg7kMnUZ1o3ixSrWRhtCmwFLnLdsq31QNHcX2USJv9ak9h54ZAWEdHS",
  "key10": "B1MgKMiez36QRoLdgTyXVZQTAGbuAuHzqz6mdxeup4GiRCr82DTrHP6vQ6MMQfFpofdKLToGq1sEpESJv78Yw4F",
  "key11": "3osnppsPbke8Tsixg4CjdoZ7MqzEihxQ9zExP8GaBhKXSAeFfYgdp6wQ6LtuSbb5zMzZqFJAgjPBFNxMoNHkk4Ph",
  "key12": "2ZpvzRPaQ3iZ638sfGdApiGLemFhRj6CZYGJPkCxBaMnJWPTLiT6bPVL9u4wRrAFtGSVeSxvqproZNBe3kgJ8J24",
  "key13": "4etivSqbcSpmdsWZHGxNKVndBxpEfCf8tv94wu5zQ3EZn7fJiTiNB48xLa3DxoA3zgbCV48EohcQHWwzXRUWYzjS",
  "key14": "e5hxr7ezysGbLhUykj6HuWcEK5QFx7G9JHTHh1Hd6NrEbmp1AhKh8uV9efFYQWv1362r5Qe1Qw3s5bjePvY6Zga",
  "key15": "3RjDHHQqw1UDbuBmJ7tRoMMaT8YEWNBRNjqESpNieSKzmVNe4XEsvgZQSbxSpu9ZVMUaErPhdGjosy2bD4AkQ91N",
  "key16": "3HkAXVH72UJtoSZWLSvSmG3aGr5w7Yhs3H3fG9pFZTWggCY4difiqoY9WRtXvRKXLSsYqKhUzjjbtzAqBXL5T5jU",
  "key17": "4nfJoBJbXnGbdDyzkfgYW6wSfqcdPXfagKcVDp8nFQWBHv94aunU6axhS46MFGwrAFTg6dnoV9L6cTteXJRJUnXw",
  "key18": "C8mJW9yRnSJCYXnB8n6D3h2e7EKe4CTRFHLZWW1rJf69Hw42KAVJHBULio2B5vDgmidhLNPEKXyDj1B5Egn6YeR",
  "key19": "16L54hZxoXygaLjqeDELNiFnUjLzDpThsD2VbFLMS4mGkbnscYXL8kGGEeA1cZg7Ut4e7dHiZ5KdXRC1KF5RZSd",
  "key20": "5amg5WFRbvG9yUKw4zZauyqUownH5f4x9ugihm1s8QAKdYNLffFvCg3u7vbbaud51Yz8YPz56PXS1MR9CosncqWn",
  "key21": "5TotRpj2Am8aQ6qyB1H9ewwAuyiUXxPy3DZhmk9qVqiy58YCdyJu1sQFLz18P54xmzwfWstGEmETFfQj8aRvBmZn",
  "key22": "5vPp8VTbK2EQzAWk4SbovawpeVEXFvuJHSyPqpTjzBKKEqoFouvTDkoby1BMhRf9reZcPVGX7USvtbdDxr2kxHjH",
  "key23": "3SbdPN4nsPDifBj2bXgBLtYAMqVZkDhXJHP7haKDf8bmqy9F61EnccQrTGb4uHzb2TbE9jHuH4z2o43s1w8mmEHL",
  "key24": "5MTsDri1t4bmi1pCUXowk3qQHSQw2VibDVudyj2oJkJPoRM2eP1RVJRKrq9eWubCqceuV6PgHNCBg6uS4RUNWGKN",
  "key25": "26Sbrrmo2QC5N8pekgpTufey4UXjhd6fe9aWofbNU44ZyMGwabhTtywCbEyE9GafUXzzAtfh15WAYhbTaHubMWjR",
  "key26": "4zt3SH8Z8sWMcCrWy6fMmwAb7yJuAhP3U9mTjUhfZy5RwaRNhy5p8z1km76a83iBnCxT9ULPjzX4AaimwdXCLeEi",
  "key27": "nfZewK1cP6vmcjQHaWSLM7MptZWjs1hHQZoTyGqoSXZ1z3aZoY9Uq7WToCceEsUtedP2881zcbsQPCrMj1WpvM8",
  "key28": "3vBEvhCXynbmqdGtMXjpDuddxovALwb4q2vqMqFCZw2y1m1tnQ4R4omXmBvLvjPBUVmfwsCzUsoJjTGDHa4MatrN",
  "key29": "5gvPJPqK8bZ9FbiBa6fdBHeKjLCaxLF83LVV4ztWEtVxBnuTXM79kJM6oq382mZN9xx2LPDVzzu66cykED5YXJE5",
  "key30": "4JSL8U9zgJeUJXd4up1kTegBWC31Vers6V5Knt1NMxGCdfrg6DCvz4cf6ZHgMpTFueFgJzNwpmQLstQUKSs9WMmk",
  "key31": "2yTwNyYx5NuchVo46sD5V6SpstXHxW9cw7DzmdXG3mWu7bDMJiGop6Eb4C7Ataq4bMSgQZd95gcbJoaNJ5ZM8E69",
  "key32": "3DqdEBkJJ2BGy59TMr9mQFrJN34zC3ZiBvU4r4SJDSwoqT7mVr4KfMZAoruW7UcPEXrB2d5uyzUb273fcVNDw4Nk",
  "key33": "XDzidrv5sQGaMjp22HNb635roctC6pj9fDnF9rBA1JL567vvQVRfcgCw6NvrjgmFWqTmv72yY6BFa99wBXWEFmf",
  "key34": "64XHwAC43WM2jCgp34GaHDWJwcgFfgyS7ChVUnHY3zRs8CpWTyXf9K1UvQEfTnaZ4nsP4dUb6KUAQvCuRvVtytjm",
  "key35": "8r9z3cJPKq7ZR9Cwty4WKVdDMSEjGydJ7ydXYZPPMgq3LLChfXZy8rtHL5cZzDNnMGAMyCMLsdJetwjooNRRVM6",
  "key36": "31ttpbE9zrcpwxFxbPkxQUNXjSghRXYMDZomhJPC1k6y3kBoSWPJCePSHyj1KfrnaDtDvBvPXrKoKHNy5n87GTag",
  "key37": "5eRNamFHWzbzu6owjBRxJz6KLYGaqvvsHqNeio3SsXpwMpnXDw5RJCwZAAZvYXgkGXDyF7gyTb2Gzb9GiayuH262",
  "key38": "5Pnzgapw7XzArcb8pArbbVbEJ2YGQJUdDzomxoCQE8WYjkwPDSPW5Fi8npHrgreW4vR5mpqiT2LtTLACaf9L3WDH",
  "key39": "2JzWLvggCH6n7XswDWARshYbKviXsuNhCAatgRYJvdSzeV5ANYxgeU3Pdq8wuxq53pX39zyuqnBmX24V6sVRiT4e",
  "key40": "4oPSzXUjDCeHzEs9M9CiyPZsB1Q35bFThzLKh1KB4VNLb4AqYEuTYtin8jJrXSDWz1za4hJxfb1JWXLvUCwHuuUf",
  "key41": "5Ff1RCkbkx14xsc8MPLDuVA8bSdwsbW125E6Q6p2fp9Gv7DRMwZzhh5CvYDVXsHvoiayUaYd9KLNRggD4YgEPszC",
  "key42": "3VdF5GgeYNgsf8y1Znr9UPnkxU96mN6UjxeVM7F7WoUQnQ2CqkRpVtHktrfDz4wjz6VhXNFTB7AJwycCpu3FZj9k",
  "key43": "5B45vULEi61ZYXn8fZFqNLSntH6onXRjCPupJ2d2bCmPKnyb4owLTs1CmrrTdffBjjcJuURXK11WN1KD58oxwHVi",
  "key44": "2ibWCjWQkRghvKWmTQFdqV6nAC3Gc4rutYnu7kMSo1N7A3uCW6AYZkAxn7hBbbTG2E3JZWND4TkrPswcGcA8UwHe",
  "key45": "7cWKi3mk3JAvpdh5CFad3SWRxhK8Zf28Ry4xumeca31cNy8F58n2SZLM4bVPWGSEynR5czxr3jxPdw4ikhjnJ7P",
  "key46": "5KxSvgTCxq1136DaepkNgdU5XtLGPayUU8ELdYxRTtYw2kD7iyEBjBCbt83m4dJhnq28VAYR4ecLw7jH5FjDtEDJ"
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
