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
    "5cSZij544KV5YExAC9ceADbs8mdqyh37yydVtkrrN5px9uMygwRa6rsuYsCoJmvupvKHrtdJXzkpDzwYfJ3963BQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YVJBN6am7iuXEZ8zPAJzwmm8La8YUh8QghrzhnanGeika5zPaG9wojo2CN61Qk1FANHNqsy1Zz1HJiixhsxnow8",
  "key1": "3VSkw7BsMjqsyuUboNX4cceDEbsrpwpMjLJoPzLxGHTrYkzbS2cC4sa3kjWQbSLE68ru8ud3skusUyieWhVPzewV",
  "key2": "MzodARP3PZhQSbRzPNqfnHNhBuBSC2JCVr1WhbWH44QRTHf7CEBZs6ZnDLZ56YuR7L5AsmY8s744at4jnFdrAvW",
  "key3": "3HCnGkEjXDEkYRt24UZ2p3Y21U83y4jZPaWiBJgpeaQWWowkCw7LfMv9iqxeh8Wgu2gX5Rh9sqWhZxUMFPjGMmYK",
  "key4": "4qkSVfJhdhXhSTVHx4EnmSV2k6R9UZ6kRmPmkfbmE8VNuiCVBhvhhxk7KQp4QBqWsyTcJPhPtzuQUWrjvFAepjjr",
  "key5": "4iE8xRbJn9KvoDyqoMqF53r8H2Wf9nFKY4FrCQGkxZni8P9HprqfjJcpsEAqC95XPVkzLLbwayKr1f6BXhSJ6Tb7",
  "key6": "rBn8d1ik2ZdNkscp2Z66dFu8GVM4cCTGsvnHx6G5u2bnVgQsgQavYxjFYLXixY8C2yAwCboFFMWcPEasA9Uo6bS",
  "key7": "5ZCi9uhbEhUQJj9yoCxWvbb4ynuxavSVCZabnEeTewQj5ogfy1tKH5kayJoP2NPyJpANjddo7gSxdkHAGs7suH1u",
  "key8": "2bj9BHpc1qWBNhpeZgmYmvxa29cPXGv1usDeP57rd2p8Qsz99myEVdvddon6G3onabTsK43KpA9q3tjvz9hug2Qt",
  "key9": "5ojCHQYF6PaYn5YHdNEQv9Fc5JzVhu5WbbNDtUWgroTCX6zWZrfr6bbNnTpBF6UjPEkfGK8i4KiRg6SLe27vLFyJ",
  "key10": "4RZzjF8LSrnTJKbDri7TuHChEGg1mVjRAnvkfsiLrHBYzhrMERQBqAwscVcbbTCe2stDaLrrWvsEmNhtMss6jBPh",
  "key11": "64sqMxmtbNp5A315G5C5h6TeKNvgPnXm4mh32J4rV4Xq8geefU7ESV16rE9Q6TqKopMW2GfmJznVJW8Wya3t7AQw",
  "key12": "4gG1M3Tck8RnaqXw4qUbMb9xdP6Sj83LT7A7bDo3gakspE3mAMRQVL6BumqcEr9dyXMuFbDB5VDxbriQmiWhzCNh",
  "key13": "zdrpNCKytwEvrZgbu6iz58hjvrWQ3jRDqW3SEAWJUQmQ5oJYLAGv1eYK7F4YUNFsjAP3dGbH37zTg4Z4p2GVqVx",
  "key14": "2dU9VrpfqUpdY3G8nphwfChjYBi2A3tZb6YYWubmNizuaEbFyymf3LF952S1rAiEhkK7F8PzorpXFVuQVdFYtxLM",
  "key15": "LYGkNznrDrYAENUUc76q4guRUydLvdf8wsQ4ejFpdLrp62Rp9EZSjcJuUaGrU75ziuvBECjCL4SN2RqC1z47iNS",
  "key16": "2wbHqb9STunt6hurMPNprCiBLPQcpFX5eepmVvq6E5bu5sQL45EWqhEM6P1DradB6occSqiutW3rZ4rijQWRiRHV",
  "key17": "sTpgzLcsJR3DmRA6B7hWcDMdtHC9ve9mUn7NdCSX3chbrSWm4qAgWEzxe4QmakpErXEcSS953KZ3MNT5g17RvgC",
  "key18": "3nUeozHUX2QBenm1fQ9XCsifPHSUQjjSSAJJHuxm9aSwmCLJ2pskpZF1X5KgENK7PXTCqAToQ8cWYq4XUzKfG3xE",
  "key19": "4VzuNG6eUpEqmJHaM7rfMjrAukoRbd9o3TwZXT4TaioBE91CrmWvu149LLZZLdb1SNTEyyMUp6i8w9ALYG7nHE2o",
  "key20": "5jriZnS4qUQRbS1u92CZGJMtEfw45vmPvWq4kvZqXPCpkuRS4dY4C7GEwC28LAzmLQHF6c1F7nth9ypi3b39weYm",
  "key21": "5nXN4ZTT47Ru15vngKFu6c7GUaJT86Uvvth7hCjnUQ6zpiWiuyQiXmN66UHvjfepsZRxYPad7EvhNJkbAzh9ffQv",
  "key22": "42PvNFxxqsQnJQHnSaUNkuMVj5aapQVonqM7MUa4jDXpqGU3Kb4aGdPoAeiBU6sBHd7n7sZnTfKfMnz5E4mgEesa",
  "key23": "4qfZmQRLz9jJ3JLZRHLaJuyGH1P1wkBuC436oQZcMtgwTXLTXCAu83j56zjHSPatwxUmnFRyVo1dHyUmH8w1MFds",
  "key24": "2hHrZKngCrVGTReh9cxhc4JaKPtqVmYnXff59enRLm4zTZSfZDPK243mUBenMGgH3BAGXim8jcPT5SfUCR75veFo",
  "key25": "QGKw3MZTaBMAgfpXVn9NPpV9LPwvFtuLUHpnUkXuvodbFkUj9EZLof9WkhZ7RvPTGdSwSFjTNp4fyVS98jGnt4d",
  "key26": "7SzwSfhax6v5Uqht21FSJqbgPPiBWYAr6j4fTuQG6PXzcanruN15kg3KJqGcVSQeKAr3rVgEyAwBtjsUS6Zj1qe",
  "key27": "3EwFknfFyLeq4AttbAocwnay5atTk2E5JsTFKvwCKzHfuFvgmnf5fh2UrDJdY18qU7HwiZm1WM5nuos9KEtNTuQ6",
  "key28": "4pCoDL7h45dZMaydFmauBCwQELP8PGRrany7JojY5Lsnp2Y3YJ9fhHuziXnsawETcMGe6Z7sbt3rZivG9vRsEdft",
  "key29": "2Q4oiHZYwF8KVtR8GfHTz97yEYqFWkLKDGZ1Qa5ddDNEejEXL8DVe8pn6dZEMMtRh29MHdkD43KetuzBFCtgtgN6",
  "key30": "62MDmxWcaVwt8AswPV5mALUF6sYxCKVJm1QNnRyFUftTixpiLXbA9HuCULswMfGT4xZC6vvRgBPt2kj9uRMc4LKu",
  "key31": "qfZszESmWoc2jaeuRhDvbbKbR5w9v1EshQKY2LfDo7yTKLtNdsCHB14Uq7MqZWDVyDb1ZUkmegBRkhdFAa2T2NV",
  "key32": "5fyi4SjF6SCCV1EjsvyzZEky79EErMP4yrBBXRM45XkTRuzLJkabgcxAtiJfRiH71EtKTWoGcrmhfbSFcGYVEajR",
  "key33": "w1Uu96EMNnviuuWFWVob8WNFVjWH1ErBtqVEgqzg1JGL6gPqTi57hnBEhDWneRPfLcVZPQJpygzdVbZRQhUV4aR",
  "key34": "3Cea7nDQgWTP8AXimZg9XkwRAKQEccHtDhFJzX4dQ8Ln4Mu9PbF72noNytgTEKCohZtZeMxoN67NrjLvog92ZAxy",
  "key35": "4sGP4W2byQ1s7F9H8HAfDxRHov9LhKZk8mbMX44AtTELkkL8TTFosQDPqSX8wfU9FjKFRY94KWTZpYAcSuQ5S8EJ",
  "key36": "3dVEjyHgC2yFU3LY5AqUDtkYRFFbW89oX5eTrVgJgHQHEmLDN92SyLv1jwYDfK6Hat25LkFXvTzDesVw3HiYRCup",
  "key37": "19wDxQH2CHPwWeBpQ3Nivy6SsxXMfxRRCxH8ftD337oLJ6Ya4SkZaq1HP6GPBULgGhvTE3HM4o47VUKijFoSL7T",
  "key38": "jtZCoCcsGLNeNQ1Vnmv6y36fRuamygEM2a4jmyFimwdDbbjbaiHLeHgVJzQGHk43pPpkpsw6aQfdHax6Z4x6PPv"
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
