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
    "2sw1TFEMsQguSBi8YWHLk6bQ2k9SFHYAnRgZUtTrgCscwS7NJ6pKhWgon9irsxvcYNp2Razuhvw8sH4pn3Mymg7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qxajAiChxygpr37R9GW19G1zcR4MFRiQwyXWmgfZawmdPwN4oo9AhyHBGTvvCAiVTD75ZkBi2Q8xWmPkw4frJtv",
  "key1": "2GFqvsYW2T9vDmiPo24RqqaeLXf82ydVqHhqE3xyje5sadgHUe4Jbk7txuEqm1ymdoLxm8vot22Z4SoZ21ocs9ed",
  "key2": "62GaQfb968SpCdftn3X83YQEqDwn6Lv8Ag5o3fAAfZFnbA1H3xsE3go45FQKfjjz6wdFMHEF72UFkGiADi48U5i1",
  "key3": "4pd8C6LJyMT18euR13zmqBj8jpmTFA7RgjjMeBPvHUppv1ZHNms3eBBezQTPqzyBVMQqo2VSR1eUGT6e7E7zBJBw",
  "key4": "42FS5vMPAHcoBmN1yw94thZiLQ3C6xJajJzqtRhTAFYpq4sEHPEUC4FpfhnK1P6KUteEg56PWtLPrEpc9AB4r6rw",
  "key5": "5XS5o87wX2SUuvxmYHuAxeJDCYHuBmha1BU26B7aZGbbzN5CJLK3jUbqSVthtbsjT5Sd8DC7fGwrEbhpR2dHsMVZ",
  "key6": "4zgcfinBWTGAmSJUAt1PWHNvSZEhtPJBft5kuPT2y6T1GTgQEqMcNnH1mJgHp6FkqoVkQkozAP99MzotByfD7qKr",
  "key7": "5UAuA49RWZeGC1nsYMPoKPy3Uybn9KgyKELhQV3btvuscFnnLEpTvhkeaFXBNh2Qf1DYouPspXT9dzwDRTF6xBaN",
  "key8": "31xDpHpSf9RFtvcrV6zM1uSU1aWLHvg5UsGgZwmpPcGCN1bNQM3h7SwHqdQ6WrsrkewGDxzwezKY4uEWVaAgznwz",
  "key9": "4JuT98wN1bemJzyWLT9jGfDdcvzUTa8KNjvsR8g1p7TWhLS2g1SeJz1NRHWQeBtadpajMHcxLKXF5jrpLR6CCVQ8",
  "key10": "wnUKFQrawAYW16xHvfKiEimCrErPmjhg95Mm1zB21cUsMNjTaLDVnqG63m3zUs6koMTV8evXmKfKqZbhqHHKLYm",
  "key11": "4JVqLoBHYptKrEYW6YUqVwC2oEhwp2gWKadzHGsFmLwfX47WWvnjPp9GP11Y2xUcPewUng2fQBBrT6E93if5TJrt",
  "key12": "5QDTqLpoFFrhYBfdiJTaVnwB97wCi9KghNGphwGYQTHLfu9BhtbCRTFvSjK1ZRSf9TALNF43PmmS1vXmpCDvYan7",
  "key13": "5rgHDSkrZVhPayERKy3r7Ni3jifGPgNDNUaGqTFKZSjEgG1LWjTsDe6NZN6T5iVQWwzmWevRSPaQNrgFzhJaHgYU",
  "key14": "2cXSDFPALprQhD3aeJdrCZn73pj7BoDJ2LYkMQJJzfNZf4sj8SssaUErKbcfaAPee3fJ1EF7LdEcSni4amLApZeF",
  "key15": "3NmfHUdJzu2uqXkQjkHj9p1U5yujkgSrh5TjRQM7AS3FmiYn1UZTXBHyAbce32Rkq53LPY9CHftmWpUDrqAtYgH3",
  "key16": "2rouNGr52AXqKQAVAmznzo6rE8oAxU8NAjwuFUMenZbRQvxADZDWsNQKc4jWLudJaEYDJqkoXsTnALQAQxeAhG39",
  "key17": "atXtqJ8C8UbRnS1L9H1bSfYjr4jG667PTxedKhiXCuH9ATiV2TJWbdZrZakwkV5KduyonqByRuwC1ifFJDn6SNG",
  "key18": "5ep1pYCECs1gLWRj12ikZRgACo7ArtnxmivDkK1rKQ3p1Rv5SCWo9YNgBeP4hoobYpMGUwsXLXQmQMYGLM2u46a7",
  "key19": "mUi6USvDCgLhGQZTE2nP3hmZFWfuE8TxHXpY4zLmPSxeiWxH1ZMDq9W7QQ9tQm1UYsxJYz1K1yur8vN4VN6axG9",
  "key20": "2p2b8BKerNAiZbbEAZfWuDZ7pPvKEAe9J1HxZMzvqrCfu99rzDdNtFzHT8w7DoppTqjVRMbZwmDnXFUJSyxtXcdy",
  "key21": "2uYmW9nnxxnQ6tVmF9MG7hJQrDjn1H6Y8hPf6Rtah2mjikHszdpGrvZAtQmPUhsWCe6QxrSKt4AKSApchcbMGFD6",
  "key22": "2FE93e6NxfkZHnxCTChagxBSy4JEbqmh9hwoWdqyAce6kjv9rMjTgsPy7JBE4J5UJH6G2PHCoSdSYvmgxDSm2qea",
  "key23": "3ojotWKVy4YZLqPNni4JquzES6HjDqo5a8pbSYrJ6CpXgLpgp1xL2zg65ab6U1dZio5LqMLe3ugMnriYJbu3MQbv",
  "key24": "31PAS5jQvRjCN4iLLJfWUoMiqGAbrtRRwwUEezdri8Jk76WqXkkLbfa7ff5w6orqaXZYP84nuQoQZKZGp7sRKNsu",
  "key25": "3kfzRHHKtfKYM9W554d4qBDy2UPoyZAKZVq7tpoSwjZau6TPbga5zMt2fWEH4nF8jYFPVHNfscEhWSjh64A84aad",
  "key26": "5oVZ9VZbATYxRN1mPJNVw6f5TwtXPVYkHBsSXFJrgGJLk1M3LV71fK5Hy57E6ZjpqMGk4dXTgANmx5vPDgPy3EKH",
  "key27": "3RdQ8q51JGuLv3HjK2cYwHhHKzMrtRGy3vgso7XRSDH1zsMaitH6pVNv9Ky1DpoNwrquhTbJSDVjxr5SbBSNHPVM",
  "key28": "3JDPTBGHYmyPrEHASg22MjJF2J7aLWLYZWmbxFCGQkX6JhH33TLhtYKnnXbXGDmG4BqDFGGoGGF41QQbZg1FfF6e",
  "key29": "RSK7KFRGE5T2c2ubXTccjMznF5vxsbmMjpCup1isSqC1Pdw3tDqGnY78hVXRv3k1ePLVjFAjmt7zkTmCEmeEJsn",
  "key30": "4XMB7jrxVWkmMkGcpUMBAwWspWc8MkFip2bNQSsj3pfVtyvFQ1PCuJkZ9zyx5HL7WaZs4fLFArjN23BvitFisj5B",
  "key31": "4wN4KRkrQQTqfReR8tg9xLi4aHMsNvNH242MfuL9gvZcToyJoFHPCRAtV3tfU8SCQgbQKaUbntEXf1rv6qsX32Qj",
  "key32": "3Tz9iWAiJZeEYrFVt8uL5G4uCMzdZ9anejKc48HzeUUtXWz21QfuuTLbSNCFTuJMbAYdhnx1cm51CjegsXmb9srR",
  "key33": "123erou6ak4MNT9UUTAG68HSeX2pvyfDkQ92dP8dH7ntzdPMcaDLLhgcgbYZNZ8N6RZtSeQ4id1o9ALkVeQ8NfDE",
  "key34": "2sA6oj63TtXGkfdVBip2eG97xY1YRUsUTXzNXadLqSNd8wA25JSqFaW8ForQp6QbrHZJfgtZRae2xDbPeB83XuLW",
  "key35": "pri8RjHQCyXv5ga3ab5YRV9tGxiMaJdeYWKfWkUDcFfe4R2z4ekF7cGif5t1nM9C7mDPkcZ8B61p1t8CJHhQkby",
  "key36": "3XV8VSzrtRLTHf7mfqtpEPCHTQu2GmFZfoHesVjrvCWo1CacExNPcvEwtrWfQMNpd9AJAFeARzNMzXWA79PGRR5n",
  "key37": "3zMZVHpf66KhqSt9yYB4Wg7gZbnBmCsyZ3ceD3aEnW61Rp1A7DBP8iHY1zncMFqzWVHcwZPLC9RpSuqr4jS8yfCx",
  "key38": "4EjbJ88sPe3T5qRc8oSZqSLZVhtdMNcifxJJsHy9AkchvW1xGr7MhNxzJmDbH5K1XEvXAX7UBdgZ5k1fUFPEm25i",
  "key39": "3gL2NGQFcoCF2w4B8RCfxnCuVoYZ7d5VV9FiWozMvPmwQ4XD5nv6uSveTqFZPRrHkSjRk6wzU1nfevXg79esFoNF",
  "key40": "3sgs5syZ7GkfSVi4ZryExS51sNqNnJ2UnEw3MQEYnoJvM3ThtxKgz9MSWdZnYHo7vdRkbBdUuQKw2nZr1RSZ8EZJ",
  "key41": "3bLnMpRRz6wofagT8uhoZYFef4YoVCZvWpDhGST8qLmBeUX375s5MCQQzUR9q5cS7cS7sR9yQoQRnK8hR1mywX75",
  "key42": "3oFw5b7vdLd6uFkfNv6kRU2fv3ZCCFVsCiBcuxykbWx3mJnWDcBB61jH15PsCx5bFXc2JvLwA6PFFPzhgcZ9Z9fE",
  "key43": "5RM4J71xAkScoZfX4wA5B9iHwXhVMv9qTsxcohcGUZGNufoWSx5k2UF3T2pvvtucTXLf3P9MPmbqvfAdpwpjC4n",
  "key44": "4SDwud3BE8iXz3BxpFHFEd8kHJeHrLhvYYw7reNPd9oAgE1j8C9mFY4j25AjkCoQLq643n2Kkt8CDSXHGthRY9Yh"
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
