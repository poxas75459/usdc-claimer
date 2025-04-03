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
    "2YfEf9CfyS9Um5sPVfZH8vBNFS3CMRNyTfpCCPNu2i9UrALuVb9p3bdCvnBChC6Z45tD6qPAn9izXq8dSU64YnwW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CZDzPbnZYfcLWz4vNyK7w6xYcbiEptjfeobB5Lwp7EoYujJHqLuyjBHGzBVJ4Wvk7sJ9csjr7XhhX5XCRchV7Jy",
  "key1": "3krA8cy6wQeGrCVpWNV1ozBnRbCYdMUi2tNZohUpPkcmgw3y1SVLF5scgceS6Jn59HKbFe5AZbUi8jeX4J9yF8nM",
  "key2": "3YDnGueXeeTuaPi5Gf7Dah75N6ryScmvEqv4Ey7fJFomFyz9gpQH1JXUBv7zDeyik48jCgRjd6EsHugDVMfkAQRd",
  "key3": "uux4iyxGX9nybZ9Vz7e9zgHH7zwq9f6wPNcqsNuW3pu5NvA8biZa17Lx6hV6MZJ7WhKBxzNc8CJbXMMU3hnap7f",
  "key4": "5wUhQrGm2DJM6ShrMeJCAcwMsAWoggvoxcDxT6j2aZqLjbTVwT2YbXNVRptFocA4eZ1MZtvornixwnSc9yHmMe2d",
  "key5": "EqxxwgB3VeZYRMtqndaxNPiCVsJ9wKmRo4v1kztNEqBVERjJShiUt6k2W17tQ2GvbYPtBVurUXh4CwzbTaCRx8r",
  "key6": "4kH3cxP7xRavHJgmdwv3Hu6rJThX2HdQyZ9K3e6BtFJ2frXXrr2ppBdwFtK4A9Dc3fKgoccbw9pZLHWyes82P7Um",
  "key7": "WkEduwNXtweC3w1xhE2s6bMKqWsyMh8oq1ahr6V5XhLFcGgcVMGw83HyDesTq6mBCh1yRb9xMJUcuf5XHa6RFdh",
  "key8": "4xWiFWYR9DhjDTCoTqCdxuGZTbmmJ8omNagMrpGZ8mooPyHyUrPHBRCJEducf4X2x6jbmwzt9MGZNyaNzMdSy3P6",
  "key9": "2FpcjeCs1MB5mM3yBPDB9TEZTBMJnGdKTPzyXgodBA2aSK9J9aueF3MMkUNoPpUMAqwpywA53V9fyz42wictfyKe",
  "key10": "5BaLKmtnhPTvqLR1sVSBwkGALjL1DpqADsXVPNA6d7JyS79UzWH2Y32qW7Fqv4wghtrHUeKCpZm5rRxCuwo64Ti7",
  "key11": "4jQPvnjH6att4VP6o3pPAB9SoCV9MLYDdwwdvuH8Pau8tZdTJK7N8WD6kj6Zqvsh6o7tZ88KxWgGjopQQ3k6x8XN",
  "key12": "32EinhH3c8nKhdH4nc1DssKaCdH1k2Yo81eKYtR3WtQ3sGr2sA6xj9z9fD1mQ7Zbiv9dZDFF9mVbJi4dv1VAWyqS",
  "key13": "54g53enVfV8fdPD8X6gHJmzcf3RonkLc1CiyeLTnKiyvHB4seeh9gU1WiEBdjb232vE5FLR3j3JcV27oPHECH8Q1",
  "key14": "2p5mMtE7iq7QEYsJJixEy7Yc93itoZ9xTkSJJhwpb2dPqkmk9jSnFSNeLcQkQpS7aTYxb5WfyRNwN4sPQy8TXuFT",
  "key15": "5cdrHzKmzpuwWxuZ5WkFmnh8gYhqrqUywbyAxcmYEpBATFRcgKrJxmb9Yjqzm2b5m8ZvBY16BWTZeV5oNFZkdjYE",
  "key16": "hdKTLygM8KVtRwu9sgSAJNdVykVSEkCSfC33aJ8nFca6ke8T884YD8DQY63nTiAooYgbJHWfRthLCRFqecDgtEF",
  "key17": "2fFVsYyDzxhazbVDXpWoNiherxtLyzp71gsrvfyMyLRc3YqqzHMcjSH8btgHzMU256XLJVj6DEHgwHzEC1nu5W14",
  "key18": "j5Ucadk5sSpApxGqHo57WQZBH3j6S4s2yMyhEXTbX9XwYbthXr4EwLrkyQfLxif4JCXg7L1WYjm4HWVHs7X4iNY",
  "key19": "yDsBgndyr7E8QLkANwtmWhe4DcTgX1YbqM8D4yzRPSvfJKMvgPvXEYZWYCapTpm7mCMfETcof4Lmozndq2vnu2i",
  "key20": "2EaitgKkReudC8KYuiwbfiPffrWjnbLbdoNrCGjLAvdG3zSEWathx5fV63syyY5z1Yey34eLHMPrxj29xnQDk1Vm",
  "key21": "BSs2pzKzV3eRUxpUht5NKJgEzaXUh2U49TVWMjWUwgPS6xxp3BQeGF7Xu1RUA8XHM1RATVp4a3fubGHiUBM8mba",
  "key22": "5r6Bnf491ty8HZQ76rW63TJWo8igVrnFcniiHdowpYX8ajHGDKEitb3a6QtStYHiCr8jBmPhKcUmGTw9BUNsiJm1",
  "key23": "2vKgHhJAFGLTdwPHWNbjVqc8thzZi8rxBmxLW5rvvhdXbgt4uVqMBXq4cN9aNozM53wu5NQGSYcwyboC4KJ3AbkD",
  "key24": "2zQuHKDBAkvozGn1mQfni6L9Un3w7428r5hLGPU3oVzayykXx557vEbZiFGXgJqcvAWqrbMWz73oM5nAyomkoQWd",
  "key25": "3RqWicSdKgsswp9RbDB1QdtHXYFZ79hCjpEpXqq95E5RMr4bErN1iRgXmAbkEuARYwbrcWkriDbcDLSAuWZ5QMDY",
  "key26": "x6pgVcuSPRMMGac7k9AyoqKkeMj67ZZgjDTSFUKSvcNNzJwiA6qCo6CgUzzRMX7EBvvD8HwX7NQFpZMWLr5z8bQ",
  "key27": "4eYabfqd6kMQvkX3hpjShc6syTsgrwD9ZgUGBNc9QiNHgfMjthkDRgCQERr7MMTWw3rVCMavwW1qucaEnx4qXbNA",
  "key28": "3FcZbB4MdLMqjKwrDqKSjayZraRymgEPa86YwBWgKPi8No7csKqMEu1nWUnpHWUgm6dgt6ASupctU2hJGUCVqdtM",
  "key29": "32gsxU2fLdgt1bmDD2ocVZUSpPwD4eFgiDR68hUx4VSGKcFjWKoHeekFRrMgNq7j1AvK9n2gHEXyTgW7KBhgZq9F",
  "key30": "ptV3mpUE1Rgu1RJvqqizRKn7pZc2Hi5xLkYTACjYiDouy8rKEWMnCEVfPXUYDdnQTMLtwhtbbdYGWY1J7S84PF9",
  "key31": "5Z1v8qLTm2ipS7oPSrUN94FDvmQ6M68BXum8Jdu4ogSBSDukAHL2YzFZFjCa8hYHhvbNqvDy4CZzBRxyQoHhgcrc",
  "key32": "2JP8f3guvEygiKfjTRbs89craxzrcCpVcFfG9ZgxtpUbEKhpAc5zaviybqFSynt3e11ZXChZSF5snHCybjTyv3kW",
  "key33": "up6uZE8URJB7knMvPEiY9ZUwT693yS3m5uE9Bp6wgvh88S2xeSbKbHRkQVGmwRHp3oQLHj66PPG4NEcdAFqygiT",
  "key34": "2kSYkE44c3GKSCaJe23NvR23mHw1WgxdwUQTqnQrVApBZgAPhKA6W9Rj39MqvhpP2yy8jiCyi81LQQeiKNpJurpM",
  "key35": "5xt5NxqCFwmErMZy36MhDbWLkTrxXHfNy5S3xx5kF4WgFuX2fcqL1MtumcWShhK5iLzdU8y7CnDKwkH38ynEE2Y6",
  "key36": "52TGdKrN4FM9v5gaSGfXx3eSdQrf4THjvDVzKqEmwaSkGn4Sfmau4kkBppeGSWYSf1qjh63FYJ1xqTyaxxtTueAL",
  "key37": "4cJMcUMmJWPEJBrUTv3qw1JjXTDUqcS3SBFUBQ8QWQhh6rWrgGLuevXUdaPCDeR56HZFdu88uCu2sg42oByYYgBv",
  "key38": "4UEwooDh2NUavPXuHV81RGeX3AwNwTVJM1kSfDwBnPRgoaHke8vLYbyGMGXtRGmN9aV6kxijb32CG1nhJFWib9LU",
  "key39": "2Z4q55DDPzpPg2ATogHBgM5Aw9uwHLKrPkEeKRCrwCsmLUfz1Bc7QbZGnJfdP3stmphLBANUpBYCC4eDngtksHCj",
  "key40": "2kCFP8iA2JHYar1kKFRbwJjEHwAT6vAtqRHqUUcToBhyptURbQPfSMFjs6NyQ8cngYgm3eE6yNVsr16nsTGEEkYW",
  "key41": "49qhPFtJCJmcKGaMSmk76St9rssRcQVXvjkvHVbLtGpDag6sBMS5aUoFeY9rUpj7tgVtckKe7ffLgz5nuZekqXwW",
  "key42": "SfvTPucNLPRB3r725754aVupiTjFkcnmYZ2JtpW3mC495hAgcVwGXUejyuaoSAW9nAs8rfe94upstRH6qhgTNuu",
  "key43": "rCkKGsuhrwysztPSbNakf54ds4SH4ZW3yhrP577g87UqVaS9J7cMjxvQKwYnsMKbX32W5tobA9aHBU5LNrbfA2E",
  "key44": "GgCawnfYR5ZY5spEc2ztzJkGKQ2NKb9v4EBFBaxz8ZfxvNrFn1AygUcy78EbSBNgqJmubMgtCFzmknqn1eFMdkX",
  "key45": "5Pz5Qxyj8avutdgHJnzingMF99u2hVkafwUQ35bxLqLqa9V9pxkik8Ri7yuSCgtw7QxySG2A17x418u7oJXce8Fz"
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
