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
    "2LVg6zppG6KXb68MDHxwB1iTJMQ8Jv2i4KAsXz69etJrHPeSmYj5sZzm8qfdBhJ4hcPvD6vTXqLwYdprd8wGyywD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31K4zhMqL8KjC7EqtY3nCPwuYsz71rzgmfLAT8C323LZR5QjMsD5WTuKmgFwfMZqReAuA9XXcyDzNKLbWaNX1jM7",
  "key1": "4YZpvvisQtxeB5GnVVtgsRa7swHzR6TuUwXiBBE3pBoBdeCk4bfk6wgDmwSi8QC76k9R37ZdyZbtQj3SkdaLCJ6C",
  "key2": "2rq54MARvQA2yQi5vw2gF6Fh6ZDQ6ja7VnHPNS8My3uU7DD4sDWgDj83oDcKS2bietoK98tHLw1aww4Ef3kTXQQ9",
  "key3": "3P5PfvvnBHYc71Mo7vtxWjxSdrHVstDnnJgrqJef5tMm59pRTxHkoDDBMdqQ51g2L92WGVLrox2QMbWmx7ZADzY8",
  "key4": "hSWTjQkGcYNzpXWcQzESuj757ZhrvAsGCHdXb2yknat8ieDSHiDZj2ZNdq1NZcyxVSW5qosxj4jFywH4s56EXUj",
  "key5": "4CwqxuCFi7nuEqvQn4rdeqyDDTkN4XyPJCT3bnW16JJRznu2KKxJxGhf3LywKYwCJZAQEQX9WHUgh34ccTN6dDR",
  "key6": "3WPqe2a89hypXBeA8ZC5cjGZJtogGUYkxcwSUv1yw6rWA6if8MiADfFJi8Bdz8tbnyCk4qCqbwFZCHwBXNRzEAQA",
  "key7": "4TcDxZfxnHxhCwW1nYN1AhFfQSV7g7XayJABss3ZzQ7XGK4e1UbVRCjVJKWDFVHuWEwyBMBKqC1SDXDPaTr3XfJY",
  "key8": "48GWnAU7tvY8wp3JWmTnZ3Z14aaqmPddAbCaRwMF2Qm3BYn1bmqQPvqKKqpFjG4WmbLqcCmBasHWXPdMR4wEPfur",
  "key9": "4XWc2SdTQnsLSaCaLFAePo6VRq4MwEsoH6aDEhUbnfxK1xcrJP1GThTB1trxjkSzvdxABYQXzmzFuxt4zLLnuoHV",
  "key10": "2KhexpoDb2VqwYDsVo1nG2ZSrqgiV11fpRbPSGaHUYHYPm8xqui6iL9HojZcgoeF1TJKyNBYAVup3QBXZJyyqWdB",
  "key11": "5sL5BGEUJ1ePTkZpLFhXa2iXhWvJFkppJ12dLfsY6ZDJH4HYRezNE9h6jKSn7kMEKsAXJxCJL6t91GSD2KRVH6dL",
  "key12": "2p2LTpYcYBzbe6rJzDC1DNaMSDJP8ZCFCYN4skKmAJ6YyeuTnRqFCdDMEkzBwciK7qTJxSZShVs8VT6DEQ6NUfVH",
  "key13": "nEsK2gzJXGbab8gYhyf793Aubrw6nXkrfRL3WWY9ToY8f73Zg5fPvQF98QmWG71V29LXPjDwRhEYv5U2bwq665W",
  "key14": "pvksLpwrMRQFCYeYRWRTJHYkqKc8n3tf9FKpDji3swQyPhV7RGYmWFGsgW55Erxu3omruygcFA29jnM4Ra7G7DK",
  "key15": "yXjs5fyxqghbodU6FtC5wioNmwAWWcK6L9rwfHYEDNEUyPTJSMQDcVKkt51Hcb6gKCdnTriw65P8K1vRjVb8PAh",
  "key16": "4mFQgpXFZ6cu3kpJdtzwsJf7KwdJRw7w8Kq9ZK7eVgR7hGvx9ceXDmDCG6yRN4m1tek7kqz4AsvU5cXRAfppBapc",
  "key17": "4bytR82Hm9jjc3VL3fGNnrP7hoZEvSiQV14rumk6C4eDc8FQx8tQvzPbEmWHRrpZyrYfUDrpChed5f7WKLRt2WYB",
  "key18": "5r7PEtqoJKUQQRZvnKCfSHjbvDF4VV4CZN3bX88CH8WaGLEdqfCeKfaY478xXb8cSfXLCg6YRanA5rXi75qpewyk",
  "key19": "3V5oop8hxxGN8EniCBru9efs4VHY6yDbwNVYhDypF5rzaMPthnc3JaXxLGb43km8TL7zbBanJ3L8kWEKcJ323bDH",
  "key20": "4vKRa3SwjEp9t64bJYunn1RcRFsTRpQo2KRvK3stH93sU76mNFbUKmEHehNZP4YwsGLbg2YGZ98QRYt44ezPbwwE",
  "key21": "5ZbSDwkkLbFHwW8scbpJ7NC7yhesXQpZnpwewJcVFMifTyjc9wJr9N83gHrrXo3op2zx13iz4ZAFByscmftUtdmn",
  "key22": "2d2xWhyFeg1XbpNVvE18PbwRcFVp5Arabuynu5qZDeFYUgNzefMUF2MQKQLwEudhvsR2M3TKu2n8KQvMPxTrsRoQ",
  "key23": "5GjLkZqwX9VtJQMeyEwcWRKaZNbSoqTtbGUFWr6W3eaY6qfXfb7wcDo2MhJmomiR1AeKMuo42Qbf2R4cQsXesVon",
  "key24": "2V4NdW2zuuzScV77UNXnv6te4ba9xPza3tnqsrW48XZbe6ouJVPJUz7vyy4nRJG1iB7MYzoiVPYMy68Ffsi51Mvn",
  "key25": "5Yac1PAKjfSdkMftGLnGzfRxh82Zic28jq3djeBA1vDbnjZCfNgs6NWaQvxmAL2nGrRCR9tMP1ygUN5xZSmu4qDc",
  "key26": "5vyX97uZp71oszkdMYeaCH68czQQ25ao69BJggnv9cMRs1kVNsCrs5rkXhbxLSs99D4ZSi4ptSssio2881Qq7y8c",
  "key27": "5jYrUQnPL9RMrgFcFt2sNJUUP7P9Hm3EeLDmFT2A8J4haY2kwZsQLe2DTBTwR4doXpZo9XCJG73dtmnbrTSMKMEg",
  "key28": "5eJUockyXGe6UhTauvGNxdr151qfYVsyC8ALN2oQsBZ7boddbr8JwkHJwzuzjqorUGrP9qQwfPmX337yoA2shC5r",
  "key29": "5WBHt2ua15fgJoYpJCToB7LrdUhXiLHH5bKyL4gg7ENW5cxv2MzM5qVEfTLzkA9cqQA8CF3aXwNRibJa2kEVpmrf",
  "key30": "5eFDJkggiZtXesZ8hrK1JMLDTkdGgktJEyf6jibzhC2uKdd3vr7s1Bi8hKUDWmYmpFv83rG6FUshpAJjy9BehD3d",
  "key31": "4SSVqSz8RbrRZidm3o3nBwVP1b8c9uhG5TQv3RfdQQdyDuuAJMRvkv5DeuUMc9cXRu2ieMW2391oWFqju27wNeDW",
  "key32": "4xapukHP4Mt38F7ZgTdYqSYfkaYrNmy85KUGnRnHQ6sNS9ZQNMcXAsN3qxUoLXCGkf2UiphuiYhM9x2sFoUzFB2f",
  "key33": "29N7cq2TArs9dXVsPM4WCCpgHWYknSaeXN3hQPuxVTqQT9c1eUMkdG2XUgS6FDdVe325PHMrdHnjYUxem4Ckfd53",
  "key34": "3VbCBrrgE8zAWk467yPKUWqUVuYhj8xxbiRyZLHByP8p2KaSnuxV1Tx5ubZU3Eqh8HoXBPZzkHcR2Na9yiZPwtVL",
  "key35": "29cF5TMjjPCaoo6Sqa6L52i89JbY75a5PwHLMmT1vtTtSF74mqczVmmrPaKcGJbdfWDm44cyGtLFes4zMrqRoUQB"
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
