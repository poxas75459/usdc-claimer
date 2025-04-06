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
    "4G5suDZe3sby79Pm2iq472J3YbdD5pDKUAWJijEYbtwz1Cih9Bxa7gHTuVnYMWoDsy7gtStM1A3yUKF5xVWQGAvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FkQxFuV5b5DoyprmqcdcLMG9cvtZ1zpN3mj3ASSWtxaJfVM58bVicirxEGUgP5VMjVBdow8xGFDYWihHGxCSJL3",
  "key1": "BXBrSWAwDeQjqaPe2BYBPGdYeDC1xequ32Vt17iBREBL9C6k2HaSh4uw2csgJGoyAunsVt6KYCMLbrXcDtaxaRE",
  "key2": "5wUvK5kJwrAP1uhVBrcDwB576Z7oATTMjsAdKQHfBZ7pBuqP2kHXjwmj8i6fb4AHMw7YjcrGjYoFnjpSdhXr5AWS",
  "key3": "5DgbgKQUZkRgsGKnEUjrfsC2dFoFer5bHoafkWWLFvUhDkHBiUbtTVWZfCgswXqtozZEamHdSTuET74YDyFuzE5f",
  "key4": "4Ghz2WNPs82QszvSpsHF7nuSyMmm5EkPL6gQDPWCBrKAAWoEermUPYHw5N7H5PBVdjYb62KiuPS9YC8A5XteL5pM",
  "key5": "5ybSFWYfqQsw1K9f6h1hkLyK91qezQM5pWGez7pY4NbkzqL4HLzyhqMiHpxf5fHwksmnmHoxhGFNWzFrmb63Mp43",
  "key6": "h3NmWgszBb66xVidKCsSUbYLwXUHaHxBezZT7pQryKdyjzd7BZXw1gLFoxqps9wzrK32F5CEyomvEzy94cFqJY7",
  "key7": "3nMzjsSZjWyzw83FxdSxiGtHJQpQRHWz1zKMFU542QaofHeJ5UdhyuiogHPv5WcnjKPzmtzSqqonX7M2Cu9pQLsK",
  "key8": "3jownKfx7PD8G8ZtRsLYkfXDnL3L66ZR6Rja38jY4g1qm2f7TwzPMEDj6MGj4RsAuKhQUFpMhnm18HRq3fhFJF2w",
  "key9": "2MjwDPTC3Fvvvk7B1NowgLKxSYbR18moWLpGgVrCjUhuFq7dQ2ccXjXDRCUg5RFivMDi2x5WQ1p1W4vTSEzf3Wuk",
  "key10": "3LSZrGUCt9bB3tbwHqsCMjXivLKzFiK6RArgxL3sPGLVR3kZUrcbcffWg8v5KgqcXFVuaNt688Rf8XBbiGxuQLa9",
  "key11": "3YJWWgB69yD7QWDuETzPiqAX7B2Eg25kJR9tLXx9yBN38LMpMoYho6dAXA2AX3NxyFsw2CgcdUBnwWMEhZs4WC6",
  "key12": "2EobBBwjSACpCv9RwBiqzcZRQUb7EpTaWch73jTPzoYTGKicEijGs3dDhpFC7oxNBsKAHBfHpgmttGrtP3aMeN8G",
  "key13": "5JEUmGxfebYhTA62Q8GSo1hTDB6WcGmNKpym1B9LgFQqdAK23oWy9KUGSoNn71fd38ZMjs4Gm5nPqePynXHUKY7V",
  "key14": "4dtJfihPwqgWXDchAgYQFvpaDh9cHXvuSga8AATWokiS2b7SNqADnG2zfS6nuTuYU25duUjizTiiZs8XaJ82MfGf",
  "key15": "5hwbXsBHqSmxFt3q7uk2gGGFr6d2BTvqq7dwWkQ3ERofxDu6WwENWDdv9WEjBf9WR5gzXDu3wZjWfKFYuTAzEj4F",
  "key16": "2tNRQTjquxUvPU4TtW8LRyubPTzEkgTEvRCZnxriLFvGzNmyEZz4pjUZhXiDVo6znGmnR6W1L9nsQCtfxF9qmHft",
  "key17": "ShVs5mJX9iRBuF595kTFB7JDptnJm1P1GHP9W5ybLBmQxKg3iUBNb6qqsFpdRRwdy7Qqh1EVSyRPLhwzHbrCESf",
  "key18": "3R2XrfJ6JdACG7xhLXeDzaXycUSprESo9mDZdm9i5DE9FtJCKmTQHWDouGWVtg3wR4HnSKYU2WWN7Pp4HQRmNMc8",
  "key19": "2MNsWEaokPPi8Tg51WzxYQhUkowKhCVxHt5jWiL79SXuuV6dqY1FhWLQxzG1G2TMwUq8wqWixh8ZgnJH8k9Dfmx3",
  "key20": "49VvBhQMwogLbvqSfchcYfyiti6V8mZd9yPKqpZLSaZbKzHFXReZRUmwiQ8F4oMKmqSurLhADGQ2Jv8KMEr8eSZj",
  "key21": "4k9DzqhMzdN4XqWxWGDYVPUsEGSTja3i3QVE1Lxnc31C3An8xw3GHNuUo4nSzV5uRuju8KvXFGW9Twao5M7dPyV5",
  "key22": "3wGQqmjF1cUCGws2zaGa7rdKEkbhuFNrHQ6CpmVEBN6Zonxw7ED5MWVwQJoqtq1Eq1FAEDxW6REaTVECL8RLSv5j",
  "key23": "4pqk5fFzZphvUECLyAtkTuJWEJdesmDz3dSUQ2k86AhYi9cDaNytRqZ364kimdUrYdjMgtuJiXKf354eSyB4ZZkZ",
  "key24": "UfLc2ZXELzGtjRW1bc8ZtvRogD7DjcTVpVyw9h3epEuNvU8mDNmm8khzaz4sgH9L18N8HTH8mk5oALFhdSqxWP9",
  "key25": "5dpx6GjtpcCdK6bJUcyfhht5kcHtMVtopMoe4U1NCgPgtPecdZ6LrZPJET4zSpurtqiXjGjhNmSmy8ayDesMS1He",
  "key26": "5z9S6MDiTydmMF1GfaCk8DLCjsfQMpDDYkL71k5XXZcbjeFP1FYnJT5aQiSoXPTGqEr9QFMJkRYYDhyCsjykKP6k",
  "key27": "4zxNndzBSizcasj3hNqJi7XJs8U7nmaBLGvKKLhuYpfsUKNowS8vuc3ynxrdmThh1pX5s8fW7RQfFqjBF4rZV27p",
  "key28": "2dSes3APYWBB24z22oaijVrykxpL3u3cf5GuZKpBjoAcB7zjoT3EY2M2NiCPPJXKZhjsKhdS8yGdmpt3NSA7c6wv",
  "key29": "4YUkQAgGwQDvaLhkDbfd4seHfF2MsdXBw9YCmKvj6CCbBM49orZvRPbeZy6f3k63Lrs2geHsRWM6E3XbcYeGopqU",
  "key30": "ksyUWkSWQG6qwbYGaDm32RUcNvZRccJ9pS69PDtrTU2SHJz54kvcn2GVXU8jfNsiTaMFRN1CqiiLjk9hnuKVJmv",
  "key31": "5qyFx2X2z6PFaiWErAdY8bAY8rDCgDza7yFiuLime7ku5ngqqcT7n3oyg2uAbsraqyP4QrTscqy94fTiw6VR3R17",
  "key32": "2cMkVgmZdehoBm96cK3r2d6vxiWo6mEPhojFGJKLK3NtgXaYPGaMSAkeanwecgzYS4cNwkhdUp2ACMdqArQMsMBn",
  "key33": "2jFQvXoqePpXc1G9vFCbFjBiBwvd23AJEV3nPcxShQUjwQAyPGgDeKaM9UZ4UKFoHBug5xEpDP8yrePQtnzUjE3T",
  "key34": "5Yw2KxS7HkKKSSm7uRh9GHBprqAvkFkWCkVZpGZ5raYwx8BrJtvGxNvJXxUXWPcYxLg3vhdN1RmjCe3Fo6QgngLx",
  "key35": "5sSnht2Kaz6a8jaAM9YR8ZdeBNid2vYrEyZkYtWqz5n5bWVgtaY8uipf2GdKX2P3ctMmSd9HdUQEVLhevh92knwe",
  "key36": "5YnEpy1udnojmR63p1N8H12iPcwEQhdb5UrhqJbYz1Fzn5aP9ZVGqhas7D5KWqifaYUWvfFDv6JgJ5tmHqQxD9X8",
  "key37": "4CAEB5vFne1r2g8s4iPDrHj7CZdzAJGWNX1mVGpbrNLXe3n8pGRWToMpqf4RzHBNrJVz7vgzDdfiEnbRb6e1Xw9Y",
  "key38": "2jK6vWRsbZEtiwNSMjDcHUdncjMEQFSeX51WVZfXeVXFpdv5cDG6Ay7bmB8DDyDYM64rCpnSBMuz3MGBYhhQXfaj",
  "key39": "5hJDHs9KsT2YntFDwvE6qaqobDWMK39RHX6FvZdPteMYGZpkmCDkwW4cTXNKWUsbSb9HS1bCisj6LgGtQWzL2PJp",
  "key40": "65sFwyfjiu6KFWkxu26Vu6azG591QCH9r7stRWLT2zJjAscfSFVZ8eRB7iXgt2jzVjuJYQb9hLc5BFKpc4h4QPKh",
  "key41": "4qJFyzUYXczQiXHSusXmxHnxffJ1qD5U4pSzcs766QnL4MDh1HaH4GpCpMwFYTxo1a2xve4Cb4DMBk38Q9XWu4GY",
  "key42": "27bwUjDHMP9ZhakEvMf2iqHAbKKBqrNNgnEcGSq5QnL5M3pVry6nysfjbQYRREkZeUTwkDKuMao9frLo2cpuwLcP",
  "key43": "5ky3ajGJg8YLhwwja2QLBpGhwjsuef725Y49fVpJLovY3665C7bkzrDWgQh3FX3F5Ms4DT963uv1JAzehgxJPCPh"
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
