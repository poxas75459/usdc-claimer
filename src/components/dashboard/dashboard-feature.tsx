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
    "4w2gR3GiZSHdjnTiDMXVxupwqoVZs5ovJUs7f41PaEbizd8AX3cjGXqaZn9PHmJZRyWFo2F5Waphp9zjLK46gu9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54Zo49KBwu639qWM7WqonEjssQt8CP7mgzbfdb6kXt38c8FAy22zEVgCW8QRi3RrTyTKFzUcDvLcNWq78CCapoXH",
  "key1": "4NLCLQbQtnr3kG94wsbZ1cFjYGB41UcKWqwftShFn8H52gZBNnj8Lao3MFrnL8Qex2Q1hUp4jvWpy5icv2Aw9kCz",
  "key2": "4LhmgueJenvWAwsy8cRpdBhV3R6dTy8ZfycXyBAdtfR1sE9Le1k5w9GGje7r16ngrdUroAnU6kfmiKHj9sgH5wgf",
  "key3": "4FSG3Pf2wzZNbUYEEHpMA12vQR8eKmHumZu7LqKhEYfQp3GRWgL9LXHJfHuqcsoApmrrRDEg7wfGGAGmTNmwxq6g",
  "key4": "47Q942qyxUasmsy78sm5RenFvXgsEDbwSABpMt2YJSfrtGLLFGSAp3D7xh8CKQ51zGvE5NneBGpVUf4YyXnd5zbG",
  "key5": "2LWMpfwxgyJHRDYkB9GdqPFyQJBjREMnxhvQZCdoMtBiQHA1ndwy29Z3QxSZGfsuGjinYSB5W2ssnd55TiHn2swx",
  "key6": "Jm2WYqGrtRV5t6MgprU6v3Gb6WhHbQhR5ntmyATWqJiqsRVuYiAYdHeTDBPMgEYmqoTGJZ19JdcB8nU9YXULhzJ",
  "key7": "5CJ3yc7jhJwCHEmxXQQU239aEwBpso4yBRq492J62itayrDDoNHbGPtnKgjmT7Wh1Bf4kRCXrUJkS4W8cix7DH3u",
  "key8": "5PF28kbM23AGvpSBV9sz182jtutuknFxRCsr8DdhiU7cbw84hVwG9x9vXpzd7CgfXqWMkSLqXHR2EcwDGt4njBq1",
  "key9": "2Tx8xcAT3BdXYJ1TnrA3Xcd2j1ZAzr6P8nqLBhaKF1EwgTWgzpMZCJNNVHooELSw74t9c48d4bjoATEiX57KSdYs",
  "key10": "3rixyWLAVv4qvnGszgXoasKrthRnffM5GHQrFHKM21ycYVPwq2p6siKRgRZL7QsVzZh8mE6w3PGL1Kxn38b3PQbF",
  "key11": "3gdf5YKdyFqoj4SaDVqRD8Z3jEbbwmrX43BFvF84bCMe9ZLWivhXxiipjvH9HzrzQ8wyVi4tDjAWdprL6W5Yeoge",
  "key12": "eCDTZbEn2Ss4goDdBDQowYBYGLKnMobXZ3Snh9qXTosXZVHdrn5BTDxSPVxTnmWnBD4xy8ccuumgHeskf2N1W1H",
  "key13": "31Tb8RSd2akZ7PUXXfWQUWf2jwL4C8BzCBLkjz3BP3y29hsCqaRz1oqdouPA2aDK925ianBSQRCHBwu1XhVVFwKW",
  "key14": "H9yAAjJFXK5WgR3h8nLu3pA53uTeFDgotiMV5Lx2HnYxbNye38SSyGanThtNM6spnMM7aMTdhPauw9xPgdMgYsc",
  "key15": "5JRB21WKN6RPo5ZxBJ8ZYwBviqDhqkBK59rsaF47vSBC6TNwnqfNrJwXkGWMdmh4xTqSFXDRL8EwgimnTNZ7FEXK",
  "key16": "r5UWmHHGiNByN5ePmibTExn26rkMomgP4bAyiEkFbokfhPtYLJ77uDbxnw6bhssGHsUeyPWf3WV5n6BT9xRytas",
  "key17": "5Wuy4JUGXeBb5sFJUHw6Rc2qtiphPVK16iXzP2jizvAyUsaQTcZi6Yuw6yZ2kHKt3mHnwS4398WmizBQoTxNobEe",
  "key18": "geduzjN4T49m1xdArLzhXHjP35ubWFarts1tZi9UXCckfUW8YEJ8GAJ3HKpUg9cUzeoLhr82TemKY5XiK65EuNH",
  "key19": "4Si2b31pEXthFu6eT6Mw3WsEx2Vt7McsgSYGJ2nft1Eh4nQ2kWMgXRTKZLcNt81YaKxLgjg4qbB4qVnTUNnuvecQ",
  "key20": "2pobVs2hj4ibvRLdMJFnqZj8QSrPkzz1zDH4MNzh3qvKr1KAcfnNcjEPY6na24Y2nZvMkWfFa73WbXwnnTCY9Sbt",
  "key21": "61fN76LYkVgNwovZytGvhZGvojx1vcSdevxEJEMvmDhJdhjUXpytNQeKEmDD3wx6zqSKQfX6AipVtwSB5rQRiVxE",
  "key22": "4SZYAqj66jM5Hz6fWQkLFAiR5GVFdDSy9XYWLXpqFtX1VH1oApAxZVoypjSRJdjrdjWWY7z5CsUEfNcf7zJxNmoF",
  "key23": "4bq5zMdVzrAcrcn8ugdxsdDuUpFJVDR1o8tRYx3zGpJwdURPyHU8JbMFYpGk9PY1A7MUP8JZDSggsJnWLxdCNRoX",
  "key24": "4MGSwGzf81vBLccGDFhSbp87YJaWvfUugLL564WGEG2LLpYFtmRzjZXEefS3PfwhhWmM3ZutteYpSNp4A2NQdL9H"
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
