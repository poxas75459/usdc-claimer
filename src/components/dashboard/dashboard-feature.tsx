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
    "2gtQtTVH9oQcob8eNGpEesFaAxqTUW2Twry7arNjB4KFFT9BunbRetu4omyvYcMwks6naWzVvngBA1AHvkuzZp8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wvxHt9EnCLva9Ds4eu9DvRUchkRQv1mwfhBy6hX38HhBYmDQg7FNSeouyuz5ecR5spMnRD5skoP3pkkGjRxPkaJ",
  "key1": "2kcZQx1c4ihhsvbHCtV7TDhjxjx5soz2Ux4LEjMeCadFt35cE5dkYZtU1mtTPBcQX7ooDZ8QHKk68JJTuWKZm9ei",
  "key2": "3DuJ6pZ6NJ7LEbo8eRRies1nmVeLqrRsVPKoQfcjVPfzGiWM9ypS2SZ97q2MFFysfmUNnHtLyFmo7Kp7pfrfyQHn",
  "key3": "3gidwLdc6sre5a3ttjC5Pq64XRDakpkPUtBq7HrVrDVkMYUaeLAxBSmuKDCtWH7D63g811B9uphZhDS2YiDZyCwB",
  "key4": "3bPmDUHeKiuHoWph5ABBuYgoZm5aWCd2LN6WByYxN4V3EdoPHUSahVXKcWeiH1gRbaPwjhM47hi8PepKkEiWLg6a",
  "key5": "3q6Vuw9kHkUtwTq5LoLshxw71T2xW6fdeMnT4cURDGRjnXCesodCyeNDvKYAjKuCy4vuB2d7izxCCwqTna5cAGLb",
  "key6": "26mi6PK9CbjDv6XRwQ3hJ2FALoQR6T5zrft4uCwxNAEzocyNy52LZjBzKiSuLe7N29i5t9w7n9CeYSDWBrYfNSAN",
  "key7": "44UT4vZ3UXCVxEy55HjFep6B8V7TqahL7h6WJdJicbjiFmxTCcSJ4qJWysFXxbYe2mTCZkMY7eq7hTcEW2YZxwfu",
  "key8": "RzzCXhBdixW7abiPb96SFyPwv8eyyxKzJWtgW3qMMZLiZ53Y8GbyAL5VBiCmiNiuyefBNaRe1Xfhkg453ssc9Nv",
  "key9": "4s7tJgqkh8y3zQ78CPr4beoDocF3oTE4zJqz4U4sSi8JGQHqh5PJzDq43o5pwtKZr3aeuFkfjbpUrN964Rgj83CT",
  "key10": "4u1gV4ktrKmLpUdyjmdeTH5YvT47AjjLSSh6znQdqYemeXEoB5afqWVLuv7gvqGK7H362wMaHbVNPtRSDgJBwbt6",
  "key11": "64K76aa9nogi3VJLa76r8jZgcaQkoJhaCnc9nZwbEd2wAErKpF5V11LGPafEB37j1Ni8A3qZDBfdreQ6KnW51fn",
  "key12": "2GYhxssTFecMhz1X2LYZ3vAT8nzuqZed92KXetcnBenDwu1Ft9XRKj1tiLxGpSXHDGAAj2v7jkAmnKgU66kLe4HD",
  "key13": "52TVwgMDoMF5q4gQDbAKXmqEobySEDpAvL2b1A6MdXG5KVMz8asiNuqesUKiKmtDhybyabuNokDuE84FhwvpVjhX",
  "key14": "4o3ScpogQSSpB6BV5oTBQDkK9bYTbgq9gt2jbSmDbQ7k82MNptJc5UzKxGhUxZ6UrsYoZRcbb5dzfsWAS3wy8kWU",
  "key15": "5XgAeuzuHpHWbyJJWELU17ViCq6jN2LFqzqQqvxqdwKJe1EJ4MJHJ6WxW715CtWHRqy8nT8mD4cEru4AP5iL2mX6",
  "key16": "22JTfMahebZsNrqtjMaxq9LHeXzXMchmgn49qvHUxMcEc8uKdgXraTAqjnDKmr8BTiQ4AbDpHSpreZ5e9jWqLscS",
  "key17": "2wZ83v6jnhyKXdDUtRZGJ6pZf7pB7osgRHLatQv5bso2CxgrSgqocGQ83kK43jmBomJSZ5tFqcVtU61dcn4FnW2G",
  "key18": "48YRHTQjkAa3MtrxZ3ZeQC3S6X6kJnPZAfmbp61bWKwYAjcKBGXs3EXP917Wyqj5CD8LDynxhTiFLkjuC1scKoTE",
  "key19": "e4VD6piPCbvHuk3qWAAM8V5UPwbQSxZKTn6exqmSX4m3CPHTCbtqFAiV1uun8FMDt1apae5EchsbexW7DRaRVde",
  "key20": "2aDD3PYkH8Hd1VEJNMxufADPYvsp98QRZLLuKEzYCSLYC6uGMveXR5ybYPp4cKAe9hMdn59tCqgzsWgkaa2wSbJw",
  "key21": "2qaTQyTLSx3C9SN8s22PxUk3HKkAaqynJ6KmUjqgTCzu9YtxaaQvKqM8zWg1KZK4QNz1YAmVK4EkJQ9pMahZXoMe",
  "key22": "22cGnzyQwZTWhdMufGF3ygMqk95wKqJycFn2ZvAiG5AcnTm38ECp8rfgucdKCNjXjbT3brwV8ZgdfaRRYWQNjiJj",
  "key23": "5A4TqFfDtk8a4XwXr3gX6tSGG86SScqxKM3BNWxDLJ84pUvpjN3UekRg6Wp4XpZudfgFqryFo1akAJNsjgnxY87v",
  "key24": "4djuKcUUt1QGRN4eYp4bBaxXfJ77u4DFghaEPvxM4kBGVk9ypS7x9ciWaZ2SR2j5dn6in9yh34MB6ffBfgUViarF",
  "key25": "tSjSutb8j1ePSx1ceG5yrUpZd4Mb8TgDMKm1or9YBjkmzf7yUQ2HRhjk2tYsjN8aUtcRAqtoiGfMhfQiqPKq4gf",
  "key26": "5mFAjHCfDVEffdiMtTJKjZxKTQ8S3ucnfE2VRwTNoLnCTfRoFbz8rTMaFxrkKM6QLNikzMwAr2yVK4dFVQni35bH",
  "key27": "3XbXQ8kpC87DEUqtwC17Sx3qsxbvqpwMU9e66hyWnwC5i82jZXNikR5NWAGz12JLXakVf197pJrWbF9VQhPRZeiF",
  "key28": "34qAWStPCzCCZXtzGhEkKLJZhu5UZtuuCPfnW9sKT7k5ZwmVRpqhshPC8KLzUwimmVL4QHWDPYqD9rQDYEzQ2ctU",
  "key29": "bkPrVrg1QVkfc22hdsVrtWmYJfVGv4tzRXoqKa3YDgbRFMwdtQtZ9uKy6zAiqWgcF3yVLVA3P1Jriu2wKDFvh2o",
  "key30": "5mLmjqrkCG2xo5f9yAb8GqABAdyQDUkoTkiuNRrySRpHuihANm1X19aGGZ7FShwVFEHWJGxsuGhJxbjh5nUvoob6",
  "key31": "4SyaYceAa89GZj4HaQ15P6wNZeeGnxzHU9EVChC94LPsaCRLYFBXm4db5A62NtSwSHpSuZic8rLNopmZSgv9Ui6F",
  "key32": "4wv4gjmqQu8yEoAnLS21r7nyC6b8NzUHuz5FyPaPr88W99u9hP53rqh9Yk44bfTXDADxVzNBatRkvW52kKgkd4AF",
  "key33": "BfFBDFcfzkZfopdBmc1rc2YUUDbthKqgyR2AVVKQTpc248hy1CUTYk1kcTw7pUCTMA5TtcJcvugmu1vTQyyzAfa",
  "key34": "2BYvZ1Fd9Wcu4XfRS5euSke57QymNazs4TqxE2PZT9tEtyxbcXbs9xmsTthoJgjJbVjYQNPi4MWZYQ83D6R1o4vR",
  "key35": "9aL3Bu1Dk3X6xZAjBpyJVt5YHLT28NtvJjP18yXREh79aycCogbCH7L1qFdgpZWSZXUoHAve6XaM1iEJC5wMhEQ",
  "key36": "4r1qBTbdT8P2mXoD5VBPpGBJmWmuZ1qdq2TaCtcQuTpirSYji6Ha17fVhmRv2jW6qH7NK7xbYrXnEMa8mKmmfHST",
  "key37": "25LJAquZ7fWAPLwE4KNy9X7KLyxkRtnpKu42PmZvEBZVaumUFrCCoHT2nrMy82FBUeuhdeP3HctCipJ4kX9NuVV8",
  "key38": "2ZoMJtfUdXEqS3SRcf5xoS2mQdE6rJzhZftJ4H3KmCs1mMmLuFPeh641vW9A9pmzjwp2aqsmq3yyc2qu9nTCqXkm",
  "key39": "4K5gbAEeZUh5MjAEYaJRZDQrnen9qxkA6Fho54c8ez99nvZjSmz5hRgXdyaL9biTGnX1kEfy3Ynxsi1jTMDkeWh",
  "key40": "4ymuYLrBmrDpSpK7QUghqRTPhp7CC1QbRLN6Zur2x1mYzoB8Zqj1hkqtH3PSdjQGMuSFD4YPrczuTbyT4aesMSVs",
  "key41": "4ygZ4xAr6YvsQMZcgw2omeCX6fgeF4sogWiqH5TgxvGaCEUW6fuy5A9vWonKCH8wN5n5BVZi3RbYmJV193CZQ5gv",
  "key42": "4KxNYHCyciwcxZvhe65TKQaUyvWD1RqBudFv3HTeZaenMHKPB492C6ZWXQ8wiPUvu3UFqyRD1y8usrTX7AkAzPEx",
  "key43": "PCWxpaQqvGXJfAMtcXvq4zzT3BpUbqznczYJM9JYCMfDJSUb7gmiuUpW5gyRCgxphjc5roAwDvLZbQrXGe5w4VK",
  "key44": "4iYQ4mfaUdZvCQ6eM89tTeoKWhjiQYPXhHea6C3wfjSqpLJRrZaJLKWCZxrshd8qqXcHqV4nvyDbnvA9gpNERXEG",
  "key45": "5UTjMQN918frChZYy2phVGsm64rkMhAdRGdpAMNPLcRaNr43LLrk67W5AeAwCksAz4gc3oBtFnU3VLvdEAoT886Y",
  "key46": "3gGVhoAS1kMpvqo8NFmwYxSmWBnKGp8HwyiWgeMHx1QwotcTRdMQbgom6cu6VNh2qPD5N6wbD8vS8swvF7pvazsg",
  "key47": "2r1Vae2dA2ZrW4QriP8hCDdukYr6irtuN5cEzzSggtyGhHae611TKVVadw71T87rYqXNsKkShs2QH2awLfs6AxCY",
  "key48": "47jNfVxNRnL4houZBjKNrc1LZGcD1aLTx6wNEXARewCMsSZuMPFEDxgLVvUHi3vwdGUVGi42Mfe5bzJF8f7Rn31Z"
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
