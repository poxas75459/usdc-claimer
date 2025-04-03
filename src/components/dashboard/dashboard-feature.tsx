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
    "43NeWiZa9a8ndpbaWg6qRKBJS7PREpWwuotz15ar6Hx2HiyYgFtrVY5uWbcCxDVzw6tdmmoH4JedrtpUN7VY2N5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RqLDJwC1YyU78y5RKeNuQiBcfKtEGx9Yg7G8wY6FMdxryKTP4dqB8GYj8bbb6Pi6ZTgvtFFuPHQRdxLvEUVG3H4",
  "key1": "4DodorwcAoj3WtA33T7xzNMCoZKaKVCut3cB5mq7TwbpizoZW5KpbaMHBs3J2RjQGBd2msW1zLhuRGxmH5urS6Qa",
  "key2": "3EbrRy6ukHAGZxtRTTEYaaahWdnAmaenXnWmbbiq4ictreEzNGPWhX1znbMxmbJwjJ5u1Mcn18qDAr1f5iAeAN75",
  "key3": "5Ztoa8MymzhsgpzfZCTxinJD4guJqVeSQYeEqrbNw4NXzTS7jwFRZVUnfu2kz5Quzj7SJDEGtaMbcJLoP8H2PjKj",
  "key4": "4JjMbT29wzZz9rquKzmsrZeUn9o74ML5L7GF7KVFJbzQRXjXSqRvAWiHaypvaQirCfCCmCiYGVdpPuzUKjpVVup2",
  "key5": "64JGcPGjrc5JthpVAehUfK7yDjRSwojhRMUFNQUsgWX56N2iCkWDVazUmJzdMTaPoeNxZTbU3qDDLYTdyoVic3PU",
  "key6": "5mzFe6Ug1XiUpYHofQ5u9yv8ZFwTsJtr9DApzdtzPgXH7WR4WJvcoS5WDwDaQNQ3YJFVzvdVbCvyjaiMDskaxjWu",
  "key7": "4hQJ6UCyTBva9n6qLGgc271BEtrMBcwuZae4gqYnLYetfgzPTm5gL9yW8Ja3bhoJLezVxEwUjxWPMxT1wQzvJqiK",
  "key8": "3iTbtymFk5RXxgm1AVWrQbn5VMGgPwyuK7oSJWu6FhoX5Q67xACmwJuZgnUfPDfNfiqtnHFPF69WBunPkp2FWZdV",
  "key9": "3fPtv8g6adxCn2BbSWRWhHHfgcpEBHMwRcdaTJmMv57gg2nDSdUp2HNvzjypbDqJtkzF7xJ3vvCovBtGpF9waFjd",
  "key10": "4AuA5cTUyxybHXp9A5e9gJRgrGngAKR2WcHUK1pz8CpM5AVAJ8VXLXq7LgH7Ya79ft5eqHNTiqyALDiYhRGFUqxc",
  "key11": "2PsrVBeWTUh71YpYe23LXY9euprSjqhod4eLZ4ZRzy9ivr7wmFqyYEjRNo221qZ3wttfeB8ed6UaQVRjEZk4kqHy",
  "key12": "446jSQGZhAfyakJgzNMbknaVouGAnGxcfKYqatXaNRvqL2dWBU3TxJcxCp47jiPhP8DBvZzggvG4XteBorrpjyHp",
  "key13": "742Ty97MBfubXQyxB1CULmYj25gC3hQQCFbWLFEeDPLf5UePn8F5fRHoPCBNT9sMoeBX7SUypt5oT84kumTXhbK",
  "key14": "3suSxbx3tp4dyqqECf8yeBriYrSHS8KcW6DnHZUnEs1KWAKwwFyPC5CExhyfbCXrg3KJeNLa6Pe7WxevAakQVGsJ",
  "key15": "55VWeZ5xeskcgLoypKpRHTAsuQo4exvJCj4DvymPqV4T99P8untMbFmTUHfwTLpC2b6uReuqDvGqG3tDMWKG3Py8",
  "key16": "4LAEqYxSAJGCmW3QdT4QqDJNETE15aQveFDho7c8ckAoMPVGtfKTX2k9qWnJxhV7c2MaDQcXjfqr45ARR72MXJSm",
  "key17": "3PdD3Ss8h8d5krmBA7pwVa5U7AsbQsDX7PEgQjTV67bYPCWNXHmrZB77nnbGFmkkmYWAet9c28zNPhVFaSXQW3Xs",
  "key18": "8qSKUKBuNdzY1t39sMGKr6JM1cXbtVkbJm7MedM4tGwRNPBDtqTBn7K9KP2BN7yiokscTqrG5gAUAUbxSMLYRF1",
  "key19": "WCX7kKs8KeNtmzQAajVHvTUFMSM79wQwKdEaEmKVSzEMZ1h4xnU4Fc2XEmuhyto5Giyq9H7k5HoneRRpupiJZWE",
  "key20": "2UCiRKWjaNafpKpZnsckdDXwTWzQsbcZ2xWFMj1y2pgKRaakGXdMSkrzLfTWHaa7ZouZuRZnmZ9CwkTsVToXqnSf",
  "key21": "5rbGmF6BwVL6FnypAUurWsYfiBDBFBygDujhXo5RKa4mWEmRkhBLL3YE5cN8TtRNP5hpzroe9ptdt8Fxr6ePNgGw",
  "key22": "3GYfccFDgcPELiHDwrqvYvD5cqd9gFNKbCGSudfkG3CeL7VVQcbkKx7V49YF9R24nAajDThATyJWJYnGG4MKRroc",
  "key23": "i5nVQFHTypNQp9nV1ELGdVFbvLszrAZeSRWFCiBbbLRg7i2jq3eqP2wnwew1zY5gfi6q2K3bqmxFE6VbXKmcxLh",
  "key24": "3SDo9JNvu6XtE2aCpQoRvZcH3pLRk4j17nScQfUzQ95xpNGvSinPPNzZHuQP5bGaFzH1yjpVPxeTkerSj4m2TruP",
  "key25": "4vmPhpQBAgHKZmS1WV8RmVd8VfWnCQ55XSSRfdAt5djuBqzcccApJaNYbkR6mxAkH344rGyDrBEA1scQoRLcchar",
  "key26": "4heRc63JFDMhWHx2uZStK5ddHf5F7oZUsQ9Y4iWToakr7uf8EgFj1cQojPVVjkSEnbdKogY7TwmYPwondHKxie1u",
  "key27": "23oHLifYMK8NVGaLvrDQNGEV6dXYsvKbd8My5ae8JMkFytwnMxDuH5Y9KKKFZZHMTNLuFc4oyJ5y7NxKHQaNrbKG",
  "key28": "NombFKUwNqapMq8DLQZvob1JbH6sz8uaRSx7HenWrtvHfhAgZig6n7WrRY6o7QxgzccyASR3hqYyMSthTPP5d6i",
  "key29": "vLnG5tyqiZ4yZWPDPY5EEwis3qfZw1Nt2UurckzX4jvqigaWR9sBwt132ozBDjiEocJVkNgCj68DGupNyPEJBf1",
  "key30": "5XfiLLyPCyDpQmsBNUCtSeB5e1TDxxrb6DcySZZrvdJx6zWfpNmYtscdB5vgWyMnJvdwRKsGJ1o6qM4w6SkqrzcY",
  "key31": "4KeB8cRVGxJmSKfeqxeRGhKAFknhDZudUNdpqLapeEJAJ8rVQ5RhHkMmgPv9W5WxitcD8FiCSFR4WfQTiGrqPFjM",
  "key32": "5FfkAfxRRVNAaSU1GFk2RLAaGRW1omBWvTDNGJvNAhtWSCGy36vvCX8w2kAcfhDUTFAuEf4sciaWkd3US8Jkk1oq",
  "key33": "5umX9N8GJ5Y6wYh5j784qNYFKiESi7SPTuF94NxvRcKKyo9VYKaDsndMaV61GffKTi8mxM68LjVh1fr5EqMhmrtg",
  "key34": "4gXzapX2iP8hmpPNpa6CsCs2hcj7ULwuS4ULk67xjDAZoNqpDS8Q5nArUeCaHUd8y8pqaLKWZzeNqadB5mVT5jZB",
  "key35": "N5Fzw5cqYb71xrao7ccHs3jjXhBBTSJ1XcJHF82o5HpTvePrau6TJuQF3gMMVJQ6AgHjAj31yLLEMZTYivC5oeW",
  "key36": "5555bBo5zaZe1Af7sYCwBLV3CL47D5VnSWkkr2xksRdQQx5rRwSHHi2WY4y1cgGfqEXBVahywEnSjCXk6bKXtxd3",
  "key37": "4KBJeWWeE5DjtLR3s1zEwGQGhVWAez1PbV3nwSa3zBeL7yTPz2HPARYeuyxqEz3moeV2YS6neCrtgRrXdRutjDFT",
  "key38": "3zHYztSgzksiD5ZwzUyE2mnPdcTMTvbeRMfnATeNMs4nqs45Hh8urN7YuUULYSDEJWcG14k2y3EqfchtQDppJ5Xd",
  "key39": "5zejj4qpBFwp4fo9i7jwpzceNHJHW5F8aLN7vUQUfqXnJGKxiJbU1d2wKFpjCZbLmNAPCsnKy3jsKBF1a4ig7dfV",
  "key40": "5ieCPhBAf4tid4xeHnAcrx9LNAqdYPzMZpjX6SM3ZFcR1hpGGYzksRzNzWui5xpC1fqveMtqW9CFjSwA2R4UwrNA",
  "key41": "2azt4kKyHXaMwrMF6juvm87JVMyHPdezPTq9QpJSscUcLzEHHHt1qjwXmpZwyAdsJn9Xjwxy5ZpiXzeBa3sF3UAQ",
  "key42": "4CmrYu53woeU6W992Ra38qygqp94tbDnVoihF67Jd8ANo1C2AFf3pgxNPASCNXLwt722FRhnHgXST2GrW9V5gVSK",
  "key43": "3oCNks2CaTnDb1mstbtiBo6unJ2CHf2WrqKguvmASUameFjAJbMVXvBgF4vFjhQsxgoUzUJGeYVoS9a6ZNcnVLYV",
  "key44": "166SB2zotRqFcFRB5AHWy2mqMui5sBAzCchBBjYbikWckiLtmSE6FBG7trjoipL193UxsQ2tQHsdAhhyCKksjZa"
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
