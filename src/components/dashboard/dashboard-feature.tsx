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
    "3tzEFgtdm6K7ELmAvHk2wkL8ne8ed6fzPZ9DMfGbUCrzg75zbcXQRYybVpjLHLw29VAhsutv8XapxCvPHyFj3DmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32oKozoPTconzzTvAAZXdhLgpSC2TziR3uqX212ziDf5uJbPJoAFCcMphmxdscK2npMnSzWZK8pcLA3vDBwf1FqQ",
  "key1": "5S1NSWciyEqvUrjNPzK72j7cRcq5V4wZ53FvdQfTWDPUCNwho9oT934j8FZH8f5CzpqxU6Q9JJyiD6Np9UjM8Mec",
  "key2": "4FnARHJMk5f4szW3qutMA97kYAHyzG1wnfh8G5oeiTtrK9TTdVzMPLd6ZUNqqpXxDNsnAg6TS6PPADzEPWLLrFGg",
  "key3": "3EAget77iCMNLK85nLVcqpqRsUJrUSwRCajZF89w2m53c2gAvDZ7GQveTqBmyDA6uE3okAyHVG6k1YScRUMh37rD",
  "key4": "3Da7Su2ooyikvvrNuiHq55CuXmfu7SWW7vfBKWjzBrGFTsSFg7q5gDfPZ1M6LCmQSzQQxZLedUD16QikQD2rh433",
  "key5": "5r2om8LvwsfG1DvBKuC1w2jxh4YgpaxPDFMu4J9Xh22LbUNki8w6CTgeHMwk2QfsVFZGnaDguEcGp8fos5VaSgQ",
  "key6": "DVKgFGBSVJdhJJ4ab9uMmdF6evWW7fCbEaERWvJ4ZNvt8hUhEs9WvhzDhbt3vxFQAdZV3QzwZ9HMMCBrrswZPHX",
  "key7": "3UivUaduTAgqCAC6nG6npULSoqK5MRpBurcoFAEb9rQn5obfaRprRSm3CfURJrDEAzMe9JpLKZzLde6DaUWTytKP",
  "key8": "67C4VJ2EmnfKRPbuFiApD8MDLfjVgx92pZvweDws2yGoLaSH7mRtXWXFcWecyCymXzF5JCgSn18Fm1tWNUE1fG9y",
  "key9": "pD5zQmqoH6UqMiyV2dW2DWERvbb98EMME62Hi1RL763X5oTKtKJakzJaYzgWU2HDG7v6BPJoUCeLsMXjkzkKMPB",
  "key10": "3ZxzXkA6TmfQYXW8VMU2h9p3e9ayXZHpPmu8QBo6VcYAE6ktf7pBik8mbRUEkiTacRs2VMWq3d8ybuQdorwXdq5T",
  "key11": "4HoEBcA1UvpZnFobCxTCKXNhjZNbet2DGEe1mPqzNEJFauS4b6B64tjQr2aE6Gm98rdfH22acTqXJJX81i9GRkBr",
  "key12": "8r1zNfFLmmq2ZdUVmwSxuHERwsU9yiwqHZtFv4G9fK3hPQ6E9m4RUm9WhUZQjUGrvM2jRAeTbtiCyfLrvYhigm2",
  "key13": "4p2QFtQDuGLQx3N95DvQU9FXZrXe6EUxwQAL2ZLAjEohrFhRDYfzsTeq2KBhKKh9hf5wX5DWj8XADmCuCyHm8XU",
  "key14": "hUyUyTx2ZQ7wybLWBHaZpkk6E23thEYraSWP1P4UALdSDvN8cGTPeE94PNudp6rebf2QbSF394hMwRxZtH2oS2W",
  "key15": "2Ztkmh8Faap8w12aYmwuorXvetNVAfqc89qTbYxbRsf9Nf2KaHTfcU2CfZmtxMWrEXUJUFmc4QN2HAnayB311vfK",
  "key16": "4WM4TNC5D91gGUi9BGBubLYaN5emEgrwDcs1UsBH5FuWhu9JMA5TePcFMoXi9ZZUqrGdSMexU1Mo8NpEbrrmMBRn",
  "key17": "SPU3h9PGG1YuwERKd7J5AxKiJTJsNmBgBMXFX5ME3FgSmor9HUW8sQ2JgMULStry6uHt74KcYRWeECFfbi7qq8U",
  "key18": "m3QJTwH3PCa4tUQs1xx9mkJ3aVjKXP62g3XtL5k7BGsFMVXRe2UFo8ug2R7KAhUnpdxQ2TAjraVwUtnNcPhBddk",
  "key19": "2F6p19rAtNjPUyDE5Day3iGgFD4BEcgTyfqgHWdVAhAdQw1gKDuZYa6nwRKAJj32XCgGqpHvMSmiA3sKKeogVzTU",
  "key20": "3ZszbzPEpBV4S3xPkehKc8zVD95JwpNReCERS1bjdDXXgEQMe8hss1JTbAok2pkpHq1BMy3VSPYEVoiwhffnGdzz",
  "key21": "WfTCjQ7CRvRovwd1c2VwKcrKeumuA1g7wvyW9ZXWz8AGaCJ7Xz6ogsVLL8M4DgK8HB6HXuPR4JcXyEgDyXZy55m",
  "key22": "58W2HsWnp29pi6LyKoK2qYBh1eZP5V6GpeQ9Hj1PFGnzifiKQuvyTyyrYAovHgXQe8tYyBY3SSDPTbCsYDMmwpYU",
  "key23": "AkjjcUnRzrqJFycs9ho3BtYSoR4a9AxCbyD5m25Rf3F5HaM8AkJTxQaWhsxHM1QfqB3pcBSzbNwKNvNaLJGGNt2",
  "key24": "49wzxaDAeYNPphRcnKuf1UqWRNno8TE8s8L6CxotLn6qW2MBZ9acY7oyXumGJd3kQGMxFYWoze6Gc4Fb5qzX3Yii",
  "key25": "dAWuSHvTZ2SuPrZU3NWEcdBM1AFs28bGxxZ5NHjcb38ZY2c2DsEVnrcT97gWoSqA8YAocqSPmnAofTVu2A5m3Zi",
  "key26": "3fEfARYh9kKkHGdZQULzkxZ3s4cfWe1u954mhmqAr3FdFT7dRGdNt5EsYpfa94Mg4vqfXM5udLXhXKRu8DL6eWLB",
  "key27": "2RAAsjvLDFAiNqc9sSxJEWg2TqGFyYanuLYPGpxSJ8skqhDR9S7wvST7F12uHff5Sb3ATH9TjCicBBEfVG6Wo4dE",
  "key28": "5NJjSxW5zjTuQwtHKDo4QcY9YSzDs7aLEyuSkNXD3sBkv2Pz9X4HZEzso5nq53CMzvjJcgFfuLzXkvNeJiy1qY9B",
  "key29": "33fTx96vatj7hKfUZ1mDux19FtM29NY4fpnbUL8aqBGuivFeF1VqvzsFvvAXEkVKcodNo4EQzH8UqHoFNrh6bpDk",
  "key30": "64iCdfmqK6tGLb2M93TSFfS3d2RiKN68BXuP3gY5apot6sc67d3fzmPQgj7cFHnBYgo7697jZ9Y5MkJvXRvdb6DL",
  "key31": "6JPomrbLqkhe82UR1ZzDijwDch5G49aGvCY2BsfJESjrTdh3yxoVaFyGh3FztooLynBAPkvbpwJHYvrkhZtu32g",
  "key32": "5afDP8KkQa2apQJgvWbkqxFpBeqxrJaaHvWkdFasLJs9NG32rTNYRZG9sXimY1DRTMEmnAk8tNAZrGz5zq3KVb67",
  "key33": "26n9CiFbUJwo8QUtc8uGWyw15k8dg9WbpchtcUPWa5hUBYk2WUvADH9Z9KiSyPYcLXhwBKqNy7Xgd5aPXdJgDMWU",
  "key34": "2ywksqywshEAKXetnd5dqL5RGFNCi7hMsu8bfK2FiBmxozZvcrxC2EZ71SS2GJC4QZHtsuj9rkFA135nS2TTvEyM",
  "key35": "dc6wprTaSDWhs4Tn3kuPxi5h9wp3dBmurXZStvimJzyHTwMvKXpLo71NkKFyWgBuDrbUvLsoFM9LNtS5Vn6nvPV",
  "key36": "fz8eTzAv3DX1oiTCU11Di84fyrRm3NuCd7mvZWAJWHHjK2iDhHxKsN2783ags3wu3t9QBdZpWpT7AFB2XKC8bEe",
  "key37": "2DGSFuFZt7oVwKmWqTjVGnS8VADaSKkKhNZDkSfauEx3BxGkDsDq8gVwad67z8PbJ582dMUDLekZEHSjB74pbWwU",
  "key38": "4JpyfqDWRNLVajkGhMoxrEUHbyDzstcw8mBJmrWgNspvgapq4ZTUSp2XvCPeyR7tfrbbfa6ApNAGQCXxeqPmnkYi",
  "key39": "cD5YwD9MJbc4yzw2QCSK1f7T8fYcAYVyuCNLMrZr19yQhQKiaWBYBbDNmoAio9tH6dEB6jpygzKsso9Vo2hfj2V",
  "key40": "e3Seku8S3P5WzurmxoPxM7ZThMzD3gRMZwtsVDreghTSAykJC38y4gyht3eYJSkPp8b1CpJUUMAy1yMxbdBwSTP",
  "key41": "3ERH9QmtE345djAPczj44LPFQdUxAy1C2FihzbXo5ci71J1jJJWeABNJEp1DPkJdU8agUTgj833XLfJAyuJuZvcD"
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
