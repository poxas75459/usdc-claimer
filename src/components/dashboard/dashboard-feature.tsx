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
    "44D6sBTodp2BZGpWkKCkiR4GM69Gixx7uaoqHDPooJDVtZSe9D4wWycc4GA9z3VhTXJocNhGitUSKLBm3RqrCYgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eXRtboRV1CAi37WxFncncNz2xZBfGDogk57rTuyZToqY8hbJUhuzMZfrXjAuJdTcLV3kooZpXTMQmj4FGmYHnKM",
  "key1": "3kBFXfo5stmEom9ByFJdXFp6tYfmNkXQcCF4TU7RotXo3TMQe7HToGMDtbiNzMzniZV78oJa8wJCs27jGXs5p8qu",
  "key2": "4TettK5mGaoHqk6LWNe5szw3NuLcm2YmipoQBDahSs4wJS4DV9HBYK6tjNWA7sEaxzEvazkyWzyefLv6D5bd73V1",
  "key3": "yEFM55n3PbUisJMBjyRBScLGjc2ijTfoz9uAjkghcoYQ3vXuoUb2LPBbkFKqU9ypaDrXf78AeFwtwGecX18QkaU",
  "key4": "y4Jxqqcn2t6jZ8mdKEnehQfdaggkbZxXAMU6NLirWTmmxkLSGgki1k6xr3ELahYcfqsFocCeXMkWoY4TBsfi1eF",
  "key5": "5wkxsNqYctcHe6yePE5YsxCZFQ5MsqfZwUcgyumbhEsp3UTn22iFbRPEjnrMiaUacxLMUz2i69muqtP8jauRSD4e",
  "key6": "46g8MNzbwyTkcxvTitUgxWNJR6sJCbXkVni1rYNXX7hJauCa33T4aerDJhH6Dfk4kh6cz83nR71dAT3T6Z5vBF2g",
  "key7": "5G7yF1CEFHQAvNePtPKKzZwtc3FVU2HQhxQr7JDTdqp1gHjhy4h3bb4f93mhJQiqQgjzEdDZQtosdi51ooBUHb79",
  "key8": "5wPUSVEDMVQxX9cyQZwZdgbM9PYYD795Fk2XdttzuVZh86KRunnHaW6afpHqujDdpMtTAq8zBT2cQahZrrSxAaVG",
  "key9": "3WrtRJT7c8DrA1HBwo16M91qP56zUWZBcB1GCVSm5LsdR5WJh5FguacS54ZWhG5D8fkUzN2xvPRBf33vpjSCkPkx",
  "key10": "zjxtUQvf5pck6FyQX3SQB82eWmeCyZMpBA86oBDW7u62NPYSYWdzDy1pmYk9Hmh76wKhmAw6QsmnLKtec2N9fC2",
  "key11": "DRtA3mM8Q75c8tgogUGjkHuCmMAN9kR9uFqoJHc2yKtRtj31sj44PF1EacLKfmAajuCkhiuGxoyTihFVfRXaDHG",
  "key12": "4ktmmn3ZKqM34YpbsugLWQMEQrkNy3K73dPgtWQuHXu5ac4WR8F9wwGXd94vQZDCJVxnEGu6A9kfsHS116WBTzwe",
  "key13": "HavTnZxDf7BFX5QeKQENmVPoebXrGiA6ZFwwsf6sVUwXV43w6r9aJP97qQK4drdSHYUr9CR824ctfCx9YvhCEPR",
  "key14": "29bDnYCTpXK3L8AsFLFemAtxFnL2W9aKoUXjEPXTxpaMS11a5DmxhKfRho4LhxhXWs96vzx3YqB9YbCCfLb8fTGK",
  "key15": "3LBi4EViqMNm5KF7SEzhPBkJdLCBvAnKEuEoVuNjcj1UQCcX7pyfbwsxwZYoWnkThf5Q5GmCmEqAAjgtquanjrVT",
  "key16": "w4zaJezTSi7BSTKk7Ksg4w7GtRrpQ9sp9spqw3HjayPdtg674zjbPJhDPck9ydopYEi1pjbw4kFF9RwyQbV6zbj",
  "key17": "4Y62x9NzF1PZT6UgHv8tn23YjzpGGJEHgEQ6u2rk7rfi9MY9MayhKjMhKFHofdM6aHuL7RSnV9U8kJcGQiTpRGe8",
  "key18": "59xnatpE7p63BBTxhELxnLS5C3uD3XXwA1tN424GpUgN5GWZHzWVJg4pkagHbTbDsZysyH8ymqe4TQzn7Mhd5tNt",
  "key19": "5WtEJPJx1qztuf9M3Z5DE77YvbYSJxnBh1YSGow2azKk9o56kUCt11RFvxMwe5goLuSV8ZmLpcQTVWHd9nyik5hk",
  "key20": "2AvgEqVjGt6wxLhg99xhsWMcjV37bbEgkXDvX7FfoztEnE1p6eNnY4cFCjLUyhaJSpUSEfqMS5yELp6ov8C7XLbM",
  "key21": "56cJnHhumXDtUTEbHSteE97QBeDCFJSTvKsg3JStWffi3BLA5xmPJqrdzBpKegVZBk9swTT2jTCh3nKAg5y2jXiR",
  "key22": "3W1CY3mC78S6UynFWniqTcnwFi2uMkZmaSCRLtGnH3MkX4GGnwaVLqc9MWEbYoG5nsQJoofciBnqP4oZdWCPv23F",
  "key23": "5Q1Mif7am8JP37hYt8R7SSsWsF9F3GCo1fThprsxvkL5NwuRw3519ZscxKBrLyRPAdWY5qLSCBJ1A5LeYAmhtyFi",
  "key24": "66hqKPKxZCyKgELTEPu7Xm4zNb4gzKnzjfwePWW1PaFrc8TAkEZVf9u1RJThp88e9Cdgpoz5HDaKoQ5DKRxTLQmc",
  "key25": "4YBxTSF93TRMdo3QSiRjyLhTniDRAsaTJKNEUtpTVrPbFKqUCUR9s1VY4sapfjq1Q9LYSMcqTapmEXm5KNZaysFA",
  "key26": "5vCv7dBaFhZd3WQG3Dqbaw4XVWphVhxJgN5JwhePJiZfd9Nr73A54fFet2TWtbJErpd4kDPdoBRBYAyBxntSb6bn",
  "key27": "4DzafmGX38aYoSA6Gpiy2Psw7pJQGjAUU8uvvT58CXywR1fLHaupd5YcusGZ8pKuWtE1dbZ69fsSDReRbMiSc4AT",
  "key28": "EbNvBxfmde7ke2nRCjfGT46CYpejdA8sQ7i58Z4NsBEYEbcQHbgAkJmBfo6ufVgVdRnvYsgv9hFiTZMyaQTuC2Y",
  "key29": "3TF4guPJundHUQrUW1mgRpQbUMWPSuW9txMAkeueLjWsbtkPhmZvD7zEpd23MRJ5UNyZqphTzDqkppW3WopiyzSs",
  "key30": "UJgQfppZAxvyn75CvkeztUc9D8CrEpDdSzdxvFAagNoG41kTouZwLqeYELSRbvwhujkGT82R8r8UzLGoBM4vpHa",
  "key31": "5pvfBcYuFGe5H8e3y4A4miGTnpgvq1k3X6CztZoA6WJhKWJ2KCY7Y9VsDCWyWgMgLyhro72S8hvtadmV6UgyY4Qr",
  "key32": "5orApFLoz5QeU6bn7triu2Z7Zwxf8d9NjMhiPfU5wcPdQ5U2aFRhCx1MX56fwPPtr5bkwTFU8XaemtE6DQAmkG8t",
  "key33": "4AMGG3hxXkvzUYhtu1FdbZRWk9YT71TZaiqcVmvhcw4S24SFVMxeU9pWvSnQhCZx2yAjkELoQztjYuE7uhCSgZbp",
  "key34": "4SSZnB8voVk2VQxWN44SLmvnYdZUVKhw2Ee3oJxWaJpP961KShQXGGf8WsSZd33uNPT8SPSCbMK9frYUticcv7Mk",
  "key35": "4hBs1PWkEBqYUpiSsKToqfqgEuCa6dm6JZa2RTPdD2Cgbjrorux8gyQVEk3B2ahywBYwbgf9duBsGDhQrwZFewkd",
  "key36": "14gWLBZH9YLEXZfFLWukLqDmcXcMBUcSgbTPBw9iyAGUcYyWHMoEqsZUKniw5w8HUM1LqEikjrdL2h5H2EDoico",
  "key37": "S3jwyziGVfwQG9NrtUWZYSEKXGZ2KUGFfSqMtw7b7nKjGttLj1tzS8TfDKWqGUZdJt3imZy5gM5KZkNHHs3aydH",
  "key38": "Rm5VjqYku5q9s7LpGbJ5wJg3vWnGnvwrVRxXzLNGwcEstvUbxYy9BDEf2eLwiuxQhPjHaA2tzYCHkxGJdc5EHCS",
  "key39": "3cyiD3K6ZHjJXfK9RZCJLkQEGbJiiYcyafSuzywnXJpF1grLjv3AtPQVGiAoeNs3UMjQuvLtqz81SkbDrRdQPF7p",
  "key40": "3imBWK675PJKqSUKR4Phhb4x9vG1AtJJQW9rKN9u7fzmcjzwFeLb1Py4sFhyQGdesi6yEYS2z4d8d9oT7z6kDVYs",
  "key41": "361gXtzHqGZeW4AQ5KRUgmsA7u41oNkTQPhNoUmZTfEZo9XE5yHRMtY2cLyaShht9H8sLk9q7sUmQyc567M8YCt3",
  "key42": "23RoBsBpTHbNy7MEtbdYpCQqMxphUEg7fyrhGhzwtBiDrVg8gy4J6f4QGtp4hx82tKJV8kAqxuvxKkKC5rM6oxAS",
  "key43": "665Y1CNqpHkVx7jWGkeGfVqGR1o4BV14CtaYLhtNXxCvHGagDNFLBqvzpELf4L7NtbxuZWgdqzG5TiXZJ6nEvEWF",
  "key44": "fK7bkmNtn9svC6CU1d2RKrdctc1nHCYha4DpUQ8GGFbRDDkVgMzHbEKtSpApqG2tbPvdRkkdExpRr3YHFqH7nWK",
  "key45": "4QFtBNrPphogNC6o5YJZvUg9p5pA487UBFiHhPHDd72vbMxDnrkT2jm3C4oKWx3dskZZmXb2c23rFxeqQWSmsZZV",
  "key46": "4UbHnWGjk95up15W1QToBTi6kivDRsVPskBU7sxxd1djHxwZyPJyAf6hic5d3AoV6wVmgeoEtnwtujf8zMAriMQe",
  "key47": "41nyBM2rHciRWTuF6DUnBoE81CxXBVT4chLQXi5igHbiu6KTvEXg63eookcSVXBUVZkU1ECZUCt4YzQUpGX1V9JF",
  "key48": "2Zy4peU2DS5g7u6v2aGdbKwLpdoBqVe2UHN8FTMsPxULtpPgb6Vg2s3M6Vj4XVduYicqAfSZUcHes9AsccPaKS4W"
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
