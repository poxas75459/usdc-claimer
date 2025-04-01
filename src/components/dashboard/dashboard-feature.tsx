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
    "5e5ZTFLAm3NizWeyvZBrgJoBWM6Dyy24KSnYHkWWxBLKyfwHLuKvzeLHm9XyxJriYPpQyVC1wNufoDZyLYvo6b4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kiCEwnbaMkQ3qT6ZuTGsJNNYe6AEcMFBmbFdtudvW8bTZdBiWLpchLjYXYGzAwbpo6PbR3dA5PKd2ruiUobF3E9",
  "key1": "2tQkvoJ7bYvcGMHp5Cqf58M3k5AZ1v67tKDMToZJaczvRheLJScU7MHWMVQwCxqcctGhLZx97RdXA7kaVUoBREa6",
  "key2": "5pRhMxHmBycTbmdnkcEBbfruBhA7uT87eL4ukZN5CKoAyKx77W9hw8nSJ35Dr1mC83FGnrR5Zx4GXBvh6LbruAm6",
  "key3": "3Jsm2KPL1jZnB3nuDNmJGZupveadraQT7NdWrjfoH9jXX2XcSjuagSprKFBNyTfQsRKngL5Y6ybBmQgkamCJKqkN",
  "key4": "WvaJPc6LoHD8WDtQWNCkswGwQPMNsxX4iWvhxaVLp6nSBW47DvYN7hK5utdDhSo3j1j85kXEwu9bo84KSgCaW1b",
  "key5": "EK9YEhDmyuqS4TQMRdJBdWeVnkNSQqyi8G8zEXhyZDbeZxuw46MDraf9kEfYxd9xwkZuGN7UmrqcMexWb1kWtrT",
  "key6": "2wiriCFrqpoyu55CEz2B9bM7Uwykbc71iTbFJVGxYMAkcYRxyWkT8FDGYCr96US1Y3u4btAbZu9tAXMrXQbMihg5",
  "key7": "2VZ5CMNqA39aWaU78mrncoXoQaDeoHLQtttajh8r4s4xS9RdRAAmdD3RJwK3R525Ztf9bdzekYiesXVScVPVmsR3",
  "key8": "4sygqWrP3NfMKG5npgicwxMcpkHENxm4NdDALgjQr4soieLATjC8AWg8i1JQrP9vpxbb7L7hGBz1idBNQR9VFFGx",
  "key9": "ZcdpDc5eX1wDMcq6UhRhPzYXzGzUdMKusvSM11zf2sKSBjYDPWp9y9ki1BfewRirkkF9gAwZuMHaWZe4NeXJjfH",
  "key10": "3ML7BvJPNniZRkFg4mqgwaWK5SPzj5z2cqhPJdtNwhkpkmnHWBD7ZCdVgMqq2mZBmo4wTA6k4tKuDKCZo9u2kuWJ",
  "key11": "5L2unwk9o1gs9S8SALCyUTK1etfmde5PANAtZeV9kULU5jJrqqrLrupe8bGRWnDRqYgga2DVTL4jwxr7VSdSvqce",
  "key12": "4knhKWDtKuhsXKkqwgnCdvqPK9MKunacnwdPCoi2xmaCzcLBfJQkMsuqSQxBhLj49W7LBqzNuwsF9Qgh2tyJXbHx",
  "key13": "4u4Z6it5xG365ko7VEkh2oRhov2D4rWJMNLx5jFKZ8M6BcDFYBBPEUozwr58A6QgAfYHeevT57bpJfxbYTPqdLqS",
  "key14": "4GvysLev2nhDen7TC8mQARi1gjeKfC2MLQm6ZtB45ePDFzMEKeUwLCM22dyoq68tfG3ytgCYHAuzwvqpkMiqMtqs",
  "key15": "2Q7uqUD23pvBhzpJVtruRnTgTvR42gwHQDh8DbXGEaS9ge157nijHSAtLJHJZ6kTaevJpZjTzsSyyXR5aNk38G8r",
  "key16": "3i81UnctErvnMegnHnjar3t9rNYfuEraswgaqf4xZbJg8viJn2E7qyczRA9cRG2TL3aQkbWYaEQW7aBbWXKvtaFi",
  "key17": "3yHqx8MYZsBExFhWHKvEyoj7A5TgH2t2mtdtf39RSNbCireDm3spoHfYGisWhL7VmUarjvfP7tzKocXy5ebcyG8h",
  "key18": "2y1JGAFWinNrkK6ZzQ2ZthdzkJSh8Ssww9oMVHcbHxZU2ZxeDgQsSaPodFco8xs5aFYq2AHznt4yGGa4x6VWrwDZ",
  "key19": "4Yf8yjaDt2tjcrA6oJiF9hpTE44TjSsi9oUtG9jQcpdHeVvPRtw2sxdkFWgoP3Fr6jkgRsn7djVNzUtdCcjfHmE9",
  "key20": "3yo2nzKfhL9zs8N2xNWkQXxx682LE1Ggtvc61kNzv7NzyTGMnLcWPUBBQSKCeYbPHNeA4FcZMHwdNKDTmXbDFoDN",
  "key21": "2Bj4pngdC2HCkTJ29vN4XXot8hWWCmS3vX7A5DDgvP8zJd3xdnx7LKAx6696xJtURayQ4aZdyeyZtrHG4jCWpYja",
  "key22": "5x6ftnUaD1ZtDis2bRdyP1BnsT4Si74VMVTmv9PaVAdBPcbTsTijK9p9QLeo9bSgUwccGsZxiWfmjfFJvfvvf9XW",
  "key23": "3cDbj2obBffE5StmJPWX1WgzFbhMiU9xrLi2yXrBBNDSJLtxHX7noEPBn2suaLsBtvfB3y4vPtq45mmeYfFMh2xY",
  "key24": "3BRuKzT133Z5RWgrSNr6YPprhsmTPRAuzV8V9QrTkFjkwJMY9p7QperKgvocycY6nqpCZY2BZxAVh6ZVpJsA5asM",
  "key25": "5cdUJP9QeKoUEKJ8EMWCwdZj3p6TyLSWanrPh4FndEeXecitqqkg6iMhhsQngCzGF9qhuQYiXy2wVKZ9JcvEqeUD",
  "key26": "mEbiRqJB2o1zmKQkDXBtjj9CSkLYCxExvnXmycXGuk3zE8YUu6HL2Q4bdLUYUT41CXeFLJvCeTQmo9eM22FBpmb",
  "key27": "2q6JbsQG86mZqsWrD1FcBKesmiG8cU8xbTeqKXDGMyTrVbq6bNgJkBFQYES5RXjRMUrG73T2yEd25YLFX5BvLmsz",
  "key28": "6kBRtx5DhiMsZd7DgavEEYr7LhMBNcfTFVCQ4djtUw8wenfuCPSxdAqAG9mKmR9j7kBQAuttjXuGswhn6g1S7qj",
  "key29": "vbhrNJGPgt3pLYqd68kCmmjZ8CPijYFNwJJc39rRC5pZp8SgMeiVU7Zy3skSgz4jXzFxJTc6XSLwwEC32Wjyjzs",
  "key30": "2gzkkB3moXuP9qzth5Ye3Bq3WFGYcA2jq3sH3trKPmgNueT2s3HTwGb1rJxqxb9U5YSCzD25pWoxq8vdYXcdhNuQ",
  "key31": "5NCNJKew1Jcn6N9ukfSY3FrvMjymoeozMGkzsqjYTpRxQD5zk4Au5q2W1zHyq33pnZh75bZtspgsxXqdJVVaUqF9"
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
