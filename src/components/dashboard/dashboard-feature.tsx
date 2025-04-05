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
    "2b5Aaqr7JJTwJkBdw5pxtKeNsgquFMAhLTWKyR7TnZr29p2bu8qiiKFSVwHUJaCMJBg9TY4qKtWYZFZyVe7csBGd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KP9qM17iM2osLLnhMeb3EqiTRyjXJKpGnsZLo3jEUuyM1xLApu5BojxtQ5j35jk2BXyDMDBk4uUpqeapKSZG7Lh",
  "key1": "4q7hLB9YARpGnvjd6nMyEqKaaK1AprDaHPEqQ6ahSAyy8A4LXGv3UP58nDQZ1RxnG43mJPiLrZwqkWvgb9Uo8VBH",
  "key2": "kDMpF4GsBbDrk4caTBakDRN27feuvQSCuVpA2Ecaa6gVUbSfcEdBqAsLsy4kMqgvdihZNRKQd5dXdyk6WVBM2Az",
  "key3": "2PH4YuncBGJTi6x1Hncshk64zS834gZeGuAca3RHbCZ6pWvag4By4LiH4WJPqJNWXyQ95HAEsPURJUK7TRfJDJzt",
  "key4": "Ewx4PXUMRwLvPLt5RQFaWZNcTbWNcMebcVQum7vmz9jEXzKQBsjEHqd53dM7Cm3i3xCGCmR7NVv15SrZHxkD8au",
  "key5": "UPwZTPfXWphNehYo1eiyur9pMNqDkwKgg3VN2jYwk8kBKZ2M7YkN9fmHuuZ5XJFcgNezaxKwPREDJNnhXoi17uT",
  "key6": "5kYXGLCgn6k5TTJWLXPDVzGcbveeQbQUo2qDJJQaNqQkL2WM3a39JLWaojyNPT6CHj2pFh1iKBMJL9R9fvhsu3r2",
  "key7": "UFkvKGWkAV8eypntrDLnfMkkGAJqwRRs2grZ3vzqdTvwcyoUkxCuPd8UVaEXYWVJSE4sBszZCGW9QvgKX2NrTSh",
  "key8": "2dc1QRCKyUUWcP7JrPpcTNyeU2MXYND7dLc3vTxgPAmizAKQCzrmBiJe8o8L1VJjnZETf1iR2vw5rYEb6B1GXiTC",
  "key9": "4PbxV68jPq1tSHxATxiS5p5MQXsvny1TKskuxiDch4ven9DpY7iScWcAkMpxPHFDP1znQuLMxiX33Y8ASo4xqK6c",
  "key10": "51dyVXTXHYHT5a3Cb8fbeZLsY5BV2AJu7NswFwyFhuMxHeSMqa7QfUNybFsY1kJWrenBjWjEYjrb8gS3oneRaghJ",
  "key11": "3wAau6RBkfnhPbdmVs9Ta4sf5bESXWBTZww3MpdekF6xJZJ2gNh4sSStMNXLEdsRx63a9szmZmT2vug6YdbZ8bui",
  "key12": "3jjxMZY91bG2QhHsatFMQCJY8uecbBDASGiF4EwQgeVGVVR3JwmpzGPFdFzQUxRJkvgwq8t5Y2SiBuPsMA4UygcG",
  "key13": "3sDAaNST5yBbWgzrj3sKVF4QGXroDmwwe3mQZVXNiPZaa9kkSEmCeZXmbbP9S87ajGST7TG16sQ9c38w36jUYzeq",
  "key14": "3vvcd6GTKGSwiKTBB8Xtzc2hhGeFtqDyc4CPJMuJGWbEYuEvUMQ1axN8weTHgYXYtbTdd7XqmF8xFKVa58VSGPBk",
  "key15": "4eVRivVHeEn8viHgBUyJDHy1qJeMPPLpN2JC8BrKiiZDwLYwmA9qh8KnBW1fAi7uczPB41ysWjttkw7gfQr24pNx",
  "key16": "3R35boLa48rg8d2Qzyzd1M5nDQZXHZRb53cPVpjtVSSZY9psC4DyShuxKQ1YrzbmaEG16b5he1xnCnwhLB2566vo",
  "key17": "4aC8TMswdkXWStPdZAJxUY2XdQBHBz9TFNLTqyk31PUUTxXG5yuRjgrhvz5krpcjYuGeUBjqutNSRzc2X5F7YpWC",
  "key18": "3fEb9xcGHT5y6NwWkNBd1AzvW9z8AAUyZCP23Vhh38572YUDjmK3aJjWkq5gSz4PJM7HH3tfTEQBGAL5U7fxc97",
  "key19": "2t15Xe5PTBjM32CKyEKT6KTvgTC6HES3zJGAreVJPtsYgmZNPd73r5G5oMTyEzzMHKMyjdTsbwZuJF1e4R4EQ2fY",
  "key20": "2bSCGF86yDysFuqKziGg5RHDPjcAMeFsDBJ3yRM6xYTE53QNAT399TS3BUqQ99ErX3N2GUo5gzLGENGxu1CXA7sd",
  "key21": "4p5d1q9yKn8cugPx5Z8SFmRdMMWPe8ou1rEBi6gXHfPqBBnMYeEQk94W6eNuni4eiz1D4HFeT27vwE5krnK7Xd7S",
  "key22": "5Zrvxo3PH4TKarp9zAmwkyG6mso6fgeur1wdEnkgen9qp9DW4QHnxNmjxuJQ4gxeAN83Wdokm8LTaTxT7MGFHa4X",
  "key23": "2tZRGEou4hgtL91jdWewjKSycuqhxnPRryJ55KEwx694H5kWNi2XuQFGEuSrcMHvgzQGGS4wA8z2164B2q3zfvRM",
  "key24": "3yQijUaBT9BMTcYihqbmvatmndXrhdLg93ZV8QPjsXjJao8WjtGZzJBLmoY2SMLigKcRYt3zpBzGcaCST5HpVLBn",
  "key25": "4TZ2CQi9iMdhPPWKGP4zxhrQppHWsvWNJXWjVMdsYrqmSxftJAP88smrvrnv1HfErNouaqFr7vLXyGHDZDF6cXwh",
  "key26": "Raxr9DsryAJsRa7kNhiBxEAo9hZAQdyszEfKrSMiT8uVMqgnVQMDNh7vf6Ld6EhQ5uFJUpPnc4MR4DNUgD2DHYm",
  "key27": "5nW9o41wTuLAx5N1mXkM23MVbqCU1gNhhreeib8Ugvu3SFj4XLitpdfo4k5uziT4e74xXpjNp2FS7Ya3ntvmR7va",
  "key28": "5RVvCwFm8g7Lnp3FdQVTJPFtzVWYquZFsGjBMHYjvGfi2qfE6WfYK3Ycg9uvZ3nXQiYtyDdvNYPaux6JeC4PQhej",
  "key29": "5wpy7monva4mZH7sp8UB4tP5FSLj4Y6HfaDVQmmBYKuvWqyAPMjGUA75wsoGfFiBZQU6P9faRygcKVfu2GC6S1yM",
  "key30": "55ZTuLaekK8L2YdEGTXihdKvXWM6aHVsFgkktAfWPbzaDnHaKxKJD99qZBRbXYzst2Mc1RwC1ihFabPnqYdnWcNH",
  "key31": "3JatRjDPFos9gXkVHbCYrqeVXtMyzX4DTtDxZoqwiix5KXsADBShVprcdykY3RytzQ9zFQB8mBWQHBMYFoEVqYDR",
  "key32": "2VkovPv62Y96ERQUJedMSWMEEbf8R8Wq6SzqGhduKZx1oEFyod6jX2nnpzEofS5ftUpFnV85UmGRF3YyW1KadSVY",
  "key33": "WCSD5tJserhe4A7FYo3Cc34JTzUGc5bzJ5Mcj3KroFEqZMKaQJfVpVyfq4yVUnPnuZ6qAFL3eYG4GVdPTEvbNXp",
  "key34": "VKMNEjGwsvzNG8LY51q6pXxrfgxXxcrYLwF5KW7WQ9ScLfEkH1mS2wPRvMvqupmjx3YQUii9uMt9nCHX4x3bWE7",
  "key35": "4J39ts5Pcor5JxBc8BxDctxwdVugPmripUqLWafvaaFuNXmpQ61CrC5tGao8XTmEfvCmUExfv3jqdLP75J8QKfGy",
  "key36": "4WMiNSMhmCBnd3xGdufNZmNkET29r1riQh7yqhETef5pqQa2j8Tru1crnwC9Tz57QbsYX7oSFLBtKxPbg7TeavGx",
  "key37": "2btNy7XTydZ7MyG1aTbMu7wtM4WGkKnKEtoKEMiVzyAFMDbjezgTMH6Yi7CsxeHG3V9wNCon5FQz3k8gpacNBh9j",
  "key38": "rdMe7HA5pX1AJLjh68X2xeTa49iLt4tLfpGCy1Hbd37fRaoYfPkMCEDDpgqLDDnX3PbAVHRe4P4pWhTR2AUJGM4",
  "key39": "3DwuydgyZtF29Dc5HvsoPbQWEpUYyrX6Shibb3zEf9GZSfTcoECNdwn4FsHh7UKgNCw6maoAQHV64fpvzgevaSUw",
  "key40": "ePzrTTrsRYxDk8QxTtfh7Aie9mHAkg2FB387CkgcHoY7Hejv7YaEyjqSo2W9ppHYR4gggX4XgEeYR22kWPGqay2",
  "key41": "4o427s9iUC8mkY6XiP32ctubQbsm5ESnAMZoHE8ALgetRLsAqPiP2sLxt2SamMeiH7T6SM7LpNRMy25FRJiskxWT",
  "key42": "3Np7iUw6vFrKp3MYVP3shKdBgDgH3xsV8x3DxSbUgD6J8h2sCytBPRcFks4ETDdkGJsor72LQojcUsrexAsQsGMF",
  "key43": "52aqAHAgjBFnwLW8XwXgmV5Jw2NDvn5uXsbK276PCzTVvPJCBPjb4bfJyhrxRGfTxWP7CLVVE6ZUFobHBSr5KXNZ",
  "key44": "5TaXkDcLhNgT38R4xJwzmTiULFyGFPjULKKBwK6ayueG3WztQpmR5YJULfeYrvNW5E1dTnw9rdG9Wn74h3uSGDGS",
  "key45": "vvzmcjcU22fBUZX4DggQUuhn3rCGFatrQk6Wqvp7D3D3QG6yvQ3L1HEvRX9YP7q4FZoDJhgvZnUuLebZWJ6u8dG"
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
