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
    "4ZMRetwABbRA9juGF2JqfiTVcAhkohtLR7fxhGeP2o5Bz2iNkEGbVnLYqHkUyUcTgNJynfiwsY6Gi43Qu3BkEaZo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38T5G8W4USbLWMyS68n3wU37USqGkEnsbXMeQV7xuX33d5gvqpzogfucFjik2PQaA3deVWigYL8pawtWVrPHkEui",
  "key1": "9szg1vsq7RUzsF29pmeCouciAZA3Lzt9Rtghsiv3qiBDY2jj1PupKUKJyi25yZKyLjadLhL8nrA3GcA4FqkduJN",
  "key2": "4BtQ2pbvRrjyEr6hdS6AaZh262vymbAMk62xGC4SDKKrKSe2DYVS4xEtp29j8pQwq751DUvdXPdwFNtXTAuMH1cq",
  "key3": "3zid3ooJPgmZdBkMzepTiEfWpNE4Zf23p9u8nJbyY5gDCWtrZcbVVuQqfwTSVsmNZ8sKhy6jRx3RNoDbDgfCQo7Y",
  "key4": "5dHhcHkCBVDeDxAKDoQ8Z2qVu9WCRCc2Fcxx3HhCYy6fVT9ZxUxMgVsjGkGQ2cGW97ajSc1YzowHBALsUa3tkTMw",
  "key5": "5xoeeCmPhnCtdN3J29yxesasUG1SzAA4fXdvDQsKN2TVUxCXR1jXFN2CXfrCaXuoWkbJ3Ct3GKAve24JLq3M6zYw",
  "key6": "4TNvD2BKseLcsNsS4bcxFWa9KXQUCGbLx4KjZe3mtJERwJGUH8Z5g5TTVU4v7KMKPsbPm1AUWDj9nJ2KLAmNF51X",
  "key7": "3b8fM2mp2Yf7TwjdorBXPJphyB6TTHKwTiDHfrywWzzPan91UUc4kxpzrAJ7Dr6H61aWDBsdtoQyPB6qCGPcwLrS",
  "key8": "3VAdzv2UTMsLZT968AR9AcfFqaTX1hjiEvF8CsrNLoue699ctSFHzMK8xsDYrMgwEinYnVgAHzKfBPnNkL3tNysr",
  "key9": "49AR43gTsnPVz6E6Jb6hMfWYtaSmkHwDFKGKvndnVCTLp9aqCgy2wvJrYmc82J1CeZBnYSkyX5TCf56ahg95dKKc",
  "key10": "2gNa8YXgrKv3PZz5cg5mKsK96fcbNt64Pyr3zZBakVKn5dugFi7xpRG5hzmMJKRj7gf6k1n3mCe5QvNpipkdiz5q",
  "key11": "D4suZJWjMJPcagMo1nsxYuK3wfGNy4ykZt29pwHiEhNCyBdijdvngeMc34ZzTKGg8rYR5q1TcGnThPdckNGjnFc",
  "key12": "QmqeXHThda2imRVQd8GHMqt7NhBqU1DQ6szssEKyAx7nyYLQ6KugsJ5cdrshq5tT8GqFk2tD8MDHQsnpAVB28ym",
  "key13": "oAVvSsJ9chJymqv392ukygRSriS5BpLvvVaHqLM3NExAAmgvA5ro6wobhAehHo9RN8wbHngBaKkFT689AtDJriZ",
  "key14": "45mc7844E4UsKDWfrxyeuZMsZzD4o9n6xWNHvsY8RqGsDxJVcwmEeSdPpqzRua1VkqdyvtpnCBfnAbzRMyVfb7FA",
  "key15": "5gh3ARtLG3wC8MaprGU1nQ4efHHYTFhYdAQjEqXE24vWfByz5cW92a9s4m9ihBvKGh8Ap74EyHjewUrofSCXVt1U",
  "key16": "3uosTNXHQX6hRpXyYkAN6jQQnsBZnD3HMGE7g3ggwzh6FcsWQdQeZX4KsGZszA7ErqkZyYuUMqhFonnr37dUYxm",
  "key17": "2VYUtVeW2dR7SBxiwMtWHipom3LpwHdBQRoPHQVVg7jwoyFBgD4VNL1YyPaqydJPJVX2yJexTsNQUrax64XcGz3y",
  "key18": "5Pq8GW3fbami2jN85X1wDfSdi7TPCtG7eZQ9VVpn91y98BRSy4iXVBJP2jHS8yeEkQ7Lh4V17v83GMsUktxaDUqN",
  "key19": "2J4bmYpuZX5UcFKPED2rUqB2X7SfgRkQARGJadCgFFmMPdN7wQUPLRn1cBEN1t17KrEivWK8hhQfBuVxYTErXT3C",
  "key20": "5y8eqk6V33LW9coiw7eszsZ7ackjWP3quVQwayQ8f3XSJetR51PB3JJyXAinwUs8r9QPxFt5i1TyYqzLgheiC72L",
  "key21": "2jrJgwXDqPR7Zxw2bViTnmzLdrVqUMpp6XJDDHvKu3aBnvL9mSAJY8sxLe1cuT93VjfYHsooQY6xUJiVpfs94p1g",
  "key22": "4iH9whFmxHBpQnwXK5EPUbmx2974W5Lw1Sox83gLqW3vSJ9ceG1kECUxvzdQ8UhVVHHJHX82YyCQvspgfANHJapK",
  "key23": "8c4S3FXMjsxD1oqp8YtfbBENH3NqhvAmNYQLmYTVpPXAvCdsa77hysq8ZgqDe3xpm8sjwhnWckVYGVpWbXDdN6t",
  "key24": "2PU2dMPX3jz9fuzQapds3pfTRV19ZkL7PyeMU7qRJU7LHzxytk2kJ3YHVjG2tNXKhApzgujaiJgaMynFyTioX1gG",
  "key25": "4hsHsqosr2tTCwV5LUfiwPjAKaSMQBtcUqfmWG1rcC2mrNkFcFrRLjN7ZR1PJwSjQJPBKkbszfHWUnqmrReDMHq3",
  "key26": "4EZQd4aVf5jCXghHNioVnTtv4c9T9DjfdbYyxEnZz62v6Lhyg4kEjd7aLcui5fL2opGemmqU49ypg9PNodW4HEMS",
  "key27": "2KfVxvpHP7URfGoPZYTFqCXYBD2tmBDhXEcbdWFnoLv5kEyj3UpZ39dA9dQQZCkZeKfQReRjoi75MB5QQrmKyyEW",
  "key28": "3hJu6x41y1QCC9M7GmzpCwk9VvuGY7FgAh8WfgRxg4C7yNk5pm3K74PByMa4UqRZQneKfFk8J4iNW2tJGEb8Ajd9",
  "key29": "4WUW4Xj9QvgmDWxUR6Tb1vTk5rg7fnZtzqR3VtSPeQmLXjXmKMfrrXMtrrooSwiKLpdYGZa3ZkVc9df4eBdDyt9r",
  "key30": "2iH6Vv4SU15KHE9uDb5L3tN8HMKgijKRFNJvByz6KVefmgRQQ54MEwvmCsS39rbcHjmXiJUbNpVXsKZjsntQKM8P",
  "key31": "Ffq1oeawyxqmAQwSd4RhDvjD8uMKvSqbSuBUx2in7XmMZb4eQcNtwsp2SyhB5jvtCMEEjuufmQkq7c5CwGA5qfG",
  "key32": "3G2fyRYQZJ14rQvFV7UDztRmMneEbRH4sLB1U8wr9YYHEsuyBrkqGjHR9TonsGqqGxLtQwXnuUPHY4wvYtSyoiZE",
  "key33": "5kNrjHqPNmkQzNd7Es7P21UBxgf33epdnEbFQu93zbohcvJkAQ8XRT4MzcgawJx5CC1d8C5Q3RT3aGEsrx3H2hjQ",
  "key34": "3dZTYKCBygDYLoNejVMbUnS1DQ6vrLo9widvDuq4ZWkPF6vWt9gDpv32XUCaS64BtdkvNpikqULKnjNYc5HY9aL6",
  "key35": "3bT7FotFrP78APfB3DF2pPov57CjaAWojNQPrqT36vyZiVqyieMSQ2k379mH1XNAS9QivDFmCkk3WpTLYKQQHgVy",
  "key36": "2LR6mg6ZUY9D4mXafsqqH6UQtw95csTGXYQqUY8Xx1Luaef9u4BsCNim28D1avuQ8ebexLcxUNBPZCFvU1pZwtMV",
  "key37": "4nzZaZrRotiiv9U2CybmDdFL6sEaxLGVPqwyqnUviYUXn5jBjq4fVZ31y9DgjKbdyTK2qYZ71Pzw5YdK3ayYvtWh",
  "key38": "qNpLf3uiqtFNqmQYK3DFrWFvTwHvehgV9axLZrsfLLfQTkpMevGMCL5vTvKXAWRgPdEC2r7eXxtpveE9x88C3xP",
  "key39": "66kD9ndWjN8LuCCG2akWckghEj7aULXR3GGUQszJUCh68B5q3TUkCsGAKdtS8dFpnFwbiaPDEGiY6aUspP3kpzQE"
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
