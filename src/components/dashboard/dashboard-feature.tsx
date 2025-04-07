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
    "3LbjUCRXAhcFHMnq9TjQKESBAVonHaqrGJk7cQfeJkcPuaya8ygCNff4QNcLbJwbjtENJueNVp2m7ov5x3RdBNmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "669Z9whGfojAt91uF3T9xwz4EJ76qvBbVXpY8RQaova2ndxfCUMWEw2u8z74KYvmaRURoWT7dQtVHkpytkVUF4dP",
  "key1": "4x6ZdMBgKYZER388RumXTnnmPfo82cYvKMRhCEYjWpoMVaaNCGAJyQWqK5sRxfbFYUPfkBXppWa8REtyYaRkyUtc",
  "key2": "5kCcbUPu9pCQ3ptxhQ8dXnR9AeUi4CF5YPcvs9qpDHM8i8EuDq1eVWmgEEHKQut3WXwuTYzbnq6MZRsndBRZNNce",
  "key3": "KjBrSY9sdbM2SFzZhyQAjwdYowiLE4SuGjS3Pwb4AzsTmYTbaotEuXaYxSsQM287uhJ8MnTS9XsUGVRAgvKjHT7",
  "key4": "4aHCMWDkXHHvb4UyHiELMtCzZaxiPbGFsx75b53qT8UzXL37s8DEhDWkfMcAEfauH8VqeMJTpT77QHLbjic2DRr3",
  "key5": "ZPMfRKDRdrieFUT6yvt4NXsGSGpT6bX91dzTrg1aevPXrVHEWHJYFKgEddrdcE6p5yqymD35moDd7eSVh5kxjNL",
  "key6": "5WgcEKHF39PLu4Vw3YTj9C2RLVerh2ZLaWmr21amDHi9ZdSBXfLdTAkAUxc54TAnLyWpsYJK4ssP666AWHVKASUG",
  "key7": "4Xu2x9YG3sFMYkDEC4ZsSB67xmeGkDZ84gy36iFtjdXdneRLbaQFTGtBj68gLx9UMkbA42U16oQa9SgHKUtdcQge",
  "key8": "3ZW5uAJR38dBxKuVAgCNq3bMAAx3vFR8b4YUjzg3fHnpW7EEEU7bPfS9KGPuZaF5VLcgRjDWysJipmeGF26MQ8Wo",
  "key9": "5GghzXppWdb5uZwjN12pyW1PDCLiVGL2nW77MxAWdW1PLfsVT5trBNX8DdXSxnw3Q2rp8rPLyCk8RUvstJ6u2mAf",
  "key10": "kPYUELrkcWPFetAB8czCYqpspA4hmYxKYjHHGFfjoQTFERE6CtYUURnA54BtDVn5NWa7746Nyi9zhFkSYBvzPh4",
  "key11": "3vh2L4Ed8oTp5oZScbG8J6f472QVmKGoFH1MbNU5BT22mNvLYGDezxHqsdvLBopZfPZvoHLSAPrwnFboU8k1dCMG",
  "key12": "oR18cT4AAQoqToD4UkshfjxEqPKR35aAjDBqPSwGA3idFJ34Ndo4S227gbudcKS5fmRYrb4a6AfvP8wyhzvPjXj",
  "key13": "4VWu1Kvw5mFA48e5GZF3DrCCT8RqPmFXdVrYqsscBchoof777uK3724yStmQq1jSP6CAXyuAQqHexcdmpeEz4E75",
  "key14": "5hMuAW4K1Zxf8FdAQLet8gzmY5DsEp6DWkshaU6S8FeGd4LYrUNjHzC8EsDDwP1sAofLHBxMQjQBqVkDB6jhf4nD",
  "key15": "4MSc1zif8u4AE7H4NGjVnFCEyDsuHdREcLU6nse3Km7DreUhCS7CQo7Nd7W4QXim6DTmNjv9EEmQSfue9Td9d7Z1",
  "key16": "617dAsNbpXS3Snqwv5bhmfwsRwXZoPsNB2nhMACmTob8D2ZL3XZDchRKbfTv79sBzvruoTDaXuRvQHwD4fpvsLfr",
  "key17": "2JbpJkUPmH2zKenYyoGAZELEAJb2UqS3xEnnQdJhkeTySnDYhihHuK78q19smRM3DTaAnvM3sZS1MfjERyyZ9P3T",
  "key18": "BLkmLhHUio6k8L3gyLQQ6WUid8o8a3Ba1Let1enBEUGH9EsCQp82jGPmT2mr5BAMd6omDXuphGDXSCvR1xSTmmZ",
  "key19": "4xHwZen8LaRHpStJ7fAwiBRtQBczczev4sfA5JHvbNPVu32GcrAf1U2PjASwVgZ9MU1764fseqAfPYrR8qs6tdcy",
  "key20": "3fxeFHvZ8ChMKczZB6sEp4rEhkHPRjveWMWQuRXPZoW9MuQkiBbLmJ7kvHXbPwHV7kTdUxaBRF2WZaoJW56X6QmZ",
  "key21": "3q61MWATvjVzUKrBKQmZyYNfj2ZD1tWBLmhtKnFVwwz1uZCQxcnU1ScWAsf5hnSYant3PYUUYWKTDaSufzseELm8",
  "key22": "48QQEyMiY44tXqoVn4GcbgmGWrZxAcPznd77qsutiwLjVNAHDNAc2uc1xJC8xenzLom96wCXJvBh4rG7Hx4eEToB",
  "key23": "5mbT73bdfRHzvU4bL6TzZUqyKYn9eeqDVyGukHcg1NLy6xrHHF6hvLCrb67PBiC2ELk7fmHWfBNC5zZnDRGGkZ74",
  "key24": "5Wcz74Weu8yVeHYLqbjYADB1V1MLDpp6xwF3C9ofHNs797sGzuPE4XpVPUHR3cxDzM9SyRCrbNxUbSNAq9Rn6YUr",
  "key25": "2Ryi4E8fqQmuSrW7TtYLzWXb12q4Z2xK45J5go54CvhNWCUNAj8Fnsy6D5S2cZ9Ke58a5sUjbybS7hA1UccvwfQH"
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
