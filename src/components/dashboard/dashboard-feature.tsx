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
    "4LwnZsb3k9caHixNGWSszHdayxMurVv2RV6mcFaTPdTgxoDG6CApvFdCmCqqQeERsZEjcbVpkJtRgMj2ewyv2Cgf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9CnwDapUCF8iuNEbPkrabJbSwNi6B5iHjFVhoJ1KaHrwShynnHnZ5NYC3Ya6MNeN8mdz7NoU8NdtnzMU7AtyPtd",
  "key1": "SNgS2KFU5Pz5Pw8RnScUrgWiZQrShsDW7LBoKesik3MysWXd1Go1cRnC6AFiAFycHzvxEdphuwLBs6LihUuD9tp",
  "key2": "4PNcUdNrgWYeaXMvKXDWNyZ4Qw8gvBc9HqMUu8dxs4KWP2cfMpAE4ZUZM3cmP7F12XaR2VoJVYMcgTYj3Vzs98zF",
  "key3": "5my1pcQ1xviCgJZrZXRZmq93y1PZFXsKbC3PsZeicPFPZ1DazHTtMP6YEFqwvWJN2LxAdxZMUESHKkDJu8vGvtNR",
  "key4": "2zQJy3WfuU6U2tN7MhG8kLYo9SEr95kDW2oNxmSNS5gKkBaj6h1ReZjy2SjEBBjCCuukK1khAq4qU5UT7o6wu5YD",
  "key5": "ePQyM7jKtUfSovMiUZxsA1v44MucojgYmoeMuJvJSMAt5LS9BQGxrufMLtrhWz5HditRdA8QEW11zs5U5372Nee",
  "key6": "2tATbvdN9M8558aquivZHoAb4sed6ZgcviQhtnH1DxD48cn37NdFZWN26fo2UusyGQA7Su19JaGTFSLzgyZSLnCe",
  "key7": "42miyHKZ6bcPR4ibbMDeJoUtrsCC1YcnATNfjf1BNo28VLzYdZDGgFnKR3fw2YU9M9TTSsLs1jRCXpcmr7GPe2wA",
  "key8": "64ZKKA4Kb5T5Y2ydvvNWcuySMiGVdvw9M7wXaVtQfANPVcK8v1hiEKLoiMfrYLQpSrWUxTM67CB7LQN8LW7YSaQh",
  "key9": "5yqZCKtBHPUMvkyzarqU9T8qRLXgDp8zgDEFLEDS14Lz7VkBvGAFrq4vEjzVuPKZCvTtfXHsnGzXQeGNuv9zB6iW",
  "key10": "4XgeYiP7RDTeFDMUBeRQaaTd7BuYSdvtTxKkdA1yrWUWXX2UZCAHtAGMzjgbwUxZ6NVD42Cb7j8NcUdhB7T5Ujaa",
  "key11": "2xYwJxE2LNXitsoGptw3MCwuC4uquFBzEfQYjAX8Rj4tZsFyvExPzM4tm4gDzsZhMYxPowLoEuYTY9v4ddX9mLz1",
  "key12": "4t7WXjeUERbd9Qyh5s17AE22JY43SaUnCRtZZQDb2NX7sRs9rUDDUtkgsUHf1bJ5QAJzX8KNNNN8pvWAzD8vFesG",
  "key13": "6TmyikuBD4cJVhvBTLb15jsw4fAqrrnSXmDBwHnfTNvFQTgRHsYtQazMDSCYUE4at96xYUktJ2YnVKfAvAjoaVL",
  "key14": "5xHZ2ESsT1f7PkLiAsGbXVKf7mRh54DfVRBQDcCbSrc6iwq4tFzB1AfzTTrhMnaHCPogy96rgUktCKA8XvGRWYvA",
  "key15": "2VafqXWS8H5aDzPKgBHvqnhoxKJMnnv4EqsXEwSHaHkjTXsdi1KSG8DxqvseodhFoLugawiKJjNNPUkgX6FWpFhT",
  "key16": "2Du3ymLJAM4wM8Cb1FDzVqg4SPQHzviRKuE7AGBwqKWnXQ1PVMDMrogmFY8wrAiehcmHXPSVczKtY5kmr5XyENbX",
  "key17": "4qPTkSb8ng99PTh1KJQwTcuzQrgdqibrpSeo3dMxjT2xUnt9JYUgpx1zoJE51z3UvJ4U9TpnEVR7f1iEkjN5rxzH",
  "key18": "4WXhQqZGyP8ti1K2adZemLFMj6ALKMkXDPCdfVAJkm5CN5m2G8n8F9QVCevhqaJRTvQ7dFoqh1r6cQkWMxVbf3Fm",
  "key19": "3HXWTaaNQ1QBsaKpdLAPhZYyCYQ5mm8cWbHyKECc7bohHLRQt5RPVmRQTksWqgKuhPAVMcvXRDSGqzjYynDANmvr",
  "key20": "8W6uneZzMfQB3DTYz4MwQNkfLqMK7k2Cfpf1UHTi3gv55NrGG6qc7Qo2kY6pwrpwHt8gkHKZFf6bgPvTyBiQW1Z",
  "key21": "39osEFogKdFfAPQuidVBHGBdug6KBfnmHNxXbowZJMwTpQbx3f3RBpnSuTdiJjrNcxmvAuHWso2WCtkkPkczqvf3",
  "key22": "4DGUfqz5dC1adSY75CJC9VjtAgbwGnYtfxBZCacz2SW2tqAZmrmuCLzaHE4JnJrCjnNtiJyanGBKWxd45vMLWfUk",
  "key23": "4MrS838zs7BXQnRsJT2EG5GAnVXvTLdAhuKMo1hpwTuSYjeKuygQS2eqDQPRrrxknvE1cB1HU7pvAD7paTb7CF4k",
  "key24": "3CJufwwQvUHaN1duEgMcfyAqpDHsxMNzuTtXDSfM8eWdcht6yQQ1ChMYjaKtvHip9kZeuyNqcyfbCBkgEUiCWen7",
  "key25": "3ojNYXn6SdmsYQEfyGbEEKr9qsgMfXmy9PcnUMhLWSGUytn1GjXSy5t9TS9nWuMzqwMjPsEKPne26WRzHAHBs73j",
  "key26": "2WwqPrsmx1nJsrHoQt8vsr3mUNiDWTCyrbcTrUEC4kBTEYW5N5nWUHEm1BeufEfUsGHjMhKjmXP8qiog78JaPEyD",
  "key27": "4ADTnLkSSf3WKraZ7ifZZKEd16DmQXF8vz6XUZG7QtjFrCnwQzx2jGLUksX12QAxPNXf9TgkgpZzd8pn4i5oKPCU",
  "key28": "5J6KjFVdUYnj4HxtTgGtXTji5bghKqRqbne8Yt6o152vSBpCyrZBcZBJcTk4bckgTHCRTQu4xFHAuwP63jn8ABJy",
  "key29": "4LopQdFgrGzDZYYPCqtgPLCgimgP4SHvTkfKmEV9TWh62iUjWpCsGnGhZhhhzqv8Zq4atLrkEsSUBv8BM57cFm7H",
  "key30": "4K11R5P4KjBjgqkDu2dR1xjdBRhZhCX5AGQS6VHULZWEGiiX9UqXTrymi7zQH9iUKqiunoMrnX8j23QAE3U4eZ3P",
  "key31": "MfQbP3qdb449RcXErAiGvro7TCUxnRin2H7CjyAasP8xZBqDPGEJ1YhbRjaakB7g66CYbfS3Ca2Joiv88ndhm9S"
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
