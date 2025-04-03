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
    "fBYJf94j9Dzxn76R4hZSspiEq9Z2BznvU1SdNrKE4GLy8cRgWX3A71VoqVXaSUAACSqZkKLCzwEG4U8etQgwEAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cYZo9V6kQS9BR5Kc59iNPndM1gEipff7xKyYjojBnu2LK6mef7CoQGkkd27mjHSZT3SoaFR4QVPXDbLTcNC8WR7",
  "key1": "2NUTPiiMPqH4tJ7vuLSSy6iRLMHVS1BQ4jLzt6CMPeqNynoo8X7oUFVGuZzxEePjRmDLrvg6kHiDcdYofXjF7oKF",
  "key2": "2B4MnbD3iU14gqYoai8ESsEFpNSkJR5qRLwqzri4atKGeMg6YGUkNuPShZhVCn5QxFtpkunuwza5EDEWiH2epvr1",
  "key3": "5bryXpVqKUH3NWFpaupjN5Sod5eX7ezFwobDe283CLmpudskPRSrYEX7Yp8FVr3B3feows2F4F1MRGNU9PJTbfXU",
  "key4": "jjf9p5AYu4g2JTrh4jjFPafNs1k3LTQXZoZ388thFznhymKGukegCD5hixb51eVRSeeHTamPx9ZokFD36G6Sbx1",
  "key5": "qRsiXcC2gm1rkcdPTqxsAacTAR6nNhBPWDdWHGDVmsaNq24jeDKWhuHaaeSqHCuE8YNEGptYMti8P51LsHFFw17",
  "key6": "4AvFPeEmdegbEh7moYhGE33L6j3MoJda3LLs3ygUiePCVHQDo35fkXgXAxf5YhcMbv8kZahZehgEwxb7cmmdxXm1",
  "key7": "637LpaJ9AJCvaAa14AuTkoFZeYR3f7vtz9NMk9fLVVvHCSnD8QeoLrhJs7irtWGnaY8rZa9b7fsbK9wqzcs9Hn5D",
  "key8": "43DrVBGL5JaGh8XNeSNkVxRkbVeJXZbgCAaWN6hs3fB2Wz8VzNYduVy46WFxGgsb8njNajRxsNnCTCnmC4c6gY7Q",
  "key9": "amK2tt7KNjgycAjxKLgQu9VnsT7iTxHKa9pSgetrTBuNcHDE5VdJZXYSQYCHNQmxL49eBMMCKF3PCxNVXLaWNzs",
  "key10": "4B8jxUVKax8qw2NNsrFNf9ngfPJcijCpoPbuW9RuPM8trj6PkE89KcyFMj5jXB8EPUygx31j4fFWe9175xh1KEk6",
  "key11": "4RCM6unzrAV162zTLDMgK3xGn1GAzrKMcz75dDABTVu1nyMzZNez1niL4qunGByMpiazwxKiXrSDESYURaSFUpKx",
  "key12": "5JZiaM1huCEiLXj1mq1DCgGmexQ1Xqzg6KeNCioBGvSktBJgqhuThH4KgVrVj97XpD7Js8QeBfCgUbhFzrL7a373",
  "key13": "2HMrh36hiEvXtuPjh9B6GEjFPb2RTZhrqSHBWniXqxM6GHKqoia6Y6e4jz4jeRrj7kjwNvZkrcer6C1U8GrHY6kZ",
  "key14": "397diePhkEWnFRf78HVUzaBaNwrWgxC1C5EHNBhhKifjpQj9TCbj8m639ejND6s1wdXAynmKgGq3MfRw6qviicUK",
  "key15": "3koAbefmtqYgPXmfZEyRqo2ermDAZQSzEDwHMh4UfVTiN5VoMtJf9nLFWZoaEfChgsrutBC39KxqWcLVbecXznBk",
  "key16": "4FMThvDjKGA1vBVWPhBmw6ZGpU2Szm59WRQNVwHCjoV6fu1xjMNEYzECUdpDAbiLdJiERh63oAe2fb7zxh3hepab",
  "key17": "2L3nHkiUER61Gsvyj97eVT439HAynnYfLNs5kaEJhanLpjRZhLxU4wn1HeQcyB7hSeYk45C8B1q2EprBbtVQYU7v",
  "key18": "2cuT77PCgJcCJaRkwdRTerHE9HXMvLidfhUoLBHKJhJ2dYYGabUKkcgD6kN5BaBMFTWH99t7JG2zeDkrtP4xe7FU",
  "key19": "EELDwSjNMV5zLxtvTNwYrhXesprr46TyRked4PLnesszSFF4BVpnwo1Dw7GgmC5X1NBBVss952weKLVBmnYPLTd",
  "key20": "4QWwGGEVRptPMx7sCyLTEABKSKwAgLoLTPEZPDntfcsBhpa5CeBQUqt8JzgvRrT546VuQkiZKRwHvJtBooZdeVAn",
  "key21": "276aVBvxVoCgVpHKesMUXZUDGNaVrcoZhx6B2LwAPnRmWSs3mu3WBZzRJLCXznPzXeEVB62XhC1GdGx98WRKrufG",
  "key22": "AyAjUKvrwWjeNDEVhimpG3VWueKQU7oxUqPKU6p1VgMCxzcgGnzHyCLjM1M2eSVZixyQmztaCcpsBGUymZYXzpD",
  "key23": "4VbiPqHDA16tgzbLK8QzjhHimv5PA6EFuHuZMH3qqkPUKkBoyWMwMHTnyATQZsfjwvLvxVoDNg2dmZWkEsVd5i1s",
  "key24": "3vpDXSvrvJdG7cm6ui9ZTDgy1R4Sde65eAYzpJh36U4oSwvRZYUyVfodnxG92cWg2wveUy8Z2rmfVe5uLCcHAFEr",
  "key25": "3v2Ttx83fMFbP2cXuH2a8ifhmAcFdmpQrbtncDXToboMjpZYeEuzzgDW2zPNu4X4NMUk2gerc5Bpu841BWr9ziMc",
  "key26": "5NMQYi8wdyFQq6AkCmRp9N4Ge6Ho2uvvC91uqLquTjHjXR3uQGqgx2gjsr9FydpKL4c5mxAvsPw9DcAXVmuaWnRW",
  "key27": "65rWD9hCVoCnumCZ5BdJEJyJZ11XXCmF26EgAu9oNMsQdzGzByppKdu9kw4wzjC11EQ9BwaLio5H5hB9uPZB52TR",
  "key28": "4WNknQNaa2RWXWRTNR3dvnkK6ZhiaCzFjswgPy3pV3c48QAJ174vJdaqtRfcWVxhjrzyVJRhpG84ugJQFQNufw6b",
  "key29": "28H1HAiEaCoEnLjTpHrMCvMkArzPiWziLsqk1QpgYuitdJ2sheGuWYMyLB8Rh18AcFgw9fcjbUCkTxReecuXmsMk",
  "key30": "4AzgG19YRuz15jZybChxW4eo2vRFwxstJtPq8eaQBwSTQP5Pz6hfpix9SxQbKyUZAcDiUrgWyKQY6FKk7sW8avyE",
  "key31": "4uvzCsHNcycR8STH79jDmabsqcXrFCrTRuyQrULYfTJyR6YnM9Aq7E4X9GD4DLX5tyMUMetGMYkWP6CVzTWu5nvL",
  "key32": "5n9ASu1U1tmLWXM6rENkqtaxwb1Ggs8p2RQGacDRWPehZNMJuA9UxrW3A3Z5YGPbS4CpMqFSSMSAUChmzToZDSgj",
  "key33": "3ou1FqawABAyvzByRNTf8oMxjiuHwb1dRXUgGFF8SBAvnZLAfMWJ1PCfAZpZMVNtbJmPKmpF3BNfm9U5MHfLrbfz",
  "key34": "7bNZSVDaikJCmDRtgsFoJbeysGCrCbYUoKBCyK4EYH6hHFxAs6tdhNtNBvHVaBNf4CaPdGKHRquYhtvbBKiNS11",
  "key35": "3fj1JhBRmAz9HpJ3M8NgJ9PGm83uJVr9NnRbQksRRCEhNxegDK9aT65B1Y5VotGHHbgLTQS68k7gvYV2Ztogx79Y",
  "key36": "2xG2cnLMSWfg9wbPbVrx9Rczt4MoAMkEfBkuARGLQtBTdwvtJTY2TyZr41yYSjvEV2hVtsFDc5oR17zsiDZNRccd",
  "key37": "3SUGbfeihd5xZHJ8H1a8tksxo7DUAsoV7RB41qpNG7Ai9XGx7N7aqvkLPmjTcCUqg1gzoQrpAKWmcGHvQGPzkMpF",
  "key38": "55FKHtkL1Aj5ybWd2ZD5bsruq11vFsPBMiPZZ8aa8NSfeSTVdNxG6aUNA2WYzBXQ5rPL1wfr5otWHgnEE5L89PFp",
  "key39": "5Yimmpro95AG9qt18jnvRWcmmb3cm1EiyCRtqcn7wLz5XdjE8SSssXd75FFrbuEbDEsoqMvLdgp7vksUeMNErVDs"
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
