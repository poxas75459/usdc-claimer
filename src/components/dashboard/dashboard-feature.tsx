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
    "GceME3rkWX6DgDjP3qtCeZDqWYtRLRA82hn4NSNgN6nxfHmgsG1yLUBcAttfHUFQw1yhCeds3DZTLZh8VWeuhfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sVRk6YmRhbpjDHH3fX1HPGTjngy4EKHWM4uKgoJzbRmRNGkqqap7TbUi5YDYeGpLU9Nts4kt7Jw8WTPaQj1t8zv",
  "key1": "4yxCTttSdkHv84YNdVUKDfcX5rCT4qUUihqmxE8YWj8VMmZpqNYAdDV95i1nM76zdXLqzDtMtGbZnAcRW3DjQ373",
  "key2": "yHxLGAPijou9oHnimTaLEV4HimHdvpXgQtrihM8hbru7fsfHTp6A52rCWg5y8UygZoLqpUcbA3eKhG41L2i5BGY",
  "key3": "unhWNnkgVY9i7AbEtQwDus8eqn8Qb5XhzvJP81gZEe4vmLecb6zeojShtWRqPfhShZ9zNf5iTi94p2CYdKrExfd",
  "key4": "awSpdFFWBxbVcLoZDhwqk6DEHEQ2fKv95ctkwtchdo2RRe1C72UQY22xNPbiw2QWmpCaW5xkriawCJUQRL6VJo7",
  "key5": "3PWiteKmmU6tTQnzvn8U4s9PhV4zoMFsjEbUZqk2AopESiJq1xTTpyp5G7XymQyATAH7e98jr2qJ9WqxSMxCaiS4",
  "key6": "1Px4ej7CQZTAWocnK9jX3LAkEg4DMXN7PEb9r2EPWDAUX49JpXUtxunpqxuEoZVLgTgn88x78Cj48uBg9BGaPFe",
  "key7": "5CKsegfLuwW7F4vCKPvywfkFh5Ax2AAQ6hMmgPTPQpedRVgtZ8SvnRN42GuC8ik7h4VEPL3Nrrgxpi8BMnMx2FmG",
  "key8": "BVwBRUTvSWwnBmHdh2ChuyGAGJGRv4Y3pBsQ73dkPh8UN9GfwRP5mvQbB55jwVBNDBPwqNXkiKJKyZFo7hXknka",
  "key9": "4PcftD1dzafi1Ve93rp82drtrkjxTeLgGGumyMuqrVpbASFbwrq48YEECdYZg76NSQN56UUv2DYhLJeREafi3tA",
  "key10": "56d4sSEAGCHkD8EMrLzNFLrBwuDsB4gYqmGdxR3LgzunoFe3Tz4eeFU9craMYMdebc8zxTpf71ADqWmj2mXpQdzd",
  "key11": "3YRDjZStdJW24juWv7mSDoQP1uxiSgCEPtDehWnWgfD3erVVtF6C3k1Zo4WfMSqdkHWPppdnK6Ze2zPbspWdx2vc",
  "key12": "5TH5jm8VPDkWumpti9gw5PPip88A27ZQQAcfboNzC1Ym3AFMyoy8v7dCoDHMhp7mFPFw1Qt1wxUV7EjV85irXqoY",
  "key13": "2N797f1mHLcQaVv86LFtnRmdjtXvCgBcpnujBjA8RHzeVUY6xktmrNYmWfAYnJ4iXG8sJAeEpMfSE9oX6RjKnriC",
  "key14": "2H6qGPHd6rSzCgyooSqWhPYkbDPzL16itzGN94cbSAXXRtkYrqWPY3S1sT9QhVqqvhi8qmVjxk8PGe2uqq3bx7Pb",
  "key15": "4Rjsmud2ysQbyzexG3tkNRejhdmX5LXaX1CcXswNAx2S9LhauPetJ9wWPXKfnB8jtgS3Q29ZpwsVTYAdUMkkooti",
  "key16": "5zY8Wm4zM4dFBn5crNFL8PtoxpTE2cEW7VkuCzsJ6G3K7UugMZ1g3jSvkkqtANTZ3JdjsLebf4zpfgtfXbUbDtF7",
  "key17": "tFSRL8GVN7gTcHqF85PXktBAJpsxC9NFifGvCJMKGiGgLKJP8Fi5DAaYizTahPf3b6fpgqGG7UftovdJbEnFvx8",
  "key18": "2vGWfYBVqQBpu47spfRgXgjZCwJoPrJ6UXW8ZFRhB75ogjQxhS856Fnnw3skB2RpWhZTKFmEFRtpjLsRVsP5Mhsr",
  "key19": "3XRxDisQaHrnoAsGf2WN6DwNUTsEXPphP36FumvJndaXVjdo76iiWrvJnZ4XFJrNHhrN63NGK9RS7XJLyeiEBGcX",
  "key20": "5KqfGe67rPZGAD1eVaoXRmQ1Va9JKiqpnPUYWNkxxAwMjetcGbxBwxWm4eb538sajM2AKT3WiSYctxkVj5ko8bcn",
  "key21": "FcyVGZwJ335f36AfrfddPHTimUG3ja3MmNkhFFy1kEB5hvM2RiHKEm9rqTrvegKe2yiqzY1w285Pan885gQwboW",
  "key22": "5pccyuFGot5njAiXUiQGruwJCKh6mkdn3JZDqbtzzkDad89KxrGUBXc7GkCPbSpJmioP1afKAsU7uNqdzKfprP18",
  "key23": "V4BQw5ojrXUZ1KiBnAch7nSk8p8gmeebXzbgiSEVrpdJU5BbmPNbVGmhDjUMiTeuYoj3bgCGmir9nYr4rVJAzJH",
  "key24": "45PKWYPuSr5W1mJHSY1GzzcByMjQmQZP2j5x53GcUdneVyc75KKbDLQY1jZjx7eihP9J3istGxfy1UqurxVWnhj1",
  "key25": "231YnCWwSXazrniwZgdeoeGSCeZu6dUgzb5xP1ov6W5StfjGiBGe7xmKNmqAkZHMjjZNvuQsvYqtNd527MHdkp4Y",
  "key26": "3AKHxGHQ3r9E2bLSYuQh5FuRvByXnxenERvKZqFU7TYZqdYsk6aKZkDptyGT2JFnXeEKZFw4uyP9EFHxw1xcZ4q2",
  "key27": "2CMxdY8htnMoERSXviCH11ijBG1ihr3gQRfbHyunTrt61dX8tUBtbyotYa9jRddcNcc3CC7hEipFJuPULmmepxPa",
  "key28": "Ee8DiBATBdQ7D8d5N8YHdCRA9MhpC6sVwz5junwzkLzrRjmDsqWEtPK2h4cEA4hMPn821ZWWPqPsBY7GZ4ozxp2",
  "key29": "2ce7HqhisUxkzMq9iuxgAG1uycCg7dCV7EwxNHLn5EKsPY3FCZqz2GTon1gSLbyZQzq56gxQaXuwXhTkukVUc26h",
  "key30": "4vuiaUpTaxNhHvZxnCGRZmWb4NgVyhgaa1iZtSjkHDpUPYYVD5TpGiozKteZkQqVGKVVs7QuD1GZGvxTDaYpuCet",
  "key31": "3WXagMK6CYojDp9ujm2UxXw5BSxUvQixne3TXUXBo1vHQyhkBeQZ5AkAEEfnSw6P3EC5V1ZvgjnA5MfHhNJ2eqoD",
  "key32": "RtKNtrdckpBqYmdcyP2hHCfvnQdsMyR1mwsk7XqNCUeLSawkAyNsry5rDAD2oAH7krbox4Vds66bAosk2zusrJG",
  "key33": "2BQXnbwvwmSyU2Yk5JPhGBU6VYEMrogMzqj6t4sTvKTiyZVcgw9HdaKtYeg2kQthxf5ARUghm9JdMB8MLvVjYkf3"
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
