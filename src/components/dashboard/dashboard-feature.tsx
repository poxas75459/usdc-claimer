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
    "5i3uabM29KgJ5ZYSjsyuWEJ1ZMdWSaGRjBoMNiSHja7rVFJNXMFkaSt9VAasdk5jTrqQbg4uHk39DdraygEQVbnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EVLD7wi8RCpHmAu3WzZXp6WDZmpQXDoJVPL95yMMykFqgCX5XeHgiEQbDnqFwmJtQ9qCpAcKtyAYeWwgdTyiWeZ",
  "key1": "4QuLHT3wiD2tDwWU3RAT638jVBfRzevMSxw7SR68x7L2mtyh2aWNG1BoHGXfnASqvKFSYfUhHAdFyG9rq6p8GEvM",
  "key2": "5xSdh1GC798Gi5psDypy8QGngk4bPvd6J19UGAXfFcXySzmcw3Lq7w9XF144DT3fXzRfFbFxJQKo1rM9iy53AZje",
  "key3": "uZFheGtvCyApki94SMZh7wA3ynqTksGqAqvAeNcnioGTnKNCUPMbTJTNGQ7JpcdNDGYribqbn4DpG998PAokFrD",
  "key4": "Yh5vdS343bkHgKnwhBSr7upZAECdTHq3tM3qMkvdz1FgmmDyGzDkhyJ6dSQgMEomgDnjBRJxthRZJw9Zc2cPNAM",
  "key5": "8tTXvUEV2ccWANT6wgQg3h99TyNkveKjMmFecEUtPUNxSEsrdrhJdzi4bumq1SLboEwQPQQXPQdhPhWkVxKtsPF",
  "key6": "3ebuB8VTH6iWY365mCk3FFZX7tZ2bfvkHSgsYFk62id1JwCmJngggiUyZsxdNCC55CyVV4LSxPBz6DJ35657ZJSa",
  "key7": "8GUgtL31kA4oW5iSrsZ2aCDoU4iVn8HZoJH5nRDKX5XngWmtHLB9gcwiqSXTuCZnUE8e3xNKxtdk3DS5aZ9TRW3",
  "key8": "63gD2zBcaHEwFnu24sbyha5v3rCMTg9VR4v3NiZKRuyW1c9DrvXtfzzxxJEWGiy6t1Qd9LwuKP1PL32qxjjcyGij",
  "key9": "3M58FD9zLqro9UV8DBFK11pSziA5P9cR1MJLi7JJF4a6DVtLKQcYuc8dxCdtr4jCQ9eGeus55NBVR7p1ww5maAy2",
  "key10": "5bmEQEVu1nFqMWYRFndxWcrbYJLcDxoctNwLbnY9KR52RFSKfM6uQ4baaKacoBG6bhkgWHJnpmRo6ay8gQwTJ6Vu",
  "key11": "5pBFun5xUn3ebA8hGnVWokQJmZoSD8dqaHoG6DM91GcDg6HnV1hyHJvXN8gtvzFgXbWdhVCUxbMNm7r1QFgamdtT",
  "key12": "36qe6GL1WzvevWqv2D7eXexd864cKj48rdDmVwm7NqKpTUcGNhbBMGz7wLiixcyjBa1gtAhR5UWzkXKePu8Rbdth",
  "key13": "3gmApUN85KZKHcUoZUgcM2BCnzeSjvNuAJc93rb8BbKWNsDAEqxcnA3FJMufjmUwzNe5HbjWDqU3BWVjzUn3Yowk",
  "key14": "3MwLAHRsgcf3qFuYzUwczmfvjquQJZtwP2aAVSTULWWyhDQTVF8ZaVAAJBUnuDeFgjP47Xh63dJnKipz8HqSsYAg",
  "key15": "238a9AdLZ6quETydaDi4HUj9RVqbbVULHhxT7BfpkMCEkLdDFguJNCi2pYEUvamsUEHS4Vj8mAP1NioDrPNm8idh",
  "key16": "4x3h8DZofjXfaPRuztkvwJSHZCAv9rirek4dLMMD5iHebrSKFDTqfCm8bSwatwjPa95JsVJJUg7kbLmC8SzfnwtN",
  "key17": "3z9qFVcyF8JRnaVVSFUERGtDrLZ2UPzrNdNGt6cwYPWa2BUAjJcWALKDQ8RLqBDwetiB2KpCPvQ5jfwvgsRhmBjk",
  "key18": "5qhefta5UUY628oMoMhsyitaDbKnoU4mJjeN95BD1EWPZvydzCbLi5vw1Sbd2yj37VwnB4PYRYnncstfemCxY7Lv",
  "key19": "4kUg46HHo8JXsd9NHBERbWw4jKNrNeDRtiZP6SXueiNDQYBcZbTu6Amr4PEd7gWD62mrVJ25HtbB5NNPvppPR22i",
  "key20": "4e5tYiyPSreG6tmmfwD3FacVm4cBJ8N72Mva64EnD7z6KVvcuD6vR2FJnEmSBLwJUoDNGJyTeVNKb7Z9DZdWbChc",
  "key21": "23TSMyQBb63ezQKz1mzVQnKaCJtTSuSS3y4z4bun1FcD3pX9d36UjGYutRawvr3x9WbskTypt4GvZtkot1L3Ca3L",
  "key22": "4qKcaqo7HeaQgQRyRM4mZjZjcopiQcFaSM5mcXeZ7ZH4zKiB6ZE8eoL6zXEbUj2vishiaAZf35p9qkricbLurXWd",
  "key23": "5xLnocNRxSbzfZ5E1FvsjMojUsAApY4Zq9an6ty7eJD9WAqsnm9tWQivN3rNQmvBAikLvrvfJA7SrYZ41bDUN6wR",
  "key24": "3yLFaaaVTQbHmATdTA84gyCRChxAVZ52mEgniNdaPDH1XvznBMsi5Tr2t94WfnnQdSbYNQuj2mqHs4nZUUWWWTbr",
  "key25": "53CWUHWNicUqGSgZwABKGCnziR26Rqu3YNdJbq1JFpjrYi5mxnvtoSorBrWYacPwuBvQ1xQd4iCwA958QoR3zkVM"
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
