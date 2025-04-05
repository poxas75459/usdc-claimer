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
    "3FDYc6hCpprWy8Ztxy7Suw5nw9P1smnju7164hFvorqcr7m3NcXrsGp6ZLHKYw78cYoY1z6iLivGkF2squ8ACEHw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JfFRuEymC9WN3VujBbsjP6R6re4bKoo25WtgSofDCbQeWHWR2ZT7eVSVSfFfqNG86QURj6LrX488cSmBw4693xq",
  "key1": "3svHBYDjpHiQmhZHFmUtb3S1MfyYYRq69BJ4PHxKeCFh3s4hbfW9KP4JnmYxmEgP8nc1LtYXaK7mGNDzy2EZrr66",
  "key2": "Z9b7anezwRnUjeK9mh97bc2TLWqyLgEqKoBPFqpW7Xzx1j3hqaEKrEMnFZKV1F29tZrVv5MEBd2xnf5eCPzXnfP",
  "key3": "bACBG5R4DjjUSarzDsjN4uwASLkcsY1XJBnZsUeiP1AWyaqzJMM7VUbeUjTydFoFM2TKJ9cf3Xjp2bR1fPKBswS",
  "key4": "2cCZzUX8om5WmagaP4jExyM4vgkZkKyG8JT2qENHqY3D8rrcexF5iMzaeZuXWXwswHZk3BjaHdpfnaBUCJF7hym4",
  "key5": "3hAaCyNdziN9ybWafJUH2RB8hLnFpjjdRtb5xEbvnbt2QkEey7Lb5Rs7cCgnui2ww67cnnWHLZYqDJ4ZMKnTUpqs",
  "key6": "34ZWUdi36uiGH83WEdpgCSJRyxz9ogE5XtiXHzcfQukdy5wMD1Syvc7W9yogrC9Aiiv6mA2sxqmmgLJppj4YoiPz",
  "key7": "DoNxhHCvGQBGLf34eXXUjdL7pf1PgW3NPa4so4dhmQnwdSW2d6ubZQNCkbtC7LDkqxU6mN5EWoS8CvSUUih2LUZ",
  "key8": "3aVfzGaiz2XoeW6oQMsPjqEpddWT4JXYi74y6qKsQSMVWwrYoTcxRs99dzGezzsfWqJxNcT9KuLSVJnpixHpAC31",
  "key9": "39GqgcasoJA64Rzj4Zso84nbfZT55Yj1PfHHd4BasYwBAWxkwhxwmgqKem1VjpWfrJeck3TngNU5wWLdn4Pssf1W",
  "key10": "4jozK4EsHy8XN8a6jVoXmvidFu9KZdV3ssKpZfiGDfWkbhSphWEg9FM9s3qCu1AjErdNAXModjjfL31hfzLuAodj",
  "key11": "2iZNdRsWUeZT1dB1esvxFwb3BwCWoKjXPZBJVYHju5tnymSGCcWsikPnaVAXDFfYYAL6qPYd2QHTktEKMRBXhZQe",
  "key12": "Ph1PpfnV7bvunjN1qJRmBu61ovfWuMsvBGRrqYQToKBgqNk9WMgBkfr3k9mggqbQeDtD3ee6L4RRh49rtXrJugm",
  "key13": "3LZVVgSyF3bAQc8hTxvpa357MpycJfV9dHz4YYKjYUpVoXZPWxNtJmddpz3xuVrxp2mTNvdTL2YHFSfXkqSozUwf",
  "key14": "3zgBCwMbedjQZqV8Z4TyExQNPzq7Pn7xUYwpfGgZK92RSGGBBQs23MatVn8kkLNeL9VqCkG67r9djYSACwjGSpSv",
  "key15": "4anVcvEhpMyrfBCGfxYcxRMgU2nuWqWwh8u9ddysAihkpsBZ1a3kpa6ugPc5QsYkmToeqBFwA23XuCCcrNvfv7iN",
  "key16": "3CHEAwN7iMixd1s7VhQ9AsStFgqA59kzQJoGmLbTt7pveWiBQkWCJTtwMjeFkhhRk6BjboZhJYxoBQrSvGFCpYVT",
  "key17": "67W6WLVFf4msRniztGkTS8ZsDp6qhu4D9CBRDiT5qFdAr3hqZNwL3YDkQ7jgygTNxWKDDhwDKDujjakZfx76CfZG",
  "key18": "3NLjbMLDnxsUiPoqgystyM7uFHMJbbVz71dRDkTSLFJsSByaiw3TcWPpoYah5sMyzxNr7PfEvz5iDXes2QfgwM99",
  "key19": "21w4Hn59onUjhJbvTD9vCNhxmUgX3h4J9LQMpTWBACmk6YxRQWPab2XTjDuBawUeDBqzcpoqZvMykdsBkAdAqzEd",
  "key20": "uKtG5fSJ9saMQ4zaqoUnTjPnaP13GXRetxH17vcegHRCPpUxgKaGAQDH3yUaJThmMT7GHdLHU6mcTM1SE3mjYSE",
  "key21": "2gvaVU5zmdqtMEvSYRQjj4tMvinJ8cbn8YmY8UC3wxPGZVcvFSg3b5KrgzFrk6FAVtaiZeSxQSHoQCAjk38Kp8zH",
  "key22": "414Vu1w6PAfT9XFabScg22Ec2W2c3CthoYHLyTbDgjn5nde8ic87QvtTw2J2yBDE1LwxGDmcquWBe2ZPbgtxK3SL",
  "key23": "2C1tMEycRxiLmtwBNz8VJ49jKqDNREssvgx2Q3BP7AnqhaWAQ6m8iGzh6hzKKtZGZjr3NzSfbozuBT37FeaN4262",
  "key24": "5XvnFYvYXNpn2XwzyvnfQCUqAbADwWG8fZLeY5rUYNBoBF9YUWzqgdCJAjCSerQ3GJNwNxPg9Y8oXpEwW3fL9sUE",
  "key25": "2cqCAiVV8xkJGtM8AT2tyHPbEs8Eg3Gtp4ifSLfpmoZAAnaEfEsHEJx2RT5usRZgn72x6mQiQZKAt1udWy6rSRtr",
  "key26": "5BUFVSt65feXa4r2SD7xiTMgSGb7so8UAWHHm8NvJbrVsxb1ZnPYX8xmfoMaqnSTWkRPEzGxuAjaMwbtyMS1RQM7",
  "key27": "5hppCRnN1ZPeqfBMmSXSyxRoh7SECNBmNhguTAFYHWqBKTJao3tH65eyshgCENtWYHTB5DnaKSCrmsspEjyVXyKq",
  "key28": "74QkwQPcbXGQcawwrQkaJPxNv7KcZVYGHozBzmZAdq1rmCi57CzaUzNhYAZXP716LC1f6YCN1XBsbk7Gd9cMJSz",
  "key29": "3LZoC3od6GVGPiJJzZ9kfNs1yLWA8fj1rHiViRQkvu6Q4hYzTMDVKt71LQKJA1FJzoxfNafEusu1kVNBVu1ed1oy",
  "key30": "4w6L2MV9XhNv7kc3Y278yap7vzKEXthxaJuvzHVW5kr8xXaNRqwLwg4NF3aSqQ3fXCEy5p7ChMwne3k9rKvWq9hi",
  "key31": "2C7THXXAKdLdMsCQ1FXsGB66NwdcaTGthwf1Nyy4d1PWDaQXfByCDojCmZq1DUezS9TpCsLbPxBZgRK5vxxY8RG",
  "key32": "ujH91NeRBgqjw4McRpZcijDfYqmrLzMcz8sV3iqARrA8Nfnw5QcrMdcS1QjykW7VCUiBSWKxMSXeJ5LbgUPuY5M",
  "key33": "Fk87ykFSRaKLiCJ9wBYP6F8U8we4MtHkz6reqw3CG9Y8QMKNg4YZGkFQt5aUGm66uQKNs7AMumgqPtWAarhhHwB",
  "key34": "5pRAosEEq1A5WZie1tz2UtoWMBajtiwAFcDpDqvcU5wUHpNvqptaEySibckxrefavNjpCRVoKdiKM3UN5c3vyoam",
  "key35": "2zTB7HbXG2skMGRuwJxPZWERLTqk7Z7bEyjif2j1Nt5NZQ7rpw9xC1ak4fhF5YGbSM93CRdQK8MGY762P2ZW7Tnf",
  "key36": "4oivYKxc7j96Ww5dLmrhfYMsbC3AHDKL6pKYmJKsKtccf5nWG2igpxpWmtrM6urQLR67J1otuManwiTTZoVdJ7Js",
  "key37": "4D3Bm4bqqJNHQpBGJAMATB3tz6j2NjEaBbZXDM8P6Z6XkBAQhMFi3NPVyViXdCLEw8iHgnM7C7kfDTtrW7tMbby4",
  "key38": "3FmAYSM5dKewUf2ZVXYqciHCpwYFbZUsHzp3nJVMa6WkYWZfzNYGPNvrsy8kBwtrPioupSwM3skS24ZL26iCtrG5",
  "key39": "3ZU8zjZCvqcCS2wSHYjM5yZj1EqJre9qU8AGWokRM8XAJbkeb7HHZF4cLU2CAcWsRtbs3iRkXE2w41mhvJkpmcU",
  "key40": "2oW8d7GyFmjFmeYiN6u6tPXpSZRGXQcFHVwnNhbetjK24PQ1ZbpNDEWf9xAUreKLRyrXK3X5jJy9qQUQbLHvvs1w",
  "key41": "2MpAyCd76nVwG6xt3dB4PkEi2ottojojKZobTYKDmUKRub7a9opXjy8gCKGjheryFttXEL87EBKWqWCk2Ym6p5k7",
  "key42": "43c3CTgvk9hLFJAq39h1tRY4yKNevXVFgcZb8QEX1sAViV2YoZg4YeUwaaiZWK2eeNNcAYqXidmuHzDgbKYdQqxt",
  "key43": "nkpe9yQgZ2zx9tbSd9MMR97ge9SKqEE3GRjFSf9az6mtvgwjWLbbdGhVgFcmWyi1JMs7t1a1zLg3ctUJ7BUf13y",
  "key44": "FGDLNufDfruyBN5TdzJrVHdaVghQyic1xuQSqf4ni94KXGwGHbU8nPzcVESCZzUserfCDEMxEX3wPgzJGZGH6j9",
  "key45": "4tGdfEF4cUfPr7JqGFF3ieNR2FHXkmpkni9bmppn3YVHSjxiS7oRKJ1R3NBtSBRbv7JB73QzjbvfNeYHDero5Uy9",
  "key46": "vaQanaGUpKAMCbEuVF9rkb9Wauhm4b2iYEZHNSqZKSsD977ji4Fzbqx2SPyzijwM9C2KtFhhZ3VtCxoSBoqf4t8",
  "key47": "2RozEUNEx8hV9rWnPz8FivEngbzpDUQj2NCdGrafDrwoLC7THGn81g6U1NXE3AFV42n52aEpHzvZ7bXQJPXoaZAe",
  "key48": "5FxzG6r4rgso8UebqeNNSB7Yaa6kfyGzFrMan3YArMGeUF4amgbrwTisVXMrmejjh4w7mFWyM9GDvroeMk3NFLbQ"
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
