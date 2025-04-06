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
    "4nZwAHiVuHHEBQNAFFRiSorpjD2kifLLAxeQ9myVNeuMnvfHcStmwRsTYoDQfsmFd1Yd2ZjTbDuiKU3cXRScFeVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CjMMfuNcRCBekpoRRKNdCourtq4oSFSweZpC6viVA1uRGhBo4UXE49jzhD1KGt4d2hKYbf2V7hXTwR7nvzRU8cU",
  "key1": "2P49jrJAPpA8ujGQfLFLkZw8EWxZ4XtwmrhapUPiCcxDxhH54SDo5GiUJDv3vektZvLnFYHBHiAa4DiR9fVYsd3h",
  "key2": "3MGWYCW7LZNQLJvzs31HnGtL3BL48ssj5nCxcPznvseFYcmCM9SFUuiVJhYQgBEjskxPj1CAfGbz7sYGwWhHNQtU",
  "key3": "2maE12rvdHmALmT3L2PiP5iJ4KQ4GWFypuXiTYdTgcm4XrrEnY1GMMXpRpNj8UTVTwG3BWTWKTr4qVL9y4NjuyBN",
  "key4": "3EzayWBTJjHj5QVd4LDpW8wxWLUXBUvfXWrUUNUxGCF79QVf8gZ1py5N3cmVn8wfcNBcsZiXL6UBYE3UyMHPwgdh",
  "key5": "5Ai4Ybih1FyH3GZCyRypT7zLgwKkhziD1f5scC9zPh6J5JQ66zXDoMpac1Dko8a5dFaK262KuyDiHzbrYUZ2DdFB",
  "key6": "ydBFSkjS3YEzgcbR5r6Y6GTBuuEQaKYgZrJ2QhJ7cVMwfDncYt6pdg5rMZmGKsdxayPvFDGN97HUyocKJW9Hc6g",
  "key7": "5RWJ13QdMxuz9chmhfYF6p6gDNKCfPWrMwpGDzxH7r6Td1o1Kj3DQTQLqK3KLkEaWTphs9sVBMx7GUgFQoQUCybz",
  "key8": "2eFZrDYZqdULL8zpxZcHP1Peu8t74vNWRnjXkjDcag8vXGRNCJjLB78mokzvVLaHB29Kyd14eAYYYJtdcEumwp6w",
  "key9": "4s7M2ioaTVkXBEPoeu7a5gDhkrZtPsntXYfwKZMU8ujLgTYnqnUz4CaM25MCPJqg5oN9iaqF8fW2FPAPF1TEydvm",
  "key10": "3q3o8ZQCvLNRZHoo5r7Ey73VeKnfJjM8CuALyu5njbKRuEsz3BU69kLZJ7S4RweiqPDTwUQAY75ruaozENWte8nN",
  "key11": "3mDJKPZEkDAUtntuz2b4EjYrwahtQ2SmAoe9SHXMK9iUaEABRP3an5uyadUXccVTRhmxT9Hky2stKFmanar8yQCQ",
  "key12": "2QdvqXVRRBFBmgfSzFk8G3DozQn8k6tdr9LST8EfpjNK5AqeWM9vD4dtHHMkGDwE27mbTtyKYDUAU6hwbA2bXkbM",
  "key13": "Gutq4N3aZ2V5U1K8pqaJZeDdteP4kFsZS3XeNA22ZxtNdb76dUaFR6vy7WiMwZYKnZPrW1TvNdFCaaokhjq3hYn",
  "key14": "52CKNGrxWVsBsvtkH8s6oFBqsF5HphDZrzXTR1VB9iPX4akEAAb7Pf73re9sD3xBWNhsn9uLcJZvikGmYgqY8Sei",
  "key15": "3A1Dt8ow9kUNfoD5g6J8YpWc24bhtbGQAgF1iQn6ChhV7q8MvBhN75gc188AAY6Vpjx1yABf4ymjqLMdXVAtQYSW",
  "key16": "B2pqMCMuD4eJULzsngnaF5kPXK7CnbQcM8Gdea86rkHdZvVF8wumF841r48W8xAevi7wpwUoG9axv9V6dGXC8jR",
  "key17": "yAtTGXq2Sh8CHoQVryXzJTEm3iWsLGcrAgFCkaMwBDx2GuNK6oo3opsGbSkS2WsvW5fUKRyzBkZVr8Jyrx3FCJJ",
  "key18": "55UVPGyn6RzemShoTg1wqo3gXfseYNMGnQ7vJWzf74SKA7iXdzWzwPfX27zGcUfg8VitzcmYvhDCj5vxH2RLQz4M",
  "key19": "65u5tyAsom1eDjwAZXAQKLxCrLTvUZmaFLyAeaXLQGhQRgzNnfZphzoZ7nyDw5ho8FPSKoZQQtLPnpoTfzxj11AX",
  "key20": "2ByLZDcmCcXT4czg6j6B1NzeLK7HSD845REswbDo7QfhUfcGEiFzdCuhNepcA9r3gP4J2uwdsrxFaQfMND5r5TSQ",
  "key21": "4NA27EqbH1Wd69fz2Y7CEsrwiqpoHNz7n6AgebtcEo6wrDmYvZZe2NUggECLjeyabxkRzRFrdariR91yjGYkGujG",
  "key22": "taHaPo2ksd28XExX6wkSuPW1mEJJZ4PkDP6CPXKEtgkixqmLRBEEXTfyftvreqeYM3T3QQkM1oaeRj2gpfymFgy",
  "key23": "5EBeKLBxDWJpJJLXRZWrFzbXpxcvvbbW3LvSXMTtSywELnz42adLLi3G9frJM9UsV5wtuAJQdzEJZAaLSPzanASG",
  "key24": "2EdGqoQsKfXkQtDsvzV2T8Z8QFsrFVJvHhG6rUEaD9AxnbhoziyA8AYnD64GY8GUpB8X9JRazmHTEtbKnYu2TLUs",
  "key25": "3DYgFmJuXbpQwzZdthnjG9MBtGf5f6ky1P1m3ybd8uxCHrgwStYLpaKmnjv5ZiAvkZzfSfaWU7rA4f4ZU2MLezKp",
  "key26": "46BpUNHvxx79FNzSXGmuhxUUHbVEyts2bWa4HnXBdtgBqZr2AzkiXV5VJFkiYYRmuFqQqX1ZbojTCYi7tGcLrHHK",
  "key27": "4BUdWFc3rhaZEMMBtoUkWdV1b6d4qMUecTCByMWme658hurtwSSJpY5zv9LBS34G6Q5XkDAeEhFjGhpssaNv1QUM",
  "key28": "5JNfRKkzR3pnsoeptB6ESWnwuxiR94dw8woVgRdja9RSvUb1EKtkdDR27DsszZyqpjaDr4MAaVx9o8v3rgss8CiV",
  "key29": "5x1rLao3RmXXtoQmB2HxBXiX8MWkhDTdA1QHt2Hh17HK5uQ4E6qSysrCBWemjAzJEzAGgCXCPECwKBDKLRAzLC6R",
  "key30": "4rrtBCbyd4HFyznU9S29LdC21rCK5kY57yukayGJ3WouLM7qVEYWr9Eb4nkYmHRqiQ99771cQwd7gKKnH8m7wHSp",
  "key31": "ZuEyvjxJEQEf3ZadRf3gEZTZXk1tbac6scRgZvVtY8Hf7jRMMs6BEGY11a61utguTq1hmhh3MKY1RaqcSBTGxG9",
  "key32": "4a7nK1uMNZauGR56kPeZVd1qpwvn8nCNwCDmGrjnwsVXjGrhpaBc5JiiEnq8Ac7xMi7M1yrdm9po6amtoDiKe5Lq",
  "key33": "55beutE1Aey8x4dSuZucbS4E1DzjfawW6zAoNRtorxV75x1fSXnhD7z3rTPeSuQLaGz5E4RTZtMkkreRhSrhmLa6",
  "key34": "kbrYnSrTApES1jou1sNrTYHmtWZXifUBwGZ1FYd24HDwRr9X9o5aa2PhTtVQvqGFZiJUsyj9ysiJPJKiXCrGcHF",
  "key35": "3nuXjSNp9iLW7UMbRMkJQqqGi3wH4HLnCmS7YZYguhDU6Q9Y9aEEDEAAVMb3t7UuzVF7ykFiLQh4fPrM8dTSBX6y",
  "key36": "5xjt6CVSfngo7on9jVt5AZiwnqC2VvPn29HK9ba4ETQkBYiHYkwK4zA7PLibht2wctdZYtqo5bzFwvePsPs54eTy",
  "key37": "3FoNVLeMKQ5aqtr5gjHoE1h8amqfPoTTvRM57U88rmrUULCpdHwh3nkGpiNbEA9YBTWrf8BhU7o12EHpULi4r4Ti",
  "key38": "5upz2Tq5BMF13yLBzghv1GUNfva76JrMCjjfSx1WshjffnHLp8tpPzWUU5duBDwT5n4vJbwfUvbmXTDUUkHHJkvy",
  "key39": "4FcpydyQprNRafkzMkkRBvfRcRUmJa3cSoG6qJUZsyT4QqMtyKSwVi8rMTpSthDVQgja1poFfkvfxEFa6ffYYgHh"
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
