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
    "3XkQWqycKMSNxBPb9TuxTXgWLmNw8HuLr1uY6uuxE8KicUHMFH9FRbhmcuVNBFDV5r8nHGRYzaTXPLfsPtLJmMgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HcYeVLGdmSxoFUn9uGpfLrCzyfkwEbupsT9zVVeRMPibhURbq7uEuCynpUUbhisFfWsHEj3iKTBYBxWUESTnJG9",
  "key1": "5jXCSgQrea5LayQUbyt67GLGXCtVrFtY9PbCqWDYPq9dX5JqxoCtQwxoBNt7NsSTE7j6DMQMPm7ADVDB6ThKXoVr",
  "key2": "89YiV1C3ugJmtEwbCbPSKVyBwFi7cKMrf8nXPNWTng2KyJWE47Ds5416Wca7XYzbJZs5doxSE13b4pHxSDqhqkF",
  "key3": "4z9LQao3FCXvvqUPb82Kie87hT4NM1FDyqUKMoRcFMAFuFpBpZ171q7H7WpSGiwRda8i584gyvp5ojfPdozjyfG1",
  "key4": "aTiweJjf7kf1PyUNEWU5fwEeGJziHegJsMPxBHgtUVVBxT2eNRT6giJcn3TQRCiFttCxzv5ZFa6RNsZL97rcs2G",
  "key5": "2HjGbKEkmPdRtJHS6C74UZZKErjEsc2SoiTpG4PMFaSTBavMuNAP7vCu9U3J74tRySRt7XwCo6Ko9h6agShHSP2g",
  "key6": "41zUcTkhwzGN3zCjMNzGnDTh3F96D6KPFFdmcec8dermqgt5xe1w3nYbkSritDQbTL2fWXPRGEXdRRzydmiKKoaC",
  "key7": "ufFUYYwZuRFvyBF2GK3zTqq1ky9z9vDy1uJBybx13bz82seVXn5itWMRwDmdHXup8Dc3Djguy5GXUj9wJtSCkrC",
  "key8": "3dZ5tzKrKtYk5FdvhxhGmewsHXsqSGosuMQrBKNzj7pTpJc49wLvVJgJhUePuZNUMNVXWTzwJRnQSASKYGvHZxZM",
  "key9": "4QKb2Vox21SgZB3mVyZU6HwYNR3fUFS65BtY9kWRoksD5p7BrGKxbcn2Zqdgu76QURK7KkN6axEBiRyxmR2Nqsst",
  "key10": "33xGWeEcwEnixsgW1LQYUHx8fBiJD7ejAgaszK5UWrETPzuhteB637gRranbcFr1JQnFd1woMbjErDsHJjDWarKs",
  "key11": "3GJEmVgdJSSUx4qCuZix8MeX4EMS4UuYw9wt2VW96XfiEBJcM5ig5PmfrBs7KfywBH6dXaSETHUdrVUmo8cbY7ms",
  "key12": "4oxyg9zNJjc6aiJR9RgfwjajLRuLjGk6HaiYVB3KHK4jSQ55Y2GX4uRyY77W5qYDPQscLpUmX3XrAEBA5KyK2zBX",
  "key13": "2QkgtcAssnSBZYW7UyfeZCeVuScJEVZF9Y87GGqkjpf2VmzCZ7cYe7CPSx6SaXWqGSWXBtp7cxx7xNNKhZfg421T",
  "key14": "27vZvJKYcH3UUr8VMHewRQWPssx9NeMrkjmAAxr7NwyQYbdJ7FnHkU3WvinUw72p9KnV98kyos73PgWGjF4htGbJ",
  "key15": "24HZ3n6VvqANsN3SHyrR8fWu7UC9a3x7nwRhbFt8Gcs7Hnns46VHiHUxmPr2141enEUvcW5V1kDf9RUU38ekutrY",
  "key16": "3EcnRC5qKY1Nv3q9WuBgW8Ndief5vrMQ7Dk3uQTdmvvjRhyUU3GFEPZxhxSHE9W9XrM7D4RPiztpVy7FEbDBj5kr",
  "key17": "4HSrWpVXPL5iqHmVaPNmcWQ8bf4ZkGTbZBomp1t2Bigq53UvfPqgiJXfL8nJbUNndSSBWXqWea43fY4CSbBduvxu",
  "key18": "2anorve5MbCvFA4wZg3QjX3y8Tgpb9kvrbdP3fcuiMKy8GVqgqyzAmZkTtvy4RWNJx2otJeVvaciefzbLuonh3Ln",
  "key19": "4a5igMWvmFhqczJbUiXAZhYK5hAu2DBJajsEjikkeCdrhUbr254riCGuVLSdVrKNFz8AYP8r4oZEPUk9t2Pj3jsh",
  "key20": "64tggA8DPuSZYb4bXzEq9qVx2Hgv7MNJLTFsnRjZiBJqC6TkTa9mX9cDvzXpUzLBgvjH9YnqsNPqMKGhRdBFzojW",
  "key21": "49BB1B1qrFeBiEFfVqqrvN3ipBgr4sAvMG3HcmKhsUjANmKgXi4dQc7GQJ5gp42TwiPsAXrczhxMBYnY4CAd4HBq",
  "key22": "4KGnpKkZNENxoLxr9bydmQbRtB4gnL4KL5yShjGn64HtcChBeu2ejnVBD33rmG19N9enK217pGFuSpnwaPMgnHv5",
  "key23": "2n32cL3p9NTJz3ynxzxUK2MqLXzRhvVoY8AhS2gz99GeGqDXnifVNfd2DX66sTrR3BvjpSiDJZpDNZFF13GWieiQ",
  "key24": "5B5JTQmqmqArETSvRyr5N9KptfEPSaR9q4hyzWjvomm1LRD5kEEmrSbh3dCki6NsvkdQoGWxyM9FdngebCbLvBCm",
  "key25": "2yq7oRrvcFM3pwtwMsqp2RiZmZZTxWppUFM244eMnvdyBGjY5XNJTQ1yyBj22AAHMJoNx6esSn6EgCjYFYfRChdC",
  "key26": "2ZzvdpCPeWfrhhaFPG2HHXsa4uB26zqhNQKj4CpFHRPbRucN6Gy18veTw44CVhgXgPxscNgTuvHxC88Qpsk16SvY"
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
