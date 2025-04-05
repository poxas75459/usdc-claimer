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
    "4kQL3KLdPebXyQbqxa92wrtUrceFtnPkRukViuW55DBJyuEfV8r7JUzg3ntXrc9sY9KdzmiTpXTuMNJdB1q8zZhH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "545UwyMVwWx6N99Cg6fGUUTNUMcY42SRaBqTbNsYckqVwgsAGvYXukvPssPp7bW6EfeLsgvhy5hQkvHt5SqHTjhf",
  "key1": "4cq3XUhdo5phcWKrCvRKdVaCVctHEghuAdX347Ftin8VvHBimNSdquX88eaz33eCVd9jPMqXS3ZRWi41xsjYe3Rz",
  "key2": "TEAae9UWrarhotMfShYHHq8MCEAbNScACDWV2xLCyKbENk2jrKhLDz1hyWBJbEnzVv2AD8T9GL2hGapTnUBUiPi",
  "key3": "26NSqY8qhAbzZc1LQS45JsxRwfA5xon4HkeEBT1gyCMdKnBie64Ltqi8XJGYQL8meCrM3k6Y7dkRViAdC486zchc",
  "key4": "2tB4LQ5vprSrmSGRk3E44fhNVrYKm3FZVsiEo9ZcYjLpH2sWmNjyJxBMYfDECX9CPKvVEejuXoURXUKbfUKvhpxG",
  "key5": "2HDjgBUZmdyBv3FpuWbB3MPiqLoVnUQyBpvFPbARWJJBjAnbrS6XPHAYPSpbi23Bg7cKjsH8itUWzBS9Jfh3YPpq",
  "key6": "2N8gNFoQb741JY7nE54e9qD1WrwiNUiB9nvk5Bq5JwD8QvcU3QVdunC4y21RF9paud7A6B4wF2BYd8SGpxAq2MaK",
  "key7": "4KSCn4j5mth5BY398N4EGAjo4BPkGdV3FnQHYRg5Z3ymiYGQDtMDMsYhu15nVz5tMxH2W6rmrhUWRTvSndCGY8Di",
  "key8": "2odFMvb6QL2LzgnvdF69Q6gbmZBEdm5UgNTebMidi3E8pkzqYFSxKN92kg5ivswQuHmyCwhbAC5YLxgyJDngWvd3",
  "key9": "4DbJgDcDAzko14UdTwZToptqzQiL5Urm2Hw3eLdQoW4mceGRRZUMyjXz1NnPaQ3msvMRfdusNbB64fbhbptMifr5",
  "key10": "3Jevmz3SYYgRp1vf2bm46MD5JPzPyBjZPMNNUT8L8JJCskthpUstjHDK45vumL5WnpAttDH72ec2rQHS4wUPYwvJ",
  "key11": "4GAPtF9KiizP4rCZqumZsFFaXYdxu5jSTrbVy12RKQgh2L8Hj6LY5wHRLzA9kbaj17YCKuP6aaV1iCucnh3ByjUq",
  "key12": "5mpjJYDhp4YfuZ9BdPAPSwgr34LHUp79fAqs7GjKSc5xzXZhaRsjA987nPgKDvYAqMba7oLezx2rJ7VSjBDBVkEq",
  "key13": "76KezfjiTyDdjtkWmhUi2kqFUYnk6jwn1P7fjzqv2e3Bc6ypKL151WBnshDTnwdUTEV58jq9dTcarcQWpnDgfbB",
  "key14": "51STBf5fSu3RnQaE4yHYFD6FMoqTvvQ4uGhTHwsu7iG4M8b6dD7jGQpVqw4LWPXkpBykAvt8HJi51j2YsSFeeuJC",
  "key15": "2kQUX8Dedz448LjZF4UaoL9k4kYdcUtSxSQsED3rdqU6Pg78se94Ep9ZpWK6jAStEHq4n2dZ1kQLas8Yk85yHa12",
  "key16": "2LXo4NV1BKK56VKVSUkrmucLKuLRkJVuyZ95kAJESUJuwGkzaUygxctBvcL7qiEV2HBkGR4u7R9ooywi8LMCjDKV",
  "key17": "2RsSyQeWj8CuZvZQSraqsbMJ5u7k3Mya9mBmuonJa9e8Hr48g2LkE1mCQjznTvaxxMexa5c91Ap47vAUX5pk3WRF",
  "key18": "3T643mkGUgpGSvWj5X7CJzat6gbSqMe74zcMywUHvxuLRn5UXZG8xDrAMRWxRoJC9BR6HNrzRv8iBc4aAS6H3uME",
  "key19": "2LNMHPQfpQydQjPb3wHaeKDdKcbHWbgFFCUiKBfuQS2jQLMXuHScowPwUzADtB7An4xtYN4wtdZHb1A1JhWsqrTc",
  "key20": "3StcGM8LqyLGTMwkZW2SWdkYSo2ZKemMzP2pJKdNtXZQZFvEsNATsUeozFtd3xLpvvK1EnxAdff7mRJ8omYpwwNd",
  "key21": "4ixzJaAWjM2nLRemY6KAP3wWGEQLC6JcpKJuSuAYzGWHm8VdUkSc9NXbTq93vQwWrF2VfEHWt4HqCAwZ29ctNm3u",
  "key22": "BBV8kHM7pBeEPzoY2iPLHvg4QQP7EpMr8aYhR93i8tGSoDLh2SpByK9uv7hLBvbEyBhiSrkioPjaQxqAf3sykNf",
  "key23": "5Aa1UKSvbczrhz6jnPC1f796Gmc1S6b5AXjKHQ3QBNos6QebNV5L7AimwA3SorgHCjpoAXrkgsotgFpuBYTQoy9t",
  "key24": "5b1ix3UrWhddTr7LBmKyApG3Fgfchvb67xckKm9JS3r6zqVLRyrCm2YoNZdgXGoH9cMqpoZdi3TboNyBJBQMxo9d",
  "key25": "3oAXmLum7HiuwhkkxXbonsyEokEW8s8XcQofmRz3ySYdP3XNJ3SiggYK7cjoJCSEFdqGN6Xkx5mhQQW35WAu6CYz"
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
