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
    "35fqK6fg77X6negjaXMZ5Uv9TUH76iqDfZ7yjG4B8uSAUd1gZ2w6tJgcNkmptdvTaKryYBgrz6DFkQQUy6TuYbKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m7QWMge4EZkYrnN8yvurw2nyHm45y8HPctWr4AvVwK12SwhsVWVRFvtevSxyfmcReYydBtmeFEgLnYfptAMUPwA",
  "key1": "4UauLf8LeFj179FjNVE2zokAyX3krMrLwuigJDohX7cBDKkecwkhNzzEXxvYZMFBrkQskWtfrBbS5ki4P58rMsoR",
  "key2": "DcWQsRoh2GG8NCG6EsFwxxNCFWbkvM3cXMo3WJyXMx7TNuuu8A7wnt22E9Bm3AWuNJwZhPwWrMByw1rCZM7y2gy",
  "key3": "2kkTfALVTTZ3VsRjTUX7No2eMFjSqhgNe92Z78jcdaHWt44opikpGFmrnxAZkEgRdNLCCAw1hf8sxJmsjzeB3eCz",
  "key4": "5ssbpxQj4Eckv2pT1ueudTkirrKaA2UsaxUM8HHK2PCbtNcU1csoHdeUjPnZq95xmp4xBp7YQMSYMMsbyFUeMsys",
  "key5": "4DrgRh8iaywTCDCcTGYoZNriDmRfk3Rdt8gLYzQk5aBu6byrkPqB2wnLfsdpfnm7wDatsD25P7Q1sSwsog6dJJAA",
  "key6": "5Ut5AM43ybD5p3kWE9ZUPsaNgiHavibrpy1JAANpScL3QH2p3YeqDqJfrcfc5h4xxyKM66sJteyMLz8qGS8DKhqX",
  "key7": "4xBfZGJA8xWWqBAb7r8wRbRizwP2f12GupzDRHAwEk8PzQaTR1yJ9YTYM8UMrGu3E1r4tgbc5tfKaPHchdpTZhMD",
  "key8": "EJkjpyuVdQEE8V6dj1BsaG3eaY7NDKtjyUuKAH99TgvT7s4cAtgNFcTAKyywQvNbYm8QajvagngjyaEDAhNzrPV",
  "key9": "2MY6SsqpZuwzv4KrmUJiVrjf3kmbAXdw7t7JcfUXQ6ayMZtJu9roxpsy5tiMKXEGqY9gqzy8WNMtKcDwfP8b1owA",
  "key10": "4vips5h6a938YnTkKRgZNaF4xJCjUks3LJjKvaiQ4aUJZ8XSvo6zjDS4R3jZ6zPfnh5H1krptpsGJDuAkTzkKRT5",
  "key11": "5vciHtrUcYv1kYMCznW1pPRJrT1hByfrygPbuYt5MXQ2dTSpkaprDhFndegsHffsz7wMtg2d4aGCZryt6cSJdtDs",
  "key12": "43vMoFdK6dYvcrhJM3PGnmVrU3jiJokBWvbzt91DZ8KTJosH864NZFYqo62acU8VwJxRS7v3u7zJVDudnZ8Vcr8Q",
  "key13": "39a2SBFmcmnmwzqXCJGS7RsLookE7d9JxgUkp6J8Tf5uBKxPvmNmdMSDKiXPnoMDVegaoHZZC92NxFVJtH9rnzpe",
  "key14": "2okoQy7tU9zLV6T8fgfCEHRftPha2ssP8PMa6f2usF4Wdx5GqtEAyW72MfM5DAEwNck9E4oQSFMua1QXJYUPujrY",
  "key15": "3L6WDxmTwMfgPdhC5AMBQjZmfiM9aJygNs2QDC5iubYMKDmU7PE7HX3edEGFdJfh7LLrDt3eZCGkaf96cakAm8zd",
  "key16": "5im9iNabXrCFrgcW2QGGY3pPghtQHWxSuS3ETJw7g8mWeFfKwRFR3xhwuAscgbLzheUPBL2BxfynWNmxG6hwF2NB",
  "key17": "3CsMNANygLNnW2V3GPbjvsTzDYthXeD3dqhqtJM3gMFzMLuvNmb8MmEzkNW6A1fzsVxBWrYtnizkBpvCDSGw6Dg2",
  "key18": "2m15gC9jGuthRHj3TgreoiyekYog1yAmM1y7wPL5csaewoBsj8LBJLXXgzRx1LyV61QEJ3rJhGiyZqKRy8YjU4BG",
  "key19": "4PZubU9Ns5SFa6i6jp8RvnTrqXRunzaMUzccHS3wnsThA1TFH2XabVDmF2K227WM7aMUQ3o2wrCgwr68PhxaGzam",
  "key20": "65HJgaKqhLmsoN6r1a6rWoE7PdjKPLC6uX9Hcapn7vQ6zFaQbrmGbf7CTpuoWRqxLTVjF4WwukpyXnBWn2ssP1kn",
  "key21": "5jUDaRkAt6QrT8jdsh5W3uQQNvoWJJQFiH6sciaLkAcQF8S3zHNEwDEycsUFSaNyuTmSfTEFu6i8U7iAErJz2acj",
  "key22": "5f6TrN47RsqnuZSYwGgC2yPLab1CK8cXEo1WCi3xJYRJLR5iEhPSbrsCCLZunycCDSd89KP5ucfWYnezKw4NDggc",
  "key23": "2EvTfW6zRAWw5r38WP4g9PKVojR8rFzu32moDzfm1SyeYkK7wLY7sfBWhxfHkJcdAZtz3Yg41iv2c5f3Fh1ZQGMJ",
  "key24": "8uPfd5uzaCu4Y9SdeyMWSKXmL7z8wRxC9pDPY2zA6B26vRqXNkk9mLBdmtwp9Wu1oZbWZFuFqxy7EzX3uTCfbXL",
  "key25": "3r5AWr1KnRNHwojSMeQEynMtZDpJzyhFBwYSWFzdNAnuNSEzGcmRYmkcfPREqXXR7JxxhHd9wuUq6RMLJEVTcHua",
  "key26": "3Vo6WhKsdf4Qva1zqCGhZ3uiG271mYbHT2NVTDekq8jVrqLERFVndBxPEt72er2zfzk8wuRGTdiL3BSJCPNafb3o",
  "key27": "7Boy32chd9JprQfaUkzipymcs94QWArNL6SbrC5wQ9Svnth21wwBAD7YYcLkCX2RPZHXKbNjS6mqVP1828aFavL",
  "key28": "RRWnZh16GaCbQAXt7wQFLWpz7BMYBsKm1mvxbzW6eRFUKAfRazLVHwSNVPsTnCjAnLRY9i978npHsjK9dGvkn3y",
  "key29": "5vYE5PxtajMFS3eEtGUDtxHL2WwVqw93ZxzgDjcnbvyUJBK3kJiWaY5iZWBPDUvDcnZkikMEB1c8Wc387fhNkcQt",
  "key30": "53q4Cfa1qfs1e8yBoMcwuzgZFoNd8EuEScEGetNdyK9FoU3JdkexuY2ka8i5tYP2ce9RjMobaEPVd8rq5m3WMz9P",
  "key31": "637UkHxoqrouiHA38QLVXNsJsWvKW7gMGBZf3RZC9nhGoWCgWJweJHNK73o2nVgbfEs81QQMAmfKsVqP12GBSLXc"
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
