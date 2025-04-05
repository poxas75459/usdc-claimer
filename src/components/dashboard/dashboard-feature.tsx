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
    "AXNkJWx2jKj7CaG9D9VqwhD9d9XcQ58yBZoA3bc7aGggw22MVDeT68iCBqPhRNTFcmoxgDwjvq5hqYUv3SxrJCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TPksqhzECXZvZwuHehKqMZMU8KpM4JYNmryKRVzbSWP1xTVJdVrFNmXqfNtY2rQyM76sWuKQcDaif2JviRmyvr4",
  "key1": "3KfssmJwWEK79d48CJKKrohkTjJTW9v3ZyaaycN7xAwbZnpwuNU6xxABdbQoAo1TzRJ153E1YYcQeXQGoZtJbgmx",
  "key2": "4zB7nMdWwAzshTPQdpemKDJWfqEgV8pXaLrBafDgjJXQjxtrmq6LpiYMoSA72KCzY98NbHiuu1cBE39QwbJ2C3B4",
  "key3": "2H6BvV7PVTZzziSu9dGatbnuujytTqyBNaVGFMAicN3e7FfB5aUGZfx6SyeDjeHDTumZ4WaupYwZ7hp3A5k7ixC4",
  "key4": "kdw2KfhqD69dg9ZJeNyQhkpxSzsUmAGz4VymBdJGJTZsFkmDAg6tTmJ9GQQKVAfUrDLf5NR9mxpHydrovwJ1nFD",
  "key5": "5Sx6pQLgNz3xgEDvBJFohFt3KjfUTcQUFaYvJajTNMMzYVWwKZFp3QDjdKPi3Wh5yGWaadMn7rsvnRs4KqmZWVkr",
  "key6": "6SAo51Fyqgv691d52ZZfaEobDSppugftnqmzAm4GroqgakHpyYL2TJFTFrsdU3HBntGSaxxo8RzKpqqphFeCi3L",
  "key7": "45bMq2nJpHhjpJpiiMZFbu372ZLHTMyiobqXha5ksbdC8xZSwWv1TmkuZA9yGCAyjDzK69MX4vVXtVZtHKYUGeZv",
  "key8": "hmqPYWz7z3wpTxgWiHpErTVFhQmfBCL4jVwdXpAXXdSyhWqvLrEvmYJ5udkmAy6PyZiosRocMzGC5JhmUPLxQ3g",
  "key9": "3S3cjSQ5jj4fne2TbwhbzjAJEV3HUz6ajQ5CmsENJ2UcMQV53ZqnejKHmKs2YrCEtLQQzGU7YmsRwrbgCJpo7P9F",
  "key10": "5PfTrJTE2qwtKMurxfRnDgn4ozz9SD6DavSz6Zwcs7tBaXtQfnY1HRHzMDWAPhntSfBzQYFaPdtLgzC8qYZ7bTaS",
  "key11": "263ZonjueR5NnfgjVHHhFK8KnroJP6siJcmABL3iM9kv918bbobZJR319Nm9N6P2h5YNVWuU8DfYfGLMBDBJAZxA",
  "key12": "3uMUrYMDwsZfWLAteDXAvsii34FWVhYMzqNw4FT4UwKtDbBYHq3LXpBu3sfcLuPJfgcmFFXvQt1bYY2JavTP4KRg",
  "key13": "4YntBaUXTFoGFR4MpGfpUEfwzg3tuPjFBusXwESNPdtKoRywuTzjFBWVjAxD8B8b9soMEqaERCH15QoTGYJuYoxd",
  "key14": "4G1zyBMQghmyXp23VVTAUYXtSMoh5wvKT2w2YjhEJQskM8nbY6ougUFB2rumkSx1a3QVgPj3n7zdu47JXsD4qdeU",
  "key15": "39DvMwUcLk2FxQbnG7VoDZLBnUXugZH4gGSky6PZTUftmW3CAW4ebvXhnc92A5it2ieCjAJs2pBCwjm5DYKex6pY",
  "key16": "5oAsmgPSC78ESwY6znABGraT6hsmQtiNbfVXtcHGo1U1MAqfkq7ZMVA1oQVYaARL5cBrr9z6FFPa9AzWyFGm3eAu",
  "key17": "2GJvjwrKr4HWxyPqvMTUX8L6gKnmgUei7eG7mqJrhGDPQHLkUKEC2xioF6Ax5Sg1pmaQwLpZSK4PkwVgqkPR4XfE",
  "key18": "4AAsGZvVUKPbivuBAJ4a73SLitqYG6WDV4AcxGNgb2x7v72Lepako9SNUYbfnNwvwd2pFhyh6E5eK7GvsSZgoqYA",
  "key19": "2ncse3fRQYnNCzEdwSWiZa953vDuf3EQ1vBuX6h61rx2PWWZUStdLKCQyQn6YmUCZSRPCmcxbVpnKV3B3xWfn28o",
  "key20": "2PdAzZehi2DVL2ciwhoWw2AcB2SSTWDov4nRszTCdTc3wuNZjqsyQ1JBZDCXeAh9QnL6CUqkh48NnDnjfjZcqHuL",
  "key21": "2TP1XL1AWSYVao51Eg4sPdoekVeQ83XMQkgaUzmwMNuVfwYiF6wq3RKTbnnJrf8XiagxthBdJ5XgTKAGoUqYGY2v",
  "key22": "3zVMSykdBW6baBEFuav94Zj8XRFmxL9EyX11MkY6519VoDE1GDEbcKEQi6tTjJXRzXGopqqqsYvhEzAZ1hSxfPt1",
  "key23": "4EJF6fNQv4f5ztEtRepwbW4ZmvVYy8Eo47kaWiEUDpAJhYVoTwH7enz6RJXZhR47NqapTAphwGfHi8KDo9aTxJu2",
  "key24": "2DMubMsweA7cs8VGJgPhewQbQAY8FdprBZtR7argZfuPgbXZrY3F2USrwtxAneuydJQrFsymbvqfocb6sECXwQSM",
  "key25": "38B4i1DFUYQ7Kv2WXjkUXyRhBMYMhmAjqHv1XZmyqz1CMUzFvdVtgeGr7TvH1eHwrcmQAiyRCijcrgJct3CF6Sep",
  "key26": "5z8VdiafNgJ8a9FP2YgzX92hXe2cLFgCUzX5QUezs759mfgosQ3PXy5rgf3m868KnynYcpHhqxQpmBme3T17W52Y",
  "key27": "37PwZaEDtTHU2hJiEGxS1EZEd5dyBzar1SEUAqEogoRbKn9ejBFzMiPmjhJUbVJLfF34SAvLNy491zUUCfgef8My",
  "key28": "5qShYxnQXPDmdDyUNj6oaioahXqq76p5ok25fSFCZfShFjUYPez6H9mT1rfVQWnYHaKhySvEqCULeLmyqLYoiB39",
  "key29": "4CDXVLicTpTuW9M1s9GEfrU2nZofnNTW9dzY1JSPjXFJowGGZSbJAMe6vHysVDhjymbBKmog9RqTJBJs4wdsQg9d",
  "key30": "4Mk8W2J2CmijLs47P5z3bQ7BKe4kTAnvxhXPZtnUdofka4LW9JkU6BUwkL4UKfd8K7NxPZfZ2z4gosMrK72nzeed",
  "key31": "4D6PAz1c7UHeHr7RagQSpFNMa8f4P1B21dS5v8mt7LYR1DH8gGnN7RyMo7ry7eCCAB3WCfa2trTfnFSKNhS8M9H6",
  "key32": "2y4852k1HeQcrPtLyNmYheXpJbgGP62Bb6xbJ3qcUYK7nhM6rVnqVuC13sBPDkSSp9e7HNouUudpEsUB5pMLLNMb",
  "key33": "2QnFnHWBEDfX5JY7XNt6DmePs96W9EYAL8UzkXxJaipuePYGcqs836wnoyPCXPvbQgomUmQxbpQHBgMFpo6Hs9Bh",
  "key34": "5z3AXW1fHJKTy4Mtvdvf7MwM8ixeTVzfsf2MReHpcivCPr2E8ytoaGXErTrGvmCHTXivAyNRFKUVz6xfVLue2dCD",
  "key35": "821wgUuBUzWZpKHqdvaqcFJYuEf19sTnrd719pfMZnHGUfy7kd9Si1JiGzNEJPzB5vvXDsaRP3N89MhbwEAvmzV",
  "key36": "4Tp9sUxjd6JncswkdcxDDK4mmEM7Mkuf4tjM5frhMCthwThyccC8yjJtkwqEb5JR3dmbh2v5K4w4t9FP5eivV1Pt",
  "key37": "4rBPWR9GXdWWg1t3o1ZH13umsRMwb6vWv766PFQBGkytYXPQ19i7dVDA8SQEWtxjUE9qGyfEXZS8fhoiWkqoZHsq",
  "key38": "5izWg4yM45DGjUNmxfNiZqhV5te73Vy1WJspSY8PiSuWHXjZFhLen1hywWB8QJsZN6MQgqZ9kCNmnnpZbSMxG3pz",
  "key39": "tys8HouqzAC68e3UMag5RCZj6JHHoUKAQr1BBEhZx3WRW1nGtQhRgXkhnsiHphXgRaK67UMDjTt28mXn9PZh9UQ",
  "key40": "3dYXnQbPxc4x7n3hk51f819boYv9gmUzDtuQPh6aa1RZ789dLn6NY2SgNXR5BuGPGQtv1Ec7g5bG6CgZLXjkaVYg",
  "key41": "7aCUCg4UXpqPU7kHHkU3FRuNFvWzS73TVJqsQdgNPaWPc68L9Eb2gu352xBphcdneAHxZ9CHU8akLh2BBDo37qV",
  "key42": "2WZfEES2ZaTqHvEBocMhNF95j6vjJwxXGDjsiyuDDaXSd8TNgwjwuqC7sJAW1fxxqJUoWmmTbuLyEqbPewnUyGkY",
  "key43": "3ZNHV4qs3eX9Fy4aaLb37S2RS1vBs4E2u5iG4jjE8WrBwx6jv53FcqemwvjJz8Zka4X1q9XXnvKC2JCk3WqtkBiN"
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
