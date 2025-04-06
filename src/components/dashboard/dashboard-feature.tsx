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
    "3dv9VZNKDqaVQKJJchRPD8dAbz8VgpDJZLSWhGCUSd82XcVhFyEREoK3Ffd8XjQsCARGJkyMn51T63vZoYZSQ3PA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fefCzaF7i7yaSbvcDyW9hJqMoDapUJCtqYtEGjah4dEyzfTiE5cD6XQZuKpvLbURDtAuGDhkLCfU3yzyZTtdtfY",
  "key1": "5LUcnVDNsv5JZ6KdPL78citx1i3FEwmeWVavK6rHCACtUzhLHftq9U5Bh2sG8iUoGBuUzG6KMinmnx38pjrwnn9A",
  "key2": "33pCZyFuNn1izcczs6UTX5NrKKCzx79LrWJxePFgFt7ASmy4aJYFPknCpcAbhLC6s5Q2JTVbvQ7tmFjzATRTS55t",
  "key3": "28LwKdxrYtdHQ25ifuzZWYYZDJMvmzxgM8iNqKie2GJLaSBiq3UusWYXwEFMbevgd6dbA9rSTcrzDzoagygoNM2z",
  "key4": "5HcTkdGoS1ZZTiQ5xHeiBteXobZs7vBtKDWnDpwsMUDPyWZRap9jw328yHJ5En8y63G4T8rDQEzqshbgkZCMGVoA",
  "key5": "3PQk11mCk8kNAbWP1LeE3kYx4z114kLKmGxojCXDKZRfiT8raz3d2hYcZyfwcxLqABcwS9irKLTxEa5StJyZgpWV",
  "key6": "45vbFQA3yV4XfMBbW9yrAbN5dCnBWCFQUuSCuYvUgx93FawkrRFzCmjWm3xxW6L6pKE5d99ykwYBcfMKUjQsBCQW",
  "key7": "NteUgctTXqFditf2oXtPuAiMWxEfUijXcCu5w2ZhYk4SYzKeKixdZN7fereXCi5NbMwFLZ3xeWRfuswHZjW9UoD",
  "key8": "4nMPBcDgJ4EH1FHtX9cJRDCoLD2Rh9VYozJR5ihBeZnm6yEa7SGBnTfLWWbtXC3Khfp1RgWoAQm4npEy6tHU1UXF",
  "key9": "4MeugHWm9yBENxo7yZAoTSDP23GhdUg94XCbEYx3iNgYJhcAvKvjXCtC8kYhkCQVddE7g9qsmhVzusWXtYi9V15g",
  "key10": "2hAmAYPU6Efh5UYS494JzzvsufDcaQt2Jr2cfHz4DmxiE1Monk5zW5XZUQvDXDAHxRoC76YZTWXD2c3Dux1JXdoK",
  "key11": "2su6UgcQ51wrvgq4gEHTAyjPcmUvN3vR4aLAgLwLyV9eLttmVo9KNkEYH1RfeB8mRjLMC2iGsSzW2M2BT75CruTf",
  "key12": "4Gb5nmdDXio7QbviwRxQNWTtPzzKAP3mF8H7NKhEL7qHhYBUjEb6ihJmTqMNaAFGC3zHoM4YrmSQVDLS8dBueUDs",
  "key13": "ioq546ifLek1auCcJFoF7Vju95VHT64HNZc5uGDTEfF1YfWkVCFbHoqkrnEXyh6LNmQ6718dGSYty8efNnDmDHa",
  "key14": "2mqPQNBHsBM5DhpyLXAtR3B3En9b7aTTqDbhuZdYmTSJAN6tZth5UZqtQfnXbSXdh5vHxtRPzG5nFc34h3XCJemQ",
  "key15": "2xBzAM3oQNBwLiNegJRHRcbTDLX9njzsFAS3jZrc4dgCnHmwfhTDeqiW2nRcJ3b3XG6uJdqTooeXh9ymphwttL5B",
  "key16": "JxaGAsSCPgnrjU2QgRZit7cvqCxToqYReEYjSTkmP9ofsQ8Uh5FAd3H6zAYCMMsw5wWP2MX9DeQ84dcbNPEuQiy",
  "key17": "3W5939jwoZSUokuxUPUGRazHn9LgvxGnnyJgVWHsLS25ShDo8hniLjwiuXEBtWbGUqx5hQ87aehGfytPBZ87u2LD",
  "key18": "3DDVqfVqA7p84Ve2MiYZPYeMYHm4UzHoAjGd3RuGQBJ7fH1EFxFxk855Z5seVDDknVNnRpHjM4Pwy7caNuR7h88Y",
  "key19": "4P5YGbG26bUmMGVybLqT9PR34CoQumcVLHVzCS6LW7Vzc1D5MQHG8UpADvHDCyAzzDF99noBe8kxx3EnKY1Qq9PR",
  "key20": "4Kurq8upJkRL8E46fpiwF1BjuSmNXAPpN3rSXLfMNpUuHEwQBs4ByVZvw7nMZUViQwZvjbBYPuEv4b1NHkVPxsJw",
  "key21": "2utHVsPSs3aRj5QLDqrQ8L3NF8JJgoG6GjgtRPDSEXt7Y2K48SRr2aMcofFC1xLqDcbqoFfpnLzsxqB9ru1JG753",
  "key22": "2oFnAZJmaqkA3VF169MYLbUHTNEy2aEegyAZP3ijvhKomjWZZtoyAL9E5Ksx4LCSBpZFgSuDyLTPZyknxAyHSGbD",
  "key23": "5hcThwCcK6oFnSSs4B7BvB1RFC6fq2QWoQSgKTwXh2SSS776buRFELThdNbESVVxHiCBUJGBPZ19pz6HBTGRGU1J",
  "key24": "4pfPcJQU7kVY9YrCCZFsyayj7KCRmZZhKETNeeFU1fBkKqtyop2QDhZXSXrJ5aMaSNu3miSinfW7Stao8LoQrHCV",
  "key25": "47FkAaD5DTGR9sxTLtidR14dXJfyHhXXTFxBaPZAmqQUw7kFHUVSCdHH9NK3HY3V8BdeDPsJNQKZcC3eztXEC5VU",
  "key26": "2SXvwPGnmZtyHbpgA9zdttbeYRhjioVugWcdfNcG2zBvSq2ncJ7ZVspBW1VrWfCYWaBNqgNtoyAeZc6gCXR33MFJ",
  "key27": "Kqhs137sYRhQDX5dWgSrraxkHgeKBWUv2hfPfGfTKyvFRuqn689aHFeuepnt7ZCQinMVaUHqwHCXZVZ7r7nAN3D",
  "key28": "121yghCm7hA3LbmkQMLgNdzJ43ynLcPKkTYvCN1wh1feGhB3GceeGYG886e8iNwb4SQTNqpH7gjQaZxQQYvvjtfe",
  "key29": "4vu1ZKJLuZ8bBWs6HiKBS1FtRHbBHCywB4DwFTS7QDBsgGW8ck1xv7bghYH8cb5amAoSwj2D5vMfBXKY29t7CuHp"
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
