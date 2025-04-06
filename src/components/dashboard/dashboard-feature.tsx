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
    "GrkeY9bRHntKWHA7Uc25dN6LWqpn89USPcqAvZsnpZvmdMBLf5C5mJbo4CDgsJRd4ocGNu8JkzTGqpmemsEgcf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EgdW6WbZebJ1FweuzNy8UtZRhePbkV9qLfaYJ33EFFJwPQgJAEQMK9uQcaR55Aj8LvPP6se3nzCwkUhV9xtMWCQ",
  "key1": "2esyf86bCvQ4fTMx4b2dmhqzEwJi41eqYc2phu8X7MX2xZkgPiryJjnQNWmXsygfZoWTXhu66MatNZXLNQkpcoCj",
  "key2": "5tKT6LapWiQabnD1T4gTnfAhuQUkgfbj78UZbzkstS4WUXwDEscXMooYV2WYANwszdPqkoEJSMsqiUNoMTPzauhy",
  "key3": "5t1vDxZSRZFVqrtRLJ5nDesHTda9ozrBZqJMKFWuLLuY7wguU8VWPRMGEekC7wj7T8ei1wUgeTjMoukb5cy3kUve",
  "key4": "2Jm5bt8brfQzH143W19HTfn2DJcSKGmruG3AEjNqrkykt51zQ7451mqsUJcK8WYprx2D7DPoi7V5JwLozZe5pzQD",
  "key5": "K9yW9DZjJJhyN5UUcCZ3YZPnP7VMaiYNZGxFgLudyKzoVnA1ctDqE88VhRqpwouLT6z7D4q79dTfDDLpJ5ZDtwP",
  "key6": "58TSADHGQEaV3jFHaGtcLpQ7Hx3Rdhp5ggSp1vXW4Punf5RzfoVjA4JKJPcS6mAkgRRbwH17KtgLML1W1NLGFbzC",
  "key7": "x4Ypm7sRRdEzhZJMNj4B4cuUB8knxHpKzuKcBpL1asM5SWoJpK7LDo9bwurZVhbZdt4YfKL1gYqUitJ9HMJwFLj",
  "key8": "43RvU7TvtBbgBWQsg1ECt8QsmjDPXzgQeGLXvDVFHWDp9MLzQq9KC9itUTgSZJTVyvCUAKNfqr1y5CShtCVaYafn",
  "key9": "3C2ioZqL81hgQzC4SWVBP8ak5W4nvB34bMedtLBvfJVRRWFv93k1irL2oroRXCGifs7JVJrcbXhaUDdY2yLJffo2",
  "key10": "r8hVGYJb4e5uMuN3Fsx4865CKHjj1nRQWjvRFyYWmJuaHFyU6TK1CUTuC4ppxZkdoYuJmzC369S1p5nBZqhmmq1",
  "key11": "438hDFf3FchLwLz9YXt1VfGLwKumSZq6QKPPCkxHnaF6VLJvxHw6dPGkNcaVeEQNUNaoTe7DWdKyBPdecCDr2E8X",
  "key12": "RLRnY4CMBgF39s7e88TvoFoiDZYFmZLbfia4yUxWPzqPnStqrSsdhMYwsYG3g3XVS4b1cUzywqZwoRXYKUCYr4F",
  "key13": "2ac1KmStaKBpiL4gfHP1wZgnsw1ir6Yhur6XVx4wbpAvhHXZrZgvWumveauadUahxqJW465kusSvPJoBfAGT893m",
  "key14": "2VCC7NZ1RkM5m5Hxo38JhiK7WLLcxvJwLRpcqRNTVJeRDdsZ6BG8n8seBQWb8hG8PRe41L7cWP12GYwL4JxKXWKf",
  "key15": "4oELoab9G9DgCwMajTPSvQPCtSLdtvouKMSb3mi7gPxNU9ydnfpBJQxkuA8Uno786b16VpR4gWWBJ8qp4GHomrub",
  "key16": "3W7wb7izcQVa9XwVjPUy74zxJ4A74jcRreKUnj3BkHFQczU8Dijb9LzDVcKYWfb4oVR34CmjU7UMHPz3kVHtjG3X",
  "key17": "2XWtKv3Tv88cUJm7GuEtJozgieFhDeHJMKqTvHVattcMsBhbfjRdUVzqxB6QiMjhfJ4bykQaTmcoW9Mv9qQzw7eC",
  "key18": "5z5n5XMKasXVVa9HV41xPVJX7RvCAgC6BaZNU5Np5rMZLhNNB7p8NNTFijGx5EpmCrUfhDAC9rgcz4dQ7PG5ss7T",
  "key19": "3ExrNUJ7vcTD57gU6VtGCqo7Guo73PkGmFW1FTGU1NxStGyzuiuHvWR6cCEitdqobxQzAVW1EYYC4RczSbikqpz2",
  "key20": "EE6itFu4DmKDVdgbnfkvz5KUPsJStXAnExd3HCiQsug6iZV2V2P5V5Z3VXPVQj522LFHhThpyL5iviZs3SH2E77",
  "key21": "n39ngAFK97DRwFo8x28v73Adju56EkRKbepLDQ9sNWjVR3w5b78AFGFGvKYDHkNaaycHfNKRAoxKQAn58pRpYYe",
  "key22": "uRSL9kmWKL27sq3Fj8gGoH9VuxXpmVHJVfDKzSqgJDXtUUXWoNhizUWd8hwGqauZyLaxHrrvEf6icAadXyh14Eh",
  "key23": "5GubLhJz9nALiNu5F4tEXu7W1iFNa6RHR4YPgXmfesM5UZ2Dt5UsWpcmUeNL1ndj9SgsC8E12sKnEjti1g4EHmrU",
  "key24": "5bqCooudZdkRVK8dz84g4iH6rtuhVCHJJyobmNLxcvZ27frupBc1fDEFZEeyV5KUBYiUcC5hhHkPbzFeFrKzmiFh",
  "key25": "4YLEyM99TCapiBWzdDNeRoNvhSKA5X6kqpCrLch8m28DwtdAHPnPKi7U5VmdaV5kA9MMSvRTb83KixwNuGeFZqT7",
  "key26": "2SsE4AsH1AhPiY453sP4zWBU1h9MuhZ9RGBw9SfxHb2uTrEfmnzJiXsPh4yuT6KVxv2QxGPwBUpHvLBb1p9CpYBC",
  "key27": "5DY7ZtQjYkm1pTqwdSasKA8FPMnpZrVYdQtzwA8SygSWGjgdar6jJEZ18npW9oPY1jw2t7b2yHqJ6GCU4ucyy3x",
  "key28": "2GchsU8EvMjQbmuuC7djttUkSiMtxseHSNucx18mey7xbAfAemMJ2ne9krW9jyZoHTLDG4Ey4omWKfYh1RNxeLxY",
  "key29": "4B3tu5P8ZjWVawXBf4VQqh3d97xdDMXthyAvD3CXfbn1BLxz1CZNNb362QFULQmDm4tpbtjH9JyNcEUsgnvkgFPo",
  "key30": "5ys7crJpS3epUU3hEThkstAYhWoXT5uimTAuA1aDVrL3tdNGxqubZGMbwn2B5G7V7JbWsFgiS5PHV3t37FE75WSA",
  "key31": "4C4r87gmoigPGHVn52gyuZqB4dvXTNAa16GhQ5wyx3rFcUEm32jZ8YTdhrtD2fyNNaBp3k5CZoTgkUEUoK2ukRU9",
  "key32": "AT9C3xpTETVwREX7AsCTaddmhSYeLJJgWHp4HYyaS74LVzgEY4tgPGvjzxkw5zTaicrsEfuHNBZwiiwcQT9Ssix",
  "key33": "3D9ns7fWiweENsDKkiEkqeTthrJdEFSBcgbZdVfPaw3bCoLQXNxuxQGAGLyAFSQioS12HKeU3eLyvWUXThsy37os",
  "key34": "5Jr6EybW3hUTU3o7p2e4wECsZ3VZZeo1wDoFuHFbrLGBzeG24QKgT2bJE9NLoL8Mim2nwHFj36UtUatgaekcKu8S",
  "key35": "55T7C7WvmsHjjfaCbAkQcha6vzQpuAV76AjsPKdfYqYCWbWj264kqfgmKwJPvgdgvR8VRbry5TuLYyQeaxgEHkJL",
  "key36": "SX3EBjGSUZXrt3fq52X3vkG5XmxLyFSDTWeQR5zsP5QNMnmh1ruN2DkGdDoPSZxQLonczWEj48oZ14w1bH1UbfN",
  "key37": "3hmoWATkYL2MXDQ85wjkuawMtbE9bA9sVFpe2zBdXqkE3wd8DtyGEfL5pLKs1annsTXNerS1nKCajEgMY3hM4b5F",
  "key38": "3sFDa6TZ9SbXh2xV6v7eJkcrhgEgPqyYZXeT6wZ2XefE1BYrx4toXKvaaDWnJKaTNtBKR3qguko1zF6FNXhHs1Zx",
  "key39": "ePiHAK6mgwjq3oDWmddQZVWSRDeRya9Yq2NFRrne8RFG6iqTkBrJBXmqDATdwhnL1YbP8hjjdfcRg57VqpJAcd1",
  "key40": "22b3HoD5YshyAqpzFmaPRW674CYuZNWxEiZvLnWHa2reqQa3hPUvbL6KpfdvX1qDxbNqbbi2RAEWpPSr4YXtLmmC",
  "key41": "55UnZb4Vz9JG93pbCyvjJADYUPnypZoktpLbv3YxNkVEfjoBFqB5R2HgbEaXsCrE491Y4c88HKh5SvD71yuXAboK",
  "key42": "UGtmKHWMmFXC9r3up5wUVZJLocvkrncvhU28uxC1nSwaLMvC2kdxPJXdUG8x3z19rLD2yXfvKuz4QHStMQFtZrF"
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
