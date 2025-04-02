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
    "4ymFDQVKMfcks9hSgZZ1euv275Btp6ijYDSMRf2y24RVAfzV96F1f4DhtobrWZVF3Ma5126mFwH9K8DGPstPRCGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZvjGms1PFggZCp4J4QZ4K8gtGj22MVDvv4EjvCTMuUTjhmc2AppfboMbdVk6m8NktcQfKbdwyqbSw7sicnCLgDW",
  "key1": "RN5sKxCTQxqpYUMXnPT74w7Bj7pAk8JmUxUDd5V1TX7iJYaiCJCPuUjBrJZa4FQmJsoYcTRmfufksdU5oadbLfv",
  "key2": "epuFosCei81nWfyJ9hLLP3WBeVReac42m7tW9GFt2Ed8YbopbFs29qP1E9KtT9wr8fMBoRUJce9L6o2g6ejWVvP",
  "key3": "4fH5S9MKDBZGSwUrKJPggUWapyhH6j2Rwf8HB8BEJJKg95wnygyibrGQ3Nh3cKZERUMgqaHQMKG6s5krh3bzdGR",
  "key4": "43BKf82pJMDkTd51zayJ1Do1AGFCY47ZrsQoQbDRDjBpNH3RAvN1C3S8FJA8HNvFVp7pLuR2sDa5zhbHyALJz1bT",
  "key5": "2uYbEWaNnHk7aYfe7jkDNwQzWDT2RJF9BWnfTsbB2buzuy6nyS9CARB4Bz4NnfnSbs1k4xvZXYFAWHBwB8sZX2Lg",
  "key6": "4BK5dHZnt4XEpBwkCZADjs1BSX3AiWZ3NxEX5DhVicALCUW54nRozhPGrUTvGCQbyaPViMRiPqNea93AXfmqZtPb",
  "key7": "5JzTxxrfyvBZCnxDctgXb9sSYX5Uz6fT3b8T7hFBAqRsdhd8UtuZQ1fXfHUsfoTt4dEJ3hXdg85zNheMzgEK7r5N",
  "key8": "31CuZgxhuPv7gBG82nhuueLDtZytMs3b2bZBKTyE6deT6g53WYxs5Wzj97H2Ed1fUTmEvVzxyPNFvkYBDMMPAquq",
  "key9": "4AaaHz6LBnDF7zkE6XqUGknAqa84LTuNRRuKa2r7FYDWRL172imnkdAstg9Z6rS2gbMxsQL9UTuiGNLH7jYFuiSZ",
  "key10": "2ogNPBHHNsUF794PD7s7J8eCuH1pFRqm4NYhfznCkLStpgMoqU7rGDuEPfraxMVdFz6LbZptcUKSiwzDBYEBk74E",
  "key11": "5NNaMUK8cBVJBYFFUag7JVjJn5FbPJWBTWLmcjtx6VizxGYSNRPeFCSq7Qxp8vX1Lp2v1Mi4vt6weofXyKhyEbt9",
  "key12": "4zBpG66MDfjfaVurhHArGL2GxvcTG9ojRDmX1TgRLmM1mXHuo9tGjcpUTZ4BYHX9Yh4WeetggVuAaJadTsbdKPVg",
  "key13": "672U3Hro2LmbLiKN8wrHVi3EskV96dBcqc6T2p6RwBvPj47DtBf32v2bpJcELQ8FPdEb2ZCVbTSt19NLh9ySeCtZ",
  "key14": "nbYfCtCqCZgNigiWPqXbNELjNr3fJQN91a4JfMAYWeJTV16wUAzBLkN6rNUrtdjf5pV7DtjTqwmwVU1BW4t245w",
  "key15": "21zBwZ8QwYCRUEAP9wYvTSU8VWxriPShCytS6Jr3c89tfX8N82DH3TGpq6aAGotZeppnN7tq8jF1ZZhvRDy5KxW3",
  "key16": "5SGtnL4H6VdxLsqqceYQsFGSHXqF2dDQAxUE8xT4ZasAMq7va93k2xLMhy7w4iZPpDh8RbTQG9mXWVM8w9FrcSM8",
  "key17": "3pUzPvRngzLy7GKZvgWRCX3pNJMNQgRVfEaGYRtKsvY45aii6y8NLQC4tSMZUKHF9E4FtTSz3dzgCHcEL5CyBHP7",
  "key18": "3aCFCjbk3LaukmCaC3dyhJ22rN8QDGstVHRc1XJ9mBAGHjxNm3aUwiDZBdzmpYmQepMGPPEnfRNCQtQfajfK4nuh",
  "key19": "BQsptGapKvFr3PPV4DSNGrpz8nokT7QfAUhJY2NcuWufrQHYnBaUs7kby2nYYyU9XEsG6yAFCiwhtWJc1Ww91yk",
  "key20": "3Ssbt6B3fUiEaL21CDM6jiWTidA5FXoBesvvHndT8T2FLgGo54uAf4DKhdXeMXBG8xBDuKUP4m2twPfY41sezYyr",
  "key21": "4GkiSCt1HVehuDbcwsJVRRQH7AAg5Rnyw2ZWiGM386A3pGWi1dmWYybvtDGSuseBGVLcTmi3WDuy5KDUSBSGBpRM",
  "key22": "RgnnWjzvgNo7UYHNW4BRBQXuvxiHV3cxRyoAcw7uFZHczTjG89QyewQNTuiQKu88BXsbeReZJxt2F38YwMRRzbe",
  "key23": "3CHVpEGztQZwcNSy6uiRfUMgx891JvKLyPCKoZzZvw6WrC7bvsxdVcgYJHWKDnK7JSAVYM5s5pkS7psXRnpNfHbX",
  "key24": "2bmQrr5VHZA6vh7mnPkScYQkhyoCrVMT9ZkQsEH3FAYppbCGzEsmEqN8VhuhiyZRvhhxAGbg6Aufk2aiz3DDFAaq",
  "key25": "kdNULHXzMqnouH5a1jWfCaHPRxY95UnmpWXP3YfBMFAWXJk9M1D7H5z16GHxTbM4tx5gmuxQveToKni8pAqt5rZ",
  "key26": "4zm3tyAsDP7s653aVpWHaDz4ksMr2drzrofQW2kAw2mgTt7F2ZnK7YQZ12kdsoksxR9dtmtvaxwKqYt9q7WNLu8C",
  "key27": "4AzsKuN26Rd8ctsnNE4XUAHFNNcZob6AArkHC4mHg7DhhFYRVGbGzQmMyPXDfKbvqt7HArv9si9qhivcAVxMJVQD",
  "key28": "2ty5HcTTJKcFpUZgsCzGjYwScjodGKXwNkUQG8azKekR8HD3ycvKtPrzmjco9ZRGG7fTNH9pijqTpHyHHfVrrBJW",
  "key29": "39R6mDWa93CZc4L7AQY5SrJnfNoJBPr9Ph1xhEzassVX7MTAPwo6m98LvvCp72pXF8Rv6HcXXJozampfusapLhKu",
  "key30": "2DeK52SZ5dE5SxidMFiCHpt6mH8dChgYGXQE17e9XhjAhF8Yof3b9qisP6LEBQ9mTt96F44W9UXhvkcwxCkRUxz2",
  "key31": "3XfEfLZct6WYSxW1EJGMTKymxF7HuKLMBbToju4xKGEz8sd3gzyf8oATK6N7TLoAWZyRatNk9Dc6pNNjWbWkBPQA",
  "key32": "3buFZwwv7edeY7DuFtpk8n3F7Bpp4GCm8bPpy1sfJkcTJmLcLNkBovwawwmCc3JezjKbw6sv1JRBoohb2rnaha8s",
  "key33": "3VdsPrf86qjEo1QWguXGASQsP5p2m1HSSkeiQCiusYM1tXWh6E6KW8sofN5u7tfi6A7pBJxy2ZGfktiCTyUmeArM",
  "key34": "61YykFAbMwYBWnuaqftiUPA6aMoyhVcD5ygDUqSpknMbU1amNHYb9EdW93dC5JHw5b2k2gSKd43peMnBiHHbGYFp",
  "key35": "3T4HMtYqqyaYua5PxdE8fTCE4fVtHow4A3LAnmc6QNC1W6NPFqY2W4qbURnVfZYCUHP5GW7BXsVTHi4qGoxbH7uq",
  "key36": "4RGbwZYDeGgnqRK8VShwh5CUUNsRUMGWAmFYXqZdDjp553VbjQH2SbLDq44Aqw9NncU8gczEEG1kWnjbhizVvKFx",
  "key37": "4xKrXV3qf5HBRaLDPwXGg9zqq8YYZJ8EJTBjwZqzWY1njEWyxNjjpDpkeXiK2rY6zbhnsH8a7e9Utn4yWKPfWPwj",
  "key38": "zkXUYyeNkGnwxjbbmpkeF3cBJCKDwRuhNhnorJJugzR6e6ZxxzicVuFtJHDb3ndvZY6m818sGDzFkdzxnxD6PQP",
  "key39": "3gz21kkRDHL687pLqeW5Mpkze4A4wYNuGh2xKACz2HAGme4WpA95wwjL8Ne4qgjwDr9NzoiAq26AFay6ASBu9Q2M",
  "key40": "3ThF4sKPBbSkgxRFqF6un4uGVDMBHmuQp9T7PxXXiFzCB2HFiqLyV9rEwVa7dSzQz5mGwG9zY4CLoJVYQrxn68NT",
  "key41": "4croKTLaKWok4Tj65JioZrMHMx5HuSE58ByGpnXmGmJ6nTQFe63rK9g4JK9X41vJfPe96CG7vytWRaFAjCV12Q2r"
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
