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
    "2LcJZtxgPSn4e9Uvutf3FDq8TjT834fwu7pAs3YSdKySLv8VASbbmPV6sBNDBfmRdWRp4wzy7KiGUNDFaA7aN2hC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ToWaCghKu7UKuuWbbe7vs4Ug87GghKPY4CEeuRfNTcSE3t4NXjumaQdan5JsUeth1aQpaWB9RbfSr6ZffVzabNf",
  "key1": "2jugr16mZwBfSNDmUsTppXKJrntwomjseN5SJJEB6iTHdSG52aDUj6dqrwZPcEJ2A1eH51eLMWCFTQdYgqR8jFm3",
  "key2": "4JC1ipjKxVxiQznAuAFRE8QqFspMkrjJ2wKa4zS5oGACRpQyR5oVpuaoZhBxDCV3P9RXhWVm3iDXES9w2cNejpD5",
  "key3": "3rbEo9qrExHrkVwadChq4NMUTXTLZ4QZvjkkpbzTrpq77VPJoVj5RxcRqtKeb42Wo6LgJMqL5oSk7GHj3p9BHSff",
  "key4": "JbNmRJ2uVkUdLQpnuewgV5Ph8A8SXY1BkWkQ52tixQ5suVEWa7aH13mPWhCBrrLeGVVT8nix2zCFRvdktgzK5xd",
  "key5": "5o4FLuX6nYZromLQQWGyvG6Cqj4SHZmpenHiBAWpzWHkLzBqk291wwfpZah2yodtoGhSnmBbGxGxkVJqBSkLWy27",
  "key6": "2GZD2MECWBBJy6xsNzfcw3pTPh7N2ZJacuEGMmt82jESAhmJoQRWrDP76nkXKedUP8vUyHd1pRqiNHkjQCSiJHfy",
  "key7": "4ZaohXCpyXJUSQbb6ZQ2fY2mHxxbdyGWiM17MNE4asG7szDJoJNorUGEtmSSGx8jCrJ5nMxQ87PYXBwmfn5hLwFm",
  "key8": "qMqDpyGFVmEr9STaqReQQVbr8eTZtPKJHLyQ8CUhSQY1rywTU3241VWE4qXFJPL9CUdraKmaUCzkite5kFGvorv",
  "key9": "3baM2iyCCjPZrFpYkKHuHYSSVwayfvRJVhiJX2UouyAYdHK5xmPvLmLXwPqvbeMT6buDWzJKuSNWXG88C3h7wEeL",
  "key10": "39tVFHctNfR5VbkKUCjeqCtEzU5RrvJLV8xLzXrKLeXTaw6dGJ42zyMsBinSr7iBoRt8UyP8mfrSNwwqxSLcQMdh",
  "key11": "4QSag3sCBY67NH9bM5JXy45nrHmae4aS71gtfFxinJJjDYVWamJL5sDDo1hUCom4mvn1bCo4z9wYigTFGyQidZsX",
  "key12": "3E5fA4CgDec6umfAVDPTqTMfmeL1ZhUZYeRb9HVev5xhhdJfq5muK5QaZhXdyV3Tyecjt8KmZiZX1XhWnycV6WWg",
  "key13": "47tUsKWZXnERM9xRa4unc3nS5sBvMm9VRQVVqgtokiFRpqM2oPyxTLWwFCGwxBMEgiafnVWAkxA3t2UXVs1x8TYC",
  "key14": "4ZyXkurtD21k5nKHufbNAB1cqZtKnGDCa7BqjYcFdh8tdhAZH9U6AQTtUxHZmJsdGD3Z8TfL6C9LL8tJhEeZ198f",
  "key15": "WYRJW52saLLnkP1r24X4D7go5aFcPZPiUEuBYz9xPDgkRsByUZ6tpRbCYgi6muxgM7n8yKpjQTdZqtazXqy9WMe",
  "key16": "yQiJkJS2jnqnvwS1Pyh427igqMY1uBzBioTriSASS6tdRDMVhPdGHYMujZutU1xEhDGdkzdH4Z3SPYzdYpJrbnE",
  "key17": "upPzNiszosdNJsvmwXmVLNK3LDFvpdBdd4Qjvmw6ajNPAAYz2FN1F6erKJ5DSNLJp34h8yiGgXPxTuT7wrNV4Lf",
  "key18": "5heKrmvSpMeqxdR4B5BXjCobYUpnHrdN7vYeLetSMBw77yH7Q6oFD4hkGz5yJDpMAyNSogHcBnoRWawqU5kNSKmp",
  "key19": "454MmVGbNGFkVdEYNXK9ZyPP6h6vZfo6a5kMdFfS2cUQpJZBNTQJiBjXFsXj4qWjfLgZGUbaqpje5Fg7xyG68yCs",
  "key20": "3uPWSb2Cq6PFdpqfZLbx4MGU66F4ybkhHyK5owPtYdeRaKBDczyQqUBxqs639pe2SFfJq7EsKNPmgRE1zEK1c9R9",
  "key21": "2n9hnuoK2WVuMsB8Y5ZGca2ZGj2BnEzo7mmRRK34foz4uDhc9o3aihrNUM6X5QLMxgBAc7ExQMe3Vdza9CiDRUK3",
  "key22": "5emirC4F3APrNX3vCkpGheJZtej36e5KeZzmtueCcyxMoykWfvznmHN33QN45fCwUQp1iCjR5YaAUEw2QSWi9G56",
  "key23": "3UkScynZsF7sfsXWZdDYbVPqy7eBB7pkNfFuHReGoJnLcGUcXvF1sfNas1QjxFsNwXoxyQ3MEAB9JBygp43toA6e",
  "key24": "22hS4MPkh5EgPmjjvy3w3dAouhMf4gPZXV35Y4sNsyhWDYfkGKguCj7gBoamLzj8nNDcrkg9G622ZAf1WjvPNQyE",
  "key25": "3kWoJi6PgkqyCNdLst9SC33Rq9rw5b6K4nRCBeWmVNTRpBTyqPhsrcyWeqXPFCbw1ATCEoHgxsEVdjneSaK7SEsv",
  "key26": "3PE6MkyURBakdBP9RVQNFc5BHZmwB5wt2kB91Askcdr59mdYmxpw1eCPL16ZDjHrCat5hQcncvX8xHuft2auWEkW",
  "key27": "3PNWT3GeuAvZjkoJYWYnfoieCYLofkeoifxY29D4Wj1nRo9ceVjrYtv5CQcb9kPNn48PCgofZTRJ6D6VDEw236pP",
  "key28": "4DGvAxp9a3JsxWvGB7v6Mf9xEwoXi8BKX9g2PGAXhBNDqbPgppdTNQ3RQrZJRmK2tpA9saqFBxnLsge12RS8dASi",
  "key29": "4aou1uBcrBhG4dKzymjPV9t3JmFe6qbrMxYjcbJKCKLgmLWdqxJjKjqfR2xYhJLws2miVEDfvnRQSQeYQAamqn83",
  "key30": "qjy4na7Ao7yaobM8ZnBE1zN9Zo8wtKMBV92HM3GdXXjNekej9xT3YPra2Cwrk19b1axsKy7wNWSgZfHEkQQPMdX",
  "key31": "4K2Bg7PkAJQ2gdYLB6VepzXohLBZnSS8xXG28vDE9JXxGo9sM6A11dyUa233fExVvSBA1fAstsPXuumbPrKrVscJ",
  "key32": "t7xq8aGAhXdUboKmQguepDbUmKxge65VByz6qdhNXwvh9HYrWYXrWphMpm2Ryy8UvgWxVrn8GR5tY2JhXi7kBXc",
  "key33": "55GFdieDw9iV2v4LTxQpbcT1cGjk1GQic722Hy1YwTniYtqbt8cR18vrhU2Q3dkfr2tShJ4Qsj86ukA91h1GdUEQ",
  "key34": "5kWTa3SnwoNKm5Av61fDkDuwvXLgguuYn5VkGN3zEb9Td6UgfCpUS3daVo8rPZ7FMtd8wjgkJqwU6CxJQ5aU7rih",
  "key35": "51BJsNZsY7LPPU4rVUH851MjaeKNLX4tJdT9mfSr8P1H7ryg3Kece5V4Vpa8aZfBk98GrrQAdpL4oZK9Ax8EDJb2",
  "key36": "4aEwX9AXRaGy9wWw3GtVxcE5ZNpjKstsMHh6yjjmQbyAmJbvyUJnUj7qvXTzrEFRNtttYtPU8crth45xomCZL11b",
  "key37": "4Lu9qvuWnpc18dC84eqg9gjUGFsQkvMgUWU5eT7PSS1mjwdTzPadSzxeaWuSomqn2y8cLKZhVHPMtfL9DH5T6StU",
  "key38": "23Q26Wodjovweqi7bLZKd1oEwJxRQZtRaPQzhXusMRzxs1WDJxGr4QWCV4mGVUaCcH7TB2JjMJ2UeC7MYHUtE2Wx",
  "key39": "3HjprTuMA9p2WXKapdxGM199wgEfCoMiFruUY7bJRG9Gxno3dibYFNtMiQDPqyaVhLDEwTUibUvn8EBRNGg1jtk8",
  "key40": "5FgaTJ6nDiRS8fwzznci3NhjX66k8Hz9n2NNHZRRmyVF4Dq91kEC5PQ53C5qW3zPR62U3T9asPRsJMMscYBcZBGN",
  "key41": "3e5xfnRLEXLR77Q8MxTLbDqLwCfx4TU9utN51qpKLdWGHhhpGNNcHgiDaGrSqPXXEo3uGG2ZLJDPC6wgGoTJpT2k",
  "key42": "2T2PcH5vwYjd5r1LMykM3S6H2aKueQbRzrurXG8ZAGmzKdZfn8wczi4GQP13tM1wa54WTiFFwyxM7guDryXFYDXf",
  "key43": "2YWjNUarGbH9K4qxrxPY8GNwzeJVYyf242TyfPiSVdrVmz5dSZDuAGgXYR7ZqhgbtY4qz2wLfpX1MAd9YbZJVTDs",
  "key44": "4Mwj1zvkwfg444MEFzrMYhwnnwP6X3LwZq88HwdRaH3uLfXxpWwX1Ltb6zbJdF4Rnx9JEbPKwcZFXAJWDdydKJeh",
  "key45": "4SBggWxYJh6V9gemhmLzPSvit35pesejnvChpieXwwfoS5pEtWV6DejaaLXfXK6Xdgbjof5whHTh8yEofRTueibN",
  "key46": "bSZ54kdAG5wH5SArTErjb4NiFWbNAhC8iPEXMzjdbaJ6bCtwoxXTvmuEq7qTsYuECbaZbR6HwVS2ULiqV9XhfaZ",
  "key47": "4KT5iFmSc1BdtAeFy9VWYgEzn5wbBoW7suwXTPorZS9as8JbgGTL32BxZrtsTFY2qnoSfSiC2G5ghy6M5Z2mSSYd"
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
