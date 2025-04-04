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
    "4ktSKVnRqLZh6rvzh9CMhJkpPtSknxTMSZC3jYDecca9dwJUg1TLsMVPhUnVqobjKL7orHtNVTMXCJtN5MPPouFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sA7rq8jZv1qgLw7hkg1pXRthtmT1o52bM3wPgntfG69HirKMstxsygkciaPzi9PSQoKiaM3rGL1gbGYTZoi98Sj",
  "key1": "4hYQc7sfWwzuvMdML5WqUFrc7B1YYkdcczrtFMKwRJkfWP1YQ1eicxLV9ZXRyPfz5uyq29ew6SERJkdVZVR1s19d",
  "key2": "w4uFunjcWEbJarQCxnVkDK6phvuCYgaLk6Pr7xmdRCdse8QYGomZbsMmTarwjS5uWt65zdt7vqMuxD2Lh9c27b9",
  "key3": "2y6frxXYK2zMi9qACtHQQwnTdq4jEv8spEPxLrE1Ay1QnxKXpWETKriatFRvfv2ZaWRgsrGEwnRZuyrEF7UVLN6Z",
  "key4": "2CFh3eo14qA8VLx9ncDR9a9vfsAQUcYVycwooiZT3JpQnGD4zFZe8voPWrj8z6Xrun5xNWwcDJW9UoioevULDW7a",
  "key5": "5YeeSEN7AvBFtFNPcPB5M8grMbDUxAv79jZjC2YMF97RZHEjwxzZGtmQVc3hN4exa25CXe72aQyGs73gb7fp9i4d",
  "key6": "33XWBxduKx84paunf97wbvZVsx31cPxbz9FAbU62tDQvFQrHEmwxNy7cr2RPJF1wkP15pTnwCp31z2fEiU8CzAZ1",
  "key7": "4jJ71tJs8RzfPGtbJgFtJpCf749kZex6LBwG8GqK2Co7KRZksAhnc8y1iBfQMjZyUDPseuZuPEZonhWxRCpw7DQ4",
  "key8": "3FHQMsiCkowDntEn8GKUn8UBAySM29JVsuoLquZRETmrSF3UDMPexUZuibKnYKCmpfteUKs1TNm5GzWu1UYE4rkg",
  "key9": "2XVwiRPCFC1zBvyDqL494fmHcptDtALe6AtSFfi8mRQap1Kt45nJk8y54sHMP2Qj4atecSkCt2UwAPMmXDvXGroS",
  "key10": "4nnsay7Mb4pC2yxUF2hv3Vb47t7mUxXnqoSBTyBS916xsuoYo7YBekYgogqrpTJZmYF9d2cVijymxFMDk3NM2TVr",
  "key11": "4Tmn9DDhrN1vkcGJv9zY1pBRK5BMtj585HA5foUm2cBRUMnrP8zfALC2uo4wguqEBHwYgBaX1ywzKEnMY3dwgA1K",
  "key12": "4tsMScuZH9dgwKNTaUMp8xUkvUngNX2WkXEkWqwrSz9LJQR68VKhBJ3uEQR83BTXM2QBdkF7bkDf5YxYLjRU7dL4",
  "key13": "rAMEVegqFP5yyh1YzDzdnBKKzoRmF2YMQjnVHaH4LvEeKua8MfmwfFn8xPZrxcGnFK4iTJsiQEv3cpQMcG5NoRt",
  "key14": "6557gRDzk915uexGtxXbTaNvyRYSk8nDxXFK9D1F3v6gTVB7zANuQXdhaXULSg2xxFDRSZekByaMj8mmGfoc13Vi",
  "key15": "44dJAmtXmBr3fddXbNkyz3F2QeF8JAAmT61FnXmep8VmG8EYW7Qv8b4sDcFKC3BczGxJWXr24sSN7RRgAeXkfKWh",
  "key16": "2G5tXfvkdooqmSdwtJFsTKtjWDsSj7XHQzqjRpCx4UsX6uA2dCab3ccDbnkEyJb3qw8V8mRRxVFwqQ4Ax4qnAPgh",
  "key17": "tdeePqHJi9yVjj8fk7TDVPshEBrBUYLe7kvY3nVXpuq3AY7U2We5EYELUSCJQyLRquZ6HW66HnRSzkNLwKbonqC",
  "key18": "bAheCVGrETq2N8shyVC9MmcyE5vmUYKHFzXJtM46MGz96nWSBXLLDHSeDJUnpq1MFKr7FXuhmRcBHs48A3yzSev",
  "key19": "iSvAQshthJpBeYKtg34kDR3VqR8K5jndRcSsfXeCk52YH1xGjsJ9gf5Lcoeeaw2ESuMW8Xnh7UFCpeC4269YXra",
  "key20": "NBi2c7P9EitwZx42Ko9SnEj9SzaKyfNM3LYHHSh8XvRHqt2WTX6mn8DZb7caQb7ub1gn1Aocvmmf9hiNvwwQCwu",
  "key21": "3AkhYUay8LE1uvmCmY6NH1nbCwuJ9HitX4yfsE3wdZKWz7dCrhyDXAAEjWWSBJsa2D3QkX31qtub7rhn67YHQxz6",
  "key22": "34XeKmd137iduxxxejwT9S2suBeyJ9PBYYTN8xHUZiJwfkE7xae7GACJHhnP7tG7t5r4oXYG52XnMzkpWLAgLatF",
  "key23": "35Ed5Jjg8b3PNAjUsihWhb3HZbxCkoAVySwMpjewYNbwNHg8e8FwYttDw9DsH1TCASdmxJNHNMfbyYh7XH7AwTub",
  "key24": "3VJPNbusL4zqEvcRPP8hEJzaue7GJDo7udghZFKidfPRGnxYrtjxc2yfor6F3Jak1hgqNweN9JmrANdJDCRbsqtf",
  "key25": "4PTw3yrMsjGiMckRXEmSimDWPEkzdivoj9z1yLMPqYkGfhVKEM7yqb3iXrpzucC6zfHcNLU7PxwabJp32887jo1p",
  "key26": "5XumBGXjbwaDosgRwUZJumHwXBjsnAmMzgvZJio3gQ6qGhLU3LGmZHWyNbKnvknaf3PLjUzHXe8A3CVUxzgkK5bq",
  "key27": "66Hb6dZaM93Wy6sfbrA9g8v4wzsc527RFHH9hLk37z9Kxd9f1yNdqPQwPBgjq3npFk29WRwGHyMWMmkfSF2BvQrP",
  "key28": "5Pg4YteCeuS3KXaeP5LZQ2URK6NeSJQgokqLqNSDiDz1rTXH2VJqSMEm5GLm13GpDCsqg4RXnaRrd4HhNVySd4kc",
  "key29": "3jJsMqJgi7fgJYBykAeDtWgwQH4us2X7D1gfU8kcCfjfzDFdYA2WKV44erod2n61r2PdUvXA2bPJzmA8Wx4GT5TD",
  "key30": "4Xd6u4iwSwA3vHe5Zou63XKVqf6GMoBNXmSyZQNFGLy4QwsTsfM4PzWPESw2BcgYZSVAuHghdP6GoncT139rMshD",
  "key31": "4q1qhnK32oNEVCx73LWE8CosfLB5PixRbrT5kvsZnbn6onUTBvK6APr4gS1JYiWxuAkh6r62RBKKraxsMxL1LDAX",
  "key32": "3xYrPtTmHBTT98PDCB9LSkhD6MBYCbWmvr8EVo28DiuWbudYk4jj1etNHqDeZ2GoBdNG3Y76cAX5tk4h4XrdfLPR",
  "key33": "yyPftbmCpG3HSsjB4YZc42T6jEbU7tRVrKoMwwYTKDj3bs1WJxEfqFFV2oPkR7rZctMkxTeMGKturrR6kaBJXhS",
  "key34": "3qvTDzkpkpAyhoAv9JCZKHswcU5d1hbGKY81SqXnEK6WpkiuHbaR95jVXKSbxSXnHcDiDhzwj9tu5QvVXEodicAx",
  "key35": "5JpknKQJr4F4SLhSHmiVct8QirzJfnznUiAj6pYFQHbrYjpw94tsivY5TrwhKaTzHM7yNU9UeQjwkA1rUTsfMtSS",
  "key36": "2JEmG9jNH5nPswHrdxyDWaDAnUxem4TwV1JioKELauYRLbt1iMLCqDuZJAuWTaAVyq7H5rC9gh1DEKttmn2adxe6",
  "key37": "4Af84fN2S5bD6SykT6tNq7QH3XF7abzjis5DKGCwcTdqdhLi5dQwm6n1r95yEwhaZ3hzijWxvNtvYyqtcmKYWTei",
  "key38": "NGFniRHE3qfSjPXYf6Z3m9d8X1Hv4KtejFJfDcT3aJkBDwBT3154ctMATr4KqfPvMggBJ38QMYREKSYKHAHhPP9",
  "key39": "5XRJLcM8zAZUpUXDWE4DN76kyDCkAdwDCJj6sLWNKXLhbv7s6vGAQMaAQH5vxAbkBzxbpSbKZbfhGHezvZnnT1rL",
  "key40": "5qU9ofEKvudcyYCeauMzxzxfSUEddUDWdUy3qJ4fYzqvwmm9ToAbFqF7vmB9Gwgpz13boSMf3Wk8ETg6EsjRy122",
  "key41": "59UBdJS1mVKao8xbq6hXz3fhuUjbCVPeGC3K8bTALTvU6bmXAHSMUbxQVTCQmUp56thbVQ7p4eZb4Z4qqkRcgQwL"
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
