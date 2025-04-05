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
    "3PAazchxkeW9DH2r9Vm6QT4DEpKD4FZxUF5U9qo8Ca8LWaZVb3ZSNw9gLzQnqk6DVKEuM8pgmBaP5T1arWVD8Sqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GBpn8ecm7RBz4p2bGu186DsGEid9BfjWENgHEiPeB577QXrxoLYCk6RghYq2LVY18St63YRW1krFVBEtcDg2dKH",
  "key1": "2TJHd6ZVm6WBDR2KBeBBqeQLJs41Lnkg98RNQbbmWWWdvdenMqWtFGHE8emRZqs8fdaasJ8L2mnRmaHSjuKrx7Ai",
  "key2": "4gjedVaN9MtYoQGojZyT1MhKPYX4B1vhWbJ9pBEi8cAfC5LcLEaJdx5v3TvTJBm468aT77vJBgu9S6AgZQBojFgh",
  "key3": "2Pdrc9T6Bzm8vwAh1YLFX3N7T6PQgqSDSqkc4SqyG6fHX8pgAN3fc2RhEZf6eAi8tFnqUCfuhwBVknpi9stNFNJv",
  "key4": "4bqRLx2D5YT2TcQTMMqHWJ2K6u5kYuQQDMCuCb5kKYSR1khspYz25tNwvuQrC2dJ77a54UunQr6Y9mqjGDQTZvQE",
  "key5": "5vnNsQAXbMWPR8mTjsGSzfeoXk8Fj447Dt28k3qQG5D2uNh2eJ64tYDgntYqaMr8Njaq9yUqzeD16k7TzQuECxp8",
  "key6": "KpNCDRu1NWigmVQfg8FMq4Sp2Gvod6Kp8xTviiSbmw9brCpvAAi5HSZLMWeGEEWD6KHQrwMQBwFdRysavnyNQsm",
  "key7": "4vUPQeWQceoRKRfvtMvKoKjR6jq2ZLH8mZDoxTbsJ9AkuoBPDb1mTUSrpPzU2JqPGiRJoBFnpbsd2MaBYh32NrsV",
  "key8": "gpiY5x96JjwfQkbtsXW6rFmAZLtVyQXRuXh294uADwPqiVJvJCRwGh5Lg6JoZ22tM6usnKBDAbsVChkpiy7zHtJ",
  "key9": "4mEAkcEudzC59cYpLjqyMXe7WMdcpDhx11rVDjyWUWGhEmZTTteRcKb7MPNQfwWREcnHRjZ5Jf4zyvgwvt6jZnwZ",
  "key10": "64rf4qmHBWnAYpnamWSyNJSrzmeAzf7o6mPAbHfsGj4ZJFhRFbrviSjuGWVEtyJX42w8Vnbest9GXXXpyNP8X5E5",
  "key11": "wmTwjQiQ2CLxqLxM2yzXhtiNTVcuKhM4vC9TM6vKpWdFrq13HmrbdxaSvLpiVyLewEtMtenbEPahnLKv85jNh7i",
  "key12": "2EBaM4NHB8oQaKQphBGTWZkBazW9NFH9kyBnJeRFJGLna8KKv2VbM5bJo8uXmd7RFdrvKuyLAkgn9ZqgzJeBHgHX",
  "key13": "67gpVMft4graByZiYAFpKNJuSvQfcT4SzWZ1WGjyvXMc2WwKHToY7V4cXxrs5kQDtzw3rUQvFQ72w9uiy41GhWL3",
  "key14": "2DDu6yJw3NfK5N2S9BpZhf4rz2vRQApPr4tFmUvbzdbQgZfsVZrqEyMVtgWyRrs3WVgX6GhFWeP3xYoLq1ichGkL",
  "key15": "2LW1gQPpTtSTKcuHhxVXFqT4bmcsrPrBMey76apCx34qVHFa8YHjsJ39EPGQ4p2d467j22EQ7wvakhGA8SeeUd3o",
  "key16": "28h4JjSf8junYCMdAqDY9RZo7h5dHubkKTbCqxFXYMKXgBPex5v3AW3cv1N9cPToiZEsEn76kUzQ5acoAsAPdMJn",
  "key17": "3jaGHMHqe4x7sXkamgshsaq2AGS5Sk2Tmm7NQZHT5scwXuQwgFXzVRDGcsmtZnKGnWPa7aZqHeZXQq8kRvpKZDsL",
  "key18": "3JWVqYnLCkCcTqJwHmY1QATWqW7jHWappP4jdMY1heV86h5jWJjfQxUSVTtWWNifecKmetMQYPyw4dauqwDMdpWM",
  "key19": "5zcfzV6VHHtqNib46853jHKsPpJv3aTnJAmj3zru1Lb2DEXGXwKmbSqMUAXjxqLi4SY7TH8ZS1oNZvH2PaSVBfph",
  "key20": "5YzJ82qXBnt6MrFhUigCvZHSozLNUxQGYJmSDNHtxHmMTP52qKWJpE1TbJw7PbmNF7dMeapJkra3ouiWLPjke5pK",
  "key21": "5RT7mzjwgNj69qDWcebFEtmvZvqFFq9fWYwia4XxbrWmtsKJopY3X1r2gsRqwQdTxLkTZc4VPmRM2cYtyJ7uqD6x",
  "key22": "2nCyf2RXiUBGnqUh1NMiG9vvj4bJXAyrkQDdGiaZTP3MrAM9MHoA5mWPxxv9XhqyQauvbD8wmD66d4CzSd3KQALG",
  "key23": "2iqgBthnR26gzdgKRaWNpBcjaa3yKtsq9S8aL3eXMLWqU7Z7R3Zaj7j3dF34tryoNBPWcThB5pbuPASh2TaMjGC",
  "key24": "49J8PUf4Bdii3qfBaykBx4p5XbZ8J9yCzJfq4D1YtyZ6vK8EX3VKi2Ei8yYuPWdA5A4pgENdaPfRPAz2snmfcad5",
  "key25": "YwWhFW6NstRj5nnbc6RgWfSKafLC3x92ezJv5YYmKP9heorybq638ajK2LXeejx4pKq3oXCJJqne6GKNNPvuDuL",
  "key26": "3UJvx9YrA8fPTpBx8144jD4Q4opJdLnxDrJNNGTPbaaFVBhEvy53Fuk5QNLTcx7eNbJHoUhwXoxWrs3EST8MGtpL",
  "key27": "wpBCiga5Sz2zwtGUKgnjtdPRNxXSTuxg7Jtd56589Dzmrx1LfwADkBXywDsAGUu61y57NL3eWuLjDP1wczSvPRn",
  "key28": "525LUJ4VwrtAtvGUZr6abtfftqo5C74oNtq5W2DueCTbg16Zc293q7UqtcYZrE9QQ1Lb7byFHZpguCEimC4yTPMV",
  "key29": "2F7jDkFJXFkqw9xsRrvVqGpHLy4JnBviJvsTacGZP3dmemzGEFd7VR9xodf8GmqBjvNCWFRaCeLuW6GzvMq2XK5h",
  "key30": "2aqGYsTUMgYBk281uaNrpioZgPjhjhwyorQs91VhYVAiTzku7utKk4szM8J7f2CYGoU6ftpdw9DUMvBhyvmpiLd9",
  "key31": "4P6QTV9jyLZ69fnPJyusDngQ51scrXfrwRwwrQphnvWEf3SEBFEogeaKomUQdZ2p2ZfD9MGuSKf4PvPDdwipbsX5",
  "key32": "5nqDX93Ro4sPgkQ6wA4D9HMWnuvmUEJ7pBLBVyirH8n5aM9FV5Atia64wpQFuxdTfFbpgPHUMcADfaLqPg8mN6GZ",
  "key33": "3Ta4pdBtrSYdCJjWAb3Ezm4ppN75WaBoboHNiNxQyhAcGma29Bv7tjnYYn73ykDAWfGAdTyxyAJM6NCxPYmCirG2",
  "key34": "hEgGVYzwVn6zac9BuEzi1NAEpXmaraFvrqR8mqwFGAA9km7LWvtrVA4RnxVQjpaSSGHu958npG8ruH6vadXFJtd",
  "key35": "5LQvDFy1KhoCDs3oaXvygF1VJAnmmvkgzWL3ShW4euNrzozEpRPDdqetS46CiUdRdNhM9kuJit95gdXVTudqyq9a",
  "key36": "2Q3L7UC7thspUy381RHW7H2NVkYyn27dy2L19HZq6Nf97x3JBo7WMexz2TmPeMv2xHtDTHacbkZ6cGAwhZGA56fV",
  "key37": "4vcV8KLsNvUtREFz3fTM2Z5cK8CkB5jPkPkrR1DrBUHzmkH8nu2453ZTs38U8Acjto7sM3yF4N3HZNYuHfFmCgbc",
  "key38": "3uoAhUnVN8d1AT9ZfgGYBZdznVXzGBLPBAt7r5FcdXaz4CvrPcYkXdaQTZW4amoh9BL6iPJkLYtNuDP2Xd6kQtW4",
  "key39": "5yWzHyY9sX1NDJv7AyBfp7HC3LmNBEwV65WtVppVujxDKKoD9owx1tfYwKB1XgMohuP5rTvYDzMQfm9jTJBxFG3y",
  "key40": "654CfGH2wZEFMJ83t58PKC4AowxwQRvKJhmEiF8YyU9L27g7GUcVPaDiYdD4PfTX7ewPrjWRYgkD5RyEALwwohzo",
  "key41": "DoWy5bEG26ByMuChgr7Y3E29LQGj3ju4azgjb1TH3gkZzp6og7sF8uT9TKK5XQF15p7RsKeixnFVXNUvxW3tAwy",
  "key42": "2rvFLLJvkVGpZfbYssVXnP3zBhYMRsad8K3wA8NVYKaNmGPSuPZHzasPt9nZW8BEmgMq1zFpdg6NuR9cLjdGWoj4",
  "key43": "28uJvMAeQDCqVCwSRioUxRyLAajv8jhqRDrfi9HA7Uen97WcoByxE1KpGuypLjRprEXFAdcqaLLbP6vhxA7Fenni",
  "key44": "4S8ePKtPFCfHJ8g9XAjg8xw22fSTpafge8rkFrue18rVzxTzsWen3pnWyygD3hrT6crsv44tBFoGkUbeB6ghNszh",
  "key45": "MDt9jf8bdLRndrNGF47Tbhn6jQXxpnL8CYy9819Qt2XH472Jw6ChHCRTi1iRHVzsJHmFZUzdjTnvHxhQSjpSV7Y"
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
