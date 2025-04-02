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
    "3F28hXHX2jSXkpuDRVz5AewhtWfX377WuiHGszxJV7e1EXLrXhfTyYZiprqnt59dCLPdjH2Y6GApyg635YAY6J8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LEjAjAMqcKtCopKFZxYW1mHqUxv58YeEQfLxR4ixkj6arRZi1AyGzWWWXmFpwXpGWsfM3pH3b6PEtF9pyL674Fq",
  "key1": "4UMtVNZRRDcuLRZHTFTyjF3xYH1ukh3A4BSBX9FQiC9iMPqEjQvV1Y8sq5cbvtfJ3Qs31y6R7fbpjq6pmgzt4w1P",
  "key2": "3bFsiXA8VXiar8gh9Z2J8weRJvf4QU7sKasaYWqPUD29NSyJAHBDkXHSCWaRSYmKCK5yGzZPX7ssGBGWtzXbgyvP",
  "key3": "4pqxWxUoYrtpjh7BJtC5pkHNt5ceiLFjbhwAfakacRy28kMmJia5iYA4XTujSYpRfpiHS7VSD4Km3aqFpKUSqXZ4",
  "key4": "5TAGJZB971SQYWZk5biyM8GcB74r3e6J6YTTPGQR5iAJi4m2KNwMM5jsvxcfQ4tZ3HjVvrGwgSKpsCJ4x4Rcm32Z",
  "key5": "N32sEwUL1bMofT941nZcHpEcK5AWbopcpm9qzMs2qsb96PniBDemgjc1Apgtrja88TTrHUrZsLTPZVGfemtV69K",
  "key6": "nhHN7V4JLW6mS8pZxZqKwJh7nrDpYK5UPQGyvHB7nDs1yTHQFMpGdBYhhhq6JKGfv4Gjs4s16dQf8RNW1JiCY9Q",
  "key7": "2VBw8GxXdMBnZTTRVD5uzqEjxDg9aQCtV5TekGH7kjpicR1ygRRWCVScrDMvUdNLbfoUKJLsxVvb2XW7EAZVYtpE",
  "key8": "2Fb3jZH2m3MhkLskW2d1wxqoPnQxB6HYaBLSBTDqYv35DbvqdAok4QLaqRAJX422YKUa1e7s9t1teMXsxNcXSTKn",
  "key9": "2XYz76fPJPQgi7ysKxS7toM7hiTdZ4quieWDjQGgvMHbYjrvoMWdSxhVqaWREZT7Bih6BgVRqpH1LKA4fD3yFpRj",
  "key10": "64SNmB8MXhxRWJsBq8bG8jUusUcUqJyBKiuLnoN3sSdqCCY3JtnD2zo729RZY63VVidwxSdCLobmRSFhJZSrzFXp",
  "key11": "67Gcpc8MpGVaTBaPby6WmGMqvk7NptD5ofh7dRKS1s8Rse6JQfqrfKP36jNKJVbAKQLbSUWhpkHRCQ8T8cMcFCq6",
  "key12": "5WRs5QJmWWa3p2r7K3mqHL7M6m6r8u9MP9gvEx7VuYbKX5JGNZjkP4CbwrGoujo3hvTuCrKPjSX31sY3c9Hf3B1w",
  "key13": "4P7PnfDLuHZtDsYJrp1SK5hRKQmgX8PBMT9vmDuAenHPLDH1wqtnqdLhfDctd5BD29SFhFZkdfQi4TPEnMQsJw2w",
  "key14": "5oMNJYq59QvVohezbyvZQJ2DCU6diuWvuaYVzRaLsLbegQaP54zK4CUe1ZbgUW8gfkn2t5KECdSXq146jjYnb9rC",
  "key15": "5o1N2rFBWN7Hqb13byo8Z3KdAaU3W6668X18r5tkr1M1ix8x5VgDS9qHCPdaNaTowMYjoyCdYTSwJnoDzBkDMYVA",
  "key16": "2mJTkEHGDmA2mSnUbQRNs5eFeN4vTA1jvJCHFSk9oUtov554ngs4R5MUTChd8aRvKaPGNRvyboqKwaxzuvDdiG4x",
  "key17": "5FsPtENJrR7WtpFd3JGywmgKHy4ufuj4RGNfV6nqeexcU7RqdhY4wPfsiBgUYAz6KfFzByYnpqV87Z3M5EbWwF7S",
  "key18": "4f6w8pkYB2FaVgLy433i44oTRkgRbq8kkeoQbsDbPMsJb53wYQF63CPQ4qzZwoqw8E7m5Pbk7pmginV9DSuZ8tUb",
  "key19": "SVkcthTBEDhyRQZQY3Bb32eU9eQ7Usozf5gKYWFdyqNgzny6gCCJuQoZUaAVAKdrtd6m2XPav3RpoU49xfrRy3D",
  "key20": "2YGPK9JSXHRvjE5AH1paAb8jqq5Jw4tnwKfJWBiTZFJwsAD3QBmLAWF4o19k44DLMtBnKCwu7NKNqZB7wptja7wS",
  "key21": "2aqT3WVrycAzMf168qmiWXvcQrETXLndSZ7VQPkKJkVfh8mhup1dycSxfexDZyrLWo2KAjfGVTkionSAaEHuewCW",
  "key22": "34mtRr8myVxxT7AtbJBWzq34ihfEEynDJLU1Mmor34TbAZy9GTV7H18HaAQwiY4Pjz8ht3opTxeekFeDEj5NVUR7",
  "key23": "3qrhYRPZpuLAu6WSyqMeGdQCYsYTEMssSGmozdkCfJpHKo9S6qTnekasCdbv6U5wL34z4jush89GqfAmPfHNJ6nY",
  "key24": "5npEavmqwdLbUmhPA39S6yuwELwBgrna6rkxaDk5iuo7GtmRM68hShsTBisWZUjWSRrc9hFnDoGPGPWVc8Q61T6Y",
  "key25": "2sAHSE14rPiSzhvK7hF2iTD2ocVaHg9Ra5Bgtr9sQxRPYDdScJbcx8wjMvc5uaxrVhuhFvgeSvasWABYfQ1LQedX",
  "key26": "VcctBynNVoGPXvoiE4obM2VgKF9eWnfB9GqE4ZfeEmR85t1wrYruDvT2PCtLD2LZNWXnD8acquHo3jDxcbsiTMa",
  "key27": "1pebVtuvgU1qMvxrmPeErdHtebEQEWbYnY5Ti54sTDCPNAaYUtZBJHsJmPehd3B2UEirw2b3ntpqs4UY34gaCNd",
  "key28": "3kDDXwEy36EV8W4gCDjCK1qWDUWsYqBs41KyWjm4XZHjzBPBGUN77CtKypexYBGMrzZ8uEkBd3jfWiaT2kFhc3DD",
  "key29": "2cjQdiC6qQRduYsYsdq2GudLaMA5s8HMruuf6QkybP8wqumgptD4MYwY1WqsT8bpKnXVuAqmPJk4unhrCxTnoTRM"
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
