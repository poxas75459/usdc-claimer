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
    "3EgiinFspyXcd6cbJRBzErLPAHAkS8dmtepPftV5j4NoRsrkfBPdsU5zqzJSteMzxUz9SLzZd96yB53XcwVJrp4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LdfgbAu1awZ95KugmTVw7mGhZbJ7xmZRu5Snv85zgtLKzCeWPpznNLgkbMQSiqwDqKpAV2HmjqbHKTvh7iaL6Hr",
  "key1": "3EtvLsDYbUv7Ho7myo7h1Lnm7FNM7G5au8LBxuT8GmWZB4njXByQgzWhVztXjiSXCVsYHm5ttvJtCFaKGScFE96d",
  "key2": "3eUc94JKb9r5nvmBcL48eiV1LattSSLP24zisqHi3WbYpQXXLikDAfzcCVuRWjhL79Ecx9ciL3HV3S8iAC728RUn",
  "key3": "3FF1TKdDgctLZQHrjQHLXoZqa2yWGzzrbAvruZs5qHfr3pkEWvb3TuHnWTnDS5K51opMiLxFg4VHeWoa85zFRB3m",
  "key4": "21xzurR4XuGBtQy4nA4jkut4jRuvms9p23JY5VtdDyFHS3d8HLEv4YqGFYnfnkBmv3v3fuXqve17HYS8BGVr1rFL",
  "key5": "3bFNgaJimC9wWdQV3q9UhdnqzJ4TzCwstmCqx5DrYrEucFKskKByPkK6aV6q8QXPRkbgpvxMvu6MakzDebLdWJFJ",
  "key6": "4r2EfL5spXcDh8sHVxTyeJ75fFxyWEHFMDmP1ZN291kvfwBhAA9S4QLvgTqe97Zfucd1F2WvT9oxwKqagQvAo7ec",
  "key7": "2BehbCi6v5vmtNYKu2PtKsEQNDecdSXxK3e3xzLsCbSt7c7Be2hBmKV1ViksiiVDcFw2zGMet5Gdp1K4D8UTYQJh",
  "key8": "HgnGY3HgLjvnzg8gpA8D7uev1jQwvxB448dgLChPvbNCNKPg5FmEbS9cmXSmpepPShDSymqMEui9MMCpNtctjVE",
  "key9": "4qEApaqBR1iiKUwMxzzVFX1ZMRQ4GnDBoGG4v8X8W51PdcufwWGR82JDb5c71VNfAHFKr7xDB8FuyZ84BtyY9cMr",
  "key10": "2dr8x83VkZyMSvbc2TcgL2g8tmXc5BQ51du274h9Kib8RGPcPsmfdu4m4V89hdTswuL5etwZBCzWn6SmyXvVSpLE",
  "key11": "2nVXTkQjzG9ZxTDm4v7i1MTYo1qVtSGj7mgXaBgiWvSxihDMhkf2xBBxpwMz6rf77FcBiKAj9RMKrkxLxhthTzDY",
  "key12": "3NuCzZJwFPdZtPn7zZRRXqp4ZowEXiojfpn5AfC8Z7ye5TZTFqsQdtTVX1zLrcnytprfTosBk7XTXQEK8fR2WuPY",
  "key13": "4ELAz4mhyBLErmvbBkCsVkiUTWifXv9yfSmWNKmwaHGjcWMP2CvMdpk1XyCQf2cpUQDp1FyyddLwHqqCwfjwYBSU",
  "key14": "VZ5WnMzw45hUuNTmxMRAZGsBk5uTKaKi8ekzw6hnctPBzVnN6WjyhEz5nVkJvH47ZKQLWMNjvt8XXN2cDaBBcfW",
  "key15": "i8wfxjL2upzwHbeghLRL5x22FJPQZuzHvnyUGb729xh2dTYYnoKaEj96MYMovC8YNqEqHXXBEYkXqgBTxkRhYqL",
  "key16": "6xh5xRkFW7Qp1WXd3taJvHgnsHsZeB42Y4DPwkLVhJKzkLWHgUH7G1urTZjdtApxkYk6316SjiYv51SCJtgCgij",
  "key17": "2YjNjAFW17QQRCFm1Sz4QHGsrfmwk8ap5pG2LkUVU3u3JfETSXLaR4Eu3zsiCU2b41RGS8oyB7sz1p7pifN1Jwm1",
  "key18": "4QLhU8EE5tHjnejvkVodHEhCqP4oqaD977dcodTiwbw6zSPs8DYjazjr79ayKD9eqnCTB9oT8yFxDXL9EkkTuTkE",
  "key19": "tEAZv7cW76YjpT7VUgGe1A9FAqP6wp5Gha8NTkHmbUeB1HC97CHir3yBxKzp2QFSFQJvScs67vs9RUAsmnJxWKJ",
  "key20": "mvGUnMDRwtBSUMWXYnHQvbo6Evswjsz9wAGWZgDMZfFMaFSMAVxdWQc452YCZhse3TZgfDA4MXmzrVBRpUhJ7Am",
  "key21": "275156yj3syJuF7gX4EdfM7gGc4xqgvE2WumJwyRwugsfvzUcvxVvDTLZrNNomxrr19xCDjyKwvBQXCXmbM1RDnX",
  "key22": "5yA72ZoJJaBM25Jwib55NMNUarSQy6ttMRm6ZiVYAh6N2dyBG9KejwAk7vyisPt3uSoZ9ahzSXHq9QBVbTgmt9N4",
  "key23": "4TkshypCB5csbfyyLd2e9oqps7xUNMsaFYkJYcnnQ8EbrUvwJF99NXN2QpDKK7THzKfyuWNaWiT4kSQdJ9x74Vjh",
  "key24": "428EuXLtjTu6moYf4CTWBGN5DKeqdSTiwnLvxBWMagNTPPQ7WvwRb9yDNnjG4sbRhHqBxqg6JLQkWpnFGpi6u3Fj",
  "key25": "4pwmwmme6tjTZwbE6fLciB5E9TcfSnKAQ1VtEdR3uEQ1arCu4XpadndkfHNhQxAikM6oXapVk28dzjbfQMw6GWNX",
  "key26": "it39mjYd6N2dHwiu68NTPUfBDw6m57nAixJjfdmGrvzoqVcCMceY9EP6goAPy187ZztdvCPnwyTgyj5kEUMKX9f",
  "key27": "5TUHj34eGvTr2JChb5r9haNkpw2Sf1BBDAXMWdzKWHUQbgRZ3CCcWHU4KofTShXztL7z6HEoygwTse7hYq45bSM5",
  "key28": "5xCDwon8wCGxGJi7eVn5f6iwJAoDHLA1CjV1ekicnFw5iLvPcxrMkvTV38C5jvwxRKswqLVGEVsYXAQhe7Ef8B49",
  "key29": "2PU4JsYXVHFXdzCBDBu4MijuKJ9ioYFhvjf9fU9fBpRs8nGxAF3p9iFTwWxdCiYiy34wh7Yb9NxsSK7u8f1tt5m2",
  "key30": "25A1KsSZjhHYZdBSnTrVrNzEMjZDHRDUcxmg6uZXy1g1y7QZsb6nxyqy9zY8Nd7rrpJcBXZMptUJVAiPL4ifySgt",
  "key31": "3jV8EpVj7R9H2gZVqRafKeBz3Uits84JTeCrpjdCGyF4Gn4fnEMdQcZ5eZbAWRjDSUJJdr94X1w4YqnmwjvPTjCi",
  "key32": "3nnDJ63SqSTxqC6WGKxsSCTtsTcgKgC2YNUhUNf5Ky2W841pokfCSePt3XywtyX9pSSAtbyGP6WJYbP2cmyfFaH6",
  "key33": "2DofGeQEqx4zfL3oa9BN7brnaNuKGg42eYQqusDXqiv8SQ8iB69ti3eRXCqu474ZvfECYoFqfCYnNxkpNNVj4PiL",
  "key34": "29eoiDvxLzsdodLJvTcAwDPDcQJEmm7zAe5JRxQzZwtvt6q6LMHqPBKPJLbf3xdiH2dudQProKteTYb9L6gXV5Li",
  "key35": "5pXEZxyBpaka8zA7JEd9MBLFzLQqgnn55CF8UwY14NU9DBVkeYHM3mVa4mthRAFnVRJhbhqMQpPYKpvpSbPzdNg6",
  "key36": "4hrv6yW92jVH5nqW5hSk6gvT2f6jX7K9zZjGHPqGQBXPC6mEpuuDgvc9SzHzx8QKyXmtsv1cM6vcjNtfRg6xNNCE",
  "key37": "22mAYHNdjmzr2S2T73QwuyhFD3y4Rc4DQoE5gEkwBVXpM7p3AAxkBtw6AiRLKTVkkqKgitPVKosaJcRnYGVxkYa6",
  "key38": "5aaxgfWyfjvDMVMyMbqQ6N8wjqS25HhvQvNT7LxkmqVPhxggR9TiDDLTkA8dTbLWbVhMhwZUzpAgWrfzZKUAr128",
  "key39": "67ZFyJUKrbKegDbfHru7ZfFcNM9zWs9xjNZ9wEW1r1jH2egVGUSvrU7xSJ5RQo3qEigVGoFmDd77L9kwcspA85x7"
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
