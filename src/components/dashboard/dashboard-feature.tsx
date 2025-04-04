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
    "2snCjRmugBheGZdbAifdDRho35dLsQeUHzBugAZjPYZ4ofpRY5UsRcssQNDzeDPgk7wWqBNqmka8g6aH2suSaXzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47vpBjvEKtbhqPy4N2NeVTWKCWvLbBhUYjXPNDDGWWaUsGhsep3kTP7GjhNTB6uM5QLWYfsW4XAWqbLFuDrgTyr3",
  "key1": "4KoSkfnB3Xy2KshZC4c3YxLnzY6FXAxWzg7icpXkzS98BrxVBH7gqgUpFcsi8dveBTQWctnjsguPcDf3L9ZR4Jch",
  "key2": "2b6qNxWUE1kmo1gL3UQXKVQwMJETmz1e3dt1AfbtD46X3XWGaCLgtApHoFN2F57iYes7FgcZq5XhaXCMTqauHDq8",
  "key3": "27Udpy1XbAvozUhXSQ6TAUQrk1bXHfYuFF9PsiingCsSaCtVhhz942FUw4j26YGrvPs6AtiT5ANMC9LeSjQN9hkW",
  "key4": "3EAnGuHeLMAi7dBC5mKtKSBLifp1PJ88WEPqg3ohUcha1fJHjcrGujodeaXXxSsQDKrXSJo3xXmLmBuh9AC1PM1V",
  "key5": "3sx7uYEKWSom9UkGd5kmanFi39CYiNZwXCx1s4k2W47tcn7fXKLjs7qHVafE73WhKzGXHSjnZRdXWWkoYC9ziN9c",
  "key6": "jvLKoCUSgibfSSYedvK4AMhz5eknGw1CMvY6cgZ9wBeuse7ZLfo6Cmw2knH2RS7kdguHcZ1coiY7t9d2e551c5o",
  "key7": "4aNvgHafw79ChfwSBCJmKgbi1SNzWuuJV8fnb7k4mQMQbVgNabcuSjexyCqVE4QwEVvWZHEp4MWGN1EhLTv4Zjxr",
  "key8": "4hdZPoBHjPPFzgKzx8BVgdsKkmvRsoULxta48CGjJEgbeum2RxVWT8bkNBHkfCBh7MQY3a8r5wvo3J3CbKrvekpy",
  "key9": "2AbUaGesB1w8XaFMSVtw84jmSmvxvowqPbsZRbLekg3N2V1uwiHM5M1wGtFvxvYnGYcGJcT8LBy7tJg4A9dm3fBC",
  "key10": "7Pig1GrXG4ji1jM6iEJFw4RTsuhsP1pLx8MsVu6aeoKb63Gw5tzPQ1muC5Q1sbbSF1p3tDHsg79ovLq67HBqNyg",
  "key11": "5LtMYCvAgMnYB7VpaWUZQcZc6Yyc7SxA5dq3HeDcT3zwdSKtGsdAGnuABFRGgqYTtThAsUSmcCSadtVXD6JBKo4b",
  "key12": "4SMawqNVcW4bR7S2QuqojLkJssncpJU7T4MaiGaNrdqTQygkSqq7u8mhasNq38VfyCm3H7kVujXV9rpQAPD4sweP",
  "key13": "swFUTXfCp9GatBF7jF3Cy7MtyL1a1Bzn1Htd4vsoCXTazfgeNbn2ZdbHgGvCEJdiMeUX878L6HSHAnW3pD3kSTE",
  "key14": "3Su7uyTB9gXYAbv7Gyqv8cTkvw8NrUMkK9Fiz26HqBJymJ4HirTo3UWuCNm2L92ZTjH5Q13Tu6hFUGn2vCbtCnFk",
  "key15": "4TXyhHbwNQ2vYqrD7UCyxHG5Lbrub9r5N8nZmvJnxD8QwF2arjamdybzodtRpfz9xC2k8PpnfJpXA9uM1Bsckskq",
  "key16": "2waCC7fCgvSo8jd6S2ePPPi7LCW57DCnvZMWQiKCSytNG3JmZgH4WkDwmrCdQWcsFKVFjCxhYtajWPCinmXkBR7v",
  "key17": "2Xqxe64eqmZLgqQ2izc5oNaCPohjAaEUtpnNy26tPDE8MoJcWbbqTk47hwZyVXn5VjAwKLkmFysr5KroCrAb3kE4",
  "key18": "4eERqgSiX7t9TZtgPWKjACP78peFgsEXF6rsN6E5cEX8N5WLHmegHzPjY7jTN2VgQiGxECKAtm6EsqCM31oKhGct",
  "key19": "5AzfPeuUa96C9YVzLadBAjN3BGLQ6pZAWYJsR5Mr6XrjGnf9XjaiYXAqEpRMG3T7SLSu48pVM6qkLFwwvU4RLFTu",
  "key20": "5H5ekzyokSqQERQryUv1TTeRvgtZgmF7MTEThCpGPARxWZtEQGsQDixSgvMcXbySPP2kyk31Twa4bn71z4xiFfh",
  "key21": "61pBPV78nhL6yFQ5WALUvZxYVmPHQz2kGr8MUxUVzPw1NyT9RZna1jQmdeGPSBsiD47gSPuvsvPegTqYkUxCqefF",
  "key22": "5SudAdfMmmSQ8Q8MgbBLbDdKDHHDp3LTsZ7WjzfB14N2igj2FE4wi4uAmCGo1KaWbH9KGL4TZFXhPiUCZ1cmGBFN",
  "key23": "Ys9JUJtZwSsdV9wjC13h54PeVKBGDp6Jc9aupFM4kqc4VY37o3FpzY8ACZaRCo5wC6fdbdayyLy5jxvGbuMpq7B",
  "key24": "2FEk7Zy98gZPST4m4kJWUjXjPEqbQKN5JKidkZtdU7eKTeFRJjaeDHa7kuXgKvuoFDnbGfUzQXpPg25KmtiXL767",
  "key25": "5zaRi79X3TRSpbnbfazgs7nVfPjqt9LBbB7fynMFSLrQLchRhobLvPCoSjNY4ndA6TsCDEzhZdpTaDGKeDGdLDzz",
  "key26": "65oTpX8hKCN3JTBaHgEYcKrYcbSVWQ1vJJ8FVwfoqKjCVkz9QrdAFq29XwFnEh49eHFC4zLyKV8Ef9UPUMQo7g3B",
  "key27": "NbKiuGZYoyE6n4kPYKkSafWJXQPJT1FNx368Hz8A2mWY1LPgUN3AWRaYUqA64p4NX3dJgS2BGJiUJG9TbhHXNzn",
  "key28": "4ACvRkt1qap24Y4MgapFczW8tJj45GGw67YRZes7X22Lx5QHMkc7x1wkiZKTVvkZKZrgjQcLjG3SRsWtvBp7rYx3",
  "key29": "yhtbGmHQaWWkSfYXn8Q2m65ifPQXMg8t4CGdxWtWogEfHhCPLmY4T5K9VebkjW9VvrL1Z3afpsbTncqfPDNS5Hp",
  "key30": "cmikgY3p3t3uHdjxP1udHpdC5BHkt7QbPrJECKtrs4gb4Umek6yFZqaQx7iGoDGp62rQ8J6v49QUDnW9wSb73UM",
  "key31": "3gTm8DqZpm42wgThJ2DKRA8wvPoT7UKVgKpDiKxYgYa4xcvouXfewiY7XFfixjs2H6KBcduvaCaXQFyeMYKD8iKW",
  "key32": "4CDDwxbn64yFd3eeWeRAx3uCrJ42jF51C93MQg2EpcRqX6kqq7kkKexNC5KoQhqqNWu9uykJMMTayhHrcPaZPhjc",
  "key33": "6pUb5kcssLDkQZ2VFA3fSnRbfJhEyXuei4BiwL8381zuRBrmKCzmY2QWd3EKFh7BroSUWAPGwpNSe6WhDp5kafW",
  "key34": "2TpR3gBVnj1Wjr8SY7ZqS3AznkpoW368LaCs6mqcjQyVAVGLP1NQsAqYcV1fNPgssL2aERiG2yTKx3QkizerFk2F",
  "key35": "3hEGYXYneZng3iYVTkNXMXpUiYoAX9JNYhXJjbG99WavVtWQf53ZXRzpW1ohNYCPWkfwCv4a7GsrspvS4LhpzeSv",
  "key36": "33Hbt6mQ4ni5XQdZVt8BVgdGDnhCizYL62UgCbLaiY2N5XLzF5dcyRnddCGoXTezBdMhUL4AmqnkMPqgUxzFWR5V",
  "key37": "5McdnHGNZUxFvjqZpXj3QKdpQwPqyVaAxV3qUZCZBPvFkb3JwGx1hgQMFUiTmTu2EM8mY9Y9KNny72FjeRkhrnbR",
  "key38": "4FVWyekg5AxVu8tDXJiXrKWc9icCNZuYo2JEEr9xg1kF7VeYuZ9XwZhmqABAeu2hHcoHZuUpafkZDKadpZRTg99d",
  "key39": "2s4zadL3gnGJJUoLKGvGNEcccKQRw7cfjfYVcYqVaj1XmS8VfqXnMW5EgayyRsC3uWZt4sWVbEfPCg9QDc4R2e9c",
  "key40": "4Fz9XXvoJGZMWVw67S4L9S4u53B9W7cAv6uWZjYAqURwHpKec8F7tYGd1rkdCn46nxqQih4jbwhx5sVMZM9mzUsj",
  "key41": "5tcgE3bAnShefY6GSbJwpABXEdVLwFevfn48ewk1vZRbBhaxzKats8BAWDBVko9aLJ6pyfDi7Rsy2iw9eacdwBze"
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
