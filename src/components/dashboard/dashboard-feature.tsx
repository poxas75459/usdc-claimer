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
    "yjVGxqaFxYdeXsXYXqdbHcTF5PRoqaU6DqJChpc8PkcAetnXxmUhqSTKnzjRhjU8sg42YLiv1Web97anuNphB1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xgCQTFu1z4TCMCiexHepRpycYvz1UeqqkjkjUGhHwLau8xHc9adtBmErSYTnjnGFmeph5btomsfA33p33Df7UQN",
  "key1": "2SqNYKG2xzaT76UDiZsyodC6jedG6NebnNAN7AJ9T5QkqTDTR9VBSR6ZRgpxA4GcPEgr79qei1sFKHrLi5x8Wjby",
  "key2": "5cK8CUFYDTWsRL8UErUgoFFvK1jUhXFDK3DrRnjhzcc3GvbFPEUiugxYU6i68nYcgSFPpunHvxLnxrZeWHozHMNx",
  "key3": "2aHvzubYduNtdJAKVrz6Y8Zd6ikL7G6z4TFbe4vxUPHVB9HLHhWWuHaSSf5S8A7Bbubpm3VEyeTTQY2C1gVevhSF",
  "key4": "3aRSikHh2385MqU2icgZUSe6BJeYDmz28SSdr6zaYHjCKiVK59cvLJho7VsEV51XMkWVGPXKB6wAf4bPnjG9KUTq",
  "key5": "4Kc5Nc8NYhrD9RPyKiVDCRfZ9fLkJzZax1iLYsPxHsmaj6L3wGgcx5VhxejYY8JJjGUJSp5ekLmxTezdwJxcETvG",
  "key6": "54QpvAC5MxCuDn5r8enGe7rrKQ1nXFeYjeqJon1u45wbGVRbeZ33GhJqVyqjwaaqTRJuiXbJEGXRgtyqHy5yqdV6",
  "key7": "4VEW9fV1JfK5ocNo4aTXTFT5ig9VjrtayAS4aSv2KfMtahjwKFBbyQnfR7NBbWgcMcVZ5fx3NVRWyo9S49dWKa5F",
  "key8": "4TqhDZ3yppLA8Xt6bnHgNJDRvEeEz9YMc4Pqfm5U44yapL979KzoHSzdBmYEK9FqZeTDQv6jBrH3PbPYbZDpSHqu",
  "key9": "5EjHWsFmhPdQhix7j4yt2Ag4PW7NwRfCep1X5rtHwhc4HCTTtcZxHgqMsSWhzMMr85B2YnWgwMjudQyRy4UYfZVP",
  "key10": "229b1eQXHGM4kZu7X3yoDei4exKJuXYZDTFMYkkfdaDgZKBQjs4jtZ5JdASZyc4uy8m28Ns9wWTAGzR4CAboj4h7",
  "key11": "2u4qYLo1T7JGajQKPZKTrw1RMrhNZ358eoY6rsXcMxwKCPYuDnxfuF9DtoM5btMKN2gczyC1iPi8s4qbHgHBiqxP",
  "key12": "2vkPSkKvS97QceKCjvqYPy2S5UQQtACYN86JzUUQnj7s1kKNFnEvvAi2sifztksEPp8AkLzv5KDzi6UphWSUWsbu",
  "key13": "226sdRhMNuyWQxmW78aKmfLHor4b11r28Ze5phwMyLQnpZTYSDPPakBvHz29sFnZQf5fSFtkx4YaRy6QkhuxFAje",
  "key14": "4pBkv94ktXU9oWxpK2aYn493AMuv5NNbvYLBbz9Y4FhX773f41bwaFafSjYz8LYj31vAe4rfjNKweTgun9J1VFmc",
  "key15": "4S7EGN9RsLK6w2VqubXdDkJgBfrcyAi6BTdV6K5sJHgvhFNcrWpeQFEhCzsbD28hV5VgXaizTRdU5TVhuW4dz79K",
  "key16": "2e239FSK4EibuK4JcgkF27fw3jngc8mjCQ6biyx4ojifBg2PRhHHJAX8ChBRqibmiPWvqvudHw96XiDkwAXrTdFj",
  "key17": "5U47t3po4o1Swv8277m1bxR4VTVcscrG7ekaFwqBxMgentLQJQDjELxE3dVgdFk1ftYqHHEwYicBDZ62KbBZieE9",
  "key18": "5agAPT2VyKuWesJEeqMhmHR5uPDXmLgU1AarHPBrQge5gKKoZiXVSffHykRj4ZEVxK8kyQFGQzWtBXuhFw8fSDDh",
  "key19": "5B4HxidMqVpMj5kx6gSZbDRvkKRi1ydmay7R6idNoepJxSba8njEgRKkoRns58obPbYYHH7TAyq3Wo3Mk6Fn45CC",
  "key20": "4KgqmMCuKwxai7u7CKvEk5DGzaEf4act4RXC5HQCwtLShY5d3XPW4fnHGdaaH1PKQzmyBRfj4X14msv6eALVssup",
  "key21": "5YiFZFg63eGCr8ducUHpAuffBtTs7FkAeeVSsxfsW4tgL7Bmuky6YT1xQWAijPiTJ1VoRMktFvxp2pMn9aAajFYj",
  "key22": "3acUBXmgVWWRN87MCyfJoCz9pz1JCAX3WrK7CbyuE9z5SCyHgYkrrFxbEPxWXQfWogL5b82pkHciahK8VbW1aYd8",
  "key23": "2hC4Xivk7zMaBE8yyFNiWdoScYtYAhqEyNcqiV3xjQLKTRYxcMMYqZZTPTXjbYD9ZUaYBgNoaDVn8sFHGQNdjXy1",
  "key24": "2kxdUZKNALbgrpsHa3L1ppdrw79oJGAT8oBofTUgjfrYHJjV1zdawgPgtKYWm2fxogJJHjhG7b7YydySXpWFM2Rj",
  "key25": "cjaPpZaiZPWtmSyH12HD4sDpSBb18y4gU2m9EpFPASE85Q4umyuC874cMpTtu1DTDbsxWBUyH71b8Rn9dwQSBQU",
  "key26": "3Qq3xQScRXFcLV3SBG8gCC24aXZ7A72594kP9bBRta9g3eXYF8JqtBg5Z2fUXhV9pr2H5mu1sXFjJJ1tQH7EreKe",
  "key27": "3nXUozVVL89T5SQ32b6X231J77bXMNyj57cKJVoBKmQESzhoyVySDvUwMcqTDPav39TGZD33X1L8w8SvxjYxuriB",
  "key28": "vYAMCwNen3EbEk5ziyvzjRHnskA8aBHdBWhxGEPaDpbtGhXMhASFeAvEnhLGVfWCkED2KYNsDT3xy2kZbmmJCLV",
  "key29": "4R6m5xn6v2v1dxjAf5Ak6BtHM1MBQ8FVABNyd8RYH5DhTi2mbRhPGkt7DAMWUyq7RfWs3PvaduivhcniT6mdG72U",
  "key30": "5uzo22n5yRtx9Aa9YifMPH7JhR7pcor6CHGEydh9cBqxcQLDD7teSr4iTgBMkNLUweMkFUJrraL4tb8EyHUM28Kt",
  "key31": "3q13oJnjDAWWU83zwyz2nk6j8itzvDYqbbodNrfmfxeiVwYNy2zZ88ctCK66PLmrZzacTU21nV8SmxEXoPHUYjxd",
  "key32": "3zmFCuDEHrVJH1d49kdMJkMe3fYAZjUSyaqM3U3BwqFP2mFx9vMyzpXDxgzufAhssuu2tEcvGHnZ8YpYZx7xCpba",
  "key33": "2BLXbLnYmewQUrvcS4Pnh97nhZLJWZEzNMd52bfyjGTZBtBRwPjCtdS3pfCyjDognLdZjiVu8MQUycK34TgKXEjU",
  "key34": "661TqdjUBkfZptRg7Kg1GQxambfL3w5JH1RT6BijDECBpwy6Atudy3jmP3uRc5YJEeMh2B4B4kUyPvKgW7LTLbs5",
  "key35": "3av3Zq7PhM7NFP8fTDGEXpi3akuxBfQRYukV4Mnttibzp2oj3yA5n2KkvVyiue4xSF3yiyBUT4KzqP4vDjPwxgy5",
  "key36": "24Hc3mbiMiMQWZDyqsZ4wcaDFwCFzJsCurg8Ar62LjfuLfpwnYBadHSmPyq5TcqLajdZnjQCgBz4hLV9n85GUqVB",
  "key37": "4CYAQtyYe6PQv1aJRdhqBTaDnS9w2BqPwTqATdYaqBhAqTFPWasdMtpLaGvdakVzEzshCAnfXmWcheGrfF7AVpq"
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
