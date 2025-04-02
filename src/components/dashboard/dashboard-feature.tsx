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
    "S8XkRWECsnEziCqJ1wHdzDeqVbWPYc9Wacc57racXgngs4F5uwQhhXj8nc2BQNQXDM3cxatSFzErLLzumd8zrQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JwbdSfnj5hkfHtQu14b9ATJBvUYgVpPDB6VykkEWT8LdfTMQEbzSPH3J7E8gQNLLi9QkS6mzQP5DaAYvAYXSYEh",
  "key1": "4tNP2RSgJyKhhS6TTes7FnDcWyH71jXLUpCCzHWwXdKijq5zDY8qM5HfxXQuJDFzu9jZZ6Pg9UdG2GL9buM8kEgH",
  "key2": "34KHqdAHZ9YiUbZsEeVfCtrdatGyDLG1BbmC3PSSE6iesC3JWTufq4DGpPazEzHFdTTNpa2CKvxBfgc3ESbPxTnM",
  "key3": "29xN8YemEyWxR4pHF5QnWjRgwoGw7jxeapvMUfTeSDdGomPqC5BTjyctx4ZLDRRbBkcrsFRz6bAYVeZA647pmrLS",
  "key4": "58GT83ihCwbHkaHXpb6Luqyj8ho7tYxK3mVyJWLJJNESvSVbfSA7Xory35JJhqscEC1Kn1vNKtPTFQWJRsmtqrJ8",
  "key5": "MnCWG1hN7KPPNgkjk1rRwQ1eUmSoxM1KA3nc95HU8wKVbMSfaKAwydBWFPf4Vdu6KHMVyq1uFpXfPPtdfWui9Dx",
  "key6": "669cXVJPNK4VvyHn2R6pNwJAvgAfxKJ152X4WzyH9unjQVHv9e3JgWtD7CuEZQNMpgC9JTBVJf2t4AuBqxvt9obi",
  "key7": "2nnB6z7cdziRzesrWzFmPNNaEWHjwJCwx4DPpRU71LcgQXD1jFebneNFAuCMmB3BFeWBuXT1E2qKFEFV7NRWYbCG",
  "key8": "2aYFZrpa33tU98AAguHnjJ9BeUXWQgpeKLCQBYmHh7nCchxJpTNvJQzZ4CSoqzGzV8Lp92qTiHqYHv5MemNTA7ku",
  "key9": "3hRy2sjEPh8T351FrUvuqtf1zcz9qUX8vNX7kCoGcg46otV43efdH2KJLySL3GnLpkFM8TVdATPZw8j28Zk1Pcwk",
  "key10": "5AsbzoeqZAqZteDyyn7P1s5raYtU9twb9xEmTx2RKDV6AS8azZCcKo3o9JpqWcgF1P6MTRHdJwLh6uvMGXJEG2Dg",
  "key11": "3haLp2QA8AZyRXpo4XhcbfMrmN4DZTs4V7CaHFtrw9EuuJH15L6Y1yPEuphTsjEzgb75vPZWn2gNQB29DvXRFPNJ",
  "key12": "61WBrMegBHwb1dzpR4Wiy1KDHihk8xgvYb5Dh4UyJq7Hp8nLCL86b2uFvJYBWFwSwFLwCnaPtJBVghCj6QFN9rTX",
  "key13": "1JnkbqLmcfZDTsiQ6sB8CLPRNdtpXbj1BsPb2eB1oEvsbiAr8YZ2ZwU1ZQ7AGvsVNkmcTA3mgoVh3eC4GUMghGE",
  "key14": "5nrS7boKGuMS4bQZnMXGJtAifEubezzdxekCwYwscgi1Ks4w9wiuQkBRuNhEMxHyP53gtWYqzvZH4sksfnVrYj8R",
  "key15": "nT1qkJNppfseEgYVH3sCDiFGSAM3ic8SB8qyrjzuWkTimnTDRPzb9KPsiffyxDcHBfxqpgDzNQ9589YMjGHXQoy",
  "key16": "kmRwncs1z5Moz2Vw5XXeAncJWJSD3x6uagJgmq1YehLz3gxaWC37Ddca2R9zLJVH3TuXwcpCnr6EUUSqCfQRffP",
  "key17": "bMcesg3mHri5VeqHDaNyyvP6pY7nqnSVHzLNoqVzHzVCNumDNUv1gCRwXdSjRRBaUu4DqxRFa7NB1ZaQCukd7nA",
  "key18": "3m6GUsRKTTmcf9UTiXAVwFmGx9ozVLDFtvU3rMjUFdFwGyLmi24iUz4QAJkqac2A3RWa5NiwxYJoWNBoUXMqTE3E",
  "key19": "sPhpWJHsu2aj2YouGtWsxEHYk33Se6HJNMZEgmJbe2tkDG7b16hvk5JpeJc5pC4szsmdamrGFPA8yNPSYUbzSna",
  "key20": "4QS9YuxdAhHNf1ej3ddmQaw5xNsLVaDuYaAxisZbj3hMEVF1jNfvVe7k2RHsXEq6mBF72yo8nVxjpZw1eZzNivq4",
  "key21": "vF3THfvVcuEo1n99mpYQ2n9yWeBBb5gRwcFoPt9vU2LTUBP5W9KmG4ReVbhmNTqmSm3mruaMJjieXZkeEWVXd3T",
  "key22": "cJjD9n3oMgaGXya97WTk17NGRFirvyQTg86esnuGVDbggD5FnXmVcAjAvmTSM3arwxsA7hyaA5YSNK31VV65afA",
  "key23": "5RanivWTw7KXxMxZbnwt5JkUUibB5qk5zbhMpuiWT8HDsiFqqs7nUytQJ9y7pJUJUmFLSSpDnMjid1LFKBfdzTfy",
  "key24": "5DoDnSM6A1BwjhAFBr99UuMXBA68D8shN1gPLUZZNtdvgk7nLgoA9p7shuVovrvnbUkrz5kznj83H3MT1r7K3QY"
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
