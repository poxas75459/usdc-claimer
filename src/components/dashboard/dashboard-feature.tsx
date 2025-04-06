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
    "28aseFg9Q3uFPChBzpKrEe1JprT9r5PpH8zraknFBTzNTUzEZBU1seUh6tagh4iea5kr6zVafoLyERXSyUurVRMS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22C8St557Kpnp1dbnrGdBFgni1cSrm7QeUsb2JakUeg6MByMzXbgqRbsKLaocs99P91KEKZdZzCTKFqxQTypUaK9",
  "key1": "2SN9B641KJtduZKp926Z555dSwE5YvyEkmGg6V7rE2BWpvkuv5MuF8J1TP75XVgvt6MgTQn5mqcHKjb3aHQKPyYD",
  "key2": "2QVwnwAHkYMokWtGcrrp5qnnmij6MpJST8nvDd2esZtfD7RXpJpynVZfmsqFKfWQj4qFTg9hBkgSVXS5tRJqhRAN",
  "key3": "5B1Fko5CearofuwchNQTNNXiCQBVkDWbkCayd1cs7XK5agHZLmZGt9Yp8FtzhmoSnYDProukHS6Ja2JK7CxyZT9a",
  "key4": "4aVjKscDdnDrEALdCNBjq3ACDTDpnTqUXZgXtDGyW1UXTKStjpMa3hqyguW5BtrJdfNRjTGokKQ8fAqzYWVvuzAy",
  "key5": "rHmHEsKBS6ukVs4SA3eHsU67uzqtH47FyC7kN1N741vyfqoNzAMw8Qt8MCdCDsHtPtQwxFmXRWHuV1enW9nWxzX",
  "key6": "2n4dehSVRfz92E4EmhabGXU9pUjQXd5dpdCsYPjTrampRtzistixdJ133BmAsCQ3deeeZopLCbWy4E1RqZNVc5h",
  "key7": "7cajnszRtfvumVkBhRbPi63GAcMdz1s92ASvuNi2oggPtSBztuzhRdUgPhGKyivs8EWsK5LrKJq5wTffNR7LY4G",
  "key8": "5Ktbwvt2aci8bbFM7f7H9yBSW7LcsiQxRw2TwY2jiQX46Yrpz22w7Uub11xtsxegkB5UHyPeTViUyyWVmhHpfeus",
  "key9": "5QYNGQAys57h6kqJuGz6KCEF5bW7Dvh96FGYpnYBZRJwSVv6UYwYv91pMxGdT9QR5mW6yhmhzikTckBHCYdrMwGG",
  "key10": "4HAwd7MzxKY33KubYf2ujosWMySYEkoahamDp555DSb2PCwA9QwLX68Rnrx6h659mmeWHoWa97Y2BzonbFtUkkRF",
  "key11": "4kZHtqkXxds8GeBpr6RDh6UfDzmV8xmKD6rfs2e5xVSMp27SNGbWTAG1TyHUAaTcA11jYQigXgciimNVrF3BgvRK",
  "key12": "4mbaBogF7MeDgRLZfKHdX8Wdg8BdPS7psWZpMRiRAms7STsMAGp4VsveBHTEtHkoGCNxVXzXQNrgAifTUSQjRrye",
  "key13": "5Ti1UU8Nz5XFWCSJ92HMHTxSekGp8CExEp4DytqUU2FYgTA9JCaHJPM1pGae19cxLHhBSuFwKrKQPeYw5pv8RYPd",
  "key14": "fbfyEQrpLE7K6ZVzgRmcJ1L8WXy5JJLjSD8Ajn11fiHayMnWBpkRYBnmJSa6csp22rDmcAaLWpyHHdto2U8jBbZ",
  "key15": "3Xfy88E9dPUp4BW1XdGvVqby7XNS3hZgxooCFgjDaV7vS2Wc6YDgiE9UtGfTeW8KEqhS3eB4YQpLN3wGnUhCEDrF",
  "key16": "48JaAgi2yCzCgWT821edV59kAco2cBEUB7V2sVNqB2adw9jvni6EkGxEXTFNoCk6ecw2wbhfQJQbwAacEf5VzL5D",
  "key17": "dVtbWHTiK4CChLr15ZBAQH6SccjNmeSyUpJW9KDkMjSAxK7yJrA4b2pt1AbWM1CREy4weYi3obN4LatswPqx3nW",
  "key18": "5VGk7q53vcK8YizcRFW7GGddSCD51qwoPbha9u1aPVsS5nethxA5CngzwXFdsbyoy4vLQDYFk4LSmFhFQKUKwmin",
  "key19": "3jXZcNFkqgJvWEqDfjdHHWm4dHudp91GmFnVeYLzBCkANryrLk9cf8KcCGkcpHUx8BF3bPrfYS8YkkLi3xRSkDGC",
  "key20": "2FTZRSQEBApTxhheQvqjV2AgmsnZdueVTLyrqP2STXjE9oCEb1p993vV3gJnW6ZWp45QB1R6cgAKCfvWXqtDmT1D",
  "key21": "2HMR7K65WchdijwLNbUKSnripngQkwmMKzTKASXXLePsAfUN7Jh7Z9WmAcn2KyShwru3pz1NTxKD3xdQHxiSWA2k",
  "key22": "sRwjUhvrwtjH9F73JcymbKC3fYZrB2y8tq2kSYZd8GZfhWozUf12PyQwLcRdGwzEiuX3QakZzrRkTUqjxtt92SU",
  "key23": "5xX6fuLZ7yzxo4nfMEdyHsz98Dsekn98b64veW4tNqfnSZ9NSrpRgQcghSgkFnRcrJXiN2iGdLf6HSJ9GS6zzDSH",
  "key24": "31uSKu6ipetFt6QbekTyR9iBz8QaiLa4vpuR9GS5CPPwmsWbAEEC4yMTt1VTsN2Kr9TdhWj9wakLNQbvuQpYjs84",
  "key25": "3kEtqfy2FkNXosrLxHqV5x7wQvMfuMSTbmf1tEVqYSUHT75Pqy5XTeLNXsL8tkW6Qf24PGAm7CuE2wZ1WzHGmrbN",
  "key26": "3tQP64vYyUoXfuQNtef6zNHqrVMeZML7h5tCFSMgLQg2BG89XfoVDJL6WMTwLH2vQtMNBhYebUVjcPhq8LMPT7iK",
  "key27": "4eCMtrNgHyX51qKGUsAJ1XgFq3kr4gNKWmt5eZWWkQEbHs7d2vdMkA4ZneZG1GmBCLWELQB5NZCSqfvSZKfwuoB",
  "key28": "3RvnFZSAfPWD5uTxuYd1Boski9ogLQuB3EAerP91hM7P1ka7fr4uxT3McUSK7VMSot5S1efAmjaScoADreoMZYhQ",
  "key29": "5ZynoUUzBWVjdUoewp1f5LZQXYcD6vKLHRZkcGLcUcubT614mxzouAk19j66PSXjVzEmg7cXTxBjjGDd6z1mfvsg",
  "key30": "5oJXc93ZRRjyTcaZaKAfBiyCA622an6FHrxbWVhkX64xoV4Ars3c5BaJhxjGUt6W32pF3oN95K74JLhMFKY79PU",
  "key31": "JxnqC6MCQyyXNhBLdGqg8Ak8urPgb4kGzuDD4KFkoVmPKVsrRUiTSTrWFTxRJxixMFH8NNZtQi4ydhBWtpgUzzX",
  "key32": "2Qvd77xhqW6e7QQHD7sdnAvHiWEC5nVBKT7rnDjQ8am4VZA6q7sWyKbifjHJcsYeDVQgAxhzS2uQq7fuhpd3ehZz",
  "key33": "2vGjJysx5ra5Q7yZxPXYCG8S8x46iXD5KXDpTVcdm1XzhHSYThFs2CtDy3wNeMwcz14fPqMWaULGbfA2keJ2PZj",
  "key34": "4yzPDKb9n24wQiz7zcs83HDBoWhSsroawzs5Rvkc3Bbu1L2fkRSz2frinsJJDNsHm99vbbsEPS9zfSgokQKK8EpS",
  "key35": "3yfiwmm4nvyodurxjNUgXSQMvvStSTo6jgUNFWe5JEPC1ub8Tvj6JNdMSEnW4Gpua6XWNVjDTHHffQGJ9egEnf9C",
  "key36": "67psq9aZPgLy1z2BA8HCv388ZnSrhH1LUoB8AS5rstKmXhS7J1fo7Vtn8A8tpTELfevcbKHCbCH1aCjXbnvCzQkx",
  "key37": "53qLMgJmY75BmspYRSeqY8zhad8jvtvRJVTV8mTxxSjSbFUz5BuJtU2sq4oHFF7G7aMNZETmhuJ5JKLaL4M7e22A",
  "key38": "3X1VQk15BP9fTLoZvZv7K8jVoyFCEmn4QkH35yvz9K9isvPnRhV9wFLaJGgHu8koTPEE5yYMgYdMkip1GusTZivq",
  "key39": "3Ha4qQ2xj2vN4Nwxqj7m4YY3q1vaTEdXMGKpPUjjtXVVB8QJV2MoVnmqbT4BHM2CRFLJV2wZvySCGhyCExCzt3G",
  "key40": "464NF1EWfZqjHpRb1YW5uhhVu5D3HDrMyqbs8WvmrVPrSpGVFtxaFo4WMXFHgXctQzCZLWi9g3HVVvoXCmzqTSm6",
  "key41": "5mN9CKqP3BUCw4zZzxDpXkuG2DPnJu3M4E6SeQZo6cduSoHXmTjybGdfqzRuKA2sVne5cFGwhB9aVyXYvqaHruHL",
  "key42": "BhzZAXfPCVmHPoEa3GPh9aZb9MLsWgdw7E2GX94yymkd9DPr2Nijqbwskuk7MRzEqe2fTbSPs41eRXJo4DFTb5t",
  "key43": "2kxnPTHDpjY8nzephasVq96wpdsA3ZE5PbXjCn3P37W8cHc1vzv8X1wgD2ExJxJ2mim4VcXbkx9wwXmhnBmkMYkm",
  "key44": "5NryoqZsdjpufAoVJ8o7TXgicmJy5LKet8pM4uUZv8qKpK5Vnzd1kxjs51K6UHvbSVNbdNQdfCSgBHu5dJRWeirM",
  "key45": "37kPfiQ22protBKND39iRUskJTTGoaJhWcPq7BYgeKdYSnvY5n4m1NxdVthA6h5CMm9B6NcVndvwHKXpTBHar2Z1",
  "key46": "koGBX5ycB2PDwuRBaw7dwuetUJJ9YUK28afWc9RQ5jcDFDcauGRLzJA9r3yZfNHt3Lm4Jo8XrPERpo2YRwzGfTY",
  "key47": "33zbvEpmTihzcApMwYz5vnSNyoeQKaVoTPbLWDgNqSCHZtT1iRkk6TZUSoMx3ZFPw4v5fhgLTmm8F9K9XgKLfgY7"
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
