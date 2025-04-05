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
    "464qwYVwyeRosQrPr9eaMdMZ7mXmKn5rTVwwd8NM9CgwFpTEbJA8e16dgJZZLVVtYJiJVQmdMwpiHkjivUne15C9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o6HkFVTwWjgwwr1pREyebZ93eg4KExcqNYURXRa2nu8ATb4gBnHRAi6wjTpqTdUDuGZUmZkDAAK5uUHhVDuU8Vh",
  "key1": "4SCQNk3pndFk1iw3up78EJw3VhtAJwPvBMq1ZkxNkL6CpG8iLWzc8h1opfvQtD1X1ZTTKoMNbvhhk2JF5fgTYw3w",
  "key2": "3EoKEfyNwB4WLvxdv54t5M3c31o4AJ3v1E56tEyekboi6fZoh7QT7KsvwJCdKt4WeByeX4w8XCdqE1J1GeVWG2Yu",
  "key3": "2jbEFtqtMGDXXfwv6NEbNzdoR2CXd63DBjL8XqJYcTEADRpJBYHxcEjqu7dQYjhPTukE9M9oayXVmGsZVoH7dk8x",
  "key4": "2rShKn3L6oHz6k3HD4RPXjdGABZnoWjKJ8d1bCkZmGuvWiRRqSVq3BS4xYjFmMYw2ybfU5MCFH494evgFXnRazLM",
  "key5": "Bby5dzeu8PgSSgBVvdzBNiFBrpGpc4HFw4YWGPsoB3QWgzX75iZMW27whGarPCHKnFeivCzYbwZts8J2Fq2rhEV",
  "key6": "MbJAZcfztk1cBLAw34FmmDCf3o6EDMczsqn5SEuPQrWo6KdoiV5zf6FqsD9JgDu2gGCmfUmtBT5a7ATdFY6Hnpc",
  "key7": "RPjA5aAte2PCEgycdSPV5qtkz3mrLmLeSyuUcHYVhWVoZgqtUg3UEDrmJdikAiVbJhiKonniawJngtQ4zRqgnap",
  "key8": "fbBjZq4nB63YLdXQAh8JwmZ5V4CWWkovsdw7JsQmwdifHAatqhDdiRrfb7zj6yec1nBgFgYCUL9zhoGaQgfQPUX",
  "key9": "661WteQ4gfdAM1MaZh8oHeTGDVvGxrkZvPsKmzZTygPhCmg6RnTM4GGsr213sgWSd5dgvhBFaVMqG1yqwZWVhU3Z",
  "key10": "4h2SRbF95yLdCSqgz6PjYvEAFkT3rVXtqpazutgfvtNx8yiFqXkqd2FxdgrJszRZrDQz16u8iX3xP7pqSroxA3SY",
  "key11": "2jtjRWQtvE3wV5quDaCu7gg7S5aVgd8RcyRW35vuR7A3TQA7enYtQrfpVPR2DdNWVryVV4sTAXSQAbrdJXo8TQdu",
  "key12": "5uaGbZngp2pgz39qdgyKoHcurmv8sHA7kbJzmatGLcw91hNdwrvq6dpXbv7uR5fJeYbMj8ppSQJGQwxtRQuUyP8e",
  "key13": "36B55kKwvnE9eC3AXYUdXdUKWtyGqFVMCsgvVwVfSwCGpuMWMr7RRTDjUhszvY4xXbyEemRv2crJnrT1g1xrYtHw",
  "key14": "4voazxiQuLmWGsa6k8s19cYEe6R5PdQJ9us7PSaUim1MogcmvLGyZac6EvTxQ64rkc4fuvLVYTzGBMf1HR72UDcg",
  "key15": "65D1inV1bHJ4a7aXEZ3ofXi9RwQEkstzpgeBaXCrvwZz7RmfCfTgUU1sKF6EPBqqmVrMGyDqc1yj4kSxtHbpXV7M",
  "key16": "xGFf6A3qvBQiSWpXfCUCMM2uGezSDghRPKN5g2JzcD6MdZ2kYdj3tzo99RNNz6FuefuTFXwn7xtrnDTmDXFg7jz",
  "key17": "pTmpXqAvtQUbnMrPxJ7fpFuBvyzziD5krhsGVWLBwjZXTUQogSqShKsispfLQ8cNDUrAxowyJHaqDwtfe5BdGj6",
  "key18": "4opGUAFHrcktpREpBoBp5iEEB4WgikXnaEf1eCN3adudwydPDcFKAQeS7a8fD6ovaC5uy3kfBKL4ef3mCNDJQpVL",
  "key19": "4QJrHvDkoVQoenhbTsCsN4tBBDcjMfeH8jAy2Nn9R8HK2XZEDeQUVhDTNUGSMyjGGDxExmQcrx6M2pf94Xq76zmK",
  "key20": "34xw7DeYp8XtxMNhbaqu4KLrmMXvGi54QBcy37jPavon97Ng2rTpmrWt9WJtqLARCaho1WBRuJJxqgFswAc22uAm",
  "key21": "3oeQo4yM6qa94hv6AHBFkbEFbYBTXDePZztUs6KffK6MQxQjhyzFmuxmmLRUxWhZwPnA7RX1sj3fJgxXXmrLRzaK",
  "key22": "3bYnqeAKnRA3R3kQH5sHSyskbLdUzbiixVvp6VK4QXNEdmhK5AFqQR8YXE89Vr2oA9Z6XJHaDxHSmBmwJSQTe9Vg",
  "key23": "4pK8ikGs3Bf4K4fjgBgKkfw1Lt6rnPqQyisb6WcFwWGnECxZewcfg7S3NWjNvDuGVrhRva3zBLPiJQfmhhJQ6bnu",
  "key24": "2Yb9wVtUCJFH9v4KbQ7WfAKy477qiwhE7KMaH3Bq1NZQJSjzuqBk5Gy1819bgFLojyAfNWd9bV7aYPXCuDNxwEW4",
  "key25": "qKFL9ZSuLGjMbxcomEHuJaHS87yoJTpH4v31XQQqQxmJEkxQiG3wvvXs3Y5KLLkMc5J9wAntmisdYvEUvCVPg3z",
  "key26": "4KkZn31sYjjzw6c3bkqkDq8Wdv2nALZ2RL5yq6PM45k6F62PGTd7feGMiKw4TrmgMe1mdcSLZW78cvYVJ72UKQpT",
  "key27": "2cX2JfJYPz5CGTGfVWtBdiMPj6od77rx3Qe7NJWmvSG5yNELtDJb9wRg3oJiZZdkuBwPZxQ6HgSdymaf13V4dNLk"
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
