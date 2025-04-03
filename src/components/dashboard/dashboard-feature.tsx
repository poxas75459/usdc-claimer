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
    "2JLQ9wM3nEAuZfCx22Dw5SrwFGzzSeSodF3Lf3dH4pxQAYPwKpkKP3h3iF98ZRrWq88ozMn7aRW55ttGzk9RFX6g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EhRyYbZHJGtagH5v9JDgdJxxxNpfXUvwuyZF5cVJDgdkgqE1vewN9bxHSv5wPwbJFitivsLGULFWBYrCqgkp48s",
  "key1": "YCt6PhsvTKLmTXxUFthuCWkhQifz7iR8oGtW9kXG95aqmnR1MM3HGg5mCHUkaroAfxN1TRkjzMmQa8tUKLMFTqJ",
  "key2": "2LoX2rNJFUL7YerSznrMg6SW7QGoet4nUe7trGwwSm84vhgbjzvPs4MJDZAYmuoFD7FyxtFRs5EoQMuQpPwAzqdH",
  "key3": "5ti1548WFchXC1isPQkFxtfiPKgTAH7oSLS88gXkJPuixctWdiGfZ4nwcPELJdUZ7BiK3ijbCKgRoiTFm7HzfsME",
  "key4": "3TNe8n1jYEkCEDxMjcPm2CW19DgNvKNyvWCvAM81KKXNRtkGxcq2CxVL2NeDXACFjLtwXDL8gTeYEGnFVZfmVftS",
  "key5": "43wqXycLUwMrGbjV5TDBqsTjetieejfQqJEbcJsSvNMvzzUnS8sTFqEafVWwt2XCsamgDWKZkNUAAZTeNdUXsFJ8",
  "key6": "2V72sV2afRJTMF4Qydkx5L8x5VwUALmc51r9RoibYaDmGNdfy6nScktYoBuvmjn2d8BMxgZKFQYoPWre7Tk3rYW8",
  "key7": "42gUmQ4suwN6BwZVgaNVkMBM47ZsXM6Hwbqzptogru6V8iV5RMDEc6XRyFJmqFGwtak65xouT89H34gbnYAxczJ8",
  "key8": "4SRi2XJrPMhap3UZmStW7f99B6w3BLVoUJbSYME1gfabVs3e2noRhtExQVK79ACRkgLRPyF5ni4jBQA8RnDYMoLH",
  "key9": "4qFFs8izS1t1Ha9QP1EYCT67GEzfZRnHHMX68rswDmXRrVSV9B8Jn7jgNmJzfYNdMS2s7yKZpEEV2vrvcYt7m7iX",
  "key10": "5PnGp9vP1uQEe1TDYu8J4fyF4ApvAZg9i5DMhYxFM2kTg2KpXYfPPsePXPSrJ6ekumGDXk3SxF4gGpXwt3Sj6s9d",
  "key11": "2VfKfJ3Ni9xJikwnbf56z649gxCzRAo4KJiqXsccdXq7sgvNEUGu7HtC1wpE5eKHF9XP8ZuAAshpvzXwGUL8QGEg",
  "key12": "3hNgxyWGuGBp2nWQMSdR6PvZFFSDT344oznMU8pSLQ3mVH2TppaXKdRYDjBkdfhUCoTHETmYrqZ4MBYAjTF9Xr3t",
  "key13": "3baUJorSAntiiyZ4M5toMhyYhdNnkBpPw3ZNLKrS1ZxfWbHAkwfQPuuwXKkgEiTghJhLX2pVEF6KLjixeejtsS73",
  "key14": "318kUsZWffZA55it8bWvxVoKVAFbJEsGDx18x3LJJCkGmjN91j9iTri4xxW9GzGpCxibpLSLWmiLaMJ7cpE4CYtU",
  "key15": "4ip1nLaYn9ynmZe8U65VH7wYB3NiFpRvsBJQk4g62a1Hmmuaxq5Hi97Jp44toaDrpVCkhmfqyndLAqG1XHX1DdEo",
  "key16": "2ZR3CkbCTqt8N8d6ga6jMNjGWZBpwhbGReFfkAzeFBUhw3Cy1f4ET7XpgtKpbq68u5WBzNsry2SwQNzfDS27Y2ZC",
  "key17": "2rP6m3w3SejJkXWG3Arff8t8FcDm2ttBkh51TNptmVUbGD43gWyJAvvL6G5bxogzTZAo63utrew42ksSVhdctXsz",
  "key18": "4k6Ca7EoNS7ZvAV6LkQ3n8fhfmnzacM4B2DPHssK5Em18PPtBpuv5y5aq8AGvz4hTwaCmXiJWRi399NZGLKDPLcm",
  "key19": "CC1jiM8nTs3uaBLyCsgMzDW9PTUTGeRZsSJJKZZU3EprTj92tjHxuA5oGftqxHnX1ZNgY7zYEUa46AxewHfgvLx",
  "key20": "4Lhmouj18RKQ8HRmD2qgvX8r9JxswgV8fEDCZ53GCrwGrrnmUXwZDzA7aZbnwmkfNyFWvpyjpX6Srr22r7UsY5Qu",
  "key21": "5KUV33x4o1JsMhyWmku5F9xEy43ZQKx9swhGjBYJmeTE1sBWtt8xekHtBMN51VCWuKZfnJiE5b6c5yn4suJ5L9Dp",
  "key22": "2zZDfdwwgP7dCNNGn2YPWbsssbQbhSBQU179zN8HvmxNYG4cWGsyRUi5V1B9s9WyzLf6rHhBmAKZG9oL5djSF3Pq",
  "key23": "3iHbdWnuHRp2X2FcY4Sy5K5E3YoSJEAiDSd3W7mZ7KDMRycRiy9rGfJomuBP1mjVwTibycN6ttfJkt9FBKMKaguP",
  "key24": "531vuaL5nPZEecZUMvbvasc45h8is12FUphnszXzPcrASD2T9Ke9eGc48EWN8trktCiCrYhCthGBgAkSwaeKxtL3",
  "key25": "BCCineLp5GBFs3Z8u8QRPoLVz2CXmVm2rXz1mvPXUSC8sVMxX8bZTrf9t4o2pf1o6aAfBvBoAeGMGUNaXENMorH",
  "key26": "5e57BY7tNHa5DcPD4AmQn3teR9fYS6s4MAzfXPs8UZ1W6bnT1P1tXM7qgD7W1BFGJ5EJWgFYbAsmnKsq88QcQyCr",
  "key27": "2qSQggqtUZi8MWce5nTL8nh1vhPMqt5WYVQtrvw9vE6esq8RtZQVAwy71h6RmfcUrbMNiRazHf1eD3WGyB8epGEa",
  "key28": "7G1VAyo5zNm2xGfUETzBAiEu6B8UtkGdMPvubrP8EwYRXcpYKaS9rvP2RoS4Q81ZAyzbf7bRQ7sBwWoewiX9vVn",
  "key29": "EXsYpKmbtG1xoDYjBpo9JfqjAuiYBupaNfHsHy8YbfNP6YnFusekgBiVe24XSrCRpTSip62UPpyUYkd5cCUwZRo",
  "key30": "2arDTdUYTDqL588WNeVxdFZwUz1JK5QLZkqZQzmgzy3y1FKPW9xSdUqKK54H9QkRFiou7SLDV94K8KSzudqQpcMW",
  "key31": "H2UX9jP82HM19ZxewWt5csszMDotCtKMsq33ZHF2N1dszXB9biCgGSA2jkq1QJ3eUP6jp333jvwCdpJzmbQWJzQ",
  "key32": "sf4riXS3DERc454ALLvTSM1sWCEmQixYhqcQvuhQ3Zi5N3YziKjNiB72KV7ZWVR79QYaYXzfswV6Mym1MUNS4uE",
  "key33": "5LknxomcoD9gLfuEE48wNaAu8deZGkPsqhFnh2cEKo3Jo6ZtqfwZmmZdnXf514DhjjxBvKmzMZnyuTXcF6WAHiZc",
  "key34": "2Ue2EovJt7BuRPRbtLQrRUSeCFAwQWJMBbsa1og4R8dkbD35BaPoiGFAYLQPGY2R8HekajsPmT8v8TkRW2VSiZzT",
  "key35": "29UjkHN6xEwiH4PDtoC1VE3ThWNjQcpimd8zn2ptpiW1NadWW6KFaXoWWwkb6xShdR12xuzboRHLQX3qdGFW4ZXL",
  "key36": "3c9N66UJo1oXAhM97UGjG2vtu83gwzFA5riaFnb26BuyKpdnsVavtWzT94RgXxLgCDQ8XnFJAGJDgFH3kRtMm9Sg",
  "key37": "4Fy3Cr7g19fAWABGhNAsTfxdCj9hrzsbeuwcNwiFBWfxdyK7XzDhpf7gRGLPuNnVshJm9QyxZJCWciXzrRrffDGT",
  "key38": "5xJd7Xd9dZQbksYrtCLDsJBf26PL9kTjzshtCeX7TWGU5SRoNkfRa3KRQPq2C51gxg3sctHW77Z2vuoGiBoLCKA8",
  "key39": "5Xwhxee6XVWbsaJKtx1vwfiCNn3WXwjHq4LGFKgWjJNs4zzjAY2RAXxhgY3vCHsiAE2GCiH9ALA76QG1NZ476bmM",
  "key40": "4RDHX3DGqNzor19aBmvvonCAFFDLBMzgj1bCexicXC828JXfkbPYbukbsiBtux7umqNtmRF44jkenzPSvh4rUauV",
  "key41": "3o5eJCdMWDuFNMpH1RrF56wd6hBJqWQSQWnWgN4TiSUtk4TGSoAsXkr8eKoBFScuKPnrhRYvfXWxvdHevyWpFLd9",
  "key42": "3gcAcoRtQxTUKRf4K7Bwjn1ZjBDrz8tJan961GMKeUnr98smPE9QCdDyTkfzV3BPX9uBKgYsqBnuvMT1jA5JiRZM"
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
