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
    "cAf7FdZphR7t4bpCqVNdZWtXAttYz34ESiBEPCEzQHr9SuHpsYVKPPMhKGzuRHcTrqvjrrvSCvJdJg8Vx5L9WFp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DicS2AHYEssBYfEwhdbSsfE7zgpa9rtARAH26cp1cicG2wNNu9efacy8TY9htsiYdXP5XcrcytFjZRtfcjUSrnC",
  "key1": "Nvv4fHpLxW2r7s2uWCLgpuwy9Abiw4gHjQWfLnt7RnHuG6ct6uREerQDxDScmf3FTJq8qZucLNENEhsaWKpxoNH",
  "key2": "3sGz3AyCuzMEGiNXcTGapqDtxe8bew6tjCEGwjj2guu32mQifwJiGo6iZp7yxKmPyWVEC6G4oRYb7DZgHPYdnM1h",
  "key3": "2tSHfZo3pDjYBQxXcvL6qhHaYZX8ERKatUFepUjikYvUK1pEQZgJRBjcKVVbn4Lgz5M4fwYax2xZgn5HfLNYz8mA",
  "key4": "2UV7p57Vw6Pm6pDC7nARJQprT383LjEeM7U75D2nPnpaZ8RjkVipciRyevwbSMg2PVcWT1KE1NawAcBrXzq6tz5y",
  "key5": "62btngikBmVfRmVktbWWhqhasDYJX7DsgyJ5CsthcUjgxuEiwLyqKC9GCFjKiFeZN1Qiy1DHbgruntEZX3PDLVsA",
  "key6": "rRM6cdVHNvNGHy3mDvoDBMTGy1CFEgSVe96NYuV7i2HvhQNU9fBjvoBBjm7PKbBUfpPt9kFQdU3vsvbbfFKQdqb",
  "key7": "3Zg7RuehCQo8n8xJxdRK9uLatMAwqffrLkuny9TUWizcq69PHXggvaSkRf8aDzNMupKbBhRSwfi6xqSqhT8qb8Xk",
  "key8": "33H7AMy4pzHE5g64YsZqugxxcQz96zeSZh9optFL6NBCtyp8wTbwRqaGyKay4aEwrSYJ4aUD65LBBvBH3sXqJrqF",
  "key9": "4C99b8qYdJgS3TNaHZ6HgGe6L26xD7hBamfLU9Q4iEzFjVW5Bt6Uk1Ybw7EPpffrgh2sa3vgUK6PneYhmiVmEjUL",
  "key10": "UGAQrTXtsSfivXq4BiNVZLjLVgpaySYrFGHts29A69y34z9qBu2u8i1i4kWwbVQ2JzRA2aHGabtLpSXyqc12M3i",
  "key11": "5aa78H4aP9EKhQ4zwJsZ38vvrPv3aZnBNyf8b5ZBWfZhqC78uAKeVdjidPhcThQJtW6xYEdqekzLSGTsduYh6a5v",
  "key12": "4VHUDYsjoYT8Ebfk5g4KV7uFNa5ZSKfWpaVzpW8woBnSwVGoKPgkcc21GJcVEY9unSMcnpSo49bBJVwKHAmKi6Kt",
  "key13": "5cFdzkWEm9WrPDXCDQxMfaw2e8Xu59ag3CYejBRZyLWobrjLCN6gDwpMGiL6J969HuWhV3jMLDc1nfbftKerdUfj",
  "key14": "oUdGRq7Da4q2myjoV44SmCcGBPT672x8KjZDGhnUwtDnwLAPKEYQmZuEsyF8yEB4TddhUUtsBANBfVeJaxWCbFV",
  "key15": "415U7JuRMGE6TKwMDNkhAkeUptziaS9Z6CoKFptf1qNgyumWaNjkcWmgQhJBvbhLkofnyRCQSnfNHECJ8AvCSaTE",
  "key16": "4qFAcGPcZvysPj5JigtcAamCUVgQjGvhL5aCYhfgMCrTdhmxcvdAky6ykAr3BEALYN5WeyDQZkBCmioo7LjWRwnH",
  "key17": "5AVsq1reexXf6njPXwA7qoWPLTCAJ1EF4yEFRkG85bRUUxjfZRohhRTTbxBGTuAdFF4T8TFsWQUdxvBqg1XqoaMC",
  "key18": "5WEuq2wNQCLLGs2UppQaoEBDJjYiDJKcCCeayGCm3R4gB5M84QYLhiG7hVk6Av6yHwfSazmjvxiNSs6ugnqRT8H",
  "key19": "36bscpfV3JVaL8gQjsNeAtrBJsP4fsVCH3MBKUupLLsyjfAVHNVKTVML4BLQVKnZ2nWNNLBZFqbREykHYCFYdMh8",
  "key20": "5L8SR8zbk3DnzGBn93irV8hXdYyKEvN9Q91WTrELdwKSzmbvmyiws8owktGvrsPpbqa49Fu4P5GaNY6bdVgQmCF9",
  "key21": "3HvKW998tBSWpLbiagj6hRvdpMNmwrL8XKRPURk717ejTBKu4PJw6tkxJ5shUoY8zqp6yLibZjcYu7XWeVg2mEt2",
  "key22": "2Rvej4SUHegTrAVyb6KXvb9cw1XJLLnXhvBBgA8JfMLzLTS2yig4WFEiLjEDSsQocFssRTTQUfVUXbMTkZuq1Mvn",
  "key23": "Rme3V1nyEGox98ugZxn23mXxbboAxLLXThMGnSGCnuPT9Pn8KrVSpAqoZT5TryYAiTXrB9NntuxMfuMPZpnNeMA",
  "key24": "3gDdUddXngDiK8969ZcoeiAADWteUTv2SkrzuQE1d3qm2fD3LCjTvRVNN8dYPSZ7REjVkSCYS3tkKoYb3f9exDDF",
  "key25": "4hHs5UBhPeXzSVViqHZNCfp7WvopWApDUSmdc7RLQS4kKipTMhLQd7AhJmqutNdz6btPQRAWabtMq7bAd4r751BY",
  "key26": "3PgkdVLov3Ept8uEGJ9mw1wro4AYnR3Xte2UpLUdYD17jYCJt5dinFSdvNvae9ixJQ8XLz8Yz5FZxxr5QGtb235m",
  "key27": "3HD8rciVR81CT3wuD9hzzkn91BsfCVRLb4SyvAbwG8nWJTvFYUcAERYaP9cqRVfCyHKxtf9FB1xexdzB9kbyTGNG",
  "key28": "3VfXTfjmZ43BV912Kb9NCprXMubxekC4dukWifjv8wEQE6Sr5CJyiXZVx1hqK1ws21hxfdh2sSNtX76fxW3hvUhn",
  "key29": "3WU8ZokfrW1hkWEwdk89EfqnbVSXz9RTZFgyY7euxKm3qGUKNb4HT3S4hzCyj8xPWRuJ3KQVCAoxL7T7bsCBzaKh",
  "key30": "2mhK4VTnA2UuXscRtntN9Q3ykVq8XE6FymFnVwuUZgk1y7hqJUDqQCckKhgvVYMxyRK5qG9tcrychG5bSvxnRLV3",
  "key31": "63roA4JpS924TbJaMsyqaUwUhTKjdgqJMqaVWKKQ21zMr7J6aTA628QJbX3HABQki5ZfXERon5tgXYa1GaBPd5wK",
  "key32": "3RN2zBNx9PQ98U8fhgPcaEPmh3T5GXpBfsbEjye1f1gS8sF7F17isM9UBQL53pfBpnY7LPQtrvcww3ATCxt2b2pb",
  "key33": "57TfV2dviPPMstiQ64HZrvsPCQNkmncQk99CkghUCXpKzsGNZHU5CvE9gSz5vrcytsAKkrYfa5VUTLnmdp927be2",
  "key34": "KHLDcyjLcBQf8GWf7E4xim4yVmDxKSTKMSt8ZF1tVZdUL8PPb67jq9VwiSy43wCvVozWdw4JxFdPY8zUxtVaT2D",
  "key35": "YkKWofqwRUrQkq5bQg1dqspj8gFYQ6j2XnxNM99c1XyXHjjssu6o68KStGuQPEy3DzMJEYcY86xUbEibQjYVYpA",
  "key36": "2WmU8WBQRdc6TFMjqwEb6s3F8HeiFqYasWyV5LdhNrQkLzRm8YDT2Vq3GmUZ3GYTJpzzPHG9msMyhKjVrrWz9Xdu",
  "key37": "4ma9oSUNEYDmZJu1pvb589MXAUvKjAGjKHAY2PHvbzXgu9JVmP739mMBr1sVDMXWHKcCxn7PWViUkF4njVxfnrNM",
  "key38": "duYa2TDhxta4MKmED9idWoCwdhrruiQo78gzG8QuiU497G3zjboQFDBC1EDkPHagXM2gT44f1FhEBxjokPp9NBH",
  "key39": "28SwdHmRuggZsGLCcF2kF5fUtBKF8zFWw4TYM7TA3tB6RcSseddvvckDnuMr4LMj6MrRK8SstMDnLeRCd9Bs6QBP",
  "key40": "4xFQzs5zA9g9FXQ1SsTst3h1wXj95UXczUjrbA8xZVbpMwaZY6HeZeVv4hvAmZZDJW4bLmtUYRzHfQ7HfddxBpWu",
  "key41": "2YZEFgf67k964gBzKx8a5nrQ3bGLDVnEVrCx9LJHG3R3EbR9Ym9KFYB6gswhW3QSN64HwFKpDwrNr7DM7SZiorHN",
  "key42": "3u2DYGmJckzQBh551uN35UD4nTKQ5PbdAP26QJm47JBacSUFHgpqtwmf8ib4VvjQRtHoc2ofcFq6z3ky9hyUxRt",
  "key43": "4HL1RZfzDSuh7FQ9kyqoY7YEBNdtFZL9cjmvdyHEuQ3hFrEYuuVZFtaxUqy7GjzAjxHFMkrmgPD9CWypaJgGR4PW",
  "key44": "4zEuVabRcYQsTUv6gp166gMqwhVoej84fRLK1U75KHFSornEQ5dqhGUyZpe91cs6FRBAcffqMLt4NA3SwnnwSDDz",
  "key45": "37igXyHTRzRrPw2u3rR9gHJEYBDx8us1BFynMzBdbxPb1qoPuQuX3AKhF2UkGMi9PT1Nte6mBsj9aaN2Vvn77aGq",
  "key46": "4bZLQ5CGKQWzZMShhuGDmDXrYWtw51Jdp1CduyjAw172Cc5ZRAyQvUGqxAvhs17e5Cp6hFK4BfqJKFuy5MWVSWMY",
  "key47": "42wnq25cnDue7Y1uBAyYHvNsMn1zvLQLKuZkC5zHUbbYZqdUwu4Bvd4cs5Pe4LjyemXRu1GUWwC8FfkmvG1yq15K",
  "key48": "3uCgY2pCpioeU7DvaDNyYAyyc6JCx8VNWBbWToojq3DHDXVJDEbTS2xaMqcod8GjYjJKwV21vQMzLGd9hscjt391"
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
