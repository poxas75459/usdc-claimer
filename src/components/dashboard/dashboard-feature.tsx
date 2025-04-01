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
    "4K8Em2MmUby4FAL8MZrs4RxwZidiNnTp7DcS2nHe8UpEWsSka4326JYhWsprny43AraAev9No4PWkScqjzhHxXjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vkgMLCCQUQdUEd2PiqanEptKPgSEStCn7nP8EXzVQjkyuXMS3JbtBD2trHdkUWaNGKmUSH8QnsK898bdkPfzcUR",
  "key1": "7Df3u7GHvBfAmfraUX4QNNFunK8x1eWuYTbYch4yrSw1KKmBiEvpRQREn8CPK8P2qXYCXkVELWLx8gCHeaSAeRG",
  "key2": "r3oYB4JMqC7eUGRaotyAFyeQ4R6soymM6Fb6QhcNybrZkM6ieWeauaqiG9cr3G9LMTr1Eq8CSNQcdW6XejroiaC",
  "key3": "3mFEE292wLKVT1EpkdmVK7fSDtgLee99TTBLtrvv8mKRmDkSJuaTS4YpDf9cPDdyRJkHU5srSn2NbBZRV8VDpiSB",
  "key4": "2vCkEULfvuRWGNCm5HHZdkzWCPD8ThvuiPKSXR7nJpZEUcmLx9rEAiPCEAAgxYnQvxBkKHngYeLP3RejYcHzX43G",
  "key5": "41ExvJY3c5XgCEhpe4tgiJfpRQgT9SvnqBQEkf6pxQdnd9mjgXpZWPHgegJMz7UrPvs7ipwVkittHJEYGsg7Ve7e",
  "key6": "4ZNxCggHGM2sCpNAKtXZsF5jK6jfZ2UJGPwM5PEqSRAkjWH5BgQp7NZDemtcPxP5PvWApydk1y5sn6Ywn8sw2iBr",
  "key7": "ECijGdJVPaQA97esLUeScvA726fc3jUFcjCNAX1KCS7C1ZWYPxTacJpeFpekKhP4yRG9EWYJKRGG6r9CenkkG26",
  "key8": "5evmMVi7H5H56vrBRQFxHxSZANvXUcK34iFdmCtaJ7UsmTAuZEgzJrL4mcKEHL3R6MsUGnrjJ34CFXcYANjA1G2y",
  "key9": "2sTXQoHWgBFRDoNry6gK6t2pyvJNLRs2HnD7E3k5iUjxebYDGvrBcrBNrZeA5RRrdriPpb6Q17b7SLfgnAmFeQpm",
  "key10": "3BukdYC817D1UGrjKqYLnizyqVQ4EAbjy44rpwsz54kEcixnWZPTd5XJmW4qqQAd2oUT9Bau8jFLk8j5u6WKh3bm",
  "key11": "4SRqZ5GsxeNYvkqo8NWoAUzDqXUbG2uMCFQaRta7jJX3AWEWFPsaLGKyYbffrFzzUn7fF9V8UiAubU9BTuCH7V8s",
  "key12": "5V6K133q7PaRNC37CNiZsXo95Y6Gfqway2r8A9hzYQ6SUfG3Z9FvkEJtT7gLaU6HpKrK2XHZ8U86QQUsKqpahQNc",
  "key13": "4jRqLaojHkatU7tyQA4fn8EvEU698X6fa4y81BVbCXEFDBiSSJHx5iPAHgDUt8EM5kgrDhHvGLBLcsPZg9ARy8Hp",
  "key14": "36vxTix3aCV5dZ3RaeBLSSnvKtDncjckUFaRGFXavWXWHcDCNj3znHHknXj4ZjtRzjiy7HrbAg9bL9wX74KXeuVZ",
  "key15": "9Yhnk2BGr6kAG1gvrAk1MjqDirDN4hD5Tg9XtUA92BwU3PVja97Lc4cZKAa1QKacVUnsTuxzaoCc8U5WkVzyBEu",
  "key16": "4tJs54d3LjK6PwSBj26CGR4sp76YZA58gkDH8nZy7i2kgsCiBWoxV1CCSLC1qotTDgDh8bKqHf1UHo5wzRUYibdh",
  "key17": "4jk4vbLQjSCRsByDyZMNvRnLsiQKUsasPsofa46AnePLvpq9QDbSLao9dK8dwUAfECnkdhNb7UteWMNr6FHtKYHB",
  "key18": "5q5Kd2KU9kVRoagmdz4pTXNo31nU2mM4Vit2HVugJuZZycxvnaBjjyxFHUgVqiwgx2KbQ8iQEv7Bv6bTqFBpspnC",
  "key19": "4Amhk1MzwFQh7QCAzrNo9jELafyNY15d8JpgYVbAQLNu5ViYqN1XHeA2npKke1VDNV93a4YM2aAtNiXRtpc7YHFT",
  "key20": "5Y3vACrBKouVN5uMNd4QmRxpLaFy8poTU8VnSbdP1wB2wxXANFUUy2cWgJBSvWqizpsWVLSniSvmxoQqJY1aAXZ",
  "key21": "33ZwHTVFYrHNfmAb8hhuynbu87p4RKGTLGRrC8Ro6RrjAHzu78XSpo4cGXyVrD8otM5PWX3U8M5YmKN8GokcXa9U",
  "key22": "3x1DXRs9PgbcLCYFCCHUEW27vb5UrkBynjjBrRAC36mYe8qqRej5ES3a7v6v9apNcWLE7vTZ2od2uYxgGqMCDjUT",
  "key23": "tP2C5NYUwQ1AUJKXV7Z3Zk1wa75Utp8qrhcDA8MwspAr6hHSpbjf6KaWpAJbkLDr97XnFEprLwrytP5ErFjZJdc",
  "key24": "T1dfze81kX6SJBjiWDfQHXCJ7nu3NrUospJKcUdp4XWyxoKbf4drZUFCN1DDHeATshtX2Kht7Vc5fV72NsKfjUE",
  "key25": "4M8qdGfH5cKhJEmvwH3WDanyr175L2Hon6nXT15xDGaX5BEk8kGCmdwRK8THT94HVYjM5Rn8PXy1vZXMycMgcuiv",
  "key26": "41pV3L2fVzX8nqRaFWDL6rDo5KzTMNYwUSVSdK8GZunHxWXYpvCBTLjqWFXD3q2SzwSXqe4Xdzk4QthVAm3vyQAA"
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
