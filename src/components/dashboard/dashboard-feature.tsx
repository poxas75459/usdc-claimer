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
    "4ViXngUoXeRLuGtEeCtZKjBA5kbFUC4vsKP54QshBtcFdM2pYeMHa58tnZ9szim25Qvp18N5mUyWULcbiMpkhV6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zQSMhThkWvFene1q23uz49EiU1AiW3MMARagrHKD3CbxC5RKfc5wyspnt2x2WnqqMM9tFhZhmqrPGzN8jvq6p7t",
  "key1": "jskSfbn5f6eMxYAMzyJVr45HoM3xWsNyyRmehmNTeRrrn3fbwjbcQJ6FcBUbewMqV1Ms34BnFeBLSNz4TksBDoj",
  "key2": "55WDXkmGjL76wAuMxLgdbcE6iRb9AmiiuwXN2KiVuoBMBdjKc73WnaSkY1n7oseuDh8AFDToq3b9PER2UHAr6xpz",
  "key3": "59hH1wFQfcRfatkadAPxW3QKh6gtFWfYhHtLCuZzcRi5m34wct8goLuSgD8JWAfaT1TpncBKfz3aHufDkpJzxihA",
  "key4": "5wQS3u1XEPbyiYagDfpQRao2hHGbjJnG2LYJLe46PyFttdJA7PzugxG8hTxosc1ztjRbxpKmRjbXPNHgnN8349gR",
  "key5": "5RmWaiUFsXFhZYSaYjcSrGt3xWEa4xcLpMUoY8Sj54FT7zW4ZpUJYBu8cbpvUDEPPWzqwh9tX2ukiB2zf1Hjjoe7",
  "key6": "3mk3YUdWftq3WaF8fz4tdL1cwGSQoSgd7egBeFeqVp9iCnKcayFCyySeLC2RMCaqpdV4NmuwCYJ3WG3DmkX56g4E",
  "key7": "45bnBF9TyCvD6vGWEnzWpaaJPdG5NjEiWAWV2RDw3JU59vSon58Wgqkp2yQDBRykQ8ux6Q2ohiWC5RjPNnCPrYAh",
  "key8": "5MJTnFaGihFPRLLSXrj1mG8dPNnHwvkTvneq3Hs78gxtWT11iAiQzUUqZ5VU2EGfDAZxWpCHQv4wjCuvADECP2y4",
  "key9": "4EceiFNBz7bpPryJPWc4P79zZNcDPVt11eHxFpTincbtCHD2b7u1Kfe9s9ihKHK2jy1Ss6ZkiFpZWGMohtD1fadN",
  "key10": "4wBfU3WuYobtk52bvjHRETnrhEPRpTLhdSFBCNb8W1mQ54wW1XzBbovvU4AbSHw3yAXVWLJosxEkDA9X98SxWujL",
  "key11": "2rpgimd1kT4WcbqPQZG73zkJQG1cYWGWj8nvHnNiyiXRBdZUCcc2GyxEVRudyitDA8Sad9zrhoP6XJSo7BbsC27j",
  "key12": "yfXUTdVt4UgqFXXf7tUjjejsndqMQTzZWqsT5atrYQnu1bsFFmCPRWt41Tene4rviVY48hfFhUGZ6wVEb8G55v4",
  "key13": "4QDvCmHdMo9hk4w7LprSV5CDDbmumXvXRjJVTv6arMpRBa4eauPdLmsTk7AxEfEEi4EtxfeDwqy9c5CiBBjaqtND",
  "key14": "2Tq3mQYXkXwuCtBoouBUs4DuwxKG1tkWVR9JcaZgazxvSxXhtt2dM2tRzYoKkvApUppSUocjp7Bk9Hd5BmGyXX8r",
  "key15": "5inDfsFceoH31FbVyKtXTSC5EfFBmwCzVgg7WabLumcdWjzpLfQdT5TRMe872bgV4tfkEwjirUdD91Y1qg3eJnDb",
  "key16": "WugND3VyBo1vKL4a8qE79b22Kut97mjaeBMnh7YkqGCM58UCS7h77EtHiS5xgfF4hAMBCL3PprqYX82hRPtwgKh",
  "key17": "5P5ZLxxYXunE1WedYTm6ALZod9MMD1AdDap3BzwUkmymPvPq5Pdf7X5QyQbBtF8eUVajG13ZQc2wwbzojeDpaZAv",
  "key18": "5YMdyzxM4D69EjW1ovi2z9Np1SJDamNc65GnGJpL4KnoLH6YGA6jTiq5RFfjYGvMeDi8QWhUSXhTTg4uar1nScJC",
  "key19": "NJU1Wop1vX5YZLS6M9FHD6RxrVoq3n5fnx99bLkB3ayeRuKac8rPFpjag4rGN9Nu5jJ84f9gLhArTdJzF5Z1kEv",
  "key20": "5XJgRhCwvbw5vf7siRE4hV4QrZJ9yVqMtfbTbKP2Ermy7rQQZZDmRkSz2hqpHpjTwpzzdUg6EcqZL5ZMApsJb8pD",
  "key21": "62STPzY71jMHfsFPiCEf7g6Vnnfxxf4aff5wQBXsqnqARScHoDZcDvtj9CH34LX7ocjBwhjZPbeRFHJmiUxztaoc",
  "key22": "4MyFDChPf4dVAQUdX5kZVLMPMMEJV9ckpj7hPSKMVqgk2VHqLaPpPUEaMy2hxJNGK5AfHfbCn2f9ePmHRscSQVDW",
  "key23": "5q4e8VbqDnATSV8Qc9xBvx3tF2x6GiDdTRJaS2kPtenffEkM4EWbKWSurZyEUJFunEWu2Ks18jn9x5BSvVbg5WtP",
  "key24": "3DEU73MjNrYdiSJpWJcALjszZULGdKs91NpHpauWwm3bzTgvKEtBvJEnTTv3d5H7fekX3kaLRkKeHGoNxHXnZ647"
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
