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
    "2vs1nC35JEW45FGyP8ydT7iNSgczN2LHnAghCa8KB5pBwCpGtFzZFpRKbpCsQ7nceoDejoCFnnLhw2knbgG3eX9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RvZQxSsLzuDwguppCswbvH4hPWP8y1i2zGmJLqPZ2QXiWoEvkzHZjBkVuPz2TvPdC8xFq7Y5nkYsvtaiXfDvMm3",
  "key1": "3Mu4TBCSdKTjr2wUBkfz21VaqdLnxLvd6zYa2zHenV3eNqDgCKjnuJBUE5JRnqcQQrZCy6FvqYYGhnEbFAUZrRL4",
  "key2": "4ZJp259Ys4Ct9GWPMMrLM3324qY6qTknVeGjYfCk1DppxCrpRpi9izvBuYMWEdtW5CSvMHvMQUqQzhHAZMxheNGL",
  "key3": "dDEkkqw1UsB7LtKMAkU55b48qGF8mbaReJ4xPCnj3pkPSkLsEpDb9hyWYWJFn17TYmfiCwAac4nGbart3j4wwSG",
  "key4": "3sQ2dy15BkeLj2844ZmZwGf3nSqrvjwvi7QMSomej7eZdhBRiTo6BRARV7wU4AyjMFv7cE5vZMmu4ThsxUSQ1FN4",
  "key5": "3GPDgimTxd5DEevDxBm2wDiT3ucLm9GDzJATH8ghHK6RqB9Gw3rkF9oMVBeerwEuXZgbfvazbpHRHvhySQ99xvVK",
  "key6": "2B365wH6q7o68JQHSkXUQewSnNoq9mUqkbB8xpoNm8YsTcgLaq345M7SqSAESyWzS86fhLBhD8E6y6cYwFX1RKvw",
  "key7": "3fvYefu3VFmuCYjswBizSD6JnsioCc1Qe7z1oxHG3kS3dvCpJKHJqmpBN5SkCdVZypM3PAn1L2WfZDXzXYLjbaZS",
  "key8": "JNrxrD1FwhkxKjayv8XSnotFQosucEtk7sNYAnMMXeV3JHjsg94FXcJYmGg15kha7tXSocwMiLJ8sjpgqNqdKFe",
  "key9": "55gRguSqMEAyuBjmYnCzPX8mRQqZyZAdjiFenuYCz6rhBjjX5F53EhaeUyGMmPtDYTg6DUifH7X4NeDy7NCECy58",
  "key10": "nf9ssEkCzo7iqhmiyjWSeiTTsdWt3yMmFKtiD4n3dHAurXuS8FtBCZBQfryfyXCiJRZHcfgGMAH7LyxFn54FTmy",
  "key11": "5xtXkg3Rfe5oVK5ZyE7pkEoZhBzDW6wQ87Gyfud4iFGVPjFiCriYk2WjaWqjdS53PMYsDAPicqwBAaDBRBPSk2Dc",
  "key12": "2a5Zc1YRjjP8938cR82wd5zAAmvno29kVLqjzeMNEUgKjBeURD8o65jfcMDVwE3bTcpnP6kaV1CmojX62nj1Mvrc",
  "key13": "4joDWUaxnfftwD6RwwmWrWHQrExTMbeftqy4KSs1Pfu63KqXQ9chGABScaHVMeNtxhwdPFjL2zbQfUf1sURRg4AB",
  "key14": "2YCBD1R5yHMD8UprdqmFDypZPpARb7cu7RgEAL5hoXx5J98qUBqLZ1tXBJDscjBSJRpRYNKKgHozthZjuHiiMkhp",
  "key15": "epTm88JFLAu26EHJ11A5xRriWd5JhDDgX2nipyCsCgJExMedSe6o9rjGQAELvReDGCRjL2wzQRjyodf6VcmTUiP",
  "key16": "5ssodh8i44TNZnRZnhRZC928rqVNiHxwFqhePgRoPJ9QNdukE4frj28d4iJBPFqtqdwRs6EdAy6zpxEgZkhi8fZX",
  "key17": "5Va8wDJNvugVmG7cCgNycNMLsa75nrnaaCv1W1S48gjuKSyP6TcrSWtMDhjgwi36JG4YRGY14Ue7DF8HyCfSp6dU",
  "key18": "2UN82RuWpr5RWvSYC96nhrBc1SSXhRPF1m7FtaPwPu5hhhGxR45DRDmTDk98kEKAKK5aGrVxBTScMhNbtoXdxyWc",
  "key19": "FPFYF6qZHJ17Xhsq8Vzs3SEF4uhvLRX6B5NBMmR47R1aaHsc9FCrYs6Jk349Uc39XontNXdQLzrC8Ze3tnBXZgj",
  "key20": "48F4b7zVgiBGtuaDuuDR6QMgoaKDqf6hE8f2GCEcA65m8JLaLFnMxNKMtMkjLM4tBw1sXFeNMh1mxReVHxguzSKd",
  "key21": "3CoZNeP598hKyuGyTqVEr5u8i9D9jL4gzXBYYBeWmF775k927jxAnC6ambwtoxfjntjB6UP2erheh7PzTms5FXMh",
  "key22": "4aKXsx2s7xmuKwwjEya2wduqs7rXwhJztMsPY61uZm5jP9wEH1icPj78tLcNqPvq4VDqMzqDqEU1D5rJUmexM56f",
  "key23": "R2Gro8Rk61eTMwz1iThoNa6NqLpxdxNDS9UTzVCmDa4Po4etVbeN8tNrdLh7YSorHvoqUKjp1dJD9W91nHKeEnZ",
  "key24": "26ydoJPBhfBJrtRnfu1VHaM7Lr7qQTDh1DBoXzde8jPfnzXoxT5pWw1v9LqNfC9ux7auH78WH9bbHStbgqY1ETDb",
  "key25": "3Jsz8XiRQacvYFzryYL7F72rivQT8PTFu8PVpPhkjnZMJCmKTmefhX3py7gYMaGnkTdpuCuwKkVYn9hAYuz9nQ9M",
  "key26": "3qJ5fFMEEmnx48i6qMRWh41juSCkWvAMsndAmEnWpU5q5sCd1Xwft9bzxzzdjgXJiNXe6HqQAr3WQa7caiMuHGKg",
  "key27": "Fk8q1gkqDFzmYJcrThD77NLZBGjsGjg7YNfS6YxtxuUWtJJFBJQPcwN3ahS24ps5wavAjyTq8QLctsjq52SScPJ",
  "key28": "5TfYUHA8ERPCnN39dN29YjmWPPnbNkA6S7jwskmrzmYpugtdhkGx5iQBdu4ALmjkJdAkUeXJPe5gnSDNhZw7ZB6D"
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
