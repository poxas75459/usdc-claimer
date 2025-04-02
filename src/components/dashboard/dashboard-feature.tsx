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
    "5RMgSnrCGrGKdTGZtzgCc2sMUZCpPxBkRaMK62TRngDMPUxEPNS5Cph9b92GeUxJvsBi4zGoKCrdtQF5GSA1i8n8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29qT1rnkLgGu7hEx72qrcwLXXy81tv6smR4Puc5BXMCdD3RhA3wV717UMNwHNwxBqBRVMmvjA4qUTkvnYscP3xqM",
  "key1": "o4uNyp521Lou66qgjokpQjdYDENgrAgM3WX7uiDKvEbkWrEQbmhmRGDkMHCkDxMoaqfuZY5FDuid1y2Xv46UrAT",
  "key2": "5UWLe1dLBcaf1b3xdxon556q2E7j1GaFRZ6g8n3Wgbv11eFoRfcd8K8KyaYH3h5HRhmAXtvmLTPaGCi3tzdi5V9f",
  "key3": "5jTQeMbs1qags9wjBg39Fp78tGjUCFgp7c8zT39Jn8tuLkH9KbFPWZ8EBsH3xFixDCahusrpX8qHF6bmU7XkjMMg",
  "key4": "PymiDtFJK3xfefExZC3WiT4tPgJWpPoNsMVgeAgiADkgARRNoso4JNu6n8F4JWaRG1RmvMS7JoyjcBqft6ra2TL",
  "key5": "453d5g7YzJpwLALeKSERD9hKHqj7im4yhScHJzgj4EkVZNugbSkTmKYt27aFqJcodR4VV4wewB6qXjzrqYwEJf6r",
  "key6": "2gyLZXJQiqxE4AVg8LWwsB9TnxRCgEE76zavrEmWGjoHJ2sJvKoxC5CBdJKehH2Kx26B5gj4TKbib2ioxoTEByP3",
  "key7": "3fjnEAZnf4xCt6hGM81kQ6YvgiFu2yJgcUoau8aqsJ7VdMtMoeqGcSaZk6uKkMSwUZ3EXFBMNQPCSbHezSZH4SDs",
  "key8": "5z2k339aqwYSzeCnqZKvksnDwVN9t93V5bTHtiURV6G7VkJTibg9QgSerkPG2Byueh62DpKcdXf7GZoWmZaybm3L",
  "key9": "4EpGJ423nHYWerMfL8N7SHBeFR8C8fTfmn6vmKo5e9EPWRtZ97JD8Lz1rDsjbF2N3Kx33UwdJaM4oXFqd1eexKZw",
  "key10": "FwnHTr2Km6jhg3xpBFV2M6szH5LDenVXerwMbX4pVMXNdMPH8otzYnTvVSfxuGCGADsZsGnYXw2whMbgKRMCFq3",
  "key11": "4FCtZTPX3Q4E5aMpLKqQknHPKw6E3QXvQ4fxvEa7uoix9DTmnuPfsNyrhhrJNNRGPUmb8DGp95Q6MjysDMQ8Bm3s",
  "key12": "KYL4FNBfg2QmGE9acPS9BZ9wVJAc6Gq2Rd7txoKA1TgCsXBtxYHCkL4LjsJc8MSPqCgiPAPQo3mkvregc4Cuzvf",
  "key13": "2SfVe4x7AL9AC1NVFjp5bmBUMY5sAjfHnnQLQReNMT4EKTgqbkr3reRxmBYingHEeUaxk1xyQEHRZF5JUMFznUKt",
  "key14": "RcG6uPsdWrvSgkG7ZC1rHVeaPNT6UB8bVHoMgpv2hmfqNkKECjCXhUzuYnZS5etQzZhLMMwBNVAWuWTWyopi3Ct",
  "key15": "y2UKwTcXGsVXnnbRANhosXQy7yY9HX3bihAi9qopK9mnQrouEzAH62GBFKAGRBmGh9bDnUeH8JSXoe2usELoR2u",
  "key16": "5EpK3ssYph8yaVxpSrr4KrxGsoQcBdkyUCcJ6rUw694o9RBra3jRjfZMK8L9sBY3ZazDiUmc4J2Y1eSgs2C2X9PX",
  "key17": "5QhPobG84arLWBLswMNyCdQCgykhKqfhkdeZ2ubeciLfibUYFbXT5uFZFMtqLe49FJbjcYpeZj3uBTKfrknhc3x7",
  "key18": "57hrvWET9vW1ton2wA99pzaq1Qvg3Zooysu6uXdUEXfUEagwHET3sTQikuNZKzvdvMfrw6tm3TYX6fWBVdwzWWKQ",
  "key19": "2R4GUHfv2hamPeuosuWzVBfiQRZTFxDf8pUQwk4TRwumgXhGDbxCKzSMXBSdJJdsiuNiBogBRcpjBDeHgsjVwgTA",
  "key20": "aHZe9SQtqLxFPkPPuzLje9VFWSHsfckosrtdgqwJQFxj8eo3pHfBptaydrvmPuxu7F3rTkwXd6tq7ihSCk6ZTRY",
  "key21": "4BBhvMi8SNNVEpgi5aYgJbhtY9dKnKfakprUhKST4y4E12LBEj3XHpw5vNxXmokuqstDKTTkUgV1Mw44ZxdtrmRH",
  "key22": "5di3BbFVdd3rkhjcUGehEdGFucsWGsNZ15p7rvpp6AT2zqfB3Fr8W47AEz5YNKsGsZdYhTsDShKYTgAxMr8GEeab",
  "key23": "3MgcLS6oXtzyaC5GE2gGjDgTpXWG52YKkjkWg3d1CUgQVmtVfvhnvzVpwKCCJp7cPziqzkBtuWha58MJs9jKqzov",
  "key24": "5ucWDgqmuNh8XvBi9uM9jF2x9JdJDhwrCbsnuz2MnEALXC5f869pHHSbrNvxEviZHomEAZV91ATXhyAu8Lo82EaE",
  "key25": "5LSghhx6uaAEw6j89eN2nfyHkTUc9yFH2wVg9wNNzg4RSDv61xRevMAxDPmVXWn1K4DPH4bW43GpSpJeEwecdRTH",
  "key26": "3SL36ZsMkavuWX1HWzN1KDiDKHySwA8yttjx4tcSecVTBXzVrMcWSb91bX18EbCaUAK52DMLtEo5eee4r9UzB6EM",
  "key27": "2yYbZWpyPVdQEbpQ4uQkXcJ4ANhmSWgZYVywJpVNLS3Nm8hmJ3nPBytzpVmNZ2N2CChiz7gU9tBMwc6thmEVnutP",
  "key28": "2ZiaVXe7VHa7poVCRcHkc1uVir91KSbLfzgxCohkXPPaWJAgGwy2UMvWZ5NsG1NtZnbMmwELESyoR7XM3iPUJYAN",
  "key29": "3ETXJxL3yeRoGaSGeBovH4qCp3yRQ7fSW5gH2FZKWtX4t9eGCuQQyS3v5RdFKaDjr6tFQX46osLV66Vp8NAncaem",
  "key30": "2EMHniDUVppjyWaaK5NStiF2XEr6Cj3keWqBH9UFssmXcT2XunkKUdpeYvRXcsYNpQdY2zswsiWUxT4tU85GHXSN",
  "key31": "28BQ4cP8ngXfjEiA9NbTnR2UGWKe48W2vzPkU6H4ExuKUwbxDKhRjz3M4NsZRUGFz1DQuXdjSmncfdYyimhX7UKp",
  "key32": "2crWmPPZGLxwXmFJ2JpVahJT7KaB3vVeuvEnBYU94oqfwrHdeVPrHSjE8FJVS4AvA1B96KqL5tGHxYSWtNyGrdVM",
  "key33": "P3PgkJagMRNujebVScYvsoKuM1x3yu1Be5y1m2Wq8JBU3Rfc2ht2FQt5oUSCYWU4feDS4Jk98wu1LAmaxgwbHEu",
  "key34": "UN8N4qz4tsHuqXgtqEeaVvBUQ8t6vy6TPktHZ9G5QDVY4RRHSxrYxeWGxWFsqVCNPgPSosPwEiLyCaNXeNYZn2a",
  "key35": "4MXPpfj8HckLyBuTixxK6SekWb3Cf8kNDTSDL6kLmEh4NV1yNrrhGRDG67TjX2sVPYZp5CRd8MdiPJ7BEaTUgLDJ",
  "key36": "Co7GqYkHmioqqtuwT9Ugfwwfz9Vkqt9DdMnxvZe2sXEQWepuK6zKm4myWiZ6yXh5AeQ5WitDRp52jmdXS6zfkAU",
  "key37": "kHNQcrmsTUKPoVAZ9ixvJbGA6Xyn4rCddzPKyDoZiMpxnewtEQbgiGcZJVRvhufCJ58pVh1VVowQA7syihMxfqp",
  "key38": "47eWJvXRmFFxrb6WyiJV4zvSkcWrrvd7UpN8z8qdMbfDyQtyTLGbGrdPKbapkmYhFcJWZGy12TJfSc1A6Cnyfgin",
  "key39": "2qaEuu739dUryAsaN5VmTPp6RPuiddskDTa7JRSwZr9MKZ9UTBR58KNt3qZs7bZCd68LwTmKzxDq8exoLSNJScFW",
  "key40": "2HaEcneEyAnGidUKyiUp162bDW9P9ZumVJAMw3WASqjadfFQTcaWtG4MmbJkULYhanqrDZWHFpRAu7J2bszRefDx",
  "key41": "26fXjATVQQyzJ9jmWNQf1tCsbVXtFAj9GrPK9U7CgKkVjZNPydm4QtGtmRkEVCB7RgNLqQsyenSE9Rt9nbWg5Cio"
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
