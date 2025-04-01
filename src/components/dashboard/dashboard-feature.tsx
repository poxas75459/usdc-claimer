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
    "3PpTvAADqWuH2AB8Paro4kpnS8tHh2cigT7bu9TCd3HnBRtwyNDgbgS8gSs6wgoFxiHVRqt4aNcT8SMprbVQyAmc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iXz9WiebUM3LuFovYD6WQL2vcQrnRW68CFBE6FhKAbUpJPvgu2JvY7iQGABJNGTbJdVHKvBNJzU1avkJbLYy6Ct",
  "key1": "3RjVyaDrTJs197LniNRBad39CREsLoBrxNPivXFJtERojhdNgGdy4PjX9LxmTKg4m5B7A6gt7pbc6uqWhjjdyrzH",
  "key2": "DKcxRAwRu4x9qTvHVJYTWkCe531DkwJkcjoxTnqmdrtG2xcDS8UpxynmsZVtQjcN5t221c5XN6SJdbtzBPUuBdo",
  "key3": "3DumGzhMmSWCf2w43yxUHkAKMcfB3pz8rh1JbKhF3iwRcSonD816Fx4BV6s7MXdoLmZbDy88zBeUS5Gwzie9A6B7",
  "key4": "42yoUV72DLiQe3mkkivc2WwXQS1cXQ1qx2p4z7dq7tAStUoQ5q1Z6c1gX5qyFxmen2FP35AmoF73CTQhna1FYbpk",
  "key5": "3Br7QgRtigBFkm3tjFMaAth4CBN3WBYY5sMztvcjhF9BePNFzqhcp4JXc7Twdiyo4xEfPZXP3GE7WLpV7ejAurjr",
  "key6": "2tiNUqWcGnEGWtdFjxndaUUGWKJGSmLBjbJ5XMNX3U3rAAC9GHRvSR6etxVuWFowHyWZgMEZqP3tJSxKRWTfo7bD",
  "key7": "3JW5vig9EPwGFE3JvfmSjPTXZn8rfSN3un2dZqJKXdG6venN9PCdH52mWKkNUs6CB3S4gwMN8CnyFiKut1vVzD2q",
  "key8": "2NYFVedGrE88PMfoSjweR9ogUqxguALarAB433ucCyYMFAEdYENf1DYyNNWwwgSM5tXeqXq4z4ayA9Y4m3RpGmTC",
  "key9": "4Z5rKbiB36B2KMT99CbQbgLUppFsRwzQtkFrLrPnKnqpcQZ2LmB3woN313zZWuoszdGo2p2JZQEzfroqYTPDvUrR",
  "key10": "3aKvQjSDKm5Sq5GYbiUKerUVsJhZCGZnerxZ7JhMAFLf65Xvq3Gx53cH6zdetpzrpJbUaCtNzT59V14V8ErCjL6u",
  "key11": "JM5ZoT9TaD7zgJSqtin2AuZDkzxTM4mgmZm97YEM73cBUTDmAML62c6FNE8GkZqgnappXr6Bb7PfMZcKVGcofbb",
  "key12": "4aGYsAB8b4dBu2tnmi4vdWGVgfBU1iet8iYMQwCACVCdD3Aw43co3ypcC3MXVmMfck2hkXd7Xbe42CCz5iojxxsw",
  "key13": "4j65d2DMDsLfR6iTpS8yfwHgfYm9YHYMBGaJhSAYsGbKMcebbazC8JXrxJawbPXkREMKmqDKsNWKGF9R4eSGccea",
  "key14": "4LwDZqo7o6VYz6UsPZmdwMW2r5DeWvrKookqeckaHBME7vqXfyc812fS8MqtHrMrJebaSL2NjCF9ZhKQSjkY2EYr",
  "key15": "3EumiBcu7dzarQzLhC5hWquhHMQUQYn3gfAQSjR9RAFXvRGkEQJHEXKufKyT1y5HULR5phVDCBnTxXGYiPZMU3AZ",
  "key16": "2fyYCot7x4ZmB3ncsTiBpZ98DJPmMiHg2zop68M63R5LUp9GPuhseNQQngftiHev2w8QXqXHNcsNF8eJzNGk6NU3",
  "key17": "5tfviac1LAtYguwpJayR8ijUHFpMMGBHJDQt2Vgg6aHSnwrVTT9SUC3uxBdxNQeYcM7rs7F76SYFJo1HbB74kGPY",
  "key18": "2qEoKixQGASLbKCDHCzWtK95m9RpsoKE8c5ZVNdSRv6EzJgePvbMr9FzPmXbaodad6Mo4HPYQ2CbwukG773PeVUd",
  "key19": "5gUD4dURfgJE6ozT82q1hgx9ywk5xn6Sfpc8nXubALMTFR7fjbf1nMfgXQEYnvy6kQB2cS5F2MJ32GBcKop7wC6o",
  "key20": "4G1QNDYG97qmhWJhkJx1HkRMpai7HHsppydBeyUDBTSYo4Bd8JiTusZLoAMjhV3Hu66SBreNeyWmwnUMoqALbmHs",
  "key21": "PjcTerjzqEpbFkQ2Xe6ixf8RKKRaqdR7DZA3bffmCfLPxnYeQa6yk5iMcvvQaseWZC5DRX2JSUy1uEzRDWaaGNN",
  "key22": "221K1rTxB5VauSmQ9tKdxkiuQB92bib8RLg2fzHZp6MQ9L5zZgiEjHpVXj7MpmZZjcio9G2tjG8WxHqbS4NtMzgh",
  "key23": "41rbpuNdfye3t6sh6KV4UijvTRQG4tR6G4hY8fLbbgcdWGUkY2LwBgDe5m1hgQSzbyNzAxqBcuz79fbUWWStbSyf",
  "key24": "2K1kvt6SMxbun49Y1vzAijrwLmgiATtZYND8KYdnJZn6d3p38kp4Y1xuzyAvw6k9EdFkGU4ShsZ4enoiKFw875Fz",
  "key25": "3LjnEo3w9iowJbJ24ngPsUo9Jmqrjgp4umLssppQncSL8wgAatskKPFFhCfcp9Y4PJN9r4UfJ92fwZKo8Qk7jhD6",
  "key26": "2G73nneudjhfJ5kwyr5Vs4Y4WfaKy5Ras9Fp5qMuWtsgZgVY8PUUDrLo9UzNwicFx1yhxQNwTec4P9oRqmbpkLX1",
  "key27": "3puBLdEP1yrWFkSybP4dQPTQmtjta3Mi4DSU6QHLaZDgSSj8RQGLw3L8sJXXNhjKuposayHFSesS2AzeDrZa2sUy",
  "key28": "4b4urAFErvutyf5M4KvLN9WAq3yumnvFPakqSmdQLFLrZqemdDVrLvRJYDyY5dk15MBDQmvNx181qmCfeSGZiSKr",
  "key29": "4rSnhfuDaLjA1HGSkZXmvPsSuaMKPnx2McA1eU5Vea6yJKVLg7zQLQN9CbEEq3aKenBaeeNQgG4kAdHf6UmYyZW3",
  "key30": "5DhLBpJ2xh7GtdnBx6ZQm5JpTcZFkqZ1MVx8RTiBFnfb8Uv7xM3T5Zjya6oeVFvSVu3WPDEC7Ryky9irq2qkfPaR",
  "key31": "2G16D9xJqBJCemrEW5DrD75XkiErd5YKQgvhzC2Y6TFzzspWRF7LNaaxR7hmt3posUCqXhEhYz3EA18cqnV2NvQL",
  "key32": "BVoAkhCsPdKhz5spMZhZUpkQBQufyjrvbiVTom966asyuQL6QfHqDkTKyig9VkhzDYCLcfwGVdpDY6fA2emwjUY",
  "key33": "5mPhEaadfWDvHa331sThnnuzz8VS8JYS4Mrezt8yS5BkHWvYbzDFxWaeGhzMfc1LRboKCt67RQc7NThkWsBaVkeJ",
  "key34": "wjotAnm1rCVqTdtCB151xyRRoQSCbWcXqBcGEhRNZP22X7boCgsv94RXMM4AH7qHHQc8kYtB9zRmMtUsY7qqsCn",
  "key35": "24dHyB98bjs5KRwGYfyRQu5ofgzkc5XQTcEeBm7CtzXhvf1cqWR72BpcCCzALjwHVVvHEM5x7to8NrDMMMgWDcVu",
  "key36": "T7gGmKqV7ef6oDRLTWwy6VvwFoofi2wKaaPjcic7s6TRGVhodb5oYBjMinEY16kahxWFJzJbeGV7atrUGemNwPT",
  "key37": "3irzRy86cSbi17hPQUbeNs3qp1vajtWqy9zeKYDJQ3QZ3gewXFpoSBypbjuv61FB5aXg9YSwHR5uSCEk1EcggT1V"
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
