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
    "3yLFUv83XHbEF2zMFvsVfLpMg2FqoKYiTwwboFVbrvYDKjGC4z88ay8xr6GGX4e3LHx5AAf8uTfEyt7reKLqH8dd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mvG5TiAnkCGcf5faX6RYhFrLBocC3wCXqpzxBEMMwJpx6QyBieFwkjCfPtNfu7x1nVMJEdqUCy5ztA5r9nYVCv1",
  "key1": "4p8sVZyQvudrTQisqpeB9pzp8AzooqxP3YWuoSPXZfgWHurBcfMXa9ZzBgevjbvYqvzbKj8CJPu4krWwdjy6tYqZ",
  "key2": "tcY419uBbEG8HJ7KogWWw3XV2QX9a8JLeBYsqSSk9cAtS1UiuLqJjJr59AvrPoxouhrk8sHXrJf1cAMWiA8EQVb",
  "key3": "5xoQJNBwGpC5m6dTMrwevNHZnyKAXgnHYC3D7236S2BG3Dhw2tiPSpVW6kHu8PTWYaGCD9NRgnchhHqdxm6LxwVY",
  "key4": "2peeWgHU5nVKVLxKzoG4hak1maAcVaYZpUYPyn5ZxmfYbSALybZL4m6C4CxMFPuCVLVR2AbVDcGmug514pSM7W8D",
  "key5": "3hYequSGoGjZdcTUpHNgNYZtWtoswee2oPVErVcrbyVt1eoxoMRD3iXRgenJvLcoSCGeVSbqR7huJCm5xeLxm8ns",
  "key6": "4TDZUoKoX1nrtFZz93tzpqY3L8xHEdu6RWActBFuk1rqkK7v8nL3iF6PQYTeghKjDjcSvhWau7Q4puUtGBisR1Jz",
  "key7": "67B4MCuNCfexqZyUWQLqs4Tyg9bVEopPW4Y84s1semWZLC1h4Z3SAvejZubnohTmvpkAcvq3QXLVpREqMFsNaw3y",
  "key8": "3fhNSHV3wCZGnFBQZEbgix6abvUcgvgs2otAThX1UbSJGbiAmKCNZkjRmk55P5tL4oLSdEFxxbKYwgGHjWa3fcFE",
  "key9": "4FX8cxWtnCJyfJedZEdQi7tMqT3bGpmfEimfisn3emC5kq4krFvAdgJCFCEcetMQEZ5okQxcoxWyk48guZafg4Xm",
  "key10": "5TWhhZVpDpEC6Y45CXKyjN5hcdqPy9AvuirQxVCgDRq5xmPDWaWp8vQ5gtd4YrSRgkVJ8T5JmwWtzK89vcR7mot1",
  "key11": "4zN9qxPJEGinpQSHCv21pSnhpLsmoc4rvtJzt2PjHdSo86rRCaHodudmkETpUfzRaG8igCi8h7RYHjPSyEs6NLZD",
  "key12": "63bMNVZiYqFxHhKQEjAUhzgaXQnDGG4HG5VKW92hMHvbQmbAT37ZHFdkJJCFkGSLyXhynw9R7t11xZ1WYPu4v9R8",
  "key13": "3kyM9jwi719w7z2Lmk3xyCGpfDsZ7729pN9YXZHgcMMyFxCZnR4cf2G2MhTN35qyQYubqcJMVZD1Bj3kQmcf1vzk",
  "key14": "iepdwSF9uumpcMCUWgoCt9x2QsXVoERA7x5LyrNbfayY8RRwtDhGgQP9hmGJycryXcqFDPfKgkBr1tqALhYHL61",
  "key15": "35rQANBfEJ2WvqacFfFjW3CL3VCEfX7L7umFFnTb3sjWFk7AazDSYz3kLJJCJL8Ex3a3JwyVndrC6JCm674hs6jz",
  "key16": "2xNTEXqFrhFBerx895aUPujGUXR3fb6zyTfBMogjxPvi1NPzKhPjZmmcT68q8cXZVkW5uW6PSDbDeetMMxEo1GLy",
  "key17": "57Xzeq8T4fWZCecztKTm4GArYaedAK18KKrfGqJBEzHfkqri6sCjb4U3eVh4gLy1tjHGrRU2ojMsR2W8FojABNRa",
  "key18": "4DF5spAWZ4wx6UAmSM5s1JunLotWQ2zBPXqLfHWTjjwDcJNZtS56wSUDoHh3koS3BC8a5JqHDJTceeYyi9LzF5oV",
  "key19": "5QUfmwwKsHUoTmqfUGipGfaYw5DLLU9Bmf3TspiEQxcWmrvDMY7JGYv1xu7Cdxa7g4ZNhFueLrMMKZrdgcbws8uc",
  "key20": "2Ka1MResfDhkHFps3ga4CNRuhQXZT3zMmCsBFzSdDt9jCXKSVNzis4peQNVsmSTiZvfoYUidaD4Kx6A7NqjnzGk2",
  "key21": "5C6ZP2epYjqRcRthNT3Kr4Ep1jfp2vkvrNc6TT1RCFwcmiq3Rx17QEu4TqYQZBN4k1L8qyEKnQ9ZJGamRXy2zXTs",
  "key22": "2AFpUR2BFT6aF65CTCNMWhj8nHbVgdYkXAcAv3kaLbZT8L67PKYSVtwXXbivL3J1LHsDC7cWEpaGQpz7NXEno791",
  "key23": "29pJyriLPpQGUwEEJVWUYmhVdyHwLWb9pMabJESBFG9CGcJFddH23K66uyALi7AXcRFPsi5exNvidTqmkqv7bW48",
  "key24": "3YEMYtrRE6Q2uHd5i36Jg94rDP9LtmRSyC4oHUb4mBdTv5jhkRXpVDWJoWA2zV76ERnobvSnharUCsBs6FiZZorw",
  "key25": "MWEohUPMoGrbE6uHzP5LC5UptRm62PTRHAvfGVHavqUSQLaNF3iahWEEFX9VjyoiV2222C8BSYaH6TBJ1Q2mR3P",
  "key26": "256NFptK6Yw1mAGEKpxHYQYCtyrBRXjo8XCB6rTBrzhJBztGEDAP6u9RwYrkRGfgsocZc7HsRNwz5HdX2snV5PJY",
  "key27": "4E2a9DjnTLAioH1rkzYwpkVNMWgRK3v2H3NgyCWh7Ppa3uvc1wVrrJbTAKYkvEwHceR7TnMgpY3JdME5NWWKNBKf",
  "key28": "4EkjwKjQPcjCZauNH7YJwDMjgxvEBpv2gmHEqPd2RtFq1NuHAh2dUKrko49urh1tkrwStjUjRNLvR7T8YG26YvYT",
  "key29": "3UW9wDPFtgHLcNvGY7J92RMU1GvWtQcCQod6yoNKKoyTzKHJcryQ8fBrXVNFiZXsUEb4FMjLNMpd1KdRBB4Ut6rz",
  "key30": "fJF6UukqCG1TsVMNMqih1hqij16MYnET3Ch5LjsjQDVCkwfDssEHoXWWTBD1BdctE3TVoLJFJ2ALEUKcArYpLco",
  "key31": "5QFisMYet1CJLkDis2pdRUbcWXZ6CY7aE9vY39TpMKHtcF9jJgkPnyro2ViQMMrMNPiMm7Gb1QPC6G4DKffvGjbP",
  "key32": "3quqAGVaW9MCi86CWMocXaJoKhoyLNTvkR7Bvg9dcznXueMgtWBUGbEpFZF5dCKeFkic7dKQPPwpY2NsRJDRMAV",
  "key33": "64V6VGAQzgz7FWWXZVuECtAh5cMxKY3GF82UYSuXPg1965Y814NLWF8zMyzcdaGNKqVHzcALKbgUAn4PcFwRUyTQ",
  "key34": "zPrDijC5y1VLZZKz1mwBmWbrccbqA1m1SfgpgcH4PDk8igMkoAQZvnVvETLk4qtYmQ5XsLiyujGCExcSsgZoYFq",
  "key35": "5G1kMvnG9HsPPMh6hbGobHqcaT3m5zdhw2SjKVCdKD1htkTGvApfMEYaCm3MAn5dxW7fA8ZSAs6S2c9i6gfBQPEG",
  "key36": "4sjJFuDzu41kDZamyuvoAtxQUsrxjDQgBrDicS3h6m5R7SeZqks4mLsfu36JLoPAZmYoLfyR3uKieRjL1d4pBqDq"
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
