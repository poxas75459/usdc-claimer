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
    "29KMp45dGUj16ji9zMaaCfzxCYG1mpRSf77ZskhmexJyuu3tvdRPacJjHF5zVKNM2fvaBAVSKAAYQTkDYDRBerUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oAvsa4GYExxUscvfQCwL9uZDHX8skseyDTnuKLCrXHLFuv1pbxPuKFgXK6G3KJqgRBfTYtBcGoLbp91X6a9VL9z",
  "key1": "61BCsBzuZNztZNvYPWZTWCtggsYvfxsf8kdT2CU4H5UqjdvFNssEydASWtCXbuJNsJb5r3wyTNyTXF2kTfUsEVLH",
  "key2": "1Y3cnUjZURV7XnfyhVJsE43DsSw5p8tcxXeVufyBbBdTHtV4Y9w1LdN934t4DRaHHTKLfvpVgvuZdL5xhBkBppB",
  "key3": "2XgA7vxdJinhKC5LqRdihc1CESm6BhnFY1PuVm2BACA4Fykv7XHKa7Qi9p1LzqYABMFsZDTRxTUZYDEk88efjviY",
  "key4": "3P1W86USFeqrRqTRgzvXrNMrZeemsvvCXTHv99FAhEe1YRJP387CkvBtVdHHghxKvpuJhjXkkDH4XbXEmVJktZcL",
  "key5": "n8yN748fKoo6xi5fHCxVtbCpDDubAqcGQNPpySWLLK6KAhmVXgzassN4JQsUd51XJsvXYFSKRM5q9Rt6K1sbEDC",
  "key6": "2E9n3mn4JnfVn3xNRh4E84S8JdEaZbo9VZsReBFnv43d1DAtibkcKRi6Qa7SkBMnYE27okP1LF4EPLVgmBWoxErw",
  "key7": "3nh6eWFoHETQvbz7jSJwq4NMMYTBY3LeVug8c1Z6zWpCGkmS8LqpRAkcgMX4VHwYpDNdbHnUP9BaaUfQw3dWF5iG",
  "key8": "k8WXLN8hza5Uqy1nH6RAxdjsFCxB8mrY5Wg5PgmAFfaGQWPaf6QtiFkWJSavU9UYAcg1TCXyjE47siuKa4zJLjA",
  "key9": "3R2jrvBtZUBpK4NbtZ7QgRjkWtCF9qVhm4jTpmdcTZh4uevhME3aJ3qb2zUyveDtLBYrDEdBxzzqvnyvCcgE5VnV",
  "key10": "3cHfBY7SzagayYUCqDQxYVLeS5akPU5XwQnw1uj2XLYa1z9keiX2Mw9BQYy64znMwXiVoFy5x1LW8yjnV5inMfwM",
  "key11": "2P8JpyaE7rTFqHgq8qYrhirCn28yACjnaRHfVqfm6J2cEYVKm41waDk5TgcvjZMnwamGPLr543AEszRSckt4vUQN",
  "key12": "5zN9wQzRQ51qvugUEUvzZVMcTekaqyC1sZJ4qsxyL7f4EwaRCNhBo3CjRLagnsCsXRnaDn8XKS495W9EsVmT8JtE",
  "key13": "425j8rr3q5KmEQJTWGnL8GVJMZ5R8hQ3Kn9gkrXkFAjgfvsWWvraAAGDwRDcKinT3bjCZ4kmU12FDnreJ3rrEsAT",
  "key14": "4RM4FsVzFZgEbbtKdbEP6smeNQVwgTE6qWS6Abvj8iVScq6jM4A1pGzWD3QDmFvMbr95GYfS2YYHYWpkoRxws2ub",
  "key15": "3HKPxqfrvAkFDRYpdGKEZuhTvoX7nSfnBKxUX7JeCYpbsXs8XhNXfEbr4sr9TCoKcKuXLS8rnuqHwRY2WizQUWs6",
  "key16": "3Z8ueMr3zUjN1qkzjmQTT7VbStMusyGhTfWws9FtSqr3LZLsuQN8JVsFQGd9yRJdPvPPUFUwMWKgiRKKQHe27ywQ",
  "key17": "3mJF4MeK7WkBYnaMXMYsE9YEjUpsYUBzwTWhh4PJvSRMgnhuxQfEEbycjRHG8SiATRfLmPoXkq7Y83Rm5YUyv5En",
  "key18": "uqtKf1cqzEZK5NS6jrdrqYjnGfRxdU1nUhtPVaLLSqEXyXKcfYyxNFA8Yf8TCiiLXsLq4c9HfXFNdQBzhZV7LSX",
  "key19": "GBojzEAtq5EoXp7eW7wAjJ62P7xQY4Zp3F8k3zovWnS88SjaVU1V6kgTUH2t9o4wuSBD77fhfU1FA12WrrmVJCg",
  "key20": "5LdpjDpwxsajJJVKfmxyJfpjosKokZg3j9QwYm2yPDNN4GVGTEVKiqunMSTJ8t8U49yXpgN1Q49maidZTgVH135G",
  "key21": "59LHfJcR1Ctm1jNLagS3FHP5oBWrTVHFb2TMGTzozE4ignLHtWy3KNPT7AkuAxkjZpcfXdomKFAHrAMYpMaU3vjX",
  "key22": "8fRjKnzuxcdtQcqGkYEfbu5HHsjout1a1pAMqExktMSUL1FKQigjVDN4pVDtQLfCxuMNWEYjk1a12cPuDU1n8Dg",
  "key23": "3aHH9hUkSS2SF6Jv2girvVw1Z67iKo4npjMkpDNix421dnqGJS3sXcugRuAYd54jMPBxALSxfF5szSe7ot4q62rA",
  "key24": "5Ruax5oXQT9zrKrxzXBTDiMT36CTL9Dwsk3AGbRtRoqWUL2jWhAtNEURrzQdCLoUyH6pXr3dd95qmS7reEaWM62a",
  "key25": "TiR7YiXRcKiZgy645sBA6qwgsxSxwch4EbkexQyYzvQvfhXtDuaXno7rqVmq4XSXEr8eSqfoGHYE7tuks9fyjk8",
  "key26": "5g4D9VC5W3pQb9xkfim4pT9mRCEwLW75YfKhDE89eoiB41zfaLxyKXZhRCszXm3mFuAHCdQnvk8NPoHnhY9UxnVs",
  "key27": "GDpkMJTaizQW1NVJNrzFAFNDBwqnpcSuqD6fUdbNbqUA712xYYY2u3QgkXzcEgBRJL1Ckn7VJ3XmU6kaKqMeUon",
  "key28": "2isg2UmY4Hp7C22khYvoi2B38JXk1zW2FhZc3vbA3MWTscuqus89qzE6XfZfHoA1anpikNAHWiPJAGVVaMoFHKZq",
  "key29": "49qLiHfsoVjxGvNJT27b2aaqoeCyDyLdG2teRfwmkDdPiGC6zomr6NUykjF3ro4f5ETeGQ7aAmAy8T4nQ6JAMxVT",
  "key30": "2UhGewmkByozhhUuQRXFyJ8JMFc1kjRR8LftvkaRT4Kq72oND8R2DtvCFwQpZSq6yLwgKa19Yn8jkZqFWtJoJWka",
  "key31": "4w7kifJ1KELeUHcReP7wYx39awE6YoG3uMh2BZ4mSX7gum9Z1YACXXkThNvhNxCbMMT72BRdRz7LgjwNgCu6ztEY",
  "key32": "5xB9BRm5cWDrEnb4UkGY7muZWjaSegynzXWpTbaJG2VeHFSWoi5mkdufmuhvfLg76yfBoxXrNh7cSXjJNcS3xLNz",
  "key33": "5FeZ75XiBVy38vSpiQtWJ276LUYzE2ignGpK7N6sEVt7sYrKJFmszrwLkbAyBcHSxiXHeaVnXZu7WeDsd8HmFnet",
  "key34": "1m1q72CqZk8SGjkRUyatM33h271J25m3YK81r6KEbQy1W81dMhBkvhzfLnRbmuocFzzgBXVUeAUe82K2v3QUytx",
  "key35": "3NEUG17EuPqdjk32giybfa7oKbgqyQY5AhWnFZyvC5pwtjoTCw3yr7z1Zxn31qPM3pqgodNoc6qPHAiZUC7fmxy8",
  "key36": "4XRBK5GaJmhZfRfNBAGAd3ZUZyyEmFLgHaWH4qk4w1aLnZjd6i2LdMzcrVUcum4YP5dupU2hXNEe7FuXpjedjiUT",
  "key37": "63wY9mLDFjtx2ss6D2AGnJR76JfP83Qxty5UUoivdZHmeVWLmSiFdHqH3GsXR6jB8H6ftD5XXhLBCgqja1a5mnsa",
  "key38": "5R75azoGtB4QytXxw6evB4oSoGtwSk4P6Tn1NS4C8oecDMt3Yz7MW2dwe2bEp1GbTRvtVr51CAuMKuZSwNht5hTY",
  "key39": "5TujCBXZSdGxsVUesLJTGgtt5KSEhEeZXpQkaNQxbxvS7VTigh9uJ54MVT6ikEaTuJMYJXjciwDbvTC4r4HEBPNe",
  "key40": "2pomZkD6VTk8jxm4qU7Hbro9LbD6r3uDPqQtUd8rQTGMFgEuBquoyYPQNGeBAv1He1ixCg2yLoj8bvDMFZxgYTyR",
  "key41": "5T4MHQmHuproFmr1dh91PERtTPZx437xSt4CUzSxbHURo1QxmEFmUQh5Pt5tisXjmMBKGFPtV24r7dkLuBcC3a7p",
  "key42": "29VJWjxXvMvE3dsyBPHZtFPApuWTDNiD8ouf9y7oyfRbLevKDBS4MV1D4Ag449ehpJvvBb46vosQwyoxot5eTtck",
  "key43": "2d9micD2F8CEBvEdQNMHssZuXoAQKqv42tq4ZX83sE8VcFt3tfJxPvjtmZUfYpbsShgyUYVQPEN7MA5tgEUTAJVp",
  "key44": "HXk21ftxe8oHcHzvQFrGtTFuZ1NNgmsCJysCtvsJSswd2quHQuiJWccWPvNkJH9u5u96oCN4cZsysu3YyLEB3mF"
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
