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
    "u27RZtLBT9mNaTX9QVghST1gBrEQ5Qe5bhJWWMJNhEBGRnTGFig1HgCj87F7T3r2jdbB9RmNpWfYXFfw86Tiqcn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41ThtBfpt3cp3SiyfG5HEqXmXKT73nDc4drfdtULDmTJ8RLzrrWNEGJLsoRsY9eHbdZyyGRy7Cnpc9VdWBjtv3fj",
  "key1": "HPYjZfwLeJ1wZESxbKAcdMjSazSg5J94PPTpAFh25xmt3PhJ9zFji1F8hhdYZCn3ySDsrMt1N131yCaxJsa4zMu",
  "key2": "4REgSR2mSLNrnn93bp8r5ZHYyWANLygnAMv6kbLRLk5peG24RicQFE4PzhhTkRfBz1xkGTHrKxsxuY1kNNmyS9XC",
  "key3": "4bL73JXSvYRjxFxra1NdxXAU7vuARx8oMmy9ixcKsNfyMALFQv2NFEkuKAKAcrk19udHoRZvStDzkXxrU9kPgkRK",
  "key4": "43rDDbZede8drhpj9zdgiJef66XNbNFrZEzjEPUQtB44RrEtnrPPs72XfZaEA5BnY8NQSipWnFsiYWaDt6yCw9Vy",
  "key5": "2ZQKK6y2kFVJACTYkfHGQ7kwGyVDZCWfxPdVrt2BFSXwevxTm891XdhqcbrwMTh4QNUjsEfocpUk8KKyq8PHi9rb",
  "key6": "4uh375zSUx4WEcZj5FqhiVP4UAigtPZqUtVMvjKCK8EPUMWJyNYrib8xVBedmygtSpDpVpwJ8Myg9UG5dgjrHWGb",
  "key7": "5oE6etB6s8wTkSbHvyns4FvhwZiwemLB72heXF7jVjvLfVvik5B4GKzR4B6eTb5VyreCgVkpuR1VfdWv2pqSSzbZ",
  "key8": "2hAaQLAGFJZ77TTJqfVvAjGKSFiPeZ3oQ7QsMjz6bzzueit7PwHLYaUSm8xPDaMnx1Asre9k4imWLAohSzsv873U",
  "key9": "4rwPVzL4CzFdYmj7FkKhQxnkERZzYbhzsqR1CXq55TP2BDSpUL28muBKWz7GG3HiUA1LrPWL39VAGMDrngC94DKx",
  "key10": "5ovMtDaPJHxTPDifM2F2Bg8dEbzL9neXwW4pK8ofGnxpaWLyqu7bfTM43sgG2JYt4C2WooAYqH8gk83kkfr5nctH",
  "key11": "4gJmmTXU9Q627TTmYxV1Dqsug5QfFxbPbB4AUMUrx6gaXiruCc4hz3fZazRfYyic7jXbdaDjRi1RJrNeCjn2SNSU",
  "key12": "5tiGnjHz12sEj7ud22aWyBNvo5YBnipSXwJVJcri6Qf4cHRhQCpooAwrSALqdnbaYytGZcdn5wB7zAVhXNVP2xXw",
  "key13": "2ipfSAS1CD7zFHnc4MQPmt4CcmP4zdrbfxHzzVY343qRE9EdwxA2icPFMhN9k8AWTo3iH4WdmRwgfTQj5GXcV95Y",
  "key14": "s3TepfcvpwhnvsfHaEXLAYssfwE7x4sDCY3tyr9FHcFBcu7GUGsWmTdt3W4y1hYKTt4NPUJEbaTuKimasgbfHzj",
  "key15": "5VNiWFS1S1ybhyqYhBP9pPtBAfXHLMUf8xYVK1fwpCttaXeNmwMmswTXfHzw2VSrSnH5wTZ1nYMAHFez7CsKy7D7",
  "key16": "2K9icmSHWxGQH3YHgqWQr2BJnsJNreVLnHQRG4gHVqem3RXRaiKHr4SpqFoc4hf6QCsJtbmPMjdhk9HEqLK6W16z",
  "key17": "26axQttCUM4ngWgQ7SjErVoXWQEVEGA6ZgAng2WkwgxmPCvxFaAk2aRTqWdRgJBQnJuMEtYoSS8diqcfRY9fPY9x",
  "key18": "3AtaHxCgQB69sahbmmeJ9TG9HJZt8cRxP73ZP5sYdAoJyMbzV4kidDDpKLnqpyGj4PUYdtVsgoNtZ58u9m55oNse",
  "key19": "38HMYCuCtJFSeNeZ9dxivdN87J8VsPkxfbnZgvLvLCq5nQYbio6kX1qjkikVv2jrKQbfDjZx4YAxvRDX5Aew4vUK",
  "key20": "35eP2mCioRRND28pWwkZfjsRDU2e8cQenm74nUerkXJiPsFQi3FxvgnVQdFvTYgNax3rDwjtsrA2WmHnPnk2RXfo",
  "key21": "5AKJCKKkVxpQX1Pbe5DA6grR4R8PGZ97nADXBdYUgpceA7Ws28YXGTzKx6NhU4qgzg5qyxyQPHJfChds45HbdXoE",
  "key22": "3iuW3dPG9q1DY38wmoadDibX6xnGnHTuy47P7aUFBUbcafu19gdH7shnK4aAmXYdrAWgR41qqCyzCDWhz3pwkTbu",
  "key23": "aqiAdDgU7iyTVigFaEN33JdaJmo54Yw3YQWZRYbqyzMycLEUMyykDmAv1MVuzLdWgGfsMVys1orkr7eRW2nzJVU",
  "key24": "213k5CymwNWjQwvP7tUoAAZVJxjxsyZS4v3oYVo9999CGHsvJbqVPqUhqRx77T4rzS9AF5wMB9fi7m7t8D9TtWZZ",
  "key25": "2foWq1QoBJHuE58umobkXwNEbwuVKYi1pCUphGccjnMB9MQPf5Yk5EwFFTEDhX4LR8ULFuKGYPKkqMNWfm9UXEsn",
  "key26": "4X2haqBafqx89wPVatJSA8kq8d89U3dhQNWtN5wFh5seAbZb9Q7jeCpeQ4ATraX2qo5Ayp1pAPqLTFKLpSaMTmnp",
  "key27": "4Q9BKAJvnFp4oc9e7LG1pGDSjBLPri3zxWrC3hFHAEDJWLNc7ygUXsPPnEvPde2GyER2ni1gVmg9KSLMgnDmxJHh",
  "key28": "2MDUNqA9iQ6qe2PBFHMQFat6pbNuURwgWrEdLt3QJfKzBFcZ5bmgGTUHkjPEoHWCYKfKhsivmVNrwpAYdtou34Ck",
  "key29": "3WMqHUtqsDVtg3nqvzr3c22A9xysc9NDfdjuF8be9Ag9PWYTXkQfNTbHcEmSCQFNv2iJ3vPKFCqNZxtXs8YsUPq1",
  "key30": "33ujBkxSTZhYUF6sicKXgwboiKy1GNSBjbwuVwTacvg3r3RYUzegEzh6z8oYTe3i3wha1PcMmTqvnF5q94yCK2y6",
  "key31": "4WMCKrJQfu85PRAPpkpLH2c6YJVgEeV3Y5GJ2GxfimiHTD7c5WuUd5ngx8h3ZJ7peG5Y6qS9hL2W8kng9mQm299r",
  "key32": "2pxYtMxHCkzRfnyDcaGpatgbUDNDfCqG8cpc43VT3YDY9YL6RSo2ZH8ondgsqe9yb5PPiC7CRwwVhzRaVrfqxXTo",
  "key33": "444daGRtLZj3CvsHrFyRmeXYpoWiLKweFvQKe2gSYDt3LLihUviMWAmT4C4oVBRAFr8oVapqaWRBmUgaF5jdZRer",
  "key34": "4aLbqyPEP3wNA2XKwz3yuTrst2G6f1SQRaaUsLGQHcYviq6JqRrTAfNxHTzpzbceHhEGQthE55UWB2oe2WXHWhLS"
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
