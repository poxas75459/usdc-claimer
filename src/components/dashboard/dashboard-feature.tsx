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
    "2Cb8zHC434aEhRwHgeR6se57NRmwbG9hGWuXN4pzP9VxNwuDfRSxFMZL1nHXxEq8bHxVEPnePAiLg29CPpxUU4xy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aLdLpPb81irYvYk19PJe6LmttcjSFZzC4saF3NhbSHnrsMcp9BdAdRiwYCJhL9jtQ1eMR9Xtk64BWeXMwy5YdyZ",
  "key1": "4uqwtHMzEC8jTxhzV6ZQgorgWjdFu8Nth6W2ernnsf8xKWfxUyKkuAxHUojerF9BPh728tysYr7pA8rx65HAT5gJ",
  "key2": "3icbqy3sM9JwCpVJCyHkrXASpNVKNiYC6QGL6UgeMjLXWqw2BVGGjsdJJTRi9gfjNs663vt3oJ5GD54ZUnwY76fj",
  "key3": "4ebHmp9dUzbsziSJo6rfrRBxDCeqb9gQtBF4hJhx8chyZkQkHEwwYAcc8uXufRnXpgF8iVk2wg9gnikPpP4u1GAw",
  "key4": "4bJxfHyEkQ9MmQdJirQSZTuT8aRNXuHZQa4oniMqYM9PJD9ycEYUqhK6vTTS6KgLnZ37cneEyQuVRUjv8CvgJUfL",
  "key5": "4xnJtXH4aLYrjMPjyH54PHj8L2xho11HkUWAMcTJJMUyn7bt1tfKyQNZ6htgdiAtsPQD4D6hG2fiQQp9SDY4xgH8",
  "key6": "y5SBxJ4mC8bNmmdgTtMPsCmhVCEfskfa933k6cTmthrY2suMsUD3rU92k1uW7u8qevUXBM8KpBEPMD9yB3orgGA",
  "key7": "5q8tmqnimgxBSsZfzAqDMHUgQ6UGepAYYNDMUtVXjMWymodC66PfwhkekYhNfbjvgU9wnj5UULjANhu6JedjTk7L",
  "key8": "5ShvL75KE9GK9x6pmT15R6EYJsBvMC2qmWDJkpGeddzx7VJS7EoMNXcNwvPPeY3U75t572fyiCerLjqocnZiqzdc",
  "key9": "2CFv7u2E2aojv7CUFEUXTh86Z4vUxzX2tR7pARDqcLQprEkKxWBVy4wv2wQGdomRY4Ar9GCNwE6MoPben3JKxdG",
  "key10": "5wG6JyzNA3NvzDirGifcTijmwzPkVpJuUoqNVntC7rZdLTyA63yvH459hdEP8PBLcnPCKEVpUDqFxeTvaUVj4iBd",
  "key11": "KN5DsTbjrZdi7NYewMat4jzq6v1NNK75UgQLsSYty2PieWNNHcBehPv6gou96K2NnkbyRnNPifi7VGRQMeMrPpk",
  "key12": "4RF3Fx6KFB5mGvrvQTzVXxy959ohj1AfdQm6N5w6auyDf5WdEErLhKmhgvoLPN2njH4b5a6wbikYGLkgmdb5AhTP",
  "key13": "22d1x7xmmXAfArJGsCkEjWAU73Lcg1VkhSyXA4BxtM6KLpiPsC2mrHRKGrkPec6xeutHjoBCkQXrJgdH6qYjMXpH",
  "key14": "6vRtS4tZQ2hFFtjVYCwKaFtWzQtMG365R5faVib3VnTh2to5Ps7fz8kzxpzG23ozro3n32w38ZeUhq35tpPuM1h",
  "key15": "nLRx7SiFLKUTMSYSfh8fTggVdsihnqAV8hkRYDqL2mKJeYQrRkH5zWkKZYXkNx49bkezH3JH67ysU2kTt6a4q2x",
  "key16": "ZvP8qH9hNLk4mruf5QbESXY4bgnKd23Eq4n5dRvoCBFNxtDJThBkBzA2HiGgmo2sgr8yCiP8FkPf9vEYrwwgySW",
  "key17": "rctps8qkLtFAD3CycDSTpPQdJv8xhjgaQonvext192RsiPeCero6W7bMdWsfQ6EoNQnwujPoNHwnanFtTvaUZp7",
  "key18": "5W99YjYDJc2UZ9SwLMSRAuMamPY2kqkMEzFDUUpxzmsYgR9fm84ojjuJHoC3eXHDpnfd18LFpGGahztM6A8bkPHJ",
  "key19": "344BpC1gAzQAjizgtJvQy9qZmjnYBCyT1BE6JZKSWFweegpTiTzKNRHYV9cLWWbkjrQdsmyiYNWqx6jjp7L9jABX",
  "key20": "4xMV49wcAdEjv4erQjg7Z9mRJg1YTgPzgdsb2NdaTWL9E1pa7fUhw345ruFm3RTSb5ySuUd3Jf2fpJ7PiuoTnSFV",
  "key21": "23ah4Q6yjriEtif561oDu4gCuYppL3u2X1CohtVaSFTVNXLMHVwbfUx1hKwi7LUg9yz2DH7ShhCu9Tyw2xHauNht",
  "key22": "FaHPgnAQDuVYMx19jNKLsYTCrxfBaoT27mnZhA8fPhCBXfCkstHcq8RRrzDS9VPbLT1CxXgrxHotgbVunw29DDo",
  "key23": "37kVectmfAJiNHMzJZbz1FagYnPwT4rHYzAnsk1H9sLWUDNck93eXPtxxpKeBq2uG8DUnBicbdP6cpcM8vt3ma4g",
  "key24": "5M1Xvqy9nebaYXwZ59P5e4fzXQNDiyoJRapZHupqgHnXfw91qMZGpfvjNmtFkCdJY3QBF41dvUzafh18VP2Gn7sh",
  "key25": "3hgZAvELJkCjaui87VzZQheBAKLpvVoGaB8gvr877GMHdFB8TjXedhEYuuSQkzv4hUCF4UU7ooPzVZQUBgrmdPg3"
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
