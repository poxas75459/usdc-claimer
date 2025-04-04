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
    "5143NCzBydn8TtqgHN7P2MtAmUVNqb1SjFbhkcPxd2uqQGm4jQd76HH8UVJypLNVkjcfnhgJsB2ACZ3SFT8YwtrQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VueyodpjLZQuEH95EoWPDcqhG5igPdVGxPd2YRjAuThLoxrLAWnLH6GjAiSg33SQwdsxHi7u9AemeM6YbaSXpET",
  "key1": "2kCnvHw1TT2tUDWkJuhB1T7qQvnZjcbfzcRpvwNwjf9zmRJkkGDXvwq5WHxiBp9eos2JcfyXwNCYhEWcVhczvisb",
  "key2": "4XZbPFcJXvDPL3iAdNQGvKZC1rHb8JEKjCyVU3F3YPZru7us76vLrkc2urqw4nmwwKc9WRvyGPU5PsMURipHVNFD",
  "key3": "41wtGpHqzHMnraNBSD6FWwptp2MSH7mMfmg5qxtAWm8CvscTPPvmrc3czAmzUFoSLpa2B9rgQ1Sc1vzaBNL3LFPx",
  "key4": "63sfQc2GCQ3sQJFEDwYmqVdR8gXYHFQEqE23Up7wbm7HuDfocn7V4GSgBRK6DagVtJFB1eWjGSESPQQRXNqyfkDC",
  "key5": "5dEfE9HfuaZxrmauahrJXwHKwP87QPcooms9n49ucQyaoroyFdiWxJRmPyWyE44fy6mXH2jRdDsvA6ovathpyPSi",
  "key6": "2eeCMKsZg731hiEy7Hj9QoKfwu5rXUqZ8m1yEi74qY6wCyttAXq8HV7Fg9XVy1ZNs9cTuWa4bdFJDaQUi84dmapv",
  "key7": "mNLnUZLEsrBQkQhLiRNsppBSh5puhRhNn74nSYs2Wmm3vPerhUo9JTpuYW8CLbm5GxPdfEkNfbUYg5Snvg5TWTd",
  "key8": "2E4H6g4Lov9xfuGfaMoFJQSsF69G4jPJD4U4X6Htq4EPxYEbQ4WvNqRkkAHaWte4Qvz9UxwjAxG3e8RgG5kHNYJ2",
  "key9": "525HN9gx81EmTNy9jXU9GYKoAg8MERrZVTmd5EAkX2CUcyQ6Teaw9LDfGd7TSDtTJkMpVWf3A8jNcpkt4ek6FGma",
  "key10": "2FLgMVSuM6Zk2CxFP7mdwTanhSvAaE3YH7uZ7TAfPn5ePMYMBPHMdaLKPkX4wHBSGwJnYyNz5ofFWombnHKSqvcD",
  "key11": "33Y6nCFTs3Mqu64uDXXHK8yMW7jsJx9mNYaaWrwKZbS3A9heQ6QiGDA2Yu5ns8aYwAEjBvgSatP6wK5TJs5PPUqn",
  "key12": "254E8CpxWXnqSf8RHA1QF38tvj7Bm2AQp3iUd6kBxnD1Z2snadF9BwX21JNCzdgRTqS3LbKkxPZizcufioiuuteH",
  "key13": "5uEgP9iqXaTVZYU9a7p9CAv7xA4ksai4n63hRRKGrU5DzRYqVWBeAGJD98cDGa1bdzxqUFwnR1xf5MjUopDFjrrv",
  "key14": "sr5PJSFq42zscF4L2Rc5vpRZk7ZBqgPAMFSss2W5BPC2GoqnoyNQuERA3jM9BCu3g14LbL3YY219b2DETL9mcaF",
  "key15": "4KzjKfPVm6CN1LHpPXWR2XYNo7Vmq3bgBxawbUyNpBNcVhcM8R21KjdKhekgAqeAhoEP7cErcSNP6PCAr1wHLkGk",
  "key16": "4BBCh8J7TERYEFSPUTkJbtv2iFvnX2AZsSDS7AejAxYpzaEzecjJfQGiUWmSqafefTtVKqzuAJAAhDs9kvHCAGXz",
  "key17": "4LLRL9H25xojyuZbZ5jK23RaU4zvF5JmRVFvp1DGoxhJvdH7vCLwALP7KZP5Caf4j1FKgtaXXWj38gsTsybKKUx5",
  "key18": "7Bzd9hdqtCuF5zz3iwpv4UcjFuiAxwU3fzzGnNkoTvyQhdEjo9EY7AEwWxdtFK9JKwUo8dkUnhFBfqCrsjgkUX9",
  "key19": "2BRQDbxprBSV6gD7pAMZpzjWVyrj4fw2bFt7ixEBfsr55GmMEm2wwCqjaCAzhk8r291Wky4cGHzKbW13T9T5PkYf",
  "key20": "5JgZhS4xbAw42x6Ax7YqxVMtCkdBcEbLeS3YeGExj2jHzwUjMX71PS5tQX5ZZ1ZRMFwbrmsRcz4qcd9f9FxxETPt",
  "key21": "3cN9ZwuDekJVM3LFHNtoqsNk9oa5Bj2nr5gDmDuAtFCdDbVsbJZyTJQjNSZ614bgPQEgeqvr1aW8B53yvFtzq9y2",
  "key22": "CW5JMZueA9AcMXtQ8XLihQVoLkTaQws8sbzzm5j7PXtiT7JBWttmHj7a2nWHxVVqnb2JVhVntoAArFKpk2McdcZ",
  "key23": "5LHSQyW9pkKYNsmTeDzrjeCHh5gpj5dnfL5jgVjrZN4N3pz1DHsJfKMBhAH3xYenYXjAj7fkCuyDG98rShJ7KkP3",
  "key24": "3yrRNSMm5Qe7vzCwQRMREyvJf6GSJZQz95Lj89xkxUkUNSfWoZ1aciRTcp7TZd5BrA4ADKGQW7T4MHcdpRLwAMGM",
  "key25": "4Uxhpz2osmX43EkXZuqvq3wP8Fav5NL6VuQE4n9hCAZHBjeNf5TkfiYNJ7DfkjtiLkn8Uj1FjVaL1gcUwctRKivC",
  "key26": "8sxcGv4iv4YhV6wUZq4KDc6rdY5tCfaewWFu6TjV8vAxLW35C7U4ZTwi1983kK1SgvDpApdpKJwb5zkxmz9w6ni",
  "key27": "aAscL9ojMTQyRyekiK4WSup6FSxHWY4FJHKr1Tjbr8kzjQm2TRHBDxepibSH1wFApgbMpSvjpbF192v1XvycmrN",
  "key28": "V4iK4bX7gKwxtmp15HchgYnDy7RhWY7pW5rcefLyGjSSt8wbBAHyuvrDGwept8o2s6hYv5ig1q3b2DEXv1AqyP3",
  "key29": "kPWcRVcSesUiD4Pkz5tDATndQvSZc3dxffrhwmiQSVXHyY71J6U4fpVrh7iJVLu7v7mZabC6fCcC2uX22r5SgBc",
  "key30": "4jMHJSUiCCmtpffn44einEJjD97x3Sb3CpkFzaxb7GqgPueyqZtCtNpfhACGvSyQAF5W7cT95xXu63Fm2284MWxt",
  "key31": "4aUw7AppN7AJzA7z6gJ5GwmEjFLCX4h99EmUiaXPEZs8C8YtoGursMsxEwLKiE7Qyu7Aj4Khvrz1oBb2Lyb7Gkq8",
  "key32": "TMgkGGgmGRGKPYRT1PRtidCv24RYZ3mPm55CeHNku6QeFJezMzZi5gsNrX4EfoTR3A3QqNhSRo3eAbbwQSaQuAk",
  "key33": "4ygq5NBnEVg6TmTtg1kgyEQsjw3GjLhVgQhtfWhzi3Ua4ij6YpZYvRn1Gbjns718CvngW5oHe8fKnV2BcoBciF3U",
  "key34": "2XiVNtaiMgtLK9AmA12JkcgG76BSPB3KcPSUfFEE2W6nkNhhTmoWk34kBxTuJc9V3CZMzjq8WJ9dNLBNbSFxg62m",
  "key35": "54u2hEaRiRrB4pqC8pbUZDkiNG7FMiCPhoWZm7qrWGvuj1dNJybrMxVtCr7wXhPrEdbLryAXYTn6n9xbeCcC1uZP",
  "key36": "2kyFi9zXNUfDMHb9sLAzmaWjeL11c9wQeJXu3zuDzW3J8MVnuPdaP35s9crdjHWtcYpNj6uafzxYngATuxANKrhQ",
  "key37": "F7RZM1fSyn1TYDtcN4MWzuMRnATc3yBw4t5iRbTFUBnbAaVmdrkmubtMFdZawbzvruwzrnDGKon9cTxcxu9TyCZ",
  "key38": "62i4K5vd3GcCaHkJVDcvffp4mfH8jqyafrk9GYcEi4WNFYnb32PHq7Yic9fi4nGvEb8SF5TXp5sHk8z4FqRqCe8f",
  "key39": "YvhuMRbA8fqGJRE3VZAW31dD9X331GayBFHqyMcHqp4QSztzrz4KDYKceS5LNZghf84KoHTDBdoehX5w8oVMy1f",
  "key40": "4nFG12YEY4GT6DEjHtgq3DNHr5Ymd7uVuqN18Tkw8mb1uTFHxM56FzV6sQ7TUpGyxYhDrqTTBs7wn4wAaUZjkNiZ",
  "key41": "5tzoAaXrwTnaQfL1KM8c4wZnhHEDGKurnUBVP2LP2rLa3vJZw2Y9eGfMydAeUvHjRp5FCZKmgnrAgahG8AcZDck1",
  "key42": "1JFhLXHcofdgBNX9M6qsXLtzmRv5zgNvVP6vrKP1AwqxCAtWzxvcfDE5dBY9jHog6FotdSApNthVqcVpRtdPpYY",
  "key43": "3xb9y6Rz4ugASd9st5be4Vmmnof7Kb9EiVRUarkMpYbKEntGqsjHV7SvG4fmuujHsAso41cxuSad5NvisZYdcyTj"
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
