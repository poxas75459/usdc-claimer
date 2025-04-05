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
    "631CvaNzn6VdoVqgBSncgNnhmF1GttTHgHBBen5feN2kHtFfoqDXhGTQ1znFifu45XwmUopJfiFMArtE6J3b4v4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "whMtgNFXEdnQT3c3EebEmDfhh9hRTvqmPzeYR3pTPujfW6YhwdofhRnMm2HMeFFqidHW1kprVzxc5khXrsQ6gLa",
  "key1": "3JmoQtEcaMRgcQocFQmmvJ7jccQEAoYhoh2dTBtsjAodWHuK1CjuqwPxGQnGJJTjreGdEfCRVEuqfZErWiQc3Nkj",
  "key2": "2Gpkcks72raM2uTVkpeMZCU6WiDi1EQsU4XAJ7cTRyPG9M3rcDDcydLMcCoq2w3hTEiHSfdqTGR69L2jJzYj1xS9",
  "key3": "2A7E8j41BSdYo7mHeSWJCGCYjtbphiDYWXUsN7EiGP4jTGKvXe2VvDNkKTNBNar6rpNTJYb5j4JbMVC2BySeXWcH",
  "key4": "4hZhsmxxdLAiSJqDAr1rgwnKy7ANQWfJvXEP6Yfexm8Wc1MCwZHLTcrLSYVGRdZzpPYxuZuKjqxaFBnECq6zgzmN",
  "key5": "23XHwRbexwqLywoZ1rHGEjfd3sYk5w65zdnMVDfquwrZcCSa24o9ksjfEtdkjCJ5WRyzLrUaSUAbuNyWtLitFcQH",
  "key6": "TeiWPunMpPb3yLNWsRBm2TVMnmkTDcPAmLBbhVitGiiYMZsdfX3CwEwtxwtoT82xx1RSnsRApacjUWp21e2HSfA",
  "key7": "2v3APir7GKxg7LCwxoBjx7zGitUQ72eKKKAeTaUZ2jBUswe268KqkXxZshtWnuiFw13NwTk9whC547vyYDxPeGEg",
  "key8": "3rPvdcvCJMhooCB6fg5Hopg519fGBgFFN6qR8tw4Vcy51cydsEHvuHRypU5qqDEfsry5aL4FieVY26Ntp3FPzJrD",
  "key9": "4mkogs4kuvKuBUT4LbmoM5K2tKKrfucJJAia5neJ4R6TwDbdH96PyYyCY7abrbG6VwYjva3FsQ7EEEU4ogwsXRM4",
  "key10": "4qCtfbiUCTdhAE9KoU7KDV7FKAf6XFRnc3fWgvhCTXUbXmngsxq3zWW4xiVh4iobYtwdLxEMD8ruxLpJn7tsgbFW",
  "key11": "3cbn6ZHZ2L5JS7jywrnBoKr12hftULaYHMWxy8J5BEU44izPKMhtiknA3m86Pmsus9uC6J6bRWEzTDzdTXuT18a5",
  "key12": "rAPdcGibKcBXt4uRGj27y7TVt7nkE1ymKNgWHHVPbTE1TaMmjTv9rKfQdGuarqbFzwiuWwttPeg9QJpr6SMJkD4",
  "key13": "ts1c8qY96fHtL17kkqTLgugSyGmzi1bce5vUi8wLVaAaBuKj4eDG3MYYKKw1bW1fTnVbxLxeLxeKcWBZH7uroBN",
  "key14": "4BfWxdpZf6NQUYNJqyonHMEcbre6SyB2SANiJToKZhhTsYkvHoVQJZBmwXhWnQjKsN13JawWcZoxJPeYAgffrfab",
  "key15": "cZzNfjQZsVHwus3sGupa9dBB1aEHwY8q1juD1cPrsXJhYvHagbDiKB2uC6ypfFA85uGLDqau55gfpWP9Us1KAwn",
  "key16": "46pStn8DYe3Exzk9Tn2mtJkwW8YjwdoHgiGsKfvbkLQotFJWv91Zyy2LvVBrZ3VGKEML1yE1sPkcLot8eSRPecZH",
  "key17": "4V3nbDSB11C8atZJxdo3hSxqE8aeFbDYf5qXXoLwCpYogwbeUHoETWMbNFhkPX9erGkB4zdNwoDQkqwLDRv89tjy",
  "key18": "59vDtLFTABdTv6yk3BjA8tvsphxhSXMSCREaYBPkeEuWpKJEFapmpdb5qFHXW6QfsrneAsCxRHHdmqkSrSVdePvD",
  "key19": "4xdVsiwTumyMT7L1ebKaocJgpDrkBSNG2Eenuh7q4SUkarq3LpupGQTJDopkxg9wfr9YoXNU3SZehqdf3R3cJ3PL",
  "key20": "2nej7Hm7GJ79vyJxBKyaDEooMugybxZvo1aEKWTQ25h4FoYyGbFSwC7jfPgEiQpeTCbuefXX7zS67wZMV3y5SGSW",
  "key21": "5gsHfwstUw3t6KMy8pMcT3tWqtpCtuMY96n9MtSyQmXfpnuha9TeKR325ghX7c8FzSxF2mRyTBwBCKgeTwgsapj2",
  "key22": "2DL8V55MQtCf48hzUNsG1PMip2LJPxdv99CHFStP5UYadn8FvgxBev3ZdYNkndBrFCPeASDU2LmHMRPX7rw2jAeA",
  "key23": "5kH7TSXc8HXcqS4oCzBgxpGwsF7RH5heTnqdJqYeBW5KPZnwMkMEG3PstxaKWeRph8Y6AscHLcajzggmdGPsBqjn",
  "key24": "3MNJjnXFyZTCBVvfDVZK96pKxdYcVWii7RrnEM2pyPfi5ENCBwmd1wNbSDydN6YAfTDDDe2oqXpNvXWtfSozesQV",
  "key25": "3MpPiupJpUAwGnXXATAbFZNmuLSeM7sMB6Zxf31uUzy5wapo9okzVAUtk9fLjTHxdptGRLSfLzoox8Z6jS27sc1a",
  "key26": "4aMb8Ax7zwNcMvpdNV4Fe4ubsjGyk36FByFGusC1Ybqyt3H4MvvbJY8rLRq6VLZ1fM2eq8wLAHtVDej1FL3TmjhQ",
  "key27": "42xsAzqRoxbALt91yF87W1demUquwaedSFKTCLbFvZ2vFDLUo4GfVAQ3DhtXLX657rwckpk3JpaaCEwKDbLyMjfL",
  "key28": "3LVQ7GcB3YejDbyxgrSZKB4CGk39g4i8qrn5hTsSzHAZVSvYSRbjWU4ncgUPqWwC7LqHcmWDwym7e4CftVttJ5JV",
  "key29": "2LdjzX4WwG2Wwnx1NffAgURYuzsp9Jn6wF49eXYSN9vB2Zw3vVP5yFs2xkabBi9BFr7ytiZee8YWidKkCdctsrZW",
  "key30": "iJ7bsCHKQm55XoJ6QJQG4MiBxd1AaNVfcM9VZb61Kwzp61aZS4hxoU5rREAaoJghk8B3WJoaKHRuJtnJhAw1QbM",
  "key31": "3RJtjXRFDV2HqRQ1BhGGwyWYrtgWKjFjostbaSTihwJUbtNgoyfhBCE3jDCFY3dADXG4Y7nEMG688DGAGNBEwJix",
  "key32": "5CNar1H8VjmGjTeZwrxFKdZcaKm3ZDrkiVE2p29p1EyTbqTLyTnymNigcCaT1DfPMDsGL3rbTSRmrbBzQ7coF3ne",
  "key33": "5eQMKffLgsxD9NAX71D2FQw9DBargoMpn4irr1ZjP3w3wmiACCnhQZHYTd88ubxRDKDNQNx1QosPKJgTT21zJuvM",
  "key34": "3aE5gqPveL1NBhk4Stc4JqNYxBLaRD2z9v1MjbJq48h7YLCdds6cjvbnP2Y1MXepnmn3LbhPMLD7so6XzvC9sLaD",
  "key35": "3SE2FeepuRQXuMGgFwx1ydxS4FTjSaVzoBq8Th4RMwdyYRLyvFk5KBpD4rKiAQocNid2AVxDmXYmg9CG9HfAcDek",
  "key36": "2TdkAMrVJdUQyZp315yicY38xNihonKyHaZTVH8eb1WU2Gtoboc31bdbFW7F582ML1wZx1uNNa1nxkMWdu5gZCuM",
  "key37": "WN4uZgBdqHq4sVLb23rK5eK47xNjJHjDnfjRJpM5VqdA3cqKupMAXGLm4BB6v8GwQY8oEuMQmsiznGMKsx2FWvb",
  "key38": "3SLEW1vybBqVAYMXEcSQMdBUSsn6EAKuHArTvmCdPc5R2vjtv5B8yNjMPMBcX8YpJyWef4tgfVDGidQA1mBXWGqT",
  "key39": "31AX8P6e4CTumJ9NhmPkKfzAnEhS59L5B1U44887UeRADTBJ8hdQVseBXPSwDNMGwDs2KpwWMC9DTM87T4m1iWpw",
  "key40": "2VzMStjy52wCTivJNerAAv9yyTeenwHPxxuRdumz1pyNEeaayWbLjajXjAqdhrnT1GKhRyrmhrkc1WG9oDMDX9Gm",
  "key41": "3iVT6rrmBJL3yuPYAiRbsqHsj52DWeUVJyYsmc6kEui5rcECsM1RbKcdk1ZJoujXhmHd2P8fDqMbp5VEA6zZiuP",
  "key42": "48sXYeeHFyvYgcj7v3veP73tmxtgnWb4vng6sWZsTteY2iL6AmgMXmBR4cZJ1ZVSfiB3BA3QSeNzcfSoZSKHiVyM"
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
