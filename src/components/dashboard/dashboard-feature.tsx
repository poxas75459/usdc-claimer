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
    "4BCYeQkxjXaiTMByhKqjJL82sMvB6tsmWu3FxbejqedJF1yC2fLyUBnHoySAmt4AEg4dz8tSnfYkRrMTGMvXTo3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NwwAmBkHritW927pegacA1fangcdukTioekNa9H7iNAUTa5Wy1XvwJMmvPC1s2P2Rvk7rYX45gc2sezmhzzZ4xw",
  "key1": "3UBd3sAyd7abE9uf8vw3Qq6LhPaNpkSaXcwWehE9uYztddYus2upi9tCbPeoKzuWZMxErBdDps7xrwr9uTcvbnZ8",
  "key2": "hh3DvXcjxL99VsWtZC88BcUziBMXKDUbUuxzK9EYsre2i2xpm9wBH5b4g6HxAgEQE6xZSRhgjL7BCxQMoD6Qmvq",
  "key3": "2tyzfov16xt59cN2gRYucpRB8wEFiKm1Yv9daZtLmCDaTnggieuG4c3eoLtM3AqU4k94qQADeLQ1e8fNf6kX3Zfm",
  "key4": "5iW1WfB4d9n2ySRZREETzsM2gV3Q6gSFwyzksneH4m69GmFGh579uHdnm6GQfEpkGK4mWvwz91oiAMPFKvk7JdgW",
  "key5": "M6JiT94jzf8h4SU5hakHG8WNS8czQxtziL4mtJqmTTsVyT4XeEWqiu3AysQJYbap6M8ZnfS46DSQsspqYbNvdff",
  "key6": "4tWvtjRPGtoWafUFBsEddJrSgb3JHHxyVTsYuhLcYRCqN1mwuR2o5feoFf44ke2urBgCcsfHtt9NfB5PEJRLGVyr",
  "key7": "24jWHsnCc3wKuz7AScpZjeBU5qLLPNfy2dTwcNhkuCBm4GiuvrfL4Ry2sbmDDBgmVhvcqi4oRH63HYLv5RZFPRzL",
  "key8": "3nRq1EviHkaJhBFrrWabHYMJwX4pEj33aszgiL6KjWstvdKcMf3bMUPgLQNgEnS3rL6YJFEcadN6BA2GGf58RnzL",
  "key9": "5zRxTndXovTHmxJTfvgdyHVrtsj83FWzQoj9wyyzEqLvTEr8FtR3hoH7kakefV7W8yoSvF3rgLkxBTb1aFrWoTvJ",
  "key10": "5ur1ZvQv3fYBobhuXVnSxZSBNHdSLxBSzeooqdgCygtiixjbXkBJeMWoyfPyvg8BFAzbN8smhtr4VJtmgQgDV7Cq",
  "key11": "4De4sBp8cT3ahUo7PLunoGxB7eyEUQaUkBuadA3VkaS88L3mJubjgWPwJSWKQc1Mxv7YRRMo1nBzgg9oywn5cr6z",
  "key12": "3C3LZLqLUe4Kw2xXE1VKA3MhXVDvAxGqx2H2WVKDjhdQKWMoweT4u4KHAdBZHVGvd58oFoLUiWPnJvnSZ6Y3XK7t",
  "key13": "3CF9Pci8cnmVMvGi2MzEE84QVf1CjkmZhVtZcvqqcvhV6ctxtCDvjwEaWk2fe6k3tr5a8kfnQpETbtpQ28EdF3Zr",
  "key14": "hKHkaaBRTwyFW447zddLzDsKRfWG3tGdZSpyYCapSku3Uu9KJjxvQmy8htvYKuqTQEMzJ7yy7vrvubpivUTZf4A",
  "key15": "5NDqWnxLzeuA18gt9nxHHPcSk4tzZW4TzL4myecE2MFKMDMJthvVLKmvbM9vcbH34KefNEgpdGFUq8aBJid6Xqkt",
  "key16": "5uX4SN5TmWay5nLMLaJLVTXthbtMzKirmXLWgTYb1sVDFSsbFPYkwCKc9sLe1RVi3FUoi7MME2jTTJh1NAiMXPBk",
  "key17": "2UJp6R26i8jKbTE3tbUaJDEWaYG4AFDchXiib3S66Fcdz127MyPZwocW61QXrXiiGJMBm128NSuRowtvWjsc5vkw",
  "key18": "61x8i5GwzwPg7Jvdm21somow929efG5mGbymTeJzTo1XGm9rUT5PJZNz1Cs71hnsXRnXCv7Dek69cU6crd1yRDtE",
  "key19": "5m8USbdybCgzBmR97Cr8JrztCeXe6a8MYJKxPW2dcsfTCPgxMuNQnfwWTjAiUjbFiPc3nkH6kyz2woitMyhbq8jg",
  "key20": "n3bh4q8wkD8zZfqBD7ZNCusKZRHVh1ViiFtqBwMQQ84v4pK3LfD27TUXeYndysJ9x7hjxMnqdxFpx5RDfVcaBPW",
  "key21": "57cvAGjDCobnMwtP5sjMyi5LM3UPDSAC45o4hXp5UJXGNXUXgPmuhEx5qJ5EJ4XeNvtV2zXzv74rbycpWGpNkXYn",
  "key22": "4gVSmpKcgBX8xWJyBEviPZzUjujUPqN4BWTuxpHwimxAYWsXPaYcai5jsSDSmbvd2jRfCBsoV4k1TdmatWPnYaUj",
  "key23": "421sB7SGaByvGwPwpWBLHaRcDziEKeMUAy3u1LcjkzWXmA66pVQyeGVtq2znqQQXxTaSmaZwURre8JSiJiTKhM8c",
  "key24": "4Zi7kqCfSbqGyzdx2SQ3tDoCSG1NVCSGyyumVayBNZDpKMaJH94e8UeNRcn9j9hjQoL3CLrfoxPtM42SnpnY1knF",
  "key25": "4j7T8VQnaCCu6XDwKNTbnVyvDP6vWh6z8se1JF1f9W4WzsrSmWHGj9mtmW79v2wgeyu5QNvmYi4GwwGJzym5izvj",
  "key26": "46gHYUFkRTk19a46cVBb2hGwoWN1SYXjeKFeWJx1bw4cz6gHABDV4inHFtgGDcaqUFw5ZfDbJrgiRCjpPpXFVDKn",
  "key27": "fNVFL4qqEetaWGYLfNRoPBxvH5cBh2EiJk4yPbu9c2wnc9jfY8dchAhctjE891gQN2EhF49cZfSYekPk5QosQcL",
  "key28": "4PcRWMN4LCpA7KUrvfbQnQj3DN7YrkGTyoiZgsLdSEVj2h9e9g5FumLWvwD394Q2PU44VD3kDCNZchmiPncNHnNC"
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
