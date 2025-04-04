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
    "2eD1Nahm69jSQ67oPe8uLr1VSRxhGruqSHvWSiELQKu5LCnQcqrApjMf3vYGERc42G28zDNWSiLwPF2VnHVXQvsx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m9uVcRV2hjFUCi3smrgSA2nBeTEGQXhcWXd67P7nA8bXZr5sYHeEwNWjzrh6ngz5qWqBQhSbbE2SUn8bPXt6aF9",
  "key1": "2K1vkyCbdeN8w7VXEhMjBjxDYxtfKjbbN4SfwJQrnxqUSVjF2TaXumKSAZkADmbX9yQCfvrgnJdyhEDqS1qZUAHA",
  "key2": "JedYo65ErrYuPqTz77QA8ZSKiQ7TRtwD3HcHyPY73ab8k7RzrM3ezKWA6rtZLiPmGxCcREvXsYrfhA52KctNGjR",
  "key3": "2jzN83YGWcJr6Vur2rGUD2GjzYhonhKvNyaU3pBev7utvVnGGwxDPrLRNTAxcz2Tmchg2ve8gXYh6GXVfsyxrk4p",
  "key4": "4w8PcXtgDa6T622RSmytTnrGniGpeEZ6BQVfWQg7pgtTi3wNq23AoyKGwAyWqE5fwy3twexe2yuM4ooau7MGpWwF",
  "key5": "GDEpQRiWsK5vY69HsCZLwys5aFAwtftD4niESYpf42vXeuM3e3d5tqaukJzTewvxHeTdwrZ7uhMQRhhCqrMyiBL",
  "key6": "2xBSLNh9G2fuFLAHjELrYg8MgPXQviC9pTE7PxZLh6Wk8cwQv5rZJ8dqBkUTCHFHXafGB1QGnnMnGZYUgYrKLXVu",
  "key7": "5wGEZbp72c3HL586U9TUTYw1cDAAEJ1Hx8LF1DmSygnp9AQrBNafS3NRY1SyZufgajVaU6Vhuzm2xyNTa2yc9g8t",
  "key8": "5qVWwWtW6L68X48ofTaumNFBCH1PeBd2WDMEA566cQVLV78GRVLsExFTQR8HpLsTwmMKdkjhVW5StKpbMFBDUqs4",
  "key9": "3c7izyd16MhSdrV8c8YJfLForMyk6dKadK1f6RkHKSk4faWpq987sDGr4CEHGHDnfwkr3dFjhRF7iM9TnfiemT71",
  "key10": "4ec3nUDVaowoL8xLBT61vUHtJTbz5znj28BmdT7r6PCkzspNMCN4opgHBQF5oygjNwFm5d5YSG6TJbo4oKn3k751",
  "key11": "ZRqaLmdcqVYZuZAZciomuH4An4CFDi5bAy16EnvzVVt5pTig8VAuaTvSu6zK2eFEMycqXFWFiHcXNYTCxYRjqtU",
  "key12": "3gmK4jLefGGbBrTaS9GwFSqAed4s1VfwZBfrZrwGwLPRtLSwjunkG2tpQVMHBC4sRBB2HB72CpagG7htKynRfoiu",
  "key13": "2zsCVCMQsa8vA8UJ8zLC18MTxaQN4gfHdNeYGhfUpZHmL9QUPxMqL9G1dge7GKQQxnkWyRTeqfvVUSkFgFNBputD",
  "key14": "4TmFTL55AvMMo4awqxcAqQ7MDRfffz9v6K1oGr6iQLoR3CqoHXH6JVqG8QwCu3JJMkH8v17SM1qqpAA6wnAf3Wi5",
  "key15": "S2MPd6676tmgCqzKXQBif8pYrGVsPkGcdQiT41mj79eFykPfcRuRWHi56fsGgiEnzbM1dg6o2yXyTs8qcpPagqn",
  "key16": "4DkRHvxBqTDWz2ZAi28UwXDBXLEtm7ypZy58PABBot7DSJYxcyzyVaHKP34ekcocMC5BVUU68o8RYLaAKYY7BEco",
  "key17": "2BtJaPmbyFCYNb9jfYbDG4mR3gyc2kGq5X6jGrMZPmDHgiop7hyX562abw2adTHeNmBxiZNYBGWCbKiWqpYYLBDz",
  "key18": "5xYcxwf7D1wZMu3baLBeKHADx4v4gjzRqYiEsrAyJbFhBcXiqvjztQRXCnAYgqJVj7vrX3sFdAkdEuhpvBUMzV6s",
  "key19": "2PPMzgf4FE18WJ57pAhh9MRyrreTLFbyDS2dhwfXqtvWCYXcvZGreomm2zpNz5BeNtzXaeZVkXvoK4CXLjfJu4TU",
  "key20": "3V9rJq7uhj7T92v7znLfrYQAwF5XnBgKGNUxj5zUve45hGkvCPxru4S5yjC8U4ZPAZGnbZVBAzYtYnKpV5Lq8LDf",
  "key21": "23zQmKT9DW7U4iun3WDesPoxzQRo7CRLyZD6dWjQQJZDWkUuFphkvQZWKVd5to6jHRQ7FT55m6xGyEPKrtQeA64M",
  "key22": "4DpVQMNpG3g8GB2fyCZvppYMcvacAZXwVSp4H61ckx5M9Ah8QwDgb8xjfjzrDsLrgSkjyvp4U1Pde1De2foKHtRV",
  "key23": "31MjuvBxMWkHajGNfpmEWqBZpcamSo7ENaknaF7viRJPkN68Zmk6NyqjDmirLyn5W1atBrr3JYGSuUKHgR6yxqcz",
  "key24": "62ctvwYhAcZqpR5e2RfLPnzCdAFQhA2rbx7M99kXAeM1PUjwQzQ7XYt5fp3LP5Z4iJTE6o9WhEgVjLgWXFQR1rLQ",
  "key25": "3SVm2ruBQ2QxELYjnGzrgd3uHpqjqCYXYJ5uyAVFSfWv4FrHXN92PVQjVoH9EK4LgLwfJUdoTWQHFH4GgxEC4qNR",
  "key26": "2VfTdS656gzpC6ocat3kLgfNrcmsTymf69h31UHekweLek8DySP5X7oobYnwLiVCBVRrVYRVf8sUBUNZv1VsBnQk",
  "key27": "2GBx8JwDY95dWFkfkfiYD8i6k5ZhKdJHZeNjgrhVmfpawadPAAEe5jaB6MhTrxuoYgUSD1ZbGDyJFWRaRqgZZ3gr",
  "key28": "EQc2YPoyvRPpmeAdBGyuLisn4KWGjS3oezp9PcATPexFY7dThuMDDXQs2PppxjDigaQyjJD18nsDsaJprzRJorK",
  "key29": "5Jp4dgGXH9p2GKfFTFNF9urYi3oKBm9HtvRdNNXNH2o8qvhn84od3oHLnfsUA6dqjfkCp1EwT1gQiDRoH3rwtsEJ",
  "key30": "4nviYfpMUNNQyTgWpTtXq9amh21PU7g39nPZ5nTdKxMXhF5Xcx4eq9mUbUt4pP5worfHAPs9whdMoQDJwhtSZ3Ln",
  "key31": "3GL7A52LXPnEsL3LyzesYRrUWbBzHky21pJ6zcGsYaiHWaL9VpnUbgqnqHtbgjbWjrpdvHD3JxztwFHzAkG5WnGy",
  "key32": "5axv52HJVgjsZwhWh4HMsyjSSdfCHHmcFsg7gq575gexVNxin7USYsPgeT5p9PtJ1f6WR7HUgXGWvGLLpbTdT3R6",
  "key33": "2oz52G8HoHkYNj6ETVe1rGzco7JqXCpUjszTqLFpStKRmBJ5gxwzUnF2nUXgSn7uBFsDUp2UsKinFT4j8JB4KmAM",
  "key34": "2jKdfbodWb92UL7Yr6PSKdaNdwQXFkthvipAfkpWL8PNZ8fYFk2xwhkVYWNvY9QUoJPsD6zmzQ45cpEPd7mi5zG9"
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
