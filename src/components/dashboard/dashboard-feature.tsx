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
    "3bHhAhHt2uAw9cQdZVhSgqQGr8UUGeR8Gy2gQMnAcAj9bdRQ33YW9V1aVTmVNMCfnXgRkca6qSxTdzPLL73sUKKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wftC5nzhMUJB5VGNEsYhQybNsjJLCcjx2YtyrbqSqBN8G6AfGmwsiKE9SgTS8SupuHiaciJaCb5axDohyJrWT7B",
  "key1": "3bjD4RzAFszRSPRy9kPQT8Kc1iJdktfLamA2urmnBoKdtG78QjpovjV3YjLVBdka8WWPWwYeJdfqiicpCW3LJGc1",
  "key2": "3Eg4KxJXGfaCXTva3YtMyp9HswiQZrZqLpwRyBSnFkAAKPsXurUpd9SjJbg37ngJXohTfi6g8C7BrNZpWxeNVmiL",
  "key3": "27xPH1v1fFyinrx7bi68w36XaY6TMPTi5WcECq147rWngJht971P2noYazaE6rkBSfpxyrAAyfkqGUXFjbWhPGFx",
  "key4": "2b3wkJU94Zuq4CJueUrd2KUAw2zbTPuZfjrNHQTwDqSzNinYNR5ktnBT9xydqqWn2UW1arEerrWxkyVsvQhkDFhg",
  "key5": "8yr7ihvQHrKcnoX4rgL2Y1nbNv4nb1DDs4ycU22GqspVs36f24NWBqhaBpbMmgJxEJWfgCPJBypnF3S32AJd4Tq",
  "key6": "cD9fyCMwZrSZ6rydwvSYNS1N1DdBWp9gqr83pqEwcYJKGeXazk1DSbJQpR9JaCZEWpzxbmN3gt6XZQnnHZMPCfb",
  "key7": "n4CStQX5x6tNVdzHjFLLr98HcMJbpE7gZ3vhDoVuhW8433Gn2n1XqHnzjXmqC8MKvuR64H7EFoXeFKBmDWNVy7U",
  "key8": "3981jopc8cgE1yrYbksxJeWkL2Wa7i9rsBZ14Ab6Q4yABPnHGEAewhjNGxKrcsmJmf8SXeY4BM6koq4gzsnuT3TZ",
  "key9": "5H8cFZY2Q71NdgfBjxG5iuRKfQM46itSS9Xf8MMs9AkxTKhrXmcjKbygKciEokQznnKKpVxkPcXb7UWmByr4yGa9",
  "key10": "UWAQMNxjtsEF1XQ7BjN8gJadQVvouBkgYNbhC3JPFHYpM1pX13cJDnhgK5CYZgyVE6nE3qaDQ6QcqruobiJpCyG",
  "key11": "2TKcyQ84CndFbBPCfxadMzq9s25XZyrmCWv3rkzdshRGTP3Vq9K27oimQ95KiMxneVMrJcvFwV8Sgga3AaGyfaMp",
  "key12": "5LYxbYC2vmnTA1gkUkjcSVyL92b1uQPqRUugmEb2hVywpz6gSaNq7TnSZ2KfWv7vZyPT93Y4DWNvEv7v6QC5CK3B",
  "key13": "49QnNVwaeMJHQD6bJDdfTWcar3oFWECc73u4rcqKzYqmvNF4VzpodoQp1c1DJfqkALeKXBFNh4VhbYTJkMtsbKJp",
  "key14": "3iNAHbSQdVfnQtSrCMfSC9jXY48CWA3Q4KJ8bZTHRKxWqKifeduzyYi5STVdAAnScXRevPspGf8jaWZdJ5Qn74yR",
  "key15": "4gLUMK3MT1tEJfnzH1BUGb9bzq3DksjQEsc3wG3aYNX5giWGzgvCsnv8Bs1LY74C986mc8FBC731rHjjeH533MY3",
  "key16": "5fDZE7jP4njpYhhXEqmrsuF5VCYUDP5Mw5Gw5JiXkMb1AotTL6XDnGfcjL5CAzLPGWWEKoDpiVDjiKkoXFbveacL",
  "key17": "4qBkSQY9GLAQRFDQaWDuRzUMFMrf7eeAQgwA7kMWB5WzxaLMTu5s3HDmmC6VNHyhyRSqo7t7di4qrXD7AasRntNM",
  "key18": "BDzsfkeuMmSX4Szz1KVZtpjd3njMemGs98FY7ronDPtgnPjGLnaazM5ndZ9KDAFWnHkM2vekj2uq3tpmGNBu1bc",
  "key19": "28nNgwX1MsctwXLQ1epRjvMiLWBBxoVWY44YRzwKAi9M6gzkXSWMJizhuehedqo4xYRhhKqZw6UusbeUsDKwZcdn",
  "key20": "3qDAH2BhPVtYSkpuj9KY6DxKm6uWuXnX4HZo4Bcr3QGtH1yTc1e1nrw5CgRBHVMyBS4CZD1FPbcd9V2HzMU9TFdD",
  "key21": "5mBLZzYUYi5jjfnPHgTK1BkNCk1VSfUY5HsibKC7Kx2HdSz8dh9wKizVkiZaV9L2BAhV8wwn432VYujYktvvLxpV",
  "key22": "2GEXF1kYgoiH2jGMdLKc1sEiQVDwUpqpKGqNP3aethzuHAzZMFsAHMYUsGsDG8HjxReWVJswLJTSi7NZQpVQhf5m",
  "key23": "jYnT6y3aVs67nHMLxQrg1XLaWXYETtoj4sVMf7AyUzUS33AyY5YwDHTpigb4W2j2NGZnVrXRoZqyzvdQPFN48EZ",
  "key24": "LB1PFvGkTrvxMjxtFRTxnkigh5ScUua7auEZVnzAygZoF79nzNQ7EQHrXC5bBBHX1Buoizkug68w8twkvKFXofZ",
  "key25": "42a27E3B6f594G5GaZcy1hw4xVuEYfVZ3UmRsCRwDhBtrQ3zUmQo5dAYDwpNoNNLwDsKqasAKGZavsv1naTDEJE4",
  "key26": "ouELo4g8AicqyCyNWojyQjrZCZRo8z415DqcYv7cL2VeBkykzjveRjuKrcLo1CiunT3h28GqfFSqaQBWyAfpyAo",
  "key27": "3Xrbh7JKWoMtuHnxU9VwpZEL6AuLpRgBYUGBshRjUhurWKyuG5wiRmiBzC8pMLtGPqV56d3Ce6z1UKRGXxribiC9",
  "key28": "553MP2pZXQcv3Hezjqy7KmPQVr28Fo29R8RTCP7Fo8kCuvzeRkrrvH1rdgHujtUCuooMqjy7sAbi5yY6sbSMqwL6",
  "key29": "3XsLJcKSzj4e1sB5evtFmpVhNi5FCU2uitSEAe4B5LTF6snsBCCDhjHEeDUbP36NPZU8K5Wy9N7N3QErnhJAukE5",
  "key30": "313Qu1gk9zEvDhT4uawKisc2wZftWP7Vb37q1zfBL5YUEbtAXPHwiGrSoyFJFPLX7nU1245iDvS5LMd2JwAgf2xB",
  "key31": "2VBoUtLnsYP4cePTGs4TdDT4kJDp63hx33TDdJgb7MZGXFmLuEYhq4AiAXxpttYv4L5TEAGNESDbnASHSwinfjuZ",
  "key32": "2ijsj52tHLPyFzcoGCqMjUSjtip5xruxiJsgFYJVnRQKGBEiz2gQjWPUVsxoNVgm7SbbhLr1FrtYqdGPL3n7hCnH",
  "key33": "3t7urza8HWxVzrkLYs4U73zpvXvWbkGwbvvaavpRNP3LJkCu7yhqr75aA9HwWFJd7rnykYH7KkCSy4N5RbfWs7nX",
  "key34": "vPeT6Yko2m3BnJjW6dE9pDjMDfZKpUopyKW1aECQH1n1Bj3MfaSUf21Abpgjkj5cLSAUtWwuRRpLCaMn965G4mp",
  "key35": "36ksyaDwrcCdRWtLDL1CzcUaj3p9RH3mnYgfqeFLeH9r9AiCW26onjvthRBSyQzdkJWiy8NvMpGR6DRGHj2Laqjz",
  "key36": "2hd9wN8JX4Vsc5FYZArF5YAEm3zTREYCz28EodpGzDFZRcxpFx4Dpxf1m8zrUFnCH4w7S6p3APseDXrRPXzWC8AZ",
  "key37": "2TMJKvAB2onKi2pLzBDJqTVA649jCCtrAP3wZi9H3RqrMSzmtTfVi4ssKHi9v6pDjuvLju4xRdjtE9fnCdGY6Uwr",
  "key38": "2YSx8yxqoUxF1YuVaTeeGfvqGFcsFJ9YWtc1JGn8DfnsyJMxpeeJorzaa4523FscqxPeUJfxN6Kydj9RoYbZo4V6",
  "key39": "2eRyDRNimYgLDix5cDQ37ux9fntWAoyk3gj2482qhkpzmWZxvghnwsNggPVK9vbMDj8XZJbk6jJrb9mvxMNCDfDQ",
  "key40": "2bAARR5a5FAJzXCjq9BQuPQY8DU3hN2DJtY8FTo4rBT6rqq5EFkD3a3YjjN9Xv6N1w3hUp77U2Rmc3tWtjWJS6iX"
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
