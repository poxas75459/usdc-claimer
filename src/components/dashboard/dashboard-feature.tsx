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
    "2oFPC68tTtHuHTGUrSfeRFWnwR6faDoK9YrQmCeiLi6A1Q4Qjvdh7x2mPaZGvFmbXTwP6sUxt1QFzaraW67zHwx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pxj8kToZSEx6avx1gTmej9LFH1wyja6H8UZ6xv1DFkYUCSznw3wm83q9Vn5Y2gQZgUBiMjqwrr4wAp2EstMW9cj",
  "key1": "TcLWWo5faR6S9s6JmgMEiLGu1StrxQETGGB67fDEQFQh948C7nJ5vVw47izbLDVm6GiFYG9DSYNvkENVL4HY3Q8",
  "key2": "5vaoJf9wpWR3iPyof9amB1kr76bRsWPmJicrxEBDmn94koQXY9o3Z6z2ZnfPcNU3hRA1zisULnkkuEdye9ozeBHV",
  "key3": "3NGS7rBifYxzDaC9E9hJeMsuKaU6hXdg6U3RVnJ1CEBqi7HDJraMC918nvouNL4oT1422yGR27Y2WPDnh5TsGPRJ",
  "key4": "52xZzfXq1tYuNKbwuL42mfLKf3iVrsq6sVtnaep9MrPJqERTWn75LJhxaKuoaunKvuzVKrar7w2xF5dUvNFdyt6B",
  "key5": "sqZosjbvMLTsWXQpm98bvNL9pahVj3fzAFsrz4jYqSwqfrLat6s33mw3A4ouQBhjy8Ae8shErdC5F7p5vsizdec",
  "key6": "5w4SVwNN2LXKQDuidbHXvQVbY5TKqZ62qbAjuZRNXoc6p4bR7tbWYkcazMSnoXAg8EKhtYRof6U7j1kKeP2s3vn5",
  "key7": "53dV8gjJvyo8ties5XSfq5jxnzDu1C9V7DrFjWNgc4CnQLN9qeHveEkK7Efq3uSmDK1JvQLKTA32ky8ckA1qaFMn",
  "key8": "5dqRbbHu8Co9A7XSDgr6Tt1vVKSWQjrMAfDR8ujDt4UMoNKfMBrpFpaEgUqjN5So2RUkLMDnxVShTLz78ERwQmtv",
  "key9": "5omTRmw2NrCqvhPQHybjXFe4S3TpSFC5dMkzeRQtZansEa9BccV3pgJqc6aLetPM6HU6yjT4ZWPdiyhBJcNpnckw",
  "key10": "Uom9MukR6mMGdrN81dU25NuriLSz12k7YqamjHHXyKS43TrQ3F1mx7MCyZ9o1sSxpLoT7P2Jy5o2bZxz5hhHv5j",
  "key11": "2uzyM6YS2MTTExNpauWaBSEJdj6eupPvpDmedY47veuFbo2PCr7oz38ym5uxcBgC6oYfGSCCnHAbUN757rMFQVZE",
  "key12": "3vsu6vUeqrShG158SNTED1yUQTYKfC56HYkiKgaXz9YTmpMMqCGCk4nkHWPFK9TqnAPwo8Ek72cJyrzJWUQHers4",
  "key13": "5XDBmgQHBaCmpeWKq8qvmE2vH32tXfCtHpUtSPqK5S3Seac3sJViE9J396T7fbsXTjdMXUQW6vALdYc7FVdBYZQp",
  "key14": "5UZQZhJodbGHnBQyZfo7EVaAptVrBYAxraKuLu2tsJqBWVBuvZdpUubEVEYDbA6qpwxtte6LWqtH2J5FuftLdxF9",
  "key15": "2hMfFL6AWobhr3K92mxwSD4uiD6CEUPjBbuK8hTpUn7PAYkE45jD33YUd2EVf4zjBa4YNyA5rTqGzxPG4iXCPiLk",
  "key16": "31bKea77Ya7Mx9Lgrk5ECBXsDzSu3QJGbBiyaPb9KtLevwioiK2QkBmVASsGhPT6vJ66r4LKDZn1N4m7f12Gik4y",
  "key17": "4ncno7LAbBCgNhrp5SFRHAsN3ZqEUrtfbgFoxg7g41Gxg2mEQWRQ6vjZzXUTmS2Z6zht4fTZdVmvt93uunw4Yfur",
  "key18": "2A1XhDkXMq8BHRT7XmJE9TbBVcLPe7z7MY6qiMAfxu6EsbLDJfFynttsQ64zicU3U1MdQNQ8ZyNKttbeVsomSCXY",
  "key19": "nB7E4iut82KtsJSyCjqn2LCSon4iYEwVNht2C8LfSagYnJUjw2XWNBUdU5HxXDNr82qYc6bSgHsNNSXgMNHC5Rw",
  "key20": "3MUGUqsfHibP3CGPzz2i4nYzGFEztvsSnbvaNisq7dj9rgwYjcNqUnEqpk5EHL3DrHXzqRvy1vVN7h3myDNzt4Ru",
  "key21": "5bjVZHKgBKPnSrJ7fgusYMjczC6W6XjV35uTHEoAp8NWNALEmKyQunjYrueXtT9D3SiG45Rms9VyEF8ZT6s8ovYF",
  "key22": "4w8Bhm1deumK6mfbNZvH1xNH7W1fJSyiWLMN6atqhXEa4ABe2A62qxELUBsjohUDjBC7ti85PbpZsVtRSCBGD4UN",
  "key23": "5DRg9bQuCnbAXB888sdXEmZVqe1sYJ6k1VXho8Bv1jFhm9Ryu8kTVryRAgu7SDDeASfZKSxFNG4CWTHjA5cZpGKu",
  "key24": "hUy8Asz4vMqLHeChsbrY4DvkgFyX5xusuMY9GiapoXiVe2QSDrJArZk3gZy3PMWGTci3iymSwyfbWeTUAsNoYyp"
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
