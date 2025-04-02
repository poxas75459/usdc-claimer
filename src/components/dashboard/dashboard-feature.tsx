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
    "M1gxNLAtJh7A4i6EM1VR1cT5Gm7ds8anAnCsqtBmRvFELGLAtxQY9eCYnGYBEG8qCdLCCRaeZptrwA5vVCxoKCk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dJNWoVH9qQmzBvC86B2QydWDZr8KDC8F3c6ANJwwzEVfwwfptdkBiXbDn8zrUWHHUVfMgR1VK8nNkvsD9LPbGBq",
  "key1": "jDNLaiWM9E635DjjMQTLRYkg6RvwRFU4PYW47pyNiJuGc9vN4frnG9SK5Tap4DqwM6eRVKvqDYiV9uysfmtBayL",
  "key2": "2qsNSEco3i22LwjbG52hizqHLNnnAC9rtXScRY9qZ48JmwKq69Ls11WvxgpdmSLfUcMULpmcLEgbXrRhPwVRJ69s",
  "key3": "iNSfov4dKePf6kDekBsgiQa7h64hGUGfDwog3CZ6Ks3EcvLMHHbyT8bVUxEXjTqnSbYQLpkL6yKnY3cVdnYLH9C",
  "key4": "ybDDST6zgCw8kwcc3nL4ss2Wnb5LqcerysHWbCLQEALEUWppUMFt9FXqGtenoWGmoMbRbocXi19r9FVmchRXWff",
  "key5": "VZFqdpsvPeebwdh8vkJyywJTJFcSNDRy2VuaLX4wxfMEKZJHWmNTZYFBU3qpyK4P6xnGYhm4StBrYXHEHTbASRp",
  "key6": "RNhLXx78LqVtaVHQEPhBYVJcLzwxxPR8GtQf9JkiqizNV6WsvyVHEk2PvP6iyFzo3QK3xUGc29HrUuurtTAJyuo",
  "key7": "3N7nPQnfrAovCLxc7X3DDe6p7hsyRx3C2XMShc2kV9EahD8F4CZz9uE4AdcdWL8SJGWAi7bBxxFHEJEKMBuJtPvX",
  "key8": "6H9b37YzrLcL86z5ei3UhZjxnd7feAPvpRtxwB1KJSq3bTCdLsNTykNrepbmN74DJd3nswyMEUuZBBNqdfm28CL",
  "key9": "42fZDeFkvt1jxnsCZbvLtWc837vPERjvndeNH3f2kQxBt2LA3DaSgEv8sXnLmQ8wt9rTjevsZovtdoNwSCqV2HRD",
  "key10": "46srSHydeZy137DoRkY6A4VsxXUwmWgzbMeHWLbbCMS3DoHTk6cHwsRB1UdNCmKnfng3FsnNKyazN3FSrcVkPNGK",
  "key11": "4kfMEsJZEA4nwBYdt2Shu9oq9RdGmvJ6VtJdbP8eS7PZWDtTGvDYEKa1MJanA6RANYyjsRFdgT1o6ZEnqv6SEjUW",
  "key12": "2FpHwiVKesZw87cJ25J595dRmbxV6sGwqY74U2D7mU8zgqtD3F5yGxPCnn4NPn96Sp1pgUjFpVSAbbuACtAHy356",
  "key13": "zfpq7vqtrxsw3dAPkBJSMtobjTKiK6LBy3aC9mVDzoK2Cq8PDvwmq5Vf8GTjt5iGBgX43FAYK4RXNu4E7pSPBDp",
  "key14": "5okC9RMU2w1h6U3TXxz8kSSckmfUv9JvEDB41j6n3sTdmWo6v45BuLVxKYPf6fsArQdM5PKoKnnCPtyBNhRTiL8A",
  "key15": "5kPNBN2zqP5vGBPao5kactaodftuiteLnTbofEpX4VBYQ3K7YXJ5eVTmNDhbxj8nbRVHMvSWUnQsQHP8c6NGBvQs",
  "key16": "46B6fNJXmNtjNMHF3iFUEYqRK3Xq4cvG5ZJWXqFomgMEr7NbiFzvR4E1cpJo11MrDB22uiM2jh6kQvjUfTyuRECC",
  "key17": "3GSc1YguWimxwKRSnH8MyDv8RxMMjMfWd7MKTY3KQkv3AfVsYSoTgrbCZ4bGjXGrR7gNGNAzBpYj1qbbitbSQocs",
  "key18": "3L4iCz2X4zv7V2SGsqSftDkVYJbJ7TXRpU3hvo4Hgac7SiDkWEzimgx1ovxCk99xzjCQs9RrDh8PcR7WngsMqpMN",
  "key19": "FXb3oHrBkJkmTX8P3XEgmHi7aRk9jEBmKKDZ9QjiVJaPSvgEVzz4QScJxFgLtUniZyjegQSehxh3hPuRDdCkvR9",
  "key20": "4XeLKFshhTifSwKp5Jf4gnfB2hxWBhmZbUn93qQ1pftrtg7uwHf6zm4BQHrMSL1MhY5HmNVbrSz54qc6JrN4oqaF",
  "key21": "4QPW72rHPCHT9ZTc4fzhyANMhqDAaxt4zkYz9NqGoDt84ZEDTnufhRuy9ihEkqvpPWYwUgxMmwEpmN8JTP7Q6KJi",
  "key22": "3JYNgRzdEyDvmeqcBvGViQomuj5YLqfoVfw5raurp646omqAssRVsUHJ2oyz5LRMJn8Rhy5VDMqWKiYXqs5yR7oL",
  "key23": "2kf1EsaRM4dRZKrmeX4vNGpi9tXrNDJVCJgxAuPV8WrMAwHhUtgQpVp2VHBg1SLaJdqcaNepmzVp1SBumieD8gq5",
  "key24": "455gb5DUxd734mhphNWEbQiKGeAx1wowb1rP3hb2hkhjY3X5CzkY4iziNexRPJePJbZye7RPy4nrhDaXUYuFob2Q",
  "key25": "4xSQkoFmH4YE1DMQACkoPPfupH5eJd4NdGPTd6nC7YGyU4jjKpySGssBXD8spGzpiPyx31tmPEWgixbG7k8CARq2",
  "key26": "61NVPBxu6z2tu7oEXFJgsTFi8Jy3UDJkXVPf9RBspJr4Cx2QVAVNGcJUuEE2pFNz8szoevfgTvob99GjrfKcCnqr",
  "key27": "2GNk9j3nvZ84z16txMUuJPe4v5EN9YDe4B7qFYGCPUYf3WyYdXdcWmHydmBW2yh6naVYjzbST2Z4QMAejtPh3XHB",
  "key28": "64YsUAMzgknjJyEhRuALKLt5EMgvZo7ohhTCKR3pps1i9iPcsofanRWrsgphkqYJmMJpVaemBq2W2PwZhLbUa9ed",
  "key29": "c5AFb982cV4oHoiHcYU9D17RPLV9ComXj2jJ8ofigoqbFfTQVhmXA9XgD2ksMKmrJhHQxxDj8t9PiorwycFKNUm",
  "key30": "5Uxu2xr7boWyLsZCYXR3Drn1TDa3YLHC86rxn6HTizgbcHMph5L1tLGJtAfvb54rNpAjkbh1pb2Z3YaHC3ogBFi4",
  "key31": "2ut8VJZcnnaLAsVSSD7hFt87CRhYVcEEuua5DDnKxfKrzyN2W6NcCp6L5MJzFYMJSPVA8Ce21YwJ7ZsUrQCHs2nu",
  "key32": "2mDg7t3BdzdHSK97jMsB77Z6aAu9iNUKpCnJygpLyWfncoXubbDUc6YqzHgzzvCwKXr4PFvNuTfP2WeieW5ATF8"
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
