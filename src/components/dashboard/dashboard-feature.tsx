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
    "2E99Zu6SgDFmSshCAUYaNznvHz2YgQ6gSgcvsetHThgdSo6x8KUYHxg137y2YxvUq7q5zyqh4uzV1rQrJfMaU64g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PjUo8PstVGu3bRjT4JF5PtBEX2CXMDyrPr37VYNdCUsXYWuJEGTHph8gesLusCWLXRgdjgBvK6vN3nBuSAsk8DG",
  "key1": "2KbUMS37A46f1bNLxrHTMwzuxNhaeSt68AqHyVQaX2FRkj2VyhEBL4MaVoxdo42bjjGY7VaggMuUjHjwzrZLwx6F",
  "key2": "27ZLyVRhxFWjethusEeheNDzVK6PgLoaamnbaF5xPtE9uRceRqZGJE9XmyJ64jd9ft2kxiru42HiW2abBqYGwG1i",
  "key3": "3B49SeY88ZL7XkYYjKzF2VmxBduMYX2KyM49Edo5wmkMRSzSXyE2J8dhMX9wGQQdXyQ6pzqcnYzYX6ggr4B8pw8z",
  "key4": "5a5dkZPJGx7Yuz7NV6rT9gk7u9RCgpeA5yusm8wWYQDFX5TKVUhtS5bBg2TwqdddfVAjf8PLif1gQgCFTjtopxBe",
  "key5": "jbnwdErFszGVd6veUV7mVNSew65LpPPx6wgHxGd7fhZP9eC7nvbWJbpmAe51eNxs18bEvQdxQVoMHMMtoRiyz4Z",
  "key6": "SkjchznNBnSomXHJbfFPLMNscQTyLdUHmUcL2v4tM6dU9z9pLXykHL4hT1dZUA1b4R6UN6wXWYRY3eKgomCsbWC",
  "key7": "3z22hF1Hts2ktV6xPdUAa3vSumouAXrP7ZWU6gyoyXqtWwyzHdMqxLYXsesq3vqy5AcQ2ZQiMKLzHKyD4cnSpB6",
  "key8": "53JqpkLVWzKhz4pdiMyxzWEGYceFum8jemDkNj8jiAfV4ey3o986kACos4sQFNFH54SUDwPfuybijdxN9aPRWDdz",
  "key9": "4n7nocw2vHuximTSQ4Tx2PnDieMywHX4eh4M1PS3KT8fZs168Py3bP5P6vYwdaQXgf76Anau2mZ97VB4txpipNuU",
  "key10": "5JS9ADqafdG9uFv9Np7k8VxHDeDfNkTE3hzMbE9WJwgdoBASnXXY9LJFuH59FWoRXinXHUsZAhi3x7sB6Y7gzkKh",
  "key11": "3seirChtK4PYJa1YTmWBemNfqSEinbcM6AnpZAWzNqsg2QKspCTWDEzj3B9DxeBovZKjMvpT73fDsfwgAmHwYJV2",
  "key12": "CMdU8buAuAo36sAP4F71msnqbzWGPTktYKYLjmvv6NxVNXVzLGvdHMkvi3SP6QhynnRwKc1CAHiZvRXN495NicX",
  "key13": "LNBwzk2BcaZWGc67c5mheYuxxykR6qoNy8m41wReY7Gjav46si7gQm4YFL6wiMahKAuVGqaVPhma1jaYaJFEkRE",
  "key14": "3pjfcePjm3xWdZVchSam8271pCnTUe8uh6xxKeGryHFFqob3KWSZG9yDKdFmZw9osHcFJSpstn1XC5dqN2vdHegL",
  "key15": "6tkWCaWBoFgixrPNzakX5W2tUGS9pm6V4KV6nPeJL13r9mQ322YevuYsHYezfmmnqoZhX2GPGfmFeeH5nHYd5e6",
  "key16": "5tQ5XKamVaTLJdFPusSj6ufAVCT1xUqmqMqFB6RykDUjS5gdokkGLhQ41WKESu6Qs2yTWPaogS21t9GF83rmZwCL",
  "key17": "EMc6w5X8FgfSTSf5BR67AhAqHgQYou1BgnUEoHsxcQLGz5UdGP3C137teTi3z6k7QXd1gzd1eT83Ebx3iBnoB1v",
  "key18": "3rEzHDqwopdGCGWJvXCkG1d5USKqTmwgJj2YXCNvkB2edpbUh4WNZQWVwpf8nummLxhgMGTeN5fZemUteLLCoHyt",
  "key19": "5FeVZg4VNQsVxEzHHvCZkH1jPESWqLSDMNZobizk19s3RYQiam4DHZuwkDzBZAZDCTVfgKzGdtyABuTFhFQwiD9E",
  "key20": "47jTPzT8hPdQKtJdF3VqyF7wxSoYQLzz41LFveK7GLmq5EppNWc1o9DwnQB46ojdV1GUvEmgdtqJCPRfBuT4Juaf",
  "key21": "3JRoiq6oXgqjRJ7ugLkJ5495J6eJhZxSe1WmCKjYAb5BrtHRrLrAR1thuo5H6j8Ao5EQ3kBeyy2a25iUykS1a5iB",
  "key22": "3oKsvPJcYQePHxRd8k2qDVp8SCJeTY6Q2gah93pSxLCJDNwMVngbU5jxmGmHbuidPHfiLzZQ7WtqEAUw7uDt2CrZ",
  "key23": "62XNQhVcyAXbak8wCWDUZ4u8pZEWZKPBR6XSbSJCThw3EaDczAWBv4618LCyg5UUKU5fWMvLSstVtKsH1BzEJuqR",
  "key24": "56w6y9n6faPUMTyPByGY8itLRZfNPUkHZ6HnRCjACNnkuZDBnH4qYjV8StSLL5WB3KL2UXnbUVAeaiVduzTYt8UM",
  "key25": "2RPAt7S3WQPXLxwKWre4VNbcWqEiwXirAMa2FRPd2DEZ8vb7zNceFbBPgEyg3JkL26JyUweAHWxxGMiHQqpjCaWa",
  "key26": "4RfvBgMzxkzRMvkYd8WV7RGBd3SHtEof3QYsxySVxr6Nv24mBmeDGEK7D11NpaC4mqUC6TfoDTZu67jW2JbC4f9w",
  "key27": "3XZYRgXyzjLMv7A5jLqJxuMEr8Le5cA9973hdKy5c8jE3oB9mY6zrmYzHRoyYfUNHBdjauJAtBdW16J8jEikazjZ",
  "key28": "5AmqKovNw6fbtTWmADyPSQKQuxT9N7Y1ZwMfyAcZ14DmuxR4rP6hahNM8vJdzbF8GMC4wfqoREb5r9Ndq2TBXx5V",
  "key29": "3iudUPRuEvo7cM13RLHJq6AeH8pVW4GSHzafgAhu6chs2qU3kRweJfaX9QaWQa3PUjr5eXxYyQsjj2Vyrhx7hP5v",
  "key30": "3YSMnrqX4jxv2pHPGDmUUz36Fcbiavm1KSQMbHJ1QpnvJUx8qARe5DhDsRjA7ZghqGFswbEEFPow3bzRhtoUvMrU",
  "key31": "2MbFMxFAGCYccUs26ahfmsqzskh8ArCP7ef2mdTb7fNuWDTGf1mmZ1KaUUxaXUHidgrs6bsuowWF3pJ8QGjdfgDj",
  "key32": "4kFeiBsAqAP6Txja7ThSfEmKUEKAPegcLbxyx3j8p5uvyaywDrGrCB5x544AAAr62YAxWEg5momTiQuucSsePDG5",
  "key33": "B2EojMzdTK6TQpq3yparBtpSvGpoVfnLZuWUtU9i9wn4YywsBspTUvsYiCpHzh4v3Act7PUZzHKVKjopAn1mpuC"
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
