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
    "1ZVKMGqFxGbb6gW1KdNm9tCTATYJfq1iSVWZgMVXH7fHbY2YoJfdtqBTTQy2VxJsGcDgEzPcg7SDvvjQB6Ex95j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TmSemxxdDFAgwu2r5G6HT9J65Twf3NdsktbD67pjKjmcNsb7sXaspRgghqNzYSNZEPMJKnAXU2peBPBCK9nN8U2",
  "key1": "3xPtkCHdknrLtPq251rZPs1zvCfvXTaPqD3XEvBKKE9LHX5187GqXzMwoyWXVLfRULdcgVbpF5vjavbGNGBad1i2",
  "key2": "kR9hPTmrmMxJKPNhzdutiZX2Us8RcSPpSEH6UzrbNFY3yFUBTo9gV3KAvoGcv87w55BAZTrUxvxtZVJsLzZqSJQ",
  "key3": "36TMEPswcEzZr3rKo24zRoG7Ys8xBbMHV7k9rNVgZotgQm2g1dK7SgCsikxdssyerwo93E5hirjjuHBHx8gGwvZ4",
  "key4": "4Ftizx8R6LNLQZ8dZEveMr96jYDyTGHr5bJQsJnZmQxc9gSVGgRt7T8E33Y9wfaYz9norzZN2ktEN3nwubMGtbVU",
  "key5": "3UZCdR9nf4NEReraEtMXFgdZEJ28HCckLKWraNStU5rLWE2NQpJtkJTnZjKnYHH6Xr8Zrh6ZFrm8xhRcPVy8rArm",
  "key6": "4eVtwQh5kWBfZhaGdxTzQxKXtTFkWnAExnzVjs5jMHq2Bm5F48rWhDmJaTS2qmJPF6rGxfxo2mPEDZpHKVshGrUd",
  "key7": "5sxbjXLXGYfk6Ad4UfsDJbVT3YqHmmATRi5EjmTtZjVi9MAzakGPCtt59N9rPXN37PsBVFDD8AHh6tw982FdNtoX",
  "key8": "4ctSeNj3wn8TEbRgyyBCk6AiLGjFgvoz5vJ88u1KePGNkqvmUuokAnFHNPG32LRrnVmxmurHGsZ5yUArvhNQSnGK",
  "key9": "2zQ1Gjd59gvycv3uFqGN8Kib131YFLUvXsHqs5eExKFzQVMLShvnpzpV2cvCXtbqMFjo7oZ6ZxuXcgG5bkzjK9sN",
  "key10": "BPdVGmZSrvn2KZ3eEhN6ZVTv5y2dWySjxNPnQR6ZnYN6s5DUgnxtKFbvGRNc5iW8EG8H56pPLk4hGsLpgNuSoZJ",
  "key11": "H4SKEuDxXhJ3p2rhB3H4kieBuLjCreq5wc3B34sUMeUbNaKHZ6N38XhdxhiRvSsqcesTHD1ychAaUu2rYcrgrn9",
  "key12": "2HaMeQPs8CBcyhbxaRDywPbXgJaUz8L3tMjD4EJXUZPsBgncVhSYHeP6eszhp1CAYx7m9WfJgmPY8yi2hxhN3irW",
  "key13": "5qHzi6rWtbpCnawNwHg5LDGyY94tyfBAwAggDbouSV9NYoZqEvfWF34cCatNoppzgTbvPFu2913xxZisPssTDevc",
  "key14": "2ewvvVVEWbENCezaXWuJf1ybEzduAE236v8DbF1seWGpFyE4N7jcEKfLF23kgBqpfQLXXTtSNE31Zqxtzkm72nbR",
  "key15": "3GispCXupET8SGMiiwEbRtYCBiHpjKwHuDh3uNunrgUs1WXYjVJWcW1ttT31JYUBQG9evAq2ihAtx8D56fPoLkxK",
  "key16": "4PDerq1gsoEfDTAyn9LGfxyS39wYXFj6eQjwmQiJ6WSeLppehvuiaRRWF2X2VPHC4ZdFbKinXDr6zmFXUGkYX936",
  "key17": "2AZGGC9QJJKNgYUyEaKd5qyVKxBux6mzAqkKL5qufSaxsxmHkAPd9X1krXujw775b2VYhS8ekNGWAkyJhRaPdDGu",
  "key18": "5141vTQk3HNQeUPphwAs71KddeCAQhJtZkfwdbkHS3QzpPimWoZ57qjyX5a1XVXheL6bSPQB25ipKBkBa3drdXXz",
  "key19": "hJvLEgYAegh7PG2EJD9gvHYwTqraYNMqFZWakRimgG7fAZzEEKQ9Qcpr9LZ17Mn5XJjgzrgKK66rqq2DgMrVb8b",
  "key20": "jRgcoqStKnT6P6mUEV4e9fiZ8EeBmrygtkvCcpDGQVX7pcW8etF9VmUV6mDSMsnqWux2DCaCmyobjxLoYwdnWzs",
  "key21": "3LbQqG3JtK6yaWDz7dxc1pXRapPRo9fYRfpA4rG7in5zJsLPZ6xSyKnkwWdecoDLsYEyQUpKa6Ty1DH6Pn5EAukB",
  "key22": "2XMmCnok8fJYQFZT9R8MrUNucFsYzVVrnVV4qvovGggdWgaGHf1NwGRDL1RW77rhf8NyA3LkT39omwJhQ36epdHo",
  "key23": "5smtQuZpBzGCWfFA8vqP4Dh2GZg6uTmJsEXtWuz5su4nR5YSZVL4Vey2zu3vKn6CwFAEE4jVKHVc8GWuFW871PNG",
  "key24": "62Y4Lv5iKaJVM8EsLiW4rWVEAPoa3jE7WuNcEBEQFaHgdfLtFyCwuYcAXBDD7hGYMxTyBV3fRWow4j7eSSrcKRUf",
  "key25": "5QVF6WPKpEWn8uK8j8cG2kUwfafip3NZk2z81d7SKQWbrEw6GKJNHnrjgd5isMAPUUXCaAp7NpusHjhgsyMmj97i",
  "key26": "24CzqrrRjHvn4Vcq6tAGyZk1jwVrZgMYch2NZAQjRB7HFReQsqhqMyzqa1odVhFtsqxDZk67gQoLe3h7JoYDQcnx",
  "key27": "2cyLpqKg72fLyF2yUzGd9N5XSDWqob7s6Fqc9RuE513dhwxJ6cbcvKX9Gr6BGage1X7iQrr1EqXAHcpF14bHGv22",
  "key28": "3GRmm9L9XPPXNnR23sRgBeTWWvvBRyQyu4jCTF2JpjXWRZodd2iiygkZnoP57e85jYSHX1NTZGUhAntrttZ3vxXR",
  "key29": "3YUFKsUSUrLE83TDDW7e6ee64igrJERgTya6TEhMH9F76c1KRwk612qNggdZnondA4SsgGvoe9ev6fiFQEuF46es",
  "key30": "31hzGMEmJSHDCsZEZinXMfq3Ub4EGDEpPWGXHht4wyToDZjnNS1FMdxUDgZ2A2nT4cpaXwg8KQYXWtMVuF3AotwL"
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
