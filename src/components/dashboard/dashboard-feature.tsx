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
    "2Tw5trr7J9Rsa3YBfUaeBQiKMkgxvM9B7i74nxroQdCXEU2vAhjP7mQxcEbm6efHnSvpUfWpsBZt8rz5AqPQtDh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UG4zdseqvL8EkixWknbpzmwvjrcn1kTVUfy3dUgscKbwvXsrsuMHVRwirqw3f2rFkrP3DcNKjAKd6eZ1mesAXzD",
  "key1": "2n9zhMPiKCPKpF9vQhRQeah5CbxYbN2M19NDnAcCwG6YbGDZ2y2iWKhCUHmzQcSYZ33Q4gZCBYw1TbqttKsJi4fN",
  "key2": "38EM4vTkdzS1Mvxa8YvXqNVLyQbwBbqzkLNZbS9A2AM7YTkQdnNczqNdxpyi51bHtxPUrCJn7v8nbZ7Fsw1cu3u9",
  "key3": "5XAXH318SuHfKUU1oKQ6SXvkkF5zubqtfVnomawqktvgKPHzs9Cs7usfQJuaAFCuPy9GzLTZSHGMrLLLZUX6vwyR",
  "key4": "3i9NrjS9Nvuw4FkWXnwgXrbarARH9eNFPyLYZfytWbGtEjNKipQiU19zXfCTCpG2g7ttdCUkDGuTy4FRjzfuny6F",
  "key5": "3P8UQJpRiTv4qfjvnc1inDsDzqJBJjcsBuGea9oF4dLFNB5Yp1fhR6CmLCikNBnjMZqJTXKJyBPHPQyusX8WLNDB",
  "key6": "2x2DsfVWshZRnWx8zd9CsMQUeyaJEaNkrb9JLfWcV5qwTkPXN1TkDerzHJ2r5UmHD6Msf79Z6h7CYmZDuqSjH1AK",
  "key7": "Z6v7KfAKifXHCCkgf3YeGxXv5YaUVRmurtLktfJY7EgC9b81A1NfCkuVudhk6wae33WSDYcE7RCZvddyaQuqeo2",
  "key8": "22enArL343va34vrskdKuzajqQRBuS657qZNJE6e8E7B3jVTa8gCAHe5iv94bLqJFcNXPo9UWeC9Cvtie8DGKnKo",
  "key9": "5PwyoTSevPauMGcTzvyvfGckbta295Z3rqbpLPzVfPMgCe62hidS18rDn3ySipuK8bfswstEwTbYaK8ryszDsMrd",
  "key10": "5rK9QiFNR3igQgYuuEHRxTAaV5bnnnvrgfuiUoRMJHtrN3FKkWMHkU24e4Vt4vijvWN2vuhvzVF483oT4tVJ63s2",
  "key11": "5QDF4dnvRzNhhoaM4DS33ugtJi8nT8AxDBkiE3Uj1vqHS7bT4ZDCsy4RvycyKyCB1G4irhgfSfZDzP46u6FFvDLq",
  "key12": "3MjPVHS3tKmuxpt4BMQqsHRvCshU8htojnGgiryqRg7FZoDU2Zuk7Bq5p9KDBb83PwFRqakWvtH94RgLJM4Uv6WB",
  "key13": "R5EXSnnYfMy1QyJfzR6zjRnsPz4ocSWnmehFxwPJ4UtZePpN9UJUhRLYogLT4cx3h1kDN2X4vh6UyFnsLggbSaC",
  "key14": "36yHcgQMshJTZWJvcKr6FU159PLXkA2AgDL5qFkw6vy4G5js65K23drcXnQYdGskr31hwDaUDaTsi3MugmbD9VmT",
  "key15": "3GEs2oq2qH4XudCgBL4i4wmh8L3SB6DtNUSrN2yufrrRuKFqcq2WXpNTvj7ky7GK5d822NcrRrAmFRm2khuBrbtU",
  "key16": "3NPPa8tpn3za6foWfH6EfK8zwHMfXELpsPXuDAKA6RLkkfexVgAWxNnkEir4ipAUmJseJHNnV5Bg6iQirWAZ9bpE",
  "key17": "51FpB8mDseTgct9XYDVvFVPZS1CoxEbc5sbKcQi7usWkjpXULjvRStHrx1SSPkJGZjUbdiYoFkGeKrkhq8asL3sB",
  "key18": "5ERmiG9F9zqgUzTeEFC9s7LBUpHZpYaAbdCPSpjDf2EuMYFTM8eok9Xb5PnQBX2fQVZ8tofGQMMwMJBh258C6pkW",
  "key19": "3FzLDbwm55jdxNZgCYP81FKX1iwtRGwFGWgFy9nsiyqqatDG6cEiEQmRL8MCPbk1LMPnWEYqaieKdF4Xv5FE4Ej",
  "key20": "2MseLur6nK81b2wTtiL1ccEqQynDETbdMjFm7zDbYCseCKbd1xFtFTrQcmihnMdVkfvK7hDv2XEn43cxaT9W34Zp",
  "key21": "Ut4fYCe6Bbb5RoREgG22mA67koCdhxZ6UM8EEHd6xYNUw624hBFTaraEHMbbCBgL1pBMNAWmfqeZM4cmim7eWJH",
  "key22": "43VgGNSFdZF1RBAMH2Vf7WSJzWpBKYb6n9pvKRCY5HFA6bG1wWDH89ckizVAhVfU5RxGPnXtmR5SNKQizm5bepgq",
  "key23": "7tyBFx9wfpHnP2jnLfssNdY5wBLKBC8kn6AXc81GyuLnV6NkjzX2Lj6rZ72PkvLTkY5HRiEJXzKEc8JdQWYmZc2",
  "key24": "26ij68Zt2o9tkJBLdsGnZ5m36Hu4aG5X9dYy5L83qj4LnXBaagNSpYhwSoKEHbKRGn25Jiox11GnQ53H8PQVhAsq",
  "key25": "Y3Gssrj7ToavftCs9QtFyNS3Mzvz23q6YH9u82p7edtEEneVC4Z1TZNJC7XFtCEUzVKh67Rw93R2j6a7pgmyyhz",
  "key26": "4cRxDejgxMRqTsfRU9iYbtPbNLkt96p4phLvgo5g4YbewVeKZ4Hgm2sjGA1sjCeyJFvtQZcAeuAXAJnArBN2YX7w",
  "key27": "2zwbWfu2xzAqT8WKVrThNRrAmierD6vWptxL2cHxqRijboLFAEFWzvJc94j9JeQB6Wu2n8GGqSfDq21W2kjTUApC",
  "key28": "3dvuTzhs2uEv6VSbuzvDhFAbfgDuKw1CWckVk4P5D81m32VJU26VsazufAQ4aZsipkfrcRMJJYfVZYE8iPwxqybT"
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
