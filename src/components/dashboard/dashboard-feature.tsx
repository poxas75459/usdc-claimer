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
    "42Kaq9oV9stcU4hyMHuA1FkPX1g2MwnwP2njoTGKs77658EcVYXmVQeP1vm28VeFpTzHsiL8SshAGgwFYV2TWpA5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gYYkSAqgnZXqPsYu2aXb6z2Ev4RgNJdX9Wh5vwxqKx4BBUcQqeCgLoGr9nVKbmCQ4eX3JSDH9G5MExdrVhAMv87",
  "key1": "53ksz8ASwNqs9E3EqXztmPaZhPViJrFmM3UsiTijCitUkeH24Sx49XsphY4JJvkcX7wWe4y84ZRsMm8hTyP8Pfio",
  "key2": "5xJZbcMKCwXywj1PvziafKyP72mVJraBAb6eFCujHAcNzH74YvebsHtHYtK6Hv3iKWvb5K7X3Q88Xv1jN1cqGGBW",
  "key3": "3zFPuaNuWYe3nY2qH7LnXisWD1koWEEd4yRbLNmURNkB7HYkjkFc6bsYQV2RasJKwFJVZkdiwbwxbkWUt4Gb1tNQ",
  "key4": "5HWR2SXzYNLkTP59x3QT9ndZ6XZJ9tf6RKMJnUuHc34tjzzkTryDqTFRdJo6bnuUGyY2oeSuZdoDbaPZCFxJZ11X",
  "key5": "5iMsjQs7W7qjzdKiRC41VkafX6AJgTRwAeo8XWB4aBUckbMw3aLGDHK81a2ADAUgYaZmsDqgcELHGsZ8Z2BzeBFb",
  "key6": "5MnZ9X3YQfh8EpSfUZRydKAaMmsNzTvrmiRXc3cohWndFrjdFtSst8xbXdNUT6apsqTypPBjGBY6jHvJgyDDELLm",
  "key7": "MdRWfcSxFx8rHxwraqNaq9nuaqzAFioaEyFHZrfmUqh7A4hVYs2hDvTV3MENBJqesgxKXYFfaDNkXd6onPUTSLh",
  "key8": "4ahQ3bjLbVBSRcJ6rEcZCXuLcaa948Fc7VQv4KHeooh1qhi3ALa76aMiVP6gSNGRudTcBRvKue62bUyEoCQPsQQG",
  "key9": "2Kko5GmjqA7jJW2VGoiNAyHNAfkWmp53GfJnjtviSSWsB9WYv5nqW3wD5tfXvWurVDTZkKjk9zi6LiQghZYBgj1m",
  "key10": "5AnDJpBH9ADHZmN7SQLmfwqGYTyHjtnwKzwZ7MpZTT3k8i86QNgZReKKunvyLYY966k95oEyJGUXdiuAUD6o5KCy",
  "key11": "297zZBW3akBqvmQpkw2dbPXjtHKBiWoN8jVhU2oVNf8oXcfri8NokgDFXRTseGHBttMNNazGyftwQYDMKTVgfMpx",
  "key12": "5Ro4uSgk7GEZ6mwFDwqcPzYmcREQ2CmDBtWke8vHerYoDky9KSmCs8zsmsURYeYzqgEMBHXtUPXzBVUKYierndzq",
  "key13": "uNvHvR78xFuEmp6rrjZbfQvEyaQk5aHrT8ytWmfgW5LDwFRJoZfeLcpWJYic988YzZKCDkmrSm7DZER7BTSeFzi",
  "key14": "2qyLaaRFcEjfuactTooUsPFfmTxagEBAwj1ikFaYxmzFipSxBpUDxDdAakXvrLqnZ2T5g87Gcd3qzYm5one8woYv",
  "key15": "59CPCcFmVbj54frcqNP4nMM1MRvaCDV7CAbzvwcHDKfBYREs2d1HYtbMURFVXmWVKCjG7VW9FoT8yg5kuL4CU2jj",
  "key16": "5bJrRHccA32y3PSGCURSaR2cAQzLA2CrZbz8LN8rpjrie7H1SMSAsu5PhsvU27juW9N7S7qkD4P4GV3p7hhuBML6",
  "key17": "5qE2PpLXTEQjSDDcZCJFEgKQMeTXzLDpPBmMfkDuyRswJ9cVcoB3hya5XrCH6FNrMKuykBWq9gyZufqa7mhTLukB",
  "key18": "41rGTR3hoMRLvnV3hBNoyTiodSd46FQbm5vorF22x8hMzWzpk2GAdVDwAy2KFcijjpDX8ax5wPADkZyWwNQtRgEf",
  "key19": "L3DJ1e57sUeXTNoDbeC6N4er8LJGcvgbVH6hg4jKWeg63nuL4o9NadTY6y5BcXiByq1ke6ukXYkauqWTEVXB4Bh",
  "key20": "5SetLfy9PbHams52FBqmx9oTbEYHf3EjZ51BTQTmWTpePAePWNw5HgUQjTynwhJGCz8xQVB8BFBx7UTjJsRARM48",
  "key21": "5oWUmuQ3PifuDZeLNqeL2nk6oMskMkmEtnV4u7wxwqt9ErFcNX7xi8SgzqdnH1AxrxRRSRU3QSYAPKw8m7o2cf6z",
  "key22": "3GgDmdPonoVLcUKfeRZYr895KBAQxTP7sLjnUei8UG8Zyk6ovgK3AGDzqWDsTxAj9gEfh2nJ2HGyQzQCpJaj3iGm",
  "key23": "3eLokez7vBpjapSq3UQKLUVyCkb5iVRAASGRq1zC6yTn6zfQyGZTcDFe4czPq7KtGdrYiCWtiED1Epues7mV7MXP",
  "key24": "2yU2h7VFEQzFytQqb9BCeWTsmmmfGiMDYbi1NirxpNx8C8DANRSA4j4CAEjQGRLsYqzoy7YnKG3ddk7nzkhf9Pqy",
  "key25": "2QkDqmx46o3AAunpBNVi2oDW59YBBUGuTju1Y4mixeSi41ZTELMSzQ6xD7cUiEtAxXW6b9HfsTB6T6kSZwpFhFwC",
  "key26": "3SNLZLnEDPyScuWKTz9LwdhMupwdMh4kuT7YRj3krTYWt9yBEochxZcVNri3n5EdD61ozWYireLqf4QKdcNdbYNT",
  "key27": "5h8ishezwVKnTMZS82ZCup2Q39EW4yGZyXXY2EUNVFcappkvNhmWMJzNSxHrc78mr5J2t7auVaxgFBQQwFByg6sa",
  "key28": "VAvLgVDMqTWRfuUeQFLBuvYGH3ZEbiDrM9G9NFGq2Wny3HtZitWQGRiZcsWxEnYniVrVrXdT1oDuXeitbJzzshQ",
  "key29": "5WnGdsE5PDwxeXfLArQBjRT8W6h85Fkq2wFwR2yZRwBEtpJHmTXzBHdVGU5rgZMN32Ghq61PKwVj6W9PivXEnPX8",
  "key30": "8GEj3uhCKCqXdjN6WHJNhL13qfpDwkp1N2b8Lr9HeHU3pWuovWnydj6gL4Jdm7xofuUyUzPvMhs8XrjAiwYnQaV",
  "key31": "59yPrDEPax9x4j2srFS5wAJ5naPpDNwwQvZEiejS1adfdJ3cwyTkryXrmXm9VzioemzHEsz2mV9RAT1cXbh3NTaa",
  "key32": "2yxrXCmBS5KSgo4DSrGiM63XMnHMXWK1cVqmqPnpkv8eNCjbCa19yvfNMHCwJw82HHbgNCX2pKH4hh34DHSGZcNQ",
  "key33": "2AMNSMSUWhouUphmwZVanL3bJW5unFEGt81pi6sf3BTkT3J3kF2j6M8iYWhjcJZoghVkubpu7XhM4DkdMhrXDmQB",
  "key34": "XpfUcFkZtGCeNaymnyD27ucWrTBWdaAEH8VmuHSFwVMnQnmBoN3jKjZuzC1KB96PMYK3A8vAqnzL4LVKXsxP7dY",
  "key35": "3jFynzNtXQqzCMQQtN1LKyfuQXoAFzbbUyQDky5srEykgYjfkhcdyLbEFjq1o12V4ATFM4g7VEe1fdTWGCkY789W",
  "key36": "4LADi1F8UJ2D7MVXUroJ4VxDpCSyHhiF3HdtU6i3RSroeyLbrLzKzF3qV8QLG8Wfwa5fc1kzgxPXe8iifhGsTHea",
  "key37": "4DwFjo92aYfhQ2JpBaCKcbdV4qtrxirJTJb1R4ZAfLRQDgDNA4Ycd2BNPHJfgpytJFLNC3M4jBHJgr2dFMXG6Ld6",
  "key38": "3wruRjUVqeNWX6wxa7b7GHz19Mr7TENfW16kXUDGijLHfxX6nHqTj1REMh2e1wRp6zXYy1m8nyTaNTCzLa4xroPP",
  "key39": "3Xmhn7h8XPYz6yzmqdjDW3wmqW2FRWz2vyFAUg9QFcAcPxBF3iWq9ULpELYhAz8GTHKRKJvm1BvgvfdDgF6133Y7",
  "key40": "2Vu73egxNRCPiaCNdaCb63ozzEpbwMccfaHVtsZ7GJfJPoS7q65JNpyVbCpoknmLTTLMeKStK4SstqdS4gA8j4cW",
  "key41": "2o4b1EU3GM1uwBrRSkebdZqeH4WRWe8XZ73TuDtVBjgqpqmWhRxYkwjhSrdXXfFbDPutbn6u85QNdqSgJ4j3LndD",
  "key42": "DLnw6CNJNuvxTLygbSWr3oTLpCFHsvSfA1VT9MSy3aRqUrTVaQmXPpTWaceUu73ZJMnPfYVnVZ79aJHn4X7MjDq",
  "key43": "5AhBqteDvHQ8FgJtuz4nYwLV5EWdnttFCCUwnz1KD8rkrq8St5xZVr8JBMvNwopcKJbFkRrEezGY8q8aLfijQdh2",
  "key44": "4sxXahdGqJkswDkTPqEYUEuDTg3qdRqfoXSjfYntz9nZdRhHmR9yKnFQ8Hhr7am4A41qg39z8U6yewzjEyeNn3Z7",
  "key45": "4ms4qYCF7f7N1W9TZ1FUmdNNHALJ76E2vH3wBvmqizzM1A7rqXbmXuG8dE5zqjQ2H19iXYX23evw6HLSm4S1cYDs",
  "key46": "5CBNb1q9PFY4TgEpUuMWfVc3fJp3RoxhsN1WnWkqdohLpXZkw4JSQi3qYmqC4AvFZUhZngpEz2DT3B3aqEM2TUUP"
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
