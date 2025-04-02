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
    "3ictH3W1r3dtBiepsnkfMtzexTcc3rTKKhVDxsmKzXTDUxxHzZyDgakBkJgniYER1z8yFjj6o9b2pdBzQcMLSbFP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zQvFSQJk2mdSMNnSTWg11U65dr3QmEfrvJ69HQaDAhir6aMBcpWernpYEyN9TyQAonSkSueAeXBRDkdrF21QF8X",
  "key1": "2nNQ9zwwDJ1JQyyYyMomo5qMtrAFqC23AWC3sPRxdwUce2xhHRUnPgEQqG1ibCHsqSMdzdrZ3NpbJnPWPVZXwBgZ",
  "key2": "57WUUgUiKYJg8VWv2pqdLQh8FhTgprzjpW6rUEwgedXFwbyTFnyE2Gu7f5qU2JE4RuyhiLYc6Zr692myVUBKWAz8",
  "key3": "58GUw51YPJ6d1FjrX4nzAxWFKCCBh2GsWAs91GHkWkiH67EVvBQ9szSz3zDjTPX6NQ2gZsSGoCwRFGJef21PXnVA",
  "key4": "4vzEehiMDY1i3sFcVwJUqEXqmy8VhySsfYKmD2Ep7w6gpJitnB1ULT9vgd1nsaTm7L7wECJTY1xdXWTvxhccpoui",
  "key5": "4WzSNfQfU1QN1wB6EG7spR9d9MFMkcAjCumhGmPtj3FQfGSxdDAxcwmMnizQwSqGosRRFPPW7ob4gwaD2quAoewu",
  "key6": "29QkaexSqKD1y53CSwUoxPRV91AG5DXVx7iTcCXbrWTewWNzfTez3XbmPHYKKC5Q4KozbAkc7yX4Q2RCtfV5tAnk",
  "key7": "269NqYJpiwSbaXe4yZukL7ntAvuyc2kdJkLr77aSq2Q1A6vEZAQMhVQgVEtXFjDdVpYxwyea5yMziuaNoWVSa1N6",
  "key8": "3QcE51DCR5Zxfp6sVTDdQUXr4h9cV1mgjDEvC1C9PxpdkrpKsMKaKeC99MECNzL7irMQnLQt7EGmoR7ECxarCBVG",
  "key9": "3Q8rTVdTFRjxtJZZ8t1B9wMsY7zrt6mMDiJcA8iHAf756ZhGpFXN3dy5ViKwVe7kjNKmbasaZ1nUmk88rprCQDVt",
  "key10": "64ZhdKp5qL93zySLp3nXUQAHMawZfUHWo75V1RNBsi8WcvBwLLNev7zMXo7buvBpWSouCU6hoan6WwP6Fr3Teopx",
  "key11": "42V4Ss4gvkcj6NZhBYVtmRHsLwKFEm4K2QTTpG4pcfPrAQ3qNhXNmBV9sL4F9AjRGeyWYkizvyx5Jzxg5rKRYHGC",
  "key12": "2pRyvuhJJ7chLjs2y2JFRJjcaTb14h7RsPWtHCzP1cwhRK9nj6vjRNJVmpEQJJ2qbHrZFeQgsg46F2Z2VW3gp75d",
  "key13": "5r9ggbBVKWcmAZTBAAmLpz5LvsVYY1bC3rsjFj8Z3d7UHgEyo9vxDYLDuj8QMhj7RNY165USNNqeSgUMkNSTT8Pe",
  "key14": "3LStyoDdU7bTAxaSsCmXWba5s3N3hSuvksbiZjwt7exJ9dYdFYy5odLKQeGg8CHrM4r9NmiWkUwrDwXgZD5CCbNj",
  "key15": "7yWTuEYEJVVAUwixnXZYCwX4sc4FPpFmsDB4Nf6izj8WAN1XjPUkEBVi41ckxYYyb5fNm5sqz7qqyPcp3dSMPbX",
  "key16": "fJJVAvXGqfMXpDwdhxkDDwnKysz6yLmPKWE49v5XN91i1fCiHdSoUFmayuSwB7t7wEWQkdiRhfkAckS5s83JjhB",
  "key17": "9zxj5JXW1S5tR7KLAvGbvE7dHiKWZHyYBSFewi4BCwjFX8omJFd9aRPaEUFrTNURpas5YT95Tw9oQmc3xMuFkzv",
  "key18": "JpTgaAnKvYyXVCbK9M4wGdMTyhUz9UufnErGcjgBAzdBC7QRxmc2qy4K4RuXJ4L8Yg65ZGpKs39NKrxicycn6HT",
  "key19": "4npc6h7bpBQinsFcCtPCoeP29dqnUyKuw3Cz6G41yUpMCfHgrCHJ2dQcumWXPEFLxxPpbeSDcdmeRW3trbHwz4NG",
  "key20": "2qAW3rBHmaxkFKgfopRn5cPRqMyJRjbfmNbFz2mWQXfVEksmJN6vuGtMpedLhU27YHNqhqoawr7qYjTEZuhKwC5X",
  "key21": "4w5EvhruYbHuvijiXJtFruUCJ3kzQAnsLLTMXziMeGLECnw4wMBahauX57rZRzVkJrFjpnfoD11UMeDZHSo6LaER",
  "key22": "2x4kMLJWhHRCcX1crGpSC2w3bNBmtXmpWxfzYTLXMoTmXTgnc6EzP3c3i6pnY9MoTgm7p2n3DKSjui3avXtzGNhS",
  "key23": "2bEX1GoYLHaZsSM6YurcZRDXXSomLWjY5StCToc6RS2gwxV4Za4V43YGka3HMvLEevzeRyNKQC7gqmaxawtbUzzC",
  "key24": "GStwP3DZg3WpRpRqULgjtDMAA5tgrTuQ7uVb378muAaHUZa4xSj9EfvezHuCDMu5dqtvGwqnPofGzHoRQiFo9Y6",
  "key25": "62DyKNPrt5WEJK5NeeVhAPXmaYY8sBGNGwN2nD5uQ98QvkJdGUU7XyPVLTfe7soHUYtfhB9dvBU9TokpwSNyYBmR",
  "key26": "qXPtDCutFA2ipSsFZmKs1wHDunQZDEvDZvmsfWWWPseQKLbHo7i7xmgQxtvyX7gGazbcXbsbQiEdSjSczt9Nmxg",
  "key27": "2Xre41xQL4BsthSnju6fmNFrxWYLuFavy3uhrwAyDKCQit5ZKHyXQYVT6TeP9hqg7j78yW9tpz11WsyTrttPxR34",
  "key28": "9QCsnrzbzR8bgF4fCuKdUKQfJs8z5jssec4KeVYiPSz9w9M69SCeJVnXZAxSjUHZ5ZwAJjaTsuPx7t6CTk8XezK",
  "key29": "4sRfGWfQCLFFhtfxU38zoixXV2e8hNQSWz3AFbPm6WZD2hT9pv9zKMUdNKFC7K9HtXSeuxQfnq3LMW56ZFHkNBmu",
  "key30": "3WgVK9zdCwUJF2TxuvdKqpSEwzmWsviTsQdgVYe4ZSt7twe8TsFvoHMDDVsdsG88VUDtDggHHztcPjdur9AaxXKo",
  "key31": "2DFTfsckMJ762nLVrUoXVZFCuReNigzuf7seUxpQFumYGpxn4UeLcazRLcu37M8gp7JGr2PqqwoApU3SbeYdXAfW",
  "key32": "3hi7WSGU1Ds9AAPWFW6HjshjgAC7gfugJMjemao8C33NSaKqNNKWZ1eg9351PhEYXfhTXz2wjncjPLinCses2vE3",
  "key33": "33J4aHu1PGsGRtrupKXpBEzsBPQyhffemFBoLWDK9Ez2GZ6dDUBHvowiAxsniekKkS8bD1YBBcs9NTtirb2xpEHV",
  "key34": "34HnexX8K6m6jnnU27cej7MQwtKD7wKEgiob3jEhhUV8VUA7aeaKaSdxhM1VUHqqWWYTQH2SYwUXGaoiQRHkP2Yz",
  "key35": "HYYVtYV8WMjmR42qzpMjxp22p59AohfU8vgKWRiaqeT3nYjht4jgm3VffEZ5gNgCQ1bqfntvp25ANxn9jL6xR35",
  "key36": "XAHRsyYyD6fHS8dz9r7mPdb3UdzsWZR4K1beYjCewM5nvYv7P6rNa14swcScfoqi6KDyQV4X3hG5nWxTdAqVoKm",
  "key37": "46rftL32PuBY67zpEpAmfxjT9voW1NPgsZtMHxQM5X6PTZdY1EFE7jLFmL4aswzKMQbPArMTKHvVNKSFQuzvegzH",
  "key38": "2dZVk3vazamsyRnh9r4HY7xDeeNcvYyjQepvt9Cyck74PsTjoGjSK4YhGBXuVjNcrCiPBs4BRCexWbAkAyFgYFnM",
  "key39": "3v9x66ESTVnoPQB79wbSjriGK2nokSnfL9sRfT2DYDpAh4zZryRXicNrnSkbbrL9qrWP3rw7ep7VHjseUHGbqo1B",
  "key40": "45mm1968ApiZNcYpzKDKppbFhsrPucZoSPnvvNM5noMS96Tzu1k1htRg7bwRt7svwXtfe3PiUwDdLmau39au8Mht",
  "key41": "4rPBMZ4mqv5UHRn7WU5b4YY9yCEUYyTcy1KHUVLPyKkuQp45bosMKu4txTXgXb8jkfyeCYsWDjDo5E4asbPtZvp",
  "key42": "wdfNgA9ayB5preWXeDiZzkeHo6YisVZeB335gPZ3FRBym41HmiMhLPMDJEESUXncVtTg3u6S2zTTbsmaBBso7sC",
  "key43": "4ShyRiBVz1gUFLvUnXtRyJFaZQwoqK9vv1rEq9pZ6v1nTrjvK5i9zjgUgwX6yx6PpbmLWvpAkszDmTebiic67kiS",
  "key44": "2sfJN9r7BcubuGGuR5n1Nq6C9tQ8NyqMoxCf6fpBVVXEFhh3gqMpmKLSvnXmSQS2eVZudCgh1mgSXYPjJPdtjSvY"
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
