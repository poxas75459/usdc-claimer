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
    "4fmz9ChFUFtRtogewJPJqB9Nz3k6yLkfbVQ5P7jpu8Kt1WS9Tahsi7beBfJrSeYHZG7oTci78AYqzawpcY48mHiA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pzBsfSPotmAtG1JW7ACx9DJALnb5psA7NDbQ45Q6m4NhFcNNWVfSJTkfad9R1E1zrUtNEEriXN4h2EH6xiMZckx",
  "key1": "2ZbqYrTNJ7wrQKZRdsudB4XHquBgurKh8TE6rVSTJxkHn5d1uWATr8ZPmxcuhfcUjNkAEib8BTwhjh6YV2ockKfo",
  "key2": "2GX5dKh3ZzpL7i3WYAGDUfX9LBBCFPCmbeHVuGscwFAj5Gp1YWDLtEB6ymjAEV4C46pavHijE9Wb2xUzpqKtk5gh",
  "key3": "czZxbbFM8bvqSZ6Q7x8cjhL5kPNKJFo7iXvm5hrf9vFqmkgavrA9XBCima2y4VeFrrYGempjNw9fqLJhnFMqX2d",
  "key4": "2F1KB1bxnfAMwZNWHc3xar7bxoRPzXGSb7UrrdN2tipBUkxbUSJUJqD2L4k1v7KPGbrTVjSsiF56brb6acN8RQ1Q",
  "key5": "3Xi1uDzRPezSPwG1fgqXqqNBpJeCdrCNtji5mMa8MLsJoSmBdUxrQdMQqzWxmourNo6vJHFZayKdTs71Lmf5Yfzj",
  "key6": "2Wzuu9GQX37b3C9iXhWqfLdHM7bWBZuts1rz7K5zW36JNqtVD2vJApHA65zcLh4yqHKDr5hUxRYjrU3FbP9WWRSc",
  "key7": "43u6z1CCwQs2QD1iCiApeB9TShz3YSgnt7PUNzZ8kuFyZsXGkwniohpg1uK5Nx28RXRRLpN1BfBw5PAMLngXEeo5",
  "key8": "267VWww894iWaDQHgPE5Q8bEe67PsT2dhe8YxPMnXeQE4upJuDY4fp4WXZuEktTWQi2HLNdPCFspKs5e4QADaRyp",
  "key9": "5tgRQDvT6e3AUnP2uRDNTQGY3LVwHQEoow1jdysQhzPRtr84fcnMxfZnrJqn2Ss8CRo9fdX1PgipdtAWejCFZnvx",
  "key10": "5tExzsMT2gV7xwbk3Hvy793YgrTAdA4ixpaNnhrpTceYTTTr2G6rCbmFrUWJZGaPPd7Ggp9C9xQtTEkL7n2ZAemE",
  "key11": "Ka5mXw7bMfSsWfd4dsXQUZ8WbZDXWaTWGQpdu6xPukQFeLjrHScjY5oenkrmDz443nFsVc9pwEoT2X5z9aDkiBJ",
  "key12": "2vssvZzn5SvaaRQam5UCc5fktyVhijSzQYRYNoq6r9wq8c8EiBY3wZvRrTSD5PQFsQANPx9uoTeznjs8pUXU6oC6",
  "key13": "2j4oHBTPFHDVE3qfWE5nPXcXyieP7cFLpAMhJ9rq2diZE4Qt5d393pG5m71FAJa7ZFmgz6PtJa3Qz5eDVYk1tYZU",
  "key14": "2NuQJArEvoAChVtWN61HsuS29v29X7ekBbEFYoAXKYHnuUBvtJGrThZRXMMgAFrsPRVDc77Vi6P9p1UgdnPA3UJu",
  "key15": "c3iMeURZNnJZs6xaeuWKDMkoek8RA3mn9v4AtjFjv5mocEowGFx7oA3YZb5cvA9qEPkxTpVPDDvmCLkChMrXsM4",
  "key16": "5fd1ukdeNg7mLqXBywiRN4GaJ6KBJ2y25fqZaWibGL1Q7FJtj7kmVGffTgqT8QhhrifkbunWLrx6wTfG5DVSShc5",
  "key17": "4oEzApnFdoQtc2WSSCAXevp6LstK9EC5RQBUR1JxXUtuLYPeU99cw7A8fXJYPLX89xWEkWr5jkJUzJPfcn73zqz3",
  "key18": "3moSndTdDJ6UxW9PWVDfhhdk8a5dboiSNP59qg4kzP4wHiYRz2Hry4M2AWE6btDcukUnxaGajv6KHyZuqS24TC1",
  "key19": "3ZBMGTJbV8QbQBpA5HmJQesgWV2QKEiPLrM533rqbMAMocMipmAW2M9563roj3AWw7nj5wzTtC1yhUVgSpbzKZYH",
  "key20": "UB7DADYqqDaUsWBG8z5S2opFDhja64Pq432vnHKBKEN8a57K8M6E6ENNeiCqY2JLB22DbzAkBQs6DeDa1B8erpj",
  "key21": "3MePS2kb52psc4maqnpo2eWDBtWzHdJPzcrwbCjMQV68kSnY1jETuoukb7UiZg8tPx9xg5gWiKMcR38KGHpKvAMB",
  "key22": "5b6Efkrv5JiuEgxWdgC4tBaRZERbRbfZXrYTrbKfQarG6TEDyDCgmSe8coJqayUYNXFw3i7n2K48J5ns5vS49Xah",
  "key23": "62WkZx9xoC1GMxbUNztfa8C4gUjaZmQmi6eBeQuShMba3J2qjMBf6TPjh9xkv4P2whFcJqtwKgLz7X9dTgLBWGKo",
  "key24": "3Q11ptkxGoWRd82SSPNFo9eJhzd3V1zBTyuiVfS6ngXadi4t8Rd3tJ1ww6zQctGBLPR7UQHfP352JU3YyxyoLdQz",
  "key25": "3Rf5vFtAPcCp2ftvE4xZzjQ7M8swFUPZJnnVtudY4rzM1CcZv9RhdZtc7VKfpG2jBZKFHxXVEbTThym3rTv7CoYG",
  "key26": "42DznQm31wwDPKEwpAK5kAa4Ws4tEgeZukkn8NY5nR3xhHj6opAgXav1x8TeA1TUGCSgjs2m7edKn2X7oN3Ceu5y",
  "key27": "3hKBviiQWPNRipybc6dPgyDWihfSKURW59twfRzXxAbbeAP4wBSBv47xeZM3PvzDySNVcWzVbjzcMKsZ45CJMZUq",
  "key28": "3HE7jKHc3M9Cy6eavVqUmGWsPJTWT4WkLfQqXnZ7615PUGz28JVymYSRb9yM7GtSfqhzxdnD6LFn1RU8APrhww8m",
  "key29": "5vQP6nuB17pZ6JZdEoa9Lg5G6GrqyhY2WWNQPnGiTYLeR2oUYTBuMxRPggYjQTWcpptcsBqUNVPf5QCCvp8tKKtL",
  "key30": "3LLWQPuujWELpc6sKFBjiwkNSPknTtan4dhDELXz39A146VxxAqjdSgHBXoFPCJEX4qWv8VUfVJvEC4vFyopMPt3",
  "key31": "3c8daXDSpRJMNRgG4A2reqtDymwNK3X39TAJVGXT3jwwWKhwc7pJfCj8ApjLcV2uS8dsbQ9iYbmTaa6m8z5hna1a",
  "key32": "2XLXfqzvNXUFpa3cvadNTHbrXQakisS3TRY9HUi2VAb9PuKTU2Kpe54FqfkFozHp7exxDmtcaG3m4hDXMiqJN6xE",
  "key33": "2Go7LVPY3yAMr6fSmPGWL5htpyecSq1rSm8bdm79e9DySEZZoXaoioNGQfj15PdiQR9oNa91TgrFJfgz1DPECYgK",
  "key34": "2wFqCo9qYQwZq84PjnNCnbDHuPMAcSNZ8huw3MhSrfAvbYtEZuGvtWQLyuiz1okVHG3wgDn1Y9ZAfb9wgUCJvD8K",
  "key35": "395ywzd23jErW4KC5vrHC7CgjJ62z4VGp8vTkcouBbt7nDP2enizeBseyeactqM1bgzA3UMycPJiXnw97rNUVvYj",
  "key36": "5yMntDRbccDpcMULAdwJwDD3M8kckqYAa8p86vMz5fghgyy2bNpTJQYPbiDXWFzvjcM4ZFH7X3cQbdwGnaR6oxAW",
  "key37": "4aRF4xtENX2cSsAPA8ZXiGjxsjbnJXanFEsvybBb9DcnzSkTXpcVP9JekzKNDDXoYHR7zN6s4EjvcrT97mRwPMVz"
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
