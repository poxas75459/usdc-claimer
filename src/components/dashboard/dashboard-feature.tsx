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
    "3thcK7ASrnX9A5WVza3GnGa2HSHTcMRn8sQvif3s2B1AD6kZK62i9a5SkkzAXLJFBnvyuMNybSW1MMRLBZcngUB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58xDnDobihBA4EpbpPDUiv9cSFUAscBsmuejDfP4eMVVzi6VRLggqhuQ2vLxJiCpm2CqZxY1Mg7nE8KtnXjTJ8MA",
  "key1": "3KC5aPs1jqbGJY8DWSZVn5boQQS5E1qvunHUxFKWw1SCoFFcTezFZaxr7sdxXWDgpzXLLCfdiEcNcKz5X891PZDJ",
  "key2": "2nQXb5qe8guYMxS9Un85txtxk2aQJHvHVu3TjhayVhPyTxcJiaSeYf687vXiVeyT7GDMezFvL3nGyR2YfHQNcK2m",
  "key3": "3MhfePxdJsnNFkVVSdx9LwTzHjYCNXDM6Hifnz7oPbWhRRRrUoj9CPYujZonqWb6RjsbXVWHLsNjYfNE5FazoqRQ",
  "key4": "mVjAopJVqH15pn88FKDgvfNGg75RVGbMi2ZcdwXU4RfRJczoqY1C5UCzyApW6B34FsQx9GCf91tGtmkYS3kVYWF",
  "key5": "52bLjmZvmCPePcoBweYspZVuhcPvm6C4yBHi6HUKTBzndyjHL8EjBPYbEw8HxL9X4D7ihCJDqJ3T2iddqXJuxWXQ",
  "key6": "2Jwbe3vZfNonyxFbjiNoThDHuGfyV2n77Vyvt4vBAg25KMJRR8yeVtPsayC3NmZohFcsK2AXxspQczDL97TDPxPu",
  "key7": "4J7jTACQniMLgwSkRe47U4uKeebyGtAJRJaS7WzPkNKR6dgVpRyM5bLvtoYokdMKNg2ozQrRztMhRSX46CQfmXtS",
  "key8": "51VcGtRHDDBPuURske3L3XVfZSULvdvyxyUPoou4ab2geTzC7GysPMTuLCgDm6a2RqqU75tvsFZhGNQUAxj82EUX",
  "key9": "4z4nnVrQve99ThsJaASVg5MYPzwTeswgEmqtNeMaAxiFk47AQa7UhTXn1Ge3puhDCqSfcUt3MBmXqDkH5zu3NdUd",
  "key10": "5HYjRtfnMtc7CLVop6AXBWHC3rHX9f2m7ahXjFAR6J52miXgDrMC2YEi5k1AZyiy4Uxa5DFBACnG4bj4LJL9KDvr",
  "key11": "59SggaVTTjeesmzurzt18QXQDYh1Azdv2s5vRMWnD9T6exrLMA5SVbSCaZHxzbPaQD4Ne2UCeTiAFgcDJRqBRrDw",
  "key12": "5Sz88oT28eBZ19Gn28iKZk7NGtsqobHeeZX6iTSqyWiHeeY5aVL4NR2Fdrud8UgjVDw2Fdw5tjVAU8EqyoqUcU6",
  "key13": "5ZeiaWgbxGCar2Tpt17B3gcdMP1osHPM4bsX16GgZ8MSTWEFTVY4DNHDzeGdk7nEFe7rkL5haTpXghxjSRHfR2pX",
  "key14": "zH3xzcHTjX1V648nEmy9cqpae6WZsv7bPPuuBtggQyVbwjWF3kDdNpRqTxnifpVLnKUTdQdwcxDN13mqVBYpNf7",
  "key15": "2mQ6wntzqt12AFT4UCkVXDcHji34XWSPxaPDca54soS89J1dTE1kw6T819BFEkynziFYVp2Pe62EieLSXchUtqPc",
  "key16": "3gZpsyVefokpp2qSQFkR43KpBa6eKV7qxPgRgpY8t3tLYVXa8g5Cmf3fLgSYRUKrdimuh3VsrWHQNwoLJNbGaz7j",
  "key17": "4oCe3ojX8KKSZWfbpzE3P2rAjGvRLhPm51FDro3Y4r2oLvfsh4ydRnx2u7svqeC1zjFjoPQ5D83oZ22GdEdHPC1w",
  "key18": "4bSMWyYGMoD83oWu22uWPcTonCFqhEKw6pW8gmnKZa8EkuPVzQSiL7S8GfMFireqfr2GootHsVMHvWyt9LvRkjq4",
  "key19": "2RRR21EA1DASShrxYWJjrPEWwzYp2uMc91RYyXiSAiDwgoaXLcM26jexZcEomJYtSAgyKszEp9x8kW14UNdJE5ze",
  "key20": "fHJyKqGzZPRFTArcM8zhiGsNZpySZSzYmZ5SCBH3gNX6TyDvZJykiU9LjXEdom8DBmb3yCUV6w9KuzPeBCJofQN",
  "key21": "2JEQGz2ELeJjtWbn75efR1PD9kttkp6voso7B4g5B1apLev7jpppFfRnccB2C4bgEptHsfpRpF71qNJZDqQ851wU",
  "key22": "2U5E5C3nLbjT3ZVHmvSY7TThkeuvoa34Z4KpB3oRTawPhGpzjfKAfnSka1xrzf8hVvwrfmB2jwWYA3jM5cJhR3nz",
  "key23": "bxpWzWuAx88EssVUW5CBhyVUgipwdjw7oviPaPi8oFZsXeh9hzNLWoWEXozZgpmrHURhi7yPUiAeYCrogvV994F",
  "key24": "2GGiKZQ3hxp92PUVbUjsxKwuL92Dow1qswjGesieaPxBm5FWhdJ86M8UNdyaXmzwovSgeQ6gLvEjw2t7zohjTJHL",
  "key25": "3L9ymERQcvVxu52oKm1X9khcEK2zvyohqTQnbB46EDBP2KkQKUi2Qtr2KWgVGwXcWmmy3teFVZyywwKT3ii5eFkC",
  "key26": "47FbwrD6wXLXrngKDysmPrmBi1Q2RMNPNuaPto8mtGtwmcvGju6GxSs3apTpoz7aT8yjJWrxQRA1coKtvCMV4Ysf",
  "key27": "2qZwJA6rvsa5xA1oojV345womUFSy58bNGiWCiyFfjbU4a3xjqD9yC4Fovd32fi4TUF77W5oKdfHym29ZWfUhneU",
  "key28": "sZpqrMC7fmcKC8GvRWnkMDs7FR9u9iwECUrdC4udVWpE8NaYFv8b1K37JFy4kZkxGoS8JKXP6vfnHVWrLP5TeCr",
  "key29": "2ECMrnArDsuHAZE6P7d2YYMGEuKBeyLyPCCxKXGy8sJ3cFfEqBcKMzDzBXAYxXscitB3YukS1sSdRtBdx6kzhHEF",
  "key30": "H1KqWKVL8fVJWST7y2RNjxKo3nMUZ8FZzaXVwkPut5FpZtgQNX2YkD8PBpd3TPMHcp5z2szRd1aAjmDSWLv1Sbi",
  "key31": "2txJ9Y6q393kuXqxyur74ZttqiJ6xBFBVsotntVoe1mexUn6XT4GRmZ9K6on47UprfLqQqBJ3nrfptHdirCiiUMK",
  "key32": "5p4dRDCc2fPG2FYPUPRFKUSKzm6DMffSW8mwGS8PUdTp2czerV4eW3qLMnvAb1VC824kMb2w9Z99jijGsbdpVqSk",
  "key33": "31gs4v6x91FcoYXPSWhzpdxjWjMK951EvbYCdjmN6qeWL3thnQuzvgvUb6FThD9ef7PFP7gkoPAZKu4u7pzAcHsT",
  "key34": "2yJCdJUD8Hy9TfBP126vJmKTXcy62X35jDPtcP8yJ6peeJa8PV8c4WUKDYkNYiVnRwM69FxbApaKcJBjwK8x3NqD",
  "key35": "5ReBJ8aovgZPDEPmwQs98av7ZVSTBC9Jux3Ncnq3X1Ng7BXZ89n14sBFvT5Lg2adB6Mgcx2eD5FZGjD4iJirr3tA",
  "key36": "2h62FK1QEwbrKQPQhjimLBq8r7nFBscsefhMDPByFfX2pWKWz64p3b466Wf5UgGra6Zcni5zrwdiQKPdwvLtpUpw",
  "key37": "2HM9fAoes3upmDJ72viGT1gnNGu8Ae1NnsZx5FiJkE4d13HgoMEPJQ6T6TFSbFZCDx3ddX8kip2zXtzreipi2D8M",
  "key38": "5d1Gy1mUSekLUhffVFT4BGSv99LiisuHKPXEG9Fe9D2xsqxe1e5FJNPBhhuFuTjhPPa2uepr7tdZMgFvPFtTuVrd",
  "key39": "4jRCBtfCWcmGkRC1mqoENjzxo5eZZTcKjn18NskejZRN63uSax2tq6oZ9friYF7qZnnvJeRJ26nqRf2CWitL4Ygy",
  "key40": "5QApM6mHcBMhmggHKgqeAEaF92dVJtoXZyDDihVCpDLaoLiKzrYH3CT3Hrz28mbDwmDaXFApuvPrfvdM1sxrtrXQ",
  "key41": "4WBDUMnsN4mF1j8emW6ofFoeLFfqV6Mq7oYC5nj7FJpkcpTTLejXHcXuYbiTc6bP3YPNwaVR51k7XC6dfcTNKGwa",
  "key42": "2Qc1kXAJpAd3e3wPCiZM625ZqXEsJi7ZtKvWRq6PrgYhjcguYhbzYLEvAsoN8PcbpxfWHAAypw9koXXPrsq4zese",
  "key43": "Uz57mXWMQ4KBmtJSQFhD4TpwiQXbJH8ewrBxmCCWY9noSxYQ1f6nRSaXTLa65YgJvbjZwLaxTBYpxvpSyVpDtEy",
  "key44": "4mSSecig8awaWNCvYAbpJ5cusf6EvY9KKgCWePrJJTDzsn8EJqRHiXKMd45JbinN9WjZyhRZ163R4yrDAJ8bbWnj",
  "key45": "5WZx8PHTRAAYPpfY61DnJLAxrqcgFdewJ5D4C2Ff4mpfmDXoJ1MkakhYvzmiDc3Cq7ZqzVNqJrRVRgPvuMiLpEZY",
  "key46": "5RDfQqvbvEwyaxxEaFLrjx9WzA1E7VqvdR6xkLqpavYEsHbkHRp2XBgvSvWmL1DqTD1GgwjaRRTMfZssefrimJWX",
  "key47": "5DyjTvS7iMbQ2rU4fci2WWQfVs1ZjaeoZgFzyR8ykXqi1Lwnm85FvErRsrbpL6mEwAUKddrdGxodNQ91cLuw2B17",
  "key48": "3VrixGzLcdU5nkSbiPHicJP67reT649Ew944iHwEmX35eatSg7DvYcWXT5wqRLWH1KNMBCWqEYhUjn3BzFWjaSdF"
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
