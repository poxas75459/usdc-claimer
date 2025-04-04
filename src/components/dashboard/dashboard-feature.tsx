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
    "3MyXnavWN13cqcZqjNxwwPhR75esnGvWQ8Jqo1devyyvG9vVRc1A6qNRodxzrTPJp87LfaFPmPC9wYbabTZAaEA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zpd3x95r9EQAQ3WoD6tzt2xBfjQ1GaP3M7W8P2VuZAYm2WmWpXtVG4WYMJwqSoL8bqSz6SrvyehejCjp79bnpkf",
  "key1": "5FEsBSKEypHZH83RFRrjeMJh5GdfztJCTu3s1fkdsTNdLw9ijFFkyU1iHAtqDJ3Jx7Hz1RPBa1AhHaoSeGbeDzyd",
  "key2": "65cVUziqYgRNtBNVcDYLvBkqccjgECfezH2M5h5BJJxaxkWkyMiFKrS8JygDmdjRJwYbZBUncLUiaSt7aPAy3FNi",
  "key3": "47nvqsm9R7cmsT6a2u8MU6mujXeoGqLnxhyjzrNM39QS4K5AUVa9wZXgEF1FftAnCWed9RKVNQowv5j8a6RvWSbr",
  "key4": "1vhqm8WEDCA1syWxC2vnmmnwb5qbujqYMiZhb3j6VNgsfsku1Ge9TEYbqj3VfHTwwWNUST2X6ikaUW17ZGbopAV",
  "key5": "ZqmULbrKrUU82t6Gnc8ivjct36PSqRGDKDKxsnEzTJ4gwUxobRjLnPhPM29mF5UFR788L46b32aif1S5eX6Ccxr",
  "key6": "4TvnbdwMXixofQr5B7W2vbPy3u9Sin175yPdGwLZV4HvpsSPsSXUkAshbsapyzvhDCyFMFwmgfPec3zKpuABtVMi",
  "key7": "4DbyBYDVMWkZYZtaUjHKgeJqRfPEeLa3Y65owfqdJ5tUS1E64K4cP2MECfLmGBt1c1utv77ZqhATqJLLnknrfEAv",
  "key8": "4eumhgT8sCPEAFnqc4i1sPJLpQDfmoBXrebMQDNevrg2VjjQkw1E1P5eHoAASTCKWxam7dUYwRYRK9vE335QacQA",
  "key9": "5mRRgyTyP5FK6DtVD7hCrTxUsXsuAYLQ6WVTxrE74eAeSgQYaRWK9GmueQehd9BmqMPzHZ2Rub3DHtmLWKScEQQQ",
  "key10": "JDDcxY75V3uu57QddVqKss2HqKVXDQUwG28W5vcW2ZprHpHcRrYJngodwRwr6bga2xXXLNK2QV1crFQGR9zfRaS",
  "key11": "S7EhfGazKjpnbgbmg466Rm2pFGmMsSzSwZCnmAJhMxV2CJ283JvpU3vAtFmfBcgw1x8WdnRu4f3KM64VTMEf7iH",
  "key12": "vXz45FX6hQwE9iBuapqtVNusGRcmMi1UXZXLc1rkpfu6RwisKWZkRdEJdhPdbUn2v6uVnTKeADzYBHvH9x8umK4",
  "key13": "2enWXnVPK2MWJELo5BrL6M4rRs2CWrrAL7GRVY7bQxGXh7LPYdZybiLxNeNHXHGANLwQCp4NHsmoGZPXmYfMTQio",
  "key14": "3oL9Aq9reYg3aYUbe5j47r2fX5oqizcwVspeoNyrQer96muoE1GtKwq3oYza3wACNxZ24tde4wBY1nHzUmWjoiYy",
  "key15": "3JnZHxDUM7RFCZVfDKR2ZxRBzV7jGpFXTtzHmqPZsBrtDmrSoSpyhhY3EovdYzRhm3iAismwERMAVPSfJhMQ9dH7",
  "key16": "2q7fAFAawrReUVwNorz9UzxV2zRDf5PMjXvLQnbMH8R92JUEcCLu1NZdCeR3uQFrH4ZV1v3JcGyf7WCGv3oAd14v",
  "key17": "BKxo1mX1V7FgHP3MCWxzT6BNqQqyJDMed28ZXuTB8AUwh2STf5CnWce79rhwwMJy3cews8127a6JmLBmRCVzpHM",
  "key18": "4Z4s71FQU5jnL2B3UxSFCmwoAB6n4Bw8cHGXLB7UKgC1mrFsSDX8gomTnqPvq5QEnm7R29fKxC7V6YWtfJWBg1Si",
  "key19": "3WZxdeUs3VD7KvCRzTZZQMZQi8BUpb7fHyuxcEsGpvdstmMv6DLux9cpvFF9m6ezZ68q9xL59UK3As91iZhthG3V",
  "key20": "5ZRrgpzDJGh9DuG5SwHkL9dxH8n76EWgJAzYmnYpyX7L9L7mX1smULc5m4Mdoou2YCoh1nTBYo4BEyZ8uzRwmDvh",
  "key21": "5AGArhLaHnn3fAdzguQsw2DhJxbhQp9ujoG8zeZnSUFAVAPJFvCyLDTv6NJJwmuy1EVvaReyxEoUvpHDrWfjiU2i",
  "key22": "4KWa4ooQCxvwrLv2cDEqP9PGN6eK9rJLj2cA2wYa3VW4WtogdueYrEJtMfUoNyHChfQAMFPryFyazLQMiBnsFDzn",
  "key23": "3ZBMRemgysqUWzeUBrUr4UpYrn2KR478WWKTSj94TXye5L6pNTrrdfn9qimXUDxndPH4xreXqgEX2qM19vWb47EQ",
  "key24": "3JB2NPTVCQcxJtf3Ys6gGhen9Vb8RtVvaLHYzUUh7KQVdt3Gi4xkfn7yNQCw96j8M1EukGp3cjpRvFiCVCQGJksL",
  "key25": "2SooEycKMAZAyGhcDa18cWDxCPP5vgwk2jAPUSjd4ykJNYp9RXM2JBYizVDe9AbikuG3N8kvYWFgfatCLGZkq7yB",
  "key26": "4xQjTd9X9RACKeQYV4YEDQUVSh6guYhTX6oRo5ob3gSt3NBFGaGsvta3qxdjZCBBUaAyN1rcgz2C8eviJ2kuovRZ",
  "key27": "5waGVnx9tAhcqcSypoc4zgo3kGm8rVH6oiaaCv9g1pdiWtjycJZ6kh6NXkw4yWXunspFGvziYbqfWfuQeSyBZ9b5",
  "key28": "SziecfNdS3qCdy9iZs7zrQAHMQMCumYPDg4eL392muotmqJD8YVbuGd2cxmjAavf1NB4mU9nV8HQCJNFQPTZoVW",
  "key29": "3La8PDAE3xA8JeEcvM7tWtyvRi2HApfo9sivRsBc3xWUDTrVzznKBPR7Utpd2nXpHnt6DoJ2fhtJ8jLkgYWJTiuj",
  "key30": "CYZCxjdRaJbM9LZJT9aRwaBvUH81GJgJkUAdPzrXzYzDKA1N8kZ89hbvYQWjnSPA3bUDrx3BaxYicatAnPurtuF",
  "key31": "4Kb79wcJecFu61WYmzCv5sfafEA95XnjLy2YsRy9PktLc4fcrxP5dKhknZ8qFW8L4q6S1ksbdRqQtvRkw2bvhjFX",
  "key32": "5iGEFs1cNsFYevtvJvBbwdmetS5xbpVvdJfJJ8qeyMwcEBmRL6FxGzniTFjJGZ6yZNQnvRze8by91CTPLbnpbVS3",
  "key33": "mDdAkHgvLuyBYZSraR5mzuDZj1XyPgrDqqYrbT4vi5tjj4bgEbgG2kc9jkBP3iCt8tGohAjJTsFWJBybgqAKq2N",
  "key34": "3Sh1XC4vKDpBjT5NBDKPZm5JkkX34kNmno12EtWxLFuEQ7qr3Spa1u7PpHckasjQxaJLFPeUfEfRKPgWUxDAPmhs",
  "key35": "4pGDNnf4VaWgTSSJP5aYD9hs4RwitKfk2s8ytb4awFeCcEX6utqNaZw5d9fVUfZoNNxoyANQ7R8dAgpRWuKrNDHC",
  "key36": "yC4L3CSN9FJYHmygcYytYWtEmEhxF4Dues4hPAcVee4hegsg54fh6WX4dJPh3ibmJQHANB3Bk2Dci6ttUaQ3imh",
  "key37": "5MkJxffevd7wJrk6dPaA5DVdCPZv5U7mkS8TqgZbxfMM9GPDhmn8SDzX2swYJ9JKnKqGqVVyU76ZDoyaGiUxynkJ",
  "key38": "4m7eNWejUqTamh1ZYM8ysrMmBaHVsF2ckJakw1RYfS4WBHoj1CdobhpNXYyLjR3mExbksVAPyiVDczjy9nmpWGtE",
  "key39": "3UqbqasqSmXU4CzbK5LW6eFwT3hKtKytbPQ6DepQgtxUT1JJoiNNvgxUCgTXDhzwduLqAdTgFCFnrfmDK4CsfVt1",
  "key40": "4qc1cZrNWCQ2Tu98DK5ubA6zwN65MkzyQfQiUNd8gF42yzUVAkE3D7mXWRwYM5LLsURLzXEiDBMV9bjBnbAfPv63",
  "key41": "3ncU19auZdNTV5Gwh9wuKn6vdcmFpSm9ygT1vPh1Ksoh6NuU76XmrChcL8jycdbhb1XyyfzsJxrbBfRKc1RvLH2T",
  "key42": "2MD9UpQw4f47aVezuA9xFH9AykyXorq5hkSVqVddv8v3rBmv18C1pzwao68hk8GskHgW2icEG24HbxhK7Vv7Ssvn",
  "key43": "23pL75XQqkzTEz8jJzUp31qGGtnVX6AJUXCdZ2Xnnn6tAV5UZnTobbFpweb4ZncsSqN56EyZPKRSeHyw1jnaT23a",
  "key44": "5Uajyot8AfHYuyeWvncz2ZUduRtNp4LmGJa6j82nPXNmGa55cWxCoTAUpDWQ5jfr2cPZtMLSzMEL1U1iimVM2952",
  "key45": "3iUNa9YanJ9Fu9srow2PtFdBmCsipDtbroD3Ke1KAvma4EinkewB9EnXWNvQrrr4vWVBw2dDEFH49wSJhYsFCx7n"
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
