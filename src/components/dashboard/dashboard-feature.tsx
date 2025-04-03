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
    "53rGfUjvRrnTYB1t9ghJ7mLGNPdpE16xR3eq4FkKYLjnDWiMH9YzNbZuisJznX19EpdACYXzAGYbK4dB3cNUmoPp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ajYUCD2tZzeCUtwLwLJ6jPEe5y9wWsMdjxSagyRNHcshTee9WxZGAgRGxi4m7TrvFFQsV3qP71uHJEs4DAYP62p",
  "key1": "5yjbBdJJqTPC3B5yuAS5bLxLFWaNvvBxxsCuXVRah6bhz44Dyw28DpjstbNqUbGX5yNVYiJy8WntetJyQZ37paK3",
  "key2": "2rr8Z6oPVySwvtFVVfZ1AWP77UqmxMn1EDRo1HRehcTSb7GuzJRKqnrGjXfK3zwF8s1XMXtRp5fEtwhqktsJbCdu",
  "key3": "4qYp3PZ1xwdwL7H8qg4kgirMi8TmpM3wwUJD7CLSRVW42MxNsuZpApT6eSCw6UEDr7fXEP6pUdhexk2HXNzMkc2q",
  "key4": "SDMXquNG2np4Bkua8E7NeDp3FPP5VCPkyXfuMbC2e9CGGcSPtB9JezK6HkefXecncUp49QusUnXXW4zV8eiFqFq",
  "key5": "3LMrQacgtLMXu5KhnKaR7mGtTVcvwKB3UywUGzcvuj8tRj7fJvjHqYLvW6f1ocuUCanFWoMBm1My9xVTyuKbqqwE",
  "key6": "2u1LNZNsDRMZyskeFL9G9HCHubcMUkxp2t5yFixgnrKLv9DtGf7WenpL8DvWZAqXaHDzYJnv19XHikiJTZmmNRMh",
  "key7": "5V19udGKEtHT3fKPtHGdR6HRQhAXeJS9F1HCmFEUizpS51RQ1ugMXE8JNVatHSqTSZxnFoxqUjLkqa7TuZgoAu9U",
  "key8": "2hmetsbdzyas1CmgdBAnJZ1LoiBuR6jN4Rhd573J1bL5pCsJmSir4SHRvWaenybFNhKNJidYMcTPRgDVPemhKztz",
  "key9": "4pwVRi4scG3nvrZmbPL4c2JJsnAFJ795sBKFVB7UMf7W3FSuv6i7nfGN3R9cFGrcvh8RBkRvrftzjvqtWg5krTCT",
  "key10": "55dXZvYhcSx8faRAe6hsgfAeNMGg64XV5nXttwsjVgWkXkms9z6QZRoCedY33eyfgVcFQb3Q1kB9RMC7cTGZ2rEQ",
  "key11": "3WrFjuD4mDfCppPqCzQZXUEANsSw9YzGqjsps284uG4gp1DTMzfdpjF6p4JD4CeFiMnGxx3dpywMVueoZ7RKVLC9",
  "key12": "58kfmxSLovi9pDZgqdoPraVwWdgL38y4TqkScRDSBjPx8bMffzanVtreEHk1iKVCCGbSmayVcUxn1Dzj6DLNS165",
  "key13": "3YZ8E7smVaRH2WHYWSKmwoGhcQF5vdsKiWR43PnvzwtUXjdqHxck3FVnCAnym388ApjKQjZAtpFKUtsaHKe3iddb",
  "key14": "3oyvmJsqZJnPj1cmRFL1vip7TTMNwFpdkn1zFCk7EMxNyc6Vxmf9gy6rhHRLRhwLyroFFpmz9FtLGEa2KDpZkEst",
  "key15": "63ShfBkE24iXvCU1fSSBJK8ZuXj6nTwr85mztbpSpRSQzbiDVi8iafGdntBWd8ZFm1e8hRmuqSc2SrbzWQis6cKC",
  "key16": "Vy9NSm1oWTsrJHQCxWHKqqWzXgoLJFY93FK5qHaQMGQ4f9EjJ3gQUo89r1wq9kwj1BVcWbZqLLipRcm8fCJvxU9",
  "key17": "634GDLbHhJrb9q46gRWwkFbcjSE4wse4ZuZJwbeXwdoARMn54jQJczQNV6184GoBeUAxa2x8nvFHYS8cMGqts24N",
  "key18": "2emH5dcqi9543nuF8dUZ1fVZiTDQN8SHf1C5aDMFc7H8DdDvmPzzFq1X3uPQw6Nd3HYfwD86Dmh8UxqbgMTMA24u",
  "key19": "bX9Ngi3mZS8rdzotHBNJFyH3sBoaRrowoyn1ymDKNxfsG73T4yqKm1MiL1gUdpTuLMGTgaG3GWF9uR8Sc2n2Sxd",
  "key20": "5PgcmPFVNcVpgvkFE4HfHPHPHtZh7kWipBiM46CSXHYejBFgdJTUT7kUwKtW9GBXwb68yhgmvcs8LYBPBP2zAgpP",
  "key21": "5251RS8xEKtw4kEzTrNh9qkHk5mZ1NnjfNmp9pM2toepnwo6bkeLrhx2BvoreNyxeppiB3bTEmVmb3NgrvbXzeTF",
  "key22": "2WWpULquQVDr5zttzK6zmndxRVmRqEK9kGYYUk5UaLKW7JSJ9EjsB12krpqwsFz5YGAxVU12Dj5xgwBG8TmEfM3Q",
  "key23": "5iSbcr6Wv4t2m3cTuLypdBPEqAeC1KjYALNqu4AMhoaHY6HFpTNFJu2t3v4grtEwSJJKkKJZZUoLXByC584CAV6x",
  "key24": "4hMMm5gEcTKShibGgfE3FTvtcQ5AvhAUEYkVws5N9AQvjb6tKwZczkvPkQ23ZrHoCKim73m931EnxYz3hNYAfAcZ",
  "key25": "2FVoSmXD2fcU7CHjWiUGw4Cb5YakFeQo3WMo1Pbfa9JGx1thU9BrWnHXM89kGTVdxPHq9Fqy3QcSXRxKWHpJj873",
  "key26": "47SLxBd6giJaks4CqDoXULBwqQyipppKi3eFUy8Mft3WgJG56K6CVBQ2xQTnrzC7M9nWEegd3egRVJg7GagNNWeR",
  "key27": "2L9MFVvghBhcimAgGcFy2n5C2VvUETWk1WNmwerdLi7LpNpDKswN87FmgbKb45muq29J4LFpqXBb6ot1c6MoF1hF",
  "key28": "24Yn1G2FCFx2joQ2Y1mBLXsGXtDodoYe61rr9QJWjpXrqXhdAyAJuz8ocF36nz2w3icdd3Wpw72bcwmDihgYX4PZ",
  "key29": "2FzepdzUmrU3XWk4sVUzbqhshEUAfaJU7njK2sBUMR82N82bB1fBFZ8GbhnvNsDihWvhwHj8gWYzXA1NDDeboUi9",
  "key30": "rPe5s8qXWAABUm1aKnW7LyxpUpHHTHsgxD62s8MmQFs1YB4HGujf1o92iMpAMFgkmsjGwQR4PBzbh5r1Mm4c4z4",
  "key31": "3xUdUfFg9d8ZTW8ba7ZTrcAcHBUGSVgoPboH2WUnex5ZwGWPRpDGabCJf9sqPLdXoAnGvMHqngMFYNLBF9k6zesf",
  "key32": "5avZK51mr6DSDhRCHmFUZS4k5wA72GxaDK4eh6Px3M8Pau1zoozikhNQsNL7vNjSbQLcz8pwx9zenmdzHq6U2yy9",
  "key33": "5HthCvNzcZ49jv4yDcscfmbFxQhfowzgK2nFZWZ9novny4DQKZQXkc14iptNvsyUyvGbcHsn42mTzBAyGa1D6QgG",
  "key34": "PmAz68a8DUKy3VV4kgTF7xHoHGdg5aJtLaqvxqZQnqvjj93h6v2Nhd29cUBNNWm543M6gKD7XxTw6GS4bZ5xHFx",
  "key35": "34ZUmQck1pFb4cjADUresRrKACPyx5WgnxVq3d5VgNJQEs5Bgu1KMhGKR5uBCnM7f84aTCxmnDZupdWw5HRavhBF",
  "key36": "5PX1JU382pyPk9BUw9PUUKizjtzgcPWCpszJMMZpbXD5YrVG6DVb4VPk8Xx8qvoySu9fXTsCoRascutbcxCKzPDE",
  "key37": "2ym3fSBCihKc78pQeCiFo66Sx8HLfdkd9rBsRRzvKcREwaxcLAQKmT25m7zvcL3FmqccrGeb8kEiys1DYoqrzzkw",
  "key38": "YwQ59BsBP8HUt84KWaigxiRnLct4Av2skajbtV3kQxt7BzNNt5ecq6DZTSWYYxdm2EF3Yq5oRjz3PmZhNUvLPPT",
  "key39": "58J5dLvosTDLyjtSe48iWeoVs4gyuc7GaGhkj4rC5toXhLg9cur7jg78a67EjpGatYb7j5V3orXSSRYk4P1sKa99",
  "key40": "vPVyHH9xWsV4aurz4DAntMMJkCji8hbndbR31xKGcTC5UiDEC6XrNjkDAHmbcC156keAUFEGBmooL29nbr26BaM"
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
