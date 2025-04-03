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
    "4hYrhCXey3xUYtDYeTwWSqWQkf9jzbRpMqrG8jUKrV42SnvK7WXGYvgfhJokuo8kEiedJcAgmcjV9xodkGUbMZog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21SMXC79Z4Hei7rjdUioxifnbo9bLLLhUwBpVubpXP4JhvWnjYMJg6zXzakCqGde74qDsL9UCdPNP2Up6B3neFyL",
  "key1": "3Qxg2uYysiP3Zsg9Qhr718L3xRZow1hspFSMtQomR4BEtj16utmpJ87RCczMV29jMx3McGRWdktrbiJsi2khcHuo",
  "key2": "3bf2Uz49rjVqddARd2Zwmi1Kza1oLFPnN1fkAcJXp9jo3MBarKLHGr9BMuNvsF7xdGC3y8WcFfuCvjYnKJsi9puF",
  "key3": "35u5DfBq6iaQtpXf36BBfLbQSBqMGpMiyGDMcB3d4ekYA6qiNh8h3M4F9GQeD4hWCFNQgJuvRmCQ6TeBegWTRXi7",
  "key4": "4BeDjfHQbF5b5PBoqFs36agRdUfyHqPFgoWwHB38Ta7TqDWn3T6AjDuNMsmHCAWMBVGGdh3zGS8L9jRK9asEqSPE",
  "key5": "jLoX8nExq2dZt9F39LYRFW1JoMhgafi1Fao8yv5Eod9Ru2Ge5YxUZcocQdhhHGcqJK6RJiTQSe1AycvwXtiHtv3",
  "key6": "4Ddp5tg1tUsoYVNn2ciV8JotH3yjrAdWK2td4cS6P7ffDmmKawGMrnoVTvKtFxDCFHXA2ZXXw2Apbs6BNzfPPq5H",
  "key7": "dxQ5XH22wQ45fZtH5fYcutN8Yzp7Y1EVryLAkGY7UAfGB5BGqDy6YTCdxy2sczMKvDgkwj6QKhgiSVKU7gZxLqq",
  "key8": "2XLT6sQJGVa6dzyCmPpjP9MCpeGDDZkFi8ymYr2SyLxvMXUfRPQSPAbe8ZFBT77V2rHB2nNc16s75aiYkY2enSSa",
  "key9": "4CbvbrNsGvRNqwi6KxDWyE5pMgYzGsz539wwGKRXqWki8r5XcQijf1cHfSVGz51WxHrhQWybFPXDz1i9jqTj54SK",
  "key10": "4BntLU3kFcNDPidfQmLQ295wXbuYKUtnsTdURwqCyVGHTp1FxqGFFqzuV4YmQcfeS6Vh8AXYavyhXVHYSfKsunUw",
  "key11": "3T5DGjw2AaTuYv25buppAqzLK7zTD1Hv6vErukZDdGdPJ3aERcHszQiHJcpWARUqrsDAYNgDYi3m7tfAqVnyUYd5",
  "key12": "3nK5XTchXRRVerz451iPs29ooygNK6N3efkwd51nkHuZN9RYJLuU8r1qCRGFcoUkcrk87fHTRqD9mpDiS5He1Kv6",
  "key13": "4nCLdEa53dkf7yu3KWYVPFkSNVPGfQeQoQc7swBYNkgL1F2kut8a48Dw7jQyR1sB9hDUKFJVGiAuohX5oZPWNznF",
  "key14": "4RfGajeSpokE8jhWkGWHGgVFQQvjCrRvBDQqTLez1B5bjfG6sNAHAtDkAeKzf4QgN7VJfZL3U1waj9GKb726x6TY",
  "key15": "5BmiwLQ6d3jJajUNCQwZLcoBKYQkexXpGr5QkVYVyyDdDHPFCdNmZrMGRt7hVrkCtAbFNEo65VePEQAFTPaRNgMv",
  "key16": "3Mw8rSzJCZoYLU9f8oHKTbdpWejoxkg7Jj5YnttiCGmRZ2hhLnRyNVX7zhTAkXHsFkUEYeJgf4EvrzXUfTose7zr",
  "key17": "xtmju3iB1M745wZ6di5YS98jgkpgGJBS5gd3VcUtjpEXizmCbTxh7xFG37HQmwYPxVqUeipLj3GXqF2kGy8fHML",
  "key18": "4vHgVAdECK5aAQGLGq2VPUjDfEtBo7wc8e9rP9wYago5z9rrM7Wda4SPpr7U2yGuDyfAtMePYa3L4FMYjiimHjF3",
  "key19": "3s4VkhhkFQsyaYTLqmqHFz4XunnrW1H5Xo74Yqkkzk8BaNyf1Rj7ncYQQJFoaYhkwkPbiPtrUEBZPvoNcoDMFtUz",
  "key20": "4nCGsCkVpkFTEt1gs55Sn6zEzQCZ3yhCWywn3xnC26UnBwtZ5AJ48n6VyCcyoa4jfX8EDkvX8FMZatuckStSKzS7",
  "key21": "5Yg3FiExAp6dV1epKe8XGawMAFm4FTgjozTqYUvmMhnGEHwoMoV3pQpr6qwKeBXbhjdtCdeYVtw3b7cPz9xHmrpL",
  "key22": "2HAJCcukj7kNcQ74tkF9uoJ8NETgwufk2w8rKa1Y2kc2x8g1G6nQSs4t4ALNM35thD17kLUysRNY25iRTjBio6tD",
  "key23": "3azPEAcGZ2Rvhm5kDoaTkry2k6ZZsKun5TsQykBghsR6zRkgN1UqLK2efjXNqTb7uCum3ARAZkWKkPYuuSuZxTt7",
  "key24": "42G2pp8Li116aGApVLpSvz2rFjQ7QfRJbFNsSZx3h6Xx3TMMhoGDoHPJnzXd9XNi8DNxFHzxChFARU8MNqWTscAD",
  "key25": "3wuWhHBRTY7KVCawGJjFp4q7QttNqEWbsmek8Ci8qkxbx7qJ71y1WXc7FeULgDd7Ji27JgUUk6tUXm3ZaLKAUssi",
  "key26": "RwDwTnFiBkbbTuZqVCfrCnVnE9y1g2g5fUUiS1NxWaKbwP1p367RM3kfGKb9jgpqp5cP7J88cVELM4wtR3Ezika",
  "key27": "nsNNkKBAQU5gbTVXm7bTcb5y4xjn2r3ZGbBnPEKFtm5WgrDbiNnCEQZmHXVySYYebVjzV75Mi44yv9cGrdtsaCy",
  "key28": "4VuousBJni4WzwDxZ9nD7uRusMhPu5fzN1ZRDT4ux8eLt8kqonP9y2j3vxTqmj3Cc2DBT8SPWFGm1DNPfri9maei",
  "key29": "66Zk2YUFwSUgXCfhjW1S3oXBM32FkLXWgtunXa26beW6Hxbkz6bUJqzq8icTYbzqKmi1T3fTbv2uibD2c49QTaK1",
  "key30": "4owgtj9gv1hP2cVLobirhDgPj2eVF1jGqvDbYPJPUCncb4FmomHhXFoE5Aq6BgFJBTtovUBLHCL3mSsCY5uhz4YD",
  "key31": "fZ9xcsn3qFLT8uWdaUN7fUeymRmiHB2Z9jHgPvbedKh74PQbN2QD5wK5Pkyj2vrAvytHnBmvMbXeRgHgSdbXVUW",
  "key32": "29Rz3tLNmW3sFKXQA4tSdYo9xj3RVBY8fNWGQ4qCQHAcgLXfb5M8kDQxJqpnSR679dpFb7vF6oou8PVdbMBXD9uY",
  "key33": "4x5RhuG1wc4AyccSDRqogvnFXnwJgfE2uEzBiE1wocPhEQFwGj9A41s1jFSLpzhy4t69DiqsztekaLB7SiLepLkL",
  "key34": "3eFKXb8BKWXVhU6x8CFGutf135RNg1Yknfu98wziDtM5UjXDWwSP8ZeNgMYDTaboszQDNFQTJQMo7p7Wf2Bzb9nF",
  "key35": "2stqX2fdgvxnTMukwsRsTNEtEU8R6hZMFocZBRH47N6HMQrVn2SohgVYGhHxagUevLfnCjcgHULWRT7yeYTAKRbK",
  "key36": "2mQQ1TJYqSgFQknJ4TeB8BeDzcjUgNHSJZkHDN7NGS3r1BKBroUJ4EdGqMH2ruSMkuGoDkk6gx8wgNQkk2HyfosN",
  "key37": "6DBGLA4VngNgDTmPhf6MckZgMngp3HwWPJowtTUCEqvsLEpuf8MqqLFDxV7W1rC7ziDnZSJBPwJkxQj5mGmjNcB",
  "key38": "4yVJB5JW6CzEGoXuWXivHio67Vs2XdKYeenV5g3hMkN2vk18Tc8hCB6oG8V2EhcosLAmjZaSYsDXuXFPAbTstkHQ",
  "key39": "2tnWVbg53QdP9zcjo4KQSpp8LftTASbjGXEwNrpVnTsZNhyJHV3gKz69JvKdzJzLjZmGqmZ2ZFzhRF6uUBhz7Zki",
  "key40": "5GrM6tETMdFJoZYTrK1C9jFmtM4pH2BRFfmP3YUipqQ7g6uzzSTZo7ercLYLV73xhjdiHKomXCXCUjd32TxzSxn9",
  "key41": "4FMUPCmw3DE4J9sQR6Shi9674291HUFcVD6gpukz7fJucnH6WfT87yfX4rbhcka5sD5BMTr92UaBD2QXrkbHm2UU",
  "key42": "58RatGHEbtYnMaeoTj2cH46YQGQG9DtKhRNpHq6NN9y2MLJkVrXZGd3oG6u4yBkSgJ9MEoFsS7C47PLjEp5jSMie",
  "key43": "54Jm3XLW6WJH2TyvbdMmFquoRtmqYk6kdcaPe5bvj2C1PmN6ZJPDxFkH9zmxr1mC81ZzP9dMtDYRhpVjYxkVKjY6",
  "key44": "4JkUTEFNEpS9F4SofXg8yz1ZY6yMHdzfjGFaeCYoy5D8GstWmV1qZXGHEkx5qzzR5Wh4HWQDAQoFhHq6PhFFnZtr"
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
