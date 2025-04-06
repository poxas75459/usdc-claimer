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
    "4JescWjNvPbYThhrXsAfagUiUHmmtfNJQRuyXriFvb2Es6iH5JHCYWNzMY4VCaC2cUjumSezWD2yyjCK8U6WaHCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8SgmqboqJE9qbjqswedMakyE1utRNKKw3MH2LCjZxxPzQKHVeqLxfo3cgPabsRW3nZUNxqHchenxx8ySUiHHedb",
  "key1": "5wCgGvQYRYdXnWJHEkrZ8HAjQvjTx9SPtZsqj32G7Ahz2PW1NmYHxCDjvHZbA9mheghXNy9CDEvPEMUD1byoqte9",
  "key2": "66r4BeyMGR6BBDa6bGrCGS2rkN9F94qHk3rPeUQ2AwLQ3trTvHFay3BmqYFtkyySnUSLDyZx1WWG63aZBsdgr5cM",
  "key3": "2vXBEsahvmj3pg4gJbZ68ZMWKPeukPdX57dFYcKeTtc9qZvhehBZiDYcGhsKAGcKiYD8KUJHKMxX6ye4TWW1HPWf",
  "key4": "JYVJMWhWsm9aejPfH9W7F8NTRmVXEohgQJGtYBrjAbR56TC2MobneETS4L3ZdUdHudrK9cvhkENqs4J91VFphPP",
  "key5": "DdduuPS8a7xtnTc2fETFuXDZjLMDaSb7kTPmh7Eog2viHMb2kLerVWfEGshbwvFwUfrZccu8CoqVD9NBEFRXsLs",
  "key6": "3ZP1MUNVh7xPSvoEW95t7KLXBgewcyfkBdBtDM8UusDSJkVHwgN3UMNF2rQ49azbMq5AH4J5qwHUz7Y2vAFVu2pB",
  "key7": "4LvRAEqFUwGRzaTNk6Sr2dQjAxHzvhyzi8JattkiQ9Ya8Fpoj5VqMMPUZ6X9kmmgTdgSnoTpJbBVkUV8kUjahf7t",
  "key8": "2C5BV46S1Ys5EvR3ai4XWbK1bFxMZZxbh9AzC4AhCEut21XfMK77Lqaa1i71ggJAk1PFVBweJupYMq26ctDSTnEN",
  "key9": "2Rj5mtniVxq39ZB1piB47SPFyppj5W6C6jfscJKKGpHPvNegD9jiA6VLgGkqM7F3UkJtom2vmJ9zb3QrYeLxPPYM",
  "key10": "4etkYfN69km8mWcRKkkJmZARhGWKECgVTudXypk3dVBKAL2777eNRoryUyFsr7yRyzPBzXzk9U4UkMbhLHnktaNv",
  "key11": "eo1aCJ1sLAtiyrd59umrPcVZTKpHDawkEodpmJyxH7qPuCmUVxH2NGX9rup5UqaX25LwkvnppjD3geQD6yfWzWW",
  "key12": "4zJfup4XnY4TGMr7HBqPTycHaJCxpN5kG8mWVHwbRQPdewTvbrU4xZsePdHynCJEWv5PzbZeGcSX2qpvhkuFAUsR",
  "key13": "44i93E7VTa3jDMWN4wJVeHwgW76wFvzhKyXEjpUKdDFUpA24gn5mEYPf2aemdomv1PbvKJESXFEraaN1of74PKye",
  "key14": "vc3g3pcpX3FDeHB5pJZAyE5m27mMQW6khF5AhusdnwGc1piSQf7hWeEw9PRss28ayKZrGJJYQhdScK9uY3UuFfb",
  "key15": "DGK29qmGbXgeGasGtAin6Hvh7ki16Hq2B55R9KrTXrXLhyR4jWx2nyPU8owdaVgZxXiuthEGXZp4kXWWBo1a4AV",
  "key16": "3e5aohsJSJudDxMZ5pbKWE53qzVffo3mXFvAh8cFrkh3fP6tNQHRsJbFSrit5zdH7jbtnUZUVZnqFrqfcu2NGcwg",
  "key17": "bK47mPW5f5zb2QxwR11VkkbaeEewvp6BtuKMcvFan94THB9VtaVWGXNX5zULqZpw6y3jgefg3Xt3BLLq4mhC3wF",
  "key18": "3MUzow5trrHmiFHzBJoMGJdfbfF3PNvU4ptpR5ssDUpXALU2NxEvFiFLFb8AE9UP4jvpvgqkBjUbgPfp3wDd6nXE",
  "key19": "4b6DmiLN6LP4DRDa5cYKXVGaEQuT4eqazXBNSaN82QJcyM3cYFwA2buhZr5Wrk55sv7xurxTL6v3NTpG5povQAKW",
  "key20": "5P195pKLXw2zpUzZQzB4FnUjGG1MjjDsvDbqtNJoSoQCPqV5szbZcdc5RrGKQJBDBrYkVNSe63N79KRYzuxDLGvq",
  "key21": "5EmdrWvrrkPmczBdB7vBLhH6F3zS2Hy3FEW6w5KdQF6oouV9QDKFbcXbpVJVZb6LdhZq48gc9wAt7LhfTX7gbAez",
  "key22": "2RRhfd6oXfhpYKvmhqV4mnD8vWYZ3YUMT7w5GX9faHmEq9PiTMkGbhg3T4oimrzPBBLZWhto11Jyi16XgJ39qPqF",
  "key23": "3Bj7JcCQfsTJ1n4rVWSwVqqydjUuzewvVF9TrWgz56Gqp7uUi5FBBKFV8TXsMzNh72Vgt3usfcaUuWp6ojswnHPK",
  "key24": "494NczF1z2TbKjuZnQULEfiSZkoYCGQA5CQd7gSoF5t11Nr6p7JrWQKA9bNBZkbnaN6CZmzytZEGjqBJznQLtVan",
  "key25": "5hnddQDg6zW8YVh5zyXquuixVphGCTVpU5QesxpsbBzbRdEZZ9asGGkpbrTLBfdbqQNeqMgXDZDZrRGeWTvGXTuK",
  "key26": "4BTKiwLRbGAXr8xcHNSQxGwJ671sThk8162i2igxhD6UsYhTMHh15XUn8F4crEXAP9acocqUDnpxFvwywEvhia9r",
  "key27": "4jB6SY4yLWUm9a72feyTs3fNNVwrM2UFag2W2xreMYnjkGW5NS7S267FZmWnRoHiBUNgnCAwN97aMQATeqB4bsZt",
  "key28": "3VW8tXdduTwKibmEdfnr5QztXrz4CU1wdLuYnoCsVDh5R2D8C2mEDSMH5auPFy8irK6ygW7bVCnmndmfYAuYfZR4",
  "key29": "5vaLK3YRUkW5uyasrAyBpuDNfbuPHrSAoKRkUwk2Uz8EintP29Q2yyyfwnoc1YgP6M6WuzzEBbCgQ5vEzjFZdRrH",
  "key30": "9ECML19DksnozMaGPUKCi3jAN1VtQdeXs9v299ycv2o6qr7jDHdFVAVmgaNaHgXd8osc53DDdMNpUAK4iZWY9ig",
  "key31": "65BzmR1KCRgk94f3mJ4RGfCmkvdSsgqsUNQeeznBJVVCUDMRfPRBiAyzzHa6kdB7ApiLtYUrFZtDoTUCJXAGcbWE",
  "key32": "3qJg1EQVStgQSEv4LeicdW141GQ1aeNCQbMvuftkVcSrtJ3hpTdmHfWUyuvsa5BGKZsXv8S7HoDJK2EuLW9VtQvW",
  "key33": "2GCXcrcdmn9szp1PwcKMQEokf3ePe2wb7v7D3Y9W8MGmBjMK7LZyBYGPeYRWZRj4PfG21NPTBxTP9YNLZJGZ1pLQ",
  "key34": "4ghXDfMEAQXj33YGhKWHLwXGixfyz4rwR6EgbndJ7CQDyGvQGntLKDTs4hdtFCT7FHY62UDc4W9c6JLVFSbrr4Kf"
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
