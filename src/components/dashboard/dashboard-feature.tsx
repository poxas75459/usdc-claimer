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
    "2XtKYWEULDP3NR4Kt1K26XmS6bpPfVztoR22vrzD19usZURzxt9W2oKrimGEDRBQkjRbNyy4XQeC22imZnnq57Rz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5saxZYWwwKqMydy4xbQm8rVa1neUWcmxM1vD4Wj7gpx6RWvofoEJhN1Jqaca2dsX55fECbKVgs3wZjGfxvJGWaJ1",
  "key1": "22eXWxCedNC5YyAPx83nLKhGKFYApBenX3vsieRQ941j8qeuxy1n6F65bmVSixonnueJuepeBBbXo5bXDWFwFQ8U",
  "key2": "5Hfzqmj5DmYdoofffq7YPKjPvZbEiHg7X1bReHXC5assrXg5NHUaXoiUeAgvTpCECSvgBbVgPQKxngCMFTqvqtpX",
  "key3": "3CxwfDRjRNYdeWVn9iYtx1uNV6TVQ2ytSs1d6ZTkgd6mY9Rb4e6m3EDSWfcch2KxqsyzXzSt6VrCtLCrtv1f8axG",
  "key4": "YeWmNHiNVRjb1B5u2RRvMTCubuVNV521dN98nNQtjoLj7yiW9JtNytaDGZ2xPXTYWkoK39AwnPEQHmsunQTU2jQ",
  "key5": "4ZcF6qARCeAf57zDYWTJbKdoZbNCwi1mCoAwMRufH9ZGtESxtRNw26e71eT8DoB1XE1meF5aWJ8Gjt7soGyBHmn8",
  "key6": "2xNWPiQpAJLcnzo8bcUVTMhEVskbSNdUhqorb9Eb28Y4oqJRQisjgynKB22TR3R8HRQgGbYgqkC2y24bPCASTNP9",
  "key7": "4f1E3rCi7iqni9jjSXmkPDyyotEQzzYx4iQ2vrFqMhz5QRPkCi7CwP9ZAEuPXp87BdLGBkZBYFQ6mauCNC9GGkW7",
  "key8": "53PdHTxy7jLiV9E7NFSZ43i4SaBdQ7LSSZSemeBPqByin8fNy5uZXDkxemst5ckQiq8ZqV3LZ56F7VJN8r2gV4t1",
  "key9": "3c9J5kdzqPek6wqaSDUZr7ydcbmRMXwvw1dUKBPjNczThTzun2j8dMn49ujmM1bEpaYbt2y24bHPgSaa4dEPn8QS",
  "key10": "482nWd6vVNGLh54jk5p6wE7R9UaRJ4jnoC9dJ3iwCHKdXwM1z5Qkc8smTRhRER54oQzAw93S6pQWypKGK4yZjDrD",
  "key11": "yGuT6veCbVr72jspxHn19tgJGjcMfHuF7r1KKQo4bS9UTcopjqLmPB9skKLS8z2iqNjgNi3Ua1nsTziGNzYZtpq",
  "key12": "4Df393Uh69gyBDr4tNhLcetLMwuQ25j82hZKpoSZbZodYrnQTYuiVeViZRw9Frpibfy8Gy6fbGmR2wFmVh57YZ2",
  "key13": "4edTkDmUxcDpuskgoPUbwS3NB2hMTrnT59MNGf2q59RzpMdxVrWN7qH7rJez1pWqR11uN2RUn1WRaXBnTs1k7zNd",
  "key14": "57thCUTWw8712p4HeCC71c9NTJffWLc5zvPUiXKqdom6LvzkoaJ4gChbwdzJarBocdF6xRSCLYeNzZitzNnPaezk",
  "key15": "4krHVpKMkX4xAZbZ3vQ2gHyuVFUtxsXqN1WBRCWEacXX59vtQ4co2uAgiJ1oDjWSkhQnwL3xmXp2QhiNfopHwXnG",
  "key16": "59dQZZLHUGuwizqE5KXZ8tCMMVvn1ozabHLUxj2JoQT1aLrqnA24Lg5jm1rsP4XF8Cgn9preoiAyWSLDwtLPiqkB",
  "key17": "5LduHGo8SSTqz2f6tbEcBFeK4zuiqgtDw5B4TfK9WhnsMV8zirmp8tkkQpZsEyPqQrqjw7T5mPDhxTBNnbqbhhAV",
  "key18": "4azLg8iLdWPBc3tdk8p4UAv6cigEivcb93oS2m5r5kUxPMscSCMEFh8bQs6Pwf6T4EMBgRw19tNAEwuXp83VkWLe",
  "key19": "4G5AwCdXtJ28wnaASZoNFGKHQa38KB7Y7o6UHciN9ppKza7ZgjrpxVeHGpicmqVKPND7MBTqeMPt6Fqh61E92g9V",
  "key20": "23BppkKJJdsqLAqHsMtGLzJRtkBD8zymDCDsAQVfpxwmVj64HQV7zAsTVVLBeNSBnAmPSAUNCT1Mu3nkpetJ6Veu",
  "key21": "4fcrW4pFC5C2WVc5C8jbibdDUF6YdfD3gQNYzzyudGSkhb2sDqoEWxbR6fDf5zGm7SbTYey7D3aQRXFhSPu77ExE",
  "key22": "4qnL9wCVhzUWCK5rJ2ZL3aERc3kxZJwHkThAEUfp3hfVWswRxsdE7A5M2ocsc8tZmRJAAne9kEpjFdmHxWbYqKZi",
  "key23": "sVrsnbg5jQrghFK7XR6gxRXa1R7T2QVZhSzTme2GfbmNzc6RjJrdDqnXycGm4QC6wj7gFZtE86sxuMrmqQFMp1q",
  "key24": "3Sko3vTAPqKZrCwGZ4fX4U6apra3Cyv7VfHqRNDNKMWpTHehxQZdU2EVYSu9ngvW6jDxztawut6YKV2qBDUJYv2y",
  "key25": "4yd8gncmC6T7rnARatwhR93KQjJEQoRJdg3ELaq8VdTrMQTY2pH6KP19mfMAEsRocJq1JEXHtZWdbCTVHN1SjJYs",
  "key26": "4FL7vH71pGWzVTpbUPWbVwJzrsK5vRTk7JbfJDrkuHiDToDX8deve9nzbbMU6SLGfHXqrarNViqELR2734Sm1fNm",
  "key27": "VsgoKzbQBMZ9SRvCjTdHU9oLQxwiPYMiFNSGM8n3MyoUT6ZXQCrLV6Z3dLB1CQHQ5TGcBnXsBGcEbGUVNr2XjBh",
  "key28": "3rmJ4XAs2vu8UndoUE58xBiNySfny1y6UrVWPFJduXvcr1eRmg96p4niEDwAQbEdqUcxt2iu11fsFJzvoLc1AAJ",
  "key29": "Vke6Qb822o39G1AEfxfB2JpwMN4cw6pjLNWvt5EtPMVyYxRMhQpJCrxCq2tPrdZXgufefeM5aDzC88QJnXLfv6r",
  "key30": "2ViqtTEna2XTvyWEsSnY9iLtXvvPBxiLJdmw1DT5zTUZLVVbJeAWXP239jq5ceDQ2j8ewDa4MxasBnHMZgCy8zMT",
  "key31": "4YVtKqCkJbMD2evLUbtBEpPAzUFkKy6d1svEaVZUWxiof85Heii9WGjMaJYvtwfAohaTzLc9mhNd9FwA4bwuytnq",
  "key32": "5q9NwVvAjrES1BNcsSqQD6XgiaaHMy3RMn97p4LUebkiSuw1yDDfgVkoPDEazCmiRFAg1EiwkdNdrPSQG3eTp5ju",
  "key33": "5xPqLARnKZvcWkKPxDz378RFMrG2wd1Ek9wfzUrX8riVNKdgzY4G6fXdTH9PzB3JRSQhbmc3WZqq8pog7VtgQemw",
  "key34": "T8QhdUXDHRExV3by5SgBFEz7LJNrCtcRxN3VpinfVVrJyivyAFNZQEB8bd4SmY9srQk8MDcDyUbseUGZ4dESiww",
  "key35": "4AnsXZcVZxKhprr6dLXPDXooFFiWxaxhyjaX1aUizqrawZoWaGMsTkwwR9g4JHqDwAQT4gqn1QAnFhhQQDBYxnoi",
  "key36": "4ZA413i8qvr1oDHAZnpbX42vt79u8e8erB4JfNmqrTNrzsviwpRtySfQ5brHtj1d8rfhE5pKzkeCyrkpKYvrumFs",
  "key37": "2cPbxfFfQZwESRxovG7mvx58MDVdTfwR2ub6RKJxf56MozjnasfYrdScHzc5WnjFkoc5oUSLbXSoHfr9xWtRd8cB",
  "key38": "4tKWYKrVDtBvdhPiMEZfWB91kys9tUsq7UnmoEY4QW4HvgzHPYhwJZDvZb3mBuM3HW5c3frsFCr4NLDah8Cn6QnD",
  "key39": "d44HgrPHWM9pr4CBp76m9ELhV3BUQKXuZAgr5UZ2ZAzX8TCshaCafLajBKPPEjYDMYQYzJU9oh8jVLT4gRHh2WR",
  "key40": "kwUcoev2NCuBrgvRMusAhremqfjBS2Rb7xKYojGtsaLuFaRqMFGFm36BHAEVqBxgRqWNjp7USY93BDH9n8LPWtM",
  "key41": "5R2MiCZtT8CmR65QJ6ifuAJM4h7r7VC4RZFUsuc4mfth6yPa5DhimkgT5MCNeKTeYKRmwkFGV1wveTGNUAow4Apg",
  "key42": "3M2ZNtr81Pe557gFaiokBg4c6yNdm5KhhTvt8vAt7F2tcZz8gkWSUtMX1eUZSmhDF4kxPXAfbSfm76NLQohDih5Q",
  "key43": "436ekqDXZdYt7HFJcBD2UepGuBwKuhu2g93iCUiSomSesudB13biALZsGW5T4g3aFha2a5WUV1JfGdu4zLPRvpuH",
  "key44": "446aifckZpkZZ4FD9LuYTN6oGzw6PpJNSx9oKtCuFk5wAS7ogmWgQj9sneNqHueb5HFrQJvok7Wq9a4nzLXpXhJg",
  "key45": "RTMKP6nKBux8LBaYEt7mYykhzabB8rnHN2tHW2dLmJwxDhK6tWdjCZdSivjJreGADqarmzriMPEUtRPvtURo6yp",
  "key46": "5bjSCjaZASX9frYpPqBHE43Y4DDGFhjMTSDbfM1qaFYrsbTMKgwrdDstXSbHgNnt6g7BGWemYQWiArbU1SYktk3L",
  "key47": "2Dnan6GtRGstc1NY73zWaH5UGyFgHSxDW6XthzkW2WUjD5zjxPLXei3vi57AP9rBQE4MpGrevy8Hf6StJJ8oqCiq"
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
