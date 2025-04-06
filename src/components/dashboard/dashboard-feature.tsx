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
    "3SRkK7Fy9QDU8negdW5AEjn58i5YVv4P9jXqUzsTSLPCKWT9j4sSmDFZbE4FXjAmj3KkGBpynWv9R72oLxTXV9WN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p1Qapuna2RNnCPWUsETJPDsHub1VrS9L5XoymFb1ATTwskDR685iBAn6ZNTcLFnQn9Zp3okNhkQA2HWqKsQW1Z5",
  "key1": "5qBYq6L6Gs8qyVFRj1txg1xC7AU3YkNAKdrFZLVkeRLS9e8iNtMNCuUqe5zwhEsTQHDNKVxxVYTGUEdhmg8TAV9t",
  "key2": "52NEBMD5bAEcBfbGe1kVVYS2WuuCnFkypRkkKdUEUJ6aZqXrCictU29t6fAo9PsQwPQ3qkgkvjBrMQBhGxgAQmAU",
  "key3": "5QihxSUbKNc5iBRDALE9oBzmFiyG9MSncKRQh9Q5utoby2dLz2sU7CS84VQVBMfbTXSyww9GVc76AyhSDg17yM81",
  "key4": "3HyUy3e2R7s7q8555PUFwqQQJjMGLhM9ec1v8feZf2DM6aGpjtdd32PxJV2CWmAmWCx5LhNPhEZ5SabwC5D7YnSc",
  "key5": "3Ta2bEptSoeCtytMr1xFYSxSDWU9Q7sWruL8cq4ovyzeFsNQkpPZ6k15HZCZUQywSEtcmLHfXb8zZY8razfYS4Wd",
  "key6": "67Ugux64sNnzU6SSdNCrdaeD5xhxeixeu7KuLxfWoHGMBgMqy7tztYK5beNjWL6uxRJNaAidnuMoKNxS6B7xkdDv",
  "key7": "4omhcth9jVHbvEQaDPWp38uADBXnhHVdQach2eFATv5e2HfMBU5mgMyCvDLykC7Qg6Yfy2Syi8rcgvwSUf9EwqNJ",
  "key8": "5VAHz4D2M1awwM2wZA5sMaJvfFAxa3RxYGhBiqb1sVcW9Q81z16B7q1dCbvHASDHYbhRqpENQrU3ALwjbFP1G26d",
  "key9": "a6BWLvfVurMdm5WAmxzWMUDvW3Lo8ea7NGPdyXBnk1ukqBjCKNArKpxntEFUNYXSLa9wAmr6ssLPGDLuqaG8tUk",
  "key10": "2fPNSDRhMExgjSLXf5AEtB8gRZXZeySjM8ZMNLPGQex7WeuQSpbQVAdYX9JhDRhfyTSbvhu3dETNuCLU5eXgWPDM",
  "key11": "3SnUoUJETx5CJ6suT3rMADqDgbPGjVAUdpujNwcL4MncJgxfNTDDtkSsLxLcNhpDF5dyVwtLBrEwnFo1TkZ9Gom8",
  "key12": "3MBvU6oNC5bV9utQfR5ScyFLTgnxjF7WCNs123n3ULkheC8ByWtnNfbLDoxqd7PHFn2QRHYTPKbxajkGeM5Xb68t",
  "key13": "33ZCwTpr4J6AuqBNbJjAKXLg8tkLkjUAhsY22B9MKMf3v4wVraggNQzzMj7UtvD31P4AWP3CTurQkToanwpuyH4b",
  "key14": "2khT9MHN2PUwLc1YfyaiDPXEXjf1YfQtbPC7kD9gvAkr4tMgRzgbT3kno6szePgGpVy8TTsQZrooyWcaq1vZsShR",
  "key15": "38WNsMBXhUu8ssNdN1Mw57g52a2jtecC6HNDnGwSVjeSymvRowJCn5YC4VcrkT7tNRTou3BR9tNhc6JwZdbVWHVN",
  "key16": "53Q1dfokESPkjMEnPC8gtH6tRexTB9uuj7nvTYnsQ84YEumQqgLh6mGktvyeB15x9Q1pZewpWisHo4sXnQwt4r2j",
  "key17": "5MitT5pHwcchDYugzrCUsJvHyK1KpXq4x1yneh8ck37j7rqdkwNnMW2zWySmL6Wc7dEzqz3b3ZMRyWr6UahgQA1D",
  "key18": "27S9MkcFuM8t9KxSzAhCqa46BwckXL61d7nZtU2sL5kZjTZsTKhw8ZujdEMFagwqYbiDi7bNVDYmf4TiEKmVz6XJ",
  "key19": "4aQZohFW7jU9MGMfVZiofXh5fThquqosEXMZ1tJdnQPUU4aCDpTWLFo8JsJecWLLDNADrAQDwD62si31AQN4AVmY",
  "key20": "AQfHairN1uow727tcXXzxjTWDra5mt3N9RoGSWveWRUG4SktdThahcUaFCxejZEMwAqVgiQPzZQVQB2kN1bptZ2",
  "key21": "2KVbkgEEbJmzHV7riUAEEaDvrq6KSoedKBEyY5NZNrAGAELJE3iqjgif4E6h1sMgZGDGa8WTdWqe7AYacVPeLeFw",
  "key22": "24Ym8JbQx5Y8qofBGHPaSf8cg9bPYZfJTvrjK5M1qsBcKTubtUJUs1VDRCs4KMeKUoMGuKYSfZzG9L4t2bhkArji",
  "key23": "3vtNeXhbnuf3oEBqm6a38TmoK7mDd3etsuFM1w4Q4AcmbiMLQN1Y7iNzYMs3EF6kz5wS2fJ7751jcyUHTSRpzTD5",
  "key24": "4FnWy3tgjcsK4Fwaxcqwz9iL5BJLUz2Eqd7a9WYz9kEXC1Sm15P5SExxxFxTtLdgmJSzeeLGEChZ8FL5ctmtWSsT",
  "key25": "K99nSxYtwBZuZUqAkXNtiJSZ4EsXKDpU1JyogRnSoHEo7dmphgfAfG5St2fwL1HYK1ZmLMyW5jejzxJiAh7XiEL",
  "key26": "2pNFtXyJSfcQ7CwrTd1eqA62hpSMc6gosxKh9WzZKr1U8xN8C8YYZvV1asneN4rwSUt2j2fmDJHTt4bkfvHo4eqG",
  "key27": "4bizf83ctQwwicQQy6R3sHcuXzM2VLNYmJpu3jM9BAabo1VBkmWQXbNr9nN7yam4NJnJysYfpoYsP7YJFLWTwSJa",
  "key28": "5PDcTHsXyDpVe48B5bUv3sqa55PpbYEMqh5AzcFD9KB7RASYR9TJyT9WDsnhJA799csGD3PKzEcZTJL5dCGCoyBY",
  "key29": "5WeRFSKCSUGJRnqoyCqRrZX9eACjRCswMiE2r7fe5TNw27rnjwYmjCB5JoNa43UT1xPPirfkPFKmhzHUAnH3Guf5",
  "key30": "5WyzBA55vtb6ouy2wZB6haMtaPXr25WuMoLKS4puRsSsmoW2nT5q2kMRNwaFmTUXhgF5ZksSxJ8CocjDrPyFLQmq",
  "key31": "33S1ioPyA51G8f55cGv987BZBzm8YorCsvPwuUMya3SbQrCZTwik14PokbL1qjhzy2nPfbPRm8ikPoSj8sCj5jnc",
  "key32": "4BBq8H5VzLhtzCQ6RRnyfC1diWuAE4uaGNxzw95JgBRSaVNwiujQVodaAGphBWLnopbwD23KzxM7Jm3y2fHRWmuJ",
  "key33": "4C2hpxWNY6bhxhZkJTdLKMPXmJukF2NGqGEcB3kM4DVmdNmDpTm2YMrZQd3GT46Enbs9hcCZWEi8JBKvGHBTLpg3",
  "key34": "619DAdrHwp4HcQEzDvCst694J9muoxeXKkU9SQU5G7FdkDAEZDRNfh9MZ8wxKY8jYjVUdwo6LivUr8xM4ZZnn8QH",
  "key35": "5cYam3Q8c2UFD7UbpyoTWNaPbS9jh4rjTfR38MzgKMZiqnWiRCpk1adjFrEuEisEasKBdso99T9sfggMgpP4weYo",
  "key36": "5BpJvn6DYajhEbW1obbuWWUpWaaZJwWhD1m2qdipNnaVSgJYzHPvnALGa76wagmEj6bGj9j1jA1BLUAe74KvFqnK",
  "key37": "4qYFpLiRPzqvr18jyet9mRkFFoagvZVGsrayDQwPmt5N82yZCf6Z5f3MYGJtco8uspwGfMnsY2pJNuGR7W1XLSts",
  "key38": "4xUwAsnP2d7KfdkwEGKNdVMyKZm3E1r3bYF5ESjgRQm2jt7nw4tebWwRQcaxrctnDqyZ8XA7UfEwbUW7EENrJU7P",
  "key39": "4RF9L9DAgR4BMqKEZEEZyJL5UZJYe2fn2LttBXYzHUWwnRgHXM7cf8f39KEun5pinyb9jzhz9fdL495LdXp3hv1V",
  "key40": "4d6JoznHR3jVj37Bb7hWbH5P9XqSzbYMHXmBDCzrfpuctNij6yWTifCEdJQTFM4BXV96faFVZumAq2iT2zHvGTjt"
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
