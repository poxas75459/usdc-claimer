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
    "4Aqu5FATQGopXFn2mksv2kgeTz4NvXwbeJ87CH5g8nfdJwxyMJ4YfsFJAUF7R9vgguMhwYTMdLR258Frr8YkHRTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "um1fFPPyUnSR6CUs4ozgkssqQv74Z92Z2vsxjnG93zZU5Dfx8gPHkh9twPCMktS2poCzTYTdjPbwVf5iV9FyA3p",
  "key1": "5Wb9EmVR2uTwm8hBEjvvby4Lpg7LJMdWkrSHziQHy6GM2pg4aWKYAwCFb1RasXXLUE2kjiihWjLPQHWKgGtyscMc",
  "key2": "3TjxJZHUkBFbP2Ffw3NixFX8ob8rF5kzMMf8ZvWG2FVog8rp4sjCsduxVAVoKi7LBc8ashgNcRja58Q6uY1gucwi",
  "key3": "52rEKaYaCwHMtdEjhFoTfBMD9XFSH4qaSFeJVsDZZ9J4iQsdLr8CGwhASdGscpnYGjnRhVS8PZd9EjrkXexNyLUp",
  "key4": "5XGuxdmKvEPzeLJFtiNPaPcGhn2ZGBKAh5r6ZitWZqs1PcrNMFw86g6hgQE8L8GC9VdMPZnUbwbhqUSqBs9noHk1",
  "key5": "3yNhLyah2qMP8pDetibpcKqaqmMS7HtR31cX36BGN5rASPTsS3W1MSMSLMZahEaxkbe56kogB8JF7WkXa7fRYnqC",
  "key6": "2tuXjxi2hLndpW3eirHim6QBcFMG5yp9RTfuS7AXspEB1c6NgbNfgzgQnbQG8eRZTBQ2THf9BViDV2kG7BikkY46",
  "key7": "5J44NLSmUEk9jqk2QAcbPBFzbVWote7jwbe47YNmGtJF91yoBXMBrP61ZYxT7rBaGgeYgCg3VJV2khvVSQnAu3Wf",
  "key8": "4Bxe7RT3fDQXUrtRiDv3XYLmAWXZpeDSa5b6yh9sZh11LH53WaWypZMLuaXbjtM7YyAszx9s1ufGj34shrecZ2Zb",
  "key9": "66bicgnYAXBkpBqw2XTVq4NEAP8Ju87xB13vQq1ojPufNcYsrYiJH7MY1CSJHyJYmD3pZLVMCn68bWb9p1zgBnE6",
  "key10": "mrrqLsejP5PoujHAqBZSV5UzNxasGm5dKY11H1GMD7QvirbKfKnVLx1RTtkhU5VDTUsyKemewBBncJ12MZttx8s",
  "key11": "2S8bBqDH7viZCB7LyL15JHnYj6vWNAK54arQ4EFHSG8LVaqmnD1UetXsWUyGRjfNSmBAYuyXx1ZvwQSjAYRwY5bV",
  "key12": "4Gkm2FFNHy8ZEJ75UDhAmciNFQKKj73nWtM6o5FPV81pMavpStHndMDd9GS13XENJZYWtMa45d8BDfCXejfRw1XY",
  "key13": "2qzyazZRjbiB4Rwp8QLzNpK9pwPQHUA2L8KnDXDxECMZ9Ej3zsXN611x74g6f6SrYmp3bdWQjQWn2uNbGzD8XBeF",
  "key14": "4DT1fBGRBRTZTTy5Txc3a4RYjEV3YpohGWA5nXB3jdbcHAGuMxDhCqB5LNhXDD38S47o3DFk6M811YgZmZJFfehX",
  "key15": "4qRQQWWQYteYbaAtHEk4FJQFbcALjkCwvKKo3YwXQy3vvCmEktvqD9JWFP8UD139DoaKJaSFLrydhjpBdvPJYat7",
  "key16": "2UYPtrXutmz1UgTARn8jaaTed1GvhmWAV9SAj9vkrNWzTVoAJnxVBLL3wA5VaKDVrxouLaTrF6zyii5gGuxvDAr",
  "key17": "4r8jpqXBrKGyD25QS7FncMQkNG5E9fWiYqGfVJ4kkFmDHiFjPStRmV7316mo26CUWj4zRDBsYYTcSo3J4nLAeyqD",
  "key18": "4UX8tMunagr4GfC4FHrrFQq6i8gpr2ndaNPESDamiVccaHgaXKm1ep65FtD4WUUiJsn2HxKg5H2FRcAW1Uw2M7nH",
  "key19": "5dLQNCKj9rDcd7SyfNZQtZkXKwDBtRnZDyNEu5gtxF72aL9KSXfevBERYSCAo9ZuQtW63wvGivi96JwtadUVRidC",
  "key20": "32vbsMPfyJegciALAfHCZeqXKfG9xV4JiSurJuUxrxqEt1jYAuJrw7vfpwt8K3ZUDwm7BhB6KNb9atJki6KkPZfX",
  "key21": "4ToV5WzQVQK4RDbYPdXGsBhYQbtLVk79tFhmQXo8B81T2C4HtQAP8dTsPKN28gDT1b71tjvWN5YucxZsmsXK2HMW",
  "key22": "5VPnK7xHCUF11X9jDQmN3mPEfz9We9bncSTtqDv3nWvTVrQCEo4o2StXEzLPzJeJpYvaNoGiS8cEWYv7r3tN4EqE",
  "key23": "4US4G2nvWZNxi1TNWxZ1HgxhdScRoP1DTuoDvCw2auQ9VHZN1LcPLqjh3jH8NGeS44o5XTZv5EFDKF5c9BqPWFEY",
  "key24": "56WSBTTuDCWrzqsrpxgxanLuMFtq9BBwkprtysDFCiuzFsH5iEEckUPA9mmDs54JH33Jz6JWUoMf5Macmc58VLh8",
  "key25": "2qrC7GFWwzp2n6FDMiHXRkwerpqNw1kgJU9r7ZoYZBtYWhiUgXKXWGptXr4D9mmU5UokBDNFBV9MjNLxjY8LU2kR",
  "key26": "pASY2pyk9ULFvZcZGWExGob8UrRNzTFLs2cSYmLzHMdcNYA47N1k6Azygty1we96K1NxMedrJmFqqq1Nc92FAc9",
  "key27": "4iW5yW1T32kNVjgFdi91NRugW98tPvSwbKizXPhv66vQLH5U8Aa7vgMzn1SQTe98rAFY3587GjZwbzE1H4cUyqkz",
  "key28": "3s17cy4ZhbkcxLApsovwgHMX85rJXzXmDYmCFvZWrTcqJJiG5knyKpsAQJeAwWRCekRhHxdwimmundj1eXSijfmB",
  "key29": "5vKetn2GPmosc1zw3tkAx2x6diFSLP57tMKy7sJLN4LCko2yiLSRwTvnPkmPkcGms5h2yutNKozGoWuYPDDKAfba",
  "key30": "5bLwzCupJV9femNRXikMgYypH4GDSXD47zcS67vjTMidpVGEBam2Yh4stLV8L5LegtXnwzsEmS9r1C86VMVeZsCD",
  "key31": "5fmHXjzkSL3kCwcZWuaujR19cT5U6RJKWkqYtrAp2GFbTtpJqrf6JZsYEHZiAv2vMZAsxP9521fm8XSodooiCHDY",
  "key32": "cCDBgsbZpX1SNRdUbfoUQwa3MpB5u1bNuAFweAPxu22UGbENFVNnHst8CdGtBVV37b9fUHST9KRNfRcw4a7uMtK",
  "key33": "5Hs4sibehVeJToyNPA4wmAoD1ntbCTHHUVt2c1VkSww7xMaNhEH8LM95pnn3aMGoo7Pv7xHmD9XEoWR3WaZheX1E",
  "key34": "64NDZ9UimpbaHqsxqNcSXUBF5aABcs1FSavF8V8myLwUuoh4g7gM4VeAkrhm3zBHvy53L3UYMY8u5iFnM6RBR4e5",
  "key35": "5gA2rafTDhwwjkqPDT6Trx4AGp1mR6FRqsWuHmvZ6c849y6AyyS5F2NLTS4fSpL7mYvc1tmvBjYp4xiLmjAhU1Ne",
  "key36": "4mTXSpdfWos584j8j7MvitowBEfe5zenWRLaS1iTMboknDC4uncGzXFF65wZ7Rhc2omjecwTSBZBFfaxjNaY4cag",
  "key37": "2VcZcFrb5MHe38jGt8Rm473tgyThj5tkNsq8JtkGURtHq8Ag1SQk2ctzYhrdhPhjGq7HTyfGTTEeeHnBy1g5DDe5",
  "key38": "5cScCuVNJciKn9L1uhqFUfz3jzKKqWVhAodmxruTK7JV9SbNhX13G6QfY97Q6yZkwJvVPVhfkqhGtykfQ4wP8aw1",
  "key39": "3DxFa4TtyoBXUxSwVTU62EejAc7qCSuXkRETE1SfvPAxBrjh5gUs2wN7iEGYR8JrQu7rPyeBqpQRXDyt5nzkwUCC",
  "key40": "5ZdFZQ8HVwrPbv513N9d7yHAfwLDHDBLinwEgJGJS8og7aJJKdVft12E8seuzNyMRpPgJG4zruLV6TDpztD1n1ia",
  "key41": "4wYd5SPhudyVUQ4XC5XmLK7Jaaku6nVo5wycn4L9eGWC9R8RzzbkKFyLkcnA6EPeP2Dgr4UsctSPkXf6UjyDcB2G",
  "key42": "EnJqDdHuK8uTvErPeJrgbdL5KT6RfCNfxDR8766XcQKT8uw3YC1FHPdRxxAW1M26EeR4nH8cD6rZHiXy2tQqfmP",
  "key43": "ZbnH7EqTewRjZjeJ6g9RiRwxp4b3Gs1KJ7vE4gUXGKbyBUwfEYtzzS8TKEK1bTgc5cnQEuEMnBzD4vCsZvMAgEy",
  "key44": "3KMeD2FXuq3gXQS6nvVnNDjnH6eJo9btoT7Fiar2Af6qgenX4pn1hTqc3y2h4ZQBHmFtXwq5yk9DAvLPCXg8H8H5",
  "key45": "2SwZFkwPwoFWMRbiBST1PeA73c9xMb4ZZqGYhDkowVUNGjRYZc6ScTZTKy8qkbEKN7qD8UXX2JSv1wfygDZXYQB",
  "key46": "5gFBXhYRN7kvjNbPye4pLhyTByYHu8dyLoxQNy8rteybvXFUQ1EixVBR4WdY29ijD4tei18M2vCdB5nSHsSCttQp"
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
