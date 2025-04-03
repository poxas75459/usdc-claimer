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
    "34jT9zxQPGBwd8uXUDinX9qp7zMouQWHDEvTzHfzihy3ikhBCVaCXg1z6VTchkfESMY8ocr7H8Gu2Jtz3RahZDFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jCWqqhtLyLpspv82qH8ZCVxVdJGHwAeA8gpbCbwXos1T3xzRtCqPrXttATiis7WFScrawrwUJ5FBX3psZD6sWJ2",
  "key1": "5J7FXfMiLi5iwJ89i6CYpUpUMSdJodjVvi1sXiirXpGSRUJzmsENe4WHUfjtXJrGT1LZrt4iYmZGDJzMN4mgNbSB",
  "key2": "PLUfzFbAcBkxABvdsXcpvqag3jPc4ZHpLh9fMvtqomB4mrH1PX3Sbu68mbT3xqMGMq3ujwqVbnDbbAPzQMr78h6",
  "key3": "3d8Ap16Yfn1ANv5hf6Bo4XkRY9DeAmqNLY5Gcmxa4g1wzASFbAxGZAqcqwRfrhhGwPyWv9fAtd6wHS2b67c2Ci4W",
  "key4": "26zVrjQncqaApzsKug5SadN8iEQ4F6drioeJY37cYx9Kvnxe7KXuXtktrSkqkRzcJ9XDxQD3r5eiLUqKRk4RduDc",
  "key5": "4KcArZuGjSPSjqpBrhj4f8ZH1WcBK5NWpXxqNSRFPPcKK4aiULCcdSby1U1bFNnCCdwTgba1hfK41WrvQDR5163d",
  "key6": "2WW8qx1tam155DbQumiZ1NyU4JtszUUXhsAyFRETze4dYk9XRmR476wBvVAmNpzeSqsZN2XwA7Kfeu7hxnj5gdpf",
  "key7": "5h1XHYLKov6bDe4XUWcVMbYniJYq19hmtLtp2HUeopLwNvUyrZDGPxgbs9esio9yRtc7YtL6iKnNpZcx5osuFzwE",
  "key8": "5bgCZZwifytw8mNTfePTW4n3Ko7bSrBAe9skXeN3cbjCdmETyKvaq4ERiFVgyKSQkroy17JvKVbeR6YPJkwxcA6f",
  "key9": "2xb4nJvegYg1usa6eR2CinMKR25ziJYSRJAktKWTNbedcuoNbSb7PvCDfECPRXnAJqEAZfxcTrNdwegNBpiHJGUF",
  "key10": "5qNaqdpuxVABc9f57qrjMPHdofU2VhiktEGXpZ4Zs3RDWdwRsCdY17ckmGNqhXZryPbdJnTDsWoDR5UmFLPJ5set",
  "key11": "47sH6FjzrykUwgMWt2kiwD4Ky4itByrHnHtPxdhr6229wapYxnAkxuLAvizhXD57iswJTUjh5hK4QEFXZ6EKGHj5",
  "key12": "5NbhByQj97PS3fbnHM5WjvLRU7DgcpGnV1CYqQbjVbPbygakPCpWD1Eib1GoHSBadsf1B5gZDTSgTrWNicA3GFRE",
  "key13": "WdPVnAt9UPGrpd69eKvsB8i6pC63k5bt7K7ZkxQ9uQ1qdMWAXRBAyAchLzXH9iiNd7GUyWcMzURcU3QW6zkf5HY",
  "key14": "2b1GLqnTq6ejXy8AtW1Z2sk9nanNg1q57fvjDrAxsBe6GegK4ZoQwupQspxiGq84ZcxtPqnTgKYivinCzokMF4W4",
  "key15": "2yThDZrkBKBBTtWSQ5zXE4XZXJKfwHiVVmytJaxe34p7VX4Mi85pEBZjqKza91x4KzKbV4vxBx2oifpR3kUwDgU2",
  "key16": "zH7hH5KqvpNYd3AqczbtE9HJTzWKMSgj6pNiFh4p6cShvEbLJd3T46B3MJSnSSYUAUi6QbYNMpuBw8JDdN1cN27",
  "key17": "5eNQ3UwzUoJe5d1XZVThEYaHakuerFPNo6Yx3PdVTzjX8CjxgNyzf8V9WS8pf7KX4sT6TitDFZwaqUpvf9bcnRRp",
  "key18": "2TtMKXVLM3JQCYjdHzs1k7Th2cGT2fbdSyzZKFH8TcFRqSJnKqqNjSgZX6YGFrgZaCpRbzV3FAV7msX9mPCe74YX",
  "key19": "31YztuGYLu9FXW9y7E4gXMyQrBwfvim6Vji56deb8SL5L8GZMeDfnYz8n5qL4t3kgqy8QHBdJe5vdfKv8tTwB2nf",
  "key20": "5AKXVPprbGTR3DiUBVTY2bW7mR2ieAZdSsmW2JYsTVn9LRu6y4d8c59oyNmuBhshw9iVLPX4s9PvEZiCyRFKEAPM",
  "key21": "24ZxNZ74xMKpQGPsRfzUmghDMmx3YEYhuKy85jrySLArcM8eAkWEU24QbnySgw41Yrtm4fVhzxEyD6B2NVGw7xwc",
  "key22": "3VDE4Bg7yWmdoN6i8Ro9aWt63SmPnnEDA7EvASoFhXmHHRExikaM9TFtPA1FchXK37rZ28Kfnfs8wKZfVn9BNCPo",
  "key23": "2dHKq946vigvazqEQLZpaYjjgY7uR7wMmZcKy4JNz4iF87tU1ti61HAo9fPLvALgm4nddwjbCtNQ9Jcjy5Tj8vBd",
  "key24": "9Ttd68EVxRZeybhN3bcrYtQpxg5axARkuUuyyr7fNsNsMio3PCviS9oBr1tjM1pdiJwYsyupkRomEx6nnRGVoSn",
  "key25": "21HGPiDCNsBq3Cf8QerA9171dWRtsH8jLHQ5mTyBm9cQP9DLypZaWBy1Zj1JG9j1C3xwGgZrCnfpdZiaSW6C4aBs",
  "key26": "5gVFvmkLeV3TkYMWvTG4bweJBhSvdqN2xkNrs9iYAE2wraTNSJN7A9oj8NpQpz1QsCSv4jXa1poHisunygvNEhcD"
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
