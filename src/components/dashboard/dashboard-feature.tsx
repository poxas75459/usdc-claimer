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
    "5wuTU4wJZQJS826qvMXHADR3ahfpwbcmRAVds1TCkDWGPNBRB6XnJeFUrAvMABrAP6VxiaAq16fArFBgQDFE14iq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fFkrCod5GAQdQ8fcSeheaSsodLdPMnafJraKxCCErupNmT5s4bmrx5vMpdEWtbSbGsaaCEBWbQRWKXZ5RHmBpHK",
  "key1": "31Lwzphu6kTokhGzYzxk7S5kpqLnfTJi5798UgUS7YHWtdHS49WH1csGWQCHpwMEUqiksffXQJprfzp6d2Xdsh3F",
  "key2": "4ZgeTK9EY7jjoy8DckHUp1kK4BUEuP6ZeMDSufXW2ds5tYRdmc6irYXDZ51yS2bvogHn1fM9JZHsUFWSGjU9JhQz",
  "key3": "5AxswkV3gHhYftVaR4pEBQCjirJfWgqLMgbRgriegfgq6GqerZZdZiVgvdvD7tvfTzStZtbP9BRwctPkvBA8WVBU",
  "key4": "3cr4aqZi2cCUzpyC2CyNvJQMHtnTWjMhWPv7pqcWCTDWnX1DUYwdU8BseynjoYqfHddtTaBtKDdomMSXPfjrpFpG",
  "key5": "5uiDPzjbmfe1ecFpPXmnXjwNSk8T7jhe3JwW2kur3p3mGLSr8svid7sbsHrzrx7VvRQeF62tui2MmEXKVPYSpxhs",
  "key6": "5qaGK5GNPatVxNnRB1j6jnEa6srQxwQh9t4L95y4jxRoBJZKoTzmcj98aRATecMe86zJMGr2SMF8T77qHPgW1yKJ",
  "key7": "pa61kVL4T6mjQx2KbhDEDDSMCMAsTwpMXQgB7WNGvbP7HMdjQUbBiw3oSxxvQFhebXns8w7D3NHuwiFHFTEjJjH",
  "key8": "66WqGLoRMvjU7KCM7SF62K3XerYE5TPTNj73ZonmnHcZE6aNQBb6FnwxQJpWtXMrHxnUzcQAf4Q4YUr5kQ4FsMzL",
  "key9": "5tSTS94ewafA8pxpMc5sxSqikoFR8qehwZw5VXb7miYimw6JMVdNN9vqPKZJ8HbAb5V4pvdJxJSwpoA9LFgJg7yg",
  "key10": "4A35zAZmYyBwXKp1ZZ2QBEcLJCb1z8t89S3NfGN8utWqJmWyF3czNXHxQFjZrbaDgX7AU2vWuXbynLMDKYP3UeBn",
  "key11": "AhkiVQQPXCC9k9HtJE3UNVmcSADhkj8Z8tYrKJDEEMdSbABVGyQ9uWtphSAWoeWrg6XtiBrEsbrrmaLjY3LtNmC",
  "key12": "3Mo7q9QfUs55VLURgbCkMyN7y5oLzPN8sZMwVSCkudzFtEJkfN6WNK9kjDKMm38Pk3sBEiRTYDyE69PtwXY9DpDz",
  "key13": "4wy5wCqVv9G9R7oMAX1hoKxGaMmZUopSs31LvC1C6E7EN444GuBrYVfMd1gdvsWh2754tYfmMyM3wcD8kVjEZ3Mf",
  "key14": "2jDLp9cFQ4SvNiV8XBasxHwbdNh8goJVvhimhT5nDXUBn4sWsmp6vmLRGzNyhg7utDxvoGB1GKmJ84NVozSjvfr",
  "key15": "2gt6DQpJVnyLQMk1CtMow8XdcF2aHdU8Tx81XCcCLLjQvPJm32zBGyVeepFMdc2WbNhWBgu5ye5snSLefgFrNsfF",
  "key16": "4DNpZKdLSxyd7abBYDYV8PFiBRFpZ3SXGEWTtc8hxSeLBUaZDF2rJKxnXCGVHeZaZwFDkxdZMbyrNqet832FUUuG",
  "key17": "CTbq3nDW5CQ5bkbBZ7cKHeg2zTsZbd2KRA5nfJjFoW8LyQQCadBBH4Q8RXuGPKgW4MqYQxKoLWHpHfPmHt7BQzY",
  "key18": "3vxjvxgUwVa46puGm25CqBo1txzU6y5eA4fCKzfL46Ua4Dxs8d9TnhYkK6xtuBurK4VuUhRPkRuV2LFrbHRQQY39",
  "key19": "5joMh6PgenM1fHwtT2yFKMffc1WRJoprpdEQA1W2TDehhvDK6RVoteC3WPKKFbYkqNz5Wy8vN49wRiPbsooM3qhG",
  "key20": "44QQ6S7JxzEVaVEAxitY1a78ddQdaDTpbhRfkepfZ1EJLsJN4VimJxGnQywWKwSFwQdduD4WUjMuSQeavjSFzw1t",
  "key21": "4n8gy5QicC48peAWAyishftsDPhUz1EL1XjeHvw9GcYm4MEvdQ3xFoQyDafrrMVkfwHGn61ggiMswdiKtEJnFhc7",
  "key22": "5cuTWu3RhhrCUMHxVrYr565zvMk74FAPEV5RJjPGU8HXGRsqeqFS7R32tVJ3C3EY83SQq3eh1XiFsg4WN2AiNrvR",
  "key23": "2Hw5WxEZzXsyPa9eUU98GdPZGXVfkkNaJ6nJeTTCUSjNGYH6utnwkkZ3ZnP1sA1RwpqvHRC1HCVE95JYS77jdBuH",
  "key24": "2jZ6yfQnogwZfzW2ZkFFc1TUMRajjE2VWAhNtiBZh3Qd1TJafNJQ384nkmwHwf8FATybqDM42J9ab6n41ZEQvmDZ",
  "key25": "3z5WYWn8RQGc1YshuiKLJp6PaL4qMtyS3aoyragT3nKYSwf84th734FB67cvhbbPEJTBLpMxQRXRi2mzRFA2m6gK",
  "key26": "4NmzAJFG1pTJd3tFdW1e29ebbD3S6aWcu9z7y7ui9im2mZZryLLJnZWkxJjBd2TroEHEni4W52JcpUK8ppe1rodk",
  "key27": "5Q9PQHGTDbFEyv3C47YNd2vj2xyghRKZFg47sm7nbS2y2m6b864wavVUYtUnKsdEyrzEFJau5VbRy1qJEQtKmiRm",
  "key28": "4WEndPUAYD4kpvafuCJfYL7W1D2VtJeT2Romf55REGbgCkA5FWmY6gAaCQMPzxeDd6CTbvPWpmxu1bY1rVVgyYcD",
  "key29": "2m8BF2gZwobrYmHqUso6F47ioo8g9e1yePZBSqtQ6c9HwgApRAdtAwYtzDEP2ZAvrtUxB5DVcncnHHsA4pYUjTL6",
  "key30": "2fRDy338XjFc2ittfBaESCKCDA1EuAkdUkPhWoSXqjXErvY7wEQcBNDJiHY9bfFWx3zTKWTJdVRyaKd3NRWCUipD",
  "key31": "EzXVvjNSFGjkaAa68YsKTUdcbBG4KPtpT71mzgWFZNzK1XKf1SrqAvhSFyyFpRGUh9D8h9SejdQ2g7PPUeAVWTU",
  "key32": "4fyignP2Axoj6YxESBjgd9G8CscHQEdBvhQD14Tx3GcS8x17NJypKD6YMEFN9P1N4QacgCoHBGruXZVe54ECxG4",
  "key33": "2N7bDWDRNy4ch7eyMU8sFEk6zzqEnQv2273BVxPkdLdB24rbffqmynWkqacJgUgzrXuhoERT2eWAERGKU5idbLY3",
  "key34": "gsQYS4Ngk2Rq5RLGYFp4TFMwR7D87rBMNq8WmkCJ9aBKnMVGg9gcGX57oBKYZXBXVr6PP71T6CxByoncP56LMpX",
  "key35": "5omMNKv4kYyCqR19NJKCqeF8Wn4CVVErtsEMNJkXFHdrx7s5XwDQn7TfYyCdvrJ6MtXZankuyEJSJ4yrTAP1d1vU",
  "key36": "5g6GoCGmp3F4MhuAtXeF2Ckr9RAGY6EaZZcEiMRWSVe5rtJ1Mv8gt3RQbgrFTsV5D7HH8c9J5enBq7ekCqKHWdLd",
  "key37": "26Lt1MyWULdjnDjF8NfRwLNh8o7UEDKQcSpHNri246EKG5Rk6am2xnhdC8tNHztq1VhvcgyBZkdE3cDxmi5YFd19",
  "key38": "4WWGsW2QLzh2aJCHQgaTATAEYa7qst4MPiueHtGLAjDtWTJmuurTMB6Q1hTqJ8DGibfaY14kqUZnZczvDoHbdDtR",
  "key39": "3v5CRZcTdPVjDYF38cX7k15FuGsTVwgCf2EVEnYQ1YoGx1wT9XTCzdKmSkx91iFbw5uY1yB67r1m9gBBiBDUUvCq"
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
