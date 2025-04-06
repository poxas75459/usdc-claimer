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
    "PAo2ZcHSkCLV358nmnk1NJDQeRnTVXCQQ6c1LpNjf47r2EgbFNLDUC1Jq3NbomzhPSJSc21xYAfKDqdUS12zEUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2acJktLXoQ7kUfjLdA7MiJ8XDS9kztn1Fj8qMWZCHRt1KSyRQU8nYvH8gTEDUNGPiBJock4UunffzbRzEHMmLUKx",
  "key1": "3UeLwY1V4NSjhVnPEMs2nAL2u12WFYN4LkZ2QJb71QuYAuV5Rgt6e89B9LXNL33oDvh4SFzbvBVxKiqA1Mgj2xYH",
  "key2": "4vqdGsSsD4BJiMbn2obv3WBLHfwxJKJJWzMpEp1QPc3qkxt4k1QQ1w4M3LnHaiJeyoBQDBbqWnvm45Si5QoDq6At",
  "key3": "nrPqLRf2ZdeRP2SGcQHYNxJAGZsZJZggMXxdoF6MWH6K3wRRQ8hWjDv3y3jsKePwMgdw4cttq1ccJxF692873i1",
  "key4": "4v9hktRomBJQf2AKCrNDwE9A62EwV56Kmb3parhCYVHN5teBZHKdggsZNddHaCkGGSNt5g6N7Tzi5srV76HZHQWS",
  "key5": "2ySSzaXhFUd3nUfRFhiNo4qeLkEbc1Wm5Gogj6tPBLMtVWw6UJfv5V1BxXQkmW94uV1x5ebBA5trhkBE5fAeWYoL",
  "key6": "2QRNpx7mCUWGZSeacqVomvpxrQP22iK96QE5GJKmTtmYKeZonCuB7gtyM9duoRV5JqudgTGyQWi96RxZyikUkp4B",
  "key7": "2DAHkcLcPSmMZEeEQstM2YkuydAEBctcKs8gtGiVxaScEMg7ufepMAGNcGsbq54ATxvwFUxEQBpi3oVkXuVD69Yj",
  "key8": "5eBuh3n1Av8LyQFb9x7Nae5pnEWZmHiMpzSCtuUoV4Z4zMt9bh5fVqbfP1dYMQhs5A1qzmCy24jYZYEGZ95ciwm3",
  "key9": "5AhYh4s2Jjri7NMM7MaxAneo7HAYLAxzBq7awexsQjAcirXQP2yJKn1iHzvUwRwJN2e2cc5frpPGhuRU2uvAPRm2",
  "key10": "3e6NX3xdeoZdvGDFizmTkp1cXVNPRLtdcHkS83s1XzbTPRqAp5PZ9n6ywMFNwhmNB59T8WaqqFs8oUmxYXLUrfZA",
  "key11": "c1PXTKiqE6v44ESPYmZoBBLSh92CKEmpLokkAixYgX5nveGwoZ2QMFcNRnEurqc3Df1Tvf3c1CBxnwGNNboyx5h",
  "key12": "2Tio2S4Z5Sy42LcyPr2vzrT8U4CZTBcHr9ouYxY6RKgavGGh4QVGijPy3jCUHrSre3NrbkwJn2gzquJ8HY1iEMzs",
  "key13": "2NZGAwFErCsiBxYEsrwYcaZQBUrhT3qBTgK11eceunSiywdMZymH33ciH29bkzPizn4jGnwbQ1UF3zN57cEBHLzy",
  "key14": "fJjtbcAwCknWAHW5SE7dsNmUDCEDmsBsv3yS8kQNWj29TBPLhYsrDFMG7FvCA9xsmb7equqye9gDHboQyd2H8tG",
  "key15": "rUne513tw4fTpXTia6HH77t9RgvWJSQP5HDKyrmScgEDayfdJ5zf4mxwBNSvVEB8z9r4SkLdf1aQQSEcf7vcT2i",
  "key16": "5jDJYuPyA1r6bxjo4GH2YsaG7kvxZZjuVc4XAeXsEt2ZNiV9Lzm6nnr4Ex1NZCef74CXBsCM6a2dx9piK2gU8a9u",
  "key17": "3axRiU3CyeE4KY9h3RM84iZV8qngRzZR7SuX7piP7zeLEkvjgyQHFssvBcrW41dzSko2vwJ59fUSzpwucSMed4HP",
  "key18": "P6TCB2kwYUrjduosbzCpPuwuUjYBDPdynCtFsqM4KFk3FHXymidEvJbE78hYnuP9coVTFWHzZDGGMF6KSAbWkEE",
  "key19": "5QsrHHhCkfvxVKhCLAsVM6nAXppodyjsVyKE6tGs3mPj9oznu1Ebvn3QA3415o6qALREwgp2aNWX3hTkiCewkrcJ",
  "key20": "222pAHAbe3Jv3ouTFQrrz7Vt5EG1ds6mcDeFVoiMawfawtQxYL4MbVZZQR2Pi4gs8Do2FEhQKT6NXo8aBpaqZ4W2",
  "key21": "4F5HWAu8C8ptbnX3puWQ2miyeTvdfdxh1BrMCDnobwiE8HvAnqrezdk6RZstFGqpUJjjT2fF3VjZq1BzEEm232mR",
  "key22": "KXFhJnqmC98BXLFCUUJcNBzmFYeZWvig3pVS9xJEugH8JLPvfuRaR4QBYRQipv4aR4oZAqi6s9V5ChJEfzrKKnr",
  "key23": "hSYKJvqmJt6e3yH1NmMwCkkTkVm8cADAP9iYZZwJNC2ASCWGorrSKU7RRcvyA7qpgWHoKgHdcQDvWwKMB9iH6GH",
  "key24": "2NkBgBzV9Xp8fXEpSPSqzf1RL8ffEgwYKCZvRPF4bQcuwg3ub1SN2uKpBmQwcmL3KQAcnpJK6PMhbiva9R7akYVF",
  "key25": "3NYFCDjjK4hkdm322apo8zNUGvSDoPXufNnew2hwrfiMQTSZJ9h26auKD9DswqXmeDkPZ2XqFoCv5PNEpKubnHtv",
  "key26": "3V64zaYrAmAzydxWXY6eBrQ6utqDGgj4TLYEScCNFG1GWgr58J7hfiB76e9h4FidVbxdiAovsi6e3G4Xc8btzkqg",
  "key27": "5a6371N3gPSjeLqt4PLgKiMr2XbRmLY7QG73WiegDKVUMUNW9myEQnssW3MX5ft84JxyQGoUmfDtRm4NzokZ6LLs",
  "key28": "2QQNbU2hGRYVfJecwkSem3tgCxt7nZQjsfvCJCuydzB6GYLwS3bwpBYDxHTtDvwj5zFrB7kfj14WH6JVGgYegbRt",
  "key29": "5Vjh6Fu3n2xbgb16UrJdXLHifXLoehrDYoAAURD137twmMr4LcSWUCtYTVS5yqkx91PddMemgiU9CSsKr7miR1rh",
  "key30": "2wYpSNezbNfMAQhAp6fjVq8maBrKcLGE6n5WL79UrFQncR8spFVQMWJcy3bH8KZGh5Tbq3VVMfM96aJFgnBPe5z8",
  "key31": "Xi1kiVfhG2iUHmwG5aHpUCc4vc6eSy4naSZyMSJi27cfuCJbjE6FssT3mFaAuDhhCRSHKK6UGQNXR54KeQvGP3A",
  "key32": "5XuqTz7sj3u53n6r5DPTut3jP3vkaRjgUY3JWKpSpc1yk1G5K9MQyAWtSFXLEQe1MPzVa5HQDX6LDw4xBKWpLhAd",
  "key33": "5yTm3Fa6maU387H51XU1SJk1ojHEaSD67f5f6F7RuSK1LhijaXY1QkSHe6pPLZCQAUVRtwmGge9zrXRU7s55EXd2",
  "key34": "4gWkCJn6gspe4NyvuUsvSvqwV1eTt3CmwXvRhusBsnYWkyySyEKUrwH1WRfAwF3bvLuCggBQz19LUqC6jmJ4Xn3R",
  "key35": "4dV9MiopECvLan9memq273saUjeh3shQBHDPYvbz1xMcTnRkSN9wM6S3CZNDXBqoZCakifhBDy2F6qekchp77F12",
  "key36": "v7uMrMb85c3Bm2tv7MJeuJSDqE2DVwB4ryXFE4j4K6dj6dipeKNnos9UTsB2rqb3aUrt41BKioxGepEB3yGTvmT",
  "key37": "42DzbkLWrYjySYcmRowwvpcbEfcuJgUDcdQYbfhVZdk3tBYNaD1DDLM2V5UMNFXvgNFqWHeTfgNBtBEk5VE9t9jp",
  "key38": "49L3W3qeUxVuZj45V5gMvpCEZiJDXVWi5V65nTB6TtS11E6pRmqWMAxfQ6xFCVfUUSGpLUhurJMNmBRnEKS18FjF"
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
