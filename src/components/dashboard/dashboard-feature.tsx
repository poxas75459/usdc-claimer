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
    "8TXGx5FMc6jf9t4zjirtAK1ZWCqCQ9SVsLSbp7ngonX48jNMwwVrYT96Xiyho9aPNsP5u6mSsfoh6TSJ9HTr38Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mjw18UBo5jbPZeYFZNYCyrm264pPDkyzPJV6WAdJ8DmdXv3XtbzY6LcRm57FN8rWbqSmYmDMV4qAE2kUjaxVyVX",
  "key1": "36JWryv61fNcfQX35kobXCVcZinvWz6R943vT1Rz9swBfPoA94AwVUsVR66NV2hWU66CfP3QRRyVottCDLSrfp2W",
  "key2": "3m4Nb62C71nvH5qEnRyRuq4Dz591uimkRvAvot3zmBRA9gq7a5EdhkapKxgQp6URq3sauxRRQqcm1T4bAqK67Fri",
  "key3": "2zdchDS641TqYgen9GTS2ucWznhoJSZ7yr5GP6vj8yCnR6BarUgbh2WvmC21k7LypXKgsyfiEzsD2aqvXoJgMset",
  "key4": "5piEXQmnMDn75voJjjRYdZbedLPPeSyrV4WjaNAKk5WPRAAWGkNoqFx1D9yuKNt7dxfcsxQk29xiY8pn4AGDoFPr",
  "key5": "35NKyW4gmnDMDnpyc6z45aFqGvHU6eye3B4ZpxgWHdGtsAQV26ZAn63EHXF3fupUdeRJNRJasVpiPgYJkSqPtWZP",
  "key6": "5GxdvJRSCybKH3TiYgLK37UgcTZCijffVHXZ2isfoMyqQZc6JAHYUjs1zN18rar5MAP5GuRYKpzaEQaGy5Zpu24M",
  "key7": "4YuDQw2WfXfRMaBYdXHCXXsGAcL8gpZEsgfuGYPSGvoYRYtejceqJ3kyRLXUxYyGVV3sbnENnopDLNUK3hDztyE",
  "key8": "4K7YhHQEJJWXVE16Uqu88gZDqdPDuPeVC3bfASDo1hrke4ZnRhp146PPnhZbW8Xcu1amKXQQC3t5THDDPAAPZcQp",
  "key9": "4tZPrJLFuh84PjJAPhz3rbd4go4kxaviNWUFD6kdUqkExbz4FimrupEAo1decSff2wvexy33RVnC9BWdCcGgQzi4",
  "key10": "3Lzwa2dw1GvnH6T4kkExfVRsZVH52v9NYpBAU3GsAJGqWGB37WHsT5wLbsMPZLTipH2uCPctn3R3cQxVa6SoAJKM",
  "key11": "Bf3wbCJyVGWkAsfTAW3vZdGWmL6VXjnYcso28yMaXKmStHvba2o8rgbTJqfiJbWZ7vVVqY61KUwFFowjrdbWqtQ",
  "key12": "4jvySb5AMARCEDJ4n9nbJgFLcDbPxUcuK4sNELjjnBdzq9EJNF12LoNoPHasu4MjAD6BYoiECYLZ56bQ45m82my1",
  "key13": "2Foddqgzji2naY4uuWVb3GCtfMm3F8QH4u5Z6VRndqX8omLuAZppdsuc7JFBVDpjc1MW2P4xoXJKbTnwvWAnV8hL",
  "key14": "55cTA45Drfc2J5nRJa2Mw3bB5fQpLUuzLCzrQQj6rapSQFhcCyDtihujNGiUGKgzxmM38v9tHP21GR4pktR2c49t",
  "key15": "2SiuWUV1t93LCr6BNxtWWzJCBjvqRCi8Ck5qdhj4MrR9diyMy3eCeuLPNZTpd5BCtsMxK5gy1HQt3CZgwhMyCYoh",
  "key16": "4f8hAVq9x2PRZP9YiGR7WcR3hRqAkh1SqfAdhPQzZK236V1p88TQEFVFKFBRDuG3UuE8ZWhcgmqH9kbVLAui1Ecx",
  "key17": "4rgEGggQHYcPJCdENrmpqyF6FUDtNmuPc18M2KfyZXsehwmkmZ7A29RNK92PW76PBWjxnagJejV1SZtxqjdBQDy1",
  "key18": "5DTdLzJ7KHsh8RXhc877cFyjVxNfMbtRPdoHmo2tK9gt9U3S2hHDkC2CKydzSSFTo5rctpr7fzTje3CnAZ53JDX6",
  "key19": "eJEBCPkVFMkgBznQosH78EVzNiAw1EZ7w7hnbFTTNKAHpnXr8TKXQSCTjrh6YSebPzjDWyjnSQnhLmVJxg6hrm5",
  "key20": "2otrkDo8s7iFUgYWRn2GCZF1zn8rtSyZ94h6ujjvU1FaMtvLi5okj5t5HV6fttAFS3Cx2bDZtJPXSPTgSUTs8aX9",
  "key21": "3xoZQwX9oyXD1uN5MtFTe1jNJba9kPJMARaTtmGbqfBusmpQxaqQoN3ByjYes6Pv1xDutKEvtfZqJNbjNvedE729",
  "key22": "2E33cYrk3S1ruJx5xRhfRoppjv5wiBCYd44YTxekM81D4Y8oFeC78E4BmSnU9F4qLb4pY5kuaD9yVCk72PAhposD",
  "key23": "HyTmthZKV6ocXeWFRGUo7wLLWRZ3t2N5peZbxTKVPUPZsC47uZEcTam9kjLQJKUx8V1Ge6v7tWefqNLXCuEcCTR",
  "key24": "23z41Uc4gdUWfymo1iUAPBCc2WKVCtomRE2KxMo1koVCg3T8Gov86wNZ73Jw8ZU2yYdxGWWJMzSq7VhkWofuWd15",
  "key25": "3mazNnf7r4EZ9hvhLr9pA4ceMuheSJiGSjzairhXUWQK3Qk7Ygh7hYj6v7EjLbRGDuHz2cTqXAqED8Y7QM24oUyY",
  "key26": "3DxrGyQAsig3oKSU1XjCjHmCJrj5wEzJdomjXtW2p9qTtUHdSboY6J9AQQpve47c5yXa8BGfv9Q1y797gFvQyEPF",
  "key27": "5DWavka6qSQ74D8bPzkK8LdrVvZYtqtviRAPzrHUWhQiDFibHhwfYxHdC4UTdzw3pKTB6cGQipwDXuKogC6dWW9f",
  "key28": "66fUk7B5iVKxPY3oG9xNBkKUppw4YrDDESFcr756DeRyq6HrHecjzWnyCYxm98eGXFmc6BZjmCyhzSegfpmHdeGU",
  "key29": "2dhEKiJLMcE9ZQrE6APKzhcu7Qk5CxBecVt2SHwNXFMM9ZZirtaxBUNV8gxKtvXYYajvHAHjXHNRSsVt5CvVaopL",
  "key30": "3xwXAvfXfDTp8T3kkTqdMBHSn62QyDXcCWAqXSE6T8Pp8LaQ34SSA67d8hzbKqULdvBQeTde6K7jS8gedKAzMr3c"
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
