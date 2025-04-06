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
    "2uKukdRFGES2TxXVVVNzduW7r1qFvjG6tBYwz6Jp4WA9FzEv1AhG4h5mhZmEibzu7n1dNyHBqjketMCLZURdTgz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P3DZqhqEipmrtGw7A7zeawbMrCxwE5P3Qmfpa8rR8HTtfGErLBxTNvtxxTcn4pWFTLEP57wQ5RccBJz9qptfJT9",
  "key1": "UkyTAK8hxsYx2ddjtpcJGYDj3FwSRfRHrXLmd2BYLUyK3BVV4r9zd8x2kQXYXWEZGYDcg3HqNiLWyJChmJQnLXP",
  "key2": "4BvwoC1mKbSFYKwbfSyF6VRnYVp3JSWhK9jEHDd3HFccYjoaJzuLMiJGCmDecdq6VhYBsfXtYc4vsUD7UBGBTdsz",
  "key3": "2U4oxCf1UXr4RzxFFq72JEryFip9yFrz5aPUcRme4xvG68K5KqQryLgdY31PjDTm6T27bAoDvmyZWmJPn8J5uWec",
  "key4": "M8sEUPfM7gXLSLrAMK3YaCA2Qi3GvMK7TvJxxt4gnCywi7t7M23kLDv4EJodPRgfkbaohfmQnKxVXFc3U38nTX4",
  "key5": "5E3JYfRm6uUrumyQYeRohL1ASQaGvhsQSMWq4WTHZcEX6gS97iongRQ9pXgRUxzjnwdQsJWtG2yq8YnnfESxWmv1",
  "key6": "3YMXqB4dSx1dtQuNsdPiwWf6jfKJX5FFenuqRReD3n4MmospkCZ6wx6xzrcogpCh786Jw52cKtUdnnRWWVTG4jDg",
  "key7": "MZqWFWPvj3q2DJXq2B1vywBeVvgWZct2n5LiTdbSWR4vq3m7NomhJwNZn6kJzBfncjDEg21YgW6T2ecT31yjXr6",
  "key8": "4H2ZJqtSPKaDNYNdTwEfJtX3gbCj2Vc6svP4jn98qFj9QG1DwGwyWS1AUKCPJRhvVe2TteDcBVZEmC5N1crHLnvm",
  "key9": "x59iEnuSotNqdqhKHGSByEyCB1XyzY1F4mNQnLvPaQvHC4JFHBHPHs91n8KAjX3h2W7Ad5qjWPZqfaYf5GcezZG",
  "key10": "4u3c8pnbzVsBirTs9As27RGQZoLS7rKmkGgLYJNJgm184ULTQv2hQG95mMDJLQgVp5Vrt5M69jei6DXadFFrSAU5",
  "key11": "4E7BAtq87X6YLszMBkDW6t1AQgdw2MSPZJwrzWKCPaskMKmtpAyFnyMj7bWp6wnZDZ7oNNPB5prmXaZCKSgr4j8x",
  "key12": "qjwTsbzFMYkWXa4tvKjrN5SoXk3CusXySuYrSzgWyyfGoB4SiCzznsz6YPezwYK92aaUwxRY1WEzs3Ugr4QguAZ",
  "key13": "5PNUb1Rf7Jxc4ZdrpHUUvWSv7TX4rZUGcdLEgpT2ckXxFvxpQtdMg6a6k1L7VWaSx7oLutfeCXH6V44wRTKhMtDJ",
  "key14": "5QrYua7DDZBPpLMpqpt7sKtUMMoiyNd4ibLW5X1PHTKD6midys7RQjUPpqu2TPNKkdAvCDTWjY7QQzbGvtwhWcPk",
  "key15": "HbTqxEAwCCrqZZf5YysSPUe8uteng6gmzNVUqGQrhP8ciNEq1vZArKxFf8hKBoPsXxfzq4GeuMC3JSNfoWmDAEu",
  "key16": "3uKCNHmK1MnnJ9Bc2mGq5q2qZn95XUKMa31LonvKabdufWSUL6DCrtUikXSQerSz5pvpcy6nnC5Coy2KnB59UYpp",
  "key17": "4yFTMNh22UCrkMnd54N5vDF8XVq3wQhu4YYwi8DrdbmDxF12uEEpVFQhHGzdnkhAx52UuHpozE4kHfqiM9d2gKYL",
  "key18": "5FoBpnTyNZd51xXP9c8FprYNxW5p2FmG1mEjVFQdARH92L8cd8JHKpHBmhwKwyAYLSBupvGigZYoGDHi1zdWTRsG",
  "key19": "599ihfm9GWjDsNhbMwbJjqregQi3vJbBBQ34uQoSunLmUzGSMi5GW5W5KCawzSxrJhxwS1zmVAYZSemvz83TzPxP",
  "key20": "27ypjzsRLPXuTGz7uiyUTDSFnvFpdXzj3zSgbSazzxRKFuy34E4Uqu7yHtwQfwzoKFW9z5yXZm9z93dRwBVsKZ6m",
  "key21": "5BzDojofHjCyQavhT6Rwimh7kbZGXZYTW7LSUPvYAiTvYp7DfKEE9JVMdWpGyohkpsnkdDZF9HaeetjvNwTscudZ",
  "key22": "QRGZd4nkdyCeZx7EbhNyBHyyMkvTV1NJprQhoLcoJKFYPYEz1go4zHjUqxW81iiHzrvDptrCekrRwWs6q3bfyhG",
  "key23": "2T9MRjThH97w8YjVQaUfydi7upV1Z7w763FL86qqxH98xNh3zBe6KK6hTZeAF6665UtC1KoNHwKdgCQA8m1H8KNn",
  "key24": "4sjJCo6boNYzRY4LS8fMzPZsVVFWWNyGb1vNcZ2dTJaH7Q5oFbhJwFWkXXX7oaXs84T7HtELuoUYUVQoN5JJhFtE",
  "key25": "UH4tb33io41PobG6QA6R8xH46PSxDX6bYBTqN2saQJuDm7yVj9FovCpA9614ohMQYFr6s9bEiPJt7fXx2FPnPQY",
  "key26": "4qyN9kNJoviF8ZxbFV6TcEXSPFSexWrjpGmtW5fjUM9sJ99KgBpBHZYfWURb2f7HCHCWVPKpKMERN7MqTuxL2a2x",
  "key27": "2BM19jr3hgp3QfNLJeXKZFr8AqdjzfhcoYwSFke3B69jH6myJMfTx51T6upHNEMCAJDzV7tj7fssSn8wp5P151sb",
  "key28": "Y1qjLN6nXoCn1FUnLzVYVrUmgiDR4oY9bbCQu9NMSGwXMCsRyq5T1jGiqJ4JNBS8dMLABgB6FH6yL1ngbXitryv"
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
