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
    "2sNhjKxvKSwdZmXCJdHNHouQWbHCiCGs5UDRfGjaJGVhbqU1TJsmdiqRM5NMhExSpq5MzZz3nqxQ3TqrNBnMu4Vi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vk37N4aByDKUxE3TJRNQvyi9E6tzpiuz8GgzLywrND6YgCjKQdthQEb2LyXWCyzs8HP9JwieE9NWhNUhAsYA5Cy",
  "key1": "4e1ZcLS85MctK1aMNx7D6zbEPhif4T9yBS1BVZeiThevj8xMdfBnHAPVmruGfaDQbcpufHTT7XXCYnqT3XfrLQ4M",
  "key2": "28eREtTDV3BKtMLpeoVkH7DpmPzBTFD7pjbLFwMXxfMbauv5irt3FD4t1whuMGymxabksL1XQ6mBXBSCgddhdQRe",
  "key3": "C4tkejgrckQDRMK7xg76FpBLxxUZkUadUCBRAghrUZgD21wmPuaQN388eQhSmoUaapeEWA2Tr6dsfquLpCx1jeq",
  "key4": "32ZxtuZ3DwqNxFEwfMHhVoVQs2ZThqtM9gDbXqPHhcJA7mUCFhM7AvSxcyDWu6CaDrYPTm7juvzbvNrmc3DJi4eB",
  "key5": "D4vT7Y6565RHZnDzXR6AfsAx7vaEwpHLP77p8wj7aa7D5GbkgksN5vAcGb5uqGGvBLkpnxiSzJZpCRXFzpP5f6a",
  "key6": "45S333J6DsNKs42BAFnEwkNUuzS1UKVyui2hU3Mufzgps1Z8sxWZn9sG5opwhjjPWVxynjWX7G7BQ2zqsHhaJMSa",
  "key7": "5KRajh7ZK7SfiUQmkGNrmfj6DgSr2n1PDypspcDsFAh921L5FZeEpMTH9rASwKuQwj6L3Ut8ebKqBeVMsoj532Xi",
  "key8": "52tirTquumbiuyuDvfdMa1npZJ8ocE1n6MQFEfNdHCiVuVUAjQ9HijgHHoSxtCQriBdS4QMZvy6jUncpE274EokV",
  "key9": "3jSgwAreC49Tv5xnYgJQvdoQTHzR1bDWM6avkGUFsdLZMWLG3KmGfojn7GYwLo6Z5PPZ4rrMmDhZcgikFw4KTMN6",
  "key10": "4Z9GagamhNuWpYtD8qsPN48fvuoe6u35dvaLTf9R4xHYVvaBBNYCA3sbqDcv6wmvytRWwuBdkXyWPo59No5UxvWn",
  "key11": "29YfZnFFtHFfHrDNXC4DSB2PZ9oSeqsnFxyhyaqi87A1YxjfDQ8VeoExf2estKcDhuT95naDGnaHxMQLfhEmSdLj",
  "key12": "FiHCpJUg85Hr3uUk9jm8iCH7GCYkq6HNs9VVX8wQX6wkaEXswrexSdk55RuupYnEDZV7dmg2pH7PSEiyWdj1yoX",
  "key13": "8hpTf3VsV4QMDpDq9iNAaz7zqXuPwDpabQe16BQfp1DUJoY5UgoHGW7Ywobha2o3kFcfYUQLE4FVAEP9V1sgs5s",
  "key14": "2rx1NP3SiktoHM7KCTLkZbUvT3uTnTkpL2wMncDEmxWdWLG8USqojYS6tTZUoQT9SMaUThRtmSjtzXxuUNzbgYoq",
  "key15": "3dfnGQ5Uwj7HSGSc5CRqpkEAJ9nGLVfV9Kt2wV5Zn6WuvZS63wgUoqNkvm7Sdx5Jh4yKuTzpvVdCn3fAWg8hTdZ5",
  "key16": "DngUzHMPn5C899mg2F6HoDgDQnio7UzQgT2UijxhLqucvtLSScBMD8bxXgwWUknSnacKWQnMKumHWXDL1jjrztB",
  "key17": "3pAtevYMEHqZH5ZNR6i34SSmzGKreNa1D5TtERHtjFBZtRDN7vHRzFCZjwvy8NXP7cjhytj29tth8ge6RnQPpKzD",
  "key18": "R83fan59x1NxcrtxN3bB3xJU9GFkANTdP8NQ4Wz49YBsERViyRih1H3w8oFwdN47uRLVJyv41uSs9JgsCPcVdks",
  "key19": "49MifsRLKimr5CVscCkU2X79d4tZ4eTD1UbVw9RjBvugbRhZcyMWQcXyaayYyfRjZYSnjmU1G8R4Lm8Hy1y89GUr",
  "key20": "63TDbRvGVXM4yeBkkx7H8z2xQogWhfZNjHMXi6ZSia5PWp1JbYzwhQo5sJfSXUzUiN3Koo2reQVK7HRxxouze3H4",
  "key21": "2W9En4haS1qXmXsqjFwGZgrRU4KnXHHGmxz3nkfwHu79mnZ2tgDgE8DToPC9WgLxZyVLvdgUotB3Y4XW2cehYCj2",
  "key22": "Zodb2eaq29kBGfdhUPQ2U1HG38H1AgQ2GshvXWTjsgnGkduSNkCV2qRWCFNLkYtfVZ9XX6DEv2maxqvBfZAUgnd",
  "key23": "NUWvt63XYzw8rkhy6EMQ1cPAX3kppBjwuLzDZhLXwwqaUYLGa1byPCaPUk6w8aTMivno5keTtA9CDvrAdw2iJwv",
  "key24": "2A29xpedPvdLfmjXwJYU9rR3uRrBPtufa2SeAHVRwubJvquTQq3c1mzkY4rqi73szGaaaUUokrCVjnEAaPzjAg7F",
  "key25": "2M8aWGkx3diR29t1edTf5GAYaKB8Xz6fdkXhH5zNjrmLh15cmjgBFP8hofvXQNKPtjLjhotHhNMwaS1kcU2QTMb9",
  "key26": "2m6BFRM1tPMKsYqdvMHtsxg3hZbME9ARkgKyKxaquvVyhCvZavgmTdgAHDaR78U97fpvjEhKMgbVAsV7MYMUsoMc",
  "key27": "2qiJNBXNArR5DZEQ9SYACVnmfDDtZUQ2hLNHquaVqVUTddQ69dfxeU4okcGfTniKkaU9VfZRmLS4skmnJCHcQqav",
  "key28": "3MTQja8Xa5s5NR8wukDj5FsZLmcfMXoZHYktPX3jGmbuJk2zbbCQyjVLnoAbZ7NLxpAPZw4kSxJzw7u9GJMUgmUX",
  "key29": "EJuDtoACBrucvRJWmU69EEMhqaVysPVHa5XDBgExhgCfctS26yxQqoTLw12caNS6q2cJrurDWSsW8Ppxe4YpvHx",
  "key30": "3PzkTQmCuJiRniAqquj6rqF7r3gSQTwcC67kShKPZQc9f7JxpHSR8dorRwRUQKLvzBVcbtpRjC2QYc4ygWanTqjR",
  "key31": "EJ3D5narkoBVhsuM7tsxdxBCfMtNW9wPd1g5aHAnMwxvYvbwussA7R5yRh5nm54NokYXXDrypn56YQc5KRXrGWv",
  "key32": "2Ha57RkQZSfB9GnefnKRvW8tLhMXN1qa1h9Qg3jaJm2mAXVMrj4Q7978HsEScwnUR9zKf9gbLhyDG6ZzBSmvR94m",
  "key33": "5PUViTqE8oFqVoA2PrbL2iAzytDyWrbfxcemqA7gUtBzm5Pe4N4nKayJCq7uZAVknqE6noEy28tGkoNmL5z4HfhJ",
  "key34": "2W6xpZS6ta3URRrDUYpWBw1iefQxdb7t1jCepnDyQ3ZQgyBUFDTLSj6PCXc37aWjjgodkEJ8PG5b7UB3knzSYwts",
  "key35": "3Qxtn54ZsB7q3ud6GJG7K5jEr2SGpxbGgC8bL4C5fG3VBxaGkBtPNbY97dSkX7WxvZBSpp1ZbbbCkKwBPcCxg8cE",
  "key36": "2fBYw6TKQ48rKFCtxJNwqyTZjWTkTeNSwDDbiJ7EJ5CW932QxC3qV6G12KKoNzAzrBFYchQHyTeKwXeM3oLXX5jS",
  "key37": "4ALuWrxJp9qbCBAyJ3mkmbfHg29hsuDd1gSY1g1Wvp8j7vehUhrWhPgA5eaeuMfT1bUquiEoehVPNSGMr1z1E8UE",
  "key38": "5xTkaKAHKZcZ7w4Y9A1ZovGfFrSLhp1o1BZCswAWKLzB78Po7u8ZvooRJgwjXWd28SiZ4XN6xF3VgfqC55pDpykz",
  "key39": "5zDnZ11MxvF99ZJhGutqR2QfvU2mHRwVdouJgiL2U2QLXV85uLjtBRxLY2jsLwovN2AmSEXWLmX2qUYp45iXY2sS",
  "key40": "5Kbj1cdt1kYiGY8bhXqV8WF3aRTkHyFS5pu8ySAQNNDBSqAj5sxLhG8R5AQ2ebwggRwDyQjJZy8RwYouXVzyo75X",
  "key41": "5cHvJV9kZ9fWnAabuGcp1TLdvsGzh29evPXJhV87kxsLgpXuFab9kS7cZRqL4aomawCPcGfzTeZyAZprp5aqKX6d",
  "key42": "5NXHRV6uok9CeE57uTjnpbCqfLSeBw6CxMdqferKkW2kP8fhT7qod7uwdqU8UZCGp9y9tSibpYVtywJNxpNBUAaE",
  "key43": "3pPxhXRfZNzEMrxcW6PvjA6mPeBKao6op7wHsAWwAfkUtacDQxC2F67BmvahsbD45ogYJzQ8dRFX7ZHX2hCyLiAV",
  "key44": "36baKFSK9B334sP4wW1y2kqBvdkwPCYNXDr6dnxbCZgya4AhzcXzj9vnE7bCt8mHAEMR7QkjtLuNfiZasXsqiFog",
  "key45": "3jy9rexxDV5npBndPBDHhznGiLjdwn9sVz99XigvQpnbyibk73ynNknDC83qgG5YPe51A5EY1UqacYbKLDFpDzPX",
  "key46": "5Qe4RYyBe2xScuYjkKS94K2KcyAvYSoutMNqV3W4RrF3nZGpQYPusYH6MVjMLYW4VjCzRFAZmBYSCz3EfPk4gnn2",
  "key47": "3ynoiRkvbiuXiv9f9EsX9eZ7H4cf3BSiGzivhp7LSrwTPRzrFxhCxcZ4W97RDj59FcKr3CoCsGjVxw8BLuGDFz5b",
  "key48": "2XgaS1GyigWtq8eMbFZbiaVjA812gAdvvR289tQUBxe1ECtnMu5SSno3UoEgSv89tFEQp7iBqXEN4vxj41LrGAX6"
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
