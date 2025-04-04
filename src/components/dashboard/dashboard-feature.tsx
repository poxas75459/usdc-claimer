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
    "3aHKxeT8U5kn1hFJdK5QVDM4e2reynBTf7tY8QH68CNgbCadKnNJGCdVbkCF3XsbEbomRWNXVxnRe3nrWBZnu3L2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VayhkyGMgGH5gv89PVk17g6QCFj8iUkA3RTASDnSrHv2BSzEVvMtuHAvdeTNvRGP8zGXWgNZ2MAD7AgqpNsgzX6",
  "key1": "2KVLcz4sXMAQEdmGULNHekfhb4ewn7cXQqdr5gqbqNRWfzZ2t2nRDPsKoxWkZMFEMDP8eXGY6B4h9Z2AxUMfjtMt",
  "key2": "5cSFyLy6jJL9Rj4WioyoEp3wr137jT75iJX8bwSmsXwhGwgQ1DUp6Ar64SQFvaCSFau5vJBE7NJwgu9NnVinGAW1",
  "key3": "5Gx685KmVGQLNRLTDddBA9zCq9Rzaovd9htv5zDFK36ew1JH1wbBLNYcWkxhwrLpH4pc7o1HWWmNAQqiQdxqUP7a",
  "key4": "43KVwtJG4KfH7Rsk7YNVuWNNAqpj4y7wXiD4YsswfsQrJ4ZBTWXWsTwmGRnJtCj3xs4ndSDLF5hV3NKJvXykbtGC",
  "key5": "2ypsDnwEpvY3GcyXGqMUASaGcLiVmcbUpjD6cvQcgnzN4ZmPF1EjsUFcUxvwUPGWzPobnRh54shvzrokxzBTo1Vd",
  "key6": "3G527xMqQXgHFmyzUMSPdLE575tcryPtWYZmQCy2esVipDAJ9fPjD2JHssKJ7MhiXkrTsMJsAYoaKPaq1bsPPht6",
  "key7": "WaiaHdMqKpqqPmYUZstWw4oUnapWWNVdWbeY2J3fX23iGCZe5FYRswvec3MU4SPo51b1M16gzWhMi1RoceuQzVM",
  "key8": "4E8YZfgffuaPhkRPNSSLZohWNrNzdhEATvqyfPCJ3s4GtNu5ZNbs2ATNoreZPqe4oBJsRGiUjzxDYykKZFiuvyPM",
  "key9": "5MzbKEdtadBEp7d1gEirsvTjQkiLmecPiRHR7hpaTBPk9qANH3GMNnjdnj8aLMsUDjtr2wFGPKzTCXam7WrUq3Ws",
  "key10": "3jAFj7mgwVWF2H3iLMJekmZ2nA8VszA479kNbTUwPCyECmy7AMZu13UmwZPKUkbr8mcMBDVuhgt7NZvdgkusXQEh",
  "key11": "C78oHmiwgrF9EAaVNgywAfZw5RDEuxVqoq5RXwtSdU3363XPEq2BDvFdBtbsnYFZjqmEBi6XzNmusXkyrxe5EaH",
  "key12": "VRNbgX54JjUvFzeFLLTue8Sj47yRduDF8uJNjWQN3MF2b4NHWC8XXHoGhdbz72MpthAmWLj3Wgeox4J4Mn1msWE",
  "key13": "327nifCod8kv4CLi9p7K2777DmHiqFNacV7Y8ucwvLQF6xyK8bYdpHduoSKvqeR92xzPmPWDc6r6vbHBQntUhcms",
  "key14": "4g3xf6YJdTUHv75DcsR27JBaQ3pHHXCphss4q9Z9CwcWgGYY4pFgh3B5ze3iEzE6m8STAqhbwMHdQSxbWpKasMU1",
  "key15": "4sZ69C9scU1GmhyTkXjeGx9dofJDsB1m5zj7DE3iXR5sx1BEZDQJGKQ5DL3xVCaDoJn4Nq5cMXuvPHVscV1JVzrZ",
  "key16": "4dHWSFFKDQ9bv5bm4VNSS8Uw5eEwKBj4yeZhujVPucar4AoLme5MpJniFrXGsT3v2BnQLvp18a42o9FN3JwFyU1M",
  "key17": "3rKsmSeHXsGa1ELtPDW2GuKpXS4w3hyz9bSfDwtwNFpXgikYgabae4rxPZk2u2KoXDreTTjaDyty4h5yUgCyoH4T",
  "key18": "2Mjh1JewjoXcJjKuHwnCA3RQZmB8PGsds6LAbnp39fksGaH8JcT28xkGMbbKWSE3kfoX2Rbd1fr3pCpCt5CQYCFM",
  "key19": "65vdSLNLWqEMVdEJodHFM8YnjLfYdpUguEzvRphrsZVJ9FM7Er7zAVj2N4yzXSmfy7Khi491mZ7tiADuiLxNdgQg",
  "key20": "3zeToSs6X5v8ugZYg1ZXANRGzzHrFykjJR1LNkioR1xFEmWhUYB71KX48zbnjCvvC8NqSBasFsxiY2oyVwcDB3PL",
  "key21": "4wVQ8tZDgf7UvxHRxjmeYbxHXmdoAv1PeBsdL5vjqfN6NnmuDeozvDo3LeHnhpbnKi6L4Fa5HEMUqfXEmF6G7TqK",
  "key22": "2ADoSNJ6SnrnUiGjNB5R732bgrH6duqYkwit1QST2i2RNcRNgpBEGSSuvBWEBWUjbR6jD5ZE3icYsHFS5u2p1QeL",
  "key23": "3V1wLbFepJYU2eJVqihHd2SUgX39984vBpYGw5iPrqiqhzdiXY3kctbP8hLV3xo6PYzF9i5CM8kPqr3iHrSnH4KZ",
  "key24": "2b1cqEAb3ThcBh3UXtgYFhngFxf7bjYZuwphb17Y4WiskgWLSPn4UfqAJqWGZM7x7Ppgj9p98BSfhveL3jTEqAuv",
  "key25": "2G2exu3tRR6VtaoScuZ35CRjcSnQvNCipy6kiTUkyVf7pJxxJB72bKQnXACdqdqW3SUa9KWyLnpf7vbH7t3vaJib",
  "key26": "5MHTh8UxMVSexoyNBuXpYQAZcVhs6ixx2k9Krbkchg7WjnuWduFVb3itgHVNrC8VzsuJnM5TFt2Ud5WuaRXWSyMm",
  "key27": "3TFiX1FC6KrggQ3AcNynM4ujP2JmTtSNAXQxRdgtjEagDy1TzRtwjf8dJ9Yk4uGoUb8h1yhEa5fBNE17mNKSNF9s",
  "key28": "5GpkbmPVWuoL2oBE2fiwwiDcE8brp6NNE3bXS1b2wEs8BDiEsDtMzwcZeTiKVUSeyBoo5tsdUANBnab7Y6LV85ek",
  "key29": "2FTgQPU7x7Rb7bjA1RUahVJnk6SrtA3ZLQnwXkBSxmyuNsPFVPsvz4QsscphkmMY5J4bi8UFmPmvrqPpqfpmYFqj",
  "key30": "5aq9sVirazgjjvvYuYDdCE8jE652VbyB4fwR1dt8JFK9jLKmMVZYQn8DxSWgqnLg93CBGruDYmEdSMMqnmkou9Tg",
  "key31": "4zwvuV3Zj7sD3URM2EJEDFWp343UWUNo5TCBu9QrYGPpUsrDjyN7AYB4LEoapruxatXS7MVccVWjFKVARvy4HpWe",
  "key32": "486fdxpzH9thBu4wq86bwEz7gPLZ3qDqvjLaHgEeR8CytphaMxiAcSwdG6w4MrPpLamPzQfWjbCHYBCFJgPSzYVL",
  "key33": "5B7hxDpB9oD6SrwRCFBMjYMWKFKR4sZjMj8rZvxGjR5W1B6yLnDtsUmwrqJ2nekGEoSjptvfqfXGTt9LUp7RJRVr",
  "key34": "2EQYN2HmjsJTysG2xQWyRSh1ybAca9HYQQPQ8NNnmiyg8qxH5R8XMN5FvCAq1K62pWPYoYpkm96Mnm4PxaZi89hW",
  "key35": "4qFgqnufqzKJiEwgd2mE3MWwACVSczVDzGPpP6oP2izUBLW6hTNmcWxKhtTsBzChjBRyzh72iCkoYGZA7ZrB5p8y",
  "key36": "5s84cRUXawr4NNapR4VPzozxJfrkk2A4YcS1cfg7iCEM3LdwCuiAb9wM8eFYtPTxEGCz3qdKynLh8KwxLtY96VTp",
  "key37": "oggYCbAVFqX5mnff5GMToWjvoDVPzMjhmDzgZMAdZt1LCGkvs1ZqY8EdfmZ3DWWZyZpKkRDDqgFYR8XKd5EnZVt",
  "key38": "62hjZWP8GQ9UDEPmMQpeU3B1ZYDLb6bv2aMm1GXCSMNamHyvz9KqApuKP4Sy2LTv95a3zsBX7qwH6bT82ZNHsgks",
  "key39": "3HBVcMC9huv3G4494aaMoDRJS5FC5P7mL4aUEL7Uk6Ldo7W6wy1exiCZbacA8CBMS8cibg8AtfPERuQLNoenu91C",
  "key40": "4QNkZCHd8xT55eobpFa6HkBUoAhQdmLFhqwUeR5sVTXV9yZiuU9GHjRUrr3s98HXwQ3GntSWxKi57HQ75DFMaH6H",
  "key41": "2q8SVWnNQ2SUjmek1KRftBwjrLQyNCxtfZEebJEMNezdQ8JnRZMTcdbXmGTpCoz5uotaVqT6xCTtawPW16yqP6DH",
  "key42": "r6KyfSQd9kXPsW2MuLpGeS7AeKg8J8wE3oN5bSNXYF3Th6GgpguusCGGTBvLwCVkDzqvTTQ8JoCKCZiiN8D23kE",
  "key43": "4XzVNj4Ee8N7fimwsW8ygwcYfRa8DfQ2StBqbdodNiphqnMpymGzRC5bVdf7wiR3SxqC66HdT3m7p23Kvk5ooziv",
  "key44": "4Kkz8LUZjEXLaKvpvuCC3sekYPBrL85A9zVsxDwUvKEr45zGa9DZZ3h3NAzo6aJQV4Qbvomaet98peNDv19Me5Zf",
  "key45": "45Y8xFa4b4cwYk21qMuaA69WA6GgYYPjhVzCqxNRa4WKvH8xUCXarHp6tE8LZ7Hr4GMYdSabJA65wBVMZyu1i7Qv",
  "key46": "5GdVn4sUo6dtMCf47vb21gwTfKkK37y6uWg9jjFCJQd7BpNmQvdLi6F8qCt9rDNNHLqwz3ZHikQjVEgGEJ2GhLyU",
  "key47": "2YAmhkk2WnWxBaSeq1uBYaxmwX97o5NTBc2gWeYNAK5t2feJ4dxm2hnx2d5nDbztwyPdjiBw57VDnXaHkvWMUhZE",
  "key48": "59a8wDoqYhYiwHc5amDy3s9i4gG9WQsGaHFCiMxzkiGyvAi29kz5jyEg7cNEJFcR5rs9njk65WvMcvxQBZQBBUZ2"
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
