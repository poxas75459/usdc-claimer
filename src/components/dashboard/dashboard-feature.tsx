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
    "2ggk2PtARTwemgpz2pirqji59vABoMarDdmtKXC2z74iBNbN8cDw2XsdMeu49fVaYV8UxwZ3MMt2h8w2y7TBtBXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BZaMza5SW7W44NTYQvj6S74E7GsKj8dm5ZwS5DH6PWY4voGXihTwJCS4qhGsBokpK3snwWV8xAf5RpUMrPVg73o",
  "key1": "3WJuDnXutgiQa8Le3J4KEvGCfXfUFie8Krw85Zn5K53jFTzdtes9SASWNEXAxT9mkovaJcB9Y3JvHUyvHyqWbFLv",
  "key2": "44UKZ5kDgedX4Mf7cF8wrYnmyQen5rxmdPtpc2GBx2SmqzKTet7TgwP2ZvFeCVVjCGMrhQspKh5nZaxVdvQrZZNj",
  "key3": "52gVPFvnvWNTxxAR6KWQBKPmNSXnuwjjDpXhJj4uBdX3Hhec5opt1mbJbQ3g8iJ5fDEBfJioDxU8nCB8A2UWVyh6",
  "key4": "4fYbp1GqqWs5ZGFsJbps3WYRzEFykaYPKn55NzyqbribiXaWH5jb275GUAEX7pvFkheHnuUaDf2ca2mhKkZbZ5xW",
  "key5": "3i7D8qty6fNyTrPbA53E2SyeTK9erPtrVZEJSgdAGbgLid3w2GzVAbxY53iY64iPvX2qFKPVUg11PNRQ9A2h2Lyk",
  "key6": "4Y9m7cus1yGNSAoAFhjniywzqZkkZ8yxtfMVfcc6PMwLGoRLY8Ct2fDhMAVBtm5CW3NKhCTRDT2LGvPpyeHRt4NS",
  "key7": "2sWvu2fVmVeQc7DfJzG8tLqwWJbAqxeGGU7ES19WgKasXuvb2rEDuaBDD48XtATYoyfgKBMktL9NSTviEGhtKgvr",
  "key8": "5jaKgFyPg2dEDgtPCCvaXaPumQcttxpDVQZknEKbf1wMFF9QHrCx92FB9Ra5VUxmyCV95xg4uwRovwHV2H9oHyLs",
  "key9": "54PgAHofzfnFBH2F5cgrA5yyViWEDNaLJpTLViNphDUzmrWbzyQyx7Wvm3mpKCW9KZbVohpcHJFBgR71xxzbaRzu",
  "key10": "2JaF6xJAeaDwnmwcN6xeeug25UG5zA76MiYx9zfqbVHfF9LBzGwh5FHMtKQXbTk4KjSFWbBR7AfuvdGjBb9EdxXv",
  "key11": "SNBSHXYskyWTdBr9dbUPA2bqBA8x99KYRTBRQjBAKT855mBtan4Nc83DpchZVfNhakrntt6RKRsX6uujAjrL8QE",
  "key12": "28grANTgH5Uu6SWDLWe9uxz6FWBavnscZpFtf6xTcQprSMmmq1cr5ja9EkRCG5qWxsaVAbmgrQ1mYBCeVvDN6kB1",
  "key13": "62pcNmsxX6imWyaBdpDGDqHTpwhnAGzHaqnakPoaFT16W5jjYaNJuXfqFzoJtZ2YNaGGcaN8g4zMKuQnFJt1JP9m",
  "key14": "4VbMEHGYeA3HjfBT7nvyvbiFfKMRPZFxdjYxcvevQLMFaym9SK1pt4XuxUwcKQtJisZkRXJvaWJNFJABG2W2sxsK",
  "key15": "6qdWBN23DbbhGoT7kvFPTsr3id583p1rmMaZ1p1BpxDpKYDE9Tg2YnvMeBf6qruLKt8Akav8JkVvFacpiy8uZxH",
  "key16": "3MHB5NejgNRTUif7hPA7i8CbJcgV8BKdgsddet4WtHpg24jz1F2DpVysw4LNrCr97P7WJ4sudAGTRVUY61eStNY4",
  "key17": "5CSR1kXgrtAmVB2uPH5YdyhofRpkR1XqDCBywnPaqydFJoWj1N977sF557KDN1B7FzLhiswhZnzLwFfZvmcBDsEf",
  "key18": "5mN2QE1vq5L84VyNJDbgBeDsjU7a7QgoaSW2njCfxKQH33BnvZZcFFGNN8moRZ6HvB2CimCHpHio146HnqkXfZgi",
  "key19": "3w8vBFdSKexCej86hbUgbMpnvwwRrdTCh2GYNwVqhDPCVFRfvoS8RsoymvAy3eQkhGTrXtr2tVC4yNrYtwpobJuC",
  "key20": "2CiY6X5N9B7jqXK5hqPA9zvjDquEWtZokrJYqg9o4NsddfJ4rGULATNaCbCH2UqDFpmZqmuohxcNjoVySb4byts2",
  "key21": "4C7MKrx1XPETAiQmat49LnNR9G1to4kD6KkPa8MHi7yyscS9FqxoPkbVykhqewSihULMATq8Asg6H3V5QAXh6E7R",
  "key22": "4kkgkKV5g3vxHcZfSssFSrcBixPa3a67m6ttCG9xCSmvTDtiQCzFN7ncKNeDnyfHicEpsJg9knJsewyvpwqscE3Q",
  "key23": "2i7v5BnRZaxQtpnLN475W5kAia9dzNy9kZH36ytzjRJTMx213QuJbVyqJLdJLwwCvTaAbVKQbLVrmUHBfSkQAnG4",
  "key24": "2ea7jAgwhc2BzWcxiSjP1n87C3Gbgst3Cy2ucL9ZAK3nkM4ZSMSsLFqyjsxsDtGrTWGW7imPFwts1Lg8JFCDDshm",
  "key25": "5jM5GtFmb5sLvvoJaftJHeUH1dAhDfhSMHbkEjrPaPm33RfjNCvzn828EUS896CG6L6EFuMtyBgq4nb8npwYAfKf",
  "key26": "5NdvSBRy1FumjBVh9Utzbasosp69Uhm7531VcZC2XLH8BZ3mf5i2hEGuRRZRqPhE1PffUVDnsg6qFfMUf7Hwasto",
  "key27": "Vuz4Z6eaJeTTREJ7WqpbAu5VZzf6iS1q8tWJvkb2xyJkg7ccotNuVq79s3u5v8eoukYg1wvG5sy42Sp5YSP4sqT",
  "key28": "bEB8vUp9i4FZedje35HXRwHhd9rAhRkJVUcLvRhtz2bkGSiA8CTBe8X32QV4jFmmaUKCzRVxXVnLEcBmw947agV",
  "key29": "545BqvGuNRLXpWH1qiLfX4mivzyqsUPPCxenjNuqX3ch9Mq4Nop5bw8AE7pZ8tn8rurVsToRaouPC3N7eMZEhLLo",
  "key30": "3jYgNRAVduREzAzqxK2wudaiojzUBV5XYV8dvS12wtsJY1YNRfqyx59S38Rvgh6gG9mH3RQ3m3A9UDYkkvUs16gd",
  "key31": "4gShhV4Vg1DEkzNNMwS3kLoxqzZGWeada8XbNy6kbxMCL1oR2Vi4WRWqpUXAoWf5WwsD9v1nuwyxFdPQLE9hpbG2",
  "key32": "46UkVx1PDLGSTVaNRX1yn29EYWwqc9ApmBdrXmqyYznv13qpj6GPdMp6hgGHyprtQD8SMtKxBEt8FWoC7kgMWpW8",
  "key33": "43xnXsEmCwafCfw9Z9RZocU34C1Cys7jbCetoB4ZTBt9d1DbTqbLqm8L7dgQ7tqdBpdDCEhquZoJ4zYri3VBfA7E",
  "key34": "2yEDf5cqVfVvitzNndw3tCdtAUdPRnmC9JwC2DrKk3AM4hzzwkS4Q8LSKDw3bh5CxoL7LECVFRrLPzGFgbL6qguW",
  "key35": "52vPGnpbhUEYLT4DtuLAGPqE8CQUVwBuwqFYn5TQT7Js8FyQS1JRkwDm2YCgWnxsnGqp7u6nHJtmA4KtJnEdTzyE",
  "key36": "3o2EAUPPUQqTQ6Y2jfPeFB9yszTDHuuduwPM62w2TjoMN9dNQaDZYRETkuVSw3FULozKVQS3fJP219cK37rGMdAM",
  "key37": "4XrDezkr62gTxMXuUG3j6yeyJzANmjARq3qM22WHJUML1HtmikXvrV7mR82yypmxGKb9RLtxpNXu3x9qib8t1rsL",
  "key38": "4rR1LUiFJRx5rkVWd1a1qncSV2HyfVfpj2Y25rFFttp5MMwmmKFD1xVLJvgvK4FRYUhP7Qx43PuiegCveD7RtRrt"
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
