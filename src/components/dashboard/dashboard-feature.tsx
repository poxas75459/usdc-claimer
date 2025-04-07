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
    "5TeRNYiXFP1RUAoxz4kf9CqijDQmq4fS3JTCicPWXxtedKjxsts4NP9XxkqmeqP3vXnpG29NjSSLieGBFEin8vs9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YZ2DJq9EGaA2enm5eo5LKbE2u7cxLzsY3LxiRFPm7em2CJt5ZwNKarBNymNYFpqfV1ikK4SkpuBxFjqZrueQZWJ",
  "key1": "37YnMSYziEhNraxeCLtfcZmsG1vFJAVh1mbF6rARDfiHptbxV3p6fdHigXwVKF2crsU4uaM6zMGXF73bBg12E9vD",
  "key2": "3vZzChYowUUeSkTouQGZtGbBRYaMSCzNeJrSY24bGBMStKP18dbWjMLjyTv3k6FjsyYsakkgt1HaMZ4XTAvcV6Lg",
  "key3": "3RLhZjJLWcnhuJEXrWsqkWFvMGs6HQfMwGsi3PAeGyRebsz8zLd66jVwjCCKKKgj3myHwVzCdhRZTzq6CcmZgZUq",
  "key4": "4paugCySSDNvtAQNKSpDNLJytNnUomckXfcafASi3SSAcMGtFJb8z3g87UaofT7Rsdvf5Cp3unyfbQjtN8xuGrqF",
  "key5": "2JeNjtsst8AoYAu94fY4Jgv46bmUCuSwDNopx6iWU8go6JYYVLRvhumzzczQRb2TB28Qv8AYL4jYKk9iZszZ9scS",
  "key6": "LET7FDrTfaR8C2yZiQUBHMeiRyA12B1doY1nRzGHkKNmDHg93jpoNZRptvnp3fzbtV3NU29RD6EtuSiJ23RiDW5",
  "key7": "ThcNXETxpi5ce4VmN84WvqCJ7XRbEsfuikFdCKY9omPeMELvWZGBaYdaC3smVbXuTMWkcQr9W9dzWBG3PbNuZAQ",
  "key8": "3oCvpURCaZcmZmoFjitQeuBwz9h2YoaQG5mBb4KC37UBo1VfmhCrEurbfTUwqjRCzPscQfWFwJjQbGDeZLwfBqWh",
  "key9": "P8XjB4aquY6mMpJiWC17WbXhXs26KQut6E6euYsfhQ215QQzraRxg1FCjRrmVS3BFNnqv1TmVYYRb8AzMqyFJAD",
  "key10": "63ErFXCE316Rpmg3g2yiW4UQ8LKzUHDd5FTwkN55ot5FkLj9ZgvXsFrdAFyAmpyzzdQPPsz84bhLq82v6ruQRNAR",
  "key11": "4pXcJWX6KRaTVdPLHv8WM3K9BM1dvmMAk3UHmqetNxJ32mUhb7n9ASKWRzrSSW1p9DYQhLBpNbfAhiBowGXZeQrX",
  "key12": "6469RbUgSjVUCtPCZwerV4mvGoZZt12GSfPhE675nFHJ7KmWgsYzzpjrbbTBrN4g7HdTQCu4dukrV31B9r5mKCwF",
  "key13": "2rKmG6aPs9mQnC5m29d1AG35tLpTeg5v9BtsPGToQTMj3fT7fcx5BKP17murctyjYDSiKWJBGZjS95jq9p8ZCQfQ",
  "key14": "4RgMEEzwPT4gqCcghAJFXmvHVPB8YKpp38edjkoYx2hNrU7abxTrqkXcwRV4zgtWjTScxvx7dKJH6X7ieFU1f3oJ",
  "key15": "3h9zrusbVnckbBAHD7eDUv2rc6u8caWuktFB4ZR2mWmq1ggTkKm8hYVNU4D9UGLdGopmbTbKLNHA3zqX2c58u7PR",
  "key16": "2xGWX7sLLe4br2AQc4VM24evUALqHRPFPEav1PcRzF9UJQbBCoSrkqboW4dreTEB2AXChMJqDiRsh77sVRhcN5Zf",
  "key17": "3VZEgPCLkHs7eb3zbVdKVjS2fAQYcoxsGqFPsj9wPi6i3z2dtsRQUBNF29sswPq8jZWsiXiLNmA5hjmkZEvUmDLf",
  "key18": "4dSQxujXWViSPMwzCc3TZe5Q9toa9d2QU1TW5YMvj4hiDwxcfAPawT8Mu4YbfvfciYaAxjEGZUku5pMDkWJYAmih",
  "key19": "BohBoeG6D5tMYpb4hmx1qgEN47e4xhC653rqGUD3JCWCDMLJLSc3ZpYM7hxDejPvv1wFxTv7rE2u1ieLCR8n4Bo",
  "key20": "4Nn6uBSggN9mSJa97eLPg8o4DqbpCdRKqQEH2oyfAi7iLwJk3s1h2ip2TfXjz6pJr95eH1UPgx4Sdzk5UiKiyG87",
  "key21": "5B3c34Ai53KBJzod2tHQp3uB1wGJ4C6QFeye26MgLstn3qDkHm18w8tyEAqtQZYZM5yqDBaExQQQAmuU4LseSjN4",
  "key22": "5EUMuqyLv71voBxVpCpENE9hZAFayrCCKCksJHFEQwmPhMn1mMRufYJizuBdCgFMm24wT2FVMQVcwzvoVd6dESiP",
  "key23": "94oizaAeF5H1L8KQm1QbfkdHYCX8bFTc4NPVV6gLTft9a8DQD7xM1tTaFiyaaxFbz5Y9V9QeDdu5QpddELAtwek",
  "key24": "4kmfKTkck1K5Nd2XtVJPnh8q3nYgXWDi1Hj9UkxomgG5AtQh3dk9wn7NGEwSXrjP4tJxvcaMt7BeVckotQnQjrXC",
  "key25": "2CdCkRcw2vuZc4XAT4hfXNfCd44SJaCx3rqkgEj3RxB2YeKi8P257TYtQ5QtAdjvV4ojKmArFLu27qPBuKgSraKy",
  "key26": "4uWZZPhDP3dUnP7uGhkYnGQPEEka4yApYUgZZcK5AXkXiWnEqpeqVMrhztm2yD6sJHCf36QV185XxBoJQP6ci3Tf",
  "key27": "39u9o2D1RhnXvHr1YcUbMEpM16XN968qgJLeYBZprHfEhmNp9wAzfScUj698wdt7eZRMrKhsoY5rYLjEKvooPCon",
  "key28": "2dun4XnRnoB9ge87DzgkyRxb6QFzBcKuc7ddEWjoyR18H77MDtps2coHjBdn321mSmJfCqRESDxrsvjC3ttRg1eq",
  "key29": "4rPn5UmUEBKzgcNxUoeESm6fZekJRtjeMg98soA5c8TtK3WCwnNKRnDj79arvFB37tffux4sXW5E8itse7kzeafv",
  "key30": "5Jv2SrmxGXAVHvJbyQuoJfxANWdCTFeJCCUKkGXnKa3EihGTbWo9k4WrSiGoxNDNMFguYCTSEz7jU5Qcb6utFT3A",
  "key31": "4HqHphvzp7ih8DrSDREE9Aqq4WjRH4LFmhiuQ6xoZf3uSPABubiD35ivhGH1cLo1iohRUNTFTp2ecKaSg5RcwZX5",
  "key32": "2XMPPeB8eisaAUvW8X1fTuqoUegpkHwMTohhUToptzUGaEYsMZbJ21FcHUWQNNRfbjrKW1nwc5ybb4Pcbf2dG5Yb",
  "key33": "5GV2hw9z5fC7PDSpdqU9MWq7iEztXgo6gBpZaQfpYiwbQBE3wriJtm1A2mDgVFQFJYkcoWj7BKfFPEVxmdbxr3uv",
  "key34": "oMFPxNks2KxTjBySxZuF4pss4XTz4mHa9rFgj2uqDxaK2HVdA9PNeWpKwDRQhjRQ6W9aXsap8pwQoZZqz811auT",
  "key35": "3YYQiS4rWE6gyLK87T1rUFc7hYHBQvYTRkBwwTysnQ746UBb9ZsoSpcNxrwLPVCTYa946SuNALpqquzodV5L9Zv8",
  "key36": "3LpgZ9djWXiAz69F9LeGpCcwT2tvDYjXWJk4eFmJ9PnTA6kerBHPrTDnsUutZYUABV36A8fvxzeYjW8dHEmQzYnY",
  "key37": "QvzyFvX2Fqz84NshaM1AKpssTvnYbEBwRXKpam6RPMyZDpwcaNh84eEKdpWRz1XFUp1x13XrwA9DWTe76x6rx2c",
  "key38": "3Mugd8xEzB2WwBPCjC5hvSh226H4GTURntqEJAqZ7M1LhZrbktTrUqFo3e9CfQ1CiQXwqc9iGNN7RNwZ5USghBxA",
  "key39": "3W4YRM861DwziiZ5i2KedakgBjYAiEHtcavYt2tvZUjffDHPNVqhZmHKGmLBwai2CFzS3NjXNWqGvgMC8xNCqwq4",
  "key40": "kQjSau5ZYAz7XKXYbGvoL3sh5hLWwNTh6NiBBhRXP194tYL1zem9enGtUfm2B9QCaUDqdX5FSuGfF8c6xyGC27i",
  "key41": "4zY23VeWY5gyfJYpp6XFCxHK1mJRkLc9VaCDw7TaCcZwyNiSxp7rRPNR9sieMY4tumuJwJH3aEdqpFBbjTUkfKa8",
  "key42": "Cv1LpzEB6zQDRLndCTaDzLHwBUCaAiahU2DJmtsLiAW7y5EVUJFnvvWFUaPgWn4N3hxTxjK8XfUiTVLsoeCJBQA",
  "key43": "3RfQ9MKKzF7fRX5Bn75YC95L7V3CrrytQ2knKbo9Bu1w83howy5GCgbgsDfVHLq4KkATJZnDkPumH72KVQszdrZZ",
  "key44": "52WYRtQC5D3v8dbRfZkJT18gk8QLFQdn7XhZNAnraiJPNnHvmBRHqtkuU3Cta51yDqyBkPfVH9eayAcVbxUjfYr7",
  "key45": "yutbMLT9bsR9cehvfwNsExLwuj6mGEGDZMzNdz5ghxCn6nz8kUdFsLdjk4bnb4sX7au8jp2xmjVzTdhiz3jx2nW",
  "key46": "4frwkhsoh5C6b1UdSpHMBmxnAGW3t3vu9cNbVS7ssha48XR3phy8Cs19niiMG6QDuR6VPpacws5b6QfieW5eL9bF"
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
