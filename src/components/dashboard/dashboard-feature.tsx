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
    "46YiX7FDa4evYU78px8bzK3rzoBhVrEpwWDQwkAAzp3obBRJZkBvZ1NMGAzPhJ5iLsa81vMgAWNt965A4cGg5KP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ed78Av3fuUZ13cBtYCUyR92PF9L7dzSA8trP6AhgyE6aeiJSKDgz6WBgCNSJLmxDD6qoJ2TS4gEV5KKZtdfoM4N",
  "key1": "nUR8vcd1riCCUp7QyFzMF6CjfkpxdyR3R49tu28Ec19VP6oe6sSBEJu7TXMJgqLbhyMtKvH2djpruJ8pF971z5P",
  "key2": "2ixTdiJDfWh3ccGF7GNqNK5SozQU5K2eu9X4hVTfRLGbohUtxuPu4Zxo2kTUZzx8jWtEtVxjP8R4xQ3iuLXBGUEF",
  "key3": "xK2MS2rQW6KMrAyzsGcMbKe5EYnAjxKFiNe5xP4WZN6TRRXUxQbkXC1tPb8Mr75XcPPP4tCCTGREEpxohDqHipZ",
  "key4": "3U84hjS1ihVzvnmUEoZ6QXSTLiB6g6nRtJEYbUPE8nmgkZNSZMR1RdMeNmFa5CnV7rEi8ZDNJdmTUseJfxcVcYZQ",
  "key5": "4RcM3BnnzANNmGHuxjWRthFafaGsVi4Z4HP5weBTapZHBD8fe1CFv3kNxHeSH3kMRcfMXA1Zun5bNZkxFGHdshdB",
  "key6": "4FGYDRDrxDV8b72xWuJVGM9KHRjL3Qd4mmaza6UPTCBaDHWVpMgRsiW9GMd1G3HMi4oS6twJaGPfAp8SYBcmXSVa",
  "key7": "XJyTTxqbhLKK8oYHfSoAiN7XcdybPHqd6KV3SLAF5R9xzzT7QwX9ECsmbchEpWDKYwKVBpvmhj8U4H7Mmmm7jxo",
  "key8": "2QBWH4H4idMsbrg4JodD8GuA4Zve8gefrHhpURDkLPjUSH734mWvNbgHS3tvuMm4C5iyCRYSPZWHguUZj9MJF6Kh",
  "key9": "44jfu1cDhjvejkFpMV7BB9i8wDnZgNswNtZ8q9NNDCVmAiDMfHF8wmihgeB9E5awdQ5u9udkiyJ98Dp3G91eKcjJ",
  "key10": "8qmJJ9T95NaCS7pPS7A9f5k2rBoXiMYYtBVX9XqXXR3DraebsYVGj6bmRpTRDZnEugM1VGtaxzMbZPqZkgufAQf",
  "key11": "4mik84RMFpPY1ynhdD9ub3QBGUtSCggJ7RV1sPXzRxqVHTPyFgbrEo3r82aXNyExhmaVz5qwsXqKkbUQKDhLjrZ1",
  "key12": "3cwzFAxRPWcUamtKr5RmoTbFxYfmQxJat8bdDNFUvSGLTY7MTmG9oc7SFFWi5jxmNPzbym1jKN8DZKJdKGnvquLs",
  "key13": "n6vAEcZgqw9ie9Nyqz94mSpCfVJmVRRh4fTDTNK2LM6Wuck4L52uMgF6vKwGE5FfndRTmyHwhgwkyR9PaGuackg",
  "key14": "5MtcDtAbZf2PNGG9TmSLS5KqPfnevrPLchoo5KEEqwXH1gfertwLSwRafiGPGWEK6on1bA9myXy4a4MhLDMAFY5n",
  "key15": "5b69Ec74sNWcXmdfsNFFVtYneWjTvPF4WDff4j9u8KyxL4oBk1CyPP5dGdkMo5i8g64TPtqPgsm5u7wSLQYupeqZ",
  "key16": "2kkGeyBGZ8iFH6wm1kR9u4D9uip2fxf5tLH9HTsDUtT346HHD23CGCtc7pSdV2nSzCzDX1pGpCkFcGYw6w3Zb28S",
  "key17": "6xhLapj2fXW5QwaZtU8Fbv3NC3guo8QoNBudFXGqQwWQkHcLECNY27PZNg2GX6vSPNr5V5CdGe8GGcyAcJtodDT",
  "key18": "3m6uQDd8uavbiFCVKv9iKSkRo5tFe1Vw7LcRzmpZ338cc8BscTTKKv4GdTbcyneFQueETP4pSzJprkyAN6qWoJ9q",
  "key19": "3u5gaFdAvoeDQL6XcmH9T1j5bdFYJJSLovpGffxzRZyzmjoihRSSmMNJCrW5zSzKQSzNuBu8nhx9kHnY73JdemDf",
  "key20": "4WzxMNXwXhpkssC6xtZAZ2gFVYnn8JAvkFdhPVvE8ooK8XAsLJZ1AvhUCAGX8Kwy79WEiXhDbN97yBhU7cEWBF5b",
  "key21": "tFg4StDk7SUJ9p9gHwtmVQn8ALzGDw34d8CjoG2kVXhRHRudTC4LRYoZMHRxAf4QP2UGB61K5mvivcSnVhpbJCK",
  "key22": "31Em9psyfLSkXDcY5eKYqsSvWHBDh2uCsrrgHdmW9jfsgjtuQNBzUEzowCTysVwgptTxo3q8BhrhxU74iNpckLLe",
  "key23": "3UBvuCYcDozZqS6zqvPuKzMPstQTZkMsYJ1gqMRkgs79PGKRyKRk1EKtd1pFJK4UCLY1wL268FeJEro9tkH23qp8",
  "key24": "4hG8kf1rtMWSR5eWo66wnHVm3EAxWoe9JSuRDQ3Mo4kgZYNLGpe8Fuj4cD6QWkDiZ2ZiGCjpJFyCBvtYXodZ2oTE",
  "key25": "3FU4R9HQ3dHwgtoDpcNj3xucWy6jK6HSW5P3MpkNVBMeDBe4F9eQ3EBEEf3kGRKT8mHUEdDEoWvndf99REG3SKWi"
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
