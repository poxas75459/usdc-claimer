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
    "4sTUtBXUaEHQmtN33eehrq19HQfoNW4DiAqUKhiSF1wkuXQNJKBEiBWyLhHfYFmo3HZHTYh8Ts2ugVs1w8kT7uBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "483uxLMKDKM4tufq9CaWZFobcmjcD7MH3McDotUrP8t9APsx8fQgXpkbi1rytTQEUHnjqjdD9n4ZufG3UpF7hzc",
  "key1": "3rwyAeUyDNkGWcRatKQyZnKaKzECFDKJ2Gg6GN5rTgxGAihUzYUP7wQq9CTz8C2hLUL92iuTWWVwNJjKpDufwuAy",
  "key2": "wbCwvrfCcsqvVWDJYvVWY9Cm2qWEvcKX3nWT5QktnNPjX2SD1cGuBiVCd9aC3oD5gZcNU7rCC56wWQhLTF7GPCi",
  "key3": "2kuSCyBujxKRfnT737xYtvuh5z27wYkQiucAMyBe1eZGUkRUo7FaL1EGwreZVpSZyYnHXswd7JNfk7hskWbG8NVC",
  "key4": "5snacginsVxGNM4YMP37BY9SKFQmkbskWZnENs4VZJxEmsYnE9AY7DFXL3NPRVVfwLHNUTamxjrPdjkq6pva2FPa",
  "key5": "xhUvWFdoh7XvsA5w7U4f8gi8DZpYbGooiu2qtXVjHMg8ZV2PDyaQoeazZnfG75NgwjwgL69wwPiitV6YMpCLKqp",
  "key6": "49ZVKcPBebDUjg6vFb4QrQP4vgHwPBDiHpjZsoqCKELq6oTZSnfqeFaUyiF12B8d5MMzffFXbyRhj3GmScSWTZzH",
  "key7": "4Uqois7W2kaDudetrriW2UX1hK7SemKhEjjPLULu83YDUzWw7Hf16Vr8czmaQXAX4tZW3FxzLScmxZ9cJpjRvgnX",
  "key8": "3BvQVMFScGtet3i5WVKkfTsQ17RYaxqKGNVM9iU8DkL61USfWVrACCqmNrDwi8opQfcjnRSUuy2JkVmU2CCgUGjy",
  "key9": "2W8TZKDkYCPhgBYKpop53AYnjdnebS7et57PefsfBNXzFmE3U5PUoPPRfK4SfPp7Db6spq3XQXVFuS5CtzCySPms",
  "key10": "5Fqfx5ywWPc4vyR2RiXSQPoYN24RQq3ZppPevKjzxLXmEx8Bt1rToLnLX2JkF9qzUaZM8QxUBEHpXGeRWRibfDs2",
  "key11": "5Ct5dVonMNNKPcw4mSeAR2RZAvbJCPzDnJCmNAEebzJDNHNuaSABEgF9RPLBob9sPeSui4zPB8tZjB4q1VuzKYT6",
  "key12": "3yac1C3xANNgTJkcC21Tvza6FFmjiZSK6knLJENuKgCYHXRNG5L3FTV3uScNEK1EtTveLaHmRwiCD69h6KjhJp87",
  "key13": "wJcY2RvYoCfPrKypEsDSfruLAWqAkhaXAJPFMvXazHfoZi9qjYnJQTEs2UzEhEntsEPF9DLE2viSBAKb5PZ41ZM",
  "key14": "qUjfsWDJak7RkeLtWqVtBxMiQGsg6n8Nv3VHDUEMfQoAvsM6qpXdHM7Zhsp3zzGrLeGVCAb5CzH29QtWXaXWXjP",
  "key15": "jNQTg9Dpd6wiCuzGLpZNhtKRPjeUe46ST8oNBZWYpHu69HhaBkFLD51FbUX3MRVZ79hEgrVTXAaiVzeYR9zPTpu",
  "key16": "4osFPR28ntVtDHAofAQcH2SgabquA5ggqJSifzMnHd9Fp5qMmmeF19ZTrjPosKb18Qg6TvC3XzDyxp5RiM36PksV",
  "key17": "2pZ83ngNRrG83e3hy4G3hyS4efrwexnJPMNjvHFDMqPW7NQJ364KSx8K5PTHonsr5xhWjjHBnxNNHpeFFrrrLqRm",
  "key18": "4VfyFZA7gxTT716Sj1RQQf5KZ7ZWKxNtCkFeWkn1oBsTnSdaknoG8N2rYF3KswqgHdaSePQmnZcAYnrgj3LWMYy4",
  "key19": "25H9CXEUbLVMBD6pw2KnQjhdu93VwvzMvCNRKS1R8JKLX8ArJ6oK6JNtMZbMyHEZCsqhxPtXzjZSBbWi747CFQn7",
  "key20": "5PBvRtJPcZGeHfHy6xJ4JZgD78jNsGB6kmif3tMqofjr165gN1HM3yfVoSorxKViK2ajR6cpTj86Mq1ouo5taTiD",
  "key21": "2A9dWfZzvLv977WcWqKrMcSML5RWVvwQVAzABEGJZazVDH2HNJkscQvVjwGHMgy8m2PpMYVQfN6QheWmAyxiKoBL",
  "key22": "36wY6JsWXTaxRXofjN9e4c8JadYUDggg8snCxySccZifhM9SwPAdroj9KLjdvT5Dh1yP9q6xPppHN8ed9tHrErav",
  "key23": "2HJDAj4XVxB8HjRTvzEh5uiASsN8wSFc8BXTfHUfhnytrehkRaUk5k2KDb2mvsiWB7vW7WnynEk9jwbwB7EP2v8E",
  "key24": "TZF7E4X393P7C5pcMtCooz6E2ktWQgPSEj8nYhnDDscHMezRBREb1wmR5xZYkaVcSYW5YtQJhCy9gNje1LLYsoP",
  "key25": "4S34S4Lqu7fdLsLNiHWJy5kKVfwTrZyqKajTjeEKW2AYYLjFdUmBjosWC8JwB3a766j4Wmn3gBG9DYhGd4Ltt52P"
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
