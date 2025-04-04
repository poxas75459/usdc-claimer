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
    "hriqA2uUc6EM98dPyNffd1XzS5Mj1wEo4sqJATgzqXGF9NTekeAqb1HvCodNop75PzxYoCvj4344sfXXHH7YaCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y2xnoqvBmVbqyewot8onxzSt1ksrxGhQCi3sfL6aFoxNZQ4McpxiUBunJHGNMuejFKwWzQzEVWtDi8VZ7g1Ht6H",
  "key1": "2n8YDDJHMKbz9F2KEKDGT4bBpkKYr5Qm3uQXMsbfmVW7MBqEx96TvoHxuPGqAD5sAKpYrrbYLLuVzk1V6nrMsrxC",
  "key2": "655nea3j9TediZZr2ZdpFfYftjZZTPs5dFdFNfA2cAe49gdUHUUwHWJQ71bL59xJ9whqJsmYo4vsc1jGfRC3jFVF",
  "key3": "2duunfZ94w2jyeXb481xU3vMaxp26VZRupy5VAacLE4QJfCr2dHobgJRdWvLpMZ35LVRWg1U2vU3nue7XGvJgHK9",
  "key4": "3TQt9SJLYfiNaUvgFmXraRX6dCovyugMzqVgQywQNR6iVc9M8H7n7PmdrrQSyx4yUt72NPysYPrEZ5uufwjdWg9w",
  "key5": "5aofnkyuRUiwFhXzxPUUhgjt8HB94uvk331acTUDtRVzSBhM35L9onCdVZVKyE9HUwRc5SnzHkQXzibnoBCFcEin",
  "key6": "5VE6ySsgisheNE69EDW9bAtvPiu4iAJPGaV6oqDB6TAQMnpM3MuyfiJ177hyk5tujy3qhc13KiRGQsq823dae6k4",
  "key7": "5HTkBmQqd5E5teNvRvYYxcxeWCmnCr58HLXik5vASerMgGv1XJSfjyyJ7JVX2RU1T8fsTY9zzUXQg1NqL9rKwMaM",
  "key8": "2q5vdBZhx2Xf16cSBZWkvph7cCacQWqGeM5RMy32rKgJKi5MPi7vqyD1zahwphMm5U1XdWc3hDFa4vZUEMwAQ5Eu",
  "key9": "4Bmu4HcCTqzRrGoiGjdfDooJ2CnK6jeTKDveVZq8Lkv9xeBYWLz7pCTqnR84S8uQnrynMkAtDywqUHJgjcRVoqpU",
  "key10": "28GdGJ6KojX1oXnnm16NoAnQ8Tm9fbUN1UNM1GxebTAm3WxnHEn1p1NNoKdy73pu78ZYhSwNNKbgrTRdoDtArWik",
  "key11": "5AfjsNBtmev4acSLA3fs9CRPRqSDoRn4uA1nmF6uFXC7LeWTqKGhpwaag1VM2S1PTm4wSAc6zTcFPDb2Lzhr69yz",
  "key12": "4JShkorZdxGbLc4KfBq2j8ApjfQ7PYHnb3Rfoap6LoKTNNMVgjEaBEYmmq7dNfHmJVjUwpjisw8rKaQXm2JrvpTz",
  "key13": "2P42YvvjbVzYeic4mErSWQpQD5NqhrLBAL1DY82SqQjtBNfz4VhjpNiM14qx99ijtPqpRrGeiDNrpYVnKieD2dAB",
  "key14": "pEv94vXBU2CzxNsTTA42jgz5xwnyYNx4KSq1nuYhx5TWzRf8tK4oPUQYDXAwbs12Xk2S6tGSmyzZiHgmPrMmkC1",
  "key15": "5yXtjA6KomCXczSYTWorDdwfsno554xuAqCy37JQBNrT5jAnfxtvZSNi6cW3ZDoyEfhiguHKUW6VqN8zaM8oYta8",
  "key16": "LfyyWpQhckXTZ1cbkG5dGhMdDCKSbFre5QSsuzfQFaCDmxJyL4xo9Lyt9bH4hc4aE2552mP8UP8PAqUN6zxVyhC",
  "key17": "4ukz6T4cSHL6Dop4QSC1KtovcMPXXM9LxFKkJQwr3FtKRjox9Xos1nLeopnuDi29UHhNpjnE7oJEN6uc55jALF8x",
  "key18": "nAf9yMgmqTLSXfdStagpvLZikYhnAnGXJZMRJPXEZkUzUBaWsHw75BKvYxDupRuEtRcGEdt8ZApv1iM2S3zTKWR",
  "key19": "4YnUsutuXQTgZym9Fe5sx6GYeNMTfU6W3HpLJ7XBEK5kQyU3ocCtArysZ9JixLSgN6DdNSHMqfwaogN4wAdKNBCk",
  "key20": "57NPF4U7yme946jMpLbQQSZrfVuJ2QHixLyZvxTxdEMDRzk2FK8E1qiTD9je5qw3bHYjgEXaoXqiZNHZQPzZ7ob7",
  "key21": "34nEVZ4LkC9RxgvVccwkKLni8zq6pizzHBZaawmgFn4SJiVTYGUFJ56ATZjeTWdYePZ2v9E2orFtCKjENviKcZpz",
  "key22": "4jRW4Qu4miDCV3ZDhdGBfw3veXYiiLxsDmotQHwE5qj3947tVwiVkn23RakQ9gwZG7NnyviNPdEMZgFT3igqLARy",
  "key23": "4mhV8QM5KY9FgJLc8Jpr9f14KYzZXK38dRoGziV2KEu163mYwamqZjid1Jw6LgDcTEDJDHK9kS1Bd1CtcxqzzzdZ",
  "key24": "5V7NnzUoHrAxMEo4xgfGzjwyuEHhBZgiCfS9XrUNoLgxevgPP73fUU4Vsph8JFHQfDYBSA6Mgm97JUfQSdGhYa6b",
  "key25": "5rMmbdmQ9gArcF2Nfu3XGEgTMucpku25ZRU5S1GrEkT4AWXSTkDtyqRhsZ33pVMXpjZMAhWyrSbM75VtKzkCRTiz",
  "key26": "2Ri3goFqK7vufQEmGHukRj5rbu9oMoQSWkEqBzhSb1k23eyfxPr9KLnVGmzEmWXgmxkYB33FcCdigsB6mUM2Vass",
  "key27": "2uFZVHKqCtNbou2vqQUFwbLYAvJPBsHmaumCGidPEz8KTu1zMnutRvBDC3SJ9ie13xQmhTif3SdKLbNUHGjuha4o",
  "key28": "2Nu9kGSS52wk7jZAFjFoYQsH7vKDB8HvxhZggumrBUXSXvSnNYpnFnNNSnp6bgKSwnV68ujkRUUh8eDg389LQtfU",
  "key29": "4NJA1P6cQf3MikAXDaWFukto7EPWR3TvHdi4RS91TVivbkXHqFeSYdiCKejterbVvJ91rj71kBUG5pDA2ocGzYNg",
  "key30": "4keF3qBb75ZLHoqd7fyiqTtj2VNFZ8BaavDPb1GwfNHu8rGk3hYDa7ayJe88L7GxipfMBdcgdR15nFqexxoP4RQJ",
  "key31": "4vtsPe74ARs76cja77WNTG6Ujyg7kh4LSuHyhvuWn6bcut2GrqBfPpr5Gx14ZWSi54VEo7AiJUtsN7zeP9KeXhzH",
  "key32": "4FCRkJBexRA6w5yMhiCeDUS2aWgXFZihwZ5rJ63zeBuAGTbhmDLpZT2kA468HkHLMB95cqzERJccYEy5tMTcV3QE",
  "key33": "4q7fD5bSpJdim4FmEXqFCgn8A95wz2Qhqg75ZBbkTke2m4qvArHXKS7B7nmLedG23UDj1JQnpbuB5APEGeHYvVaw",
  "key34": "4XWu9Y7CtArb2wn6RtGE2hd4Ro3bv81viq3TxAKSa92haSU9v52yiDeswRHBkwRLysNd8t1qbUSRusZ15JfhgkmS",
  "key35": "2VFGBEk75pQomKm9zcbDsLeGY6oARMNiT2dvT2CDsiGGVyQbGp8GHSvHjdveHiBZcFoY3p6d8xGt43q1DMDMRyqU",
  "key36": "4XkS8TiC8TXRKiXmguqMT3MppGddTM4qCKU2bMxjtcMGnR5Dgy4oVpy1tySJ8Ys5eQkoiseap3VPfjwXEbmYMZoZ",
  "key37": "5vezY3gjVzsXR8HKnYFHNHjCb6ty1rS1eoqEXSuRBvsqduVEc9sRSHiJ1CTNv8VXqoHFb2i8SCbvEU4U3wXfvFzV",
  "key38": "vWUXx6a1qC6WswckGjwXPLH7cRWPerE1R6pDoFZvvtzur4Yd6iZofxHnEKCVY7rzP6LYViVBQQAePegm6AhHfa8"
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
