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
    "2RxJpXPvLkDoLtfahVJEmNeZvSNAyHPLPxX7k9xe9N8ZPtKjKKpWmm2TvZMhc2Zan2SxPq1fTUGu2FNsahzMszWM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FmhQVPU9QjQgAhNRWRcgmLMu6ZBbgCFev7jS7AGiRF1xvNEcAdPEPgpiyVWcXge4YbFWVPADTv5Xv9Bx8NdiYfS",
  "key1": "5bnK7XY5Dc9AGX9hrsPXZE2K5QPCL1bptMp6j5wEcHs9bvbaDEPB9xe1vR1YcReCcC6GkRA6tR8LdBRbPZS8TzXL",
  "key2": "KNj6BYQutdh6uPGZEHtDkytexa7hZ5iWDg7wqZ3TQk8XddYJoMuDBTomKek6JuABYFw7NWarhfG5pcV6Li2umkW",
  "key3": "eGf1vYdrVxcyLZ6xnXpEeGq5GWR3biBimtgEBie4GpgXBvwvMpQnmThA4a8eHH5QA14g1fh9zMxGE6jMVan5zAb",
  "key4": "2X5kVUepVM112w9oNDV5afK7wpEXqBAPDHccoJb1cUJb6axUnmw9TFfg9L8HLrPZKp7qYYD3Vt6xjLJf8UDH65x7",
  "key5": "49cnKKUf7QGnw2ABRfB7jJrhz9wZMhLynYALgYqeciWK3FCkUnMpPAMuqrJjJThi9vrDpLS249C3knn8x975nW9D",
  "key6": "4ePoemPX6gBiuu1egDQgoBk2FvD83W2TPQ5M1J6ZeLLJtBbd9QUowYDD1w6hpp5VtYESBnMPpktAmKctWcM5eANR",
  "key7": "4GmyBnwPPNoAVc5jA71666eBqYxXfS8h3rwVfLqNbnRU8Y36sbYGk7cHFG43LKAXtE4hS5yRWGmUJkcGL4zJLErW",
  "key8": "3ZCW4nai41PuybPXgXFfjBVG3nmrhzV9RReFUy5eJo1j4WJyE3JV42X1UJ9Zt3TsMLF8T1uRfvBw6beK7bFwLTs9",
  "key9": "2PqszvGfbZbaUDdGe5iu4v7QEzv6HdmVUcDkfkEYteq37TRhSR8VGRU5TgMDWMzkvyULetsTLRptvbJSZ63ne1Yo",
  "key10": "4UXbkJxZH5BnVvbfgmwbWmzN7cKcMF3P5thcm4AGrczSKQkHm3Ew6WNk34WjYSeKRv9bzR6hAUDrsjdjzqKbqfmR",
  "key11": "5yvSxPN2pXmNDohiJKiZUHH29RzN4vRWUc9zo4sarfCWY11NqJXrC5VprzJ5Qs53bJihNLVkDHBesGAsbAovzAaL",
  "key12": "3rGVrcqNjraYPh9nmDiwE5UWn65i2RwZkMxLkpmyErpMzCLqzwEiMBwHvfHEe2KuDkZQFjWG3PuDaNQ1CE8JFqsH",
  "key13": "3RyqoG2uryoRo5Ge7BZBUSm5bQXELJhq9UavRA5ZzX6kkhMHxAcw2yH2VU2C9zR18MrnVwhsyy1VWdBPkox1MTQ2",
  "key14": "4p4pQ1ySAyQGd3dLr54Qg5N63N64mQonBsrkCkEJMEA87GHr8rLW7Ss3u8nbuRCyN2UWCmUBLcvdreJdJNWhnKjJ",
  "key15": "3a9rN4mGiZ5223eSAJSKWEFvCoTncTkHQhsf17vm69ZTcPt321MR83bxVke5A95N7pctGR8hmw1B7ceeQ36ZWVKX",
  "key16": "5PHjhmvxtM3tByTK9oPvAin88FHiXHs7v13aVQ6WHbbEHLMcca6QrenDPg7aYGPXM7KqoMwdeTdZoaQLXJQZrdb",
  "key17": "58V44MLN8XuspEuLo7ETkUicq2921hu4eVWJqeWLdaaxM64GSMynBd5VYnvBE3dPu87123bFsY9Nbydd54znwc4w",
  "key18": "m7MYnQKmzXpwdxZghwkC5xM7M5jWXmkb3dFk7xrots3BUWS3byrNbfnDgjEALX7omiVwtJ45ELzYtpKCwGZvc2R",
  "key19": "znkhzAF9QAZtLeSePe78cxd8gUJkmerMLZTmD6VNUv3avyTJHndAfmfxyhWhYHjPduQ7fKkTVaiDgEk2PmFhqPr",
  "key20": "4BeBafiPq7jHU3x5Ef1qGAyExBJHHWnE8BkyYdS5EBmgkYb3ZEbT9apeFYKR5EFnSon9wbhUrN94bT3ZytJSvmiv",
  "key21": "CyWPpVgAUc4JrfdCBxBAdA4Cu8nAjHpbL2kxV7WmXsU69zWMjhMi8MfxFp12KYft8CpjWG5ukcrgvhW9KZYHrwi",
  "key22": "2qUgRxckG1To8qUpPZCeLnzP8e5m7HccRYZxYDKNEFTf69JZRLqQQRu4doZwvAHLm8BxzPEktfcNwD8UB21bQdL5",
  "key23": "XzcGaNtnJzSepL4RkfzgEbC7bRhAbtWPWd5yHSKVVuZTUtPXd9Jo8ZA1iD7FRNFpN4tniW6kKhVRbJ4f8yA7Zj8",
  "key24": "41Q7CFchdTvU2e6zAgQjLm4qTXDuUsRGsMkcrvmjESupQXj4nY7aCTMwNKar9YBnajhgqHchfQiH6yvY16pGgth1",
  "key25": "5wWDRcaod8u5HfCoY1AyNgh8fSci7ZqeZfiqeaVVqHTQGQA8SihaNHb6abjvTamr4f2XdCTSCYPK95QqrLU6GA3C",
  "key26": "5UVesVHT77YBkQ7PXNcdxgmcVjG4fAmJnv2PYZao26zXAUEWgVMbVCTr1WBKdjUDbXHQUcELMBLeRwRnehtafKtV",
  "key27": "28aiVAkMwbPZkFBYPRLWiyPWHedPz4a5EV6NSFuCSgkZXuzQ8SVPx7QhaH3aJASZqcF8gGUgVnJkyYyTzc6XtgMp",
  "key28": "3nfB6KZeT8crccxBQPPurFvrjamAowXtdoLzs7xbB4uWQsLRchLWYau1AGqpupxMytG2EXg35p7DjYkm5rQEAX4u",
  "key29": "4EFyh2gKo38jE2iguYHTJFZGbxZp8bXTdYnrRfnKzCuiTuGPqc7pXhgEwBKhg2wpmQVDbw3z5ZSJZkFEZPSUAasf",
  "key30": "2Tv8Uv3VJUSaE5X5vZDrja14MNmLptFfPouwvgupna1nHmJexBNhdnWwYX7Zs4pVxu6ZM8rMuJaKhc1djzb4hh17",
  "key31": "4fTWqUwZk1wRP7FBsDziP5pKe7MVwUuMqpQod3Tf8o5w91686WjZHdRcniPuHFmgJzKV5jU7hx6eqWxETgNy927R",
  "key32": "21d6C4rbxWvPFAWcWu6qeUPCsdTKGftnn2ULyPg8u3LHG941krjsPqGTDcGMCwYeMQthSGjNNVtX46jixxzeefqP",
  "key33": "DkATqUH9CSgTTKq8Q8HjpAcfCdvDamXoxixiv8wFUJmGZLhBWoJ9EQMkgzFn2sH99gH1HFPD5Fy1uBBiTh7UgjQ",
  "key34": "65MhaBUay2eYALbkW9wPNSrj2xWtApRVitxY97W7dg8faSwnLBFMKbqpzha38SBQepbYjBprsEMoJjZT5HA8GuRS",
  "key35": "5dPrjgwZiTiDgF9TV3AS5D6oX3YWWnKkyQBuHzmEf6JPSbXHMQFKzwcHnJ8EwzpYipdL4GfEDNGErzziMWRuXH2n",
  "key36": "P5BBEqXwPPkmMSWsiu39XpMEFDoRqB5m4QHm9CSsshsB6UCtdQu6bt4qMXty3h5wWcXHiH7SAZj4dGqsV16yqFe",
  "key37": "5wAUaw3FHRN1QAoFDAxsMsMjsM3tWbf4vtj67pFhhvRdPVEvsPU8HJzfvvKhs8Z8huYwRtpJBbizAB8zZNUmriHM",
  "key38": "5iTe9YLt14NoEXQ2UNHJsGdxFdAdtAnLGqtGU83X2hE6b2cqYZVpVbmKGL8mFLBMsgyD93HLifhg5GNjXKskDYN1",
  "key39": "4ZHoYHTHSBGuq6pUCWpt9Dfbvht65VB5K2kztrLWGBvHGt4cj1L8iMwbygLpGKnsgMJMXXYCJfSfoxQc9FMB2W9D"
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
