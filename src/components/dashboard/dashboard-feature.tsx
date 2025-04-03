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
    "nZrugvxBxgJgzHE5vLchNQbfirGe1JMibctm9Y1qmW8S7jmVLPjaxbHFZqeiD9PmzM1tae6RSdyD1s9Neaanaj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HE1KzFywhBxFa1iAYCwRuyKW1z1Mo2yMg1EGgXn5Vw9qw6taaFBZDoaxDXViokZcrt9JkcyUih1zhinpJjEnrf5",
  "key1": "3NRkEGiPK2Rw6FHsp6zidcSDxJmJKsjTEqeuvEgzgF3xi2YpMrzSeP3T2nuU1hRyX6UBnT1tTti7iGA12PXhrDRM",
  "key2": "UbBNHuX3QeHqF7HfGPoqWZgao5Scyjg6rj38yPuxZFHSLeAwT6f4Zer32X8eYcTDgsoAzoKr8yWSxWNiQJYzU79",
  "key3": "HRdYNoJphe3sfWLwbU1ReKp9FMmkQzdjFMVUXv8k1ZP8s6xJ6EvGsX24GStx3pNcbGoKtWnRQDXW8kWmAx2FQ7W",
  "key4": "gXGWZetHS4xjYLaPC9yc7A3MXfy3BZDaEGZMq223eNxN8fMRBb5zYcib32tPVPR1U8C7gKjYMhviVAusoR47ehZ",
  "key5": "5LW6RZYpHFPeirJ1MNcBfc7x1kBb8eGvMdCNcHLC5MnGk1Kserhd8yEkPtrCVi2FDjezMJznRvodxEzkLFKL4h1a",
  "key6": "sHkPkGya775kGtRZFLrZZpVAnXkCB29JriTXBv4ukH1XXEKqomydSWUgHwRmzGWp4aMqxxozrSDpxVPu57DymZY",
  "key7": "55yupKDfEcFy2B8SHk8iUnw1sRZZ19VtrXXxRdTCWueN4w2nhdo7twJQnMsmm2Eagi2oj1z1j7CWyDEfKCc28fxJ",
  "key8": "4hjYEsMm89g3anaWK9Ff3VK8i322ZUXfwKmKjTbg2ESfzX7GmBjGeDj47Z2VJfU9VLXhEZLUbCwcdufDHEP5AYWK",
  "key9": "h8y8mLXU4HF6jcQ3Y5qLGCLcTQxtrJ3GJJhd7uPJ6yDamY6mD1st5jA7LypNDLZU8KXfN2y29ud92QyuJhxhQBy",
  "key10": "PxJ9B9e8pyfrEfJGzFkMKYQPh9PgvGQqd3MidEF5gi9JjiBMJJaaGGu7RnkVoKjEVrRmypHJqDw11KC3vkX1Jfk",
  "key11": "3yZpxYUjVYCGqQJjpJJSfuFGSfP56xkMpQNCFb9vfLXzzpVSqDzXttioeoiTdpc4ePyLk7M3XB3w4pVxXxRvsMBn",
  "key12": "5djQJGK7E8L7TtAFV644RYB813zWboHB7zDgWmhkMc7HXZwyS7Dy7uGvnZH6gAEQb1NCQc75TZyAYExKvaRr7RPw",
  "key13": "3aJjbs78XKqp636VBbR39KZ8U2SXZqa7HA3icrLs5Lzj6BTZWVexY83dkuv9JPqDFsopqnBfTq2WD7kYoMiCposq",
  "key14": "EJDbuJujeQM7nRxv5zXZDpTwrsJcxhaBiDXiRMowMTNzC7e7wq6zpgK76d476o97xgpvGZaD8rQ2JTCdobEbd1s",
  "key15": "5q1AmADDfZ3AdMP2XbzRhjvB3xr1ZoYcWzSRgoVaaCT9J3FTjRXycK8zQ4q8g8JCECfDfWEGeZcYG39PmfoWboYQ",
  "key16": "59Ldhouz9tacT9vnc1821mCTnHcp2pqPh6jerYoa987fNy4RFvTNCY33yGaTyUc46tGTzcgyoXbkiGAH2HQVXdkY",
  "key17": "rHJGQzu1Jydbo2nhjLjTaKGhiDwcfTa6M8GZKtiRdaJfDDzpPZaRmp7srAuYbS31PcDSMLC4BM7mXrDS8zQKrsJ",
  "key18": "24Frv4hVvqXQCpgepDRcEeNU3X7n7ERcj3GmGGyJ4h65YHhur5uTLMfsbtBsHMbTRnGn5g3yjRbFxVeobzsoUiL4",
  "key19": "2mDG2ME5fVrBRV3USUkGwWiGAzFDoxU1tpwJ8HFDcsRge4uxJ8YRwHAWT6QUYNWibnTTDCct7AMXiUuSYA9UQPJB",
  "key20": "3WcUeyxWW6sP7oqrC2P9W6rbMcu3HcKhJQkTGbeEKLwbubLRHK3wYedRLDjWBAwLQ8hwL3DpHNpyt4mTp3h2pAjM",
  "key21": "5X4jGxSLSehKYn8ZVhPiFWMqsgZpWWedkM1HUUgZnakW1frfSe8qr5uHFnXqqBUSMNufykvrRsJYGFGn1dpS2Qpf",
  "key22": "3zF7DGYX4jix7UUszLDAenhKrW1k4qri2Ab4aGpPsximn1u8fN1KycrCZQv9XhKtHyr6AMVq9kLTDftGzWVhwmag",
  "key23": "5qFfytWrc78rfXPZ56xak8mWP5tGEt8HjinxWgZ2t1i8xCa8PW6annrZTPCp6xR2o6oXmQs9xubBGNTM6SXViPoE",
  "key24": "3LmxVsm75vQ4mAXCEzkJGCwzhU6JitfeftBVuowbfXGzxNr9cUCVmJQYNB7gtmeJLo2ZqigDDfe3a7JPRkjNVmax",
  "key25": "64h5AiEebNLsx8MTNCscydqRkkxHqR3BHwp94HQh8j3dFjHQr4nq2ncZ6fgk5Q5ASU2k4zTxfgEq2kBnQq6TEEJ",
  "key26": "2QT74A3KGoooYRmA4jadL7AzgxtPphjCxaVgYrCGmeN9huX6k1tN2ZkVnZAxCsBNs3Jbx9eX8GL2TXomrPDjm6Vu",
  "key27": "2U8TPB7cn3U1M8GERTR6Le9Np7wVyBnuU3SeCN4HrPo9eW5w5Qdsjcca1XHSHZ4Ge7uWVU47eLyRZbu9y9EEkyZ7",
  "key28": "5bspdEbMxh9xHKyGsE2vsjz3b9PGZwfdz78k7AMUqE47MAmxSY1FZGh7WMwKUoX5PuKSnvpYyrqfzyKk6G1epojz",
  "key29": "62r3Ly5krNUVd57a9zDjM8L1HPZCXtVgebjZopS6qs9R3ZiXc1Htuab2YxNXJpammTjTDALwXsS6ru5TLj8izLYp",
  "key30": "4hExnquSgGprPoC6kN7PmETAaBHSRwcYpXXBuVmD872d9FYFU8CrKYUnQse73r8wYEV4teEeTUvEoRxvHXtGWPaD",
  "key31": "4wsmDkpqGJYww1UyzRAnbGXghpNdZV15Nk4mDHxFSC7aiYZaeA1RykwjmJmSy1UC4Z6DiUX5TTixBsYTK6SZM688",
  "key32": "3tMuhEFZSxGK2KiRta59oib2CHfEj2t1YJJGxeTnpnQCdXJVbnTfNbiyEJe284S95brNPewcHHvPFKB5chJdNysB"
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
