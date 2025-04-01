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
    "2Cn7gbwes8qtBK4hXa1kShGWnjUVhwZPvbYZwSMTao8uQgNwTTge7Nvsq8bZhyz3wCrow3BjiQ3ig5fMvepsSf3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63F9uMB7ptnHx1stTFc9fb1YwktyGWaCvVSuCSVMgcMKfDBfm6RsgM529DMxKtmJaJhSerRsVKhXz7q7zZ9RBcV4",
  "key1": "2M4FVV5UYTCUtazRqQ8qTh3yAbUYzEK7jc9rfj25HPLTtxh6PV3Hx96En1q2ZMnhRbXh1f2iPyB48BEiJSdePXXd",
  "key2": "4oc98bv2GBzBBgcE5BrsSdFxtwSgDhQ1VsotZJ6hgQLgNdHqKwzvg59ybiAuwyTs1y7vgppd1SoXd3G1UKBREB7W",
  "key3": "4bsoos92iEHLiA7gaXvfGj9kf8aD1E9zmUvKNZx6VPetgMTCY4ZTp5isedmvV28snNkqyeGfFuXxmeGYNo6udTZA",
  "key4": "3zJ6P9CSNdaqRoQBGXpUhtFTsu5fE14KqcVBPzy8td6EY7fQiFEkDfNtAGLmiuhbZiiPYacbmcyG5TvmFA4KinDR",
  "key5": "2xNyR5Fykvo2qm6wGQoDX2eVP2j6rMXfSnic2xoEb2yaDDiLGcG468jkjfr5rXXxnRmNZQnqE9PNnG15Ex2asjqT",
  "key6": "3gX7xHt5Yw9ZxLTfssnW2ypYmzjVPDHC88hyZtZw1HwHgMnvzRA9H5mepuiR89ispmoKT14worNhqgpRoPknJ41k",
  "key7": "3ihoyvYZ6ZzJoqxftjrLuULn6Ffmo1tCNy8gu3GpjYZ1q3Xntr8QZuUcWmSMzLq2qAdBQtRm3XmUzuDxG2eCo8an",
  "key8": "2GtNkm1gVpSjcfYERGJNN2pS5PwhJ623L4dJjX44Luev3swdiAkWnrEWijUdvwYH8eueGL2zxjptKwW8Cyc8PaR2",
  "key9": "5mAu7mpMdWUN3wNAR7uZex6HFhhYir2uN4MYNHp7LHffrUnPWzuMCai6JqPMcd89s9qf1ZWKvCvfHGK6EKi5u8i9",
  "key10": "2swj6V8LPTJJ7iuMHWwXQ5Zod7QcJRrQoBBJSXhD7vrpQPi6WDP3MTmHaEwQGasjh1ux4yNQfVNq5r6zsx8ZArKr",
  "key11": "63YQnMqRMyywPz92JB6dhjSHfiXhSM4esxv4uGsKiLREnibr6JTbvZYSGz99VXhmPgNdkrVhUdcMmqvNV9DzGv8v",
  "key12": "4tebh2A5PFP9LfueWwWKcKTf4ncMBK2UHPhn1i7KUMmMiFRspYGTnGTHjFSzqv8PhvnLY4co96dws3k2NCWZhshq",
  "key13": "3c35xsNJ3kbLjXRsPFNj1g1sgVydcKQc9rMTu4mnv3zGd5rUn8QT5Uxs8Ysb9cBkPNsQo8NsTNc6Lg6GhbNQeW5p",
  "key14": "5v6awGWcK7TvQNj4MSe3da9o3GiiMRXCrfJ2ksyeMi7oCZz2RtThJwJVv744jbShgScwsrHQh1mPFH64tuauDEhj",
  "key15": "5bzfZUbfLv5N7rcFDzTanqQPHbWznGWAUkxxU5zwadcYVHMA2xFrfBeu9EAFPSt7kzDx8KZv9DbL6AyvQ3BvMLZU",
  "key16": "5Cd5Sc5Dx446ixPbR8Xf62zUstWH4qwjLRFGUeeso4uQJnpWCtcZGaGZASq6VtipRdY2M7bBdMx8eR1S88v4htuw",
  "key17": "5Pv5FLV894FVyK6Qo69cCMYZRxxrcSanKynLaqtKzGYxhB249RcLBhr8thuwXqaseKcorirC8UMcLEn28YQr79Wd",
  "key18": "29FvL7AJdXCv54vrouZXtHgazkEzFtrm6jEACXYDxJ8hypPvzyGXPicc3VvD2AV1VtNZB4F5wcMLAJ4QPWtEw85e",
  "key19": "4AGQUhQFCwepY7WZVS3oHm6Ys2bWQinBGJGxD1NDaTyvNoqtYSqxCuxdY6huE3zSuLSHt7k5JKJConKXHUkSBr9o",
  "key20": "5CRZJNDVwMUKkevpEfHmQPYVPA68cysTZK4bpXkKvU5vNs2ZMvjXY9vacvv26hD9QwnQ6fC2sUHJc6WXznYxz36g",
  "key21": "3gbSwFGVxT8v6AYfixjhSHV545EGwxWGKJ4j6VqQgJBToYzB5w36uuaQBP1c1TNYGCLFGFnrz3jibS7BrgDvQ4o2",
  "key22": "43sXYVu8iitaCLR5hnVB724fmZL4bk3dhDuKieonr7dXTj8U3i7MxNZt6KGQy18Uipj5MALe3L9qakBs1dqkRzYb",
  "key23": "2gYz2SWWEScwovg4x2CbQK274S2meNtTKezogVZS2qKCevuUhR4oEV7JM3xp8YVDqahPFHa4yJJcW5J1SFEcQWqq",
  "key24": "2bgnm7ZCC28usGphvBazaS8RP1dMwhaYiMH2CUFfXMbEk8V5KvmhmDqmK56bY9EttBgdwy3rKLHLssgaXrHfa3ek",
  "key25": "cpDMF86oRhDWF5itXmZgDJy753KAMthLc8UnNm5S4ekzD97wDbPnwGKjnz9rpD76rZyiKyj4zkFVA3FkSspLWZZ",
  "key26": "4UqE5DUpU9zmUt5SVDe9uLX3WZR47tPA9KkZoo9XQ1HxNFpZsDrmpXetGKmyjLfw2chcq9M1z4U3RBpbcpUtXAUx",
  "key27": "PQ6tR66wy4yho3foLxy2ogd75KfM9kJYLp7hcEbobMqS6riYTzm63ESHLhVc2X2tA7HCs8WwEHajzVegNaNQVbV",
  "key28": "DT9RQz5d66Jyfk4WfLafjs2pKLs5dMCxwBahGvQ2VgfkcEnByJMsWXuDK7VgyysK9F5W5TasHqnt2aPcx9zSNSn",
  "key29": "iQtmJmo7DRGPEp6SLkYipENdNXQeXZSp9cEVpGsz1ANfDEoz7LfsajVix3b91L29M6XZwVJSp6Fa1vBwqRtJcs6",
  "key30": "4SFh2hSUoFmxbuq84Ss52FUt3P3n6pj52bZBkYS9UkVa3UuNKxBQbd4y9NxqMyk7nYzma5Cm5tqZCHQyBobykdym",
  "key31": "5pkHSzSG5BsLT8zgxFHQFfAKo1Nk8yogpExHeiVRErwB8ZvMGFhfDCL7SEaELX5G3aViByB8bodx4VhS9A5FQa3N",
  "key32": "5vVSFtSjLrXM6T4Le4yGFtCYNTmiaGi8UwGfzz5jCDb8ZZf3aUcW3FgrPeLwEwvv7UBruv6RSrGStrwWVnqnn2tz",
  "key33": "2LAJVwGnVyyJd83Cmc3KpjJwdBjG93zh4VJzB7pe74M3FVf3DJvRYgNJ6vAejuHPuJxWvmpfMeqLEm7XHher8biH",
  "key34": "4AaG8ctCShWRqQRwmzXbaS93hhvJRgpMmYe6AMwWKd6UeYTcGNuWfwG4n8UY4Q2xR2Y3H63aNaABgTWSYRd8ujVv",
  "key35": "4qVKmhrPdUQvd7Vu4AQiAxRYHnzNQnQcsUgv8wwNdxYDjcA7zNBHcbsAvim9iVMZHk5cGGFRLaWV8HRnR9inajhp",
  "key36": "32G3gXr9zLGzkGXe3Ajuqb4W6P5oEbc8nK2rnmukYifvU1ifafSsEcSsop6C1ELpSoeLwurS49AS71rZGkscft5g",
  "key37": "2hNs1zMLAFUieFJYtJ7TtxjMLLLJvq7p3SiMfciK7KS37CWmvL7jUBVJwzw8gFcYQJBJujojXzjcwkJNEyJ7pU5y",
  "key38": "3LUkk3EBmNYXLsnM7SfPDjGNKaPDwqUHs5tJPFCu3h3GZEbAgTfjMwoMnxsL6pr66VqgJs2NqfRfkoRiH7ZAcY1u",
  "key39": "3AtMv1dce19UtnxefHA5rhMdvq9sxVEaMm6iQCefRzU2PAwWB3AxesGHwmcJWbTgeEvDt97Z67k8wQjjUizLMCbp",
  "key40": "37Pmds8nErbnKhUcYR7gkJhvpVgnrCNnqFGMFX5Y1CaxN9p1GYvUZSMrqMrLFDi7LVv2LoUJir3juviQfWikThFS",
  "key41": "r9g2kwtt8DyMpk4qrKrVdwPhGXYovUvkL2nCvpyMSkBwSmLzVrzB2dvJZrfMuR5ZVBKCNwNYKhyPLTxkUnHkjqP",
  "key42": "3ofrzJ4p4PRdoaviMLfjT5Lq3z5CewcXySS21MYAF294A5qSaTfgdBsVRpFzUd4okas5cet1LesJcmk2PdfL9SXz"
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
