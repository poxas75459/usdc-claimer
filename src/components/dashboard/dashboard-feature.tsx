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
    "4vU3wd2L61GVH3tGk8wFSr1memMUZCKgH42pgcfodXgqmhEvaXMpy9THuqi67XtheC1GgEvYBGUcndtFGKtMXFj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "axsDqHsQoJAdjuqGs9EHxYhWpACPdS1znsAUs8tSwwjy6GhxjFJsuFCMq68E3sdgFTU36HJognJFdYAcBFKR56T",
  "key1": "5okfxHQhh26ZDELUuQm2wNiPxquZdyMUy2WUgK24UN5bT7u6bZ6zqPGBbaLHahjTmRCaMn6MATH4BpiUksfpjNPs",
  "key2": "WDuSWGKsEdHBLhYzqJCGxH2jGP5qDMqTkVrPrJLYcbjqPKUwYjPLsKxZ7T2Zeke6faHchS5cEngDoD63rWr5HVq",
  "key3": "5J8zWdmzJDCWPHuxucMYQwT1s9uSGA1KXEMXGPL3HLWipfoJUmoh3F1PhuYnj99iB15pdcPUwzYfeELZi1dHjamy",
  "key4": "3ndjVfjD2ZLZLGyiDNoDVQXaBm2Y6c8Sm9eHd12CMhNauTYQGznPWambgLBWM9i813UtVqLhcTKwezNjUQkZR1xa",
  "key5": "2dPjjSraY9ZrqzrbYAQNQoySUjaqMRJ3foLML9j7dm6BLLfyfbTxWQXuy3sAHEiiWVZachzRaRSXBgQDHjcGpn9o",
  "key6": "5HmmM95ZgmgpPEHWrh6pZhcfMeCyPbehGKTUW6N4oQKBLGt8cTnwGkCZARu8LvHiRrYSqCZ4FcboK16ryn5HYAKS",
  "key7": "558FwwPvMCUbiaN3tMKAiUQVmPj19aHUY3Cs5fKPSvEAEbuqg9g54yZfNowdqzsb8GdpBb6HfozCeiduYa8fWS9d",
  "key8": "3Tsz7KyMbRun1LNcFMS5N5k5eYW67YH27eCtE2gLGvYSmP91T8LHFznEyhAv8eWbjE2DXD4gFP8knndksnYcTMeb",
  "key9": "gYUrFjgDYK7sYvPtCX17vMG5iKJrrEyRMpsvEMLEom5FwgdEdYGg1f9gbfJNP6SN6NU1PLbXNAZJb3weDbFgH3X",
  "key10": "3v9kjZYoZf1ZQgbLTfgk6aNntnwFz4u5d1jJEwQ3Z75dTDxzPVeR9FduC3bRfGFs1kPKNcHnUuZhWsn8BTvjWKaj",
  "key11": "2BGff385AZxzKgBFLK3XEqJS3MwzqyurFk1VxRmF5tMxJA8kH3xvB9n4q55zXewVeFkFVAR9qiGA4MRAnW8KB8VG",
  "key12": "2MheTABUbag3KcVh49zqFLdAjpkZjjmJF7M9t8AD6odNUocDhv3bsyVEmznRXd3BJFZPqoJmR4FVx53ixsR8DAKq",
  "key13": "49288yFNr3nak1ji7LLrfc9J2SXDVPKNY12c6DSsB9ETWwc8JNtrenbaxzs5P59kCqZBQf2FN5mcNxXLnVbSCs7R",
  "key14": "2gtu24ffiKaqZUg6gmjwfA64PcXwvfmaN8JXXirr4zQjgUtqMAueivR6i3cB6sx64FYsWYxMuTJFpbNQmGVcb1KD",
  "key15": "4p5UReuiHEKzuRNU4gMZNdWvtAymJFtPT9cK1S7xpiSpWrnMgT3Z8BUkww1JwGySsnDqBfAhVQZ5GBxpJZbiTerT",
  "key16": "2ujY8hHxjEGuSW4WYxjoKbSaNMfDSmACdPwXKrXNwwBkqRdYsYzb1gNN3bF81sH57JU5Lb9xywt5uuZBSCkH4W5m",
  "key17": "58UgkNQE81qRfvnwbXqt4YuSzs1XRRsbuefVdgbVCJDTrFoGYHBNteXvptdMRBPkwZ8a2oUVqTmnBi6iUQo6TQFE",
  "key18": "4rnqmX6XRN4F9rRxNh5naAaJumP7MopERXkQbvGUnWB7VdPFsMSjn26CDoLiPqk52yHnyyY9unkiXVibmi87bQQt",
  "key19": "3JKawSRPa5GDCDBRsjEhhvAoCTPS4XyB66Ngc1vVg1HNuNA6AgLEMQ93yWbF1emmmqtK2y81bDFW9r9959jeS8z3",
  "key20": "2Y2G3NjhmcdN17BEh8ZDqkLWuNna5DTmWHzyLkhHZ2NoN8d1kJq8MbaKm7wwY5nuhYxyx7X88WGMX3EHqyZRzhs6",
  "key21": "wQWQCt7vs3JMdyxVqmnBiZnbUiSYgk3XVZDZvJPDRA95gqVw3Qywri82PG5EcL46X86eXUC6MTDS6EBXGocqrsi",
  "key22": "5q4TQTDMJJY7bp74WrHUnG5PBYZVET7dnkgMEuPnwuSHm88sThXjFNXS7pBFkxMNNzkrLNaV237KRo7PGD8yqji6",
  "key23": "2WoaSp4B15mAvMG8pQaWiEkVNNRtbRz8saJw9EYnEHTQ8uSwK3hdYazMkgcu9dTnj8Y9J9JfpXJ49CuUgvr3fXJ3",
  "key24": "48qYH1kySZakhwEYxcLHxP4joWRc9yp2GqDm71WVzM7itf9D1hfHwo19Y8pXt2ykDubLoWsnVLadNF3BeZt379fY",
  "key25": "5TAVfMXbjYjZ5JH5iEXhBFrMR1bPsV3Tti41mBSxHTHtpmehyE2Yq5LKAbW1V9XshsNWxWB97BcZKnUTfk6EYuEp",
  "key26": "4CSeAm6ToUYyrrGPYCmZPSdsAiVAPhZ2vPAwDK64DkZAufYqcCbg1LwewMhQaxtWiYNQWAujJAGb9v9kyDgazdQ7",
  "key27": "43H9MQyj927zUhG1A9Em6AwaNuGuexrz4qeMft8kYL8X11nmJNQcPNNhtSJyi58Hcjzo2njJvo4aum9KVZysYYDv",
  "key28": "5JFrKkiuz53bpYW3bBGCt8LiSumJG5VsWcHZXYEkRf8LuyUVnagYZXcWV43J9BVJ96z4kiPt6GonomyRRqAGUANU",
  "key29": "46PEBKdwwVBSWtqouvXZuUqAMffww1czRM7xqb5yY43T1C5mbGgSWXcGUWWPUmWMdfm5HoekvtJm7Tmiyc4SRkF",
  "key30": "3ofwkbEWcC537xMNJLeenhXcC5Huuis39NxVwmdUtBm5eQ2G8PBNEibgaFSnJnWHqV2MUGhVNVvcxuTmDyXKNioV",
  "key31": "3Fw5yy9HvrfcM9zRzU52eZiupUG2mDuaRWxdxgPNR2o3JEk42WB3esEbadtVLkL1swLa1sPCDVQfhEFLTsUYn1UX",
  "key32": "22aiy5k7Wr8kKA97yd7m213EQYazqtAHHFh6p4pmAZJFzZtWwZtXW6dCsfbNnKqnqq95tFN9mKtcWq7JriQH9Jsh",
  "key33": "42xMTzx8wynV3G3MV1kGxakxMeBaEtpdzHe4DZfMfhaZnSwEoYQNwdjcbfg5oJ9mDhNTxghkgyx9EUwrDJixR1Lp",
  "key34": "3uoWt5WE7q6iLCAsrC4MLbJCMqnYdRHSLYhx8o7Zumz6WEPh6vWkWR9DKFpA2caXAAkKMSCkgiPgsT8howJzmcuA",
  "key35": "VE4sL4F5xUPCKDnF3qKiC56dMkfUrLUfgYCKrJp1kN1Sxwm3NetoeDFzUQnHkM1tozjZXokDdBd8tcXHhoCYKSa",
  "key36": "4EfT8vft4LVziSP6FzgHb7RM57oNd438thNisAcSzDwpUdJmqoPP8s4DRLHPsd9KSNkVSJgWFizFX6XBnTh7y1s6",
  "key37": "5kgzVjcY89CHjJZDc9RajFPAJxrPAXFG4fSwSKrzvZ14stHthqjo8eLsXqcRaXbyN6Ko8mMf2WJ6tZ5uEojG7KgW",
  "key38": "4nZikHDRcA7FNaWSNu7VkiGGoHFJweKk4JeYaQyPUyQqq2StLRWVofvk7R56jqsz2XQ4AQSmiReSwUdUbEYx2r3H",
  "key39": "jb6Vgzedj8v5iQ6MVm1Cu6XURzYFEtvwi4C6MeKXKtuW1ezeisGPTMjFMNueRWHjhz5RVcouU3iGZvDjFcJveyG",
  "key40": "4hWScGA3TpsrRF42LNbp75aLkBLxWeHppsSfEXb7nqzuwgyn1oHpF1oh8asQMucGKUBSVxjycTyEC2bVS6mSwnez",
  "key41": "2eP5UPorsVxjRASvvvJxcPq4afccLEbB6JtsKAJW3FN3eCvjFVJH3qWzHNcyTDBjVZLHHMXtSR82sbmCEn2suN6J",
  "key42": "GfNuNEEbENUArvm4XT7AqL8VwGcqQNpXF7it9pLGdF7faQMbkb7MNRVdgxyXMtyCRENeVzgEHaLaiw8Xy9dTPv3",
  "key43": "nyAhFs1zwST4U2AoKJkN3GdvLQtu7WYa4sYj8zrzB3pL7cJn8w5UgtP1mtCYSBccNSkaXh76FqRtSpz5ru7A4p9",
  "key44": "yNCq8jFZrVyjQLWA98fWEb47wAerQqWoAt6sn5EmY98SuZgk4ipfML77nqRdna4MoVpfJ8dE93cLfEgYYYofcrV",
  "key45": "3d7ubGHVfHTrJqgiLnHACmGLdfSbbAA4eTv4pGe7GyPXC65ggfUFRsFcirtbe8RJxokpSGefYTe3nv88KLfGBRsw",
  "key46": "3ripuYpyUFgvsemo1o3m4teQRG2V2Kwks2pouwvYeaZx89omPM6nhdifzdbMAhQprLmJNfQirAHzfwLHSuD2w9DA",
  "key47": "62LiF1H5uLs9ucBWmCYWj9BkGw5RyWEvF9X1zwRTh687bufsJ5PfMKbAFoPZgdbyNxX7zJDjULZpqSPzCuMLBTcF"
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
