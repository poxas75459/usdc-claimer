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
    "62hNikT3j6paW8c6cRkMU6o4dgUMjK6hu4R75DisQ44WTHNok4RupJY5djUFYDA5a8BzLNSV1jnmPkzZghdaq1G9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iQVTKnzQVwSDVKanV9DdpipL4mnf4nQBpdggTi5mjTaT9M6aBM5pQRfFdfNeyhZFtudRZAJF9DnwZk2HgUcR7md",
  "key1": "2ZXDQtvqRLmxTVVT55pDZCBLt9YpkdZ9JNe6mm5wAjnKpVX1kqaA8nTuwgdq5PPcshdNbGziZ3rPBo7N7FyKYxLb",
  "key2": "4CMuBLfJUAwSu892vcoa7CRbdpi33HoKnfeWU8rWo4RoYk1dAv1pPxUzUSsh76PNyPmRxsg911udkyA2v3wfx6Ej",
  "key3": "4j3dVNCscyYUvk5XXbP7deaTufboo8in1aDkhoEHdJ3FcSiz8c7xCuMdpVBR3RGWoEAJrEZ7kQg9KyCryPpJEga7",
  "key4": "2FxQcmQ22sG59VGnFBbgovszKDazNftjmTa6jqzbfAYzPUvv8KbXrFVynHbpFKDMvyYM88EzAazZoXbjfUbZiTEw",
  "key5": "5Ssn5mojx5URcudcqXKX6saj2AKEaWLtrpG9bHdfJibi6QTTH8vSV9BZUBHZ82U1Lz5tLLtnd2BJC17u17dZ85i5",
  "key6": "nR1sUb1zTPJjGkTCEM5QpBjWKvK7yhSKpyoQgvghAiKMpk7iK46UipCb7YEq7aZjHEiygcVFDZCiKKF7aLiUG5q",
  "key7": "mBueJKG1dG3dD2G977bwAHWCzbWohZXDUKp5EZ5CvBVMnRKbiQ5ADNU2Ho2gntF8JWPFwYVus2yZ9FGwdmoJobH",
  "key8": "qxrVHKp8PTv5uhNEHiCgjtbzP3LwmNuauHosveehzQ8jPnxJUc81fQsPaqhkdVAM3hgYrWUCHoPy42TpM4SBBPd",
  "key9": "4y1NEH2ywzTMBE9cW2LwwRknTPd99c5JqYTLWcZ9vBTdG6kbEuMcck3ESueXvHCqpuhi7n34157aqmSMCTz7WXPe",
  "key10": "3v7Wx3GVLZxuW4FDWdCQS62vHjRMbpkQF323uHAzc3JixAQEUZ2hm8kZcygYgQoFSdoBLq4sryF6Laomih4HUR42",
  "key11": "5HV8N4FhZ8Mm6t4ao6YKx5VYoAQ9aWcmP9CxjtvtKNLcCJKik7WrHwRLYUsToFTNKZk4U5EuXmuNgSPaRQ7eqbMH",
  "key12": "2rRmHeDvNH5QkpoQnb9zhkhsWQpMMu7UmTyWiatqUUGnjLCXqtDQTTz9fAMhVQzcnMaeQmFzJQ3yE3HgsxNaUTex",
  "key13": "2z6o7t3GRcQWVpMwN1snuYbfvE5MKQdUyaa4CyEGyPp8c4mXk4zkfhc9Gk5xMLzhedARx7somnMnJ1Qj2mgaM4nS",
  "key14": "4E3CEQxQYVWC3vaz8mzY5KZ8eCY4R9pUvUEA8eDhBwj2Z8wnmLYs26YB5HPUccBfyN2M6XPkSQW1VSMxGAZ2jF6i",
  "key15": "t2TpjgSuCW35odxy5o7GYTxftdPi4h4kfDqQ9yyKkkxw3x3PavFUTNFuTxrAjsqe13QeXxTV6tHeZ1f4HYBrVFY",
  "key16": "3xiKEcmWL3kuig1vYy2W5LFvqmszveiYzMCUYT651hXXkskQw41N6URPjDbeSJaTuy5FDBA3wuFHmfqQHEfWJPLs",
  "key17": "4ZXKpU2BGoSve1gKzy2yBqATCxtJxFziRgazZ2xGydwAaQn9T2cgdfBJeq9TseTCYbYFxspG1QjuWr3L9otPautj",
  "key18": "6Cd4rtnyDmN6Xm7j9zTPzEwMPMhAC6zLhEjVAYRTfqmVxW9xeTdgLYxUsJTG4bcSZxbSuRH6rE4ti5Ybs1WXtPn",
  "key19": "5ng3jTUV3CGtzuoiVb7TxJGW5CjbsghG8WEgoYtxz1eGviXtsB8VpLuVAvtwtCYTyHiwbpqjaF6ZQzfCTyaYnsm9",
  "key20": "3wpVbB9xixtt4oNewCKL2uxciCM6KBJ7QU7yrKK8dehvvQb5s23pYXcQm2236XqxEcx8kAcqLGs6jmD1hXy1m7Fw",
  "key21": "67QYfr9xYReC36Djj6tgkeKb1chgrrMvFxhPjWcczWB3aeWj7zDRn1LUd91eJPJT8XAvDz3qCSSzVyhmDDy8Wd7H",
  "key22": "2qEoV9UZMY1142xCZn8xv9rcL4XfpNxF3QnPRUCyJUBAWcbZ1JkWmHJa3cKDY5ftvYPQ3NRqSQg5AnKsHgLvGRFs",
  "key23": "4duEJ2mWHEbFK83URXi5wvJGp4h65cbQ5gu3pqxz8Fp8YTsGzqoNUBWgn9GmsgGwtWejCSHM4UWP945Ehzb4zpr3",
  "key24": "D58kCKKX3i92KkU7wQULnsCzEdvnX1fBkzJSdy1Nc2nD8pRaXj3ej4nD2xLZCzFbdH1jazNz4kdaHtKTpUzSnAi",
  "key25": "23w7jjf612Gv5LsvhqiB56eDk55mkWcZZAhpz3n48LditEG6e33VLGKAgpZrPGwLALEazHWjWhZYuGC79J4BX7hv",
  "key26": "2q1eDzBB29Uik3NsmY2ctFTGAWcGh95639YVRRJ3Y7zYmexyVuX1sVQZeh2j6kf679VCv9yXUokdKZ5TFicyTcwN",
  "key27": "5dyR2RYPTHoBFD2SMLLpXMwDpD117zVnJjRKU7TVDp4pgBGMJqefZ7kLvox8o5VNUhLthzChs8xyGH1Ndr5qvjiv",
  "key28": "2saBnM8T3KEhNFRJ5cPBG9WdrMF6DKAWeouQ8w5BMdJgqsa7pwiDU81cDSo9v5uRZfur3RF4tC3RkGUtA2HdDXPB",
  "key29": "57HxVPjnvChHtcNGcZJrfe8jpQ4c4gyWfmFSAAoUUiNWMBD27UYtVyDwddzWveqpqUucgNYFdqtXngaEGcv5L9zx",
  "key30": "2y9mENN1H2gh1pu5honXq19o8xi5eN6Tvz5BZY6DFCYguvNTeKSMkpfERhQTXd4gD9pR7sFG6mcDMebbfdFECnLh",
  "key31": "riHWnNpm1LpxEU6F4NVFYHXy7oHGKGTwyW1JHvnYpN1v2NjLaFenG1m2DALMQCFqBHcZigsww5nvqTmRntz87vU",
  "key32": "46eAWXcNK388a2q4PoqaEzLZEetkYDYRZftAw7UtUyB4t3S3sSHjnNVDRzbCEwYXZTbG5T6AHDqiPNENw4UbvtPb",
  "key33": "3Fuw2WKaE55Q5PQm9FisvhyYu8bzo6qiF6J7eMv4BbrT4BfDM82ukB1rbmDPeNGFxDGyv1ksYtFqckYfLFDtpsDX",
  "key34": "4RnzptTtGWLVBs8BSxK89qRQog2UBQwdsSpgohNM9YCHV94zrEddrYJc1Ss21NArzgLV6nnP7WP1FiKm53aeW7BC",
  "key35": "3rS1pNQAxFXyJgokqbJ6qkygY9roKHLGGT4izVZypG9eJqcSxeYsqqY69HLBh4LbL5Ls8QYcuQFH1sqKiVXxHjhm",
  "key36": "4A7AGZcQGW3Dx8vaJr7xMTUXsbF1ZSrnNaytrPcknCVNoG8naQNis8aQwjEzS43X2KqQ9Ztrn9PmQgo5eKaRvU6i",
  "key37": "3iHkgStmcKX1ifm82hc6qqBBbUiQd2rZE9rRpAaf3LAoSFwb2Wf8P1aHkYcdA4YdKpQEu7EBzP4gR7FvJD93mGDk",
  "key38": "4JojozKd8GMrHiK4SR7jCXXNSoyoaE9Vw3bYvQyo21DvfXBunDjGtPqz93z8U9ZNMM1QxvivzbpRSYXhRTxVRF5p",
  "key39": "5TmXRWYvw8XBa9HMMZL4dyWQCbdogEMSjAA9VXRsrNssoygXiWHmFKuxizQBNyraV8g32nshBC1WAnrJ6ioDBGKx",
  "key40": "62UKP9yCHVi5QALq9BUCU7aFoVad7vxbd9VP1bQrPEeBFPkhFkPkRxN1MD3eCzyap7e6faffitLmNy6h85PzvUHP",
  "key41": "1nvBgq123jdM8xzmH5J5K5QQiaCahtDVobC9M7xMK9b5LiTyVXjTDyfQRChi57o2h9D4jjwkyyEK76fqT18kGEo",
  "key42": "KKaPzUvpPx8mnRTPN9UckrthdaecCe7HX3uHDUcQcamUZoD67KDQG7bjCsoSFA2N4cg4FnQPJw47MeHyJzQLawJ",
  "key43": "413nQGQTLjiNftLuDs7fCh2h1Zc4rQ2pK9jki8vVPLn9H1tNCUPRTt6Qwy5HG7CinATHa2z1isTS4WYKcGwQtj4b",
  "key44": "4KWQ9dFYWgPS5Ugz4RV7Epv7CjpbFe6SPBU4XH1etTUSCmcSkKVfFMZsMUuAHJfUea9fYPodHUsz4SAFZF5mUVAW",
  "key45": "2nAEyURvjxPZkSRCStLLBaoenLcfATWQnMQLcK9s96J8td3KtVGCCYbEG5ocgi2jGfA22JZD1xhX6SjeGZeaJHYg",
  "key46": "3XurK4ABimuZHjdv4P6mqeEWia5H5uiMVyBncaMVrhBpsa9bb9krzj2ymAKidv4hKar8kxeDiJ5EZTohGMVyb6MJ",
  "key47": "3oCV6ZfUkGf7hCZCRGD8XWBtwjmU1FKPmxiPuZkctYggojjH75FQznR6ViCDWMS3Wv6ZkbTc3NhcuB9yohMt8yz1",
  "key48": "TSUSjMYubriKHAkniQ3tKag9bQfJYd5vMhyDgHxujYLpGUgNmtXEJKqtuSBeSwhZnKouZWJqGaurvRAgjFsdDgv"
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
