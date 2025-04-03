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
    "3xG9sDdD52GYiod1qrgmegbu4mpPKMskgjLZHxJpS15PnDYjVPNnAuzCNXEHCzVZXNC5VzZF3wuMr1fjMo8nN21V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WPCZsxJTwSGyVodrMrX5Pz6NJiF9eWJX3ESUa94Suvvk26WNMXMcSHww2taV1rECtXresnCc2y4RcNZVnBRegHt",
  "key1": "2PVsWDL5TdPTjVMjWJhHZ4Yn5KTexZDyRmM6BwBu1bFDn9XesmDHXdvNQyS3TgvXbsMxqh81YHDfRiuo9qdRBvk1",
  "key2": "4XDwYqxqiCbAhD6EiNwXQHQTRc4LWQNXT9r92yRjNmhMycwr5s6DpLyuizL3bSWUwJFNxMEXRiCt3uhQHcPLKd6h",
  "key3": "3ZFTxBqB3KU62Wn3RWbtsQ4Rhma47F3rTHyu8PKjr984gV188k4LzymNuqLdPaE9h1WUmrYhhC6Bk7XtWTVnAdXj",
  "key4": "Ak8MP3WquhEhj7TzdNPARs1rKMvs7u2HLofHvV9wFs546X2wdEyvK3GW3jq72igYdV69o77aHtVJtrjBJtgYduU",
  "key5": "4qrCGt3TUEF1s9a6jqgTcYG9GFqrEKYpYh4BYA37SZwr6DcNa3CgpKD5r7gKLTM7RtFuYqSkWeYrdWy9hVW6JiJw",
  "key6": "3uzo6vKqayMqr96RwRL2HRqid5X2YMGJdecXkX2ePgbwrcPkhWyxjTegU4ydvwdCaYjcHCvRcXATHAJEz7XetzJj",
  "key7": "wTfhisAyfzK8Wxh4sjhzNtKtuognaW3NHYbXd2QB7H5UYGvEfpoQPLzqFRCtep6CCGwuGt4kjqYPzHGGcFtVbU9",
  "key8": "22ABFkgtvinM6xW7DBvAbQtWMZUEi5pWgAwLSrLsngamWELWDkR4D3RFCgnnSuEo9TyQPWNNntVbsJMu6mwGBAiB",
  "key9": "41v8hiP3M2Xqav6pV1SyYAg2uXpGKPB4odg4ux66Gu2ioetZmEWFTgaoQ7M5S1HBNAar9NLRdM2svXqU7zy58Qsh",
  "key10": "5TtQJRjNfC9zJfn4dP3qfV2SbGUDFd7JpT23kXGSppFBNYoipPjyYdcDnXxspKsQafrDRmbg539m6BFbnbHJk26Y",
  "key11": "3duVdjgARvQPi7wWZoGNfCAcTVH65AoGZa2bhFncLd9VpuaKm86LJ5SuwfqGVBviN8Ak4gbq4aUoGS6AwYN8BWo",
  "key12": "2oXppsUmyTnkvjv2hKcgUvJMUBSz1iNVNqACXBZSJbQAsTAyAL1qSsmADJwMZVuy61MJGETLrPZfQWvecEruvGBR",
  "key13": "4qjZuca4sDfHLE9GKw91gRN4zSzgCyxFKdpjwoTYx2WV5xUMD8UkSbsvUoyDLE9DoB8NHSrJ2PU5dFgFx8tF1GVc",
  "key14": "5pQgDfH92WFsHCqHJM6jtXYuP7XTQzmg3db2gAV1zKkMCxMQt8epz3bqtd6b6iAzBXfszSe7MwarwzcRRzLaDe2F",
  "key15": "5E2xpPT6mnDw1zJqUj6YM8r8BKjNKxFmJbiFhPJcaqB8DDgvj8oHyeYPHaf89h5i8HW1wZEGVdsrgBnEhbAfJDWk",
  "key16": "2irYecDS61B9PmnXUDkNZNweH4yZwXqFoEiKyZrPP183fNqmLJDK7g9ZXY2kfMYrFZtFMqXPH26eJqKSuDzpMD2G",
  "key17": "5BypJZsLEiHvpG5faLn38FDRg7QagUoLEvo9mE1Mag2geitpBNkznX5hwrEFQrQZ36nHVQqfpVfYQUw6Xcqe2kQg",
  "key18": "mUJ8btV8si926DPzffp6TpxomtpCuyDLUnXg5MeYUobfHbDyXUqyCSSxf3oSB4QTxZ3VV5ofr58XgCUw4BUpSex",
  "key19": "4KDdnBd2XyhCGtwX27r8dtDx2Qs3pXysKfEjdhymRBmF4CnwMj6KAKdDuSBZ4zQLt4kYGcP2jmUh8zdiq6hbRxsi",
  "key20": "3KAYdX3VP9S2uS9tHT1m9Y66JtRXnqUwr5H2BnsEigRYWh6PaUftRVaD6TMBgscXVWKeLxZTZVWYFeLSnCxMakYH",
  "key21": "4wDUpKNTJtg5q1wCCTx7dWJJQ5k8RNsct1P2ngHzohzmFzPSUbZAWHaefWtxZoB3JqZAhjqAr9r4738WHxJqJtDS",
  "key22": "PQwZEX57zRpCvZSZWDiC7qoQhuXXrwCKKmduidNBY3wBxDPqoZr4tBWEXi1bUzYgYJvHNxmcHBfKWiEqJKAPvFJ",
  "key23": "6665KKpFjJvLi3J2SYsz3ar4CANGMhA7tbAYKYW8BddB5yqX7r8fpmGPBuQPUhHC9BiHXhj1A5VxAexZnez5fre9",
  "key24": "3NsHVMKfoAmrnpD2K3GUBuLUKvejhHqvjyy7At5Dfs4x3MQfFbfjwVrTEid19nUF6Y6tMuC6oqPgGiYqgbpY5XVu",
  "key25": "5GZEFN4iWmaEp52m3QfTKBxir3TekzxCmJeqLDKHCLg8wRXKAxpUB1qRPyoLJpyTUtkRxyo5ya5zg211EqDBvN5J",
  "key26": "4w4gHRMPoRhaJSgAWhqqQUNV56DPKPN4HMv6KeEX9KYsSFZ1Q8xgCv2mpWLunUyLxvW4Suug93C1NF75kvjEnEv6",
  "key27": "dnQ4fLSvLLYUjkEs7wk2Y9tDZKfCgHE9RXeB8cpr8cxf7Qkr8Zuvbsrt8BeQo6FFgzKcLzWwfXu9fVyPAhKzgzk",
  "key28": "cUi9PwfmBtc7qnyBj47zZWREzFGCXYx3Sryxf9CHWVK2qecPqWbzAfF2Cu8fwdMz6capb3s2qZC89i8c8GJXGzS"
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
