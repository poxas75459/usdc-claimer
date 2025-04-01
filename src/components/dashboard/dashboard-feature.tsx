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
    "4ACNGjiSM1eUE6Ef8DFQkTRpCfRUUvfdbCtoi5GJT3vZ5KRVYdxzv9iLQHXGZLRvHntAiKF8nyZ85toHTER5fnFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vkKyUiJHqGwpWVyoYTi2tcVq1tGZ65k9s9DKRu1xcU6m8merBCwucc57hRGyZafKsyCKZQMY9K6gYBvs2FBKm8g",
  "key1": "5yqivbphukKeKpNHMFmUTscLFX5FfLgUWCKLkwqpeVymjyNdwiaVKohUDrrGVUQrkcVTgy7Dvem3XviudJYXeChx",
  "key2": "SWMsHP57uNbbL1X4nWs5RxCrezmvTEtgGNt7TbjJfL8VJN3WPoeF3CR2eE9QbcBskWkyY5edyHi9z9qSHjuddxC",
  "key3": "59EeYcKyCCtKSVWpczj2AqCK9sRdvujXA3w9o8PD45io22cjTHsc7myQkAC7p94cBUVj4Q8eFfbXoqgh7tV5AAvQ",
  "key4": "zkyTGVpA1Gwx9twCgcJpN5q1sH92UNN8om7itgqKwJpy27ZFpPi9LZ1YJFSb8HLo9Z6QZPgScvZi3kKwfohPoh2",
  "key5": "3ZNnrXtmv9TXPw5Wcq5daDog8ap67sxbpSZ6SVChzNo9NAbdoTmYyNNmRAtokRbWUGHMFuB2FmWT7AA5XMjt57hw",
  "key6": "5hmN3o1KGTKuYbPL6TvtEvqAw4fEf1BGbjHXPabYrbK7uWjuD6af7nBMnDkTfSUBZGtRNvjEh8jNVJ3NiCjjjZ8U",
  "key7": "5ptiWWzvEKY658hDc3pNRM8RVet2ZmcZaxLWhgiyBuQatq4BvmgVPsGBBCXd657wHEjZm2Kf6myBiHCnyhFkBJgX",
  "key8": "2EQnQJiVVnJh6YSEhZpmTp6crGZeJ4jTLghSbCku4ZVu8dkbBsSvVTxac5Nhify7cxSLohk9bgyoPqaXnMoZ7GmA",
  "key9": "51E16kDNqmpbyhifokqBychcUTc2yoDVtZqC5F6Yhx8zaWi1vZUH4dLf5kzTDitLHd9XAUeM66apvDPKPgKL8ZWF",
  "key10": "2pfA1RKpssvrMACRqzWGZaHkgLNzcNbmZfX6XSr9fe9dnMSa6y9kCGtRrtkHAJVmdimZo8uf1rsoiwryM3EfsPTm",
  "key11": "5MHsdUtCTH9gwLECWZygvST3PspAC9w9p5jaBG2LaDE9vhm4YBuCVJoJ3xfzKTXw9s2F7F7QhpJqcWbkCn74bCHV",
  "key12": "4nNj91iw1MErskyPKbNvvM5gEe5a6VBccRmJ1DHs6zT6wamZ27qP9CT5jqtLhRrFYquAX61Y2wZ8VZxd58gP81YA",
  "key13": "wiMsYdFDKSse9XoWiVeupB7ScW2xxkKefx77YBwEYN2sB1der3Esk2e1dYxdSDPkUxvCB1g6PeegvEZf4dNirpQ",
  "key14": "2jdHWCYBXsCURTo6P2YGHFQn8x8h46uzTx6KTvwPHy3ZW7AXz6oGtmaoPc2DPePqp8cQqfaQMXZAHALUd38nbFT5",
  "key15": "27iJdKe4aNTbZamvTbD53ShhpXvi7yrJ4ki86Z4zQJMAwbD8koEZVzprmKGqekLDK84fWnwU17HLuBzELBrA29R6",
  "key16": "4dZyboZJVzYzdurRFhZ4SpiGyD5WhfSM9k1nySo5216vFpJyJL3Kx6XpCXFCP2MTLTkhnDGiDmvm3CNsoGuLkbHr",
  "key17": "3Qpe1pLwAfZdrF5yajbRtQ6GdFT4bS6doiAC3wdgGHRMg1S3EdtRyc11QewpdbvBPPzcM9aXUA3Yr6sfLmqY2nu1",
  "key18": "3tTvjnsFmKfZxMGgbY1XYBkRYqwWdgZimF9U9JdeZ1SVEkzwpFyKpSmyK7U5dFaQhuh36gSZEN6qFtUKduyrP4zV",
  "key19": "267rzjMtpysGxY6XcnGRNqkJZYdJBf8H2Emz4XqvJ1x6VvpRViGwqw4yRuzYcEWz79uYb64bLnwKcSsn5iMk1WNN",
  "key20": "2pf8i9yQtTPHmDGhtsnLJwEyupcvYPXbnuQAXXaProLmM15iEBDdsfDrxTMsQt21bPTdqk9xV4pHbUjdti5evg1Y",
  "key21": "fXCQgheMyAQcAFwBtnZaYueoQCvaD12nCC98TPBge2KcGbQAjFDZ5K3x8YD6ySo4nhPASGMotzvkzXDrXTiH9JC",
  "key22": "tYoRh7YBptC5R1YppYNK8L96nktq3qVeYVqLHFuSAr5r16MLUnQFgeS4KRmvweh6i6iUdUoDkRC3b3TqcRGt9C9",
  "key23": "3Fc8QP91P7im33tyBvuJuXwxybWQCxWvazX5UZ3HFPXNiTXFBevXUukzs7pZZozRgYPMRFGDKcwYQzv661shXWUw",
  "key24": "4EbDtgbRDE8xyG1f4S7raZAPwVHpzr4RD4robe73x8oCt73dMhAyaKcq5jsUoAXr4e1QiEz1gUvMLxZFUUF4sCWu",
  "key25": "4BZQHyKVxGoeZXJBQ7qYvtXMJ9chShgtavnBVKLWLYRbsf6h3aAFNs6YjD5qV4aCxpfbss8GR18ZUEmWX51sL9dc",
  "key26": "377npGQUdGJcvdVuyXBwUAjpjRGHshAW3FmYQuAwogNDEwTpmxgn38k3RrjpwDWH1YSrBURJPydbhmAfd6RTXGDW",
  "key27": "63VEsBBNJ4fhG6e8WakgCoktAwuH8pnEbB4ZZzdkN2VoyU886vWVW39ze1biREYn7xi6UwJjv4Pus6LAE2G1MtZg",
  "key28": "DSYfdJmZZiLqHYgSnfjpaFkDYHNyfEjbRN7g21QfoT7EXQsdF17fCJmaw3TF6Ckw5ZK3vKNi43PE6z7MiXD8b72",
  "key29": "59r6gyVWe7yaTVyAuwDwLzkZCdcLbML6k3H57QHTgccUU5px1Dbf1DM5fnMM4Sf4MpjbuVQGJvJiyMZWWuSRqnby",
  "key30": "4vqNBDQ1ixBtRsNNVALoiQJEEdtEtA9PJzdDTCUJA4M5YRfRu7sqw6LdJCTJEndZPwmpxyPXYBfmUogGmoJ2WdR9"
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
