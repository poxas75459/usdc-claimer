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
    "4AgJDuPekfJwcvi7HYbCxSd4c51ssEBjeJP581vWX9bN9jYYZKehqG5QiXz1zQXFgRMPwrAzNzVbykDe6kM5qJW6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bnRurtcmXRV8GR2RAKHN1MTZQxms4CwYXQXqtVfZs7wSRM3zBKZwmZb7UnjMKnFs2bEvRruCCvkoBes8agE9BwE",
  "key1": "3r1pwxzmLxfz1VAfs6zGztVLSXRB4r6X74j45kHcXtUd7VNQXszPLnF6qwoFw6ujKdgyKAuqtGdq9ULuUDcjVdSU",
  "key2": "5MFaeD7cqmMJKxr4FYk24cbeHLTVXyEJpUQ9tPthuu8ZYwrdv2uqJF3hhfgEistZKiSscAR6PvuBwUVv1HaVdPXw",
  "key3": "46MZfhkya28pLqPM69vzR7xX2eUDjq5WU7SHF2VGJ7SRhPRTfBGkeXQVKSb8w6mSJdaapbg2UtV9uWT1DBF6wvpn",
  "key4": "3EHy6fMQ98K5YT2dvZjS9ouuHmEKMayLZ8rAZeHipzVsvaa7CMwVdrpGTLVxZekAus8UhaoqqpYK5C7CjffaezmH",
  "key5": "8ojjqWtxHfZdr4kWvGJiLwwfYwbwk8KBMoKA87SpBRveAKVtBtUfZVtwmAwNoAwTAoJmuu3yXkwV9Q3u6JyFKuM",
  "key6": "2gfoJAALFcKypo2ou95XYsFZFuKNQrcWB5g1gPDYxBoqsk1M6iLjUXfVmYJ5S27xrZ6r7RhgScGGNRxXR8De3tRf",
  "key7": "2AnjV6BZAPpmVwa9B4PFYjiHJCYHJpkepjUNfEqXpNAYDb1UWhtvGZZ8zpPZDDSfpwZBcueuvqwf67SXu9R93qux",
  "key8": "3zxnBVHeQMJuNxuM6xPGwPKdEgoTT2mMKZvK37unLchmtycHSWm323gxhppR2yfxrGbEXb4dkwpfjxXbwETVvGek",
  "key9": "26r4PTyWGAcTro12nX9FnxAWs3gGZaZQ1C7GwdzpvxuCYp4pQW2oBrK2hMyk4dMHm4X1Mjvb9CJo5gMCWs1Bhkq6",
  "key10": "44eQjm1Y21G2VP4B7t1ki6FVu1KHGhCqXwQBv65E4xvDXoNh47MiHA3nUoKjVjabBoi2JKXdcHuAzjrZMFUu6uvb",
  "key11": "d9z8bWorHvNjpsDaYRFQ49xp5AEhzC4s7EX5iixwZ5hQfEGW3aVPmMjZc3Ps6qf3tgXFyn3MpTSa3z3ZaYpyagm",
  "key12": "4zg1RhFSEKr6YTq5JAuhFF8o4rvEQwW1mKs22zNCFPbyPhKMSuapsmkGEHujy8aBaBwPjWKL6NdhhqFXjZheSb7M",
  "key13": "M2J59rryK7w9swr8QpoYCHtT9gAjNpeQb3MvQiA5XoUTjwtdLJjXncTiGveam17HSSqFSxhKGJVVun9BNjmfQHa",
  "key14": "Rqz43Xdio6qKwc2d8RQScZGJNii6UqyPJDByvtfCXfoio6nFh5Z67WsMCdrBis4B9UqGWna6C4wV2WPbfF2LsjB",
  "key15": "58JwZAGVL8YdUJSJ5hTF7c395Gq2FL3NZJYEMKbD5PxVEvMMDgWwa9UNQxufgC4onRRwzJTczmyepUydTqTR2cnS",
  "key16": "2AdfsqUSJ8mJMfF8sN6poH1WKQerCet3CHdmHdSJtoE1osNf6fYKUwF8GvCSjNXLmiRzVTnKUbiznn694KQs6TNW",
  "key17": "3HfD8BPuZBca8bdjPbHFmGr2BUmC6FytqWVY8iZ6eq9PKBCC6ZJzUzMToTPNQvq2Z6143hH9Z5VsSfRnHt94kBw3",
  "key18": "44ZX9ZmQLM46RSVzZa8jAXRcVP47aTxShjbUd3sMPvBJ1wq1NWah6UobXTnpHaFsosPsk53pvAioRPEbHVvWLG8B",
  "key19": "3S53motBs8uxfsq9Yy8yf27fPaXehjvbgeKxiTbHbk1647uGGaVHi35VzJ6KrosbmLTW7Avym9nfovoPnv47tALC",
  "key20": "cFnFqumGV2uBhPX9hYWFHcuQiKfzskHUeX3PksHptTpkfNgsrsQPq6HV4QxTxqhiMXPRYMQULiFH5nHY6Apnjcb",
  "key21": "3UTcWSCrPDYcELBfJFLypktj4SowdrkRL6F8wL3qMGDe1QVHAfVCvngavMD218w2zNHsLPH4z1mFtQhcReshCovP",
  "key22": "f7uF6sWNqsZ1gikEwn6aN5BDM2pM4931nCbyvEEZg358wTWzcU9yHPVChWus7hZXSWfJeBfkE65g4kXjMtEZCbr",
  "key23": "ToLzP6SJxq2hf3nhwBAS7xGbhtmzFMhXkEF6QekFNC4zYQYYgZvMbbGWcqoTshLuUxUkszFeJ7634eFEERoLC5N",
  "key24": "CTUsugX8PqSGcDXZhKvoYovPkgF9A8EMa4aNrJ4DS9vHVmXMieBHJWhwmHvgdTKR1gv6zzgUShBk1g6sJYVmmK3",
  "key25": "ik3cQvz4FyMf85h7Cx4ziMN5VeUWfY2xcbL6ByzoYSYfXXaEBidp437PSVwoDxG9Ps7EwzTdAg6M5oLwLYYrUUz",
  "key26": "2WycLdnuFF5cBA3LZnMxDCaywBJbXF8B4svQLyJNbp3ztrAuW4b7vi6xFXSJLMFyaFKrjHr7PrEanompHYFSpxnP"
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
