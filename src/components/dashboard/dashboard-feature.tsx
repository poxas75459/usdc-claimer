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
    "3U1Z368zM79pWyWBHsog2cSyaCrE3bp1Vp9g3EfvC2rpyRjo59BDJSaB75bhTCzro4TvbuFvvQ6yF23Tv2CiE6VL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P6Tv2eUdvgSDLs9LLy2kPozrGxmS82mtUTNTSDVw8Y4yFGp7up4U6m6Xj4oHHkH1eVNHgCUehPXZTtmFBFF9co8",
  "key1": "48Aq8bnB4QBU6M5krQsLJmT2HMJqNzFU9cdhovjnTeBSEhZkkukHVFVAeZLtSCgFJXQyJYyY4WRvdbtyHH6VKLug",
  "key2": "4hqxySXGX5TtFpe4KQGJ7baFYpFUsKBFs8WFhyZ4bBbLix1P5t4ojbfJcMELTz2ucoiMgd5agkKneDBtUco65rE",
  "key3": "3YBYndsD9h1UEyxBcp6LqtgLsA12XTmKaLf5e5XkaJ27H2AkknU1dwGyxmx14n7XfE6Yvk7xbVMEyiyMiT8Rmpvm",
  "key4": "5o5o7zwSMmWijzFYXy9W44m6RtX7AUsvJfMM8fYEK28DAwEaR17gizWhRz2KqgkPj9c8KbdewLAGuDCK81sCeXN3",
  "key5": "3EaR95edkEhyuyCZz32Cd2PQSJiGzsdNiUKSjThYvTwWd95B5tjt9R2EkEXTnrTJHR3VJ9cGA1MJpvyn2qyGwWtd",
  "key6": "4HYLfASPDZG68ZQVHx1rVwxw5vQj3PcLXi7yYHn5pUySVis9EggUfB3Mh83K77b2ZefVWGS171DNSaY29f3zYwaT",
  "key7": "t6PH5vsyvw2cwvWkeEhMCFqMKrBKP7wqx6b77jo3QMBxgaPJmFKbFaRPx1xDM4sijXGxdsGzHsFovHvVRRmf9Xe",
  "key8": "3pyGWpNtWza38omXxohiPGfCa9depPgu38sGypmtaxGTujdZMydAXG9fe1NMaJ3sFXNwuaj5c7p3z65HUBcbfMyz",
  "key9": "2YHw4q5CaQ17j4Mp9dddWgo2YmQzpCQbvgtUCxswWW4M4gVcfYuBth9v56XnVivmhXe2m1BcuPrESmYKnJoxCetm",
  "key10": "zZqiRZ8fH3UMq62zyTUbC1BsZQiWpuNyUAnNsZfwy5jUbnN7WqXjaAPh9HpXWcZ2VRdXznx6gz9SqrJu74V16VT",
  "key11": "4jMMbvV5aThXoCjQccVmhMLBb43qb6pxFkABJTzTVsB92Td98LJwt2EjXsxGbKxNxcZuNXo5ADeMmFfmHHPPTz87",
  "key12": "25xrZmdFgUPSmQvkwVUVWniaGHkef7MrvtdFxLgw5L7VUnPYtFLbtpGtSsfjGHr3XN6hmvVQJxykVqGJNcvT62ck",
  "key13": "5woLWp5e3wmix3spqoc6b4kHk1cJTJ5F8fvTWDob3S8razfFLBNKLLHbGbZofE3XvJ1Bj2qRkfdd2yJdMNHiB8Qc",
  "key14": "SbDQmCUGM5RJVftxZGMimkmdTFrwd4YfJQMTApdsEq4VcBiXgNDHKLtnSVytS6JdQEdJUeKjbCAwGAFnw9PgZLs",
  "key15": "5iHCLHJpUuwU1T9ws4KK9Wd6vxN6xKKoqgPNyT82gnetRd3Qohw7EyQb6CNWFBD7y4x4L6UaiKSZFyWKXNAsKMDr",
  "key16": "3zc1tQM3okSJfba5rpKNctFkm3t2R24GCDb4ZC4PJUE8psbkuojLLm5JS8XqDDyzNXHdBPbBjcSSkMJDMJ83dUPU",
  "key17": "4LwC8sBHU2mfKm8YQ3ixt8HJxsywC4vCJu45mw4H1SM7qsXbXAvTRy7yY83oxh6hH7JYyQ5uXGstmnivrXZBaxBE",
  "key18": "35x4id2JqCxcdhPd7uzmeA34mxB6BrXEfLwcVx3iHsgJo4Q6f6aXF79Fpk4b62y99bPdUQYS1U922rG1CWubeciD",
  "key19": "g9FDH47R6poV6WJAFuEJoyFHS3D9nV1E4F5hG7WRe492TqjwV1wbRkPdKJRHytDTGvjQWLqFgxYpRPaDmZKefLo",
  "key20": "5uAoV513pWbYXFAFQVJdmRzoSSTr8YU1FRarNcaBBPQVAScWjEnsVVZo8yKeooBGFKo9ooSRVFLbtYednD4DXSMS",
  "key21": "5dQADP6mGbugdAaUg3SynpShJjoYn1WzK6Q5Yx7W2FhiwC9scfpXmAKBj3aSevHAiKiT9zzRmKEKwiYjbihU36DB",
  "key22": "3huDDL4mknmDp47aNGBxf3CV1va6nnSK1GPMy5fxbYA3PxqWMBjBxpKdkfQLCzHnUTc1uoHP9ejfGK6UTBG6pKwh",
  "key23": "2qxeuCJJGKcgKvLQMYcbuLksnWGXnkm7WwpR1uEP1QFvfAESnQ4PxYiC2j8o41NAm2CqHC7MsdvkY9kHnL2jRwS3",
  "key24": "3PdYXLp9iQnBk9zNZhgn7Zm5vTHpXcSp9SmcWA7h9Fo5ijxymD2CdYg1RcfGQWvqwp9DYwSc6Y7XnjTgZtfWBAn6",
  "key25": "YBmByU2ZK8HvGBakuk9rQqQKDKPSgBx3LYMFkTFUfd8GAAmBWKKunNU4SpqnyfYPVxBp7qcGpuyAXCF81oMK2Wa",
  "key26": "kQ7pRXA42bmwTSBgXjYdScNFh6AMzRyf9AR8c47hSVYupE86hcEB14rLJSHMqXGnFYtLHWP4UCteQFfM5YUt52i",
  "key27": "3MKs23RiDFmtTmJNKZAcxHPuBZkfZyiZ9NgRaXXwXi5RXNTyBLs7Gjhd7arRhwcip3yfb8FfhirA1wc3oDALjYN1",
  "key28": "Gz27ooz4Qxi73fmEqdjSHgYWe4tH3k7LtMVkryXfuNF8tg86HBHCWmR8rLTtGx7AoCzfoBaDbRmaCTqyqbsMStu",
  "key29": "3NsRXfDbo8Ha7ufGsPR9BQeav8A8heb72cky3muWMoBMu4tm2ju7bDfzXhxhdTXiLZwbCycB1yT8EXamwYsqAVxV",
  "key30": "tyaudrpx9wUQeLsW2PV11Yc74yqWMnxrRPWgoH1W3ojDGW9XJDgyGjjaCPvcnmwTk5JifF1c2ir5i91d8hCVEX4",
  "key31": "67E1qHANE3VaCQfSYFx7MqnpnwFmusX4VAu6zNg2FdgYdj9oZ4wXF9i7QdBq2VtuZxeQps1eQiuCZDm6BuytcBDJ",
  "key32": "2UDgaUSgBJNuw1pU7q9ZEzyPHH9vhaLfZasoPJgZcw5g8zwRk9iwdDSwNvHfCXtyJnhBg2sXY7JKEwtPR5PaXvYV",
  "key33": "56oFeeyKdnJnnxeq52QGCXCvsFhkxKskhGxqyy3a3BFAdPkNDPvyPca8QGGBTUAMzJ1eGVUoV54982CwYn7CKuGa",
  "key34": "3UuBvaMT5oG8PAQwvaYrBwBxr3zQvvto5BxkBF6rovz2k4UATkqFLU1EruP4KTWJ6nR4CrCteFfZb5JfkUsUsjmf",
  "key35": "25STLcCqSm8FvrGAq4q293bxQKzUoxymeL35SMeE5U6VTuJwt6BZniwPVFk57u5uJcnDYHchTZbcq3AQZk3qm75P",
  "key36": "4MQbbnCWfAsNk6BEGFtyRjwJfm7Qfcsv52yQvJZyAj8BVBiT8GKopQ7dnwH1HES9oej9i3jNozsb7XMrkvFZa8FA",
  "key37": "3Aqei9ySy5mp5e7Hw6PLpPM1oyNksDwp2eeCtNZH9qYMBEpxfSUXXFheQ15JdDoiVSjsLmvLHvcYMe1L8CMmNE7y",
  "key38": "4XtkuMErkjopMeNvQePfB8FMKJRaHr6REWAkgnFWhKtAFv1RW25FMrhhYUSJ7b1AYr3aGHUXHRYWatVFxFJ9gfQ6",
  "key39": "4AMfRDLsTxWcw8mkS95S7g5mL8fTVSsQ8NCNKJZfLGAZPHkbYUMWhpfQQxNwvCRJJFfQFgWJq6tB4NzQn8MZAcUH",
  "key40": "zebEDzuQz73UjuhzFfY2LjpvT1FBsiSQxveyA5gZsqneukuuSfGCiCGuPNqMMXKYNP1VhJZPfkfXmFoGZpGtJpt"
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
