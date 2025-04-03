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
    "4Yexyy7Kcjbc3kmPi942QmTJauUyQ1LDGyrRvcQxJ27Nm6yfj6fTrMswxwmUAJygGUMfi3qmSmGM4gs82em2wQUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g74SKonKAwtshYZ4DJ2wom3UU4thNahntep11oJEMkMPQx8cXo83fTCo6MuhmVFo9ehY8N5CgSbkFwhFPmaDTKt",
  "key1": "4tGXHzAoeUfVT7yNgdoCetLJgHyzKVJM1PzAiJHXV2XEqYvDvDGks5PnNZrSjfwUVHHsbtX3jQogiLMiBXhjfejD",
  "key2": "4ZdtsSvKAD1LgVsiRBkUG25ifbjaGPDye22QuAFBd6xUgk3WZLR8sh7rVTLZ5SKGr6EP1VUXSmqqsFdvSx6rB8fS",
  "key3": "pwozaYBATP2BQrcL3FYrh4iTmyhCsEKdSpvdsniqvWTo5gW3sD1fkE4pUD4KDgXhKYxGpCYYjgFTd4c6a9wzoM2",
  "key4": "3Qcy3rCornYYQRLFvtpAJAFeq2bPbxGjH6GoD5FY5vYrYDxKTrfUkDxaUoXjrWxeM52Z6jwRMbSd3koBQHWWJFN5",
  "key5": "oSa8dZqppn9XLaFssK9pB4hfRYvPW2zZVYoWmPLyKotn9ZM9RaqPZLy5Tk3W4gWRk3JYQkQWk3dGD7zNavoAedy",
  "key6": "51StZ3mHntiUjwSEoXxksRMnySVr4phyEW5WPL7sLTRJ3RVsJC9cQAxb7JJ6jeW2tYxQctiCp87JRuMgKNHtoSWH",
  "key7": "GQSESimCwmH56vDuCJoNpnMvZr3ngtDFwXMjnEor5G36W6yhGohqaLVCWQ7TP1mEUuXAUDb5jXLUK4783FCkVcD",
  "key8": "3NBERXPtKwq8B4dhJwCAFEDHf8RawyRF9rc6khbrHDCmRuDGu2m9yvua4w5dM7msG713ewS18YFetxHud7YHZRv4",
  "key9": "T3PcN3VqVR7AAdKeTeb37w42NonBUpxz7ApUsQkuUd3LGT5YgmdDSNy9THaUS5iyKvPmW3YhEbkHQFow8b19MxY",
  "key10": "3ED2ogGUtj6DgFu11jSCqR9tebrcyWKipFn7CQZBmptUiHqVkU4auP5GtmkzTZwwxUDg4gmpkN7vdCZ1oHHqLCqz",
  "key11": "5ESC8DfzdRtPb1skuYcXBqC2YSG4D4zUdTsxJhs7VCKjtPVhJ7ZkiFxmkf8TycHf4gmjyhaXakTKUWM4xyNgfM6k",
  "key12": "4vq2gEKyGhkaLe4eotLdHgCozHQaXoLPjJA2iKuxQuFGcSu1xi5LXmcpYVEyyVg3LfLoCLqSien3jp8XomwGkmyJ",
  "key13": "5YxPg1rCdvhvXP1sLYqgnDAj8KSUhGHtPSSJt79Xurbomxct7m1giqHWJrGfYD6cn7mdq4KkJ1Rfz7RTxwM6Jf3A",
  "key14": "ajX9C3frgNvbWxzMwz7Md61JazhbKGKiBan6C8WfCsct7XhwqmLUawrbVKdf3QyPwRpXLqJkN4sjtn9UHgZSSiE",
  "key15": "63FLLNvp3v3qu7qDaXwMd86mRPSoQnFT2NTe4pWn8erwxUi9bmW7aiUo59nW1EeeiVxB2XNwBbVSLqkuubL9DeEb",
  "key16": "L8foHEALgPsSBzZcvTyXozeykTCVzMhcuoVHdSK5q5izi7kDsuiwH4u7Qxv256jagmRMGY27HmigQJeqPaGX1MW",
  "key17": "eD6m3J4R1akXjABXuq61Pe5VkbkGRhv9BHjBVc1Y9h17N9ikgo5d7EQC3VMj7pi2RzYdv2NsnqCr3UFUUfuc3if",
  "key18": "51rg5okmvbK6WdNmRzY8Sm8CCLqwFpimjKJyzLV5k8fpTmUq2FCuLcnAAMUSYnHzc8gvcrqfCM9SNfT9QGNM9D76",
  "key19": "5yXRtYAsDVhJpAGY2RB91V2cscJkLw879sQBEBBf5iH6Gd43wRDAcRbnCSVoRLmsrGf1NTBPKcLKWj6FJP7WeKcT",
  "key20": "5YD7V4wEKb66Zb7BwcKMxSBs4b757FAS84LFZPNZoqhHHHKoAh677PwckLirkowFDg9zvt2HwWCmnXhVMcawhurg",
  "key21": "5XBdh1ZYKCbYqCURfyxybspT9r7S5R54sm3uA7bTNYu5gUu61gDtP7G2ME9RRb8KWVhU9pxha6vXNAQ1GFtgK4So",
  "key22": "MK2BFgh4jbEUrbGX5NEfzq8jW9REZ9fnUD7xekn4jXgvMRWHVy6swkZDjoi3Y4vtCcHCSdhQmb9jP6bTzkfirfP",
  "key23": "2P8VQDhFo1EeTV1NQUTenJJthWoNjgT6jWnziJWyQUi9j5NntCe1AZgDxsbQ2YA31fsWm791mf8RjLDERnkunKHG",
  "key24": "4GaMVksCwTQVntKvEbqsEwqyGoL2UjXpRLNHcwQwJd6oAzbaAn2rdjS5tD69j1TZJ5NsD7T56R4G6Nkckr7ytEHi",
  "key25": "3mVMGWDegZx5kwTML87tSBn4B7eGNJzSczt2H76oxsKaxXVBCKsQdKoqjntVDDbkANaRRK67CZGzBUcQw3HUNaGq",
  "key26": "2wkMnDaQrhQsSuHZysUD841yJgw3NNRJfCq25xQLDpYsUw4PuZKdJJHSxAaf8UnATAYsihu2xgWFPp4U9borv8kK",
  "key27": "2DYm1ZUnaAUhg89GcgvPKQnim784VLcDH7XW5PeDbs5Gj8NgBRkiYYikx27TRsn8B77py2TvQZdCsRj2zXVcBgQp",
  "key28": "345mRDwRyLPHjKjEoupcMFkb3UDgXkyFKJSYTejuSXBx5r4oVaXqQ7r4usT258GoaqnFziaSBSqLRFZnS49xz6WW",
  "key29": "67F3BdCA9G8yCzQ8QCLZ6Hx1QsBc61Tz2CkVR3wHkBto6J8nFu9LUwxxNtAchu9ARnkLwbfmSAnDk9bLuxPfN4qB",
  "key30": "2sBZbsreZQiYZRpT9gtqG1PgoMbXBcsdY1zdu9q7yVVvaEjNQ1FT7gWg2yKUr8e4UsGc9DUBfBmfK1HYv9oCPBqd",
  "key31": "5B3LGmNbAMvARRiVEgr7W2SxFqJM6CzUr9g7oechTErLRfqM3v9WtQrYojFrweuwkuq8gyuLGs4NtUua1yGau4Es",
  "key32": "2WecaxBGfuL5rC4imrbZYNNWzkujdE97g62myPn8LNmsVmnah9E6rCys8eb3NreHVVM9jSzK9nGa2xsctGhr27Bj",
  "key33": "LZMWVoe1x2H4WSjaK9uY83g7tS3bJybi5UKecYTHeoJd9pGcFr3gCr2FsK9VK15pwhoPJ7C9hHWZ4T6LEf4Nqjb",
  "key34": "4U9LVNojq16f2sRHFUGxdgPGmHmLeEZQnnhBefyD4s5csjzLGGEhqJK5pbtGbSF6AUcJtUnwUemFT5L2FYXTc7Wa"
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
