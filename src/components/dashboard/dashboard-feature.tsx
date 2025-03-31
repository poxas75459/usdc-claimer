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
    "5iwgaLCKwdaWhD1fU7cRzuD5w7PQ4XLvivaX73jjK6uXxEqMVPtSzWPpE83hxVMK6ytBTJMGMtUyRGdZJ6bfgqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4htnzjBHSBqeSPAmLen3wQBZTnCMXyPiKwqAg8aanVzw7tWJCBuXRYjrVioTxRXEEnHmBT34K7crgjdhW1qqcurd",
  "key1": "5hjtr9Mem5hk277C6CPGMpDqYrHiPWW5rdgP1s4VbcAp1DH49AdFPJ5KX7Zd5cB6wdsvLY7kDqUL7KyWjgJ9yMxr",
  "key2": "4A4zyQt3zZhaki2LbHKRkKymZJJ3p2PW9CBeDHCYF9j7roTirPeRZn7zR9H5mrR5kCCc5Z8fMNUVA8tyV8hKk8QL",
  "key3": "2AAy6k852kXbRD8AqmmRhAdS6MVuzcrA9iDL2CkuKCLEs8j7hqeweSh2i57kXKwWHXCvUxvVcvpBoPWFo9T6sues",
  "key4": "3mEipegXZ5QhPT9nfv6gmRGHzMFK6k9MD6baRuThHKUypma9kMs7MT7EVjQPZby2aa93bfhD54Z5YkwkNqXAhSzH",
  "key5": "2xcbtSqNkCw3PhAkBESVDdu5CngWK9FejaV2dZEjszRXmmDJKUeC2GRRtBryutNxwiJBVRibJYNSWn1pJXJwQpgm",
  "key6": "53FtwghXJWhmvTGh6sGpXh7LqcXb2tDckUnvPL9WU2mpF2mwUV1emFeuGxEeeQLDsh5mmbeUqbahNmZMJUWnppij",
  "key7": "U4uedLRwdChMXs5fnSoUctNSQSY7G69ndvQb49jdM8D6v7MzMR6CaJUTBHGmCro2msYA7hYLtTGxr7VpqUGxrom",
  "key8": "4ZBcSaDzGWAR92qk99D7pkSX1V3VSyhycjSFoxowuHoipoyk8MoxE6CZVDyGQEabeELDViukmikyhEdiBeJsB6Fe",
  "key9": "zXvaa72Gfc6DfaHXV7ZqZUjdu7kJQrUcqvEV7qvfPtcv3Eqh8AgS9zYwg2Wf5zuKc2B6vHUg9Ptk4KJvYrvutFc",
  "key10": "4MUmFWA4BB9cRuBnXDiXtZ2keTKF6iLXyyG2weV1MUJmBCyExw7UyqzsFL1WAHwkgxM3ziAjq5M5pwWprxSQ144m",
  "key11": "5rrvMhoixvi2JEt1nDNziCW7FggdSoKxYNo8paGKUNtCAjjgpBh3oBmtxLiQJmRq1tNg9Bm5yNmFWkvwPbvQQiaD",
  "key12": "4WnDbZWiuApWjwoBcfaQy1xreHmR2NT52mVawUtsKJp7eT53xYd7TwqRjdxmJQLfxuqgBuT2ohTbGZYMxGnQwQGf",
  "key13": "5GE2FLxF8qJFRwTFFuGhtRQYm1NXy67XTvQSwaxhMvhohFQ3DcemJvKJRnydb4wX1vjwMUETviywWEYwE525UTG8",
  "key14": "5229gMaakkb4WNvFmGLHBC9HCgXk5g6B9YtDnJA12X7mP38Kk5VUsh55VLofcgktETcs58X79NnRcn4DWGrg14oD",
  "key15": "4zf97jhzypF9QMy2pj4F7LPisusBUmFa4MjLzRAcfgMRbkkKwiUjzjRrSqGKiJ538WCvk392BQ7cGVNxaVsfbgyb",
  "key16": "AWWdwVD3WRQA7fsFj5TKMveLnhzqCLTiTjefCu5SAaZJibcdYDqrAwRx4meZURvrbcpx166hVEPoCP23cbxf3AK",
  "key17": "N4UFdcZ6QzHHMRQ52TCVvnapvG9P7Voy5idnnCYm6YqXVN9Mzq9FmLZB9aegJBfxTeEoj8kEVdj9G6va5oTiQeP",
  "key18": "pR9LtsgbDDE8N3bSznYXviXVzosXJEYZ7joqaKo7ySGZj9nv2mMJeg58mJFWsg3z6orYC45kmj9H82Y713UfkFd",
  "key19": "4CCQ2W5aswN69TYvyydBcevvDcnib9NEVn7aFozRRXzrnirXAmrBhYrRfngLM43XGUQpdJxsZFATrBcvSkXod1RW",
  "key20": "5sPT9MQHs48vGfyrk1s3KqzaRdfciFq5rpzhy4omux7EKdxuU2ep63t2wwoakCHhKWqHJXG2raE7EgVBRnzabhT4",
  "key21": "5f9TVY3pkDEo3PN8QxYaqKyY9HCyV17CjgT1xvEj3F7imBu4hZqD9NAiEWxS3sMNF43jAKeNqBKUXz2yrqtUd4W6",
  "key22": "2XThkRkANM9JnjCCbfN39f2WE7aPMTDr1ECLqweDx8Pbde6VB75dwHoWyD3cErWZGv4pRYFcoyAaFuQfcfAxxbjZ",
  "key23": "2ymvcUZcqHjKLzpB2yehhxQU8WV5PBs2TBVZJNxA7B8fYLtJHTiMjtVLnXRNu8UKFwxDpf79RwCiuX2YbTrigZiN",
  "key24": "3P7jWrrqTXSjH6W8i6DWXHu88h8DVZdkZb3YSXTJTpYRMfSYnQtvfbC1UYqaGapmRc5DXLUwaYTycfFgpVwNL32V",
  "key25": "4oykUD5qQZz4uyPMKPptXqcuqhaMUgEtytH33GD5L6PENHQobfr89RNwREAp8ziwYRohfVSsr5Lz1zYmtTwSF4ky",
  "key26": "49hvVSHRKKoVcmUZ988Mxjrwqu7bmSdUvb1jkRYxr5GogKiiXHq1Fssi4Jd53nDFwJNgt7NUgRQ8X4rNaiVBMisf",
  "key27": "3usyaWbhMEbqn5xFjwt1DXAnXfjQjRuQTeqZ3ZzQACALTPvuoEs1HynPyHyAySyxVdkxWpoywb8ppkkEJbQyD5qP",
  "key28": "5tW2WZPsAuPPdaVoBztxL5DPaHEUMqWFzZncAsbioTZRbiAf4ABdxHTohw6t17KsvcFirPt9mbs3c6dgG8tDYsTE",
  "key29": "4ooknZo1hFE13Bum7jxrbJVgLV6qUsiurkCeoQsXyarxoB5rTnstem7mbuc8k5TgNrSBzx15NJitGJsay8nDV6rJ",
  "key30": "4GcVWeWJXcwmUHYoywNmwseX4qvqyX4PUNVBrTJ58TfL5qkYtQJDtqNYW8mzhTEHRDigQCmw1TJfHp26U5fSCJr3",
  "key31": "5WD7doyuC4AvxpXHakwrbhdqvEJT28LCUmxijStNFYgkbxLAgFYwL16KvLq1JwdhuvW6YXZ8bNoSs8FYxKUa8pFA",
  "key32": "3JZLXks3RYpHcfP3raJDwocfL4hbKaRnWWx7ybdNDmwuEZASGqCdEXdoNLJ6rzoD7qxrw9DVwbE9cDweMtMD1Hmc",
  "key33": "F3UiHtkKRHAtaNcYbnTeBPm6mKnS14DuzLPvd49VhB8Pi7eFhhchzn4kXfx3qoDxVzbdaMtDmS1CMwYdSQ48kjs",
  "key34": "YRhrbRyBaMNVSV5ncRx4HA73E8HarvjsQe2D6LV3nRVbMjTubb1S1sD4rBLyosbptxffG92kmMcftbrCrYkDoUj",
  "key35": "XBdANU1CYojBcxaw7ZD4HBMCdMegTeuxQScVb53pEVGaW6rQgw3LRW18z7wqNC8CHnS185kBFDuANZ3Lv6Fk4a6",
  "key36": "mxUEhDm8EZq6zVWPkhRXP4yCaCKZZ8yHFGZDbxFX3oVQsndp1AWV2vST6DV7RBHNs1uaEHfFYi6ZMqupfhwgKxV",
  "key37": "4TRgaxPjj15dJWFeXJqbDXMyn2uTh55TjbVAd6b7ZNLY927NMDzGcFVkJKmKv9e4pfiKs36sxgUNf6E8ZPTe6rd",
  "key38": "YNYnBd2dkermyH8GW7godhtD6Jw5KcD7q7XwQxVV5F5Pqi97uSCf4auQ4z4CjPvmmey5y1AmxmPkiH8pQB7YNCQ",
  "key39": "489rVkMh796cwsGA9z21AstpJ6o3mZxarHU5mfRgFVirkBgkGCncaxTqhkHbWcL4K8aDkgynA9E2Smp9XjMQS8nE",
  "key40": "zcLBdo5DfrqHiYHfdTo5n2DmFZPCtYRmCoWLhutCd33rM56FsvQMAa7zKfY9S4kYRLBgZqJSAe8j4qEKUScTBQu",
  "key41": "5Pen1pyGMQNk3tSdYaQcvhGbEYRyi3p3jPmZAPdoJV4pTEj6cYmkB7xqxFWoNEtDJxGR5NHr9kEaoF532YGd3J8c",
  "key42": "4HsP5kqXnp2N5pH2sMGXLCE8yLxMkkf7gTAxJce81pzcSyvhwpPej6EMBJby8tnsSBSUX6iLqD8snmrpxdFdWMcS",
  "key43": "4G6py5Wns8jT1omdsDqXV9D2zC698FGapXC4CPX2eZvn5UUTL8eCzNG32PP8SvcipwybhJVweEjfrg1QFUePm6mA",
  "key44": "4taYKEPNZw49UcYVFnxPhnMPgxi3Hz6piJievnKxAqdodNJcN6YVDhQkP1ktDuuNsvUSTEoqMZcdj4BexQtQ6QG",
  "key45": "3GtkTk4JPS9MtoxKtHSjpGhwX4hdSQPmBNnyczf4GXuC1DygMZ2QicveVe9FjNQnkBCUyiYkuztGUs4PvFWg719n",
  "key46": "2Gnuch6urQcNzBdwByVry4ohgHdums2HaU5kV41Az5ncnPmAdQTagSTPpCQBEeqfygvYBezjc2rkRWvzHrvCm8iX",
  "key47": "5pG25SCWE5zAw6LMEY9VoaEV3sXYEHKQ53nqxbyAZDHPuQXcMDYW27B7Xq6avq82Pb7AHDYrPxRweYLtE6WAt49o",
  "key48": "5QMqAS6DKp5f2NEekC8JceS4okv796ZEGtFk66YY9FqUdTM7ZyapwHbPk4UgmHK6XP3Mj8HNYgrHsZ5CQNfUj3e"
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
