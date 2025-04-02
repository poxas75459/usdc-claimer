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
    "37fYKHxEvsWJr3AiASC8CwWEVT6tXRiiNhf696yYUpNZ1SNZvvu8BGZ5FdN64jjbtQyocy3MU3w6H4PZCwdeW2pC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zzntDGwRCZwj3mdP5xncR9bfs6oXrPshBRmTCecZBgMzWd6qv4Vkt86N3K1ntJZuiQYTfcFMNMvRgRNdF67Vtuh",
  "key1": "3CfWr9gUrFo4fV4a3tkqyGkFX2ovoyWgn5A7vB61TDojGmnakBy6gjHRuVqie4Dpw9jjgr94TR5ic3YDTJsfKmwQ",
  "key2": "2S5kRkiKhwYZ3je1H2TFnApr7YgfFRMUT3pDFxYmCGKWxvgVF3FLqSJihA6mPeohEfZ2hb6rX8hLJT3gCHa1Wtit",
  "key3": "5J1BHm65AszhZRooKTPUYW7SWe92MApyNaAkBrVL6he8DBKvTyu8YZSKB8QFfsePgUsxBd5Tx3Xv96ts5bgErHsL",
  "key4": "2TVCmiPYKSPovMgB2uAifdcjwdtgx3AyVmgEBXkzLDCkNYGGrpRVrK4gkdiSN54enBbVvsRstsZAMozzJFdDL6YL",
  "key5": "mTRL6EyUS6z9veexJxpwE9SDEq7iEv2yLxXYtKd8sTkxm9kF3tj9LDfVZcow4gMFKSpskJkuqeQXuBzHFx4Rkwq",
  "key6": "4SA9q9yWMHcUdRRNuG8bL2vFZCvFgD9Mt1EAsmZb7xrh2gwHYS6T2CJo8aknuJTq59NsqC6KiuuDUmw4f3uj8S2",
  "key7": "4qsmAiccACiwJw7Vh2mZQAmtby57DiE7FJ8Pk2XAARhJbAeCi6LrJquMTXYJbtpAu1e5CrAv3WvVbjVSXPNesw4Q",
  "key8": "AM6JeMHxQkDa5RbFDtdfoTbxBEPDpsRxUJ3xftw2jZzpArTpLGVBnv6cCzVDLvX8UQJYXSH11QMhvZu6KrzNpTX",
  "key9": "3KTt9YbrVVTxYgpdSLrDsS1DbV9TQg6R5Z6eT4xKrVFcm3AaCp8L6tEo52Ubdt2M6TgjmUsd5XpTy7zBcr6Dkh82",
  "key10": "ZTnqj3t5R4HorSfuooqboqNFccizairJmF5PRy6jU7khA85ZuftbEn4FctDh3VQ4PGHsipV9W9RtKHLffjNVtBY",
  "key11": "2PXQGL3wmf3JEv3vLbTx5AdSo5cKWD7QqXU97y7sAnaSGq398K23WpxY9ev8gXYmWBkhHxC93aTPX5R5eraLWYGh",
  "key12": "3ParnHtDt2kkZtw49BJHDgrRWC7aNmS2x1GtxvrijhzQGzaJv1CuybZCwF4PBHw5EZPsYEpTcAxiQEYhgFadfLX1",
  "key13": "37iHRHFktyZ7R5f2cL6Zn2s8CSpKze5v6sSA9SATuDVX6EP16By42rVt2NRrX59eXckS8begEMeNrhZdyYMsDtKo",
  "key14": "pwQyDAKD3sC86PNd8ESyyZkYWcpkUreKSVkeabaZ44E4fUVUomN9fE9HH1jXPV23MaHBfhx25JqkyuxZ1HX9tSw",
  "key15": "2Lf41WpZ1c7YxDZYNfKTxdiq6Sr3t1x8g27MavKRRfeZG18s6R4mWCz7Htes2u9ZUPRFj6AseoUrG5ekFxsWL9X9",
  "key16": "5Y4GTndx93gZsNukJRYKYqsYdKvLpevPxae3S77WohPTmELYv9wSehQv6tX1iXdjWuRHgy8b1EJLhQGwP8vTwfcb",
  "key17": "N1mejtjxgdxtYU6aTFGrFBLQUTd5kaZvXUk66KcUgX22XFcj9QwUebXLDjfvgmYunKUVRcYCgeQYtJSBfsEPpdY",
  "key18": "3M1KFZMGuBtSRPVDbfDSC3iEr7ZPr1Qgu8ktpFXiQbPWp2VBKsdhdfVruoexJk2Cu8F5KxXG5CsMYxzKySf91vqV",
  "key19": "5QYAUjxfXtpErajPNkK22bCShxVaCMRn4itw8DsxnFbF2aHoiW88zv4HmVUrU1MYDkmyNuNUZSnnYM6HfQfwsXKW",
  "key20": "4AT4Pi9RLRLW5SYCcLhXKpyRu8wUo5H4cddhMNeDyXBB6jEUPibf3Ge8C2hqX2qwUCMQQwFwxStDeZz8iWLzVpkf",
  "key21": "3eaXAoP1fHxiRAfmwZsafS3wgvMwVMurmAHsFgnKKXmUZa8exyBFGS4JFZ4bHSZfRDFUUygcgeUHqQnS39AWrHTo",
  "key22": "58VNHAntnG5sKTDVgaiTXkJC1C2Qz1gqsGWjR5hdMSfMr9VGjkBxgjusFpPiuDoC3WYw51Bmzk3S4H4m7pcXcpUr",
  "key23": "5gRdXH6pwSRHmfZxsszxPHcrvFFuMMKz72Wm8tFtETtGrbe5hbJesspUPH9bUJH7Qakm595kn9o1AeDXnkSVZUNm",
  "key24": "3Cn44bGps4t7szQj16sSjjTnYxLdDsKDvacSdF66aQRdHVyCG4XRUxZHAXBmrSJJxHSZZuvQUqCa3zTpGC5iM2CT",
  "key25": "4gwXpmcyPo7VVnrwwLMurFcaSgYFMyE1BXcr6yisf9K1XwcW4gFU1zJHqG2jiCe4FbAqPsBcM6qinxZnkcd1YYYG",
  "key26": "23YV1ujngJnJJNKUecbBwXKFyvp6hyXBCSGDtbx5teAWpueARHb23P6wpoDzE6SUAwX2CshsgdjajJwgQLv3zb9M",
  "key27": "5Q3mmuQ6tpbNrY7Scc9fwoJmHNSF6Aythpx8AZByZYq8avA3G7t3mdGBt8Ln6RVWjgohoTfqUxa1bBNmuPgQHnoo"
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
