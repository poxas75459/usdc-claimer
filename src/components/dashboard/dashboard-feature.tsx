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
    "52rahjWNtsdpxf3G5emUV4a5gnug1owXpsuQduBDyYWSvVV9viAjRiQvTHhsgTXvckEyxWpS1sLVdY2LzYT5dyFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BmGnqKThUrbFY7HEH5tkeYAPCkig8JRUaianZVBWs1xF8TJ7XU6UfnuQtLAfAfqD3ow1EQ5zoZfMkTjbt62vSob",
  "key1": "26pbp7XMjgmmoxPVibsiAXeENXsXd541sxju1smcVgBL8yD5KY38dDKNu3MfbioAaJQkqBb8dVHRZx6vrwXG3JEL",
  "key2": "49EL3eDYfayvYbzjkrauAAG5rWTqNncizaGtRdgLXx7KhVaurJrMqwap8yNzbBJsWyGgT9Qs2JpNGjGXBqSsNACC",
  "key3": "3FV1j8mSNdrs5LCRyAc3HqxoPds3r1wBRGcehAvgqJAD7VKyyNofas5etj2v9TnfyMpQWhQBqa1AXA4yJ9TKSCgC",
  "key4": "4sE3M6JHCfeonSs1qNRwzacQ1441S8mPpxkbXNhTWppWayyv4JHcspLWeZ8TufvjZNDA4mjJrEgXxnddD7FP1uTm",
  "key5": "3WDUaiQRNeJJgRGh1YfnzvhaHHiZGUe9vREs6Z2jwSS2ngr1rcUbXQqzVG8cGMhAXxquQisHJn9iCNVZscPGH3t2",
  "key6": "Q8YhQJmQB55oGSp3QMyA6nAZcm5jjiBDxmRDyZkiyqwKU4xUDns8S6QbfCqre9v2N6BjMnVdeBDEsdt8VpMihCB",
  "key7": "2nHUnNvdQXNBGMxgCkW7EpsJVkhXBa7rdaEAWTGrpE2bPbja2CeB8nnWgftjTGpoepm8jDwfMtepmRZ5aJgVc42G",
  "key8": "3iKw2r3SFGoLkwyDVoGyV7QPa73dhKyeyV562BYJ4Egu5AX6SdEk1Gwpw8mRtoLSLbj4dYNdGMn9oyS6YDbVuYTr",
  "key9": "4Kc7vpGYvbzcPb4YNmcaSQwkcess7Bde37pVD3AnX9L6z2eNHb1fNMsybNMEyxDmzUP3TEfAuxf6pLhY2Z6KmnMb",
  "key10": "4eHnf91DW5KnF8wgF4uvDB77QFVh2gsbEYxZ5ABTnpDohCyu3hL8mGHkRy76THi8QXYxFiT5ZaV4UhaQE2cGqNHg",
  "key11": "RmjTdDoWfoQ4u7K7hFjGouwwXrQyQGqp6Pq5HbsxiDqPwZzW16ykahVpeJxtzqqZfTCkQZjucxLxMperVs7Mf5C",
  "key12": "hvyFrVroRYRBBjLgXEbjTmuXYKiDLxDkpYTBbTRov5F1vG3dpsRYo4nZk3Eic8mbx3yDBCBBjGPFSfeCFAJXZHa",
  "key13": "5AEzxMvhQbZ8Eah7ef1sKkDSZJv3xKjGLfUwCCmNjFQsnrKL9FFVwcyNyfC8LXXz2DprtSYDUiuc1TCCw4cvc9vD",
  "key14": "4EWfXPzFt9msTnGUymZTp9U4qQg5VJ4fGSZdBBKQrQgNmBqBPP48M1FoVoZgJT97osVfaEufzsM8ZY6NjJsLUnAj",
  "key15": "Xzz5obr4xyLBvBuzpmYdYN3d3QCAjmVuzcUXASS4SPwEoHXa1nSKD6kw8ejk3dVBU6DNneXG1giZTbdbMX2zzEB",
  "key16": "64SHtHTvhAhKJ1eVPQJLvRdVLya1NMm8TBjhzBkv5ZtgNqq4ym4yrpHf9oy9LdkdmZdr6rzzga851G1s8Ecdmuvu",
  "key17": "5P3DkziSJP5yYeLMK8FNa9FP58uUxhgFE3dRHJxnGy2Rg9hZsA7eJqpx3s1gZV2AgZvHxJ7vjBD61unk51cqWGYE",
  "key18": "4zCD8Pqno7hNiZAvgbgXZmQ1mDr9xhb9HLKJ86okndRcPfcot1QGyXhXjCr4y5c3uWaPPS7EjyoTuKku9VtVPhSm",
  "key19": "2Ky5YWGr2HG91zPpL7cpTSTuGcGUz5BFJg7w4n4JsmXrxCM2UDy3mUmQwZDVLXFna6B8P9iQRV38bhJJwcUbmV3F",
  "key20": "64qbKsoLuFR7AH8zT56F336WkaMJEJW1cktZJfEp3BzE2aT4dWZiV5YwRM3bVCNWP5qhT535YvezGtP46qzGQcfk",
  "key21": "38TKbSynBKYAxqGXM6pSq6KhddTBhyvHzCVSmHUCxTCimLQkPK7kK2mVvg3vWLf9qE9omP1hrcA2zbLuzg7mxVft",
  "key22": "2tR5HnsKFGjc4Gyjyf8yyfTusPjHNSCmEZXrY4LQ7A2NUpBpVcps81x64kWCJ8uR28GpZAKZfDFANFzVmLW8GFwS",
  "key23": "5mVagxKsCRghZCWkafbrkpyDikBQ6UVFzCfHTv5VCFdUUVgycrPrdNTx6Wp3uQJsdMukY4B9qyKD3Lom2qahGe1X",
  "key24": "4Ybb1uSJxrqubaMRuQWNEwD9wZC634x5jNQkZBtTCXfpRhmynTjTx1E4XGPoUht2YgMP1wWwLonpUkdjQkr4mnsq",
  "key25": "frXUk47ZJiYLbUZjhWm34m5PXYp8PwdRLPm3tM8nEmjK3Ek7EBde2VCveHtWDmHa88H8NzKQ2zycbS4Tc8kmcEi",
  "key26": "5FQPppFzbUe2fVYhVuYkZ3NJb1UB5CfsU1NnaPfsMECqinqmdYXdBSMjfDgYoCmqTx6GndGekDpueTxsXZBcEGxp",
  "key27": "28NnAmD575btvKAZw8Dwscj4Z2ydX5kVxyKZ62T8i8crU5HN6zSjFDcDHxJXU5o5euzs2r9Qfxg6w26MGga21EWD",
  "key28": "3xuJkmF7caz6TBYJAx28GY8R6znZdS36WwdhP3bcsngDWrFuEkK2TFpAxCXqCq6pBsbcozHRvy1XgvUWVYkfcXQR",
  "key29": "49vj7fU8iH9iqDs9m6WaEZi3ZFVBhQKAzizu6pn9jpWyd442SUyY6X4QDizWKCa4wpgB9qvUbR9iekvBbqzuxdW4",
  "key30": "3S8sdfSMAMS2si8YMYNCjDZJoXtRA6wcMkKQfjiJaSYo2LSDWGFXgE1oNfuEZgznvGc6KdFjznGmzmSKbiCHQeU4",
  "key31": "4uFVCHCcYD15mEP2NdAFAFu7E5Wdjd7AYPoPkBK6PFUpMV2ZxotKd8RxQCXas3z7A4bZRtJL9ohqAQkyQd8PBQmb"
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
