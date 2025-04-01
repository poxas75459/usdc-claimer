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
    "5dhkf78WG2SAYv7SP1zqB46C13QsYGZdRCFo4M8x8DgTLp6nPWPP1fNgzEi6ZmMx5qL5DJgBzU7q1H39BcuzCEHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i1T7q5uz8afeow7NdS8QkWtWL5jMpUX5UnAiP2gEftoHAJb7NKGRzLfRprsu2UYabUiTwmNFWT22Bwz6TWcxC4s",
  "key1": "4YBCT4soJ9rEe9cbAP9deQQYrskTwssmuGnpA9nkRoD5qgCTBB8CSPJ65vSdWwwwKZnEaxqckMb2QYvSzNr6p4mU",
  "key2": "2MbVJZu34CM3VJ4wHR3TJovkciwbTxVdP2KKHTGpW4BEcctJ5LSUoiXrHi2i81FLbXbUizfZrxbgPmQWiz19gTYf",
  "key3": "4eq8GsWnW4BWGqba6VwDYRzygzeBeB49vUTpotQ6UX3Nwt2VUeVaBjAo5utcaHhEevMEyUxStNPiXhut4Jmy4GCf",
  "key4": "2TXQDaM8pGWwZT44RraapWeivB8dutoo1PyExcKBB7urpgPSgUGzMUjikpdYGMCeG56paLtARs6PSrnc6ahvGxva",
  "key5": "5CqyPjhzCZyHUrVPHGXnbHAA88NLS9mDAbzhNiRTBDoHh6NH3BAafJrxq3JLj3fnq6emvDKcZP7mPTv62SsJw5Ff",
  "key6": "MPW4bjx2ae6LjyFKWutuseMa231Cg9o64RLztXcZYgfgejjNwJmqKvq5bwyhm959wz9MGWZV81DYeXcNkSPzfJp",
  "key7": "22v7KTs95fLxxB6uPhCV4DYsFkBvvga3QfCp8Gr8fV1WwvMnqjkepzYX6SJSvYhj4NGwEfumoensV9htpcDQubLv",
  "key8": "4WcdNrrA4LLY6D94C1rc6UBySES8xgkZ94RiwdXp4BaJh6czwxcDhgkkB5cwTxwWrBLakdtbfi4Y9BdVGGbbxrk6",
  "key9": "3tq9h8pyoGEDHeWnfJ1ZJ4VZpviKzwKWFKhHLuU8mCT9FJmcxhYwWy4JN56g6TCUgiLpVUNqEaDZNyGu82bFh3GC",
  "key10": "4Ezm2hJsVuJfzn16Teiqb9PghGvULdJSzQ88fMPjxkzcwt37xJ8Sny6gm4M3BkeufCM6JSDeNWYkf3JM5DF2hmYb",
  "key11": "5qMQf5yrRXqBtn4tLrqeimMk4KT7jVAPsq1eBf9VTo1Aia3zNRNoUyYasV9eLAeCrKHU4iWk51mM2nE2nw5rYiWX",
  "key12": "3Q4SmPZHURPQKx9MFmWQWp6DCuwfPQcdnDewxx8FRyA2AEsmz9xRjEsmuibs7HVd2ebNfsRbNFLWG8iwS7pVjere",
  "key13": "4bJxVyquakRJkeYvS9yUiaotrbaXeVRbSMEgEgEsr9DwouLNZyYtWZiNGiQaeMjUXMwjS1ABhqb1Dtj9a8Jwq8kG",
  "key14": "4Dm5pRHrKACjhh4M94woM13itrF3iwMjRkpMUhqwsFsAhmVppberJKLQmaA3fAZm2jGyxqymM3vdnuk1bRtgpVaq",
  "key15": "3SNuMFDVcCyWkgeQs31P9rt2JUHCxrtBW2kZkFh9pHk2xaSWdJWdvRDWWxmEveZnvyAgQC6518GmwM7k9HfhTdy8",
  "key16": "E3ohp5zekVZkHK9gRtS1E9BM9HenuUwb77k4s58jidcRydh3zDCTm4yfiD3rFK5yKBCqAeNddk2dxF3UvL5PmHr",
  "key17": "44RwgNVtWpybCkym668UEK3SeRoJZ2wWef3dE9FAvczyHd2XpLmTDgks89DzEsAxBAreNRiHtMbarpvxAUnkvNRN",
  "key18": "2ta9T9Fd5tqjP8KRA17QEDgoy423krJhMvrhe7XqHE7xV7cQU9X4van3MLnRSjPfmrHmzFZC9DF7d6nAXri8dCZ4",
  "key19": "54SWrPvoiHQ9Ji1B9CDM5uGkFGxS7S37zTUccsDGTqaCU83rQcaue5kBXswFb6vhBN88ABGaYc7VgjqRx45pGqwW",
  "key20": "4VkwKmrKUbe65ucUE6Yuz6x8qGg6di4bMAmsrsWwiZGzmdBoAiz2qL5iVAnqJwsLw9tDPJDyfMBsBCFf3gCEJxio",
  "key21": "V4GZdBw3RGm6cyxC7Y1vEKnKn6AybeW26JmEc5cgrBCesVFy9oS3n9F3oySki76bKB8z2yoqzdWhT1qX3uQifPR",
  "key22": "2z3rsxM71GBVExmS4tLV3mDsL1QJn3X4wR9rJRw1jyY6nx3zsM71Kq5tqfFw56xcg7sFQomNRY9NKjeJhG77obx8",
  "key23": "5DMgqSTSxtCZA17qbzwPMtrswLek3tBcjncwrAKJdr1ythEJDPrTrNcZ3nBv5EDVxjST3dZLCo6b258WrAiDq2rQ",
  "key24": "5qmnHUVbShgTepzGEoSFzGoP7nnjjTjmveJoq6qW8ajCLgRz8BHiB5amCeGtEkLixReYgFavKVqYs4s1tYa4iRWX",
  "key25": "5ctS6hzyayniK9WmJondYcaPzCPVm1pdcv57F9tJAW5s9CWhRvXJ63ZLvSskmM7VtjyDV8a85mstgsf2N9B4ihpb",
  "key26": "2Yjyz15P7iBxL9FnQZzerVFtqaG14ZZdJDizQ6TVYVrzxb57RDt1wmgosEMRw4L4vcAKwq4rVN42BTbKHwcifXHf",
  "key27": "4h3zSetZbCDovZtNM3weeDyaDSWCKFbJpWrHUmHWneHx4iVEHx4b5iAE8DmHKqBaABySymcZhE8ix4ucrjsXJLTS"
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
