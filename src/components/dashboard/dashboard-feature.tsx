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
    "2EBNDERbGxKpfUmGG27to4MD3ZC9G9bPCrkMdY9hYgTDup7k65r6ib53BcoyWEZThiZeD5UkpA4rTpEvVFiGKRS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q4TwAiHGRBeTjny8bqbdpFfxAf2BYMeByMChMNxMEUwovnq5rbaaXDArNdpUhZftyeKvdzd79f4QCLouQ1dm4P7",
  "key1": "3MPFhDzshLPqKKFrEvZAHmzSBrz8FRZyuYfDkGKQHEkAuzBrKgv4tyy26ucN9NbjezY4KLdZWX5bngYRVHvuazun",
  "key2": "5t2A8K7uuWr1LuSr1PnUfUYCLXE8NJA7mViqEkhQneUPqrpnE4L41fyhQmrEMdRhN4joi71rNApqDZmBZMktRT9J",
  "key3": "WYsUr7cJi1eiS3gBruaDFdzfSQZV1FFaTwgr5WWTqA7HufAcHwuwrvudk8higKHRuEScg6VvKZvPe7rXH791yEk",
  "key4": "2fdAUmh5b8o2uAAyV5cE6FPGx1eyJeNkMY1cY9EY6wWhSohGadxjVNTJcStXVE2WwrTHPxdAfngs6f6boybLvKJw",
  "key5": "xM7CP3mTV6K36jYPANKDQwZKRHQFReLiYPiwaio9WQfyroSBwSJT9uaJbc3GF6twe6JZ89rwbeJbMp9oCdBs1SM",
  "key6": "2DrgAnS9mWz1qxE74MYvTZ8oXwVGfiEPRgeidtbqiHjHaFxisNwo9ZkXNRzp9fkSknCXU9a7ZXRop5xqKetHSZz5",
  "key7": "3p18bqzcmcdcSkQSwWYMkF6tcasZDVS9PAD1p9cWTGNJT5FATR7jwe2SJMCto5pXJpdY7QSxJHSwaxhitgyo6puQ",
  "key8": "4YbvRG1zRQTwMqzmFocbQnkXzzTHcDysTWjKW2eiNwqLUSzx4HfWJHXgW3k4Jn11VQ3brN6nS6Vww2L7ypjoPPBF",
  "key9": "5fjJ2xRcueAHw4mg8WZk1tu7f1dE9TfuHJSKAVbW9FEA3nkYpwDAB4KqPD331HNu22oxMRsceeNyhRQFBrUVcXZL",
  "key10": "4aykKBqd8GoFAnYzMiB2JyHTUgQ7cYi2Js6mbGqrptErRGzxEWEJDxvtTBcvAdZTMv9KH3ACUpySqEN6m8qzzhzS",
  "key11": "4bZ3EDrhqf9xmTcB6hMfP5m7EeU41KLZ8zb4NGevpkKJZ4QwWA3iDq7qPPYpmJrzgk9EbPxmSjXEMLz2BKybjtRG",
  "key12": "5g4F2P4xi21UTJaq4Lub569GMK8dQa8SpxQDpwsbALyB4eEty5hqeTwHycKsk8mzahys8rDphH9ZEoT33tpw7GNz",
  "key13": "476gTKfccejRrQHobLbmq6LkX52DMVxBR9TkhmuysZXpQaKbepnUJfmNpPGEZ1HAkjqp5rYBRbiKu1d9gogCLdgn",
  "key14": "2NNgTt5efpXXJ14vmiKz1FChCbjRXx2L2McDpPPy1zV9gCAcZdmPAqcCjmjDFnDfdmNNRSgAer6fYc85RhDZLn3g",
  "key15": "4ehZTeGCiBrqdc4FVoe4eamTepm63YRYHcSZfTYFEXVYZZkskjEtk5Fd9V9nzFspnMbsfdAz2LGXpyNgfHJMLiX1",
  "key16": "4UB23LW36NFKRE2w6X8R4toNrUp7GxLiRgBbmwaAxtFgKGfseP7wrbDycXTiu5QsTeSQyBdkTjSLn1pc75mPLX7U",
  "key17": "5svTgikAT3eMJNyBaR8HdRydp78MZxt6WiWxZe7ZuFUH2Zj8TDbP6gtz9Rn6o8qq5aZNmwqXb6xsVoAwWMceRS4Q",
  "key18": "3c4mKJLwZ69EqytCoEaSrCrUqf1j4EhNRfEFuXfzFk7vmYcvZLRcHpGvKv7hBtxkDWRsquh1Ae1gkkcCqPHo7CrM",
  "key19": "3hL96yPzrik6WUNvaqBVT1bPERTrfrRNo8qe7okv9HbcfH5SN7QSbvwr99AXRLxpzBcbT5xxkgbntcz57Bui86vT",
  "key20": "622dfvqZpX5CSFs51caRuc9yxkQ1N2gX6H38hFYSHWPu3JyPte5LdKSiifx6Nzc3zJHgiEHPVt7PZzmvTRA1VVyA",
  "key21": "QF3nHR5kw7zMmELCbvnyY4jrWC4NXo61j7oT8W5BioeNWgEgfA15UcExp6V93WBcTJtQYt7JZ44byaTiNuVMYDa",
  "key22": "427dR3feVpGPK9wwbecKwcqGYQKa3xoXitwc1nJBfDuuypLw3fHfmy9FdN1eLcoznG7SzQNY6RiSVZBPtAhSZT6B",
  "key23": "2vesG8PzieTsB6YNmQvKRxGsxc9matbwoHM4mfNfxR9pEAyQNQTbubF6QMgKaGGkBNxqELNf4KTu9q37yvMQac2f",
  "key24": "4dWszAv8G1BKqes3TjciNSkQgFSE7hJTz6c14NSApsKZo6H8WNw2nc6JvBDoPtz678F9oG8EazRtpztNp922TQr4",
  "key25": "269R21HxACQQDPn9TJFeBHcEFPaLjqX1Bw6FvSuy6Q4N7brRF4UYT6C9moZ2QXQV3j9bKs3xTC1RsRNh2Qzn9umG",
  "key26": "4t3oW1LpRLYGY6FTmJbx2pnGqfDpmCQSZha3Tv9TsVGcvJmYL4NdPgvvFfedP81WgDHEYAbSTLPoT7CbZ6qGj1Vq",
  "key27": "3ucYCUfBUorGoV5XRNdiGiMk9VMpeLLbnKKmuRtEeLU5ypswys9UqiL64n2B2qqgJfBasudW5iNQX78QnsAjuymv",
  "key28": "5GPdeJqcV2g1SKPkgcYTdmnHk4CvkKdvHNYgUysEvRtd7caQkoPpVyYnqRaXhhHDftoMFZy7cTJaD6gCKwRb5ayu",
  "key29": "2Fz1SsdxVb3HzJcBX4xoXWjSEXfqmfBiWKLQmZfuPENdN6FxXaFgNoy99XiiuQtKSms3dcgXFEsjpzo4baxNnLDj",
  "key30": "5sCAE51kC5fzWA2yGG8Ws31pi2yqXN48pTXSCQBxt7in2i1Ms5KnnB2YsyHH2GZtVZnYFrHZe9nGrHPANv1MFsYB",
  "key31": "3gEV1GA7Q5GaTcS31GvTP1KBEv326YwrS4U95F5mrtXhywFt2djB9tGL34W9yeBTE5KeMzVK6CUShvjX3TTTa8eJ"
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
