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
    "4fgznReqK4xdEtW9x7cQQHEzAZ5qovNJHNoAJem7Tw1uJtnkrz8sDQXi7i497Ups7uzJ2QWz3ioXuoBhEgPPUMmC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55b5PPzGRBfaHAmHmuPRBsgyC4qopfXbJc821TyfZPRATuCHvLKNnktvegyPek3rrYvy1zejLNeyJcMKDrwS2hXM",
  "key1": "67PWWe6ZKi6f3mwanAcNDAfwyvFTfzEJNNyuj3SGk4uTMG3Wc9cyquGRhX1whyKntnpegM6YGDcLaj6HLBcNvuhx",
  "key2": "4D4LUxybvZAzP1bSGkr2iL7xW4Foi4mqPGvEV55tKPkqVUimR4V9GrUfsmWMfnnnNGYzxWT8xG3vVVPPwZgSzZtu",
  "key3": "1Qwzhx1U2KSfBbYqMt6zFWrJGxonVQDn8GdY8VYrZB67YRnTCnhWY9PCp5U82pud1VuDvVX61eM4JHHgCuf9VcB",
  "key4": "34MaVUvfwCD14sUPAmnPuC6uQRX4ePWdM8Q7MnVGB6ja2xLsopzaDutcvTrxpwjnN8n7dNDMaMnKp5kvwtaxVmh8",
  "key5": "2gA66fzYTxCiGFFScsnb1R3MJk8egoAFMpEkxiiFj3LimFScg4RRodLbJRS4kFV8rfjSjW72jvxBWqHQQFUxcPYo",
  "key6": "3FSUwHvTVCVEfvx6BEJ3V2DvmAofJrbVWYJQj2qw7GvxiQKmHrwPb7aMGXkKdBiiqiqCggqMFUQgTNnCi26ewLdn",
  "key7": "39tAAbUiGNh2ULMo9McS5jNU4G8dAFchs7yu4ao4emdFzPD3kwNzWC6XEC5RLs7ax3tm6QFrozD8KYBw7YQhVLqE",
  "key8": "3ds4owFyCZYtthWSKcc4ri9BUBJKKyDT7jcKo6pCUbnUENbT6w1KWcyLfVNCpe51ghZogFwNrjMEFUs9AAEnMZeQ",
  "key9": "3F5tv6evTq8YDeS5iExFecYrywGST4d2DpSA3Gun8c6DyWiFq6k6BamxXxCuyz4VsBTHj3q96k7awEmcsqb5b9cu",
  "key10": "3vqAe2sFCU99LTgsuyZrAzzrbLuYaAY4HirpsJSnVdcRQmbzQC45K8xzt75j9iPDraUWz4SZV8929M1G99r8t21e",
  "key11": "2Wc8eWhXboVgGsbwCWvPC1b6f4wwW4MqX9h45FgD5xH5DuyHHBR7RNj67eKXCK64YPi5wqKoAzseWZrbJ4ycFsmD",
  "key12": "5eaCvTQvBoxg65BcWXfS966U6tG2FHjJ9qgmxP4Y3WmhsPRMenGAhSeZdvXjdcQjgNfh6qpZxJp4EPhnxZwn4aT9",
  "key13": "5DyDMULDY6s2Xo9MQJbdsqsKKgn9J3Kr5qdQkhC3Po9vjfZsg7Hhha76yhk46mCNZpER1pytGH4ceBAKCukiFzo9",
  "key14": "caXCAPYA3mDMtdEZp6rxLRqLw3W2BAbm8oAJKyy9iqr4ZbToavdZmBtyN1WCFEUndBCfU4U8aDpz5iSR84w9zEH",
  "key15": "5A2rHbPvsNsBAQZN7AmeRAz1wupNoJTFb9MRxNZmQGnsXGhp6k9B2HJgkVdo8mBHErnMqHfUhZHPG9CWbDMstswZ",
  "key16": "1FxsJ3TWvbwcZspTRqYg3ZqT3XSBzZi3XCWKh9FGvSGZmt6HTfHSVTvZ4Gp3RPqoMDDs8iw7NscLgn8ZRNfEtey",
  "key17": "4NrBrCd6mtHw1qAgHZkp5HTegmA3i8Cbn2CiB5kcmVqfyveirMzhAbXSiC3MvkQk7wxBoi19CsnL8S1L4C4sNx4q",
  "key18": "2RxPZqThrF3PYyoth2SZ5z6XSpWpAeJhvFA7JwEenDSMfneE98kmhRbVWjg2xNtDbT1X6qdFpaVufY5VyGq1S79S",
  "key19": "3fTNbWLf9YXawDgjBziaScHnwR92oqdc5yHtbqmXqu59cXPBYsYkrJFNKzL3yVqsv5xXVvYbuR674e1UZDkmBpj8",
  "key20": "4QPRm6Hno6QZGdLoYzR4YxncWZEjWoYc2i6fWqujWhutxkBPLR5NfCCPDmgEegCJVnSTfpmGEaSAaGcKgLXQQS2h",
  "key21": "3jiuC86YNoALmhxMqzqB67VMcai3h2sZDLBzFC9eCWLfowWUcEXVNe34CHk3AUyySiPo1DqhATxLThH4dFAuoEbn",
  "key22": "S4d8ey1hamK5BmjXQYemXUGQas9xahF5dwK1PqtFWxRtCmEkQACDWJWnmnw5hr8z43Pi4VGEYRFfiMPujaYm6XJ",
  "key23": "3fnRZhyUXq6mUw16SAAg8q6VjXFGHKg4ekWFoVVhknLXbmphkhRxwQRutYuKmtsoeWcbThruWwXrumUCJYwv6ApY",
  "key24": "3yEr7BY8EukZc6UsZXZSQFnuKxMXZN52NYxPpxphKnuzeGyN5cNU56J5tweAf1AWuPfqCL9vvVFSj3ag59itj5GM",
  "key25": "4zUHMiRESunsxmqDxoPJqr16QF5mdwYT5ePvDQUFDgxcYrok6J24CrkrxNVdvvX3YbNVmoGCKXE6QZpQfhH4hfQT",
  "key26": "3HxnU4hL9ptMKCbhERXfDysPqqBicu2RcYfSWvwtYteTec3Ry7PrLqeiTDd6hLaGbeKJsfhumxFUz6LgSyaAUwkD",
  "key27": "56wrQq852Mbw3HbaLaEWjaghmVFQLzCPfAZicGpZJoEPdPcRnFN5B219yGXq5iQCwJvqenSL7omKK3up5Zx4yvYE",
  "key28": "3kEbn1pws77v89jUjq8r65bgvfBMxpKrCxN3iRJdHqseTbNjsfJCPtJAaXBowRKa1LyZyUHENQ1kqmVBUU7PFPjS",
  "key29": "4rC1WFBTPE4tB6VhDVqsYJemcNvLNJbhqAqPPmj3BvJa2uESuRg6QGsUDddhy1YKNgRWXmJ2YjmJ3yywV8GLSoSm",
  "key30": "2HBzqETfEfnGMRiTH81Be4q8GVNkKsHKbfJZnYEdSq4XxnoAsvob7uWv8BPZyd8kPk3oKUnZBjKA7yrQjvi7Aaer",
  "key31": "3JJpEQWP2AxE9naGCcvg5dGGT5cDhWo5j3axf9XMLkbAZZexkSd8LnJbsmWnCL8ZzHhbFSLookgwX71Z5LE5ofyf",
  "key32": "2Vp5GVG33gqHRreh2GvvatHzP1FYLEhodDC27CccXMQ1uF7aU1aWyferqFafSU4N5L6XDd5mcRmwJXDFJhVKk78f",
  "key33": "4vpeHrruhFFAqJVaXDeDxHmDnj3EPxtJaE6a5SFkmcgy7GyHAVzioQSEUnMKL2J9pXUtqveYNmihGHoymJfjCCMb",
  "key34": "5aitRsZbfgAojMraGFNyjN67WreBuKgkJokAQPioK6cn2oSEqEdArrAzYVa1S7fy26MTmRVwv6E5CLwpSZz1iLuj",
  "key35": "GBug1Pwcr4K6ec4LwGbXdUmSswx7RYcPWsZrJtvPSMe13PZx4e8uMF726PL94AA2znku6bupkGWw78JxMkgU3nD",
  "key36": "2sLfxW1hHusSkCUKB3HcvWF7GswRakJFiGpPHtWCeW7iZMcAr5sJkTHPWcQS6Usqp1Ampygx1SUgXnwNFp3gzd1M",
  "key37": "zzQnoyK5YAzcsMM8iSxdU2ex6MeAoYtMy9CScfJ1rPwVvBKHaNyvCfitgPHVdeRhtYMRyKbLwCf3rrnpZFgLh8z",
  "key38": "5CmceMddhyRBjVu7XHD6QjizL8EbmizGsHYw8GnDsLgpWwzPke9WK4cAonGi2Jsk8fW8kYUBp8Q4prun5mTrFskg",
  "key39": "ce7CcpzWD4UdSDUcF4dXPMYaAJ8YrH52Boubhq4nXibFcWEUKnUY1o33RsePgS7bSmD4JLbFzXCTJkVvfkShfAe"
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
