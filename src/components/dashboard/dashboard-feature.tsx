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
    "5f5yXgKCVTYrg5n1PL5LxAb3wosSnBz8tN27zqTY1XRptQnozVfy1XwTREorQTgBN4fBQKLAC4rT36CJ5N4Easb4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CPkBVEcroS6V2n3H7fHfoTR4dFqxhgx4LpAm7VeTD6trVXAPiAyk77RpSvpPPpZ2iHu7VaMnb75AVkhYswjoepv",
  "key1": "UKT2Ngb1Z3CyNLffeBcmc2MHKi5qawzaPQefhdo4r8jy46rHoMp1UxWHXS4VVFjw77oHsF9FoieSjWdrrMsGnfn",
  "key2": "66ervezaStikS2zHvfi8hq2fW2G9yynosREcrBtAi4UnWjCcNDS9NznZSZVcV4a1Rno8KnnY329R47Mu8jArxxbK",
  "key3": "4W98H7dnBf1ZDaW2qRQk4wCxxdSYodTwKtENfqBH38kF6A4pMb8p1jvJwpmkJoWWFE13n5p1PV3AjnnhHer281Un",
  "key4": "zG5T1ZCHxWFg7rN7k6hExzrfjF9fHpv1RXU6rcX1hDQ7dX46Zpxk4qhRL7yuLdWf1pnsJDCgL4Yt2i85hXJsgdw",
  "key5": "4n8zsk81woMawQmLJHd7iXiGtrxqSk7HsAwF7wMyaq4W3zZRxbFpXBrJB7c8oUQkyQD4mQUFU3Kr4d223N5y4Cc",
  "key6": "3qDaf9LXedRS5owN8dDt4dwJK5yKzmg1mLN1KDmXGcEK5GVwcqaF7fZgznxhbpAqEcj46QGhbbv6AtNwT71GFrqJ",
  "key7": "7Qb2HXY6XBFQBiftJ3TH8Yp385FEN4HbXVdb1XmP8xGAfMrXpJJ9b6nAXC2PcLaAdK9nZTGAM5jUhVxnXQjSxxZ",
  "key8": "3837C5zeyR9nrxXSpu5da8RBFSsr4hESzC57obPPWYZ2tZfXTNDYmEDxuxnFUoJQdXJ7efNihJALiEyqXgyyKvzm",
  "key9": "iQWgR2TeExicBstf1NGAxY2iKkrZAJb7KT2w1K99ShPxBmUjp6cW4xhgiRauyNT9gj4WdXqYNqAYpS5GbLAu8af",
  "key10": "4YuLRV5mZoju99hoY5N4arfUCdrb4xWbC2bjQ1s5zGCGmnAAM3JKFS3J3WY5JdwKXfst2WAkgDvyZ4XcQauP5sfD",
  "key11": "oVW1iQ39gKcZ6CEyPnHUqPBkL5NYjwwXbXeARWqLWmCKmgbjoY9qGtfBjY2bfnXtqMm6B55CgrvSrTNN8mHiGoE",
  "key12": "5u9FW8MU1ESszjkwDQ3vqU17T5Z7ZAi8bw7UcxNYdcKeGoexrFBh9ZZi2WF8jWBhubJjsfoUxA2TCSHsVUdiCkts",
  "key13": "44nerX3XzZrpNvsSaW17rPVmbqLLptoxDdDy65tro7T9Xej9veak6HzvFAuJLGqS2ra5tPfeVB4gnbhwQForRcXZ",
  "key14": "5SELDGDf7HMngUEePaoAiwxX6j75qemsRx6XB5ByHtENmicK7Fyo5H8vjRU2oB58fkjm6rHTYFdnfrjJeyZFKsKa",
  "key15": "4Ve79rnbTu6HqCa5aQPszpyNLzi1skvGCPoJPsynSYtnK4hAL39TJVQpLen1SKp6z4pQKnMkZsC9Gs4xTdQCKvPi",
  "key16": "2RU98vH2Wpc7WCchu5La3Fyusyo9mBWNzghK7qpURaCCj87NmqD2fUnyJ1cFXmtTFuyHVeMNT5ArXYCtwrWEcfoJ",
  "key17": "2KcRsW2rUYWL5YLLzgow88yzqfijCJBZ4m5mbsbUGfnmQDMRfGjEK7Xc5jWPfACskS4MJHvxdDATbMd9NuPhLXt",
  "key18": "28TX6XVinVmmhYzVv8DNJc8qUUmxswXrDgF3BGWj6kuGzvtYJWPtbci6VPrZdQLkDJGVZ1uPZzjYZta1JS2LmVex",
  "key19": "41Lz5jbz4yZrtC2qA5CRKNVMhVsZWY8qu632PdWAAvw5jFbEH3gNyA53mT3CfuDhJheNJeerDSoWQu59Web2QaZG",
  "key20": "4jEMgnY32ShsSXWeZL1vhsansGeVe7zGWyJHPoxbHwpbTZ9A37QpQ5NbgdJ2okVFKVkfpkcBXjhuM3LbzJ4yS3js",
  "key21": "5vMiSVGyLpaJtvCVF344RU43D7n1YQnCWHRP6eAnJ5zQKwECNh9ndkLegrhy2iYWijdb43EayXKCgxCGc2HvqrxC",
  "key22": "3vodqZFRnNnYpqmF9vz8hFko8eiLViuXfb1oZTpUL3zwee7LjZAzrQNSLgMhAsLZPaouK54dyGwxgcN4Awh9C5X",
  "key23": "pa3vWRH6uQBnwwin6teUPHkTyC49DxUbe4AQ2QEhgyxduHppkz5gKfrERJ6cz4EyXdEn6q5NJeW3BNPSZur2WLG",
  "key24": "3AUpAaRuvv3Ri5jvh9swkEt99FsFLLMhW7P5orXQ8qmKgZ8EbMCs4ys6982zV8sJGeSHqXfihJX28CV4Z8TMAWwc",
  "key25": "2kEdfoBinyMxqDmxgXwgR9pD9FYxf7UFTU5ogHmWPuRbDiP6gpLuCaP375doqE7WHSJKi3n6EnzrzXagi7x2YVsF",
  "key26": "2ebfizSihNQVR21dozteBYoB2Ex65G2LjtPtvifBsfPWcUPRWpaL773hrkiAy2FPEhXA3avtpKByhC26ikHFWFdB",
  "key27": "4RarFys3v4HnbVQb2T3SYNQcxUHDGWjEEUBJETLXP5Bh6XMHAzrMDw7Yz4wWh2JanQnPye8y7G9Hh2qHJeWwVu4b",
  "key28": "4EcErqTZb7fscrj72WRRryeZttcRng9RKofuiYTBzcfctigj6rxDzAgwkamXAyEcJ6CcXfbtfmzeEL827RHXoiTu",
  "key29": "4sj7B2xgYKAYgayJyqxG9CcxAEECkuSi2YMNHzUorh5ahfU6HYG2KXoC9k9GeLWZ3YiKkntjKpuJdENDsaFgohHo",
  "key30": "3MNbYjDULQNPbtjUVMPPY1DEBcNV4pDb3TVcFxZ8dCJ17sk99usJ3CPzVHUKT4A2HbUVGNUGD2zpmvdVwPoz6yf6",
  "key31": "47G1qUmGCun5SNT68rCbWHnjb1P326NHTYtfSFnE15rau5DokTGhdJMrNGnpJtnhY91bwkNFdYUSDr1mnmBH2v4A",
  "key32": "2GXQtzbw9Y3ygaZMz1fg57vaQEUUrW7j5YAmS3YHcKKGXVuHHasWScVytXJoutjohEdR7ETRntLru8QvHKH7sMbS",
  "key33": "2jeBNkEdKJiLCG5rWvbj3rkpF7zvoePZRdXgtHiWAaCxcwfLw7row5nmKT4ygDZCkSALkRe9nKdJzCfKsAKUt5Ji",
  "key34": "3frVcTRB18o6Z3WaJCZPEkXtkRsocgXP9W37PoqEvxLpCjZo9Q9ofPKzQUfwvyPzdnHKgSWN26baYXrGwBTQqgVw",
  "key35": "5ChHTJzDiet2tEEJFxeBsKo9ShmUWpJYqetJhsxCjDzDp5jpeadqmMz6TWDUG7J85KZhPbRidN8PweJ5niDNmWB7",
  "key36": "2Fn4ni2wP58M7rngMSk7N5dryadJC4QjvDPFoEskbKvg84nYZFq6f3p2VhFSHjzr4ochgVJJJonN7ZT6LJvtugag"
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
