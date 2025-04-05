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
    "5ovNVLoRv62SHjq3iyFVruAjFarGXNrhJyYFYcWyqDJkD7tNHqjxXpjqi4MGs3oiH3JsVmz2TeZGRz3tfxXh7DCK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C9MBhqg5dBHY2JEBXR29NTtCST5yRtuYYxEorttogjQJiudXVKgCqNjyoYdGEBaRc9zdzZWytnBRRUoW9TPuiLn",
  "key1": "JYmeTzq88gQK9TnJdZsPjSaoQY9dEAEXpZyD5fbtgFWfRdnFrf4mmT439TU5vVdYmJwRyJqARCV8448o6x5FNCX",
  "key2": "4DJxQpvCoD27abfWrvUqESHNM4KM1VjAcqbz9ahRVmm2YFWYQ3Xhk41sZYz5XcM9y8XeirheVngKmr8NbfZwbDuZ",
  "key3": "4Dd1mQQyJrU5wLkMNGFzMKan6HtHueZn5z1ZYyg6kqvnztfBEUbgHDDRkDYvgTZhnSpfPppSbDTFuNn1g2DHWNi6",
  "key4": "4ngdYvLP2C6ysEhGvVe97p32snFiDq7EFce9AcToqMsZZD4YBAa1UiiqN8Vwfksrfa46cfv2eEYPbqPwoEjE9RC9",
  "key5": "2x55sSUvBaurmDo1qcScGEYanfpXDfusJziyi1bpCatzWyH5Qx7i1rQggH9eByoJZZefxVHDGSB55545SiNTassx",
  "key6": "4WXP4sKKHDnEQGNpUQiFDPyQPF4a9FbkHrbS85F7HxzPwhLB1fLMPAXEB7Qq1spiBfDSfJ5wc9ZF66MNec8xhNM9",
  "key7": "5jAX3cajbNctPJYeiwSKczpAaH5rMe9mfmoQSFeWmpVdVHdKmoi3s32hL2WtQ7NnUBK6yZiu1psrorGYrjpX2o7C",
  "key8": "4Ru1qme1BN2WStrscdNHavjLX7rjtVUGTY2EZt2VnMZrECnfAY2emVWDRdM1ST4ydTWrJ3Ykjuage3tMk385QcbR",
  "key9": "3CYfqc26Pc9MA1P9yKRXr5twATTYjxkqFRZhB2z1mhPqi8EABsnjfSqpcr5mnDmxt4zEQX311JKET7kXqHEjtmKi",
  "key10": "4R2nh18s5HXVDpjDN8DBndRJP5C4VRRfvrL3yUNhgNhL3g9t61HzbVs2266NKAD7x8yRcZww41wRmu51Ab2Dbsrk",
  "key11": "5H4J2MmKwMZNVkLQ5pC73rGAEs6z1WzEs73i1de7iSNNtWSm1JDxswa54MnwMY5hGc9HNx4n6TqWuRjaWzBnaDuC",
  "key12": "fktVA4h4znAsfezHSMTETZv2G5gzyariMDcRztXjXtHuvFAakJyKxVP7WLcwid1BSLXYCf9iwmykJhk55cwMs79",
  "key13": "4aU24ujgeYyFmkdkE6KvUBxWaBrYyjBECk5JcSqHjjai2T9J6gtYaQyDuKmYpE8ukZAxCToBwbLL77mVNGqMkUBi",
  "key14": "21W4y6wrhNg8GF8anRk5a55TepQyLzVd1AUm24aXyn8UxXMGkwoUmTB4R3M4BacxvafM1NaSUWyRRxXgUN1fx1EK",
  "key15": "3brtURRfdU8x7t1kaW4ttgkmYa9rA3Vcgs4cABrrU9HVFb4nn3duPzsSZiTrQbxzPNjdRjadaGC2zrApkkD6Bn5f",
  "key16": "4dLK29VoCdLRpnTx7VJBK2i8J2KTG6ix8mcPjJNKB6fzPvGwFq56LSoq3kAEWMmDUR3MCxSzn3BCoLCLMwTUKzWP",
  "key17": "421N94iGf1cAFtrT73egPXLCQ6r7GM1MP5F2bZAHd7o3bdU63H9Z3HB7qFK2mmYX7d6Ed1gMjgYEmBHZUVbVMRGZ",
  "key18": "2hChKLBXyaNzoQdUF4ibvThsLs5K3P9dq3kvihM5eapYEnQ3mHwa548FP7igzZy9DtRkS9LpFnGaBzq1Ps9cvNvL",
  "key19": "2jaGM2RurXShNaQU1uzJvYyoEQ68KETfpFzLgnmLSafh46pU6PeDwuxTCVXVtpCXDebQ6nSFC6vvQSJHzG1USdkY",
  "key20": "5QKmEyAvnCKvyFnbpVeugdxnrCYnQw48Xy2u9UJtUTidzEaPcivv7bEJCErB6ryeSUpW9eWkJBcXUC9ZawXrk6UW",
  "key21": "65QEARNvTrV9xJ2Rt38Cwy1H5pa6CvKk9ucj2jwSDFriShgRRpRNL8JFwUUm9w1ibJPqbCsCf9HiLojVcX4KLbtQ",
  "key22": "3AxLk3BGt3pYKCgwZqmAtJcUraUZGYmSARjuqq1zoAoqytLChcGPrQ1pHAfaMbn7GrMm8BEPNkHekJxZ1iBWK6zZ",
  "key23": "5x3oYCpXBGKQbtNuZ873VbK3ooWcSBFcYMuVaYE8c1LDKCmdxLvRrx7U3nouY1YKAGKNj4YDpnT3U2ttRNJ1ds4J",
  "key24": "2XkqjioCL9KqN678pHzZcH4hB3zKvksMzg2v3K8A24KTZtrdk9TgnKWhpnbhsxE6t4cFmSUMJKuG5ef3h4YoCzJ3",
  "key25": "C5zWeoSKXUkmJbFj4qazKdZYS32jSAshxzrbNitDvyMBSeAiVnqN7e13z1LyVXB8dUkEyFbJ3tdycLgG4sAcXf4",
  "key26": "3izaYDbY2V8DBUF9QMRA13DbTygWnZYhBAZDyTWd3PsceQPRq4kw2uwwEeP8LKV4A3kWBf4kgvtPHvqxzZsArbLW",
  "key27": "3s47dZ4bZhvCwWjeyxxAW41i2LYLPyrMW81S79C1b3o21eF18PLeaEqWYRv8ZJD6GcN5hnKkRndwhuaFG9TwpeU6",
  "key28": "3AWn7gqhXs4wZT75R6Z8qRJKhcp8UZb4Zx5je5e45tdpjK65mGMV9NuiZTzxYFRFaXv1aHpTQydNnz7jgEY8GVDH",
  "key29": "2tcgCp5ctAMe9NiEuYhTRbUxaGm22DRZ8Qw86TxoqkFWYfYw3ASkAnivVNGuxQCgUdUmjNF5nwPJStcYzG3Xai3s",
  "key30": "3rg2AdBgdDYvg9qxK7CkvuHt2W6qVjyfhgLtbyG8i6sK16kHfEe6du4LiuJrmR7bGRrXzY4G3RurJZeEEh9KQ15P",
  "key31": "2dZESmgMmBuGearuWeHAYqMAC3TxQN1B8YPpndZQGRKgrUy5By4PGM5hXLHgY49nqMEsY3x98UDcfXKH3TcAL7iS",
  "key32": "3Ahya24pshu9nDz7M63UGDP23SLUxqCnymBFGefEKaWQK8NDPo9faibg8Cnc1xpLVrxm1k2MyPj4GmvRbX6ivuBq",
  "key33": "143HN5GowTzMeJ9Y71RqHVxm8G3aJthrWkYTss9uJmcwYtcJigdCyw6M85CMuaAGumCZUksTewZHb9BzjxqtRHK",
  "key34": "2TUZo9oekdLonz4UcADa2gU6GETr5uhG1dP7awB2L5TFLM3S4VQgitHH6iS4hu41zgmeCfw55xTsR1kGuCm49A3q",
  "key35": "2exvTnZx3yvEsDv18FSxzduiJzBRCCTWQCMRuGerjo1wTu2UuiMgw3nPcMhPms7br9Q5RnyMN2KupemT4ryYjYzX",
  "key36": "wZ1Jbiyf583FKkdGSDSBqxzASykzo7nUsLiHtuTABTSqwi3CDzVfKwPyhQhd9Wz8nvR8EPy6nXwaCq8NQmsBQxb",
  "key37": "4abwnY8GmXkpkac2ZdMtTt2L3wJDoWSLhJtSGFhh5MWtS12mYVASsxyiLo1C2sCThLeB79YWGAxDDrs87oyuWGaD"
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
