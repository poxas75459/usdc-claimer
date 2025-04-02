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
    "mJoTyUazGyKjEgT57AswrYMQATpTrdq6rE3CDVkZgmHn4unr7n7nCzqJTro4a3qP3qR7ZxqAup4UA3BmC9qez2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TN66VQnjQytJKXCBeSDbxrLH3Pk6drNEpDnyzQGD2sofwck7yZrNBbnGGBzoJ9SZFGaNTEqAdDjbpx75qmGsrN8",
  "key1": "K6NHHNjsBfiRzhfjvUEcpGnbYWnBDY8SpHt6nQNdihQrrjpWUh2Yn2DckSxgpgFC3Ly1wjaoXKktxnrJfyDohrC",
  "key2": "5qrFVQZe43uvtjjBdstvRTjzqy3AVKhqaunfAp73e5cUBmPstKiWcgSpbgepxNGrZLvq89uMj57xVqmFhV9twWQr",
  "key3": "2FukTBmD33WzHfDVADqHowhdy8Xy42KvqxDChPaYRK7uybwCJGZJ7gBcZmZDFr4fBCYeBk2B2FuV1aLnf6izxTeg",
  "key4": "3pTgao3kbB5bPzuYZSg57uFj8aYiiR3uVF1dESLxX7UTQ7aVtu8AB7tYtH8D3h5fkchrQrcHwFmk2sFDJd4tNP8Z",
  "key5": "bpVkBw5NW7E3SsRkKEC1dji157ouHKcdMuBCZQ9tXugQho8KoxBYEe1gxGDcxe4Si7hmjqhp1vGgfbcEsdjsSTR",
  "key6": "5BaozdgP1jVeCRt4CeukkH53vfBQYxMXX9v5pfPrj1LEQVDa57PzF7oHB5A2PDJCGk2rXDxMX8j3TUudT3rzy1AB",
  "key7": "5BUSTjUa9NnzSFzKKcFJ5XxeUaYz8FvqXDF2xBRjZV8ryEfUKtgmtkTWthsG2FmDh9qhbwo5HcaCKvPDA7rYXJ4n",
  "key8": "66s88N8uHFXMLEW9nC9rapbYhdddXFHtJrDobUSW4X5YY5aCqGsvCwN6iyW6DYCY52z8DxGo7jp4zZr2atNd1XRd",
  "key9": "9ekNLphSiLMcEGqUuVVWPSJYHNrESXzkxKLoB9GTD7twcwLBRQ6YdNQEkZkvCurRGnBxB9biRfJGK4FKdTzUk1d",
  "key10": "3TpLFAK28JhPiQNCuLVqkqNWpx9ryKHi2Ez6BqzMQ8rqrNkPSWnRDvb5VgNLGr4g3CLzk4eHMrcM5DyaKCRPe9Wr",
  "key11": "5LqnqVhKvkc56qNnXF6aRfPGVXHAy8MQT5dyUi9LBcHgKHxSFLwxPnHPngHuEEWKHpxAtqUctHE1QHVWo2bmxAas",
  "key12": "44VN62qC5eTNzkwBBAhErQP22QFCWJkRvEd3ujjYN7d4jF3y3xNQxfqDdoKf9pNe95WDafpM7o2rRPToBPApWa1n",
  "key13": "2saDLisrugSoqbMtAwGVHUCFZANZQK8pNXq4F7nCewoFGDwJzr7XfSnZc4D3KQabyMEW4hK9CM4dVsJ1ZE9qskh1",
  "key14": "51rWpssNPFTLwG2r4kkoMLv1CMGpwt9pWWa695gj3m5DknyPkno9p6GVxQFGKCkPLzN5tVLNDyJjdJFAhvrzRnUP",
  "key15": "4FMxP6bGCigFNhenQuN5bNBFzrLVP4ZpQbbyNYkrrz2YQSNNRR5GvK1d82iLio1xVePr4cCdV2vHPDn5qv2hv96w",
  "key16": "3pYPoNnFzT4tMrdodmecDJS4gbwC7prmMLzXrVh6pQZHUmBkQoQb19YHetCrqc4omb9RCkfYc4ujMD8nhd6y4Cen",
  "key17": "4hX9YckqyxGBKGiVL2GFZkiRMRZfjSRynbPgR2yRUfaMTMhKKGQEMc7gx6zfPhSkELUgQaGAdpom2cXWV6YUyVnm",
  "key18": "64Uv7Fe747ix7t9agZHRM5GiN2viWm665Qc1ZR1vAMpunbeVpgCokpYfmtLkCvc7hgaePMT21ozctzLRzTu5gXN2",
  "key19": "5VnfuviVZsUBoocEuEpkCSVNobJKWJ2gFC1Ltz1RCXhpeVjsmiKshR66WbwpM2fomB9froVYhV96yfYA6Z6ojgE2",
  "key20": "5JPvYAyMN7A5yuwg99aNjgxnLCNrAF6NqEE64x2WyWTvmRLnoHPYxTvLj3gLziP5FwKZFvuUhejsDzcD4kfyULmd",
  "key21": "62an55HFZQ7pEAxapeAKGxWnkyHBWpMCbHEWZxxkSZprLLtFB3nMfujty9YaK81uye5bbHauaud3K25gjd6ULBzg",
  "key22": "5uEz2G7XQKeFjPgLmqHzqi8pgpyeQwR61731VBLLkh33CNNgSNw6szFK3z8nEbY5sSYZySouATRzjZKn1Mvzi5eh",
  "key23": "2udppxBhHcEsSBE2jLcNcwq8ghFmLpHMBfV1f7MigA79yEzgJnLWL5EdtGUrCXvY2j65wzJbWno47zuC7GGKqo8X",
  "key24": "256G2cge9ehpzgKS2Z9s8sYeuWNSYy4CPQ9ixMoWydp66WzjvGDFJuPJhh9MHbdzMis7PSpJpKcP6aVG5BoaQ6Dq"
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
