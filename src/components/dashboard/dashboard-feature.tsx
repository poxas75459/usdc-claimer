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
    "2GAnJQWuXoucCbcYNYovid3CpHdyhfhaEuVFhw9qhtiZV8cm8TyVTMvaxpu4JZNnAtDbgoTpwktSyyCszpHzpRff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fVzvq8dyXypVADeWgkutHz9XvSVHfMMNLCgj1GShsHiqAUC7x7A814bcMPUX2hcLmjvVXtnhV7rwNWdVS3FUX7X",
  "key1": "42NwStLA2aDVVAvVTYUfoUrhLpK3mFtjrs8qc9bzuYbT1BfugVsnhHYm2dS2e8By6pz8XeDgJfTtnEvXj8KYnHbM",
  "key2": "3nAacEEm6HdNV5dz6qDwn5KnErXJCHBWPLx6UWAueAawWg4hBDck5QHWu9TKxMorjQaG3GiPU2YEwmAEWRC3YU9P",
  "key3": "4SgVe24kpYzcgZ1zb9roDMwPAAZhbQuzqzCTjgy8DSWXvXQ2KVcxXRY8WTnL6euobYH9H82RtMsTtbMmK4wt8TX2",
  "key4": "4QqZduJwygX9i3r5sEZc5XuVwwacEVJ4Xkqny9un2PD5NNTnRGR419u6hVWKButAK6CYq6jQkXXtVpMe1A1f9Apf",
  "key5": "3n5mDJuQ42UoyMVvznAz4MPP9mUY5YvVdoXHSdQYAdcsPktpFRgVTaQA7jz7neFKfkD1Mkm5gTgq97V5A5zrKysq",
  "key6": "2h4BVVtWmQYwABJ3ojSRmKDSLd6ufA8d1uVovCb3FbapXYatxNhFwa1coUxK7cnyFQJCrRw3A9BLW9j64u3TEPx7",
  "key7": "3bzE3FG6xPqCjrR3oXmNCdsHxUwCBjhdtHpFjFjxRSVot8FsoJZ3VxcDeaBLzaTvpM98puUYDuybpD72kHHo78Wb",
  "key8": "4MwrJuQRDERfLMX3h49LKesEapLZzibQiaqmu9GEGNq9uf2tDxaQt6GNgBDyps2aff1fDPyauihBxrSJhQNXqgci",
  "key9": "UmuHPX6kSNey4AXmSJVN2q6AK2Fu67bp6SvVdFyBpQ4ZVxARjCLCJLAJQijkKBNZbDGJpQq3kzv8SNiXPgptrhR",
  "key10": "kVKNUkYkAVrBjauFED4g74MCSxrU2F434vLJRU3xK3EhJFAbwqwQvokt4rqSZK1HHVDwCL46QK2M8uRibpCuLpV",
  "key11": "4UBi4aoQenQhNubYvNVuyeFPLgYYkgsXnx9nPvt3bd1mLxLZJ8hram5UQkgPjypun3E8tM3DNRih9du4Hgo1gm2b",
  "key12": "3kDaoyZ6V1W8yMdMyYcWC8NYVHLoi4WsazehF9SztrTjwq7YRbSoWfHRGW9YDqPZchu3V8DbP5S3QnwQWVt5mAmL",
  "key13": "4FJUVQPJVgHzLcaJKquMHU4SYxwNJGR5SGSJU7wBeKdLK5X9uduzPrZppUZ9yNPaZ2mdHPzspRyN3aLWke3bFFA4",
  "key14": "ZY4HRLL7nSN23SwPqLAsdSvdtcWwqN2mAPxP1KN1vG2Xw54Fs35c6jDxachGPRssyr4DKayRT9Ft47M2t6zZzi6",
  "key15": "4Pgqa2Ak5Hkist2dUg8MUqsYYoiofisYe7XZjbFJFuiazmkR7vfpWeycTiTTma9h2EZtG7gP2DJDDVcv3NnuK5LV",
  "key16": "2tUhauoGrE6sCWjZR984XcZps4WVN521e3GrEmUGbAwPmUNvBN8acwqiLJXVQTbkR8dDxm5VrUgTZtCjuFyuEwWP",
  "key17": "454kWiyQbTis9twcJijuimf3TRdMdBNbi8SZgQ1gLxkAG1jpWYqrDhNDisWXh6GrN81srzdAoxMLUPGhCcgubBj",
  "key18": "5GAsa7Ek7DDf4gNkXtEpFw4x6ostUyEeJGKrJeKHNh8arQMwh2PtoHuxuKV3HWH7se18QJBpRYWzDn5jXmysoSFJ",
  "key19": "o9zPtQPw7aGrq8ZwMe7gMeJb2wdXz31cQbGXsPS7h5eHg8bNVj2KSwFgX9d9AyjSRJk2ywF7eiRZevxpKqMgfr5",
  "key20": "2n94BDTSM2AZG8BxWgNJb6rHs2w1tSqRd7BLfGANhWswfXCMVek4yhgBmBPFLNyfh7xozUnPHc36gctCS8Z2EHd3",
  "key21": "59euq35EU6fCj66tyBZA5yGm4x9CodYKnqz6sAGkDAGJJ8e61goozwYDxNPfWLQeHtAAfbSoyMcuB9nWdiGjxe76",
  "key22": "5b2mLT8zmh5CQSd8YKxguqmHT8CjzMXdwQP7XHWqUCrLny64MEHHksYzaKhvV7FF4qUfwuiquebBP7WSWGn6EsPb",
  "key23": "63dGFt1KPnFdovhZzvyWG3ajCv4V5XBsvDfBq9DSg6cNrJ6aByvYxirkYWfZkwh2X3ZqVATaXqyJr2SJ9g2FS7jW",
  "key24": "RkKCF4qouv28ae3ZJGAtxSg1fWEVPxbYPM98D7YP64SqYQyeJBkSXPGCCQJcr6ogiSvcu8r6GJX3DYuH3ZsGir8",
  "key25": "VPbH7PKHRfwb7XxfrZTGGtvxbxsqrotZGFbBMgPkh4LPvRUPPsseVrPQphL3WYdpe8NmNenyd3mivXquAhmgQE2",
  "key26": "3sDNX4mrFsPYRSoZucBmNFb2qaXZFD4B32RMYCgpjXj1jFCrHWPoYCUrVFgX4ukg2g528nSajvhaNfWE2U9uWbBs",
  "key27": "3ff5SBPX2adXmn8tsXmMZE6pL3gH3eoNzS3QNiSzwboXgmNco6azFc2C5ozsr6Dd3LkTMxF3ezqzYUVJhyMZjBZt",
  "key28": "3u4ADotrkZyPbJpuVFXsovD9uZYygzDg3V2eCYzMPkdTUQEnZVYMCgEK8ypqb6pYi34vdb248xMJC3pJhQfQcHYX",
  "key29": "4cvXaVh21fPSLTbdtyshjcWPbBGwiayZ2QkcRDdGpNp2cMR1eraLpDBaKfkQNTRJ8Z1G6ZXmPMNwjxT1HDZxS7qJ",
  "key30": "5hoy1oBixAocjCDx3B4QecdGoP6oCWF55p6vMB9WPVbevJR58khMQ52DHXvuwD1WqFKyvGiU3ax1oyoQwxDh3gDL",
  "key31": "3KtbftW8aaFdnei2sa68MfbL1QbpvqC8FEk9wde35cLzY8b99Gz4qSfD6eiSEhdWZf53x8is9DXQQdmsZoDyVFmT",
  "key32": "2B7sBYFyhjeqV6gunQbURpJ4F1gQb6M1M5jDyCPKVW4oniJYR2YW6JjcS9DR9idbh8wNfCML5FoQNA6zGXh25Pyg",
  "key33": "36gMcN7EZy2UbXLtcVv2CrSeyer9WbnyKm3f6vUNsZ7As5g4c3Lg1DeD6DcBDwPpPrPVh6Mqx4MK2zADXixXi6sq",
  "key34": "vt2yfc9HEShrR3cRJRKD5e49qNvAkg8b9jy4QJ2AGPF58mwyrAx68B2kUWDuiSqq7CALutPzf3w2EzPjSUc68XQ",
  "key35": "3wh27SaJAZmKbJpfFmk4zXtEQJk2zy2aW6w1Sm3krdS8DtPhvRwbXy2D6C1SWtDmS7EPBiZNFGoWMy577hjfSnW7",
  "key36": "o4wwiNRgDgmU4aTEJ2sZTwVQ64LL81CtLbeESjn6QDZHhQNP38X4x1hTwyppAavWrqUeSpnj1FjQAgHGa4ysxRu",
  "key37": "tY38LJyibcreF58V6oJ3oPLScEYXy4CsLFCgbHK5vfL4riMi6sJfd4zf77W8VB97JXm26RmxLQt9asQKPiuAGgi",
  "key38": "R1fi3W2zyK5Peg4NnajZheqphDEJWC5jx8ZbdCk6JH4UM5r8YMnLcPbHerud78VmmTe4LzhqY4dE4XCNx2e3q9S"
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
