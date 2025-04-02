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
    "4FTVMxfB8BM2Lbkr9GYRXBPR8WVmGv2EqHiTDGv4G4TRBQeCkZVMU5oa9z8p4yUY8sZqhMqCFAm2ooxXT4dZbs5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M1b3AUXRbvaKTueHzxLFmu6jgY7ba4GB5ZZt2dpddXAnz8MjnPkzJYpnFpD8uWnd3uFNjiudcvVPZjD5LbrLuwE",
  "key1": "5BqjhZXtj9svLN3mDuVK8UBmjUVqnhcrg3Yo9L9Srt4MT9X6iJe1P4Wvm25zeB4Nh7zuDDM7piV63GsWgN7X3Qhc",
  "key2": "3vckmZLFHeNYEqK5haWdF365ZGA6WBp5rRNycgUKi1tKPs8zEKB4i3AuygnJEE8FjvjtbcX1Qf1ri6ej3bRQEwwA",
  "key3": "5Nbn2osy6o543vD3eL8ZbRPV6TsjoHiwfwkX67iWxGSQJ4aAynbZyToRbdAuYh38hGMKaX1DvTDcggqjeakyu9Us",
  "key4": "4ADD8u6Gb62FLw2YM3SEXBJrtSYGWAaukaMcWaHVcKzFpMRo6W9ELtzZwdM1qLoYcg3BqAwFWYfosqWDsNLnQX28",
  "key5": "5iAmPvzQPM9bcrQFsKihjtxuY152JZ8rcACGXX5DbDxH4rurERDMK9Tn8K3p2S3ypWGFvSh2ayNiw73jPrd7sNgU",
  "key6": "PAtxps3AKZW7swA6yj3jZi3MjNgbSVEL3gAWhfvinRw5ocqWB47M5fxZcW48iuZ1YcEE82tPL1BqrJtTMzLq5Ti",
  "key7": "4XFs1C24ZrKfd3auE2wHzvN3P3XamUkEdwch9vmrkXx4BQ1Mx6umG8DG487HRxvPtmaZYUGJMgzM3dKC3sgN2euz",
  "key8": "2JJpMUEU3WYUCJQmYAkymcj3bck222pNnVjigHSCf5Y5CMtFUoSTwf1yZTknHbASj2LykeN47TxQBL3V2FfJ4uTq",
  "key9": "3nCzqBPSb51bffL5xb2DB6HvC6js7krM7dXwAzMGw8WGRPBAJm3mnbdazaiNJp5kfrHASoPpwXngV7z2FitT4Vbu",
  "key10": "6hC17rjHMLuPiT9qKoH6o2pPAip8DW297XrWWaDnPfgg9vH4FcyKLGHUdvyCCj3WQAy147QqPiy6CaMSpGpZCL6",
  "key11": "4mHGezoLV9ap9xJxsGcSWGtNHkCf9DBjz61o4K9Ryfvak4L33LnY5UjBFsXpaXLeFjfV6wsmo45NTiuPKWYUJAWJ",
  "key12": "vyE13S5q5pYVFXxjEQuVp9orfuYcuc1gUNjQ5uwzrCBpdzQs7gp7jvaM2VtY26naDKuszxc3f7SssNFH6qge88c",
  "key13": "4YB7cvSfjj3wp4KHV8TcWhgs2AM1xdJK4MDSbrg8yVR2YYgSLrb2RAEvmoGSrp4vsffuWPUQVcrd1mctk9zq6nZQ",
  "key14": "3Fy9YnGpaCmGyns66RuancK47NuG7nFyBh1V7WC8Vayy9teQP4dCirecMGch5JThixhCoGnTmNqDUgto5rtHYU41",
  "key15": "5K1MgofmkJULKdYPKunT2ZQ8VeS3pakUHEUc9MBEYuUzFYsnZLwzEBw3tARcBYzRDbjM4kee4nEf4bKBqCM1kkpA",
  "key16": "3aMWcXfrA4keFYa2z8W7ni7kNZTyDsv5HbBr2Vti5wHQysvFyjWue8Y5scpSNtv6jwtEnP621szKpjuZWiSQHwZK",
  "key17": "3z6gpSxUkZ4dfFkeKpaui41ynNGJEeLcSc7BRjBBbqX9rKHsNKNDm8TSjKxDuErifhKDxgQQAqjuKSzWjqpfWiG4",
  "key18": "ySxyL1uBTavMJkuA6JCnNggZiVe5LNrqKNctpp5aXNHzxX8JNqCCUCUuFUZysg2vqMxQCxwHpHw59TF74AVX8KZ",
  "key19": "2S2rPBephiaiDA8rWHDjhknsyoQwJb695GRft5CAbpc5VE6SSfz46TrjwUYuDTUQy7JJLc9bUxhBi57QD5XSgmtH",
  "key20": "511WgRCGMzCHAoVy75q3P1nwRFfmY2x5JXC8Vbj1Uq4PbBTiayfNU92GWaLD3NySVvtR5J7aAKTJHLj939LbYkWQ",
  "key21": "24NhaVDW9pQDAcgS9Nf8imvsNsR3D3JhgSgAbkYUmjyo5yj5RY3MiYgGyR2Xrm2JtGxjE6TDeazXKqLDwNyDSznc",
  "key22": "3CCkCbspKac6DtRstNPbwnVjz4KRxRvvRdFwqmf6Veb51XHDWPSJtTRUqaBsWQnperUJHzD5mV9MLWMbygTuvsQM",
  "key23": "2Pqj3enjibYovoSxSJQzCJYYsBubdQUWnkPEpTMuLxZRinLcDLSm3rUVkgHg5zMJEiiq8KRma3jQpfLmssXgHkCq",
  "key24": "4V9EEZSEDpRjA6P37dmBLRJG7j9D1ZvLj3vFe1WeDH4aZ9bapz2Gani3Hv4BGx7TQQgNZkXRJoZQwvbmyLjC4s5L",
  "key25": "2E6uE3G9JFCMswmDadiwLyGChUtE4dDcumr8fB4EXEJKYWW8ojPwpM1LVrEbovATwoqXzeoCgFuEa4odz8zLRXyY",
  "key26": "BWEvbcVfTn7GBaUdRXHgTd1D7Ny2iHfbMaSzDcCgg7bHiYJ1ZdGJV1CZ1ZrpA2nfk9kfmipZ6f4ySHCgMuLM844",
  "key27": "5P4MCx5T1Uvpwb7T5wbus2Upp8RBsdwLpmUUXRSCnHiDST7JUxDgrEvUc7cX9zCjS1wAbP1CDvQfpqqkHqWrTFuK",
  "key28": "232bpimhnEzwgDpbRUTi75MniBndCpNk6Rwsn7yFiWpHBtx5WEazJAq1xZJ4nu89MeRmVaAwE4zkpiLnjdagpCdo",
  "key29": "4QGiNBu5C1dFkqry7AkZx3vKJBkU9hXBk6KmK6Se1N3H9cEYoN2dboxV5jUwdwgNrS6NTK56A36j32brETsiTfAP",
  "key30": "31tt5Dv9krM7Rxig9za9mCuGLVsUbMKF6C45Wvb6pUgaxzMwh5hiH4fKu86pLBKCt4g1X8jwLWsKqUgAPSiuLx4k",
  "key31": "2BcWjQ2W9rmpLEuo9iS8TWt3WSn5NbtUvC4yrMV58p7V9TqeroE9EUm7vCP3qoS9U6AeoAkMMwnu5KPnmhhTzkaS",
  "key32": "4GqMMKn3uuhW6y7gLWJaPTA7SfJDX1cLvKBiyKMbuFh6h62S9KaAbJxmoXmGzwdmB9qsKssfge5E8JDp27DTS1Kz",
  "key33": "4LxUqeP6eUGyqx9VBPns9JQMSggNkDtV2Hb75srFw6cWAxLBJiEeLgijnwsSYJCh4rEQ8zQa3SA2tDunACRbfm7f"
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
