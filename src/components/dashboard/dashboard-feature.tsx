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
    "5dUGvi6PRBUAezdt2m8eqcSjRxrcNxsHz6jzwxmqTYJTDfVAbDgqnyEeDydWSa1RY4RvXbMCizk6UnpNGRd7VFPM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FkS8xKiJCuY5eyJ3afV1rL3e1DAN81afKSeEN2vVhKXDQyU1w7aiMmBrki8tnDVovqTAFMSm9pzqnVitpMGcrwB",
  "key1": "4sQgp4fRvPKA1fRSEr1NXW6XcDSLDEFy52HpLJH4MjLDFZAyn3PUXrHdeWGCLUtbi71owgiSP12gpUs3ukHxJYq5",
  "key2": "563V6u3moVL63QMFpYYPUxKUYA3ZH6cPqTM6MDcG4cfdxhjtQDTjvnkUd9qYc6uPs2iq5BpL9vsuucCSSy1VBoBM",
  "key3": "2av758EJSCStmo992jfgkzNDqNAkAYRJAJbKSh2RRvAY1GZSNVNxA5kBAUBKwUXBhiGtj5BFBtSkgsi1tjBKpUsd",
  "key4": "4w3DLJajP6qrXops1rXpWB7QBLzzRDmkEaZE3acvHTCkJKVK69BLRuXDcvrxFHWpZSUv3E9zxsh3uNYXgkV9RJj9",
  "key5": "28Ywp7QLFcAVyLRgZ5i9dEyjy2ZQbrGwThwFjmNqLyEDUJVyEL93AxuN5mR9fi87qUAMmpV7eXFeVjyoPDe4JNpc",
  "key6": "3W2JcedYBEqNMd6kG8ycjpisqjC4BmZKMEvuFTvd76paDDdz1YqwpGexsck8uNpeRTR6tXDg9cCmbSEDqhKurF7N",
  "key7": "2XihqW2U4DW4XtqrUeQtoXs7bvEErAU8e4tZ4WK4sy7zx4BToboqeCVRQn2VZ1AXRARJm4anftEVGnwz7735xxKG",
  "key8": "2hDEkFFEt7tRifNDSVQx9Hqur68w9QV22R7QXfEZJA1WZmwTv2GnUVUaNRBMyhpLv7zTnS9torJhyKeyTS6y6cLN",
  "key9": "5wUBZRTFtLmhf4rcGvqg3UfbuWdnv4Zkv6Stp7XCCt5bFd4TL3F9SfCfXhwQoRYnh9r6NZ8nDj1eL4Ug4k3D2ihW",
  "key10": "3iKmLX5tGNvVh1jJ7Azvi6JccycL7SLJ8LgFQa5qoJZ4vYiHzrpk5VVVtp6FmTdsPFB1PGt5Ujz9nDZ3EtD63YJY",
  "key11": "46NnRKDPajt9y3Y8BsNsCMwa7AkswZC3Qvv92PiBoe9nsmxKfwuG4U53rWRfTbt5Xf9KmtJPBkEHy3Srn25DFawj",
  "key12": "4SAMTTXgagmhV4z2JvTsS4eucjF5utsMyZGozisyT5czcy23hKADCUASNTpmCu6MTY67pw2G6C9aYkGdRWoTsqqz",
  "key13": "3HKt1ou3MjUA2P6C9vKaNbhpVrK4CSjyehuYFfLggAiatSMDLeJZW7AD7gszFYN7Qi7eeZyLiqgXYHfYmnx9J74z",
  "key14": "2wN5qW2Kq7uBjyZsRmHtTVXZMcNqmihy73z5yjEVYFaU8m48atVoFDagdTjwRS24wBiUrqit7FenGYbX7y7ixk4z",
  "key15": "mKvogAcFTXTcH9KHoVZB4jUQLmhunsk71xikMTjzwjVuqQawypxoxk3aSpHjhaxfvjEu8Qdzba6ygMc9p89dt2Y",
  "key16": "2abWYenetaQSdXgoUAAs11geNP23mVL5UNn1Ymgpk2sbGZEjC9T5dVjjHMpE2mCsixPE7tYAAU4m1icYECQhYZFT",
  "key17": "5666vFqUNMDA1QmnYL6TuDiT9LsorXCwcM8qdNPsN3wUYe11mVjXXtdwFDGmFfiWovpdregYv8mpySDCiWJyLtBT",
  "key18": "249yYzArpEFzhvsRppzkz397RsGHWUo9Z7NMknXY96mjsMsZCfEi5eNBrAUxTqceT5LuxCymgUQydMY5v1gnD1VM",
  "key19": "5rn6mdHehM1tmrPJnCY3v5vfATdEYycYGzmBm5kVj5YHGth9DV1c7DUe5CX3crxivmwHN9GxH2BMncC1pzHNy75f",
  "key20": "4fsZQZkJDgzHbD9nH4hWLfUnv7r786Uzqox4fVqQ89NH6BhH9fPbSCibdvsQ6uS9EnqXAf4T59Dyv2rNjbLDTHXn",
  "key21": "3Kkxiv1TxcoicJqXgzX4ZauJnNnNYYGZeZP1E1J5r9zf3U3eFuMEPt1a6g3vA2HbSFDmCxYRzs61yer8jYKFgGnD",
  "key22": "jP7fhx3f6NqmXfdrYyyxyNyNqWYRpk9PyZaVuQYNBKn9PXzCejK1o8eN7Ji856X5FfTShS4F378Crd3KirSsc5r",
  "key23": "4FP2E5ZV9AEAbo7i2Z2rqMQkW9i4CKvMoPqBfVUm8icKxMi9z4VxG9jNAwzuBwGPkfpY5K9YzfXXc4gLoQhFpX6B",
  "key24": "2ezpkqsZ5XuFKxPkZM1yBVhUfLA7VqEGtffmJjVbDfk6x1PYbHddWf9bnSSTppF9oUfrPcNe7unbjTx7McwPKUqZ",
  "key25": "5ga6mma4zMWA5kcXXFEJnJznAndNw8fboX2VSJoqarhmLSi52SA8oK6qKNF5bhC91cBiULbpzmkjS9T4y7GYAtU4",
  "key26": "2zyQtkmkVowKJbh97YsuTDPLHZ2UpwkzGHY5Abo3Qofdw7QW2yupt135S54Rh4p4kZVxWpW9WK4r9u2gQMtEpxK9",
  "key27": "3hK6bY69vZtKUYrPWKJhvmJGesa5LiymmFvXnP4xLbdSFHH5CndBaeVPe5NnrGMiLMCEVEQEyX8CZYjxNkBVmuf9",
  "key28": "2uLMQuy8ZtHF3DjJs8sDweRBy5Wx4gL9VJJtLj7UG8FYZeWmqmECncgr43mf76rgrSGJ1XsmsAHt9Rsk2LzD742h",
  "key29": "2yrTEqxQ9nq5fbfkrMQMy1Mdm9REJQ9QkcDeKoKqaAS8Rmu66RrQuafdEbt6j3rK7qErXfdU1be5o85bdBE93KHF",
  "key30": "29QiirC2nSPBhBz3ooBE7TVwspiXfnLuUqy9L6DXiPaVbZJDrFh4N3Sys3kk2zpvBWPKJ3nftuVzEEkR8tcVzMY2",
  "key31": "2UziiiesPBN5Uu4UuR3Eo6m12HP17Jkkw9HVNve3WN4V7NpL8scUaLtZjVrYuUAWVcJRQMuiPavvrcECfmg4r1oU",
  "key32": "4nX694pxZfKurLq3xgSpLibHX9DwPQ5uRKq82nA2hfqZLXZFrRUL6mRuVA7xD6pxzc4jHEVDuFxahjQsYrjkHqtU",
  "key33": "2LUozLJxJBjTsfyAZUFwF4eY8MmJHpmWNBywrw2FfqDVi8uiVrgf7DK3sroA68udx23iZqzbvxeETzHDc9jAeKae",
  "key34": "4hc8hEbjeTQdUz3QtXMhzJjh4YwPhNbbG7KgDUPXm9MGEo83HESyEUDyjETjBwu1oXsapiuCgxXvr1T6YMPUBich",
  "key35": "3cDNL6cwDcKf6ogeDLU2gM7RqfeSwzL8wH45XWwwxir3hxDaXXHi9doGogkQecJmi3YiN2XfnXznhdWYpDKf5YZr",
  "key36": "5R7G52X6BDKQqdQ3MngtJiTdhnKd6QqgdGKBpFjLetiXPatb9L7LHFAFD62PwcHcbN5KxnS9Bb55e2i3o7pQd5ro",
  "key37": "432B784JFn29VGqZ8UgkS7MWboQ5N2nwwicSCi3sK5dGTyCgZREKDtfg8QeGxmuFp4zGzrDBQJfzkaw7xyhWExgF",
  "key38": "4bofXq36m7ZFEXtzMMitiv6yWwVdBn8cRuskbxE6sXViZt92GaEy4aobAwQsHtUtUU1sJbXtmCGAgYtjXvxaCf6m",
  "key39": "2cSmpGELcLFKmaovsYgKjpFuqEugpsSPPT7BRScBDc4xvTMnmYcsg54crephxa2bzCTGD728FMkimRHJsLN6Ep5V",
  "key40": "53ccv6npfZVCrv8HEViRtN3hFhgFqUBC7gEQJ1JNdWya6n1Kx8GLn2pnirPrW8jUpriFre9nccwLjbMYUXrwfza1",
  "key41": "3WAgZnfWxEGzhzpBKJzzyL4T9bYULru1pAUZTfj3RSk1M1rD2UARccHC2fEWXT6JTnyyt11XqA7GHoYiC71jp1Tg",
  "key42": "2WGzgiBkcBkQdwZrdjaTZYG6WpEfvSW1rYH1Li9j86mBBGH818VohnguFnftedmoUNqwEFVz9gSsxBCUNb1BMv7q"
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
