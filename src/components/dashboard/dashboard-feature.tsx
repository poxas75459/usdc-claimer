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
    "5pbUQM8xBv2GH36VFikD1514X8aLunYMgGgwnxd4e7voHXJAEE25q3oT5J1qbZm9G1bQLNdD7kc4fuXe6CZcu5xE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bhjqBr7sXKZtocqjopqU3NsaUuVFSTqbjrycw5r8qGxHrHqEJ9yntzgRTZtWFj2zy93Rq1ey32q9x3rYf9uUu5g",
  "key1": "EAVB8ETNxyiqDeYviYNBzytEFEWDxYbfJF74vBS9kqjzgERTfGC1JX7tiieqpuipFwP64NA7CZAwEEAt4BDJhZK",
  "key2": "655b75727US1JmXYL5qAoPNzQYqbP2mwttGfF2qMz71Vp6soC3vRCVR2rAkxGyCC6mdS3EfxNrZy9XJCak6usUV9",
  "key3": "E7yaFnhkaTwbASfxMTmLVz15HYu4pBwziAAXZjdF5f2JsQwFJHQzJC17kYPKpnRCboakqC7uHyM3nTDkE2QjzZa",
  "key4": "2bdguN8wuCqPzCdRSkQGhmtJuqZNPKaRKPWNc1jy1ozNDu44WkkrX2gDF4hWgapP7iXYiYSiGRnqn6AHL35GHMhf",
  "key5": "k7i1H784F33fzxneyvFctV2jHUkeXMbK1wGtDF9dhWMK18hcydz5wVTgnnQPAnXmpJKncDBViXkWyJdUUv2uwrX",
  "key6": "5L2EHpo3Weg2qQ7YaCqY3WkbmtWYSK9Z66v5jLarqWqjABh7iqVADvJZ8j2aNXThJq5Zk5FDoUXM32K5T8MW2cmk",
  "key7": "yrEBWU7CmzpmKz3VULSH8yRbkvjFcFQeJoapY72Hys48xCuwECT4JkBdZy8yZYsWjmbTYaWmTh8vhBn12kWwTdq",
  "key8": "R8qx27agenVM3KqDBuJsJbQdAAr7n66Db6wyLueqbtGn1f5JWppDphzNPqbh5pvaw81e3go2qcV9AiEq175dWv8",
  "key9": "2UCfm2Mxuh6vrHNkYZK733sEEAQrdebkMg3GePwBFSLy5o7kkPi2v3sVj4v2MmB8sieTMAcJwhPaG7X5bV2RnTfN",
  "key10": "2UKfXFq8NwnvoZ5ZkGr2b5ST6iNYZMC3h3weJUgLy83VHvx5ayahtpoaH82TfsPhydbe4HRZ1vrGkrt6Q8XTJhrg",
  "key11": "3ityaSDJ9Q2FDVF45CmpwJLVRwVEaT1EX5Eo8XHyLN296myoUdxi4GUc5H8qixovs3DuSFeNgjJC24kh3LRuA9S",
  "key12": "4nbXVn1g9UT4jtgEAs9DgxK1u62hSRK6a5Gse1wrE2v2LxPVgXKe4XE5D2XDSk1LDKUgHtom6ur1UQuQmLV5enR4",
  "key13": "3AyiD2C7d3f5JnZHMpjEBTpQXnywV2MEB5uh7hsgunLsKTuKFnWGi9v82oDzjd33RNJQ6Tfm4wcsuxdvbtyLcodx",
  "key14": "2nPqcrsjnc8dJrcW6ByG9rJ24SGGxXUf6N1ruZMpFt4DNKRxvKTywEDzA2a7L8xL2qoSFCLz98rKwypiR9Qzngej",
  "key15": "3tpQh3TnmpjXtZmcLPAVS51dA7SV6p1YPxFSnuu2LQXChPCNePi3kd31J9aRmshvX2wa9mRx8KPtWsJGSka1bjJW",
  "key16": "4o43LBG3vGtNxh6HAhUqQzz42Hi9drB76zpybsfhsDPkxTYUyWvPXUfkZcryPj8xVnxDiJEXLMBdrvgQVDLV8TwC",
  "key17": "5CPjo17wMbcjdvf978LB6bDmN854j1J5N16Ggz9Pd1aLAY8G43FUgpxXza9utMFZrvaGXDotyaF5hQFGPU9SigTJ",
  "key18": "5KJg3NVVK6iZkBWd686PdGba7sbz4h1rRdurbbRWTYirG7t9PXNR7EJPwctYdJ93vKiAbGUZH5YzLYUQvJChdy1h",
  "key19": "2xaRNrFAdQRiYoZ8XC1NCqqJvWbayk2ykDUsNKz14eFchBSYUEnT2XngJHkDvPEWBbwx7merjHzAFCXkZPRZwPaL",
  "key20": "4BThkjmyRPaM77Y7YSUqJKLP2PhdBjKvdwUa8oTVygbW6YDv8ftPkfCcHJPwuKnWBnLCXna4vbKWGy69iBVgdceg",
  "key21": "2Akw9ZG36yHCYYR1cAEwTUnetQjtatEQqhrCRLDCwtc9ZNcxmAs76s3vD3XeKwaz8Ep95TdNz44sdibmJ2K85Y3w",
  "key22": "4NFEFkFpeitbxvSoYtre7jfs4DU3M2c2VMCH5kZq6rBKZBiBTHqgqZTG7gMHRTQYzdem9joMEetvCCh1PdQSSwW6",
  "key23": "3BRztkwMJ6hZXL1V6ueoBoPTGUzT9J6BZP4MJN4tg65x89MQyyEPYw6Q2yDwW4h1RBTiRRniZqTaKvs56N5LqNrd",
  "key24": "3ZBGrttwvn8hf8GLVJkMKiDcQsDKjACVY9GgsHudpJq1awo2UQeBHKvJTUW8zqLrcbhURMWVpM8sLZBaD7cSCZiK",
  "key25": "3m5fDzWPPTvy8pbPvuxmC2gTje48pjAq9jhn4QSM9hgEesVEbH6yiYtNKg5Xmbxj7FMiu5aiJVYc4vWaRKCmhFoS",
  "key26": "2XGg3npkmvh2qhKNzPXhAoc29m2wjthDtosMe46rkxNhdqratFJ9KiGStDRxRzNoK7orehbkiEACyKJTiq135NvC",
  "key27": "335EnFQ9fFn36yJ7t8AovCo1SM2ch3BykmD7zEAbdWoSMKaQiFmXpPuMvcuzQWCVvoPk4sHLE6Y4eVxJSk2CC4L",
  "key28": "52oZkZWD2FDZd76kA2yrU9JKQWmiMRR1MaCa4kgQ963H6F7U7F4mvvYnKwjrtDzTy31xYepVtJ9ouY5Nd6gFhWm3"
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
