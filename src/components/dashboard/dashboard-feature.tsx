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
    "5TZcFnrKVwYtX2DaWyVMHoXqm278BrNv8xR3bdxJp6MezCHB4KYiirG79cjZPiWEY9gopmqsa91NF9YXuTw7bok5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33BDV6AkuopPdMXFSjZbFSJ89Z9rDW1xLJRHWtnpoRAahvwpYffmnbMeuQ1P8B6Ds99T8LbZ8xHQc4mNaXNuMpK8",
  "key1": "5eRc6DRjQJ8tonWX3z7yjHC5VzBjDcPPgBt5Tw1bn3nH1aK8ySTytPHdG38pcEXEK3QipfjmrugtU1wKQNiS2ioc",
  "key2": "6KULevfCWfp1WwRCurSNv84NjNawkoYjvaW4ToyEX7w5vTNpbZkMAzKxiPp6R1fiD4t8fZgJ5fyzskDdXHFBmBv",
  "key3": "X2e76TtonEV25EJYYUh26Qj7jBP6PuHkApLKSMDyBQYyoFhvVQgU3tZ6ubEdPqSBXS8RvZAZoYgcYfL5akbzxTG",
  "key4": "5J44fXM178a5ZDvXTTyUEXD6ys1QSngXyZSEed5Hbwq98WBHuBdGotzXoQaQewZMwz3FVcv88hFwbek1qNvUZAFZ",
  "key5": "5mrLtvZLrkdJaKjfZw1yRwAe4gmKo3zXSayGPL34ET5MxHk3HcAq3YY8Jcyb4xyn8Mgdk5drBJBP8BX4ok91tykE",
  "key6": "35REChdrNVK5TPHqUsoK5YE5m1MK9F5LupVAmXUX7jc8G8E7mNSUSTH4aLuGN6xZ9nQVs39QuhWAWN7bEEetpSV6",
  "key7": "41CCUj561wv49Vjy4vXfC1XH6TUZTm66XFCbydiMoP2cPUoi1CD3J4aMb5UKw8hc5FPVN7zFmhrkaRgjcdaqEjGJ",
  "key8": "CTsV9YdfTVVsJ1ybuSexZoSRQWkB2iiQvDrAVZHBN9F3icmqzQg6n7uFXTup2pXBEX1qEyMvEDnrSj63YxUeASL",
  "key9": "35WdYNvPQ2C2a4zx6QWCGaJkTohNjELDRJVj5mYZAAz4Z5PX44NnNFUuSbU9mMgmMuzXZseSmo4ZR96cpvqYQ8Ln",
  "key10": "uYaMpNo6QXfRkJraWESjjWsWW2h12ecmu1cWCbEnwEwGN6ecVee6bYzsgRUj7GLme5d2jM3Yns4chPAtxZAXG56",
  "key11": "4N2XBV2TzoXasJ4RGSxmekW4aFFHY4Qac6qfituKahVpGMZzf4ZymwJvKQ3NqkieLfcStpQqoYsWLcBxUR5jbXt4",
  "key12": "jqgUs1Yw2WUcisP5d1tAiGDFAExDdbaWzFHAPfVzwq3CD5jgN5eR6ZnsFdK3yyt64p7jiJZY1YbtWhuCYpz52xQ",
  "key13": "2AHtxEeKvy3ivW6TzQtrumHmgFqqBuzQFMNQ17LYFtbAwW7UaxqfWqBHkvLQeEDwLWVXbBfR4NwgAankRW6CX1FG",
  "key14": "2AYLeGZJA5bi4GXHUt21jwZWrX2eABZTCxpxDc4e45o2hGos4y4bVohys6oXouZX22HgVgUpQ3zjuRd2XCRu4EtT",
  "key15": "YVXytub7SrREfB4NrXpqgkPYbS69EJAYM71VUTEDggRNwiaRQUoZ7LfFZ4dbYG32Uiq315QVLxvXtujqRQemxG4",
  "key16": "4Eu6fELh5teTkTy2hJjDeJWithVKsfAKafi5NniLQoicvJfK6YYnBYihhxZG57KWfXWKQ3yeXS6ZdA5AHnrYmPGz",
  "key17": "VgAmWRNvapHg3iMpbmPKSErsaCmsad2Qof4k5uM15R3qfMvp5zeXtieQfXttdUCoa4wBEG6cjYHcoECAACNL7CC",
  "key18": "EkELLG2epXihmtHAnDWPZB9kXhgs38cGuUpzcMLe4HxxeMBbuwWvqWFSieZQ73sen2pnFZ9KMv1sM52VuGUeu2W",
  "key19": "49UctfTbhG4PpzmDy8HnYjU1PUTP4BnY7MsFRccW4E6tUVQHbYAwZrizBzrHoZmzaGNmPX6p8A6bCRn2UpMHL8a1",
  "key20": "3VLJzdCjGuTcjQMqwBQxYxUzCzjFCpvP5kcUWRVPCp4FjmHQRJdxMKyJMCDP6555rAn9hfgXQR6WJxPQuqyJDwxu",
  "key21": "4SBr5rBHYHv8wiZ48LgW6UXV4gy9oXFfKdNz8zpyynbE2vby72xP9RLELuVk14tcRjkTrmeSEnUQGt3PrsnVdJ1y",
  "key22": "4U6zadnQ1E4tXiTqsRWhMfKQSFJuzAWQJgKQFmL5axapPk5Eh8rh8peCXXRzbg3jWzGnz9iPmDSpz8WYkFqN9fEt",
  "key23": "5pGrtsRdzT8XnhFUJK7mvNZJs6vjr1ssitwmh9vzyeJdk7VsowxHw42jWRRBenRb69HgtrwNjzZxos3xR8Eu3Fzz",
  "key24": "39aUoBmKqN3zawSG7mKov5Jv2AgcJiSMwW5sC9FpN9SBwYR6cENFUrtuyFDHMdnAa6tAwUexnkf9J31qnv35kNUJ",
  "key25": "4ZFyPg2hg2MXqJMxLginjLTpuPA45qCtuG8SY32P3Bw8JDhp2dBVtX7HkewxGpCCqHFXd5CbjWJSjWjqCYyuMSQp",
  "key26": "5WLRZXswPU52syiXR6TGFGtmkvqkCjCUaKqBaNR6teWwC3mFFwa5QjCucRFGo1ivswTeLQUJ8ZRxy8UPZKHQa3UF",
  "key27": "4u4ukgrq4GSMixbUFwW35kEQUNd7D2xgKHgipwLFmSQGYHWrcygtEgktze9g73ZLcHjsgt9TFMrjrW2fd4K6i6AU",
  "key28": "4wzq79NTpufEgbH7XezAHHpVDFYjAnkaBkjRPggtb2gao16Q7ekrwT18QeUmGWfvwb2oe9aLPbpNFvVATRKPUhcw",
  "key29": "4ud9Y4dk6mh8HVo2uoncAE2RT5nZcddMvkZGFuoG8CrhEMhWBdXdGrXyWcGZbVhMDJHzkomXiZ4RbfbJdaNvAb87",
  "key30": "35CHMbPTu44NxHTrJobwDi7NWzmXQt6PJYKtnFE19s6KPe9FGDJ6EfzmczCsZJfrRMD2S7GkEzXvvpQJ1KVRHeAy",
  "key31": "5KzuuEMdTHRvm9DLrqZAuvMrQMeiqEy3x2hnwc51A58Jwh73BLkj3Kb2ptR6g8pGbxGW4xPzkJdJgtkmQkNHzXG7",
  "key32": "4FaGDdJjmjeioS1Z9cBmskgYztHVTDkrtkCRjPqvvV3ingQyYXnqokdmETz7zcuN3ZvtacmmcAutyHUcazMAF8Br",
  "key33": "5w1d3zFi57MtAvaxo3nNB7vTraS6cpcp7bFXsQPV38rKeMta9wm79y4h9ABQKN9PmYrfvKX9TzSk7fyZp4EesoKc",
  "key34": "6AHNwfEjmfiKawXMTcjq34QHZesGGsFDZUj8W7S28S9Uk62ZopVRM4WNywy2KM9mPYaamb1bZohxr2hBMdRz3iK",
  "key35": "2jBMMxwqi1Y7piAa1q2Qa5ag9YX8wm6ASjiWcjgmBBuqhSE7Rfb3G4EbKPjZauwJsFcR7KAMU8Fovv1RReAQMJMG",
  "key36": "r7mTRfn6MYFrppUhFspkftNwCEqjW6PMccxoYRzfpyAc5hJwDkU427yHv8CHMPEyFoSxMSZMutV9FnaubtayWPk",
  "key37": "5VTJq2XT7XyWNkGAdF9DR9BAwY3h6X4ZEU5iVCeGiAodmtYLH2RKipMwZq3Z3pW7YUZfbgASq5oAWjQ1BrWNTEmp",
  "key38": "2GMeNHZM1r82oY7X1XVa1upu373BpqX3HngV6ZFwvPCCSnRKmhdvzwY48Q3GrKcXmCYad24surZmkyxcMRv4rE8B",
  "key39": "29EoUPnVMLS8pJvQymzcTfYBJthqRPm4zfYisWiETi36K1BUktNRissFrMd5GbZCgRTsEjYCi457YTWG5t5PX1XH",
  "key40": "2FjoBNseiRudkS7MQPAtV95MUBsecVWGW1B2kutA8vaZGwey4CoqkdwB4ryZhrvQoU9TKRGeuu54xE3UeS8JMLpj"
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
