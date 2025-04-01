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
    "2hpRfM8vMkjErEMdzyVJ9aHoKgYwkeVrmuAWMcWu5k17pcFoU3zhCfiDBQ28hpsrvW3LRb3gj3rwjGyNCb2Jik9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n2jCsAihbMJaDnerZMcNRA57DYsM78ANVk6sHqgS4nwKyaweoi7ErAniGJz3XxUfdzKT23SFXWV7cwxMxLdSQnv",
  "key1": "5KFkxc8Xs7WRYnHUgTCTtNFt56Js7397WvpwvEbNMURx9NArR2dc7dtp4GRv63WeqTREdskEPePCJJxFXNNZVS9Q",
  "key2": "VXKm6Wh5G8DDHGvx5NKHkGRgwEn6cRn8Uks4Rh7GCFAFxJDePkntsE5VpjuUX4QNuqW1zZShXYAkNi5aiumLceC",
  "key3": "4NDQpepqN8g9Hr9MsLHPvHw8MqC2VK71rLA7y3DNfAMZfKnGs1sMxANb6ykq8NQDmr1uiFjXTM1rNnH2yR4hrKtx",
  "key4": "4jKPkZ2XnpgEtAkSxR4h5coL5iASpffuXj5uauM24v3rDqzauniuCiWGpjaLCPVCrArB19QeoueELWVbYNmEHCy1",
  "key5": "4WyhCyed8ZweCC1veUdQdbKe837cD7zCKDnHCCQFvk5RY3hWde66tMADEr14o6a3VWTQ3qmxNPuRq4Vhxe1R7Haa",
  "key6": "2cVJYrFQeQRFQyKxuk57W4QBaVmv1uMWFBuV2gqnfEBLhYmMPrsopRcMpaC5fbWPYeRMedo91kGCLCYTSjwYGobM",
  "key7": "21RCdqpytYwPbBgCaEUqeeut2StDJGvGkeUTGoYUu7k5ZEsg3nZG6nCmUo97sq7R3dZFXhp8aMQqXoA75evtYRHN",
  "key8": "xB75Bc45UL8i6FBsgxn1ZSHUqbaeihTzakAFkw1EWsnbFDENk4KdT7yqkLhQybkZxxjBDUKuMnANUgqCg3Xz8qt",
  "key9": "2m8cHiABQkbY2aQmxL1zKWcA94why2NBP9o45oo47dcXbB5AXPP6L8UZxxz8Hf3uVJGuoYbgnGDRcCUZj1LE8vjJ",
  "key10": "Z2m7V3owtrttFEWf6GmgPhjA5MP3RLv9FcNVJHLoZ1a8P8Z9H2wZjmi2B2UTLGaNe88tG5z2o31TmGaN8pR14Uh",
  "key11": "7axohk2DVJZstNNh5mMRC41oaQgzovE7RHN82ApBoLcjXL3EPwi8oH85xGxnSujZnqN7hRhyc31NggLQeWgBKuf",
  "key12": "iK7jcxHnBrAYrvLxL62BUL6SCogfBPGRhA7ehiAYCk3VudHqRFnYVtTp6YSpRcX3rBYw1G55BUQjDCGx8VJztnx",
  "key13": "5MAyVYcnUq9LwsKQzkHYAJYFTji1JKMahP7MwyiTAVK8RpspKRtBRP9LvVT2FF5AkiiE1W51hjE43qXydpZd2Am7",
  "key14": "67dZRwVhwaBsQSS1EZ1vJ3jTyAHSrDDHjAFMEV3dC5kSyXWSQXaQhL2x4NCnEPGysxyyDnPVzeG778rUD4wEk6Ls",
  "key15": "4VC1BmMWEDrpAybk7JD2RqY4ZJDueAVfMPbUzzYFojA4jqu38LLnpn9WTwGv5shHiRJz5S6YrJXuVu2q6xqwxQvN",
  "key16": "55nqyF4Y4jZu8DaKDwvoLQjBefuy85N1ms4zYXqFqcE6f39tuyJNTK6KTzQ9a1Xbb2SmWFt7Grop9nCFuGAFjwMx",
  "key17": "4eLYhEaQv6AH7dFX6jA6gSUD6QvmsH7jQkgCa3zeJYFUez6PPt5SVirhCsNSNAvdKN6aKH3rBimPteyqLr7fi9H8",
  "key18": "2BKaS19VNgW2Y6335mmBSSs1hKKVSVosAzxTmvGC2nf4MVQZwf2mfnk4UkTTmQ3D5eFh9o2cdPgv8nkQYJ5cAXBP",
  "key19": "coQxrAcSejZWGMPWJ6WXtY4RrUi8B9Jb3w1eSoh2EhHYkrSizGrsuhvVDG522hk4y4z2Kspc5LuHoPksiqiteCD",
  "key20": "2Tn19Wnve5YEYfibDFR6ZtQ1awX1mih6uo6czegsDUBdqmXN5GaLYC8jxPMV2oagiFcNQeRugV5zPdycbGV33tN3",
  "key21": "7pcKNjyE6VNa4uGCuHDmRQCdBygihG45QRJy6pWPsgReg8i6bNqMjRK2oC72CymemJb8mKU6VdaZyGSsj8bkvvk",
  "key22": "2XmpUELU9TaPpYR24XhzLmTCwpSfTFx311ycg5sLbi9xt7rApPZFkmffRYFb1ttyT9CEWAWJcUHvJ8n2MPMvVbxj",
  "key23": "5XjoxYUz2STcj3BW4Ns4HFMJosKwq3oeQrSvudRar9seY2HDraC4RYzryRM2dr6VMWEbeG1dNpKofSukqemYkMQN",
  "key24": "5Eo76JWdgCStYCMCLQVnBsXeDryzo4k9GqNj6LfGMEbcy4TunEVyvadcDBWTRaRLxiTuLAmoBpqVioyxJQcAqG8d",
  "key25": "5MDqWtimdQ2vNTacT9UjmafvrTgmt66QamqLAuQyZ65JJ34tivz7DNsSxkquVgCJKsQAFEeokdmoWHaSgSNYRexy",
  "key26": "4R7oQ2oRa6M7yMdD5cug9GpFqxWqc4NkMzCncn9gDiX79KmWeYN8AV8N6VAoWpuejbDyxWaqzqXM4aBoidE1mrfr",
  "key27": "5GhythzpJcwFjCkXXobbBxpgA7LCYEsNMmEdPFopryxJ84s2W6sQXZcuZyp1TNNU46qHKTtatX7YLGjkreb7rZd7",
  "key28": "5hjE5zwSP56sgYMQxauxbxPrP3J4qabPwx8kfk5NSsXdLwmtoQ9oMWGjTjvux4huuAURZUegczW93fTgQDG89Leh",
  "key29": "3bGJrvPvxnq7mNTAEgLyq1E78mwsTWhP6Riw9oboeNmxL5mhDvZFhGi1EFSUPziMgxRd6TcziAH4BVCjY768VPeL",
  "key30": "4suuZG79bk6jj2B6nQ4zpLbL12iFNWfUhBmzj971i12dfyQu7beFVybUWufAd3pacf3M7Win5ajz6biqAR7iUNVq",
  "key31": "2vB8bkmuPU1kU9RNvKvahUPyCw52YiBVEoiTwx1Uk6DaMNfC2vrYaocFJwa6JNj6gpFg564JjXqXwkvoSFDQmvTv",
  "key32": "5v6YxpMk3xjTh7CXviqPt4qFL3zH49qwSZvMPgSRGZWxE7mM5SM5vm5wtuSt6vkrXr8WSG8hrNQtUZ9Q7fFRSRy8",
  "key33": "4JuXcF5QG7h2bzsmu6rs543BubpjhT6BvnM4UnjdmBV6MSLMVwR5RuMKvZofvWvJfbUaXt1swFBLAERBiJCaMJz8"
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
