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
    "3wMQW3FRshnKjfqUFr8eGYzDRaMKeRPYTQmhZmq3FBbFrRg7zwkKK4h8VwiTxju9zDiaegk2b1P8r6yx5kZbDEnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PXurHU6mTSf2NGAHruyaqeiN6oXgVDE99tUWaj58yaTWHGD4514qXfx5wWaPi1YJQVYhJo96KbFHnF6i4aSmimH",
  "key1": "4NRLwtTVJs7dxzxEjTrWFT245hYT25K9uacNNKtnDhLAvJZZHyBnoYXAsHLxAPyKepioE1E4ftE7Q8LNyzZvzafG",
  "key2": "2RXZSaeDoNcZmSYrZ8HjX5BDgq93rfBJEx6eVf5EsbJBZaAgZVMoSS2rvefujyxsvPsThgPBbQq6WMzqRbf577UT",
  "key3": "2GCdmCFm8XCa36yQU8EXfxDtXrv4C1Z4ffUuDgNZy2fEnWFFoPxphWmuSrGLgLLbWL6H76VKhwhmJxcetZwF7q8c",
  "key4": "42bDrUDWm5SFNeReixvGNXqJQnS8b8QFzN133MtFGdYZpWRfyQFnnSMr3gSPZ66MDdVsAqr3VEjTECWBVQRdbjbq",
  "key5": "3iGYSC7smQvxUmduaR4oSeNNwTuuZM9h4vEGHMcHHKTu98KDCUrWia4mGy9DRNWi2are4Y7TUq7zqdhNTUo63XC",
  "key6": "WGr5sHejETryTTQwUEo4LqWGnbrMeoF9rFPyGsCZXm2goGB6UXFMfQvbLWjqga4FFtx685q1DobDhpzT9TDwKF4",
  "key7": "4Qiyfyej5Fuh2eDHWcRsRSi4uxzbFzVZZGdhQbBcEd69xU4pirMPq2S5Useji2iXPHqCVCmodMnPSm19c24FB5Cg",
  "key8": "4f5Dd5XBRcsJZ1Dkvsv6DXu8TxS2w4vHFY3Ynu6SLPtr6pqXKeSLhX8oti1TupapHKK1chhWGi6uZDTqGLE9Ui1d",
  "key9": "9t62Sn7FSRLdkNLRsZ8DeXBn9kxW7KzYc8kmtMTC7cj5PhgUF1piVns7b7Y8Qot1XZZuVPkUYWqScqgvDwpj4ph",
  "key10": "voNb2fKdzmHD8qqZWsruakNonuNXTLSd5x7hs4vxKXcAsu9j2XF3u4hSRyyiZaxDfe7u4mWJezHfMvMjmo2vg7L",
  "key11": "krsvZ3R5ovVQttGCGCuQFs8VrxqdscrF4EqHx9bWriQ3Ffb769NDaqUs5HCimwYAKKfuqhMSBXZe5dn2jGiqBBz",
  "key12": "5XJzdMjdZcMrxjcBngWDjbQ7EMLWPZ7jtwyeanTs1Fowx92UDUv7k7KLEhsP3kzpX1ZtbeC5iijfkBkKSV1PrhBL",
  "key13": "5QMxjx1pSHHmHRFgWsZW6KXSEdG4kDtBvJhUM6bqM36dEaq7LbsTyBzVbeHkXiSCHeyRTKoYhMhLkfPayiN12iRE",
  "key14": "uoT9jhTsXA7SxfH7ERZwqxfRxNcftoxa5PccH8iqVj6xCetVtmpEffXC8Cjk6uzZrNVFLu1Kg5oogQ2YATecThy",
  "key15": "sDxEhLqroGXFgAvtuRDUg9VFoBZ6CteXFbHoU1kYhT6Y87VtunJ7JqqZcPF4TSohnv4EpGinmVKMujCLNAoQEWc",
  "key16": "3xY9NLYfQUFHy2Pp53NX5kpKngou7T6CgKvFwRV6tfLZYgcm5yDQBEVe5X5bmLzZte4barwbS8ZvLgabxciXhvsu",
  "key17": "4iNhc4mrBgzW34FMv2jgGdvDH2GA6Qyd3XhbKrhbWFEHhXQG5KDXfFWrWANaqsRbpPC4T5PSmMY4cxK1bjU3LjSe",
  "key18": "4ZCHJXsM4RuARFaQioa6XakGap3tdTuDXMdeA2pTbmvn68ZhBS2w7fpCpzRywCMdMiAQrzYccwkz7XgutEjpyQEL",
  "key19": "4s1SaZFZyTqE7YRcuA1Lvv4S1ojj1SFKHvyRNKDAVPhJcCXJb3FucrSF8yEJYRzV45BEqVFkjLVwghTu1qh6pULT",
  "key20": "2NXHuS62CvKVmnEDk28J4R8vvXDHAStuLeaqYKpTcXVREwhbWXaqvWN5sPbuBcRzkxkR9AQGcLnEya8tiJfrZ9TC",
  "key21": "q1iYixmBcDoVumGhNd2EkGeNxUdhyioq2SVUFQSQ5u9YafLWceCBZzWqLbEDmsKe5pw3y9G7KGf7RdJ1VsJdWZF",
  "key22": "2wH4bxSH45FHsGTA2G5KZj8UffY2rG9mjNf76vExsv5LGDGCmpXxqjmJWmfQwjdUAvkbmwW7sPjgdYNkXCFuzpuj",
  "key23": "45WKpWjdANzFAjnQMSZWtFUB1SJUaWxsMgSnF2pyKXfu8QhThbpjZJZio3zMHvhXEiAbuVd8LBxRg6Dxtsw3eyUG",
  "key24": "4ppKBTRNNXG8P9fmNdAyVquqFCz4sLfakdcGbeA1DMbbQXfEeaL6inqyZK7QMwUBybrJ2gxWguddsehrVsuK1Fne",
  "key25": "2wkHpUCjDgpPMPVgMQW5dzD3t1QzXVx2QGmLUYCUYuRYKXrus2e2WXhtnJZRugx2BgaMFUcBdV5jonXngX9Ch1Nz",
  "key26": "2zXCSDcBcX5o2e6y1sVzab9wN2djT4QpnBTHiNrs3hAPTt2F35XitL5MpqGUPu4bxh3E9ezdpcswZDndTjkTbRSk",
  "key27": "57XXrvHquYFeWda25JQWoofYujK41mjwviAMgoqHVLuPh2kFW85vZe5mnhUfDpZbGw87GKVuwvszXkdRJhkjiXm5",
  "key28": "6iVyeJbh27oU1TFSe765EfuEXHS8L3LWKNqaJHJpYNnWTFG7SUCZxFif55d5smQ2KVSiwW6mNcjGgQ3voWu5zf7",
  "key29": "2FPhtxntJwmt3DMFS1ASempATHgEc5YBc7sAi61GhUyun6P9HHKZx2LDbfUXPJwwBGMEFsdx9xFkJruVoQ4HHqcM",
  "key30": "3b3NL7L9rciSBMYkqyMGuZVYwNwG2yue7MTNx3ExaSK57aPoMH74eFDtLgRVxT2sFzxvpWqcd2yWsrDUx3rWnwv7",
  "key31": "6FU2QWxgBNLgj51AUNfUYgVdrBqWd52pD7GDGjfGc2HS57x651dpgEitGSmofuEcArxYPt6bqf8Fre7aysoZWxP"
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
