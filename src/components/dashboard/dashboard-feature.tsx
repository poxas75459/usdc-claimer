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
    "46LH9vHWy3TjLk3wtngSEmdxnRj4rwS2yNccqYfQEUiG6R8zyQ8bpoQVVjrtJNKobDsNyhwdEy6j3Jo56D8BYPQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59asySWyGUvCrLQbfmpsdFkw61iqp6itvPM3WoYKUqibFhkGxzghinKEnJEmQSeoS9QP6ecw53Qjs524cayejiMj",
  "key1": "3cm34uYpN88G71s6FjSkR6uzWiHHmECaRd4KdXcVHBQri2GbKhwLjHrA4ZAiWkXa5q5LceH7yPNSsb9pizCkT1ZH",
  "key2": "4ZWeQScvZzLDjtNsSoHgzXiZLE2BHcqzZRij77BJzsQqCkBYdPCuthFsNjH2kGQdMxeBPN4wdkuYB4CsQDKB4YZg",
  "key3": "2pCiduGJqKEiu9Mku55LjzW1uCoSjtKaonyR7EyYqoGLG9zqvXuj64cBEiivbagTTd6gTUdaaHdCh4EChk3ihVb8",
  "key4": "29jW6237m8mcRi9kfJdEoW25uopRDBWYYBMiv7tRqkW7uYc9Mtdq35tTA1c7MtEoG6eznZm4hnmuigiCmiqDGy94",
  "key5": "2RyQKMMGJgkKt9kKHrDCBqqJe7d1ncbE2uSpvVLSrkC4s6ifn1G5zJFASL5MbJ9kWFNJmYZ5SotNXRzNHBr5QpEy",
  "key6": "4cKsAw2s8uu7eyqEBrkepQ4aQBMjhaYqXWji96aCaSMK718BkTi9YUNA71TjuSpC97XE7LnqUJjsjicLPs5327QL",
  "key7": "2b2P8Nacfyabo48EBUD5gJBUgZeG92FSceoTUyet99F1bUwx3juubiV9RygY3vYTfeJv7EbH8LGQdBzBL9SDxTxA",
  "key8": "3jJDhQqNF7HEhmBXV8yjx1Lo4UX5RYy9CE9psHunazk969Ygq7Q9j5K49mXY4oUJM1uaMv8Z7mSmjcfspfp7DuQn",
  "key9": "5ALCXcjQN4rSmAXzZucHbV5ooFWNCqaZrJtYn6wfZyp8hk6n3sTSxMB5GuXjKFQwJsHAA39YnukbFMjBZMDHqrwC",
  "key10": "2YtHKUKKWj2nb5gyzgN3vxnyQK2ZJEftREL5WmMcrANFJy12VDud6eHaAX2uypiajwGaioubAqWixSCwztuLZEj1",
  "key11": "4bbjYW7gwDV8BYMRd8bfwtUVJp9XhbGpxbVahiUjLFLLaWiYyYikKizdVYZdXHN5tTox54pHzsGRtqy5T5tApDLe",
  "key12": "2443236y6vSYYhqo978cRsgjj1fPzxxV1aiqr4kv6KRmdvbV3NyhKSvtpsWeXmA5kirH4KTSrJ4xuHkq8xddWDnR",
  "key13": "4caTuXWwodyniRUbMXCxgA7kYooNpuBAmnGnucyK5HvziUhESntMbE2dBwMisRRrdCo5mHmebXCGZJHgSc1mLgwc",
  "key14": "314D5B4rP9TeT4fQwNFm12vqzWvecEmqfms9XrLfU4qqVhW3t9bGnJd2tKFArzmzdzbgw7v59BMJRyBbxDiDKP3j",
  "key15": "2iEg6oCCQ8cFo847M9DrNNHuc67WP3MXtCYmAGpzZw6kiUPGmMgJVfPpyeAhdDQ7FuVx3dg61JPtQ5VRAsxHSdGx",
  "key16": "3cxt8CD8F9D94maYYfhzU3UDnvui8AM4qF1E3sSoTsxW1GEDEpDVaoeJaTzbZdyFhDKmfHHhNf7XcTCdzcRhf9s8",
  "key17": "2EvqnedGi5aBt71Atd55VnqJK38LsGT5F8kLut8LV48gb5cRsENoJNkgMo9xrHWrqCefhsy4MwfvTrjkvYPYeb1F",
  "key18": "2EURkyBhgbKYfrP7QPD4JrrxN283FanJhjKhoP9fDL22DR5xk7CRFTMjDYsJjyNhrXmVoy8LQL6LEA6SJBFdAEUZ",
  "key19": "3bFZ8ZZ7TpfESBosFSVVJZGJnAF4AK9DH7f3f9KfGggPNhCu4UZ2wWeKqW7N2QH9ZiAE5UzcD2sPp8S1CHiThjvx",
  "key20": "4LfF2C35orebnJebf8XUDjPWJ3ihwa4ZxAHaSr68EGo4pqciHBGn4PEnSoZRCzWHD4GcUPspKuszWb79MKjNJJD9",
  "key21": "4qUcJUtyc9SKBftdZBUxShgvSCCwK2zbK56RYc4DfbeazFhWjriDrSxuRqEhqtE8jGRtaUVzP5j7zgA6sxbx6qXR",
  "key22": "WPFh2HYjz4rP7zHbcRUpZN4SXyQMV6LDJ7YbGYZgMdu6tezhTNdWJAHA7ciJWrENkEUUkDuXcC7ivVrj5QkMSY7",
  "key23": "65htqVF9CBMieDkMNbEmmzUnQeHG9A2fMu9UMAsV6jC3tskwkUWZ5tniD2wtBxKx9sGxLUXERx5AWAEp7G1Rgyee",
  "key24": "4j4gNEYKk46BSSW9HzxxDvG2sjKzwvzmeFNKvYgrbghVH16pQQhiUzKHtm5nBYw3kzy6XZkE2hKLFToYdd1T2JMf",
  "key25": "Xgdr7qZh7SiNHTAtf2Pgr4ehfi12BUkNJ3DJBcgAxmFi9CRYQt82N179vSVK8cWUwUVe2HDZe19EyVmxWh3XN2P",
  "key26": "5TEdJCEGD1udB5gZ9dgzrG4fW8EQpyXLCsy47cSq8gPKKBQp8dzyxbwwHGbEfoweYCUj3rDSSeb4Wy6tatnh8yud",
  "key27": "5y77EMyMNZYZn7MjMBtx8sREe3vcU7VAHiixNB7S7DtpPsKLBEgu75SSm9MMRqPrt485CE9sP1h2TgfLczw4aF5U",
  "key28": "5668AvLiny5xMcEmCf39U7JRfHpfATbm2WmEhUvLNEHZMiGrGbxYQYtLFBr2zun4ybwgQvBFeDGEXX8zZS1t84N2",
  "key29": "3Jw1uEQe8QfnfueTH9w821mLDwFbjcpdc8EysxTPQnSXeiXHwxrsoUqhvfDZ97kZMSVNye6G2gnsPsQ8dg3do5sc",
  "key30": "4kc77XZVZ7mkxPzuauQ4uqFpAxeuJmfHK68q8ugjKz1BPn8jEnqhCkj5n9y8qUUynFYAYWKhLfogBMXnVkvVqicC",
  "key31": "27NSuTgYCh7seqEQwGMACUVRvaKLvjcNMuApaL2wMzrgqu6GrtHGUQiFW2xgypzBnipjvpj7sGJzbgZfjrZGDVbh",
  "key32": "4mDoF9nueL84JEuAcn9ZJFuACBZgZQX5CmLty2KuG1zG8krCMdqSPxitXRse5QAEqyuqEGmxMk3gCPZo4FHHoJig",
  "key33": "5vRVRrvDhEHhFjHAEyZ1j1qz18U2RDpR4LXcCFjFJoe9h9EHrxwtrmutQh7kAScZcjkDDZYBYo9SNai2tUQyXQTN"
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
