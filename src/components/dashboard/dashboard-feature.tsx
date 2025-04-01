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
    "3aqiL5McrGHVJzVL75iJCrDBE4EX21gRptmqwGJZFiFozegRmn4MDNkvk9oXfg5wYALKUb4HJV7DCoY9R8eovGfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HMnhu9c2Ukxkozv3T6fs3q2QmX7Qdp1AajeXyHhk3TXPbKz37zjCcDGfVJd8QGEQZ9rwHoG8qyDhMhXF8mZ56aG",
  "key1": "5rhPFZuiPErW1UT7mgsUoMbxGyswsVP17hJM8bunFFoCtdaqG2MTB6Z5d9TEGWsGLCGNBFxUfcBZdVcRt8qnsLtb",
  "key2": "2z3rAMBt5vaA9e6tznkUdPuarRxzivqRDW9dp7gb8JfchJxTxsgFBaeyMrFv762MM3wrxRsUzHhDe28ZmDvh6u4",
  "key3": "58wQCo4Pph7dckGphrdugPbYAy9aTz2DbF2jB3kQWpWz5MbFhpVkgBu7kwowrq24v9ot746WSyL6GxpvTAKQcsTA",
  "key4": "4kKeoqNhHunXT4Xp8Ac2dUr7VABKde9aZNCbaRngmtLT8AtJmjuzmgJuh3aHpvMtMtod92jXCLdqFvMfXLb3fvAF",
  "key5": "65uvK5WCZuR8w8Eg3qJxdbKLFTdKjFcMfzT1rr8ckLSHuok3kLjwxLrgvojuV1WbZe4GaTtpEaWzgbN3nCMJkqmk",
  "key6": "28DqrPY7eT24Q5CEzGkqvHKzmy35o34YbtQzuubcdYuyc62bQnSwsxG2AWMS6zB3Au7tAv6g4GserMmu973tC5Jb",
  "key7": "4WhBA7qp4a1NNWAA1hrzM99mz9C5j5Hbk6wJsHqxv4MJ9XnV7ZDgrgepp9LmAWGT9xef8Uxu9toohPu8E3mXketb",
  "key8": "2HsghgovBxrZxM1qmacH1D5x8MYaSRjM79b7TgkU4CKM92Vw72io5R8PLrrK9SqJssoeathE9sZtMqnrHZTG2JrQ",
  "key9": "RVdSC5D9XD6CigRD7xajD69baLDN9WAwj8HFMm7FR6jtDFd6NFPZuc7p9hTbSBQgECUqNfcavMjXgGYYQZADc4t",
  "key10": "44gEV6o2YJvNmH6DXgZYuPcgart7DntX4ShEpEmCzFWKt9RihChJTtSTPByvqHZManRNFrtwsjGyG3ydxNYpiocb",
  "key11": "2riKuZTeUXuqqvWrMrcMLHtdXuVgEKJSUc1tSNrG5hB18bM3z8t9Vup7VUvopadCdSwDdo7Wp9C9VUhiQxYFdxPx",
  "key12": "EhLC1Ewf9shyMdQ846dwB1uk561Kyq3iz8Vfs9z8VqpAve4p5Q9V7EHiyyoz7YJG3xHcSrSx4EhpJmdunDtTySf",
  "key13": "3TuEGXQbZmgib7drjoG4a4UbirNrLiQc3hd5M8aTHmh9zkRTvBykVpJfyHMk7SwLR7GwLVqZdSMsgP9vAA9EvpYp",
  "key14": "2h1nXhVaWeGiZDAnf9vABqx2o54zLaCeoC7TFF1QTuWMKMqcPsKYrvvMmLR26bNggQU8Ez5PGwm9vCqwqUZrkVsZ",
  "key15": "4Ad5i9VYkVVu2Qjy7GT3KC1BSJeZR71AjTLgEuZTkWQe1FAm1AJUwPqDZ5Apw19FZMDsdcCDMJ4KuBHSwSpE6dFi",
  "key16": "zsVybHaYrx51RCrNsLEWZuGhNnF9nxGMm8z27qfBrhGcaTfBgNMHC5rUmze2UqiyJL27iFtYz1d6XaoFFbNW5tC",
  "key17": "5oNG8sTUq3hw3NGTxT6rEJfXzXot6Dh2To79RcWx8WkBMuL8uawpyUDth3x5oabqith4FW15rbPy3XucRinU4CRP",
  "key18": "339X27kRREenkF7yFoscsuQpRptb8eYtEXduQqmvFtMiszqNMKnoSAp4v7j6ModMcKjTsGCkiqhU4ju5TrycyvH9",
  "key19": "2a9fzFpYbL5bx6JqWtcEizZBPkvYraDN5JcnE24y9PYPcVkr5KNTPDipjJ3x4gtELeTLjw8Ec9k1UVRpmFeFYXm9",
  "key20": "3apod2cwH7Bg3NH8Zzdknz9GTbWXNjnXnJb2EBDQj7utPCZsMV3yHnsmBfzBZ8KF7pskNUzfNWwkKraSbEJ8f3EV",
  "key21": "6A4peSV8BDy7tMiWXzFEyMCftHFsv5ctqP8kioUG7a2SWXWRCqdmQPRZcwgq9RZCW5KrfWfJgDBR9so2s2sc8ZJ",
  "key22": "4pxpcnUpMtDPuRTACvsjoCaozNSrvMMe4qkTMHrkBFdWgomUgwnd5RE7DzU2o4YgKgQuHincoqoYRY8xdYzf66zd",
  "key23": "2h2sqpNuVYxLuzUxQc2Fpawy6zqTgHETGYHWoA7TtLPv1saUSsAJhasVBvsZn9uPCuVWvtAoFyfvExsTdhyhQYCC",
  "key24": "3E1QmuidxTkzAdjux2tvg2VhhnAdvHtSmQyMxtJPhPqLYcMAfQ77cpjG85WTHzGFLELkVyb1s5a17VneYqMq5HH",
  "key25": "M15Qwt8gBY5nPrwekWa9CjHUzjQCCVhb8CJsh7LsQVdZS7TAYtNh66Vs8vdt15zFbK55yXpPaq9SYAq2RbZbirK",
  "key26": "2J5F8TWFFyvN7MiWmA5Kb3GMMn65LCZWigNj5z4YUp89SmxrVg7C7Am5tzR4ZUCTfbG5Pm9D3mJMcMALKoZWHaA6",
  "key27": "2rceCULgAF5Q6kQYH4E1Zdkuvzx6kxe4Cy7ytu6ATkz3gvNqvLHkDGWWQBt4gYrgFrrabWGEwwq49oezmBUDz9zt",
  "key28": "2Ez5a71F13Qu8cgjvpL1PJrUv8Vujp5enWUCgiuYnbHdKizGYJPzrRrw3MWanCGibe4WSykQtjadn7JxKVU3FJDF",
  "key29": "4bMuqn6NRU1HpVM4Z2nafva8JJxZr77QGTaJxYLvETUhJpBNkp1m5cn2C4YA1R4dYHzs3BcHAo7vgBsvghv2soQ5",
  "key30": "3yrTiMQQqjTfZLZ243Ka3eNwZpFtDM1biJREtPzo7wYvSwBCMDxksVqtHGvakeuf34cpohhyunfaiUG72oYanE17",
  "key31": "4JamsJtVyayF11fLHJ1hu6mJCDsDP8W8er8Gi67dn6MsjxDJfNHsX7gr4HVBvPdjzMoq3QP9uQKEV9GBYispVeCp",
  "key32": "2LqqNxrEwGXE9vePdLBW8MUrw86FMzcM85uA67FEoWzuv2ikwFgensnVpRKzaZHLXh63ypTrzqdHi7ehRKnK5CsM",
  "key33": "2XMV3akdYh5ZsmPxAK4NutGS59uHF9dW1LiELcsu8QXS5GjYphsHRCKm7BJ9r5t3kBpDiTy4uoAckaoCu6UMehRb",
  "key34": "gjDHoEhGZHZ1ugYKdmguVXzjNKvqJNfPc3bXaouZW3oM3eNCRACjERWte3qYSrYCv4AHFFGBSgknnWR2USEMLei"
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
