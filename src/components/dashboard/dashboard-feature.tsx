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
    "4KHox9fV9jSjERkCqYDRHzpX2cdMqh9VAxgXrsFfggQZhPkFNfMCAGCjYtKvk2TgSob8UU4Q5s8YFcrtbyDPs1kf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32xPBvt7hsjaY7naA6dyZyz3Pq3eeTZz7C9MRnfm42CRBH5hbkYKqCAUokVaL9KXztizdxGsbX2XQrEZTgZa5qcA",
  "key1": "fX9CufAz3ZUC6CTcM4mAMRyeEKBRFigyR1PocZTanEZ2UzjkbQm8UFCtjZqiThrJmoQgazzm98Q1xuJLy8ohpzG",
  "key2": "4HrcQA7NwoGpqGVRUGaynjHcj9ZuKCpLtnawPTPwm46i7VkcQP2Ca3HDNh98ACFWuhuBA9FmqndcEAYk62WPBoUc",
  "key3": "4VCEAEsuUJcAWB5aQPY5rwU1grPKGUAWbKXwnSABm8Y5CBGdSQQAeXGtucD9mcv9uGMaRsY7o3UZD5zpsT7fKU8f",
  "key4": "5mHhcPQ3cVPjy9zorWkY9R1KKrDh6rQyN97Q6zE7QSjAUtC2e2ZQLRRejeQtFerv7RAt6Dqf4RCxX4vG7LCuQ1Dn",
  "key5": "58FkgvUuuFY4GJha3KkzD3LkVHffomGzLuJTGkDCYnxpip18pefGBRQ4k3924pZsWmHVKm3vS58VHKnq6efXHW7u",
  "key6": "WZ337o2GJNBsrRtgQpbk8taK6JfpzTKGRhzGiybq983REPWbufCoX6xNw59ZkRBMEZFwmB97XXZd5KNUfh3ftdS",
  "key7": "49CA6AWw2M1JtsTYpNiE3XqxN9ihEE8amkWNVuBxwSdABCXxN7CYcDQdgP6d3Vs8fhzSFHkiT4DKV2a5835ehTWg",
  "key8": "3EmyVGSLEgVKchnJ7QkXuFkwf3oTnZhm4cmHLJiAqut7WCrF1VKRdL9v3QyUDAuMhviSMqXCYeAzhE7SUmGiJvxC",
  "key9": "GoikhfCn7KAYqwWg3WZHpEDLnv6DcqguX2ddN6eYgAJBCbbuNk8rnx4bDfxS8pDXx3KSwRA4GiYNhSfT7waXhv7",
  "key10": "4Kboq8V5NYZUfRDfkkdRkNPQUUpY3b5mAcnCZYju7XtwXrVN1qeZmPAqAGY5cjL95ZAzTBRoejfGsEGh2AtGBEHC",
  "key11": "5kQCBUz6pw2iJH5gsmBC8kmD6BvVEdSdq1HWXfFTRBUk9fpHKvFxXMTTY8c1YrqTJHFi8DwtVuiLYwTFbNBm6uy9",
  "key12": "29ZKAehQoqygx37bgxnnVKGFfjDNdf1mQvSKcjKuvwGCquCEsSZa3YyToaHvAs3QTC4kDXKYQR6uYLX8RdRm9JFY",
  "key13": "3tkSc5eJvcE7UDjCCCe98SPyuiG5ZcWy9VnxgCxsAoSiehzRr28Wi6NNXGfbjQadvTMJNu2rkNiAWMuguMKfnrz9",
  "key14": "3GURkfRWL2Ar27QLp5cPERPLdAa39TskNxz6LWrSSoa9541zdPywC459s2oDbZ5dymSdZfM2T6NbCNVrP5nwjyGC",
  "key15": "3QvDUTEocQUb8wbWAAr9cNVREJM2L6YwrqnKegqv2KEbcG562qAivc469yaF9TodMdFH1836rGJoqbaHXJ3ZVaH6",
  "key16": "GqzPRqGZ8RvpmTGGSQhdPSANgo9L2i23Fie1ZHDpcTgrvcQASh1YgSgewVqpBSgmxjKVwAEFy4Z9eR6HTfCDtcd",
  "key17": "4CNRwjeTvVbrpxX15f68q5a3zkCg1kXD1DfVfz9tqcXtkfco2fhrecbxUYaLw9CZ5u8Gaoto7sWKJM8ZGa64dBgP",
  "key18": "2Ram4Mn6KxBt1TitFCfGw8MJtgcuMbMRgaDNvWpiuWYHQFQzfNSFyimzU3AKFCTTi3SyudHjZLVMideW3pDUHReQ",
  "key19": "5oBnYim7yKYj1LqCNpX42ghjtgDa4zV1TrwgRubjm4ToenMC4U8Ek7hHvKDXvvodgnPBrW7wtQyNigmRPAWem2A1",
  "key20": "3tmT3Fw3ydz8gLSL4wC3iBGjDVZNidcDd4jw3hETvMjonT2uPEJhgGrX9GYUn7WBMAwbdjSvjb7SAUTC3XMu7kDL",
  "key21": "hyZQ6LfHU2ZzPSzDyawXWh9byH9UnKz2G4Tsu9D2nTgcqaWeZEy692EzHJP4C9y2o3f6Sks2jgq531quffSiZp1",
  "key22": "3mw53EepodPHWPVtBva4yBE8d8ckEEuWnttWzVUVJZgud5Nz7SsWKYyqnhbdRe3AdqPDukh4WaBpTRUe3x9Zxwkh",
  "key23": "57kJCAXh5F45dg7Ua5JuBC97UrQ7hy93CUUAmHu1JL7hLezpzfpZYFVrZCDg77Gb942yuJCMqksvjjK7zg3gQRmV",
  "key24": "66BAsSfViqWdtR7XkdkhFPWRosdYmjdufRAvgidBeNFPV612Gkk2VorG21NSDRPRy15QEfDHXF98tEF8BXwJ27U4",
  "key25": "5s66Wn3CX1DdK4GSuzy8KVC79bZMZ4DqeTkwz5qgkU7DAqfLgy2Za8AjUJxVEpkMSbwoLtFv53ESX67s9V6SQzTD",
  "key26": "5NRxhmUpHuD9P7texeE8SWwi4prLi9TLN4KXJuzKSX6qvrxpiWEMB3bb8vdkzq11widMiDgGT5S4DWP4HuvP1inX",
  "key27": "kxrAqFTUZMXcK95gVgzfLtqsGNpcaVyPhju9mDzr7iQRGvYkwiothXEdXvvUjYtb7ijqvjPaXw4DJKqxsgAzwU6",
  "key28": "2uG3RNJ7W3ctw2QcwBvbARGL9bCBAq6nAGiLo2qsaJkBhmPi7ves267NhqJ4XiSDBWbZHPnhyYFTU2Z92NZjBb2F",
  "key29": "4vHgUeZZPNnMVA9MbkBbgpp44roJA1CRv362NCz2qkJZLwLXjKRyPY1vmGY3G59Us9VszEiSJf7hX8HsmwyUK9zQ",
  "key30": "28RiT8dqZx91aZn5P4rt2TRbtTXdxYgLquSSf3yqCLrFi369cwsk4QuHxmWZJrF8aMTm9oFgocvBq24BDvfLXmWY",
  "key31": "hvdqyTSacGsmme1R2NQSzfuxWfoTCERzhizrU1AicChcSrc5ghB8BY1afgwgSkNsEtCCW3UT2bw5kBbDE7kc6Dj",
  "key32": "2QcMeMxWodeQFFXs7xvDm1YNs3NXM8KMu9PiBj5wUFcekCkMVG9aTbxABEvUXPfifCucrVMepPUw1aDZ9zt6qrpw",
  "key33": "4gW1kEYiiKjgsGoFB1roZyz7HMoLRBJZg6Yx5uX1qUxKK5koxrxWyxiES2jw4PadppfYChkEM5286TCHWZgUwxcw",
  "key34": "4fpJEA1WaPn3igNSYJu2azyF8ctHYcztt18rCGMv1RV7SS1wzLSXT4ghjrYgTQYB2kmSVHmjUirHdhfeGvhgWBH1",
  "key35": "3EwbadAwaxbPg3dJwNKpnEqFyYqNmj1JcvKTHsM8ZCnmLJYDu4EgXUBrZAnxYbHq7bkkpKdyVQuwjxWGRMJWKhdv",
  "key36": "7ASZMMwv5n4puvduWyPcAmMxnjy9iRJoEzBH1WwfntdPYuo1MPthfjr7EM2D8FcvUKgPUnPbYfCVUTKFdiXSpNd",
  "key37": "5c8dRo3pkzqsxcxzwTc4yDxQ7JgcdN4vxftYaUvjJHzvuEx6PGH2QPqfqjKSqxXua9WYCqMeLaa8UbLx6QoenMGp",
  "key38": "5oHE9qkTRnRxJAfN2MbqG6N6vo9AHbzRXSgLriqUe67HHPQQ8hhsPfBgnKqdr6nyT31Pb53i4SeVo3qPEM9zddf2"
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
