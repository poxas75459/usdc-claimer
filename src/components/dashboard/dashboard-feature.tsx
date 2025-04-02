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
    "3tge9T8LakHZKZ5zWxf7qQD7Mo2JGXezcLjwffL2p5msLCmwgYakpxa1sshaTXjZkRMmvCExvd58GjbbSNHawXo9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VzEx7pduuRcCq4mmMUnn2kLV8bAStC8QmXtPk21Jd8gLzqJTe5FaKv7uFsJc8rpMGdWQJnwxZ6p1tdp5pkaAaKj",
  "key1": "3NdTdidHrtvPhaR2uWJMDLLnaNcBWf2rqRj9SJMavyqsDvsLwc89qMMUzTSyQxnxaUMDkKYfU73NMxAdZDmZDaq1",
  "key2": "HrUm4xK3SErcAoc1ZcBh2koQLeBMSVamwhFMugLpEay8WZTXHmNesSvN2B92dgdHzfmfN5c1VDV2v4Ups6zfvAZ",
  "key3": "ERv2JKcGvZ2hCMff6C8Lbrjj2izoKwmFj2UUPTqjmooVYL1PHbjy3WWwcFtVsC1ppRUntGjvdVwBuNdi1x42jjX",
  "key4": "49HiYSEhPx3vApA8CZe3a7pnHGiribo976KWW7SeUqgxEXHbUftLXSo5qssW4S8gw4edziWeg4uDXXfJWHyyYSx8",
  "key5": "5Fa7b8hAHJZDSESXAxH6wAfH97SM4xHyFy8Jn27FDsnyngZ4mXqsXihrrPnM7Pxq18EzCzY3Zxv2eAg6MnLGrrnH",
  "key6": "59mQx7EpEzaPGr4ur5pPYCfmjcX4tshjDBBVvEQQNjVFd1H4kFStFF46QS4YHPGLMqDJfDD8pjM5Hpzj6UYyQcGm",
  "key7": "WqZzT1WGewNTSMKEALbYtyZYVXPpVPmHnsoKLpxwRuNBKyj1dVhPcvUSu3iV93HK1GEhAGKtot94uhBn2Cv263y",
  "key8": "5p46vkM8eTNnNLoGQdfkcRUE5qapYT4xYCyXf3izUftuTrfKgE384BsQAUcdAXwDYpjYb6Xv6afQzYh8nvGHSNTJ",
  "key9": "b8peniXS39EWMAZEMuAzuR4KVJyRRP8pqPhbuhzs7dXdXKogkYb3PJ71MUsJH5gpyoXvfQYfbruvPPghLQPkwTA",
  "key10": "jqUBHrUaHMVspVWn13azZ3AcNw4gpG7LfZ3XcVwjTnkaQy6Es5uHwevpcqB843GmmX7vGpvtxd2kYDnUGzagcJZ",
  "key11": "5kruxMmnnfm1UEmR21ieiHj8mibdq7Pn4sxaj6tAnVPTZTyMC6J39NepssL1da2XZkCeVARnMvcZjBbSXVHEDfhb",
  "key12": "5cBibzaTvLuSq5GeFcu89gyEt3YNMwkxrrvVRAoPMvfmvRU29ZsFHDCvBkSdBSmbZopubpGMyT4KqyfkpCaDKcp2",
  "key13": "2xseQT6PMWLD5a4VVAYQaqGHEaVWc8Sm3GeeUnTRGmvyefwSAnHhA5w5uTtgRkD3apqmpLj2Tn339iYkaZSeYbz1",
  "key14": "cMEbA8k187Z4fhVLDGY7wj9v4WFyonhThiwWatSJE5HFfBQ2H3pg68sRo4k36sVUC489EM2sg4w8wrkpDzSFEfY",
  "key15": "3iyMEP37zHvCsTv7YNMZrtJRNcJzxAAsd9SWk2gd4L9gctgBZiNvYPVPQXhxjFwmFnjmRULZrdp4B5rVFwkLAdLq",
  "key16": "iUx4pCmGeVq4rhW4NQZoW2fXcPQU9y1a9QBZCPTvXWcBt39dqt4zgjejjdZM2FKtpNrrkWs6guB69kqe2vqADho",
  "key17": "GGU8UygyW1EZk2HksngBDA2DBHKfMnoy7e2RA6vgDx8wkMZGTGTDYMAqCcGqNUi8mipK3bL1jMJpQnujoGzjs1r",
  "key18": "SsXNfBW7EbfcjqyTCExpv5wBz4uC68HyuQATwgJKLekLL4qsfeCZgzY45WZ9VtfZxtmGNjWRRi68yx2bS79yEbU",
  "key19": "6aTNFSjPJipMLs4XmDhGrGZmZiLWN7i7jvz8jfLauhrkuvpzgxQgakRbQRA1aNZfNBhXrPw2K9tNQHo2swr7uRC",
  "key20": "4RpvCJZxH2q38MwWnD5mRuNoLxiC87WHitkZFLsUMoq7yXJUzrpwZf65H6nSvJFLpGcegeSQjAKui8Wff4CPvxNw",
  "key21": "4VTcYmTEZND58jfe5PCMqhd9d2rtXQbhh8PGaTFNUnBSVrwqomV3GVKDJLT98L61Q5wqwGLBLMigoqnHnd6i6fY8",
  "key22": "634RoFJVoEEX6izEd8XVe7fGvikpXvR25WCAGi2M4pdz9bMxSap3d9YFYXHWDZg41uyjZhfSLfib2A2kT5EUArGb",
  "key23": "3U727kinnEjmbK33htPZsxWrf7rY6rmE9dkdsC99YbVdDW6cVfcExBMxy2CpTDJEY6aeJdLd4prLpmoPQ29f37AS",
  "key24": "2UZeZnY5hvhpAvMJwxKJv1yTea4B88WLiHXWHVAT5nh8j8Hsg3dAemZ96mafVPW2uAetbL6ythTi98LpTqKhdEMg",
  "key25": "3gb1qiokrEeZkQiC8wn76bFmZy7aZhRbXjh5rPeCTBakjPgfpcRMW1LBa6cHWwAb6oXtFZVvqeNP4k2QwfAHPPab",
  "key26": "21RNXjM7UJhkDWVcTXhQnm9MZapradDuWk4pnoZv7vyQ1Q2d8vCgXHdBckcwApayiqn95nnDpgeiyf73urGs7wvA",
  "key27": "3av1epXeJDTzhkNUHhnWq7g3Wgo8SZZS6giY4WzkCQoMRcZajThnFpzaaBSXTHxj1eWUWYuwnei2jA3Fx6RCYpjh",
  "key28": "3u32qDXQcS32Z4FbKa5D7jWnfnrucYxtXAD7ox5icV1W2oEZHHw4FEPLK7KyEvwQzd8V3dLCdJ7rTD2RfXgnHVkX",
  "key29": "3dH5BzoeB9iEC6QHARu6AiqdSGSMUHPvXKdJGAqEURLSUKRdGhKwB5jHiay5MbfVtwfgjZhCT9VcmAmUULcSN8kN",
  "key30": "911WgHGZWZqvkMomjaK8nKpXiQwiBMrhdjFXZb6nRVZk5xPXC9CoVQCtQhiQyszCZoqDkBUTeM6XfWZKbgwgKnk",
  "key31": "51Y2CRUq8eECLmcHH3TzyQCQqkXtb9nWb51hjcAFKoGxug3B33QVvtqvTF5f8CuWsp3jT6ZvRggvhbS6ZD7ndw6w",
  "key32": "BG9JD5K8UkBfC8K1XgapnbCsTrMW93yU5okz7CKvYfCWsWBpCBSLDXDNES7LZyJNGgWq2UA4gG2nHYeVYr8ks74",
  "key33": "4GFXVHw1y7V6xNgakNRL3JnCiKdi54oofUgksY591u4HdryjH4T6RUhZvvZR2SU4HLjPDhzBpytYWVYaZs5xrs1v",
  "key34": "4gedufwDh8enKcPypW3ranVwWwYgiwCxVPj48YsNXY7ZbH9X232zQtUCYVhzDXQgptjAsfxVHigQyiyfbcrCL2Q9",
  "key35": "5YZJj83uc1TgQFZRtU3x6s4F7TJvy7tfvStk4vKrSZ8MKp3rH9WmuqRD7UQ25n8zmP9Qmt5dwx9zaCRpkfqaKxDS"
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
