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
    "CtqrQQGqSiERYJ6MBo9trsvucFzasjCynT7qEotFo5WEAV5zyPQFjK5cbGUiVxMgtkrPXSC9tJsS7onx3V8Jbt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ytoXgrBwKWjuQiqdoBhCu8UGwyqDEccMAcW4b6Ku3DufpgKzdzciS3PKkMDPNuhXN8NAoti6fj91ZPnP3xwi8SR",
  "key1": "ZBetLEsbP37PY3BF2ME22XgeEVhYuDxncEAHQoGGYEtk9W9Ew5SJ2PVcTxkhEzn9wqzi56NJB3LAYNgFHrsM7vb",
  "key2": "1SUArHaBQw5gA2WKNUN22E3GW3FGEhPvPV9ezy9Nnpao2Ru17o6RRgjDg73cghFcRbBya8j1pLeZZ5mSEYyFNYo",
  "key3": "B3Tizk6jML3umyF1ED4Qy7pBk34DQYNcJwmXqcByD4DYZXR9CiU32CqpuALDgrVtQHLsbvUnfjPgBKvsaTThrde",
  "key4": "Jx3v4RCdCxjtzPRDoKR2vW5HdhAa3eEbW71fP8mEFXApkbFg9Urkb883Mg9oac1DEeWCwbnQuStUgoShXQAyhiv",
  "key5": "5b5LBJT3NdWwn8GJsZqK5GKLJG5gfWMUr9bCrTMP3c4JnzaeHS5v9LHbRnbHsJRrT95NHboTwMBPFAaVhd5aAe11",
  "key6": "fSq6iKvgcgx8FoqhG41n85Z7Rof9bzbNGXKmEqxtQ158gmRAj4bFqvN3KgNkHZbHknML8LFiXqRQjzqbZPJCAdY",
  "key7": "K73ZLc3n4fXyL6YMMoAHc2WXSnkbawMjBRY3ZmeTr7JHkJt8aTjqBTMvzpCSwAbCXo9dEeEy6a7kCtiDF9VKYjF",
  "key8": "4vAZKU5EMnzgxXUZxLJZvdvkAQfPwMMPdJzQr3mTFeot7mHvuxXQVJ8zjckmW4ZyoWUFVZS5mff7g4rf4kQngPo2",
  "key9": "QPuoECyMN3hvPZ5pfn9vwp2SRpRwQgrJDotmubACr5CRnio6DB9CN8PccFs9TPxpwbrw1qDAEydEozktDbg6vJe",
  "key10": "4acy6215Es2Xq6HdfKg6EZKAGYehqLSVdBPyL2w9iUBVRpQTNvPgWrWq3okAGqU9jS9XLTAqD69nS1HP9ps2Wib5",
  "key11": "KisPSjER47Ko5Bi6HZZmiS2VuSjqd5i3R7qqaLqs2ZASkDAGSTeJu8D26m3DM4ByPxph8pRzMZ9c86jQrZ59EMM",
  "key12": "4aBVQbJtav7ArM3CUGAfJZLgQyeiZJypmYG2zKqxYaNJMZTLSEzgoGqv3Y8eMJtsECxMBHBSEbUbNQCcsq4kD4Ci",
  "key13": "5Q8Y5VEj9VAEQwGrfkB2NNwffgj8RGFgcvqwY6qP4Vn9FGuKyL637jGU6cstAj5Qn3sGrXM6dh8VmQSVCaYGfkbJ",
  "key14": "2jGuwJ2zv5ZLFjm5fLcEVK171C1JKKgVHSUXvP9DzuXveZdywvbbmfLZamY2GJL5mWC5wqWnhoVGNbVXEQaT9Vp1",
  "key15": "2sDCHtg4GA5Y4WcRjmid5gKNq4wxdS4KsfRySVJWBF1kXcuhsCGZQxNTt5kAPnQj9BERNd1kk3sGsaWiLTN4oqE4",
  "key16": "4Vx5T4C4YDGeoQxAqnnSBkTz9VTaDcY3gn6VcwXthJ4sGRhfTyF6zptYmfDdWsz2KEAEYk8fwb1MqbXtNNPRb7a4",
  "key17": "SWZt3pkni3wkNfLcdzDZiQ58W9X81SPZzwZ5wfeB9gBq4B5o3oVGZTqPNFHcFHMrdX7MRiheTp7Ttuvt1a3gSny",
  "key18": "3fzLUebmkPXfs1ZcdGKvQmNwGezuKwU9PVLyudi45CASPZaYUMEQ97tzd7k2DyUW3SFTEhGHS1QaYAmKonSQwrs3",
  "key19": "oS35FwRfqVLB7JXhmavmCUHrMGhUmAphVCtjXf7jP71VaB69Lc781ayXVBzpzGfhmJbuwPhzMBVgTk8VTeaCr1V",
  "key20": "x2LQkEAWCKWBTErwHL3zJMBHAyL7zdCFaSqz7g57hfR4hqaFoeTuyrHBX38NR8KCS5RQVgcJ8hTJdQYhveshwpL",
  "key21": "6b1Nuii26VXmbfrgDkxYy9xWWVWEuAvJnMtaDubLSvJLH6j8DKvrbRyAxtToiW4yCeyQtqszxNTqfxPrmModYUY",
  "key22": "4Hujah5Qaci3NhboNnmPuoi3VdySfRSr8cqfFn1QMC1LnnSzanNs48y6n4H6uLZCSwrtbpMGe3fppsBEvoZiijjp",
  "key23": "4rLY9T2anYctWtq7GRiKbcavXbfRXxfzwDy1nQHbyHzhN4kRdVPgW56mRAgL6mTwdCz88tUkB68Au5woQn3eT5LF",
  "key24": "66bmmbwGubwbqzCUUDNZ8m7vaBjwmA1fA5yxvVxYrs9kANE3RTKPPNgWHQScZD6Tj4qR77c6da52WZ58oeX6DaUv",
  "key25": "4Hhjh6mzcPZQRieCDNjzDFbNjkonnjHSYQyVEAEnkwia8fb6gz1wou7MwFtyZwPjLJaGHhuJGCKWC7npvmvVMxtG",
  "key26": "3cC5qDhG4WXzy6DwodDshrbHPbW2717VqziB6oM7UTBasaAxxbq6F7meke1oc6cm58tdVCqBzGh4ob5VwUNGB6Xq",
  "key27": "5ZM4PnU3tCn1JXr8f2MGsFzV4Gxn5tv2mvEEcgKSZwZmuwtLqbhY5WsPChKpuqTDRcNoHX6UJbPAmQK7UWVWBq3g",
  "key28": "5S3Y8Rek9S1DxwH6MWdr8RWbYCDpcH9smarwiZHqhkHmA6QbeSiABNtxrQsMBCHVXvF2ed88mhpuXD6cqEjMtPL4",
  "key29": "2PiUgFJwACQfyVqTxeNkFZprcXACCYem2uCnhcR7wEe8pTXqMhJQVENV1U9cArrNTZkTVnbtggXNwWVtKreTChrG",
  "key30": "5Ksy3WDeJWDDJey4FnXSww4iZriZw5c9nnhCExQgAQ93MWweXhBKJ3DWZZMiwWQQ5XAj7tKrUxLcKwQuUuPozU8Q",
  "key31": "4DXB53rTy5Z12VgmRoyCUUAEF415ytQxiaDohpHEgepgJUJzi1641TRTvVwmhiaauv46Hz8ebvaf8jhF84uACpbM",
  "key32": "2Tbakq2yrV6xfREev5UXjNrgMiZB8uvvv7DQKfuSKr1a8CNJGLB6qTyj7CSN68uptxN5z9sHitigfLyPJDryBujT",
  "key33": "4bid4Az5sDwbbHCvRTrYztgfqZFqutz5JpT4Fx4MKJDTvwbmKfF1P2Ubh53ivY1NxyffsrAYHe7hf93QVfZ12nu3",
  "key34": "3MT9KUzDgK1bxKzLJFNTS4h7sA5KidUHXguBWmsegf7fGXaEN7XvXK9Lr3U2mKaFrv2e7dBZbsKxJ7Tf7MGfEUQw",
  "key35": "3fq2rxKC2f23A43GagRXFzxjfFZY8D8ZhGoyUjv83fnrpWxL21AJs1Ddip33ntrNGzZK2kbZUVP7mrBDW3driX1h",
  "key36": "55QCu7Nf65PyHtdHYN9PR7DuDAcroBsXeeChfMaP8W6dFPiMZ1u8br5eYtoprJmpYUUwLWcwyMsKxh7RYfdohD8J",
  "key37": "4GdnoeXzVUiYx7uSwLSQET8D4KtaxwoRgq9Qp5LrGat6YEBB9aTwmGRUiWszc6wJVBCSwbehhuheXGF8iaWRpVon",
  "key38": "5Mx7q7KwN7zHbbCJMhWcYAxH8MWom9R3ZcmanHRvs3F97Fvd4JRkHHECeGq5xH6kCbUfcv5397LtQ96uyGE1UEte",
  "key39": "3BbFLCjdC1QCaDEb5XxeSBCnG8NKV15JPsawQSdGTtxpu7Nun4ghgjtgLFkjGTKUBr6j9h4Fy57zGnZk491uwrgf"
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
