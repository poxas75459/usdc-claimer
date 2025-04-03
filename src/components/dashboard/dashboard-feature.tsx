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
    "4adF14c8tzW2oMuirvxfeRhFBGZApEYqTnsvJNAM9wqXeQGiS2v5wdwZQpetaChE6Turz5XW85umrxBkcvJuTmuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rLgtoUqmui19MrfYkvLuCa2ZWeXSAnJcNysvjjsYpQ9qU3iG5vqTy3LbvJjURB4RNfwdEqeEyzk7wedLhzi1Z3E",
  "key1": "5evuqydsTmKFpR1vBPCBc7Q2esJS2U9j1PGEv5MdgbwnT7uSiQDpjddoiHhdonMk7ptdyybAAamGgNgTrUU9met8",
  "key2": "qBzva8HFWTrEmrbsuN1AN2sxx92qSPWLZuhPUwRK5TyecVdBNh7FRvAuBZZVofd7exN7DTgyPXqR3TD3rrYr7qi",
  "key3": "2VxiGA4UrKhiPk33oTd4htMW854ho1ARtf44Di6zvvEypRGpLHkRmnTLdSxWaMTAnYeAvEvNZEf3BWz3Nu4rGk67",
  "key4": "5bSSHfVoVuhYv2KxZewYTr28wU5LyGKH7FdAvfWAMgAHenjhBUw11RPmkiyBSzhPQFnR3HB9Ne32LFPustqhYFzP",
  "key5": "2fYTjQV3i6JJVvVn9szwU2nuXCvm3QkPXupuswL7MWga5RNkTwqtad9p2hmcYdJBRWKpLtDJWiaGeNHfRKAhBnNk",
  "key6": "2ASj16T8SpTCBmkPMJ5X2B7E6qJ2YpDS5LMFpMYMMZ3cr4GjgUrBowUng6BJUVSjmsFhTkaJmH7zgd6b5qm1Ktb9",
  "key7": "4xcoNhYZvvgFWMs2Ct1GFcqnEqm5CmFjdoF27wZ7LxHBiXtg7w3j3wggtQfCa1iRmXkwFy44zDrxbsErsWPkFExm",
  "key8": "2tmNqp3FeEyJ3MzFwKcqx41UY8ArsDDEWAkgQ8bRJRSEzSVfCMcMn6dhveB328G2cGHQvXpFhJAwiAsCirttZi6N",
  "key9": "3GkQ5WTa1JFEC5QNshCpDx7RsSd5SumFgYyeDpJ8U4wUzdDyufdv9PrTQuAePowEVjNnDSRtJEov8ewxMKjSTfyM",
  "key10": "2yGi7kj6CvG9HQEPuEFXbdjCZAP8tdPCHCoMKtsQiS5wAPhZQb4kLKat2bg5NdeECcRseo9VWdntCUhaJa2VheKe",
  "key11": "4av2ssiBfFPG84xyCdCqEeUANaZ7XBBpPDei8GHbUQg4nasJUC9r4b2a6CFBQzHHJf3tosJfA2Rs2Q1ifDKE1C5V",
  "key12": "2eLVtAbjBuKAssqZRCcrt3c1MMZhXqvd6fUVrZXdkj4NaSb4X5hFdfTnKTcERSe2hn2bWR6STwoLeeF6PLbYNRYU",
  "key13": "3aByTcqW5FfMa3fTCaS4jfx6nZGFQvpLSt3da5g4AZnjxCZhMUw66SrhApBoKnsHRPEeWu6M1jwyuYyVeJ64yYLb",
  "key14": "5BAAPdYtSphMVD5niXkCENMdmcT2YYLKjotFvYGwyqoNqk9THHVnSxpuGfhJNeb8c9u5toBxWaakg3jcVgN7isfj",
  "key15": "peQB6BgzdSyQyq3oSvqmoRV6XGsPEcGXScStHTbHuGmvHVEhNrVie24HybJXnQqbE9PzomdteVx5xAGe6uowns9",
  "key16": "HXMXUvT8RrGuRWkguYtUfom6Dymz5nzpET5e4MkPEjRfK6QKcLGdff9iCUWraST9nLgzNkXb47Tv86XZXUYxmuC",
  "key17": "dmuixNSimnF5cxi3WKRvFiWMM3GYPwRnZsAR8D33NC1M8XPgL94ZHfdPgZBjhU57uYWDQwBqRFM5AQ6xtZDNwiB",
  "key18": "4xspvTtEZqDm6cmkw7JEcmTd7nsNUdubduAeif4YiY3HrYWfSVrzY2Nzgtz9VQEGVYe3K9UpnNQpFLUKLfx4nNL4",
  "key19": "2WRvAKBfwjR8YMWtkRNibGcB8PTSbJtEakrzBUc8mCfBZMUqMTbKQE7u9ADpDDK8nXqXHynusEi32jFn5zp9Kf4v",
  "key20": "K66V4a5SCTCwN1xyJoJhq2Pj9oPhtWhZDVu3QCkc8UtK86r69WoNNqeZQnQe6asV9zz8REj36RH8GaQ2Fri5n1Z",
  "key21": "4roUiEz2LiX1HEM7GepoUncY2V96HoruTEMjuEihqrVVwfxYKNb37C75o9QgRRMVCLeFJBP27ZQAvs9DPWtsTqqK",
  "key22": "arisWi5ZyMLM5qMJrS4YwjfUbN467XmqgDfS7SYjx1o31cCUxw9gf1v23jYzQPu4v4mnTUn9ao2f2q1bgvnHTZo",
  "key23": "2Tt87FNYSBnmDx7ZdCA157nEdxWFYq5G1NkgobAmVWqMzbYMRNDfnRDJLePCf6qo58aRmCobgrJMxmt88YwsB2Yn",
  "key24": "5hHtsZBEcUesF9jC9jWokedjRydXxGvf5cAZgoNug1JkPXjRkjnHpAcXN5bnEZhCZfni3UWUgJDaiWFiPvrraJEZ",
  "key25": "4zxsFy2T6oeah5kHAo5s6ZEATU4FohAkSJKE2f4cSVbzHpScoRm7jAayiC7XXAVdbxtpUZEiUXVF8WBU6X31dRBf",
  "key26": "2zdYk9emVWXcjpyDDcdXBZA4Q2KFyGZpZqYyMdZCPCL9PRPcSwN1ZC3mZ6H44UwD23PKyKb4uBvc4ukY9Tb91S9c",
  "key27": "25EaAHSci3wcJ8rEgST2qPWFgGkmLWfvAc2tdN5jiUmUMtztSkB6XjG5sJ9q1E2JmkACJemSKJkz4FJw5d9aSLSz",
  "key28": "615tBvJ7ecpEVCx3dRiKWeejwQL6GdL8gjfi85oUUiPGGJAw9JGLrbTL84FBTEVXqs2B1ST7c5LS4oHaHvMtcBXU",
  "key29": "3ydvjADtC3y4CdQc4UNHLnWfmpBuuJq9N2DpB5oQz8ASkKm8heooYS3Eh9M3Ea9oUhFkkiRTs6LFzLyMopnBSQpp",
  "key30": "2tdxWPbqxVrfSqhKrEsF2N4WstU9Y195Xuj7qekkeTLWE73p66qUKgmHyXgWXMTMBAB9MFqWZFqrKhXx6Mq1srP9",
  "key31": "5YAoLvHZ41vnamwr1YV7kZX9RKh9kQHdumDwna6Cxn7fEmHnq5drCFTfMXEGRCfyWuHc27BjHXj3uSE4jnTK5yGP",
  "key32": "2SGSzGAb3SAve55RNHXAgqUyQVNa76uTWeuH48PRe9o5FiSVkDskkpAddHreYaNX9RRuitpQTgPcK9ZLWN4AQYE4"
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
