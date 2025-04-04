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
    "29G2rNXB2pZEbqPpPuLsDRWE97Y48Mn2hrvdiJNpHMamfzPMxwD3kMZcGAWcXC47YmCF7CcFRU16qPDqugbAu6LX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k8pwPKbYbk8PgJqsLm5NZ8PnPqYvceGygLoqabwRhN8HBDZmwumuzcCHPJ5Ct9zuqFZmFUXwoXNjKPjwv7tLN8J",
  "key1": "47w25KyEpgDmDfLQCwGK1rRA9MhDfgvArjWg2KeHKfr1W6BDRXoXBWQvq54xQywpesJc7m4WnxwAr6WevsAKSBuR",
  "key2": "5t56Y97vWNheDPtwCL7V5Y2UBkZnChVsj5yaiDnUDKbHSZ1rfj3zJnBRMuibrk2h1uCRL5PjL5toarmaKxD1ErpN",
  "key3": "JhtZs85KdueYfKVU47C3bRkELkBTpdk1n83KTRfYr4WRcRvjm5THWjN42Mz3aQ9i7mQ68pvZwSVrTgCRAXcvmny",
  "key4": "5gjq35CVF9aPiRotWqky9oEGTZWZ3vMqyFfeT23cwBdimRd91RVazJk9pV2yGEuJGyBW2ofCwvgBe7GUnqJouzH9",
  "key5": "38GW5FceRkVifWk7qQWGf4EFeVPBiTPjBCJzNfe89FMuK7btPnBwX3EJxB8wcYidsMqJ111wRC7VaZdGCZuhVNjb",
  "key6": "EKES9fcAGpA4HCWgtPUNijv8H3eJ1LbkRSSPaJwQxNhcwZ23a4wqA7jVy6FPqgvhYmknSz3ERt8sqPMdKHHNtMb",
  "key7": "5C2Vv7wPcqA9TB3yshXSZzvi6oQ4MAuz9P1dQUwtEWg9jKoaZA1KCxJTVGcfnuJ7w5Z3uWXPtVkLp4H47xcHvgpB",
  "key8": "2xBeVK8J7TSnaDEUhsUaHmBXe6trmNpsvPMFiL2hQJrYauDnbgdFSZ6VBDrGxqV7QTgGXQiWL7FaTWzN5HX3ZLgu",
  "key9": "4nN2G379s7ES6nWxshWUXrLMR7HTnV6hfecV4PbnPDNigNGZaDK9vhR6amP4BZxjUQQD3B2DT97gfSrcZ32MYGn3",
  "key10": "3pK8gzDvsLvrrxnbe4iV8BkQ2ZwRbb5xfYE8n3HnHETH8wJGFD5w6gPXUih9wvtwXTf28yqgB6qDRAhuVskkJU37",
  "key11": "gGNk1G45PeU7Xghdm6BUU5JuXHLoDV2z5xauZHsm28PhoS7nGsxY7vo87AaYv5GW4rigKZ7YZiGhT75EWsJE1MR",
  "key12": "4PeC8WSFxN8TKhZ9tu6iU7mtY9U2zUNYNCc4rmKTeHFypMys2cWHMaZiJ3BQMZ75GXsXBgQX5XYcDvWTEGgKqC8P",
  "key13": "2z9f2rotCmg9BgZLjYvqXNozF19vyqwPSPtw63WZzrjAmVvTdFh12dtfubGJBnrK3cY3KA9pwzuuYfqo7jMLQq16",
  "key14": "621FdsmG6CMjAFbPd6cNKKEeMBKtuPFcL8VeU1RuLswwGRG87Rp5L21J9N5oUYCS1X3w29wWRWZAKeESSfbyis9E",
  "key15": "5VbQ4feMTBgTa6YMvKG3Dava31fqpG5fRTuNGqgiGNEh8rjqUBkgpVu4u6fKeJiuwabXXRMfTgJBDRtfhn84Qstu",
  "key16": "VnWDEfYYxYp3FScJZTdwfntP4FCSUfKvsJHrdJW95amNfEwrPpEuacC5jMMcVRuspzD2m4LDB2v4G4HEj7ZN9AP",
  "key17": "4bu81go5PyfJq8yxqJoV5bAomQVmXMughrKYXTbxy9XHEBW9mnC3fk9a5pccjkr3M9vW3FPcLEgJiPpyocyjNSti",
  "key18": "5YXjQUUvADszjaYrShjyeojbSp6jY3N4ChSagXFVLUpvcGFpuX8xVzJDwLM9oeEPD4yuvhcMrvM5kdp9sWTeXupU",
  "key19": "5psVhcYmkEhL6YVVQH7jvr2MLfb5qierhwd2aYcb6BejuGgVADzRijvmxvPvkuVYsvx178ffNXFPVXaXgZCMgbf6",
  "key20": "5b47xJahg55dB5rGwmstAkbvJMRVTJ1skCL7fRLLofe79x8phiJmN4TcuAtddbrzmJhAisDPRvXdpuasVDW1gq6k",
  "key21": "3qDyuRQZx7nxEP7b8AYZJdVQarFqByeFPms9HBQn6WSVxwVFbTVnnXNmP4kFxFArWJQtZ2yvHG1xQBxx6wWXJWL1",
  "key22": "65HJUHFcUtzkZMDcLiBfU6B4susUThQNz7wHz2uTeKzHsrKTa68Sbs5bCXkVPny2P6r4MYAK2KKARPtBwunTF1zt",
  "key23": "3JXFrQdmeotgXy4iZKh6rwCMVx4vNd5C17Mfp3X3SuAqBPy1knmTbgzW25ZNt8sbL8DC7h524sU8UBfsAHhWfQpP",
  "key24": "7qBcfsV9Nk3AVMgZyN7RqfpyJC3X6k3L2wsXKL99pqDXtrirHhG9bcRaxuYUAExrxT6PoyrFTtcmgjzVn4kPWEt",
  "key25": "5Lw9aJT3rP9Hk1hRxUJ6wtVxxz2trCZSQo9gzZqUCuBPnCaggkZezddgHT2P6HDkzXssiCZgCT99bsKbAEpHuG8s",
  "key26": "3oXCuh9ks5od44Yf4L6SRjAtmsN7DGGHX42iD8o4DHDACfn7guNDEKwHEFpSFwNQ212syeoZe49gGL8MfsranJqM",
  "key27": "39rQ5NNGMWeU2G5HZYz4KnZQvTqCHM9vJ5NsQnfLAGDzViogUYGWRcqYYMf79rsJ33cyHYRJ5GtdPkF9HbzbHjJg",
  "key28": "24XuedE75szMyy2JY8pMFa4NY9Ux1fRSBnS1wDAKAH7cYoieG2ZEQ7aNGcdt6TGQfiDkbpqZDJNjcJamCMSm1gSp",
  "key29": "3wX2M6kqenZwbpq9m986sw6fB56vXMT5gJcrk6cfKrYdWE3YRWe8JLQR89GrbrBfRDryCJWFZFSjMPZFx9VPfMHs",
  "key30": "4TPUyL6CPCshuEFqLk228rWpJE26PHPp6Qku6DfgqJs3AcWecEzS3t5WfYeyZJ1DBECWucXeCYCxZjj8XE5VZEEQ",
  "key31": "2nigX9MwiGEt7aDXY7EoFhQEmNyfz5Uc52Gb4nPjyJZzJoFwMqw71BJy5HuzeSip1u9PHFZSm44pJJxQxoEZVo7",
  "key32": "Ao17sMtbsuhAvDGcSWUdkDeTXKgRdexdS2LFGMYMaS2LJM8b6nofbTSZorYQDqJBYvVSMGmNct46ruCGsDn6VJc",
  "key33": "Xv2Vj3us1hmAZkhquG9jQ5kYmCGT5yRbzjnU4xfVaxRQpSRnKV62vTQCMnP2Aq152aorhgBLBAptT8Gj173dWGT",
  "key34": "2gH4dRSP9iXE4pMJoDCxCGHu3Ru3jD2b6vjfpYktaqkzq3xpJ5iUvbvWSaVH2W6rommnyRrFBh74DHqMiSwzRZFN",
  "key35": "2hr9CqW23WgfZKf72mEvved37zXtuuTs1GzTFveaHGd5zpAr35ARavYB3gvDFT4Z4F7g3gzREfs1tr3ghgLTRo5W",
  "key36": "5LrZnK5RRH9BAYGxhHnzfvbSQ5CrnEA4Pb671S7kkmoavHmBTrAN69Peesg9JZsydnCi1eygfoycEBPqjEoKBXnL",
  "key37": "3KCJq1CACDALiMFvBrQUWnkQ9oYAQjFP8Tbj7TRcvfQdDeUDY6UZu85evsFnBHd2QTqea9VnULhGt4mS87UaYacn",
  "key38": "4B2hkx64QaRRbywHGhhoU5gYA8XeAqYDJPbPQHnMrdisqSy77TbUsFXKzhS2FUTHpqLhCS74k66rAx6GZigZesjA",
  "key39": "5ahfRgZDu1GVJwzb1ejh4QsoHeeVhTzEHkkZ91F5Cr9qRwxPtsPEyQkEicb2BvxbtBnL8b42cWyrVQu2zMT7yVMV",
  "key40": "4sgGt54f6avhLVLSPQhtoiRcxXVPHAmh9oXF2PfU92BdWxp51Q5m1ykx3YRq6kE212CRdXm7b6i5oUEDTomZRjFT",
  "key41": "21DEAYcdDiqeuGnzSvijTaRenNivpZ4DjF1DcQozayb1bQWmYMoxqhTAA42DENQ1m4CmWKKCpogeSFDS7tBKVovf",
  "key42": "5G4GkTrFWPDDa6Q9cx7gfYCqtU31Zubyv66zNqydcsiRLhFGzTwxArymoJ72x478QYEC8w4sc6JmCvVYX7dDEJUM",
  "key43": "6cVzC3YmWRRP9HeJdu84NwwfzGcryhd7E6PC3utwyJ91ugYVoanuuCzyfWtZb5gt9GDza19pbYaudvKob3kRYNh",
  "key44": "5S55onPNEar7XaWHvmQepSCKSiaLHfhEADunPy9skVS6UXsUwsYFgJr4As1G3CKECmJtDUm6vzSLySpBW4Yp8ji4",
  "key45": "5NTQgt8L6SaerMDSeTwaWJyKfgPSwBZMWMrpxD8pwiGEZ6RtZX4QDzNpbKH8ndQV7YxK1cHE3PVEPVvrohZYfLLh",
  "key46": "2QrPc6YTmQh9DW8miWe7J7afpfL23R2o42SfthTjAn87oVusNrsM37ZnaYkZL6KXKPVhkbNuVPLTMrcN1wQU1ryg",
  "key47": "QPcTsFNMVihnXB3VBkJgDZYvzGxUFYFvoVvH89qZsDjHL1mph1bvu3EiC81Yx6Dvz6CVRG9pwvRBxEGVDw9hfrD"
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
