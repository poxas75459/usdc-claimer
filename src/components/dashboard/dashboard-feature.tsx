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
    "2r5xMTiQSKHG1jfkuSAyVaQjHWr2wNYKgbmRYxUY6PYauSyZZgWgxtrQF9estvRvFaKeFQxuU3V9cWnhSw5QNoj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Ma8Wcj4NE7GqDqvznSPFaHMpqnurU7JjAXQrNZVZV1xrU2oMpk6sVoDpJNfqCVdFb1XAF6ASLcN7rZPt2KjfPQ",
  "key1": "52jhKGNBJj6vSXpw69KbDV6pDVMukB6Mh2LkLiqPC8wwVLgy2srwrjRVB4iLmR467Ey5jfkSsguvgQtWogYsx1gB",
  "key2": "4PLm1pPbNeGU3EqDBeCgvt7fs9BRxmv21W5etGB1CBuNZucci7rD2QyQXD97tYWuTYt2rmPrzfW47zbNHdumrWzr",
  "key3": "2KnTjFQMU3UFRGPZrwvJxSTU8XioiYfML3TgWKUQ9uw8jBiyc4eywJ6dPGUcVENEKHL45eHqyRP1jzko2huNPC5R",
  "key4": "Hd8VUHrkGW9fbnSbrg3ZkHVKxxh3B66ADPU9FRBN4qZnGM227D7GHhwuhhoFiDRTFRUHb2skedAQ55gAXm57tv2",
  "key5": "KuEg3mfLFmPeUeKYAkF69PBUpN9QbRPrD9PgfAZH951wjJ3SuoBDDzXjmarPjY6pCgbqxNcPQfUmLysJZvdZGw4",
  "key6": "5Tnkxx8hzo52FLvS6ExxNx7h5GewK6JyNGbsaE3vVpBXoLMQG4U1cskZcLcb72ASUoGSKQbL2E6yXFV2NggrQevT",
  "key7": "3SEiqCZJacEaVPtYSHhz4WFhrrjF24zyyN3benQcJKa75KaNWwXKtdNJY6wDPEAyAebAUDYTUahMP64WLwNbuy5T",
  "key8": "2ixRaLJ2WY4aKM7JEBA9mqqyV2zCFViE2XcwBBFZHNbQoozCxoi1tg1ekvVPGU8FpscqmKxDi63Y3RWwCkkC142M",
  "key9": "2v9zZ1GxCMq9jm5xGCSLpfTLHAnEAPAeuxFEwzZxWRdQenAvrBtQtcxQHg7wfFu4uJFkvbbS8wPAH8ypc1yYCyx5",
  "key10": "4YgbpdmNgF8AWJqpfwd9V4KVEBt8tmygVpZvg1AysavXpC5ERvgsAeZLmYC61nhyz83uXHEwR3dGJq7FFs9XBPpo",
  "key11": "GLo8WRNgc9rjHy6XbR66mLwcZ7GmfcavX6gGf5y5XTtYmXwk8Z7UjXRspLotxrCzBDmBFhMVuB12H73tcfDvBTH",
  "key12": "LAD6eKg5E6NMWaCAf7ebRJpeTo6Crd2uwkgivDqfAYA8t1xwGnCk577TKWnhwgn62qhy3xvy6DiEy3jswCm2Jbm",
  "key13": "3KXgSkB1QzzRKNCfiuXCezaLMxrs7nSzjVMaMwBXKsA3jvmtVurrHyyzHe8zmqu3ZJyRz5XKFfW3jAjQH8mW4ZaZ",
  "key14": "65LAV88d7DNqbDGikus2A5TmebmRYWUuhRBziCXf7z72L4iZ4yxJPQBvqLNbQwFKRdEkgVRcVExqL7Pz5MQAgKtJ",
  "key15": "25GjQJxDfCDQaFoAgyvxM9myRCpM5zjdFpN3cnB2k7CCmFmG7jTgbLYKisV3yewrgj34zDCsp2XJ1mz3A1Qpxhnq",
  "key16": "3LjSJEWdS5Q4GsxN7wGwgtRdBPCZfJUVwqZEAVCith4TC8Y6oHZVz1MN9T95KGVnSYbLxSYKUmvD3jkhMcdLveJN",
  "key17": "52xGjhLsepYemufwqg5NxxuTMvJYwKU9iejJWGsYd4DceUHup65adDzjrvmqxdBmDETeEKe9k8J1QrdiRw9xmMY",
  "key18": "5kjKm8jXLv3q7E1J4p3jZvd2kF67i13A4EGWQ8UGLkWWCwWpdZRqmuSbPQkae719cH7Kwk2H3icHK64X4ZH6wsoV",
  "key19": "4T71RyUguC51rvzMnUK9ejnFNM963cL6FaXffxyMLpUhVjuqkDZuRqXrcvSwGKvfcv5PUmVdDbCijwoVSpmABNvX",
  "key20": "2KieZHDwFEzUjguwvcRySyjxTYcsnTKddGVvLWDruMMSEWBPYmSrz6tez6a9zFc2XtzUVHryFbamqiTtJSuGUScy",
  "key21": "wiykjNiidCeaZLiSceLptySxqNk1i4arAdF2ptVk5YKfpGuctux5KvhRJgdTFQFoDT1sSj3KMmKAG16QmHUD8fN",
  "key22": "2QfzzurXqonMPzcEtvP2jV8qAmMV1nBUuDMKw5YLSkFzEqkbSiUFxmAaKoqzFGBNYxsAGM8WtnWoeyu6khZPWhhA",
  "key23": "4AFhSRfv895Qw9GMDFdKc3ejPnBxHaAfcRq53bxM9tqSCVkmtjUHdN7hSEvmYc4wrUtACyXXn8vcCeFuAXMotN2W",
  "key24": "PQBakL8jNDw3BcQSV6fhfWVkQugJg9ec1fV8qaQssats7MHHMD2d8iJS6ZQacJAq8pHai7JorXVHALxr1VSqopa",
  "key25": "3aK51ZsLBiXrBet9MQr6zBW2V2XkmC9szoadTdc5jCZiWDMZzgLPvUPZfzELhmXBUaPqesrDHuAKJ4eDDUWkimSz",
  "key26": "3kcEiDmUSUkocQHPAHNDWaKUUgyuoQbwMf6dp2LimQsCqp66fPN2jxhAbiyqBPNsN6J4qXNKUuGTyZUUAwMZWWv1",
  "key27": "3Lve2FhWRXYTWrNdaMCmMrLvFKzeM6kpPmRcqKxwYHCdodNWW3JtBrWMwoH3zLXLywDYgpQkRqemqq1JWMEGnp9o",
  "key28": "41zWkwexuGS1UhcvtegD7B2fVr6rvopLfWC6N3G2z6CAstwDinGA7qXMgEPpvNd9HfxgrHHP1xbMJU4JuP5FXJvu",
  "key29": "2jS4WLXZPnHDkWGYevQfDmQtbv5dLYaHNdtEUGoVULev2mAPssS83DjJJNb49j8kXHu8xvqZL2C5eVrbW8hd3Uhn",
  "key30": "3Ur7rLa3cD4YYMCMF3ff8CEgRAikhbsBquDQesQ1Gjg8LNaK2Vo65gECim3pcY1TzvamwM8DgGsAFbWM9mDu76kZ",
  "key31": "6262fm6SuPJvQZFhUTqhiTYRKLAqXFSCBmqdEm5gkaqgBMTEMDKBGeFf6ov56yFRftur8uxdvLrqTLftaCPjeWLm",
  "key32": "4QG1DYG4nCpYu2Vuv8DexWYKVeLm4jKMt2fZNTXuQdA7BJnCCHd7h6kVf52j68PPbsoYWeJQqLfw2L6xWMhG6oP6",
  "key33": "4wWQeLqw8vG1eRFai6nvJvqxuMYrjvmoR9D6c4cpQPb7XicDLDjh3fUAF3ZszmX5mVVqMGYBFRN3kdRwvzvq7Fwp",
  "key34": "2R4ysX8uRqFXTK4TKp3gh2LG9gkkujSMqdrcE8G4FYTeryMiEYLufNzpjfAZs62rHm4XMcAWb7feLJeTVdj1Rwzk",
  "key35": "3AFA5NGyouLd6cZrX9LnVP5DP4qrWV7F6ZDup8ThuGa6wUf7fcnrBAMxFY8QjA4u68XSEJZfse9m7LLBg4F4Qz9L",
  "key36": "t8eR9fKaPeQqG8R7p67Ejmbs5XzGcyLMJmTuWEMGGefVPgLt3n17zmR3cYumH4NP4CYDp6EyaFgkuzQBgVjK2rE",
  "key37": "5SkEXqTC5txdxJiTHqkS5TqqYcqqjURChnNL63pwcXN7hEeRvfj44qB9dDMe3XU29bRZpNaQeCD8Yp2w6SPLbnXp",
  "key38": "57EudDQHcKtKUEmPwE9egJYbDKYStL3Mo361A17X9wk6HFMyuLmFYCXsYnQ4VEb3tACUXEhaeSifRmp7HiV41QTV",
  "key39": "2pxEumDsYhv7emLurhWqZb5XJdX6JJw8t2LD7cUZZkg1NNCdexEmjrnXpiuT7yxovqJraaQ11XJabbexxtzKuWqz"
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
