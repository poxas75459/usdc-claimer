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
    "3Avr69VdW9fmeFZSchXh5me5jBSJScjCz7P6DkMjz3VJVWjyGL5EywFRgJFvh3nmMASff9NhqGJrVDnNXL8yFAja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EahSUsMHj56PrLnTQk8NvrJP4Dy47ifcX36x5gDgrn2uJV1j2iCKvDuXaARySEtgqh51WhkznmhU8QyKshMgKJ5",
  "key1": "KQmqF68JQWzjZ9rvGcqe4ERZkDQuQmbi3dmiG2kf9TaLy1JijyWwNTp3fL5tVA5E7cjjpUQ9P3srrHMAujj7T6Z",
  "key2": "4E5SUy4yNcXhvdmjJ5oTjSR2XpwtRxCRdWuPHEufPJ6GZfkWAWRGtxijTYzwrUduSysxJUWhaZgx9Aed9wt6code",
  "key3": "5r7m9xiV4xUeKKpsiYmWti4uiKpGZXDJ2bB9bBwEKP3ZvuREBDiMWpT8MwrL6yZ8MpWn1syuUieG352X5epi3xJU",
  "key4": "4Y5DiJYkkvaD6FLhBqDQXmBLCYERhCA2DzNTD7DkYjBD2pRhNfNirW4CBn94vMHucd9SEmzBJNJD24g3rjQuT6v8",
  "key5": "5rtc2MsfFmwvzy5V3smJrV8uFCvFZCLDCipnSyRxWaKFCgh26QcWftQsAXcgAueKwYs6eyWJA1npRSeVwvqRywj4",
  "key6": "3uDfRkvPxLMSgmh5UhqDuocWe8WZyXFWtdBY431abtTuwJvyrLaCxeYngbMgfXrRDu5BhScJ1SrANguuBw5FU3P6",
  "key7": "4N2Wbbf2JXpsSvpTFHAKY5yBYDCwnpCCFGberaapDzXZHzz7e7ACVrx5jTDT39bgPhJvmTutmQER39eBMN5CFpYZ",
  "key8": "5C3ATw6gYGRpLkeNGDVvbDd6aJTMfvcMZyHK3fSnDn6F18Z3jqLdXbaYL6bxXXB4vtWvw1rsqaFupPrec8MvCV2d",
  "key9": "4DMz576T3fKMyavSZEwJWBDkQNCi2chfGhGZSF6L4qW1zAJacVwyX8DkEKySyp77amT8cCdQ8Q2rs2WCH88xHZcd",
  "key10": "xNJPNwoUaAXMgaRzDNDLUtRVwdsk6ivXG5r4cFeuSFvxHnKLcb3vsWyVT8fwjMdP93qgoAxC2KkUHr2pthb3Yrf",
  "key11": "B5dhATnHRXupdZLbgtARXQgBYA6AZz3B9ueLcjqAkwbWzV14dPkcbpicXJHw8qxteQSUjh2vGRmpnBH7ETVCczL",
  "key12": "3ehTKFCw1dHqusfC8rkhLu4TfgzNvynWrBU86G8LTuqR1gNF2Pwocu627pj6MSuTUp59YkKnccqb6KJXAZr2DWog",
  "key13": "1jzgszt1KJ89mbUJ9EWbf7o5jJ1egCv6yLZnj7FahHGNfCvYqQnbVhtV8KaAzX4111qYa8SZgCAWuwSpDE6HGLT",
  "key14": "269a8PzV3LEjibxdZFnGq2kwPVwAL3CT8P3ueRniCybqTYYfW77z3EqTN1pgoe6BLx8pK1BXRqWTLfWaG1mUy5tY",
  "key15": "2YdYZGLSNEBceKmXzbhvnEBGWKpiYQUe8HvgFBHBT2YBTjskqFZw3XNk7ygrhBoX61XMxL8DgBcMNiUe2RfgYCn",
  "key16": "5tu8gRFtYEPMDP2bLzrrTFjGrzyiDzp27D1fhRggTPNFQfirjAbfPdbY4yP6kwAiJXHMQ6bZncBvpbDfmRdJuYsS",
  "key17": "2VoMqfe5sGZSo2h1XKQb1UzgEAB3SN3b37GoLr5aapMENaEizsXkLjfc2YhZCumY7pJoGjrNeJM44DVN9WhHyTuw",
  "key18": "2SQnMoJNGmFnAUWxpFetfyP49bYZRiKDYQuWiaFvUKRZ4mSTcbgzELjFAwHgWNmPx5xWoPPVEqEbS7jR3nkY9BX7",
  "key19": "4bueRrV359ejfVQfVF3bq33TUaZESR6TA4WUryzpaGanSC8Z6bSaiLaddvm6yKKgb1iGcqx3qeCvqwR7XHoHGVj5",
  "key20": "5mKZKNojC7Z7ouE3e2ujmkps8zo2nzPaY5YPSoewLFKXD9m3jQiZ9G19AuGiWagHtc6AdnaJX2KZ3MYjjK2HwMuN",
  "key21": "2bRhdqyZJYXhBBqPFccuKr8eTQgTEtGz2GqNJvpEUKVY35XTZHjj8ZvPWiQN1sVLT2psevLctwyQxT2CipKqmxy4",
  "key22": "pX63Zd7c2QvYiwVkZ7zoFE8bTB3jB3oMxpzYUwoa9jA7a4Zx9Kmvq7JWDFWL3XxAXXpihgdPbmA2edLadBLg9TM",
  "key23": "32hJ7pxJLXdDXFTYgUwdb62uwoD3QadUj16FLmCRVnkAokVdcfXwS9YmUATtktezda5vGmBBSDyhekv9qn7TFLjS",
  "key24": "4hi3p33VRe4FjyXBR56KHW3afPMAfrqgbEwKn86v6oVQ4pKSPRYgbM39KDz15hEwU9bVKvSEGPRnHVFQ99CzM7y4",
  "key25": "3RhrSeLzrYk4ZgX9JvxB3ML1wM84kaFhMQYaXEDC1ACnULLosTeSTrD7SFj2DboZNEqnqjfqasbTMnMvuUiDtPCy",
  "key26": "3kHTepuug8hMZTgSDUUBbsdcKBuK8Y8PdUA8U6uoYjqP452F7tbKwueuvsN8HPdiEkdFXgNdQQvQkJckrGqZdtbY",
  "key27": "2eQbtvqisZXQbidZeB8LHc7MFVLh6ZTHHQEZYHoSmbPimVrswU3rh4TrPSzRytqvLwJNAHpzh2Jr8xUEnZ2VpLf9",
  "key28": "65hYYFHYtGKGS6YAxnRX7fzvEtk8aMoLzCkqtoaHkBffSuh2V7jsQirAePbxwjqdWa1tQs9LquFiEN5rfKDpa9CR",
  "key29": "2oUhjYqdAmrSoY5A7DR7B3AvomLxzxjGDnfpuS9cK3E6ioGTRZA9WDwGKneDmkpDvKDX8k8tTspH2Rae8zEDP8yR",
  "key30": "3XstD2qKumxbmQm8YJEWDFaffYU2NkZUnUWwRTTub7tH1ecbbBj9jqHG6peFDztRcoQWohrkJj8mBECNgjwjx1rY",
  "key31": "2JxpgV7dpQoKjtBTWsa1WPQ4yW4Ek7NMZ56N8wZ434kk219jQhVFLdPP1ceGtxXBtRKMk9eS2rYCkQXD4n7d7ZDV",
  "key32": "2ieWqcUiyZnWug5CxNtaiJyb5r6LTLKjKmaquWsM5JHs8o5Tx9ZqBwZSQgDrjGDMpT7e9oACJn5s6iUFQyLbRk2A",
  "key33": "2zZLSXPgNza85aLjrhkL5QrCcDZEZKDC3vGnnAcWxX8FkRNannrmHPkmgqWbaRhzyXpDz9vTYYPzvSmKDZ5UdpgT",
  "key34": "5iXP25EgKDo31aRjzd7eKbDfmjqrLPtPfxZugHsbodYYV8mG5Wa36Phwkn64HWDtaz5o39VBqksmWpk779MfVvF4"
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
