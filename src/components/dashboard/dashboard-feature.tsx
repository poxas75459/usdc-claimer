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
    "48w99RD1WAeD2ZFgqe6npta9qHvZ61ea21VDzPKBoNbH2vM46mFTesbQn5pjso2uMzDkSeGJMF8iUFDxcHFHYKj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZVoWSVmNi8Ay9HYSf2kZX2hPPdXZ9YVWfbwLe1gBorxQni1zBV7UL9n3L9akQEhQAEp4HV4bsZqcyr1aGvJDh8d",
  "key1": "4eNfZXQDvFpBvAYAMkvCj5GfnRdJFPHENrjUTpqgHchVvrTB7AhhMFr67yjKB7nY5D1U9iR7dv4Epjp8fpRbr16y",
  "key2": "3vpfahFPUF7iZce6GqnrFhFuhMA5bT3V549TgkL3BwRiMrbnQP59FkAexsA1Tq5bu8VUh6EM92JTXHXviV2QAxBG",
  "key3": "5tf1vuc8sgKQThjM4xycb7Cm64VXUGXtdj9pPfyeFDE7G9jXLw3WB8PCqwEsJBFJbWxkYnQ2reU3qerKVVVRspGB",
  "key4": "5bECK9zKRVmTHg6br9HT9iBRo2WpEBJj9Yoii54uGfEvrN3gDs1NM3FAVuftEXCwZEVWD8JzEvLJV9hmVXydDADd",
  "key5": "4r3ntsMHRKCt38ZVzK47hu58sUUyinvEL2jcdAJyP2XfKufkCZs7sHX3g1BnsahcsDc2xJr4madQQGjZcKj51Uy3",
  "key6": "2RjKJYiv7yRNAnqf6suV5q3SGgXXRwkJkDfVB5h7V2cM71bSXszqJ7aHvFUKtX5hXw9bZpKzx8BCrgD86PtB79Ag",
  "key7": "3SW18JXkd8cZvKYFTJfVab6Q2sNiNrJX76HWLiXEnhGRkjYPnE79Si4pYFMiW9u1e9kJQEV85LLPZBKW3FBUfHQh",
  "key8": "2bgd1Lbu5AvKnHUk7nG5mvRcAQRznkZkrPRC5vBh2HtPHDZKhjtDGyRjNgopTPCW9fynHH4R1qXdBmcg3w7EufMa",
  "key9": "StW9yJQDs2i9VCvy3HXbcnFWtJVejo59kDmErGy8LTaxEQRtiSD6zmX1vRmw5WSJG8QFm8wx8nFZWaZgY3TvyU8",
  "key10": "4SQd4qMA5Wi4MH81tiUe2u55b9BNWvgsMZXqcxAqVgM1YDhzGiNDyuPMiDCRmiUVXCchjd6P2Aisdck74q2ncvH5",
  "key11": "2DVhMGC214d8GDnWfQQ5mJKtLgA6GWokNXzk81wMBp6Zzk1FFart4tVLkzjJ8Bk8SAwBLtyN5nLCJ2NegJ2j4wmn",
  "key12": "5pcmbfqBroRFprzYyhogAZdsseRhUN5epiym2u6q19suLBgKP5QbDMxusy2hqAKMVyQgJZeqPK65Xas1QzC72xVN",
  "key13": "XDTLPTbt9j2KjMnnEuZ2ofqUEDGHGgz3Rz4AB2Dx535CffmSyEhiNZttvLv3gvCsBm7EeakGQ7jftjrX44qS9ha",
  "key14": "36FRxComfdiNnBabx3J58TeeEtiSJ7cdr7ueNES5RV99xGwYxTpynjyg1h6G9eKKdqUKm7MVsxWeVAKw3mHG7Dxz",
  "key15": "u6t5G1vHi8Ad7n9pw9YXNRahyd14kWYUvBuqqK1cS8qxiTDNee1c6ycBxwnyGLfURCBkTz5K3r8dXSS7BByNboB",
  "key16": "3DngD6P6WphmZdaW6cbxNGdWMQ8yoYG3CM4uSpii5YfmQfX5krNcTcYfr3LF3m2M4pHD8xyqih1bpc7Zfab15mQQ",
  "key17": "4YpqSax7nDG8UmPieTSPahDAoYypuECydFM1uuFBTdve7xXZ2CZr7BzfeHd1q4rjokSopBnTQ7PeCgGPuhAS2uGQ",
  "key18": "ENqdciW2LC2sW6NnGeGpwPHSo8k2SKmveAPaSKP7P7rBqCWkUeUQ4sbQSA7y55yqxRPwjrPnGmyeLUmZWFPH2G5",
  "key19": "3knRGPT2isewaASfAHZvmMkyWNLe6HpGqvCq8iAiGE1fNrLNez2xfr7qw2GfNE2XCYDMPAVRrtpXpfpLRny9eBtH",
  "key20": "3NNpi53FnTAnJ8tg56UxasjbWvGU4ch7R3f2GvgsXQXLH6PJR2832LdgTwbXRTDCEvLc6XtvSvdosZEfwd6nirPU",
  "key21": "mzsHjFPMy3zvkf9zRZtwfDggWmRyGWhqsDRKMSQffkSYbhmynRWZrJMHDn4n1xTLmAQqHoim4nDW8cBetRFTxFk",
  "key22": "3zxTpnNwDkpnxxjcRjfjWnUQ5ZhMvZCJWdfFfMYnsNaH2BTHfbfcVw1dK39wpn566jiqCaq4dv4scFkogjWQEKJ4",
  "key23": "2fay7fT7Z7P4CTKCp8mgKWQAfxJvJvrJtf5nzAsSytPDCVRdQa6VapzRrX66pa9t7RbSWomewX5Qx1pYoX95Evj1",
  "key24": "4maw9Kz5TX2cP9EmDxLRRt6v1a2CzKRbHJsTcDKUzQej2F7Y7HTJpj42b5bWwq3x6C6P3CNFGCt5Z5foDtP6iENp",
  "key25": "2eZ9S8BCD22N7H4Ji9SipiW2vtWs1H8a3HY2YzzoyJg2inmRjMd3D4yLN13irKgYSWm3m53L4vA1UjynPJ1gWyX5",
  "key26": "61UfKHKwGF8151LAPiXX384vYaSTF5gvA6NfkEwTe2yTaGTfbRw2W9Cnre1Pe36tXLpmf1WZjAtSUCWwERevgby3"
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
