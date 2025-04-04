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
    "369DqgcWvuebMBc4L79GdsTV5xKzj7K4psnkkgAdJcDMPf68ygo7AYpFw4peDCaPsmvebcvBK6aFfDvL6XZ1YyN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m1JiD89dHzmo6V5c2ZRJsMVEvX1nqpxj3FA2ayj37keSsiwWUGW6YuoTFZGrKawN1Mqt27ro1vgqy6X1vPMVU8C",
  "key1": "3XHH92eGsY4dLiKR2EPhTwNJPZrXARFcaSsN39nx9LkrzjsupoovJpx5XFLLSjmyQdcL4puaBMJYdvbKxBezFBtT",
  "key2": "5ZTCXP8qnNmuo1RauHoFFQkNPHi5jdH1J11JxnFpCZMzZrNisKcGnLTzEyrwVKtPRYxhPZhGVmiAXuY4GfnXs6rB",
  "key3": "2cFfc3PgnvhZoUQhWzenXGktZVwDCCoVCCygWrkiS1VRfbn2Nh4nCYTKx6XxVYH27f3iTeyi8bYwnQpEAPZ4EYo5",
  "key4": "4Ww5XR55nprmDXqs24yTcpuDH3QMgiAYuLdEbcxzMnoAqSFsmaWm1wibJCq369zTtFj1Z3hxfPf8cdb3hvvizAG9",
  "key5": "2RGFS6uApPxxhuKXwRF4EUcRigrrpb9SE1qGvQLoAgLnBWMZfbQK5EYvzeULU4sNC1429AbrBrSK1zpB9bwh4Xbe",
  "key6": "C76YaT5uRXupEPZbMU67k2q42Ku2RxPV37qBwrMed7M8FMSBJCAnrUGTZSFy4FpCLhrpupz3HbkuLZrF9r85x5L",
  "key7": "4VcTg7A4wV7dcto3rUbQdG8vqC88TE69key7ar6HSN4kxSwBS9Kq9V7QNU4schAL9QKnC2HNUqkBgjV6fmqqLec8",
  "key8": "5QmB5muXFugksYMUpdFmcX6u6zBnNphPhAJn3tB3nCuWNtzNwzp2Eeiw1ncYTPYz2nJ4NUbfCW7fhKA95i62Pr3m",
  "key9": "NoJcNZurMybniptuBRjJKZz3bEKowqz3486QikqEK4qHGSD2jmJuZe33gTBY9PD2zejd3UqCXS8q4s3Qqmnzff4",
  "key10": "5Z1kneNuxVbea7uh9urrD3vRLtBM3k1EvuhXcFRGVsMv1BXGj27zw1DpKKB9D5RUyE2aKKRWpGxJgkGtP7Epf8uf",
  "key11": "hTP4x2uYGFHAt7Q3pc1uVvDrjmzbQjTfSVgXYkC4iHvbX94nVz24xAHr2mW5Rmotwi5vYwkH8HD3J7y85uxhQjD",
  "key12": "2J5d8LrD5hra8yenAgioDG1gusejY3A5YiKBcwD1byt5L1WnqJUVeXDtQC4X2dhJMds8vXqNRFxYP8yq28H2A5fc",
  "key13": "2TiL4p1nAxF7bLji46ueBAkVPbLSWQWBhfbTgp1PKKhqiyRpQ45ngTFA4qJdNuoBZMnr8nnNZbX5RyjmpcxuJ2Db",
  "key14": "V337K7swiuyFBPVA9yoPVTaHeeHrZ9pqB2NSEQA6peYCwrKXAMyQigBQ6AkhRJL6DUsqoNB7J1p3X3K9AMTS6vX",
  "key15": "4zWYQmsFQJSu4H5Z5NZJ4LEmiuMtzMZRLmwSzFi8dwmBKmbSxry8wvccK4ehZxxNw91ZTP75zCQR6GZZbUkJkTZQ",
  "key16": "5oNugEGLnZjWypkPyMQXGCgD7HpELgcxFUZBZxf6Qkt2ey2oDh3iAsvkcdRANaiHw6ddkVZFnWiMkr4YW5zc15wN",
  "key17": "2KLHQwg8JebM9LwbkAsRN9tEHa6i6FCQGLtjj4UoXqkSm97ogR1eHcZoTtWvHGH4sEKBNopkT6VVy9V2kWUYwcKA",
  "key18": "3qH13DTbeXMjEeiDggk4s4yUX1G3jCcxZbp3eAcPCB2TMUjcLBS394JKBEH7dXp6QFPZ3H89MYbJFdYLYspzbLix",
  "key19": "Evf96epKxVZs3wHvU3oo63AHM5sg87YPFWnvfCtqe8ySUpryst32Hr4dCCGoJoovkDAS2igKBcMCPuvEEYZJ9gL",
  "key20": "LvvY4Gxh3gtwUgNibPTMpxspjabSr23WoMp1wUrgudTZXZs9QtmXJ7cY5MgBMCcxRRiATGMbH1brvcgWkFS4z4x",
  "key21": "4rC6B7Fx7LQKhoDLfJmAzp1VBVu6ub4dqc3wceqv7uFCzFBcU8HjZbgaqJxsxCAytfzxdA6wN7HUeCEBf8naHm4F",
  "key22": "5oHn4g4vx3mjGaG7M2QgndfW1LEcUbbUbTzrEN5An28mqcUA2NwbBcpZ6jgwu1etpdijYt8Xr9uyDXe7Dj38qkvK",
  "key23": "5zLxsbnRsp9CTyjGhdRsiUHpSAXX1BTeQ9CWxdJEzwuQBTqernpSD2ny455MbDYLUUSyKHJGfUmHh7gPf3RbReaj",
  "key24": "5dEGZ7tcQ2MC5CuennSfeB3hyB34Kkgk7AtmF7o9Kx5GbuucEiXTWd2WEvx2RhKcBKgmdDsTBQ9HjSRpozzU9p4T",
  "key25": "29EAobr9aYGesBr5eY2LQCKqb71CkjwbPQrjDMxaYvzyopbPET779Ggy8JQ3ZeVDTbF9tTAhnDdAS9mBYGdYGgFR",
  "key26": "5q6qr6dgZERK6CMyQJumDRFFT7BJnjs2FDteoqqWpZzX7UAKNvTEVNXZQBGdApJpjsxr33Nf3ubHtrhWZeMG4727",
  "key27": "3fssd5pbt56JuvWLeVK3USVNqJTdi4vL1gvwC98UrU6V9XjUHWub7RsYEo86buhHMHRJExvmuPXn2TwRfr4g2kSm",
  "key28": "2d7yBmdqtNwrVW19zUwQjJHM2ioas4G2iCaAGHtMDuKZHmnAXnt52eJQDRaT9bN8V1jnuzogBNav7z6C2gSNUUit",
  "key29": "3HsGZEKxmi8fSzzQTA4U46kdYU5vQQdhQKgZPBmyEyXb7NqMyTGT8dUAv28WUCqgovQjBixuW82yq3cJmQwUQPEM",
  "key30": "3Zz49UYGdCnJadkBmiv7awqeB2yVCFdE9h4SBRK1h4y9v4wRemVqZb1KtuyH1Xx7BRXxPq1soDJW7XNGu9rrnQpd",
  "key31": "5opTjtbogTQzWMHvCFBm91RgdgS3B4uwZTtKUKfPkmDcVSR5MD4cfiyyH6TNuYfcAFcXjMxgVBMRe3bkmPmxy8fN",
  "key32": "2Rm3tZGcbD5ZUzuxHRoLTSUsMWr6jLzP6iB7yfzeK4fnyzqZP4bxb8xJtaCnqzWpXW8yumEpoD7tSi2eVsuuTBW2",
  "key33": "65vsnQQth8JgM5njYo66zRWFLAjRUuHQb91mwPt1ND3AK4yNLgjJrcCPmns8V4UKpd391oWMwSLPU3DLv9zQPoBk",
  "key34": "VtCdLr4Pfsj9i13v4zXMa6TS4xyJFozeUFMcC9Th5gDGzPp1dXk9g9kNV57cQfkRens1etXNRLz4tXzSaWDA9XN",
  "key35": "L18oVyYbre4vjxydWYRS2hcCKNArFoFiz95JDXM4rmbcnPMzQykY7G9ZQFLQHkBsayj5Gf3QsUdWAQM4qup5MWi"
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
