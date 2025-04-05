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
    "4LmsUPgmTj9wv3u2kE3C51XnZifSV7chNUDzNR13pJCvzBti49WZRWwR5iZswBFcP6HHNAfQ6E3BbCpdQ5JanmDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CvJbTcdMkuRTY39peKS5KTA59itQ1eKUzAbmF58LzGeTCXwdoVvrdD3sUvd2urB83r2xq94KW8EVqvb31rDfei7",
  "key1": "3VgzuyeW4HbVYe2cPXnAuLdN5kcEaL6bi6iJtmPsS8fqsAvKR57j6dwo4myUVQF1Ebkh5Epnwbwy5LcwrcdV6f9",
  "key2": "5Tp2nKFvTWz3PRGh4V5vVrcgAQxPNBCv27ChubhgvSnhWAbBrRP4YvMMVgjfoKKBsgPosxoMnaDaDjjL2iN7b6Mx",
  "key3": "5ovERoeiYsGyBZNe6hXK6HCzXchyZU4Jom2M4HS8DpytknRCaKvxuhTwFMd1ZqfRZK9quWcq3P5RaZNPW7XNGsn9",
  "key4": "eYCdQY5eVueuGmyA8GgiLQTMym1n2GTiRdE3UvRSm8DzTBZsE8nt4nUiRtifMDhe3ezvV87XigJeujL1GbW1Sc8",
  "key5": "3oDojqg4uQDQMFksRWNCHg4RVGVRAR3AC5KYXyPVsN41dH3MBbgA6bpcDUChnqmNDwUKNoenPPpENiZpM3zfqGfW",
  "key6": "2CUQkFwAXcvehRTW7wC2yUMAK5GD1szLLcajmJrCm7zPCEr1qyRHdorGfrZp2x5e5hX3uGmJNaLeEP1ULDBDfpZS",
  "key7": "4xaPR6LUVfzcPCMKLK57vnowN6WoyTTGcBtgzZG5oizarTSdmB4jgtgTB2eHirGdoTWtw76t3FavxhtEm21ag4Sy",
  "key8": "3my8psyWQEo72jvTrCKKA6BveHvC9PHAyTRwYQw1rtV9SbbNxeRojwVkvebwhENahDgvRjsTARvbRhp1adqEAAtB",
  "key9": "WRPNrWTZFabMUZabmibnK1VtTAJ7SakfDzXcyRhNVqwdR3XVz3gAVFLAEFKYidd87TBwr9FABWz5gvW142ceePW",
  "key10": "49QF19CZ5gtfP4J5rc3qPs91BUbaNZqhdSPpnjbPBFQVoVUMUo6QPZvSY5TojRZZyLW6TzkrDXdtpe11GspAsdSQ",
  "key11": "5Mn1n1a7RUw5HSVLWNj8k9zzVCEekyb9FPgaskm8iqQ6NToDBM4xC5wCj3xzsycrcGr55qxu8RnZsrTzVd1fKJtP",
  "key12": "66ffmjbabU8LDkjduozSanRXXrnFYP3SxqWwuvR6zfSMwfC7gPaqFMBYehnErDttjcStkAxU8a74KBrQB4rB5ed",
  "key13": "2643LTe3NobwGXxPtfHdtwtqTykmbJ2XLrdbKsX9ThbUFmh4b3QJ72sLK1w6mUUae6BrJUzyHScnbUNSy2P2Gzr5",
  "key14": "4wJcQwSkWP3zkRHKLtJiSWxy5KDvV5RbnEF9emRNSb4CK8t5XLxQMDn6sYsb7gtNTYGNGMKDBf93iVWXS9AwDV9d",
  "key15": "4jYdPHJFMt3ZgutS97Lb6NiD2UtUW3zmQnyTP8Lp6irN2bKDFQCStdAbr2gQuuG5QzjkS9nB6vfooopBeEXnLFkA",
  "key16": "2dUSs5GoUMHyiz2PUddBeUgQUJuzfA1ovUyQMstwgGWFVn4scRY4s4CUpkVBYSBdDvkmqcad9w3PoYmWNJNX2UeV",
  "key17": "3c2oauRwRhJ17e2eny7Nt2iHzHAutnrz7ZXU6iRip4oZZEwH7YUz6x557ZSBqhN2rKi9TFsbeJtUUTLu46DBvCJ9",
  "key18": "4nHsLFL1xRBRHcTkZpoaurDvNuds7srNT3x39aVseFyGeRiF8j94Cfu9hUfeui2Fr2TQfDJizMuBakaJzi3muRv7",
  "key19": "5onGLZvov9aZP11gv8Z7H2k9jvX63iFiS5uzYBG4d2gzz6hSKiYaN5AcVRJoqfcvVKVFCKoUoibHWTKNHByRCfxQ",
  "key20": "2XTiXsXUsRQPXWmBAXKmowBs3eGySrwSdsRxqaVaStwPfB9sMnzvz2T9PV2nBjuBZJCVpYJmaiUJ9AXBZAjBZWqT",
  "key21": "5M2ScVavhFKQARJ4d5mDKhsjTNcdXpcHMPbzEBNcziBERZjZWJC1j6Pmc3GgNMbrDuRkGYZbLQ8hdykHn6hvdMMU",
  "key22": "25wcrw6krRW6xD2TLrihMtCru5amS8ZvSfQhsZZrzhDeFgHLvWuhCXdTBFG1rizf1YeCZdcMGZbS1xJmeTBXi4bk",
  "key23": "ZKBSaeX2PrHbtLYsxjnbzueh78C6iVwWvYnfNJ7Gn6bhiHweTsYph4YhG7XJwSmFWEV9dWRKZZ9n9ZmCaebnFas",
  "key24": "4vMzZhTs7U2Nf26Wr9VDACxSiCGpSyy743kiETaw5UkddyHhbArEgb1Zwg9woH4Ycsjk162urkj7U5Ae218YQHQV",
  "key25": "3Z3vmLNPgR742c2n8NLJRQn5xJHTJMyDjzRtHBuBticBUFPLnkGhH4CKcKEm1D3w9fsjpVqSRhsjhi3cchPzfrL6",
  "key26": "43H2jbRH4MShDpaPEzzp7J1GwrVbAS53rAqPDeNmc4EcYp3eWV9yjnboiZHBcLdqv6sKKrHgNgKH7dXfiQXtJq9F",
  "key27": "vJsiEkDsLVnD6RaAd6fKYPrVyqDNgEAmqUTQY5cBzrx1ciPtpCxKNUdGPWp2TdsX3hygzE7ENXvv1ntuFvsQGuK",
  "key28": "2gqgz8fV2Fypd31qW8dHHv3fqJp5MgxRH6bsXE2aqcaPt2Ek3gGxaGEEkJMjTwq2scvTnUQ8Jaz47xzFioQfXfmK",
  "key29": "2AF6kF1G2qNs2YXvyJ9u7J187w4YQqEZ8MJoj6rkrWVDzBuaywH8GYhLdUpYmKdWuWQfrNfaK6hAujPX3cwxpfNF",
  "key30": "3uD6u7G7mpRtsqADnZ3sAwdSNcrYkqa2Xj6w5mxnoC8NTTrbYLMC43ESLhk34iWBwhcNStNUH9urhPD7TPk4t9Jt",
  "key31": "2vceb2pDvhCaVMSTxYrnQnr72To76J68W1u6rCq77yV7BKHWQCk6tkC1Bn4hAe4UrjaPt1yf3xkwZGzjczB1Gjjr",
  "key32": "5JSEPatokT6dqJT28WZmwTh7WyjVLj4yZNH2ri7nWfCcVVELsh7GaGtqHW3qj7y1vucfkwusAB4TkaHZhFDMaihG",
  "key33": "3yiraDFpYJnHiu3QMzvNkP16sJzViV8qLQ7qBPz2pf2CY7c4gWiPaN21dm2hBgqEp9M9SGwkpHwWgEYnbb4QU8oH",
  "key34": "2sg9ze4y2WEnYuGhtvztfACvZCK8DzXM5SJGjKXbZ7JbKY59f4hz32EWP7t9jBQ8YXpU2CQQK9aT1Wxp7cZa6AhR",
  "key35": "46VgANGYKzb8mv2e6idkzrqxBtKCnYYTZxUebeyUKF9XLex8tTi5DhhWm9EJnqrBk5csaEofzLbcxRgb5bpHmVa9",
  "key36": "X58dZJxt2JerFSvAyXGiwD49433MFVg8zwZXTJcvZQ5YxBAn5YeKnkBi74D7YBVZnjoPnV6HfCysCLni6NnsE7f",
  "key37": "39dGhpzw6NEYLdn5R94mwrRNJ68RjaU9wASCqTAbD3rrVxcmeDxDeK7RmK9EeGZ5YcXmvo1oKbEbhvmSSKzYGYeS",
  "key38": "22mGQX9R8XJc9jBzLztFSDVhEEFkbnsBqBzdEkzqJhi23RJDUKDgCJUg48XeZwqyq54VzRW47Q2R5dYwapR7p8rk",
  "key39": "2ZabAYK9ZZyA9f8fJDNtVfekV9eZbZAfgarAoDc5fmMiePkNPDriWYyJGYP9txeh6C1pS15zeTV5rgGDtBa3fGer",
  "key40": "2b9m11kjGTmrEJ2EvcG9mJA2oMJHTdnHc3ZaWPsgtFFRiyNn4gGWXPc2822vDXRGLNturbNRi1bvjtdZSmSBsSQZ",
  "key41": "28xMrcELYZ38uRcymvhb39Lreo3ukcbuP47R91F6W4iu2S9k7y5mR2cGKT3qSRMGv1BJ3Q9qr2YrmY6ZbUgPyGu5",
  "key42": "4UnM81aEkxm3oTqLZZDmvhezCvaVSKJNms4vDb8mved9h3JssPSYKprC4JJHy8u5SaLJLuJa2xdazktWntnHiUc6",
  "key43": "497kyy5zHvxdyuems5PzmwaLcSoGsd7xKasu57fQd5Z4PuRLGGmVFrScJNPsnj1tjdjsgfPBSpeD1yLp5fx8Rh7g",
  "key44": "312M8SL8trvLYRS6o1YbYwRYtRuJaKuicmxPfWZbBC2nw2RDRzzJGtQgJYYE33Jy8W2myUhdgdUhVTmkdrJD2SkW",
  "key45": "5Pkv8B37qETdoUcchJWwLMDfGF3cP2BNfjAz3AtEPVEM8Ye14qXjtFkDkVdnJNKFGVgSnZBF3DoHBcbyz4K8HKBz"
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
