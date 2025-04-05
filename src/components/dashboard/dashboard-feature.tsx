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
    "5LKx3bhrTUtjerz3oea5bV4YPzJb8NrgxkjUPqntvy4S9CP9NBdVmJo3DjE2ZifFocCwEg1AditVNY4pTcCMAqkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p9fYNtXRe2iBYnDk6jEULSGia7waAGFCzP7LDiCyZyTWnTimAgxHvyL3XjR6aZEnZmeqmNEDc8uc893VHy2xm1K",
  "key1": "5gpEMvwGFj8cnZEi1iMZhKCbwGHz32gV4DX9iRDUmgr9oodgcEWjqk9DnVbZCZz4knY4x8fesCebjMhy7djcuxnG",
  "key2": "5ZEWx52cXG6LiWmMabJVrUgdSrvqy8Aa6rzWzBhoqVmZ8PxMgVcGUi7EVCtkk9q2XkZbXyDuHyXS9A8skLYDTSmh",
  "key3": "4QMwxuHzueuHYXsbiArHBskccif16bpWZfQitPgYXKXBZjzQhV4k3RoD3DCVGkMSYC9YHxBKgdoEZgkG9TK89TMy",
  "key4": "27rBbfk7TTxp1hameqgU2ae9pgxFUZR7DeGPpXpichpZe7PReaPQbwVNiJgu1eATn6cg35xZWbdbsqeYrDhhghNJ",
  "key5": "4KMvHAHjH3FPc7Y2VU2y2ivAgo62ErMXkERY1KFpZbUrVyVzJG1JWVu9eJDRFofj7QuHUzJSQdMMsB2SsfRNCsmQ",
  "key6": "57ngcRpA9nkkzcf9Umn6efW3D9gQSP3qEgZeUb69SXwigcaQ5tzMVPVQZZMYnX2R23ZW3Xn58sqq17YWgCbXbY2N",
  "key7": "4GZVD8TgKEojWiYjE8bZvNK5wwcUKgTQekkqDZx8Xrzb4Mia4DBhhGSfUGDPzNoqicihzsVyeENjaKFDFtRNvimi",
  "key8": "3d5rSKKw4WsELVcVSAdGZqW716MaJ62nk1PDPUQp2uobyWNMeLXhHbhJxvNWK9DfYKarLtbEAxC8EoakY1jheDes",
  "key9": "5Ht25wXAak5yCfVkwNH39ADw3nZEFATJZfZoRpnRCoP2jKVJhkXfVt3Uy3khCNjLGqLvxLEfrvvJJZUXgyknhAN8",
  "key10": "31c3fFqbYCk2Etvr4cZ56vHJuDcJkgXhkLBTgRbRB74iBvyYLwUBN9hHQa4rQhNJe85n2Hfupqz8gRthky6ZjhHs",
  "key11": "4u5Eu4oatcDLU9NFcrXjJvVjdHZNMq3UzgcA5kjmx3uNUY6vXyTP6hE5x1dT9pmcxQXZQL2Wyxfw9t3K1UvVr5sR",
  "key12": "4hcXZTs8ydgjYcK9z5UTbLk7nnbHpwo4sKMFgU8jeFXPxrw3dJ5rGV1co1kdb3jqxtT4eQQkiDe1wx84Lf5kWGez",
  "key13": "4LGP6nuVFbSMBZHHNQi7e2zkX2nYSh6g7fKAiQGmriDz1RWinGbHN6uEACAkzHrZspqpv5LdD9KJyNcw4WvicoZT",
  "key14": "5Vc8K6RRprZTfCcNoGjG8C8QjwmTk8XGMwsNTpG3iFhtJxmGJWSNw9g2ACkxswJjQe5ESbJFcP1B2JWTwwCack4W",
  "key15": "2CzbrVYBqYHvWN6fqtLixCJAhAr18cJPXjh7MydnA1rJdhuznPhQgz6jVT1qFgL5qioNjqaBtVSouLdeRt82FnZ6",
  "key16": "2eYSHtCmQhWWoLVc4q9ra38UbzBkw9c9Mf3zj63Y9ceydGjz5mNxjdqt4gGSfir5V5wPFKS7LVHSJmRMo339feKK",
  "key17": "4JF9AcxMBAeafKwSY2pN6Z5zdejFiS5zaUb8ZE6wtnQgsPHCGWc5NH8k5aocWpC1ksWWNYQGLHYu4Ci13M7Td5TD",
  "key18": "pU6kLQXNwsaN6rXLe1U98D1feHvtUn6jrd6LcFjvG9m5APDAyt2XMLC7enjKeS3mfEJiCeLSXRFfk4giU4ocKeD",
  "key19": "5A2nhZXCABszApcVhJi8Gj2YcLu5rWWJ8UBrHCwwuVy9YbTaXGChy3gmGCWojXEPFnt8nhVDuVbPok6tRvcRZqTG",
  "key20": "1Jyai8BhSgdXmfjnxbda8bro8Q3yC8kudooMtrktpnE27rXGQhZWpDdsUWbMV1K75Vzfdkn2mDAohRXiX3uAq9R",
  "key21": "4HARnUyqrTmYV1pA3ehQqoDtQFp8Pv8G2sDQjwcza3fQUZVX7EFQvVYmjazXUKUo8tzJJu2ckRYj4tvir2e4H2mt",
  "key22": "2RKS6zaJ5KwzfdWD7KURZ2yTB7zm54jfgTSLyH39zhErQFkEs7Z9ckfXi1m27tvaFS4kwruQR35b9fheqLdxqwCm",
  "key23": "3r5xEFJmeGadG9ovsRhpjozu2Qy5Pd8DdyfasTtdCQcr6K6FQtTNLy74mPpFaHzdw3GwSv2VQbR8zpWmnKRXpLWi",
  "key24": "2WTHMGriJB3MQ2sVF8rF4nfVTVfRfA8FiKYHi5gnJwg5bjaXbwtCxfAPdfkoSuwsrhAT4sYDXsfJpPnfe2ksQBjp",
  "key25": "3AjzNmKRbNas6AgTNtdAzmMdbmwYe8NfzTxQuZjCU4JAzVXejSzTHV6YVZtXEbFk9325jDuzVQXazdbXs2G8ePqv",
  "key26": "5sittyGJ9neKgXSfbnAw2RgGEfPtsPYNC5hGhtQ7qUBmePVM3dpF4dbQaRZ8CNjLmwovS5Hvx5Vc8JMKpZctUDLx",
  "key27": "5ASCWBUma6MhJvBF7pNm4imQibHkU3DAgt4ScWkbQhpncjf7WiwBHWhTDvAjofRkTgqCqZnmJi7oimeL1QWQ9Cku",
  "key28": "4gdnqymAsaZB5zkJQPbxHiVtp4GWJfgPbV6BtyLN2Q1T7p7XvfajxJ27wrYkYuWZxn5ADqfctbPToRxuANARfbgB",
  "key29": "JiFrd8dCFHYSwMrBxYs4DKuG3W1NPEXnq9EmjvJLKroyJyNWpBNfMd96yX16An9ZYN8pwB5Dr4V1vr1viiqjPqc",
  "key30": "4hcrSxq3YUfqYia4x6ymTaYh38F9UTTHhDTvqJzuAiuUkJPWA3ktw4QkTH8vV6BLv67xdQ2kEJjjuF9gKTRRDEAj"
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
