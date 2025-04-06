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
    "4TNBnKWxkQcEuk8AD34GcWkjJQsBqJtc7PyMtAvbmSB2tcsMUyWpRvRQKDjveGe2zs4tDWW4qJzdgFYMopfqaKTE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CPCJ2EYRkkvypNFA6gjjB4XkysyVQ9Jhfc7gyw22ACe8F7cZU7JpSsSW9Yp1J168uJkjesV6tGsXfqTCUQ8aUTF",
  "key1": "27K3kMXqMyZK1DMmLHrgrmL8xWGSnbbbXyKBCHL68hEaxvicpqPzS8HDosUXE952qXqsn5sNnrehsXdxcEwwtqXN",
  "key2": "3758Y1tDjn2tjLuiYeNT6WvPM99j4oYbwk4HPhBfEJJPP3494JicXYtW6UXt5vwss15Xq4RMNodyjGgcrQGNYEPo",
  "key3": "64LxhQQG8x7f7sDk4wauXXiTFSC4TJCVt75S8P9ZEZQKLgJ2mdirurYwqVTcL6uv4ypxF1GmiakQkqRunehWU9ii",
  "key4": "3vBEviVeQUqdjjnCj9yU88JXNZS3c1WTb8tdaipATdJ4gHoKQgearve5i9KLEGq6k3C2PAR8QTXTPQ8KpBg69jxF",
  "key5": "2EyFyc1ZTypg5erjaQGZW16N5BJS7JeFKLMFJyCbRtB9bsV9FLPME5MYFn1wFBAe34imSpBwiFiUvtXwSLvzqHHj",
  "key6": "ABPeVLk64hHJQjtEXmKkNvxdwCRSKe2qnp7c7zQFwxD9TqPWLaQsThEkP1UatXU1aVjH7unnKo78GJhsjfSETNb",
  "key7": "47ygAFizpuAarCW7k6icqiBc1PisBjSZEayUsAKD3VSRTXbFN33nk9WVvEQ8L9RW57ZsKo1v36k2GEbEmwebLzzx",
  "key8": "3reJFa3wiQ26Gs849TtYA3Cz7gWdiZAgciPosfKoeUeZP83XYQo6tJQ3NR3yyTvnzyVVTyJ3kXoZtLG7n5fKdSSE",
  "key9": "4TuCCrD1vbmFBjK2dLAB9hkat49sGTNEUbqCGSf179YtXtUyGYAid7JTbZpQFXLJFfv1FE5EVyxeXGYCwuHnL2mt",
  "key10": "34MWkfEP6iDdrb3pGMnkmMPNCQzFJUUxPzfQ1CMGAMNoKH7WrbP96JtkH8qMZRcS5xydPcrSXjSXouVxUWPqRYJG",
  "key11": "28YoRzi6GFN354BzWhZgt28uvZPeNVRDUhtfBS9a2iRaZHMeK8N2FLfKP2kxFQTojiALCP6yaujmPnB6uuc4JfFa",
  "key12": "5dCBmaAK9Rk4XsVUBhLaHLfK3rb59adURtApEMv4hpPGDRFJ9HBBpJ7BhWFe9LwbkLU5nLPM6zwkdxqfn4meGA6x",
  "key13": "2r8ZomjNPnKGDyusbB7LGzCDD2a1Z1y6LJyhkRpLT7N8XYEsh4zPWDB81pAfC2usCkyH9a572mdetoNHgFtt2Gtd",
  "key14": "3q6r9AZoLQp3hgt8h1mXGnNSsuvPZw3gWYRR98EMyrk1uYAM9eG7pm67BieEyvLetyqNe3RdkUtgJotoJF8tyJGg",
  "key15": "3f29HRi8QrfHjaPCm47z3zL56SWEqgEmg2stgRgvkWfrqvnFfjuJmkD7WWypoq6ZD6XfhSZF9DkxFsxuKWdKuEs3",
  "key16": "5bsHy3UuzoySUA8RsMt2chSmSYTwvL2GUhgcaN9peDVH2PK7Q8fe9qHfTyqCinLK1VHSqx8PknXKbUHo4Gw3Rppd",
  "key17": "5FzJmR1h9ENfSTbsqFDucZRWn13VxBF5cfNzSV1CmWxkSjjf7siP1txjk2fn4EJ5yuhaEykjF6NHpH9JAe66MLhx",
  "key18": "5YaUZLiR8SjHaTAngu33o9HHS23CSusFBGyQVny32XtwJYcb3F4X4kNqRrXAomp98LNK9twXmHgNk59a8ANnM5LL",
  "key19": "2ZTTCMCku67V21ZLdCDzGVGLqr8FJv1436nKQuxg9k7YyWfCHmFK1nabgaUnmEmRJKyTNtXQsVs76gHjaVZ7eckF",
  "key20": "2n52gUNFP8kkA5EvrZ4Wstti3SFixm8yAgMoYsMEqPqqeo7Mm56poVmzyga1VZbcSZ8HnfkMG9nLA2NoDQdz7rt7",
  "key21": "4VVo63cGeLnNgmDDuraf1XWrtPJz5VQ7abppWCbmMjQj6qRXGEbtCTyKnEfWovm7xgNbRzUYD8Wx4aKQoBZzioeo",
  "key22": "3sX18HB9qtpu9pcXbFnpQ4DwejazSmyRonPfTgcwFvVedJoKvxPK8rcruaQJwRS2D8FQTiugZLKFEC5cgBxPHQqS",
  "key23": "taM2viy5FTG8jAXktHsn8uxxPHPbQ6JZ4cw29qgEmxpYKdCvRmNdnGExUa9yMLs9794nR3w44W27GCNTpFZ3BMA",
  "key24": "5TmEU1Zt8pnLiWGafaiudSkGX4c5MrCD3b7zEBhD67DZyBQUYsDn15nMLhRvtqc8LLBgDYLKZTEqxH1D1kbsypi3",
  "key25": "4BZdUSFSXYX97dgM2MGPqp4GCTAjk2ddeBaR7HxxoTvx9PkSHeJRFnxagckZcpmTqSo3g581K6RXs7kSxJdtGgtn",
  "key26": "4LHL6KeqWi1jhGNG13zoUfaSnYY6fgCzJzu7YR7gA6GJB9RcJiXVKfSXVtx4khcKnSV4LoqhSHAxp9kGyFAeW6zG",
  "key27": "44WkxxioWh56SqLkBmCWfAWmkYqpbsDmSqP6y2RkimqtvNv9rS1k4uvdzWu243kYxXgw1bqjfDF6EYh4ms84HFiL",
  "key28": "4tUAK5zeSA3xEB5nd5njauoqNtPaMPMh2AyB5UCQy8PgDNH8NxHUehKmLZattUdMkahjrWvp6kcrqRDkjDgQMECr",
  "key29": "KW3AKoZqgCVk51tQFUhA2f291TVet7kD9s9LCk2rsnj5QKGHhqWBKGusbAdbgLcYiA4xvc9R2BGQ36djq31nFFh",
  "key30": "4tQg9o4Ae9SJh3NP3zorqYxVvXNC5gv4jt45h7HTmfmvtWPF7Fr8Fh4eXxhvmxp1msckDzckieG2Vrk2TasbvuFA",
  "key31": "5er9sCLahf9bNZsywK27sHy8KEMK9ez23C7mp3octmJ4wzRyFPnBtKX3VVvQRqMfvwScfjoV3ByK4FkT59gfkaHK",
  "key32": "5DPwZdtsjpQQUKWVeMLUrSnak6rLDSaVMnjHT9WiDmccfHTBFnwEtuM7b5eeGz486MAMqaDJzwqbjXqht4ekT1tP",
  "key33": "Cj1zKKbjzF8QifjzC2reXAfX5tV3kpDVVJMPYJRhNAaaWhUz5BVs3A61fjHx9XQW8iqeCMqSPwXNsyd7iw87ebh",
  "key34": "3YhjMEceA5ht7TjpAiiQLcJDRfYimuJM4sYFYntMSq4YPz9eBbQs89GeyN2kNHCj2XLTNPYHDWEuQhoJh5PqoGn6",
  "key35": "5Ucj8zyuxXVDbMpyYyZL8tbMAgDTdzBuz5AQSEzw9JwbBdVJ6rPaBXD59MFWSbMf82Lv6Kdy8b9vPdB3XKZ1prDj",
  "key36": "5ZMmxmWz4ghYGt7j6HbjV8dQtohUDDCg2tPqapSNLp55BtS4ZSFkcth3HY4ePBpNHJdgLmd1qXhikoTbX5xdncD5",
  "key37": "XTd4iyuBYe3ytEo2ZsqgcgbtKNiY6hU4NPo76SuwsfFQzfqe1S1t2vmHqQHgXb4rBeeWubZDfESKEQBxyQn2L96",
  "key38": "26HDG7tpWaTc24sZRmHm7Zw6DRjqa63rw5VrEFMrxCTjCFNXLK5hvJ33d2swXBxM4AL6uTTYN2xTAfddQciEmnWC",
  "key39": "5hhJCAh8jkadZj88snSoATVqkuzGJkK6tVvFvXgtujateY58JYeJJiHje5Pa7coz9dr2TjgwqdZgttbDBEcwLCFf",
  "key40": "3vNauHXpRZMLTcCGMsG8TFvo2ZvvuchxQwsxL8q5JHZw2d2SaMh3EjTkBtBspx3UYGMu6SFsq7umbnWCwVeonbNE",
  "key41": "4QPnYe1UCHb2is8AH6UQ4dnXb6L68wDHuaxckjjNkRt4kK3RJGQo4dTPzJGLq2j4XEJVaySbmGE7tLK3RBQAvQEo",
  "key42": "5swesJNLYUp2XfLbUMyzHgVSTCpZieLTxsanvABNQc2dnH9AWRLMve9CuSMiWAfxWogEBD56bgRxXvUoPRF7HtHd"
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
