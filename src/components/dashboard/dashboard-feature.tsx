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
    "4VHiStmkUqWsrUD5utn5G8kTC1jAdDb86oKzYxM9bm4i4AXB5uAhyasbaEXt6WEnCDeUcjPZWQqyYWEi2BCLEHXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QjMB9Xpp4V1vyUa6cUmebnnkdKPHP9u3F52egZYojaZuh884RDNMuTsnaMA2hmUnyqeSCThzbkseYDXArkn5zqr",
  "key1": "3Rkgo7MvS1KUwZTTAmuqDuKkdeBMY4QY7hXqAPyLnN6SyFjwSnmDgmXXbi1jvgF8Smp1EV62C9ge1fNVrdr3VabM",
  "key2": "66fpt8uem1idXoVsE3muWQZpvpMvXg2UzsBGK65d4cUQZscRFVcYzYLPfLsb17TvjiRRaQMG6EkL7j5vEFRfQLwG",
  "key3": "4bg1m3kVXMW2TNvLJPKRsRStUMnbP5eXL4xfWoPoKqFhoYhtm4s7ay8iRnffAewS2DSdbWKCEA3eZW7FsGmJVCzJ",
  "key4": "36i9wFX6mx5P5qBrRTJZiR8ACwMSuvpvsMgyGwXVC4L1sVCsAKYDeZeyzEgbqaTrzT2m7RjsfhTLLNtAGwKfHQnS",
  "key5": "VYdfxcuzDmBcVJjDDHjTuWHAYujHrZQ3nXT5PG7EeZe55VgHr1ZMzDijrEffej9xg7zNh57SWrgwgwZVr1A2BXa",
  "key6": "3nGysUWqQ7LjmobXS6hRzYAFwoEF3yVcQaV339E4D4bVFa2UBLSYNckTdu82urLDfVQb3TjKHHmEDdbTNLpC8B45",
  "key7": "5YWPn4UynamExPhSVUHNcnozQTA7HGbMb8uvPuwAZq9R4KrGM2bzjxYLYsnbPqGeKjJiQZjWgHZeb9jXUJnq7BPk",
  "key8": "4HbcbFfbPUhxHTerW6bJ1bWPmzNM63JdyjCzaLhhzhvGpcRU3W9Vak7yCS9j3NNRzd3kxLfqdoKSZMtescpyWDbU",
  "key9": "5QN5wQm48HH1AjLqHmMHit2nQgB1UzbRm4PaaWW6Zn7g7HAU34AFW612a28GLb7fpmLCZRUtLM3pHoxtUB5dUcQk",
  "key10": "4bfbnqd5vXdLehwH7G4uuDKhMGctYy6XyqpFS8uFELiNP8e6evvY963CpMKbK1Q9AKiZ8f2YGaytQa5GxHxzjAnq",
  "key11": "4w1JCiRenBKnr2y3U6xApZdcmmFPbNCxBBHGbCog9xoV7dfLf9HACq5r5jUZ7ktJ9NRRnR5FA89ULry9BJXBbshA",
  "key12": "2QffNss6amSmizWBZzjUFtyVKer3GyFDzF4qBSpPx9JRiZrPL8MM58gedBhkBvPRa2spiGQ5ydi7D89ZB71jA9qN",
  "key13": "4JLEu7Ey84ES6QtaM4Qizhu3CSY9BpitafChMAyPh4HFfet4M6RpA2uGznSiuLe3wDp7YfDJocy6Q7DXVQ5PSM3B",
  "key14": "4pDpemVE4o3J2aJGWPzSVrSeDVWgMAiZH9Z7VWdK9opGFMmj3hhp9sfBHeJ4zf49AFPE27mSPVVBoPnNoWeyKwni",
  "key15": "2ppPF36THcBHZXX9TtT8PfeL9MzhWNX6SRTASv4EaQyGHrtBMYt4NMAKoirhqkqim3VS3nmP6YyXdED7VoBfgjKZ",
  "key16": "5eD3kVd253kkLb8g19uKR3UazSAL5ep4gR4HoAxsV5pLZHpZRqrzCZwgZXJSaQajJ2FNooZMHDkntmacTkYv4urd",
  "key17": "5wRUPzUappVtYxkAg4SrDcfhB8kswEnLLSgQsgP4Q1VoNJ1pKvaSHBbV89v1b6GVcMCsi2zxWmtRXKJUiGcdvK9J",
  "key18": "h7QUXP2viRUWVDxeFS4Hx6aJQZ59uywzJvgzKWSPZHGSs6CY4uz3yHPosb32FxMxvxYreYJQFtTXS8ebu3vxezp",
  "key19": "3dSjxSZMNG7z2ro9PWwbwJ3LkzrytMkEVECj8LRYxAKww6uTgtN86aUDVt5aCZ7peUT5bVrDr5P9FvXKsiTedMgt",
  "key20": "4L9MzjwwRpCfndFCrXED2KuL9mc9w3gBPBveYSw8maLk3F4w5c2V79BJv4v4dsavS3n4m4A765XDwstySu5CsBi3",
  "key21": "4UudwTzQ2oVQgkydDRFJRVMeFD8MgCjuSHx2eyCC9EptYzKt6ZN5qhYxnqKLhkyNXNcYwyxYgaGE5bB7uTGzVrgS",
  "key22": "2cUWGXfLwXsJ6E8TWRG9Diw5aXWLLecxDamniPbTvXqQvRJQDn4FR44ppACfGqCuPF4xECz4oU6uZMKJwBPoND17",
  "key23": "5vwS1QgBtyMUgR4tyxxEHekuisHYf1QG8ZWLHq8hwPrHAPsR2Wc9R3ET8oZXuhodcm85zbDcai6iekY1GyjgjW5s",
  "key24": "28hLL8zCL7aCuuHPDRezhzSR7aX7yykAc16midPXVooPwXm84RMx3MKdxK5MLFR3djPJ1To37TgHiJzPYToQ8MAP",
  "key25": "3EBNQSs3t37ABHbsNgdNaXyYFogi78BStTrSUj4aeFxdgPAnyUBK9DijCXyKVpQwurJ54W8Woi7iU2fe4uGnWiqH",
  "key26": "59FwuJ4rpKnGNf98MT5cK6akLb88XqaXjVW16bm5NUqJMytvJAfD6FMH4k6Nu2J2p7urZKp2mM13nTvFPTXgavtQ",
  "key27": "3zgpoNWpHQ2N15BfPawKNe7AkFowM3RTBv63sSuEpxv8fm1CXBRXBYYdnJabHzfXS2MbTXz2KEBF7ZcMXgA7AFFi",
  "key28": "2KxM5J5Yy83nPzppjNorP4zg4d5RAEP6CyKLYKVFvkCUX4EUv1yFLV7MJEUWEZ3489GiK89aaei8yGuwrZmYvejQ",
  "key29": "3hFnSqP5ecnaTaJXYixsqKfq6d7myUuY6kRgTQUmPNjn9dZh4i7tArWzVpKR5C2gHKK8kQUA9vjhyVfqYcpS2Niw",
  "key30": "4QgxgkJTYX14BBUUKK2p4NzstgTVjPF7Y8ydvZ2Fd8siWUSGX2Ey4n7sTHxkvfuCSRVgQd8pb4BUM8pwau5CFvB2",
  "key31": "4atCTwAzhNEb9qEVK48dKUMvJPhzNk76r6CnoP8Hg3qBHPn7msenQU1ReQYP51YKS4cgkcCWY3MG1mU4feKXZhWC",
  "key32": "46YRqvCoJWrSiQc1QV7b6hLPZr9aw24h9bPFAQCKaxGtHx3xqTijZFdUfEDZ3PbZEgwpgDeb2PcgPwLe4P4xH7bC",
  "key33": "2HHETtJ3pZ5o9WyaKGapDoVfrCpJzec3cFza69viRjaRiSQVoujn8qkAYmySEvrExE5Ky7MBJEYicuTNRHPybTpu",
  "key34": "38G2UHMPanZiWxwGTFS3H48cG2mxoB4AEbRzcNa4VaL1ciAsgGu37yi4wwoCW2iYutRgWkjJVyGdoPzVG1Xc1R7M",
  "key35": "4HaKELQBQatq3bM5kK63ffBcr7HJ1rCbJGJXT8yHmBugyR7KmS3wK5KB9XTPvAN2CSWoEu7QHyVVrRRRQRiCyFvK",
  "key36": "4Ry7F53fvHGU9uNCdeaHV1XD4MoiR2usRCZsbUiQqCYTvz3zR31LwDzr4wxTTjHokN7vnwqpHBtkzfxXmKcmKd62",
  "key37": "31Q8bQqnsH8gf8CMuQty53pbMco1shAj2wBujkxUisR1CdSXaibyW1k4NgEaassEn11xdUR5ggWPf2qEE3EGvnzu",
  "key38": "4t5Nnd8iJDoaPuCatR3TF4JNDDtsdL1YGeoTKhzCi9hZBGazwEmgbTS9ropMXCpksDNoXqDsseJDn45VxZZTSqan",
  "key39": "4gu6Hvhnzd1KaQAtSxYqZvhKAe2Ao9Ken4RCBwfFZs5uozujhNpJGoGmqjJqB6dWmH9opv389zMMT9tZ6h5T62sH",
  "key40": "4yTB9gmN3ZzqKoMheewiDd7vqhRWD72fwzi3oXBm5genvwiFcnEabzcBP9FVncNqXTXo7qhs9LKrPWQ7AdJTZQYK",
  "key41": "3amxm7potTewrXneRtKrj6S3tn9wNEaCPU4zzX6MFr5wYXg7ewPZ88YBo2HB2pqDNDUT1CjCAGNZJJyCXwP61aQm",
  "key42": "45o6UCDpGoQcMjXTidYu26KHnAHQLoRSwx6bkbse6Bn5zQd1XAqoTSiNtEmSSQpWcqMJkvnWXqHec3JygmQby45Q",
  "key43": "3hPPpCNmPZTdDbbJpaJfHxMNyZtV38UJHRZXTbdVS984DQkokYp1ineLtPtXQLzKv6mPMtzo3qTbgQxJSWfKv87p",
  "key44": "3HeC13EQpZMhMho9hZLr9JewFk3yxVuqS9onBqWdQELiVxZ7f6KzqSSGew1XMfbpAUqjx2318jb3nxtFfK53dNCn",
  "key45": "4hHbm4xaS9udzZpiztBukY5VxgXtGjLq1abrTjBje1mfEVVGE6w68tS5zzj7pY34e9QBqmgVfSXk3GGHHsyCUgBe",
  "key46": "2mC9yhssU8qEokA9i83vHxU8hRE1nMQXRHtqwohxvW3diPmKWzYrdKD9oWJ6yWbtaP5Auc5QY35wUJFXHhN2JGSm",
  "key47": "4UeSNJf6Nu2xeCL7pcXvUwpSwiks1aRCrnMvas4BrMSH1TgsBT3Wyp6kaSfUmyUDuysGydtDbYiuhAN33wbwQGK4",
  "key48": "43odGCmQixsA6kVm1RPPpKXCw4zEFTrvU7ACaJpd7JXrFD5WVE6Vc4L5hJiie1LKJ6pZSbMhwQ4DhyDw9vPeb1tL",
  "key49": "5TeNKkJDEttHokBwf8r1ku5WXUGy8WvUucnNMsMmJEo52753apjA9EtAjrQqmdoVqFZHMpW7PZduD1EWhY8fKBG3"
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
