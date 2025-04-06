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
    "3ZqmazVfLPxq6e7EF3srHrquojYVLV3gY4Gb6JnnxHoaWfNUAfwNnP75rkVTuYvFjUnuM1rqiBtwYujpzsQBFFLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FHr8qhm3UpbXrmeP3TtxssQQNrUijtZQqPwTUCERUckzGD7WFQ8b21CMQBjQUxHLYM9brrq9HtwGQE1tYQNANpy",
  "key1": "266Cr5vtVQpy413zZnKhWg9oMU1ZEFweLtKvL9ReVYwwWtNF7Vhvob53Nu2voA29gtnJqaM8gzRmLvFzjGbdbhr4",
  "key2": "MtpsV4DgwHvwuqgRKKuP9mLS4vFy8mznwZ6wxzFEw6Du6JVi9UcsuEig1AWhGwGaThD6eo696aW1dCXJJYJfe9K",
  "key3": "2unFhkeFeJmJG6kJwidKJHWZ2kPTobZKhJQ9wutQ1gJ1okyHV38teYno4pwTWTARn5P1a79puCQpiHwoBp38GPn9",
  "key4": "4ELJMTTkKrJMKmxZFC1z5S49GDurWCdM5DXi3wWDgHj6xYzyQVy1xCdFcXiL83uFwqEBwRKTZ5zGcEcAtXJbPAFK",
  "key5": "32LfULTvgohNfUX3J9ekdW2XuL9H2Be5zaNZzqxjWc8nP5RwwrbP3QPMVmHeZQs7SCcb1CUfXnfeKMcL4jH4hJAv",
  "key6": "3AqJ83DTndoDhXqsh8wyYJfgKu2Gmfe4p1Y6Yi7RMm2A58WHSN3wZ6pW2b9yip8BQWYuHPJF6i24xxuTos888NMt",
  "key7": "3fwW6TKmhfqe2GtAv221StjYLp6YBZMu9qdyBj4CR68F9KbMP7XgBSXoKRpsAV5ikVFB4rcjUoWCLqcjnsqrW82",
  "key8": "bqddLgTkcV5SqFTedg1nNLrxuJyDAhRiKYt54Cx7YE1X9FPWz1AofcpizbjMKLn3yhxUgvQYWJasmq1KApgyqWm",
  "key9": "4mLq1PMtncF2qVuXM26MZpPHDkPDzfVuYL813EnqFMr1qeRkHrCBrTsrnCAr3oYJbZUXiwsUa8KeTSj4suNzVWgs",
  "key10": "3CgZsCPUuC1q26hC1JU27vJ7oZtK6eTV9cMop86DLrCpNKAPGdM11vXVa2FWP3aKwDU4AJjSj6qsd1LV6A7BZcMA",
  "key11": "3QgTLd28XjLuHWhT9LoCzMpLoMrmhTJGF3nugLpGt5qHMD32Ly2eSrH5nb61vTAYEsU1qJSsBpm17jEBSZNTGEoC",
  "key12": "4cgcqo7KCmwSERm9ShFuNm4mMgNuQDRRzPJHwkSMucjkBQta12HnUNSVg5vcx2gVcvwHXgb8tjhcdGMxUgEHKNGb",
  "key13": "3kPuxZDpNg6fr5TMQgZrRp2Cf7CXCLJAtrnm6DJpC1u1s11JsEmQSsxWATKcb9uP5vNVSX5x4vbVzu7LZLhTC4uh",
  "key14": "g8XRc6kW6N5MvNgRdVEtTTQC8hfDx9W85Fp6m67LbvzEpZ8T6mkB82rRPqBWL5BtszmT5o7uDMPjj4ZRBcnA7gR",
  "key15": "5jZMQtaA5JPxNN4T76pPsFaPZyi1x7KFf2SbSpREvQRVfXixSwDLzXMBNFk2726ZBGHvRgsxXTwB4QqYjefBTihV",
  "key16": "2J3KsKFyDGtnqkr1Jam2wZ6PjuHJF5P9A6nHZPTiGURu4o3eD8VKTqr9Dww1ezMr4pPKw9wRhV9tNyreTPSrb5y6",
  "key17": "3iiSt6NR4YQhnRzLYJjAaAKZojfUi2orNnGKz3BXBNnVtS9cHtDwtJvGvBbvZvpacPh2m5EK4qGD9xkeFFtw2GMb",
  "key18": "nA2vM4ypmsuoR5RwkpAT8W2NfFpckZJXGSQ2QG5CZDHRa64T8NrYcvZGYRAAUKeX4b8f921Kx4YDRM5qLE38M7X",
  "key19": "oHQpaikBBdgAo3bVJthRb22Eg6H5TYAsS5sAjaJgPDAJKhDRbaMMAqYDueVuE9zYsAMHnavX2GhffJwkMArvDcu",
  "key20": "5NpUQxkKZy6mKJYRbnpkZYVPikJg5VRetC5K5kErc4j9U3A5Dzc3FdMFdsfoSMZjtfUmX6Mnt4TkA8gm8EHDJueC",
  "key21": "569cPQsMi887B3HQsmp1UyW6cpSZK6Twa8ECWiUurszSNi3oyd6f557QkzXvh58N7LsbySZgtiTX1svTmkdi14nY",
  "key22": "4WMUXMQsjRE79wi5KVbG2cAXHXavkWUQ7s6zrTfnD2A7kScxsrT9oZaVZqa92ndEvriyA28R3n1bedDYVJ1nR8mc",
  "key23": "i8Z9huL7o91jgBvtSSwV2PzVEZi2kuja5K8jUtGFxfEeheGEBnZx9xpVNr2gWTTfPxk4UQfuy6ohuoPFBajPYoz",
  "key24": "2etd5GsoAqZU7FY93qhZjgBfzaZ9G5DXXTMmWPsixzMwvH73RwGWNrejiediqqF6pGv6Jf9DFUotu87upyy6sjQg",
  "key25": "2QWpWv94sF83EX92YwhGL6KzSCxQUAyWNd573Gt6UdVU52grd1yRxXrE3BwhstGJQeGCgjxUUVpbn3Jq6hXtNYwU",
  "key26": "3uP9QceWgwJcZU5yByPoWXaKmwFjLWnZo9paft6jS7CtCNVVXsAAgXhGJBRDsyknfUuquKhQUWpdyDowanrCi4AH",
  "key27": "5HWMhhxhEWLuut1xfLGAvbB2tYxxtGRfMKZSDPyBTSmV5hyTnhJmLH9VFvqdqju1PwNgJJ9D3ochaEhw7gwdQTnd",
  "key28": "5sLLvk74iLhDWmgdV9FHTT79YeFWhb32kovGuR4tWjCNR9HKCwEuxfDvzzmStkh7Bm2uRFCBUJ9Ty5uPiAKoUcHg",
  "key29": "yLHC19j4Hu5WbeiTfTiHDnUs4JK817Q6v99yYw1FViLE7qPFk5QLcoruMmc4KFkVpZMbD2QrcPe9dH3AYHLNgDS"
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
