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
    "5BRyRCcVHighG6QyX4bisgynZ9h1okWbpJdzuwwXB4PyBxByk11WXdPcEDrZDqxjzJUfyXEd1wavMrp1HsMHe5Rx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m459wLFEuRuJBmZJ9oPUdYAzDxY6dV5SqwaQpWZ2p9ndxXPTs9vmQsnfknsdw1N4tZmCNnRWfPwUPAvqR3o5sGm",
  "key1": "4SisYwt3TEQJ22vnubmvj9vehBxvn3Uso6S8ADwP2CKy1LxMSWh734khoq79RGGtB8gB8m42jXaSEqmQHxjCvpNh",
  "key2": "TTZ6RYgNqypiTtwuhngXnRoi6vj4o9z3ZLM7NhognXrmxpqeJgd5iWYcsnVk3MtAKFZFff228p6iK6vMdqsSkAN",
  "key3": "5SvwJC1vN5TDc3Gixde1y7Do4dcLEZWTppq2x1YbBnW79xLHFjGQamzmJ5ZpqLkMN7qUBqaz51N5QoSDft9JdgEx",
  "key4": "5j5Rw61SgvRNmVhAY3wAvm13KWrSxaUsbiCBvWVH199FEh2E44otLAmDjQ94YVxCH8VaLpLcN2YMRNtoWtBJimZz",
  "key5": "5EwADc6nnquhphB4Zez2Re9S4UyPddogLV1Fd2CfGLbMiA7RCpvnJr47G8uqRjwbkgEG5vXzYc2uXUXiPx8SFWmw",
  "key6": "5qjSzgnBYkgG8Rkcj1jjL8dWBxEdePLugWmJxp1pnueBVmbzGopZnEcz3HZAz9dH2vVXBs6Kc2UHXehzGR5YtUVL",
  "key7": "5NnaZ5FP5q9qaZqfAnZizx9qWvDowRMemenXVquJJFEv5ovuLF5SE4FgM17FDeKih3WVWXYLZq8Q1s1EmRyzTx6A",
  "key8": "59cs4SkPbHvpufWjwocBt6a7yHmQiN8CkWCXCbjcadcWn3XbfJ3T3snSdCSNn4YPrntthjiSVsqzx27wbJvViyjf",
  "key9": "4pvjMQzGt7pc4TQAce8Cwvd46Ghx9RMxg43y2eREbDj6qrr78HdC7fHCz54BziGnqJNNqnyGchzpaQydStizN8Zc",
  "key10": "4hUg69GyyavB4KAmmAWKbNm5XbWsm4zhXyRCkxgLAeNB2zV318e3vjvZS8GKJcVUi8aHR2xfcqJPBKVyENUNTD9o",
  "key11": "4fTvaYgYhWYCH92d22SY5GMWazm6UoLREhhBbuYsnLxk7r8GNed3qyoJDP7BBEc4r9LeqNN3PKyAaqdjUasCpNJj",
  "key12": "5jS3d5gWFhJFARuXqbHF6sW6uecrXRyEpinAEjr7CPBZ3jiRK7n3BHSqhzSWKNccCieNyT5t3Sn8wpJS5RpvuZof",
  "key13": "4ZS7g8nVbQ6iHyCXEnT5REjMpZ4hCgCxCg37WBDYihT3JMRnh2LgK6PbftzVyg6KyXAFqipuSqPHqurdB6qzYtJw",
  "key14": "2MGbS4c6u1PwpiiX3vbsmHXjWhYXPfpA34ysqKb1kBGLbvhYkzJgEoTV8Wj3oQex5KtY3ko7bLxX4oGegn6CLio7",
  "key15": "2SmPKxQSTtSm6amcmej1aqaLfdwgVtCYRYBT8Wn9ZB2GieYPPEV6upogjkuCzEjWHvbEvWvJSzhPVDj7HorPF4y6",
  "key16": "63s9PfFadGE2B7m8usMM3qFA8PZuU73AsZHt15D4sWcZNRsXvnQFEx71uHCq7rm7pnZk3u28bU847mGHPEJcmqjc",
  "key17": "7sWUW1nV4mfrNgaCkL3GJN5cwkkKUXtSU2B2Ctd3REYYzgj5AHdCZTs2Svp2R4QpJ1BouUzwVXi4chvX18Mz3kw",
  "key18": "5MVFphneL4Pk3L6ZogNftXx5vrBdpxuWvfUzXoiTY7SbymE3t2a12rD966j8hMkUzFtHAVy637oyX11SiUPK6cqD",
  "key19": "3AxUdNsP85UjxRVo8CHKdFZGiNnSoSztgy4znNG4wrSLKJNdFrSN5WGw8oSUQpbqe7an37ozvrtYPxYikUPR1yWe",
  "key20": "2mRXxsnPvUYnnwv5oSyuW6gaYUADWSAFJGyyb1e5kbxtK6VBCUE9pKBtpkBUzBDz3X8uChxP2eBvkSJkutSWR9N4",
  "key21": "2fKxP6RDhEX64WTUsWoSGvuwDZXyMfbcjpvwsvDuXmQP18TKdxwCFiMQUJnWhzzHREbMuZsY2QPoe9H82QzzNSDL",
  "key22": "2XcFCRQ2tgny3g4kEUFYDrKtuYJzzyfTF9rUG4Cb5XjWX2SW3AAhHY5qg9G3VtSTbkJgG4LXi5ebhiNdwmfbMZGL",
  "key23": "4HHh1rxg6rz5GMcMJSW6sNLf33zyGpdQeLrfYoGfYsbMKhXMu2wC4NK8BGWiP1vzMiABUovcV2B75Ygo9xrLViAr",
  "key24": "hnNgMNTfaDAbwyhDMbNfkarAPFRHa855UW3ue76rVaHdUEK71EbYLa1BqVV3jXgiRods9XZJDVjZga3rJ63LAJ5"
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
