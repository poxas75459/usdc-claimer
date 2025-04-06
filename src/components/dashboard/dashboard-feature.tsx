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
    "3dm7kqHiWD7mExuL7YCmgZcNfLzCtMWTxffSkbmEUbVq2fPz3egnWUaMRtCWmARSMcVMpygzZAAVo3M7pq9ftPZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nZE6Mj328GMC9ixfFW5XxgiaJWQe3KQpcsdNZgTSsxqW4qDFS591kubKwmhRz8MTUJyJYJjgNTZn6RaNwPmxURT",
  "key1": "2RJhEhxXCimUaW7jK6U39WqeNnDf7qjsW1urPb9ogzjFfmK81FRvqedDiaYnnGeNhPVnoewcF9QkLBUJ6R8eCg55",
  "key2": "puLRycq4xxHBmTSyyZG4y4G9MaYNotLtJbgN75EhkVkyuQ9BPfhqDdDyopzFYsi1Yh2Lv2hqHQhQifTwXgcPxyh",
  "key3": "tdz4pHHqE4vPRQBhQDcr4pf3YwLaMsQHMFSacWq7jTcZj9QgnRtn6mm95rBmgugACK2B9Rc7BBAdnhryFnZQtrN",
  "key4": "3J3RknwFg9AV2JHTMtFTd2Ngx7MfoMLc2WNBHPPZJemrajvsijzQ323Ax2XtQt5Ya52thEaecNS2Vk5mRknhppWX",
  "key5": "7AhTVKMCQ5N4fEmuVvj5gtAipxqVGffsZcx7C9eB5jNNVUqGDuNUwR5xw1LBNvrg5rcbX2eSw5P3DNh9xLonChi",
  "key6": "2ifJfWPwcJKQwZfWQUbFN1ydVJiv52k8F9cii93bXxo3hGFRfMDCf6PxBvd622GuratWmZ56CZ89Y1iTLs1vuTDc",
  "key7": "4Ds5bsvuu9hgAbg32dbYD3Ga7sERs7vaT4fEd239rQvx3VEB4wuSJ9Pi1u9Dj7P2FsuYC1THmZYeCjqr8ifcZM2W",
  "key8": "4d4BqjRDJXy7n2ojmnBcsDy82o5S13SsVo85J2dLJkRmNfCo2s781t7JNsDNtJMieCYJQ539ppoQT8RGBhwU9HJJ",
  "key9": "2UFjVMhomdKmDYc1NMxpc2LbswCL2HxfPkwfhPJi96tnRZrMkh4ZR1MPj2WfeVQpy1CwVMoVGNREKs469Jt4MPnB",
  "key10": "rByJnoDTPm9a1zQfBznrtMQm4C6XeLryJaqZKymBCXPvBwnxqsP3nXMFQt7NKTZEKVpsxi113xJ5RJC4f3s5Sbi",
  "key11": "5CiSE67KZj4zGGwuRhVVcq4AhCYkVaxrygJZsTTtKd7Tu1mEHwnz8gTLYcNfnJpZFzEokLRofkJLmNu5CcCZRFzg",
  "key12": "4ESfKFnUEAHVaq6p7ERLGEhJTC3e9d1x9m7r1Dgow4iGz6kPMhU2bfRtzFRTNr8MvzWT2DC8wL4dSAbadmxVDu5v",
  "key13": "ttHkaRRe68gv4LzXxcztfQqKbWjD23Vu6BSxuqMsbJqDHCJrrgvGuiL9STpeif9QLJqx8imhGaHt1eJJrwy9yFk",
  "key14": "3JMn1A2wN66C5kpjDAVnQufjg8siiNF3fHcBGg7BBVrj2Z9BpvfWFGrrnbgFcuR2KKvHkZvk5K69bNbVSKz6JjUZ",
  "key15": "FdKnFG2yu4cCfeyHG8vn5pvgcMCzWs8gbqE59Ub3mJic8UdFuckzQh9ercKRmHPuef4jhW5MVpYzNxbBsmL7goi",
  "key16": "2jB6EAWucM9kdcqynpPDiogQVzskbnu2KehFSmrFoLFDNetTv3YPHnmsb2bB8tfgz3yWr3Sy1cwfAHozMSy1nfUE",
  "key17": "qyiEnFa8s4z8kFpAUZnHj74i77p967BeaZ5MMkC6z2rPz6bCCNjZXmMP9MyKCzejpZVeufV46uY7LnWGCZ7ADmD",
  "key18": "4vCPEAgB9CPsbKuAQJSHJx9g2XTz19Ff2y7tUhQJYkMQBnm9myA1xPo9zeeQW5jndDvtaQyZypeaVTSct3Ape8oB",
  "key19": "5oGC4JFfLcqt2k5KDH83YKY41waSNYjWvjVvKqbCPVJx7PMHjC2y9cUR1Khrpj8F9MKeZWrrzYQzMszudGH7Z2ZK",
  "key20": "2sBvpS7DJ55A5qvSgcrDN1CyYeGvxjfag4oyn3D6Qczhg9zJDhy6GPpDRo82oE2JsnRccT7VbgsJUrAAJ4w48VF6",
  "key21": "47qzaKAy5tFwT43ddP5a84YmpjP59PYFMDGggyvN9uVZnt9vw6V2Yippz3kPvfdJNHBX97F6FYMTgodtdDrSEpsV",
  "key22": "4uS68azT6p9NGWzgk1dpS82UyTG6eCGStCo6T53iA3x8Tt7b9Cra9A1Xv8HhPa3gweurHwZxiV3fgxTQz8iDuMBy",
  "key23": "2m7fAXGJN2PmfELz2Y6UtRsTrAS2YoAcdkofLrCF32pqtwEGKUFJ8iyCwF6KjtP6ds5e81pkMuvzmMHKCRdewDj1",
  "key24": "4Sxf8zpzzjHs6QZugJdy76Awxb6YgQwYTMta3Ni2HfqpqEFQ5ATWtftoqhrzAsvVGCxUVNFik8KtULj8vntHmx9e",
  "key25": "UbGxPP2VHvBmxJbLcc1hQWwTg8yZCrNf8cfrBfTzdTivG8wWvbAV85tNyTLQroqzD4JkvX4GuCyKQshuEtEm2Ja",
  "key26": "5Eb6uxdH8kUEreBQu1YpxfzTRUwmH4gzTpstywfQrJJELwBKJD4Cfgfo9mqVkUwag3M3eovVJjaYtXux63sDz2Ko",
  "key27": "5PqM8zswwXBR3969zMQP8T6e48sx8zCrDjZxCzv6sX398P7gyfqeuGtnKuDdPbpUmXyT1hvitvyBgmTA9QQGPSUF"
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
