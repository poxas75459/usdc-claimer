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
    "4T9KgqeuJ7GSMYjG9pMkEphqv1fvtmAnd6GeTEZZjv7otYAXKo6A3uQbcxhh8v7HRfPBcS3TeSvishpZqgvm15cD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rb8GsbiTLSMoTLi8CgUR4hK8QJRNqkfoKRkYtjhGrmwfWL2EbQxkzgPrBvTjqdGeLekjLSp8x47aLTCXeo9rP9u",
  "key1": "46w9vv46qrCFqwZNDzxUYs3rEaAdSyGyBtqmuBnJDsZt6pym4BwcZJtJTvRwppyQHYX8qVZjHtZ9G1v3fQ3PAVV6",
  "key2": "65YXaNt2vFMww21a8o23M3PESsHx95m8h2i2cPLED3VzuFgd5WtsV3uC3KpFBMUofngvWooESwdiR4BgTdT1KgZ9",
  "key3": "2iwrZUVLwSqtSGaaKidm9tMY1rD1wWHsuWRkGjmEMqe3KN6maL6eo3Tqk937Q5nRpxNb7cPhxVJeRZDJhTbU7S96",
  "key4": "9yrw2jYuzUkEfLKdWKHA6P6Cy9WXGabMXUKzPsP68SJsCb98DHeR7zY1fuvPb7YC16PeoM4XFyr43pLKzYSjgH8",
  "key5": "3mpZjPxWGjotEE3DL7FEMA7tKAjN9ubGXksfpGJigidy3374FCGmgxv6sA7BQ84zcuqpUQCbXrPeSLB6CxJUhbS8",
  "key6": "3JdN5oQUU3dHxyi4Hxz4FPJV5LFYkHWRJKBqUeC8L1d8JFjyru9woYDCfkWHD6MmJq4uWe6Uv21zJV1ywSoqVvAc",
  "key7": "4Zz7yutsP25Q7GFcYSGxaxfy5cTzsBZ75o9TnCDHXUB9xLY4rAGsPKCuBz22zSWp8YwfqiR7NpEK7uMaLpKk8XGv",
  "key8": "3jCcwzwRFLgdd5qFzvkFgdpokLrEdJGrB8vx6VJD6izsGeBes7DMVFxiWwUkhqnvJe5L9vCFCAubp7t46TdjwbZ8",
  "key9": "2o3VUwjLDFSs4hHQFW7icGB16oyD7CknZBKHRK4u7U25uUAa27EiTdXSS8Dj3m168fWHbMuYpC1FSb41zAL55p8s",
  "key10": "5Ak923fcUpcdNVq5kbhX4WvkSmWB5tS4JrmdGdjUVaT1AVY7oA1BP1MwhxHyipV7SbHpX5JpwTrAYpuCKZTP6HRx",
  "key11": "3mg2oTF78Vt4bpcG9RfrXryg74NuNBKV21WnuLeo7LFGGSX5jcNTZj6yhqFydvgyqb3wAGc9xfFSrQrovF5bLiDc",
  "key12": "3hGLg34CG9SXoKaCKH4XxPEpF7BdpVqNSBYLrJLAPtimeMYeL311oM3hMdmtRLQ3EFDRPAzXDoRBJMXaoDt4T8FK",
  "key13": "pocLZgibnDZu6xHDwsXnTTurS8kt6n9r6o1RRa1oMASVpPZUbKwH6T7ph8UWzznDKix5eVaTk3DKxxe1hWvLh2C",
  "key14": "2Zd3faaDRFqWcG11P4otR4Whj2CSg8fsx38xxmSEiWrfEQSA5CCZgN3qV8goGrtjEDDHeprFMWtswfRLHfLfNVri",
  "key15": "4ti4P5bz47V25kTLNgyHyz3WduemAJeMSiyUA1TBDTEG8Zm82EPcuZDeBQMexHp4RjqydpQfpZo5mNZjgxpqA9pX",
  "key16": "5N77yAkvG2qE1epcjK8vvB17xhsEusVw4x2KMFpGCgEuKP4SSq1jvPw49CJETrRoNSUkFpkxvGoAcbEF3U3QvyY8",
  "key17": "55RrtHGUK6NkvLdUfFrxmVqjUQwSoqQwjBtXLWNoQ5PHLdy2TyCMYKyfdRq8i9xSSTevHmeVXSeFgCHwm4WeE9AF",
  "key18": "bWc8gN5N7qLX9vfuDuMRE54kC4gVXHpLHvxpdGrXpUjKejaboJ7nuFKyYv3phTX6wPjV771GHbrHhmk6ENx3dX3",
  "key19": "3naLbA5jW49HuKVM2cskLFsED231RRQJP8aWCk9TZGHhqJLqujNd8uyfAJpojdSSmAj6GuPj2c3L3f8sw9wCaprV",
  "key20": "3D37jgLuiYp8aQEeR7J2DxDMhtPLMTvJ5e2CrAqeUQ7Zs5D8Q3Erx4GcAkMubkL9ocsryygUqCk7jLaf4Y3idxZK",
  "key21": "VNgH5phM9dHKmHKobzxunQzxKJf5LVPs1aZ8xh3YhYPtM6Baj8V9FjR313EQwvVuLcrD2UnHizQSE8hBgo9MuPy",
  "key22": "27v7xbZwYaPtroFZrc2qHQpGhefVxpmfKU3LhEncNuTKudpUmCbKDvZ6n6SN5EVGEqFuZ33Ft8mSiF1aAr3JBJM4",
  "key23": "3vv1kWAnf49JvrU2UXb4h3LgxD31PPpfKidBDhYkFybDdhecgbjYSTnbX1oinJN517yyuXWFQLysnMhUcYQhRUGz",
  "key24": "3VQQydgw49K2UQ8L4CSxLiLSTNVSKK5rn8UQF5XxfSvcQu6WhEAEYdxV56H2LQjS7FcGjjddGSCGv3L8EzdmMGdc",
  "key25": "5zQnodAqbDq4w9kQ6RGH4D52RvcMLuJik8RA1n1VvmshrzZo7A8SAjdQ5r8knzd6pJfwhbXR3DHqHkLpE7UdPnSo",
  "key26": "aEpUjZcWb396XthBtW8uFWWZTE6XLAimGhpAzcpQH9Z9u5QLEFmvskQo881mTEEz7QGVpLYXgJMMpZ3u1JWVsZA",
  "key27": "5yYEXGcnkQhYxNUoiBsnDjtNVSNymRWW1LJv7CZ7Jk6XjDqcKXWYwXV4xgkusQsPx2zwXGA2m7JYTg5YNRXaeZZU",
  "key28": "3k8iMn2ReTLyCJ2BezoxzwPnw8MxhSVABAy4VN4rHm7qWN8H538EoPW2eVdRdesH1dQJiFDXfudNuzu48mZ5kYvy",
  "key29": "L91Vd8GrCWjh4m2YcuMVZrofNWFGA8ortjruGdHwownFs3fXMaErPLE2G6fuePc9qKgrfT99C4r2GFoNA8QToML",
  "key30": "5Qa7i7uPZjV1MTFJLfaagrDkzYLnct2VtZoMhomcMSb6oMuBxqLRfYNsnn3AphZUKjzHbzABf8kEaUr9NLRjGSSs",
  "key31": "Qfyp9rWa4RuHPL12TYGtTpsZEh116N1GRUJu9dDVsie3SY3PrnFa7snZE3c6ovAQaxR69NftNmjwNkqxJZgn3eo",
  "key32": "4p4qECDSs9sX7VK1iT1pbJL6zbLjd5Z9GtQV4sDGEUFFbVurKMzTaAxXsXhHQUcZUipfbY6KUHKcNGHDiBZZWsWE"
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
