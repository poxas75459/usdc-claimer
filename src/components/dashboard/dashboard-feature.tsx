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
    "3XLNV9Z1usAA2Ve9xurYuUjXFCVTSfLhS9YKy1ofAvbb5v3LAwwUWMkyvKzyKA1T1ZXazajjbMGreZWFxynAhjnp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58roaSv7aij7N4WFKMiQw4RRrUWfqVARQJGrmnheo519bqn6bZs6FG82goPiWK6c17Xovf3Yvs9Ak8nyxM5o3k53",
  "key1": "PvmmcKNZgecUhV7U8C9PdDUt3EXk3eyLWgoESXG3Ec4aGzpqusXjCQ4uyBFTcYypAKNEVe99H9QcAhMi1Brvep4",
  "key2": "5B9oTNLmjG4LT7bkohaJuty52BC2Gpuwv4kFo775Q6LXbB8gzAREcbL56xjGzp5UUb112pVUATStijr3UKtjmJyr",
  "key3": "5vZxeBWre7apFzQ3NqWZYECQoex7uyLwK9c8fYmskw5VAhZH55mgiLgstXZ67qSGpGuEPCUhuNPbehNmKLeBmsMU",
  "key4": "3fF4N3S43JHMkwd79yhmoU9DsvtytNYWhehPU18pZKcGEPSNLjGmWBqxquEcJaUuxr2uBxGHDBwZZSYCck67HFha",
  "key5": "56Fh4yGJQgLe8fKiq6fyJo2pWeeK3KbFSQ2DLCAc5y1x2kBRBsF6jbwW7cPp6sJjxnKbhMmqmhDP8RHqgU88cR7P",
  "key6": "4DU47MXPHTMnjSurptHpR5tCpeswH2x4vVZjZjBTG5kQFBHdXj9sBQyW8iSKvf6uAxPCiC8ifnK4j6BnYpVYwgtZ",
  "key7": "4TAD2qFXcADM4MazBEACZRuPxknegD1r18nBmWWeBx93CB3emw7QxEyQmuNbvp1qKhPi6fMidRMJvmBHt3q5iZhT",
  "key8": "3FVJwe4EJSJaqR4FuHHsXjRppjAfi1U5iACUKWn2qxqeYzNCKkSiUP7KNebtyjHaQQsJJf3rK8EJweJoXw9cWwjc",
  "key9": "31WdgVkRp1BEUMRPEBVvBdQbxFjfjdzahjzcVmo6tLd8MwJjFuMaF7wCqERhNhosFK2LsTgPgKartnTkyVLwmdPR",
  "key10": "eZ8wNtrgDfVQCoS1P1giTTsYjTAy1MvARfbn8syVbcHTRgXkATjWd8u5E6gSYQNuAummaSaps293bx3HpoacF1q",
  "key11": "4VX2cz7ydNWqBN3hrZuTKsq9DAi9vP2vZfyZQS4b7Sbu7CXBzwCkq6RxhWyPWq3oH8Qw7EF6N98DpzUsqBQpcPt1",
  "key12": "3CoqYjGfGDA1nJYZora2YVKwALGpNKsyeoewMXv7Wrm2nDLEdnuBccSuFQK2KKiYt5vgZZSN1rwyussbmG58BZbq",
  "key13": "4YPapu7gQB3A1V4yDp32G6hs8mU7dUjj8cBk33P7GHQ6c8Hkskvnm2DGPxEmiKjT789p4PEiLWtCyuaGDUcm9BnV",
  "key14": "3AEYym28x8o1DaTDe6oMP8kFysnquCchKsY5LBWQAwPoS9SvbLJ9wr9Sv65EtW7ze11MYskXP3FpwJSj5zvQqBg7",
  "key15": "2xFuHsvTGFEu7yNUFvx77h6E4o8UCWyQbH3VcvihFz1Rs4pYV8ejWJ1zptEDPqdjhKXHp51xTPrMZbGxTqAr9xbE",
  "key16": "61t86Ajk4NfSDLUZ7wxk5PQSiZE6CkdCCtq4Sye5yVGnDQxZAYhZp17i1EgHGTmtdAUXTQXY9AnSqh234BiUd5vQ",
  "key17": "5r4ryh8nt6vp52oRF8awX2gQiNDkiLa56tLGeSWq6LD3i5F9y7tjxxE4GxZVqx8wYo665w28spUbpDbNcasQqfuf",
  "key18": "4EgJDKW39cNw8cuC7MkvGeHPY4gjkxEeBwwkoVzudgPjR8KRLC6WJLx4s4jJQnJZWjTvnLJ2irK6sxcfSnDUgAqg",
  "key19": "5okn54D7k2sdh17DoUxNTexTcY8fz234P34MeNcg83UKkpy2a9MzVsgk1Yxukg74WqqM22zLaPiZCK4F1hmLieW5",
  "key20": "64c65VEFVUs83pbgpE8QbEudpgUg6si4R3UuWdPR1EPvXuzfFdoCdFWSfLG9hKdwsKaUZ8cGqQsv1cdEHSYbtobH",
  "key21": "woiPBfgVMToYWbhYt4PC97bDt4Ehhp2CunBTv92WRbUoJNxTk7JkqKPv41RXQwtc9UdD8ju7nDiba33KfmGdDYV",
  "key22": "59D7iJjgXTCPX1GrytgRx3QHE4XPz5jJJrcazd3iefUvaTnN2vGwBqPuB7crTMQB719F6ft9NcyVCdHkpnMr2KSn",
  "key23": "2nrGnBRcQBDWbjUeDHmXYL9vSVBqZ8skmYfTwBa33JuqTc77qPPkjTUzQSUZqG8TBLc9RfqQRgChg6o3MxUQtfFz",
  "key24": "2ueFcDmbyMYF2LHQeKS6XifzztTPDda9PCcL2PAR12iXo732g2Mgef38eihfi7N4T8pj3MQvW2A3zkNKeEPSCPd5",
  "key25": "3WS1bAWKHbUJeEtxvvVe6pEG1jhQb2bsRCz88Tfzz8vVTBt98zUUmpCYZSs8vBAnHfW5kGGnrLwGeXxZc4VoeuBs",
  "key26": "3CgdJ1uWwPfUx1eJSy5zgjzZiB7PqoHwGTpmgRZTRa5rHrr36ovP6fhi5QN9PDVR6FH3nu2VN1oXF2cB794vJgSQ",
  "key27": "4rMrEyh3zvemp688CtJamKRD8hJrmJM3aiyTRewrUHFmLcqeuFk2DUNdLe8vfpWpV4kL4PjHY1KDxBbbAsSDiJyB",
  "key28": "4KTte5RYrMkbGNQTPPnwhZmxa8icyM8kZCBek5NffZqyL7jajiAMg1FoeK213J3B56bQ9VkBLccnJsJLweoHZ9V2",
  "key29": "66jroo7bdBiqgAyTN9Py74jQL7iR6rdw8g7UitQLiBizkJUpUpjncPYQ5YL5XFrRtX5eEMwmchSnbL3w4ZLm5DMT",
  "key30": "4jL4F3oLXMecdUGvE1CauK7g4ajdCVYUSxdTPev2BhWFLC2drYka7m5KZnoZqAGF614m26TAHrroSzKLypZ8yLe2",
  "key31": "6sfukp9Eyf5tvGpuCaMT3psbek9vMeyuB5mswLAgBNjeAhYStFzmjHaqdzzHGYNffkQFTvcH6d1m4APm167WNit",
  "key32": "jDH721f6yxE7Ruf6HnbdK2q65zw221ZCX6gbmHejMCPQwyDFngUEQQEtj2fJF7uwV2pqnFiJ1TrZDCQAQAFn7vV",
  "key33": "3oLH74eUzsbhYSfYFvnMnTc7EnLe6xYz6VWEvsuRh2n9TDLE7sZgsaoXxzPbHwcPRVJPbkohKctMgoAMPuYHAGP1",
  "key34": "5aSfP5mhELujfeYdYKTQ2myVYivFJqNySrv9KG1J4QGvSLAZcWG1qJvEPc7kEtzUEQGzAV1U2AncfchNrN2Tv8a2",
  "key35": "22EJxKoS4NABW7WZYKrCvJ1V1CeQZEoj3DJHnFNv4ewZ7qDf5AF6E2vyFEJ3PDkZQ1RJxoxTPGE3BKon6sBn6ruE",
  "key36": "5nD9VdT2hDD1DXwGVtahUs7s58ooDdmLJxqjLTq7p14TUh9Jjnv9x6y5dUpa2rizqiHagcXjjjVRZnELcp5Vu6Xi",
  "key37": "3Hbmw4UKZxKAkRSjb4LyUBbzxoLqWJdz7zjoLbzNd9sLZwn41YSfSnZwnixYp8Hegd9T5p1aaBrJ6nQkCrgbNQB6",
  "key38": "pL8hS1DqZiEZ6xH7nWor8YTiJVEKpEyPUxbzGBWZQV4zktWDvY4PSCTdR7QZnHh6ajGXWdXd2m5SkAUxU7Z95Fk",
  "key39": "XkKxcW5oHXknjut2FBw8WsKbp41aoJCA6YR3oAeArPk8E8B2HyLCaKHewo4jQ1zQrt6KojNkCJaX15TkPJiSMvU",
  "key40": "5h2uEESmw4eG3nifa73J9cNRnjLWGj8SUVqrUCN5a182BhdHbPPcraLNmAZXXuRvwVRzJWXdKowPBy1wLEVVP6Rt",
  "key41": "2ufyveUu4LmzSPKNje9CpFUCZFTLvSe8E4QaZ91WKZLiAYCvkFMan75r5YxkS42nfPdGtwFoKLpEMcaKJSkDJ9iu"
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
