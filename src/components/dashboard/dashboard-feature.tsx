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
    "4GmTumVVM4oky4Y8SYRMz7hkQ3JvBz2Xh7VBJAWLayL2yQCn4Lt2xkKct9o8HkYjzP3uETfLpkx8SyqPocAkU8Rk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KXoKuxmTHpRuTP1bjYJwbYb7FTx36jkzUsz1p2FVf8Bp5GrSuXfSoWpn4KPqkhj1TPnLPMyAYZ15YDwfgYo2MeQ",
  "key1": "3WdqxuqwLLPrW8mtTmTvY4z83RUYks73KpZmCNC4eWJFfWHCd29LDzwpUKCFdprk42C1F2BGjJBTUWXAycM2inGP",
  "key2": "3NHuzhm91EbUTDk188oGUi2ipkXY1Us4RHe1vBjHDzRPuRhezc7GsNRuXsek5YEm9hRTqzpxwHhAbAtMiAdWqXpa",
  "key3": "wEnNfC8mKKE2QNdZab122eysNVb6rNDLVxLnX8Y6h2acjwyw1fs7BjrzpKL5Hr1jzvWBCQW1hd4joiexvTftfpt",
  "key4": "4nuCvDCgxVGTetFrSUCq2psStnTGk7bGJ6H3TkgVqKDyBjhoYx8ZkZ2QtV8nQdTYbfDcvMSeG5UBuiyFMCLPwRRv",
  "key5": "5zfR6Mq5iAsczJJsthp4atx82JjxNGjFyTEsgLR2LbzpUvkCN4n4fY3aysUjeC37ryVoh3HHrnrRyoHMAYR231RJ",
  "key6": "5fGiFa9Zbn3ErHc9dRxvG6J8K3Tpbe1MvvNSUF47KRV1fzoZVqsBXBw3iBC4BaRD9ESewoM84FNghHhdGZomHhWU",
  "key7": "5r5MZuBH2QdJUGSXs6iMq6eL2Xv92hCSsBxKPFHKUnk46EcKLKns25me498PTHe2CW1ef6EUcRjBKgFTNN1snApD",
  "key8": "2FbkoLjoWKEsJvvjRcFGt39mVQSLjw9gBNXj6h4F82GbHvU3ESNZaDEiMLrMjMgkk6ENBaWjZEcmCFktpceNJYGX",
  "key9": "5p1jQpD2v62fZgywhNKraxRWe4sehcmu63zXYz2L6ZK6LJVpFgU8d1n7RsK6EHWkh6cQLxwC9VbDnJ9SZA3SUAp2",
  "key10": "4q47vZ5SBM9V179WBVja33YjJwC8EhRt8QKw12moxBe2pG9RszF6RbTxg1HKfs43zGCkqL3Pyc64ERtFQFuWCyCD",
  "key11": "3HquTKMSPm21kis4TdKzhSM9HzS31p6Eymvhbr4uwLic1vYpX5kAZtg2mPHYsmAgTEcrCcuZCPaoLbUAKNNpF3iV",
  "key12": "yQxEU8ThMKddgScXi3DpbZFALp9cgT71jVY9EX7jBAGrCNXm8PnqfcKQsJgZJdKYX7scCjV8EdghBoUtxh5kt2d",
  "key13": "6iU6SV1PgrDvXm3U2jc5jPH6WBD2uV87FnkW36eWpNb1Dfd9yCnX2TL1QhwbbjcukWAqfQJNmhLDpwBAH6X9LXi",
  "key14": "3cnBhwePL98A5wVD773tYQ2GH7hfv1GmfQsSd1yGDVhg5vr4TCoWc7JTv9Z5UZ3QF64L6JuuWrZL5W527GBmw8tT",
  "key15": "52kVENQDKWTzXBZRbuUWVLcVrXVU2CdtPVj6AoLceYmAxtRfhWz43291V6mUXepK2E9K9jPyUNDhjyWVSdPbnkbz",
  "key16": "31iM31PgKA6GznQN4XiduFAk8mnHkxt3JoBMs4NrW4ZvK664K6MsCFbh1VqpbWCfThVUn8tu3vmxYMTTDde4qLR2",
  "key17": "XjQYGycrKUDSxK6PmzJqZPTkqM2UxMRayJHtk5ZnrV4eXVJu3C5pWrdGFLorFasvf9ehMvNtRoiuihzvWUsqKSX",
  "key18": "22GSQQLEhWeGRF21dMCLEokb4G7wgHbEvWzwCqV7zosoxVFjrrVo4B1eUx4W9LisvQefszfdcpyV7uM9f8UN2dAK",
  "key19": "2dN1XfYuK4Yb4zaHE6SSLYqSxCKJJSEKBDyJQjP5inKs3RoADTCNvCnJKeVAc3mUcJnLoVXCoZahdGJ8iU1Cw1Rd",
  "key20": "2j5gFXvDJ6iEPXzdMKQAJB7SfgkMW3NrEyZQ88cTJ6AXRzJu5weRkQeve59q7SacxgcxPKEnwoiEX274NKewLqXD",
  "key21": "26sU9Jpzkz9vp6WGe9iPZvSV7WBV2JdfCutZxm7YcU1DPLk6ZmHFHNSg856vsukbyaMAb5fPcFyqKEUoicqKQnqq",
  "key22": "4JhD8UzKcPYTCJ2iVo83bds4NmujLxjZaU6teHnKRyiV7kfnL1mA8fuTncz5J65S5m1TUBDekEx5imo2Wd8Edw3W",
  "key23": "5oWizvH7sRY25LRGkKto65KjRchhNxLaxVLwFoTBRUC1cfVomiZqfyT2v8dDiouTsAkjFten1cLYty9C3jDoer5j",
  "key24": "3r6woCSXPEsC4Y1o1uYfNqpT1paYLfxhSM4erXg7i6zGLCeqQGQKdJSZdQunXPeocgzTCAumyFhv2Zruj3u9JNtL",
  "key25": "5hMn3CBDKrW9uvD6cD82VjMaj6NoxzncK5zbjQUZQEEGd4hPdZG9ib4YHTo7KGSSDH97faukMLPYxRLCfDSHHbUB",
  "key26": "2QXS5vBNLLWr5w3JGXw9y7WSGYXafThuUhXVtKUFKQfxnbYajCnjo72i2CYkoLaBVXzEb12zpZHKywHfCmRko4Bz",
  "key27": "5raU6uThqoCDUmwNV3xRhjBsNPVCLT6bzrriutWD5yKgyFFtsJybYRa2kDBKLoHpqyVCkU3rHmK77epp9tCkigKy",
  "key28": "4yrhRXMYd28MHdMpvhyUx7nJeRmx76NxWGC7XViLUHAmkhuWjUMrTfUXfQAb6SWCVh553HmjoM3GjkmeToqBfVVH",
  "key29": "GbBhWdDrPfZtEmTCgULAeq8XMSiqT7ouXjzeLLF3cp3RH1Pw9rmjxG3UDqhtYjaPir593sN1CTFfBK8Q4MgwWvG",
  "key30": "fiFLtEGiUepPTMkpJB2sMDV22E2n64sDJ39vbypoonPz43WToNpzxyTbBMRT68rbKeqLVQnrA3G5MpnaVcyFdZx",
  "key31": "5Pw9o6BwNavmYdbimY1MfrLPBwvdNjv9qYD7sDEeYBVBzuHB3Cw4YeaFFtE1n5oNUNt4mFJLXyKQHNJfbeLUCAiE",
  "key32": "58C6sTTSWoYGqPSLKdKSd9rSPmzTNYp7SiSWQEsmPRHhEuaFxHW88aA5iCiFzDCE7b7uiK7WhFkkqfmoMHUsD1TB",
  "key33": "5YyJcGqu2uh8hS73RY8UDJchbKfYUvsjoBejDuVQzfJDjFw3zuWRMcuMJBQo3gPPHDpQRkvt3XAXwnLndwuHx9Gk",
  "key34": "5iTcgu79iowaj3yTx2gMP5gisgXENxey3DpvVmRsx7Z9TXe18z9dmTvhffHzKn7x1ZYbwsHM8Yy3AuLzTexMbdjw",
  "key35": "2gQrTGkR5RMDkNu4gsdMbvjiPNH7NvbjFESe7i8CAUz7dc7BUxok5qAJJP7gaogKmBsrkGXvkb9Rg429DCkd93Br",
  "key36": "5FKTXi1k12NKFHs7YXfjshDfKBhK9L22JjcDF77CEzY6hhsYGiPawToWp2Ws8mDBye81dANFFHEZvkULioKBeND2",
  "key37": "3tpAukyfmvfTo9rrzwcRwqzHBTwirQUNL2kW2MmQx8gK3PkG3QzyBo11dfpENyFDmCQ1PNN3MnUpvvYHEXZma2cL",
  "key38": "42wG6ozAf5NqaiPjPT7Sj8gbCEfAguTGuGoNrNyCwKv8yWzmZp9Mv3y8DXMNckVqqmeerV14gVyit78VBkBDHza1",
  "key39": "3gWMnUxATjTfZJTQxVr4e6Cw5Kq51AeJU28bCQB8gAj36kNqSMumxTEvn2viRD5aH8euBeFwX424Y4LjDME4xhrp",
  "key40": "5Xnaiwto5QXUAGu32ytfGKwtXtUz4wmDLnqLo5BjxfWGgaXd2oUqT6fsfBL9SMm6EBZTZiW1h5oswMxUP5j1yK9g",
  "key41": "5hsPQ4EL6fuPSneTFMi8CVzPHYcFEhnhdnWmAhR72Jc83yqkFP8S6w6YmnJ6RVNDNDG4FFsBBaBwkybRAcKC6mu5",
  "key42": "5QsdmoM3agL5Kct11ZsX9rB55QGgX1C4RfdKPomEUK4f9DrqCCkanqcmFqYv33mfHPm6xPvhcrQwKKnJqN8qhjM2",
  "key43": "3dCNfBL9aeaBcM5skEshcxjhH6fquFHFwup7q1aozVp1buTFYM5sDzeHeciibowj4PSqjFhcHRgxLegbFbQ6yXdA",
  "key44": "285W3xJ9otFqXfkvXevDQTc9Hsx6FR9XqsfUhEf2rneBhtwUM8oe5CyaJjFfj1e7m4oAZ8ENWoP8d7S9p3j7DiZp",
  "key45": "3c1exssAufjnoKfD494tkGEBGXMAun7qM1EJJSbaXMd7zyiMXo7dGv2rMd4XE4VUSZPHJnsZwMfiDyTUuZx5rWcQ",
  "key46": "5eXT1YKgJTHZiNLoJW7p9pWdcoH9ojLJzeAk3MR7fEyKFz8yB9KLMkXRdsRA7wQLxFaxfswoKb8t5jRTgGB7W9Uu"
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
