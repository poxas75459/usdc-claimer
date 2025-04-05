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
    "5MnCkRXsXxrsz2oKBuovjGtutqhMYLUBK6HsgLd5yE2Y5r6sjaKZJSGqWqULVGKTRC6nFyUrW8Zzde4uEad4veoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oDnjQewpcNJtQaRSjL88rtj4Mtr77K7XjxFSyf7AE1k6Qe8szQgR117nEVNH8ReGLvZWZHrDDeMH2FKypVpwsDg",
  "key1": "4oYEVQET22Cu4E2Ganidb4anZqrXWjSYFJrgPFH6r4zifAKHaqfa9Ri72bSTnrbe836R3ytVDG3VfXX5FQmXn7Mb",
  "key2": "45b5MVt6nebfWC1UzEgurGq4JXBNQCR6vhXpzTFsm8o5TL5JqxTFVpmXkEdUV83faVfyRoiWBGvHBje9Qkpi966a",
  "key3": "23MdgYkgtt33EsErH5ugXmWuMn5oA1P6En2yWCM2mh1v6JQR97j1Ls4Y92GDrZ4N1gn3gM2ejx7zzFgsbv9vtrn4",
  "key4": "5L3suJ1PpLfSJRP8Js4eWu3qho59UHk2nxiEzhF71owWaNAUv3hNcQAW9YPdLAC4DGHhXQm2rNdzNmvwDnKfAWWp",
  "key5": "4cyNyAa7LPVFdVZiC1Z38CC7XoDkt9aUDNAQoBzfsrZ1VmzSmiodujybP6pb6ejDGyoXLP6SMJtSqJ7vpYvhfmTF",
  "key6": "512ejttPsxg979GDTc5mrTTLMZLbSwjrRWad17psrLTsy3QDawCozW5WJpn7wkmiGxXp115eniVRg6VyydyJdKnF",
  "key7": "57tLzcfCiXavqVYqecC7Y5RNmSLv5A3abjLhj1L1GDpj3SFjYLnfUJqGmFwDfgpHoYThdQDRAEcdaL6tFQ8HBe61",
  "key8": "5da6iKsCM5XsndpUSmX1urW3T2xorcNGy7GWGUbctkDWYT386BvjgCxfUE18g2ujzH8ki5offRVkT6GdycS7JFsq",
  "key9": "QNKHrPJFn48P8ycMiYPzoEXncX9joi2DukdbFh3J4dDia7FsSQGrdqxCvFUNucKUGosQfrEhmZS8GpwRF5JRpje",
  "key10": "2RBRdiEqSEU2kzvgy1GR7zUQKDJyZZ3gP9Zhu5XiR6jQCnJkxvk5jnkVFHnT74jmLxEgixTxbeg2pqr7u3Y8Ddez",
  "key11": "6FB4kcpQejuq8oob4DkMkyS2Dp6VKZHG715UWCdKesbMqW4b16s2nWGbhvSd37NRWiFVyD6y3JKvnXB1XagivAF",
  "key12": "4CCEz6XMw2yAp8j2kZ99rGSSdkMK3f3dJdXxMrc2uToDcEwBcuXaXaze1KZHNodhrjf6rD7Mkse4DB8sj1RuG7A4",
  "key13": "9awNW49PdEyDc9KwxtCdeCCRmVCemwGGAKwubg53h2heBErpQ6b2xRi3g996bqDMg22t9VevPXCVF4JRTDnBmRE",
  "key14": "488ZHfvWGLYZhvWXSsd9ZgBHFQChkiAgKPieZZUeiybvZbgsqmQ15RkFFxEFe9tuBEFAfcMyXh3yMvmxWUTxnTdD",
  "key15": "C68n4h5viSvoBKhxMtqvpTz13vij4Z8RjAWp6PfnjRatDKyfSnA5poWweaAEqEx8UXPTCaSSfy52QzdURMeyLjw",
  "key16": "5msBFKSrKkzymbiNv4etRHB1FNmgN1TQs4f4HMSnZ5dPJjAV7x4zDch62oA5TULhFfkbj6c9YMoLk3cqkqdwzM4W",
  "key17": "3dNxiTArin455kCAvyctw75KQ8zSCEhKPn8ShkRiPz9zMHLQKr6SkKfTyHJE6A8vNWKeCsV3kn5QGM2L4AF1Njj2",
  "key18": "36ZU88fyHqKNEd1QW6mUZSkr3AgfdNMLttxEs8tq2AkDPJHkknwcJrSrqvZDpWJ8SBXUWbe1isHnyyc1dkAaCTwf",
  "key19": "hvLDmd3D7ZH2z4TDvNrqknzHfMi1SBEUrSKmo8vQGMe18ernpm2mkVGQvAZ5pnmUX4miCgM4YbfzvVNCREYmhv7",
  "key20": "4VkjTZ6SfLWPYai29m8rkRWZghiUQC6NiqkcCrR7RRdAep9MriH33xywkuoT9UMCrw8GqvLsR54w66XAymuawDiJ",
  "key21": "643q6k7MTzKCMSw9m4fctHWEgGgBGMcDWAtNFJSJu2Zu1v79B4xNGdRFSBKjY31cnF3ZxJKiazoxKezQaNYh4D6H",
  "key22": "uoNWfLfmnHJS9QXPDyrWbca8QMkdDuSN8yy5R9B4ivYX4iEwJjESeBgeoKRUmxAfjzsvkETHYUegQnm7BnkdaX5",
  "key23": "4V9ebtxQE22oKzEg6qYvVECg9wNaqAW87bUm51NKhyUm1zFNe2Fg59Rr61cPTSrm1RYeocwcfJ7PZ42NZo8xwq1t",
  "key24": "2aU44r36x1hq7kCmQb53R7Rag2CWiFeBnWn9f3T9myrT7yEPkEnZooCWPLKb3nNuvh8JqfGZJPtYSEfKenbHpyyH",
  "key25": "3UwxdwZn3rE9Je7syzFD7J92D8SQFnrVpydYWctRoS6canpMFsCy6TuuRFj2QVjNd1kiWAtHw4QYy6uY71pGFoWV",
  "key26": "3SQ2THuReymVt2h6kUahLVNtfJAaqmW4PKFgP9MXym1XAn4Grxai3AK2rHf4Bw1vTPsfUS9HwcdPvddYZYaihodD",
  "key27": "iNemqriviZH7dmbyWANv5kYHS97Q7Kn4nwmwDCgC2mUdP2dHjQxzrPkogQAay42tYmqs5CtS8JeFgcLDtujHPU1",
  "key28": "2HBeXkkVDRptuCAgp1938UoGWcFU6F1uofRwPQ8cZps72A9a4kgNjVSibyaTtYJSKxMusDT1V74LC6K2nEvYYgRo",
  "key29": "2UWG8VYzQMupcSgXmQhKWRxwTXbWL7fncZJVSSYLGd9ZB7zA1mncHok6ipnaAeaGuN2pXi84f22Bew3z1yJdfF7h",
  "key30": "5UiYf6Q8aq8e9vrL26R3aac1bnVuTFxpcy7waEW3ibfKwBojiEYU3HkZSMB5yxsidmu2ZnLGC787jYrpK7h3SGXW",
  "key31": "zXLHwsgwVCSumiSnC4t6cqaNigDEUDmWE1bwCDd1bLmwd5iaSHi1o8NprA3TqLdK8y1FbfYXfZy9fKHMC5PKvSU",
  "key32": "zosvgCcQQfHhBDu7F35xLE2uLGRayXSENtH9WWTkwEJ3jBpvDWrZULscDtYNEXQPxZsz45JZy6KU3sCiJ4jBqac",
  "key33": "2KtmDCbEnkYDnRDYEfPSKiF22bVCU2s7WEFGTcbgNCwX15fGTX7yngHayh4uPDBTVF3Xwob1hghNHC4MdCBrdzKt",
  "key34": "4oRnJa5XXVv4oeG8Chotd2d9tuDWWLs2RFicVPkN2wvBczmUEYHjfct4hrTn1dd9nDXHPPTja1ycnKSgDbAa3R9s",
  "key35": "3r1qN9Yrx96E7Pocg6kjtc8VRJPAACyauChbJiUJ3nEpgTJ495pBeAevQ9Z8aVnWYbaRpRgKEiyrsQHaozfG9VW6",
  "key36": "2zEuWX58g24bFayRxyabdQR8r8A8HDXVtx9vnSdjxSj2f8qMYnW5fZBvDndEFUTUsnwKTaiwQ6ag8HuKXhD5waoN",
  "key37": "65heq6QybJsHqytCvtEtEsh3d4g3b7MgkCEcwiPs69U9ytp6gEXrcDgasPz6ZXKTMcHsLVJ1oDUFh4f2gzkYTatQ",
  "key38": "4pXPCfzuDnZZdL5JHoVtzGyjAmjkYtsD4zhZW5NmeC3GMq7ATBFcCbGREd34GP4aqKRE4urMfvJG2JtPzewX45B3",
  "key39": "422s2cmcvh6Vsr2DJXW4c2REaYd2SCqeWW8qzhUSjWnDzbm5mdY1FTFs3ZBThBqjQ1Z9u5F76oypwSxGksQVZz42",
  "key40": "4Rzgia2qjqbC5FS3Bk4NKuStJ3x4w4CFmowMDm9PM76xEc42R1roKk83BF7sVBQugXLYGgSYjA7YBgjCd7vAaikc",
  "key41": "2u68W1796ekPsqbwmBU5kU3kEyH6NGJZZph6mFnP1XZQ2zKYUTAokNUFAHa7dfCxLYEEn29g2rS9qr8hN7ckGZQ2",
  "key42": "5cnQxFjYBeLyLmGuvs5LzNVe4gjfFNAHeBDEQjCCeSXyW5otwN9Gy5XSnQJDP285xXZasiHXrKuLmunF3JFcx1qd"
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
