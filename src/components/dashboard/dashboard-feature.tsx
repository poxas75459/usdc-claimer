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
    "2sNvafwpwu3W3t43ix5L7VpBTReZuaLRr4xpuCceLAtAGGbmt29WVupKKFvU7icL6MNJp9wpTsXhPi4EzJyt4dd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ev7dXS5eTHsstHATHcsXieN2cg377XpJDHbgrVCBNgZMqzxw66nPxhCippae63auK41R9mx3i8m64QAuKH8RFcC",
  "key1": "jmVt8YdZ2uGyaMMJAUf8J542RqYLfETbxke4zXt8Xdt3GEYA4nAx4wp2KUodzXqAiNXpvAKUDJ4yFBNKynBQCDa",
  "key2": "EQutMuxGQLoHZqgP4yky6wncp9sfoBh5sV4EC2E1MTkYT8shmS3kfnHFXNxUn8V19NBcdtz5K3V41S2k9ibC1fK",
  "key3": "2bUrTeWZNAEV8bSRGYgN9MgQUCMu2mug9TqHTYPWSh5vELfLfe9961K6y9dLhxLNXk9uE1w4jzAffR9Z8V8JPZfT",
  "key4": "3xhLPY3GNFAg428sy3WQ9D4q4B6nGDbSYLNMWzaRXzrsZSJHQLnkGUN7mP41sT7ThN379a56nBv2EA4abinT9QYS",
  "key5": "5pmZKcP3pwd2SBRhxn2RBAPKXBThWa2eGCmT9WrCEU4zcYhHsQ8ityU3BKNkXfTEJ9gRn8XRi3MoXEZxWFRravYp",
  "key6": "5Tie9NaNpNtPWvyrT5wbEV82yhu3dTgiaVSy41E48Lvmy4NbBBdpM5VCBCJwL8TDPioVYKQ7Njyv6XoczTRcrzbB",
  "key7": "2DjV5eS4RwWDXmk2zJg1sQM2fzSAYnCtNTpzok3RnhyMfJ3T2bwAtf29WZi4yka3HKJwUReyBTDZuk8GT52V3Kq2",
  "key8": "4hymGNngWrTwp7KsoEBDN3oKb43E1hp3nF2tmCPW9uk6CPQbSiGAUezjwRy2ohNZ8CBWH3ES3wfawKEjwqRYfFi2",
  "key9": "4aZ4Fd98sqRnUXB2ru3X4WJ5k44yWtiXAfF9A3KS2Ncq5ixpbXMMN1eixdEMYCXiiWciJKGiWVA8cUc7P3pc9RLW",
  "key10": "5aUZHXx4dH3iazQLCJyXe44mPvquUFv47sbfasY86ovgHVUp38vJC2pK8FLzGrBWXXcU2z27nZEzcXF3N4CwsPw3",
  "key11": "cPuCBLaKMwNtCKNQxjRiegJoiz2Eg9u3DbWbTeMTB2b24CoevNBFZSd4cq9qUH2DMDq5rHjctADGywZEuVyahf1",
  "key12": "DCcCXEoYMXi2hF5c27vCVgVyk1HcPgGm5m7vKY7zudy22Kd31nceygzCaGffGQfiC3bgr713FwkGDxdehVVcLBd",
  "key13": "2HBw6xEZb44W5q1dT9BQoF4gVMJvxzJ9fXdJhVFqH8dZJYAKsasDJMTdUNiaXm3aqY6CqKGeaUz97PT5nAZbWmqx",
  "key14": "5ZexjDwnstq6FehTVxyyTyPcRG9YRqH9PkmFgbuQwGjQXBk9G4YxPwuaGFFz4LezMNxcAZHuUj7PfAdDLPSdRjoa",
  "key15": "3JW9EsMTgGJYru5KF4jzJtPXc65QteD6tA9pdP92xXFmFQJQVvsKrwaTX375DfpBgBU4BabEbns9iNegp4LYwJbQ",
  "key16": "3WaDQJkkkN3RazEvD2bMcYH3SygJLbvgqAni6z2UB7pGcVfcSZSSpr19N7kaPE5wUv1MtXGqhe9FhBkNibbXwr4K",
  "key17": "3wHBYZDPkui1E8RhmzdRiz2m8w8ZYkioLyxF5jbgFRuZ9cNY3AyUp7rfV3XS63QH7BbUkreUvW86nPXhBS6vR8z1",
  "key18": "4naMLftGdeEXVzMtkQ8uzGwyfhaH7CYRtSGBigY23mUpGY7xznFSry9nLhsXjtytJAyoeLorVLsmS7QERLjXvNNW",
  "key19": "4B6UnajJB34Tnh5UjtAhiBBRvvZXXuqVUSYHVeYHdytniaS57HvkXSHdq4hCRsodmLUP7teQM8BNgzxRVhhi4jen",
  "key20": "55QpwPoeeD8x9Yfy3WQcuEareTBrXz2dfxw3yByqttHGGSEmvUyV6QTYgiRkeVvqv2rTUHgbrGSUtASVTqDyBy5y",
  "key21": "4CvymdfMpL6rbd1VwHCQVfzr16zM1RVdyMn8SMo1uMPLi5L7CDvWZoLDpAXJwJ3rhnKVv2boCP7kxxnkCZ1U5ZJa",
  "key22": "34ziexiffp542yr96wEGiA57YnpQsHp1hF5aMtfL4pKojAZCDFuPcX9pw9GwtTLmtAPcdPhd1CTngRNPS5wWWWDW",
  "key23": "3VAEoJ8vsbYH2QDJkKcphSU1gnBeNV4gjTBqJoS4HP9odcb9Uc6LpYddQbRdhxaxFbBrM9ThZmqnhjq21w2dzdMx",
  "key24": "dtaAMMAUASfeL5gQ2shU5ciz8NTqyeBCY6GQNHeLiipzmGHeBK8YPfcKJtDrLscRYQGWLC3rf9d5MbHTAJqyJKa",
  "key25": "5bnBTr4Rksryv1UPbVTjtWXdnjGdhZkQ5qqVmf2eATuWEJJRCJ1ifXsZxHGHiA6z6QCANgGa4ZCbSNPkNpbA1H4D",
  "key26": "2w3ThvPQbariMcn1xN1oo56f9xZbcrmG8bybFDtQrjF3VJC2ccDDbPTGk6KYLV1FebrwAVKAvZ8fJsz2VqW8CXbY",
  "key27": "2UzHMmujsj8MT9EmGLsrP6dBJDGwvKXM4h1j2x5feet7DasqnjG8SeLx9Av7tS7yFfc5SYyBc5uu5BE4sBcRF67W",
  "key28": "dtUStWSV354ZzQ7ZbUkXKyBUQueZGYwVki2Cv1XjwcjFotvYXMyNZnWumQ9ib4xqWhSBPhvF3jCmfpA6HpaXK69",
  "key29": "DN4FLqULXZiwHZvuptpebfKaE1rFFcGLq3ruXx6wEb9efyBg7jss2TgVWGq3kX1WsG4UtDMZtqx7BBwnMcWiqEq",
  "key30": "2DcCdgNN3cue91CH975r6HPnRHEuRm2zfJro28JKbGtMmWDPgXtJbDvKqRU7XLqizrWEcuSyLvZdAKp2kw6vMC6g",
  "key31": "Th1SMHya8BzDqts4BANzaJCH5baV5iZXcS9iAy6uXtGft76KXLv7yDiNFhuD8t7cxvwSdpy9xsYP71n4hYeWtGe",
  "key32": "3tDEFWUCFHqfL6zbGYKjzjC75vuRc5TxCeqwoecv6wo7JUK8dsZ8AkrRifo3caPMgy4do8W9KW7V6pK6apeqQgRp",
  "key33": "4swPLWQCrZgs6MTtc4CKDDNwXBPE5bz9KBwrW71N56PyqoETYe1PbfEbHpXpSZ1FatJ9Xj64MbEM3vP4bSdkVn81",
  "key34": "2bqnoone5QjxJtWJ372CqtkzKmBCXV7QLVfAL2C3gF7zneYTQeqkc1FWJzhPrG3ht6ZisfJLo77Cy95LuyYopbxJ",
  "key35": "3aT4LAkikRDCNzL2R3h8Re37xsapj9eqP3VMTvEec2FH5mHtPPhDqEvsGm5PRB5Xm7YXbzEs2FWTheDAQbdikw2S",
  "key36": "282orR6RuGSqotCUrqjxY5svViQubw9APLNXCJ9LkenNgu2MUcwjfbwcejTo2g5mrhBcmXz76HGAkQiFswSAaKm1",
  "key37": "3czGS7TdHj3DetzyZrxWm2RPRccGZ8LHsSZJNKAwX6QaEAK8uGmczeKxGtC6E2pAeJ7UDMphe3voaDigD2ABWcAr",
  "key38": "42J4kQi7W41zXjmPu3hwLnbTrSQiRjQe3dfyq7fihbvKFAQ4yk85Y2EGX1WCp2YC2DG4fuJQecf8sPXd89YxyeBt",
  "key39": "3wVq9jiNRwCWZmi3nDmL9gSjNFpZWr3aKF9axckccMy4cvakBA2B9zcBr5cMTR2a69DZwY1As9q9yAbGibPx7iWv",
  "key40": "4Mvs15QLWgzLGiKLsHwhVk93PT7k4G2VcQnqBaZqg5WWE8ZZXhiJ6FmWPiiPzUvMn6zcPbP6jztEaR72Qh1397ir"
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
