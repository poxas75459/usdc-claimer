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
    "4x3E9XB1APSPrvusvb3oSE8KRHMq8LmrqW6RcECoT5ioqeJ62xaYgMFzkKKUuQ6YuMhkBWATqafYHRQGMqByGRR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n6U1g5HHfFWsXyhVEC49u1PbDCPYVTDtgZE5uvNKdDcCdhr55qPbhMZWMwERi2WHHms8CK7iHCA8UDqYkMwUVKY",
  "key1": "4bdT73qSJThz2pgZZVYggMNqHcb4gYhuHxojXkhef9QBiGCBwSQEbhh521TskMHbEkmVaaooU23KjCrwunLYue29",
  "key2": "58ztsdiQqbb3Kafxf3xpg8c8zwC4vH7hTBKtVUBGQgQc7SnHmHyBspwpvacFv46c46EL1qiBpnZqknWJDkBSRPTz",
  "key3": "2d5D4VY2w7NuwML9EHrMp1wtTcbktmQfN9vsZHdUjMaZwQEkFBiDa2AvCa2HzK3s6mBoun5vGBzmqEN8gsH5pFV8",
  "key4": "2Wq2q9kSJSEE8sx2Z8H6nqEhUGj26sTTayFYNDPZTi3Go7e2efLu1Nownx2pQdzzfRqTr9ZUN5K8nt8oBSfyJM2B",
  "key5": "4GaFdUbNmvnuqHH7Cmy1u357ihDj7y6x3LWaUH6iaimprUAAvwzypPezF533Rm4vSm9kFkYh8hXvf8xCniimwGbc",
  "key6": "2UtTP6ctHCMJEdQHL5DHmuqfsVEVn4nkeLjukobFf9PHEDzdHLidfgwLcW3PBY5u7kyWqdMigpusSZQxgGT18B4K",
  "key7": "47ibVgPH8x4s4bNxTngCHjExWbTPzQq1Srdni5JfpDVFs8a3GSyRdiKmh5SQzXKsxiGGx3bpWd3yt9p9W5BULA6R",
  "key8": "5MUA3vhtC3UqaGu5Nt4jjPzz4Ewc6Gthkaw3NpdZM3zbk2rgHXiAS6LW28gPwdA4WECAxLBaRH4svoeoqSpV3VCx",
  "key9": "3RsiDTAKEi982eCoLSBdeZN7MunZjZTnFxVWy5gtztnCayj19c79iAWHkrzCCwzqYsiLiNuRrxWNgY4ZafV32oqa",
  "key10": "2VjoNVBSU5vGf4Q5RnKwgxxipM3T5njBBxXhbYeA4ppqHTdeMPziphSkZggUTLGjACvzSg1vneWTqV4Ts1jBXiFC",
  "key11": "2WC8FzH8vmbr3HSNBbpQYpKNm3XdMzc5G6KZmn35yQeijTHYWZi1nzJjm6t11Rx2tYd3RrLRdUqQ1GJUP2CCzcVg",
  "key12": "23dCtuci2ZGKj5gbb16MmzZMUatfnkYaeehTaTZXzuYycR4uffDx33VuJcetwM54AT3WXnmLMGdB5TwcmdV4gyLS",
  "key13": "VYCwcngUhZj5qreBffpKFdvo9hVZypch7YGNS3we59WrSJzU55DJfZ8R2Xe1NgMYbUK5uBNkRxaAwmec2sWqxWt",
  "key14": "5UGedZnzSCBgQEWQqLyCZr1MWCmU7qBN9ErBmJMKdeiaosQYHhyfupnFPb3qJ9XYfFzosFgkxhBzdchJcnowJshE",
  "key15": "Uwq2DBsbenU48yksWVi8pAuiES51UTUAC3QkCDq7opiwEMHk1QxRgDaiu3PUyEmaJxS1qkoyS7dhapGiGH6GWyN",
  "key16": "5AA6HGYcSAtycK7NXKx9K1Sv6gtPjWZHbTiyRGCruZY9bx6N2ezgchFq5YdTd2pab2z4ZMMQmiTNendA8UfBUSRs",
  "key17": "hC31tcs1DV3ab94w6oVT7RDnn7jcRNypMHeeGzzGHHFAnnD48tLv23j2EW5UtHZHuMge3wkj6yVtPMhocUduNDG",
  "key18": "fLrymrc26CSwHRPLypwwqNweRSvR6zm2JrCF1TA7gAiszxQazFUpLXwn2UvqQ81W5zzgCyRkPjHkmBj3gbxGMcf",
  "key19": "4YrjGzsfcmA3rUQxWeUSRhxFRLRAsnsGKXbM1m3zmqYKZNanoXsDGAiPaMDQAjCA7v7KS3Xf5D7YehfPUXfko9td",
  "key20": "3gCgrrg9foa3zCs4KSvQ6eDtGWh3XN5qq7GzQuRchoq8HrFwt85fpvXuDvQZLpEyfQBP4qnstNeWLQ1QiZjB1jWU",
  "key21": "8tZZuPbWFRWCq9EgBCZ9UTPWW53xtsH1rcsWUHaK1m2PYFJEFQ16UtEPUDYqdcEXzqd71Bdt2T9xg6qJex9bcAw",
  "key22": "2R4EcvDHtzCGd48SEsCWFYtFGt7jv8LZ3nprwVKa4kPK7Qpoekow4fpFJpC1pwqqDmgDnENddq4v8FCp7g3L3LiQ",
  "key23": "56deH5QJ5wkMbeEkkktzwcEyUSZRE1VWZtnVRKuJjgZ4jyrhrYSEDswUhDE64K44XCqPSEc6NYpdiELYr6AiPBZo",
  "key24": "utFo9LrmYnHWdTD2mE3aVNJ8gmhfFD2H2dmsakskbugMrLQ1Ccd3kz4mnSQGmPqR96W23kWVSfyfqNiFyV6HAb6",
  "key25": "7syZLiQm3PuxmUJEnxkNs4A7kdMbirVJ6rrbz1hdAAABLWV4HQuuV73fsEYCbPcJC4FA5rCi6MwoihfYEYHjBTN",
  "key26": "LSx9VQ1iLmgmkvyCsJk4CdKsbmx7MLzmk9Zq4U7c7uAvp6WA8RYB79Mu5sbSvEJ51rufTP3uYi5JV8ooLiXpRyg",
  "key27": "3cQmHdt2ER1w2yjaozMi8PhXQkKLDc2zQ8LLVHKR1N2cJ829gJcboWn1rnERB4P6F4fZXU6RPteeKEvBX4rm3n8w",
  "key28": "5GZRbXXE4VXQJQa5w1K2FQgNRrnGv9ofWosn2wwi18Y3nba66pgLomYVkTFdePvsCbwVJ4HHSvbeDJxLmLkydobA",
  "key29": "2EZ6qoXwXCBRYPASnyxFSjWPNeJN6UHJHrLRZShsCeTitx1uWHC6DPeAnGNuvxqfCACw8YvXUvj3HoVdjcG16fcG",
  "key30": "45SBcZ9BAHaj5M34i9waKpBbPD7JzMueEwVrPGGuCmoBgR9CDbiQtKAtJS79tvdUsrH21sYcQtYzeSKLtRbw1RSD",
  "key31": "tFgpZN6pLFKz9MESoqV8Y7XFGmxBpCwMK29BqV54PpLGxht6ETcdsRvx2r8d9Qv6xf7JXHaR3bvCvYxjX63Gprq",
  "key32": "3en7j4CKMTg6Lw11ncXq23ABN1fReAgxYwGJtwqG8Ra7rtAJY5LZxSpqfps5jPFNZtTHj27YPVx7Rt2UTZsa6puZ",
  "key33": "5oRHwHF9pLqHSkwf5ZvMyzAHYNfqome7iUPk4qij6FC27474WjfBrNGUt6rvLZpNWzwVf8UY48MarNguAihu8Xbj",
  "key34": "N8ErT26aAGGgprBcoAXYMTcK79rP3MhetS1X4u3Yy7HTByU1woLCPDYMKWr48hb1CWFbLCJD5uMKrG4mn4GaXz9",
  "key35": "48eL9cxt4ZoBdbBa2dfyZ4vdPDT8gUxUx32zxEH1NR93Py9dDfjF3PvpMC6G4LtkTW6oV2bEAjDJUssZqZJLfRbg",
  "key36": "3ZruFHQZ5UCKHNAKptkrGpvkJWv1EnQJVGbSDeKjPFgbGBPHx84peBjebiUQvaPPgsKy2tN7zA8DAiChNvLE9QnJ",
  "key37": "387Aqoe9QxDLSwtuD8Lt4S9uSUW5b37cYPq4FnAP4n1vgBDQX9MhvPzN3arSCzQyFy4kLyAjmW2NqGU9pf2YJHqo"
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
