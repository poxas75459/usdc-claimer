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
    "3PPMaNtvqWb6Rm35QFWwSZaNNBGU43qLCRtAY14NaRMRcgBB8b3Rv4kKSNs5tuSjkRywTDGgz4QrNaaqpUiRvWf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49B53w8kc3t4eWDh4dEw8SPSz9iUhjThYP5SzbGJLPt2fvmE4GMaMwUBuKjncb5Cu1Dx6RU7JJgGvsU31C1cJzNM",
  "key1": "3nzT5x6ojLYcmM96VuzeGFm3jFNdX1iWLA7pfnXoC2oX2KGFvZG6j9zio58oEfsmwVCVdYYXzvqqfhgd7Q5uuBJ4",
  "key2": "vsJH7Xrw9V3ttFrthcQFyd6gsyToqFWZASPqTc5f1bPFGLHfA7tdC78Uq7bB746LGUE53G897waF9xZ6t2jBm67",
  "key3": "5pZBaxbiQn7huvB92MFQB4pyjjU8zcyK4g4sK7nK4mnaLDfdu5cvUqfVbZmZpeWn8qyzX3d9C4kMBn173KjeFdvz",
  "key4": "mEUukYxfMUA2Ez5mD2foW3S7SS6o8RTbggtpnoqSag1Z73BvYtAj78nxo4xFL17E6ZGHjpYbs6g6zvnXcaA7nDF",
  "key5": "67P7cqMDDG3LhtvrM7TaZERrRwZ9Asqu6sNhzTvn7Rr4po3hkY5ysBawDUKsm8onUSokGH4myYgmBUjNV3ZxizZE",
  "key6": "4B2LP76wJNKi5DenGnYt4UHqBCxYLAskMdAocVkwZNg184krQF68wmBD8aBAYBWofm2y5S3iobafJkCeKzZ8mWbG",
  "key7": "35frwHbrtLW5b2WqQcLCon8dg2jQ3YZh1E8Z5fH6JG6GJJq19ratpLyRBeWrQvGL9FTXSGPDcPNDSEAtK1nsr4bY",
  "key8": "4dfJQGHYMNC6J3tQPJoTjS3qaJeL1zgvicFBtSj8Vp4xDixceCtjpFYDWcZGPeUYZFGpFaSN5wVg4GZ5QrSr62jN",
  "key9": "41xQAsWFC2PuVtVe9CkfBwJc4aPTZkjwtXpCwG2Qm2DqF84EmBicMA3MeveAMWWF3JCywtK7rNkLaSkcCkzi7GcP",
  "key10": "2jduZF667EtXTAW4DrLekqvYcXCtmPZs8p3MAAQaNBNhyNuFCQCZzaSsUJD529fVYHMnts1jEyauzgbhNCKHrDad",
  "key11": "5nUUtdvq4CsixFucbMLLUx3haJyFwp3jgMwUdPUhuRYHF3qhHNSkGNLFWGAFGnGLo4o5Z4z2iWPpnCiYY82vcT4g",
  "key12": "rKeZ6o8pxTRv27qYVy15XKbW8GhX6ubTH4y1QVZrjL6XmDcL4w5FwrqNQUsr8Se8cwdhmjsmE9bJvXwAA5jW35J",
  "key13": "4WEZDPadBeHqMdbEWThrrWh5HBiyfwShCybPN1ozZGid1ZuMCceypG1pgat1T4rGp6HonddwbD6Upk1hgvk8YHKK",
  "key14": "3QD7Yji4uJfefu5AsB2euC9tHXRB2CumMd2948sahhygDQRVaccJdJbYhTXtnw65VZxXp7k97JVHeKQXGgZ66epw",
  "key15": "24mvwxmBKQjVDzSN6N2pR4eRjWmKxUNyh6PJVxjmuS6AM9qxWgPqCLxPSvYJF6YHYRoThB1Zx3XjdnrsR6wwqujU",
  "key16": "BnfBZ2s7sgs1pWrfbM3YV7nA7dgK3kSqCUi4FzVNgHFDpBe2bk5ixhn3xLSdrAjiUErcuwtdVodzKdnzotk4Zpz",
  "key17": "42xVpNsW9gHsRNrDRMgahTG1A7Padn53cDmvndeoWuB3NmcWsDMifZqR21noHtEe3xpF6YjBwpv4j3A9MWGKq1kp",
  "key18": "22xN5CYjZabem96dQSXui9FgkcBfYJvb21urAcmt1N9eNUUG42WRxGkHL5NFuDaTWsds3fYpTQDMvZuPzQgBNbiV",
  "key19": "5LqCJ5kMHK77keojJspXxGpeL1q5hzL3Kq9bBn36YXjwCP6LA4sU9QqyJv5joQn57gei7sADu3xSLGiQFYBgSMmx",
  "key20": "3p8nHr1kARaQ7x9DqgttkzSJG9JTLSZEQBYaJxXpkygVSS3g4DuqrTqDjJVwKqvSf4j5oZ2mHaWtLPZ9455xBsM9",
  "key21": "8is4aY7pumgmACAqJSQtNbMtktQggY71RYWnDCo6H5aCtB7XXs4tx6CTaH5wnZrFq8e5CtBMEoNrGFzqbjahDL8",
  "key22": "2TcFem2ATkJTCMg1yBWDcHW9Lh9PhFzwzipi6iebVjYTjkTzbpt5d2rVX6yPiB5jC51cTKtoSoU7Uev3eTvXKDgd",
  "key23": "wYrZpSsrD2FQVfuJCb9r5jVpUAKm9pw5HacLtVCryDtv6rvBGuC94GSnZBaWmbntwsXqjGaatFrSqcCcEDU9rnw",
  "key24": "5fRyKNwHzAeuynXaMYhtk5E9Tp6NV3qRHZPnfazzhMhZyWCVg9ii1QmowSEr93HDEYacNPFiegSnQvSy2ejtdxVz",
  "key25": "2xj11WB3gFrCqK2JngNA6BJRAgdCCqS9b8qn6UQ3kJ5QHQn58Ej1oURpuXweRFcxtg4ih7sqeSHw8W1hLd6kXfVh",
  "key26": "2WXwyjUZcNsQe9tnUb2LmcyNTEfzdbGHQ8T178VFevzofHK7uiRRBt7D9KCPUnr6F9fn5nJFv54nunRJEUmaqKGp",
  "key27": "MqGQmcRtQUq3cfvYkHxeuUqBGp8TMNxwXEFucf73p7dNur8fdSbMwhWcUkaVmBtgXCN7ty4bCa2y8V2oLkymEiW",
  "key28": "26h2KHzTqT8XVfAhezt19Dj1LM7PtJYnN6D4nygTTDbPe2BcxfRrGKDwmVBPkjW6FA3ACKQKybV7Jdfs2La7fgut",
  "key29": "57nwLE95v887VUGTsxsgPnUtZNQftWp1fjwrA4rfBQ1V6gcCx32J79yPNAKRo2FTmvkrsCujMRpTd3VphExWwY1n"
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
