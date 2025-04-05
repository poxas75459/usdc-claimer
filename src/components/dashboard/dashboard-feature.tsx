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
    "5GvCLh2uWTLEHDH4opQ1s5BtRLqgGY3nwRD8oGDRwN61grGbJGzJvqM219wm4NHshEcK57pNekDdvqmDTiDfvGYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4njAsYHHWFSuEhhpsm7Bv9c3w8SLmypEZ111uYk9d2aY4gDKRTH7fHn5zUNScYqc8vpsj9jLNiqQcdVwQEKNYDY8",
  "key1": "2pZCaAPGCS5Stm9NF3zPPwEcEGX6iGU72SWa92hSuzMFhZBEExZUWJFuRAH6V1WQNSjM6FXYRJ7in4wg5Mxxp4CG",
  "key2": "5C1oFuMPc6Tc8geizZT5HBT2piXutw9n9JhZuNR224pHqtyq5UVeX1yD7VAkKTcRqiBhX2Jprhf6xSrbjLQbEtoG",
  "key3": "3r5jWfWqQtgyWghaZr1pzAd6uPf4QDkivXMS3md8CBiHM9eYA4CdXVvmjcqC8V1v29JAPW2XvA1pj6k1RX4p15E9",
  "key4": "2u7SJcNMAzErKxk8FmgKouaeUsBiNe8wZHs7hqskeQ6kiLfjRFFTB6xGky2HPpVj9K7gQNL5g6RQX34poWfNjMLQ",
  "key5": "21LtL2zD9qmQzLNBZYgqBrj2BhTJkUMr1RPfvzZSqHfUDqPo6tkLf9MCWG2FKmtJHRXm5L6aoq2JoDdrMkYGYVQ8",
  "key6": "54Dm2nixPNdWGwejjq5VKKpTCeTDXQGtXv1Kmetn6vjF7X1h6cdhQamaa3rSq7rNRmkoRpB3cAbwmWmqPbp57iqD",
  "key7": "36y6iJEXDTLVgVY4pdXYHNLNCmDk3KFQEoBWqgdmukLx7PfLiuEZkvkepSf1BQsBmrQcvLJrJQ2bAo1S9ctoSLxv",
  "key8": "2eXgNrA2Hv4kwHtDHRKUXs5o5EsUzv9vTRooGtSZfM6eEa8FqPZKHh6YAQxHJKHmeVQuEJLTPzV6PZSSE1JBikxc",
  "key9": "3RAUyzPM8UsjozjGVGFXPP4SFeKMdKkZ6APr1SXZ42vBwNGLZT9RmFEhF4tdVAGuKmYjuTF3kuh9Qwd9tUySG4NB",
  "key10": "62bieb2ggtCWdhv7kaM32FsccCXSDuDHxmpXNLR6ZQq7Nyz6rDFuSwBoMvLURhyPJn4pngX4PD2uowYjFy6NKbXN",
  "key11": "5QLH4jqDmQq75rhjXrbyBFic8RWEGxsQHeuTQrU3rny2C1AzCxJ8cmWPYcsuLw23pKJ8BJdbGnGA5X1nBc7tFPE5",
  "key12": "2n8Hx6m8ybvWMthKTcJaTuhrTqbTDp85J1oThz4YaRj6C6TQBHeJukufqopk36eoiYha6NRqiJV1eVoVDq23tS75",
  "key13": "4mtkhR3UPemwFgdsGyps7tK5se7q7S6kuS36noBkNVH3NBoc4ymZmCM6sP8f5AQHgF8JuTvFDLfvY1xX26zgrbA5",
  "key14": "5YavMhvs3meDfN9h83PycoobtPzVZ4KiFkMQreD11oDSzLYfLocSp7Mc3iaepoockTsfLNMEHUFzB6jWewr9tSt",
  "key15": "2QXB2ZVLqg8hNcLaKqc72KL4weKX5NdKA6DroKK7FaudAyJ1G1XHeqb4Q1wc22ZX8pEpjid3i1PzEh3SxA5Nz1AW",
  "key16": "44jMePdFKEMdaB56HpMKKyaPUHbBVgdMna1dk5P4By4qk3Uq98uCiUJi4ezK6fkkatuge96w1vBD9W1ejaTLRkfo",
  "key17": "KPS4qzvqPkJKAHXP7tqFGATco411xrWAcvsPXhuc9moYnzcZyA6r7ePwgCNE2rhSX5wBXh6GyJpsHBRfJg4aNv6",
  "key18": "2FTVzot4hvXhRjz3xpiwysk9G3EQt1QVxRZ5HCGBPHvqupFGqpC8wiJKfdXYC1hA9YcPrXPMKNtqpMwvURUBLwPn",
  "key19": "2ZJoVTMiSKDSB7fQuwMMpUTG7iMKkKaVjKyxvjBjxB7tDQWW8wc3WJvzS1GbH2PPP4PGTKMMbeHxB3hqT9fU95Pa",
  "key20": "2U91VxYoBRdmrti8svub6TYVamYgamnLpGRctXVoKVs4Z3Vh6o19jBQGeJGL8BjQTrK5T5g3uNPDR6jW8sPe3ovV",
  "key21": "3qwnqdY51CfCsiMobUwUZgiaVr437RAPKawMpsY6y116fwEkDJquC4r2M1DTcd1fZWcc6FAHaRAn4cr9aJ8ez2p",
  "key22": "5iYtZg6x8S99DbAPP25agbStSqBKjBR6UHwFqymz78HCVhXtZfXJxyQwGqh7iV69gYwvvKQ6Pq2Jvm5a6Fkz1xRa",
  "key23": "42Bmz6e4BKcZw77dzrwi9jt9BamP4uqrMvcKphzDcV61tgjR3s65hCACphC9RB4Ao3bTyRFhiVHK4dsutfiwhtmS",
  "key24": "4tqqE4RxGWfjVTe2qyV66WowHEKUyxPi9a4zXJStuVzK9ojVbqgdDeDMEzY79UNPtoUnqpqRZKBkp2CFVdt2CsPx",
  "key25": "4cEpsCNkQaNsng7mokTfRem3y1mNq8GtFdRnUjJviqusqSWkwUQEMfZihQv6ojyFFkSbg52xd1e4sE7aDusHifPW",
  "key26": "63E3k3GbQrG7qSh84UVjDsu4dpZtyRYLxsdacUmdJ4rVZM4d82Z7AkZGrw4ywgK6TRvJYcVbZNyt5L3HkiekrzGM",
  "key27": "XBe11uUhzTKJnAtCbTwcKh1d8ekKa13GRHjJiAd3t2HTt71R2cpBnU6vB8xgYZc7ErDyYYRccG9j2NsLfwDnRvN",
  "key28": "35Nr7Vf6J7KvNSHuy3KJWyN9F9CK6ut8MnRicHUXQH2feftJFKvTLtocx9ZLrA3NKsp6QSquUvz9RtTKmEPJ8CzD",
  "key29": "2TRszftqsrAZj3PFiUhr1xXBVfQFwvequUN1CqyGjDKymWDnvPReeCrUXHoqgyNBtyXjgiwyixH1y88GQK62gTsu",
  "key30": "4kumBfhXWRpousBQLKH4bdGtiq2SjTioE6rsEjwsDT2MVKUuTu5Je5qyADiM46irda4QBnkAecixP7Eks71j1ieF",
  "key31": "PgWJnhpxtwV1kyLRwx7PFu3QTyajKp13B2vsAnpqxkHoEihHZZwxjYn1praDDjVvKYVQTcbr2f5uNDQuWsNPxRH",
  "key32": "21iMh9JKEt6nLfuFPmCT9w2sYMm75HnZoSX5EDXBmcB3gWaj9DW3juMYpGZE1t64NdyYimwvJFY7ikhvZ4BEcNi8",
  "key33": "Yc5PtnAYmrXFCMgWX2M5Zq3jMimzDD2FeL1ZbPTpscaPt3S3u3PWiS4NPa4bNzc3onafyjGc2tGQSw5fUwVUWHN",
  "key34": "4SkH8yxFWg6HAg8C1txAs7oBddoy5aeM21iGBgnvBV7h8od7ou32xFCZHcnRpdotpoEEtf1NwAMa9Jb2CM2PFSxq",
  "key35": "2zV1emYhfQy1wB8cHnyWSedA2sopT21P9PwRvg6QsYR7YLzWtkSc4198ZevcHJohArue8fyPhhY9pDpruvoWKFTr",
  "key36": "VEiyPpDW8FVUPqG3uNKKGrp7JUEtSkhYrKjwButaLMiLEUvJ8CprenWp4PhdxdqT3KE1W38rRny2qDMBSFNWCZY",
  "key37": "2mPFLWrp4t7TuspGgiMTR7CMGtQM6AgpuNVNCrGisCrZFUdbFt5woavSDY4Yk9J2VxYrHQVoEQDizk5U13TGBRm4",
  "key38": "5Sp6HBu4VgvEqAde7ZbxfsEkgcSpLd7sGiiRrJFy3y6SQDSHps19j862inC96vodzvkxghKDjoxhaBTrgdQf2Hto",
  "key39": "588Pq1DPFkZaa15NkJoF5fLYJutiUpHACPhFemczTv9bs5CEHNyjWSEwn7htQUhVkmN7Pr5Qt8NCuZN3THS8i9UT",
  "key40": "3X3SHpxAWJt9wmbtzdeaRGeWNw5mck9ug13NV1WC3NeBFrUd414DBNbQJbnMHxo3Mwhro8wXe5MP1ALMVg67iZqd",
  "key41": "5ZWvm7i7pKC3JY56KDMGKWvTDjY71dSggmr2KHUQjNYfoHf4KEqD7VJ63EXS3sd5Atn7GKp33N3Y1StaQiRwPvZ4",
  "key42": "39U1YSTj6MaojtApE5vUDE1fLEFPiy7JAdMHQEi7Px2WbeX7Q86MQnd4js5yeS49U8jtQEvk6WGiQaJuAeAqRQBp",
  "key43": "TMfBDPinwTJNT5ttdudGXdKdvVM52HmPfFrYJzCAJpKxjg7PBcngWfiW9KvmcQ2UyuGUdWo5v1Kq5supnBkguZd",
  "key44": "3s6mcZ5zDR79t6vWHYKPjRs9txFNk4rHiRVtv3VC2m6dv9bS7a54Qm8T6ekxmRUdDamEy4eE3EwvLQfFosM1aDyx"
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
