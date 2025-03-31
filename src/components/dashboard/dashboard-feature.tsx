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
    "66Y56JQTvQ7WnL7ZjmQjoVjcm7hhwPuvk8JdiaTzE2HKhnAihWAkQnX4WueQYnefsi8ZUm1iQc2F57eWdhhHXR1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45DgAtvYC3U97ThPgKFdqM37ahe7BDQv6fWbwm7pk768DAPGYfGmREUhQyWJkn1Cm5iGpVw3kSLYnAHVEB4cxQ7q",
  "key1": "LfPiGiL6BcjmXLgZs2EUvH7YFY3ErkbjhhBLqBHy5sBRm7ZhWLLiU5g1bEA5vqq6cGBzqcC3RCGBA9SUMpcafS7",
  "key2": "4hU3fGJ9J59u1ZjArDaRZvrCCuvuVEGyDv2W9WesAtAE4PBwUijcgJwwN7xKT3RUJfNQhYLs7sun5zvVGz9dNpK1",
  "key3": "57hnhdeMJ82C7QRoLUXWauQ3CtMVjSbS91Hg5xMLEBzaqZjyUkgY81zu1eto2ihzpjMow97TEVGdiq4zrp7ZqFZk",
  "key4": "2bJDqyjosfYVrVmyZo19jYkTm3w27xN9toUHX15uYypW3gD1M7QgpR6AHyMWwP2hSg24vC3j8iwejqJnRVYmQtdn",
  "key5": "2YCMdKxqV5RtWTfsoa4PbpQtGdjRPSmUmpQAAaFWtqqveDm57zpRoXtWk5oDHm7P4Qd1cydqcXY1NuKy7R53Nqx5",
  "key6": "5hppyJ4BogTwek6Ljoz649BuZ2Dc3YdLwegk7CoVdhKDE8iTUsfVXv9ctArHpgz3h9JC76HX1pGKXeNd8483VDcr",
  "key7": "yonzUGtLqjmsUMv2W8reyVoe6K7Wn9baMGst4fs1STLSN3x38ucEQg1cgSBZdoM8C9rpxpcmZ5zXATYzAgG8GAf",
  "key8": "4tXcxSt5teLBdA3gmwiDc1s3yraSWz3cao6fwNonQW37988oMNSY54owCQsgvQjbzBhqAcdZEBw9fUSS5fPqB8cr",
  "key9": "5fhdpeTYQxoywXdWt5zXn84YTThEkmrQX6VpKzLXGt4Rxssgmih6vwLAtXoMAjFzDFt9ECXtCwDHdaPaAR7k7UDS",
  "key10": "3rFtV86TMNS7ZutKQaDLT2foH9jB4QrFkA2TiL9keoWiV2QDVFfogNRz3garnQtSBzqJAPUCbQWQVbpz1WPxLxXS",
  "key11": "2Qgaud5qMoBXzXcvW8vAuDRAnk8e8RcfCzbKb2KVj843H6nqZSgNYAVCRWePH32VHt5u8i1Uk8DPKE89MW9DKHg8",
  "key12": "aFbi4VfzLpQDRN62jzFzspBG6jUMub2TNKSbLSh2o6AbxrFq8wdAkHYyKUbXcuV5sSgqvuscrCYe7ARKqcjDvdQ",
  "key13": "t9mGickYbVmqhhyM3NzZZwum2zRNFvdUxrng15Jewz33Skf4XnEKHAKnX7Tr5YwGv1qEt9k6f21XRSHJGiBDhXU",
  "key14": "24oco4uGrKxhKCV6GXQtpPkix4Y2YstV8eJtVbDhhrDNtvH8efV4W39urmQp3UmXxScXnqXecWrbyZJLxx6RyoPB",
  "key15": "5E82mDwpxh8zZdLeBLmDKgHPEdd6h3g8biwXb7CdoQHC4xPQQmq9oau7g6zFqFbcxL4bDfVVNXdieGEAKvzv593v",
  "key16": "3tL8BKbt4QAhnqhvbT5iY94sUzovjYTvSJisWpvygabhNMsBuTSpcVvkosLjSic347YxyyqYSrracvhTCg64U9UT",
  "key17": "TEXKhJvSnngYHgJBYKdRTASv9WsStaxm8FCkswEVu9sjDk5ao3ipJrhehUgoF8wNWecQChLcyGVMiBCEw9eKJnH",
  "key18": "JoThrJ3oZdpiR1o9A6Ac1tfhEDdBSGzBvcgZqCY24KJYdawYecsKqAtviey8U1D4J4yCZ3ovL2Z3LWdZmC5zBPu",
  "key19": "ryKhgWkCfWVzz914BcQ37GY9ut3cfh8tvKqmLvLC2JrX16kENAJV1mXV8bE4T57v9QRYNeehBDtmHDxAeTxY7kD",
  "key20": "65q1r1EWHz9GVUGUgvkjDsXLVmmCgQ3c3bHYbfD3QGVrq8v2a1xLngphYvc66mHXfqg8er4PxdS3oLdAw2eJHfXJ",
  "key21": "484B9faCXVSLcJkvoTm6FJgfjYfQL5bngjW5dv3RWpCE3rUWVRGYqYHFnSowQRf2eMJNcDAzh23NZMvGgwCi6XfA",
  "key22": "h1AQFAxYQN5ZhQNM7JLha9p3ogNuMSx2n7ozsXxegoPXwZaSN1o5owDqPuifz4rP5PCeToNieDXwRfyLx346V4V",
  "key23": "2KK9u56nzrwg5VLsCnjSYaHtAseDovAkuhKmVEtAAcLberZhg7eDGeUZHQeRpyALStHk9TpgY8VUVYoRPHjQ3oPK",
  "key24": "3BDWyRi4n6aWoKYmn5px25BfFhrx6xnSgDc8E2TMbzzjRxvdFDjKQi2pvxhxBHRYKyAfnRvZJ3stU9hkc8w58Jq5",
  "key25": "5pwouHJq9QKw91tLKhLKz7DemXar1mRzdaLuJKfPQbYhv7Ug5C7JVAY9y4Q8PXaF3gQ1q6MisKLJhTkPr2aRo776",
  "key26": "5pM2vJs814VLX4YYdFb9XuVpw1u4iwjzK2Ki1Cjoa3JoZxndoPyH4H9r6erXtwNjf5S9K7eqY3Yj9vHLqrAbvyW9",
  "key27": "5nrPLGqE5Cfe2UstAASUBftEjCrabEyUqAygBMzv4UpMhrkFwxR8MHBhnuTTzjaA3n8ghXQLfCBEe26tBaQuV7ca",
  "key28": "4f6d5jqEoaV3h2etXnZmDqV5VLfaBfbYWWWGncjSpNPLQm1oo4ynjzezMXuJDBodTZQNR7FnaYYFetj7HH91LjPx",
  "key29": "R4oAmxBKvHqK5uVJJoP2yEPJh1AtcVCiXnH95ZhfJjAfnropaYDB6ZJQq4EeKWKydCe2wFe5ALEsj5U3FahzU9D",
  "key30": "2dcCBXjdjiBEqS1RdRETmV6PwZBUev7LaEvqUdd8SoVgkqmoATipvGzknawY6cWDNBSK2gZ1uFmB8nxuhvsQhaQ9",
  "key31": "XqFzVFP6TvNGATT52fnjatZDLCmiJqkawSSGpSnYWGKMqThS5Zxtt2LsganWq9fTwhTdvstsyn2UaPRrwukATzx",
  "key32": "3kQKLNSCAs1otLnJ87Vm6Ucf1eKiRfL1vCiLF7NQdtm2sBQXKd46vCohJLFx9QEZKiPYH8NB6A4eBTW5pnGC9swT",
  "key33": "5oW23nNbV6FpgX6BWN4Z5oXzuPyjnYbv88k5C5Sm6zP5PaK4xpS6arH3jyDRG7K4eRRo11uEDwDGKi7WrbTZbndk",
  "key34": "3qDrQegykhyT4K2apgrkRc7CgYdQc6BMrGUuUzQRMRRhBNfDmWxayx4DgqFEyMi1EXntuwuVJRFnmGreQ9DqSRkc",
  "key35": "4Vx6pFMsjvgbsZmXUQhaUs5a5CjrYjN3rZFtUP1VB9rDksYmhzoCXum5ijstjizNbeFGtkyHxq5Kwe8A2vnLfSFg",
  "key36": "4MCejDwE13ybQ7d3qhDi9W52BbgHkWrSqb3SS6xRTQrhpjL1Ja9NhkFGAjCYd9Xynqybtxja2UKL8wFu1ipjuVZL",
  "key37": "5p8qhdgLwRvLEdMVJ5yeq2KJVFhf1wdb6etgT5FQiWyCDBd94ZUfZJK4LtgUeJnLogEFqrJRzU32MiW1dWcWe1us",
  "key38": "2CsD83iXg2SJXi3wVTdjHffKTZFcu3z1oQPSQSFwDunbYq6ZCDpa7YvDLxZyvaActkDh87Vf6zwo6LrzdTLHzdWa",
  "key39": "vUUgNZwRoiwtQoDcrDdfrXojrwgQKWVnSENGusNNLBLogvYbKUGWT9CaiMcxZZQo74QfxMA8S5LdcJrpB9UKB6s",
  "key40": "28wwoQGwYWTWi46qBZrMzydK6PMLQrJUmmj3f7BxFRjQqyTM3RNiMoQ55dBhJMdoLH4VjmxwHkwVBDHrJNsk2bye",
  "key41": "3Ak3sFirPDpECBqVYCdKVWrkTuxE1zSyFMA7Ch1zHKALPN2zsZfn1dPFHByqRYcUiioAmxFeZdsNNG7NFZb3czWk"
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
