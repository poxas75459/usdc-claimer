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
    "BUVgZeGrKov76aYNAGexD7hw4TLdtZi4Qm4KMC7sLVs5iUFMTKgYQH3FeAwrnGETCyuUyr48jyuYmHySkkHKFfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tLW7nnH8kvAFC4E4VNiyAR134k7s4tVekGSfYikYEUUHbv6yhY2U6ZnUdXwb2KiiSF1Qp6KeaEhNnFfzq9gRWtg",
  "key1": "57o9AjtLuhL7WF9UPmXxBpXYy83zh6RkMUHHaqaWKMWViR2pihFdtz9c2NqGp9DdD9Fht6XcUPeXk43opK3BYkMo",
  "key2": "44BEx18rWMP68kLUkqbmGQ8tuAkGfZWXF371aMaYYyAmS4DDA7X8QzkysDP4BZ1QnsU3Ni4v2TkLwHkWbrpqbUph",
  "key3": "3zxPiXWZKgBV8YbBACzjZ5MYVXrcXByURCvgWupEaYEyGy8T3v3S1evnHpYnZDUWzqpaqAoZNCxjGuAkerxFgd3B",
  "key4": "25kntvCuwGsMKUtDopAgHj7k97h1p2vQPNvd8m3e9BGRBnLfsCNRUJhBDrFvpDAUvC3wfTuNVpftMJ4rGsYLGkRw",
  "key5": "47afozEnBiGe5ciZ9MUZKsHvBmorX1oCzRoRLTQCpe3DcYtRSp6HZ29yK8MZ7qdY6wummykQPx8RMDLTBhMVFzWG",
  "key6": "5GuVc6uzq99cu12V7LcKCMw7Q5TSjH14i7Gbh2XVMf4J1KbAVJwWcWb35k9UQPsRtJY7oCfqe3CWNXDakk3vUpSg",
  "key7": "Ck69StxNntxkmLMkhimQGnyC3MbJ7w36JqpGU2YK1WYq5iVaGY7GWEbuxTpAftzBUuLvkKKJpjFvwT9o9WR2nTw",
  "key8": "3NX1LdeGGUQZJztRUzc1WaXjXZc4gK2vX6ML1cEcTM6yQASMDp6eL1PgwQy5eSmBBG1TQEYDyG8Ta44fWkG9URex",
  "key9": "2dXHgUS6XqeNVPspQ2TEuLmpAhxFMQe4fA7n2JkxoBJ73eeBXU5P95UpUhNRSBKn9koMEoBmqeUSV6CjxUxj6ziP",
  "key10": "bptU8rDmBMY7s9AwzGREWReKjBb89wS4a58qWsYWKQ3MqPToA2C3Eoooapia9GsGenXyYtNCseTEyAwWx8QSMiH",
  "key11": "4j7oX41Wj8xLR9DHAV4sxWE46f3Pgcgha215KC76LWY2LuyQmZ74P1L5gBWsuApM2kXeVtwH9sHrpunVdh16Qboh",
  "key12": "4jDZ9fxKUH6JrMBmwxK2FCbfeBkmtWiy4TyiXFTbDEo5RWFEvUjvjKYe4sLL4gWuemG8bvNoEJJYzcyVCTtwMV4T",
  "key13": "zMNki3fuW3JCdUhoPptnNyHKC6FxEsyug9SRLQkdHjKNjm9RTDHGYextMdeH2tp4HuUHvdYyWZRqe8qJVHqoU6d",
  "key14": "33VgAhMzUyWUNePPEJ65Qq8gRQvXas8AWQbCjX79X6YTg3TgLPCysTT28JstQD7pQKZcwqVQ1AmX53FSPa8L4UvM",
  "key15": "3F77KP5zceoW3r6LCt1tFzZBoJJMsczdNyQXSsshRg5zNTyB7yCHoB1pfhqMzNprT4SY9q6WCBpW8XkqoBy7yXH4",
  "key16": "5zVL9JSU4HMdK5z88auCBy8iF65WKBVFdk7KC4fvQNvApRAvUCGokfrRrn1PwymjjPMbQw9F9txj3ACR5bbrXF2b",
  "key17": "2BrwGTqBfD57Lb2rgRpAiafPGmrEp9TgzCPyjt8iFLWvPhTXa1SxiTbMfazSqjhGyuNxoMwPpRPR4XAQiGdLuX2U",
  "key18": "5TQaUtCVnLzuGQUuCuurFe1PuEtU5Sa3c2bTL9SJWAzYwi3f3h8yn89C7eFMkZ1CZQzN3TWRwBWW8H3V6kp9SBKz",
  "key19": "5nkNkSvvC5Aa4j6aYzmVgQMhTRRNMtBWCFyuXsKwvqQ6iqCqeJsMW6tT8pGMvBQsj1BVEYtAMc2jcKEzZT8r3tLE",
  "key20": "3p19nDA9RTRbctDBx7jECWa785ACZhcNjdZZRzwKqDbdsmvNtZF34U32fD22RhKBiuUT9Sy14LKq1xFp8tVpKG6V",
  "key21": "2K9LYFHz2z1FXih5YjrQTuttvtcv5dEymto3n7xGpb1mkpDPddEgNFsQsr7icLVYxuDUyoScs3WDbDbohCRbKi7W",
  "key22": "RQMiAKzMHp7W6zQmEiDHaRRQNFcE8XsU8t6xM9nWeFsbrsRg5xtE6siocVYKrgTAs6pMcfLHAs5AgxLVQtJD8AH",
  "key23": "4RKNTHBbVQaqCuaXHKNgpGRyiu5tGj5LW4ThmJZT53WkRjmFdeQVW6uRTe9Uf4rsNL8XipN6WyTbp7rZ2CfpwkHK",
  "key24": "5pxfaqSMASft71HQMpWhViUyguvVDy7ccXhjM6B3F2YTYhKJ3YoALmnwakfSp32vvoGJvHeMJYvXJbcdb13RfuZS",
  "key25": "3sF3f41ckpQFs3VY4GC13tFsXQY7EYxgZhUXHKx8VH32ioAAftbQQ14kKznsczvNdAhg8srhPL7zEQwQVbU7Cn5A",
  "key26": "tySuJmKRSUxdnBiMb4B4NzdASimNT2tZaUGnEErM84bva5uiDhghABhLqJTRGNsN3MLNt7MPW2dsFNfonJMQQ9V",
  "key27": "47r4T2XP4QtP9gvYFc6i7Bk9BQ6AERzwReXgg5VX4EJcJJyy42rjbxMe8QRxsnoj8di9dbGHZB2a7v1LdwDyi3Dq",
  "key28": "3SJabAsGqwifeX1E4mRF1EAnSiZoQMhwM8mDgwyD2j6PDubw9hBFygPEFcwDCaPJuSZNU1bXpA2Vbf2mmU31D23B",
  "key29": "4NkYAVSpnxYCaq2YNyPSSnTWahppzaocsovecCwxTRVmVzXtJQe5UPcQ1pbrjWk9iUo65hc9oYcF86v6rSrS6fjd",
  "key30": "39NWZMi8U2Dkm5KM7Fu68XPhu2YCWZz7E7SqcpmkmRrkcVQWWcWFKvxfBqgNx5e1YowekQDsXXrz2Y3oQT5W9Vqe",
  "key31": "4wXQR9p9k5WyahG8JmM2ihsWEDoVnQxjx92jFrKBrDtEFD5HD8a7tgEwJwfF1ugg1e8WFSeX6yHJ7QwgSUbAJDFB",
  "key32": "3Y1gyxLJVt2djAFEg9FHi9VjGyEicqzE6eAw64oecEed24FJSKdnLnSb3CnbPmCPMWP4sCxbmT9g4T3Epen1xfbb",
  "key33": "m9VugsEoZDAo7PYuEDmy3FT8fCpJrpiuQvx3VMQbw2gZMvqpvmRbALyNrvdCczbKpvcHG7DAiiMvdXFxuQxhHAu",
  "key34": "2LMbKjmmRgc7xM9TUqx7DKYNbGGiPxpLNFYW3zBCBKAEcSnmqc7ygpUX9VCdnbC5VjvxtVvcxXGuzLwqAUTjtU9W",
  "key35": "2dqNQjzK1MisCEGHzvosXqiJNjdo3gkT8GpGGDegxUPyEBmvRpxycfqCEdjRryvmVrd7x3EiZf4uuxcDSmCsgzd3",
  "key36": "2M6euGKdcVjeZ6sWaDPYF2Fr2JjNf8YnXMoeqxVXANc6hpbWXiJ67BWutM5SygsSCh6yRVkh79xW9VsxAwCHh3a8"
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
