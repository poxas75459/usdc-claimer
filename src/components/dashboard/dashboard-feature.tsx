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
    "6XNsSRJvVDgLx1Ruv9dpkxzPWsvhg22JsdBLzj1ZzCYNuL5FA2NxQGqwNQnZ2eqgSa1TVxbKBJMmnpS1K4Jv4ic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yhmjebnHLeEJpRx5Z8NNy3CEMJtCFXmiSUVuiv72xZJT6N8tdgU1zJi78gEg84N75vJvaYawBbdLmSCVPFLqLtu",
  "key1": "3r6HVySsHrzktPnSy8STNGKtsKFwXP2RkBWDf5fAuhxxbiyfpLRNHQBfrYK9AgxC6BFDK4v4Qo6f3Qf4HJtEgjYt",
  "key2": "x24nPiFSXTTUnp9oKz2XbF93HSVpPAH3sRMpykzT2wKfwgtvX29676L2xDs2vV6BzKfcVkxf7bB2pNQ54rg2FX8",
  "key3": "CYA6SS3oTUSLfuLnf9ehgpieBC6t8vpF9bx59vEjtvmZqpBonig3hpGcApyjZKjzVsGcktFKJQtM6th6ywFqJzz",
  "key4": "25cKBPUqVog5CvrtiEeY7uAQTNgyzXe3RGusKb6Y1kuD7xKPgsihrACL2Gvihad6KGre4VtJNeXjY92EXfmRr3eF",
  "key5": "fBYxdD3RTTyKQqfDCkmXeBbDYsA2Uzb8RkkKKhk4Xz6voLkzauzdnGYqC749HKuta9gTusfdLZjRjqqgsbcB5fu",
  "key6": "3PyBUCm1tZUQQrQ2JLuaM7mJB2wxcF2ErJKcWQ3boxHzGyUxDGcSvthRCp7JgHE4C6ncDr47Sz285yuuKQkKBcPx",
  "key7": "2QGDcV5KMtGXnKDVEwN6UQGjz516WJ76FzE5xNBiag86ewpdgbM76eHyzPpYf8bcWJ4PRPdR7AZFMvWKRFhgSdoh",
  "key8": "Zu6oBi9vnu4gveUKQ3HBto4JoK4TuRHw5Qu6z8T6SngoK6v8PNewCXNo7sXMAJJRpt97FL6NnNMgny4HDqnZsB4",
  "key9": "3bAJQujiSWcq8HREXt5UhjAAFmqUPCRDmm1gYyab1Um8wwkxpSDMGihhmY1gKoeeMgnVrZUqzaFj9d72eEjQznny",
  "key10": "3CQCGxK8AsEznjBdtGC78KoCbYKnmgyjzU3HAo4veSsanuPp8gQZdEFeNrPvFv9KVVP4Yp66pzg7W4kdTv7a5mY",
  "key11": "3pntubdWVJAtfvuY9T3tCJE7cStJYcUf61MfRPHwyufGeL2FptLDmorzfyr6a93VrDh7eEBkCaEiE6hvvq2btpfF",
  "key12": "44dRgW6dmGWT4dwxVsXsgi2J3Us8Eb2zp3bRkWscvvgjuaf5sx6vjME3kvo69A22MmSMgGL22xLDqbd3WLSRoB1x",
  "key13": "4os6nnxVNhR2xDZtQUPzdCBbjmf7jHti8wokFgbazakokRqWyTNJJVq5UbMbq3aPJtCy2Aa74Cum7k18T7dV69dm",
  "key14": "5pRaQczFCxXsc5nMd4oyWxTcNuWvvJe2wWzm2mLSvbbqGr2d9qVxVj7Ejp6xtgZo78oGnuceQfHU615bgktKmfk7",
  "key15": "3g4LqYPKKjWoQTSgCR2rC8QuGWjNkhU6fy3eMQD7LgVtf2TtQfJzsYMvmKrwmc1ff5M4YHMn8hWd21Pjqwxdcykz",
  "key16": "4a5s5EarBgpUexqpGab9gbJMV4JjpestFn3Z38Wf3fZejvVVAfzAhR5UFmQ3kAJfUWWvyLjxxu3xpqWYT8ixreQv",
  "key17": "4mm2WSUGzrY58kbP8GiduW48SFaUioj8wEsCpQaVZ1RkYVnimHLm26YhnahGeyMFBKLjBEec7FqZwUWqov3C1aVp",
  "key18": "3FVmbzNz21qxPCF9MHYNS57J65n6tm1yWXbw1ft6rTRLdTSJdghvychDvShKKunAXu9BpV96TqGK25z6CDRhkmyb",
  "key19": "5drf6AS6kVSsV1zzo3SayArr48KevaTcQxGzif9jyhsHjtLfHcGAdQYi2PAH96b2z9eDEso6WaDBWJrV3afDQDJz",
  "key20": "5vEWojjCYtYWYgJ7XXCDmXpvivHihRxu21bWwPdpmiWBeMdvnPmAL4FSJ7HH1oAVQtZC197Wtjr1hJqw17egKJHu",
  "key21": "32Dn92CKFWrRTu9N9MaF1cwmoQEJSecthPaisQvmSyaZgjpe8cgfhw5Zu7Wu1sHDUocLxFMAP6hq1W98HnGoYmxH",
  "key22": "48fCyd3s8wPwc6unxWykEVj1SssQi1i9Dufub8kQFbPakWcZuEEErurcQWXZS3NCRgAuLgm5pEV7rd2GsL5n2rWo",
  "key23": "4mzjW6BumKz9Rnk4AoBhrFuUkdvfLHbtghn2buRhpA9vdRgMRhh9dSMWUgARxfUcXHHxq2u86nnfxt1XdWDFaH2W",
  "key24": "kJisfynjdNjLa3mABp45VyzGiVaUjr8QH3mmxcdrjYVqD46Mf2kHNspGLmPzMccS2KY2eUbsPpoWnWHAQkmwXTe",
  "key25": "4zb3H3GAdqm9jjH5oxub59npc3KtQDtZGL6tqPrqZYHWzJnsonAoFfvdvaeRAUpr5gtu8ucyuDmfDDHpgvJWzxjR",
  "key26": "2769d6XfhjKPe2KD4M7KRrb9zUzhBy662iGoN7BkZWgdG4wFsmeBuZYNZFHEZiSkMgNoqHCNJY37DGpuEtM7bWap",
  "key27": "4H5hmb1FYHjCw6TCpeMqHwsHgpC391BErPgUCAvNMpDvsYryD2tT9rPu5VxwERMMmDStEisXSNHAnZczMxgJiM68",
  "key28": "7rF3nvNhjQ3RtTVc85WwEYzDfv2eGi8w51D9ZL6vKmWsALostKsQygbrhdsXgDsLevwsH4aeaovr85ANpnR7mNc",
  "key29": "5K9DwQk1rjtmtJ8FrcQukGXvX9jzsoGshGShFh638jWjjfwTb5LQ4jxhBG2zBDvFuL93EDsmsZNBfGN5dCbuhDn1",
  "key30": "4r3QYR9j48Dvv9Dm5qMNsQpRcTXZDfmDfh4r6yesCLXko2poDy8rUYk3hHuHygzVhDFYZmNg3VjZobpyDT7cJRj9",
  "key31": "4UHnLjFk166eP88a2s49XZDzPGc1fQPyMWQUhonpKktEkZWZAWG7JgpH2sVexTMsJV1daeRQMCwKTVZitpQQxAFe",
  "key32": "3qNYFZwDv5gcizmPawtR3DXU4kMfbnAcPqiaNfxYAPBCXRrBteTt5QSm1Eht1vxzoNtum8vc7wG5UKpP5vP5nuiJ",
  "key33": "3VSnnLqV35t7tRhR985873MGbepyauW9yCV7Jmpz9gi8DPx8zQo5uWRjN7gYdSZKCTDgL1crsTbibLJBeJY5wkgR",
  "key34": "Yy4PzqfdxxGkguSpvkFgAHjxnoNdD8vDCjv7B8wNQwKgwi6evtXTmU2ERTACaTq6EuBEFyuB8BfzSVvxAQcfJBW",
  "key35": "3Uewwn5aJMXHhsUX8DgiRq74YJj6cu4TaFGC1RjxdyQGRKvKyfJUEX4pgBn9yaEj4fVUFrMLTtw5Ye41pSDMNWJw",
  "key36": "jVB7rwdHt57nHqqzD5tjHSLD89H11ju7PJcE4AuZFALRV9bCr3NDDFw25GeF7BDgDpgRLS6UbZcVEwxtNzqhRkf",
  "key37": "29G3Z1qV35wigdhjkrLpPaGv17G8UexdrTmmGMqTAJnDhJcwgXt8wBrtSLessYYAVeSrGXDNhHyVbAqNVC3jHxGc",
  "key38": "BRznZad4uG6KbY6R5txzGoA9Mp6oGaqYyYQjjkiHQEWm3gS51mnhycyFNHA8hVmsxcSRp9ZVDBFvBThWByCHyNT",
  "key39": "5SLphNZ4qam2q8rnsf26GnYPftAHcvnrh7T7L8sofMY34q41EdBakV2dmT8NwqfKDzrq3S1QkbemLXvErppgruKQ",
  "key40": "4GE1cUtmukAme8TzTcK35cNrWnijgcvwehSN2G7pQTeUcceeUSmQ9KM51Bts2bLR5jJtx5k1XuxXcTroSub6DdSV",
  "key41": "3fE6oqCuQV2v8Nv77HCJHKmm1zHRG3cEkTWLpEgffPvimewQwzQietzvnWauLDe2G2P6ofdSdT6KdgZPzdjRj9Zo",
  "key42": "5cnC3PKy5bk8tGBxhoPvKChgghpboTHtJBidsFZYyH9HJ5XAGXr3psR5oEgvLM2GGy1nSmyvrv2THkD9nokCxRsg",
  "key43": "519D1qDXH7adY4GY2CCbugsAYFYTRvnVbYx3SfnXTyRaJrtG9t9MR7gHe9bH4pT6Y1o7fJa3ttt3xoSgVUMfhC9V"
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
