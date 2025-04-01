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
    "38MZ9ErUuWr5pW4yXivZqAueq2a7fmeZXyU298WCmxYXG4gCWTFTco6feqz4oyr4abG2FUK4A6U4NtYcwPuKnMKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qLmVX5Euh62ExtCNhp7143judPb1yyTM3V7vdMPmFXE7tTitGzbVtesWUdfJi4rttYBRQwLN3v3ResrcZKtrGyK",
  "key1": "4RPGvqBLtBejEZmabEpapuRVbAALqM2ZZBQz6JSZw4gRVDpRVZAXua5Fk8S6as3QVVMj4nbSBD8ZEf41jSq2YF7",
  "key2": "32CTCzW8AUtsWRsd5HFtT7kY8MFwvvGizXu9X9UvozZij1YEGrDY6VTtsn9ZLhPAfkH38y7dP6bKgZ1kFzeLQkQ8",
  "key3": "5HE521vpY3r2Vo1gvC3dzoScvyNB5oZyKPSQjGMFXSxRYtp6efJprwdNdHZef9SBmFFaTKBc4VTDi2vzPgmRsda2",
  "key4": "4rnNxwPdQm7kzBzP3X8nkfjRhMcp7mEVscicp9dvhKMV9HgfAw6VBzQWSkGVNF87rGdeiV8uQ5jrNtquX24ze3nj",
  "key5": "5s2qhPcTrEiWdkvRhtLCs5m93p7vNNv4uw5D5cEeZ4Y2KR4kJTiQk6mPgyhqYw2sZWPSKBHtiqwYtvEh1EerR794",
  "key6": "5YvKpScWzpJL5RrqVMp8TZnS6mjYSnM31WLRPzvMVR91t7YjEGTqNgqh6kbjQ5zYsJUHRhZQNWvUYbBZEQggvHGs",
  "key7": "4jrEzDa2dDdA7TT4rwU4XWHSAnd9pUKcEebefgFZA6AP2ZL6jkVS7cLFPinmdL7jMAzWppMZgroGmWd4qbk9KXjx",
  "key8": "2VGEVFkfYzUhXiB4RuYttnMQeXkYswojcbhY29o3LK1ec85LZoe2vv348dSLnEcUCzdFNapoJ29ZiCrUUTHa1KRv",
  "key9": "4aSJJ1GRTQYmXqqqkyy6yQz9ot4MuF9uyD5cKPMxxXNJDM3jaLtkbSkUXQ5myeNzHBn21oCxmUCK4HbiXPR865XS",
  "key10": "4rkvTSVwj7XzTFXvxNVPNuhByUdXZMMzqmFfZFN2vqC54b37NRpyjpAmT6ThgB85RvoYYiK8vNPiufyMbFDr6hgk",
  "key11": "4eMMYeVzG93Rochoor7SEmt4kDWYrLiM4w1S3b4bEVYKRzjrHSRHFVQVZjqH5wxhBGT5ZLCsULANrcwKnfvTnoD5",
  "key12": "5sEeEutk8iCyGytBjp9JmUcxk3fi7ZXJCZVWAVF4n2tcTwtMfhE4vpRz7Eo2YtzcYRNcWycbYdW5PXvM7ihZFYg9",
  "key13": "5rQmuy8hgQvCDgVZu5zGWAqzniWHLV9osmgbk2JGtEzwwM5YSEnhXK1WCnrB9jWdEwnZmYNG4P1FQA3mGt8MpEmr",
  "key14": "3TtsrBwe4KD9xnzB6r9eUVR6uf72tXmRX8XTdc2qGdmAQyobNjKAtQaVxayD6RPNpUXjzbBwCXdzvYSWeT3VU6xA",
  "key15": "2cRu3zjkJrq4bh2cpvCD4qSzUZMFE8wBd7i9jSK56R7VbuaAtJnq87WBWFjqZii2qFsgvGUJL283xiK6jZLeUwtC",
  "key16": "5FSv798V43Yx6DyvR8mFt3HUt5vt5tUjcZNHuV9wiG1Qv8mYewkxycjDz61LN3FYA3p92uQVRCGDThWkQJoJmx3C",
  "key17": "3HDrULmxWC5GdPwtVzk8Gp4Lz1nHhs6ACHyxSjUWec7Uha8LcJZeZEFyTc8ugoFGCMvvXccc7mxU8CXYh2d7PEwU",
  "key18": "2PUhsRf8UaRSNimhgcbVrSzYRsGV9htpWqYrnomHwrwUsfagwxfQ63UumErVaFMRjCYJsPR7uCRxUEL5jDvyC6MN",
  "key19": "4C2BqpjQVxC5EEdVm7SYGAa5XRKmo9zg9rTwHLRMSYkbd5rCAsUdgjEHPUEWYq6r8wW74mkciyBJCMmcZsz7FoLJ",
  "key20": "64mbTavNngwiw8rhCJMLgDoEMXzoAZhM8PcoLeE6n8APqcM3DUt9bSpEmUfXbtyW5nqhERDQRx4TYsUJQbpF4DK8",
  "key21": "PiGhjcyJZXu9xP2evbUuwtobqnUkKexyE9vj3Eh2C1GuUjFiVhTRHmKEMfLMwN2eY5GU5Z1zXSaqerNm2rEJnRe",
  "key22": "4XL3Fqnt6ArMA1YrMkEGBD6fjzqCQ3VUbVbEENgjiYAG2KWVDtNq3LvZVkZcyctqqWeixzerBW6iWacDaQynHdPc",
  "key23": "5iBhYdHueq9Bcjkmks6DNyJJMPYSMgQJtMLGwo8FszUu8JzFSm461VvVsZ78Z8mVyGS4Gx3pV13cdAFY7oxLsEeZ",
  "key24": "61gDZ45fkBfETeuwVbyKGKyVEnBuSzxrRXvHhmw3UfcE7u11qjArJtwrDxX5v7fCv7J2Y92VtHW7rFofgNMVZ27o",
  "key25": "3DJT6quWvha95TzSYsDgiJM6Ny4ezLH5WLm4YWuUCjjbDdoVSuYZCmHMGzQkE2MpjdHFige6UmT4EQPkj9MUXN8e",
  "key26": "2TjhWxvoCmd9SZVH5RSzkBJ4pvfftBie9HfJDCHSTWyswbLkuvWRHGoQxY9PqcnXQ854JJDcnP3KxzbMrZzAHK87",
  "key27": "8FRkSSqtycFT4318SQaLjZaptJwSQAAkHt3aUZfjSc4qRJsA1FH3NYGn2buEfpcQEBEpxNq3xmsLm1gKnr8vxKD",
  "key28": "5c776FsBk4QWEcSBuPxc4GkwVtVWfuuiAsKJu4yR7SrGUyMV3pr5xaC2U3ReS78bNooSeDdZmjCbZKbUfu1Mcbya",
  "key29": "2idGV4K1mM52NSkWdGBYYrVMcu8dRn8Utm9QmySPukxKUKpSGZ4mXmuhj5fDhGW1jSXQGRi1CUFuHN66SVad5CET",
  "key30": "2Dd9tYrfegdFSSQcDJY7gF4TqKJiHzX9jQsv5HrQSMgFJMNXb7b8jQq7P1oT3EMf2ZieGT8s9XuU9tE4hjFjAoGQ",
  "key31": "4cDcsg2UkM7r4i6RJcnGfjzZR36zvt9GuB1L99nxR7fouvub2iARSxppjrLqs4WRZhBehoJcdvFkrvuZweFfHP7C",
  "key32": "5SMhgNXUdAskBK3rAYP1GdxQVacobdkBmdtjvnfDDzs5Kf7BxKsEoqadYapFSNRT9yv5XbvYTnPS2CFckgzVZ5ZD",
  "key33": "fAou4wqb1aQc7EmWwqwofC9z4FdZzegnbkRXVdFZz9L9ueEBRJhjkGHSzyYwQJK8G8cjqhwsMNLSSyGKFCzKkjs",
  "key34": "3mWCtHTmNgDbPgVVyGvCRVGtZzWBN3TMKi9YuYJb1BxkXZy1p6w3UZuR936CoUwKp8eraW94ri4aczNNwaPNKGqs",
  "key35": "3cWfdM4bnyBe3vybzD94FNqcn6oVGd7JfHNMK7HGx354XkrCNoGqnUk2NEG8jmonB37txskEuWQAvfcwHebzGFa8",
  "key36": "3BdosteN1WNXfRedswq4dQiy4jt2yeGCbdZABsvzKwAyBJyYXPKAWTeMiUrrVQ3LxDvzYF2rF19yJJVjGkjmw8uc",
  "key37": "33qeVSJMkoMEG1A4SPhkNfPL5aL3stsCtzfBf5VbocXoiuinUcHnnhzE6MedkN6Typ9En9vtAEUSkw5cvmm8dihW",
  "key38": "3PoMVd6TEvp8psDLBWghw7QeAhKBjqym359WRd5XjywzJi7DRVQnXpfidUfC3Habj5jD96SyhPM87FY3endatQ1S",
  "key39": "47pJj3SpNFRiUJmp5b25c63HBtwEEvzGV3kWANm3J2FJsGQK6ewynfn5A51jBqiHGz5et1QMQvzhYrG1BEfSi2a2",
  "key40": "3ysnBKeCKLtNkWcDXfFejKhuVcnzvRR6vm7gYZeJfBVKD5sabbaNSQmCSv8jYGoSWZXMurRFuKx6bvw72jUUDtj5"
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
