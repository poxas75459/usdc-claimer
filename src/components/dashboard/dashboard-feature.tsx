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
    "2HaXbgcSpM7ZSsQkecMq1qcQwZTEj81qPXvsyztT6fmbnAe6KEU6ukKgM5pNVRKnyEGzS1yteMJ586AhThj9msV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TLzdGRZRekNJMUXQQUgX5ajQyQ9L4w5SsjTYTZusdg16WzZi3Eva9jmLHRcL3HVyopv5AFLKEmaTkgUSV94cVJu",
  "key1": "3kAw6P5tqtfjPZ1zMisSHwi6T6X8cCVVPSL2XfHc2QzLZ3eLXMSdR4dJ2WFiciPzQjoacTyYGx9Z9WDU9NAQMC5d",
  "key2": "3KK5Pa95EL8uWqkCRwWcaBFDk4A1HEQYbkQ96a9bwRSxQSPzs35ZEcZud4FB9mrkSR5G4XYkYuEw9LcjqKvbonPQ",
  "key3": "7G6ZGcWT7rHt12WRZK1VnbWvFCCWsbdrdsPQA4uiqMMXwAMZLJeYbmzSP1VeZJ58skhYLRJSkgDW9WNcvRH3uPa",
  "key4": "2zYLKjypjKb1wtPXVdD2RPtJ4KWYEUayBA5rdCtJDvkQvSiUJjRxNNdpoSFDSGCfZXDweaLeVVLrandQ9Ubzwg4h",
  "key5": "WQ7m4Zc1cHZ5fLKaX5oQGNtWep7XS6RRQECc5DiQFGRfTaWKZnQE4zfVGt7cviD7f9vw24VufCpYcM5WzHBVAnA",
  "key6": "5V6A2mo9rH8odRu9JCkNELCpRyycunWvLPDwGZXP35qwTQ4ATag6JfzP4o9ssbFuBrfQXK4e3fK8DScD9beGqyne",
  "key7": "2JSJUMjbQvGj5KUZGLzN79dm9B5ZbCbU6TCEZumoLS3JBgkfGFKas5cqQwa7Lab1zsPBdvLmfeiWdeQk8rhpQM3c",
  "key8": "5hvCuiYC6y2v2zgfWWHQsChZHZnqauu6tGSWVoEgVdahjdNXEAoqvig9hZYcgHHMRySRVe7qtZKREj9fTFoQFry4",
  "key9": "5HEMit8HqmwwnZ1E9zHjBKDppsDx8HKVHDDA7NtQseyP1nz2VB1SbCcAJYAXYManf8T5ekTy6Akm8Hswpyo3gufg",
  "key10": "4Hz4wVrZ47Kh46YbThtbstn921MXJCK26JVwrkGtzUCDC8ByPN9thJhKbJ2xrFEM38G2ANSpdxC8UKbjJLvaLYN",
  "key11": "229T81ytJMV2EbSbfjRem2s3J336f83edGD6u7HBB1tY1AyLfBmPxGowRCGhA23G3d5rkhGzzPf2H7Ch2aXLUAWB",
  "key12": "5qhi7cPhLdPGgHXxNVTHJyYSQPYi23MBjZPDQnC94pmNYrDSEhKGkDT8Sui9HTZSmKQH6TfAhLa6EUwGZZdzrS4T",
  "key13": "2jsfWY8bXz5aGdaA4T9xJ2JjqCd3whPnrwLpwsHtthaxPRqmjk2j4zkpSyJHrJhQUqMgcvYj8tnRaQzgEQmJyFjD",
  "key14": "5CqHWYRCCCM7xuDLQ9MjSYFb7bP3Ug5rx1HZPkbUJRw1s4nhsPSiQN3w3Q81cxxTeGjErkeuzV19qtLixyQDeACb",
  "key15": "4mX3oBZbzWWWfGSNCfmgaRbYkUk1EZTBpgxGA38HeD8kt463qNhNnauYWxTSALovNkSpoATxmPRBQwonfDFPjUXK",
  "key16": "5iqxubvaMCGStK7RF9kLURs6JKQpNmDERqhX3kfcuhSTFWC2T2RY1UDmUzgTZGUfFkw8AbzJDvAi6q5GJ1fzMBrv",
  "key17": "35YsQHyrEpkTR39kZQ2xufr1Syjrh4vzutGvHEeptibyCeoc5fj55GyPVNhiqfhYyGUDAonzRw9eWP9VAZp7f4ov",
  "key18": "5pxKXgnhU6fTfJShubLfQVjFPKxEZLJdEQopZSQNdg8hzij2WM1CTJ15kK8h5kyUZQqvJB1xfJAsLyuELKxJDYKu",
  "key19": "3Q7TgD347MLVTU5giL8KqBCg8BAtdaNxN84rvb1RowEbThgg86d2MzK9ZLcUwfsoCDbZVuQcGTB8cZ7vBvaPysie",
  "key20": "1cjVtbaodevcAg7CUiJD3yowfXYh1gnSxGYiFBqMy4vmAKGGCPUR5CSNB1azmw3YLWEHZhnkkr34JyWZiNqgBw8",
  "key21": "4FR3bFQ7DBqCD5cGkzbsv41aA7oisJ61BjksSvChaDM71Xf9LXgvaoWykwTPmccpWd3qBxHrjoTSFMqU7zNSJ6GR",
  "key22": "2fNRjoyKryWGuHUV8BmA4n7gMLc6gyrQt9f6i1F8Rtc9PhAnWboveRpseKQr6dDVscnmScquYym2xpPr7ss4hSox",
  "key23": "3DcMMDsgqbMX4UJzxNgieNKxQG9cVpGhAXeEm2jxXNDwpdHHkzUo9g16sA4Rbt58b4nrmY95AeYc9eY9DNf5Nyk9",
  "key24": "35mXhD8mJ62GgMVbmMQ7aC1SHK8mWhCNYw2gzco6nZGiUZMKuKLX1omDbj6BcFnZkNVJY4gRbyiCUURdt2rSjMfu",
  "key25": "hY9b56e7PsHoGhAo1uY34RZn7wu6MFzWfTkyPjHDbpkQXm3ticPYgdubCT1czCxwS7rikQS7t9JVKrTfqyRWFaQ",
  "key26": "5a1LV4K5wEwzZg8ypLvUPyPSwbWZNVZNtQzbxRbewWEeFCp2YYbn9iUvhF9qkUTA7ocF8WJZFzStPcC1VFwznBjD",
  "key27": "5nThVY29xxHT1uJ8H1esCT7VSUA1z3jE3fzjcExwJzSteb6wkb9en665DS4GzgCrY41Dq9tUDDo7xAB8UgLFdnN5",
  "key28": "3P4eHoi8Ub2EwkDXzDYwe27vYSb5vBZPyKupj1DBrrdKuQ1vwB4nxeCqNHXwu5QkwcX73dj5WvKZVUv6scJT9SDn",
  "key29": "4pnQg46sBwTdFEkGsy1MohoN7Znopp2BX6cCf8mYgG8o5SYRubJLotyrnECG9poDsSi4i3HJSVSUkQopuMzSPWaD",
  "key30": "2uc6q3XikZguSkbGJiNQ1kS5d5qBNV98YDYC24oNboopwr8ETvK8rbmq1xkwN1bSHEtZezcFjfewc1acJfUL32uT",
  "key31": "66hNRGLkSs7p7eAxH5TZ2A7EivoHGgT9hc9DdKXGYoJYc4PGmjzAtF62KEWDpY7BMH6UwZN2A2YEjLDq1Dkr6dhd",
  "key32": "iapRJBAFStWyEZXWVQSNrEHB8BL3k5RFbjZeAMXzwbY9UDb5chZsnWUkGHEpBmB5uuEzzuaY4oD6Dp4taaYggrC",
  "key33": "5M3rdcnyGahuQkBQBANP772H2Z5XF3jwfqiDNHMovjJSTXwTbZ8JyXoP6gZwUjTXbK6vSwJoT19NBTsfLYQdoHUZ",
  "key34": "Nzc62rxCfyFZua9P2z3X22jXxH9ypzXRUzCvd15wW1H7MiQH1bzRFgUep6xyJCvpLAzw4LT63qnpsemv7HaS9Hs",
  "key35": "349tHQAA1oxLsmnR75ati7j5TeiYAzPG5jvpm85UbgqyX5wyP5jMdFucAiskiKqtTgTPY2D2J75TFEH17VcgUKdJ",
  "key36": "2QcamM3NkCbUpaN2ho3yJjJ5hn1szp6HomSdnMNkGCzQ4LSUr2whZoKeqLM1UFH8ZWWLjhwYC8kRc4pRwKu2nfMh",
  "key37": "4shRv4yd1hhU6jX3yDR1icUtQs1zzThvgB6pb2ENDnwoQUyG8kfp54kez41qCGXHd3BwmwCTSfvtTo8t1pGdAqkX"
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
