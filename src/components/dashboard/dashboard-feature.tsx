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
    "HKQVAnWYBf4a1Z7fh91FDa6swaC3HkQCajG5ApWUGKXXd75BF74S8FuNYz7ZRQoxMp9E7RFZi2yn1XndDjPMPaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "662DzoCGQsWhpEA4e52K4A8bFd6QMvQig878dB4DfTfAPdhZsVgtYHWEZpkmKtHr1QNXwNGrhdUWB6Zi3ZqtHBff",
  "key1": "3jUyLUMVLCEcx2yGKbbpeZHhVU9d7WzudTK1at9ff16moYp57xBYtFRrquu4wPQvpRUZgkQEveY845VUApfbyZTb",
  "key2": "5QZKS1UVhcgvsEv58Vae7fk2Zyw93kUnxYhCDQg2BFYUcN25LpsNpXQzYeJFM3QByGrv5HAK4eLGGGyZMMYjmwWT",
  "key3": "2ehBCDBtp4LjyYf5SWCdAnj1ZPM8FPAAUJ7T16phyhf39c8CBm83ZQTmPRKWhMdQ1UKv9wzjgSW1sbcPwT4q6MsT",
  "key4": "4Tffq5n7ZPuEiFaFukBwNaD8kBJEYa8gRwzCB7vA1GCLp7dh8M6Z2ufaENfTR13C15d47pDMfeV3DSoa6ZKiHTQo",
  "key5": "5TDQ1Re7fXrxTS1YS6DdnBPSweVnRdiH1UcEjLZk4iq6q5U7Z3LUjBGqQWaQ74JBqjZFzqDA5Q4dQPAYga44ughW",
  "key6": "3XGkzf4WSixpNrDuy6aPYY34YXhzKNmd31CpPnawLHkJYS4Vz3pzrcmSXu5t91N1dRXG6jwK1Do7ud3sQ8pUFq1k",
  "key7": "bXQsKxBDp9JgH6wpU3ucbEMdArVtFQUnGiM1K62PqQjsaBTcbTvpVevVH8GqX5RnVhtAXPy9e5YWfBwHub6jGYw",
  "key8": "5YBJoErmS2RC7qRSmyfY8pttWhnFeocCEJ1g7xTxFeqUwoXYbivyjRLNfemaoUBUpektdN7p6FKZBexxj8mjAgQr",
  "key9": "2RYgV9TgRVFGzp94sgvDw9dscUyoToFZYxMe49irvkJX4GjkfNvkKHHyuEXEA4o6aVAZS3EfJxp9KrAzeTRJ6Ken",
  "key10": "5iKsKEn8x5SwcWkExedWmJY69XX5GvSQjkbLTf4HQVSXq2XE4SHE2so83vBh7JvXPGTE5zxrjHzqiKeQ6paFwrGe",
  "key11": "3FVgHrfQpFtEoEpaEUEx4TJdZQevMx6e1rTLvsyDz7Ai5HPgFVajiLHjv5rvuGfszz9zPqYGh2tMW2y81G5kBQq4",
  "key12": "3wK9zuz9tzJa3VF8yDjEMyLx8adrrxteqTcboV8McX9oAVXUGFm1bpC7cb3uqud4czBgUTLSKwyKJZQjQmQCX7h1",
  "key13": "3hssfz5Z93wTTvgwHVsJa9LU7gwT6ndMMVvbmjNDY1b3EyvcbgyKFjqUpJvE3EvktqLjRmBgMc4YE255skV1qLqS",
  "key14": "r17Dw3itugbbeH7ezFDzjUGUHCT9n5uyUWvwFep9fByq7tUGd4HE7WSzVAv8wNfDY8ZqNd7WrYtp3wXjVXz9XM5",
  "key15": "zrppCBTmMaEzDYVnW4wGtEeh2cr5pF5qgyBUfB4rUzmmnPXmE81u2HzWZvsMtfuauCNggRTyndtPeEdGhBcdih4",
  "key16": "39CEibrsVxbHKEKkYcv9h6qYFnfvPBCBEnRtb19tdD1NnPP5PAAtV5sMSW8GFTqdeAEdjwuaNDQ3rbpGmx8Vxpbz",
  "key17": "4siW1SQLf17Edf3bHbnwGndi5eUBLxbFJci189VK9vpMPXPX3h4uh8kBwYoRwKR7w4kNBeh3SLAXVb2Xbk1iUbzg",
  "key18": "5L43eRbm3erAnM2FdApew9AXJfQnXdqKXm3yrdpy1sMYFEJ6m9GAU3YjyGf5JyH2vbCCKDWQH9P9tzKQhd6jMJUg",
  "key19": "52gmGHjZo7VDBMjGR2BMEhncTAuYfLRMzQ1Lkco1uWCoyxNeoV49hFtsjG1brngRc3YRcr8khzSdYTR2Ayqsb3T4",
  "key20": "28LE6BGN1WXZe4cTWpLFNYYuXbqdYYmKkwHVF4wx8h9ggKFpVYKFbad1uATmwKTQ57uS5TFoE6edDXGrM27jvk1f",
  "key21": "4VV6Ec12cVLeXkuUx1XeE4vCpkAhAndCgjEjzk7LXBGhsnefjSfZRw4jMZxfDWu81sd6m24g5UKK2wGxin1rE3MK",
  "key22": "43SCyhWyTCdKqd6iUyAwYprpLqbuzbTn4iAXbjz5w1EwGcPGT4LWFahJdMyXNZNExSMBEDSqZYKX44CBz8PU3Us9",
  "key23": "PZJWa2ksucyPUHBapm6VkHt1v4AJF7e6BagZfsrWd1ooUwSCTPeBPkTHkBa7JT8TENdpDqmMEMaT6ySVNxmHstR",
  "key24": "GLmtU3QnbcjiZtwPg3bQjZKeBEUCyFtot9DJwYWqvc2x88R427WssfbiUs4bR1dkj8rVASPyHKswKncrSq7bWBD",
  "key25": "2fqcaQwbM8X9XPpouDcGYrRSeUvPSFqKiqmBS3U5m6qJk3MtpL753XA92iN7cvaayiQRNYMs3GTcik5mmJdCtNhM",
  "key26": "4LwhXm83Xe7yYJEY49NPodhpb5vJ2mQCPTN972FoYj3bwSSQSbG2Dp7MWFVBxGrmeeDjDcyv6TJQyZ3MGeLEJhHa",
  "key27": "ikpYhYM5yJa9DCqwUHqkTcaKMENe1YQjsF6PQS7NMMRHNVwXTtziEBwkrQnoXUnoaSBXiqXYgcT3q4UpVZehQT8"
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
