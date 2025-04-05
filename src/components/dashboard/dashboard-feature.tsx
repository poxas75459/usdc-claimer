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
    "5E5uXpYsvNyuSEhUAxmrorwvTFsqnYE3F7rgyJHqwynbfbp1jULiqZsffPjeJFagLYCcaYRWXzmqgtKe6DbYu6on"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s5vvMMd32Y2MqfGzohJUTc1ULBtnAbGjQFGADPXQ5yFqd31w3UYKHcbpBcQ1nzgnYksb9DcML7FqkKRcwdJxGHX",
  "key1": "JrTH3QSHX8JFFsV49woHGVu5t4LzR1h3fPiMCNQL1WuWdcpP6PMZr4njFensw7ZkbpUQ6TP447C2tXbvbfHKeVR",
  "key2": "wGLRFfYLQH8MpYqdmj7M3wedCB1uQBgN1eyRxsLCSc5CoiiVP7HSxQwdtJgZNpgEpEAcjrTsfrqkkBo9V5oHCtz",
  "key3": "3EvEHMrAFg5gDmWHQktfyiZxF9CLbViynz9Jeskbiubna2hgtsG46B751Z1TwqrBqEPKkTpjQpQJQvqE9Y3jfh2H",
  "key4": "25o3dzVvSTcYFtffhYz3Su6ZADeoCh4tc4ENsv8YwXiT3SYSSAVLVGpYvAP9SJZ42usZTPSU7uvdy8VyivinLC5f",
  "key5": "5577SEqXzoK1JvueD9ntr364LVgMzu6jjRmCCUD2h6E9uTHWjscGw4VZS3iCQpqwUttQGtUh4C1SbhsyTvHVcBzV",
  "key6": "4kNWpy6iyXJGd56AM1DtsgJCP5HswPmK52odKKf52optyafrtqE1E4EWEc5zUDJMJxFgDsciq27VVkyqhBDANfnT",
  "key7": "J3dpy2WHwZinruY7uVaX37xaF6GVy1oToJfrHYq64t2hHzVogsNCfG5B4nxiKzq6FYGT6N8cZnpTD5YmR8R41yd",
  "key8": "KcD1wQYkyXHi4XqeMnZFbKks8GzkJkCqDx54S2WTm8aSfWn1yg5p6EzDxEygRpNNBcY8ZUUwfUtAeB4X7ocnndH",
  "key9": "2gzwWi6qheGqhq5An1fFz5LvYFdk6wd774ePSKKhLpRyNxDMWK1ZQsDkiQQG9GyFHiSYdRKxc7HNDc78MG2B7LrM",
  "key10": "5fSruW3mdrcd1eaoZxkn7Ddy7vUSfFj9VPgty6BpMPbFxPeBZDZvvaPEiDDTnA7c5oDNcYRT187CpjiPsgRxSs3k",
  "key11": "2SKfDDVP17amcDnU2Gz8JuinEbAatvma3GQuEV8S1TQrsaYA4F2kutaAjNwk2y4VB43nvdEXdfAQmPo4ZMU9qTNY",
  "key12": "2uGc2XqQXKi4NRovBbAUrZboNUesKwzXaEz95wE9S9VKjPNPuNtw5cLAyGkhtFaBPsSQSR7jzom8fPuaZwDKB5nv",
  "key13": "2KemYyaJnAM196xzpBLsgqZNHwYishy2YXPB4veEuhznrgRQanZcXwmiEaW9yEY18MSR7g63sznRJ1MUsCV968PE",
  "key14": "63ND5AexpbJDQFErEK6HhyzcTwh2toaZn7T5DC9Y4FUHPuhhvxrCFnxAgLP4mpQAFMPpe1JNsCE8uL1rN1UwVP4D",
  "key15": "2Bha1dTwGeQGeEmfPvDRDbj8V3BYDd99mQr88ketjdGKR5QD46yca2XRrVs9ymLFYAjErDjzZAER8niG85CVj4aU",
  "key16": "51S3G3hb1KyonhSpoZQybXFutoHkuGHXoCN97og8ok5vfUNoYvhL5qqTyEv3GcvZ3ZTGyr5iDQuGMaqRko5ZR6mM",
  "key17": "5jJhjFD82HYPrj7hxrGbN67UAuCE48wwiyo3pWqD5Dn9vvXLsKrQMPDA3Bdi3rSuig6CLwbPgxdcdPKgCo6FY7SS",
  "key18": "2Ah876gkq5WY67ojWyvJkX8dJLuJsmxCwywsnK3zZt6UAL633Xz1dCbgianL7qz26oJL1QFU6jUQ5baU5GeGtS2c",
  "key19": "55stYHoRkKBUjvK7RxQWmk3dwy3LEa8DfyWppcYCj8s7VwTXETpof29gdCvFheBqxfH7iqF92v8KURzKu1FPZiBP",
  "key20": "65YyJrDJBSUJwGznJ6C1Uc8epChR8U4UgFhc2EBfuYDm1D6X4216BgeQryNvb6ninZsBLPqaZCidMW4YnUBnSvQ4",
  "key21": "3nzYMg4ujUGhoysyZX2EyqMzxqXxcfEp6itQijgh4sqtZBgRyrABVMvno6DnzAovFLtefSiGUUBwdHWTdjDtaFWb",
  "key22": "2JYKtKj3Uxqoy61N6dSQ4notsp5znWrbKqRamPXS9nePrDNAYLPUfriQXsewJRuCmznbvcEdS5gF69pTbtzrbnWb",
  "key23": "2FPLkSYyhnHV2hoY3m782owJtDUAViyMhad456TcGbyS44akGa3nLbEqQ8QR2Uhwyq1fJm8rj83egquf1Zh7Gg5n",
  "key24": "3iWqDPVtCmZrDUj9ou6Lnwytr8aRDKbf4DghYxq9GE7NJjN84nfbqZ2zmMZCLRK8gVjiSQwNxmT9StWiDxtEVunx",
  "key25": "4ZgMWTMmkU5bKdb6mBDNvmPrWtKGai4rdvs6YzkYZ9hWGkctgMHcoUYzcKwJ62cjofqrKStcTguahLcqWUDEuuh2",
  "key26": "4mm9XaBjDGRwPzLE1pJpMgZibHR6CSUENg3nhkWzB5M3txj7go7VRazdojvyqHdN4h6ictvna6XUhmmCViMMfWBS",
  "key27": "65X61BFcHUv5xaeqgMAUbFmkea1hbsv9t6AYrf9uR4nE4G5RQKtP6kYLyYR6WNUW9wENkrQgmNuFJdKiCAsgyH3L",
  "key28": "FFgvJyJXid4SorNTnMbjyrwMDmk2h1grXey9gBiK1GtNyJgtnn17mMNEn8e7bGGzoWEcZs76oi9yaZFF79Jj6FG",
  "key29": "5N7J6TLaDMczTuXvL5h9XYUDN4KhnznAj4Y6pVVYHq2DngPRqT8A97xEHeNK3A3sz5CvfCZWhUWXJU5WfEbEiNJx",
  "key30": "2Bo5DQkjBmG5hcYkKMQt3rmt3AJh5Lue9dUBENPYxRP8f1G4S9GDVhuGEHewNJKdm3tUXCiuhj3BVTaZpebEdHKD",
  "key31": "A3XbvYmF3pzZc3D6tCqRrrrVgEgh9UZAEQM4XQhfd8r1EaYuV7qFsXWoXjmgCQt6H3JerBMwfPrkaA4ikwVMEaz",
  "key32": "v8YWS18TuQVkuRSyi2eZ73eFkLWthjxgBC179U393EaSLaiA7m2rbrt5rGa5hBAZkTzKoWRtZjD7p33iusGMofe",
  "key33": "Fp2oZXYhgAjgJQ9D1ed4hF66iZXtCTTqYSBxXCeAMhMwRsj1ny9GGZ7LVHBJBk1veKN7EpLuesSJWGi7kpZ8PJq",
  "key34": "4nixNrYZF8EeAjg3hrTg1CNWFmXkeTUo1wuV8D8o7PXAwymDY75eTtfk5QkcooMkGuvDUMvVyrUX7dHqg81PgFmw",
  "key35": "5qpAwhdij5ioSsCvsnm5PWGsUKG1KzGezJyr6EsQaDdFgdBquZfrmqpTrBVA3Mhe6TWKtkdGAefdSuHMPqHnrkjK",
  "key36": "5A5fte4uR5MbACcNV8WKZp3CdqTSWKJgyDxbJzC7QDdgXT7hCgvFq9Dh7XJeLh3UNTM5fEmeaUHzVheEDTYiwK3p",
  "key37": "3vAqVaXXPYH1yBP4gnybDYJHBGDmXRjc87P5HEAqxjAUGTtVdRZun8j1f6stQN46GGpi2X1roKskKti2Sj7QuG6K"
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
