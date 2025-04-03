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
    "2PFoi15ZZ2TLBSm2UPoijW3fWXTaNV4L9n3vKNoZSCTDAJLgERwb8Cy289Dp2e2z6VFrSR9nwLnxX1iZp4hmfbDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QavYmyRBkSJPzQJc6e56JhkftQ5akRc4pRS9a7A64mpvANVSahUs5GhMqCvtQUdgYJmdRdcj68EYCSkoiTvcEGu",
  "key1": "25TfLqTmYc8ogERjKYGcSMLvXG6fGNrWGU1PLx6WYfhcaD9uL9CJpEPRNoK4rJxtYQJvvvYLhTZArBHXJEDG8oVd",
  "key2": "KZ7dVdsip9TVjp2JZTMrYa8PeN6PgjTfr3hApHdRS89UZgoyXGNoUxsKwpAsJHbLxYbKetvwpo63Y4bS52o4EYq",
  "key3": "3Xs1bzg95zbru8Hxm4k7rzJ939DTQWi4pviMqzY5LgdYv5c7N2D1XuwtUQJJ26TsepeQTuWb9DW1hBukHhTSXKsh",
  "key4": "4ymvHDCr7qY6gJmvD59T83XiuPLT2gFpidLcPL49pVxkFpsaJQMkySmEVLg67aaMUZisprrgb3NskFfHnHUohHco",
  "key5": "3C7f6Xbn1FYcaHKS1jZQBCx8BSXq7n1onRsVZ6ZETccpBQ6jrfXYMkrNayAwb9ZNHoRyP9GhrWMqMbb42i4jtgaj",
  "key6": "42oqGVfGx562vU4t9f2Q2GiN7HSkGYUXf1yJPt85v8TTGCyjR5tpG7sa8UmddvFWoKNbo6kxt7QGrahCUwD8onos",
  "key7": "4AXKJWGFPy6JDfVvqDMjGKnSXw64Mo9WLdphXgcNUEuXZC7nKt1bwTBpBsekBvaa7YJYyeDzaaER6FeLQXsEqp38",
  "key8": "22aTmfB2LFKTHTGHD4C9hSGJDcKfDEBuVHMzrKkJSW93WkBophgZqsVfiZffJcsP4swmzn5UuDUGeUNpToThrNwk",
  "key9": "4sSkvLQMdqrMhJdy9UGXawCmLTvgzivhWfjEsjYrJejsiU5DxN8NXQs6iVnSAFTN6B2NJmHt2hX65XAWbDHa1Ay",
  "key10": "ctEqZL3PxMTbqqWE3wxDwxswUFb651pP2hUZ9AcsKa89LJKwk5wkfcPQcjuSVjhfttByjdndFR6CeVVnsmM7yS5",
  "key11": "5YqRsra5DrFFUqmjX2YwQQHwqEnZVCPuUyfButZSu2tVbYLKYhFboSgbvgUnzFygj8hwwzP4KryM5sxDShHeRXC5",
  "key12": "2aEKopDSfDGdsWPGvK4szZuqVGJfRDexZQkMj1ejyDmFDNPXxPLbXWjVgJ1oRjugfcX4EVgGnwCJtFRHFFGGmmpd",
  "key13": "4UzTHfatGBG6gu5istQ3vdRSz4wJgn5oL16KC38UUycEFx3W8odVBPzHVENVQdcnuaWSg8hDpokYJZkfFXT9PGxp",
  "key14": "2LUD8Bmppwor3wMF62RMHrJRoBHvRGM1oddtvJGxaGDyKHdG6chTgJpWdHcdcAbCzpvDbqpkx2JBufregEZLMPd",
  "key15": "4irF4YqN8nczNZiAP5aupPF5281AmoGEd4k1HzekLq1k7Yu7tRwrckcW1SeYRJXWEoUQaZqRvdRDewgBYVD5MQpj",
  "key16": "51mxXJ4ns7RVg8y6YYUVfYqKKMUb5bRAiDe45ZmXDtKA7oaUgMohdT6npf3e1zJ9LQhDCpyVXn6jt6MTAwKnj1LP",
  "key17": "5xWCRD95p8bqgnPv2PFtjsdsoy1xVjeqsjqjVia5ejvnb1JMjFCu6NvTbwGYBrdUprH2EVVFUfP6gsVg6eHLDWQN",
  "key18": "22LPak1xh9xf8uk7pWpbiZpPKgj7g9jxXFA3sRP6e3QDmKwsruRXmqNpCTm7C8RUrDqqa9azQSBfafzxR7rvXPTx",
  "key19": "im84CJdHpcJLGsD9TFG5mEix19MkvQwSEnEgZHJjTyj7itqj6eLMX2wjBmyzdjbBEfDJExMaK1Rf8fJe3nSQiGp",
  "key20": "tPhA7AL41rXHpyopfQdUEqRDCVoWag2kF57SQVs7VB9zcgpc6BjgDMtykUj24ouaYGvFAuVAqQ36fQcJT4XnMLX",
  "key21": "47v5Kh4KFX7rntyP14rFKWuJMR8u6DgdH3bmuZ5zGGz1LHkKPWAtH3M3zr7Zmq9YhDuopZ1CN281zxy8NfkLp3dd",
  "key22": "2niJiQoj7bUt7XdA7dzz2wb8o3GwLLhM9TkxsEocKxaSrXtTghnNUzyQokzLx6ZoFvBHJG9MSb6RrvzNoD8jdtUH",
  "key23": "5XEBggW5A6dmjg3GtoWK8QzKU1Gf9ZVmkLVeb3Ba3Rrm7acBZpcb3Y9gAP55L51QmzrSibiovFduU36MMVi2L8qn",
  "key24": "2qydY6XLiRxvxo8j6kVGbM9ZXRRbzeWrBhqJjKbDwtf2EE66qV34aUoJdhciEaJLcWxwf7qkR3UDR2BNo2a6uqhV",
  "key25": "6332PtTuiRGBFmeJKeYYpsUaZo1dnXr2AGAVjuqwrsKuG1fno1WjkDAfG1s73Z4WodUCMfMjZ8wwNniKu78JkTxc",
  "key26": "3sMxiXX9DMZPTKRikG18LaEsBTZWWFbbTtkBUzRPHtZKE1RmHfk7vpsMgkbX153GwbuUsBFgbBYycgaUkSzvgV41",
  "key27": "4yx1gnxgg9nR9tPS7dfbm7mRkhKi4yezNdqXqPurbsXrYzRxXh5DAR2z61LeyoWTkZr1vLtnZ6s736baBVMHAPMq",
  "key28": "wW9pxTLbiCr6UYus5SXxvRcu6sQiGUfeemQq8PwggkHxNKqmv42nJK9HL7rVZ7WDc74hiEiG7KpWv3bgjUbYcP6",
  "key29": "4uc54TWpAyma89jERwKjLvVFkCrAFNV7NjjbkXDWUErHVLeGL2v1cSb5ZFgHFPiNEHsoT4xJLPsuG2SFb3EhJmS",
  "key30": "5MjHfgGjqdAEwti7FweJ8SeexNCeXtZqSubTDG3zqkdgLer5BZXhri7CRARniKPa4ZfZdQ8A3TsohPhP6vDU7FZG",
  "key31": "4TCdfJNRzTzZsjTmtxReLA2gx7uRU7G59ZfMZgMkKKBRAnpuzcQ46dU9DKDFjQ2Bp76zJJxFbWSZmgHTACMCE4Gw",
  "key32": "3EvQndkEN3XHEC4pxmGf8S445Heon4GYBQg3x9oWgephSruU8hMYVcTrJCRfSimk1bSKVtLM7JgfywpWgSUmhYho",
  "key33": "2jkQ8CFs9YU3b2zCqmNqmcFNNBgSuAdFZy3rVfEex9mmMvNJonxN298AeooaVkd1ikxQ3aocMMSj9f7pXVhSDSaC",
  "key34": "2DdqvwNNvCycpSzvbRWez85gidN2x54SpummNtkojvwVacpQo4F2rex2PFotXXftVraAnWwW2NBhf2zF1XQFWRrw"
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
