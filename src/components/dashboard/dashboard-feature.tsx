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
    "EYFqk882fgcTK2k4rTNndtgLoERY2j5o88jXC2iTGXjMxhWzCtHGT26k1tjyghN15ShU5TJ7xBz8gFxQ9W7K8AC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oSvKatXgMPfGCXHR7FtmpK1qef3YaVb5XNFVbLfRD1dercBRHYTwFy3DaTm7pGGuHoJU5SC7jJ8bxH6CN9jfbsR",
  "key1": "5Rr5PRdMusVEQQKQjcW6r8UJPicaueRu1nxc7F5fbZegHkPMcFK72mWvVtfTzAbXjrVfw4tenWoiXc1rvCDDpGM",
  "key2": "phghimmF8WuqX6wwvQr7ADzzaYUPcUvJtF5VKp6HwKfjdfgBZVFLPNHPH8a8rLwQnPUJXcpRvHRD8Vrhj1J3ZYD",
  "key3": "2TanyMMwUGs3ECVF5pm9qQwbePbLY1YH6mQbcDpe16SnqzkTM8MuRxHoSwUyyXcZA5JXtd7CVBafpvBed3R6gBcT",
  "key4": "4rBy8srmmzY2mjVmVetRvAAVphbxrBohxXychGgjjCKcmog8vY8iL6donVzPwgkavBWgbhjXUs5nAQaJMQU2Q3RU",
  "key5": "JQiwNEs9GVVLGwBBdMiUR5QjZJ5zeyz2rpUoh5Qt9NmgDVk7bycNqJhrNdps1HU5RUtiFeS5DCDqLyXymwG2hcJ",
  "key6": "3XPdCxdgb3DK3sHZ9sBCE7hnfWCgT7ewHJeNzvQMns8GhargeXqSqBjFSn3X5vTofvbcHyzmRcPZvFkv7tK3xhCC",
  "key7": "2ykT95jsAfipZ3r4qa4D2DDNJqLVUizaazqRfmFjYmTpTGeyu1QgXnpWmErHXC8FzWwxonirgmycA4zb14vUVRJg",
  "key8": "dKXP2XuC4xxhAsfVX7zmwWqcryRoNmQ5s33WNAiwDvnCNWMYEgS9WpnJPu9yPTDYaL1B5q4GV5hVeXomLJ1NTAQ",
  "key9": "JfVgCFFR6efnn5yTG5XrBgNVHdAgnAgzPCXFYa7vvheLoiRZHHRmA5WZSSE32Foc6yTuXhrZhB7wuqYZum9FJQt",
  "key10": "44X4afzD6pZsKu3YaazkJkfTuCaDAag1Tep3SCVjmBdc544T9t2Y2s57vYbbDK1LkxZ8g8g6nMw9mZVh7jSmjYfQ",
  "key11": "2Pg15uHkZD8sehPGUftQcR9SvKuG9rq1fERmvb8LYD9uSsu5auKrWovoQi7hbQqyMsbbpaXaHdXea2Sg5Vsqkpqu",
  "key12": "42xGnt5HYabzaisazCi8cnzAt8qvmRYv5Fxrr42mHbSfJ3BFCfsa8E9GhQNmR5RkBWynW3dMaYsbMqGhWAKPq9qd",
  "key13": "4frwZYSavwwS4mAGnGzxSGScvEvjsCy5jLmq348XfcGqr2Y5RW8ouWAmfxTxEQETkdPVJUvV4h2hCW2LGH4x1dPv",
  "key14": "4BKkFU15wD8SBT3s6tkF6jVkUoE1Uj3atmniWHQ7NLPLKeJhSvsmwnAGndXfUJEczgBDidJzdyf8QgMxMxEnL8eS",
  "key15": "4GETkTBgJouPaikuEnSFwhDKtb12ECwyajyFLvv1YbU2Yd3CRWMsxKhcM8VKmRNu69PUyQoqDXqYDRQVr38xh7t6",
  "key16": "3wjnzehiJBS1fzwvcLFFrwHgwG8pGfZjELihekqeaVSGXykHDBjhuUUP55NzkUdt5VPjenZTKLUWKgswb1GJ61Mz",
  "key17": "4of7j9g9uBy1gGvvqPhxHwaDC9mUEvsf9XVoeHvu66VTiWYBJqNZfyRAJpWWBM2Tt8a3zJq4Jmn5jKngj4u6ZEAt",
  "key18": "62ZE4hESmzJ2Wi39Bc4eD7fe5KQR9Xxtk4QAK915bvdpRQay4vohfnWRvD7t2zJzfRUao7VL3X4C9JWX11f8jHeR",
  "key19": "24tU3TTD9N4U9wV21qFD1XSJUK9YirSTHfp15SBnTWdpoi27oCRHc47oWAmvGR8abn8qecEHJV6LgGjPPnRCqLz7",
  "key20": "sS3Nyos4w552zjP4u37GrDTaa1L4qBpiwqxGYuckLAibXYNkUTjB9B3b5dag7aWXdybaYUv1wybaRYhmJq2ok1X",
  "key21": "2tGTe1WP4DWu63s7qHHEmH6xvuoqji4J8uMjmqGWjBjiM4agVThLC4syBey7wfvbsWVMqvKDaNDLjF6CGqBEZQzq",
  "key22": "4x29R17vUTpNQcQmc4opPFLTUKyiG24ytnn4UXCP4to2E2dSSfELdGZ8LtRHiXuXYGAQjPs3dG7JePgNsxDv7yep",
  "key23": "3duMwWqdPgZ85GCNeSZANW5YRFV5Pf5FY7muKeSDZjVcSyDdjfJfWJfV7Fnic7yRscFUhr1PvB8XiFdzKv4hV3zZ",
  "key24": "56pTAd9qKZv6zX4nD5FSFYQvbzFnrYwFaC72imyUFdcrtbALP6pstfLyZtXv9XQXY6s5NMXFLSWxYoGSfmSfvMKD",
  "key25": "4jbJba9MrhpXbvL5c9SpwHomcWTFFrjvz5k37K8fPamEbisr88HvezJkzkPmHZnLXHKyLGXJEmiUowo8xuPqB7Hr",
  "key26": "4hTRN8EPY2kRj3yMNmxpu7vjuJM1bQFaNpfVQ7L9Sr7xG2qv2ttTMcw8iNFd2BKQDpxy1arj22H1k2vVmJdM3HP1",
  "key27": "3mrL1mKkYkXXuL4cmuJPEY8ymqwzJLXgW2zYTNyfWNJTrhXmq1NvuiLxuooaxyr68zw6tV1363ePYj8yREXGHbdQ",
  "key28": "wkwZfn8YNkTysSACky7hJPWgMAaQvEefbcVcZyM6xBWAxEsdpVWqcnJ7tg6SCtEWHxqYnDAGn9B4wzAf8YSDMKH",
  "key29": "PpDNoRB2h7j4EWiw6eDZBYGxFVuUVvkSVF4MeUyuGyZqT2CqVihsqfe8hcYQAMGv74SW6J5p42EcDLWa91HMLdf",
  "key30": "5fpsGciPRvK771wDAvVdQaGEGnzD3SDzK2WUFRQXd7vJnG3V4k5p4hm9fSXbNyfG4gw5eEEBevHhXPyHguKVL6Ex",
  "key31": "HSrbzFZDYMWZZQoXRwbaf1XSaM9Cr7zkXYxtMrS69EBeQRew599XQ3Ccp1bYZ4Cc1qnuU6Drvrdxu5u3byzSFm9"
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
