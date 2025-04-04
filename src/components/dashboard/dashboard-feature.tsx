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
    "33B3959nMbw4eNdw5dG1jFVt2jasf9Q1t68wYbJ9Us5nQbibjkusSn2oR7NknPKQFLdohZ9Uco1EAmFLpuyg6M5k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LF2bGSuGHvQpchnSWvrnBZM8MLrnTBZATZujsNCScUKwaM7P6FWFFCpXpbsYPGi9i3NSBiE4VNUGHUnLHBVgZqg",
  "key1": "5vfNkZh4txXH5CrSVe5BpbKtRPEedy8Wu85KzqXEyWSXy7zDhRwVQXWA655HSaGPFNdSEP7ZuXAoKQwn7cMTs1Jy",
  "key2": "4ZUNBoC3pN2CPtSrpGo5fh5bCmQzcbq9V2ZzBU7wndbUJFATJtZvH57jSkQ3vv7bZKauXyE6zHifgs3LQyXxbXYZ",
  "key3": "4cqTRVwqcGcDsyY5T7kK14LBzd6qYjQWYrFzgZtSGtLaMPqSRa3whvRgFupBHd95AQpEFtjVTG46e7ByL64uUNSm",
  "key4": "3ZVpw5vk9DZvNyAMb56mfmTjZCzRiYpAEQAizFGxYFsJX4pzsc3DFBL1v3GMD4A6izCYLJXqmNqtG1GHfJydhX9w",
  "key5": "379vWKd9do2V2aNiTTq8Lkdvf5W5Undg1t6uWD2KBqttSiaxjy7jWdMqpa89xnnz6PuHjBE69ge3qdqS4uBPfTqX",
  "key6": "4RQGGNHSu633MRyBWFn3rqTVMoGMbNjPZz7etUkzwn9R32vZb1Ba27q2Z7Yg8BZcNLB2t7B4VT2kHsawiTu6FNGY",
  "key7": "usqLQToegaahm4N6me72qryzyRsfGhcy9LAcgW8G3o3XRohmPRtthcQ1tvbcBTz1dtUSgP3QqxtbzmQZoAMKtGS",
  "key8": "gpzFr2k1aVJP5ZDk1TCL27xYzvJPK4ATXEuSBWFJoACSnw5AA6qgWxPmoULmV6KWkMUwkfhhJXMNXTgbMkm7rzm",
  "key9": "2nbpztYCSnsrYQBayT9m283wKMwbrsmDJnXvaqgoFpXw1PhGeEZCSLEwBT3yMnzbMJiPkoMSn8eY7QXd2jaV8njM",
  "key10": "5nBT4cEoBPQJw5PRZ5vFE8tEy24mtHREj7wYPwANSry7ZgmUtnzUPdXNK6rcHQXrryyjQP3HrKWRoQcLXtndaVDX",
  "key11": "fw8BCJmVNFdCqzNJRZDDdX7B5vZUdARzKPEgQRAp6uYYV8Thgd7YKAHaT7Ypu7XCxrrHMNFxFqJXUGGSEEzfZ8C",
  "key12": "4a46uDY2c5atd5sJS6BcYiEfqBMhW7tk3TH3GrNhgZmmk3X8Su5YnhKHmcrWmeqr29QNWYe66nUsQ2yoKC8Kd2bQ",
  "key13": "o6aYKffmnJQg7AQFD2M8jxUcNC4xLRrCYcHJeT14V2cN7N4eiX5fMW548jNvDQunPq4qFpT6g1Ss99n1QQRRy81",
  "key14": "374g95kMbwnZa8MqYtcjq1oFWgwJGJeo3mue4Y6ALNhpfi5qbh7vx4pBgjqdWimk7UwKPrAgeG6M8ssi4xdZgxsZ",
  "key15": "5DjDgJun92yUnkUWhE2ycvGjAJBK9pJAxyzwyJeHvYWGjAsV6sjZa5AP1NYarJHoysbKioVrXe54gMCKSTLcpy6Z",
  "key16": "3L7DzQSVJr8e4wCnqVMRaAFXYFnEtKzHNP5WmHdUGTdazzTMtPGfzTwCnXA5wC6rNykhwAqhXkDorf4KZzj4hn6j",
  "key17": "3mgx1b2TyQjzsdjhzg8HQdQCRBvsw7asMVi52y5GVGxpcNDfxedEE4DtU2pBN6c7RULZA2MY7Poh538t2T9PaRKc",
  "key18": "jfPvDZqwq91FjhVZEJoAmRSWZTDcinS1Y2cByjChrBgPt2zhXDdQ4KpxwMappqjHcYMsF2u3UAJgNaNmgty9Eb1",
  "key19": "3QfZpv9LAqnYcoHsgs7kLXPdE4YNY9H3jba1nrFsYpWJ68WUPjHqXsv78j8a5Njgx52tJg42uuZDDQZwd8q2JQG4",
  "key20": "Vm3rXbRwoG3DVUAGrFdnuAE59UyzRycGXezHjoxY42pmjaTnpccow9mLxVmj9uWyLuYShY7PPvRGt6dUG9HWWMC",
  "key21": "dE7FPmaufY9HQrUjGHAfhKm1UBbykLHAgctVdjfGS3XL61LEpemMcbqesizK2jhgethNwwMHRUGpG29ZeBQpqrY",
  "key22": "5yQ6ZMe3JEwY61NJkw3wkTZbCjLZnwLKfpkZTd5tC6xusioPqqy2bB6W98WiHAfUzYcNQyKEgrU9ywdoMVk8nWiz",
  "key23": "3BhHTeypAYJqCP9gwUCTZbE16inabNNC8tsw1EC72y34ZkJfxhrbeYb4VEkCu4wK3czChZE3YL6TA8ZBkmdyLJay",
  "key24": "2R4TB3ffpCjcRUfCWi86PRyoHVNGzpikw6mwsuhzf3G36yGk57yhwfbYFQ8s2LFKA5VCBaqxSHwDfpHdi67Swa7C",
  "key25": "2cH2FvjajQKj7nWhzZXsDE2DQ6L9mXunfPMKyCAsRMfmjQC9cgfuB6g6ARwCdDLQLgtmMmUxS3fRJi1hx99q5BeP",
  "key26": "22j9A6nGcLyTvFMC67yUDhMa34K6hhmGB129bp726diAVmwzVM2DhjNtqEVZdiY7J6gjFmavZFGu6tTm8rtmXxHe",
  "key27": "5zbbG6bnWaYuNsDmj3aCrBRNPTbv4qSHhPmE2afuHJnimAULNvifY5s7V18XWFKnHUcBUyBTpu7EC7kuQVpLkgJX",
  "key28": "5dxfTYLUqHDz5BMXmBPWgkjyE8nZVMFk9iPCTYiav6a7EcywwinsHugo8MjhvP5ybFxEj19Y38xk1LZ7Q9wgZpUW",
  "key29": "52s7LG8zq5vo5PjXRZNTcwyKGwmoSufbpUz8YyexHiEBHFQvW5HjAnGG5CE1oP6c1UQueh9kbiHAfX3hCBy4Wau7",
  "key30": "gVnpCsygreagBzqeasCn5VisXE9SgZfEQ699oHcNYirAkobjFfMn8ZACKNiZEx2nwKoaNXcCpGF2ujGTAfgFWDV",
  "key31": "3bZ3sKwbGpMoSNfAkV54UyFw3WoZbev5bW1U5a94iEUNMQ71da4jLicgGgnibiMtnZGdvcQZ34sEBGhpRqnzxNQ9",
  "key32": "5SUktSAikJyvrTow7ezvCJ9LfEwzA3kRmdXB7gzoDLAn6hcSmcqK8gzxmvdtyADGTTH5gQRA6p22VF98HVE2XE9F",
  "key33": "5GBAh2rkzDwc1egdTVjhKUBn4HHKJzojex6c5qPHKUYy9bhsmqGzbXkbWadFM8iXBPHxp6UCY56zECwtkJNXYBj",
  "key34": "5ymYc3bVyWNebYYCsTYQdCiMw2x6X4APaCsfDDQFK9RN4qDaJhEiAbNta1fWJJJnuwZoHunrYZ6Be6DYUiTaH6QC",
  "key35": "kVnJ4LtbTBFsgg6Xbq83b2EYXjojeGucVjF68sbopEV7cyBcWTyqxMmPHU1UvSAUvFAxwQCSGrXBjaBeR58Yso5",
  "key36": "5gDvCmdmcC5c5qJ1WbtViMehpHiLNAHMRjDAifN3tPzAStyd6JmRuoWkXsabpTpRvbhVeq6CUj5kh2np3fHwSQST",
  "key37": "62HBJo9fh7Rtm6td8dK1V5CThECqXLrJbecymJC3iimd5RbJXbF4jaq7BHc6TruJCfhxrzJPZFzubTn9fc85p5S3",
  "key38": "2MSJGV9CA1qdRttJmoXsok9aAb8XWv76dceLjKjkgYyemhQr3hybySNjmCdMoDGe6gRworXAZLuBtpQmWC5C24F5",
  "key39": "5soyW5DSr9jWMf9PArt5JXQ3e6m2Vd2rwrKZchnzXsMKnQZaSubuRZ8LZF7mRGkeH2ps91nqFsj1rR12FWYmsE6U",
  "key40": "5yPuP9mRR3BtDcxFucu5gAGwagPp5F6J29FGGMqVKR7kQLtkeT2ZKeTo4k5FgLDB1XWZxFELzQ5wRHfyBPveTTws",
  "key41": "3ev4YdnVGG9TE5tNAsmzzuWZJUF5EE2rB1zdJdKTDBb5snC57WTNtcehZ8KnUgfDvS6L4EQjeD92bcsTDz8hWimJ",
  "key42": "2ULiszQfoFp5pJAikuhTr8yzhyrLYbByP4WujWoqsLbjZHfCDnKQSneLxFPfbWMaCfEu6o17JjvAhZHd8tb7qpVb"
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
