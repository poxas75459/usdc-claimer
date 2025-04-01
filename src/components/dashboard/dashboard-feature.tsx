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
    "2cbFCkPFun5peyGWgJ6pfFEoBLye1D5U5UQq9DYToLBGCsa2RHcaVSsfoFNbFSYV53yjvP3BHjXXcEuwv7fu97U9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oTy1jJDadnRzd2Ub9VtrbFpnG4YeRrKpwhA7oMWiKaPVzgNk3miYMLdU7pJeFUcbqSgPrXHhRgHzCyaANuFRdr",
  "key1": "41CxSF8dTshQPp8UZsCkymd6WUdhPHMUVAXkchNQ2S56mQNmHC7pmBzeRbM8rvxEpfzaVHVL3Qx16F37t7jfwh6z",
  "key2": "4vtn27UJ5rgisXHouiShC2Xw6BYj1vsaKm2yF1b28XA1QnJVxiPjEfRefsKtwA2C5hdxzJSEfFw7E6r1GW7hCM9G",
  "key3": "3A4nRFqwSAfxareQHVUYFowL2D2euNbhsguu86Qh61TDiRtfQFuHFJboJR3geqAA5JtD4cTgnGjAd7JBp2f8RAVr",
  "key4": "3bz31wFjnLDgNxP8GqRBdwJwmT1yxXri65BMd85Hh47NaS8hhMwq8AcgQWcX9ry7rAE8JAVJbPtKZTfkKpbU523j",
  "key5": "i6ivV3pa5dDqRtQA7BAb3eVnSVaKhULbUYtfuqLswGkuHETiVXek5RZZfMJnGnN3W2aqmSNU8TfvkKaWYpDuvhk",
  "key6": "7C7GmDibQanFtxba93YPDgZ1Jf2Ew5u8KvVYetxtnbdQnCrMwN6e62MXYHs1SEU6mHREHMeN2s921Dm1Mt2q83d",
  "key7": "4qV5Sot81Qw1S6fhMYj58qX6PTbz4HcGZyxK4ncYkjtG1egu8GDPesNbH7gaqgKtquaezwp3ixiyu13tPmR4QCnk",
  "key8": "AabitgiAHnsXgYsHvNys5MKyb3YWSftkU4pqS2E8HVdFyRSG2eP4TWp1ws19cVFnbfExMAoJwHXsS32hYpPZLnL",
  "key9": "2SFTozxiMvESLvAKX4GdEhNDosLabAvzjuAGbfhUEjvdkSpmoA1Sahhppo3YZsKSzf4AbPn57WJ5oNHHBzYGfsqD",
  "key10": "1TCHqAFcqsbzdHYLK6ZpHJxHsMPVqJg9djPx7c5Rw1QNzgvAB5NbV2BAT4kdVusEp31rhDh23jsKEvQak1XJuoj",
  "key11": "3sM3MFtirvMTq3igi8amzYLWwveAnsHFNKnwaAHbCoAJtfXPtbYkEscco1rdbmAjarW79cnDtMVDv2d8hAEpkhUQ",
  "key12": "4AKBvSSZ9AQU3n3yvp5StLLvcxyZ5F8JrGHFL6Yu4DHUQhQDN6SeNmvYAtnHUhUifKnhUUKodDvkvmD8Hz8w3CEB",
  "key13": "3x9JSj4MJjbN6RJgj8zCo9ZdWE463RKjBBi9uHrRU56bckHTuXeKU5nZ4Beci1ivZsxNrc1n68grnTGu3UQvXrye",
  "key14": "5kxgT9kRKAuZmTgCN8g1guoxQm7xaLJX1KKyUJkyJcB92KTyGjJF6a4pf6JSb1zvT471xz68S6iTAtmbxGwyRVZ1",
  "key15": "27CQuJ19QknZcG7DbnX1HfjsEjCYLiwfFdW7VDijvp21wcJs55cBZB3meqNL2LjwuZvzCvCSt8RqoauBDXL5z3vE",
  "key16": "3aMmRDiGQ3qcU5cW64WMubpc72QU6SQzAjFiLoC2NmWHpyr28SVcEgd5BHJx7Mgnk1M63PRrS89CNfmhGG7kGV5D",
  "key17": "4eatge2UzkeDLfGad4zDuUchZFbCX1xwSvV9PDausSbEQv4RASEwec24SGcvSgmxKMXqpXLicNkpbqpi8CkDxhXS",
  "key18": "qy4hkTzL42TB2gTs5cbA7ZRWCogzQUApyLisq2gVupUwEAStA5BSWWb6K35qQYqy7cnQcidrCMc7yv65PjHua95",
  "key19": "7m6hdRmzr7m1M4MTFaRRJhQyWFDtSk5YerCt1iEwsR7grTwQYqWH7LGqfqgP6uSisawrdDjLU2PHcC3ag9i4RBw",
  "key20": "2j4iUXpPuG8SJ2rF4uLWXYGTWvBUb9zhT6u1W28sf8B9JTmZNZTLAV459rbetxS7byNhM7EXb4Wn4KMKuWFGmZC6",
  "key21": "57xgs6D164L2zzFQDA4vBatjVg8HduRXHmPzw2EWBiW1eEwXSoQe6RoynEAWrMmboXwBrTKKCqqXfkbWb3gZJZfN",
  "key22": "3xCCJEvzY7otv39hHxZizKorMopbm6wf9C3ctKGUgMNut5bhLnmh8gN6qDLhQjUN7QQPmGW8kLGJ5ENz4E7K9mLq",
  "key23": "4apww76Ychsdme65gedteJ1uXSM5ozj2XaM2FyrzEELyuM8G9rdrzB4eLuPRi23ETHBzDaRqTPYqSCTGW5jHhSpA",
  "key24": "2Q8L7S6qQ2sJ4nZ5sUF4nM4KYLNgqdetXXTKVnZU5aHkvur92xJ6GRhBspVQccDLHszBD8gQnEp5x3JnTTpDrKZb",
  "key25": "5meip7CDEM7TzyHhVm8oSXS47qYQ1sJhg7uVLSETatRChWUKmCfgKjoymN48ptUBFqPKHtpLFTj8paJQJXy9USAF",
  "key26": "4gy6DiUMgDLmVEHThyYQah5kdkhCp65ahurCcagqNT3FWEs4hkngg1x2WGzwRfMWjyWnbCvHurxeMKeC4zvPAN6c",
  "key27": "4m7EZw88StVvQ35F2cbsUEfKbGR1CfW4Xykqug8toucprSdRvBXg7Nc2NgudfB23pYnQzhf1Qj7y4TsEn5Wv4Wza",
  "key28": "3qTcoLnaT6E4qsuWzEmFfJSp1mnTKHcyTtntFN8e4EyisoXSZgHt8eHXh58UarGCcxaH1CEevd7SUypWtKtp4T4G",
  "key29": "5Ddg23jAxNgNrrmmgeegsYtPt53kUcwYFs8UDidFauszkd4MVvA3hQeqL6HEWBEqN7ZaZcHevyWjqJs2668YsYUB",
  "key30": "5stRRLFBSxV7Si2PjsoBvvcwNgBZJLpjFFFXoQ6DiuLUJzV8QqnQ7m4qNgaidCnMUqoMrcaz2a3SAB64WW9qFex4",
  "key31": "2yruzLiS65v7BCAdHjh5p5mNqrx1jDVMweQPvd6ZqDjrYVYgN8UrvyegSrawjFXc5dJcXhDqNtG8FurgfCFozw3t",
  "key32": "44fN1vC4xop7rPV36wkVTWWeKJMJceEww5vFNnawEPP69PcLxHSpY9ewRm95vfjvHNwLLNkHN5FqxcbmWugsy31Z",
  "key33": "3G78ywFLadtZ9PfeVzGygyN8J2Lk5P3G9rruJns1B1wnZ31fNzU6TmPxSE5Afd29xZeDx3aju6eA4JigMEACpoiA",
  "key34": "2RXNswqP2iskjKPnLUWbxrsKDsTV56oQ9tw5f5h6682EZX7XvwPUAeEq4dVXzUqWTCJEM465tWYmbcWJq1Xi9jAH",
  "key35": "2vTPyrW3vPoKa1FGxTB6uu5teccbwTiSCXhZ47U7Dmzc4pgDDoPaWUvJttbDabyExNJx6jDrnVzrmszkVjLNcjBo",
  "key36": "5vHP46saVDXMAeNEz2DPByUZsHp8YB4tY4zgyv4bBo9txDG7EPKnMWDrfBZ5UanSv8mKpfjnurVVqTV95o72xn5b",
  "key37": "erdpM4QwxkpPxGnhK2r2vocGxVTwpy8rzVu4YgLKaziZhiFAHXVEJXpji9UTybKEkzixScUpv2DkTJphvNJ99Ki",
  "key38": "2oC1nCbdPpZyMWf6eXHAwMwXNZzrGFcS4e9mYh3Es3KnCpmQdy49882ChgQkMKFksYha1gtd7vmDPhf1bsH6cSNW",
  "key39": "2Rm3g8EyXF93sLvAjaEUfvzni8j5Eg9xtVyoXfaCycpGbyqmrJd9RjDNYuqVEWZr2SJkQFB7Vd6vn1SEdNUwiq5i",
  "key40": "2PiWfZMPU66JhJ5MCJH48KomegnWosFqE1fZXEQjnDTmEzTwZC9xeTr2uarEJphCSC9cywTwvL7524eiQKab43mH",
  "key41": "4rU1xNQLGkDHAgPBciP1EgKeLKeUrz2gGJBmjutNqjoKx4nwmwh77V7ZbpeU3c9Dni8Bxh8BLiqs8scwqKpumfkR",
  "key42": "4vdsJK5oqRgFXeeHz1Vbg65SoVrmfzbBgPeV32XAK96tUeKRXXgFengNLzGCrV6d2DnVtHSMGegnEjssdGPosYqu",
  "key43": "3J8RfXgP5TfTDPKsWB4cbWa6gHmNSjT4iS2TDcaWwi4YmHpwD85KQKFtkGdw48GLN11AqXHwD4MHUuejLFGLSXPa"
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
