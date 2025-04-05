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
    "3HmN7V3TW11benwzVqnZpMgYQnEu7uDVvaxrBiojk2rkf8NQ3QbMVHJjnFijAHzkejCnq3uq3iNRsKFs6oEwsXVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wB4ZswN1nfahgvYkY7LPwGwP6DSyYzjeABMAmqDoQEhs9GXJCFdvonNFAaWWH8Yi5NCHuF2DNFqxpXpABFh3qyn",
  "key1": "2MUUYFHVfG39p22QawXCPgUevPCu9fJ8nSBqp3uBqY4Ch1XWp1W6hxJF6jmdTZM2z8D1P2jGy7W74jp3DiFaXfT6",
  "key2": "3zFs4Cg9qSvPsPmXuAryAmUMUmpiYhLvKR93fBwxxMuDLu22DnDtB9ErQbi4n9X7je11rx3L6a3yeipmxYvxaopm",
  "key3": "2TSKzhRpZLyodKvVQcVyvR5fmHcFTLH5Z5ZiY1bCi23UALHLhrf8WdDuJRL2RQTycsauNZBiBGWBxXh9qyxtDGpK",
  "key4": "Gad2gNq4tpFVFtpz31A3tXVAJK3Vt2AKira6jRhU8RVMuQb59Q15bDRwPG6woyiXR87LUwbJ348V6xbCuvGHCZm",
  "key5": "4jQzNS3JbvhKKckcjfgNdBcvAjirpRVXwVW9G3McV8TCwerCNTESxCfXDGnc25FmQ9w3xwEF8Br1yRDBC6bBSCMF",
  "key6": "5mTzvyvYY48tXWrdEVUiS1jnpx6PqChsdgxkEUtCQkArmyWPUTjRjiDUYjMV9gumus5gc4UbiXnZ5nnPWdGjPgB",
  "key7": "3zMB26yfoPdAWaXn6VuFLBa8L6x6DW6dshf3YAq6XXQ7W6gAfyV1VdXwwX6NURXBmJhr3UgueGaGrcTSW8DqCPK8",
  "key8": "3fUmpDCoPNcznLmojrWGJ5MTqvBAS1MR7VzVsaN9SF26Rq1UuGcAKLKy42qGK3ViX21zestygb14V8Ywvk1VWYLZ",
  "key9": "3VXqe1TbJkXTqkUis7yiNpT8rDJw1bNT2eyBNXVCqc4DFvUyWFAYwgMdPxSF87cmNJ5TyXxkkChjiw79mqsCpSdz",
  "key10": "5YExqYK5JuXTLY7vCZ7w7Qrmqo1r1ujG4mrwFfBYMKBkycuxQPCXBkDr3FkjAzj6g316SW2D8BQ2Gim4stXShiZA",
  "key11": "5vHUWE6S1dJchjpyGFPGuPuCupaHUgivXAkWXMDayCxT3nDux4Zxeocevm7bEd3feksJWEqByQLmgwnaeqHFFHBC",
  "key12": "4EdpPKctnmwtF9BQRnDBVjP8gaQLyqoxd1YF8DZi4QzdZU41Nr9P4mp3sbHzNJ7SWJw1x3LLKXeo988SBsJhYx8J",
  "key13": "5SLr2QJYy5oYF2Vkh5X87Yv5aLyJvm9xqfEZH5PUnUqaiKGL1F1BLWY5BRrAUX6XYniP4HtBWNWUtjKEZsfQUpYa",
  "key14": "4bPPZQ9ZYf6EmfHcfJBBk1Z7cuGe8aoyW8ZkstFKYD1JZSmqZSyr63ftRNxYz9ZKN7Nds9V5L3PU791foXjzMiML",
  "key15": "AVA9N5H18arKQb3jqZjE5S94mHRJ6PPkhyVMHantW3qxm4QCuz95AUvGH7tVmzJa8nt2SDV5xHxcfRKySrPnsBX",
  "key16": "1sLeb6CcexcQdpGpWnqeqyMq9p4XoCWWnrfkKRn8Yk4DxPSr72XxrmjciJD1mEbNEVxUSDxrUnrAdfjqZGS18Rr",
  "key17": "5FoxnERUUBiG357HT3ENJouV5o69VAZZRX7Jh5uqN89B4YJRCVT99q31zG7FQhZbv7vysysKGB6pZJdSkdLWPTYL",
  "key18": "5isrR21FwEreJxHJ4HMWe8yZuf2KnL5Ae4EPqPHVaRFau34XwCt8DA8D8Bnx5w2ekU9EMW4M3WwDdVBiGd1vhDEh",
  "key19": "5HF2zAL6bXLBV2WY2vFSWVQQtpWsAqNmSFj4s3GVcdGtgMTCeb5ism26sZwYvknYBnQ4cgc1y4BaqNsvENu5HdGp",
  "key20": "5y9thr1uwqzrrfdePJJ1h3sAPXuwypuWQquiQhbtt6Rqt7QMp1yxHiVdPWKeBsUwbtBEy1bgurecAC3cQSvbEein",
  "key21": "2JmqVxZ5CsD4UUQpWntsh32phdFanDZL4C9gshq5L17PXHwSoYFab15D8pjAZMmdp5M38k1nCL1wS8AkXwWyfaRT",
  "key22": "4CzKTZYBEkCrdxsdZbkQo5ygYWTHKPKXtGuwUWCUbxKPXHJHr8i1MuFVKPFL4hE5S9yCNq9wFgfiF7fbAmWbnnXn",
  "key23": "5bQznS78nNpLHigi8se8LjHetHV66gLgC7GkLJcoG7zW3PcPysDRHaTXzKPguzAQZVPeKKPkCoXHBR1EcFsJTkMJ",
  "key24": "54VcDzNsnJvCSo9Dis1NZb8Lv2MXSh3EDP8YaEPNPc9xkweNBjcPevA47G9LvvJFXvnEZD8Kf5VVQyF2FAZJG3Nw",
  "key25": "kqjrHmdudFh9rqXy45Fq5YLBjGmQuHziAEKUdmnrNdryTEohPQgiVrhbTdUFLYs9xBJJFLszn7oAd6pPQbtkp2D",
  "key26": "SDUMA8cS7c9xBNj16e2d3V3rH6WCqRa8mtNjcwaVaUULNTVPUkgV2XoRxhf2sRKW9xeCVuB4qQKigDe6AC1GLqw",
  "key27": "mNXLp6U7jFHWpuHfnF8wH9aXBBtdgoraxRQvMVMjfRGudoG4LBXDKMXW8VSA5AB6T5un5odkifczzCQ4KrWgbp1",
  "key28": "UeKe71cc9c6cPD2UeXN7TQhz7aAKgG8bioN9XkdVYTvSq1rc3KEhG3WVzfLBTH2KWaU9sByZqowZQMTcgfkfWFw",
  "key29": "2G186Mhaz6f64vdk3K2hLDp2ZhgDar6eXps7uvsaG3DFbiFg2NqijQEWARW23mP7398Xv7Q2gow8Qz39gxSbwtjh",
  "key30": "39puWEWrNq6yPmzxqz4ZKH1Z2vbfSztFxy6nN6AwuQ5dkwHgum1ZGbfsPLKbAVCTw2Ei6ZzneFDqxvGuETkps9L",
  "key31": "3GtCVxZSax7FhghxGTUGm6FWu2dNL4DaRQa197t8CgUujT5ZUMBvHXpsZpQmERfFL2McYEFjqzxLX49ExicMBU5q",
  "key32": "3s5sDxPCnVKWvEDVp8bU7t9kNinSKhnHdKRb3LLiwoxphTS6CmfNBQfmWxYsdd7JytumizTHaGMqeZsTDK2TRrXt",
  "key33": "kA2HV2ZGLRWBYpwfHtpsdZzvsEC47yfzj3MxusPrb1hXG51xrirqVDiHbW94zGWjQMjQJAn99k3m76tMVM3mFdT",
  "key34": "5nYNvUj2mMzuK3MLPXKV4ZMWcKzPgGJx5PLb5derxZUWZusbW9j2fGCC6g7Qn8cpzywpu59fXiJ2mEQj1NciyUvA",
  "key35": "1R2z5J5ZMqMojRpdfAHneuBQA2LF3vev8qh7pMuo2dJ6ckau8Wdb4PQQ23bbGAMP5dYL6sC42Nmxo23uzpZ8ezB",
  "key36": "5ipmga4cqJdnGASTWcXYzUREZscThjtoYtc9RTEmLapXpxZgUeufzSwHo8h7fGWZzi15ANT736u7CLCZUTwbtrgj",
  "key37": "3Zxhym5h4W86RjYUYaL5BnsK5ms1qiTsKVe6cH62q774cmPHCHDU5NMGwBJbzRZLXt1fX8TU3qRHnmfvcPBdcQqk",
  "key38": "5kKpqHejTBjn1saUZjPaamJ6NcjkJvygvz7rVpgnVQvJedKm6iXYitBanPe32VCQxuH2RGGHhQu7Fd9WPwF1uRiH",
  "key39": "4fp7NawfQqD6qKKJLqMUErzKjAJ9CafQCaim13yD3WAz9czwefnfcp3Rckt8nBMJTZmrAzWgfwKWbnyakJwzperQ",
  "key40": "5H4GQ6ToUjHAtdWbJjPfhhG7ymFhhKJM6hxtH1QRgbyT13HoJrVGEt8JiEn9X4Lf6sSNdFvyDYhKMsD3mvWEVowZ",
  "key41": "3Jt6xEAkYPDbzTH6fgnMMwM8JFdSgqGhEybmJYrzwHy3EzGkobtTyeMhiZZEM21YQR9hf8dedxiJWjibsPVByQ87",
  "key42": "5sEHg5cFzBiT8EfK7HUczMAYYhsRVuzHmfNRCAbkcWDZb93yh6W7EwoP1S6JmZsGpDghYBhSipnLh2nZdHKUr4WS"
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
