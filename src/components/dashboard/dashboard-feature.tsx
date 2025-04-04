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
    "2PRm7BpxpK8Kuk878sWWXiK4PCBNGQx4X2uiefXm5VaK6yPVghZdN67Bji7PrMNkx9DJ13GoGmzLWzNcQS7TL8Xf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tMeHPyp8cDNvmjmVuSjZgGg4YydWaixQeycZskdykqCrEvULUQRHDG6oSv3U5CzGeEcS2AT6yAaExApFkneneVU",
  "key1": "3Bn8SUqLPwmexmEUZP1FPcbqW2gZYYVWWYTecqXGPwFURCHtx37ntRqf3at876L6fK56JkjGSZTtFHa2h6s2TuVn",
  "key2": "2AA2N6BowG47gEF8NWDu3LZbKCubo6awQLTwSr61bxcoPg8AN7UN3KgQCZLbwWCovUDUsAQzuv9znbTzNwC7Jc4v",
  "key3": "2a4uUnKmEf1iFqRP5Yrj1wUjWb2uiu5km9qcoHKuw3r5GqezY18SzJbRvSQpmdQZx1HXrgcJTbKBXp7bkHKWnETX",
  "key4": "3qyWAaAkeGNj3d38daMzTi9V5MzfHwsvCQREvmT1SgEFAv7vXZyPDpPA9LixFZ8VHZW3KWAm1WQ1g9RxyLTyv47U",
  "key5": "5ggMLZme845s5218qBzGfvPDLrxu6i75MTc1hWjGKEQG9sAJSZ7MnNd6vWabkVLNwSJkLzgGBsDeXqhgB6BPXDGg",
  "key6": "5U1aHiMfVGtzDAyUWLMyNR4HzPgsuuht7iHMFEaG96NaaJdU1KQsx7Ug6wC4rht1AtbA2JifxDm3goKvUaSHTd9A",
  "key7": "2nuRNEFwqdPMJfm5nsXCkPFJofkNHxqidh6FLJQVyRz6RvMzipgUJrTjK8bt7Y6BquEQ74vPqyyiBn5ErjCYenGU",
  "key8": "cN3DaCt92NqWvEaqTF9MiKUAwuWKfKp3L5XFaByVR8dzsUxZvH6nQm1egKNVVcdds82cLWX2g8yM4eYXiaGSsCS",
  "key9": "2HBbtPPrtH9hEVqgrUjV3jiAJG1DpeLjWJKg9KihoxQU83EF34HUiZA5cjPmCCNn6nXdwPyX8QDmz32hXeMMUZJ3",
  "key10": "5Q7M15jMwgGvpC7WCZg1EgvtpsjasrPKzuDvLdp5HNWXtYmL7nBnLxLh36TgxT8TKGqzAf7CNfvdent8hJBY5fMJ",
  "key11": "2UWbHd8KQj9UJ5FmFmTjJgQNq3k43PQ4ziMMCa92trMbidnJp2pLmTaQmhqCLvYA4ZEHpRBdXeYdsYxjggjjDRpK",
  "key12": "58NzKWxq6yPw9H38mnYEFQtpQ4XSKrKtM1vuwZd8vMemXqJX9txwmtmprsNZLxPWU5UV67yLjr7zAXPJducv1Vg1",
  "key13": "5uowUAhnEhGVdYrEWJ8UMwgL9sEnN5ZFfe3LKs7ML2jGzQv5wZ6Y9Qc51yAx6epJPoa27pkncDnWC1CF3V3Ym5p7",
  "key14": "2byTK4t69D7Jk2HFAQHMpBb2dZ1WHMRQgM2HD8dYTtQaio1QGLxyXmQaGnvhx3ZSguUv6i7TebqronkUzdADhaBz",
  "key15": "5sFe2Dgypr8HKpC46wekZbihGrg9Z7UDv9knbH3WcQUpRUP8zmHZpHX8DtgURZVWQ99FPX7UKEvzPiwWsrSJP9gP",
  "key16": "3ccqURdbg2Sw3Kn7BhSbebHnL1YAN2r9ZgGUA28NwiqTYGdBvATSFgQZgECrCcNV2Aw8thNniaAQAaeh1WyzAovm",
  "key17": "3thTXygbwJhkMKasjhXXTQpZNZ52ve39dCUo9rXoEAc7J5gBqZUtALreCA69G1qoRmC3dKqCcbLdHkJgD8M6brnb",
  "key18": "ZCs6HRvhjdzPZG5zZKNBsvsZh2mU9843DhRZN5rnuh5iw1zVC9oXzQ4aeATWm2nnwdutEpAyeqnHzp526w7dM9g",
  "key19": "orbFB9ofAymqpg2PMgW4inFgeHPNjuoUyL3rU2uj4NzFPFkgfTCDrAYUKPxiHNGe9ZeeGYvR1xvL8pUuZmMBj23",
  "key20": "4ZQ4V7Ps4j9CdyS8LHmwTKM6iTsYFpMcweNUAJf99nKEibFq7SVEe4kx1s2TBr75UMcsaBXw8CNof6nj7pH3j1rQ",
  "key21": "5D9YgLXnnvSR9PUcnTGbvDZuP6jZCCdgqcuAeyTf27KzAa37ou1zP5KoEMDuq6g6tYvLRBLiGZJUsZSCm1YvyV8K",
  "key22": "51jcYZYRnsVeuiabZCkBhaiAN8f565rJk9KnWaS3qLqFEhfaFWQZM2NcRxvFGBDf6HiRqGBEwve7TwuorT9ZCK3Q",
  "key23": "FwHkDbNLz94f5Vg5Jx96qen7Wj5ucqBjhwAyxdJR9AtXrop7Jc5Du3L4PiWmfAJxEscT1wPnofys6wzk697B3cW",
  "key24": "58Zq1xG3SdyXE8tunv54XRMwxmKWq6hAnjfV2HW9o2rkqppPQLAgureA1zrUBoDLLzbXPcFDsrxxVU5vSuGYVQMb",
  "key25": "5KzL8Wj9MZdVQCtAcd5jz5nFtqTZnSQkuvRT9YUQhAsgYHv7mwu9mQQLK3J1gTPuED8g9FB6Bak1nr8AfhFwyXkm",
  "key26": "4QfnZdWe1R49iKoTxXJwYjsvb3KvvKHoRZfkW37LC3RmbnYfYAWYMzF4WrUQtpsGtpUwavryfLt2U33o9JLjVnDC",
  "key27": "uuqPttqqGaaETuhRC48dt8jTzoQ2gnS6cg5XVyZCzfpMKvTjVbdqNwomDKctx3TxCmx7ofLtYyfFgrMSd7cAJtq",
  "key28": "m4G1FAXaGAhouRcrd9bSNchAmyhbSjJZh8xu3TLVS24zQSziL9BKswbTqVcbFNAVvXj8BAvNuwF97uDcnzykQB2",
  "key29": "4jVG6WAaddmyYNtLncyN7evRjKCyQDpzMWAy3FiahvGSsQQCCZYP3MhCGuYMgqyje5wJBPSArmXPJE4adwf7DghV",
  "key30": "aoDmCQ1BAYnFUMeifim2zgTcHEbMoRoH5TYr5RFJ2d2TTrwBQXLvLrog39HAVMh2cDXw3Kh4JHUBZJk1Au185ty"
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
