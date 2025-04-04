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
    "3LdKqRNkxA6S6n9aRSMYgVf9AhhXgzoRVtf8XR4J5TvWx9jBJRRmtbEAhNDYrTuPtuesnwahf9SMMaXdL3ERFcLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66AFHJEudhNYhLXZn5cBHdtSkchZrKR1VEvV54am18a6eJ9upeEvKKTDfhSFkJRuJ4gS7TWVu6GY72LJj1rsSvZZ",
  "key1": "4GNunmvBsJQDmqfZAvagpQnzZurdp6kxuox6yyzGQr7F4ZEk2C2aJ172v58GiJEUx6VFu13qULKmHSzjZfhGXntS",
  "key2": "5Fh3JCnLn1DRergsz6tuJ8j45aSbs3oTUCvyLhvxJMZ2nWnyJQwLNipF86EvTeWjenUMy8w5t8bCkfbvGcz97oz3",
  "key3": "25wUYmqCPU5LYqfVcRCWEiWBG2cDMA8L3rXDqsAHah3LHZHX9wZfVzm91Trm5ToXmgL9NQWApJ166UYvfkV5EtYN",
  "key4": "2UyMinCSuqquDSA3C1GteEvKmPyj91ZYwLbY1aU23K3DkvVotEzxrNjHqYP4DpQaTQZZop8xwMfY1AJeEFoweQp9",
  "key5": "23X6K12717cQR2d8L5Q7pmgtjo738PfPcxKgCb1SBdvavMRbgdZV1SgRbzoS7MGQsHVkiYbE5Kw4NBcbkfMUnkyn",
  "key6": "3fR37trDLuT5YMcaBrP4a2dZrF5BEDdTebcS3gX9y2uTtQ3NYczaVTEFSaTtZdYqsmp9FyFXg1BpWuVUQGZrsXbC",
  "key7": "3p5Vyn3oax6tNWKumPr59bJwAMoKmx6Qmp6Bx2Vd8PHrUhBG8cPLpupDWyurjAHpjf1McpaaaRpE1FgHheCuwgHg",
  "key8": "4Qmg1gqdsPXo9uBxFWri8RbUNYbo4bBM2pLpzQDQyXNWRdD2oy8gPCc1nQse9zAv2ghzRmfaxELgHkKLRu9iZaDj",
  "key9": "5h5VdcHiV3vr6uukmVEwE1jjonq57jd4JyZ3e1saDnnLdtqrm5D2PnTp56zGygfrCBpRWda56LTzz7P3E9RFSzHa",
  "key10": "QYzQpDs3AJq3tiqdJbu7g23duFfSW2aRgq4PbhHWGNKotANwVJUdUQ4jfyTbkG9UWcWrk7HdiN5quVzmEyMfiTM",
  "key11": "26ypoiSVx8uax1RmpdfrrTqRqZ4APwD8HvDyz9tnPmzBVQTbpptPaZpthm1wGi1tXuwjGqq4E6NUJgK3pW7Y3cY5",
  "key12": "iXTp3nGveDpcAa8ZoQmpigghaFoswsBXHnvrM1yJ2fvJw4rxUGqyzW1yc12RuTaxksPvD1LouSanGERJGKNgCRG",
  "key13": "31bdpGKqLreUYCphvywVKkBAP2gLjxtAy4awAuR54Dk9dNVkLDxhGsZzGMJcnW6jtvRHghcvEHzrc5c4hRZW8fyr",
  "key14": "2XwzaAeFU31eiJc27iEkZnnYN2ufkTFDYyWzdjw6mXg9UwerEBugkStKk97xHwoRP3NrAPbstuwarNqQnnotuGo6",
  "key15": "drw3SUhDxP1PayAqpyJhs7D7e15Avh7bNPD9PstduKC15qbZBPgzwcv5CLiu5jNvhShcDsdKUQC1iSG4SCUJoS6",
  "key16": "66zqDLMQc65ST21fTKTTCS6umMfd2ehb8QbYLpvBu7vZLeFJjqQXrLCkhdoqFoTLZJyG2mKoGqkARSMjTvTHbxpY",
  "key17": "2HsEkDCvUJymcvQRQoe9b7EXz6MWVhNCWt2xDbeM81T4zpEMRqYag5kkEYCdFH9EvcU41jTQE6zaJ2FdZMxQ3Qbj",
  "key18": "5T5u2Esz5yVHur6UDu6Wq1hbZ2FF7NNSQHmMeg3xNcXBfaFkWyAAcp52wCQpgWAFWtN627T55BD9UewxbDB1H315",
  "key19": "5P9wJbB2q8aEjeTVPUZbTfNGPbfAbCStoyeqPbjzEB7mPoe5cbT1gcf6UZFqtYogWgFHDrTRHo4moHXU4fuA6pd6",
  "key20": "62AE12k2thfbWhXjJfrrxLzDj1r94K36Lt6ZGfQRB1B18KAst4ZNgt2orPcWuEK32xj5nrKfjAWcFhafA9XFG2z7",
  "key21": "4s7m1o9Z4Z9pmEvk2Z1Y9zpUQTfm6vjPJdaxCUC98Y32Wd2KmHpBVZEfgEr52urqad6PSEB6FYYDL1w4wJkojYP9",
  "key22": "63PMGJjQvmksBWA5hqrU48o3GaHPt5upqxYbJsqr1ikhxcvS79MG1jyRtJs8VXmFDsJJ6PqrsEDGB4pXh8CWit4M",
  "key23": "xEwDxTVZbosNBWNGvDbU7WSjyrVhxuS3Moww4jtfvN4AZc9kdeSy4pYNEDNtxN6d5QB3dq8bLXG1Ld1U1BjuMjH",
  "key24": "3buFUt6537UVL2MCizDsQ4feFVFmJ6goiqKH8PUNeDSuM5mf8NGfUwax7t9c5DKWsgpTREc1Kt38RmAK4V55XEEV",
  "key25": "2yCeKy45mmVQJ8fMd7SaNxzCWuTwtj3usrX5UDQYnRfzCTxscFQCzsAW6Fd8aBg6sQDGM1mwi4dcBjEzvPGfhMEH",
  "key26": "33hBG6W5X55GTAaLmqQRoMv2TVH4nGu8EuuMpmGHRP2i3LMc87umPKQrmFffoPHTJXaEtQhxDHtqzPvqzvhRtFM7",
  "key27": "cMFyXzop31S61G3EbQezc7NkZiD9poXU3xkQGVYnd8hqyD6LX957Z6c2qW8DEY9YtBmBYSbB9fqVa5zFiAKLZmq",
  "key28": "5Ng9yyMeKqt4586Gu92uXyo9X7vp7gJSMxPCJZVoLDSFnPRTeo64JfHWAWcHjgSVa4VDsXcrr1bNf4cgvAwNkBJj",
  "key29": "228RF2at7zk7ZUL7c4N29eTMz4Q685CyU2t1aTr5g6ShSppmBJpqwtcCZ1K7SEjexsa12wuZjhCcw8FvFfwEgALu",
  "key30": "2JaRJkqJXdsERKvHNE78hptyN1xsyhNQkEMDitkZDW2SZLfUH2Y459PRKMNhFWzMBAg1UoNsfy4c83AqERa9FghS",
  "key31": "2a3Bcq3aLCodYSCZjo5WB73W7Wo6prTxjLrVGshATpzdTh8JBBrXtauaXCutwA7EbNomLWqWUFSruNXqcKAnjFFn",
  "key32": "2CTRSy3tVH7HQbC3E2wHSJvG5FvTzY1XkSgt1D88YoK2pjVzTkinxj7BJLZSYzGDFUgEveteaWYwk46ug1YnVomv",
  "key33": "38gXo1MzozyfYXdLUHisEvbe6stEAffThtwfTwuAKcQ7UEP8woVmYSTXS8U7n2e5SWEG2L2ozJ5gG13bogE57gmu",
  "key34": "3oE4HJZEow4Nux9o347MjHX1vg3dpcCtS4j7SNSjD5VTEgHRKcKdeuK8Xm4uyn8uYN86t5Hn5gUpzeswHYL6fMPd",
  "key35": "FuKPWu9fUuDspsGvK3z4MwaV8hKcw3gNfVVKVXRGRBEJFBVL7zodJ92YfSUZR3x6dvJbcfJ72mMcDUsWmYkiveK"
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
