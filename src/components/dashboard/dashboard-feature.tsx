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
    "3UvKSeisV3pyh6WasabyeoQ7mZ9EshSAZvUWkK3B7VstSbUzE5naSWhrTBdp1y2abWziFSpBYboSTKRrHdTUN4x6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EJa6tijDhuZUhxJxtwHm6MQXGz47gcRKueeatk1c6HbovhUxfurHPWrKpjjqwBkTpCCtQcRKrUZhQpxrYEhjm3v",
  "key1": "4wprvBr65Veh22vqFV48dmEs1iBm95AboPDAEF8t812uhXSKUzpYL6wJ1DMGw8WHa7ZBDuTrAjyDSoUaS5FovyZC",
  "key2": "3qyYkpqw3zZN58bLXxg3CqWpCFaBiYLSiTxLMmQ6mG5X3dZBqPcCANipvY2xh8TxWPuE2QT3MpMxyUTWBkszMAdo",
  "key3": "61PRN3BDhg6uF41zWFQYCis7LJ68Pntixtye4oXD7Wd8rgD7dB77RLESUReMDcqULRqwUd6WRzWLEXHT3ARJ47r5",
  "key4": "3awSy6urVjVwkfYmQ3VJopgiBsw7disKrfdafHTxsvjh2kFKCejJ96i4EWT3h9qRvW8AtX9SotpvDpmejUFQB8M2",
  "key5": "5PjaZJece4hyjeoVJ3QCfvcjyeJkVnyTGVzoctjeiYvgAHwiT4c2X7T81gR4tY8FFJtZuCJo7TyfxWEH7sgMYLG8",
  "key6": "41W4XXUUki5s1Hc4Yx22qeBrya5hxxKj5zY3FWK5pCeMq8ftPkriu92DA7GeJnfvx84f68jeDMEwZu8ZFKphGS43",
  "key7": "3zwaFJ8LeaTLJRSkK968Q4AyAydUxNJdvxJjpVEiWHdLh8SZ92wGZFfQbZcunmWtR3pyE24W6oVeKUPZpyn2aqJA",
  "key8": "5QfDZFVr8gVd7hbb5E748g8Jpa9YpGzv4MZwEKS18oyL3CMjr9Axf8TG9Cp7fH9cZkzREQdJA67YwfJWNJPBQMMj",
  "key9": "2EWdffQEMH3hCevBtfbm37cXnAh1n5XnE4j7BohnVYhUfjwzzoeXv2R699FqeXSdqs5Xrd4iRNM6eV2xEWHvhrNv",
  "key10": "4aVPzT7RN1GEZhAng4nu3WCv3KrK2Q9YKY3yQ8K3CVaWYVhqHCgCSzbHrrmeJQueocxmeGjTMY4CukcT465shFJD",
  "key11": "4ues1K2tW63sgBNhgRWmCE3hpaYwUhCyitwPW7JLtDmhRGcu7pdLbKRaHUgwpQ8oYU6gb1aSz6nX4vbeHD7wrQbX",
  "key12": "5UmqrTHM4UjbbzrC4v84FQ7YmNaLKNCpZvMvvfz2qRWzB7JtEETnMTDN97xBKmqomtazarpYNKMmcGp4BLN5nNQs",
  "key13": "2NacD4NPVVKuHXk8s4V1ikgMqC1DNDpFLP1qYByP6r7L7y3fgqcV4jLVYvniJhm3AXkY84Wg4ish3t7MyqAEDTHh",
  "key14": "5E1wb6pXoQwYqTGRD1WUzLXQqCautrUBUyPF2CP3VnQfYmUfoxoZknCXeirMV7aY6ntRZHwLHHK5aYdfAb36LKto",
  "key15": "3HfwRx2Q3HZWN5DNgu5MwscTf9AZZfSRen1QFze3EAnU9WqVgzJpWKKmWjmoKM591jbz84Xp7HJsh2xJHP3DwySr",
  "key16": "5ExJGwnqxegJm5ttSSurWhSwMiHTaVj63LTJfbW6N54rjRTu97MapkpHDt91cpFTkMmKupQ6m3XnU7BdrL7TjCTy",
  "key17": "67PwqnJUo1Na9dd5eb72dRNWeZvQb2tTswu1AKxrvyaixQKKn3qPqEw5FgTczkHuPKcxAuGABCvUr4Y38EmcphTR",
  "key18": "2du7KDzicGWxTgwMikhjrqHEgAuoFgbgYfX78qMp564v1aMhXzbybEFcS6p9VVqpjqcxMffyu3mfRGZ7qAZqqqaB",
  "key19": "v9tvzcbMdE8cqcmSJ2wzVs2nmqCq6Yg87adENrNqQnTmcB3dhmEk7QgNGjNHU7UAd5TTgLpU2gy6JjPKfEchZxa",
  "key20": "2Zy8dgZtphLzy6EVPwZ33A5AtkhhwKMLXJ8io5PGembERgJ9kp4oQvr6g6vedNGxNCRhMZfmBdam5guZJc5a3Bzr",
  "key21": "27bgmWQUced1QX2g1CkQViRJFEisVbcNamFQ2pAE6heqGqrKccA81WU5KiPwpmyTMukvZdXEKduUfBoaR4DEZ2zj",
  "key22": "2e8XWQCrmwDk5gUobLU8jPBdDydJ6j26kNbhehxu41UbiCfcDAjyMJ66sNuCRaoJuDyXpGa5xxy4soyXBXtbhQrU",
  "key23": "4yEpnw5UghPQYmpVPum3Q5AW2ZrHoEsfYB9hRtYRV5eoczic6kfTYGRXnvWHwyDFwGq2aCtYnYUS52wBBRbMZx25",
  "key24": "5dKL1NmZrJyzikGJk7R6ZcpJLs3EPYXbXGLGQJUn7p3hzhZDa1zdH6Kt4vxhD6bjuwMB9mwCp7TWeqYh9o9yCQio",
  "key25": "2xPnTpQwosxAWbCrb7NG5w1EqwEWe5azYDyXiFCbEMjkdJkmKFWFqJeVf4chRE3sydwNQAq8hm13jVNBMwYWoLU9",
  "key26": "MKVCe23NKMKUhfnY32PKN3Mzbq7jrH7fW3a2unCwvZiTJckF7mKv99VMhnhW2bYr3GsyLuz6n8hpUqApNVyHyto",
  "key27": "48UynD9hRBBUN4HoQ9TDcCA2nMrTFocoWYWSrHcbkZjEsbva3FZeAajGg5e3haQeBXjbKwEPcJesoqCnSmiGnEM9",
  "key28": "4UEgBDbDBL4Na67iLmD2Aw59YHT5WXhFbK5u1FXZc4KNwTjviz4UnBCUww2pL7CGKFtU1ej4cohF2iwMRv3XHNJZ"
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
