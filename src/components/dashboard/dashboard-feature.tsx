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
    "33nArXbvLrvfJKktpJPk9XSpEPdC6ssx6sE64rmj3AKQdhqFCyBQYh3d6G9odYNUqLHr8cWHmiWzTN71c7xZgfTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bq1KP31Wv24ecPjPVPK7YcggBr8SwND8rq6RvDZjRpt1aag1ceDQ6FjFeXBzDFBFcw27GGqJaN8QRMd2ickqEkF",
  "key1": "3h8f8ZP1r4P5vTp1nyG3NYCeS1AT3RtZfg5WCEUqygTRSUQLFNpBUmoyzDWkcCxar5ww6pczJdtAhD1MBNm2Wbap",
  "key2": "4gZR1deuQzUjLES7c74jpxizMkjCZSHuYh2AA323Xoyhfj8WA8FFuSXfQdtQjA4Xkv68NnGFGHTL5L7yFCLQHqLT",
  "key3": "2GNxseUfgjQzGZDkuJipoHShbaPmBJLYoSZwdL6Bvut5vdCNB4FeRaHEfVkwLVB7fp2LvwidrtbZYe2JfQiPxLMJ",
  "key4": "25mw2ibWuAvUqxhqPQ3NW8hH3MdHoS48cnV4UdHprn31iYNzQrQPyePFnCXvSqF8SJeXenkAEwndzWwB2YT1FjRv",
  "key5": "csxuwaSc6q6hrdqDkHy6wRDngeDAEvrgYFjEA4rmoxk6r6txnxaEwhrbHZgsSCZuF8yHVHa2rXQbGamuJxwcWkA",
  "key6": "3M3nDczqcsGCkAQ12TWdqRCVAZFb7E83DVHrALm5gtmNUGgynU7W7nuLn47FjBfKic7geq7LynCvb1BS8dJWQnmT",
  "key7": "5DdwTxNuF7K2cpAXGXZvtnZubuSo6TFxs4rgGGEEuoq4S6V4senCNfWtnWYAnHPoeLQSNzheNWDrqr6HE7ssKFRR",
  "key8": "672K8iQKmpetfGNrfsXDVdmCQUQhUn6tgHULvhsEXGw8QNc9SMxLWJW1eDzGCwq9YFfVcRt3zcVZtQXaJz4G3CQG",
  "key9": "rPfTtEjBhubMgLSaHas9XKJhXHvEPYWvHtdHn6F9XeYxQhZZdBUZqBy37HGgqQX4T7WeCNQU8qzVgRALYEj4NuG",
  "key10": "2M9BD5WodYTFZCpQfFMKA7pjeve7cv2yZ5seF2QbcfDFsMqkFLZgFddtSXGBNijxE9KiWM9D5gq9HkTWjm598CmQ",
  "key11": "3jtfXG3wxHxU96Y3mCpd7pzGzYRHUyVKepxhYH4HcFhZ7zYezox41UdaoNhv8PyAHqcAwpxniz4VzXRTi9teVQVJ",
  "key12": "4L8uJdAfx7V2Dg2e4nKDK8gvXA4XMhJVNV7uui1xKoiKUqHQSov1rKKsYmJ4NHcC6b6Nxk6m7x7tpjzGTxRzbWaP",
  "key13": "5EXjTmfbME8mXqT2jaWDMirGU4d31Riw6wd7WFKQy1xwegBHNQnrd9t1tLaeDHvKFNgGFksZYujxPrD4Fk7AT6Zc",
  "key14": "2vxTL8uPVozM2ND9JBsXWYi2xREniUwXfn1FLpudZgt4M8ZRddpgxUMgXNgn6v56MZEfjPpQohxV5hYY8UNWqXDc",
  "key15": "2eBkyZq9aKrgUzsRucaW6Sh132784KC3gcgDNqRcU8efuC5EPt1DsYo9wYBGuvJZXnD7Zi1mickGw9X9vyqYy1xX",
  "key16": "2iVecttW7KX4sZAUFeetgtvYoSb11t7junzNFcgGtwZZct7eRyzQEcpEkC1zPonSPyQsQBtdTWmAPvdtsZX4zeWJ",
  "key17": "BN9uBnGSijGLKhszKBqsmkpBWNSsyiEH9EinGCpLkptk4K1JjUN3Cmid9CcJc55ydndJET4ng2eaXuccyPGgKU5",
  "key18": "4n3uJGCwASq2WJD8tmwYx1422M3gkTGRfyYgZcVfr5zwDDnq1UfLJMHm1UZDWyEheStM2suFvN58FynWEyKic6om",
  "key19": "46GenNwNtksmjf6JzbAmjBQe43kYuuRbC3qsqXvtEgvAnWLm72vWM2jdftVBhdRpc7oDcixWZDnBTQ1ioJAeYRtH",
  "key20": "538p34oaUUNbCYPvDRJRMRC1Aixd365EnCnUwcknMC6qAJw5Sp3hoSqi83fSRTi6xisQ2VSQQMwKPdpsZdmCURDm",
  "key21": "57LHQ5FqMuRfdKporZcLZdaJeKo7kcNVqgKVJnfjjnsgL7WvUoaRL46Mty1TqFz5x5JRSC6XkRaMJMEqNSp317UW",
  "key22": "463GNdJeJqpw5QsVJnSKzcvSxsmaR38bRfrQLGY9B9N8cZo8GxYemBp1ZJqiwgPauRriKLr4CP4bX9BocyyWpnQM",
  "key23": "4buBi7fYscokrGLByKtGVD4B5kADKtKkUqJd9YYDJg4ZqiB4zYJqR7UQvX1CCJs549R4QyyXmgUSqYj4iqyrc8rs",
  "key24": "2RZKz6zz7H1se3UttMDDZxXFrda7EXHJBeaqQLhJm3SHboV2SirAjJgJRQThcLoNMwAoypGYskJf6NR85X6FPUpq",
  "key25": "4GwfwJfZeYL5UZvTyUxKRuUU6ZLQjBYJccTgQjymoVXyGThiWRPeVxcaXcrrBc9QPG6cMgLanFN6RaqT3wFrM3Yd",
  "key26": "2YeE31XVFYfJ8BoPSuAzeeH3NvMBhLKjz2Z4tsbLtC8PxAGrz1CFBdLnbFZhCNhqAEFVuoTsRJKnvb6CLinTi9Ud",
  "key27": "4tswLRdwBh5peNZUKZt4i9J5ogiELMjg4BS3mRDJhH3qDejvyg1HU4VeHg7AE8wQARmrExmDnn5MKg2iUqAYa7i4"
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
