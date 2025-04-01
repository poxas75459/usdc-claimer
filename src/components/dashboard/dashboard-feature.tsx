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
    "jH1jt9DGNqY3t6qmARsFqxHaaHdJunpRxK2cAmgCvdKPAVzScMdi7vEZRw45c1FdeFMNnh9eusGFMj4bX1KLGNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DyTnxsm8UWScvic9xEvbY52VKQMZUko8YjcAPVqfcYtaBTiCSNzuXKppDaSShDqHAEFRmKhDvM2rgEiwqmTxUsj",
  "key1": "ZX7RDG68qn8BbVmMCnRS7bU3GYryqZJFXTNJWzM119uYWDyeuNVq47iWeGtoyrDc2TR5Qzpr5iLMy1ggGhCBDbA",
  "key2": "YCfQjCmP7ZeLR1zvWqefvc9iy5vmNkQPhyAgYnD6h46ow75g4aLA2tgo9EuzrVdQY1Hq8jengZyUFJT356EyKT5",
  "key3": "41gRu7yciQDBuGucSvnhkQPqwMqsNhw99aTq599cUMQ6jFhwPRAVmAQcNwrB3RqkMC6dzoNjB2D6DMMbZW2fNVtK",
  "key4": "3oFrF9gMu5m6GTF2QuJAoPsiRbq3uYfrYzq5KC1rUgXeQybjYtz6z25xjEUgymha6d8uCfpxrHTcrvrdXD8mBJbW",
  "key5": "2VwAVFNF5UeZttsVzVGWvWa9Qdhv7Jh9y1Cg1DhW9ZUAo97L6JEMqgmfsGV5wd6i9pWYLmLwmRovYVvRVHoAHv8g",
  "key6": "Zt5XmCtKv4RqyZbWAc3WTGr3wTxD8TmKSvR7jggqTZ6HL37u3qpiQbVmpU9Vhb9dz2vXFFTL6GCg9aaiXDmGfKd",
  "key7": "4yCdCmLdeZuVbYdKtojkVBQedVn2cJbiYVuTi7jzLGT7eTdewcDC52ncZEmt9ZAmdwniWVi5j2VhyKDPRqJBRPgs",
  "key8": "4aeFVM4NDsvsn4bTsAHkjcq4RN7PY3g4aa6RdQL7FP5PeCzAiuZiisj5maZAhn29pfurC7VCiD1QDYxxrHCNhFck",
  "key9": "45mGigYgWLNDLsSdRG8LdaPRPr7RXjioziWsT9z4QRwdaXmX5fKwci69XbSAJnAyeVPVvYqx4J4mbXCgrpSQL4p1",
  "key10": "2AJ9bKtNBwE9izyCm2i9etMSoUKG8RxXbYRCRwqmfv2PF2kSQN9tKkpf8Kj4XmWwCKzu2BKnG2uaSkUT9ER8rNnK",
  "key11": "54MmG84vbKinUUzQUowygH1HNsDVbs8DZyEbQKR5qXHGHeddhzioSnc977xH95hSP6ZsYEvC5xL1xdXdBhoigVHX",
  "key12": "4YpejXMFQKB9hftLcBCgmScbTX3owPa1BCgLsPUq1xTCikSRS93kC3gMuYiQRo4pfyPV7CemP49mwdPaw4zSA1ey",
  "key13": "5AEkVWeK8jSsPUJv8c3CtXtEzPt8BABNLjRnN5B8EhTgp6Wm8aQe385DZqfgbbnB79vS1J91YN2R8RX2zCKHw5Q1",
  "key14": "3odnVeB6KT1SZ2NxuQUN7tV74RYMiGYq4Uhf4uXzNLBHaW3CBc2QhqqMYhUdxRdaPxjsvTAWpbwXMmXsWpLBzGyV",
  "key15": "2QatPtRJ3wAu5JQs28bw9b3bVJ5MzcuZAoYqt7BcUnvCbiAktP7WjCYcCahjyAxkDXtYkBFGjW4gBb5UPE88D5Zb",
  "key16": "3XY2ojhqyzeWp9hNZXUT3GXUn7s9LKqxcetYMuwnoom3oiDVcWN2ZB6PYyaUqcPkqt1z8m9tbxmC2GDemFCADoVj",
  "key17": "FHxdQuJvwo8BhdkqY5otTnSYQ5GyKjpVugcDaSZZwnwBFNRG8JYmLkDRrRYwYcn9TBtXQaxqxcN1QDYfKCVmDoh",
  "key18": "5tYM9X98QkyhFqx2A4UbCGgajYTjQV1BFLdh7h26rScnbURuVchYVnchocvx8nVNtEvSjZyXhfVWSMuqHJZ77Fui",
  "key19": "4pNazFsSvYNj31zXdzSfgemV71ygZMFAhA4BLVLZzq2sZWB682nc35rvpa6FbwNj4HCBcKXX9XTj6hENXpSVpN1V",
  "key20": "4sJFfDYnAcuvaCuy8pQinQ1wmk4fEMz8GDPtp2po5DV1sYmaJVbViXbQiVkfNXVV8hr94ZPBLMSSvMGnjXxtmRU6",
  "key21": "3n3fcazrJbXQ2uHWPvtFbzGzjHxwRFDchUUv5coKPkW8VGxk8QErRX28u5ZaXAyXn6QTVYqD5AjFxY3CEiKJZe9s",
  "key22": "2hzv3unQE8uVLBJPw8VSsPAs9Q5kQuFrN5xn1TeLEq4Kq8srpMqX1CPSXqhZowH84Wz9hindGNiZfAZaT9WLBQKq",
  "key23": "29XvXq2QSTLyoH7jZxABzgZR3nmsECh1zPToR4wQd1Stjd8MpPYQKHGR6jGXNJLmYFHhMiWirxd93eZAgf3wRVZE",
  "key24": "5emWGUV6tWh8mBzAbtdK4K3sYShrybXgBgbngKi2bYpoRhqWKhQkzsuGsLy1SbmuvfK8Y6EQe8USo1ajv1W9sbu3",
  "key25": "2nQEd3sVxnBjxMefKmg2r312srRSzFq8GLidFY6eD8cQLiMFwr4Yxf8zQ2or9RXTW42i1kPQaPsnHJvAmj9sZws7",
  "key26": "4RcDVYkunsHMg72PQjk65KKFY91jDKUapx2Q2HPNXsvfu3ygVAMmd7S1zeL6HdwaJALvu1Dm89J6KqBWAeZtMQzL",
  "key27": "5i86z5yp9dxULV27JFaABUGW6ryT5uJ4wxwe6drrkCQmrtcii99a5CzVBJz9vi4nsFRjKfQbp4tjKZpc9JKMLHez",
  "key28": "4cCFPjum2Kuk8HzevkU8scGK9V1KAb3np1psAGFBrUgBG3U3wZPYBmcATbLMXbLC9x5WGm324g2jLsP6VM52vVzP",
  "key29": "4Ep6nMutvJQqPEYNBotG1bBLwNZ2U9v3eRaQAVvkYe92ugbU7tCKUKPifJcdb5MQz36F9VDsyvHkjk2wVCHRFkte",
  "key30": "5o1fKqMjS6F66kS4NJVxBoyHGbaZwe3i1LBgNFaxbv7bwa1N41EuwuSsBBGdk6pVaVzk4S4qnitxFK7ukf4v6kyH",
  "key31": "4dDZwZdHsrtbfoWs7nhQszjscmUYv885NWR37Sg34QTaD5BqshaTSduNkrZiSi77zuiNLaNTkaTaDtkL7HdccMsK",
  "key32": "3q25FMN6o2ZEMhUUE7GYiFywTivFbpRaaxVinxqqCWFdRs2CvGVtoAnCiN1gh2o7bNWZBhtmRVGrCXEZH9HDBAXT",
  "key33": "65sCGBS24mS2Z9w3V6KJHh3LDocXbyhrXAuQi64Yy1ch2DMiVtWGr3Tenbj3sQL8hRiXuBhDYfpri8VBe8sppkLa",
  "key34": "61eeB5HAMfJqkUmVGEu2nxbAv7GkDhXnDcKLPaFiPiYqxFxduBDX3MJv93DVeBuaCHzsd95ZPY8PGLUWV3uqSMPB",
  "key35": "r84oCd5Tz38RxeCmMvXFTKjVgYB51aV5UeSEdtXwj8T2GFwPjggBYCLRW6mdXKMWtNYFACyt92it6XmrHr13dwz",
  "key36": "2npvKApPkmXJEWkNUUhc5jRDJLxU5vXeehWJtMZ65TZPde9XXGSJx6dvkqKspcBGi9zavBFZq9AQdyj6ANsuYWkc",
  "key37": "2Xzyw9rtGsH4CB1hMNrNy8yH8rmHMpt5DYVZujJz4EoXtdrNZnNFkzvhQdfu7h2gWPVp1cEfBj1UwyHt7cGJPqKZ",
  "key38": "bRf41wpE2wqz5KH8GxnaxieWjPSd8iidkUWLSZuhcMLJCGqT5q4QFyzSvnU1LL2uYnHXK6LYKvaoV4GZGdLKZmc",
  "key39": "3XZ2Cp5KT7dbpgXdk9i5k2RP27pvBDSbXn5dbLihvCnM3pWVi2ScoVXZ13XfTAX7qRxBAjnJupA5LTnBSKrwLD2u",
  "key40": "2ZJ6EqXHpEHn5cBiTDbh6m2WKJd1RiP4NLAWM6waUCitmLv5XakfATUNr6LgGuFg9XYHiT21v14jZzk5rBoNyQWN",
  "key41": "cSwjghZf1ehFc6PGCVrf2A2qZ4U5pviZcLps2V7pYzbp7dtFAubRWd5EEnevWta8Bxvnyq4ND5qr3z4oSFQvbi6",
  "key42": "2MwCgwZ3ceGH53iDUUkEAfXgAnYEdnNQYe7xboUPVjxVpLcz3xSuD9aPmsTU9wZfhQJTuVeK7QTPxhU5UMQ9Bgcg",
  "key43": "4DT88WzE5cgaDJh2wRantY6izWGXzM1RcGD7aU5r7fNUaG8q88vr4c9cn2VAadPDkGMJ9EmPdMCQhMqJe7AV9UKC",
  "key44": "3nbBChxtSojumZzLXwj9nbGeKgEGFz3B9gtcPft5XpCrRfX7uHuT6KHpkX83ndPRfArRDcryLfTHtX69StpGh4XJ"
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
