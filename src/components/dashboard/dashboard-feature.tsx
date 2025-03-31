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
    "2tyHHcA8aFbikJgkLxCHdQ9T86f7qGc7TZPLcYdr8ao8MgGrKA5u6a6fyJn8AJNPKYizWTwcTGqFrfoAekWHPp65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JUjvDP2k8uR9cBit4T9WqYB5XpA292JqiteBksbk6nqq1ho4hJsYHRoC5X2vDZmX7HopdYk14BUxv16zbzCnPfn",
  "key1": "4eo5dpRLssugeFwvuBWbQSJ5fDjDYY9JxBtPfXBAqjZcTj99L2Z6VtTUCjkaz68Fgui6tvZdVX79Cp5x2guhmfVH",
  "key2": "2s5S6ELfwVJW6UHob5jeJjUDsLU421Lf5W5rx8kkbMKzdFQEwM11oLbGViWSomV66pyQK23WHqsNA6TvpjGinAJ3",
  "key3": "4A86ZXKkXq3LB6CbyCvPU1HgwPCfBjbaaAWW2YVkPNyn3uKnk59BMnEa2WzqmX8v8LxeogRmwtjkDndMhxpX328n",
  "key4": "2yuxB7ks9MggDkG2DtK7E4S5WsNHSjJWUxR5ZzQPGPeiX9Vza1MqakkKzRoNKP1kDXdkLyf65mZhKKM9KcyYMhWh",
  "key5": "kQFH9nGwJzbjBsmVHg93d6CUVFqxCEjqE2inmhTWuzTsfxqySwzbvj6Rx6JEmgp3RcKvxcfNQKigu5MAVBSxKnt",
  "key6": "39LpwGoKw97N3hXzEjy65RWQN3XSdXAhsbE8fn3gAME4xuUa5qr4CGBmmQWotKyGv3AY3goUVszr2gZ7p1cGUkEM",
  "key7": "5EeZzWMSzyQ5bZcNUcmPZDuDjNTcix2dtG6PyotGkQgUgewU98mEQmT5ZGdbgCJroQ15Vpt2HMXA3CZe1ZCPjoeQ",
  "key8": "3BgJSkpD49p6Xqh9wcHiKVovjBVSFRjVAeXGwXs4TBDiKqJL8Rj299CExpZk5WJZ54hJcEzqefABokx2ocygt6dA",
  "key9": "62w8bxd6s6HWxcCW51aMMc7Jmf4D1u3G1uaBmcagTTnKp2zbFsTLqsh8u4SJFjVAny7wMKovxE897MSQUsLJih8B",
  "key10": "LXurYR5B9hgGum7UBkMU1sXJD7UYV25YaDpd8N53KVfXnY3v9Z9roakQQgxUFix5pv2f7EPxESmNTiQGdrWDr8Y",
  "key11": "BUd2uYdbKBTdYmzLjNt4SV3orkLu6Dyr6C8zDjcEghjbfh47LsHayndiJ5onknpnv38U7Fr6f71GVGfUEzCBjC6",
  "key12": "3zXrwHLD4x7aUE3LcNGSh1RpxpCTqVWFhwDkpYcWiKe5xYrMZGMsgq3QVx6kJsVFfUhJRw4uKUML9621YwaG767r",
  "key13": "eJ4Urf4bvubQaKf8pVZTXWnDn5r1SQM7gyz4ZK35ZwMFjLsB76LF8rqeyS9z1jMQvjTTXGS83fU6d4u9VPhHdt2",
  "key14": "2DAjYdNEx3pNEoThLttt5mSE6mF5TwjNhbKARbMoAg4YiEs9MU8FSfyC9UPW8nV4W7dzFHRvW3SwJevuS8LsDrYf",
  "key15": "61Nn6E7rf65u7qWudKvstUE9uafsW6kN22v1fFZ7CHt8mRRMKSsFmkWs1vJhYX95aBrgTG71zm8b51CdpDuG1ujZ",
  "key16": "59Z4afHWweicZ65qfVSa4xjyk4354d2gidXYQ5hS14MoWEkbUTmvooAYDqFsuSwAwcE8HfEqT2XoL9yEaNcMHgg7",
  "key17": "jeodFQFNYVtnqvtj4me7NHi1kEQfUBX5wuCHwPzG9HkQ1Lf56v7vMqRKzWwQZrqVk5aUPM3ArQRDYku1tUw8wyM",
  "key18": "3VV62c8csG2cAnAccJSNqiPGrCWCRMLN8g3xWZvoTEf6SVYWkgEXJ9hBtjV6KV9YMpWwDv1NL8Jmnguy9c98a1Wp",
  "key19": "41CEgCSeLKosJHBC2dpLMka8X7SRcEjmgcJvA5wgQVTag77RaueGK9j6XHbWk2UkmQygwp3imhchigEP6gasqhiM",
  "key20": "4SciDvrnYyCzge1jgTYrX5M8iNd6QK6Xn71pF22WyuRYn5a3nHWy5hnruH1X3yTDjV6u8CP6prjMABknJGSjAaUa",
  "key21": "2684ppUB5TUn1jottGuRzyy6Y22GYgzzDrjYUZTetuGFiKXupowitjHfoaLGvNG99B6pQs96ZK3pkKev9oBozBh7",
  "key22": "29UTYsG2xKYdfm3xxbZGWURQCc2k4JLL87vvFc2mvXNYR9soJavphEdoGPLM7N5EHUWtQFEhonewVWVvGWVsqXsX",
  "key23": "DgdvsCDBDEFvWqZJNM2obqTXinj2JiRAvBVN6Lrv5e9Dft4Cp6de7vAhWtJ5HnAr8a7W9VgVYcQeYtV8c63adcW",
  "key24": "4tx34USvn9vVLDfCL4eBZfQBSBKLe8FWZb6W1JpLy2yMffPDAuXo42tKKeQcubLi3RCrj8ipTrZ5AQYZmnbxiTMv",
  "key25": "2puLBDVBcGBhZ3JqXVJsc2HWDSMiVYTgXnXSwREFoD4h4aNwLAkB7sc8kzXz3oRdBUNMPT7ieLTVBSCjUm1gnJYM",
  "key26": "4WREVE2s8wWi9TfMUp9V6QdjmghxFHVEfknUMxg864vALaMxVFh5t16m2t654EDznZGWNYsQP4p9meMzQdUxu1rB",
  "key27": "5cDAZpaAvsaPX5vHazD16mEjWjrABVeQa4kjhsFxsbyWgPvhLXKHeTEhWPCTuys1ZHQQQHcUVft1KK828ScsPF3W",
  "key28": "5Ykhns1zoHGC4U4UaPuuSE1VvDGFxmdZQ7hvEJr9SpaZPYqQ9g4EkMz39fqnHuYifFFWgPk2t1nQzZ6hFTijx1H3",
  "key29": "jqc83suYd7B7r24j2ENH7qM2WFk65cq9FTgdxQzEtSK87hnQkmz8AHmwoYK4egAckiTnbih7Lgax1pH9doPp4P5",
  "key30": "2HqKgJU5Qe7DB3ZmaTpJEHXwte9V7pSAwKsodGNmQShH7xZeZUidaWJNYocWof7jMXGut645xsXvQsPbA4DKUc8S",
  "key31": "wekgS5zn8EcfiM3JUc2B3D9oPhv43Nh259jLigxWhLEitUazCCCAAikDAFwn5p8QNX8FLMJs2tHXTFrsNDYczcM",
  "key32": "z8d98ApfzMB6FSXMN7MCTymcGMYj4n87WprrUXFBZVniGUbhfGQH8mJ6mtY8t8ryAgRzhdTTcTYQaKYRwjGoocm",
  "key33": "G7LDGxQgk4CrCQwm7PoxXaWQ29oG6SByhsVgiurukk7Z26qBkxo7YzGZ1Sq3TmThZBcorQJ43JYe44Z4Ygi8oti",
  "key34": "5wgTtfPnrGoYM5VJioU872wh4NxrtAJd9Xsvynccb6jqQnxnw6xUodq4iEJz9j2ysgfKJgbEbskB58nE5gUQAM9U",
  "key35": "5V77hr8wtocAiirRh7y7XCVsKNX8dYsJoSDd49vzMnWQ7BZxpaeZMhvTXmdEj1aHxewHpP5ALVdwujFEsCjA5d2G",
  "key36": "5FWdtFVUeK1QnQxTE1dYrE95YmmL2otgZ6JWF1dNwV49dKtg73nxAEQZRQTX5uqWAZwt6L2B6Ft6cyQLVmNNX3hi",
  "key37": "582Y2RnacvNDPTxgzSAJ7qhAZ98mzmSSkL63LdhQLtMnCq5GvBHzK1a7YHnAkmAGhEtRedc4VY1MbZKVadwfeJ3",
  "key38": "3qh3PoJRU2xDkvduYYu9DnufMkCDUZ9JJMKmPWw2XygxYoM6Dh4h9qz6FLaQ5gu2pWKdK1Sji9yWJdKMj85Vo8jK",
  "key39": "4HRvfES8V6Eb5PN7RVPD4r1CthsuABnMbG7wJ6DkjC6vWTjuAPUFeTNjcKEXnizRaSfKEBLCykZ14D5x6MV66kKq",
  "key40": "s9A1oKcQpRYKfuQoPi8YeHnuyqDuQAjrtQ1rpEHBn6hrWbKRignZksEB2FXTFnvmmi3Ux48F5gdHihCLHEVFS91",
  "key41": "3Eq9NKGGh5nRdDtqQBcntyc7pVZvaii1gA8XdWcV4Na12PFnyd58TXxTRUVnELr8w4nR2M3ZcdaTsLJQKdW3tfK7",
  "key42": "3MqxRnqQu67rHz2HPH5HTwYUi2CMQv1SmfF5oUvSsP14imj5AxCLLxjXFxG6T3bhaMusaSUYbCrUUWTvmsAt7prN",
  "key43": "2hg6wirbgQb1AVuwHzgnBatzjdEJ5HE3JRKw6767mcxTFLoh9c6TQjEE1Gu1WhLZvAoLayPDCupQWBDrUqU3mtBf"
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
