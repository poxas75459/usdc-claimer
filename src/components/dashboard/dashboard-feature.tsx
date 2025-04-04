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
    "4oZHW5Ucpi84Z1XeVGe5vzXPYSWbHtL5Ahr4YJcgKx6ryAFv8cVHZ2Nz7QTSo7Gww35A4XPY96oir7ZNexTmJviJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JA3RimcerYQQ3CaBDsdHQZr4XLtau6EBkUvpoNqsq7hEQDEVY5SDGVCHwnJTGMLynpgy5GSdvUPcUdzbHkSUxzG",
  "key1": "24xopMeH24WbTcUQk6UjVmX8HqVTYuJbh34DQUoSnDBTuq2fZU3H3otMbgZJbAM6vKMQsKWiZ3FH9M6bSGfjJGx9",
  "key2": "5P1MN989vJvpCVpsWHB1i9xoafMEn86mgqRHwC5VZH2gchzKTzr7TJQFw4Jtwemzz7RzvrMsis7nMsEJr5DhT6w7",
  "key3": "46k8AqWNHACU9vfbHcvdxTU5RXE7vRfU55AM5jDbk9kxVeGaTM1dmT4QmokeawTMHLkxS4XtgMWijzcXmBXGqWdQ",
  "key4": "5miUgFhP3Qvt8pbEAiTADVpHSpm1WQ8okbWD12UWytGoZ2GYDY2wZLkv6MUYEztpBfeaUPdD5Pa3rh3FJ9JbqUUq",
  "key5": "ACwVYV5JbyqgaYevoVxVzYsC33Z3mfxB1AtUjAN56ZFi6jzXQJx3vdsDL3VHN9YjXkghK6G7FYnMjuMm2KWSBsA",
  "key6": "3vHCWVNi7MwKsMiakqKQY6hyv6LpL1v7pv1Ty2z2QoEtbxe2xEhke9YBdXkYXJDBU3J1GQwRQm237WqyVWDeQ1Gh",
  "key7": "5He7apmHfE1nPQSe6LaV5z5GeuypjkM9TZvt3fP1QBui8AGvPSMqbwTsK7NofQmZ4q6meiwgMbwqPtNFx3BTfd2R",
  "key8": "BA4n5339J9VzXLByHsv22aAt3CvubLBhkwBqeV6GLSd1fbyh7dtGWANhs6BR3LjgRpVWyqNKdYeH9tZCfkF9iHB",
  "key9": "265sm4qVXW2R5d3SwQPwD3XN9Fbo3M1mXyEFLgBR4q7XWtQiQU8XvkNxZPmLoUndcaEvm8gfKTNNy4sV6Nqrp6yS",
  "key10": "5thMuAfMfiyuvBHNkpFhQBtrUubn8utj779heh1vd31YhvqKKUCnJXjym6hKthJnm9tJ2cXzCgD8B8Q8tV5J3gax",
  "key11": "3gdSKyQ8TbU728NrXtArLWzHKFDUNW7Xqndr3LydHQS6tjSsAaFFyToNmcwTaXemDiwxrWoenBb2VjvMNd9bfZQX",
  "key12": "3TXuXNxu9oEn2YBxMgKVFcoSWNb7xRuRjZn16rG5UuyXAEBFbzNdJM8NjJfVEK3yd2LuBH1UXSXY2XyuU2tXcEUk",
  "key13": "m8BDsPwuztDQYVVsR1pt6Mc9a1bXr9rVpzsK4361PKRCfjZNf8cTjgSLPeTrxeK5ufGSSKPw9o35rvJeBHzB32v",
  "key14": "2k4xcqwzPApVjXHjuKvjWKVNiQx5qhDunyLwX2KxnHL24hJuds7ZL4s9xfE7HXwVoC9vXNHZS4QwSeAqQ8zs2vAt",
  "key15": "2mcHfkWY5KhiPjEUvwGVSyczkJPkQK6MTj61ikQwZnokvh8SkCD3rUd46RrVw2DEFcvma9BpsmrMVWEKbhLRXmt1",
  "key16": "4LaY8mNskvmWCEossF9bParDCwtwaGybPRi7dC6oVpjd836vL5hHMWsiVffYi8Zpg4rwxdNEgdqVfvhLTk6smrUU",
  "key17": "4psBpHaZgh85Wkrt9ykArBBQfWpzWvcpEvHWNGc98ha9vP68kh79UQZeXux7PLDgWGftoJjTExYzYYsUsBDNA8HQ",
  "key18": "4vxt85BQ4RjpZiH1rEUf94xB6yiRWNPZj2TSK6dcwrMFpY8Jvp4qcVzdxgvqGSRPKUL1UzrKQSGPv3u6hGomEtE",
  "key19": "23ecGWuJXM3rvyczjFcbNMvH1NKq2PDXJTpGyA6fa5bBtXuyFQY4KBbCqCesE3xkzyQ9RWNjbS46tzjnJWNeMWDU",
  "key20": "3HUXwV6rLjGbehFTyiQ9c5TfAYj5bueDfvgDMYQGq9aBdf1WjUoGeSyQpFLz8crESFLjLhVvfg2i6T5dtu7hxBdr",
  "key21": "3Vstroi6YeDnH69k86G1cWvdnxjpejn1HoZ7pYxLkS2fpUXX3iNUXyVaHDT5WDAe4XeyRnUu6zEDrnvjvjXZLdKz",
  "key22": "2BJQh6xs2r8RZkWrXvYtMkVpVLdiCRpDf3w9WARRWkK9Z3fN1kxF6gDMevwS6TnVho4pmW4Aog72cYhvNToX6xXC",
  "key23": "Z1bqh5MbvtPenmtvLYizNBhD9ikHr4z1bMh491vGADU2pwjLZXugGFKGUVg3GtRodKxXGueGGTYUqASPjgjpA9Z",
  "key24": "bx6KH9Aqwxh4GUY7yXtCyVNDZ4wQt8pz2GYRaMY14gQ2332exGHb16wjpmpLyVGz11DG4QigkRN66KiGe5GGFe5",
  "key25": "iuWVaEAsnmCtcKT72EWg73GeQ4Q5ccA7sS24F1bV8cWpkdKZBF1Kbtx3TKHBMttYGSkd3cv1A8SsSdYPW5KWvXD",
  "key26": "3RSuTFFDYDK6F3VwTdKSMH1EdJWyfY35VctX2VixfpYXfEzfreCF2MBquTZeSQc1mHcr3taNST9D9U6GEU7W9ywW",
  "key27": "3mYLr3qjSnfn1F32GXKjcBd9Ytv8dTu1zK3gzQokM3wZGwqL7YjfMJ53Qh9ULbj9synLJTUSgqg4DeSt3iLu8rNp",
  "key28": "4NKYXHW5LYwMi78J8J9YqNQgahJKyymrb13CFckC9pefJ79iqQk3TizPBkit1bWfKrrzfG6teLKAQT1bRH8WYJus",
  "key29": "66ynZLNcCXQZ6qB8f5ugwjPa5HJu3kgtM7RGa51MCJvk5F88KnQJFGiNGM2AhwvfrM3Sx58rX86Cm7L2Jcaurf2P",
  "key30": "4h6R4N4FeED21yihKiVU6W7rjY5oh5EsDB53n78nH8bV2RakpqsvvCGXu9eHsAXyV9JJg14MTenDFRwCwryKownA",
  "key31": "5V9wUCRgVXqJTFzNf1Y9uXrBa3VT7JFk5fH66UUaKMskVq4pwRAD6a9p6Y8rKrFiX1UZphZoQ1yViWksKUBhCvzA",
  "key32": "3862et1DiSMZEc2vhDGuC4pMXuByxcYPmXR8pByFT1g3bgtHbhXfGDWFWzfLJizaq4nzW6BTosCf5DxADz6BjEbw",
  "key33": "4VR768WVFZ5UYt99hrs4brrMMrVMprvJhCXvPx1Pz92vntHwhA9pSVbcCPD5tPYoz8Do24Yis5jjEuRubDYNxL2x",
  "key34": "3xSYD9sVP4DncxyjdyM44bbq9NaysMC5fC4ojU3wsbysPYCvZh6UYFmL33XNyVtLDCkDzw5jSHCBESkPdpmy1bSb",
  "key35": "Hm9iW2dFKysA8ncsTnph3DXVq2QgU2UMjmpxEnVdaSsRe5oRinfJRXaBWuQ4Vv68xPcbpjDVjGayuc7iTBVoEiu"
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
