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
    "5isGXg7sE5X92qmsGZBbXZdTHF1S1EeCR6YmjYR4cJWXa8anAJ69966Ym6kkUBKRBcXRTQNnTSZWWDES999yzdmY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fx83psDXcUZgPKVCTBCzkTvXkewEggWdDzmz8ERicSKbedGTkB2ciWR6K8ouM3C51Tz33zzo5wSgPzxL32pFrGX",
  "key1": "3QaiwLKmo6oc13aWah7mzkeE4vivVHBqus41ZBjrWyv4WDNfnqnrZPfjkPMUk7xz9knewLrNAiykfvXZrCg9txg7",
  "key2": "3UNo6Bzu9MQ9dVVYwpFNGJ6VhDAoBSsXeAAW72ojtcStriiJQVHjKLz66rCJXqAY2N1wvWA7zmRCsup3ykKZ5BFR",
  "key3": "3JEQUCkVuEp5waYYtjWK1W556yyYhfYdMLoEtkF2mPSrRTTwUUThiJg1BgZLrxbXjKvVSecJH6FMYBEvKU9Mtcj9",
  "key4": "4KuCfkHzhkUWcYAvdDfPjQPQGydKyZEnBtv3RWYjfNZtrpNia94umJsWzj4dVrG9p5chiZWkaabqNKWpXa6xVp6X",
  "key5": "8WYvuQ15ymnEvU2aJ6wCc3MwR4jekXhgDqxn3EbDzPX7yU8oyLjz2YLth4KUz3essaGMTBB1H9psUxTkoXh4E3s",
  "key6": "5i4fA69EBS3v6te67VpocBpV1psJ9Vzgmvqe96HqH66Q2HNEnZicXkaZ1vRiN7Wj7mx4Ucu4Bzj7s5MKoA44vyoS",
  "key7": "4QZiHZygLW5iAeykj1V5ApHT6YagJxTdFhtq49T1NmWeLJMKEPWpdNj8ycTFG3dwVb9oTksGnxgkfn3LZfaTmtCB",
  "key8": "2LxVKERDNPqmnk4iwpGhJWdZd3drTRrVdT8aTPcED9P5U4bvCQTuibzZefaUHCtWzxLuvFunAQSmbE3KvwBhyDJd",
  "key9": "4snyQSDUqTS7HhkfHX5MVvw79rW5gW99k8mKuwKLv9aE7XAUHVpVfHiZtNAT7kKWeRLfv6xvFHps61dxbhwTGbBx",
  "key10": "4PcHM1zHo3P1wrABP9SeBgEv9mNTTBeRCVNQE8NvX28y33rU6ZDBr65rncpTa1kWjVmTgyQYwSarbThPJi2F3b6M",
  "key11": "3PsjVm1Bc22HaPXpo3yohrhjjYcfSAabmkVHB61wEGXQnkneWeLqrm5RMZmhVvKGG1ea8UybknwQL1RrEChB1BqG",
  "key12": "3nZwNinQbA1vML9iFFbsfeBN7BB6oWaMw1B5zkMWmVtEKxR744mUh3xyrRgYcRBoZm9vEYekfqg2w8gYG9ScLRam",
  "key13": "2ePigrbzqSYTMPHPiVWZQDSf8R7rvre1SQF3rsc4WMDHHw9iBj6qgrJBHLK83ZW1srun7vxyym5qDeUyFJZxfZxk",
  "key14": "2nXHJajXeapjo8RduQVea2d5G7VjYjt93JWjVuTxPezaovZKQ2U7b76a3QarxMeZAQmqk3MJcY156Tjar5BdTxzx",
  "key15": "45NrrzUWVVgw7bc13hmcjbK6NM2jxz7kP4womWT7p2LK2QHYLo3L3dG32Jwe17AfWX1LPwrZm82eUWKKRCTwiZrN",
  "key16": "mkvkHbR8NimV8L3UDhEXnGne1m11WkBJ5hoaTnGz2Ko52u8dBj46zgXQFAavYL2MVpYnGMLQN2Ket6YoSx18sVu",
  "key17": "c1z6uRnCciQE9SoNHcosYNPAwNSuDaRayqG5cHUcTeEVPXB9rSzfnbfMB8SamwQSaiyA1jDYdkfaUCeWjytNBSh",
  "key18": "33ovbGo31nYYdEpMzeUzaxxa2vnBKD73NnsheV8sffq3vBubqhFnrBfwqT5ff57zYWux1MxGYJ78C9poJpkmZ1Vv",
  "key19": "2hGnai3yjfD1n5Tu5QiFJG9NFspEyZrD9mDchcHVot9iTWeyMcBCEzPaxbsCZfnN6WF1xtK2BMkRev3DfiP4WNQd",
  "key20": "35o2CrosAM9RV2JGJxuBgANPQn1Ei3fUKt9Exw9jnaN4eDGjrQ6BJJfyDyiCStdfzeQkQUJ2sqKhp7X8tULbdZfg",
  "key21": "3fVEywisJydB32w6sdQV8kqqEhpbRVNhryV6kT6vmZrybaaY2rjdWDhFiC6ZbzphiA1y67Prq1K2VBgQooV3rk6J",
  "key22": "5Dn7PAZxp3Dn6XPY47XcB9PWkv6SYxc4vJ3uYU9eTyFaeSu8cgbr3PYkEQ8QuQUHWZT5LUqYnTT5vnXjs1dNnZEV",
  "key23": "4xiTmC6EuwuBZJwXoc4AJHEWjpH8Gqn3bCTLCmWFPiiEC28ZXb17u7eJX8tznTpqoxAEKG8XkG1kLeVEjbF4ShFQ",
  "key24": "5eM3ZPDNrVq4nRz4328YYFy1LnMJTMw7FpLDqQCrS6ZCK5V9UtzLiHrzqWxWBR4Yc6qRWQvmLbTyg6BBVEJdAt4n",
  "key25": "4JFzpwbzFs5A1DckrfJZ7Gjk9u2W6LTyFVnMUe3yMQEk5z59oF9x8NuRsBMRxPYu3SzTWMUfHyhK6uoDSXqqtAcQ",
  "key26": "2dfzPGbPFdbqLoTfAwFG2zm6NrdBkck71Frw8sXhNXRejkA15pEavVZy2fQ8ryABf5ZUnmwzPagvkpCRxj2F5zsn",
  "key27": "BkuofCG65hKQmY7ws4mskfUgns4jLG2S7SvpsbzR5ta9E5qAATEs2BYj1Cnq8qSwNxs7GmuRYwDchd4kW7LokUN",
  "key28": "4Zw8Z9NYdyuG58D6hdQFcqD6mat6wESBZbYa1xqrQsuTdpLQqCp2GNmgb6JNY7dCZ7ykYPx5K7GhGUeiqpnuriDt",
  "key29": "3F2jLdTaJRzbwmPqRQW7Ewns4PAbTuB4bJBzqDQ7PyaiTPaEMK5STA8K13VTW37He8gZJbdpSvXKiruyqPnWkoMX"
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
