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
    "BBVgFBTWKVj4eyZ2w5yDnHKwtMoAwKDhWs6jNaJ72DKZWC7yRvGg7hLx2JU1FQpCpxcvD7YiEJSkFYwByADpbaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Np6iGZPTDPnE8jAYehXLsFXcyrpobVqiuT5vqE7tBJkZTdQRdUdWa7ux6e1WMLjKsCzDLP6j99TZbtarzD1tDZh",
  "key1": "4voZ6R4c3uD9yPENyTukfhMbTcaDZ7UiacqtPrfR78yt2YgrG1zgrW5PgDenEa6PKA6mxyMGQukn7ASBUaCs7Yim",
  "key2": "2PMXiZP86jDdUnoRKZsuM3c8aEAaKXks1g5xLBBxZfgavjkihYP77FwaUr6RpXU1jxmEDgc4nVsFgKHgYkZ9VRRD",
  "key3": "4FSE1vKcNyEY3HdXiaBWZzYsA7ebXvZF7JBZU7TotwsSqGJdQu7pYuXdkV8ZpWb7okvM5KnpCFZbyJVd6s1F6e5v",
  "key4": "43q3WM32h1AQF3XCUtXDWEAwyA9BznoVSuKFPDzb5A4UE4TidS1mybxWpgk4bWLkgfoa6T9xkUKf48USi2LiBPAP",
  "key5": "5qwejsthFzjdM2fyP8zHv8jgdbXyMe8h7RbP3z2pCXHgt33pUgPX85JugJJWyLdUCgPNZamoZV1X9DxhbkxbUFAw",
  "key6": "LP92eG7sF3zP7bpcvp6LXM5wKYCMnUBmHCbRUpD2Sat5d9L3sj59J82dssRRfp9H3GM1EMsijmYxB91SpXbGfU9",
  "key7": "2X6wjFPxoqkyTQknH2bsMM9hy5bGoq3pzYmHkVPAe672ZzFtm1p6gP7C5hTwTSPjUAuy47fiCkk5Rcd8P69rYKH7",
  "key8": "438nqf84qMphKbvLaaLw1kbsGpKVsKvkWfdu2gxM33NtFBxJTVAtz7hayBeAtiyQJ2K3D1Mfki32J8nbWdB3Nvzr",
  "key9": "93E5ycxbkMQcfSf3f7geWYzKJ1Pgt1ei7mmcvmsuFgPcjSb9ZYb4Hcbubzph7ZPnZQB7TZGTHjLEvWbV7Y1fTDb",
  "key10": "QDbC8B5AMYEhdmqqQFBeG65sHP9gxZLchnHneyvU3g2gjoKVhWetDDLUxJdDqgKqFB5ygUEfkATv4VVknmqb8Ut",
  "key11": "3wEstQJRJktc4tyFRmRiFSVywcYcxCbJAwzGsWfFsb3nwg3ksDeD2jmayh2Yzir5wR59K4qmhhCbLs9LubGyWcT3",
  "key12": "3kX1dWprvULfFPNhKibTqpQoHvJrTwwZMgsU1hrknMy5Lta1x6pFv7vnWqkfdJzDryN8cWaRLE7EsjZoYVvM4YBb",
  "key13": "3TMaHvme5wTvQCW9futBXT1sQa5VuzFYtiXBYp46wdfibmVP88nq7nbhNPV3kuKsCPsfYCzpc1LZ1caAvWb6KU6K",
  "key14": "3zcCa9Wh8hVpzkvikNKeaWHs8saYbZmkr4asTFLqBoRyykBA5B6nurkDXt5yzfQW5UR5bxfMTbVRaQ9vkm7NhKNz",
  "key15": "2qALupfyPkdKEVZYzAhgBdBDKfaoXwp5F391pgmsghh2kEqi2NLpbDeCxWoNQRYwJao36TaZtn6nKjFuRTYQ3BAi",
  "key16": "2Whz2WcPN7fxVVDsjLxVjZjs52BkPNg917V4EngodrLhAVh5yXa5d8J7yNGM7H2xFF74u4fsPb4jyM5NUn4mbjTm",
  "key17": "2472PadSLYtPTs7sBRcicmtFbjxrUa8eXzihkhBMPfyGy5Ea1BsX6LnqtDcAdq2pBKCop6nStDbniSZEYCnX7myC",
  "key18": "5BVN43HWsNwyzfLUr1twbGU4up443cGfY6XyuJR8NhtJdTyXkdRvs9N9ctDnXmFTHkR44KmBGtGfeh3NunpbmfJg",
  "key19": "5r72LcWtEcRE4UWWjHEvp8H3D5PbabkZ8vuGWh27MnXkxV3qmJ2m9jaBXiEXkwAuV8L7MJoXiiecfvc2bHGLR6jU",
  "key20": "38vvscvurmodBNfzELBe4PjvhvJUqF3jvbeDhkWCefKrJtv2CzTTcUTC4KqVvyAqg9NT5aBZM1otNPhna7GkEXC",
  "key21": "225ZNXUYM8b81c8wbJJ7cskXgU9RT6D4hxth6teefYTqP9GvWL6pYPvV5J4ZrkTGSg7nm3efA3dLuTd4LMwin1zg",
  "key22": "5fm34Xr1o1KKbWQm1i3SjyF7LRoETHRRAmx4ggugsRCHpBS5swQtxi7f1yhYAKG5zfXmoihBYZ9aXKowcHJKssey",
  "key23": "3cQdAyCVnbbXYqnL3nRMCewKgxT4UNT4vo9sZ83mhc7anwPBpjvZm5B5tAVzJ6pEEQgdPTqHenG8FfG89hRJ1XxC",
  "key24": "T3EBE7PyEYiDSMcaToyWUCDjWvMAA1EXK9aL2sEtVQztnqZSCVsyRmxb3fSevAzzGVvQFEsr3fjWXfFuv21ttpR"
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
