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
    "2Rn2MPZiwDBTgTT1jM1U8d84JqgC9MX1zvXd8Hc3WeDjxeNPmTEvWgNTr6LM7aPWRXCDXs2upyZW2dM2fAZa9ggQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z1wwA19iCP2XweDJrzRbpsGrQvWnWCnjGmdvrnkzwte9Pgy7qHvBfBnia1nGwk7CK6r9AGpx8dby6pwemFwqiqX",
  "key1": "38ppkLG1v7qyUSAY8PR7SdpL9p1WqeBi8GYVcEitm8Ej13UuoJXeGV2s15oA79sKs2Qgv23a4dZ9DgVXUdazMgFD",
  "key2": "4np9cMcJokdpDYJrPq94XifcHrSfSF9zpGktNKNFrVongvfCFLaSeHjUUsqhquiM31rqpUqzFLGFqh2Dq24smvhZ",
  "key3": "4cKni6LDFfPauZZKY7nxo2dLaLoW2oBw4CEzz3kHqERT1dSZCtTkRgiwDcT8B1yS4Ux2u5oUkuYVbYKkpX9A3o8r",
  "key4": "3Wf4vx1vMh5pVaftAZVB7g1UA1HjPRpUpBZJCW3tBT9R67MnWTQZDkTDVqGJcWucq2kc7Gtw9bLaNHqbvRCRQMc9",
  "key5": "4EGMpcQkBwnX5YaCVzxDinkD5QtNbt8GhQFTRc11hWomij8WWR7gqCkFf29sKtQ8QEbRiM72RiDy46W61oSbXsUB",
  "key6": "3LWSZqWgzZz8aopFQvTd3WJLTZcA4tbaRzQofnHUNG7QqeJBuj7J6ekKwCxEeVJikY7X9Qf4Jr53vWR3RTFTasn5",
  "key7": "29JQ74RpwD9hBpZVUTWreBpDwUBtvsGLTRMkBMtLrYmxKWzvMX8DnEwFomu3JpBhze6eXiiHendfcFSwdBgsYGfR",
  "key8": "5Ch95a9vLCEPSv9c2mGjN92AJ7JLp37Xru4i6JQwrmoLPvGvrxX2BuuJBk9QEAjbjyBmjBw4feoLfFBdusrKpx7S",
  "key9": "y8M3gaM9RvePndUr7aGVrokAEeT1QuNQJWynzCbEnxpk6wzZE6SBdCteLwHv7n5zjHZvY3nsZZCvEt6irw51fhn",
  "key10": "5zUoaZjC5kF8NsTVAGxeRXDoVoxFzfg2iZX1N8MY2EXPXdQ2sXL1aCoVm1x5jK2ct6czy7V7t9q6tdkr9Tcu7q2i",
  "key11": "4MEWtaJLGz8Gpbc5ZkqGZoHtik8WHDsDEVe8JqD4jL5DDBu97HUXPZugivhkS7rFh9cqEPoyzfKDGRQyz9yKWyz",
  "key12": "3AxmpgPYcb1pHWC63Aj3U9kBNRFMUk4RtZ4sKJTrL4YjdTZ6usXDdP5mReLRXsnA6zut4uL1CKguoGhmTG5yrSja",
  "key13": "5JSf7B3bEWGZ6M5ZQd5fCKFvmWKxdzXasGkoork2kqQp1zSBcix6sveurXw2FtsqMXWG4xFkoSNs2oE1Vcznu59b",
  "key14": "5v4geWPupViKk5hr92sGC9XPvsWXTE3Q34ktd52TbE9hzXUKBzZkxg1xKJzCoWxMvt4no4m9FU46YJfZetNHGEbC",
  "key15": "2N1bGQ7nWk1QSArShb6tAUnZqdNjuboLzMB5K4Z4BxjQXJJpnTHqt2hT4KfJPgKNdtZBKdtVeP8hPY4mqdjNo6MV",
  "key16": "rxFMbe1RQpcAYEvKxJTC9xcRAW7kYCN78NaMP1EeBQ1sVebi3WGcg1sGybYmi1MwuLb9wbzyhQAtFnpstQ5Nevq",
  "key17": "4uYdudTiZKizTi7NuJ8uXiuLSaDzsZQ27eB5iWfTN4U9mjQdYKpVCRWSKJ9yZ8v9bck1GmrkLbFr6dWNMGeFuArd",
  "key18": "4pbn5CvdRi4cZCDxGqL61HNGVRMFkF2mgSMPG6UvjJP3EYfTiih9nbfH3KPtMhWF4S6RoSGLR8vqJ4BSU2Uie18w",
  "key19": "3DcgXVgqAuuzAj73jcaYYTrcUFeAWsdz1ETvXTo9ekHxiuFdv8fwHkkJTCu21GgiLrjumZxKCKshQRBepNKcaY2Z",
  "key20": "5EZpspfhPdie7acLzKvmJfsHagqy43X9UQdx92R8f4aX7iHm67g7wixoRGRF7a9S4KbnbHbNm1BkEJoN5Q4SAHk9",
  "key21": "AMjyRVCrywco4RBBwDMWxp3SN5eATNjR5g5a9NU1mHj5okxK2hUrwPGZU5k5iGnvTpRKzwapDABimCCqqLnqX3c",
  "key22": "4vqtjbiXAt6pDrA1G4dTqAbLdLRUewfaX4FjQqRUgJZqu4oRu6WA7dWoTQWaVBXngjRQDrerjJB6GPQ3DcMX5dcw",
  "key23": "4xKSSTFRDJe7iyeJVqay1ZPK2WaxcJwxHV9xgytKqxkCBTgLSkxoCe122gqsDiuLzWqXnL4d4oSNgqdpXENt2wVa",
  "key24": "3M7RDsutsdKpqntHgGG6mBzmJ6Y6KhjBjZwM75AWR5bTCQnjzLWQaxXRwEkRLszfai8LejDAN5Bisxuvgtj2vdgQ",
  "key25": "5Y89EJPTdcEN9b9B3h6wH5YKji7YS4NCqnYi5u1tLS9BsAo7fk9DZNpeKmtYHwGhVQ6vWig95DZ1QRyVrpJZgukQ",
  "key26": "w8JSYoK3FRk5rJFi6y17AfN3gtQXLvfgiUMTMuzHsmMyj1rSeAPiqNBYPswEAdQxALbMH5mwXxbsGiTk4zutVHN",
  "key27": "hQh1ZSh5MZeXTtZJE3JzycQkh3nqnHt22jV7rw9DHFScR5PWbCrTMD8DtojnNtiunMcXcggtghnhjbEVbKTiuZN",
  "key28": "34KHWGNXf4Ux3kfHDDdSskuLj7z7QR1foqTeaNnBfNB8GnQ9wc2ZQydCSbrXHcczkX74eGSu6zc7bRd3JNts7DSw",
  "key29": "5YUhqptf8Weai1YZGUThAHZmuvhKX5xHBwkQXB5PWaquY1MPPw2ofEV3A9keg6bmWe3xzbx2FGobqvvYQkiZez8n",
  "key30": "t5EHzgD6UEa4GLrbuN1t6jmAodDk1jBBbsv9p2ywfNnVMJyzAyvg7ks22TZ9LhM2iAqebBxL3z5DppVr9riWCHH"
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
