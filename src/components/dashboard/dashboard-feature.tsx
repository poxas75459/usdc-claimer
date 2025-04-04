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
    "Mjk7uy7xpXDoPY5qL3EgShV2qaLsRcWLpfVzDegMjRUGFZmHbYJ2VLrg6dM6RHgTBNrEYwRVtHieey8BxDx1eUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mQQYo6pQWXm9haMJBFhn28LKnJFxFW27x8yt9GDSzmB9HgWTSqp1tw17qiqx3dbpVLdBxMRDdjMNU2tmjCKKJHr",
  "key1": "qYuR66MX69j9MYEKQkzWrhQ2TzzGKvRELhiyjKAwj5dNsxj8VnanJFRkwK87zrRsLpZj2vRqGSduWcUv3c2ycb6",
  "key2": "PXgk1zQPyPcu66UmWTUzzp9AWduNYf8hx7bJcDgNpGwyQeWzSJjD81vsxeY4DHLveAMVEtnqNQDdzVfVCBTA4KS",
  "key3": "ToPyD4D7aEw8xgWt4GgXZcU2C1wKCcjBm3xBcZyhJNC1fUdoq7ADHsrWe1p2ZBnfgyNfWX7sL5QmqTopKDsdpZ4",
  "key4": "664E4ENicAc8njtG1aet1oQq3wPNcimx4zMPeN4VSzUEJuA9PrVtLAUp2p9hS1FWGnu6i4VNHtCxSVcPUEuDfGoK",
  "key5": "4oHDeCLsuF3KfUB4DoHmvK67osz8882tM6CqJBSdjzNXnFgu8Ps7nqZeZPrjPx6mPptU7tPttBMeTm4CgmVMHq3T",
  "key6": "3PjhkSK81My79uL7ztbuTBBPdoavPREei9EQQSpHWeSRzyvG9QyGpk7K8TLYk54BwwmE58LNv7ihaYMx9vbxK1M4",
  "key7": "5PxQNhNUwUsu1Wby78c4jMXNTJNzDh2hLL4UBgvggJ5Z15wcP8bStR3i7x5aTiNunX13LrVGMJpfrT2sTTdFxXae",
  "key8": "4H1UxRF7TLnqBbLArTDkGshyYJHey2xPRzCh3cfTfbTgodc4ivd8oBLk1Q8WPFi8ECqLtEhZE7PbhjBsPbdAyrUn",
  "key9": "5MdDqYHiLEzn7GjmLv8DXc64RgXUbzT9w8r9vgty7UFQr8pKhwKagmgaqWnkGZ2qaM5NWig2sbqr6GH7U3dFgfjH",
  "key10": "3QNqbtfiSQn6bhv9aNw5tRce67SN7HmeGJAwv9y7WZcC7SYbktZj9h2MuLBVoZEW3TZZQUQQygNANfKnYeqnrUF9",
  "key11": "53xLUhtmyboRT8zPYf3q63NV3nFWEaXFWxQ34C7Kg4pEQpQRkUBThT28YD7P6nfJ4BLB16kdWVjr2cJvsWXZUS4m",
  "key12": "hzfBwcREvGM6cvwrokPF6GXZdr6DxkyCDYdAX2wEXigFtZeUfG2hHC4mWZiNGe5SRWKqgSW2yPFu9Urcet8Wicg",
  "key13": "5oSnb1HgZ74Npdv9JCooXb195dHjp7cf42ouEkBUBZ3jjq4i41PrCbwevezKYjRcp3DuJQeoyxHm96wXvBBKWiXC",
  "key14": "5Wt64kN7ofD4gTVkvvJzV3DnaD2ETybJiqqiRE9FSezFTPweHzHfcXXwHLqGge6YwBpWYiJLH1XK63f37m52L1wp",
  "key15": "4bjAvdGZs3g4r25G444xgNcw6Tj7tJRDXbN9ed6XhKQLthBsnRwUsAQgYPrqhAXwmLDCPkMa3cG8FF33JMNZ38Mr",
  "key16": "38jHu81KnNM2o2N27RxWm72Z7CWqyXEyQ21hofmN5PRe8zYtSrbEH8k1o6Zpt4VECVJYABqkrd6pWiWSLSdwkQ4K",
  "key17": "28mW8huruinbz2HrsGRV3SEDHmCAMGWdUQttaHboRhEGtWT3kP4LZ9BJerQ6k4LReiY8SKfEM7pciddhY7PJW7uF",
  "key18": "54rYuH5XCeRN844BY1fv739SThPxYDL5f3Gec4jnggmYh6JiUVq8hm4WNC3PZDHUYNVp21FAJwuyGAwVjojLS2K6",
  "key19": "nHYc9kd4qiuPcwqNobdmF1HZ4WVhqi8Ltz8UPj6PFYZFjvUqJ8BgapnX6TQo8Z285D1AgbHbCCU3H2L6yskEcbv",
  "key20": "5SdS7mpHBX5qbvPrju1FVQ1kQMFkJwrBfJp3s5u53zysWfd9EARBucgvbN3QaE666GHcWnfGjhNGs4t2CR4De52w",
  "key21": "5akZVG5ztPuVCXTrgxGeQi4y23m9sSbjbqzX5eg2Wp3LNuBkePUTZtRFeUavbx2eEtB3WR1FiBdxPi3dMQdE4HQk",
  "key22": "EBdy7ajXitYEJ2Ec3gfch4H5j7amSUThR6bH8iCrmZtYz15XuvGEgMTFzjZgMa18ehXK65TKJXECEm3E5KSfsR5",
  "key23": "532U9kYqBVh6ymrMARbSvJXndqodtPu6FeYyZdMwmEPqttmkcPeQxmrf7wrhq8pqPELSEHGFGQLbZPWANo2G17D6",
  "key24": "2payHLQ3XWuYdaYZtVPPYYjm7BY5x2nZLkiY8eB3cyWugVhRiPN4LbqTq3SefZYZ7y7x2oMp5sEVy4zLm1x6TjXu",
  "key25": "2HJux2LLXKrVTJzGks8fnbhktiGNfeUMFGyThPoc81yCU9pd9cPYK5LDe9zVE7ZS64dPP8W39ZRyj3tGxzcEucaF",
  "key26": "41UxaScLjERX2j8B9tJC4bwQJtU1CuJbhXotPTTj49Y5J6NUYToWAJYNuCb8ixmyDjumKqVzXtvUcU6K5atzdfVH",
  "key27": "4yiocFWTBc3CQAstsBt7CNcUNVW7QXjM9tH6P3f2Uaf2CFoRusYEWDdvxoFXuYwbwTgZDmfdcpmwUs15H2SHUqrU",
  "key28": "3KgrJkukk4CiLaEekeF1m3jnWSV7UByUBTqRfryRgyXcNNG9Tne7yU6ak18dvKYn8fGh9Y4LGhp6GD5ZWkp4drvz",
  "key29": "2TrteXVw6wygVtBntUSVVS6UsfgbgqCMV3uXAdxKuUHtS12tmCELM62eoPqDt9MmvNayLKSbkyN2aiqwYrxAL3gC",
  "key30": "i7XESP4FEkggqb1rYtCagg5m9WiYmbRf2C1PBaFBQyYLTpNSdKYbTcHi5BCPvY4fXfaUnAvQGvro8t2CrAxFLmu",
  "key31": "3Am5jW8KUZiMccj6baacFPeKF99k7MKsoMzqkqoXmiL4j6p2VQf23ERq6XRY8jwwQZF5Dpg3cLroq5712mA9bQQD",
  "key32": "2AfbcQ9c9no1bLLGhFYJekeuubos8i9JVSJ4UWaPtiHvR2uebzvVhKTE2RBdgnqDuaxPPQjw3xN1huxaDKxZ4iWA",
  "key33": "MvJCvDCoZSkpwp76XaTAsszBSWUxhsLdwF3uq3ECbJQPcaQGu9tgda5krv1aQ7GoNkwDx7Rn5F78vw7hCescQLh",
  "key34": "4skZT4KprTmz4LnUgKSv6VqVsw9RnQZSQeDJWoCx3vGwWQxAfx5Npd6MZLP1vMJWcTV36TkYNTEHDjJ8osAPiizZ",
  "key35": "498Fvc6VXxPFe9B1wV1LjrZySSwJeTEjaySiWkd57TvoijVRYT6g6Kzvz5NPV2mbtxAj2dJt96mUynbpJotZW7iD",
  "key36": "3ESxJf9KPsNXCvM6q6J9khm1dtMa7v28e4A9qsjjhY8bfhQFj5bFbKj8in1BpSSRJ5xU2rSy6yNA4MvPwSEt9BSy"
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
