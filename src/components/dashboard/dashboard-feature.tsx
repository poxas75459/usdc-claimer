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
    "51NJMjZ5TgCdGjxGKzveCeZkqi3iC5j6sAiYJhpbjWpTdy1prCFTtGPP4jKzVmWozBGmSh8wmLYEK7Cxg2uA8AML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25EJ4vu8AeY4Rm7xDD5jEJYMJdXd4ygkFwKGg9yq41yaLLCeeX584rYBP37jMdhHQMYkqYYrGV5viizPTcSyaSiy",
  "key1": "2rduZudoKf57LRRykBuE2YDbW6c72Kg1VxXx6hYfFjx6KefPtcBNHsqVLKbkY3whd72yeM1PtdZ2vPPvJgbpKXwT",
  "key2": "iRRBgXVJRMhucdVUsy6RUC9ic1PP5d6nhFEsMvGQKiLkh9qTxo88ptwsp4Xxu7ahJQZzwXB9NGRPNYgtL74vghT",
  "key3": "5yg1rHiU5fqYgpzyH7ExMk2EAYFoys9px8bwK5LHsijxDfEPQgqFNNtyN8wFUzNZCgcmuchshv8wvRP6mSw5cA8G",
  "key4": "4tNb5Wp6D4JqEmd33Sg5XjL33MLPJQtMvsHCWrBf7GG8efGzVyLZWWw8RojFRXqVJuPHLHfMRjDwDC8j8y4qgozT",
  "key5": "4vSEc5D5qAbzuypsqX1tWqbMnFnzE2GeJN2FWFFZPpzFUhFQRkEZkhZjsj7u6LWXir7fVecKY6h1k5y8jYnBdcwc",
  "key6": "wNP353sSxzC78wiKa8CAzMbVaMWUDVcnAzL8SdtyCxuTe7YfmzAjhYwUpC3kXpujhe7VTj2z7Aykf9Y65gT8U7C",
  "key7": "4YN2cr9YWCRctGa3xxgkpu7u4Q86WvVwSvhpvz3knaU2k7XyCzWTUiPWHZFRWwWqgeVYPrUdCSLiNURf7N49Ng4W",
  "key8": "5rWjMqs8UBeTxQw9m9myh3NEBAAmJranGsd9YcXaJxR2h3gVW93oXHegozpA8CokMP46d4hCFFRdU9D39yd66hgv",
  "key9": "ku4UPsbEhD2TrUi23BnpNXWFDoWdhqfsz8ygEAcdGt1qNKuNMPGixrKtz8SdTb1kPDZ9gsLr5iiUpjByJsugzPA",
  "key10": "2DBBJNmhiZndsnqeHb9uSQzgaryqGbvLBHNd2kkz1fs2p7s2ubpsePPWjCUG7rGpucJsw8PMuwx76vRJtrtSjRWG",
  "key11": "cvrFj4u2v4TeyQNwYDRseRtEGpFnXsQHwXp1sdLthP3B77iS8QQw9cCvtf6Vm1CDA3YEuZnXWjrPaUHEARDZjeZ",
  "key12": "YdYn6vEZS7pzuNGV7o55ToM2kAbr5iAy8rPJ5oPEaHmVZ7tcHfqUr41nYm93SkZtvkqbbZyf91Rq3bu7Vspcghb",
  "key13": "QhqdQBQn9dLyY7K4GTMsoo3KcCXrpQZCTjkBpmLdjttGJLj5p6WmcZvsv7xzqWkPKu1ENGnpJi3Ra67r4ssjK5Q",
  "key14": "5sURjuptCPwHhfkuXDig7csaBDztjnuDeWZjBKfuuUuRo5nLFcNDHesEfytYJ7ThGsTQUZyMseBXSkPnmSNp4DjY",
  "key15": "2oDmgSHZNrNZnZ2v56qRJk6pFYXv5vtWBbygH14RWkF1kMe7GE9QvvbkMxpFJgFXANfh6edamu2fTSZdXT4wQN3C",
  "key16": "2qHpjiVMMnnbxDZwqPdDnFRv8pPYftudYzkECt5NHQzauCgM7vchsLBDX34ckccuSHgt4Z3Vv6CKHHproB35WwBZ",
  "key17": "3b8vyf6MMdT617vjWydqvx6PhYBkM9zLc3W6c5dyQhd1TJ7h9aa8suA3w98r2F1KWPhVX6oKitazn6oE4a1rcRjF",
  "key18": "47CBUirFcQu8z2aibVTSoFEWogtS4MxdPdG85Dgph8YpWdVnKGjC43uGY4TYmWJYCQTFJMRDmcJoHje3cPH91Ri8",
  "key19": "3BQAfwEF92v2dV3nr53ABmUUjr3gzpjYHYyJkMnpjjHZrEpzWm7madGjsoX8qGo38bNQisfSqwRvtXUdjkbEwNt6",
  "key20": "2qJz66TnxT2c152b84y557xMkWQkbxZuLVHLbiG1Xfma6cxquu1WkxzWHM1urTZsbfQiWs2w5KStXsAKMMTD6SUc",
  "key21": "3AcTs2QfvA926Fw1ETaLT8viRJWnmawZXQ7gATvMuYvPBMdm9SsCR1hiMvHEcjP5V4VAY9tZmA5CxEdzbm1Fd2rV",
  "key22": "4DwYUbD9o9csqP9kvj3A92UB1dPZBZ7uTzD3js9TAKRNeQNtwxu7NG4Pd5WWFBNTgtAYKHQk5jyxVCQyvpB75ciR",
  "key23": "5awhTAZQvTd2TZe1vrQkL3hLG8Jg2biM8XKLitp17h1FLebQjbjYYspDDJApDTBvutfn9uErbozCazrtyD6ybX4Y",
  "key24": "4jSzwAwHvutAFvTpePvmuBFsfmy2Pnb8gjb7mXZ7Acn73cSh5QcerzW9bSch7JRjFcLtrSkPAxJY7JHVZDN8K4b2"
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
