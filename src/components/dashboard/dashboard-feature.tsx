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
    "eQzFrNqE7pPXnVAeoQo8H7w3w4b24jrYxuhJnuvabhEWvJsES2U212xto4aD2YqatpMgEgRRSHDAWUMBsy8GjkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "541Se41KLek6LidGmMVQtNETUb1SCjVePsrCqtR5TfZsGuN3jyL2EDHwPCbjW2X69AqmiiUX2M4rZ5eenUU5iDzy",
  "key1": "56psKg8PLENp9EBwLocsv2hC1bKe8sYKACW3JjYuN9ncMiELVVNskfKbwXvsKTENkSMzRxbLjUkP2tTv4ZVmXHk6",
  "key2": "VLYx2CyerdMcVc5FHM73SkK7zSyL9CpQbpM83891ff5BDt476sjubzB2aEQFYYXa8vKSJTtW5GbqYMRR67cw4wt",
  "key3": "x3PKbyDfry9XsCNqQCHFFtvBzqoFGZ8jFNJL4H5vxMHoQ8EpDtRf3Pe53M5n7yrTBQXs2WYL1zYDuGxysekbYD5",
  "key4": "5hTjoyKVch9qR7FNTM7AhR8Y22y5iSeKtKeSC9UEEe1K8S2r6MpCXwyZirPH3Ss1emvpmFeXY9c1HbMLc4BvpJW4",
  "key5": "2V25mGcg1yXzvXNyRVSZqH93Hc76mvWojsHWxqcBtaVCXkh2Xvkv4q5dGxmq94uonjYmwHpEeiBwksUrEoEKzytM",
  "key6": "2MhswKdGkbCAyFPKE1x4nbFQj3UDosHpWVfcceikbzbZmwZaSsFVRYMebhy45jAgPgkokuCVfBcoZ7UXS3sgTajt",
  "key7": "3G8FQewXF8FN5TzeRWEmcd1T5Y8AT6TjQtC43UCzJ8xFm9xzycdmsuXm3JWSW7RhweyqRZRBvugTefzQF42QPAEm",
  "key8": "4MuYRSpQekzQzbtRiRHt994nEXxNeMGuWibHHA7cB2qnLB9jVLntucfJttbZUn2pbQZeeB7oXvksSUQDjSfCRTBm",
  "key9": "4DwCuFmqU37yu8EjCwdEXMf5pWhHvykAMY7idoPXtwR4f4VSJSxkheavgJuXXrGTjAv568nnNZMR7rJRudrb8zBw",
  "key10": "2SXaB53seuM5ARK4oJ1JM24N7kG26g2VWMjrTVCKGwdgrJP8u69ovTUb9wNdY3m2cS4FfQ7VaTkwqLxmb7xBMZF6",
  "key11": "LrCj8kHfAn6u6RVu7eKw57MVpN4WANLc3FtrbzLjUvQY57hv43FnMw4EhLPkSdeVALeXgRr5nZ1mw9w9Qz3LypU",
  "key12": "2yKEK6qHG6RCgPPLoDjrfTrdg17DrKF75koZozJjgenAPtTxwaUTef2EtFKUbadJGXSkGZ8K7DZZdoxMBW12o4gH",
  "key13": "4cmxZ8U8aEeB5AxZUdLz1nBiJFuG4UCBeuBNkwDKumxD3MKR6cwgVxqxTSjDEjpuxgd4ckAapzgXkPaa3UdVfaVV",
  "key14": "5NQiit6MuJ5zcJDwGJAdHcxzNvjjYsM94pvhu9bNo5oQYtioCmrV4FqTvQJThac1sYLveyETHvf3byMGnLraS8Eq",
  "key15": "66ksH3ovaBZE2jUh3TV964p7Sg99ZcHHNtcmEgGHFc82p473JWUkdvxLRu8kRsSc6TCMvDCoVNNZk3eEWMcMCNY",
  "key16": "s3P8Rj3FoGkPyf9QT7JHf7sj4yUTpAS6pk3D14dGNHx1owdWTHbcKZpLuMXmCdFN9mmRkyGdSrtbwwUYxJsda8D",
  "key17": "52iP2WxJ3vmEL8TR1VcehojcyfMeF9WK7ZPV8cYkicsNieiaacSrDHJojuNu6roTveSLDBPUTwTu8ZTxnvUQq1Sh",
  "key18": "2CKVjRS6Ch7Sr1nhN6B7Yju5P1pbaw2gDvJBGxUeS2VRkE1wATPJmfcSp8GgSQx1MDpw3wyFLEB5EqEJuCrjj2Mr",
  "key19": "63kSQ6SQg2MEAMz7rmbEk2kwrqqXiCMgD2AeNBe3KTwL3d6JGEgpw7moCjYxz2d1ZGBT1vSMFjnEoTSXuHDUpoBL",
  "key20": "39wQSJHQMDvq85ePg4ByxYcMZK6rLK27ZpPH8NVeR9LunwbSZbov3sXHstCNeeC9ZpbqEbm6k2gxxWSLtwnenP3u",
  "key21": "3yYQf61MvhtaSNdLFFuk1TPru6SLn1ZTsuT21SdkYbiKNtKyzUbfCinKMq38kF2y4pyHnfQKuLcLnfb2yWSsBp1N",
  "key22": "5z9tWkrJ6GUeMXetcQthj9PWJXY7vvBhceg9hE1n3MnnvDHzpbvGtEVUt8jNYckuHvEss3pUx9P3MPtvFuFgMwg2",
  "key23": "5yHzX7DxQcet96TA1WCvvi33qwwzvdc4p4Tap4cXEtKnFviJMLrVGfZPjf6d2QPQ9jdAWLxC9VDh2Mw9nfMk16PV",
  "key24": "5DM2EqyHU8j1JzdHpNz6WcU6rByX4eTj6ukitgKw42Ry4bCkUSX8fE99vMyXbrm6f4eCXnCspN8QEJN5FtJQR8pY",
  "key25": "ukhQD84bRbExMHDwFn1N2izyZziuvMBwgVAiYWXSfGifkH9CA7ZDjBo5iKE5ph7DW4sEH7Ce55vtJuBHGepkKp8",
  "key26": "2Y7N8bs2TZ46yp14dgAoEPqnAd5fP8iNjupqPwmPggtpVyWVh6fiyVwqnuyYycf6Sv9PucARVhX9g8JNPcw8VoKX",
  "key27": "smVCYvhwPnpBRLCpTjWgKppUijJXbgM7QfhCSFbjFe8ZPDN7TS8FdY2P3SZ1q5xDAq2oW5XvPv4qbS7Kktn6YvQ",
  "key28": "4ZhznkL733tqfU8M12SiSfW3PamfdkGNDdke99Ei3f8VesDQGxrL7h22CuS4wvJdoth66UuqDjohWmxc9ajuQ5Qy",
  "key29": "5HLE1jjkcsf5axpUqSzKcPqFU55aMyKU7wnx6U1QkwZEwPhb1XUrUqhVEM9XAwRuJ4i9NeGtKT8K4KSzpYW5asNw",
  "key30": "2Cn1dVU4UTADnzDvA8Y5Lbdod8bDqDFn6ahj19RjY8UXnEobJKw4PXeryhenQ86Fb6KH2A5du8cM5ddXw9P9PTbg",
  "key31": "3nqrjRMmshBSqdn4TqopfRwvUVsTtnozC8E7go7SBwC7eBwBLD4bECyVDB8ReNPjcwwnGHL2KGULRYfj92F45Pt9",
  "key32": "3niESxDeVvDwpzHGxr7N2SLtxGdL8VzSzzVXvKDfpx9FPkKy1fMCUzUQhByNFJkFFqN8duZSHtCouW5iBQQmCyfF",
  "key33": "4cFrDisGQHbjd1fFjLNFvc1bqjkE86qTqjHnG7ajTfs9J5kc7fNZB7RWzXFzvKqq9ZiuhuSCHMcF5ipBcZjc6Thg",
  "key34": "54hVZZRGvwtAZUgpcUHTjAXtGkAF24oAHkGKAjaY61hDBerX6MwiDcRWkXhRACzBGFDeQQpRoaJKH5NUbZHHe5Fc",
  "key35": "fTxpkVoVvvEyTnwecSFrYf7fBvxtPKhtA5vEX1QCxtzQfdAT7S8q61Y32eMQSWy6oEzVmdCQFm9gxNJVS19DEH5",
  "key36": "37riGNbsn1pyRwmKmEd78JcgmvuB5SWMd5TrSLbr3evJ8ruvYzjzTfnWoPTgevpE4BgeBivzKgTvE4eY3QxsZTTY",
  "key37": "5tCWTmmU9qGVJbnhoS3nAskkSRS8nArF1ZSoUfZFtbrVPDkPre4wqqvhgg5V7VcUHsKFWgTyLy7QzWw7zL6kahW8"
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
