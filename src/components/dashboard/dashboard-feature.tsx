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
    "5Gn318xrGyraCCrCx8o9xSEQYXDht2mgia4Udv7jky9hsptanWJe436RCYtG1ZRDMALwZTW4LVjEv3c8yTAzjDuB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u2hmYa6oMJ4H9PX4LDjfbRgDaGPGCAhqKoeHFewf8bKoKkk5C9pRGHCW3XMkeJZ1g9hDHci4CdLpE2EMCqwWsLo",
  "key1": "16pzRrDeax3KxVFyexwhm7mQjDDe889QQQnUB6jhcSSJaLrmrBFNfDY8tk2YYmRJzRxuGfH6PC9ncFJpKiM7YsS",
  "key2": "5RxPhfeJTg8DN2TbWHZi4qagwzqtAmz8ofQquKFBPUAgtRrkBtRd7AnyjXHpsxLP5JKSi3wpaqwGeFLQFZhaCs9M",
  "key3": "4LoY4J4x4WcWh8YNMEXcxa49bJsYU3hVAwR73PoMnjALPy81rWXLXUpSS3AmE9sR4vFF1HBkmaYXAP8SHRjGFr6D",
  "key4": "4J2Gj4FwsxHEmNwYkVDs5S8WRww6oVygiJjtuwauAXVbrWniGJ7gUvdQgrFJuieta19oG23jbxQMXL4gCBipNZk8",
  "key5": "3gc7m1hNttmgyXWiMsqr43xAF28ex3tj1VVvR1jdhPEEkjQgUf8FrVib7HfbmuetaR7T1e7mdNaa95T7bdWvF2DM",
  "key6": "4Qrte6542aPH75pqK9jnHVBrMgVbjdMKiP2BjNufijUdx6TRENTJKm5PDLs36Du1QS8Kn3FpZdh5EhfjxUuZZbFw",
  "key7": "54VnpQ32HfMAyM5SLGCtQWaNdWaPo1UwxNt5xYZGw8VbWuQG9ffrBdBuowW8dreBCRzTkT1qbLY3fBxG4w2Rddim",
  "key8": "bqkDL7msVwYJLZHX1JM55qGWs5skVn43VHef5jM3adnjGbf838amqcycjop9GM86zTQ3E6YWYnUvoyGN4MMHF1w",
  "key9": "EwZP8HtQZYR2no2JfrBNjRf8sjHZrX2oCcdtTeZ5wLo2wppkQw4tfrSbg1suM9xsTs3SMkmk6P6VFRDLEVhZGTo",
  "key10": "3C2zPHxkSep8tXwDGd7xvHRvdjLgC2PGQHkVPdwV8LnL7Vp7YQBBFTFSmFGN9TMM1GmrBR8VB9BwJf1XoscHEHAE",
  "key11": "3xyyJdBraEF8yJtnpADtLfgBhuHx9B1r89Ce3Mkb6qnydbgXoedQ9VBqnfAae1tqJP3hxJnYoSnU6Ge5kyAyrGTZ",
  "key12": "4LkVVeqhtekXyGzH2xWwgKzsj2GTJv6HifWckD2uJTsdu93E2uAKPXDZz9NSLKvqHkZqmU8c8Y2C2niytnFdq5b5",
  "key13": "57j726vZoarfQ6JRfE2k1d4t9MZVfabVvxjs2qwA689wsEbAtHL74fFfMidJnEahXUJKJTV7HbbiAZYCS8PoUYqB",
  "key14": "DRUXfMKf4VyipNHpVazNLHQL49mkDL5wCropd8rckB9Aj3DcrUg7feEQnJwWGQ7HPPwFsCFMLmriZNpq5xchere",
  "key15": "3Kv4MMFwUEZsLSeMww8vKHFSTp9sRc2Z5qTUybHg5X9T1eooGHmVK5bZNtT7Xs5yGgNt4zc2KPKK894dLiL675FQ",
  "key16": "3sjTtjsM49CN9EKx2U5LP2aBq6rPuqAqrt8H7DeCNP3ZWCHm7N3q3FcTvfXvmUsKUczq5MLdQZFsbjRADCHugN6v",
  "key17": "3kofWcjUmxu39Dk3FuJobyURVDJ8GcTgMAB1Kbg2GbrQBToadVfAPjP5UtEzdDkNu92wDBAG6ZkPCDCoQRFq3RYZ",
  "key18": "4J3tMPEi43nLkPtq3UNZeYUcQdKZ7YYxhR3xemKhgUmbhoZPmjxe7QVHbbGivui8uoZQPkA1X2SznFdeVmfZAJ14",
  "key19": "4UrnR9dHGokca2J3Lr3p9zwPxr9Pd39b61fyWPmbJZYwxYRBXrf3s4NwmAwiQNPNebDYkaRtyimA4gJ1zkeYvoAa",
  "key20": "48JQtjGQwG2HR7xkdqZDezLVgSmz8iAVnTguzVZip45amGu8Tf3zqpVSqyRbpHQ5aB988bP43BeU94NdheCDEsb4",
  "key21": "5BfijTSprWYyGP4tmYSpRWiitGj4vHesbtYksYhX9mjX5j9LohrLTiF4W7E45AsXEJNSoGve8BezXbNDr4sYrKvh",
  "key22": "2DFZWBUANmGWYTxku5VnjMauAFXtKYR3kqS2bQtYjoUUhW2kqJUw7pyuR34Zpk8Ly7T396dhty5gix7YBeDTyWcD",
  "key23": "2NAQYKfH5xmNLs2JPUhQDWPRGHrusGMYPQzRHpJv2EMHaDrw17ULTrPSFgnH3y2coGpReW12Fq3UXs8HBEz6D4Bb",
  "key24": "aZUN99pyqpTRhxWz8ki2kBoXjPQ5v8aBpK95eCGBTAU6X4vauXQtVTwtGT3kHjaY2tgB1As9dQcEq6Ddi39c6At",
  "key25": "587bxveN2MwUZDZ89xkLYZcjFTFKX8yxrGpyMLfFZMRvVB6juYFxbJxofwoe3BrZihz59m5SNYTRbMvwpyMXigjt",
  "key26": "3CjEm8rEDX1uhuyC9PUo44F3dBKbhT6sgvqmTpnpJrQ34bvTCRPtMGK157ZdgpmuSrk4oQL776rqZFxFUFygYoNz",
  "key27": "4ZMma5cAp4MPfFfcANHx8VhFPoXEBrm7qNJ3nG5KHKaTwBFKHHSrUcacfEr2mG1Wn4gD9abqDfAF35r7XqoSzGpZ",
  "key28": "4TPndhtupfVUxgzUKJYjkHGpPqVF5jqZXTPnMUdVqTZtJencxrfFHBdUrjmwqmobYpyJrCCTRKNp2FKB3CsQds1p",
  "key29": "4ZWuhCYvoUFSwYMUFnxF9pjVb2KKDis2UhLeVnZyJ3YxPAX7Xuh8ZRjVghnUmkRCoiDTAdM9EgPs5e6VrynwetAd",
  "key30": "3cY5h9mrxDwcgH3ym9JE6B1fqf9c9nonXVG2q26anBxdf9F1ntCiRWBV44M6w6a7y2t6ZmsyQpdXUYS6gqgyDp2K",
  "key31": "5TkqADCqAEy6BcmQdiG5BMsW5gQmtZd4mKERMij7TD2sYctTZKxPahhvbqUDbfxgriKHhDvLxm9hzYd6tgwXCa5L",
  "key32": "4Nqxf98ew8mgsU1RGUu3YnCN1o6fZzYkHxfec3c2Sdn5pdxd4fWcBYM58Qhkb9PMYfBSzWS3qRhvSi52yiQqSc7F",
  "key33": "5jAvFcNsWjrDBjtRvjpvUbpFbLxDqG4E2e2cFQ5W5V7LGXA4F1qBeQrbHHeY3QuuCAZTdjziXA4Mc3EttUGsbJT5",
  "key34": "24Fe4BPmj6tLo9PvuRWPPNoAvF2dAnDTNQQuZpoveY3MquQysvquzgARHvvMiaHjxEoxiE9E25otsRkUXvBg5xWz",
  "key35": "4PxeWFTLPg3sxL8baW2RpLNk2TQP4S1tYku41WSGTjh1QwjaQRwVXPRxBZ7dq7YmMZcqNLmLhtaM1Zu7JnzUhv1X",
  "key36": "4yU45izoagGu7WtKQkkCxn9A5GyRpv68RPnwe9C4B6Vk7J3vBczC5GtnQXdQSPc7HSy7UDReY14on7sem6hZAsST",
  "key37": "5FN7Gx5XP814w6wenVHyjM7F3AGGCu4gZiu3BW1K1ni6jFe9fXN7VLG47BVv6oDGKWq5EQtu6MLCgcbxuBcbi73c",
  "key38": "59LPTMKR2F5vHcEfn7DK6raHCY9dLa3wqrTqVhwSHMZFcHeKeFizxB7k8Y7LTVHBxcvTvgRjX8JHXUkFR89yDJct"
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
