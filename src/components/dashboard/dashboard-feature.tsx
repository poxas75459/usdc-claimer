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
    "5rVAQRCSf594o5cgxku4oEKKD95V6mB9f2WeE8RdYSAWT87DohvkPVekZyKXqhVEegt1YjybRL5v2v6fzh4tVeYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61gwLgNRnKBvXQ2q5twabrRK4xZWa3Fzcgq7ooL1qdnA2gAnZyto2LbDpaSbDE8UGLL58yQdkHYpdfFn88e4EfvB",
  "key1": "5qRMfaHGUcJXD3vPxrfsAtwdLZtjwyXxBtcqNCpvyZwYY3THBsFkVePzPveqcRjhzyc31DeiW64pC9uDphEMxB7y",
  "key2": "2pMidL8mcBnZG4bAyeYzjpaYpJFFMPf1JzV5EPxcfJHgZMB7ASeaGrZz3cFBxWzm5PrxzN86bdWWywzSkioip72p",
  "key3": "YrQfzZB9PyjgYsfJM8bx5uWP6TiWgPKnNnuCPXzf2WfbYWKZh1DELQNUvKbRAzjETKKNiMyErss4Uazz4ztrHdf",
  "key4": "5Pw95KVy9DW8Jw5nuoc4AnH9CTGhYWjkqhroS4cjd3tJ8cNmduNw9L2r9h7ExpxNJpt5SyYMzczMNgn8VyUGXjyB",
  "key5": "4TE6deFxGe6gFBToZqhrZeSPyUVXLxeLvsQVLKHzicd4bzcQEi9wDEvu8S93Qo61DP1ic7kSybtASVyBW75NL1JR",
  "key6": "5MtwRpJq3p8Q1vjWV3ueuLe7Va6z1TGXWZr3y4qQ16RDqcMqJTve7CoBEoD9dgJneo9d3cjQRWKDFVpswRSk2T1h",
  "key7": "F9QLitsyaiVnA6nYHVWPJCnoEPiZgzSUvbndZrwPQPDZNthFYu6voKuhTVrrHGh563rJ8uTXD4CnBLbaat2WJXQ",
  "key8": "eBENyywPSKXGwjKKZUuUD86SNK8Av9KR2wMtr9djs9ZGcHKhE4fju8kL49AmLPu1ewMzxnuvZzivLq2tQ7vKD1H",
  "key9": "3yxPUeUdG8t5weUCJyuEDcp2sg7pPooeUEsj8M7wDgPXFsKKdYj4hkAHxZ9czTF2a9zpnS3PZxFspNv1mhZDUbwp",
  "key10": "88txhoJxNZbXqvXNGCJhCQzR54v5b3R1TCuWrhQhcWZDzuQberjZGXm9mD2x3ZQu5BodV1L2Nq5YUdULZWBNhLh",
  "key11": "hzf5LvRcfMFizScHff41GVjUE7s7pp6eBUQ7oRRJwoLNkPjUm97NjYdH7UuAS1MLkR25cP186u3LD6n2LkFkRiq",
  "key12": "5jRpQJXweKvmFBDurYv8kRa3drUTb9sVmYFvaVmTZSuCK8NXjFeCGe4AmxLuChFMYkDnU1WxmB8AaosXP6bQ4Aps",
  "key13": "4vJDfkVxM5PAAqZZ7L97q2tYMBT8K4DS713ULLFqtWh8Lih5nBWAMVAdZeaWVtvMzxr6VCzUaRrGYWqf7a4GiaDz",
  "key14": "457phpNDYiCtHu9eeNHcTmXjbaR2Bq4HEjKe5Cm4fq4YYZbtefkQ2ac1U8f7hFxfcLVXqmRn7hvFaAjELPeN8WtK",
  "key15": "2kNwHtPtekF5yTU933gWwD429ax1ZVsE6AT1HHMcE8KFc8cbwaqs6qSk17BjwjXPg91nRWLrzKfk5ErM6pz4jVNf",
  "key16": "3w2CUBPVZvafLodBHKzkbNv8V6t5NJ9Umb7dUaRFyY8sDiNEMeMx8zKaD2mFfCB7F6k5JJCDAptpWtqi61FfYAD4",
  "key17": "4xmuWfvmyMYYp7iQ9kjXi9xQqjL1HrWcCPchCgxoF21tySYu1eH7fYfnKXSG6TVtjPn8P6y53oTHSEyh9JpNrfiR",
  "key18": "4JBxisH8mQTBnR2z1VTAkAyA5kfNDZVvSNNqJ69XnSQViBjy7jPEj2vjc3XqzkQuaWo81mbdxWEfKNLd6oG38Q2B",
  "key19": "4MFm8vYhsedHh3stMT3cGpuiZDEqnbwD1692nzjFUkbXYMHJNXPJNQLL5oeVe6UAP5ZBMNs3gEbPUySZHoyzXPDn",
  "key20": "5eG79gy86bNei3SMiVZYx6PgaLxUTuAvETGmt3Uu9yQPMi6oocSWp3fF3FxmYHjjKg1znd7AUhvjG3Wv42cn2Dku",
  "key21": "31bNX4gEnyxr9VcCx9nBFVhiXVHRbkcbfr5e5BtqW2d4ETb6fr3Tb4gD1oRZe6GXXDmN7hZdqrTbvLzKAvr2bwhh",
  "key22": "5WoMW5VX9hwjbUHPNErVhKZT7AyWuAC4GetrGmeC23PNMQHka3EjBmY4odSgF77EyBAbwm6xayRBfRjTBiVpWmYc",
  "key23": "4yhvPyPNAvgdiGac1buBRY1h5dBDJagpeje58DWazTcHi1GZiVfvEuMcPgdcbornKNrJbT4rCxJadXDYqvQSuwDX",
  "key24": "5g7cZUK3Ub3U1u1Q4HcWa4EuVRDuQd3zJZQYdRNjM8bihrjZ5inr7TQwuC9qBFfE71J5M1dSX3yN6UcbabgSgwM",
  "key25": "3zPuhm4dA827Tpeg8kNFCy2EK4XgDWyRLRFZdrZjmwc81T6gC4UG2xBfDUfqWRTk91VeA3RLEjGeckUTaio2Wy2u",
  "key26": "35SAyRu5LJqPaXC6np8ZTjGkT9kAmNtuLELBgDyepE1Dx7oqRhw95PtqShck7RCCwrCNjstCU4cMJ5KaUXs282hD",
  "key27": "9sndatw2eepVQ8Fgafr6YkDiA6swt3DwFwYM4HkSEu3MzkjLGbosCVhSx2wEvVwg6CcCcbXHfK176honbRd6ML2",
  "key28": "5go5ZWAHvcmWkFoo9wgc49BudybUNub8vd44YW64z2tjgMeB4EVoRj7hJ3MwpujPL3cJtR5E4Eg7fDXU8tLwS9w3",
  "key29": "4RknUPWt4vH9cX86AYfqUCtKDU9PBzP52ZFMYUyZhSZ6rTLLMRKBeeQDCHv61jwjTGVbZygjQDDTMoFxbYQ4n6vx",
  "key30": "5yW4bZxS3qv6GwhNMG3p8Uo2HLA2XRYA8TYinbaRkT6gjvof8Un49rWfhj3m2c1ZULMg9sZ7PhYqjyhQ7G84fFt8",
  "key31": "5ruMYxhdjM8LHBdf5BUkn86b2VwRcuSCBAkm1hTtv5hTQ93gEdA1xpH4e4z5Ld83FvgEhG6okrMJVzaW5c27aAso",
  "key32": "3RmrDAkho43QGX2uZke91ubiCSgewoDeVzdwwuGLq4z1RWSJ4THiFYUEp3zYzBTHBXTWfhY9rYRa11EPvngfjn3h",
  "key33": "3kTyXgEJCESeoHMasmE1JPaNmVZLjiQBXiiQkN6hYJqgYN6PNQtvH7AyPXsSNhwFrNusV5wNxdwtEnroQJx1wPAS"
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
