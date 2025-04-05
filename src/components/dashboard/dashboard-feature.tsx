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
    "5EJQTyWXsj7m6dJfqU1rQVYPyWKPhKo32UGuMjF9qS6z78aJpR2SC4g39V3atocbJQwrowe7bovzqxGrLNuuq35Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xeg6o1x5iFvJ6LhCHJXe1yLBBiSs2FL3myzFej1g46JZp63TTMWBM9T8ewyKmNXctjubdfiaQ1MZs9ZFCSGr7LL",
  "key1": "2g3arVQYDHwaYYyw4986FqEyth75hguKyGGQhXXArGyMaB7Nc5AsENCAxCi5yuzv4vQ5bzQW2ziF1W7A6dvHyPgB",
  "key2": "5bLokNiSXC4V5az3A3KarLAxZCTVB3KMbVAHKf7NrZGNMiZhqgmCPaUriboAX9jtMCJNsJo1C7NTvL7Zzr7dUfRc",
  "key3": "3UM5nZTDhPjGBCHCPJJ4k8cYVXA3vifdCPvG6hTUERZHb5pyGkJHu5dHRbZEgD4FbjNSYLrEsqWn9L43bVHpezyb",
  "key4": "33P14hn2f6kEPu9uBwmDn5PLGESfKCvecA9882B899BYRG2ZWmURjwETVov2bcZtLqVwkZdnzP2qnAzrGy6b8E3c",
  "key5": "3T2QvcDZUyGVPtNCWXwmtrUEeouieeGBxLgPSEDxzR2hXNgTz9fNMeVuAPpsLdvpAK5rNJCuCHoN4Ri9BvP7NvYs",
  "key6": "5xVxi9iQNKNsukBKDZQ74t8rbE2bSNZGTEJxD631NG3DuBtgQdKCbneK8nk1B8gwik7KywWuxZRfgwFxNnC17hfh",
  "key7": "5L4DgMVSBbVQoA85AaY2Sn8qyPhfGvVggtx7kETAXcomcv2KpPc2GB14fxpC8JstYnZgC9DrgNkQeP52Lqt2hsrW",
  "key8": "5HyfaHGRkUuVvfpjbTFaM8qZshHQNQvpc5aq1CxnidvqeSKMjgL8bDEBvw4s5tjbSTbrKuVwxmuSSrWzRDT9QjdK",
  "key9": "jrcwbHvfKECKRPR6xUHQ2uPUPJGGsMp3SmRbwmU1CvYUzXoGs78uUysuL7SZ4UC2jjNityFLrLL2gXhqGWasp6v",
  "key10": "27q5PKBagrym7hH61yEgLj2Dv5M6hyyJoHyMoqdTUM4QbezDMAdXHRaq3KGZqKFkCjaphrG3pwYGbABWs6WHxFtF",
  "key11": "2SdxRZ3i7oq3HZSbCLMJX9sCCsU4uMxEQQy4Kp8abWzkjme3grx4G6w4Djea58NS8DamCapUBJN88tFmyRpBiCCV",
  "key12": "3yMg4txDao9wyG2Fvn4Qc4bdGwLurmbQchd6rfHTMYW2g9yFivNVd7Py6WKYkU3RehwZfiGAb7mPN8PvmLAmj2Vm",
  "key13": "2Df7smo3GqusyswSeu2a7sV5v3emdD4o389ddteL4xuC25hRs9tiiusSJyzScjDH9uvxtKUHJkFZUQcikjiHk3ZM",
  "key14": "4Znvftk4ZtmTTufQX65HdM81u3jGh1QXBVtY7bLsxQziruqmRWxzDE9aFjNdoc6BRCx7rKFzdR39rqBkRiD1P8b1",
  "key15": "21QfqLd8W7MWHgDyK6TRPjiYVC3zzhJGcyiofwD5kCmG5npZg979ww6Kr6zK56wvhhEoHYghpMo68BRwQDTkY53u",
  "key16": "3yccvD8oSTcbxPuzXhqS5GPh2yqJbN4UdLxjGGdsr9u4KeEKew8ayjQhrT7pnGVZMHcqJXhDwRFarkCX24ZJ5EFM",
  "key17": "5diQEbuDmnGNyrWcD784UneqStRTizyfearhfkGAkNcrtwqdWyhEbVzRbbgAv19gZm7kCa2PMZE1Yy2PbDr3mc9D",
  "key18": "47CdCCqvoBRUEW3aiibDos2midFreujApNc9vXcZVK2qyfYBYVygo2Mm8wSUmhHzc5sGjPfyoQuuRfvC7WFcbY1b",
  "key19": "2V3gtiP9X7ysLvHi1nTvFyCojdP6qqF6Qp5Ees1ZXTQdgmBfm5b4GFd1AC3cpiBQs3JtQpoAHMMaFuCDdbZnonnU",
  "key20": "22FLxnXWXnhz3FwoCpC5UYNC2CSdrPr1YLMRWAq3wKVFhfCazfDfRKJU29yUpgF7XtWwvLbNirDZutB27BoBDkq8",
  "key21": "4Mgi7EUtuSn6uxyur91EmmNp86NaTgP54nRmohV7brKdyKUeATxqsrWjM8SQq2zVKPLEm1SdNdpAoDg7cm3uXbYe",
  "key22": "5yaW1EPPZ4vY3qaTyJNEczAQdvJjmR4ShH5DtGeXgQ6tNRwJbSciSRUmZ2BYWbz3jLixJQR3dDjKDpFFonE9xwn8",
  "key23": "5TP5gXTwMUzvP5z5a6sTBqpnyusfAzxhrFFVSX8ntrfavharykKSESZzQXsh4DFpKFhQLi8YAfbwiD4Aea7YcPqo",
  "key24": "ydUDjr1gBerxCiucn9AhQobBd8fpUqC9CbLMZBUcbvq4LQZgUxeZZgH6ah4d6yLzCzmG6BjQJXZ7dRyEp8BVvDs",
  "key25": "4KGVwWqebSEUpwkRZxwkfGeBKWY7eZ7pczo7rDY7FQkQZs98wnK3oW7nzHpPGVTjJtq2KsigEztf1byv2bMppJBH",
  "key26": "GmfcVmHJovmMVnpK2TKYKD14QHTQJhDWJCd2j2fqNaFtTb3G9E1zRPXeUAwemcFLERaZrHxoSc5AYtEUXoJstHZ",
  "key27": "QnLRAxW8CeZxRXwdUN315aUjAuEkarxhdhaMy3DG4uzwVfhk1S9qPafCGgKnpohVxa1dAixzLvaPSa4YRhJa7A7",
  "key28": "8tcNsvFUAesmzhQRaG4evCvszbicjM7o6MzdqR7orjYCQmARDWWwWiR1WwHAxnMJqWe9GVEjGGSzdLp9RAycgnq",
  "key29": "4oXnYZTh8vej76T4XYU5UjRiWk7ziiqwsw8KbLYgFtHzff2efceLPRLrTcuLCKFp8tQ8CnjTfQjd1P3zPkSCKh5X",
  "key30": "5zxdRYNuTV77CEGQJAawcmqVpmQ8Jn5a6qXwkpyUhaEvCpYrLTbtKUr3pVNbm3p61H6QZeR55WqjPaycJnD8P9D2",
  "key31": "5hL4HDaM38WHoP5Hum1GpDgUgcAX4MVZJ23GYWqekHPGVRdzNzDAYNXKLVUSeNkPzHVjbH8iysmfXhan9Ax26pwT",
  "key32": "5VxG1dnS5qaeS31AbUQpKNs4giXnw6vfr93xgYY8zhjitQezyyE72tSXWFiiygPN7Wb1DB1AjGXbKef3gmYKghDv",
  "key33": "FTHp4YoVpLrKK8pb2YKQNxhcz5dZkfpAdYoDYpSJiHf7zF7u2LFdiSh37YTt5FebkbMYuWjkf5xQpxfXR5JSARA",
  "key34": "5g6p5ohxPLfkMpa6ShyWFVF445J195C142vNKihX1FqnuJsqs2pwWMe57Z1v526dPkbhi91RKtKf1VBZTuorRgNm",
  "key35": "3aevpuv9mKkJ7gpJh5fuW6DvtYMqf1dZSbzHF5CKRoKuDNJkixfUQXA25fGNnuUCmaa6ZbPB6QZBXnUFNvBdD2Si",
  "key36": "4QZe6XZ43K5ezJinudTcTuea9uc4qDDFrJ1Y4JrQQtXXF4RdmyMs7Zg4je18oG3CrNNkjUiwfDjnZM7WUoK3TZ57",
  "key37": "qit1ePMZmSyA2SWdfyg5yfNzXYTqXEncXtaKScqpjyRyo2bTBx7D1JMakayfnFHDya4W8MWynAM1CAZ2WB7yUic",
  "key38": "2ttWKT5W4H6KpsDSiXZe8btS9TJLCGGQXRibFsnhGftBQEZXhkjKGeTPKD2FyxhMcQHSxXgSw3mwULsMUmdZcMtd",
  "key39": "AivV6oxFJXuZJbLxQAHJPirt5FsXRxwaxLVMre5UJ73N3oR8mxMNiSKWVft1KqaureXbyrRMgn3W6nKWEy2koSd",
  "key40": "5enh4vcrjyYLGWA7WFwEP95e8brhyLC8Ciiq85bpHBkqHXH9qHMWJ64LjuBXDXKSVdveAWopSwYzbTCPKBwSZvCY",
  "key41": "4iijeazWGPipvJDsze3W59EApMyFzoW8P6AZcQo71DsjZMken52i9ypApduTgZZ43Hry7xbvKKv6x1QNUa6SKE1e"
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
