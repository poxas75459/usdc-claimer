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
    "43NDWT9Po4hLg7cnwQxobhbnHXEL86ZpnWQb95ZUnXAheJbufL794UkEqgKov8teKreFvZ6EFgWPX7cHGbHjxa6z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v43aaJJeGQiGrbWoxwbuZMZvmJDGTqQppZpmfRS8YQ6G7A69MPGT3mwFMNgbxjge9adkFPg7DeCAL2gZPwbTjHf",
  "key1": "2dt6JnKordH2VNkjpBMZgXXxQjEqYEQ8eWrS5iW9Z1c88V3iam5GLEJoUGRGkpAEkL5c1PonujjytSS3XU1X9Xwh",
  "key2": "5HHQi198AHLHLystTsne99JEfc1LjyYThDPZrFqeCP5G17gBAk6jm7Ln4F49djaJ1ojGLha3DrH3K9YdLErnyxcQ",
  "key3": "55icVeWby7gNgK2UQwtrJBP8UtBMEi6rD6SEm1S14kKeTzNbnKKjQw4wv6e4KF9Tzzap52XLxuniQHcmrcmsXKMQ",
  "key4": "5XbYt1uc9S2kqDJrQyhA6RyqNz1yjwQ1gYJDbYiMUkwx3UP1XRhoCBV2Jq5cHJ9y3BfsGJoGFDqtJALVQEzoGfMq",
  "key5": "2k6zZp6xyw42fo7MfoLbYscfA3WPducGmDCVbegFhPi8sAKCUxCb5CRHxaRTEgVEAXBBA83TehnSxnPWv7giiu1Q",
  "key6": "3KUV7kLozsbcMNCAFRkeqtRiGGFSpXdKTi8aXtgsNTv6mfxVHySUS2WnSw3EZghPYjTvPjTSEWjevA8koKuFwGd3",
  "key7": "8BSdELtiqX3WgZp1cUm7VcnWnVWs8fU8nSRiWqywiVjWPYYkoDor88tu8xUXDHXEDoRFKeeFt913EoDZUF9KMu9",
  "key8": "3vW4eW7LiqmKNZDuwUHoQwYTBSxidznPwuk4UcipiWex7kmNWMk8WKNbd2ke8oVYyzXHtogsShTfEiARwgx2ccBB",
  "key9": "NmUKWZ95pCT1oSW5Z3TR1XfHkLkHGMR2bunv4wqZ9Xm9FrMnQQD9U939v8cgJXP1LhfyjK2NvZBD1WC81K7Yi7u",
  "key10": "4nfxJe9JoLdc8A1H4bqPmF2bKrj8t6jEVpxWkM2gsKBhZQT32pfJm8pdKH7YhBJTjotAL3wekjtmEfzJxF6hybRM",
  "key11": "4BNnTBPL297RaSvacYpSsQBpUPELEMBQTM3JSoSZ9xEhKbXXwVYvDjgKvKY7LYBYPi3AHhWLJ3h4XQqgYUdVRvBd",
  "key12": "48fPUdneWnYVn4gjN9npQETVK5sbQSWkGcSHPUh4oVtoVCJctCPktj14Cbtk73CCsETHW5m1SA4fkNTV1N6YoaCo",
  "key13": "5pPm6HVTBhz3yGwB2a6tSmnBLFJvtEi4o2i2BvLRf9JusGFsQAbAaWSYSCfBhst65iTXZg4DpxJ3MBNuDVog7Vsv",
  "key14": "5rP5xN15g3HdpdLsRywiTWMiqHg1WHj1t9vU4RqkKzFKw1bDpogMtbkBittwHdmCPF1uzFMdDAkNDqLAGnDiAAvK",
  "key15": "3f9ZwzCULvAYb6iJ4BGbFTkrCEfqFwwhzLZ7VU4FcZJ2FXWAr6AcU35vAbQBonnk2wnNTX8zKmVtsXipeZxqnRd9",
  "key16": "2Rr9sT1SRgMhqrN24EvQt3EC2RPtKvAyC4yXcrnmresQNs9q6UALCpugstRpdQBEDs7gbgWetX9a8QmiyZ7tDLWi",
  "key17": "4yqCd9ZPqQZhmdz9USLBBnQM9uaoJXcbett6bgVh3VB3gtwX9imR4k65riXNBXR76CLhYMakRHoCRytvxJ3Lk2k9",
  "key18": "5BDLfm6KKiqGKKYSAAA4yJscmBD69w1uaG7rd3acjcb84qza9U3bq3fFWHgKt5rbfuVBEink61M8RdkdwyMR5AaH",
  "key19": "5mqXS5iWnCH9f61t4iY6QfnHbjeKLHRtYixNYZuhM8FzfUxVYfEUegWfQ5UDyvMAtNLFoLFdjRY4rdHz6tLcjm8U",
  "key20": "5a8Nx76FFBiuLwDr2hc8ymAfmkCTLfFYjg2PXLT7Pkx95uy5u7azEX145qmcP4wnbKVz11C38NBdL7ugUDi3yJ8H",
  "key21": "2rxCgoLxMztjG8R43wjFLqPW2wbdi7nJZdfM1bHvPGYpLMG78d7diqHvDUDUga9jcEcRw3P4uoWo321kWqTm48Zi",
  "key22": "3Sz6dmBWYsgGt9VEK2d3Y2S3M25vy3mFipoxKr78AyYUsjfZKGF27qFuBhu7oevPBDGj9W77rAV2TGvRWmfxz3vt",
  "key23": "4eMb83ZTUpfgm7jVor9xmkpqm3UfoTA62Afu4JDyBdgPViS5RtKgE5upTumB6VJx7EnshwkRygNGB4FwbGrHYtAY",
  "key24": "48juQs8Aypx58tJdXPjcTQMAoGAk2ut6pQ518tHuSZzhZ2CBHozoibnuHKo5mvRJiAh24nwYdNL3y9pETuiG7nXy",
  "key25": "Q1aKsaMmJytS2vMsaaTuh6mAFYvBgyktpAYegtTrpJiAcWZNisfZhNBXsVVKEdtByVHf8iwpkdcDcU3ebdZMUYL",
  "key26": "3CNtkwKfgbVcQpeCN4JaSnzSp8cAUDLrQ9e37AnrwRuyi5ivs8aiAgWQr66g25rwPe9ekNspMc1kimwAdcN2FPVC",
  "key27": "2QRjaimikt7nB7pzSVKtEjsEeyP1mjLwTGmGByCzXqaxRE5RyNzt7E42mPx1gHFUQnuzxTPG82kt2d7MBNyjZgut",
  "key28": "4xfS6XPx4NqjFP8PCRZijWzzWTjwET8bfXJLf42gLzr2r3eyJq9w88Qun67eKma5jkVESm5VSQRJMqp2BNKxPCLQ",
  "key29": "5Xh4HcmkdkD5aBHR1Yh7UBhJcoLq8SYgAa2KQvijPes6jV5nfJSKFxzfqG1v1f26aM55E1LFEexZb9sqWPgNPAR7",
  "key30": "H4UvxwYoWK69vXewniUAoujmZbUFoyu3rKn15aDYAwQAnY1VNfQmpoD2WFEgSAD1RPpMWEn9CXcNti6TyungiZ3",
  "key31": "67HmQe9xBh44XvwYkQgzLYYi8BRcJXptF7s8QYJRWZsfEJvDHNhTMKjAgMnZaUViMMAngyrHQkQW8EXEJPBinKap",
  "key32": "3T6Ehec93AbSAnUW7hSGyDWcuZedr1LXR7Bfc52UhUK3qmd473PRWKksktTASqn2XNTMGtACk7GF3zxmVYqzxwh5",
  "key33": "3rWeBL8NHaG5WsvKj1vaq1DskQdNxZGMjV1ToZgVpbSb9oELFQpCo3umdL3crUZGj5KuGpNKNG1ht9RB6C61bnPQ",
  "key34": "5tCHyAhstyauMJnm8Rc2HVqxwXwD4M83t7Jhja9kax6HcBP42jQKQtc5VF2Z8yxECKKE72ajRukCjF8Hqh8w1CxJ",
  "key35": "27WHLtbThGVyAK2jMvZsyuCWCoSf7wfN2X9X3fpjgcgkq5s72YmvLs6VdPav6J3YsDv1gpEuK3EEwpMGSKtMYgg4",
  "key36": "2qg1wQWaCDcmDpJtuE6imRKPeEBNrTLqkwiT32WS1Qp2ydxvfUMnNqBbNMmSkHpXGmKYoYbENACrmLTnW8zwgM1b",
  "key37": "5AesPqbvH4hzTgm8B3hFahRzmaRj3KRP5oRUVTKAioWm4xFaFrJWDULBRoN4KuUTWbUVuBugefUVzLjbyN97n82Y",
  "key38": "3f5CJuBdtuHjGvgum1A5jjfXYYunRonceUqmE5DM6jH3e9ANccrF7SxVf59ZHXimRv2ipct4kYcV8grqouMk9GgD",
  "key39": "5gWvduphu3BrX9pw5D4v4ZnQpvvFZoeN2zfLc4xQoH6wxGv1agNm23p5AoZGUrtbngvPfmCSLcQhUGPthgHqSn4y",
  "key40": "3GMfr8mjroPbxrTMins832CaMg7DsWGcptE3sf8gLBfkt7uV1Md38Cz87Ca7m87c1z9MKekZvTncSqHSiwNkqcZs",
  "key41": "3EubR6EPaTrLzDjHriXnjXdnBBXmcWabFKebk2upaLuPbGnow9tW3EDrTUpg1X4bRYZpwmw9YZgVCMJ3sGQsdb7n"
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
