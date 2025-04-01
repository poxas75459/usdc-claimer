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
    "4Bw7tjxaGkXY8ikbYMBn2RRhWuvgzrC2Ma27ArPHwqj8JDr7rhgP8cqhBSUYzCWqQLuMg3Cf2syRfTQTC2M3Vq6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lz9i8VNz5J3t4XSXF7SjgL1Z3bD4LhrmDMVTG9LZpkdEU82wUUo9oCSSSxxgRN3r5HmDJaJVukqpPR9k3wSghta",
  "key1": "4u5q14E1xtysmG3wLKB5C9ajMzY3xpMcMpohWVu2gNTa9U7gEtjs3GfcD2MFiEnGeQPg7LjCAVTpbwLYVFgDcud9",
  "key2": "2wDYrr42h9cfwqLgYFesGr77hk4B173XHSXA6LrEVfSysFkGoHSzNqNxatAWfxM6LB5rUoHCRWcYeUVj7XFqpEJq",
  "key3": "4m7brcTfnW16Q6goz4numDJ8VyMibG316VvPgzQTMd2QomGXL6J4jc5RN2eFZBsWypoQQCVZj8E8anfee8zvxLoj",
  "key4": "5zc4RJAxD3GaGgqqJv4mGVHdUJVB2rNbst379SsPf8Fk19wXHzr8L47GF9oevc3n2JcBmmPxK4g65TWeE8QnahR1",
  "key5": "Zb4HP9o9izjEBYMPteB1yihhm6KyrXoUxci5BA9LeMDtt3rZbN1uT3qthtibmm9v2ZmBYVj6Pd3z7haX8fn5Bfh",
  "key6": "5yYCnAvS8JjYddBUY1yCyKQFLo4psKMzUfB8pTEEfoJ8DG9KvSGhrxt5bCxHLEiyzMWXiandrv3KR8tw4JoequWc",
  "key7": "4rRxvAT7Mb5Jb8jiYY5P9dwjTqB7UZrK6eG8DPPuQASUz3HzXVKa3w1Nk5LWzrQyfwnScD9kAyr8PKKbzhF5QLCZ",
  "key8": "iaohHbGLzwqufz1vr2Bq4NeBVvaCMYAF2nPoFd2PtfsM2ApwBMX5UyESoV9Pf8XPB2eLCXNzgqYftcwnbf2sR1K",
  "key9": "3MAWYETQUTQSvvdyMve34A4sG3YqN7n1XHiKYV9kptHbhcfsdH27Zj3hdEXs1h6jLmavJ7jyhJ2LPcMqvM9oVVDP",
  "key10": "5kDFUQogaqTaugw4XBmoRZFudgwfZTwyNwc1tzCa4RxndXVnmvWQuzXik2Ms2bQxBdwTk6rnBB3mqQ3jcQs2eZ3k",
  "key11": "gaxDpwdhzt4ZZ3qgjHAi8kuxmU9gAtompWuKzN6DouUDFGUFMU7LQBWTSD9Z8hZZnLSCfNWC5HPvBXTM4kBcAt8",
  "key12": "rdz1KdLQHicW9TZRpodva5NbCYoZK73CmCXoEX5ui4rhEjFB8ufUrfrMw62haJ6vXYLJ5XNYnuvAhrfhbygj2bz",
  "key13": "4x9C7jhyMDfjfZyhq4ECeCgwmfswMfGJE9ekefM3ZKQXLhAEDoe3wJgMe1jG4PY1Qxus6V8GTM1ChuTwJbhA42WK",
  "key14": "4npg2vrCucM8NJNEZetc2LdFepuwfjnvYX71F5jhac3sv12gmCP5F4L3RAAdch2PY31W5kmzJusKauX4TE4dMGWh",
  "key15": "3TbtUBtX5xujv65nAMSTLDe8fkAnxogkuh5pCA3SqGAEaAmMbUF8Rrr3fpFYCkWshfz58MiTPbxjXR4bvPXhwNRD",
  "key16": "4T4RrcSRNTRy6f3tCNf9CEbW6KMZWzgta8D2ieBQQmMK89ukNJZNNdga8X7tGzRS96iyy5xwbToegC7F4KsjYFPG",
  "key17": "2cxzyRJ5CjSHHHfNotpaFjyyUVTYVyAy2f536BUsWLCgB1gH4pBiYWfJLPVUHmifnjuSdbD8me7ziB4pM9Uks5JZ",
  "key18": "5RxjEZBhVaqAvJxk2egsndrGZTLs76xrwJdBs7AZPkNQXGKjQkPKX5efHd9iQMBnAyz8KFkXvYAQuYhFqAk1nTxA",
  "key19": "2gb74PajTAGVPkDePdMjQVJGxowFn3PfvjtzeJeqRqhAPaEuY9XcJXbvJAemaJgZK1BDQd9ydZfCaCbgCWDZo5Yc",
  "key20": "V3fcGWTr1mBF2SYFyzLpfgusykgtt1NV8tVraa2fUVe1hjtfSTXJFkvn5UWL75ZYyahYVpXYyZTii5uvbE5wXJ6",
  "key21": "4CvVFPKX56tLVmFSo3pMEzZfy6bn4vTnsWMJipufdoQZYdwyBUXrCiLVtv1cemSz5rC4krVowmz7w7ABhPGuTRKk",
  "key22": "3HJPpkX43JNkqzLT7AdSvz7e7UGkyezV6U63uhdBrzSo7FKNivoyHdAHkZ1fFAh2itsrvcKjeuhnVG35RFzRoEHK",
  "key23": "2rcS5P9PgcEd4Ew4RRwk4LyeRfwkpTEhBkzwnpssiVp5K4q7LRueyL4yrUvgweYDs12dzdwSURrsiBGt85g1rBKF",
  "key24": "596JTQQuBY4B5J8CXHCd2sUk4VBgtxrXnGrduYPiXgvdpJSoaEGvwRTGZkD6XFLRw2sP86tnhjUqZ2hzZfhBgbu8",
  "key25": "62BHzkFLaRvM876VBn1AzR8hqr1gC9cVxuwBNHJ8hS6nKbUZxVxt6W3BHznG16o7jyyrbQAZrAuWWMBkrLHkyMxR",
  "key26": "2NX9TtP6xd2HD9fy88em83NMi58d6khaVfNLG6CzPKDVP4W3ciMhuDAb2FGRXVZW238U5CTyqU3qpRMppLK1hTUr",
  "key27": "2CLsAtoS1Fp37UzLXGvJ8thsiPkijnDD5BtcxYqmufgM3LEb167H8Py7wvmNwprWyFbpGHJERhisN9KPwHmmUELf",
  "key28": "5SBRrDPrwfdr8Lr2tFD62asoqw5NdH2hiJvmSPp3YSD2AtQ26Y1Ha1DZAnycx9pi2zucbhZUXsLSjjkuQvdRTxpH",
  "key29": "44a1dvpBA1KVSTWY9pLACcAzjAPujiJA1tqgKT5DiegWUe3zuXBgF5HeJuM2FXEMfG5EfZkXnPUGEyYDt4vrGq7k",
  "key30": "2Eo82GwLhQfJaB9YeeVEHqgogT6JgQUACqFE1p3wB9zd87QFk66mUZVHcwiKTMEFdkWCQS22fAiiQ9G21ywsAeEE",
  "key31": "4CpirWigpgDPVAST7oFbwg1W466nyqcxCZH9NxeSkS9qPfFLqE6yE74VxrztSZ9dMcSd1dPFdt4PqQhiE79dsPQ4",
  "key32": "32W7LT9DY8WqdAFnLA4fbn3Rz54ZT97uJz3zQsboqedDHBP5iT1Q8J9Pr73MEYhL5kHUFpRFYkAiq1pemeMUNhEg",
  "key33": "2jHH6mfTz3bxeWg8LzgXygRVS5mw9Tti3cUfF12R7bgFR4UnwGEJmm8pfYfKo7nfAtmyXrF3aYLRHsMxaA6f1XR3",
  "key34": "5LwByiZXMBR4MrASYQK3QAysXaxyViRJfajG1L25gQARxLxnTb4twymuPF8JfJu6Ey4FMGyTdSKDfxJy4onVXNtr",
  "key35": "4tcbHSQnATCY8k83ZNuTqN9sD7RV3L35zrQipsm56NY6ZZLKu61sYVTiXmgCqw5LnHnWNUkJtZqhvp679LbKSSDX",
  "key36": "3MEbnSLexpj23P9J2bwjHN3YGSWhuYu4RR2FBj3bbqQ387ejYrraX23EPoNAV9NqD6hCKW353KWN3RzwuGgvzCvW",
  "key37": "58zhg3phbbxEk2zNNQWZi19Jvq2G6PSNWiE7CGo6qgwLuyJCU6HL8wbGPEQeNbMLgg5muQnFkDU7hFxCBKgjmUpu"
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
