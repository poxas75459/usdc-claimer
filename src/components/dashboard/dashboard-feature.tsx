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
    "3e8DGR4kZRDhDWmzHFvbLhwZWvXCuqX3vK1u8VwyPeLGFecqDDi5rdG1QxfxB5EtCMdDAbx3YbUd4SCeeo1rW2k9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L8e8vzjEz2uEGof9pgQYK1udM4oJhGLhfNQaJaQh9krn5k8TLKs3849s8u62bXfdCHxiEguYhShqpjzgb8fXuxC",
  "key1": "4fHj7DvzZrfW5z74NZ9ZPbfK1tUu2s5mC7hSjFrAwZrUtgVTPG3HafU4GtskmhG7aSQYC3YeqZjeWqdX2SUqdct",
  "key2": "51HBosbjk3GHkkT4qmmzXt4BJUiAFQPRj5dcUpYH5boTJfE23mdyUX1PiHapARCrfpB5vNi2vUMxeD76dRCStth2",
  "key3": "2egqpZu1Kt4GcEbWUzzS234Ru5qpQaQtph7ZKCWribS9rDe6vpc3eWURfnFZaoZRZBzp5WK7SV8Q8XmTpBcfcipw",
  "key4": "3qW824c42NjPSbhFtHKxuqGZDJWi8xYxsexbyWq66eMWdGb9pxN7YMRTpcu6AZujN4uGAw4nbJGzacFnhBU19MFA",
  "key5": "4ef1VjsrVpxALtMRzEVcKqqF3qfxtMZkMAnnDn6G3Yzrofi3zcwnfu9h8xWtQoqBnPv89dtuLb2hYoYYAJseQUo",
  "key6": "5hQq82iiqZuVQHHppnuQVwqZoCgcqnvywYbdsKMtWTfxShX2ZLEno3TPxMmRnvF5KHD6LiChHvecpU9VTBntAW6F",
  "key7": "VBZBV9q9Rqyj3eR6sxsNV5E7UZjHMtrUCyfERZiSfWxw5SFUBK6Xy6aomsnKGnnJerKdUB6NSMaptRQpk7mx9dq",
  "key8": "3fbjdLBWfQHcJBNH2JVeHq56qy3ncS9R9gqmnPiPSMLjhwxuiQDqYbDbtWxdZcRnmQkC9ogJwvKVAZdPhY3EBRcW",
  "key9": "3SJCjpjJQL2asr8mL6qddbZ6ncZU1brTReHUJGbEPpBeZXhA5JiUxzgvvnMm4jHLbtec5DpeR9NMtp3pUHryRWQz",
  "key10": "2CUj7ywvnY5AXFMY4kv68K6vo3sf9pvBoB7mx9XGsCN8yZ4f47rNBWyJ85Hhn3Ja1QW9MMr8cSVYieDThaMxViVU",
  "key11": "2mUAtEBmT2e6hJz9x419AGBcDLJA5pfbSR9Wtf3MTLsm9Mup7ZB715nFtnHBnFK4wFje3y85x7zvaDMfj5xYUEKQ",
  "key12": "4w78c6cVAqS3MWkZ2JjfKyZZ3t4DLFcb7TAaHvSB3MB3SobXs36HFe9RD7KRyFLPLZYi2RUso5g7wRau9quHaEKZ",
  "key13": "2NATWmtuPJJHnu61fdk82H2Umr9QiWSXZUdRi2CLw35WwdzrWnD63KRDZ54eNVtv3MEvGgdHb2c72RuSLctMkzoQ",
  "key14": "vSiUgPmDDhmL4NX5XMwmJYM3Ttjijhg9VJzWaHVz6RwjLBB9je3x6D8A5KE6h8tJMY1FZ4V3iFcEop3Uh1Zss2G",
  "key15": "sdgXDoY1ky2trwKxN7LncHZnr7FViebHoN6iXxDi4Rg4PokycPP4vmboSnQ7vAsgAPYmZVZ9QtqcsKTwrZFuE8f",
  "key16": "5JZrFnxCrmGpY9nHTgTDExCQ2xRaQcfxCDwZQimooLAnGd7TDydoDN8VNS1UvwjKm1TBsWaaM98KSxALbvJa5q3Q",
  "key17": "4rSGv9cLW7XgkuQRncE9hxgC2SxrL5UUihUswe1rSHv8JivYJq5vZRuCNS4hBoJwpuJ3Mjzx5pLAm8j2osWamcqr",
  "key18": "3JsxGZbSYuBNXS5HAgdTDPsLQndP1ApYwB13qddGcrbhN7GiHPh7HRifwrDRgiPnzioUHAdg4gXq1DEz7Uac6CNt",
  "key19": "5JNhwK7Sk3uTQK1v5D2R5whkHuDFozmiADvbWrxbLXHHEm7JZ24FEdJXxb1a7nXAqyM3PAESLGm429iM2yLnPWLD",
  "key20": "r4buPhXup1pgKwnCzADRHp68eDoDpw6ZJKSUhywFKHKVdrc61pxSngh2kcRfdyLLtyhy5VmpwyMCRivub9Dwm4R",
  "key21": "3GKE1bCCzrJBHXmVpzvDZKTdoQQfbznv7mVDUWBC5AEiM4TvztCX8whXG7Fm5gAXgiZdFfc4Cr88psKzQcwLMsmR",
  "key22": "5EFYrbiT9j6KPrws4E4bZmAAKQSq3mnLxuwgqUqj4RaZB5kZLdbthSyEY9CPQPbAU7EYEdJHnox6PDrUa18T2jjF",
  "key23": "5VZV2snS1F9z6GKqYNgqC59GjggbdLGCZ265TGVaLMcNZ5U3m15qgoUrsPH5gxYHgo9hvJbrTib48znEGJPkaCzg",
  "key24": "64kzaTVC4PUSGwdD1uXEY7TqZ2phwMHrfjvMQw3og9B2GZQAywbQ8TdrWhfDCRydqSgxswjRmABUfZ64M7aMMRZ9",
  "key25": "5cWLRDrpENcFomqB4bXKtQ7Zpf2JaUPzQanBkccWRx9aLbLTzEjaV8HLS3iF7J7URqtm79irX23jS1PAf3eqCmu6",
  "key26": "4RP4vWqjiY5PT96FJgdASaheyFVyGN35sg5qhzNyoJTA5FEzUDQdc4cwYWY6eMrWq4MMA873senFjxB5kdyEexPV",
  "key27": "21ttnP8XkAFvdGMaeGurUmXEWoJuMQt154K891qRAboAY14B1GVcD1ay11oVgYubW4T9djfWx2qwFUfr1LaJFVrv",
  "key28": "37izkNqXPaBYUrFUxNP2Wf8Zg95p5iHkrAQobrADCLmdy2CDehUp53sCAnuWxMJCgHHqPYmM66JN7bfYqxkswNZq",
  "key29": "2u7fenEBdCC26U2N7zuTossuRjezbJ33JJWUsWY21Jt48vtPxZETBjQEnZMxHA2zsUjQSGvxnLWL3zf2EJafUnDA",
  "key30": "5bco419pNTFWt7XQP281KNjZyLG76Hv4HCYZCdmGiVYqfusXLdAndGzhgMFUaty8Fk5v15efSKovXyQiERBZ9z9z",
  "key31": "4jMGsBF2JnoxsZPsWDCDP9XLZLoT7WvCLMynYf6bWpyiVyQUXWkCdoZdmSuq8r9pULfVznX6XoPgn1GTAWZzMqtM",
  "key32": "3W6ssXv3wriKn4EsjcM7uR6UmPShZpXYwVSZkefqfAKc469iJGiXiA3AKQdz6Rvn4bQV1DEFbLLzhyZJptx8FbRm",
  "key33": "5riMUy5jDEP1fYbjLkPYYBfLZq1X4qxGQ7UdjDNguXNz6BPvfZs3gQegCnxJyATtKTLNPwdnEe8BsU9bHLBdnsNu",
  "key34": "4WD95N1yJSKMGCpcyBisaSSe72ydzoFoMmErEbshkWLRHDRUhRiNi8dbZxxLXCxVqkHjmyDe944tNENLs21eG8bT",
  "key35": "5ixAK7WW52J7VSmawsHDnUD67DvNH6AjKMrPsJdZEf5N3pkD5MKncMQt5S1D2NzuDqUdDXN7iELJ5vKBERSxYgfm",
  "key36": "C6zcLzFA2xFnGqg4bs9Fp97KeCJyFo8bJ2BcaPa1vnVatMUKdFX99VGZ7QvdH2ZbntL7xWLrTkTapdprvtgw27r",
  "key37": "5gt8YS9n7Mh74refvqAkpSoWgbYs5jtrQZtQbXg1ZSB4PNbysYoYeba5wZ7WV5CQvxqLf5SN9DCU8gN1dF4WHjtF",
  "key38": "4ef85aqFrpzwjXeAJ2g4ngmkNU758irW6sd8VWZYrsVtixbPKwj3fyMKdyZGqwQ2XGruz71uQKy82CwgPohPpw5v",
  "key39": "w8UuWvgtB2KqCZvhVi1qgBhYXw6QJREaamTQ98zeXnNnamTmpVra8PV3GDcJeWEggxk34QwNyzUnRYbkBEKvCCy",
  "key40": "3VBCGdmqA5JZM7WnUEudPJiJui8ai7EBJzDu8iKyiMPUadeh1YBTDy7rodee8neHDocKawPhH3S2pxGmP2XPQGz3",
  "key41": "fddnZJwebLs9EA2VatgYcC9xdmjQVbFrgpkBuUfqyuLTUaWGfsTpZGADcmpTm8DrQ7S1SMzoKLW7G5Etyb597Bq",
  "key42": "cHzFZ9u1GV3o1ZsN88f9aup2W1FGjDGhdw4KDY8s9RLRbCbRViHe75kT7y1TnX7r48VY9x5K3UdVdizzbXcDzLn",
  "key43": "fyxEu2236Mq8BtPPHEwWjFsRYQx1b6dB3Bayu933MQKU5eM1ZPSNWdGJ1kpFCBCef75Ma3TBzpRxBYod3sHXgGg"
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
