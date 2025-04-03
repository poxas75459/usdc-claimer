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
    "51CMsdF2EKvVQTGcD9XSMbwVkMPSGmYU9EZycMaQBkw7XGmYU4He3B4sxqhJfYjhxhdSpPtAFxhqeDCAQKgKHujA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bwhf2RxC16oqpgpvsg5cCueDLbnncUoKPrYGDy9ssTyGG2NKNuDt6FQGiDW3V5kYSRrsx3V1ugJZnY3HSjHTx53",
  "key1": "4fYs2t6SUPoF4UZzXgFAzRJ5R93aVcEbq1eMT6hwGDyE4EYFkKxsKM4HVrgRomiU8entMnSC3XKnpNkCwYoPcmGf",
  "key2": "5JcJS8QuLh1fakwixhSpnjvcMZSeH2deYGroDBbCPyHWsEHywLSX56q6YShT4SCUDXsp44HNy4VctwwWFWLe9Wky",
  "key3": "S6he3kt2f6y7fQHEdE1MkHZ3LjaDAhusAUhX2ajMeJ27vYtDBNo92ZDTZqjtdA1FWTkBJJWf7NovHLfrBh7pspg",
  "key4": "3aquYsz4t1G8bRVjs3XqqZNXQAjSrWzsjC9dbgEJtZeTprzKahmbwcfEFBoMpMPRVXntHmvNZtaozCkskHPLWp38",
  "key5": "23nAn3C5FmLY8AN72R9BL2L3gbT17pDg4RUqPxKymcS4buRwLxmLtLw2moJahzeNitQ9AbLpsuackngWKEdis6LK",
  "key6": "5dAMzXwodT9S2w2yKAqCd6r6aZi2FRi4aNujfATqFn4UxzHYzTPWTHnmvGJrjD4L8chdsKWVJYjP1gQ3Gt8Akwkj",
  "key7": "63B5BMWqKvEucuNfzR69GDFuaokuTYGhKHuEJfzZGAfxnZqBvWHnZcvLdLmRRFqKsqrfbXYyA5EufFswZrpzB9d6",
  "key8": "3MXTKtCyHZcJqkFH93QAMScMXwXVv57VCQyK7tweAu83LBWmFEszs7T8jwSwhXGYTMnsfuXP8jE4pPvWe5atuvxM",
  "key9": "4hJdLsu7YntZXEQLZGrf9jrqMNp3tzXZUwhND6AJVH9kiwbSUruoMhMuL7758bQHLg6vmFcqkr8Mf6WeVS2aYMky",
  "key10": "zdh1NUWvcgLWTJqVyCgPBAoeNprxPgcWwfpaL9LLef9zsrBKmKWpdRdzxAnzkmiqbn3B7qoprN5pqSEFasru4gy",
  "key11": "3sWFW52e4jXbTN77HdWWD4EL7RoGbXYzUtXX4L2fKzfYgWZT58Xum2oeuKNgQy6ATtkE3Qi7bwvCKWitaQypPByj",
  "key12": "79gsBS7hJqLagALJNNSYwZFBNSKnCTWdHcUXUZYAP2ZnU93qgtwbXHuBxYUJ8p7zyqxRBRecsncue9b53XhUJR7",
  "key13": "s8PyKukHxwkJF6uNJ5Go9Ep4Xuu4T2c5c9o3NW1UYdXncCiG4kEiKkt5uT1oCQH4mnxERXrB5RCHkbmmTT6hYf2",
  "key14": "4yuDV8RdJsM6cqyznsig4EVfGM7JFoTcjwH1okc6QD8VCqx8NGG3682v6XKGtLeFYDVQhs95HHxZsr5HNqhD4xer",
  "key15": "4jQaxezM3Jq9hYvCy3yK3sTwjG9UuQakbT94EHURXeoL59WHU3BivyuRN2omTe3JrsrBfnpLcXsgAFjrP11QxJSx",
  "key16": "23uptvpQekHRVaNmZiNpZUp7QnpGFGzBBURN8R3jrYSiTWhbqqMbgYJ4Cs3UrG8bjMtv15SWmH9bw228haWpfESD",
  "key17": "39jbVkcuiQWFkexpo9KR7w3koVgUKWFLyn1nDoTADXT7zZRLnq6iVHrVjMbqdZvWNeopdxXXC9zf3HZoURMaXgAo",
  "key18": "26hHNo4N6uGxUgeaFP5AwXsqpSXscWaQtRqVLbtJw8133VjMPvpXgyjXqzNeeNJS8vWped3Ly6yFtRMBv24FTX5T",
  "key19": "5FDqwwqkWsnyjvMGj2XzB15Jznvi9XHbmgfT8yMp8SkyyN9cnnbPM2Vn2H5VxZwPYKEaHotTArqR777QCZRo9zmT",
  "key20": "5Rkb62aPG7Ya7zmu5wRMPruz4m39N9mHAUZbGNtpATkzkL8RY3PK9aW2ZDLM5nehSJoVRfYKbpZg26FWncwV3KkB",
  "key21": "5XLyhLaxHAVh78qU9yvXrUMQF2WhcCgEa3jYL25rS6XRsZYzc74bCjGFh4AUZtL5zCYa5tj6SAs2U83dVEsG8T4m",
  "key22": "3vi6jkVHUH4ar5ZravN8NaUsgXhc4FQWUTYUKwhNj49TwxE7XtcNN5U3vSdopoccLwM5qBvF9iexzrTNQQMESzok",
  "key23": "3hvx9Meh2KxxAwFPPi7wLr8FYaxQQVaD82CjZHc5GTEoPQfyfGMpeeTRf8YcudFrXKb176StFNMVaA9YiDv8pPLX",
  "key24": "66Rtgh9m98MUmfBKtrti2x9LQM4dSBhTP5y7cYaaYv2ACUM3D2Ziu6uTGY9K3sKx8zeHq9CtQXbH1XtmeqFfsmpc",
  "key25": "R7aqTsAvxiGAGKSVf8FSTquWUFAvWce38ymkYVa3KxyZRF4nnXyJmbNtA2aTaMZhiq8sckY9wze9d4r2vEhufbj",
  "key26": "4GsAPLQhBHhLBaoKS8kt7nki3gd6QJtTBSoqNgSCMhUf1FWFZcQUw36L2NcrV66MrX3UBSDJ3XZvuXHP8UTbPMuq",
  "key27": "6Lq9Xyv3vsKyMpGy99APYgcXG1sCCUGM91dUjgWC86naU98cJW3wWJQqmZDrhq9k8frpYjhGqnZ8AZ5A19uem4L",
  "key28": "4QTfmpDUYwfysyJ8pa9ZB6iTyvrJarsAdRbsTwXe91bUKZopsuSU4weCiXB24xydNYoK3AyxYQv5NCyPG79P7j8D",
  "key29": "3oxKLaLjGJeogBu33ccEHkjNAwktjCguMb1jcVieB4Da1Px5ib9dbDHHwLjNikb1ppiBrX2NMztQWpGRsLcStEvu",
  "key30": "52jmvxDp5dGxxh7W77HxuAxMviXxgYNv5VEjxZddE5MiCDEEDUaW5TXL1HiKHhuAeGWsZWeLUyhNkiyS3ntTAPmY",
  "key31": "5ZisRvc5xwgf5EAaLQRLGJxZRF2u9Z6QkdDimPBkoYqfjaD4Hwty6JoZBmDQbbPLeBGnS4QQR8XDHSXgvSZin76U",
  "key32": "Eg7UsN2Mm8HKzj2DM78T9smLuXXjnPmk7EcLeC1DdCSRnaLNZwFa19rGXu7H3Z5DV28Zdcrwv3jc2QeFKC8SxUf",
  "key33": "4DcQTzXg5A39BUYHVgxWCZhQpKsQjj6w8GF7LvdjSjNSv5MHEpKucEzu5sTPEcYGXiXjkCHFAQ9pdUW6DkSFh2zS",
  "key34": "2tcnD63YukTTHEQCYR1p5RppLm51KiMxbGp4oHktRjBLWWufMwDSmuMKd93FJ28BXxtY3gvNdDqjosGnnJoYsejv",
  "key35": "4H1RfdoCcfAmrf23KHCPvWYy9aZL5tB7CUeGEPvcFNmA4aAMQMW1rHhWBicyUudwLHandhVHzEzmqM3tKDrKK4bU",
  "key36": "44z2Lro12MHMZY6jrTL3UFkgXM2mVqF6xs3bWaX5uURhxtdYAgAWE7vr1gREegZweefU9d6wHS5Ghe9oUaCGyAer",
  "key37": "2Y6qWdq5YKi9d1Au5GUCuHH3duzVqSi7ebuXXwqD19C5bSK6Ss16tUwsW6SqZ7KvSUmrkdR7MWSFEXu5AhnurLPV",
  "key38": "3HXZqNYRX4TPEkGXRT66raHqBJ2q8r9A8Qgab9YyfsfV821dTi6zUxkPeBL9aJKJRPGqx2nj8vqeRN8R2A7Ly3zb",
  "key39": "5hJ6h88heRVdPv1mo9sT9muymwPzy2xJuse1xrBvufRuWcknMuxD56TxELKZAHze6SEsv8BUcyQ499pgrT6Bg34F",
  "key40": "5FUY5GvyU3zKtWoZYrGscHGtqQ287bHemkqRreJHTR2kHC6uEH64hJ6EF6G3tDRALhvc7eVqJLCdFh4NHHh9QAhY",
  "key41": "2nFzAWfpTm24KisU98iHLPiaNTCSqxYBkicWbu69ESmk3S5qCpkZr3yXmYtuFFi9x51vYQnHzMn8egPDC4HU5MG5",
  "key42": "4MVQNNsRymr1G6XjY5sr9BFD3Cjp8n5FsSR2oS6jeQDcdxwmooV1BuMbGhGYjT27gbQfH7SXLL1ydFzTUdCGwQxi",
  "key43": "dSm6u294hMcjrpyDCNrEehh9ZNi1px65Mbd7VermniyRmaBRJQ4YXFUi4xTxsbuNrBnXJLDqwvZauSHWgmrHaZZ",
  "key44": "4WZcusCCN9iwWL1ECv78MpyyCQLg4F3XjvsnqkWy3hVtL1xQ5KKG8YeR9oEkBFuXehm86QhcKWD4AJhxrLyC3GwD",
  "key45": "4dj6HemiRjG6xmiEBfA8VFHZHjfmenwGDg4qW8xAGmsNA3hRWtcf1hUNDBttqF5wMEWLZRqsBrJt72uwKjryQiLY",
  "key46": "3j2hKcbCcve8BmkKjbVF64tDee2NGdZsWDmuF6Qb16NJDF3vFJPq8TomJUdstRcLYbkfFCW1cgoPLaSDidBhnGDw",
  "key47": "5gDq5uQ3r9zPe5xGFym3339MSNn9yzr1ppagNv7cT1VYdPSMo6mcc5XZWVQgL5D4Uefd86FUEQgmxEsQaxmcdmUU"
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
