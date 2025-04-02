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
    "Guk9p4MWdL4iqYsRtrxfkWavLGGvVwRb7vChKZ2Xd4b8YaMWuzfLc98tdvoxYEdWaebPNTDE4R19LyL6yoL4p99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fAnYtTNvt2bdrwgohtoQuyK2RMCh9zzKaajb6jgwx8FLBnMZviP1KrVmx8Gs3ei2yB7gvrwmhLrYGxvEvv8b6gW",
  "key1": "CDdbNL75anSyYAyWDse2mqhnaYnb7zQdzmKP6u6ZjR8woZAEMzVMG7w9AyowpQ2xM4DF9nNFuFhULHy62H5rmdz",
  "key2": "3m3uKzs1WeTBSofnvocSAEYWrV2kJwMXg6Joz9TbqW7d4c6ekLsNMWCkSjiJH94Tti3VLBYeKAJpnyYZDToRDMjs",
  "key3": "2GQis4J5N7tqUg5uYZpKZEjNPXvBxB6N3FZvHgiXHMnZVDCn6qBobBx4Gp2MeFvb8efchxcUNvmPLPwBoChAnBev",
  "key4": "62kPjC9bnVWjySB7BsZYS8zNJmSHAKxVNRfarw1gVdtrncKxg1s9hGEzHgJyMXkx2DYEU1RjaLPjRo1DzP1ZbZuQ",
  "key5": "ieJYvYeFUybQBs81yFNt9pv4kudQM1FkDbeRKJZY91G3AG9JkNGUEvVXTr8T61Zqnzyjbe73HhMCz8z6oCbQmhz",
  "key6": "63pZbCsuhdkt9cgMKSRqS5rvgX9YMp36ZDMT3vT3ptrkyU78V1GQGn2SphZrg8niwNguS3MEeWZJ6wrwiSeH949e",
  "key7": "27mvE5Kop5SngXJcsn92niPFt1HW6U9cK6yhj8sWA7C3jtrpYZ8j9Dud33aTb4DREKZM9BhdVfu9r4C9RgUjK1wN",
  "key8": "3EKeLomLDoK5TCc5akKAAyHUTW3ZKok4rYbJVRvDwzG176Zz5L9tQaTSFkTgTEqbCH7g7GGhhcQJFXsRZnBoPm1m",
  "key9": "2p5UJVNmN5yuVn1FVshN8GHp1dRiKvo758NT2yCcMKTak5yNpWRi1EFYHh8PLcKUxZpXFrUWGsA7SpJrHahw4Jtu",
  "key10": "2NNv2BiYd9ehPWXrqiVfwvhQTVu3S9Scvcm97hhjZYB3gMdQxtGuA2GBPaGprKPXC3SJG76zvCScpBLcTbDaUwYh",
  "key11": "2kVoHKBn76vs5HBp3zTWNuAWFwLC3yKXxQmJdv1Zt3FX43YrQtDe9zRVtkABuNEAYfVAHjBaUA4ZcxBCVnA6jmdh",
  "key12": "4sBZWUsxBrgmbG6z5CYGohvTUmmtatdiZBtDcSBEWNYVu8Z22uJvgz2nb41EKhqjPJekm5WWLcJYFoLogTXkyPat",
  "key13": "3cyWYrBtArE2uNEsEpfQSLFg2wjB5H711aZWD6WQ5iSXr1fWe3oNGZ8DDmp2p1nKGLeVt8nyzno6yDyhi5QJd1nY",
  "key14": "KvwjF7tAKazCpKC1Hg6X8ey8aKZurD4B8vMAiGCn86Z5i3nnqeGHMtqpYBbsFGynx7ksGq6p21PBH3B7cVpsfeg",
  "key15": "5TSyFS7A9VPJePTVUTMHYkGMFpnFYPBKw9WaDa52tJkdAP5gCogoWqa3SktDqTJnoFbSsCi916xq113RhWJE3Bes",
  "key16": "4kLw4zzo8tkX2U6JuoowsgcRV3M95AxFGuEG7oNmvyyJt7XpZfzxRQhXJT4ihPnHAPkm9wTVzphyFzkpSNe4WJAx",
  "key17": "2yye8MGjiBRYhGpEwetGkb7PXj9uhixksAXysWcTeUbwhCvX4AgWZprHsASMTfgsHPfYDfQVEwVtjYbFFDroPvpp",
  "key18": "2bZezrn3pL4d8J6BBxoEow9zK4fegq6qv2yJDvME6TSpMA8WLGHovYkNK1Be4tcbvHstZKBZSEbZct1hLisGEZQd",
  "key19": "24bwBgB1q4q1ZTDZoDDqavky5UEWB8gKLbZmFnsqbbro8hzz9gucwdhYbmbo9TZDpD3s7G9Gwz2KdvxkWTcWW1yU",
  "key20": "UAWfbHPRPc6qFHyrVpECAc5CShUeockTNp1heLWZ8HpvsseRhwJVa7PB7jvESLoRaKVabXFECbasE6XFR7yWGPP",
  "key21": "2nuMXgHwSqqyXNkymeWEUv3CHq1enzcqcYwxzMCDSPm62v16X4k4DhP7dppRoFEAigD6UZ8YnL9jpoS2BCXG5RSb",
  "key22": "9qWPzFKBbzRBKXt31K2LZC8nt12hq7iDUTcVoMuuwgM93equRNFATRMyEqNKYsL2Siqfg4dV7yvJD7nXYW1JYwA",
  "key23": "63D1wikk4uLnB5fPLj3zfuXVaMjyY4dPLvQvgAD35uPPbM28sTqXeWz3Wr1ZqEk797KxyAU9qsRUX4xUe6syMzTy",
  "key24": "263qbwF31hPQbPajxEFhwb2ohiK69PTbHdB6K7P86WWmbhiDngB5ewFNoB2GwXXW1aG2TQL34oGJ5Giff4AA2798",
  "key25": "2PaKVxXyjHCxbdNsREyfreXv5oh44zhd1FZvCkpTTGxyYn5ToRvf9vDKNPD4xqXFgHBExr21yKPCCqx5KsVQcMj6",
  "key26": "4r5JzLgyMDDEdMNkxXxZjVg9oKxLf28PbygLZbmkd3AKNPbhY3kH3cL6MZgyubnyDHLErP1NxjR56BHvJFLez7Hg",
  "key27": "412T7ytPwedFLSACzZmiCUz9PzybV49tjVBAYk87bt7kVhaKKtQCPCmWM6TQdGpobTdgnYrS84Vyx788qZQkL1eN",
  "key28": "3AbgxtLrCennXpBZb9LXLkaU446ikjqmKpHmRboQ5juqK1pieN2QkJSA9b4Qktwt1EVGWvNyKHxhr1z86DieLGty",
  "key29": "67Lx3YaWghJAnYom91VfwEEvASzJRJ1QPtZBZWZitqYChUhKw62CsvHBKkm5v1reEUK2kTicuL3PLwvYj7CcSHWs",
  "key30": "rKYZZcMXhzbRDt5vRD1tUDpPz31oNewHmR3zEeR7t2oeW3hWcDsUmmoBT2cYdi3YwtnPmqFWsefVfNbcJHVLrAr",
  "key31": "4ARLXucuD5KqPhqPRUgRCvX1GuyMGhw7RupUVkWDWpuVyyWeQMnF257xKWGBZUK2CZmd4ty29gm1dhr52mEztmGN",
  "key32": "4w1LYeZnJy4wT64PJfmvkAA3C8a898wyXb3usdVjvHuSptJBBSnB9BQ1DnC1eZNrJ5idisC8DsPt2aYZcYzLaMRn",
  "key33": "3by2zyzrY7F4DQeh2rHaXFwgftgWdQSXqF8PND5XZqVhpaYbM2zWA1A3ck4XyU3QcbTfQbiUMPzjL7QSYK36RnLx"
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
