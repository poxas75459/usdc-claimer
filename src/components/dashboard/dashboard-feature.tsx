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
    "3jg5sJMMPq3DnYSAN4hQpJp8zJsFjrKVkb4NraZfeQMSXhnexWsSbE54BCtMKcCAEvmhfz5hHEav5m7UGShdpjo9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LK4VDGvNZ9ky2fqz6MiZ1kg59aLuAhtN1XcoKspGAvvdV4c5xPWi6XCKaxo2peuJbQEGHk3tjzGgGXYk6turYC9",
  "key1": "4cVUQ9nz3PkuGW9b3gEFN4UckwFqzVeC639pNJAuAS3ZeHVgsykm25U7zdsFnP49qppvYtZFXeVDHtsG8YjvsU5x",
  "key2": "2CLk2humEv9cEw9Hjppo982QAhHPqc2dCFDYEdufiQFDuXgHVdsgDTYjDFhFdwWgrdtBkiBzCn3zqYr2GdYHGoLL",
  "key3": "2BCAu99ExhaCaHGpcrjdzVTtacUB6DYLRQHiKjH5eMuQjEG1FGZ7CMUqSEz2hb7Skisi8cnAmfnsomaBjRD5Wgbk",
  "key4": "Kn1EBimoCFH6USf837zYGLwp2xNzcNC4TMVhawJNQeKxqbAvnbRP32vKaWvkBTudWV1PeqpKydEebrur9vEdP4S",
  "key5": "5HvhekPiNW9Gq7f7gY7Uo2rBCTiP7gSx3rC7aWjNmd7ZTLwct9LcE9nezwjHyLP49VPzy6jLkUw6fd6G63Un9mjG",
  "key6": "4KWyM2KDJYFQu4J8iSyD88WNWzYRxLHHgLoSX6o1WtKVnW5M8hM1B4s1KEqu2heS6fMBy7ab54UzfHsxR6w9f9XG",
  "key7": "2ZXA3VY94GuPBTnTt1yjWLYeiQDwFxgefyF8rXu2pa2rZkKjcm9g1HJX4317eMWfRYW5kkTakPmti9qtZsR7FRxr",
  "key8": "62LJW8JdJMzN5PGVHJ4cRnv2iFnCbVeQ4jj8nTNXkEUmSo4cKXJ1suHthjDQmVpr3dU9gJKt5wgEjPbxxbhGRMju",
  "key9": "5NtsVxBF9TM25SvvtnCJLMRjfXb6hkCkCX72poppP5pE1mY44spceFbAR6C4WhEU43re8ststRZxDgZykE5ACxJf",
  "key10": "4K4grjeMSto47RQKEhjpf5K4x9ok4sgmzjrGiUZjmvuqr3TfsC8LYvdYuoVmUrQe8zy1Wktk4xfvyy1Dxd4Fa6Tk",
  "key11": "2aZ7c48mCS16JLqcVn24G9evijD9MrQ2TS5T5JiBW5QiYdecKx2KzZoRpmFfQEWATthsGfvMfSRH3fRfcpJQ4Jeu",
  "key12": "3rxryJKZgbMp7z54mSnndmyELp3fwbSWNACVH4TqSw3XbpDpHL97dJXcbkUxVGgmEs2C7LyQUp7Mt2S6Ro2CVXes",
  "key13": "4wvCQB4YRigz7ddcEcbG62NUeYzjYucXpN85LKVPjtZFWTMzsaNugV2D2jyBnnmVX41AKZSoFQfTsPQ3EeqURsyG",
  "key14": "4G8Bsrm8RG3rjwynLnyLX4LHgLpXgSTEGcPWFqZxP2F1enXPT1VXehX5XAPpLWiLWL2p2BGF1iYfsP3xPfA2uvcY",
  "key15": "3uA9SDesodxQ4TVPSEd2pNbAp9KDbX7LBexhV67zh78p4jU8LbovitjE7UfvL7M2QkpFo6kHoFU1beXoPFQULVAS",
  "key16": "yCNtuqCiBwcARkxC6Cxtf46q8gwTz9jvu3sxaYxQptyAnUbo53UzXN7S2LKsCk3U25E9owpdVrH5oUmnUnNCjwJ",
  "key17": "42TarZPWxDjsaSEUTxY7pv86ei7PXQ5ea6q5FZzacQSkimgcN4P73DuBuguTNiLprdx5cJLr3oLqKPYN8sMdT5Pw",
  "key18": "3WE2jjKSNZHYgZgEXTLmcryW9zsfsPAkC7iMi52sSfB9WjxwdvzCr4WQDW7jbHWKmHejcghHNkr8nx3ZVFbxDLEu",
  "key19": "5h72CmPPPAngw7Ju6WbkNZ1opDg4SRT6ArbqWoZJP5HiwC8omte1DiHqDEsPkWChCPtHNoVMbFF6STD6aQtVxTX2",
  "key20": "5EDDq4AX4NZ52ZcUt7rXNoZgM9BtNQy7mMFqfEnuyJ4ZDsrLYvMmWUujL9jLF1D7FW7NZd1xpqjJVG2PvYitkikt",
  "key21": "neKE5gq1XK4rpwKUuXbYM7zEwn3N4EL7xXnYPvF4TTfKENGcYMua9MzS2YC9tfny47qieXsP5ssW1VgXPyVeMcw",
  "key22": "41nkmNtZKou9wAjHB6jay8L5Dn7RtUdozMZ7kPTVi9gUVJFzF82JGpVab5ZNuBZ1vMxrBsXDp4fge2ai7CEgmgpQ",
  "key23": "3ZuRUfUkDkm2JFacrXQ7wHMzAX1uLaptgi6J4JwNYfDShQL2JGsmpAK31k3bzvVfXNAoPUzgAbBn6ueqgY4YcZnw",
  "key24": "2a9AidiYqfwz8PomM619d42KH72QfFXhYddAhCVXY5ZhDJFMUR5GgKyPx2ZqSLRZuA9cT3vFVPtsQJEmrWAhbqwh",
  "key25": "3YNYbZUyMnM9gpoCYznjseRzjcT9MKGVzjvdhRQB6q5T5PMD7SVcqG6UsFGrB4EJiqn9L4hnYymfXYaBE81YKY9h",
  "key26": "3QxJiajhXRuj7eUgyjcAumACqEocjR6t2p6fSURkDMdZAQLPgxNxHo9FsTXpvztiPc2QD6THC5ATcnZWJKQAtVdk",
  "key27": "4fatSZnQ7NBAXfxNE2hP9M1zchtw4GNBnuWHRVXkoSRoGPnsAShuTJwKqcQU891iDyqCX8fsfm4EsNQKAUkUHn6t",
  "key28": "jZc8WTJCxripQEUY2kX3XC2YzgwEF4SsvGW4rHHs9pJ2psSvWQqnMvask3NHogf2Y3xy4vMP7BgfuSXDCjagT3i",
  "key29": "5iEpburs3t2GJAtaX1dB63ehtttmhnEb82FjpACvBP8SrRA2x4afFfbq2ndyKpVvdseKXbitNiyts24UrMoiJ63",
  "key30": "44ZW5xTrTbVcp92Tj7W6xRYJeUGgXSHHxahh4M97EHHx5m7vypmXZA8hT68xKXpLkaBh6Ac1LU4BsxGgYg3stmRE",
  "key31": "5qyJb71gvQZyxbXBySSpbetgmxCd9MrU89pkA96n4q159b6YeWexNDqsfKC4pe9HMReJF8hNEPsHFm7AWSiJPcEG",
  "key32": "45tTMPFqTAj1yNpJRfGpm7m8rM3zdhCx58zbEkzc22oSjBiiB6GGRdFUDBSo1xzXErYays98Hdx4KjM78Wb4qKgv",
  "key33": "43UG4JP2wqfc3QYu3Z3fgtgsVma2J8bLvx5z2d4UdEhrh91ppSWjMcYPyXzVocnjvb1sjzp4UW6792qGkZgvJfa3",
  "key34": "3XmmiJS2dhv52yinipMMsPA69wtu4RcsFdqLUeWnxDxFyL7ujPtwV7x4zVDB4xaQcdzJzidCgJhevuYaFCsfafxi",
  "key35": "5ZeJam7AU7otVmtSPct7nYRcBGry64oqKg79MzgyVnAMkFurWswiESP8kj4C9iSduWHjWCXtyeymWjBFu5p8JbsV",
  "key36": "21bWtX9pSRdsD1CwNA5ghKbLscLWk2revzP3KN7TArsCddtFu4f4Kv2836mqThpuy24FQnivrFYLXjWTcMcg38Sf",
  "key37": "5gCHMCPyP9bR9VRkxoES1jFuGfYA8D9p847MfLATVLpySMCPf2tw4Yfd6EHxV8UWx4zEWcrz4e4B7AYFgFZ13N3D",
  "key38": "4QTyxwBTtqNnYF1aKqMtMDkfoDQiB3LGrevYXiyCjYHPpd7DzUhDbCq25ucLfakYWzEziPxk1m9w3h9xRzaKTGxC",
  "key39": "3ygcpRfPfYDHxTnqjiogk3zkqU5ZgLUQ9YkcYgii3ozayWod4YRszZ6DuinBFkVXKcMua7Kum7pmRJZH1siYcrb6",
  "key40": "3E1RCwqWMS7AyCUhns8Hsn12E3EEzjb7k7dM5S8bkuJHMLumfNnZx1Vd9bX4f2fMmNBUP6GrgiJmCfmmKTdqdybM",
  "key41": "f9UupwgghqU1rFrJtmJL9tEPDf58Lsz3dueoUUBRUzmoLg7mkWEJZzErP9u5JuwTQqS8c4rzJQERPVR93wmSphT",
  "key42": "51bHDtXNWkj9B97BXrbWtw4NB1hicBvkdZYAMnL1bDBx8UbVjbEj2SQCCokoqWBA3J4nSf7kyNmeSVKeiTY1MPVR"
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
