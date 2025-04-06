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
    "p5fqFkpfd2XmwyFFYjABaj17KshgSdFAFenGbrvSk9oWfCNLzrv5fqoNVYmgoczERRp6fnnCs95ibxUvooyv7dB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T6SaiPRn2hEPjtDBnCmkRzMDMmJYqCPRB56MBM1zT7cjNVQAscimhRnRfGWR4JZk4iUDfyPFFmKW4bJYEQ7JeUi",
  "key1": "3GMMFYNoCe11r55JmymTBA3tn4DBpDbZDimFvWHdScuKg4C3zQ9SEs75oesyx3RFoKtJE9NqjxrXmyecgVX3S84k",
  "key2": "2XAswc1RC3ZMzhRNEF5MZrj8qA33kbXpdtadGTqS4KU1r3Bjv3CcV2ZU5uwU7tbZXPEdwS1AbjHyMDK7H5wBtrza",
  "key3": "Z4w1CvZBjRuZ1rhQBKDz5r7og5YnMfoAmDbjWPRPSKxZ4wnAnY5R2yaaQf78LrdxH3rHRsqkhK6x4hfGEo8xu9v",
  "key4": "5P4s5qwHXzLv3j2fWcy4h4fcUzZJ4ujKh43qY4466PuMQuV9QKC6F8E6y4DgFjwBmHkdqYAz5Hz9wGMzLYPCYC9U",
  "key5": "4Ari1Nft1wwemCosW2sQiock1jLwMGuetJncg55AgGzW1PwWdnTTUpwqDHgdKcWubFYrjhPub3KTQHbpFq6z7bk5",
  "key6": "42S27GWBJsaaLgT4WzRg2dTzeUuHCMw6BLfPLaiVQDLco9xqtoTq56yLkjSNAaGqiU16yFWrbwEBnYMeMhW7R1VA",
  "key7": "4XjTUsFDf8ym7NBjFDDb62iUi6JaAwEzcysk8XDZi3CgBYCE8pYAhJGc5WoiVBYkxvohGXntoZz8ioc9UrTsbf1n",
  "key8": "UJKXFjrY2vXQ8R3iJ4Pi8CM4Tc5QrqVSfwEAmh4DiUeN7k8yv1NaKw1mdgbqUggTNckSf7dmLvJvcdRF36L73tQ",
  "key9": "2BP2jMRw8KVwT4K1RzePQMA6GuGAQVhjThMzRZXHRzYfS9TffdHq6nf5NKhLY8KarthjCPSA7W7WqiUg17H7UxBX",
  "key10": "4Y5jupgFHWFSwvMRDarfxs8TwGdxr9PLqQS22o5hRHFYxDTqMN74A7ryF3FkbRS5vmBRj99jfWjA6UuZc7BJYkFT",
  "key11": "5CX9czDn5fqLiddPyXK4zB7L83bbgSVNHhg9kBHo7nVc8FdsD2i8WnXxi3g6Nza7YtWu88D868uBp4jMaYv9h5Mr",
  "key12": "4JMEuyJQKseJHSjmLEjQNTEUttScqRqSJxBQ1rytufuyUDp1EUNnVSRim1pYPzabWVEurqXE7bGYA5MvZ48GqzW4",
  "key13": "546ZTUFogMg7Cdgj9fcb9gqAWhFenDrn6KasFyAGE4t9B1rBGEAP6AAiiPQowofJPdJcZbT6W1L7FpCHnYZXc4fx",
  "key14": "nzP3sopy6B8EwpmMPJdd4fizmrPoHincHMVVqsRh6cAc2uc38X29awiR3gRjgAWjhQiYftAkktN4kKCfAyyjiUg",
  "key15": "5SCsrJQs6pft2cfUWsHTMNxVetx3eWUBBg7KwR9WMdEGmQ6dcayMd2GdPrzrZDQgJf4ZFsudhX5XkJP9R3fyznWd",
  "key16": "2AQph5pcdpeuRD1AqqE5Hs3SuUSpRq54dVVN8tShuRReQgwJQTyoNiSLV2Gt7rBGgWqiV3aiLeTMruwfEaq1oQuZ",
  "key17": "5axEVqwFp8VGfqUTYCZn32katW527zWMiTKcgJ6cxdZutik1hJGsiEpSDFyoKowh4Dd3dMx4joLRBXjWVXqiHZCU",
  "key18": "61egvVqUp3kBrfMVkDRstb1U9ks7sWp5i2rFoYCieZ41Fbm7vPchb7mnUBeuPSQ9ngzewK8EMUtbh56P1nygb185",
  "key19": "cHje6gJ2PocFvxmZB3R8SNaLFhEFkgNu8JPhJTQNh9cDjehbHaJLA2unVR6WG5nFBp4F42h2Dn94Xr3RvnEHPP3",
  "key20": "5UVPrjnXSr8TW1U3MHiACqQxCgw4V8wjVnh2DMkuE3jb9Rp9cN4yTGvVhjVVviCt4bp1Gkkkh7ecSYQonoejejD9",
  "key21": "5QVpuJzFkUWJPSeJJDYo18FFB5xEpepfBfSoUFiaTDJeLzT9goL5eN5Hq7K8n5JEPB1xoKLoCXk4Pj9mSCJvVvgb",
  "key22": "TrJueUAKbHHQnMwZTzgxRz6uT9t5xxxWduYJY45FR9ipkfenUtUuv2XDq3C3wUniiiDiKAVzftcBbMw4QYomJyj",
  "key23": "3jJnRmMHiuEFFJsNn38FiKDEEp9bV6Ju7euwMV8iMwmvzrRUeqqdkAJi2EpSJJtjrBo3EvpyoNsL7fHj19WcSXdj",
  "key24": "2Zapj3sBU8bQKQV3jK3wdDCUFTPc5tAqScb3Cm1Ab5FiVWeJkdDh78cjhCJyoXS6BmpZBXKwSBMGm9jqAaWowaYs",
  "key25": "5GtokQ9Ttf6JL4DkvguhkKwxkafdVvtyJrPRXdnR7PNxgAZAH4WrZxNQwaLAzBRXZdpTtAJNKLfaNd3nn4BJHyDZ"
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
