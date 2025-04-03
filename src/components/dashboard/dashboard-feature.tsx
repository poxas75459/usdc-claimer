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
    "3K2FRTsy6t3jymcAU8ryhQv2E11QYUudPqAf4gyT4zgebY533x7q4MZ7zrTBUNmq1Zowvar8KxNDZ1pdbzaqJF3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oUV5ot1sQJkwXSLX2u582BeyvFec9uRFr2Wb35KahRimUAR5Jnyob9VN6rWTaqyGQiv8GbvJK9BxwDWEi73opk5",
  "key1": "4xcBuAWTNKXqSxgyicEmjVy26yWcpoVRXst43sgL5eSevCtfDvpSJW7AtrPkTfHXMquHnsVt2e5um965QarPRiFQ",
  "key2": "Rr3bJLFAb1p5mPU77SgJGCoAvSFoSStpo5HvdnRvKExqtsPseZY7YQLbQiqm9tF6jgP2gE9uKUFq6nPphU79vfU",
  "key3": "2EWsMHXAMqvNpk7enPXSbTGMWG2BRD4xfbCAHbxv9AddaYX3jLTyGwphaBNje3k7WrzpoBpBMHKAui8HFiVjqEuf",
  "key4": "3nh9aHdchiE7qj624Z3eWCMvTvs4Kw73NYVTPFV4zVE7UzRUq3QZvHLo2TzyxZ93vL2YfJZrr4gPCX9A7v9YDAD5",
  "key5": "u6V9SCvXVQf1CkdSb4m3cjmDwpZg89GX7WS3Jy9o1Fpevz1pSUJgjYFEEN1jsxZ6WaRaZ3tchqWmGmgLbqZwwtE",
  "key6": "5ZGZ4aQs2dcT6PbgCdubYkSmCqzvQk3sWhQxanKSwZhMnuB6z32pNYR4BvXQK1JC7f8gB7WQcEQJpwFJZB4WqHZu",
  "key7": "LwjMBmm2XiVzxTRKA7P57RFVgEWiZRn9XaCFaW8512Ls73vJsFU2qFtinoMZsvspvVG32ouJ5St88L7ZTJxFddS",
  "key8": "4yFRRikkTkQye4rczPMFFwPs3r9ECUSZZ9LJirXxJtzqr536fznPpHr39w6ESZKjEpEWT9FB6rQiikm6eBCnoQmB",
  "key9": "4bZzqWxkVGLLRdEZuff5E6sz53VccudhWtRTebRri4Ho2QtuSkGkZHM2xTv8oRk8CbaYFGLhz2CQrLXMt6dTSszY",
  "key10": "4C1y85bKYtuKMGjerYC56RcKAanNJjyoADnv9pFC6sEfHGFCeXwyD2XDjwcWHGouwRWns2rrEqtX58drEzjxBnv8",
  "key11": "4WrWYfJqDrHTtVXtqEAS69GKSZbnRgohC7bMUgdjNaPdKkpqrFLzKS5jgwA9hEf73p4XaWWNbarNjwjyeC68SnhG",
  "key12": "4X4sKVtw2SKs59uvEgbCnMzRXWeZDQFSQUVqgvEBgraxrrsoem1Cwgc1uXwn5iREd3vyybXZzomeXaRSoTpPJJEB",
  "key13": "2xJ6Wwp1dWoDm3gWDV6qCZr2hH6Cup8FxSCHMGKt2DAtrxwskdV2pqUcEKooY9vtbnPgbQS9tK2gN53wEyez99BQ",
  "key14": "5mCHgnSBHqPcvmpNa8zEBW6Lvb3rWSJoxsDYLLRK721ev9cgWKr4fpeFdzPzfutC2cJDvJyGZaQjHLenq1NouJoi",
  "key15": "49Ec21nwDoFdagPsEnbpPbzhTUQYCsr528Lv18UN5DfJ17q2NwNNqeH33DJuPbXM8FC243vggF4VxZnjftjyhhTZ",
  "key16": "3mBurCJUFcNFeDeYXFFinqvJznLYNeM7qRFFdt7DjCKMfgdAXhTQJqQde4qTew4BuPMTdemHNtQWRA1sxbamXjSX",
  "key17": "5aa3UpCFdT9EKvky2frGXbFHaEocYFgt43w8HEG21JNsn7SoJUgAT3zkQxia5jLryLUey4UDeEsTHZ81icvC2B6V",
  "key18": "4C9gXL7aha4FTBvfsULFvRQoBdinba8sh2mYsfYGt2hijMgy7vSi5n4oL31cJoN9k8auB6QV6tfVCqd3z9dxdvhF",
  "key19": "3uMNqiykTbbnPZBS75t4N6pgQEgsQgTzRYVm8iTZNbU8TgnEPcoaqM11LxNkEkhNauJiuYV61pkxs6CF3CoCanX7",
  "key20": "gHKwagi6GYgNtVUpxxwMgrC1db5agpRpnxfT3UcUxCetTe5XJF5FBVPo2v1ftsZ4km2AxZmQiCQ4E3pQfMQWQVL",
  "key21": "99h2aiJbbYBXRUr4ii1MUEZMN3r8w14pxjvTnWUhoL5Cg4qiYkkeMkwgqPi1AjHJmJ57nr8smxuQviyMLPxqViu",
  "key22": "2Z8D9JAXwVVvhnjKY1CP9cyfEVKo4m6wn5isSH8XLiVEMSZQYqqidHFSgnNCnf8nBhaUPik3pZigMiZzEbZXSre7",
  "key23": "2Lgr3kTPzHd6un342N23i2c2meuDBomzwv2EANDHrKfC3wccjP5Kg45TSvenXDp8C28JiMEiKAgqEKN6WVtX8iai",
  "key24": "45jxobrQ52WLV2oEDXJk3cDFGLozjQAvMbPhXtPfh7YQHz8ZeqYxLVXbuZ5Lq2HMTwb2mb3WMtj229CoZBX9pKVL",
  "key25": "25SKjYmW58wYPsUa9LvUAYYBnWAuk4qa9nh6J92imtyuC3N12NgqfhibVM6yNHeFciiqyvszjG9xMKfRdXEMPymA",
  "key26": "58JNTcz5u4kKTMNnF8Y3wdJya3AQ9shPUdYmuixMB88hwNvK5G1V9MQGz9xdgcVJDb7R8nfjbeCV2CxTDShZWMWi",
  "key27": "5t22UHMpEc9XxYNGzYGhn8MumUHiPGzz3hCNE8KtoXf1GnR8Y6D2XdThxiq6dyNnCg7gfnBUBbhbQkxwdBH6SsWz",
  "key28": "33tfbmxR7CtsSmkywTvszhEDNCMLL9CZTS1UG1SxbNTb7LP1WCdNhA2Estx4cDaWND6kHrukcTnVhTmyPhcP63TH",
  "key29": "4fw6r7kXK6LPkzGjrTouB3tAu8U6ceVppwDFqARpPGpYLiHeW43T3dRWWwtwKq8K81VLD2zCGRTkKQ1vCAf92wZm"
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
