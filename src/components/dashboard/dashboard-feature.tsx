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
    "3ggjtAbkN44EUM6bfuWqusKeYMu1GzW744UM41fvSXGQ2bCcngazr64XZJzr5NDmEobwwWdPgJUDsa7ZNysDQWAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Trz6UroECyfWMkKZLCKQd2EacqbMAmHCq8P6XpZd35pvm7wESraN6zRgWiB6CrVjEHPVBPsWf9AN7ZdYY9Bqwmx",
  "key1": "2gax49YMBtHcLet4CmmL5eRMqiVCETkN9ga3sQUtvwDK5nMNCEe9TVMYPjWeQ4e68qYmFsLanKdyvuStc1vrs96e",
  "key2": "5qQm99DCS7uayvgJ91mwfazbXPiUgzzcAb8M1Mh3CuggyBD4BRrcEVN7sNeJE6APvGCCVMHVgr1UvyHDn7QU8onJ",
  "key3": "5dAbvUPBWrZyT4gJutcdR2cbhYDZxaJAS7onXDvsHvhQwvZ8jNqN3ZHq9nrapRHzC79RvhZbRBfgWU9pxXnEEoPu",
  "key4": "5NMYPTwPFRMuSXZh4f9Rn6FsRHWqq2wJvipqc44X8TtWeYfv1r8dwLJ5hhDVHAEa4orgSmuh59VKMg3pMv5gL9AN",
  "key5": "2ZvtcS3MfHVDWH4rpFhZsXsbUuCeRJCGmCMsi6GYfdkV66wA4fuYF5TEDCfJor72tcCFcywj81KW7F6TGu2yyrdL",
  "key6": "3RHJScHRMZDA8ojAEu1JUKsvAKrHtRRsJGC1qrcQgSTzbHEur7jXKv8rASVxp9cBNav41b4PMEfHpPGbPKK1uoco",
  "key7": "3EXuFn3FJsRfMe5FuUTHL1ZjZ1McZp8VTL1wUDkvoSQ1u7fx63W2gR4qL9XqdEUvXzqzD5yXXxmbQtV157p4HHKm",
  "key8": "38YfuPzQbjQsSPh6Xivp3YnLAk9aed3ZfRjGy3UZjHZqgah14i1N6jnB7hY9B3sT3CGMbfEKZpbU5KKVFP4Scs7x",
  "key9": "431MvveXWpEJJUe9aDr3wJrDyZqXqoEU7ZydT4RcbBoCqJiKihnrQVy3ansXWGAWnp9HCRU2Devg8b2hCwQVjpPQ",
  "key10": "3f9ASn9DjhTVo1k5wsn9wConZAMkdWkwhw4JJhoJ8dhst21E3U2JigVnnrKFTp9DF1ZRUoJQKozEuvgyZgeywu3Y",
  "key11": "4fpCynTcfofz3AuRY1TyE2ofSRNVJrXSvF5zoqcz6UcyVJnH6bMVGonmfwDAK8BNbvccRQc91WqjM6YYdyaYuz1P",
  "key12": "4GgVoDpXH1AjwYfsRxJCHmQyPHMbrSbXQc6AhdG9Ezg4JdxwmFsWpTNf6siNVR7mP8wBVTVSc49dkbGDPfMVKR1q",
  "key13": "UPQpWuzJgCjrKR6NVmrktLEpVbbSigqSBSKqvm8Frdcbb9EjXU8XvBdX4tX7kBSoCDBTDbBdnf3ZG8C15mWgoZu",
  "key14": "3r2SPzH4K9tuNSw56hUCWnVSmearFDFYuP18NpVcQ5NQsLeVYd5KpHzb8YoApvnXikLPfAaiCL32RbyDdtU5pXLf",
  "key15": "f54pZtgzVciGJnx1eEAsCLoiXNgV5s6uyAyCjezfokbsUVLMhwrZaEHpvwFrNtoJF6eXQcRu2HKSiafgM4EtAM3",
  "key16": "4Kd2AYCs5UNr4b7apbR7ZAG7UnTz2wnFHvKNZFmiLmicABFEZgSY8Wfb7cLioFhBPLVt7EnxPjPW22pQkCbRmTL9",
  "key17": "2Hm59KkoSBKQXkJxDkLNe3VfcTiu5TDaXMohRmaCSSkc3u1qfWVuv7KFwAuTLw1kftDsTDnXn3RPFCLZm3AJVvBf",
  "key18": "gxX2JTxD6M43d7Q9PjFRw3uthfNETp3GB839mGhoc5geLgob9ciGZWSPnADudbeRB3to1ftsYgCRq1JXnwWBoDN",
  "key19": "51WMSHhaTJKPY9AEDeqvsAU8YVVdVb2D1RZqnsr4z8HbwEM8FziyqV3SPtcFCXts2UAWPXwtWfJRLufqoDjM3SFz",
  "key20": "59XvF4uvG42yEF4gcTtJPFhyREJPThYfqW18sgqt2AHQ63t21MhPgWP75Xzzcmi1q396qm3vyg8mQGD4KEf6sAfr",
  "key21": "VZK1rWn5aE6KTX6pdEQsoXCe8YaLwmwdruexztrVQz7uDJJbKEqw54bDwS3iuAnKvSacr8yimcVgeCmaHaBNwJJ",
  "key22": "ECYNKSBxuqd9CBgtNNDn4CHq4tbsot69ptjpLdTXCypJ5fZqYy7wZNmBN7PYdNMJerJaDCNKicgFt2NBF7gys2Q",
  "key23": "aiX5LW5QVRuqET4vcpRYs22RGqDhztfcgDgZz9FnQb5sWAEaVwAki7Ppn73NLEFb4qgXQcZF9TsV3uz6Fuo52he",
  "key24": "53R66i8EEFRFmX5udo1D3URPRhiLuvrXcQSHrcQbdrYohuJcm424VRnbMmsabwWVFGuQNmKGcj43NvkE53BAG9EW",
  "key25": "4wzpGXNvU6vfaBMjtvx6p1EHCCAnDs4SkC8F4BCga5oueJ3hfHRng3xHS93ftrNKmeaKAgeuXQsBp6p1q8Y6jd6V",
  "key26": "k4SPtZRwt2eVANkP1ppt4eFYz6RPNDKMAZtwpmGWsh3JCNyPZN9vVeoGfjaHWVfWhfB3G54ai8CpkDRSMT4h41j",
  "key27": "5tuC2V1DHchKmhKVaBuh7bX2Lswn1V6dEHMq71EoiTAupkebE9ci8UrKNjMCXNeqLnXyU5FH639KiqEE2A6cB5oG",
  "key28": "2KKAsvjR5dZtxcowCVqxEDEKNbXzRYwue72LewHRLiNuVn9cQsFL7eD8H1KNWB8WK4YcrW9QFXR4GP6KfJ6KHzgU",
  "key29": "2rbY2B9cPEq9jZxvC441g7HbTGmY7Hqgvfi5SaRVyBYo9t3bWdmSRE1QhBAZtSM7vFjviX65GcuCepnxk1eTb5Kc",
  "key30": "2jzMmCKapyJsAiEfTTEhva5QUEH6VwUC4SYfXjxKy6QhnDibkpTEL3R8gfmdZzFWAZkm2KGPYQFPX9XYnCnmyane",
  "key31": "4MhC3fCf53qmQRsDycoQcrxREktsmhKKcy3pfGeckqu2JemfuaHBkMd3udoDewc5Noa8qPdwFGu7NKaaQmXzTaa3"
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
