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
    "31Lz3LA5UqxLH6Z5Yjph3mVigADH7oqnrGJn6i3rdPHzECvDCjeWtjohVrG1u6LwfxV1tdhHzUbCCvz4XJzgpApt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3muWy4Bt23Cztn6U4scNWmuESXQwxvXdTL6H6x5t7NAs7RuNeckvT4i4YKggYdFLh9tSMsD4PZbs5q72aeAMJ1x7",
  "key1": "2QkPdtBdAVJkiudmH4bcwmiNCig8xF5cPpwDLuNrUJVYHh9Qc5jGAkAJHUa268ZdAEbMqFDv6NQfvdT9KUhhNtU2",
  "key2": "33zPKfuyp7T1nW6Ls6pnEFFZfY3JwbdrL82tTVKZxUfe4j2yUDgZAq75A4KhychFoiQ9q2myMDugQ3rKFG4q2tGa",
  "key3": "2Te3ZgKwcQVpozryrbtC6S5rAg48tx78T4sDB9FvsQeSHcaRqzSeRGariZ6moj6BR5YqGyfLLEdNN949XR45bt2A",
  "key4": "5dyaKUurkF3Zm2X7NrtSDcRhnnELUnUvSL99S1y7W4pqR3r4ff53N5JyNjt1Snq68nQnCVtij78MeG6qMhuuXzqF",
  "key5": "2GERtgT2RqnxQz9pTLYMxwtn4ouat1xqFeHi3qDWJKFGyBSPWwnHDzkVAqcTHsQ5op8a5Jpqikbt9nijdAt2a8fu",
  "key6": "4Sp8ES4dT4L6Zu6ZNaZXKqZsTG78JbVQ7RpPqgEQN9QiN6PD83Wm3F8H4KYrW5Gh49t7nAAszCxf35D3zmF9qxHX",
  "key7": "4Do3JAtW52cnPuLHLhq3Di7JoRxS2RneBgYjDyEVUBRahYYHWj69G5do9vEeiRpvbwkuzTkmVxcMtw3ZbPmVaPLy",
  "key8": "4GW166NA6sveciJTTUNE59ogyHJpmV2tyhuKvT9vFw2L5RZMt9ToraeioBbYriUgjmZKvLfZr639dmLVhCQnhhu6",
  "key9": "28ig3CihDUmAb5s25dadK7BYZKQmbYxSsbP7jrQ1voz1P17oNw4rRRqa17X4u57pm4DoGGbPv6eQLnWYwzTkTfj3",
  "key10": "24hh1aZtBZKsJYorksxZjGuEEA4NZui7HswfezKK6MPfrPNDuRh8JojeMi3uivGxhqcRTtBaFMLze2kdK9mXzvhs",
  "key11": "3BjdVX2oY2fpUKhirGAaaxTVJ9M9agApkPHwMtgNwczCTgmNRpHMmW9Puzn6fu9ZAMDFewUADT8etkfgu6QyG1VR",
  "key12": "31AnzcJLz5WEQsigskJKy5joGAsWiM6xbj5XyC6TA3cacKJfqg5kzijAXZM7DEHoj6jH2GueFaviTgaNcawTKLtr",
  "key13": "3R4B2udN6J4pDkSjQwxKnqXyWri88YWwid58ryKEwFLTseCvhByJiJY5aSeDrEWHR7KyebZL9UtfuRZ315KqakXX",
  "key14": "3R9KUaSm7X1QYn9g5PdFWEuDWBLZd5thPbLwcPsSiZVDUTq4gkBt9Haui5rQ8LxQqwYNos5D1C92z6e5iZbwVmr6",
  "key15": "4MrnJnyyK9zoiRuw3P1evjTTXg4JakrcjpDbcjug2Xfe5UPzh6mX8FVfcDVBjMtgzQXCQbu8zFN4vBubHahwyjJr",
  "key16": "37jtP9VNkiC14M15DqBTSJZgogAxwbV5m6wrVWh2kCysATNezZJ4yoUk3pfjZ9WJB8QhNPJFJcb1PK8dT95RPQua",
  "key17": "3gkEhDWhRBB9CL4ywGBw8qCZevhwtF2Md9qcqajrXzhHxKozUJpTbvSWgk8gSqHwgXAF2CzVLzZXX4GGzPTGWH9x",
  "key18": "2QVtQ1pAzmWKiE8DZxeoNjtBPgUr4opPWWUV5XqtyJ7gZiX5WWBaWeyHpdauJGRAAk3gXaQh7WREQ8UwAK1QpaE1",
  "key19": "2xDBa3TsK1kx3jVi5MD1C5qv7xt4ofqCKU9HcjhiNEMTQPBGRiErfNZvctoMMD6cmXq71qzVSvuhzgwtJ38sLpQu",
  "key20": "YUewLbz8jRnr6Ko8Qgxz3Eeqq1Ycx31s5wZCmq3y9NGM4BjPjTP94yp8xXep4coqmDZGdZPPg4zxbPkThB3AqeY",
  "key21": "3XKXni8o3UruNrkB9sy4nQJQGLXvhNd9taZFHfVY3UciMDFDuhXfgWAy6cPvTbUiGhVMvMKuDXFMcYPfRXu2urfg",
  "key22": "rcn1vHosd7mBYH5Bk46kg37g5bUfz8uCxQFTLafaEkWmzeeUWbm2zGQHEbqGwJuoyVyq1JcFyN4vHicz1rYmPKS",
  "key23": "rkc91ty7cfs1pLX9GKyyZYTzrRU9sk2X99Tq3HicokPXULpn4i6MYaop4LEF1vqxqAA8UtCriyXzSNWPC7tANGv",
  "key24": "27srQrATeqyZd8R6EHTzQdJCipWp46faRHSKDR94YCsbhqdpZjEn9HcrUbYfPbcdr14wAvgJ63K857pu7hp8TFHr",
  "key25": "24ZFH7xEFRXuFsETSFdrg2jckqkke25CTYGBiL7HGEi3mSx3Fmd7ijKuJ2W9bEX5CeQkYSrTXwzTBTUDWbGdpYvT",
  "key26": "3gK3FCZttd69NwjZjDX5tyyyBwSVpFqdz1gp1hLQjkikH9diE6EHtAtCgRw3ruvUqmUHmX6ykYAyvzvRvmoUFgS",
  "key27": "4k61D41kMES4iGaM7mvEFogdEa1vDBRTfeWadtrvCAvJvNB6oRaEQADFdveQ9r69WHBnxfLfm5NnZWnc1RSZggz3",
  "key28": "2KnSr85QR1kHuBiGKoxgw6k3c76imF1gpyvxpediTxBFqthA3FNrYErbxigcEveGMgwykQ7jL1iSoDTChSWLwNA8",
  "key29": "2zrG7m9WVUUpRLgQR8tuPVLZZeaysNAMDotshDZPJi5kch7Zm5kfWcY7q4jSu5sLhPpDCC6fStW6uWxMMLbcZhSd",
  "key30": "2iugW1PSSXrL6ZC1dwBUs4ApQyqhRwPLBzr95pqCU7Pm3XuDVPVoYTfkq8bRdjA9YqHAW5qQh3a9SbTL5qFST5w6",
  "key31": "544uaKm4xVtXpwTZ9BXb4TG8aNSiMx2SKqwZdKfSxUzaVnxqNsV4EKwBeFhGBnppSJuYuZHpLAt6p4DPSr9yiQaT",
  "key32": "39f8nqp8fXx1g7Y5oDAYjXTDKbU5X1pCzUjXqhpit7SueF23WnmkzvmKmyUPNKUdhnXSLFJVna3Da5Kic3TRFH7e",
  "key33": "5we4j9VywBRgK52viWddMJCqaipxoFpFNf5dvct35nen1UexYpdQJ1RJWRDsFkfCM8Hmq8LPp1RjU7NM7FPohFwV",
  "key34": "5ZgqmtAw4PTSomLubzLNvNQec8jMkhdUY6PjqUqoQF6NZNsB8T5WtGcXj6tSF8711Goo1zA2sNmQwkznfjpZfaQi",
  "key35": "cYGCrxjXevGivM1X9tT2Dq4bMuvjb6EMQFbWdM3EEujaibnu4Jx5tG2xoEeFMTa2GmueXNMhazSaXYFJhz5QxTX",
  "key36": "52PrCAwvvZrGV4kFeAiio9gTBoWmz1brQzLn1XQZHvdvLVZERbcZMcMfGDmjuXLj6nrgBhBvBLaUmGUUGxFN9uFC",
  "key37": "vdbHSaN4hfCM3UwwTvSWWSTHs1sYhmK1NrpMXrsEBtqMobsXKrFFPh8wPdKvx3nYjWogF3QqRyz3UbSB328Zjg8",
  "key38": "4ExzCjjbmbv5kGM76SkevX3usrP42wazHXLUWyxkV1NGZndKAqb6EF8KTtNJjwSJwXoCFv3DzbSXAkfqnWcie4mb",
  "key39": "22U37vb86CFyVCE23LxcHdpRhY6AQMyvMQWveszASnCMiBxQ3cQdp6mLpTbQmHn7WrbJypHGSNqy76wDPkmDiCLc",
  "key40": "SiBFkMQ4mQqYucgFQ3J1vaRuRoMkGCNVes3UVpMoJkGcR7tPvaypTcYKGfJZ3jSubk7odFH9RNSJijStTBuznN8",
  "key41": "NSxrLFq7HoJCYQuwGPFkfTH1GVmBWDAkMca6gUKUqhBnttwk8UT4bh3NfgRBTDtodxvSvz5QVoaiA2padXM8CXD"
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
