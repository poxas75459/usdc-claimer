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
    "5EAEhRMH9Mnth8SMTHYU9hbVdVYs4sVAytFwd7HNqPRCYStA58T28X5SPMWNkY7Cctg24AaXk6RGkFKGhMhqpewd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "345sv2SWjdQ5fYfrBmtsj6umpyYX8Aut8oxMCTRxW76iyvqzFGXMUyn8QH3AegUJsskSUPucsQtPwBw6eFXKmR7T",
  "key1": "Es8mKWmoSdEzQ97Xo3rRmh3SWUV1a6uGvbDvZesyxc4Gu1SbRQXYbuiwUdJ5yh6oDUoQHvL3nHUsduok3DhCE3t",
  "key2": "27cMxfHY5hiqwwJoBNAjTqMMt7wugKLpZrBANR7x3tg7FUQdUiF5Q3u2nuBdmFnV139GnEpRcKCWkjFCbiYjbBTV",
  "key3": "4tRht1Aidp9TbNDxXG31HQzeV65TgzpbyMJx7CS8woJQXzZWAgqaHHaPASdg9zmsu2LKBXx9nyoXQiEmeqz3VvdW",
  "key4": "31vNXv58KBS3zgtdCetWzv4fyj6HmHGVu7VuABbhSS6LGoCZ6Z6J5EZxdxd4ixuVnH4GuABQaKwkaZHWSUm4zoL7",
  "key5": "4E1MEHXQCY1SozoCyq6TUHEBatHNztRNchRt9VCJ399bfSpNuejq5o9qrGe4oHpDMJ93acrQaRHmEwZtVeEU2WfX",
  "key6": "2WeYWfXyoAH7sycs2FnsNmUs17H24SSiME58JRvGuM34qHWMLfhuEyNxo5A5byj4w8TApa7AUx7DAFt35MPY3z7d",
  "key7": "2jVcN9c2uHhiwmizfYD2CMtxNtQ5cez2z6A4mPsQ8zgjM86PUXDisLLyPdF1XhGzTa1gYsnAyZz5bX3C1bcGZYWb",
  "key8": "4F3uYuxR3RxZrtKQ8xLAHFytA86W3t3FgWr16oXV67BPTL366gHpbNvC2Bpuaperub64SEu6VJ8og6Hdy17bShF7",
  "key9": "5jAiUnTF3pE3C1jwCuzydqpD2cm3CY7vjTai1h4T34iyNfBe8h65LR8iZMfyAzqNcNx6FcMqyibLxfJwDmoiSXff",
  "key10": "3oY2tcn29A6qUSgQsuSqntuF6r7y7rdX6c5yGfnHwxXyW5Z2teGRZUQ2ZUsnKBWkpVBUqYCjDkgMUPnwJLB4QoBG",
  "key11": "3yycPPkWyMQcnkHhMVvtSuPdV43JSpLwA2KyLFREYPGb6UwEyFmvtFcKe5VrWqoZzTGGmuN6iPJk7aJw3Y1EYK4m",
  "key12": "3JTfHgxViuqCXo6gZr6qi1sZLeVPs6Xn4itDYjFqJs5YpPE9i9NAi6Y1PauUiqASg7fE1j9Qx2SewAG9PhmtTkx6",
  "key13": "2P9GhsVwHafj9GZRfo7prbCNdn75EhstKifPSJQkvikwiu4Z6gqV2tiBb2F7FVA98L45gdZD5Sy7vSVN3jGVhUdU",
  "key14": "5Y5fdM6RB6ZrXitJWJMRoLJSPNRQx2z9ivbsMLhs629EDFnFtvvGCUEx2MLwDoahu2yY7FWZoWjjfAao3EvGozBB",
  "key15": "i2dLzNxs7X37GMamUU42zUWq78BVoiX9m2Ga6SdsX8uqm7jJuC8qKc2WkpRA6yVVK8jcQ1vcrVgqXu2NCnj8RMW",
  "key16": "2BZJGj7oi9H4tJ2nd3DhF4fCY9t3npB3G1BAyJMbHhsfMYKJr58XPXC6jtcWumd5nnmEwQE1XezDz8r57SMtKRiq",
  "key17": "3oYy81tSVzRqhzTwfn3qrDRDVR9Jsd7WezPZRYAHx4R4NYHQC7CcJH1YFYTeES4hUxDh2SpqJ25o7GZiqS5bmX7r",
  "key18": "2ybc9Mj8MNN3Xk5SDefAiTiAdExmtuFRpApfGoZTFeCA5pVizpbjQHCzbKdQRXXRstLB3d9CW7PBuXgu8zxpzbAk",
  "key19": "5N4EwyRZmjzAyu71daTKmcCDdeeJXEixou4eZTAV7tkcCg6S16UPx1f5FvNhCwpSuw5dEoXwfroFpt61vETgXHRp",
  "key20": "3524dMdHkWHeqqdbe7EMxDaZztTGaR5EmshLEa73DzPVkYGj61mcdAoPkXdDE3hPdGn3nd5V65aXJoqsJrmSLmv3",
  "key21": "5inSVSKE4mLYrbJVXj4MqCKzAfLpJv7XviYoTD95F9FZg6HL3hZhE5U5zrUhbpzxMrUFMzhaTvXfLKR5iNMmVgAK",
  "key22": "2JAzWN6MEow3depJSyLmfstb97BW5H4HZCe8mgMUZhkma89XySmce4JPgPm4zhsrqEKDwB6eTR9m5DdtXAaJacg",
  "key23": "745aPhHxnaxvpZ2wC32XWeicQLEZY6dm6ah8B63ENnmQV9p3GjbPjRuZTmm93v1De3dTLaTjCMtXe7FNKiCbeLu",
  "key24": "4VigAhnNP1L9Q1MCae7429Hk62BJc5iYVmexmQCzceM3u6Hd1J6ubfM9VksuAhk78bMS49SNL51hkTWCUdkcePo7"
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
