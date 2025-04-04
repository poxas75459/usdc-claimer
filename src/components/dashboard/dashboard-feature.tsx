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
    "2hgB6BjMJfbuuKg6QejMmGmumwT2VYqmZetHvs7YTb9gpdm2P1METF9uphLZCvxtU3aMYQBRewzNV7cXHVM8dubK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JQMxSbySe6QPjvjTNMRxnQLDcJMzhERLq96gZGC3xKTdRjBy4UQYga6HXBV9bGU346GjdVn5rk3jsDq2P7AF7hA",
  "key1": "4S1EfjyW38wX8oSTP4S3kfw6Kia3zaw6G5Kx8PnAT3UsmB1BzVoMkQh1UyGsBE2VQT2t6DnHkvAuQt588WBvFrQj",
  "key2": "3QZFJS2Udmzq38jwNhFCjrrd5N8G13J5LYo8tH8i7duymnx54qYr4cPRdZTWcm7aazcduCdkM5L3cijmggxMMHWS",
  "key3": "3BXzaNZpDy4dkY17hmpDPyKq49q3qQYmhCgYeWTStMvHDdduWtw6KfpnYUeQGcnR9zPfAoyuDmQ2JKxQbYtgXczf",
  "key4": "5jtqWSevzVKhAVs3Heh1DePs3M9ZVYmFJE4nZjN9tNvUbG1YaUUafg4fMgnwJXKJzgogDoouhdkejWhRh6HW9MNn",
  "key5": "5vjDM6tFvVkeyVbo4odibTupQXmitxKMNpe6f4gV83LLxL59WEfpkMi13r18JKiJXQJ8qwtygQvfJ2Ai9QxV9MKU",
  "key6": "2uWa5qY97YsDSY93E4mQgchuaoYdGDVE4PeLGCcK9mz4fSa6VAh8oJHoAj2aPxaVzyZFXtdyR8dU7hQuwRE6211Y",
  "key7": "3bN95pkurT5M5xaQFnm2ZmK2otWiGMd83QwWxosQgwCSHwAwDRztMhqX2eAvmbTKKNmZXB15h127Z62XTrEcrMKB",
  "key8": "43CxiyYFoQpXNGZTZpyb16SuZZy7FpGk8h16Xo3yc5LshrywhY3JijGUdMEKXCpu8dfrp3fHy8jC4LfeoBB9NvAP",
  "key9": "2r6VU8xDvZmPQgGkytTh1zycaepwYFxX7DA26eznZLJCcjSRWVEEBXPzv66ZwpjDwypZAVSKBpBu3JKuinE27LGs",
  "key10": "z7coXAfNbbzmFkrTpAeDnTxGnYu6myAScNjk7EqFgpsaMqDQECmuvf4Kbf9Gh4SiJtV6ooKA4oNDpuxn6yhaxWe",
  "key11": "4XjhE3wVxdaycHtzmQQotaT65fvsGAqJRMZWmmwTA3yH6ta7DCbc16yFdfcVPcqA25C4VD1HM741kWXGCDPQBZrA",
  "key12": "24g5Q6Fariz7hgcShM7xzVgjTQCLX2sA6SxYz2p6uhfCdKqRYmn8FKrjMwHCaBof9UzPDTmiDKkE1ocTqWJ3zS1S",
  "key13": "5nG2RSQVf2FhGjTBHAs5uDL5LmtRub8EYnjEwHdy2W4wzZVUAB3DhX2ZwDgv5QnBAPyEU5jZBAJbpMGspAeBEHip",
  "key14": "xvhf68PBoGDXeAhXkqGnCfp1UoFYjvtzxqLyFoQXAvyMM6h5dWo8cs4Hp94f5t8kFgphn6oQ3zf6hrdojYt9j5G",
  "key15": "4C3Fz8k2EDKk2aZKx4e8t5jtkwAYAarAx9g7vw6GDRa92aGYERiAjBMQg2UD7ZD4NzHK2ZNCtq3UetAF2TbMwRvx",
  "key16": "2bccDzoXxbuqGWojY5hTmi3kqSBi5MMFpGttn1HejYHqUTMWbdFDfvJtE1mHRfvQTM4VXfmJQ2SYFK8LZnuCisQD",
  "key17": "hN9EePu3dLbjt7r9YersdxJKvrjWBbUHjtPHD6JEiMyCUs2MypR8Jaqym9EYUDwouPJjYKpky4QVXSrqASjuTgA",
  "key18": "mUsW2b3yrXDJW2JRyZctKMA6CXBdceMZUEibYvU15yMGto9THEFVedLXWd3cAwCwKaHQjap33PZZ4K7QNqrZv8W",
  "key19": "35cccckBET1x88LnBg7oMoLC3crbhuDwrwGZj6o8yCBgA59SbZG3UWeohGvpK1eRAkUrHJxxeSGMjHnXsk7SbNi1",
  "key20": "2MwuLSpnDJBef1af9RBYjSkuTadmhp78yX6Czdm1sk6f3NSAb4NKc1xZAwTjx9yrzvsP9Kmc4UgmCDgwmTs1DVoq",
  "key21": "4odetzK7199sw6M7uTYdUNPDoaELBST4CYWQsBoSV1iMdQoqXZRhMq2d4W8azdgNnsSNYfTkmyKApEDrJok5uu15",
  "key22": "4VXB2xqFtpS6qhDeQEb6guwP4Lyi5Mp1WmxLyAN3umbQqLhrGnM92ZuJDhneBFr1d3yYyL3SPdzoK5iRqGW1HaaN",
  "key23": "HaAtpDAQvVKohRUPvuUwTSTYaaswTH7jZ8f4jPvzddYGwxcxsJX87mYBvdcZ6giUwnPF3qbQWhSa6fhU7r58rjq",
  "key24": "3V938NX4ZyzLnjAHYFe4SdsUeQLZ9M8NhBtedtg4pwv2cirjNcYk3FQopZhzgqRKjRaP4zXPcFx7awoSgMXDu9R5",
  "key25": "5fhxm9uCV8LJLPoyuvTwmriSLTuCjiAha8xfxJmC7RYcorZSy1ZjikawcCkhYynhPooPHaHywtP8Wo92F4F6ZsQm",
  "key26": "DgHLKwjrhW9RpPwFer6iQAC28dkwe2PU3mTAgYR9dXJ6QwzBJfRb4uyvULjhajDJh7XTiKauEBBwN2V29ZioWwB",
  "key27": "Er5y8g3yyneZ48eREGKroPGwsUFk4C4u8VxPpff3YaQeiYzE1fdjBXs922Eo8utbdWFXRkNzAvf3khAxebAhsb8"
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
