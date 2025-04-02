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
    "5kmoZT79qPQ18FacGoboZ93kpwzceNbqRdUWk3NX6jvG34MpFaj2LC9ahzz2ZxQH8K5VP4vDJEC7CKJYK52Co6jU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qyNbzFk2Qphi7Azej7SobfSYG62XNnBLnjhphTfXXpkJfGETAjRjuwBQpyWUmovk8ZgkHptEsjNZzUe11ZTQnCo",
  "key1": "42Tb2xSCzcUifigsX9geJzhF6tnntGWTeHgKCse8hf4JjkYA4xeyEjgM8jumxEZ6Y9LjoL76S9GWSDE7pgXgwW53",
  "key2": "3eDC6BKMJExPnuQT7TMNcQvFiyL7ARAqCW6GR81y4vDMFrgodjushsKzQxktof3k14SGFe3gFWbVoQUC9JZvEesj",
  "key3": "3Uquzn6WvvSuvNsqgtLyFYDzL1odKYyHDwQi21YqocjJqyLY8bqJQ285MKGNAJ4sr2LgwgsQfKodTLcYwXUKbEf8",
  "key4": "5HH2GA4nnwo3nzxPRBo3rTsucaFwhtaxSCZb53qvJzhkz4JuDB5zjLRjMEtTFX3vFKA4mCP85ERU3quVyHMuPZ9r",
  "key5": "33JK3k98MiE3XjmZc8ErSnkPJ2nG7T3CD9nGYVmGrRCcJQsqVaBcLwEPmSGacK8Mrz4CfUuBiWjKCKTBQSixSih7",
  "key6": "3QMN6dRZR4kP2FY27yZH3z1Vu1HpQcixLTU2oYV4bsm7yjPd5WphJsJYfDDBPu5wjWZHvFAVeRMigVN5WCFaw6Jh",
  "key7": "53EsKSvbVyDdGzefvoyXPNnmnfaC4uafx1HMTNxEvHK5cpbjhoi79LN1j6TNcHfbfvDQ5CZ4wuGeYvHwTS9LnEda",
  "key8": "5SWXPX5CGSjpHBu28xrH1frRLpihwWi8qV9NUyx7HZ1ARfv9kxLrSfucn6Sus36F613Dfoj9LkE7wsP8BniZ8p8d",
  "key9": "52LYmiP4S6JDUx8oT2bQcLUTaqg5hFhoYVHQ6x7VDhSjkJtv3U1eY9Cxzb5mjEwEbNnTTAX5pCZ3tQHB5wjjUnrM",
  "key10": "2TqkTxdPBWapmg8ip8XXt8wzDMcXqcsv3yKMZgZgBUB7X4qAHLzAqp1sM4RV3sor7zjCzpyZa9sSgftFR1GP7WXc",
  "key11": "2ibJNaTd9af2wichwpDdgd9xn3Y5FzzeVvC7oDwhfBTYgfFV1inpqy7c4F3CGttcFzMJrUkrumAH7dXGgTLd8k12",
  "key12": "4NRsULDz3FPhfLB6VtSySdwZQYkRmKAqUN2Xiv6arFBLeyx8mvnecLQmwpxKdhUsAM4WPXG47QydUgEmKq3GCSXE",
  "key13": "49wbMb3Esf77odgvA5HaLpJztxUgP3V3SzSzACBjoRj5MFmc5FPYsRihiMYfSP2GdHUzb5C4zoskgngXgiDz2gQw",
  "key14": "57YXjkKAh3JqxogccwvnTV95LXHgk24dFowiM8ou3rtQTBLrwx3NWTXGrjza7VeTde9d9iRgCb9Eg29B8pYpeyJV",
  "key15": "4J9Haoh3xAzVxWvobe1UQSEdyuix1LYFSBf6V4KsCgqG4LpQ45yz9aEDYQjiAExoWCQV1ztmqHoZMdTbivexu98N",
  "key16": "5vyEaU2tivizhBiGcxn9YEcB1fxXEA8WVKPTTNpRCiY3SpX72fuo7neNFjxA7CVh5NsFAJ1RDwkwJC6V7rshxr5M",
  "key17": "41yf8CDAqHP92NKaMmXV6JyJYgNUe3TEvRiUCyWLgTHYfeD5EV9sSYWcbao4LvQpwQMX45yJHi4hbtKfDzZD82JJ",
  "key18": "5reowWKdxL7VKeuw6NBw6J3TnAg3uHUJjMFW9BvTYrkPxsC8nLj4F95RFZvHN8t6BcUJpf2Ywdoyxw6iHZyaCRoh",
  "key19": "4uySW97xBQoe5dPiTCAGBxwwjAWy7jXXc1R7PTRkkBLLwheTYHrospenPKEgiSnp2dSTZwPeC2XG975TyW4tSBfS",
  "key20": "4R1tXW6Ji7sQm5FihMyuehteSbTDASrNxS8ALuGLCVK1Vk8D3cXn1QCM6bLQDJftaWB5Jg9sDA9Y3QEvrpwyuiV3",
  "key21": "3SUHCMrdnfHmtqVxCLLERBYCtnzQmhLRTKuqnFhNRMWUT51GA7YjNRueHpzCMf3V6VJMV2DUpjt8eVeQ1Huz2jbB",
  "key22": "G9m1YnF7UDu7oTgBMjuVM8SJWFuwxmAojvdoHr9HT6VAohDH6PdqgQwVqXrA9u5b9VT2otc8x9iLrrBpxoomBqb",
  "key23": "5ALJKPBqriGAFmdtcFNHQSj7hR6tdw9z99mQrsM3H5SbEr1tkFk5okNxdNeDRNxqUGwf9QE8CSCkWLDqY9YwqB7d",
  "key24": "55MjGuDYzH1ZQVFVM1NyPFYoBuCj2iWV3jkwHTZRXyJmDBMs4c4q15AXZNY2csoEQ6i5GhuRJaCDLQ45uoY8hg2S",
  "key25": "5GS8eAitPfgFf2QsTrboTaw8wB68sgt3yz1Cez1EW8UTyK9FpTrXLr11e4p4QtzfPiKpngbZamrbbwPNzBBo3eFB",
  "key26": "662ru5yTEDLEM8XY11T4A5T5TFvNbTGd8DNmQLEWz7YiTPm5gQEAsEYGaAqtcA3PTsWfJNeWg4NNpJVzL9dTVkcN",
  "key27": "skjAA4xbcpVVMiEBEHoqWemASrYkM9pm8D4oAzUoLbLYoQMUBQEscabTbAGfExsyGKzrLX5q534cmQgHv4wQzPh",
  "key28": "rEkgCUgJ5oEzTMi9LV4x2SmoAs4xKQqCA9WmRQj6taDjyjkVzD3YvuitX3mp3jUkAXjRbSanBXtqTRxjus5xqvE",
  "key29": "2hunE7AA7vwuzNGRyzK56W4ciS9t3yJyEXWYP7JN4D2yw9JDDzK27L5rPJXzaD2q6TnHaVpN4mpgXwUBjQYifFg9",
  "key30": "62t1MA6zk2S8HPBRntu7NBZ196e9656PawS48S3HifQjY5W6HitawkzanX8R9DsissHn64JJUxKTSSPN1d461XwS",
  "key31": "3cCmPHnSmkLPyYQS7wdrcKFUnYsK4DYdypCR9XvVqnxvf7vH6oWcggUQK9R2Bskr9qMbVkvMxRMLUTxh1Tfq1Ls6",
  "key32": "5eCsM8rBG1vvYksqgWqSoxk7Z7Qa6Z1DnojHgMZUMGkmUDkmLoLkkc6B3kUubdTLknP6GyZvQuraRK5iGd9bNQpC",
  "key33": "2DuXnWawbCviWkmJgsmenEFdc9cWRHafcNBP56zuiNZkus5v8htkTaHw5CJEDMDdLYMkB7hwuTCa2V1qncuJCgCH"
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
