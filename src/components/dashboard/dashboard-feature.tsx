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
    "bExVefFwTTnSc5M3fLxQDKWMNUtxiopyWcAJEm82ciYwZa43TZEaeuQwrspx1hCjynaY4kQRohurBY5aJEqps56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gSq2Cg14BocFZxjUREKcPhMjqyu8g2qW2WjWYKFScQ3ShT1M7DF7gm91hFRQVtJcFs3sqoy2xygsiRVMcHV8BXu",
  "key1": "3PxszYQfzubpEjVCRSavhDpEkZLnyChEvQF9UU9QjZQTu7B8HgpemFbLkwxqDmRGVa9SfDsxv1feLbaZecp69n1X",
  "key2": "5GMaAFeKtiX7XVVuE4g7UFRLMJstauPPmmomsR4N7BGjdvvwKb4xGCjm4aSUCsELVjk7GfxZx5FwYMQVApeceuW7",
  "key3": "3Uw2LXrJrGsPU9A7tuknjwJBxsKzmxGKwLfMrsxyfCxCU3xeHnFRVe5rfxMTrViuL5AThqVY6csA5oSkTJuyTvu1",
  "key4": "4Ut9TZCx235fv6vLfZrYhQGmnBx3mxXSy5XypTonjQT11WdLxNNpZi5F69rR421ugGFpeDCyZHWyYYFJhkzCQi5h",
  "key5": "5rkwx9Mk47ZxHyaeaC5iY8H7RHr6JeojnYzuAnfM5J4CSW3jouRfRQ7t6JEw5ruq5S1Cdfd8BcfEKFdEaoB8vMjM",
  "key6": "5sYBRhaVEioheAEHgH1SpYwwQvjqHm6c6JwfGKrYQex8KiMKjpCdWsgEKrLu5QXBYndB8L9ycpGRwN9ed1NY328y",
  "key7": "4CrU6xYKBoWYUMX5WfDMzRncTA8hx3SeZ4GjmosUcjRJ76nCkTwsu4vrsx6LaKWLv5cNBsPjFWenWEs4rdU6QYYR",
  "key8": "4ajruq7dh2EW7urvaGgTR5vQhk4tL4askjCpnR8Ynk2PfVkbaVxUkXbK6wWzwmKEigmA17F9e6wYeYbJ66C7JUb3",
  "key9": "5k4JEJiz2igZseLRaeN3RF9zSibmVSFzQpDazpEeH3LXMmnuihWwmuzmMNW2b1LhwdW8u9m4QBeyc1p7Us1SsS3u",
  "key10": "4gPihtBjyrobnH23u7tCSpCG2SwhXZzTSYMY2wwpQdFdvnkqqsYZULCX8tKViUtTLv3BTF8X8sr6zYs3xuhP1ZjF",
  "key11": "5JdscPfnXhaqQ9meoWsmNW8YtWjRmy76mPJJZCC4aDZmWKLEYF4PZx1UDcaEGthCaRVKbqxpUGZou5skAb14jCjj",
  "key12": "4XgCSGxDAAhWuWE5bGRjU4ve5EdF8sYQ1RPAkf4jfC2L4uUPWi3oRaDXnmmf5cXBmdTC8SaRgVXxP39MLJ9P9S8U",
  "key13": "tZyPvMk4NvUs5NCbxKarmpmctouLykap7o8dpBMcE6oAWDP3R32rHirGYEEFmtcEaukm9zwvi1kzmB34ivZixAW",
  "key14": "2NfYKYjACwBeCkAfZxMZE2ju2CNatYRkxXmjYM6ue37r7i6BcFBw9fvNiodnKK8G3isicQ3yWBX3MREgUAmTCSLi",
  "key15": "2VEym4ptcfLiuxdDEntNaAwSiB3HAEGUzwfWRQ55UFN26mHBVG2dfeZ4DCncGFbyuv9HDLsQmKVy7k8JibdxxZsM",
  "key16": "22v5hqbtQG9yuyFjSMXA19ytB5SwAC2gqR8PYjH78uL9NDZJ3XiiT5CVPjdD2qX9ZZpQWPyAu8uyQPK52kG4RXmx",
  "key17": "51rk2SSRivoBZh4BuPHzPHFpjdPafR9WJTPFJhJPDoxJT7rECj3VKfgVdRNzgJ8LxEj7zuZmYuDBVZ347FGbj1wP",
  "key18": "HsjqMEUa9jsTzVZMXr58exGaku8YCmR6Kwvm8tAy9JrNtgeGKtLVCcSbL2EpBU5vEsR3QccRG88YCvX1gxrCiWJ",
  "key19": "4r4AurNTTmoxpBMQu7UuV6QHGYGNAc4vqLGmkRpuDC9KFMmehVGuvF8twYdwwLx5cQ75dQv66kDJLxbzC4X559cc",
  "key20": "5vsxfLGG54Dx3AVQJBVxgt1mK736o2MCAhvmfaj4UUHBtR6zQ4nbyQYVGGP7QbNyMKjCj7b7BxCQ84Z4p24q44EG",
  "key21": "rhu7utrM9jKSuqDzZp9AqHUG3qC89oXQhC68kDXqGDr2amhrtLxBaTZYNEA29cz623VptFR7styz8Hcz4tAv56u",
  "key22": "5PhbRfZKyHd9NjD9jzTyCoSnGk8WBf5XTFZwoGWPhMATPFTQdHfdMnV33zc5Hg485dnYqKR1oCfVs6dHk1JfkVQD",
  "key23": "ss4hNHR1qSeF4BTdkHsjRvAza3bQmSJmJPSs2BV8dWkeCeFg5VzrTb6wJ9vj3g3KRr17mVpxVzbr9Cu72d8qGzd",
  "key24": "4M6Xnvw3LkK8dNLD5GhNJ8rf5LSYaQN5rKHgY681bkLf8vAuYhZ94dKoU3jvJfZjVN2AS7amQQ5aAQ5W1ZmgawUC",
  "key25": "4GmqYF1WS4jCP519imTUfkxQ4Ne1RTFeQtU2XF9PHRmtsKmaPMHWQfzkjVf1CzSEEHsFG9K7LcucKHyWbWhpfpyu",
  "key26": "4uisbjQUkkZygjt9GcWHBynEEsDtpjEH6sBH9LzNCX9oJtAvbFbkNsxVAqvRo8yqphaPPWJwaxMp8VGHW8fucThR",
  "key27": "3hKM3Kb916xWtcwWWPtaRrCAnCzWNvzQS93UXwMAkRc7AAbxt7wxfoFcXtaFLnQkvq3i8Y59q67SuEqUKwsgAJmA",
  "key28": "4UNNyRV8Jn3wtp543M2sZYQZiZhXs1n8FeYghNAMXbDYRXMjzTMEFnNXdDacY5MSVDwJ36kNjd1WxWW2xXKkeuJp",
  "key29": "3atKzowxy6FxVxrQZw6gpJniet8stRZ6qTRRkxYuNDvjAHMJYCQ2WCpLtdzgmZAAFp28hb8Mn2VjPCwuQGknKJe",
  "key30": "5hyq2LCFUSv17JrxyBfYA1DwdNwL5cSSMjQi63x9k2Co39mP5t89pYemkRPXtSE9wVzHRHK2d8qHuANh6iNDJvrj",
  "key31": "YpwQoaJurzepoU4HG2fy7uA6wvWoZmJEN5rUHgNTLk99bkDVVyBiTLgMJEGmn2XZgVktsCQMEyeQBypBS1XxkTN",
  "key32": "3dYrZLarLkmxLzUkxZkTtNgESm5z4sForY11KaZzYmssihpe8uZbEzWyyk4E2MpSLrr6K38cX2RwobfWjPQbvZw6",
  "key33": "5VeAPoJSwnrhK5abLXM4m4R5ovuZ4J9UZpC6AJqykLUT4FEPDAEWif7igPSWvaqyL7nufZj4o4PWYm4mBRHTyHcd",
  "key34": "2Dhdo4VXdcEN418Q5KvyE5m3SxP5C4EEi1qtL8DzhqsFhQ7oEYK964HWkJKJPuFp4YxigaGTC7cw81HL3RnPXC6g",
  "key35": "5JfyJPYwGBaybgvdg7XPvXEmyXu4VJktpiTyGqy4FBKE5Z21t8iz9v5qsHgSXBKrQKNgvTBqjMvsf8FhfnZYwx4L",
  "key36": "CpSWUpqixEki43a6k9wJH22Yv6i342fdo5w88a2434kxWmM3vhuqpK2urhHaSa4CinoFz2gFcW5xzF74nd5vqHe",
  "key37": "4mHXJdswTzNw1pCGKMs6Df6skn9yp3xjvoaVzwCQjAssj2aZWRmdVqbJsq8bwvezA5BycMKiDaLRZaq2HWfc25iU",
  "key38": "3ctrBb1UtriW92NffpCehog2YdpGBuXq6H1uoyf77Ea5Jqn7ePBFvzSPMrB6R7YjKnZA2cPqmuYnUtpSLSVYvmgt",
  "key39": "5RHF5wJFMdwE3NWwrMg1ddEbP3CxsRkBHGT4Y72qUZfZVogjdxn8pnG2rF7HF9MeGyLi3q4U12DPr2JnuYEi8odD",
  "key40": "57Maaq3HtrezxfRhqxJnP2HCoNuDT37CmiLpQcHoztd9sieJg11NE4Etwt4NQ87QVUW8qa2NLWMqpowG2yBRNbaw",
  "key41": "3gkoaoHtXKNU4zM1BHn1HdwwZVQxCbP8b16YcgCGC6k3RnYwgV5mFhbbfRKsNSSon97QomXRy42a8PvhN8RFHzHy"
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
