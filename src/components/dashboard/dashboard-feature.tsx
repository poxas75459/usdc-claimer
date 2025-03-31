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
    "33yjQef3qgHA7N7oJP8ywLpv3pbbzDCtLq3mkED9MfTK7SRY5AXW5iVXUBcqPG7zTcddoTxyqE57bFhYHb8tzvVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kBzNvQVZeViiX6dtfmfE1nPEE5g5h2HoFSTqQjf8SVBHCsGe5EWupKgH8eE76rAQQsDfJfECqfebrEAAwUYVJkf",
  "key1": "2sjeG7zCf8tGRCTuerLqvFdnfXM9bNP2nyTM7anNHBVmdqVes7jqQVBFdXhmFsXdwVyTNKryWvW3hLSNsX1YxBbj",
  "key2": "4dyXfL7ANT3vbe2nqhrhxeD4uLDiAPF6ivRYMrzj6AH7EeNh8odkpiPmoxGFZ6BPxSZSoP1nDR1rD5GiptTPkkrH",
  "key3": "4CUJCQesdmbhMeCGYVBGaaBUWTT1GnpQ8Qe8Ps5LKuRxDnrPFRPQUmkUnZ58rwDpGtun3KRxi4JjWqLKfcP3oy71",
  "key4": "32DaGfzqnpYxTisvetBzZJ1Uf5BUtZSC9cSobSWCtKMYDGAaihMTCECoTRqNm41RsERRUrStAEkK7g7vzjjzm9Gm",
  "key5": "3BiGvDC7iUaBMLz1vv7pErgpYXzQvqm1m5KqAa1JAFMNpTfjUbRXdw5dJ1Wpt5BQZawEUKgQPZaJhcyKunRi1GtY",
  "key6": "2oNMr5X5VNWomhiGevjF8qhRD6zbjU6SurKMGaiSn6aH5Mmk7iiNd4eLiQRznzDoLz9vNx6xZWrzYYkpgQb8psnj",
  "key7": "2HYFCruLxKcQAvbqGtZjXTTARKNUkN9ESjmA64W6zQGLeJ6AmHRk2BZY5FUKbwUeSMCzbZWj4wjJkJCUab6UQ1mA",
  "key8": "3uKEvgsxJrmy25NKmbUhRLBSQG3EvBSaF4vvvrwcWjT7R5baeefeV31BF6sEHGzkkkwE846wL8yDMt2Rzeg26UNe",
  "key9": "3UYaP1yct6QuwspBHxeCEY3QoMGMu8hWZTuqHPmiWs89SnYNZuQ2aztx7epnHauiEiQHwRVyjC5frXbdHMCnHpH2",
  "key10": "4B4NqvJzok1WwfJyegBbwPpz3pvW5JVXHegqoxU3bU7H1Q1b5FPjqdhourNNrQKXnzJdXPxyMeeu1Hu964gpiJCX",
  "key11": "UjSYG2x4y6sQp5BufNKmGXZZmTNhL6wc7MGjsV7NdFt9oCkNaTiPHGhEgoL8EMN4AaMvN78gKYHYiGVWgNtX3uE",
  "key12": "2GwN2n7qFeVKbPMKvdoGQUYf41SQ5bv6Yj4GVWxXzf1pqu3MoyRKZPgdzNuYtFrVfvnEgEV9sDXtEe2ohn7p8zS2",
  "key13": "4wEZ4xrKYCgiwcPZL3F2prrj14g1LnEVPEpwBNEa3gTS2JjVkQp56TzqXDABVmU9w8wS2ZNmMF33kEgdF5mnLVEp",
  "key14": "3jopivTwbopy6nvNxq5hhQu4Qn3YjvXE4MpGrQNvzYhDVr9zwaUKKEHHkumHzCmCaU2zwUR9NVzSYkf47UscYjNG",
  "key15": "iQ7ZBqh9RHS4D78DDbE8QmFrEciiqLanv1y9pSx8LukHKiiyw74S7Q9JQyrbZUnWVoR3WsuAyTpew3NakLgY1mg",
  "key16": "DZiZqRsANBs6qnVb7NmxSmi3XGbQggcsAkdV3UxGZBha9rRfy7jgDBLsRpTAokp62gM6vx2cBd6z1Ntkw6utgTy",
  "key17": "4LqCFs6QX3iyPjzghLE4Eu3u9taEippzDM4d4M8tYHMVxuv1r9qvVGtWM6WdMRjiKd5vbJ71Lbqkx52hHGxAUh3V",
  "key18": "3RL1Th3dHpMR8U9aSJH45jsNmb1eg2jCCUC8mPuPjG4FrhvXtPQ1QETJK4nJwXHFEDzo5tiWXGBRCvV6B4u5DrpP",
  "key19": "2t2RvYtHdFt3vripbNby87D2PRfh7BCR9ughkpdjwatN923u3nJMHuhYVuE7kuWXMw5Q5e8khDsfsMDJYMsPbxc9",
  "key20": "VjsUdcZD1F6dNvhKx21ridU4x21xyn6csYqbhj5NGq8eax5tg8rnVYqvcFGsrFtq3g5TDMbjAqrmLadWS6mkL6a",
  "key21": "nya6PdSGmgWF9FSQ9c5VHqkaHtFHsYHaiJyDBp3vAHYCwZ3gvjGgxMwLVjnbefuJ9SKZJCCwVX6QnJytBQBWLvC",
  "key22": "5J3R6gRnjbk47n4XhjVPuomXN1JxGs8RCKieFg8DS3nGRv1tKwkEy8cy4uhWCYXLLLqKwucVWfqazDD9523gsqyr",
  "key23": "5cduU663D6Ji7nyyuTgAm5kAfVdZM4gas67Tp7ACWsxcbsqVk6UvYP7DStKAU1bSTmjWYunpwx63i4zBTDqRorwN",
  "key24": "5kcjrp9QScSXufsZFHVNXLb3LVe2hPRRiQGRoL5RdwNcXuojeiFzgYevmrkKE4MeJzPcZGLwnfK3DQ1hiAraJkXV",
  "key25": "338uKzX6upb93g1m9pWSN7q5avKmeWrkzinMiAo8QXuCdqQM6BXyixuqpAC3t6oN43qJFvdbx7YFWGHvApHJFdmX",
  "key26": "2Bg3PH6pNLsGUmJkaPSM5dYy478fLJyzJQFgjBMDAmq4oqvTMLoDb4hcbB1ooS35Zdy3yvkSyDdpbnjijxHSxPZM",
  "key27": "29Aa4Jrw8jHCXEpNLL6V9i5XNj1TA9auFaUcEmmgNJgsHRkDPX8EvTQq4ymKGaCHYTBna41EDuWWVuTNKptkPw9U",
  "key28": "3f7YHxWQH2UA7DC1cuE9qPHvNGHRpzPkVpZqj87ZNeC7cRPQBDZ6d26D44aHKdy4iF45BvPWzzjEsV1qf6rCVDjq",
  "key29": "62uDdWycWjc94PdRhxSF79K2mPA8votXMvDqBV1fzxm2EYByxT8xuthMiGUsEdf8aUYVw3MgahQ7GzJLjobkDQyn",
  "key30": "3pgohZmkK1nuuK5zTVMZ1mM3mUJp76SahUBFdGw9h653i1pejpjMonBkzRxPLV2yqvXPhi6ab14SfZhZGagEPzzC",
  "key31": "2dTtHU3ed3zk8L4cizzyBpL3bH4BtA3XWb79z2CN586k6bAvC43sTHetqKDN4URV2ETsaGJUdSBkbox5YNxr66ps",
  "key32": "5HJV4ZhepCRTRsKVhToPjhLMFv2bAxjXiX3hLuMhySMzYz4NyM96K5n3uTa8rCjcLreA2Vh6zM4YaML3ocwhGQqP",
  "key33": "21qacVWKfGAMb1wLAMsMmdGEemq7qAh4Die7Pv4DyUqPRj5dvhj8wLLjKpRJLSdaA3CBEPdEAMpriXspHmBKHk3r",
  "key34": "2UTjqDrfziv1kVQCqeaGaWczBUi2a9J51XetdtpKun8iWcnNxHc784KfnrpqhhBUa56XSnSPBe6QFgp7nxRtT37d",
  "key35": "2fmRS2vvM81fhyrFafVMzU446hw1udXXwU3xXKSN8wcK4x4hsZukd8EzAJ3Gy8AHy2b7YjwfduspzT5DN4Xwrc7h"
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
