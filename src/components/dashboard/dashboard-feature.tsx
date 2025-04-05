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
    "3uCR38S9x4YHbwR1Nhr6WqWX9uWKDL8oi5nXim9BkfaZ3AcyVVRD5Ur23GARibnrRUqY1FW1XP9Q9PyQtWQ3KYE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mMRTJpLwJDaQ5KQaHXAyqajbQj9tMmSVBJUuL6bQVcC9A94jqwP2rYUQC1cGpUinpnybCFeEDhsehxk7N34GP4y",
  "key1": "5KcrUwZp8AGbKnTCF68myP3dNPu35xpouVJoTYqbaLW2mpCxkiUw2XqCvydTibo6H3bqq9qB58KLyCACSACFzVpk",
  "key2": "u7FvQEG1ot7hZrfEAmTkFfW47jwF9kakUkNFKvDAuS79G7Zak5imHECCvQRV97VJvzdezZLm8jjzbVZmpKVkBQ6",
  "key3": "2ULLFtpaxiqWxKjFnwdQbnwQFPdfkyP9hXNir51QRBZdq1DA9siinALmVLxfSUmingwP6rLc3NdREPWGBRYiZX8G",
  "key4": "9JBwHMJLEiLHWFDkYmZUMsBHjGDJK3hhKx2UimzjM5WTYM23otoMwh7Fvy9eyXxY17F1sSvQy5Ux9ddciLXBmtF",
  "key5": "3UeECFPkS1CFRHRf35qSBY5B9iEEoTXnJMEYTUTaz1mB21dteNXtKfAwtWxZaL4P3cBYkbe9FzfvrTAd3K5eQHdm",
  "key6": "4o2knuDiMLb8ciwe33e5hYjZqC5aKKNS97ptArNKwon3NFgoVgSZXozcZCYPCZytXNHFjkSnUzT4JFaG4fcpV4AN",
  "key7": "2uSpUfgWbW9d7v8PUnhRDS9PrcJtKhbjTJKaXEx2VZCpaggn9jTns9ouGtNHB2cuLzTzJT7Ajaosf5DD2A5ViwSk",
  "key8": "2FcKQ3dZTpohsfNG25d6cgcY2UByEK6ANcanm5JWKVQFaaK8BP5mjaYhi6YwTQYCYcrgbjR1JL1q13KanRYoyKAp",
  "key9": "3qrL9mwUpNQ7H5D3ZQBLTaJonUvFYJC79kWyvGNby2u4rVzHiwYZ18pXhqZUgy8LhFjGNhv7BHdT7LdqntvRgmwm",
  "key10": "32EhSLmmZTCMStNtSesASDfp9EqZ8RV3FXAn5rKjMzW8krfRuUF1FVgW292PuwW5j6BWfPMmXqR3suBJrLHmyBSZ",
  "key11": "61iewVnWAfffscuUhfPwsaF8atLuKXdHgTuGSiMRGyPcp6v6C5EqYZD17A17CG5D3s5AiCRLxdQghSQZ3heoEVdo",
  "key12": "4MsnhYRso5cVMqsR5YT5e2yukebF5osBSjtyYaUGdzipBhanJLBTs8JfL2n43o7rXWAF2k5KkxDN6d7P7sQAvxVB",
  "key13": "3QEfEyvspQ4wEthRNcCNify5VYkZY9AY1v7W38idjng84qiEe4c6U8M83Ud9tkA3GV4JsT4x9PdWgqjfwireitSW",
  "key14": "5KbjGkQ2pKdr1ggvKvkXDmcfwbkihmn9bzJ7ETbiPu5f74cxRkg2FK4ghve6eveNrSnF1xAjXcJNGDKaEtZzrF5Q",
  "key15": "5s2pWagaHueHYy8daJdwBvQVS4ZGMWabZ1pYBbRSf8DNR9zBUaJnkDibVFTq3MUwNwmYnk8ERfQugZsgAu16Txuy",
  "key16": "SYG7kpQgCiUsM5bmYGDp6XtdkNxBjMytYAgvTKMsAdQ1p8ziYhGSVCwV7Kodtj4envZxbhauWQPmKGYDWSLKDrT",
  "key17": "2o7jdaMY33Wea9k7XnsmHJxMJAHR3PUjzrru253pJfnEX3tFesNyhuBWPKDKHrBptdSAWJR4Pq9TQRk4MxfwAtrX",
  "key18": "5pcXGUGj73kz1Fs2SmBtx2LoqixftMgDJeR6RW6ak7hHpRFiJQdhBbAqBdn7bB5SdFPdFZgRopDXpij3UUtAzsm2",
  "key19": "4MccULU9cu3dg5Pp2tWPZJJYPXJ8s9AWn2qCFP41iWrKdmwuLMVy9nBnnrZrhvKRA9V1YDxcSBqSHzLM2GzKLDh7",
  "key20": "5RwcxAmQBsrRwirBjaFdyJTmg5kUFzBmkM9hghBozD6t73Afdvb9j8RgyfuNcakPMnoDk55urQkdi5c35VADHxrp",
  "key21": "3BuAsBaCeeJ685rvsEBHQZXjuYNXrM92DS8MVQbaJ12bsFvUhLbyH7j5Esi3rZemtgF9G916C9cJ7xUmoyefQYWA",
  "key22": "3xs28KmoCsU4dbx5x5usdimyvLcmVH5MgKc7CjVxJ9RMFnT7GLpj5q2k8Uqja4XvxkFRwg8ViFXq6HrYd3CgWNYZ",
  "key23": "2mWZMHKQt32fvXzsuqeNJszu4L17cBykzZEK9GjAtuKLGvY5p5gutra4A6Apnu9E3v4mh8H5eM83R7pedK46FQHF",
  "key24": "PApvMTmZ92nTx2we8ifjL7XExgQJgdJsFffBEWsYiXfQLAhkiWsQgoPX2rThStRByMYBGQzZjFrAJ6K67FZZ7JB",
  "key25": "2uqPWRmpYMmLaR76N2xmjNvxG8K6CjxF9hHB5QkmXjRhJMQoufPH3hd8tMxg6xFHVg16mBwftkVoj1jQJXNsPKKx",
  "key26": "PfffFiVPATQUEJRbrzxk8VTZCYr7N5a6YwnS1rB5Zgi8X2cs1XVDYbM3DA28Ttr3aHFSALbEsnmh2VxCTNW77px",
  "key27": "2zY98b8MDMiXmxiwh9tsstJH4dKKznaJt5WfNxqZrBWssdwYafAkYcJydrpeBxk1c3oWyj1bJxo2aTUev7uppzfN",
  "key28": "BAEcyR1aaBBpXxPUQd6nKQiuYJ16CeBWgntPQMFoTtrLD3fWRWqEPS5gCbwAjPvKJyFPCWYAAVnfa6LtWjPp5CA",
  "key29": "2bZ1TutZRQPc58hYDf6R1nsUbSdQLVLjKXfkPA91y3Pr7FxhUyzHaieKHrNG3UtyfzL1cyx583Gd7k67fM1h8otL",
  "key30": "4Rij1iEGzXasZhWvTzP3x9PMGJkfvCd9LrLHcaehqDosjATW2dXDLNFUaSTYbc412eSypoPtdp6hzpUKoaBcLRMD",
  "key31": "4MshjWGBf8XC6pdoWo7AmGuJE4rysV7a4SnxmXj1WJVV1mkE1kSZszs2BZuXamsLFUNAZ5zFFojHC328ELoKFGes",
  "key32": "3SjUc6v5wViwhsjP1p2BkVWGNVUTN2iHnAGPRBEKwf4Dm4gpo4z9DJMkVtmoAo1pmmhPf2vDWAMYZ4jfdqWriqnt",
  "key33": "Af6viXtP4zagaGFg5yKeUNVquQPDJdAgfshaydyYZvnWSvGH31WzkNqFiuGo1pGq7xqcqwWE9m3XFEPTe8kJ8SH",
  "key34": "NRnLyY5B9GqPqg8xe2j1V92jgKFRUfFcUw8LVsMio5DVwQEmjYsRW2MhNouN28HnNou1PbK8xYgmQGp5NmaoGZN",
  "key35": "54UhKpXv8bK7ZkDes71uPuRL2oWg8bDrSc7GmsuJramyiWGKaup2y48KRUpt8J1qNksAWynVhyo6e4A58C7WLB9X",
  "key36": "3Voz6hyci4ufbCBhvq3SUJ7XoCYT4CNdz3A1FwGGQZYj5kTXckYHpzqkjAmfVGxoqfsiWDr8G3zbKV5Dy81Eg73H",
  "key37": "j2By5vJqSiXrEWcqivYbTaSVN3KfJeNf6Wyxi2qchoGnpeb6tq27LjQASMY2VrNwFUs9SPrmHSm2xpCyTRc6qAr",
  "key38": "3mCZEpUwWNMgi8GyZLxxiWgBWnASxTd2FAyWbWfjC9EvxEk5CTm5GKkwqWcwhssm86p8nZwFLpEaSn31ux1PMr7w",
  "key39": "ULkUoCzFZteSfc1jXqHQjhCp5xn9oDwVBbjDJ78w8MibHRq8Um2qyBDpWRvYp91rsPdQAeGmmhic2vJKTxM8qft",
  "key40": "3Sk5Fq92gvnmemu4WT4kNEXVJuieuWRTe5GCDEh9xPVttSLgZG8ozmy8Yt9GZpCbNNRM9rShtdWUBNBExSBTJKLq",
  "key41": "2A2vYLcp5re2LQeYdjTzybCuDD9jzPQLdnQF2yWPCEVixmrjxXCMi4giFJij2SUchiXVFB46gVgrU8ApjYXs2NTE",
  "key42": "4ikQPVGPiaknw7mkfEgcQmHfJreEwNnpjoaGHktr6xm76Fgunsv9LzQj8ia7GF54t1J7cSP8BTFMQYLs6LmqD3T1",
  "key43": "5XBAt9mk8sX6ykKbZj5Uz7KwyEmjf3dRF9t4Z4fdgdjRwNkRi6wfZL6pZgVWRYKpHQhp8wTVFDVbMyXewBhbk4YJ"
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
