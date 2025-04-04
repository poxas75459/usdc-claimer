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
    "VnX1gmVMLEeU1zYw993DYJQhqLj7TuVuEjYV3B24ex8GGY5s6TSKaRyg5RW2PoH9qZpbMmPsSztQdfVy4PATm4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u7DajK1F5LHsd9EEVXNBym7rfznrQDK1bv9MRvGhXskK4FtDjhP7zDJp924QcDYTN4aHEBi4Q4oDjmwoHuufPR6",
  "key1": "2ymBhBKMaEEXEnYrfS2vU3JBRoVyMg6QoJ6uotBThg5sLwa8Heq2SJxffNXBN3hD2ssdvFuaqQkUXzdXg5GyLqBX",
  "key2": "5E4PD199LkVvvc4gXQdngx3oRz9vrnaU42jENXS54nmTBBEGt3aJkeUx4obPtPVC8TXhf4XVAbS7mBfYHrwWoAyT",
  "key3": "3cDjk7VSPSXHPybHh7WrvtyNC2LhpnJnjQ5mWs17tQ2Yj5ApWUcVMnfKX3ENMzLrdMPiQFtqaqd7KfEHL9qw9b7r",
  "key4": "4MCH8cveyW6Jd66BDTXRWZ5yYg1VKQgkFCrMrTD1x3gTVpFg8uu7tHN9tyh9ZP7ovhHcTStRD18xgTi1Crrg4jrK",
  "key5": "4mYCiBWSqrW6Lx6zHrwu8QhTxht8cHbhoDTxvbD1ZHt5bveECeeb8zu2au9zpAbKkJzfKrfFfNBYALz2KHZPWTvm",
  "key6": "4XEwD2KXE7D3YsRi92KAwTkUV6GVYGKFeTzmfGYp6xBpm95KD4u646BwWs5LyjAkjLmacKtmuA8aJMFB4ddyUfrH",
  "key7": "U7V1cnT29fkcDVoJcBhqhsq5L1WGx7EU3qz2kqy6RQzfYpwcorGz3pV758hnJpf83Lk7YzUq7TR1uwfER8j574B",
  "key8": "66QiSfqwzdfxWCuP3Uwbd6beyaNJ6sv9GGHCsVJtb7dKg4Ez3svV2rjjySPPP4dRLzJ8JQiMsd7o53TqX9ZrVYmm",
  "key9": "53BbY8qHbu8P2FYh4i8oAKiH6dYWgoXDcTayFQuzU8gn82ko8yP5xMqe4maLPiQyLrUfKNyKj8ezVguUTNJjNid",
  "key10": "CR9iJSZ7sfkrXwbGcxVSw47iBXnpaZdReQg95n9Kghs1eXU8jfVW71uHnw8kwyrigLqVwQZpp9BzTsaZekuro49",
  "key11": "2uvrGnXYXc2W1M5R339nw4xAAnqCXvxb5W5tGd1KJZThAnHm9fcHREzKCHcxmHdP8dtJDHWLv8c1r4GfmfARmvWv",
  "key12": "5LJuDNDEFVhuKPDu39vBZ6Qu2XEZMrH9NmtCpYWa2YjGPksSKZbJDNGK8hm2dAgkD5eh9Z4uYUd8N1i7DrTntvZL",
  "key13": "5UsjQHHMPDyQ2ZsfVP6bwVADAoFSkyBfZzY1XJ2e9xxkDxYhw9sLy99RFCVqFFaSQxFodux6zGMamvtU8dtsFczM",
  "key14": "CxL2pvd8mcG915bYNpcQuvTetXwRTqrCU4JGbQ4xa7us8TJTAZxJ8d55s4uAw1vsNLHDZba4Q6gURnW3vhATjVv",
  "key15": "RzZzQkW1nVoMxqf8M8BsvnZ6eeQ8NFJbaP4Mh2VXfPQLgDzuxfcvLRR6GicLd9U7byN1UoeCqAAuNi82q4e2JRF",
  "key16": "5oUGnLi9La8QUJ6XarYFskKUbq4DRCqvewwuBCdo8fnvF9nAjyvNKXH9mHjzyVotedtFjQA1KC4qfhppiECa8Azh",
  "key17": "2pE5DFctqCQxkqJVqQdux9aqhsTBprk3K6dCCzDVpuRVdWb9yf5AsYB7oCgFEvPxWb7H7qMgVLXHexsdUnbgS4r5",
  "key18": "5pja8HzoWaRV7jjqcM5jiYCgUwtRXry1ChGGW4rxLAw8FqnXZpjMPB3gpRvJKcTha9Q9zR5wM2FZbVw5uqqQBrhV",
  "key19": "5qmVV6vsUW3Tvi7AWnUrogza1umKMDVhfgPNdeZbc2Esw5R6rrL4L7vRTENGoVvrs7PvZx2oaF5ocSyQ4K97DxKF",
  "key20": "JiRHt2CG7QvgzjzgTV3uDtQkvUpDZQCACnLuqbBdNSv2c7Jxm2uTk3fPVPKAwTtHXAQpjhbDAaCoFEgnZMbwxRK",
  "key21": "4Rixbb371CeJV4a96qn8FesTnfgcMkXeJk7HyAXcyuSJrtSCNZU271awsVVdbjsRBmdi4ACW7aRqLmhhNMe1zDK2",
  "key22": "5EvhT2s31h5tZPXiu69MLFVxb7QW3r8wN8hGg8htpWrNZf8XM3ztcFdyV6M17iVF9S9hoEVS288Ftrq5X88ggUuH",
  "key23": "2jGguyH1rYb3Svg83yHBuZDSUya3hP4oNWmZ3z6DD9dnpmxffsy8rkMNFwWTh3utGKTVszQAUri3tRHZog66mLGg",
  "key24": "2Et2RjszRFf3DgCk4ttgLbR1ge3jsDJTQimxQYhs1Y6W9QgDwtFar5rdvs6MXQWxgnRFwHPL1fAfM12uKmSNHhUX",
  "key25": "5zhkSHFN1yTNoHDZDvQ7xpyokACuSUJ1D8QpUgwnDfCDp1bKEVzav7hJQZ5nkAxqNsNv2b4jSHRnpu6UAz8TFRQv",
  "key26": "36J9siWjP8Q8yFnV947yE3PuTA7GoY6yGJxAwWKC3vbrDYA6smYS46TvrXsjCgyzrvk615mFcypQzJktx5fFwVxu",
  "key27": "4Crvgo1ifvcZ9ZCc76Pq6G2ezbXQu8pkmXMNHsA5jaxEwdJJ8bR2NRe1suiosfZX6MowtMw5L5LKggY7z9sgNNiD",
  "key28": "4HhNHQFpztayjzPRkhcdr5i6tR8xT5HJKJs3v1t1ABEvwjrhw6M829VRChp4ZnAvqHX7ZUYfTroqpXvnfUwH6HWj",
  "key29": "2UH7sQqMvSWrZrBifY4KYJYP6UPm8c2Vi6AiB6k5PxE4dcYVo8gzJs3n5q3nEQFFSTGvPJtPDYPmJwcWMccqsUWX",
  "key30": "5ceSMs1dqQsPcP5mkkvJXK7mdHf1Ym6QseZTTZKRoSivbVDpDwAWz8G4ujRe4YfFZ86gPcfJgPKLDPLNgD4sx4k2",
  "key31": "38ahS8MqADrQRGqjqqL2fVFYxG1Rr12Jc3MVrvKqiYDRz1YjCwmAoHnGGwpphsDZPTqvVZBcXCcM4cLyHKWCr8Q",
  "key32": "2C8ce72kTxN9TaEMGPCT4kTgFvY6S8ccAatm9Phuz6pHdJwQVdVxLMoCHk1kLT4J2DXWYbPRrXvsmQBjbJuVQ585",
  "key33": "xB9pS66TXiVFm4RZKiS12jARTrPWCkfw2opzeg96e9Hq65PgaY5yDeVfcvm85vBnLAiWwuJQgP4GdhjHAd5dPS8",
  "key34": "4EH5RpP4WN6mtp7WvTR7gzTKYGrZoxoUSbY67rDwKqhK3sGw9XAX6QmDiYkzhw5sAynLDnRhoy4M8a3ii2dbTNLY",
  "key35": "4H6GS4EhvmqHeLhBusoqPQDjECNV86bfaapBfWXnfMTrtK8KtwtTo6vobLsm9twZxuiERXE1xPxfF9KJEuuuYdT8",
  "key36": "2y9ESn9qh64ZaWnFjhMmQ43iasPuxB7uvLtsS6DWvxtwFNWf5bCVWf8Q4BhyLoNEPmDyW1xAdSZEEaD2dg4Zk3WN",
  "key37": "5RYSWcBfMPSPb3rgd5xrqWFWQGd51yWtog68F9jwjA6T5iRFttAZSLR1AC1caKe5mBrk1mVHL22yiXE1M897iWtg",
  "key38": "5oLadNkzkn2oDhZd49uoWNAiVYtcTu2Bviq2mq67ZK2Ca2nrWnzqCqEW6jh1UqpKBvgzy8txfQ6CxExdqsuTGdXw",
  "key39": "Rr5JUBe1DzLA2opBf7jS4rtYvMhd8nvJYdTwE5mLnbSiKzfmNyDUaE6SuWf6QV7ZG254wUM1931Y2czoqNQ4X17",
  "key40": "4i5YgnkPjshP4RVbEBTmqkNYPRZz6zveeMqrG5w9bvDyrUQYuzdUNBngaeK67kak2oxfujcqLmQMLtUTXnXp75xJ",
  "key41": "2by5MbwB9smgBujzGcLYWvx8URq5juiD54HVhT7qqaXhfZZB5z8nZaXPe34RYrsNLaDqWoTVJfXi8Nik5FHYpEVe",
  "key42": "3vbac1jZCAGmxnqpcd4SidC1vW24g3cU11PojoFAxpr47MupZAbF2tsFtVcUZ5PaVYLiBEzsidadtWTmArM5qraa",
  "key43": "4tnmWsgbmJ4Wc1QDf9AkwmjKCbGvLjsjPqj6kHEX1gxBnRPvYHsC45q6KoRujLVa63dZNbQeZbkYcdqcvGcnnjHq"
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
