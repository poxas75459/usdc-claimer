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
    "2JRKCpvfd66ELXUY4coFXqCtkbwBrPpJ87pvs6FetHjAu2DkcmPiW1q4ZVogeyi8iYioQQJVj2d377iK7Eous2TU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bWMsQ2Y7csBAhdLaAbr5U6S1takaibXUcwoAxaYCsZ9KoNuEeuuUuHRWTj5kyGRdUPZnjwiLWmavV4JgDXSTUcw",
  "key1": "3XCRP1wunUhx8zRvzKC8FyTkh5vZA9xdrRs74dBFQAmaEzHzyqG5Yk5vKmfbHebBkknJqoemYPVAchf6iuND5rtF",
  "key2": "5NVUYFSTTG9iBs2F9bkESSZ74rkrpLL6sFCFb3Ngz3FePuVinhaYvLMQnijm5b8JbHTcjQMbYamDry8EnwXaqQTn",
  "key3": "K1NEDNcTSEKPTgepxhYEzYK3npf2DM2XStpameWYixcCFPBxWh2eJnS9P5WsTmdov65RpsmmZpX7hYV2Cfxf7WH",
  "key4": "4xH32iywEJm8j23z2zVeFRwzTa7Rn5gmV3zHfbMSqSasPgf8gbZ5P1z3JaGG8dqqwGPbHD14dVSNtzLmmsxn54US",
  "key5": "66RGagLsM1VDduiGWCXxNngBAVRMid15kfPH4MQxeZbNy5SkUbh4VsFkKTP1nNKvEoJMjoP9SfjxwbgGu6WQZM4p",
  "key6": "5oyZc7qYtHq6foXLHAvuSHSRnTK8ViKr2bmbVZARdPdZmq2R7FJFB61mvZYCbZh4pAtWPrSCAm2kKnciukFXpMJo",
  "key7": "4K6HaL5nB926xTJX4gBFNGGjxofcJC5Yn5kqkmnZZEXEz3idiK45HetLorC69x8T68w9bfXVuejZxqsMWM4umA4B",
  "key8": "futo7pK5QL3orN6KbucqiP6dBViuy4X9BFhLQNB6CCYWb7ZyzzRdXFCTkJD55eR8fPL6Bh2epsrUWRAPUYNePWk",
  "key9": "2WpTUFPnrBjoGSbRpPpC4uGosK1d1PKVzoqzXfehbWeRX4M37nWKBHCYNDPoWFNFiqZQzL4FR5VWeQDahQvNxT2k",
  "key10": "2KEwXLVemm3iC1izB91e6T66sdYQWofNNMXuPUzgGwvDbcumtWWe69UN2XmkDHZx85kyA9J52oag8P7NecE5PTyR",
  "key11": "2ovuQYwcD8E9BxMiD5PqgNB8bRBWHbKe3LPz921KFeWHS9bjC2cXXs3dLjxKpCyeWBjGPGMjGTTNqsJmhqpFSwFC",
  "key12": "56w5axrY5J7BRRiuWzhngnYA2TtjQiVJGHqNuL7HV39ETcfgbvmMJV47JjoJbGyKcSxWwy8tynBhFK5V1zMKSiG1",
  "key13": "3GYNJsroTsT4iGY7yUjqooRqdHsG8RPa8TVceaDVnZ6svNzpcVmbo7EUMaFZZjiRn8wh4AUo1qFyKEverd2xtHQ2",
  "key14": "5oHoJnMKq27FsfNdYKj5qpKz8kMSGZ6HNRGNrb9WV6t2GNrGxJy6KttLH44UPeqZqydHrxyaXHULpzVqLYGfHUpr",
  "key15": "HCozAisVd59F3ASVJkvj7FxPtghVf8aY1AZn6rc6pmsDBUnfHVbrFythw3nPMnRYPJXevCdTtttvZ1MGTrnqKuz",
  "key16": "3armN2NeECYECVKCHTdHYfxZqjuJfgxq4GBXctPfEVLpwyHn7G7UaXMB9ZSNTeCbwuUz1K1TgjQ4ZMBVANpqQEz5",
  "key17": "38ax3KeTseXy41ZixBn9DX9ivt9R7ncr9hbviSVoAZDaXEDRrBnYV2DJyZR3AwhAN3HKLu91KGav3GKNQzQ4KXgM",
  "key18": "34SzRx71FRrVdT2TpPSHZJ3cjqbgNNvZrApFVYuwVS26ZmDVuwqwZAGRfH3aJ55UrX5Mgj7qYJZGb5VwPAWyAjPu",
  "key19": "jVRBGmU6HFpkFWqkjoMwBD2QLyGG9vwASLp1PsCgsEooNe4Kp924ox9k1BswLGQn9orSTWDGpgxsXgqTKdpKZAj",
  "key20": "rc9xL3Tdvzmz9MNXH2mZPmPKvG8oJkcW1hpS7QzqoeLSwfkVzcEstpqmw4duXpmQ8SjS5iqqYdXgcW5vW3WzSfk",
  "key21": "4XEx2RhzcrRBaw4v5qNbCzx3CcGAXeRwyhCgDizjoMJJq1d5ewL4EG3e3Vh74tfb6svcMHCJ2ELv3eZWCXibpvwS",
  "key22": "5cKvSG76xJH7hs1zAocKEJ58Spn4MxDhtKm8jg5RzpjBz9B8CPf7k9vd5gJG7Sn5ehcmUpUW4zAMK7urNVJ8L7xt",
  "key23": "5EKjJ5E6M2vsDuKsCkVpSVn86iaYFSUmSQAaEPsX23oEhoQKFcg4U1aoE9rxDEvRcseWwHctRsuDc5uBncAXwDQX",
  "key24": "43a3TW5dR5gcdUaqqADBxDy8MGeLW7T9uTeLN8q34nHEanzjjpigDFdUwLRJfjjthEwLoGfF1MvFyLtK8bkg5R7w",
  "key25": "2v9BxD84qvaxsoAgJXakiPvkqdv1RYpNHJ5214SaJ7sYv4yEbEmk7Buogm43uvZy7w9UDQvkEucEq2t81DBUHY49",
  "key26": "n1v8LzsTeTFMdw7faXZ97FnY3uTM21rmksii657NDJZZXqrF4rXedbPGnHJ6hcPttH3npUhRg74EQcuaBN8ayuY",
  "key27": "3U9PRvPDX66wqw3YEmwwLjKvT8wfi71sLQBw1T7uCwDTaHrJ9XuTxZfH8AaA4dnzuqjtK5ZsmDkRc6o1YpHNwA5V",
  "key28": "26oCpLjWX3rhTAjwXdiwmysMh8eDBoiq9tLAQUkWkKfryf5pdfNBGLDHryDPdb8ai6EXSFRfcp78KYh3QMgHGH2X",
  "key29": "2f7pxuPcajK6NGvBaThXc5tEQ5f6nHvbgHFW6mXrZ1XvdF2xt8nYsKhjAVHsMhN6nq3WYTt7juutsBJ2YoYR7RMf",
  "key30": "5dEt2oM3qg7MYWgAkFWddeAvHX5ae3Q78FMM9KCsJQ7YjFcGzA8KTbSFPknjGczpCrpADVwRcoQAhJUYDDyytx36",
  "key31": "3xyKcejJV1an8EWYZeKWoS54K7fUqGrKMoq11NkiCZewmkoLqfrsrAos84M6bhbUwkZnLxGx2ZE2KsbR8cPgDJnZ",
  "key32": "2VVFH74rxcLopKGZ29UYiAPSu66ZZyApGXQ2AU2rZHfcwYs2y5shNYYwpRsewiJ5XMcc6ZbqQWfoS13DZhbZTNFN",
  "key33": "2VgieXhyLRSWJ4HjbefRRq31UqzbTH7HDNdS33s72UJUs7tw6YCYzTutALJVxfuLYzXCpYWuY968EvEBWjTCd1k7",
  "key34": "YB2pYsftjk1tTJJgCMt9skh31VW1TMgfjx2dKHm8CC32wZ8k5GhbGA6XZkNNwqYzikPZqxjJRWNVA7PDedmAq3m",
  "key35": "5rbShGrgMhuT17r3NXDA9je6L4Bzz4GzUPd18sf5Up6c2gAmdQQQNfwJFKbabxn5T9ZDZDZiQjwWKRD9HJ9myz89",
  "key36": "5r12c7yneG8qzqwg8PaqvauUPUx3Cs6UGQJwRbVL5xnoUXFcacN4ueHutfzR4oYTbJKcPL7kYoknh4wP7ZQQE8MY",
  "key37": "4g78VEdgMwMVuSfW3zeH9ETYD3dy2LB1Gq3qXwkA8QQse5DFyEyJAYi5KsSDpizuXxT1qVGYGbjHgkExwkD4Z4Br",
  "key38": "4WicP7fxzPVqkpGh7abb6xonDhzxigh11cAAbFtYPFzR46Am3pBXH1NsakvX54YPKyuFQbB6TUxA4zzjdJ99VGUN",
  "key39": "2ocvGob5w6PMaMecXSjGHWPo5qHeiN1M8RQrMBPA3rXpZNLqXGSLUiSyPPuW85bnTMq7tDTLz9wqLTf3Q4eq4SbH",
  "key40": "4aeYXHjpJK854dnhyMw8GBA9vewPT2ipAWrie5YhBSiTzAUNuZhcrnVM7xHBbB9nZQvBhc6dYwx6ekqUkDFPpHUQ",
  "key41": "5NFLXXn37FqD6FaQAcmf1T88sPxhrppgQmcdgxep1MLm9NZHMdBsnX3swkgeuWArA9eZftWiqt15erJmNWuwSAQv"
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
