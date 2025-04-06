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
    "4bh6ygoFRqUAeu9idS9EcemDd9XTaEujr8Y5qNgSZgJHCtcqeCRnDWncref62WznA5KK4prF7YJo2n85Xiysywd1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dn9cHwipJHr8dJJt5XQ2zwHtDd3G5GgxwsYks1Gbzh4cvqB2EBdRwq4JRixQLFDtvZ5hhbBjq5LxieXMWGQmVH8",
  "key1": "4zP5FpxLwFGxiWJP8Y1gtnvmrfg2WTzKoPuKihkcYQPYXJMz54H8pCFtU4Qg85VaQPyKETXXdQV47zgRsYGtxaGB",
  "key2": "4aKiVrdcp84tciWBM3hVnGg8GcKfuY5J4hqq14eALsgNq5WK9g8LUtjexeJXhJgQmweWbuDh38foR5hmKtoaJQT6",
  "key3": "5QoAUrBvKXXkDqJa1wQr7tTwri2mrqZ3ucVxmtDYSsWHk3wHo4dzYJkPRuiFc1hEWMvDACdZKGzQcWwJKH1zetP1",
  "key4": "2A7dsuGkXoiFXKBJCueketV4wsgmSsjh51AT4vXgrTgLGTy7Za4TXMyRuzzvVDicWpreXgArDK38KVjhZ92p6swm",
  "key5": "65ZcbyrMyFr8E9xwdT6CvTgPrhNbuQMu7m879q8d4JnYXGYS5fYxZBdApiH8SPmVdF6XCFXxnK5NWsndSUmJGHBc",
  "key6": "pMruWvCvhktKKRKfXxx6ihXJHaopJUWkHUMXxVtuZg5HWzwEqkFLHCdEkEHF9vtcWtA5Gg5st47K5RuWihZUqhy",
  "key7": "3oyEXiJ2QcL5Ngph3SNn2EGRjhYYUdQBiSDoUUjZPGRNBFd1cJXwMa7XgDbi2D9cS73q5b4cxRhTDMPh4ocPBqWa",
  "key8": "bWTqPZGjvJiydf7C3GW7kMoF1LJDp6dk6GDPWYGk6Us9tDsqur4QSCw4QTGasAUgRYBpqxhRAmCNu9DKiRawe9k",
  "key9": "2k5putpK3sxeiREF3HF7akqcfZmpFSfbu6zcTBWHACh56qBHKTHBLSdeZ8zinhU5x2AU5F6cynWyi4znc6S3SwjC",
  "key10": "5ECUaAjwjERcH3o72ztpUSK134UbFLgidvF6XLqDvd3NHZnqeqyLxGx2V1AQNr7Nqu9kQGpUjYXKagRbprme77wN",
  "key11": "3WGj7NAcp4sMQqwVmRp5buJkvqDw5NcMdzSF9ygNEGoo6iyWKKEzJgLkDUzeSBgmJDLivqS3oGxbcE4tFbVRjEoi",
  "key12": "4SL4rq1f9Q3zashgbm4FwUjpJsLSuHRWxdY4Amcdiz9kJAZrHeARwkA7hi28aSeZLgiEAF5eFBNUiy3YjM6uwsc3",
  "key13": "2sJ5mLnUBUnJM6aDUjoC6PoM7aeKPnXgm11CowEuf7CK1fnUdhbpYYAmopDaNzQVWLqYdctwwG8tQnjF7BvMBAt9",
  "key14": "4Rd6oxf8hoMQ8HfJcSvyb68C3zK893GiycQi6jmLxaC77b3JvDpbcWELBqR7PnC1YXugTiKQCtoWjykXNU9CnXig",
  "key15": "5Fd5vK4V9mtSqa576X81wnsxvpzXHZL4su4iFCqbaotDd1yy9bq7ztNo7dZ39D4u8kYVp5oQdRSAYs5UVUi4u1kQ",
  "key16": "4GcvQhQ7ZANcRHP7WgeoEXXoqsBisQhfjUoy8VuDTVFaGG6qUtNryz6wXuYpYuQDQmk5XfuVCdrykkqj845GwYvi",
  "key17": "3iJ3vWfqm7FUjiyQdUkEDewsHx9vQo967Z7nDhqagfZiKyhfBPWpQbVdLiALMsbNCMC5hgrPiqAbPwNDCX63jru",
  "key18": "uAXx5MqJbsxAZmMAk5phNVUTEDuMtWoZn3kG2bF9EA3dEdm78z1cWafkXwikseQB6hJP9jcdvsEH14q3icUXkDP",
  "key19": "5AJZcRUYS7J4WzJxNj5LaNusqTfosfFYhsTkEt7wjTy29CHGtVb98VqpdzYXNYKBFzY2MkeipNbDJBTcB2zPcxbW",
  "key20": "5cQFXagrqzsCox1PCRF7ynUjN6kTw3rfAHBpmuXcZifJJdkWj5vR73WuxNXwBZ1g5xs3PzZfxxbyAh5G7sMGvmqo",
  "key21": "5qoekKjxgWPwWnbpVbMmBM1JYpXU6RhN92xfBeN5w9wucGqsJqVnoFVMjACXniYbAfNT267ALfPGU5wT34TNmQcB",
  "key22": "36ae5bmTTXw8CehqkLmwth3FMg3g2tHpsMxXbyiFZBCA4JhVtN43NSCtPQoYMTLNtAooUpiBGyYcoYVU2zMaXZ4R",
  "key23": "4R4HzzcvUzmbmQRtxPek5gtJSP77LSAvjJN6gNTXm6xk94xvX3GU1Pq8ipUqhzL82hRZV4aKT9Dk4nmqhQNATdXd",
  "key24": "36LmW8qo3DiKqa4wtL41KQ99aEsEVsbKQdVE81uQmUHq3eeKxfEhDa16ee9BgBEfceDoJqXftr1XnUUah9Bv2fWX",
  "key25": "5ZJLnDCeBFr9Ec7gJuL8NqU5J8yEYRooxvQWjj324kp8Nydb1UaaL7vMuYAuPVMrkmPHBE3eHPYuwJnGmaELdvAg",
  "key26": "2bnHHhamxbfCnS7duaZyTUTCVDkCRAVmM7YdciaPUFuZNh6juPcN2iU27PWozfiWKvogeKge1tRHwAXQQ5WyYpwa",
  "key27": "4tkJkDuduTvjjDug8ysf2fSsdhF1QAShWfWQqjwNrZRaGXd6CuKV4Ryui8jDVDXk6fVHvSLCxcQjxydHnPvC8oGg",
  "key28": "4uAjzUyJyhujctK4tFKYahQCR2VjbTGz3AZiq2v2HQXe7fGouprtiFvsgQVEKab5g9Yeg7jTxiowCfpVuToLLNkr",
  "key29": "3YfnJB1d5cPg31AcrA9N9mhRobbdxeiaZkr8TXwAQ9K4thLRGmR87Rd8H1hFpwM1i6pcfCGU4CvgFZAsQjCbC9Q9",
  "key30": "31urrdfDEvqvo6Qmo7vzbiVWqPqcjMWccmPYEfMQtGfBwAeqdssREpTJC6qJSkSriMGua7w2fvUi1w6fbdxdSUi3",
  "key31": "2oC5kzdpUEiLQ6kL3UCGQ4mnA4dUDdefhWuBqSRvrLqxixoPVStZkWqtBbSDoxj4zQnewNzkYt7763o8Ufo8BHzc",
  "key32": "2p9GGJAzMNvWPwFQSSWcYrqRG3jgyFiioz5ZhxGtrZuNN1XvVDFxvFurdX5FU6ZDmcw2X76n6pBsVoPvy9N4Gqci"
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
