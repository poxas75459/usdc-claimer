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
    "3HnyFN9CqUzRLBBPnDmkh8kA5A4YpkaEZcbBMQw8PzUL37hG1FFLG8DGtCWXbUZgHpGgazoV8AdVp73k7B15PNQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dKsgiG6YVNkTBR26dE5iRXySzKfB6fFdSqXygq3Ugz9svFnGen4UHhmKGNH9EVoLBFLWQnJmhmh2gz71zLRf5oT",
  "key1": "QVDriiihfzod4FU4kuCuxGgQ4JgQfDqYRvmUwaBPsubPcB16EoeNDid58YBzrX5XojBKHTxeBS7dEpDNuyid4LF",
  "key2": "3dWvVqBXq8TT4RgNX3p3zeD7Wz7b66LUCgL16gJTU2vDWC6CsLdtsLyLHpZbFxCCLnrxMyP9YwDsvBYSh8GQ5LqR",
  "key3": "4nTSu5wEuzNUCrRzYBuW2oxu4BT7ztgfXWaDVqonXv2waKzs9jDE6CinQdUFX7zxqAfYVEYkZLZT9q3L18Au11J1",
  "key4": "43wVFHWZ46y7LeMVfQXqphKXdksvtDtUm4vVYnFwCgpF6SAYWgbY8SDkLWkBBpR4DNH1JCfhZpfbghkaXCJSS2jA",
  "key5": "4Tcvm9LxMZe94QfG5wJPhUArM7CqyHnjYqBx8PMj6cC63nDftJ1QrX18s5JFLQ29MWVHFaXfsxKhvaBKK8WnbPfe",
  "key6": "49hexvAzYtT8YVzj1NRMKwWPqdZZM8XAFXgb79iH6FZwUnJ2oH8afHiaaLmStFC8kgz6wpbjeayiLuLjm6FV8SpK",
  "key7": "5ripTp5GVbZhu9Pb94ieL3u3LUbq8bECmLYbzsr9bBTGgth1NMH4rF4os8K8beHHxwTJx3JQy1CMogKEvRL4H8BF",
  "key8": "43iDFaFuzZVTRNvg35sxLMW9y6mrr7zuTA52yhBC1WzWoVZSTDA4jKTHLToiyhc6jx5P79NfwdorFe4Vy85vNYfZ",
  "key9": "4rswZuMk285apq3sk9wC4dNTTW8QYGWuMDm5k5m6FBUVux3RE6ZtU8q2pUqbkxUWzPeJKxSD1Hrqsi1LHxS16vtt",
  "key10": "29XGakzvM1pVhhbzmVcRa52TTK6aFHWqVGNagTKEgWg2z4UVmpgSG8y1q3cc4uCbRwmdAPppwSXgc5NzM8owaMww",
  "key11": "HjRVgNvjg2YrEqmmpXKqUM6MsamBpDJWYqNBbSjXjGLiDRDQztpvZryH8rB3KP4GJHCq1SUsqKRYni1Lr8xYS78",
  "key12": "o2nNrarkBJJnJtangT4YDt5agtum5Cgw9TMHZrvmhEqvtvbYCs8w4Xyt6pBUGhEU4LfWNbZQaZaZQs7ZXmTjADJ",
  "key13": "2qkykcSBwqjGqNLJsxyDiA7LPQxufUkcjSipYDj9dptAvoGZAUAhPxumzTCceuZNJu6jxX6p74XjFfWbW72FSCmp",
  "key14": "4kdWehG1qFnFTuqTJvdGeQS7hJKGmj4zMFBfv3TKfSE5oiWvXbZ69hLWRS4bdPxzmzLvLgpNE9MbHv7wDkaRy4cP",
  "key15": "ra3arEAtcwyzV9MtsLZQUZbcCLCXJQwiCbsReMasNoakMmnovdCkoo7RmvC8JL3LcyUXC4aMr1h1iurswnPiUzG",
  "key16": "3mqhW1H8oAZh4W3CXiYfv6xxNSAfPwnjsPsxKsJVAY3pLSXExumt5qYcbPq9NDk8dBDmHTtn1nfaJdXhiuu9DgJx",
  "key17": "5wQdFhhKC7YxpwdDiMWRfCcoyTUX4v6XyjtThvLeTzTQMAJoFHTaxT7bBtQ6gMUsdZGmekMNJcbpiTdwr2sLqzzj",
  "key18": "2JQW8DeodiMoNF5Fx7fSX4wNXLp5uC5QoFe3w3tZ9gAR7qJHe6RZZWg82wDW25Bfa224bpQhdBHLJfChqMCunTi3",
  "key19": "3yGGWTA3o6HarzxeEYU5yHRaioMYR718RMNeDf9dGeCf61p91MmExdauHQhnEV9cP59RqZQv91xPQDAnFHXN8xAG",
  "key20": "3d4V9ek8jWKBBqcK5n9EScqFnPDpMgjcryni8DBHF1w9MUa2eSJDPJmUynjA6jzVt5bDjHQcNa7d9yEKxuGmhpoP",
  "key21": "4HeCAtS8CYBnXYEi8qHubp2ayWkhZDCSoik9yCJrkXSsGoxQNFjV139xdtcfB8X2cTBdNAXPvatAcCXubduUygum",
  "key22": "5pYo8QFn9zaaMukRr7gj5ZBXzrNhy4tTdXrFhU7RLkYWNK5E9aKXv7is9vANms9CXFQrsum9ZczM8nJKZoxpZ8QM",
  "key23": "v7DfcQMjA51BmZGs2H9FSB8AQ2mzNSzmbgRUW1spdUzM5fNR3YTm4X1x4URLNKDWevgCry7fQ6o1mZpYgz1oNhN",
  "key24": "4X45bnTkakEN59Je2BbZzxm9BA4PA1PcoxfQ2qnND1Aay6WYX5mvLwCRxvPJg4636KTowigohvepwRhszKCKp5Uj",
  "key25": "DM9bi31jvetRFPRfXKSSnTXNwKV6QKQTiQGoJ7Rx1oeAE7CCAisrTjso8w6Pe6c5visquWCAgjBT2NCeKpma8PZ",
  "key26": "2aygjEaZnFQfnUauUECZCt1icXHgTfoaJSmy4fDm1Ko9FvBf4GKkYT6xTSPuhCWf3Vs45Fb5KxTFr134UwL16At2",
  "key27": "3C9WHK5EQA5BcBpK5AFU1JJ4s9jEBkeo4sA2AbPeNgd7EyuTWSZUGQDk7rPgw2uUt7rNNzbRjNY6puyerFcaZq83",
  "key28": "QSBytzf6gzGXLRYgFLHA4qsS1amJ6u1RRmy3Dc6BfbwSy1p5U8z5NJX8Yi3acp65wV4ifYwogikPszcDav1Mcpw",
  "key29": "5uXSr1qKsgbMZdfZFuoR88vAh2aLfwejtjvA4p8ebjZ1bu1UyHsLQmHKkrmn1dkxoxmcnZGd73aWeU2t2WvRvC97",
  "key30": "7FwqPHWsZfcyLsuNLy4hG78aEcyT5NyXF5m8ia5SqMSGCKU1hxRqNjgFHTXzEy58sk2XDVKDcqEnNGcLFfknfy4",
  "key31": "3keaysa12dt62S3Kz1yVxjVxYJ77TEpjc4eD6REHpgyXZyskWzrWbzASyyDoMh846NETC3EWpeDPkJSSg7aUZ4BR",
  "key32": "42Qd1itgkdCiHLJWwagM1vofzqHQnbcH3BDS48nAJUk2xpj9yV1dbrpK8iNxzCXA6u23NzRKMvSCneNEZ4Yxg5Ak",
  "key33": "3Qn6vr3J2rcBZ6aRdNHiUVzPhrgs7U6f7aXECJrWLc8AZrFhEZhNdPF6J6uyysV2einH3GXQbZMFy5owSEzX1xS2",
  "key34": "4AGGR8QYxPTi4cXUWzeL4aKaaT6yzuV4uLTdxwBRx9Lij5cqxCF3CgE3HqJiA2HDDeko9PKhBgodErGqPT2rg5S",
  "key35": "5Ly9EAcgYkxVdfPxTUFFCWHNV5VGr6m7qswzSdxox2WienzyhM4tgdCku6fA8nACDuVCXD6NcJHBnUvmadJ7iecu",
  "key36": "3oYoXiKx8yQD8BaCYPLRJcokrZPCoe9r5KjM4bC8nySD7AwcornamwfJ8vPKiFA4vRJJYViL8HrenQg9sgwSrBUm",
  "key37": "4fZfF7tQpGwjDDgWPJ5yBhYjW5QKRN3sauZQrtd6muKn9FSFY9wJNJgGJqxwqrbZjjpTJdyHPhDp9JqwuBpThxTs",
  "key38": "482oSRyPtraW46s9pe4PgyyiQyEMuUYcCH9NukYFvRFtvoWfdrxyfXprLRMUPkHcCbPF5eNbe1Cp7pUQ9CoSRCHw",
  "key39": "4QizpyQ138GSgiv46G7opRtvHfUANfGNm5DSKviFTwELEBMYJZVMKER8V4PqqGkHv6jfmFdyjNjgmVMyPcdotL4f",
  "key40": "Vcqc1otpEig4FsbtTdhkfzzyCrTF9AEXw3XV2BcPNhe8TvnnRtaubGqJ489JRx2hUKRXScbn2Gw7f1MSnY7ecuh",
  "key41": "2V3V4Q4tz6zjf7cGn53b3xynrhAi9DPaBqemFKuswjXSy5WfQFK7ttk6DxtfGioXb3R1QfFXPdittmJdXsZPvEMn",
  "key42": "5EcmTLBeNHKGwFBt7dLN8DvpnvKyUtwnQHruZutUxLcwoU1fDVPSqtMf7Vj3zYfQiGwEoo7D6uSB4bhK8gCU5veY",
  "key43": "2jcfcfy4UwD25SFznhC5DSnaF2oiav9tpigEqCWAYoULZ6oPV7ef8Jpwx6yNMjivkUHkKcZgxDiRp7QNqNba8UQK",
  "key44": "2WJm895Dm8ZLZ77BCkJbWeFVkUW4aNpMsqmYTNzchLLJTJMxL6rzLYv2SjvUbRLvMZsMfhjM4cg1bTVVNkJU8HrH",
  "key45": "5gWMABGkSK8qJed7sirM9t6ic2HWgJB2scft5XvDKoY1dz6G1qPrwjTvDwt1XNtxHyTqk5EpaE23wrfz7ytpHwdU",
  "key46": "3ccsgFhy6uzd89Z58yBgo4me7kPKF5kHauMdvP3Y7jQu2H7XZg7VgxYKLhgdYkWh4hBcFbgT2AausnZwhiRcm5Ec",
  "key47": "2HFXc7qxwBi5g4bvzsJL4LCizHPLXj9gkjjqa5PiUsZVJD8u3hbMqUfNUmnsRWA66C7Q27bQ5142ipmg5TPaFunD",
  "key48": "5YmKMMmLRSiKnmimW6jZesZhdGD2x6qgWtGh5D3ranqfZaGJQLRRREe1aosqEqXRqECrXCCympfiEAPczg6K9E12"
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
