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
    "2hhWaouf7E1Kc5zxzhHnkJcg869ud3prdYQifgQDM53WyAvgS7rWSBj8x9YjKk9XyZgCnUFGrzG11gmDsaxsFm4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yzGBxhyKhyEzDggUfWsgiedNBCyZsPpdV39UYp2iudjatcv662RVTWsMeBQxHFKz84TFG5UraRi3dT3EBcEs9oY",
  "key1": "5fn2sEej2QxU1ysvutSAx85U8g1SXX5MdrbMfGW4BX2DrKhHqDUoHLB91zCH4TN9z9sDQUZ2eEEDma1z8pPrgofe",
  "key2": "2J6pgB9zuD426J63zNKzugomYao3azBhszs5E5CU77Dmxa1NKVMQ4PWnDPDXdKRGtrrSPt41tohtiHdmkt16QoFV",
  "key3": "SmRZjbikUT4SDiV8Zys9csGVBu7Kkuib5s5dg4FLn8JCy4dRqp4WJXAXf6DCWxhfTfC96zqqBQnvfNPfnxAJxQK",
  "key4": "2uM965dQiK3W4vz9oy2KTgsou4WHQ4sVh9qumq9m9kzdfzoMWbae3WUo2rG8mgeWacfqkTfpDAsP5qg4GJgnEN8V",
  "key5": "3u2VhJXzXYWifNE91AKSPBLnBxhKFFbgBVYxFh66Ds87V6oqghfK1GrtVK4G6qbQLkf4PL5RBbTa6BhwD8ooQ9d",
  "key6": "9WgzDqGuvWnHhiS9QUdkUA71FyPEQpGwwds3MdF52xPBp3jqMcqCpB7fRGwyX42Y2NcrwJLzFzCkycjkD4sTMio",
  "key7": "5yoQFy9FC8HK2jiEhJ4FdwwqcuKNgpW8UvtpEvgnAExkyZt4xRr8NEe9TpiLyQzhg9rqMmKXirjEapAx41d9DYC5",
  "key8": "5FGHJm6FSkPmsjmWcgRULdjXy8SJDNpLyvAzG629tEboCLR5SZz6kQnn1tMvfjtwhapEvwEfi3ogSMJJD79rU9Fp",
  "key9": "kYxbUrXEJAHScNBKdpR6yatLzSfRFXeoqnyvTVKKmyMNqT5gr191YfsPwZsMtC4Fk2ukN7BTFfVdCBLLhHPQ24L",
  "key10": "53wFQsWDvahZVueC4fotXGEQvQkU4yMV6Re2xgmcxVyWZpzhbBrGU4BV1NtHGRWuqLNJKHbDs1jqixvUhUCbsnhk",
  "key11": "3WpCkuHhrvZmuhpSmUeKcCQ3xbpZTyLx4XRZubzbWDauc9aPZtAQcQdckBqAr5RaMpBiJdX7QXSeifrrVfGCH3UY",
  "key12": "2QBtufpUgVv8DjwRkzMRUx2V2RTnmmFEF3c9fv5KwZR4qoK6wYzYsaWVPWxXwFfyX1Ai4WjbF7MmDh6Sn2MVwH5k",
  "key13": "2Zh6YNpYkkvViSFQiqabaQbjz1HEs3jcD5dqnETzxrrQJrfNfS7TMSszdG6rbMhQeduXbpMzkPXepcUJvW8sxVhF",
  "key14": "45owvqohxzhfrf5iMWgi39qPDVzxEa86Liag2ofi1wu4uWSdyBkzeS7jzi4zLZPJ4ziXhhYbgpadAS8dhySc88VF",
  "key15": "3xhv1xZ6up82WFi2PrrZFvjr3azZQGN9sJJ1mrREugu71ydvy5t28KT2hcVBWHMHq8MY1nbQcnvMaAPJmbbcinLE",
  "key16": "5Ki3CGa9u5uMLwsfC2WW8XkHmizrzoLCW2kuuGgNTPFFcs4Ce9gHiQEa3He7rfQq9xQ8iKKNd1RT5bSVj4F1gDvS",
  "key17": "bhcktAgVNDLje99FQ3e8V4cveA9vAWwbbWVUbUtPpbrYamWSzJH3fbVgomCL2sirLYjNmzRvjuqun4WMJETGRFW",
  "key18": "33nkeCc2JK2Eq5WTrvCxSvN4n4J5DernrXr3RbvwQgkhqnvf4qtp66mps49t91a1yCpU61eVknFboLEUCmfr2u1v",
  "key19": "2zofv4hprF8M2UXynifQCUL37WrBSWFwvGe15hJNqMA2iW8iPtcHoW7t85mEu4uYgvk3we7igjJeRvqxZXyuu6bT",
  "key20": "3UEXaCm4skj9Sjbg7cTCZ99WcxuaQARquhLEhoBke9ZqhC5NJKSguXvphbUzcSFukLzQZ44rmPb8xdtuPXuMpQf6",
  "key21": "3UfL8jxH2Z7umMj3TuP2YEbPGoTWXhBduLUHFvET13YTonnj5tCoSrDEzXz5yTgdn1tC5p9L4yas4XZRZXF9KEtu",
  "key22": "587bMZZKjwxzdUTQo5oJPkQaFDvgPmcvSgnvTSn7k3y9Tn3bZpKo7U963DCe3NghkcjdiG4oKhuXdwpdp6MzErR6",
  "key23": "5wwxhve5VpdvLBD9AQDiWaTt2mhQgWNy9CLAktGjrsEgMQgiX2XWHPLKpK7igVddPw3xgUoyokg5AQCstBno3swE",
  "key24": "4Jewntn35zSx6Wopp1LnpAYjYTRvHKxY4iLN3SDQotbSQKJdAeAM8d7Ak6ZhKZea5fV9wFrEQ25RH6zUDzpMSBog",
  "key25": "3fDwCakPc4rCgk9tQda5aHZ71iyy1rbvTCe4hq761ZCH7GsKtvqjF2QcSGzHXxKB1Uj9nmXj7kkxFXjK6ZakRw81",
  "key26": "5mxgRYfnvcRqBsBds7YeSmCAAmcmDSHkYqGjua8bTHjZ9vjMNgp86BdsM5vLcQsuLXLNTb5SmA3G89VR1DB5cP3u"
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
