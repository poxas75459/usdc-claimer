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
    "2YNL67dPt6sfqpBw8E2JufU6CEXq9pfecSoz3uUDLLjruMYxB7DGfEe1XURmWHaFKTKMvTZS6ERuoHZ7G5UX9C5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zQA1Sf7UbYDoYDZWNrENsFXYngt4FWdELcaEsq8wPcVhdhxLTRaDSTx8sTMJMzCT7SBjZvA9udr7cB6zXEA1SQ7",
  "key1": "5cYr5thc4zrvR3RFkzJsknsdWPA9zGUvMCqZns8atEJy626nWckWDoyLqcjz8nXduYGdnZEs95LQZyGQvGYo9YYj",
  "key2": "3ySvsAWT4XN5qzP6v39Rvt1Pt87qTbv6TtE5TVwmtS6XGrAFaEZ8b7xKdVPvERE1Ac92jktLNrsEpFtFPz137hdu",
  "key3": "2ixhoQ4qR6gbcsFCjdKSvkaziE3t6nYYh525pbBafnso1FkpeWt9MB7axCXsf1yekRt1xiSbdoKBhUYrRpyYqcuA",
  "key4": "2WfmS6m4eBWLofnCMjeAXSyi5AdsiVArvyzNq9F7t8ReKZub4iZsqZX6U1JvV6rzx2JqbAcfV3v8WN8TEoKUgaHP",
  "key5": "2i3koDq5rMpbbkGmCLzzjas4fxSj6d7HVAsrMAiDmGS98y2etEL8jSiFDsShK6X71ZgQQk2NR2d2bFjsMxLUhV3E",
  "key6": "kgLpPSdsDFN9ooTuQ9ee27QL2nSK9YzsUayMXrYk646xQH1fcPSnh6FSAusirYZj7gDWHz5KbXmbPBMuuhVBX6M",
  "key7": "EHGARaoaukUjJxobzPWeXwMRoRqNJ7aEV1tvMgEwXNW5reVQnxfkaUZEBwVCbWdKc5npeyM3sNSTq94VcTrTBKe",
  "key8": "3BWgn8bG91GQh5Du147AivHLCazoEYzQVSqbgVBo6cG2AYjMMMJu9UriuXAawfqqkjzkqxJaFh5kHTRvKxEnXUgu",
  "key9": "4mzY4wZuz72NF2678mFevhwSRgvPudwrAKALbAvY6D9Vv9qT8zRTNvYkCegX2yq8R77iR4UNRLfGpLCX3acUiz97",
  "key10": "2gGVZ11946bUar3Jdqqrp9mNczyvmf5d7BPRMaD3HH2mZxzjG6LT2teqTVWjy5c2qXCwswE5VRJbonhvSg6srhWf",
  "key11": "56LasHLhicfn5cQjA6xqUr7fAtj89rqzNaanoZPqsjtFK6ybqFrSstBnMTAUi7CF6WEnsBVmWD4CCC9Lmo2zP7pw",
  "key12": "4rJSzx9DsTkTyWJYpGArchqwQJEFuGnWhqecWdcmvEC22z3X6YobabSbfLezJskRb7nnaC5Qw7WSr9TaZX6hHfNo",
  "key13": "4rWAcncMELyH1n73Y7N4fgkt7Lxd1v56e8Ht3z2urnLns47JdXNxpzUF6YcpSx4B8gNsHoaSSCUnD1esibLJg5ip",
  "key14": "5oro2ymjqeTSvb5zBoVfRctQfMkj3sVu5bJ8sjmm57tgJLkmgcX6ZzAZHGtn3UG7e8M7SbvX1RJTFT8RVEoG8LXe",
  "key15": "2TV9TQYuwsHJoSLpRDKhkWR5HvipX3UZktHutNnd315zJogh5oLLgCeHjTQTTq8TLKtDCFsWJneatiDAWArfy8CE",
  "key16": "2nwC8BFVxUa2P2vJEYw8BDtFqR7Y2sTt7c4ocyZMv5dAx1vSdMoZQqafVSrZrTBAo8S1W3PbAMAcXzuYAC55pdyC",
  "key17": "4BqXBng4d8Sdg7pbpnXGgZwfX3apQtpaetTcfrK49X7ftC5GYE5Lt4ZAtaVbouVyGt8DhzjXt56CaraBUejh51G6",
  "key18": "29xjKTAL7FxnVWu1kQ1uEgGYEAtjcCyPV5bgSRRyxdEGhjo9Kho7BBgRcTwouFd2ogAyUUhk9AmFNH5QADWaT6j7",
  "key19": "5QGNgH5EXaFaUKrMi3dZipX1aE1CoK2nuhE2dE37azSvVUCm6z5zEtMGuQApZcdu6VvqHRwbDN87bhknnsa6aFSM",
  "key20": "4tRQKsGz1uBkEXy8Rm6AAbZXjm3r4Pkwt7urkTm8zNY2a2wmn1AvMczfATjZFdRmbw5gfuHJhftpGxQm1xnZ98od",
  "key21": "yNCD7ZqY9Uov6a15dmzoctF1Sy4JAG7vUcVsX8CDAoRSEKP3NXrzxsSup7wpxp3XtLAn7QMTxhPtfJzSVHwoPaz",
  "key22": "4CAoTMkoyyExngvqWcDAJvYUXJ6xrKqisY6swvGGxkj9FvYGTv7b56UJbPT3C5sjhQBFvybMmLqPSE9JPDe2SA7h",
  "key23": "2np9W2D4EsL7FVTGy7ya4eh6XsPP7mxej5oo8zfjzRfAY26zGNehfJaXkorCZxgogTqY4DnsVpbkBFQVxtQgxyk8",
  "key24": "2fUSNvXcyndH6hERk6rLUhM4SJHt8xmWqzdigzWKMNWA8LRwANWder5jVjATR1cGY5VqJnNwMRRcScpDjR4qY1oS",
  "key25": "3drDvaiPQh92VGWjDsDWe2CBDFuKiVQQCBL9tXGgtZdJUYe5EdVEfPDN3cGKi9KtNWn8QMgyqq5srsm3W3vEVsWw",
  "key26": "28Nrd2yJqdofL2H1gw4beCU1i7J1818zwQzCZkSVeSkgmVxhoznwkRJmbDBvgA5adzJhdTa55okFii341oaCR6bq",
  "key27": "4cHEyKeKmLYBPVQgqz6PSGM3aZZfNPnL4kp9ESLEMdNy3vRncN2veudkTmjbYjphfpip9QLY5n4HxcGAJtUhPQ32",
  "key28": "L7hnfgxgxM5Ax3ekUvPUwRc2pbPDJnEWjAdFPMpBzQXTsyvEe6rmAtDP4tuQJdAZFx6iGY3P1jEwiXwoSd7Wkxt",
  "key29": "3btQ4VUUimDAnva6RZLpxZ7xcDjwFJwrs3tVvpq7LBv1smbs3tVatCaXaiHhZjHBRdGnGyptpQrSfsNfqjNabiA9",
  "key30": "5E1V7aFNXTHk7pQZxYTur9na3Du2cJoFvjG8j2AfMEDhziUjJCvMedUkHQzZWgZzzU8r5GdTQaXkEuj3R9mnaJb9",
  "key31": "53T3q8jjiWg79sohc5jdQ8YNZcAQGbFFYgRqhyCAFbyvXGapQo6xocewk7XwuzyjMqiWMLFPFK2zZB5Mru172wo6",
  "key32": "25Brva5g3q7nnk1Yd4zsUZ6AkxR4oQ5TTbS7uuiDXWVuJ6236JvR8rHTPzkVyZTi4zvptxv4eLS4FMwkfhpQLD5P"
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
