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
    "3dKJDdDcUNsWcdj27PSdtue3MtKDTqn6jcnkZggQpK26XaN51WdgkTziVKJLJJUgxkUgsYL63mhbj1xL6VHKjSFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pGhGA8jFpVGVDPEtBZYqyUSYuTMVwHw4QGFy9hSfpW3jFQuDZzbNZwTMyDk8TWKM6J5NocqmtMpMcxsMfqbkGQn",
  "key1": "3dQqvSfacV723S1Bzm41uRaeRUNiuNJTrU19TTXbBkHLULWLDYk2eAw7tcrs8TvGpY21bcitaG4B8PbbR6YAtTPd",
  "key2": "2SLvmdzerc3t6YvVWTJb5ypXB3kXN5ZDboyp3MJBqCXVZ4uZLpeRdMy1fXVHBKA8EgWmF1f4wVWtPaV31nce1nun",
  "key3": "4xjATdzBkUM24CR11rDaYNWMJjdFPfDCxJogckqejz3FkZVN1G8WYoL5Z66YptH2rHyadaS9vhmGgGkKvFJPGmq1",
  "key4": "3Aa7JyxvcgvSbgdMg7s5ip1uZdjET8yKtk8RMZYHoKtY3CwXpJ3trgQK2VGZSjseJKtw8N5DBERfkd3Ff7oF2NpD",
  "key5": "2pHkgBqmqJg7R8cNPcZWjcWR6sbxZN1nrUbYipPwPN5kk1s8Qg9FSwj9iVP8gzwwvjp9kYBzR5YPsUnYmSVycgg5",
  "key6": "4dM6mB6sn4o4bNzTFB44cJPRjdViArSoyaNcvGDXGJwpy3SiHfiRuJ2ppJ8kCo8g1tKDNRo2efnpQdtJwpyyPiCU",
  "key7": "2CpUAsNgwFRhtKD9tp4NqiXq7GcisQLfNhfUkz8gUAX2XNj2y4WEEqwNikgAWaL7cMrDX47zpfNtmHaJvrSsFV71",
  "key8": "4W5Q9dMMGKqi1wnzJbtgbWWBUgyp5SjHxPb45LsGqVMRfCEiktrDSNWb55ysDFa6AmHUjjmK3WK9cEgdGJ35zfB9",
  "key9": "3EicggMu9YNSZM6LFLWtYXcpMzU91QiDXztEDdf8vyX9Tba5XVyiLucWkdJ8a4jY4ssKSpfwtWy1busbcqhBF2ie",
  "key10": "2W6o8euAc6tkz8oRQ4BSJpreGmxJPYqj8KDFX5B5aUkFTLScRKPMETjEwpEgzKhuye2MWco8p7nyJ2BJV31QMgaD",
  "key11": "2RixPc6cJ2rRwzyAqdXcyuvnyyz5DrMKcAbtrDhQiJgRbXPVWUMT9ArEBBnSY32iwHwnZE5noVZ6ECd98skP5ZGa",
  "key12": "BBF7nuykKbcFCJXVHXwGYbs9MJTAU1o2WF9BxVPXidRafT2gTsus5CKxxQfDf7z1MVaXmEv8Tipi45rtUuG5Wer",
  "key13": "3gYsJojB1uaPE8RzEtAb5Ws8dR8SQfH5NqhMqQUwMFaQeCVFjoU2UZTES48FJiGZZFozGszfQJsBGGEE41MJPRiR",
  "key14": "Fyx1aBy9HksUWWNV9SuzEqsTKe9uioeUBQm4nt1ByunpYCWW71BZV45no21bHqmq1kKbgoWDYUNSRoAWPFytkSX",
  "key15": "4TX55KmxMFcJufwxqvpTYkVJbwC9oxeaGTVzsFgexm5fat3J2yD8oxbwvjU6mTMo9fCAvv3UM1nm3VeeBpS9hn6z",
  "key16": "3RzSAv7dNm934rpBpsjHSqquUk5yuMxuK5P8jsB7XdofZtCBYnWQZxkrLSjwjb63KEGz4epYBjRSEnojAnxfkFhD",
  "key17": "3E3x98YKDnZrQc8xPH32sfYfm8zsm6ageD51DBpc428WVDGKXFMMq6ARKYmahuGKn1RDazLsn3Ro5KirXu6quuaT",
  "key18": "2jDiHcBDYF2cmZct3veSzvsvVThtmaVBSUasHBQd4PSgqrtdM7EeLt7wBUQW57ZEtRQbNjxxuJzkC2kRGc5qi6GS",
  "key19": "3PXZgbmHnVYAgwWc5jtv7XKV2f4T3hbSy9WcNDuDFes3X2NriAtz8hRBL8ZTsAw4Pw6sBXPhTqUo42hozrJhkrGv",
  "key20": "4Dp72fwSy12u6S4QRkuuZKKC7sSYv5exoJWzWa2bzyJwbX9TjMcr4NB86RWpRueACXJJtPoFy28XgZPxFRmWJguA",
  "key21": "64xpDc9BRkN3ht3yeu3ttuC4NHmKJKTHMw3WXAkEWiBNSbYhfH8X8zvdwJkKZHMLBqgcq8McoAjXQFdQ2FWp2Rnv",
  "key22": "4g4zvkPpqLpM9JTrMNKA5DESqcxJV8Mh1Ln8pceKUcwNNAesZmpasytro2JHfLUWMxSUf8sqVBpBZns6fBziTZiP",
  "key23": "VyyqVpGQV63Xgdtimjw6h1CeBLAGFtm1CBPQ84WdXgTdmmMjA44xnYwsbajTi5AsujcthL1LB4BThXwmzd3gRrh",
  "key24": "VZwHCd8vrzX6oZZFUpS3aseo63KQeCCU3ZpSve8bGEG3LecUotW8391RrzhjqyGqTqjciBdJVDhosTYkEZjU1jh",
  "key25": "25aJSSJz659y5MMv7u3SPKx4oshFAq47ExbA9Gw5cmdA8je8tYLFHcUcos2ngBb2k4KmLUDGwF2wPySuYVJSzKud",
  "key26": "2SEPb6699wRJLuALuLyFSMFt4CepYgiFmXuqEnNyFmPMNDUqJL8hjNSPwgQf4VyUVZcAhFtJKTiYTFdCRhm5FLiq",
  "key27": "dauyqKB8FLpYu8sjzDVJaug9vFqC6PwbkDTGrEMWrLK82o6NcjU5ST2M4EXNPRn6MksTDeEjwXc8dgfLhrHZ5vW",
  "key28": "4uL27haN8EJao72gUGDLELhSLYMVzhR7jqp1Q9bJy8iiBHHTkVmykGeJQ1wrZsbZ8wFyRf3953FWPnEkrJtvCAqk",
  "key29": "2vGnpBgJ7iP8JQ5VsWuiqyT7FAhpqSHEvMkWifkoRQP2o6mNs1tvAqhBeBkZkdRLUyrGTeMQxTGzyeNnVMtkCnd1",
  "key30": "4J6e439pjtLRMppDSmCBAjbtUD9Az3USRu7VJrpPS3MazM6S8hQQqhGEWimKLqXRPzY5jjY94DeSabqBFZe9raUv",
  "key31": "CU1fBH3LW5b9MEYLuWXhMS3Y7Y9DfKVRWGNwFYTVT1PKGrpSRhuyVjzW7bVXu2B3TT9yygREztfithKk9eTB6Yx",
  "key32": "32CE87BiV7AAyRjJ63LY79tTYafQcrJiUpGb7jhKPAKT6Tp2HJerbg2mSK684gN97rJP7EY3Lf129frTomxYJYvY",
  "key33": "ueFPmh7Jszqdv9sM4tH9SuZNmBjhB1zFoVY3s7Cdu96kGKdMra85JNk4nL21XdRrYF4ZSAtZhQzywg35V4ERLrN",
  "key34": "3axo1Mxh2NUdRJohsP7zYTj4EkoVJdvWX1Yh4TnuVvKDxqvK66C2wQe6PUZsAKxSmo8Zm5aZtEujBp6ejwxPoK2M",
  "key35": "24N7V3ZhZQCMf8A6Yrw8nskNtxiBvhmHRaDAUHqM3F16wDtRTtTQFNWWUfvJnS6as2SnXSRQ1AQ7Pv8bXoCwA67U",
  "key36": "4MnGRSgmjE1ornhLdwumSsStRvqy4khurimuTSQdgauUAz5FFsCCzVM7JFJXkSWxPF5MdKjWJBcSPQj7sevN9jCh"
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
