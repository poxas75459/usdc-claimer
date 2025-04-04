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
    "3LLUsq1FrHzwfrtAaNX4eiJnzmE4dnTgQw9vLHKkpKb8tVGnG9QPA9EobNyWQCaHNT9JawEUL4ETVvYQq2FTkoC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BTpA2ynR37XP9xaGzRpaoUKAibiA5KPAjrK2Gu3Q26JzasdnDV1zks5cucz4jv3huVX7mdvSn688wUkoaaJ4NFk",
  "key1": "4iKoSCiazQsQXnT75yRxJnkBd4sVWDMhEq8SUtkfAihTkJH9tAXg5PCoFuipNuMYzGcmjZpubU11Xo4noHSh3m3m",
  "key2": "NENdxJE2ZXRkyYK2v1dp1JJJFftWUbhDCGrswMv6h5q7gMYuFfqSQJzirUqwUMWrauDEb8W9w3Dhc7XsnwEggTE",
  "key3": "3PzhqxnRmb6z33zt6Wviu5BedE6V4oMnHLYDdbSX1QQmfELgJCqCxqztqpcsERQrFxkfTc5vGknZUtYgCtFhVhjb",
  "key4": "DMAL5LxmgxkKRXffznXs1c3fr1HyfbLodmL6CZ8b6qSNYBNvFEnZ159xxauHjpqZqkuqo93YgdTpNvbfLvKDNeS",
  "key5": "2q3t7LAwrqFcHqRbfuFh1P6MWcXN2VyYr5FVaq6opsS38nfJy6LcdteyB28wsmHqecAWnJEwTg3UMQJ2ErdPYDjE",
  "key6": "3C65VTwXFzinuQK1zRq6HWGMiSrczq9FQ566irnDtbfSezjUiKTHA6AL2G12ajPLovtJoz8uuWZnfyw3hbbFHUPk",
  "key7": "2fMutsL2sVAPbowNZbgoiXqJAEq4WnSksX3ak5Jh4SkBbMZiCzzMjD8PGFL1PvJPeny53rd3n2Ly1h3tFdcuvLw",
  "key8": "5H2QEs8FXoTnra8KbMxHSPt6c3Ls5Z8oYKqJRAjsiJJgXUs58vpAb1w83sszvoGsWNcHZgnC8EkvxWWXmzskUayF",
  "key9": "2Yti4nF855Rh9RHsmXunz8akLXdku6Gv8toiUt88Bxt1jpeQuiAC5ZUHAGoKP9NPuAMQL79cDvAeVvBu9Taf8GkL",
  "key10": "5eQnySFTwTWcKkEyftkAsiNNoWU3bjGCnHKEkyTkZoi6tDeUywBfpvBQL4kLdP9qZteNJPTJgynE7kBZRF7A7B5Y",
  "key11": "axWWtbpyPamVQBTRC9oU7WXYAjRp1EoFqqc7JcXyisr55xuwKmuiFQWXMi1f1QsFKTxKZt1QMpbBEBcjjzsANGx",
  "key12": "28JW6atbML92wY1r9n5VsWtvzxVpFzybhfJ8HvbbqfVHq7t2PiAFcrcJ8RZnMkhfqWHwgHRmuy2BkCh2PxxMsLsP",
  "key13": "2oVVKYtGoVZBAGpV53BkzZnqeqnMccfJcQ72itXkAMtUP26cMzjkqWh2f4Ytw7LrZQzuNnCYtZyzoVMD4MGb43z9",
  "key14": "k5YZS6P6zkCcUMcna28G1y3mQR6j5pPWXTTS5LAXb5oUpK7h5gCMvd6sFYKFaQcGrXnbLN7PMLAeqF2EbTuyBK8",
  "key15": "3pem4cpn21EVPUyVmbH56yPWQ5XYBJumaYH9Vb4zMrEsTRwNi3jNwzateDHES6nRggkbGGum7cme26CeCUcS1Fsy",
  "key16": "66qjKnxGK49DcgzQXMcag3KK38Jjv9B8DmL9xj2MiCMJFBdBNrzFQSRfbHFMMuQ7p23Xcr5i9foaJhB4GRi8QeZr",
  "key17": "R3xA9jZHTQJTr5jwnKYLPxNdYivD5TdoFUrYZGN7vjhoytXBJvwBAohgXfN5p58Fgf1ebEbLMuEBjaHNfwUp1ib",
  "key18": "3yP8NeqjxdbV57Jn9JtPWB1JUkL7H1mUFPUe9gTn5d5VtFU29xgUAWs8FYUg1KjGHqUHQCHtWbSkeanX2GvDQ8MU",
  "key19": "45yR1iGQjN1uwu5xCJKQTt5mB4JrXB1HiKR5mLiMYAZ6Yg8UUz6qK3oN1v1814ZJU7RjK8Gy722MoY2QbS9QYCSh",
  "key20": "ezTZjJSBoGGhnyZ9wq8zqWou3uKSMVEnharpiM5xmwpm1zePhkbHfHZoQAhpNcYDN8fP3T6q7aQe47rdeWJcJbd",
  "key21": "27RE7FThKjRqr3RVjtAG696bd9V5DbJpTznYAPUrQFQLu7yyZYZB1qh3HSqxeu3JgyfZvYRL4nSrG5yvWZwuDLRK",
  "key22": "YGpRJHLZ3RNjpPagjEh2X8vMX5hq63hrs34Rqb5QPuX7bwbqkMbVNwNVNQGb8cs6tLoh5ByG4tk4xY9Py9TWRj3",
  "key23": "38y9XCEJwgBxEFM9KhAHuAKc9ZbuFrEJuTqfJLabJeNEWGkvTnrypXSAVZH9nQ7TViyS7Di2kDgUAiDoBANFqxf7",
  "key24": "2iP2KdDg7DoRdWzdrwBLYptg4hbPZCfSAkLwxSFb5SacR2dwU1P7P7E6SgTpBwP9tYDCMBChYgSPTYD88Rq4p2Ah",
  "key25": "29aPQnuSenituvKLdQbbeD8MVS7FYg9kTq9ieQ4vy52piqPTWY9Fj3AvDC2T2kuJ35nwYusRkZajFHSWBqhbERFV"
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
