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
    "goP8MWcfEYXThvYNKPdZMy7VeHn3m7tBQzZjkSnvdBkK8jzc3n4bp9sKEqAkrpgUNfqJJCLwckeTGjoH8Rj83Y7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64ni7jdxriBcwKN6QpLdG73nfnYvxVi7EmbjBpgQ6ygjnrrUPf91KHAJv3ZCGQeyiW1EdmuBvvUpDDaod5wWuKxH",
  "key1": "4icFKYCTooNEgAhENZqeuqeTb3q9asQ954HxicjD6cXnHaH1u95zZYvhqAb1qZsDabfCUKHG4W6vaQa2o4hTsXY8",
  "key2": "36Z6ET6SNSHWwbByS1JrpGH6rS5b4aXY834uxtr8ZT3CrKoWBp1WLsLsztDLGjwvsUa5wSwgtsFkUS3wzTxdsMTZ",
  "key3": "2kBANfM6YLFfvVhh63euN5vU2iFPFnwKaL2UFsJ9MWmUGTan8KLi4XdLaph4ZYCKgvnuWJtqKoNbzRzsAzZ2tLCA",
  "key4": "4vJE9B81fBbpVM9U5tGCwPWbEu569x52vpo84gDzxBKVMWmik7uSp4yNEHWmdwhHakHLt4W1PWhz9xmUVGfzRDoR",
  "key5": "4ZJDVxvzertLzWPsd1fp9XNWZzEzmqBmwQQ89nwJcriDRERx9znAfW65fdq84SzbmFHdd9imJpGkLYdZQsraufKd",
  "key6": "4awRgcmJseG7qA2UG6BbYDHLbYTGgac6ThsPH1qTweSTrqpXFrFYKf64DTKUzNF52XSC4Le1zgQzV8BBR5W6jchL",
  "key7": "3o2pymV7nJL8mxvzownAtud52NQNGagQG2ocPiraay6W7eGFxZ5evCgvDeaG5z8Qx94WWcKEppR2eCSaZkSnwCF7",
  "key8": "2LzmL1Ru1VxRDNwfY5LtocM2hx6tHhudqzhMdioyxjNWSi4CKrjCSJCKcxHr8cRcydCuQTFDFZxnogXiYLz8go8H",
  "key9": "4So2rmk97QkpUCztQni9TArgFnntoxbWhTux3ftpUk5JgJwvh11cqoC6Efseph7G3Xg7JHRRoBzC322UHcWcJYqe",
  "key10": "5ACSMxnqp9aFsZoSUr5UWf8iRsNeRtXMK2eCVGxHJRWFE53YFqKaoSovNfDbaAEHqDgqCjncRjbxU7bwZCsgGVdU",
  "key11": "5ygCfgFdJ4Kcd4o58y9z36Ys2UwRQkmcj8uDznNagKs5caVh4b4hXjz1ETqcRGFv8NVYeCPwL6W3wjDaYaZZf5st",
  "key12": "65JeCCpDhFvS6jHjuoxeJKhqZbU2KmouPAH74FVc1deRFhWn3YKUvNoxBVwXeWRgzAUTUQpRrKEN8kFA2e7sNDBw",
  "key13": "2cgJtLLtfiVfVRUgHUUahJfg1rXfWjiCr8ESXEkkCdUZn9p1sbJwhxnHVDSvmCNpVnznmcw6yFFsRjWMw4QdbrYW",
  "key14": "2GKFpKkwnDqnMw6ckU1317v9yCs7CbZAi65yYeDjVsLniatoViGtAJ4ZQPkzbfFzqmhsWoT9hYqxvxCWTK4QTKVc",
  "key15": "3AGhEFpaXftLeMdVrPbGPZc1s95epqUxZtk61Zrdad2PprG23R6FyCy4YpibCeMLEk9zEAKADbLvqGuCJyLGMhZg",
  "key16": "2f8grN8QSCxoBXwzHu4kJvVvF7VmoMY1uuD8a1KnwySbUGyNdwP7UfDHQeKMArZu51KoNS5Cur8RD54bJ56oJDmp",
  "key17": "Sx1p1weQvkXY85fizitiR1WyaCGFr6GkRmGkn9L1evRXJWa9GsBeBakmdCbCLvu8CdzfVREGvnL2UFotbEVtKoc",
  "key18": "3fwUywQ2KPmxfPbS4YJCsjVCMG7Bx1zH99NGpTa7uQfQqXVnPLDQbfgwAKbtuo97965iipg54AkPPkVt4Ni12ndg",
  "key19": "3agvhDtFGfRjVx7HAxkh6amLazQwPnYkmmAvoqXxhvXaaHGDsNVnrQowHyL8iW1XNpPCSpkaZuCmvSN8fXiPMnbF",
  "key20": "5ySCJ5qmiQ8h7a1Dh6L5BjTwxs1UFfcc3Xie3EnEeyVTKUwSBK9JeQQ1PTzQ3shBDYK9prbpFwx1Mt9RbwGboinj",
  "key21": "4tK5gEJz5GAaFZjQTSntpzkWKduX6YdDL9tGeFLufwms3MaUSsxHuS7ALRt2HXKZDqxEY9GQvHmAm8zeZKxqafXK",
  "key22": "2T7z6DydZv2hcEoLb3DxhQK9frsbXg24tPkgjZ3Za7cAc92jbHDAUpaEdEoc7JGYQzWkhcaikgncbtpkLsX8QjJx",
  "key23": "2UzgouvpFWdcNFwAf5NYSvsb3U7K59HpbqKshq2WaBQZnxJk7McPQWNFVL8z7vDGZGQavruvLwpCAumLsSEjjwaD",
  "key24": "3gDkNj1jtt6cyT7PMGsKSUgkPzVjvgWQUjCfVxMndoUZg4cFrAvZKJ8FifNFkEZVmRvHjHpFr7SsXmRWXTeL4J7h",
  "key25": "4WeUmyauheGsLcezXgfUFyH3xwxy7YsDcMQSraSEmiLHp9KhzuQCsHmcSU4J4QAoaex3DrC5MgnxD4HRpajDvkk9",
  "key26": "5LYRkNPh4A164bfrEykUvUrRZ1tkxfGLA9VcQRtBYKUX7i4oquQ6X1vDYRerYbmba9WLZ5ysyxhiYHACU6GQxbkw",
  "key27": "2E5T39d31ZnL75jGVRLqVUDzXMzQHGKqG5PBbvB8ysXD9A8ArnLAHUsQvvKDeyUeEU2pzaqmBUh3j8sq6vW2Rx3h",
  "key28": "4QPc1KtXEngveh7bvu9k4K4b6j1xrm6sheLW5B71BxNob7SADMWjHJx1dPA6ZPtzgm7ab8WJ1jUt4Hsc6naJTDe",
  "key29": "QXY8tQUG9iAaaVqWxnouDJomtPjYARpYCETmGVEJJV6p33F7gZBYCAHw5q1hdypWZ4q5SJUntArCC4K7U2PkFfX",
  "key30": "3WGJJQs4cu9xk8Qz27kEnjSjx6mr1adS29um9KEWRHz8XseZjAWkEqgNVbjgALx5dqsS4yjUdwY3ckbustbMbB34",
  "key31": "2bk4SzkhN6UxzKf3FYkLDQUvLR2TKHsje7s6WMLhCwrBzsET2pnv1NrctVGUMvmY78yiLN832bCUDnrfWjpFcFYj",
  "key32": "4hh7rjkVcpYNk9MoXp68pRY2t4kGB1Ew36wU4HvesUqdV3x71cXzFAA5qXSuXxaV8h2Q6TFuCkh6rHU6MsJCmLcs",
  "key33": "2UDw2NjWAkPR5p8ED8miS7F8QaeYGQDU3cN6PM6weQ7uSE7Hwqwq1C2oDBRaS2jn93izBimHEcStM6srax8nK2sw"
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
