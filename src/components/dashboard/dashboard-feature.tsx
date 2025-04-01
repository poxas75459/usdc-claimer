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
    "5iXtQZWTZ6eQnhzjLykc79LD7Pz8NthTYXoYocVSrB22kDyw1rUW5Yv9iw1ekJwLELXDekukUBz7oWjgWhKR3VMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FFyiwSfqaptgaPqkkAjW8FF6KfDDtJ7dDwKadqeXEuiMhFJoXYdJWRQ7R4sFzmHJD7n5TmFMvYyQhGCM2Uu4o1r",
  "key1": "5q32cKST2qrt8gxrNQ5ByiHhVtXvgazvno1nF5hrz84P3H7fiZod5zgUKM5MiWkzwTVptrL7taAqXQbbwZpu7vXQ",
  "key2": "3b47mhQn1js1esTsHPQCq8titLpV2Kzga3Jzu6AJNTvUXMg29UDeS3KpoHfo3TvbgRsgN1GEden9DreCrCWnNAP2",
  "key3": "4tHzg4TDAj2V3gFeehN7zBfrSDsz4SbuuXetWU7L59Ntw3KLLresfqYJFB2B6MUqCn3sJ6SDnMGa7ZUzCAmQQCT2",
  "key4": "4Mo9K4tU1uWXTx3f1NbeMrhJbVc7kRVvfy4xnLvF5WywoPKZKB3gyhhYiz6mSt4VJ2KV16Gk9XYvsLN6SDwdKKMo",
  "key5": "5JSwaLxGuktrhTeLkNuGReyr25CAVTcCouLjXBsPwjcKgMeAauqqygDFN5J91yHzzmk6wtSdebJcGBSrFG2KRa5A",
  "key6": "Evj1twT5g7drf46a18WRqBqEikoM7DLSzoDrYQfvuMxMQqgXhrDB9aABJojdRTqSyhbm4B3rn9gH6M1G48A3FHz",
  "key7": "4xX4azNh45n5VfaRZRDrTiqgrGjDQHXi9sCTwmtAeRi6DFUqmX9DxqcKYDiCMHNLvb78NcHu92JQZQBa8dxRCJuZ",
  "key8": "62zWQc3t2R9zMAyMfEG32sw99Mkt2NDGFrvB14WFaHx29Gt4wbi7RgmxwTL17iumgvUdsf9FAaBmVCxZmrnv4vX1",
  "key9": "3mJsXsWMmFJDpCnecesXVWhDpkTs47SH2twAnvrr1Fipw4Yn7vnimHmq3qo8Dmm2ensP9CvicbuG89bpwzv3c9ub",
  "key10": "43iw1JkmpWHSp1aZ3vSqtkMi6jEBuakgx8rhTTJg78prGgA8pM2WgAJT2yGjTqvyJ9ediKhscMn6VKUJJzqnTeb7",
  "key11": "2b1FELj3wBbWCQ6vc21mG5dVHiDhhfBGiRWRvLPif7H9BQkt2yiVHP4gLnLJPMEoLVxvRLDibW5aB5d4382bX7ds",
  "key12": "2Fvwxd7DWmn7Cbe9vhWb1YhNJSqeb7TLD57tyScZzW4vCgGBWzUxEejBGGdEENKxePs8SVEcXrsgmJb4AxcZvdZa",
  "key13": "vaWgp7GLrxva2h3NixYFpUiGFrBLZm97p6eDcik1NqAzz2HwtZoQn4mV1yRuFPKq12aErXiV6gdq9A4Zw7gbvyo",
  "key14": "37h9cGjTEgM7fdNZmKRQEWWy3jHtyg2BZswAv84HZhtcW5kDWG3JLaGGEeQwgnuq9VCxjww8CFEGqsAksgYGLACE",
  "key15": "5RmqeV82SNde8LvgpzrcesUxJfELHGmn36R1eX1HFJHA3GBtA3J6hHqEnxMQEGy7uu1Nq54jsnr12pA6iV4z6Zo5",
  "key16": "W23gSVYpyZwWiEFgFyfk8W95Ys1dSCYD8uH1AKXZgw99S8Zu12f42sNYpRMDK6suTnauMkBGgWAXVp6MYN5Etou",
  "key17": "5jsA5jzVJNYPimCGKzExdZEBgjs5c8Hx8Ymx4dJif64x9f7jLimrWLZ5ZHCqtKLh3dwubyWPV7WjwKUR2GRRV6Er",
  "key18": "4VLFHxyWHMdKD5xSMwQ3stNT5XrSTdXEWXeQnp5j4yMWPrVt8xmFsXqxU1PRadW3WK4cvPRoc9Ac8p6k5M4mXwTt",
  "key19": "2g5ZDDWuLU8pWiQkbknyro7YwGGPdCZBMEK7jMcCgMnZGQGoTGP4hooEEwTg56zdGM6TBzXByaGH8vD3idMTghyC",
  "key20": "2a8WT8pEt3s9RKSei51n4TRVzupDa6xwH9oJXy66Bniu7LRgcQot2r3oCaLwJ7tpzv49vQwLHLn3E7imJDfPZFkE",
  "key21": "3tw5c9zqaxaQf8cWRuqDgE3YSBurPvCi6VkvqTousSjeTtw4VSRVunK5RcetQyqti5tg6iiFRHe5uRH4neCKiqPh",
  "key22": "3Q3oFvUBNx7xP89UUEMR2XE53Q2rLF8N5o2z2rSgNomgcFjEiLn4vPx3kN6RrnhdeS8c8hdCVofcgmmQuV2b3xm",
  "key23": "42Y56sMYdQe18AK4SbrcavMviBZKkNHeffuqMM4xqASu8GWU1biN6QbBRDsUppLSJigJC6z1GmazCm2yLNMMHyZ5",
  "key24": "4vVgUDJEYD4jMRTESF9nkaMeCj9t2DbDRP72VWJZbuqqk7HuNRJNyQbEX1PoKJ2H4YUuJh98m58q4peygJbmrNDe",
  "key25": "5feHUkheF82KHqUCrmQoQs2t5g1Qr4tUxWjQwN8UiAVmW5Xw3hwGUWu5vicZYyQx1J5qheb82WTVCLYULtbMe8r5",
  "key26": "596Gu7RNkHE7EkdtdBvqQSJJyi4chyMN8dm3bp7fqP3Z8NJQUyhArXgc9782XPtJ6gX5N8Nh3S8pnXXQR8UbAHZn",
  "key27": "5nEYET32EQ6ZJXVZ9YadLBB5r5FTdC2ZhyuAh8cP8aaD6JFYA757qEzXSuQUJDxRb6yxcSAeX4TWEAAo2LmQDd75",
  "key28": "5Z6Cq4id3JmBQSbpoXSzXdsU3tQHThWB7izaSUwFtwyFbr4YWVsGU1XfHtiKBR3aggQaDt54bMworexedn6tgpMu"
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
