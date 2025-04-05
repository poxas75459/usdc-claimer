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
    "2mDG5ZuwVz9mY37gsXYQiF4zhDTQJMCD8AJB2BciFWraFfsoCfzdNBiAB7SJEh24cXbmghoYRvYG8vPw6MdVFgGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PERkdtC1wST4XcqA7BWEUHMyUHiMwDvqBSiJo5n3T5efYdKMpVid3ueSVr1qECou7R6VB5ZXJ3ECzAujDoZdKbM",
  "key1": "4rEtfyqqt5vdeBuDmcho2LNFQY4WFK9Wk25UgbnTWww1KrT6Acov2btVHzgrRyKStRbfV8WMZDiukadU827MVmcr",
  "key2": "3L3jcGN67YBsYGrjxiXPuyLvSr3i7jTVzm1mzJkBLKmTPqxXHdhCR7qDeAJ6UKSkUxAJUrGZ9jUA8j271nHDNtc8",
  "key3": "2jR7WCB29JspCLyHG8ErUmXd3ZyYdUtyZX75nb4vqEpcCsxhQxuhtBuPaq79cBXxnnMYktAHdN6Tnp8ePWPZFZTh",
  "key4": "2wjvti6asBDmFcxwK4DnwiaX6WNJqm8PsufGnvCoTz6DxifDB7qc46a3s5t7i85LoL2c1zAhx5u8a7AnuXH2oKBT",
  "key5": "3Xrk8w83y5ubLkJUGUs5Y3pKGXK2ga4w97jTyrcRhV6n6QHQBfNsAECxDRLyUxJemzv9Prk6sqUeVNT99Lh9pLj5",
  "key6": "eB9ztNv3scNHaAzJCzxm95uHn8rqoFfm9nKTrZpXtrBj5dWWojjUVEHkNGyzHtopJCYMX3Wy69GWnYnBK2FzKqx",
  "key7": "QDQkjFXmPgE3TnEMe8x6xKzicqcXLj3cP97sD31AAvRvD4bGfqKGmrki1mXoEwCN9sRRsfrrHAvzzEJLgu9KFfp",
  "key8": "4vcRFobHXNQBVWnpoowG4frsz3vJ75gBCcEs2sDjniwApGfe7sgBT4zhNBtE26Bf2is22AYGmpteotPhrniQezgM",
  "key9": "4WxPs65uKfgkbF11nXzhvaqsPwNomLvjNrUrRW6PqCHwdQMFi9GRABW5A1g6bFwTJFNyhTAybv7GUWFkJCT9KhpW",
  "key10": "44F1gfvpbRFngr8Gv5vVfKBXoANgL3xE6ZGt6VHv9ZeUQaNLL19Xet3ZGxkypkvBDmoXMuNyqrbM8VdtatbJdB3G",
  "key11": "32swLoE6JTEugijNUPtHSEfdGSeX5uLA6MacAx1qZtEJzt1c5g5MX8F1W1veBhRKZBPHX47PqZLKiYSrkuGodCSv",
  "key12": "2aEq4jSoPjZSnPr2RBfdiH7BLyvZ5cg5ZRcvJSYeuX3FJbgfMh22wvSPsMt7rfetFc5HjSXx1LX1C3n5VwsUqVqu",
  "key13": "5PdBymcebkFeANAEd6YF6g6uyF3hSaFcbrvLMj5tsN4yrBdsext8va4zZuC2VKtXVr8yHv5bNkNyFcrhfVDghdvH",
  "key14": "4JMsR6iX1p2rKq75YKiWA13dHkMeH63EA98Gtz4Wj9D8v3bBUJN4kryZspnzFmt8KDbVTx6Ydfz92zSkBbgkFK3B",
  "key15": "38HpYw3DGV5PS8mpFjkpCbiudbes5xoxXM5QHuzsPid2yRg84zZafSA6xKLB6R4mcCDLKTi6JFrVWdG6zAr5YZUd",
  "key16": "2RcxQiuxEobfzqk6U6EYoiTJcKwXAJeQUziayKaAZJxZ6G5yLUS3PWPL2qUt65veJuebqtpDAb7LbwjqEntTr4RS",
  "key17": "V3QQ4MV9LU14ydY3n4WRa19mxzqfn3FWCpbofFXbnxtAUnjHL9BY2UDVZ7PUgh39PJ14RW5aCKHQps2eE4NWzn1",
  "key18": "3QCihgWHWS2mDr3sbSshq2bTzPCm1WDeWRYyh2jTBs3TzuwZ6fzjYrogQ4Zibk3YVgUju8Hs9WbQiNKM2wbiEcSk",
  "key19": "46265bDZ7AsrjJ4n4LTRWUwKBFi9sajJtjBKQcMYE6FHGvfkHsiRWvQGqaVeba6dz9PJf2qEjyVwZ1pXszmxEsqj",
  "key20": "ZyyLz1X3bR9xuc3qfXsdCmWvprZ1LAdD5jAqbNc3bHuHf6gFTBAWG1eM98iHyzjQpq4HijZdL4b8LauutCKUhCu",
  "key21": "gZLQYF77kBffWKyE5CLStWrVxZ37fXiTNCjZPLwyqVyXPGBSAQRsvRgT8PZwJieFtLQCwHc6qBXZ8ieiGDWBUcL",
  "key22": "2Pw2bBqiabgUX9fxjmf31jNh1JTxyBumhqZCtzw51637Gb5uYrQJ2Grc42KnjUVw2ApY4MAy2XUbBR8ZdEkbpV6J",
  "key23": "4zZFm6MezJYBTCYc95USLzWsUR5DmnhYQiVucnf9D3jK3QXVApzBHUxFV8h8WCvtztq9UGggFiosaNJascmY7vV3",
  "key24": "4qKbG1QWTBmNNUy5q7GGeVMrADfwBU8jV1Fc7ixAwKkcS4prswftQ7Hxx4yWD4vP5V2ZEVM2viT4Sy4N1pn7Dav7",
  "key25": "5PFDRrA9Jgf8DV2UxcNRiDYDDrFXcWcxUnboEK1rDpbTut7q7W7qZVfXGEKxwzqwMKNy98f9Dv3zgHNgV2rpReST"
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
