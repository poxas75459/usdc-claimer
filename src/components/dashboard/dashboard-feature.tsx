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
    "mBFoR1ezxk9pSWBkjvCm5fTPyqQmxYsLZL1QoRptJXrkuMfB9r4tBwi3DmnQqLbq8iFhx5zrzoFkakLd3DC6BUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UEbLttixYdrxeWf4ovDnq9uAu5qPkuDXAKxgbPDCQHqFtzNG8XG72E3TNzwAGtHtahREXicyUofVXqC8BqnjjzH",
  "key1": "33vPdUR9wGneQ5DvQ7mvHqzHYyuKBAiQvWdJvt64fTurzDJ2vmU7Wr2p8uKmpAmvbHfY9CKT6dod1MXFLgXV7AsK",
  "key2": "2LKJvkgJVhTvJAqgqtbZzkQ67xBLbftbX2YBJ4VMXvCpxdpVeRjYhqZvHLoWfoJ53eN88V3hMrEpME5uVYWPmWb6",
  "key3": "2dUE7mf1k2VSMmQPWrVZeGqiZ9WYmN1SGgF1GFgaHgwtiwrzF55uPMHNSN7Q8YULb8cMNm8ECAvNnWWt7TCaTGbg",
  "key4": "4NABGiiVoG7qrsqzc64G5m425YhPPHtM5xCWejtBDhHwtg1dbEw8HqbYHfE3h6bUSQsSARugd74xdZ7TTNbEH6QN",
  "key5": "4jJw4ubCnuAxcnfykChbLCGZHiWkpTvG1xLfq9t5RzJN8wxQc7LCgKXGX6GWc4ZmAUjqRor6sueV7H83yrKHKJtx",
  "key6": "QGwjRLjnT8o32HMa5XwimQJGequroEfAVkz6TbqvpxVMptfWZMy8Y3Zco7eof5eUin1e5RLptTDA4A2jok4tNjZ",
  "key7": "5JskH5nwTZHpEnGwfxhBd8ZVk4snrBN1Fm9dcS3ertzkMa71rgF7EN1k5MLgZ3TG9zhFRHAut8w5hmRUkBLqoS8m",
  "key8": "27DVGB1oDrEPaFi3KMZhwpwvdJaZ2E1Gk4LzUKhbDpuwQDREQEzNHZFQdDUkCgWSrGKop1idc198ikBDJ1z952az",
  "key9": "3SZkh6nwSbX1PrgnFfWiNq7Jd4aLNyk2x9Z3FCt5NJhkEgmo5utSgA8xXxU4jw33RUCxoXuo5jtmTMWoTZquKMs2",
  "key10": "ATQFAzL78bxf53bk7JadtY4utAdwBMxsnRmBfht2oMhiP1tUZEUCKS27rPbcQcWYNRjXceqbySGBG6oKnxNe4Jn",
  "key11": "2zWDA7A6AdF6qKNN6xqi8sDHtvwPh7Fd2QLd4gjE3jTydcmt8TGLcWZMEonNLTeH6Sjbp6bY3AZHUAsXR4tQud1g",
  "key12": "4bH72kcgStsAJ7y77JwUZbmbmugcrWjMoAcnKH5DTkwCWkzBU4irFpeYuWGWKcyGPexLK4oSb6C8omYMkLQ31SYi",
  "key13": "5q1S6Gm6gTzBHyh6gQJzNmwimeCRbTYCyjZTb1mNDHH6fEtz5u1X68SG324feCD5qHDfqV8bHyA86uRz9SCbd1Gi",
  "key14": "2X4rDxyhLokv9ESb3g1ncZyo5aMoqi6usjR7GWFFuTfBQkyvXYfMtNbC3sxjxcCpftCVjegj1LaVuhiXhsem4vqy",
  "key15": "x24wB6b39pgK9RBdGxPdWAi7J3d74vMwHFNtd5eJi1wX5TA2ECFtVT5nZixzfrp8D2jKSJ64J3XV7wcZXCj8xic",
  "key16": "3cX87HXnD7jfXDR5SdBPM5ssNQbZVWhanbUDnmYKzcwkvYhKLbkwKYPt7w3L92haAcGyazHG6RiSCYjRzQ82CCpe",
  "key17": "7xGUp8C3nqugJDrxkyNrr3S4bH6h1K3763Gyo2tVaFmCM9QnqXGgSJwKLsk5g1RvftTFkC4kWjdxj635uwfnNDr",
  "key18": "42nkANtDz9jZwaqMDSg7VmUtZqZGVnDXUwpdUScyDzBxDggorAm85JbUj9Lb7CDYWznpaH64TKYK7MwsUtSrEz6D",
  "key19": "5bbYcMHPwS1gzV8J248jLf92pd9wegmddncsyyXHqGoff2qyRkGcYjXpUjck26RFQNpK165WpeYYfTegB6AHDssR",
  "key20": "5s8HY1VZMXdcRLiEECcvPZXY5RGYYmHzetX3Ty7UPTKKresy2qesyfk5wYe88CgAF3YWwYMCXSKMv8FMViSqkxxS",
  "key21": "2Dg1Auz8exRxgvuh5U5PxZJcpcWkh76tDgby9LGGAjjja8fcpssjk21mADirNgwsaMsP1yw3hPW5uv2fPK9FMbcK",
  "key22": "5odbxWKFQtxeJ16AZFMRU2QUGybmhuKHi88SBLjZjeC8nSyWGedvw9wBqQEbtMP65R5Z4zLz7dRtA2A8RfVw7xHt",
  "key23": "jQL9jzZSYCRvtJovtuVSwcg1f6huJ5efNuLzyXwFZq3DxZg926uUSd9awAs21RwH8QKJPa8ox1jUrZGQDHoXdDB",
  "key24": "2hnbt3Kx6eYjEyfQ3t4VAdGcb7jVNKrWmHZWKpS9JHVP6HJfSf2TD5G34mUNsVY5H4X4sHGoz2HvU24XiFQnWF2X",
  "key25": "5J6PDDndcdbuziGD68tMcnDcfbfnL2PTY1fm1pdeaCqxSFHxiabFMxAfB7dYMjw6QxfwqphPn2URYMhMNYKVNtSV",
  "key26": "4ccPR5KZFwrmLDnXfQde9WBwPsRoJST5fbAW96qm4268Cmrj2bzT7D8rFdNBrXMkjqudPfzgHHAhaujUhnHwkeU6",
  "key27": "3X2H2J2Kbvh285i9gBaQApDMMg8ZLmeUfc3yeRGvufvJR9Xxy2VhZELMojKRJ8BgHescbvLsAroCfATwC1pZLL6S",
  "key28": "53QKqZLM6rBichfjZ8UVvBbeHE5L453n9f6dQ9BcfKJrHZAvhRkpsViWDG9SmB2Zb8KA3sotPJnEghEscmkHPuek",
  "key29": "3ML3dZp4GSHsesxvGDkGZKT1VG2mQtgUX1z4dB66begbeBibFsacTYkqhqxyY5HSoKJdYxsEheGs5ZfjJ6dvHMTF",
  "key30": "2r4u3GzcqQeBBLBLFv3AS1JUfij4V4XhdfRe4rQ9WYehYcTbBNbZWKSwZGzuh2X6TttLKQfzndxXfUJEK36hSdxc",
  "key31": "rLmHPx9vWdGfKVvC3ovkpxEvTgQrB1Ws9uFy93NWzPW64kBCiSBpdeWoCkWHHJj5aSkKbzH5Q18xL7BnQGv9Uag",
  "key32": "3QaVD94cgTXgDMkqTBCKm9DjwX4TPDcNrTRzP6E7BmgZxwNWNazPkxdKRjUV64KMeK16vkxCYfw7av79G9nbhyYb",
  "key33": "5RH3msQcaGCryi86koqJeKojBRRknhmYxZGGa2wec8dt3Eg8pGdrxih3HbZ6raYJYr4oqCtzUNrDF5cWEh8Gbibn",
  "key34": "dPUWrPBQJzYyrxCHeGfvNSR4Q5zRe9L8TwrmMSVCgB8bdAMCo5ZqQmH7fxMfVmQVHv7tg4Sg4nocRGUCkyqjgMZ",
  "key35": "5Wty4GbUYjHGX5n4jbJtycDreKbqdZmCrjrZvvTsfA8ujL4kzeoMxoy6A4fPH9f9UHsbUdaUrV1yqZBojgX8Dov3",
  "key36": "2UW4Te6CgnrVGhW6EoUjusdksbmacZexziETy3zX8ZfqBboA7165ob89AUJxGJhBsvbTEhV5nwMW9d4mEiARLGeK",
  "key37": "2BibqLTersSipyzY7n8MzXkSp54u5g9VGgBPtsUdzr63r7JHcSp22BnqVwvHSGmasBVk84XFy3b3nwvp85DvTbfc",
  "key38": "57wwJsrT3XwfHSVt7BPxTuJ2iFWGo37RTi8JeNZ3mWfwsSKjDsfNp2NXPmtU6qoau1uMcEPPJs9LPfjCF3o3rTzh",
  "key39": "KAfxisw4UEnNJzsnCE4Ke4ruh39ktDvkMHoVGaKFnFKvuzRjQAtHueim3PmYGA1jiK3rDXba29YAQWcQvaNbtLX",
  "key40": "2YHL44d2xmHNKAvtQQajaKnzehwMb44acEpU6d5y6q9T7hSrubdRfn4aSuAxecTUStaN4f64jaXcFEsjJSgSEVJZ",
  "key41": "2xVQwk1hPf1pQ5vFwY5NR4PWMJhNsv5mLHhMZ66QHYMtqsnRc5a2WN6RQ1AjpfWffzG9zDeiXhV2t8B1pwC4TPxu",
  "key42": "2zRrX8C7TRqhDprmxzupya3AxksSBG77PJPm9NkwmcbWyD6pMkBKzgZ9UCWP6X81sX2L5Hy6aPabs4Qz78ZvMzRK",
  "key43": "5EVpGbjoqW2FFTf2qdW787Ya79f1Tr3QJVot9RR7qmzqUowAfmJ2zkBGVn4W68f3DJ4gYDT3UfuKj7bVJAAUAJYM",
  "key44": "1vdxTrt58SrNKkbL19WiujvHZdEif6AM1bkCX59kA2tj9kV9aUyNsw1iz1kZMZanQyDTjWZjjGJYwWWP6SvUwtS",
  "key45": "3iYZuZBBSBhQVnoiPS6dbGieHcJ8KB2HHnZKhzv191Qr2jSG5vh8bMJwYC5wqNLh38cckdERn5iMQznCzC2MWnzq",
  "key46": "2HTf6u7skW71ekyaJzFt8myiU1ZRsdcJikku2ajyLBXy1CwUJqQzcDrWJY99jmfVXpUPANx5tuv8cjW9Db8c7WG3",
  "key47": "vAJqsS2XaNKBUmWuK13BxfdUNMh8i72RZTGFhX3JojuEYjaend2hug3AwVTn21iwchcx3HZgVUkLztdRWXo69Kd"
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
