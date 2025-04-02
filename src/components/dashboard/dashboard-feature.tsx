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
    "5txTXhkQXkNPRNR2Rjh6df69ErH8qxZ6WGvCvNutWbVTW13vdbb84V6EVxxVdTz9JgHXC7fiiFGesMi5tdnzJhLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WWkhZK9DY2gFCdfjnbdRyse1Qi44P1RMWGK8wQGDCCYLQfQHjR93ADNxeDRdqQ3hgXsqK8hUUCRNmKNb4zgjitD",
  "key1": "4z9yCjRLdZBxBvpYtuMtVPtFsGNdMgdF21qQsS9xNH3CV5U2EWrD5z6b5czmwap9faaDDLKVCugxbqDXuBYdpxjJ",
  "key2": "4KyPen2FmwofFwwaWhKTvZnfDNYK7Cuifo32FTs9Tb8Grb53YU7sNKFeHULTPtwB8BhjMPJwvEcDCcpopthJfrbT",
  "key3": "5uMVshe8ULJuuxN3k86YnU61oBH4AiFvqVJJo6mA3hs7TEFq5yJ64PMzUs3GsfLW92qrYuWfJxDgLP4jkuNPzd6v",
  "key4": "3jmaVcjScVFiGGYVdDdXcZhpFNS2EirUmDArprcWD6HJ2wXKJZJunMV4vKcCEn8kPfVYzZhoGWfgns9cnunFDsv8",
  "key5": "4Ft4UeBrKUDR4GtUGh4yNEjofdGmkuAj7AkMBebJ46uBC4GkpjHjrxUxsjUYySbjcKWSTqrYxzNUSd9EfCJXYwHE",
  "key6": "4fsanaUvFmNTgFdxEh2bMNhk1GcEwLF4HqJfTqDVtdaFTHgr8K32R1ATboBbx3HsqaLR2bVp5cgiUxzCTK7hLKBe",
  "key7": "P1AXq6G6Q9XKzQkrVLMdNyZ28BwZt61ayWBgVTa8rPC1mNG4qhfAwRSWq1zwUoQiwsqjCQCfXi7j8chUKwgM6bK",
  "key8": "voMwugiht5Pct6cyRTDzTmfxr2ojS3rrqsk3w23JvgyYWA7RKqm8VzaHJ95f9V2d8vMnrqHgsBJBGTvoTrXdKod",
  "key9": "3voNb2NHXJyVxvJWdCSibEb38mrEqM6mpBgeXCMg3Sp3tDKZL74EL6nQo6ATYjJEpxGAKCrop6NRmc8wAQJxDXcn",
  "key10": "jciDyZdHLzTi5UJ4NLCejEmDyNSHqTKb9pG4PpjzLaxpyVFV7enH2AUcMrRF725BimRHiYTyZSR4sS3CRgrAoxP",
  "key11": "4gjjLQoSGyvZuBBkjFw76ysJsYKDNrBZngzaQrYSSJvXjBEkU62GhhZrWz8kakH6EDbzEWxWLMG92C1ydPT39GcC",
  "key12": "57jWVhwTd8UngCP9VqBsaZWZw7gK4DDciRYvkE7Guejj7HeK6AM8ab2v9CACpccDUa14EZNLfrWGWVdaFBBPr7g2",
  "key13": "4WMPaCyMQMURAz4fQEwU8TUzvkffxzWmzgBVdWBQ2dBMnP2Szk4e6mNVXWCS1ARy1xQ1LYdGMphHA8qwVFpHmhna",
  "key14": "3x5Az4MbHRcoj4qxVrE2mdDxBmSxAfKFgzgSCGxCrKMikAEk2M4hQH54HJUV94MTc7ZhABuQoYSh1dnm72mbpqpL",
  "key15": "2sC5bna5z7fjV64umxPpfrSof1DgGsinRmZPKziF79P8DzcUduPvbZTd38e94nitYuexC2curEPEjDh8zjJ1ZszV",
  "key16": "5bGGyMcR2bchT7yY6eKYYVHZyQfvdjJX1MEaBUMMyHHYmzHBNcodtmBVnFDd3HwmVNz1N6kHUjDc54eYGNVesBLi",
  "key17": "3u3EWWrYs9PigaSWQ7k1i4QW44SbvKhLswmmYf4cUnKTpGvyRs4q3S7pGr2kbBGK5sDLrEZQofWoJCN1DWNxaUd1",
  "key18": "2YLrVBok3srhGDeDuBwKYZe2YDudTdCsHV9WjN4KwjCL483kT3vH7szuU6yjHJy8SQJhXVVLEEanPgyr1ta5NWEV",
  "key19": "2YJu8yqxCkNU8xzXwjTw5UU9iVbAGRwLkvX7sURm9rA3JcucUVHXXUV3x8FKpvakUmWQndrU4RgsW9iB4i2itdcs",
  "key20": "tFcowfzv8YQBvSbCKypvVgm8PjPwuUEg9D88KurkSqm7u1y3QvnUQn8pnE3ZADEwQgJZPfvXwSGp78wTkSjp3gD",
  "key21": "5PZ8uDD8BzEU95iob2BjXvDqGNzxCJ6AN7nEtkFBaVRHv3VhE4n28mxhnua1Jobco5qAtDTb9NbNHXSJD9bVEexp",
  "key22": "5RAFm3poWXsjzc92pmVFrS9jBvbi3qE8m1Eq9sUeBs7Sfff5PW6zy2r83Db1BC3AkLUifBejX2zjU5PMxcFzYLCa",
  "key23": "5KijLREELhqJPL3vLK1SYUkhXB7ypNfnTw7eKk56yZoZgS17FABGYvLFkFcJA5ybftzVMa6EeAHpQkUmABKAZEaf",
  "key24": "3PdxRy8DKSz1NsuqYCyuLUKyTcF4xUVQuaytypXh68RgcHZx3XZHMLLXiwFJjUap8ZebFd3RwKEitE29dMcksvkE",
  "key25": "HQzFxD3YqUWSojDSNzHWk5rWg21aDL8Yi64YfmY4AgRj6XtK8MQYDeu1JAjUZSLsrWd9nBM1dakunFgdzpqknNM"
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
