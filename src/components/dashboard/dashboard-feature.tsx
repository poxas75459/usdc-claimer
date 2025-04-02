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
    "rmpdpjtAW6P8a4AzQAKDKU9dPvkHs9HNiLCECQvgcDajn7Dkz6umeDu96YUffnwHwaPYu1JVzAZC1878RNkHmof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y5qRjmcCKLt6MVStQ4LG7ehq4XR1fJZnmtpDCG7M4AXT6Ko7jRQmfD9qDUSiT9qLxDCMBBG18WybchASUsjX7s4",
  "key1": "3W7BikmhaUnu5UHaYq8cZTrrDvvyEmVJuWZpjsiUez2X5DwmZdbov37icMPmFKjEq4Re1D6WgN1tn1t6xHnksPVS",
  "key2": "61pbwFkFi1FThGjcMcqtHGSeajaxfKc26DYj6QSFNHS5Gd6iBjCbQ7SrZwegcxcSpJF4ZQnd9cBevoBAXKKUASLW",
  "key3": "5Faav3bV1o5bT4FKY17Xfh7gLJBefuT136T5QnijUhe7gMMP4FkS8Qj9zjfgNqcUD5RnJeQYPmYnXjxwH5KG5GKj",
  "key4": "LEXYZMLkyWk3WBdpsH2XUQgeTdPke7rfGVVzu9Rgcyotnt5bRsE6GMHH7XcBmEVRJpUkPhYurdSeQfKkD8TuCgz",
  "key5": "48m7JEeLNgp8sFN9SsPpjpLN9YuerodAQjczUyHGHNgLGuKVu93NCpUWRsnwk3Zn1KmsexpQrzqTZdnAypB28UpL",
  "key6": "5XDDrbNQqFoGXW5ApzA7KQZkXKgvGN2uWTnxt3Gekusnf4iGaxDNuk9iYa34FLteb4hPWG7MzFu2ghFuW4VKnSta",
  "key7": "4FjjjVMtF94qoykfJNW8zzBKuuNMCGPiornmVgnU53aYpLwcrYjL5wqLTo5UK3crMSHzkwVXGXfU2ZNXYJA9PrNC",
  "key8": "5HsTW9gMNfanmSpqe4TBRxtzRjBFpqNrREmTPjmPkMwYwbP3biBMBMx4RMPecce1fQ77sg1fCpzFC3mnKDCf3TjF",
  "key9": "xCaajkW59VzPsqZQRb5cKtR3Z7spNE9CKU2nMteyNfGoASbS2Ckuy2aFtgUSnj5h7aiKURsicTwZGGEynzM3zri",
  "key10": "2iwUMJJfD8U23uj7RqXerb4kt339Nxrzg5sjdMc1VxHGK6yFoKyDhjXPMdGJ2T71NbQiX36Ncw8Vuoe9EdZuAbCa",
  "key11": "3b3DFyK6tDQy4kfMmcVeimpZuqo4RVwqipgxaZnMYAuyAj38AzFiC11uRXfCGqEDLnQhmzxW3anjBk3Bgoidgn7f",
  "key12": "7tpmL3VCuZGhUwzTJmjeSnmypRDuM8AW6sv6txs1bTzcRovQq4fM4hwfGvk8bmy7JiceWaQ6wfRPtGSnRYoUb86",
  "key13": "TGTiLa1QGaEHtePwHK6SoM3RQepwRPALAKDe5EMgmZ5MC9X123BvHSwZwZDXHG3JKo1fdvLrHJCdhYzD3TDsAiP",
  "key14": "dwg2dzoNh1qcRvD1YDXWMrzVBX22AK2xSqSwVgDtpYgEtWBRt7N6ma5T4gGXxSKmQKapWf9uehAyzKxvD2mkRnj",
  "key15": "4JkGz8udDC9d7ZXBoDNmc2zqkCkw7ubENDf3hCVPbpQQPDHiK7pDX8wEwMqEp9ecPrVUT5StEqGnjLxJAyXQ9ePh",
  "key16": "5VCNygnW1VY82k8tKpyfrbj3UzyAaQd3GgCR2chJZWKxd82rmv6guQzBbVRjsEdvfym6qAAYWmyaA13icah67AtA",
  "key17": "2NDQea1mwkpwu14p4KqQu4y78cHTf9RFjuUiYq4uTgmZjnFsbEeuP9M7i6g8m6R6mzBp9F3j6PLkaMaRMxCb9ty",
  "key18": "4pXi199srqne55qq3XBT1j9oUFEH7s12DFW3i1gG3ixWV8UV2t4aRdDCrFu225zC78xvt4DjBa3yLVrAFc9N7hWV",
  "key19": "FHf4zG1N4WBh1AQf8JrwEEZWCgkP6MHQKf8uz3NJDdT7PfEEvp177LA7Qhe5vWRbvTtmk6PZmcMd7b6seWzKQub",
  "key20": "4jTHnLAzUMo9ZvFiAvSi3Y4iYPbwwWYYXQD775GmLQFhXRFVPEHTT2YtYYrqcQdDEpFvwGHtnkUKkm5Qm8jdJTLh",
  "key21": "pLpNqf2z3V87zDu1DhneUbvCXR8PyDcXqHoRFX846S5qB4SRj7wXeoqLXP6MFT42mNtwsRawThQp5vhiHzHLVLF",
  "key22": "22w72NMQrb56XJGMbLrXG9opJPWQWFvextQLwhLf7gjwgL2ESCoaTtzzwNwEHH98vAwwYjWsj7JEbtWzTFWapH7N",
  "key23": "3xVeDpDgpkELpWFsMNRw6T2TtjQcQchwerTczksJWQ9gNTx2o8gMoCixeMY5RaMSZSYE6Y4Hy91cbjtuTGxC5RnQ",
  "key24": "A7bNQAQ9zd1DksPWzpFoLCU6bf96cqKLP492aTAuL4io5KY7GYtm3oRBeWNVz2jYgNLRtDsxKi73yrtED1grQmR",
  "key25": "5YdNX1khWdRhxg33g9KnHC2GiyPAXrWwMTyKL1LwYjeL9u1mRhWLPZNZthziirLTStSKyAYAbkoTo3Csy2BsiTtU",
  "key26": "63GRvRVH5BuBzWuYKTQMG3VDZP8M6zYuWG81Vs44FttZzd4Y2aqMyPkyLxJ6fY4UARYXM4ZHHSF65yndao9fbzR8",
  "key27": "4f5aJpAT9upkG6VZaKTGVse84fDqBToVWfTHGMRSFzYGXZpz8UqkzLWGuyH4SDPfzhuymn4BnrAcZmqNqyjEKY9F",
  "key28": "5g9owyVptbUXt3TCPae5g9fwb3gHfs9SApBg9H7QjQs5TC9djYwWiAqgp4xMgxjALAp44G4PdDkagjwy7qA5Ea9Q",
  "key29": "4diNzaTfVeuD2XxYpoUcv4DwZU2iSYHgF8rvGoiwskJCB1WMSaVRwfXtQMrSCDtN8wYMUhgLwgbQRJmYWwvnEuzs",
  "key30": "5hR7vmcA5KKpoSbMaKdrLsHhSLPLjhKwWkfB6XxR1WzZiymoRwD64Gf1RTVDEWtfLgdaG3ZJZD8EUGkK773dSp3n",
  "key31": "2c3riTHQzbwJw8rJmknFK9Tyg3K6kgLYyYYvP4JuFetjfSYVJZQmCgtK9DxyoYqCHMxYC48SbQLxSnaVHjrgGCuD",
  "key32": "RvPRm3m4Vf5HmW3CzXFYjCucamqu1c6CWGfXcW9MPddnsGFnPySHNsdnMfcMUjWMyKutfqqWHmFT31tMDcWxRs6",
  "key33": "5DEtd4VLPGfzsgT5P9KfQ2CVxR716gA8UgXXc5UMg6QrMsoSGg5v4dxztLy61p4VMnpGuKpQNRbt9GXry6smUR1i",
  "key34": "25knorQQf2YxigAkma9Dqu5Btt1vGpH59LwgLEmmkjhn3Z3adnagXkzBdbBdqRppBM2ZKeAvbVfUxh5WbaPCnzsm",
  "key35": "5wg36XLhAHvRqX2UDjw28DkquLKpaAMK6j7QQZGQrk8gR9sDFYTMF9VmrvQw17xAMWYSD3yYsthvM8QtTbhiqiPQ",
  "key36": "44rmDF1sjeyCHcfXvLQDHmxi1D4hXhG2Ro2EhLV1D1w5XqqyuWeHbpNBspg6oWPK68tRKZmcku2CX4wsAKsmuUot",
  "key37": "3oYcgweUcZgGipjmDmNJK7sJE9RmHMhnfCe92sziLAeTHzHY5i59CweB6W5kZgvMw9LuBJcYDW9guM4Pce7f4rRw",
  "key38": "5sHQsacjycTJYv9fR6eppVUgVLa1QR1Mpse2KJhj1rEJKNvguFK9oVmR3YCACyvTw3aCDCd9DP2vg6hP1w7bNGgN",
  "key39": "53RhyjpiyayLVoRvtZwyc7sMt4zNXVZJQC1Fv9Zqhobv4dWRKK26iZ3EzngdRuatJ1vzAk95ke5PQrHN2LAY1JKM",
  "key40": "2YcheinmxKcUTyUZm8TsjU7gou3qLyWAmK7fmC1Qh8XasBhdrdjhoTZypYwXSRU1kH2dManPzFpJEjMZwp69FYeH"
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
