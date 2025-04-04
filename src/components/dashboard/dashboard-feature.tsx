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
    "5sWfSGghWMrRQYVvvvNGPweCDzgibXWV7qEnfAUNGzXVvWZnYRHrwHoEdoeJEEbGtT6dHDq33DXNbkaS2y4E3F3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h7xWQBKEFFFvKRQV4CLJtFiQzMDEZXosrqG5ZAZzvm6FD9mRQtsztSj9Gy4upXKg27zadq86168F1NP7SKDgvoD",
  "key1": "4PisRk8Y7hUdSxmiDXYB24YmwskiE36n8k21TxSEP1WuG3e6NEUX9LQbDwSuMLZ8tuo3fRG1r6sqbgqsc4zfTsLH",
  "key2": "65v74Jq7rNguanYHJbpNVvPuLESosFtUvgtS7Bv2cQnbAdYjsfrQXCz5W8MXZx3LL5PCiFUmzGHQM3b3SF7QQ1DW",
  "key3": "5jfpmCzz967xmQkhPXUaY6uwb737wwaPkFhQ1a2T4FrkG785rpQKy6NBa3ppSsmDQNFCzwQW35GVqsnWF3iN4unD",
  "key4": "2eRuZ9yE83pjYtc94VJQBkYEwEx5T1rH6BWUB3aS97HZHqQWF23MsDYQtiJvS9WCfzWPHcsXNs5RBoq1Twu7JTNb",
  "key5": "MZiGqdCkghv6C31miavy87nhLiiZZGhmjEeEw9vR2t5fdquZjuYEcJaZV6DVxHfML6MCSXtCtE9ixHjyv5NRmb4",
  "key6": "3smPd77sUZUv7ntEnao2KoJD7SuZPoiALrhzPACrY9Do8tQhQwanPADU56tdEEWVE7TFYLZczpEA1ze8UYPupmZp",
  "key7": "5LfM3he1iHjZ69EvwZa9zWCGdcWuNcWxqrvzZjEXBjJGbSPBrhR6cUbPi8Rs1ZBmZJ2mTHBitN1UgwkRn9pgTyDo",
  "key8": "5F5PMffGpWQuznnxxSxbQUpF8rzrHi4kTSZo5Qn2sxLfX9kfbdd8ujn7msq5ZUc1xQBgpXNMFG1kJ7x3iqtcGbvV",
  "key9": "3botbsbvmAFa548ExbQp4H9EmdhYXM5MdxpqE4CqDVy9Xr8VQ62imXLLfLUXJcV7NCMQNSQ3EjBKkPEr2jSwVYYt",
  "key10": "5y71AGCF9Hzdnycpp8KEXMx56m3ZYpCFCp8NSpvuQ2UfEnze98Mx4dcHkhFSKM59BaoAckMSkuxpFKPqSuGqBHJo",
  "key11": "4iCCjVgSngBn3Yywqi1vQfTcfyKteYa8HNertmivHBqVLyp9SQjJUStPF5M5FeoTb6VCqdGwy6rtT3EJvu56sN6R",
  "key12": "2geqj2vsEm9k4TtQAACi6KiHs45yVYqRR7bwxevnL9xYvmmJJxsLBQt8UuubdaAfD7qRNczFM2JMXxmKCacTiHna",
  "key13": "4YcEtgzWGDnQLFBXwxHqXKwvtXJ1yhVdeyPkqfPFTvfySdf4BZC1hzyD1vZoWesaGAawiewDEg76yuxh3L5RV2F3",
  "key14": "2YNWAjewHsxBfrpnvijf9L9Mkd3hdMC3oKnt1tgukuKux6rubVtPfRDRzKAytd4LPgSed8urKaL51U162DabMCYk",
  "key15": "3xaCLjvRSfWy2Meyh8QWzH1oes7ZRgCdHd4FYpKuL5in4hqhMGDNTHfExsFdm92q9x8ngW7NrDW1w6P6yrmDfDbk",
  "key16": "tmu2FPimgKvXH8ThaA2KD4UQqDGZSrkAd44h1ANMsxT8nFZGMxr94avxgKSVkPMdXpCuPK4BJ7trW92tNCMtBJ1",
  "key17": "sdDAjSKWMsGkLJVK2eJLXwVLQmtsbRpwKwYhEiphMSwfwrXTiQ8EF4nTYnzpwCgY6rYxuacAk8d5RYAgVFoFr3E",
  "key18": "67U7PUyDp7iLvEqMKqdweE8a1xMXh3vFFzPouhHshMqWrngFCEwC9T4YoFpG7RujRC4tsAAStFKcAkXVtDv3wGwE",
  "key19": "EZRNvo7GW6dUndsWcvYC1zJwADsq1eR8pG8penwayEPcYGc4qmuCP4VLKvNogq4YSsLuf94ZorFKwgh8M7FZhhm",
  "key20": "4Rzgxcqqzj3tJvbzdWSswXqos9McELcaWpESQQAXokB7YwVTEJPZXSYJq2NPsdNB5xX9vs7rTyrYUoXkkkqNd3LJ",
  "key21": "3x5u9gmN6fcw515fRV2sGRKtSMoDWQabzeszsg9B1THhWU7c4q9Axnibvmh3Rhag33hXC7hAG3KE2rUFj77vRtfV",
  "key22": "33v1NSzokX7yuTeQViRigqUHWCowPVNRPfzgb4yFusJeZThfuLbmeiwUTCMX6JEmhhRuEG1M4pQy3WMGNuZqKGAX",
  "key23": "2ZH7a6GiQN8xswwzteA7cSK93iESgKeYwsc5iT2gECox8tmEr4PF1bd5sJnXXaLLMJajMFrj9D8gFM4SRrN4eycs",
  "key24": "4GUCiY6AJdwmZDZpPA7dMDu2SZXfFhmiWVZtK7NoBxpMCCANGJoazXRof3xhkhqs9KteyyXVC2P38Gxhf8bPxSre",
  "key25": "4mJpemimyCPLMe6H5Lp7K3PzTQu2chGPGHr9zCZ8rLuqiagiEGwQfJtDqjJztGNZ9BPcAEmyz8AxyAXv98EcaTNQ",
  "key26": "stVQek33rdUt5joPXocKeCSYLSqhtBZZafQdc1Fs6QpGiYcPhXKCCmtuDXC2WNNr3fD4CqXDpxTKLvvkSDHmZ7S",
  "key27": "miJStX6A7ZMx9cZB2pEoYcm91TWnAYFvGH46fqQPAySHDmvaNRMdRFUrukmnBsNiAZH1WAtQNnHed7fnkVgZaNd",
  "key28": "2eVBd4Fem8JKVoqSpfQzEjJ3V6Ktg1rqRwF3ywgvUUXe6D19GxJTFdcSRP4X1VxcTnF6ps9oUT2QgFJAsYeLk92X",
  "key29": "3JgojvcZUC1FCmjUV2nzctY3nAvw1c4rzLXKxMaFWxbH2ZR714fFqCbFBEZvDvpqjSd5DjgPwotZuR3UeWNTE1LW",
  "key30": "2ruuaWC58X8d1HnBirVMw6Y23WFtwH5XZeMVfGECpMQKaLJbWXw25GNJuWRmQuBTR2dg3PPkgHo4r1ZaYa1CWxbD",
  "key31": "A9DnpYZodXe6HxpFCeUWTYZifb6iEyUp1o3D2XY8t1qy4QoNqxYNwgA8EDicxb4FFhjGTJLRVvY2Z4Dq5ykXz4i"
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
