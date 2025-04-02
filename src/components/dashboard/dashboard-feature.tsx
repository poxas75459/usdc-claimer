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
    "3KvB2PUrhxzRMsKJD2ZMDEpBm3KBZEtzhHGZwGCkF3kS4BB6zkHWmynJC5uBhhLAQW3s7GcajxaVkxK8EFvDt8z5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1XQm2AZC3fznzVd3mvVUhSkPkW368AbESu7imJoiFBBoYZujyxXLeC98atsxVzCwXUTLiSB8MsMdALxiQuBUxFG",
  "key1": "Eu15PHuAsTEc3upMWfm9uuoGa4o29PyybBSpY9jFdvrr8MUsDx1bG3mBH7m16ZvZ5kib64XA1ijNw93c4iNixpK",
  "key2": "3FVvQEhVh69SicYaRW9uejxJLWEo2AYfujwzdW5DmT9iQ1w6ZAPtrkYKKcQkKPyhULJS8MEzHnmT5chBr7t2UXAo",
  "key3": "3o3paSxCmMtJwVhPeho2MCbyGr5bEVTxLCVLpjnz2kvMwMe417b6xnJZ2VNyqbNvQpd8p7kGaEo4SAZmLMQA1JZK",
  "key4": "5YJdecvgGkwrhfG4KvaPg5Pxy6RQnpT6ozSw1LdaypPA4MvCGbZeQBaUv599odf3cPHLGoqmTt27Ud78VH8LfC3h",
  "key5": "462FKB2Wst9GTKWYXLxf5XWawH8Me6oevqbJGGZYRjwonrFVbVajAQPvR8KXXoo5bvsPqDnWdpddvHynCMCLy1ch",
  "key6": "Q2EnPMzo4JkKmMsAzppZTw6iZYcWdC6dNGTwHV6qSF3FMCgGvg6wDykxnyPnXB75iUSDW7ZLC2fJJo6Ue4MpoaJ",
  "key7": "5jsKzZkmvFr97MNCJnX9S5HiWz91hNt1eKfz7fqujKPYUeF2sfK923bXvq2uos32VZ9KpcDDTSaHt6bbNWRZaj1i",
  "key8": "3ACJ9RaqaB8m1BHbVhCxxwpePBCAvTgYz2qxXt34B2cqyc63N75JGJUztFeKDLSrvGnNxTjPnSzfDwJmpmZhgHEq",
  "key9": "3EmBmx5eG1Km6XVYZfrwPkyuNeRdu2oWKChrQWYSLjcQMDptB8X3f4CB1QbkD8X77Af3szHEx3yGZEUQ1GexqGnn",
  "key10": "vbyNBdzcA1kZYyoPQktwubcdPtE1rszmBuetSq8kyvihUw9Z9yD9uWcYzcmJvW42F6HfkVCvgirvdhmPVA4BjcK",
  "key11": "3pSdQVmRsaWcyjH4fNLUWo5AREkuwi14Eg5vXAfQTh6j8Y7EGjo3TKstmCTpL1y5A9WqdrjbEEsCWrGoMoCNMfHy",
  "key12": "vNLkkvWcSCvFabokwr1FV4xbQwbge7tbApkGEGay9bjFLBUUweymAynV9AjTWQReRfn5JT1UJexk8syGgoe8p35",
  "key13": "4kiLzFVn8FnpAnPY5VKU9boaiQ37KDm4S3HLjotiumbtwbQrgR2VqUHNsMtos3AfrbSsXSRdcsaD65zF2dy32Xnm",
  "key14": "AbkHmpRhTyW62SswiGcQvKo9SFYiyi2Dd8pTV3qSYb1W9FkvSXEB4KzfKyUx9JeYSFVXxWJZKS7J3JpU5PtM4jy",
  "key15": "2P9KSR4veHPgU6HDopvdBsp4Lb45Sb6yFicsTvdLShUj9NbggfyfYnah6yJwEcACXNPnmeK57T5GACqCC1w8CmS7",
  "key16": "3QXsmi97b6ctJYcYfXQ6Z5e4h6uBzHzxCdtm1rTZ2fe5tyGWo6B1fgw5YmpEN5jQeSMxwseUJ8wLykxnEPx9RHaa",
  "key17": "4kg3aAh1TBXbdWSiT4PinY84Lh8B9GdeyEZ5SsMhJFajGz9rQS3w6S11MWVhnwf3JaH2in9UQkt2uYr2c67Yehcu",
  "key18": "96G6eFuNhgJidEaEigyAV5bztYBWE4bNZdGM7grJHCNZJKUbYGnV4wXRZ4ZBtmUJtBHykcD5sWYhCNKpkTdr9jS",
  "key19": "2QeQQPRL4eUDZKsqJsKDtBXEoCmxt9ejbvVVtJDnpNiWGcoydPxDnEjPiehTmV9pR4e6wz8aPp768pLhfrthGxB7",
  "key20": "xG3TaH1mRwK6TfH3jcgdpTPTyM8MyMXYE4A9soLQU9d8QfKDJj3J3JVjKxgAM73YSyn89LgogyEzqaKiQZuVJ1A",
  "key21": "3FUBxm9z7WQh7Xy1GGhsEyoHLK2aVMxZNeUFn9jAtqsYyFdUC7kx1Rz7GFGnp33LFwnE7XhWPZYAK1r2VFGKJgP1",
  "key22": "rJ7TyEiCKibxup7EQyTZhLBixdrbWEHyXvHAJgEQ8cdNMVxEJz5Vrdthg9vJ9SRzvSWEferF6g8HVVUk1GvhQNE",
  "key23": "5HswF9hS4sRCpduudL4jNTZFjux5nyyMGJhN8jRhXvKcUUB3vdrB4vwK642xoosta8GujrkbexVHEQeArybjEfhu",
  "key24": "3o8xMtNkazcfocpmyfywf7wL3exAJP5CzVevS1R2LTJUsiPePvW2BbF82b5Rvc7TpxvBrkUxdb3JCMESYd5xw6UD",
  "key25": "5PgrsJLVQqiYE71afjiqiD31DEsyqz5bSgqG63MArngCPzeM2gQvkDpmKRjb9CTsx1JLm2DdyiKRjNUwWQ98iTUN",
  "key26": "3htupdHPrdcKvGpz6M1Ru219ZaixxVAo6h5WAbzXRgt2ihTwLoYWwANfbL6nvUJzVeKeTgnvMFpBj1bCZoXZ8TH3",
  "key27": "P2oXFK5XS6eDnVGqrFi5DczhotzVJ5YUF1zbdFtequHmnscm4vcxamC3nu3HA2mYdGyaoV5AdLREnGYTVaEaho7",
  "key28": "aLvd1FLSKgWC6wLtzWLdsu6chGoqEaJ7SL7TN7cyMUW5rmawhxpDsZf3FAcxBAn6sftrezPH72sEvazRyqwZfNa",
  "key29": "3W1iaY4gJwSDHiJJ3Ho413fgF6bRBGyef8MomEZ9nrYeVD6riAGNb9k4TRCjVvEZXxvqKL5U3HLk8itC9BQME9Bi",
  "key30": "4d8JtbG55gSztDvakxsBg7jwwUVoTzazqpGmNmTysHogdwBorhEggyE2M8zLC6vAx17PR8BksDuFMAvzZhyYVPyF"
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
