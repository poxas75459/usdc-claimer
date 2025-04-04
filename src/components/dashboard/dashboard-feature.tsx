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
    "aXSQraXeJCQzrBmSLkn26MzTyWyb6163A9Zy8xg6jh6otoWSQPzXgqLVgFqGyGLTnZ9jFone9cZ9xDt5vWsyv1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33yyCQSFqAWC3nh11i9Juzb3jzYB4TPZJir2qTpnJB9KiBLhPFimtNdJGoChxJBDNA47QutNAemKG97Kz3YGo555",
  "key1": "4sfjQ14amMmqRv8rCE4fitpxpADhQ4hfU6egtHteH2D29A6D9ebL5v7EXGLNi1eJHHYSFS5Yt1jJzLhtzBLdEiA9",
  "key2": "445E69mVBZcHa6baG4UJp582ZpF8mJebfpnZyPBRdN7JLBUDXXqDyAv3QdE98fDjW42D1cTdR2RgJMTREw5s5azx",
  "key3": "5x9kQsPMH7dqyeXQWRhRrkfxT2an1qVGZkoVVGkvjPph34hbKLwLk2pGSgFhCgsWzuctLkKpsmMJXvkDGThHmiZP",
  "key4": "2vJWGsUuNZgMe3YG3enx4nkkKRsGzcemmE9BFwzdcSKaiXWQYc8ZdayoaURa4gVFxWTpZCsRCaqPaSKvUemHCtcZ",
  "key5": "4NRgn4UNytQxL9T2mXZoYxsE2kHx9r2YBsg2v3uQHKF3JT75EU8MQJqZZpXwTHuxRqhfh1XVB8AcqyJXtTghvDSJ",
  "key6": "2TtvEe7EjoFANHBgCRQcM9ez7QFs2ML7BpSvQkk7S73Le5eGq1HaB2cqM6dKSQKerdyHUNVnsuJSyZZP6fzKnYeH",
  "key7": "5rz48PeYRwDkhyw2vY4yRDwCSQs39MmLqirD9VqRjz1VgBH7oEd2dzLbuW1VFzA1Ua141GoF2acMZ1yWJNW3GDRY",
  "key8": "5CNZj1Zq7csmjQjMkTXaaXRCtCSQNi9oss4GkdGG8KgRPCDSQgZZLFu56S7BAghPcUGzv4SqawUqJM75bP15ZtNU",
  "key9": "3t6XKSrDzZoJnxzygo8hLBrcnLHPxA9EWkCPLcytYg5gwnVXUmPPZ3T1V9wuPsNsFg4yLbsFkyxoeSFGtXPg5UFw",
  "key10": "RSUQ6aeQ8aTvtKm8KkWa3EGWWF2xX1VtHr7jCov73eDU6vPUvZkWmqBPzcmWbezSoNoYhsA1cyc1Qe1Pf6sAQus",
  "key11": "5GqwGZYMBmbNoRH634iQDK3cgDnSK7hMgscpMRZXHmhsaKfMznc1FGV3cRTCYn5FcbsXsPkC7jACz8hG6BKceDDA",
  "key12": "8Lcnz8yb2GP312w5f2jjY8wGQbdWoyw1fjA1G9LHZb7Umm2edNNrHd79aT9Qi375exQ9EQkHWfB193ARrSQCJpE",
  "key13": "8m7tSvuKB6YfiAEQiQY8rbNMtkNAjScHbbouYhzb4Sbiv7keZL87d6mtXwSFSPtaZWuTFocNSThgP5ETkxgNMop",
  "key14": "2T4kiR7yb7FtkECh45r4T7Xt6ejuiBa7Nrc8R1tLXEvbmszDvTkfKLtCpFxK51gwn3R3NK41Ub2FujjUcV87YNmp",
  "key15": "T4WdBbcPwB6sEYPXHsji55Gk9Wgr6R9FQdWdibmXCxvZzV8jR7LdYEa21BqaCkVv2WRDCNuuHfV9tHBxBoy1EpA",
  "key16": "2DdywVDk6suQJx1nLFyp81aKr8HqE7P5zUTA7jmz3JyAAzQmoocp2YNDTuFiYiKFoSDU9xiCvYMV6EX3hN9ZcvL2",
  "key17": "3WkP52Nb5gTQ6wSyUsbVL7iYDAae1P8AvrdjC4YMyMgDwrSmSCoBMKiRChL8Rj5KN4YcLDqipGGxrhEdHtreefin",
  "key18": "5BBUwmXCAMh5n5zuJkcRBAbBDTQvAPD4zofhzxMC91wfo3SSQMXt9ur7BoFPzEwtZALNQfYBTaUaR2KGTWUnZ6iL",
  "key19": "4UKbtZexEAYbNkefdyQxkDvpd3qQAbgEAASVD9Uhtyzk6kYuukGqzLUHzx2fENMUhUYyWvgZQqnxfWWXoQBh9PzQ",
  "key20": "5YYEgPoeusUTyX5iN5mYRAGZj7RiYyLZ9vsWCLLoTt7faHM3FAULstbdZxzX121K951n1neYABp9jCU2wsVc88j6",
  "key21": "4ggRLbJrTAyhsiWF3PCgjaeHcnaBSkHdgU7UT2STw4g5WQ99KB6M65UtQAuYvtS2vDyW8zzoizgctcMzmHsNzPQ4",
  "key22": "57eBXobnKyoqks1qJqki9L1aqzNSWdTiXZRa5wtSULUGTaJ1jxNaU4KDwuzrzgcCoXB687mvuwpLhc3mjYSStt73",
  "key23": "2ME4aEdrnaoWi594b89pj8ejf9zHMJv9rSnGg2UVJAXwG3CxQEXx7m8RhD1YdrtSozj5YD2qioBbGtxSeda4znGv",
  "key24": "3FSsy5VUadLRebXxSK3KjyxNy2Ueq8PnLoBm3V8TXc8yjbzkqfDMC2qrGSZyDNZXRYPx9UyYWfwAbGvrJxnXRmVn",
  "key25": "qWvmx9V6cPLu4U4yfqCaVCwTM2j48tmdF4c87Z3fnxC9FvcJEVkDqLzzW1GZVKweRMNnMkAFQDhcXNjNovy7QyK",
  "key26": "35ARinM3ydgjnDUosnebrM4og2U8xwd79FDrqAw34YB998Sr4Zfa5QJxV6RHkgEgX5hDemyD2oiXezHonmtUUBYJ",
  "key27": "3ZKzDtDbdcsPqRbDCY2ckmPDXe55YZyyU2q96KQQwL9Ry7sPeJfgX9AVvk92ftmpSeFChLvzj9Ru6gfwYtnu83Wz",
  "key28": "3Twkmb4xMj8CTHB5pq4GWty58PU3uXZBxbAZwB9wYVPhHhMR25THiKPf6M53CWDqoLFWXdgt2ZskP35GR3TnChrg",
  "key29": "2iDumFHikmzFJYj7tVoXKowNQDgLVC14iiYfLS6tb3syRrJghzFTN5Huf1hSVkjcLNox1qCYL7PapkLRy3QWekBv",
  "key30": "3VwHbTSTY2u6i54jzx1ytd2Mdp9R1aazfev6UGL1RZevRBfe1ijjQowR4TwfDsYMRBvHw7Sqj2mKTnZMKkJaushR",
  "key31": "4WLuMrbD7zdAg6xHWY8y3dfWfrK9heNuQ9v1Qr9TUyPFpwQ3fPQhEk6pAgCychm4VhQSEKtXcfzxgjiQSuN3A8oi",
  "key32": "2t5HiEuQb9zmWA4eFoWrrfQmoEdYxGxoHZe9A9x2m4tBNFEd6kKr1buJX82S4vVrxjAz7aP8Qm8mCw1nEF17txvH",
  "key33": "2bgkBU5SEJE5iLxvNK8qbVuJC2jmmKJybYcDoJ2yuMjY9A1EUuhKGJYFoGtusbYXcipf5vrs5apNSYeZ8rVx3JYT",
  "key34": "Y5X6uKmMJdUsxTNTwSpKLrckvsu1h2DUWLJm38DRqCSxJqfPCpUNBRM9WZqFKSxqaaoPoreSPAdUNcfuQJipGwQ",
  "key35": "2cw9JEoebZ54mrHqUjMLxM3944NH6fzvH9vvYamp8n4FRedKPd2bw957nVsxeFamiWKSa5Cpd5xTDeM3cHC3zh5Z",
  "key36": "3KeKm62k5KyLG1N4PHs3biyu6sazPZgBVWxx8kcCq5qWgqJENsjrfV3zV2D3WEeDNau4dfxL9bPPhiQCqaBVh5f3",
  "key37": "4YDVAB5g5CDRPas9piViuaxENsG3aY5uLthPpSCZZ4S2rY9QQ6ZFzKjJZe8oLnrAqbZonfg2wMjp8A94geKkz9mL",
  "key38": "2FcDG16mRxbeUM87bckhYCucqpwnCpvAc3EkwtDu5WcUW54q56fe19Y8RcMrKQwHw5enWMjHpqrEJjX3jo2YpTqe",
  "key39": "2xVsYPMzmGxQqMHswcebeimQPR4V8f183dAM7AUwbrJAZFtw3d7MQ4HEMDrr1Ud8bMgFemf1kkVb5sR2ukmGzntD",
  "key40": "4ho5z84yQcYnaz4QSJcbkbZQFzhM1Fuwq8sMAjQpmJ9xbtDdnh3jUTgp3heT7bqL3wDDoEmgJUZ8dVos1CFS3uZd",
  "key41": "42wEKG66pcynQHF7rBt7gTbnjk4oMtGnhxyfXXWPYPzc4Sqf443RcbMsV5kp7GGXfG56m1SSu5L1cAAvDgTDRMfx",
  "key42": "4H1vKemT6vy4nykufgs6Vs5xQ9RkD6yxgn4ms6meWkx7t2WiuF62mSVdrymqChTESdfnZC5jaKVdsV1Wg9euDzTK",
  "key43": "61wLPAQuq94h85fLcAgHbAZUkZjYNxhHEa58rr5TE5RyFg8FBFobCAviop6gRym1nUZevUhttEevyKHzhcqt9Shy",
  "key44": "29gSkSRt4eMpSrAjMpPUMqupETEbr9tT9eMVUH59HkiqMQWnGpGzLiQYdiV1U6M6HBuhvjc3LDnDgmkGj6bxvDrU",
  "key45": "5V69otoijyYx1R6P7EyZq97p5zRpZk84wFJJUwyprAcNo6PijRn7yvoJLMZGYyRsqU7MnAANY1dQuxCQnbSGYu5X",
  "key46": "2tpM9ETNYtS77MndXgN6VWHTUbnbHSSAKKHP37wToMCJEmJUJ7dgqBuS2dSH5E5WuUTiJPxoqdPSXkuq5BNHhNFZ",
  "key47": "3hicVHMJY6NHN6naPugsS9csVbtimPPW1JuPMw7wpkbRCZdwAsSmnZJ9V1Zvq9g95rsn7C77mWGMCp8wRbbS3yJQ",
  "key48": "3B6mL8J1GnzWUV8DYqR9SGTsSZdE1qkAT72dYjCfcDZcrzJdjjPpLKBJcvQXjDhduHqmXEX1vRkctbytppNfzRQ1"
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
