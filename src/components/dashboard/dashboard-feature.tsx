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
    "54NrFtG9Xo6PUxXvrVAJ8n2gBRoao1K1iZs1xovsHkcQ7pAGJW6nCHpAoiegxXDzznPP9YvZc7tUqKNF3cgaHuvz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LuBFu9dLHwqLi8EJ8u1LrHuTTsY1UuifcCmqCJKQ3iosNur7irGuiTYGk6JCpham7qD3NffGDSHyQnKUL4hhgyW",
  "key1": "XptQ18HBh3VN3qGMdv1ZBucKjprhau3z6cwaNrup1iYCCmUaXaJbnReht374VsMUJehMxKXcEju67p9YZfVdnvB",
  "key2": "3mrPbNfPmWzzkxKCAVxnrHR2nKtagaNe3yvB1azP1B8tsAkA68zFVM29FTWQbsfxYM5WUm1WczgzeCSrBQFGrqqp",
  "key3": "5wBptQXyoDfDUcgVEcoVVUL8QHL3C1Up4mN7QjmYBZig8TYPAKBArK7RKDdCfjcy7xzjJGhyUAqxJkgvcmr5N4hj",
  "key4": "DZQm7LBrdc7NYw2f6LaL8c1VHryHwKsjpUFu49rQnjM5wTR8MoDs5mxDY12vEsdjQxtZtGUt9rZxLFjMk7QXaiv",
  "key5": "3Y3CqSLWE6YvRA2kkENbzPG7N8y2UZ3GbumnM5Ci9u8ke5Xokc8TNxEKZwZaLAzucKSyQFPNt55dGFF11f3g7dp5",
  "key6": "2bxTVF8DL22a2FV6K7YFULFYQdpdQJSAiTGtmE5K6LkUN1oYea7D2u86mcVmwhkUu6dGx2eC8eeBaEBkNW7KXxq1",
  "key7": "4kY3o2Ju28jPRVT3WB6b2yXYQPtY2JNLLCLboE6FrF4hdH2a2V4S6n1kDWHE1f54zszd8enWQZUM4ATdWybB7nK9",
  "key8": "3o8Bux2L7oyLtndAy5vYGoDpVGLAshpDkr5KCTaNxf7qscXtfZqqS6YDHFfN6yhN1955k9b5g7ecSTaQMECucHBP",
  "key9": "33XAxrvnnyRjP5Gn2jTmRy22jQbbAanjp84LR7T7phqmCuJuMLrvFu4c4s5Uq2USbCfRvqfPWJSahNv96QYmDu7v",
  "key10": "62Ro4wKLESJKR5VnT3jY7uNFMAPS8N37fvrkmQawy5dg52EXwwyhUWb35D9YsNL2u3iz4kLNZH6MpY6jrT1NudG4",
  "key11": "4AjpKdMtk51moEktThinL6NRZKguzo6zi59iwBDbEhWox5ewPsXhiqyT5nnaGfPWPuJmpPgHMeDHbCEDraCeDsGu",
  "key12": "2TS2F5riomtHBTKXHF9nMxKRn83sUn4z3LNU5xm6XyTWamRgMc5rqSKpbdmw8VKmFv83SEFy6LkHHBYVEx7SarvK",
  "key13": "xcNqmaufMjXnHmXMSM76uT6vjSq6Jgbb6KK8hVHp92558wHcfrFi4TS7RLf6cKsc2Uh7LdHoLyGcwFZDg4F2EXs",
  "key14": "24NV359CXekX77SsK5Nqe2GeoNrzLJcR6vJR752B7jpB3HDiNxJ9maY7TgPCTeB9vnWYZEhxftmV6MD1B78mJ7vR",
  "key15": "QuiD27SYqUzxrws12DWBrQSNod9qoGG7GQ3XZyfEGA8Vbu5YAARp3UPzVVQyyqnNCUEZt5wivdrRMfJfybuF5zT",
  "key16": "VnuC59S3vApC8bEvmvYkjru6VKKj8KA2nBiK4ReGy5aew1GyooHgtQ33bP55r8H7npDGYuH7njUEm7CEen22Z4V",
  "key17": "5JvQJQ6yiWafzB88cHAMB8pwgc78JukU7GQyqKfLo4UpE8UNDrV2Hq3RuM5zTEkSV9h8sHdGqGYSNDEGuF8TPZXo",
  "key18": "4YTQZXz7MJ2ad8Bja64CHnVfa9dB8PuN2gnhoHUk9K1YznLJZc42XV3sCWgmxP4vDXard3NyvhLqmDPmy7fuEPjj",
  "key19": "3RsfujmsgVHncHVnST4gp9foH9nQaWnvQZoiCKXwtXHMgvUW3xutqNg8VfS6trm7ErqDYpbhoKJpUo1Yx6f24sP6",
  "key20": "5JtCAJWJ1NnYFB6kn4gXic3fwk689aFPxy9BALjKbh1YfbNEZmCQDfHEjd9cYwfEzrWKmFm8E8eX7sg6k83atDxJ",
  "key21": "QfgWj7Rg375P9Y5AraM461KrGDqmsJn5dh4BR8NpctYb8YprM1oiu5xwRwWMYxF43t9ZSENYUNGsvnm8NjVcFPd",
  "key22": "4QHZk7uzuHuJiuhJraPLs2TpWBv7edzktdtgEa5jRvRb26sAKd1mSA5MAim3BnXciDXKj3jS4RxKyaiNqPgAHAyL",
  "key23": "55t98bpt7yXL7xSrFmjze76v1VQod1qcfftjbGWcqpHLLXV9kF5bPQgtNsN2hs2u2ZtPbaRvQ7VzwNBoB3doSLXz",
  "key24": "5Go6XA7RsEQRFs8A53LFeooK1WtmsVxLXdMnYe2pt7m7MJdkQBJx8NxW7nsE2G17CV5pzaScVndGJySjm9DAv2gQ",
  "key25": "5yFHaZm9RdPvqv9YKC3xcpxnsgMeY6LWN1XDr2meRk3YowWkBLyCDqEWBVwWJSqT3RcA85MHMXKNuqUuDZLna7vX",
  "key26": "2m5x4UKE9gc1Vw3siL9ttXXEQLwH746j6rtdsWnDMJ4gSTqjprfD9ceg85bzhNpe2PCYynT3LnxcHaGKZNcooRTK",
  "key27": "mGZbL1WxCmV8MZypkAfwu3qZtq3YE7zjno6ngvp1VEb1JJax1jjhUeoZae7GMoKmvTA3rnB2AZSTwYfXQyZLz4f",
  "key28": "QFsY3poRtposP4bSeMxbW5ZctYE5zuPijbrz2A8U1Y2a6H14scXHYJk2x9MbWXFzBrJZCDtJBFTvySR1H7Lg87r",
  "key29": "3HzgCJeuNiBHYy9DetQSCPjUbPn17hm7im8YjRSGxifjRthHLADnEunTZvk4R1m4JhkPy3u1PBTz4xbvLpu9Qg3j",
  "key30": "23qy2vtisVFv318EV3DCe1uYMFhRPhUBXCxGDPBrH4xXV8hA2xVaurbD28orXjFXvPTNiDvBodSA8GFXptV7gdTW",
  "key31": "4xJTUiuyRxEAoqJLFWFtogq4EaQ3Mx87m4bq1zFPmovF5R6TXVb9qYGm255tNvqmsTrPsrJycHyvuE8CdRHB1wmY",
  "key32": "4xNqb22r2AAifgvbP1ZxebLEFd3tY6Vzh41KcSNooJxZdTMreo4PtFWkske29hR1DfpCNrL36kSEpHeQWKGUpQnd",
  "key33": "D1QwMhYVR4kq7dCuKx9a8AJUdzqN8pMhsTQjcCgKutAka1AdjCjGJiawSKdcDkUD11tx81AFDcHhAJiLV3Q7w6b",
  "key34": "24kpChJ7vb5o2A6UTszT956t8fVgA1UruaZEVzd6VZkRd6D8y48SQkksE1HMoumBoQL4jRy7ZWcGvpGng7HhU6ua",
  "key35": "5A4iUSgeJuFfN7gQRFcodLBcEV3cVTq8LZSijtnNPW9vNDGw739d4S4LEzMyb6Fm8kPo3SEjDW3ruzQEaqRVTvUV",
  "key36": "2VGPzMe41HA5SawoT9tauuYU33HNjKLhNXDGDHWywhFSQd8pcZXZ1dYrH3zTVK7LbwNpH1SeNdGUsrhD4J1Q4vNR",
  "key37": "exWXFMNujG3EEgGQjrvbcyHNMQKtXpruQ7kMTiECd3tRTDYqvhpjFJ9C1nGPVje4BRtXMV6AYQK1Ds6EciuexdG",
  "key38": "46muQkPMFjcU74p2sTdvdSnwNLyAbtU6mMbdEZaQFMASM9QgfZEpyXSendAAUFQtaVQZePPJNWAwacihtGoe1bKm",
  "key39": "3Jtw4wjKFom59LCXin9tPFVNwgmQgoStNPZJjm8zmzyrPC221xF3L8bBNYURB1npSDsBsSXoBRxWm7iJrKGP6NcF",
  "key40": "5KSyUMZpN4JZ6kJTogyJe5W1REhrWbBZEQMaMrRrTQEyZTonijp4P4R3WLaJaXHwTwQz3Yrk9er55XUjwhtJMH6v",
  "key41": "2YycBFpo4uMUge3UnwYJ1CLv5irqgzLEuPsLKYRtutKicr8uUCKXG87KBwaEugwoLZt7NPjZkuRaSgDkfSztwvy3",
  "key42": "3FActCW85FRJR2DCfZ2kfrSSpMUUeFYyPjLdecim3akZKQoWbTM2MLFQekrEsFHXFYsoSFP2zDfjmW22VDVRSY1B"
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
