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
    "3RMKKLt3U8cs1kLACrggEaTJSC1eXnKGcUe1Q3bmxrTNKZ8te5tgpvGr67wRLTBpLe2QFiZC691FcWXTptgjYXFQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AobEWwUCLoCcHQsP44oKqRB9CjgzUbtTawKAs8BJLF7febHCf4TMamHv67k45KG9FVRPo9dWgfb2zn5nKynUJGc",
  "key1": "KhFRn2KfUFEHo8xsvW1tg5867XAYSCLYBYyyw1mSNNJUXf2xkNwdXoqsRkS5SyPwiYw4aQTcZkj9HDGFuZzYzY9",
  "key2": "3ZkK1F9qahsumgF4Rg9t8cK6eUx9HACVtwSBjtmpBw7sLYtUuk75KoaJJjBk3fZvGKA7gAo8ny2pN5jjhQBEfkW4",
  "key3": "2ithiCP9ocLXWygvjetXpa6eJfamna2F1Vfw3BJUtosHEQnfVTK12ig4V98cgyKRgAYwjsLVxhfdDMq3j1kMc4DV",
  "key4": "3dQ27vMuTcTacH7JbbxfJq5tAFfbc3d9XGvf19351pSjiN9LCqCevdd7xdcwtGxVjeyFH9eUhwpGKcfMJWd3e2qC",
  "key5": "5DeVxWNQP533QLTtjkgtRcgYVvSDdccwTuZk8WBLtcbe26McpAjFbjta6PwPYvkFoSe6VF5NcGwHPPitLX8BYovT",
  "key6": "4MczoXrTafW2XArZKDrgyGApkZd94LLcL27YWPnfYuco3A4DuWUvQd22MZ2JbSEp7YEwBe57yspSy6mc1AGE6vkw",
  "key7": "4xKLaxW3TeTUAXkXxTfhXJFY6gsj44TgJZcZesDAfmL3PiYa3qCdp2v7BXVcgWzc9jjJd97pAiX7JdxC1gs9kz4Z",
  "key8": "2rmPZ56Dn7gLaqWtV2AfkDjxvetdkdNovcop6XdJEdGKNnR3W5Sb4J5QtVwcUnybrKPG5NSPHGwFbQvZJUVrYrCp",
  "key9": "5CwLj4sSwKuLQBYozxaz9BepZNW5MPnfq6SdTxDHdaVoyBm6gyxQWs6ZomXZN2wPYBhhW6c27hQj7fvPo3ERsZUE",
  "key10": "3tkhRmRCUWi58stf971d8yPbFTHborccCh78QESecg3gFGSFyhUYNxRwGYTqGzWNqF72Qj8SrhMr36v7nFcLT943",
  "key11": "2qfXwxtgSGM4393e4eRifKSU7DtwYQHjVmH1y8kui1PTRkJGo7atM5RQ4tGkrnp3qRT7iv3SSsWbyVuDNL5fuqGz",
  "key12": "L89q2bc93Gjr1kdadKTZwBh9xw7TqM7uUH1PuDittW9vJwbhsxuEmZ4XAPy7Xpu5A7VMALU2aFnxRGhUrjBUwWr",
  "key13": "4xX6fMUwzbErkNBzt6RTCuHT1qKhpStpfEgGiwLMEMo5PW1MB7xFcc47N9D3aqNPWHukv3BKU9J2gyATZFuvrtSn",
  "key14": "5rgga35pkQcbBu29CpvN629Kpe8PzaMm6AC1QKSU8Het6a4CGzFvhrhR1h2fBsNPTPnAJfzWM6BscgxntQc2gNfT",
  "key15": "3Ge32CyAiG1dxNEV5NY9YUcJAbiQ39RZn8wskdfPhN6ia81XLeHWE9HFxed9NJTXbxUkMST8eAjpztp6rvrt5kD1",
  "key16": "5GCLqAxWGvAebMzctUhLMdBKxNrPNJb1zyV6RnRASaRXshGMue9EAuYumv6NtqAYKZdsej3ioJNG9QtzR1pz1WxW",
  "key17": "mDCZkvDJVa7ARMBKgBe3Yr83iVGZ5FTridzXums2q9sbxP43CQtQxfYeT2NEbPtjcmWfdVpMQyHuGHNFea5qhM7",
  "key18": "fkPfJZsRyVrFv3id3yrtL6RUBbLyGq48yHCn7oXPgREVD4ZDzpsUvAFRdTdjDrmTt8qvBbc1GnSHBQoLRuwbwgd",
  "key19": "4sj4yJr5waFKgaKZX22DaGXago2qzZAkz57jLBAos6N9zy24aLXnmdRJyXke9eNkcvknwf2o4qy5VvVRL4SzPcek",
  "key20": "4rzxwdXdv8GfSLRHHJr2Ri7uoSeBuM24q865dTMSbSqvzkEGseTe5aBUrhGiPHZNwbwqL69hWzQbVpp8AnqJhnsF",
  "key21": "5VL8g32yVp2Skd2eHYMpYeJZZE1fVUZ7UTzQ2ZH4pK4Ugz4f4sLLD6fQNZpJ8E2aUhyTAPyGHJDJgyw7CYLsGaQU",
  "key22": "3PGQgJSGejNHsitj16Pwft4qRKsXbWTUoemzv5ERLQJiFA8AdrLsDmiGk74TthCUe5sPynCtRSeRN53f8G3j6x3b",
  "key23": "nb79SApzSysxeH7jZF2hLZAF6A2aNejfqGAVVbw8RPad9huAJKD6SfrtSJv3xxXZzXhi5f7qabMq6Q6NAcxobKn",
  "key24": "5iXoUpADj7hirVpKRE3CaEXVWh6wbrCbdzcx6KpQM1KgRYEUwQa2TC5vjxTpm55fegVAhw8QWbz7PyeFmZPeNxYg",
  "key25": "3TVZaBrhdTLbj1wxFrUbivKTPR3otMckdVvSvqZMs2XPcbumAzq2rwRCen8nR54a6KNTHVxtuyhvaVoRqCwRTWmH",
  "key26": "2JaUv2D9q3QDhZHLM6apZqKzSC2AfL8XbpUUdDS3GwDfG8FGQD1eJCntdyoetZyMcojRr524ma1ia2KBDAevdmBn",
  "key27": "63DWmwr7vAVJDqipXSapy2KXj4UKvkdpi31F4fjWVNMoHuYfZ7Pj18mqLo1mPSUDXUMMcjzKFDVcqiHQ8AAJrHjp",
  "key28": "4qqPRFxouQ15YN8CvCWAvQeEGcJhy3o3DYQqscuPmtNjzqvp4qKUev1PbGRzVNNSeCN4aKTXugPcEMgYJtqfjWG7",
  "key29": "2JH366chgTU7UQroGgHEBupjt4Sm1LkVSw8Wkr7otff6CnUXiFuLr4PtimCYByMKKinHTLg7RAF96sHiif2CzGuy",
  "key30": "5edVX3jny2ra8S3AUPyewHm3wbm3WaSPsoGS4eBmnwtVTJySH6mn86Trx3yGNyDAx94BXWyfykuBagwJciGvBYLs",
  "key31": "2AN5h1X7PXeiehS6dG991zjd3HoFbVrRcWWwHGWSmiP13YPEY93CSCsf1yUSvV6MgzEioK3bee73isgvKAXJwAh9",
  "key32": "2zBkgRprAhNSpLrm8TZrpgBGA2rr9mqQLzVJXS2w7vctTn6WQi8XACR5mfVnKZVxs5fbcsvzPu4AzWhefgMD6wm2",
  "key33": "4BqctJaa6KD64Js1W99rcdKfvH6Kgjf7KDTcj8LciyoWrTR86XNbdFBec1Waus3FKXPrWriAZ4jc2erbD8Fefb7m",
  "key34": "NQpUsxFiQVwzjgaZ9WuFizpeWugLReRWV39rnwpLqDXq5FXUmDZKDbY88UMkUBHudwn5U2oFGu85m5zaG1vXuLN",
  "key35": "3b1K7czUGPXqg3AsiXoZ9zNSnfv2DTUmJYzxD8adYAHWUWvCjKdBKYsEZa5LaCYRmoHDDBKSqR42zHEGeB64QZZL"
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
