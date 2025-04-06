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
    "AmKuEAirsVMYexZTKmCymrk3r1KPJCn5q3rizzGJWPJcnaDYcsNLmnjErFbTkz6RF24XTxAsDWssu9e7RSAaj9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26SY9a22YtKCc7jCkyien3YHLQhGFe9RE69LB9ofHFsiBgxGK7MmtYSJ75xuc2MgDDM7pyH1dHDYQqKs8SM1GdjM",
  "key1": "YdN9ThZrztzHnXdC6y67teCGBPFEtLVfFgKfSwQz7AAKNJKauUTFkzvhevCnWUi6eyJ16c6B1V8bfbCRv82mgre",
  "key2": "CfqwqbnWXCNCUHoQJLtPkkBum2NPGhD9ujEEF2rbG3FuypvxtaRcbp3ynqtuFjsqJFsMnhW5y27P7eL92TcnnkD",
  "key3": "47AWK7TuyxozeV5XvadgJLg99TSx2knbgcsp369PPLPHzuw35jxYkufPzKcQGvRFCnCr25Vpvk4BEeRzMzfnVbR8",
  "key4": "BNtozmEXS321CoL5ojK4Uvr2KTUGrx82WfHaJ9JtP5VVesjK7Dirph9fjnMTzSz5wHssxXmsQNQz4fDQLC8FpED",
  "key5": "5sovvJVqAvAPnDBuoUcCwwyUneGJGzxwuYN9hnavsjrzNWSYLb2T6e35atNkKkMwEVUosWJaMBcsKuMXH8TJ7FND",
  "key6": "2oKAb1tHQQTY7Tyq5ycWtfPFtk9mZvwi3r9LDvr2rAjxPJ6K4gbXxtznTJAQQHsMCjcFH6b4Nkhkzk4gEkK3H9R2",
  "key7": "55apA1BEBYdM6XtTzCAffL2xSAmfAD45KvMqWGa2RQyhik5z8Jte5f8swKrcf6FSiW2eWhjt9R1QMkpcNpLd5y3m",
  "key8": "5fZhN34XHr3ukZNDtZLNSE7ZghvFUiLC8yRPZz5uYK2UWa7rSoa4NvUbmb3WeVG6rZnxDhPiw22sGMbb22CYPrqo",
  "key9": "4WPbjdNjwZ4eSD5cR5mxbKht5i34cf4KM7n2wUKqXtaJYWTU2h569gPKJayiPRXS57abD5psj8T8h63xgfqq4Hcg",
  "key10": "j5YyY21Vno1gfXx21L6iZ2q3fd5EBMywiwSfXxcqZKv6E3oY87JZizkJSoyDu4YbiafUpiGLTTPtCv3hmQQjZjN",
  "key11": "3sMuAX7ZihhkrKFvPvvUb1e1dkP27cNvsx5urYGiHsyrS2kuUQ3se3CK8yGeZA72nkVAPS3t4VgaCfgi9eEU7xcE",
  "key12": "9oyFBXqAN3RApoWgDQ9qWgCT2SMzPqr5SRnYZV7J35K3xFrVADnA2R8HK7BGeErd4cdWpxQvFTktSoYzHRzaGTJ",
  "key13": "3PpRrWrFwUpmvk88Ywcri8tg9o76EGWRgsJhd7sYB5DFN8RrXAZd8jhmRQda5RbA2cavh3AhYNfGwjrVgBBkQqdi",
  "key14": "Fo4CyXPUqvSSNYrPizQru6nbFHr2phveUy5AD4DPbni5aFsz8t6uk37mZufjBSrTtVYFuw136Md9EpZtTT9FiPm",
  "key15": "4T9pLKJQwWM3QLevsxEvu4Lyy9cLKH7cQDj3fNnmrB7au7W7iBSPhaa1oVPEVWkgbEJPYkffYpRwwDwouFG5tQww",
  "key16": "5b1fSMZRSvjwPRodbYu8ieNvsAKsAbXc6fyeHw3L3ikubGe49uZX7YxVFPfGBGyNuRwyBj4PjRNiWeFLNDzgF6C7",
  "key17": "pv5kjTr1fLxPqAgK2Cd97KWN4LBdja9RSykfyVaVnb8sWyUeAqzXKsrKRLSx2d6zVmvB1N4MkMwsnyMoGPy5L9S",
  "key18": "51p7x2jPRXEt933w8KEiVvhCBXuK4t9bhjw8tFhvX9Hd5kH7EYaTh8nwFvjoRZcaatDdz1F7LuLyx2fq33mV8gq2",
  "key19": "a4ryFkNtM23EXPn8S3HM6CrCwUQSfUqo2QJqUkD97LYo5J72dXjTT6d7e4zAmwZqDuT3e8MZp4asdd4mEwJpGzc",
  "key20": "7NmyocDW2KpkLVoAzTN3DN6ueaPMbJsuJzvMGS9n8prsg6G8MV3S7NiwkRUYMhNxaZbXyb6T7Rus2GyF7YMhdHf",
  "key21": "5AZb57Ljs5ZTxjmzcuUBA8eT2LmoEF3x5wh1kHCbGZmZudbaA6ztRGUcSKhfanRJW1BWpBnJqJCbE6Z6ufGRMr9D",
  "key22": "4BTY7BLkQ5cH4REVzdoSLmqTysewJCDnsytmdLnXAPyRQMdB149YUopG2bu9eVeKze1seC7mrXhkpimF9cRA8YwT",
  "key23": "4Eptp5ZZweh3kfj7T2E7BE81SXZSSE9uwutX4wGN4FGwrxezJfZku8kXZg7tkMZpxisiVdvGrDvzJnwRSbp5hdt2",
  "key24": "3Ez3cBPt9WPF12kkzrXWhqzi7J1AC4uL2PnBLrSfE1XA1QSMpTrtaa9B9DCKYzXrm7XwfSyE7oYxJRkUiqEE7DYG",
  "key25": "57PKX3L6FB9wc3ptwnP5QdoPupgDVeKfpHK32PwhDMgrGYnyRLyz1JzCHYqaETwVFFKPzKR3guCzmwGEbLEoauLv",
  "key26": "JVrszD6UBEuaDSyfvfXMV3g6aBL8881uDsygjSoDvSh3C5NARQiQakTFhS2Qgpq9jPBRkxP8YuQxwWs3vbmuMtZ",
  "key27": "dfQD5dDWZNYHvD6B43mRnyXcHCueqGauY8DCHEmKRaoTUefWx89if6w6GYSPNV1X4e51z9UvuscQqi63Q2xR6d9",
  "key28": "2xXm76Uf7qtNkCetAaxMjJzgCeAzpm29L3VEeGU2BujxWxuS9WD7A4D8Za5b7NNxQMfaR1xXTbaHaCMSn8xoyceE"
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
