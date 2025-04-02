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
    "nU9HodYPi5R7RDMn7UkAwGmysaiRGnqBhWfwamS2v2UPrmb7mXYn1vg5rVdaZgPYMTqJYPBdqYKAfSe2Qgy5LG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33M8E584V9NQvnt2bXRPKd69j9Goo6cRVJjQ6iPALEQJz28qu92MAJtWEaywnW3C3hYCMWumrNHsP51HDQFFiEvR",
  "key1": "5p1phQvKndmiED5gsYins437fec6N6MmGT5K9mxPxPae5qHTCdGieSCrKmEynxzkDXaWFEm38JhD7yp8TP1x42HC",
  "key2": "3kMmcSYh9gTFDRGt1cwojKcB9fcnLFC2LGP7DbioJHjLe5zmZ8ZhhuB62iGHEaFq6VVqN8uAETVjuPeYqmtdgXbi",
  "key3": "5MwN7p4Xpon8M5GD8m15xNdbMxaUGNKT2BRrHFqHEBifbqbFkZB9MY3DkasP9KMxdj9mJPCyya9wku8155CCd572",
  "key4": "51mnFK6yeHiidrQngYawQL6D1kQqMCe23iWmzT8BgYeCb1VifkseHeRQ61ML73PZTKWaushK3ST26GM1zM9ZmQpf",
  "key5": "tKpf1n2N4QL5GPsGbb4jbzNjUfqtuDXH1B1ZoCuTdVsH5GdHbhYK9CH4tVpCztaZTugbsdkENJV6MNMkVopUoM1",
  "key6": "5iMaHaBc1zF8xt3g1ciGZ2z2xsYnQYHX4EjXqF9WZs6EBSbjUpHDcHpLick92Z7b4Z6ptfdL3JQSp4eMvVw4JVoH",
  "key7": "5CXEtqthjZoGaGykecQUhaA5BBeLTzUUNt4YxroVCJW5B17QefYJs72Rr9189Jew65rk5uMLEzefJ2f95uoETGgE",
  "key8": "2SL6xzqgV95vknQt7ZZiAS35YyewoY3Fqh4VY45S1BWsPwMFrxcuKD2BSxTs4DDriE8pRE7rAxzHoiM8ZEqcexCS",
  "key9": "o4YW5hFg9fCNFeNPZRByPtdk3KyRoH2dti6jtSoRRDZcZSnX8xo5QvD5DBfiwEtwxbGG6RQBvdt8Yb64vMgyok6",
  "key10": "4jDFyCvLW3Xbpzs6WoMr9kw67yraKqJ4EWZdFV54UfMi2GzmD1HhDgmjXbAMRYCDiVtkyZUfrfTuEVN5TzeveAQ8",
  "key11": "37hss8J74HuM1BcUpwrkaUGNsjtz8QiWoBV8EH2f7uqF5L6yKKKkCZ1o755y9pcCVtKpQwGDtAUhwnEvBxfBqS1C",
  "key12": "33yqSnR1Gwwjj4ZGXF1UvyhnMELEzMS5qSkLGLY5dGX3411KATEqVShRbWPRvP8fNhRXsrJATVMzhfjFHxHMSnjM",
  "key13": "J4LvkNazgKSPahhBfRcejfAE9ynw4dKs7kcfSho5R6xXYHZAY1Lt8zWRZhqBTG1PQJ5nuMVaP8MZh8xamLJxUbp",
  "key14": "jBpsMNh5zqTkFfSrJpaczkqe8YgGzo4FWeEX5qti2o5UNpPLsBi9tBgs8y97CfRtH8LvtP4vWaRE2ytoST6vmdt",
  "key15": "2gYER8xt1FbYNngz7cjSxVvCdzDdbnscKUzHYv9WyxmPRYLmTPtMssBGc3LPLvBSw3CZ4h5MEWac5T471QP4ZrZw",
  "key16": "3WPYWG4QUkRksKcyam754VbGCQrJgjBN6yE6p1NwSbDUEmzixZnnkv1H8FvqffZHFKc9s8FTQQuQ3CfSQTWdbk2C",
  "key17": "NYL3woRrG65V8R9gPT4p48RSiseRJnrFKmrwBvqdBKqoqNfTJ1wgdeThBGm2g9SVqVmJwf7Gr2RYYJHdy14PK16",
  "key18": "36KwV7PqELAJ8T9sBQNqNzvgJu6kQxu1bdmYfbrQhinLSPAdc7LoZS4oh5YckUt3yKmjKzzYfoCenXsjf63NeukT",
  "key19": "y1jQf6XsTo1xVkwbcJfnpWaimUpgUJdkjcuEo1TqGky9JVCPgr4qqmtbNUNBqGEe3gZRmXjzpif9gGp9cRLPr2c",
  "key20": "5TFotpPCTiGQiuAByLh1A7LnKERjMNAxFKMjjJ3REgryG9aGQfYc957T2AY1eXSGoB3mvYXLDJyLsMEMAnDU5zXL",
  "key21": "oGZzhwtXhoYhwD8MvkBsGnbidH6Rz3uGabXtrVpryeFj1EcyuK5GWw4fPsMbgMpyjz4h9bkWhwfg99k7HxR7i2m",
  "key22": "dyRbCHF7rCeinSN8Bv6EUS8Mrv9AEqRh6E6zJroZhPjjuBj6HF3JE6U9kY7akzvY12vGskR6Pkvbj24pB5eC8ar",
  "key23": "wF4fXYJeqAhNhifwo8TvHkfsTHLd8ZQyowsJcjqqtB3p63QfCQVH8KULGXmhY44yiZSWPa6gmp6Bqo3KPHFsZKD",
  "key24": "37ME1eRVzibWdG4JJeEXmta7ES6hgUAws2a4L9B92SLEEWBGEKm7Hb1j2ukGqgutw6oDKmothvEswJtjSwzqCkJH",
  "key25": "61UEn6bKw4WSkAGqsYgRWgpngH7hpbtzvatFWcqD1SnUuDVhoJWABauVuguCR6L12EtqEjhqCeb84gho9h7xDq5v",
  "key26": "3dnFaryZmR7WkU3s2Kf7oE9P96cjJotC6FMNPT1xevGJXZi3DtbrF8HdrMF6HwTRTjPad2pi36fgadwRd2nGJzEh",
  "key27": "5GwhZJpcyRriJXyr5Hkj8wPnv56jSVAGNut1QkaB5eMLqNAJjh9yDmT9qXSUmjwctUZGAaRP5VULZJWsmS6qe3BQ",
  "key28": "3B5TJ2J1oxonQzg3ErR8A9KhZ9Zw54YuhqxdYhtzoXN1jiDRovNZh7DY8KkxWTE4fawjcJU2ke7FB1MSqUcszSpr",
  "key29": "2EQJhiznHQPFLU8kizBZa5QKXQYt68jJ8caVDkD4hWyiqtHLD5Tj7R1HRVtZg3DwBZ6KLPaA1heqrmpiBCFvh8pf",
  "key30": "3gspQqZJvS9DnRiu3Mr4D5JszfyhgbHoQCpYHWtnQ3DqYxnVdyrm3bCSXA69tmaPpbMVgrWMBWFpRLLqeCjcdfr1",
  "key31": "kMB3mtCY2rueqyhKwHQBs8pMpwX947Ju9Ct4CQb5KihFEgF2HuvUWnuJNsYgSTz79vDDNtY36NLpwZsZ6nhvtTy",
  "key32": "3jof47xMVEXCZFeehpKRkSMgySrJ99Gqt81LRaUnVojL2shTgtyvFWMvm6FtTrCZHH3o8FxAHfCZLw5vdjk62ZvJ",
  "key33": "28LBUYv1UBDrjUnofbfyWdKukqut74vWGhsdX64csZxEZQuKb3npYTE75MyHJetjAE2ZnFFjkYhqrEHqukFz9LFq",
  "key34": "2WVpy1ksxFSsMQjZe3XqiiMMeu27EAWtaZkJb79rWLW1gKvUgQvsAsfnqEn5wZPHWjU4Ush6HqCgKC8mwrDGWFUq",
  "key35": "5jLvvU6FPPw4dJSUDunQGct85Ak7wqfJZBTRAdHK8xV4vXRNxFUYmamdUHYUjxzELK1q72j4J9ZrwXW3dpUVP3Wc",
  "key36": "4MRFYYpLKqnVvQFUFct2tusEmgikn8VQsQy1PoXhn7ciSE9XXcaJnf82VTsP7W5tVE8T7Lbcc5zXgzqe21Kn4Za4",
  "key37": "5PB4wv7QfsF77VtfkTHKyd2E8tAsYyPb3bcmrvS6oizWAYcKfT3JskuPoNyT5vT7NETnbk1JHn87K1mtPHfc1bkT",
  "key38": "4e481adF1Qx2hr8YVDsJtxLhJUMyJpiZkD3UVjZCfCUzfjphxYrneMoBj3V2xi5h6jTH5tPg6VX8bEmW7LHVFWAu",
  "key39": "YAVEbhFXMV1NWEw3hqjqE1UGFwpycC1TMWWrZrqEJ5PWZWr8qFD8PGNXhEqJK9KUzhvhwxJESdqSm35Y2LhXN9z",
  "key40": "5tmcoQjQxVJkp2G6e7Knvk1MF2MCrRXqPzqQ4Aeg1w5L1mvPYeShga5WofAMRTsZkr1httVS9M1gQjYc5hDS5fJa",
  "key41": "4Um4kC3fUtebczsNnFcKkqAGm5S4o4N6opQBwDU9QLrTUcEKGzNfk38LiAh6XTjpxcvkbX7P5fFQAmhVS7T28rV6",
  "key42": "5a2MiMqcaCESyU7TBr7Yd4XTQGdF2VtSSFYjbwpAK8QhTK6sN3gzcY3aVRjCyjdnNzhEtp8Rm7JJY3nHDvj2MXzb",
  "key43": "29Yuerp9WakVm4nvsAeEjQmwqdxoz2NkDK3FEnR5BbqagNDqR89uWn8CPomcw6Zm6kMF8F3uVV8ECEtf4gLr36en",
  "key44": "5LV5UZqA1m5GH5ZhDXGFYZwL4aw7URJYRAPYUbnhbmF5XTk4Equ6sxT2txfPzsH1t9tzg7vX9pGpwWCQvELB3Zhi",
  "key45": "2F7tjGyxGVJ4zLPKL6adwzMB2JVKM5B5S1a1YFYRo7Y4111MYCsQyh9BJymFuQ1fS8nvQrcwrPsFxx82xS3Jm9JC"
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
