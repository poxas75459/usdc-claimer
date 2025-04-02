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
    "2Ef3pdrsqmnJAqzqAP8MyUq5DBryKc8tGcShvDa5oVJDULHJuLdNFUxVv8MBeEVjAMFUcMnQQJ4LP1k1Hw3o1ZRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YQMwe4bPQwrwW7Lm9j38YY96rxViHfG141o8CktWH9ZzNVFze38v6xjAawxpdzF96e76renKCyBEJUiagcj9aBd",
  "key1": "3ojAQ5bJSmT16oA6zqt6km9BuY5RLRCXuTxWSm9MAD1y9DvHnpx7BTHNehnb7khNSKkaYeTNpRejkjuVpo7GE51Q",
  "key2": "MRZ5iWySc4wzW2Fvzks5pGk9ubuXJDG4apZF4dvAhTxE7EmsGTpJJxgVVer9Cve5n7Y69PL6JqKxQ6Di3NhLAPy",
  "key3": "5cKK2avCGFgj1vRLNXcBqaYJMHGuwN5AZhGDqNJ2LzGKiUw7TZuxHbtrGZbzq5xATeaz13mAQ15WbHpK3gassegx",
  "key4": "5m8EpUYyUnmEhfXKadFi2FsVt3tiXHkzj2u5yXhNQbbKTZxEEkQPE6dohEJXgouAWWcisEsZXW1YnCRcBsU2P7t7",
  "key5": "2LqYAsdy8BQ6p7Cky5CKaLKg16PxgmB8YEAZfm5w7rBNmBCy5HyJq69MXr35UrNDrFH9hLJA1jWuzhToZnVoJAEg",
  "key6": "27f4rL6ngZGaaEy9LXL9qTWG2j7dwbWkGaBKDdjjDoSyQ2mK4m3QQZtv4u1JgNWwYWjsumMx5pZsSNmjW8u9mRJU",
  "key7": "4SqArRgQYeYVefNFjjDA31qenFgBQsFZiQ16tQFUihjNpQ4zGWApZaWVkgEZoDBcR3NrweyRZemtRwdrfjyTAB8o",
  "key8": "5sDQPRuRLv9TGLt6ggGnyDy43WJJnZktuRESUjcsatsDZMhiWbmSdK9QekD5YzxpF6Lv64YvJS53WQmBqZZauXLJ",
  "key9": "3FQ6HcRpVP6vBK1aUUe4uctXpevJAiJm3K3KGFQfLBgmqffuYAtvNt8ZFDhsF6b4eX8eXRRMuijwzBk8na5nQSjY",
  "key10": "5y4FB7E683MgcGjuJHZxUiwVifPBAmMVho8st84CrrqKk154uxqS4PoC6187xLtV1mcigsNSbecphpaKWksUv3Y9",
  "key11": "3bik8vzj5U33JCm5aNdZKzpU2U7bARWnB7DBY3TSLWCnMZ1jcS9Ck9FXtUjBgWvDnW6Y587ybbYzCgDPSX9xkJ8q",
  "key12": "2DVFDwQdvcdvWH12VG1DS8ciKDrFrdr59ZtxJ7K5WAgqdaRnsdZ2y3QcLrF1rzS1wyLh1e72paYkiDXCMUbQ7kPc",
  "key13": "4iQ6cezTvjuMvoCjjQVgYQCvx6ErU2B8vpNF2QNqnnEr1wvFURa3jVEATKqyw5eSna7k9DFBiY3FA9v7bKHjVEze",
  "key14": "4sK33teJVgjGoRLhpcfLTqSGH8YxE7f1WrodjsX7vpnjcn3aUikxxGhVAtxK8gaZ9FRr9vCthVArRYx9Jvt9RBF9",
  "key15": "28Jki3o5kJ5hLhc51iPRj7jZB8dXcz6G3odFqJzpSXXNaxhRaoC4rGzww3UePwUGQw95ZVZEVUEQLxiavrCZXnhD",
  "key16": "FSQQeaThP5VMf5GdjV8r4Vi8ppM8kro3V2sREc5XcAAL4THrFG8vjhtYiPBvff18vKiZPqtDjPmbLyYQfwJWs23",
  "key17": "4eoc1MREWzzLN3P9fgcLCjZA8MXwfK5pRVSk5bcCVeW9XMmH6JLktAdsGxhE8yvyLMxh4y2vmszF8W5B4Gw75Kcs",
  "key18": "2TevgiBiK8sLap6X4hbi4L1Enefd5yvQdFa85wHuLxeBViN38bbBCF6WTWqugMbrtmnBKGqD2VPrAQTMDb3rKUg4",
  "key19": "2KJgcoDSyWgs9NTeCfCTxSncgurkv6DZgfbexqe3Bp4C2Leap2jB1XcduGwUGh41vxzZfE6aUDzfdu5iQ3ogqawz",
  "key20": "3B7o4JxQoHTkfti4JecfMY7jzQ2KVGcqejNa7ApbbGPmBTCirenf7bDw8HrawnrXzsX2AF2tMpTvNgNju6Jjjhqu",
  "key21": "3jTaKfQh9TzKGWvNCsE6Ai8VgL4TPUxvRSGTsLKo6BGF6RrEefotmbuujy5Qqn8AuKf6xUhgMZxrZ8vzXQB5LTKb",
  "key22": "5yfqiQR7YHEKxd92KayrE1iokvYHiensZdTR4N7XZhqdsyUczgJuAWAnGGTKp5vDhqJecvGFcHHFv6XzPsTtDCGK",
  "key23": "5SMWo2hVRrsJ1jntJRZoXWCpSQQhM14FGLjMRUMmo6wwbo1yTptmwwWo25ut6mXph5RQ1SU7CPBDFrWfiFEdUcBu",
  "key24": "rvmGH9xPZbyoQHTozwr5ZPi4syMmebtkiQzSvdXzjz6U7JRXPELZW6qpr7rR9CkwjSrssu1R81Y2umXZu2bQseH",
  "key25": "36AcjwW5CeqLekqMcQ69Y3h8ZWSWYSrZf91bZDC1qgTWJ2fQrJ7TrhMxRUArVAe9FbiVmpxpwT7CattdQWwmqXFm",
  "key26": "4Fct8ufFvM3xcBi6bdbHm2EeHDnzq7xzb1crYq4395P1HvSsDvj41eV4sTLJCapRqZNNk3UMotUK2U55Kx6qNfHp",
  "key27": "56sUC4ziGeo2jZhgag3nphYtx7bH8Dn5eVYmCUaoreGJYkEER7nQ5GFvDUZo7aCQ5sFCdMz5nyadfFX9FX5huhD6",
  "key28": "3rC7fXKVaDVc3EjHABYHkjzLGH2ZUiWGrTNppag89dATd4ESDm2PwimPCt442NuhoGGFqmnB4jWHd5GMwC2mw4rn"
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
