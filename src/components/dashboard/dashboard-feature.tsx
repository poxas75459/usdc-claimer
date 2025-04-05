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
    "yKa5csWUT2S2Z9gDac8V1tEnXSeHpAsPjfbVFtNPkcifSpQx8J7gxJsbswJfzdxvS9to4hYg63J25qVCbtjLAxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jaoL56TiNvRG9U8KNsqXaGpmuX6CX5xqShizQLup2TXZW8Qo1jLQ5a6iwTjg6ESQZ2PPDE3LnDe5zXbWm7JcRqa",
  "key1": "4E5KhhN27TeTFBaqrd8HWibswzFQh7FAvM426LrHTM97znH1Tv8vWmvyQW7uj5s29NhVZm3fMUtCCShYTMgXRy7i",
  "key2": "5F4NVGi3ebdLcuWsCRD2zfs3KTc9AUxb7NYQg1xcNv3KnN57hE2Lpvv7bS9hBuJxprP8RAFbGC9g2qWJM3rnfgB8",
  "key3": "2C2xRvMW3uh1vp4FSmMuDG6Gwb68w1NspDXuaGCsbLPXzutz4ZPp87p7H456vFciLHQUBrwrt1ycxH6rSvRX1Ncn",
  "key4": "v8Pj8k3Wv2VKsBZeCxL4Wu6PdaqEKYCqGUnnDx2nUS14ScsqYUsAZDVLoBkqkCoUBg3WsrMN1TCAjKSgP98mSsY",
  "key5": "3ENcVdHTt3MTBLKiUkKvwqoVGj3dUGsSPTzM6cZEKCr4kobdsB9KFTMtQcCineuXgQrhceeF7mCpDtavJ5DyKY8q",
  "key6": "231aMWRpDy2yJ6QyS4ujPAgNwbofkZQsWWBvMGao8KKoNXCoMYZd1vbDLPHzqZZEzk9eGDMn89vA39Y5rpvhijiL",
  "key7": "5otVXhLtnm2LJQ9kX6qXE8hXpwqgRMdwwUjuPmJP15hjRvjomECdNhUTkMPvTCDYUwDBo4rnZuHbNY2J4vuwtM8C",
  "key8": "3ym7f2hXt6TpdJHJnsyRzurt8TeiwVSJMxnKXoFUzYGqX9b4wcUJnBF1yNJGSxMizh58KqQJCUcboHDhTwL8Cqdd",
  "key9": "4zFdSmhUpkgF2Gm561tW69rCGihh38gUMcPfxDxaCiqetjn2QTNk2nbpToJoETJATtTaF8cmKoxcjrXDTi8fBkL9",
  "key10": "2Mq2j8Xi1zQjpnvqXBxAP4sCtcZKvJ7C6kSPCbsngwxmKCkZjMuHutfGLaZ847jn8ik6iFSApvisnBUZRcJozxiA",
  "key11": "5zD4Lq9jN3X9wZ79bkkesx7oddA4Ynd9HqRkyEXPyHK7keKzWNs3kEWmPm9mxmsB7vTym5otA3Cx7H5rTAgJc7yp",
  "key12": "McVDmzoEJqYphg9XxNQHhTwN7HKZ2JonVJFns3ozuGKzVftk7PYWKJWqNrNfJ2JiTUebRF4QAnggoh1gWoa8bA6",
  "key13": "4eaz5F2i2vWq15mt42Hd74LdhBu7kUVmJPmKDFuMGmr7kbWnFQvynhFPyTT9UqiLzj4uva7cRX6A7mEXkTprKpqK",
  "key14": "jESWUptTx5vn7HYLfP365qwEiAqNvjyndu5H51ZwZs8PvWqaR6s4xRXUX6ySTaWsWCKmM9b4kbT15npY7vf4vmp",
  "key15": "4LGxZ1i2ZNJzXadaCuX6xKW8GPkDBogJNsSVQgmHxeTZXBJe3bUW7DEgsdTqbS4wFyvS1buqNJjcn61en2iypTdy",
  "key16": "yaNaXTsT7mhs5UmVTq3515ABDMoBY8hctx3BdoM6n2GYihA5hBA5JraWRLEtRHkYxo1nnKkuADztGmZXEfHXVPf",
  "key17": "3CVS9Bgg3JTawM427Bib4npMMMySC5qhio2XAHbYgwR8DdDEjH24trqoyrRz8xVhCbcKN23VHfNfxqbRpT37eerw",
  "key18": "q2VEoBSUsC15p8BsmGG4PaVhNAfNbQN9Pcip4oTujfuqAg7JPhLLnDN83Xa3XBgUN9hEc9CmaFki5vGEY7QS9hc",
  "key19": "jKJQnooVLzEKRa1hZMbpCyaZwNvbJ6LmtUW3Vk1nPY7fAChqgPw9ezJFzfXfaeYesNWTwXP86AzBLcPjXagu5fA",
  "key20": "2FC3v75w8ZLR6ycByatmW4eGAS3wpe5uM2trc3ioCa4kewuBHBt6UDGHfUWt31bcocmzAjcvvW7zyiqdEEX9AaL",
  "key21": "3QFYvCzGx79KXRuMFbG3aADAdQyXaV6GeDJh6VSJ5wHjTDHxQHvusWH8RMw5AQVBUc2KEdnSnnQNAsWDX9ZPEE3N",
  "key22": "5h8xK4J91dyHJCkbR7cF2nzTfg9tFg5sfs8TrMt5NEy8Qz4odiPX5FggQWJ4TKA1xb33EyjxXsftnSKE725ck5no",
  "key23": "aeydv2qd92xRxFQvzn73AbbVhwa3PMT8yYcv9ksDbKsannrywoQwjivBZuok3AuSoewuamUsjsyVESqXPej9uQw",
  "key24": "412fSQz9ZbciuvF4Nno2nDRQ51XJt3oRsfw3YgtJt7UKxSkK5Fxcqd9J3wnpYP3vCdKTLc6eu54T8vVwJMTWSyJ",
  "key25": "2eQ5UGSnb5Lexo8v1x344D3nR321uoiVBGQhG2xfFq8A3oDt1f4XGoazYgniWZ8QMGTExS1mjcJ4b7opfsz675WT",
  "key26": "nTqf797xHcLibwdMCE6S4pXVZMdG8nHKttbs15fcArV1yR75JTD93UruJu1Fys8TVduJGCQr1SqHHrpJR228NTH",
  "key27": "2e5XYR9CJo9AXRXypgbMm7FyWfJiqDc8EXLwfKhS9iHGYKcP6ucisPdyaPdNb3TqRSgiE1iNLo56wLBJywtYGoUV",
  "key28": "1289AUH5BAtJPAR2t1iDrGf3kSP69mYBBndcFi3Mq49NrYb27YrZMe9g6evmpbeSjYsBNPNBtn3TkQrxGfgowAsi",
  "key29": "TUSbVczAsCdHahWiGm9UdX3fbc9dqfA9SRpt1pmkWgQ7EehRV6EQbomH1fTwJQv5fA5QYkK6ut4ZZCee3EDtFy4",
  "key30": "3Wh9yCm8bhHZWDYqcAgdumcenL4SrFKXWQnUpEJD18u9aWGeiuSHZvZxeqaPXgNbfy9MoYLinouM9oGrbi3F7ykj",
  "key31": "44Jc6axN8g6oFBhgNy2DLCfUbfm7WA1QGte9fNDEuSQCi3PajkDhrgEnfjy223kihLfAEZSfDK2iK95eHDgS67p5",
  "key32": "5Rzwr71LnGwvDYoReShE18R8aGpwnMGJ7YKExRrokBKAAsXpd5eijyTJMT6VzEzirVrep651gcLSrtZkTscSUF3w",
  "key33": "2MbkvzvrDaDUcBftJaDq4YpDsXpGB3wZHFq4WziS48iHCxLL2ePLsbpUKjhoepRs2v9qNnYqBdUg4wJEcFoNvdFM",
  "key34": "5tnkPWFQ1pr2rGxDJWJy9VZ5ULCy5XQBTrKnmzD2iCknu7FMtYDo4DpQufRvt37LKHg4Y47u6htVQEdHsL4TZoah",
  "key35": "4P3depMM9xk2X2hMcYEH7b6CUwEkDFnU7Cdrz5tDWUVkKVZyKK1ynYes9VfvShkkAUqbuorB3NeAmrDAffJrbdf8",
  "key36": "32pfDabpKGRWuisUYD1dbk6urzj3eryBbGycLEhjQHnL4DBytjQgSbPj2MDnrcp9gQqT8LqwLFQMLGJ9RLUP6Q12",
  "key37": "4t21ySw3E5ckvZj9yke7wEaVEbgCSarUsUDHcPQ2KZaN59bequSnK94fMLBeNu8wyYJn4wDK55nsRpo4x3HjgdkW",
  "key38": "3F1kezpD1ZXrBzdoLsdaoPiE3MK12vPahKUDqCfv7qkXSUftQXVnrC4iJpxPKb1mZ1J2cLtnKrPM2ZWBbmbKV9AG",
  "key39": "48hys4BFsr4fvEdJFHvbU4t9s5gvfUZM98Z56BUe3mbD4Gn8A3V5U45grh5eyKHZhsDe1HmfuoBQqMBNHhTtMMsB",
  "key40": "4GpqYoRZZN3ZRKzWqt63NHDF6sEd1Wt5o1GxjCLbFNpnrMrjo8NfmNRRZRVyFASWmt159E5NjypVsFcTpKRLnNRz",
  "key41": "4H6FeeaJ7yYZA1tqpuMvthgTTrvxjteyjwEnBfcuwhW4WzgoyvU1ALcQ46Kn94CzeYc3uyevfV5dRnqVzAmp6A6c",
  "key42": "23rV5RUxFgyBhvcySSCu1DvxUTPg9U94NXmfBEkZxkEBZgGk2Ac1cx2kwJtvMdW3tkrkoLSaBegQD7ocqrdBQTEL",
  "key43": "55eHELZnqiXeKUJCWVUhyAM8ZBGS4yKdZiWoA4roho9EHhuD6qFrosFYp5uZqaERDVzs8emHxRUvX3mgaU1ojsyv",
  "key44": "5uwtPUhiVcHRxsRMxEAf2JLXe6Dmn1JJ3JrqqLMQBYgS2qQNZwMQqAPXG1HHqPpGcDJMZ89E29TTya3kXNJFH6tL",
  "key45": "hRJ1tdztQa1rYqKW52SB8pA7KowHhds94NdZueSXrruyZughRfgcj1cwWwu97M1ef9ACs6T1VTeUq7EtVhjjDcn",
  "key46": "2KujQBYKZ32PR2Q8uBcmJtbH11N4oHVz5VECTBtup8oNT56Xx84SCWNjirypWZXLyKvFMVTRjvbVZTCygNvW2jFh",
  "key47": "5G6pkSwUxY66V9b9gfz4ZzsMP4SZVJAZJzFevVtZ546Gt82zqhndzKSh2jA2ga1RaxqsJhPgvwnTiE6EW61EvAFS"
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
