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
    "26XaSvx5ud6q7w5T55CJoS712y7WtkLf8R5YbAjxjyZ6ky8NkPVTo6dt9TNbi6xtFfpveSccsgTqwiqs1jYEjJ2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65e61TgXYUn6QwpJkqGVTBG2Uaue68KsyJXhwyEf3LvUwwP7aBG6Um4MBVfvZo9r7nsEm49jnBVsKGxxJA2XyTET",
  "key1": "2sX1rJLxTbMoK89fVgSGdadKoefnxKbvTP1D9DzYHzzhR37gsuL72pA8recjqYAyQrR75Kw5nbWbgzsSpvefLvjM",
  "key2": "46si9goBzXNysbQNNYWpd9krWLz387967zYsp4dW6BTRpwKAno9DgS1Kro3m7ozPuWmrZWp3pSQNXF7vFp8eM1d9",
  "key3": "3hN8sAF6grMLHn2KFxyuV4yEYqEV8RLuAr2EvKhSsfrXS74sEAvjG3Vw2LvboK4H5qZbWMtq7Ja6TQRuZXMRJPas",
  "key4": "6nqMCtwaykRZarXv5DJ8yVo57XeGYnrmnwTCCeSyJ1GFdSbkh95iw4Pe1oaCCLU58w1iehh2vmY76jSz4zM8yjb",
  "key5": "2p62Ut2VsZWmTKxryrvk72NpRgfe7KxqZHQtWbKokRhCiFaMvRAz4437LTpvR6mjbG8Q9CwkafQE1iA291q5GoTc",
  "key6": "2BXc7b4sR1GbiHBL8WLsXAX1kW5dGvdqsFKgprhJCLY53r68S5A4q2LWtyX2P7fMmrMdhJ1QmVuiQtG2QC7fVR1w",
  "key7": "2fCFhyYNhvY1HgzHb1npA8VqtdnFMAau8LGSJg2yRmJuMQurBY5mac4D4LoygCdMzd2Wpbgekrrc5mgK9YbGYonq",
  "key8": "nEGMHv37CYqkSXVkYeAqQfySP57WM2GXZQFu9RmSZYbH7ZV9KmUsUSTaeMecwh9xMqimer4BnpnbpgQhWjabMaE",
  "key9": "5PtTLELLeq7KRAUKR95DddQyiNQ6An2K46AvUdSdoWB3wuWe99X4KM8Ya1Sya9fcPGD5CGsdpZSZQ64VUWgovPKR",
  "key10": "5niNCuaZrBC2cJHB436Cgj5ihWYdNSmTiKcN9nRBfsKG5URAZzh8jKvFCRzvjuCi5e3ZAw4rEfkJAQNR3qsBRJo4",
  "key11": "46CS3BAyNZLpSwQA86NhYxY2M5d8Ve1hZbHKzcgp5Qm331GAKn5tixr24xWEALpRtpLAo5cFiEbZrhhsuCraMyRo",
  "key12": "3LnRAwzH6fTYM3YdkfFcEuaE4wbczkEswsc9wuRr2NWf95CHEc8L7kB3us2L41WXCgabhk4gAu6j2eio93cZTZfR",
  "key13": "62j3RH9hVYcrhTiPLDgfxAh96LLHtqtowPtUXb6qSvEutH8MqEk8RJ1AAKbqhSXg824JMKWVScUTDctQYgNi6aM5",
  "key14": "5QmcR6SshwfnZf9XFUmdRJmR3hZnnrEaGGQPK6N85J3ke6Qiu7DWRomp5sfi1rgpYGvkT9qHsziBQNrCBDJ2id23",
  "key15": "3BDLa1sPURLytsFPpVWpjtftHym39MiSvYcMrPd2dqKfcu1y5jb7kLsBmfjFcj89hLF64Zsq7uiM61n16VMHXRgE",
  "key16": "29LfyKfWx6kvFXFqavd3PDs2Y5QfCFF6rBPbx6ofwSTMdCKJhZeJfgUcbZUor487FTqfr4zEBCwJrDXjbpEhQavT",
  "key17": "3XzqmYYvaingEUrbkHEsHgSzBpKcQJFhWquECQ9Dmtzzc2roccqJfse9Z5Qm1eB2BFN9sQ563vBsZ7TRac7sVUJe",
  "key18": "XEkjWzA5J3emEW2QFn1BaKBzstw3rwj3U75jCf7ei1ZMPjP8prfJZJsAD3v1aSqnJxktVR3VtKaBTtf3MH8sYbV",
  "key19": "35soEZVFKs448Df9orHd4ZHapM7rRnn9UKrEZitVcWs53mxHecsiACb25xRCRVxZ83ogdQrDwG8Y7xLCZeZv7GX9",
  "key20": "JPpMYLAnqUfdbpPuNJfU93yCNU34ydC5wwiT8oGQtbdpK4Let6tcjnv7r42LP9V7ynouDzHd3JL4dfsDKJT9xZQ",
  "key21": "39j5RBjg8i2fMCXGY1CBSoC2fNW9tj6Uefg182KJVB78uHSJR77uV2qUxfuvxsJyiZ9sQe4Nikmf1kLAXno9xYh3",
  "key22": "5uG9JGmLADBjqAPmDnn2ha824sCjQCbs57xfU67EBvxMZABtPs3aAGVEsJptYPt9fN1LxTABBFbQyBUrX6DoiKjn",
  "key23": "2Pq7Z43nCEwp3yqth1a2Rz1YpLp4Lp4Xm1nHnYNWoJxkFzaWcRbupRNdrMKUYuW8ty5kYFXwWwd63cbeqnVFvZnn",
  "key24": "F2paSUXKfttWJR2BYpzui9jP4N9TMAqYVxkKkmzsB5pamt2UdqQxFkb42t9dd7RCgdQnkmKr2ECffdhGWqVgjxA",
  "key25": "5TrfbpXLZuETKppzrDPUvKCBMdfQbTcM4M6f3eD8jfRhShvXYY8Ko2EXcFLJMCrLEtHF7bQrtu98n7JkTAChDwV2",
  "key26": "5sFrkoa8k63pkWR5F99CvYriuGvnoHNN58PzxfauLXao4jzfsqciFyRYnhx3kx2obJ6nhXbZuNQLmCf6Pfqegcm7",
  "key27": "3uKr5eQKQMLT33qaMP1JV36PZpQVEZkY6zpRBhyweEhKjouevwew3JLiyWB7TEBpoYYjyrYDLLH86v4ag8m4BEXS",
  "key28": "2mEpkaxzEJLpdKD4DCoFJ8bkdCAqJAzp1winFMjmxQiTPm52ko4jaiCQbm5ovRKw1P6tauEjwWfNRUCq5JqD6Yjf",
  "key29": "3wdVttGvXyHP6N4CP84rpVwNwdhrL5zzV8Dn2ax1tGzcXFCZzgWcQGsiWyLEwgdSYxnqVNzk3YHX2X2GbXd2kivW",
  "key30": "64BTswThvx6iPkN6Xe8TXCjjcGBDDRzZK2uLxotG1LpUEF3sbGgiCLjEvhgHBmTzAHFtvx2mrzk4DrY42164p8Xm",
  "key31": "omGQgzvkxWc6wmsC1DseX1eqwNCNdH1BQv4VAz663T1pufNAmvMhXjpbX87iJ7wwPwDKJ6b8vTH1xV3aVvzmeqP",
  "key32": "59EjhMj2iS8ZbSjBxpnSRi6Jz4yh9hPgWoZ1x55ibsvEJ2NapkSts5fZSe9T7bCuJdaeuAH5x1Cd9fqUQ7kyCEMa",
  "key33": "pQRo7dV5DSeJaUBgQqj4gBvHxwuDVCEYoP1Rot2hrVMsk76JaYEWFvszhBhjQfbcYKRGdqZTiyAJjAETVaoNtLV",
  "key34": "5bWACSTfMZDrt3qfGa9iF3G3t1HBt6gThbYSx2jeAdH2fdme4rDNivmv3cWEQ5SoBd8XbymQM6ZZdjJsCRFFWHj6",
  "key35": "2cFchtq9faikaSTF3ikYkS3YcHD9SLVgVJA7HNyk7WoamcWq4v3DaTerQze9WP1ohucFhNrJzmy31r7esWok9FhE",
  "key36": "2hAffHLPrV3ueL5BBy5KeWarUJB5uVqp9pas4qCZTXDtpScfWg4umYxZtXQ41mFKbhKHyejaw47aDYMAE4xanZdj",
  "key37": "xCYiVAETYvo4yJQVyYXVPDkiiCvaqyivZ86GL6EDmtYXDP8pDHh4K4R2mtiJdGwwzeSiizUApiaMQRQiMxAJmkp",
  "key38": "34S1RgyNmp4jt2GKF9b2xT88dDMRkcZJ2YKzbNLC7TrmmhKpMWLaZPPXR2U7G2ML3FfkwYwiuzCkhWFV7XxeWJcb",
  "key39": "5aB3pWd5cwME9zkq23E1ZXTDaxmVJDS2wD2kx4M5HRrPdi2QcF5eAnq7EKTyNzodrB4QiCEr9N6oAy7NUH4BLwbn",
  "key40": "42MqdHoYRNMF5f5b8MpceNdFD8Tw5yahEZRpgTpA4DaBmEhrCa3BQb84nqxmRGwK3FEJxtPZJVzDs1mGGjE2qpst",
  "key41": "57oYmXkQwyTT2GBJBA2yY2bk1DqqXUw2WYJM6pzPJt8DLQNfM8yAhizVd4wqkhHFLWoFXYRNwWitAipou8421MJE",
  "key42": "3xqj3h17uponQwHDNPih2A65mviGGxAXFh8EvVm462jPxQiicZ5L6m5BZc7beaHqcAUpwecaX1TKbSBM86bKeMyC"
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
