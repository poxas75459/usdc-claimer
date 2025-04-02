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
    "5hbdCjJEpgBFEejzuVofDaFV4SJDsvQsiPqbrN4SGSGC9jPvUv8KH3uKai1f1ntartaSdFYzpY69zb88tYAkrpfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bP2mPaEzorM7M4FgrLNgQSJtN81gD5MHwdzDw2w6mBv7KdKKEzzsfDth7xW4XsYQJfHm4gmxRn7D7P1edRsNwB4",
  "key1": "58KpapCUQ5gYmBhQgspQNBFhR3TcaFjtr7S3Zoo9dm2WBWXBGYvoi5ZAAbwnH7WZkK8PnNvoU85cjMHALu4PD41Z",
  "key2": "aiM48prAYGkgaUXZK44DJZNAC3nhWKEKYmzKpZdvtz9fR2S9f6EpusDu4KhnGEA97HD3TCNGkJ6ihKDN5E4mvLk",
  "key3": "5npCEvzbQ81faNWXvMYhjTfYgJGjPEGuwXU4XtXt5aJz8qbfoCeetaE3sV7i3nqVEJaYCwE7Zwx8716NyW96bKyM",
  "key4": "4F85R6UecsAadTjJuq7ZRSd4uC5hzZ9S1K6ckKtqgKBo9NKmpNjn8KhqxDyuBYJ7KV95aeJmjfUWXCieL78vwq8j",
  "key5": "39fmzjiWwV9gSVgKvso8aFMTLEg56wCA29TvJB9kiBPxpXjxHCxdmsHCHXbrQsk1fzAYkBRZ7ZuMNysUJxg85btZ",
  "key6": "5DuAbDzQqKaDvmzpb1z3JJEDBFpXtP8dJhzgzyYkGz7hiH9CWSScGbQ1NbYdaUKMughfoGfGX7qDXTphcyuJJnFB",
  "key7": "2h1yXWCQw3Kmy63kFVsH8u928WqjMYcTNsrp7ZCkeiWHXtyr1wCVMYdMBcE9vUkQrHYSME9f3MYjCdEAzgsFbKtz",
  "key8": "41uwbpmszBjCD1QW8cwvsMfY51a13XDTuBYPw2ZRaKTpmB8jNsEndNtQuzgxHg9i8ZkyCTVVfA1yq5Va4Lms5WcW",
  "key9": "tnnTJghL4dxLSmVYtAF8sSoLsn5TVF8AfapQi1gWiD5HHwZgpNq5DuwQbc25icCW31SPC7Tb1AVRgHgqkjnaM9Z",
  "key10": "44wMboz1dRCHiNxzhDYRpbpr8kjAeq26wNmRzKYEwWs5j9raxwXj2hyyE2cxUHsGUhtc8FBuWeDsFGW39tkuZx5E",
  "key11": "DbWYwWRwvXuCxz9YG5A1m2xEouHPA7VHX6SHrJrNWKnVStYmgwLmJQiPxvNhfa9kcwtpe5tQsNpEZ4BLN2arrAQ",
  "key12": "2yiGYrdQ8t4Mxeoqb8dPSs8veWffKN5qhg2uV5Kf1sw9i3woocUSFUNGpLatnFfRXKweTTL21MU8UzrWsrk6ZgoU",
  "key13": "5A4iFQ6Z1WQ4AQQLGKVyn4yhwLLnsgw4fALkS2mushkQbvkKBXzx86ipFFmMJDf2fVGfTfjMKhz7SWrqVQDNufoH",
  "key14": "43USGj1oScru2GjPDKSj3H2kQD2EMZ1YDs1zKX2xBQhGQ4nZHKYNw488B6CSnaDDJnoR5TpR5tRRu2enhkSG3qpi",
  "key15": "5tnX5gwNwBhtVQEc6VUDbLDHrRgrydPHDHNpjZudhX5HhHhHQEXgr943JiyWycD6CnhdqUHCkzJ1n5Aoqee7PXZw",
  "key16": "3cAfb5SGYSHSbrPvFNQZqHxqCoC8Zvav5J4qkw1x4m2ctGfhFZdqd3N7Drock1BEE1H7shv7v3wT4ubmsFVRNkzQ",
  "key17": "3xya1F1np1MT4qsuumy14j59wteXNZXxmgzNHTTnVh4LEzJizye8rqUPZa6SrVi5QEuMBzW9Gg3kbhhzE8cDQi3X",
  "key18": "664qBYxTnAuWf9qcobDrqiBKVLiMV78hPUs4WeykdwHKUome6ZVjqMWgiEDHZWgmFmqyL5HFXLkHHE4ZgpSDJ1zE",
  "key19": "26RKA9r4eTf1WRo4CQerunptLQrD78VUEiiVmXjDfKmoDXrmSXgiszgNYf3B4kJdUfRWWLBoZdPYyvRcnutnpsEn",
  "key20": "4NVC8ZtvmCK77bLKVV2qcvDCPDE88t27oH7AcWfB7jn4h7AQC6f4UrTgTaVNVjkRTtQGiC6Tt84wYZezSDVKfzYM",
  "key21": "2R55QxeG9dexffPxTBeuGiL6hbGmDsuMsdECmK5XVLC3LdMBnSReMNFB42XGMb5fJqqiGWykeYQJ4Re7KbBuATC4",
  "key22": "54ai3XK43K5ybLT1fo8sRsRE7LpPyFS9m33sjuVrEtnLiPgYr5BuBaouRbRiKLCgXetU3h7N7kNYzcVcHUnhPQ9S",
  "key23": "2FtDox2HsapLoLxJrgxbmNkaQurbTm2eEK5UJH64MBbX6f1nQ7M96LhXR6o3WFwcdXGD1xsebCSMGnvzju73KDqP",
  "key24": "35CYmj2JZAjVCwcKQ95y64r32Tt7g9P55JWqNewzhhv9QwrhPqZL5ioWjZDCkUbpazhhY185zTEqumrJkDfSf2g5",
  "key25": "64GhfyLq8mYbxBoHrtvFyBXZBqS7shCZhjZd6foRkor9P4P7H5f5sGNTrhnMESYBQcwahGjCkULZF4X2DRrJas9Q",
  "key26": "3Dxr1i4NSswb1ESdqzyyd33Jh44A6K6684di2ZMSZzFAkJ75JnunpKWTmdh6fCBFTP2XXZ2w8N15e5jNLvKxsUCA",
  "key27": "3dB3XvcRujoehm6uNVtCYNL1xgGKiCo1xVJ2kAHpWvgoQhbpXcZbqyVtyXwfDBRNyrV5jZtcw7NDDs1VCHLfr6zP",
  "key28": "2SjkneW8AZiD7HTHmbCQFjW3xZxvGfhUsj7fSnan2W1nrGyM2NMQ9n2NqqSo4T1Uf8XMYs3Czn3PyLSjtHP6Yj5x",
  "key29": "StYm4PvVvJY7bKEiGTHTBrAGXL7yg3CiLNvTCWp7UbXPXR4prsmF5GmSLTeHuq7QRN6BaYhPZBUD5iEzqzY41Hx",
  "key30": "3sfpxd2CTsUdSUqXhRLpaFUNiPocBGrmgqSNuu5EP6z29Q5kRzWYULK4hNxBhZxHypiSYAVZKPADKMNrfZR3zw3X",
  "key31": "ycL8XCdTyMV997ShAe72dGqiaQFhcyFMAPzQhTsmYFec8tcpXf4snsGuPmmxPmYowZRKe9csSfHhDusVkELZKap",
  "key32": "4peACtPCre55Gs54Bzu9F1bEC38vHb3xj9Bqu6vean9VKyBv2o86bVTK113hPtofPQXuiqUGPjUMPuSisah3JYsB",
  "key33": "2QqdLpL6stbFBb18kNJokeBrVhV4rtzSXMkLbof9eWvmxbMg5M17pdKwn49XmafGUt1mzcAs3ZKgwXDsbBGm2pK4",
  "key34": "5EyoebmTavqGchvWrELYmXcn3CzNoo4yDGR6uS6Zac1ZNKhhEGuCiKEZn7h9LrVV1RamKzeiKqBbmpXmU8f32XhS",
  "key35": "5vAqMJom6bUuepZJscMPxJsCCND8CtYfbjfBqatEMJu9TnJjowvkwH4D6m89DBQC7DTdXPxGV1TqjfL51hBWHzD4",
  "key36": "5hRJcFH8KJEa2bEkEAR8Mram9LsZBWdQ358mMRv1MWQYQkYdEoc34E6zYHYF8jBXhea5UQTfD5VvtMg9bEvrABEB"
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
