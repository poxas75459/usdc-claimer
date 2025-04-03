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
    "2WNs4UMU4p2rtCWoLcsZsXBPSamrG7B1z1pbmHgrsGNKWsfoxWG2qra9ALi6avhZEXGsPtAZCxpyJXvFavAbNczZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BbWJmSWPAxs2GpCcKvCuteaH6FHdrShMJMJQJAqK7tZMXKLF9VRTxakbzGPjk7fy5aDTrG6jXoPZzqhpxxPvx7L",
  "key1": "HUX78c8NQ8EhXNfQAAmGJfuuE8yopyxdNGLVbLPtS5b71iWakCAaUVJ7bm3fQp9YSB7BLy2UaGkMxVSx8nYhHf8",
  "key2": "66NG6DShe93yfvMoEtLTDGXHNszcZAtStrHZZufczCjQQiKmTpaDNrBW6C7Wr4Y9bdSFjMYMZmMK9EqCEKM2t6wF",
  "key3": "5q2TAYRPru1g9XPfpphofvU3u7hugSbC98WotfcW4y8eNaHfJhm39iKRxfFfD65o7VVNq1aasJj8eitEp6vYiJ7o",
  "key4": "2NStiRyzueZwDqHZh4uofzhJBVK7oVHM3JzwFUgtZ47njDMDFdQCMURmeE78nq38KgkCVnXorNySsH5frNd7zexh",
  "key5": "4cMBrXb4YEwVCpWkeZmtJtdmdKsRunsRCx4FYKj74k5XRtNJYca2PqAhfXMAMq1vxj6W9Xh2gXsYm7VTH3rJYWKw",
  "key6": "3YZEuw9frzZNRaSe5Bi9ffcWkr8td73wznmVaNS9QXUhh8m8rkx5fp9wixZ17QMVVPgFDKkSirEH383VE3LByUcz",
  "key7": "5QwqnXWVKfE44HHyDiysggg1QaDccAfKjvqGQYpmnvhLM7xVQJv6mhhX2TnVEMbkoDh9uYGBSdo8NV9xoSpUd1GJ",
  "key8": "28bWpq97kocJFFd8uYKPzhQeVwMyQhDDVgpcNj8C5thEcwKFyTQCJUrros81qR2drY7Xacfcs1TRkYgqdinHNHMf",
  "key9": "41CSc1AHnxxxrenMvKa6NsNFJ1pjgawpGHWnkvPgM9zCQzkbQSsdvU9HBbuKMG3dFqo1boZxQ3VA6GCnXQHM86nN",
  "key10": "33oMav1Dj6CNttNy29tdg8dt2q6vxjzxtQDA44m3aM44gt9Zy1X6cxNxqYMtGLLcXeCokjQMt8goDLkw4CEASb8C",
  "key11": "54yZrKJrEKBwfSzkCvfHdize1kKTCbNnhdrWKZSUpaqDSbUVGNSAfTzicChRoKdeYWmMVKFvC5tQByg47ZmuynBQ",
  "key12": "2HfbekPXYzqzPxrBS26w387fmTDyMyjWmjpg27qxQeejK7npSn78xhCVpQCRLhF4DSbw1iZjb9fdzMVA4B4rReoQ",
  "key13": "3yoQK7SWV8RxrYQmXBARAmDojCSmvUEWsrfpfgAuqyEiD3E4uyoyWVpGcqMgxWUY4bTg2N7i6KydRUpKRCgenYJW",
  "key14": "ky5HnswaMw9cQLjSqrPTcLGbDVQk1bqY9ndJfVy7M2AmM2tmpkjv2QqU1XAJz3daEKcp2dzVhJgRrroBjydWyAk",
  "key15": "5EmGQ5SykegqMgqvKRrx4XYHafdTuhvu8JjZ1dVE32jRjBZB8zMK6wFgxnbN3rKBRsSaTepYqu3sWmhrMxeCCPTj",
  "key16": "4BX6NZsz6qdVaXnN2aEgAMtny46oj1xoGbKssASvzsgkZPx1xUHj745NNmvrUhDuzeiSGaYSZjda2veYBxDPpc9k",
  "key17": "3YtyFtwjraN7U1SqfDxb8oJ3TbRzPAMqHNexcQ4BG7iHfRVwNVk4TNmYaohHFRJUfdvQVRLQ8DSqEy45WmyubRSM",
  "key18": "2Pf7ZJtSsqRvQ9Qhb8SUE26pz9KATHrnA49cs3fF4uS1dcBNbqjxj9xVbompXT2QZgLhxZy8tMN6LiRTABttvSKp",
  "key19": "48nrFKc7CBDXddFNytkFQrQDzLuuupE5GyVb2eQF9n2uPUAfjrmXRXmpnftaiagdyoJkJaHhctWvVdqG1RHGn5Vq",
  "key20": "BxM69H3kjqNaFvVHKUtxrG7epHVVmUn7ziboR4J81EWXjiJRBPkik2EKfKFheYjfpccbMuG3kAwezPJAUPcRfpL",
  "key21": "3te15P8i6Lth4NduQZi6QGqGRH8zgXaRRfepstZX2ECnUG3DzCLLHFoa6yVKmdPFuYD9H1LP8VkeZJDn3yf9TYZj",
  "key22": "4WKpow9nbvAwremxceg44SscfVzpSUgVMBLZKCaC7h5h472jyYuNQ79JagE2JSiE6sUecnFXuhdEXzA4jo4XQmRc",
  "key23": "2PxoApWxTE1tf5zVAKXtGnzrfi8hZGhemXuAKLiSVpwncWPyLtCGcHSD17iJdvdu9bVhn2GRrJrFke79JjtaLkXE",
  "key24": "2BazFAAoXJp5h6e65yWV7P2xzsGZapfpakmppRBqJxgQvWhgnghWaUFQfdZGLtSvLPV4VraRE9QysKGizNPAhVy5",
  "key25": "4sxrGdjcB66JL45HdaQ32PA5BGbJxN9ZCWF7LSUxW4xPX43NuJ7TSiZoTTKrjtSb2C4jYVW3GcLR1BHBpwaGVEPn"
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
