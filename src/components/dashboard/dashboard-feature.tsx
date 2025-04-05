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
    "5EgLmyLYQ9xNnmuwWerpsnrtjWTiZGjMj5bbdEKsJEJVWhfup7G56V4UNiU5UzELU6XUZB9AEB4duKh6YoMsfUcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49ZKkZW6K9xh8yBVo1L1ytzS1n35vv65A1ABQqaAAvZs3xCay5rHjWwiJWxXDaHR8CxDXcqo9RPx3Ka31NspHfmv",
  "key1": "5BLiWt7irczw36KraQdCkDTc1VpZgyWad3vde82anZaCpcxYTN9f3rDcMQdtLVX4La6m3anZuxMAhakav7tHp7LY",
  "key2": "3nqGZYfzcz9Q8E7tP7qviYwFEN6Sa3LtpYaCWRquWjLgVpsBUVNYm6heXWLQQvnqbyBhgZJN3TDapQahZ1DiksLD",
  "key3": "2HVJrw2oM6ygWSaaB9eyTdMkFehSt3gRPGWQggovX1TFubCtCYJPG391X8NdMiQaTK2RsyCGFqYVk7a1VFfaZgK6",
  "key4": "614cE3vs1t2oJjJPgjYHPc1Yzk8h2HSqKVT5rz3SUmCPQjUaQZiEE4PdTyVuTHsumXAxM7gNC4VRHqEus7dQo4NF",
  "key5": "4k8dSUYH3VbfKQcUyqooWNFYuDebZqv9JqUNfAV8yiYLEEGyD6KLKLX9W6HdFTBgpnvt9Es3AcdJCo7SU1oopR6Y",
  "key6": "2XeRFi3U4qHg43Uw4ex68fXsbLZZ8DauxkkWHcQn17uQhrSVhmhZ5JN7tx4UaTdiNy6ZHQLWP6AQWjZqT2xcbJwu",
  "key7": "2csmMSg9NGDnhcHNkywtFEbFyt3yda5RZrkfejzoujjz3Gb6fs3hcuMuMeLKx7TxtV9MA2HhHXUFf77AMcDVJ8uK",
  "key8": "5Sa6w3biv1evmyeDciVK8eTXM7GFWPanKVwPmt78PxNdzFFmSkjFRsETejQ6Sndv6exaNT8y1tq8YNsaATxFqSeY",
  "key9": "61uAwQme2BYdz7BJEd5SMiV737RsaZaAT3QQbEuYvWSCnLKyvJv9vryDdGTPD5afLo8XK8HW8AxCeUmmnk9JS2nE",
  "key10": "4vU5mU4iZXuYC9m7ZTus7dxw1zg6ppef2W4zjuBKbt7Tsbq5uBBHdD1RcojVWSDyPdtm9XAqzGYHzRGZLA9crB8y",
  "key11": "3WUTmd5N6MYk7taWghG6Sv7fsakqVSeWnrYA6288d9PGx5W7khmAe9s83tZg5XAwbRwGn4yyPoknozGkpgGPTJqv",
  "key12": "4R4KFmX4BUL8JxC1UX87KWAg6BwW88sT4sTiZVk4PxJvjiaoaia6c8eLjjFyKbH5TjYM5Kb2yqHV9jphWaTCBkDe",
  "key13": "5tWvko4FQdZzJzRRXktd9V2eqwkFQLFGEYGJzurYy11FnsPbgB7tnfamFay3giUkUwqkvv83b26noqEtpFRGgJKy",
  "key14": "5XYrnrof6GuDpm5Qnj3C1Ej1raP2NfZymUTy3WqBH4cDrJSGLQENUoYhccrT2zzrBhtyYvxTBPPv6VVj4CNDhrDu",
  "key15": "39kYFhaUsjb3CxPC36X8CfEx4GwNRo8LJ3minu97dgsqUzM9qSgPqPaT6wvUQNkCKLTy5yKZkNZAWpPqqXcKTosK",
  "key16": "FAmF596iCvCb3DpXmUQNYH8F8QfJu3MP3QPmAwoQyNEbgUEuZojj5E9NPturZF4XGRGT7XvTGVaL2eQZqqzCDgK",
  "key17": "3FNv72SEsRaqfZy5e8iGKQ7g1L1wLCNtE9nw9eJ7GEZW6qdodSu8H9XwBpmQdaV4i9rfXWQxHiAWR4De5avLKyrN",
  "key18": "BuUvbVDAriguZr7N6B7sN5PKvxxf8kXxEE7ZWK6r3FTS7TTQMUahNCtmceTNim6vdnWrABbhxAgoMFyTb6pud8C",
  "key19": "2wjRhm1S2RxZTiJKBcVdJnUseQZehQefbXWzRRretLXadz643aqe9uHaF54MG3fiGP9sFdEpegfkGxiui7UgTaNj",
  "key20": "5764tSBo8Vm9J6Xwf3s4bxaLdjoZmF1RV2r86evnpmMmVZvpjnqY6BMp1PiswAyzCjLmDqQRP4J4CMiCWWNXRacC",
  "key21": "5D4JuvHm9Q93hzAH75iVB48QkzyLra8E99o4k5Hg32Spncf2wri6igfmsvSvam5sA4RUhwcPURhGC188Lfr7ZhJN",
  "key22": "3tu9wAmGy8ypMArMcjUrZkJaF8JZyn9RQp954aVW3Apxmns1f2t1ziaBD1e9NuJyZjEu8rTDjyarg3Tg8gB9xkKf",
  "key23": "4txBrYEgmCdCL5nzBcUwvayKxUTR2scyZk697fR8pDxeu1WwYq8mtTBrgvtNAYeXyqaa2cr1JtSGT8iWeUYEZXEr",
  "key24": "5EQDkA2KETYk4KA1kYj47z1s3ggp93ADPN7NV6Y6A9qCw6kJE89u3oDpG9PJTesfg4gXL33N3xDsTm1Y6RPoCCDK",
  "key25": "26ctTtGQZb7A73Lz6J9ruKQ378wm2nMHet3VbfN27LzZsgHd9i8EkZHWQosg5qkDiM844KGJ55HUd4nDnh7SzwZV",
  "key26": "5nMm1CWRQ5PyJskNT92nU6aZKP3A2ywmkUT6MEhLsqDkvZ6P6WrT6dKBhVEU1MQJqqy7gjJ1wQ1EbvugSGSmKoyx",
  "key27": "5YZeJJ5dz9tS72egRrwy5b7Z2cDTPqrRbzqzu4WbNHTJDSTQMzpA9sFWgVAWWxtscAReMjxdhWiZYh1XHjgSVLMs",
  "key28": "3yiMPJzUakYWzaqVV2MxeezwtZJjFM9ZPE24AjzB3Qgc62sSevKD86p3FXHm1mqjdRcgHM19grkC9BW5fTqfB7gC",
  "key29": "4DjUJFqT9ZeaWzRgRqbPNqL5p7TBDutWLjsei4jVnUowQAmsQduV6CANBGKS9962T3Hazfv4WTTebhQQfFnTCPTi",
  "key30": "5AsTEFiuw3w4GZJQzavLdezDYCWRMujeKVq3qpHt2d4c2dJ26D5rk6zZWQEqXUvpByRD45VHpx4JBZ7JfvQPj41J",
  "key31": "HK6NVp3tUXvuhwY5ffKoHbLzxdqj6cVk6WTuzJdm9kapvd2FbJEJf8uwrecp9qMMsnsyDRDtmwDAkxCWDDtcDfg",
  "key32": "4aQGjsrB5iPts41izXDXA6brtQcCjxiRELhk7DsLhRSt9ZZokrG46GwGgTo9DvYXSbwCd9H8YeuCZGJZJRokBPB3",
  "key33": "2vAX5JRiABn7rEEoD8YsK52UT5ohrYbp45L5hKXWKDjkRCKYjfTUjoVtG3hQZ4kvQaxmEWch79bpX6oYeKDfGn8R",
  "key34": "6vZLJn9EJmPNuE5AJib99C8biyr8DiEVyA63tMcbR8tGz4kGBb5YSC7SqjRgnVbFjiMBwjFznEVLqcQoxbPuDgZ",
  "key35": "62b2JoezoA9sezvzvn6n9bLeGnW6bk8nSUKEtLZHXGrQfAjkJNfzpDbRnWLHZoJk2rt62a4FupfPC5gYvnKTk9GN",
  "key36": "2DeKeof9k2gjip7Vs3tDr1Ros2DeBb66u522QiSCpZ2NFSeA7sYkgkbXSgHDYEinWsx5QvuVjBJ6P57Fo8DkRETZ",
  "key37": "28yU8YcvP2k2VfkCkCGje3UwnNjgyw9DARotLKEYy1pPnhF3d7t3bhhXDqogg7Ed3f6MA1KrbEZqCg2ko2hnYtuV",
  "key38": "4R5kwd4kh5UDvaZFPFBsg7j3w79EZuGi6gPSwHvWAdQrn7ZUy4KPkZqb8H9TqGneWFYNVYoboedSmGJn7zsZmnAS",
  "key39": "5dHmc5Wk94j7JhX43BrAzTdekVJ8WKbi82tY1AES1tjZUMxXCcEaLRnx9EmJ28wBuEfa5yLB6639EEbqQx1H1uYr",
  "key40": "3bAvBoj7zju3bA7eKpNEn4xPcTRzUtRGhgDcQhPibN7aUvJzFbvxKFg5zHkBDELVaL7grVmWj2M14sNbX9rgwiqD",
  "key41": "rde9fqW3EjcZpEpfibX6f47evyuftVrp9mZdLcFoX6X6y3xe3iv45td3gNgHtSdrJxSFkXM5sVZYewvoyQrqsrX",
  "key42": "2x7aifrjaRMpD7Qv3oW5ZEjwwWEA7ib9ZfL9dryjTUFvSAneXb67nBSNoA8FyAjmvF4ui1hVziJyZr427Wnf8TSA",
  "key43": "4VJuKyuPU6541PfUgsCY9cWoPgEYyHxEKUXTf2Y3oDFZ5cNDDYQv2dmrkE2unJG47pj17dcYFqrp4nVokoKcRYNy",
  "key44": "uDqfVHbKCy4njNUEgtYWVexiP3pxH2N95VuVAdfdxL4scx739SZ1CTNYY4JZjJCasor4JeiHjB6LwwAPRMSHy6F",
  "key45": "2R4xvSqgJkbj3R3hWGfb9h8CoNGvs2dRZmmZHkcSNFMt1SPXbL8gdyijKxsF3HxZF226FSYYVYwxu3iiJ2bJyWT7",
  "key46": "4MS3m53UG2K4fj74WtCun6Z4Wo3n9xqJQtrpv5G1hxYKwWFdJK9Rn1dJSxe3DefwRjsDuK9r4Rh7a95GEk7os4AC",
  "key47": "2a7RGtsVDMAuYL7reaAVuuyLvFHcPY11bXomUpLBhkPXeYRAi1RKXusUZ6CzRRUjLEegyVfFXNmbTBdKEFmX1TAH"
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
