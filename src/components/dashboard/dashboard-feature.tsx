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
    "29MXkC9zN6T9hbo61drQmzuF3Xvnfx63tm1MXBoQc2nbcMTZEYyrX8Vkdro34QHKK5BbN7P8ME9M3rkKotxx9EvY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NtPLY13iP8DZnJYyi1Dg2o7BhpGL2TJ3SEWYzMSyf7B73wjKkYmMaeu9udRTA5xFMF87LBrATEngiWxYub2JKbD",
  "key1": "5w3WF42p3PJkN9ZkTUtBsz76BBxVvu8GJG6uHtqPAAEc2b7qPpBEjVeeL8xqW6p3VcoFsiNY1btJYzcQr6efCC6a",
  "key2": "4Ky6AQAGhsB1nM11ceGUBxzqhdGuqFJ5ZdE1RQazmCP6qeAXJwBnkEdQiHvBuw9i72hJB7MuqieSNzAF7Hx7Hzin",
  "key3": "hpGEaufh5zvLX78tkcVK9j9QvSc5wpK2tiMgV2RDkkkdwYXSE9HhPADBJmr1PxswoXY8bhzq4HTS18Bj4N7Gbwh",
  "key4": "3K2yYoo5R48e4MDqMasbCJz4siUNsuT1ok6h1XD28ZADhmx7H2bythaCMGPStTCC4pQdhNeCSxaK24JCpvo1JCyC",
  "key5": "4UT4TWAg4v2ExkUQkmLMQaKb9Jv3uM13ZAbwGF6soHCkDmakKMkQTsTaCX9SZHEucGaYBjVcTJfazsb29sX2v2tQ",
  "key6": "2CEyv7j1K6fRGSodYedKQigWSGgKKWKEF99JUyKnJmiKMFsW3eLqpMabLGAdyf4KRbNPj1aYcKQUKQ5E5yVG8fsy",
  "key7": "3pq8umYDGxnayQgGYYDdRpRn1T8uogvbdWEw6gvicE2LGbuG2rcQo2U2Hkn4VwoQ8KDgZisRqV63HaesXXkzRrNw",
  "key8": "3UDX4Mm9ZH3vg8qyj1roPJ3xn4mzaRrJ7Ex3j7Vmayr1HnvYBQ5kyQeuxh1jd5Q78ZWjFcLD8fi8e1SwvUofSjLj",
  "key9": "cCaU4TsExsJvjNcwGurNHFPVyQ6NnnUmTf8Xfp8RVAHhnRUj8miesimnhZsCXmGDxsPMyvJEyhnrCV8mJjhiomR",
  "key10": "3FkQpNnrHpWgaEFx6sqru2fgsFTC2pRWftNJahCxoK86pT3GqTc4jRPRYygDE8Cm4m8GnRp4AMot8KLqboQYRCoq",
  "key11": "2kE6JLFoPXVS1YcQDZ6xo1sduvNktu5Qp1DGfdoiFugqgdnmKvY47Y3ACTgV1x6wndiJGJpTFK7W9mUm8TSAud3D",
  "key12": "5hrgE9wpMcD1exWjF9minMuj7cM5xjsGbzBNJzUuvsKHYH9PqQNiyuqa6Bn96GXrFk7A2fE76yZR1Gqi7HUSzsso",
  "key13": "5UqWN1Ujxij4f6FQo2nq6JQ9vroNhoVNp17XFiVPFoPSvwFomMbKkyKEsgdjwy4x7gwxAf6KT83khPpTRfjjdUeK",
  "key14": "58yBZjkoWHSjiZtnNm3eHV4ndh4NpaVEyijoWYE7xmzv6vcocfXvzSSSFcrgvfM6YJre2GznkxEwg5cqyG2VodvE",
  "key15": "5cBFApRbr1j4QhLocmxPmsFjK5EFLB6NkUoSgCeLVksBC526GBngadUWKqtjKSwiev9qXJg7wz9nsZL81JbMoao1",
  "key16": "5VoPyZ3eXnpwzh8C1azxP5HjEw2aoXpDcM3gyFgWmsJwhMhUHSQTDPNsw94KKjgjQd8HHL9szwaJTeaH8vSDogiR",
  "key17": "2m7Tf2F1N7GQCiY8qrp2vMPGBLvNfnfABCD9odwTkUMWvfPqfwShemGT5ngHZLV3s8BtBHBUgugP8xcmXcWTXXVG",
  "key18": "3ENNfQFSyYpdYEv6eWhfcT68MBoVJMkAka2fXMmzvhJ6PAxNoY2sAe3zKZ6N2kvazLM2mN1PA43PhnpyN2i6WvZu",
  "key19": "wbQxESfM6dq8EAwmgU7FPTBHC7jPYPPiVE9A32JVKaq55Ds21dWV25TtvbjdZLMtAQMhrUHWg95vYse6Ko2p8cM",
  "key20": "2jKcS3FbBDKQhpEnar4XXfhWTJGCsiGVotPc2K7mR3CdJDjC5shUL7mLHuFaYZ3CuyP3fUazzM85WducGsJzG7rD",
  "key21": "2UarmADd2Gkf5YahnXqgKg2wwUEhwqN1iczhQNyRqikdiNyjJRUfb69v3TABvnjg6ziUH16dc9xd5DAsbAL6upMq",
  "key22": "2Y5aVWPwTNH4hP9N9XQieRR4u7iPg1sFDj9p5bBwwgwefWAr6WeHG6r2BrBEYs8xhcXnEorbACb2dGVgFM4sHCKE",
  "key23": "2RrpNvcypgUgVHHC9zRPf4Fjzx1TRkd6GNRDj6RCqkWbYDh1eXu2kuiiZtafUyeGnpjBJsz1DNhZfuJkeCs5V9Fs",
  "key24": "33SH74J74tFS6ynp2ewHLXcXoDs3pTqGMFqa5AEE81GvamnM1rYxjnP8S2zqQ9FkmhT1p4DdzxtEpw1i1t8u7m8y",
  "key25": "4wkc2CC2Q4n4Pov8YaU1oTxGf9MDK9495ZU8Miu7t5iHWwaXac7rK6RRH2v4VrS4HEvdH9NZHfeVEf9Dc95zEjiq",
  "key26": "3uWY3CgUQvUEcAEeVK8zj9epDmkRzLMf9rpd2DTTBeYfPykAYnHkvpqwJftzasZk2CkorVc14jWPBTE8WFaWTUV9",
  "key27": "6RutAM1GDG1NVKnUiXR3unove7NSAD1wRk1FKzg213f9eDqmZAJ8ZiBMRso3WVjmevJwusvAQGVtQ6PQ1ZmGeAi",
  "key28": "QQWoAoea8rSeQxUMfwwv9b5wtUhs1Xis6h9wHjasostFz3NMNpAwDrXEfCwponXjyFjnxcuZVzsJ97Rz2Xi918Z",
  "key29": "8HnbiMGRmkQRHPJA338FgapjpZ1wgmy1RrmxatxU1yeTNCSf9WGd5dTxnRmjXtGUc7QcvLGmfa9CYsBATs4j8Jo",
  "key30": "2f5s6tzDy1Pos8dj9gHSsfxuYTW8vFj5Z4uPPbfGeZA2sbxDEveyLdN2Hg8v6eK8rAcPqrFp1CU3JE2BcbreRYCp",
  "key31": "5LJiXQ4nhqXF4Nr5mDSJ1NS6MWpT2Gt7L5XNVyKBz7RqaoFRxgTG7SPBeJ8WxXfHeYHRCbBYaG37naL5AG7haxUj",
  "key32": "4UBpxQgETAdfeCopsWbEdUn1dKtjd2Knq3q7jcxgivnKeBFB3Lt7sPDHfemfvnvMyWtzqU1EJ4dBqGQqq1boese3",
  "key33": "5kxLGJ33d7vx6JScWrxuyKBVHKDnk7uFFZFs687pfWqMyRRxD5SYEefwBz2KmXoRAMG1qaeeeuYcCC4GTYdumtJe",
  "key34": "3pn5a7Q72VvZexzipgDtDGa48Yo1Qs4gUwHmZB7FiUHBUGW4ZXPYVNtxn2xqwtBSAf3okJoPbgyWNrjUutYKp1RN",
  "key35": "4gDFVm5C5Gq5yaW4NUM2usQqVsAe6m9JFpdRyy2peL5owUv4erNei8coyVPDyKZMfv2LJoVTdLGoWrJ52fQa33UP"
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
