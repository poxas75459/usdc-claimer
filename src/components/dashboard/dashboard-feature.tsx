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
    "27x4A4FLmspPwgkex6zuUXdgLZeajrEgVUJzimKy8u7ornDqrBEnUgtMxrhuqmDwhaQBvpy6HfoRYnDAhtv7CFun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FhHkpJRYgycstJUmL9jjD2JxPW1gqDFqJUJ7wyuzun7xzDjaXHc1Hcwy58FERPyMHwzUUyVepKBcSXhDnXEt5en",
  "key1": "2V1rMm7qfwty2nwymE19V9H5hhnts3Jw5vX8Q1Bc3Z7FgQ6XQSoq3e57cqXYkorMHqJ1AVbs9M8Hmuf7ozXV9nft",
  "key2": "2daoskyfApVmMovEesQj9hdstjmq4sJsmrD54eCn6xCpGzsw2hMqhhdGqYAa3CL3rpH8ofF2vCXXwhxkKmxLxScV",
  "key3": "2KkHsdCypRbAH1LykbKv82KvoPhdTVEWjfGCVtA8aZRZcQnvZf2h7im1RWEySLHGjghRgbJ3ccSF9HwU78EQn5Yx",
  "key4": "3SNvCfkEEt4PgNDVMJpiCimk9oxPHWNtg8fVyZQCTuJNbkvNcW2VNnyScHZRTiF2GP96PALwbU2HVNvz8s2mdZAy",
  "key5": "316JGNbKPQKLAZKak7aaWCHkeoB37k61NpRgXDaehLv6EtMSuPduzMTNhvxMn7RR1nTbgKJDVwgSuVAuXyxZbxVh",
  "key6": "5y5XWLfFShAvPnW5qCAt8G6QhMEmkfQCeJwA11Egx5n82QFLatBXSqQmZGukrg81CJNrjvoqS1bu9KXkBrwciV4T",
  "key7": "2EfBffQXhDeTCRKt9deifD8ahNQVjj4LsGhHxFbfKses9PFb7cmGXTMDFXz16RV3wft9fhXRJQDfxV3SYUADqW2t",
  "key8": "22gUwCM71uJ1wThTQq13MDwrNTy2ofprQT8bD831XYdDtoGzPUrERQxcZpqcgeCrKGrrXHM2xtByB2y5kTcPjL5R",
  "key9": "51gHMasdBSs1N9u8yiestHsxGN4FAjrzjmerZMcaFczAWGDC8uSv6p6KCjo99ZQsRVVvHst9MBtQn5KzFGiCW8Fy",
  "key10": "3yaKd2n6FNz7A1QfvQxjsbWCS3MLKc9AyzvhA1C3LQsGxPZoBk7MPBCh5ijMrDbxZkWYcuNVnrCK5WyhkiivAxDY",
  "key11": "28c2RTLv4aLrdRnGgDGbiBepjDBiHRxRpdYFN72ah4CAPe4zQgrXPGpTeLDKBT62xNuKEvccvezYuQEycs8QuCui",
  "key12": "2fReqiQ7tJXxeUwh5p6835w2yBEpmiwExPm6545L26JKaGMjPSgph1HkKYGDwrXzZC7fChKqeB5qKMdw4v7yB86e",
  "key13": "5BvgscVCbaFc2J3uomDwcTvrp3oAmo2rTQdbcMyiGQDrcBt3vpbjJP4e2Rr5bkHP8XejB8Hzjuz777PjAVeKKeBF",
  "key14": "4iVCL9BtC7QSitb8fp3sChpD3EGnbJgePqCNoaaoCq6LhfVUgtkgKcoYQ3Rm11Matbo6P8FPYTzYtWrxcBuR3bYd",
  "key15": "4bhuUwot4zc8R9kz98HmwA9APttAf288L6mnZNpRQCkmWZZVPUyc7RWKGffLGvX2ayo9MADBB45aVKgUcvwJMhPz",
  "key16": "2wRaZfc96urC7itDLCcg8dNvRhtq2W1SaXL41pS7hNZcbC1594CyBVWU7yEh9ZcBfqJTqQy7kHmT5Dnxx5U4DaLL",
  "key17": "CD6scfb8iag84ovkPA5DpXfrwjnKqahP62Ji3t24KoL9Q5YnaC296RT7Y339mnVdXf3C23NGyHLtDT4N3MSMPVG",
  "key18": "5Ddp2YuDytorCCD4btMwDfLiYcdZK7RyQq9bhEbY9HfEw3g36Rp4rf9dY5XzBycEtWBe4cVhzB8UTYhMDiG5yThA",
  "key19": "2ocNiJNveGaZFZUS6M3x7MUkf2kUVdC5inoWxeQAvxLAMAWNgJVad8ExZMGYyYxLv6HhNvqBEh2Rna8fGGZeqGjT",
  "key20": "4HLS11uzKEaSguyzvv8u7Hm2L3tZGxLa1mxV5fUQ2vFGFuMR94DkyWNZ9zRaRyh2Qnf2VtqVG3QxaNbVRu58vZQU",
  "key21": "2AfZtXhmUKm9bGfuwVxWLJRnKrLFbRCbskkswfKxy1mcKUsPLUeVNGpBmGdMmj4BFWUYedEvJHxZkcBwb9f5Lf7z",
  "key22": "2NhqcortCjAoAoiLHVL7PfFnByV5ShMTEAye76XnpdPMouFMiUHr8CHanE89ZjMFV45eeuVdCtmfBEZ1iw6HFJpq",
  "key23": "3sQH3u67Bdp9hebekZmf6XBhAgJyP2XDMFpxFiqSkSeu1LX7R1FvE8EYjcWDaU4ctNM7ddZJiwxk5h8rp6ak6WM8",
  "key24": "2w9gZWQbjGw2bMZ1E7VUoy1FLiFhmTCHKkpXwHtVqbnQAF8KhRvknFQNd8JhU5tmPExqeUtmtkEJMRNoPm1ZLZGx",
  "key25": "59eNkAdKSoUphQVsMeEbrqY5A26pRFWzEo8e34qdnqPAAjnkEVWDxDf72jkQFsbzVoCxV9gi98aQqrAxFYqvbJxh",
  "key26": "2pBeDAhTvGjjQktRi9b2VUWkGpAsErozbFt8LMrttjQPnZ4WxTznC4wVJboJea2DFhtcTv7UGC1XnttSJKJUdbtH",
  "key27": "5ceNDQ2bNX373aj8Fw1n7chXCuJQvPQD3gG21nECNtjpzNuN5x5ySp3ELhsrRu75tks8Aujnr9Qn839H76hSDwMX",
  "key28": "fa6t9Nhg7abREJh7683nS7HcnJKvuD2G3eAgo4WZkaktnEze9Fw57VciA75pkozdwDaDpaoEdYkh9J8tGhuyaKF",
  "key29": "3vLeevBUbo2DvrzFGAe466L6JJtzsnj7rny6sUVgdgE1mfKj1hR577j1t36RD9aFaNCFKfZfu9TzZB7j8Hn8BDe4"
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
