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
    "3C4CspqkKDqNDDDfXXxGTNNSUTtm9b8hpiypyd2pDs73uRwewsuxzZ8C8gFnESj1mVx2Q5SvLXiZJVvWJvdCXptm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PmhwFLTbLpcissphxg9gWQxFfB6B4c5V959Qf3NHv7Kt953PtP5eUyFiWLa26t9V8EAGwWihKA6ye3mA3jigim8",
  "key1": "5e9Jy763ErVwnSwZdJSdR46q6RhP7tT7nWt44JV8NWJiRJeuzyUGcM7x2noAa6XPC8ehgJ6fGwaTHK7QgFbLJeVF",
  "key2": "4YgFQpmGWcNKWiVKtyiFbbPc4UhNJzN7PpR1nC5hAgF5RiLMTbQzhmGBoBhypQJMTKDeKfsNcEypcr1LgMpCVax6",
  "key3": "3d7BHhgJ1XdpmLBRNysmTcBRYVRbF1HkLQxLL3JkLDN2AoicTnt42cAxQ1nX9wtFWLcpfABDRzdrgDbBHrBo8rFk",
  "key4": "Y6hs9iuSamzT5YuhhLeMZgp98RoDYmvn1ryT9J1wY6bjoZf45vfRJF9DeKJTk7vN63TFEfsK9Yxq6Xgo6VYdQhh",
  "key5": "5x9iE7J2dkqxR8XWKtEVhLgQXZGFX7DbwP69WiYgJHVPJGLAdR9Pymr8YdknXJRhVhBeehPpDBkYCLk3DKuvcS3S",
  "key6": "ddGLJW5uEcS7bqCcPABPrQgt9MJm6edkqUzE8o8L6VY4UdPcQYknZ7mKDXx7PaRpzLgBtEh1Kwr7VA1fE9YQYfa",
  "key7": "4EAfp4BA6f8gayHSXV21SPa13e9guhVJ1Jo8NTy9QacNq6v5vcvTZctjSdDKq5qxMTtrqWR9iMk3U57VEzJZA9hN",
  "key8": "59bzZbCVyS6QAKAQUYxYzSMtiVt1SDaSejwD36SvRkcnK23z6mXVgtoKeYaAe7E7czy72gFxgb6kUZNQzmgZrLxr",
  "key9": "5YrFq3cn1HFrkhGUYN9gebPQJXnG5bj6A4CHTYXu5rmaEqMYhNghFc8uLLpwiBg2sw3qZYkUNH2VBoouWw4ejy6p",
  "key10": "3FF2JYfvh62c9ukVY3wpUoLLmcU6a3uLGDQDwBNKBWatbyn6A8Xhs1mkjJovq1a1qyVNP75tWHAyYWQ8Ek8HCKEC",
  "key11": "3CovCUPMM85c5PMsJgMJn6ZJ9KVZA9y4Z8685k74eRb8LDQ1cJcx5fQCpqtWfX5EgZtULAb6jiV934X48Czd5y4W",
  "key12": "2LLoW6XyCzfiRC7n8XLjmM28C3CR86WKrETsekaACzJdnuQ4km1f52YAimjsdHC8Sq83ehPkbkDBJDqndHHJQyk6",
  "key13": "5qPUdeq6V9kXAKGy6c7tTCpUhVMw8PGapVkVzUzRxxAfe63TUxWpNHBGAzTgMycfXXdbg3LKXifGzLAtTuJbWAtu",
  "key14": "3Eox7j5wcjT8QjauPHZNQezRX4dDEExnogPtruLEK76HhVRPmfSfo99RwL76A7YZcu7aTQmE3UqodtfawmdcUcrj",
  "key15": "3U9yj9p5eYXkvTydQA9f3xY2nCyvKTb8LQRFmqCtMFUg7bPZJmGtA6cUnjR7qKop2bnhF8tyEdiAAM9tv8WdYZ1g",
  "key16": "3uXNtG4Aia7Zxn8b4KLLjkRU6WU6chPkm7eE9bMERrKFthT3LMG84sbpLCNgByzu436cQD5ZoqXfPiRUaV1UQQNw",
  "key17": "4u149CrgfJHXrd7kU5kYEgbeRmjQKo4KXg5UFftdy4RjCyGy2FY5DEjUDHiwWpnUMfzVrigRWJsNJT3fJqQ7W9aY",
  "key18": "5DfTAYYkxpWwHZJJwhBmWMQXvRm2VzLwD9ZRSseqAdpMWUzzzu7xyVYGsvG7G1JNsxSHeMYFEevNLFxjgbBJokH7",
  "key19": "4E3y4964DJ552GgucXxcsdPtJiuWe4x5vVE4vDivWw8qEMsK4QRDk3vFznMYyJ3ZcVj4pokQ9WushftNGr4uFT5H",
  "key20": "26GHcQVzZhNBtWtLvTyR6S8soTRZsJR9Sw24Z24A2RCW8fAY7qfN3bra6m3JrfnZZvpiptvGUSATi3451XTF9dY4",
  "key21": "4tmqsCxKbA62TNmWa7gHk76TtwFF6sezLnMBF3bnhm4MhouqryTBou5NU3TaksGN47mZPqUgrMhrYtHttD3y8Xat",
  "key22": "39iZQZipqBm9w3bLFwnV3nKQgrhcdRfjCfVofxgihJ8WVs5g3gxFM8JaDmxzkc78FumXtKY34XCT5EwKxiYmTTGK",
  "key23": "5FFoqPgHA8YLTyXF2P4dtAZtqznbCpp8KVGQfZ4tam6iLD4tHKCeCjFfwV3UwsFQQ4KK6wLKFqcwBmMAeK4vGD8x",
  "key24": "4RhTWX4V7FiH9U58FnrBaFkKdwPLiw12EztpcNas3D2ZzQSsAKXHjgFR6JpAh1XDLPtHDYVteK3HpcECM5KwE1rA",
  "key25": "3hYD4PZnfAZhpF732157bySHwJ73fL74RsqJBqnoFjmKN9YG5v1Jph3BJ6X22WrhidjcTGmmPuJY9spuv6AjaP2V",
  "key26": "3FAVnVh8aRFzUMCbfgV8kzX3EirX7R73oj4MkgbH7fFNTTcoh2kahox7oeuTy4MZKbsPXRoFwqjU7oXAwetAQoyU",
  "key27": "2HssjcyrwhKjJmByZkFBtddxyrSiJkytbaaF8buK25XXDDZkM7Z9EhvvC7cXYsLtLj9ULmoucDMWxJo5qmnPMwCs",
  "key28": "MDn1f3P42qveN9pDLLPKbUQAjNLQJAyMFafDwRqbRYXxKQCc1RS1LUeDMmrabyXJVMY19kb4dNhtpfbqJic7dyM",
  "key29": "an11iNfUEb2feAdupXnS7EFcqBBr6ooQ8MFe5XX3fBFfTTHvM393tGGz6PQ7q2eSao2yRjhnuQU4nekptHciwow",
  "key30": "34oZyzouJzJzpQiFpedA7c8rRLP6gcuHNKd3CqjbDY88FAuEtCzxFUB88vgZfzBwPsS2Wp3XdqgDCXLX7xRXmhRH",
  "key31": "5AGDQTX7R3BiGAod4h1gAQ93PjzPd8yj6dJKVuzGVgabcPtgWGngq3vAKxLgjM6G5FHxHpXea4mfCeHtpmasGp9A",
  "key32": "5ccCUtPNozrac1v352VcekxGSfjyVq4AyoVNL5bxz3L6RWYDLXHivNAz8Uv9is3im4Hog9ou79vWZ1n4nPrawC7H",
  "key33": "2Rf9XnQfJaphJbgGpfFdt9eakHPfkfSUnPza7mRyGMveZ971bvVdVou1VXh5oUUypzPimLAThAfmQueJDfMEvHG7",
  "key34": "4uTZt12JdinNodsAiYrRDqM6VeKhMUyMoAE4D1tYTZuvYda5juTD7ztKq3faFuAU6p9r36Ggp7YoxvRxsmvXhNbr",
  "key35": "2cPvVrWZjXaABdJCY3vjFfSqQaB8vNpDiN182Bmmgh6eFuc2xci3p5VdfMR4fNUHHV4ZRXdEtGv5bCdvh15uz3PX",
  "key36": "4BZ3YsH48gduakE111ynU4cYEDCEC29aiKB7QZANxufMsAtmKABZrH7ygKR6AFj583cZnTweqTBLcdbWF86bRqB9",
  "key37": "2amDHsx3SLBpKKYN5em4PihNqJ7WcJG1UnA1ik2yRdi7SKG9syFzwhDSK4MLaRuy9iTrAieLFuqGk5WXvuzxcTfr"
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
