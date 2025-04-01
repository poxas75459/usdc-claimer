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
    "5DQhHGGaFLBJ2zvLWM7VeQZ2DfCra3hpMHQj3Mb9pV1Hj1jJmAzXqGGnUtmjnYT6cwD88UCu4TdGYS6vinYpM1hV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tKTAMCTu9zLt3Fs5u7Nzk1HtGWnyNpFoG4NeH67DurZZmSoh9d6MwnNnviinvRuMVoPT55goDXsTzdZsaayiE78",
  "key1": "254JzFvjVtecX7QjGF28C5kNtSPWhNVmnEvXbib4bX6ztsPfLLAEK1eb6CFfW9FU2Ntd7UbjcDbk5x8FBX5EHh6j",
  "key2": "4ZUJJT4jdCxUwh6pSgLAZYzHg49JkB54ektr94J1YiZe9KYaDnnSMckxdfDVo8RXUyiJgwWvnmEbEBTFi1N5gYCR",
  "key3": "65von8SmDU3MH1QE9ubfXjySm343idQnqHiQv72tK4QyQs2ZSqYKGtbaCPapKjMQ8m4Zcgpqr8nrFhPbmN5F7YHW",
  "key4": "471P9yaeRLfi1sQq6CDb4x36vxp6bsGa1m8tMXY33mDE1r5E6apwhnNg82ERu7kUQfJ3V8vbRUVyvPLh3xqN7eGs",
  "key5": "3uDMuszWBskGNb8m7VbFqcyn7xfHY1mnZg1SwtQt5sdydrZdTEsEA1Eo4BCqSbiNhghxPM8gcA8rNmUe4W4cKHNi",
  "key6": "5JZPpMzLQQ6xyXEjkmm457nANctSRnG9M5WJrimo4c7fjVhrHRe6ntehdcaQQ6E67xYfKjQifvK7MrirKvhGibWV",
  "key7": "4WCoKQ2YEWDi37pV8aAdDXBpmfmmex6hd74bvajmoNYsfq5S8z1RYocA1pJTs2N2gy78UQpAWi5v7piLrEmYJ7d1",
  "key8": "5T2HHZq8EHZ8twKmmSG9XY6fbmBFa4mmgeBQzR4R4edB8sbTzabeFutKFqtwKz9eLT9AGgMyjnemrcfGZR5vbc1e",
  "key9": "4mqQia9b3Ejg8vuKo6XfztUvp8MmxFvZFBfnZZcNRoPWtx2eDem9VFpPrYTpfc6yghH38Gwd2cwNEgUUXgh92Ud2",
  "key10": "4aUqoPigbb4WmGhnSQ45THpLAayvVam1u3ZJ8duj5TnMnEBp9nsnbSj2Js5RnUpSnLJhGswhCXXid2YiKkwDc8GE",
  "key11": "3YJciadbJrGRwrrt9dX9VuWAeb42FDLmFMnh3HaA7PusQLJQo8a65rDyEVF23qhSz4ecB8TTPyAbwVehWmmYpSW",
  "key12": "4oyY17Zu4GWATHKYq6kHGMBecWXQEsF1AD55474bQfq6dneNU7n5wqTPe7xE4xY6QkssCLqAJBHR4RGCuvdHTeFq",
  "key13": "312FxDCTHfv6Cbh24dEcnWrJEUwsoFmpp9AEVbpiXVHXNAvbJjQ53Box51Ysk4JND4ede7XxEpffnHPwnxHEvkxM",
  "key14": "5Nc56YznUhhau7Akb95KNbL8Ub8qqCsLAwUfosBGZPFS5szqjPzg7Y1e7YJpkEyYLPAFaSzp3JLVnCLDkrB9eN4a",
  "key15": "4L2nU3HqhR9vepZrU1CvXgU9DffaWaB6SPSZVLnfB5SJcvBWHVi3owCrFYsWWttY7CqoEt4EpeEwPd9srYWZvvYS",
  "key16": "vaDbCyo39M3nryYfP2UsrUbtiepXNna6sMLvRVGS6oTvfzByehoKYYhjC2shUfvX3nHNjbijA5VgbZXR5GfQWTQ",
  "key17": "3G5BjaNy1cLoBUE5SC1D6si8p6uQBYiSMNwqthNhsj7hNuYmZsNLqee8KkR42aGv8waajE9rej5q1KLCeGC1Gzd5",
  "key18": "M8oTBQCmLLKj4nCUL4C91irZqqcakVEV2D9nTPdarjcBRGBopi5J9GbRNaKvuUGvDDDgDSeqvNdssTjxrEvEJ3L",
  "key19": "35FtBStczya3Brqt7GxGVEYfLVXSdYusRtE7agEzmsxq1bU93XCfv3QNVDvtmMTTmJNe8oi5nUzroMqTqbinRBtm",
  "key20": "5vopN9GZAqBscW4DTR89vBmYbVat8i3CXXHhq6FpWRv5x8Ji7V3AFz22Qw6MMVx4n5jQ9m3waPVor2ffztRtJ3yF",
  "key21": "ANzF3WgFQkWJuh3Dq5GN9cPqacPPigVQiJDLXD3G2ukpCKy1EuuryTPxkb7Ce9NpeJETTspWvZRxb15T11nMjLQ",
  "key22": "2t9kuxDUXXRbQDqbYkg9w8PY11cocRugsvukeXvAvE5c1E3mVwctPj1p3B78keeK4Cdzq5HdXV8rCJFNSSnP7aDM",
  "key23": "4o49HwSWbxcZa7DeQVJorrK2P6E4SpqWeZgH7einxo6JKidp1LqSdjVtLmtfPpXyQTbwX55rq3Kp6AyHziXUk6WX",
  "key24": "cBZzWzh8Z7xTYQwJP8L5ZVahdWeQTw4F6nTyzBQLCHE35Hzc9aFmqeD5cxKvJiYKxsMFZ3941EfNxENhEMNKgBA",
  "key25": "49v4eYm6xMXVJkUhbYaoi6tzxjZYp416rAje54TR6atWYMcVgxVCpLKJG5q3SMkMRqcn1t3XDNo2o7QuZgXfJFH9",
  "key26": "4FAcRrexsYzCMU67wuVWoxa9FY5RMtT78DM2N3iAdRfdCBzeGHjX2kNWnND2jg7MLGoh6k3pNGiNWYu3xjgvJJNy",
  "key27": "48WuYfjxfeZ5XJ1iqfGxyBMjpBEkW3mZ5rgiPust2PcUKzxytvhd1HzrTWTvDcWV3pP72v1XCp6G2ZXmuKyLtBfQ",
  "key28": "2fBsmYV9WLoA7xAKQo959gtqTXEMn1nmZLzPfvaKejFNuNdG4a1jfTHK4ogBKHk2t2wybTzDLdyAwaqRsmZdqTJ2",
  "key29": "JFrAY58nNyb5dmhP6a87QtqkQGMPejCCc6rJox5DhxQ9BpgKHBRxbbinim6hfPC5bnSy2zdD8aFYua7CKYj4Nf7",
  "key30": "2eYybs5K9FkVSzPcYqVxHZvLj6CQw1NWNtUwD9kGur6r2BwqKcWFEbGRpbsKWXBzFSDwZLhMS4TZjMbU3dwJ8tSo",
  "key31": "2cedkus3qDu9vQ3deFUPapsYakfm9awY814bnJW823W9CWrJEhRqPkskdSxoPjipzpdUtzLZymGPSS76ZJWcJcdh",
  "key32": "2fcpDCdpqCGFBKj4MXLeuTG3hUAYjsvWgJF5ZVgzBrHuN94ZBkX8d5fHqbUdUuxe4AZpf8x7tbV8YucWSCxRrbzS",
  "key33": "xLmo9dnG3QykWXLzVwD39FYx89N9ywBiWmJvw8du3kLgfPuUE8sgMVUaTPcg9QezSYT33FMGfJfmXuLCLUt1LEU",
  "key34": "j8ac5kNqVomrSDCJQeS3FH2mA2zQT7cFwjq7yK6bty5LDxw81ajEjZr4QaDE1vRfkfRib6SYqercmLYxchdTCPR",
  "key35": "XfaQtqDJKVsv13dJWH6D2KJ4kQU41prMT4663AYbMGmreq2D7mmX6sYXHwpc7CXn7hCtfZz1PJvzFwBzoqJhgvC",
  "key36": "38XuRWM6TyULhzgh5Xfd2HxR1iw8TLTg8EXXRx2Ka8NbRoPRCzXjr7WkqLjnmmK12pxrF353LZrLQvU87fDnmNN1",
  "key37": "5qhjCq5ydLMuTqZxobyMTfRPQovYaaZfsbcCkQ1cX1TSJx7qAJGnnqbzrJWwsPEzYFTQpfvDnvQN7BTDSrfYNvDd"
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
