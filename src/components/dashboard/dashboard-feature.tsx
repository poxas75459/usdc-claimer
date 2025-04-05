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
    "3A18hJ2rrL2Cm8T3SZpiPYhBdrBmFTJb3QN2Lq9zM7RJm4iWUmRnvy75V9bPMbBQgh9uX83kBRevXt1jMWdA9bno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D4SkbttaB1Zvv9SoTmrzSoJestarchcHLmmdUF3Hvo3mqjM43bEKvbiRGr4tW4sb7EnzFSTBAKfWdrW4KfASr6V",
  "key1": "67URBaiopHWeK81bhE1V8goMwbGrNPqw1YZ2xsnbS48uADMAgfXThRtPtY7YPSBZc8oDFv6Nj9RB4BZQxKNSp8MG",
  "key2": "2J85BnmpngNCaXvTbZioQ9Fat6kh32xpCvepVitCjUU8U6o6vV7Wzrhtoy8DgHkSykvDuZ1rtqvsWnfYSfnvxDW9",
  "key3": "5zo5h2SPNh8LqSdHpv7TQUUWoCu59ic8bjrgwtpBV28e43VY9RQtJx34QL2TmBBg2rmwh1pH2FzGdNN97WKXX5B3",
  "key4": "3nGTz1GSySVYTn3kfW8oPXk3B3hMm4FAAsqCUhd4gWmACdfCvdBLt7hGdBPLvFBsZMX8XT3788Q2taKFjxA9spB3",
  "key5": "23cqr1uB4aZFUX5jxjS9i41MYmi2eS2oFJgaTYiPuB1bajYooHYa9WWD6gTcMiLQBaGkXxhizd4ksFN6W1soje8a",
  "key6": "4fjNd54sneH1b66pcsTGjRVzxMLomEWgQBo6ZVKvmJhBvWzEZJE3sG8DSAeoUhU6LcTaNqYf5iGSRUcxr8BiqXbB",
  "key7": "2ppBCDHcSCc258YKzMHFDsjvcNmk2JLVDKm6EtYoVGQgxi8e2yWjbBKL2JH1jgAsZXMEdi75hWZwMCosnwkr5smH",
  "key8": "3gebk3Kbm8CJe7x7pWhMDfo1kMmdhkcu3Vif726NdY47QTWAh74vMx1kLYNV5mJ638QXu26sz8QELzgRuGgZqBgB",
  "key9": "3qJ7tcoyrEPtaeQSTNhkQrr1ebJwxbkY7FhTZZ4rdheUC9y5G2JCR3JgCqnKULhfTAX1U6gG4v1z38dWyoH3J1N3",
  "key10": "2vUDCu6EPXtqHT5BZygnENWEe1Y9Q58dbKxB2MbVwiXZkNhR4S1NXc8kgAZZLeCvTH57vCieZ49EHRCzPV51R91v",
  "key11": "AoXfQgSAatq9nTqQKhhnKJenZ1Lze7kpcTT3NLeZ9pwu4URmn8GUGU8q5357kjcFTxAEaAAfEEECCURidbHLSRo",
  "key12": "4SibfQFKNLFYZfXvWzJuaYCtnPmLTESUNMcephZoypYtV6b6uUG9zTpwcLxZnbEkVahA3mnZ9JKmKvq6zC9eTNVh",
  "key13": "467cHVscmdUpZeeg4wkMdurpAVQKNjSghcrGqmYWmrGwhixCR9YX4wyTDWL1mn1gNqz6ihFqfW3GkUkPK95t9JTF",
  "key14": "DH7pUsVBQmL2ESZonCRDyDunLpTEAnDF2CUdFRtCZCUAzuMZPjxJeMiu6nGsvseRpsfYGJiostLsrRFKe8P6M5r",
  "key15": "3ZiqqxRGMtMP9HFjr21fqVFPmMv9AKc4Tf2gNPMf8mL99snGvYtDmYTfXN1A5GfAhrrn1erRkyxV6vU1s8zE36n5",
  "key16": "23CEeE3mAFrrf7ed2f73t5uxMUfB8QwbeHhKjEnnUwoNzMNq8fzUB2vZQjMfc17Xr6AXacojdJAkXukjUuPukdcr",
  "key17": "54UovH6QWHrA77xAQRsauQe3xC9smP6pqJdNxXNR7Huyw7RY7AUcM8Kn1xfYKZnGKqDnYpX3XNthMEYxfpjWRGNv",
  "key18": "3spyttqro7y5NxPAf5oiQkmUCXiaqy699nETzEmVEGihwd1rADruPndptjJTkH82ipmHLnm8MraQ5a5phq4Qcchn",
  "key19": "FXAmZuSoiRsvBSzDNet8JhzQXjnousqTSzvfmhDsCnNkXxrKgemQcfTwPfYqZ86ZfBQCTFhaH3tbmz3KRaJNNpp",
  "key20": "4MFhXrBt84AkNCvWMvqbFZCTrBhF9y3BkapZXaij1ppP1cYLqPtVeGbALdFEWRAdH4hS27Q8FMkkHiPcgqeSB2bj",
  "key21": "5mUQKHmK6PwyJ8Tr2vcHqcmhz5mHsrpXQK2G7revu6gebdT9DA7jhTDgtpaKcM6CBduwJaX2ujueKZFPQ28AHhWb",
  "key22": "53A6HFXbuzSLKhjAbKEEiim59hSHqSY7wgzvbt7MLkSWoDAxRR7AxVp5URjcdEHWztoudfr4KbxYvUbVtjSJ5jkH",
  "key23": "D6SfVyLkk1sV2yTkMXNp6aBu3hwpxTiVaeAtEBY5jrkrggF3S3troAWugtJkVpKjFdn4u9FWzDKJ7VdEm23vRSQ",
  "key24": "3ENNeQzoEmBuEcGncmwkcbCrtYTDsrYSN7i1mc15TY4BkQoYab3qSn4hGDWWeRzquieby6L84kurvRyx2yfSDWbQ",
  "key25": "3SWFFY9rBVW9pDkFKce7aXzxEEmWqDwj71Nedg3uBnrxjvHnEngrCtCQBu71TF3Cc2Wwdc9mJSCP28r8EQeC6fyU",
  "key26": "2MiMYRAkDhFT1YofTFqfL1YoLar7196APgVXJwaqVQBLyHhfVLB4N8vfbRS1pAtZzXNyHdsSSkBDPzcnj2RTw8ej",
  "key27": "5diMHjKRAJibvfBqZMmGmvFBMk6JMX6dBe1wC2urwA8gWPsF5PoG4bappwHS33oeNtFeDWujrGdu3hhEoH4isRJJ",
  "key28": "5ssZrUyUkaPaACeFm6zse9nH6ixHXbQsBS3SHUwMjMYQu2weaEHGaZtA3AN98MbNxLYKnntuDmEcSZXRwdwFZcJF",
  "key29": "TDuFUFAkJtb8m672iuJpqWTnbQ7vWeZcLcBbUSzmPcTRfsdKToA4oKoPwQaTJAscfKfh6gWd8XZoW23mUGSRpYn",
  "key30": "5qWc17Xx7EUNoPtBN8PBiKuzZQR1US7FD92cxVesHb5gvGMz5g5RFxxWv4RmdpCZQw6roUKpdyzhp25UjMQq61Mu",
  "key31": "yUomLaLNXc7oKszhEy7bP83tiEoXkzse98ByRpxo4zGumVzNDmvYRnCkMb5hRbCe2zQPsGx9uStJJNhyP8WSxKN",
  "key32": "2qaoCB2jAUcxdw6LTRLRbYPFBXmSt2NVYV864pkUyhZvijjnmmg7VKpKtTcVfnqt6Eq9FxEQGPQ8GsoT2UNcwC6Q",
  "key33": "3k8scyAjG9jRQmhVqX6Cuhr7iX4KaD6RACMmYZyNchzBrixmkiYVyEn3JKypVpH8XSmd2xwd5Tcni9Uf69K9rwtU",
  "key34": "aNJyi9rm9GtWNeEQ1HRwpHozKAiDEeVKgLfwZfhAidRpicdF9SjcQhgfino4RmEggp9oB3EptiBTf2TDqDmMDbW",
  "key35": "2Y2A6Zbe2ApFBXStVJEUfkjzrYZwSqw7q6oeLFeV5FSVGixkknoL3eGhKXx61zXtAPxKzogX25J6xZzcTo2mB7va",
  "key36": "5Na5HSZjPZCb65nDYr7gPb7yM1RtVhiTkrDo5aZBL85vpyfDZ19YnN8ZstTPhDKFZ5GVRCdhjRUhD6op7u8qhPuK",
  "key37": "3YXe6xPc9TmyjYJjXazaXJRRRrKTxhgcaCoA8SU99DjNUQTTMQZ4QjWhWEcZunYZX5g6E2VKc6oMakEPhRCEsuGH"
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
