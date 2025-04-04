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
    "4qEQjeZwuyqwz29gpfcjBnnBB1KnQo54BrUmvCZ2TFHjQ9hdP8xZkvPa2JcZ9CxXXpbi3Df2oy3geRhikK43jrwc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QTCWR19csaQx8N5NaQBzr81t6ANoq1bw8koE928HUuN3ntFodYfYKLkDjiiTDAfUqk4PWDMqLZYGHfj5ZxDCbHZ",
  "key1": "2fEUYWAwx9FN4j8MBBaAeuL572bdCmtvcCBHxUhH9GstaSG8u98XuRUrDn7EKQbCTeR79saGhH5L2p96etAG3bTk",
  "key2": "4cxoqSYDonxYhU5czhkvskXD8Fid2A6HwgmeK9zfTYCrQ4kq3aMf462xg52Ha99w1RaPRYRKakmQe8eLdDLA69Gp",
  "key3": "2hkuBXLwv97U356mzAtSQb9FceH7ziCkRJgkJsdFNykKqNLtCiDEjmmoG3VADbxwHB5q4uPUsg8znkcnyMhk3exP",
  "key4": "GddeNcULzshZuVHcgFzzDQmpci13eDYx57Bz2Yaik6MW4viEuXQcenVg1AWqRicTcRS2fN7NZPHXx27t2VfPwMf",
  "key5": "3P4xaZHNGbR7MazX5FBVYngN9ExGHi6NKh6q8utgmGwpAGyeGtzC5HNitRRVobHXCitnymv4quSq1WPZgyiojvSq",
  "key6": "3sSJYnXj6KBt5V5AR7GuLsBWKW7PuRwm2VmPcpy8qFhUmo6XEfxQKuRPMgJ95t46pYUYSgSiCJ1Ngs1i7yQN19AY",
  "key7": "3UU5ymxAjUpSmakR9uvybLpD5V8EsgPkZAy8A62bPd61k2DUtFaaB6dj7xJqR43XhVBYnoyzTygzz43MM4DZtLkB",
  "key8": "5sGN2PfeN5FUTQoRgVgnV8ZHx2ARctAyKeZfVHnj9qXSorwfeFp9dUFncQoXySbxZbDSHLSDk7hbES8BWrx48dRh",
  "key9": "5FSM3g6NNq3E7Z7ZNjm1L7VgYuRBqwALxDPaQWfkNneyY25JgiVxUXuvLZ3TiQHW4twbYcBf1B1PjJvDQwbtuhwK",
  "key10": "5v6e4whHrAZ3EWfTk2UrbwvKDjDZkMPpAedXyrcL2LKuWdAzwBTiatn5eienRKGsDdCLfUbPnFqnXY7LE3gBYJ1e",
  "key11": "52gvpTFiQRvDDZWG7DHg3VvDdrzy6BVm7DDQVaTsXM1vPPeZMgDpvC92Rbtb3YCNgar4rniF28kxVShR9yPs1Upo",
  "key12": "24ceahz72BMtq8CacsfiYifdTYwD61DPiTJ3xeLAi5NC64FUCh7vfgJDFcpLCNGXpNk6Y7grAkHHTgZ4tkK11uND",
  "key13": "61FuntM8iWN9urMBLQRe396DuUdADpYnSTBXnmZPVfxY1dMtxs8FZmueS2TiF7h22geCuye9tMvq4k7yWdcvLsDR",
  "key14": "2eUg4RdrhkYDpfjsTME958fr4YR1QTeEoUmfaNk59F7xeUMqwVPddJULZ4cgob8C1DAqMeHP1D16KF3oJFQ4aCVo",
  "key15": "29LRiCEq4ZPtyvx8no1HJ33CauQYE3SUskT3CXoxYMFh7Q3b2rdvKkJJHz8KiRLv8AbxXbkAdNadF6Rm9Qbu4r29",
  "key16": "36fcaMFNgUxWu6kJYWowrAQakdsoJARLeuieVH7SYT8gfWxfQn5EeTvmCTzNnZ7AmsS7xAiZ9sRyNKtT2AL1diF1",
  "key17": "59gs89g7cFPH1xwy4mSXEmjKDaVtTBTsnYXQmJDBwujLoN1RxsQsGzbKBVHDwuR5zKnUyyTPgRhNpTj9pk8Zkdny",
  "key18": "29hb9wgamqSFdCEeZeofC9b95bW8pBAAwPqNdkqqJRyxDXG3ApQYVzpNW7L9m9cBjMGyo3dYUH7uuYqRHzHs3mk4",
  "key19": "Wz8LzdUDfVvKnqfWsu64uLqmt3Lxdc5svXA9Eipkv3XmPM3v7xyy1QsQNACVTzAwMRFGk6sgpxdadUc6d4DEHhE",
  "key20": "4Xp4HTAse4Lm4vphPYNqrmKPQzMzHU92y3hPgpxq9vBf9ngsM4D1RdVj4m4rkZtQFHkrcLi7XhPDcx7TyFLXwXpR",
  "key21": "YbQVKeqwkYzEZpQhfP2HKXXxJLki8b4pYG6BHANeb44yqJGMgycbNyXZUEVDckbybj2sT9SucrhA3h54uf1MpN6",
  "key22": "4fx88y15kVCnJKcAGdy5AtJhA6YchMNPeybgmKBtke6jLaycfyWgr3h7Kb77HcHszGzzGbL2UrL31cTZVaCmwqxN",
  "key23": "2WP1BXkd58kpbkYXL9VLo2QURvMy9f2aoGh7NFzmGcANYi2hFjJohjfEQYPdhu76WyMvWkFfwFrt9vsUNSm1hR25",
  "key24": "2NcERuWUHJsNfAzYFWjidrD3KKnYE7P4sMoPtHNsK7ocdzGSHrJ6K9Gxf2LXaTxjyyW5YyBUVSpp2BCgi41WrSNF",
  "key25": "svSVN2mn9RMsoDCTyoEfAs8cUmAJk2SuKVUFwhikGWBToMmsrPxVxF9cjYf3Cruh2oaBwB2QhbjuyckezXgAywu",
  "key26": "3gKZVoSW4a86jwVwmLJpQjLcaQRxFESmmoytCWgWrYAKwkBjEuEgnuymmb8oncREKLQtVqtJgV3wtwJ3VivKAJY7",
  "key27": "2BVKym4VtiFJ9poq6ez1egY81UjVuk139JeHeP2jaD2Z3NMs1JKPQ3jrMuYmu919hirENTHF9xSrMzfQNt8kfa2B",
  "key28": "5fbkgwMHdPpAHY2RUQ5z2ygiY7jW4KjbyAMQ56gxkySCEuZiN3jVxnfwkrmsUgdkorMgQjHTzypbCJgHQUbjNZcd",
  "key29": "2TgKS3e1ngJYEUkL1Sia1MS1tzhfczrPzn2w9wiJVqt6jWM6oCHSzmtncoYMGYsb82AdhhNdkat2Q98GtBefE5rK",
  "key30": "54e9JUkqQLWu96Wkcx9WkVr4hvBK5XkN71iYhxJUgmF6uezSGWwuemnMVucTjYixqD8Zd1wEJ4o2TvWcqAz2q43M"
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
