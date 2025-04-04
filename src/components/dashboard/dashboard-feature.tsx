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
    "3okN1GeUe7qCTShaEu5rvCN75ZiciZf5FtYaKrjxvh9auAWvYZ4gXn7PHxnESDmgtjB4CHijCnKae1DFP5hG8k5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44bx9Uee7K4nThg8YsyXMHdFVhqCFsiB3GKpTMifLEtfyAnd2dhdKSvYTZA18Kc4r5ygAHRD5sQkrbhZtS59JCKF",
  "key1": "5PcJUh3ZJy1u1WVkprjzFH6qMyVWh9hyc9wTmgfzZWrDLbx2AfeK69swAJqUahQdgdzMhvwgTtgU8Us97WsJ7tut",
  "key2": "2sbJ4oZFjWKujBuicAtJGyEfMEZD1YuzuhZVW2bM3XZzHQ4SKwDicVNzJnnmiYmzc5oSMQ6HYMq4jfx6b1yrvQQg",
  "key3": "3a2RmoxQogHcLzyY62K1upu7diXE2tGBg8sewospGci813UopzngxtwmBXP4AMQDsrsNqP1JKXztGu2upTY4SiSv",
  "key4": "2PJBs1ZU6HDLpo435wBm7eGmw3MAX1qnG7XyYKtkNoUgx3BpHX5kWGdBzq9cJ3QYhjT8Rz21HQUmJAwxbSuMrvaH",
  "key5": "2UxqmRRyj8VCxbQDej9CCPxmSimLtow3g9YtQdbdTHy9tmmSguyvRvWohtRvyyyiAMd7Spds4Q7F8mrxjkeAe98m",
  "key6": "3dhUWQF7ACjt2DHCdExGaoB84LgqiA5yc75kYTmNdqa532uXVS18RVTxdFJmaNcpfTddVqbzQR1owu9fWALsotLY",
  "key7": "2t5PqNuQUCZCVHHJo1zfUBgQNdnNYoPQ8q9AXDJufFQidSW13zR5sBvnex9ShR5PoidHFVbCyCvPtoknULpBbSXE",
  "key8": "3kdHSjPM7aGfJfLQZyXmin9yDUxtkNQVwbeZqer1HMQJUaLfqqNnXQ8h2sABH7TNmcfzn7mWFLb8BgyqZUsjvqmH",
  "key9": "4a73sgoTEjmu5446wb71cvLsYJKjrN39wfcDkVkvbGVQW4fuBxbHqmjmNuHDymNTQBgc8RNiS7kcnJf7o6fAip8U",
  "key10": "4nfnrxGFtjKXNRjVeF3xt32ooQPqUX5wTvCBJS43fa4zmng4s1y4f85zjmaEmrZWs2jyhu1XDKr6ahGEs1jQFmVq",
  "key11": "3rMuEygUjg9Cs8Sti53izSjnhhuXgnFHDnmJR4izkgGmgfRWVtAN2iFF9dZpTwyWLdHEeG53rqyFA8myao8gNUur",
  "key12": "32pSusduQSza2yXAi5NpoGFzqDwJfU1R5sXV1M5XvFfS51C7grEsWL9B1kU58sJduSL6d7NbR2Fx5LtMcShWnKfY",
  "key13": "26WuJFfs9bPzLbJjqcwtCB8Ftgoaps2P9LH5p7ZUijBMLhLdDkqY3EzRstAnjm9qmPB9jP79cKwMeQQxcEAG5z2A",
  "key14": "2vTPKmTfFhgqwjVmkjMvoFx3CANjLfdiQbuUfgqKStJA3tP8LKfETa1cRHqSHJuosJbygahrzirYc4e3XfeoRpyY",
  "key15": "5rYdUfhTa2LXFvb7g7oTt8is4Dy3YSkct6rFn3mCjRMXTmpb3WJJheydGjRXmC1A1YEeaXajoHXiWECs55f3AYqX",
  "key16": "4xx1cLkYAjLbDx1SZCsW9BjjLk8GdfrxpgthLxQ5LmqCqAR4NZWbpjkgzduRnijtefZbGEVHWRgiypcXFxSMz9DP",
  "key17": "5xTxePrf8QRhppotmYLvaoCoHM41Gtpd1WadcFFiKwU5cjpzasPAEuq3fJ2wPN5MX58TFrnF1no4AJ8UaTr5h1xF",
  "key18": "5kxJBYRrZYH2dBiVx8YrzZjGCpTm9NkM2hAha2KVe91K8q722kky5vHTBcoUX3FKhhCg9dZG75LLWTt49sondK5T",
  "key19": "MVHAmNf7XgdCvuLM9DfC23FSESEkXKp4SunR3nPm4YgvP2HQhivbDAZnq3NzAg9aYM1UgoUgJkvPkRTKbfHJi6k",
  "key20": "52Xrc6Gq74Ey2Gk4QPxrEhLFYBzebyyZJuFxGM2Fajbxff8eeuVXiJYnVeffwQkbLEs7WJyARgtHm8wJCkcHBXVZ",
  "key21": "61oBmF6JNKZrQCcNU4SN1i1SBaDTQi83BYH6pDuGH2t2oJiVD6bx7Uj9sbCMvD9EPUh2PLPGFNj5VdLPxpZyLm8o",
  "key22": "3BSDBJhetykssuq8Eb3ModhZ366PweELUHctQVXY4yUrcTGzX4zuZvEGoatnE7LPPL8de9DfC2HDNxRmiTLzVkK6",
  "key23": "5XKHtqsj45YKfHtQ7AZzzpxgSSDxJ4r58rahfAYVkfjW2DgkoQq74jUUm6sKhn5g4Ke8jPQ4j1REafs3j1H1UyDE",
  "key24": "Pb39PRhFAzXiKAWwM2YXqzk4XJBFhaU4vqz6Yy2YGrN1GhshwcnN5K2w3uiVV2mtHdkA8Nv7Rn9r9kavKbjmijr",
  "key25": "44NXuyMqRtW2d6aCjSCBCEf8juuPYXKBP3NvqV3Ph3b5wQUKaXMPY3zGPRKnQ42Uw4XuidJYVtLPqpxxiYt83Jzq",
  "key26": "2B8VASd2cBf5z8zMEgiVGe4dwcVocWgws5R3KjMUvcJP1HHiWrPYRKK82V3Kso3xvuJveiwGqZkacrW8dYtPy7iy",
  "key27": "6tY3iFqBMDcpG6SpUgZxgthrzg2vvVVLuCgMrbpciyENsWXCnC2FqxhDx8KWa8U3BzjnMdc4W17vvGbsAGBu2W4",
  "key28": "2YLMV4Mwus7JzV43ALDMNJFUFTgfcSTAxdNV7jAjqCLhmkqmHvvyiGGC53ie1fdXzeGEFWUbUdCqNWF5ohTwmXiJ",
  "key29": "NPjiqoSzPJdCwUkc1ekCiZQaChkouRJDS9Prgmp7Q1zeUbCcdFkZT6SHFAKqWEquzAtHXvayXzqS4t2Mfk5QA4W",
  "key30": "G98ryNDjehE5KJdRhkc3omEFjARB3iYCM1mjxJ91zxPFkaGtSDkFmwddb7tmQeDyUGMMMKWLhqqXb1mj4wH82E3",
  "key31": "4AcLyhzQvEHncXtRZKQjw8gdBneaRi98bJxWtBUXiGVgjT2M1gGiadYQ7E1yMG2SEoNwqV2GV7MrEn4vLK9wK8Gu",
  "key32": "o8nGMukLYWjtVArTkC1KdYArvrLdQAFW8rACg2yaXXpaJLwxx9pFAduSc2LK69jzN3BiZqyFmWQRSvUQiwMFvzQ",
  "key33": "3VLhm2UydTrEXyDwy2bCznJso5356bA6BzvB1pTU6F68VxN9Qzj4GMeonLFtrA8kCYqSvxEH1LdtkbQNWMrtZ791"
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
