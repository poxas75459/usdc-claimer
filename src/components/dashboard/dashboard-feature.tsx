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
    "2xe6KTFN2yRwbyEDBgYiFuGgDDRbNF9pohQbDBGusAGizNxp9DPXmrKosCxWJWfAuGtc4Ge6q7Quvf5562QEvoa4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SVj2HGKrxWo8oUvQZN2dh1WMyDRMDsWt9U4Me5Z3j8af66JuJ75N8ajzmsBiEsXMwUPnHNp6TQf9wCdgWENeDE9",
  "key1": "63SNGjuBqhXxbHZJUbaSZfBn7JC6yADmrZRr8A9dJMKE1AyzyepexPDhjP4o8mfRk6a6tzsUaZtEaGW1TJHSTGsG",
  "key2": "5TjjbmPMDUehcDVgnKQ2HucLZqatvS3gZRxp89kkch6ymaGVE8fjiWigycJjgaNsitvX6Zo8cP8dRgRepaWGc6Lb",
  "key3": "2D2Up53DNnjRsUZc2VxL8uUdJKDjRCdQHZ4BxhCTGFPUhhgKgm5Ljsbf3jiJF3h8NJzSYVHE1TCqcTQdjTWABysC",
  "key4": "2QHVGu2sVoSWi7Gy3QvUfjnMA5mt73FdQ8hgUyK5JJZzSEMh5pE3mmsAwcCHjjPLrTNg3jrU9yqQQFXSc2UjKf13",
  "key5": "31r1ybyDnx81CyJZmGmrqxH1zPjU7w4bVogJgmKnB6nQiog8igaX6E99zrqAjnTjUyJ9LCALDDzCigRTg1Z68NiL",
  "key6": "W4f6XMmbmKTXnEd8fYouBBvgiTL6wqHnDHqfK5syBejjX4ydoiqAT8rWFxn5mhtL4XJhbzRMLhoN8pEaJnv8v78",
  "key7": "3Ni9uL1KrdpVjcyczVshyTfrhFr5ridgoVwx9k5KomnyhuodPXwtB3ibcLzfLFA239LnSHTZHCZ7RuDA4vWRCTSG",
  "key8": "2mMeYxCkJ6RaoEKJZiBnv9fMuwrMKb8NBPPziiSHymrFQHxbApYCWeAUoxYcqHU92LzFTYafqCHwx2zZdjGyACa5",
  "key9": "3j4mxd4FyrduksP7nRLR3zAiEk9CU8VrLybrH6SqjwuWJHBV5QwqTSfUafVejzEC9Tr5ft1q7j3qoN2qoe5DqD16",
  "key10": "b3R49GMSzCYVtnHuvqCoJqk38zyei1S5CWCiHaR4H8BGsgrwdPYVDu8BjZctxPyKF3Qc5vVk1M8TAahZaob5vEb",
  "key11": "5LfjSB8qHaSucuzd2bMJtzhqYHmnJAHkL2BXRhev3fqt6xLCouWpXrDGpVZFYDRrsH2gvMWb4GC4F8GtBTkDnvjd",
  "key12": "rJYeGdrriwZw8H78tKZDi7cFdar4XFyBFNfZZGiMJwhP5edzgJEYkr7VdNrfNAvorK4aWiufW354P6mJTYo4jk6",
  "key13": "2pQmnTMoqL78jYqnNiZhjMjWN3zHyFVgeqKXJYMexY5HxWdUEjW2qGRRUZVEQ12PGGAcNQLA53gRCrL4oBjUbvi",
  "key14": "5o5Mm5vUhg2Ae93gEcez1zk4DK3EaEv9DxYJrNX4pzr2Zh1pH5Yzq5nTagkx5gm7KbKX4vHveSaHG8VsyD7uhULx",
  "key15": "33fm42ZdXX3Bs5njmQcbeDg2wbE5FZF43DpxBYpB2zLw2D56yPQwQhvjZtkQSvZXFveXcNr9ttxqW9eTtpyj6vjJ",
  "key16": "4SHd3341uLJ825kCm8XQqfMfsZopEKJEKv1CTsU4GGuYQFfRRMrQH3qaLJE4Bxh9cxEGYKuhxKyezVJaTpRQHRTs",
  "key17": "4nYYf4unE2gnr4Ko3aYJXpnUSvcDmqnTB6v1ERSLa9SePDCMx3xFEyQuMsWCznfqMD1dDdTibkBxzmwfJ6PQEF3w",
  "key18": "1PwMt18dgjkFEbtKH5LmgXzCoQ2JwUtKGLJnfnv9tUzrsbmAYxKX8bEuaxzNepQ2HkFGQG6PxEuYgwEz2LUkjUM",
  "key19": "3ZTWbVSb3R6zpnajrQMGvuQ7imnwfmAVhZBygJGogAydnkNyedXjVuFuY1WZBEeQ2ygU2CQ4qN143F6NDFKKroMX",
  "key20": "32USRmHoFmjS5jxKprfKUi9WiS6Wj2653KB85YVTyaa5JGj8JmyUQNDaamcY3yzJ5fuZTKRh9963VsNYoJZxg3oF",
  "key21": "5r5kc5S3aTtwdVun7acvooSuwdG4KAo5BVVHm4P6MRJ14CwdbhBMmWxb5DGL4qvk9BKi2fXU5CMKHas9k1BJEuP1",
  "key22": "3U4agkfW7FcXqt49vhSXiPSZLcjdCjp15LpQ8dnBX7kNvmvpvNu7D3WWxAGWdrzwXHmDEixY15gRqotz2CxPin33",
  "key23": "65ha53pGo6h1RizWxRviSNQrpt97SRM4e9sLmXuGMk1QTbFNZXQvvjHM7HSSQsHiDSdvyXZQA9kz3usAU5XDJcpp",
  "key24": "2p91T8qjX6YKJanAQjznp6efn7259E5aXfZ2rXs6U3hSmm6sAteCgXMvQR7kvk8Vs6tR5pXbeCLSqhQ4sBUZHw8n",
  "key25": "3NxQnmLpZY5SWnLL1xCX4RqH94UYtZSPKkBo86WdrdpREwcesvyeaWKzvW6NQEkj3hQ7uatzAw5Gcf2Vyd836ozg",
  "key26": "NJMHPShh7LPqHp3cXctucchtBS6RjQTh4S8VfPQKSES6YWxA3safJSo2nrEdVXktTgq9zdhBsEVkAJsPrrfeWrD",
  "key27": "3yNNUPY5MXg8yJha5wXUTYMtaTNsXo4ZjxVJv3Ve3sNYGfU12uAehXEnfJj1yjSkj4GPw6urmok2iuLE6EPrPNhu",
  "key28": "2W5FMgiqMS5RdMnwafA9kMvsYu4veNoMeVgb2yDcsoGZ9QFEcnV5GM8Kny7z5CHmM7caMigHDXmAJk1G7uk22Sge",
  "key29": "2Qd9aTtkfB6zmLBfzd4hAWZtuvqqk81wFJcroQwu6wc2nxYCwLL58RbSDsDYRkqrxWFETwrwRd5btf1dPcKQEfAd",
  "key30": "k2CZWQj7eHvUNM5JpYdjtNmekNWks2NT5c91dLvbXKZbtZpyymBHfnR5Vzz2LCXtjkVQQ7XeLnYrYmRD8fCWPda",
  "key31": "NJMai73CYpRtxZX3QAeAAGNzBHcsuC2WUo7j61ZUBgSSownuswqM7Z5ErVYUWNqTjDxMQdG6EKNN69eum3e9vLw",
  "key32": "3vHcRUg2nziK3ThcCyix4Rhhu5tDZ6n5SPuNCJMB4h1aKNVF554pZD9SWYNEcsZ4xudH4z5BuFEGVYMbDgrWK48J",
  "key33": "5uciPMJcsCwYuqXU2xpo7eKzhfygRZowhoUbmd1PsQZADCDxX6tU87dM2eFBWMFRFRYUny1KMSsD6CytoLDFeXBW",
  "key34": "3MstB3mpM8deam5MiqddJ6wy9AwT3JHczrnsprs7Xru2LdXzWDqHVBiaHSTMMVcoUG7ywg3oNQ9eEtFjPv99hndL",
  "key35": "3sUYTxM6J9uhAC49jy2NVoX3fN4KDWBjZ3uzNQWFQA3ARdhAhh6Paxj1SnCg4qWfm4EisTWJA5eH7o9SB9NsNGzJ",
  "key36": "26CYTB39iNrjH2DBbt8JBRPVHjch1UUaehtef9ZwJ2roNJXEycGKG5aKg7P22jSNvWkKHoHtwQGGZqAZBTd2rCna",
  "key37": "QykFCkiqqi5FCQXa3LLRSjJZceY3VLYCnDL1EvCn2gVdKspBSnLA76X6mA3ZH67jCEtYxsFHLb9MAHu9gbHSpgc",
  "key38": "pxajs2fB4cXWJvBtTMEtfPiF4VAW7QkRUzNRNpVXq9ryZBE7ViFhcNPV1E8SXjUedE2ScvepvX7SMQnjFUKw3j5",
  "key39": "2A95DbSe4M65ZpPKbpEQUBV8V7BV4dJGjUpy15Psnzf9ZqU1AaZa63XpzxhAtZTiTV6jT2xXBDJodngYWAeNaBKW",
  "key40": "2m4xkEcmvxqFnGyDKcEuqUGxkPdGCWo415KgmdHcvCrZ5No5ZpFP7UG9faFLJB9Ch6XWAqzDh7cBFF5tBKuWmQec",
  "key41": "54w4PjFFFtfZkhrqxv3qTVAZnDMwuEAp243CGguHcziFGAckitv1BQfSa1NFBjZ8iZ1AwT5YWgVr1NcgxL9Zv284",
  "key42": "X24ahse4Eg2ouAkX4DfEF4jSpgiMXpf3s3PZWjE5A6Fyv8cTHwcqbVuQn8X1WLufheR6VrftGzhuBDJR2Nd6QrN",
  "key43": "5REXx9vxACZfVtX5KH9DuPuUxQ51VB8cmP1rJyHQacsY7aWe5RM5J82DFF8tSehp5TgyQKKiKB5wPSmtbhHbqoSh",
  "key44": "KTawVcommiEm6h6MxV9KaibFWoRFhJAUSjQiLd4apF2jZe2w3XW87D4XnzsXwVuMddLmbcTKBv4UvdFzbZ86CU8",
  "key45": "31Y9LtGi5DsD7MurZkFPiErZCx4d465iLLkCYL67jMyS9pqQaqF9bx3PBZCNxfuHXPkrw8RGBj9qFrtQUFcTy7u8"
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
