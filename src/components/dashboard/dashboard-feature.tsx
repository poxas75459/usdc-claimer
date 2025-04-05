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
    "4S5idARvwBVyUMjuMUZbwb6Ygx8Z5oEPc2KxF1yzymJwKBoYx494EJcJou7Ye4k2QHssXZjZx3wEy4W8AtH8F6AL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PBcSSW6kgQNWK8HwYJiMZZqZrwPmJuuJ57HdUU9P1J4TSuBR3awXdZcEcPA61K5DMkpErKHk6k7ReziUotktfWC",
  "key1": "3Umou14PQmeH1EaADVJr4jSbeNfQUTuD7qDQzGx4VjttERGDAvzKjsdXEoCP82WqK3pKEaQNbck1xQsyFMH8KiCF",
  "key2": "64c8xmjdrtd5J29K9p5dCAjtFKxS3r3jzNxCZKRBLL4ZL1CwCSM6AZB5m6ZCBakg2uwhYWDZMkPf37b3vkkAZSqE",
  "key3": "5qA3TXQbMUcKNnbaH8zx9R2M4C7DfVmAVBRGBEBqTDgr5uMAhJUxuDgxSKEdFs1sdAmLqgmWpMCzWZovaXy93crR",
  "key4": "3hBGKPqeTXSLRnhpYkN4GYpzJ8csj9sT4jXCWf4EZnD6HhVPfquyEvqZQsNmaF1Jsy5oBe7z4qMm1NRWL1MJUXx7",
  "key5": "4y5nwNgA85DCXpSXLhvMfuqAWw9XbWNwFo9RYCrUCunKrij5fftGfQmghu3azefAFfnEz5NqW9QruH6obhssF7PN",
  "key6": "2sV8aRgNedFpTW53uNmfcUfwBJwzwXmaUaWksUFD6cGKhBsad3FVt4vj8cy8vKfmLRih1vd2RV79ZriSi5W57v5A",
  "key7": "5fx6CsF6vxxiWoGzndGhUeQfCtpsTPqJSUJv779TfhBvvdeC1CidYd8VMSq9RvTJB1yv7kHeWS3DGuD2aYvz4YH7",
  "key8": "xYjghsgSmVn72mgFPz5XTko9vSAM1txacVx8vELRsbaavarX55GRcip2aqSUpvWMsnNBnKx1JsEfKi7d9AuBQYK",
  "key9": "Fio55t14jnACZrVQhA8rmpvbXvB4MRf2zVBnxS1SxgKY6G7aUs7CYN6nRo7uryocvimxHPEFLYqVXWQJddMxFb9",
  "key10": "81aHKV5dUA1fkKv9mjpHpfA4DhsNxjpgQMNaRwnjcDTDnoMjySMUscYTy9vpaha8QjhTwZ7jmbWVDsZSdk7htUZ",
  "key11": "3Ff3F7hbSQBU6wRSqBqZ4vYKbskN4sXdveT4k51C1JZ5hFBGhLHg4zwfKeBVDp65cL3xj5qr6j1dBAz1x9vPz8np",
  "key12": "3ivPVs2RGKWL1m98noZ2GCAsTdE2Bo1G8n9KsaTM8AbJWsYatS4pEJ573Y58qcYTrJvdfBAJJ8hssv86gg7pCits",
  "key13": "4KmHY9TzLLgLuTfdfZiTXxuBQ6feYzEKCbYJXQu4fpFgvgoUC5vwjfbouyLzTtn39QERVSA7xeSwKV6WYxBWbus5",
  "key14": "3K7Nb7GgqDA8J1jL2JgvgpR9KVLgd6UWdGzC88KJgPCVyDGuT9MKoqATQ3JxM2vRbBKgXXzw2uTw9ucqgDQdtRVg",
  "key15": "2KBjpvTpNfcP8aucpaU5A4oEbKfG4sfmsgTqPCBwDc9QvqZFt6qEM1P1wtLfWAd4scnbunJnwvebK8QSWcCwzmWe",
  "key16": "4z7ozd2G4yiDiAstfy4918nmffB2PqRR3SnnqrrYvpiywYmEEENuwiG8yqVtqeNMYLeATVz1eBrk7trtYdcHhkWk",
  "key17": "5aLPH3N4GvkJW7oZaK1zvWX9hZvi1HL1P8beEowY7bGGufBaFSsvK1u38KLReMJ8tq9HmysoRZ28pLE43Zh8tYr3",
  "key18": "2q8REvuXWkUd1fTxPNDTvw71ApoaC2rNUc63Kkj21UQXbJjGXdjv9CXyNG3ZpAZKL2aY26mmrWTh5y6GMy3Dks7s",
  "key19": "Ux8Pj7rk46vyVYNkgHD63t6NHCy836Qm8xWXqkasfv7ruRvzXhr9FsvDhBHEhLtmi2rVZv2PM5wC6WuGm9bBcWU",
  "key20": "5zcxMJkwGJkrcPmVSBZ2EohFyUa43ZRpXQStFEQHkN9ZTuCJFfdBnwzinzHygrFXriaMimg8nFqNDdGt76rr13cw",
  "key21": "58mtvY5ho8wYNNYMH517BceES1nfFgiUihmPbwx3Bn6uykzK19GqSum4YBNfQuwPhHmaFuJ1fUCfx7vptKV4hxpP",
  "key22": "jz26QcNyfAsUETq6vwevuH2cJiHxroqCkPoLQ737XzjbyHhwKxvC1Vc9SGVBTBzq8s4QRCGAykTjiFQTrD4AvPG",
  "key23": "2jAUP4oDi62ptxXZUyHqLC1u8sQPGUXHFMNVMAGDEiyoSDqHD57BKcqebyfbkJAfMQGKfu3hU4T9KhdFRRJ2jCY2",
  "key24": "2ibPVArMxvnqBmmYG812kR3SB2bPmdkQJhfcJq4Bu6ETL5F6VEv1Bg6w2NyXbf7XJsnvYe6VXKetYQyHq91KPDwL",
  "key25": "2s7oJZ4bBtq4HrbxUc8vWgxbsti62MFhsB5vAdeL7E8FeSGr2P7cpoy79a5yKX4mZfWzVMb6tjfuhREzcBFdiyG8",
  "key26": "3o4dDZmyVVtghVQnunTa9bKD8fnZErYQQW9A14oNcLsgavseXUVPUFAUt4J6S9bTqUJdXhKJkTUyxST67QMfkZxr",
  "key27": "5cuFGuRyD5WbaTTwo3AsR6wfmVtkQRTZjXy5Hb2jWzynqjQtj6ysvbEqTDbA7abYasUChXA7r3Jwvd8KXAvZ3b2i",
  "key28": "2XFSBXHD3q3GzDX8KSGU3LuGi38SrZPE2kDi3LYKmobaMMgbcv1cdUzRoi7bFrsBDDN8AsFDEq9iJ5Uga7nLEEUG",
  "key29": "2giHoKKShwdVGVVxiUynYjmUZWdTptWj3LziieFTikQUwxZWBDE98m35yAQc9c7qNRMffmU6TV7ekXrjMsUuodyn",
  "key30": "4gyQEZn52yRSfTFa5QCWqwjC6Hy7MWmRvm3ihYUJPDXuAemGS7wwyCTswvM3hRtpujgwdDadb9Lfe3YLpeKvqRY1",
  "key31": "2T3PR61rZu2uW96RjHngjoMKunct5N81sC6KL6EC8q3b33Fif1EBA2zVndc7gE2bhji6qaUH8vndwTYSRcMH8nWt",
  "key32": "eAJKmxsNw3W91rbpXK71AE9XqeUnthejHwtR99JyCZGCNaxUiEV5b3FkwRknkbHnS8SmcWcJzsgo3GEPgz5fTQZ"
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
