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
    "4HKdWuNBxssqoDjWbt1vFNgQAs1eHSeihX9QwYQ9n41MZuCDSj1Tr1j59nu1LeGLe9TsLm9eVxY2xAkAGreTxeu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2usqQJLyoX49LbpUJNFR6tapRmWNkHfnPwrBdpbGK4o4CD7M3yEGVLWFZ2YFZ7nGkdsR7HfwFqbKKWn5sE7LNWWj",
  "key1": "4V9BUEEUsLMqYjYR5hCQ3tCTGgkhESpV1ukUGVGPNxccoPvrv8wbLNZht3x14UmGh5TXyeYqVWoXjVvHa2JC62ex",
  "key2": "27wUzpZdasyPZ8bpXPpKRfrtHHWZeddQhvCXGaYBRZC5tHH3QwbpdupcChbJkmZfggp42nA5EAs1AHAKqizezc6W",
  "key3": "3hqP2x41cFbKncDaC1cEFffBgTNTpDLdD4xQpvq1aEnxUo5GEeev9egZADCixnXZ8U3gs7noBnDoerP8QeuytcaW",
  "key4": "4UJKChcKz2a2YxaUttHhxa5fWaUyG94s5itggxyLdfXsoRCsewyVyjrTZx1y9etiYT9wA4JidkgubRtHAmVqu4NV",
  "key5": "3PNWPpuLcdJ4sx4Pv5BFsv3PEqwNqnYnFDXjxExzffSjzNw2kXK5FvNfk6WnRutm2Xz9Hgn6qCdeFdEep86spLrA",
  "key6": "5qrdi4KfQMDSSvLBB3WspSceh2MjdaqFgVWRfUDXt2b7dxyBbFrLLe4dhBXTRJouq5EYiq9quA1KEbxsJo7qnA9G",
  "key7": "L4KYBAb8tonESvHgW6mkC9AaSdEu4kpTbcvWW2N416gyRzVyC4sCxFNW16mKf3hGr99iHVC8VfesyP7xLNeWaLe",
  "key8": "4bPHBLfwsiMduh3a8tDB128PgLsMFUiTydKPVMEGN7T9AmeFpAaDdatkTuLhtcw58gRQYJ7oxzgry7arPsYPrWYo",
  "key9": "bc2CLqsrNDpkXsr3BP7X6tN7KJjUYQpQiXoY4yhgQYyYJC3WQQEGqScveKXMbARVRMSj2odpeWX6mXjqAT5iUD9",
  "key10": "5VBqe54oXa2Jgtwh8gkX5MAX6voiFaGvQE64cQULxPyPqCxyQHrdt7TmwNsj3FLyHCJQ4LcS4tQs1h1fU4dLCdUs",
  "key11": "2hqEYhrUtF5EfM9j1szLESLq8uxijEFTkDaHNL6iRG8LtpciJLKAVxtpJLknWVUwFmPRtdxzmWXEWmgKjDZXrjKT",
  "key12": "1jRUYDF3Kzq1gfr75crLgMfp6rtVzL5n2xrxR1BSxqccfpDSjBYXdj5GXRt4wEok7YHKVhWgrsqRCtdXwR3iTPD",
  "key13": "3Vwp4CVVGDgd5EEzafiBVAmGDxjPXipddPcesBgpqoVFtVDi9XS5WPtmpvqXViyN2NCNMUc21CmwJeJBNLGxsBKj",
  "key14": "ZE6343akNi6rmoTtZWdAnPECZU3CP1p6TgXvodaoNYUbeXvxZpoBgoujvrd4tG9AuCxG2AXmFTYFhU1wnk6i2NZ",
  "key15": "3SpFB1HH4aaCAg5YjsJpGcdvuAQg2UR9WKkdafZW4Hug5zXZoVMRrotBkgUwz3vb4Jb2MMSXUsJRzgbgXejizWWE",
  "key16": "snMBut664FcozG57t9ZmG2yxornuhiRudpNT4jEiEBTGphkrPZQKniHRB44E9a9J7Jox21aS54HYkz2Q41QaWfG",
  "key17": "MgUPxgWeZs9d4UG7z21dxY3Fgvh62728iQ2gaMi8vbA991sgrV9R9xMPUJdaKPzCMA45NSVE4mrXgqy75xzTKZt",
  "key18": "VBGF4iE4nTZW61LRKLtXag2aChavcGCS24Z8QeZgVWmJkEj83yHPBeokECoBvEg8pS2TLjuMqM6yuLkb8rxXu36",
  "key19": "2wNk1VGSPpJyWG5xSEd3KSM2bWND7ai4KNkimWNsWTz8d8aVZf96xCQdPuw2WyyNTQEySw9WAQqc2kZmByEtDfSk",
  "key20": "4yH9M5Voz7W1eQz7YfdMToNbAut35yX7bkzeWe8rr6sxiuTYAZehMe6UTGuKC8WK1xWjZuazesBxLHsmMRyNAenr",
  "key21": "5ejMqL74PWMBt7LZ63VBcEpK25XAsuR85tUzmJavbkJZG1h1FdQWHAQ9KA8iC8zPAB4WT64SZ3eXzekmEqjxScGn",
  "key22": "i2qQC9neMbGK64ngF3A26Dbvcd5SxDcVYFVLRW6WAiqiA2SkivMQhF8FxfPQa62gDDJCcgyj2TkdHyEYR3hWuvb",
  "key23": "5XA9iV4417pAtT35hR32JDsUF6oQQrQ4Ze1x36HB2HAURnfvHBqnVHaPe7SPFQu7Qfj2MPo1kg7vS6xP6psdjfPo",
  "key24": "5YXasz2fe8Ew9kuRWsorEYnK43NZtfXH2FRvoGFhvg4dpns8xn7DbzZRqVdxnqi1kLgxTYLLVgsp1t59TBL3gfEA",
  "key25": "jzrqudCaF9HNYcnav7FeF4o9qEkTHLqRFAXvBMFoVxr9f2RdBBbKsfLNXQtVgTiaWD3v4MDXPq1Gmk9EpZyNhMu",
  "key26": "4ruyBNToCTfNcnbY5q2aoxVYJjQ78aEWGCt9jh26N7egN2viT1WuQPRDrJ8xQ8W8d5qNpSJF6EnuCLW6XfGGV5iP",
  "key27": "YtptGmkmBntmWj4QSyrW7qbwLBabCf2R5muTz6o5DAj9fE1fTm7AbLVrmhjXJ2fQXUxFNBfdoVcg44WdvTuTrwR",
  "key28": "36UjXsmP2eFPwbSDois998eEHHofg9HW2VKhmmBAzXnf1wir3zbLgQYvSdHdE6eqVpAT3RDTBFwGyqxc6DY4XTzX",
  "key29": "4vPvktftekSrQc4m4M53RnUY243t4zrg9EEiLepsrC6MPCUieyEAahZLQ2CA5vFpfSBKRhsXVFmUkNG9DWoKQYC4",
  "key30": "4atVGzN9DZXz53otgJTD6hxVQasH7tQ5dtqXcMa4JY69hBPKwYAPdPgC7p3ryt5QRzJ6fFrgJjxNN1hBuWdoXmB3",
  "key31": "3Zuc5w4UV55j4HHuLsjqToWZX3PMz63dK72CRPRAUhMcHBjKpSQkWwypSPsSNTDsm1EkntWUA8AfG5qjmjcxjEZq",
  "key32": "3N1nMngBauyWsWhE7ZFiZgrtim8zCyntG3kdnX7xS3WUth23sZuEn5FzQphv3Ds99D2NYLUnNcKGS6o9rUcJTm11",
  "key33": "3EA6FSQqJfnu8N1iDxLccJUHijcepcveuN8861tV5VMC7uWR8FSvtV88PqiAYUBP51APCUXL9ctNLQaBdzUM4EKK",
  "key34": "64FHi1ohJUnTV49marRgXdYStzuwkdg6QzGawuTFmzAyMZNKL7chy4PdEMAVmmiGbthHcM5bmcVJ7Vwi4Vcm9hUp",
  "key35": "2NTESH2caAKFaR1xSesKGrXEq1s8qi2W7QA23Q9CnfXTsmg4wo81P9KaMjcMz1hRHSEB1kgWQFd7Gms2ZpP5Q6o",
  "key36": "4SJ7NLC9L72eJukLaTWiCUrgMaJDqzmx7qNXMagzFeavnEMzGc7u9Y8tbUS5aoVzvUBSESQDXZFL6wmgsfzXofe5",
  "key37": "5gNktAG6f6FADtRvwjjf9rDeGQKSnZkFUh2TzN1UNToqcDPzbLtr4rGJ7pSJTpYUEubiUexY9FLpsNSYX9bShian",
  "key38": "35nyg5GQEY7BqUTKoJxUDjFayAKaAMtZqYu1MCQymwKwycycFwNBgZm8H9ojYvygPY7fuLAZg39q5C6CMSneAJFk",
  "key39": "4nVHMb8eomZ3YWWTHrnvN882dQ42QE2zBCHRpoansAm3PLPSXfKeQfJPcbEM8zXxgFH3PC7hejVK6wsCxVD6npxj",
  "key40": "4gStfJ9ZUVvbBTnjyR5dgcSreXfUXk4uGCCUnsvUjZMwcxuqhvhknk2UWsMgEPyGmBY889sxgosXU54ekdMCoK52"
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
