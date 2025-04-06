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
    "2Go76AMncHPZBEpRxH1mVsaS1zJYjC6Q7u1TsMcR7gKf8BxojrBqD2CSMdG4S5f3amVqaFpMzxyRpQXcrtPdZtmH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qih7iLY22EMzbQWf93xD6kQENZmQA7L53AkVKYgEsjF4qaU3QGuXGcbmxGGqb2Aez74aBqxecMxjJR8bZ6oAWsD",
  "key1": "2Xmh1AxRDAaA7z4HawR7Q2N4YkwEc8AGMd4Hf4en1mSzjCdgvasQ3V9eFHPvBiJvd7yH46wGdKiYKgZdm6L5r6sC",
  "key2": "3iyAE1pmk5NazXH2b9oyiTb7yGSv2Ja6Dzcnnjcc5k8RoTZw38zUvKm32ogNN5CnPdHnYw2NbohifmVmrhNJcScq",
  "key3": "5v6879iwD3EwWiT9zMFUuYXHd5Ez5AJEgw7yhqfjsSPd33KfMWGnqH49ZfhP5FTq2wrtNwkJ5oLVfpdiNPZi9f3j",
  "key4": "64SqKVLqzcxPSxqu8XKamq5VffBp6FK9sNmmbPUKCA8kSvT1tNjukntW4FcRHKxVa7BoPYFopGsTPLsbFjuLXL9U",
  "key5": "3nkhbdaFzXY4GbTdS8c3qvFG68KWbHs8rm2XYSf3KwrfnKQ6j8HwctraLQyH9zZb32hsUK7KoYwpwJE3LvDV5ghu",
  "key6": "4UXpGNZgh7NeF6Q2wgVrwZFUWVhd5uRr18pQ8ahBumMqZAUnpWS9oNeHy3dUXJM5rhoCbfWabynpCgzkTUmwREVH",
  "key7": "4n197qJsYtbdmrGc7jEu8LNhK3PTuNGyzEcEqaeUZetxGnGKwTHtGStW4jmzjdeG22ts9PSYBvUVVjLhBnRrfpqC",
  "key8": "7GqiiF7vjp1tSZaDVTh7HdikZHboTMz465CMeHPsWKCAkM3Jw3zEMn3y6uE1LBsdQbKTErqHKGaDw9XL4M22HGN",
  "key9": "3tbo2jx9AdqCihyjjx7q7hYwyLwSRw7f124ZCCM2k3cR3WBPX2tca78QKc3ULHyADaqM93i3SK21r87pKmsBRGSo",
  "key10": "QUR2uESTdhF5Mh9XkXJakCM4oGRsk3j5pp6LHoEqtiQhQpYwXRnY2e9MtrxwKW6PMGexXxYk2U1q1VvJivbS58N",
  "key11": "54Lu4FhTPv76BWgdtuVcqsjpjH3aAqe3h66J6sYniEsKHkBKmejqNSRhJqhCDf7heKzzkuDn5qbofEfnnoFGAMiR",
  "key12": "2cj6DAszeLbJyVAJPDsjoBaDiaZWyop35Fkn4DABTLyLJPPNFHutXoDgs2Uegqe8C7j3KT5M91oXWBjVNXKjM8H",
  "key13": "2L3vVBEqnbDAUNMPKfYZdb6LtVtoLXak9HeqvYQBXwS3Lx1vWC8EFRCMV5cTc5XALPWtFuM8fNUeztygxRNXqA3s",
  "key14": "2ks9x8q3fXpVyQ4QHoS8kYqJF2DdjZo2iMKFWJMtSBg7yU8xQdmjH2QfTS228LvjwSuGLhsnbfPUpcaTH5UX2nVu",
  "key15": "5rNhjLrvQgRGofgqMuNB5mS29PNgr3stYYtAVtQzG6ZUkxQpnGGDMgkPKpJJvajxgXN4JNtshKjbN4mtMoLeiNJE",
  "key16": "3vax2bYzNFtMyG7krDJHCgs5qVGS9bWPmzHhjbCP6C1Dsz1nKQU6Bn6bhk7izqvS6AUpx5mPXRLMfJiByx5Q1KLh",
  "key17": "qz2YEmEpM5Sf5Kd3Sftb3gwk3kqjG91ZtcLcVsZQtLTcR5BYVq2Q2QaqrdHdkCfiURyNfGFvKuC2ja1A6mEshp7",
  "key18": "3doDoBmGhkHc6vMJa6Pg9VKwKstGr5B7yPiXeZngdQuWApDGvfTh2AvhCvt9eRpsjGA3n11wyCvtqmXiq1TLbMyR",
  "key19": "2DpzkBGz6mRqHAdoMqxGwtfMikxbHabC5gaR2VUB6WeA4JBp8eVFdj84QvKWgC6N59DeubwCqexKrDtu3WmodmWq",
  "key20": "3WEXd4jyARvsx5ahv49biymFsDP8qyU6mb9HTTXdjRrVvrwwdp1exgGjZgfgujkPiaxCix6SebMLtvHHQyZr8qkS",
  "key21": "3qT9DgoybptzHWvJqE6ec6ZWoM5KxMuvQeTpuyLQ8qLq8AcWYiUhRpJ36pkot3GiqsjX5HhAyVryMnznyo9CL74N",
  "key22": "3jLmtUjdXeB36QrdLSjxCFQ33xTg2r6zaG5Zws1zCE4W7q4svqAAGg2eZvmu6oBLi6QB77dVDoyDs2bkpnToU8P2",
  "key23": "2DJbxD8FLf6Hp1iC9XSY5oqQXxNcwTEfAaVSgiyWakoZq4zFt8QpmeSJVJoF9wwgaFuy5LQjFoeEbFZSLjRWoLwu",
  "key24": "39GkJkD6wugyxjVGuHdwq9VbFwAYcpHZJ4bb2hyvuqNwNaxJVQn7XzWrEBQnZQre9EYPMazgfyVV3UkbQdbQbYG5",
  "key25": "EyNtcJZS44juRx6ycHvDnswsgSdU8qV4GG7GjneHyMpbhQg4Pqek21RX4wCMKcFqnNTCBzFkELfys7nDDWkZ7GA",
  "key26": "23jXqPa66QWK9K3DFoW5CGX2B4vnWJGnweUjjKb856zwotCttFjvfdMxg7Ym8GmatZCa7kU8wHrSjaErBMhzKn9W",
  "key27": "3SVP8s48pYM7GdGfMjkACmtpQorVKpfuyZJb6tbGspgDVGBxYBm9VmXG6UmnT8icWm3euyGMpfkNTZLcbVY6BDny",
  "key28": "UGm6nd5Rsr5hEnNuP1g88QKqtndPUuc2WFh6DS63kWUJpqzNxeTuZmKRaDmJoJDQ5wuEovqPMx58PVjQ9jcNkoV",
  "key29": "5BSsgD2JrSZ21y6SspJDATfnCQQ4uZSJ7jzZtM7VT3URGZpnxasoV6LZ8ZS7Z5vfks8WccgM226E23pU8a17g6qG",
  "key30": "5YoKaLeMR7ypZ3fDfF8QW4Y7LjFw4rGqZcPxTe26Sa6PVPGucLQxpTVyVSrEn9P1EvfThpd1o3oS2LWeUqLttsGV",
  "key31": "5Hgyhu9muAPfg4QtKXpaXkaLsA4k381Qwyu6HSurvaujykuee1KmcMBMt4fvX9w1piu32VpQ4QcxtSYy2PoC3YW2",
  "key32": "3T1TUCsWe6637vqnRiDLTByMGqCuLHEVhjAFm5ps8x7sTL9uxhkH93NMa6T827R8SeuM4wi4kkPX94CdXSxAw8sn",
  "key33": "MaV6eZjumTyFCFJf1eztebgi4MN6cji8v5XaogdbNshbcfKAZe6qqfWNfmDU3U78kSGZ48sLtSCG3EwkRqRZJqZ",
  "key34": "5e3UKdyLeun4iUZta6b82rnYtFZMLXqrve6TjmSWwKBgCTcnAKd9T4vEQHzx5Z8GF6djavt6kW4r3jRJp3UruTKM",
  "key35": "5FYMTEX4zhMGaJymjwvdzdE3ySXCNM86tLfLqRd9ZmNJmzp4ZdL7gjiBvXMJvn9ngpJVs9az5eZ4ui2kb4G8enk3",
  "key36": "ThbJkCHVusGCcvk9rZAJ1R7WVymW4FREe3JJqobdaaQhDeAjtwm87KTy5uJXEQoDvoLX43cEfJHQQhtu7K6pRKX",
  "key37": "3dv7jYvQsrCkD7ew1DRTuVeGXnTABmTNKJyXLerYgY3LYmg26uPXPAunSVWs6wtFHxeGwoCa1owksJdrRgBF7px3",
  "key38": "5dZePe4xwkKsHJJtFvVgz6UpESPU4ZiKLLQ11UivBgtP7bELnRVNu9RrCXWiodLk1Jg7se84XcqJwu2kiQzeExb4",
  "key39": "4Nm9pjmBKroJmYbjjwCGQAo1JSxECqEf6ULy76qxN6DD1UKN3BXrWsu8VYNdYo3WWj9d9hhDqBjKd2w85z91eKh",
  "key40": "24vDnsQVjseHKmtwGvW2rKVhusS7WRNjHKDCYNx18G6PTGhBWMH79qEZJQVeRtPeLn3cJTGZUpKMHtRhMJUCGS8g",
  "key41": "3Swd7ifqRZpVqFXss34UXtmbYoUrAKHgF3M4YUKyHdkBuhFMEmmF9ycxsa966xLy2ax3kMvc31UZ1sPpAW1TzYJV",
  "key42": "2y2C2LXrPnToktWb4rgwpY9TWYoKkWYcuPA761KTFt4Q3B9CDgXQy2WsviVu1G53Gsk9ykQytPBdiAGwvuGTBHmr",
  "key43": "3nG5XaEAmennzo3cTv1qBTeivaPaVw5LWF9RUaFRKbQ52MKCAwAPhb8QTp3DMtnz2JyEGtWNsSzffh8LZmeNvTQW"
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
