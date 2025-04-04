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
    "NaGNB5osMv6QsbxtjyMsHUpy4ge7VDCa4QQuJSdCgJ53mtkr6hmyCgoLc5mbAZuYhJt542e9o2w2jcMD4LWvYGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ixy3k8JDciiR6eBvxr538ADPGnBXQtUVrTyA8sw9DckQ4of9jmeHp1x1nRTibPzHLMVf5UAnPxF1wHBEzTUWeUg",
  "key1": "5KcbQBAesFCo9rdeJDqdVYHxUXRdpEKifM1jprCxcKQPChTJ9qxf1FAtgwDJYqLwAEjTCEP1StPMtV9Mgr5EPXEL",
  "key2": "3rSsNK1nsfUrt32ZFzKCt78XdsiSuj3KhnnKyNQTNThG5MS3HWBV4LAbqhBr2XaA1nRwwNB4MpajRuo4X7vuQRbG",
  "key3": "5nVrguFAqNY1iWywjQo6D4vhjCNrB6hBD5RhURnZfLXcYh5bW9qe3VGPJJUG1GCFJ88nvHUgc8Rbx2Ysj7HoZjU4",
  "key4": "2QdNFZpAdcXELbBHecV2YUaCbgazWcfpew2PXkfriJEqfUGD8rvEyyG8qdcpooXKBRNzCo2Pa3fKNSuKHLp5FmbK",
  "key5": "5gsJ1r3422tsEerEiUZ1V3NRMYUvv7iWJMsLiuFEuirunt79yBgYjmXmHdJfWypGuVyAtjCtJYQoHw7XbjAjdBqT",
  "key6": "23mZf7PyGyvzUzSVnDn48P4TWqcqqBL3rHsKbssnn8nQs841sRM9w2NdDD4Be5jYdUpwCJUUBJa8VXmXCEz9eLA4",
  "key7": "2Jf1cXRajRfAUJ8SQHAuQjPovJ6UF8XpgFJ48CmeAnGFHKFrhKrxfFVDVobUvzQhWYsHYxdnBq9pR2zz45nLfDdH",
  "key8": "2Cjneaay7YRyoC5Zo682eH1UCeYN4zBaGghqy6dBYrQdEfmqzoiJqXuNyX5gzixUqvy5jP3vbMxfYsyVmC7aLB97",
  "key9": "3q4Cq1P4KGpn2BYdNAGmiSV4rrrZRw2fNtk9UbXgNLrDV9wxpWCVH6Ps41Z8SHcPcqHuvUTnn2Kf1T2LjDYigoez",
  "key10": "2wJHxPxv1pMVsjX6c2zDDnoZDwdBcsRWhZMjf6pbvY3JfeMgYwoTznoJNutiWQsGessiGZTbLRaJv2qd9uCtfNJA",
  "key11": "4UcwVgpa8BkyjzDAFUBAxoFt2AUvRwrBXvPWP9avYLAX3cEoTWLWbuGKefgVJpDjVbaZt8jQK9cHkyv5CVBSKbNC",
  "key12": "gkL8B359yLCrF7rrBV3yjWj1sgHEHrTrCAZQ4AoCceMSZuNZUbgLLiWmwjvfCmnvD3NBm2npDS1nK1Hw5LCHco6",
  "key13": "3X8JBogdubwNWqCUfhfmjeVJ9iqaJSJQXKFTbdVTDXc4zsobQa2WboKU1umdMsgbLgpGCGLBwVMBLi4pxMNg2fWp",
  "key14": "3BsLa64PJhjjkDP7iNijDwEWzGBawC54i7x4NUzxQ8CZjQcFDHGrAmtsihHPmumj1Ud8PGtXk679XqGzZnCboESC",
  "key15": "QEmsyYJMkhBzqvXTcMvpYpYk5aq8obPZnYSFfF4YYL2uSng3fehsEYVvuyBbnrrR5jVPrAt4298iMx5MuwzMMxc",
  "key16": "2L1JXxASpADVD8v8Uv7j6bpaG8tABc9Rf4VgrpvS6X7CYjxXpqFHemS7K2K4YDG7sNu3nHWUsT1spXYS5mezwb67",
  "key17": "6u6tys5igFMLuhVo8oKV42sA1ZqCusPsWEA5AfXEF3hefUQKeU1Ew7y8muY6foncgNfwwA9tSpbpHepAqBJv2QT",
  "key18": "KceYdRAkseFarSZgQCNEY3RmtzwGvkBagg9XkTsh5yq72kkt22ed3vNvhiP38S74EooBL5eKkX43HVbPNtCP6XC",
  "key19": "abQMUuTqTNK5BS4KRsy7DdCJyjSBtWjvxtwSsCesjPC3F9Ho4DxZhM2hEcwhcjALb9khVPF9Ajf7HuEH7LFAFST",
  "key20": "65vHWy2RPiGipZZhjsVpKJQow3DU7VJp3RXD3ToqaCuDJr5X6Saqp3oNV1J7eCq8u7isZnHBcb1wzmGcxemsL478",
  "key21": "3XBhZqzJ4D8QU2AWKZicBgtsZiFvskigYA9jHwXjMD3D1KSNMUfmikbKagpbhk4cEdBNNnhUFoXNXtBwzVP95mrU",
  "key22": "2x9JcDLEDvw7rziz5P5tiLkrHTwFPaCoA6R6yxxbonKhDocZDrM5JaTvBbsgjPCYSDq4AEDAKcTKhbEU6D48VW3z",
  "key23": "2h3s9z8gtUUq9pPNk3ThQV1Xh2qJ4kjpXHGzTSaYTULzE5JLuoZBcBdQtEEn2rhpyiwyv8A9Qp544oGWq71ghpVE",
  "key24": "2u8eprspz2Sa7AUNFSsBBxpXEDp7xxXkgZrPL2oy5E6H2v9tbXtxisXD8zS2TmxMwYUgWBzn1e14XxrN9jZ7Qmgx",
  "key25": "66pWAEm3C4mDMwwqDHdFf887WmFu7kSGtRUZaxzyLy1tGc7eHzuJXPTgx856ECD9a7GhvhSkK7u7SY4gox7xGg8F",
  "key26": "4Rf6LLsGAqk6h1BbnoXRKQcakGqKUs5zGYAQNuWDZ73ixfirGMKRG7xxwRrmiz9b867Ju5hmRWz1MSGBwT3J5hhW",
  "key27": "46RNA2odD9h2hiK3NXm61H9g7NjwuZwsrHjRGmLrXF5KyVjrAdtQjZxPJ7MvQwSAsa6Pq1nKghs9U19oyznsCVjc",
  "key28": "41NbkWWWzyPYDNcjLLGfr3jKRHPGd4Ch7dcfpsE4XxarnqZohyvRo96vHoAQaLvhJXSD8oBLz8sZuPfK3HQPvknU"
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
