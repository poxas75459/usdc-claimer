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
    "5E4PHjq5RzwZvC1gFrJnb7qSVir1EXACag2WXq49Ltjmk5TahMVZUkNjcLCYmHmSWqXSTKxUxcEezQYZaNXTrrkJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J9ahnWzZcZVWpRTZ9ReYWyt4RiegZ5nDZZ7xq85UCcmu9CvKuTVb9SYSWRK7rySkFjeFsCw3BiwLEDbwWCbq1ns",
  "key1": "3P9Zu7wcJN1HPkyAAtwHXdRtpXCiuAy8jpsqgLUvDWRU5y1bRxUGDMSpRHizjuTJYg8Grmn3MB1Z2Nkkq4hzm85x",
  "key2": "4bdZ9ExWuv7fiP5hGyVSeGihayqtKtDaCwQELLCTsx1VUJ4NQeWhiE2F7X7iwuvRb1EPrAbCaqbtRzW2rWWQqR3D",
  "key3": "3cBfDhCXqW1BqZrLSiQ6B51gN9LRkSDhApKzCgB8z5kvPvzgStRsywE2LSaebtjdEaZJU6jP4AJ2sWzVkvZKdjuN",
  "key4": "2jNNEgQGeKU3Vec4E4h7321QSgj1NKxUEuhzKs7E97VYx2EGnztmEU5k2KcqJmJoqippe1pCy26pEpeKBWgLTrYC",
  "key5": "3RLg29t4mjQ7tXLYFDKeAQPrVrCMBVWWyGkPwuxMj1YT1Ygaa8rMmNw51DMWsRTN5vxnbrmqm8VvE6GeZ1UCzaaD",
  "key6": "5ABWhsGp3fZTWJUgMv953gRMqitbgQSHFTPu6TjFFUjpggsMbdJfBKh2FbN2YGCHin4oDpq16aXhLPkWRQNzxBAW",
  "key7": "2z6j8tGuKsa5AoQp7uh2mHHgwpeqfi4NRpXhzCJtnH9Ajq7cM41tzj9eJT7rpaN8x5ZxqSaNMrRSzWZFZP224Aus",
  "key8": "3RQRAMtDgid2cdqEkm1WieYpAKPCMQwLfxYwwHmjLncBbesoimEXvPaSi47HqYGvmmMY9WrtiR4Kxc1Eohq6ns53",
  "key9": "3n4fpjAsfhhTA8M7Y3thAcc9FtdWevYMSpNrc83qK1cQjnsRyhe8zxLacqdLvgYvhB26x6yzVu8CzGKCBb6VEkiY",
  "key10": "2fhDVFtWEHvTQC56GuCq1HaGh8NZrcDrpXWroTA6uCge91zz3kpwnGCdDw39BxGdDjXskbnCg2YkdYJGAJB2fZ6P",
  "key11": "5QD5vjcvj2FAbBvuGTHnuraXr8QutVmsWg3xa13zU99VZGKra5DSjPLMMLpsqnwnhxsYhMAmfdXQodQCTFVKhPAi",
  "key12": "2gmLnzKUPvjfENzNbj6yaMagPHbpP3eDTU6viyX4RdF8CeAiEBbQP23hu7bgQHzGCiE4UATWeQ5JioFjdKtaRrt5",
  "key13": "47N4h4K8cfEXTH1tu2sP9PnyW88GGv3rTxn31CPVwT7roxw86KEAbfoCY2FLJRwbenpLXCdrSC6tyorUSCSeGgvk",
  "key14": "32TzurVv5tesfJ2SoR5r1GrvswBZvUbNrcfAXzmFAx8xeg5r2pniYiRzqHhsF2VaJrEkoQ9er4h6bE9rXQaB9WAG",
  "key15": "32qYh3m5zN4SBAiUDbz65ygRMuGGwxgsjCTeZuxf7EE2atQSCSoEqQxFjR7LakTV7184zdx1mUDNnVQgmMfcdhQC",
  "key16": "2VCsuiBLot7H9s3fDWsLdDs4J1ibJ3PYEdMtfAjDrTtHFn8i5vKJwdqYAdkAfAKuuUUxUUYjas3s4nqNBa93ryUK",
  "key17": "2ABWhkUWP51QD9i5JzxNfPGTPQAmajHbABAaHzebe9s9yzZqtt1G1SFchJe9uDs1rbLJteLpPKmcD5aiy2ZmToWC",
  "key18": "5ouww1gE4A25cJKf1H74r2MSyQdT2RHSiCCRbJ1rsJhEBKt7scKFpSDuvh9oT2N48ftMTXZGy4PWnTC8URowgRFD",
  "key19": "4NEuXjponXeHtgKJf5GtuL3CaNDEG9tHJ2RTNrVsTdEtHK56RhNqCCo5doiKn2HXGfk67jkap49tvHgbFEEztDau",
  "key20": "2nANdeuspFA94Fokuqam3R7as9WDqf5vpPhMWyUAgUt16XvR6iQY8F9uCb2TdqP6ji4RqcwhchHbzAFRd779ykMB",
  "key21": "25HVgTdQ5qcir9wcFhcfiJNi4SqMRBL1eE88XqXaKZQ9VBfbzMnWqZwN72J87isCbJk5kkF2eYE3Yc12pGaETzJ8",
  "key22": "5tjgPZKV4qfeNuNptViCHe8LXaaL3iG1UdDrLwsMvSm4YmkSewdrEgHnwV5GksxSrBvq7Ges65xuUpemEmj5Ew7W",
  "key23": "7F1MX7RtQxj9PAt97ASAQL2cVwWYfo1Wuyv8JySGrr6q1DXptQmgxD6bxD9c7KkUvbWX8NLpF2CvMGWacN8SfB7",
  "key24": "4uDLRETACehi7j9mTc8HyZ3w29d5B4yqGLsbJEoAv5wsYqSFGWfYUgsfM31vCFfQy1SDCyyDmJYxUBn25VkLgYM6",
  "key25": "szjRj7boU3JwLjVGJxT7vLp73wRqZGKLyhTaWERSAHdpaHJ2m89p6deEc4UXd7kAr3cYdMeui7x2UVsJmNQd7BS",
  "key26": "9iSf2sonekZsgR5apf4C66FCaPt2YofipmbbUdqQN7EHgoKcAkw8DrTtTvnomGxAfJwmizh91FSjUsn18BAdjU2",
  "key27": "x4z1asjYWMGHzZAno687G9G3EhZWuh7vpxe6hEGTNfxcdxxeMLpKatMi8FuouxWsQ4DvyBiogFQq5fjx8bgx5T4",
  "key28": "5reXQvVUknTnYDXMMQDKQWidzN6gJHxg72vpGYdwwo8LT29TYtjqEFL5mmAKqkzsDEtuLVgRvAUzb54o5vwf7yPa",
  "key29": "3Yq2F7U66BbiqSDeciWmEfLH598TwczSAYJKnbSF1pPgSE8ke4UpV2fUJbYhhXRevpdNDyB54fjbsex8GGQFkyPi"
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
