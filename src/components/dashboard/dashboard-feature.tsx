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
    "5m3FfMjHoJArPoka5tvihRHVQKtC5RhiBNUrQwy5mpecoQnSZuXvCt3fvFJMZfZpJVghE1Cbi581imV2fzPacocN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PYsi9ZFxbjvQnJ6r27gi3saarPFHpQRS1tNG6nN6WNyxqgSN49XyV9TRdAa1vVSfo9Y8C8tVraNqdT4D3XHg75a",
  "key1": "5bK4NHcqqLBDDD42TuJmS3goc2onrLom9ChqyTZErWE4qr7tnqEvR8trpANR9YqXEY6gJypBTK84YokBStD23jpS",
  "key2": "5WGtRaX3zU1nJjXWv5MPWi5AFxaXtMXqfBWg35TFQCyahpF9pVJDjAGS6Zu4nm51e8eWxB5XmCawifjHSekcCtys",
  "key3": "3rBcNu669tT7soDkLX8CGMnZEkC3Z4N5ojDRMMruVA8P19AV5pyKUjiyQ1dyYSWzpN8g34dQYKM4LHfoWRm7X256",
  "key4": "3eMVAcKPRpP2a5Rk33dvLcJaBNwZt6gqLxqxGiVWxtU3AKVwPnvtEpVRrT9p5tHt5D6P9bmH4zwrGRiJuNCK8PDL",
  "key5": "5eUvNxqtrNqx82guGAFMgKrvjBsbp2D6K7z23gvw9rcKoJPNSYBZ33cT87qw9559uJ5Ugprt8dvfXjxSwsYpqysb",
  "key6": "3QeHGFmmssT6yjooKWdrAfy5r7jKbpDrBXhpCwb4rXK1tzH3ipk6ff7aCQuLwvkUaAZ2z9rqwipWYvdGdw2jkLgz",
  "key7": "369PUozyv5xKC5Asgu3yEC9UKhRoKkrrnwMfJnNQdKpkcNcNJVk9dbrvksRntn4C7SfWLRYSb1e5ZzcPHW5ZATqA",
  "key8": "2NM5C1DsQyZ5jbK3YzLE83J9LFZZvJsmLoJBPfVp3ztjuWnRTVn1b2vnxjozfbi31ftsLrnXAPn3ThQtAKsr6jW1",
  "key9": "4cRDS4NeFF8dvR3ivSQqBS7a7pCaYS2pSCaowfHT7HhuCcqXeUxnfiSU3oFE3e1ndFXGWWLpA6LcH7xJJovg3dyP",
  "key10": "2bJBzpLzpyMW9SacUVZv8YZ9NMHFQD5a9RoifxquwzvkBJdyceGgGy3nVibd32rgmXbL755geTMEE2eiR3vvxfqS",
  "key11": "5UkEKTpBcwqNnpG4iTP7GWq9wjTfJrQEFCNK84GwBZGu8dxFX3Kgrap74HJ3SDQWbotUJjiFmwYr2i8hbGbUF8Bb",
  "key12": "2Gtmu35oBbhgDrJkW4CiLtWJEn9EjrCBVz2Xr3n2sh7LppWtXpzi8epf9Ydk2w7uTFJXZKS6sxo1ZVybNMX4qDAH",
  "key13": "5tYDKgibLCkPW8ir3UKnyKiw7qRYVnaj6bTu2NqxCbfhVP7pMk4C8KrTAR2z9bLCMYUNrneG36yiE2LYgdKHo1iF",
  "key14": "57zz3BTC7FcNprhDvny47soxKWuzvz3vJMCRHakWtm7hfXKuvboUzTNfNxJVp9cYpw74qekZV2GBC24s41U6PN33",
  "key15": "3q2LxX5stgoQ14zP9UJNSUJbsmYwqhztLUfpR4ckruYPohmagdnBBSksQ7oEQS5pkBeqnZfNfVL6ysw2nxhbED2j",
  "key16": "m1QTukufdGPUKWrRhuR5Vb6Le5MRqZdP5wadinj6JRzujMwFanDbMCGdi9DcyTwvaL8EKcWvC2ZGCjyZJWBrKAR",
  "key17": "3tyF6NzAiCLqF4Hkf6pDy1qoB972FtmZMUvLLuuQeXCSLLMJzikwVnb982mQdEMj68p3RhGCW2nD5p5q7KUy2B1w",
  "key18": "46mrWn2TP9hnfibPCvybWfDbTCL4SFVNG2prVA6kHTpoXcVhrPexaAbPcnz2yrtARPnzwD1wr2vj43RoVKhZijZ7",
  "key19": "3TCDXGZjgkvPqiGXVY5eexSW34WpTaWsEyBifpUpeF2mfpouDbK9sYnGfUB2mLRKh7XPAZJ4SaewdwBQuBSvQkRD",
  "key20": "5nyjN1j95G17LmsTyExC3vkXs79kEkvZVZYT79HGRQ8bKjAK8ZoTutrmHz4pf1B99sc4jaeMY8SX4EptZGj4puAG",
  "key21": "2sfNL43h1bgBrvqFjye73gtHviZPAXQ3cixzuxyae6gXUMQy2xH4QjAmiTZRuqc7xHogYBNc8yxFnkokAT7ieoqu",
  "key22": "5dWU1VUHqEim6Fd3gRmLKS3MLydJU7LwDyDAZKtsUNVYxX8GLYMrN3ARPXubHFtgPpRvrRwZBPRnvUhKZBv9A34J",
  "key23": "3ASRiTrzHsfY9XLd694LhYFLGbsUuGR7WmDxQ7AvtpZTg284xFnUAAGGfXzd6UoVVabiJB172rcWfqEsjxNady9w",
  "key24": "5iDuJvddRENkyikGFoJSrV22RESNUg4VaVGyQ3JMaVBCowtuJP5qm7iTXzGNtf9hidZwKexp491DCLAohMckNrj4",
  "key25": "XaWRS2myupT1b7RdGdMSmyykiqJagVSgfM7i38Fsnngv58FqoX5GvyEDMu3cCeyBvHbvmn34FH8NCddiSbbi1D7",
  "key26": "3ooh5MP5Hoihq1hEcno5DdDJ4Hde2SC9KgFQ9SAMFw2BUz2BsmGhuTYCuAoyrPgXWQZjZdrEwQDqjp9cp1BpUHZs",
  "key27": "KCEJrMjVPHHZhwRkukd5mFShqx5yA1BknygvVyxwBjhQvggXpyT5eTXJAmv5r4fS3yxTyXb78iNJUbFH25FzT3i",
  "key28": "WTjSW7oCq99wrTSuDg7diysiMcc3WgZt6ouiufMQvHm8eNCi4Ap8beyc4eX7E9icDGGT1CtJNCE3j5SEKx5kw9h",
  "key29": "gqc1wgyhsjVj1R1eqk9DUfRfFYUxsjguvF1kAEdLzZPaz4v6tn9JpuxFuDygZVNnZXdN4RwSmXoy6x3434ivdM4",
  "key30": "21zqWCJcgYUMc6PsgkCxiavJa4zM7Zs2EwGTKEdttyaYBKWQtK3m87K5ZYKYoN1BLjAqyZxaVv9tF83zWQ66wmQg",
  "key31": "4MNnw7PhCbsTmXdxre5LCWjRF97VEmmn8EDJiERwojtih3F71yqa4jY75C3ySakPPdD2zDq1wp8tEZtxegw9PvvQ",
  "key32": "3d3H16yS8iF2C3uQJANGtUPpEes8Zx21sRvWbRmLvbuF8KwaAe1EwuUqf2CYcsUSMR2dq5RGR3VpuZwMpFPRW7nK",
  "key33": "5Uhe5EgKqcoFZRnsUXwzbXpEgNJ9QdaraJr6d9w1wzCWhNVZAfZouuB8QgWKg3WLsugVLR38PKN1QVvwLuMGpBcA",
  "key34": "kVJDfS5khmYRsmY6gjqWpbkaUMSLrK9k6MM9v81DjPthgAzQJSbmoCv9TotwPWhzDLJ5sMrhcCgd7sHLCpUFcY5",
  "key35": "4RSYKwKeuCbEynxJwp2u44QjwTCdg37WTeaEfVVMWXFjVi67Y8GXFtRoNDcTzjked1o1UuM38kZyoBWbSg6NqDjS",
  "key36": "tF68xB4P38zuGDrjmm9x7QHdspxK6m2PQHJMwMQGRgDYejJLLRqJLqr2t8h69ThLgMKgniQGtXPmPXiBhkkmEeu",
  "key37": "5wPUYpzvvtAbZTcJk6Pjnzf6BiLWjB8rZFA5DavtiKfSV2D5YKbg5mZPR6aEt6Nx4zkELXqa4jvmii3trPga7oYo",
  "key38": "4Vo89rDtHc1KPtGzNJBGsFMzPdz4z2SBG4n2EtUGrctzCdUcn3GUgUiJb9NHgBY15ot21zAW8K2WLhfBfKsifyow",
  "key39": "5fGPhxrX6hME5LQLcuNJBcwcJWLgawAjzyeDCwVVHofxfgW7c9nRYXTue2SPiYkzqGsHaQ3b8HAPwWLnSqsLuia1",
  "key40": "2NzwcvVaXoWCGPdnkEK17DN4XTBPuGrHgSKQ4uBDttax84gmZbHoLsPn8ePCMuqBc64KCkKDAJyoko312qxYMmoh",
  "key41": "2uKo3PhvLDo8gC36wnUgdEQT7ykBWAUZ5A9YYf66fbK9eiYe4T66DFsMcbdQfQwFYuGiTizbWdGA8BdiRSCmd6BV",
  "key42": "5Z3RxaGnAughQYrooqWCPnyHpABa6h25Z5jDf2RZ5nvsECmHYVKJDHoLuaf8hrFb5CRz6BRbytSCTkdJ6fgr9A3i",
  "key43": "3husVmP6wZQCy4PxtkhSAJ7KP8DkxzBpbXVWbqKC4w6C511NSkME6bEYGTwurwRDmovxQkvh845Smmw9cTtXSaxZ",
  "key44": "5tyaTo8PVR1n8BU1emZ5yJz9AAhhHFG6hKTjRYnKG7UnCyiE3tnuk35K3iYfchGerYrAvVscG9BZmEuoGmyXU6JK",
  "key45": "4PNqfiHT2nDKTXvSQu4cTzM74R3eKz1Dc5qRvujyMz5NysvtvdCiCwi1eX49gVq6htxEesMHzuhWaKShES2Ezp46"
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
