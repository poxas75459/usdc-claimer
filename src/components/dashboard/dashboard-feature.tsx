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
    "4JCZ6eLUU1AL7hEeokfKbLNZH5AwT59Fz3TQcCJS814hFM2uBz7vgtmbNKTpK7NTK8A6sSVo5ABUKihkANmJAhRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HoNazGNT1fGYj5mjz87u3fpATtvNpovt5roGKa7AFmsdnWnwrfxDm73xiKYUPAWYfdvM7gv5qQRgxpgdrPLyNnK",
  "key1": "5Tsa1N6UoCYtBR6EEMdWhBmV9iDCPJ9bCqAcUiSGSBfZ7VVKW3mDo6GdyNnLqNeA5uyCWG8wrhZLBBuMKbiisY5i",
  "key2": "3dUjWqprwJy2nDzsCZeCpFgo2UmWQ5YngeFRzuvkVa5KWtTvsm9LP1G22HuzCyHKDkRzAM9p8eqQ7HLa36yJPgXo",
  "key3": "61UdyVZwp2KZENcfuoziPUQvTsXmo6uAhTaPFFMaM7Au35b3HsTnVjd84bt22ikmRdXV158d3ACeiRofKRrBci7m",
  "key4": "5ZXou8fQvnn2THAjiaSMJHnCbrecwbNUAL6d5RHaJw95BDYCNMNZHePwV7eEuKPFz2bXAvFNF1FyifoMNZhG2vZm",
  "key5": "5qwgByL1LKL9kqNbQC8ttFvVN9SJZMVKyR5BXg2Zg1zquBybTo5eNfJQvnfLVQ5Lt6Nmr6WkZr1YN9weMTcsYTVs",
  "key6": "4eguo6xzmvYWMFqcGHV6yV1AA31EkKnAgy7n6GY47KAYzRKMNvawH4SPniBa9nRqvrdsQRmLU6d8CqPYpbYB1rDm",
  "key7": "48pYynsc5yqrm5XaksAmm6cu28BW4W2RUvZq9VrAcKeB677ga654AZAytmtk4iEFDde4ok1nFfwKje4y9SRKS5Yu",
  "key8": "4kroVsgXgzE31zQhiV9Hiqdh8TFf4xnfD435GY6eAhGr8HsYDr7w3LZYLToGNquwD1ZCXZhZ7nnnm8574KCCFd4Y",
  "key9": "4Kj4VjzVT3ma8BjLebt82fxF8nvqSMrwQw5dUXNvDvy78t3s5WF9MWGKmmvWHnQsWpPysWN6xbNGRMwt1TCSYgPA",
  "key10": "32ef83ps9xTD6DXGNyCdzzBmRUnspNUeDThwYvEgjSKQPPbjHgDgzk1T97nScKLcEtvwBUm5qBmuymG2GUAU58Ka",
  "key11": "Unv9bozu6Z9SGrTvyXtsibFN6rszDnSryym45cFj3GmuL4E7pW31aRjEnRYx9pP1kECZJsPoK5N4edHapE8gakT",
  "key12": "4yt4R2tdT2sdUtHH8YFBQd19RZ6EixbwWo1PnAizcbgu6T9HhU1YxhhWizv6oJmKNYxC9kXx2DTRYck5hsuTDx9L",
  "key13": "2i3RKykwWpMncSsLKorRhkMjB7s5iXNYMGK7eXmhF4HTZFceUF1VjkudxhJ1HqFWQBrYHj4gGCHCqHZse5YQgriB",
  "key14": "4rnKHAxtNYo3UZpWFxPS4HcUZuHSP3Mms79vubRL9qmUFqK8sX9N2MeXRGZJz8wmukXJ8Pyi7gJPmfQSAJgCNd6U",
  "key15": "4DADS6kWijKajhCM8xtCrnpsc5XbUBD1M8LGknUH5ux1izPLb1VcqPbuCVTwKKH9jDAKfkECAHfH68mEQbae5DTV",
  "key16": "5CiSE4SNYtDLMCWuyrPtxP4rgtXzB7nRgSWJvaiGJFpmysveHxp2QpHQaeSLLNdKHLoE4rnTExMDjHGhNTdYA6sM",
  "key17": "4FiXxj1qz4HhDadbmFF3XjqSQmX5e3wpY6ZnMu6yNjbY3aQSpSHwUhr8jMXrXxHdvmAcVgL2GYBwnWxYTEm9ZCVe",
  "key18": "591gKtp5EiyXbGwJSnw2QaCKE2pqGNgHGKZLypCgh466z6H8H9RKN84cNzdBtXcpnyfeTSQEdYLnxDV4yQaCELdF",
  "key19": "4W4AD3oikMDFRGftSpPsbF3bRF9WtkDGaESGMVF5rDJkidSpb7oAMR5RyTQiPwFppUfXcYcJUqj9hnVv37PAWLLb",
  "key20": "4ipYnRczp89kp45eJnDjmoCgDpiHZy997h9R2bWHSBCy4i1hUsNccX8xNpCLBhxEwSngnBhCupkv8ApxAyNX7WE7",
  "key21": "t8YMTqA1YnX6MyMcvqfz4qgRzAULQHA8Sdix6ersjtKgiC9zS9HY5CpLc3NFknip7BdNupswamjCP88NK3QpPhE",
  "key22": "5CgR6Ebkks9aVuQGgfQgoQBszgdtRU3SS3hGcETVzqWQ714bMGR9obT74TyMzm94XxG8jCfQA8HtQdvkofwXPXwj",
  "key23": "3viYjEWyYKtaknt15KDT2nJFYFPqiXMsRmDhYVaumjVTzqsKp4xxEnQBo8CWtbJMdc2EXdmuY7AC2Kq6RJch6qWa",
  "key24": "d9bbQRGqULrFJ253fz3jmVWERUooxdR2b2ZnVcWM3cijy5Z53BT9qkcTpmT2QvfkmiYH3tHFJXFEunAMyfBukF7",
  "key25": "qiss1HRhL1zT8uTMnNmhVf92hGCSxAeQueytwENeqMr5V8ZpGomWVd6weaUhWJGcgf2UkJNPnnvTG1mhuKBChyr",
  "key26": "29cT1DnWxb7oWJAt8jg3HUt576d7LdYNDFmJqVGetdrCQE9f2uxJ8xgqRxbsWWZsvGEPAoMpqY34B55RaJop2qoQ",
  "key27": "5wBU6H8d8MKhRGmSjx4ABUqg6HdSvm5NZnscsPfAv4tGxrANHVv1g7mJ8ahBoTmhZpJCkQkrY2TrR7o3UuFDAtYp",
  "key28": "TGjgKMNSa3vq6deXMSembbPySVwCgQeJkTo8rvsh6aGFttBKSaUmrFoy3D3TPc6vRtyUiZsodBUUAeqQmeioAJ5",
  "key29": "5tTiu5vZoDRwJfhy7kdttBvVmJHpX4cVjH3dV11p3X9GWhSXVKL1HrCDjBdRe1bbfXQe6GertB5GPByaEHX2PfFB",
  "key30": "4pqWSSy9XoQBBHxKbnv3VDJjVaPRwbpr1Mwj66Qv8CCW7MygMyxuWg5pQ3bjL5agWAYeG9iTtd7LVnj31bbpB7Ep",
  "key31": "oJvoG1dcyswPBq46gALTVVyfcUnnLUb2ugtJen5eKTGqThAdt1Wuy7fxsbKr7XmTCKCvY8uJc3nL6Gv6UW4dhfv",
  "key32": "C1xgi67nUtBHzk63vEr2qt3psCFfYfFFaEZ4xquA2HjJqhP8m6DV2GUetKJ8URS45tqsorhDNvWYrgy4YPL2shB",
  "key33": "4QZovo4HTf9uJtXMidaxqbUvgfEYFLPvfq8kRuTbCGTxKjAYjcrcWKKvN93gYxq8wnJgYYFJDVgSmtPpKuZN4vxU",
  "key34": "4ZnaSPKVBrk2iSgRZv8jDJ5jfKRTzePnRrE5squCYuyvQva6p4fk1K1aBL8SP9Lj654pL3k6uwr5s7yPvLW6MY9P",
  "key35": "PxyZHNoVd8ve8aGcBzTrixy7KgZpcX46ZBRLxL2PUQoBNK8F7xyGxXHeKssYZukCcK3BmRMKgoaNULUh3XUVJvM",
  "key36": "5gswNfGrHTxNFoD6VDQXhfcM2sNEG7hjpz1QLyDc8iB7ci1xgJRZwRH7k8ddCyutjLKPLUFd3Yjf9kUgyYzWT5tN",
  "key37": "54r7xWiFuBdaCavW4ZsHw7tYi85ArrAVFS8h1AaRTZ2viTf1QTnDsXQFpBXnZbkd9JfBAQHWVbyCG1fkVJq7hNeq",
  "key38": "5VsUwG7gZVGL3K9qrC7G3pg99G397mHJRpt95LWBhEa6TxDUTku8VShF6TL1WND38k4FAhT38T9Qpbcqe4dy8a8t",
  "key39": "3CY4GusxJccj7KvuFJ4FCP37J44Xvc78GECPTKcidVF8rzB5ecrQrr8eB5vBh1m1oP1LKaXvzHrcQQZTaGboSFUv",
  "key40": "FiK788f8SDa4GneG4z9ywWcEWLNiFy3f3QY5CCoh3SEmbBL7FnSwShriJigwJbgtcL4Crtx7umVUcHomf3uz17C",
  "key41": "3DH9A895WgNZgY8Ui9vUCjUEowdEbHWubTBxVnfGyGoiXB9M5Y2yKHrXMGKhQ7xd1JW669TzvSQyPN6CG4LPGsWN",
  "key42": "3qkPEumAUt8icSRQ8zDvwova3rXUf4sr8XHHvfyKcYYmb2A3XnFYEgoqPTiG7Mbonbsrgu8io6ouVYwycy4L9snW",
  "key43": "2ceDUVEV9WYSZC6erZXy9bkVdpZEs91e5ETQjFkS8b5riBGgsgRv9D69B9DdULWywqfru7rxnMqaqSwJxAuBroX1",
  "key44": "LFGdHvEivyMjghk9o9BhPaR7hsStGNDH77uDgEgHnBPUTfmbWQYP9Yo9F65a2YaBWcLHaUMgFjHpzrrwvEe8ba9",
  "key45": "7KCrQBHFVS5Ahe8uTDvDHteScdeGSuJ8R12SKM5wtAEtz6CTTeixwDDtyvc5bFrsYwuj3mVKP2bNf5Pc6CNzRQs",
  "key46": "2N2MRNDpSPmHjuDniXzpvWz6qMDD4L3DaTi3a1vhncZeUCSa5SMbbQFAh4LrstmrGjJszFR4kGSELohwAgqfkQzb"
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
