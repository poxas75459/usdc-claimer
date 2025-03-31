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
    "6uKwa75k2xSBvfcKgXdLpgJuUaKzGJwu71xyv6UFhrMvZrnLTKDFFRUVGjxwB9vUJTy874JSBXTspue1zGGS8vd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fvpc2cpfXYVBVLVtR8snhkLhPX9G6vbh6KT483eomUjwaZFFa3MMtxKvBE4pXu3HNwLREWq2KPV6myekEq19MNd",
  "key1": "ZYCXLRsLpArFzRcBzg2MM7TfguA82otmYmB7Mf3kRYHDzXDyLWm5EaDjtmuGwXkRegxxNeMx3uhosVDYdCTAbiT",
  "key2": "ZTHHGU554WEk9eJkNsFGLzVjeTJw95Mvwaq46WfzqyFCjjcX1q5LU9GdjoYezf9LvHk6UzbKZ8ZmFEbw5jqxaE4",
  "key3": "2MxSXg22Pen6VCHUWbTp1jBHh1yrjgmk6y1DqX4c5nQtXYERUeq44F2UjaA73N66Sj4wXYLwTUAMFdXHCtB7shag",
  "key4": "dtbfnSJBDmWz16TMNjsNcBgn5b2xAVUj22XpdKNTcs9jM9vCfkWkBKWfNhp3JiE3eXxAsfPypLfzXragQCPZem5",
  "key5": "5LYdJG3rYVjrK6h5UE21TFiSnMQ1jNX67h6XHrGXjjwnRfwdnezhAxPS5MGNsXhVAwJGWow116gpUhQffQfxdjHc",
  "key6": "2SKxGxNi16s3jjwUDoBx9Pgqep5XzvdZD3SB9fvGXpUeP2oK7Ns576oES9mQApXsYs4csBoNffPkjU41xP4kFTXz",
  "key7": "5p9kbQXsYLhfhycjy31oUR4dC6mm4k6TcRffcjRSGdJZNYCk4Ddh6eZdsnape8MCBo6rsiZzN2Cxg8zh6U3h85wD",
  "key8": "2jYnDqmLChnPWTu4vxqNHF1s8UrCzD4qwM6oTicbE9CcwDDXj2UCWZq5DLHm1i3FNH6z3qABX27EfYD85X6CzL6V",
  "key9": "5kqfqQ4zonMMscKM2nLTvmPbbS9Z34JiAypUnhBoUENGD17VJJkyBE8SDJfpR4y6DLwmiJ7RW75iXSGc7VJuCh1",
  "key10": "wWgjq1EETUNCR5Tgt7NkLECBEowvSrgzBAbKqDf6DQGFF2F8Sa8a2xixHvv6LeQ6dBnnVfLs9kg3PCUjBr3Jgbb",
  "key11": "3UMbKKhEb51YEQo7CbHZrK8uhyPpiUPfApWmqDJMj2gefFMyGE4a6zzKSBKCXsN9eSisN3LU2QjyKcznNTNtU7dM",
  "key12": "5NGwRcAnGhAkuTUyT5HZTDjRxLrDEthieMcLWZbUp2ysBMH2mKPfPFbCyVpMPohAZuEFcpYmDxA4KkXGYHN8EapR",
  "key13": "digrEMyBBYCcdH8N8kT6mQdzdJzHKZJ9swgGKdboG3ZWZSRubizFzQMJarUHNbkW8cdqk1pma3srGdCwLvbPXAk",
  "key14": "3ibP5ekJfWN8B5tQpF2RMGJ152i7fS3Sa3PA4wmMaqqoXkbZfKjSRYabMK5eixZXhVXVcfZ7Lv5KzVxB569sd5fY",
  "key15": "4tNPzreNhtETbwFgkwKXn6zELKb34px22ySFQUUivhKAajWAGpHFiX3QLni1mMYoYLejXun5oWmR5KiDU39sLY7w",
  "key16": "3Y7Ci2B9c6d7urYfWMS5Hh2oCU4EyrLencEqmfxV6MFcYWCyozybxPohXmU1i93iPycorLRFr4jm32h4C58UsZK8",
  "key17": "42o1xbkFWRsNEjomMcPxGyN72m8uZ3M931t8tWkSf2kKbJCfNKVqQbCNs15zEoj2xVw4JvhLiArdm8x635eNLtkL",
  "key18": "47p4MqZHLWE8yxftGaokbxtMi8nqnJDo4y9aTgBg8Vf1otyTZ4e1wtYD8eXtKPkfRXKsDLwETG9onr9woUv2znh6",
  "key19": "D43mHBaLCYBGzxqGD9P2stPoBD3LwWFgVDyvwxuinftmoWp973bZPQLNq6U9RtkxDUfm39NCSpW7rZTmP9QPX5Z",
  "key20": "FqpKi6hCEWBD7Ww3nE8NBKAbFZXVaqTBb2PPXuWQt54wYdYhJkvjK1Qdp8TK3yRKtiu9EqaftQUtis9bBMYzipA",
  "key21": "5bbieaBnjJ7vbZjqNkBXNgko1AiVNqVBoAcgq9d6jjd2zHgCwetQsU7QHnUKXzvrsVe8bjDN23YAzEYvLvRqs99W",
  "key22": "2wRZJEABd7ZtKbkB1nTnEL2opRBNJ2Mqryg15JFpU3SwzyovZEBt9dsXcbcNZTxtAHVHMcrqp2P31stntwccprpi",
  "key23": "3jSsnKNCMzeiiesPGKrcJqErF28HdY6WwUPXcpxYFTCMtjchEDS6sk13KDvrXNKmfgccBrh7wx4EEZykRkeaenY9",
  "key24": "37LcgVrBL4ZeevGSJbc589MFLNJ2cpee4irtbJCGQt1SAgs43BT5ytJXrptW4UaQW3VUnKhaZUZXTZzbGdb4Rxnw",
  "key25": "35h8uHR3Ymw9u7bSP6LHENuDHwtQbwqv2fR3rs9Qn92wQ6qNTXnowAUwVryCoep6MqLUUVtqVXi6cUhJCjryfuPd",
  "key26": "5b7GHuTEpnQaTnUkhJrirB1MNGXC4aeb7B63KakLkqTXx6jXchzHC1iYEedb7DhKAMbYktoaBri3roLVHUoRHccn",
  "key27": "4LhZa3neLGE52y8K4G7Sf54myTtosdsZAzHkLSW2zDFK8MCJqJFVT7edqkFkFvcUR6KbuyS3YrjYpvybwrdwAm69",
  "key28": "WKmgCwgCZ9yUL1KNd9yxe9NT9sR9JygdZjcGem6Z4kxoStSAVtvMeL4njfKojFWWSt4hdA22gpZ7rtH2m98VKgV",
  "key29": "4LiENGFP4qbGS7nnPtTahX3JGNaAtQKT1V3FgP6h5dESFMB3b5RmadxdqDap7KVZVTqHynhtRhYxSpfV5d4Xe8ee",
  "key30": "5LKheBdofxduJEGWgz68WL3wMK2LefLXouaBDu6TwQHxBUYqNjWmN1FS8LtKbKLyTREBYBzia2oMYW97qcrVkEyC",
  "key31": "BZJkZhW5PuSkgGHTeQZurshuDFKnAo1FmvLcPw2RvxPnVmDENutybjDkr7FM4RGoYuNtzmBde5D24SYVFgtMZNL"
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
