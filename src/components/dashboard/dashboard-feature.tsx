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
    "3Ncnzse2W1ArGwLHeXf1TPT1qfqayj7tnkbAiWuzxrNYqyQoKny6oTj1iqPXzwU6MQvaTTbNXr2iD96ddoN4RqQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2idJ28pE1TTrPVaMWVwU6y7oCmBrEbRHK42jP4AxAozAxtf75mTKS5nqzhoXUVqbdAbGXP1Dc8EM1G6n1DDJ1AoW",
  "key1": "4k6qhVsBD5Hob8zxnQcajzFjhbendjToTHHwqbvac1y4ecSwWzqmLkXhqT5NEqnC61zj57VubcYMansPydm5d2Fs",
  "key2": "3QmRAVMiZarq6u36hLNsPkSEy7irtKkj3vQDJMcpfQQU2XY1uokXox16P9G6zuQrcKLcC8GpLj38yTH3i6KRCUNZ",
  "key3": "47LAHdGt3v5e4P4Z5WgSTpPuWFqTAa56Ez53kZFKzbw5pb8biUfoKFQkvV84E34RwD5e8ADExGG9GYXiLwettT5p",
  "key4": "3CEhfhLMXaHWVBsqpPwWPPTD3WktdyTn8pX26EposEeAJ35E9ezp6M46DQ13cgkDcb4CUE42wGZCpn9T6oNekr2p",
  "key5": "2FLyQQZtJSkhpB5KRhA2qVd3N9u1u8Me52wgDSQjcANgeRvvsiwWNvC5453PaB5yabGPZRb9Kdp42yiigm9Q8GMg",
  "key6": "33kYAGwDZNNf3BiTGprsbDrrbnaJU4UXMVVq8YURZb4oXPCFKwkjK4D3SZd2CLARzeuNiR6W2mGN9njFjLMtUoG5",
  "key7": "4dRcS7UEr8m2zcqQGTCSoAZPU8FVJX13NLABYFPhUWRifprxSuXHJVCA6AFfkYY23RQ7dbxfNPZjBnSCRkBcCA6n",
  "key8": "5wmpJ2eUHyVHqN66avpcGcNTavC1q2eLnTxa11wM9kPiyoxcZqFmBhmRyW7hsRN6VkktRTCDeXUTNYh2FXiqLG7N",
  "key9": "26GzmwFNwz9EFRBjcdZyNKsBruYy9YfnnGGeM9Tc6qTZtTvD5zYHeZShXGd5HugvLut1DX1xip9Hc3BDrPGzuSGh",
  "key10": "3htd8AtmTzsNQgdiYjySJ1Rg5PPkPKH2EJHH4FhQEVBw9Yr2auoCJem3xsxGgiq2Mz8z8hF5QbzEiNjnt5yiGtv9",
  "key11": "5ZDoHSNkuhSxYtwEj1JCUfhtfiZ4S7wbna3nszdK2NHQGUU3TXYEwmCxLgy5vaWxfUkCtYWDuTaqHL5MJMqWhYjU",
  "key12": "5eWKXcTrvzEhYfqXCE8zvNi7m1k8NQs8821fV97x7QA2ipJwLYRqiz44mwfVBrZ5gDUoaWiZZdFBo7HqzNfTTUfX",
  "key13": "372sGuNQvegT6CYnxMuUtY6KxNhtxbnghe2RDmGRxm8kf8T1h6PQvTMpTagfmQi55niC9QZXHKbp78JDJm8B7bsC",
  "key14": "3gxV4AigLCVMhaaTxehiyYTWU4SS5x7e5eC56rcjg8NR87FPSkxDjbMpkVPSbi8nXFTw5exH73yruwKjDn8xn13c",
  "key15": "2t8xd9RctNZ3jXjrSbQt7n4dZnzdg9pLvndKSqN4orosaKaDFUkSNAzVjJEAk7KTh4ZStsTCXY4ccU9CZEYieodu",
  "key16": "4MYk1cn2jJzQhujT9718DdVmzYj4CvmBzt4vtMwKqfStSpvi8NGg1zQ4ZXyHg4CzUvGxUL4PQqsfe88N5CHzB2G7",
  "key17": "2zzDKRsYyY4Zceq83MUvqNoHQEcLpqvwWdMZdiNUUmuPg1RJmWi4zYCYLJvy2VfSsM2wEc4JXNsAB7xw778L6eRz",
  "key18": "3cDn9YHFdS773heSYDnXpnwF6EVzDizkBnnKazpbx5RU3nfemRag6XUpK3vPGdqBwQ6gm9dkME6iVJS8BsSoqhLP",
  "key19": "2RzZ7v3TovNPw6k459bmLKLXE39XfUgVbLJ7mNtMARAw2HkjMydGN1JdXB34L6ZALHGaDXDQd7gmqDeN53owykfu",
  "key20": "keMWMFYnHnb72mHPnksf2EdCsjSvMC7xCDuryHQzZiThbowTDQkzHjUwVk68yW4L8dZWE7GAAYz9BPzy7gocHmx",
  "key21": "6358c6AAmGCn7GejMeXeTyuahkkVL5zDYTV7swmc9iyiDMFQvgbgDvkdRT1ciDL2XaVcqAk2ggFF466wqJNEcs4J",
  "key22": "2tC2iePzDFi1VvgBWjzAEyzVfyNySgbwLjsAubEWvhoqBCsCN1k7afjNad5ZVFKKVyD6zWufKc1yjdawWVobkn3b",
  "key23": "4BvdWgE7ygjaVnjMxbdgbSy63kNs5taUp7WC7rUDnxQCsZj6BGVCVQ7ap8oUhxCxLNf7A78ntrCqHqYRCYgXLzj4",
  "key24": "DyAu1Rdc2Co5npmCxASgwvYQUcFX8Day3qXxCbnjmti5hy6ghQs7vrco9MHXdgQjdT5TbSiwfRwtZo41xEJowb6",
  "key25": "3LVsQ4Bmi6XgNxEGEUKLBNLWxjs5jL7xCPJnBjQ47abBuNUb6GSejwTyWfp6aaSQfYFYjPKiw63FCekkiE9W2FgK",
  "key26": "2octYUbVU2RKJMjXptyb4MzhL4VCYoJsxW8hwN84LtYGJb6KLHHQTwRBDDFJPv77QyMsL5e5KiKFmnsPEiadPuAE",
  "key27": "37JgVtZLTAKH96Yr53GTWiZaWowfFfxVxcduUJA9W2rUHEnv4pjEUCTc5CH6rZCw2gckmmcqgDER862pX1ERBLHq",
  "key28": "21wBAshv8nzKMinZxoTKiZ8RYN5joDkCJnEviEsEYhofHUGXrzkYbURuubFRa8Ay5ExUyqYyYtforcEbTtesHJGp",
  "key29": "2EAeS7gjrDmZLwMq5yUhM2A4YPuawu3Eob3Gv7hYa2cUL58v36BvnJSv8rakts3v8E3HrzUPaxkBhK9yzHxv6hjo",
  "key30": "KcwvtXYa9kzqBuastGg9xVzo4Gtx5V5xFHdemWQimnqezHmE7KjiAv2BDtZi5Crg7XjEYuDGZC5WvkkEaWhSPax",
  "key31": "23DAq88GiHC7kGn2vrM5DYvTaFf7q3K59Cg3MWKXmxgC38kEUGetRWz57MENKfoKEGk7qCkVRM9nhafpShyDpwzQ",
  "key32": "65GnDWN2mc254FjPDM9pgdQjzdmSrwQ5DoSFYLn8PRr7SEQRXj1exJzK1cmmFaPKwMr8GZh26CCj2CigFfRxdh4Z",
  "key33": "d7JDecuamZE6ZSW5MK47kSRrTtYAACQ7eiXZaja8CdEskWBt3gVmKYpWR7rde6W3h8Wv9PG9piPF6PiFsti9ZQX",
  "key34": "5KKDtDQwrHGpHS9bPfxWxFRCUohiKyb24dDZHxVjMdoQMb5MA8jJoDJjJtdVHDdnsvE68CQMth85zNWHXQtmWYaj"
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
