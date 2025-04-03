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
    "4h8eQhCGZdtsxuk8Ts8dspww8BiuooJSkFPDksgQz8r9P91mMxK5Co8XGUWi5kAGG49p93jK7RKNJ6PivqZTVTM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wCGaFfcsRs17dpXo5WpRM4RmxyV6VTwLMU3ct43R8KdcasnzH78QZE1KfEqCAMsqX8eDbKpSXJcrH3EXVJzVURs",
  "key1": "3EFyVzqoVCh6ZRteT4psTXtXiizrm8mfbNHC4kDeaGbRkEFmSidWVj9m4uru1KEZzV899dYbXQRDEdM7yqe3avRK",
  "key2": "2oAGe4CASDHwpvkQAiLdg8KesArLnNCboFrARevjjKRXuFHXmcboeDpfF7GXntCbF5VQtKsua3nLQBzD8Zc5mQ5x",
  "key3": "5bHUExkFzzgVZ1wt3NUNpWaJtxDDTqLmFTzM9UXvTaPLpu8Kfbhicv45Zv3Rk32oTgAMifq2ySZDBaznNqtTKTyk",
  "key4": "4kPgp12t7CrEEfAnm78skPKoz6C6zo2p4EWUXCrfJN3EZH5P44GZqeCkj1ZLK6Tmcrd1s4NgHxZx3RxvVkAf4Nm6",
  "key5": "4W9EkrWZF3h5PCt48Fv4cVv7z4JCmCzv1ABuZN5QwuEMohKYfFfhQBhJANm4T9YhQEWKsrdVqhgHs9drTnzYe1KF",
  "key6": "4wCpcv8BRXs93GsPrMr5y7XgRCpoEiijyjjh4KdxPJD1H8vtKiouKALwPyP3E4VRbvT7C2t5RmYtPGpRTWUWz51b",
  "key7": "3wWyRtMsbaBHq1QCbBbd8R7qDX95Q4vyHT9WMwR92YzevPKDGCDmqztGYpPHwo1GHZcS2afFu1FJwruTNN8BUtUs",
  "key8": "26nbQrK8K6E4yViDKk5LUcPAV3YKU9pMqaeUoU5TZAGQzCfGP1YdU6PCSyPKuDNow82YmbKVFea5muFP4iVXetf8",
  "key9": "2ZUaX5SNqs2oW9dtomRSn1jgRb7wWeEGxPCzm6uix9GuKpEv83Ujm7uejyypJd1SmcDBrgxX5VwFVyBgtDuR2vvq",
  "key10": "YRH9hBBtRLQD4fPdY9PkGyJqLYKSdNjp1ufBjqEnpwqVdbSr2a61kDT1V2U44tU8hmp6DSiFXeCLtQx12b1mVtR",
  "key11": "4cDdv48fh6ya3he5ZgSSpxHCu7W7i9k7JiSdV6b9x5Y6AnvGEwH9otnGT4LniaP7oUpX7LZrJnwT6ficRryY7hxB",
  "key12": "28YbPLts9pN7XUn5WTjXU4gPU9yHbgwC98hKEDraiQwEFLmebK67Sp3ZNzpuUKg4Un3p2qR5H75NsRhZ6uwNp4Cj",
  "key13": "3LHos5Be2oxrgb2gFD6o9odrxbGQBMkooSHhGtiCy3dUqx7Eod2duSmigDxcA8QH9ZDeRCKFUW97qRzEQ4YKuofQ",
  "key14": "4eW4GV47Js5BD2HHWyPgAUNVkWfabggta7L3DBLZb7r4z69D6Y8j6T5qUyEb4PQhwH1nvx34ARRHjJRp3ZmrFnhY",
  "key15": "2Ve2h7xoJ3vTYvi6MY7y4gSh9XgnmHUVBZpXyKMr8hJNg6Gkr14rM5A7XJQECrAxrXnG9c2N2id3Fjernvv8371p",
  "key16": "4MAem3pWLEHAoJeCvSrt2fMYqxSYtWEhrH6jMNL95T76YfHPmGztjC4YSUyCXBhp4bSqd1XpHyDfHwmZwnfpVseP",
  "key17": "3x6WmojDgVedGKZTgtrWkMu1ZbQZbUBor4Q69QjSag1LWrEqcDWwtzJ38KyWukB31ZtLsUtePQGTa16ymLXgwWB9",
  "key18": "aDMb64NSkEPcrwG51wtTgq8XjEx4fQ9U244nZZgE2tU2p7JBwMUd4omc5ZYRXF3UyjT4Ck7HFrHWk5x4Bp5MnAQ",
  "key19": "2f4THWYh7DYnpatyzvHVtS5ur3dp2GzYMdhtcuFD2eF2o7aGEUMEZmbXUKFTHLWVf589RWjhNvW2hwd669JkGs6N",
  "key20": "4BWiV3q95tQovYTfjV41ju25e2Cv8yBdyRt5RenmUiL5CjNNFbFRpBBp611AkXMFYoyfKWK589Dhu7LfEmESPuMM",
  "key21": "4uLMkgUEfAxuLxbVgFdr5MPtULSSRRVW794aVwK4zQ79sp7xJrHaXyVwF3MwVS8i9X7PzNZrB3FoKGZw4SjU5hJ3",
  "key22": "4eSE5ijvei2AHuAsDt5ov3ZXcA3P6hbNY2tRydAVjDLc5DZ82vUiXZgxG52g5T2cmZBrLRBCmvDT1wYPV2DLDh3N",
  "key23": "25kjPsRstjaF2TJuf3She5GzYnoB7hqKhfWLtw4UxXjQaa68RJDuKQiGsrKkouiDsXSBp899sQaCFrv7zdCbPjv6",
  "key24": "56d2fRcbdHmD6wFbCH2XcHj5ajPjDa29hhxxgoeEG3AShwsoUJbGoivjg4CzB9ETgKx6QvqNmDrzPdkbDkx8b5x1",
  "key25": "3JZCquvFFSw1odyArHENg77fZnHFfBhULxkz75BS7w3Xkp5bo2Q5ecRKLLBe6bv1dGNCFEoKjN665dtvsKMvspR7",
  "key26": "3VT7VN9AohbVfcMtg4ukbLgUi4AYwcmUK1dxGkCWenk7ipaNEqGLRYTWgU3Y9K3yU2HMf22wgZ5X5ikxig6a7kV2"
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
