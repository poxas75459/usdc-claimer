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
    "2eUzuE5pybJrkiQARjJJ6GqEj5y6KXkDnDS9ZER1xn81mP1fuXnGSvBLQuYtJivDfsyscoCtCDF5aDYuuKK8rvUN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vZdttqbU68SHrPRhQQy8fP7JKGLpziAkm5hiLLW5QwPPLV39YYSNaPvWDkCAvMMEetUZqS3UnqYTRoEFkDo1mLh",
  "key1": "Aap2ayWryenTvRQzTozMki2g5QsrauJndu8aEfsi9NWjrrQkpyJPL6jiADFGh9rfpqcVHAWMdmp4863nFfDPhUB",
  "key2": "3xBVjhN1M4GLiwGpdKz5RVnVmr4qzocNbPUptzxqNXxbjmrqRhiJiddmjQARVv3kDohFAu2P11yzqtoehaPNg5wQ",
  "key3": "3bPLVTMY9U7fcTtb2MAECtgboDC4TofYb5fcCZtbxZAKnZHveSvfyPQA48zfoKuc8hpKRYPghgLZKjJ3EE91aXHL",
  "key4": "2a1Ak2114dYY8HUmvgC3LpoFqoyyLcdpFYBDxbEVxg3eMNsng8GEFnJzPKY3wejF3StvuJYu3ERBnNoPu8A48ubg",
  "key5": "39MCqUg6ALCEM2onTrRStGVH5GCaWttxooxgwuxqtsWVLURgFXyuDStHtGKR282WxFKKaJEMfngQCwNjA6RVy14V",
  "key6": "3t1Vc3dX3L5ykAE9U6fPnkxnKpurTQ5jTuEqgkEjCPSnMNwyxJ7DW1ihck58DYTh6sGtvgbABRKTfFb8o4puGau9",
  "key7": "27aNwwibM3hXiTmgPTbHZckvAGkpf58cKsweTFLtPWVFz6V1z9ri9cYx9Nqj2vjDtEs74coboLFXJkfaEjkQNfGF",
  "key8": "4P5ykLCgvKHbSrEYM4YqvZhWPrxwAMWjtwBZBLGA7FCVvpvhVYZLok9QX61bjCZxtqsJY4E7j7XaFMiUFcAb2N6n",
  "key9": "dD8a1EyfBQ12zhGRLBNmeUdeYLTQ7B6shwTj8CNUku8ZRPvfQ1DJB338RpjLTJmYrcMkyDXPRDsjN93vJuzd6Gp",
  "key10": "4fdR2VP9gjDHDfW7URsX2W2PvZ545MVXHtTGhx6Guj7s7Man26AuRRF9U3cjrjvXrRJ7pkefvgyXTrj6PofaBfkF",
  "key11": "2j7oDfgLQEn7pHpSKshJQmvyUB9s3VTZBBmpK5n7XmJKjHSAEowT8mgoz6dFVWSQVSt2qg3s1XxpiM8JEsK1MRsE",
  "key12": "5HNRdzLcgjn7TmBKXrUHkR4GJNmK51g1rSRfMJghgqnQYxsPRS6Fv9n6AEZ39HkqoNL5ahSasqP9nFC76t22355i",
  "key13": "4mpcvKJPyhyyFbHrg3wN2TB3eGL7hb3NVaSadc2L81Upm8WMfRUF6XRxoRpWWwvya7UeW28Mvvy2AwWgU4vMz2J5",
  "key14": "5HTNa71RkT78vi85aGZLbHPaQhgAaodddLKnNFCn3WjVw9rPViiE4H3hRst3YmSdmvNMexVNaZXe5pE7k4sGhEx",
  "key15": "5RucDW6ewg99nVnzx5BjXoWHJZVmVc3SZJtqMr35FdnxmLXDrKjL1LyoGunZWiM8KPp956qmARQMFK3SzvjJRRc2",
  "key16": "4i7oJuQDsMwotg3pD1xurNcfxMzGMqkC9npBeUTFpanXGEZiXwyjuRNqtcYsuKzXFrQna3gvFRLrcAbKAzxwA8Fb",
  "key17": "5CbbtXdoZAWqeUdU2pjGtsC5ZV9TfvM683bbL5LJNVTBg1P3Yeqkv1WpDGLSv1f8Jh57YbdA35iXmowVkmciRyxB",
  "key18": "56q44NQB6JNpDK8btwxBtDTpLuzvQs3pAb6WeThNHVYWLA718p6fRiGPS2KKM58CfgeDbRY6fJgXGZNtPrbzmFvK",
  "key19": "NwhojnMhzRFTkffLgnFYC9Ktm5HqQujwMwqhjZHmQHUTi2UWntGNfFgGgKAFVRG4U35ZWKzsfb5TSbg8v9NtFmJ",
  "key20": "61ZVxf93oTKUyhAXCL92uSdRAwPSinHBJK5kQGYKarqwvK1rWxdPcJrLwmrefcQPTvnBDS7uqpbdvVGbYkHsTVsB",
  "key21": "35tTh2uvZqQpeF5L8D8DVNiBmwSSpm9UuwDHsGRA4vpH4CrEqEB9xvisx9nU2GHFH3WbDBvjVeouHTvCCg7Rzxak",
  "key22": "5ovCCYP1gfjCqHjJGP8uyVwN2bP7xzixrLLL4UZETkMLo13L3427e2Dyjna16YL3GQ9XCYNmQrT9XdBJ4JriJoyz",
  "key23": "rVn6T32t8CJTzLV1F4KdtvGfTVKGfFLqisUDHasu2GGhXeN5sP9AAxmk5JtWNPobvcXsrLWYVHhYHy7BBcCrbL6",
  "key24": "4sPRiXxppNjVdfaCtZx73BWFuknr1gS3FtYUHs3s5b8oedRu4pkrPXpQAm9t2EZpEVR8cQUowaUQn92QG3Kd7myt",
  "key25": "XLdP7Rp8JqiMgi5AwB3gs1LhwCJSmRkrDcyWxND5zEatAB7vzVfCqiZ5M2wW57pnHKjao9HPVmE6ELv2jiKDfbH",
  "key26": "2KogXPN4Dq9GDuSTbN6rHKAUHCCMx2WBgU1MmRRXz11twqtekcDzdYn6TiLLfyXtyrf97LF4nMryhKhP9CST34hA",
  "key27": "NUeKauhHAZ7vt32rHVDyTXcCxW7mvF8wskvrZULB3vTCrP263f7RtNR4hUYNR6kTzgXF3rTRoJF7BcMhBXgQoj6",
  "key28": "3u2Qg3tkrTpMsPFj8ZZUthaqqo3TK1EypNL9BSS7E6v9uKzThHrdXLHLgCKGmqnkwA1tpQ7YktXPQg157cr2vBtJ",
  "key29": "2ndWSeCQa7NCkm2Gts5eZvNVqrDRoWuZfPEtXVTTGA81CyS5iy7tT7YMVQq4sxq1siYtg3mKpwx4hvqgnxPv5hYN",
  "key30": "35igFk1CduYnu4Gny4jYd8QpftvNjpo2LdBGuPozyUFKVve43BqLQNTMKrXq5edqxXwbJgb3EgeUGrchhSTzD5Re",
  "key31": "56VdR6JtVdHM9s9zi7g7jwYvrWzWfBQLRDXW9GzAqpVnPLYrhKrPyjUwXG9byFM8Qi2cAEriLxHzCkeNEZmvD28Q",
  "key32": "61LB4cXFuNNNhZyEECeQoABCuivTnHvUmHhCoWEDyExa12jTg18MP1uneQnQvHre6S3TtroBebmyVfpTvmtJDQgo",
  "key33": "hbJvATVWPfacGY3FKPL2WGiSiMbTqGikJ2As6RkG8QRv2qXDEvXrh3e6ayYXTNLAcmtDgM3oruFEiE6PHZZfdG8",
  "key34": "hg6f6yCbwwMUfyMWRXYjsWByF9mqNSnF6qVH1we2T5W5ct3VaLZ8u6oUmo8CAGYdk2bxXzGJHUc3yZL1gs9z888",
  "key35": "4AZPiAm7LXMWnHg1eQD8KWf92wthRSYHjv34WK6RmGwTcm1YMJbqiyHNvMkJnQr6WURbchjk8hqMt812zxk8fzDw",
  "key36": "2Jrr8QmG8bQcEq7pFH3vu9kifTTxFhAjmB2g4stkBCawk9iV9u6iAC8Z16Pt7sAXztzFw8Y5CWt4QW2jZFYCBebb",
  "key37": "23Pw7AuRfZPspyt4KBPkPEcz3yWxUx4y941KgUfwbswkLoUgnC5RQa9pcUN5rMeXikmN2a26b3aTGGByNTRc1U5V",
  "key38": "4fKT2KtxPGp2nZ9Q4EsC7yC4iR3pd9fsxZE71HREL4KMR2NRFgZnNKEy4sTzPHrLykvdxvJyzdd7acdu8mzgd258",
  "key39": "SbBwj9WUZxmJGt6fn2NX1avfwRTxu5FkUkBZcytKmEnzo4GPi1KnGJQ1x6dbp8r3x7BSsbvT7sdXuXCVGe8TCvW",
  "key40": "5LGYb3JZnrnKdtJJCkXanzDCL4uaYdNtr3XFgXegLWJ5g3BiMYMdUvtyMFzNm1WFDY293GQ17Pyt6Koz3STSTta4",
  "key41": "34rwo6sWC6szqmbNzidarBPUNHVxuN8VsbkPaebcsfEMiA7UhXiUrKXsHoManQWSd5d7TkKXzccZStuvvSbGVMx8",
  "key42": "2qanSPk6a6YyhF39F9o9b4DRQgrsarnMxAFz4vtLAveapvwePdUwuGhqBruuC1a1pbtLf8yZPuNZNUpfEoazeyni",
  "key43": "5x322BrGHQ3qDFMjbZPeqqeSWNLP2kro954qLbzTBQvEg9vyzbYeCJzMGEixZ4yGd3uxbYz6W6rhU9VSrrVpPzZJ",
  "key44": "WjehX9um1w4fx7RVq1AEoAZoXb4GzVoYQwEP6SPoGWJGjBZsmp4vSLBAyGFMJ9DbM4MkGwTmuNEaV7GtVdXnojE",
  "key45": "iJNvUhS3oe284eB6npsSgqT9xahxh5Tkz6JPjYRwLHRyQJRBmqLLsYrGX2V6PWTW78NNLchDL1Ant5vm1uRAP3y"
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
