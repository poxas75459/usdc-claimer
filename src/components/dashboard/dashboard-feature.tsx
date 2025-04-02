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
    "5Wti7SJ3t7bAD4LfQWrov3oy4v4KNjSH5hHWYkJYBAwQ2XRzSh9u9EHB7cbtyBxkf5bgZ8xB5xDLRrkEQPiWNH8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ECYsDNZqi3PUyfFr4uf6XNVD6gxQwX2PTvKr7R9iVvh1HBovTY9CTViahskdAGuuFbsf8X7S3yff8odsqvwPrz8",
  "key1": "35jWtngTxXLM9ckE55W49gWNJrFk371f8BYtXxdNfNv4Auo4FAuLdDodskL9vYxniJy5bibR1ynXJJBjHjGHNR4t",
  "key2": "36JyA41DvgiWKQTJaJg2hAFjtj2Ja1cpR4D6vLDSiBAxXK6SEPLogEChSxvoTwaUfVCezLTJRimFS9yGYGGnXE82",
  "key3": "5ke6PFmiHQqpHFYWz8sPG7faojN7mKRsUcu6K6Yv63TYDKdzZsnoPRjbWLLbhinbcCKxeXLTGSHFanZfzovwz9UE",
  "key4": "2TSLiAhwwNURgaKStWpCArUZAQezcSDz8LXg8J5nL6hDnXPf2cBjX2TrEQ5WWg3rS6RPUkqTfRsuGbfrbt8aFSUF",
  "key5": "3wsZZBgusoFfLqzWmP1EsfRtnYpaFz6kajzVCD1MRSSEFBowAQxCFZCRyStbSWgefDZutXq8krZWP8pRs5csVqBJ",
  "key6": "3ceUa21ALP7EGbeFc1ncxJPV23EyZwiykEX3khZ3g5sapadByhsbeFzUT8eLXFwYxVxKSg7mR1pvK7rtM6P62kNB",
  "key7": "wxfVYNsL1VHH9MjgNeDHB1Hy6WDmPmFHdQqnFXKgzgQS8Jp5RbYQvmQVdQKXA7yfWHzEd5rMJPyHpiEB5XKvjzv",
  "key8": "5oiQhRk3W5wHiya9yAHVmvn4UTTqZ1NajonXta5U84jxnaFy2uyUaVtFtbNKZ3T6tjBfYz5RmWbJTGM6ZYTztwDo",
  "key9": "317mFobenH12fui55cr14hKZYJoXjb5LxZ3hvNnJPrNFbPB7aV9rkmwC3U3moafwTGHzpksssC7LD8nutqxeswPT",
  "key10": "28T3NDcFeThuXCoyM6fLBXqjTFqmJCe4Qk9kyMByUoQZxDqBfMkcSK8ekjS1gPwhiA5B7g8s1W4EZiA86kDETDHT",
  "key11": "5vVqm7FrhYDhhoEnchEcqUKX79YVEQkFchieqigFCxCyZpQ73QVdia5EsEGwq3XJtHivhPktkMtADbCQNxzZvrhC",
  "key12": "2eUJ68WBD3FL8vDUeDcW7N5WJQuk6LyzNXzNxck7Y5RtKvxfBiv3DNEe2DdBxLZ1M6wBuN4xq2B34rhm1Wp3GY7e",
  "key13": "SwxGEgs4WY36F3uueSLPG9HyPuhQBSVK5iwiW6iEkAxXhh4uvD3deg36HZkBfro7U3pzrdC2WFDenwTQPoWmS7n",
  "key14": "4ghtBq6PNwx9KwwrLdAvGByfAzEJUQTo7thxskePU3ncB1fABG9ZtYUfYJHA3HgL4i732znYkrwLBW3PRgEuCdZx",
  "key15": "4JzYxpQcK6AKnH3aKzNJDyEZyeD1B1jvDbQqj3wHoSgH1pZk71VPY962KLqbEWWmSV9zUPvgbhHiU14TnvqJ2eaS",
  "key16": "2RYCNTcvKRgK3qVK51ovj5nZ9TJUW4aoGQ8FuNjsaCrHZN5ovPrfLuv3RnR1RfoJiVGztstCMAgfaDVifu7QtVFu",
  "key17": "tpxNQ8YdhvFQEibj6Ta4PsU2yxbHRrKjba8k4UCgEXn8TtVgDa3JZeThSfRd3szDeb1DmK5jyF3L3aR73DSSnaN",
  "key18": "5FxB7JHiBWLu4dWkunhprLwjJTkyKba4W4PH7afytrEwHD3BQWwPyxD3cU2Pur3dKbbcBoS6oFy2jVBDoFGvEeTw",
  "key19": "gBGAu7ZVyy8tteqWf5AaU7AfHDZjaJyUPiw5UFtzSwsm3MNeFcVz4azBEJyHXAx2PZhUiPP4Ws5L2EePFqvubkj",
  "key20": "a8xt1kEWv7Lq2JQ1MgmiPYo4gjXFZTndN8NTTHr1HzQMb1qMqNm7MfqY9Aaufbbn2vFcZ8ejg2unn37Mc7VDH1x",
  "key21": "6kFhoGUUHk7Ey4ru2SuwjFAm4M439YkFymg7mmVSGTJd3KhnpiEbVvLgwKbBx8PFrib6VogsQrPNHV5KKFmhUf9",
  "key22": "6jXoEu5CpYBoQgYTZxB1VWkP7ogAyp22WZdvPEbaNKxk39L2vc8MBHczNJnN5Vha37nhHUjeBwvg9Dgnv7yKfYV",
  "key23": "NqaAs9xUjcoJvDTtzkqZfBvDYLhE9dQE3YKpkw4zPcQ1utbA6qnVz2CfPeHkwFfSDhfzijvih6Vus9eVTr5BJqZ",
  "key24": "3q6ddTZjbsF3wD5HAZQcTLwGhoNbcnrumxdDtP2Z7kbCTyhoWmbpDJH33P4ZFmJzqDqL1YGcx3rmENPUU3vr3AYL",
  "key25": "2oEKswMp5ihDsK4P5qxvAc7ME6jK3M9HNDqDLHa6fUEGTcFW9BwFPScqEcDsro8RUL3VngsCd9WooamzLMPAjUji",
  "key26": "2sXGEfGDZiYMydQkjiJBMBsPkc5N9RsXv8kRGioWdRWCoe8GTAB8eR9BQgSFTBWBZHuoKfJu68RUwyQryeNcdnhs",
  "key27": "fAodxtZwfe8nrz9xe8yM1ct7hX6zR4Li6NMQHoK3BsrGbWD5mPoxJVuMToso152pYdrVTjcV3DabkiViLV94z7H",
  "key28": "bom9Ag63fQKyNTu1n7Bkh8m5eZeeJ7g1vDMpT7Pfet3Zn9XzzdEeCRm7aFaR3z8AA1qXNCZQ2SQN5Uy2xBzmmGT",
  "key29": "4kcpuGwazcTbdKcbRMp6NPRsrEbAqSPvLrqxjybrJYFcAh1BivyG3K7c5HgWZXu1cWpshTeVUZ8hE8PJaCTXaCea",
  "key30": "Tj1FakzzZBqju6xAQT7EBe2HFg6ypG3bPKgQR28fBcArftBmUq5CwJDmF9aqZHvmSdNj9Mch11Rm3ErF8oXDLhP",
  "key31": "3brkRoeFPdyvU8mT6zUZ2QqsCmAVdKgh5c6fCx3vmRBrBBLx7TMEmbnXi9z41XYzYNTuLRTKLRyr11gyVZzLMHxR",
  "key32": "4DxNkcz7YWmZ79Gp5aNSWR9tYjcYtfCvKxdsopeSydu8kCU6eJDqmgHWg9M8e6s14GcXimCRP2pzJ92Guoa3GpMS"
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
