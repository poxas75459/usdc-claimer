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
    "64CV4CMpVbnkxDbgFVtBNkj9FYgwXHDBdQQpZGgHPvD96SydadmGXC7MzZH2oJkski1s7LBr7iNiQQzmcU9vCjFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wWNA2fWkDeCb4SMv1kxtG336hLpMms1bCrRLauinThmbghbTS6jTLBRw7ZkBg1E6SH41uLqSoAZ7ywwjW1knHnA",
  "key1": "4KmSgthBrMCwWoo69ZW1KZKEt9az6Kdq3Hwub91FHe69h4N4sse2WwtCgGGA2JDxxZwXTNLkixWscotksKV7Swaz",
  "key2": "5atJhuPpva7UMahGjk5bvA53WuEwTuGTh8js3GrVce55ub8Hw4HdVDLjPXKFciMbVs1mVJWmVodmrtVGJKg6UwrG",
  "key3": "3eyL8fk9uJoA94cK7NMeqC6r4uj1JaUSrMuc5K7sQQpC9m2EdVecHbjhKTng62HSMcLgRGrM3CdbxnXk8oHzFDT5",
  "key4": "544XMbSZ5Vaq2h1BwyTCjLQ3b5dkzWkHxAYhJvdY7yErxaxf8c7zDAxDVdQiLUJjUSsXDvYN6t59B6fUeGCEH827",
  "key5": "3uU2Vtb97P4aobh5UfLBesy4wu8mzGLQchQGqH9ZtvgECKbrc9Bn9oCaxSEDEfxkEUjtN5wemeghiFVCNstQnzAL",
  "key6": "2ZGUejC58vd45z5CFTkGjY2NgW5nxvVfvHHwPo8q4sum86p8Ch6VG2T7tXvUmGFgVPUNZoJsXCFK3nBWnvirdyLi",
  "key7": "3BaXYfxxDtKxTQRJA39saYx87Mc2x3vUpbMajfMjVeavs9cLeEWBHg5aRQgte7ttg1s3zgBJPRipCcBHcVG1ghFC",
  "key8": "3JdKqSbkB2qGPJyiK8ZvuQPyX9vWwEeguSQT6huXmHsxgjKEHRJ6JsyvdyvhXDr6qiLrygJguTwvytVQ8hLPYUhj",
  "key9": "52GxeMpq5cpt2h1uFw97keKrNhhsbucpdPMQZ6GZ8ipVWQusjRUWUahDqNrvcknK6UqUF9GvsJikq5hM5cbL5BQH",
  "key10": "nGz9bsuKzh8VK5Mi1ykdV9if5bMmAfiS3HQAm8PgnT993LfSqLKLwarrN6jCerccmkNJnBhK85cyMGeXiFVgdF3",
  "key11": "4X1faptzAYcPp1exXKQGS6JY2nfsjS1xJmpjdReRPYw2Aj8YcktCcwXyx56gQxETLZW8QNdR8neur6mXtxpHPS5f",
  "key12": "9toCUVTkpCpyeDLc6hbF4SoA8Wemwe4bH8nnLookW7CKA8aJtfgFpcZSxC1JWPmgfTbFxk16nZGN5EVx1BhcRow",
  "key13": "2j5fAEo9Lapw8pkffNwAzzdZvc5gVMo8mUxFfQJL8f22FL7Qm9XFPmZdu4UxwCfeZSWhfm2fazCDxZ3QpMsrs7Tm",
  "key14": "49AEdAtWUeb5EQNi13YcqQvzXBTikJyY4xXZXTi6YPA3Hgu4EA7QgpBARrqZj3ZtC93BZxQc9sHEWtD7uccH44Vg",
  "key15": "2LM2ykgampZDgUVfUbMssKL6SkC18Gvss8SY56TVT8jeUTk1QzSiiHU1NZESDVw1YcnejCPTr2mJvVisfg2Mq5T",
  "key16": "3QBqMM7js5sZB196EVPd8n9aDYJLKYrKLHRMifzCNoR4q57jrSBgatBm7i8yEfXniLoCpgg3zhUcf4He8fc4QHfZ",
  "key17": "iHWHQXJivz85UTauJJy9ngxFr5rbePPW9dsZcYke5c9xL6ApaPhCoXmu4nRtsrPHFii6YFrdtbJc1zM8YLNpH6W",
  "key18": "3qtgdv2UWZPGuWirm7C1u8AJutWfDM6fjgAUjLQSMhUX55XLop2vdVy3hVif1TEFvGsp6tckNBaxkNYpVUbPpSbB",
  "key19": "61TBHefQPMVUx1gQMV5tNb3X8WnkUA5s9cXy4iVnzYd1g5b6MghSZQbYhyjjomjJsWgWEX17B1sptLuen8v4uUiw",
  "key20": "2uVGhhDinBvEBPmmSUDeqQLcbwfwsVcoo7nvBowYGDkJFPuieTMxLR1qVKdSjNUdWk7z3AzkUDJEiHv1nPB6282E",
  "key21": "2rfbN5g5BsSXwrZb86fcwRevwhmwfM2JjnzbV5E8F3iPGGdSEskTeZCSo1yVsMejnKVxMMjgrzHbq18QQQHxMfyZ",
  "key22": "255HK1e1H5XLbpxKw3sYAJxgkHHcccTaBQQohc6Vd5Hk1bVCUw4i4u2Uq8K5hjvuN7eC7ZttGBUwg4c8zYr93nZo",
  "key23": "2aJR1ykjjXGnx9wEMadJhTWKXDP1E78q65mUQfXYkBjZTS4fqVqQvdTdWcNNgYcqwzUhPoUszGfSDxFrQVfc8P5n",
  "key24": "3UjjJX33jbw2amadC41eLW1onZALGK3BunE4zGXzERw53KQvmD4MPfj66YpCd6NRygrEUXXNvDgqfjGbiGX7oAYm",
  "key25": "413GkJvNj8dUX14irfMj4MVGdnvni43aL34RsgmSx1vAosdLirBkvm4H2jwepHtrusawGPWmeee1WJovV164hdxj",
  "key26": "2W34mYqBJ4qpcG67reayzFVqdyKdGUgo5xZasxG6qdSctKkhzxLZtPxtNQGq9obaFysGbXBJp3xa6gDy7Wx3zxyp"
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
