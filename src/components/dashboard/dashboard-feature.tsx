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
    "wzqX6WfC5TdkhUBsjAGsY9uYm5WmkBk9otHRrXihwZZJwBerDAoNW8bsn29rYTqxB84YEc4rahWzcrzDtgtdpHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45UZf89VHd6j9woP9KMBfHyFNrBgMeQe17HA7yYHWHnvwwYZXarww3CfhHuYk9zhdQnWfoBbg5FVteJCZorENb3q",
  "key1": "5F791AGDMFgX5nKnJwCSK2wFYoXxeW58PvjMrKRftH4xPmJmdkhW7anu7CQVa93CKnKshbG8tascmvoUWd7LupaV",
  "key2": "2ahoBTPQaeeRSdPjjM8Qx2uREDvyT9heEhhD99y8VU3PvRcF15BUNhW1vQQg5qRz6PWkTqq6eBVqP9xasxrS5swD",
  "key3": "628nQcP64xeNZpoPDJmaFRbYGPQQ7vP8eYYnkKsRVNQVXhmwUBdvzwZFF2oMyc7EuSVS3Qt2F78Eq86vMXh72SuR",
  "key4": "2FCUB7wiet5AcBvtR4jEvhwykqnFocEbrqZNcYuynzdhoTAG51ELFQEn9kAxZK3umpAoebxo9X3cSy1exkRd3mTH",
  "key5": "5MjpYLLcN7XFvQY1AeUCFYVeDSFCCtC8PVPkNKPaU1qEiQXPkjdLFNQjfE3wByHUghqrcM9nT2ZFCnqyFa1FstC1",
  "key6": "4x2nZ4ZFzNniaVmcNgTdtfwaRifePb1MeNbt71oeH4R3Q2Z4tboN3ew5K6UYaHL3sfBrfEqgCGGabG5VjQRjCzN8",
  "key7": "3YG6Fbqud29JwcHZ6zmxxvyWwq83wAXB782eqAtMkwqjTmz4pJnvA8m8JoSiesr3xb6pApwUsueBhVhRvm972Fnv",
  "key8": "5de1hUwbSf5pkPLvmrFnJ6ukaFsU6479KL6J7sDTugu1mzDMjxFgwvXNKLNDwS1wq9srCNZSYW18KpjZoVxuh1HN",
  "key9": "3SRS68DevvNgJ7SNdcN9eeLWzCLaZf3Nm77zVvGRvE1dR5unF4Dh6LaAxXZUHTNuFjzMekgeEncmkk3cqnA9EDpD",
  "key10": "2YxxAmEGJpcPRub6S7HH2N7JtRT65ucuNCiAd6p2ttBKVzxV5baLtHnfZwJ4szm3LrCg8PetBKcgN4pcjxjJUt7s",
  "key11": "4T9wEpeowQbzqXbhWyBpdJ9T3sBJ1kBpmcX7wjQgvbu9NWKnamS3yNUfF71ch8kbw7Z2pcvWLKBfm1sM2DEup5xa",
  "key12": "3zNgp8aknD6kuAE2bjZv9UkME3FPqmoUNzifLeKri6FT1oHT3f5PLxk4maAq9CqRE9gB7WXG2UDaWgx4Djth7kTV",
  "key13": "zNKGqFpePsdCw6evXVwaQW5d6RRYMCaY3BXwT136Ce2i2V2dMSTXMfuTnjrhrG5BWyVDq8uyEj3MS8N5QW24cD5",
  "key14": "rjv5pDwE4X2yZ7yd1PD6X82Mp1DEsr2mP5vcHx3XptEd1omfssrth5s8FPfPxYGPqwwRiEE8GPhhw64x5ngBUYZ",
  "key15": "RyVek532PSoHEQCH25JF7HWKo8DUJdvSLeubkppNFqGLtPCTrqVGkSoJbqo49AqfHkqpMv6EhVh6g1fup5Bca2h",
  "key16": "SpLFjqdsWjLjxigMfdRy8ouzX3EUBTokhGerdHBgYGGgHTd6vT1ppPYCtW1JYsxd87qYxunJRe3mgxpkrWyHVgL",
  "key17": "5SMxLwVkYNZhZ79aZSyBCQKLPZgmLbCuYPwFEQNNceayrjtex7NsLYS42mj1mqfSZmv7gwjoz94g44qRqyJYS9c7",
  "key18": "3GDHKJHPEGZBFZW1GUfrVthipV9XspXdZSBY9aGZEndSGYwtFmCaf7hksZMKLMJg7xrCwHn5w5U2wATjWKYFefyp",
  "key19": "4C3Fc8irNa3wkworGRCkzeQqSn3xcV2vsDvxsNv5YpHhZa5vpxU2oovE1kdWv7Z7WXWfF5zecEYwQZnwVgHoASJ",
  "key20": "3LCn8RKXgV8Ld8pEecPzQxmpjBL3FaiQG7Pw5wnY1i41FcSQTbof7t7zL2g3zx1s5f6EprcG9CTRUr5xZRbGctwT",
  "key21": "2NBDMTuDkWCAAv444NGFdWRZyVepztf6Vh1CFDCospNBz8wzHGvD7zEvVxRJjxu2DXApqH8oQ6eyeUffAa8iuUMX",
  "key22": "4aUHk4UxfyX1EwSpB6q96LtSDx3dEVJyKvicDW5ySh7NRGwHmpjkx8ztrwfLU4jEDozk1us1sp5iwEPJNoBvVTYs",
  "key23": "28LkBQDeJbLWJpXmnGph5tpfsJHr1Y2BdjkJoBwsCK3TGYdwQf5uJmemtaWzVWVUcy2v68iJsunKDHtEnwKghuoE",
  "key24": "5e8XDNLVcdP4JDVqWKNP6hFG8tHgKxghvTNn4puuKZLuDvvxpnftostq4u6u3ANnMQ7vJQNqhWET37o7iPwbg2dy",
  "key25": "5nNPknYKTsMKFTNiBxvtJXsKbRsqLwfFsyZ2oHuyYcwAHRKe5mvDyEnKAo8cjGwS1qViS2YFdGUvWvzzvXf9Bv15",
  "key26": "phjzwKxW2W2gDBDUCHB8ZxRCxDaWSbCqZsGcN7XBbFHGpC7hi3C7BXSvnhXLtZ22U3otD2KnUqnwd5F9gbRRyqH",
  "key27": "3dGdMwHEKVmeeUW527Jzy1ZhQ91jMhRaWb4q2zy5rbbshoss7bz2VUC6xbSi1yxajPjig8qsjh6RUGiu6BhWwt2B",
  "key28": "r7wPqwTZfuH5eQc2dtR9dhY5GiVAZ4j4rfKyAosSFs9iHxzBRayFuG5Lm5NpvxcHXr2pLptXKVofHJgfdoHNyVt",
  "key29": "4g2YXRD9u91ADmNLNtDUfpGQYZ7YhZQyVkt6AA9Z4YCcHgQvRX2JSBmUW3LtdtV9GMZ5e6eA7df9EEEmcrcifGep",
  "key30": "2wnJxVXsp28B7dRU3jbLmkt35mhqy2XSgUMiE4zeP3qeitKFEEztkV756vGihJYAmopW8mqsRGT7fNBRBknQNrf5",
  "key31": "LxMAhit7gp8E4AG6ccmhVcuBFVwYmWszJBHtrwWVfYkq2GyiMe7P4PE1SByr1CLuFBiNF7QfRkRNZsoFhi6xdzi",
  "key32": "3cGctTktnrByNwDxDBNsrTZMwLRkdumXtLTswBP4Hhqa13T3XcUFXxMrZQGtXpXMFJBN4MNoMMULvkV2h6ZpoeA2",
  "key33": "5vbhQeYAkTm1JBubfVFeFDC4vgevfhydq6FQUmsrfaFPAAdfuEJ47xNHtNU69pB6LNPAtr9daj82tAxmoXzuWV7H",
  "key34": "2UPjYwRXUjSCMJjMToqgJD5yQMa3S17DgM6RSAEbLm8UFkRgZpWKQzYHsHfcZNxRabghmFuLR7G57US2vAPzHbSy",
  "key35": "3of8RRLBMujJwZkpApLLkgeVsRTat3ZZFAGRfxC5vaPtJH7tS5nUVVM4H5ANYydWioQrLLUfAdnqbyo7ipJW5sab",
  "key36": "2YXSqwjhMGxiDh9kU4GtmSC1K4ZcVin5y7F78ZmEG7ovGJhpJMALTJm2Jqf79xeLaHTjDCKwyCYD1gs7SJw3KXvs",
  "key37": "4ovmiGxMFf95t1NdUnE7sbwXs9KYhHy9iAFBWn2YqoRS8ZTkqpkAuMmTDLapH1Krsfprcn3UbbW2B6qZY26zY4qC",
  "key38": "443vmtux3vonXcUox2x5AgXykvUT1QnVx3jcjB1zHn5HL8yDeM7rJF5xXSNyUdyGqSruLMkHRTsSQifwaQfyVT1S",
  "key39": "3MPTZFEVLW19mbmDGuRQusu3XCagyLv55cfbv6mZWguPEvq5X8JVTx5zg1YmyTwwAYsTxx3iJm2uEZbjuAkK5ob8",
  "key40": "44i14DiNpD8oNzpuxM5VLCCok37VNYQkn3XzNbqBnogy1K7cLdhSxXuDpwKmmARM1PpS5G2aoCkUbKiHLsguK9vC",
  "key41": "34GC8BSUfzwbELHdWGzoygzL9iaKzZ1zvfc44NzH67ZKTcKnZ85RxC4QmvoBqqZiCHYdNi5fQNeHwpETswyYvJdB",
  "key42": "53D4WqSEo8HWMhc8xsSu2AzJaSeMEQqGzJEjuVnJWznCxZUipjXDcSmer31cAqd7dE7xBAt7QQ5M7VuXkksagwWU",
  "key43": "SEi6cYSZPmppg2aoSuJVuDGoKYg4yvSdDf9JkNQMHFXb9zKedX4wFxgvHYUAtg7h2WpxDjU7hND7iXkbgMRjtrE",
  "key44": "5qadVSfTHXmi5jpiJ84pPEYwHX1Wo2KegyKMYuwNQTcyP5VaW8vSrBGmhZy3f3xTzwr9hwvVoPARDtoPjFaN3hEe"
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
