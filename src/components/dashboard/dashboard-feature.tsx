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
    "5P7aE3hLhzGZUXcF24hTgLCNSwCbDUvmhs5Q9oLN29z3TQ6qwrurCFMmWCuNnmGA1pShJy92P4ZXHs46UMuVAutf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ewn2F6CWqq26a37FhiLRWkxdYbZc9KrbZ9CEYno9fjKfCMEqeh8uAioiisQ4qfP64DGaSmMkV9gCvoNwJaWNo3G",
  "key1": "4bGuRD4UHUFPHef3E53QC74tKVCGwfXYgvxhRQ3XQJu6QWQsM814mEnDL9xoUJrY9DzGv6oUFFNV6WsVafatL9EL",
  "key2": "9y6FFrwrWp6Z8jxu4Kt3vvhjvVRdiQ1RsANcDU9Ax3nJSjgt5ofY8cXXzasC7drzkJuRiTwmM5c2AUWpmF8F5VX",
  "key3": "44ZEPZ4xjNoMtJaidjtHmwJD5CZiTfrsx53gJCvpPscRiSA6eBAGASMGie1g7Z5yiJmH1YCWQ1pVW6h8A3EKaLSG",
  "key4": "ewLdA2jbGzQZ9RqofALU9oJQJeZ69op5bf6tWYQsuo9NgNmE3JpHdG7fNBnGDQNpcMsuZYUneoKSHnCjovcRQbW",
  "key5": "2q3RSLMkvXJZKc2ffvgDS1YnGwDxgqS8GZHB9LC7BM8mKVSwGsHdMfST7dQvcMD2qJ155AaNTnpSFVjC4F8DeMqj",
  "key6": "h1WnBMRN35V3fVv8Hag2nAomZPjAWyUvLGgYBS8JudsQSzaFuUpiJnuDo5sYsJPacWwtikUVaSY3sHSQPJTZZTm",
  "key7": "3ZuKrgCAwqjxmP4LW66DPqJETfJhM3gAsShpTCYCsjrLMVReumnQDoPqzfonZsfgFhcDDb7Cn1ZACEhdsFQyJKtC",
  "key8": "Mo7mkyUt5Cd1kfJ3Xa9p6Ktybt8aHJg8qpTv5vSGtiAooGsfruGsrHSDRodbFMmN8MZQPdZ6emK4VW7aCjymfPt",
  "key9": "3pwj8edroZ7mPovmSuJNgNzfTTN5i8iBXhecDbEFSHNRLLazjnRGVjns8WPaPTUoX2i34jAkPoGhaXFsH62TvDrR",
  "key10": "25HZNatt8VYjXaXpSZgTaMNVj8kNur4uaJZyFSqMfWuUh8D4ACq1XN3GzwyAWKNVPztwhvcSfKVDy14bFFpvRS1y",
  "key11": "2GctndCLvSeXWZsFbmVNrqSHjUm9Jn4umpEcxNcsiy8DVPiTdXEtPWsUxmG6fbAfwnR2KCKLYZ61g4cnF9WBowLA",
  "key12": "5gZP34Sh36LHr2ZwaZ2WJZMUVgiPorE3NdTkdh8McfqBNYqq5wFgn7eGBr741unmsb6ZfyU9K1Q4yMJWmLwQcF61",
  "key13": "55PLER2hrBqfV4dbEYuHXhFGcjvCgmw5zCJ4fNhY4hYBbTtPrpv7fq9FptuzJju3kKoKQD2BFAGAZ7tz7iYfaTzc",
  "key14": "4KVw6Ea4kBV5cofFYPpYLTWGrHW16PziTkJmS9VDT2f6sztZR96xiUAZm4okN4TNfrKAHUL4AyJ6CP4dfNaFPBtL",
  "key15": "3oCtLG4mzdzZdiyJiP6nWfjGNfWZwGYfX5ZEFNDJfmAAhTATBNrNda1Dw1U72aPXSo12BYX4qub91mp8GdkcQA2p",
  "key16": "5CAhf58zvQSbjN79BEfSnQQVMxHTvmEXbDyP63og49QY6HYKk8QgADRTKvu46LW4PW4xfhT8xEX6tewhPUDZd4AS",
  "key17": "5oQtBzjbqheehyXq3VPvJuiRUp5B935SzEzWtNgHfb94QmrVrtt8HztUupJQ4GStUn7Nk6rZXCwFbJ27ibnpE2o8",
  "key18": "3P6S6XYBTLJT8WrKAD8o1EEe9iNaoPkvuzNAjDNTNE191HuJmv8Wg6u6CUaK6NuP6h7foQ1vVS3j1P2jZ75htZCk",
  "key19": "n6UrrcDPrEa1KWd8vtLFPHHKRfVRxpPWKiQ8MkPSdEhf22jpKhFar9wGeyvtx8X7FLhHbVFNx1g8rDBsDshWYyr",
  "key20": "3ScsCweCx3Tec4MEUDvT8s3cbrcQrCDydt4Cw9VS8xDw9umzspdLyWHfp1LMxcN6fcHmM4aKBSA9VrtTWXqP94Kj",
  "key21": "um6szUJUygLbmL41XYNEhyT3TBAq6vRvpjgPpyCD6ZEqmnP3z88ycehZmU6Gu17dy88DkNrvpaQYb9cJRTAw1EK",
  "key22": "J893JwwhwXYMJrmRvDyMD3C11xVPftyMYEXsAQrdxLSr2V1d7KdjsEeuy6NJBeyQUm1DUaBND3iFWGjHmEUauC2",
  "key23": "2cnSoqwD7aKDhBtdTiAA38pgdyMSePGt36GGrb826hbKCjTrMbc2oY9RSh26QjN6o88Lky99eMNXTijw1GShJ1wm",
  "key24": "4qWp9A8vdt5n1FTnKGiFH7KgBqCVq8HbgNKi4M4b9PdzEfxiWxKnJR5z7eUmyhfTvvc91h1QxarFzFGA5gtskJFk",
  "key25": "3CpZpU3SCokDRz9L7kemLqv2WB9g5dsaGW27BGbwuQTaiUgcWNr6MwLp8jEo4s8YhSrswsXNeiBKkxN7AM7nHjpU",
  "key26": "cK5jMfFuSfTRY49Xm3U3FKcMCZ9qcE8UxnLirfy1gr1xBqdKVgZEhomZhpX4zWoDGtfS9imLW9vBARvH1y7bGx9",
  "key27": "4gdnvUoCxCX9CNjJc9xiZy5jt6ZVR8a2jk4VnKFHs7TLDY2rt7k1soDXRm8Cxc9gKa1F52vwz41URpY1PjNsfLc1",
  "key28": "dqrVQhVFJae4j8xWFjTwAtfw6U1aqgBJX42GfetVCvtEXTLZDsnHuopfbYmD59qEzoa7pyeygn5RiWNYjwzuZTH",
  "key29": "35MH7HqeHGudZ9Y6x3Dw41jAdMDwrkJ1ZtPN8PMZtRMb8ziKLpk9SY8nyRhD5bH2LZFphAsf3HD2ZJZ7sua1uSVZ",
  "key30": "2Bv3h674KVLHH2NiGvZcJdMWCVTbbkjdagUxpZ7ohmswKJYYtyTBRB2zmrzcfReGwafrjXPomWCYGNiZmcuNqwAR"
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
