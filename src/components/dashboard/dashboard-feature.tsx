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
    "3o6AGAi6T4LmGgoqf399USuExW8Ysv5EtrdaSr5Rs5FsE754DHhauqwsZofo42F55Fz1RSsYm7YWuYxPLwD3Bjth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hVjqfZRANMYKPtsak4CGGer7YpPYe7NEouWdhNZqRSVbp9L8wLVzjpLR6xcH67jEB62JnZBYsdTthHp2fc2SbXn",
  "key1": "5bPqQPB7md5s1DSH12Ki4pwRKXZUkz7J34sL5sEHgyixc7fYKYUzc33WGmssNfotJs2cbEZwt296ycKFMp2WhhpH",
  "key2": "4Qfw3Cu1nFNzdPR62iikbzJTc1RPo5JAfXu3joqsqGT3LBzGojoXE4YCfTvycfSURPPtpaZLf91J8yiSLYHUErvz",
  "key3": "iuKxMGTuCcMeS1o66qKZHeUUTYqWLFM7Y1thex4gC8yzF4bQdyF3g73FygALmZuLBfKt9xDK2gM4HdQhramq9gK",
  "key4": "4u4teLNSZeeBvYQiAY1u2D45eiwZcZ96Lv2Cjc8mmktmSJSCrvV3GradHxXvWASsxq7uRu9nxPoBd5ND6KD13eiv",
  "key5": "3fJMzmFKeRS965wEfNdQ1CRSD8qy5CnziSVPp4Dp2adKyyj8uq5VfMWaiNUAU4qw2HqupPkdCkHpGQutGsHwk4m5",
  "key6": "T8bL6auQbMjs3u4TKC2NRHvdPnpGyiri33dzVsGXJ2yHbYYxQnRsZnviz4knPsehjDU7W88vzoKJ8CxtW3A4iDT",
  "key7": "nxT5T7HvURxFUqoW2ixCxcGMpRvyhCtqXiLqWFiPRnmStrt1qrba3GREn9rFkcnXUGjBmAJqYDFxBve93WC6UFj",
  "key8": "3unhxWZoaxT8Fmb4nEpFz8GSmAiD9Q3i6iPzV9uuX3TaNLcNnaVLaoG9huNbHAisqiWNKuQe4CZeqpjgpmX96Tkf",
  "key9": "46FfQba1CXVcmivwoTFYbS9eZvADksknqFBeufdjuBT5wDTq4dX3gUNwGUdnbuRVBq3q921VLCvM3m1GtmV6Np3Z",
  "key10": "5XEeEaiGWXfwKGJe2Rw3HJWUd7MzvJFT7dM2Uiv2jUjVpvfcin4XePobqobRZ5sPWwD63ZtMt7NfTEbG6vYDYtrF",
  "key11": "5HQ1xBfVqLVtqkd7Yw9KBv6XRT7XJUPyVhK21sqUqtme5YanSnuMdwHppuN2NAcJqi5XqjL7pPPKS9GYVToAprkZ",
  "key12": "pYcP9zP3SjYnHag4kTd4PQpcXqJBA4MaGmDHGKyFYgKycdGsTjpd6qzuvM6YqRSAzNup58rZ2FzcZC5odHFkh6i",
  "key13": "rGeLX8jakAepLDP7eK2B1jNswcqmeYzB16H18gc9K9F8DvQXRgBCMrgvmgVDFioft87PYsEbgj262BjCRKrKcNV",
  "key14": "Bx5fpM3bQ8gF2KntrCLQVnH8beZkEbY6LFveG8rKgcL8gC8QokWvmL6v99VAqSUDQHJaMxYbvoh3TVfhuouRfg8",
  "key15": "45VdQd3jNukKvfdTHY1JZVSX64vNuS3tD48V3sdVdBwqTK4uxdzQojiGULbWo9UY8rjuywR4pu3ttDRuNPLk2bWA",
  "key16": "4SjjPJSf19m3ohuAcwkDHhgY4FRp3enmHu9z8RSLnW3isM2iVCTXhA7B1ccVVbxr4wdHUZ5NigaY7fWTjERKNEmP",
  "key17": "5Vd21Tfe7TNUpR8ZACAzkg5LdQDCWPPmH6eNNMHHSKHtv14bENyKw4hGLBSzBD8RaDqEP1bgDsZJc7LFpvmirfED",
  "key18": "2iorExNHxNmZBDR5vyHM7akm2jW2UjvC8GkW8yM4UD3zPr74WhbYMyfGtrb1uDHZRb16adJLPTVBQomGKrzCccFi",
  "key19": "3Bkh7NeeWBQaJfEAPBmmPh8cgR2ejZpjAMGRp1ej427iEv3AdWmcLwwbWbtpAAHoYjJ3w4UiQPauPWNqugEu3TPW",
  "key20": "2PhPkkAHMzSHVrT28HVikuEs93anRAvEyEFfx3ysWmFq8NjpZkwqi6uXKeDhB15Qwid8RJh4kRHiirDRoBLY4asb",
  "key21": "3W8VDLBYKHGEr4H72Gd6oemRyWAiaTK3hQZUGEYXQUNiHNHJvzdsdWWdQqgC9NXBVdUbLpEgxBRhKCjoEaVetPD4",
  "key22": "utbMU9vTSDCJh9orV7gxVDHorXCHCha8nzr276EApvASVUEr55CsPE6xhjzzFgtnguSFHXuajAgunw5LMRLm4dh",
  "key23": "3GTSXYBGuMgQfAzo2JhkaT82PmfFxynLMPJKje8iKZGky2JcUtiSii1ULZdPv8nkNbthQePNFUnn52DrJjSRhEHB",
  "key24": "2Dq3EtxpNttNbsQSiSetXTeTqwJYG85gJUjCmaBeXCoddJkAWnGY3goJ32gVGdMw8jGZAK87riPuhPfoqttxDdsL",
  "key25": "2TV69Kb7PiWwwMavpKGWm3jEB65XWo6C9oUgFHqBWo3cvPgACHCdXoVetKfnYFXcAsRi4wW5Gh4ZULiphXUiS3gK",
  "key26": "Zo93WqANatQBmvYnQ6NHu5KXyEb2EmXnxGvTnFEtwdL59WuKsz1JYdNZdtFuiTJqmV4hH6vdqGAPh6mLoeyQfNj",
  "key27": "5xUgHPsZDYGL5XMYzUmHnQ8PCsMk7bSz1zu6W9QCzHgVn9h1Fpr8yW1fvgo9HdKPgvcBt9h1H9zYJKsBbLmfaUrZ",
  "key28": "9XW57o5gWtKAZ7icXk7fww8QzN8qVKdKh8e132YUTRzoLnqsvkxKyCBmxt6w27XMoLikaXvgBHQws7r6P7WPju3",
  "key29": "2AdBxyZFjFP6HnkSQsmsZzq5FXRXAWXFiy1pef3qX3jtuQN7kZePsaCxq2QttSVnkVVnW2oMVaibufHMe16fiJY2",
  "key30": "42Xi3gvjtwCdtHVo4zh6Z38Kg7PVjjBk7urCYa2YSatGjcMaSaJFuwikdfM35mJhob493TQgHVtjJmDRXhtkr6KB",
  "key31": "3UbxGAXJavLJxnFFLGVzvccDEKipDDb1N7iEqGtMqy1BLZU3PeRZQmnkHfNRp2SoNpjTqk1Q4qWJkxa77kSn3NtY",
  "key32": "4qG4e8LFpysiQmrhYUPRB3xu3oLG5Muf8HfUVSmsZxW87Rme76LhvH7gfhkvY5L7gL8cP3bpinpBGw6S8FtAwYDz",
  "key33": "3E514tFWtxB2hx555LnDFzg1cxaBT6VeJGLbcSk5cznAhP8Mz4H2vF41PfqHPkZsGcNFjc4y6v1MvgyvuGi3rGvW",
  "key34": "5zzMDV8ocnM2JmYwwbeJ6ivnSxBc1kbDAfkQuTHGu6o6RLisdyU249VDnuS4aaoohCR1XnjpJ9AheRTXXobGQg2",
  "key35": "4eP4KRUzTQq6c6SeQXqjc2R6P7U8FHs5HaxrQ7Kc4wXpotjEMFVuG5p8FzMqpwgdoXhP4fxa3tN1uvu9jbFXwaKj"
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
