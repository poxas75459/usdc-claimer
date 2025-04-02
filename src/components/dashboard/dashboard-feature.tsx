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
    "5gSHndQW2mgSLe6VAR9KYHp47kWTetGCuTrNpHzGUShBLiC6wRbuhSrLniaBBqF6J7Sj6scFyn4UQoZuLtgaYwPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SQiKKtU4w1oMYDzauHYuXeoUPmGQS7GHPfaVX9r3b5xVPd2ZsigKGLketDxkFqt2NsSLcEFroysCusv3yEoGibq",
  "key1": "4cVH82YGoSEYz5zC8cxs6nB4Y2m277N3Ve8JUobF5pFTZvMmBebwTiAUZHfLfCXamg87CuX19gE7o4c6ZEWwwPxU",
  "key2": "4pmeh33494r28pMimMv36MTEFywzsdsEN5ESp6icSc98Npt17Jj2DiwjmvXyavAef6yHHiBqpp78bEtudfxy39iA",
  "key3": "3KsBmVusshuBGzdyZQ621wdtUfFfSTN64Sb8PbgXmbJnm71nKqUWLj4MFCwa4EBiTgH1uTqLD48BNAL1MTzAC3MT",
  "key4": "2p76GHWrkMmt4kbJasAAnpRfy7msWUGwHwZktaJhRbmwsdGZvpjK4Zoit1bcbQAe1pkDS96pK2epzAMRgqCwRt9j",
  "key5": "5e12zckuGn3pEC7NyNtGwkXXtiNBAmiyypHKQYWhpnNjgnS3eB7mrFK5kn4JtAm42Fm7E5JEivMJLMtfZ1KqvG4",
  "key6": "5KuUWMms7AUHkkEiUFC7tesGqnADzAhSEt63WqB7AfxYpVTQ9vpvBgvzKJWyUQ3HsZWgtkB9kf3dw1eKR9KFjLyz",
  "key7": "iWBFnryJMfi4cQCH5Ca5gsa4td1YLuDjXab7gCo7yBPu1JWVU1BknLBw4ifyC2t4SJ6wKMUTf4xLnFS56dpMyBy",
  "key8": "4ATpyQ9wNvJoFYrBhetv3inhE6nHcrhxXmRiiGaLPTsw3XNvmfuWoHi1uAFmeAd4248x6g7TG8QVdKa41i1wRfCL",
  "key9": "3bRxNFLvksC4YseMc8WgWaMwNFw2d1uaygt9RMPSJ2sru13PtJVatY4riFh6Jx1pFRBBGLDy5T8EYA3TD8xXzbtd",
  "key10": "4u4WZUwbKWi4a1JynUcKMixxUaMvFs1FszXys4jGYGZSWzanhwVGvkFiWpLswKiEsHbnWiMhQ3JWL9Dqsbq13Sz1",
  "key11": "3gyser3bizeiaCCdYMxEaPdQ5TTwKxTtQJyF4cp4WgMUqT4ak86Nhb4V8Kj5wqxm9wcSR8e1ArRWjjdFTZTcmufD",
  "key12": "36BV6qAtcrES6iXsfEsW87Vwi1zQKcwJNHH17creEBmT4f9CgeN95o8feLBHeBQUFaCoKg9ydW2U9mdqq3CNHDZk",
  "key13": "5E9RwrnzEVhfvvJHc3wHe3o9U5toR4P3oUvoqkh2guq5y6sgLSGLS3ucrGskD4maq21pPMdDLSbiCykuAXbhjL1Q",
  "key14": "5JxQmymySV4FLMQcwyWMhtpyRfqNYb7AvsTkmRwzTMoeSwkNyJw75DZzDjgfKJkx9rgJM3cPfv4zwudQXtq3Rfb1",
  "key15": "3c681xMgWdorSJtFZMF3PSRqangdrBGTQGnsYxGfx5a1sT3zrDrKPFvcwquBqX641EvxKxKVwRDmabRDkYtBWnrr",
  "key16": "3aqq97GXkMDYqFUBoabhzagyPFfdba5vD9WdwmVQqgGXyeZgv2ZmntVM6wrsu2ZmWGoSADg8S3mYeYcc5LxczzUq",
  "key17": "8faoEwtwSnKphTAZG8xKS6Ab5TdjiG64VRu7QzaEGnyjJFbeARwEi8CDvPoYhYYcmHJ4uxegauMzjvQWWBi6cRc",
  "key18": "rjwvsvfcEAT8E4xoYNPUhfKTgbBWZy8ckzGJsZVwh3YPY2zFZfA1hdUo4q3MzE4tCvSVCxNccELZh3KxdBAEQiV",
  "key19": "2WRzr1vASmz6tvZTRTLk2eZc3FLuNVKdRxUbwg4cq5HKGX1m5GCxCgRPotYvAJ7Te3DAW84vXAdA1RV2hmZFoGuM",
  "key20": "5VVNtPq4f2mLLpZgMRzMEnHavWAkfpHytJTbV9Aw2UeQMdwqMzfS8PGn5QgHAWETnyPMManC3VsqpSSajH6yQszG",
  "key21": "2J8rgpkKEpsUYDTNvQ5xQstP6N2xyr7bC92heZz4yXo9EjMMj6ookZqyK19wLGuvCg53BfGXbXdKZT65w4QVfbQ2",
  "key22": "dCNSxBhvyRJ3c8Ew1KFdQoL79dFDBKtzFr8xR4eaiVtxEYwaeEHb6Z3EcxL6U7VxDrE8EpEPjD4gCEzsMPsjTtL",
  "key23": "3oy9pHEcRLLetMLznCrmyQTfYzvm1wYWigkSfc7J6ZyZqHT5eXeBXhfqotsHeGVbqvKYBAzhhyPpiZykfbwVQ3dq",
  "key24": "5iQKLZaodafxLZXFPMh814WMk6xduZjUCeCeDjTM1fnAUS7SjCThbS8dM7WUof5iXpYXitLayz8Ywem51Tjskigu",
  "key25": "4jVUmwaH6ZbGAVBHz8LGjbZzch3VFrXsyGkg6DHAVRimMgmiCM5KH18R91pWXBHC5iH9PH5UygADQqNpAyfgv6zt",
  "key26": "26HVaydHuBTKLReLVKqi7cp7W34GnVnTuHayxbjKKETBige79wbBDijqpAdDWn2yF6eC65Ht3yXcJd8E24GsDqRY",
  "key27": "5gomqnFzjTyVhAezxYLBybq68UXdNvhJuwTgL7nsKo46wnaVUaT9EDsiAHKhz4NQSqx2BVM32xWzeRB9LRXkGJvU",
  "key28": "W8QfLd7XmSUgj5RiUyyrT8F4pnSfAnWAXSDrjXi2j3kTVzVmarTMHKJR5wR9DZKT2eFUsaLgu67KkUtND3NGfvV",
  "key29": "4ryRGncD7B1xdmTSmxD7DCCUtYrY9WTxTuDQSj9ocBYkVJSKXgicUyoDJUpXQiJuVePsM9pRQgmjw8yy5k2M418P",
  "key30": "3FdXkZ96rn7ADKc4ep8ANygKgGKy1JbrdaLrRhof4HuZR5GVzssbjforFofWxdqocr5pZaJt6FcoecfTJokaK3nT",
  "key31": "pByZU2ydKz9SoYbop18Kq5GDLXFfJDTF9au9UqS6bnEcJPN1WJzaqCcw1NrndvZf6KVaQQdGBgEZ7BR7avpXAr5",
  "key32": "4sPi4uX1fxwYup6FvcLP4YJYTh1NP12XCHaEancN14pRHVGjMHYTRK4vQ9vmhHbQ3PjE1mwZdPmr85SmrSwnmqw8",
  "key33": "2e69GnfHYubtd8WSqwjFiwwiWSHrHFBEHRrdhR9DDPJD8kCYzKNtpYQsQW6H54JeSF1XFkX7aQuqMgusAh5AQSoa",
  "key34": "LrDEdckFGXdJ5zRACBuwubkn2ySfJ2VjdMg8E8Cv7NT1nJ2kuKqDC2kWcWjHkEDyMk8cCG4n6QwMsezqm19Bywi",
  "key35": "5jzaHPHATwBUKiBoqb9UqM7FMohPrYFrcv7kxDxJThPHzKQKaG9PDmeHfsfV16kENmdycUij71sjV4YNjTNGom9",
  "key36": "4ovBowH4bRAqGVApg6Njrffz1F7gZ7Zj4hMUi1cZ1DyaP957cGzq6GKxv25hKJNsDCwc4HuKLDvxRnBQNqYtcpxS",
  "key37": "48rRHQXzxAe5uYEmXFo7hJ6XUoYgiRBh9QxiasJHTTghmRYuiDiWthCZxD7sZwdZPH3io5WteeSXoJRQiXnMUzzT",
  "key38": "4yb119sCLAhsZNMWTSqmMoCHkr3GrcG4VjVFEoBRbKHVXaG5aZnraEfK9hv65kAQBknz5tufX3ShaTZspxK3o1vS"
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
