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
    "5c83pLde6Ds6LnHffXhUre21H89Xk5cFHH8VU5fY2jWnnp95QBWq56bGnnwC8Cn42mLh6Re3KkNNRcQWDndcSttG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24DZoR2pyD49obAf9eoqNLa9CKVcdS1NhPHjPcsmQ1AkwAfYbrn3p49zAfAsKzNtvCKtKeDTbCkPzGTmo6G1YzWx",
  "key1": "3o5XVn4EVyHcTDvA6cWhg2f9aF8nSLr4pZC28RSYRLtiXiDFGfwpUbfXBhmEAxc2NhWVYyhCYQJZyJtRQXChJy2f",
  "key2": "2xWBH6QY6c5SLYFRkmDHB3USiq7XGSMpUFBvVk7wphktjAawuJCCMxQx7gUHy4oPSsFhiF9G331Z7uGR2mjFhEnX",
  "key3": "DaPttjWBrXduSV9Coh2cGxHso7xTwWmMxWDu6sg8THtjnxP5DeksHux6vck7GGfaDHYzBYnN7pw5CZHxPpEhi86",
  "key4": "4YodsRuah81HLwfwAT2gnARmA2ZHXGuyt7qb4bP4YUC2E2iDHnYTNWoKbr9Ven8SikHC9rHqfux7KYQxdF5nNWfA",
  "key5": "4S77ZQCcDNWgw4bJZARsYWGiUXdTjrivwc3a7StnxnFfQpdhU2RVYNao5QEdkALHzTfiLwRqMHCwi2DNe8233xPD",
  "key6": "4qHwsADGAv5kQLeeJZt8yjqjbjCHdmUd9CUB4mHBczNDs72FSgiLpwhugjTP8fxJrGg6a2S3z216agFPe3GvuHWT",
  "key7": "5ZcEMrw2QtyEajnhongK2xyBtXv3SCCccL9QhfPwBbz9XgUrxsxiRhyGWPWcmJVwvZXEjSp3DZyzbXX6LeB5wrXX",
  "key8": "DWSBpviHYNyJycBqSyApi7sYuBVDMZkXR1TeXfykVrKFasLKciiPEXmL2gWMv334dZn35188R5xf6ae9yixeqHk",
  "key9": "u6VrnGBAnpVkPuXUR4srUZB7sF7iqGzy1Z9yMdiU2dDe9FJK9KgaHcjNToGgdyumZMVKTJTbxnL2CrzBFmfscJ1",
  "key10": "3oiFVAjYiRqtMfmwcQwL6heNzzsi5ZekCp3tKjUG7VZJWptUpJFZR28zchk4GSXugg3s4w7G5nynhmZsRNE7o7qc",
  "key11": "3Jni5SzM3RZpSzUqYDrH1fb4FVG4t8gQgRoPT4WZHQBDwCyHsKUQNFRo4bScVozwnrQyTkNTcidnfduABztSrPsu",
  "key12": "4yveeiKRbW8Zfs3if3srPpLWT8hK8nee12GepVBF5LTKgyEpqxzrPtqmxuYMDyywxxMMJd4FNsVRCrv1s5pfq92p",
  "key13": "4z43DdxhSZfzr7ec6g9tv4uiuGo5FVAiSVSMPbnjXxhqxYQMrzYnpj4JdXcaAZTRZD1M7yMq4rYSdHNEaRqeYvDm",
  "key14": "5QFRoVZnckRsZc8YytWWvSZ6r9m8hih2fNEQrKZHTs5QP8w3CWzwekNmPtoBQojzLb9x5tKyGpWEnWeGhFbF1XJo",
  "key15": "2rxJGitnSVKSamC9tMKExBQoBdpJnjYjNy92YjyNc7th97GpnxbHJeWzBQApKrryB1591MQfiHdcte3C2L5Tv76w",
  "key16": "3Axae4B1WXWm2N87BKkemh3aSUQSq8ta2odYGZcD2bNHL8iAqjHLRexM3HissLG1DN8RiPjXdWcGGypiGUDybqdp",
  "key17": "4weMifdi3vD3kM5cYuQJsxnLLgd3f3RXzZvNPWDjGRNcQbPeMJ79hEdhQPMAAzkXhFJT2oPBi6up1QyzKxSSwJGG",
  "key18": "ojTQmMytiHx7Pg6Dk7CQ6cct2YekPYZ8tLpbnyr43v2zzerZCG28dMxBZ932TJeSwGM2Ee8daRyTfP6x7fTLayk",
  "key19": "5DYynHXF5gdFrBugqYycVZmU3XyNFuJ1pFTjEox4sgtZSfqmtvK3Q2xxEdReygKH69aVTUVNSMEdFTB7oHq2U5eL",
  "key20": "469T3XuE2uMSXR3bad5rEYzk4HB2RASFcuVsbmUVGs4dormB3pVp5n3sGRWq72kXm2RiSRHh2hUZWnyepeV1RrM6",
  "key21": "Fr6vMw4LUpUxAfGjVwjd4jjj4SZGPRG375xywQ8GPDJdHQ5nj597rqj4MDRK7ui7CMM9rtEviunZvMAz4yPBCxF",
  "key22": "3r3hYZfZAhmz7Qg5Jj7BK5Cs8Grj5Us71A7jqv71xjvS9556mnqzyegDZjqqYrC93RRauzm3faH8rGXnq5iWVrdw",
  "key23": "4aLZbL6NZAs1Q4U5BMKX2pmDCwkbuYDrYWwKmKirRn15LzyyNNPBAvhFndMNRz1Dm9YHuAECCHidyZRmz5Ys8ZtA",
  "key24": "3PpPDGzX2gcMkN4AX1S6UXCYFzJTNo5DbBjjtwcH5fPPNTtiVb4L1Fv1YJGuGYYhY1PHG2tcrEtjFaKywzXArn3G",
  "key25": "38Xh8nEgnYrhka4uhMcX4rv2GxPL7wpSw9MvAC4rSdBjTTgMJjv12nJBpqnrqNVMsxPrSvLncVYm7znXbAQeiNh4",
  "key26": "2gqjPDG3r5sDW6YGBxagssSD3uTJSkDT616JjrswrNRZNAWe5pchLLWboTyFsbE4Yvq1s2DukQUwvmTe267U8nbR",
  "key27": "3E4pByWfNF3dD8c9zx6spQTZ1JB96oXZLpUehn6Rx3FSifssWjAHBth4E7oJxvpbgQBcENN6bAPbuVzEYNPbm8GQ",
  "key28": "3KoE7uTgunE6rFv2yNi8NuH5DN7Wv6k23XrNajcUi1t6sobjoFQzUcExkSqB3LnrayW7RtcgE8mLsoeFVaQkvajm",
  "key29": "4tpiXsso5rZmJnqbfT7v3UpSnLcSKuBaVVGNKEgAas36fZJyoe9bu1pN9q7WzhpDgTZU7pBFHg8qJ4QBx1QLn4qp",
  "key30": "4Pn2dxJyoqsoHw5oTKqn75EbPhWYZoTBu4rjXmVaFEe39PxvqQWoibJvdrDGkEdFZMwJpuDWD6KC1aR3Gn676Qkt"
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
