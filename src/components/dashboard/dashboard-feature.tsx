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
    "bKbfPrUJeEbxd26EBaXZ1h48e3A5Sbvj6Rw4EDwgJ8wBqtEnzLp3ovDqPLbdqhNysGLjXiR9ys9gRw2Y49FsjDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uS1deZ6RersLkpbfsQV6ETVZ83k8oMLzbfAdw9bmRTEYr6EmYaxW4qH8B9Qd21WsjEckBtLckwnzgALWsf7zB5N",
  "key1": "PZDfHcXoBDJpKEwsFhuLfPLaLh9VXdSBjZTF5Kxm9YMQRLo6KQsXtBbHdtn2zhcxRmok1cSyxeixKggeRb7Gtfs",
  "key2": "4xKtowCzsvtddvHqxKhC3XY5KkCg2Rut1r1br2b2GHLuGr5fvV6CJBbMNGQKvzm8Ckxaj8VbRYfhgQbu8BGZNfdQ",
  "key3": "2Ri2d4C2FQLGdfMPJGrQDbo4az1iKJqVtJ7vU7FC7GNwtkmY163BktVxT3DWBgci4mjM5khMKyMpZxydMaF6Xygx",
  "key4": "5Yq9UYspmrfLrS53y9x4fxjHUgV3txfLGnRwKGDgUZKcxudeLzLRn1gYyk2MpZL2qA4qHdSWAx1ULCKnRCkDcopQ",
  "key5": "zK67uNcoHntm3Gn7tC2i2XiqpWVvLqWV6C7Ec5jup2hnjdBEmHegitHtrr1Yg3NSLrmaGUMmZ9W7K2jELz43LG2",
  "key6": "67eWQ5YUDivdP2RvUmeAtRyRABStL8QbB7bFbzAvtV3PGDrbZW7ymem35qqGW5B7KB7wCS441z3jFipuxGFh2SFY",
  "key7": "n9gHHrhc9m8179PihohCGNpmYwxc9VqZcRuzDtEFeFY4BeT2EdUCob6DBQZQ8XUaKKthsaxHEZSLTBbqYk4JHey",
  "key8": "yvssJ1sMikcanbhqCQM8Q72AgGJX8xAPrFdM89DQQsCCMVfcQ862kjH5vNXCW5CA1YeQ2kraXpboyfhkTxT9AYB",
  "key9": "2y8KeiJS4BFH6k4phFQ4QiurDMMrSXKed8Lw7AiMPv8JSjRjc2AM1dxtUHNjoYucYMJ3U7oEJNHFymqvugNHD5ha",
  "key10": "2Hv9BXDFMzxgep61EF3qped95tLZ9WdeJjtwbWY6nsHv5Ur1YNmMFk3Y9DCPBdc1tuPRkHCG5mLkAeW3oZptm9rS",
  "key11": "28bgvNvvMo8T9U4zFgHNr9ezF1unzHnHC6a29K31ahWRZ68UsQgUXmTtt31WM4VwepUG1zQ5tHiAgPDGZagozMkp",
  "key12": "4RAmEKBZArE6EgajUvYoyBn5UUnjWwEi3fm415eer1ee6VPDnMJix32fhnx3PaP6D2QYepDEXf4NqF2sZ95kiqBT",
  "key13": "3UR7S9sxtDYVpvY2ajPB5uo57FJU87AetWSPgwPxMGYDEFYaQZ6CSptAqdmocwBFZ7prFoiSBjSAw63q5qsQ92aD",
  "key14": "3XkLWb3RHESiNjcCFiTq4ihGyq8Ui2X6h7mDZ2zmkHpT1vPoEAd5JycTg97ZL2zZb31Au2LCLnwBd5EDA22hpao7",
  "key15": "44b1UYZfEFu1WNZuduftxuGDPfuQWX6cr6QckkYbH5zA8QKvJxPfykEcc7sUmJXGLwbsBxoLcUc7vK9jf8kEAZCk",
  "key16": "3ULJvtZiBNXthknGxiVyYVxpxHAEnHXMNstSR9nxVgqapGNrFrCZSAfecDyyadzQp5CUDiC73jS6RBSPkFpv6xxx",
  "key17": "2VdcNU53fZn7Z5s3GtAJkV3jeoYeZ5xcH4syjugeZzVESG5gWo3SSctB5dVEg2KSb3cqHhGnCUUGHBBxugb8TrWH",
  "key18": "Q2AJhUfWd2Ud1o3HQJcy97wm953URt5c1DmkbqjfUsxsjZnaZv229ptHRuaGchD1pVvHNVRmG2HRaWogFoGuLTQ",
  "key19": "2UqucGHBbzb2ZBNJwmVHKhN2kNubDyLdyDP3aNFcQtDC2gt9gVT9vFJjANgkruwZxSpQseoaGCgruUcwgtsSfLuP",
  "key20": "2PC14AJF5YCGCFHKyp1bCGcCB77DTjugb5tsSwtNDtyqVa7WMvR2PFgxTZkPYysuEtArf4smbBhajVJAEyNKTMiC",
  "key21": "3CFJNQRzFJEMgmxEhLXENGJmQhNDdL7u4CzSNkyNmFgSdyx4tci1q72uumR6e1QxQtVYTgS8MhyBjq5mXgtPZe22",
  "key22": "3DLjdAt5QpuqZPv6hQpbQDtP8AagCo3KNJvJoGUhF5pmxS1cTEidrEJfnYKs93zqVU6hjBznsEq9w2MJAvwjy2qR",
  "key23": "umtvGSbp9SA2ByGeR4Y47zKAnpQ14CKRTpTXQkvx4bx4N62EPrfCexbEtTeFqRQBBr3Zb6mvVMxmDDJ4HrwzErt",
  "key24": "xdBNqNQTuc6wHJ6sEMWfX79QQmuyF1G1sLXwwADAqxwVk41k6m1Q2UyqDgfXfkwvsoeU8Uo6Sx4FjtqYFjXSzAY",
  "key25": "5Dkus42Zynvt1Lw9fdbLSqD8cAVcHQgjxwqS149zNNFG772gQ3TZvBcrvDAc18op8mg5aieW4TzPJRo7stkZNKDx",
  "key26": "2eQpr7abx1gyQ6LA4to2qUAYZqYU8C8Q8HBG7CevsVcT9R5mrV1DSJhoGotRQkZXbih4MG5Y9t6h2xEYce3q9WFs",
  "key27": "svKhQRuKhDznyfbvZWpahPCuYN3D9FoVLtsaywiPgyxv2hK2SQ5vXNP4B5qfcA83msSryxuPuR3NWbxcKKd4dZc",
  "key28": "3ncVH6nDinND9wAdmWDKcFJ2oE84uURevrdAF5dej7A9twUuYoKygP7WuzNAX1FQU7dvU8X4WeenMCyiUjeHj2JW",
  "key29": "5zvS2y5qNG3asdStsbVPfMpeYMNjU7ZFt1ghwdiSXqegWq7DQBHARhCwo5PoUN15BBFJZ115pZGAchA1TeQWzsZk",
  "key30": "4trJFzpgtqMN8cKrF78xPEHzF2ywW8b4qzjU4TiVVcfkTX3dXdMvD2VubgWnBywm2VSjtEzUmzri4bhJeuKb5nPH",
  "key31": "3joT436mapVXf6yMgG2GPmvuNGgYS9aW7cTqnPRTgFUeubWYVDVYM5XWotB3bLggzumrHD6GwPbun9jhjHL6oaWD",
  "key32": "3upbrRVB66Md8wTyoMky2HKEVHgM6Qas6jq8z6HdUAs4tVMnbfybKKtZghqmwE1qjMUfvDBn4ukdWL7XZ7qMm3Xz",
  "key33": "S35s6nR6mKaj511hpkLnDXaMWz6YkUuEUScPywnsByJXABvDcHQvNSqFB3HPksLiZLi6m4WGDmaGKgVQSpR8WkD",
  "key34": "5gSE8z6PqXtmDK57qMGnW7bcsJ11uYJK3jSKVWCFDFv7NrYkLYcNsqFGs5EVzxoLp1eY5wUdpqZG2sCYENVaCENn",
  "key35": "5ub7mS7F1Y2DzdAYofoaWzP9PRe4hykB4RTRNJiKefcdSZdtTwjB9G2pTJXsxZ9RjycWfhBkN4yV8b1FYZxRaT7b",
  "key36": "4kN3JtfFSU7HNzSDPg5ZRFuEGU4u8ULbxddjBmKDJBvm9KUTnR4wMmLFcN6JEpEp49Go4t58kPXKdCr7Au9NmCEu",
  "key37": "4tBn16o3NqoK77KhpDgi4w6dtevStYiTck53fnB9ncZe36umn2sTTAUnWmQmBgSVAPz6E5kTe7qF6b15vNWCs5yT",
  "key38": "3wQM3c9jvS8Vf1jB398nwm9g5Fjx8SxcSDChsKavTfBqwtdneqQ4thdPcFKJcBWVhubXVijkRYTNmeS6nZpvi5RJ",
  "key39": "W8SyTrWCXGswHScSXHPLqHipwGXgkqdad8sPoo5h4yVDjyrL23yvPceeLvNxcwiJAwb81rkpHMo9aVe3v8YyNGY",
  "key40": "56wQwRH1ZAGkQsXxMSBWkL52NfN3ZiHvSwxbvtJKk8V5DxfxD6usAHjVxp3dG1Y2HFpncZ6PD4ePvM1uWeeydBcn",
  "key41": "12qVZgF9BpJCdLzjnaDDyNVJfKsw4acke7sehE1rTL5JBU86dcxpREZa8M9ZA4u2K2CKgGCXMCKta1Sk5GJsM5h",
  "key42": "3WwXm4BkmBWqJhupxgJ3EhUScZ8kJQYUxjGVRBB9982n4sbXTMqUhpsqHoSzhBRMGZcAvT1qW6eX4R5V6Ug9cSFH",
  "key43": "4E8MokbFGtjZhqmL2nRwcxAbFH1kADabZK2v17Dh7MDKS72grWR9WmfFGBhAhFMpxds5dnTgzgDY7ic6s1ndbgeC",
  "key44": "vXZEh5ZusQEBCd2w1zJgjsyuEPaiZpB4T2Q2CqbfAeCHAZ7RR4ngYECumgKXMJw9SQZj547LdGZNTMDA6oqWVDB",
  "key45": "5vtMe4cYLV2DTKzVmBczoHbXhgyongurTjXcnfcHePJTvViiSosty8UQzrsSF34oz9LcW2KCWngeYACyu341j6yA",
  "key46": "4LPxSYT9xYP1DbENJdtjFodaQfuGWi1m26uJRcNtq3iPNfNyjvRPiJp9CJPjA5uFzUVpaUjP83RNZuLd8debgu1g",
  "key47": "2wsai9WRB8ybV3jKskoAbEEpKKxqoapcn8vzAZXGU1Dn2LAtJZh3xrd98UD3Ye7eh8XP8HCJ96sLMZ6dMqJn4S2e",
  "key48": "4Qs4JRZAHks9QdA54JkEjtZ7YBwnVi5D1Rk1WRmM4zRBsZt7umf8PeSqHWwaSkXU9nBX17eiyWeU3aKzvi27H8Wg",
  "key49": "2BXp819wgLswQtfaAhzfk63Kbsqqt8bxzZ8JRaKAnmramJn5tLmHA9ESpj8znE7hwFp8SEW16ndKYHvfaM7tR157"
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
