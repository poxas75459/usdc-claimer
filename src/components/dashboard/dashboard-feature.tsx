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
    "2JsbH3NsPTqvnKT8vzSmU3zgmUiavt2wb1bzksyGeZkAQJtDikiETHy1mQ74tCbuxUpCe1AeHpRR9Sz5uunYznA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iokiMw6ock3p6MaQDyptfA1Hamv1CX49DsGUXBmWtUv6FufTtGT5DafKpcY7VKL3FpaFXWGimQpEAyeC6rz79CE",
  "key1": "2Kr6uYDMDQR9vUbKMb4AByjzTd745tx9NmJBTAPTPJhFS8UAQa32izgMJ5NC3S45r2GKRW4CHrf7f6GtZtaqxiBQ",
  "key2": "cweqddmEjPsKNyDATsWekcCfsbSGUyfWqbrCRQeJaTpY7RWmALziPPZ9nKkY3JNeW1sJFSHN58JJtY1QFim6rXw",
  "key3": "2wzashdCavxu8TvGXewUP9GbZG4N8VHCX8VkoyPao5t4ganBpRHv3RYVoyBPdRrW17XW7LVwypd7WocPsgSAiBkq",
  "key4": "4ywqavWRNsPgS4VXWNxZ5RNE9rrShtdptt3EPUM7tT1otksdgstLQKqnCosDnBUY5HvhKqt14hGM4mCtpabCx6oD",
  "key5": "ZH9sqaGVQ5dUSPRHAES7KwciH6p71r56LEhfXNvE13TiQaXeTKbf1DYzCD8WwfX8GD95pPqR2VEGv5tLewWGDzC",
  "key6": "3KudaKAFmVAJTGvjBoaufBGcvzzBFBkhSjJcoejSxKfxQ2iJJpRjvxsxTMc7TPcnHNaQDdzsq1emuHCQHerxjZqc",
  "key7": "5Jczu6ipejfYF2Lgq9c64TqNw3ZgYFiFV9rsUNmsnniPF4YzdfnSf3su4Cz6pZgDMwu7v718Djffn1A9VC18XWt2",
  "key8": "5k3g8Fb76E5zDFdGQSnFEYRnnC8XvJSk31oczLwF1N3cAQEQCsRNGRAh7JLZYKvUFopcoejgYYiDFHnJTs4WjZTq",
  "key9": "27WMSugfWbv7iVqp8ZhwoevodhNUfBMVxcpxjmtcraNNxJCBkrB9j8e8rwmUhxG8EVVwUSF6U8fNEQS4VmjbenBU",
  "key10": "5k824qVchhk8tH5ujiwbLUyYxWiywQp5t47rv7SYMcjDCy5gTNF3us9sMXpyKs8FAjYs8d33EfGQsv1NHjPSSTmU",
  "key11": "ixC4QgU9GnaMzSDGeJZfUeXrtKFupJ3urrhWgTcVN6PZqLN8vuTuu1yDkf8DT9unfWdpFieq2wBW14J6WBgD1Xg",
  "key12": "2z7ThSS4bbDZVfaUoDrhvmzr2RX5rxSGSPtiRXoER9Bk1rScxYsocjMQtowMKfJ6L4GQbQQEdWNDP8nYviexLHip",
  "key13": "49N6vGNymAxTe8B8dVwgRD236D1kaNcYHpQwNjfdrKBnjt8KPhnp5N4xiMbXa8d7y9Poj2C3q8gJqMRYjCzhZnSz",
  "key14": "22qa2M1vc93qCHP6SrNU74HYKsqMBfYST4H7vY1bEJSXonXwR6HdfX2g2AaALErQ3QHjYJoyPcx5raJFBCVVBDn2",
  "key15": "UzM2PsZbfcfXL4ugsUXWgG1Mi7xzCRM6wvzS78bfMXVDi1XYmNeQtMrohQdro5W7tZ56kjxhjN3yRxdiYPivkGm",
  "key16": "2k1NVUikTa9AM5gNGaMWisRwgkxxPDJL5Vvabsro1TeiUcAk2qSMyh6k8Eb4BmXaFuXgL3fZx3ojHThgdtNx4ki7",
  "key17": "3eHq5MpgSie7q8Z2kX2v6QvhLZaPp1hfgh7zNfMtGM9wVPwdkgkfu4C58CYADFN1D4DDhCvbp6GGbmQS6ttu8pND",
  "key18": "5EsMg4pnWCMSQBPyXJg5WyQu2c9xSvyDeWLk8hUSUK37VoZPgHwPzLj1mLTYC8YNvHpE9Nc3Vu36bUEB9ujEpiA9",
  "key19": "4ZF8L2hHECFDYqHFyahD7wWWLABKt3nfeeBJevaZ3nifqvvYsMZKTrkz9oC2ZugNEft6Gw5sYSLuzky4yyNCdu7S",
  "key20": "5yBTwVVSL1RTt18Q3TEehqFxMU8A3bs5LyJY6uyoZ4daTLo9w6VKnzv7j6d3kqaCfXXQRpqFVjgtpxdZoMdPsrJx",
  "key21": "4qcfYJga92Ck9fsYBM76toWw6srTtPtiRWvsppkw5C3jDAJUW1RoGoGXFPYSEwYQeasShaSbPrnyzxX4oq5UjQdX",
  "key22": "2qAiKf62jTV81GgYCjYy7JFqSMVRc9JgXyJkDZ2UmU3tk27nSP4AwuxegmDeykqCJXYppvNBixRgthAMngYv1GWu",
  "key23": "54FEtLMCqgYGQVkDu6MeCk9xBJrm6DmCnQo4fqo61w94JTLnYzkAFvGTjVZQB5jAVSVy87SCfL21FDTBBzcmFBpY",
  "key24": "224PjY4Ma6oeVSjtLsf4hWvPVqRayZmyj5ikqWomc61RMtUpSKdypNHtHmCcZkseunbFgKTAa5jkYTiuK1Jonjso",
  "key25": "5sLcrEz1GYZdR4BWZF8771wCkEjM5wFnq6f1r7XRZiCZSK5wwa4qnrhPQKXdKo24LuDr9QFro6z1UYm22VXAomVk",
  "key26": "3gE4Vx9MMjTeg2SgeFJWYRSi62U1gzUpn6NGFBwkDWhehGmENEBUTYD7bjTirari49J5ZCHg2FTmD7MsW4fjLJHf",
  "key27": "47uR5fEowPxP9KiTjjkkcsooq6LZAfvY7SJ8syZyHooamWxvj7nM5vCwEHz8q1H3C6t3JFw9Ns7HaseXRVNEZ18F",
  "key28": "5v2HG9RVPukZK8ziGftedYhBjRHybSYuYC7WTq27hmwdCVY8bSscBAX4Ae9W9FhQSdf8s6FxMpepoda61HsQEF3e",
  "key29": "6Vt8N6pPi1pBYG1mJumYV3gZJnvWh3fR32SbcgByu3i5nCbCrTBzU8bV3fnSKb6SRsi8GmEfDwnSQM62dizp97e",
  "key30": "3kB5Ee7uDTadnke5CdVmD65tpERuYjEdBGE8i3NPZ4erowyqP5DSnE2qePPNAmumntsU81JJyx6XiN8DQFhJ8JaL",
  "key31": "3784sD24wEhviFjRKuL7d1tv33oMjFvGrYUrRhbuS3RUFA5HGdqiRAKn5BF3xJt5DcXGN3oj2xzJxeRT3uAWDPDF",
  "key32": "wGnKgQuWcQW1ypGwNZZjnb7dt6yHw9t7ReTnxpUWPYpPhNtySiqJX2ZyMRskmj4X41vPBamBmRHavoy348ZotX4",
  "key33": "5vM9663cccerhU5XdTV8w3mC9Ad7WuDi1zwqC3fDr9VauDsMHuWZ7gUvGnEbTC1muQ5shYoi1kUKBNoTnLBjTcUX",
  "key34": "4uMA6VYf9kYQM4HMw1wz6ET6Hy3PdrZWWnP1QSTpbFeVTWxGsWCLmbNVNx2b465bf9vZ5hNDtnFBtznUP4qCTA7K",
  "key35": "3JzSakz8hLTRTJHyxTXs77AQNgeMr5PhKyL7g5wBFwa1VBFWj5um31hwpGc3jknPKdFTJw7dbTR5Cq42oVUeUUcf",
  "key36": "5GoMtjzKNELJHkvaGoo1NxmMmx5XAYrgnwtUhB5jrX9ybkhZrFzEjh3iGQ4DYDCyE22S4ccbkw5tNrY3K2ob5Uv1"
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
