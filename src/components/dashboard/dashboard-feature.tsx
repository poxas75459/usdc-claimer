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
    "2vBFnqpLuBmTNJBymtbgekxDF6s1eBbrEDh5uxohaL8VMjzjvjEeG3nv7QmJ9auug4ngR9ZpPYckfE3NftaiShZp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EmYvQpmQ5e1bp93nDtjDtMx26jrisTuH6MrarGd5PCScawX4NYp2ijgCrFyPEoiYDQRPbsr5ExZDYC5jd4KULqa",
  "key1": "37WkSYjBH6LU9VfVDarqZgkDZu8KmeJuQ4efKb9na2pN982ZcRGQf8jhSvywbb9weFwiNZrnsSvbYyW5ctHyC324",
  "key2": "4sGVga1gAo4UCXTGasUjzzg2ohhCjLmS3ffdyhCSY8UpxaSYHMqYiN1nw42Wzwy9YioQL4iaWUGS6pjfxtg6k4Ac",
  "key3": "Me8Q27CqTBSzAP5p3SzDhQzF63e4qGcHrGVWhmmXVDrDMoeCNzWLz41R2EqYZFJQAHnhuHzwarPEQ67E9FJ15mi",
  "key4": "3xK1CwDU66Pqtj6RZfmMwFtquPNQBdj8tz6zMkj8VzjXQv7jtm7nFwJ9uDwvqSYJ1d7Kc6UVExmxgDiAVQbRtoFc",
  "key5": "4XWKuhUQz67iTZ6RUopyhHjUQw6AuwdUfGJXU4tyuz9PY4Kx5LBuLzGKjYuKT2tna25r5yNSM4e4v6VhhWKiVVTf",
  "key6": "381b5QPyVjZAoqSF2Ks7detRhCxnSz1nAaq6JwSjb2Dwm2VSRdkzrCqhRiQjFMBVdZGKFQ3BTHsvhXvKXyprheuk",
  "key7": "5wZoqDuWVG7B7oUmtgYyLjknJbVS55mYwiG9UBNx2VNbHvPy3q8foZwzL8ZQxU88PXsZpLZz7wGiHmALSut5FTPX",
  "key8": "2CWeYVJn6hF4yexaFGp4k8qjHk2zVcLa63JAqhY5XwPDHxDZWGD6MYvS8njVPavJrGyPTYgyxZmKKbtGchuf6FYD",
  "key9": "4S6tRLLv2bNWefeDtHSX4fvCZLR4bPGaP5zNW3aPRGEeNzt8mWwgGbiy1uDodrNGgKDv1HGz62tWS76Hpy1TFwFC",
  "key10": "4kcRPkaxv79JwEeWCz3csSqtDHSZERmdRxNjNjJBrvN2wHgjhxzJrcbd4wGfUs3WGVSCMabaXfzH6YSTra4mkBWo",
  "key11": "3AQQDVggmfZw684nGb1BVkGkZBvXDRVTrDHgKN83SGT7Jf5vqXHw7J9VHnqWHmdgmBbi2QADSRDQ8gSU6KG5RRXr",
  "key12": "4rs37fqzjRCJ5QcS8NLPvLMrX7AaA4qu6LEzVRnb4Jr3StYB8EnMRe1xqVaaTihPidUtkyYMb2m5QjKd2nfSQbZ5",
  "key13": "4u82H1EhrhRkKPqN6G69qQAH624LHDFfPU824uQ7tyS9PYYMQX3LadXVnSq9k1ERfTsZDcLcKUvfA5M3doeVKrVK",
  "key14": "4MaCuZp7JZxDbsTNHjr3X9X9qs7AwZiWHJsU6pfM3d7SRzAYX61E8TuhzVbfGUATfqPJsrKL5dLXX41ud8HcACSv",
  "key15": "3jSmb6jmrwxJPPz3KPauKafcJTQvrNpKBghLHePugZJN7v36Xz7QViDgre5JRuyxMhS1WHZrNwJRWg9es8JpoM8g",
  "key16": "2oBuF33pxaGTHT6mq4Sarex7Qyi1tbEVT14iyt98FBpSin3jJHgZ6GgLTTWG4SAhQ1vMeZMrhq5rhhVxm3HdY3Y7",
  "key17": "8yt9cFAuviezLBYUFuBZ1EVze3yQxjv4CSLPmQK7UszaqDNa6fiaVQ5XQfPj9g8vKYKGbnbM4uK9gcSYRwyRZyX",
  "key18": "BfuPopnhk9VBJuk46BP5b1bphAHLMKq9jMymnX2UsJh9fAvPYPqd4XixXRj6G3ekUuS6STsevEqcFXwDcyYmpjo",
  "key19": "5FyhLHHuxEM4xaDCdvV2JbJTYHB7Hrvs2PBN5FvsAYmq3o8Sr3cdtnSpTyPh5ciCwZjd3LUH8UJTdKBj1WR9Fvad",
  "key20": "2vFqjmnLRYuVMAQY32tSwrUUw238jp7Z1Ap24YRSHoWaUuFN3q2mbdWkzp52qkZ79vna8sCHuFprz8YqfxQq98NC",
  "key21": "4fNAAAYaFKEomFZZMS6kSaLjhKmVUzuM4Lo4LpHyY9hB8iJcrNNiPu2YvesHmLk5NHNoryoTE1KRC4croC9gSEQH",
  "key22": "kPZXKKyKF8fZ5VCv7VLwh73Qi5bH7zWAYAsJ3jWzKhnRJYSZSwTxbafoMWq49ruHhJEXsgF9WMY6VqMXXMF2F9g",
  "key23": "Nej7jVgkgHYN8CwgioXBMNmb6r4Xz7kGSVMEiXVznVmn8RLpZAv5SDsfgjBruFrCdaWqWwLBgTH7oJ1z6DiYAnh",
  "key24": "4z1SQhQvM3how7nd4kGVJ3Xpaa9Q2E8Ce2hRRkofi6wnTGgKR4vyS6wNWYwyDXHiVZu5Fq5N1AjytZicBuWavfNx",
  "key25": "5TmshzuepiAvdq3bWHhCPQsgWfBHkCqNhy4jeBaVi1eGb1EJzSC82BfA1B66YiLr4C1V1kD1w5aC15FdPze5NU3Y",
  "key26": "5ZSmMqHqxMaHBaJWE8HoYTX2xzGhxUMbMQUFh65jjQEp7Fr132uztnY9Bg4umGz1RRrXynvuDhHA9MRUvgchxpQ4",
  "key27": "5FAMYpf5BmMyfs2djE29aPFS9byZuMxv6zxJ2wtbxiPuJRKvKETeTWYQfiNfW1MHFStkNqY9wbn6Zv7mtU4v1eq4",
  "key28": "5X4UKNht3BHqTeurx4tCbzMN5Rrm7mBPwTfDud3HCRQT4mY5oC1qNiLvmGCHcyi6WP5z6doCHQA4cmVNMVFFuxjb",
  "key29": "34Zwe6CnBcathDUp78iEGRV46vNCBN4Z36ax69bcynb1V9NjoPrfLngp4aTB1N3NgkiptmPQ4EPgUHoiDqHhhFZQ",
  "key30": "4sNkTohk6s2FNU5SUEf5EH9d74dGN5BRGBPuJR2gcQULtMWatD6X5BZiHN3FJLvxk2DeLyTyvk4Wh9L5XBuUABFQ",
  "key31": "3ZmtjavGmACoPLSz6NViws7vSp1jTgPZUYpYePWbEaRSmpAcLssMVKwywmrCE3R3SejzwR1EnrfkXNUWNTokgKtu"
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
