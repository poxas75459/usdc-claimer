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
    "2R81s6Bi9WYheWHUzVhsK7oPFFENQp35rNrpRc4LPJiNyRnotEkx5sq8VP5TdpXGWVVxbkt4GoYbsRrFRGtJu27M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4niQZSHQkQM9ETDpFSUXrvvA77qY3gUSNuLfobf4q69LfnBCBhni3QaivTchCRgKTZyvug6P7edsqMvLez5goENP",
  "key1": "2t6L9XRefJzAQfCEV8MYPo8i5t7vYkmbcA1PoEMwcqnXeLemLZ6USm3KMAiTkCAsmjeRSpvwaBjfRUTNSWSa4j12",
  "key2": "qgfTGjU5r4LqyD6YUZ4ft4CbD4VN4DhdHiTMWSR8m9TuRyNdDmTnL4ChqvaDQDC9DL9gZmBR8NVfep76geQ2yWZ",
  "key3": "5RDGdgUPDYref68oEQV1XccScbasD7tEiNnqeS7FPqW1WnmtUSDWMZ1JJe5WKQ2e4E4xvbnFENALThUwGJRLG48c",
  "key4": "fH7LgmJWR1cZ6bHfhnmZLDxJeqhzXb9AZ3wkwc2j5CaLVPeUbDA3KnCKiBjBxsyiLDBhFT7dEy6dNQMc8N1RC1F",
  "key5": "c3FxJ6WUy6F94YhyGXFopyZrZuZ5KTMhimSXwTsy6KjfEfPHsHfuHSin3u8dacmED4aDpP9ezEKSuEy8R6Bax1X",
  "key6": "3ZmpBkRuKnZEr5hxh1Ky91YdC4kmGqPAjfRS7cPHC7f8EajXN6Nmmbv7noof9y59aVBDNk8L1YJ8LVe5QympyRSa",
  "key7": "2MGjeDsfvpYhj1sSvrKqj9hJZDGnyZD4vqCaMzeM3uuW6HWDGdr6eELskUPz6TbrfKvFBZcKZTVWpaYc52SDfYcH",
  "key8": "4gocfJhHFTcKWcmp5uh6SqLuzEfNwtDAF6X1CffhcvC6SWmDLWuBiw8ir79nd3qdvfDNTgHM75QP9jThp7oUq4Kw",
  "key9": "3zFZeNjgPU7AdvTNhHmQEKWk6seBGW5LeFjDcmk8SRiHvd7LxV5Ep1m6YV2YnY2JCNM9zngTSPiJwJsUrgcCzTry",
  "key10": "21v86nw31MLDDxQsz4K3VodxTbStFSEwqCNESf6k23N3g5dhWG78MgoyZoHqYWckMcs65xTPMQXLDCYSRijqmyqy",
  "key11": "5Rj6npMMnHAcMvNdxYN2i2u2w9wocE5kMbbknqQ1XjZe3Fzh2EpBZKztFkTof7bcGrkRPR8fGE1ctXXqBdjZaq7G",
  "key12": "5AGLngXPS5dojGTrsTg5qhjwU6DJDF4RkKMq6jGC2ckgi88bA4arATDsndrWQeT3pS3bC1ogMFB7CCuXFXBif1xX",
  "key13": "2xeGXduLQ9YoTwbHKZ2sQeyhSXLFf2PUm6qut2yMub3sYn7ewTEuXAkHmyz8NspKFPRt6wYLLkZATmtNtXXhNxhu",
  "key14": "26RgG2gPyZD1CFezX5mPqasiK8vEbZFzXnMqefAfNnmWC2WTdk6UZzA3oEMMQwCNncMEt9piM2KW6pgHmkrCT4U3",
  "key15": "tReG2XRchXewg882cQNV5Pwi9qUnp9k3BqgeNNKgbLQzzoUQJujejXRN57LkEYhs6ohp9xyLGpAxYyEr5tmpzzF",
  "key16": "44zjGVec8nbQAUpsT48iVZDtFsvi5vKz3nwoNGvu8PauSoprDeYqeq5CV3Cqib7VMVHH2ck8Y5bLM7PNpWfhFejM",
  "key17": "26tcybvV9Vhorfuj1m4J5oSqb9W2xnoz2XxrSRHhRzSAoA3A3n32C2G5CjQswEEHacpDtQbwep59szBh91YfzTqF",
  "key18": "4CGvLJQP5FzhthyX2K1rry2aXd1QWJTVVNUtDKNGWyJRSWhYhhTzkV1vt7zvHW2S3jNEyeXaxf7em6zGWbZXtnhn",
  "key19": "4hL6fnfNv4XHdYSKB1vSfiqKwskHjHGcjaxVDqpTA8cQmXip9TR3P8fB3HSKQJ8Et7Ba77wZyGViiBMjMuFbPbHh",
  "key20": "4rkbPF5NWJvX5p225shkY1K9RsbVzv2u7WgVRHN8SBF2rh8aMCUVESweUmqL99w89H3AqxaCiFLJL78gWHmCrwqs",
  "key21": "2FTYz4QDU4EBTutkERsTQLzzP3uGNHsRTjfPrBapzXfv2bDy3zgmqh7gyuJXcX8dXYoAUj66mFyyogBpjHPWEwu2",
  "key22": "24PEyFfzsRUPCvk7d535XK5EQWEVSxgVCHYtoM5ZwnNJ3tbZ31Z8X25nDPqHHmXw1jqN6SRL7wuHDesbr4vv15JC",
  "key23": "5txoPTcoxiWXSCVHYQpyd42US8trfrk3TfRX7VNY2UrgrbmyP8ehicuAZJ59yBLaLZHQ2uVBeMxt6zt9kG6ZmoS4",
  "key24": "xvhRE9z1MNYDjyMV3uTstgCX7LHWyogz1KhGnK45CCfETGmP9eiZUfQ9bke5uij1vmkoVopsEha2eWBehaFbJBh",
  "key25": "3gq7SHw5H1Tbx2WYZCkTWkHqUHT1cZLghCkXFfAWg4wk7UXSQe6audwMa2ouuvCSjgdjmwLsELq62BRjxuZSX1NL",
  "key26": "5gupsKaPG9SW3btWaBRfUoSgQDRJphaQZesguQPfYpTU6qhrzGhKJ7nyGDvDjuz9QgdQ2HypEabBavLH3Uq7X3vA",
  "key27": "3Cz1kCMpLPrVT4uKSV1LXxni7ifKkvtsGaYuu4W4Su18qG4SFVX8YJ1UvyoSia763M3kB9ez9WcTdSwNbAT9g4Fz",
  "key28": "4EoXvwTVHTNGTK8PgUk5qAeGqKxmGhXVhCWHB72hFR6axbZRHz4aBHt6Mm2EeqvwxBxWVsYGxHcLP1MFBj8FDgmf",
  "key29": "5UtmXwuYjmNs9AXvYziAjwenDsYvj1QxvCJYq1gr1m5Hu6TPcJjxVMHKyZzKXEPusRk4YJESRkVLEdEqaxDXrCYF",
  "key30": "3nex4GBV73kEy7DUs67hrCTJTKHwfi54Lr4mPfaFEbbKey8pCo1HbDufibDHQQwvRrNpQwnKGzD6nJS377GLEu7G",
  "key31": "rBCYLgCLfwQEqWfi891aCV61PLhMGFDio7bZrFFjUziFcErEt5sHw8LQjdvYfSrAtNGnqnLFSv8toHz2v6j9u67",
  "key32": "5uUe3bLJ2nnmWNRZWZ8ZM1mBdTGsgG53cikXRKeuRgccKkuD94iSdeS6cLnH4JWjAqFbn4Y4CDZTcVBDk5GEs7TF",
  "key33": "5fZgFtQZmoQfnKFyCJqSBADz7ArYFxLyJcvJtfs868zfWVQ6ShuyvipqnQCy7XvLvwWVRc1DTWv2bEiJy4UJYYYS",
  "key34": "2q51VTE45n5noSzDkWr62gDBJfAFnnyVw5CPN32WyRGEjgN9nSCuNarxwogKD9r1yUx14nox9F3LQ9mo8T1pdSBh",
  "key35": "5SF6A2vRV8dgM7ZYGHH6CqiJUvUZo1tWiw2i7JYEAHE6K6SFFVnxEs7PerzuEgQPm55XLEdJntJniCE7JaZhmeKs",
  "key36": "3jCW7e6thLck7yihbw9k7GTF2q27TK9DNfvaD7K9dx3HNR46eixSdZMwMhEof5EG6e5UPub6Un2Z3SaXkpGyqzLh",
  "key37": "3XkLM6Nav9DL3sqC5FEzoXgx5UFJyfERfw6fd1jLoWBnhn5stfof9Th77ZbwjHQsCgzptC7d1L1PhsRvG4b3i6jF",
  "key38": "3VwvGCPiUTaPgmF2nVMvjnHGz6QYCNKHC46sjjdbCQzJZr9K3jooKjdwodf1EyAPtpz9buPPFt5fB21PbnnB1CGr",
  "key39": "5duLQCsqDKhxtvc3j1RDRGHqnoFrR1WmzDSMrUXqTvcbUcSogrWxsYP81z6k6x17duuf5G8GwzcwM5XHXPGV84JD",
  "key40": "F2RRLkKsVGamHvQGHk3W9DEEoNNYMhxQJNgggdXxVkNtDpDNeKyLu5zFJEE11GuDcyUgf1MJGKYkCibf1TtiA6e"
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
