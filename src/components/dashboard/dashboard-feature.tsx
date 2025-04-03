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
    "2VY1jLF3viNpFM8XkbaaHeocW6SuZdmSBPGbxoeervdVcJwfp6thj7uastK4DReMobQgjoZwsotBJu45Xa6e1o2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vJfPxRtmVBTBpAkaMzj2R8YHsd3dbtLM6uzuLmsWY6pdVh9jd2Ef7eZM364f8hFX1j9NdjgURJAfzm4FKqQJKNr",
  "key1": "3MfjR4YSN5isEmMxRtMDLf7fCtRYfMK1YyPZof8uVZfL3UBMuRxNfBAYvGgSAN4Y1wpby4Ebi4NxWovhyaJFMByE",
  "key2": "c4Q8sEih8ZApSztcKFU3TmdhDoQoorEB5NzVTQur7ddDHUMepVZvPBWcs1kezNfpe9hwLWMMuwRozuduwpasiqV",
  "key3": "4EQQXx6A71a23NpZpo9iSgN9wYhAJRNbP71QSsoyMkXY18t5DY8YDY42R8pXhNYu9KmBMbaEuEsNQ8cJA1q6vdQU",
  "key4": "5U7qyiRHhsMj7E5unssptKXHM8GuRUrHWJ2mQo3MjH8GREZnQADm1qsB6xDxiyRsvt6BkitZJJMjxvcMKVBocr2o",
  "key5": "2rHjmBRUMkNCQrpkLJZv5TNCknTLRaUUtswc8LXzJk4Qk4H7uhusditx8B9QAW4GD4QRccHTvDxL8zDcgm3dbcGR",
  "key6": "3LX1Fi5mzYjih34jJ3GC1W27n7UphmjRhjUoTCjYqdw6y1rU91UdUKcyLwvVmcts9iaWErGEvp3cEHuYjbaSy9jm",
  "key7": "3w26LXw3kahnAAvX31nsdHDJUxc89mpA2Wqs2DzvXnaV9rx4iu5WyPPvSm3UFfyyjEzwDzBCAPsYuR8QZhY8Zo2s",
  "key8": "2J6THXH8TpAdgKUMGDKTSR7M142mDUNdZ8QVRJLSmxtUhMGiiVKbHQ5TdNzKri4zz2WuhfJGzCbS4WWWWZ1SKUQw",
  "key9": "5kH4swzZPtSL3JsPG2GoWTJZ4DE4gHYV9kM63eLA6mLnxJABhDsLmpi9oPkifUupdYG4c2dZHAgWBQRmJp1LRhKS",
  "key10": "4i1NiQ1F5212upPz22FADSztuqLyJ5zijyf9vQU9y3EVs5dWMuAisQCKcvEQi8dC4v2B3sKWGX7j4tRuWPCaBdw8",
  "key11": "3zRtUtU1JyY2zpCoLmnfxuykodPb76F6vBMitoNoiGjEppTB9G3QSXgxPxiWGb2k8qn7ShUjqegt6BkCHGrF9NzM",
  "key12": "jZVvs2CoQyXYceG6qRvxm17BmwZNx5YVUgN3RCzzL1Vk9jNTJp4x3sBaG6avo2tpK8LFeeUJ9wrss157j3471W3",
  "key13": "3iJVmbSfD6T5n9D9GirLraorwfPg4rR71JTet7bSCJF8gowPpwUtLjmZRCYhrv6jYy24Jy3D8U5RMpZdZBVzA8jR",
  "key14": "3xCrE4mDqMEKAA4RLV146LeCZxafgmJDJhFheeGofDzc4B2viYwkDDQmxGV6i7xBgpEaCoHxGWpSadHxzAzWUHis",
  "key15": "5rCZ3UY1xtjeETJS9DSzRdDfQWM8YBA5AtmXRbh5rk6pZTkUi5wqzoQxGTAKAn9r6YvejUgDCyL7FgYYzYnCXcrS",
  "key16": "3zN5FEHeLxxeXnckFsQrZA7dHScnQxVgUUrbnrKfKj8U2m2tCnuBsuVwZDmEoGXuti1xRJN56zwy2AcppzzYoBsZ",
  "key17": "4m2UJ8jaF2xJZYHuNN7ncFh2rMY6pGoaQQoWmW947T5tsGquRop2GsK9Ptu8J2Y3TP2Wkd2BkjQyDoFin5WsL33f",
  "key18": "kZT8ZihEbSWAF88LEdLHNbHH1NAvMzTxwfsam1PRyFB9VQoTuNfAmmxN4sGcTzQxgzQfzarbrZZ15Yciptj7Kt7",
  "key19": "27UXER12LZc6TUKuYwANAMRMM19vQZgj5d5XUiZQv34uraoZge2ASfwxpMffBtu887khLBEufy8GNYREZ5eyM2w3",
  "key20": "23tQ23Ne1VJewvLreaaapp5mu9ySoyYYcBYZm13d1HSn9Q3zEY8zDGTNNui6KLaRQqMDtXNpWv5KwXLYz6Ax7oqX",
  "key21": "3prKhjdgkS8e1rHSgQeZ1ybNVZb3SWJdkVsaXFu3kRrhHxYUqXg5C1zKZt4aN9uKBuBxpQTiUHVTMbA4LiQ8qRtr",
  "key22": "2nrymQH5RhXR36eFW3oExeWwxkCgD95NEEFFMrPo64is9AwrTVpDUAofS2EWmxYp6R7bX9b5f2U9oyvGAARfDmEW",
  "key23": "FqQZxQbEyEvdY7LcmRM12ndyV82xDDA3KXQmPAi1JnsVyikC5QEPpf8VFmykanuR8YFnAJqRD53Wh2ZH4p1aPfd",
  "key24": "48de8JqmRFBHLGr3Y4fRu5XRosnvBnL2DK4ghd5nfZpzBUwoXknCe32AoABozK9vPVRUUhmPg6DQf3NnBpdVLMzG",
  "key25": "4L3MRrrY96b8JgfWKx3HDCeeSgffLT1kXqDsSy3BycN3ZZpWS2D18JVTT25dnTYQaWFPNSKC882rcrSnYs6aVysr",
  "key26": "4nTj5igYEwrCbQ9Uysy9rrm8AEUuGedq7XkbrDns2EMTeryUckc5cLRwVf6jazqRFxXgLofgNz6B2LvdF6dRZXmE",
  "key27": "4jpSjwvphdkP2yBg68JEn981rcjWonJk3bdg4ABe7qxVmTDaoh5p4Nq4jfSi2QPsYtd6Sc5jXixzoYtwraLC7W5G",
  "key28": "26vpTEdHhWK4QdqkntnbUPxqiEyN2RJNGJWRnp8C1yd8p1rxqEeRAzDLpM7SwJfbHDNrbqqkBLEwCrsnwoBLhJXV",
  "key29": "4c2MFUEfJZ4BB6xqnXfGaih8tKmobyRHMkJ7Xwo6f8XEsx3ARYCfnS4SSK1pjrkLspL2n8Nk74NiTb7YzfiBh8tt",
  "key30": "2ML2ktwZqngbFethLfi7rAJsesCTnZagfH88uF5prymbBqYVa7Q1z99S2j9QpTRGZQXv7hNG7KY8rt3cFTP67uXn",
  "key31": "2TNp6irTBN8ZwkTpNH3imUYmS39qUK8FXTBa8wWk8fFcdXUCHd4kUy8AJiP7GvBDsa9Y3ateYa6vpwaSPgJJ6AGn",
  "key32": "Dp5KHFdFoqKtxKdFsXwWQHxqnTER2nKCaeFgHaGo9q9XjJSmTzpTLsSibzyKiQb54Hru5x4E6mVqUePnhQbzhAP"
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
