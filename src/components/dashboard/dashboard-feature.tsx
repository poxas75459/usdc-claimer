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
    "62vYbuPbMX946Y7pCop48iW8KAdGgJFF44XhKLyLyFshN33EKR4m7gjkiYqTHwZi6wfRGvZKKEU3TSVQvu3kV3R5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NgfvsbTVrqQsjrmdoqbPq3ueVMwD8bLB3ifTAF51tFiaFV6BdtXkpj3N1wGvXxaHNsF2tExkFGGTnX3VAZaYE7U",
  "key1": "43MDSaTFudDexj7zyJsLTWL2RqHbSH8D4nZXR5KgD1aSvRKjnBt8cfzfeLrWiyZdttQReV9vPQRuGJJtBdLkFVcj",
  "key2": "5ixjQHRfCkUs4YEDCj5MnuCphdxnpmj9rocENVRtGaMe569qzCYTbuTu814nEBQGa7cLAzMMkQkU6sQjGjkvggLy",
  "key3": "2qFpWU6Rz42GWtJSB5dzi7bFrtzuAuYYFY8gxvUihqgqXHAaefHeX5xuhZcjyyjVWCU6Jm6RZYrpUT5boykMqvaW",
  "key4": "41KeSV7AxGqJaXXGdKCBVqVcDmoUdzyE9uu2DPoDuByptstcRz8zSbxE8YKUnbncH7qG9QEXWbzpcP36eqWZHhRa",
  "key5": "5gFh8SFnGy2Cdyw7r17wQUnqukYJJUD3kt7Lymes69bKxytAXh2JSxPouJHqF8UDJmz8L2gDqELvW2zyA9WNqN4U",
  "key6": "2vP9NF19LvWTb5tJpMehar8UMaj1ybEkMKA9V2x7Hdy9rGzfTM74ZHZKYX2tHob1mCu87fGZQXEBAiJRRWDhqoVd",
  "key7": "2wCQC6dxeZTNrDF6stEjLTbiyMzgRimwa5jLZwk2MpZEp68wMP1G3H9Man5fDEHtGMe3QvJNsLYSb9fbNJXs6cre",
  "key8": "5LsvJsPCKzB4Nqw6d8iDEUwbt8sDocZuDpmGwWKhu6WN8AsMYiVgpjBn42a3gLC9UeAYUtZ8dCMUcg3QAUqVe4cr",
  "key9": "3HzdmEfMg2uzjyeNe44tZkFpdDauxKCTksfvFXwQq4h2y6Ko2Q5q62rkPJHaxvTqimrEfY68if4avUj5FugNdeym",
  "key10": "2umDAQnDd3Ugmgg15ezMCcQnaZz8qLQ1zWNKCMT79RVrDNPd2n3j6LfcfvDNDmW7BtTk35Yctkx74hsZDyxygyqT",
  "key11": "vJPgW3XUrNpnuMiYdQD8fij6v2kvwbTcEdJTsNRL32ArZ2NDUPSdJVEYvrKW2GktaXxXdWBxR1ViW3SvMF96y8W",
  "key12": "3GQqbSHym7rskMrq9KSgXLnrK1WF91GQKmowYPdEFmhebCc27McstSjYrtsgcmk87GEfAX7sX989qpDtvWWdKc8V",
  "key13": "2HayfEJdX8DydeAt8yFaetz8BFu2hAppeWNZbbyokej7zuy748d8BT9ct1BWbo2vB7uAGfGfG3ZsTD9yQ1d8789Y",
  "key14": "2m5qPZVP4hXUfDjJPkB5WmEpjK2bDxxZbgNVCoGpYBPwuT1tZcLC5jyjoip4NxbewfZDxgewYSSqs6LirJ9xcVeJ",
  "key15": "3skFnMFrPEQZnyuej4kcF7BrADcJUPqXvFRSv5KkQX96YKq4KG1HbgeVgPZzJsz6CSMTxoJ6r5jSPzALWXHmer3y",
  "key16": "398wWKdSXQRCmuT2pjxBhxWGCi2MggJTjLyq1R9WfpAa8oaMtQthQrHCNHJ1DnDuBPZ3iEs9frJoJ1mqpA2xabgY",
  "key17": "4DJtPxEmugvbssDFtA4ht65mRTSeej9gmwQHLCXPvZU219gpc9ZA3vCTF6JqRDMv8gyvN4iWiSdANrRaGYf6yDQM",
  "key18": "yB7HCtLFcsrwaefCpETWbnTruKkaZw3SPJCsAWQ8dX6Fz6MGkH3q8C66u2J5ZdMUST58tnpimB9ojFyvSaSjhS8",
  "key19": "5QmQ8z14webVQKtYXcua5sHzqzKJLMKcnXMW7Uyyy3Z4rFctbLCG1N2SuoM2dS9sF2ai3upSd9qKnSAcZE7q6YJx",
  "key20": "21MmYGU7TPPNqxFeBJH3ETMufixX2HaHCUvS33rrQL42u41weYvjeDEryRB64Y6Pg8BC29t8BSzUZXoBvoNyo73t",
  "key21": "ENavyivnjeqoc26xdCuvZhz9UL5PtLUtL2xAbkhTCLiNmaXLA5RQsVmsZpfHwhL3i4iZ8iAfLMNdf9QxZn9VGgS",
  "key22": "H6zUXPGhzpjMRLPYyoA9tR17G1VUsVHcmo6yA9bpiMUirjpbc7axhCRxEaKustQLspnR9tFvHgopZhJYtwpfXce",
  "key23": "2JjHCxE6yMxJ2d9hUmJaKvUWLphZJ4z9MPgRamimA8gdfXGTxAAoP1FFpK3kxegeVCxaypQ15u8FHCy3HaUexEfQ",
  "key24": "36thrETWJT6yK5UtDWgbAQ8FdzoiEfmW4a6hQK3wp1T6RRATNYCPPa3Lo51MRpAVm71R1s6mbEEjEDv6i7pYZNdd",
  "key25": "2VaswGvMBp8p3Zot3NY2FTMVzxpr421g8dMQnta49xZX7mtr7W6YDcKDSCARqHogp1W3V3v55Liv9zGmdLVi1YkF",
  "key26": "55PsjvAJVijHmhpCWuecNoJjjdQH5ZhRHGszK8vUaxsK5SweA8oHnHv9RgvmqzPUPjmkEMcvSjkWnzNXsk2NQPhx",
  "key27": "5pCYveB2YPNDGiK5A8N2Fv51nuwJuRhHzdYAiA1ZMn2fLrVhyFL7c8He8KiAMTCGmM3227ZQKFCXCnzEH5tfNKex",
  "key28": "5DzP6mGbnxZP2eqGcGrh2nYgxxSbmkWujYGwdY6ZSQDbcYz4wsKwahCUNiw3kLDPQvVvaDxfYBhioLrfGfjkiLPL",
  "key29": "3KXMcupvXQtMK8CoFWBz9DDT4mQXaVFjKhXkPUFXz8cpu8sFmfAwpB6awzWiiK7rvBWAbojV49qrL2SoPDY8ZBvK",
  "key30": "3ZQMdA9Xp6vZ4gr7eE1akDWzNnTjXGpRksC8QGWMtYDmhXrCWP6sCE1JR4EjHQaN9SCunwsDuTwUSwy4pKntx5Kv",
  "key31": "5KrmG5igFG8HUyuS2dkpW9vXWRe8CkGM5ft7ZD7gCHn9vonHDu48PvegEX8kTstPiFpUDZHDciLukTiJ3L53Jc5",
  "key32": "5F2NCVQfLdWwcMZKQXaLGb6F36ps3VUwR5yDSm1co6VjgQ4FWWFAGuoo8UJuKkzo16Zno7uW1ZXiBFPfmLRSaxiC",
  "key33": "3axLTNkaezEqvaDz2rTBggUpdo5cpp7ztKGZCX56TAfb8mXhD38Z4ZbmPVSUVK8foVTzU3CmSH11aoia5pmkm49j",
  "key34": "4vsV7jMrqwQervRtyq1BZZP7BgurZah4U4jVtPYFLThbRe9tXvjysKwyWuyMWDi8MWbPpjKSurEdL3QdjxPbfMRb",
  "key35": "3b1xtUa3933UVpVcNPMvAjYhr28a1d5zG6v8DwRXr7HnMQpYYFWvYmKwzr4tAJLpre9yguYzQ4ynXmXvZefzFmdk",
  "key36": "PKpDFUD9v7uKcXN5mKaJf67zPWxWJRkg7SW684YPv8gqbNkmHakhq9pZGAWtkkB8WpVtae3A8FxgChE6vVQ3xhG",
  "key37": "3ENxTFjYq6Xy7BajxoQ8CVT3xZwXF7qfP4K5wEYHi4hwYjfcd1VtnC2Ef2ra7F2g9cXCHPKqP8iNvAuCW3aRQL55",
  "key38": "4FRQ8RZszBYPFSKfomoKWBho6bmFoBasmcv53nkyWzYuhe3MK6WjyLEEUP29FNEEgUzY9CMd4WFZc9sj9hqBJ1L4",
  "key39": "4cJ6XKrJaLdjBojBNg4VsyEeohKzQUU64gBa79b7GVgt8s5abuxCwLBKAUDznYctzz2Vru7EL7X4grEuoYb8qbS",
  "key40": "41To5QYAfxX2e9W7q1qrrMeGRvC6pR7E4kPkmWzT73yPd6wV7VP2LtwWPHCERn6mPZ63X6c1pBAMDtFNfjXq1Bw5",
  "key41": "ztJjV6gfF1wq9m2npJSnzijBzhXLFfKxjgRhP6uiu8Sh7AQXXdKdev5NSbAYkifacv5Ai3wWDktBwdCoAWMgy8e",
  "key42": "2Vfvo5K4T9StgbDqvEu82tt2D7LxtWcxHewMv5bJMv4usm3pyQBnHjtVdqU7vpTYfx5ReMBxt6n7avuBPuqGN7zL",
  "key43": "2FjAKoZqYus5ho8NsuGtQsE2Sv7kiRp5hJHXYy1mTBTfANtuWbQTKDGWoAQAJPNjaidNvxS8QiKzQm28WHrvqWv3",
  "key44": "2WZRA2qBE6H93KZNySetNie5oW6Zi2Lpa1gDKrNc69JdamPpUVg164J6zDEhhYsA7uEcUEvuAfTidN6uk1g1wdBS",
  "key45": "doKmwxTmVVy5DQ5tuiEYrEXRToiLb3rSHp55z6c1Q9hupEzbKBGSyv65CuSKRprzKRocn3kLqNz4f1stqL6oHAP",
  "key46": "28RwBRvtZeCN4sfo6FSq7k1wQXEv2FKAYZysyrT5RY7tvn37egV7RtuBJasiu54mnMwdqwT6xXDqveENyhDRAL2i",
  "key47": "48ydDajrLmtZ1y6L9KYZuov4wEAyJGgt9Ejjw47SunUZcSZsCkDQEeemzM4Mn4GHeYHSbg25RCPFtobFkMJzStRz"
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
