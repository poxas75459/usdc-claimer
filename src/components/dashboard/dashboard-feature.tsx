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
    "2G3YbEtmRUCZmEnTbFYGnzq7ayDJ8KHCAPXPMniGZ6Dqf65yWFXSWzw5vc1FD2cxAsYzMhAgv5iYtvM5D7WkFxfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lw8pgcFBtPdJSWepVxseufNG4LkX5zg6BsAWVfpTCUv2vtLcyCj5xiWA1jQ5xJXUBMAZcxpECJwpm3C6KfM9M7b",
  "key1": "48Cjr3rq9vEt2w3jtvf8wqKY1vXEYfLqJB8dPPmb7khjFQdMzJv8EzzxSAjS3ga1YScbPcEhzV19mi16S2J4uodd",
  "key2": "4nZ9eZ6jhCiWAMuzTG6VaY4iKKtUq7GSAYgxUUDoXdgc4g4stdhdYZggiqP5aTsRzYY8qVCPcGiRKUdo1PSjPJG2",
  "key3": "4troQBmMPfLDBRzBusTCV1KWnzG6Pk5WmNkPNQjBGKUGAyPitrxMWMHK6RYj33bSFuJr4ANvvWFJMk2Jus5WRF7f",
  "key4": "4Sf5SEycG4cMC9ZLqXT97ARDz2s8a1WqaRAvzZDHrymCQn3xRjcs2HLojM3KjgbjiQd5b6Rfpi51QrwKE7SwLB1A",
  "key5": "2esLCuj5Xcdu8DRyYdiSL7uN94b5NtVsTwE1FeuTMejLcuCthpu3HjuM85W7NP2VrS18FeSyNQtUKrs1AjNgGJVm",
  "key6": "5wiLcnA44Qs8fJh2aDWihS5BQvQSCBJD89ptR7oJxqS3eCQ4qetzPJ2G5td36vHdrPnqhpEYD3Y9bMhVuCqiapT4",
  "key7": "3vpyfmvJLAUUibBLJAfTHuuFsBn1ioerVrkb2ZgFd2vFBjKAVGmdTt7crEqvRccTRufMfeQDnhY3iNskSaZ3nmmT",
  "key8": "59BfXLz92SXT821UeL37TSPdXfsgYRmnNDD7RiJpPA8ZTMLB6DjNsSaDMXLL8hmrdRiyEB2Sh8tMqMrgHHrgRxou",
  "key9": "2vKHh7py1aqRZV4CT8TvoRkdueBhKvRnU4pmXPPxb5ap1M9jBr7bjDyDAMf9d8Jiwggv43ErLGt4u6r6UGuPpetp",
  "key10": "3JwQ32HwcJGFWJMTPn4vb58kEvg9Doz3W5s1aCBMnFEXmU2ysiKRDoKUu6bJNRSUeKLHaVRkvo7JCastFfYtsMuW",
  "key11": "2nUV8queGRJ9pynb2QwXH5W4KYnqBx2dvzJP5KS1ins6u5iATynNtCbXP34yREAysAKTcpuNFzPyvbzXT6fDCZ3h",
  "key12": "4uAWHWnZD4ZXxq4RLTMuBeuX91xVVj2zomweyFNaoFEJt9strvf18xRHXoGqj8fy8LzQ22vsGiwQ5q5NmE3CuBWz",
  "key13": "JwwedRPC3StSNppKTBwmUmsbdtHhdeQxzyPS4Zcy33rocR4A5fo5HgWpDWgCfhAFk3Bzgocryo46qnLYabYiUQj",
  "key14": "2HrFH4niaEuegN3kDTqQJPCVcuX4zJ16a9sYXMpmQFsRToaqLxnCHmben6XBpJtSDAv7eBnpqEeSF5JzusZfxX55",
  "key15": "4W5ggiw1Dad5Us8d6T2opAjXPiwKmXoN4ms5ZGA8SZbtFBbvyssfkNLgyn65WQZoze6Sp1LRVwLSAgpNLutptEv2",
  "key16": "3ThvvF9LF5S8Z8YYfBJWX8xsHLY3ULAdy1FhX1L2ftbGuLvnNfUJSKjweJ9a2E8nfRgti5SrzJjbpqm91pf6MepD",
  "key17": "2w6KBRGzabVz2Yv8grtxGnXC7GvSCY9DBXNHM3prH4BdUQcjDw96ZRVRdDTgMYu3FJ1kEgP7jKr2o7mz5qxw6uLp",
  "key18": "3EgY8vfBQ9H2TTSmxR8zzo6r8SkghEUb9R2oA2c8vYNtkFgJbCqCDBUpTgd35St7fPTvoWQ8LZafeTWxzDKn8UgH",
  "key19": "3NJHYzUPVrVp911u9Q31ZN7RWYVUTDLbmKJJRPZiaciJLp8CajcPqqpndKqHe29nEkfcGnaVWaJhSanzj2gRrTAn",
  "key20": "5TktCkfHq27Di1Fe3wchesLX8toTvm14gYvmyHHU5QQi4edGXeiifw3AepAf3P3xtR1qnMSB3kzA4Qvn16eKz5KZ",
  "key21": "25So6gUre9ERJs9keUPvAz8BUZHWAchxyQvVo6ABioy3xbBFaC69xzq6x6bwx3sYz8kyzvuQH46V424acAKHs1ZZ",
  "key22": "2DF4V4XESJbesLb2DMijw7J1rvHdaZTEYWVbYDc1b1DjYTaVhAebEJuZk5JPSCcsnbooZ8DB1yV1sCKQ4TxZft4W",
  "key23": "5mgAqorZY3ooPWMUzqnVepfyvxVaEiGxFBsbuSyDrn5Wc8q8kSGQkwFSie8NSHVakBdhqSgvwxHkkfvrWQ9wePYC",
  "key24": "LkYrfvGi8BgHQPq8jizXkvj3zSQkpSNZuyQXR7RkaQGWed4eqTHNBNbWHNEEYT5RSd7rDvCPZs5xVEqSJVQzTvT",
  "key25": "261bBGHpQe2kqAhPQixB2D1crQN3cGWjZn4YVhM2ugbrzjy4kAJBWKRYnkmpiiCxzogZPudJZFvkJup81MNWSDfM",
  "key26": "4Syf7qDGsxv7yHy62EDrF2EzhFxhfGwE55NVV9FS1LQ1fHSjzT7DbkFpX91yM3drGei5MrhPmUN6Z9apCy7bCcKW",
  "key27": "bxaP7EqDcZaL9xzbWvGWkwEjSbQkjsWhbNpzDwtthTMFCUaiXTWwGGauLSJQNAGMUY2XMVffoKtbBwmQFGUUpz7",
  "key28": "3Gr1opovASeAGEAHY7FZKx4JBfTwzf9zeMknpRuWbs6M16KBX846fRg1n2sRtprRDoaR4NSac6zsJuXCKjBz39hY",
  "key29": "5TJvaSuM9QZroBSFh4Pm8WRpWjxTNYrtSUkjGH2ee8fN8ENh27WakrTWQw9YLs52YGLd6q1Hr9WAzAaNHsNPotn3",
  "key30": "48w4aE8AqGiaWDxWC1BEh1f5axkhJvdgdJ5QWYrAzPC12u1aKaHqewNCB1DMVpP7LWAZ66tvpXeY5baur5Mn4tCG",
  "key31": "o2iEWQ2FLZR8p4atiySw4dXEnvMCd87K8rHgxQGTiCMZNkdhYxx88UPr8RUKU4BeXd6Vr8MNVcru3f5rsVmGTsU",
  "key32": "5v85KxBMJaoTu9PccG6usV2T3yDaaa8P4DEQ3f99jKf8aomp2ovZeVNLzSw9SW1JnHtzwP5sZ9qGqHsn111Sk9Vc"
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
