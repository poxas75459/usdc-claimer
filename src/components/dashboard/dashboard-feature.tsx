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
    "3o5Tj7oFbqPc8tLNhjiFqh5ey8CC5DkdHZoMzRTondi7Pojdg6ySHXsBZwgCYdRne75zsxjmCmcNfZbmCrgYJQR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wHyErCc8Ewgtr3mcizM8E8Sp1MT51148PmQJWLYntaYUiDFZhQ3X4EsH5HP8cVW9dir6ewZ6JAbzboKBAfpmQTw",
  "key1": "37DBRx9zPpn3nKgWq2z8DDA4zfEqchb8GusXsqWfyKNxhdHejGsyfycg3p8sBz1QivynUN3jvYmQCgKgBvqJwQjr",
  "key2": "Q5pWAkk9F7AWi9epuoJDKu8uFFEJTVEnuUqqHSce8uxuPk9kh7tu7qMC2RZPCVAt6KzHS89f71zmqs6r8PjMQx6",
  "key3": "58isxtB4mF1kfbs82sNzLkEwXJBTFnREopy6KuHGpDpRiZp9mNxb2kcMRiaeHcAsBsQ8LjJNeyvaRwq7bPM7ZV61",
  "key4": "4FotyH3L4u9wpdvaC9odzwcWsReMh3NLvKFczb4tesQP68nvrAjitt9PpMTTd4boMZ5PapfwaRREM9HMKFJ4Qyn9",
  "key5": "3QpPg4SAvotyjkjoLuXCu24TBuqsdzgqpizYAGTnkYDdQWc7PTusfG8JmiUDLjHBbQ3ctVeX1GPRNdbf6RnFjQef",
  "key6": "5TXCFCjecATs7BRoFZCicKHc9MQYdiYEBB3UhratFEiDJqVuhntbrFKMYT36np4mmY42wobKTfVAgk5XFVwUc8gu",
  "key7": "wHMftm7YUx2eUE2owXJD8SZbGmVx4w4DxGCGiWs2p8VxqZSywsCtYDa5vH9QZBGr4UKQk47WUQeb9Rj1g4cPVXG",
  "key8": "2CminQEY4cRSufwazB8rFxCWNKmfSSxmFnZC3r4DaNMgmTpLNSZtLmVidKm6ippvMmWXULkfB24svgmHfu8UVc3W",
  "key9": "48w5Uzacaes7KWhmMqMESUYczWEfYiZc6jyDPJrwv9yZByD9R8zCMnXipJTuJyw37Vaog8GPf7eFF5QWFGgiN7cU",
  "key10": "36BdMjebu6QDqzSqmMELUrJRnqnt8CX1BkSH36zVkCxkoVdrWHku9hqEhtjTvLDdQidrEPsk9sR7bfyfNHmC1Fgo",
  "key11": "3K2wzcMsiNL7GTcuyDcT6P5h49XrMz2LCS4cDVdKBvCdqbrTFPsb2Sf5dN9kF9ajRDD86b3Wj6CTw8ihzBCM8UxA",
  "key12": "4r9Db77L1ayJdEPdPZHSsmnPMdzFVuKPFxF91aKhFNeqTK2YTM1xpZjnPTdQYcPx4TrtBcvbe5YVUW18tBSPASC1",
  "key13": "573iQaoBqNwp5tVC1Ekg3D32oBEx6x5k1iJvXmzSnyL8sDUzzQ6pZZPEqVj9ms8JRaQHGcQ93ufrhqNPg3mzcpVN",
  "key14": "2bSkHvJxWVc4kaQfmwEVcfdK2KdS68xmNSD7gbDV8TPETpHuQcbgDCyPvqgAPcEijZM3DuypmQEDMKBZAcbPAGd3",
  "key15": "rgj6Tq1omqXD9aNvp5iuX7HEaRhVv9UqjLJwZL6zwjZvTP6FmDnZyoCE5s6oY5MTBhJmE7nBZwr7MeF2HZemYGP",
  "key16": "aSnCMNXyH5xDuWo1GJTdj3mT9QKA1Fp9Pbo8BCW8vJcnw5vzGWWato36STHYvLU3NtqA1DAAMxSSbsPXsqzZXHb",
  "key17": "3vU6QKBN2cZwnNMF8jqWFBt78i2E8R7X1RgavjKhhx64Ki61AwXcNQVweaNfCEW8xJGc1yWKgk5UN3kmUVvd8JoD",
  "key18": "5WcZxyu29hvKCmkvTr6yKJ2KkSc7x6EqaAN95UjqciQ9UW8xJtkCptbD4mUh7nmUxuF2ZQUTcTKAg4VHBF7RLuua",
  "key19": "S68XH7aEpAG6MopdGjvsHF2h4D6dUYA4yAyfMcG5kjg4khzcquKhRZfXQkULFL6oR4SqwnKTnbZfVN7k6nDgxvb",
  "key20": "3vsp4ExwybBYufTojHsV4j5yrM3QyDNuzsTLj1k6tuFFe4hVn7TEdhSwpCCSdb1UVJ6QFBPBUVznX4kwYPhLURJQ",
  "key21": "5YNY7pXUUBa7hbiqYfwuKFJEuSdk6seaGchrJmbf5RwLHL4bdHpyks3XPbFPboxHWmYdYXKNL4iMv8JohLT6y9o4",
  "key22": "3QQ4CJ7aQfJXFuF3ZZ1hxGaKF2sPvbeyMYDzNMBKqjsNBKVm5LUFDek98at7EysjhT6dpyiUY47AE4TkzWJGdsK6",
  "key23": "6tniFX3G6z3wmbap32xzTi7tymVHhufMcJBcoB7uonpCuM8ZePjgHa85324mAahJHJgtV37kzX6dWDkEVUqLXpf",
  "key24": "2Uym5UrmdohXSsJQCUcaY8RC9qCer5KGYdbe2NmqH64JPLMCUww77Wq95re6BfFqN1s5ntBguQFSyvaKJ57xGHgX",
  "key25": "5nesoawFYUrk3n3fLZUQuuKm11nsoSRQsaPzKp6f2AFwmEAPYsPbnXr1TTe2f5Sn9mLUTLh2baJg1fVcjFzAYtZj",
  "key26": "wxs4QtoQvhspWw35n9BHqXHaLQVrPsxmd9TxGcC1ssLjFpzypvCmr8GnCeFwEi5YgBGpicv9jELJ1kePzScFxhk",
  "key27": "5VnMLhCGVfK7uhLeHLR2M8GtcPgizx2qq9oQJ5RcbJKVKXj23bU8sdkj4D5qyoPUgSPRzNFc41GBtNXJWWZpXQVm",
  "key28": "4BW6tgQrrVaVnBXyk99XE8iERmVC9Dj28yGBhCHb2QKPpqjFAEMJvAk13mRkuA6B5sZHu4fohMfrDT6ova8H6pJ7",
  "key29": "27P45gr62LLyGksBMSHocEFF9kZmrwCtfgb9bVDAV56bwGcEf7fEDC84BEvq8r7Z4EMKb9nJJRwG4oanVoCu2LpP",
  "key30": "48sZwbZbJNei5Nosffdv6yfgKpjT3q3Eu5fvVENMjPwSCNzbXanv95Bm19boQpKAiLvkCudRenU7EUkcJn521Vuh",
  "key31": "x8pYXnDhYedx775LZjoaCkWQpfDJXQgiVKduAHCAvNKtMwL34pfq9noEtPZk9QsM1asRbjtRbfR7rKoGchxzzqm",
  "key32": "2Ex84qUvPzPcJ2XAdXTHL7NoAFhaPXH3C88qtkD7MYzeasoCi1uotmqHN9TfLT4WF4o9bUbCfZm6ctBCsyZ6FNvu",
  "key33": "3VxKbiRZjpjPqA5WNegmwsDAyEC6JTDcdA5kHF2UCkrDgovWJb4NTJ9uctdxkAhCfB3Xa7FjpbyvEJJsU6myWA77",
  "key34": "4KhfwGoe6fN35mNebbFRXJYPB5tXPhfRBMSskr87uRZyUJVdS18rPgrYfthDovTeLzhaUMinWqLeuUWbiHXT1Kpc"
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
