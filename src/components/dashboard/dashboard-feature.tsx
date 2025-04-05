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
    "3kmktvHdXheAcLKq46V2pT5RuNGa83XMswdN7kBhbRwoQwL8kP6LM9MPr4eD2746pbnQYBnKASQreW5p5EVCD4W7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WauxAYQL3AiMqMikrUe933HmBhagoBQtQT4EbLyxpDZnKmDGAMbSjcd2XGBAgvkk4EyvobB3UmPGVCz21uQwDBp",
  "key1": "4D11A1X34YpWwL5D5xHYQ343QmjnQA3NHckYDWU6DDV9oCGajywFYzckvxZN2HEi2PTsnyrCkyD8MG7Zbqx3Zy8q",
  "key2": "2BgpFvgGMaHEpUkMyTpVfaJGofyGwnfjrAanq5w6HDSVCuJPBAjeXV41r6cPBzzJfco5R1Whxo32bApCefVBNMVS",
  "key3": "u2yJEZYzbcYvjPF7rnqJDtuVCNrPzKeATkHmzsdqemQcCMGYrwdNFk9zk4xnkGyQ3V7GaPEvD8F7JxGQ2QCm6YQ",
  "key4": "4FoSLStZzVfXssxB8gpUuT3E546Wt6iAqm2V8bHYUjdGKem1mGkj4fuRwsh1eNruhvnySdpApy7ktztWwXFQcGVq",
  "key5": "4GcbMeLCMFPtVgMiwGzC1YsPj6WkQVvddJtU7hYjcTe3y8aoeHk7fQjG8aKK8BeqQvY9VzxeaqqyF7cNYM9GmdJA",
  "key6": "5i1gn24a3o2xVA8Btz46YUFPr6K9jeiDz51SJXJFM8RkWiBQeUpK22bsXVJzTd5GwzxV2Rei4BgogDXKgFKxC16L",
  "key7": "3pkd1ssDWxoBkuMsMGzzWaxL9qBQEqfm2BAdfqM9xv672q3P1xstEuyTYNcV7b5P6HNzMA9zW86CnePgiczWzUBB",
  "key8": "3TFhdsCHB2cotkUdnjjuo3sfjYgs1XJ2z7gGz6MNvCtRVT8RfwdGMkv4xnfzb21mTBWj5MNLNsB9Xn9LDSpgFcfm",
  "key9": "5sNcAge8atwwU69TdsgfL3WDsaMBtu2hbDRUataAbKTD8qP5upFmTrWbkvfzFoRqze1qV6QgQXBDgTUHaJcGkyCC",
  "key10": "2c5Cb5bksf9V5TAJpwAE6t7t7NawbLs48eyGbkD713Fm9eocxNDonyXL6gb7MxhjJxR5RDuuRT2L5hDgnPYYTJCv",
  "key11": "57HCMeNCeTo8xPktDQEL4HzyNpJwN8x7uegGUG51vZ4koKAaMpa6sivULDNG7Aqbm25PNWRTcDpnYU5pWypuBFVf",
  "key12": "2hV9daHoPzbKHqZxpBoRRvAKHo8yh5tvqa4WBzbQPLL1LTVrckh2akbSNBm5da7hWtf3Ho7mYVzuSP6JGSREWASP",
  "key13": "5jBNtLhwffWUEVDF39s2mQs6kqDcemyFh3DJtBjwZ6sJU2JPdtbnGUC3sgPkWWZUcWK4v35Xr4jb3KXqb8GwDpPu",
  "key14": "g3hpibDuWcM87DL3rJ96fXZj7fd23qKiXD4E1VMfcPsTDU2bBcyfM4ft3GrDHXWCrzzAfHDVNPGsT4GPsmuQJsW",
  "key15": "o34sEoDSkVRraTE91fi1us5as2Q1qmRvQRAymBUaKAHg1MV9ANcKVxXrV81bPZvgU4Z9yZQWtqA4ydpKBuuGhwN",
  "key16": "hSupxYuRDdJFvic91Me7NJc6eaGFgiCposmxhR8n1zw8MG8j3HFdLoXqYvSWBF4EqYWFrRECRjKj4QyBY5q665z",
  "key17": "5K9PRwFe1ZVLgk1cTFVdiCY8nZN7r4xVQR6BJY2XsLZHauHWEg5H8xCs7pX9hvp8CKJeZQw1YEy4V4zLZDLMFymX",
  "key18": "67SpSMuW2ktvSGeMRD2QmZWwSVR1qY5hVzEwcotg6cYnSxTz91wgPhwFQu6cVnoUwJzAfWGnSSHhvytkU4AbnCPg",
  "key19": "jmCNSvXQUqTQ2ssrfoCkSsM8tvbkNTRaRb3mtn5qpxxVW3DWLs4MW5JmufwKckD3WE3gZ4PD4j9Mjd8XRy13UBD",
  "key20": "AE57pzXojhgnbXJEyUFEen9Mhcq1bvFWRiTzowefifknv36auyimJQW6CYtN4Ato1Pzmmatx7Sb2dGfgMLPig42",
  "key21": "5DHF36BZqJ3XacLtAXVHnHsJFLRBjhW7nAL3apAHVPgm1BwwTehbjHtRbCNeebLQvnHY6mSxTUB7Vg3qhfZbvTJv",
  "key22": "5Uuvc521krAzwdg51KXhjt73F8d3VJf9JkBsdZ7ZQJ1mwUSMmipn84BK8dpkTPG3RDv27C7Vvd9crBisXfpvrPjr",
  "key23": "2oDHcUEAbLCiaFW77g4yMLGXmeiiGSvTonTi9Uz9XQprzpU2LcphFCEqHTt4MbETAf2QD52kkKbfnTYHMXYQNHFz",
  "key24": "cqBjFqtFxE5b38mBhygojMviSVcnswaDjVNBTeMrnUPxoBVZ8LcmcfdRMJ6uTU3PrKHK5f47TE5nhpVtonFXwEf",
  "key25": "2mq9CsXR2L8GCp5We8GgFL2f6oRARknZqnxFpHyvVSWPw8Sbkv18iUcmxn1mhqfd3zEWGA5tyb1giqR4u6xSE7K",
  "key26": "foX5K8fDGSWG6oZpCTDUE6Z8EjKUDP4GXQeY3aFeUyNaubPgXKzUoYeheh4Hrd7WPxvZs6pFeFoHaMYsry9q33i",
  "key27": "3kED4ZhkV2KuMiAjGQa52Gc3DAePoy93bUfuLd8Z5KuGWcTRVF5xUXNXKEZPPoxZPgohqjJqGxw5RqhyvWfjU8xq",
  "key28": "s6L2gDgQtV6UeGPU6nmA1zjrzoQ9dcFiiNYVYL7tcZ6Zc4xkBe3toSFxijccPkV3pHRrLLz5EHZk4pJBnCmwGP2",
  "key29": "42NMF4RDPpHaxuMKSTBpqjpp6wUVthp8WLscR16rh1j6jijHvm2yHHzH2K98z1v5M12jbUJSY9extD688w2AFAFZ",
  "key30": "5BaonNVQcYRyBQ54mNa9WN3gj2sRh6AHk3PbXFFEkK1FkmeUkyBaE69XWrLbP6J8FzHQc2SRVQeZuJeAaw1hPNTe",
  "key31": "3JYRLFqTQX61HzZydiGJcXbTsU6Cqe7RR5zaYw8e8TZUArtSKdvmiLHqR7zaYwUjcwu5g2eMXwhjoxLQQeJEQynE",
  "key32": "4mgAbTSxLAaUZkVhyBDfcqw4UTTaeEdsJ57p29FXziYte3FwjQ5EYithEF6dcxHrrUsHyz3aRFjnEGh9NACaRXk9",
  "key33": "298yChrFzhdp4DdkEGPSd5bEUvVSuzsNQr5f679zwqWH7VzeDELErmCZrE6N18L9gVfA6YnWHM7k8GyzN7NgNfa5",
  "key34": "5UJB3eXfBrb6H6vdx7yErvqRvPM5qs9hGbNvRRqGVjmHmvsCXCbXRSRABctKBDVwrDcPzmV7DaFfBdQFzcjSaWnV",
  "key35": "5pAQ5YRnqbyE36kwWd2PJ4Ub1EoycgjeTFCPAZsg7vHWqjcnvWCQEHAYA9THJDDSJV59YJxZSD4Cvc4zU58caywh",
  "key36": "2LfPRs52mXXTpzGfHFS82tB84GBQU6r1HQm1Tbc9ZaSgT5kg1JAzJ5rYR6WHruhb4vxgtk2HUzD24EP7TG9i27Yh",
  "key37": "2vxNzwesV8qcdMfiHkJyFzFuLmpoCZWCJNo9Wx9MZgJ2uB36gbH7vUHadbT4PD5LjRCjL5MHaqiPKWypwuSDAsEw",
  "key38": "PPnhqobQAR1m8Su4PHE1LBrcZTJoE8x88dVP4vQ5Qyk7RHEH7JsMoVFTKJ6foSg3u43vWYNSkT1wGHezmW8hBhE",
  "key39": "2hB5WXE3ZfR5s1quQEq5Y8kB4NhyZJM2auYzhtK9xhz6JdP3b67nDQhCL97tVzu67CexmySefqcvNBm937hpBBiW",
  "key40": "5tqS8Xf2u4bjNu3nZtZzniWtEUEC94A3cYLhTj3j3cdEYk9Z9NG9BanS9q5prsoqimSvmzvqDrsacZ5i9PhVU8Qf",
  "key41": "1XmaHudpFhH6eE785SuthkBvSw5cXnakeXxNQoZtr35D9EvV3zm2a3k3yQM28bZnoay7DaUhhyPohQvj14MwNSH",
  "key42": "3hPXmcofj7Q9nY1k7LWoqfEvyHe4DRgmq2WnLHJKDtYiD8Zp55e8ECwCDf6ohEP6rQFRVEjFv8JXTgB9oADd15Bn",
  "key43": "Ej1v6b7J1GkKTYynAqX9kXad81tnDxm6C5QdiUzQmMPcB8yopmiVFkN9udEVdwhqKWb9ofpitasjHQEtLLVGf2H",
  "key44": "X6mBoXP8e71NWw81d5ekSMD5a7N14QfseJPKpL47uUCnMXLYE2dhmLzD4X6XswCURaQFoGs5gCkAhBLDuuhAFTd",
  "key45": "3vjsgybJVbTyKRsJo9uDVr6CiUXZD8cTQ2uut56MJJD4qK1XrL7vrZSGFggrLkSWdbNVT9UvM3caYRa1AjLo4Ngu",
  "key46": "5sPH5oGRsybJCNkWf2sudGHwqQLj7MgthGh2VLMmhRofNDbJXBHoh9xPainortybEN9NuUcqQ946GVbvyHgXFAo5"
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
