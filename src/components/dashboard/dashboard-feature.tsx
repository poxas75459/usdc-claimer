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
    "5a9whYYwh6f3fCDHtstWyqTxUZfmiDfbicbLwxRhaR9MK1rMia1fAk3vR2she4vtMz6fLAkzfbSNEwNBANU2S3vj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HvDEv8sqjubhUSzPbX5of18vYKUnz5GDpktrv11d2DCY17ATdHkv1iSJAWby8KRbDchvxTKx6N63h8S3QXQQCsN",
  "key1": "3tRCPerJQuDg8a6tZj6bLoeiGQJcrkRUPfq94JjraVdiMWBuPidV31sq4wgxKWuFLTdWVa2fKMsx2sTSNJQRaCKP",
  "key2": "2QzPUGRkTJhUHWn5W3jphpcAiWGEWDv48Sr9HbjyZ7up3nx2LrgM1F4AMaGSnXco4fuHn1CBup6SGt9FNKqMHj9r",
  "key3": "5XVeDTsQ8dWLLmsBUdt3umaFdDjd2z16x1qHigB4vQyEkXK1UczD5mttygRZ7qacEiAi3s1V8irCmX2dXekyJjGN",
  "key4": "283aHhsh4NcJh9LY9iAopJTWbn8HGCQrJ9zf6C4RAVuXpfE9cek4T9RbYHkGBiKtTziv3duQNjDgi9tLbV7yUsor",
  "key5": "4zCShVMb4uMowFDzWucuth3CuRCFz8y4wzZ9zgoQ42EzgTfYjki6o4dWBx6UR38ZefvhJv4z71ruP2SmK4mytC3x",
  "key6": "U92YbnzHHHJrnfmE2pgwtrLx1msmFPxCQwzjrCYdiBScd5PbxGGukWw7V3cGWftXvG9qaRBZGbgLnREwuhXvafR",
  "key7": "5aDu3rqL8FTbpXa988nEVdCoPU9JQjQY2uHyXoHwwcEmCawzxVzVq4WdtQiKiAiSpgaNWnoZMThgZKh7rEBoyjiq",
  "key8": "3B3XB8WxawSHXBkZmkRaAH8RAMyCY6KvMHD2DPEPagXagWznrswvP4n5NPEwgC2XwGS3wRiSQivfdjzc43FGTEnJ",
  "key9": "3ZSv4smvzqj5WJuX5u8Qs1hX8r7cma4udHrLbFpfn8uT5Gft6euTu8tdaZvXt8BEa6JdMJqK2QHEsX64gMPvM8bD",
  "key10": "mBwV1VYEWMpVncfopaRo4xJRjTgeN4cmq3oRLuLqZBkZ2JhExU4PwMFREGkhoEXa8rGaAv5XzDzMAvrzqKYhVkf",
  "key11": "3tZ2C7xcvsxj9HmiFE9BrAgLcm87q9SPefvRQKMnWSLwYTWERNFWJxCBvyzPe7poUdNnQz73QuXkddvunQQFu13n",
  "key12": "3c8i8pjxBWNWPmmpy4H7LJNuAfvp5w325ZYCrU8Uy3CQNeA9m7ueADsqqHJ9paJeHKqB6GmXPbx8S54yNoq4pHQW",
  "key13": "5JccVJcKkzqEv8LkByNq1RGKsuVPpHyQrkcMo443DCD6rG1d6kGQUrRePEqoEhpNN3di4eyjqb5MhXfrdiQU7NkP",
  "key14": "5qX43BWJge9baqeZZLbyMsufc4VxhQEwooJoG5pHzHUP1RLRTEAo5JJD89ipkwqpLPG7qnKkqd671c9geMPPEcZF",
  "key15": "37o3cdVXQM447R9GGsS8oaPnDW6fpqkhiTQcSD1UbM9CGtWrJ23rgh13KQLHBqDMdVNCT4FrMtbBKQs7oKVjCZua",
  "key16": "5zA2DGHVYGGssKVdYTWvsgpaZ3eVD5ZuXw3fBi2tqJdU7gKHVppALd1g7TbhDaR4tPavYNZASv8G9dMUyJxTtXrV",
  "key17": "44EyXeZ4QsQGfKg4Jz9PR1BBdk9LBSVwgd4JEBsTfrzAAZnKirKGALnrXMsZRQoUw5FwoXLPwQ8gArNQMBxi9YPv",
  "key18": "3unczYpQCLXJL8PH1AseYJLcbzYAV6mazzNmB28fq8uUsBhyX2fuj4Cy4A7CepGFqx8eZd6RM9F49ncUwbVKCevd",
  "key19": "7qS2EzJZEva11ThU4VxNjFCv3fVwaonzuL2bWrAMQ3BHP4VezjvqBZbJsyzZKc1hWF2r6DRpGpratoYTWWf7DG5",
  "key20": "3du9ULjpUFjcWLxx7z2aHwFuK54Axk7mx9hS3ZX4EaKBRaWv3DJGhENhbtfVipc1gjoqYqj2rgR68xQgd4ihsFR",
  "key21": "5KvypmeG5Gs41ck4Dp6DBMLhWphp377DYknqqwr4N1Qd7wSw6WTqkVMM6XLwGmW7vk4mVPyh8RNXKMcHJkthZc8g",
  "key22": "5wL14yevGsXq6rTcgfkva3ck3ZGac2r5T8Lbeid6gCKkSZP2aWBbrBpT6NdubVEgtjGt3JycxHg2sd4idmrvpkD1",
  "key23": "2qxPB5tMvcx63n1P5A74BJwq7eDXajaT2puuArCbv3A3TJkbkFk4KQQt7h3PkuznEsDSaWsjHQfa2gak3RYmSiJC",
  "key24": "uUsWVXhRkAc2Pxn9uWUxdkKSrPpGqFpJKgkUKu9G8b1kty11Vx3ergN7hFAYBAPwFzHAAyVSYpGaQAgUJX2n1Va",
  "key25": "5Wkn5kpvekdg8FL4pDiN1Zrpxz7UeDHGpHLPH8KjkfP7JyLQBa2KJx9Zi73eVjPpHKvyvhEGwURVdJnZEW8UjTn4",
  "key26": "3FJW11K8HvnkNAzMq84iNG4jHwcsi2Df4sE93QFwzoCLKVyzfuVa6GTDiUvE5ie4XeeQqFvJbkZhKqi5aM7dtnxG",
  "key27": "5Q2RyAK3V1bzegGzRSdbDKqkHDupqPs5SxvxUujLrp56QW2EDQDSiEEQWjsPLbwbhomz2NhpiJcksUWfZ7L5fdyJ",
  "key28": "4vi1i2jz9TKdytYa7EbuqmiPCgzeGfWLTpJkMgy5jr7Cs2xrc6mJk6eZ4JCefFcDLhcJvHpGSS46wBqdPJirKu2n",
  "key29": "4yh7depLk1zA4vm5Yk9AtRBU9Jx2LV1E7hhjwcMU5SNFM2qN4Y4hwVjEvvcKmjd7XuJxxkzbwqNi3mkdtn5sNzpi",
  "key30": "ziowMCKzRHGSeRhZ1jMoTk6bb28LfeG3MVfvubvtaDWjdNn46dzqctRMb7bKDPV4oK6NU1t83m15rivRyHYf4p5",
  "key31": "4rm1i9AyJ5dL5k3q6zmrbBe56eS3wZu7SfPv6bWsm996d3Axp8Ve29RTppmWSPm9kcodfrxHH4mdVycjfBq76Ap1",
  "key32": "5RGF8FJGTJ26Ue3UJs7esBi6DZz2RMpDFQe65XyhHGssmCCrgbD6uhVoh1vFP14TRf6z4wrHxXzX5vijd53oAdTg",
  "key33": "4YtyLuNxEUfqhcM2LAqVkCBhSG551xoTTXbrrcshSKs5yek9nWzEW7cWtwVanARWDKHdEMfD8v7B1vzz4guNTcYu",
  "key34": "8kViEFhKLf2ELr9B3yYu5RtqYtJjXCDVtYTmwfHNdaBSY2MvfcmP9SckoTxSEQkyNcCx5t9qkfXGcuE3QiBwMwR",
  "key35": "4Xucq5kSPzxdEq2Ayu164QyQR8CBZzmWGNGiTwKCB4h84Pfkxgkfpu5H3PWY9XsYs6tN6Rs8vzc8iFwLxwA6vwPb",
  "key36": "3jgbfn9aHGcyjU565voVhW2w4ovEpBzaAd1UScDbH9j93hD7jBqErWQQPE2Yw7azAzGB8CX1FpEMcTnigzeSFqcU",
  "key37": "32r62zK6cQfD63WAgQi4oJ5657WG6DzekWMFukPQ3G2kGnUQyQRWJc4sji6fazvu2V95T459diYpXJMYw7qvWwwZ",
  "key38": "3nhuAiYqpQqYHTLPTkGmEGzaZ7gBSR1qbjanRxRzXzURGzbVr7ywGYVxMdS1E5rgStP8DrMmRUWZxJKudinRmngt"
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
