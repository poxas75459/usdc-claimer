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
    "KRAhep4i64kAdTKt9eqBNpbwUWwG8L6zWQwFv2x9wP6jZ9gtPZ8sPZnvLXT9SNcjGifmUWuXc3zzrNVzrjihbzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pmzhUr6XyoshgHthxXB4mGhkWFpsDusG4VVSAwMrfZvTq9Z6ruoQnBGep2FjQtm54ZNBH4rn8yH97AEvp6SNdUo",
  "key1": "4xSxT4NwfCezc2DsJFBpusR4iQYSZwp26MbWmiXfR4sXeExSoCG4s5e28bKwd4FcfSSDoMykESkRC1waf6QR3ePC",
  "key2": "2tQBu1m3NfVjF85W3JkjfMFbdaJNA3LXEAwaDTuL5phC2Y1vydA79w3fQkDQcHAL6rE8BWCMcJVpRUtCC3Va2Ao4",
  "key3": "4g1qSQeH2n5iLSSzjEvBpm5iA2Uj8h2Uq6bUu94GWpsxtw8nKyj5qWbPVVQwL4yUHpmNSzPw4dkW5YErr7cRevgr",
  "key4": "5Di7fWo7iecz2SgfJqoh4hgjhjUV8pWnYjh78N9zChaGc41VM1q7a8rfiHZtjGyNw7M9nXLTJgxdLPWzRUKHzc3x",
  "key5": "VUeQBv2vBrdnRE3w4o8RUemK27R4hXYobYM7BQQ5VwZmKRxjqBH59f3fWUVj6aAfBwLUC9ZJQtnL8PjGqMUdm5E",
  "key6": "2f2WLqncPtZSmuPxfFoYtsDvfCao3NcbjRKyuYxTsQqQMg1uzrMuQwExT2Ud7DJNdggEjwmHWU4P6HvSAs3BU9Fw",
  "key7": "TUQwbGMNqgUCCABHzZP6suCeQayFHsPFtC5SQn6LenKE2MttSgsv6A8snbVUjvLExREK7UJY9k2YysHhm9gbuKt",
  "key8": "4DTwFRqFB4oD8wmWsorSu7xQXjio4YneqoVhGADXVMbBaiof2FkPZ6bGZ7XEJkBRHkcFrHf5EMRskMgRyDjHma6",
  "key9": "4DXNVeSmkRtffpTHCgr7swh9xGZvKTGwKDN9VKpJugzpHd7eQhWv6CVaHLmYjVXvd3QqyDKysqX1hNX5YFC88fkG",
  "key10": "4F6y7tB7z7auVj4DKvff2UC6iV6br5JPj2VKUgtAe6j3TUASC9GmVM1xJmAah686uKmArtsrgP8kBsmCmK9UxGef",
  "key11": "3XMmPQkxbGkzP7tktbLadwWVhdQNRMPePgZFfu9grxmHyXEEycMaZh7ku46wHzMYYQmPifdYR1qwf2XV7nSUojj6",
  "key12": "3yMosJPNzsjv9TTfU5TitBMEvRUYTLnqPrH2iMoCrQ99eo3MceLwCq9b7TGVF5urVpDiCd9tReKLPrnZb9o56HB7",
  "key13": "2mW1C3gRG6wDvgS3VE7BKrZNTCJWBN9Sy39HDoz8q1etES9cxLpB2CDbycWrEDmwBiMDfLWA6DKg8Dk86pMPvYYx",
  "key14": "SfBS6eJvP5eHGqyRXwaVsG56zRvHX9PnshEXSP7hiTJUW2zSzkTcSw3QtGqerhQYtLNpXxyEigzkhmwLEU6EfzR",
  "key15": "cdCcZdaMXnk2s1hU1wNeNYEGhkoD1Au9jJfATpr1PqwtYpVDyFBneW82DdSa7W6TGbgNbCWv4sVxSyafAQtE7qN",
  "key16": "5JiN8fEDSheL37NvmS2WrD87QX34RNTrc729G1h52m3cTqLh1EUjue9wjQdzRGBZ8rAaR8yq8aytjmNcHHTYNxde",
  "key17": "7ayNVY4pxBCEtLq5YYSb4m3Y7cMK1kfkouHtz77pRDkYXqXZ4DkNmWbD969mCUHo3JfugNTuPGKvqQC8iQEJXp7",
  "key18": "3saE6nLB5gtgWQCBHhLKcbHHU5MP7opzVRA3B5KcWVeTEvEKiMhXfq98R3CM5BTkzzz627aWCJvhhEwsL2EY72at",
  "key19": "2P5TmG3pgwUEkhwdumtq9o7krvJsAmdKJtFn1YR9joGvkmtYWdGZSto4W5UrLs84G7a1MSqz8AG9jRcHgv3Rjo1Z",
  "key20": "46jH26RayTdXKUV6GELVJiJLZteQPtvoGv6ih1o2X1nMn8NDDY6RzGJZmpkmyM61jgmzGHFwSvnNyiLvf2aXXVgb",
  "key21": "5GgWsSHqX4B8T34v2aXBCyVprbCNHbjUNb2Ug6UkbjbB8RXrGzx2abKzz6gHxVKegFGaHwzTH2ZvLCZyYS6KwQs3",
  "key22": "5tdy6qNavLR151Gvaa9a6D78aTcZuodDghuzbiKetyUyEko2hmuTmMSjR8eEHRjh166kpd7VcAvYc3MS84cXmEK7",
  "key23": "2eQYhmsyairS4yzAf9Z8Y7m2pVQVidKVyyfXM8aBmXsNibGQibhtPPNpJ1BbaHWpJgxwa8UoA35yFHsELoxKwBj",
  "key24": "5L8GBsrEG6gUjTmELj7axpL9e4BVcdAgCz7Sjwc38fWphX3VJ1gGnxzUkFdxA2AtQ7P1UmFAzgFRRgFgFZkTMgpf",
  "key25": "3aaeVVE1Qfbgewc2uopbRPZoSwKiZUxujZTr1KyhnEHevB79N2EqUjAXXi4WpHuLamwqDLfPsQ7oWqZFwDYFHR3t",
  "key26": "5H9vJUVRn4S1fozfBoz5GMYYZ9wRGkaxf5Ampuupoe2D39HmBSWzsvQMCfBXpAqnAR4NMhHhmL2urGa7adw1oZrZ",
  "key27": "57rjmQ2j6wuoKaYj9VSVpEUXcS1xGMkS3KjC1N2M8h9Ep9XEURiuCzgh3JtiYocYVj4HDvdEwh9okxr8pjKHLrys",
  "key28": "tpT8JiMEX5qm4K3HjTTepaobRn8bvTv79BqDChGp9Mys8NanmgrZ6LeZiKkvgh1bJfwewoXrnkFkKB9sjweRWaE",
  "key29": "545TkizZocLcmcpGxhb6DQvFnPbX1w1Ra6LeFNjnx5m1AgBKfBPUzLCFJwU9Nuzj36YwsjX3TCHM41nZGiheVZNL",
  "key30": "4ivWuDUyKBd2HDfLtQFXgJkixsbtnKZHeeRDKiPu8ej9KxpDycCztZRbSWXXUhVXYX6pWmfsDB7Buan1nkM6n2ZH",
  "key31": "5yNicNvAyHSqsD7VSB3R563dN87tUpv2etnZqb2biMaBfW3njdCXbMYpeqaVxPH2SZ2gASMWhh6FtR1r5F4Dh3aD",
  "key32": "53CcGqBMm5BvJfHcQB3iKfdRCoNZvYVbQTQJ1ExxQJd1qtNYre88MNAK6k8C6NbAJJUDJwBt7UXvJ2oGvjt6DSpT",
  "key33": "GV1pQFGBCTw1czBfsbpXAYup6z6YPgjeyTUVZA4DWR1ydVP1tPHcn6j1gTZnTaq8PHUXQMKRQgJgupwPac2nUR5",
  "key34": "3j2fCmGCuUDvSfFYwizBmgEarckLLeTVJFMqW3kH3FZwTzA5KjUNFzxeqh5aATPvhGvUURJox3ycr8Bhd6Wj1Ate"
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
