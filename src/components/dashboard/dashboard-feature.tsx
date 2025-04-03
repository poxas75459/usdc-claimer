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
    "Yjb59pHw515fR2JZweuuXQS4qDEdsTYTqtb36AEK5qPAbNf1CYLFyAJd2woUZfR2C1bb1AH89dPQzYhuCK12GYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w7c2WnhYk3sAEayepHMEANLAuUdo3LZW2FoJx7W5x8kzEaadiraDHzCXkuE4pyXWBnFiXMihnuQ8i4ER5L2ZdLn",
  "key1": "4JpyAP2tpdJPQKMkWpGnFeR99cvgAKZ2WHKnPh5UGsKYuStKjzTb3QevFv8cmiJsE84MN4hvRJEcWfJrEmjg1Rrm",
  "key2": "662Hf7kQD1mSqFN4Q7xnebceWwZ7dYt2wK7PDGxPxYRn5CBs5vNYQ6RTk7Drr2kmdp3xsAjmvUgkY8gxAh7pjFHw",
  "key3": "3gPr8GVc5yts4fagdKGYE3FFyXqSgxFQyoMG51vpuZNdJrpvf8LJyQRxLWWxQskESrLFuGT1HYvbop62MWwvc7Fu",
  "key4": "5mXgZytSswEJ1QiqVJKvnt6qPXEX8mccbJZJkLzD2dedyCPLTq5uPL6i3JVQCtdKe69JtV4AF51UvpNRp69dWQXH",
  "key5": "332rJLSvNfbvZmYw22Jdfqq45fPgk64cBkS5JcMasaxuyLTudKTXT2xPCKT691836QvVsySstGGYqBF46ATmiRvo",
  "key6": "1VcmnQiqKWQzqzvbNGeZLNCjLBz6LxB3hAn4XTSJL5gkDfGpGzQjsFJVS1iEG1NXT1f7JpsuXqYipdmD4T9E5LC",
  "key7": "58j8pzXh8krC6XdZRQXp2eNrBPchUKBH23z24bdPeDvVXDV3woM6ja2T6CqNs8dWdfpPJHA8N87EMzbQ6b77djuv",
  "key8": "3c8qQVoQk4WouUJLhecrKEF5CiTnyAWsBbSWdUagHUici6WprbFaC7SgFHezvagW56BvrKX67oCDFtgDf9MyDc4C",
  "key9": "5TKZnw3soWmrEGxFBsfxYRKUbfeWNEdz5A8exc8W5HxY39jeXraLVfa5YKH5fxmqDeHBwewn8PNoky1sg6aHJFdj",
  "key10": "nK3WeeQr2dbtxo7AQHo3g2EP7MJTUSZq13SdDP6nYWZWFr4vaZ75TVLYPhMfMqtn6cLLvWVUPBrMDCTYSgYkS6m",
  "key11": "4KbP6oWhudcNXhPTsHtDXBaFzDZQmRwm9VahLMmxj4FPtLC1NTYWFpLBXERiJa2AqLCmE9puoWfiacNoTw2PkQM8",
  "key12": "2nMKtXfkFz2Ej1FuG8wEYsQXWnNGLdCQgVn2CAtGB2r5yyYmHQbC7hdUPU3uKMvGERU96zQkjNwLJLtc5B9cYsso",
  "key13": "MKaee8sCAYZyowDQZ4PYRCgi2gbXnsm21zqEHCNx22sK4GJxMQG6rMhprtKtsBx8LSUU1i5wunY7JadBPCqd5JU",
  "key14": "3Vi5cAWDnUJaq8Pt9CmFrZXPqiQ2iCvw1gVun598xNtea8jjQdE2MbGfKzgvR1UToiQxemsFwDEB9sPPCyxvmy6q",
  "key15": "2XkcxPv5HepiukH1uSBLgisEivcK3r7Dy3kGpvduUMdKkbxd3kyYcCTEVpnodoKuzY49Sai2M33dFosGTC3UGezn",
  "key16": "25bMVBN3ADatbDGmCkxbzt4D8b616zn2jo9M8ZGQGsmkBAv1eRcVski8yUAySaH6PtLNCm6r76t8k6pAHF4H4WWY",
  "key17": "49eCnLw3TUszqfVcJYY8TMYfqBismrnmePDmDh46oJ4za9QyiHMoxJc5poxaGDayf9gfMCTwgj7wNdor7W75h1Xn",
  "key18": "5wbZHv9bywfGt4xZQ7XP8c2K4sijQYzFYFaP6jDxfXbEUck1UFrdcBep86nsY7NMdPoKQBT3ZCd1YQXzbkGJ64rc",
  "key19": "4wJHk6kfmfETsonutgBZZJyTCxu8jBG6YWp4u5SnX5qiQ87Ukpe4HkcFTnUYmYnsYEtAHvDVvVUB1HpD9AH4bEJ2",
  "key20": "2RpkaQXN4YfZYiP7SbjNFuwUkUZNvE7tavVNhwaikfq2eVWuCm1aLFiqnzcuzHZg9HNqJbpKdu1JZWQTe5LsmciA",
  "key21": "3rVex7Yimu6nNzGq6tRZVKpYr8Mn2xEY7eCWDCFJfPabgmreSbXUZCFiNmZ3fiwX5wk2kP8j6rL1V6vFHUpdpL7U",
  "key22": "3MCVELzX9vTEwa46wYFaMjLrmfpqdvfa4njrj7MFkdRcvx77SbTuzAJPGkYmgrkC7Z1z4PdzUwcdG4wMaGrtZYeC",
  "key23": "4QCUWErey8JGsj2uKd96HyQsK4xYqSMczDh1bPHbTZXoqfFJpU2ouqEAz51zqiE1HBWSnqyF82eRke2ij86ytimF",
  "key24": "Fs5VV5HQ79GkkKbVoY2syDpE1AUqbRHA5PcXqHmztEdwYnHpAnGocAxcBmCZ67RLahQC89wb9US2ajFBfsdMRub",
  "key25": "2zhVfuuQ1kfcC2vU16cvDqto5EugxJvB1boh89rNMZVroz8Dpdb7RGYLqtqMggMcuCcPn79ME2ZBHFFvbtzzeWeS",
  "key26": "2qKxWCjmQmbgxBhhdKiFvcCarV4EBpMoYQAk1ZLytzPaPnfjYeK2ZtLrixEKy4VPaqVdxUjAP3frDU9ij63uz6wD",
  "key27": "5PMwFSxu5mEXWnj8q5KncDPV49YFwf64yuX5TLgSi3RejmpCQkuzyD1Sf3nQcZ31UatNKyRctKmkWnesHBFmWH7K",
  "key28": "3e5SzmM99YREH5uFC8mHmZDWkNJq9B8AbFRK2TRq7H35XJ9oGBhhf6gExiq3VNcAP4EHiCte9EXoQTZnDWBD9R7d",
  "key29": "2rDvYHpenk6FBGN5H7F5szZsRCUCLb1HgUuMQDMaK9688EGcA8yp6eN2EnR1oj6GkwvcTHGkSaT1ipH7YNQjM9Rt",
  "key30": "3pGcvSMU3G83ASPweGDE56GQv4ggmd5UbmsgbVQFh3WVm6B5KNj7fqHiQtxVgjHUmqnTGbscHDAW296pLe977TRv",
  "key31": "4foAm4i1z62kogWgPoG6G6rsyWRbL3R6S1vTqptKnFBqXKeAzxupXingugmTwShwTKcnJqDfwPVYia5L75fppfvA",
  "key32": "577sgnHRSFMU4UGKsduzbEbGKPaswqEP1q1MbUgVtjDbRRR5wG3r4i51zj1qdVqhx4VbBsJnYgdbHY9pTDB4P1Rt"
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
