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
    "5MKRQDwt396kdcPwfaUkrhp1B1oqThCnA6AEg4ZQqQq4ceA5HbzDszCoevFuhBp84Wq3noULYWXJpspUahK3G45n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EDYLBkZ1D94UkSQenJCNBgH9xSVvBoWE33naXdpRcfsFjVmK1F2H1VtsN11UyQuxarzUuFHk5he6eeyo256NeZJ",
  "key1": "2fhX4wC61232PApELYvWr1ZCTmBvj7LdQVhvc3LG3T2BKNm9cXFSfAUxj7HhUu2PZFnAo1yYN5HsptiPcBfEEd22",
  "key2": "4T5kETpjSRvEMhsQr1txAct72FefXY4w5AzbdtTG9d6oGRfPsBZgiWMvJTfaeC2bYsiKVjm2t7Xzo1jECAz3Kzeb",
  "key3": "qCQwnWh3SjZaVjdprseTLDs6WoeGc6KmgbNymG5WkRHBUq4ucbE3sqVucjm9hyP7b8ae6XSfAszpFpDdsiRH6Kh",
  "key4": "4wymTozVvvL1phohDjGQ53jHjpSMMV9B85xBmveCWNDDhhXtX7xgXbgHGjBr6xSWj4nufK64AGqM3hFN2QZbT63p",
  "key5": "4Up3jRcxGhtXicUoADquZZvyAChf8Qju18voDcUhKrUN7iSfSNpjuA5aMXsE45MckQgjGPQPm2C7kNHG2TuzTCen",
  "key6": "4igGCZCYML5NH22egP5p1k3bFvAsoE3WZxmmXZFZejKpWYkvRsB7z3nGVit4FC3n6ud4x2rFVS5VCoUkp9iQq3A9",
  "key7": "2WeE2dfPFvrDBQHDK8eX2sYr35Lf7jFZVKF35wdbpNcDDKxUUYAT2muRENrErXWZhJC8eTL4pGVpHsNcDEUoqfXC",
  "key8": "3X1aaNAsCqL7MMs614WK3TQAmuDhfnykRcQyxcK511pzWPHsrGCVokGLWb1vMB3ryXTagT1qZqPaTrYu4LVdjoPW",
  "key9": "qgVTPqK8UR3TLs6WcJgdmRuXnnXzno22yMBZjeJwC3RXTB2C8RhUHNYHWxnogqJGeeLW2FCG6DkLwD9ndPGCZ4Z",
  "key10": "5qG2Kup9fhQ37FpTFbfFeAno624sUGB7Vyxax4oP9xcETrPQTqhtbtxtRBoB9nCPqNAHYG332GyFrbrDr2m84RgU",
  "key11": "4TMr8HAJToFL7RgmZnzAr7BTw6i19uRzzb582pQBiV2w6sjteTyASiW3zHsQSVW9CLsHrDTna69jYzvbv6mrNb14",
  "key12": "4DGQgGYfXxpEoeXgArd4HF4u3kWBDSmWEPUgAo4fY9pip1sYCg4Qq2azPXjNAeqBeT8weTxTaHWw7MySSw5udefo",
  "key13": "GgFZnC4g5aLYHcd5dP7Skh9bfjvvaHXw8cvdK8rZttFJCWcKFNLF3GFBMyLYTbrinV7xkJWraA5zMMuePmqz6Wx",
  "key14": "2ZwfVAKSYkVzHNMqL3vvVhGDoQpDAxYHzR2bRxRKvuTu4iLsvi8BH63SpUcDE2be98hFTwzL85NSUGE95Wjy9tqV",
  "key15": "4dNTTC8rQmsLpVSj7r9i6bYoMva32VB5hzC4hLAN4GLduoQodpXLPUi4a7N4XikT6iGj8h4YBh5un6nP112mvtr1",
  "key16": "yuHVSQd4kPySWx3vYmraJJLWTFpXkVQ7XzD5Pc83WS2WvY46S6orXKJEcstUfGERsH2Xf3XuNaZ7MofRvoXnqst",
  "key17": "NHUKBKcDnBYsgNctaeqGeWuTJErqiymsWYx9mgsiMoCUii1crqpEF4UG1Nh8coD18fVUMvSP7obinyYThjaCM32",
  "key18": "5yp4VUiRUFq2QJ1WutSMz2GEciNuwC1uihEajoMVNzePDVaXe9PUTfPEoMyKzQbtTS9jfvR2f8SYVGeXwbvAwLGX",
  "key19": "3sCPadjLP9NKELnvs8TUWiXEkgwuzH75JKKTN1LhQMDsTGK2fikbRqawijojgdaygFd3MYWYvVSkb6Msizo55s9o",
  "key20": "29XukymixNmHj8ruDpUxLjg4LBySPmpSXQFWJ6uxvFeWkdmSnPrS7AZA4cgxRTQyQoyUP2c6X52ov7BfSN8tukuz",
  "key21": "39pyUSeLtcKXJxHZ2rYJbNG9JgoDASaMuj5Pqgsh2wZNrS1nTz1sVGaA8dEmaigptAMuGk3YZjcwVHnvmPmts4Vn",
  "key22": "3rw6qk6PeUr2wq34qBXzVjuXqpSN1zy6h7H8y9LF1nZFrFGCp4aM2wpyCaipPDmQBErTvG8Dt8AE3tHq6sZcqHV6",
  "key23": "YFLmzbmnGSDrcqMBx4w4c4CZhjZm87kUcgqaKihvJtmTw7E3iqAZ7NrZZwNjTpRfMD1iL6zF94M8LQJxAxjqf3o",
  "key24": "2gNWHzW8DyXn4x6n6KjwEwBw4zg7YxGr1FdgnLwiw7vuEV7McZ6VagD6sLFk8mGsfyuGM9WbsJMiGifgxyUqJKt1",
  "key25": "2YoktX2ydssHyr6XRicwJknUM1XaujuaXupfNrYCzt1rSmXiTHZA34oqSHc7rtbYD2NA4qW5hLyHG5Bgtiq1pw2v",
  "key26": "2TABUDgqy5fEKG2RRXKBD5Vnci4DoFN2wy9NLH9JcfqNJB8MaKcoQKiCv6D1HeTdmvqqurXDTy7rtfdUBmqmmg3N",
  "key27": "5Vny9U3TjsSB11vuCsK6WhsK8hvK6diQgeb3SG9sEqg7h4o8p1JdSA53shfcdVDX2VoAwfMhEi1sbpyzNiZ5oAdQ",
  "key28": "2H63JBP5MhiBQpivvTKBqNu61TY4iUPEJf5KrmkNaierWprkhp59MtzBYwNxtv6G3J3T1xLz8yVY2PKoVwrK7aQU",
  "key29": "2qFWqnWsSorJTw5pWrZty2mJDdC4Tv1ZXViCDjZT1dyZTqta6vv3dMf6DCk1pNXfYj5GPonhDK1624AJhw2gS8t6",
  "key30": "EPCvZqfBUfdCvcfdsuKf4FEdESLFKQpWnTEVC8WqpxqcZomtvjsYyV6vxQSs2ApY3xNEw1YLsZqfSHnVHLhKEdW"
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
