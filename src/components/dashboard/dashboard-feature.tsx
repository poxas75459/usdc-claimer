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
    "m5dYCMPA9PQjtES54b3Fe8YjmdbPautT5GJ4JDVhgtEUBTLbhXJpo4g6CgvfFCz3iTWVRp2hKn3FSqiwPtFGNMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AGeRc1FyfKQWaPEpBLzcdMbzSucZ4yWHu6Y2mCMt7bXdccjrsnLEieXVgdfKB6MmzsN2JX4Rrfk7AktNZucwfxq",
  "key1": "5ab87KYUKFdLvQio7ATpWwsAZqJWZvXUmudoi8mMyQYMAoMAqViMSyFqzL9wFh2938NHnuKKU8vzqrqjvxzYNpzq",
  "key2": "3E4tm8UnL4PvDnP1exy9CHYE3cujmVfAgAJTMuRbPjKvwevJHrRDTEmQxmLQempDYmPed7sSrSY5KV3hp2RD7d7n",
  "key3": "2R5xqzMcLdugfUcCaCQ5CNiRhNiMBo4prY3Xa7waZyS7X5BxGWoxgmaMUx1n8qU2rVzYD9jvjkEBGxb3vq6CV8QW",
  "key4": "4pA7y7PUTCPE2ifExYmeSRyTWG1tHfewZ5Pauvt4UmtVmUqf9RY73caC2Bd67rggMP4ThgtLY42WQYVVPipJkE5z",
  "key5": "3bFQ2HnJp9PjQSKU1yh2CsDNTeYEDmQVdnGy3nBm8JkW44RamYL1xuYTCw6iQbHeaNguLN3B8kwNxgbHNG8dduvj",
  "key6": "WpBh36B4GLLFETajLPEvfmaDf5AdJq3Xkpedzv4WoCW18NmNmwP9uZqcm2QZWFViAQwXLVmj1P8YY1BkXXENqSv",
  "key7": "2kDc1E7Zjm9XJN5JZBmSPCkPv6pEjSFM9wKZZj3xTRxgbQ9HbJSKYbN4R9KjVs9DbaJ89GFa77d4e6NXJMuvEqba",
  "key8": "4gJXeehbAK198B9akd8RFwPqJABTxjjaPaxCjd9tLJD8tTYceW6KdkbqGTP3tbdQciSwtfNu6dACyKmH5jQCoKep",
  "key9": "2sBCYToJJC7EKh9rKv8D86ABpB4wQHH8v9wgn8kmVU6MJPdgXNFfgiCUUsHQx2W92UjvpZuiTFG4MdNkdsUZiXSJ",
  "key10": "4Sq2DyHLvhF2gMR5BM6DYic2qAW4FowWXcW9X3iYHxH9y1gbHq8hATP8T9FPmapaf3JJPpiCxxhLT5z86xaSARFa",
  "key11": "5274iTTny5yRwDtZg7oeAMUSfJpZBorB1KGVYK1kUeo3W2dKD2SvzSLFM3J8FedsJgonKuz2NkJ1KbDiATvrcaqu",
  "key12": "5V8ZK3bNYYQ3u4s4ZhBCww5G4gwsNt7azhQdUwY8v2ALAQJ6dxU5AoMXwXiy6GmCAj6BG2DQuh1EyG8Rtuurpw8c",
  "key13": "3eB8auEqFZjQwTwBKCyCuaY83LzmjDWzGtAAa2bSJ4eWy1pDuGR66jdtGxLqcd6AHGm34UMLZ8boAHSNadoc2CV8",
  "key14": "5Ynr5YN3X36ts2mWiN6avpAe4RZxRp9ureg2PvwupmPJUV1w9fTZUcMkzibSLZ5UWcUvNZUAKNvS2Hr7dU99sqpQ",
  "key15": "4p5SnQdfs8jiFD9pqWzN4CNw8Q9whMdENA8PQscvcah3cWfEuGa1hUVeRrbZJMCYBn59FueiRHAnB76VsH2LwFh8",
  "key16": "2L7ogwttMj4q5biTjnC22Dj5Gy1txDtd4J5H5REjcbxv682ziBiRuthf7mQQgKHrm6LP9C6iEX2TjrVDQyN7QweQ",
  "key17": "49BKnzaqysdctnXKeTjgMnbhN8KFSXA5WocfK6RNYSuS9UMnWyogj2TJAXhVEtUUUw4TMWKKLfjSvbFD7u3LmsHq",
  "key18": "FTnofjCHCbTeLBvAvnNiYGNnUrVMtsU94UkpW358DoJz11Vu5gDmNQzqWazpj848rtdcpnkggVbCNcUERcyT29E",
  "key19": "2pijE8DrEtocx7Fxq7zzmE6DhSustkBbXbKAbRJLcV3oduPsGckAjZBvyFX1YDLNFmFjG2yHtHmLBkWGGd4mSF4X",
  "key20": "3URWM2BQK88epe9V1w3JZezhwBv7mjjJyixmXRH3Lv9nFdeJdwXzAzt2bNhDUUG7RViuKAVb6XfDbfkekKyBfpCf",
  "key21": "4r1uCNBFrkCdHVy4KmoWaZFzKrbjTWTjpGTaDotcgkzxN4bjh3dhKQNWgN1TJEyNTvprznYBEBbVMpDMb7tsFXKm",
  "key22": "vvxc7zeHvY6QNC2ZGuaSLU9kMyCo2i8FktfyFqiTwx2SmUXGU5ftepCTMfab5FtRTDh2Vt5MkYr7bFaCkLcPwkr",
  "key23": "3oLA6M6TqdTUzcHBkhFSw4Qw1XLHYd2BGUoE5VvoabpXCXyBj2wBH6XAPau4GEA3cZvDtogppjb674i7jZK18JPC",
  "key24": "266BYHzEL5WcT5ZuNh3h7aqrjtEdLdhf6BDSDdKEdSAiTg9cijYksqo4iAt3X13tFW7KYVuNg5CaaWgiJ4TGWqzD",
  "key25": "63KbLKBPfemaN63uDgPNLVrgFuLW4hV5yUZaZUQRPCL63QYqHpEX3mtRiTgTdqbXvqiHfxjFzGVCk3ugGAEMuUXY",
  "key26": "bNkrfXuTbe7AnZZpmkToPHM7PxLbEiFB4ct2ga6QuG4V9xeRYkia82wUZnd4nMihBLyERTXySXdZzuQhFm9NGzB",
  "key27": "3u8BAcW2fF2xYEtEE4oEswbhqStiDY7i7So9Mbm8tonvjb1RewHQErACy7Z2iUVX6NaMX9hFCsDt8CByhCNCmUy8",
  "key28": "5uJxS65k5SX5Mt4sekw7QUSdFnhexQmQXikeSc2VA1vH4L3vfA7GoxiPLMtCCgGDwduQ8QFK3XekgCDyThgFHR3c",
  "key29": "5ZYaSE7KbFHWLzLWPsLxQUXj2xW7uFoWhmYQpFtz3LxivgVhxAwc9EAUS5vkH5ZS7HDjrZisXN1HMQNQW7RZ1kY8",
  "key30": "5FNBBF6nmcrDRG4p8fokmg8v9CTF14NS6PfMYs3RU5Rs4X8En3eyGLBqBgcMyJiypPTJDDLbdJhjzSA4TLmMDbd9",
  "key31": "dsWmjTUNMwxm2BBQWVWUSyLF73bKbZiv3wniLAfaNKYdF2SPwGd15P2gq5EdiWTjgEzTxX7w932mTB2hcpBXDVG",
  "key32": "52UGeoRfuKB5PrXXUTp2BwmJPFD1XJzRGsAAq91AzMCcLHbU1C6qdnGzmoSGxgP3p62sH98xagnn7ny8hWLhWmoY",
  "key33": "3RegHReRYU7rW1noT6HRHzLzoH9WLFu3FbCYFCVG4UruZw1KxvLuUreegzFCHVabTqfCfedBuXaLK4EUsAS6Gn54",
  "key34": "vvZMH8cDXBDcJmRsJ6xi1mrbSFbGRtGNSxt39kkRrJZoPXJqtoh4LWX5pTpDPSMgBVvqV17z9ATrDMfT5tHSRv2",
  "key35": "B3xgsgKEjXMEimHHb9FbQLnFmPCbtCN3P1QSh1Jfnk8mCdg4sJc7pNdmXwoLc2bXgkNHufqH61scmsq8nHnBTtj",
  "key36": "ak3D3zBUeWhP1Vq7c9Vz3sL5hvphKaxKttoUxZMAiaNMDqUvF9QwdWLxba9GzXNP75bErTqGNpDrfWdQXx5z4BJ",
  "key37": "3kAPvJKEJ13nJY6TKP7RCBAU8vW2nBWFWurwbLMcTWaSQpyXg6XM5KSpGLK5g8EXmASK1jyfMrN6MX6ZnRvBQE2E"
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
