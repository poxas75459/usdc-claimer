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
    "5EBxpMMfSTKneqRg8Ce4X3CB3PxjhP62GWMLui22ySTGM3bGXYN6uEvcYqzsKVb9LWqPkBvF3HSo9t7fVK2z8tXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T9bWZdFsEWPppxM5Gir6RXkCmrHnyER7RZJtok6QNBKBES5vmktLm2QrgVn4DAP6tT9niFvwCKfDBxHgYQbqRij",
  "key1": "4aNbfCFdT9PpvH2C7iwVoL3uLAGf2hxb2q6muT3j1M4k6MqVXZJZfFTJFA8nXGFk9GKXv1jV56u76ggKv4c4t7md",
  "key2": "JffDi7NPPUP8XdU5r6UZYrNYKZYiF6PQysTD7vchcpWH93R1TQ2p1MizcVtHid5CxEx6efGiKnsMvTek6N3U56G",
  "key3": "2e8RHL1mLxLQoP4WqChD85XUdjsGTewex9U8GZ4SPJxWkfUyMG2GSBsvYCMYYXTNtVCpG4MN2hfa6q29WGgv5rkf",
  "key4": "2ujDfsUn2ocPYLxrJUXw8cYuwjcMVdRznJ2bYu13HaCySvKdt1iattaS8M9dnTkcokHGJb5sBXE9rezk6KuxUrHR",
  "key5": "3rGvNnfpC2X7c5Tncg2MTkzkSsgwygu31fHVabj1kfd3SaNf3RiAZzA7WFzNNsprH6kuBYhjwYdNCj75G9Fm5YmT",
  "key6": "2xPNrgBRGKYBP1Sm2MFGKsrz7yKUbSsQKKHzuxGbMu6Zk2JcfLpg1nq2k6iiaksWtNzmrrQRJS2dCnCQZxe9QnXx",
  "key7": "D6UusNFHT6HLTb6QDzRQjjhC9XsVTyAHZGW3Sd6T2fWQj2hVWXf1C33FCk5KVdWFW7Z6ZHnP6MnZAPkjUEHG1WP",
  "key8": "3DfEUVzxHnP5Je2nVyMJq1di6ywKiaqMiXT289iQKGLE7c2vCgEZHa3TMuYUD3e6RKgigEeEc8wWa9SEKXVvKF7i",
  "key9": "5o61ssVxjCQAQPykBnWZJekqZa93w4iC1vwKWWb1hEo9RKV92kceCive1UTBexubWpaHeWA3SbkbENLAD5bxj6yK",
  "key10": "2CCYNx77rQMqjai9J86fwVHj2TkJdfZEUb1Uv1xJK62KAKnhUcVurZVZriW8uN2MgEQNb9DmdUMpm7Xs1FSCwe3E",
  "key11": "3VktV1LWtjRQN7aLTJCy2DPQx7NHuwLoH6nQ5XXyWYAHNTP1M6dim7bfhxR4LtNJC5pg4JE1gsp8PHsyZ48CHeBs",
  "key12": "2mJDNkJffdkfKiSV4WKHVjrA8dJitub1qd4fScUV6PftSMpHBCkggcGS9QWGKVqkFGKFYsk5z1Z6d7BSvLJsgbLa",
  "key13": "3FQGqwaZHtcq3MvXYhAzzRJfSJ7Fyn8Q1koyEJw8nmGEYmN6qHQzXuPpbgKnchJnbNF7fXra1jqiaeGzur7Wj1dX",
  "key14": "4xZepqsTBHHDBrbGhVjgX8J2LxRLkQKqQyMxrevnMffmQN6QL4LpXnDtEbaM8uDUD5tfv6hzBtb2DGTQeVZM3tWe",
  "key15": "H26JdLPG9PMYbA8j3eTrJPwyneUFSohcELuH6ujkqPzW3p5AxV6pzQ8ZhSPHUmiLTiArXFPifxmtDJ6cJ9YBBAj",
  "key16": "5K1UgXw9hNsfmCSuPDZqHc4SeJMopdmQvYdTMyZGUXbhqYLHxyxWhmg7w67hwzF675usYEaeRJrbDtf8Zs7HRSKt",
  "key17": "3WKe53sthKQXKXagmfXsTjYnyhCrtuYsKwPgUSZXn5KDdd74U8L7ANfLjQrP4JgHivp6oXmwwEqZPM4WL1ZBdbJq",
  "key18": "4dCUSSgLPv1F4sw3BKGWfk1B3iK1N7YRh8UX4S3Dqz9zTZcetuD2VtEXiXgQdPxbAYTfBg22aZu3Vgd6niS3BNEP",
  "key19": "57zBAStQjnzUKZGaNuvPkHt9jgR7TZER3n1bAMVLSdmudGQGcHwwkWJRcSq6fmmccAcVJYgaxKertQrCZ1oxTSdc",
  "key20": "5n998RV7zY5NqKJX55PzbLeQJjb2mcUDHcGpGKBeDAJ71oVxFi2a9KtNH7SS3BZmVKfmh7xEeaM43ZbQ1pFqjZ9R",
  "key21": "aoTZkNHoS2BXFPJzYhTEBj2RUGXiQL4rwuLtfJaBbWnbre7UqiPGvMYywS5dfuGCxhmsENyyDQ7fBWN7tHV9rMQ",
  "key22": "4LWespCRzB9hZgcegV61RW8P5df1xfivta4CxquFjPybvcwPUNVC95wi5hRhz2ibqfjyxidtr1r8LrpU2x7tVDf",
  "key23": "2nt6dUM7B6UPDm8d8c65NkCNTPpJgbK4VPdTDCnYrmQQjj7gDrDG7uS9WTLBfGUVHFx1XRim4yhD4YL2gY6w5267",
  "key24": "28ypw6qzVNjY2TxD9Qx3i31EZ683Khongf2ZWJWwmav13SsPXhAy137H4CTctdVsQKw5Q815B7o9kEV2SjjA7j57",
  "key25": "2bqXPZAh6MNShHGYiHjXBPz6Jmo7GHdGjdvuexTscYzio5dmda9KZYgthafq4e8qpBqqc3vetFbbHBLvFuH6oYF2",
  "key26": "3MNfcEjTop5ep3ykYZzbAHXLcHmZfDsoH7V5Dynb4pqqAm8MJwi9TNQgWtVXZFRN3ECGSuALFMy5sMr8wDw4Vhk6",
  "key27": "2jVfPfcNYsZKDiFL4NgYHvxQdZghcTtwPQXvxPNPwvnamo1SoEw2boFbsUM3PBqGJXbxNEES9EPKiz8iMorsundf",
  "key28": "4x4Ma61ke44dkTznXpQPs4CrCPP7xvBPrUqVxyfj9pfCQWQwKTRvXLVDFwYYJojHCp9nW973UA1X6cvrRt2fQSr7",
  "key29": "56fopPM1NbuPs6vL9arkDbR9xHNfNzhqaAuZRbdC6LrPdEriNTcSgZDtKBiffa9Z63JFB1gxT45ycqFotKg15MuL",
  "key30": "5WaYPk63FM8qA9KLTckDGfvYce5cqvrQjjDtznamiXbug8bzQX2qbf8jS7VWSFJ1UTEeL3QsKtm5mVgtkWqhmFoA"
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
