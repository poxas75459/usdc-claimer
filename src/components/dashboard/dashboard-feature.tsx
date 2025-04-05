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
    "AEj5Dfj41HJiCSnDKwSiNGJvw8xE1o773FwRzLappNVyoynY36wfCMfJxx95YbN37izEVMwbmwSxonYtCwArnPa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QSTFBKBykgvs8cy6CUGwmZkPthAmqcse6D1L6KKdmXKYAJbpo2uka9c3K5f6vasG2fw1kHFUcZpLxp7FgEcLisM",
  "key1": "5z9r2WZx1U3JMxcnV5MJgqyrs4op3GvPCGJQK5ZGTGP1opbtgPezYuW17jH6wGnbRaAQM3VEwXX71ucNqFSvNnHz",
  "key2": "qzSRBMXWCG9qTbBam9GoCEsnmd4XrjgWsoKPmgycv8hxVdPn8ogYcEmAcChuMus5i7RXNjEgXLsme6WKTtRykNY",
  "key3": "64nABWB6dSdPkr8uR3B4jzjtQwsphq7QpssK9kcncp4ZzsscADqaMZb98ytrSTQFFKorJcrdEjoB2LV63pAbv6uZ",
  "key4": "2Q1zjZKjYJ3i3joHcwBPmPKvXncBMi4EuF4R1uWJTRLw2r2hACiD8J716rtaHxeXpgfZoTB5r4Cif1p5G4t8MBXB",
  "key5": "4otgojQkZFSvfu7tCNJiVpwqYUqiH5JuTjXeX3Lu2grQxwCHNyAdGF1dUM9DE2oMAMaQT6mfNQupxCoXQd6S3GPy",
  "key6": "5iE99M43h1F4ybtpi9RQEu9hwsUj3cE44EgE6F4wrWJbeRbBWRTmJmAJ3y84ivHWZPLq3k1Jn7FNCuBGd6mGFtAM",
  "key7": "3LiQCMXjAanaTKZvKXa4gx5fXS4wz6WZrpikvnDKq1auiBfzp8fWTxxS3STGXk3wNKTLUCgPGMtbD9w26mcbSRJn",
  "key8": "2b6vWH9sUUYssR3XtGtb7rzbeV3V7soNAMNLjovJ2UEMy6UwtfLaPuuY4TRSZzwSAduqgDFGtd2egXdUqV85RBne",
  "key9": "faCkKb3KB17UNUrPTcipiZKzTmhJGXy1PizMDVPoTq1uTnaj2xsvyi6qFVHvF73fxDccg4G96je3mFWLznZvV2e",
  "key10": "2piQZ2BCuieiPUMww3BbDEv8qP6Ha3pBuu2bM2hdVak3tzFb28txbS9bDj8ghRYS7rqdtj3P1gfb9LK5XH2TWn6r",
  "key11": "4ZBRkYDPSVAAg9aSxpnYRK2vSq2cX7U3jVqXeCvd69CFtqR78Qsgut6r37yA3esz5VkvtMPCerETNAAebJh4f3sC",
  "key12": "2HVLBiYcCSnXzPKfjJUrKkqVZ8S8TzBQo7A8D5wFwkt1KwS7rzPknGDLHoHsnbSv9QpzorYfbBGBBqaHhmdwNFop",
  "key13": "xtoJRYxTXYgsvjKGPFw1VmzTdYHHKoTUYknWkj5ishpKJiLo5xbMPgMmCveqZwpYdz8w6yqZtztYHKyeiybcrep",
  "key14": "5PqyvdQbDDm9PVsvEMcHMvDHjip56jztmwxnQHESNM12Gsh9fvLp4EUBuwFWsk9CybquAJousBkgsryqNfyCFyoJ",
  "key15": "GAhmJ6Tz7s6y9oRyhtQGqnnpasdYxkX5e97jDZg57zj71E7wTZ9TTfnJkLD8VEtAnff7HgSkJQr6NDMoXoBb35C",
  "key16": "M9KihNh9hJFrwR7hN3TT356MMtDAVceEyGEaQAWVa7R5YSdbEsdt4drmKzP8EQP3MXFHUvnHVs6iYMJ2C9uo4zH",
  "key17": "2YJY92cuiJpRoqnhK13QtrWFRGeRxFaS8tU2zVnvq6sa7kBeBQd9z6c8yiQE1D3FrdzYRLk7u4SBPv3Uuimy4kRr",
  "key18": "34hUKPPc9z1KvKgWEPBodJTJYWuRQo31kQQhPcyUh136vDVJNM9J1chRcBGav6bBFgKyaykCqhD5ZS9y7Hr6cmV3",
  "key19": "4zbgDxUJ9JwMxqHfhBRyzaUJKB2bfntRUTbsNxniAKNa7vnL2zotRKaSkWhDL7Y3naoTwPywVL8CYqmX6FSd16x5",
  "key20": "4Zoqan5uTNWwDPTedWh3XVwvFkLrehcTBQkGTyJu3QTqxxkZGtW78tjwNoE33MG6dwKyiCr4c9y24ziNhRbsTfjM",
  "key21": "4EzJAJRidnskrTSod8KbbMgvc2QU44r4dXCc4MpTuvKNPc3XgL8oqNJwMxapBsXTZTgBCvCYLhoXtsu5GDRbYumW",
  "key22": "4yQJGCFmpXk2Ms9PkdzeJ5HyL6TWduH5fDc7UyQxmsAQRH6Pydnt3zkfscQztJLZoWoAiZgPpLTTud9TvsFPXFvo",
  "key23": "5Xx45fFBznaeb4K1qGHTR6UQrjs8d2rKLvGnRSwXgP1zLzzYt2dHrnzbWsmXDd4wegChXkLYrNkA7hgnDwJiCBpA",
  "key24": "5Zyq8z7dwQxGMTNQPqLXsJfBfJ1EEAetS4LZiUwKQafgsqqMsgZWZZ2bGmEhK7yms8LdLWG7cgVnMbHa96kFHNCx",
  "key25": "5mWRMH6xMSLHFJTh5vE2UjoH82J2jSXqkB4GgZRNeioHFQjh59MyWFWPfDxFwKmv2s6dgC3T6KhG4KMcVaqvB7sG",
  "key26": "2YJYVk75LAqCYxtbaJ8do1VqtJcW2PAw5H1uXbFRg5QtGzbEZLvGZvvFUKttDafiPnXuiQTAfDG2JxUWmU958Ukc",
  "key27": "3q6vZXnWfGw8g2WbfewLfLASupeBdisLXHosKTMewUSnGA36SAed5stw5ASWrz3doXm15vHQ7L1XZg29tQ8km9DK",
  "key28": "5nmPTaGjJB7NTJLZCBEV2o7W9WxuMBTbXTHx1RLBq6j9h37kYavR56GhtQ3ppejpkiPWAPvrRAGyZqSCZuPDtqfd",
  "key29": "zdjdk6Xgt8z6P3sFSQBjiCyetrrmXFRkxXatSCgkG9jdXXJkrQfmoVtAuUGZ6ybgVd5dXKDXQrCLkusjqRFQHiG"
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
