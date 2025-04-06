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
    "2FzhKrxKtU2mdCN4PwXLwzxxhWWQqGjs3aEpzqTCKL7tQoreAMbzLsYfuEvq9bA7A8wLwpHpjHCtSGwfWXY5tQeW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A3GqDWA8b8cxaRb87vvVbo3kiUbN55AsY8ekWZ3wCXB7jFEdnqXktPJ6RxF3sUz47fsxrgvPxy8Gir78i9Z4faa",
  "key1": "4e23EaGshdbD8yFYR1QM7EPBjA4YiuB1hpabhUNo64kxroGio9LejQXPCGZXV2YEtwefRUmsxBDAAjuz9kjmSF4Q",
  "key2": "4YHVY4YQkbnkRoUPf18mytsXG222mTZQa3L2BBZjzQ5XNNbUfAozXTBEKnuQtZNf1c91iZQekuSyDcrpjTRzdAMG",
  "key3": "4MWtxZ5s4aPuaCAsGnyGV1DtvtWmRnN7kpkZsVC7nD2wFeBapZq8Vc44MiHRf1DCazqWVFgYLpkRNnqwLre2svaA",
  "key4": "4B4qwaWk6mSdAnqsbDDBBipRMzkCDhJyrwn6GmRqFkjVN8BRwcMBAmuYJq3k6Lb5UwpRBo5J86NMXearnH2dXduv",
  "key5": "3XGb7w6f31GRP3aYkHWH3Wr2oLpU6qHiJJuZUaWn4VcVaSjRWdj7V16nZGET4dAUnYHKMc46KdUGLbJp3c69eAaA",
  "key6": "zeHau121vU1ZHrzptqWyRaJezZkDVrWD6cALAdagA8KJoKNuy8on8TjWetCD1a9JTJd6qGdUMx6VCQLeyUSh6FW",
  "key7": "3L98Qbw5bYcryE1wYaRfNi2P6w23Qfvv7YSSdHB9U6x7RRVXmFhhYKghruJ88AsmpCjSJPwnJFE19K5qmoy3ryWw",
  "key8": "iKMyHsDj6jMi36zkHn4FWE1GBYs1X69vfWxY9N4qLGLw66jhuRFwHAydTQanZCgfGdKBcLmdcLw4AoXYCGZLMhG",
  "key9": "5TRLd6hFMHEQ8oWsmR9J15sxdafRbi23hGpfGi7NBAuhNrSD2n5vkeaQ87tUWnPNBBZKmMskQZ7qqU6QtusEtfUr",
  "key10": "5aX5RDsMqnwHE6WpF2WxZwKxWvmLXCpBnVYW6tbAeYnB2i428CkrYeS4ad4kbxCaEQhcjwchfZxi68GADS1K7qM4",
  "key11": "pVnbhCGeFAijVi7tRbharHLY7SKWYVSky8TX3Qk4F4jjvDNay1stFz1gbwj8kP8ym8oUhqe1spigzmzLFLHvJf7",
  "key12": "2ofTXBWqwMm8fQam8GWx1eR5myYQaJzcmuwAvbMscNAMj7qcocQHi7grTVtk9ge5bh8MjgruQZ8ivb9Zyw2sKaDD",
  "key13": "PDdiXYAkBmgfxotBDQPBS4oBg9fcFYdS4oHxArgCBDxFqPfQfDmXuyDWauUnGZ7Jx57cruyMQoYBzmEaA3n1geP",
  "key14": "3VNJb8SpPtUCooBR4a8NX5oGFzj5WtNJDwvq7iGjds5tK2Xo3pQytTR3nm4wJUhz9zRuz621gS5N3AaYBSPMoPit",
  "key15": "4gsC3WyzEK2ujLGXf4vWmmE3FN2aC7Pe6qfHAKW6Gaqroz1tg3NzaFZhLWnTwNWNpJ1nyJm7GEBuH4jCepHXjxur",
  "key16": "65FusGok3gzM6wbeWe9f1yQw3WBAUo8Uu66a9npxPZJSaRfGy7uqa6rPCVq6y7XWnvT68oRVeNLXLn7jvZuCGxUV",
  "key17": "4N8qJktBHJh6Cx5cryudKc3D7s21LZJ6MaJnRJ3DqdWPLFGHQy14UEJtxEKyxkvSKjCyP9P13uhSfTeor2RqS5jA",
  "key18": "5cTY9ENaDbief2uDgyRKJnXgKvdh8djJT4Mpn3C247XppVZUYj9itF4Rtng9wijgo8LTWdE9ZKkzJ6wEJnLkaZ2y",
  "key19": "26mtc8QAkqq4BP2EqmQqcJubWgNnrf3nHDNsXqPwCFZk3oQZjTSjfr7Ct46K4U5TX1rMfxBQcWZrZM2yhnRAPTLj",
  "key20": "3qQz8dbwmMfwoGrmVg9pM1T3a89PQMfxhj7usSpe2bzuASxK4sVp51Xh1kSYPBXUGxyiUxZvwGyCr5wnkB3Y1d54",
  "key21": "2e2wa9ZuZg89FA3TfPm6f6ZkknHGNR8kuC8agaWyymcZHEpjF22TgXWqMZwMXuwQ8um8Jrjwj6odz4s6cCwZs3F3",
  "key22": "jryL9Ujh97qxGtfpUpC6DxKSW5p15QhqLeGMkZfKeyxpVayZNmub6oYFj4LK2q3b5Z7wmYm9mKWUignWxyTVUee",
  "key23": "5LcsL7LJBRSn828Ko7sPEuL87nVKTbVGzz6rmXksx5PjKupP6zQULFb8AZz8WLk7eVd3MnNTxb3bbaj72N5kfiv5",
  "key24": "2i1wK8kfMenhXbkxrWggsKsa9VDBw8Hr8kvwVqfa5kwdrGX5dd3tzLhbSQWf1kfjNQBuLqezDWoggH1XDqdLKrYu",
  "key25": "CvwtEjG9aaf3TiFq8XN15UXxNiE6sH772i3esKh5AH1VS3Ckv5evCgBbMg47vudVBNpaC2Y9fX4tphbLUNYAGKF",
  "key26": "1gSBjMDLjkQSDoMJ2GAxwJV1Qcz9ee1euaCM4CZ4AGbYCxj7mx8ed8fjHzQmAspMgoEPUywRP6uhcsnBZBYFgmA",
  "key27": "5TxMwV5RdzKpYLF7dSP7Pag7F5MJJFHCkUuLmS4bSs53aQtk8VcWpUqZmCXhRLc95vMTCSWEGV3xc1vPfzJprGKr",
  "key28": "4zYbdWBq7yLSNhpRXDsVbyNTwCZFjz1PosX6r4TLSVk11k11rhTKbviDWSD9TttUN6JRjXErRyv2ENbi9Q3JHxYs",
  "key29": "TTrmPJuwpJ9F8MaGjR7PvcxS21eCGFNDfAXXGoBUrBbffxGuY94SDaVzWhYWnPGiWfvDLY8Qosi9rseRMmYiVUk",
  "key30": "4va4W8i28o5zyYGuf6Xw7oKvd4jePKFxi5kWXhuoPAhbzCfqJeXC46obSGM551DekYxHnUnTQn9ABNe2rPdzVZeZ",
  "key31": "2KETiz4n64GngnTBbuRCdkoLNTsDTzFrqCpAkmB6uw3K25sPJC6ukT6S3nScxz2Nz2T5bAK3dgxT7bAbCvuVoNo6",
  "key32": "4v48UV5FRRK3Hd5FY4kmKyztDsYrh2ANGM7h9rthNo8vTzP2UBCoLhsjyd1tQMXnSFQZd31VJrGzhxsfG5vjvTSJ",
  "key33": "eGzrqzjJcuVakYPWkT3r6zxrdPaQe7egg6w82VLV5w7YhTjGbRhL9uikSk3sFNp1QJ8XQ97rWKrsEvteyawFY34",
  "key34": "2f21Z6En6xrU9BEG6UyxFBiN5cf3UkHaaPN5nXssT2X48PG2q56GmRAqdez4XDSoMLcXNELngZvoR4rDMYQjNdfm",
  "key35": "41VSw4Q5qNEEiGKjJkiz3v7t5FgPfPaQpnabQUqECxaQz7LFZr9cMXw6rWvWjNLvs9qQkirmLJopRNyDdA2B64nu",
  "key36": "3hXc9UtVjtcsZ1CGspHXXmWxrYwzBLrZaVVH9gE9uQCFYfcVHs2QzpSyyw9Xupa6T6Sg4XBqDc1dGH74PipHrS2",
  "key37": "3caQ8i52bx71iSZxRssFMNjG76kn8mdRQcGd1UeoRFfNyupC73jqzPNCt7GUCzsThGNtxAJZfTkdcc6EXGSpn2aj",
  "key38": "2cW8D2vSQ6iC3VoQJ9LpN4vFJY7kmoXGR5zSQ1Fak1cmpgeABA5jf1hFKEgXouC5atq2SKrDocTnqA3tqUc3yKii",
  "key39": "2pJtyxEToteCmKTtqNpfRNvP24tB1SzeksU7qqe4nAin3544C1dj5dTKkxTAGP4pzPDtwBRvM4JSVYrHw5qPM8gV",
  "key40": "655wiGBBGuJXDejxJAkToh6inhtJVv4VkYBVcd9wA4zmwuwQisC3D4pQmzHJhv7tWBKNveNGS6DkMVVWXFUK3cd5",
  "key41": "3PbYxHtU9JBpchrC8thnebsvoS8uJQFyaCkM24JS37umGbaosar9N6g91Hz7fhx4yJVpA5p41yvbW33hvuhXEKdb",
  "key42": "4JFazmErWTBAQv6vh4fVJN14es4KMpxJtNxdyqRE3guw9LZgG2jHHsbnALB3r4MPj5b3Z69ZyChqm8oXHJLbkofC",
  "key43": "4GSxGaX2nKR6wkpzQpFvCFL8hi1UGfBStfCq3Q9Gzo7CZRoKGmV2Fn31wFs8qf1s9MDk8Sb4YLRnu5iVBUHC8fvA",
  "key44": "3MfC8y9GVThQ3CRG7MYAUWSNbhq1j46dm14CuYHwoT71A7CXkPJDE9UqPxbUVrGfH7gUh91pVnCoboi4Z7nhhf5h"
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
