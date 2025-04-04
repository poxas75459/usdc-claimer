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
    "5Hy5ZUBJ9oQT1LdF9kDiWyyY9fDCZpXPArKLXwk58nqBNvTvHU9FjjTDstpHLmafAQsCRLpUEzU1xfGyMp8yt6oB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jw6WRrViCSRYk83ip7q34wGGXBcB1uf3YUCxowrw5ruhcqzHSnPovpfZatRLux1Bv4RhzHxmJmY8xgVJccrABgf",
  "key1": "27ZYjHG2FHWmJZLJZ3cCHt28FYeCUQMSqKSCfCxgqQ6QXHJxdrmCJX25ThcvL9AV8U2dkBo92yHeyJNPfVPuoPAs",
  "key2": "36969Y4N1m3HPRVZbDAk3HWF43GjdWy8eQ18rQ1c8tB4RCFVY9sqCByzHcxSubCwyQY3CKE89CcjfVXdBuydJUzC",
  "key3": "xCHETZaDEKLk6gwD623AKRBFuiMzrPzVhnetza5BGdR7bUkFpX7PBn3YKh6cA8bSsmCyUZLxUhCCmhD8fNyYfKn",
  "key4": "3xsAjhtWkjk8XxnDjB8wn2BDH4Bg99dejw4zH6xCtVnouEG3AXhxvH2ivpr2PpQGK4Xd3atwaRqFu856974yUK4t",
  "key5": "4E4Cnz7W8tEGWsoocbycADPhEfd1hYPxQVHDKhWSX1dX2hoJWcNvzY1U4RdxRqmoBQzFC3dxoZ58aBZxdx5uDAnv",
  "key6": "2dfuU9muX6RZRrtizfMHbNxYQpbuLYCQoSFzez9AHTEmwk9CSbAEm4xp8SnNNneEreuNFuLUiB6Yis69UwQ7XTdx",
  "key7": "ahMZP2ceM7sUxi3a3oaUAHzAUTqktRRCfFE1wr6aomMtCGYYtKXzksNuJRjvaA2oYTbBSRzBzy8z2mAfscLcfSo",
  "key8": "4BzwGczpQAWwghjrEiJm3ekFtb4N84XLfhF5EetQ6T6bYB56Avd2pamK181HHAGQ3WF5mZ4mbZTmPDx7q2ecKRev",
  "key9": "eupVZrGiwJRCcbRBkSKZw6FxikCrdTgY4LrMFXFeGy2TYiB2wsWgQjRXLisz8Tm2tPBaGGCHTPfoLMfg62nCF8q",
  "key10": "58nGayyTxfExhiLNQjg1UnbG76jYtkGa7bUAd8j4qud5Q113TTrdsS7As9Zqxw9z3RCEpbdBfAk6tjg8mXmwVD6k",
  "key11": "3HAyxT9uJpZcCumG5zD2cYN1zqL5pLtMR6Mptnhw2Nhgrrsk6DDuBC8y8pocGcGLAAdZK5BM8St9HdGLt2Xpfwqv",
  "key12": "25AJ9Nr5KX7bJtEp6LztjieRHYQTfxyg4egaBac5BVZ5ziDWfRczYVzVueRTUxWxKamTRuykrqrJgmfQoVVS1rx1",
  "key13": "2nhY6hx3DwSB46wmAoidxpgkMr33CJ9eKWRa5zjYNBs7g8k4w5aTBcqyHfWCxg9jmdyUvoaKiVyaNQVWqMrKZUTM",
  "key14": "3LhwYRN3FqgyK59UKQatZkd9WPNSnUUo5HtjfwgrSeKb3kVmCnJnXSvkHKvS3Cbg2nHfK8z71BcEp5cQSfSnpKXF",
  "key15": "2aZ8MEgjS7gMGxUjhSnN9paN9g2RhCkzM5AD4bacvonvtjzPyFT8FyytxWYHSXC5eavSBAUwa4a4ZeqPByEkSJA3",
  "key16": "54RNoCTiiZYLVhBoiuxALLU1ZhgjkAa8fCjgVSHffZcKPS87rs5VCSBkvXkpJPnPwQniiSPD5fguT8c86mHQnJ6n",
  "key17": "FDSSaBaSY2J79Y5ZoC1LrXaASYQkZGhA8G8Y3ArGXPvcZQy88KW1top3imGUyBvm5JHzauzvckJVSmFGzHNfW8o",
  "key18": "32hnAzYrmyd1K8LjunCNHZk314k7bwmDNP1TKP9cmHBHvci69of4oPCcBpZ8p3Tow39jDHwEgAWdNZJmCQNVgFDt",
  "key19": "2vdaqVdbFDq6kNonbC9Nu2TAqbFS8Wbg7SHThRsw3u8z8Vp7UFV5XtGR4anhQAjgkVE71BsfbaXpN3p1KgHrGRhV",
  "key20": "3bV1bd4pcBv8EqC4YASmuhtdviaKzCuHVonXGqReWisshA9giLv4FYShgQQSJ1SJH21tmRXT1cGqbvTkgr9LRqH",
  "key21": "5YDn3e2bfvNLsTpXKcQHGwceP6gWaaknMdMaTwpHnxYc5HjhzdxuuLtHNbaEe2D8qbtdBqYg7EqAmjrzrnKUtpqE",
  "key22": "6666SUW6MpwMg5bigWVTVAzskpATN69tT2Y5fC1ax8mQ2eyDQtfdromfYozth8s7Yzvzcr7mTvcZWpSKg2WDei5U",
  "key23": "Z91nX7yyZ5BDfb2Kg4K1KPU7bxvwxvon36nQ6yKbaRbzbwTM3yNgVDw1KYCHgo2cPdQSmEPvsXfzwYquzPfj3xK",
  "key24": "4gnEpN6pqTq1ExwCqkzierY3Eon5xrKT7Ub1w5rewSmSJWvbkXpMUswSweDkDv9EsYRFwnt8EfiSEn7SMaiSgBK",
  "key25": "5F2eUfxbsTnVYfsxFJqpeBJ12zhvTAGtVHG6QfF7uoSNQ6RAjzN1NoYdHLzzSYtCH8E2fXby6PUmYth2mMEukMWT",
  "key26": "5xz2DnS2B7cYrSiV81rHpUagUXhP1L6N3Z6fL3JWAnMauft8Lt4irhqzyRFT7bQ9zfAjryNAyc2QoT5CwhXyQMuS",
  "key27": "diwszbKHEgiFRUdzxxSefb3uXdqwcv1FUCNWPsXZQ5PNjK8Y734dMcxmSHqf93XD4G3GvFhi8jRAwGFqfZv6hLw",
  "key28": "3M4rTpew7NzL4eonZrkAHhXj3K21qSr2ikGiP3CPBap5WU1gofo46c84XhaqgPAauqE2j3RTMGoTjgSNWhDXz2K7"
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
