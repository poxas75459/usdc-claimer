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
    "56g8evCoawafjs49j6S9SbUGmpcYjk171NNrD2kJjidnJ1z37QGsMTWo9TwHjkkRnfxSFuS7wgwjXN6y4F7YpeEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HSiJZjB1ZvNfq3KxyZGgfkm8gjP6rB8hkvT1sgNKFa6W9f5kKFKaMuwPToxcEySJ8nEGRopMDio7Epa8m1o7sVv",
  "key1": "2ZmYSY2BdL9XojeTQS2xHpY8fqrTh1ioRemdKVJby3QWCSrzwZAk9vZGFdGZ9ALeU4tc3rHcmypHPsjStMXuAjAT",
  "key2": "5sxiSJ7xdHUp3wF7YNQEuD2J4FyBzEkVyV7HuxeWbia9NByTXTkZBdgtBY1NXpGgj3Y4UW6xKq7BVHVBq2yQMGrs",
  "key3": "2UvbgJen1DMwKg4ot4qtDeK3nKZn1aESsKvBGfiNU4JyCP6Swup2X65o66MvfavJNEGd4jNt96aKQpuxMmdrEZ3V",
  "key4": "5HrgqupuwrJVtaQ4WGGkVjRHB4jZyuxf1Ghvt5X43txn1XJ4EXWPpitBeA4uf769GiZpov4JEnvPWKoPmov6wbMt",
  "key5": "2XiJrQPew8888UeRN3yTjSE2o1ewETUSSuxndaYRxu39pY1R7F6thvGoJPd2mdXRtGihZW64sUXaWnuZHgsHuKas",
  "key6": "3v8MNjQf3MQkMb4gm2ENGrZMqKupf7vD5ddweAePTSVMrGoD3kBhdmMsrE1doaso5C3qQFRmdrrbAy9rojiuP9fY",
  "key7": "2s6fAk4XweXyWXEzyqCxNyNM7DHKej6gEMYfZttdzmAaww9CMXufDKH6mgjCZ1hG3AKCnENhRNmR5zruQpFoYHgY",
  "key8": "48YmMo7wKCMakQ897RHZuJPn8eRB9D7A4VrHcBrG8tksnYtY8DUxJi99GrCPvVzJkQ3AmVLYdVVwt3qKyhV4vTXZ",
  "key9": "5PKUhZjTnhR3YCdFdEE9PKCGaMPgV47Y7s7ettLA8McfmY4assAtCACt8RYTGHyyVo97nhCkc2Pm7q53cWDLb48B",
  "key10": "3mTMvpJyuuyBbM2Uxv6HpEhrxmwMS7kKMnzFy2Gtnuy2PeyDkoKXLWiRgzgDrZk2wD9VdiBWsxHtwEKKoz2rVchF",
  "key11": "3PNZ5JgNmxZt7B8DF948TZhgkwm2MVnKv9PfDyfwpX27qSY3EnTtjYpR1qLMHukPqq6nNWQoi4azeu17YXWeRQYW",
  "key12": "JbaMCL58VW5StMboKUtyNAUPPYt7LNMVfCDF7o2Ro1y9jHoDDof4qfdkpBVsDfLULt4dpkc7ghW1yg41DSHoRiN",
  "key13": "2JNhj9nUM5MeT79cr3byPi91NxGranfyTvKSG6XQoNH76y3nX3jatzuvjsQjkR7NwJtrm1dFbzpFTQJTZvNtJuTk",
  "key14": "JJazchBtWB8NiXBaEN1xCbq4pN3vNbz1jiooR6e3Q1AY12NC2g5bm9Jf3eK8G1gmg2yMGZg92UaWRe7S4zo64hf",
  "key15": "3ictH4CEU8CXhcc9qhFPGDGqeNhv26mDgmvHSjmymusSjuHnAwC2Y1h9PKKU1mdapbDYHoSaFhA5GsiqgWNRKKM5",
  "key16": "4Zq3n4LX2gFLRC9ixoF8g1MGvtFcDks15J7sXpBANSqEdkgAiUWZzcuQazAFsZxtsbFNLr2STb8VQUNLbCPcm6Gi",
  "key17": "2TAkkQwhvuWGVEcb5uLUf6E5iiXdgN84okhNRTCsRcemKkox5bzqVYhz4c2dcvnzMzR5X9vtYWju6Qs3q5Te9YaK",
  "key18": "4T3qi7d1bvGGSYz8St3zkeebxz12jz8FifSRVpt3X13ktH1hhYKHMvz7aE3kx6Dxa6nVQffWYSneXPoqzEgRgGwT",
  "key19": "5abE6xmboaMbMsXKvR1tvrPqtFHES6fPsvSsQ35Ruze4XJzUsuXQZRqkhi26GuRbWdKsBz83H3dSkHw4winHxpQr",
  "key20": "bbgAfD9fYGXy4BaFDCgfuPR7XZAsyXBPwf3pfWu8FmubgckqhUSNNaaktMidLeLy464a3uUFhnz3Mcmd6B4PNua",
  "key21": "1yNvxtwR7GtqPbi3tfkGVWrpPhzH8LJvxb7baTfMFfXH6Qppqi59sqT9EWDchdVM7ToJSy7qTnckjCHAdvGqBpy",
  "key22": "5DAZVY5weceGwXXGid71z4FXgTvqMQBQqRjVjqPxrCfxTDpj9wNhZpcGuBbEUpZSoFWMpMrYJ8ojzuhkANaq8eTB",
  "key23": "4MhPFo8BDdCQ9gKp8wSdgvafDuSbTf53eb2kW8LaLqnp4sz4EFKAMHUM6j45duW2kudVUEc2q4ZJmyA7VdVbuheZ",
  "key24": "4393Wc3KmebrfTvfSmyDb1BoVJvsANimyti9fjSw8SeUCVud8f2qTjULQjJQT19Dq6aicm8PKf7RPuaXSN1xTYqw",
  "key25": "5oHjLHMLGdXiGDRN6h1x1omjHB8t3J59d8PKGH9caQNTJhdjK2Gi6v991XPWogYL5ytRQyUtd1Sukra5GcdpthB2",
  "key26": "4WxBhCUiZL9FZr5Wu67cyiVnV8WQqdVKCdJZLUKh2xrRvi12DBT9mXM2HYj5oTPkZy5G7Q2KXYwG92C43apm27RR",
  "key27": "4F9XcdjkzLEAZdDfik8bPsPuQg1FeqwVyNY1CqE4ZNr4AwvQsLp2exWYgvmM6BWEZtqELvWz5srxLHWsifpgzV31",
  "key28": "CYEcUVhUQQgZE8syRo7QxrnR1MDN89AZEuPmkEiqo17c9DX6w7vYjmMWXd8pHcSiAS38T5sV8WhxEjj12waPUzd",
  "key29": "3pkXX6ZuUdzKzUzFv1FmbgMqxNDCK7RDrhQXK2gXTeg1WZu18oWxMRWKzxQaJ3ogJWfa5D2nMkKv1NR4Wi3qgtHm",
  "key30": "5AGer3KJxjirrr1E39h4eTqyYih9nF5VaScgjPLVyfbzL1vBh7pGJCJKTfsi46xR69vDrDGEsPMYFxonZxce3j1g",
  "key31": "4iPPkCq6iC1xkp3fuxmWbKmV3KShEMk35nGks7cRb26m8wJk2M9mRjJxu4tcCwQTtryDVuNNT4pF5ZG9ikbow2Hr"
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
