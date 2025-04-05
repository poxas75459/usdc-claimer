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
    "49RQsiD4CHup8KRjU9ALNZaC2o8Q4kcZhaSd5PGLFe6ZxM2p34aaaGPNuxP2aevZxc3CiLqADGckaDxuALC8fhx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "291Zq8myqpxk9JtWVYxsjc3wiEbqrpYL2aJaZyYbN9WXMuESAnucU728aVE8h6juwpZraHG2bey3edQYTfQ9GPaw",
  "key1": "4AVoQPU39vAf1FqsYe6wuFsADp7ekUUx7s4N94BFrqowpWBEyT9pUTBHBVbCA2h7SrQYUm8eE16kRH9oQisMwfBC",
  "key2": "4aY8JoQMrCAF7KwVDHu4NsXRmBGpTBi8tdC5LraWa3REb99csKjxa18CTCDHhKZphZf3Eckefbm3VrURzmAYD1tB",
  "key3": "3EovByfo6XU6aea2WfVsLcnwvSv5q4UNdLpYgxttvAsSvYLV1dvDQTNaqNgHQo3Mh1wxHF7Nqps1f7i1rHeb3b5k",
  "key4": "2SFCdpPpVk27TWugiksC9S5LbUJEMLUoE8TExATTdgp26XjBa2h5RV7XADtG97oPAKD7Knh2LttZG9Kkb4EAoHqN",
  "key5": "5VKBoYQfKcQhFN34q2CZkxtbMZeucuNfLmX3AXMMw32eSNpxZBau3oVE7nHKtumh97jkUEb7v5PzMPDtwipa3mPA",
  "key6": "3hhmpEKNv56DrwtvfQk3Fsh9NvcBJKGWGTkzHRPe3Hbk6MQVZ2QheoTtT6HjgpGbbsnbY3MknJCUimMBYeYX4aq5",
  "key7": "3sCT87nFZBouhYMKfAjRwuDoewGPGzy6rtHQMzsLosykfHDuetMZffhKvrKLyp26Wz6fM8wRo7LMktkGA1cHCQTT",
  "key8": "5AfY9krStjsRT6bqY2papcSAuFAaUC13PHAq5f5gqgd9iDtfQsyDKFkaP5jyf9mPQhdnNMqZWDL3XKhiQjJULLZv",
  "key9": "5FgDQ3vWcVWeXSpTvwbgi4MnMsbQ72rVfU8aUbs32jrvYSHM5jyCsCibRpwDDA35fMJsBSyoFZRVyrHiHtRddtup",
  "key10": "4rQ2hu3p8sdPofjdGqSV3yPM84XJByMBPqk1UZs2yuDX7FKMkEdR3eSRDhx1E7AZjEzFR56cSfDwZZZpucVTRv9D",
  "key11": "4NXx1c4bAvefXeGeN4TbWXUTHi3KhyQozdepgartPzgyL8HKrYG7jY3VwPoexRYEP6JUmkGaCkL9NiHpoH7g6LCs",
  "key12": "45wUVbkpRbC2PoazYHASnxkJgzYTY3iy2RdJjaxm26K6aY892agNHVrPmuSizThpaXPNhsVajhVy9nq5T8X2UdGE",
  "key13": "2VogtQFJ3bJksfzeZRgbJUuNQ4nkF8tyDEosRTeUyHmQPN8u9axp99gqFfmuL9Ya3GgxsbH7DdhBDDoJfAw9nWq9",
  "key14": "2D5qhEwbk3ykWuXuHGvNiaCBbqpyLdhGFGhRMxybLmvQN5FiorcmULDYu6CeYpuow64BMXjFZpatTbeyweZDWBwv",
  "key15": "2dMcEXe1UkSyfuj8oW87tRb5c4WcqwtgLZobJ94GWB5RfcKhaVyvRYwpHzZZuLrvyFx5LwUxHPEWdHEbpsrt35PQ",
  "key16": "4BvUr7MqNJE1vBj3HmTZ3y75SxokL8YjX8NS7w7KuSKAYux7amEAUmxCnHUxGXZBAP6N7KShFNMQ9Ptp7P8YpNiD",
  "key17": "2iuwbQmCpZEN4TPALUjoKkJsHo93c1RcvyPdZXmHizs4PPcyvDntkq1bvfwYQiMe7Le52xktm755c29k4qoZiGjC",
  "key18": "3Y3oJoSqGjXB9rf5DR2Eo3A91dQy6iCrxEDWDYSH6k7gc1dDQERLHRPiRR22kAitFfSHGDDmabadoFBCGqDRxk2a",
  "key19": "5bu8zmoJ5ZNFmysXrcLisu6xdf6PxYV5sXojkwVdPjMRwQpkFcLdcEJC5ZW3aoQoaL5QXfFgpkamrQqR2hxsDdvG",
  "key20": "2JBXuMgP2m3TErAWR5aTt2WrqDXNeLSGrtHMZTnMNBM8qykQeXDk2HMRbjDDEAPrMWDWLaAKttZsAKfDEgoPuBgE",
  "key21": "5gixeZLoFZAWm2CokEtwaG6rxybzmVZP6ntCG2WcQMUHZ2KgQ3RhGwK4SQ1wswhtzxK66Aih7EMZzDDD8o6UdrmW",
  "key22": "4EF7pduzMi5P6JwmU8ELvyQSBvLuT71xSHDnmPTMDfBUrk5miWNkjXYaSKETRPLZVz857BHVPRwBEodRvjJm5JTG",
  "key23": "3YJ12B7tW5aYcpP9dboMMvb7MXwCPuDSjoMonWteHJcPWwNqER1Zdsh6AA1XHTMQEaCdjFwGeUZERTM62VEPfhEG",
  "key24": "468DWD9aMHWhFhb3vZSDVrRghdXJEZb5rcpYaxb1cb17Z5SbmoVWkk1Drvsdr3PzEi2VBhWcS3j8M49EFVF9pJZ7",
  "key25": "3jpbksg1ceJVYisAHuUw6Y7tHKgHxFtxYoSqfKb69QW975XC5qSTfQ6Z9caCZgQqYb9x6otQYmhzULchqVedwRTX",
  "key26": "2n66Sis5nB5crU2CAtr5fnB7wJje3TszBdDXUEEoz17wpERuVvGhevfnRSputf8gRgoQcYAKPBREa5myXB9mWoR6",
  "key27": "45Cu3xSiestRLiNHdSMTxx7sy1xpxCwh5VXaS9mi9aoKJRDwW9SUARBLiBYo66YRxHZnmkgAzZACDvYDdAM18h2B",
  "key28": "2fBvMhhdNFB6qnLn9EF9Z6kw8xXZuAkdFLjmHpJfFAt6fY1fvtBRWSLUmDdsgLJVRA7zsX8wY3tRppAzECqzMq4m",
  "key29": "nz8ozvm7Kt1QiZGE4BWWcSsdU3SPXfot12BW1rQfDepk6wL8AKQCFtdATsZvBRrLCT1yVioR2uU5sEVcfr6utzE",
  "key30": "572W3LbnEhcLxfZL316sxAJ37nGoQ1nFxh2QhR5FqnM7Yx1dALdVW3iVtfmed9ko5G3XKvvLeb16HzW9SUtWAbV",
  "key31": "5B99vM6qBCPJBdL351gyxjvrKKkCTZWW5SszD8vJEMTwL8yLtijA7cpAQ4F7NK3Ctpoj4o9jqYe89Z389LQBaJfo"
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
