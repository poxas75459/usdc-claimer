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
    "2LmD2zGY7HFYNxiL9gxLPZHD4nSmTuLgHBFmYRZSWqzjT96HV2fDh44tBH9JJqS6GzcTDeYsZ1idvvAJa296BE5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C44feYqutBF13kJPN5nneXUSrfLTpPP5JCDymzeEMyrcjCM3TtFZZhDf3wATvhtNwXTGKCC8wKMYRe8refdNScc",
  "key1": "5V7HzgtoGXy8NKnqxzea2mK9s7kSnH5c5HrU3F3X2z3YvmEuSKfaNgwUEwC1XK1663cy8uS28XtuNXyEHKYjQ4xG",
  "key2": "3BMncPuJ2Zy2LYd8b6WyAwo6BN7Uw9fZRWAGkbJAArUgUzcPaRLSzT5xcS14hXseEMP3RZcCiQp1zX1RWhX2qfcb",
  "key3": "ZmwQ3CsPsMjb1aEQjr77tGamTE7oL3mn7XEq4t31iGtBbngZhMB4guoRvvn43i6owQPqSL4JG49wfgzGA261h2c",
  "key4": "5vWrDv3FchSKBAkYkvSwctDfzn1ryXypBdiKod2vbvAP1mB6fzvmyXmY7CSyjNumLCsNAnHmBdqUsAzMWu9cWjyJ",
  "key5": "3gFQwGTFWyqv5BJUnNqMwu9VcFfFE9yADd55MHHprZgLPeaEoCy6mRwmUqH7bFJdXEfx9zVQ2CZJfyHu4JfZ1PjM",
  "key6": "84Yon45jrCYfYr1zt9Q3EgpakCS6BhWcBYVVxuQfvsK8cAKYtZfK6xJpvc4CwijMr7rtJLneg2vHnT1cFmSZVyN",
  "key7": "4WMwwq9ZDGMi8aWubU1JYPj5W92n5tLkzNaY8TMyXfxBBuEuutkBwaZPiqhnizzb5G8xEV5bvjHusZkqnvSop91s",
  "key8": "5b15rm17Q5jVK7ERbx2H4edtw7oF43edGgu6kjyycsQWCcAQbJwRY2N7k8Lsf49KVgyEfBJMHQdSuwFcWLHevzPq",
  "key9": "4KRhSD6EVQYdDFiRkg3hQp3BmbEpdMG8TKpAMxtEf43Y3oBju4hs3t4prJJNJsJJhXsYUvfQ4CiG8rY3NNDkQf7R",
  "key10": "4Ah1aZzxkES56HycJr9j4HjfqLzycjdVQ29EQXrwvPwuq4zZo4bwYcwuVRFacoEwtr5sQLcua2DTn2uiAE7yGHvt",
  "key11": "d8STQp7b5W7c4MTiZ9GgDpeAgkpo29bVTeyeokbSSn2YT1RVy41qFXZNoMxLTbgzdGiqocqopCyz4HV6heGmTnY",
  "key12": "3HCGJodPicEHohAh9i41e2b3LW9CJLh5JqSP2ZprBPZt2wFHd6PuRFpf2nnHAzhogygknmhYXDLPhVxcJQe5wKcC",
  "key13": "338C6uN7uYdjwbTTutruncA3SaGMzjkEGq1tHwHQATxtMpCczZaHRsBANHGmMyPGUtiPG2JMbPkjDg2mxajVjQgh",
  "key14": "4tPaDBFiokA2PpLqPrpZ9vnGDouXWCFu2GtF4nV7QJp64Svv7HiKyjNbRE4bzJYgGnjaMt8DtrNbQmpvDmnDTaYa",
  "key15": "iSPJcfnwNgBuKADzdF66BFXiscCkaPGaU3CubrrhmrByuyuvWEFM5euuge5g7HKojJkFHFsztHgWvMuceLA7yHP",
  "key16": "5KGjcmr3W76GXcKh1sSbhbKUe8f9SGHbcVkQPW1johbEv6e3dSgD2QK5PM65yAMczCWnDmhYYGLV1djKRjLGb9dG",
  "key17": "4c1sQPd9CNTLbSMWsVFrHqVLUsZgynwD1K9i3yRezQeGULht6xKApKRbMZPJMU4A42986R4FCaBYQJEkepMTHtZy",
  "key18": "XFKAwcj4jL4J2PYKtSCdYK8VWX73Rfr2uWTTK1efsGJfpCkbjJQWeKeZgmXfPk7WRFAziVGgSSRQ87E5gRn7TwV",
  "key19": "4NdpyxrX2xsj2UjMufe7ij3FFVMcLj4AYQ91XUSy5r7ps9LkiFKpmS7e2twMtofrd8Byfeau1TR5C5BwCBQzqaHb",
  "key20": "3JwMgb77UjJFwfPkHBVx11XyN239fpR8sYmADPhbVKMaAcyqsU9nVuqwS2Ss9eDBNP3RQd76K7LS6RVAAvskyrTS",
  "key21": "53jsJuDeaFR5LnyarFLqkHEG8aEtRRyvHaHL9nHy67poxUhSWK2rj1BqCxxgc7jwRLr4iEA5ZpdeCKbmQDGWN4TK",
  "key22": "51Rht1wdy2198YJh34Tb2xkFLJ7xCekHim1xwg9srEEGR29ndgqj9XPJqtXnbSJ2TRb8J2hTaD9r7KSeicECZBY4",
  "key23": "5UFh51JugvaRZrohQX5v7u9pxrNhBGESEFtmMbb9SzJ4p4eqNLFSHvasYMkFFiuiH6uvimZUUgGUdFfSrGE7Kmeb",
  "key24": "4VnhKmRYdBkZZtu8Ws8U9Rewq1TTrPnGvduYpqvxS6bfHijKHH3aMf99GuQVPfAdaC8eJttshAeZjL2rRqg32qTW",
  "key25": "3TDuEA1B4ywu2GLNScP2eDsX7ETr7TdRF2noeQwWyHhiF2S8zYZqNSBNEmYcoKSsCp36wLPLwy45qMEK8mYyeRJT",
  "key26": "5LVLnGgr7w1bDzrk1wZuTgQQfbTq6KPSPHvd7FphGw3JxY8wthNbnfLjGmz6TXbHCXgkzY4YnYxp4Ht2AXTRqSaF",
  "key27": "2JZrsumTia6LhWt1ZTSEHUSRrSBtQUesVLyByrFEHodbV1YyGwmA2H9wRg44yuSymsHM6iNHZAZkWU4HUGinRx3s",
  "key28": "DLz2KkKhjLjCrKUwzB8DMKsE45f3X9o1MZxY39UgoQ4uW1YN3NoBUJnw3dXiTGvtbPRiLHVUCUbsVvKKoZsJpWT",
  "key29": "296UaHNMEmtUqVBoY2tDx1VvXJ6nbXmbs9tdTtb8zV4LwR6k8uvz8NWqEXFAFYQeAtTBY7cvqbbGiMRWExbjbzPR",
  "key30": "3ZYf7RxbWMEnPvYLVCvHjV37eYSt4syiu1UQY9fmFF25shCuXvpfzG6827vzq3opfrStysGeU6k7HDvktCnJ8gch",
  "key31": "4wPGpJ7jBNRpNtdQjRJXN8mKejfXqDx7dqPMZHecL8iam5SqUJnam2dckkChyBCcfCiF5nZ6DN3nLeefQttczBGz",
  "key32": "42gAaKAVUqv5REHvnwZxkb5iR4GDLRoTbx64h7yJMx5kM6rxU3ZDKGy2tXubzHKPT3QFUW8kpxXkr33SgZuJLrA8",
  "key33": "Lfb1PawDePbJhBXmug7KpXxHvWG8PpXjUZ4jrtHnckRnQpkeSYKCYWf8ZPnqFnAGEAbtGu7n2TcUmDsj8cY9bbW",
  "key34": "2RWbZm1wHzchCRDjNCs2Ensre1fBMYqi5gxpme1kUVJ9Na31AUS6dC18mD6vuJvGEuBFmEnSNcwDY14XTufaYr53",
  "key35": "2K2C7SsvzHurRtqPwPhUhZtq1vwxjpBq3uBpFbsTWuAkaeYBGNY4vjzkSK5aExnLQpnH55hWyhwCWFmpxfcoHKVh",
  "key36": "zE5bacrUWxfhFbTuJswZxMCbrJ4tKXDLstouc9xpHsYXYuTzrfFdyUZkgCpNYGgdpLtCrGt2T6xk1JNianWkPR4",
  "key37": "4fj7TZmH3kpDg3ZCUZ4dFQYqQ9tYaxRhrazJbkVgiLzQEPfJpBWsoqV6CoNkd9KApibBdFB17QW7WUa8Eu11hzpR",
  "key38": "2Cn68SeVEBetbhScCTyDdFqiZepYZmBPvPyS8NXDefUU32gMx2NcWED8zUcHrZzkDSu2dYXugpeUzFb47s6Jy2bj",
  "key39": "2zuvzUa3rFL4rS5X57kxYxQbUYUSmeWko1RCrxZWQQ4wVtFEjHYG5tNTziJRaEvkv6CsWukpMezX8fFfw2RfsLb7",
  "key40": "3c5eUU9o2eDrtnoDKHm1gTDBqqSBC4487SpZqQ15qcZL6WyiTAbGa7iVxhVB6tcqQFwSTzT2xfuTCuCmSsGB5RSV",
  "key41": "2eWpTKkoqeouZL2QxphGMiCeaa2cJkq6mTpB4QtkZTnnb67aYhT29r353ji8TdkdKVJiMwJQkUZPaoi8osNrYffu"
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
