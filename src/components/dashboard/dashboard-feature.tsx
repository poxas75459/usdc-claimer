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
    "5eExvS7siu1Pf9q5pMxFPhwuJNtEdAUCt8J8o6HvNdpWZWQhQfcD77EFdG9VxYnXKXWR9nby5fGXCbd2QMxwVGQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66AfbpA4SyoGytY7SttNS95D9nKJB3EKsus6SFNvKiQKntcYoRrHSVE6wGASZk3Y6DruqjWLRB464pSfN4R6VjVj",
  "key1": "i9SvZ7G6EHX4qGvrwRGmWVnrcW6YVgp7P9KCQm9mhGESqoNKHPmKS7rvJsnJnEq2GJuW2LsyByaiJ2MjywyRUcB",
  "key2": "3PKQUbcHTVBqq2vbWjhN7YQiioVcioa4uo45SgjcQnCB2269uLHzeDyJRXGVDbhik8KvK9mkPNjan9UHEDDTvbMw",
  "key3": "3oCX1ZVhszqqtT6D5ojGPY9ygxpB7pZhSX9SUZG3Nyte9Ynj44BrB8y1opCuek6PKjY44x3MtqDz2BANfssygDTx",
  "key4": "3FAU6Sx3DBa2fzKMkcyadjYcPj75usXXHCZTwAiogSg6xnzpMp6cDWjDpkws6xt8eBCspoy6jqnFzE9iQieRDBtr",
  "key5": "2NfhPbt3ctcjzxSo7TUZ4wp888oyfqSXjRgHMxRVGfpsTk4ngaaGeRS1n8uBSKWrzgQuurpsG9YXfRCnmHPs8t4u",
  "key6": "5q87U25hEQTY93NxUikZMNLwFP41ECyxX5xbNC1Gd3f1fcWGhHjUsHL8trhE82QKJAzV2j7xDazDoEbNHE282BtS",
  "key7": "3thS4F9HEtWsHMx8mAXxP56ZDrRcTFjpiiYNkGtDwBkNYswZyYh1iHoHi14jL8R3bsns5DFt4d6xePn6x1Wt6BAg",
  "key8": "3ZgR6GpcZRZ8kmHeuda5X71zUesnuTU1T7FFTLqWQiS7Hp7mzF7kegp2KRGBCm1XXrSTkHgnRpX3chijXYVrQnQs",
  "key9": "64hfjYmaZ5Uwj5A7S1vonRQUEf88XRubaPNf86jFMnxEeABo66hveKqcX1ZXJbXBxuSYpRArhAQigU4SMN6jj2eD",
  "key10": "zaCGbUcMC8zLgHMaGhcbNTdsvvUxr2aK1exr2YQdygcRhetS4udxX6GxpqWDGhXc8d84RngHb4GEY6GrS6BW3S9",
  "key11": "2SdUgaZCvSKfZXGz1oxpzRpoBdtE94PTfDHZtxRXxkgQUMj2woySGcs3mfkpaSPseN37fGEV4DBEzvDbimTk5y3L",
  "key12": "645BPnvQxjo69CgveMSnAmPBNiG6MHYjEnMVnnchNGNwELL5Fg1CDdAN7qB7m6twXypntkE3xs42MJb4ns2SPWJZ",
  "key13": "3N3R1Ffmd6jprD1EuRNrGpyUz9xu3t8iKLQXf2R67V4bSknRZxvzeu9yGBXynUrpXbNPyYSrdYF5EeDMbDYp9sAg",
  "key14": "7GScsjAxgPQqnNZqVQ9joFSAumNsfMQyezLfX9JgHuKZoF4Voya3kXFtJ7CDRdBekv2VSx2vaoRJdpZxq6hFDGS",
  "key15": "3Ry4XPidKbQ5Q32PyWFzeAgXEzJqqQd7kN8bNnQta63g5YtaC83cPc4z3CnqE2pB5pA9PJQ6Lf2QdRrWRc5amPMx",
  "key16": "2mAdaorukonajLPjHHYwAAEz7QHdrapvxBSxU16okdKWSxvjqtevmuYqderKi9tE5ZkotpKtJufMRDS2otgdarN4",
  "key17": "28sXPZDpVKBv2W1GWj8qcqTBXAzDE5Y9Tv58NrqG3g9WGwcP5EnpzyxUi5XUmuGQBB2zyR3VjeiN64sVViJyhFrv",
  "key18": "2jNW446x1H93pzwAz4WUUEE8TUWBhjiqZYf5xV3CorVmBE96XBBLZTFdSFyBdR7bVVaR9WHRCZUKUD87UBFesLRs",
  "key19": "4LU9Lca94sSaR3jW2bSyPcRGiKqyP2wtDVz8gQnWdTpxTf8KMvqbZVXgZG4orrPasBjJrQ3VHaMsvoNbTA5LLMcF",
  "key20": "5C7qHvGpo5eX8km1qmyGfogniyKK1XvJa73dsiiWwmP63pgpVNVcgLajbEwHJu1U7r4dtWBoAG9vfe6LUeAeWGq1",
  "key21": "2JKYsnspvAsyHzbyFNpBXfapDXb57y6ggR5MHanhD1MyfVLqWe5TC7ho6zRPXsCYFwadhLgJZGFdYxn1FjDAzPoi",
  "key22": "2xDaPkwCGR1ABqrZfwBoukA9CpUDnMEprvVf68g9JV4jf4d4g8oYkmkw4T2MN9Ci7cbD5zVW2YTBs29rBfyh8pCg",
  "key23": "2rXCFBmPH2v4CubycVkUgxsB99rfWMpvARFhdNaWg2eg1gMKXwU94oYogv1ct4SKofNHv2vQdHs8aLDbZDy4wMQg",
  "key24": "38sJUqUbQ7esV8VXaQMmQzk8E3cQsEtMvG3gX3esPp2yGENzCcZKSYbxVWY9PoQ9UbpTfqvPSfmkmyzn9YDcWF4Q",
  "key25": "2nSjKBfTJAvBNePXN3ACB4nrfL9o5aTKt6AaHx2QXBE96xitN1B95u9Xabr7pLeDskDp5ecmeGM4yVUBpGSPYMdE",
  "key26": "3CLBWaK6d31NT8JeTUqYfRAAG6UjCjZeVBwK5G9GntSxGHnE1yFuRgQKwVHoWgXTVqQkEdkCgb49MzagkgnyCeuR",
  "key27": "3WsNiJs3apfGmxfaVEYuwST7GUiSQGp1CcHMKofGsRM6q78UNC6H8RdHDMWD1arxD1cpTNKa67aWtSWEJJ6ycCbq",
  "key28": "63vCQZWKcqpuiP1WZEsHbJ8mdJBqNARBgE1o4WMyisDZUhyxnW6PtMRRdYUYL2DmyXSdkL84fXeCkxL2FkpeVvR4"
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
