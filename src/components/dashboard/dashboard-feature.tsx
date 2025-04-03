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
    "5p1FKZKyRS5EePNqhdw5LELnfjQ2Lxg8hk6EUG8YhYVnaqQJssLWrojsJSGsNkZW7ATf12cYZ79LE4wbmFi1gQ9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ePfjzRQLQ2BJbgaQWmi95soJNYYzsGJZs4wWSiHpWpioGxUWUs4txU6UAzhvGfvxEFP1A2F7y78otEUSJGByETt",
  "key1": "2seCtn7CqbXzmw1dQoJdQV4UUwcirEA9U8LAPuVw1wL9BhQMRnLfLE1frt2s9pwaknNL6fFKTt3G72gR5TKcZw6i",
  "key2": "5Xbhirma7bLWuH6g2iEDEjSQyyJ7p3JXxYsgeTXeiX6gBwn7rACTKGmtr592LGLTJmUnSBN8WUwakvwHvNv58XVn",
  "key3": "3UNioR9zZsVd7kXeoqqHr54Xa1kvQSzjV9MaRcFEac4eTuDECoqu6ndw7zaDYPVdrentnrMdwM7xPUeRcDDrX3pA",
  "key4": "263LmW6RxYWHBLnv8BCn243uU61KidV97cWo8udqjmV8HQke4utRefBU2vu3jboH1R4xrnwt6toNkU8GpTZVr4eT",
  "key5": "26kah7oqwB7rDSiKdtvNYg2a7AfxDQeHEa8CeYgF8Yn1uyvN82VZsbLfJapi7ctG7t54UYwm41MFmCy7h7Msu4mK",
  "key6": "22zisttB3VXy1r4nVa6yKPk4ERfumvcGfRRb7WCd5mUeHd59NcPqZ66L33pWwbnveS98XJQYuBkgD6XCtSLSDPQg",
  "key7": "5fF2Nafz5mvb9Pt3UfC3sdTu9VgFMo7koVUu7NmiCYZ5JZ7u737XarN82kVbDgJKQSLFRkMEewxnj1Wk8VtXwWHi",
  "key8": "4LuKd4yfdSMYPUv63sAyeGFXD1b5L2LnWC8WWGUrw7YDzMn6cm2F59GuEUZSsXuFufR5PJu8o4Z1DPfJtLTwaUSa",
  "key9": "8GYanEHy3Qw7PBZTFFs68Fu3TYSUV8VCN42e12Ufv6gmtjKRXENErx6VuZBkCcbF5jjjyXdP5gRARioVNUSWFJa",
  "key10": "35WRNjB3VYbMQB6cjEuhDAGmjZqmSYta7bt12h7t1VoNmhQ6jpHdwhFCCcZ66SHNV5kSQRq7mhAiJ9a9boNzj27d",
  "key11": "5vW2ScFFnLEwu863xoAGsyxsCj2JzeL6sCTUYmww934iw8X9dGUpYZ25b7wg7vymfVA49cvkk3jcX8VYMNTKTNP7",
  "key12": "KeBAhP6e41mLydNnfi6aNevNfXivswsvCjM3sTSBxm9obVJH9VNtGcrGbWRR8MmTQnMxP6DRERJGEH7UfUw4HtL",
  "key13": "3qZ2nBNWyLCXxs7csDcmTPbD56BETyMXiMft5rWksaUC5Gn2WXyM1n1AtyU2THsPAwaYENoM29YYNVZWpDBWoR4f",
  "key14": "2A6ryDYDePQBMPWGdSkuusJhqX3apcK4r1k2w5fpPV9XDKDJUFMTjksgajm2PXtE4Myyq2kmoECsvQpAar1gGv7p",
  "key15": "33Sjdt1jJdvC6ZWXhJ8ciAihN1yb4BgWbud6c74i1DNkfjoXT5prLe6Xk5fD1a9xE8N7HRVxruZ9wteXFwsEo9xZ",
  "key16": "2JhgTeKaa6E8ZQW4Fw3ftagmoy6jv87azvNRUBGpNdXs4n5KKZvC9WnvbdDKNxeuJmstmr9kVgRhydQ8We3mGaKD",
  "key17": "5yNY7DFFZFyjeK2FghW31crxwDPxbwxApvEwGw3718qYoXV8r6vnawztEKepjP2QdqKTWGV3HjGVDoRw3jjgxXqC",
  "key18": "2vYrUcW36UA4VbDtbTXaiEQG2hkC6LpNmSoCNgcnnuDadvWpYpMywTSzVkZyyZvmz2QRQjcAkKpm2xpBGYmE9kRW",
  "key19": "2vscbMS2WM1dNCfvPyx4wBZRPeqjbKDp4nFWhFzxiMcw2yCquja78nMr6WrKcuhhqTZ3fZHKALNr3MJjgviH8ijR",
  "key20": "62kW14G5489QRSXFRDyfbVjLAkZzLTj9xiqt8jmciBbs52o22VtUt5tAtukzwNBGZnCNG9J3bGfkuL4T641k17tr",
  "key21": "6613NrcxpsyGQXJrkGf2W69tG4qMsyNbm5jdfGzDshM8oy5QhsnRpNnx62YZJJ7o6eMXFeeij7VssSTMkquRrW97",
  "key22": "2VjLuSSVdfVhiNCJfLPCC2VaHbbz57mZQS4KPBMFYMmKDSyC5nBrxitoV5bp5BmJSJ5YmYkaTf4BuWSS4hVfck22",
  "key23": "2y4fG82GXUEA9UT6gFLnK57YpMWjrAEP3QRxejsWwD7z17VpKonn2JsrysueeH64m6e5X41RuY1pahwS7NKdzSxN",
  "key24": "5Bd1TK2VXjRVu8JcyaKix61CcubhrzQrEs4F2KmPBPbtvBqfLLzF3WjrMyRWZLp1NJNtJ3mmtKpbndW1bXJPtfW",
  "key25": "3HqcCHVS4zWBv8F4mVASaJMpW5xsq6wDRFowS7VuVVSEKXW2nT8x3ADfbqWK8QTfvpnRvMM4naNypFzCMhkoFvWc",
  "key26": "2uCLk7MVqRWsZTfUjNwW5YGvtJU2mzPFvCuLR5fSMqCdsxQgoCLPBe75YP8zNKRPBnS91mRZNaoJpjcveABWxcft",
  "key27": "4u3V1PFFmiX88SorRPiNVHKe7sgSCB9J2cmnZZCdmc1Yo43LbU3zUPDocndjcVq3Y9dJP1c2rV34hD8ny3qyGCQW",
  "key28": "5WWcbQ61hUyMPPewPRNjW5orgkX229HUUsFqrbpfxfJBEd5ioFRAjkSaGwZBYtjo1cPxKy6DSfVnqnZWx8kNxUFD"
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
