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
    "3PyEBS3mATKfLZQRNGQF8qAKnzwRbAbWbZC6rWSVvuXwmPQvKAgHK7X2XzJyx9X6WHwybgvT828qpr5C87e4fr72"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22ArJBdAPdy22Cc1SKHbHRJsYSZg2fy5fStnX5tjL9pWgTPQmrisAYkJ6CFYjj1uq5dZ8EjSQb82YWdKHMo99Tez",
  "key1": "4JBH5cimYsXcCppc6eYqREaRfhdQ1To7tdqctedcsyh8Y72Uv7kCkov7qSdfKN2GHN25ukYQbKVSDePKFvQ8z2ic",
  "key2": "5T68nqeNQLR1dERodqG4JzNTrgZQefZxRf7GLcF8QGMrJtZ1QqG4KUBtkmTTMMC1RYgYHzps1sB1noDKtzx8FXEB",
  "key3": "5DtWbpU3LFo1C4G2iZSqUmTeEgTZLBiCJnmpdQHzQjQmFge9zJQRaQK5YM8WTR9xkxXD1nDaPjBSQsu936656kAj",
  "key4": "5DQwE7wGYZTUwQiFFWNnaaiEBKCuZNCtpGoqYojf5sq7CAZ7MtLJX5C2CMwUqqRqvCauSfb8UjNhpm9QSxDvREgw",
  "key5": "4C42t55Q1LcWJAxPWFdFiHo19YxBZ5gvixw4tvsJbqZQQeeB11TiejuLGQGvdXps7HuXCrGMr1dawVS151ZboE5V",
  "key6": "2yFaMjomTGvyEKLeu5RxhpUrppTwWA8XyZnJRynhJeifxMVd1PgCjNM4bCJHtCgvZHiZALCcbWehbuw8KAy6PFTi",
  "key7": "ghXriwTZNanDSPuMhc4NpEViNrcHdQCBENS39pcZUpZCXMJ2NahXsCQ6LTen9HUULUMnVfZEDgoyRiCJkeEboym",
  "key8": "5dMtiZ3pFsCPWCFPyf9swzGy29CSxisYLhwrnJmpeo1fZBFZExubVoyF8xDFthqf68MBDXF9iBXWmgBq8FqUc4m6",
  "key9": "5fHkxs6YX3pcDCchKW5uj2Li1CtpaBk5DwS8sBvLSN9LJFWUcyj6JePvBLNMAKVxXoHx4bhcZzFneetSmUAxyXRH",
  "key10": "45crgbJ3G2o7Y15RVzTDPwqruzgJaiiZ2DRsqkAbU3VtN4dEPTsj5RxHmpQux6RT2upt5h9LbiQYdAJ2otF4CqUo",
  "key11": "5eQaGhTyoLpfRQSrXBQzzcQbQZw2YQ2W9r92u8mjTPmEHnLpDJVwPHkcAtHBmyGPrLX3HGvszWns25Ap6tNTdaLQ",
  "key12": "5XXXazQ4qeQYRgo6KVZEH24Cum9YSQ1QDufA7Pzr6gjkasB7eu372cUJYT6PyFefLiGTPBPm1fnkj4fUinMqEPMk",
  "key13": "3i11vDpQHizXfT2Z5fuWDFie97ioKkGpNLh8mjT4ToFzgiEbsZjwwYF63KJtD1bUSpAgnw8DeQD5e3swJTJWpp31",
  "key14": "3VvgqpuGyX5FjAT4DgVGEHb8w8A4NWhtpB12Q1pTcgUXgtN3Qdh8sqZnJ1nVL1V2QSbDjoRLT5DF2p8msHokWZ5n",
  "key15": "2S2AjXUraavv6MQ5cNxAWsiSx4PNwMhnPoPFM3SXBWmm7bWoYb4xuhVgo6E4ou7iVj8M1TpkeNHep7qDFSaD5118",
  "key16": "3MvMGypzfR2MQs4Z5YFKsisi9sMsuVWGsdbSk4Taek83ELCr748hUbGN8WwkstJf7ZwWqheufWiQwcrJsQJ2K7Ps",
  "key17": "4fdDyV1b9ZrPYwZa7AYziYeXeGHJfJuGPmKVNnqAsjMbPtszC9khmF33FrVERu4ExeL6viZNF4gZ3xynuiVARzQN",
  "key18": "5mF8kSPzfKtQMdY65YWT3kECYAtpoL4NRd2nTaP1rSkSHuai3vK6CFqMvdKErd2sRMmEdSSqzZs2EQn9zsL6Fc8s",
  "key19": "446JfzRHhKepiLL7niSbz3NiTSrMbmXET8K7W2Eg6DqBL9C832zqsbvZj55MBY1kCuPagEBVirYCHWVKfHNbjCfk",
  "key20": "4heFnanYNF8BhekiHZ1omseBKwH5ee2sy8DXDdSBcrhJZr5JKEJFUTrxmcdn4z1ZkDCoWrV4dJ1KPXq6oUKoadg9",
  "key21": "3uczjhMJeqwYr265ydhduToMfbsVfuetagf3PT42ZRJ1GmNuWipp4q237F3N3GZkYXTEihgG9fRbNQHDj5SQykFp",
  "key22": "X4oc65qFgzRT2UNuf26fafquhWa8SSo57uB5BXot2gyjLPviekYuK1m6qKBNEt1SCufPBhX5AUmGE4aSKKF9EeS",
  "key23": "4DNC2NFSQdemSGV5Y6ksM55XtUUPgrGmonyGUWVnszyJMte449GHWSHwSVDht1xC7pekBuMhvuYrxmV7Ldwsve89",
  "key24": "4Pcf8jKqEqmajG5iGcr99YH1dHkZ3wxGhyJVEBMuoRDpvubeEWQm5Pgc7m9qXbfHKDnnAKSAeGXfGMZcXFZf96TY",
  "key25": "2SpnJtrJrWG1Vz4sQ4vV3o2HU7tH5scpHPeUTLDU9eKdLeTnbttN27w1idRsVQ5epsgh8h2Wj4UzBdjhPbatFX1b",
  "key26": "3q4rcMakVzqGNd99yF5tPC7U2nVZrn6HRt3xMSVY1CFPupeNfZ3C1QHqPZGvmx7M8zSWXspSNrS5zBhkwf6W5rX6"
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
