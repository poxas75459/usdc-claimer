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
    "219iQuvWHAxkkFRjKNMqr2RRwVs6sd85ErsJbeE37eFYJMizi5QvqPjSZyF2RSGG4AhakT3k7okxX8TACn34jy3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BFEviEPhDFz7pjohEiuaswMEmYd4BazPhZpZBfcMtcESUt3KwKdH2YtvoyS8kbpXysNxXezsMZqFRFoEStPujov",
  "key1": "5rPgiiCfjTYBUZJMxpaVM3yLXBP3cDj74ghQeZwdtVyKUEdoHwY4WMGH6gvikwWds9Y6pKsr7crREo4qnZxgpfkC",
  "key2": "2zAP5qdfz9wvid4Ka2M7oZVAmFohCtRHyGwLZfZV3L7fUxjJNJYzojKNttn1dL5sHoPD21ZZ1ZSvdBENUu5t6u6",
  "key3": "4AuCnvET8DnnDdNAS1qPJ4vuz5jqhTeRbMaRaYf9vanHsMjzYdF1VZ8oRre4n6CUr8ooKyegok9uPTomwCPKVTPh",
  "key4": "LN9F4Y3VjdkwfCY24yjUSWoWoRFY4KRUq6U9SydD76ZubXtxU9byyJE2WyDjtBZ3TRW6hBsJuxGSBzoY4Mv7cBt",
  "key5": "2N1GzpzXy94M1CJsGrREo74YKrsrBbK9Kk917WsiW7o6mVFGXss3hAKRfcE66oAFfjmQo5GA9uDGN16kyoxMVVBr",
  "key6": "3UZcv3PnpFgwJFFbX159Jnjcv5m6Az5jmRayqHGeGDnXteWpt7DrDq8QAYpkn8VX1jwtR2LfCYurS73MuZTBN3zi",
  "key7": "LZdsQc45mKkCFEDM4iGX2aAw8vuJyErTpSfJdtDTLXG9U8LFSwE9qGG6tQ1Wp3t3oiihfADP2DanqS1sja5dEMw",
  "key8": "2fj9E64W7rQ9T8W4kYm5n7To5yVhAE3rK68ZFr1Aiqo3izsBL19kjG8xek9LU6rKbTUE9CXkXXUTopTLopxZnXWY",
  "key9": "5eKe9PBypmMXJVAdLEtbjpP5RV1QiCsV3Lq3jCx4rPocVLiUHTbLCjxNuooAeRXtAzaN13K6wUv1vtUeESWbda2c",
  "key10": "2fp8Jypk1cmpmHX53YBbXQ1FCA88fhpdUSofjCx7syy7QpNC34VCw42CRckqvhGPzyu96RMhdgCFFTXcW11WHqm1",
  "key11": "3yGDZk2CHCEnxSnpPYL7vmJxZtt4f1KQkr1f8Ffqet1AEJhCQmptJAYgDdSWgk4fvb5nybhJrAhxCMR8QeN5EU2D",
  "key12": "46awi6JAAyQ68A9Lm4pq7GHoAmiNtaoASXVqmyLmgwysfvG8U9vZmkVsu3XKKqJpk1RAGXGZv7baRwHjaZTax52x",
  "key13": "2Ax8jHVLcWrVZDusxGfEw9GehyBG7UTmScxCwbtgGsEp2iE9KYZQXruqTWPuJAi65NHPYJuZ5Q2VCjWb6g9uwzsa",
  "key14": "g6e9ZAvGarztRGVrBL5cFAUPV1UpXdM32fndrexyXrHV4SqtMDVUqAhXMNCy1GxQE5Jxr5ALZyTPfYAgzFTvJcN",
  "key15": "2JWehxd28XaTbbHdLm4yBKRn4WXHau1B6Z1Ro8N78psgz2ogCtc4BSuhhLcQjnMLqc5fH43vmJ5ZaViAZG6MUHPj",
  "key16": "UhiJmm2LumD7pZjGk2Ho9sU2ieDnJKzwuW8NqpbYPs92PJjUwy8yNiLnggU3kn8Xd1Q3TNgoDiWFAmXqyLP2gMv",
  "key17": "4BANJ775eAoanypVW6zP4L3oyvfSuDboweZj7UBf8NpRdFda69noMQ922fSbJ5B3vWr4XoqjBGM5WJQ4XTA7n63w",
  "key18": "4FMkD3Bxh2fdmG4uM95FKUZGMHnz6oLtFJMETcJchP47M2zDETnVYnKMYgzTJVqgEY6PitvMcPDSjKu9X4j4ceJ6",
  "key19": "2UC8ArMU5J93RXbnBkLRHcgYaKeoo36fwsHY9PDeQUSW3nturrK7MAf7JyPrGEHfwV9oWVaUBUgybsKB8cAtYRaX",
  "key20": "2YA8U26dVuMTF7yzEHAHwbpuVSdphda3CKnc2CCkwD9hNAsEUjp3dvP9vZEmPVg7NzeEgrU6VjjqqvQL374aVfEW",
  "key21": "GuU5FArp3oBw4ct43pcjhBC11zMGyfjSupJaV1RWLwBWXociBXhGC2GnmezXd6sFeGmphHbBaik6rz2P87nCADp",
  "key22": "3QAT1JVPHE2hJiVwZjdfV9dkV84ZMGwJhrqunUv7aeKWk23CYMnTiAZSWR99f2FvmDb2CXnTARWhkz8KknB6dSox",
  "key23": "5MByGLcBDFM6fBVzaJC53SYr1z36GiexuFeSnKbKH5uHMgA79Rc3z25qdcBSYFpHfkcHP1TPeLirG6V78XobGcAn",
  "key24": "3RZwZcLcAxw8QPeVd4MLvmxX4G1rR75JEQSZd7dFLJP6efmZHMFGuzpKhuSwrHgrLYjafuXLdp7YBxfpow9zkSKv",
  "key25": "3Tu1pB5GtbsbinaoosdBCAZ2dg9o174ypr9ZLHFU6Y1g4ZQRjvzdCiMz9cJV7ijA1AbdCJLzL3zi4ViJ1MLVmc5D",
  "key26": "2Adxu4UucBPzyo6PQtRM9FHakJdxwB8aUNiHtVZVofJQfthSNFuAbn1A7hdnWmCpVWN5xuKHfCw54em54PyoAPtQ",
  "key27": "hHjU99B7ZCfEFCR4HHUMRWLiWjtEgPDoNVwqJGTwigLkxiJi4noNpQNTWyM8cfEesaCgMSAD9b1Ft5NZRhP6NAQ",
  "key28": "22piARBZxHiC1rxLfKWn5TqhqzsDggpciF6EqpgZhrE2QgjkT4SSHNJb8Da9b3uXURMm4sQRv6zbdUTEWZapL9tG",
  "key29": "5nsuYwNUPXAiBmBfrLfT5rsdRfTKrNqbFCGn7d5J5LVGpMigpPHMV2YKFDPBdh7ERU2qAhzMBak3B4NyrmZFbnPy",
  "key30": "5bAzQKieTTPVBqCf189fuf8rsU2wi4F9S1fZPcbHw8Y3m37y9LcLjDqWvTEw44ALHbL4dVxgKojo9wDnrsSFBcNe",
  "key31": "uXMhBcnouVth4uy4AsnBAMxUn6EsdzAx86scfwrXysB5CHyPYRCnGB48K8Q2axbfavcLKmwdHyyqmZsdneXQgG5",
  "key32": "5U4M2AWrKhdDDXNDyTFkAfoX6wVbbogJkenC5E6h8kVDvk9DD1Fcg1SNeHVztREnc8brzzepGvVE4XDbqqhWZMEk",
  "key33": "pQj7nbAkiA4GBh8BDVFvekz9jhj2u3Q3ESrV4L9g7mWRcquFerxRZgDE7RvruKkEtrXyz4jWi7tCc6NcybS8vD8",
  "key34": "tv4tAGgu5WCoJyLZw5vmtyakG41BTm2jRE7B1Cf7XU3AJ84LsrfjMsoRxYdww5WbmbPc6utgTMhiStGxivBgvQZ",
  "key35": "3QXV7Ag3S4fgvG2Y6LhYfExQ1z1ahMBHda1ABLAyMiVnAmbEKyFpPKNbhhPEuXz5PXRKa1ekW2nHcxrYnrdBiVNL",
  "key36": "61dJoyqHkwYt5Ujd71QwWFcBXxUi1WrToaezsxFfqDJvLMnuiWdT6zbzxsgwRkbmPvgZCnUk9HrcJVFJhu9HteRh",
  "key37": "5msv48xUuAt4mrix5vxWkdMgEagDTpESR4A2BWkxosbp6fu8EyPAErXQhqfAXHuvD6YcGBbDQhqSbp7SGuLg4ZAK",
  "key38": "2g2X2qsoxwknT5C9Jwn3xiRBJW6QJDtGx4Qib41aA6UV3GYDK1X9uYoaE8Yct6D88tSkkQ7CAz9DfQisJ7eAcyZX",
  "key39": "4KENbRhiYHaYiZZJQGB8tmYq8kfkpBioEnPP4KCRMGZcTV3eepu1iHhjJxnMUWRqFkF1wdNmLPnVVAYY6nMfajQG"
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
