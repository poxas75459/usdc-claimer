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
    "5Mk6gapkqya5dgFrAeH1QNBqpctafsuM1uwLELmn4V9oirLYH4eNT8DoYJYbFBcEuNuTVd6iuDePWcopbwDZPcff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GVCsDxybzySF2Z8F2LA3Ry8SmToEpgm71FFtGLF7HHLomnyD5bvrqYn4v4PLHH5jUmLbFryFGH17vcj9tq8KQ6D",
  "key1": "3MfYXuyQNXGh7fEFgQ2TuY8LC31g4jqtZrCSC6o44AvY5TuDCJysRsFyR5SZ1SkzbuVKYQ5Nr1SEPyY1ndStn6Zk",
  "key2": "2hHxPVBfVneMn3jfXKHCvZcdMYcNBAz4T91tfA88h3g4tAA1JH42kp6pjBqXnw866Lbzv4kJDLdvitU2R74d8bkA",
  "key3": "3DH5J9g82ej9TEGtUnija4kqAiMTo5LAsyZgw3eN8dajgv9zvwXFFVLbKeNjGMB7RbN6nkBK1dSYA1D5dFaDDxzH",
  "key4": "4WN7ksqEfWfHwvuVfoKVYK1UjCzpMchCHozdkAkV4Tc2ZahpK2JZ895ayzW9RCD7XgvtZwBLDBbsTmAny8P9yuGC",
  "key5": "5JFACWK8hWp6tRifs5CYcQsyVWANqfNn1H4rZu7stvMqxQUG7B3sqWE4iyiLDjpF8aKYMKBzfQHZ8sLwjmhCcwYJ",
  "key6": "3ZqmU22874MpitXx1YHAUvAWwGuVSp75S6cizdeVxnMnu3uCoAL8FXYxuXtMo9KufpgizBKCYeDPB4vfBkLT8uPf",
  "key7": "329vSX6dwbNX9NCS82Dahgf2vx5rR83xZhCeqqGM9sQ5MhoP78oFPko9kxFYcUXWK385MhMVoxvHiSXG87jdYfYx",
  "key8": "4pPu1Jg7Ljtw4WEXLiyjrcrBQsuzM7AkWz2o2QJcvwQHjbJfTDGbWAo3CFsfWkxP4X2kBcwqtTEgdwU2vMVaX9df",
  "key9": "ZdB4hWUkRFmgLpQHTkgrWQQvvztMu5rb5z7bzinM5fb3bu7GXdnX8qAAWSSzmokobnHsuhS4Qi1HkuHdeyicyo6",
  "key10": "3eaDzAsFUbsUHYp9oM6GmNsQ1k87V2YipPJR1nqQ5uQ9H1BLR7JrUqWw4gRDaC4bt7nP7K9NGRXJDDYjxJV2hfRC",
  "key11": "4CgG98RL32ka2if8C9vTHrS3Yztqg3N3AkwKVer6KvmUvNrDic6Q3zxbZdWxL3JkQdyNPGYFAdCmovarViSyB7rg",
  "key12": "WFSQRiFPjPGFUYuZU7nZjYBFsAeVTE3JC4P51F7bVjaUJA4pvLU4w9iDkWmtnSbWWw78TXih3YTDv4Pk1V3YW1e",
  "key13": "2AMfQu2iVCZJX8SV8zaZ6wJMc6ftsKQZsaqg3uGqUWLwS6SDNm6vVNmYPuX9PSm811PbHJN1NUxdp1Jr6edzpbEp",
  "key14": "4DTr18utCt7tpGWgYedXMmLE2B3C8K3SVx4AvtDkxWR3ECoHVSvTWA7C5sN4GhgoBKK6W6zeBZvJWxpLVwpMWW79",
  "key15": "v2xyRpisHQzt8mjWfk9jJniqJeSKaFdW3Sc4xtQDbsANH9VjWfqoLuVmETDz3jis7jTCy1Teo1CwNGxhtobeGmL",
  "key16": "3j1cE6DSJdWcVjjBomYxoTPJeqrSCVZQucmXtqiFdqHreaARZUSjrGz55WhdXjDFhRzc9T8FDcayTJrsT9karbrt",
  "key17": "2X5M7CLNDvUC78DRYd1eN5RW7mBcz3mitDUfE55uDbpoBxNUDeA1ZL2xh1wb4xFQmvJh24nk4V2mXqH9Bpz9Rd4K",
  "key18": "5pMi6ZjuhGTdZjJf6udwNLnm2BtLwVU6W31vLi91fk65HnFfp1AVT9Aq1rCBK6QokxypBN532wazLWXG5eDwhztL",
  "key19": "5puX7ooa48xeKZSi8EqLm7DhDcWnMG4ZLE8BeCRXzh4XQ83muVtiMwk6ssmCXLttbfMPA9LrAiQMmoTH3pJw1LVa",
  "key20": "36FFkoLXUXpj4GGH7kEgFMp9AW1v9CpTDBafP2vexhJeY7Y8aJg5ysKY7knNdZcjHYjZPLQUPCVyiSCgFNxn62vJ",
  "key21": "2p6MbRKfjyGTDk23HWH3VhS1x2AfRWJn6Bi3n8FpDSTgfJRkquLUMrAWu4p51qdbQHh8ui6Fj3AzSwcGTAiZRKqe",
  "key22": "3Z9JaZee3LdbJwi8V7k6Y7ZirfoqZC8NBK6qqhtNXGyxq5WJSXDzLvoK2sBNDXjP5fcTLPGEjtGjVeXAJ1huUPcB",
  "key23": "4wLHkwbrFVzAKbUk314wCUCVBuBB3bL9kgz6pQ6FZ6DELcdHvj6jMfMkJhifQ7vWyzEASrSigAmAea6PbQ46VAfJ",
  "key24": "2Ch12BeGdikac4vo3vfVbrajgaJXaLw9q3vqoGpryCT64eBRZL4b2L2Hu4oqGGsQHPkqu1Pwy4u2ZeQEAqffwk5q",
  "key25": "5oTkhFuVD4d5K2ETGBsjvsB6HCCiH7R4MHkxApD4SXpgSdGpTE7ULeRx2QJd7XzU15xjFb9QcUs6VumaHHKwkYC6",
  "key26": "3rm1ZbhV5XJCqVSrGqQvNpLh1h9YDmnzfM3KjumM4F2SHxYHMmzqu43rY55RLPBRG4mxd9HiCegnteb7bcAGHNLW",
  "key27": "4qM9V2QRa7YfsVfN9AT7ncG2H8zr67GrbiYAvFWQJgVJoDguj9kqnYPgtb9hvHcPonpd3r6St57ZkUyHHY4STPqd",
  "key28": "3igbkQonRTwpSeYp4DzXWNatw9jVnruJxrcigQh51c6WwyQBwYwqPTdDWk3xjym8rZjjrNjEsfuxCiDER8MT8vtR",
  "key29": "anze18LYitP6tu1RryZGWDd2cZrYrvWAXHGK18Hnkbsy9c7beJL6yT7LprBYdAyuJnqyEvdjcr2iye31Zh5f5Wu",
  "key30": "3pbJtt6AryX2r4Eq8MGU3aER78ucT16GGb4NJ4ZQsG8PWcPmFGcRf3PopeY6pKBvFkFqUcgDygNpufrvfHwQu7vC",
  "key31": "2j5gqKDnXxKReQnTAbdEmykVxDbgM9Pzt4aLFreJH5QMjjVJXXeb6FDhK5c1ZT7PV1Soy49f5iPDikgS3MKxfVF6",
  "key32": "3XQYKgcSWMsuz1RJyKpB5Tprcx4kiBttzQpaDEKm1AmMDesFV9GJsXtesxZjCZNqZJ97KAQvZAU3U6Dut2VBBGYU",
  "key33": "5UhSXRR7J1caoK34gdizLhR8mohv6eBRPVGFdvLXVKjTmfWbb3gGM3wBk3QhZn6dAEGreCwCGxn1JoFbjSw7nENd",
  "key34": "5AG3XMbLAjVAxX7rxRsbszYsDHmM3vsa9SVjpBgW3yteW4xGbFRkYC9QEaAmBM5zXfFzrWABXvYGJoQQAXUJYj1h",
  "key35": "2pZzV1haSoPfVCQcQv92f8WZ2oGUbHyDxxpRUtD7z9tQKGsEBUTH8udtWsNoYH1WbM1VToS4VWHo1jQ3H2xiDJgD",
  "key36": "3xHQB3aUoQxWAgWoWEyFNGJrTV5FyyH1aBWVprWwDaUczPPVCr96UDq3gG82exaLfLrBecGG6BDRdmJfVguWr6Ce",
  "key37": "36t6kMi7kcN9hW76ToPrYxKQ8GELR9QKdWKfNrKqf7ddT5CcTyMpcBPJT5fVsSYYvT7EVTCoUfdk9xE7CA7UYXaK",
  "key38": "2vfj275wM9np3GKXQkA19vzvruqT1LbncTgkFQQXywMPuC79ByR7m5knFDpp2yC1WMt9qLxWpN9LvDoSD57tPERv",
  "key39": "5BkY6vy3Y9ZMthnkENYAYfpyYfMwrZz7zmvSPaNnrNYA3kuJWaJMAwhhNQEquHmFQ2uS6tZt7rY6U1aCq4PVrL4t",
  "key40": "TW26bzub7RW4SvWmPY4iPfhzniYr4w5w7Sgwpfr6xp9YDnjMPZefuyouGAFRai3JTY9ZXZ7439gjXKLv13xqEhi",
  "key41": "4XHtN9juDBww6vkd1VmCYK77sfLgycSxLfz4RFQHyDDS78KDdtDaeQbKc5rAx9k9MVbMVJ5qByuQCgZ8qN5nzS3B",
  "key42": "2n1NV4ADaqPaHmA5aodBKzChJaR7XpY5kbBfFaVxPmAxZ8jtfF2mYMgE2Rkjdy9VbBDAgQMGgdeRtGAJruquNzbt",
  "key43": "5qmULzjr1oon3UmnXTgCdLoLwH8Mk5zi6XZjtKuEUXEsG9tbvg23rJxbaCV253Fy6qoqr1c9yuSqxkcKBLoZnoNL",
  "key44": "3kW7t9vg5oRpAo7Gj31xea9nMCUajSPxwX1FtQAgTqT6xWuUxWVivUgtRbs4Mok4PrLkHsXEGwdQnQ3xmk59taG2",
  "key45": "5vRczCPTEwrbXz27GUtDWw8vZpUpXDBjLkcn5VL2p3vtX9zpKvN9Ldpp7ZPPpY9yhdqrhsdqxjzugpUSFo5QzRA9",
  "key46": "3cNiUipxz1gDvfusDY5Exp5HuKzy6D7T3z4YbNJmMRSHJ64tdvDLvHTGh1MfL14qqyTcXNE1hJuuDY91pXPRcKUF",
  "key47": "4k4iCkNkzSGkggpB2HrdNNTsVVEQ8RhhDXPt3SypiqaYVknfg3kqtmDtHqvaMRyRDbmNp5jCURxzqpv3SN8YnqSZ"
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
