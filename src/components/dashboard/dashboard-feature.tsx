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
    "4x4RHYmLqh2KBmeZUesXXHi1PJSwDzyPUp5zr4j4b1s1AgX5ggEzZDS5prajKmmQ7KZUsxPMs8zvxcdf5jv1Nk9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nx3iXCjAnV3GBETtBVxH1XU6zpqwZGm3JtQiUaEFspM3xD3kuHv8ZzKxP6rpF8NdoKhPA33UbSJcvQGnBZitBSa",
  "key1": "4qmrNHVHU3vUJrnXgJY9vqGnbk7byfxX9e24nw7mWis6M6CaJNih5hkBeC9MuuYV6hFpVpc6x8rcZmh1GgkTshRo",
  "key2": "4w29pXVAsGkCJyKXv4wb4o3cQVHc7MrhCqacGNi7TzgyTgvWvTnvzVtdPH4AopxLKbRShUzZ1x3vBzWQX8RjhC63",
  "key3": "3aX4iyGn9mdcRqNevoZzKD8dp1MjLHf5rVBUqh55tWYttRPS96fXxbNadngGvKwMLs8mQwFDua7sdPi3kSbtovG4",
  "key4": "Pkw3npBBfo2yxi23tB24Yuzd6JRjQaPvPZJXqp6hUqzBSbFy5XMXaNYtpitmq2L5bgsP6N2h8Z184u1fTyiHjxX",
  "key5": "3KnB9Wh7Pu8NRuT9S86KhboYT3WKQC6F5puLAwSrfX6EZRV7wTEtCP6d6aZYQg7FXULqk5MjAZom5PzyfZDsvg5r",
  "key6": "5RufuwCCRxZgKQt8wvVdCzcwm63mkeoz5FYNfpETHNLowz1LyfaEh4rBUAdGfNfSLQF86gsdNCyftDr5maHZ8htS",
  "key7": "nrwnP3W6yy5dCMVtbjBge5hii6URtQrMYPrK1DY5kBiGzrQnDFCwiR9UdF6yoV9U2bcA7BtX1P73qVRWq2pLEac",
  "key8": "4MLt3uB8n8ZtUtFJPHDqWjDAJuMvmeTCeD3xUMoM84K3p47WK3VEeTm1XNvXfwyZTxzryhXebWHrDAHaz3Bpfjm3",
  "key9": "46mXXC1LGes9cJEqGvMDQNifXwuNW9hd5WzbQSYAiawYKQWRxtBhqj6qGWvWog75hxAuchk69ri18BDHCyw2EZRk",
  "key10": "gNc68uzTwybL3P5wYyjSettLG2EWp529BhovyLSEhLtcMJbQnjhDMnNS1qkPSAm3AkNAJak75poCSRdjWZrL5zo",
  "key11": "5U9hQadReN2oc8KPPtq31RhAcPrA5757UPmrA7inNbFUajqyr3ytE91oux9n4k9GJY29CcbLBaktH64FVTuzZVs1",
  "key12": "2pW5W8zoEchHHrgwdW9pjf7oyy9MfBk3k1hpa81kFVGURQ39EfJsDSvmCGCkQYnwhEW2Ly5HETxwD7XMfQZHtA9V",
  "key13": "4Q7WYTHh4kPQHkNgz7FfXcuQzsPPpVgZXmNSvLwQjKuT8KT7ygkJgqnPhCF7wcweXPej4PJ1y5GgbiKpLvYfKDFQ",
  "key14": "5MkAVXG33Ss33uvFh8u3cwJ9pNtBfeu3FqEHFZjAsNHWfGo7CLyDNqcFUAe2H4FTyJpefsNZsDbRoTTLaYcByDet",
  "key15": "2h3jk8K1hhF139uy2ehYCnscy4UNe3ZeLmvm71WHWQfaye861sA2FXYVDdJVV2cAAFLJfFDV4mEvWrkmNGgrBx8d",
  "key16": "3f6UhAd7U8q7rHFFw1uV559EZ5iakkDhb1EtSeBJfvAaWW3M2iKLxebnYxyZrd39YGZ52yBWSWXuRXf3YoQjbZBA",
  "key17": "ZhfxodhMnkPQXCBbNZ73evhLXQmRqLCMZh1minQShB211uL6HB3CRzXANVfWphwYjAZhdhEterCEuvFMFZB6Nsh",
  "key18": "4g7F6oZyM5Ep4TZ6k6KhgftKx4GofAMCKG9Vy3b1BwyCfcKqXuofqxhG8MPJAbKx6vDdwiyEwPtWzfY8a2HaDK4P",
  "key19": "5ozbbcW2SBwY9Gco2G17w72aZxyKuT9FebLT7MvnjYcmpsZztw6gMULDGDeWMMfrNYmiCZu2YsHiJ1EnngTjX3R",
  "key20": "1ZTuKy74VnnVb1epsSfuj1zvbRS9XA8ZbDTA7nPqoqfSTJxpNFvWp92xZEqQpHzRT3nP8dpGbFoArCGHXwE1tms",
  "key21": "4GVBXWMn3QfZzFGNukauD6oEFbr1qp5QyFD6c9vYzih7XGaRM4PQRmrpLC8E9PZjCFWvm6vfWdG2ZoWC6ySc3kv6",
  "key22": "TNWWARk1xM6TREWeFw3VKHQX1YLQC2LoMaRtLtUTR1npVA1j9syW6wZLP33UhBZvZwedY84ThHTsadC27uUoKi4",
  "key23": "2dSGMwMPAB2rddDDdfoc63TGV2yU4FcuUBQj6QytKKo4rqcCQbxtWVdvwMqP3bKWT6TLQbkp1S4ZG6UcFE9Sfi9j",
  "key24": "5Mz1gjn9awtiUgFc9EY3mW68CkX8GuqNHPtp6ZW2T95fywDvdvpQbKA3sy6juaxh8CApzcm7o4jxpoS5XcJ8kcZL",
  "key25": "4ooFenZyi55B9k1HnmVnmyieREFBSuqSE3SA1tHhFHFAGsMdxcfQde5N8rbfeL6tCJba9DmutjVGzLAs4GnvdiWT",
  "key26": "3B1oNu22MBZgbsX12pjYk8ANDVLxtSvQwSr4huH4sBwCgjgGbtsTwNhG8pEE919FMKFLg5a4HYpZ8yDJgt1dJgLZ",
  "key27": "dJb7mwmrKMbGkRWqr3M9JhzyQvK742dyvwdQ6pBbHuhRfaK9aGHsWXQ1FZFNWBtVxuM5FEydNpzeNHMmXFMgKTB",
  "key28": "2Rteuh767YDxEDvzcMTnvBy1bLJWsBchh4hd2iwihd1SgyWTn9NV9is9LKvoNosKBdvMJybB4wxQvoSeSjgnnwSY",
  "key29": "2t8PbmmHwQShWMVdXJuaesihYA8ZMLJPZwM3x9ePxhT3i8kW2X2E3r5wCrRUQCHjnykVhPJRfbtkWoMaTAkKsVtK",
  "key30": "2ew4AhTTfhdVpqGvfRz3zxdR3buVhpC1TV1e9nX21CuowASuNzAurfonRhvrVwKVm2bgc8EEho4L1aDfKTCDrNPw",
  "key31": "4p9Cv5TUL7wnK7xqjfFGtYxwvLymt4zmmbvnY9Kz7yghKqRFyJTWjBXE8MJR9xRSaikku3f7xaJSf1s5iYHVFWRu",
  "key32": "4X1Y6nrJR9opVxg59RriwSSje8vt2YkaJNfm4h416YtcviRr6bK2xToHoP6UqzLtRXxRjJirGTJ8qrDCoFGqF3LA"
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
