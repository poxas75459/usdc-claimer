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
    "5gnzd1GwJ6xhyt2m7zN7d1CRELVtUGz3cUVpSQD2ddEhs8zJwGuqzetGH87Vp6wMD8NX2HDwsjAC7batwx6J4FnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zFwPf4aDTFAV6tRrt33j63vqPMg3yrCSJZSBGyTjKhciCuydbXAZeigj2isV82yNW1LKZbeZq3EWhsrw8Enx97P",
  "key1": "2C5j4yUz15KqXhUSKKS9GGeXrUrKKi2q5VoaYaEFqkFvkVZjBZFdNWQ2eKU87CukX4STqAzyrD5v1wirhwzicBqG",
  "key2": "3fYrQabfQc7Uc1yL1QxqemnrTVLgnSihvkbtJrr26Fb3iiTVYgrF1P6Ywx87Mn4AjSNeiSBiCcu3E1ZVNrVotera",
  "key3": "3G5owqUzdz5jGf3L39eAQ2ejgNQgawP3JJHKRzDdGyTvoARvVRvq6h9Z6Yxx1yutyJDBm6CwSvURxexcYTkaCJZ7",
  "key4": "3ioy4Xvzk1yR8CS7hkUfqzu7An53EEkMwYpF1ZKVDvAdBDmWC8UykDajH8CxLnW6ex9jcGcoErQWgQUF4T6h88q8",
  "key5": "2M92r7YYocDgGo7KbqsD9Jf3GFauezgDbFenRHwEkjQDs7jNfXNEt4Xzf4bhaMfTPnxeEMSoPnqnbYHFd4fAYdmz",
  "key6": "3RhkyQjs5TneU99iBMmxfnavLaiZjhj7xH1oWfmtbA3HCZUkjcwJg5vV3wYYJFMh1Vu9iAw1PZ5cf8CqvsaVXdAZ",
  "key7": "3KR3P8DtAH7DLkH5PVUyfiGr27h9LfoUUvRGkWnwophrZARTNHeFbqxsVDsPFgHAB3D6i5gX7g2oK8zXrv8MDFQk",
  "key8": "twqyrmKfnuJMe3d9Hxd4SiuWM2NBXrUUSp4D3WaJsCDw5DUycvnSn8snzDsbomn97mUQY9Ex69ksYHq3rgoBrri",
  "key9": "2Nk8C8oFywpGQY3zwT1StGAdns2QKai9VRhGReWDeuGFyD18v8cGNyijANZ7Mvdmss3LgCqYQJ6q5qUXkbQNJ3K4",
  "key10": "2eAc1EZk1B6JeThh1Z8HdTaJiWFhU6AExPeaW3ib652FDM5cwfrBhM5JzLt19XHG6aUDRbPJ1sAnyfvS4Y93A7JK",
  "key11": "4FWNLxm98wNt3DprtKsAJmDNghaMYhjHuXuVVogQNdafnEgiku21sDqPHjnheC2haUDWGhFierx9xmBFr6ud3Z6M",
  "key12": "3wiBT7rNzvMBLSGPwpEewKa2QXPJfEm7x55NoLbgBwkKM1PSJVBGTCfWbjbqysnyfHo2f2kQqW5ajq1c4jRH4KzG",
  "key13": "n3tEBgvaUF9fnAJPpMqhccbyd4VtnP6KcWVpiZokPesEWTUs9m2eQmipYa5dobZ2kX27ubodevtVeASfe2pCiSN",
  "key14": "Cq9oBjfJpnhg61EsCsVWE5SeKTkVD8wDHsdVU686Cw7LivQYfxtgnaNM9eWBqRcBtaHmPzFVM6N9hjgztpVSu39",
  "key15": "2qiSDwg4koi17ytLx5KN5fAG4AnkTpTajjyE2CvBtouPjhKDWTbPPZtXpDGgAvsGSc8JfvzbzhqJ9BK9DiVU7jJF",
  "key16": "5qu7aiS9ZypoMMzmiJw2geYFNLccNwxpFYpmMtsHGZpsS5m98HiSHzMeSu5FFUNkomviyzAx6SxERc8pzkb8BFUj",
  "key17": "2dD35rR9bBePoDMxQzFaQi3f4QLCANoiL2qCyps683mCmdq1K9QRB5fDuQMF9Vb9jxEo4bovvvkmzkH7Vnjh4Grk",
  "key18": "64Bujj5uFqVNLaPsMcwAcjowzPVFfdiAHD1FRKNXqyPpVBGUH1S4biju76KP8zAknaoqGXN4UxsUkNUVQWSKvW4V",
  "key19": "3DSbYTCES7VP44KVUPpnugkDh1c5siSapnykTbafs8P8fss16cNXQmxoGn3wcZf2D1WbyKToMswsrqmYLb1m82gP",
  "key20": "2o8CuXkqBHxJHckhpv4yRQvjaRPAXN76HtdNa54usmCKpUpDrFbYDQPKdnczAHBxXV5hT6UTmsa1soMRqwEm6xs4",
  "key21": "T31JZNdz6C9vnbT332pysLiykp4FoZGhtrkXi53GZC9dNfuMgiZJR3ezAP5XQuNcxExwMZ1oV3RN6Rwq3DortrX",
  "key22": "4VAU4xJmVXEE38w4fsYmjgJWifJ6kySYAo8bwGbKX49h9FEkVSMpgNRSpcW7Ex5cPqMq53LovjXGT2eeFJCqogkR",
  "key23": "2UJDTNxQK1AAhkHmQMt6eF9dshdDKVStpnodkyA2rHFuzmX7Xs2stN3ZAkytDA179wU5yuyYbMVL5JowLiukrTNE",
  "key24": "2BCXSjgBGCsRgbUV3UbxzybwnH5mzuhiqeaLCwYo2BDBMnomQYM9X2ew3iLGDUXMcMEJMkyubAfS6CZdTSQ844ae",
  "key25": "2VtNPaW9zRBdzdwPt9nLtm5AxQ6R5vYUfnDfJ5qsasAa8DHVph4w8t9stGnbMncGf7SkTEAmBPV7F1wGxzV5QbZ9",
  "key26": "KHtNPqs1vW85gc82UFoGQVNNChZ8bejqZ4yFzgRmnbHjRQyAzDEnhwA3xz1C6FioUWoEssaTuFktCvqfTgKYpZK",
  "key27": "4LwW2H9dByw4vEaQuqd9GBhLgndxmmKFWLrBn2dqyr6ab3CrcMHpWoMAHio8xcgDsKgeP9jXN3gu3mRL7G8wm92J",
  "key28": "3iX1jBKLUrLsQJULnvxgA8enroAPW4TP7y8xWzL2EnS2cZgd9o3X7FvfutXdee8tAyGvPJkJqcYNyfA9ECrYptq2",
  "key29": "4Z66uUuEwJDDXhMm1oj4fMP8AaaTZx2nDiwpYVEVSMgH7AFyWPqkQzzVQ4j7jBHZqsTn5mpTJBACzgo5ydnMDgtQ"
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
