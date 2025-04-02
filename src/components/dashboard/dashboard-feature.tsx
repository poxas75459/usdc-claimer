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
    "xoRB7nAwVMrW6VbrMs9kg5ftZy8282qEpNQT2HLsBVUSinQi5t21Lp1Kx3SMhQ9CvLdMWG8b5UXaQLxNN1BknGC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qkozVJarxEvDcMMUgenttPmRM7G3N4K6bSsv9ubwqDk895GnoMYTgB7QSkSfVr7uTqHJD1pWQmTuGTHboLBLduR",
  "key1": "vsyJHcvx2APsXQrmBR6YhKDmmesT6rbq3fzSLUrDi5aYLyybv6BJJmc86ceH5orxW8DTMSv4hhVwf1ViYVbB5qq",
  "key2": "2Stu7TXX4Jp4efexSiKh9FLqYRsdiv2bJLWBHC97b3amxh9FbazjPjqzSMvnNjSSXWcjD7TZfaAF3Lwjd3gX8ziL",
  "key3": "54o4VbbP52pSAuy8AicLC5Ssp9DC9hxgp6auFU2Nh2wopd8J2FZYngdqXqYTukkN4saQtkiGYmD6jtMVAAkWTj8r",
  "key4": "22bkCq8mLVYz3gvB8ZesHuubfJvUUm4ZYoSTC8qYMgAHu2fYUMCdB33ahumkhjMH7QnFNVdoyrFW9y1SkH7U7r7d",
  "key5": "2G9YUgwCFSRpewUUHono8GQtxb5X24TUAknpAdpyjoBtzdTUBkVM1hyEQDMfXwQBwQL7YzWnSDrDiYGz2jw9Hv6X",
  "key6": "5kf3n6nP4TNYKuoU26Tiq3jDX1oTzfeCWs4pbH6uSm3XDn7icujKtkJDw7Pz3vhX1nzPzsGfKJwtxxzJTS2n3MZG",
  "key7": "5kwTwt5NFcc8WYnNKika9K5ppcJxdnycqe68rgko5gfVH3WuojtUMYzz618TYMoN2Z9wD7mj43HoSFnRFgHux8xg",
  "key8": "4XX8jE53ZLLRQK8ehA5rKtnk5Ugmew65YxXzYtwHNazjDiGu3pDXdpT9gze2VEojrhYyXZpWkY7MEppBZqMmFvXc",
  "key9": "5J5dGpqyYyjY3kQVSAXYmsWaA22BdXVXHqtokwbm6fVAv1eRunZZ1CVPUYAuEzypAgsTLc2FKndSfz8WvF2xFjZC",
  "key10": "4dwRBxhtZCjL3mZjEqED7oex6W6j6kfZEQTsjaa1SPpETanUwFziAbo44tr2xxGezayfZu7USwcJSMMyrinQaDe8",
  "key11": "4BKzzLof7CcfRymPvEvLAZ7rBQTGfsCYtpT4dNEj2SUTGiHxx4wkPxug8dhsnSECjU6bQgAKTppGNPyc3gSjd4vv",
  "key12": "2iZtWbQ3HdjCtT5pt2UCKzgsHRgwwhM5UR7Nqdr8KE11b6qDupbUmMzgYZ9u6igqzrLRr9mp1J8QjxruocQbgMFF",
  "key13": "2tvygeGcvdoSJ6ew9moNMVEdAysMREgPmiLQVSkwU52DRRouaCGV1GpZBoCS7iCmsgenqf2VcW3tzYXAfWMVE8kj",
  "key14": "5tSpPBFRH8VPmYjWTUCB7Vx4idFmdJak2Bsy8nQvC7xHSJPFW7accH7F31dJ2kgncbLx2jy6AbShvgZZDMW91TEg",
  "key15": "3Ssfzr7oynxNVrVhrRp7HWBMjBVVonTYBmZqVhkodx8J2P3mbc351BHuKCvdmxvk3mzRjjne7kNs5Cp2SZkwkmky",
  "key16": "3mbAj61tqhwncqwP6TZvwGvYALwNefaFwK3muUaXMNjR8ydTR8ChDnzhdQwibUfbgdisJptHo4vN1SyC1Ab7CF3S",
  "key17": "VcwSo4kwreAt9VWDc1MiMisZUJdQA5jPbUNboEFhvdahquNzGJeMt37cFdaAnHUEAoZoKz4FsdSp37fXZr3i181",
  "key18": "LXFp2T6o3A5iPzozgkpJzqqitZJJtyhbog9cYcrj6T9gYnB6xaawZ3jPg78UsbDbi3tcboZx81ESohBMbLENwQD",
  "key19": "5FYin9QAonS3hMY7CqYfdvtE8wn4CuXRFnsFaQQ5njcNF9LYk7prGoHGYw3TK5UmKWMQANvc3RSPGunLd7MTpnaH",
  "key20": "47f9549gsL3cQ17nHhDEYaXED4U9rYhjMUZWQwKe1FegB6EnEsoMhwi6mYs77vAqPa3HaK1PFTfzUehBXyKcAkAy",
  "key21": "2c7Dss5naPDXMjLX6ALT6Z84ibtS54t12BQpzCe3kiWM5btsAXH6TsyqsEnEZjXDCrmzPv3g12XsPu2ercWoFsks",
  "key22": "3cTt4D4GQufCH3r5vwksCDibo91U4mxqsMSq667oBRXLnS4CrKksrocccCXddcoAokNKpgY9tJSXDaxjWuxfNCaK",
  "key23": "DJorFQmFtZC3W9cKc9u7WzxoEsNP1tmxyYtoxuqjMV1iDFqDnLzDMsKzyeEoLWVUz3MZSkcmKwxa8rqohqQMGPP",
  "key24": "QyemP1eGHmYwzTG3Na6A99eex8jPSNNPvEBNb7pWvuB5ecxEcKMMiCySYLYK1tDFP8EfuFYPZMBt7TX9w4zdXSa",
  "key25": "4J4by9YYrpQt8uNzRYGqK5FxB58vjPxBJrSTiHAkPaMUDZts9iFJaHgsTZXPAYiDTmYTwm2HqGS4hfJBWaosTBuY",
  "key26": "59x1VH6pyfwxcAsPo7dDvjmBZpgfeLrMGTZNaQX2paM6qXn25mxH67BqZWxjAf6CtQ9NzXEwPUTV1jvSEEJ2ZTfZ",
  "key27": "52cjxAoFJPWwjA8K1wmev7nWuVMAGbJXh9FFzxSFrvZjCntpKYkYaMJPUgb9mTc5mKngmvzizh6VHzm7uvQENimu"
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
