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
    "48HAxayUsAK4A4HTpaoCE2BJSYXbxdbRQseTC26SacV7bvpaADkKShfhE3bfThSPXeAuzpkwtduM6TAVRoG7fUMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AQpdn27BZdd7MyRnQWdydXbW7azoTZZ7hiN9NgAPXxVv8PyepiFR2GCAZ1Up7JTKuCB3Vui8f8VUeYuYk1UPJud",
  "key1": "2ejZNuh4pQeXqB7sWHQ1L8Yg38uumA4zMAZSCzMKWq6YvjjXpRiy3UUcSK4QpEaaRH52JMpnKfx5dre4QmD7dRcV",
  "key2": "4VbyiWQho29tDF29Q2Hnx8e5wJUjSS5Q5G3ygzsGRz3Mk1tcbUMRdi9S8LZr6BEknd7xLq1ZhguomGtf8fjHKKqL",
  "key3": "62kk9h9JMiBDLYRPNCZiSEKVqokyVrmBbdUDjG225DW76Mu9GwrYp24vLGWVtTaN3DJpWqugyD7CfNPjUXUozfDE",
  "key4": "5zjAiFL9zBz5km8WH7meVPyb35wm5qt5N5h4QJqBWyqTjpTbPtrWW6NDEUh7trZMyFo8BQdEDPb8DQFEavPvXAyB",
  "key5": "3Df7aFQfUTBH2W8ftJUL52yFrmc6fwEMqB3Ljs8VyjH1Z8NsaifayAgFoVjnhLqY5dTQNUNwSJmNdion47qCLJ5",
  "key6": "bamJbn3tHsDM9S9J2pACjhhKkuXws4NFFJSepgkrZCCtiiDMMdQFa36oWLkdJ7uh7uCfgUHWkTW4cb4YQLUWtcN",
  "key7": "27fvGwVgNsqnY2v6BNWNL1Eiftu2uWHdwzfNjCxZG7mDwmm7AeH3LJn9cm9ELpFjWfgKhik5dWDNi4QMNMdibjUX",
  "key8": "34pcjC6L32GhT1gKz1yYHgF5JYxCLdEKmr52hyBeciBN3GwJ2JGD9L3yd9azQeihc6qrUkA1gDVDriVihFjNiF9f",
  "key9": "25p2dZLjseLV6bNLVubvGZ4njQeP6ugJ8oTnfT4Psw1WXLCJbKBR2rF1h9XQ7iEkRoJdzv2w6GCktYwowSoJ8ZNk",
  "key10": "5CATTD52foG8VS2h75mx5K368xVyEeGgQwMb7QcVS8Gxx3yGC62tofKApfiF2rn5V6xCtHQJ6PznvZENDGqtofmB",
  "key11": "F9f8ayYi4hTRbzCNFr6gvSZZuXZV5d5umgFakMnLt8tZFTAPtrxK6epEyQo4Jt4WE5SaFXr9wpofir5SbPXBfWr",
  "key12": "42FXXqeZZTHpezxSUT46PfupTveWwTN5PzhQ5ijFhffjSM19AaAeMjXN55i3vWdEiLBUxmcoer1QSQFhnMRpXKGE",
  "key13": "4RCz7Ztu95Wih6Js9VdVGupry2ycstGpKgfNkbN3k7Mp6FiWd9VKgz39nQvSdQk4U5EWX3BNQuWDuU6eWxTCU7nM",
  "key14": "58uQz1Tj6bi3dBDEsm8fpSAyAMM6aktSydpGvKQjPuid11DJUsMhcFRYZEmNLf2pgzXJra9zU1k4qiPKSKHCFDRK",
  "key15": "5vaECH4pLxpXk4fquTegFAnfj8PXSGckXm5Wid6sZttW1HybohZZNM2orxgyToA8gdECHheLz6XshYeEPrUpxCto",
  "key16": "3Nwr5yqYvWdX1k2q89D4gBvqAeJqeSX4t8dMoazaS2pzSkTzu1vpRBvhh5GGuyGDugvUdmnM7Fk66Yhb5PCkTekB",
  "key17": "26CP3cCotdZ8cTCHXfmUBik9okCAcLm1Pg8PYtF4DoUmx6m6LjLAFPy9A6ZbpjAAXiuHpkeFVPztgnJdPVLxHdVY",
  "key18": "LX1ULCkrRUCUijCatjJLMseLJ5pJHFzKrDLvcXvpz3k24JWE1aop8tYVJnB9x1oeaDXvmQwsHmPxDsty7nYPiw8",
  "key19": "45xFp7HtU3k6FVH36HYn5DKDgQAZBrarPZ9JUCAi96gWdpKUgJRWq2ofsGC75uEmFpo7YVw9JtUC8Zv5FACoj5DJ",
  "key20": "4X9iuZwG14wJQJZ1KxbmrtPAB2L5aJSsuobVKvjngW2qT732rHBTjt4y918ZjzN76Scua5y2PRw8A52ubjAzh7cb",
  "key21": "5Y9pw2Vvd7XkVS75sDx79hv2jEyrNuoei8iMWfsTZqgSsBcyaXWX4yGTMinoCQiXKLZqxHvjbr8rhNXBg1nh6Wyr",
  "key22": "5ibYYC8ALiPQYdZvjfQroEusBiRJ5oodC2XVB9xAmro9d2o4pMZQbd5qDSF7FsxCFnrN7ByJzC3j4fyuF9zKFeUR",
  "key23": "4xj8zgq7kemNCYRN1TYZvsQZ2u5CGhJBxG6PiHcpenqAEw4kiURVeGAqeUifbftGwiSsPdHZMVzXXpSPkjgBdSEt",
  "key24": "EkKbw5wsWoqky6HUW1zgoQLBBoLfSELDLrfFGf6B4AwXx8WabwDGFM6Z4UBKabEw5qcxsNbZpQsnRXYrmmZgnKJ",
  "key25": "3L4MJ7TVb6HgbFBuX4EiC7tUMQVvDPNco5wkXmWyFKgZzXkaD7TaUeLsQn49tZQS1kkbUW7Wifs6Amp7b7a49tEk",
  "key26": "5U5eyQzEWBYH5ExmS9GAiEM2dTV59b39bGjMCPSVTwDd4NgSH54nHJhqWRJc6GHp8BWmXaK6oeWU7uZR5GzjfCfd",
  "key27": "yU8yQEdfzwcNtmZbinQoiMoUkCorPPf6EKfkW2h5csaYs9K2C4pejUQa5TBoW2xKibd6gF5XfmxFYubM8TZhw7k",
  "key28": "2cULLakVE6HBjAc5rHEzCmAWvGnLfLvDKY4YmvfJo8e3E2KeRQttBQMwFEYcPzefQauASPM3VeQpqV61EZANMFfc",
  "key29": "59NhMamahnqu3sQqyVoohXYk2uJUpvQD5FZJtwRCKibcfkKQXHgXyqtFrCozn5kNAoNbkCcDTnqmZjGpZphRLo2t",
  "key30": "5TWBYLPjzQbeosD5KQJpdUKWLPq3fyA4zratYLUBhiEGYX3snDDg9A6HmQPEsM44JpGhvtxyKJxd8VPFwjPSxiyX",
  "key31": "263UxyyAyu6eqCX765NSq8ztG2U8kUhZsEmfHWG9o6gd9mm4ELtz6asEvdQbCS8esPuCU1aNW8QELY4Vhf8D7Skn",
  "key32": "4N346uNa2sJuJU5kmJqafWmkuLTkU4TPmhfZP7zFzYV92iaq38sWGQkTCgds4rmmzJTs857n5DwdALmRPKJBCX4z",
  "key33": "3iz7BTe7YRnjUn9HjDCLBHyxWps2yKgf9RFAPQTE9sWrpUdkhsUc1W32uiQASPekFpcRQgf5DbprPTBWfr5Lmqdp",
  "key34": "2A9HWH9yR4nrS9uQYqdQDj4YNe97wVvGNw3Gg8ZG5BrPm3V1Qnf9f7ZFo1cYwdqDrcGmnjXChNbJ56qe2KjaN33t",
  "key35": "3nhRA2gPVQm8KF6UxYd6xVrUNwMWcMYEqRfZFpe1bDGei7NqXdCLaBZFPqTsarxSYyRDdcKypTmRbJEaXeKPF7VZ",
  "key36": "4TmZqaBzLBj55zoE9kymiHmi4P14adbzg4t8HHJgXLujQAy8hrvQ37LpArRJ999rR8rJTNjgZEsnoHT5jMsQwmg1"
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
