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
    "2yk4biQQbG3gAxt1cRWKt63qRdwcpvGoTXXFNmJ1zWkf8qwz7CbTZW2A5JNycDvJN8sfsMoPFQug7iMe5nqwXmYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zCwR1vtyaaGPDiSQWrQDwDxTyNW9KTLF3E8AMSQDXBSXTSVoTHNTdBbWrmQigUBev17EFtmq8fF7CseqNsbX1tJ",
  "key1": "5aJdEBjmUDacXX9VvH93YoJTEaNCo3RCjfhpjNqypvKU1w6MidJsQ8AsGtGwuRuj43KW6EpPUgxxujS2FeJtWg6R",
  "key2": "3KkYks3AZpnjNnpdidc9T48qnr6eNcASySqYp42rfyC9vMQ6YRNPMjihNoiPsrXDTTLYBvEGzPP2MbpQjzusAArN",
  "key3": "26nRiC5mgVdVv9mQco1ucgHdfMAUEwNfVmqAujU4R4wEyPGdPojSpmaAiNgxBL5L6SuzEnjeC1VpmT4sxvw8QjkU",
  "key4": "3BDiwt6qhq2RfXTBP5fwBVphPTUMQ3iHmdYvjkbYuhDgGZupwVw1y71pbxRWavPbbSCNnirbBPfXSHzssFqm1Ucr",
  "key5": "3wjphamVsFHGBfwHT81g3cU7njEQTAnhPNntKrjVnfkMTshUHcrymLehLvHERiE4dHr6AmnSYaP2TTejxXJuU2uv",
  "key6": "4ze67hkXbmzkRVSUxnso26cbPtGHzfySb8q8GUQFhSg9CyP41Fpz79GA7iHKRiWEtJLWuahW9iAdzZQSywTsBs8E",
  "key7": "3fDkr2WV2BAMbRyNfpT6qoN4jZGgZCzmLp3ZB4UUSkP7rEdNYgPLmBNTBCkF6sMK5h5sS4L1RwEpdawdJXTfX65y",
  "key8": "sPJ5yYRQqVadRARYqY7aoLN8ZQw1Kd45nur6AJBwAveNGJ8ENdW7wfoL2ii16tQcy69JeGczEfA6XHtyyAeMmSs",
  "key9": "5jueEBK1SRCeM5nmCfbCF9m7mw1xSMWE14tS9JxuDKb67EK3cPpUd7nQ6dhtQD4B3Br1drMoDGa5JBHCvUX4vcfJ",
  "key10": "2xVMtaQ54RYBZ3ZxxZfdRh1AGpU1veFH2eNSPDMqfDegj2JwMLgMFedfR8dBg75ukPqREPNJA8SP2AeFMRt4KPUd",
  "key11": "hDhAwJH41MC65UrCw4t4WCtQ88PHeqY94fYp6TqDFTuQA3rLCMErSdAhyEQGuGHwKu9RCSmNyTVkeYiERvzCRzQ",
  "key12": "2cuuUPgMt1Q4xXV7S8cbJqc4ZzfiFXGRiZ9e2J4xLCp1FeLRPcxqMJJJvTtH5qBYBmEQtAJcVBYqb6vkHSQadSqe",
  "key13": "2AjFBduiCfMZuXNcAxbEk7qmSvoyf2JZ2ZTLcModALzYxhGiKWuNSdRY3qqkocVMKzkAwcygFwSkgmXFG7VVF43h",
  "key14": "2S5fBsE5f67sHPGMd4TowXjan4LQJPB8G1oSxMEAvxw3iiCdfZFe4QwVr5Q6V1LpUif4mkn7gPN99ki6Ro1c9XAc",
  "key15": "3B9GSJeRRCJaGVkRzaHhnWp3RBvZsb3s6pDVJTNKnLAkTXaPDrrBk9QZpCmNjzAoSZNy7tGknB1Lg3gKngTRWW7n",
  "key16": "4V6Doo1B3sCSSAiH7et9C2xEgSHRWnuqDYW8Gp5UWsr2V6PSsuFZPdBYHdctcUqsoWEJgMVe5wKVU8o4B6hQmXuA",
  "key17": "mAamqL9eZLzNmAWxk7tyFWqV2ApLsunYL6d2XdWeNf37KB1aa7DYuNCJUxiGiXgXygD87KG5e2RzBAMTPqGiP8Z",
  "key18": "QD8ua6WUj8X9J2YmhXqAVxdQGJVSrYoZKp5Z4HeLpKY4QmzDbhz8nMA9ce69Z4vZ2Zi5CFo1qQ7UC6KNweycEcW",
  "key19": "3oX5nWzEN6M1K5WmZhZw9mM13r8ji2e2NRq3sxzCUYbdu2ANfwpFMWs5DJ5yKzwNFRRMVhtiuwBRe8LrXUuGVTCe",
  "key20": "4e9JjveCejFLxJKGfA4JRMPbKocQzEhNTG68JWJ4R6PykV8jhcw856NXAmHaaquPtpRD3ThE3muuaN6mYcENUUfP",
  "key21": "2yzqLThQ1iZZTVVgPThRJaYhdLAX3sqbGg8WX1GkozLiJMQN8Lc5cXu1UtNCS47RjLyC431AP4MQegSJ5TgVKNXF",
  "key22": "HD2tjAzdvHFLQHhN4Gdi5ochPKjdhFfegsLWgMqpp56sLod2FarSLA3cC65jtD6GZmiHVYqsjhgwnLPpGB4FRap",
  "key23": "ugvv2Jv9G2ArFDAooSZUDTLeJyqLuE1USxjaoSLoNiNQXA9myXU3ndCWw3yqMHRzM9zV6qTwyBYfL5wgn8yj1Ed",
  "key24": "vJ6UMwBUNz5AQp8p9Q399GhvgWr7jDsG8qvZL4wnj13ctque4KtaogLedSRfe4iT2XfZnXEFtdTijpahN4z2LPH",
  "key25": "FZU1RRgRvShNmApULxFkNMwCRmRutZ1TZudt4KdgmjGMWo1cQkWQeWfJL4XiwrifBddPVYVp38XD4dk3AUDfhTa",
  "key26": "3BRH3XED1EjVZm5MJqzdSqQhn3aQ5icWGQuVVgn8gEPknfRzCGcdHBB9X36MYZfiirbVFV5SuXfftsgtm16v6y6D",
  "key27": "5cLWRRW68AD3qoRjmfM8BvPPYjUzG8UzxBpffzCn2y1iNm8LyRTuhYEfqCGD1BXddj95dKW5XeD6Vjbgbvk6R7qZ",
  "key28": "3WB1zQW1SywdaCH26upTawZ9FH8DPJ8W12NdhKR2g7EmzKj9S7aFJMyxkTTHPGYA293sph3enb48WsBDxGAkqWF8",
  "key29": "3ZU3HSPtWYbyPLHZ5XTt6Wb1p4KqW652vWwDzNnUQwhbGQefyp6rPEsX3aVN3TCdmVrHBPgG49ucADDVyWqgJdBN",
  "key30": "2kXsuizP5bjT6MmsRrKYWSzdq9SrCDTya6m75kXErGZz3stk2Qsant8P3ywtCPQHM2myhrUHLFzZmRdSKqjhkgHX",
  "key31": "5ufPL4995VTADfz3gGerk4zTiRm1B6b4FsbwM8hX3uAUHTastjC7swepJKCZAmFv9vooyR2EsSFjb7ZrLZw1ZRef",
  "key32": "5qRCYHZ7b43aZNjK8xqPMUWrfYhq7G53n54RDMZLTxkE8EHbendewMVTMNDxFANKaq8zkTjP1SermXwxVvX2CwDy",
  "key33": "2Vb3V9TKYeNTuYmx6TrXdDrAuVtDas5c5k4Sk8EQcfLNkYg7LQysTUqcoD9eze9AyrB4VBpcAam7Yr8UvCJ1tf3W"
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
