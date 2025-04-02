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
    "3hvf4EKwXzkR9hTgWeRm9jU7VnywEwGLmWQDg5MNHF1PAAvJpeC9kcWC1fPtfm1AxxEMVSB9KfxkzmUHpCnSHqen"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a91MgQEHUwJH9FUVSVv2cw7vrgEH8uGc5ewzFsy8zrVyrEpWSdjKKHBYdaze1tSAoMn7QsnBh8TCvx7zzFoRHBV",
  "key1": "5iQgjtriXgy6M8aMDz7T8xvcz4x8sMoMxBdRwS1hsPiKxSdvBqD4S4Qx8Zu4kry5GX8E2DQn4wCe5pudU6zZxfP3",
  "key2": "4bWp5M6j8KSyVviJWH2QLBgYAQTTyMNgvpKd4J7wL2TEoRoGUUoYhdpXK6r36vgzn6txpXhyXp236cefNixNwb1h",
  "key3": "5nRGu4jdjp4Af3PzPGneGVRtiKc4PmvVmou8sQgT6Rzt2KEA2e7ptBmaHKFpdg9QAdmDR7MjjLuvyNLUMk5iH7WW",
  "key4": "8e7H1J3fQnZ4tADKT8HMvmqb58B7Qj27G2G4mfZc6hzz8FTariji5AisGS1w1X9zTLtWrSX7ruZzHe65rAogowd",
  "key5": "PcDrNyLmqbPx5bdYrQW2noExKcr2wVhU8BBtFFTfvv5RHKMUtNbZRLj4MEde9gH9m7kxAFvJVv8V2aWDPaL5NoX",
  "key6": "3nFZtUZoPoaxCNhsmXpe4qoEceZECKWzMR1FGtkeXUDhiQik1ke9r9WrBE9jt2fbE2rJQzqdotuRYFKUFkCSEdxa",
  "key7": "5XxnnrFL8m36Tkpq4JxDq9L5vn9g45uhzmTGoUgcGCGCYFSGqnV4ZNz7T8Yp858qZrWdHACpjjJ8k2FDdueEWjYW",
  "key8": "FA2iwnDAv1UBhK9EvuB3kfujuXtP8my6qkVhtZHcX3X8PJ7izYnn3H88oEFHyFjafnJrS9uVSvZoWe1vW8dbtU6",
  "key9": "2zBMKzMu3R3EYum9X5h5ctTym1yLfNPLKgAGCH641k549bMFJW3Jvnv2pmGEnsh8rowMjLXwkH7aVCVaCm5Pgknx",
  "key10": "LBMkwWTvKHgMkKThFVaBUBL9vFTXkr3kACSuoNQ4KUvCKXvnkktzK4HSC91jAzJsZ3WNpA8yaFqULGg5XpNaujp",
  "key11": "59WLwYFWaYJcKn6ng7ptjujhFoBQ8kFNBuJKLRPBYYuMqNXwLVjcus1W93AZ6snDyNAXxqT5Yyw8deV2VtxsKAW1",
  "key12": "3TRxzdtQ389wtKW2YdUKjw9MRF3GJaCEb5oVWAMnpZnttr4odDdkJ1NbBou69vgNfgx3ymi7CbE5JD33BQjEV7wk",
  "key13": "4Ev96GtJ2iSvijRVxYjZQTAhakRmYaNemErrwv7w5Wz4G5tKwPad3jPTaYMeRWGu4bj8rFMCQM4Z73wd4N5QKdRk",
  "key14": "4GUpfxpJJwowyoKzhSdEgr3NFHh4xVWh4g87rYazt5xXkRnEhCguzzXaAi5nWzyaca3riDGsqH8Nm94DEdo2QrGK",
  "key15": "4CmiQ9CjpePjyT11ha6LFyrQGPK51aRFbcXPJ2ZqNmY4Z29cg2e4FBAsM6kv8iFPwWii9zTEAV3VcWsekCxZ7F1z",
  "key16": "65i5t6Lph7vx7icC16atvLQTuzv2tHVtGzRvH3NbSxWZyN4SGYhcrJip3zik8LLM1pCm35NHT12VXUMZx7grj4uZ",
  "key17": "2CQ6YQ9Po958TwT8d27u6hE3G4ijDiyt7P9eW14r965c86UqJbyr5JxVL1M7tseCwU9U5f7hhoPhTZtkea5rS4eZ",
  "key18": "EYzSChFuqqADXRDUVVuV7jmA8GXZzRz2D1ZqnS9q81NnYXZ4aEdp7PSeZPUzJ3mm3ywQTChahZYurguMrRrUZnd",
  "key19": "2h23hen3oCqUkoLaiLpNy7MCofu4VcbPmC6csHY1isKdQU2i8e7iJGxKVUbbw1qM4zqeX2GN2WiJ6ANrjMVVmJvJ",
  "key20": "2ejPYYj4oU83UWYMjnNevdpWipYY3azte6T2bJMpp3SkZNYDvnRvaJeHZ2gvXK5UrQomGafJmrWsnSUqzuAxE1hK",
  "key21": "2YMjy5AEuQZBaGc65yrY7C8bP3hNU35oaRC7anTfFJbNowAX9UhzfRxBzsKd3goVvHT1smF7anbCu7rPJ6ePaqvE",
  "key22": "56K9MYdeRAVDGMt4riwTyXU6Z5GaWdgFpyDnzcQn5GB9PZQDHEGuahi6coDxA9ch49XqkztMDWrE9wDEQ5CefZxU",
  "key23": "2h5DZKkUQarRdy3KrLTzbK9Bn8H3xWE1JfzPh6BrSR3xA4ePm5DkqpywpPySpKiz7hHcQ94MuN8BFCwk4Xw8mJD",
  "key24": "QvCNK8dLy6KPYAV5Hs6aWaNMQk2CfCY7BHxp6RRjE4Jfh1zk31a9fXdPd74kcRoweQYyurjdT5JHrFf9Srf8dYP",
  "key25": "5Hmx9W9qGn9C2Wvocu3J7ise4rcjJ1YWuyCmXP8pbX6bbYZfymHtsUvQaCQwD8rdkNQWTVwcFs6yBVS53h8wRKwv",
  "key26": "ruhqVqv8jgVGjUpqRDhrbunNd4R6PTt3ekkRJenstx9kJXr8q7V7NisGBfuApT3TF1uWE5iTZa5jHVXSsVzy6L1",
  "key27": "2ba1WaoKqXzfZLPYkBUoA4wTLygD9Qy7vhMSC5qFTJr6mq9PQDcSEoN5NiCyegHgxNsJ8AyVoqtbD6GfB2YyqeFi",
  "key28": "32iKD4TYJrXTgxr27KF2XmbyAniTqUFWzautv6GLQFfHteLSbL3DdEBygUboBbCosHsrffNZncewTips8hiczdaL",
  "key29": "3y3J2a8rVrZRYWDHTQav3xL5nPvDHkJWgriUt66rZTSXbbTTZgSGt8KEySQ7qx42SrMt4hCp957sb2ruViFH4jm6",
  "key30": "vER1QmTZNdUHRbGDcGvAQ9gaaLPN3Ao8d8baWtaVaguwZ5xTDtNME54HqBksAt9fbL7MZtVsTB7dz2pdR4JdSca",
  "key31": "tNfFJbPgfVC6mfGSuaCMc6PTEnzwQB3KF4JgZFrYGEfjz7ozMGfcjLfVLTHNNKmScdHMRFLZ4NigpanSYcu9PAV"
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
