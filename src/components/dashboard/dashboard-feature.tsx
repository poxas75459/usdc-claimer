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
    "2kLz9zh7bffPUcAoj3WH2wthH6Y5v6XRbxRwoMy7wa9W3jkEp9uYzCkFopDDPYPUC8g9beM5sQt6ZVAxSk2UzbW8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dMZTSXTPBrJxcQ2U3uFnWe2weUtc3hoFpCUw6FW1Y7KhZYVX43ktjwzhtqhdP9RMh1QZf5yu76sYPZfcAc1PMtr",
  "key1": "3sga2BvG4nosSsenEECxRVdGahHrXXAcwjZYNMteQPyCYHAJm7SEvvswqiFaCyk7YpSt9xGu7vCLxDGzm692jZfe",
  "key2": "5c2s2kwoeUyjppXTE8uhNhJ1ctZ31W18ByFQmnjrKzw78zTwbUNcjiKVjy9oJDYS1oGFTgDwNn3ho3ubo2qHXKMX",
  "key3": "2N3TcNhi8ykpTBSaVc567d8vqmk5taDvvKPePYEhYtySwFAjHBcxkVJHxg85o5EhmxL4MqcGg71ZWPFQLAB3WcoG",
  "key4": "4s6jfsCd3FKU1c8tVg7YKoV52NdtbQFSdpR7daCb1U2e1x25anteXBkwPKHziCdZM3zGpu9UkaqeDYACqajuNREZ",
  "key5": "5cg98YYKfgMr3SDYZg66Vkz5Rczsr3ew8JJyMYe7y2PNbjV3H73FVDcNCRSZHCi6DaffmGBpS3NFV7LZS3HaLb5T",
  "key6": "3pedmR63WJkP19Y3yQKR4yeQ8bJZucrnHGZjE1HJjQV3oiWuQuxAYcJrEKWzvgC86kFqH3XDb3WvPa7XzA18uhGB",
  "key7": "4RBVEBA8LFLu18v5ScAkSHEdWSLU4czxbiFBf2wnSkbWyhUU6HH2SH4SSXrFuuXodjXQUtFmAtJuTgEXM5RGrP2G",
  "key8": "4yXbf1SzoWCfXAYg7CDQoyoSeybpUBNYSTuczyppX8myEj49iLbwMjqXqX2scavYtLRhJoYcavK7qQyNzpUzrVD3",
  "key9": "6N9p7BHLjLLNWrQwyCsruc2kTMwNh4xWiwKnd6a3FLeji6e9HhSPr9hcnAW1ewhRd8mU2vGHwz6T5LHuUyWQPFQ",
  "key10": "52PvpXbvf6MWFsckkuYdk55179cxfFR2P5kgvSa7DVdaru8vy1Y835e4sDLwt6HwAkaF333hRWDN21m91KvPzVgH",
  "key11": "5vczJZWwzGbg7uj76GyS44x2j98N6ELC6pWyaCw4npyczMshCxw81qCU3cxpjRtfbZk6rSxbXymznkf5FzNmVaTY",
  "key12": "E1Qg89tKzXoqJjEYM1gRQmBnBfYdaAVLe6gdjPzsnHvd7Zxnz6yvighgaeJ1uMxdErS8xNHAtGyaSE2tdCfV9Ss",
  "key13": "27aM1uWKYiMyrp4i3dgGJPh9wsrmQaq1Hg6SsGsj12kpKVaHJrXuS3FVeAAt8jUK5MagvXNfqvbPB5xuNSQq7MKW",
  "key14": "3n71RYF985DYZWuFmFiMSVVHqKXLTy44DkVccGa1uGx5kAzkQPNR7U29og7kqfK7JwE89va2ANsc1aNUJQGnmXjC",
  "key15": "84JiUZgPZtEbviD69yVByhz1A2ZVngZVGMa3Mg6KCW9jGYjhWV87UfBecf8k9WxQsM8qhmg4Bem9hLzcaPeg3Mw",
  "key16": "3qVB8TUWEEVkdhZoxuG2PFRVbuVnJ5zY1CSE4Vm8aRK8NtVJdA1pKBXiMFdLDpzpt8DbAU9TsmDUw91dMfKo5wUb",
  "key17": "cUxm8GnVbhdBBUCn5yoZULTbxSiLtuNSuK91MW3jARuG9xZRXy2ToTTeEjj1shzWhaARpi59D7w3fKzCNwQPH2L",
  "key18": "4mDfbfxqo2UMh6QRiEfAUQcabQWucXM1xxtT2wQHyyQ65QsQ11nXADKqRgHxCcXPCaQP4JUnEwsHciTxDcVcQdcv",
  "key19": "5aqd847R3RFyK5xurKxBvKLJi6R3Jhqu5StcLCPmCek9aiKW1ZLZF2c1UcEA5YS4bjyZ8nVAvQDBgaz5cuRiuouh",
  "key20": "2xbtJN7ZTARreoHhiHikPBSnijAN3nHJjdRrPSzWsC14fDYjLFMq1gyJYVe2mGXy9e76pSuREjNaby3ah9RXgUP3",
  "key21": "3RNTJxwb9GqtwA34bVuWEKr3z3WY4gJoStDyFH68E1vFXkdwmmS57KNksouctKECeiavk6iK4TASK9Kpq4Nk2jcy",
  "key22": "w2XNWLM9LtHcsjMLsDtKywThM6qQMotvYwv2aAdyQw6m8b6sDizF5JHRFoi5x5QdAQAjuP6pYfHK8ce9ZiKzs3Q",
  "key23": "eJ8hGececLSHMXopwxF5gWGLGqXF1BTMw2JZWKy7rnb2iYkwBarTYEbqSVXuNt9hpWm7BjZqc7xCuCWTAkzreMh",
  "key24": "4kfoXZ1gZyGDpQxt5Sk7WTFjpwQb4KfSGTG4h98Zr2PDqNFGLZhD8KG17RKTWeoBmq9Aivo1jHQ1J4q4fHHfJ5fq",
  "key25": "5n58C9gs5oZFfCAEoomZJcsyfqDzbr9bmdunyNndCmDitQM3b5wBoBT9BtDbsNGHECCZcQ65rpgTVtaGFHJtTwwZ",
  "key26": "4fcta6avyytwFUEd3wSPCfaTiwF7kjKmE8C4vVpFhYcVge5Z8Ze7smphk85V9mWWW3meLSUppqT5nE9w674JvVpc",
  "key27": "3MYAJMYeBmjUUd6qzCpDCKZptheTpxLRuJnisdtAb2gqBokpfEJtJvD2XWcUVZ3F34ZNtaats6Yh93hdWEYsVN6j",
  "key28": "5kBM3KUBFLGYNegxEeU5LvQdZThLERPPwkKmZy8Qk9g1PQaGt5CixHPcJuEk4Uy1jvWUC9nyukte3VDDfhGxinsY",
  "key29": "4VhPv47WxXRv7oqmEhDXXt5zKith7zEfyJg2epq1jPZEi857H2wmyqRHFbrXn1ntCSindcd5g4JrNgLt65kvFQVT",
  "key30": "3MegWK59es8wVofhBdbL7DquHF8atx2c9pTeSLYQQTVBmsBP2sfQpFmfBUrwAGRKefF4KyDGedgzR5CKTkxSAJMz",
  "key31": "4gWtfjMqHtjpmCTPvXcSDnioTxXc2zWrEQxBms2xHMujsSfjV2m7ezJCkgLNDZoTFj5Lgb1of6d6vGsbu9CsMKMp",
  "key32": "YZmLrNJ67j5nrpFhEYfBhJ8ok9tz6hFdgKZcEhJ6qfyja1eds8fi2FzfeNkYvYrxThFt51WWUmtvnHty4Y2BBz2",
  "key33": "7RKpYz1uWawincrxLf8UCyFDpEHuDtmDgBxTFasTtd5ZcN631WSx53uxHkrxGvH6s3HhsG2nq65G8kpubvKpu2v",
  "key34": "5ktLBizJYpfN9Cvg1tywgwtpXsyxAputKsCgfUaGgCjc775Bhu4ikRzbBwYN1Y6eKzVyvRyc2Mwnmkq9VQm4qG7a",
  "key35": "2bueAiygcoJcymsepBej6FDEMofQgKRuiMWCyXZfyhkG4RQEFHoENr3hiuSwHdonpoddzgyzGbFHNNyR3rAdPn2J",
  "key36": "xoTiwoQN3Sw9R55hQGNB4XdGmLdiYN77c2EanjwX6Hd9ZzYfiimMWWfEK3Y9yKYyBY9GhiMg6qihgWpqC6ZqrDV",
  "key37": "5MaD6nRr4iWyC9CBPZQ8imKq49BD2YaAcJh8zBTz4RXGLYKtd6E71pjFNvdtvF589FdpmQummkstrvtrGo3pQraQ",
  "key38": "2UZbnqZcsXXbYrWXX9sD6pWCYexR5cRpt6whm5dzTe67sSzwMyLF6mQrzHhZDx6RZHaxHnJgGcLS1HJfby9Jqn3w",
  "key39": "4RLmtwN3P9pJsnz8EDv5LPvDiW31WZqhQdCfuigHEieyu6dVGM19nh4xrDcRXvB2Ptyg1UCpDB3ghFmyHqZTsYuf",
  "key40": "4rGyoPG9qoc9PzmNqREgxCL956FRrvtE78qKixiS8pjZgneV6Efz2ACaFGdcyhJSUjpmG3Hr5FVX2kkD3Apuj7GM",
  "key41": "i7CBadypFjH63EU5oMxGDbdTvdNpTiHqMqdAoHbfZwzCwswpeNz3uykQwpni77Dr8Ab6noNCFeFq8XpJeGaRcvA",
  "key42": "4bm63j64Roe1Fi7CVEYg1zj8A2ydJFYeYuJDo5m79vNy3heST73GUU1ZzhQhjewGpLErJL6UFspd3GrJiCogSPSJ"
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
