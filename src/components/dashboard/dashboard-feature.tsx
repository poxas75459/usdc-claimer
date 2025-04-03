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
    "4cABJ17uTVCbabXVzqfoPZaRrEwCWqMfywJb7LnTdFAyrHxrCZytPimMAWVsFznYvsd3WxpLK69rjumcHjwuAaqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jaJZoEh3Mx5PThBiDXcTnLM7wx5MsuAiTh5MNUTEfvSGU5xw6t4xPv8X9qcy8PV6V2eHmjm4EyRN6q3NJf4taPh",
  "key1": "rFrEJJFNjQPuZYwYnsvuLKqEo2TbE13aX3uKiSfpj3kQBJ3zcCV3mx8ZupwtVeBWzeA4hSac1YzJrhJWtEHMZ1K",
  "key2": "2iLRW6GhQX7Mb7HuwBCsm4LLi8nSxyATXeq3gkkxP5FLAS7Yogd2bLfFdbQNMDfZWrCz6xzY7MhjwoT7ckGvqqV7",
  "key3": "24pGAumi7ohvU8d41YxumFt87Ja6yUzcFxixfr6p4hveGFJbPBS3bcyTjNqz4eEyX8PH2ZGxurumidM7m6YzjS9U",
  "key4": "667vAFU8zeJbaYVQS5RnBckNX2gJScvraNuboc2kaypnUFNH44SKzwUA59hcYRuh17UYPnJkiwA3bW9zLWvQyybq",
  "key5": "57q9nHjRSJbZRa2cyorQEsWDmnWsYkLDvgZEQJHCF71kVrPBN353sEghUvqKXsqkTnNZ4SGSWD853R7VUoJ3awEz",
  "key6": "3QUwBdv6huFHYnmcuBdCKY258iy38Sy7nbE6eQf86SDbr2vuciVWLkuM8avb72jR6s7yYEnSHxWnFTJuQFLXQWZJ",
  "key7": "Z6nvbRh4s8wSgQkTGkiaWPk2CTbJCDJdByzqCr6udcJ4yRBoKxf6gvxJotrrbYpLk46pwyd2b6nuRDVSZoE4xyB",
  "key8": "4F1Trho7NTAg8mMYxzUGHDbNwTSWFdEsZgk6YrPoyoZ9ynmiLAQ2ep39XRqkxPczYwDbPAtxYdhmheEwqwvk5LkW",
  "key9": "5m1WQYiVjCA5cykDwEbLWgownJkLkKjQCo9NZHXZ6bNMJUDLFHMdRsHALdaHFpzp9KhWmkf7RjjR1KPCTENt9iT2",
  "key10": "2mqgRgaVeK8Z13JB2hcoqKPRjTSMc6i8Hr9i35WheHnT9uLPTpD69fPXTvyq8n6J8vt6pGPSNCBbnQ6QUg1oZCBP",
  "key11": "3YuAmWXrn2aNGEBqkNJMxvXNYi2zHMGuodyZR7TZor6Lzbi3xS2pphzXRaPMTVDdRo2S57vfbC81vVMSsVHdzDMy",
  "key12": "3d5RcWMVoo1D9D1tacKs9kGs4pMrspKfrnYG88CV8BkbYM5gWGNPdXhrswDuP1VU1piaQ8wvLj7kKtxZQrLtkxb5",
  "key13": "4E1wVAQXbxPUdb8fnVzfCNohzA94CBX1do9VdtsHHM11mRzfWJMtPXoWsJziTkojpDUyV6o14YNeshXR8bEDeUKd",
  "key14": "4N1q1vi5fZW5igBpZQbJD7JaNU9n4ZzX8QBMdPBnxUYj1YTn6Q6zNT5DqQZFeXsuC38WmARDttkMfUtfoZcgRN42",
  "key15": "4mLSTTemazbTyaBeExh7JBNo51CM8ifeKZERo4bUYQnHYutWsmCvLUZFLrpSq6daL72L1dNbm93W83eEDoVoJwB6",
  "key16": "5CXsTEsVvwxCvVTEpad6cMTuWrPeFRfdTG6tNBY9NPde4iABrVsgQxpeY674M2R8wxZyFrLNKMp5Pt71MeLLjrvU",
  "key17": "4X1uisRRAsQeWCeRk4uvyxWTrbvw2uvHKYGVcNxoX4s3sRcQ4Ns48ssCjrrarfdoYxAa1VwURkHv7dZL2fvaC7wC",
  "key18": "F3kf1jQbcG5A99CAyZZzS3tu7iLHwQaeb8KbyBN5LrqkbzT9R3SbgVzBcCDbmWoBXCsLpp8sb3QSRzPNw4eJGJs",
  "key19": "1NFgnqV4FR4aGB5q2p3DJp4HPkkomUmBoUyQ4AchP6iMvdeAdg9G1s33GdpBaGRGHvDd1WnmNXpTQajZ4hR9mVW",
  "key20": "4ZWd6UVkpr2KTnCX1fsesgRnD9a77cWQTYG2gikcn1WGjT1qJanWu2YNWjxhLwHE9Fyh1LTyFtkoFni7CiW5y8ML",
  "key21": "3UdLHFnAsZPGbLmtvpamDNNx1Laz12VZR4rNY6STZAcNH5KsU5ZU5skP1RGtJvzTpHdPr8GrJ1adBVLLWfztqosQ",
  "key22": "4GvebdovmVFtxUxKFqE1ft9EXmZfbLgD7y7tbu11iEwZ49HTLMbqYi7bsLMuxFLmL3DuDzXHQJv1Taam8E2Di8kL",
  "key23": "4GY5GDHtNx4GW5q1cx5KCDc6XKER4T4sjLJiygCtkbWHg5BNkXKzVdGQq3QvKUP3Jz9GAcw5VCaM6E1e5DH6ZnrN",
  "key24": "4wmfTTpxYefTBep2BM7zbjtT6csx4uBTEj2uhXruK2hyQZMAFsEwrw7taWKDKPjr4kCCkSNThdrMN9uaaiy4Qv1S",
  "key25": "5h5Dfmqdc4aA26GfLBjCTnjFxXetSQ9nNd6jN9L3Tq16S8xpC9PpFKTQ2FPcwU3rL96ttcmuUiVEvCA4NVSMs1mH",
  "key26": "CzWGcPPRKBc93Gv1cfRbmwY6pdjL5DCqdk2FDwwEbSufq4xzbKLbXQ6TdU4FWSJfNzna4ggCdHGxnbFsyP3oWUb",
  "key27": "5km9wVvAovzSr7L5g7oB2SrGgiSXGk8oa4qLTCfsuAsequyHsU4HrcFbMGFUg4gZFnv5R1gNZDjgubEzbgFgwbc5",
  "key28": "2A9Fs6qzbtA8CU8FoBpMKnsngBTbnrWnw4UiQfZYKJDkkUCfbcjeDuQ3u3kG53XxjwzDHE8ERWuj4XMG3o3HMovZ",
  "key29": "236a4zhuWEg8GbeDiJMfGYuL3JMQDDEhuP2PxnytQ1aDonKpFeyPq4K8R78GaSTPcnUFj5ajmMibKJdoCyXSgdw7",
  "key30": "4ymVJzoaT61yx6LQm6vH9Mrv1BN7bKUme4aMb6HnDagDaVsEbAcf4CKtPMyTMXadNQU35RTH6mygHypYybi9tn3X",
  "key31": "3wsmTaDr2kq6axTmhBxeGQi7PsjEUBeeFXo4BmeRCy9Zb5mvGsu23REsPHVZVXiXHDVXWed1zyJXtsu7xAzYX2CS",
  "key32": "2MXt3qFBXkkX2NtW8s4mCTK22qX7vs57r9fEWCLYBSd1u4ZYNbNmyxrDv5XcGEKNj8SzuU9v1LEbxJoUbKd78FXg",
  "key33": "4Anek1QQxYh31twT3Jtn5LE65zpkyJjFKqAEF9qpM8urNP67fJBCrNsXfhKyF4kPTbdkG2R9rpU2KN4e5mm3g24p"
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
