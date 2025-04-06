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
    "5vdPAkqgf5Y5iUqSXgU9WeLZdModZimGbeHrCuBGsSa77hibRjj2cpn4Zk5GyFb63EjQFCS5PH7oPMTXhSzMdWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "624gV2xcWpmbypWi7iQSmKvv964mG2pYqxkR2Nutxm5zFDKinjrGH9eEJv7CFDtieozP5zYQeYf4pnYafeb6n7H3",
  "key1": "5tBz36fgUAjnQhJw1QCaNH6WVkne77WidZn5RRUEKVYDbZ6WrRwSFCU2xG6gXDKCh3k58ZRGNpQypbjw1JPJ4Fxe",
  "key2": "3mJNvc3rHcETXAmuG4yUwdyBZ5yY2BpavnQqV8q6qMtb2Zq41UNEiZEhFPL7LFYf1E6oKquQ138sfAgRLtQkM6js",
  "key3": "5Gnd6gmh1bpJp9fWCxAQyeDJDueHav72zQqfX1kxtWut9MPjREmC4SqbQ3rrKhoKNne7n7T1M1RkifPWnEunsGYV",
  "key4": "5tDpTte7s5QjCCFdZFTXztz5EAT1rDHaDXmvxaHN1kDXUCmQm5YjSDXvCSvWd9v97QtJLGkqzNxot9QHjHZ7SQVo",
  "key5": "22aPZ2xqxAnRD1Czt7Lzynkt9Rku4iLenccJjPrM99RWZbPzPWKba5BwhHK2YayyrfSWjwzHkrQAgmV1vGBAR7G8",
  "key6": "2CDAUzj7gTAvPcFkA4Vwpwmp99MDs3MZ7cW1q146QyN9CAATzEGLSogRke1KwzwLqMzfgyuMjMfCnYehgVDLWwQx",
  "key7": "3tJCsFFjhH92nkpCb7jYHVpNFHFY4Dr3eKj4LQnGWnL2L4wtFSw1H5KMkSmgvXBpmR7Yxtvp4DeiMbaaAi81PH6z",
  "key8": "66HKdo9bcGcePxnVK7P7w6u7q2BzjtZKMPGzuneDsxh9soaYD1jGLTHkPFwTcM9cg67NkbgCtfJtUQmgbEbYnS79",
  "key9": "2NtTzwxPkQbBCzoawAuMaWmAgrdcFokZkxgp6XdLFbjfEAzNdWnRKeqNCihb7uSYjfFmumYuodeYtB3a1LU6KcWo",
  "key10": "5trE9BMfJGktZd8SMU9pg4A7AEs18USeEDDAjm8JVCkU1qstUUjKDWMY7Ue8dUuBx8NiNWvP9HzK22DwDhbrx9Yo",
  "key11": "23GbKFHSksvYDspM3H95U9k8ft6yiRNCg9kbsjFF9YXkdMHxXEwSYj944Ang3ATU4EATV75NesgBdyQeBxd8trmz",
  "key12": "rgaVbtDTMweyPANZC2yHFj6Hc8nDjnMgUmGAcSfhsrhiN11duC7bGk58Q7L8b7bX7S3aS6VK6mnzrYe6NMM8ZBX",
  "key13": "5zBLeTww1KuYtDAKscpZuxuTdd7XoSSgkQ1PzA3ZtoWwaCzgJks1TaUtKHeLmfU1cU8ZJvzxUp4nxGpr9U1wibNC",
  "key14": "54mjrURotC648h84eNksoZmh9TuJ53oEkVSicVFsUbcqjB6BVb6TZPkyWbbu7pfHzVHSBumha2hae5hXer8G26qG",
  "key15": "3UjnQnsCdTsQ1ksNtpHeGsqKD4pGj19nYsVcjE7etk92akPKdH6ECjnJQU6MjTkZZXugJiNsmMDe6j1cam654HA4",
  "key16": "CByicFoz2SSarseC3zeMQz2ySCeAdEv4hNZMsQLZCcHbH8StzKBZF5JMsSt1s8yjk9TTUjcy8sreGismVQi5awL",
  "key17": "5JfjGhHB5GvhMJy4HsP7cEbKoZSa95ZPSP713yZjBLzhMvwoETpLyVNVjPfJVr6m15b4ghiftGUgGDZPn5GMEnyR",
  "key18": "JgfnSCfheErPNokBh1gez3ksndZNmj7WYWDYQtjKHWyQvu6fzHGUr8UG9Kb7Auj5HmoZhyMMdz4HYc54qyWB1Py",
  "key19": "3g4D7b1TdYWYnUpa1tFT3nURLgVr6GAbTGuurxcCDz3RzZeYDtoehRrZmtf5b5Bc18yvTiMVtJFPiTvRt5Dn462j",
  "key20": "3VMnqLRL1N3Wvn2jL2eZAp71HaeF7fqsz4Qw8mRbZdy5BUvLTrBFDmXa59eCPVZcBFvRjVDFaw3yvaHPzW4P1NUS",
  "key21": "4RjnEFe94Ds5gzB89buCwGqvYB9n3PiYMBXtrS7GEE94Ughd6hpJaGXTJbQF7NXmjtQYZM4U24hCi8DSmvnHMPR4",
  "key22": "2g2VhCqSUCLyX9C3mHoYhZwMKQFsRLL5RiXJV8GY8FSWRjX4GsnRQjyKHGghQobVHL59wy5bjq1onwYp5jU6FrGd",
  "key23": "4vMUrnY7zvMfcw9XHK1bMWP7aKtURT69kc7JPHc1zAU7rdsv2NvARbyExMZCyk4ZLabtsg8qakUqUWbCrC8e6YF1",
  "key24": "3cBfyd8uhc6AQqBcP9wYCynXaC6v36poTYphKDxJAs5AUWejYr6jUZ4Dz91YTufzGnpkKnNVf8P4LuH6588iYmZS",
  "key25": "2ejUHaBnPvW1WQAy2xo1ZjN1m4Dbxc1BmqWfwQDwTx3YMkC27WtDJC2ZLfmLD1KUx1ayszstsPtsaAoGbkpwqt8j",
  "key26": "61Nq2U867hs4T8P8yxXwYwT2Bq1y5TVyx1EAtRsNqvQxRRwADv6iUeSjmkJ3zjjLdkdEZ7J61FJBhMHS6DV9xkYN",
  "key27": "4tNifWRuzwSZV6eT1s4yAoMQc3dPg9VY8acYCPU4hMf7AxhL71c6pH7ejKAhPrzwuVW5bc6vB2eArL5LvqUpqhko",
  "key28": "4o1oXT4miHK2QVR9YwRFXhYajfoRDaUqfaVN5LgygVATkuQu21kUFVcSwpkR4LYPteTg59SLNTxFr5i6U4THGtsN"
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
