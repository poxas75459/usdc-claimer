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
    "2v3BHnfVwuJWdUF6oZwSWc1VMnZptrBgaqnjH7JQvGsSK1FsFw21QrF7Fwn6FXXNfcLZtJ86fVX5aMdwZ1YwiP5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t4jC6Bso1sMNCG1mWz8JMKnKjyVFopMuQo1DyeZ4RAay5Ai31tGdKjNfWbXm9LWqjKWXEZHBRNAQ6CWUq8gEokq",
  "key1": "3B9NHJZC4PtSunvhaBEdUWUBDWsfSxTon1NH4N5nF5B99oMAmrEkKTGztJVnT3uCeceRiLU9J5TumtGxFn4g4Fp5",
  "key2": "4HycNumZPNsV36hFdd69qhuWEEZPCQJDyFSkLNZvQMnCNgkjRDKXnGmXUJCTLfJ9ERSnXPqCe3HtyUHmcRUezfUe",
  "key3": "4nubZRY2rEXa8XsKAPQVr3rrzUgakTPkyLnnYZfJut4qkgntjZZXJDBAD7PBcCjfutVfuuBUbnBUAR3k9xrdMG4x",
  "key4": "651Piqo49PxxMY65h7NgnhEYLDP57YfEbv9jzBq5j4aTJRU9wY8zw3JhN4y3Q7pdewuksKLu61NPRuGnPdE28jSV",
  "key5": "4oz44dvBC2MHtvBbPvg4DbbwyEpjK7HYLBMW1btvfizQxffshwxAdPnjbNQmXbjEhjQ74H4doKe2P2zf2aHA9jGW",
  "key6": "3w76BJmk9qQX2jqyKBCWXZy9EsbCEjKyBh8r3zwucT4nEbaLhiAgUqyvYDBcZmQXdc54ANGHXydyW3DgQSPJfQuA",
  "key7": "2bqytuJmL4ZbhANn55Kf29x1mU7W8K7pocBHFam83YDmtZ8YQb1jdCorSQstnEb8Nfq1pudMFPtTnJ64347L4Kvd",
  "key8": "3orHQjDDSRRk5uWrqpKocMUG2b4qYKHFU9jXTPaMLiHiQu9ec1qY1uLunYjWYJJhj3QGRonYmZheaR9vyMEK4mxb",
  "key9": "VvUKoexUGLPAPzCZJN1DeQ2hsCuGsDzHz7SjHjtNign2fwh7xw62qcW1xciuEgmcaWxSWVfRgMjaiehjxv4p3Db",
  "key10": "3zZx9yTXePSqpEW91BPEAPRdLLfu9C6BHNtgPBDApqHfWtr7y3vPfxgtAW8Cb27ixZEQzQarcZAu5qPoa7UXHj3b",
  "key11": "4CyowqfUrcSfBnuMKa9mG6jeg3rwVmNxAa8qx5azcKudGwXTv2kMypPyPKcQwVBEGmWJaHPgdAwD93NPuhrA62aV",
  "key12": "4rvYuF9GtNKzVfV3467VE6zysdYJcTPMW4t7TjWSNNa66PvuT8ZJgJJpLXxEotLYwdUzcqs87yreTNR2TimDE721",
  "key13": "528vE8xSx1GDKZFrsXU29ijdi735wEtppXsxx5MU3mnCegTpX37GVQtHwaFWiHZrZp1w9H5JjB1FejfQhLAy4VUg",
  "key14": "4W3nnjiQdtF9wdJY1kdKpuzBm3o1KiEteoPjGutCcUwCvzMgFQCNyPutcyTAZNwC4ogizYNbaCi7bqDpBFaPc7Bb",
  "key15": "VAAfo2YVAWExifgT3P2qFQrMA9Wr9TZWijMLYFLvsTvpuSq3gLtq2nJbkspWdQ1Nk1zmWKmttWtzgMn7jjcDrZz",
  "key16": "3vHq491esCbFY3ek87akhN9Vwqfa7DHQK4QL5VUKK8Kf55cLnurJyoBTwcUbdLHUFK6mNBBv5FKTR9AKQtxgdwjG",
  "key17": "5rTjnDfcDjMHeweMp4hmijsMDaJ4ygfQjVT72ZNdaRxw9TxoZDYxUbJngwHTGLjyQ7AawK86mxsVZnmas5thsXFg",
  "key18": "2B4VywpUTn9xo9e92fnKwVc32KXTuzTStYifAULg2NmYve8v1DofTgBeFwiGCxxggG6b63PuWbsRXfMskks7rj6S",
  "key19": "3sujm86As7KhoXmSN7nvEGB4PA7f7x5eHo4Jb2VC6oaGRgS3Z75x3J9S7vqefP9vHPKJR4Zi5QY1uzGpEgvRCRLU",
  "key20": "3nzdeyinUBT7zxSpdA2A1pv8NR9bBoq76FJ1eXqJwCDuAzsZ9w77m7EjLtPJEcWn15pm1hLyY9fvX8Rhpf5HogMf",
  "key21": "4aDjzYc4j9gG7Vft1ozbXrhSoBNmdQR428q2EM1bTYBxFiYo2KDb2ciK5278v8PFBt6RVRAyTvUgenh9mYRL7DGs",
  "key22": "2xYqbT5rQz1WVXG5pjfdGswJbkc19ixQoX2rx8iRqW6pHai3Q3tEBFc9YKRkdL3CG6C11rQtTdLyyFTm5NSextJg",
  "key23": "5VA98mqVvvf5vQZqM54zSN1sVT4JgFhhFDH4FdN7X2s7mpUmtBKT9QmqwVSGde4C621E7jc965kQpnK9wFCwirmq",
  "key24": "dGjqwnJKXAAyrxXs98C5jXt68uhRmgQhiLdzSW5fseidnnA7Vm7Bqax4a7nb415Sg2gjXJrcw2bQyztDk87V6rG",
  "key25": "367Ni3t5wvrrESoMUQ6Nr6u1PPEkcqKPShhcAVs6wDtAHvXwRkG9BjJFj6EHHoptvvpUwinDzSW6u9JSc3w2EXcL",
  "key26": "M7YeSDRNnhwt2w2QU17Y4GqQP3K9hQouuiEsFDKZeRrWUQbwFgWeYJjzctJWtnDkSrM89c3hgM7j5SrVtkpqhH3",
  "key27": "3zXXtmwSR56jnpUqGJm6YPBDJ5vBpD1i6MK6LjMt1NXKA7iHkuNgTBpLKXNzDoiD2Mg7pjfFhwhRaePjZnkY9n53",
  "key28": "a9f2gaSrXkHv6WYzMrPK6YPNKFUHDrUTUiS3bKdRWjQogHSsYkZXniCyYm6YDhaEo2zziDbCKtd2xdnA2D6dkCB",
  "key29": "3GyEyFPe1Pq8isawRnQsHYbLvaEsxHvvHaC3W3AgwzXchvifrFmUURBePAeS2R8THED71M5SBeDeEZVLfUPdKFsE",
  "key30": "4ry9NUmaif9qfp2HwpBZejLyvHpLXA13Gj292VvCQpnrzHJ8a5aEhF6JpSTc6K5DJ2VLvJzKk3KUS821kcVhXPSC",
  "key31": "4a5ZM73KkNDMk6Cq4KXTQHtgrLbqeeMVyaGNZNvEvyNAHVmd66CVDgtN15GEgezZhKqFSo47B4kUZzqf2UkQRKTz",
  "key32": "55u3FjL4KwrrqS9uQtTYTevwCWrNuUvna4BJm8Ca2aYJVTfJwNLWhvz48RfKVpGAwHoesKUYde6pHsCdtZHUJhvP",
  "key33": "5HhykqgdbjPEtTMho7wg69ymLZRdCv3sNArBmWyFp1PHxz2g8UmfuCsfpYE5fCqiijb47G4UMdERjSrFeSjLsXhi",
  "key34": "3YGm8NXHUaqVaC4mbKhCdAWkHHrenLk8shsEXxAidW1Ts6hRzgmbCZja3L9XpMzDE4dsDtUQRUQn8YpeXe7Um9AG",
  "key35": "2vw3WNsUNe7agKgjamuidTTQJsUVLvULy8PWDcBHFHj3EzQwuuoZYztuvVgRAbkEbKumtVcW4gmYVQevUrQyjVYy"
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
