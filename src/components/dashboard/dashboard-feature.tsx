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
    "5fnFdsHJCRFg9pnBntamGygRyV4SZP8eeKGp4LfBb3SE1TRgeCoo2aiLVJ4v7w1YmaND1GyjmLQdhEbs4nyMXNxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YFxbk48vDro3uxJaBgMWNvg8VLnNVbq7kUZoiZKbNwDyZVSdqZBix4cGtww1Jkyxik88RWg4XLjB6wwBXtpgbL",
  "key1": "2zsTTL4HYLnsjumEtZETrUVzLgQMwmJ7fpahBiLzyBFHc6iy4HAVXG1SUhj9yYvNf27A8DH25u6yS2JeynBdbFJ4",
  "key2": "5XqHLJCxWEekvyxCMknJkbQ47EvMJfMBh4UhCHYeNbVEwjTxYZWULVij8GNXQvZiGj6z76QRYnTHKuP6MhffhCDu",
  "key3": "28XmRgVGUvGhzB4M1srR6qMMvzPxrh3NkAaRXGFpmFrGuyEMe6wcioM1HZ5JBTMBToaExuKBMKRBFF3SeZBQjL3o",
  "key4": "3zeNGUqxcPyUDxV6x8Jy1igVZdtFXM9VANWp4LCHueXDHsk4EDQexFp4dMdF61bmNbrgAKuUKCPk12EeA4NmYB1i",
  "key5": "to13FdKeLKDSp9aoEz3bXkKF6KpAm1iJhMpCcRB3aM9pgai2Zh1YwMURMQeSQwuhW9hSFRwseSwkBe5BPVNK9AB",
  "key6": "31QBj3zZYVmWKxUi92cuhpAjjvNi7GXGKfRC6ZZnTGKDc1VC1xTq9TozgpZF5faYN8VoWdRBYfTy5VJiTLBeQVMv",
  "key7": "3E7cfJj1GDaSmoJyq4hscq62CNiPnZ8JUmCoZUJEUNxoqG1JhKmmomWK3f1C3CjpgVJjfutseyQ1Y4UEuDAVJv9d",
  "key8": "22QF2Dhg46qL7nQA469bGPtavGVih6S9E4LRHPLoYdsfwPgCRp4mX9DY66qSECpNqSd3tS4sdJ68UM889T2mPw55",
  "key9": "2pYMvka6QgDENUGBRwzpHVSY4Z3Rencv9ynrcNRsscR5W7BDbj74mZAwjnPrUQbsLvGGrH8HkSGE2m4bS6paU124",
  "key10": "62ZDzEFwNL7bhhPBS5FBY3cmBnyWUEBX7pvbtajcWvid94JfTxXVxm78i9SS6mhHVgDbBLzX2QJSina1e1xs8YiD",
  "key11": "5QgzHQbDUQLLpKwMChgSLsknCwP14TTUbnS18qNwrfpvkshWhhCYrh8ji8RDPS6ssfpVDbkn1RX2gsnzMdvjoqrw",
  "key12": "5E6TUpq9E8HurLhmPSopVCqh4qYKrSrd5KSLsTVzjVMKfjyShJF9NnGrx3wzGSrSyeqquVxqCKhVuUvSBj5GWdum",
  "key13": "5UYHxCw5Xvg3dNmSSEtSELQauhyHnz2JJEhXEjjGTy7pMATkbzpEL2Jo4kdseKLRUvvyWKttF1WAFZS45Z9xcwfx",
  "key14": "4N9zZzMci5nRmn9frfoBttSonKPtZNxzjw2UnXPKa5yTTphVCk7dcTWP5StXuPPh2J3ZQFpCDNkgtFUx4CPKYLXL",
  "key15": "4AAFUvvRQtFVx5CpL15EjQfyKgZWczmB95MJBrVWkHDZ1giH2W9vJdLPSQVDscRQKFGjJqnTLj87LTvxhBuXtEKn",
  "key16": "YAbpYqAKLEPjWd53e7AkvsD2xFcQEbkRyakPWJJ8K3FBU6p3zCG1NPvPGSpF93cCqNhkAM5qoWeLTTwk9eyr31q",
  "key17": "ViWUHA53AqPfZM2XB99gTL6y3YkGdovrmcJy19XYYCBZs8QdFMxWsowjCPZRRELhzAR2eD3LizpMJ3VyqrJefTR",
  "key18": "2y8RhrVS8332Wkr2TpR3jY9Px1cJVkoZECHHHKZMY1LTCPni1j6WxStN4TLnZU1RNvTDLgmfcokieaG7gzDzcm5c",
  "key19": "4x4KvvTcnFpzZDzJXx9kUqETwuvSsAS4GzC7Yp6BoxuudzZvmXEN4vqoNzyPq9LWKiHhewQrSEg8Sm3eN3r9Ku14",
  "key20": "3KbXmsm72pt951Uqen1hZc9yPJWWCVFLmRzVdnYA4HaQeSXFw2BR7BtbA5eKtWFxyAmxXmLGaJmriAdYsUNVehBK",
  "key21": "3bx5KanvQwvxbZ8whHoq2jEYqnZfVzmtuF6AdeiRYbQzNhCx1HFeKBzAFpAz3UdfLcEz5Yno6zwxqQA4KFGXccBM",
  "key22": "wu6J7HJAKu9QAcFS9k8NAQiKRNhht3HCGFExjZmMBRpss4ZX85Q6RvN2JT5FNrMsPPauReRJniZpHmgUAtqPX2E",
  "key23": "67g6vfgnWXYdqTo1oj1qUgtRGhw5yVd5kgYD4mthUx7Pq8z4CF8CmnwPJM9a3HgqFMALSAMxeKQHahZniFPYhVWg",
  "key24": "5Kt6K11T2zag6oRhD9DFLwqjrcL9t6AMWveqnY9mWQrGnQYFDYmwXssJtL8igWNdyBsQcd1X4CQ5vDbcdBnpopT6"
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
