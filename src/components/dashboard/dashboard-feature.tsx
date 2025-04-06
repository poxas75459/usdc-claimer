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
    "2GhSHEcZ5FD2LqhGArjNT3AG1mjNoGErXUwiUsUmFzVmRPnnRrjF7phE9B1MSu8tbrtXqYwy8xj9T1V8RvmaLxgw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xdPHjNcviftwtF6yLsyKZR6jBwdwDNPHRWdGKMHA8x9ScWEXQPvJkAEmkN5ByQdrJza5RNyQwEWPepbNsuErzBp",
  "key1": "35p65WMvZqkJZB3s2daKAvVugpzqshiKKVgwxbZAVpiLYfzrPjDTxNPz4eTR6jJ1KrkuWkdyjiTFny4NP8wpi31J",
  "key2": "2LcWs5K6kDU6sNVD5VcxSYzftw45ZXUYQVaYsWSh5bN1geViayMsPaN63wPJPNHTTuXbCgBb6DT23PqNcPm85Xdq",
  "key3": "xTfuDRe3UC4vP7Bzd85FZT69d6YQvoPuFrVBTjLUmMj4FcqT5uGdpoBqtNNAn8ZFEhxR5Uxjebhz7sy9kyxaMBF",
  "key4": "42yMq1hqucyYkeq95oosDAWEcoZpMwDkTcgEMW3DJbgYcpoLeGN9vGBufQbc6vZ2cN1G5WB7cXXJs6RysTNEJr17",
  "key5": "4uaJQRpRP6okb4T25GH7kvCEHSejjvDTXaNa9bG1VEgZyP54uPYHtqPxqje99HWri57ayZdBEM4chvoKkS3wh12e",
  "key6": "31ibr8hMbmaZpqMkRoV9qFfAnncX5hJg2dGuSQYExXfYZAK6cTqGXPkgch8YEMVTfrwzkvVd7bbY7FvrmiYocEt8",
  "key7": "5TJDx4eJP79SsdUCKytxksrddig6mjvm8q1EkQ8DnE9r7xfmuPKvssyUwj4zgE9RL7dHiZoZXRe7t168158Qbtm5",
  "key8": "428kQ2J8gCyagP8omaoVMSTJUXeBypVgFsbusa9zyuj3R5ofQJmS6UAj5AAffNun2odLKZBSVGcirnp5oQGZGpCL",
  "key9": "29rRwVdbFu4zNViMMkEnwfbWCHR6duj1ENEbVvzFjQJeJ9RxpaVreSobSYZoR3mepfFj9k1csA3Q8qoD7Xd5M5yV",
  "key10": "3zjypsRV1p1xt1fDjm79Jbi8qvKTzvWCCeezuUzUWqB8hSg4nJgFrEbYvCBM5jSvunAawgFQzC9JHHMhw24K5Api",
  "key11": "4ARDxC6CHQddBAeSn6ccfqWyQGUUGD7zwjEFVFqVK52vG7DmwscbAuqAvSGbwBk5sNEm87b7n4my5HMjKgWQ3YTw",
  "key12": "4wBcWdMbrYzfYtAVbyT28PRaVvAWBcnCwbL8wwFN47DGXRsJ2VubLxeVT7dANhWgtacb5c5oWNJGeHZkBenzxmH3",
  "key13": "2y3sCwMBCJSWxQrpzDoPiMtQkCp5DT1ZAD14AUoAMZUsjsHus2FSrvX97X7rpktpY8fpQaLbqtA1bPLD5sK6VLw2",
  "key14": "2YECfR7Mgcr8kio32JnQJ9UicFPKUrg9ZGfQQz3UxkyKMeqQ4Ba5N6JmiB6LTke978K747vZXYi1MWwNni2ZzBJc",
  "key15": "3PDJsHWpnL8xDyd16AMTyYbLUKZYLhCKPQM39fcuFCQpDkj8NhP3G5F94KLLTwnDmzMxEDyiWzakUiDvMgQzvv4U",
  "key16": "5EreG1nRFuMQ5ah6FrNTCJhzhsnfHHESMdep4ATU6hmd8TXUAzqz3eCSNCj8Vmu4JXrN9b12dFXG2oSkQdv2sLUZ",
  "key17": "2fsK7A3KqgjptYNvTGZ7gXZ6YiysBdTs7CLA4GctoRdBi73GziymxB5WSxasEg2A18fSkLkcj1f4dwpmSpabdhB5",
  "key18": "3FjQ8RqXJuXbuDmWqdZQkA32LkBKtPFBefdQg6Xi6YY4MvvRsq2GkAy4hjomSy6LKBupstFHwcDuGPvbM8LDV4cu",
  "key19": "5uo1pFumEEj1oCfjYMJJEzh2oacd7NXnqRKWa7kZMmi9VswCfLodcppSauCQJ4fpCchXkjeUAbfmWdYKb1tiRQVc",
  "key20": "2c9o1GUL2LbhH2uYoW6S7UAQhZYVPizifD1HXe6jg33z5Nviq6XcjLL8KqEsvvYUVNzTyG43qud4oNXSzbFHznNL",
  "key21": "5DQa57UWWUqyNGhtaJam3iH9uxkzv4xDxgKDD6RwfhzwnLn6wJF3MUn2FVKsRSr6nJnNMJzCUkPrJcT7zCkCxfeZ",
  "key22": "5q1Q1Bya6Q2AaSBaSA2U6UBkNbwtHuLbfJ5Ez6JW75YVcXxPSen5uDabFkgXXr81GBf3rUP4CDSq7TNSS6vDn5GZ",
  "key23": "4iHwg1HEpfqWfUwxxCT8LtYX79knYGHocruW5HHLbAWjodSd5wV8gSR8N8AdX8v4xCGNGAou9vHshtJUwJiYMt83",
  "key24": "4BkKTX65YS1M5msnBJfL5BC4NBxjXu2aEEjKyUJT1UHAzy3nk1fCRuoVQ7Uc3PMDhCZYfqzoNHBV9WoeZZ3tEpZt",
  "key25": "3jGPLq74KCPZPDsLkXoP4J7FmU8sP4weS9x4PJZkhszAZ78CMF48q6YoHEgS4iNL7nxJJkyTJoJfrwwx3xmcJchP",
  "key26": "43DbyNDfSA5Hr66kkeTK5kdYYUYaDPRE6Mf2Tue9C4hfdExYFvFd9o3L7VV3BUwXkxoWXYzCU5bkR3t1bPDxRFJy",
  "key27": "8Y259B5mnB4xjBXJZPjCZcAKTkjBjWp1WtzDb2ULikGB76dRcgyq2nFJBn3PSB9XV6sPmnd8wSaXdEYAzwea7Zj",
  "key28": "4jv4pRg5gSdsPiz7EycQi3S2P6Mk6vLGijqE9znh61VRvQizWqP6Q3UDXDCbCgBaNGKf3sKV5tb88W8yBnTw322y",
  "key29": "36Mq5CwE49TeEXmmNnKyf7dbdLvAiW8JF79Qm7bmiDCneDjs3XCyKLd98Hafpch2PSrUEhEVUohJCyepk2bbXxPN",
  "key30": "n8bfjWS8fHbNcp1dSr1rCUtqjr1DJpnDihcKWzAwmtxhSuXG3VPeABBZcdThX4kQf1fidhjwChkhHRrEM3fP5B7"
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
