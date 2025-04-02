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
    "42wsLgFtRsQpvtrW93SAMWQqEjPWaAcwg795ybxpUxYCpVFPHk8uF1sPVomFJZu5CGadQ5mgoBoxh7aX6Yts3576"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XzsWVSpNpvbJKxNM57jPSiGTa1F8rCKPKFcRas3ZckjmYwE5LXYjhyhXPVax3osT4YAJ4nqCky2hMwbqFkKZiZm",
  "key1": "G2d1o9Mjc7HMHhLPWDJbLF3LUfHJxUkC6osjhuuWgd3H2yoZpHqbpPMDqzE1gQHQv7w8E2PEnS6eTVmmbZjJ1gn",
  "key2": "MKR7X5UH9MfjrGC7uXgmihZNQAgZsDRXscdRYANjMMTftuY8KET6TnjeW1Lg1qUvQgBdRy3hzuJ3ZFdqMYBQYMz",
  "key3": "4cRUXVnh382Z6XeSvvUPeo6QdZuKwtnUfrJFzMK6M8DKXh42rD7jXB1gx7oF6xggzDntkRDsaJFAbU6cHPAQjumk",
  "key4": "ddjqtBJEiFryg6xaAESfJuqWkpcfEpqDUmhaDrnmiX2t3Uz39V7hgsWWoDEuU9qf7UCKo3weARfNccG1RFXyRqJ",
  "key5": "2HVdYZLQfPSjFwXrjML3Y8D3yqejQeL45VK1ywNUko2edE6vr8VDRu2BSK8pp7cArkZcNbPCKje17E1idJCxeiPS",
  "key6": "57oMoucH2aVCXMGzvXFgUu8MM5ws99oJwkNZnGyjN1pkt5Kqu75zVVpHcSgmMDdBwJHp5yMnaMANXUmQC3Wih1ca",
  "key7": "3bcGnSu2KY9e7Tb4ibFf3J6aMQdBbEyN9wZLndsQqougBYU2QeuCFRzCgfbL1LZJMo2AvDBfcb7gEEeFoavX6dm",
  "key8": "4jwDvaHbKbT4n8BjANC2t8XdwZ7Z5uF45qksLB1HngLedxz3RAF1yKyshjGBchtquHGvJF7ZgBTxMgutjEYH9mKg",
  "key9": "5jtuHmUmNNwAjMBAYg1m3qkJ1XrEPF1bHthMo66YWrxgQjnYzUxj91KkC16VbwA75sxMfsopwETY33xJmSRVWjt",
  "key10": "32B1ZZWxgMr7czMeJJzv9bqNXx1D5BdBNX8HXJD62f5Z74zJissfGPgm4tqkABL4rZqZjJj9Rdfiyjo8jKckEEbE",
  "key11": "4SJdgb56f6r2R257p2nxT9pPzbsMbv59gDZcXzatAYAmNZ8EihFfeqc3uZfnHZi4jF3xTFBFcb449SG4kUyKsdyV",
  "key12": "2swHPucLZ1kJvCXJ6A9NaYKzWVLfmbWbzG3ES72YgD9isSJnCuV3uvLx517GXfU7MxdYUEwC9UtznLYP5KvLy9EV",
  "key13": "KWFXHxrJJFis6aqX8YBAzRDFa44fWxvFcoYq8kpvX94VDzvuC6swosQsgsDFP268PgYnUV1cTcpiPduXUkNe4NB",
  "key14": "3vpY5t6jLk8BASpf9VnVR4Wr8gmDSLSFd3gKsHhjyeCDJdLTcR4s1fNtcoxwtunGWGJL1YLcFjuxx2fqxgi3WiXe",
  "key15": "5xUJiCSuJ2jQfcEyXWXUvHL714rNgQUdFTW7rpJQ6vzQX1HSPSx5SeZMJcC9Ubvuva6b7vb58fcncfFagiG7DpJS",
  "key16": "4eSUfitDKTuojkRBrsShcnsLC3wxbDp14EiuQHDzhdhCdseByvMyyDz2t18hbahAZesjzWyL47YqhDcmQpDz4QLX",
  "key17": "2oLTi887kJM9b2DDPa1yiqq7ffsgaeA7GHyiZKYbv6J4WL25xen1dVtnb3TqXdBHGMSiTyGBZW9AYDuzEnRQqMKs",
  "key18": "2fARpa286iFx8P1gwf2yiY3RbW6kr6tU6ZoBgKWR7DTjdTEXEAWJeJapmYXkYogUxYwUpjCiordYjAwtWzpFnpsD",
  "key19": "9dXibkS5py5Mzx8peUXkMmxUUbV9jFugV32dSDE9CVBnsu9hp32fzbcjfok9g47g1bbtiBFcdQuFSRDw7gD5vd6",
  "key20": "3Qb6pbgiFtQMomdRMkViw5XxocH1tLAhoL94TMpSX6iG8JeLroELJNJnvcJ6iNzw7Uws8H3PsCDud1y176u3cax4",
  "key21": "2YXxM2BAkJDYuUBvM5KNcCWZ9QKkiTDgesp2cCotzb6jngT7zR2N4roaZfrRQXiroAW1wL7FzYxpXkt13E9WbPdm",
  "key22": "5KbtgELZ4bqw8JmYqUEGoRomQ5CsbiK3drQWgH95GAm8V6Qp1uF3zYpb4ExWCMpsFH1yCHqHz6XM9F9v5bdTBmXB",
  "key23": "4vx9tSRSmm6W2WbqtAjZs3JVyVBtf49SVqnQCTcsK4e43Jm4dgPos6TbSQ4WJCCYz6D6jehQRMhtdzoAKREfc73X",
  "key24": "4yaCXsFamVVRWkUQP7JXPuUdaDvGjbz6a3Ab9GwcMNeFUWeLXyVhZoi2FfpnFpybvv7uy4TEwdAURdTZScCMiYzW",
  "key25": "77LsX2tuRQaVqVwzjVHqXiPq5ATgx8uNBKzeCc6LcjtahUf67N6JNa7YwudbCs5RzBvcu5qF1Qeie7PGrnXzXEA",
  "key26": "5a8dmJwaxcXVNrpGb7nFuv46XkcSLHYW1gRC4vq7s89DjzLheQUjkFdC5mCeGC8221UQA5CT3SxWyUHgVYHmTqpX",
  "key27": "2rBEtjDGof8GD569eDELNkufPa5hztLLNHU8AfHHK4MbCAMbhAaufcYh2jxa3jHayuMSBCG4Zag8vQuTSiCoHXvc",
  "key28": "3cdxNp45dThqH4MLBoQvYY2HGDRs12ETLRSiPUAo14FnJZy6RPMsqUapCJ8BSCn7bW6PTh8qGYhGVi3CWPKQKdwL",
  "key29": "3iXxcZGcQVTuPM75NxdH6JJyqpP1sSkPvBqT3wXb39KTJwNsNmhtWq9jytzJLgC2nUqtDiNdLBUE34BMuExrwAms",
  "key30": "5s7K4GwsZ2tf2ZPX1ukAioagvn3YGjvgUVSAVZTexi5jcLCEB3HcYeaQXwem3YvAKUUwvnm2fKyjK9GeqyZ55Qxy",
  "key31": "24SBK5CWdhCqCXnKqQA1XbcjEyBvNhuD2QBRhTefCuAaa7viTJqPEenmHmAVCmRAduiptUGmRpYpbZFCxnyVweXQ",
  "key32": "2mpu2ugGSKagB7aULAUJKV3AfyhxUsKAAm8PHamhmGhdRwp9tASvcZu9Ap8gyzNgGPm2LLRikbmFzWoLCe1qBjHn",
  "key33": "5Vd8JdfCRztuUQ7fMWkMwNUkNhaoUR4uHxprqTk1WsM74QJGunvqKY2oGMGagpTkm5PhE5o1orQ7u3D8b4mXuPnA",
  "key34": "3jjH8b1ziDKsxHsfEe61jgWiZiFnFyswFeKqPbehBUDsQ2Uid1cMscnR4WAexW6DSt1xcK9L497QNp3L6CFwBfMJ",
  "key35": "4nUPyjN6MVpxtP7Zywg2Jv79y7Qd2kGgCH7H3jv8mnTvMiHexsznuXffRbF7gVMWGfaM368Yxv1J8aKdXhRZPx9D"
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
