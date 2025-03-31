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
    "4VsCUbGfXVVYSXrJZfbPNKuuMzUYY3if5XNVLqXKLdWTuDUQLnab5G5YXDpaGXJXTQ5DyjPjNEVuKoXZNyQbPBvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q7Y8EGgwXKjoH22XYiQhMMiGeSAHe38J8f6uFUUS7VFhvECxZmk4RW3KJVSQVY5uvTmTHvbyVgCK4s6m2xKPrpb",
  "key1": "2i2MTxAQXgQpYJuMiNJjaTuyGgk6bSW9vww4gerecTG9BvMTQ7p8WLAU899yGt7Uvid1ZSDSG14CSF1Gmgo7JdYF",
  "key2": "45D5oWsSWrPFR45N2ttjUGFY8GEKW29nyhzNHJoaAxgECrZP9UWrsS19hRJaUZ9LRo2Yoi9y6uGZLewcQvDVhzne",
  "key3": "2oxjxvaBuNx999tgJyqEf3CTioeZXV1ZSFQ69MP4W2urFxB7Tz8exzYE195fBD9wgrdxS73h7KGbQeEeWMDfP3bS",
  "key4": "p4xDU8D3DTMQ66sK65YqUucfntD2oYxNL93ajuNh6MFdjvHH4kAxNf2y7A6R8SqQXaghgwQdX4zgGRwde7GbVmy",
  "key5": "4d1czbaUXU1DsiPFzdVN6jMKuyiNNqc3x4zAwfdGUWUgaUET71fT34wjnZ4xWTanSkqZcsAMgjRpQMx8aUcp3F9G",
  "key6": "5gZQ3qQ3ksy9o5GMhTT78vCoViwRZ7TrJeP1pfznPwVJb2KRGGRQqcC4nZBhaHaE6E5yLiCafthPDA4n2t7aUfcs",
  "key7": "21DmfWgNb2otrLqibWZWKEmTFmkNRx3yT5vBjSz6P3Qgzi7RNLMSwuNP4HBkWhjrPGLACJSLKytEZwACXa611qa5",
  "key8": "4yiZidvwArVHKLKskmzRuMpmEsq3RJvET4jzpdaDuT1tz3aPKvB29HV9oaypAxbbNDM6o9HekAaHYRxsowknneWH",
  "key9": "2uur1J2PQVFXoaGdVu7ET2uPjDN3wN7SN2Y1YNuBRw4UGKeBDnuZyTrLZc3rTod9RTwgGAZfndiCM1wPg9ttMu3p",
  "key10": "2q5Xx6d8B8rtBhLho8nHg34KQLaSfcJFs74D4TUNuwbkhqBbr57x8t3W6pL66Nw3n7bSrjje5pVGsedS6cw4QuFd",
  "key11": "61cn5eAN5esD5V1SRbuDpjvgeCGpFiWDdksNKHcG4BhQ9iDtrQZr4KyHUjL7PUqy1eVm8UGbu3XLoUqaYxwBiVFV",
  "key12": "3MhF5Ai4nZsGEjx5tBP2srRopEvJytpdX3hJD5psH79qWgbU6RCn5jak2JcTDFFy7FtK5L31aM9QDeAHAoCPcsrg",
  "key13": "utoy1uHm5z2ewFbMAwouf4AbFLtM6JZzbUJ8AoS9BQ5qdHRXAuVaHHXM91BanvLhZM2TPzZQB1Ug7XLwRaWKkKg",
  "key14": "3nw3Nc6WFNmCrFGj3Z2sjzZCSbvJhvjwCBej3zvUtjxQ3NQQodDZfpHbUjwzLwBtjqGjiKhkF1hWKRBx2HCw6KVc",
  "key15": "3xbd3bSkrR26rfc8EhRYscppMfc6WsP22fb6RN4d2rvbUbcsYZD8ThVrNwmgtw1GpxyFzmXCcBXMuHV7r27Ut5ym",
  "key16": "4CfdieCeh9TWQ9SrqWnXfCn48f3XQYw4G5RFXtAgxSXX5q5nCaNaNKoUDxQ9gUfx5uKfGnJ7nhdZqfqSpN599hEX",
  "key17": "48S8eR3LkH8zLojS6uTofdUGkNhe2ThjLPAjtyKjaY6Co1bWXoRmo4so95EKe1LwFy3MAsqnhSGfecB95cEAT9dY",
  "key18": "3LPavTqx5rQtjoqsi7axWNwiJrQsXeG2omGfFEv6EfnLayWWiTqYBv5P9JadNRoEhdHEV85X4ipRirTv6KkA4otq",
  "key19": "2kbjhYF9MMMyhmLGTzXAL3YFYQmTvP69ra6u2ym5jCaQLrrY2vQXYGMyLvEs5Ev84j4oLSPGNmyvB1z15KMUufat",
  "key20": "3uLHJNnxKcWzFUabnaKuQrn8NXrZRSEPzXs5SzHJng3agTMJ2dLjUnoSyJKNFoBuJAzey5AvBAtrZcqyjxe2JZzZ",
  "key21": "NnNncZMdQsniyKfoTVLKcFqTqGi1JaJxiyaPCDkgvrw4wWaFTHTL6YNp1ziD6fN35vduYgrnQQiQQtGYzpnYN5y",
  "key22": "5N1sBZsDX1RxkY1QnHSqqHZZoDPt3NcvCHtcr7Nx1juanMBDsntg6ceeSUYJvyUhamaczJEUW39zay3xF6PyYobd",
  "key23": "5iHfZ8gTwxGCvZkNkWTfG41ZUb6V3CtdNjtYZkjijSfw9PtPrfYe9a2p3qAEjLTZgBrZ9HU5Zz8obBRYyaZB7US4",
  "key24": "5kqM2R7FHdi6KnHBmPimmHQSZMQ2PUjLJZ539viuSvsLHC3KdVwateMNjHujmjk8S7dZQ8KzjheBKPEffJeFmvk4",
  "key25": "5FYXcPzyzZLpshRus91uxGN2z3nksLEtuyVM4QnVQGahG9keqKLEa2z3pRx6VYAeoDRtJAZEiX8oVREEGWz3ePcJ",
  "key26": "63ZnwtcEjVb648tqfzikB2JiqdzWQBVFsNB2gz4m458AW3kuzDNDwTziHYtX7VkG5583SV7nzB41zjxzKBFmYXig",
  "key27": "5YyfYB9FiF8uPD7KF6S6yt98YQeD3CycPmBRNFGogi51LXayLt55PcQrPyJZZVBGU8gLTWHPMCwijLN15Cq4BfX5",
  "key28": "3gYBdVP7Pz5CNp1J2PpWzzB3G4TpahwTXza2DakPeoAcJ7AHbmppKzmsT6NvzGHwPjDitw8nkWh1bWtizQFuxeSZ",
  "key29": "4raB9KjwXirYg7fPXqLKR5BaSnmwUc7GMxR6GLbf96cS57n4ARmzbN2fWpSibTvqUJiHbZ6skJikJeiMjtSEMAiP",
  "key30": "3KLv5zUYWd8yPjwYrH1KtDvXCJ66kqGXdDNZEZCyEaurzasnj8hdBT66GSFFjXLhVK25RDBJxp1zYFcDMZy8trso"
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
