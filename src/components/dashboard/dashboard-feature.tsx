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
    "52uJKC8eJxemrhbxSyjQa5bZRGMSx6y9b9Mt41FXrKQutXvE96jRSed1D5jPQjmdef1XpfDYZKpwK4ThwLKGF74t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q31JgAWrdFWSDx5iQBEsXHvRK1NdSqGKnq1fYkzuLdf2Ca8sUWaeUHPGoXg7CtFHx5dg2Pn97qkkMMjzHW5oscq",
  "key1": "29g2Pa5smQ5Ed3RUedpbU6JF5gp9wj52S1NxLFe6i8Zf12UhomP4jBTwAX1vMfZ7VKBfYSowfcaSPAiTZrDZxptv",
  "key2": "2Hm2BHWFbHjfPxXURgHBYYGwEMHnqSELBHV1gUZRCPgGbEShKwYJ9TJL2yDGha2j74gQAG1nUR3D6SWHcu2U3u9n",
  "key3": "e8CwkAxpYxhBDYR7acYMPS33L5FUedqBfFYbo65LJTHNzjDvp2RCnoP1VQnAyiKp2W7gKoUZPB5eMn4extMRM1z",
  "key4": "3UHHT8FUiTbZXRz8WNaMYNT7F8Wi4MmGHXq1EtDVKYJyWJJRRsY2QbC1ueaCNBjT6szDfHUrCCvieMjLJHTvRQHm",
  "key5": "4qGUvn8gsbshQNpE54CYP8czGjhaQwo8xhzTEsh4nXcg18A3GYUYa2CywTeGeaFyeknrxmwWERMUMhqMuTbGzL6B",
  "key6": "3H2bwLMYZnmUNMWZpHiwyAgSuyCVp96yoh89yLtWhunKaUiAxrnS83Kh28CDUkDDynnvcmq628mGJxTZg81XUtGs",
  "key7": "4rJLa8tRkWst2yz8rpj4tCDGUoeautQwArKozzDxfgTJh4QjqyUvFsBJcR7QDJFM8Ust38hcWRKagFezZjKyj5kj",
  "key8": "5yhs4MMA7FkXj1pNRpdfeGEezCwtmSsd1KN3mQnmXogeJSayC5HN1C856DkJkEzsqyKfQTN7DYAzNsjNakBQRJkV",
  "key9": "2XyMsg5ztBGLqRzs5rZdhuSXq3NV3d9342TypoN2qLaH4o9sYx4zwSeo3qpdSRBJQJoKHStjmNFW7YsUUaMM9Ed8",
  "key10": "3W5i2PEXv3NF27m7KPeTuQbX9VjE1BAqzJfso1CmDP3tDA8gWY2oryMwqvrVXfyqzNwxKk5CbTihSvBzpiXRatvS",
  "key11": "363X3C6zj9sACs4FKRLnSuEEzmiXghnm6JLAuMv5qVbZGkmYQGeNZ7cgpDHcXfScrsVcdBY6FggdfTcECRkGNgwE",
  "key12": "2LuuMx9FFG2AMXaebkanTX5nsDH3f3TQppeh2hymtaAxJGGWvw7NKqE3SkoTMbpzamnRv7X6kG32BKQoFiNRdpCk",
  "key13": "4MEHenJvBKviLHwTy7HvmVTTRyHGsp2Yn8Lh7Yrxq27zxs8Pf8QNwV5dKwZVEjmJQwFxYDhkD3qR6io8cgLqJtr3",
  "key14": "3AKGyNYuaFNbx94vqRFqVYir4Xv4hcvXjzT4hH3oTeTRARcch6gBEjtofPBcYwdeXPqEbaKJgGtsJJihwzgU51xa",
  "key15": "4CySCacsWkdNrk4xAQ4GK41vw42ys92A7LeGVU1gc4cdFVytD1u4fJwfju4cBjatTd7yXNRdwXzSAxrLvQYbfooy",
  "key16": "3zVp49XtNysZdupRKfo94W6a5K3EWXQNLdXoMq11WutsfcC8wBhr4bs2F5CTM7uBpmhgRNUvzoCBiZsE3sf3Nf8B",
  "key17": "v2ewssUJC89Z1qbYiMH6S2TsikHMeqES47oVJMwDMjtSby7A2JGfpyrgwDf7F6bwHFzABpAxf3Kn9Bd4eR6FZUe",
  "key18": "3aMGABCjAgNH2Hf1gptJR28tYV7mfkMpJGxsGcZucVG8fdaSnQ8bb9y42iPdZF7PMDbw3LRUYDMenxyYMryRiW7d",
  "key19": "3QvNDzAYfMTregPr9rwrPjBqoyVfn5Ho2nND6eu9DdxpgMpZHLphwNwLfso3nvM9HrqiM7Gvsx3E9xUR5wFBERs4",
  "key20": "3q9XJLSfUJmBhXQcA3VATegnEeyshyCG9cm8Q1rXydry6Z7eNwy3oPzuWFi1qYZxwiSRP4VeoAAB21hbTUtZNoHQ",
  "key21": "37ddePAiBadQvTjvv28Waoiy7mhFywbHugXa2qS2fiqAeWg39qiWYa98ds7vEjYXNhRRCjUybTyomjsoDZw856kT",
  "key22": "4TtoFpA6Un24zxVzE7ET3iQGDh3DMfd3pG9vEPjhgS2kvYbZbwNmouymhETJhXTqAm3Qk6jXntfZ3Stkj6eLrf94",
  "key23": "3wfWLLHC2bqqXuqxp94Bqy7NuhfQMi8eJUSAVNcV18CfNT8PgupbTHwmT99iT5bjh2f2dXY4vQ2nS9aoFHXz77CG",
  "key24": "Wsdbjq2hpcXA7B7sj85eFKs9qSXZmDTfp8Wj1Urzw7jKcX5fH1oE2ggjfsVEz8Tc66GJ79WdfFAQpr7WursqPxX",
  "key25": "5TfHkaswupdT4y5bv5tVCeZRMDtVW6gKWCmcxzk472Z9K5uQJfgPvc8927gLhnauHosqvEMUxnhL9UuNjciLYSMd",
  "key26": "8JnFSsP4mFV9BkErumX1EQK2q9Vaf5sr8KaJ57ibVEWcciXt226uayrSuGcbSzk84Lw4PaFmuqfBEzmnKoViF4P",
  "key27": "5Zxct3nSr4YRMt2zoRriWSfzv7tnJTNdb9iFwQckvXAYq1o7GKyfcjzoZzLzeRJFsPE3kHAZgkG3XV8G8SJ2RTJg",
  "key28": "4J8La2Jfes3rTRJCmcU5aBALzy2Nrc6NwtG1rnhpJHKHWChxs6DqtSStA7mHmb54SkNgMSh2n7hqLKKxgKstXMuG",
  "key29": "3GYkRfsPwo1afYEt3j267BNSn9fRRbfzmrEQcMdV99icS9voLd4M7Sb8WXAtjN51D7Wv1njrwcqpTJZuJksAgzFf",
  "key30": "4i8xJMDDYf38LLqVkSdR4bi5DLFdjKWD4uuWKJCQQpdUBmL7Cj7q3ArXedQM2fFQtGdwYuBdBggQkTCfPYRp816K",
  "key31": "2wsBAGPXek5ErRxPovPEord7vEbRBHF5M4NJozWu3Xb6isFxe3LcWwnEmhBE3nq5svLF6pU3A34zaeZ3MQgdsx8o",
  "key32": "7R6FVxxfczDsokkMZUKmkRqZF625GMAUiAqnDufS4fG5D15AVYTaeE5XgbgP7r6QnjbFyv6Wt37SJnK87TwiEb3",
  "key33": "4p2unQVYgbVvTcXLbSGLEdYDDtbzwaCqP9yKb9BqwF421X4n9irQZS5gVqNnYV8twzLmVfAK4d1mj8xggHqKPP2L",
  "key34": "51FeJ3rL4V6NVe75j26pCce3D4rAEiNeSur1a8hbYW2piLdcTVxb9UzYjMjd977T5USGKaMKLASiqu5PBHkWcMyh",
  "key35": "5Ts6DktnoaMXHzyBsgC4UuPFgGBzfEmSuBBiEqNBCJJHya9sLeGyQksZLSv436tLBPM3jD4uCR2eJfbQRegLMBks",
  "key36": "3cE7Jc3r5DdBzfYAKHmT1WvKgFLiHMXUZAKp5MPmXRvxNtDcYjh6NseD4yzuphaPezkj9MrEUJTirV6xbx3EWQuB",
  "key37": "5LacEiF9zRvKnboxQdr9HjMfg4doT7gyqj2vZhaaYhUMh8TtqYwCETxYKBwnpXTjoRcvGCwAxjYXXbnYgynRXrnK",
  "key38": "2WkbgRfMLDZbbXh7qA3t3o3r8X5BbjHyX1wLcew6aMD5D84BtKuwXiDrcmTnrS5CHasW8jCDgzjuTz9thcMf5M5E",
  "key39": "2G7aUyfcKop4BWRxdyqMhJE5ewTQvCscdDzh7Nu48nNfNCchCtWHMkcdigFMp7ietoVR2RKMxZQy5tuQ1ce1JcRF",
  "key40": "2vu4RFE2qaq18netsjsfj4p18ebVktMewsVFmddfmGHAYY8fFdRohjChtwX3iDAUrC7goJPqPr37vCbFmV2veGyn",
  "key41": "3mkbnje32XQMvbh2p3Ns5eVDVT2FffsTGGNAJxdF8ARnjfjBbt89d2jk3KkFfK6HuyhJi3rJZLVvQDaEbcc5ZDif"
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
