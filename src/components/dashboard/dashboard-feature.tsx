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
    "55zyoRqzXrReRe6XxRxXUWC6DxS4ZEuzGuoS8Frtw3Hx9f12w2B8NFVVgMDbv7WCGMUx3uMs7HjdfgKZ23YLWRvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z4Dx3X1t6QN1GkbedRd7iz1TAr5f1psy9hUdLzcwgdY5z9xHDTvWicW6SKRAgqoa3MN2GBGNmWCtKW2zokmZXEZ",
  "key1": "473t8ihWYgcVEdRmqtsHtHyU985nTz4n57EUpg4YZYTmSueKteqX4tHsAqHHdfXDdNHjE4PaHg4x5AzMBpFseJ5Q",
  "key2": "4g55QcVaFuyHkbJEsxMBxND6zGBrgZ9rEPAFQBr57fUgEFNBo3ipkLQqdUKryJCzRjRYTNUfpXvHiC3N1kSJNitN",
  "key3": "EsRfMb26vqLxfhugwbVy2TC71qZSaDtLgof1rCZEZFzLNvRcyXjneXS2yKiP8UKsvXncNtu33fBeAsKA1zXvhvZ",
  "key4": "4vBiBdk91bniSYmcAoScFTEDPwgPpyne5n8h8k9UcujzxhLPaT5YyxNYKPPDnSWu6HdumEzYEXxZ1W6Xsm51zsXC",
  "key5": "5w9Q2nhPJVqh5MZCaHPMSGxQ41gzjMq6i5YA2UzLpAS8nwz56GZZiJi6J19Eji8AHsY7pPhgVeuN8piKDbJWDgjX",
  "key6": "4GuHsMPMUXuQ9mpXg4KEWrJptZs6Z5C5QhduZmKmj5a6egqmjmJwyLv9q7PapgRgdaCjEUFwUhX3N6ZeENj22yf1",
  "key7": "5tMJhKvA4jEdnPPjxWjrd7W7fJRkC94jft14qxkAuyWqZf5f8mEMFaZRBijgaBWCSZ9WuSAdt4xpnWu5dhVEf6UQ",
  "key8": "4BjS48vBdgVfEaWaGqj2PABxjKcyck866yed5SYihAf5eVZYuWt482Kc7mBZqn5r38eMBLDaskFG9yQbuJ3nGpTT",
  "key9": "4yzkxmbWnbeYA9RFkttUwJaK73RALnFvF7fYWnUaTZ3B1q8V4sox3BWTHBdk319QdNPMK78aPbvL67d5ciDb8694",
  "key10": "5RgMEzcUjGDAkJeDSvUnP8LQH3xGcemigZy37NwZyK9YhyXZw65nCVq3VsAwLX7hFHcNJVvTAGUXqqxs62xubUn4",
  "key11": "2CAnAhG7T6RxdpSybkby25cmJraW2vkEfjMGBzaiYpTQHS1g9M8RaLShveRv6rGbW5pY4rUPZ6kNypNZ9pf2iqg3",
  "key12": "3W7dknWhhgPqyFRjwjb5cW6ZCGzy2ak8NHzoLe6KfLwTJwDpDapJNcgTDpQNFzgCV3fKGMW1D6oZvSHdaLQsdyq",
  "key13": "2zaFuz4rdAtSSb6rcNDztDTT8x8jddA1RnLAd6vtaWYAFfYbNzBv2dCEFN1dtspvzgQ6uWqSefviz9xhxy2HAbey",
  "key14": "49GB4WdcW4UdZBFVUYrMxMNZmVgYf1P5vTQL2dWnb68BafB93r8AHnTf57WeSeytXWFzcqs4Xt85ud96rz4CiPr4",
  "key15": "2rxFNqmaLCG5Dzg4FhExTrwtnnkUo7PzrUBhwkkz9wLaUQpyyCxUps1GQbfSTGejqKEWkP7vY7RpjG2kptZWrR8s",
  "key16": "2HwS3J1M3AGDujAtvZb5digMYW5YDSJrVZ9k3SE5rigfyP6b8kshfiifDMp69Y9fWsHuPPPWpDSz2bYdtij53yYv",
  "key17": "3mct2agDFvp4tUHS729B1H1oFGaYdL8wbhyuvwas4LP785to7SAibQcnAaocGKDsqx1u7nGBqbmXAfkwrxQWN63F",
  "key18": "57UhJMFCtxti8Ms7u4cmB7tr8EFndCMMTsutdHGLFqgiCBdnoDow9pm3gAWrdjr5ZDy2V5hr4QVfMbyjcxocwVMB",
  "key19": "gzMcnkZFmcxEUfi7SrzhzYTLVFCViCtwPn2xm4yRwsnG6ygcqf13Q1DUZxnswLfPiU9Wp4c4fDXDvVwHyKi4LtB",
  "key20": "4PHDXHGLk9Lh9Vq2tfDjV8WnM6mKHCyqSzc7xVuWXQTRuYDqHRRux7Jyj5xJkzBo5aE15nJE5tLiRpAUEDBn5Jtf",
  "key21": "5A2ZdGtUztuKwk3UJ5TxkxUREd3KRpNUC2EG1DH4wbHpRp5usvteCBicCUWRYNpFfpad4kz5ui3RSpjbLpHpEWpQ",
  "key22": "VHFfux4imxQ8LaSUf7bSXk32ZJ9EPMHdLgKeFBYyaiNmYWjpXgMxoH8Mm2yL7sjqEmdqWznJmLbZajkV1vtapb3",
  "key23": "41XcESRQC8c5wiYPJe4eTrDZTHiD6pDGevhg5Y7Trn3yL9QgyZ9AZEHygP4KD9weMpB3PwvTsBD9xEPzbSS53rZk",
  "key24": "4hBpnTq5zziMj97s7741HD5enpwJUuhKVL2GdnRkN9jB8m9f8AWRRmThSBJ7PJEs5RXBCkhgev4bzb3baMZhWT9A",
  "key25": "5LZpLY5fxaeXp6pdAZTHgocT6eP9KFVhiFVVb3v1a7hJnUVghnvaofxjpwx6VME4neaj6auZGkDG531VaDWgfWLD",
  "key26": "5hq1ZZHzZyYKrLWr345dQPJjuD4mECZwFGrwNMBm6z3om5bHwHztaM9ufVmH3b21zPUMjTgVzDv81GGhcRjtpT9A",
  "key27": "5GAAijCis32dNHi95R83LddGSoR1ybyyN5ZBCjEfPiRKzPCCLTKWRH5esSXWhUkBQD7coFs16Ea7MnJLQRkpQmko",
  "key28": "hgCiwmAy1Fab3nbXmyETUdwFJatKH4h1DeoNP4kxPT48AooKxmZ8UXehj8WkYVoCRs69RCbFKTGbTPSzJUVxDC2",
  "key29": "5M77hWQsAYWxUc7eeVmN1ES5jdzLQ2EBCgcFZsseYhGjUL9UWsawxnpqXxBMKfkj3KBBCsJPKZX5MJfSHhXZi6n6",
  "key30": "2K7vM7mav52McWpYEJ3zojfQXGwTE1LgwGSwWRYcM48maRVXxehHJwmPBg8TDtkfnqGdXBBiPK1wGFSiwzXMjsFG"
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
