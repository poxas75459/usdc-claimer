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
    "5EydwRUpuFu5dJFxEtj2fw6DqifMdzUVdzDMfvENJtKEQmVANskjCjCPK67YnkDYUVpAsFovjrVhGRGui1KSg7Js"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4na5obhvhK9rNzGGvsiWXKnbtks234sCAKcQKpLjUHsUXyNXor5hxugirT1EciMBNC4JrzqGf3zAuz2MLH76hkw",
  "key1": "4WQLwwait7mzUtPy82KfnPDwAhGxnrrTMeeRD2kqbwXTHs1yzSmvygrKFCLBuCZzWfMtyFF5LyW3o3TBFdagtAiG",
  "key2": "2VPoiFrMoXEjupEEcgY2vFQ9eEiHMNcDa1xYDqWfhHu2tu9pg73RWFWv46A2GZxwSE2VKxpCd6XuENT9CKsFiubf",
  "key3": "4nmXcs5vyL3N1FJKMCdvxh63eFtQ36KxivPQxdSXRXE5yt65jPb8hJZLQ8Xxf3sDknVNX4gbWJTGGhJp8nifov3k",
  "key4": "4weDMBCrfsdF9t9TY2urz82znsyh5dkdUiFXBi5dYhtXQNAw6AEEMxHoTWsPUQcbAtk5uV3fRdDUewGfYzWgW13y",
  "key5": "2XpYRKgvWZKR9czBf6XUxwVjQnjky1gmuvmbmhJRTJ3kcbuzmRDBdxwedwjRuzGRYxNyuEfbWoMbNtZNxYLraQFh",
  "key6": "2m1mUmn9QzstYSaYexcyQBep22YB2WpvMtiTqqRk6sNZY6Q1foZc1dfQD7J1PEDsjLB7p6KBacsvWAaPwm6zrSGk",
  "key7": "9eMvSDZifGvJ2kXeDxTC6fUBaRYPWbX3RvA7XVRdaDCJCm1gyyETjWJRcrBWeFgqsgaLXE7JzvL1RVXqJAW4TMF",
  "key8": "pooeanQmwGAAG6ztJSWhshHzsGTPQ6vpxHfyjiHxJadQRW6vzaQyUxQoaZUwJ1RVXhxYcdkyhHpQf7jFxbewj6J",
  "key9": "24i53b1BFLrVVpkdB7gVJAVLA6T9MkppVCqGT6eYmyMc497aJ691kXESwpUuM1CqPU7LsYV2KVyJSxZED2y4QZ6L",
  "key10": "4Ry1vm1MWFzLZHHPu3NrtSVBvK5cgAaf14ErVg2LaRnnx3q5HGLNs6VWtyib2bgJdaqXb3WcxFSNsgutrMCAk1DQ",
  "key11": "3oWSQdFLKRuMPFcR7tjWmmoEa9YZuJeJ4PkQifUVAK2Hxs4XpkV7yp2Ci1B8XJD2CmsZDtQrVXtVKDCGNgVcDjY5",
  "key12": "59mKfgmr6xf8YsiuQs4A5ps733VppFeiTwki97SDGRCM129HJdrE5WaEMFN4fuLgR9HvYQwcdX9Fc1ZvZsD4asMM",
  "key13": "5ppPqnWAWTk2Gt2BuSyjYBJcxhVUbUo3rzY64zu7tmKNgcc19Yhy38VtrwkBz95uaDjnPgb1SWiBz7wvS6SFvrZ2",
  "key14": "2qwtsnJYcZNb4DQRMvLNzGBz6xsXJ8NDFSHuW3rFJmdHGYTsLD37jjQyzmP2Q8RMb2Nc5ZbD1pHJkRL59DujWpfn",
  "key15": "3KR2SQztYsn6iHc9PWWCXhT5sqkwNTRhXHZaHmUNa8mR3xfKdEQB5bqQbSaGQYRxzo3RK6hCQUGy15MQbf8zYxS8",
  "key16": "54G2KxbAwx56eZYKozRvneWN4rkC8LH6AArWFxfWMGWvFk7ueeSepXJm1VNzFJkZT944MiZTbWpHVSjTmFV1LPFk",
  "key17": "ThKErwGYeB2zz5fHJVE3Anj4atf7hEeuFiuxeQtqPxEdiZhxSUVBkEHVxM9mk5gzZk14UgeX71Z239rRbqBNKyF",
  "key18": "5Y58cdwazzu5nmzABfbHQxVhWN3MnyfCf9XEsLNw2y2sHQPsdcYUQ5iFQZV7kD4KpmVEnqMSqd3f7DoRf6hzxf3x",
  "key19": "2fDG4Xze6M8u8Af5UiXyPp4ydVxF2mssf1SmeoSoUNiMKwgZpPAguUaWuVEi4qdRDNQsTeY4hgkqWQmJCwzB3cF1",
  "key20": "3G6SqNji5SJFxYYYNmYnsKFzE256JKCJp9NMBWhbAR7SaZbikgEA8THffLBcuzBGSDB7A2oEtYXMx6CVR2X3CxEy",
  "key21": "5bgZp9nr6STp9iPAgga45p6svNPWMeqhYMjUQKdkruSbu63U6EyhpFT36zhEV4vcBme8dZcfASEUZGARERC7Aigb",
  "key22": "4i9Mq8HUStR5THzEeWaaCzbyRRpGv1oneRk3dJYMDkFujmBDf9uXj58zbJ6DDx4oZ2PhFj2qzTFR5MPkLFrYEpFJ",
  "key23": "4wky4pM9TviuCUxsiF8YdLsBipLDc2RTBfcVFxVPAdhJJRbHmKA1xiC2rknYqWmDGxym8qPQhN6HQRT9CzthEYT3",
  "key24": "48Fm5UmcrC1kMhho2XSv6BmN5MtEPoMhvRZv4GgapTDcfnyKhTuxHqoMuTwyiUnycKHxEM37ffF9i9yiye5RYsKc",
  "key25": "3fHzbVQAkPD45dPqCBcVDcXx4H2kGz52jbaFr5EQPK8yx6P9H7Sp6BSfjYHsxJfw2ArE4JeubYpF9iZnRWByCobB",
  "key26": "w8CxPdHBspG3nERfyHw8C3Knv6TJzedSaWwSzn7Dop2XNL9nbv3mo7HjcDKjXRnrYRQWXQfRsNqsve18goKxD4A",
  "key27": "yUdiek9YJigqcqRoNT8humM5xdiHsBqL6eZawUBbyrFZ4mB54vVFNLsPgJSp68VWZbwm5KVoppk1gnCWnbb3r53",
  "key28": "2Zc2atqbDb6twSJ8CZjtLKGVnoQnEty42c96e9fmuzfbFPuewEKyHy2vctRY8hLdrHHP9CMcFp34FwxG1xHdsYfS",
  "key29": "5oRX5JPSxUL4kKaUCNiYWv2vHABjHnaD4vEEwTXNMsLBcS1rq3qtcbr3dmi2orbgTaae6GztmpFnejSf6t4kUcG2",
  "key30": "5NtzuEh1oUGU9Vuxc7o1zUcH6MYaAx4z8Ldeoux1fu2WMKHRB5NoYuAzthi3V5NpwqwFCxqfPeWmt32re5Ao4FHv",
  "key31": "35nRhw5vLGbMmxktJajUGJdriy9k4TbyPE5fei1yQ33vfGSkF9FoypjNzLZTP7NHeSdLNaNu91HajqicnG8EKcXt",
  "key32": "5Fg3eEdACXhxzBkhqw9Z78Mb86nBJN5jR7jRRYRfoy8toLT4w6YURpHqgRknp1tBBJFHFYXPZvQ2JaGxjha8ZjHz",
  "key33": "cNkGY8BwSv9RRAJRSEX46RaLSK2cYepC1YuBuh48XkcsJoGbbBrHXHTmLYikCrg85AAK1yMGR4UemUd8iqDYCUi",
  "key34": "25QunNoSfCa6SfCnG4CUPjEi764vgMq3Ehq2fwc1uEKPZj3vUgJ1gTYjzqQH164psMezJBPJtgWFAFQb5YxueA3c",
  "key35": "38nwiK7bwrnSpz3EttTJCEJpsTgoPfTNf7v5RXjxtzF8wXSYXkBABw8NmfGspoC5atAZuFyTpo3KcGXsd2LN1pS5",
  "key36": "643Z1qjkQEs8KEdhJqNiEGcGaH35pCQk9LSH65gFLdHE9jC98aKdFvYduzsBovXfUFF4212u4VtT41296TnpZTPw",
  "key37": "t7eZwfj4bQnZ3oRtHCZz3Q53aWT1jaQt6yQuECqqatQp4oBoscihPJxg3SnvKXscs12E77Arqd8MiXGMzBhLhaD",
  "key38": "5kdYnD2ZL8ZHit5SqCmn6wWVYVXrTV91rZ2KtiscxLmHuksHCudoS2VnpyJ7e2DFE6eM2GUzbtkehudGyfaufaE9",
  "key39": "KUEcjDPLQQcaZgqezPQA183xPT94adejxEDPMMr8r8FipfFtbjPLDJS2YpJwkFqAMnqnw34LyKT73TgJeFWJ5gt",
  "key40": "3H5PEzm5MRpJE2mZ8wgb8pJBtMWnahMK45gwDj3X9FGER9k6nvSSwAXySa8hNm5WnkXT72tCpKTWKGJe9Ahdzznd",
  "key41": "5ZG1QWedVLrR5MpcLE92ERwGPUapiRtv3qQwCtAEkCrvo48VQQ1VGEAnZG2Tdr2rNEejCGSU6fXaVBHeCMoDsUy3",
  "key42": "3JpJK848pSWxWPtJLiwE2ocPjA9Gq4ok7SakTKD2Ey4xKQjaX5aRCAPX2Qh9XvXVBPUouM3yjm7rq3LXMqbbVyUc",
  "key43": "5JXNLCGhCXqbeJZy674cAPUyLomQPVfjmMTMF59LHGewp1QUBMQ5feAt44m4nqRRPJTGZLaza2bw8suhCmmKvKnu",
  "key44": "53TFkzbjFBYt84EVgLs5Kawe61ZwJ5VsZkkMj1s5guMzbm64NEvRveAmW71ug7Aesu4fhju2W4ao4QCEn3EptNf6",
  "key45": "2HRDTy12JQsWsxMJz5pn6Dm6WU1cDgmDZbRnSGwNvwWsuf7dVdnMsczWMkFtmQ1YFT3pj2ALA1T26MQyHDUXcq52"
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
