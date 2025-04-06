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
    "4D8qY3J9THvQMWv8V3udbqDyXK3KjLAqPo67gu6upbP6GdadiN5MGrYtDegPK4XAjpSjwEHZ7GBmzDSumZgm33Q6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AJUTvHZceFQRyYsWwBJ5GUEhoRTZCPwzNb4bb8fvwYwuikTegRfMXR3XKEYgwEp4g81GVVJsWWjjxK1YZUHPZ1A",
  "key1": "4XGZYU3BynHMkvegFQtZz5joeVY5BFbUZMTibGUznSzSUvbDxHMmWRyTfC66fmA3ecm4PibGjQZRLVWPVdMCwyX7",
  "key2": "3hALurBWCGrhFtMXwCUBVHyS62g3L3WfmFEDp7CYDMSsQUr3Gmw7FDnJeybGeoUw98bRQSsfsg5jXoRoVQvAQzrE",
  "key3": "3g1g589bq8LQirGp2EYqQenrddgTZN99ARg6MVH4y7JrFoEeKfTquhw5SPpT4yhojWo1oKZVED8usdifGELMRBoc",
  "key4": "3Bco9LGoC23vrLaLFmroDTwTawURzJ8969yFFbU6X6Pxq549Fy3WA2LChMoznFYZmCHfuxctPogwRWb3ThZ3kiYj",
  "key5": "5eKkfc84Dd12UajPyHmHikmUqDv2CuFA8xT2Nkwdrmtsao9nrwLuD9hUYtYGnM9md9gGAi6D4UPPeyaGHapeinAj",
  "key6": "5PDoGTvFdxceKQaGj1d7sccZ4Hkgf9hySEMNs9KTKef6iBwCvrJ6KMazy53SAgi4qXP4mxq3vwdY3zMUkh58ZBNb",
  "key7": "332KeZreqpK6hhRjVGKGTUNCh4TnEU7SCtefc1hTzHx3gMV6Kf6tzBqacWhbcgXC96J3ZBXVAv3GNawhhGCFLkB6",
  "key8": "4KyEWNhn3sDh3ivw67xHeFtP5SdURBUTfZewhjWfDmmj8zN14sEWGU3YaJkcrEC1aw4XESvK2QcWhk7pA2CQa4Mf",
  "key9": "39fNKiYF4G65aqyZ74GoPLjTnE5BKNhzdLvrhV4SRLycpDcwPoQ2RW3YsV6TfjWxshs53gSfm2dqw1yWbhEzE9ex",
  "key10": "2eozigdJTnuWjuYpZLXTWd415HM6mPgQTDnZCXcwJupDWfLmGLbpofMKRmXm91TcKReyjNcJot49jiWo5JAS2WQU",
  "key11": "2z5aEP8kVrRjZt1tePwPijWesFRmaAEjTytnYvYv8yiQxMpF6cwCtTQKHeGmvFdFJVPqVyxFBiXvs5VNu3AWuq5G",
  "key12": "3ptZDcBat3T2uPNb3juTJeSUqvu7b8Ajk9A43EjyuGHxf4jzkbAGoKugnQJ1cFS7FDmbhqacjJqHZSew4xdJQadE",
  "key13": "AevcL4XYp1XD8yjcywghBL2E2cEFbocHGbNj21wTe1DgHck4Y8gQwSH24VXitTG5oHLs39wgvv5QRfpVNNwAeSu",
  "key14": "5Q3bJ9XyvrBajirTe6Tu5M8PRcYhnTDFMkqp2BDKHx4K936HQkUz4b9RPszivoZs8eET5VRyMuzh3uqaXLdEFnJf",
  "key15": "4X56n1PYoJHhk8VMGQsobdC6ibsVWmQptWcAHbzuSzSRseZ65hNYT6JoLCaZ1cmepGQoKT4E2NnGoG6PxPFnw54K",
  "key16": "i9bGpLeZZMm2QQXbQefJM7QmdGNHcA2mf24xFK4H8PKiKs8KrvDAjhqRUxmpdKwQ6rFoMq1zoPo6DGExQ3bZka9",
  "key17": "5i4LA6nmqrrT8NhM4EaVdYUqGBb9XpVY8gYAGf2oVD3sdJC6uNRcFpCbg8wUKDSP1BFDsgCH59NbmSUXc1Zq9xh1",
  "key18": "2eZugvy1dt6DhtmnFzfTaDRUFjQaXRtDq5jusXKwo6DB9ZaCnRegpJjX4GRGppAPapqun4fz8jX2iZHMVcVzQ9HE",
  "key19": "4GT9mLm7zZp12crFdtDTM1hqq2RRtri8LJGpVApTcS27RHdevJ9qYz2CvBmwwB2LLhM19gsCsT1X3N2Hy4b2sz6a",
  "key20": "5cihczYiZTnKX4QF1fX8Euc6Lru1qiPq6PoBPP5AJ8Rhkp4a95giPSwNHfLvF1Em3uzLQNR5BMo3MpZpsUhyVqfN",
  "key21": "28tXfMibGjCzGyqrmzsseXn3AXHKrtXWDxiBbhnaFEFtp6ubgYD7Sugc4q4dPSP6no7PB2vcB9F6XG2fYkWuqVFG",
  "key22": "6kpn4F2s382uferjKAWWGwc9KwAoUSqKe75P2RaBDch9Cocn7GXtA9uaufbXedFUhVDUoUyCgm35ZB5fxchxkf3",
  "key23": "5RgeJbfGHcZodrhX148gGkjhfcj2PdnqiCSLEgue24efNij9JmJE3u61td41WHrEXcFNGHWU6Yg6iDpAbAswc4HP",
  "key24": "4vj5qsSYPrQUVog67VwWRYUPDdVsVhmprry1SuASNY9Zdzfrh28qRmpiUatWC5NkeDtQKAcu5NNtJ4xPRjbGcUyA",
  "key25": "je4UUAMHaoocLFc7JMB5oCMzUvVqmJWAC3R44c7sji4K96QyY5CTVM98bEQqGiVT4NF6FHqXh85G5CP2PwNZFwB",
  "key26": "5T6JqnY1pTvQkqeSwh4HgwjD2CTaFuMTPkkYPGQjLFqUW2MmsyKnYYsZ69DzyARpqFGn9RRJgk9CctMGUSfiF6Lr",
  "key27": "E3R1amiLHkifmBGhgi3PcK6N5LyN1WMKucAEQjoNfZ1XqzFdCD1Ny6WrzYpDStvEbWFPcAwxbt1p5YfAmrsrajF",
  "key28": "238d7pWuVzQhTDNyA9WkADrscJ4CWkAReMaQKPHzvJLq6hzhAFHBjcijLc51gVurghetsduAZWR35cZH1SUi4KUt",
  "key29": "3EUJ9L4dBJiojH6bCAdhgm1ud3Dy8qaVZkNRURVGVjQN46nmoLzb1Ri31Wv12qoiij93iWpqKdKzDstTeCdNpjMa",
  "key30": "52aeuJMt9Nv6L4QdqCWx5m6gNBSaHviJEin5ZA7JHcJfjs9oi1krmhbDuHEQNax2CryGLPpRKXqTwAqWdYPmzceC",
  "key31": "XPYZJzXxuHwwzZGizogcTqgFT1hNYZ8b3do7YRUA1HPRJaZKHJ6QDjxdqwwTzhp1yn4RcuYcJMDjATc3BqxVhQ4",
  "key32": "pFQfmPotk9eJw7WmMwyHtPyXTdoHRD8kkYczYsJyhh6vS6JUQ8WRQxZeXwhovU7phJS3LtKxZjQZXUmNihMxHW8",
  "key33": "5mmgGV9EUisi2Nvu7Qox88H1CcaARFxiXqcLRqxQ7oVsBtujtvpZwc7EbNFGSLhD7AmaCYXn7SisACij1tw7rggj"
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
