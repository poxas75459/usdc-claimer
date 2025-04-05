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
    "9Khs8NWiEt778Yu3ZUgP2zAmhRaQcSjqwdPSXMhDbpFysb3RkfbjfKnyRPjPCTw91nmoxczueWdtFT6MFhYKFsN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t4ddSSGaTowVJkWxT7SmmtUYjmbdRTiWyiAkaGJJw8JzGgATponahj241xguTPN76tWyMRmBnP8NkRAxGKkPCor",
  "key1": "46GXTCqz59jePT856eprRAs1zwnAUSLRjHuXQWeATJ7LwZfrVg2ToENP4QvVyCXJ2szih5P9W6YGWWa8Xbz6yc4T",
  "key2": "3UvxMa91rhGk9brnjeSaZmdD5nbvNuP6pxwfZPwRcHCYS4h1RvLybhmHgCgvPsSdWjMndM7zEhptutRhkDy2CLrv",
  "key3": "3MZUvAwS4ya9fdXM4kSpjR4x3GuDu9kJz7t2Netmva8GxyKFrMvQ5qkQGx47PqmVBo2D926jdZRDbJwjWQPWJ48N",
  "key4": "5qfnL8JKfJ1NPgrsC8fGjL2jvYDVyE5VUtLyKWC4j2YcW2SLseGXyVe5sKKoZfHRWRK3x8Lc34vow5d5KLxvjZss",
  "key5": "rTJyhpRnWh85ostE5EXfuJaqGEYdynVjyzVAi2ZqZJ1A2HmgsYgP9jd996gFZHkcGsYTyhxkLvAk7GMDHu76bMH",
  "key6": "524tSALs2QxQZPV2nHJ4NrrZQh4E2WsUgKq7xk6ySnHhxsWftdPbRJsBLaWTVABRyPD2WqEosi8i7L9SrDVabCqz",
  "key7": "3cCEVFyXHeX12R5Wc73BBozirh1ix2Tx9SWfsir5XcSRKWUobSxbZc4mnrAXM3efWXcZxYr5uUMXYjuBbuHHr1L",
  "key8": "22StBsZq1sWgNeWQxg2oYfqY6MCk8YJQJWcQAUEaZjRqKGaEZG6RVyUanpjhUQ3uzYX8shyRKHYDWWS4WWDJSRHq",
  "key9": "5T3P3qiFVygd9KMeyNsYyJqNtw4p93mkhsT7oj43es3xbwa9RK7VW3Rh48An1PQNXj1BBnL4XPmnTEn4ZrVcewSi",
  "key10": "66znRHHxiHLxfYncYnEhWzFCH2pU5nPWuGPww3v97mqAUz33MWR2zNmug8t5eFbPpjPVWwFzcs9M3eYrPjgSsZvR",
  "key11": "5Dx4MEtz8R976kH5QZMxkUBUGE1KFjuHW6mv6AHz7iM3s14FRGgKbaBfQZTFeEBwRP9QmtomYAnABZmFKGqh2xve",
  "key12": "23kGDQ4nrw79MDn9rseKu5PPeffTkBKyCa9kvk5Y2KwE9ccmgLAjVJZwX7QGPuy3p5QTzccqRPJgnp9YfVQf3Sck",
  "key13": "2pZi3u4mrMJeN7N1kTbN7hvaR5YeNxFoB7PLruD5KiQHozb5gjDy7ykiCA8PX3tqfUWNuwUrKqi1tZRH9uJafgUk",
  "key14": "5MQxwrRQyqPSAmf4DuMNMGfvCoRiPp5m3JNNDYYJ9CLJXjDdDTrbNufHU2NxB9w89QEbrcf5ME1dFeD6jN5xichq",
  "key15": "3vJNnhxo3xLsacbVQwMwfFUxLVHHDt2QHnqLwrZyUbsBjksAk3HBdTa3DxHS8dmtd1fvBxZZD84k3GxMv5QZcS4j",
  "key16": "Y84ECvws9B4wqze8eAWaVjh1rc69wTFZpu6LfxWsCQGCqCw63HxYSTLh568zQT2Go585V28pnApSbrqvqD3Ej9h",
  "key17": "66KBcDps541BE5gQfJJSFtc23CkxbQHq9ad3HxnhASRoCpaSBbdcjz2RB3kRBB83WmwmfnRXjsyjkoYWvR96BXFE",
  "key18": "2e3DW4KrxuuQhjCYaP3AsoeypYPzaUm7TZTk7tBrWPi9jEpkPAYwPC89wPRWjhKjZsdSsCs6MZsPw4YRPVH2L6xE",
  "key19": "5kp7jgn2GwNqaNCvo7vDtsebWt57KVMetSCFcd2m2WKcHxdDvMgJNq2dZfjJHWTwsx6jdVEMWf3KwhuHW3YoEYPB",
  "key20": "58Bb4v7Pvz8DZztkPSuLGPcgBsb5L1QcxemWVbBPP8PhDJMZHa2u4cceccxzquvLtr3ZAU1GZQCUsVdPdBw77CZY",
  "key21": "25Xa6uvdmXjFh69rzdHvZqpLXxWQAWjze1oZrnK6MbXQJLr2NuXk1Tbb7Qn1Gmjsd1FdWQXUXYRMa99v5huwQcCH",
  "key22": "49eWJcE7VF8upMw5J7Lp2xsBkjE4NCSQdLkWp1EMjrEHd1fiSL2f15AU781cjQWnD7bCHz1pbPoapoYHbM5ydfvx",
  "key23": "3MzC8SbqhJ7gBFFEGPBMhCjXb3bV1GPrgvGjfyAP35rjbfEsAwcmeMj4zDPYhArbqnLCB6c1oB6xRjNvtfdEKCZ3",
  "key24": "2bZddUyeFBAFdMifb4MY9n4WXfmVL792daNZHMS3VZnnuntrGHcZK5V4d91DagXjV1jUsY1gZfiKWjp5KFNZUUDB",
  "key25": "67W3WydP5rSL7JMDSqJbR1qYW7fnxu3sjK95ES3DwBDXgE1AxhZLZUfKgZKNsW5aSDBqbHRk5RYHJMesKdi8VZEc",
  "key26": "5UF4r9s5Abni3HMsFfvihdQs3wg95dDboEP6RctEgShqMSp2hWCmm8cEtASCdutiZBYk7aNBbnnCsi5MTMxJMjMS",
  "key27": "2xZWDcuDZEonoWT6iThi6kNwKReUYJDpoPnLvyHFpsLvHCVF4YUo1VoATojay58HqfHFdAArnR9yGdNYdDRiPnLT",
  "key28": "4NWmep758W16nVczZY17JpCoJVsS7LCXV7QD3WAxYBxCj3qdz77KnRCP1xuLpdoNr7gqAuaiPU3e9WaNV2YNjqPN",
  "key29": "4MnzMPYzUwjjjDE6q2zV4BdcEfoo4bVGx5NVqCMnpBiUVkNXd4X9dJnnZoT2Gr7djSo3wHCyftjtobADFekqojGi",
  "key30": "4NpENA4AsnKSYHTjuz5GEFXmbG6T9LdF2FDMQHFS3AT9CZHBCVVpq33CG5Bd7HqWVEZ37kV6Ej947WeLBRrR5T5C",
  "key31": "65iT3tHYWqUZ7vNXTDvibqTiM2D4JVotRPsphPaqxX9ikA1nTSepxb968tMNcvMmur35hfsbEVgPUadiFwvzkve9",
  "key32": "4z2zMgdQA8SeMVVVqP6MgiJaMXWyP1Qq11K8jSExoYezvCkKrnCRTQzP2iLaneWW5uquEwQrWZ9gn3uqECZTh8Rp",
  "key33": "fTmo4KRGzhzWo18NYfMdb5LHH5ekd1pqj2tjKWT4xGyjCyky44Ghse4vbms3qhYMcZmJdn3vDFYt2kEKp5ZADDE",
  "key34": "2ns6djieHEbMwd8g8BuULzMidTbvLtz31yFQFUvAVhGFDYVwvVUEkdxddvBQGw2EjjiuGyRCkVurp6vpAwo1uuF2",
  "key35": "2dpsULPeBM8qZTSfTHL6FLrL9RhsfLQWQcZsBHY1FHDL4wAj8wSUK7JCwhcG6ee7zbUieB3NRCJg7AkXE9wv8SgF",
  "key36": "wYUUBC2gCXGFuTMW6a7pxGWPxoqDGhdR2odEVeYWr2woS6gx8wF7YHzU8Gvqw86cdvwgNAhnet2qK1GmmFx5q6C",
  "key37": "4RvRgiWCGPHsDmrUvAyQAcmgjPH7tppSqdfVdsAw3DJiMCCorDKij1u3pyHTkqN2UP2ZwiJ1yCWR87QnUbwY7kuk",
  "key38": "DzuPe5r5sukZgdxwhJ16wni9QiZK7CeUA9iRt4F9qptrGiCeCzQnpY6V1WDeccQ6wLXWrkjHSnkiB8nCDmU32Sa",
  "key39": "5QExKQLo2jqQ6xKsQwz4KfqxmQZ2EDPiMc6kyc4VqvfkadQ97x7sx2UC8hn5JEyhi7JbL84hzp4i5GFFWo7kvHFG",
  "key40": "3c9UW3jFAEujiUF9UaU7BNT8SVErGhni5khpzB9WXaGtseHicW7jc3HjsFLuTydNgeStemy3ELy4jN6MhpJGjAG9",
  "key41": "4YvKuREjZydEPBRWnYd9ubzjzAEsDrUN1iZEJgTR2xsTUB7BPMEwDNn8jnTMZy8nC8EbVwxhGakZk2cHBKVxT2Ru",
  "key42": "2L9LtqHbwFQUucGjLu57rboRF4MYtA44XKjgB2p7MSRrBBgCvB8gZbvRheeCHsK18sQoSn9cQQCxeE8tKoa2U69f",
  "key43": "28ToV75S8XQLDvy82tqdMbnmRnPSYo81ay4bDJSFgXtSHUokuLgVXZHxkqPnqvfnNUHyh45DmV4aA74fNkfARY9X",
  "key44": "AUgxKNaRHNaDaoDkSFz35Wj7mRfvQzd4tN5Mbj4g1cEHHH1DqS3pXPzECre9zBZXVW6QssGq66KDwkexp1ZQt9V",
  "key45": "5yutPRwAM44U1w5KPGnNBLEbEX8YdsPjwi2v2FZCq4zt9RVKhJKq3PPHA2Yb6y5GzUCEddctkr8vLSvYLFYKs862",
  "key46": "22speV766HyzNBUN6VU6GgXESGG8FZhBPqeu4hjRrtC8A4LZWnfPiruDUxzdRz8x1mfE8JB2pLqeyh3ooWoCnHUs"
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
