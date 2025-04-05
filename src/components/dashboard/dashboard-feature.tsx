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
    "ALqyaixnsAnfa11WSUj4qcAhz3XQngBXnhp5N3tbKd85oHuqjN4Ue3DFGzwLrBYJUUuLSRzLCMURGD9AvdDQmH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rs3LtVr6dcgyWoaTVTFCFFsXorNe9mMUUwedMeQzYTvc3kbMMkAJi3baqGL2HbHqJeAVEvDzHAwsi8VCSrm3YQT",
  "key1": "TfQZ4uLe2ojJAYSYKXme4hC8oAHeH39Jv25BJumxqB2WjY7BDfaAwAL9i7XatUEYGoDYe3RLuNftFbBrvRoQ6nn",
  "key2": "2gbGBXdQQqYnLKTETyAZ7JGooTkWozhsrCTLJSexeiymSDwVxuoHSAgWmHXDJztXmsZq8C8EQjxSCmZJkNsvmuHd",
  "key3": "97X7g7bRFAKrEYGe6oJ3xcYRhSbPedeQ9r4t7btinFwhMgpJGBRALPwXHC39Whfku5svigm7spMAx5mDeGpuy2e",
  "key4": "4Wavfy47qKG6J4xC1JUG6XG1iBnGprnf8UKo4qgFD9xNYjmr1mFuv2kDutQLVVercFnxpLdTBLqQ8Ywh4mceH9k6",
  "key5": "Tty8hRww5FNUD3V9etwrU1SNzq24f9EetgkCKLwqyACKadax2xEUcsYDUGrA4Uu1tpZmr9eh4mVuXihsLrYD8pa",
  "key6": "3sJqutLYUBB1gXVaKb2sUwfaqwwecFpc6HerCTiPzZ9PrXtzPmRMY6ctotunypaP9Smb2kacsRkWj74XXju96UZk",
  "key7": "4QgnHH13j5S1feGpntKXcp3KfNCc2drMLdyzmhECWfaEgfwH8rfZgmo19QMxYP8BXqAzEsYgc6MTQ5rBoh776hCd",
  "key8": "4YuGfjfnAskptQp66M2N9JGe6uiijhio8EZxnSXYiF6NnL2qrneRFpDofKkgn88k6nV98LRziSFLqQ5tJeEY6E3n",
  "key9": "5E55iBkTDbhq6LuCUfPQhQ7z6fXGnbMHucsShJENoFiFozdtkPQ4QL81tGPaThFDfuJgX94KsJU7pcNNwtTUQbnv",
  "key10": "3yiqTGUesxgv3Phqt9dDgNYVQGdMWEvL6TDKQnfRgsBoyeDjyajdH9KDg2FMBWyLeWgs3LHE85Ysuv25CJsjmYiY",
  "key11": "64vqxr1ixNkwD8PA4U6virqJ6NGvZrrXqKybamenCBCmmjniW4p7kQnfdiX6cQ7Abf21oZ8wo8Ky9Y6Yd3AnEH78",
  "key12": "4XV9A2bjCvAsSNtd5PuPC22XzcsWkC1c2PsKe6TNCyisdRC43MJLWVHumh2KnpKkD31FnCUkFuY7HXmxbTvvk5PV",
  "key13": "hub51857i2ZBWjGwXiBqcbGCGNddka2xejhWHcnBoNQygQBNJNCVbJoauGJrACJBwQkq9bQBSTtn9qt36JX65hB",
  "key14": "3AVh4ChowJbR4dLYtPFvLtGUakrbG6T9yYhnD6c1fusJk8tkPYsKVw4gGWq95ixw8mEWfp9JcYJoQKWvJVcdyQcs",
  "key15": "kbGFTr2VVuLDZsk1mFsGMKQk8K5r7gP8k3kgcfFXYgZvEsWnbvxtXBGUHbL179kp4bcXuhszJ1jcuEwu9gEsZpi",
  "key16": "3ATgf6muC5848YDaSaACz9vgcygzztwDLUnuHNkGwdamr8Qt5FLjfWJWTLMsTk8FKY8gwY765H33hQRSL5iNCvhE",
  "key17": "sm5ZWDF7cKcGvKycz9mZAyA7tqEVr2X2y7yPWeF9rGVKfMwfibfmsMEBc4kf54oTiM9Z929UMfE1ycnhm4GiMKT",
  "key18": "4NWxzGvye4y5qbbKjD75CqvJs1KShAghoso1rqfuKUruGAtkaCE258Aba4C17SheBxKxEr9JhZDAfJP5Cg2j8EkS",
  "key19": "4eq8LYVqbKo9LoHtBof3vGumsc2mUM6VQbXxTK9eMqaSF2EbE7q4gmaWhmyjadqsLbdtwvNrttR4n33CsUq3HfLw",
  "key20": "33ryJm4E4K7Jytj51y7nDQHNWtTDZz5jNgND6UWFv19zfM9xyWJe2v4oeTWm3YoK3drAkbBc9YoCqCP7a7sLQhTK",
  "key21": "5RE6VpVFhu2Hw1mQfaf8aZATt4AU1mbSpR5cbbRNBcDZNy8on2ffDXdZBioqYBLrycKn6kWLgmuMLCtZzFqbkcX7",
  "key22": "5Wth1MfCN9rAZB2LKLzkr5zSN5gFTwfLVvubPuSGP5ok3oZTTAtjXhMuFKUCUp5WAuoXJk3SD7GwouTJry1PacfP",
  "key23": "q1MYXZrr3auFVZtCCnxLjuQSv4Zr5543wxu7VU6xWmwkjFgkviFmSSw1axvRu2ZUubU1zXiCpp8PhYDbitxsUJi",
  "key24": "5j7yBgm6bTdZ5KfiRdSZgsx3yc2QbhzCuR9Sz1MecsgYFxVmmGZMfTF8ZC3GXBkQzjB1JQmZMVmArBKc4gUHpucx",
  "key25": "2tLiTzDPLq9VPnvFL4WzRQB4WvYjEf1LkSWXSCQvkUX1d33BH4KJGhVb7HmbUWXRYEfWyjDZ49Hwedc3oVCZdvuF",
  "key26": "5sfMHzsNKaqS9tdw5aGjgddJTzZdvUT54XjYkEngmJFDmFc1jFfvNBFYkrswmzthbNd6CuTtjxgHS8F7FYYaCood",
  "key27": "3UqvXTnDvnCFN98axqnBn5Ywctx8PJ3rEEqpRJecJGjHJ3XYcse46XizaPDBEkFAhHfP37tz5QdYgVW6i6V21z8W",
  "key28": "53AfVGefus13w9XUj4Zqb4wsDBsfu6PZvj6cw4sGqUooHUVLfAGP8YdzAWWaKNz3UDUiAyUArS1V4QLj8FDCgY8F",
  "key29": "5PeHNfV8D4FM9damTJ7hzQcAiZigGpWbtCdpAMdGvJxb93oGnkbVnNSS9QvfT3rPwZmP19DXybGXZZoYBZZrtwME",
  "key30": "2nscn76q6FcUZsXxeZbYAWxMVfB9TJjrbSNZagjAZcrVTy55svNSu3T1UgmXm5vfyrXrsqN946WTzUv3sCAa1YJ9",
  "key31": "5yQ34r7KCm7DMZqSDpkic1dAtwAxwUVjgi2yJrGcnDJFPfvcGUjEYfoyQXDwQgSovgZhhB3DgEbBpb8jZRTFTn8T",
  "key32": "5Cx4EpTdq3zSxTSe7YHWcnxDDBaT3Wm7rKSGwakQnhNhvXpGF4dJRgf5Xr8ECQ4AGoCpUQ3gkETxRY5L6J2Q6jHj",
  "key33": "8ATCsdEabMAYnjJwVXvv6nv2mFESwBzzu1mu2Aak7nu5s2vRyYd51tonftqxXY2FK48nR8ja6szALwLPjUnerEL",
  "key34": "5ZPp2Co8axGNWApw32gP62WeZcZsmAZjynsNhTj9w65zTZfroejaZXzyN64ZurtVkRbHKtXXSsDLXPjk6F1qCv3T",
  "key35": "4nZi6yNYDEyGgq8du9VRYsmYD4fx5uTNP5Cso5fjGgB6enREwzhpdaH91Ahx64usjvAT94SVLaSxJmGWunAJHGVZ"
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
