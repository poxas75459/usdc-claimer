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
    "5qvxhMJsyvBXB8meV95duc1FQfYzR46C1YhuSFPC2ZUnzY5Y8bagrLYnMuuVYFjDrqsqN5HNSTbfBwpYvi9Deek5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31ekJuWSvrLBUKfmLS88vaSkSSPf3paCSgvJrjALuRNqpbrUG6jX3snbrsEMN4mvJzf8cBc2HNM64pjAuDhz1EJs",
  "key1": "HnZNfzt64vjLGN5tNmMi6kG1QKGpepahQnQdDXNqvgUmKakHtPtufFKGonk2QtedE2XRwZe9rGJPrHC1mRcd3Ni",
  "key2": "44yzpB41W6zHRwgnmQJCMuXesfAn2KC9UsNcPSuwn5pCu3TemkHM6FjGstWYFhviKqc3XAJcfp9yhmBQ757E7XR9",
  "key3": "3PnCwfGNDDUmuyhtsLRzz7oPhsrCG9q66nkZop13y67SGNFMufrbkbRSnEJHvZ6zPPpjZD7h4pwFj3473KPFh4ev",
  "key4": "3HRH1WrHZ3Hbx8oiW5wvB7qB8QKnGW1yg7XWCrYsLMmvk8FwnbcZA2XF2ip8GZmY7sZfv2nvwtCb5bT9k7quA4Nx",
  "key5": "3xhHUk8HCrkR6jPwuk4wa2tNCQZS7yMwdo2r9MeQwrxm9B5cF4x2ZvWMeKi4pqckWCv2CLwo6MgMW8G4yzKoRvPR",
  "key6": "5r4j1bJzzu9GcMAfMxVv55c1zo1fQ125xH9Sbi1oTzwzp2towMg91gnGy3AwuhuNzWapAoCHMM3DjqtGQMkQknyP",
  "key7": "2cko94juRkj4KZaJWMRP755ZxALb951MdMnDUvPo5jnaTMz9E2m6zSD5JZ7RitUSzsAiSr9JtjWA6kp3W16SA3uD",
  "key8": "57hQjLxzX64D8bKTG2t2c46Fj14edCZkSSz5gFtsUKQ961jkp5nsJ13MA5ZZcHErtjUmvVambhZnt1u75q1L8SDx",
  "key9": "uXHyJRVvPab9z3JdpruytEegPmcYi2CtgJMiCdqxuGvepLx9Zw77gQmeoRVHDQdiFsdPtFbpr2PAbjULjJJaHGy",
  "key10": "3vmVUb6JXS1p1ZvY61s4B9mESEUjitwT8cG5zrR5go5J6wFhCrykcJzD7SecGcqTpt5gyFYZKTDup5TswPF27L25",
  "key11": "2edYi6cMbEEZAk6iasYB5dSvnQ85WAf1QAptgtEUPSHD2UeUjHEMyveVYpUzPkZhATDKtW3khjaG4DDH2a3tCK4X",
  "key12": "5KEaQGU5W7hYAiU2ENtHDwDdNqEQrHThAE3Lfe5hNzpsnjfHHETnzrW2BBdyfnpbdcsEmfMWf6naeVJ578Q9AZgN",
  "key13": "4obFbn4ZtqNEYjJ2bD4tyey8Pz9JwNM7vc9cmCzz9xYLszDBjiwrKD4TxxQLi9HaYArytCAd7GeZawT2WyMqLnNz",
  "key14": "64rPm9pTkpzuvwyRAVcNxBuSW77HbTw3wVXMPtVRjcLFdvGY3BxLFoCobPBDvr8KShCUa55EttS1uiMJXT6XMGNP",
  "key15": "4WuwhVj1nK8NZakHD5PVbF6JLw4itnMmbmkAkJtY2gauNRapL4WXUyGuJGQ3ao768jgpw48LRpHM2nUdvGrAnspx",
  "key16": "2nHJmFbHiNeL1x6CPiywYk9WqEb52LvFcyiHrnMHxzX4ykV8DZn9dhAiZYRE5CZbcDctV4REDF4yWSKzcZURoJdt",
  "key17": "4tYrYX46jB82aU4NGWGQo5Y2aASuBMKMjjNjhYAP2WeRhUN5fRztqhiQnf54y7w1EFkf3oZQEGrC5LjBtEWQyZnw",
  "key18": "5hMUdiPjujoB46HkuzUYpWxns8riH9T3vHA8UCC3PofYJDp9V9jh6PS2kVdzbavAuhPdYQNFhG83ivhEDZY5gv3x",
  "key19": "2DLAnS6Z8XinwmuXFNBMLNVy35jdJA3ELtgH8ep6UbysN2ivXjemaJ2BgZRqwuWiGoB8dnz7F7JKv4HFpyydvV9A",
  "key20": "2Rg1vGspSyAuaYki3P9BpwxrAv698EBuyMi8W22WfbXMR2XhjRH5no4aKQKrjAav7xRbU595YeW3f4BB4jGj3tva",
  "key21": "2XajWwFCnfafTuviePiVEozAeQ9caANQCTvpyQJ8jAJxe7koiNeyRBqYz65RQdtyqQUpsi63G2dQGhtTVbbFXz6v",
  "key22": "5B3B3Ptoep23cKnLgYATCJGRNcpEEDprH1vn2k7DetoHTTi38knkTVuPkjw4BdtoYWWY3SNVQTXJSHhvWRFcvEHi",
  "key23": "5yS8R3LADyGWvsxMo9XMTNJE4nYnXEKKTyRERfiNYRby6nYGfSA7RRTHyrSMpcwPNNb1PzyaZEukJaRaS95MH3Zh",
  "key24": "3fJ81JvkvHyBnMk7qHBP9w12XJp6Bfm6NsPfMFouji9Koz5AStcqHED4JwKhzBE4ShMZDy6PMbjeiLzJJ8TovcGg",
  "key25": "4jPmR3qneLUCz577ZSj9bGhg4TcKoCyz4Deq2qKHkfduV9x1iZYgLJv4jUC7MvnseVzTjKjKpiyB8TXMaYw2e6a8",
  "key26": "4HM9jJPnANBdcTNSYG6H1N9iqGDgncTRbgeYnB7k5rT7j1DeqEyV9MGcLyKiU6mLX3xVU1B7Uvw6qmaYWm4GgSV8",
  "key27": "33AVHnbTjyGqES9ABNJES6NtRetzVeJY7q8RsuMdXWqH33L6N8R5JZgPBccW8s57QVVG5AfaiqZZtJ8g2RMzyWPe",
  "key28": "EEnfnPNtcdmwrwNfE7NrUfbJXmg385reA6Fkdg8UaHVJPCkfr5uu6BGGB6ACpgzasTh9q2isMvos1FEPXrf4nE7",
  "key29": "4WUKUweG99xyoAnax7vAFqz8vta8svgfysVRs9JwdNiA6eeyuZpcgh6WYiwDwt7q86gHoEk6KUVgfHEQS5ZCL1DT",
  "key30": "2o8u6ALoY2asJv2asTq3J98kWs5cHuAuk1gca3SMZaWSM6jrhasmyGHVXbhotfoVVsBbBCmNgj5JYxBMLuwCjCEw",
  "key31": "7dJNn6jU5k9GwergLrd9REoifToTaELi9XR5aUdAV3t5a5eX84NhdnfVWRN347ReJJ9HcX1R7pc1djbPc4ZuEcp",
  "key32": "2VyKcREnsN84noxMw498n8ErFbEY8Jcs2ExcygcAxqBSvmXZcrMdkbQUVXYk3r2MrQKhJak8hNo6NgVcPDBoZGZe",
  "key33": "21YqAL1LGvwaGAkJRNST9C4Ng535GtomHJgnkRmq1zLMqSm2bEHdkuMFSsUiKW4eZxkZc3MVb2miVcuqPv3jvrVT",
  "key34": "2FpzYsxnbYkqARYDJq8DNi7NVXbmzPgvcKMkMGZ3j6rYpuAb5sPNiVL6hdQDr7S9xccdntGBKsXKwd4SoZjqyUeG",
  "key35": "47h9PBpw2TRuT7WotqVx9364UQnXGJX6o3YtTvYnCRAwoS9kAGGqym2ESDfA7HqS9dXMotyxeRG7M1ffXw54zmU1",
  "key36": "269e4CDX283fUqxuUfU6hYTb1qeDyA9BgmhyU3ds4hNRQud6qSGWMBusFTX5ffSyiJxdWkFo81wGwxUm6h5aRjGM",
  "key37": "Vehbm5iaKvgCmfC6EoP7PQ1JSepy8HWrip938E4E1GqV5XdVvCfhrH6xezEy76PH8SdLPZZymmmhWQKrjXs4VGf",
  "key38": "4LnHExgrFvtfMnEUyakdkB8rbyzLHxVa9PUTV6Dcx882vP6CYrvgFzztt1bQhbtWTxiCkvVSTpx1mBNqBPBwb4jK",
  "key39": "3feCEtCtJQxGWA4qHx6DHKjLr7EdDCAT46PS5fW2PmfmSbbsvJ3b2ZWTZHxTQeTD7aPtcCkiryLDxrkLNTdMUm7r",
  "key40": "NauB3Tt8HayYMYvtvB7zZZV857QkJEEni3deA5ks4PxBu6iKokGgXNEyrS2A3fXqDfkHeNwLofHRfJPsyUa5s7C"
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
