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
    "gnu3MGiqTQzGjjeNL4E5ujSWi4Vsx6MSFWnt2mGWzKX8Gq5Em2NGCmevXBB6yXjFEGTkbKkg3aiS3LqaLKNt1Ms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34G9KxTCqpGo86CtDGPmvd8m1ZhP4k4j7uviTz3R7E9LhwWQVSTh59h59tvqoRqt9V86hATQPXQBdW19xsTT4xM9",
  "key1": "5aFHEWvMNyhKw6btdCiVtoYbRJ2bbzELNCgctvNXcg8avv91FBKKtex18sy51kjqFQGFDZdR61RTqDZrNudSa6Gk",
  "key2": "4B4c8UZHxibnBDgUnvWFusN8DxxGMhYoMb9uPV8yVE8NGLBoMDG6yfMJrZyiQSW2aavyHA6nE69847UAXhphjLg",
  "key3": "27DUQ5XNTJqFLyQzfMmbWkagRhAMQtndfGGbxX8SfTseGwmJT1FX3BTUZHQq4xz7h6GWf8dLzE7jYJng7yyTpbRb",
  "key4": "3M9xWjNxnjkQFB5tDHM1W16idchdcPMSoiKUhQuydW2xNhLSKSJMNBiEKxn4fn6VTs8sXzhUzmeTxdUydNAuWtzg",
  "key5": "4s19BTekpc7ANhMoDeQSovWQopvyxwgP4TRqD4aU4QgYSPa7gEJFznBDrrHPWKbdViiHwgNdyNGZ5PBCfQGy9cci",
  "key6": "5eRwdrqEwziLHDuYTHvTt5ZDhedvz2nKQXQrmUJno6zWxs6WMiJJj26dxbzpjoihoa8UgiY5bMuoVLbZg2XpRZzr",
  "key7": "VJAp1YsyBb98wTai4zBLTfeA1xVb5d76LSaanvnhHNaH6MAUV7ukS9xAQMeiyhmwK8iFZ9PiEoFvCuezXsQYts9",
  "key8": "4nM8WNUARAqBntepQW9b693KonJWxJymDFiJD9HyyYuKDiaZj5VEasBV2aLjC77CHSELchHupQRtkeiotPvfAQVt",
  "key9": "2pjXha63iz9a3K2qK1Q14da2KfvDgBXMpdssEELPHxT5jgLCxWdt9NYkq6d1qh52s4SDRsfpvaQRwUAGi65XHeJH",
  "key10": "4VgTptb4yTFt73v2Xq1VXeRiCjGbbvdLgJ6kEBaCd4ao1feZ3S4VeAru1qpRMH9LVFrjYnR34dLBEQVFJdYyxKQT",
  "key11": "2nk4w7Px7bFjmKEBFx6iCxPkTWWGxZKHtEkhNBWUEWdap4aeh5xtFrHS4G4ApdHgGJt2DoYMjYbNKLiUvUNYQ5n",
  "key12": "5hoATddhpP5JqKLxQXYMxNJS3CAGAkfzLcKTA4JXzmCRSpMsHtYVKEuwPtrCYzWzgm9GMGG9KJvRNMbBUtUs62ao",
  "key13": "BGTWYPAy8ZXsVmGcxNiDhVu11D9NrJu24tNAtdXQzKX3UZQ6UbxCa6uAjWS7GV9K2xTBvi4FteLsFAt2W4fTZnr",
  "key14": "3Yia8V2chMGbgPgzxb9ndd7QxQjAnwHmqbpQb4fi8LVY6u3W9UMNkWFqZJTdkrD3kYDHqf3H36TJAT4DXGfKwB58",
  "key15": "5D14coSaFg3o7FVdttbU68YzD8eP91PBksJCRMEbVD1eJ68rHhG3i9A3JT63mTGBDJxk699zBRLJBHxqQRZpTUep",
  "key16": "4QPtKCcz8HYEcapvbi7MADd7mUVcn2JV3XZHJXxwBi9eekYw4kWRThhdAo3kYV95UaEvgM3uFyJ8NKpKziERVG8N",
  "key17": "2wNRPF58NixRQQ4GN8TKgb6W8jNRzf1V1U1FHhdGGirHcAbJ2xxJE4brovkTBegM4xoBrWw75uAVcreGSNtRbUcZ",
  "key18": "ERYhGMhaWm2fDT7H2Zntv5qWg3watVspGXswjfnLa91sr4ZoJ5AmTcwcBA9AGcfVXjgHhcRbUikmqYw9oJzMGK3",
  "key19": "AHfxjibSUVHxUeNLiBLQEM73XtT5w6BvCX5wPGGZCLQYoCdSRFCKaZ2c3AYXtxzVeZ9TYUpkk5dwNHRwCLYsxvR",
  "key20": "2ZoXiETAuBPZXTThbgA8KHTbTBsyjPSgsSHy4orHpnEbGAAeZg6CWg68S2q6LV1tG7XsHVxJzwJ9rTBgFzVV5EpH",
  "key21": "2YwPdX6h4LhKdgeNCbzzsLxLWWFYfcMv1TLr8wT8jsQMp2KpVD5awJWwAY7eAUK29aVUQxTRv9fv8tN7EsmHsThj",
  "key22": "3TCknGxF94z5YgHRg8dhVHicw4xT4SkpVmmqQFsUtGjipdA2P4StTWtjJzEXTbAEXaZtzMbiozDwhrwUUeWf77HE",
  "key23": "51zt8tvcfCmRZL26uyo2TL1SZKPfgw3ZHvA6yhih59SMz5Qo4c6LhZcBnQRU5n78a9zMarzcVZYANsJtnf6LPmcQ",
  "key24": "4TKp4wn5UEY2R99KrCQKww2uE59ht1KYJYwJkYZMLJTUMeg5ZrtiyGMAw9bTarre8xzX3P9yPgdpot4zMEfsb3qW",
  "key25": "39kqbCCZz4eDvHGannzpD8BCKvJes5NrjXWxSZrQPBN2B3YbnXqDZ2LysiYfu7DAfKtTQgV3AusjUXTV5FxE2xJq"
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
