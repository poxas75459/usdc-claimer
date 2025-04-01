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
    "39HDpSezzEuADsqm3vtpha6WzewR5mz2gZ7dWxwgbotGK6cxWcz92bV3sZA9eNHbxX7aG9Xt7Kryh2mmJQJefZQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PDuuqVEtTcD1cF8dSDnRXoGSNA9iaYiDZJ6v8CDbPu7ogjjUD9ki4osPAGSdUMZnRCA1iNyUExvbtdZfXx3z98o",
  "key1": "5LpQGvRRAq1g6AgoXdZiX6hBCwGVF2pjJVVneHtXxhsGWP9RssWpn7HWSDE9iWysR4Lq5iCuPo9uooasutn557WL",
  "key2": "5aJLcjCfZcispE6PZ2phFACyhTnmZF4GTZgGRdM3iZNQ2hmhREj2qPuRNqWNB7GS2gqDdPPSAuE67nHXNdnzkTdY",
  "key3": "2WXWMbfbZZgwcDpMaesxtVexHNgoRbuzFDyruKGuQEcjphCxduDjsKzyRrt5mZfiJBo1SWCkDUy14NCjMa1yLMm9",
  "key4": "4ptqu5yRDzRs7FtGvh2xVteFcxHG6mWKXSqv1mfkBrrr8iGhPH3KUiE9QMtsdfkT8cadKf1ai1Ww3tcaaj1e7uWq",
  "key5": "yu2ZybPzM48PbhG84C8d5HcXhYFLjZPt89zMdZGs22fSiTKYepL1tZKQbP9gGuce7x5BJ9RMdY4E2yPwGma2zUD",
  "key6": "5vqkb49q1oNxyeBiwxSbD6CBEgYRAP1C8mhAHxG6iFsae8VLPev54dBryJBxsjwbUPGGGBSMcqHnGieLEH28z3zE",
  "key7": "27okatLnrR82k9kaL2t5zLXx85JaPe4GfdE6wb8GB8GrVR6rtzJpfiYsRKeq1cQ3BFoadhYvtPJC4tFvXgWSCcqQ",
  "key8": "55EQkgZXqxK9hnksw9Hd6KgyLZD7pgaZnMMYos1BqJdf6fPZ8Qte3oRekBerBa9TsgKvpj9hxygKNuCAgWVVFSUC",
  "key9": "2xo5jTbDXWrzZgsTQ1ZraLUAvu9tWcLBvzgGkQyp8VEZdKxcuiFLgkfh3gsMgGLEAix9Jk57eVFhozh11hDMwVdr",
  "key10": "49R2EJknQKwv1216UsUN37WBWTbdLoXJg8mrc7RrMCeridHq8B5dhUR9dQ5UqCRvyC6yFe2aPrawyFshEdN7MtF5",
  "key11": "4E23XdoMPbQiDDg8z2cUKV7G5Zrgx2xL5pijSFdtFeVCeMKGNun7yCvntdW1ob4U1CSM1zDhGBf7Rx6n8zVNuG2S",
  "key12": "4ZsziLPEqLYPXuFCKT91rk2jtmjTgaLtzCTeRz2PAMaNZB6t5xZ7miQnJTDii93oukyPxjqVHZcWYCGcCMhiERYs",
  "key13": "F5xdTspV8d5PGRjY1aAJafaNSuLToa5nj6AhyzmtyDjEFP9cwneMAakSneaHaQe2wR56LR7W4GzbUcQr1zzx3v5",
  "key14": "2ZWqCSon6Q8ZiCaX2c4oF5G19qfpwHUS3goTEuJN1eZNoH77d9VDoeY5pRZZ1Lpbt9uEKs99vKyaHaHe2VDfAgpM",
  "key15": "6WcKouVCKwDeMN4ah4Rw59PCLQJx8JMrHGbX8u7EBJuqv7P4R5qcDPTmZ8St9NfriMR6GkuXnBZQyQTu7djcK5x",
  "key16": "3R86HQPUYgQa9H3sxQuNqTTGNJ2EYfzRaGqBQG1ciVeZTjDzDiX4ZpBF8jnrk1tYvsosAr94bD2xHKifb7C6f6eL",
  "key17": "619NzuMVtPPfhCJhrCFzgcYGsroTinEor156c38NZ7AtPfTLH1UdkTsQTfRa6hjKAvGy4vAddD87sgiLJ5spVcey",
  "key18": "4qDEDu94XqQiiAvzPWNCmz9Fg5TswSKgec8qdxsZLj599yiXDb8jmf6akySArys4qSNP3CDmps5jrNSKDwxo3tYw",
  "key19": "2DBZR9sVe9vMqewJVE7cK7q1ZUMQWtWaNEzK81MiwEfaNaR42rbLnsKfvEt3MgSaKn7oA2xGhz19YRpeHABusHig",
  "key20": "384n9gtvwnfMvcbrTLFHV22m2GMTjZB7kJWrMH2kwruq4kxEs181goQfaD3Wt4qRn7rdhZDwDg2BCtZJJtSSXMVy",
  "key21": "2k7SW3yCvopCWiDUHQYRvjJkv6oPrsVFFPjkbHNTATUHFcXfALGay4qxcDMaimFkrEMvkoSQJAmLHB3oJs8u9621",
  "key22": "2uxSdvxX9YfBRkfgaU7K9XxdE2Q4myx84pGKANfwKfnw8sLqSkpupXA8T7CDfhCfNZkpMRuYo2U6gH2KaSDi3Bj9",
  "key23": "44kv8mfs6uAWnUdBNxxqBVetGcCJpPiCUjQV8bYqoCSLMVciBrF6TnnXtWCittFwYkjDXe6CQnaUm1Li5ktzNgmX",
  "key24": "61qXdFEap1gNc4v3R1KszMWfLhrfuGRYor7LRWuGWHLRE3nNZp2tqS3ez3L1LSs4mWjFSdEyTLyNBYH4TfojLjSC",
  "key25": "ds88TkCLWcWfWPPGkkWDpvesu8sZKGwmgVRQuF4JgLxWPugBDeZBPKasrzMAgpHB9bRAcCdFHwXEjss9LYoYpk4",
  "key26": "31zLneY8q5QG1fdvnVJU48x9WztRsZqAX9dm6Z82LrPcSJhBun7KPwF7oX9AsbPHZdv2Wk2rPuqMNC2bmpf9YDyM",
  "key27": "cgDFT2boxQzS3tkf1ixLT6vzXu7QPuwyvqiudvqhKtQd9raApnUibDWRcHcGkPTNTXX5E5Bop3ZWT4p1kPmVbnr",
  "key28": "5xtBKQR1NMhZwmqnFgeHjvhCmwPyXJKjTWkEVEq1hPsnPUKP8DNuGV2JV8RaVxANNfKz4hz7szepVRxtqw3cx8Xq",
  "key29": "CX3t9xKPs6WSajaZFeUPBMiJvAvjgm3cCS93ENVXvBzKitsdZYYUPnMQFBLjxiieqLxdTvZi4BFrhkY7TncgRxh",
  "key30": "DBRazE5BpibrCpS9QcWw6bMg8ZXEDTRNNY9jz6YR1VJx3edMBC1zEr9n4YRHVRGyh4naecZvrk7NQxQriSLtvHx",
  "key31": "4FLUFeMiDqAs9SiwTohq7bL4BQtHDQ4KvzZvxa7dQtJEe75JqXhs65e1nUfpEXUEAA9xh82cLRpoy4DxMtwqNycd",
  "key32": "2K35hprbGZmSDTWTiXCMKMXipi6nqj8UukmQQtj5YsdjviraEUAcbtbehntuh2FLeL7DmzHVofyY1Huhto9VGDCH",
  "key33": "4PZy7RnHCAm2JEnFQ3YBwmwVVWuhUTSQ68Xjw5E5vVxsMVfHGPuHtVdeipvpoP9iD5S4Rr8UuhErESnCvAuMgaQd",
  "key34": "dpUrjyGaehLhK34XaQSLFmfPWznKu6V3CgkYJJHdAbnjVmYsKcTAtKJe3kYyNzQcYgWTec9xrjjRREqaPZEHyWv",
  "key35": "3pjAUW3B3t9NAw7BF77sZ2pD72no3U57GWGXLajRcymjoEcrD9GVtoS5DYydyFCHzvnpLvwAXVLumxe8ydCQaMjW",
  "key36": "FW2Wt52bPKc42ZgrAenw5uxFk3L2HGKnmRakZiBgrFBswVkooBXSf7waueii4GXsJuNze6yAwdtyQgfw4G1SMcU",
  "key37": "3x3cSC168MMr2EfyHxhaad1ZvAhm2NCKgeqga9men85sy6Xr24o6FEytPr2jfym6AJBcT4uYmJ4pP4w73fEbWjAk",
  "key38": "5vFAtxU4KJfPTNwpkkSDquNowvLneHibBZZDAaXVxTJLKD3VkYUCV2o9JpWHKdFuZj9Vht27Wo8TBgjYPcg217Zz",
  "key39": "33WXoKiHTx8UaC8xT4k5yJC5SYSVhcdJXgkeJMzY27UcYZLJErxTFJv63ppXjjB4HHMWVU4Q3z1jQimdFRugJSG9",
  "key40": "4iwyg9XsoGLytwSq6V6CKiP8ECeVyNzgAqA84KbVZ3ZdCe6YrBwfmfiWSroFXwztf9rJZ8CUEDKb92GSgsikRmgQ",
  "key41": "242EDijC79h5q2tzXBAGdXT4mfVZ8N9p8swsBT5K1C5rrBxQoh14eNcuSjidmJcn6bPC8TtUPYaVzcZ51SUUYa97",
  "key42": "3qLY1KH2xKVUNRHKcRgx68sictn8vv2kvH9RPwSgqiKF9744YtP5aUiTforayqyECjk9QkhRnnZfmENZSPZ25L57",
  "key43": "4cP1DEig3k4hHYF9a4hGnjLyQVzcSNsA8bqbAeQUtBNzPFTh2vyWMXWPnWmETY8zCG1Vv7taLjDEANpvstgLpyJA",
  "key44": "24zC1avh3nTCYsUk4c8LmKZtsa7rBtxF5vzCWtuCVg5QGXnExHmqRnNbRQEtEct4L6rvGVoHz7wDFES1qkVgubTM"
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
