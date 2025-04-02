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
    "5GoisPTAgC1zojB6bWRCpsKo1ccqkmMT1LQn49n1qJF1KAzF66Hs67LEd4WBnMM6qGJEmazXRDifFLK9jEeoXqkf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "io5G8Xw38EBjr9ECL6u1d6djyads4gVjQfhJEk5k9wH1ywp81vB3Hth6wQmmTLLMrzXsAfpuNUdYHUx3fqK13s4",
  "key1": "4cQZ4asN8zuTMWP6hnL6tfEtran9j6N4bDFShkENyGoqGM8EYxQad5RPRVrZxouBuohsaanuhTKrofiD9EYbsfLo",
  "key2": "25uZBuUt6zV8wugQAnGqb344znd3CrXRt4BzKvMyo8SCrmMYRnzozFFq1YVDEu8UJ9xVmTESf3Tofo19Ra2TNTF2",
  "key3": "5TXAo5dC4EoEEcuKwd7U1tz4XnfYawQ5c2y73F1u1YZLgZ7R7EZap6BuerKRvPS1TfRaG9dUDnq4cLftpYRa2sZA",
  "key4": "4kCx5uwzsbh3yZfrW8cDx3bZdbHgsjAQCC6NhscwmqE2aiRoMpPgWqt3F94WU37sS5Tf8apbYtBJvdywdeiLH7CD",
  "key5": "3EDpdFBqUXXyZF4HtxvzX4NwVbMqnEGDEqw4f1xrm7sENYJKmgAnA9DZMA6ujSCEsoJ6apa92cqmKanyiMS9nLf3",
  "key6": "4Dwk2VV1Arn319ZsfUY9qkDQnsA7hFpc2xqWZekW5U3zhxC7RvdBFM8QJjgsxxvNTaHPsj3QdKBKRHHUbwAkd4Vh",
  "key7": "65Ld51JaexcvPfVEH7jAH7G8z6LvCRBQUsyq9cr1qTCtHes8k5SdMdddjHJj86C5yYroTuMoRVzKaCN6e1rgnxhM",
  "key8": "N6Kt5cn86hmirzktCeUqB6Wt25CcnALK11GGnjd3aDxC3oCYfH6thqTQdMgS1otMaMKxDXE25CVqg74pgH5zis3",
  "key9": "iPLogwtaf1cw4Kc4aoPSdDnyveHGL6xmv1fWn1THRj49hn4jsLsLkbp4wmDrZAinnM4dFmYxH78sX2QRWuDCKCu",
  "key10": "2NeqPeV93J7qG29fZs38iN8SptwBTgJL5XvVuXgssY4EQjwn2eW5FbNmjoSmM3iMKvTHBg6eCYHbQ45YpYHDhUp1",
  "key11": "5cYnC6UrNpH8wNsRSbCLmzTHusz7omp5NpydM8wRpYnBfUJmhtra25ro8XDE6ACFowbdcSAMATe2RffpwWHppgGC",
  "key12": "2VCnxVbgCuXaYueYZtULea5rpUPcurnKnY16VjhyXJrwT9EehBsc1tBKvfpNeCcPcLRqC52H3baTQEPVVEeSibqE",
  "key13": "m9uJCavPv7jSgyt8fkBz6zFoGp9UXWx1fsdcjE1P85VDf8w3pfMZEGuie1Ldb2SyfpGkNJgYVrdpRsPi9Nx1NrK",
  "key14": "5XG2CBcEBBq1fbrBFKyf3Lv8ugXNY7SivhPVyzFa8Et2C8Xcev5yaYGVTaBzx31MKje9SgjpCD3H2xNR8VNH2M1D",
  "key15": "v2bRD1RM6E4fnL6a4MLuvzdbswqxCgUXS4o36Fnx3aCjCNsUgv5fJKaKjUXjBN7n3SFDXGLcTxCrgHcj3A8GyRs",
  "key16": "5CXLBwGMzFbXYj9GQG2sV6QwiXSVFzprGrhyDPgCMGg3njfYBLk7XKpmPcAtBumWsgQAhtFLLDu4Xy48KCmpV8U9",
  "key17": "4ezvehsisLewBkLdNLdcQFdNwtJTd9HtvViWk2YV423UFUp19d8eg93QJGR6i58xzY4FuRDazLTDCSdBwbk9Krpf",
  "key18": "1THi2MhQKhsM59UpT1HSjsZJ6UKxXkWQco6AWsD3piNRBWNSxq9HCMZMxoqMSPm1L1SHuTUNZHVsbJMSW5KLjHZ",
  "key19": "ekArxyS26fmDJRMRR88wTvUL5z5gQEZkc5CRMhhCKUdm7KAWqWQNYGKhADfoVpKSMygkrcLyNHgcxF1fidW1AWM",
  "key20": "3538XnCWXZNq7FoBT7wRVCpp1iqWCYexPChBUhQPZCZEWWZYhFHrkqM4ZGkohKaHMsigyW2DYGbD2BopesN2krRk",
  "key21": "5xNeb4iL1G7wQCdUWmQy6Xt5yEgtcp6o2D9DPpN4xrfiRyARWucJtnKoe2aLK8LsHPiaSkgRmWkBcxArEPyYLn4g",
  "key22": "3pxQe4Kv67gkYVbsbRSEsB4hWQnSYaUSkrXC7D6HgfCakFDZT5J7CdaEqTqfaefA1NFhtcT6AUiswpEHSrGALZf5",
  "key23": "5XtbZS3NZ1bW23gcNmFYayGBDjGpbLJNVuoRFSUtV1U2Yn7o7Dg19PDKLTafVxCJFCrnMrFi2P3cmzxgjZMTRMmA",
  "key24": "4yKUy2f3EN1SfCeDWLR5oHrENvyf33JTxqEc7WwjKeameZqLH6HeRkznqe28p2t5zBy84VsJRDhPcJkbzK3icYn5",
  "key25": "2wzZJEbviPsa8GGCkRSG6mGGWNup1uG9xA5xUemVZcNZ3L2G9YaawTQM1pRXdQSdTp8rbRzof6sRKzz4X35f2NuN",
  "key26": "wFBHA2ire1ATYD7p1Yzv8N7FDn65pJbdUj3p4THDYWxjD6FJPGWaGqTuq3yV4aGdYViKiAFFxsvHdAnjxYdHPAP",
  "key27": "AbY5wGcqenGfpi7S6xU8GyEnSs3AxxjT4R88RYnvyT4qay21LxUjd1miEramApTRdhUHQTdamtWUyLFFUdVg5NJ",
  "key28": "VEyKbUEhkC8mG15GDtAMhFa7dBbatjBm5GVfoDG6PE2WwhDX6toBG1rqmJkp3wc2WRDtTbatxKfHCr9qLAUwcBD",
  "key29": "pgnKRGvJdyUddf4WwRzMBQHZpMgbrqE3pz8kEfEQ66c6AMWjQuyBUqeP15ejdbx55RNQyiF9KGBQuBM3tc7gHkx",
  "key30": "4pboYzsSF2Tgtxv7Jcn96hz1t1nB1tYzvmBPBv4qZfTcQGumpojw9YgKL4EUH5M48ceePyEDTz2CRf3MczwUev9S",
  "key31": "25JrgNaWWqeMVDC9DA56e6or9Uz2617kHQ2o28KZnx14n9qwdWmEZDqPi9FGN19BWbcAMVFvF8AWLLNuMf4pt6hC",
  "key32": "3ibyqz4qLjSr8Su8YS7yruTYPSc1R1uke1YgcopaYJfd4vUKodYAnccC9cpcZWqSSmdNyBr5sA884tY2qphH7asy",
  "key33": "1SF2efq144SgrVQWKahzrFFKRkR1mzqaWixZ5nb4PyshDeaz9iNtSS7ey6PiGPzbFYpT45DLhdtX15EFspVMZph",
  "key34": "2ZNBFKhsLM7j9zGBJpZzNoNpimY4nJ1MDTJJdS9bWYdsixBWasPTrRtM5LLLLSEQA1vqehUW6NU5xouBX9EeXaj7",
  "key35": "3cPWv4mqKPVYWHCrGKrn8gb9V4rCeHbeWKNKk8bnbM5i8bF2VJejWTvX723C9LjQQXK7q2XEf6caVJHdWkg6Y4k9",
  "key36": "5Wq7aKWeSa7M8zUheb67qtvkpycbcAMTneqzVrFASUYHkFBDZbbEu94Ye38ByLT7Y7muvVgr9cLLvouTEgTHGWc",
  "key37": "4gXp8sbFi88FMaeRBDQXaD29yAisp8Weem6fFE5tSaCA9nefAghKzbYpzEjpPtyGDt2TP5k8copegPRPSWp5Map9",
  "key38": "2oRWVL29z33HTgnp9jTcALiRQTr1LukcfG6DvPbfLZkePhFLkyMuZZb27EZVFQA9w3oec9zCJWE3w3n3ZsYE572",
  "key39": "26cenGaxxW8CaNPiUju1xzXJ72sN7h9Ytvjdzj6JgnjTjJseU34wS9SXj9KtFeicX8zJ6xDM2iaAX5VdUUB9xB4d",
  "key40": "3n2xDpEwqKKFg7i3rqKy7Vw4bY5tCV2yd5m1MXUReNqGjd4vMzRmyLyX1uFdeqX6rtzsbvcdyWJYdud6GWN63Qrs",
  "key41": "4A4YXvpWfNyWkdkrjLVuzT4vQ5U7vnrUih3AZXwnxuJcv8p8KSanaB9pDr9SkJ9LWXHbpQ3Wf6eytDDhvZbGsv9j",
  "key42": "3Wy9k5VbjxnwPCTBscCegiNtAuPuKe78MHPaHjzV9hZCshoEr52baTTGNTivhLEimxg3K4wzZ9AKJ9dtatfqVHUz",
  "key43": "4Sa9id9m74YCDf3BVhp9qL2DjvaRRNfHumwF1SsyLnsmsihv5egBU1wMJz5LH49PsuKxGUZXiutvV2XBXkEVvVGV"
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
