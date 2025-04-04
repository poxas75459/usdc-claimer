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
    "37mDsg7NZ4y5igC1ARGPzf6vfuHQpqV7NGGpbFVpCVuySwLou5n1vXwBNREWwUdWSNLB7MRougCuUbMRqBEqP69n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42jq1QtPAyErY5aF3PctH5u1wKZGDTpRAe361eYmc5Au7xUhxSj17qh295rDnmftPyC4eQtPPLboQKvPVJJj8wN1",
  "key1": "1PUHrPQXyEGKHeFFBQ9Mqqi6ERGKBmdqD4njZqHgFR2bQaSt9fnw1BhehSFiRaFT4qmGdC41p6HPX5VNFBW2bag",
  "key2": "3138t5KjiAho3Rc2oh7tsKaWPCyYMMysnfpDdV4HsiuM1Ea1g9VqoJbByUJ5EjVjBaY8S3H7aHVxrRnVKiLFmVKc",
  "key3": "5pH8uFnAF6DFWLhqQatJ4pZ664cMCfU625rMbnaGyZnEJ3URmNz97QbN3qSnoLJ5AXGJDnzM5rFjZuq54pHVwrNs",
  "key4": "4huaYXBpuQi1Gr8Rh2WYFAHx9sxNSUxCZGW9oS1XirjnNvmFbkHsTmq2KnbCfvUK9YzsG78inLSxDP5hkEfd1DYN",
  "key5": "Dcij4tCZJWiB4nhu1mBvsaLQku3i9tAo1pSenEvw36iw5cqPigkyzg9Np86B29cVWUQEpZXw1pwQ8x4duXZtRst",
  "key6": "2JrTR9X3FuiaqtbAUmyG1zs3J31vPcjH4f7pVs79TnpDAbeDiLzgyuiWWR7qZ6K1vp1DPN4KtFT8yqDD53nyen1p",
  "key7": "3kNn4t9ZVEXSS9CeEozbRJoFVtrnTggPGhpyrA71wGUNfbfHbMAu9oZEjZbyi739A327tam4U3yAyXPqRbm5Yck2",
  "key8": "34wkKn2V5bYgHediZxPG9x79VVJvGMG4Zijiy5yGCTXKPkQ7XyYH88eAGEEoghW9XjJrFAXBT3eofnbGvuE62G5f",
  "key9": "4w8SuW6Ex5yZMBmr1AgMWDTHiJ8Zo4Lrd1Ba8frw4WX8veiHnJSCi5xoRYnJxJoo1h9WerrfjdEYsNpJkCUvbBeP",
  "key10": "oc8XWU3tRifhuT69rZquwvcq8DGsXdKmZuAbw43jSjv4kT6kDy98kU1c82oXg1pCpHi9PA6zrLZJZBob6BiuPuB",
  "key11": "585HG3jDbkAum6jFrMCAcc1Vx7HQsHhawGdUr8QvPXho6apma9TQEMETRN7N51V3zh4PfVFHziY83BWgT5d7pteQ",
  "key12": "YPy49uuFes8Bmjc7h4EZvyGSpPoENECZsSobcfSzSzQW7GpBHxNaqEFHDYMk6aLBi9yeiFuGFTucdr4Z62vrCEK",
  "key13": "AbXx5Pa8bswx1PzitX84xRJFL6SgJufF5GWyFGvdMR9DCEAEvYvRQoDcDJ3MxHam2rfc3A4ARsv2Ctgxfni5ZKc",
  "key14": "ch7euKDiB1mqYrJAntouJeznDgQzrPLFY3oLHKAJuVoZLyKkgU4tP2f1NYnyzh8yZsBCNtJ7yDFwubNoWtMMLim",
  "key15": "4AfYNc5VbfWYG234jGckb16xHqxNKqsWPKaauZ3J1Bm7BVLGCJZhaLJHtN8V9akxp8B62SbHZa4Kcy8t5obpkBxM",
  "key16": "2KtKkCQoqPpSAuWD4GJNGPNLEpgh6jr6Uf6NPt7LzHEmwp3xPRcwKoVRKtvx4WASiHBS3HEh3WT5j6sTGRkkmhN6",
  "key17": "52aXvU3VMZ6wcbBCJmEKQCL2tyx2YaVk3oKX5BmbQHbo2oaH5XBKdjnSmFPi7q3X64V1pQnW8phkgQcFw1QSApta",
  "key18": "cN5fewgtXcbYYe11gWgKPoqpooBF2cfdQWk8e1qeBUwhCryX4pwSgt47hZiqGdoKy5Wr6RfEabsYu2t6ypq2gTg",
  "key19": "kJTe8jpNfdfRMNiGqTRBpprZTip5mG2WVu3PSKaqxhnKatowSBz4ZBUZuEy4qTFnabKeRfZGTaNSSduu7GiJVDk",
  "key20": "4FAXFhj2aDiVoTQXmEUmLmfsAjvfWigzkTSTpq5oCehxaHbqh2zB4t25ML36oS6TdLMUmkBvG8w5R7cfNBx3NAhN",
  "key21": "4CqWEZ7mWWsrXk3YMgmynTecHBEyyQvdc78noMUUuvBB98TSryXqWAyEX6JGeWw3fYPAPPbLwdkCa6AN6LgHubFf",
  "key22": "4VrPWhVqHieCpuogocLao8XWqzDY7VrQJA559kYaxmN8gCfpNieputUwXqiqqtaA1UFSXJX4TxnM9TkPRd6FbMB6",
  "key23": "2w4rcnfRM3esDKgAThqNgzHvbSej8gffnoPBndxuPoBu882j7U11xMQo2zEUsy3jnjdjyjVgeBMwYvq1wPkZGDx4",
  "key24": "7fkNRuSXe6bzSXFo5ynnYySX4MsHujEMSJ3BiAWHDhjovGkqESzg8oE52LERL5ymG3nY1VQTytZbdQhS5pUjvW7",
  "key25": "Eqh3xjUMEPgEGdj88hw5joNs5x7xVxktUMi7NfhePd3KomWuoEvSeyD38bLKHQsmN7neZDHAeqsJaeSVArK4XwB",
  "key26": "25HQENUc3nasZQJc48ZtWQJkywXC5ojNRCxgk7wMqyCkA5QMd9BiednHBEpHK9vy3tQbLi5oanfnGYAdXNvkBa14",
  "key27": "54vckFPpUNdsmDpKSEc5m9CdjPTRdMLYCfRJ524zq8GJzL27oG137bKs1cCqfRvfi58QKMHQ7SMuicT8WRNmxfZW",
  "key28": "4VrR3c7JMqsvpJApCHsuYjSBT1bXrEa2aHBf62DvGfg8TkchWGFRn3Vfgkg6idUADtLcinTaiBbMdDihnSwyWKrH",
  "key29": "5pttawwjT8QmGwBedHWLWrV1koXjeMvAz7PqWxDKLpPAwGySXP1TQ7xBj6jyrZXC1dX7BnKRtUJpfkxafwwXjZDv",
  "key30": "5f1oG9uJNLvMyMMjGoKzrw2vXsF6ofzVMqznfMqZayaNCaqEazvgjcwHD6kRM8W9D2UpgYZ5vpAPefKxFyaM6VxP",
  "key31": "Dv77B1fLQSZs5xT4ZpP8z9fiFDvWwTZ1ReimMcb4kf2rC9hZNdfnW89tM58qebqCY3Z3Uf4N64MFptDGJm53TPe",
  "key32": "4dkArzyUXD2PwnegbF2CK9KMGzwRfeF9sM62bwmzJfGhu1jo6dGqYpCbyHEUPqXL7XZs91KoQe5pG9SxZVoB3Lsg",
  "key33": "4i5aPR8fF8rXfBQipUHmDUpVNnjQzokdENxPgttJiHG9T922y7wNkRKCVmGKgQoKsQk5PfehBEwwsiMH3F24noub",
  "key34": "EMqYQ5ybGQSM6m6tyZP49WJW4Rih5U5uBnWrX8aWs5GHH8Vsk6A1vQ4EPaDzNzuYzdmaE5uPvhTQxfffnHdNUP2",
  "key35": "5GYtgddY8XQQaVPBPovceuBWdBkXLBPiB19Rh5thciDrYwRcEtq8xKHcXWx5kMmUrtHpWRRNWgCZkS36GMua1bJS",
  "key36": "21zF7H7heDwcEkXU3KrL5aYjeGakoPvExqjy7EhHF8u2eTwM2ZPh2NpxTGaCbyGMVEQjA5nTr4UW8ZqomfaRMiuF",
  "key37": "4VLHmjeoy9mvaxiMWxBZDukQ9WyfQW1B6cwd7D5jYDQYJdBqqKSEtbWGPNbscuCrr5WU5TFtg5j3u6tTaZi8dVvQ",
  "key38": "4dnSKcJ76URb3XaF6yxUQS72g8MyKZLcXxz3Z5xMSkoVMeNta8MNQRxCAcBpau4p6HUCsA4DxT3KkSdgQ6YaT3XY"
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
