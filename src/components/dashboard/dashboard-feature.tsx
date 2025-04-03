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
    "2PQK1Rh5ckoHBfYQ6RguZiJcZuJf7oniXuoAmR1XkS8gg2QJUuUKecrXRJdWVLT3AdWBDkJEC9JYCZ3AuUQYexdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xEQfJir3k9kwSnaZqr7kB2nUhpT2xNy4BDhk8ATMM1fwQU8it27buEQ4uLZRiKi73CDqmNrSTfK1QXaGBY99JUE",
  "key1": "4LDsApjB9uiJ1Lc1MpbgfrfXtTwEHdx5vkXH6zMtd512CHtptRBX4tigS97LLpkZK9hnG9f6ZJ8GRmj8BQHgD2q8",
  "key2": "4cqfv1y568Tyu72LzBKVHpUPXxKXp9qvKGZ72ridXeEsjyuVg8TNFDbhp5hkLjY8M5iFLfKwq1izKap6i7ExBBPr",
  "key3": "465hvWmvcmqxa7ycg4pjP24zsDpsPqbKiRP2g8SGX15ynSbWBNPXS5TE3dg6ENgH3bSiH7PfdZDnh4J3MGBonf8t",
  "key4": "4uUqKjMM6BbGFngZwb73icnC9g4Hb7gYtSp9XweVL5h9NgGaYXfTd3Dd7agg7467WPDn15QtFzn9WPZ58TbDpxDn",
  "key5": "5AYGY4nt4Qdg4vP9s3YuJUty8Q6GftcXN7oNCsDPSLhdwCA5Q34kiuT6sXpLasBXN4iABMiAMV1Ur7aYjEAZ4zKr",
  "key6": "5extJSff8RLcu1osnWWnPK7gTqHmfvF95FZTQT3qC4W1VtuhHhTuRSQFMSwyvQRTv3uQpJoNxeRPU1aU5kbMhc6p",
  "key7": "4bFTqAgapWjsy9jowMy3KKhjV6z15tz5iNE5hrUVKHcJMsJhbgstLLdt2V13LDpjj8WbDhg67xNiNcSoxWzsSms3",
  "key8": "EVghhv8ig2JgCxRabKaqyQRgmvAwzg5toLdCA5vjuwx5sDbZXmdiDmoiRr5yBxqEtydg7uTCmCN2BauxziRa2hn",
  "key9": "3jXdf9eteD3qGZVcPPJYaHusuLq5QWqVXHXccygJ3TWoWmr4jHVpdqyhx16CpbnfjPqJvL4gYyi2Tr26BpdG1xLg",
  "key10": "3HM3ywXHY8c9fwCQuggd4E2UXWZiVshLVLoLBKZrqw9i5Qky6EpfChHepgCbiwR9eMzHFvmc1TZJY36A5EEriERt",
  "key11": "49TRsrXUZhXnJaqm6MCzRxPkejaB5eovQsFQi8YBz7e5UxTcLmxGtQejggymUmPYks1uKHKiua8nZQX6XvCx6X7t",
  "key12": "4woGV4YP3WPfqhSzxAU93UhLCtYYzLYabpKK2oLGHqhXp9eCZt3HZgYgsKKxb7RjN8zVSiiXz5GaBc7CT873EdCm",
  "key13": "2uPPSxjZU27PjyjUQUnMa3Ra5KnPDQTrYjCB9MmacYMYY5GrL457TuryQkEKwt6evjCLutga6djJNdSHKCnYRP63",
  "key14": "3qcpSQWAfdZ9jDnd814UBD2eGsqYLbLWvUQpJSXLvP51fua4SeorFs7RGr9zw7NBbsAYcy14cakgCUbbybCwXTK4",
  "key15": "3wouf8eKYdXnDiiNwqqHFC16nVdXv77Pv8EAC2fvncXFEeEfcrbq8fHGmoBoQd4X7aYbuMkLrsFXMcrJ73NRC7Xb",
  "key16": "2Le277pzfn6ibe8rNWFHXptj4cZDXwGooPJGq6RsevRcsbB4UBf1dK693FApahK2cGNpTRXBM5AQxU5htpxSzKoD",
  "key17": "5G84MKL3hUTyMA9Dm4Vxw5ghjZpKqX3dAxk9b6nJEo9svh8uDCsZbeijEjMMWcFPbEm9LWvjZbsexVmAUGq3zDHt",
  "key18": "4rkFhXKVegYUGmDKFYFWMWpGDw42pwYYpUYhajkx3TafNoULv7b3m243jnfbzq8ZKPR1ahzEFBv1VZJJ2DjatNqn",
  "key19": "5NYmJK5Kg3Fgqvw7Aq4uss6nCPsM1JyYLh6etBdLyvesLbqAHQHyDq85kGpb98m4PNSaorxs9hrgCSVv1mJxbtYq",
  "key20": "GRdgLeEL6U32MatiW9fXvoADECcc3V8rjwdw2o6s7hTfwn2tRaQcqX3uqRQiJtKdGthEcm9npLpw7GcZanLaqXW",
  "key21": "2jxRMqWFH24rM7ri2Pj3NiRP84Xyc6kfQkS1zbzW5DXhiUawMTg421nhWxvYWvyyKfG6WSGDF6yrGvbzsXQDFZhc",
  "key22": "2eTYYLU2zavAoPDT3XYX7qQ65XMwEpDiSnXhG9s2rf9joEquf6qX7nbNSrh45pVSV16uoLwdUtJNta7TEv1qtPP9",
  "key23": "3KHVv6TWLKcTCp4cgWJqJQan5NtaAAV1gTxRFX3BceNv3W3pgB1Ga5Hw3eXZmKAPAHBhufS1B2fbMT5pXDKt5z3J",
  "key24": "5Jj9R2RhkfUAK4rXAcBuj7gQ7fjhSR8KkmDBoJj8iZ5Q8cT8NZB1dKvqp1UBhegHcMd7ZReX1J55eddCZWrd1kL",
  "key25": "53vcGgAxMwFntUt8q99kcspv9h88Z9ZMW5X1u5mNtxbNNJibCVnJBsADvoHUz1TsrgKVSBvsPxpu2TytLrU4inTz",
  "key26": "2xJjVK94BgsP6SaudPRwtZVMHVQzvCGNWqdD6DeRdB51MfBNTcfazc3pzL3GMFG8Zj5yhD1XRNmuRsyhwDvxF911",
  "key27": "2tmj2trxbPCJQ59VeNR7HigMS21zGC6WG8SJnQN12ATLpTgHKYGTad3NgPBphLzjmNQafhUbV6fSKAbtZd75gY4",
  "key28": "41AQE3WkBSgbEC2tdU4KrVtYbR7CKHQp8yHzNTkoRR8BakyyZGMMCEeHj3iipbejZ9mE57c6KHvPyqyxLvzBzdNa",
  "key29": "25nS8hBfeNzWKArrbiRnzYRrN2UbWoSu5hQ88sgbcTkq7ottWHFzPLRLmoYaWaoY1C51uSQhWFFUqZhSryeebv1Q",
  "key30": "Jm5Q9KwRzKu3K64Qv5RQBfsJdur2bAG3R2kxF56EiSywXMbT5PLKtJmE8JY7RvRukPw9Ko5K5J5J3TNwL9x6foC",
  "key31": "4vwn9YibLucydZ6ReKh7ikBWbWXmyhd3PxsHNwfmStk1Z4hWQzeQzdHwKnUQoqkxd1nQdS18gEE9igUrGcz5DHX8",
  "key32": "2WaR7ksLLyzvbHTXNNbYLy5S17ct1KXkuHJaAenbHAURYpXaGQcVXDt2khUa49h8UfKTWiBcJgsoje71F3bXXzKD",
  "key33": "hG72Tgpe7vyXco6Uex3ARGmRkLxJhdbZaD7yrpZhANqDpePjmM73JaD4W86djKpfw3bXktSsxNtkvR5KMCoMno4",
  "key34": "3X9aLeS9GE3zmrcyLuLkgmDRCZrG5HV8CifMmd1roUnkRp4qmZmvXaCyewTux5U7AakZoamZx7h9WGBnB3edsdEU",
  "key35": "DsfLEYPC57yGdpsZparozUgYstc5ureavaNbRSWoDVCQArXtVEwo9suJfL2EutNtBj3XKPQtyXKebYpYNVhccEs",
  "key36": "3PoZjkVDzpHwoBJ6U4uiRshGxNVUdKmQsWPYW2SjAJ4Zn1skJPxDg16CFRMbzv5RSkjeUvt4wnR7ZCwEUKwuuWp1",
  "key37": "26rijFwyRUyFpzQetaK774bVojGgkevrcpZ34qBsLzpqmSqRs7ES8xaPPH8B1ANHUYJfgGgdSo3bW4zQA6vViCaB",
  "key38": "3yW9JZPDGYuw7WSnhSWbLmPSQD8VbuCYM9toXQL6KSEc6oe39Cku1DBpPzRaD9AmutWDZBxyyx4DNRYmy5rXjLmT",
  "key39": "4F9tQhoRwniPndpqRfxmAJH7ny8xKwvsmgKh7E5vnFqUozShCwX5nFkt75E9xdVNszMhg2eEVYpWCXjBHHWRiehB",
  "key40": "5tT5gXJd6c4sdYLKoQ3tRP1HFqTtSjnUd8o7F2UPNQNWFL3SZYg3cJD8yhFmu3JmDxJhzi7tt25Wp1xiNchDpZhi"
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
