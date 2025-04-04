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
    "nydcRySMfs72n2j9F7Zq1UbLhyGtsG8bZH4asDHpjUNfHnpBGQiUzLLGfv2ZjXomXiKgG8m6pn7HbYheyukyHMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KrMdLNkWAAPy8qSgqzjXgBf15Fq2Cymx726zAaLCJyQjQiNd7sB1cFpgPE2gKy4MaeNxQGSsmVQ2gttp5V2WgBv",
  "key1": "4q78wPpms4syEg9oNf46wY1WQLV4qARPrvxqw96xkctrnovj7b9chhVcEeTYV3sWScdbKZzKrhwRZ58xn49o5WuG",
  "key2": "hyDyJTxeKiWH5Fom8DmXv2cGyckgGsfKcQg1SNG41UTAPqJ1NQYrtPeRsvwHikdrPr24fUkrGbqdV3q4P5Fccrs",
  "key3": "nVtGAbBGWZFkWYyJQ8uWyEtnV9sJtBBJ2CVRar3TR1dUncxjoGRUzCheZAwstXDhsM2LhGnhCLvfE1TSavqyEo8",
  "key4": "48V3k4L29hJMpBrnKgjx9UieQRBMssLWqSc2aRQsB2FNjGhuHf3XRBHPcVjuFc2QiPh3oPMjLg1k3yDnR1mykGgh",
  "key5": "3JAPWDYNAoNiW6YVV4SqZqdSfNZL2yqGhyAbF4CiLAZrL24RnJ7qgM3s53R2fGjCqJQq9P4cXwvh1uRLVVmk7MoS",
  "key6": "3c4ecv8yCDrSiUorWARNzYzej39r1UfssUfDVZqyGhUQbPeMazL9e2BwG8SQpxNLmZrmW81xXBP8S3DoHMnpoSa7",
  "key7": "575UUeGW9AY4sdVZMNfb8QRRf46mNGbi4fEjBVQvEXQeGjPsDgimWaRKiehUNUFT46vFsaqBGdWDAmjbVUF8qLoC",
  "key8": "4NpfrWoFyaqbaNQqDvXNy51yk7nyZDQyEcyXy8j2DNpX3DvVktqW4JMc1veEqPRP26r3bD9ycZtH8zWm1XVuefax",
  "key9": "42ti3hwDmJYHD7iNeYAs2vkc5iWhc9pwFtPQJdKETv2aQhDBxokXMBTBgHBdMFQ72Fgy48bfj6DLQan2iRc7q6g6",
  "key10": "4uWXqnpk4FSWsgsjA1v9iCCF5NK66dhhTn6z1gsNhxfCcVjRPbHUJ13xrseVa58joT8FszA6sc63kkXpVemZCo4Q",
  "key11": "4bq15mjUivnYHAixxvyQPRwfMPbic1xA6jpnLNy5F27PnxAuJWCD3ApjtYGJgrQzfJMLcK6Xe381PgF9ENCgb7ZH",
  "key12": "2uCeTXaptX8Cn9DeyPsafFEtgBPcMaHPbcV6trJ6WEy7LUr67r15UqLGNZ6TpJhMKnzQsdmt2o527aT9wx4uP2H7",
  "key13": "3MKvFXE2TELEDxi3xmmYx7azVfY16r9Kee8FB8uwwJGgwxnE1KERYBXcUZ9ZhjNYvrxBeVumWvZw6Q7kDQmv7VH4",
  "key14": "3BBGVBKXZevkyyCt4pZacPsrezyty1P2hFAvo33cPEMQXHKH6QM9h5SWwx5FidgxAzi321HdK4FUT6zMjp83HvBZ",
  "key15": "2gMhvcpK2ayjLj7pVgCnQAd7ebYfuvjh2t8rECs1SL1qRfM3z3FXTyLbgHTsmRf9uy4MkRBf8LeVPhUDt3tZUpeF",
  "key16": "2XNePopnBVpWFMQbc4dEuWGp4R23vH8ZtoA1ui9jD1yQdxQr6HzQjW1J5nnQJWs28gAs7H31pRULsNNLRwcyK1SN",
  "key17": "3UQ6DKaQ2Ht5kDtvY1BWp2oGpMRjagWnEJbqzr2QXn53pAY32xH6wyUKu7u8QofUNcw3pfKN8Mz9H81TowqSi7gm",
  "key18": "4ugvnVznoQeUghAH3gSTF3aY6TZUzRhkdGperaCL4GWQKtK91gC3xTZh76kngjVQXhtYRzY9jZr1MNG1pC8TFVCu",
  "key19": "4TgaymW5rZ7hTx6TWfpWr53DsRoUTbBU1bHoe1HgmppQL9J6iP4FL47e96ACMwf6VqXsArLPgPrmLpA9oDUNPChS",
  "key20": "2BUER9VcCAbUMS3SewxU4nAtcqM8G945W6A6azseeYJFXKYFR1msHHv7fYjRtfgsYLtzTNFAfCb3MbjmC56k5whY",
  "key21": "26BsJr5dGY1o1YCu5QGxU89HKjVG6L9GxJP7iAmftGVzxTAru8ZKJuagKxbLMBwW4TEBP3e8b44t5DD4xDdPatd9",
  "key22": "3b7Lbpfc7jJjR8ZLM7gRqvQkgbGikWcgZuX8rhGNX9gdYQgXDChmEJWG4e344ZHSQ9Nu3ok9PotcczfP5AUe94hJ",
  "key23": "5bxfkiRAZfcHLYfvAavAXw6LUvCbpiQ84sdBF8vz3Jis5QtggiXQUWbg5i7iu5DEXbUVBeGVRz24rDtbPVbCu3Cc",
  "key24": "3tfh7GhL3EQ9RFjRbeTPTxgsnLBHPVjdoF2tuos1xm3p3LJeHGp5kCtQtgG9hHEowkSuEAK8gWPaidtt5ckx36Ce",
  "key25": "CqajKng6wB1os4EsffLCGipjnbACFjJJPvp8dqa3x2v87CTf8n8ZSJ7ZxscFrVvzviwNFXWTUMoXKczQLC98dTL",
  "key26": "Q4tv5C3ASX7QWtkAQNTVytnTb5MdzHgKjgoKZZMPvZaiDJR9o1E6g66x8idiqvnLcRRs3xq1P93JqZt8FKYYXj1"
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
