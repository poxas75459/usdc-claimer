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
    "4AErbpZukCiBkuJgAqVvt64evwW5GavCgpLzFfFUQdtg6gJVDtvpL7iGNjS9huSLL3Tcq9QXJA7AQAo87sT3TRwv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TAS12M3cH1dSAgjPM4bSBpZVqCkYhynG14dEAEMAqsMY1tk5Y9dieYFfxLu6Bj6hEspCu3wx5AZx79kCD8UtoBt",
  "key1": "2VL5jaweTcmmZaJvfQqt1tWJ7NxUmLdBdYCk7Dbpn49YZuJgmMbXN8mrLznMGabRmyK1KnELw29M98apQnimR1VB",
  "key2": "2Umqgad8Cx7iBAQVn2DHh8i2W1qwPBXBetTsHsgQUzLBrniPMUyYerSjfhZczJrkVBwLySmKsofZgFhwfvZ74vid",
  "key3": "XJ2TSmbhJ8mLESESejwjQk9RhoWHpE1DadfV57riKJ6fD9k4QC3PGihyX7h6dr2TtGk3DLV1gLPYMaDsuSXHYhb",
  "key4": "3MgPGyjSjJuDKPzYxgLFfFJi2qWhGL8PaPHNPcSasUQrja8m5jweQjej1jKTaQ8cofsDihYQC9Wur3pQAdTJbCHs",
  "key5": "4wU4tsZ8rrcwvSrLYNQ3szZqyunP2SBa1HwMvDxaY5RUjBjFNHotRMcXpBx6bYBwsTtqcWaCDEiRF8bhYa35x9o4",
  "key6": "65vGQvtY3HDBmBKeaZMMXeStnxzu9X9FBEBNw5SUCSc4bz83treVJB61FVQZWMWXX6rtenUxt7EJd4VtjfbtTDCD",
  "key7": "5pNj28E4SaL3nR1wYvzE5LxxWCtpDAPAGms6BZtor5FdakSCqu3hNaA1cUM9yxdiXh3Jwd4Lz24EN7s5pJWb7CJ2",
  "key8": "3cKTEQLvBQXFPbBYRb9VB8cGus3prDNjVpA5Ja84rDHcPjcA5YZ2vnz8BE41ihT3jm4Fyzq7oW6mfPr7tbqA1xQa",
  "key9": "XZYCojQhnPR3HJgkk2vJj8msLxt5876UzarvhTAgjsgZZEesgFd5XSNu19H2dyaaEboxzRW8WNcNN8bpJcwVMhc",
  "key10": "5DkqfDCRx7ntaS3tidGmvW1RnefWqSozLh6PizgN6Y2U65cYhf8zTrfsMWf3rLKhJaVprUGCvmJnLozyup1o7edX",
  "key11": "5k7Rg44xpWVKy3wyGh27mKGGtBnuPcPkakZLFpZsouAQt3vb81FMADXTkmBYZB8Nygpqc4WcikA3a3HJR7yv5HTN",
  "key12": "5zCsQwRtts4MiGCzzMFGLn5QN4MvgQj3vYE1JcXY4AsxrohRgKpwk414n5oqtkxMvBt1FSpPuXnCqbVRPpnZkusf",
  "key13": "3bsADoMCJZGGzUKx4HmbJU7sNGzGrGsiNM3uMhedMZhj7u6RqhrhFEaM4JxPdVZajfoaRRSH56Zx8tk7x9SYDqzy",
  "key14": "25674wV1DVLh9N67NiMPKBdkkvwmfJTnSBpa9zyS7xKpU9j7oida4sdR9s8UWXsSnJiiDMENhRBkLgaQPF2VUn2Y",
  "key15": "3vK6j4DBYcq7tLJr4dbkNpoNFS8Qb8weD8iypESkengzKBfC9p9G91e42zJEk2HatU1SPUgZcPRHU3wSYBm1wAUj",
  "key16": "2dy9FTEFZQHMiZ57msw3XpNssddSoc1zqTKckataf1aLpZF9kaii4L81p7JbTRyWcsH3RYMLnWtF9iWDNNpuu9Df",
  "key17": "5aV2pJX99ypD5zcBBVRzYMtuwjiSp7zquPbTD1mbuJu6iZqLf7ARvddC3EeDQTrW3XsYYZHNgN89QidzNtketnwg",
  "key18": "2QTzYR3tsWuqQbCkTqumEUEwKLcFWcu1URBXwPW1khTrkJ9b7xaCiprSuY1GuzNxkgbfxbrVnR5c1EFjJkMP49V5",
  "key19": "5eBokp6tvYEsSDBuRRPqTAiaE84AJsmE8XxMRPLbhKTyGjU8NvH54DHEP7Vwku3WuHRtBkSMticKCumFjVqUwkpU",
  "key20": "5i7LQPswdVnHvsEdRbVyL7vHbYT5JNpKhcakUTWNB1LXLQxdjmgy2QavtMzBN1rShsWJJHEBmN3AiH4VXdFNk5CZ",
  "key21": "5YbRFGA6dJEfEu3aQ2ssBvy8xeYfCyXqSi8SWeZmbNdmnXvHc8QXLdsJDmWWmkbsCoqiUz1Cs4NWGNRGPhpYsrYS",
  "key22": "28DzPMsjVJ4cTXZHidCFC16G2CzWP74kmvnjYQtqsVV5bLfZKjTUjqbRDZQGoSs4EPMvNmR7LWNoKxhjfq7R8bck",
  "key23": "3rX2LPty6ZNZXk2uYhHqCH4VVjVjUJAc7RoYUFo8jq4oUuDXbicpnXUJ1uWoVpoeyjXQr8nsrb3BrDNLGHMmZ7at",
  "key24": "5uEjp1Xce7DSKFECny2w2jwNefBPnys98vEEYZdWx2CDP92NQ5MzSwFDgPWBf5zdnbCNonBXZnF6bGpVLyLQbo9c",
  "key25": "2JEQ19M7FSoCTaMMGMR1MaCmdTCU2fFEZfZ6N8i5GAyPuumJBLGEg8VfSRNY4m3gJDL5G5tWWWFi4hGBhVKP7sKi",
  "key26": "92nSRSMLfdAsSWRsiKNu9EEr6bWHPq4ZZF6cQrgmuiZk8HkjbvQk2BKNHemdfwMEWtMJJCp8KrGx4eVb3tWJRbW",
  "key27": "sG9UQMrrU25D3z4egAyCvBnrT8q2r6vs5r1y5h812H41PfaotDM5soP7KZ9CHB3Z7a2ZhCyiKpiqMgXBvQJREYr",
  "key28": "2WmaXfvAi5yezjCgRKn2PKXozRihCnyuUpTi3TQ6ZecagzpJEJXJr7ceHRHEpyeWazkWtRenDBcCPwc3HUPhKJSw",
  "key29": "3A467mfSMFLasUoQk1NJFPdurjtWVE883E6MwWHuu1Ta5GxEETFx7kohSNQfWVcYbFCeVGUz3jnjcHJSWvxJnTPU",
  "key30": "4WHnU1jdpBrrzNBp6CcFk9KUhgGW2kFBCavSCvJMuK9oeX4o7bUQnYq2CqfDEanUms6dpma5WcNkcHJQ9nNWA81s",
  "key31": "4Wash4E53C6rJrpf3THis1oWpp6DCDrQecz4YreSELyCLtttCTjGN8EAimLcSCwdsyZsj7j8skFTmhN1Afmiu69t",
  "key32": "54dGYXgM7o2k1wr6hANRQUr8GcPoXG7zLGsChHwufpafqZVeJFZmKko6Qqm2nEwJpdpTsRUgo5YhEAcwdgn6c3WA",
  "key33": "5q11VxXnHLEY5tGx7bXpo8eaG56nAZKyZizhuQQHnJdmTodC7kA63yEm8V1cTyGWaT14NvVShmgzmRJ1qbTfwhyd",
  "key34": "3zm2f9Q4iYQVhPtfzwGUi6ch2Ki9r1tUGGnvs5d93pMFunoARWd1qDfEsGb2pPTpJwfRq9peLW1fw5rzLRqdDT13",
  "key35": "234U39un5HggnHCAPND3ZNLd7zy8FMdJDTizUbhiYph7x2BU2zzfFyLutbx66TLrrZECMTT5Qcg6QrVqfZdNsHrB",
  "key36": "ogdRvnnbAoqhz1yfSgXV1GQCMQkeNESP6FKYdhUxcjfceFteCTYyQqXCS53fX8y34zwwNxFwY7UiTBfH6azLpaY",
  "key37": "2HGwmuL7DqNU2chh2q2TRLNsh2Rn4ionbUEooPh5BNCLyzgDiBjH54uGSKHQxTrPApVrkzD15QshGb9ZYY4poHkc",
  "key38": "3BFc5VFkVL5vbmgjuHcgSBwtf4GHSp1WUJxpJZGjW8tAB7kjmfYUJbbDCvQ183chJiff76TsV4a7JxL2KgmhqdHJ",
  "key39": "2DJa7FNruPMiMqHGFtSvHV2kuJXyFPxv1o8MvsgYTdAN7eQ2AWc4kv5gWDf8bqMY5qZ1QJZH3YTrhrCnAzYXaDHg",
  "key40": "5ro1XWXrwtCQG1Qx4ygAda4okkvRaTgcXeGxoFpBLa5Eaxpyi1zDkurX9b1vF6MqiT4VW8XxZ4ZuAAdTZfqim84b",
  "key41": "3MNf42rgfvb8mjcS2ZvmAViXiANYbbsrnDHCHeoeoS7zDQvT4Ta45UU9NDAfzKFWcuxthv5PdNdnKnL2eXJDUget",
  "key42": "2foiggReUdyiAbnk5tWLvYttpVVeesGVmX29WkzBy84M7piz1bFAv2iuBJ5cmGNr312cwBFL3pJPXmarfYWJCvti",
  "key43": "PvG9rhymFjdTZPgR2EWmcCKQV2ozjNu6WnDqVMApgDrrcccfQ7c5xyAiAsdW5MPKn1CEqDJVTBZ1StKcqRtHP8F",
  "key44": "2v4K2CYtDdKbXoVbT9JuSqJHTpitm7uRF9kF1KVofBruSgyzd8mCVB3YhdNXv2kw1kcYMEgtibchTDnTXaHA4XxP",
  "key45": "22sxifQGfLx3h4JTUEKryWt35wVYSXckktVH6Vk6cdz28Z4u4gmU7RTdiyBXV7GfXRoG49ZVpRBTDeLsWhfDotxK",
  "key46": "2d6iduSANAJ4eXwBYufV8n8ULpRm7uBz8e1GYEL2zsAKjchfhcribNC6ebgzYbaDCKsSDGfYF7UDaEt7KCF2wrir",
  "key47": "3HFiAKoRpnFFvb9uaDu3drAWKK5xtxeYEQ4SWLGjhjYnHFWqs9xQku3QQ6eR3iE3weTHW9HF6AYNnch2CWmBrSTX"
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
