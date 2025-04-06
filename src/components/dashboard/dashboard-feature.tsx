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
    "63bCSFVFxNneFEY4tBq9Du3EDkHpa5EqioR7Fk6Tf1DyvZ6DCXkdvesdhRFZvJjXbnAsT7P3s4vGAGx3UpJjmTv5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TaUjN63CDDY52LEiufxBtNAqfHPALXqt9HpJXnQwoWke2WS1pWpwdEJ9FepLF8a33unQu4pqDGsHWukPNxLKGx8",
  "key1": "4jZdTwsQfGhznDgsKwAkW415py9vhihLWTsNNMSZs4AD5ftP3nhtaq9uNiRCbBfSuTHFAvJhi8YbqMSWUEBwV6pi",
  "key2": "3qpUmYygmJk6BsKN7BSrf1kQST4kvUd4hY8W5tsZgfef8tQJ7vVHK2CMLoHoVLB9VATcHMVBYdJqyHjYeq9DdSdt",
  "key3": "23AirPJGGpsBY47EQ2U9WsnAeiTYaSPi2j8TFix8p1jCN1iv5oh1Wi4dR3pRETkhGRKNunp6rY3F5VN9bi4R6wA6",
  "key4": "3CWZjauLPPyH7CiVRyKz9aXds2ed8RerRtWBaassUmGvEY1XJW3JypK7mynmjGWrw7KSwwvj86LrJY1x5LdYA27U",
  "key5": "4i9m9PVm3ySDhwUGdrHoczqGSvqZkMtA7M85kYr9A7SgrX4HeL8LL11aRxypKzCLj4GPEACM1zwm94McfHKtiuji",
  "key6": "4DGsjwzJ3nS8vGvQEA5kBkdTFW7VXUdwKK7Qk51zBhUDcB8262bEmdDzBBZC3nDDdFBoPQiupEPPnKADNZcXmnqE",
  "key7": "5cxUVJyoEA6x8DDsm35TB6fJSPNrxsD5B3hxxyr93V4g4zbx6aTpxa48Wao7kabqG4fNRdXn9qBMsdeNGHiDyf4s",
  "key8": "4ZfcpJwENXGEDeJmSxtpwH98h68UrhL9b44eetMzzXPXCV3YRFKKrCwbXaGFQqq67to7G1vbbuQpsjvq1v2BFQJa",
  "key9": "4Kv5FJudtYjBFAHUo7zie5tQrZhRNAEVWaEiQe2rTEeMGoLTv2pCkBTS7kFMXWsXCxYUCaPs7VvWK7X4oZd4aVuX",
  "key10": "R3MvhnzcfKwEkdqL8eixAwrGgnuT4p2Pimu9LiNZ6945io6QF9m8c9ymwZW7RUMDg5uo9dyhT6fJd2ud14T4i1k",
  "key11": "4eHV5JoWHdbNb1xnQ3DKhQRmdWrb5b39onEo64EeKSYMJG72vndx6MXkNBQUUe8q5qWuNRfHiYjN69HofMSeQZzd",
  "key12": "62uSrKZnFyEeFy93JhpFuuizScxhZaBsGBj9pibZoHrDggrMTteHP7GTMEZkpCyyXm2SqcpHfw8kH7XE6yFaFjJL",
  "key13": "nqgyndHunHdusJvMVc95cXMxqYM9f3nMYWdQMBxuozT2x5VXwkuordhr8Kt57YZ32NiiGS19uSk6Crukgodkb1U",
  "key14": "5w43e2AnE1DDqcWeiat7TQP5cdKfvge6dFXDXeJis11yQyQdsJ71D6ivpqrNRw1sX7zC4YFMu3ZbcnKz4k9cw8XA",
  "key15": "38XhvDu3RbnmZaCsqtC5J3hLg8gb73fKKJwsjjEsc8MRdKFdPVcRnzMWmH7nn2UDDc33Ciqvvb8h5NrBXL2rNHyj",
  "key16": "sFFZDdyYVXKfeJCkqse5KBRQQRfYb7uX1nXmjPnbagK2KoCzjxHPyFmiXZ5NtDuNqgXxG7tueZTxxnZq4tz7Yym",
  "key17": "5eLBafzxHB1U8MujQdRstN5XLWXQmZf1VJDrT33zUYEcncZGtNChsXqtcveVZGC9C1a8TBp9R282aooMQ7Fw8VKq",
  "key18": "4PmAmrWcsU2hzm72VRXEEewaAajhWbsfbRSxJWo6M8U6KupGcjGBW1HGMmLEQ4JFm3MnVDFHEvF9YERnSuWuR4jq",
  "key19": "bXEcpjVbSQAvLWNTSTM1WQ9kT7M4DumyjAFutEjWpMwFX8Fg2hYByFFntahq1NFssoBKJQeojJbzX5wQtZQUjkD",
  "key20": "fJu29doVehy9eLYf21gJd4cAiSVLLB3vZa9qezyXmzvLNptAqijdJth3twxrV5ttvHgv4cmSxHLXejJV43GSoAT",
  "key21": "4gKdnQU58X9f2ReMbai56SdVoTiknC4HxYbRynoWqbNxwCooxQj4WjxphFrsGS86JCQZxsS7c3hwKEeMqnRqP1M",
  "key22": "2rDTeE2MxXbZ2iXYogHEKGraNjXjFFCNcenxxebVdXypbZxaYQjKCVTEyaS1r5eS9f8dLKQkE2v5D83aorgiAA1F",
  "key23": "4K9CDd4LRLcw2kiNPUJvnnCosPA1MA7GgLe2YvcqwALJd1qzz83Q2k2QMiFFq9dL2b72ZYxu29eHZsZ5EAGzpE4F",
  "key24": "5fxWQtng6V1jSno8HxxmJXQ5VAAhU7T6XTstVJ6nvc5tAaLi1GNxJMzc1hKUH364BhK8FVFmuF8EPDfBXgeZdatn",
  "key25": "325QGHWXzNtprw453B2XqDtF46gZGfdSCbgn19toUkM6HPJoshWmzFHvuMEB1VCpwH5BQSEX2oYKGAj6nbW5CYaE",
  "key26": "3UGS827aVNsX3qCBgkt5DbqoUC6Tad2UjovRoLMDEcidCRQK4XKkbxGBB5vGnkkSxbd6CPmPsCJeJWMJyP8i7ZiT",
  "key27": "2jdzNbo2LP35usfAigeQNforzvA8fW88r3B2rq4RwUSzJTnTKX49dDsoCaFQgxaiiN4u3b3DYoeKX39GjQ8ddhpS",
  "key28": "278TiwiG7e98nzF1Bz6W5NXZfMm9CPC36kZBtRrMen7ry4nVPEpgE8XbKuXiYXafapUwozM3ymCyLjHAh7qS1iDT",
  "key29": "2wD6QMnKo9hp25uC2GZtrfpJWkW7VaPkTCfA3jV1MejkTeHA6Wcq1g1w8smCwkWS3TCQSQkUpiEnPzAQ5RjZYG8g"
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
