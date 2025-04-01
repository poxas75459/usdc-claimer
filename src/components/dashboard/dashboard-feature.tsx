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
    "63wpyB4XLJxKcMDW79eDu5aJBRPDDiFFRQQ77o1oPJiN86sNtQP1Z5e3nubAnsnRapo1aZCchfN9sFMLRt2yZM4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MeY8TZcwCVgQXDm6FdmQkCUUzD38XjwNuYeaLm55oYrJd6gjSWDJV7G6d9cnCYzBpvngo74JF55Y9cs5kjJKPVn",
  "key1": "ViD5ozHi2Wt8eWNHseMYudBPDF8WG5BkfyAistck2FCsFbLm3cDNvqMrA7u48PjA9SmYuntkxzopUx7UNhNia8A",
  "key2": "2gvBgWXcrTfbsBMhxt4go1mAWY6bFaJisScm6tnqpKXzqve3RTutd523rF3hcAx5TFobTWARziv8KgD68foaX2tF",
  "key3": "Xy1EhhxDqBkFWppZhqTnqRB2gWA2CRwFWpZE7fdPLBw3if35iyPNWp1GAqzNdGeRpbYpgpnt9MoeMpuQFoNKZPR",
  "key4": "4U9UVQvPddqGxWgKzrksWWrFhEjE5aAeaXqcdC4X74cydNsGyZ2pvskV3tRd5Y7pTnNQZd8mWnrSBNFduFUo1RPi",
  "key5": "USRc5LvL8ZXQdQbY2M2yqCgNQT2BQiYvxCuzfDzksQ5z3tFNryxdwm6gqFVF6YFWMus7JEVTB6p8F6fRPFPW8PT",
  "key6": "SotpegMQLsxnFcyg49bxMQFzbm2BGM5wFhTsU83Ma4TrGVLdWp1qGoWwfi8zqtjFSs3RAoViWCa1UEV2eVJk8tr",
  "key7": "3mSHj3UBNV4d7NCWfqCzQ8baaxvjvpdkXtMpK9JeCmuhsWp6TzG9zp5jJvdWUQ3sG7rWMamJYGNk8neHos5WCFwM",
  "key8": "3vR3noQLDvhWWnZnCbFwTXTWptFwdBbisTEEeMxZMu8aLYeWgquDEvxKavFDCqr66LCozVLpLdDHX9zbjPB4PjkY",
  "key9": "XuZhbC3rUhqmoYNMqx9qxVy3UrTiwcxt5Hdcd9rTedEMBMjJdLirK9ApkutjXgPDzahbQgbapuJATQ9UL38dRPq",
  "key10": "45prjk2yJsiUpXYiEAhVMX9MbbbMTUD9U9ktTj5iWB9j35Y1s4kvVUnRZCELZR2vRVgAiBEVY1JyGAvWyjZiJjBK",
  "key11": "3JDXXxyXsj7wJuVxBni6Br56wJ6Ag9xHhb1psjC8PwKVtoWs8Zc2sxCHWseChcrjkuMUt1Bm68KGFo6o7WosxWMj",
  "key12": "4mWptsN7vWvS9vJ8XSwyrrnCgN7Qsd8b6cmJ73ALYVL12N33cLHvbD4uhzGzwNsYoiRvm2AWEggTj17g7PEvNvqL",
  "key13": "3DR5bXVuFEW7qLoyeESSeRm8F6ciNb6ZXkrVsqLxgEY76tA7U9L6iqPUsdZjJE4vjkcG4S6eAMB2zUR94mum4Nfs",
  "key14": "4DQeE6dFqwSBqgkbbzNJ4dpUDXzZZTEphVR7bEGQbcGw2KRj6ayDinjH6ohvyPxFdMXPuMmqeXgVHVpbJZWnnuam",
  "key15": "4yPSiL3xVCmCVxXyL8QD14xN3tjDuGDVFKSHgynz22oU8N4D4FPFQehK9QMNS7jpquREmCUR1xCEonjubt1R6KSC",
  "key16": "55zMpdGqbmTX3AWbxyHxQS2oxU4gFqxwrQFhJMxWFt5BQEGeJKcDgmU2ji9t3qmQa9mF4ZUCh7qfggdMD9xWCBYr",
  "key17": "4jmy269rwqypjHbyAfzsHkKdfuyu24PSD6xRsxPrjgJpHFnjDekf9Joq6Zxtcrsq9pA2VJp3fpsxJgGxBrYYYu8t",
  "key18": "4Q9fmFkncryLfySdDvFYoy5eoX7wgAxCUyseaRHVT54iwjuzP6QKSnTyEJPzMvmRgbaX6MbJ4xfw98PetzPjSG5e",
  "key19": "3NN5tKUsv7WqiuHudcmQwnGHwm9PFBgJn2KUgNhDcusCt54wnRbX66urmf4qW6273KVwyBfTxQN5XoLkYzLVNQ2h",
  "key20": "4QYGYaKuCqEBroETNBKm6zEnDk46NXZdFyJh69jvyBQH2dTZ12uZnzp219YDWw9w3MqX8J6sBVZHxZKneS3pYxhZ",
  "key21": "31xgpFw1vtde5NDRpt4G5WCc4iCSyzTSd2cmu12r4BKocRzHLo7k4bCK9TSQVPZcrqwRCufaUNr5zNybhCrnGvAW",
  "key22": "2kWVD9YXp9md6kqMtKmGdGpSXotUNBFUQxCZn8jVshA5Y9gWYLfuQWbF2VE6ckdSfAHzuL2P3UoDbSryLNYNN3QX",
  "key23": "5D2GCVnvT97ZvaGq5nJp6VHc5KLJ7TmpjiqAMvzRzdhdRmdDswUDqagXWuWAvN6j86pyavRgDn24adzKhJuiu5dX",
  "key24": "2sMSWSSVN4VwkuV2Hke4NN1M7igE2ZKB5FtXPGoqVEgqVaDCwvWhGtsxG5a1LgEhacHZNJJTBkV2CG6yhUGw5GrE",
  "key25": "bhSmHpfzwo1HZzCNta8hoq8PmeMjAmsQeqUB7voHTSM2yZnXWoUzHV9qDyWaJN9oWvwnwmC82quW5y63fBskouy",
  "key26": "3Yhah41p3HrEJWqZhDieBkMBTPJCqtmr3rUE9G3CYgUJEfDJjVky9LUPiz824dWpTjVKnjbZxYCwBGTSR3c6qaM8",
  "key27": "2CMQFGviYnUNJBnGcHBi3QWWKsx8htfz7YcrAx4iMZFkjzKukpNxWR1g7ozB2Jksy7MxrP4FJTYxXcHyByvDJPaJ"
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
