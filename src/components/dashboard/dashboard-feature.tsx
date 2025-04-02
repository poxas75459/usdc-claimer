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
    "qtkJekNaJ1g23oiXgMNUFXRnubwv5jEv2PG4hwxA3SjFN4pRMQ71Q8MPEKhjBJysq3VJFarMZ4zVjgfzNGu4FG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49u8J8Z8QmG1NA4ySMbBMKh5f5A9BwLR99YUwUgfkTztqCkzocMARRnfo7MDNXmaqGqXUoscAeahG9PBcSCUFaGy",
  "key1": "2MPCpA27Xmpey3eRQjtP7e4XUwFYzH5nJg5yqneWDgZBrJaUGvDZCe8mj76FdBjN7xVZ4zCMq14f4sugabVR7vJC",
  "key2": "2Sds2eu7SMeWa9nRUsaEem76RVbsEt2WKn2Zgg6qx5FtDq2NJtBgpXa5FJUVVTegSYCq9W3qnGxBtECYNtcTnYRU",
  "key3": "54hc3iUiMAp1unf9dhNkALRmJ7vSYvQ4cej4h4b5ExBnmXB76heY91T3ACCWJChD4qiwSgnYU7Pghm9Rk5e84V8s",
  "key4": "5okknpASynHJhxYWez7JaLwwfB4HmnLP9ZWwi7eMWWWKt3vafYax824buwhepVyfpuwo6dqHg6Cz4GTKh9QTmVQT",
  "key5": "22tvYTmwTq1DMTuLjZhv1gYFkQUHTLzf66HPFSE15Q4qZjCAMQeFVKKStobrLzKgQqespXNVMt7qJ4ZVCn9MLBGc",
  "key6": "EXHhoiafP1RDsA2sjfzdJHQte2tnJA8ysvVfXbFx57edPVn2C14UFyJEqpPwDzpdvkriPhAepN66UhE2NxPBhXJ",
  "key7": "2AkRgqHhC8i3jj4SbCiMFEY7cHVYBheLDprwUJX8XTQnNHZoRiiq1NKXeFPdP92saoFdmbPWJeuzB5f2uhmT8dhp",
  "key8": "472HuHjcKvMwgARtiYHj6NuJBDbV8vxFpQUq7wgbM5WDfdtWEUgB6fsRCWj3JNQZUbsfGjNqwDfZP6VfqUziBN5a",
  "key9": "57QNewXTLJfdJrSutrYUBbVmzjuJGaXpddAy77p6NW2DSk6awnnnbe3DgFm5PKJS2r37M8LJqpELKbfsNQRAZhfd",
  "key10": "5B9prB3bNjN8nF5DexqQMhs5n5BwiMkmRjCfCWahoNoWDvmhjhXjC4ordjHngm4cGobGoXM6avgn2ZvHn3EDnzCh",
  "key11": "35KM53XTgyC3pruSNByTARTcCjCnTRzdZu2PKRUnVatmjGTXUkd6RG2T8B9wV5eieYefrpuZvVGPgzu1ySMkjLKq",
  "key12": "2LJoyubHgTo7d92JjrqzpKL1A5ePMK2LTYjMDHCi7M88E3Wmsd3z9qUcZg47patkQvmwjE4KDYQiu2s2R5XmxiuM",
  "key13": "4hVhNLpEacUG3ZJJk1PgGvPuUHM7Gyk9So2HwqGShGrXLBHz4VGEAJ4Js7TCdMGG37BuQYzcspfRjmDFf9wsJtMr",
  "key14": "F2qG3dpfb2fETaVM2CngpUCKZYXrRzYJQ5cXQygfh6HxscPhyxsMhG2QwCCgv3qDXLj2sUeFUJcqzbFjyyCV5T5",
  "key15": "48n32mRcwiTaRP5r1EKgXSSsCUTsLnHpWnJgFjVVkWtFUGh6je5na62Zim2mMFJRpwEdWpAudRSwMQZUpHx9s2bS",
  "key16": "4mjKJY5m5GJUeWLQYsiCPnMDPybdDunwHVzkq4Hy2vo57hpLCHt3yREE7UBQy3tBLxaJ5AGkqZQphy3NgtfqsgaU",
  "key17": "4TWQaQcMz59r2u1qR1wPUrHEVc5vvtbPoXdstpwzDgVpWEoLvh1XN4YEzCFM4QWU8ThKFdzeoMDkp5cKah5MsYYx",
  "key18": "2RFJ91eqa8ck8BRNgytDkbxF2m7DPFUNcSPgwxhwu69CebmhtfaLrCWsV5FczDsiCPam5CpHfaXxr95GPGuVXJYW",
  "key19": "yrDM44ybhpnvi3puBauqm3inHoWw4Kh88UzvWNHwUjNKe2wBeEDPSFWALN8no5gyswcYV3c95sXvhrELtdPUqnc",
  "key20": "66hwy3VUg1ZZqUdEhCuK1ssfUiVigY7buvfS3XA4thzveKpy5zzZjjjbZ9qk9dEP64xkRwYgoSpKUfJnbWpKChvc",
  "key21": "2k2ChwVdeS98sGXKbaGwJSjgTFRa3TT5SAWG8QhznyE2Wr3hyfyKUr1WJXqerPsXNL88SgUkjrqhoJRkbNz1TvTZ",
  "key22": "52YeGaqUBcrdhaRUXDPT91VAjRwAPxjqX5WJR79EgWqzVxesatFWuBJrJT3gcemSjieomKujcWVgsbXDefccA9Hu",
  "key23": "4DjoycTyTNMu5fk3tF48PBrGmmFWChhKweitwYqH5bWMFxWXnEGE62i5URph1QVdNEf8qZLCFTJMVTRHV1fpaBmY",
  "key24": "5JZsMTneMYLeDpETWGKZp6z1pxTXqCHsqu6J4ofzxzhX9CiH4Z61ecEghVraYthAjbUsgCk9sN3uW87KAzXgjTrj",
  "key25": "2J2KEiwnk6ftJhxY9GNKAYKKoruEkCCbv5XEgEyVEgdH4eaJmcd2LoMLpdwRdRJeTibAyMsDBqneiAxi7RVXKcGR",
  "key26": "5kMCvW1PTkw95sSTxiNjGjo9Vj34bRMjXcLZRTatnrEaN8BDYubBfb4jkqSMSUxgTT4aCgzBAbp2VuLKALfmfZuq",
  "key27": "5jccuscyc89pEMoTTfxAMeBZHNF6Nx82duF2zCQHnBiyu4WpYTLDFHwtfSYBKp3Qo2869VtLRZi9DoKN8SWGBEsS",
  "key28": "t1LzXmrXo1aop3VZncgwfnxdEsvDg8vN74cqCzhQpUUGuvDkVo6TiSLSsAtiHYtk1XQdCDdFoTnrJLUrDZSZTi2",
  "key29": "4vt1ckx6EYVsGHvoHJnLmToU8NZBQVBo9AQTtySLm2QSk1YmefRH3qJcS5RpMhoJeH2MLrh3Mv9fNRoYkftbi8kk",
  "key30": "4GDoh14FQfjfaGp97bUBJCypQJDwLd7ivXJg9uHgLaRCMozpVGqHU8wvDLuVG1JV9yVmr3bFH7PeJpFTMh6xf7hH",
  "key31": "3rAhEdeU3XLLvK5Yjk7JKrjvQ9qDWVnVEFXH8VHSPMffFXofKYPtMTy2XFXGuqNmwfEbFZGkXLrJPw1jVjnqiwt"
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
