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
    "AWtUsGskatLYpJGf8tX3UFsgSmePc5U3BT6GqZ7rGSUEuZhttQFEHnAxhf22cc1rR7RCtxBR2kNXLorFXXktvkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WFykU7bF7ssMwztv5Sw3VJeYgkAbx7Cw51p9ed3qUUQXy37qytm6s4ozrBVjL6tFQN72YBWqXCkDCCfjQDKrDoh",
  "key1": "e1yyvbuAmXjDHVRv5WJFfihd2oXacxFFvF9reAcGQBtNru776i7LXseGfmwDMQEyqRdCr3FfLzTe3aHmX775kRm",
  "key2": "xva7iYzkwmNG6tobcvAz283cdkmWda8PA1HqgdfuvVo7ehbdzi8WXe13UvPD1uBF6Aishkdv7bC45h6hvpa61z5",
  "key3": "5CvFNFjq3ECTgbfAcjurow8i2gRCfxH9HRh2QbuXmPZv9un4yDN3c4Js7M9LgtCC1Lz3CdNDMvqmzqWiKsUBYLEE",
  "key4": "3jNUzyCk8M1WRhZ3DHgekUTjw7HqU7jYpnuLHeR2xuUWjGU1q1kfPvtAN8LrsU7aVUbKkC53XqHTFtjxkzU3u8SL",
  "key5": "3wdbgpzmHTsfkBmzKYuoRj7x8puQpnJM7DMSWk3DFYP39jEZWUUZP7Ay5Ut6US6JmMCH67MXpT5N6jwFuNTsxisN",
  "key6": "V72Amrwtj5ER76GveC9gRp53P5nbyEdAx8nd92CzvJ9FsWmLWQDi3pfBsvm6yFsAmWRGGdQH8sry1XK6WGp3C2R",
  "key7": "bJQkEpHdDZAiYDjaaSpbUFgH5NRTaN5rzodoeNDxx65fkiQTxeZNzrbb4V1fxg23rcABtZqkEGLheGkR7AgUn1n",
  "key8": "3ciJiZuxdfjjHZjvDUSCKntQ9A1XjGK6b2bjhbARsTmA4hCJmRn76sPaYehMMYf2whAhEtqRif9wqYQsAURiE1Vk",
  "key9": "4u921mGJ4iugK2JqTGQfT6qjSBpQkXRaZ9Ev4R2VFo8741FEpQ1hXFQ8LT4RgsEAtHjWEhzdjrGVu6y1ujbKXt7Y",
  "key10": "4QyFjAwMbrhD97mzbNoQeh7EErjpvagm1sbRRxf5h6QZK46uVcYQy6Ka6KgXs9cit9W9dd3LfqrMY4rrxP4Pa3Dp",
  "key11": "i2u5zKRQxAtXzeJQrFAmTcgk8Q4nND8gK78Pp5dW1ofovhoN8jnQPnJWkNUWSTDp4aALzTU8DsDizJvTtaQcej3",
  "key12": "4DM2GptybsCm6DaYEFd89A2yt1d5mVyHDXY31nFTw8AW14MXo57GQLncTHNqXVjAUFh4mWhMDCqh3tmXMLD6MVu5",
  "key13": "5p84rPe6Wyj2CUneKU6qJqznb3Dz6xTi2K7Z7dp78zvM3BN5ehxMqt76DSWEkGkJ26bmV3LcCMYndcgf3s44F5U5",
  "key14": "NXucCqQktMjNw4ii82ayv7X8LSnsbjbkN3HRbXxzcHZPaNEcFhx4i3Ekoi6M6ve4rGUhhXit8hoHfy81S6AM5mw",
  "key15": "YBZ3zvFNqPnSnYgWvcQV5qxPePoePMqnncGHXV4tgFPtDYPxJGKN8zc4c7qMwG91EEB6VxPj1WVQbapRPwToHB5",
  "key16": "25VPTW8ZDvwEMtJWrUHrudQrB3nFcdzB631gateWBUMWYBvxPcXcZGm288zmMLSJJB7K2WQFrpm5TCS4kPnQiLFe",
  "key17": "3wqrN9XJYK6WN2mk8EAQ7JPttciHRLHGPGoajadYmTpHTH8PCKmdv4zacW46qNinuMprFNLmBqLq1DrZuCBBvFvb",
  "key18": "5kBe4CttSdDXi1xXSt4UWtCZzCMHkxpuYuWU1pcSZaZSckcyCbvbNH8aB25FPVqLwkivUyefhTzyFgjE5mqqxzMT",
  "key19": "4P34S6ugaQfQTkTHRaAL14rFFH7ZoLYJXRA8m8wSRvQWDX2tL4PkjfZv3HQaN2CoC8fjbRGEJ8X5uVZdL1x22LTu",
  "key20": "4uGjsV7j71uZ9Jxt4W9ptMqZ8eDCJfqQiZ4MJMtDJq4CyX9KxmpLC732ZQRU4FLMceB3uz7eCMLPpSxdz7sY9Ezh",
  "key21": "1ezoKGQHrAAA7MH7TCqYmX6TkTjwz4UZgEpKWWNZcrfay8c5gvzw9fiVCCtaDuZPjwebafCQWHygbRPeSG3N4J8",
  "key22": "2t4zCxDtrYtq4MkQjwvp6UnRM681nteFYj6FhLWzQnJb3W9ceNZ1xUst5fspxMJuXu2khmbWPdFFeVceBXmFhNYo",
  "key23": "5EqrZ4Q5HanzReEswjJNZvZJg88RAp6ZpiDuSMwRrTw5gtin5JRqAWdHPRPshARrfAV92EVey8im6LRGwZEMEift",
  "key24": "3To7BbtgRUNWiGYTeQcTtNbzQf5jGbtsmUFGMD5fAPgNoxALHMv4b6P7jEbpuoXEN1N9Az8zep8275DSdveVv9tm",
  "key25": "DMu99539AimJkSp8YaereYa1sDnkWQWZ19thTRiej1v3A3Hdsg5bXa1e6Arn1FdQAsy2VqMbw18Nm3er6Bt986x"
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
