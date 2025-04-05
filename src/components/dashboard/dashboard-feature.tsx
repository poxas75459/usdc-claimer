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
    "66wzVUNjm7rGr17Ny1k8ifMBuiQSaUL48mxZnFJUGpD4biYU4CbQSvGawqTCD3HxVYjCiZ9Ks1JpCtMG3b8xeDo2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WFX5zvrgPMG3yF8FHaSLRASuy6CU7nmcNWzaznZ2cnojAR9sDGgsS2K2iX1jXNJLRgfXDNN1nG8sbJ7A2wQa1MP",
  "key1": "5hPixCCLGWTvwpoN9oRTVsxe6bTqQdyJm8wnuD2aq7hzmSWJhjAzXf9dHbZWUUjZMByW1Vfyor51DKoeqknbR3yD",
  "key2": "67dVp1SLYkEyBrGfZCKYvLtkhf79w2aMqHRkDdLQqYGLJ956m1Sxt8R2LCp7RqVZqHnrycEYYwVRDY1b8N7rDcdy",
  "key3": "4fbLKucN3aaQaDhCh7k8JSfM9oFSME93hnYnD2YZMCHXiR1Ph6KcbZ5jVYU6vKyFc1veF7Ug3isPvci9xtcV22HY",
  "key4": "2gX8G5fm1VVwdfaAdMYyKjzMQCuG6zgyHTchmcZQ851XyV2m6KtB2ns2ef3RGZat78aFHhjEtBLyACWKM1v59ys3",
  "key5": "53LzDAKs3skb8qrQyW1hbyW2kxBRem4KDzYEin5xhofvmWaR5ByNNJHzGF9arwABc1qnnNKQw6bMv5vK6V2P9YnK",
  "key6": "54sPqvU2ZCyFWSmNYTejLbrVHoUcenWQEKSdpT2nnFa1WTygKumY29jQ5NRczfErD37A1312W3KVfxHFouv8wCDv",
  "key7": "2KhECCLSD3YKU5yB68mSMDHhtadmKFhL65hVdgocPLaWD4b9gEwK5HH8bD8bybpjzmgkvdBZRhxVTS3NETGirRPU",
  "key8": "5uX8LdduYfuL8Xa3pLYFQCDLDE1EdYMSe5bhisUzS4eMSgUMMJEgFHToZuGhVWg3Zz4xDfQ2WHKLUytTzSdZWwqw",
  "key9": "3piRUkDWkYV91n3QyjC7dzizuqZk8ZcSYPwKn5MTSyuerdPwRUh1R7YvBbTwCk4s8dZEUTQbkNxJSiLeTjZRQckT",
  "key10": "4j5HLkF1vtbFXcYtc5THrASA26Y9uoQcsPMZtprLG4VAGmhbnAVb3kJxuHc3eHWyWRipZixsyDT68qey8ALu69uT",
  "key11": "36hU4Tusvff9MAG2mzFmEcqQzCwpB4U1GtDy8FobaWaFRpcLmXTWFBzmjGfEeiTdogwZZ7B6NN7gJZV8Knefa1Tz",
  "key12": "4JbWnk2YNT3hCKj4fEguUKb6pSVnfxK9WQLDawDoLJPsjWyGmAyRyLyn2KHMf2saE1vGdYgqWwXQwAEbmCprKJWy",
  "key13": "5frTW3XFVajA5PCZeocXWMHnF2gLkYYHuidpVG3sepTgmZFtNRPGwTZ1fv45MBxv6vSenPkiQRSB8TWL77n2E2Ua",
  "key14": "3cg37CViD5mCiuw37mEU3cvTCyUTDjTTQhi149SeKWLugB3crgAEkdUzJb99n89zvfK5ZAcKwLwrhjcAiYrp56xe",
  "key15": "3MBzFnbhKgNULRNc1oNfcXJe9bxaQaGMbrtkJ9PcBnQcFRRBv67PmERfUoeW4oX3jknKYmAk3AmK5PNmKRGNkjSo",
  "key16": "2UNXN5n6HLPXig2qpwupeu1VVG7FaUvuZSdaA4MW8tLeWzTj4AakdPY9bkG2ByZTcBjUhq28NanVmzCvgDwgZsQH",
  "key17": "3VBcsocCSFRDNmddWsjUzbECDvpvTkBDqM1bGwE5PEt4SDbd9XaWZXZkCojFeUeXSbDx67Naz5oA31JDDTFATAAE",
  "key18": "4MF6e6fikTiktK87fxdGKYsCTFUqRRaZccmstT834ZgSJ8gehP5knZ3eRfTHX1a1m4RiKoS4qrs7N3A3LuuAeMq8",
  "key19": "G7hA5K5m29g1owA54imCdyx5PxnE23GetmZ5zQsJwZYeB9ESazSbruAdTHKDsqyauUbvGpLm4kZgQdRXh6QcRQn",
  "key20": "5J4sgodv9JTwvUWUu4Vq9BCHWWE8VtyShpTzxEsLJCNpaBwTDkA3tDLCZQ8Xr71jaLMwD5jWCDLxjbXFbEFc3RKT",
  "key21": "3rLoNsFRFjTifHjaDaFuaspTVU8KM8bCyMMYNAvWvpQNJoHeXZqoRvAMiAas1V4NKcxQH5zCwP8nmUVm5YwGn8yR",
  "key22": "kLwTTRjf51CsiRXHYq7bWsJ1gfSnPimayZLo9yawmcG4eNjrhhHnGVXCFZ655a7msiVmheRMvWcFxodK5E44BFD",
  "key23": "5n1K9XuXz7gVrJCpfM9Fa49ikV8Q9CDGmjvUprJjWKhyQus76kMQA3Nt9ynN46pLVMMrVTcDhcbUtjvw6uoDa6Zn",
  "key24": "2zDbggQAs7uM5L17ry65sY866z5PCyfstJ1axGmEs6yGGz5Q6xQeB98FDMqsoJwbSTevFuzZNpuiPqB4Y5h3i2Wt",
  "key25": "3JQr65hKowKvqjDVJDq67T5YoN2QRmX8zNNBmfSxcG977ByTnSE3RDbNCPoVHAyZw5qWzivmHz8Xr8Lj7K833XFg",
  "key26": "3fauARiREui7jqmGzrwabiAeXtzjdLN1zismKSuZgQbMjBCWh8Y7c9gMmQHyxdi1kJBR2tQrSiBmGaSfLczXXymJ",
  "key27": "4BqYSTLEqm2oAbAqKYKANh4LfpcModi3refvJiPg5dnFYhfAPoVXoybF18pBhCcF9Yk3BCtbwudNxno1CL7z3kL",
  "key28": "5JK9uTSCwaejnQDavDpfg86rtuDB9PcxBMzTCFWNy8Vt2CagegaR2WqVCMkq57tywqPxrJu5zbvEDU6TxcQyftMj",
  "key29": "2X8Hu5SkgxKkV1fgo4icrT6Jr8MJZkikLhAKpCGrFG92xbaJNbQxWKzQJESXC3a7yy6AkyHUT1Zk29jxU39rzv4L",
  "key30": "3X5gU9SkExA4bs7XYNzmyhLvAgwkgAqcsBkgWzj58d7c2PvYoWmurRW5w6Gj8XDEaGbNXHNwzKw8FMMpyEcSfTe7",
  "key31": "66TzhJ2Kuqu7zug8kbjF2Le7seufzofErkFy9thpvRyT5sgFajeuVb7jbx9atT56DGnxgvukPuLycVbhaeeGQayL",
  "key32": "4P4JCd1XvzWwjTbKUMzRm9pXvLhBYUobuiZvgYDLfJPtX2VzgJnhjCa3nfZfR3qib4EetMZwhbsKkSeoqQPzpzDj",
  "key33": "4xgiCg3H65mDf7qUzGqYcULM1MHEGCBmqB7nGY1dcjwedS3W1eThrouz86NcTNLypUxdhf1ZLefVPwnUT9uef8Kj"
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
