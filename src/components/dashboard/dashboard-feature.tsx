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
    "5U8vHRbntGoxXe6hF9MtSZyUwufkS632LrPD9omLHChXmKGGAsLYnbnqfSxYJc67yTVfg6uyoCx5jiXrrAHd3AFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JL4guFtqh4Tw6ZkYrVvJmzdiW8ahnTJHz6GgVAGydEndirebpzqqR5YNM17PEcAQFmFe9g5TCNp6GbLaxge7tdo",
  "key1": "JbQmdAopbVDykk1bAYtw6hVkd8oWTmnHNYmwkojRJQiFSgxtCagxVLUdptfHjzXVQYGS4VdFvZkQupaifpajJok",
  "key2": "4QapmzY6QSqEQVD4z369BBmkC6a2EMmjRYX1caAZFWDCqTDaNMvAXNJDDa5Km4iw8H295FfAJf8Q85sBxGwUsZ7Z",
  "key3": "aBxPuJHLkqTDzipP4oWfpyJttnhzc5C3DvroEFegbqBYJ6drTr5hBDe9jgk1T7dSAsd9hxwsoAQA3QLzpg3KKYs",
  "key4": "5CTAG1LH8adPehJVnqF437hHxLw15K2VT66XnMdfsQU1cvPqFeQ6nwUjtXqDLXWzYjXzZRzKbv6La4UEYmUBrnnv",
  "key5": "2JDWnu9rcQ1Jq35EPQxLC99prKQVjdDqznCgE2Ltp3Gxbyh6PMsugqb5GZKRAKgyHih6SYM8WpARP58kDeuinyTG",
  "key6": "26A9eYEKb9zPty2RK5Cb7es6dz4Dm27Afwsc84qXULgSPWaSnPH2ZohFFWxHECJtN4HVZ57KpFxzeWgcPNgzxxhC",
  "key7": "r3F1KZnEDPwWJGgjkisXbK2TPd6Vgfzv2WRQGYWDPyP5dJpGTyGVAWTnDpx3X9EZg8KJEBnerqaCGZsmjKC2xXJ",
  "key8": "2BGjv8GQjWSMed5MQHVQ8W8BU2WuEpyWmWNN6ngXWVMm1hzwQoS3EfdkLAwqMktq3MWsGsDDpeo4jCojgzW9N61A",
  "key9": "4RWaxyn5AWTbhZfTSE2bFtqjxm9LqcysopYjouN2tA7HQGzpiG56o5kwGhGXvAa1LTinjZUwCpn8AiqQAnLuAaat",
  "key10": "pMPFdajRtPUQBNe6UdYhRGjAJPDSFykzmKZoseCghPdk23Ck1iNPeMHWhPxEWUt1MWrVKF4shiTnwanKE3LAham",
  "key11": "2roFJAZQhyKnUxcA1QPwQ8MoWpqRKVH3HLEGchi1hb2sUH9DoNJkWvk2H5nMk6GubMxqXksyepgKud5ET52VTeEh",
  "key12": "fno9zkc5NZmWYzKWaqfiPpcKK2gvyLcXHcyTecB7FqnfkXjJuZZTrZB6qJvKwzWZGAfhC7sU4cDwhbSZNEgsGL3",
  "key13": "xyQ26euvJkFmk1JAVa6oksJ7Fow6VafLyqZxzF7jgnsXDHei1wAJoqcMZixGTWjgCBi46Ahy8Qi35HzdaHkGpjz",
  "key14": "55Rgi2YiezsSnuksGXZZhVgwr2CKQsVm4nFbinjUT6kkonVUWo32HkhqR7CiPt11xoRbRb6zFxLv8sdrW5YCH4aG",
  "key15": "38trLafFpSKHLGhtPCCHx415Y3d5LkYPJjEK94eA9FKevri1oDn972MAgApWW9r9WRc36q73J6L8Q6n85CS49rxE",
  "key16": "55xryPXzjENuNZxP4G43hwtriMKdEFTYSX3UKHsjoZRv7fBCdCjhTrPocuGkhceEs3LDuVZxZvUBVsuM5LuHdvKC",
  "key17": "4tJiLKUdJ5VFQiYtFpUKAHttNRafVRu1V3BFfEyxrR7H54zNBCs6ASfAYkgdhTAW6b7Cjb6o2KzYoKgqraA6GG6p",
  "key18": "McB1G6wf1fLbyK747J8kXZxjVLXQffLcXVWWPf8oyLi72YAK98QUiQvCnnSWTgNgVJq2vPSTVVdpBTd46pc8MpY",
  "key19": "2AG8mhBBFEaZ5s2pD4EBinHTvGrdj4M7sMkKmYBRHnMABYrGPE744aQydGYm1PZXUXEGe4iKccQ1T223YaRWGeLk",
  "key20": "3Zo6VHWDpk9PgrvdgW2dLmLVRjKLdQjxiYiDiSVtpc5SreXkkznXv1uAugzQHKPUwoqEUUNWtG1n2w4vma5fwyCi",
  "key21": "4NFv6tdPkWbUkJ4oHCewj7BMMRHv9RHMhnesrMdwSJDH5qYvPtbrTZMHi1ZdFk6ZCdhS1b2bqgCjmm6BUsM7FTRP",
  "key22": "CkxaS6c1HSHGq6rBawx51gruFv19YhmRu3VumaLpko5C7eobPeJdB9JUqmBJukiigyYht3uw7eLRwvh2XFc771B",
  "key23": "4Ha6hzNfhcwZPyNs3TfkwodF9YYTp7zRvFRvc4TFnRbn1v7j6jLkXoQjnv5oCgeVLNRPBVnqdrtpw3GrCihrE1Er",
  "key24": "5z89vBPQuGWBbbwW6219jeFFNbtgHiWNWhcMPRoTCu3SXWEJ43uNnn3r1fCFP6r8htqWGBZPST38tZF9HxC5nMd7",
  "key25": "3rE5ceEyNdVt2PJE47mSa7AYE7yyUhQjxBCQZDrNZFHkF7B9vpWwWKUAJoeSndTAAmdFRons5RsbedTbJXXjZzAd",
  "key26": "3asCcY4jfcjNxPqtG2Zs1qPafzebrU9WvFMxqYi5WWrG2tPjdaggGkEiVacZqfpv6CqMFDwXYXcXwQzdp2NgC6X4",
  "key27": "2rrdrh7rnUbWXEjoibTMubdxMJSKweesyY4XSRt9KboHJrWF79D4RVhSNiFKtoxjEYjqP7aWV69ktwnbZPCVDMaj",
  "key28": "2jhBNMZctanL5W2eLw8wApTrAQrKXpps26zK9WY5MhLaDCthP5H51rFU4vVmefv58DnwVddK2zLTeyxYZnHm5Uiz",
  "key29": "3kamBcuU1Etpv261L31pFiPChNjC14dVAVRct6jWsMRKu7Zgr8C9vdptGvQJm4FYbvse1iZbTCgG54yU1BM1Vtco",
  "key30": "5jmfwtdjmtbX2MNPDfn624HCB8ciTBVghgyQ6CcjHxy7fLgkLGjjx6qNLJiR11z6UBShZVWS9jvn8rYRPJHx6gd3",
  "key31": "2RHu8wEBofVAbwwZrxQQuaoKKmgvvCYYuKzUUqiNLixjj4DQvbjiEWrhVRHhku2cBqYmYz4Y6BZowTwqyuGMERz4",
  "key32": "3BW9NVQJvU1tn6TEneAVRbC7MfYV7DuvF4M7JUZb2WYfNxGpK2Ns1MmvHbXNfi9T2aK8PfXd4WgGWmzvBwtqWcSm"
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
