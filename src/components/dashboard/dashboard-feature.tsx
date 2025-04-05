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
    "2z9RAvj8D3xYiLEVajQ7VnmAZfnXw1UTJJtRQXzPngyp46Lc1hdUrr2jiH4qUSo2KrnZA4iYj6DgbDmcZ4ZuqXmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PUJo3drALj4MBDEXPFApYJtUhMmvtkvmzSQnChKLD7VbCqyWXtTLjXPJvuticm22ofUUDzc5b69aG3awcnTLBdz",
  "key1": "4h2m437yFqNgSPn2CMDv5vTxb1qczGhN4t7QaVvterZFEY6VEK8ZTHXVVXJ8PSTtcqVbHzGQZEHwW1yiAu7awCE5",
  "key2": "36pAfjRPc229ePMHgQLc8PkxLVwZcL7rtDwdGfpDoBZiDd84nnnMdnujomksVDC4mKNEQNqCiKDvYFbomEr3QkJj",
  "key3": "Yz16V3AcpMXfYq4Y39ShKtZGFaxyVnMgX6wL2wNJ28SS3XzFoS6KFA71g9nPM396rvnW4MEnXoVnzn28DMHX8Hp",
  "key4": "29ip5d96MgZcqb4rCZqkYFzJHFicTRwpW94pXYXZYNn3pCEyAGqGNp4jVxNMgAZjBh34zqrdUWCdSQNyURU47D5s",
  "key5": "3U9GkiYjNYubnUV2VfobcLFBHtg697doC8JAe7X2nkmux1jDYMx7H5jK9xDmBjLQ3G7Zt2J3GN1WiUYxRwMkZ2hV",
  "key6": "2UbbAWvzCB7eyN9TafFdwXSetiFTAijkRFR9FWu2TLDMhr1BP11kmiDV52BvCz4hdzoALeJBw2z2aHgHZezpnEtF",
  "key7": "45w2qomM3aKkzsNL8ftX86V3dmGUdTJCV7C76KdxHGpDfitoh4pp1Nig8UDRLDCGzctZFRLGrT4JyEd3UH3eRzZy",
  "key8": "4wUTesjCVEhur9fMgfrgrb4phcNzugwPk593RZa1d99wqSCwkHXfUoKCmT3G2hzE3CjM8APLD2ubZwXA2C1DkY7y",
  "key9": "2ZXtWuNQr3KeeYsVYo2cvbV9Hrb673iUEU5vBoeQBp7QR125CJQ14ksU5W7nusFFiYTe6VhzhjN2eg5MDxJKFPdJ",
  "key10": "2jfAYTH8EiaUFMewDRxt3bPvvPAp915tvD6HaGcVpSH7KtAn75UvgTh6djBSKWzaRC12Gc41C1dXAedvttdJS7X3",
  "key11": "5H9SZmfcZ2B3NpeQVYQwmpZEHpPrJytAnFbbUych7Up2C7TarpnTYmjVh8jxexP8gvQuv2HsADYfxg4hceoLraF8",
  "key12": "5HVMhRT8ewcDg8jxqKCNP9jKjf1sZxhajYcH8AbbsWF99DCRG8g1rpCbdAxZeB1v8np3Pk9rxs1xrBbrJ2dHmoBb",
  "key13": "skr6wNXF5uBHy3ijxBeFufEabFCTnFykEshkZ6YgH5FLFGCrs7cCwmAD9TshitXxJ8k7DZDpbpWGSD7TXcaHxjX",
  "key14": "2g1KSznvxQzhDQcNMxX4yZWZbeujN67BLoprU18XPtqhSzxnanBcUVfXfZCeGv1Z8JXM7mVa7vqRhgQMihBUAiuo",
  "key15": "3vAwufM127oCroYQa6AzWuuNqJFgurjr6wP2921ejTSZh532uBcxotyJfThcH2Kvb7oWFQ9F35oXHQvUXFKqNWeE",
  "key16": "esaHR5XU3JLz6R4upr6hAzVbZkRJPoRyhu26JNnTqmgopVuBacDx6WfryHNm7c5qeLDMasNokEw8n1GfUU9AjUt",
  "key17": "4ASJXWRpNFe81Waw1eZfV48JmvjfwWdjTgqpEbEdVJ54HppDomhm9VLiNkYg1N1dsXfa3qUraGhPE7QCrsQM93BJ",
  "key18": "3fZ513Fht2aZyeqZL46bQd5KkKEu4iVNh5eaUSp9Bcj4c4U5EkxphCond8bNkZExBCj3BYHZFbnAi7NZpr3yC6sT",
  "key19": "23cFRss2CAEU5UM84SC7GUCTSA6j4zErrEm3U6RF94HghTNAdw9uitZaTWVQihNWo8U58DMbg3NzztbWgszyC2AX",
  "key20": "hvkySa9ni55NqabELkEuenCXfDbhdDjt3CGxf7FTz1V9afG82cE7jpFHvfxP7ZVKtKjG7bfZkmGiYb5MSVp9ZGq",
  "key21": "3xfQZGPaJcPJWU5w58nAxwLVWNbXJWiTwytViCVNsYnf1cd17pckAC1xc9P49aMD3cASJrHTSY8r7PrghkaCADHE",
  "key22": "4xoYk2qfxMPcA9zwmscPdcYxFtit5CYT3383417xwvGBoiSsjqpoZYSF8qfmPoAYt2RJyxQJK1QBd8Wf4uwzejBY",
  "key23": "3pT7ZjjrtHb9WTMMcYAsox5gKAbxjZ5rizSafoEJqmfqSPw7eZbzRrRgfsafBAf46aega7yJX8DfkLVkxniJV32o",
  "key24": "3XZBuyGS94iEA9S8FYyTXYTCz9WMWQNHeBKFs8UwmHkczdoyCHnZhHSvit5bFxdLNTfwFEJ6ESfCUXuNs7MaLs8f",
  "key25": "GJeetqHYHr8DQewQ15zwV5Dy5nAPynJroTw1bdLmcDNBqBSz3gi7WnTk3D611whmUmjqdWpFMkHVfnJZE42Cjzw",
  "key26": "5HpDbY9RawCoKv6hoNPwyst7UUfiEuyFxhNbRK8jrTgEQfHBT3NRTyEHEEXSCKVNX1BHqTgyMPq5QdmicVMHyPTB",
  "key27": "3pY7Su8Mf5ggg9jnMdmzQZ9qEg9rSncLzZdDWe6sNvULYBgcqFfXFWwK2gF25zZtk6qUCg6bu4D9i1Wfh7vB6dj",
  "key28": "3ZH9H1dkF5Vv1B4pTmZBYwxRKeEsg1iU1M3yd4AH1A4JL4PSF6UyiuXSDQVsC9imGMeDkeaaW9nfNm7iTH8tt4a7",
  "key29": "GYgbaPstjp3rH5nyyyb5XBYE1MRxRfe2WJNhRKkX23GzyLvFVVMkXfiYZHKpGmPNVW5XKwwMvHQQAJALHmp2c5y",
  "key30": "42YhihjoGK9XfSH7mc1Es7oZbSmnubVuWy9qbKnb2fi3TATKKCSAqZj2xaC4mbke8VuDr7SsEufaADnzf4YUuDai"
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
