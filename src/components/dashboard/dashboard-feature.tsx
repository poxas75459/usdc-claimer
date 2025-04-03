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
    "3PNdvJf3PSzffCf5bnKVh28EB9VfX9Knak2qAcnq5viK2xR3vATkBNj6exM7CjVm8mGoiGZgDCDuqGD4zhqj3iRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HRVtk9FgyKKeRWp76fem972Hx1EPqhuMoXapDBuAENitRATVQU3Eck6FNFxnT4p9qFVo6n6zr9rRanYitsUsWXk",
  "key1": "4YBEKdYG6TiDxJZtFjik7TkfSUgM5Mr9JTGLKujvbVo8xdQ2J4S2CWJCHWSSzZz8FUpznFmnL4yCF98TErZTv2tL",
  "key2": "2n1cUGdVZhcJA9uknSSuHxvKfLBUrTtWM34ZLhCiLGvnkXZiNSJUPoWSe1tY1kThdNPgF1VGa7bDb6ydyR2wZtMQ",
  "key3": "2hLzJQcoDdvzj1SfVrbPw2iz7RVstsA1gfE4aTGXyih33CTz58ENA2ZAGYG2KHrGhzZvEP4TvWPRU2vpDriMrjic",
  "key4": "KCuSGrvXHo3PzfaDbnyZpvch9suM5iFJuKaQxovCbtwMNAEodAqK4pGicYwXhTSnyTBCK4aGGXSXh59ed2mXvU6",
  "key5": "34wQKjqSREVfdD2iKo9dzSrcgQqCoQKkLk5rJ7PUxniEUJq8hcRxSB2GvwWXjfKseYpucsm1WtxdXEfRMxFURnt7",
  "key6": "2kwmEwgxGuxc6qkA8kxREQgbxjjcr3u3UNqfEKyf1AyosJThs4sdEwnyXEMsdtVw5pBKjHEVqmqLcRV3nYtnCmES",
  "key7": "ju5m9FtHuv1ZnZHSzh6GqazDYahFb5j2iQ63VrRwRTHNrPSm6SP94FRWjVL5iKipTFbKa4BKhaAWDu6gZWLz1gG",
  "key8": "sFAVGPqfQBNHcZzsQs4CH12icPVSqGDA1N5sJQxgQe9AKMkG2ghNwNtba2obRbD9xU2T6K82vwtN3px4v27PwHt",
  "key9": "2GNmhrjAX9JCheV22v7Z71rr2EdEKWBrqABq9b141eYrh34iBc8PcjyPRHA9U2UE6Pw8HgMaCCcxUCHsWkPvRKCN",
  "key10": "3kvPS2yH8Xm85nSX4SzPxBUEKfGcgnJCok51NRCdZmrkLnXSyXPpxWhsQjUhevcUJUQVJwZF5sGUJKyqb26KGC6R",
  "key11": "4HYCDprgdCSkggnyQ4pKVLX2i3oxuvnxYgr9Nrh52jdbqjwiTjeG8Pp8FXKTHGviB6tRP5cwKjZFKvTrbRiRPX9F",
  "key12": "5zPpXSvhjK2yhkuEW258kj73Cq6JPPAFTuUfRa9h9n8MGDB5P5RHqVS3CqoiPP3qpu6CjqC5u6GbESv28Mnqidhq",
  "key13": "543GTeqUccM5iyAVydJzLc4vb8wb12i5BzgEPMMARtJfU3pPZ8rvokMKjP3EjwEbXvvpnmPXsc8qynx1C7gsVejb",
  "key14": "5B3s3T4uWkQv2GGVGtvA3AYjcoGwvhU1aYJBDoyMadsGVd3wQPL2jrW28BwnttDkhXiud9F5cTnarGrXNtnwtn8V",
  "key15": "UwL4oXbds1EFx1CCYUvaVkhjDfVdBz9S84WCF9diMFYEfBruh5yFajRcKfuuMFWC2q4b3oQaC9QCqNLRp45mqiM",
  "key16": "3DESKbFf5XFCRDereavVvQxPoUKqiWkLRG1CNHvJvJFPEVvi1DxCvSNx4f4D3qynrKMznLZRqH6SJGzgAqPNapBg",
  "key17": "4sLm4tXkLStC4UxqQrjQfr9dHAqLecFRpb558gSZo41WaaUgFx7oyRnZMFwnVJzWmCU4Lo6LD8zo6v541x7BDVcS",
  "key18": "42nNnUaoz7rSM7Q31NBJ9Y9cexqQZT8xAq5HHreHVMbDMv8B5tUu5Sdp9EtVUtvMhtL3PmzUmukQB9aioqkytbCT",
  "key19": "2po8TSJhnGV5HmnNLZf3sKLZTHEjmSHAwD41nV2BdwnybF74zPicRbns4cCd69pRwRhzd15WaYcnRYz48sqWdmwr",
  "key20": "3Mjsh15j2GKfiuemNK3U4rtFJDR61udXnYYjn2VYHoo7uZSnpQus6gA7aNnWiRcDXt4uiG3oB8msoHgbrGwRPr31",
  "key21": "5uQ9KVrrHEonLbBpsJQaswBEvRhW4FkvXLoA3rzo4z3LsmguK4pE7Nmki36eRQVpxjHrX39whEvDSGZUGHptYYBe",
  "key22": "52Zp8RWNkPVV8srw2kvoeQ41BURFFHNS2YMuakEg2ws7WEWHoPtS6NVzcBc3dyWFy8GjRq6HiPtauSQB7AHFjv78",
  "key23": "4FpeNosomKY7Yk3moddMK2dKPFWQKog7ApDsW98KWnxxySGWEK66TAJA5JECsRWfAph2aB8HZPaEV4GdqZqfrUQJ",
  "key24": "2YQJeoTPpRDEjA8NEDisjHWkC3XTtg5CfpJSJgnNyxgBkKkt8QUxeQEQ2W6bUjxyzQKERXqNgAdRXyL4yU25keRe",
  "key25": "2HdxkzfTFdNhoMM78jP3F95SdLoR7y2gXV2YB5MBbsxzTsnH6ADXprrEjgdo6cmpNKPva6zd4AntvUoknmPu7NZv",
  "key26": "2F6bAawF5GrKPexXqWKqZwv1jdLBRi3zSvgw7KFExx5eDs8D8sYsJsirZfS42eVdgFihGgZMRUeGFvkHcwSyYw86",
  "key27": "4Mrz8tmxHAMBRcYY9Vnh5W5dFVg7NfHGhnoEJkaX6oQgpvV71a4hSiBeB7oMZEefXubcYUNJjKPNZZeiV5TKkh4g",
  "key28": "4opGB78nasyrFoRsvpzDufjAWPbZEXv65ugQ2N63w5gnxa6F2ndbUbbVbtToWUP73B4F58fe5XVjGdNpNQCQSsex",
  "key29": "27E7uzuUFcDsLer3i9QNxGWEeEpBoZyCZetCS6KaMN68xKZ9m4HfhU2u49fEFg8EJd3hv7NzVouGPp8MZegW4p1i",
  "key30": "4SWHbuzXPi2ZwwmDz8FXxLqhq9VCgCYEct166DRsKFRXpmNXu6o11N7U54iDgfQLLg4MDXZuN6dH6EHfJuzu51d3",
  "key31": "2Apb1mcXZQuySPELvyHeRkp3fQ6D2oo5YZu8w3beAjJ8KfyLxXdvvUWtgH6RKJgTQcvTrxfAgyHLNEULx57QrzPA",
  "key32": "SzZsCfdeo3Cx9uehQQtC5JBGedhgqCqUsbjCtw5sFZF2bkz3tj2FdwFboNecqW7c1beF2f1WrhWCqgM8AFERQG3",
  "key33": "5LJxSKwRDpxVuAXB7fJYMUhbf5V45m5J54DRKMoaeapvgPiQ2nKMSqHvMX55SSu8AxQNA54rZqH4paeBHBP228vb",
  "key34": "2pBGUkPKr34gLNbEZRR263GXfvtokAMNa7azTQXzBd9PXkq73LwyuLMTjiRyp3eFGLyxC7UXmBZnASzHdJisqect",
  "key35": "3XM8zBd2n5gAtVRQy7Deu2Hjk7P7FL6Qa5K5jykgUV9GcRyqz1Fj3ZSUk1PurMMui5WrHbhpENfuQKmpQ78zWh7x"
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
