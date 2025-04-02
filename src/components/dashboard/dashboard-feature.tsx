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
    "2HxaHuXNy6JkjwsnwxdS26pJw2H22U3kppupcJzuX8m6EkywRFcMfSDVbVSZ3XnHaW6DAcZk7p97uPHSYKFWo6cR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G1dhBD22onSCFWrqKaSELf6psJW9rToDZbyVFuYznWpG4CmQcUK9wGqWQqrUJ79ZxiLishrjiVjKckCcbgQN9pm",
  "key1": "5u1KnAtS6EAshR6qgiGHsSvcn6vXgkhw1mzSJC1B6df2sBScPf5NgKhN4oHJrLNrgdn8Wu3Ki3AhSerUdRz2amq5",
  "key2": "CJgykhRr2KBJ3MUmgoaaziBmFBDRhpF3MYuLnaTDvY8vLSGw8EpS8HUTmmXa4uAnVH1LLw9xxx4udWzmoXQfgpL",
  "key3": "2xXwGSMLuLacdiQTozAWS7QhnWaXMZnjC84rhHhicguPrE35zDfvSsdhpmuEUWcZ2jVVes3qAzwwYaBiqpQaz3zb",
  "key4": "2Z8os4zKzeWWwy6vkXe2mBg8aK1VnbLezQ6s19JYWZq4Eh61rBdb89jDmjsYrTNDHhvJR3VBZGCVdmJxEtCj7Evk",
  "key5": "25UvXdJ1bvBNhG8u4KGGZqoyVUXDGfixxAyLfkHBrLMprDChr7uWiQCXtxj85vx5y5tctkzd1NX6JzuyDgtr2UFB",
  "key6": "vMyH6EpEhKktfNJYhgRquXzNybRBtf5NUmUwqRpwwqygSJDhSEfriHEZVnYUJEBD6wXvr9EZ1APNwDawiwCMNwV",
  "key7": "4r23qEG8hmstBHpbDiZhG5CT1fe8n9RwX4jPTJjLpscKXkMYPcYPGoMhymP6BJhStxvNYP9cStzhrtLPPFpQpigE",
  "key8": "5dSNfVzNP4w9BNehJBH8hEXupBteN28CzQ64yL3ybzoyY8Lb6d5ot3Lu7dWrxucSjBA9JwK3PxpQNpfrmiQkgAD5",
  "key9": "w7rhuS6g6QYSwkwj9tE4bz7kPig6kfdPaSRCAosEZgBy73oyRNyy78bBdQxXPCdRvDY5ff6tdkcde2W5tuMQPrn",
  "key10": "niYib6RacW8Fb3fRNLTjhxLsRqGSXFX7wcMzCwQxhRs91TK9Dg6E5AsVAJq5Xvzsdre2nd4ko7qEnsUX85d1MuB",
  "key11": "3NnsyUjfHPcvmrRL7DUHVbmcR4RMaeyUuWBHppnBBZ1yzpcAeaQM1RXjCrKBxwuFSrQB4XE519xsqC9QbtANsG5h",
  "key12": "3wLQpPeLo2peBr1aRKxAksnoZeeqhw7C58ekdyp42m5XsyQKHkTPfsD5fTPV9rax8jBsyJ3cKYLCDM71d9Rj2Dde",
  "key13": "4YWWLpTn6MwR7K3DkyASUnBgohx7wpYYF7363Avg24a3LMX6aStspd99cSdPvHkup4wTZXkSwbrq5UKgpVNPHx33",
  "key14": "2R3WvYi5m76dm6s8gHeSDLhGZ4yikoYY798dmAchx45CTWA4XqemwMh3tZnVdhKcRL7yqQ8b1xCtR15oUX9fRCHt",
  "key15": "3DySQgLWGqmgVWNXpPwF3HQqLvqeSEs772VQCiX9qewVoGKV5hurVWHc5RdDuGt9F7upmhRnZHmEG5fTNwVHdiAL",
  "key16": "3Qg5V46TXD9pqpZm15c3vW8RvxmEMEqjsUxBA4N2qwYoecpEsBVZZicsBeRSgiDjLAYGXmfgMHvW8xjVLNg3XVxP",
  "key17": "5m6JCfLCtJ2tQdBDqXSPH6YxLaahXkckD2zos7QAemyYmsEo9PM8QNYZ8pfeMQy3SAUWkxT8c89QJ3NAqsAGVDKS",
  "key18": "2EUaYK5EmEkh7htmqb4y4heE6K1MMRQNbmScEv6YazNfwDy7R6PonfUQXLnpByDqDdH8aciCEZ8QWXztwsyc8PpT",
  "key19": "2tBD7acCqdZoh5WjaxBHWYXBwpCyje6U6rRnnWZeX87uwQiL2LSjF5QgKCKvtuxmY3wQYwLSUjKM7AVj9mhtQgtg",
  "key20": "tS7LUHqj2HZgSZVK8THV9D3p1YmCZYRYP4AaS3iTqK6Ujtb5yu2FCCY9ufDmJvhnLZydq9yrf5ZEvijS7pmhhek",
  "key21": "4CnGyAMkafbD3CS8RZiEYFSArTjLKkveJvp74mx74na6YqivZiq9K4DuqJ1dEbkAin8DJErVi1e5ragELvynLvdC",
  "key22": "3uaFZjoqm2rtfh6DH4eZsxUUCDvxHkuxKU19uhWfXpcfnnz41YMFwuTZ19QHqoFakP9sPZeknXsbwLhBefQWJF2g",
  "key23": "3jD5F7dTqgqj6jjWGzZvGkzTE8dwesLDpsVthBUqNtnXhszXCYkBT7ejxH3TzfyeAbm53R2EpXewXSs6aoJPtMfH",
  "key24": "333M3oxkHPZ4WGNLTc9kfAHbz46nTHCRTUn64GaRrBSdGu8dGL9rYLhdZH4Y14fWPNu3rjMmhpfQuBRdFuzXFj2L",
  "key25": "3ZmwRSGQFGrVgDeQWsG8V1XR6awJKQ3Rr7UQxe2H4CSbU55d1m5L1cEkgVoLtJUe76GnagwkbwUUTE7UX3qUdih4",
  "key26": "4YQ2i9BDruvHh3Uy3yfTA8NBoq1rAh1mysu2HMe7bNxFqmRjFAYNiWuAL9dNZgZtEVEprErn5Gcb7KGYMuwy3AGq",
  "key27": "3621GS789k8D3yhBG5FRrWk8Y92TPbUpgB2B5dcWT6uGBNUAYQqmU3jPbuzZPBHWsQpdN5BTYYNUs5nkixzcFXL2",
  "key28": "26oVaS446EKyvTmDQSQYFD1U9rCpwYKX8RVaHwBtur9mZ8GTDh85ZrZnVgdYha4AB2uhs82CDEUfXML6RYg5z5ti"
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
