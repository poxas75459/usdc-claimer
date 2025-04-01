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
    "4uySxNFZdfiCZkMDYAFGAAx34A7NtDjVskbN5kxgaBzNx5EAsbGReVZcW2gaWqKBP3b1nXCB55B9HYDkVTRRPBNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GoDZk3uVtEA4WsW164aE3J36pF1Smq2uWa2h5r4PJMJsdZQfQYTek7us2cRF7Gs8fBD3x2yMyAd4Bn3oUZo9hER",
  "key1": "63QhcfKphkvEpsU5GYY3YLmvLoHAs3GG5v5JAePinLySYeRVhUfB53XWdax96GaafHK6x5eShcgnVapQAuU87j6T",
  "key2": "2HKcmKPM9fbDnXq8pg5gNEzKRQvMKpQ9Scq2b1Dxjqpmo1BEQyenGXTnrAgsm3bZmaFsSp6PtxLc4pmGHu67imFa",
  "key3": "kKjjUHTnFRNNm7WdWBxk6h9wo89wFbTGiNGFswjETPF5GEWSGXiJvJhNJAoPBt1mMzY7YUC5kZtrGnavhVzYUcY",
  "key4": "3EFZqwqYzqU6Lcf1ZRSD6UXyoDpBTRLCPQsCvwHF8CSWSshdnRRZYjUbt9uGLi52APALRq9KyH67Qp6PcaKLuiLH",
  "key5": "fHSYiqPTpBqTZm19xgaj8yEUxjbxPZnDBWtDTUXEhQByV5pgo5Q6t4rdRiWySFVoYfbbfXwqCEn3isaKjSiYDkW",
  "key6": "ju5hm2PBLsD9qFj4MifemzVC3ivwR9StACifBWJ2WbvunE2CojCNnK12oo4N9emuNbGXTZH3nRLAu7U6TBcakr5",
  "key7": "3z1ZodXmjafGBwoYQmzt3YnPkyswR6k4y31jiT4mRHWLeXUdX67fpwngWPukskbDouZyuw5vDAT5g9pCJArXenQV",
  "key8": "5DkeoHJ3RTetJhJeeGbfuZycQrRgQYLXzU9w9x3Ee7brN8kGvC2246oBjaHHXtLpdTjiPXZb7y1dvXqiYPJKjkwD",
  "key9": "Zo5XsTrLEBZbBhL9mVTRkwpRPZXyP6yuCmCYtGG3qAJmf547GN7d2XN3tMbv2R3errCjaeMiN5hVs7VjTpdmnjK",
  "key10": "3oKNa3FfcDHCF5cMCbLUZZXJDp6aUqd1fGgh68eJqXuFADZGZ3jbjzgxt45PqvThGhiyS9tD6W4wmS1mdcvXsDnE",
  "key11": "DS9BYuG9djZs1PMtQhiE9MVc2CtsaehPPcfBfLm1wtSuqx7mNg4t6QJyKEhh5R28EXGKCjUssiZ6C5dXc1pUaTb",
  "key12": "3PVeZPiDQHGswvRrfDWEUJhJ51TktG2JvRWRFSB1wcfeHiQQiSMAtG9A9hipU8QdVxJDxnX1PzWSGKFKDHvi7FHZ",
  "key13": "SiHuvaS6sAcho1iHa31HcvoF2r2zHW1VgQhHbPXc7MUSttVMVgGapDMwyjXWtkQXqFh7s1mVptLDakMB94kGoAo",
  "key14": "3nfr5irsP4Qrt7QC7an5jerZrJHMjDmy9ZW7EYBM4BM1YpM3q2makoy6sB5C9xYprd3qLq9rYd2AEmqvMDp1Eroa",
  "key15": "rmc6oBVqvShpjBJ8gb61QDDxQeActC7HzpyxFgAFuyfhr5ZibmYsKFLBMKmM9j8C9quLyrdAQtNjqKZEqboEJ9o",
  "key16": "5kXrB7ZruQzRYar2KQED774pWEFM7HeR2mSatH3fwf4EAFSuqarE2iG5W3LLRjK8ufw9ph8u4mEUUYBUKhT1oZSY",
  "key17": "2zJCyN4BmRjGcPzfKTEqb7mu28EhDnavbfrEtN1oTcKe7cB2fe7cfePYydV4RGS9d1toQmdDxijd26WFfCbozSah",
  "key18": "5xGA6zzfhez4dEzfWvRT4dsugAktiYuYGzJ8P8XbQuxEupeX6EuiUwEpQR5zqNG9pi2m256U8Eac5dMk2AfJDJ6Q",
  "key19": "4TZbyQeZWMVuDVgugXJpBzA5psq2J4nb9zNoN5UFw81tNStP64F2BsTKA23NQktECzQVrVh2fTXUV893vP5kZY94",
  "key20": "2TxVmMzTr5vdHqdbqLZxvVaSsqmPHPxzYMVBXFUoDK9viBoZ2nzidcUYgMMJtLejUp3jhLHjATfn5CidRcFozz61",
  "key21": "5En3pfnKzFHAEbKwG355maFtSrfvajCCcAsvvrUYF9MS4xBF8wUDAZhDqfmBHR55wXzaeQQnRB8f2VgTrCYJ34XD",
  "key22": "4cH8sMugxcCXq77yjksjYcGiLVaVG4rk1NiBUpePy1cNxwzGa3KZ9sUbUUkttCd5Cn9wCWj6tN19MvWa7dSDAEpD",
  "key23": "5ev9w2awMha1TxAwd8cdNx65qUPwkidnrLmkvVHYAMxjJCYqkDSm1n97Zch262U22dwYddgra5yivWb7r1rEt442",
  "key24": "5jN5MB1eQqyjyvK6gmYdtFFtQuV6Wy12mTUBsgi3rjagFT8b7zKDf9zmhqQQJGLfWwVHWx8egnfKxYasTaxX25ti",
  "key25": "3pjTVnvKCF4qWFX38PtZJDJLR4W2Zi3WKRJ3T1dcxtyKBFesPN5S19hCzMsYHWnxCoe1MegKdc7mC4UpVJR9XfdW",
  "key26": "2BV7rucdwn6HCbziTr54fb3pdp5nCGbJuGeLDB5JwaxYjWNFxqgYFUwrMHi3W6Xdxkf65uz4ehJrrbdLRsdf1ytU",
  "key27": "55oCT4qCfd1ASxEmeLipRFkGJwLkNBZeNTjkd86RNGFzLzLmkTnTkaDSKbW4ZoiNRnFCsYNMWC8KGg5oWJW3VQTK",
  "key28": "53SAeZQpZiYtFWYRegoN1QSPieG6jm3DKmMQTmsCE21NFwtuc3iK1RTrRew18gUMxRThwnABCMuNzqneg8jEzF5M",
  "key29": "5NbWgghrC6B9FHV1AFbQP5nPH7qjNcRddSwbsBBurgpUoQ2YbWzSqH9wJAWRXfyA4rWAL3kXvskDBvngxJdj6cqB",
  "key30": "JDvF3rQg6odni5Gyh7pPUEY7syH2MT8zfJvPgyje9brAadDt9ZCdKyzpC1t8SLne5SE1gR297wmLPLZkJMxKrC6",
  "key31": "4mMyWKHpQomYmhGHixPaEJtFoPsPWmriZKsJRFdUrZjGt6YttT8iwUEWcqUEh1vwChWUsb4rbXfDKLHLktpnA7U6",
  "key32": "4Qri6MZpS7XW5vs6wR7w5akQZWYchxUDhN6CUJ7uUN9ua6HRufWx1XpoQ3r237t9K16NDjJw56XNJq56g82kTA5K",
  "key33": "36H2mupn52PpsUTAADZtbPfMytkztQVm8j1cWH1QeJZBH7M753zTUu6CsceTCJzFjck5cYNoyqBuWpfx5N4UZAUA",
  "key34": "354LT6DA9rFceTJtMXdBica4nG81h9edmspcnUbXvcsai552Y7Bg9ZTUsijkYUfGMw1m6A4qLUC4D9WHSSG7KB8S",
  "key35": "NGCitehwphTak53xyHGWBpQd4UetyX2pPtXTXoaMVZwiLUaUgCdFSve4F3jkEiTJovGDE3EUeWbvtt6Sxru9qPG",
  "key36": "2H4FBvuhsEC9N45tnxV3XynyS5J4rRd9hFpFiqKogTfDUfUbAZKFJNCS4uJ2Zf9r9kh5U7hzTYw2oU4YbxHPZ4Jp",
  "key37": "32sMDWyGDdh7CFQ1gk7X8sFcApjvr9VUuqPZT9J2jazpsrUadkP1vtKcuRi2xT3wCveJiDZuZPXUss4uEn3ctHq3",
  "key38": "3BCpG8WNm5UCMNGLfa5ghq1mqBmAiGG5vPNNmPoF4V4q8SxF16nXJo16ApRwtfaqGJnXeNPbi5EFTgmo4uHvdao6",
  "key39": "417kukhKA1K9FHE69YTN3oeFLyqjtb1oLHNcbEiyMEJBcXdCANY8Q3crBmzpb7h3A4dtt7DUCTQwJHyk7t5N5i1r",
  "key40": "3BmVdq8oNriDXEKY6uX36iLg6P5hmJeuRZXtqRR8KqCLpPEo3SK6nP4vvVL2cGo6Rvhq4KNoGDD6bxuxGfMgYWfx",
  "key41": "bJ2UaGXYCskRKZLupFyrUx5DEquFRxXaDqN6MhLdwxdq1vDaFgPdR7btLikxvAecGpVspJ1ajbfmtaJaoCS8MwB",
  "key42": "TULwY6Ed7SjoQa7s46MKqCWT4uJi2yc7GL2GgFv2EUady7Q1nki6W3x8JPEZJw6rXQiuu5QHHxwKEiGwnBuhpQt",
  "key43": "4brFZcRPvdqJCrsD1zs3YG2r2oSKos67TRQuVdMLYewVuXR8EBtV8DByvZRoFYGm9i8Gg9dT3oXnBW3wqSxCfXvs",
  "key44": "5JMNajPeWwUM8V7nsxbH9VAx3hC5qX9Bef6aT7YX7dPR3x9A2dQRWkD2TJASGcoxSPaYsetepMEog3LfQ7gnqpSV",
  "key45": "42nyT4oEiEnKLkivnZMd8tw2sYzT7sSQa4R1kMLHQg7YRaTFFGTHcGRsSWBdcG8KAKjKmtKavewkCvZHny37dkwK",
  "key46": "2UmGBgajGviVkU9z8efmwk7t2yH1fiYYf9W9NegAT2Vv2H8wro4pyPBxfrVE8CWaLX8KWkjugt4iZU1YSPBZ99Gx",
  "key47": "MH2B42m5UEESMEmyeGKD6qbJymeBkbNyU3HEpTKNXcnkzGSJH5TQjEwnu3jzvPKnsfd22SiFTYhBBYUjRaxm3vD",
  "key48": "25HXahxiqFR2EmM8fdA43fsQJuJmeBN6g4Psym3VG5saPoMiBe1h8ZvNGE5DDujzgSHausCKEKHKejt4knNYxNnr"
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
