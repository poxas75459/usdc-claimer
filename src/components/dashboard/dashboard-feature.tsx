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
    "4qmc2Po5bDzxAdnzBYthAdYN7cUSK5spTDnBLEqfnx9kMscz9f7kEx5JoyMxCGuTjkTML7BTBmXbnvYUZKw9JDfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zZnJboDiQGzf64NU8qzFvQbVXLPaivvb3CgmamCjS2oxYJNMQvBMEU5QvgcHFBsaLrBv63beaZzF7Swz3bigiXK",
  "key1": "4iZkEA1zAnDKrhxiZAUtYJi3ympJ42HQ9bCbLamnufZSY2G8wejhwCzi7T5ParWwrqcn2M32vRFMVzZN8HXXs1xR",
  "key2": "5dpiJMK5dJH3XNB4zTjji8i9qosdb1SGDSqLjhr2dmz6nKp7n6kzVusXcz8Qymcz7PCuTFUXazenH6iSuh2c5GBK",
  "key3": "2ia63zEd3zcV76gxbwmZh2aM3VUVbQBFZfZ8hCtFw4zEXGfhVRWhYJWhZECSVCDK9kjEpBJmAhsupQcdC2k9qg8z",
  "key4": "2svD5vAgw12Q6KbEtEtUptuWLkJR6WjLnUTgdS7Gf52rBhu6SXeV8LyaGdmxt9dApkU4ABdSNHvjZnzd1gukpBkf",
  "key5": "4LnVHe832hf6NxsjxR4qqX21ZMEvDjsPo1v99ytKy3vQgRHitDR8UurLX2t8PnmJ7cNMxjcaHq67UnDQMkWo24eg",
  "key6": "3XKLEKPTzHVUQHsDkdenn9bS4g1tS3GxwecqHPP1PKCSXfDGhwb9Z5EE2rPsD6hAhj6YSHkozYdiRRcsQJe4KXq3",
  "key7": "29k2DjYGy5qm9bgTaaR17o9QbL2iQJhdyD6Ls81AdcDGXBkqiAuXn6yS9i4bpfrd1QFNdYJDfWtiQj8RBerLzrRA",
  "key8": "3Qzm5y4xaM7nHsRJH6U6jKcpk2uir2TwGMY9ZgGQPdDskziVxysRt3Y2vsdYh8bxJMTZytH386SrYszWAExzXFCb",
  "key9": "4iVPRdEove1cX7mTJPqPkzGu9A8CY6YWvD5FAJj1YDVMQw7rfDgan3KGE88ACkxpP24LVEBEgona11xmEBx6m1Wz",
  "key10": "4Y7wDEnJGFemZz5nVKo66xVnUibmexv9cphwhabTQhvE1ysxPuMiGrxe55fexmHBe8KPJXA8WmKAooAqdVSwP2WU",
  "key11": "GF8MsjAsKQx8qiKTmZpBu3H5MSmWQ6uPMkXmbZVSDCJztA9dXnVxoFi9rEPbr4eUzHYb67ZMqgHgKUgXu1wyVrD",
  "key12": "fkoM8bh18r3beVGP353Nbj24fwM1LHdvVn6LjsWU9ceR75Ph147j7XZWyQTYWmwCEr6HW4zrKZgvWkUBiUC9biF",
  "key13": "67hon65j5TJZmkPTUWmUobevP9BrgBpoNB6XRC2sYFPMtPUYX1g97wqvFaTdki9AXTaqr5XMCJ3i7ccA9VMLJMpG",
  "key14": "4iDMN9fZjecQMuRDiBwDXRqWa4zK4Zzfj6X4RNAy4fcNkkHxj6179o2wQ9rcyjkwpcmWpwTNGApzpjspWNuf3eEs",
  "key15": "5rRKy8RiebsMBjUVW2fygA7PPYFSy61GGXeW9vHtzvBWNvBzWbh9TbkPmQWnQWAfNPqFZ7WiXS3ypSCKMK3AhxCj",
  "key16": "MbWRfsQuuR8BZitqBDxD8CZURCtwNtzFmjyoxPQfauezf2dyCXLjDCKRhwA7VnohwxiZpYr6Kkd4sufdnzmGby7",
  "key17": "4HbP6Lnu9KZZQFNj2DKyK72TNRy8gSNUuZRdxFQWhjKyUDifaSj18un7cUtr3M4fPztDCBnkawY4XZbQR4kSH2YD",
  "key18": "56FDx7MJqsWnuGJe8AKzUxV7QTyp9h7i3AZ7HNvX9QgPKVFDsMuMihHxwyoDvHfLrYWpAw8bX8ccyncsVwS3VHeD",
  "key19": "55mpt2mpcmKf1v13VKzpnTNpDAWcSF1FrbHuYRQ1qe6Udi37STc85QgCJTeRDNsws6tYyJZGd7bHrS3hEFYns11N",
  "key20": "34AYGwmgVtJKDwvMekVU9eQR9SsyKMUuqBj4PGeaPPrxxp9HZusf1oeqAdbzrTntG6zeKLBZRgyzbuUcVTgGqQFb",
  "key21": "2PBBsvbZRHUQDAuSAnNzzETCVbXkr4LnDuzUGcVP2Zs8EYRniSh38AiEHBBMZv8egcgYjiUqun2AZ7mfpg98jMTx",
  "key22": "4ZjNSW9xyBAsQQEGmY187oWNjsYEYpvXVRd4zhdc7JwpCU2ajhwepjvyW7oVH2TDtmPTXJNmwNdUY1ETcM9o4BwM",
  "key23": "fHmouUu76m9SEoP9cnASdExQDfFdRAZk68xJZwbkFQYSTz1rv46S8wsQthA32vyouL3qwc3US6HMFnjtAMzgRsp",
  "key24": "2n31RtAvP5wX9TtCsTmwKcoytMcqFYV2QLjt8eBTjFa5KBP1VdLuiCKSJUfMEYfwfBHn21PrYkXcZRUFspvG9aEa",
  "key25": "3QDv4sKyj9pVDKa1efrGmHc8MVr8j72saGLEHWVEB5fZkoX39gWWv9fVHvFc5ziKUMbVKKT4FEXm4avmDm6L7K8y",
  "key26": "2gEU25YKf35m46ZHmS9HxefqRjExHRAb2m2F25VWUGZN8wkxPiPcU2CxUVvph6LMkh1vdxXXFFZvprN1zFhVeZKx",
  "key27": "4adsqZUqmCYdEZNWhVLZw4zp7iWmRZoD4mBU83fhC6hCuCMyD6T7QCWdwHhT3in3Ej8FRrgVuPQQ7yes6fL3KJqS"
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
