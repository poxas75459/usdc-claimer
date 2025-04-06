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
    "4N79UANvUxb4Yovd9BMf7WxdEvp9ucpawmdrhYed1PSUF2ei2ATHFejdJStPjBP9KTSiUJD9bQQSkn67rX6M7gN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VVY7MntrJsKkmkjZD6JvZg8V5nEVY6WftaZnEypFoPKC4fsm66HXCLeaguyJDrjh3bdwLSdpwMsgc7MZ7sC7Uvd",
  "key1": "5PmKkmf5hjdWLrZ9tcFrmRxZVYMERowkCxMne7Sm8KV4kjrEKRfFFSf8rfoUkV8CFmVNDrbFKH5YvF1WPSP1EtJa",
  "key2": "38tAKhiNpQnBGstZBe3CZBe8pF6sAbhKQG8oBNm5e4uCRZ3LyY5QMMaW9SSsLDXvmMRUsBGkWPQYyhgFrXmL19rJ",
  "key3": "3sY5FiVuUEdBds29DQLB1yeJo7wc5mtPUQBf1NQQQ9WQnim4B4xrp72BZtcr72LeKZBf6ymy5vDDUcZ4i7CsHCzJ",
  "key4": "5ar4khSqLMGP3uput9ZoV1BgAJzV5fbs8RMKf9McbigFkjvrJYAV5769rrKVCvHBaGvcmH6wpzEEUxTiVNBizRnp",
  "key5": "2Smmbdi3iu5NxrZoUZjUoD1iu7vZvztnaXESAKRdyA9JVYVZCSEsREA2d6MCNjkQDV5qVsgYVHRhNSPjtJj272Fy",
  "key6": "2pK3LNBjgKZfx7CQE92sdvexViM8nobhNM5JqDfXrCFazbURh468Ay98iCfVat2DjFQkrmzLr35aZVu5sKbF6UnZ",
  "key7": "ZMW7rR51wXWE2mnSTanR2bVudXT7rv5pA3EL99kTUqFpRzjSG6tdfRBjpx6CaA6n99irVSgvYGLHh166tLiC55Z",
  "key8": "2NGSJTEeVN6st3z71mnR9tvEVWygVsN5W6RXN2eq3A8g2THwWoSjVQbBk4PN7YsFmy4miNdvN8AZALdbeEQi7b5j",
  "key9": "3kWurLdR4fhdGQHAKKAQ6giJ9KYztHuXZZBp7H7W1r3UKncFAR3ot7Eu2Ho6GtAJQGmiAcU5LAehfvPjJLM49Ah9",
  "key10": "4YMZiefykBt8QED9XHHebTBYozLvBmerjGtiunyBWxj3Uo6FG6JrJZnGs9nt9qbDVMo4Bnx7UhJicoHuun4PN2Tt",
  "key11": "4hyEFxp7k5fM9HQD56XEepfAxwtnwTcEpEQQUfMcFXPXJQMkMUKSDZfeZyjAWu1kTGNcUa24yAg4RwxK6fyJSxpB",
  "key12": "jyRnZX32uRVbNzBPqzJFP5iSNUjenrTEyUxQykd2uUjcsqofUnSR5gAKS22Xmki5i6CY8iEb1KpkmgziqHNag6E",
  "key13": "245jgJTNfHJErRndmnSdk5jqAEjP2fdYDJsGs3V5Nv2P9gN93jbtrNR18y2DgLnX2fMpTSRDvcerBU6vnna6zdLA",
  "key14": "3MiSpPjQoQoYsi9ptWoLEJff9AgQkP2MX1rNZvjYY1jrEQqKyVcHZ2D2jyaeE6G297XobiH5Bh4UqoeAwNfMHQWE",
  "key15": "2gDBwoJpYc5nQ5AeabYAFc9dvMbcpzcF4cnV33VGkaSzUKN25r4RMJ8bA2FMzDQe5yvw1oNkc6vdpPdv1td4u4cV",
  "key16": "2u31M8c53LaKiR4Zoi2VpWEoYTBjsrNgvZhBfHLVHwT2vsk6jpJwmi48nPKxRrbj52uw7xdV3VD9NAoXkscCwYNR",
  "key17": "5dhSXy6jwDwbeJDF1wApUTrgW7NoKJvSSE6rZ4W5QECSNX2TRAswNuEZXwygPJLXTd7MSKKp97eiBNaXLtsgh1jD",
  "key18": "SzMEHDt1gr4rHxgiFRj2u39gdJHP5AK3BropJzAu1Jcr1kjkjxyoLpDfiJsZdfjwpFDTeFaCd8fLpwmiDifZE5v",
  "key19": "3AJsVYnV8v5CNr6QC1a4vC2RY8tbiVyKfGWjrJjW4wx8okFucToSZHmqU4qPhae1NJzxwbWE4FWRFhMUDxQ8TZzT",
  "key20": "3geAA1VnZ3wz1iMWoPoAskhZXW9mQkGX4BSw5TQ7ti8isGpYWHPgWKEfpT3EX4HsiuZnGJftqo2Hzr3BGyryjVyy",
  "key21": "4bMK1k5PZZEpL1DsBju2iqzHfbpCoN789qiCfPe9ktjoMY6LqVnP2LwxyePSYfh1xHK42fYVZVCSsYHi9EJSb5Nu",
  "key22": "4fzHvaiXk1LsSCZodQYx9UY12cP1QUeWjwmKH3Db1zKwRMfmCPZRDu3AoskoQfzQ9vvC4f3ie6DkTx1JiRimYWDA",
  "key23": "4tTiu5J9juZDfyzg2PNZc2nyg3gtuCstsMPYaxBiD7MWZL484AQvyFpMG9RYbgYGuxioXdxfq4iY2fPMRinhhHZd",
  "key24": "22WUPuf77pWmGkwCDDdFki9Yp83vsxuLK8yPEJ769GoDyzVi7j12rXHFBChDYJXNEM3K6XCRZ1Y5iQYqrHNKmj3w",
  "key25": "f4RcnVt6pu1UVhCCrykMTNwv21v2VASSZJWXf7g12e7v8FiRK3tXU3zdwBTAnjEmnvq3rzQ59pzpKbVq3KBwLBo",
  "key26": "2vr472Yjz5AvrpGrWFFJCyqMBoaoYiEQGrTFdzr1YxFb1eFBYDYSWrfHRipQbUP5XC63fTtNXXxQKkz8wXXyYCjK",
  "key27": "3DJGKebWQHHr81Wsgx4agrTLTjci1y48BYhzaDuAgg4QdVoi4SBaXriDPF9zPMY2PmCwQt9LRqv65Cm9pCE4N7fp",
  "key28": "4ax3Ahqx5QBan1TNm7EXMcDYr1xuWbAe3AX5iwdeyuZQ2cUJwFA4sarbF8ENn7ZK5djW737DtZd4RfGDMJZ9BYU4",
  "key29": "4gKXL2Dzg4Z13mpk5M4exSsQA6TzR7xYjWLLZssJv1c56cVWyvq6Gd6irnWeJKJqszEJGgvvPNyBL6YYcB5dfNk1",
  "key30": "3TEPqU53oiSujGNgsb4ecwEYYZY7ARkGqpZ82gFUBRoLb2Lw8y4JWFmQr4P8j4N2oshyvJ15heo5DcdgQxF4vzR7",
  "key31": "2G785Tm5HuXcap9hhXvunA4ENnmGT4kgvYCU2J35iMUBdYvoATaGTj5nj6jiXqaLzxiL41u9mhw3evG2Bdwac75n",
  "key32": "5XnEAJdALQXtMUXdDHtw769b15EU4VCxu5NWN8q9AVGw2zC6cKKNJGERFycZ6dsd2W6dwkxBgbkejMqhynprYiEA",
  "key33": "3ZmvxTRmati6JCjBJf9NU2jTrfMMUP8HBySUjeqvKkpnpLdgtXe3sfFLDdNM7evirjwJ1rfoaKYc79v16XU7iNod"
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
