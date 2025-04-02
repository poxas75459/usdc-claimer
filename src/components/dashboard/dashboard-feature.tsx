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
    "4z8ByFcg1q3v1LHosCZzoftB4C9BfomJ4tGd9hJZ32zUyNoHYijzhEEqDMzTZRMhhMznasqP4ELJnEKadsMbZ2S1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ixFgVdfnjw5HAn6A2NJXamnxWRtVBea2H12a8ZGt5BcHq6HPoanxRUbC4nR1tp32iNbAJUmGjmPmGsaW2EWgYEy",
  "key1": "63ckR2ZdCgWH7W1PDdmTnr75stnr6ZJneGXqYhnoXL4Zw46aPEPgZZpAJHdR5vnQ8mnX3yJkL35vdVtAihWhC8fv",
  "key2": "2G7DnoJchbs422ZQp2DVL1qxLFFTgYb3pugBDgfvSD7oGPticfLzGNJBHtTd8AdtMgeuSTBX6iiZkshR2kmaKwxL",
  "key3": "2gSKfkdG2zkwZRWD51QU5zDoHZhz1SZ4ZKbjWmoz9RvYJnNupBgGvSJ7JmprLcJhFye6xSJFDbAPXKDZeZaA8gwD",
  "key4": "4TH5pqH3jQXz3QPepazzGnvtiScCmmCcGvXpFVsF5tGof8JnBNVwagV2QbR7nYsdWyXZgrCMKGSJHFE5DJwzGpLF",
  "key5": "t6KFs6ELuYMXoc8tK1wZbjfUvNz8BmseCkEZWsBd8Nni5XfadgM6NQDHS71Jk35sEr7gs4oANBgchkpEKXDEPg5",
  "key6": "51kas1bfTbrJXvaoTj5rz8kaQrDAbLuV5k2Yrdrcrc65z8ffZMXiWVUSsZThx7DCbV3DmumVZwVh4CERdCk1kSwD",
  "key7": "42yXFAtV6GBRbA38E5xegZgKR4aGXHs3gZhJGMaR8cGW7esJ1SHw9YugeQajNEri8Bg4T8XVcYmesV6krdtzchas",
  "key8": "2TNL6MvtLeQYCj8njEX7vwUR4bj2jEgD5JGh5N93brUmukk65oxEV1TK7V8u4oMRR5F6VkdES8V8jkngtR7oMHgh",
  "key9": "4Uko7VEDPDMtv2QXMNNDjXkbXwzTNgtpEav3zCdCLoKHQHenso97HWwWM75qrNMoqaqGWNrfqjCzBqDaqczHZ9e6",
  "key10": "LucSSEjDwkTpxoKMqc5Qwpghytij2XWsBZYL4ULQ6diUNZBRZ7dGeX6FcaqroYQSZNQDKom28g7nZBwZhgkdt6N",
  "key11": "4jWd5KCE7GP9VPPTVRdStFecs7uUZGbE1VA1QkLD82eNNproDpvkgDucwnft7gigYjsdqEBWWVSAzykgei7bVrwd",
  "key12": "2KqVhWQMBMczLPDuCgWTEB3G8gTTxtQdhjSfBRorMHsmSmDiREos7G2UPiH4ZrrUncheoj681axwLkmYBQgjBaJ3",
  "key13": "32Ye2MY8DA5DUetaQvqAjFqY3oT6h6siFvntHKM8D94prCdgiEpaT6XnJrbQKv1nzYpjZZUa21VX2yM2MqeRo2jW",
  "key14": "2jjaQcC4DMJQ977BFbpEZUb3FB9cNHb4Dpc4Yx4ttK8EqMnvngHwPfyEUZFYekeH7v6nviU2YfiKXRvY2g5ayEqJ",
  "key15": "BS6hqfLp2o9M1X2jYcZEcXtiEgx43Rr7GEkbvWYbFk8tDCKCjAVm2q4Miudc53ZQNNT1V8Jw1xfLoYYL1reASsq",
  "key16": "5u7X1yzW3UiW72emqNwP9czryf2DEUmyA1C2v2puhAvV5YiVwo9wCZ67ujUZjMQEpeyrjF8BfySs329wa6NGwgWD",
  "key17": "5RHVaZfqNhYD1VSMyp96PxagoH177FJS6DjLomJ8wBrpN5RWWCcWVFDWrfhb6sF52eA9uYbrYwKiNWyR5ht3q7VD",
  "key18": "n6QJ8NmcZ783pckYvuxf1JoTRUpeLvzvK9VgoQUzcWkvKizKMxX7V7pet5YhHVnz2taQPaQkVuGAr7RQbaGwn4u",
  "key19": "5nicDnv61q1mzaJCoXrrHuyJkjp5Wq4UkgXMHqWd3eUT2dcT7mCpGFiSCR54YxEcphaZoJtNSBqwpu1dqTnW9TbS",
  "key20": "2idrCQ87kZCPPDayJyLkcFQ6wsr23NfoS135SXyd8PLwJoynUJdBB5m8egbJejrCrEp3ZZ93VmYMCmmqYPoM9ipP",
  "key21": "4VLpusHaz9U1W6sYSpcgoJKMgeRuUCqrafqRUEVDu998b7zdssQcuTCER8KCigsthD9QMULn2QcxYnNXCEpFBimT",
  "key22": "7M5U6HoapjSQ2g8R2vrMz8w4M4cJtVP1jNgXX7cPtMnyEcZYPtE7QwvxbFXaef9GBouwjARTmw36SETnDTzmsqE",
  "key23": "2hr9GVC3bHhxuGPGiAZn1Uzr9mWSP3wmB3CSg1VyGCLfws9EBv6YvVRSFW8xR6P8Bs9zzxUidjHtH41KekixJAdX",
  "key24": "2pXCXdvAURYg6KViCGSpGdzcq4i91hFgFzFoJULcbmVPwyuWjB7iNcnaqzniLS4zk6f9JH9T674NjzLHAcJHRhfY",
  "key25": "2sTk7QsrCD9ZXqjjopjJQonpnM8J2YvjJULzsaHm6rrd1PPxjyeZycyCie4489w7D8GSs6E2C9GfFvXH5ybphC1Z",
  "key26": "3diWb1qU4GGiyHxAFFhFueU1G56pUynEfZqoE8ekhE4yzEuDz7oPmjpCX5USicPkAz6HRb4Anx3zdmoewAedbUkH",
  "key27": "YvxVvfpuoPonr754sVNuSfLpqb4QvLLBjkxfwB8uYfHbgMzdZjPp7qXjxuJRxotzLhjhWofRyUDtvZ2pXMexJ3T",
  "key28": "5SZXLmaidTRFgB5Xy2fKes2wT2DNyghjH5MAoBkd9EFRYjBarKYhwHKBFMP6trmiQfhpZMf5Xa2M8GdgsLqaXG49",
  "key29": "4VEs5Q1Sc8Q5SxA1hZsUcUYWSL1Zibx835Vsmv7hLGkuFL79vpzk8SmJL4bytqXfWNLmZq4kbe8VXmokuVFzQrws",
  "key30": "53tcwG5Uycw9nuYLdkQ2q7cuGxrMEsHfZcTiB5ok1F1222A1e2zq5yQ9JgtAKHW1SuRSrr2CFqnJAvdogLz6nM57",
  "key31": "Vg1GmpABgqTuqSrTwUVkpzEV9yUsW7k47oAebqkbPZKpCBEzkZ9veup7bxV4iCu13aiGnEnFBBzGqvsXFUtMx2E",
  "key32": "2a2xqTBLnHBkMv69Nsp9QjAHSKeXdxEaXtJou53UyhBgXRdqRDsG7H8TTXdLXWFqMvvPrjxW9kLU3SEo4bfyK6mD",
  "key33": "3NPqmUgj8VuAjEBLbbEZo5tR1qb2E5zrf2MGc33Rd4eZCG9EM1vvcTx7f8vJczm7Egw82zz1vbzVMkmD72RxFPib",
  "key34": "63BHCHkTnARoNr1GcvJDiSeZD9zgxqDAJgMA198Kon36wQ8ZpZSpjiftEpkUGZn6g2PnX6FuY1VrR3FmPA9YwBUp",
  "key35": "2o6mMWArX1WWAr4Nzc2djbQgJ3aHckqvbLzdgBbvwCawXSfBo8XwPRHY4wAAPZriHps7E6TKwaypBnbCBm19eZk5",
  "key36": "5sqaZR9UZRnAyotqMzB7cNvJ428VGAs3ZVUU6MSNLvYVNDND1oX72ys53FPNBYPoZ24CnFFAPm677WM9hsqbgNfy",
  "key37": "5KVHuL5zgQZYcPGVSW6G6HcdCFAmAntvDEuq9avNAwpP6h6FzYSucLbYtyp5xmPotBPoCv7YqwAgCQDx6kJepn9Z",
  "key38": "5EG76oXSuhcezH1EzwRiWjaeiEBfSMithA357dbdmfR9WeAwuocUjKbdS7WuzRoNjiHTnC5qkZaX5YvRJXKhaKYR",
  "key39": "57ApwbbiZK9uiQSQ2Tg6Mkp1MFJ4enirBKL2nzBdbAaKK9g1QfB78Y2gtwBQYvtAvHaG4KQ6DeMcLdNvWzdkdFa3",
  "key40": "5H6WeVAgSDv8JeSPHxxYDc2kANT3zgihfT9gv1osaZFYhXXaVrdgXutXpRUnU8CptAkFzJE582uKSEJQSoTnbzuJ",
  "key41": "daJS391vHzX9GBmSQeFk9uF5NR2Z8rhocn35ySef4Lg3H7pdD7jLwTS1ZwyPK2zzLan5gjZAiuNzFNZLz3hXW6Q",
  "key42": "2hdBE2MLzWxzjQx4gfwTLqH1v2PJYAFscBBYjR5M6Lke5DjaFdvfHXrXAqSFbHxYBfUnFym8gnhYmMtMstCHvWpz",
  "key43": "3u2a5nLzKAKtk1Gczd96CMNBDWaZoaZzx8JDpK3N8Qjcu3MQAH22eqrEBqutyUqygb1WjEdkjZAp92cQspXek1Ht",
  "key44": "cuWiMSCzgeC9U6BCKn4CUUBvT1DPfR2yofiiRjtRQrAziE4WQJ4v5SnAVEYTdt5Qx5nGybwqFHvggiHn9EeT5q7"
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
