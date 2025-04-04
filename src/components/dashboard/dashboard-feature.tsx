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
    "3vnHQ3CtLwG8nbN67VNWbaZFRJaVr97VqL8H9eWg1Xg4LABjmyDNj3ZYQzqCM6EeAgaknrj4yqc7vibfy6rfjFU1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38X7SJU9PDQQeW2QR9Rxc6XfMW2ptcBfY58bWGzBtuzDsBAwLeJhsk22uiVfFKZ3S1EuWVW9U2tmz1QY3Qv7zd7k",
  "key1": "3oKTP3qfqn91u7vH1amJftYELnR9KkmjDi9QeERnVYLxMRJ4RzqNechr9qGnnjZGZyQyBuyKYdTR7BbZLhCNWs7f",
  "key2": "124G9GGBsYzA3u7nD56Hv45y8sh7SRtRjWSjsf2347HUYvqRaAnA29SWfR6ZtHocAJsGtU94RHdEvWEgPn2ZsNzd",
  "key3": "2Kd4BtUCHjhhTLCGfdgpqhvJrMAN1JoU9aduJSzU9oLUuqWQnDZjB2hKTF4GTnhy3CRSZw9nrjPqAMvaM8EBcwbY",
  "key4": "4bLpjxNKsFgczVr3mb75zUdSjGzmN6g88N8sn8MTrWSLPh7FfZzGuzQ9yX4ow1EyZvz2JxAeyjdMUCsSy3xQeGRh",
  "key5": "54WiRXmGQ5XNsg6Brq1YEwUtBbKm2QoFD3MpBQcXLev8ThfxSLPJnmXLUuunQFkbTYSpB9uVoXxW1HTYmN6CabQk",
  "key6": "3T7QRj6eJ2bt6VncQudq9Tz2eQqqXtaYPLg8jjvhTjnpJjUztFu4N1NfifH2NH8DUQ6HE2RtpUKFCtmCC5WuRZ2m",
  "key7": "212oYAYGNQtvXZv7RXjypQUUsLWiHbNDhannZ59rk1RAHSDp1NuX13nKZywYo7kaGji4mxRZCmh8oUUcEqBw3SKH",
  "key8": "8owzDThDhLWbDzAb2GtP6bWdHVYxtUVTLiqB4d2r1yAwvrwfizb8dvXeCBaTx55yWHPpzfj1kMaEfYxm7VVHZeV",
  "key9": "5g9zwqhaBor3Q11gSAc2k89T1oL61mXSiLfgrQZxmMbvZMoSU7orZDntipCnqSqRYy7mQu6AwpsmHVEXJexnZ1h9",
  "key10": "57DfhY1DRByiS68RFdc44mi47bT7VNUiAUDK59GVKxNv6sNYBALy7zGy1JYTSkT2gSDCFmRDWaRkyB9UfxoHm9SN",
  "key11": "35H7d1H94E1zmYBnBCvSn8fBGQzQ8g8Mm1j1V93TL9XXpYRXjx8fB2462tykYzJCknRCefK8FMbd8qsgy2gsniHi",
  "key12": "2E8nu3utD9LogAL5n64c8njncA7TUsdg8VSeuSy4FVARsCVbp96BfmC6obXJ4iqRt9shMKneiyRBxHPzTijpvpTk",
  "key13": "5o3tUPghLMbuJBywtyV5rxMqQtWfPQ8Y8ovcfH5UsBPwiKrj7r14vnTNZuB5UGyVQfgQgB8EoVq4yzq8EquPqEPP",
  "key14": "4uJfKbzG9LYy3HvtMsQmaxp9ddZTAqNENDN1LB4XC9BD2tBSxbkArhuvKuzTxZstXzdJrNrc188WNEAsQThwfQQW",
  "key15": "5Y1HJHMqQwbvEL2zHmGWNo6YJAmhyoaA8tjUUEzQ6SyZRTVYUHvP7UCAGWUqHXtS4upbpoZX9knBuH1F7d5BwsLM",
  "key16": "5SEMVP1dX6jDdm5LyJcCnsSxmuYRBYSeTRjkA8BL4B4qBk4WPs4s325ZpweeoMzeNcQdzocYwsRh9ZWAWu9kKt8D",
  "key17": "4f4Nf3AuwoY3hqNpT4p1vuGjSYmzr99PKa8Ago4Vw2o2XezM8deXXyd6cyqmGJyg9anGb4bzNzBtWx5pYs14MfeJ",
  "key18": "51eMv2dpDgENyqwhXXZd9297QfVZkKELixWWN92i7Jf1hizdfaobdhzJaX8jStsCKeT7rAbRcKjjEsKLmU4LcSrY",
  "key19": "3CRyPqhpX1dKmkRWLmy6y6aLfz5Au9N7EJw3dZoQQ4Y1WTXxsm5Vu8P1mdovaz1TBvoZcKHpZNXg1Nwmk5N9adKN",
  "key20": "3nVKsEnL56yQTurssU7oYgPqZ59x55MgZnUeDdeG2Uo2SyitAR6Q4eoUYdQhL5vzUDH7XNQ5zAjmvqB1dt3s7UJh",
  "key21": "4ntcJGP6FzjQPBbTjq55uGXYhgwfS6kWAAxrzCQELaZ2sJjr9rCrXevwb6pvugcphFZTD9t5ZLUYDH7GFYRcCYWE",
  "key22": "2B4giv6QSVuXbywvnieb273pTmKT4xLHgLB52dDDo573dYNNofT48GzkeWrnHvrikKSEHF5WCYADMm7j95fghprK",
  "key23": "4EeLPZEXdezPWj2vy6tAJbuKCxA5KjGaGRmRGcTTQMxNJ3sLNd7oCjkDwoXkKbUpuaMu35N9T5B5omYfCuVu2amJ",
  "key24": "4GQH2EnuuL6pYqYobXGkJcUW16GecxXECEgXQJpzyc5kRx2LananyzcYwZRPELtVq4aX7QGSLeVVyCXodeSJgpM9",
  "key25": "2FtVJmEW9ogu8bxZrewPhEv3eCb7hnotEFRFw45XEdsfVEanDEWpCmtZoThEo1sPrQDWAmiKiLJAGHk8CJaf4DKh",
  "key26": "3rFoxR4StVGLzrHBFBoAoXYkqRH7yKN9u4Dbttdp1cjUkckkqyqsv5WkWtfYDdioaMowGXFYysz5Mm6VYxiuByHJ",
  "key27": "28ts3wfi4bjMvY1ijmXqHVvANRbEZTi1Qku2kxZS9M4t6URD4L9pn3YkRj5CRHFR1zLX6cY9QHsXuL2Pgop448y3",
  "key28": "2NNJS1xasgwaiKKYXT5hVM97E6efcvkdxmE5GMRjU9ERoY6wYxjE6KCChuVeCpV7aXpVi6uZzuDDL1yDNfraTYYf",
  "key29": "2RoQXUq13uytSYGy4irHAX7QRt1H7wY9MJxUPXupsozZT3diE7zmdAnA2LM5C31LUv197SYj5SmmDyXYqBi1apCV",
  "key30": "28oetmMfGMyAhxBC9HgQvAosjVL93f4krV3NYQ8m7StEh7JCbtYiWrNxB8cvh1JcqdbHYpCrDZAdi3jFYrExntc3",
  "key31": "HXjcVTc3bRMNZWdYE9QHp35TgcjqEJkvgHGAZYfjhp1CFx1qRPp8Q7zVj2299cncVaCdnjf5CCmFWT9YRkgervJ",
  "key32": "rZxVFLE4EQE79B6UWGX2LwB2phGNsFNaNxvPnQhA54Ycu7vUvtX2NQt9W7773PS5ky5FiA7TSQri5b6WwA9D1ND",
  "key33": "5ccBT1mhvxWF53pXy43yVfT1LeukvLEYhaEptemoXooyd3s9rCRrd6LQzqXgzjkZwUDWhVcALVaXSpFD8JvXegCi",
  "key34": "24W39J67hV6RtKoJXDB613tEse8VuW25tj7F7F6LdZARGdZgjTmcyMLvwjbC4RQFZuoPuiTyGhQA9DUNqFKz4krP",
  "key35": "gFPariUm8mAb3ozJcBMcyniWNUEDGNBGJRpnqYCVQqfqt3mAtWC1svZJvHxr5ifAEUmFen8yvoBKANy9cxD1vdN",
  "key36": "JiZB3nWXg89RqjA9BYAunUjKpBBgCcAidSYsuEth9A9vczFSE7EQyr7CkbeLu3ELe8BtxGm4ZGbhQ34x54CrfNK",
  "key37": "3eB7rrmVK2MW8BfwVte1626Hmg5yKvBUn1i9Z4nRCqAYsiVTx7T9cBSVizJZ1CyCm7bESyxRHTV728P2mUCV5PJo",
  "key38": "G9PjUULaj8VYW8ejYJDtwVr7zmUqbW6REY5HRjD7NBCL7bPiSPnGiT7Y9frvWSJtYKVEreSe1He888xbseMN1U8",
  "key39": "3KcHiSCzhdq12oY8ewHDUTycKTVvJReR1uzMBsGcTQyLZmejyS3FqpukfoPfTjwVXinoiUhJivfdEKmJdmfW7uwf"
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
