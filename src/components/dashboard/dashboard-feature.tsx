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
    "5CKcCtMTqDfSE9Cx3BxsdWmpjQPLqFynLecimAnmrznao5xYbLams3GEZ9ybUtPraMLGRWHW1TRfkh2gaJ5cHmsu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oGQuN4YE7E595KyYXk5bCKasJ6yC5VppsTkdPks4ZC7GkBiD2sbBR4NRNzEZZ171h8BWCjcarM9wgRf6XXRQCcU",
  "key1": "852J1XriGscnqfGjMNQKRVfywep3EofSRxQ3P8KbDjCU6bAd6szF3DYroQSWrtp69P5DnNktG9eeKGozns4SwLN",
  "key2": "21W8dg9XWExons3xe4wNzbXgkSJKZCbgsZs8B4XxNBk25CgWDRsgb9ManhFdCyJYRi5JuMgm4kpUwE8NvPQbAsoe",
  "key3": "4v9ungqhokpW4btao8Cp2W2qbqWFHJ2Z5kKPD9qpNPLrpUXd7x1vNNbqGMZDW4gXyCtQmK8A7mEQCBXwJMEAbvsd",
  "key4": "4jPMqeU3ZxaKUQUVT7FeyFUcBhFtrgWraFNkC6m8AcefMAeHkvARN9kzALic9bE1BtxsQTH6DPNAj6BFHhnEWjsM",
  "key5": "MjdcNLffkYemrAaiSm5PgAghb68r9M54pjKajNKWYaXeaWFMFG651C6YRf2Gt9PkSGy4SYnr792g1WnKbrP6Qef",
  "key6": "3m3c84Kux4eg6xKn7oSvGYth44jTiAax1eqanYajQiGUDqcTq52ZMP7zK8xvGSiEsB576GBNdb7m6jupWvyBK2vN",
  "key7": "56YPNnWe2BnjsG9SaNce5E92D7DmFULYQ6LmWZoknHKFj78QzTFXhBi43zkGqpkD9UChmNwEvfYtmPnCkXavVgTo",
  "key8": "34Bec1CtwaTbiS9fp7ErKBkN4xRjH8g1gfMeVuuy2WxDbXApa6qKQZit5Vdn1BTuZHYDhKpfUeo2Xttr619hHogN",
  "key9": "3JroQ1gXzYQs6KmsRcV2ExA6D6L1AiXfZTMwCkALGqDadHzEnfCpJF1h5NM4thjbBErKWKaqeizDuccixUsThB8H",
  "key10": "DQrrvadeMdqEVyKtraGxB4ApuTM76wCicuRmkyeNGXGjv1hAFQvPtHgHT14QRv9CCikjEcVmL3HnTp1dJJJj6Gb",
  "key11": "2Dx6bKkPDQythicmnWZykiKjSpgW7ZEKxMtwMjfwTjCu2VEtWkTrd5KuKRmpSwG1ebGkfgNQ8A8VFbhHdSHPBcUx",
  "key12": "21tbCHfhwS1VJfAXLTC3t735N6pYFChaJBJSF2r7TKyftW4n7M9FGC3sC8omJve1jkqr7oL8BJocREJdzBzngQSR",
  "key13": "4jDa9EYLtXiRuVB2v3ydTaoY3To9TDS3FGw4Q59t59BQeLLz44fbBneAGzVGtf3EXUgRQiNC2vU8Ay1jzJX3Ptp2",
  "key14": "42Rm8EGBiJ884FGp9GNWaSaFmZeAABoEDDt89QM26LViEkUjgt8RT1864qAVdWSb9tWE3iytVt7MobRs9ZNpnCDx",
  "key15": "3NFyNsUJm5KsThZrVMxPJfoSU6s6wCGGvCZKS6msDb6NfU8ZZHxWRT3E5mBZfuGuAz6XTRFz2E4ZNnEbTzU5tNbP",
  "key16": "39GcidjWEAv5vz4M2gXDtXZv4s4a3pEnkFozV1n9HApsB6WkC936DNFnEjQd8LaFfndukv1LFDwydgo9wgs6JjAz",
  "key17": "4AmeYit5VN1zFwcEjoBN9B1cRNKNCcBNMjPK7B1m2CScaKg1be5LZyw65CdFGePh26XSHzBDSSRFjZuRqfk2rMrS",
  "key18": "4V73iMYGgzaDEaP27iySX45hUVo6dGjeoGTWAZhhgbe6B45Bq2gisR3hHtdZQc9CAKhtsKvoxPYrc9zkXRHPP8Zh",
  "key19": "431hDH1xDNbJ6tVxbHYMQRvabmJ49NpUKh8G3WCSq4gRSWk9DaYR4Gkbd5fNvWyrFLTgw8ggNCXXVZBRfcS98czW",
  "key20": "4Mrv4wVb8XVazkgJarCgGavGifKbjGdUXmVAkbuyHTLUMee9Hk6bTJ1ezSCqAfMcnPHoyYyfWyFZpFQJaWmP9swz",
  "key21": "5DeZ1Za8Gm76ooYy6DKcPVevRo2DnPKidExni8nB1Q2WGaBzPGWNERkgKjTmgHUy31rkRAJSvTyEXnfkkQZszxNa",
  "key22": "q2awr25keoNwirhTUsYQK535UdncyrHtNUr7kfe8yJhABxi5cDBHgJauK1isiCSxUmEGcryPpCd3hYLGyHxRnVo",
  "key23": "5PR6n8wXqDzkbRtY61oA5jsCdrWMsV9rhAx9h81dExHkGWZeEcaXgzn8GK4LyBBJWoki4QzC1eumfN1bv8VizvQr",
  "key24": "5prDP1t5NseYikTm3cAwMBPvynDooNXiABVLb9i49cwzTG7s7r4K9PbW8n9P2RbJejcUmiyUF9otMtwnBeupoDue",
  "key25": "2Wxcx5dmiakepZrVNgXiALEGSyShq53fZwfit7rLZ84scRji3bLGLsg1vzP7ECqBrgcvzjzMM87LpvpTA8VwoXQs",
  "key26": "4JGc21DtWqJABqrNqe9xh79cyzNAzPZ1dxEU2TzaRVEYr3b3so7Rhf1Qtp6wVnVAWr1py1TL3cj6JhR5x2qc1oAN",
  "key27": "5hVa1biDprDVWwb9oCLSt7aLeGJknyMreVmk9vZ8nvGPiEcjjwVhuVWqgi2U2RCXgisEtW6LLhxeXKJG16FfNeNV",
  "key28": "oCJ2KBaxKqmKBz7hNxz8XFVdyaRijF1UuhPF43rsvxsHoRBzDBBq8uUo2NZJs1wNk4fJLMFcjVGXDjSa5ZDvTwC",
  "key29": "2AqCreC5RvkMAHf6DPJbNZZdiDxPZVKG9hqCrvnF9eMe6KjLudwPSpisShJPM1KqxeqFPessNc9NYJyELmmbttev",
  "key30": "5w1eLXHgudG9LCe6VvRPB7mumiLD9ykjbds1WgcgkxYGFpKTzcsVQgmWRJLTpDVJWm71iFaw3hBMhiPafEwGYrrv",
  "key31": "iKiU15vFY6YKiCQ92xidDhPxVKfEFd5kJqqfpAmoYDJfK9bTqiCBmZMt7FHFHmGDTzKGTjHWXRy2otkeijYe4ih",
  "key32": "5sU4ZKSTmBD4fQizwLGAQnKQpx5ZNDmN6adhA8KiqvLxpH2RuthJtfYwwRWsSsxEC1x8BhGJ58iMiwx9B6Mcg3jN",
  "key33": "4Gjcr1zoT2YyFEadxqzXQR5ZdWmVX3LQbAKW4oxZM5YsLHn5Ubhw4B5LEfFDJ7ba9CcHwADMJp5QzzsgMXkp4WZ2",
  "key34": "m8Rg8CRCrzzsSKGi3jBcGTfCttYufJoU1b9vD5DuC7fDZtvhGd3kJxX7kUjmRRhy7eGJ6jkauAG3iSF4HYqpXXC",
  "key35": "5ZnKbpRDDFGf7CsMwF51oNPEhZo2gFavTtCiLdirgoAcEjeseQ4D7biYG4apZTy2jTDntrdzfJFkUbjs9AnQF4sG",
  "key36": "EQzEWUKQkUBXa4i8XshyrMT3zxQjjUe6EMPT6kWZ1gMoraZqGDunAE1hDtKa9nd2dmsG2B3nRhXDk1UQiH5KN9U",
  "key37": "rWKawve4SQFjmprTmztDtvGaPVGdHoDf7Wgbv6nVSHfPkDvMVj95FCXbVsHcv9uc4fUNNtSv8DitRVh9SZM5WEt",
  "key38": "45PifL2d8cFpNPh43Z2XJxJXaQiXTSe3qHkUrNnZ7BX3ZMk1GgPBmdFjDPwwmG9LcSeNauCMumCFsunENPTNsve3",
  "key39": "48mVpBfNtAFJGaacASaDMvBpJRLrMMbUemnE9ZvMnramf6YkPzWaL8UqFNZcRCEx3NKNuDhTtmdV5rpGc4aABhsk",
  "key40": "3vbsGkDv47AiZ76frTJeLyLz1wiEmpxmF3G4Y7npQL29P2UUNVnXitKx2H2fjShqkZVPkzg5pE8i9RokA5k4x7SK",
  "key41": "3jouwrG1KtxvJsAiQZDbFCQxu9mhy6XX59dL1atQch7vV34sbc5QFwc5sY4WbubP67NgHEYYVPGQGHsQNAzeqScE",
  "key42": "5ZF7snVYs5pofA5obxpxRSxQfQ87W1AYRb1atcNqtpu2ADff6DaHpoQAjo6bDDLwzKwe73pY5vcjnCePwrAg8Kqj",
  "key43": "3ujKAoaFLTGCTxdpYSqvGhga25xNLdDqvrBpsaAcCPYEZdZ6gp4iKhQ8k33W1KZdoEtjiKCjLN1AE1ibfd4zLqNW",
  "key44": "2r2H3aV9oTTekZPeQHfsDnjmHidJacBJm2P14118bPEUHhR5e7FU6a9MekvVtt2vV1qFe7eKvvZoWMo4Vx3SZUhN",
  "key45": "46VgkEQpYrH385GzMUavp2L8SK4fKcq2v5tRAVt2dFjcjDFmDHFjN8hM9ybAj3rfCzLEPPRXFWQfm5RzAUqZSQ6c",
  "key46": "bq7uHMmwevxb7GVRhbUvqTFBbqHQ5LhfNqqiu6g5srySh46piBHZkseWEb3CFq1KptFKm4JSWvFWUQy5bWRocxF",
  "key47": "5y8HkzaNzqQwKKjqGYerSrjxf4WPAK5gz6KyrxJSfgMDTV1WHCkDua8mmMmRsAkDyWrLJqnEbgUvzCn9sCkgd855",
  "key48": "5XtWqrS4kksLdv9jKaDLX7QoLVgvTNEa9AsYvoW9bG2bLsDxi9JHVHwr5HtGXq5HiyuNFDjBGbGrFtd9ax4o1q79",
  "key49": "2LV59imCk9S3uHfZ5Sh64v6YYbzW1U83K9heuXcSQrgGZX4rpHrSjSMe7d1uXLVePNDZahUq79resZFfK8FfBTtf"
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
