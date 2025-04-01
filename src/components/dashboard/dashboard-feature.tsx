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
    "4Ugpzef4QCEEMgqx6SkRwX5AocE6cphCUCythRLUmAoGYkbEE5kHYPcHsZom4xQVPNs4c7BM9bmoUz5Du46vYQdA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xtzH8T4DpJqzJUaXNiVmvxfr1EuQkXw1G6yJmZh47dxcGNs55Steny3fTM3ESULtpSKS3R7yJPq4RHjA4p5EL4L",
  "key1": "5GsWyNzniZVAnDvT8AQkYWKTUkuW5PbJtMrUkr9udMQ86fXLAkrAXdduNF6cQAir9AaP77bpG4R4wgw6HMMAaqcd",
  "key2": "3WAjyQxFhU7PqEfUPcJr91vFfoDw26PSaQnbbqa7Za2R1BYLBzpz5Mq4dJU8BMcfoyk1eobdgfuanbxupoE8LW7P",
  "key3": "2TrrPmGb77a3V3Sh7kr5cEXjHYcNJy27JdMXfMKT6Hn3jDEMQmE2w2SbgbCuVsz1GfQtcqJDryUTQJU24QJ7oc2Y",
  "key4": "5NfCLeYBdgfrWmkHMyr6pS5R83S3ZyXjQAnehjwP3oPePoBMKSqQYnECNLir3zVfMqxYbWMV8CndUPyaQNfMVj6k",
  "key5": "47DGskDSwusLjAAY6kDFJ9RJdLbS7Sg9jbhxzxuMrqJzKuvdfm4qewguynQbUKZKoNG1GcEgLn5m3qN4zYVaW4eg",
  "key6": "4HHkvPRNEVSnKV5zWkzzSQzjx3g9WER1bo1gsa93nP7xXTjpGv6hjmCGeuDrPsKUhzB3UqyWH7dfCowcaKZvbJRf",
  "key7": "5Lty6u9V5so4uXhti9dEuHhmstQK54VG3axjxNdy4VhrBKrp7n584U2me4sifYgFabhJnqDX3CNgDQ6dWMuGCUQW",
  "key8": "3pwY6rB2j4e1Xyei3oryJnS6fK8h7ogsH5ZWfx6u6zUagQyMCPLfwA68qUwoeC5jBYHutDmfdDrfD86G81nUA94d",
  "key9": "36reuxk6XptrxdjQpi3RJnF27Mfmaybiq6YMrd2RMYobTDBzTked9WtCVkvhivN2NFb7CmRLwjQBtxiknAQcmqBX",
  "key10": "2VZn41en9kNnfPdQLNUJ33aY5e4JpANywdKpUTW3f3AqNw1KG1PpEqiZu1LfSF8HHm4oQoQALkmRE211BC4nSGNp",
  "key11": "3o6EFNPBmKwCxGmMELvCCs8a5KaC6TxkxA3RfCwjUyWAM6vKGJX6nGGWECcj39ErV6ZvdgH2pWP4LKMRnWQwUL42",
  "key12": "5im3vASa8LGKXT9ivM7s2q1xrY3dDGKMxbmLnpsdaqpaQxvWrmvuuEXYadEFAVGMJ1eG6FdgbREBpzogzSzPjtBc",
  "key13": "5xMbWrR7WLuW2ikL8MJpqTb3xc6pyMM7f5B73tYnmirKQy8JAamXjb2TnDCD7YV1qmL8U4DU1PHPPAmsp51bYe1e",
  "key14": "8JFd1myoSyHFC5roy3NZFuVstHhh5EA18v3ntNvnpG2Tz57Hh9MUZvEbE4ibLKJvK5idLPrZP1zDfBv5wejzdTq",
  "key15": "4FCncMYAqAa1dSZedhsqWHsEtmvqSfH4W9rb6ygEtKoBBFy2qDneSYUak4rXrd1Z5Fa4mFJPSX4wmy5Df3pS61mw",
  "key16": "3eZZM14oTyiaGm2TEZCcVWsetS44UXHj2JZUNKostrJBLfpoJts2TukRq2mjsDbVksHLRuoM6knqmNr16cgqcWQG",
  "key17": "3AnENFBonffHVDxfi6boTZwrVMmaLFyfD3h9HR9i2kFPTWoXvnW81Mt9iahvkyTwf356CWhXNjPKsB56toCRkcKQ",
  "key18": "3oB7KhHCQ5oNN6gA1iQ6CaohJCengWGbSPEVm3m5ju3bku26jAZKi3vL8CJBpZfGQYcjbyCjvcUkNkj3jcPHFX5m",
  "key19": "KNg1t8G9dA6J7JVncLLRmZ5m525kB5DP5By6LZWhBDnPYChZwJ1aab8qyoMrT5qt1g4y6h8qDiLoyfyUbN4GzFj",
  "key20": "4jKMjeGFjBvyhcExARSsQAuMG2eFH1hbjXGrc7bJ5PooUac3vTend8her7mQu7YRcraYjAMnWkFtRbGzAda5ztSy",
  "key21": "3K6ynCG2G1P5Y12niXGr3NQMYgHBKiX1ZXEs3Fr8iHVmA4k1KJZCXo6FqpKaBrSmwwiLoLCYzHaWNnoRWJ5utRvM",
  "key22": "2mCUBirpQP9JUqv4FUsWNSeYM2gPAEsCiXf1trFLKpptQVt6M57BcGX2NCkMkxt6xgRbiDzveoVTBK6dGkRRnG8M",
  "key23": "3iGhcbF1wn7VZFpJovhNEzbkVctRpvHgRXQKYYANKLB9sX9MY5XXDd5n9jtnUsYVwyWHgK7TLDCaTByJeD8dGFLx",
  "key24": "5PfP4ja9Ck86LeR2B6LSj5okc4XqQTWwC8Ryz2uurkQaYM3MDXD6NBit7cmbY46jnrzCVZHtVztrGcsZidCCX81G",
  "key25": "42sH1ybTG1wucE45RGBH5hpySB6C3x7gG1GYEnwvq477qPDK2xf8MCvfpozy6WCp55GvojMPtrhunqyVKw4fvCox",
  "key26": "3EJnhzcvK6pAAnvThPDeoqgJzcAQk1eXj2S6wthmog83QWej6HSDmywdA7eqVuXyABJ1itRgAhD6HqWkVceXTa4h",
  "key27": "22j9Uo6XLcDAp12U4CccyvM4BtVUcCkTVkLssfW1yr5Rt2yxTx1eyeq6jwwm88TpP5SWZwEMJhRt6HVLBg6xr1JN",
  "key28": "4XU9xRm1Ym7XYtvzgfPWTfNGRDoS48Z37VpmU1Eq2YXWPSYj1PihsPnKHaDxq87F4rUAkDJu2zjcpLdTATHjh4TR",
  "key29": "3Z4PvBB3PDDoKg3T2vksEY5AsfJjLqF1CDZRpMo9FVFfyYsbmvfPaAgNgtLXeqzLgXvK3ZZhAu5jiZgJX6u7GTa8",
  "key30": "2VCFkC4rr8vFm223R28aJbjeJHtfyZMo6VvbdmA3arGw1KXkEFdoUqK4WahVDCtFrjKP93wsQSDjxzoyBct1K4m1",
  "key31": "2BohHp7KUMT5rrb2KGupYFYbWTdqhuvj2NVWhbdbtowRmBMP3YyNzdu622Wx7zq7rDCqQ66EkgzhDsEL1EQG1bBb",
  "key32": "39rN6C9Ur3r71eQh7uuf9RReY3jE3JWBET1tCfyAPAzqcBSY4dqtK51sWPnGwAavytikNCMesg4XFbeqy8yBsgq9",
  "key33": "5rK52tuPzdaEEQcgiFCR6unhoyzoXUfw8zDWp5SzXbPyJ3U4fQFJWN157mdpsNaohb3yV2cR7YX8sMtkZQXyJS8M",
  "key34": "GJnSDisY9nYhtrGwT8AGm64oL7uDJXqBf6WmA2wyZLxWAqSxg6Pj2Hn1vvcX8JaT6j9RNMvPKfsbtyH4ygKSL9o"
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
