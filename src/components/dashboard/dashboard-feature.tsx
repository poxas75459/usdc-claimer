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
    "4zVPdaiy7LHsLFhTdUzWiYYSy6n9aHNfzCDwr7rkfnKGhK8XAh3JGofFLPuHK8bNWdZ8R6YfJWiW7GxRbtuvAEs6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N4Bxnef7Gi3K5Q8jiAHPAhrZRzyBLUzasPULnwUzarGEqboTyapnUrG3TDrp64iHnM2kCmYDtgmXZpXEvxWnJvh",
  "key1": "52kPP7jyWbhsJQM43Ed3UEB4mY4sGQVvj3d218zaF1TPBN8fDjiLFSdw4Dx2hWk5dmf9kJyEusewzAY7cop2pNwV",
  "key2": "23o7k39k9eXyTzpLCx3qQ5QH5Zn43NVvW3wpdgidv46C2VcY3rGszkMuDde9vEC8tNDfVexyf9NebnXPZvjfR4QH",
  "key3": "5kwQNRp1p178oPNGLvAjSsRBTGxwuY9c52b1aTi6u7K41hAMPsJsGv5JMvh2pRNzt38MCQbv6CU863AoBSyveFGk",
  "key4": "2aYAKvgQCvJvJKQ3RVRKCXesYksvCDn2bXEmf4XaLMyRJE4a4thXJoSnTwGBPcoP6TLu7kJwPESTvM5sBDvB6ztQ",
  "key5": "2Mc96ZVNSWmk5nBvfgYQVKiMZjfM7Cv8yLDoTSojGxadsNRYB7zM89UrgJnNWDSgwfG2cuhzVDBnTm8kCSgz9UGV",
  "key6": "3Ly8jcq3vbyQx4V4Cu7UDJjdetuaCUMDiU9MUpDbN77bykj2nE8NMN2eNK42ovj1AEGUNt7nP2DFGCQZACKykhtT",
  "key7": "dH9estGEE6zwspps57zZF5fErUqU3kdWcASSWJs2LrJwvbEpBtdp7kH5hQqh1uKbTvdw8DSSkx4V12ev7wgHRAW",
  "key8": "2G3DLvmAD9TeASiLyBaxkewWnGGvh6wSSF2QswU5b2nFk1SWQzRfL6TsyyHoHDS5qxHWpsDsLXCn3z2khnJCzqx3",
  "key9": "3Q6WrGeG4pw61ju7KUTFjKWxG4h5v9hCyvdFgfqkHwJXryHv4UrVQumULULp94Q6vikYUqHndD6w9AmWHU8GLBcL",
  "key10": "2Xci3d8YALFPEYtqeuTwrFJFUVvSZhxknAzcSF2X2WhfGf1j4cchwfUXuSis7khFda6s489cC1j2nuMCUBFaAAfC",
  "key11": "4tdXJNmg3SCQ3zYPoyQMBeKMGCMAPFcdCmGZKKK7yr7LtwWSRPUJuDmyutQ6iPjvEyGM6SSzBWe3qMY2URNdTeu2",
  "key12": "3moruXGUA2J4qJshHu4Qw4H8iVHuiRGv88WW45gPm5FNFcxCQF3KbBvSgH9oYecB63DqKFUAKZu9RGUrQVCY8Puq",
  "key13": "3RdP7HdJ7mi4YgTjYbwvQrEc6yk1qQFSmJkEP3Y2otWEEvjWd39NR2VN1ybEDupK9sdwjmPYXUUL6azFeT7Ywjg3",
  "key14": "2e3sBXBLDogEDB5CdRmnynjE9UaNonpFYcphguooZKnjT7GD551zAuEh2KFb83tRgJHwBn2MsY4xCFFv4GCUbufy",
  "key15": "67pkiXd6bFj2u76mo87CeGLN6yZ3cqriRiq4S5VPfiwp9GJfozVb9pgtNVti2ueiYQNtqmKAkuFq8PEwgCfaNBay",
  "key16": "5Qyvq3bwBjrnPiB8j4uUUaiQW84FLfZzCqKNSv6azMTVQsrRdCr5fB5B99t2gmmCd3rjr32YBEwEuut3FJjgr2q",
  "key17": "5i4FdJFZZFSHXTEdanryW2LvB9GVDfFFs55yrmX7WtyHCmHH2GHSUf6EvfEfwiYg6Tcm7mbrWWvvYjko9rnVzQpq",
  "key18": "4qLDu3A3YkpnCJuoPh4dYJy1U7bZaWNhMxVcot6Zq4RaS3qnaosQnM1JZLz5qQ9f2JwVYzzsSAPLatFWvzgmCZNo",
  "key19": "4iwd197A4qfZtkN4aZHBEh2c1EuaZKz2N4D5bCoBxFZWnqtSxLzmTuCH5oTCWusNeSfsEEZyHtM4LaXeEJJoBbBN",
  "key20": "4Up8GFdmDHwC1sLnct2uFo25tZLUGytoe5iss7o5kJmekqfuaduHaKgofS7PNt35kap5qA7vkNXJyjw2DAwHThVY",
  "key21": "5Qqnzt1Md5uD3RacMWZBdVMXTYp7XF32UPHQ93cLVFRanhEiNXEu8VcVCKW4aNSfAZiA4uNzUm2SMoHg2wtg8224",
  "key22": "PPPXHhCKHyVUMwoQovhyiMZtsNdrN36fV6u1uYmUX3E8qYb5P7GkPtMyufyMxHuE4yovMPBM2fMW74StDyoDmjy",
  "key23": "65YiakfbwsQiN8hRKNi8DLRRYwByWQ6r7caw8rysXCSid584MHzhSYD4WnyMUnyZD5K4MmFuVLovtGZ14KVLsETq",
  "key24": "3mXSnZPoFBPnTYgykFCKiDLXVqkeC8GoVUkxy6eq7hJN8r2X5VbqViBNxYNYKoQogN3xqQPcrCqfRjTMV8rrmEjV",
  "key25": "3KknwB39C6XqaNSpYr9Vu3RKRTeY7z2tNGLZrVs6RbWQBLeokwzwjKQZHaESxJvFG5sDZPdHEL8bMCr8jxo69dmU",
  "key26": "5tvLTEyq8uTkN9TMcVAtqQ5pCYhMHD89nnTPcBgyciQdoaeCVMS5TDypWg7SLAtuJTSAEUAp9hMnbMrmt19tjJXG",
  "key27": "5dkqPm8KBtTQtnkDA7aqMobkzGHAVmnTJfodEYpXwKdKPaQ8GnRHhk3nKxmLao39YzqhQupUHJ5X8Q1dKdwuP3VF",
  "key28": "2qgKFWkqfRDiMqgQEFBck9F1L2E8C4YFmDuw8zmLAe8tVMSmRgQJibY9hYSYK3Z49eNu7irvRYaLsca8N2w86xRm",
  "key29": "2AxA9LG8ZfSndFyCsWf1Hk75NAAfXq22K8mg3jR3E5oAovAnhn6N9f1Ns5Jfq25UwT9qhJxNy9a5G4EDhiKr1cP3",
  "key30": "2L8zQu8dFAFtY37aQ62gnTFB4HfbETxL8bFuprjKycf3eEE6Q6nAp3hwPzKJSYteLPCBjgBkhXPWLkxW8JM6oAse",
  "key31": "trHdjpcTDwvdbtDFEdERRWzxXBh2iUibR7UrERs2CLVtHYEK7z4ZVCGBeShGfPUkcoVHFEQW66HZTR7PeNAsK41",
  "key32": "4gLnbeg1eyW9MmSCdynQY6JecGFo8Tpf5hRkKsgLGo5eXyh8BKX8xKaKqSBDWzC8HtRGaHSYjMhXLa3k9XQWkNvC",
  "key33": "4omMfZ1NHeCxb2NM4mmtes9A7QKnzuRb2GeSJp3NBbSwxpcqhwz5jija5Nwm71mPVj72NWkXmcbmT3MEVmu4t9qq",
  "key34": "dWBv97mCrk9y5TatSjm5YzP2EUiyKuG86zLYvRN2Vx95Pmqf523XeDeU9ttFuaKVGZ3MSTNvK9WsxLVMSxKkfiK",
  "key35": "RbhEA5fB3995PMFBnqWhuH9CJiHaMRZF6hsbr647wQkwBosSA1bCQbnT9weRGinv8kEtBjcc6Fo7JNqUToj5ezM",
  "key36": "apNRo28CTmgNpdk1dHE7ckSnNMC5qEQu72wkzLJ2L7CSTEi2W9ng9DswCMpyBAnmNFPEE2zegNTshztvmyJ51YM",
  "key37": "3gUTwdZxr2sEhtAqucjQq5Yp2KxrYTMwC3knKFwA9tMonaXEhk3pag1g7xh7RuPyHsEDc5bDn1AcCzchAdJNmeEf",
  "key38": "ivXVmqTyTLiWhHBjdzWm22jKsLb8HZ6ERdmbT7Wo3LXpLQUAirG2hwzfVAYPX215ZsaynrxTnFFzk9MB7uXrjHf",
  "key39": "2DU1bsxKTW6Yau1xUgb7WKqPSzHPQ6RERNo4XBiCMt4TyeCotyZbLhVemRKBucJ2L793krBo56LsfDcM4CibXmgx"
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
