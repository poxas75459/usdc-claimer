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
    "3U6WJLqSAQ7m4msh5dNN3jDm9XwYfLjEpzDnPV8mynnWHsceWiDPv3kqC1wM5CL5e5qpZHi8iNqfsu1NGYFwXdbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59qqXuGJdFAsvC6wZEN2hPGgR4UehcCzyVa15bf4WQ9uSRdDmU64XG9xeRS6QQ6yZoVjppCH7eU1prqdRrvPxCEf",
  "key1": "4cbLaoyQRRwUFEmLC5hUgRdvSKRGbJq9mNZX7JMSqBp1pG6e4Sg2Rsdb4AbntUEqSb8G3kf1Ndox6dwm3goBQWPa",
  "key2": "3QGgJYrsEmY2jTovco2yGnuCeyjSDd8U8rntTWEdPvsyJ4Ue8rE7U5fyfSmHv1Z6sgPUU6sdFAGJrY2bCpdpsZdE",
  "key3": "4DWaQMN2kDrp1xBJf4WC2HhFw8Fvf7iQ4ZKDTeYDgM1QRGDcwc6Cjkxga9uffLVGBeb5JLNqMy9dhsPpfd4C2Bxe",
  "key4": "3zoEncb3xr4vvYrQHz4nkRL4igSAq3dbUEJEF9dEAe7rQkuFRgotLuRM37PXz56t2h8VF56QtiisS1quAG6hLcvd",
  "key5": "5Fy1X1svSd8cvuNyQUeHQDn9kt9vh426LktJW4SSSXTmUZksAMBG6vtHAfPBgUQ1c4mm5oHW7BUac7hvvS6FHNYF",
  "key6": "2HBcGcq5GXTwrWbdgg4UQAVEpfiaNpBpupAQkHYSTrVTz9cYdhDQHrPJCDFcjK89Xr33115Epn8QUqUhB4uQGnQ1",
  "key7": "oSx4TDkTAfDygvekXxyK3EYXv66VMrA41r9CJ4sotNyPoEy4bc3rscW8ig1NNiwNupJ4HmvZyeE7fWGZDknf8Cv",
  "key8": "4encC8z89naPcjTbm397ugRfbWVzCZWaZGCW518guefzgUg9aPjpyApPF63sSGFwjfMhN6wRN2tW46mtagRtQoQ8",
  "key9": "3reiQWdhSkEqsT1AuptwTBRJa8DJxyqvyKkMJuD6PtSv3XkFhTreABWaAmaPp7kHfCFK6jWAy4HSCkPTgssoTxMs",
  "key10": "C32a5wLA2jVUcZ9EDjtzVtAW8kFBU4FFdDJj3pe6poS95HpqjgpggeTsTtYDJ2JqMGHqcRPVnGvPvY17kb9zjCW",
  "key11": "3n4YVW644f3zFtML3uayS34ywFVBzNvFfcV4AwwtFmtiFUHjzE423r5LU41dfyxJLhHo2saCNgED3gKDyRPZWjSo",
  "key12": "ud7odGZUPAthziAXUecCvUUDVXMnYZbHfwGNoKwkpUAdovWX1rFcU8wqHhgxDrxgDGVZMBGBwQZmwkfUe1iaSrh",
  "key13": "3L38eYHsi6zgZjdZNvJiyXy7iLVzBbZw6UT8sg3khxEkHsPVtTwnLgMVQo9RhefMtXEir717kuZpmacu3nebXSKA",
  "key14": "2yf5knjD7gPR4haduDsmQQzBdJewUCoe9n9XbYsQQN3kMt4gsQMJZEgwAUYdMevsSSujE4914H3VN1RJKTnrvjsA",
  "key15": "W1ukNfkw17cqmJJPbhQvoY3s2DPThQmuZsVe56jrAnbtEs3RoFp4MJBpR2sYqfcykk6Rmqq5KnjcmHcSxy9EeGt",
  "key16": "NncrW31gcdcjrYhq14PWf9rVPEMrPVstfa3GXQmZHR4dQqs98oCJYk8ARYjVHLREeJH3Xxw2mDfXi9hXmZ351Rc",
  "key17": "21eznk8zeh7XUcExWXEnzakoNb8bKcqunb4CvnbLLwR7svZ2v2t7UDzz3CPM9umWuRbZCEeAoLgth96m1n5L1Gny",
  "key18": "4CEZ1AW32W7CGqBdA5b5dNZYmyPo8SWRd3KsipwRZKJ4StUU6zZuJnmznJGB5ahd9ruSFWNNnQp23ggvZESavBXP",
  "key19": "4DZehwG7rYce9qYfgSqZz48Hr8Py15hEfuMfmm3RzBtnMvBDqcM3XSF8pQFV9Drx2fnaeTeVqhvrKZcmg8meoxGN",
  "key20": "4wn2DCo8XUEV1FikbppcQNeLEBu94TdTws3HNCDxUnsbpCAQnJV89pa2tT2BBGKfPV4bDAV3NFnsQjQ8WUuP5NKs",
  "key21": "2GPS7zzMJ3Senx3fK6SEDDiBUQrDHsJ6qa7LGFxd6tnrQPEnQ4fzKLh8UwHRqL75QwYBpYQNeFt4g6j47Aj7avXs",
  "key22": "3FsofY1qQRep2AYxzayPpNs2zSdYENSWPVT5wEFQXnp5iXY5wySqW5vYR9bApK5myk27VbaFNg9w25bJBKJZ7aEb",
  "key23": "5Mxy2fK3Ja1QLWHR3NvmAq7NM95wgRWhw8ZnvHaucrGxXRM5yvpr7n7vijyNxdH89LfHWeQfyCxLGPDQBVgfBjmC",
  "key24": "3mu9zwm2Mznnu1PdUDDmiG6HvsoqNc2ehcYkXhaL4JCey4xu6RZura5pAC5FZboPEh9YFipCPZcuAAWVJ7oqxPGr",
  "key25": "5UnYgbZ7WZKabUziEaZ9Q8NoGvCePUv7AuHfY6aSDnFk8RwqMm2ZMeizcsQigybCZwgeVMzEsLFs2eMTXcn5i7tN",
  "key26": "4kT3aDwvdCx4BWdp5KAyaeb5rTWbXCraYyMcHNcs3TFShthQPUmkzniB1pir9iv3cE8CGYgtk6J49ALiQP2a1eBM",
  "key27": "5HtDiae5mNZkwaCrwPtbWsbHFE9vSX3wXV23SH2WTPMZ9JJ5NXocgrABmyJYR65qdScHfMK46Vz6xWYgj7L2g5rd",
  "key28": "5v8sKiVHFY6AmmB18oX3DJkYUV1XPrf23KxkG1YXioR1g832EPJSwgUyXgTAtZvuQ2Ci2uycS76qtmShid7FojLe",
  "key29": "56W11BXx6KaRpnavoGGiMZbt3GEvF7iASCUf7M2Cosq6fnUyvJRoWmNRnXpPvDXwN7vNr6LPyVezq32Zc1LfaoZC",
  "key30": "3yx76jZ1RnpgLbofgpox4i2wA4LKaiRVwTXnA2LmP395MVKrSE2ohvkYNg8B7yQC8hcVDA4S9oi7knFFQwgG1a4i",
  "key31": "f1Jm7MVK9PEqXT6Q66ZZZeizRx4Wx7tLnwixkZCqpj8tEZLsHsWRG1LRzzwfmSQjTpQUERy8KaPHQfLrz9HnXqC",
  "key32": "3w7Mkbcj4E692YmWb1RxygYJdYTgzQK9UCDbqemRJ2QERd7biSifLQD2n9sfZ8jUC3JnzK6urB3UL5oxNq96zgrT",
  "key33": "4cknGGaRbLLk9EQHmiqHqMF1YiV6gUwcWW97FuriVvQYpf9hhAm5pZHv4fZF14sRMUNim1MQjB8ZpVuiLAGBeJXD",
  "key34": "5hGgeDKLezyYN2uPaEu4jNmYTua52PDRJNMsdqdTHqmd6zkBsRq4oUjYwkTt7T5cgZEPLeuhcDtgTBVLQMjrJquH",
  "key35": "ua4JTMrkXGPKmbJXM5bUqsboowtkdckdc6VMjECxHtdYrbHk9AGRSYfsMCvcPJkhtPdufV3KMRiJqWe2T5ZbTZJ"
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
