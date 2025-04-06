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
    "4mmuGSv2F51qTHspDL7HkE6uQTZ8WdEjKp1cZQ9h4Yq3gd6onEfq4icAYsRpybSgVkZ7e68vAW3ZPgLms6xY4qd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tB5zdjpnte4oVeADoRXxp1xGua92QMHkQnqrVK7hsqWLTTGGohS5tD8xXEBbwqreVGJWkuv4mUH7r9FRFPrhhiC",
  "key1": "2XuAQmQAC4k6KxrnQriu8WFMyZFyp5HYz7N3L8gjt8pZt8E6nkTNuxSq3ER3156hh6R4ndfCpbsPN9Qs2aUsHqhX",
  "key2": "3TscL2GbZTQ7xsLYX3dk6EUpGMRhJGz1KKX3WfsDyR9n4x5kAP8CHiaa4bquS6CBuGmPknxxPAZLnHP4sEroNiV5",
  "key3": "4cHcmQ8RT9iQoY7AfcN2oR2d5V4ubiHDnyfecHLJrTbuKVgMmFxoCHVGS4gGyhiEJQmfe56V37hK7SLJqTTE7eA3",
  "key4": "Ag3Nh5nL32FKwybcdwxhw69uJdb8uSZzZStHCMY2v3nrdHYTxo9HRbMYJ6NJxt7BVepfxUNY6fnqdEP3JGvAhCr",
  "key5": "3ejr4nYaU3CB8oAgQi5n5ebGBMUzhrtgPARbDoAv9nad8g84nPttCUD8F1TRKpfQMpCgrPiateqKTaBUGNETqiqZ",
  "key6": "4Cj4UYLBMS1oQvSbYgi4NdYgwLS6m6cVac8tsJsuUbnrUM23pTaDwm4VbTm7dCKHQKrfdtJkzsrrk3kKk3npzqx4",
  "key7": "5H9UDvBDu4wzXPLnEM98EXf3HAXSr5RacTHdGFX29Uh84Tn1yUFPagpNaqtbB7CdHEZbw52MkgM9NmY6sxNLsVq8",
  "key8": "5XDWNVTUMXowq1y1hwBQmEXBQEkaLSznKNFnyCEYRPiukeoM3LaxbwZpoUrsphnK8HqYsNW9DVTzKNejzsWAMS81",
  "key9": "3EievSYwaE9RaBzzYffD8qsCYLnB45CYhZeBw6isTZhmJq8pfjPXeys2YXFApzwuSGsXQrUJ7a4AJn82Rx1WKfjp",
  "key10": "2qiFWm4x1TXWNChyz5S7WyVPdp8FkbmEz1FT4VCJaF7UA4WhZRCBfK9qoXUBoCgXYUniBXnELFRPVE4yL4vKNRA9",
  "key11": "5mat8u3KUSrU4Lf1aZ8JibsDpmQ6fckA5rMJLWzidAmUBrD73WQeFF67GpFr1PimMVebL3nb7mDZCBftpTSduZC9",
  "key12": "5P76nuTnASKTFoH1NT8fHZpmxYvT6tSycDNCunCatBT3M5nbK1Nomxh2cGeSM7wiXudYbFexSymWbB99YpJiqHir",
  "key13": "3Hcbs1rhREj7F3jMwhXg4TtQhejxLhzY8sACc3MvtLWz5F5eSKAuYyRDeHPphW2mXqVWuiKo1nb5M92Yo6mtgysc",
  "key14": "BwPjMfNaiJ8mpeakdrKM99VSDzG99HbmJgEJH6UxyhaA5eFj14EeFk8jM5Rvesrs8jeRFXAt2Y6Gw6wDezjtWQ1",
  "key15": "9QfjXhELoJzBuKS4A1vqh9J8MB6GtRSFy4ao3GUgXprCsLvEiTKtUKZXdUrDQudyewXgsR4eeGhHtKW1nPMYLam",
  "key16": "4M8udCYE4NgTCYicLkE31E54x1Kqjix8s8TBsQdxEL6tm4hnJ8SdvnywkuFYu1UNcSMk8y5iBhZkkvL9uz79ZPgx",
  "key17": "nuuz5eAnHEkRc9N2Ym8EzLRrqUjYpQ9ha2oSd7Y5w8PJfnfVzpYvYHfXAQGWjsZjaivrtL6esCoZDR4XnN8Rf35",
  "key18": "2iYCJEw1L1RyLhwD5U5jzqbojPSDwohV6eoA9mikuW6z9WtY12jy7bjfGJMNnRUBBeiEw3buGCnw2BBdSWKVWW9E",
  "key19": "5qVLTnFgAy4UeQJBVxKMfRPjV6pneX7AExBtmofDTdQyKLBp3srcrnXnvTLrUB31hGNsd2oosNwGRuXtY5fqQt5A",
  "key20": "5nvtKx1cgvucqprPT5djW5iKvJqq91LRypcSMUtzfKSoDVbkcS7yBQqeCHSppniu7jXWWHuj1dFgWBg7Yu9kmkoN",
  "key21": "5f4c14KyuWjVtRNCFwRMTH9LKejE27tEoYvxNcv6f7jemtH4qufqaBsPjWn88CRb9cHiEyBzujyNwdxzyQjxCF55",
  "key22": "5mBg9qpvoZphzVb7SUwTkkrDMToJ8ZVtqXxorwSht8ZaGWr2huZnmUvvGX3QeaBiqL8ZjFDJiPgBbdTLe8bk6kR9",
  "key23": "3oZGz6vKAQwWuiFiw43J336AfKQC4dWiyYooABPHJEKtwaRskLzStSaYXjhYyRbDTejtzU59FPjyJhnPWq1mL9jA",
  "key24": "2h1pgye3LseiM1gFNd7RXWCY9tkEBCN2iWJM2xCi5CPLLAdNKQqw47d6P6A5gKHBitDrmsu2M8yVF9SurncdXHSb",
  "key25": "ufh57rhdsuAfdRYsf47zUboy9J2rpi4Vx8VbYoQvJfXJQPFfGrdip3EUPqoHG2ULhkcYqKJUaFG3B81zpoPnbQz",
  "key26": "cXsKyPedoyb8g5nr7i2AqZ4uXtSwgwHYkU22AaZ9CduMUF7rX8L4JFNpYuremgASQMGDXetzy8caweEMwJf1Kfq",
  "key27": "R7U5TcSsnCSdTHw9mqFxNuv9QJ3a1B9n52Tz7HGY1kUmZYusWFFbXe16qsezKSr2jafdf3CzWGnXTb4R32QpNQS",
  "key28": "52zQtdA8dohm4ML9ESMPwTEQZYMeFZv4UzaZPVaggfjJFAFZvV2gXMoLhJ3am61xrZfmocCXrVGasNQirzWQGbxX",
  "key29": "4RDan74SBv4FEE37Su1SfHdoMnEuYdgAmeLAxhMV288MoLxgn5CapcGEFEEzeeKEQMKXNCAurb8VMRxhTWHKQpWi",
  "key30": "4Q6ArNeQvxbGtNQLgXbvwBCYtyWu6X4MKJMXBKDbgsAtBKxLhKQivEkA18jAoZb6EqT5QncrXBpHELYSDqmtbexX",
  "key31": "22g9qdG2FhogP6bWLx4ScYkNYP8pcpXJieg8yVzAzxUGmSvNNoi75BuAqHAhx4Fm7dawnB5bX5V39Xzq9jmpCNon",
  "key32": "4aXXBgCtazEGCKf7wi5tmMbkWJZfvdrqrg8EqHFE4RMRVs2xrprM1tAWPGNm4sTJ2Nz1HReukxU6Uf5eheiFTvFm",
  "key33": "3Ed8PttsiMiXR5RSFbToB8WPPFiEuMEWg34KSiJvuKGMfYRxTf5dWb9S59LCcscbNKvnJgfXQ5PpN4PwH2mArvYY",
  "key34": "23PRjgMMJcwPYMECHiFwsZJjRdS3cvYvpsaK3ft89CZ4VuCmEFn72uJ7U2t8WHnTEhdXXyoU2K3bPCzY9EmJFUeq",
  "key35": "5SZdf9BX3qLUHDBQwGUiHQP65joZaUd79oVCSnB9rYKpNffm1pqn2xBp5nNE2FmxLLH8FJzurGzaWmSAg5UKyWot",
  "key36": "56Ep44xEEqrUmXLgT13hVRTimFk1fvPcLbfNPxGw6hFQ7ZgsyvQ6WJ3Nrm5k4r15duJtqTeRg44FYrbhyajPhZPD",
  "key37": "51SWXQYu8gi74zSBKx7TeAKVkF4kSbfWfEqKunoh2UDhacwAn8UxhgKf3WKVSxdGmk6bDLGbXdaW9wNJSFMTsSKB",
  "key38": "4kJmqMPTatAAk3yq6AoGQ82JwFSABjkecVSo4qispjNMDMixiSTEAT3PrQqguPwTt6an8QfEBAWMraSPZi7DntJw",
  "key39": "669U7DY34WhiGwmMthMgRy8new4gCsYSERzgPJnqVnpigreXHd1A7ewQ7uhELxg3ox7ezuqznM2MsUcc9YiwzhnY",
  "key40": "4mmZy4rciKM8WsBxVkpZCuYAevFBHqmrNKQ9uAVYA9K9h7yGm32nEJdoHCGfz2uWgobxFfn6KNd9uoS6xQ2h62rE",
  "key41": "4wnPnkN3vudW9NEUC5YwZQPV1cBEnAcrHqWDBcbDY6mKeDVU3CuupjbJbM1CwvVQbHkuFhqFahXt3fNFgkPLD6SK",
  "key42": "5B4bEmDBh7akhqSwFECjD3hmbSXNBcBrkDZX6gUGbexkMjXY7SdQcRMNYwdf6BrbRDvbsZnSpQp31yGnUVym1KA1",
  "key43": "5hv3u2N4DgRmMRHQrr4wu8N2DbJqgkDEy3HtzGyf3o9SmDXz9DAyMxncqyBhSHhDNpysh6m71PvppoCnxMQWEDEf",
  "key44": "mLH91uiLg9wftHJRJc1tuQAhY1k8TwNcPTQjknQiUtZoTwoQc7NyVzgYhxt78nq4RxkJWGKKkdwH3jTMDhM9Lvg",
  "key45": "28uLgzNiyv3UZQz5Pfegj16bkhBYBpA6injX15KxgnUrNENjFo2kvAzHmW67kvVexHcvu7t5vp9N3i1dxEEhfMm9"
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
