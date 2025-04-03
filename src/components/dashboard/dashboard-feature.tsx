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
    "2vb5nbMY6Jfiqu27CCdCvXwZQSkKps2tszLkdNu1HgAeZreDiye438VDtMyLoHNFJBiKVEHyrj8Q6j7KazsMGDTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iRg3T432cxtCUWs4jp3JCxzgcRWqqZsoCPumnVYAGr8wSszw8PusorbY24AQGnRqsZY5dt2sPC1ky3WfCt9rnfS",
  "key1": "3AJ586e8NRDztizn2J8MniHnydMsv4n3Zcxf2BRx1pEJVanvpj927vTYRVLtDVFF2ZGqvR9h6EeU2maPBp81Kn51",
  "key2": "VMkQdp8iGbBLkzD1ydFojNMouNd6wvLxshgAWRfEgmPjVtvkrXqpzxibpLG2LaorvGPM8FmXoY9Qe2FyGLeMxbW",
  "key3": "61W4hYBwD5DKkuWD94sUfczvMgRXAJayN1nQoUkPdNDDMf1XYhqLHQjVRPsTdQHCMCoxgmTWpJcECjjfcY6kkdh2",
  "key4": "3CfepND7S267XeYp6rTwKjNHmn1bU1iRnnV99i5QfnQqgbWGpaXhAgTvGUCyYGn2NUX1X47Tpta3BFtXUA1pYrRL",
  "key5": "4PcWUnxxJ15pcSzBqCgcpvEDKseqU9ngNA13F72Kapm1647QVXcjXxpcQHv2DbDSH6qkyyhhQrC59M9QwWB69MQw",
  "key6": "4ZD12fTEMi85PqdqMgTXBV8YfPpPn1kjYtK6ckxH8dhdHvoBaDcBBxGRBGArkajPMEi149hZDje5Meq3T8VCboKf",
  "key7": "3B45N5Af6QuYcLueq9Dtctujksvi8ete8rr8wdTkRYLtsiWEetSqj6GX2Zbm1jmFbXVAAfuzEVHJisww2ExmuWQs",
  "key8": "ZNCtTJ2u5Sd75gBewNRa1UQAW7H3MjHCVxTEBhf3TDiWC2AEBpwbNKcMw26341YV6zb35Zcicq6vuCcoSRBSwUr",
  "key9": "5PygFFB3iy9VB4hmRbfLEgoPLpaZWoMcZbynGhHN1k8JUVATXXwcTaRhDSfghVrEB2gKWGNTRSka49jx2QiZf7vV",
  "key10": "5qwUZmsg6ZC17JVKz4878oBiPLqKV81jCDrE2xYVvq5GWwcsMvqeVsK9kfgse2Se9uNUqskGRyqB3y1V3twSWTJG",
  "key11": "4e6soR2Xnh3Aqf56YhrNkqYKtHkuVXuwgj6bgNAzym6v2ttgq51mono8wGVFE33mLyGzXHdeXj5xLEZfXw7VjHWU",
  "key12": "tKdAspWtD1qgem9T5S1SQYb1M5NtfdisC1ouCyzNYRAC8LtXDF28KuQ4aCWGptv1EijnH7P6aWU966GWfv9zNge",
  "key13": "5Pfy2Nez6aC5TVGTyWrJXi4hL1Kwr2pQohH4CvjL4gHTj996CgYBAyyqpenEp5GdaJsPaa3gtz7zZTAWKZfg9kiK",
  "key14": "24mAQ8j27v9KQBtHNCfXi5uT2x7M5aanUaMptge12CRewc7vzwcWAYiYso1e1UkwgdowYaL1Gg9XeVXVYkw9pMPx",
  "key15": "5c4oagnXmGsnMqapM8c1t1eZhq9jFqYNcXzxEQoqb1ZBUcyE1CJjuSPZ4KPEwD9S5NvJtmTZyndPA9ePKgUwDjYu",
  "key16": "3nCtY2TpxFsfkYuUUyF1BiWv6ysqSUcUkPCm4R377YipWzDJWjXuXu5uM8x35jB7WDJHXt623xDqXQadTeoKBMr4",
  "key17": "62pxsLe17SKj29fABqspc6Qv4md2ahAA7hwXwjix181oEAswMpiRSFPC2qmA7UN6UkvoH2PhwnPyS3xcVGCB5rDc",
  "key18": "2ZM5kgw7sSmvemL4gBf4yBo9ZnndBJuVVQnhmg3PCmeFj5phoFtPiDixnL3BhgQswoRQsrYRsTQfHd1Y7dK7QdnG",
  "key19": "4MbKFixf1rd43xK1x6GhK122FLRhCLf3sAHmm9QBMEFAMooeGDPb49MdStdRK6RmBmQPP5P6WKQ8B4rgXf2iMG5o",
  "key20": "5C9You2saMjiQnmuUNBuWgwJ1RMgBtKw4HQPUpPdfamgD9BRc58QEdQ275nK3m6y5Mcmiank8PN3mxdGBxkAAZqu",
  "key21": "5CmyoZoTVrbqyiXsjB1nzQL21ypUXB54LK4AX2pjFCkv6HsimViGhdiYRAdmTUm99jMdteQNn5Pz9FYhuEqbx7Zz",
  "key22": "HAdWcY32JHXQF8bHYbxQLH8Za9rqFiKfMJ8z58zoUqevwgWCkCKFKb6wh42uhDPZ87jhbeUDSKE9fpC2MfNw4Hr",
  "key23": "3kH3tBELwGssRGV7PYbd5QhL4XdgoBKbNgkodCCyrFZzzp1yoGhdhmmmUbx3cgdWpv6ZH1AM3AVM2TK9mCr5Um9M",
  "key24": "5Hav8mCkZd1ZNUpUVp82E7sAVXGhhHUbkds4iJ712TmPKE54d8ygvWpLRNT8t1mMsbCyX1vN2PcZ8JcjWLD8CFFV",
  "key25": "5Y7a4UVhXU4Ytqe87Ko9WW13RqnCngnKkCKt1dnTGMFGqZFacbaFguHxLMq6izLRDisgmeAfY1GHnq4BUqZgG7z7",
  "key26": "deyXgnrddbLvN6rMehGVePBMBtuovyyRfp4HswL7PRMEJUwN8ioEJ82nBQzaTu1qdGCqu147uicRuxQH7cuTLao",
  "key27": "4v2Cobde7XB5A8rYxZG6KEwaHVf8SvSetjtBHS24zDvXZkPnCS4KwH82oNtUUExFPouMa8nkiSX6q1pFS8aTe4p",
  "key28": "3Jst8rABjTXfR3dYNAvB2rXXfR3yjAZPDsjxx5k2V3AwM86uwTPHVADS8Z5zxWWGqvsWad3psdiPyLjtbvowFNqt",
  "key29": "HZQY1hi1xweThjvpq9GNE7h17tr7am5AVqJLY24jecU3CbfBuGHciJXceFdKwo2nHCriS4dHajjX2BA7AawgchX",
  "key30": "SasRSr9Y57xWM3X22UHWieZ1L7HPZoAUaaX1ssBPh6CJHgdDHRaEecmfHzpPoHTRUi82zJXX7fPwaZpQQEHZx31",
  "key31": "4wVy8D1hCzosixkV9HycycSRRJLQGGzYyTTKjqHwn2LXjMmjCT759ip3x7K4GrCnbAZ5kcZ2kNgHcDPcEcKfqV4z",
  "key32": "45zUhz8ifzDWBCYoBsfr1gFbSd9i6YHCQ7z1CFwgc7ap59djZFgg1nqXFCzFWZfRVLPHck9zRjLbd4FCzjVA4xG4",
  "key33": "3sHpM5oYcwaXyxS6YerZzoMiBNG8rRRz7xoaSpPnAeMhbDREKWRrfL6wFkzPbp4JzhrLjUNF5hmrnN3mJgkDWuZA",
  "key34": "2p1rCJzQujfgcr2EXgDcAedrVy4ztyuqubrGE69WYvkHZNsf4eHh71jtBV2FHqawN5ZdskAhF5oUuTyEqCmgxAwU",
  "key35": "4zD1JLBGhRCX5R8H3eygeU32jWhpe35EdesdEMgaePMsua8SzaizYr8knRaLn9thKMMoSUXuVVwbxf5Pcb1HqMro",
  "key36": "5QM2egNUzjEDkqPXdzSWc2q6iEF2e2WKJvFv3e9aZdSvhscJmK2S4gDJL8XzUJz9wAg1cAqYpGkST2uaesNCS2nY",
  "key37": "2ZWZLqKApWEKKcuf8aspfi89BSJHEj4R8ho2S6zs4gW8397YyynEGpqfvAzLQgJUpQVV7QzC8FCwryHEL94XUyqz",
  "key38": "4aUfZt6bDSG8nL474uxssossovgWGSNyadBm5XaYH97tuYSjghX5SmoS4vyECMZxbJeHfh8rEYpbXSCNpMczSSZU",
  "key39": "4Lxo2SjQSFJD14kKC143GfBDtcMJKqjgFUvBVUcikhYypQMknLqPcrwZ67StKyHm5NbbFt1NuqEyE8WWLoiTNMA5",
  "key40": "2SpZgobxUxVrCVxR2bSPf7WpijPaQPoc1CbqriBMQJ9rqZY7BTKcLoSjk7EYKbKdXMEgpdgPMJT4ULgnZEYkke3c",
  "key41": "5B917VvbrWeEqVzPY5wT5bMNkjmCsjCcBqXih4TkcgThey1tbHWdvDGSQDDPWADD4USiXESDFzRrpTZNNKeMH9ed",
  "key42": "4TtGFDrXLjfKTD4XB7gLTLrYzsswioT8gtRHjPRsV2AtGLHv3vGkvqHLSXEfXxfebmfTAkP7UnnuFXH93DojhRCm"
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
