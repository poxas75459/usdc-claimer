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
    "4EUUEuErYuAmWQGEcvhx1gFDTRKskJtvEoqtjBadrApY6sGosYr2qTTTqagb2LhCgUErNF7PH383q2eoHXoZFZ6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Sb17N73AshmyD4vf7ubfmrsdhRrf8YGqp3m3w3agUEXPzUJwAxLBbSLsSMCNks916L6t8qmh5K8q3UVNeRv16nR",
  "key1": "3DTDu7SJNzabTS3HzZ36mqP1Q8NELye42rVumFWJbGc4V46DLe6KS1tjPEdLzAH5X87uxJ9uXe2ALLU7GtiSmFk3",
  "key2": "HRGbyzhccgeh25D3wTEoyGtaRQt7jN5ZqEdiWSJhBDm1yW4WHinDWhkZ2qrNfhPfUrL8scVqfDo8FJfwRZr8USc",
  "key3": "nMigwJB9CC6ANhB5ditTdwJxS1wPdG94tYcW48swkoQmLo3uBYbToLtf29S1Kog4BYSXHhVNbcjYATdupDwHSqj",
  "key4": "4E9U4jtjAzqC1v32BMUg93q1ybWVH35RksWQMouWb6rUfFo3MNmv6QVmAgWGZbA3VECoVpAnsdCvpmxM4S5BnN9e",
  "key5": "63Two9e6VaWwQyXHqy61Pz9YGWG8LEcoC9jJpcvfpKZEBnwe669sfqoBpyPF8bcwgimp85p1mKZLUWhWHRTEChom",
  "key6": "5dQMFDuPc6RShhvSDtTET1BCxtf2cerpYdT2eK4cGRyKQ75BQbFRdnZESEUHxia1kWe9ACZfGzewjZzgbSwxp8Uy",
  "key7": "3WugdiNvpwkC4SZeSaogbhzb6EydDb6n6rbyMCyq8oL9NykK7JpEornRZQc3Z7K82sgfbJqZ86QQ5GMKsfBYTvzn",
  "key8": "3UHdKh6zd7LNKgbv8GBF8G2Gdx7GBi3eBpMsmWwq5NhRJjCQGcCyi8rc8r7KW18pptEQsKSsaJSmZM7KQwnzLJt6",
  "key9": "26fNyRbfG9Tbh5gqa5BJoV5GfmEeQHTNrf4Lq33vyR1Q9S5FGCqXRCw3AzGfGCATrCodfVUTBZ8bQW66XZ4UkZJB",
  "key10": "Awgthbs3tPU9c6C9TbZ6aqK8dQNhaV9hLdgVFmmRnJdiUYvep3otzXqERvAhCQtXoCPEd6wwhbXeMX7jaj8gTVe",
  "key11": "5YU3Hfo5bbgcRD6wPQDVdwcLDgpegr4J5SE3P6MJMpj9kdmE4vBk945kvv2ELDeNL56Xc3EQKkw83RLUPueamheL",
  "key12": "5aiDZBJzF11ZD2XjLm43Gpei7GCRoLmW9ay5mTDEE7RWFSFHWenQepDmSQGe8DwWrSxYfZUeFHJZaT8wzU731UJN",
  "key13": "3cKogAuXGuwzY7igWhune6DaZ4pPrkiME9JXW5X1jztxETm8gqV5ohRRErX2WrVwDwxv95zCsj1PsoxkYXqNuFdw",
  "key14": "2P6WnEgrXredjunRdfFNrH8eveWVH5WuFF7zkxGBXsXSebGCvgxKyYu3uFM6vR76U2FU77i2RK3gs5RNf6jPZ9oa",
  "key15": "4QaXwQxwRLMSgSWYAmMj6CW8kpCNQCcsKZQwsn6dRAU4KQqxhNuZPCRqBzmqk7w41xN3QxAHFx3CLm9frSDWsQ9R",
  "key16": "58YSSdmCZghDM7xU17dP7gHjg73xEKqi54sZrhAQaCEmWp5Wxxi3YNTahyowAo5rXZAw3oe2mmeLHiSAmakhc2hE",
  "key17": "24miVtPHhuCgntf3W62r6hk6vK9z5L6MrarWSDp1pisDb9sHLbi7ZM4b9isS96CwV2ssAMy6UmDAqrUJjM7HDwSY",
  "key18": "5zS1cZbxcitFeEuFzjiUyioUHqm5ubzWrTGMWmvNNiLwZTxwTzgkhYVbDanuwQoLCoh2nvNPgcPwL9abdcSKAucJ",
  "key19": "4nMrSMv1wiNR3auGekagNB6U4pnm3omCzGevCvCU4FCd9Ws93DNDYkk5RMT8TMMXLebPgyzwwc3qYoRYBuBnemYM",
  "key20": "3yaVTfPNzaWVWUVhyMJxwzgPxZoQJofixisuLbTJu3xJKTvkzsVEUj9MwR4R5Z99p4bwc4BiSuifDzhdiaf4WSdb",
  "key21": "4g8MSWc9LHSiTqk95jgBRLuNw3gSnuDhxSW6AYrCjLPJ3tUXKDcf7XY3dta4cVHnWG2qYrSgDuo1YD9oC13J6FUM",
  "key22": "cv45m6ND9dUtSTG8wmMVWi9XvWU6BTDFTVnTWq5YxSJfH6fjWpEAf1KVAyQnjjj1C4D8N7YUJzdxbkfDCYi6tpW",
  "key23": "3SZJ3q1YxjCFMZf9wiiAb894AwEcpdmNAMK8xBy7xHj1nZrMcQ6id3Ws26EBSX9d42wVmNTz2zGdwTpspRvopdAD",
  "key24": "5Lkx7ZopkzZhGDPFuPpiB6sVPcMyjFbHVDgK9J5QA3q6n61AF81rwCLTUFaMbcCbGk4RjSuuab6aSJmkRAjPLGr7",
  "key25": "4YNNmbEhLGwvLiYRa6h97XzBXX8CLtTdLkdaDF74Q1C3jQzYtP1JUAtXwY52w5wU2QvSWGu57SKv3twipYbGhRye",
  "key26": "4xZvsB7Qkof8JHS3km5sVG4SxCb8YmQeMTWZ8rjb48WpBLDnjY42abeqn7fVLmFRnnd8cgRLa2oYPm9sAkapeLZ3"
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
