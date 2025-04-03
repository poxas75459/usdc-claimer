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
    "uULowQo4Gn79pvUDuGHUHaZDToDGsjz1zZ7B5wn9AQjoCzYZ8WnNpTwbdLjrnmjiL2hqsg27kwY83G8Z2UbJyyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hgpr3U2cWcLRSmitMwDip5A6mFfsjv5MuJ7P7U4zaPtjRoTeiUtEiJLgvTJRku8XTeMvyG3Zwu2sL6AgW8zaA1Q",
  "key1": "3c7aVQksnPKXdX1NmjzMzGo3jC5z5TtCupVmq1maEGd1jgcrfexhSKD2kgJumoKHyb3tUfmuCGVL86bQYxMBTSj9",
  "key2": "4xYtSwuH2YwW87XrGMBH6NasG2jiac4XtKbe3MNgGapA8mGEW8jp34TTHgc34jY7BM1eiC6QPWAkNCndpDocqCJR",
  "key3": "2p4DLLMhBmFjsfekqSBM6j6jsnJgCCZhQxvvLa6bkQR39qy5cPbzySwrx7mBkT1Ltsm9j6ts43ei4YCRehaABTu1",
  "key4": "5hYxTkxTCteWbJDyb4aa9mMkVjVXbrKQ9nTCPPxqs2YBr61vLrGtYGenUcqQ3FGDn9GExS91uYnKqxE714qM459G",
  "key5": "2wxs7dkg1wrVJqL7wm7ksT1bEeimqzJK55TGkLXHsej9sduLdHPxdDGqNBwbKRFFZufvcEjf4D3dTU9w5EG1fXYz",
  "key6": "62APBQgA3mRyx4ZwVBwcN9jB4YonfkKUsShpvG8XSULMMWQLYrH8LPQxn9iktgt9mzzL8p3D9Q7mSgzx7GcRxpbA",
  "key7": "2FpEa94DAw7JzAiZAnJHs6gbZduhXCkmdDe4B4SATBHAifApq5geCXgpcy9oGhHVP9VPLNw3umSa1krjcj14H3cy",
  "key8": "46dAanCNPLrBi4dTHuz5cfFYWWnYxX5UT9cxF7qwn6xKQXJARt16dQB3gB5c9AVACMBgA5hSRwsRMg3Sb52YttW4",
  "key9": "5ooAWpsDfSQd3H2jAN1anaPNU4abPgCANMHhuGTA2enB5QDbSkYaM39mddq6gY5amv8u7qssK7tK5FjEikLv1kud",
  "key10": "55dQix8E6mJ7U9kMuqr28gqBBbnwLw8BXgExXT6eRDe58usBmKWo2q7f4bXzD55RaN8htCeXJjNSwquUjvzBJiWg",
  "key11": "2NXKE2Lumi4KkyEcXHsrvCmymhrYthDT3grFDDbCX8H78aCAzTrYS2DJju2JskMqX4PF4KZCQJ1LnQguacQVdNs7",
  "key12": "2iqqLFLWRYZP5zUGvGptLKpvHjzXzyThhajUC8Jzu5vLpkNuNvZjJhaT8a1P8NLBAT3NY1G7H44kkKC2AbStpkM1",
  "key13": "b4peRjc9LQrPEMy9ctrN8xkS4YMDdLCP16Q6moCMQo7iA2fKYnniHSVJTJspgR7FvGLVpKnajHDsqRzt3gx7bc8",
  "key14": "5a7bsFJ6S5ZrDzi8jwjPSvKWyVGGqefhg2JygSJe34ysXQeB3B5DuQ2zUGMwT8Uh2mBu8p6irsBFroPqZxRyUdqf",
  "key15": "2g4u7czdRC53LUM1SKC2teUadYC9YbZRnsgzvnmioAdY2Zi9DqkYDRfk7NYoegbXWdBzVExba58U8m194bs72cAG",
  "key16": "2SZuSzwJLUPaNad9Zt8fsyy7kmf1Wg2NRHtYDWM2BJsv7BCAsYnCcH7Jggn9qyw4z7SsJzUUrMpHs8sLysgCXXe1",
  "key17": "2FqHdkmjzd6LL8HrpeU4kvjJKqZ6V7w7T4MN8jSyg2qjj6Qx9BXKKd99s5E9ZKPxYXQsJCRUMsRmfVPwTAEtKKvt",
  "key18": "4iQDe7Dfz8AtgNA8RfaSNRdEuGXCYqM5L3TMpQWJWZjswvWdw3aybhZk4xPbpQe5BA6DR5q4bJmY2RSxtPFxQfyQ",
  "key19": "4sigimGyxmizYE7PAPxJ4UuDHVhRA5uJRPr5NNgwQ7JoRQwmv4boiw9szsrd6JAVS55Cke5HEDHxhGDo7FyAa2fJ",
  "key20": "2GWmVRuR125zSa3duuA1iLvj7ngp73zug23cSiAdSHfPReBpb2pRmMSy5tYg8cKWiMDM5Wx1reWMtPdixiJqb3Rq",
  "key21": "2Gm2zXkJk9XgHDB1ZpaMdkPhrfdzAivpPqr6rTJmCdgpxwfS4iaY1Cb839Hc8v3vkFGpSGmpeKdjeZn44EwZZ5FN",
  "key22": "2sLud9eZ7br9SgxBN2ufAGPVAGhAJZdbmz5avwyMYosZKjCu9WAzFC98j9cak6MCvPs767uynzSPib45jmfp7Uhj",
  "key23": "64CcCYzxYAFWjc24cp4DXdqYSbbQA1wj5P5YRncnn1LAVUmpQeadUBdWYNvUPGAzpaYSQ3S5kYQGyFsfeAcJaUE4",
  "key24": "Agswr8o3xThYKZreegjtT5FMpiBzrXCzoZw4RAC4a5JcJFnrEfBLFz1GdpUoZCFC6SgSRm9RXqYQzEfrHbHib1Y",
  "key25": "4wi7Ccsbgg9VGXhPWwcrH8zKNGraRAxBbuD2NuGj1STPzUaxcukJnoz6ewP2evyeSHWw31nGADBvXgxC4q3ThWdD",
  "key26": "2XYN78yBkyDnRxCTdod1mzrUYuKFAco74nFze4Vh2u3WBvFfuCxNhkBicUgvCnmJdRR8qcYCeZAGfTPSQPcFVynb",
  "key27": "kHs2Bxi9L6K2zCRF5w1Q2vbXnCV89UkgDtQwsLXNiKD1yjpUC5fpsPFqWHPP7uNi3SNU7g8tjZmQhSuVuebJ1p9",
  "key28": "2ujPAy942xkHtMkKTx8H2yaAQZfNZ2KXbZGLvozL1VMLYHVFLDeXYt2xL9tQuWMGyxtbg4es9ouYA339kv8q3RH4",
  "key29": "5moxStgZy4ASSb7iR9jHiuCK888LsjHX32ZMB3m51d1RJHr2gjMrQHD6pgDy9MPMozGesfJNru31ZvG3mZECdJu1",
  "key30": "4xVuzrUkoDTWiKTGj6p8qQnPsoGdhMDz99iAfmQfAc24fnZrtsi9fEp2qEeFNNiAaW2fXhzXUWQoSb76fGQ8QNjJ",
  "key31": "3WvnS9so7dhSpG2PrP6TzMUQLS8o1tKvu9vQHgtgZwj5CbxFXmGnGq5fqqTqGNmdWeBJ911gP29fE24NQfCFaLrq",
  "key32": "5XEwJP9TDsemh11wSrmE3BtGoKcHc4LnarHKvBQgSxagJzWdhiu4KDT6FvPivWy5TkothvF98zjCcqfgtEnMhTzx",
  "key33": "kePWYpnJGWcgQAMB9HJxFCw8baw71gQXfzjvzC3hM59AUhf1NzpSTyNrX3ieZZ7JiRnJsdzSz5UWw18DQQ1Wj9C",
  "key34": "2sqaUy2hcU6g4WbHBmtUSCFDuaktRavUrqs7amy5BEwJe3F7zQfiCLgKetGJZDmoNCHGHkd4dSacgSi7YqgJeg58",
  "key35": "5YDuNddeubzrdUhHwH8z7tEvG7LYxzJQmHqynyk7efYnN9RLfrFLoirGkFtLhJbiNhP2yrMoBuRkZDq9aex1MqmX",
  "key36": "3KJrBB6e6LAYNfj94uVA1tWQ1pUes92kJF1t6UyJPrZmEiZE8hHqZU4ThLQ9Pum3Jc36JDyAWpGm12TMAEzDFiSw",
  "key37": "5XovgEVAMfvDf1tZyF1ZsCgV7RhXMKSkKmVJtnTzMMsErRt3NP72XZjvrSAbNpZdiXES1CkbmjYZyk5CZiZ9c8Ad",
  "key38": "3BfUJw1zKGJeYXdeHzVSrxBRv1GX2xfGF8zYvT2uZw4uHpi3t5LvwJQijnL2aaP8zyJrMKxh62nDTxuEnW92J5JZ"
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
