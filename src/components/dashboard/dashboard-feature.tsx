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
    "VVUCtQYvemZTV1U6LGq6yhY2hNUkwNfgvxwsY3X1z9zA1GhRWquniBc3xkqFF9LbCEyaJncVwRAsF2qbcW3RUZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q3Dg3zW11NTu9QtN69a67LfZFBBBTbY7eMDtP1phAia27JiiZiqi69RWnDWagc3isgeyLDFNoJGsWscnTHSmCtD",
  "key1": "GoQv2L9DrUNifpSvcus9AmqyPq8qJR7TdzFurme5vdip79WGYyBoegSGhBusqJaMxrXuJtFMEmaizbWdh1CkEZo",
  "key2": "5GvrwMEJmUT9yoWAdsvWJJe4P6SPQZgxqEgMR5eirWWQt7JLezuzhFACktutGpYybBfQqhCfTWgeeXk8ZbJL9GyP",
  "key3": "6rEfueNVoAAWacVHeRJgXJxMp2agieBTdk2NCswts44E5mDnVYn52SXw32ZCS3n5zZG3W8Emvbcw7a5AqG6iRSm",
  "key4": "5kQVq9sDehNaChztf28EDi9xwwnitbfGUNnPzT78tLTcLKuzJEU642dNXnsrmrdLuJhwo89F7iCshYjDtxQyCN4r",
  "key5": "3jhANj2JxArcX5YgCG9UhWTfFskJkXAQh9q8XJ6AFA5gncEa1ZwxEwoV8nAZsMgmaCG5YtWMmmLVw3qpQKs8rqkG",
  "key6": "4BQju4qRdjHa9xoiHEZFwff4rnkzTurtzVTRbT2YFwLby1b4QAN2z1d6NJpMgXDhTGRAPYA5xDBRpLwDmC4UeCgX",
  "key7": "Qztx323ntuzePpPSBVSKzxf2cRqwk6d6h1R5G5jX2d2dbZdTsgftWpXdpg6UKLUMUXVwPpcf2CDPj4aZseGLAaS",
  "key8": "4Wgzgk2LQcm2gAttxkqda9Tbd5SrK1r7w5egDyFyD17SyyGNRKpQVFEmAd7MFgNzcBNjUdqdBEKJojuZ63d8aFnj",
  "key9": "3c5PFiGeHRUpytmP4SZpiCsojWjxV6n8eJweEtYG8xRCyFZJHysGNaWqq99wYNvzZK2abgV2jCPUsm2x57ejD4Fe",
  "key10": "5qTSgovDD8SvFGxYMfmDkpRMxZ5NqJzLSyoZgEip9VG93j8vc4LsiKiE9MYMEfpektXti7esYNcgUeuiwjw3vc8r",
  "key11": "3G9zpRuKtqEZAaoAQsGXarFY1UQtxgAYZvpyRjAgVcCRx7KbkwxBPsgjBRnaxu2LK2bTjTtBjPt9qh8uYvBocceN",
  "key12": "38edqJwUcmVb5vGkS4267oUaq7wR5iMHWGEW3g5wEk819St7B5pe5wCiVzVqrgfVrVQFUDe5zRAUHtVNWpAT39y3",
  "key13": "4eCncuD3HpBSrf7r8EUGgSVcmtN3Kqq8S6itg9QUxid21e3qm3RC7WTGNaRFB1Uvw52nozpSN1uZmWrrfoPJLUXs",
  "key14": "2FK6yLnhZjF7NU95iwDL2fSagyQN1gSetqPJLEgR5dN6BrUD4mjYhzCq2PWrugfZoatn7LqXEnB4i4wEAbKTAWKq",
  "key15": "2aV9QqJx4Gw44VG8QbgbgX1S5K4WcAxvrNm2XvWv6AR2wUPLWjyjzDdDjGuLznGoknEhUz4tfSSKyer7r7E2FAKu",
  "key16": "3hm4XTQacqPsAkbLeBcx7e5fNr4c1P8Q2ppJ9xQfa9aLasbGYdRKP1bwg83iHbgZgPpZG769BKbT9kGJJPTx88Aj",
  "key17": "316m8rDkeSw9vfG63k71PXpkMCjW6fQLs1Q3zieHzePndGQP6TtDkTk7nPnCResKoSU7Z3Sz7TyvEgZGnMGgAWzJ",
  "key18": "rcPo5HV3oR4HjCukJtxUuB3PxdrRtMR2v9TqCHkKNzDuzqLPqQe2RLspZJuTjmzY4HnVJ68CzY8AyUutC8qBBRU",
  "key19": "pWv1TvTDmEJU2adubnZwwEKRJm6PbuBKsxYZFLkmyNpkhExp7pXYUA7MXkqthXZcFVuPzgJNz8o2s2huheS4gSZ",
  "key20": "v57U16BLGUqASwBEV6wZsAw1V3zyW8udpMqzteRfu9mFazAeRDMs1FfGWKgJczqCUWUVu4BPvGtbK9hjiBZqyEP",
  "key21": "4Dkiyz4o4CxCJXtcSgXfjGWBWVZNBiRHYyATfrK4Qx95sVyHdABavzcMTKUFrA5hkQG8bWgB63qjb1KnJ8vtEeXH",
  "key22": "3JzME1ZYJ2wAwshZUFLAKtVjt8xfR1QxfbhvuEUdAGJqpFqEFahU2scYR3Uref5frxvXKDcDH4ox8HED3vNvPTrC",
  "key23": "5x7T5vUBJq9HaUsRXw2oMfs2WEyR7mb72Yd1d9gt6YBRNQsG5GSbmE7smpaKshzt1eNy8DHQmWSkqAu3iWyWmrAK",
  "key24": "XU8rkNroZG2zovSDDeuPhSEZc3cMzcKdsBAwnTAu6kCD9qufUncERjV2xkZj8oMTUfmwescGH3GJCWQdKuzaLiQ",
  "key25": "3Epno5a57PKJP8irymTGPxgEg6ZWhKzdjZpnccB5u99bpHz5TQNNkaEGY3tYAuxTsgFzpkatw66oQePDFqUstUFH",
  "key26": "5r1VYuF2A8xF2VsQo24NQiY8sBtGuVixskhxXP1NVoVKi36HsPnqDnBC1UCjqtudpCgnY52wexzNbnRxCDQn9h3X",
  "key27": "4DEWwX69Xo4vh12kvVd98XQ26PnsAsz1k7wqbfTHmcME5vZEpYbbhwa1tDqWEf961H8BKX7zsE2NWCJfVAhqkmu9",
  "key28": "358LW59rGLcrCBsFURGi7ggN2NZvViox85uwL34gZbdAmAm3TzKyb9PVkrmX5D4YeDX1EcFPoVU9bQpm9FfE7iJc",
  "key29": "3GBBCTgLsNcwvtwQYVS5CufZyJrFWpqCHVJiT1BTDDpNpKjhAF3snTFdY9oYMqgP5R9819M6SQZtPxgqjCwbBfkK",
  "key30": "5n7CuqaQjBFxJZcqpY8a1LdizPjQe74ES9gVkhHAsDnbrK3LPsp3mYZkGj1XGtJQZd8nMUYVGTNj7LRW37EnnfGh",
  "key31": "32xg4cYixRMMjtj1r2ywnwZP6NLWLXjhCpGvy9QJV1uGJaLNVCVSHPbnqQ7JHELN9mfdkVnS4jBWkg6GngDHi9fd",
  "key32": "4FxEgYgq1g9NjQLW2czK7SBvHzmRpCvyvQbzwzYxfYH3qaQH2mquF3krD98p43vvsLtxFkZsoLeRKTDdyfqEuvsT",
  "key33": "4ET5Qk2APMxJy6NWwxehCenmysuU4m9LNEsu8sEp7Hv6VELiQYMNh3mQ3iNHQzvGBHHn59Xu2pbyL6tHH3rtRhsv",
  "key34": "4GPTS8wSVC6rngPCuztCxhU2dpR22encoHZvRq4hFZSRUxK2Ns3zCckC9fWsizRnTDhouzwnELZ6SdcUwM3Td9zc",
  "key35": "55gWRitkrC3RnzmASZv8KtG9jkNLh9w1bNBAUrE9ubbAhW6NcFXEyKpCWHibHCoe83bq4hk7xtkUr4tjGyzZKvrE",
  "key36": "4prAG352FUw8nDJAunrSuvno5mPMGwthuEsLVnkwaSsa4anrd8r6GjwEgunS7Z3fZvwt8puSkZXA7rHReDrE45Du",
  "key37": "4rp1mu6Sdid3ZQh8zUmhJdQWRZk6tp6uAx21usAp7Y8yRcrSxtAL9qeYrzVTeBDzpXGP2tb1MGz3QRCeTgc8oMxH",
  "key38": "4VD68W7QUNg5yQMXYDFPxrY5e51b2XPXAJDTXFSHdhWWg8Fb2yc1CfCQJudywEURjUd4vzb8tbfftEFVn9PJmSok"
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
