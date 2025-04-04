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
    "38QsFfVGG7pS5QnmEjXJnmjLMgmPctajS6qzPJyCLGAEgowry6npRYDhavmbSd9hxmbHuHkJ9CZ6w2qDDKDQCJZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65Gs9QBErmrmUa7WwTrV44m1kJgqkU89NvvsysKoH1oEnJWeroG88pczvgd9FS7TpBWCwEtQHnw5PvMA9Ymbw5Jp",
  "key1": "4CvZPQydog2GYChaf9HMgsgpqqqeVX9HhatTeinVNQhay27oGX1A6rBzJyYLPCmhgTPFP6wuN67JX9YF7Va84GAQ",
  "key2": "5aadZ4aw2FNR72brkxgVHYfQJe4RPKGcBJZ978PaXEXikbATkCgwSCUxrHDxGr6Y1c9JkzTm6BESGhxwhyJHGwrk",
  "key3": "4yjQ5wbrnGUzB69SL69Y37JiNVNduGJsYRmqYmLo8uHhqgYhCkSEvEM5UmkA45PMHunaaZJ8fg7aR19ZwctRRonS",
  "key4": "5CquqR34rmHXo844BH3bb9m6eHcpzfdLbGD69F1zZ8zWaAtqVi76yj4mhQFCAMjpP3JSQxTFkEnHMwH5fSA5Xs6S",
  "key5": "2mRdR2thE863sNeFSaysWzTYsjeeyeeAQ45sdYB5CPzopQJ6MS2vDHJpJ8UtGeacqk5aavCDgSeN8JQuCgh3vtL5",
  "key6": "45FeNwxHiLbhKrdntmm9zxJoYYSEiWxD2GkkjHr4wMvH2vyoSsNf8cMcCtnb3CpHi5YpPWGqWYreTaRBuQuBXvQ7",
  "key7": "5CVxLrGATkG8TATc4huCLXpUZNmjjiu2MsPdYf9gkYEFS6ND2XLbuy5341bZgdwbLjAGS8GTidDF8W6HvoAc3D54",
  "key8": "3G8hrwyjGPaYXzkCdbRgVyHWXtTxRjAzueWqqQuTsC5yXc6U3fzqLkG8RUVyeT6gJzyunPmCQqTdAdDdM8ZcdLQW",
  "key9": "3XE655eTohfgMdV3WxZLWJWB8CYahe9z57Renw6oM87Ru4Y1aKpWF9NVcK2Gq8X4hQyxKmN8xAZvP5WqoXrx23sU",
  "key10": "MzTQDGShnfysgref8N9GCB925UAosMqoYGzP8GjvBhUW5SGY4XLVAXBxQ8JhDjyxvA2NDpvHsJRKdf5VPp5ucbn",
  "key11": "5hxNfMmj6G9et1HoDkvpV8EHyMJyH13U47T781xT5XG3qNcTqi9aLozfDN7i9sTSGdKwge1mhUhhuwWqwGo5rGRp",
  "key12": "4ZVR7ctna1uG6RPjEAfd84NRNSbpSY7XAFDHpnWMs3AHX1J5M5EzpiPtmZE8jdEvCW6MNLQbBEF6uWytGa13uv8e",
  "key13": "WWrZYUHNxcBQQSEGhw8236EwrMfu8ktxHfc9bnMDgbFb7ybGzw59xS8dHiiUNFAQJ7nqBbnBX6zMStnX2KdPNqg",
  "key14": "35Zw4jxKSbtkeEKHsB2PbDpGB8oGH4iohtCvhywqwiFSadSQGvQFrvPdnNyfb2aLQHqftKYTVnJnT7LtmtxnRox9",
  "key15": "zzsyWD84PnsDmNoz2fVXtKtynWfwmsHaUuFiAhaNwGnhsFvE9mXLU1tY5VwzezxmpB6zQz7jwXxiDEoHR9JB6RU",
  "key16": "3NzvpAdGcWYgBa3UQBdkvzdEmRL5DipjdWUoit5Ypuof1KQQZpY6SKDrKPj6FqTDqQaXtNoapmZoFsMxsnS1SQE2",
  "key17": "4vPEm4Vk6YkCqioDcP7u84M5EzhNsRQUxbeRuYiux7VLUzaVN2S1Cq3DAai5Dor9yn2MZ4RQkLbHXXZG2UC5kdyF",
  "key18": "3PXLpeyMumwUYrZ9nfgsoMqEtFNPfqNAmNbtMR7JBheMTsUKBvBznMmpkUmRm7bKmaY3XzgiamjYz7kNDxoNoMmv",
  "key19": "4Mr4Fte1P1cied3yt1e7b7XryXTue2xtATvKyWr6VHE1jjHbk3Y57yUrdirFqWy6yRjjiQXEoJa1GJe5YkfFneeL",
  "key20": "xjdkSJJrBwA8QZG2NndAnbVB5LoMtKQBqzGqEHundxTW2msHZiX5RM4TmUnB9tqWgcKtUBqMMU9fqoU543NJ52o",
  "key21": "5LniBNiQkCKybwdh7mHBgPpcCR6DsUZVBKuLxG7Hv8htRRpMSr5KgF2hAF4TQ8PmrCYt1Lrskn6Nk4yAnRQyzWoR",
  "key22": "5hQiU5ExC1Sahvpi1Hqg4tNE17878ttvvHgRtKcktoqbxsJ4JbMCjRDdfGn2tHhAvAjPJsJHvF7TQpH9A76M33sF",
  "key23": "5YUCHMfYySrPcVe97Domgf167Jkg1GgZdLmQqTNyTT3qS6STDT9paq9YAfhhKkXMC2Z2z2P7wNo4T2MeJ7Fzvydn",
  "key24": "a4AA5n1QXFDTog9kH7oLkSRJ2jaPGp4Y75uzi9KufJYBAY1aWc63uMTNgL4FRo8wnbWcJNzNXj87iKNk8bRsyMC",
  "key25": "3Rx8KjmVchRag6dREKsKwkR3orp8k4jVMDtbBv4GFjmvZ46Bgptbg8bpfwC6qB92k8q38TZsTvM57RJJsKKTwCsZ",
  "key26": "3kYkgX8vdeFzcQWDmWRgAZatJFmew3teBCfPif8Ua8AoB1Yt44bciodMApxr1Ayy5brGW8RdmVLzcwez66sRDiL1",
  "key27": "2zfvdxo1VGJueYeMghqPfvERWKrEW5Xf48H58YCgQgC4QDi7A1eTSsnGgct2LzkWJNuYXjQBQ7pdyw3EUvzgqmWJ",
  "key28": "KQhhRmHSS6gusVFrRS3tX4yynQDwXdMExFyVgSQMy1vdXT9C9MnSJNo4Lxxq9B3ifh2HACf1mEo5TCbNAHJbHnc",
  "key29": "5rW8mhnVpJG3LUHz1aTEMSFmVkneittSvicNhnUcuMZfb9UUVbS7x9kBkcU6QZ2J97ZTQuofiRDmZEB7gchy8zw5",
  "key30": "51ZKj6wx4rEzMDwi94jV64bBx1n4tdHpWcxwvaEaRpC85bTTFyAcE9CxciEgXGJEWJEGjbcxyygHbUfcZn6TDdMQ",
  "key31": "21dKJTMo7mx1EdTYt6pji6sZWnxGdkVgDrXX5nVB5oxPzE3oWthBS9K7iT8ecHRtMXkuPZ8vb6teh7v1QWu4mCs5"
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
