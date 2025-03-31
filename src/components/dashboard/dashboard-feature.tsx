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
    "59zirY3ivGtRwa9ysEj3JrRTXmQxbnh7J43zT4KL5rPLsx8regb9a6UwiNek6ckib6AT9xt9B5M7Dp2xzYGcGDNt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22jCTobfokWR7u5xriqL9CZHMwEFsuYJ6hc1VSE2uPCpBZ1QyERtXZbSPGmyEXwQGZ4GpCc3TQCbBpzV8jnDpeP1",
  "key1": "5Qgo9wuBKfaBMwi4ak6mjc7m43CzYei4ToBi2KLPUBgGXHyMYip6yWKpTf3oCS9SHMSrTagrRpmTzdkv9nvuLCf1",
  "key2": "chaEVvrUbEw8Dcf4vRGKZLL6ShEihVGHjAo4ybuZ8u5V5KMKQjBHzG4VcKxggUK1fE6yp3JaeZfNisyRrbjZRz3",
  "key3": "24kdraxxvvbXMw74wbgyLtr1bzYuite4MVBExQ9MFFhS5cpGDYbsVNTy54gFrxB3i1VCP4jW7JnN6DUaxqtoS2cL",
  "key4": "5zQAonQNjfwHWYMZ3Xe2YRf3y3Pup8karaTmqDkA5QNCK9JWxzTKSQmeicDua2esY4TMQsbPqkCXN54mwWcLft8c",
  "key5": "3heLqoBZ42WmqBXseW7vXzXB3hM8DcQFCZrXu1ct75pCxDszXrojW2aF1rctGuBeeAmyoafJc5o5RcBtLJUyAf2x",
  "key6": "5jZ4iSpEJGys2PE2SheLa7nmjFiuvFhzWRrq2UhjMmAPHGRVpF2hyZuh4w6WVExrnuUFLYE1yvtxstgsnA8qBLbn",
  "key7": "2XAhxMnCtzVvVScCfXsDL68y3Y6BKJPrK8toR75CeGa6auV3Y3HhGgQsyHvRCS5AJFKqXnwXQiJM92swMQGEKcHq",
  "key8": "2YSF5ULUKzKQ7wEuTP74xaZAqMdQdiJAhTTv4VXLdawARYziXvG8eYvreDcAmHngoBfvUsfagkoSE6XxfjH8SMVp",
  "key9": "4ogvjm8J2SAiTadpJmNZXC4xHowihSrgWFPAaFQpSDx3X763j9ffpY5V5xpxap6FsXuu8nMWhGkjsM2XT4bvkBec",
  "key10": "5mbjKTPjHQge2gjAeKojq4gWngwft3xZB4g7ygKn9ce5rxs9uuYt8nof1zZPJLAyPCUSsBM5goY1vJhpS8EpKjJc",
  "key11": "3Rvnpai1r7cDvTreDP3F4iPxq43536mDHL6eN6db2mbu2mA1mkuLJRAkbK7AJHmWem5BeeXuYHbmgMKcAu11VrYZ",
  "key12": "Kc3KraTcJGnHory7cXpqiBnb4GgXvHKMvQ5Nsoqd97ZQUsuQaNxk4qTnN3z3jA5AyWeJPivnZCN3tY8NrQiiS1s",
  "key13": "2qDiPpUUAthquAjskhPdptfKxxG7yoW6WakeFsooyAnH6b4c4mVLjum6eAceMjmUyDS1aRNW6PCBsSrWu8rPZ4jV",
  "key14": "63ZiZ1JbphzV4mGiqxV3WLjaG2MqBLSaok4Sn7UKeSJfkeDcMfT2pD9icSBDxbU6jLiwHMdGBBJqTpWDgQvUsMgx",
  "key15": "uaHZWxDJSojjpK4CjX2VfyTaavE2Upo3E17dLNU2YSTJ5kbXFJyVmjUJVzNji68yYgkaWpUw2YFUprQk5sd8uH9",
  "key16": "5P4QfW4Li7jnXdDeQvPeAiLgUQK3rUW9WSESiVrUxK3DdWMVRqNGDRJCkUaVsATBoaL6fRzCTyEbcVhm7AC8R7mk",
  "key17": "4o26hS9Z5peBoAm9Y7ffXY1m8wSs4NyAHMF8rz9k7qkbUeHG84C6Gm4Xqv7Mmq4gbmt2y7biA7NvUGG6ZXX4Qrve",
  "key18": "U6M8auEW8r7daXkJUnRvbSbLaTY3nXYZwb2dVciWKfywnciKg1NPnY7vhFuwnbAL68HZi8oX8C57m6AzCA1fTpR",
  "key19": "4jPjUmTD7VTMiFa5B8sYimgj8EXuGggJBusec3fMZAAogRmmcPV8BxTaRXm7P55uiM9d5NJG5rt8uTkZxxEiWinR",
  "key20": "5Ky2WGpst565FZeb7fXkESCuQMUbxGMmuNWA6yVi9AcYs89XdS4NbiUcjS7MkdF9nWAuSp6tWXsAjLUWynf1Kau4",
  "key21": "8HtfZCGnsMrUzxxM5ZJCk1ozeru19P8VM54SwpqhmEqxVa2kwuX7Bgmn3174iGATy3nodSKdL3LdFsndGwcSYSR",
  "key22": "TzERiahVfJFfk3FVU3hJjGSrNX2eXr2TBzyEZT1ftKYXoidivCCs32BkaEiD1TDxec8Diaca3U6CNJYNajmAPHQ",
  "key23": "4ntUsVz4deE9WxTkJ7teqpa7weogGLtF2PXLNdqU6Xuy3dQQJqo3pbAT578q5fVq712HZeChktyiMwy9yASKgPFX",
  "key24": "5UMBNkFTGotjt9oYnP2sKHrQKZ76mRLiZhvCZLMAkNrCrSVQpD3evMwrRE7o2oQDnfo6awBRx5o6fHsfdhne2fMu",
  "key25": "5ZHPo4JYrGbcJVCUWz3icX7DxFP6pxMazCMQa3uyLjeu3HNgzCkJSppkanLQ5D75KLJaKtNQtEnUzygJETtrq6bN",
  "key26": "VnDrLtpq6Zi1hsoX5Kunf9S1w6FR2xhJtY9LFGCX2na1Kmpuwef9Y6qZoBSdrP7A4eCfyMqVTjmJcBnmhPqPo6F"
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
