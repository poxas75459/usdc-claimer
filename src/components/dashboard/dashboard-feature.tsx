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
    "2jYQVzVCEXsoRfzBL4b4qGb6cr3k8RTGzZtFCHG3GEXHHWjhkHrsgnx8xdY4G9JnZ1PqNDu8uTPN32fzoVyuLyET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kDEn4L3B68g5w48eZ8SBFKwmCzgLcZgADA49eyXMtb2pwZczziEHo9HukShZvCFh7KePdpBQ9ysYBJpmShE1Ykj",
  "key1": "4mvqTJxbpGYBD5bDe9TJK4QEhSvuKhiD1LHTKLh5MsFNTK9z6jGtNJsnGWZDxRZpuTh2X5B289cp39B4qmPUMKBz",
  "key2": "5iJHyZMpjF7fQvjak8LRtH6AMwRMHQRRt5AxeijJsYVA7J9qKYxJyhyCbmWtWCL7r1fXQQCEVmjxvmyPyfsReWtG",
  "key3": "4Z6v5Vxz7AWbMUpY6Q9g8LKqemmVkYb4ykJLGdBAB8FHujc8d6pLEoavtNxkKvd4EmApaeNMoKBN745dy91f3Hz6",
  "key4": "5NpL8vJpRZxF8kD55RAnEvRSa5VNV31cTrSWY3o72jaqu9HKmw6HSPwcTeW3sCRnEyyfWwT8VW4sBNWRE2BVXh4A",
  "key5": "2zKVLTe9wotuHAYAmAqwHpfT1fEjSbZ3J7dKpxy5qEJp6cGXivGBgjs5Hosirf5NZKqpWCMGNGzVZ8GSrBXETHJZ",
  "key6": "5WS6YMUS6Mjm1VCDSDwrbWpvopcoLDdRPCFH43MSk9nYy97SSGL4RrwCFAyzUVG1xjELcpzkdQJvvcKgpGMHFKHq",
  "key7": "3xFM9LQAFC8um4rWJakhCxGcAAxCU9h2TzjXPPhVKTyLPHZz7RkcKB6Gb7XLZLqaMttKMoJ5FTM7cJz2AWmcFDJi",
  "key8": "55UpbriiQBXg19GAgDgvkqWN1SDH6dgpPMGEuu5VY8DJ9kHxepKKhSqRTjqcL8vCrQGsMsHc68Z4qVZctYFxwpDb",
  "key9": "5PMMpC774VnJxjZCK1L7d5mCHFn7MD5p7Eh2z5NuBfYg5SK9GVencDXuud8rjBLBUTA3znQHchCaiDn1aubnySRg",
  "key10": "4RP3YsoZYTXMLpn65r1pMzKtihv3dnbQVYZ2pLpnSjYBYfm8wFNYryetAyEQz5F7e1xPtA7cmriunD7ixmdvA7kN",
  "key11": "3RDzCvsEA4D52RRpg4UnQfLmcaN1SaGHKcDvVYG4M9gbcyoyi9nTzag1deuJzq98yCqp6Jixwtu5QHQjzAk8xxbj",
  "key12": "4A1LBFBtCV2epF6W2kUmL8xZrj7XaU26Tc5BvKXtZh4wNxaw5dGe54MPVsPxEE7hJDQBhY3h1VxsUm5Lv5d7mFUe",
  "key13": "46FwdvVsAkAZ8TtJYASChhcWy7q2Hivbyk9ZVgyoCYaCJD9UM4ed5zXaKVPNx4vE4pp2z95yGjprZ485GSm72ssC",
  "key14": "8ccQs8LMN2dDYUE4YefyXSUgy6gtGuPPLD9tNw7Dr73ztBeX6fzncB33k5cmp8M2UkaXBcNWveEXt6CSoUm43VR",
  "key15": "xD8h1FWH24pcNkbhDWGwVrEv8Nc29CshzUyQYBS8zb1sGdR1AbjtPPwQcYxdmJ6ZWfKpGY3fTPwVDYL6eBjMm74",
  "key16": "T9GBiMRqgS6Log9jRVdi3ooMwLRmD5n7JBm4r8k2ekau3KRNXxpa4f6sFreEX8iiAa4ZyGBuHuTpbiUSuykkhg9",
  "key17": "5WsSi6MF3xj7aMLsExsBLhQwFjdkd8WEyRcYeuRFxY87wAf82uXf6Bj7CofKXTRUu2j9f2EKsZQPXqNNAYnHeBdP",
  "key18": "4zSQvR76FZhNn6oDF7BCaLq9vw7cq43NDMHMGSugauotqWcoizaGxh9EWvw2yEf2uK1a6ZivaikXRUzUdBQPgSMB",
  "key19": "2vu3W6tdNHeipGAs5gx9v7KRUAXKKdWh6x8g38sTJc8FJLdfJGTjVr4358DKrj6BcSKv78eASan7GoiaAy2r3H3x",
  "key20": "2hQvXVyTHBA1gohYBeQAFFCRHKwpqHYMwWa4nAswuQMuAmM8zdAWJTho2vWNuwhXmLbPh9CBVPtX1eVE1kr2FfgC",
  "key21": "67hoihYYXZrsNwcTAeFWkQhnaUP7pqYNDhb1HXU6U9VnxPfrFbMwLMSfSfK7KPdrYQpGieqhUV4FEkoLBG19werG",
  "key22": "cT2THzchsE3CEVi75h9Ps2FzFR9roc6Pnk1PX948B96heVAtSZMu8wqKJa2ddEHMBHXRDi3VxReBDSWMN7GjZkp",
  "key23": "5orbvn5hPeuegkxZUuA5SPALsyvBYQHzZW6PV5puJLATmYW31bVqTJfQmGAdcse19YiMQCj5EBAT1iHGyXkXCKwX",
  "key24": "3QZzxtCBR3nV6AgzGEsnkuqqfFbNNWaoF2ETdfyBtFC5AdWKYGzUP3xDNjpBV58VJvLtbaAuV6KtjPLeJMkz2sjk"
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
