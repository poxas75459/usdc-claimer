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
    "4pzXAqbk2HL9VUgFSJCXteUnDVFoFSxACtjK8kpXvAhDVRcSiUfYyVRXLgXoDPsTb8xNMfwyopeZgf2bSnhN2rbQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "124jUznm5iAbEf93o6hL3HQQdy1mgqzdn5G4WBVzNQEiNznTFRSvvvvsbm1vqG1ttsR16F9DRUbRLsrUwpRTWHqY",
  "key1": "5sorKwz3UJdcuUzZzhdjvdAhHM8xhdXsJzrBC7LcrdNdp3pYdKc9fY9kajULU8FagJf5B5aJ8waTyx3m73ks3z6M",
  "key2": "53ne4ik7UCZof5XejXnvbiAC7EjrxcPLMf48m3oSCxQDpbofhhoHnfqp4v3Z5Yto5aSDrGEpAoFQHEjXVhvsJaAb",
  "key3": "41NZ7DsgeozCunPeGEmrSuwVmDsX9DVekqKJtoD3bAA4pQarZi1uGG4Er9d2JPAy8eoUzgNhohjivn8cK1nKCBtj",
  "key4": "2VsMebMXqjMgdTRb1Qii5q5p3Yz6HyGnbRyjL3CgfcjVWLK4AXDtu7Rg1EPSo4hzEaSBW7sdavuiWVairHaSQreZ",
  "key5": "4LHywuTxGfScRJCtFS6vJqe4ZM8qv4aevVkBordJ6ZL9kdMiWNLQjB6BTUq5sMwPXU26fMRujKpKs2eiPhgn4c85",
  "key6": "gxzCaUE59knS72XvLy2Q181p5pYbE5B97qXKfK3bPJV1njiH4aVraYoMFZfFykFffptZpYqB8X1Fhfv18kUEq1v",
  "key7": "2AKr3QMKtKFZqUT4aD8bhWqxFRLEQZvdjMQgTk4kpSA8MTsfVopc1ssKXsKUnrRBya7vN6Fo2hpenR4aJpUiVF1m",
  "key8": "4y84UUAKNtKVsyEYwK4XCEHvGRo3tain8PkCMTkTANpuSEwCa6KrZ6VnnqyrxVfd9PKgxGHFmJcBgRPpMi46GtA8",
  "key9": "5gdYUYLvHozgkfQh63ZgaXeUiLx7wWXS8c2UKFvzNBvQqSA2Kgh13dN2QXSzzwoMKPbGPfKE4FPFSyHyJbGoxhNo",
  "key10": "488vhRxBJm3qvhzNyToSRaC3BGWenXR35bCD11ftKkGNBity6C2LW8HUa6CBg2xCh3NnWrcXBUC5SGkyNp7rph1u",
  "key11": "2WEvGtXmKpfJf2eiGdiqme1kzwWcruSeLGGzqowXZHaZhQEWh6JxCbuWRCSPDmBhiJmUCz9Dgo9tUVpaSA3nFLXS",
  "key12": "2HqZ9FoDLLu8m1AidNLs2AZMyuZhPhxACpgnJgkoURbwzarnNcgCbWQNy2VKU6ygspamPtp2YiqCjLLaJXuu6fAd",
  "key13": "4zc8QwQqwcNFwR2MqewGP5AqsW8goXzKw8AiM6ncaoGjYfpwjewWKSpQ27Y6eczpq7SZkbswq133RCMkAb72piD6",
  "key14": "47dzVctVzE11Y5VFFCtYoY1kJNRucLvnBsCNvuosahtQUMq9wJLshoKSNz3HS181B8CXzqNjNwcUzFh9M3eHSQEx",
  "key15": "3UDLj47RamaswhUqcj5tLUR78FsyGdqJ7PJEW8P5nu4x16p9X6CkhNKMrhY3knbWFtrJ1B3sS3QAbYe4xi9ambU",
  "key16": "2HUwpJCjw8K7w9UrJMzUQpo9Uv19Jmsy8UCAK2Z4f4ut9mDAmybQtZkmXKjr8VzJjWkLJCYTWNzBihADkJ1MnCzn",
  "key17": "eMX8pRXuRkkJRpUR4fhdVT3MV5f6Yp22zQVSJDyuvYhhEC8hzTMLR87fxU61z7dwAqMFxxLrU9dtLRuyGQdFx2s",
  "key18": "3Nd4paU8Q2df7BPbgkSj6crFcVtQdJEshf6aCDeaop8E1VMprZTDKjPMJbk7T8YoqpPA2Cdp9WhNP8mWMka2GUuT",
  "key19": "4kfpLNLJq4FUf53gR4xEhn2hDEWiZyD27936JkDTVwfdJ3fYh4dXRGu1pa7t2D47XsiuZmmRuKZ3EkCwmxACWTUw",
  "key20": "9dmBEU2PKscJY3JTei6Euca55KWXLtZrWSEb81pFnDLjUDejk7YKqZhce2WcJWxG9GZWagnvbLWxjmUFQo22ibB",
  "key21": "5SBYdSNb2PKeun83mJZYjr7GmLxoP9XZb1ZL78uYXXLZRC9ktRn8bupzvDDT9hAoJPLg6oMK4F1ZZs1Kk8dybTwH",
  "key22": "4hwXWMXgWMBe8bHjVSPCx6VLoDgi3qgxxFi6FwpdMKtnbVx7zFNbVTMgKkfuCt7QXJiPiaoTwmV3EDWpv9KHj9Mm",
  "key23": "3JmAuZNbeNXxFKdRjkhr62Su5fHM3nNF1G2Vx9moGzsUK6ctcb1RW5rECT9Lbj7mvn2KeVJYxTcdeVZnxwT7VYF2",
  "key24": "2VL5KFTbXV6FD9J4teGnmng5194NFEihZAkmxLrGv9UMAUJHLmb6tJJ1HbLm6xR49muQmdmZXfyCpjaDpxR9zfBJ",
  "key25": "ksvZU7NRVYw9r8t8T4MgBLFVgDz1H8eNhNWYhN3tuoCZ2wKvS9aYhXnautv5f1MGmQ8rZmiYiYQYbVMRZX2akzK",
  "key26": "2tMT6QjM169VtzsNuq2QZzZRdL66K23bAFewQncUNCpnhfhBfGu4G7QR6S8kt5ZzeB49aJRp338HhgftNT6X5H5e",
  "key27": "48VeqLT2nuZqi1UoZ3Fp9BVe4r7A7G5QNX8rsFAZzDjxyZi9Y2sLiAotVkK8RNdeeFE9DZ1VVvtYrmeRuQ3uyaEy",
  "key28": "3Kse5q1ZdyeJ3poCNNHu8bK9zN3r1z78YFbJ3Jpx7Tqe3ReaCRrVbqAbY23baXGMdR9E6vgLhd6zJqLx8z6aKpo2",
  "key29": "4CRRABzE6gMy3MjmTneY4fX5g2GTzB3TThioPJcW2ukkznUJ4P9RmvVeqLAiKQeu5BtV5VAFgQQP2cTkMGEM6jrs",
  "key30": "3rLMZQo6WiCuJaaQZo7RJoatdT7q2LD2VVSUo4vjdqUPc8WEq7WP9B8TU5YFfCcPrCzPywMSeMzer3WBTe5kTzyd",
  "key31": "4SnLt5VUZUEWAQHPhti9DKkT5L3RyY8kFWtXfhnTALstXC1VSyAPxJpHmDyZWhA1Z6QgUdz24zZ9R77EGkbrWLNd",
  "key32": "1gFzLrdtzZjvgCWkbUDMzEDBNcsUGxxd758oVW7FUJwVPc6QRnYybKYqEjYtvRJbsc2HVyJFjBbbkGVLpSLvMvW",
  "key33": "3uRT2dLD7HRbaS5UapmzQRUGLn45vDVhuuS67Ggc8q79TEZLeH2z3ri7ppjsZfU1MZvGSjwEofdoqHj6pXfiudNy",
  "key34": "2BZZKo9wZARG68v22Zo48rDxFNcM2PKhtNi59GZNJRKx51oeaNcQGENYu5dKVra9SrmDQ7khsgJ86c7kUo6hV86p",
  "key35": "4p3y4BLrmgvRUd5MBGDwrh5UtM9WLxAFwcnosrw6U3ryMo2cnqsioiuebRKMJHVYbDPWXyHZKdbyuA3cvXjen2wz"
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
