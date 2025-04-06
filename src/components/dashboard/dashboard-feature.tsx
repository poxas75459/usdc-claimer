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
    "2xycfNVHsVixPiu58wZcgs2RoFtZzD3t3dfeJW9H92fMtvX1VTAikcW7NCqspVEz3ZRR5ChSP9cq6E714wgiuGhQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PfdBDR3cDshPvqNccm1F6d5nLFr14eyqXbUTe4Bt3Co45VieXTSYwZTZzoERydJo8buNw7NeDoEM7LSBTQw2y2D",
  "key1": "XNSkXPxd9XkmspnPTXqfCmEp2ZncxHVqVYpvxw1fJ5a5jUxaHFH3ruxonjypfuFWtCGA2zrqjoDjkW26cj2BFJk",
  "key2": "3i5inDtZ5jvXe8azkaroGKjeDbtGQ7v8aVWtwtoLiEHvdjANxyNUEs1bgMV9RJGVrfn8Hkuk6VZ7MSagiXG31LNx",
  "key3": "4MjKrqCJu3ZSgUcmHrWBVGzaVZaC2NrHSkM4SgZHczMaHLRtL6MB6CV7MfgBFj3ZXDt46wJPQvN5PHW1W6HM9bmA",
  "key4": "57C6UKFSgqpp1dSopzK62gh2ugreVT7XsjW5SmcgihyNoCZ8nHoffzP2WPa2DuggB2GKvDcFRduLNeNcZey9AFKz",
  "key5": "4W8KzqrMQLeewwHivV6C523qBtGoZrX5xN62C58eDRQmN5SjZAF6g83GDQkmKfwjTQuhUfwdmFZAExBCBmRSq2Lp",
  "key6": "4Q99SWhoqK6HPUvp1A11h2ACK7wYgU62iy22TbabU9UzHLHMvh7Lt7WtRmD33g2fvKQrQ8aVJmjCkiJy4rUt4o8e",
  "key7": "2gMi6qL2sLUG5UoibrkHdaHjuAPQUHTV3RCJ9CXHxrrMTm89Rnntja5xgQ7nmXBmhovrvTPqjyQzaWpLjTsvFW7T",
  "key8": "5M2RtYuVxteEsQP4QAzTJ6myUBu4BUtw3XmKSE4do4cpF1jhFYjHpUPJH2xt3GHtci5wT6bKVkw64nvkPR5k55MA",
  "key9": "5S4Dvht7WRsRQF4r4BfbesmaUuFSEW4PEpUJ9rLRUgCQT4RjQ6DAshugkZG3iW5Kh6UiESstiyv8BzCvDrVXLwXg",
  "key10": "4gYUDPtdtWtBWJZmyUAH8fnKpvujfgQW1dXE3Wxj6MwZ83ATxzHQMRyNbdpFipdSnqWiTo8uPEbnBhzB57KXdQMZ",
  "key11": "4nqiDzZVGQd4NDz8KRWGGhJrfxSjBaRjUzKCo5Trp4HcxcPsiZPq7qZNpSWDgVDg4wzJXUAVDGYB7rBwtPneFZVr",
  "key12": "4GpcPa8Ht7AoRy6dnGDMdqYkdt69vd8UBHKAX1yPHai49WqehpfmGZpe9hfENzXMrS6aPor4RpL6bPjZYX91uG2X",
  "key13": "2JViArifeGEnBxG312SqWBRBc8HfVKaxSSzXbRse5NbTsUJ81GCJ4exgJ9ZfrLdtjwUNwjJj8ygKYZ62kRbN6TRH",
  "key14": "2F8FmLS2TzBN4MqNhH2WMcUv8EL2FWTuqZfsQF9pVtrtDQCAAgR4YcLE2faq6WzEBUQTR3ALDPVemZZGM8t2QZTW",
  "key15": "3V1rzXANv4njmxaJAYYv42aHR6RiPupSqUiYGfHt2mhGd2Ncb1n1fY9nGrJqJSSEViFXvJ6ZnbnnsTqYYTuo74KX",
  "key16": "2Ara243n3iezHK86HpR7Dvgz2MPCvtQaWhXrMurxf44B7apy2f8wBm4DvEUJUXHuevmm56qT5RhMchzfsZ8mjdf5",
  "key17": "36GPXEQZ3PPqsVzEeMj9NpTt2VStr2wx3izmHSAfUPkaYKTNgV2JffbYaAS6UQw6tHkKYbmcE2DuP4uT4f6AdvwA",
  "key18": "6XiYi4LSbYFCHSJTKxyPnX5dGGecAX3KBPBwdppsVLX2Y1CZvwHatvSB1s6xZsBVDEixL5UDYJKUVHU75CuFkP5",
  "key19": "314Z5MhJ3SHjcGdDpjAW31svsbfQTCE9EQdsRYoK6gdyhEVLxP9NAhUusjeM5e6h2DsUWCFjQNisZ2XqyeUMTLRQ",
  "key20": "3R44jD25xSYpuJdqU2Z3p24ogPASqboEGjh2JPxjqRwPJHv18X13CrhjLs9pNZVMsLMNX23WombnZHjSedr6kNre",
  "key21": "5Z7wiveMKLdzeyRZhZPDKEQD9k1XD7KFMjxmcKhAN2VAUSiYwFQix2BnqYhhQFGcsWKRHuJuLwijAQVd15vz91rc",
  "key22": "3BupjnE1kpUmzDZJMjj8xStXpfpK62msQwLN5WLSmGpiGZKrtbn4CcLfwYBd42j479jdeAZhCYB6NxNGM2mRVQgf",
  "key23": "6pUsqNNK9EkanCQsBKaj4zBysRHiNwNJ6jKHaHY1Z2rVDtaPAvni6nApsazeUnhpHJNzuLwzYDSyJZj33Qxso12",
  "key24": "28oEagi6MGyTEa7hae2GPzVYRHCcnckVCowaaXcm68Xer3srdDp82zFpA3wSKckDH5zCTZRshik4sVpCZ6r1fGiA",
  "key25": "36hkG2odEFdynVbB3ot4Aho6VEzhnHT9KCeKmctP6RcRUrnErpSyuHzjfQ2aCq29jQ6N3YiLwbsgzPkopADXurBL",
  "key26": "2tgi6gp3xSYUaNHZakS6Ja95e3GH1Ls8apP4UWUCqHAWqHHjqrt1CzW8ckG6gA3Gt5x6YZ7TjhR9VE7uSvFnHUQo",
  "key27": "8J9d6gYaRkQ75GYcyPkske8EwH51XC5ovkwtKr48FEnXjmY2V9mo3TK9KpcYgVnFTAX7kf32Cy1VAj4MgbBsEHP",
  "key28": "5W9siKNXEtLSMbHCtnxkWiCcrcsipQbaNRbhD7zDXbUcrSZR11cHG8JCgmugwk48vT1h6yb57AsrtCt18XzAG5S7",
  "key29": "66EcLN1xFikXHZs3TvW4hgzQXvvwoZSYHvmiTruGLtVgD2KgTFoos4J1MApHufr2VNHq4VW3oTc9YWKu8W9RkzVa",
  "key30": "4T2ZbAHCcCpeEAeZRBtqzTS4pHRSRrf28gyuavVbDu5TmPXTZgD7eb2UJSbKFAEptcen4h9SEmvYpD2neajQKog",
  "key31": "2xy3fECdpxy6DwgjW8xQ8VQJVQkFBR6AzgftJhJrzG2oc63uABTWvzpcSHtAmB7Dbce5kwy7Wnidf8xMJ1PQfeAq",
  "key32": "2d5ayRhr1g6rrsH5eJ1B8qgJamf1k7sNBkTSWHrY3rZXMUc4enYFVmsxkXDruD5Zv5BiwK3gzAnNoMsnfkXJGRPx",
  "key33": "5bVAF1Kdh9gc2367dv7zdC8A3ZtWuLP3Pu6DJxtmgVZP5Qc1FXoXQEnMuK9mjvGJbKYHJvJNPW6cHKTBTNjiir6H",
  "key34": "5ChjGwQsYWxJqrYVWo3hScArF7Dm5AbNDrrqqQiwhDaSaG8TxZvfkMhhpKncgautG1QYjyUSamPgRMuBVrQECXcF",
  "key35": "4iHy4fAh9BohuWd6XzZGpshwmh1quXWbxF9z7VxW4Bn4sVP1wgnuW62aLr4omyhg3ZdgkBf5FP5bw3v1CdSXfceB",
  "key36": "3xVN278nGCFpq1xwPFRTZDWHm91M7bDPJaR9xMfZHQj856Mw1wouahkqD5eswR5JtbqJvWBvwD2KPL7HFEBAhKGm",
  "key37": "4zHdEHC9wGvGqCk4BRHHZaMb8k1bnutiKnGAWr6GWtaWYBzsDRyf7XNg1CdXULc2vjCqcgSGcmMhSBXRdaB8Sc9u",
  "key38": "5z1Ph4Swng3VwRvTAufgWZpiABoCJQzeXMatRjyFkF7dEr3xHmB5EjiaeRi83pYQhkJAHKFeZePx9ZSxAX9Kf4K6",
  "key39": "5AUnkzDbyAXMeXX4hrHwouj8wWdqTgAsMLMmXTNnnvsjnApf33ikZ3NSMvDBdSCQ8cfDKTDMQQto35jH7voj8obP"
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
