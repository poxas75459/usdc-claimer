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
    "2gAv7emxCbJ6EMtqa2HdzGyY6o6zLinuC25NVncE5WrBfbHr3gB3a7oyphUrn7sLWUqhQvpbZYuAisnrrf5pqvRq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kyKunjn57VctBMUTyJJeW8iXRVbdQm1DVhqM863znsBa3D4gxRA8YUQAEZfec3DgwJ1qZwW5mUorATqWA3WisZN",
  "key1": "3fJarYitgkPTTLXifSTBoHQock9nRrNNWLCcNW7tDFPpKAWnZsPeZF3VQ3dcSxrcrS9F94g7Q9ZqdLCbopFnZv7S",
  "key2": "FoAunwvaQt4w8K1yxv35oVJvcKJzHeyzoNcV5cAA6r4XKWkwNtyiot91v8zRrrTPm2DtNo7FnqVZRMtTSdXeB6o",
  "key3": "4EEXP93RVTXJEZfzqmoyea858ZHYCofsftmf51LvPkegNbC2HUTJYtLe9D1jGGwriH4ya2cjz8hy1jZJwvcEEHp8",
  "key4": "3cBFiziL14pJ1LFzEjoNaj9GdCXiu4QYtksFJgJ6Tbbckd1JrZ7EBgFFiaikJRJWXoaiK9Jju7geQ4smk6WQvJeE",
  "key5": "3Fy1URf8UTQBr7EmdDLxFr2gBizT5SGiDFHUYYYR7s37dS529S6SRXjX9aC175f3v9fLTipj8nSYaoAi8DKC8PrG",
  "key6": "4LqfxmTby2hUNU5LsZMp9SYGirAZ12aEFVBwfhTBNVXh74f2DK3GxuJcNFYrWW4h8a1cuohjuFLvTNdoQ84isVsD",
  "key7": "4r3s2ycqw3hpRxsk2pP8XL6fUm7jXoaCs9Npy3t9cvnwTrxFdz63fNBgHSAvNYFLTYqFkjbg7eEuUw9VfMVm3stJ",
  "key8": "49YGLNHUKcXYuZqRjevRM6SzUj9jfxtNBh7LWWapjr4YifitUE8gduEMrDhk1six4Cr4chit1FHE2yYK6cBrG539",
  "key9": "5unBScmFcg9LcDDc2zjukL1WLwm3Ki6kjimfeQChEj5Gk5NJu3w1RBdXyoFX7seSeN7YT5PQ5oEM1QzK542t8oXH",
  "key10": "5QiAChGapp6b6MPrYamSWM9YSLVjKjrAH4bP7rk78TCkCyneCZY5bJqRTgYwciGwDW5Utqe8DvBoLTFoFwFDECqN",
  "key11": "23SQxduj6JMVFRvfyp1avhv8Mi5UHdug3DFZzdayyNFXybu7Tx7NdVNwrsHKgH7ckdEJqjpiAQXoedsQeL33ymeA",
  "key12": "4gAnzzRUUt5mfNcr2py16EwqUurWcjzijo7PnNUXrbqzZD3PzZV97Cme592TKbJhUV6UWnEzs7FTRP8ZFjujmZAz",
  "key13": "4YkoeCJXkAwqYf4eDMAcsZ7JqbG4rRxBjMrBKfawob4KsyACUCnRYQ21pSQUzuq4BSyVyvgiyjtuPhbxhT4m7i3r",
  "key14": "285YskHXm7FK23dgbsLa9iVEKmi1nNKdCKazZaxSRtUjq9ebxf8EGM25Gs18FdEQtu26e6dawwu3fjep1hdrcxKv",
  "key15": "3tXiyuWy1YZW6ptkNpNZdwd6bRqHdN7yrj5E8966F6oh2TU7vAefKG5rWV6684HqKmm5jwQ9VT35ytYJr5k8ddpC",
  "key16": "5fyxUoi1jSW1kvS87xMan62uXBQ9MgbBzdeqZJUKDKckQvb2kBSDkLWWSwjicM5Lew4XKakdocxQsBvroG3mzmJL",
  "key17": "3KSxLcReXCWoUUS35y83A6hpEn3Vj55UDkLyswVixN4UnhmfUcPVCSYW2haFbmyDsPF5AXqdPWP6hQ9XCiXVkAvS",
  "key18": "43PW1UALozE5ixEmcfj7aMSTX6URQrX1fbJuk7bRwFUYi4eBsc9SWSYKxotDYg274EeLzwkDVw5s4sVWyA4HZxVF",
  "key19": "5LhPVerGWRL9xfgmMghqcNBoBC8RLznuNE4Xp7HWfN39hQDhWZTpCGV2CgvYoa7RoTAoH749pDJBVkrfECMD5Sdv",
  "key20": "5ADt7nkrY1Sz5a98jBa94QtdypKi4FJnzdyQAZZh9tPoMdvdxwSRcdwDVWhPomCBZcutDpz7pmNUXYiGPDfrCpe3",
  "key21": "5J6jEweEmUNTfcZXz1j9KoVEDubALTyeqjf6SockAfXUn7ZVUc7WuRGf5GVX59HxH8Q3DQNB5wMJMnNbDzEPyDs4",
  "key22": "3Sys6nNZFnFpjzXWHfk7t77n7viNLPFNjx8Ym17V5rbW8ZAEyoFvNh2nXpBE6ELbTzxbjDqng861CQAsa8TGavC8",
  "key23": "2H2X7UG7hfipkGQ4LNwr8mJtN5EgxQ6naE4zWs3CEqw27FBGrzLBAZF98Zp9PBBFUDkAzTdW2racAKjZh9NQWodc",
  "key24": "5ViLxtnMZRqZeDfFjdJwwsuvyNRPPxhBxRo4wbba7JaHLr5Px1t8tdRaNRWCWKQEnuKJ6KZqQ1P45WjPwqY7GnDA",
  "key25": "JyhNGXCgFojxp7H3eo3b9o4KoYbDY3y2Ew3889pDUVZFENqCHZ6DrW3heZ9U5yAJevaUVLtJPUPj4AwMgNDFDvz",
  "key26": "2pYLQojMtTKhCmL4tYKVKA1ejwK7QtjWy11GBnohuTFf2QZM69LQokUJz1CPZ8RHgNNBbCVYYgYDDBmx7G3zbxyP",
  "key27": "6yyHV1bNbQeMzjRHNcppqYSwVML2u1tgmbiTmat6A6raN5q9pbftfJUne4AmxsbmTFTM8dMsjf43AaQqZt2Avd7",
  "key28": "8u31i3ypqDz8SnzBSJaqyt8BFY54Uie3HcZ1xgY89kJAHozPVKuxLK7QLbuFttvrF8qzbZAYtMR66LGudf5Dymb",
  "key29": "5papDb66QjxLXn9qqLGCgiKvF9FS57XAvbvQh62C15vyoUTosgpBmqB6YtmWW7DYhU3qLPaqkxUeFw1htRp412sC",
  "key30": "5ZCJ35h8b5eBRmDTvwvUJgJijAKbuArFxB5PPupRyjJxF9GsZqigxJkZjLWL8rMbpXL2G18FaNWDyAvQCi7oTmXj",
  "key31": "JpppUThx2vHNekhevidya8Tb4Mr8ftjhzPrAa2xtj4tpFfVWvqfvbVVXQRUspZrXoFG9wjQBz7vvpEjepymkjHt",
  "key32": "2XyYrD1Lh96Jef6BLVevBuv8mYhFgJkk4KEauNZjESdWYUPspNgGoLCTf4GGAZieKTqbjjCNrUo2D5DdoFYxdMGr"
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
