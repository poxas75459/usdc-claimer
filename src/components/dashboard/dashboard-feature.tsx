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
    "EWQp5wP8MB6DWAcZodNfUziodqbhKBvq8GU83jp2SoPzFhcFPL3gpfkSqyYA7hQe43SgQSQN21XCkT34aHW9tMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qVbCvYPeRQfzGJCi6vbw1wjAFG1EFRU3YHt8hckqk22r7SzZPxNR9utYjKdQrbRvR8jnyZWEgzWCQK5qaayMpTv",
  "key1": "2EFFCJg7puNUCh3THUByV2bM13bvyvScZ8xozNVv28fMknn8mo96BVVeeP8KmHNKnvrwAieWR1yhNEDsSs3D5LVH",
  "key2": "3GFkuSQZk7FVNsxvRumsDqdZmAq6cdUwihgPc6egWVuX2tDtNRZHQLzAfd2sXbKt5zr3gXEnKkjmPAp5KVMj4ERT",
  "key3": "2nv8i7Pym4q3tkmsEfhimjMgm3Vcz4PcWBisBryCeS8C2HZsEwUx881xwJZ77PQvcn8c665sQTHZmHW9cUnuUhCY",
  "key4": "4VNdkNJNMkjr8qRyccnAFDBap9K4g5WuJr9VS45LjdEfM6wUU1LoBqhu8ZSeLRrtEXivitEtZbb7iqciSneFKDGw",
  "key5": "5TsYPngmmoU7LqmKFPUksZHF1CPY5oX3j4LXTQhumdFDniT9VV6icT8KUazQuEp1De93cap1hxi8dUwbQeJ63Pag",
  "key6": "5SWiM44utqp2Yu9Yp1xH7DfJKg9viThtD7ikUoENGDfUr5JCkScAwoo2m34JgDkRku4XjPGbRQN6SXUXhJn5VGSf",
  "key7": "7BrN6CEswEHjcH9iwhaVs9mRUYFUz3joLrGQjLKYgp6tmGEtQ3HHWrepJwA2MXe5WKBFpbBVqgVU1MSqFfaVDct",
  "key8": "W2vaFiBx2zahaX21uwvgzmrcu8YdLdqqXJokySqaz22oW9vXpPE3EAp6TmPs3g3JUrzWLf4S1ua9cP8KKyynrxU",
  "key9": "3xMKDzaLKEZaYuWPoUjQLTMGpkvtsyu5LyChio4Ne8EdN2S7pjRi9P7rq29ugcthmHw2XeG9trq2ewKvgvVzKvcB",
  "key10": "R2oGzJaFkAexkcpTXFfmBsZbrkXHGCsa6BSVDunA4Pv1MJK394xZsznKJLs6bZ5AKtLXxBxnLHy6XT1bbQtFUUL",
  "key11": "1SYhA9HcDWRn7odq3q3Fuw7U2cXteGfXQfsFyJH4ohL2KXAdDRxLqneugg48HGNksb2sJPEAB3f8sNp5EYPRVWx",
  "key12": "tnKfPpUGt5d3aEXVAMx4KMYaEEhEKGRuHerNNet8wpo5QRtCEW9LiJtCxXLLiekBgAnJffT6J2BwRsAe3zCYjBR",
  "key13": "3Pd7dz76tNngxheUVn15VUku6v8yTbneNbxe5XShcBWNTYgLuNvtDj9dMsTYvQyuKw7PYXiiuzZM4y8Tdw65CJKR",
  "key14": "4nbydqq7XKWWoC75MsfZCxSPnAve1TwHBvNtwbmb34w7XZb3qgFjx1SoD6yPwD6NTNKyg1ph3qnCye5mA3ZiHcUw",
  "key15": "4kD2A1UoeeSpZamVmoia2V93yPMh8DiNRKf7zt6GJ2A4fVPYVDEMbLC6TFssBu1jYyo7rD2hjy6PHn7QXjxZRQyB",
  "key16": "31Nxg4gvZRGAFNuN7r7ZeGQNMqSagyCfRkMZLz1DYepWHgbF7aWWGzwJv4eASNak8GtYNJcTDF8H2AWiAb4rk5Vs",
  "key17": "ky5GcftrBobuHnmpaknNSYMDZ78wcEyyyMkK5ZCi4GK64jWUgRpykKQt73SFoQJ5xRVSGELz2GyuZcsj8SzzpDJ",
  "key18": "UZ3kc7y68qBXHvgVb79VwxBtWiQc1pfncbSRM1zhzbE6MafRVBXbogjxq1nT4zNquPrfFBgQELs4QWiG14pjqQj",
  "key19": "4RYw6vK6knN5gVtVdvZN488hRKNyNVP23dCrFXt9p4dWnhaJrAQDwG2R2S2R95VnjzDrN9sTf8Thbam3FAbUxwNK",
  "key20": "4w1uMLRXhQdsCAyRoiSaSKtv33mL9fA3jdqDswcfBHAHpXWSk1sKDDNY1onzmoohkyscWBAwU8ZLwBsqkDsAfkNW",
  "key21": "dB5eQ6ZK3UqhQYKDQU11zR9BFUxzn9yhBJqpb4gK1wk3UziACCTDtTBR4naWsB8MG463uzueQwadbhZXHUvq6Hq",
  "key22": "4g3eoUmLVLHeLhcB8hZT8dA3pEfre5uCQmtBQS8ruepeWU9i7Gy3o17sSFhbHYbEBgmLLwqFYjXnY1yGiUKK2UD8",
  "key23": "4qt2wNKUPd8dG6VD9UsL2j1aWGaPUMpJq81Hrih7Gh2bk4BNY1VjiSHakVfb6iKKjrJTug1tsdn97tBogmXEsJdE",
  "key24": "4KwYv8TdmDE1H7aCUQmqcSF8uYZLBMKahSWC9GksiE8vrHsubX28GfhDyx6dGVUZsePpQsVfJacJiDNHgnNPX8uA",
  "key25": "MzrJP8EuE8jYk3apjmbQ9CQZqBdkRTeE5JfWu9vjcViLrjUAXeWCjK3uNZCw3xMDm4wobD27B2bf69ZYB5ZzMzo",
  "key26": "2kwAeshFYbH2N8in7MhD2kCZczFCEie67eNDPZyc6MQeLDNt4bmbCAiCLZc6B6sHhvczGouqDfSxLbwMVmynVxnR",
  "key27": "3ZPZ6MYunDBe3ozWuwjXDZ45iQE11Wi8mymcYYzRTqM8Eb9URKDYDrdCnACWKmXkLuHruiGHdfW3uWmmZ18haBod"
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
