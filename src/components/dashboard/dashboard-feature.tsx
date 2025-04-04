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
    "4fAZXHYT4mhEMEZfV1RhpGmbFPmdKa3u8GqQ9JBJdDgtSmArtHxmCedSn33qcwGTLCWCFHQDYKKM77no4dP1UgUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SKMq75W2vSGooBwqkitLYKmT25ik6MLCo97ZK1hxD4A27uuJ28wfRFqo4Ak9RWs9hvHxn4XHyzK8LqKsNuNMFuc",
  "key1": "3ovENKNVP8y771BBjfnJHmVmVAbqoXaXpoYF8Zgt3Nta8qXYCxqUxMbMDWKzMbYwPFgxZteEamHtCWtymYEhdTD3",
  "key2": "4ksR2rztQNv4iaBRtKhuj6Kn7ZtjU4cgyK7MGSJWZvCUzTV2uD6PFn8Amk6w1iVBYoQnkSUST2jxahhr36BQW6Df",
  "key3": "4L3GX4R2fSz8NqrGKeuBj1hpLFu672FeigNkVR1pmbzSqpNC13s9JbkDoinNXXqHhmRo4y2eCgr689zZUKThg5gt",
  "key4": "mPqhrPqCHTXCRs4zJDbLMVRfskJ6VRfAZyT5C5iongBwEyifmcBqBbseA5e7wtfcmmiFQvubDxDQNfNJKcAN5T7",
  "key5": "zSNnA8cXbbeBU8V62adizb1R4mLhmVaiR7KDJpScaeDP4mLxAZtTVvjZgGSfPhtPgaPv95M3fYPZzb1Yze1rutK",
  "key6": "5fQNCPPHZPoQviK7oqgyKG6GDkV8Ra3FA1sLjw4tHpXxGWLbrYJT1GuxXYagtBkGHwGJ3GHsnXwkZZEXRnp7z8mS",
  "key7": "5w1daujzaivJ4Vbsowm8QbCt4NXQn3LbuGtbkwXq9NGJ6uVUJ7ABo1YT1nP7ALbA1uWiroUvEUA6HwvxFxZ49wHb",
  "key8": "5CRz6M2YU4EG2MSJd1RzoVpqcuh96YUDCAfZHwTkV58WWmPqm54qfBGNhieacFhQDdTeD4LwfF7vSHBWewVDq17t",
  "key9": "493Gb6enRHxbnVHd2bJmT4ZrpUnzNGy3Zxgpd5465fmQhg8YbNKpq2ZGzW61inrw89T1ANiQCzow47Nv6eAC7NNW",
  "key10": "3kkFKm7LpkxkBLLbSWmBbGqWZeLsKFnumGcNdHH28HsJ5s6WbFS8DkJ8vRYpFNYaFBrvUPQPyaxV3vfQnwEQECEU",
  "key11": "4JKjxcuUuGbibrPwdjbTY6ygNW422SbBUURTLqPVBCd2CpvK5s3At8BK4Njo2C1NN7Ub64MrtrSXuzMpNFmw8KTT",
  "key12": "5cYk1XjBwoD7y8v8mVd7TQz4cWnh8rr6XaNwJbJ5z9mV8kby3mVtyV82sS9zPqesyW4MKJewjt1kKscLycHTNpAo",
  "key13": "5ZHP7ydkACs8fuRaoauyV9jscp7T52PYGjsMRy1BTm8ZYYoqk4PUxGkHdybxf7e72ZmhmwbPnUfKbUG2vh5n6gN9",
  "key14": "ZX1ceNgm5PzmMGur4SYpcydUR7EhRu16ZYwbCz9mUBYkezLubqSPRT3Z9roXBMNGxnL7ygfW1wYnfbCsG5Ra1ty",
  "key15": "4zHDYH32ZUW7BfHgcvkLsD4uRqPWt9hmvFSComWBgx5e1DMYEbdSrjxKkt9pRVnLnvNHN3jGB4Qs8b2xCxMWmmM5",
  "key16": "NoutdwsZ5XJcUAWaRDWzmmCc71hfceTomxRa4KdjxLNhNkoHJV7x3fCa7YFK3Cn8dvAV2Z2c3X5QbLLPpgC5JjW",
  "key17": "3431t32SHDECY1YCUua6tjz8da42RM2AmjN2aQv38QHJPdeDySh7asGxv8n9sRPbJkUSJikBJozahEkfxE723vvj",
  "key18": "5nUFcrTQg9k1gsgiQXxJDnZTUgLAHHPbzTUwLJaG8kYZwZhFD9oCygj3FD43je6RDt2F8LuWJgor9KmYHSuiUGMZ",
  "key19": "3Qi5FdLmDkxfcCQLjQJ6T3gtDPwQADM45XcGprDMJxT3A9ERVJqn1cT9dwmpvAQiGb1ehQTjVDJKGzE3s3Qk5AgR",
  "key20": "5G9Zn8SqrQev2ePjRYG9zUwFUqgRQ2wZ6VVddU2pD6BYBPQ6izga7z1u6TNid5hz6zeGEbqp8XBHwtaeFEnCrFuC",
  "key21": "4KL2QSZMQDKyrpQu8g6WpbxNo5AfCm3GGtNPPDXLQa4Y94FeYBQpMZpPwez1kW8NAtVdMZum2TmpyP1CbDLMaA1n",
  "key22": "2Dw14YfdPdp9M3u5hFM5mWkhRN8TYGkmZhLmhtJPD7o91NhVVfhKsKMkest6MywCV6J3bmF6SDmA1ab1fRKnKj8r",
  "key23": "5FuyKG5CsbBMZrdHagPHmoMfgzgzknSVeNo8unV2advf6kswD8GWVcEBZLbuZcXWJj7xVw5KRkH2wqDPfiJyyoDc",
  "key24": "2SMbyJcuNYvGU42jHtAkDuuEGWtUZkDVkfXkg1rQxPA5k3KVJv8A4fo4xzG6cQc9ZNahECSgwH2QaUVxP1fpriwP",
  "key25": "4BvtqbnPWiujggVsPJUmPhnFggw3pwG6bUe2UzuXBCWQAniYdrrsFj3SEpu8nYv3qTPTKN2qC473o1RjtUADEvy",
  "key26": "5MMvBn4EZttHgssZgoZHRUYdGgELxhvXrXoc7o1DCcqqYibrXmXwuzZfiCjqcR1pQd5CL38LpGjiUT6fd4XivAgg",
  "key27": "4frBKJ8iVtHrN3tGV4EFTYH3DDqJLj4zWBC2w8qgNUbWBBQ8f1JhcGiGDuRxiihBQ7hkGAT6mBvXuLLay4GDRHon",
  "key28": "5XET4EPQtjw5o4fkPYM4yajDpsV4J6j726PXCr2TrYkvacWLH7mu29rSYXXcmunxagEWyrcpFi7uyvYzWdXx7j5R",
  "key29": "46XtCCzhvERNzxeruvCnAkND6SHEt4jLifJgJcEzV8qT468uXim6PWSVokZ6vJrY4jwKGYib8JXDwsTjCeSxdVzi",
  "key30": "4LDbJYUUVoqH8DAo2tB1uHqhegWciuXmy61aGfdtcR4U2J5N695U61VRcP385nwHi4pjEvv2s4s42Zh8x5xWivSS",
  "key31": "tynXvT1pxi7zK6LUpMrcf75zK8XWUpW84iNLaEnJjuBk1y6JRvHqdJtaLwGQUaA2BuMbAWK7uJbmeDDi4Qb4apD",
  "key32": "3LU6ASMMGxqaaP1UVDGsiuzP2ikpiyNgv9hAhnB9iqszjADmK6sjxSW1e1eU3CcEsnhsfLiZigQYpJxDo2Ypv7tX",
  "key33": "34RwGKHz6XSJ4c9zvMpGTmFEhUvrkhkfu2sdkWyqHKKdjKu8GNpYYihFVcehHDim1F7ipMYVAh1kp5HKMstLMMEj",
  "key34": "2xUtUGPoq4iekfwWW1bAphvaAGQtUtLCZqjPRJF1PwbMGAoyuf4FF8bV8CvXSxGjNTNr2C8itZiXS4vQGfU3YrJ9",
  "key35": "62JYTYBu6sdfpkaXkKWU86JaU6arFoLFPbi5ja2YbDTz74i6WFcxMW3Ki313JGwpkNJY7TY3jfYHxp3VX9zCp2pk",
  "key36": "MBwZfx24WehdvS2NsDJEVqvvyttdQQprRPm3fwnS4caDepyB5SPJtS8a4HM7BtELnqPhXDWXhorWoMiuz7X7Wjp",
  "key37": "5QmgvySv4aWxr5Awdi4AEKUiEohE8L3ePJgVG4UjHTsyAUcWtBWrQnrKmYUZiENYSkVPub6pd8c33PoGGagSnMuc",
  "key38": "52sXA5iV6aZ4VUkDf6g9RLgbn6pJ9jmcu2a1GApb38wkbFjRM4TenPTudAEWkwikT51dXhntG5SuYZcQfySs3QZE",
  "key39": "3uzdcqz6Nw7pyBhJzP16sGT9cLQjVHmiy3ysWwDhzh7m1zeSkBk11yXZqwBBcj119Pg4ZpBBDMmfJrfZetrNmkuy",
  "key40": "5jz6gAgfhLzhwfHLjKMHig42zVLwHkP2iRQwJ9HoVvp76kzqTTnBdivLcxvfJgF5Kpjc68koLFWQgFr5vSsrZ63d",
  "key41": "pyTQvFF5vn5SXK2BD7xgJetpTtPFHUyrn9pmXfaZtw1zCLqugLkFVLZh9wGNUe9H6FNyMf9zTbwWTToa2m5nq8p",
  "key42": "5tbxnmyJuZyYXazgvuu6tpcgZ6XnEZjqPv9MCCpaiqUwZM3BjjH3ByifbP838pnmYJeEjXA5Uyw6or82bqsBLyGu",
  "key43": "snrCARvKCxWxiT1hNFhMSgh8vYfvVhTf4ZhgSJjxqN5xsikJprMB2JbCiS3iouvZYUAomyHhDDshzYNuSYXMykh",
  "key44": "57zP8hrzmqzUBcnJK8BF6QsNeHE3ANckx81Bo6EkibTYVskQsiTgSpb6eXKwnNfQApmxVXpz3wD4M3Hmb95jPJ3s",
  "key45": "4qHmM2mRLPoMDNFLgTzFvqhdrgDW8sdjfDEhuLJky4NR3rLMUnPXCw3CPwQ3Mcs8S4YB6yhFuJy1rxCwRCyDTVof",
  "key46": "3AhDX7txPK4fGCMQtdceyHdJPizovag7puo4Awt7aYqDdKixueiQ5dUKWNG5qhfGiy1uyqm4ao44w4FeMUSrMXbE",
  "key47": "Jvn8s8wR4axD7tSHcLX7KaUy9srFqGf4Vf2studM7Dx6YqSTuvWFgwS8caNAtunkstLcYKCe9cPb6E44Dvx2fGS",
  "key48": "3LEC8NcQxjLkMczHNS2fk5jn4FpP2H7eoY4qAsTekkUBsoSujPEBMtFEyrz8N2Fkde2WhZsFYeSYLmwudkh9ty8G"
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
