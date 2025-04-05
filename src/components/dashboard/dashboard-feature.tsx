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
    "5TZD7Gs3kMYknew3M4L94n3SCfiC3fXTaXgt9xNxbapJ7vsCBpqt8zDtKS7AGpoB7zKMcuS6PursGEvBQsQVdsXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uT5bE6iv6y7ibNp1whKZ25xyUYFoURTh18pmiwL25ot44UcVQMqCkDFUpJ8rys5nFiLaMC553DN5PGNoLUAS13e",
  "key1": "oSXQQU8oxKwdBcHFo7NpPwJFdSDV3Zgn2FyKXb4Ttyz5ztg8t3cBBwST1cBad6cru6J7NdZ6ik83g3Qg5wR3aNd",
  "key2": "4UNU1gRhtsQQ7cYJDuN5cga5HJNkShqguL6vZP9RWFGotG1o5FAeqqF99fDSp2rL5hjagPCFJ5og7X4AtrPKMWjU",
  "key3": "34MpjNmYczNank5fokPJH9MAwVXfZF1ehegGQESBvfXxs3apwf8vZFQ1jzVqhQiUtVBMZHidP9Q4jptH4N8YcKna",
  "key4": "2C37foD2qG8iNZSnFePbDdJT4CTPmg1AiuRKdEkZ2Z9goqXkyotxmYP5xj4W3ZxgPkk7jdphqFp6wtcrN6zdHwsC",
  "key5": "FERbPAuZDqRTt3KNhGR4wJRYpPfJ7wSr1Jzwg85Wc5g6MMjjPj8jhakZcyjyFtm61mys7zeToeFCyESvghP59Sm",
  "key6": "5brxNMZU3h4umTmooP8FciLJ2T4xb21SEutEa4WXEnvMYWZZBK3XgPN3RuPz6cvVZtWXWNwuF4BcigvaWGb7AUvb",
  "key7": "5b4Z3YyqSz935j4NztevCFthxfdEF6LWq22ukwLHgrdJwSyGJRTNwNdrRHHaygpYsV5MyTvegeZRzvVdQEcj4jiG",
  "key8": "4aA4D5VCwE3Dc26aAzXHVoVFy1wcRYiTfQqSb7eot9sKR2vX2ws6YWNyaw5gb4nzUsPbSfJB73yQn6a3wEgtvAS8",
  "key9": "2BvFBfPiU5LmR26CGFZZbaWoUtLiWyUTgkvtrbBb46JvK6V4JSBuqaRbEQJJDXgpR7UqDWV32CCCDCSbFt2iXSGv",
  "key10": "U9vkJgayGPpKME13gXHWhr4JDx7uxVUXaSyGQXNDryngxhDDqxdRXrvGCUbsHJcBV2vJefBke9VfYWpJKwCxE1E",
  "key11": "3LC9SLx4tHT6dDxM8UeVffzvyUS367egMHJxL3B8AXtvW24x6hGMWg2i853pDY3ft8K2nYrwuwLsBwYgPWebQeaa",
  "key12": "2gA18Htf214gzPu2tBU2g6t2zP3QwTXjc9iL9GqQ8hC757H1tSXwmaFmjs9PPx4AH6TXvwvKk5L2c21HyioA37e6",
  "key13": "5dteUFhtk2cKzfmZHhWY6cDztbVhfYG1oXN6ZUQsuphnnVPYwBTZQbmGhg6UTURak9N7to55ezy4VWs6Ao9YPSE",
  "key14": "3kPDsSumk66NXWBu9p9ywKRCyrpMVeKDrFSozyR6Y3cbcs3jrDeoga4LSz4Kf3qbiSKiLe7e5ZzT6dj3HtAVxLvg",
  "key15": "28euEZz6y85fZmSLW3vYoBu2T6apvyUoVL4QiodKdwK3kGGfWraiayeVNQ1YmAmQGbeCa7B9LEkNHTWqwXACbH8H",
  "key16": "cXPHwVw2x6PbFFE3iBWupWsvxunssrL1hdoNBNEcCCEm6A3mGhnC3n7i72ZedkQjztEM7XKLswmoXYjvMjvfE5r",
  "key17": "6589ji7t96rJhX6LJofnN1cWPHfC6GXJaNuGUt2dHwP5SHdNeyJokWU5FCkcsVJ892bqqRF3U294dwFPTMX5adB4",
  "key18": "MTjmrHSAjjF5K5vKs8R9zb1dq18fdnSAacraFDBgL8RKyVZyazu6cC69ikkvF7zFs6L1KxWUD4doZmKQqMvpWm4",
  "key19": "29gDfN8ZcMrYEgRpJPdyZtJx6uSdWganZa8a3Hdz2JCHjjk3vmVFkgECQLS86fGzMQuN8xYFWAefw8hzShAaqdp1",
  "key20": "q8CNRzEuQJm2yvLgUZqThamRftrrb8QVe25H8C84CAq9rYwuyHd3LfCTJ5dcC2WPfhesUJB2GGTAfFexCJmDGb3",
  "key21": "28cyNp3Kgu5a46tKsBsuNpaVTHtWe1s9T7sdJgFHSCgFBaCTSC9u7qghvEMTq1rNMUycVh5SsmXWB8QMW5KppREj",
  "key22": "3A4yrzxgxQhLWUruwKZzq2EhJNqjfVQVrJnbha8ja3iuvjnB7bZJcuBnbvz9ZK5qTKTffujhRwiAzErXv7ogkPvD",
  "key23": "5aynBQwH3LVZDzunhBQg7QohhEDAvUFGnaQLy3omKNv5VDXQqMqDYZTM6aGdB3XDTPTRWSgsX6mD6unDzzTVNS4z",
  "key24": "5VqrhEvyYd62Kn8mJs3osYXkqssFfyMbFCXA67FyVBZGVv9b6EwtDUxkFVzeUpzaTFivyNwQFrGFTrYCzSAEHpY4",
  "key25": "4RhmbtGb3q39H11Vo7aom3eQ5YXkp9ydvj4zNeeiT49bLpta8XrbHB7phwd3AyKjiFp8NMkGZJ7XU5YNyBiwAKL8",
  "key26": "34F6Uuze6tgGYff2RUAZBMYAwN4SkJDyD7PTLsDZZ6vi8xLfotYeMG5NUM7LBfNS1pcBhbVayyEpvohPWbYwHpyk",
  "key27": "44aaFzNbEXj229TipsCqf2EVTsnFcrC4b5mRuqZousYUDSfk5vsaf5KquYL6rA9q8XyNV8876eSYKJj36WnB6iQ4",
  "key28": "2grDrnL2FYzPxkx4iq6ELRYnrigjt61W7bwoTMc9M76K4qiHNnNWgMnemMm62rjAo91ert84MMTnSe779H6As9vi",
  "key29": "5AXENS1KBQcpGxEZB1WHxdHZuWPBkaN46wDZDUpSaDGJtWoPoz7zmK8siwF9VT5qBV1tXVCmi6USLZkVbVYLz5Kc",
  "key30": "3tw37wtGmkGX1byhNx82Sg5vbUoQMkegbkD843gsMSBHYT6HYKP7mD321yXks1VbAZn297oCwkqKb3XrzH9wB7sJ",
  "key31": "5gzyHq2yQBWuNWgzxik4TguJbVvW2dSmifKAWaFfkQ3H1JnnxXPo95R8twSfbgwUSujLp3Q6k7rigH3STPG8EfUx",
  "key32": "4ffDFw8LCPf82PNhBC2wPPxKnhLX5kNfLhRZAJuyvbwSKE89yNYg8ihL4GWqqzP98V3r5D97Ahnwxyr8eYD2VyG",
  "key33": "j3fxMx9miP2Kg9HoKoffJwhepa6fw9VPUNL1CrSLabtX2PBmNDutTE5CebbineSaaCCE9oWF1TcYm3qhXnk8Ca7",
  "key34": "4adaT1crXkWsbuMjuy8fpqV1EC3srp5mXWpxHEWG3H8iz5Sp6RzezZFc2PxqydhJA69sc6jRSq3x44xHBeanjcnZ",
  "key35": "4eZZvMbff17tmoeb7cVV5YR5rTRDcEqWga8epWswFvSa92tyJQNUNjpbSpg3N8tATVsTpi1Np2n5ypdfhh7Mok1C",
  "key36": "4X184vkD7wPVtEL788Rh9sYFwRUMqMTCajNhsUkMNQmuUwHRgy1q1jM6NmzQRrpaGgrk9jN3KMirgBC54Cvf2Vky",
  "key37": "2aP56wRVSyJKQ7zDd6tjVWvgD6rZw6uozpRz4nNEw1zL1vXpXTqAXeTAjNcWh1FfXrnEB61erav8wnZvSpqsSz66",
  "key38": "3D5mNJYJaZfeqGXapsKxxsJsKG6yyQX17pmyzT1GMaFQoPetwgDKc3AFWupDHRBfFphZviYDHjtFogSHKPN2H8iS",
  "key39": "2VuvDnd2zTqyXkoQGeNXHyRBzK4G7QtnTChL3FLMRiheYFQzPCPnxXAofi1sQRzHYbWuQFzwgQ9L8PgBSA1JaRi3",
  "key40": "2pMxhxihVujDqHnqMUH6JT1wKB7gVDGh1RQHeAd4wWnNNVtdaAd7x9Tm12GHUSk2W1p34nTGKyvGBQ8dhwyFY51m",
  "key41": "5z8oQvznwCiZL5BNvmH2DJfzXTt6VtdRdBnhyKnF1hT5FYww5j6LjwfKqSqUGifrNwRFfJq8fs5ZYKiKhDmK8X7E",
  "key42": "3iinewyGGGwEooVWNfUrBV693wXi8wykYfCbiSH9xETLnit2tvxSfwMa9rpPanRppzXTXZSpNW6vy37YF1LBCFAi",
  "key43": "4Hjx5QeoMsn65wC8Kv54hUKGt9Pj8vwxMypABWkjwPRcYp6L5CUU2Yi6nsVUg97fgvKLBBXmAfmwWEVmJMkQbkEc",
  "key44": "5tycodU41KEqo7dvJsE1qRaxvkoSnxaAiHQExSW4Ef3tTU2zVaF3Dfd4AC4mA6QsPUk3Bsu6t6rwmpsrTHboD6yc",
  "key45": "3drRmq8Jt5shZbZRsrN8MnWwTRR8Si4ugDVxLWSRoSvweSS18gaiYWPVzMDqFDtsvQ5Lvw7rbywPamH4ApmgpS86",
  "key46": "4WjbSkW6vsCqPTEr5LhCSzS3mRLXjt46ZHrECtVkpJ9VC6Gee3GEMjfir4xQVUTmcNKdWbH54HttDaKm961Y4mxH",
  "key47": "2hzFpcYqWP8bU1nbDjenAyd79PEZB5QqDqBKLeNKLzWc2iknaSMNs7ogc65PJpL36AwuCbqQBeXR1b8DU5771FbF",
  "key48": "32BnsdcqPUjFrnGM7XPNZpMFCjHnzhqNM77pru576UK3Zo8kbMSyWc7Wz1uJ8AapaBzgeYayYdchyud2Tg8avb4M"
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
