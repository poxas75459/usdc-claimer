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
    "36ST5vdXVFnZ9L6QUgg6G6HQDr4Zc5qJpxJD4s58UQe6s6H3e6NMfB7m15gpVgPgMm3NeVcVm2LdDs43Spxp9SQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yL2qWs5stTC9nneDPGBhjxk6oFi78UvxhHXWwTkz8iS8sjCS1RbZCyVcoVf24NJFV87Q3B5hYmsUADLsPuRRL1B",
  "key1": "5V6BmahhCC5RWHcSF397446wfMUMVHsZdF7jtYJ4qbB8NTgdC5u3GDcvB7b3ACTbQXQD6h6SFZ9we8eUs6eKdCzh",
  "key2": "4BsZrtsVk1ni13YbLMdpuBjSnfj55BTVWoKYmkmyNQpv2igUzAsQEahnYYrFtdfxim5o7NM65MqVwcjnMWU5NP4S",
  "key3": "4FD191FuXS7W77XGNYASno6gqoyzHsDw6vzr8XYwCN7QyUib3Ad3xR5yez2VjX9GaRFqWuUaZ8tmbz55VZkgcZL9",
  "key4": "3Czfkw8N664R6wzNComaqax2ADV6hrckTK4tng9N6pC8YWKF5Shq3PezcYvDnorDmVcxW7TNAFdDNUTVgz4ZiAxh",
  "key5": "rpxvWfafHLRa83h6QqSFbGZzPyu6BP92gr9ivpoqjW67NgRN62JjrqCqb5rT46i2zZf9cEXHfTNqcrWCcUXcj45",
  "key6": "5cH11t3hMDy7fSWcPcydfJhNJN1wzahbmT5KzwC2YWaeFEJTebicP5cLCmepN9AERqBfV4Wz9K31wNpJAoLa2NH2",
  "key7": "97mAxVb5wm8J6stfeBrxyGBjHADVbs1TrBzce9GSPDqwqEKJ2URaWVLWX5znVLGKUDFxpSsFLS9A9reS7VrJrVW",
  "key8": "3noNM9U6VTFLrvABR2knZnrahLxZszjwmRrj3yqzNmQciKpnncNDNtFYyHpiT7prpMQYbPxRTtN8waWWg3hnQ2K8",
  "key9": "5WcfXck22DcNmpfMvgXYRyDNhnUffkpQYNnGyWPTgmBcS7zjert23kVz7VHDHGvTpvXsuLRPfj3LyEzbD3MpSKMv",
  "key10": "AR4LgBn1rZjrjhWgd9CHk2jFZ8jP4tGhbmvBE2kdEipdb5TYh2F1WHn1Bta9BWod7Qmdeoq8WMzZf16CAtwnhcP",
  "key11": "3PMdJ7pZfdg53p3SPyjVdCnGU3cLaYHd4yTaUS4zD2PJN8KKZ3LbKfNPpfdyFR84oBdnF1NjSRv967n7wsdzW62b",
  "key12": "57YjCJoHd1ddDa9FN4HUAq2RHcE1j9ghMDDMf37D5fYEXHMhH3N9spHWyen2HApZDKF7nBcYZndGcSRffEnh4wA8",
  "key13": "3fCtqTBJGovGoivHzyG2kLb96R1tz4AhP9ZiR2wBuqTQm8sqWHYqBcTqVVCs8dQWKAzJo7m8BHan4ZgGNc4TAQES",
  "key14": "4Uxk3gdtyu4EnAP4dmn7pWpSY4JzDaTw5MucJvG6VWuj4b4qnmLVd1DLnDgFn1bt2Nqa2DpXD8c1iAJz2BFbXivd",
  "key15": "4gxaesr3WdJi42mz2CYv9P9kjdJ2HwWAPRa3EjvZrrrM6KTxYTMS1xrs6P7rCkdVZeYvcnGDAwKQ7314oYaVYDTX",
  "key16": "BzbtSpDZCUxL6n7Zt94LCnf15c8UNPQMAXpsMcy4jQa4UKXvUnDqYdeTRqMyXJTqC2jBr18CHjx8te3CHpB7KUJ",
  "key17": "4XMh6Z9X31RNWbDJCcyP6G5sNv9m1umNabqmtZTFXnwdb91LcuzaRPncYEx1qy1UpUrqPCEZT3nuYsaksfqHvULd",
  "key18": "35PsxqbZsDF6kketxPaYuWFziorTfk4phqhoDYxs9yN9LLpCuC5PPDZLojVKv7TA8esXvSduVtHPYHqc8iDVwmGM",
  "key19": "5Qqq2poLY4B1xGANMtEC7nHvggrGHWiEabhvHMZEGCwj44DtDx1hzCpGLmKjovWq4ew4hCbfzTrBWVFJotXgD1Bo",
  "key20": "5SBkNCLodGuf5KGfHKEge5eegeKYnPHMkA6i3hvrdCPZfSmP41dNobXbPPTTsMB1TV14tf6U4rgJqo2XfdmpQZjS",
  "key21": "65u56mj7eh5hu8mkYJwVJN4VokT2CeAvpX6aBxt7mqkUMLXcgUp9jUDeEzNKz4Zk3WEFMBBX3pkv1nPNu3XAspVy",
  "key22": "3TC4bCVRjqaW4ru8DizGEWRYN9M9YshpXb9N7NW6xTGKoaCxyrJvijaiGQ3HKhbrhf2Fw92WF3iseTPyLca75rN3",
  "key23": "3gkpga1xsPe9Es661o9cJyTHGzv2SyJo8MmhkcMp86DZyW3Afqhqq5g7q3oDiGvcnoyZxTBaCArXdPXujwS23H7e",
  "key24": "4uq3LkjQBJyK5GPPcXnfeNWLXxwZPibNJSiW44fpnqVqm6aDQtcUREYH1qCyWt3WqGmJHPJPhotCXrDCtD9QPq2U",
  "key25": "2ATwdbNRecodqFjUVbTJ9nbZGFkxnAChyvUrzRnTpErZnV9RS6rhZiZiDzVttr7DZmT2RbeSzMcbojR5iUoeGXe9",
  "key26": "SXwPNR24EvNqwJyWcoqrbsz7ZXCkuwxu7dmXJpSzouoaJyz8ZodHuzBoPbmQE8mWFZUtuzUdB773xaEpAebyV3a",
  "key27": "Z7jHA7B8U3f8AzmAN9hwKFoF8AYaQNVZqzNZnr4acXi6Dzvw7ph2dfaNEd8Xvpjgn1H2Cr4z1sXGdEZnsMBwbyg",
  "key28": "28duPuh1aESJPA7sr5zWkRSuhkb3f6fhNtCXqvtRC4onSsBtrcfaBJk6q7thjxih81HBjLCv6vZJiXCbgTHQQmVg",
  "key29": "5taJiV1EpV5EWdsWHWLnLztkB2Bcg5HunRfK9QBTJpuVwV3p3pzRECG2rRzJv7ZuYys9Z1wadho5AhQ8XtFXr2K5",
  "key30": "4o4vPWTt44K2HQCSMu5Y7sy6ojX1Es7anJQnZzBJfM4gi2pAUuRpU1XDAZ9kCfSNuBntv2NmwLPHWhvhaDaDwbPA",
  "key31": "46jME1TLyWN61MRZCmV8RMtxjbSpPKLWKdkr39o9L2kGJpSA8tFZZqcQ3By7kutFWZKRgFaBSQSqwznWE283SvvE",
  "key32": "64jdPgdonCvZDaBsbzRD7sNfeRKyNpVBbdsiHdFzq6YBWHy1AVaVs8oqJywQGcYbGTGrnEfsUm7HiM4wZbdGFNAP",
  "key33": "2mRafMjZFsWHnkp29b8oBGfxxZpb6QtpduJZVfj16fWU7QituHRyeKXaCQXqeLU9WTfej8Ebqpf95nSZLAu873GL",
  "key34": "VqXVuNTJcDZxuyX3ksn5gXExQf7q6RmPMgcCHNdcuVksQ83ScoXTSmWUpq34wDQXg1VEtRovMknZposTjk6tEfT",
  "key35": "44prjxmxSzknab14tKTxsv82xGwHZuLrv7TzQq6pU9VTGmsq4VSAEWTXJPsCHjZQEoEPNLJ98bErAKsbp82XmUbe",
  "key36": "3pr815hHQKXJb9mUbXHp5zYFEQfCu7ZJ6KEnkdwN9Pur9e5TLQ5LngG21eev9YBbSqcMsu3DF2sTSPDWKzi21F3E"
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
