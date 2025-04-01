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
    "3hNMPtuZgPPQgDwpeMjWPZexkCinFWDqvHopp2uTNU2t61EZGCyx1S56syP6H916bapcsEtnYwTV28XwSd7VGVa4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hPbgBftRTEj3phDKmcCPLmWBXQZUvRfQiTAs58Xz6cxUPtSwG94xvNqVZsdgm7JqUEsaDRD88qQbVKg7LLbpeKa",
  "key1": "2UQygzJbvGEbUsk4LKfbxDL22TbHJKg2WaUZvk94HLXah58tfMTb5XLGLC4oFCXJyYxSPo9wAaDPDioe28u7cTHk",
  "key2": "PWHoiYw1cmyjSW6sxFySZtRJQY2wsFx2CbPXpggqwprHnY2WogmGnZzJJiNMAEr34tzSQWEZsZWFSMmsCE1RyNL",
  "key3": "MLebgoocjTA1g46cKrCScssC42b6asCrm2YnJxETAUABsaCmGuwCUtRTF4HQtmsnckuzNCYb7koTQaE7h5VRXcM",
  "key4": "4FzFW8WU4Yk8afpFRyJA86JDjvCyYn7YstqUZpKAsqJvZkajkFoNHbNScMHUcVrRnXUejeyPygtQoPjPHtRyfNSP",
  "key5": "3JEmtjz1cWLT1V8hJQJ3jv2WKYvLWiS9fdSNHB7ptetJyXtDTZQ6GdY3kdMVvx5AQsLoHmm71L2NAVtNUmXBJi5z",
  "key6": "448rsDRbSCyT4eRavW7cmWLtA4YLY9Pj9igNP1pGoGpRkgqdAW69uxaiFLcGbgecDNxXnRb4MmDmwieFw6KQ46it",
  "key7": "32Vq3uW3jNEY22gof4w3cUgNFzWxmEpbpuk7MmVJkfGhX4xYM61SEZ9Qws8XbYWc5pf52mKo45ojAc3qdyVFsB8W",
  "key8": "39zrSVTrJd1MCqUUz16q92ZVg2i9vAMxHWXeT4d95p94aUsGpMK7Cx2kYHtRV2fgGfPwGZ1kFSZXPt6qWiaYoWCt",
  "key9": "55B1nGi38DALwteDCzCbkzsYCD3RqZKFxBaYparmrsLeHhNNvwCaoVqm7bnMeP7TRnhgDB3tpxgdFMoP3AdbRRGW",
  "key10": "2rLwk7cQAVsrJZ7SK2y58LAo1GfmH7u1sj9SRgEaDwTNuz7RVqt7pwVNGUHb9DxZ4GDTBy6jpC1UTu1jzUxavNSa",
  "key11": "2FGxRgnP4hcysqgvNc89UWjK3LSveN6h6HPLJs83Hg37agK5PTekE43AXDGUR77L1Czj9m9nAotEVWyohYJQ9tzg",
  "key12": "2RYghpwJQoycf9o6ftFdNFSgdUP9F7LYYSY9zH33BBtvovrzqoGT7TqCYZmQyqCnNPgmUMCCAhjMzN69vbvHuZtN",
  "key13": "2ZPAKXRnYnwtEP7w7HDu5JFWuXLQkJczaF7LrSYVB8yD7j5fDjFoELeLqR1DYvtvVkT7e6RPZvCjhbQPhHP3GWa1",
  "key14": "2WgJj1FQEZ9Nwgu38Xk4fNuxyPSX7N3cQjNffzinCh18TGSRxUD1SH1UbpSRR4x67nYzzSSWJ2DsFN137UdQJvkm",
  "key15": "3gR1ZdN11th14E7yworeMM4etEtCWBqpxKQK14U1td3jh9tVaEQTjko1CGvRUMHmSzoTvHTkfReUbBLttgRPGPJW",
  "key16": "42xDv8ncAfKS1cfJdKATbkNjxNGMwRxAdRRU6tHZTwHErF9TGgtvj67jPdptT2pmmjMpEMa7XUE2N9GzKgPvYxwN",
  "key17": "3q6gsWE6YdxnhRLCABRFUmq56G5MNeFFLDSai3h1yDSkEaiZ6NBjx5mmxN2P9NahSzdN8uhdXLmGpVQeidXRQ2cA",
  "key18": "4zL8BmxmWsnLeP4aWYt2A7qqqZ4MmyJuFQK4duwB7H2jRJJRMiX3XKeZqaHFjGYJhmYfSQYYuwuMtGaMEwv2n2vC",
  "key19": "2edAss24ajYPigVR8j78LDMvX4GJVG2kjvD1XxZDNGqkLXBDWb5dtAMBxRk42yMLzg8rJdJ65tEKepWD98ttPDcA",
  "key20": "4YpeBruFSiBmKeYsYfBUzttmsvMqeKzu38Tqw8hivheQFmwgS1APKmNEUM78pWqcbKHZNNCevcYTYmyzVyWShAgF",
  "key21": "AXBWEdGGbVxeGzAR8jdYWt6d5KnTsqgc8cNErMhwWtUTGEmrqjmE4hmPwSsKwaPvK5pPu3fdiWX74Fj8qQhLZNG",
  "key22": "5Uk3SLaX45FBD6BFguryXubUqJTenbnTvLTctNLvRDP2cgYj5MWi9k5oKiDLfC34FqkW3ktDxURuZyMEtvEbzLsU",
  "key23": "3JmUUsM8WXTiNX56x3W27paehexgVXZswqyNFHgfEbN6JPwqV5GQ7WV2FF1q4BEsGzuXpVVj1A8Ka3eFVBBEVh58",
  "key24": "uYAEP9hhZoVCvvyhDdGemZ18XFNSWYrjFndqTs12vVQyaqJUotvBVNSo7rJuhb691iC7qyiSbai6WFHcKjpPW33",
  "key25": "3EXQSU1jGvk9iuN7cwERWqNfUyhWJpR9ZrEHQxS2ZQmKdeeAqALrA2a9uuZPTvVNNkEATQYak2Vk5ajkZtqDVH2Q",
  "key26": "5t3Jhxb5eExogTNrB5dFBtx6hhEXMxmeqQwGhdHrrWohNSAGM3NRNCT82x6iVHAFzGfMcBVz6BfGUmcFFUad5ukq",
  "key27": "G148mw3uksUhJWEKxfiY3CPoAvL2Zq5fw28DaEhfjvHAAwtbkhonWmSGS7c5u7EWrhmMUjjYkFoDJWqq8zSg2jo",
  "key28": "5cr6go44r8jsaV9fXks9VRstLmsgC4uCGzipudQbQM8mAzCpWY3BKtThftGz4tkdVjBhKCMgiDwphHb6UKwrHWrj",
  "key29": "CgKvZBUyS9pZaKYhK7ewMfQmA9GRabPQv6XBXHXn4XM5N8Lp6T6oouZq5abwkFFghJzyZeF1N51SLidU521jbrF"
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
