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
    "4iLjLBZJo4iALRaB8whK7wmvmwwfW16TdLymRPDdVpF8ibmiPPxHDp1xMn8C9pwPimFUwHcCZ3UtXRZr2tZo7Djg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kW8nF99RZd5mPekpe7u7RDmTKZ3nxG3U16UrdwXxxT3Yc7F6SWmZb4Az85xUYv8gHKiFbcZYa1AWtcjsctDdEV7",
  "key1": "BrFF8EUpQQ4jSMgd6UdpWrmMTDmg39kjnHyoaZgsVwwkWCECymB568tk7iABcSDXXX6DXkyR5wmM1Ug6hjWi9Ew",
  "key2": "vTy7B9J7ZEypUSHHU3Jzu9dGp7DCeEpnNrL3T2ReCTfF9MoVevmXSTMCB4ojFXjXdukVgJtmvZ8mv1UgrjjEHEX",
  "key3": "inQKFTGj8Nemt6T924tXcWxTejABEHD88Trh5UUsJQbNw33BXkSTdVKos8GdqHN64gpqf9VxiS7cHsfuWsYSuYw",
  "key4": "mBDrrcCFEQbMq8LdL5t6qgR6afjDCisyNPWkEMqBmguRC7M1ZbLgnrCnKSp9KUypKvH9W1qUyxozbjHoLe1sFFS",
  "key5": "2pYDG3efQv7LeXKzJq7T9waCKpbJKNhkrF2uwMUVRGkHt5U3ynFaaeMQNRJybfj15iXK8JfJkjuVDDZVPeKunmKE",
  "key6": "ggSdKTB2XRzCm4PNbbeuiRuHCdo127sm14Rs93P8yd4D2B6URQRnt5VmsoWh57of8pYz1PEhADnVNSj2CfJwjpd",
  "key7": "4k3arovqwJ1zgzpoM5kdCjUwY31wUqY2p3PEYN32GtRDjvem87XeqVePjG4xUxoL4nDhPmPnSLibedU752dorZKC",
  "key8": "3Qx4txJktDVDvHxsHq93imsdKCtwGaHW1hVMJWkiUA9DvDLPKNeCQvkEpNHVu7Fuiaw1KPbCkfkMpPsDDvnYPgQ",
  "key9": "3SNPeGyzssLn37H3jkLTWfWTxkuTNVjxNAP1YMsbtDE2ezNM5q35prdQ2ce3y4bDYLR1unRvJ35h3S5FiVKdqbuv",
  "key10": "3hAM3sgYyNde12j8mBLf44APv1EHqgoopv5T7ofbNeaR9ydrJuea9yboUcpcsuGg3po38AK4VpaDBy2rMg6AoRd4",
  "key11": "313oy3SRnCBGoTF9qT6sDjApTuaNWcYtwXxnnaEEeEd9GzcVHXd53RGNicQSrABZwbCUDQHXAwuLWi2L4Hotuutf",
  "key12": "3BZu4dYhnVfCzJNg5THYi2pN187pixyjaovtn6cLAg7RTC1CrYPKFxhqkUd5TDX4i3LrTUaGaymJnneZptreWMT2",
  "key13": "2K6gXmLwkxrpZ3Vo7a4uTBNksTzK3EeVjaGwibyEFi3q1B4qYmZDkhCSCrxNE98LA9i222dKUi7MkMmdRH3m7N9A",
  "key14": "4rLk1fKeNBGyAZNpq2xRQZS7fpHhWcKLoAxeYQLmg7nSWnphQDWm3S2erMYfWtUphea34jxiTy7YofCcdrKHgwqW",
  "key15": "4eSAGsJB59WBBh1rrAwdWEzCv3vMSDdawv2GcpyAPFHu8GvxfmoWgkw5TwNUyR7PytDR9yNvyipWEBwnDhbVhQr4",
  "key16": "5gnNtNZE9fQT6ZRnKAPb1pqnwqw5xZfArZhfus9HoPX7qyfhsXEktRkvcamokf8mGUf2Y2QTsPz3VyXkMeXJWQA1",
  "key17": "4FodyLBRuG2MidKBNBFrhX9uLfPEmH1QxF487HqXbeF84sVt8j1nmic1VqE25RZWdX7DAQyuCvHtiyncGwYbLNor",
  "key18": "4paDv9EhWPpSqQNkHEVDavKoEA2vcYoMz8LEffnzFB7HzWyR62ELvgT1BaDARATS4vNpUHkgBw7va47nNqRNZpYf",
  "key19": "2o7kryHBa5qkSUmikxnHBUK8VcBordsnfxkGtL2h4NEcG1hSJnZUJ99r7x295wKFZchVSQYUECLuNZFdTngm9zMg",
  "key20": "5ncKLZ4mig28oLMjwg11xqYJX4hGiRA3enerhHzPayJjE1CbLMxFA8RgZZH5JsbzQkqtAyeyHskqHcG2LX9Vwyr1",
  "key21": "2q8Cxs2Jrjoiv3C7n3hJTjUkhEft1soTL8oE65927DYD2YsnXQJU4NBFE51Fu115y6EbD7BrxPH9mjbnT5qH3VD5",
  "key22": "5s7gEZse7P18mQuW32KvV3vgb8sBQdjgb6B1RGwcFfW66LnqtuRxvATA1gKANWdPCqPwCf2HSc7aoxg35kSxF7Yp",
  "key23": "5F79f8mJGq8fw1UPTeeCrG8EmY5JNPJKicA9wssKyBTQMzG8WJXtNYxht4S3rv5UhgtfiVn2SwnKa3ZnKe8Dgqgj",
  "key24": "5SAtMoPJtsJX6ioeHGLTsBYW4bPCUuirvU5TSb2E8NSbqyKqFdAtM4gCaWmGkcBrCm993PhUnePCEK8s36uV1YVV",
  "key25": "2dbh5a8xQaaMduc62maUrwkYimCqLunTdmAzR8vWjWFMF2jBL33j8xDvGCCbj9jzXPxWgygNvX2WMJn9KHf4ZEyf",
  "key26": "676Q6zjQ9Z6EpaLg7M63AV1iHeTsLbFLdoRWaKE2AFdLtf6Pf7DE8zE7zkjwwcZ5rXTVt3rJ1ZxK2Yb6WFr8kRc7",
  "key27": "61ghtfs54g6VKDAoE6p4ggE4hEuFSP8NB2BFzG7th9pdXR5EmGyRfHquXyXiWzvmGpUDRVAACZa2Ks7fzpEUob3H"
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
