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
    "5oUWFbjQ9QycDTPaQ2uvogWB3FZjJ4qjVWhNHGY3SjN3oWg5FpUmmrLKj29TWXoWDcfk5wwnsSNJURDoGMMUjibr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AhDp1cHF1tHDxJyqT64UUsYGKBSmNs1MYSwAriZTPRdEwHmjg1uV829hRvcsGtaQYKsCoJcEKuGaCkvLEZXquJB",
  "key1": "aJDgxzaZtQ9Rd89Z6HTGjqdAnGkBNzosHsk8bQ6sUJKRsptvN88u1tCgPXtX91avKahqXzg4yHbS2HDZiF5nooA",
  "key2": "4ZLFmgKM5HGBUWbrWEa75sBWmHEebGPZDZvKsF76i9J2MpYwZGDXWUfVCnyzT7adMaiD1HJWD7aH1V6s4DUf7PDa",
  "key3": "4bCRr3tyKThfkzFkU6j4xUJBzkt2MqTKAPkhEDdLSCQBCEQKrWRp9tfECR7Cr3g4FE1yePDySYNKPxpCR54wKn4c",
  "key4": "3FbcW5u74uYnDnTx2Nfm7LVwgXqvRE4dCoffPdoeNjcQbqpfrPH6pRLAxXaowKjV6QnPEnRzb1nK64bKUn8WawAW",
  "key5": "4jNbzAwBdUry86feufgu2VmX68ioiYc1fDHCTrBWKKaqfBWM1bq5gpJ5d7d8MNAsf3AvP1FD7Y2jxcozXqHNLtnj",
  "key6": "229bmSZxtjeMF4TqjJeASszabY8BPDFRv1hNb8RWTQvhHFvcEh1VugVriLS5jyLG5A2BwDVgWsCrJ7k2G9LYsHNB",
  "key7": "4UC5NinvCvPVbRBu3PGoCz5PbMRhY5qXiDnTk6Npmz1asvU2soPUZEW1tgMg9NPUydE8yNeYPssBQCG5ARhin6CC",
  "key8": "s1R1JY8d3yaGR3LJDA3aRWcWDsxWr9gDPwEnrKK8vSQJ7G9KRpYHKAwrMKvqKpF5J7qW6u9yes4zuBiJqT1Kp9H",
  "key9": "2577XVZgkbEBQckdxXRXndhPJsQuoeWFxdXP5Sm7phemapyjo1NwJpKoiNgeFZTEZ2Jpf8Wmft1tptTGy8UPdQym",
  "key10": "GcHcAWtYfazD49jYVZKKNfGrjfL4XKTet1YyMXxrFymCWyjyxmW59SiiLXVvk194FkdbpsT97PxwUzWTg4SrcgN",
  "key11": "4VNhyfCcuLnaobBryktnVELyeCmZTbj9geaNf2g4FYQPa7GSEKefpYwAGhtzgbmrEhyCab9pWCVpSKPejZHaQiJa",
  "key12": "5KE3NseQ1fSDSDaJK58d3SCd5794dnpyunk7zyJCN4T5pnYKBBZD1y3ct8x5P9DHyxHYSzHMLD9WZuig1XijuFrA",
  "key13": "5gKYYFcRQLRbiYWU9WRqZinMgY24YkzRgk39yrGisyh8CpSEj5yUXpzAKTZE7wSpWwAdwdk299FFPJikmy547v1B",
  "key14": "393j3nQCWLaH5MngYfqDt4Qxukv1Cfb5iFDVZusaFaS3LRjvNp2vn7rcaHzAA2ndVDYPB6TMdGxTn8Y4TA79UUSD",
  "key15": "22V5pwNgoLsGQ5mr7WFBRNCDaDcQV2x14zzgxk9Etgx6fMxMbSNwk2kLJ23Be3zJNatspEPtkiR3TrMnENMVKH7w",
  "key16": "4EtU2XCtduNp69nmDBuW4qdBGzJjGraVPcArKkuYvH73a3MXX2FnD8KgsQdMZPBXgeRAHf4hzT8ieDMSh4kFbTp",
  "key17": "wViWVcD9umJVmGQNmdbjF4krv4QTiGHbDwSuGGyvKgXrJENqTKJFxA2McJqXbqUcawAxoYff2yAcwUYGmFvXyc7",
  "key18": "2JCbN1hWm2fhP8CJvuDdXBoGxAwsEaFVhi5n6fuqkgKJSyzmHggspMEPnwPAZRXwvCxJrDUXZiyXmq2wAkzAUB7F",
  "key19": "5P94vuqqrP6AFJrCsuuRNCCeQSxGC4TahdueF3HpBKsfkj1h2KQmhP1B7C98xUyfCcD88Mm4nSs3du3FUMVmA4zn",
  "key20": "4AYiMSUAhYStQQWDB6yVtQPhp4FfG2EwKjpGZiZQqtRtiNrZ8Trqpw9Xvv7oULe5X9Q3PB4z5LcKXKPyLpbb8zo5",
  "key21": "3TbALcGH329bH7fbkL38UHLsTPPfc5EC6hQAYWVUA4Ryk7E8Txu7tawpeZbtUmkeoyvMmp1ppewSXK9E7TrJS8w8",
  "key22": "28Y41hf4QsPLZhGrAKCQKL3PBmZaVtqpKR3TkTdNuX9jnJYtKZSLtwZP3apLVtdayx9yFx5T5o6VQQU49k1cph4p",
  "key23": "4G9rqwGR7dcg2DvS67QzHDG8y1F8jKyijkGjCM6wehg3zPc4vwzNSSq5GAGVdJS4yGCUbf3hkGZQyMHrZWpgqoL",
  "key24": "3w369irHKGjoEwCWbnsgSj211WTDkDgR4vo6mG3NVczvZyqCPe2kHpMbkbqFddkgXc5JwzaFNT49w1k77BeJeqQr",
  "key25": "MVwBGpeKP7PC2dqDTFkoxTTMvssjFq2mJ9p5MRsdSao8HSrwAFo14da8NW2qbVMNTTycqNsej8ak9KdcSRWo7hV",
  "key26": "4UCuAAdzgL1Xb3Ew8jcypuSjTbwv9ZcvqQW3CPN2iFprNfkGEQwiuAcfvLmpx3YkU9tva1q6CxaP924ce1BBuegc",
  "key27": "yBy5bXeUQGbocPq8dFtJAQz1bBXpbJeQF1oiFSrNzxGkfSRXYBrYAoVTgmUYs1V7iFTQXUFZb9c7MRM1zhjxMHq",
  "key28": "3AhQeZYBnCNAa4uaQR8i9N4ThDucp32B2paR68jnJwhLe66u2t4XwdERWQu6ai2dUYUFTWmTVCKTpvWpJueJK3gU"
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
