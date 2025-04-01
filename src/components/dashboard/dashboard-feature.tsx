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
    "4NTpKEpkQvtAkXz2wxfQMHbXWWudjD634kCUzXYyFb4p86tz2gpY5Z6jZ84a3iRgf3aqHzNvpLRDbZrQA1jY1rdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zj3MQnb7BqT1wfPhBE6c458oPAXytacasfpAzgJ4WVjRkUXdu3goSCtCENnVM7wEdNiwhoph3zJfUoeTVv6eDg6",
  "key1": "3cP97CYdCgYPgr8ZuuDF9PECotTZziDgZkUwgKgQFZqNfU2iiCqbfJESHoXCmH6QJch9e5Jvf7No53fv2LjHeEhK",
  "key2": "2LwGTXAZmNCFnZjCLnq2Ay7vYnB8Lw8kABbgP3h9TrYSapm6ZFfgLHMtFftsEuAfiw2t58wwzVF2Z4Gd8ZwFq74h",
  "key3": "47Li3ZX91vSfLJRZoaFVZmK2hPus3a27D71ejFjJwsLXSkbdKZ1ziNJJW78MBKUCkJZxDTsqxqpLnaJZzXd4Vi9a",
  "key4": "85oKqTkmEzZceUtmRQErfYK4Ha9MgM2PRwSpZL2RAjFHXZrXqhcgPHSKxabyxPnzsxpZZsFEEZ2Fp39yW46Hc5a",
  "key5": "Z67UNU2VfYPXNQkb8h4QQhxsfFAFNhyMwey736HKWihYdmK7Qi7Uo2zYLmDSXFvxVcSjvYojKJAw7njmsXAkc3X",
  "key6": "5ZHCrhLsSXiZLCx6pGEq4hv89LLM661NWYPYKdaybKbwfJY87MnZHU497Ytb7H96TLgpG7rtDCyXYeczbGz12qKn",
  "key7": "5K5B8jSqqDyEt6pcAtxZurnAE1bgyCpWTn5mvGtqfaDM3TkkpUMUGzSGgJT7XQzYciTyUcp84rFiQSWBpaeRPDwX",
  "key8": "2VMvM8k7nYb1sfEp2SSH3eE44Acn2PApafq26mxXTLnBWhNynRb9B5YQAUS77qRzKewPzZJ6eS4wUBoEcxUa5aPY",
  "key9": "5PyBiBADbAerFmtGHsDpkhZH5fUkUAXYzbgU8XRoNVC4nc9155YSg37y6LGcXzG7XqC7VmmdXwiubF32JdR7hUu1",
  "key10": "4N75HUY6h7Y8e9BqytpxQdS8dBvcoyXiV5cKZpgMH9kgt3Bw3B2UeBuZVCPxN1FtKmCa3J1ePiq2k5gumpqSxcVx",
  "key11": "5raL3U4628y2Zh1o8dfz7oQAPKvYaud3RtLcfqJ6j2owFnNhC2WKK21G5mQ9SS8WvGHMzynXmmVgaqFn5oYGjwRD",
  "key12": "2uxum3gCVm2Vg2k71AvZD8Xs83c7A8QndPfvZAvfTuyfucWvhhKTajhJRvzKicZSXcJFwsqnJa41wLZjA7MweUEH",
  "key13": "2qx951GhdBwXAqE96VNVoStNKENfCgSi6RdC8vRqaHTQr5phM7ACzwCdXTbaFzWzD1mtRW8LKyA8TnFJzgWLmv3X",
  "key14": "EEuWLvw8CCR9i44T26CiL3xy6CZZ4BRTYAxLGQMkTi7WzTWNtKySBAGBormJP1DkW1xY1bPDpAPN6JqUExJSnqV",
  "key15": "mbtRapHFfe7csR5EV7BVtAVLM7kdi3sVNdSj1p47RoupnpyGKCLTbz4QqxXch2P1iC63SU8sP87MzZ3nsLoHRM7",
  "key16": "87bSgD1Kfqg64dNKnqfcz2iLCamvE67SeHc12X5NxPrWzwQ9ArYr5jeRNd79YKSMaeRwrhZKEEfrXL4PNX7Jb3x",
  "key17": "2g1QXK7roNWov2DFt5M5ssSsXBDxBY22B8HnnxPYjA6PhxothgqtAXmvvEGyRht5ZrMWpwj89ZtFqFt6DsrAuC9Z",
  "key18": "HFUoEeHdJJB9cYnyGsdPdrtbwChbaKBXdNqabMoU9Th64UwZSLPgmyxRRAnxmkQZgkpXMbeCakAo9Pykiyd4hEP",
  "key19": "4NsNdVtgEYUa1aBQu39tGsFHigd7is2ZqW1jzzRqF4aY681YvYabmRcEb5dWCedDuG3NtENSvoGmEEUmUJXt3qFJ",
  "key20": "5qRDPcmvA7AStAMJy6vPHKp7xE8xvSwkaqzwZ5iPrjKbRQiYTmgELvDmMhyaYhDTA6KNX3GhzodPo73sAJQBjBeq",
  "key21": "4a3S3WTi8XPWkYwk7uoGMuH36gc9GNxV6ut6z21MVL1CKDwhKrewoZzF3mh5WMgAgyq824eYR38kvN5dzYuS62XA",
  "key22": "5nKFdjYzniLnUU9vNn6zZTMabxep7PSZDUwFGxhLYdzVVW5QtUY94teGmW2hXxQVcwT7xTeb1JnS8pu68k46F6JJ",
  "key23": "3cJd762kBwND5VVx6ySW5zAwzgdAB1k8fCMZ4yd2JtqQ3KVFN9FQsUZA2jmk2w3Lk2c5MDcQaD6x6LWyEKFb7N87",
  "key24": "4H9dPiPrnweLzgEGSADkca8MoAm4S7oTPXmVpUZmHzek81nGExrdYtoy1HYk6PPtjLHFgf6esz3bS99gSAMXpkdd",
  "key25": "51EZgLAf8wbzd3vVD6w5ce1rQaupo7dkTRHVR4TCQ1pTLNSE4fwcYBGQD9nYz5c28sqbtCNsWe7va9Zh7YBYz8vW",
  "key26": "zkfsSgk9nwvDKqP2tEPotkQaRbkjAB89HHLeS8TmcLeTkHWjTbWqg3JhB8L8EAWSoNQKcgLtk7o6SqvQPu81Rpc",
  "key27": "31NyaCgdpgjSCYDMRXfSBgNEdX5NvY33oyUwruoGcP1HujRLPeouiCisn8dcNo1azgULTugkpKmpNSw13eshEW81",
  "key28": "3p1AGzwv4uMNT5XRSjikVsW2zo5X7hCtwawVYynZP1qA99atEinuswPtKjgSa7UYP35ebRod36dfZQqJ1BFUxoCH",
  "key29": "4Sx64HFLC28ajwXKjPqPLRzMY4Z8BWnkrVFdZfn4eVM2jDKTT5RdTcRsPbgd3RYbf4Js7qtv5hYZLGLxeCo4sA3U",
  "key30": "2F2jahFBH2DgvA5N818KeEryoe7eGVHNkXR75oLn32wMqMxuAX8eMqteNfdeXNeTGPuywGKCft5SMs3ikrwtahHn",
  "key31": "3zAUUYFufNiLEuGRnCE976tCqAVBfV4gaWeJwfsWST5oxGdtwfgwoWMmpRvhmPoxWhciqwdddBx4Fi8hYfLAsp24",
  "key32": "2R26X6qkf6fMb2WcXt9aReRg26DPr8pThwRsTVrvjjkDBDv5qSrKXAdvkAQJppYZpLpJJ6YtwHR6Kz5KXoEdkLeC",
  "key33": "2kNqGSABh2c6sSpgDbJCDVEd7HZssv66hh2n7KLVKyHepv7RMfVLkhwRMTmebcCYrF1P8n8xSvRFkqa2YFfe4Mxn",
  "key34": "4kVhcUXBPjUVvzKYR5abvzjyzcUCjEqVtXZwapJ3N72yJngVc2GLyPDnXB7pDF83XjrrGbY3CK7hedP7u5kFdRmF",
  "key35": "2oR9aHNV8pdjppx1weaxRqDikaBfTxdXpSAhr7Cj6jDfPdkiNyqBx2dRwAjR8ENKeTQTUZevGr3qEZLDxwkarQhJ",
  "key36": "4FDGpM9W2mryQaPpxWhthaMQvvmGWf1yUxNYpUs5sZjoKuQA2f7DhXgnzzTSrq33sNvHUomcEBHVZnTZPR4eRXHK",
  "key37": "4huvPkSwCqTrsc38VfCezddFC1Qw1zYbo4JmbeFk2SPUXwf3KWHruSKd9WBYnjsG6yqx8ZANDnjpw2V9rfKQ1uPQ",
  "key38": "5guKgNmEEuQ1ErFCf6hV1ZjBE2nvuWKwWKTXnxsUADn8c4zGALasApgYia5rvmnbCJqvZAvqk6fJiNuDtAvUh6nJ",
  "key39": "28z6VTnJ6yrvwDoHepx7xJQZqpfcTcwDqRccBJdEVvVBw5Cwh5aViHsmiV2UzQmMR1nQJMC9nBjjaCyGWt6mcwBs",
  "key40": "KsFugnZp1F3f5SysAvRvq2ztkAP1fRX7vB5Bv8epdVcsz66vkxe7dNNEi7RNHuGEURVMgRFMnHdPqTdePPpx6nY",
  "key41": "32a5tPVWWygXiKmFjCLEmrX7Sog62kzHfLcYrNmYTcyzMVaxejZ3invJfNViMvAH92c764dpTULEWLqcd1vEoYzK",
  "key42": "aRCanzNcpRxJ3krhXgYC4jUqiFo2USZv4bMtNeUUdpoWzahCBCSE4nzhmQAzevywnPm7u5DdAFgU1x9T3hPGrLC"
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
