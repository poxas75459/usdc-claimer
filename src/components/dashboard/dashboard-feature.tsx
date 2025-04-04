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
    "5ZJFm4HC7zn9JxFVS4UjQcmgmLmnArUA5Lwzeimf9Sh2WVys9YhchGrC6uEBqoWzh4TFigiKTXUT5H1ZHYq9uEu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aFJCznT2RLDmWQbRcoVyjicAKM5i3V16hQhE3oFbhh1cii2A4XrUTjddW4Q6Amoj7PTpgQapXezzfYaB7HJLSXp",
  "key1": "2e1Rbpkve6qbU8kdEn7LrvhjZZf9EWqnt1suZiUiefRbGQ81sxBJVupPQcV4jzptR8PteswfyGJRUj6sghuHndFk",
  "key2": "JZ846tV9gEep2CKm1vXZEsc7XDehQPE6Ai2bh5DgXdZsntsL1maP9m8MgsRiZgY3oMPFn6nVQbC9Lwz8aRakUDG",
  "key3": "4iU3BMknEQnhJFMNirB3YbkygSb54fPYTYhpJzHkZ6XDkhfvG1VS1AdPcVmX5vfnNQxPTGwM7UtTbfzTShcVBbtV",
  "key4": "4jbGseoqjVZP2gXT4YDkUeLCdtWNd24KifzagCVawvCVycHFXxMEGxSCxSxsn8kr21JqgAZswpQ6YX7WBmWZHwr9",
  "key5": "4jRgdwPGJec95SgR1Dh1LmdoboGAHB5PLjsESz99MXbZqrR3jYDcV4UdXTX3FNx4b3LExz12JTopDjs19NCmLLq5",
  "key6": "3hFNdymnQ8wU8G7Agp5zTro5DjAMxEH73zM7xcspGjdmMPt5X4ftdE8rsheK3ZUZ6hZHYPbi7jcYK3Xc4fFVuscL",
  "key7": "3wiaNMS13T7XN6tMpwDhYMcD6ajYuQyEUEz5NAWHLdC8FziNNRAAZE7FYwTpbMQ9gVgahT1nAmw44RcVnJopUdoy",
  "key8": "5ZHzbULEYRWT8AYqvZWiLBiEou6hehgPb5r9sDcPCLBLKHYS6vFB5ytpmMTHc1ojQYK2FBZds42kas9RFTT2S3E5",
  "key9": "34Uf8DGi1abq3Scm61DdaCcq7uvJHFbjEiy6QCw5JN2pZ63A9VDyS9TvpGSvWcJvtfUy7TKo8qwN8xLmWfe6vHCm",
  "key10": "2mALx8u3qghCYQvEz6fBQQVfWSWQcR2tVBL4Pm7afQwoiEtK2gPm45J5Pos4JALzXziawLx7MMtKx4UY4U7MWyyU",
  "key11": "4wFQ2338HpjMP3afvPKmCLCEXpusVnoVxgdA9EKpoNeZrYNgfgfkm4aUfzXnuCT9VZhnBZ1cuUsoouQQ7U9Jvkmg",
  "key12": "5DajUgLmpWmqV6y1Mez7RkVpMiZwo4orJ8Es4nwtqHK9BeWM8tVWgzf7sGooX5u7y146CDXaP2g6U2Ms4bP9WRZY",
  "key13": "yj8Fg9vdmZRov4EJ91Py4y8tk5qGtcovZqWSRGuk3buKFg5Q74oLGMoCZ9Mhk1U6YuxFWTefViRD36hDhSXewyF",
  "key14": "36Z4ZEEZfJjzESfoUkh4JFDauHx3g4UaWMgx8wbnTvAkWy21ifoYsVdQSufEHGxaVQE1GUgo5jQx6uqcVCwM92U9",
  "key15": "4z85KHphFPh4P6a69R7GQJE2k9SdCG8FGjegAozBSaQD5fuj8ycGT6JgimKkjW2p7SzTgs4aQaubGMB6mhSRzsnu",
  "key16": "4BBu1zhSHvwr6x21eUw4abLusjbSudH6QBXcHsueua8VGA1Q8yxhugqG7rRzYWiN7cr9dXRsKRYZNFpUCyEtMDg4",
  "key17": "4NCB6NnWVY6nxWnRbWi3JJRnUVd7GN7uNbSRafTGrTBf8oQoincbvQnH5LbUBpuQhfAm7n7vgtMAdNFyWnLAbU26",
  "key18": "3ftHfMSZLqHdbAoGDdPQQh4GJT5pUugA1EPWjzyGpZ6AWYUwL4qv9gHkAEvbEs7huvE6BXZnaFDC9XUkyGthVEzu",
  "key19": "4zD2JLhRLGmHhWoumcEqKxqfkHsrfWLFncWDF28WyeTpuneqQBhPhWAE6c83wvEiEoXLAyXJriYtNoUG4MGJQmFg",
  "key20": "3vNkmZzRY6Fzqt2dYHHX6nFk4gLjPqpsXWq9Zo3hUnF5e8mPuNHzkNK5Nfzv5sTyZrbswvxQPjV4bT8kZ5X6hDPM",
  "key21": "3ATvVWwx792V7QyF69VPVm7Nqui5vaAFMbKN7ar9TxzcFV4VHgcjmS9YHMDsH7zRxvEBzXvoEkZYFLBEQB4pUddi",
  "key22": "5BqRTAoGMD9cprp9tXhN7vrsdXHhkBMrqfg35mBHFoLwzaVsKxKJMV9ULtuUWmrsPXDmkDZGEXcNV2UUpPLwrQVG",
  "key23": "5e8N8HMkxvobtEy47uUAX5sSc1yGMkp6qNnHZnz8KcrnmBDc8RyxzeZZ6Z3WErLH1PHpyoB9Joe7ywPFJgMSE4Du",
  "key24": "3RVyXyX3c73w15avZxnczN7KnrV6CyGbxJmxGvHmiHDGeHB8vJTrnTbtbteVtXBAHWHHYs75Pj5XLeerVpEnUHHL",
  "key25": "4i5Fod6DEN476b43AYVfRKPqZu29T2Qx7T7U7NVM2oCvvkALpX1PBKYvWknz5oVfhei2wiT6dJKvea4QBdSjGqm6",
  "key26": "3G14NoJdwZVj8pgjvHFT9KHBGFY7eXE67hxxSuhLv3MTt9LepG7A8mioURtw8mToNYBvwAkyw8SCSbVppThW8ANm",
  "key27": "tWE1sRxxgdVCTKFrkyLWGj48uJtw78Hou5if8iXrpjmwKxg1osQRCpyZrFT8kj8JBpntXNYAPRRv6RVqGA13R6g",
  "key28": "2zgAkXgWnync9fZQckv9QY7tJeSGaZgUGki9H5S1e3uubt2psGwmawG7edXXfScqbGU4LujJ8eWmYWnoiDsdTsdf",
  "key29": "4wvByaxEpBanjaFjrdN44vsNBGRqBcD498oMavDbwQFcRrdQrAdS5pCGuZN3Yi4uHyYjEdH7tS784vW59zBFVtk8",
  "key30": "mFXvpZowPKVzDDHB3Cjjw9rALCS6NkCzVFT2uLLYcVSAAvwbsH86K2FHaG4qSJ3D6aeHLkqskfoqjc3Wfd5MoqD",
  "key31": "4d1X95YtinKNLFS8GmbTesGNDGxU5z4zEgv5iSo1WxVhWzTYLxis5oJKgo9JXqUe3Z2WAKhNFSK1EPW6fBj6SPmg"
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
