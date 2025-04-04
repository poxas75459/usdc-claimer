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
    "4z3PSChNTvLzFcNh1iq1CbHpDkf5q5Xgaefoai2VzJ63hK1CAjRWdFVqywK2Mfp5ndAz5BLbqvSRLCbU7sVjqNb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22SbQuWwxfRqEqos9rn54v8bpGox6rcseotbcbMm5VQnYCdmUu7YAooajd93pCk9Pv4UoRAmUk8GZtnc4MfrEi44",
  "key1": "2f4c6CudhJvz8nFnYMEP6wSunjM8zWWGGnNSztUytbYScUvT5iQxXo2bUwLoeqXTaD89b15fWnkEfEAaozzqKDR9",
  "key2": "5gzwyJv1f2RQCHgAWWUS3CdpvJnKDsZf1SfahLFqmh14gwUWVvVKFD4WeZ2MUDmmZ2eq1yaBNBw8EJfE2nDKd4VA",
  "key3": "2qQNtBYWCMfSbjvJ8YtZhcqHXDNN3w9r9nzTXGp1REeJh85xb7ScT4st6wh3xWb5Uf4dsaAJLTtXacfpfqVai3fi",
  "key4": "1XSR5YnkMwhMpZccb6PZ8nmF1oDWC2K1BoyC2swSMdhXNbFae4JodQbgN8ZuGenN9vi2e4RB3Mn4mHLEjh8AM35",
  "key5": "4rG61VphDroHRGsR9k4M6eNnJ2AYiWizMZnoSvkgJwEaE1E9LbCGnZgt8QVdEXDVp79BRssxyXSZ82WMvp39pFvo",
  "key6": "4B7moL9EZEKTXp88484UPChNxnTFtSNrmStFDZSGa6i1Tz8hexTzuwqNYsmTfnqBqNjWwxaYRpkqwcMLVrcaBUyj",
  "key7": "4vLehQa2VHcQujuegupFHUx2BaH5cxkntRhs8JrenHcTVM5uMYCS4VmMGYV9o7ioXCZDVqJTENqd87e8FvpADpHE",
  "key8": "5kZgYceDxESGbmuMP26m6ujjqfEXeU1GPowjcgucnk91CBUw5R4BqR9WWa7f6bHBNBsu2qxeSutfj4zA6gaPmWNT",
  "key9": "4JQ3jGvUYjr1FhCsCYfgiCF696uy4Eh3jYoYSoUuPskg4PKxgEXPqgFsk4Fz2dgC2J9crDegK9famTG6Q9dB4QHq",
  "key10": "2SqrSYzfF9gsRBDpmL7pgWV4JzSrMQyJaZbUYTHoKW8APjEuMimg7sKvHSAnASVbR1j4nmfxuFsF4zsVkBQCqgFZ",
  "key11": "5fj8cam5kVXiDefm7qyqgXw5mRHL2K2KgNhZ9TGiiAkW1My5pJ5QydcfgfwGrsacMoBfHpDthkHwuE6stKqVRAUx",
  "key12": "hQ83hqxSR8zssBb6f6zeUYoo82x3sbg89oznU3mXHSMjjcpoNzkzJhgUKqNmN491YwpNW2me9Urbi2PgEuSKqjT",
  "key13": "52yVtvyGiSdEjV9UiL89RZ47EUGthvwPV9SPz7KM4QDiwoq5mn4m2NnHmNKxq7W3E9BC5xg6JdxbwySnc9Wu4Z2D",
  "key14": "3vueaj6an9hUxFunzLJh4QWcEAUBTteC4y2yHdwsM5KMZsXHwctnQWdaGBUvBv5Z8cYJBXPkEfWy21STyTXoFn8",
  "key15": "3dBKxeRPdZjXwwTn9xab9MbTspWvuUZeT3aQdt61VtrsTciYLMsSWJRKcHoNQFh8PLw26c5EJPKphcoYkyZ5DzD2",
  "key16": "4BxqYWnYJaGsi4pHrdcMYeCwAEfuEcXXjRskRSgynzSQMwqiSgBLRTVvPAuoo8KSsPmof8JcVXDvCYUhjZNsp1Lt",
  "key17": "2Td4RNau7R2jG5RWgBKVi38Vcsw9rLLBisNNZaWV2JfCgQ3WobkrQQkSVCzePGmgYyaAxPAXKcw47DA3sCuXGoak",
  "key18": "47F2NPWcDx3zysBq5yg72EV2Doh4jXcGWBVAVRb4wZ5sqNJHe3Z72fZnSV42qiugqVQsmhPdPeF5tPpTFvea2uyC",
  "key19": "5mW1XFxp2uQoRiEboMsmkonReugNLXBr933Za6pqArNjm3A6WhVVPARCzNSNR9ZwXcrGCZUpY5arWJcZrQxuQWS2",
  "key20": "6fJdQ36Y2yyLKVao472C8Yc89XdXBczm9WyN21cuuF6pisRPED1NdXphtx5v6MLMc4vzL3K6M1yG61522RgUbQn",
  "key21": "2uWCGZ2iCzsUdfgPWqRnrSw8vv55xALzqpq6Pi9Hcaw4WGhyUSPDm5UCriS8b4eVJ8VkqsKG11wL17gM1G1gBHb7",
  "key22": "5gVKhU6sXBYBeyPDoKPBpmt9ymXXpPtZ7jggovjDqRHKt1yp3hyhhHWU9oK6AqZe5acuwo3rvv734NLEKcp4hxRo",
  "key23": "32HsgS8SDMdE95Rd2d1kw7NmX9KFwyE6tCf7ToayJzND4djTt8rLVbFwDd4Z6p3BnrV4eAgPGn24fqxY3DCcZupQ",
  "key24": "59pFDCCrAP3oqNSYf9jwvG7RrSkwvwAFWkwrMwnvJTRMf1ws3Un78q2UuD79u97Zr6LK57w2DBFVgnJNuvs9qZ6s",
  "key25": "5zfwDHqEawC2LR3pLpvpvYq1LhcK42JJLVvj5AtzPhdrW76J6Tx6z6DKRxX5qk7oo4zKMgTh75oUrAa1z7hggSuB",
  "key26": "2zFgBsqBNmSthMy7UrCw2oGNrmXbJapZH5NngnqRJKeTGk5F3vHLGb8VDfHZsfK1TSg56GvviLQzvS15t9jh2vdp",
  "key27": "xcUytDctkc1SB57cR55yyvqZgJhtQ1Gtfsx4AgjhoJqpLcuhzakBqm1BanqPru5x67nwSiAySvveSP3Edx6C2kj",
  "key28": "L7FdNgNZor4PvKqEYWxNAtaKxjnk6WH5oAQXKGWfqwB9DXQMbHMkFHYxctxRmKaNiadXudnou1q5swhwzwbZtNU"
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
