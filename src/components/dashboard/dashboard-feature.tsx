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
    "3B8fCoxTzpV5qjkVAKkFTg8wF6hqheuarqxBsvDHgJyEgMEHnWEnesU6LKbGUmxLq8q1gLMjHySAP8jz9VD93s1o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RCqqiG6wfWCMzaT5ow76qFYJsbPhMEJSrfCD7HC41MGzJzuqno2HQQ7PdEDDguejPaZQG9hhaWoSF8TEno4iGg6",
  "key1": "62GGcTaYkauVVdtGL55M2n3woMWKZgMkWoxmcDkpHTF6nXPt3eW4RV722aqTugXxBy3LAcQJgXbvyTP2Xs2eVEi3",
  "key2": "Hgmc284xSdaKdATYfU3rAsWHsrqvvZmeMerw1Khe36YSi4B2e15BcRyivYhDs28AegoRwMzuDMgPwAjbiqaahFS",
  "key3": "45wp7pACYUDSRkHSWNabiHPjQykgry3oq35jKu3gr7f1bzVXgHrzg51canzfBubmyeJp71NpB8KFyoUWBwYkcWWe",
  "key4": "4d5jawqYyVWxCpD8VNWropyLmXCt8itKXoTwPMh1C2NF9zdVVka3E86jgzvLv3HMz92kMHBVnRJXLpc6onFm1HoP",
  "key5": "5C4XuqvPJUmfHApdWPhAk8gJo5aEhnTP7a7BLyrfzBgRrHzZMujkuAKzietUx4tpkGJh6qVgiN15wy2uuEwiVuQR",
  "key6": "3bBSnpCxN97BsG78PjbjT6LbXqZkL6qjNiDKBWCCZ5JoBBZqYx1rQTNWatSiYriE8hbrmtjWpq7DuYdWfcTqvwWr",
  "key7": "5agUTMdjbb7UUJVhR7StRUXUi3xag2gw4awvkrXMSceHBUQvteXeXry5zUQdzd3cnsriJhaXc83Jd37LkHmdFTXF",
  "key8": "3KJHXDf6H4jNmDRz4F73dd7j8yJusdVaHyYfsqtHd4VAQa9E8MZyRQxbvBpnfmbXHhGHYnDVta1AqcbGnthBnqRt",
  "key9": "4Svw5EFgpQrDh9BzyfjMYfLfYYko31HgyicxSyTBPdDAL7rhW9FiFrJZXa73ivrqARfHDK5CJ32iQYC6oqtqSW8V",
  "key10": "4yczGaySjcGi9FHi1rEYNTzFXijXhwB4VvznKujMFDAnh83dDgN74SvjcVEon2NHjqUywSt5PafcMRjXt8QSmCn3",
  "key11": "4w6UbK5dZjFKDEWdCvxeu5Q1c98LXpRc9LMUc8RC5QX2FWCyoBYvhKvjotWh8mRyaVssofz6CWP1aK3BRnovVnKA",
  "key12": "MBxcu1MEaibbqRT4cP4KXLVy8rY2Nb8wtR2XScwuNhuo66XWjXAVKpmnMDRVLSkwTQ8rVJEGcvepzMvCdfBHFib",
  "key13": "SgV4TZARozuHDNQeVfz7CANvAusgSkLM1EJ6hLiYgVvXcxsysfiLFHjLZvLiJmDT7yLj12633CBF4V75nUoyVsV",
  "key14": "5AY6xsiYWeYH6nvG4hourwhkYy7fMpohf6UFS3UYBPgnDzzF4tM8GUXak3aBbqPSpS4uVi6sCsNqLmJ3i5kfRu3r",
  "key15": "56LCY2f6ikRGKW2ESDLuR4fJs7a9mD6QnStPfbBpWPFWnviP26D4WMQSCnW5XLFa73FfLFRTBx4hwqwKmE8CVQ7K",
  "key16": "2qoNAGvKXeysmvY96ZMpWwYkxyABwCyHC2Wh35epKphT9vrD2NyZweosho1ZUJv78DtVTsMRG4PjmbHy4AWHWejw",
  "key17": "3zvWo64sxvrorw697VfW3PpEDJEEysC4d9GZfwLN7yz7QYzjunDTxS5c9zvQxyYzGXf28o3YckNofZRQd6ZJqe9n",
  "key18": "3EX1e6vcbUFLm81iV18y8yoDcH9cuKxsToCfqhdLqVkvS73SjqBc5jEXqAMCsyfCJZeSaR623jopvPjpcagEnin6",
  "key19": "5iMphBR6UJ5B9TRCXvpjyLBWtoYBxGE6353jSAy3js4DjGkJuPbk9ZxSCjmEPAEuW8hRqEv4GtCqiFLV2xvNc5wA",
  "key20": "4x13QaeQfknCVAnttEFNi8pSHG3qw8BdzfdbNvcrrryyfABwH67KVsyC4AoYdMgFC434PztC48PKhsA4R4TNxbe2",
  "key21": "5RZciUps7c3L25XGVi5TSEbsWTn1y9TJUcVBS8W3AL99mhgpi15TY6Axvku6Sj7m3etggJkmxvuSVHZPDgiGJbWw",
  "key22": "ckkGXwdBpPPAJuh65arjeeqay3UqvBpUcCwD9CZBTks2gbbXR11AxMoQJC5ugXuGZaHtm3qXDV6PqZX2VN4FMpo",
  "key23": "5a73NorFybYP9G5o1KG8Nm6t9icAAjHAgf9edjAp2NFpxUEfq4wgP15xoQiAyTA3eHLJXhdUrGDC4h6AaGQMin6r",
  "key24": "3UkPtHtkcp8itBzdrq6oYX8Q1keq9dH78dVLmAgXC7LETMr4N3ymCbbfQzG2imLDka6hEs9NM4kqCH4vBJ5RWPWK",
  "key25": "3HAG6X1MtTowWc8ycWjPEdJ9s5c3xLu3d1xmPRT6nHcJvQj7poAcJ5jaU4p1kAyi4nFJEKFrZh1ZMmMkuXC9kFbn",
  "key26": "3jAhTxqT1fQy36NxThShXwKZMAXvMvuQxVMq71hwe469XbNw4w3XaE6M8Rkm4EJHCTJ4Hh1hc6opzaqMwGeM485i",
  "key27": "4ER1TZXtCtcX7kJEJu69RmuQxNUo8HwP6BAyKQdi3iQjC3nYy5AbXQebLCBmpud9yeCCJ1JdznodsXh4nEhbGpf4",
  "key28": "5q3FVSTCqC3YaGx7vmEesJEbKdgig3f3fwQuHvKYJBk9MLejM2qJymgRaidS8zcRcS4EZKU5VdaenowCV8f54R9n",
  "key29": "aUtasvfYSgFA2etAsFkQ1GrxDWTpT7sMT8DXLMZgZKmiLJwmN1AmMWLsB5iHT8AYBa8froVnL6WnPmjo46CFZpY",
  "key30": "3phhVctjKB8ftnSidQXRhkYW9rgC9daEoUzqRahQLTRZDm6kGqT9diM6nUwjQ58x3cPBNTSED8MXVsYGaGu7QfZT",
  "key31": "563AvvrNDRiQThSPzPLtzapsfvgwbgNg78hSwV71Ktq7QobrDDsBAHxZqptYKFjMqrLSedYKSi8TAJ5o1pr72YgC",
  "key32": "4eTtFu8LtAR92Wuyr5GyXHCeQGihnBDm74o3jJfNLrFwQcyrLPr9rLg5PLp1ZFDSAv5jVXYgJQDF4uBbLWjUq9cU",
  "key33": "gnap7UBpBmEMrVxXKEqHEmXx9fhmoqcSHV3cwB7rmpZTsaS8tCH44jNVQT5AAMghzYus3ZhjMAFz9eBwh4xNiYs",
  "key34": "64MwwobAeTysohEHmLtz7j8fhNB5Ccwhah3yUvmH9vVQio8AbQEBjcPJZ7XrzYgAHyaE63LD8GS638EaFJ5vMAvh",
  "key35": "8jwfnUC69ZveK3H1R1Wzz8JsWpsVGYpTFEgc5q2raFW2kbkcZ2mL3PMYFBiEr9xt1s4EnekZdXM599zWdaD6u9q",
  "key36": "4F8jJQBqeyGDKMvFj4yRY4d9ZC6Y9fEqqg65kF9eSnNrqRg6JqhsFzZQ2FyXGebMEVA6nWbvetm7tsyy8aLkpqH3",
  "key37": "5nTGFaQkDfLFKZudMJUSq8Bsqo4yTqgeqhm2ygHvJJtTgvsdAnxeQtjT99pP9haMPuVeUKEQV8NqkxToZUKKApLQ",
  "key38": "2u41dvkoCQfRZbgPeWXdYAVRL6tyRemqkC5kM7xDVxVGgwBswUtDeXHBTpTKQPC1Hto4o63yduu2RoneqCiTsbpd",
  "key39": "5fPL7PYErBR2rBoA5taC5TP2cJH31T44wXEuPYYcQP7XkJTv5JcPWrBf1rxmcFL8WHuqeSFqoYjPD25VpPW2HnPS",
  "key40": "2u1xVstSdbkH34fqj72KRM7xH8krsCwQUGcWuyii4ndGnumpUKbDJ4hXSfkZGb2zbLjCf1qMrgF21WHZNn6HFcKk",
  "key41": "2irPYvXohVb8bsR1mj19Bp6CJSLjL5A6449cCUkWsDEgim56FXN9zahBN3CSVJVjrWhKYxDnVuoyg8c3prDCB24A",
  "key42": "4tQo4J76RSjjpW4HoRGi9SbqENrZK6ZdeS5YZoQhrrxz6t5FaL3iDgb5RVshdHBNapPpdqxVJ2XAzWZbufEYWYV5",
  "key43": "4m5nuCPDEa1cyqsQ3QPEpmvHXyzfbZgHVo5Jn9pzUmhZyweRB5PohotFij1kfbbQRjAnVy1yJHhtibuZRA7493CF",
  "key44": "2HRtbdBitFrdECLvF2CAW3XtfgcekvyAVH18FCYZpXekWUTMWmKt3juaWpJY7pkmc9RjxC1TDC9ptq2xixQ5Cu2U",
  "key45": "5wfHhbCQSkqXLsMY1wae6wFfFzkNuW5UU8gXJgQQPCN48P662eZpbqHgnd5q2erw3kWFcfpBSCnb8ZdoW13S4yx2"
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
