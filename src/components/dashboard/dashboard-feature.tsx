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
    "2CKgrPguSHqgAqhh83MYfjnPXkr7ECCuxBT6UCbMzuBRMyH9csa1uVvF5xiaMVfgkwcYKbmo3XjRQ5AXhto9kqK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZR7Nw2NWjUNYtRNq4U7bWjgvMqEVwqz8zqEEpUroonjugc3o37w6w8kDJ8pVG8aATNTS3YiLuPUXFWPp9ivbYbh",
  "key1": "ZXUbmNr3BJkyffjbxxyN9AzjKkGeWVbKqYrvSVmqLBDwZDzTKyRYt5iXGi2Ed9281qsq27V9npkxsquzFhievms",
  "key2": "FSm8PLYmvoJsRXhj1fjXtQPYCWQKBKs46RS5pc8NZb6m69EY5i2DnSVFXP9x6V8hqxLoEj7rrfb3o81e4rFiKJo",
  "key3": "XFw1DT7ER3c5uWs55ND533mSwFV1R6PLxgAon5gU36cgpP1aD8YySm7phRTeCHKyBGbRVsqpurqcSBBP3LXurm3",
  "key4": "4SENZsqZ5vzKX449j97Sjy4R7gCpDMN8YAJAcbE8XnaNPFDmu8gCXMQzn5as1GzeuSsPRVe34pEiJeqcweE7MEUA",
  "key5": "uXctMqSTmZMRqpqmK4aXMrdV3KZWRW58sVB2R2qREcP5a6aWqTRyDFKsV9WvTqs3wT3GCLXM9QBQ47UnYtkqY1t",
  "key6": "5SCYsnnLPczjBvBpDnMkA7p8n1MSJBUtU11LSwd83Y2eVzDEYPCmiBNGBj63KVBmJm83SCkrqcxdrAznkoHZwbnH",
  "key7": "56mQDYbZRFQMnp3fkv8WNmbEeuPDU7Z2BSY5pH7fTbwgeWqzpauQNANnnhMqM5x8bXi6TdTfn6CMG4espAEbYFkq",
  "key8": "4RoqVQKMyiJM7nYtzZFkWfnbFGWEZxSkqTvVBA1cNmiHCRUxW7ZAajfNCfPz98VQvk3U6NdLfKoYGNPtWZnxCP4h",
  "key9": "2TtuwbEKWzsLwnbhW2xefqewacP8FvpAUPWUAZAQpByu6C7btFpqV9RWLbutDspE32cGtk2bAKTyXLo1QUAq3yks",
  "key10": "533bBS2a9ygSYJPLs29RHua4RtJwCAjZNw5CXStY5jhfwtmRtL8t9ZzPW2HQDMdCgqEWiHcWY6unxWhsUSBvCqKW",
  "key11": "3nYRCzQoX4cNHNacWtpN3w3qATgLZFzd2E9DrgZinZRingkEoYPynwomyQbY1HrcTW9VhZXupPsQ9ykUWcG859ya",
  "key12": "4WER24RuZsjWKacAmUZqKTPTGpsrVLy3jbbvQKwgSTEeBTQU2G8ov6ZHZvKc9jLERn8LPxWh5jvwqpSmgvKBmEEQ",
  "key13": "3VrnKt14maY2ckUmi52x2F5BfDVcyeibwLuTkSGXNiwS5Lm1Q47S11ZgPzsQhYhwDdVFZzximSc2zieEXo221SEz",
  "key14": "2iSW4upFedQLxkR3cbr7WvvMfAxEqncFgs14njhTxhFmueCuFvnhqjjUV33pQrdwpHR9RNrgcnaUGPLe6PCd7gXW",
  "key15": "5XYNKJ5vXE3kkbz1Pt9HvcQuC9tqzcTiqNWkdki3XJ8w9h6bmAvCwh8sKiMjfvhPZM5kubhxu8jg6sHzEzsH8WFv",
  "key16": "3c3LuUkitZRNHPCSctsbyJzLFn9qr9v4Pdzh69xQ933N8FbbfatjJ9mRLkrhz1YyV6SXRD5MhRBcaRUb5iK8ApgM",
  "key17": "2LJ8ENVU4xJu4JzdNXxUDqNsXC4aEsgj71FnmBeXUwEGr79bGLV4NXqnz6SHhPaZ6b3eEmtGk3YTuS7teq2VgyDm",
  "key18": "3racsya3y5r6mcNmYuL1kQvZJR1zywwHQomgUK8nk42TXBwDkXyyzdeoigqkPieTXBffHXJ3Pogk4Y4EiMuyzbDw",
  "key19": "d4KDLgyDLQVN5jg3d52MjohNSrDX5f8kymB3GVyTc2ewmCGK7tWcLcasKpV87rizjC2p9fwG3aJUmg6qPAHxuXB",
  "key20": "48VurTxeV3azi9dK2zXy2jF5chTC1CM4DtPdtZbnTeLVDixWgaQh6XtHLXHMb4vz7pqsgzmfpyDfgWoLcq9Sm6WG",
  "key21": "2eiq86e1gyP8W9BQ2DfBaiM6q9Xqo4HW15T6hAU3MgLvnkGGFDMX4mqM9ncp9uaG5kLr5dyZTqinjgYfi1ArJbRR",
  "key22": "2xS8BBgHfGj43QjivHptBx9Q4voZYHtJfU5z9GPppZAvCuAmXHXceF52keaGk4CBgYoEw9hp9Xdf9mzREVwgoEdD",
  "key23": "23v6aGfBdyJxyBgHTbXAj6MCSHiZWTfh73saWdvoBLe94WeW9R3HEmfkhS21khCMfHEsw6UVAFZrGG7EJ4yHHKnr",
  "key24": "5HRdVjJWcs8Q8sLYkwx3dZn8SBpdY6bgiKDMczEX7D3YHt94KTAMMY3N2aVJMBfp42XbN8H5dJBLrFxKwqsLtvHg",
  "key25": "Xh2eRGRVm4fPAHkd3JojW31RYsJuXR14eRRxnkzE4fRZHRTwVxKigyyC56M7YA7B2KrYeHhbHupwYXc4zK56KV8",
  "key26": "VsNGRLigZPnCHx88rWBbQm6Egwtnf4vwqjHMDyVhCBWLyx1p9bdGh98gJVfP9pTNrd1YFBZDRkdJ8az1y5W31gq",
  "key27": "2At6zKybj2DQqvrzG3HPkfKgce9VMwJRM9mBReLcnsrPS5ZPj816TvnvF6Vp3dhFtAH8yvUAB8PGT2cinPPvjWXZ",
  "key28": "4f8fTAHSzn7P9pbP9AboTtH8RVirMmYcgBtFgGfKeb43BUpMnHT5Hd4BbaLB2QE15VKbV6orQdaD7wYqrJTjzkSv",
  "key29": "4kvuRN37Bjf3uqJoDHAT6JKXdHmwdsLEjji2Ja8rVd97bifTdacux3E7CpM2586vH2fps4WqhiKPXbpVbhjkG2qU",
  "key30": "yo3wxD1JsLoJWEiZDYWJZkqTk6saiwbFWF2d7BZtjhsmEMx4eeyv2MGjmyRQokXVSS78CvH1MSpkQPiHDmqmVxb",
  "key31": "yMe7HdzT67CWzGt2GeuLhHQXBXeGg8oGHzx7NecoGoqTmM5zvAXJun2pfP1jg66t9ED7m2zs6uzeCf1VxrvzZNt",
  "key32": "2mHKRqaKm8VAGNgx3Q5f1gU189sq96Y3SMff9E9etJtA6p7SLuTXhQAY5QNTsQad6mknXTjr5PXi5Bk3QcPSSqKc",
  "key33": "3VRZDQFKWPdLjfvo26M18CJ5txPt2G1EbzABV16fJxdkgboZ3x7VJWXFQpPsKjns9pf5byTigokbFAumvYRpXB9H",
  "key34": "25PZBWdZNhE2UsLDTrDsSzFfXZmuJdpZJZbfZK5eUN4L7beis5o6wuCagXdGg4sTMd9VTqKCDjLoQCuQGfXqg2mD",
  "key35": "5yZaNCvDnbZodsBxm2Pkg8smambjA41jviNxehWX8WuWkAqSdaBTyR7rBmgdkUHrVCYZZfQgeMNrGZHR6ZgSifb",
  "key36": "CBD61HGhVwXuFqyGv7jL6rETK8ezg9LLhntXH9ExweHQSxuyvpxjTD8HdU2hXo2XAqWqiaWsvLKLKSWCYhyzPX3",
  "key37": "6TRQaMmZKwZLp1QDps34ogxpzDP7PjMzJVMwsi1ELYVWc4XenXyz5Eo4PRazgXqeYk17mCnBkBTTm72wZr6FkoH",
  "key38": "3aNjrPyZjyeX5B7Snh6qouWEwP98fN8VAnoysNi33PL6zmWVVdbu5uDKbcWfWKhaV6tDzdTw76VYi9Yastv5RoLC",
  "key39": "348Emuog1Mv42hGwWFrMphx3nMXEKovuSE8CaKAfHsHg6bESC3SqBadLnM8kjJAFQBHdaG7JmjLKN55HKci1t6WE",
  "key40": "nxkFSEtze3qWyUy42Boi87S2WuFsnVy3yUL1cjNN1GB56g86ZBWGjJqsgE7m5iramhFy5EHqGPVCxyaYupjLPzX",
  "key41": "4xeFeLtTMMu6p7UkBwpxsCh8HYBnbUbCMWhDChcjbk3d7df2VhJFaabvKThdyy82cbJ9dWdwiyqHvwGLirwMNDqX",
  "key42": "5F3LDBXX4GXqRRUnCk7pioxed67FyK74B3bVqjYfKTSLFvncexViwFmnceADASqzJjtyipFd3tnRNDQ2QSXXctwC"
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
