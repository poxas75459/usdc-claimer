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
    "xedYphsHprARpuZkKfbKUY6Zt35XpYGNiG9arXaGyTKbDZJVd7uVnixo8N64mKWB78pf6PrwbUsvujYLeCEU53m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DcRoCo997XAxxtokSmFhz8jdKk1JdNkHhGtBPBk6EwZLC1Q5VUdxorq6L7bK1pSzNgWeRSCEHUptJdkvb2zU8AM",
  "key1": "2GTUsXrQGhasBWLx2ni8b68H3LG5iQFuoDnT6iFHKPS8ioZUWbE5g3a8QiuMg8iVSN44B8uaeJkspqWtG94iP8Ky",
  "key2": "1DZAZ7c5R2DWtLdisENjmRY1CAMUCQBgUCVVgRPhn7t4gZG6XnuZqMsRbR3jHeBaGEnKvtKbL6fnh6wL9Ds4wHY",
  "key3": "24XTZDvqGhuijxQ53gyrrQDgeay3PBStsgetBnGA7jsebHs2wsJNsQc7nxHCS6d4h2cQtAaoXhBj7aXHKQHMSYSL",
  "key4": "bwhe5AHquQK3dRwdcMtsGzxQpkuUmA4UPHVViF6PLyJQWCGe8PUcfH5i4p1xHi8zaH3cxDZW5SbLx1mzzqBKHFU",
  "key5": "2mA5xK7WKBrucSpQUweC7kpkaDKq1Br29QXdmFWBHEaTpMwQmnUJK5e1n6UL9EQ33BHzZzzgexnfyfV4jLCR4STc",
  "key6": "86RH2aUaVsAzpgaFHo4hUApqX4Q8diFrNqvoyaqD72BNuETRgJuvPsMcunSJcLQ7fPvFJx2wcFBfhFJ1EfHhw3o",
  "key7": "5LauawJuSsNBH7bJN53ebo7K7HhsrrUUtRkVHtCBZngt4Ggoh9CpDawUaSFSGhVRrqvwMJxgBkfbbiEbUJTCZXvb",
  "key8": "3SGk9JNvwA3B9FPbL3AJWpnmk1r5zLLYDr1LM2wy9HtyaSsg86v1suyg3WrGieXYKuhBisAu1DmCSXg6GKpmxxB8",
  "key9": "2dbJvTifc9QHdQ5anRe4u8kWqGm6vT8rEpZy1HhE4WP7GFWW8184Y3yYpKqFJo3uv5fZgPThf9Zjfcpa9613Ey3E",
  "key10": "3ekCxpWtWUEfkq1a46AdzyS1Nko8YmQQq3fB2A3EZMjN5ZjRcUz8YkTHn9c93keQmYQtP5dN38Whd2aPNNHBs4io",
  "key11": "65cJKNjPMUTkS26DWSXdoNfXoQ6hrT7yM2ZbiucJojPNuGq3UVBYZGUnEEQ8Vu4CQ1c6z1ALDWYtjfNv3bYaK4ZQ",
  "key12": "sEQY8syyqPG1KF1kWBakVqq5z3SQB6Xa8Qt4o7mTYPdy6Gw148V4n94gbZDopQqEHL5zJGQua58yAHdPWjfzX6T",
  "key13": "x67DSKcVeKKzMdxkRG9dfrbYC3NRGr7LkHjz4rAfG9Yip5PZHmPjt7Xk8gur35CE585GZzxkrXMpZf67h6aPC1Y",
  "key14": "2q4VwTciiGFKJQ77vTSerSJNH1zmteV2jGjAbW45oWPfh5672N38nZGZYPa3J5rEPG2mBVAdpEQ4H6bzN5Aq5mhW",
  "key15": "WD52X5k858NANTKh45X3v1wBnQdQ6RGzcMjm1Tqwk9kRLXtSKxQmVnf1wWXVn2hjNFfEMqzmW82B6pYZikUJH67",
  "key16": "k5qyaJUsoEXEGgkaQ3ARJG3ZmkTq3jgNzySZPtVM6k8FYYtSqeuMB8yBQPYuWBke5YkzygphUj57oBDgwqdRsh1",
  "key17": "4UTQkgo2jfykJHig1K23Eumeo5o55oqBxjF489mTFpyoe3ufG2FncF63Wakaq5HroMh7pwUHDwKbpzRQ18rMWygt",
  "key18": "5yf7Js5qDywSh4dqBGXWEbGUkJvX9PdmrSz5bcJ618XN6edmYtJGr4BhfPeDpzKAeCxna88XJjWzKwkkKNM7yo79",
  "key19": "5ApAZRktRB9WZUmBWJAnvkPqEf69N54m2KFwvMKe93kMtDivHUV45xHzoo8Rgr84ttTfy8phg1da5NLjyvF7CfLx",
  "key20": "5DML7wCUiZW28agcGq73sBZP1i3kc2PrWAn2AKXy1wLRK4EbQcLN12PymfZk93V1nzBYCHttwxfHa43xTxk4YFRh",
  "key21": "5uxEFPWmLzQ9shne1L7ft6WuDj8bE7UBvve4ND5grpJmNGNH2KPztwEYvvRCyaM6vuPV6u4cGDvSGvUCiLqVtJpz",
  "key22": "R2U4aC9gnyUKmJNB3K3nzJ97HzN6VoKDFTecwEV443kapAsW31g5KMYBYgCsrdBrSTf3bcisCUbpTfF9B1MWfwS",
  "key23": "5e3wj5RuJUPza52bJzNkBgFkUxxCYGzsXMM1ztmPP4jQj1Yi9eYuMLqfD7fX9HuonhcqBbeDzTS6s8fkhWeJLDQY",
  "key24": "3hcB6A7mzp7jKsRahnWMKxvdjTJEVCFbzWnGQeEq9qVGrhnY82HHbavDZAR1PfqgmcHVbSHWWq5njaLf72WSNGpQ",
  "key25": "59tsQUXzbiAX1KpPzEa3nPmJuUpjnNbpLZKdWKMs5HRyFXeeuDrm69jhWa8sdXx2ncy8Rpqq2Ek8U97ZMm3sPgmx",
  "key26": "4Ti3KduuZLydnUqrDhsAbcMpuDGsGoxggX1k8uXo6C9RfZAverSvAEV5jnXsdwtVpR7afmBrwM871eG8Uc8ZKKVD",
  "key27": "4wmHDkyDxks1YaFd7TooRjfoepb12UHPVFxa6L5SsrXqUQrnzZjw3iSBAiSikjsB1GZ9TDxd1wpBxtafuVjaDxCH"
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
