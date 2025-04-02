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
    "43CweQWKdbk3J1xCrhgYMmj3LS1Rh47K7YbHo3nWt9GzArVcqymrfZsoyyandNcsfRvuFmuTSbXZ6haBXXDygfiV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ThS1GRKuG4pFCkqHbsbFcUMUisxdXa8wSpPgt7tJN2zXvj3r1n44SdfxXTQwaJL7vdsHFUMqmpXNw2kLbbv4sNR",
  "key1": "4RGfAVYA5qQdzG4XDeLmSWoV1RDVWHufdobVuGssTvChdAH414RZ2vcjCjrG49UWwohn5PtUuvb9rhcd3UZwTCus",
  "key2": "49D115y4tgKe3mq5CyLcwv2yiycxFqUNSN4TUUShAmdv6sGURyTN79LLYwRyC8Ry2JU5rbudn95QKWw2EqKE5HpW",
  "key3": "3ePHNviUMVbuLkiX9yumeuzAfWcPeKycjD6jEKTaMnBT6bVAMz6zojshcm3Z3tUqzQUyTVW5R1dpbxs2cHqgHzM2",
  "key4": "2i6bne3onrnMHMKfrChb6jbCzdUK45zs5zdypA5ikCzJksDoJ3mykirYW7S3n3wsCaL2wqj7gRnrwZ7pPn9i8ob9",
  "key5": "2HrxncaZAcUZZHpywvo5886MCXHWz7kiayYw66xPtSSnN659jvAswtYYmwqT4W8AaGKgg2mZQrfD2YcMRDAUR3ab",
  "key6": "3z6WS4He8hpYSr98YspBZri96hvke93DQgjqjHT4QFddPG9rkiM77av1CGg9xr8BCAQ2oQaLh5qfL91fubsKDguK",
  "key7": "5Y19QUkHJPR33huUQ2qBreTHVDDzUEDq3FcwgpcZ4hxxRfSP1EpqK6pmLX273A4FTRV2PD4ivGUHTFexTokkna8J",
  "key8": "2cUTbsrDyHjur9yRC9AEdYRTF8ZrmvkS3xgWkcdqs7y7XyjNnrJx5pXESfHdghMvseHSCnWnCUMMExF3jX5faJht",
  "key9": "253APwup9tQ7UHVsnjtZqQsftb92h8NU3bg85Rvd1sbSXegRqF2NVbvT9RtjdY2Xw7KFmbATVHaddzPgJfznPkoH",
  "key10": "35sZFmNmkyBZv4xABjHyG2KqwKnHxrgFSz7A45j4hsUwmRqU2Qmtqh7Ye9S5gKjXCYkcdogEZmxjQXPPxT8HvXHm",
  "key11": "4m6mic5h1MvkUHtoahKqYSvh7Kd64wPK2fEF45irVke9YjNjt3D9Cn4WsCeZC5CpqyBFS7i4gCeUFve1ZvyVbhCg",
  "key12": "3CEkjCEKTy4hrCWcDiNHYPR8btewZgt8ikPDRFSGQ6mcqD8rKhpnc9y1XFoWDaheaifSmcgnWxFK5AcyS1BwtpcL",
  "key13": "52a3zznUP4gSK8NGKhYg1nCmY7Q9DYyQBngT1iszM3p3e99mcecR89dGu2aZxNbcL15jR4XoKJXkcoeZQyBYXbrn",
  "key14": "3oLEh5pDZ9A5GaYwkhwWhgts9CPxoMemU935cu76vzE6PwWefU3ch32SvwMpdD96Y9wzrqTnDcTTaf8PP3E5tCzT",
  "key15": "4ZpmEDijRXF2popxmx4UpxphNmQyqg6hLAfxyDL6jCwnCx5EJDiXgZUJcm2nTSiUfPWwpNaRNrWqt5iayERxzqJ5",
  "key16": "4T2EmW2u4pxYFYeG1mtaJGp8t6MCJb1MEbxjRoG61YEbbB2jZ5uJyqPACREruSnAGQs4amTRVSEMMLpVxHgwUvcR",
  "key17": "5vsPn7PzDvkAUqXbY3F2pZ6jFFDbDJsNTHVuZiewXKduZExX8mHs7vzsSyyz3uDqj9Ur6eGNo3hC1PvRJYhotkiX",
  "key18": "4H38D1MoNCgroyqPPwJUyPqPiFrmzgqEYkokzrHxFVWzMmBLBWgACrw2rFsWDX91KhFNBEqAYVm7SFdsz1dJ57HJ",
  "key19": "4awALLzz8FYqwdsxGwP72bzHu7MKpvF8dMaS4uC5tG2LncoGN49kXkqoH7XAwkLso5n67kFGibujuPXftgqUqVvT",
  "key20": "65nmJJo48K3vYBqq6iWcnr9FbTmZ4SvPfyRugeoD1DgDaiU66YSdW8b8nSZ6QkEnzJVid2G3PVoi4cVRYMdAdwvL",
  "key21": "4KHxRgAArrLTrvXLY7ecSZtohrAoN92vsZxZ5zvKFfSoarmMx6XJra5zdJ1NjhxqPi6YY1dTTqPzVcny4sAxHzoB",
  "key22": "48EVvoP2ZmgdmyDXwqnPEtU3jp1QbapKoU7BRumskoZQeoGhqxcuyZgNJ21JM9wbAeAMKYLmnyyoraK3mn6cFUiX",
  "key23": "4ZhGWaCzBJpnuquyyjFZNnDem6Q2UcRaWBTr4beDnyVuKiD1QAephGmW7rsQ4LeXQRN5ccFNmiF5PzpSm3xsDPqx",
  "key24": "65KFyRWWiQERuKvzNn9Sh32E2TBeifFNgpB4XLtzRv1sCzr3eZCbdhGVwtWDN7t1grWJReeroLUQJBE1B11nNwky",
  "key25": "cjRSgNnhc4CnffMFBZMQ27pNtymkqeL34TRWq7MuxjtJ3mJNaQt4uFwT3SyyWZEYUmTaQw7bTkVKf8Fojp897ta",
  "key26": "fTT9Nzd3EzzZUSiuWDmcbb7bkLxdeDdAGsvQ3grfYf9u3A6mJvFYrQ7NHzuhWoPdbepo3Unnyu1iGPMLme11ZJy",
  "key27": "5hNvBN9VGkAkUHJSbverTdYvSZmw3cj2XxGuREC7vuLBn6dGsuiPps9Cxy7dbF9ZrtQdM25LDfe5Jn8Sd6xqxpBz",
  "key28": "fE7XSUDgFLgLqPiWeeD1uo5p1PU3vmyxcBQghe9gB711NEw4mXva3B3t83H2kKH5M9Uvd43YiY1d5o2DjfgPZ6i",
  "key29": "4m2T9LQ72ECnovw4qXe3thrkT5andEFQzzscEQEiCJmBZvhGJbpFd5MnydVB1Q7Cf7uoqMN5fZ275eHBnk1agbiJ",
  "key30": "21F3JWRfYShn8HCfSwU1GyUgPeN3zg9QGcyW8nydJCwoNr7ybYNH8fAHRhGbGbZ2Gug23TjF1iB9tabjQqa26waT",
  "key31": "4RWHUA1vuxMxGwALVsu65nB94pn2tCQ17DEfHTon2qnWQnumy9GXffYztT2aktmSsGpe4D6oYmb8Xp8V78TjaxD4",
  "key32": "EPhWw8udvCfAQGzhaXjWRfpXgLRNb3WUUvYb7h8YRCxnYuADRy7fvYdtRxukfjMLjdkaTUR3DzESXQRGX4sNDUE",
  "key33": "JKYnPcGEh7zcPAdWSaM8STBaKhgxzMP77nnFtv35LBJBXQLUmJtg8VBczdMwg9sV7vVmQYmGkcpwBMFpd1HBsbG",
  "key34": "47dNvUdTrKTVPjgBeZcpSUAndKx9AnWSToczqJzomV5AysX5MMy3gasC2KJigSyMSC5d6DMBkk9muUf7TiFm6y3w",
  "key35": "J27BgUENYceVq8UkkzFcVJxe12D6N91inzoctRi1vxNwBchgyscLNYtSd5XVv6otbe5jTdVkcjDVbXmuLMxQhbV",
  "key36": "5zT8CHFR2A5pYyzZRmSMiKg52cmfbyGFmMivCkS2qQ83RZuCcjWYP7qBa6J9s665PxBLBrEZfbq6ZMuTWYR2JW3g",
  "key37": "YRK4ufxmh81CCAbNhgaEEL1bSgaVrzQkPRSNQ1dQkQShJ5ybk58xLcyhSV8zGXUryvHVUfnfZDWKGyX7GFtTBCa",
  "key38": "3uS4o7fGTNzjgNvsdCBvvGf1RQkrX5Z8LCXMXrbfYBGswckirchbPUg7b1n7hoXwGG1rhJG48bDqF6xBB9NdkuoW",
  "key39": "3PvaZHQbCGk2woFWWJU3St4FbWCjSudUqkTeA8rMcawckLRK6sNNUXwk8iZCZCEk8nLehyLaarRPVtt9NPTq49eZ",
  "key40": "nZS6x8NGsQ2bQNZNuSSrfQtWazzMU9jVCHZT2gV5f19D8m7NwpN8wyPK7YnzAY91cfXXmy7Kc6ANDhyeek5kmKw",
  "key41": "48wZ9rqHXw94prEQsJPSecU7fqM7fzmrzKgkZJqsszTUnBH5Mw81yndtp6GWmh1s2wWiZjHHmsBA3i19iDCFwRiJ",
  "key42": "LzBrjjTvjS9Q8VTa5hZsFgAUgrCTmmiSv72MxJFDxZFoAUdcvnMcpewAbf3KHbCJ46pkrs8FoQA3aXpNzY4h2pj"
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
