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
    "5QbA81ZYFAHjFSxhTR1zDHqVwPay8mNxKHWgmdBGpn96uDoNwxTEudiBmFuhkKs9fjiZHh21qivBnj3pRSmjkaXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C7yKohowLpk7NbZ1h1gprTbSPvvuXuMvt3gadbc9UCQEs1DJJcq1VgpKeDv8JRYarZgEL5KB41fD3x5sexTBS3E",
  "key1": "2ezYWmapgDJfxCwLGuBFXabUaGXcCb1m73QwePi7sKMXNJVayW9dWFz7mt53rJtycmFxi65CTsDtGauMDFP3sN5Y",
  "key2": "DwdycYLurVCd7mfRNYbm8SoGpcP3ppymL5bUzWa1pgPThjL9hijPkrU8SmU18oDnbf69xXy8qoJX4qug6mkB8zb",
  "key3": "vRgx289VJE77JAjfHtW3SNd7DZP9Li9XpcrowzrJz3xWrr9c4aTgwLQ43Mkm2HxyibVBkUPmtWgDaJdTP7sQ1Lh",
  "key4": "5xByEqptrGzCxvXjmBEUERHqf8MjDYBCng6s62V2cjNHk6kLvob8bXWW2u1Urxm2pPdSN9ih7V9bhtnWH1vtjH7h",
  "key5": "2DMJDcudAuQzFPRKX19mPftLMrmMhNQaVWcMDFs2cjEnaSxn9jiABD94ctmDmGxx4FuAwtyMx5aKQ2wMbrkMuM5H",
  "key6": "35M3XG3FX4by5rSuqF7ahwHTvvwTSJC5MKrvbU4KVxXyTwzTSqKNv9oetcjKjRxx2hnEBJQQh95Q1Joddmzm4vx4",
  "key7": "3KbAuwMRXUfNu42ToYFgT5tPF4o9gn4EmZtDg1LndhvrH9uuKW8gKQGV4q9pSQfktJLDrtvjWDjpQZE4mrFPaw5T",
  "key8": "242jo6zBUox8GpKv6FcdAocgfYd5a632GMnL5mWPXV1h4akXm88eiEkVLnRqJtFCcDPFM7ShcZpJDn4UksZXfbi5",
  "key9": "5gCFuBEwBwuwptpckf3kER4DG8s2FY3XUbe9VjAaNmfDp23kDYhw3hsTRhFAE8ykLwsxsT6qVqwuDynJeQdH6LHY",
  "key10": "5yztZw28oy4LMzqi1T8DvH2UKMCgNEDgLCf9Awc1pGQAUpFn2xSCa3hjPfaGtsUPovp8M3fVRCpJNaUggZKEm519",
  "key11": "55K5m2c7jU2EoQAoHiVaxYnZANsZ7815amhsR3EDzfC56qUgsuwzntZw6KbX794PsAsEdzfqtSQD7M527XoBsHRr",
  "key12": "614WrYN595NV9zjvCEGDXdu23vMQ4Gj81VatvttHsnGvHpMh9R8BncRkWmCDq5L4Npa5i6HRV3HCGKmcLS7ViYAU",
  "key13": "59P6xyBZkJfL5QWnxRpwTTqN4sKLykgmY6HEHHCExm25LvFZZjSFzkxaG3ysZCvCxmssPfJkDwyYvtqMqMXfyYQc",
  "key14": "5bMFVYWQWNvzM2A5PpBiHPFNSYSBJeA7rjNyXYhvPcCWrgb5Yhh28R8RvQDmvNJvwqg7PD5DNRPQRTRMTS3a4hK3",
  "key15": "5zhH3L13YMugkRPqJt3jCVi6oScZH1hjYx8CrtzEVpDHGbwaeHwQMNz2MZ5D72eQ588Zr9LWg3THwRjq4MZ2pWgN",
  "key16": "5afuqXE4n1GQCa7Zq3Ag6AZmDM6k6BobMe7ghopofN3E8ga3P7k5aphMCZsvKW3FBzHEY2753CpzhEnLKnZDUcDb",
  "key17": "xrzLe1YgigGdMj35YQAZN5DbC3nNHnJThx96QM8GoXVNZY4BXUhuXHPPmDFKnkud2YnV2GkrcHgabiYLHTyAg4L",
  "key18": "4TJcMhFo1DyXJxjxCUsqEnU1T18SWkBZqDze9K6gRe7FaDvKLAqgg9YpjUb3cyrChB9yRBvEFwRHBwGaveA31H8r",
  "key19": "3tTVeP8dpyVX57tySHBEGHowUcoSqWrt4WDeN3DNzsVCSdnFDz3gcse6XSmJD8CBNkjP45CW17wpzP95RLNCuPAj",
  "key20": "3M4EU9pSejSfy2QDiDymS83ux5yJHP2iRUoVmE7ErpnvmW22hQ7zhhVZijgYnMgHdREgex2BqNUya6ovWXP9pGHF",
  "key21": "5Mp7MYoBUehUvu71rUCRG3TMPWVBjjt1jo3j51SBKsmMDNh7yMTdogcv2Wx2ddQJKDWKoyoDvpy4hELcss6hNpEa",
  "key22": "67fhSfaMxvnTPjBC6dAh8hrSJPTxfjrJqMo69J3YtdLCjcnMh4NwFWAre1symVYJp5GYgYcciCspLAngU4dUb9FW",
  "key23": "39QJjRjTfwDWMRNRvbV8ToNHkAXJ1xAQ2Ko1cMWBRVX9v2JHG7ewY1VK11DWK8dUDVzFnJTENhjxSdgYFhDQSNWq",
  "key24": "MvL2CQXsqoaCbSnmZKkNoHaA7QTnwmGjYheGx9MysRNMdSWzwhWDeYTEy7APBTvNyKmwNjUMnuzSD2eSunpVTtX"
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
