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
    "59kYiznEtEvk1CHz5DQxwdEmSDeDGcojmaLYW83WJrMC6zG6qQXarQ1yhT4TaQqFw5UUAWW4ZsKYXsc5Tx4zgEcW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mDwFjLhyKxp8tjNmY1raLm1EDmwfqftVtHwkQ6pPH2awTHrAMDXii4jstL9wZeJf8Ps4QyphELuqsbcqX45E6Kd",
  "key1": "2VeSxtRvMnm54DyEALL1m9CaVq9nVWQ8MQegTzDN2NXgFjGCTQ1kmK96encd75diVf6jzc6qiLrHFMziDGMVeEzf",
  "key2": "28iX6zyHZxnmaLHTLihiL6qX2rUhzKBYEunF9fwfo96jxtKvTFhhCJbWxUvagfZDVCzT911WWhBw1Q2oZ4HBAvKX",
  "key3": "RdfT9Pim9j3oCv2rJnzCT12q8kcwHbaCFP3Zbm8hmK84v5NbeLRTcKREsfQPHvZJkmghd53HP5hW2iRyguwkuGm",
  "key4": "2knfsQkMeqWTsxz5ThN4msWBNQu9nTmiKRm9PmyHxuWrrsrA8MkEy1qMgGSArBogk6KWEj5miQG1gTQEG9XYkhH3",
  "key5": "PjsUNU3gSCsx4su2LvyiKMJJTudq27yUUTeF6x1PuFkJAQkkCCJHKxtHJnud14aVeQfhPRjwG5GdNGFKcrBQSzo",
  "key6": "52UstH7tdQ2WgNJcTPA5R2tXF7Zu4UdRfXZ4Vex6mLtUALsADFsG8waPyEVLF91RzviiSnhU6ayaWLpq7jomkJ66",
  "key7": "4kX3c7PpmxQn4kGzwF7XCVJUNdAYq1FBhpR5CPSBMRGT2e4tfnzpdFoPiCNa24tXoFj3wa3SQtLSiB9GPneKUWuN",
  "key8": "3ZDXLrmLCnBZwyth3WGk2c8Qf1UKMTEEymeonR5A8ADMvJ5gmobJfx68R5dynbuBrWrkXEaT2QRAxDZ326M549uE",
  "key9": "3JE9dFsWjHKEqTrhoJtWfuBoWaaVimGYd4TrzHsDn6dsi1Y5sMn3qzXTWKjNqRAbvjYEgsb2HL6tprCtrho7pFEc",
  "key10": "PZJFw44AggAaN7PtkZAForvES62YYXnoVuGN1DUvfxdqhYPtqryNbJvX3ANuRZsCoZArHa9UtCVXjHUHDP7cAGm",
  "key11": "46WDbe3SbxNmHhMDgPWFjvVrpZE17J4fbFKwy4qwxpBtGmS3RtG1uvC6AytFZHA7ZWHphAdLXxcr7TxrW7JqoYQb",
  "key12": "3aurSAVF37GzAgwVo5RTuyKgi9UygvQ4MjcQ1CnA5GnqQQ3QWG4tkJzWTUW9GPWgK6y4tb4RpYz3kfytoRLHuXx7",
  "key13": "37P9SPPr9EQYJNPysNujXMsBXgh91Pz9p9AeieoRntTu1J9ne62waPUVGvtC42zwnNAqxKftenwjNEYd99CNDYdY",
  "key14": "1RmEHDNjhWo4PoLBR9eTvEcEYSc5wJFzZrX13zBdsjBhmwSBNVVGLxKt8Bv6kotJvpMcDDAdQq71JSMBLWuUA7J",
  "key15": "3T5c2F6d4ALt5kXnn5FpCRLCrY4hGqdLZwQU6popN7H62Kd8HQVcX86GrhMhhqdtrYHwjucHLoK9RZrf1iidJLLG",
  "key16": "CYcVr1vzb4HZAwWEWermc8dNfV32sGCz7H26ERiazmnCi33cVxtxJstzaxC79c9ftfc4zXio8Hh8uVmEBWyvavD",
  "key17": "5LevKMA3eAm1dASSVbmjVVoLDAk2fsvX9psdc5UKhdbaKk5DgnHjTCk4X38ufn5JL6Wi99mRQ1aomhkc61A3wNXF",
  "key18": "5FdBQskckaAZ4QXtS6Mca4cNhxgmUNTcawbc6wqsvixduQz8zG18D1XYmVhh4Vcu1zM8NuTNX8at8v3K1Pp7MFpa",
  "key19": "dD5vF3x58r6fsTonrAztJQze4qj3yPXD2QcqFZacNgvyDsYFb6Z4hmkr6JS4KxadCJrDtYNDohqpuw6HK5vtr5Q",
  "key20": "gBkzGGto6GKJmNgheyFNzsL2NGZYfHR2Gg7Szsns4nw2mVrB6RkyRMnMWogRU5RfePqp4dTxxBK53e4xnTg8GMB",
  "key21": "4FA5gwUkGxSKePzAzvoz8N3GRCNyrjQDZGWhwkRrFW13hSy6nttnXgGUkJih67Heb1xdYLSJReSmwWMRVuZCaofi",
  "key22": "fog6SqWXabkCLTWmjPuw3tJbV4wMbXvYRkUDucDyGgDFiAqQfDRTkUKWnHSTA9rWkyxuetvD6k8zY4orKLfTRiU",
  "key23": "4BuWaDSKdvW6ms7ugigzjSbny6Svamz7bUZaELrVpjSDXHA3PLkcgXAMn8vugihy5pZp9usNbLRBsyprfqLm9CZG",
  "key24": "4Kj7XhALYBK1wUcPobhEWKqv31t3CM4arhdYXntTPBZ6zKe98m4aQYLXh7RyS8jV94k9M5RSKt73EnQL99JGq5aq",
  "key25": "2pD42T6sADyAjt8vqf2FrP5m68ePrcziL6iFr2nd7ggmWRsatRzndQpz2CA5TMU3ZjsoUpSBkqhVzNbzETF6Lvv7",
  "key26": "5BBdFi7GL8aTv5FMJNiHU6hez9GTMJiZBveZMovCCBn5dVeswymGoHqt6FnmUWy8GJN1BE3wUxsCMYJXPkDLYTGf",
  "key27": "5emLrFabWTDxncNtTNLqVDzBFhLPVywVnTGPnbm45ivLyKbZgyR3PFyERRKiyqTR9WUBJfEYjqGgYnqBsn8ectPW",
  "key28": "4bUsWFtcA2tgeE6UXozZV5hGgcW3g5T8rmPQQeSe9n65WYmBbu3yow4LS71PnYitURoSDZ28df2LzjVgbgNRDg3C",
  "key29": "4qW2Y7GcUAp8RMoqtt9X9qqBmUxaCm5kCrDspDa3XngF5afaAEJ664vRqSoHKkBPXyM54jCiiExUhYDxJpyHzrPx",
  "key30": "4RFR2Bgh7ZdPGnVM1MTvtfYitLkyt1XHHRWmPHpyxbUEVdcfbJjd5TRPnXznh2yG1k7HzdqxQKiXWemAHqbpQUbX",
  "key31": "Yrk6VoPTZYnnQcn1ivJBJcts1uDwHSXLQceYWJdA1g245j9shrbaHzJWihgqA8s355i8p1M9tVpCzfpZyDdMCoP",
  "key32": "3wUBz9zmQEHFun9qToy2szcZUXn9CPHGTJGeATiki8cWjdvFVRf9kBe9saPZys7JwpbVH442PKVtCnG7Fjf15n7Z",
  "key33": "5gKX1EUfP8J7HAfKMmhnwWksZXS3UjwyHYZLi5vrcNqPRmp8fCN6sMEjq88eT9ucjhWpufgvyLcNGdPZcMaKmSaJ",
  "key34": "eP5GWD4kjEGZAAoQUsx3GviZBohNH7SwN6A8swNi3LsUSMR5EMQxzQG7QoC1VBZrjemDxfGQUopb3BsqUiBRwnG",
  "key35": "39dZozZe8p3rbH7pwtA8qPS1sU272w98GeoXnZ1WC57ggiSdDQtRzCh3YXBrRFuKXXi2SSNcZGuP4CbMvoFL7m5y",
  "key36": "4rp32VQGV3N8psr4eJe6bhVZig7buxYXh8zqqDr1Gd2mfCkDDXHTZSbxk3eVqUn5JMQNDVAnte6syCL7LFCz3TRs"
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
