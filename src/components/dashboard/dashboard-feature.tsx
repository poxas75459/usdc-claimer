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
    "4m6a1sRPnYQPdc8kViUiYrwP5SU9SRPA6k1aEY5Jpnn3AoetbxCnxcaMoaNbHWthW4qxGZVKjhjibTTYXqRKFL9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WH7iUDqYFQPoGV7WMPmtUpyMLXBjh2hzCGqeMLQvwrKx5fCcDfK9wwv9X78NKfvD4YdCYNNwJucVkxDYQZ7q7Ya",
  "key1": "39NzetnmKPGtaQ3C3bQmZCgTJ4XVqTi5TpAWYcYR3UhCLkQ8qFruCYpaPPnBhauBngzTPX1UJwqAt61De4rfLhSj",
  "key2": "53pM3JhrjB435cjvAp2hWx2fwdThKS4PseNxiNzRN4zkGme4GYBYqjb7T5V8hEoj79EQFRpYPkw5MrAsHoFFhrfN",
  "key3": "zbEvWtqYiYRQQW14k85wWTSPUAJShBkxPE12DV47FHBBCyeCsmwterfSqaMZMatqRQWqkHucHTCPHovR9kbsAKA",
  "key4": "4WJCSMVp4ET2h1X9eaL3E8EBvm7Sge2FksvMy31SGhia6FheUFB8Sfp814qFevgcxeXsRrAeWD1FSk5k9kDxYNkN",
  "key5": "3UzdszzVs5sNjb3MeZDRNbtSQBVBtRcoYkB4dRfaCMpdSUecvfhse6vowpCXinDWkFKdTiizrREA3VrS7xiV3BzX",
  "key6": "2p8To4zatbhtapKfbgdkZAhX9yFrQxAHBFxnkxC3Pyj24khfyKKDrx1HUwKbLHMwmppkUGWYT6SejwofML7xthDa",
  "key7": "HzVKjB2bhrgpPHsuXAuEyppEkMfcTKfcgcUG8vXU5y2eii72MLPkQ76bzgb2ExmqXpG94n4c7vcckxb9kHD9i9U",
  "key8": "52sfbeCfhKJCi7SLSwwog2j27WBEXmBsCkTxGfwxQYAuYXkcPXoXnafzHFgHzXXQWVsyuLpZwpsDyTjnSbAVi1Cg",
  "key9": "4RfnDLcfxLsTcZ4GLZuxKbZoW6y1HVhsnNKqPX5M6AtNcEbmZLRK7fAcrpZD6cCqYBo5iBW9DsVEqRYgNDMqhQXp",
  "key10": "5pqnH9Rymm2Et2tcLcMPVEHa4dqXtg5viuVhi2bErxoYQcsVy7gaTcNGYgkFvEjYBcjpZ13Fye6AKrmV512AopKp",
  "key11": "5ikVE5yAnNfJTNJu55GUz9qvwMTTyGwWf4D89dVBGP3K8B1vqn3eY1h1LRNsSxxDytUyuzmujFP25FfgHPZWnrDP",
  "key12": "4QxeAs9j9tLXhu8yG28f4Vzmcnj4hQtZE5MuD5uG33UwkdgRj5jQG67wrNazzWVFF5VzEVqo8BQ39y9PT3QfHyaQ",
  "key13": "aoB5ShXkxugFZX15q6bR3Ffy21gFARTQAmyNNtcZguZwmjFa5ojQBLeHi598sukc8aPY4sUAzGk7FvJuCjNgHcP",
  "key14": "23J9zR9zjJ8xp4XdqX8f1QvFjNRn8G8LnM3A6gK6dRC1pyoPiNr5gRACziGbBqitps2VV5nuCjkqwGQZeAvzBhdd",
  "key15": "4zL4XTUzEvkRHCAJYkrM77U4w5u8i45PbBxEtFCni8CLk5JhoJ7JgNASUuP8K5pvRDwq9iQuGSB37fzZdrtabtYC",
  "key16": "4JqHo25WPUonVU4bd3zsqGkshscPoT3gFkLX8qR3HNKSuxyZamdKcpvUVFhzRuojf7mnheJiRYjx18DEHNyztdGr",
  "key17": "2A4MNQWT5wmq4NqJh1PiF9yx7kzu6umAx7ENaiueiM6t2SX4j5w6tkCravr9ZkYBWBsWtNdaXPYV9pupiTXipyKn",
  "key18": "okz4VVxAHh5Ubsdbni5c3BvCzjpb85wLn2QobWif7bjN56N1wZ2e1vS83T9PmFpQfAU5fx8gv4duMt1wQ72JBEu",
  "key19": "2446roUibHuXA3RAC17vsbRos8DT33ux5uKv1mow2pgNkKmbvgxbyp1sSTvRdkg7Gbn7isTTeZd9Gz8TJr8WW1QH",
  "key20": "5QTF448reRu5YaAjjfk4m714bkwnmLWuimSVcrvzEbfxDwd5LvdwkmM4KhjnVQJsebctyb8WS7BdLYv7XynvxNWj",
  "key21": "59N2uEMwMxZ2MeftKqm7ukEfWS9UXQRT7izC4xaErgmqhbAHFygCVfv2jw7x8ZoeiFb9rMihn3akk4PQtZ89CaTT",
  "key22": "55qquBVoTfE2krzLWdzxGhgJtjdWwBKdzLb1DDgXqo98idqtvhtvpQvBjdw4Mn1TMkvDLL7QwruG3P3Z6EppUC9c",
  "key23": "5ncemRnDhqnjD5pCDKoVCwJAK67RFgBwUiRCoRmgPYWJZL6bZWTjYP8FjMAY4efYQ19tQfuAHjjpBr8TzacTZLCA",
  "key24": "3ATXJbjrA8GeoKNHyYtsvfR1JGU7UcuKnCpCtrdhi6VirUkaBqSmWyHFK2ofsTxCvYKdCxALp9KA7Kqc9iSjAr5U",
  "key25": "3aJGg67z9pFsJKQ8NWtXrRkMfubjbYr3yVyQ2WHoq5P8wWek7hcWvKTDAsHLFcYGXt3esh2hmgmnGFmb3dqjyLkR",
  "key26": "3a4hiXoSVfVsq5eRnu9UaYWjnNZXMAfgUBcne3qQJBSfyyz9jSeT9gEgtHKkGiWzuwVs7GyvUfRymuNyHUPiFcyc",
  "key27": "42X233Gn1rx5a8V4bE6TezXcM1AiQH5N4E71EBQqraPMgS4J8JCfLR7XZz42sNBcjxFXDFnPuJjPt3zwqWeTQ2Jd"
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
