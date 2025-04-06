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
    "31GSeb8ySSTk9Sb643LPpRTmJc7PYuC98UKy84Jtz5HAziUBoLwLnNEN8fDNRauvbv2y8p73ty3iFRskJFn9xYJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33ArFjfZcACEeXVSqvfxyXz36F5V9fxqEgWwzkwtkLAVUzgCLhRssfK5vRGG4oxVcurSrdqtUQ9pLJq5n5cgzDqg",
  "key1": "21e59bDWySyuHYaaC8aXHZreZXW8b4Q7vzceKti4FNB53tP3kyD83PAvwtnMbjvdH5ioRjfRM6QAQYNDzSvucJVt",
  "key2": "3CPZh2DrsBpEk22B5s5Lyv8yhrtuw9pqsNd1JDqqSif1c2d1jgb4C64cfmY72sNiSH9qoK2yt6WJQPtjav8y4sNr",
  "key3": "3FKGDaSntMLEu6mHtVMDCZoMZkFrf5dYmuypr4szBn3N3BjekVeA4zDyiwHMv8Kx7zX9bmX9a3KAaGjtKeedNKiR",
  "key4": "49S3ZpmuUVsduPXG4xXxZ9VcyhPUW8E3RL9a9tKqTGb3RtMZdHTxTvJzkM7i88pBgC5dvupNCCjvtpVGdJZtP7yq",
  "key5": "29w69MtLHW4dhAChUcWkkEPE5qjNd7PLhYK1Hbhe6g9SKbYUibuM8yMNV8A9BZdqgEtoo8yzPZXX4ZbB8dQmYNH7",
  "key6": "4qevK3bR7Z4PeiCbLjD8DTp6QLJYWeErTfA8Hu2uqvmUfpmeWQ3B3RWY4aJsCAidqieJH3Gci96tEeHWni8Wwcsw",
  "key7": "4oXi8d6qNKmjragQwLk8qBCthkrXTzmoLkb1o7dppHjoEUgTBtHsiGWrgq4GYVXBN3eUGqiLCQgasvzLNBU8d1Ni",
  "key8": "RrgHNTksUeMu5p6JEGkNp1NWFfe82SpBBefZsqMmUFYdx93wcE4xU9FEkJb6ygspNJ5eWHXF6o8PirU2mqYq1TJ",
  "key9": "5G693ivsJwt5uHxd3q3ZW1bSzHnGtkTTTZiB2bHdthgMxEU8UCXnExR48AL8H6LCrg9Dq1Y5DZRqVaEfnTrnDLWr",
  "key10": "5hvxPyxWVEi3tpMDvNZtM3PoYei24tfu9f9s9fRaSxqm9F5zsAUqA7rPyN9AQ1cvdzB7fa3E1G9Q2baAWi2trGJB",
  "key11": "26vT8AQ1a3kv8FrV7Ljo12bRQs6EgykXx4QdjXhg6bKNBAQC9h5RDWLxEsJQ63bzpwantRVovsYfSKsAHpytwVTi",
  "key12": "4qJ83NgnfiYK9joznFQA1gdfo6fxcXnKK5coyoimnGGWYXSdSkmD7ARZKqnzWTBHzFzkdbiFS9CbSM1KidemGpHj",
  "key13": "P6jzbozQnd4Rfn6H29J2duxXqMSQkcmqMeA9NfaPpCYdruXXk36S46ACShbQ7ve1i4gKboXcH4iDo2bVqr3jCUH",
  "key14": "4iSp9iJUJ1E8KYxsEXsi6roz8CC8mFut86EzDrVaAcJNTwKy9x1fmRpxGtxbHpvSS5tA2zHEiLTjYKuWYFpFGHsB",
  "key15": "2dtuDRKTU1aP9ACHCboSmHJUnTBA1YWptZ7UYWcng2hJ75xNzEtuR6FemZxzpck8QDPbZfo8rWED4F8EAdamRKjv",
  "key16": "2RWeZierCwhc723BQvC4TSQDAbb8mobSdbHUrNnVz2xFmELQSzMu6pbo9uTMZ4iZcsnwNEtn9wV6VcoYQsPpBhJZ",
  "key17": "5dMZfBXE88cedHiET5zFmrWaJuEtvmTqRLuX8aoZLEJERwXZtbf9pd2qSndYsnKmyWhjh4W3uZQrWCeBULS4YvrK",
  "key18": "2U3FPzx4DmgFqs2hGkLw2f1n78L8wYxcVh3mxkE6xxybXNTQqGSWkNUrz89SbVSrrwn6ZKCaL56BChfdH21Bc6fQ",
  "key19": "5wpD6yME1ZQGBfXsTTHYypyStPt8kZubiyEfWyCqy51ixd7GDdCV5TeA8sm5GJvR2Nt5Zt52b2Gfd3TJgaer43bp",
  "key20": "2QsXnSo6n7yimeFmvHNvYcjwy6aDqdhZBLzeqNqhjGn7MLdFNnoskrvKf4X8tCRRqFQz1FYW1b1BzzZctEvcydg9",
  "key21": "1zBybxU18c5xx4bT7EGEoXacDJGgw2V5Dh19dMKC1JxWLc8dhFQWLcMWE13wV2cZRxLTreS9xNKFwgUM1LHpAmN",
  "key22": "3VF1ufuZC42mtVVMSSzgcVycp2LziL4AxSu3Gf3r1zhMMMW7yVhCdhZWGYZBo2FfoUVurYRNv4hFiasFmNpaHV31",
  "key23": "4HNwETYwDYxDkQtr6QUaKG2EEGk6K9yYg3pzV6tuQv1V43T4rpLfQmvPiUWud47ZFW8Tq7xh9Tp43pKJHiEeJrnf",
  "key24": "5wmcXrYfVCyrobo7ukbqmaCha7NXFq6xK18bsBUSwDHu3L3tiUMQBMnR15vMBD1E6bDfcdtPW6EKipxf1fXNYMyn",
  "key25": "3Cr9FVT5mSHBEDPNpVUc2g69WWZEad5fwYBGAYgMNRGZDgiUZK6W5iH9DhWwzf43AWBYD9T41uwGTo4wpDM3btGX",
  "key26": "2vrwij3aY9eL9bV8J6QtufVqciiFaQSTJWZtP19bY6syQphMycHyueCvmRQBae2bdUcjdLvhqju4A2N2Qp1JG4Zk",
  "key27": "5vW2kxdaEw5W9eXScNw1ExNGmCyfKBqxKK7uYzi4buEBxmjjHohYzngCWesVqv1vocivSgBDYU2W4BjY7aqPfS34",
  "key28": "5eXMNkizShGW9P5x7nbD8ciEmUG91sBaXHBDKeFLkJ7pziKpSnGU2UmgcSGr52AGnk5GWR3zqLNYewpENREWpDFr",
  "key29": "4XLNze8GyXjD8hc6kzvYGiBW6k5sy7wqonpdaaiudkEAdcXsFmWvJedZL3dx7XFJnKxoo7xEFKAmUeAFFeY8JB5k",
  "key30": "m9gJsbrFjzPpVz5XHbNk9Y1GC7PEUG5kiUgdzGHd1qwNbxaAAN4Khhy2HH5fbWnB3zYscaBfXAYsduNUnqSPqhq",
  "key31": "5xNYQLGzn1hzScoA2kHwpcC1iuG7xie6C952BE49JWq7nDL38EuWPqSyr9UkhQgTR4vewY6uK3VfBFB2CQPAEEL",
  "key32": "2DAcpxXQLXdeUS1w8hZT35QuEkfLJyvPe9HtThsDji2uATaZ3k8cnurbNAZNcUuABy2DiZHWNf5bTCmjEEWMorq7",
  "key33": "5R8iyAkSr9DuTbzcB93qF7wdTMx4qUVGTcSaggN67jJtcos5FB6RXsqCoq3r5jbFvRPLY5f1abcN1FDzEazEfJT5",
  "key34": "3gA4oM7Lv966YkL3pQvfXseGvaxRZAsHCbARqQyNtTNhDGJTdCAm4UYeXFWP5f13VhWLNhTsNfvWcDXgVwM69n2x",
  "key35": "4yDQMaDFo8dSUxY2E1XN3u1aJbsX4DbeL9BZsnpWmfyKvEAZXiTycHqS4Yuqes3wEQN41JmyLcgFVUs5d6T3wQXr"
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
