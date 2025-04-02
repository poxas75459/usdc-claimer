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
    "3NvEV4ADXkVk4CzzNz2RRwHjEMNd5Fn6Er7f1bEZbi1mXiiw7pEpw7V87dpxTsb6uUBu6nGw6zScr6QFSku74ubN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fmKCyHinFxEskM69sTTR2GdVazGkqCGZvtnsMYUNnaMKHAm7eSujjvLi5E3WHbrkMHpYpwNbXzGHsyxDVcQMj96",
  "key1": "5JDQoChZ13N27mpAdLMzeWGfdZYtnmC4idEXGZz51tM3RPukmi19kzm3qd1a4YFLHRbXh3L3iFv2ycKvcqJKw65A",
  "key2": "5LAA7ndajbpdSWJFcViwXdyQgmo7S5qDVwr7T12ZL5u6xK3sYZnzKPMx67Pa9ocn5X52A6bSP8Kutagv65UfjYJc",
  "key3": "bFeX2NMqbnAymeY5d2bzu1EgzHLDCyVdrA5vphXAb6BK1ZADxh8rJtQPiPjr8589CXp8XD3UWZFLf8Db736Y6z9",
  "key4": "5BCeqeEBuWmgKmkhfeYxibmaWtphvSeCJjZem3kcPuNiX8JmfDdmvq5x91vm9RciTTNy1VDsUJ8MWMJvnGyY8kEg",
  "key5": "2KYjEPVvS2gWPu7ZQMFr2YVKJfZt6FTrXckZ9zwaBN3tnUvvgv8Gkp3NCS32bUevcsyqwpGxqCAxLxegxPA7SEk5",
  "key6": "5Z58xyFEFwbimkVAn23u2uuY7xpPTqpUcegpBbLPJXHSXXxbMQEzRc4fxAfW4fTzp1aKvdocNeFNc7oX2caHpsc",
  "key7": "4rukT9mk4fTFe1juQ3n3CdoUroD6GK9JQbzX9sXMUQvaviNCzg7uFatXZsoiGjSFM1GfyjHQa8ZeYMP2PfJy2DvE",
  "key8": "21ATq4z2Ba4oj9ya9tNQeN42CSvdV2syy5GYVnTgH33b5jvtoLxAdxoftkeEstF5qbsLNkUTa8VhvXXoaHK43meq",
  "key9": "4NBQfV3sYSvhvrp3uinkrmxsKs449uTfXaZkR7pykqDce6aX2NUttQeJFUHSeHC95vMmSy7TEetgJcYK3fZ8NcmA",
  "key10": "3BGX5g3JUh5RHkgJdx2KPC5eUn2yTyQfFYyjtSNJRnfV7XJcQZRTeLDD5aT6JVJwhseWsBosDQa8EzGHbECzapR3",
  "key11": "9R8LFgtLria8Shbx9bPtoWXFrE1dpesjHNrXrrnTviGYuv74bc7mPKvX5N7CHPVyEQDrL5sDLuBXiK7AUmgKfuE",
  "key12": "WDDUwLCHYjRfLjFhL5hQ7WYfbJk8UezPna2fomXyYB8qqyWiWnoiNG89wh3xfRCb68MvAo5fFTD4hgMWeBbZgXn",
  "key13": "2qBWQp1HLwJrfge1w2ABCCCodwUVtKTNS2zJaB9J6CKrZ9xAiTH1C3arXZoMAUfFCnRwWHtQEQwFj3ibY9Hkwj8K",
  "key14": "4aB2p3vQkRku4yZ3dZ9Hkg4VxHUEgq6hui4GLv5tLhvthz4ocXqYZAFA7e514Xv2N27irbGQJSRHXYUep4uQmnQY",
  "key15": "5ZkxPWVgoXs3TSu88XtzeoMJdMSYVDSKWmBkou8RgiUC9o9M4PJ51yB2JtXZCkqGqyNzDAjgPvQ4f2gaTrvsYkwB",
  "key16": "5NvGaGAiURUMr42aXBcMzkPAwku6kzgscHSEpdTbPDaWhqJ6yHkPoHnJUdPB6YCoQc9SZATQ2tP31aQSZxtUu53a",
  "key17": "4CVbn8kTy6JjmKYXMLztNE2KRsKfkd7PorQ5vycvyHAFX3tMWjmzjx7wHcjGXuaVgR5eLyWG95XqGzByP8wFtYBy",
  "key18": "Wp8xvYRRQhkkAAXMWvhEdgjd15LKgEPYcjgtzi3HVTMcG1ud9LU2GriFDo8AQVf64HyKq1SRfyqEdQULEVmTUyD",
  "key19": "ETbeMq5gC7ADVTxKHSy988KFchGAnDmoHxeVrKTEDDycPkQwPH1foFW3H8Vt9mnWtuqvTJWazUYseHAoTFG6nPb",
  "key20": "31o9LN8Htrx2mTskhnAtsm13Evy2jBHoANejP6U5BWugybSz78YPEekP5NLHDeL6TwZ8WpxYxERuEXgCJM6jWivq",
  "key21": "2XmU5jacn2Vmct69MffroQQfef8rWTvj6rZ2Uj4g1MEQLYfU2NnQwF4VQHnjzcPwDgJ3135NyQN6r9KyHr5MgTzi",
  "key22": "4THqEpQDU5qoqvzY1PSa39fGixYjRJBkC8U1h8gxteFHpvJboHXehYou7uNGVSChHoNxcSpnmTmjGSYUDLggf1d7",
  "key23": "4XP49n49ZoFtAgh4qJnJtz7gvDLVxFt3ZnAJt9NvC7zGDdTSx86APHeuCvAZ63eEDxuB8EdGX2p7GgyB5BMncNT9",
  "key24": "3MyhEpUdcPya1FHZuxAjc1UHh5z2sFWqUK68wqoczHbNBZJSrgkGpxKGpzLf46UsZnhnqoPnduG2SUyiNmtQqXme",
  "key25": "RcLcdMzNscgvCDvCGEdkXqWBQJtD9wThQ82ZoP3h2cQngRjyjGScfRtkdbiB9JcNscqiigWFmKsUikuRHEMJ9Xn",
  "key26": "tEWgnew5WrxqVWEgKcGMTm4L1W8wazcLpG9dMHGtPDmeP8DwQ8s1YZ96PJ5LGKWTDXDyjeKiFyh1bedyUDkY4XP",
  "key27": "56zUnM4LRh64B7Q8KCZDL7PSDmfNuN445rc1pxkHrFJnZ45vh7F9o7BqAwaPXZ8FEWLG42mSDqk5FpoTqQLtNVJs",
  "key28": "5ty2AdXRpTcS5g5V2dGX6BLBeD9Xxk8FVL3eCsAxK86p7B435Zsjhh14yijZ3LCADEv5Bx7NcHHU65hfAXAa8AjU",
  "key29": "3YQ58tawp5y5wa857PSDMZ8FqboGZ5hcUEwMqU1cc9zHD59VSdgYbtf5RvCDntoVBv6L39D1yZug6q4bDN2AJE7R",
  "key30": "4E4VAPL2YHNq27zqtVv4i75uxkdtuSSdWNjFhk78EJdERqGaeA2HPRxaMGp7htbJH8QWjPkLrdFeLb3cw4urwaXu",
  "key31": "2C3G19iksbeaRWGJGPgzJoysCBNhdWMtFYoXztzJAMPcwFakVPk3H7HAsTrTwDAsXEPzwASifcvr6bjL7QXqDwVA",
  "key32": "3SehHnLrbYoKiR9vuAgqMYKrA1fgh11iYw7YNUdDXugswgPJWSxSjHVExrTFRFyXdk7Eb8vq3aFt2o9cXwAaDYqK",
  "key33": "5hnUUody6t4F9stMg9HVAx2QU1H1obM4c8Fuhm4E58hBABJvjV5dYWXphCAr1thD5EX5jeQ1b4pcceX5dek8XDpZ",
  "key34": "4s8ijHqcroQUhZiKaN66a4RLKv5K673FTi3c7EUVnNXBBQYq9yAZNQUToMovzrJYjE4HfKGGR6HbKUbpV2VLTJ1u",
  "key35": "64By7QnHFBmu5Bg2TsC4khXztfLZUtu2fXzFQzcnA6z6Ec6nBVWahEA9wWuXAi9zG2TC8DcJR6e2tcP6ZV7QkuZz",
  "key36": "3kAW2JCt5sqqo3pxo5D4Hz4dMAHN9PNdsc43jLqm4RiswFNaCNcJEfvrip37GNr8vu48Efb61mfEzUR3fiPQRbJQ",
  "key37": "4qKzxJ3t4ykfcBVcsxJwDq4NnQxhUQEhhpFnLT4xR8Np73aTvXUXpKdqMhZiRPm2EZqLJq5a45LYbQEvmvWrS8SK",
  "key38": "5ms3Ak1zJ8F4MaPneBFsStKn9daKDGH319mSJJQAHmaqHPn6RYr1GZQneaKdxDZn1bJnHdRh3R77GTMHsph2jsYD",
  "key39": "4sQJcNwhe5crvt5PHDJqp4U8VDuYQgHJ9kFHcbCQvzh5XyrDSgawXfGvzEngmRQkNFXicGLkEF9nWMwZvDE9Uxe1",
  "key40": "2FBLSdpUhWLYY7TidEh6wRcetaYXgQBRcpCSdBYCSB8fB1uti3XHNPLLsfVJJTkQzEEohKdECh3RaqXzbM5yqyKS",
  "key41": "4BcCiQ9nkQFbonG6kB8KeGZ7YG1dC9geJsBD5gZMe1vmQqNu4FHweeZcXWdxpArDePLKyQN5Msh4SmmrH2gdCost",
  "key42": "4RoJ8Np1XmsVUUkD7x6XKgn2Q6HnaebSu8gAJFAKbm4YHt944HMuxbtjH2iv3mt3JCQWKfNsAWJZ1BT7M4XEWq5c",
  "key43": "4DMHAsj3mEhPxGm2ioR5KaPwmeDXF6idJ2iJQ7uh1tqeX4uAxapjJ2QVtxHXKwdrnRqCyWimxagTRXtTSFfohV8G",
  "key44": "2TH9RxPSHH9CVfc6xXH5PqWGCr3hUSqM5P57sYpQbfTqTJvANY8ymsuqojfK4mECJyotkdS9M1Qzc5vk7Qm7oiPS",
  "key45": "5opiSa35iMtK4c9FVJ4T7GuaWuDU7WX8Hicdas1ssXZeXkTg3sZ89MfCDE7gSkPM4UX99S2RhAQ5Tx8CtyJb7YyE",
  "key46": "jVHR4Ek2NLyajzdXSzuA9496jxiWJnveRYcvWrbALPQjMuEcJkp4tBdALBarwZhEhdyE99wpfcz53zjCEGLXvbp",
  "key47": "55T3A1XxqZRKJjAdzzRpKaeM2YQ1nYCNHnqmFsfDF55ChmxyFVeaPgFUKKFwAeVbQTE9hN1fNmtKvKtqmWXJGr4K",
  "key48": "2Jg4B7uZnrjD36G3ciu6sMFAAxzVvm8sdexqxgGdV82cUgi2N3ugPMgiGwvXR2Khgn1BqFVoviyy5ngY3zJ2y9Le",
  "key49": "4ckRU4CtU5S52UXpq1CsXn3dxzyRwHoSEUuCR7otLrh6HwT5UstLoi4eCZB5AwJ1xXEtgYzCEaWuHugwZPSZshHq"
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
