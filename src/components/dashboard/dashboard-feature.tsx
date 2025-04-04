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
    "5E85g4Njvm5ebQPyASdsvdwSHTTcVWSzBNS6R2MQo1cQnYSCq383tepZdp8TUCL3XznBdnZe8j4HDm6LC8ZVTkRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LQETNd1DFjGP4YHqXhQY5jLPnqfZwzFriaAtCTbN5UB7E6XW2BY28RfWJT8Nwg3Ec9Qq3rKUgWjgPN8cyrbKUXX",
  "key1": "4gZowJdoCita5TCqNfZ34fA23Hg54iKUBsPTpxVxfMv3Vb2H7JBxy4sAiUtiDeE9s3GdjxJEoA5rpJHAQucVv2HF",
  "key2": "3ZdKnHwcs39GpRAErA3zYCFJCHe6V8reA2nCFhzL49v1WiRTwNNLFRH7ypdnfBAMWyti8JdcrfQinPDMAJDS3w7Y",
  "key3": "9GumVFqMU3G32X9C2bBqniVi3zsYJ7QawVzud4NJSocEH7Zd1HsTxQjedkvj8ZctWhiPXfTUTFx4YJbtVsvonqM",
  "key4": "5F1aDczb1U2vifsewAwiDZKZPwJLuoPzQfiB6Q1VNU2sjDbLoRCCtu7kRkP8Nkk9c3nJncygq5bVJ5C5Py3SxJb8",
  "key5": "5DYPoCg6y3eYYW84V9R1HkgfU2CiCszREDwaKJWeCzr2Yrhb5E8D8TQfJuPnBgWNYKRCe2ANFZd3fPN4A9HrCwoW",
  "key6": "5VmBs6V6y6ukDcMDhgFSL4dG5rN6ie7yg63YYhKBM99rPkDxkXrixtyaseYHTeyHDD1zDy4Phb1EWddLxoL1FuUv",
  "key7": "5kkiKks5bVVKhEnvq22JcfrTVzPuM99YagM1gLCjPD8MFZvDVtMy1t75L3krjaCC72XnRUa91TVDH8AQpBKM5PZa",
  "key8": "2i7FhsgzXnAYBzHcNc489DggUXitpx4dL1MRTp5BGvKvdwV7wjpNrjmPdRop9bcEzqozQhLJpF9eRtWMLGWNn8Ni",
  "key9": "miR9SD4W7LfUULTmN2htGzozKx71faJhdsC9bGYYmJRTvbiV2FXj6hKX1JfnDMyuUZzAFJx6n6uyJ2GSCn263Wo",
  "key10": "3w1q4obMCM2Y73B5vQ6ytScA5KVxHuoE7dr63gDLdzwRfUbEmWjVTnno6Gx5MQmtwQdtgXV28j2ABsQhMo2rWP4y",
  "key11": "2oq3Nn2SLM95Vp2CCrc5DLmodYadbpidNjtpW8aLqgaC4tEioE849EEscxcsxay6B5KYsdPyDgHyT2cQeLHUxzeo",
  "key12": "2NQKUhTxzmBgUiaWtv7Y1xGAVMMhcZuihxQfvMASrGHAedZ1Ho8yhgeJ59wy35F2Uv6zRwwtQNeCvi4EtmgNiq7y",
  "key13": "5EWbNd6rPZXn11WQQMLGXCn8NGbL1DCRAfMbmE1b9tqLM1nyvTpt6sw4XDpAdTs6KCxqEXRyYtwAhsoU8NNSHpxA",
  "key14": "2dK9ubaBZWHcHzo8Z67j24HsYLk8GsxgyFDSWRgvRcPNgR4JjZjJwW2Z9toN2rTUXt4zKmMBLjKFMpcssZpdPQBo",
  "key15": "5izR8XjRtmVGfi7EojxSyMxYZAa9y2vV4biXcBMdTFeQa88ws4hPuByWmNJUBoe48CJnyMffHsSzSGrUPcsgK8LP",
  "key16": "LZ4JWA3m1iAshqKtW9jALRFK3YpBMtkg4t4uVK4BBvFKztGKy5T9mRSd2wjuRNQ8VKCvrJVn8Yw8za42F1WAriD",
  "key17": "5U543tn3hqGBBEr8ZwGXWb92Yx4P5hzZniqY8ipmMzV6e7hhmvnr33mHdkSywATavTGDFEWimLXQtuoQx9UuehMa",
  "key18": "4fZEdUcYjSpV45phSRt2icwhnky1CgEn3qbdgWtbMH2UpUXm2d4DGqDs8jKfS4HFss5jdt9tHUp8o6J9u1VQbwS1",
  "key19": "35YPFDMW8qbUFtS6pWZ8Ag9Q1WrbGHNeMfLhbATTZqPLUuiHxXzzoE5k4x3XdTwc5AWogNXCHzGftugwTHbKuNyh",
  "key20": "3VaDnSpDCy7YZXvzTkW8UQJmiCzWsqV8jvEJZ3dCoym1cHenNuocvVt8Vi8cHDsFV7eo6YiPByiPU6fVBgMF3q2m",
  "key21": "52jiuUtqcdDthsWenX3H3vdjwG97VFNAKkyReoffqo9dUzMabAWVtjzArNhcgZZNmjPvynnCiJ2AWC9x1JubkcCc",
  "key22": "4q9mtzGprq5NsGeyBdwoTy8MZ9QXWjYzMyKUYQqxEgcMfxbYk2zbpx6fwJ9SRgAhwPCpsMAuPmKrqRazn3nJiwX5",
  "key23": "3GT6kGfDMgxYmtWzYU5pTPWCVgb7uHWLs9njGYJjHs5NnLKTBkkQ4tgyvN6eUtrG843YBkHCfe2JDNRnpQu8kDi5",
  "key24": "2vxfkr6VbJwGjau7nbuRDTHhSAe49Be4aUteqDPZRavyukeRxdF1bxW8ztjpCd2Lh5pfnUYJZF4ZAwxuZkEfXzsm",
  "key25": "2y7eB4r3mkWs1MgXLSKBmQLHuL24ccWZPsJtwbx76yF2oRECYzXfHN3ntyeNfitacoTeh8L7sQGNaTE8TtHySGAF",
  "key26": "3beokKAY8t3KPosF5nM8BEaQ1H6MaVaTLc3Gzy1iHhpcVZKZTwXCqJDYj3bVx4mHxJzEqkBehNYi8w3FoxnaNRhF",
  "key27": "2aEh4nLhSFWAcTePKq9wTntTtGq9LUGZd1das77vezYZJNwQPwgSQPL9bqjVS5W9NTBgnkeWj9hrcpYd8h6ZdYDr",
  "key28": "2QrNuKrWk4yFgdfLw9RyYA2VFAMh9ZpKMFK6s6GFT4mvw1HLa2At9ywVYZrmCfy6GpCpLzsB2fk4pnuHRjQPSS45"
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
