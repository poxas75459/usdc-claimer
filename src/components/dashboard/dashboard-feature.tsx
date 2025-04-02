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
    "3fLb41NZAmN1K3zoyZu5w9zFCMk52Bm4Hw9ovqdaEJYgpuKAdqFXEeh4HayXku1TYDE5eZDCiXMmiFeAYasGzB1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CZVyY3vxV3myugYtWuqBfC7F5i3VMT9QVfhcgAkiZBpJeD2mBPnMt4gkrq9BKbj9Cyu37BqxvTTHdL1uQx7iULd",
  "key1": "2ydqd8WwvaHpA2bvwjEva23UjLGmaUADpFySLwkLcuM4gBBCjCUyr15rY1hm4nZkSJnHocMi6u6FAE5cZgpXmBSt",
  "key2": "63Yp7y2GGqHREnF6f2icnGjw4qEnvLdFrBmh4BqHZMWE2A1yvfYkRaLoBLNMyebMFUoyFaRQzViEerjGKmHnmUyA",
  "key3": "41dft4Gvp3cjQ2YF4Mo2KHY7u65dmJFFpQzLPwXm4evAx2qqG7qFzshf6s6hXPugbHRuYdoYjqhJtX8ntTyJ1V7x",
  "key4": "QExoAzxgP9zvE438aqPZDqM4PJWzDoU6pA15dDNsvTWbVaZ83CTn7R3EYHFjYxTK1wGowgQGACrcWMpJRVs3r5K",
  "key5": "Enx2nee9imyicrr3ycc526Lvkjf1U5PZXZw5ppUkGkDcgrqbXhvVbMJz4qkPpeSUsmAaMsxYZk1n9J1TXQrPLNM",
  "key6": "5Fuz5yaAdBEfq2QCAZo54s548fxMiViGXjLUkhWCxTYoXgTrJ7RPTtSa9sbhy8XuHb6r8dK2LeNm1yckKVyzv2Vb",
  "key7": "3xfv9RpYjV8n1oMzMLWTNnKvvrNBviqUHGiYKK7gXM79bFYHwxfFRGS5cmZcVugAFmutRUK6QDopPNpV29wdFX5t",
  "key8": "2ZGNGLHVfwu6dMdbX1hpx3withG62dCw9mqSKKjYwau5U1iErnymXu92moyrafLtjcoxfMFZcPAuSgHTT7cg5xvd",
  "key9": "2TixNPPAJJcWPvqPZioSyv85eD72xDnvnABuTLFdwzNDk59GxsoRg2aFVBD4ggLwdwx8373QauyoLZ5UV9MktMpC",
  "key10": "2S4Rw4fYKCHguysuCtniR3o7ttz7GxmJZ7w98nYr46F63nEHCbZqhzN9fLZNDQ2ctf1wWM7J2vKV8mFwWfPRV87a",
  "key11": "3GfBLv9SrBHSGRNsR3W9u7pXTevdibGAKeymUVmnpB5Q7H2yLczYzAvqkHASBAmFLcb1DJ3BqrTABpvuJaBKzbwQ",
  "key12": "4T9kJ4H7XHYHYtbxdCoNvd59uY9Yq565MsZj3eV1sFDnRCQ2aS7MAcKd422vzW4jgJQQv3LjVQ3Z7STp8GcmqzM9",
  "key13": "4L9cuBv4XMD64J8hA7buRDnLKY6jgKmKbTMUB3GkbKWsmqzWzWmtVnMcKN6QC2W5AVZo3pcneecfiJGwNWCSb2o9",
  "key14": "5BddKKYhHPVqzVqvCxhyZwp7dGdH7Mg1jVNS4o4tvjbsWrqXdyfkoQq5gui9fkQrxbD1E4sm3ZVrGHc32wHBaY1",
  "key15": "46CLPvwjg9Cjy2JzCkMXSinmgTjDGwyF7Ea3KkjfX97BT73wcBxwYEHWUTXdsNxmbmGGkFSkFHLva9JcCjjGBKzR",
  "key16": "5x5R9MyhunusoMzYc4NK8zNdZxPmLozAoYx9aajnqAAZJWCnZooatEJnBxQHdCKoHEyKx4qDqfCL8qaNLcU6ag57",
  "key17": "4TMVyujqqKJbHjy3HUiKgejcTQhywNmuvijN94xWvvjgy129Gr3xQPc8sViRdPK5Gk5c4jESsYZPuQB7NYCJuQYW",
  "key18": "5zXfdXddJEcjnC4R2vx2GgZWpe7SQQR33XkEUyj4fBHHwQWxK6skKzqneWCikhPan6naGm9dvA6xnXw93CMkLzXU",
  "key19": "3xvNKvdYazenz8AwLtLbi5YrUQCRuqWBzSbFUzhqCaW6H9SGVT5snnVEntUkXK8b4RnxDa3EkA4kFh2YaP1v34RM",
  "key20": "21oKhGCyLhJnZQTLwGzPFW31czJCyQnv1r5bty424SXVnFSfksoPtSxwRFkRsQLq3soinPAPcJ8t3UGeqgBGHACe",
  "key21": "2KYy13TQLN2s2FGVaLd3pRWgPbFdWAaQJSoaASmbBWhXr38BWtRQCtk4xK3o1jon6Q5o43rbbRaPAfpxrss29mH8",
  "key22": "4fbUJKvsS3KGoKcDTgZVwJ5thkUTQRz2VaVNcikXddLnyJncW9HRxhgFhf95PoQtuLbqtq9WoCvfPRMVm1DYmsrw",
  "key23": "7KMrtRAahu6N2ay8tcMhf9n5EkAepzAQSW1DTEDhjroxNxbEDJAErM2tLASxB1wQcvUpKCK75243kYhXzniAiCU",
  "key24": "3kWYmsd634JHsa4hQ4e6VfN3RYPtTWJtoRnSrq4S4yASh6LgYg7XiLg36RG4xTWNNUU6nEp7dzXaZ9k7BUiKznmd",
  "key25": "6Cejkgr7gXCyvE6QfUT3Bpqh351T9t6egxQDCesg43yuS5TkZDTXQ5cQTPwX95rBWTnhm8yXQixt45y6jwbdsKM",
  "key26": "ooxgpELt3S43CeMvNQ5w2g8AERmtHS21Q3ib1FzVqiZhShyrTC8Qko1EJVGWxgyuw6sXCu3CrodEEDD7LefdYLd",
  "key27": "4Q247DbpfAQKERS5oRPNddYQQpAHr9y611LZrAkCv57cejNoXb6ms47a2byXC4zfWLmA59KWyhUKxwvmw8oYz36H",
  "key28": "4WnUQKj5L5QZRAFCtCe2nvCqJPR75XgPUspxgrCawG46eHJWBbkRHJ5kYnd4RtEFsXKLVfm567Dc2qveaBv6z8C2",
  "key29": "5Cf5RbynoQ9RTm9ZGFDEj3ztgCcJdQMemzp2mM6y4LbpZE1bqmWc1JrTmcMjMAFQntNRjdrWc1H5kTyj41LmURKQ",
  "key30": "5HJ8y6sF6LZ8jen3W5K6bQ44jJKj6c3Ba1y69ausRAhJPXvWyPMVcnPWS2U91aU1hYnFPYSJcQApTqZPTiFGaFV5"
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
