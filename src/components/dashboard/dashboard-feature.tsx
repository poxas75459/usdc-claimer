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
    "4C6cNoCFPKTWQ5yajsZKdZCqveHbBJiJJmfVU9wLWXnHv38kEeBn3DaHiQFGvmccGq16D6uPjcidiwy1J416ZYCy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pD5Q2ZUSGDgtUPwxX6LP6iSambLgo7z7b7fqWNKWxEH1RXCHn2vsGWeoq2wv2JuLaJzumWXzUGUKKmb66oFTPXE",
  "key1": "4VF61qh2APqaz8SRuADCRhQVUh1dNR86e46Dtofd6ArwhgRmKUYpYu2GBdtJGgpN2xPgoGK43dzVRwWKUCmzubEo",
  "key2": "4B8q9tvkhLFmzifXbVDdEGqqPajBQpA33q2wRSKCAyUSMsheDHRFaKw2fkHKvt3WtNzt5hk1Kngp89fzyBpSzSwG",
  "key3": "2FXMJkuCR9yGXkXtMx5F26MUGx92LYXp4duExVKxLK2mggWfQFbtQTEoN7Er8maSbRKDTTAko63swDJxKudhdzu1",
  "key4": "6xNAi5PBe2yfexrWJPLMwaMUSEqrW1ofsjfwrWPYXvxEduB5dSoAxt3jTLTSGrJy9qNsoZMwEC2tsVLAgfWGn2w",
  "key5": "qP213moyUkPRECskaiMVcKLdrEikeiLCXPHh9du75ARSAfgFsfwxhNVBzxvYYKDaKtbJzvfEqhyWGBs1jYy7SjD",
  "key6": "2uTuNVs9roM95SvsQGrRtJTdoWdqLew5g5suPgLBv4PMS4qxsirnFJuM769tCPRK6mWCWHCiJbAgWuv9TdkmfcSV",
  "key7": "3Z2icZx6y7WjDVWg16mQYsEwX1Y5qZx4p1TM47N2W8gTRJBtAQWRtcRwdNBFktqxPDMcXkpELHeoapjogsTWgLqN",
  "key8": "31VP9QQPN7aizgN6rXUXHaSkoWs3SEB9SXJ2uQm3ZrnLKfipDAx83akqFggbrj3Rfhp2iWyMccrsam6ogjA5Tx4o",
  "key9": "dET9CU4pkQyTtVmw11awqVFNHBDL7sNz2a5QKqzRg5NLuHxrHQZh7fhLHizJREr8qXhpKoj1cv9x8YZBNcTqUyx",
  "key10": "5vdi7ppz7DZuevWsCDty55jEiw8VVbBYEd4Edgt9SA57vMu2rXCVf5yqtxWAnwh8PD7HZQsrTYvzKPLMJt95pB2a",
  "key11": "4eoRPe8Wcf1a1RoBFWJKRV1eMMcbKQRGwCwPgiLfgfxYZbWVp1xeP2FAZ3pHX3PEGJGG3TJBEJVes3zHekukrtGw",
  "key12": "knMqLonqb6fMZiV9TqvfU1z4hzDTvuUuKrAfkokFUSZN5qFoSYU616b8bpuXyENstcjqmuVeakmyimRDHvgC9Ww",
  "key13": "21RJyMfQoh6e2WQ5LPZeWMn3vY8rxfFfyRfnKi444DvxuAKFgHZmhesHLDJZSeKokpeCdXSvTTwFg8zQg8CHXhrv",
  "key14": "Wdcf6qSXm5d4KSFGn462dhCztFqDHg1Vnx1BxVjCNZuhxxYprFagVg9yuWZFFw1dNejPDwC2ojJFA4vNkpJniZZ",
  "key15": "2kujmcJrQFmbQ7E1hcAJ122fj6pg9KmJWvM9ogv1AENc93GkD7bXxpVgro6gL8j1HoD5cnju2jLHdNGz3mVcjXGU",
  "key16": "L11ZPw9gCKvusDsjyJLtnyy2gKsewaP1caKj3ZwK9CzEeyNdinCmcPcYF261Zd9NWgA3js82HicY5DufDTVt3c6",
  "key17": "4Fr5GLPUeximwLyLQrY5mG3BdPKVjtYPHx6ouzbqaGT83HjRBZ11AVXJWxAsJQCFmgTB7dvQCboM8gVWGCM7zDb9",
  "key18": "5sthFycuHGN2hUrzjmMHstKY5rrLUeFv9eL8SoeB7TXtFd2W4K2BpbuCb4bL9z5ja3x3EtmenLh29S5YWG59NxS6",
  "key19": "2viHp4AW8vTxZu3qyPmyoYbXkWuURNG3rnAp2rP3T8aZmud5tEU5UUWouPSqNGZHGvXs8bw3pAGCfKkqupsufiUF",
  "key20": "4tgeziPfPZN7K7uzVG2wJeEZU6br1551YrWjQinBjBWRmLtaAcWLCEFL6eNTcCyU3WP7yNs9RHT7XZtXvU1ckXEW",
  "key21": "654fDTEmB5PVw12MQFfabJW9fLKdvbohB3nCk4xyPxrTt9K5vgPN42uBGNxCJML8uczZoUvHnNZv5okLP3L3ttKt",
  "key22": "62oMJMbTExs39RtRTqMxefR9qKHogsDYGMGSLGrX9FWcaLM8V9uGrwduYxLZkRuNjNjqfrPvefTjyzWSR13pvw6U",
  "key23": "5yTFvGUHYEvRvomGvFZLmZvGQAo5eXVeSMhhsZsV18EiN77zRbUzA4FAQEU3jpV7Z4ZmqbVsN7xc2safzC3ynsfC",
  "key24": "5vpaxg5hvXtMfyuPWi25QkG4JMyn2zTC1ztE14hUc7RXLUzbpiwKsfZrN8soCezcYaKCZ95RXwkV7vTNkmFqGEdN",
  "key25": "5n1SkxDafDLPMXzphihgpfqxEGJ25P2tJ6tPYmnXNwPEpuJCKRTtuhp623DpuMYteemxddQYaupfiwJRZso73h9B",
  "key26": "5BGcUXFiB4UmDRnG1t4BYdHTsqWM5VVJL94aaVRFQ6F4ioEy7whgr77piZdWKTKugypWyKAGn8UnqTMFkVoNyEUU",
  "key27": "677a5JHEadsZUuJvAjsbEX7BPnYqEu4UVKdwpozKJ5K8RXCgCqygiBCC8HUMcmWxKKo6jaUoLGqF8VzgMvTBkbpx",
  "key28": "2ECFqqPNuadHuFHuEQtKVv7v2pT4oD411YUAKMN859PWxJCESZ6WjsdwHnEVvCWDeAMHHRFcJ4F3CrDBa8vcX2r1",
  "key29": "2cC1m38LfWhyXQBwQWbNja6tLagbqEVoVzh6jtZ8bLYCMu9tNP8eKVDbgDKAjj35gaDmvkDQob8HDGAbt18mPVyj",
  "key30": "ufuVNgbNGtPUWpTLVR55FRpxgw81Eg5dAf98s6QN4kfnXwNSxmHYoubX87UDNqw7oVQdJytZWP2e5eKckFkPhtk",
  "key31": "51DYasiaZHd1FK5XcKLVcj7JgYS1zbnS6W4cSXKnNuadJEJ4UyU6wwj3R7qDWv9GysTNaNKXZxXxzXp2WYEoBh4z",
  "key32": "XAG8AG7xktEZAh8ZYwufWUg6kQgesF91xeJrD3NsJHaGmSGU7mx4cXjcu73rRwHryTyjNZcqk7PuXuUSDC8LvSr",
  "key33": "ezeeRYorawn5RnEjWThpvW1Z3nzLq7ZpZnFbJWH5oXxvg6vojY9y8AoNpRNa6Q1FitqDVZdrDsiB5XG62X3eCuB",
  "key34": "5JsV4658GYWQme19VchiRegvGgi7QMHhRMUQTrVPeAKWMgmF4TroxqwKXoit9iwu8HLek3vSY184JLzfXJ4eXJBt",
  "key35": "2bGKDJiQ8ErWEukoW2zwQgHbUWZpMbsesBv7JuQ2hT38SC7rnssgN3GRWgXUAjFMpeNfQTVYHfW5MpC1WRunDPd6"
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
