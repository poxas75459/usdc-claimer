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
    "4iQEXxXkSqDCKktawxkqLpYfcFEWAT7BKprgkkft241UvFXsmgGHcxAAm1LvvAPz5jPN2Ckew81d9RVbc9WBmXUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S49gdCu7LCZagQ6GgGdQMMFmgTVD6LxAFbYD73G1fM3EL2pr8WeBw6SLwWCc7q7oiETRKZt1HrnhXLbb7Kdu1YH",
  "key1": "5rUroMZKZRqp9QdbbyyB3NZnehXN9mF4BuVQ8THcQd6vzGbNHKuTxV5U9Lh7tnCVPnapKpH5RNxQBEFPEdSwZj9o",
  "key2": "6b24B4Utx8R1zHKN7KgG1ys8JZJW5cd95rVoZgXSLG2yo51K8nW4Ecs6hYhRkuZcmgsSNna3wFfTBzjL6vWmeCy",
  "key3": "3worfTBLtkZoVQ1gCbPuYHbfnVjjzYKpgbkvyGuiAa8NfFJxdB2b2NpcjnTuSZK75s9qqUyVF7oYui3bKbFvVpsp",
  "key4": "2Ku3LZyRkkkZdFxbidgGSBBtMS1gd3VwjZ7YcnmNdybgmAWJf546zzrF5A2NWMdX34JTofSXSXKo2VD4bsf8Q9ch",
  "key5": "tspRujLDYryk3gZrhT6bjzJgY9E8xvxgRunc8TmqueY5Z86BqXfk8hoWEc1EvF9ygw1HLfv9Ftz63P9kCdzB7RV",
  "key6": "4TWD5WLqwDfb3TkfE5xxkPmTJR4j3D1c2QPa5shhqj9AoFGXGzBxGSSCmtzXDmrieS7hczoT5LqLLtUfsmKVCmek",
  "key7": "4G5Sc7e5Kb53aovZrpUt1we3UDEN65uChXXTNU9fe1YfN1eutYA14uT4ZcRDctbKNNAfAAMYUr5MbVf3QapeES1L",
  "key8": "3qrrRM4XtQjS3cXqXLvbJF9BQySLxGySkz8FQN1rwMYzcHHQKpdx5J82ubPcCXrznyvbX8nDoE3v4UQXFnoY4zGr",
  "key9": "4ZqCU5hRxMU1WWiiWnXJ1d32YoCbKyZ3JpaDUAiCVs56ctA6zVpLejSUq1NzEcSh1quTYAHT7AoMwJZqQ4dTfDJR",
  "key10": "ZZQATXATUHxgU5pzt4Pz7toUR6L1tT3JNqbYYuV5uBxAChdxx7CAbp8PESRaRmPPfaHZ9A2xdp1xNJ5nn5QGBvb",
  "key11": "54p2C4YfP9kcFh53Fxbt2Tviqho3tQjt9kqizDPMeCfBqQrRW66aRNRwEdFdW5JAqDakurgr1R6bpEskVs94gFq1",
  "key12": "5x7K2L1m8fyemsQqu1Z9iWurfhkn2Hx4PXrXaVwDmTQXtBLLuj7E6dP9iLZ7S6KQKpFmsVdVbPaVoKpC9T7v3nKs",
  "key13": "5W1iP4kjbwA38VfVh51JxtjpT6tcMAdRjDGcVeYPoU8pwLW622Wrp3bnV6CxC52Y6vBkavkiymyFe92jjAZ9Bvrj",
  "key14": "4B7p2ga4bz1J8oSAVoXp4bA6b5xjG8qadmtZ5U7V3JJwY6TZr2YY8MwxWp5urGXGGM4c1ZyjfV4E6yjp3J1Wruue",
  "key15": "3MrWYDKxHRKWK5MkYHtn8mJ4XZPaaSdAxUk9eUDyBx35fd4TRGPjhX7BWiou8JXLvsFbfS4L1u1gX3edj55mZeSG",
  "key16": "5s9tFDeHFKaR1X1JMa6KKvpXWV6NiX6SyvKgpRjgvEjUHapbAVE5DYA2XB528MAT6W5uF3bpEfPakCS68mBVJBdB",
  "key17": "aTMypkwvPQstRFreapVdh79PEpHGYZRSPdQSdsRBLW9xVCb2zm4raJjFptvDAQn7Dg91HEt11BHF9E8qekGANPL",
  "key18": "52ZvrpFLpqt9zoSNpuvrvti6FTVLTNX5ZtZce1VuqdGvzXzgLfjhqUZ7kpg5u2sVhmfwvbmr3CxYBNnZVzYy9DV8",
  "key19": "J4nCnDE4r7TSCbhaQyPjDpTmqKiSkGbCBwPqnfUd9jBi2WyZHFgLEBcKQ9D29Tb6B592GAr9cdR7UEfsctkgSC1",
  "key20": "5NBj2HSFiPguhYP7GifPzWUXNwW9425m72yxZkzYfGn38H9avfVkoe6swo8F3wZDC2fZCrso9jS9EgagzjcYrbQK",
  "key21": "2LyXB6bmmPzYCH66W7sprXnwUEoQrHVXUkMfk378zy3dccXP9jerfuYpEvFg3LV2NGpWZKDbrCQ5Um9PLHSm4ppF",
  "key22": "48y9c6P8k2Gk51WgraYnUhpqMceWkDJ7nJxgNfrNhUmr1Nw8sfKWTmpbEi7b6PTgsw7yjX63bBGmfHqUdP6zBZFk",
  "key23": "57i2LaGYeEGr9p5YfU2rNWjffFmyMrcBX3bxAxCk5r8K3aC9ETNrjmBY2mXJorjso3K1BHbzjBfYMcnKYhBrxon4",
  "key24": "48Jvi342e3kiU6KEa6GiUk33nGQtfmR9bjuoNtaZR1VHbUctV2KgSAhehAJ9jWWodknxgiMb7Z6EeiQp2dsWPv3C",
  "key25": "D3pV7ndhXNmyZU7Xk5hXWMFFZAhw2PuyE2UTsvas5CDcGNtBLDBSfcC2ViRCnVht8Mky5Vuc6VM89JDTqwbzYan",
  "key26": "61ASgMWNKLRkTtK1mbkjvE6utzubu3jsb8M7z5aF8wzdM1uU7Scif9L5gdG5p9Kto5Wxf63WiJgbyjW8xuaGduaT",
  "key27": "3h3RhbHVUiNtDQ5d6uwX7tjaRyzsT69G7ZxDdC7ENCMvH8EjGTYpYJhJa44YsEmMaJ2WYsKdqD8cAaUNJmN9B9CP",
  "key28": "3B3C9V6LbiEFFAAy5Bjt3wSeL1siDPhGu5AzyFmJmazNcXzVzdiDeJcBuP6apZxpCqBPr1SCYgW51kTB1N1seJFN",
  "key29": "4RCByeHszHcNy3XXpwLYNYrW2dADUroJFRAQrdr6TVY8XVjgP43Y7MnDn4Tyw4e9Jc71pqEmCxEwUsWph6MyPy15",
  "key30": "67es1hRp6R1jZUbw67e6MPpuoH3Chr1pnwp5NmXR51sw8dBJAhoPioDef6A4h8v11bMvJ7zjozfPLdRdsZzSXtBF",
  "key31": "m9wQNoQFrkH947xvdz6hG3y13Yiph7ruC25QsFtHBzQfg13rfGeZqvGdjcvUPbpFNeBuaGbphZaD9QLaXS4VeV2",
  "key32": "614UdW9uAMKawczahrtjYfEavN7dJYNUQzRcufTf862A7rKZELfmyuLUsGaH8K4WSRh5ND8DxxVDnYTSFaz5GKuq",
  "key33": "2e55Vd4cGMpTE98HnTx9gXrDpqr8Egq6aiea3hxQ6joYMErcAiDG3Fppq7enBDBCvUym52geVCXqSq3w8D38TnqJ"
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
