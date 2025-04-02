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
    "EZDBBA3AMao9bovyLwj1TeDEVBeCddqy9YwwtD5KfvF3CZgZAZFjcXBrtrufTZzDrKMNKbgXFSAtrJofUHDNHAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g52whnHDbycDAYexqvfMqSPwRpE1sgy3pzj283yCxzCVBFgQ7ahXSYfMgLDt8ExxUmZk6Awg7gLmtjKF4R7xKUk",
  "key1": "3e5igtABArQ7ty5ZwtdsJNHtdvVyfUGDd5mpBfvAXk8Z1KawzTUsnm5YjVjoU8PqhWjcgeSEcVH2oXv3giJLsurk",
  "key2": "7RP7t6GPMYQKHUUKgrnnBU1HUkNGMvN61zi8BbGqsruSTCjFsgzJVv86gvaP6pvGPqXEN61pfJ1iUg92JJ8FXkS",
  "key3": "49SiRrgHn2srPUuFDKLaVyfZRQJTgQNiZU4KmqWrV417mhe4Fr6R6iN28rNX93qs8L1sD3iGhMDHPNGVVotzMhFq",
  "key4": "5eF4k6vWRSgXu9q6KqmpTSstvc2oH4NXChch7b7KKXmdB6cijg3oEr2tzc2nr6DW1pySdRVQa2tMSbvTEjwx3zG6",
  "key5": "3pShYestwvNFveqyuoH2buua97GyG2WjvaCXdYtybYyFa1XqLZcsJYkm5ZZ7seEu9xCSbSMFXqKKCmtRzLz2zu2M",
  "key6": "2dC7dt8m3MNzUw4uL9LgMHnANyspqeEispEEpoeB1rWik2SLJ83dMpEX96GUByh72vb53Hh5WuZpZZLjqXXdiDcF",
  "key7": "SnTt3umr5x5dXCpVot2JHtMTXf9VZwLWEnGj5HcRhprRNrVnGefLSDAgz6FQPHHP2zriLWjR6SSLJLqk5xqJKnX",
  "key8": "67cTmCiA8BYBc9mUpbLj7ysSWKGbJqY4jbNguHD1enLKj5CCz1W9sUTwkUEgaXNgnzTmDBncvu7fJzSSmkQYyFrZ",
  "key9": "3w6AZSuUqfgyYqLA4tfe3hFC5BozUb97gwRvw8tHDRrMqpcsBBj3XZjZUWyHj2nsmufUbhABgLnipjboCCXqw8r4",
  "key10": "5qeAi4JXbkkgqv5RMvK7Cdn1goruJYbQsogT9p9YCUjUjt5kYJohxGPt3ZrQgPUJTJxTK5QEA9jzSVowwKu1DMqM",
  "key11": "3zkFgXyZgXEw23s4NH12AZM3gAKnc1VsK3B3bYkarSiwoibCwuhg3TRNiWV6PkLWNh6y5CiZHQTADA8LS44aNLwA",
  "key12": "xcy1tgRa3UoWyNJ1dBfNd1gC64n2kz73SYCtWXUEMB5obfXFYPjeAyDFF5t5xJeHNmz2avBnEjF8UWCYyWGct2U",
  "key13": "4dPGSmqEW1LWwnfAsDG6oDoTRioShnLegydpKzESm5t19JTmqyGaMY75J2uNWy47nRjL4h8pnUN5Mc3EYvxuZtp6",
  "key14": "4SDZw5z1d2kcEGLeLzH2cBDoEnMVBKiUamNGq3d3YzfNp4FmgfPLqmDpfWggJVK1x6JV4YJHuFZnwNutcKCdYjNo",
  "key15": "2Qj4RnDY9wGuEWJtWkPEoYx1u6kX5AcY35MbWu5Hgq5gH8safa4cUmUzZruDrM3Q5mb41szdP7xE1RbEsH5JKqJq",
  "key16": "5QeSVMUShG853UFdt186dw3x4Q2Abovutup8zLAvH1fSWxS83hmozVHjhn9vQDEJqRanqGppQvimGSVmkyf6GAXF",
  "key17": "nKZ14tN5Vw6yYv82ru4yN4PnDTXyVvFNzkTgN3UQamLLBxee32DCSL2eiFh7ty3KjKP5vzXbQqwPvvABuD7v61g",
  "key18": "5tyPQKCS63KXMLe7krs7rmCwxQhdQk76WKQhyztCixvEfscbCnAYodernf3XwnRpk3VRu33yJqwCn5GZQthZteWy",
  "key19": "38ihFYRVJGNU3GMervwSXyGWL8QMPGdUzSKC5aUgP2pPAb2TSRKZYwJJZiQnzZmDkeEoqVmm1DFns2VYz8KHEVNC",
  "key20": "zBcmHGpWE4wmP4t8jTVViQyfFRRdyPY2fJN5PraZi8dVuQWx96wjk8bu5DBsaBJsV3hjg1a7kE17fVjesoPviVy",
  "key21": "3HjzAr3ZG1yqQfaHLTURM4TBarPrFWMNyZ5h1aBW6pvHyC5EwS3WXsM8uvB5LhrdCt98trQJS8DRrpvVZ36ZHnai",
  "key22": "257viX9VZzh4Ff87Q1XtSaWthuNmh13TVyQgxDGsTFmBMQfLz4Zanf2TAg2PKGSBQusxbEpVfPffRa4idL7aECLt",
  "key23": "3tQ3QFY11mtsyXyDKiWPStPLuEVdrAdrYXHPZW9trXtN3TKTAy6GudyUhUTgEHvLJ9CLra6hGy2jGiQbxAqyJmQb",
  "key24": "3JYXEg37uWVwKkCyFwXC6w8JZdKLDPN2V2ig4eZkwEgAhyzYTkQWdNvwwRkaqvhF42866kBdnWowz7JEJkSi9Kq2",
  "key25": "2XMzjn7mbNFcVBjUdRk5oUnJJVJWiFW94wM2QUcnuZoaK4cwfK7mxVNyVuSaaMUTtxdnZMy3VF1kRcdKWruYi4L",
  "key26": "3axggZKXkSxSwgT58RLwzHYqgNhxfcdcqD7LhDyyghEhoZkVjuZmjDoxgwbeqgR33i9D7N5zTU86mquD3DY5WCra",
  "key27": "5Ne9SPKS7zn7NdNhSFCZvVrXVPTGGF8yp8Hpm5wUiPvjLDu61g8m9PLxZDvKor6HiFnUio2AtNRukwQzmskR4CSi",
  "key28": "41KtF7SY1juJuqoypqGEJdeXeCZHZ3nazpqrXQx3QBrMz1qwWKPtjQo3SpUxCfcbZefvxd3UpjPYxs2ukkMcub1p",
  "key29": "4Wf2dzZqKYU7M6Fi7NiP1y5A7DB83CDn5ACLDCCgifL4P7VfbqRbifhppTLwjxux5QqEn8TykM1ynHj1cTCgGxHd",
  "key30": "4ifRXj4CrHaHmiBFF7zDAV2QuvxW92ehL3iE7Ft7QEwh3fwetN4yvWxDX9tRd1atiPybFYsYHdi7teDSiHo4jzuQ",
  "key31": "42yYJArtuZ7irmPEB7cY4gUfnRDRsuoRB6AqJQAdqVaoPdapN1nqQrPFjqCfYtmL5JcCnvQEn7UyExZwheXUTSnh",
  "key32": "2GJrfnj9p9rV6TxGeKtEGx9akZxkSxrwuRLxk3mXQn297mKzCiaoqGUfdoyzdFvVXAEFSRUcHLS3pAAThkbc37GU",
  "key33": "3JTw8T7KqnAAJfQXTTqWuf25JJr6v31UFeVqQ3BBzyNVzBJ1HG9HWkRy1oodPBvjzepG1shWdnqXVkK1Fj2isLnz",
  "key34": "5jpJmGo4zYFRCQXa6wn5DLDNocmSoVDCkw5MrTVX2Mo7heAUMVdHfbN8xzjyS3bmxNt14RUreyXLHC4gqAAhtn7N",
  "key35": "5DYts7ex3xA8DVasZVZNXqvcZeZWwMf7a4yjLw6pZMK9QjBTyeVVzsCgmwKLkAMH4sqbxDQzvduVFqCoBiadFEAi",
  "key36": "41XkU7F4j89MhshcswEoTBCqbFHK4HC7RKZvcST2R4xqUZxGL7PARKuMk46sjPqLNpoFuEwFX5PqJGs3kRSpGY7X",
  "key37": "4RwX6zGzYnY9RV9yze6oFZTi8FR9tzwHu9yNJPT4C4NpZs9tEUxE9y21hn7cSHL1V3ePMdysDUHDXzbyry9APXe5",
  "key38": "MyMNVvBLEvTwDSmBDaN5NdukTZCW25HbQK7kodDCSLYTVc9hEEAGa4wBJMih31FxXhDchFjXXF1AkmYHXYWvEkS",
  "key39": "2qCv22tJA3GqJKudGCzJ8cCWVv7ZLeQ2naZ3u8WaR1tKSwaDTKFy383MRskMRg6ktY6XmCWDjbp6kJJJ7uY7jRVW",
  "key40": "2opChj88aRL3YqKekdyKbEbY2BDqY2Y7uREgG9aMKWsEq61BG15y2sghQexdnHcfVEawnsGXm2kLHqMumSbdVc4N",
  "key41": "2EFqEPqAewETD8ZjbQrTRRG7cijVN5y5PY8jxnpp8NtSPut3M7LYumMb6efJxA7P8foNeX3ekewYHUXtLG37qXGg",
  "key42": "3W1jknmiovbSZZikqJ5p8hJC4wx8avMj17PYFLtFf3toBE3Bt1moyazsX8QkrgF9xzgccWe1V1ecWAyTDpFVxcqx",
  "key43": "3mTHrB1Ld7roJwRw6kECvYJNMHTrNVHx5HawTkcpHyi3xLVU57Z6ePMKT4HkfXkwLNxgujWijRN5BGLG5uUnHqqB",
  "key44": "5Ermrv5gnwmzYKsgsKaBtMBd8c2pLgPaiYBpwDntjk7xw5bov79x2LoPzYgPjbwAzht1gQpzZW2pbtTBfcDPrc3f",
  "key45": "JmcAQQcJ1nNQDaxiUWVeqXdZoSyuJRBwVVdU7vSVrmo6pqkVPBrQXP2yCsFLe3uTD1WRigyKNCiW2iWuWCrUAT6"
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
