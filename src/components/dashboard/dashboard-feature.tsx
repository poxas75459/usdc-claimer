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
    "4gPikvKzM7XBV3JWcYJ2vcEWVHJzLsMCDQXL9sLk41Td2CvRyrvZBALfXMK2NJLzMpMuPjifU6RyzdopXxKnFF58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UXaEAQYDHLFa6njLi8im87DEJbZFHiqygnzGprH3qCAqkb3a9gMRG8P5Fakmwej2tJnSKewtM9CfKL1w2cGFMSM",
  "key1": "5Ud49qLFfHAt6eZyLes7JbbHBy6AUA3qdRx5pP5Dh4fudokyniWED3bxmWsj2Qw4yn7AoJr54ScC2r9NJbjdfRt6",
  "key2": "4zE5cazA6ZJjNbsA4eyRUZqD2p2BHnLuUtrJy7ox7vuTuqRoFmSgZBdjtLhQLRSaDQKctaTu1sdeuASZkNNiaZ4a",
  "key3": "5CZDDNfdJ228yuiBArQNh7myeRseWqpJhdFhmNvUNAqDkuersV8gqx75G3KHkHoQqgxJ4kxYjcRLJK3yHgoy5cvw",
  "key4": "6t77AhKJGqdQY8c4Xj9vLVUoLk21gzSTWPnEVNHh5d2k8Xi5Gk75A5VyfJ15reqZHCzvFp5ce9CyEHRDut7EFxW",
  "key5": "4D9jkmKvnhBWNJivfC8RguvXCr6zYppLNcxUHDANGU8ZuQZx67xtZ6TDXrbWBwvbjCm5CsXrkNYRedqxTksodW33",
  "key6": "2XPxVDsewQnVNnjR3NQr8UKZCjvuzbcs12pY81QVPVk9FqH53BV4T7Rp4qnJGF8XSQa7dHpQBXdKmjPrFN7e8Snj",
  "key7": "22wCb4caoPXW4X82VGRtiQdKeDR1LWsnT4yrCNycayB1MzFdbKsaQZegi1d8DiK4M4Cc6hhSTNeTVoc3dDwrZry8",
  "key8": "NPhJWkPMB88t9ikbnukqjYPFcRMQJST9yXD1iy9fnRuTn44xwksUvNbDRJZSSR6LccLYCvNLD1Uw7nxdmaBnT85",
  "key9": "33U6e4qt7qdDyVXCYRvstG9VTDN1vKDp9VXaU6BZtvZuimZsHdqd3a6gTa8zPiHebqJaKRVfSWzrAWGbJhZP3DVf",
  "key10": "3mvxDEJmxoViF621HVh5LsAFYDqnN8wLB3J2GQt1wPSB1QBtQGYE3ECDCU7seVrykyMjR3JycCrrv9jxKcG9mF33",
  "key11": "4u9EPNUwkTjmJfj1adjjTS7ab8P1rQJYJNGYSocoStzGopMbZExbPzQRxcWe2dshZKkThyk9AoqFMNhtfR3j95VN",
  "key12": "3xBQxaRY51krVc58vLvpj354dZTNYKJEtqemWzPjuTvJtfko9gcZgsShaJg6pqqkYuXqwaGcvMmG2x6VmTU3Mvq3",
  "key13": "rxFqmTrjGyVhRi9gdh6MVouaqZCwYBNuoApVSMgZo1cLiPHgyzkRZXACV2LAARg6DMna2gYCG2qaEdUNmjtAXGW",
  "key14": "2MygZZJJwrMWpb9WREJ51xm48fhUGLi28pZREUdkPyqj2WJrjKLTTxw8SLCGi8UcHSeuqDPBKcc3nr6BhYzzXk59",
  "key15": "5NUmSsNbvQFCvwWzatJbCMsAN2k4xX5YeN4eWuh5UdDH61eoE8i6SjAz9XuQkCkuDFq88TZ37nyBBYabGezUMvXL",
  "key16": "2GyZaghx9QpBRFcMUkTqyVtWiyt1V3DFPxf9Ez1nKwD2ESfYDqp4qKhxEqzeovcZSLDtXjJZeUkxX6XQkaSzVLTk",
  "key17": "5oEquE2hJbpm3YRANRpa7Mw3fsQR4tBb9AC21nxVHXcDdkWiRHaQCMB9NRXuGpdnAkRucGXq93KJgQFAfu1kUXxL",
  "key18": "5eb4QzjREeDK7E8ABtp6wZ9b4dhDqhK7NtLiaN82iMFZDFGtRiKCXWQQECcrbEhJhJ1MDciXZAo42dsdghjCmmcx",
  "key19": "5xW3WepaLpuGp6PfLD8qzzYuJS7wQkVVJM1Ew34LRQmDcBkN9dZ6BpjYnaHn544EWLve7fH2nramsGiBKVM9WA8U",
  "key20": "4jTc8MsN46f6oYTBFZarPrSsbJQd8duUQErRmTHufnKBAF1fuS4DTd4GLkc8XNRV4NxR4YMcY8tkNRXwCjujzFWf",
  "key21": "5R7SjvHTzyipei8mQAqa6484pWKNeE6Lmfgx4843HdSWtzzMaDoxgC2LL7zhDhzb29oH6ZmWi8Et2q57cTCMABUQ",
  "key22": "2V6NaTG5FmYDVwP6Ft2613UHTd7q2Dkc35tX2sdWUwBaqaoNTp9rE17cqvdxe9zxMdNbKqLNuQafTi2Eh16xEnYY",
  "key23": "bkFkbb6P8ED9iyCeLsPUMs5BmNoBX2G4Do6w8YYgTYzGwPSyXUMRjf1do1YK2VrUj2oFwuDrN9ZTj1bbgrQ2zWo",
  "key24": "4N1vrW24ys6Aipjbrb2hniKMDTk2NgivuYYQQxAVmyyXPeyyXXEwhJ5c5Hca3vYxzBUuyLPZB4mtAZNtC1794UwN",
  "key25": "3dkjD91CEdiG7d8wRsPRrEmFMhPao7SWxPtoqdkXGsBuxo7kvyzwAXw3LX2xm1ThWef6FZ9SDUzuAYuNYtvFjoRr",
  "key26": "2ooM8JwiaLKDm36EyGttuszshKvasrxSuY59qbGMLRnx9MNqP73TZ71nA8HvT6EUd4VEvR3138onhYYgPCe6sSxR",
  "key27": "2kwKzBTt1nvLbfmeAGMor7a9ZGKE3wHYJSQP5Wm76CRFmLsyLUTAJHpCHzBeEJaM6cybuY1pnRLKRrJkbUorVK81",
  "key28": "axgGUYy5VE7H3gk8jtuV2g4Kh9Zh1cZLDYJ1TKwFVsWmH1khmmy1VK2YZG9GztFs6xQRDTCtn3XaSYsL4Vpg8Rh"
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
