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
    "5n1WaCtpMJf3vM7YTnTsG4oiGEz9NwJ73WvbsnF5BY4kMekdy2XfQFeobxngpz1kbjCCa4kCfkc19cubYobYoNQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28A3LVUTsFqkXK7roipknvTx8SFuf33CWTr3NyRqjPGYUDZwNFv1Txvoic5V1hXHyy8Kwf2Qi1rygMT9dpswa6B4",
  "key1": "49yJD6i8HiaA6EHfwGex8xW94ubyZ5MZNbxMyMctGg3qwxoZe78ztLUB1AWAEEvn15G58N2u5Cy3D3rrCtyjikp8",
  "key2": "aCCMvpZe23jmeTWh7PdvsmHZypSiMWerM8m3tKKv7ZGdCMtg7hY6HHMRCviyMfRi5FrNHBfLHnd4K6Wh3x3QJTV",
  "key3": "yidSZ78gzPaPZHjhZHNHbNNTZfb1zFZamGEQucycYeyzjU1FbGStmauhgq5pkV62h3FUHH8VVYekrk3Gp7zdr1F",
  "key4": "3ryU1iD2LqPfte5tSY3pvJWZ8gX7dEgLhma5xh4SKtoDwwgkjEhs4Wjfs9FxMzGLMYKp9xL24VmzpSvM5rdhxzVa",
  "key5": "4GN1wes26JxYTj59aoZynKo87FUjQuV5f4Zqh3uToy4sCS2jFkkWFQrhCmD8yZcSo2mYYPTWEr4vmFUX3s8W4ske",
  "key6": "2ADFjGGn5K6gycJQ49jFFSfpER2RipJ4hWXQcH97DkFtW65hUDEn9YLU9kMsBMPDhi5EqhjF1699q6CtMs8duv8s",
  "key7": "TanG7718GHNBnqAtBbnMERtLwxrjyEFk1d1BxCbbCvZycjqVuJyL2tNRDybkqjDMX71z2x3v8CdmgUzsnhH5171",
  "key8": "uxdAknueXWkWjUNwnLaJ3Xfe76jef7NULYiUcxBWC7kX5y1epk1JYCYNku9QrERoUEU4uw3wTZb2CnNHkHKT2Ku",
  "key9": "4LuYFp73tNEbsNnXWNFTM9PwB74wfz2FE2Z8mX7EFdv1c5q3TJakBYfUHGU3MkLrdBDQiphhrgMSnFTCuSdAUqBY",
  "key10": "LHcWeEFVN7aKU1B5CduU95vNvBLzEUkxtdyw5SEuYHj82YQwczukemvpBTwqjvMo3M8jVtmCuJFoYqZiqQxqdRW",
  "key11": "67dNqnzFrQ5NSvvfhxGavUqcZatXF7wtLEKC7uWVcLdYGLbxxog3J4t8QwmR3sbwcjuZ1qa4ditnnxNdhF9Ettcx",
  "key12": "RuNUoFiRnoKcbq6Q1tcwqnCrNNaT6yoqWqFgQuy472vxLoy5jFzVL4dD1G7ZbyVSVN9jvHRX8jBCZTAVdgRozRW",
  "key13": "38afenCXbHZSF5vK871MMR92yXoGQm9sdDcqcKypk1NN2bUU1VXEu29kTatjg75PGgkdaS2SQ4Bb7DWWc8MDLCj",
  "key14": "uerCVm2sMgpgMNFTGJWGZbTmzcpEAS6GLz5mvPVVLTLej6rfcEyWTXLnws5mqJnkirvRTT9WNNh3qRPpShVknsv",
  "key15": "XyvqDJybXiw6NggHj6gkPSztnyvYZXgAGdFdmny64YfxusQKKCwWQMTDaZpv8uFyJDLDSvUvFCNeR2seEGHmWHq",
  "key16": "Q6dpjsRhZiEec9JWxufd2GcraYTzWPPg1G7LCXdnv3qRqxgjRtNKkrkUeJJkBp4ZYDsoQ13xjpraQwu8Rs8vu44",
  "key17": "4Cr9Rzucxr4uvLsF7ANZLqaTB3rAD8n33tzLZWZz79ouaiStGQw3p6w31Ja9cuq7aWb3KeBVTeeRpnotf9EnH4uY",
  "key18": "4aM6VC9msNjHLEcQfWUauiawNSQoQCmqKZ5nyigDbxnr91uywGDnHTqpqBhs6dqtbNG5B5F7Mf4JaDh79QbZUAMr",
  "key19": "4yqtdButhHrKUbCbzwr49ydZj4xTRoh9RWqxNuZpSLFnfvJEPWtAqJTdgGE4JV6KdtcNKyU5YrEuc3y2EtbHGxtx",
  "key20": "32VeEpAfXthAjjFrcVrA9faeDoNUVHVhag4Yb8Lq3JD2K2aiLViydSfoSWw1G57W7ZSB7oJtga5NQRXCKpAudko1",
  "key21": "2Bm7pczHJtwvKSRxCUAK2FYXbVP5vJw7j82dNsQEwzUi92inteviwjrUEofap1oKQ8khyDUbS7wwyJPnUUyfKQm6",
  "key22": "3YqHYMMdiacCcQhV5bdAVvZxdEAkfYWf9Qxiws1b1JNfXNaDVKkS3RY1ysoCW1WoqPnysmJSwuzqzhgKHicHqkVz",
  "key23": "2t9LhnqeFYjd9bgT6Ay1pCJbsHoFvS7FtWUHuUB59NhTk7tf9oQN6ujEh9v81wQvxefJPzyGoxHdSaFh9kGmpXHr",
  "key24": "2bpNs48bHnXdJY9oHmfWoS29wDwEcfp6FeQRRBcGaBmASxPPcHftrGGPspE63cz7bZYi9oa1xX1i6DVe9otGcMhB"
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
