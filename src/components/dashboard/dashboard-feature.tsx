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
    "4XyWmuQsYJx9ss1pnxA7VmXpS53WU1XJGmrkPoQ1MQAknCXQeR55xBRxfQGSwhbnp7y2TGBFCpmHFfqNYi57BJyf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SLJbzTEYKZA52LtkCzBVwrz8StBmVPURWFX5bdBiGNyupoPGjLGHqUZijFNcyFK2eF788vmFKZpfPVTh9vNVVyo",
  "key1": "4viw4TvoVRD6CHMiTd82hPdgQvZ7uX5M8AgpZdwadzzxdHSRg94phNJouSg7Fp1ggKPRVNxqVP5tWufMV9wBdjpE",
  "key2": "1B9Yy9eij5rBSnjLHLTCUqbbPdL5ovPLk2EBU1wKeCqFXvsBnNVqRa2DNX8pfGJtSvDRTTYEg9y27j1MfHjYsCS",
  "key3": "3p6wh5Hmr5U6hkrkbjuX8LrEowqzBoD7iE9HMFaGW548j5qeCLh8zMNk4JdnSboAUptRmaSGoBxja6gmSFnCUic2",
  "key4": "2hCTM4QxA1QhSbmxUeGt9bsuen8XGcZ9oD3GH5YWCiAFpZNntNnZL3XEjnqp2T23t1ZZSApL8DiGqU8wPm7VES8D",
  "key5": "D5Tr7JX2cnP2PDB9ibMULQEFb28gTnnKWH5Rx3CqvpF55zzgoYdsLP7ALY1gqHRYoyxWHEkfzWtMYh1arxc5xm1",
  "key6": "CEszmVX5PzMYboerMf5FTVAXVuAMeS11WUtodYACcae5UevVqMp4ZBjpZmCTbqhjvsg5Bkk4b8CvsPkXRrabeDL",
  "key7": "2YcDJQxgWhftC1CZsGdcwra2Tgyc8kD8FhznX9QvNWaBGV7iVautrdzmmosg7agyJfZx1V4Hxs2Hc7uDg5SjzmSF",
  "key8": "2pA4cQCW38Lrobp8wp39WCitLrTwdfgocPE7wwmz9MwvYXW29cfb1pZsGwuFNMWJcg2zYZheGAnJG7zWhjZhGhm",
  "key9": "4rzrFMr2KjGd1jTSGRF9r5aDMZWpmGrNeEJheHogUAGJp5x9WxvdK6YLwSX1vsWc6m4YdzJJ4tCEVrM5SgL9C8bU",
  "key10": "2nCmvCXH8z7VqrT9pzawMeGqKGz8hhjc2SLvtfSaV6BrH4WRhkqQkue6ZU4u2xyuKwruB2aw2tmoPiXwnSQtSmD9",
  "key11": "5scsmpMeyysM695iH7MmqCEax9ZCaFCsv1HPENn6H4yhDPT9XrHPwXVswKUYMccLY4mDW117fMJurpqohPzxX9cA",
  "key12": "63tn7Wtx8PeR8f9S7ptJCzjWEskP1q5ywMNcJzQg4bafm2PUMkTWpWD4SB4kdqNb6R6zHNRVJNp5XLXXqPSSKr8U",
  "key13": "228DMyj1ThXZXwAY3aifZcp96Tj3xo7J4DYof6uvgGy2RFsBDy7kori1vaKGD1tQKjnbcJu1StFvg6PNGg4PFkLR",
  "key14": "5hW8TnfaBc6UDpj6UxQiynB3bSPMqEw49ePUqDwYV63fJioRdaiTBdwzopz5o7tiNAeQxD8iVxvkeuCYSJLK8KgY",
  "key15": "JuNgGUhNbJWyQ36otXcDzAUD713pt3EXf52UpwLpQRq8qNspwnjALfZ2ZkFwVCP6gAhyU1oMexFE4EUwrPmDTSr",
  "key16": "3et32JEuPgN4ZrGhe15WDFaWiGpPNKwMkXv6Wat3V1cV7zArA1nHP3C7N8GbAG4AvRLm7wZf3ygYyg7jnScZw5b4",
  "key17": "2VLgnbzqfJVf5b22NF4SLfVqUCG5Gqwj6Far8WT7e3EGHyGSqc5sNpskGzrhrUEYJkfBPe4B32MzkZyNWcR8rEvM",
  "key18": "2Znm2bV1Ufr9XNkgmvf145w1nGfSCjJ8qWRGBtwdPHsnKoxQckjYnAWSvVDmHHnLeefRPFCZiWd1Es66RUEo8YiM",
  "key19": "n7EW4wJbK3b6ZQYUHs8SstiYiSqBgNGQXHxDhRhFS3eXuAeyrdnzgNihY5gdHhtN46ovPfPSywYgMecezq4J7vh",
  "key20": "363xE8CTUZx1MuMpiGdUt6hWgMCNURxZZgSyN4bcuWS61QpbJAJfqhFLGEm8oVzZJE9TSKdkXorjL1bCydwc2BfT",
  "key21": "KtXNJUbRzBQL7vcGdyBQhSdCpVKAuALQdafd1x4TS695J4KoNsjwuPQD3xiw1eB1HgEsxrsepZg3CXZNEmRVZK7",
  "key22": "3vTcf5iZua6E4WbD9D6YZuuo1Ezu1hPt5oV2pCLdZYoZ9v3PV1ey2oZpAxTS3iaqAopCmBDi8WP3iZgtj9AiF5nw",
  "key23": "5k9rEE8Rj5PiAnquNo21fR2FSHRR24QCWwMK5GLEhEmsupEH9SWpcyFGbWPVEvf4F1VLHpsZ9CwoLegoBpqXrcRG",
  "key24": "5ftcxMQDmePsdck3Z1WtaEQjc9qtAckmdvfYaJEa6Aq94GJnSUYHZTFaekdQY7uczjJFqadH8XyG2ZXRGCUcAGdq",
  "key25": "4pSLT8qTQdRcA3G5WyCb2D8u2RnDuDssucgg55D5JjGg3HG7QaYqT8qiEGxYV12V6TD9yYENKUjpVnBkKUpH5Wx1",
  "key26": "NUEKviS8BsCVahAQpB6WUZgCZXiGmc6T6NKXtN8RdEfvHK1wjEvYUvwbgEmBLKqQfthq4GwSa1bHjZPevMR79B6",
  "key27": "3fEu3P26Xd31teXHqRG4HHksymumfDtrdf4rbBGSAeBdkAC8yEhpJv9DKugi7Ri58oGk9DdqTfHskQB8i46neHfS",
  "key28": "5yemSXVvESytUXWTuiUMffotZjaZytJn9uJh96gqk3nMkZs4R3qQX4XiDYuvV18jVT1zpvjm7nDfgPiF2uTm9VsC",
  "key29": "2RFkmJYSRuf6HtLYibJMS7viRNZDGG5uRuFeiRX1xihL2nsh7ZMScHxvDGqEDqSjvmfCzG5HGmH1f1xTKtUJVkkH",
  "key30": "u89yK1RWo4HVApwLUHW5rZaXdnuUkjZsbtNxXRuyCkgtwD3UPSGjgU6RDijCppqoZqSdxSTjTs558cu5mmmFnHo",
  "key31": "2jvjs96FHunmYmbfTjFeR38QC3sYM5V7GveNrCZAT9u4QCzVLZXwD6NEmXbiasPixEZSWdYAxn3g3LrnJL5HeDrq",
  "key32": "4wpCnRvv2g1cAVUpRYu6f6J9XqULU6kTYR5fh6UbkuPMSFbcZrpbsdhGJPdSKgp1CsvxgEwX7un4Mm5BBBv2VdEx",
  "key33": "5ZzZwdN3kWm1mHqTroQDoS7HYa2VPcBJwF7YNDU9M37uNZLsHfhRa5VFDuyGpd7DkvtqrL5GQXLZH4gwjfy45ibu",
  "key34": "5jN2FceQMSoz8UVDBHZy1bVf79ezJoT9deNuVr3A3QVG3foSTcHY5CT4kvgksbd5fnNbDsAUR9kvYozKukvQDcem",
  "key35": "4J4nReDJYhPzSEwDXihpMm54rJSfDs6wWm8ZW7xtczAkGDYLSN3LF2d3FU4p3ZTUinQYjxeq8QKdspUS8DbTtqC9"
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
