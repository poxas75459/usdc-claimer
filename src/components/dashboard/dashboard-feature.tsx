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
    "C7Q39MnSTnJynCrQTXWaVo5PP16SzwVaCvay5EZY9pgFcaf3xt3Yrw2ULrgXSebmBBQP4d4RHfxbmdfPCdjQ8DN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23zL2mQ8TG42qvakoygVBJ5U3GzfFVA12NHzLB6YFL6xgoVvvJN3Jq5yrBqVmah5V1te9mJtMxpR7Eox9p9QLDGp",
  "key1": "41KD5JZRiYDrSKWMxxGABcHNKbzz91eSecnzN7TAf2HaFM7HHQ947VVsWRs3U4dwR3CxKoAVsCpPrw1tr8onj5c9",
  "key2": "2BNwrf4p8SftHULvuF64QodH5Qg48fdtf9UnPytsGuF8EC6RANGvfmhSnyaTDqPqDsM8xFtTnWLT9YR4j3bdnhNR",
  "key3": "57498yp4Wa5tWfFuq72WW73nfyZcyDTDDLJyq4tLze6UdyJrTrgA3KzZM25PhT5mVsCGELPD6NbwyPC5G12oksKY",
  "key4": "3pz3Ss7bqaL6sRWYAKxdG3KQHMFrFQaov17G5Ti2odwYq7AF4JXcRLKpC7qBd69KHPwdPd5Lo7eo4kKUrdaGEfCK",
  "key5": "freQnYFdxjuBJKnBDPQYxgPGJiPHp4emDnPbfWs8SQao2jt9cQ8w2cGyHt4UNXnp6e2feD5cCiD2kfPkeaQH3mz",
  "key6": "3qyLUJ8WSHGmtw9qzSmac84STbpGdgYRLpB9HZwHSv9pqZGMyibEyCaXg3ERfRYD8qNc2PA5hqivctCkXivkBLAT",
  "key7": "rPtQW7Es2rZcGrtDYVutgrZdDx64Z4QZAekMKvR5BtX661PBn7ivaxKCaq2S16sQoRe9vXpgiFioVJo7ViRPsY8",
  "key8": "F8tyXfwKSKCYzCXeG8p7jAFg3LYiyAXAXZHB4t4SqjPaHpsHqKAa6G1M3N4kfdzQWfZUGbDZ36gpTRufmK4j4tp",
  "key9": "nCTBTHfvPPZci7HmQ7ovxJUmSJQNvJAefZNkUkdpbF9Z1UhaL6V6Y27FPY2hStmSY3XRHUov7UDSjtf4gLVy3FC",
  "key10": "3kF9gHdDE3u1ycZjHD2bgiiJWaYALhvPDMMxyqQ2csq7BvMPJYkxXS7C9bjZVs4hN2sT3r66SF1JtsryHcWNkAkQ",
  "key11": "4H5iY2z26tz1XcdtyjXLTXB3vEuc2zSCvAd9wbzEpmDGu3nJNuzdAC5ckWwMuYvTgQbwDkpEudfkkYsngvJzDm8B",
  "key12": "3LeS5ibdSjfeFVmHNToV7qzL3qTMnvKbHsu2qPWMFVZpZJALhpHhicowdzUZJpAye1XHJhAwQ7UNTbgLmwuVRxPD",
  "key13": "YhBL7nzoiu3veER2etgoMfHrR81vMdvwnavwXE2TkctHvyYbavCrwdWLE28uwwG9G2H6cpMEv6VFuj5F7xVxTsQ",
  "key14": "57cKR3uMNxJDVzaSspNHCgZc5TYiw1vSeASrHbUo2J7R6k37RR8on87imTxBRcpTFNDFMSNyXy9JqS2gx4jBPcED",
  "key15": "4U5r9Qhng9PdzXhxfxHRLLoFDok1vQXJtHoQcPU9RKZCYJDUq5szQhGUUS77xQh5dGvDKpTG8yp9CpAj6eMHRny9",
  "key16": "2czEo1Pv1p2ns6vwkiHeYTic6ij94ALJzYezS821WDjNRPh3wUovGGSCGLcP6Kkwq7mMzKYV2PRTnXez4sfBK7Qy",
  "key17": "2FZ9d5x6jLqkiGVPb5oB7ZYb9cMrKehehVx9VFEdEZzyBB9gx87EkFQkZGutEZWMzTK2i4zkaNZDTmhYqJEQwH1N",
  "key18": "4W77WQWG66xyFrwqHAFRAvkLR4p5bqgaxX1FsQpMMpiyD97a7dxdcqE3gMEPzqQeGqo83i73fD1nNqy8iuBdtMzp",
  "key19": "2w9yrt8Mv81VDsJMi977CeQvDymAznaY3mtw2pnX9a3Y6NnMEabSboKognaRSNx1z2pU3UkKWCMUcYJe2KTqkopo",
  "key20": "3Erb2tCokz8kxVJBSEktJQAQu2of3E3Nm5QadFaBtVXEB5KWervqm73MbUADsAsphVRVAwXXkUetXauSViTLV5nb",
  "key21": "4YN4tq2tLGkj3Ub7SkaQZAVoL8GeRa6eULkGTdrXPCPYmPRVYDoHsvnGcGaBqBj8XkrwJ9tVfGPAD5aQEZfEUU13",
  "key22": "52UYyHMwsDgBzXB7MBNg9yVE3eUTavWsbCYZGn8UY6SkZTabQPjX7zkGhJJwwdvzubVFA3mCpS16itBd4Lz8HYY9",
  "key23": "6GkD4Fkio6d8i86WQA4hrUk617EFS1AhvEpwqfgWP53rxmu2Tw4eiQWR5iZxpBb9c9XzfZCCCp4V7o5bJzJD7Rr",
  "key24": "cjnpLX9Gt5C12F2vYBJSJz4x6m3s12ovGdRLceUkbR9SWXuEaB1YvSVzk5kMHUSyw72axJU3JznP523LAnybYJQ",
  "key25": "miTgQQoZ7pYrUbFDo7jR9Rzhpwkiczbe42YhRPuUP9fJvUvAtuoE7QbWPQYUtBokCxPsezEAyYQ5UreMJLd9FUn",
  "key26": "51nazjm7Y4ECX515uQQVaLsDY5mgSoA7GjskZH39mr5WtqVLbeDwif61CEDwd28HV5W3yxmXo9KQjjJSqW48tzvV",
  "key27": "Yrq5vR2Y3hPqs3QBbAer27gSp47Rwt2P1n7r2fAPLK44TuoaZf3ZwVHbDPjkrPzmc6JU3CiQJyo1JXvjYeBvDRy",
  "key28": "NBWQFzdKnPTHbWSUnCPiq7tjjdJbxGsahWQiUBQyn9v4RZkLCgywpncZtsxNfCFvjZUZmZ78HHCwNsNWcYV39iG",
  "key29": "3uBGgzfVoLXvVsk77Qg8cyMz2wiDNNSae8r8zg6ep6zRcW52RaR5TBcA9t41DPE1DbnvgpDajNRp7QiLzC3TCEgF",
  "key30": "4xz4y3FGJFUyZ6rrs6Tw7X1dL5FdE9gd5jHEd7WoDFuKstBKpXvyH63XF2RNXfnkXfCUEZn4V6odqvVcyTYfLxMf",
  "key31": "37SuNGzMPLtaRY9ggV177HQe4CSYDpBRnDZRW8PjEFKQHdUwZmzdVzkwV5qANs67hb53kNCKGFZy2t5YXoXYxPQi",
  "key32": "3WyZQCqm8sZpLJ92igEp4Av225o7D8KW99den7wd9ycCZZFyXa5fgfgNHJAocYJSRGWGz6pRY3CXp4VprBqc84TN",
  "key33": "Btr1YevN3wtcxGk3JbnTzFMTBoHhK8gUcgPtpekQJQmhoa3HK4W9Vhi8b3wJbbQJqTu5cFLNhjezQwmMaeYiLsg",
  "key34": "2MpqXxHkJu3o5no4LCjHL2FUjnivez4W9BWv8g1r3xWXgAhBqqNGwmEP3RzqtQYjgrirrqyG2N5CjSUTcXWaxrAb",
  "key35": "2NHLrMxU8KzV2C7GUqeeAYF5VwPc9ZqHfAzWFS63oqFvkegU6Lskp1dyoWM5AZyQFFK8mrQ7Pig9qTx5XrQ3i226",
  "key36": "5CR6SNffxRDtK6R5VWnZgTDbzQDJSTFCZwbTngf2SKmugi3H8HfbpLR84cH6NjxjKYvyemcTFawH6qnBCVzgUcdp",
  "key37": "65vyA1qpyCrGr9sT1hwdcsuPe5x27Co1MaNYYbEwPcRhNmuVfLXSJubg1iQEwsJv9Qgnv9Ps9ycwM37a7twcD4Ff",
  "key38": "2d4wARo22iDa3EG1ycSdkhugpgawzNUCcMfX4fXqud82cQb9YqArxeVChzRAHePxhzxkdPcf8oRxNr4zXNbKrdGn",
  "key39": "5gtrLXjrHeJVYCoVP74xPDqrhmRSpnoS1JEFqWrMBi1U8JeYzuQAypPsKpaNgqjPmjBrsLWEvAyVmgt1w3L7eH8J",
  "key40": "5pNB2Pao2hTUd5o7949mhjZqwsJL5ak76Zi2pVBsWEv23q9kzKLTGg4BP9pJxwBBQKZJwVorAKeJWJgovrEoRjPo",
  "key41": "4fHqtLkHVxbN7TMbwo19pxcreYVDmbUV6bgnPQa68RPsxi3rkNht315gdaT1Ks8d27xFquadGNv4NYHrybqeV8fo",
  "key42": "JUk7Z9kEYAdu5Xnio8Fm2jvNxERp8nfzuMEGENEXSZpSi5WotiNTMQup5An5vHhWfRZdzmSSzAqRArsC9fAdFEh"
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
