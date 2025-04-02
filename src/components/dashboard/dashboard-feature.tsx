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
    "5PFEuRpxRzgYqTiiDj4D9tXqjwteCArvP6mmw5Qfuw3MJF3ap9ZKYRA1YtXJ5fcLgad6Dr5RQdt9w7rkUoNuNq9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dMDKna7zJ4eUYnEokGimSfbtzCHkZNECEHSfxsq89qXxYYWaZUZRbZ4z4VtSSVW3MvTYeaFMtpDXEzqEUGaieKR",
  "key1": "GLyQVYHhfoEVXJBCyW5TSCGYCwmmNws33EhED7NzojJNxauj7EeJ5UdffQt4tB9AAUZGhEbuj2qhhvUrbHYJR91",
  "key2": "3R8TWUDysHXvm1EytzR5DpAwXeDKL71cjdVrbQhkrMamjN18J42Zcf8trUS1bxB5CZtfbsidzWbwdrtMdnNwwsUz",
  "key3": "2jbbLvUnW7MdDKtwx72p5vGPJJN9jX1sZjvGwVLquLN7HcuePjG2Kvw4mHKZ51baKwKJPRmfWqn36LXT4SEEEeka",
  "key4": "3N6b3qo8Dv9HAU18v848SpV7rMtH5rpS6c1ZvSix3mTTyZKBrJ6MV8e7PfzAyFKR35ANERW9CBhkjDvjk3QsNiXZ",
  "key5": "32RtPzEpaXQvTAoWqGZCZGkGWdV2vMANmzTPVBMXLGTxcZyAMmZ6V4SACXfbGQctcCYx3kC1fWyEmKLrTPAwPJV6",
  "key6": "23Utb94pSyrfzGzLqY2vVwfHfXptDHim4orSmb9c3LLxdAXEZ4VJ95Lg6Kip88CFHFyNQuFBnAMrTc33siY3TrrJ",
  "key7": "3WjHgsvYy6wS1aQ6Mn4CjARDYubjaEAxzpbhGMpHCZYyvN1JzaeDoeA5AZ9rXWGAu5Bh4ZyyF2qwYGmGg4Ln1yiR",
  "key8": "247EV6Z9rGQzugcTYptmPPWVC9MuBJYWvgJ4FEFn9sCVZBToTpA1xbEnM6QhkErHA7FGxjitErvLruvSRD6tzsWG",
  "key9": "k5XTA8uBvw2wMJFkHUrPyToT4k6rMGgyDpVgmu3K4T5eifHD3no1WWTwPAYvjTa3vpYHBLmF9f4Ssc8RpYnWDsu",
  "key10": "mMUwZrDcw9EBnfgiJqxfjByPnsHnK9tqsCg45PCpTsdQhsQMJegbGrozAivQMSbo8ooMUSSXN1iwd5fQntoUeYF",
  "key11": "2MyFrZAZAhdLEAQu6AxuAHR2PnPUGKCD582TPSJVts3ixmVmiWLMYyPBtNDcKf5Bq3ZN81y2orKURwGPDTTXZEj4",
  "key12": "2r2hprLSXFTxhLwajTXxoQyX8fjJhMNhCt2MAv1qYDoPDYx6iDAC2BfMiipxbHC5otJWfwj6EwZHoy7StkiaqKHR",
  "key13": "3NPdghddzgVatA6taZnpSErdDUpepdvfrx6dZvu4VVVyYh5W1DXuewVuGeHmtALCbwwCxwtq4UX5wEgf3DeZmrq",
  "key14": "39mkDGbMp5V58YgiKq5GoTq967zTiWnGGn5mC2skkLQ4k5SGkhHdcUo51mMz9o76X7xnWaKtTxpjBbPBSPRczUxJ",
  "key15": "642gqHGkWyg6eGTtR9WpCrjcZrNv8Fa6vUY3Dne9vh98ySefvceKmnJb4zXzBgBHRaSqQFVeE3Rm4G7xZ8A1LQ3o",
  "key16": "5AAXQa8pNxbzHxiFDxtaGh7mb6UmAYivcEzDUxqJFmradFPjVoJ1zJtm9Ahf3sd5T4i8Fh3DJVCeBRLSU8TGVwY3",
  "key17": "3c6yJ8FWc83t1ooV5PcyvMBsoKLD4PTtE3a4QG6dsyLfPiUeh7kgWQY5CrrUVe6NVviqD7o1uX9hUNb1zKzL3yUN",
  "key18": "617QfbeKiqTTNiJ18DbX9p1pXRA7XtnyLzh7W8yRs92rwwhzhHXxmMJnvLNvvqfquyn9G7vPnsbAYWK57Jo1VDgC",
  "key19": "5GHJmEqL1YfEdvQg2zJdYbjB7iff6MVwPwpMg5jSwQqCCnVa8h9agKsycvQTqhWmV8p22FaNubm9Q3Eo3cv66ZWf",
  "key20": "4wsvP7f2W9eU8kN87oCzRSEaQAqb8149TpufuMMoQhyWmqY8WrUTUKQ7Bot8ygCetEw9FphUvW9F5fgEGTaXZatu",
  "key21": "dmivBXCAbEiu2EW6wuXxARo1B21rUp78izDHdYGpWsXrnDNSsLU1xnd4YyM4scBjzuhmHHKwmihDrqF2o5ofQeM",
  "key22": "54niNvdMKsUWF9svwQJrU6W8uDXF4JRv6XY4QaGcMdqnMXmsGJ447azD3GgozWHn9VaP55EdrgKySrhG3VUzfabY",
  "key23": "3adJDFwqvqcw2dj4R4P72MWkombU8LpfBKLPKLrisWGDzpbZskAfJuhGPhCz1w4Lq5Mx6jGqBkN4mpcRcN5Lqjoo",
  "key24": "5cEpegn6VU1gthPPV8QRZjgevipbdyoTdZmou751VTRfwn5mzj2WF1hN7iEP1FDjMcvs8j225BN1qcq2p7L7KwNL",
  "key25": "4jYCBTmYX7atPDojQ75mF3DzRVMLmszctNe1Rneb7pvHwQkk92M15kgUaUCLoKt8isYGNCuYwsZHXKFr9w2tvE8m",
  "key26": "5s819jadThZjhDzPp7jcAESrTemWBJbJxE9duZbpwJBeA4ZEa8P9GvVDkFs1a9YRjNVDo4xAeuEPn3K5u8rNVsGo",
  "key27": "5wqkXKZqTJMAyVTi7zopfj1bHyvwdyvtwpvsEB8fyR7hmp11rukqDUbneQr1YrjAZCAKFtNXqUyexBaybHmvvFRj",
  "key28": "5A5V7gQeJzrYL6NrLa6KpXY6DKfXCp7VJjnn4eamW1nMaXSUAvZwqvpn85BoEKPRXVgcxLmA6ZAHWeZoxy5AtxH1",
  "key29": "2DEdtaYoKhcVE7f8q3pLj9eNbzWQrKiqHsvfPuhQraKXpfiCnfRnXhKRfPoFAiubS9qXAFnXr3xuWGcnL23bFq3F",
  "key30": "3janfhjchzfUaLyhmobh59Mi5PJUT4WFi7shTc8HkV1rtckPVUCnFxStbNzuvKyKVLxde7Dtxkg4ukxREaGtZ9v3",
  "key31": "AaHBEi65iaQ8o55rk2aefupW6kwJmkhUYgDYouSnpmPKMSBmoaRpzKkYLJMAMsAxdXF4wbs6cYjZdw4td1mDxTB",
  "key32": "21mnHHPXzYDYxWYdWEUrgc51dzHy1cFaMpDNLwvjPFaaLLvzpk6fqgCJxwp49ofao1fJbCrMd372f2rEsF1Hk5cM",
  "key33": "29Q25Aq7Y4mJ8K514C2NbZbqhrWjeWRJvuktqc2WDBo8BiXdhCC1DMbjen7UovDaniwPFmDeeuCPjRNApEcYaF5R",
  "key34": "5vtZfjtcQbrbphDBJPNpLU3FKEdw6K1ytXzoFY59LTBygCQzSqnxcpNct9ks5U13KTK2DwM8Z4hwZwPncPtwuTwV",
  "key35": "5kAgUVE2pv6rS7NCmZKAqBpxZAwE471voDJtDptCzfFY1hXsk7VicmpbRNT7hBgQNkNDdWtyRngpbagVWs9ZumJB"
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
