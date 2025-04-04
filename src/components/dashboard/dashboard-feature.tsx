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
    "5ogVq35oii6Uq2JqZEo1qTr7xbGuTEbuBhVrFqCnwciNQpjoJBpuefyezBEJUqGDxePfGbzLhQ4BGrTbrohKaKW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tHQj7vxwW5Ai781eBSFMYp8B5ApEZ9MSkiKxttg9VzqLWPdaeMqsjtcHf7an5MVbBVNBNaKY7CagLqNxhrvptoS",
  "key1": "5qKsWVc3AAozNXyoxFbTUyFYsymmWkgtcHqhxZcQrjnnh8foSQas26GijVXtL1Ys3upACmjteaQBamVBGqzSgeeX",
  "key2": "4zEbuuGDzBkSZKGtJLeNEzDuKnxafSQg1ahBAqMUxEx9GkBzv83LNVps4ykMrQ7QvkFtdo9Lh5C4YGo29JUg5qPH",
  "key3": "61yZxKBDJVgAcw6Bm53Y8YktxVi1kTQ8dUYDcedLsKFGe9ZMkEaQ5yvre8dr63ouMoHREFoBHGnUo8oZVoyU3Zbe",
  "key4": "4Lf7ckmrssp7mNEtvMsA8qajZYgc3kXM233kUkiBggWCiEP9qeXmUfKRS14xGjNpQsuAT5zL64CGaSwMuxFA1L9i",
  "key5": "7QpbqGspGorZtwMsyB6wP8yStGNBn8H3yMofjxfT3bRg5939LqPAFpGbuQcACawSP1wPDBzK8Q9e9y5nCKfUphj",
  "key6": "oodAJYvRxokrXn49afGVwjMouq9tq68UGPKqEKTT8jC7jX3kVGUDCkoEN4SZrRuGqSJnpkHcyrPgcur36mYn971",
  "key7": "4vQgkAQBMxMa4oKgZxfU9cTLPE8iZataZXXUmzUbujwGQUxmLBfcgmMxn6nrC3XrbRJf7cdrxfqfqmfTFcuRyfEZ",
  "key8": "5utqHWuf1nnjCZLK5zZAQaxXU3xyYudKMnxMKpU3nwhugenK7XwQwFnt2gDkPJuFtr8hC7VrWEEssvFnQa6VwAFK",
  "key9": "pBSZsf1B9jzskac5E8Ss1JAnFxJ6scjqdc3W4AtySVH46STThrnkbHkYccHcQAqkSP9PSeaWNrmV3GDzfjTwSQw",
  "key10": "5QV3pY6LBeorg4vX3RdYvbpRxDvv3a2T15vg9drsP6uY4LAK1zdu38LXRbKmcvbCrptcFD1mzRap621BpBEfwyyL",
  "key11": "2vRN9AthGZBm4t52PU5pZHQuF5wWvqpVrVepEGYbqLA8ELrtsozhpNyydyPsky257YuyzNbt8EX1yN1ud6yBKLxE",
  "key12": "4pTDiS5zsNyyMU3n2ACimBcn4NthaUttEAM4QeefL8JeAfPmEF9b2Fnuthnt7uymuXkJabuDJUHfw3AkZGHjT1ke",
  "key13": "2nbaXBeEcKM8JYthxFFNF46aopYj1pHhjG9rrrdHmAZvyKBo32BQotXeNe33rDZRHSn1fUxBDhnf9XUprEGgoB8H",
  "key14": "5yV6BDn47AHh6EyWNWs2uYXW6qYqttcX4vM8sKHoxN9Rhd1cV4jyJ5jESiYg8ohpRuBRnmeF5LMMWQSW89NfLmsD",
  "key15": "xo91L2KUMqUT8oA8kkPNyi9hfaMULEBprGvnj46MoVyvAqEBXr7aQJXRUPwrFKUGZUyVZUtoF5PvcvWDhdWyx2E",
  "key16": "5CPpq6fNHP7siLtQhPdFMkUD1ZC8wr7FwhBCmvAVmBTTUCdWKTvZam5SkqwZP5q56JZcCqu7UuEq5QyoTZ3A8kAH",
  "key17": "F7MkKTbnRREQuckvyKZd2YwWw8ftomsNpoxafy1Yv4yymqikcTKyKP37z3rQvRgEAsEeaaaWwD7KpbsmpaFovNk",
  "key18": "5GmeEkYZKo2yADKxxBUCjU7wFCJhuFgYDsmojJMefA4LSMvQuLs174Yc13SdoimfHojknZSvMdU2ji3noGDrHTYN",
  "key19": "4TvFs1x3RNASPtr2jRNQAh9mMPUhqDU1Cd9YvTofCX2uK34LX6mWNaNZTfUh7za3QUiZtmEH3hoVmHwPWRcmqqQR",
  "key20": "2D5PDsdnQhQHFsHvtK5vkFfcPdiCADWojGQx9ynzUANP9RZ1HoTTBNSitZf3ZduMFTsrPP6M7kRquWU9JNfQRw1b",
  "key21": "2ntfJRFnpBjHhJ3Co2TzAFzNWfVchiRLq3e2r6RzwuoDK93xMxSvwNxGuBqk5Yvb1mPewVZKw9JZahTa52gQ7DAS",
  "key22": "27brvTnSjV4ymda2ikjg2M7dvwJr6ZQsL6Lg1ScgiBZW9nuawDNjudrA2ThfF5qArjetatPMwka6DRnAqGEYQ2Jj",
  "key23": "2bpdKZ9rxW2BfoEQcmt5G3bbRsFyzU6c2oKxkuoy3Y4pjNY9HQxangd9FaetnD83wWtPCEvfJAF8eEY2NkLu5qRJ",
  "key24": "5mad7qMABeDg6q4iBBwkG7adabvyEUwJsByPXNVG7X5w8HWFKGhrM9LqZ6pYqTpKrd8MrzpMyPeXz6tVbnJshioQ",
  "key25": "k4Qt9FJVtNCmcz38KrLFi7VfM5JkPoYo9GyY4YCyT6LgYiv8XYkFizUtw6Khze1Ua15dy2rNCTjxeLVPw5GtQZg",
  "key26": "3zyS9FDEVxfPJ2yCVGKdKcqn9nB4ru4Cmq34SA7ddUBYnj5UWzF6jbcN6WoWMgdWFNdTesVHASLi19yZrFFSXJ9E",
  "key27": "4jojpwYP7kngfWreNxn45ZwAvMpe8stXosJd5ze2AwqPdRokrrnfp89i5qtpZ49rfAgMQZwygr6uxjCy4sUzXieT",
  "key28": "543spVMChZgQuFoK8hEkd19dmd9m9d4qcN9AoQBXca8bRQgJDcap2WFEn12sKRc77UwNqitQdSmbCghdVoDxp7Zu",
  "key29": "31eKS1KRwuphMaeACnbfMXe5qQYQKBQQRLBgHfwLZpiCUoc1PNxyGeZc6EaUvVj2s3KaLmzi3nGTo4ngnmGTrLqr",
  "key30": "21UnrfbNCBM2AzVin5eLxXaHnTrrKEZE2q5YxTYHD6ZWv7jeYjr3LE3W7LG7xEZU1WfDgWYjGQusutRvKBsA1AEH",
  "key31": "4nxRE638Qodp3J6nEKfkC6n5eX4PFq165NqVs9fTx9M31awtRPHRpiWJiCMx4n1EG1z1UkGo11NAD63xJHwd6K1J",
  "key32": "ZQpXADWgf7ALtJocQjnEQGsqw7KXsjTgBL67Aa2HDZm7vjDWatmDJVzDSfRn67EXTBKgwPUT2ABRykfmyR8yLSb",
  "key33": "5bj5kSCAS5YWMHFX7k3v3WEMtPgWU6fj1Rjuv7qxtivU232gTQtL9teQBaSG1Zfi7oq1zbzBFEjPem1C8wdRKvyH",
  "key34": "2SHcpVZj6MPu65BzwfzoSgaSBZWUyvTNoYYZz3TSkEj3Vrr8QtcFYiWAQgHJMQFpkHd6gRqgNuKR2bSVWAsjsZ5X",
  "key35": "qYxXDTRKabkoEkBDJsbb1tqk4QCvNPBvuxtLV5QZLJ6MwmRCQegDq9a8wW8S5g862bWbhQdkymCBaP6NihG3vgq",
  "key36": "4ZNVCJXVXjf4hD8HhSTWEPH2DvfQcMW9ny9cxcjkMoE7GKnborexL8znn8jJUNuGYovPRWBAA6UBFvBSfDPtypbA",
  "key37": "2Ks1qwvT8XCTuw9RrbpWpcDrztcKG19gYquQPAsUoErd9cGTZQwfFT5KBnCTKMR1UWVRZuDajKgEN3VJn54ercBX",
  "key38": "3MLmXw9AG2hbTpzc3m6svMhAvZsPAK7tM81UrEgkvbFXwkVDi6ZMU4wwYfnTSNR7tccTdCq8feDBTQtBSVziQDjU",
  "key39": "EE3K4QYooZreM8hGJFporDNSDyPgfbzadAqRj8GfgyjArX49dCZMyutoonMqBsY58azCPB5m892SKQypy7SSzof",
  "key40": "3tjDDRxa1qJBjnMD6KJdre3aJWESPWi4KWv81tXKpLThPVtJ9CezBbZUQtLd4XSf4pNzoUYmJPByMxmDEZ4YMn1D"
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
