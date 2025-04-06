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
    "4GSBChh8EYZr9rto5N8YufhpVWKmXLjbfFtzbRcPFvnCs3PvsUPq4gxgAdWUw7hx1NoBM75sL5xdZiXobESi6jcM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hQuRuLPwSKRprmqtwTuKtwiqiwTSmG2Mx3ghktbyZsnkgwaj4EgsQV56RvZJNojwbJhGZst3ZienmLkTU7VZcyp",
  "key1": "DYMQo3ezQ33d4RrjXLnHoJeEBc1fe1tq3QQGsSnHFsX6atVBqRwUwf1D6TxgGABUAApbEhFtnuCjpzkH4PKQzsG",
  "key2": "2bJKAmwMHaAd54pfmWHsMU1z5UUGoebNnvXQ1zU8Nw6NkJyzdozQ1Gc8wFDieC3ukYsd9r1KzKLeP6TUfRnyWYkB",
  "key3": "5Wo5A4kpSDHYcGyq7giDqwdHMfyyUyfoU1AtZcYQRJTgnkTuQLq9av1yJx9J2EXWHEA4Bx6Z8nRVnn88bmXvwpUG",
  "key4": "5pCKbyLKSDVsNmqyQMNVEmrnTTEeKuswK919h6TDzDK3MSBsx3cJE6AWkx6cibbQPVLAFkCqQ55b1hCwmB3BRhNC",
  "key5": "2fuYD7Hrg3AS1wSyWVa3Fi9X7YHGkxGJWZPdTtwc1Pm9Z2ivJEF8EQiArs51FyVpv51yGYPQv8X1BowU6enxK78t",
  "key6": "43jb9ELmkbH5ywDBf8Gvyzpe8uS4wmevfrUa7bA5zT8HoNwFPrnLbkBFcaSmakJVh8eCFWgnKnBF9LoSxNdmcb5x",
  "key7": "nJEppMocA9bktpf83N3HGa3z43QrWbemFww1fnAyrVTWA4yQ7BgVzzYWZyV3Rp1Goe6M6qrjKsRkmNrxJ6DS44f",
  "key8": "3R44RgTog9uUUWYNeHL4zd3JkcRmvHWxKPu19eUFBLdeZDwFPq4KMMEPuSZXcbfGwpEmh8iev44AFMGQPJT27Rf8",
  "key9": "5M8Ui6oSLQzBz5hjr5vEzozqrbfMgM9wZM9FVP9vM3sTDe6pCE2UCY4UDYDfjyaNU8CSNFrqCBTQuP7BnspCiyr2",
  "key10": "4hYUurNJwMzqsMghoAGyPhwGsBSF2ASgrEGNbwJojKc366vFuKYWQ3knCWqgXRPwdcncn8ou7G9xyiA9makC5B2U",
  "key11": "4o2QpSCSjxoT6xh7H1RxncTsAwwTQLesr4V7vkefZErUxkmbST5586o9WDJeWHZeJSk2Lm5McXGjZwtityUAMt6H",
  "key12": "5xDeS4FEkfrinp2jW8wq1TDz8sKoNy2hi33U87w7UmF2jb6BE6oerwkqx3Bt67gH6ycuKD4yg4FxobqdWA7pYW4Z",
  "key13": "4aeckWTo5qMWbHXFL5YSgdYpV8heWgFNAnVD7x42WMYzrhF5PNujHs8CmcoghqGJXpXKRNswFxCZcaagG2urCY4C",
  "key14": "4ZeZYpCdrXFUCypnjGrEmtwmFkF7ds8tJJp7UTu7FbvEYi4Jj79rq8zkpwE1MTjcQETpteupn5TJ2SRjKJzRfuNG",
  "key15": "5LC5yUxot7jhHhbt8oThHFbdsbVV3H2Urvii9koQ4xNJnh6cKRtad2Es9xh5YbhWkqrSzHf5s3oGXivWGMXbjAcM",
  "key16": "2FG8fcJjufw1Q6HLxJhRvMr9Zd1tNjKYLinrctqmzGyiyanTUVgPv6KJt9ZnKdexrntynxkrkjyZ1YnHE52vC6ki",
  "key17": "616WdjXxLVGmWwiFe8XB8ooeR1yfukFomcAcBmVMEuQPDHUaRUBvhmgeJx4ikz3yjSXQn1J9Jt1krrsNxssKnNjk",
  "key18": "5aUNNLBSGnqHGUD5FTLsSB3Q1ugNp5hSgFYeMeThsbMrPvbV5tEH2iaZw4piLRPFpzozTpBiJBs57sm9EGXfWmaF",
  "key19": "2GZyDdjTgPwJZDuuq5pBK1ca4jaL3g5yRu6xPxARZxMUzkgHKLaNwfmMJV7iF43MrtWaMidpoQkLa3RCpoHMyRnY",
  "key20": "noSP2A2yDEAQ3fFnqUUWRnjd7mXsGJhe6nqkgUedDZd5JHVZ2MQv9QCZVEPFYfHF3KqnQsBb162nWNxobnDj3NG",
  "key21": "4r4An1zFkgdTwgaq5Kbd7Ssu5L1LaUGoMCx2xzWmK3VUJ4q3vDb62ti6Bvkr8waU5aB58fdfJu7FuybHtcawfHeW",
  "key22": "yUc5ybP59Lrv3fmEEALVJZFHQiaQ4QkJPUcd9UkckrHJfyDuaZ2dHYsHu25yj5He2UBpcnNbMfZ9wCjzNAmkipM",
  "key23": "59maXRfssuCG4Fu7ZG3pAkhqmYGGWv9aKjPeb3mj6GQfLRFGD9CoqQfdgeUVDLHi4L8RUtnWNcGpH3Sa5TDQS4Xu",
  "key24": "3hSwPjsRSa3btGYxiEreyLzEBdk5sfX2Y2AEwBxfQx5brBZ1Wpn7r8eYgJFmFkj1vZTv6c4462rdS1AjnhnQBJGk",
  "key25": "3pzX5WFbS5b4iWioKDpUajH1wu16nzNsFvtzmz3U1Azz2WrZT3j29iuxLcwHPHQnv1chCp8JHuooY46fa92yKGBQ",
  "key26": "51sXEBXuwpN5z6Xa6KKnmR3SQaGYBXY1fKwyzL6rMcai618k62y2J56chGJPgv4E25Shu6EFkMeYehM4Qs2yn3sZ",
  "key27": "5T6WB9qV6fKko3BuGyCu6Xo2yYFsMjBh9eA84CzZsQqdnCQWV7C3f8YEGC9dsUQPBKzrXmvtxWuFNNSvSMBTrYCU",
  "key28": "4waEQedjAJkM6XRnDyBFwefpqQ4qXZobZ83chLxJH9XA9Zhk2owVv9Ck3oPNfSdM4oPyZjvSZAnXXaJAnkcQ6dN",
  "key29": "3Rky1xiqk5LVW56LVXcCxNG9hqP2wAwTY8Bm2FFsuFtq9HuhBkWZufmoMnXrxnV7oMBu1mT8nBjG68QW34THg4Dm",
  "key30": "3ucoDQFw3bvsrXS5VmrX8phTKJcziMeDFPHGUt5r8ZeMrJh9MkGrTXkaRaNp7DzYGoj2hhyaasygztnJgF4VRFGF",
  "key31": "pUAjQM2WAwPVsNzXK74F8BEhi85SNbB6Lg81btFameXTHsFDxg5DzzN7WStjS8W6Kf1PuELxDvRAPNS4X5dWZ4x",
  "key32": "4Nb36TfPjdZskedLiwvKs5aY3CCsqUBkPQN8KTYw3Ds7YAsprdJAHEEAJv5MFDmyw8BDDMjGrzPH3Nf9E2ncVhQC",
  "key33": "3e4y1bjuE2YvexYm5HMrrHxh8f5H9AQy42t7NHQEWwKe9TSxhL49fFABU2KfniTNkEnhv5cTCfz1RRn7thbwkzTL",
  "key34": "4EhpXNiZAnbvjYbb2pKnXMhWAmkPwRFbHoWCTGaXmzfeqMctt2V77JnX9sSPCMYt1GCHPiFo3f7NMSLnRyiGFy9V",
  "key35": "4dpsWf1mi2B6G15rdbUL45BThrnQHE7RxxEXYjksQkTvqBg9ico8h9VNd8KFPcdsevv3nzQZmauFxuSHSukKswP5",
  "key36": "2RWjK9Yu2m3TfwQXWr57YW5BxnvAy37cCEfEqmikYDLCr13bSNWaBfzor8Wh3zzK8XRZMJqYtcU3gzp7jaqHDr9y",
  "key37": "FXCd5MLHzrjzKKptmtLy5AvJXQWBt1sENfPSjrbcfswstgFLQRBP5njunYoJTsXrQMrtcZtzrxkbqXqNesqYGbL",
  "key38": "47jjYhtJ1c5b65HUzHnXqPuv4Sk6kn46jiFt1CDrnrRCAupkcKAxLqzs2x6zkChWAPyXqH4pWqpVYKrfsjrLoSTW",
  "key39": "8DSFwXsiLrSMkxVqdQetjprXLTYZJX65G1JBKjsipWfN94zMCArJFGhLnCYnbK4uXY5KrNXDMWwWwsXXzUY7iVS",
  "key40": "JLYUWHoAebF43LSzj1iJaoMktg1aK16uLEWF63V81vLEdwJJXE7FJd8ZXugYQUvHMubFwL88TtDLKLwo4jZz3pB",
  "key41": "36mxnFZYr6T4B3mB71t6Z1cn3phMBHKph3qJ1fysDMFpkvB75WANEV5Avey5RxMt1RmcxbndXDV7wJHoPZhkiL22",
  "key42": "2uJPbYwFxSwbd1qxpp3aS6LQ45Qcg5AWRQqfCHjoppQBJzZTKGWDFqYooE2fVctvoMHQi2US3sAH9KchcXu9JSCY",
  "key43": "5GbQYLQsb3WVafWwi8mB74522RJCXkwYMwduzAyAgWYeTyjVi1pR24KrRTeVdJ8owBr29owFc9okRcMePUZDigte",
  "key44": "MqBCvTUfccRXiUq2uZwXwj5X73oiXhnAkaxCDeBhqjCkHX9LQLnFMz2RfRTPbrbgbREEN6mSnk8cPnXej2FMBJ7"
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
