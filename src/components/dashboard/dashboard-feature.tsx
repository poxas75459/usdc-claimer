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
    "cHyNSPDiy6jS8NHoqCweogXG5PeK9eSEf7uFPfmVtawLzTpcovwVbuWizWKamoHiAEhb2dqoJRjQvPbUQjqfwJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iKsLt2G33W1akaYch6gJ6Ejx2LSFAsxKCMovT3ZWUQs3a1d1jdXp2SWKMUyfhZirSK5M8XhP2AWPfENmo1eXkX2",
  "key1": "5ucC3oW3KqMqoMGNKshBPdi7VrJMTXG61tmp8bG1ho9aKxXXm8ZqLqUUCiy2RtvjUxgVdPUbzVnoBKXV8izxMbYJ",
  "key2": "5R2s2vaM1EQsHpxLcnUef4ym9RpzCB7dgFv1PKh8XhhhX1L5tMPpecE7zuyZdS6XVnpXsgDXQaUfaVhxiAiJmURX",
  "key3": "4m1KyCwYTMhMQNM32iWHC1U9tJvE3FBQmecXBTN7utv9XduQoPFUcNpkBtx4BGkVh5vwzz5NX9AEzpidpbHG3Ccj",
  "key4": "2EWRnXXGq8WTKMy4oHDBLdHQijin25zpfHtwMmxBdG13LZjTv8FFfsGkFeWfcAQro1Z2hDTn99YLmGCn2NxUQyvV",
  "key5": "3jrUSvV19AMctEnKvKoNLdaKGHJAt8ToT4u2mat18pSqqzvAiNxYGeH9SLF7hpFsEKAg8g3L9goL7WAARt3rNBVJ",
  "key6": "4kqnA31KPtm1Ai14rhoVnuaZcqwDZemivDjyAEmSVK4dUsTPNg65FVxmFQePJoCEJde6hZVKEYNN37V2GXafGiXh",
  "key7": "3JuFe4L1BTsHd9pwEL5Wwud8V2Ueiu8y4iHyANVz1USFnrgRrnME3kiyAKZxKVPY79CgcwZLQXfSscRVbPjhDbnH",
  "key8": "cYzokoXGBrwsiyzKrA9vbjz2fL36wZ1GBWmiQWws4SN7Grgfmo91Ry6JLmuTbu6sZtmhDUwomtjmFtrpQjeFp45",
  "key9": "5FERa7sAj9ZqBm2Hsrpt8K2do7GeknFpirndsgurVzNSdF6VgeZXBgQMmfFEVg9tHHHQcCxQK87d7uh5aw6682ff",
  "key10": "63wBzghAz2RkmKqEHsNzjie58UsidYcb8trhThcHde8phn4q7GkJ5RoGtTcGawNaWobL5Bc2rjThvaZ5Zs2DupV3",
  "key11": "TSgABEvfJrieKxRsdYkjXeUAYhnejiNRdarerCTu4tCvnuc5jrTipdm7Dnaw7z2v3sv8HYNg36Prv6G4p5vVHVP",
  "key12": "5YxmZQFbSB9HQ1HRmvsiMMbn2nLtTxE3FtHaAPXfrGvVdRn1XNt8gQ6UpYuWGnhmFkURF3irqWV4b8WGuxPmdQby",
  "key13": "3CGvG32qYJoBuBEkJsmJocbw3CDPcTG5n4J2GnwsEvN71BAgCdad6yhwXGiG44hS2MR9H1uRQAKeK1XU26YewxgU",
  "key14": "4PGWmYEYiVLVt4tKfdwLNoU5KdXRCWmcY3a1s8TiC31QfnJHAue4cZtvbqgJeDeq2tc8tiCJr8h8LutjwtmfTbmJ",
  "key15": "66rURwV881HBFpPEd5J6USFQXFYSwrVFeQc1quTmSRiYMcXXUNakJA7GxfXoxgY8PfrDfpW26RoK6FEUw2aeN71p",
  "key16": "5RJ9Pr8CAVHopqywXBJnKnGC1jBK8ZUxrWo4cRymBTEx4vL11kfXzUKpk8AkT4KMDR1bhxA7S3qQkT6eah7TvaCw",
  "key17": "3gKb8NRnbbExkqCMjY18EkxAAmcnDhgEF4Rsxis362VSPGEsaudMZpJgj1vwxxWpwBgL6cT3ToXitbvftxK8Gu6R",
  "key18": "3MKhi7m7uqZ4muvTVzDFYYEV1PQHSumhTmE266ERGfSZpYgXWfL3BC32NwXoSPG6aHNts99yRdYqcgnKPW9tLrVH",
  "key19": "2RZiQBHVTJnPBYJGCKjJpJZqmFSZLgNruzNfLhqCbpFxPyyaBTq55hyCbvps7eYQsXNUaKHDedS11R7F2Pj4LAU1",
  "key20": "2o5uwLP1RmbyAB1qdGew5UPbL4orS6UqkUF2BoSiRTfediesU4QbocD2bCZgTXW8LJTZ4RGvconps7o8eSMZBiXV",
  "key21": "uLZ3Kr2oM7DzJwiFibu7v1HnrEN5a6ApTkUhuQe9Ssu6cGUVFrCgnsPygQrpHFetLnHwvdBiLi8g4KavcMELzDg",
  "key22": "5xgAFZ3AFaJNSjrWmC3GJFq46ydFuct9BeoBvYxBPv8e9YCtQ88WpJqziFrJAyg453UdXYYZCTAt3hFqoWe7SRPi",
  "key23": "3yRZ7PzY5BPgfbcSGvfiytSMnaffhS3uQePX1we6uhvRuHJp7hrhHXVQabwHfEpAz6TVX7fEdnyw4wsVXzABTz3D",
  "key24": "2mmXD7sCjc4QwTzygBbdM41EyVw3jvDvHKGQd5ErQviU1renCWDEagkh52HD2Ng5er1CoCEr262aHtg6SgzWBmrM",
  "key25": "58EZPJfXKDPiN1N1G9b6AhyYvzG3DPHnyoZyuKSSPbXGHqbTy7Nihc1dyMrwipETR4jPZxG7Sjmfy9GsWp65u6oA",
  "key26": "4reFaiAkHWureXCczKrCNaw1fTbM9nVBzm6hAmTqPAfn6TZsX2eHbpHuY97eXfR68QQ8wMuVYxW1hy78W7sMiWvH",
  "key27": "5dWQhhwNGHrKR62CvnUar9M6Ef23J8QwoB2MkK6Q3rptmEwMxhJEKeHFqWqhsqyHZzgMNbNQ7cY2Xhs81mnTzSux",
  "key28": "3A9ZdmTGJgYuU1rdPVmMoVLJB4UvTemyq7ni8gQcVocjvdXjsWYdyDTEjhLKJypSq99SenwC5uPQRqwEtWAiRP1E",
  "key29": "3zUMLctAJ1GxywnaDGH1HcvsmWQwSzJ4c1NLNZ97oWYMoo4zpzFQLWVQBw6V35kpzosXA98np2MLQmUcjqJ78462",
  "key30": "3H1KoFWu7sNvyAKJWiUW25dXb5n5HMzTBfdJMtSWrPQvBqLSiH2Qvjy3cXWbWUZwVgGusWdyfV5wTrT3CucMBvxL",
  "key31": "5BZSXpC4fMPoxEgk6Tfp8q6B9f8WiuvvCCZ9XdtibcXU5yj9ib3BnrCWdUeCZkDWFBq93t4fADwU6oxL9GttXFGQ",
  "key32": "F9TdDkzGrhFcyBuieaugLY9PBghzYw2fCFQT7NMbmA9XZ2ZqoZgGc5By3AdiiT2xZcxFbaCGw9eZSAWxpQvBqBk",
  "key33": "4DXBiYempRuwakyAHCEb1sFnJtDApDREfik7cQvENnRp9DSXkHZPbdfg3APDWQ37SotXULAamdebC3L2uK9677JU",
  "key34": "2BgpYV4CmEonSDND6pF8Q1PnWEmaFv1TFUG8cWDDVke4vGuh6a4DJCGrZVzPaeoivGAREmMXLnRbhwd68YqFCyDF",
  "key35": "3MkukMS5MEJ8AFUHUSQceizgvX1zbHQ2rAoLm32ZpLtqrfQbLR7B4epTPHVNV5wpNs5thh9QbXoRkU1VWnSugt9G",
  "key36": "QRyG95F9QD1UmiFQyVsyy8A352f4fCvJZhA4MiJuJZ1AuABjQ4j9JTkEY1gYKYXe97ibm3f2vqnhb6MZabJWZyP",
  "key37": "2L4rsNmyQZ93ToDnNmTpKjwB9u2uFqyAFQuguy14Fr76jh5h97eGz9jWRWFfoFhsDE7Kgf1z3uGYgNr3earYMLR4",
  "key38": "j8baiZ8kt3iwjqKS5en2zmwXEHmapw7TLCeadUQNXayRwQM8resRPmByAmUvWijcdUUgyyaU52Hmu1dDmSXHCvn",
  "key39": "2rQuNXnXBdgKf3jW41LDzhnz6QGYZDEPU4F2n7e5nj7JiBAUatLv88TkVFjVeZXhuW1XT9UqdqC8mLF5Ba2nDqfa",
  "key40": "2FW7higrpFWvtaM2d7Dfp3fuSGpcnB1KbQ9aZhcogKN9WPduP1Ez4ezo1wDs2PT2uXGGnbowS5L8HU1XueJMHV3r",
  "key41": "4ruam4JaQuzZAw79g8HMVWgJw9VDxbTEpthP66z7TJ1YXiJN41xwk6V5oZj9WYTSCmAEWJPvRCrpDV4Zt4EcRzB3",
  "key42": "5FyYhnKp1TtBnvhPuTcr9BwxkxSK8gcRKJRunQ8VMSFSC4MFs66qEH9Ljspzw5xu2ouT79wZdeEWeWD8oqAnHqmA",
  "key43": "4AQ6fyQDPGXssDVgJjdATAoJFSsbJiKduh6FWBg5wfBEwaX1C6WY8zDMGj1MrN78RKFLZAZzcHsugA8QcqKJ2WWY"
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
