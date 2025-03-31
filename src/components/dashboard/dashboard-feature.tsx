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
    "5ng6rHMVBcr5kD9m3ewYBZVthLdKieZSzoL7bT5FxDB7TL9YP1U5iXQU3jqGgwd976okp73HtJd4WQi4e5ZK4uVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ha9HX7dThgANSJg5omoBbGZpuCX46vqGspD5exsuFsbRofB9m2MWqefk46atYTG6nwH1UPBonhDWmQisgZosCyQ",
  "key1": "3wa1RnEJxYF8aYyJr3Jq7gs9hZdaUEyBDjiMGSCzgU3vamJ6ujnru6wGvTJw74W3mHx1DZ8v3fppdf6XMHWKuHZW",
  "key2": "4LLv2PiJitprz4buHG7dYmxJy7ERRCUkKHVwdG2ezsKgNjioxNnbk3PDVBgEGKQxhjBzzm6YgRnJmQpREf7bJ59G",
  "key3": "3sM5X8U2ng7jnCPgeChsPC5ezknu9sfoM4qBytPJf2ov3Q8vG6ioYgPDrD8VJEzevWH4ezLZwJ92WSJgNPWLEfAo",
  "key4": "M6Grz5D4G7ftSRtdfd7jxbZCQ8ojDgWCpisgSc1SV7LHMKvF8z8HbeTwxyxJWSm9gwA7mZwCayvvfAmehWweXgC",
  "key5": "5xNPhou1ydkEi24Q9A9QUSFgCvhLivY8t8NGjDvoxJwDhZ3toaaBHmdakru4pMgwaogkErMLDaDcwKzCw5qaMqEG",
  "key6": "uyBpAazGNYN8VLfazAmF8MTWRSus4d1VBT13pHbkiGAxMpFAmUFHPusSttcw8RxjAM3qgMTHmidEjpvFnuppZv8",
  "key7": "4AwGMj6m3FV7BxkA4aBoEbBvjzFDuGZ8dN7Qy2n5h8Mho6AMrG1spxC9tnkoP3bqiGYdBUsmuH2cdRDquVjJSBVJ",
  "key8": "tv2jm4ZS83ppfX81aFPYLC8Vrfbqyhoig9KBQC83XHDFewrxcQDebAhCLm3JrPxTauYBzkv96B6Nw8588AiGfAP",
  "key9": "nRNWu23YM4ht8eCic8MyFAZet5KjARJ8NnqSB97YarbnmDPKq3ctcMBD5f5f8XkuZC91NWzeDxBuKda8nj6RXYR",
  "key10": "2qsAapdhXVnGkk69GZBLAaFSKbPGp8VaUdDMdKPmifSwBeX4GeBbnHMGJWvQfHa1Bst8q6svTvToVCkaBSPfc7MB",
  "key11": "43h4FAWmtYf4XxRjohniCEzp7rG6VAQvF7ZGYCf2kHy7mnYJ75T4jfwoW7e1raJhieVGLZ6f7bzxQ13vxkwy7SKy",
  "key12": "2KZDAuNa7YqFSNBDgveKeBG3n9NNnVZGkQj5oG6ZdPM1pm76WXFGhC3s4rpTHMvezN6TNAw736sBThZPp93kV1X1",
  "key13": "rBRb5KU4HnwUzXWkaK8PEQ3aYZc3QBPtXTufPPajnuBUWa1KSfLMdAow7H5njftMCvToXN5QRnciDoQZ3LBx2eV",
  "key14": "3g3pEj7DHrcYQm5SZrQMng79v8fS5t2RGhbWwkv1u3r26nGdUnG9VvEFgfCo5dRx8hHETuUXtHU4punxv64B5ug5",
  "key15": "5Jsub2EybdaeUPkFg2bWcSwoQUuWpEWzgXtKKUzYdrYJ6fBi8D1xgZq7ftPr8ibjW7Ug3PEUeB4JtERYjUHHiuQK",
  "key16": "p3TfX7BmJdHUtRNckp6X8rBCWvARJb8GbBEXiofib47nxuJQd1nfjLn6B2AidyR6XH5NeLtHE1pJzDCZxhybMnC",
  "key17": "2x9jHUvWPm8UzNWB2hrS5YbXbFu9gPtxFXikv6pDUjGHSDqvAyt2h5gmFFzuQfJiKXRc4uuiiLQehXDqZFtWcLR3",
  "key18": "JZfr9eiXcUqsciE3o8nveovuocMbHXx7ghhkdX8qF6aZfL3geQYdAC6MDbPtu4b4f45qHcxF34ohx8dZd5PEAAT",
  "key19": "qWa6k5faMcztP2MPGC67phr5H9Uw9YExJPywkHdUbyp6k14bMswwSSixrJaMk3yEkoF9B4oQFUhxdjebvBvgfJj",
  "key20": "4Nmsd8aWYQDKvB6kD4SY4ZfWhfxUqgAMqnSN5vsheG2VJx4okN8yuhF2w7J1GeuJPcGWg8xgb3YiNLDj2UT6TkNA",
  "key21": "5Ye8dW3tEqckDJfw3Zpy2x1DTrZBMbmpm853hQh1wX2famTsAdsuKogWs4wX3siuPnvjeqU15rrBoAoGiS8iXm44",
  "key22": "4K5215V99js6wrQEy3KS87GfkR55gsZ5TGJ1c4Hzn2kKgQJrsJsFZS7XP6K1gAw7X9rAuNL7gsHEYQYRHU3PKWMm",
  "key23": "4x8ZLsuWuxKhZE4mMzhf7EQ8V1R8ZmtvNd6FrAxnJMMxM98Gd879ATr3Uk29chZBrxVrwMrCxFxGrRkS4QMXv2Ha",
  "key24": "44Yq1nQvGn2CKy8nhCTWq3ALKoZ4XHbnfKt5BQ4C9ZdMxSXtv9HVxbbupUCyvPXu5iEc2Qyarv4JPRn9Jqr99Heq",
  "key25": "4o7hLtPVP6Dtkx9cp1WcFpPYVHhbKDrf7vfVgNG23uFW78yJaCHunN6awCWAGSDACsSt3TZcmdThGfGzvetKcDcc"
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
