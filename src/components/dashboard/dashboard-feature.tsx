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
    "3YyBEMusygs3wqKuJuGK5nZahVTHb5WXDGzTrfbTw1kGDsnRPYEiV9MmDoA7kbf82LgzWvZ5YGaSHrYibhSz1Pyx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4smgYjEBV5RHrVxTn7k2jRbWRZsfFBLLsQaqjdbJJ8iJ2jQc2EQzJfdhBwCHsiqbsnnVnzMvyvwSj64EDLyhxLar",
  "key1": "4ST3JBuXjzb6xxqgvZkU7U8Kf6aG8Tk6KDRkjWrwyKVZunQYT3H8FpUa1W7R5vKqMpmCM2V1kxU8NK7nEMZ15rXQ",
  "key2": "2v7UPrzD1hWmBsUV1oQmtDnZozP5NgJLsKGBF4y31SZPcAmifGXRe4Y1yUxkJV4fMdjeRaNrTvYzpuaTPkTNmjpm",
  "key3": "2GywFvBC6vS7yaGj8ZHnPe77nfvH4sDCrJRZRdnp1rGgZGcvi4N55zswqVbVfucnfc3YZ6xNv9yuXis9TtAygHTE",
  "key4": "5fkAycUvKSYpyLKEiAPSkzf9mxgHUYkztrb2wpL5gZZiGJv7MRdYzptTa1brJiCf1wRaQ49HRbNUwLYMYm95PriU",
  "key5": "4hnYpPZ3TKAfbFRMNz1KQPRuyPpEWMHFKEiGbwbZz4TmGYePLnFTk8RsfYurjTZ3F1Pm7Edjthi1mrhDidVMSdW8",
  "key6": "3Uojqk7qJiR8dnB4A8mM8HWPvdxpy6RiviuD9JuMG6yKXmxnns9D1U5kTGP8d1vHngRETjxCfRRCUaSsGT8bqyFX",
  "key7": "5qT6PDb1se2qrnTxQBRUn1PJinQaR9VxpsrwjB5xRpWnSNZyWcWX5Lezo3gJk9awd1p3SSZB7TzwW5MTzyjrHNNJ",
  "key8": "3BRkD4tB8So7kQwrewdvfKuee9jkZWUyAJE3uuoeER3aKm5neUkTJX4uAUzA1ujy7qgXcJTRsv6DEyNdEwZnMoUL",
  "key9": "2WQ39n6GoPhDfbdMiTopwTAQgNPvywcBKN6RrXpTq5cSM3LBSEWmPsDNkLnbzMfKLHds4X7AgoQWW5ZfyqTWXsj9",
  "key10": "4oZTss38r3fET67dnf6NpgJqVHAhjxYTEXaPfXcCubvaUmoS5fxjLKbHZavcmLnWEaQWXfQk9YJkApUYD59igwjd",
  "key11": "5tnLqSptfynJaVXsr6YidzJHzCrr11u1qB6ppHdkeob2MmucqvVYR42K89dh4JQKULhiYKaQeVwLQTpQSZNWcDAQ",
  "key12": "45vJmQYdEi6GVnmZxS8T1K3VKysC6PsypWaeeKAD75TF2assUPCsMYJJAy81abG8AfaQYRTrfXbnEJUEPTVB2L6j",
  "key13": "wAwZDi2xJFdnkCPvcdMDRDiAQ9BVNXfGnzfxMMvxx8dpqq1rbSpACiy4FSzzeLc6t4b2FS4djF6JQQBaPuSe5bT",
  "key14": "2dGdALbmnh2GvyHxSZ3xUcCf7oGBF9B3MmHtGs7iPx5WetdRc7TYcmj6WpojMbqCHxefuNsG7J1x4RoogzLZAy1w",
  "key15": "2mebLyqYpgxG8Y2GDW3XLaPVX4eztGyairAHPgmHWB9uUXBNZi3V89FiJQ3xQMT7okXHMDCNEDrq6MprvETvgoZ8",
  "key16": "3N2fJAujHmywZRLyubAct4Q8tK6S7CwkXabqu6xjrJ7o6cifPg5MrQ7UYC3U7t65RPBXg8Gp4daYoTs6r3WAAyqE",
  "key17": "28wNEaxXsr2it2RJZFB7yKuKajbW6f3bhSg1ZcFtqwUbPKRBFpn2q16vvJVLUnvwVZqwk8qxKTJVHVjAAT9nirSq",
  "key18": "3UXMqYiKXMeSNW8JSYbmQmvM6r4rDyDsbD4wTrvnZaYRpKzvLvDdLgTwsBHw3t3yW48hbwvNVGgsDYvSzFdix37G",
  "key19": "NCJsMpcwy1ZmzGyPuHbqi2rBjM9FXEPt7sQRNKFPiFxfS7ma75UrT9jBV5c5UTeBdxtndEmoR6CdC6vaC4uMDEk",
  "key20": "2dLZ8F8oWcpnfaC6kta4KXtxYfRD7VoLVzoHFRDYPaJy9nj3Tf797HqVRTA77PimNVVQCtSjB5CzCJmprGXbL6wK",
  "key21": "4rSG9i3uTntFdAkT2dKirbqnD6p2hHZYHZCzuHUwE3ztm9DfU34xv7SWdfgaJd4xLLwBpCfsipnUbPT65VU8G4Bi",
  "key22": "d7L7j83h5BQrKNLNZGJ7FMZBqNGBtdpdMdSEnab9LTamMvLMkdXt122BfGnwScTwdz3zos4q4da6GEWSbrmx4vZ",
  "key23": "4WVLVTf6nQPgpyW9waBayB1CBA2bhxaoCWvaSnPK2DBbxVxi8aF9AdJWPDpYuWwqyPLpJnxfwDcqjD1tQhESU2W4",
  "key24": "3jLSmJfF5VHEK3dDF1FELwwZ1AXfDpdF825uewXYXy6hzG3wMveZMKkx2BJV26wXdL4KQgK5CcKGWtsF9bEiieJJ",
  "key25": "tbdLrWZ9b8WuL6XcGDUzWo3MwsU7LG7YM19HFE6VmiSEsFJJLj8UzE7sRqcRxBbwHA8sRi68PV6qKZCgQTQf8hm",
  "key26": "2XvuMdU8JvEKJZ7pE3t9zpWnahNgrHhHNR1ygWDAZwg4h7UHL885ZUYahDabCy1UKRzLrW3tCWKLvwQDGunS7Kt",
  "key27": "25zzarxmHr2zmGB8twTsALizfNi2fRUGHagtHXX8hw7RKc7W2dwsHQPdrD1KaFJGo2MyCkvMS4bisLA8VW6DH3iN",
  "key28": "5tFB1gayVEGw9JSYFH6dfBf1hnz3Ki3u8uRh3Qe1GHuKDUBAPD2G433qt4YegrQUcJKbGHXcoxMFN9mNuKmV25mt",
  "key29": "2fyoeTGQD8iYHen9SQJoLBfKuuYpdmTyFZgq11e8TuAggEvr8FGFrPxb9RjoKxVd6D14jf5otEMCxTfx9SveVGJV",
  "key30": "4UjZcXxabqySdsNByZdR5yyem3voAzWQ3zLdf7kfRrev2gA4RBA6qfDpWYagiuaHLoomq3eMpzSRUbVKCKAvMhvY",
  "key31": "3MVa9ik9Q7nMfKj1bBAt5um7Z5KqLY2w5vLZjvNB99XiPwKcGoffBK6n9KvgBUzS4AApLo5HWWZ92cvErEkAjmrW",
  "key32": "2Hgv1x5CudWebjrxSYyjpQr6WG9vB1KYcJmvwHDG9i2mk9myd2hrr21kmRTgUjLTJondqWNmqRDBByBDja3GRB2Q",
  "key33": "44gtWCKHSjA1AVdiCJ7Z3joSY4ecNJ6Xno3FW9F7FjSgXgLdembBcMSoHtt3D9KLsKxM61G9GcNe2ZgM6UuiS8XV"
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
