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
    "5FBTMhk8pNA9S8T9cbQQ5p9RVMFD3p4RFaNhRTgbaUm9AjPVhRVXen7qhao7iYU4p859enUzHnqT1GEfAY7p2zK2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GXNw2Z6oM7qARgAy7fEQykpJsa64Kbe7nU8j6CJtJCZYy11uKAWRQ12KMqYbZrDySxei7MEHjwYZy4DzY7zn5TG",
  "key1": "3N2dxvnbxX81GZnFpZkxq33d7SetcokUvhfVWk5RmybgsR4KWdW5YguhYB3SzS9CY4nZHKvPY1fBuG91i6tCj6J3",
  "key2": "PKFYkx4dj4vYk6V9skRZnZRXrQwLJ4cxfqQ7G7g4UMyrY53JwXwFfFy3JABs3y2yVJrJ4sx5dPwDPDk9MXKETns",
  "key3": "5fuYwHwpyv5Nb3f6nTE9tNv1Xr17tpZb5GP2A4kXFram6e4LpQqvcPpGiwA4Sk1UJGtHsNHVNNNcX68MeqR27oRb",
  "key4": "41V8gfepWLWTURRtauanJ6wWMZMdUKNyzSm4uV6ghY9hz5zNgjvFiqAY4W8LFLTLoXsLUEaiRHMhX56d9USwpahS",
  "key5": "3Rad7Aoy8vM9BijV4uCzgxZxGYWxic6Wkf6jyd5Znxxw2vAQPcnSNmqoiyrSbA6xTQnqQ2gEJTemunCBdDqziJyE",
  "key6": "2MqRxC9nLhjQKuBQhfRdVTjEbGqBynyRUjQXgQndyLEt6uStHcN7yghNppsFpaQjSY8fyxemyuWMAbTTnfrc6CYG",
  "key7": "5q2W5LERy4rZ4HL8my9jjP8drGf8gU6UY2GkegjTskuTyt3v7srgQbRXgPFhvzQ1UPcyLjCJ4wisnDyZFt7X5bvv",
  "key8": "4F9sQQFbg1sg9EAqLx627zQykvWYSMYiGNgquzcSihXop1oE27pcAf2yzUSQeKsne5YuaVagb7VpS7Qc3Tnfs9gT",
  "key9": "2rxib2WGzQtNEnkAPfFFoY6r1AD1kqdfs6esQEPH7WnvmZjSgs9HTbvvNG1qNJS815Ba6ivgFKTuLczAtLSGK4cP",
  "key10": "5kEtr3FiZyEbdfwAGXEoXAg17zKATdRVZbVMVYDGymBKBzy9QwmwGuofPd2urhwZAGGm6NzJ6Lr96QnGC3xVux9m",
  "key11": "GMS2fFBSv5WhFpzoTGV5GPxMjhroMyEJUa9aNgib3oWoB99bBpEQPiGtuxvkyjnF5owiVHdegK4QWy8CocN3RUm",
  "key12": "5zBDbDgD94bQqW11YCVtFoT4ssXwr3AZJ7vbnjP1PDPN3Eqp7cSY8PvnFVyR5ofHo9dMa1514i6NN6cApH2k2DUF",
  "key13": "4GPJ4P7cKBN4rwufGieZXTajhUkeFqMaa1NvyRFYjTnE3E31PGyddYpPe9RjkbdNgBoAKUP5jWaWFR1biGC8N1tS",
  "key14": "2ytKvXV2CWobSkJaQjKkfy5DW4BuWq3KJXjZkg4DuKN7m3jHHPCLXReV843pFsp629oGY1Woi2PFavNEFNYtzqGV",
  "key15": "2E7msLz5jEuH5hxGRHBX2kWxrvQNYoTBLtqNfmXcmLiVG5Taot9N2PV9kM2sTb1j8TzvWEgb2X3Pv7MWwyLQCsqr",
  "key16": "3Ts67xhxdHb7nNKs9ekGzthFK3kVzAtQTFTfi6QPS3v9R5uUTEqgPP99HBXz44mTh8NRKR7LtiBwPtsUUZMz7kQp",
  "key17": "4r6U8PENUuWGcnzTdnuYydXH6fZ1Q9LcMEpijBJE6AWf1QdkwTnHdreoHW1EnyDiwxYxx4kUm7qqsuPCfgPAGBaF",
  "key18": "3vZpGe9bgud49Zd8hwjZapEvMBaSuphJ8wXSa1YBjN79d1S5HVUQT7YfTC3ykQ2h58x1UpxjSuweg2kXC8Rg2yTQ",
  "key19": "4tr2YzUQPo2twEPxAx8bHSSfd4a9hx1tBTnRWMx2Na2W3Pki5hzzag2hzTVDN5ZRerx3xoeBmSA8TqyZ713R8NxP",
  "key20": "6738hdiiMcQcLqeYNkMmWZFPfTGvcyJbZ9Je9twZ8T5FdoSzZfhJkdZgnyiC3F6VertbhLr85oyo6mZyY4ow9Fym",
  "key21": "W9Twb5CRsBFhZJqh1M6nCXP9BCSBpvLq9kdChNG47HXh3dLsYFXdfTTWdeKLfdJioMMeZL7jio5QnfQfThfDCwz",
  "key22": "5UTQcYXkAKck3WsHWjzJQzVNVa52B7q81er6A3jTVazv6L1mitoTR9owLhwtxXmJC3humth5mNq589Jz2C2aYkCd",
  "key23": "3LMA9KchwyxdbAQnXRjC96N44fhp3pgweMmA7xypKhk5dqGW3VB89vtjCVMEXoekyhURGpZTWPEXGY7a4796UZCU",
  "key24": "4LGzrYYdUhk9JQhSWNrZkZLYwdkUuB6E2RKjFpebNA6QTmW4wwtmjqxcH8oh4DBD9oaS5Qf5UwXAWHLYfUiSpz4c",
  "key25": "2F2yGLuQ1QncfZBo14jzv5ZsvqDfDnfAfJX7opV9t3AVpZefQP8zAGV6q5T45kZcrjznfuPDsJuqa6vWAPE9yEcN",
  "key26": "4YvzppdhPGN2h9zfZtEXBYwF5uKiL28StX8Nuqg5TzEAmY5iT6tiMuMrDzr5HSoY2FM3aYC2hRoRLAanndMfuymK",
  "key27": "J2a4Xi9mwkV5ZxkS6QGPY7f2LLvLEtXqqEBew43XcQqzTSaUvJKSZ3gL6BJENgfcfr3AGKqkHGhpy1VTdEFMcQi",
  "key28": "4eHtgobcFw51ACeK97xGCANJybpzTBiHnfMdkYW1oKVvPwQthvWfyprJnEZN5ScNNdFKrCK8rE3zPEdwQhG7RCFF",
  "key29": "4s5Vb2qFFfNN3jCwxJuKx2QBmtiJ5zCiMu4awhcqzEJhmfDCWYfWCzarDostWEgMJ9j9X32Et9ss88V8TFySe3xW",
  "key30": "5Fg4BFKJxKkQcHu4UFMYTUhHLiELrW47E1QGK9ExPgAKHy8U54J1oa8RmhKFbTtEvacwUBBmqSKjEvG98JHCpmuu",
  "key31": "236QZxZ7ztzktcyEzN2AywPxAUP4fR3YZoNYJXRnuQz8FAB635ZCJK42XbhdjsEioTu84JDGsjAY4qStrzXAp6Zd",
  "key32": "631K85FjBbTm7qXtpgW64DnXab484iDYf66nzuK17jjfxvJD9iqJoK4YZvov4MZ4HS5Zf8JFzyMg5m4f9cU6EvNR",
  "key33": "3TX1vQ9x4bpQkbyzf6Bk6WJYkp1L9dZcViurhVnQ6aarb2eM65TPNFcFeJknSKtnPFmEqU1dY84QyZ3RcYdo3QB6",
  "key34": "4ZpjSNss4UUvBm8kZvenjogKcgH4v75S3mwNXp3qBK2zWehw7E5hXNatYG384oun3syNSdBVH2rs7b1uPCr2Hwic"
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
