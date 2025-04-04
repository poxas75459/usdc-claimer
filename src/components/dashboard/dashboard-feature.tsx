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
    "56i7bgxX9kTdxUGMpjjVRJ76zNZdcfuzTXowLhCYmw6sLDvxCHzN21drTW3vP4K1h8uZ24h2unukRwKxsw8CW12B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62QC6xBb7f16vmhYccg7DTm5sam8CcBuqYzrU8oVTPoh8dhkxNNGZL1Y63gXiutV5himFzpKggcWXjnRofhLkJyf",
  "key1": "5SxY1U24ydV9BCPbEpeMy8QSXYWRdXdiDTrQNLwHNc2DCxB97PKFvuofH82LLdkeuHt6TAsXhCLQQ1hqW7Mkt2v9",
  "key2": "asqfpSv6keCZjKXy6bExRjuH7aK6RjDBR1Ke9Y6RehSmk6jXXZ2Aor74uhVZ2pJW2D9yKJsFmwngRSCaHuRvutm",
  "key3": "2GLkLMVU29RE62fAtqbFsuWoGPHgpEGKetRNUj6xTMVLYJWUAS2EH7GqfRASETFgg7ZcfwjUNdnxxoZG8h1iZgwZ",
  "key4": "27CD2zScg3hTbtBsMRT5qFoLp4kAMZViWV2nGmZgnu4tyMmaasNsnGWxDHGYcXGSxhVQr8E8JCN9WLN36aceowQQ",
  "key5": "2jhntGWtJiU3wj4qrpBAx8v7Fv2UeQo5i3Ay63YPcoWzUTC1gjU8wj61qe4CzpRucEhwxa4ThMG8oMQCj5B9qvcX",
  "key6": "epUbdF1ymX9dprD8MevKrGr2MYLVPRJGBMVAVp2LWerf96mMUgnAD2u5krNUpyhmrmQurwyvFG4EnkNdnSanzks",
  "key7": "5qNCPSZTpZHBGtSKC6WeNmGGd4ATzfWNAz9UZ8xrME2SjumHVLpvhPFrn6Bi5vn38rgkxx4j9pZGHEwdzi63vuRz",
  "key8": "4rnyce5JRTHyS871M6o9MkDGJdhK5zPCYCMj1kPjwxH5V8RQeTNWfSaThbvLZU8EWVQwVCTUtyJotKFK3qGqqEvx",
  "key9": "35zv7sPnF8hkr5ZVik98nJVb27LqDEqo2uYne2pimysN1dJWSJLFU21tbKBiwhQqeQF58aRRfMPYfWeKjRdQxguE",
  "key10": "3ejQyVi2cSX2hUS9FLpzk71CXsub1RfFJEQ8DEQfjKzGp1jAiGGiKdFtWnAEC9iykayFeL32GiVc5SUuSdeofQx5",
  "key11": "4gMDQ4xmjJsmiEWtkidFsZBuRjidpSXCcCmt3bkTcTFoU6QGeAAZ1Vu1JULAvzZhtc97tcc925ueea4Ri73nXPV1",
  "key12": "E6orpHwMmrPU3gppZqfwgBD3dRMbbbqYF3JoxrnHSGzNhuvnkbrXKq4NF7xwoBrFhKAidmq7MwUExzQrEEmygMq",
  "key13": "2PsWjdK8pT8PHXVkufYkyKHYw8t7XepPjHFE3kFUyyeLuRkLKkJNKq2e8Knj8bLwAEgxCuAi1CEXX2sr7Wtt8DC6",
  "key14": "326TjnWbeb5GmMZF3pGrW8CYDPnVwg4EU2g4PuXWLDVhTC61hkufLP5LadR4hZ5PJVhwXBDTMk6jBDfGdzEYNW1z",
  "key15": "4cPi6tR2SCEA9wUR3MTCXjeTNicasts6LEK2TNnLPknqRz657NCeeZ5XQnks1XJVu6mNaEB2sCeKTuuD91cBAqbm",
  "key16": "4CEPL5BUPL5z5uaQeXwdnVoWRBpNc4ok71yisc4ZJZr2dvjHtxxTPpn86zMewTCoVWiQtfXihPwYRh4cdAW2BXsX",
  "key17": "L5jCqz42T7TULhTvT6o14yDo1JKGJYqq6ES1JFo27gMabdZhnJdtX7KfY49yymEnq5dAP3c1uajar5SFzj14vJv",
  "key18": "tNMN8z4CozcrUmvC9Fjj1GhLwbWw3kzsJWmsymjKgDYWQPVLFXqeBBXvwPo8eheKV9g96T1To7V3p9dRhf7p8C3",
  "key19": "53HYSEiE5tvSpfQKcWBP7zszGgfp4QWHKMqwbpGeVYuqDWJ5sRBwCgooidzaLAGuqHd6q46qSptjnKgfZ1bA48NK",
  "key20": "2pSRFn1Mz7RGrmJDqGPoQFrbJKZLm6wgPRNU9NaNRBF5VDQgWVnPwfE3oykStj1WT4yByQbTZbx5GreaYprVRde9",
  "key21": "27aP5PFBMZxqKFK11stxXewJ3NaWRfDn7bgiCZ4qN3tP4ZbKLzwLqEaYQkj625rjuwCmqjjDztgMBZRBAR6D9bJU",
  "key22": "448JiSpEryk9qJ1EkvJFkAzG4GdzfPekMZfEYYXwhd35wQtgfWcnm7R8fWH8eb1dWogQtYEk36KQd9bxeP28xVFM",
  "key23": "5PGbktWHFvuWCw6XQ8zkhToc13hxEXmiBgpojUezXuTqEyYap382vmxBxVHX2aULHtN6pgiMrxXCwYVaRGVsN4vT",
  "key24": "2HQQNQngtNXnT314z1Dcg9hnBaJu93NXRpgnKjPHfikcSakybhmZhTx1krVFXGCbdoJJwcCQXRSyM8fntS96xvdP",
  "key25": "4stmDhBZQ8EaWrN1jWukPMz9Gnah2QGJSoSB1JesmCT5GcEg3GLZeXVdCaVGNkPpp1PDZ5L8JNWARTwpce3iXfXL",
  "key26": "3QYGrBjhHKd7zQWrsccbZLMAD9zYsxgUXS1z55eYxRHMGVpvaJwfExCZYGDLaesJg3nDADgP1pz3ep6V1Hf37yHS",
  "key27": "5NtwKqUGf861RVyGhxzSqZihhAK6wMj5PU9ir2j7nyAM7ijroKL9Tq7qfzvgsP1uwXxqiYVALBMFFadZggsRh3AH",
  "key28": "W34K4H6AKKByy8Btk6AQYjeDen9yQfqDJqycQ7vKdNqV3cyyfGu6xAgjV58ebKhQX3aPzvZWfkaxuyFRYCYUG9s",
  "key29": "M7hwzeb4rYZfypxhkXSvT4VkuPZWa24cVfAVgzTCauXZsvhgyFTwh3FkJ2fcwhsvgxdKErwhjNCrqXKzLTsqEMk",
  "key30": "4Xze2G9ECf7R5h6C9xJngurf6vsjPpLf5rMS47TVxRB9iAkG8RFXxkmjuS1o65gt8TfkLLZwQvWw4dSMxqhfuPvv"
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
