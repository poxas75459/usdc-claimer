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
    "2XGWJmsxZj538aTywXYWrrwPBCAfXSwWHiNfG9jLiHvaCExX4fcGFvidg1eVE5T9Wzni5cCsp4qUPanBwvrnXbw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36QBvBYREKrn5o39x5qGEAMFjGD9mE6tAUvtmSfDWM1WbJQmPXm4h29ceUizaiH8QEB2H668kFehY56vTd8PkSKh",
  "key1": "3EGvHPU9PhTwabZ1ZLopUT59K91yvKtcDC387biiEoX2ERFW2h5r5DFwZX3DhFyq7MNDbh5gDv65MsqTBLEP44aG",
  "key2": "MoabEqb4HKWdtxkGex6XjaycpXZpsP12W9UFZxZD7F5fGzCZwrzxWzb6bV9SD58ivTTj71ru8dKDMN5LzRdqoby",
  "key3": "46LrjDx358w9gU7At3jSquHx41DBPN8bQx8mxjm7WzT5hqN5HdbxqbowEFPqpyUYtPyBW4T28uhemcEjB7fBonLw",
  "key4": "27xBQBX2hJLU1ttB3Z2yMjtEwhHnKgydBCGagaVvY8tLmz47YLVXXWpv2KYZ92ktuhoXe3wjmk7crsKxCEAhkddj",
  "key5": "27WHm6CBXcXTA2yaFg3RuxkGgq45eVYz7vG2ijVoudqN2euV1z7uScxpHiNWFQNEXzhBCRgvybbUXRGcZ6hGVQhy",
  "key6": "65ZPACiQ4KxZbMFFH9bXTwSB7FeGasjGJQ1rgmqNXkhuZ3fejafSz69CNiGcWnYMa3LZic4oSDcrtso5kPQQhMzj",
  "key7": "jj513DjT2ThU2UewbYtxS1u7akQtkjUMyd6G8dGcWPCWwMdhGh2pBqDUVnoyNb4cJZqfUq7qLmy8TCbCQJKGJUa",
  "key8": "4y68tmPdDzCgPaDLmaTiiQ9abMKx3Qg46KdZtgRpP2ykg3MML74LkGXQRhtEooPDnxt8M3DtAa65j1t5LCWNLAEs",
  "key9": "3MysYbBdtst2eEuM9JVZUWNUkHtAzPnKAAf7xMzpM1tVqL7GKT2YrE3dXFudUFxhdYV4u2nKUTeMH62E7xwMPNLt",
  "key10": "4eNHYbt6H51Ko6yD3mFUmZ673JRCSVN6GUamYHhhJTQSsESZXt6viJ2SRknooor42bn3vCMxDNAFsTNx5s1vNxMf",
  "key11": "2SBzMGuFXHuEZ6YyjFaGpxgN6VoD5BNcTG8p241gWsQSJykiUz3YgLugoWiB7SZfSyiCmAT64zYHagRSPr7VEqFw",
  "key12": "3TPUG91kGTEVUfAh9pGbkuQuU7VLFoHRywV2xj7vLaC8NsQsWiLZ92zgQ7LCBhgFSJf1xb6sypcyomrg8b4D2FXG",
  "key13": "2qhxnveAxtPwTFzNkbnXUEcemuxgNrx7m9BB1Tg4X2SpJ6JiGyPeirq24FuL6i4LySYWH4Nrh8fHQzuJJW7qnjsT",
  "key14": "J22UxeGsoNZSsds9e4DPZk2WTd62GL8316cV51FuC4q1KTRVg1fPtHmAKwM4KP6c8GPScmtSkEswV6njYcUkpwi",
  "key15": "4r3D7pdCwg6akuweFUoJvVgwhav2y6L9AtM1apSWBgZFVGfikJRHBc8ACBWrfbReTFysuHAtZorzK9okjJ31BFiR",
  "key16": "3ChG9qU8qJ9pdGJLJ75LFkFxBpbnsyDHqP2dHWVXQqwm36FrU5ARHMbxDqnz1i6ynbUp4kMWugGhb78KoDs1GJED",
  "key17": "3Po1wcRdKMQvt779SX6Vxf6VYeTqDif7gYN6acBXxSLioStTs1BKpSFGqQEJMkf9K9kh2dJk86Rot9gqqPW1MaZy",
  "key18": "2rRzpoPuRW7MFetmzHVw7hzZA9BkivuP6xvUbCAE8f7R9p8BzX32ufit6xddEkNsNG8X1FxrrkcBQVhWBCW5swEj",
  "key19": "27xQhx5CXDJC8L7BXnXcmGpBfsQApSdSoPsWJh77GB8dmDq9FAYAbzP3zxCtn1fWaCgFL6rHXWZihbydQgzGLXfC",
  "key20": "DZgt4WggMPEf4pkGJA7e3rBymHfL7vy4j3TqSXCwHNXAJ6V6wAd1nrhw86A4aVHnMnRijXM9iJbunCmJnSxS5XG",
  "key21": "eWBtbHWCe5Fcnuhr3CagyhENqAgDDemECMG6VUdQ3f9K5aMC1owZETa5wAJChJCtHxaXXfwfSgBvFgiUGzT5WcN",
  "key22": "4H7v8KwxjrLfNQ1hdeFai61KqWSk7HwQBQJtDNggiBEZGB6qjz7h6tCNALifCkcQgguJius9J6PQFCsHCBMZk1bR",
  "key23": "2AeQPYvGh7TsfqdJjuZBFYw6t2LzWze6F2i7F5ymLrshKiLTC69ZLrzvVCrVesd2VcUGTk27ihqiHrHyPwyjLqvq",
  "key24": "GTo6EETvCn8auXpQPXHBgo8Xu43xf7nAirwUy52dWEp3RnYR1SDWv57aMnChFKpzS3n4JBcxcmSP3A3x5qY6xZi",
  "key25": "4EHC5RkBQUHuf4AVtkDG9QvUEzRXbcG1LgTosmGpjeFJos4vrqeED4Rse8TGwh5tVpoofgkjEr8x5ZeNFiLxPpxB",
  "key26": "4bVqK9BLjhBSj37ij1DCGkKtyxy4bDtgEE768Rfqwvq8fpAwcsoqvGsv9QCz34aX1yP2Ni74ZPZnb8DrUDwCmb3d",
  "key27": "3qHwEHCLYVkzmUiwLgQKHGNFbDHw5zTmcBSbWQREjtNozJu26sp9YMUyU7c3khmwxpsGsUps7B2t3qDVbVVxTebh",
  "key28": "3zXgZ8H6jDkTsErg4JMjUthKiRzhVXwk7PJiuxwQhdyAGfdASHyWCTCyFrrMyKp1bhkZgT2TTEH7aW7wyVBALjYE",
  "key29": "2dMQvd26WKqG5Bxiv2C7Vm5Sd1rYqLmtaDweBCWtGhDNTzdaWjpcyQQDGCYjxW8cirMKxUgaEfJM41maSYqEVM6P",
  "key30": "2jPQAqbburyxiJJHjf6sazeqYWcsLyjjRcgbv5NTgazPBA84UC38mZva18TSwNTfnBxjk54ZyNRZ6rraeyQcMwDK",
  "key31": "4S9EkrLRkivf3VZb4qMERQeL1nYvbwQrQgjyVcw8SeiVV3M1Q3kHyvyesWE541bFAttGSPE4zpqcrKoVBYDcDuyL",
  "key32": "3J99qBk3PHLysUgxRiCndtCp5VPhenSUXnPuWT4nNbUXuzSZsTFaKddgwacGaqfjZGBQQKMBtQ9LLDaDatxsXx6m",
  "key33": "3fw9cDPwvCwssDfxFx5gnXuk4ixYWK8pzehpNqttoyfXbaNpre6cGVbzavw9ftfC3EvZiKETCsLWDFg399KJp1ZZ",
  "key34": "2nCD8UNDFUT4Bxg5M86snLAwSUkWzWitEM39omMpd3ra55eAiEmTegER1iVMXMrQ5RCvtq2t3vuNvijMq2tWNQzt",
  "key35": "2JLcmR54JKEQwHJuBNy52BKPMU4m4ytdKfJat2a5ckR2kuT5UsSrYYoZxGNmqp9bAyRnNi86EQvLFSeRKSCb3HZL",
  "key36": "5Xhiofb5nevQH6Fe3WijqB3m7LEUujiLZPUdcQDAYKbYyEzrF45rtto6iqk5qZuNk5Fg19nS2ZeT1ES9yVs2HasD",
  "key37": "42J5FJtfo2CrpxPYHZjYkXFsJ7VVHjnntP55SxJfvijxnmKu7vrNYqKvUyLMxobfkU6uhFCAtSZGnPdvAHycpast",
  "key38": "35JuTLSUrQcPNPKAwJStyAUuFy2ZtcBL2cR8PLFqNQSsYVNZostPGNq3bdiu14qvo1jHA5yUHnXRXmqpHokQJmE",
  "key39": "NHBqhKMgh9EwyEEamWW95egUjZwcWX8mrBQ36t6JGWV8XsTKmgVxGEZoLkhdQVoq9stbvQTY42RMLvtZcioyvJJ"
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
