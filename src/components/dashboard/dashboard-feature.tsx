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
    "wFL3b7K8NKFdGnxcEGkz6MMCrg7kmwLJRY8cG4YDLJjAM7XoKXYRpGpkQP2bfBQKraoXAykjhtstMSDX4SZhCBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n1EyCPf82mLpFg8PRM5d8spz9CASQGrKUKs5AoEib5YpDqvUEs5vFFJapZ5z1XagyyvKJW3EvbbhMLUwE7fokkU",
  "key1": "SCK7z2x3YxmJTYb7figzWtE117h8dPdvxqupkCMr6QVk3g3Ye1mUX1WSfsAC3xopyJRymS8YYqaGW2SfqovXE9Z",
  "key2": "2XGkcVMsbVvxTTwoi8XXW4JKh2sbCNTvYYQnyRQNFQMF21SNGqXexKxjsTVPUp2MFxAbqwwhBKzevSHHsE1DCQF9",
  "key3": "rakQXmrT1m2GkKbaDtgWbbiAXT4UCPbsrQHWuoQmvHEKiPbxmTB5icT1grnAp4YkQruv7hSXg2c4RAUvNXXH2ps",
  "key4": "dTQDrHnmY4DgvboA4GnuLxo7ToS76WGPi2h9A7iM6c24X7cMR4YGfA2VPRvBrocnWAdy3jPn6E9RVWTuYpiBu69",
  "key5": "5FEcNxx1kfEqrHrd78KRYb953ADbe5MZMAyidNfwu8vhCKWvB9JP3qrpbHx6K8Svs9psvAKxKLZbT2ADNn88p62J",
  "key6": "3fDKvBgBamAmqKYdktmF1aaUN2P8GGSdshUk4DpDPMGhSNCcne6BmvTccQcmbW4Rcp4jKfVTpxkusjLzvVedhb86",
  "key7": "3fSPN9By7GFK8bTsVwP2mSduLztRGkCy2Ztvo9yizjjwPztWwGspDGr3bpVNcRKyRSQwvizzR23Qcx3kZyLqDptC",
  "key8": "zD7YUhpcA4gYqgyfCLjwd8xSChnZmHeZ5mmnEStsaLftfSrUbVEsq5WnVd5QxQj8xnfmsRNga5RrK4Hs2Mqir6s",
  "key9": "bUtbbYDUJkaVre1ZscuenHcxL36GapYXbGHgBaKEq31FegfzBC8DaZLfcVy8izLxra8ccLaQ79sPZV69Mr1mWVq",
  "key10": "59f2yUPraHS5QvMc192Jqx37Dc5qTCi1qjp2C91eNXnHxkDPDajMcM4frR8bqSCKKoFfGZz5xVbEaS7f3YHGK7ME",
  "key11": "7k6VdicMYDgTWVKJXfMos6FrdQ4gGQpBxM9i6gTsuZwQAfbAwvw3RCfuXwnnjvVgMWAs47kN4MRS2zMJcaCPRrE",
  "key12": "3a61Aqy6Hm8a8KTiHQrF7wuLocYKEZ9KPos2bnTJdA8UX21CvULLBtmZsx7Cjc9LXHTa2Ey4scbTpwJL4NC3qfW2",
  "key13": "4A5fuiVZHWDmNvTuAGhNwGydrSTEjMMVKYCksG9eaNTczjEvhPvVJT9my7Zk8mqugM41XzrnsTjpU9PhtiG9qfFr",
  "key14": "3ag6yWXGM2pFQY9noVT2sjR37ANrQLdzZCNobkrtm54JGWkj1DTH6b5kAA3imAsYwKKwFXZFQYSj9p88AUNheeVw",
  "key15": "3uWWJTyXbB7Bd3cGmmczepEfV6GHtnHFunnuK8D7yA1dStjrGCbVYsM6w8zQsUk8b5d1Cw3YxezxMZiZQhioo2mZ",
  "key16": "VTQrB1YHP8ipWcroLK46fjrzbWv36fEGzsWAmhpAWf4qMrAyhovaaYWpbEidCXYHzaqVr6kYDVkM2vYdrLNUGqP",
  "key17": "CWpQo8U5CHz5BWs5JQzWvKpxtWZ6wXZTG6r18stdeNWf1bXKdFpWfF9Y6gVY7yEfxa4tcowsbWLQNGxBgRKHQuu",
  "key18": "3GM2EtEqZK7zNfY7XWcP7HVPXcHoki447m9a1zhuy6pmVF3LbavjTySTektoHNUoZKjq1vYFj6twWrc9D6ri6HWQ",
  "key19": "2xB75owFaF5ikD9MGDQfn6oJA5xJ1iWvDuz9hnJw2mVWPyfeChtiDUVdmeXKtdK2efgbYjNL23Nr26RdaRysQQ2P",
  "key20": "2EKeA4UiLC2DDkwdwP4TWff4hK3vqmTFVDg8UAsvjwYznWkWFeCBKrv1MfHSBqda2fAVdDVPbgoBeuB8ijPUKGfC",
  "key21": "HYwEvwJ47JNTmbPrLTMXBhSgyWZkKRc6Xq5AfDmeUZHzmJXb8RWQESKaEgwMycYUyzHxv8yqQeD4cf36V6xGXf1",
  "key22": "5g19gwWtZ5JFJH1taXjKX5kZEZGGTGQsjfkkshBuPFpg2sAjB8X1c2e9FvY27jG43cqLtNJLu489n6q1FfvVu4Ru",
  "key23": "5WhhVJRBh9SDEvSq4mecchTeMyDAgsLUSDSWiwbgSKEnWH5pobNrAfsgXmY4zUEotU6fZBiAyXsi6szPs1zwBEck",
  "key24": "4HyZ4f2LVZJEfk73XRyNWJCnD9J859rrPUwcSVv5RTKySKcHiM22iuRD5Y5xDVFP8fWfJ4SuWRgpR8wja8hPQSzq",
  "key25": "32c66emU1hhJoagAEYH3gs7W6ARfmprPcgwYL2Z1Z5s9Der6DQaneCsCzJYA315k2t8zXUkkqYcRJNCAVtUgz8YB",
  "key26": "67mHT746JJjY3jAcBxo6w8eickxEw1qTpwvCTtV4PCL3sR8aqrxir6B1nUVGgZ9yd32rSBxiTxWwrLKG6dtuhG89",
  "key27": "kvR4iT7pkKqzfCUsEeXLi8N8v1KrfaPFbC5dPRfuKHydfGP2hEbj3aWDjB2bqkofahkx3woqmxrkFcFwrpgknp4",
  "key28": "4PxnqF2PbcVBG4LAB5NpYT8EZxLwNG2CmmqtBtGb5aM6XotNrKLZGY2uy2mY5dR18SVMXEDA9CXmvfzWgVzAiF7L",
  "key29": "rUHrPxtBV63Jm6AunhBmqyAv46EmMSXSELgtkspitDbGGUJjs6ExYf6gCeTiFcmTxvAj51wW2eintVaeQMVcQEJ",
  "key30": "2uMFYxFs2yymeDBcpoGTEKwTz4fBMKDE4e1HfQiSJfg6Ce1ZQhWEMGoSNatd9e8iJVC8jSL9j4cwDLSxrhXBxa8w",
  "key31": "4QzzAZkx3cKY7ZLECZGedyXoUw19cMtg6xYSFUVakRUwG4gkLJX4h2eEX8W1Q9pZdF3W7Q2a7DW1prZETmydfNCF",
  "key32": "2ERzmfoPEWFtPYz3T4AxNT9nmVxzNJ9RWA1E79L1V8LRD49aRmkNyGi7ZYtea85YkVwZYKmyFi8Ncx9ETJB3NDW3",
  "key33": "4ESAVaQWngzgDEB1gwUaBxNgEyZHYsmccBaJxZCRgu89k1aZpyAFrahH8754nHBcJ4S9khLZC9hjpDegyhqzXw9z",
  "key34": "36z3nRL6R4G5XeZFHgRxYrZPTBA8sxretf2tpFnN6cCF2LzcBP2BzCzYdbm2AEpQrzteYg1NYcXis4P6kGPBgXGr",
  "key35": "3JwFYbTktRQuLHqhwnmm7vPmiFQsU2y19iAFXSSKkshX1N2fjMbFpEHz6XsBbgta8KvSycdWMrxp7jB9nRF5XYab",
  "key36": "3bYLtP6eVTyrsUzgKctepZx9FfCseAAAnqQT38655uopV6tTsj1bAsahyvhcqqRunH3HpNbd5Hb4ogtWoa9pFZmc",
  "key37": "321G8SEfFFiwukdefjDbdbYWzwLZho1YhnEpduQLykr6PaJNWqJJMFMd4E9hqwSLmhrukoacXgEoPfWSh1xUuBX6",
  "key38": "3e74kFga6dem4y918cvZjUHz21ng76xVyt24LU99zUXVmFkCZMrr7FEBZnpp1k8BMjDMgpatGoH3iK26UTdb3Vhp",
  "key39": "62FC1jENirSXYFsmQpXqdWoodHjVRi7pW39aEXpDUQ6vaP6WNqe5zC7ep94nScQbrtKzriEDmV4ZXPHfHURrS2wf",
  "key40": "2V2u95E5oSuVuLPzeXyc4baRrS8r3ujrXuXZzXEbHkgmCTrGbL9b6Fz8DCLXaA2x1b7LS89hEGgmtVDW549N3x7C",
  "key41": "5RaqmaRHiSLsGabhwVGZgfGA3atw3J5gXmR6W5Zn1eNfnNei6ZV7SgdUM3gpgaNErW9CUyeuRUKWpCYNjpErRQSS",
  "key42": "LtPsmK8kK266zPCsLMPjA432yrcsRjhWVMGzfxuemziMUtBUZPKVBmK8z6mazVpws5AARDcMjiT7hvVNPXhsyeG"
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
