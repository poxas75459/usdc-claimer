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
    "31Dd9noDuYeCPpdGR1EyJbYmezLXjSH8J3wNmjTQdGfJRdjT4ZZgnxMBoaZSpspYGXpqBEEc6vnk91n9UVVCKRJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JJd3t4mhxTu9yKdC5ymoQgLsLu8LBQJ4yURQe5HDzP5yjF8PVfptrXMQBE6GEZ4DwzXqBcgzhvK6fmbESUXQEQR",
  "key1": "4skxqVQRDhKys3pxBPyodagiNiBXaArUxzTQLyED4ZSvpSJASod7B3bkGagb8kN33HqxMKKw2mUtnJVpB44oAUTh",
  "key2": "5o91nFVF5FGcNAxqWKvrFWnFCgFwEzQyhfkbGoHeJFcf8YDRpFEsYtRtKoUryTwb3ybc2imL4DtdQ2hJyTeJzkrA",
  "key3": "62aZiTqgTyZBKSZ9qM31VbJNP5mmJtT3WKgncC3ydfSEKZHrL3pABBcJbrmzBC6UXHoRLPfXvyijZnSNF2ecsFRG",
  "key4": "5e9ZNFbxwRrEaehpPNwg5kKFeZ4BHgspMQ6HvFs8vciDByRsNSym5ikRzJ3w2Z8h4TSRAZcQGuVNr8aNUAZzEbcX",
  "key5": "25odvqK6XjQAKcNrEZSABKhatJkzTpAHDRk8HGZgVattLym6NzcJezMGDxk1ZCcBJMeDffkuyVX7aQS6dH81J4ms",
  "key6": "omi6931noyWEqV58H3xg69RUWhWEiJMjuCn6VRPchFmfaLE5wcNprYyVyw4taCRep6isZHdCDS5JQXLdzqmpVnH",
  "key7": "5vAxVr6wYNG9p3S9oGk5bfrrGr4TAxfb9tgm5w3afugaXZHS5kPjgJEp8KkBBBe2mFssihNBN6BVQf6ZhsiF6W9Q",
  "key8": "3SnRRj85Wk2yWbf5xX3xuN1SF8cSmxBEkwAdioXjgp9SNwznRQjNRVbkZsTwtYhUAPZahFavB4pjQSofLgWcSTe9",
  "key9": "3TCj9exiWMbqQKJ7WRRt1Hu2iJv427wxUspaUKn7arTJXK6ncp8SMvLW4YCt7oc8wnDS7M2SmwEi9FJgHnADGRxy",
  "key10": "kAzCfKrRL9MB75rKzsAHVUNerKwYqbiCP3WuuiPK9NUUpmtC2cw8mmTgXr9Jm6EseKcsD4MGE24rBv2gNVrpi96",
  "key11": "4Eft9rUJv3AemHw17PVHZbqXR2dphYcpDL9PdqvPZznGiqB39GtPrqP7Dcpg58EhxPvKmpxGS7GrEj5rBFWmXEiq",
  "key12": "4e5isxxo7Twq3oy6jHYGGuGFrRCozJaYPpXyw8Sy8EfwshvYQM3mNZ2gU1AyYbkcqhgSkxdfPwS7Ch6Ww2vSAYzt",
  "key13": "4XtEgWED52xaJn12Vx1oFA94GqdT3dFfFhRAYXdNbRm51b5fC2juVjFav9pK6D6mY8EApUbD3xjhUrLfwUi2umKm",
  "key14": "vTr59tTkN9F2j37cXsAXAeoEu2AUEvcitd4ajFMmrTfX5sjURrE8rpNVoDnhUAXqNeS7GcFvqF7pWXfzbXkq1UE",
  "key15": "YkHkRvR8B1U45LzmiEE1xghUkNhw6JxS9vSUwGR1SpVuDgbPvMMzUAoTUT6YsKjFJbkNMUFQyzuJCiGB3Q95tRR",
  "key16": "3uaD3umdtatygSr74gdRXcsp8XJ89RbBjCYZdpBA1TNu5dvetAT6DPb7LRY86xvJ2XfNxFT1NzVkoFbuYkeNVyHM",
  "key17": "4zYaMqhP1Z43dk8r3S36aPRMw59XN4XKbbYhdfzGkgfMWUGgnbpMCucAtniLGZFuzoqdpHkCbqVRqiHE8Xx9GeE3",
  "key18": "4vbPpwhJMdRRvLsXPjhiwZRtJnfXqU1LwzAE4BrGPSQ9bUZUTKVeq1XfEUfWLGQBzC4hTpgyMB4s3Cz1BUyM5skb",
  "key19": "3hgsHeyz4fZv4CCnupc88wmd2VmJ8tgEgt4N63931hyryxvrdN2ZGUzDzNJabd7hPLkzJwojjvjfZK6NyKiUkeVk",
  "key20": "26guorw2P5s5KicJMyzbQNFCmfpkXy8P5d4mjWA1YAbKycFSvSy4xBAuNqmyoMhFeKmmyEy9AiMdnnjbMTs9KTLf",
  "key21": "1whNn6wvfWqPXKpcaZiYH3VeHDfuNS1Zkf5paacg5PnFnEtjUkHkhr9C8cHxqoqV9whfjgWc5cKB14eh8N2GXGa",
  "key22": "57gZzfhwpks9se9ty42gobJVeqQi4KXeuLU86qxspFW7z2vJgRssM4GRq5APGtQb8W1TqzLqHaECD894tpFJr25n",
  "key23": "5ZtQtwqmJbXS6RmQ3Yiaq2ucYVHmTmkGFEtHZfPcuV2bacemYu78DqafKeSS3LCh46sbKAMb87j8rsmMpaNmSVKN",
  "key24": "3KUPZhW9WdBjZonuuY1vcR4KwBfyoByA8KfPmkagEAhBbDBLUWQZezAa78MNSroDzaZszz63SpghvxBFXDQ3v4bK",
  "key25": "3VEHqGxxFgyHXQwLcZ3yiZHMXuwBgfBtJbavZZRy56qWgsSRN86djq34HZmUoeL7trFL5zDwZKEs3qHkbPj2xuqd",
  "key26": "2ea9sn4wmXwK4FekAp1y2CMk9aqyLGJBBCqM5p7ZAcMM53nYniSJsEUt6YYeh4Bxv7HHsybKRLURq4DinzXwmQ7w",
  "key27": "2aoNN7d1ZEmTg7avZoTbEQhoFubcJzWhZ6xvJTTqGsxgZifQtqx7dbknvUu2fdt2wXHLNe5jG8U2yquXPGCTjXVt",
  "key28": "3krfXpsJbQByVi4B8QNjypofk9Ftiy99VXE4vcajuAQ4BKJrWy1YLnjMc41PufYM2M28quKyKzavs76C129WuGzA",
  "key29": "5n2PFRKDN7ufqz5KP9iT4Fyq2xoT5eXzkyfEzZjBkvCdiRQKJiiNMna1QwDswzUnbzrxnHXg5wbRC4ekzxZtLzGX",
  "key30": "4LzpvDC1UiDp7uD3vGuWdsjZy3CuSrpUzG7vsRSsvUpCPKmNwJD79rB12Yoyg8V72nVZFeJmN4k3aHDXHL4xbLni",
  "key31": "4PPVEzbVned1MyHk7rRMXazD2HWbCuJBxEqvsiNuB2DBwcAw5s3eEkQGSxzLbdRQo4UC1eDQx1Lpe3EDQ99GrbRV",
  "key32": "5obJ8FPEifeBkUPrixgHnJELxmsLrL6BTzy3q3F5nvgvaVTUh7n4BGnPZgMwWuZ3sm29h9qySFzTtyM5CLh8tpcK",
  "key33": "5m7issRH4foYViq8CPTCM3DAJ47vP3MJeRh8qScb17We8VcpXFszaqbnCq4afNhotGbu3goisrTxAyB6VjhQgbHy",
  "key34": "5rzuG97UXCWSuMMZf3XA8UJR8dNbSEUSjVJzCLX8mqy7kANoWdVCEXCxWANcXeswso9vqgEmizAUuaKibuYbTt9S",
  "key35": "AbLKiKZtaHeib7oYd1Q9yemYcstdTgJM1dZtodh9YmXqP3znuJSnS3deMc7izRKt1JDmJppjWastemDzoL4wmEy",
  "key36": "4zEnLLwtdZdd1fTo5gNbxDcpk6CNZeFeLtLvFTtYwNBSL6NjzEwvojqr71z7U6EziZpwJdsLKFSKdd6sw4nrT3dv"
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
