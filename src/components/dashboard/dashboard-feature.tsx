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
    "4A3nUNgFjbzWcrkcEpjxTddD1D1pbsus5U5nzjKwzQbGCwG76LAFpADdChyXZLX1ttCyh8PPUn8xkac11ZXMdRgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pJ39Tjjox5a6ptabyLNwpEV6QrP5ktbaA7CR2anc7tkN9aMiv2fxpFBpzd2P4nqhcb8TBPQxyFV59YDLxVktCSK",
  "key1": "XTFhfP7CRBmJBsaz9T3bCE7PcgedUrKcyExHUKGDQLC18hamxEyzvHB9GbyKWPECTh8sBqK6TcXPfV99AQzm1tx",
  "key2": "2tdHG8TCJX26yw6hdduptLtg4JppfXyrhWmnUKxi63fnPbwGPV84upnDGtoe73Zqf5nkrnoDFGqWKQjxirdWZosx",
  "key3": "4v1LmFDi9S2PyJ44cHryFKrSysN7RL3m87XhgZzxND41JH3R7E3DbTbQXk6LCT2CiSTg7nWfB4YrKAaLAS3eNUt1",
  "key4": "5n2QbjoaLRUrdHYU3cqAxA3Xo6jA2AicCjD3wTWtpY2zDHTavq4dDfR5hz6fVEJdjmPjPfC7Ut6THZdmsohz891",
  "key5": "2j9NWdTk3vRPrFPjpuwVSWxSJ1fv1vrDJRAHwcT8zqGHDQU3446GrBP79aVNwoXcBaQwWQfmXBXs5LqrgEs6GUS5",
  "key6": "2XHU24ykEZ7pxcZZmzZBxBJAShh83jLjnHne2eUpu8SDFUh6fKhGSHjvMdaj7oYbChhKWvwPosZtx3Y1bU1CZXVk",
  "key7": "VUEtXViW63czKEfwWeZH3RtMTc2xbFpPCpHgcGKHFph5cBVxEDbbcwDMbza6DXFSRRe7WR6uKLu9wJeKoZ9aNEz",
  "key8": "3x5i9ZiWmJxLfsb16ErDqQdfdubKdvjesNWn7e2myodiZ8aY85Ta9j8gKTK1sbAnoMGuMs9MD2L7DMUzSGa36XY2",
  "key9": "3MZFAKWzBq34Cy5UAfUxiYxuRoRbTKv4o1vGWMSL4nRjE7NKhC364EvboX7S6AsApGuz94B8WkGMhCXxjisJX3gb",
  "key10": "pfdFVej4LoepFjiW2MVWmEJ8SiEaxLvzfmxkqpG9CiS1HnUBw2V12Xux5VoptSs4jGiLCEJeDkeCUX5LT4qiCCw",
  "key11": "3mmy9Qx5w7knEAUTUojCLfEKDgLGZ514z7TjVp6iMk8sG49hMArsA7JrwosaB4iV6NMZWzSoTdVm8kt8TKYNQGPH",
  "key12": "3TYme4YMryjuNAEJKZvvb8hm3MhufUaXnLhcEGzv5ZUaDhWggshmsBMbpRut8JGzWtbardLoNrkaBJYHTy69DJmM",
  "key13": "4Ag8JNbHMqUrC7F81v8DGgyrVoeGzunCfFBqFuqu4454g4SCRvVrfWCA4o4mYbu4h4GFN4e5PnNmc6pkWHTgggvb",
  "key14": "m1Yez36acdSZrvma1gKpM8NrfiCFBZUjPpnxpygSzYskB4DNzEyf6pTuoqujBVgcZUkwYC9ooBgPrGkX2Zs5Rzx",
  "key15": "3P3i3XikAgttTn39SqcrJsnPRcJWbqYcdnS6BTv5NNEUghwo3RHvPGZ2t8XdLSCKdB7Qvsc9A7oFFVNP6up84sry",
  "key16": "4z4erff6hLnQ7La8PHTGr6HLuPBUaqgPKxsPz4Rbhob9mfq9CQeyg23SMWGDR6RtQBz6K2raov6nAVqKDt4f9B5r",
  "key17": "4RLPvxXfmUjnniXJaWK1hNgFt3Y65418ohCy5qocTm7yYv8Hznc96Mtd1wWtb2jCMHLDa7ifaT19ypnagVx1phhF",
  "key18": "2rS3Njz98B78QtW5Z8SdaAwKHLUHoakUCLRWKuZ7QByftUEwzWPidJdLyTA7LJ77ybgDZnFLe7K4BX8XD1tkPtZm",
  "key19": "566wdY8E5qbhBH1zXJdoop5BhtEYireUAZ8ysameUgDHs5FZWgWzUqm9W24TtnMqmksovsfLzTWrtxpLx8A45mr4",
  "key20": "3KGwoJZDx8CNUktHzVov9EaVouZFydWvQSqqGjmozbPzbn28bbp6ikCMLEcVnq8Pq4RZHQDjcc2yz3DyHVgaxTz1",
  "key21": "4ZMZZUGTATRMXryMdkBXBC8MRpLUTdHnFTePujGDgH7Yny6C7GALLa5FfvRawYGnrFSNBsyKihv4X8yuXRf2k1co",
  "key22": "3j64XQmqszeVJJ16UY6vurQybVMa2NHb7T6JHjH5wF8f9vRd2RXCQnLtNV82YjR3KSotd77BS8yCBSYZvSVQwPN1",
  "key23": "4yPgkV5i35gc2pvGqWbBWXhgv94TUQwDyr1GLdfAwuevWhWWYt6sc4Jvb1JUWQuatQUKD59A5vxg1tiSBiKCNKcC",
  "key24": "2qTE8dcmsgDpvT9yCAKarYrE5Gwhcq4QiyLq4hKWXhCMvfc3JuSBvEeepA3QuRh7Sv1NH3pNJFhidfHk4ARTchce",
  "key25": "tm64ntKZuFkm3Nj8hrwYrVnoygi8C1SagnhH4Xb3Unw4JqMsNxvHL6WDZQrTLMNRjp53CJ2g1jXBQ2WMGbmSgp6",
  "key26": "4G4Pp9NheiWeWxhTWvoFicm5umSjfkE8N54H9UvziT1xH4N14Fb7uTUBweiuQTqgTu1e7TVxaKGud6TGMho9WoRs",
  "key27": "tzPPCKm6DsBncxvC3TvmftWxcLwNxHdWGfokKJT8jBnHHJi4bTsFeTHw8C5emtYc644VgFY6z9YHuWLD3ihtSKF",
  "key28": "2VjgoY5fpwY5cRHeJVP9QophySxDWSVY2STkkGhrPH7otduA1T2PEPHeT5SEc1u5LgsG8gVqHFqFBC8TNYwsrFA6",
  "key29": "3xjGUeZ97hZbpP3zef9rHvwqcYmLxXFQ2LWF65zP9tXd4WvDGqJ1wPxcP9Seuhu54Z81uqk2ycg4EADRiHJLzurE",
  "key30": "3hfHqZrqUiG6NXzQDUdtH6neoZTuW37QqAhHbLbfbNBKx5VuyMh3tzX5GixPmnuHrFisGmnn2WKvm4yFtQuTt6Ky",
  "key31": "5bugmg4DtuMirsWefHnfoGqdU3gePZARTr994Qe8bFR9oJi63xj8MDnLkAu5bxLhFV3MdGX9kF533YTcdhbhD7jw",
  "key32": "3oL8jSqJrGC9q9ctHFwvnK8EyZkVoASvTYTzQDbRhr1dFGx8fZBec8FyUVQXwp4Q4Z2uyCN5KV2iKiR5PpECZwDZ",
  "key33": "2ac6SQdY7LbNMGDwCaM89BUmiuRfNdNmJ8WG4Pg1e5QW4kzqwiM492iVShxtH16BMCM7BM9P37Eu29WVVVmtH7No"
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
