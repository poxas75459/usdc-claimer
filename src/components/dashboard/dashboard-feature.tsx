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
    "K8roNoZPZoYNazjTPTgnvyCmhi4tHAXaQNhWR4Hw7jKMFmPwP8mJAAGQJyUBQhLpDYkxJvRRBndojcN2xohvVx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FmQxAAMkyxqZ1HcTxrNvGuawTfXRWCwkHuKvC7CuXcLZJDBvquSRKKVFxZ4X7Tzx8LQnan8MyFqWuiMhxbDdina",
  "key1": "c4FjBR1X1jaxPhvSD58gb23X84Q3SZZ3RqSzkmxY9mpkiQR2hnDhF5ADugJ6a1aszuE1nRrW162oRNxKEESMrsK",
  "key2": "55nT279hsjsiPpiSnUAxo8SFTNH2e3WgoeNXcZ8kiBdEDXWTD5YfUgFZpeo7abyBHD6MiaDZ6J1ZLDmWJczX3GxA",
  "key3": "4RtKZBLsZFHGCUHre9YEcmUKZSAFQaUaHECAPeuRwosAEgaf6nEFBLXzrSXdHhZUvif3WgqEvi7dJiV3tZYSa8eS",
  "key4": "vEXEuwZeKNzfY6EggKnEGitT3NYhNr1kFydpaSfNY6Nnm4EMfUyy13TkK2PHqVgGuy4u7vfTfeRhviGLBf4YwPP",
  "key5": "4Zt591grvo2oiXvHvtxUVm3pRSZAMgcCpLdfegpyyrJQwP7ZCdvk3ZeAmZM7bbAhk2ZDJzzdCknG3bDwwRarf5fV",
  "key6": "dy3HB6oY2SUuc6kxmhnvDjBBs3S9JAzFtKCQAKAP7irhG1QdaG5PnHvGx8zU8eTjnzMi4ThKDsNRuU3XHrLVhn6",
  "key7": "27RHq84h5pnvv8xDBKBZPJxmmyGHx3vP5BZRc7NWi97f7H7cdfVqnwdGjbQ8ucyQAunZfU1UZVvxdQHfGW24Skyv",
  "key8": "4Hdt4qxQY1YXsSaJdAACPnYZWdwrr2JWRdTDRdtqL5YUug7ToKn21139bDCqrJ9NzzPHZASpMHADxX9ECsCJgUNp",
  "key9": "4iDG6LC6zi7Zrkk6NJmJboFrmGZnMVHTyJSEXWnBKft9VRU7XxbCCE9WmzUxEKuQzWmQsW5bgHWneFApjoEuhdfr",
  "key10": "3Yt6iD2Npm9FWhMspD59hRAvFrDzxhg8oteYc3XTwnYJtrL1M6hKbRP4Vk3sJ6Y9abNZLx6e8BcDd2fiUfdED5gs",
  "key11": "4s1wBF4ozwNXStJREWVDAqWonWJCUDN6yN2VoKnXPPRUn7EuhjPhxaCvTEzrWzahJA2ycsBoU3kJY5VV4JFr5a1h",
  "key12": "5snsANn6XUaF6SfY7gEVvLn2Fcgneb6MYfdTkL46771Jad4KpCNhFqPccsHLmEEGWBUjyeRLEJMxC5rTdJghnRUX",
  "key13": "6n917bHqFhby75fi5sB8JMXZnrxYNt5v7LB5dh6P47F88p5o6z1oPrivy9BsK4wtpx4XtumZMFaWmBWsZYXC9Ss",
  "key14": "5HvbL5sbdwcyAp3R5RCLCxkrS58bCzrtmfZF3jPnNYkiEgBd25T1RFCaoNDwhi663Jcso5GjNGstCFfQgdBaNS4h",
  "key15": "3t7LQ8iMEfzt6UPdRAARZSiqetidMNJYBQ2JpUSUWVPfrrssiLrGxMELsJzbGMgFQ556oYSGUhSv7P2DBfdaZJ9b",
  "key16": "5nNN2Rnmm9PTVWwzeWfBd8byR8SQXaM33ZVWvwTmrUTrsDdVwHPRNzJJHrbWi9onwL38GSnJBibhcNuKBFo7i6Dc",
  "key17": "4D44WjsuNtBAu21Jc9wiHadGocDxKyaB98aiA45XXKufkeCAUAtbMmRJnQZzANrBNeSUgWDaUcdzjz3fprAYvgB4",
  "key18": "5s2BVqwpPo7YeRvsWMc6nYdXrUL8sbFCtfMkJBxBx4CxLdoTeUds4fw1tKo52aasiU1adxzxReyHb9QP4FaJTE6h",
  "key19": "B38oEFnuEPsJAMY9bGBaeoVykhX6UWiYyfqqmbzFwtb78rmdoCCwtV3ZpNE1cM6B1RXPPokgBE1LMGNdt639VkT",
  "key20": "2TNNgCyzZUtyjhRnn3hqNf9ue3jrNt1Q6RndhZ2mqhpHDa6TycLFrMuSAHu6JQgWzwWs2MdCzdoczXx6mqEgXbWX",
  "key21": "xDvUsbojj1kKcWU3uBkfj9AH5XoxqXTe5rpVRJPfXXMUjCQk1JHhCKjKqmTGnQAdaxUrH6YFiQa7CysrvE1p7BU",
  "key22": "3FB1CK1e2Trmizy3m1T6ab67TVZXEotia3sfADApevgdnea6RMeKvNTPVthWdMuYm1Ch7a5eqwtDdRPicFbYWxyN",
  "key23": "2m5UmQJWjABRUEfSo9DEVJZmY7wccXtijpRSBWGzgmkevt6ER6VgaAnifAjD2oYpadroBan2baxdSimgS7pDJbne",
  "key24": "3thR6NEHwHyefgEixKUGDWdnkk9eWFLCmTPL5U7YsFzQ4RdsmTrJR9RFzY4ULzj8bWguZG4TV4UiZGXmmXivNDMN",
  "key25": "DEw3HDAGNxaAHRKvK2MbCi8qP8z14pb7MwSqbTxguaMrTc5JogaeG3TxV2cBAsJrrsJzLTFjMoWcDqC3LHAh71Q",
  "key26": "3aCWZKvKQ3cNeQdq7PkgbaYvzGzp9aV6JkpHQ5Lys8zNte4nq3azjJLShzknTnDQCBHS2Z4efmvBnCZ5K8L9wCfC",
  "key27": "5qEbJYu6UKrceDAU8FYM3hZr25GeGgezuwGX1uANv6YEsXeJ1MPwNjuGguSzkiYRwWGFdR7QRFj1MTYPJoppQ7Ne",
  "key28": "4feRWzeCEduae3JTKPMcYifzV2GQ8QPm21K6v5q3sjNKsbKeZUKmP2zqpGsjFQoNywK3AFBL37bwvZ6dQ6H4Rsji",
  "key29": "PqXFt17QxHc4fvoiKMxScwH3boKQmNetgPqR8mFJJiWUagXA42z4B1pnHWCrYkuM2Q4sJozKNSzbwVkn2BhwZDp",
  "key30": "5pHTWQNcipuApQihDjzToRkByZtc3UQTkUFvYaV7Dvt6MKv1Z4Mut3sQohmJbCY2jJDyz4B1fo5YQPkgiQKwHirQ",
  "key31": "5vwxKtWaYN82ZdRJR9cRR2JkbvCEq6QuG1w1t6ScoZRZu9WRg4MiahNPLAEUY1LkjUWAUtXJmFnbmR4KCtPxZhMc",
  "key32": "31aXTHZCEHP196JSDVgUkxiAaAdzbeS91waXHMF3u4iUgCPnsuFs6dDmPaRMP6j4noexfgwCyCAPewmU3iYQ8T7V",
  "key33": "3oy1egjQZfjQXxMiXzgZZvJgDPz8YhEw4u3bPUq2hHMnqmCE4kRzD2pcyedU8gkc7X8sxfL1BKFHiV3XmEwh22Gq",
  "key34": "23cf4z9jNQCg4A4wJ8EFQLNvKBvQFbKBfP935XufxeKD1ivehs2aPvx2hnrsLSpMYBnJy6352cKvNwKGKadATqnf",
  "key35": "4TuHnTt5ajsjLY8gUQnqynVdEqBYpkZkyuN7EBG8byo3jDi4r65uPtmbwtU7cgdHhWGY6RU5VwNaEACN9vKUEhP2",
  "key36": "2vvSgu2EJFM7GifgYo5U2a4R9G6eUWP5LQmaqNd6VLqeHk81wV17AitpPdoR6WAPRHv66XJp6caQTSbBZqpNHwmh",
  "key37": "eokcyKSfS2NUptQzfFid69rTKXXR5NUHmJjrNTVPKJHLGJnapV7vRApz1sas1cDMAXX15dkR3ZdQxnLHKPSLryd"
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
