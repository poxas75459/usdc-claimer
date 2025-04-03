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
    "2cyHXXTBjjH9Qsiru6dtWqDCNnni2xn5vSLjCC374eb2mQ5b6TXNnGTZ3TLzMKnaWWppqwaZ7NxzfPncjv4ZqDyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UMUuxHeQketNNkqvVJxpWhsRufgvasmCQh9cajRsi3qGjG7qireARLjsnCh5EzvcCZudeRirw7PVnvxnNsumSBm",
  "key1": "4L3vMhPsp3MD13vmurHq9Qv3tDP5fswd659dAhehBdNCFpZDCjDZqRE5NC7HrzDHkx7ASFJ1Q8uF8zRDbBRxbyWR",
  "key2": "5TetsW9nVNoAjVF2A7m3ACcjfZmGGfXNjtYiFz76Lu65Z9eShiLtkMJojKJGSHunLYpU3NdaWQexS4LVSKRYHtbe",
  "key3": "2U2epY3BscndMy2PDnk9ETgWhTJTsBPdhL9AtT41z2QHh6WWrH8YxX74BycugsiXSMXL2afJQhn31vBr6F1EgUKz",
  "key4": "2knBZE7iQzj8dhyWvKwKfwMRLBL56ytzoFviRQPSS2WVHvoBpxsnHG1zXPVqnfqq5KkF4Y2NSYK1888ycGzXMido",
  "key5": "3XB6D5QK69oSs3HosLdU7qd9L34inW4HMimdpUGDvjJnNaftz6NYusc76xvx95e3V2Hp4hXZK2nHQsdNXV9DTEzY",
  "key6": "zkCVVue8cK34k1xzvqxwoaYd9HKhjPE58NqLhdNzEbzweAHLCRsLvPmDdxCDu5LbBQonLxJ8QE29fWpJMAwnNfQ",
  "key7": "4SYV7trm8LHMY1Wh5pYqsvyhZ3TRN16NY6qLjPpW6jeEgsQ6CcjWpaSVQ7kK1sR7NpdvVLJGqbNkSKsTGzKaCUYN",
  "key8": "2qW2dZUXR9paUDj44BJuy1A7M8JgoTH4Q3TSjVizDiQjuMkbdMXdBqh7wNoHZeA9YcNG4iDbRf7t7zXLfVxojQ42",
  "key9": "2Myk15eaHyRnhkkBgiWvugZywxD4qohmBg9GTYwjqn7hkcW91E99BKrZ7G4Kp2EdwJBwkV3R9gH212ocaGxj6RuX",
  "key10": "2J6CkKzBBqZA3iyP66CQUjA7G5wneR2PQnUhBuAZwaGb9w85jiJnQfFSdU6DNQgg1T2MuaMxwskw1JUSPowmDsRf",
  "key11": "5y2C8CA7vot2XWcUBHK2RyWcPsfVo79HvKbrDk8ZhTphPa45cXdWP6fLXtoJWqaTM4Z3MCjgVWaWBgmCKrzDeYeD",
  "key12": "4oqnWvdVVCh3fu3uJrGASk5VUfVrZe3WeHydfRSwiM1EGstdeNE7bQuJbxvcmPSQwgSR4H5kCDCDwWgaM7NTSnZ5",
  "key13": "2knb48hLgRGru3YVqBiNNKREcTCVWaEFwtXUQsBxVMADxG7RzyWDxaCUK8W2y4b9JY68XiFE5WCLSe447UxX1CvN",
  "key14": "41TRZTLYpw5gkT5iuVEN1KabJpVsL57MMzhuuMA8162MWem6LNzoCkdCSvrCeGq66RRcz4YDJjmqXXcTS9ESRhBC",
  "key15": "2xyJ8fqNv3CWZ46DonSm1a9b9Bvarcf8ABDL9rjX1LbRjWwedsqFd9WbdxB9Wf7EqUpiS9zGmJrYf4vSaGPjPJBE",
  "key16": "p4Q4AFxv58pXwFsCZGmyLF9JJDCxBmgoKMZUAcZFuR8i7wg3dHG4UD3iJ6nA87HBfs3LL8LG6FUTN8b75Xyv6z4",
  "key17": "5eCPpXEe2KG8QqMBbepkyRCXXLYxWm1EH8uBAvTHBuD8mM6d8BhgpGsJY8eVVzpZSQZVBRpkHAUahWf64n1awU4J",
  "key18": "2YVUgCtY6hmWTYi7qr8fA8FwFhXz8Cp7LEjm5Z3V5HPsJQJ9ACoYBu4ecFhdn6QK564zTAQCfbh3fYs8EUPSZfbJ",
  "key19": "3AKaZWnrX3pvU4Ft6Qqguk1ZgMqciG48AcyJU1UxxbpBpTWc4VH8Bv6kSToCNpgbvKkodVKbharesCz6ZF3vLqm3",
  "key20": "XWHLCc9Fkaqy5LtFmCdJ5NePk5jdxNFFeGPAkR5ZswxArNbxh58KejKUQbGVU3rgLhDiSdY4UNFZdSxpyy9rVYH",
  "key21": "4xmJBC6mGRiarvtGeL4KaoEssY3c6tFGQY1zsoTEM7JsHPYJstZUgLBtSKwDzag4DBHuxqoqytBk8uuec4QBbvei",
  "key22": "3fEZzJKuu34T9UmV9AaTM6jiGgA7GkttJQ4Fu5Hz3BXyTxufgUHVtiEPCJcZBoiZjET6pUUzYTcpqCD6znAeVk5H",
  "key23": "3nBDFaUAAws3Smg1oSTHo9WQwVs2SSkwf6CafWJLURRBvh2gcK4KsKNrvnSXRZfgD13u78ytxz62KVPJqG9svWos",
  "key24": "hgLjkZ2SjsMKjGy6HtD89g4hNRqeUnzjfcozrWbKME8FJhK7kcehtMHFvT4FmKNsovd3vXmpw45TPUujCeqj9pz",
  "key25": "4GA1nx2XUgEdsKqrtP48ZmJnK198ML7PKs7p9eMUXsGDNzTCAkGmFsN3mLGLLfoA6QsEYkzhnZANf3xF9Mni9EPL",
  "key26": "4APhvDKFxs4wb4Ppw6VnwG2ugSYmV2zGfUE5LJLohmt2JD9W8baCKK18XzequW6UNFbznxBhyPrxtLXJ6kz85ZyG",
  "key27": "382r86zfnP9RnpHh241sMrrJnoQnK9ctSwDuAUsUNiMidR7MBcqtLSmvU1VsbgHAKD4v48UJijS4jTR4QDZ3FsX4",
  "key28": "6yEFXSaZrV7KnFDcmVwDYDwgq1GNemKrcHyrU9JyY6DfwCgSD7WuC5pfZQeDovk8j9uhE3UnyWRk2A36WDdKVac",
  "key29": "5LN7aAJ363zFmk4SgoHRmY4eyRiQFJhEerq6duCuVCYUnnkF2s6JDN8Lg8AyPkvUgs3WqC7paFburoSqe8XV9pLj",
  "key30": "4q7r3VGWmEZ7eFCkYvTppWowHiDGhbPDBYNaqCuR67mRc5Wikay9CoKHEMyqnbmptx5Pzzvydyoz8puHQNNJ2Hty",
  "key31": "62XKgKHLvREarNqp8DqQ7VH4MAmJhSGzRVgzHnn9uVeLb6P1FJ1SZ55LxmCfXsccvXoNAUUvmLrUke3Xjgt7USvb",
  "key32": "4LFN2ybg9xWMtVvB1MabnyUErcMDn69onhWyEhbiMF1oUFRV14f5cetiYEr2ZVDpJcaeX6H2YCDdHFB6S8b19jed",
  "key33": "2UnLA72KUxMXtZQgod1dL1dYV7J6u7ZgwjDrcAda1M85Q9ZNaUMprqqGidPcx4x1aZmXpj8u3xGXj1EbHb2RkkTK",
  "key34": "LZSiWLvLjD3ygKg8pYpwx38aemGcbRaagJt9pdKc2v9LAmkv5b3xN1B7RArfnSAAvC1fztXPq9wWqAiXJRC1o7p",
  "key35": "5M86PA3v614W7hy1qT7P8s8ghjk1q538Asbj2GtnxRdbNUtjseGHyNm6gh4j7fYPefkUoQzFyNcMvBe1B3KbZ1bE",
  "key36": "3CwL86TyFU9GERE9KMEc5E3eLWsyuR2zDm39Mb412NSUGq6WgnxhzC36eKuNPSHCT2ZG6nfbzSwrojus4wvpJTrJ",
  "key37": "6ec3NhPDojaEHjJYNPpnsrMZvG2dsk8wn24SLwcs4a49cot1k4p4N6E2bTakLgzBwdzFF1UXZAn1MRmgrhL2Ksz",
  "key38": "4oBBp9eCxyVDuip1rek5MrhfRxNU2UMRgdzH9uQ7Sc7a2RWkyT2tkr9jZUMgrrqAczMYEedN1hsfsVN9TYjyn3gw",
  "key39": "23yn2u84Sn4za2Jfpd16fGAgiQTS9N87BvXjSrCDhcpiYrJ5Tj1oyifUhAcXg5XoneHVdhLrGjvgEkqVZamxQ9w9",
  "key40": "5RVdyvDqqXxGz5YEwXW3VeWezSmhQHv1vMcbeyJ6xjhHchBmrdhkJCZ38NaEgXQd17PaH7pRPh2G6NQngjv15YjY",
  "key41": "j2PFweSaPe7xQo2CmVy3jkw3CXvCCxik5NLjFQesyQbK8pSM6rZPdKzEP9cDaiTNM4u3PRk9NRMT94EsKEYAPyB",
  "key42": "37Ked1mPWEG6CT5yHas2sNtHHsmLxpCEbx2AKLDSVBKem83zjzFXFtWd1efkmwJwz5Ze72ZWYF4BrpeP4WexEi3M"
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
