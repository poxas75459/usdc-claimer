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
    "2GM1qcXBVHiSdy8J2W951dCvqbhXtDueDSg2YxzJHCfuA2X5FJyuCuN4GwmUU22MP4RAuMzKMTZ69wus3wgxPbZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21HN46LsGcgdSMvVmTvpyy6diBmg4naCsrvcGNQKdc59fhXmQnQopahmUM5zjtTdqp7cnyYQAaQg7HLzN8DU4QBd",
  "key1": "UdajHNKr9PkM8qbENJDJRHWzYz2FkJAnpY2RwnDVF18hkkVdvzfkNndvB2JDNNYMFUt2eTfeR87mhXbe2tAxWx7",
  "key2": "3Wo4vWotKpjn6xiDDSSAUCYvgoD36cMxRbNLcVCo6XNT1SKa1sqQ2nLhvRiEdd8B9B3rcGhiShKrSBgxSGCXsVCV",
  "key3": "5J9kA4834jeWHPDEW8i6iRzKgd5zMrcKiFaqYPo4vB3mwJzW49tMMQLMKv1y1ogsRXBJiHLCR8N4ejz2NvweLcBB",
  "key4": "64wUNGsV4pzKVVXX9sHMx9gwdj93NujEbM3YCEBMHPfrYsqMoQ1fZpasFd8R4p34HZUc8vrQJWbaKd8cJ9vFDUP2",
  "key5": "3mepheNHvQwdxeXuQaUNeybPTnEZyWM4K82Q1q9vQkHKeBfXMFBn6vSuTeNoAYTSmegwyXAgiWDS6R3GX8aZotSE",
  "key6": "5FF2wiFFqdx4QW9Zyaa7vcNmgM6uCNJudS6sfr5apBegtdHM8qAdSaJTyfgvZ1x9BBR9nfu8jrMimWjQvPx1bjQU",
  "key7": "3Mi3kvYU1A8GemMKcUvubF3nmsGELNcrXP7ATNmpP2gJaF4w1VYZMHV1dpJegvw31HPGhDSfzTm3wQKD82yUTHqC",
  "key8": "4qyPybsTYfa9NAjzf6Z1kYhHq7hgb5wxyGWhE8PmvbVGnY9YweZy1Yvz99VRVNEm6864hyrtQc2b7pGnCa5ZnHui",
  "key9": "4MjJNpNKp4F89XB9PDe6kmnWipnQVv6XhUCwk3BBGqTJgGuLDXXki15q7SogsvPHjEujaZgkRG8uyqHK93yHRTSK",
  "key10": "229Jn5ZfwdR3jtj2xccaMkbjCppcoEeuxoi689cdPGYsCrrv2fHDqGnfZRCBDv7Hm7bwfHtkmrPYyHpZPxoX61ye",
  "key11": "2p9KMA4ZzYEYXGmPBZBfx1voessS9KPKKKyR4MpJJ35vnD3ay5TSH49YrTgwT91GDMvGzf1MGoSdvGzgkm59uw9Z",
  "key12": "EqnnFFtHtYh3yf2mt936cGwGWiATudZwgXDKjGZh5VW9JReEkq8iGmR429hheizc8BSyYbEG8X53AKgPnodLXKA",
  "key13": "4eas23FkXTVHNHHBNZmpxSTuzW6gDX1cypp5Ph6KcKwsbfZCwJZNcpKVa27txkvNLHCxZBJJMdUku8wPhUuUah1k",
  "key14": "4U4Qauv1Qm9ZXE9YEGhzoX1QcK5aesYX7oCJNsBb6t6FcFGLCwMSoAjXXbJiVEAsdNyzUTQ9xzJKizMYbYadNTth",
  "key15": "3QkcVC2zy1ZbezRpVtEy5e7hc6gRvNRCa3eLfE8UHsQnXdsqzqFFWWEVdgtDqP89ssiHZVLgn3Pjd4srGkzguUi8",
  "key16": "Fu13jfNsQj2PBxoLxF1kXwD4EqS74AnUhAhJdNGvrN4cmLLuearjrFSV4H47Y1wddmvB6bh1ueabpCmfGSpPZfv",
  "key17": "3S52mpo3sC3vgpo5qVeLQqGUSHqeC1sAtBCS9aGvjMHYY3r2Ma4hyG6X67bk9BBNudyMdLWnctHnyQFED29Tkn8n",
  "key18": "MXLAUZQYYSfH9pXL65S9bgeAr2FBSsazJJ5fCzXs3P1pwQsbH5DjxhEz5xTcCjXLHbi8MYQa9XetT5XeU94nsLB",
  "key19": "4GuymmX24z3zvpdWmPhTJ3R14uQJC8KhXreNEFd9VVVHCP9UQFJWk7yrerjwfM3svcqY3Nwm9xxFrNMQtcqiHPaV",
  "key20": "5GDH23hQEj5f12rjp3tyeykbpqG6LwxGMGKrjVuxHefrZ8WsXYEpfJ1k8iemQBa8v7o2tqyatabA5CcGPUEVovgT",
  "key21": "4MfAo5Psu5bGDW9C6b6wUi9ND9KY87DpX3QsDJiz9JTJXJDiS6cq8SsCjpTkM3d34GHJKRaEu46cuLemqeHwQniK",
  "key22": "MQccZrRSL6FUtGx74vyPpGCGkL3Qdx3jbditrjbstjXVW2Yy1cAzg9f3AroqdzgkY4buRHKv6Hief7cK5F7BUDw",
  "key23": "3coT5iLuvrFGcayyzpmD8qjYHbry13BcD4RSPtWXsJFiit8Z484agKniD14Yv349enpkxXWhSKHCaxa9GyooX9Z8",
  "key24": "4wpomdb1vYEJhu23ZavTqfJWumWMQFGbBHACxNGCG628611GjrXkQDVLnjSrGEQwyS6tAHNC8SRDjftCpphW8BZo",
  "key25": "2W72aTq1nHu6DvkG4DG7yJig2LycPmUo8qur1sZkG1NNncH6KFxYMAzc1q5e9za2juwyrTpBJn2dcA1hH931qbQd",
  "key26": "3zhN7wpMoGF97u4Qfqis4N2mVYF2iX4RiC5cTnLnvkEGtcLJrT7q3ii6tCYW3fE4jYnDpwEUbKrx5ZiU1ULQeQJ2",
  "key27": "23byJd466LL9D81j6iEUzbcf7GNqxN8FndZ9tf7PSbpSDAyANQ5nPGDy3ixGAsAJgn4Vnswc6kZok23Qd32MYcYv"
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
