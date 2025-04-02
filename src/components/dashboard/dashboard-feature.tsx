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
    "4Bd4cFv2A8kKyN4cK8S62QNMuu8nJmTZkwN6mEHesuJteinqUVKGZmwq3Q3d473ubNvznqSUroVcf13z6DaqKA4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Apap3zPUUmKE5xw83c2d4TFvanWWv672fvP6YTK8bzAbHnY3ZNoFxEVi88tDk8Y7qLDKHZ7vgAsp5vmDiX5hEb5",
  "key1": "42ncFPS45j1GHRKiunpCrPfT4GgoFpRtsqggW4tVC73odWXU6cZQeikmW5Vcd6MWW3FehGJm32FcbirCvfEAJ8UD",
  "key2": "4QPn8NJH5kt5KaE74XatFnWam1UQhzHWzqTk4Caa8Mk1qA2UcpNk6FsZoeSCLQMQzVR6nxJXhKiMX4Z8PWDs9AiP",
  "key3": "5x69ZeedbAZgQTuYBfmsYedDrbsjKrAHUtC6VHLZofb2ama1yMd2Tv23nYrx8QmXHZtqDRKL3ncSwXPesJQSsCW",
  "key4": "4mf38GZEDgPzHrWFKdkZFgWRHAa4jVWf8Fq1zSMMx715VfFGmLD1YCpnG7stJ1kXmjdNCR7CnErCDvJkifSCFrrA",
  "key5": "4LS2niBjnMTidWCHxu9g15MMqjXJyCQzJ6JM5kxFxMLEFG7gwkpyHzGkpfa37wc4vFks29WM2sztSqe8eUAZJriZ",
  "key6": "43qw8NQ9xWd83isAi9bsqHkeq8xdLpw98MGpX27JZDH5uxkbU8PvkAYsonN5572CYiEm7iLRgsFGPA3UmimF8DJN",
  "key7": "2Qi4NfRANoj8mjgRJkB5w3DMGEjTU3sq12MemYb5MJ3H7oizPjnELiRB1bUaGSBSd3wwpkac5MKXQ997gkh6ofAF",
  "key8": "53KVYAfCmEScG5FZRbtVj8RbRo8QSWwuAQ6Sxw8UCJ3EYAjtiuJDTAQ5CSGxduz5hSpsY66HGQENPevzLGYH2z5L",
  "key9": "613N6q1DDvEjZTe7G3nEoYMbXobzoDPV2UfyARR9aHycwcit8XaDfDKvYTPhbCCvXfZs8knVHef96FVq7A3TjFux",
  "key10": "5fhR8kpQrXyCvqU4SvqowDbfgHYT66SaHVj8XdTkK7j4Sq2npDx9ixeQJcviybHcDmPURB8Hnuswis9DA5K9Wzue",
  "key11": "2VdzWtpfHxQgda2aaGE7QfajBzZk1n7HNAMKqckwuy6ru1kJSwz1nHXF6QvokVAkGQiepM4wcHPRB44qoPMZKWEC",
  "key12": "N99jzTPyKNBzdEWBbqCcW1RjdqWukF69uS47ytzvGTjj7KuPSMfHZJGfPeo5qWxvJmcLfLRDxBkabWMi4FTiRr9",
  "key13": "58vmH4wzBsvqLQ8NKxnGfECZ4RXgDnAT7GvJPn3HQWHH5gUzmCx8p9NfXJeXys8yzihZUfN3pWkEp1vf5uYTC4aX",
  "key14": "5fgcSCzV9zqvebqSa4QNeKDQ9e4WnSHC4LeSYycazYkeAvDYx5LjcJHn5dgiSQo8cfg5a21VBZ3aa8Xt26RTaR2h",
  "key15": "4G7CU34sCLU4VVycx5UrX9L5o4qMYnxEMLxtiVHxNqhAXXRwGBzy36vFyaaf7rbzSoMJN6gwrSRoqq751sbZkMqX",
  "key16": "zwtD2tZukxfweadQXqPte9ysZ2jmFqeBCjURetGscN7aNDNvov2mzkTUhZsGjWRcvA6Uzxa1TyxuoeHBU7HFyWb",
  "key17": "3ufGB5SxNq4Kn7r3VzTfBUsJ7eg3z8Zs1hV5WE1h4yAvEgmyGMvhD9sRnbTveFS6zciMBtPoxVwvgXtUwcWfBGNo",
  "key18": "5EpRt4htis5Qo35GHkmEYqRvbd1WkCXm1tjvXkHGs9Ke1seVivugj51GGPn8SAQTDwhSndsdADTdnQpV9SdNqE5E",
  "key19": "JHFNbqDDY6bfDgXuMzjqHLMRvrDQhAE9zns3N3YJfrZgAFjcMr5AfW1DBAbJ8EmA3aK3bZRXhgsFGuNT91QYdyX",
  "key20": "6JaGgFTe5cuB5Zxwo6LiXPB3QsY1SgVgMkakDjmZVtzu13BsxJXzqnujHWpXzc3VueASwPbHf6J6uKkbNPcVpiH",
  "key21": "4fTTu847VuPFjrqHb7kP9ER6AMjQ2U46DsNm4nkKTgW93Fuj2aTKxJp7dehnq7LoRYKZbBkRpiq8ARMw4sFxr2s2",
  "key22": "4GgagLm713XEYJ58XroN43riVUGYAzngUU3kzw5Qo7jrn9fzc4A8Fgu8SNY1QS6ikp6uRQjpYk1oyDMcj78VWHuk",
  "key23": "2gVjB8TG3XV1NMhgvATsww2bQ5v9DEeJSzhFzbBUr75H3wRawHAKXWeSRQ5qZ23dRFwZ2NyhQDLrY55ygGKnpxii",
  "key24": "3LWk8fpNfZbdXWkeMRPoJSqLH7T9BjtNgcuuBSMcdw58JmexFq4GwrbJFkCVcJmUgu982dNoXT6SdXPoaFMTALzo",
  "key25": "5VGDgWWV8XNWGQy3Jnzpwctaj1aka2FQfSGM1YR2Bigscs1ewvtBeu1H8jqz56186SkSM2zxZJqXbnguuw2XxwVw",
  "key26": "4oNb2TGubGXXfYzpiM54sSaQKcincCAeRRiBfHY3wJBZwJXyQU5tas6PigfmzjESC1RR6nQUHRmfvLFy8KoHp3VN",
  "key27": "2tXor8drC9Mtjx5b8wpaYMpiHJoHzsaFh2dqmZZaeRJYGroLKn9vuathgPUJQcJPc6J6M3Mg1mXg6hM2BunNgEbc",
  "key28": "4mJBVVVW5nXTx1mXhTPdNHxMGGxSwt7g2XrYr21yJcfqMjU8UQpMT4EXar3s3jNWqPh7aUWBzEjgfRf6NJTQyPN8",
  "key29": "5ojqt6XvuvodKvcGdXyqsLegpujQUbyWEM9NMfuW7vqcxXe6p6MJyc66mmJdNR1LK91thELVy4TwnMWMJda2rBRy",
  "key30": "5K8EiKCHF7CSkox9K68YpTKVqhnbPvHycCaYUiTDSvGJNaTFAoKWoF9mG9rXSSAMEqM43TgwkNoVnqHe8Y5MVP5k",
  "key31": "3m9mWSe6BFektAiHcyqVVMWX9ZTuHZ1HBLRDbPJWqwotQGaJHE6KQQFexMW1esCmrAHTE5N7cAdP6RUaQ4urPcgj",
  "key32": "5PsMsCqfCxpEodWVLBGj2D1nn3LipHgdcet3DMT6FactMUkN52Ae7EiyxhqroBK77KE3YtyrbSfUBorirFU22qTB"
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
