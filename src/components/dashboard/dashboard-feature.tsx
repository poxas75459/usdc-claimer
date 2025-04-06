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
    "5MdAzQFpzuMXZN7k4d8bpPW7yEZ2b3TQ8Fts4c5nLTJwUHdUQ36GMAgXasvdqSyBMykqfmWbRfixzM5rQ9rJsydQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PJhkmWKbYqjuxmm55T5KmtGduneKDxXmKrbqUPkTpVWHkCXo4QHZz3imX4kLaZWsmJkXm97hibfcKAQqGQjrRqK",
  "key1": "7WLnJdmQJjysZjeuJV2YeprS1KN2LxueCYUhgwvJR7f5sBq4kvT5zVqT3rXmgXFz5nPT2WPMuC3KFn85uiMZjE3",
  "key2": "2S6mu3TPieE35adfRRrFjkoptNSCjbJBinFrNx5JBDsJrqgiuNcABuGT6TipUBZ5wLHy2ji4huqwrL3Uzs9MBGfr",
  "key3": "3BNNuvNXNAvCn2qYTmtkRunLtSW77E8qoCmjSdoKG3DX7V5VueuYoK2APVfsppYXfCGQbft3rvJGTUzp6y8HBEX6",
  "key4": "frFBbYXutLdM7j9RdWptsBR7mm9NVvx1YnyunovigWLuCZtcBCauKyUF8eJk54rY7qBNsQKKiz3ym3JxK95mK2K",
  "key5": "616eip7An9PhgqamgTdgc9A7X9bF8sgMDuDt1fASK8jPQR1zvKxovbbcBN585iR2KBNFxFjPscuMw1X94AagAeFh",
  "key6": "1qSZmAbA5HThX828JWeruofYQuaQFfq3QMfrkcaJqxJfRAXm2gopvWkmJVsy1aVrZ914kSS5JTPvSCU9iPeTmPV",
  "key7": "5ivKq2rTXzaCPTKeAZY6BLuYRaDe1tXpQRvmPPRigoBT9cxH1h6HoGotZLmNmJY11M7wCnd3M7GiSh1Ed2LzPPM7",
  "key8": "4Wnnrri976xVENA69m4iqP2AbKmon5vcikAjQ4UFfxP4Yyt9xr18KZ72scxgcJxDrbBAgkEqqsdQTv9yf9tw8pg8",
  "key9": "3vyUhLiaqQ96xt3Wkc9ueqWhqmKooghUamNkSPXHNWt5vADfJhVseDhXREBjWcenpVXcRM8tGDTu1Au2CkNPdufD",
  "key10": "4XtoTYCoexDU7FG9SYEvioUGUZiiMaMbHjCzdbsXeHoNnjxHRTHecHhM6Tuy44F3TnMTdbuoBrZDfXAsdmmkoxa4",
  "key11": "4JjnSgKpWSCT4tniRM1yVhQSWf44HBD4fBNhq9iSsToCvToSgPvZ2hLYYAjhF1A9hLrpd7hP4vQ2AZxHKsApDWYq",
  "key12": "oxRWbRKRdgUmiv1cCHseyybPeY4XoktNNNh1o27AcZ2cCqgyVUuioehiT8xmhRHL7BRxDaLNfzMn5KsqXqQRxT4",
  "key13": "5NC3mj8FgL92VG1CwavBeWKqYrsfDubYCa5cQbdwJS7WEpnPRMidBNKgHpUqVXuASS7ja2m7yezzPuz6B7Ry1H6N",
  "key14": "2HmZe6Q49xouXi7PSFJ451dqozWsHSFYf7L3a8wBgPiZAzA2YA9hur97BTPNpBjatVNqY5aK7WX4Xin2FtPi5wZ7",
  "key15": "La9gCGQ4xmWQYjpd8A5sBtwUdc1pRFVfE4cwsq5rfN3w1PraNyfbqkjKynL6DdcuxEAibJF9Tby8UUoyYRzHu4V",
  "key16": "3yqdQYPn4j4g8f7aFCAM6Av7QcBqMeTQuiFYWTpv3RBF3F5H757fmZtMg7EmHk6yHaQm9ucjpw5AwTTHkEjSPNxm",
  "key17": "35AcqJ9pXLftndrzYyPquxHjVH4Mz4b4jBqrGee7E1FMdazyBCBiVTWSTDe2ufHieqx4FiiLnvZNStwLhvYGyor8",
  "key18": "4BAxG6X7KW3N1esoP79TFpNSMs7MgHkkpxoADeDGeiAFxdCwKVqz1YgTVULEcYv82J1naN1XaSfEJdUhXc4HkxiG",
  "key19": "LqPKwHfLv86cfXhMypUsnkWTKd3CXr3KRaPgBS2u13kgsyAQ4GBoic8kw9ab7E4ZeJgWCnCcrUbD4KL2rBBdC7Q",
  "key20": "23mxovxhwGVxNWVBxpuYnM6gXGRcGR6fHR5vwXvxZ1MyaRaJYL1R6xwgf8rj4B3wNxvj1uYoQ4KFjRUib2dCFqTP",
  "key21": "peakDogX3nHKSHRqXyWfMUutpj6sPatzwmUMDEKT7pZBU4AtMsfoBGSNBVQuFmXzDTFR63WCHGYiLWGqysuJbNZ",
  "key22": "2Q2cdQb9g5865iW8CjNQTXxzBQMq6qNHEsrxKkbKjNKRLSDEsXsJpLeLQGMAB2ZsxD9GeQBtuuSSZaMygN3fs6Z5",
  "key23": "K21BQbVoyH6Kg5JJ8nqmL4MSmWEeDrLLkhqreoGJAF9bQ95rVWRS5SoF7AJpupdAjetfnaLvGawTFz1TW2T71VA",
  "key24": "9eK74dUA3X9UcwrqRDeWnu8GytxohCcti84Y4vKq9DUVGsWJ3JQbudgNrMdNWx8xViSdME5RF9GaxhRFc7jC1Jg",
  "key25": "3HAAAvAbPfuoZT2auDVgV1pKbxKsN6XwYRuFfPvUxL9bc5aKZRDSQWdaEu9jtutqi6tarsKmLVNKto5nLvXjqhAB",
  "key26": "5oPBY1WszNPWSf1FvgnELgPkvANR4qDDQgt15YEZnMj2vFDErUEz2d25JrfYYJWY5tNUJGyY5XneV6UqirkxuuDu",
  "key27": "31xU6XzZRwP5DyCnpzgozeb48SoFjUMaswh4rpfXMKhFhnJUyV3CVZmLiRhwrJKg6DSzPz3NLR5HdsBgjGRohn9M",
  "key28": "32BRHrFHJLYyF5eUtkAdbCSwDe3NTNZt6Q68oCeZq2Mdiu8GuL2pMo8cxZxME96ueQUpHmzXYFvc9TBvaynaKkgs",
  "key29": "qwsvyBcCsggkKXLACYK7Qmn9DZvWMLBbypX8BuCiQmoRCNP4zGzeXQhLe8ujVsoxDyUP97tiV4DmLHLnM4GjQBX",
  "key30": "3gdjTJJvrW7D1T18vur8PpLmaCEsspSNXnG5GX41h1ujbcqf4RVMnB9jxMQNV5p9Z9Aqg4oWsMnGyXC7E4WVcPvP",
  "key31": "5fXHLDFE1V1skcbbEWkMvZnqgFEXtroxaV7KZrEsT3B18LLBaTw35CU6AMmHEKVWFAVKhN6yvMuTeD9KqNH7dstV",
  "key32": "4xjojeDSb7ATHDPmY9qW4MDJ65HCYgKALWn7cmst65z1H4jSQukDArASu8P8vTCYoLEUSEfBJDYSpJhrrfpyazRJ",
  "key33": "bjwH2ZV4dieZ9wtYCC3gT1wYDTApPRroTZ8wvhn6xwWHnP9m9eC6P7duyFHZybfB6KNw1TqwU8CPMLvJ6srcB16",
  "key34": "S173gvbC9XT8JPzheFRz3XwUoQM7JF8pve9hmaa2fBp1f3JYa1AJGYQqKxLrZm24Xf49fbXkx3e4qsEKNij2cXu",
  "key35": "fCs89qptZzLBrsfWon9VKFzG315zcr19p3JK2PTqWEA57sB9Bb39JJUT9vUAX4cdzFEjj5xc5SAkm4pzoGCu9Au"
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
