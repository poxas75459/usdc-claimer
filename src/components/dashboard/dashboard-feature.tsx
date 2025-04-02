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
    "3ZdJbYcbCnrChYQ3JmN47TBQViiSY2pYYCFtKtinCXHvW2Up5nEJnxdBcvuWgaic6uE6yKnRN5xFnqnbYzs9e9wf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52H9oCxicb8RopeJXdP3zoAAfNH6DbEtDi4Vdfnx2XDosWR5kAdYTfXTqcYz2jGQs1gSMVatZTi12o4A4Uq6zAMW",
  "key1": "5GvJmz7djEVc6s2CFrCp4pRaLfnMvPG3LtUxieY9iX66e23YXb4bALiyXEyhxsumydCNj2DnAREtsgX3BzWronE1",
  "key2": "PZKQkMchoSiBko8bwap37vRZiwRy9PwxhX9fga44oP6oM41p4DAMphwon7KGuH73eAGrbvQLHRocYBDa4KetxZQ",
  "key3": "HMZeqm4EBe1CejSpok6Us1sX5pTCBwrxHYSTLKDyqETha2gzrM7Dxx66Wr6RWbiJM7AvCZfaKebeHRjAPWF4Moz",
  "key4": "4W8SccC2E7MUrjzK3wuxXRrXPHdwaFKMUKtNcXAG1eQULfzpibv1UEkCrp5AsN1LnY4hHyMKQ85Kso6JyhAGNtbD",
  "key5": "4PBJCicLWfoTRRaH4ZsvYx54zpFvoRQKKtE4QrjsWoV71Dxfr5ZjhaVnyTDcrMfqhfVq1bkwyi4hJ94MUvYbtwvS",
  "key6": "Zu8eHb4gcpoezssUFGA3WQz3ri8dREEuRmtkoqpMtK34tZcx8bwmVZWu6MebHbDhGd19zk5x8RbaKyDNXcaiHjn",
  "key7": "3QZ6kMHxFfEdGPRy8kux3yXEZoPwcoECLsMfrZdGZtbZCNHNMbDMkgd3hnUuM61XRRLjcaNoKzjbEyo4Ptz9tJz7",
  "key8": "4H6JtXFbtpgCwvyY7TyG1p7xEgyUYM31wVaTefGNchLa6XhpWnFfNQosEU5pmRiLnRtFWmBTLg3s4uanCwobvt6v",
  "key9": "4rWWSRukqm9b3tAjBiM3CfqFToHWQefpPHgj4LeqdCTzyT3JwgY2Tw5GTgFtWMiabpXy9TfENJ815tgcRbCVjxX9",
  "key10": "2Fm7xxbCvgB7nP6ZF6CzJgXXvGSEnNds5mPB9XNQ2z23w559D6ctPgLxXGPq8Hm7Qv6qwWDzEiichwnkZtsEJzMy",
  "key11": "3ranPuUZRtaUP84QaEQt9UgRLvNfvPJLSDebJFQtHEaRrKwdoXgKSPXbRBYZVywn7BFzzXehxvvJPCdbC3AXaD7D",
  "key12": "79o3vzEV9EdUj9Mr2XH5zjesfywv958pnM9qPDW8iyMVTPdPBAWS1BQkPRfpTCbtwA5wGTUcrrWCMQrnAmejqUK",
  "key13": "372PFdSnyYHr1ELRQAF8Bxqe8kqepsqb8jYkABwQKaj8AdksY3q4ynAoVSTnUjiLGcTEEeZcsS5n3BoYjsZiFoef",
  "key14": "5yQxkYRSQ7GakG3xFJQthP1JWnEBPTZHCnaB7QQjSbZUnj8bybxCHQTuViHHTvguvsfDiSTAdNHYtAkrLMwdEKLq",
  "key15": "4tFMso3RK3hdP2Dv5R3XLg7NvZABhbRdUwk8QezUQjiAxmPzij84N7Ub3K919sbM8KKmDvTcgbArkQLdk24R5WZa",
  "key16": "Y6LQE3uTBQFHJFtAi5mZ3KPKVGKmEmHonDov7mbSpWn2kopG9Hb7BsbMtQTBAdBGhMb1kPbJsuuDbPEs1VCD4Zc",
  "key17": "47AtHk4ySBkNEKFLXs11VQ6Sun335bVk6XQFzjQxc5zRzB6jowaMhH8vykQke5PtCiUwucnyXcmchgKww46FfwV2",
  "key18": "3er6TpcwtkTZpWwK1B5d9kr2tYUBJV8JkaSjtgshV1AkkHvu1iHxHoNtNcTGGs7xZao5Q2AyNsiaf1AXdJjyPM2X",
  "key19": "2sxWyjTCy16ePqrZXLqzicZb3VxMDVQpQ2ZkbsC2to37fYBGP1mVqvATdshRR8r1XSEYaqpF3NYL52PmtJrbS56T",
  "key20": "TMyBRtABLvDDvhrZ3v8TkQtm6cgwfSFX7JMzjGCGMT5WF1HhevXrfg5cgh9zUWGgJ5itzLSYefiNnPjw9aCkSUV",
  "key21": "22xQXDidfik4kVwYoC19NuV7Vy23SbRei2Lf4Uja5AJxK437KhoERsgbnKSjvwEqyd74vBjkkhVy8DYZet4zfvhk",
  "key22": "2zutoY6PJyvpLVwV6CcwPeHRFmryZRZ64rhiMJHs8cQCfsw2EApWBnBGjituUFc7CG29d1PSRttzV8Z6q5N524AN",
  "key23": "2EakN1gNfhcTkdBx4eEhmPJRPGqqTnjRQdD9s2MaJV1Koz43zyYG1Serc95xMvrTE6V7UUftg1FmEBwYjPrRmZvC",
  "key24": "56Vu9WnhgHJKgcC4pusEJAeHkHY1ZK5fjetA1MyjYQgVEYVLeaLu2DzShyxRqSQgM9U7JjUWP4axSWVXce4p5kVw",
  "key25": "26ds1SKrasDzaZwvXCx2uYCpy5wvnKJ8funwAkKWhSntTPm889AyKBsdJaS8oeM6vdJxNUDGvG2LjNxuuH5DojVz",
  "key26": "3ba1g8XBrqnD56YZknv3BeHj6JMyM2iRXeQmnQG2dJQuv6YZ1qbRYcJ74rmjY8TENsbTo5ffeACGxg1sqkdA7Zmc",
  "key27": "ASGMcL29KsueMtZ79KmdpaTL8ECyjTfDbCZCTXFd5gr4RNXnDadF7WLAQW6A32DboNWaRx3Booc1b8yhFbs4Pf9",
  "key28": "3XoAhekbEryB5PNmicc72qge98fjPZMg4gzYWdEAoXibKswrme1jX85R5jms7vXSoiTEsCjSGJdwT5JzYiJG36Ka",
  "key29": "5HFvwnzJyD8tcrqEbiYXi7VNiu5D7iKcyqeWbvwZ2HgHscS4NAfZat3hDBPffdHd6FvpXND15tV65qnkSiZigEDv",
  "key30": "4J6onfhvh8v12htEoooax3w9SgvbrM2VvvG8GWSeUyNxd5kGtfZfNezFhApEg3PnBKPLuYCjdRuKm7vPxB4HHd5g",
  "key31": "4zVYGbPMNiGrppga6YUo7oCN2fwnJiiU4pm7TBMhYuavFh2RWQGmCbvPig12iCrocSTifi3Mia3KepVPWqAabDVy",
  "key32": "3Jd83aCLu5noSevcMKN32VDwUocCYRMZg7Vsd2bgVC4vve4QpHzQRVDb4y1UBR7Dx2dPgasJQutxqdCq24KSArEq",
  "key33": "2Rkr85yUg1C8w5pqKzciwVrJV9Syh4vvP7vrZ5guYZH2y8h54qjKoikUjHrcdGqvvc3QxSEwa6sXrYZwKr673RCR",
  "key34": "3ynAZnWvHerATVVyCLKq3X6TQ5uGePkDEUhcrG4WUCqCsJQiHG8GHhbjEP6sf28kxYmKQcVSdSUssJA3pKQTnXk",
  "key35": "4WKxK7FF3gfost8rukTfVHnUhpj58oE2Qkb4TpCDvR4TzS2Lsa2sTzkuNGe6BFMhTRxXoHxs8GBXZra8vkhmWSia",
  "key36": "2twoGqzaBZwCzZoWgxr5unxfFnhsQtdvvJwgC85EQ1QHPFoYAamZ8uw584aZi7hpMcAQ69Nr99LCGMEVbNamYDVV",
  "key37": "5QGcihrK6zwumTWmuryMtfzD5KiQAbugsrC11qB12KpNeGWviVkNcbKzXwRj3pcFDy874aMFcdZZeGGAj158Yeqc",
  "key38": "vw4CfgDxcbQ8fgvoZo9Ws1weBUgGVzCL3NCKoHBhHrvBb7eC4RVsFwfqS5JMBHwijxpZmefVyTMjw5mrdmoGGdp",
  "key39": "45uFPUoCEM1xVCCjsjRoNcMzZE7ZeA6XCc5FGcg1r71WDqAsC73dFtqdnvkbCWtNopx3qTCg663d8vgnKeAjqo6p",
  "key40": "3SChw6bH5o2kE9zH4yFWAy13nu6Zch1W29n5shjseHZv7BJ2hex2xMbdGS9TY7ZLB7ZydwEYwXwUnhGssb5xxEHU",
  "key41": "2DDSjD75FGk8TMT8wnk81uWmkBRGvSLcmhAHCUEtmmsNmiVkTFzdo56d5GWfNBpJgMfb8wchW856ymHzxb7VoW9e",
  "key42": "3DVxftnbp4FLHgLr5QrHNbjoiGY6m5F195dRDYkrDb2PAfKUq4yRyByYEUsXodxyibQ7kqqwyV9vB1JrzY7aNpQh",
  "key43": "37Dm51vtcX5vcRxhPVKKaMZxmAw5HVEss4XgzpSSjBr4YsRGCzJB1VkWPr916rNadQsr4eV8LyeaaN7ZQ16FASJj",
  "key44": "2nphuP5TfXjhpbH3T9fZai4CfXY8FahZoWPUucbFBkmNLyVZuQg2f8TSgHcpzfcSza9zyZJCa5uUk5qvGwStZ9V2",
  "key45": "cKg6j62DP9C3PGUVaruc2EZj9rdD6Keg2TN1TaJLWXR8avHT1TbiYcbXwyz7u7kQ4Gtvr3XfGBrbyw7DoBov28c",
  "key46": "Ubvec78EbRm8zA4Ft36FSnXdnQ1bwhnxJpsUBar42288mScxqKESeom8CTU9R2JakrFtHsyJp9BJmVTNJTVdcKv",
  "key47": "4RkeDy9wjV7CxF3yNJZWTHNEsv3sfjeayEYdwRraCbpedYpT8eAYiYuAUmz5MLHaFEV7ffndUdWLU2Wmkgd5bjtd",
  "key48": "2EP6VgrfJGEm7fDSnB5GAFuV2Gj8CzLVo3rT3Mvtxbq9EtJBxvxQr3uP4PC1LcyH7spvc7MxPk3zcQ5Jjspf88iX",
  "key49": "2SjNFf6YJ9AZPaTZxQfsbKjNB1QNzWAijSYyX9KkhMHjk5gbZVxPCQcsPHnqQKNRwN3Jp4rbzrs5xe6ooshdwk27"
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
