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
    "5asBquH8PHDR8AyxXZVfMFGXGQ6o4NmT3uXmTXZiDnbbLQh6NQSGefzoZhq6wzPdiq39jjjiP9f9yx7M2ik496gZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fEqCLZrXAFMY3sWS55hRTRGUTSAcZ8jMLonwSiF1b8YGVaLqvF4XPMi772zNATti9yRPoKfa1FCUEo8rRU8dXVR",
  "key1": "5XsRh3LaKgk8S3EfSa82BDaGU3HU1aM5eVDwX56rS7dbVMwUBrTnehoLXtpb48P6hjbjEoWuwT9QzhmpMrfghcxj",
  "key2": "3ebN4SdrpNZkKYQre1B7Mw6eLVAsA6acsMMzcNSeZX768nn6Bf3JJwW63QxEjWWjwSX7e6PAhnMb1uMfU2a825yL",
  "key3": "3QiphJqSGYjJfXP3rBrD8xL3v58iGmp8wpoBxFto1d3eUCwzUABcBY7X2itBRjafzH7xJ8443hXUd7njytH5DNkL",
  "key4": "4zNwTqdzTBDdPuvfKaLFfdFGDrS7BVXa1WNfeqY8xfMWsrj5cT7JEDJsdhzRduzz7Eb6KhF5NXdv2o3U3haVpwbA",
  "key5": "2bctA6xT2ZXSbbeEDoHXELDue5sWTaZpG2kpPsK3vGCJ9DY2E2s1ZBPcocZ4BiLAYR31UUVXpEwYJpUxHmL3H5x",
  "key6": "5FwgHCCBE8ixRGsJKotBF5chG7BJauQKHLxPFyPTrbmpoT5wt8DxBs6YLQNsGLnKqTkysdV8c4ho1rd2M1Uu7Bbo",
  "key7": "4AmnLhTgyEVqVZge2ziRskdFYPzA9AJwni6KL4EPETVpvHkSUXBp6N4TuYve2DByr1E8d7Lx5cLetX1B2Cw4PaB9",
  "key8": "26CmZmTSjhcinkEDtr8fR8PLCAxB1KWtTdKTc7oWCLUzyCFsNH42HucgSqBbdBRXja1t2FWJKCT5xeMQHddvAKLd",
  "key9": "2FkNFfTTL7ro4D7rCtWBfE9sYhp7weoS1HNoCCEtYji1WFLBzPReHT5buhV1xDYSy1gi2BCJWBhS8jypGc2r9KCt",
  "key10": "5F4rbQL62mioPJqXhRH1bSGueHagRxGwb1DRtmQAWcYDTN4iGKgAwC6XCwfEZbxQceUbcYVRsPm9NhQwc97nMD5W",
  "key11": "2yPWwrmNUoimGcjKWA1n4XQqn338hpwTgAPr2DgAM9kwrRHaDvdPSz5XMMi1X1pmnKn22jmgWPNHTULh2dwFEGWj",
  "key12": "5UzEHpw6irSVPzESaRnqjHuhYdJ9SY2NySQhSigtZrruLptHdJFriWkzKesijQ99cBGAN5QmtSkhRMhi6b2SvWoE",
  "key13": "2cNdjm2hZ29NHRxweLNkXqvyscLfZU4tAPgVKvoPmZLzGQCHRTbNzF7U62ewPXvQAthhUyednCm7BJKWEBTcodtY",
  "key14": "4yw7hZpPXqmBJcK4hvaTGBSEqNU7LiZLGAcLkTBxAisWtCBCZLCP1a29RJAdZgowbnnDC7m7XtWz8RzHypnTEnoW",
  "key15": "3WEvKWaC1rxQD2BJQSJcqscCGh1jgQZuZT4k8iVQeSyPD3LQDrQximgjaEYLRu9FfQQNRJSJMkEbHdRJbxCxJNRb",
  "key16": "Ggns93t7dFfVNXyfs8T1r3oBkcWQY1uZTWu4KVitniiFWBWvjfUbMHg3UfYNtY9RcwBN3xLpjaVxA3P1sC1zkRx",
  "key17": "6y2wn4iuvHiPdefeSEqQx55w3P9mmHuYZcApsA7EyFgHbywfo3Y5odCMcfGs9zZ1NwkbABBqyU6KDcntzHpzf4J",
  "key18": "4jzBaBgC7gXM2XQJBUCLJx4oWY217Gd7RLc3QiC4yTy27jGkqiQ9adibV6W9iPowwoFXg8bAbKyZMFe1tpC4nafb",
  "key19": "SJqoFbaappDMGrgwBTUzfir7pHPh7xRC1u3SKwikE6sUm6s1z8Chumf8guFmEiTuW4vnjmJyL4wuRpD8hU5cmuu",
  "key20": "3RCCJkoTXwaegGxw3Jx17PEhyJ7quwhNgtV2S6qcQhH6K5T5GGsReCnk3qt22bu1ZhEUxqitYnJcUupUGmzH36s6",
  "key21": "5wdhWaTeMYLD9bAiSf7Uk7X2Fj6iv3zJnaYNbEDaCfj7WBzzWJm8MwN56uP8adgf7HUf9nK6BL7gFeXrpKqMxDAG",
  "key22": "5a5w52s4JJjzMMFQNKtTE2oUfJr1FAdwpRYuZRx2ZNBdLJFnA5YNM5Dw6tX7mfTUsCz4jAWYeCTYbfn1PVMHcjvp",
  "key23": "dFajCCdo2fjHzw5G2p2UP6fHNTLDYqyc9zKjXzbsLgoQoLBrFcGV3nHGSjmwGy3j2W18pXKLBj4ghXni39t9RfP",
  "key24": "5ANHUyxWpVV8s3DnMj2wCgtNwVkRvN9Zks5avPNvgUuDfbWyHdsv5RP4zL319hTxAyaujqAV6qbifex5C2gLBZUT",
  "key25": "yoGaHfSwRXh9BCmptKjVQucd8WoTF2DEDjodfNW2F6bSDK4XAvfhAydUBLC5zNhMBeUVpzQvm46haMD9JpWXnWL",
  "key26": "2KfHv4zy7skjNRgdnSti6fvFkzTsMZbAYHCEDAJUJGR7Cd85WXqwQhUqm4T4iL44nA55hhgRmx1aea6i3hZCFMqq",
  "key27": "2PxGf9PUBVTbUkpp8FnncWD4pZQafCHhxx3kfPMWAY8f1q6EBye6otpCAkKghVqcfJiZabeXwZ9PCrPcWXv8niWW",
  "key28": "5yLCFdQPcoYKYuYNFHRAdmLDqsueXwz2DS5kCNTeVXZE26ZHYyxYUwzFErKgK3Foho32ExbR8uGRZ3ZGo5LEZvWE",
  "key29": "5DrSfKvQnovuc6XweiUA5J8Xi9wyvBsVJGR8eSjyQVc6VPSwwxAZPPNUWbKWjqS1dri4DFPrpfWFDyzc34RpEndv",
  "key30": "2mTfqmgKiiidUcrcvD2uUfyfifcCkKUK5ELhP9eC6VuGRuptGPqiUg48QSXPv1iPLRxnHHdHRp2rE4xiUnXjezwd",
  "key31": "ZBRPM7xkmELyWCniQbS1ff32pZHzW8GpHNCS3K8AbDacXPWTfdEBQoHcUC3E5ig24VGF6Lnz9BJU2JyL7ATEToK",
  "key32": "3hZyEb1wrfVK2vtY2vPddghMTJTExcat3od7hxgbuT39n3yh1noTpAAQnHssmrGTqjHs8qeETKFS5SS4A7J8VH9",
  "key33": "65ecnD7s76hkzPiwB9t8cGGR95NkQbEbvDSaiGE1Uu1G2mM9JRZxbdGzjgDNpc9CoPYWApUmRtesDGJTUby5B5xw",
  "key34": "2K7vNGFQf79cjQsbHunTtccj3n58oY6PZHwhmDfH7nX3N7QujMRc6SGf91iawGi5GCTJXegHKC4JewxFhmLzn94t",
  "key35": "5e8YvVTahAoQecm7zHo2egQrEfoaWehS4tsqLowd3LC1z47wfYe2gdM7dqVeuqoJhMWovN7g1T4TWLa8UKbUSe31",
  "key36": "4V3gkTwJtcu6Git4qsZE6Nt8hCij9dPQ45hyZYSGFceNDvXgp7UTkk9GzuHDshVwKV28C1jCwUzB1bAc1kEtDbK1",
  "key37": "5JbNT95EjSnmVjTaGeRPGCzq2rxMGwhfYmSoMpMRjymXL2BbeD7Mk2dR3Z54ctmGhQi6JqQGVcE8njrMZFPLNMkB",
  "key38": "VjWtYP8NJGwU7g7pgGpM2Jvn8AfstHvHbxWuAiBNzbPjSyEM5d54HAM7nPc46EHd5DHgAcvKUFG6ecMAmKcnzLT",
  "key39": "3NWpNwnKjuKD4RX1HbWnYrsW3fSw8kxjNakmRRv4KDQiYscLppvw4NQgygXWEUQzesGfPNzL1h5RCgCXpJQ5oqSC",
  "key40": "5JKCTvF8BoQTmpZYhKisPrE3GcezVbticGB6LfmYrssZ9xZ5K95zyegocpC8t9R7kWvKowLrP5LouvUhD6b6Sqm7",
  "key41": "4B7sFe1qAjy2KUt8Wm7Q5XajwKniQUDAhiweNGZ2mEX6erBdofjEZcLPyYGRLggxQtqLvv8xoJUMg2GBgZhVZdh4",
  "key42": "327DsxT6xVVqycFTmGpkTzcxNJAXNSjRtKqH1VDUmywpjAoRQdED4g9wdmkGui8YQ2PU9xhMdXDCpcpuU79bqQkR",
  "key43": "3vYD4pmHq6Zk6e8dVL5gztYNXqjVeTNG1ZQb5MRy9y5T9bgnpzmqGhbQ2e4y9vuajgkSH7U9iUTLzJZhtnjD1aVJ",
  "key44": "3FDiR6TrvJZyviubXzcrBwWh3c8sKYAvE8jGhGf41mGx3n11one9agMkNFc1VYmK9wMfG4oyQQtLNZMsUpAp8GN3",
  "key45": "45HaozzUK4bMukqivHa7MWEKnC3LDD37tBAchb3YotLrknnmdSpWoh2UGL4zWtcUbrGpKciunNmMxEjhcMV16yWW"
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
