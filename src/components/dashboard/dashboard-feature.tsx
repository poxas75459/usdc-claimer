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
    "2ZFUQB2rrL3Rx2vruDaEv2UEupjqcC8KTstUSGYQBZKnRxoEWrWxTA4L9Yh5TrJwcS2DA2mosP6xoKdn4qNQhm9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cy6vBThcR8eWgUPHrf2tUdArPbHgXAcQuyL3ArhVtvHWtZRQmfmAUhUbh4xGbmrJAn6AEuGsFmoJWyQ29Y572am",
  "key1": "6P1BsUP5W1BSEJL8Pp19qentXdfJg9zPtC7TeefNGskYdWxfhP81Mnsypwo2LKpSQET2jmqNb5bqhMLYrrC4WLL",
  "key2": "2L8vZcSVPVJnsPP12E2jMFVu6bD4rtqmT2LVdk93uKwKWzS2s5YvHNYqyUycxMSs9sTMNMygZSwvY18W4Tqctx4H",
  "key3": "2Mhgsh9VmRisp2QnpjPLN8PZhdBStHWC8S3HzsKaKcFLTDqGGELbZ54ag2GzPPY1qRR21scbaypmJpeGLfNDkTGV",
  "key4": "2SigACscLVoRioNh7s9BqKwrNAcYUmsfXMcnB7guFpNEAfJuVGKXk5htiYirrjDDnD33KPJ2ZLXQ3T5H9iGGcpqe",
  "key5": "3hLeQBEagrk4MsovGH7a7QfPAHwq21j4JC7LTJZDGhUtckUj3AmHJKWnpaGrfEwnAzfR9TcSPEhoF6WvUt1N6jB5",
  "key6": "4ZkRCBQBjBU446qzVuD2BduJhavRuyiEPeLpRG1Kduby9jVPXdUrpERNFEGyMkL2iUaEwbeFnpT2kLgjvvmX3uTR",
  "key7": "C5EGr61qMxuMkVH6eVCVXJmyeTeK5S8qEHoJ7RMxJeyNLbgXpmmUEP6CTCYsQWxwnZLEAmChKuD6BxFiAag72Ci",
  "key8": "4ebaTg6rYknueZeYNCSDKjYx6QMXzPfqxCj5Mk4nPt68cWBv4AVp7s83eTUhKPHbvoK6BcUqWq9TNSbnd6SqtDdA",
  "key9": "2aTSW1DbM9uAbCUz4RbS6VK18JbZZTfyTmFqM7XMGFGpBvTaRYANNyt7mpf8Ndf6KseW1k5Mvtkvjg9bPBnYGibK",
  "key10": "9VXkKS9hnpVKk8pW3dwN9ro7BLLVXJq1b3rxxDVKZ5mNn8fUYoU3fLW7JYzYqVH5c2Cud9gwtYPk6wCRvZqpu4A",
  "key11": "3pj2WTP6JyZLvzj3AAdXRBNwHWcFx1po6JPE7sVhbANPchfPk9L8za7k9BSdFCqeqdEFXvggFHv2caSCf2v3v1mF",
  "key12": "4onG2VumDrqkNULPkbc21rf4gnxyCGb7oF4Ztu2yGziq65DNgcXXDBT4f9acpvuiTZYWvqrRnK3b4c2EuhjoaxQu",
  "key13": "4YjPY2v3rnLaeMFm7S3YHRcPuA2d6ZFtmvu94nkLMFh25Hu4C4qsrn5jG8pjpFgcKGTv5oU74jhTQHpBfX9kYZ3P",
  "key14": "3e4ueiM2VL424eDuixurGSQ7j3eyRiZ86EnZwQ3czVVaf6H48tDAJH95kxAKSU5W5HCLwuTgBMP6sQFzrvibcTSu",
  "key15": "2RDECJKvJA6Kmzim9EhQ1AwcnFuWp45hU65KjpJvC7ibvF3yq7usxCM4XfmVHNk3pxNGPMdPcYbj8NQunWg3pHsw",
  "key16": "5UoArNPY2YwkgQzo7bnaDSY2GK3NJaB31aPbDGDckner2wrG7Xwavjd9Sa5yK8wdV2uut9pfx5SJAikSpx38NUua",
  "key17": "54Dx1Ma6DtQ9AvdZHjhByibMfnGB7WChheANAJri662vY7trxxrh8UD6KfPRoptoAZJc74EJ6n1oWo6RbN1EuqMj",
  "key18": "5A2n9MQJPvkFi2FzhdwUpxoDg8HA6wyuVU4R1eAu8av6Dc8Vqwno1Vt5afFykmVrsZMmstf1mZipTnUDvF4GmD31",
  "key19": "3fCsS8B9ndgcRGqvHHqhKxG38aJocxiQ7NWrZrXrcmEJCCtiNYKwWcyMR9Ld4VgpSmVBAB4iXshQp9BaNdE9ZNg8",
  "key20": "341vwNWyFByMXaa3s5U2A3tapALuNKrL5EeZaPPZAtv67bAZ24rvCzFdkKYtdh45UKirts62VPPJXBoV5A2fgPX2",
  "key21": "3NnUBGL8sns6dHZWy4uR2QXEzLnrmPm8knpu68JPr8omvZGhEi8qhPBvM7Zkf8Pog95TnD3WoLf7CsCKY7Mn5NS3",
  "key22": "2NS9PWG5XwaqGME1ewetExGTDSDoAWgHVRjVp9SE8tpmfFnVxtX3XBjmR5F9EHAnGGtBCqXxM9GKy5q23ffX1gZU",
  "key23": "3g6cmEovEnmaDLCyDyB7ipHgHsuxy6cVCJw743dr8G6VEZQeRbHWUWVuxgHVKVHV7NUEQmBXPkF54HNjkQNytnqr",
  "key24": "3hEZjwKM26dLdXLHuR3Sv4WJPGiLKEAxKAGT9qkQ3YmPLEWFtkRPMbUiTPGLgzuwTCRvsdHHGVBkkAnC9hxzX3Sn",
  "key25": "3Ud35XN5vE6pVU5NyUZ7qnj9sj5nf6EK3AdwPPQK2jcFi8dsZw1WDxCTnV1PiMx52tsKTKndTwLeTMx1yS8Nch1j",
  "key26": "3DzrdaM6S7bbigsGhMieuvUmSCAAkncBXpevbK26dHC7ntYhFCHjb2nEB31A3HaiTCfG5tUkCvzPAKaeZyu6bMMP"
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
