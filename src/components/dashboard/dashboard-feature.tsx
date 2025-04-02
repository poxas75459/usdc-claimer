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
    "2kHFps3LLdBXrgzwdqF3fguC3YL3DqoZHHt1uhLXQWYLDswN5qjAm3181FsfWaQBVtJjteDNbv14J1HVP4rmwz7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DGyZAzKiNK4Jv4V7CC9kizkpbF48UittN3ggQaEH4WthnGWKjxzyR5wuSxFRakxe9RwmtMv7kN8SbWRdGrzF1Tr",
  "key1": "3ieXA7zPvQsXY68W3LKr62CV5i7JWVygg73PJYYhmLAYowSXtvHbyLge5CNLXU7NRkqTfdhbq3jEQNMtXfYZR9Ko",
  "key2": "4FF3UgbU5Tkj7pd7eBLWVtfUYhAh1kmB3VHSuLzEhyqAm4rUW82vCeyv1PAvbtwx1vKZvuaAjjH8TDskjzBiPKvu",
  "key3": "5ZBUA6Tcb5bnwzAdUAKEJjX1q7XPoAcRuu65ajJnDWe9TdxxQsYbsJGhxqiagdHBwNAbdkLz2BH9MB1h9URynVgB",
  "key4": "3HxwbxL4oAkJREjLpZk6i3iYieDMpuQ6uNX1Pqg9zjri1jdSoqkFpX7BHcQFDBPhrvHvX1L4yY4XFY7Qsa3H5P26",
  "key5": "NuwixkMVgHoRie1TtFK9Pdgv5tn3m1j9JiQD8hwWVmSD9kDprdKWq3AuaJtNu7RPNUcbqnu6TjVeeAqvcCfM9X8",
  "key6": "PdxBoPzd4V4NPXJhmFZTh77mvVvEnxYG7Zj67D91b5ViReY7VSZJejRuKRKKfzee37V89neEU94wJj5AzbRejzx",
  "key7": "2ggtbDvDsvx5foXCSD4DzidzcQcJm2k2spDYWrzaCxPfrpAVoc6iMBJsteHfzsdLaajpPGxFA6tkzHDfbSBWxHYh",
  "key8": "5m6BUTSckonyEg3jhGcjku4fFZ66qgXb82cP96w6EEH22dVYKmzpu1tuHG4f4VfYwjjmZiML1dr24kTqaNkMNARe",
  "key9": "6Pys8wkJdvLvMVXfWMmvkSnfGiGrg3MCJZtSiM5EAevz2Tzo7Cu9a5QrJRkYsjiV7RFZHKPhscH9WTkfQiCZ232",
  "key10": "2qK6PgJCiDc2UW917wDvLgzMBUKTJF8oCKwAbLBiuXJnEc1GeYBdBWWErQoUGxfomoyK6E45vNC9txUSJT18Qhb5",
  "key11": "3ySwMzhjP4ZpEqYQLjTZS2czaWuVQpcY1ftUP4kATQZP8fFfetm1vzzWq1ij4oxA4WKou2zL8NBT2PphK1k2YMur",
  "key12": "3prSdW2UXv9nNuuGq7E5PxsrjErd7DpyCZZqBpMsi5g2d431cbpy8YNy66x4W7biowAwppkUuXQkGDmZhh5Q2Cei",
  "key13": "5VaLaP4RuByzDRNofr8MCcdbq4jeE2uqqEUEJCdvsDEE1AQcgCzC9R8ayqSvddAmyKWj7vJTrr4KghmkA172ptN6",
  "key14": "36Hd6rYS79QvbYFgxHyRxcBXaC77edcjhLyQs5i44uGrvYMqwdAzSuyrYXc6BxeJtR93e9k3e3vYTfNYKuN7vbvG",
  "key15": "4mNz1tHADLQuwt1EsqLnQMtkzyqtFdD31dvrDMZxDfChJvyNVs92d3jp5fwCwuTb7tZVkuxSZxMp8La3tS7to7PZ",
  "key16": "fYoZomZYpJrDmFtz9iGpPDraZDcChmuu1zhDRv833nqrMKf1rJ3553D6AJfMAifvXnkmVN5hAzxWXUWtgdZTC6y",
  "key17": "5MaSwNRcY2CNUUR9qUdqVFnRJWm8yqo6bgNBHdh4Y6JRFWsnBTmU2ngTJdug5BiUpPc1PBcRU1GmcCAEz2CBoZ4u",
  "key18": "2swqtvmMD9jkAG4uhVA9fUc7nwgbWHqtTLqF2DGnXzyQFPsu5M4KAnhVnZ6Q1sgaWJdWQYBLMkrKCpZyKjEMMsdN",
  "key19": "5LeEfW5poTWzPhgeMNafh8jhDXGww8q5dsTcW84Pn6jGoVmjS86KUkn9wMZNTFeGyb2bEitbYAP3kJksjyAZSJuk",
  "key20": "2h3KHrswcxNQF5LuiBZbMHc13et7LMj54qSEWipUDoVcd6PvxZ1y1iEyV85epQfutUHpBLPMTYMHqfB9rKHh9uhF",
  "key21": "3G65rTgfehXKWfb42pfL4jxhX16gAYYPnhiz2EKQhMrWT6V576XdNeANMncPgyRXZJFgqmB3d7znEmr75etGKDYm",
  "key22": "r4whoieUKwxqXXzrTvtARbZ6KDqqg2abrfVpEYQ396b9LHMB7MPWMZBvGfJYko5x7pgXLWWz3tW8YPdPNKCHV7J",
  "key23": "56GR4xbaFZnPtvECDYQ3xLDr2gscekeFnU13YnRJrFJYAm1bktfRvQWGjnNQpUDTruFZ9rtL2RkR73Pf8CfeRPQc",
  "key24": "2o293FPsMKZutLbrUt7zRPYVCZFXCQvC2CDzcLaZdQQdgXYnPZTLmkq71KMQj2Gm2yW57XG9WbzD4ugmN6BqwmR7",
  "key25": "iDSta7p4Bjrw233JPerNNHAXjmD5MXSjDiR7TgU92hVzz7Qqd7TxpAgPhnKWqDeCBVBz4CTZooajHfpk2gs7HZM",
  "key26": "2YSSXMKt2mFnMxfK3LdtCaVz6GMZKk3hrYvqX3fWp2EZ9iuHvPF6f1nuEXhryQaQHqGdyv6VVr27iwuRatgP3Gkj",
  "key27": "AYAcE7WVTqvS76SStbWGoowpEEjD53hEUfu2oMXP8JjpZKaYiHJGiVm3CT6m4e2jvALmSkqPBvjWk1TgRzSGsAT",
  "key28": "5ZVrrpZVX84GbHP4s5eqSwuceBZo6pBopkaHEiFbyPXNmdbmMwHWMnkWmy8yhXwLuskGymhbXJamwypoCXidVAgZ",
  "key29": "4bfEqKo8KNhBaCMtirx2oHny9GdmYgsLJAKyhSL8ff6jRWkJtB1heXAbQRS3dtPns8x7y35VJfvW1gesJXuXRHV8",
  "key30": "3DqQnyvbqtmgeUuiSEs5bQFfvinMTbETiGyuPwtMjp8rfNJ7sS7SBzaYLJz8WisuvH92yu2RMjtETJZQ6gjJhewS",
  "key31": "4gYAuw16MGx3duMecwJRwqE7mjgwwyNpq5aMybyhc8gvvezKWMn71Tkz1uRAbdGKRt1aVv1VtMcBXy6PnDwsUWQP",
  "key32": "2rCnYrHBSKAPobe3npR3fdrJJKdCsfJxYjfKiW72cVxr9ueH4CDZtDgN6gpkjMtxA7KBWJAz99ZJ81eZcdhzZcAb",
  "key33": "58Ve9GWPuXfEqqWfthwzLJ3KqQnrB1Umbpfim9bskUcxDMpa2kCJ9zKK8VUoNMVkaUuhqxnJdbU6Rr3a4JGNF1SU",
  "key34": "3itVajKW1XCP2WiZbLJAMBdxsqyQ6mBG2WsYHzTySDzNSpmzDRXGtvHDA4F18V1BerfG5dEdiu2ZkAJBZLoRMT3G",
  "key35": "5ZivdhMHZq4ygHBFWW6LbgtXxEgWyf9TTPDYGpbZxSQJjekxNc72jPxZBtRjmJanp7c6p5Hna9dkDVxReyLjxhwR",
  "key36": "zcbMzA9cTyUJWGif2wBK8ZqtQMQZx3LZTEoA5QxzkYotLypLWiDJS87vjhgiCC3aij1W97Va2sQKCkytm88D6fy",
  "key37": "4pw9VUuaq5BdKq8yWtZ7gKSm3pu1rYUvmUZpBjSLZxko9AvnZ42G7oSVZi1XyP2zDJsiHdj853ysDqJZMF5uzaAX",
  "key38": "2ASyBkzhRpCy8N7d1Zmesrj5nxhYe4rgH3ffyQ2xGz5hHZanbWgmmj8JCBRuVGXFQtzzM87M8kXBXck7UAr8oSZs",
  "key39": "3VDi1ABZLJhVFbuikGWezz9RHR1w11cU696poV1tQATZUcjdzkYbaVLnwkMhdi8UVJYHEyD64bgD7QH9sEW7cT8f"
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
