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
    "4bmRwpmi9enuvUU6hr7H2idiELF66iFTZx8ee3wuCSrX6PL9cHBkdsj5GJrUkCLzFLFksWhBE2i45MBWxnn1afXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46U34w5LjKbdkipgb2KCbpAmGqpSKpV3QUVUHz9WBCAdvDgpEzyjxsbubyHC2oPhv8y1bf2EajrDAYNPc8XZWGR9",
  "key1": "krkoojbWDL5RHMgxucN5z8H2LqPLS8Ti82K27mfH53mcx3JyDi2YPN22TX8UWf59kgJYHnYmjjCj1qwai7HpcN6",
  "key2": "4TXyScCZPZkhBh3Ckhyi51WFQywC3BwcQkdvBAzp2h38DYoweYptRDY3UaitV5kG9iN6G6N2jcTyrx4XvWGjXG9j",
  "key3": "66CHBXUxW9cSsGTDiPHAAYCBtwU5dixNucpFZSU2LSCj4RF2TZzURwigdHTpAgcV91axprVKK8LJwu4EZtpcSBtT",
  "key4": "3Fp6YC6m6ByjyU19rM2ePeYgTAsb3nTDaCQG2GrvENwT7ACZ45rLcgUBPKod56XeMmxFNDGQaEX7eb7VqajJUQkR",
  "key5": "4HR7xB75w1Ee5NXbABYLh5QP7LgdraHS7dauXcu1mQ8KTZbUDx5f53kfQsJXGfFAiiLdcdvQAq14tjQH6b5FRagJ",
  "key6": "4hi5SZ1ocuBKpg4DfmGPK21G75vbEt6HgtimUQ6J6PRKvy7C7uKQ5VTZ9wDPjqjpk4Fj9EZjizaRXHWocALNimLx",
  "key7": "3QDH9gunnHScLQjm6NHK2nsYnF5Y4bdVfWByRTMwgxY4eegnDTYYyExFSrTDBqgHj2jc2Md4fpVDJ6fZKAY9Ydby",
  "key8": "5An3kagqL85g3BuPjt5YLXcxDyQLmuoPek8sgfgsknBdqPCic1ph2iB7ziLibi4bmAXC9sMzhiTUUfi3K9ne6Yma",
  "key9": "41eZAxx7y4WjaRi1T7UsKcL8G8ixPkaZ7ncgLRfz5sq3hG54FXcGK2VrpjQn4g4sWtt1S4wfYZWsFB9Bz6s7mJvJ",
  "key10": "3m8X6BYE2n4RCPpbYgRJ8mfkXsVt8ZzjDnNVrfpPgVq8gYb1N5vZ4QgMBpCz5WM85RrLzr14Nkyzad3b8rEj5M1b",
  "key11": "5uKm6eNZyGK2iRonw2ndaTib3sXnZZtvRjLMR4GjLAPumU4MDTpj3rRbupy3f3fsNia1cV92bGHe21rJNVRXBYs3",
  "key12": "2VQMBqV55NA6hc8ReEadcpRhxXpix46X5QKfAN6xHfmuXX3TahmWpc37mkDqtPaPnbuB1ieqBTmi1Ap63avK5iT",
  "key13": "J4qjCKXJ8t5VPcRmEe3xmkqSTVkivgSPBGZycUC5tKFKyts6Pj8P8p1b6cdq8ZdALGwK2TmnaPwDSv5aGCPptdC",
  "key14": "h3GYvyQGpCgU1iZhnUpGdpM59SdnBuB7aMCBVF9ZbqLzCgTxh2npJpGTjiju2cSC9W5EXCRAXkp6w49b36mA6Qk",
  "key15": "5XkYpVZH86insfNJA4rPbMQNZmimxUsYpGRB7NTcF1h2GcGFjnG716UCSxkTirGJCvurk9fAiFjD7onYSrfywQ4L",
  "key16": "a1vGwb9P2uhY7oSCQBQK39nAxXHEMLaj4R1F7MXKe3H8AKzC8axxLcv6XzrpSwu6cqKhoJbBJ6gHjro54HkQYvW",
  "key17": "5sJPJLUTdbM7MTgkwCmRDzpAX6yTDiHYnuVf7sh5neXbcpyutKR42GcdYge9Q8di3t3JW51ypVd3gHxxpvKDvS3u",
  "key18": "4C5Kmj49zsCieUkqxmdQewNGQbK1NHbPMJydW1NLHgg9k5FBHcqLZu74m8KEroPFjSq6rurhkR7koxYMUHb7hi4u",
  "key19": "4nsZZHvY25xRHNJq98oDdjAjeBMTykSyuno2Grq5BD7XsR9LXr2eumXFt2BKtnKW6KofWX1ZYZ6z28Dyta1PgdJp",
  "key20": "3TGw6Pn534AUfEb9FSsM1t3wURfMHEoT2CvcGZCfEYhH1rjzTk13ho2wmnuQAk2W3RVwCJHEk3HknBcddAR64iiw",
  "key21": "2XU5S6ektXi2jjwK1RN5JuoyV2oPRumAyaNAhpwNLGH9z3E8VwdYDtzYuCBbCQdJKh8k9gfQzmeYLPZDJFGLa3kq",
  "key22": "5KmvsSQXMdnSFT5B12csLwMGhdSwuEmAAzDaqUoPF8dALZeuCxgyESeAimXBCdK2QEazX3V7fKdL5PmGaebiqrRD",
  "key23": "21GaFvWvvNFLTP9wk7zrUAJXzz3p3ngEUTtYSpyomsCuL3GUtiNW4rzsT76NnyWWuBNMnD7yF3394ifjZ99roUeB",
  "key24": "2myE4i9MyCkLLmwUurdVK8ojdcMSP8RnCkhhTU5xVTxfZEdDaQ1uoYQNp3n8bcDeQh9wW6KemyWLcL6riXAzPfqp",
  "key25": "26FfaYquxifhds7ATgGq2JxTmCS8NmLx5oAvp8cXZ5NvkvokLZguzkTwrvgQtdnhpaMxuTqNyyntKPYj6cV2wXTJ",
  "key26": "5k24f3gey7FXEuVyh8ygafnQpCv9tKituqqrV41gxgaspHk5rn2d3dED3eDp8XVUuHEzymsh4kE9bh3tBg6xZn7Q"
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
