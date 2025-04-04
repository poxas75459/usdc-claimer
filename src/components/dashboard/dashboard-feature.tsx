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
    "4uLPCMv5NNKiFWo2CCCmtW9FjagLJDmh9KgZNKx8kMgvtDogJoP5HhsaZmvXm8Ej1cVJFdAF4C7bZUcff8Qy9WiK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vAhmEQ6WE8iP3fjoXKxjgw5pYBexmEof4HULFu5RHrdU1FWGa2pvR1BFQZmrua6ov5z7gRXBsTwDE3NWPa6uHTk",
  "key1": "345gcE7LWcf7RRQPtr1oGCb5eEAXgqHJSSZXn4Z4hUiN12cJ8qp5FkjCmYgRF3rQCaAaZ2EPKJrFkvyQEiXQV1g2",
  "key2": "VLkZX9P8Nojp95uqHEWw8qLFv5YDjZUv2G58RZ3cnrvqh4RaTFPDFKk5tjAwALcqmv4pH95cHVuYwjTGUE2XzeR",
  "key3": "5jgLqrkkXvRRTpYFcUrEpoEG28szYMiA13adpcoHQiEh23Rb4Kg5UqGEKhFDqrd9dSurehqie4Zj6tUv7iCV69LL",
  "key4": "Ty4pMZHcRzLqe8jrK7my7wrsuq6shHUipwr2PwdkCWQib97g7LPiQw7Mfz9XQRu1CyEez5aBbUpFcKGb33CXTxv",
  "key5": "2z5XaRYksWkDKuj6Fck8GG92wNukf2fHYprju8Y55GLqzrqdX6Xrr2kzAo6LMJudtdszticiQYjqXLxCaS5kZPXL",
  "key6": "279xcT95qkhzdQ7weLSzZnC9RgGHRXi2yb2gQ3WK9VAzH17i45eY4kP3NxG5Yn9DeReuKfkgRwWtsC6am3LpT2EF",
  "key7": "3AuMZj3wGirKf3cy6ZaMg5895Gcb7PCJZ11sVf2kfpMDhYahF3w4P8RhhzftQJ34SxcCjuP6uwScHdQBDdZMbBu5",
  "key8": "4ceY6VunR11AGyvutwzthXRx7YBHKGJ9nSN7jfgMT8YFDhziJpgNCSE4pTLwg5hM1LSDmnLXYTE4fF4CFudD3cRr",
  "key9": "CHN6fwYu7LYGNSwKHYpAw6Ja2uipzCUtuTwGbLWXzUkcZqGhLpt4iYmPpTTeMmRprKgXDmKNJYqyZG2yPSUHmJo",
  "key10": "5MyiD19g6NTYANEgasmhniWXWhJ1yTnqrPQnZYjHi4gzTR4f72GeeQwuYuok8bs3EjBhfcUYweo1V8PSdDqZjfqg",
  "key11": "2YauBxx4m1EXKMNELxJLBD7bK61rwd7NbJJSAQomGkoy6wP9nSS1AnQqtt7DCzvVFcTVBbhYgUb9C6N3VsZLVxTi",
  "key12": "Zx8h1pL2Bbko6Kq7vZHtCoKh8zDX1F76wTvbHuZG5hKYs39vk9CGww7MWXZY526tqfaSjHiTyev2KDCTKUq2SwH",
  "key13": "42o1qjPNtsnYjvD8V3DedT9wKmtubWhpqsirqCmFg5NjWTa3Kmma7oYVZ54H9MBTUNFAr2McGBGrjpFbShmtHDYQ",
  "key14": "388Hm7DWvfCNc2emEDgjcqo7giXpUdqqezPg6rGAmap7SqvPSteYbafok1Ge5YBjGq3faNAG8ikadiYhoKfPiP3z",
  "key15": "yVfL7ZVdmvP95jMFJExsj9irGdwRaAKr51gvxw4Espk93o4n5Y7doJtPB8qZNCKLhQ2HuaDEx9CLydTdaZoe4qK",
  "key16": "5w7A5YbqqxHsPxNLSSskKVkpfzdELsikJs16jxTNwikofobY4mUqwq7ftqQFMopbj5o6qEHAxduLwtwfGjPTGi4r",
  "key17": "2V3A2gpcy8ivYiEgV1qAVZ64Tj8mP8wV9sg6z1upGXCY8nFzgJpC8Rqn7ohnRQNts6Nrq7c8g1JfN1SKUnhyRcLo",
  "key18": "mm9ud5NHaYrQTP1yvQrqHSfrcZuLeHPv91k62HTeTpmoZsvu2GoQmexn45bCvLBh75MftWFQmYoL9ms9qQZbGco",
  "key19": "2kkhfJSwjMd22bwg6GpmHxdq8a28AGH4c5G9Cm4teoiSCSCeEAzYpRnW6P4ymNFb9hLCvEcCeSwoohVZH5LZzdAQ",
  "key20": "3nu2AMvFUNh6csftRhWGKNz9LWbnm4YXaixk5ui21ZeYE2iHYgVoSC5DbvBR7CTPhXqrRgvNV35mDN6jUCRw152Z",
  "key21": "29Pfw58JfYQdp9GvkCkPU8xpC1pBrHgLU1AncQNEvVCYqTTkhtFEeyGS3bkdru8sbWuTZaz3WPNZuLMpah2Q8AtK",
  "key22": "58vi6QEYQKucneDnVxZTcpddNiWzyC3FvEZcxwRRwm6P2WtWJKZjSPCvotQdo5g14KH3wrBWEKj5i5J8LzcfkTn9",
  "key23": "2mTg4uhAb86qFZSdxrsJywgcDVsuqYHogmLTzdbr7M4Qe6eYrk69CFtSFYYBHxNPsqNncf7F4su62gQfj4b7i8RQ",
  "key24": "Bci7r4mfLBha22kaQJpWnoU1X3DetCcQLG5r8ZAhXBFx58Z1XLSs7c9iZsZz4SipQDQ29HdmTXYRuRFPa85nUVc",
  "key25": "41Y9u47PgBXYEadTqhwBLi5dVQWBWuNuXMCfmNTMBvSFpNDkjSj2KPRxJxEYTy7PKy2bi2AcZdDwyfpPVcR5vr7u",
  "key26": "61XjP39aCvDWuxtYNsUaamPR1eYWdVr4Qh1jMGsfx7mbWLaM1kDBkkmTSYzF6NupFNjSmL7R7zRqYV6a7FaYM8Xx",
  "key27": "4XhDceGa8dHftfrQMmXmkFriTxKSbwEPq9ijXsjDYMx6sjntS8VSskDynevHZMfgZS3cK45f1hFRjgDbRKH7A9Tc",
  "key28": "3JfSUtULodgskvSXTu3Rm65bqM61Hi8AtbfaiyqdV5kNAHwBzgEwQwqtkibdjxs5WcvcFpnhqrzQiMRXwqDMmzmH",
  "key29": "DZUjD3sFZFtXdVVE9Y26pqqPwriZzAdTterGF1my9rKFfpmXudkRyUeQ6FYEQ4AWgEYbJQ9sTbCMuRSK2gx1PFk",
  "key30": "uztqXhDTZ2sz8FcWcpX5ZvQUYe9yY4jXGx5vR1ZTgS8UaJrdnkVsboVjjydzzZjGy6PvdF6Tc6JNneGtkKSZMov",
  "key31": "5CxzSWFHzAXT1ZMGn1c4WVM7Rogctx36Ldxw4BouQXD5eEK2HEhsjoCDgyqbhSVijGBcNcXdoEBdYYoWz6ys4Ggw",
  "key32": "L3b4UtoA42AGYTigy3jZxeGoUs8ZXFJCEQLJB4tvo2wTrvP6nEq1P1QggAr7XhTpyQcxc5MS9bZmzFMqhhFsDTo",
  "key33": "2Qw1Dx3nEWQUqKxNeKkwRW3thYCcfCUpL7cnXGpffeVRXi5CjLvqmbPnyyxPgNZuZMJQwsCkZv3aZvaL1X59cVLE",
  "key34": "2eqhdV5BsYoHjmB3rmmiQBqPGQtHVd6jpd6KbDjqUip44EfHdcoh8FC5xUJnWtrfWFGaybiDPZPZPBqyWZ9GVgRH",
  "key35": "5A2mtD74vDRZrcs7c131ZCTiiJnC7XayguVWMVk1qXM5NQQZ7q7FEDfVr4DdDovBpKwHEBcR6cQPpLP9aMaRRy5W",
  "key36": "XHARLxvG2qNux5wWz45wZ3Myxmq5mc6TFYdhgAe9JEwuYP9LoaPwJFPuSBTcD3yBop55a6MV8HMspCxSVvfe35N",
  "key37": "291zSRQR4KG74vweD9LWFr1qqcvXDXESEgeTHeVBofh37MvomBxLktHUk8YKsXyU1Nc8VJXzYuLQua9vLaBvjQxH",
  "key38": "4yL9vhvWHJCgnrNG6An9hxFFwU1ZU9bvggwK8EB4jGSuEg8pgWnGa8UqwcV2hauH1oiK1PAQ7SzxPtrJg23gHsxZ",
  "key39": "2uqazEDfXCgScZbcCjPQaJkdXstuUg6o4usTdAwB4VLH22sjqRcWSbHW6sjDA6Ra61Qo69gPBa6PNuubXUdYPoH9",
  "key40": "2xtRpanH9Lsn7h9YEYqtdkuPfwiE8g2TKBf6TnnVsNjwYkLK5nfPqgXqGRFXRJzd6WqMccD23DXcdNnX31btGnVz",
  "key41": "3Jzh2pcVJeVypyVU3arQtC5RsetdgThwzCBgDnttpzepjFYTCvYMcSny2cmhjAiHz8fqVvhifGeXtFC2PjyBftMv",
  "key42": "Ne5U11ApbcnV142Hwu7SQRYNEXc2tCCF1CDs1WmkjfJQUy2SsxuF14XN2EbRuGMuY8SfM6n351EzsdZxLKQQN8H",
  "key43": "4XB7y1DzEwDLd519hFzrnHJNNja9NAc3ucAKwLdPRY5Po8A5NzU1ceH3ZVcdzq5N89CiGXnXizVcETvbiZW2DuEm",
  "key44": "esQ7F6P45PAksYL3snH9gMPRcaANrgbekFLn3EMAhoitxEogh92eo2sMskDjt1TJUjjQtqSFV1pAUU8mn8ZEvjm",
  "key45": "2mocRvwU1PSLXNQ7XPkkfWcToH3LyMCtHx7CEGLyMF7DYSYB4B6uMJtLbzUQQfCVkuz6QvNYnutex7sW2YWpPaaY",
  "key46": "UntrCfZgFVwpkVS1gyzU91op3acHKJaAgxK3uk5ckmp3AvatRDf8ijYCkUg6ryWj1sqF7ZocUNz4KUBRqb4bAbN",
  "key47": "bhNDD5TSCiwuS687Vre6bY98nj9dxzpWAr7j6RZ5mubXiHL7MJ28JHCJa1oDK5F6hyEgS64Ez9MKKT8yhYQcoru",
  "key48": "2JWPn1CYvi6rqH2yqUvY8rjQjDWbQfffvQoqn4ge2fkhdVZGTKR9y4RnQtoKMAqCmnNqWRki7mQweQrbxg8j9ya9"
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
