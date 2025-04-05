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
    "5o78h5CekrMQvLbCMsjR6R4zEVm9ZxJwieeLorE6m7Z8ApUsU8BmUbN3oX2jcARDH3qwb5gSTgRQSoEHX8kFXP9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UTCeSP2Livj8BYa7oVA5vvJhSyTDYHbHCADpqLJzgoRU7HsvfWAdTRwWPRgG7dbmm6rz3PFKENq424rrkw7aWM",
  "key1": "fdskd8JsjKXG6eSumk4potGAH5YA2z78qEq9pv4w2sbBBbmH7K7bRKiLwwq92Ra8n1kRwNVkxKgAPUQWh6yTF7Y",
  "key2": "4UXzWKnQjfFKcEYWxKaoQy5RxyuEbwah5aHvDqCDVoiSqEJxuhxJFFUNKJjqCQtDj7UYGunhZFPFhcfYJwucgzbv",
  "key3": "5RouJHDDzeYLq3TiyCdRDB4aZc39VomVqyeehBs4BfeoKgYjKtfBEZACu8aYGCp6kkkfLis3czYhz9ozoEwrHQ6a",
  "key4": "3mZPj8fH7irRdxrZMWav61iKHixYBT4adtdu189UYiMMYc3p4kVaR1yHBqN3G5qsojxjAZaqsbq2Htu5ZxuoZaT1",
  "key5": "3pfnQ8vpgXzQuLFALpManSHP2BLCYU74XbVJM2qTjRLTFiKpqbb5rjGS1cBVBUGTrLRJngWyYgo8qx1ay9ZmUmHU",
  "key6": "5fNvKU2dob6LZXR9ZYY5xQf6VAnZAmt3WqrvqYH8pwM5pQPrsgc2etK5uHZyRTAZuZKx5mnYJcbdzrV9nSpxPnq3",
  "key7": "4EFrUWMJi2RXrenLo2zEExCJeuEpg97cYtbfwU4dpgNJNSDr5APgxRBCa7fShn48TaixjoxMf3n6q6Hga12fFDD",
  "key8": "2qEkH2HbGgbc5btVQ76NdHe8S8X2gE3kaq9uTsQdLV5kZJX4Pw72TNANmJbMVPS5sJycGWAYZyrhYsnYnJRNwSwz",
  "key9": "3NuEAFjWoUcQFmapF4bio47ftGJYi2VwDyDDLNwypi1aVc8cY6rxn8ZLLxeHNi1gGZPJ5vADc1JSjiWDpunnhwSm",
  "key10": "UmsFHxgkUMhyjiccz7JaFDc1LB6TmbNHU3dQh9PPsg4AfuSKCXZTiMxGbArvFhtYcWXBdDLEeVdjHGiQV21hbUD",
  "key11": "44nQEqKc34Ae9QmtnZ5L3vLLrJm4XC4ZSSdVYfpyqPBfBa4BAU2nec8u6Wij359jZ4GeEHqHkqVAKBnQUQQQHzTr",
  "key12": "QaNPWbKk61UYNpJxAvtzk1kPvdFggYYzWSgY2FpszNVCmZTLSvpuMqqcLEnE7bUfqdQd8XjXRFPkCVDHkabCshE",
  "key13": "4Lm6qe7EHesFvX9mY3qp3sLtL4bc61rdYB8vsqMcHYxyk8iezCxyAgErTyQ2nv9y7SBvojHRYFbFAQFXEX7oyF7A",
  "key14": "42cXvnj9XsKmNceg5vRwCFbNEBfrvdj7cetnQN36xpsxjBXTXRDtHkUC8bde8KwXtBQ3otdyesoL1AtsgyzPUX2w",
  "key15": "3nGvxHVEeT6KP8hjvjUYNb1ovptEmGfpKXK7i68owg1fMuw6GJ6x1Gsjms5gbzhGmh8BLHd3U2rjcurb3ycUwSVL",
  "key16": "5SVH4mToWco5Y3KiB57EqhPvvencVHvyQVGdLuiGhW1JNHXfq84C51L3kW5Yx3v9Xpu11zRXXK4zYNdinLBsVtf4",
  "key17": "5pKEz9yuJm1ZDLQQ4WR6UgbMNKouhr12DAMZ5E56MWbe5oUwFCXddse9hBU7rBxAD7PWWSTwB54aZsxEkdC8rYPS",
  "key18": "831fiimNWykAxenaSiocd3TAVZLCD4DeAVbMkorKnjtTbY1aNV16hvTELyXYXR6FqncqPsWaCH3SoWPEu6yYQCt",
  "key19": "4GGUqzPU7LMgRmACz6GzecdoQSN1UqK6vjyzvzKfJKivufjrJvruZT3GFTmVdB28B1zTJVgs9McDNBwyEra81P4T",
  "key20": "5WTit3Ne9KmnnHF7BSsQS7Z7kB5Pfs5FhpDjDfagFGBapfCFYS5cigs83pYMfjjADTHHLod5HwKH81rAPQ8bMaXa",
  "key21": "2bhEA1auR7JhGR4YgR4PzmqTg1yGGL4i9riYXmPjFxJeGhQuk9YWkJiavjLkovpUhjwMVTtD87qkeevuFUheuo34",
  "key22": "4fEu4kw3Z94VLma92pQ7mZmvQ1tT2Q1kGU1zBrNyVvdxAKDPfmxi44QZZmpMG3j2d2a34LzxGKytz3f6VANi9tDR",
  "key23": "3jbEkL5L5yyfnJvGBdrmRMV9ogs5tBHEf26X5iVhpvcHuNTjCgzMKkatQd4JSxkmisKn8vhouostdwcrqMTaiF3p",
  "key24": "Q6Pqd3tqUXRbfELCZ6SEwqkMchGqYXaDVpTAyngEBfnNGEx2QEtpgWqjQNGWmyoaTf6YooBaUJued1yoYST2FNT",
  "key25": "5aBjZkKEWJ8z7uYhH2RyCc69SbZmFzPgbs5bS65Zmz2qDFAWHfkLccUQHQyn5giF1SGWUMCadkWZfDC8jNWiwNK9",
  "key26": "3t1xwp7LtHd9bW1rET1mVkkJ3EzWKDHDgZm35j2Df9D8Snw62EE4x9TUs5bstbu6rKX4BzeTj7v6oCRnQQaMz1jf",
  "key27": "4wR3NWTd371BjJnzypLksrr34MjmKunKTXUgiQoAC8cD8FCoFUWo9693pxS5DMa4GpCvKWH8GXhQHmnSM7Juo8oG"
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
