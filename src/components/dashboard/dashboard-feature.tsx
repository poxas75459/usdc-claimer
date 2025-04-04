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
    "4udbpgkN1P49U8P7G29KdC7Uucq8ryG32g6QNZp86ZsyeQuuDgSBaFwf7wDQsVctYLfjj2Sih34C6uBKS4caXd9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3psArhgLik71Hj9idexbqPSFmvjiRBA9DhBjqy7KbDVAdMiKRULp9YRV4fjLXezHyhAhemDWgpQUiWAbjMJa2aEw",
  "key1": "5QkXKYgaodwV1Feo4qedBc7QR8q2CVXHXadJZDVJjdPDY9WKTPYCyNQaDzyDe25e5hQYYFWmHXLrazvVYRYYXJMz",
  "key2": "3UtXMb5ZKuLTnhmwFZngmWbm8na7iNyvWVRt2GwHB67bu3D1ygiNdMNwpWDtpMr4vs1fzmbDSb39gY6qCzDRSPwR",
  "key3": "4ccAYtaNRRBpPszZNsfQBKiQ9GQzRHwVqpRQK7EvYxEG5LEamp5cXaoTpcwvrQeTDLtMym3h4QTaJ4ugRaQbN7T7",
  "key4": "HCH3CGGRVx59riswjddtviTtpQyoChV717KuL9dZXWG4J8mywxXb8NkX99x2d373eFXCJTX92yQ5BDYb6qYC4PZ",
  "key5": "52MEGxicZ8jBBTroCC7XsUz1oxKCKyb9x5KaDzo28xtfCpycqj9gShMHrKQRG4bQKocBvkP1yhPdrq3Hx7daYo24",
  "key6": "57wNNacA9kW2mbvvtWun2aEHqW2vhFSstHsAq5ywbLhxmsdKQHZwZteWxe4cy2XAga7dbUEcefqM6pZRXvjXeLvd",
  "key7": "2QKWETUxYE23z9Wfwm4YXZMH1qx3f5tzPnGu6BHz4PTEhAG834LGSLP8Sgwk5CzXPqWeqeQ8at32cw6K6cXkmry6",
  "key8": "JQzj51GKKGEkR5qBzYb9EHxSikVWQY4vKb8mrpzEbMRq8BwhW2NSbHfLZLtW5u4xfjjXStYCLX7Fn3nHik8hUpH",
  "key9": "2PmtaBzoJKSdwR6N53WMRXA4HKoxPmd2xbguVB8G6FmEyUV16aSLJXhfW9M434EFYgFRHaXy6TPd3gSyvLvDn7bo",
  "key10": "F5eiif91b923ER2omL9sdW8RpEkT9Wf5AeKUSYVnLuGFCEaAUXG1YBWmpHTYiv7tyLW8RodzgqaBpgVeKbMnpNx",
  "key11": "2t7YF7T2XEPiLsXzWDhaEVnsoxyZCPF93yw3bWuLmMwvDUxdjgQRtbm8DjHD6H4KhNQged4Fg6eCVKtX872npwua",
  "key12": "YviM2o3Gkm8vqSCHdjbkWTigE5doR1MFsjYV1jpZcL9EkHV3MxBxFSVfMUsZfmgo8kYvxY2NPPF9TvwzjVWzj4P",
  "key13": "5S8tQR6HA8VmxSZgBKK4n8Rwr8inbh3tHn5zJ2ak2AdS89X8VdDRVJ2vRnfVuYawp5L9ad6UZxfkDHCFmiu7s1TF",
  "key14": "5GLFJ4T3Cb9wRX7TATxGKEJRkbg5RTrja3w3k6V3MGkw4tn3oQjsKVEuUTmntgmM8vtHqDVcHjM4w77jqSJaXvn4",
  "key15": "9yMj4rPRmXbCaJGgbN72Rqydg9j3HmiRtgjXEr6xELDujnon8434B8E8ensphWJbRsv43NNfGQNMHwL83Moyigt",
  "key16": "3R26VtE3eNS5V2ahKHebYYQuqbZjYinumJLGNty3mnB9tD2rkoJv6sxnNgn4rPUAAHJL5yvoCv1JKNbJhUZGacTi",
  "key17": "2FGsYY9pPSyrKWTszPGy1t39B4vLoHeQ2VbTrwRmh4JMeyrCtLcxqQuRxdBEhDnHTeYD2VuFUZn8dnRquDtrMCf",
  "key18": "37jLmZaSTv2BPPhHPEPuuazWayvn56xygsLwDCnw9tDzAEovWarEpsAP3bKNeoVSXMVaDRZbTQ1vLGRp6gBrjrQd",
  "key19": "5DUfL19aRoG8A3niy4FYAbt9EsSN7RhKhkbe8CEHUsam3cKsZX499ErQ6zA1xuPkhRKy9msuwLK7cb5SXVwRbwf7",
  "key20": "4fGjuuxeZPEfG4AQ9ET4bncTHmk2urRUdsuenZcPHKrcJjitgAqCeMQP4WKMnAmU3zq95nadDRjCDATSnzQBk9Td",
  "key21": "3P2zMdYBHvGKetMcvWu6ytaYb8TJVW4g4oaEBfKnCYM7Fvakga8jQgtZZfB9mCqQi9Wqc2bwRY4DB1aJowhn1fvq",
  "key22": "4CNZg2CvjXGJJQwfr4aiXzJ6MtSqfZhfAFAQfvxS1uziPZBYQDcavtUrXbmcAxWmtKCxAXAGXf9Nd4HoFScKUo5K",
  "key23": "dPyJiwZ3Jut5KqV7HHpBn5dXPrENeNHKkrE6uriNVAgY96M9cFhpkPAH6TNweibonpC5sxb171mEmqmhtWS6TU7",
  "key24": "p9WJ5i5xBfGG2eb8v7pgYpwuBCaV9saKefSvzxrhPtKw2nU4hS3Fz1PqDYJUAZht47zHrGd8Stxd1MJJT9K9HmP",
  "key25": "2K4y736LtoSqssZeEjJFJ4UZxLHqjENm26G11WFoxbJV3d5QG5hk9Gastqh4Z3sC1ZtH22cnkBtPA64PYX9Duud4",
  "key26": "4XtwE5BL2oj82NiWcMEjTQsvXAiAMT5nvzo6sXUw8MkXP6Js7o5Byf2enKo7fSPwhHZuKLSq9Bf4APVnFKwGmeFm",
  "key27": "3NqDt5DBWdM1J3hFpAa7aY4fhbPZVnS6FZtFYjwNS3be6WPjRrfXTogQoukDggeXNjBXmmhVymAt3X9fshHvTnGu",
  "key28": "43Cyy9hAqRGF2bkYEHmwjrUuVVrbbEDNdM3LfCW3RG6JskQGMeT4F4DpKd1wupQNQxZxd5XquMKFE8SFYpgoN4Q1",
  "key29": "phw9tKzNrfbykhJp9p2UzdKx9k2YAkwkiZSpWhGCkNYusk1ximYbJVczYsQKNfjmSL7LeqoMNCDbsUcyjyDFVUn",
  "key30": "5m3EwEHFLVp8uos5G5NLDXiSyGGzKfp8mKNNT8VejBfnu9hfz76nfUP52X7oKNomAWWkoDiRirbKa43a5quHfwUo",
  "key31": "3eH5Qu1hn39bZcCbYiGqewoLRgC3V7GG9Gcq7Z93qh4tL3xGEXnGDRm2TjDijER5DpK27p69SEhsDUijxo3QzYY2",
  "key32": "462kwp2atrgUQj2ifZmdpQTx9HTbbtpW1QFuLf2fjG6kF2JQPd8JcwPVj8vUHm2aLHwzRKG8o6u6ETh9es69GvZs",
  "key33": "2uzgd7cue9Gc1q6vtikMBTemN9kUisyB7vF48kaVG6fsRzf9PWH8BWZFu47v6vRZfvcYkydNcpKGAFANZWCHEWXQ",
  "key34": "3VRHkkGKkJohr2ZEj3t7pxWEyyitwKDAHcpBgRsf8xh8n1iFTqM6zwSc1CcsFj8KGh2mXpREfhxKy7cRsAc62Tzn",
  "key35": "5owPoP6B8EpQxv5PCzaoHdDW7gmFQX5JhS3w3sQMzRoUzW9vZBM7YFiqUEZa57ySErcD1WhtLRUuCK86SE9BhoLd",
  "key36": "3Xx2V46KdcEijfXSPzFLupUocWT2eUsJ5EBfsXGbS4wyGbTJ5hbGEvEkfsiZXx1aWE98ngHKACQeumFjgzf6NLZ2",
  "key37": "3viCZ7hnPGDakqENX7dVfQ4cJmBVj2kejdaU5NHrx9sCF6KHMtGMc91G8yZhsN1oLJp753q7SFjhmgsi8DUTPUE4",
  "key38": "4Df2poT6PgGa46njBF18eP4KvMLa4s6wq3RLm6couBRPz9eQMawveLGKspdD3pZwvHqqZTN7N1r728ERqwQpoV4X",
  "key39": "3Qjuia9UwF2nnuKE9aGFPNXSvycnoEwY2vsDr4f5jqEYqdZ1KaxdGeCfYKtXazYvQad2Ht7k6N8Qysvg4pxDRVZu"
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
