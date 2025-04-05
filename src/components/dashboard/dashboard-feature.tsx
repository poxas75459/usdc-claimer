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
    "35M3Xts1fiZ9oANYPynSTfqEJ9iHrAtL9eT4fpKcmVFyE3KHu6HMjJxLgMAXLS8b5TaUdimkZfCeqbMHiD2UqLU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jDx47Fw1SnfNYuRpGF39H6G1E5kAkdPVgYa5BiMDYfDfwKwydNKbJWqNfm3dKA8Bq6J6Hwd2Vfa3p6MG11CBo7s",
  "key1": "JsVx6dFt6p2EUCrByYhb4bJMeMGMbhf2k7QTemNyRfyyiyhRZeJDojKCqLNcGKUSsMqzwQrf4gqfskcwJb8AAx7",
  "key2": "2iBpy2nwSKsA7JuETq4PjSmNVMQKP8zRMyGhPHemRmmPGqib8xjZm58mEhxUqKAyGNprJXQ3YPwjGritvu2c2kY8",
  "key3": "3bsxvC8GR7wr6RzbPmN8qtfk5NUGAY7HhJtgZxHKHTR541oWGdSad3gfU6Nks62xTEusg6Se8Dfvnykym3gwfuVv",
  "key4": "4QNVn6M7dFkjpjF2ysLJYTPpXMNy3kmc5Ls2QeGPo9k7To6YrSoXCHR2ySpMoKBEZFxxYm41Khvgn1geqME52WGs",
  "key5": "2N8QanKpomxeWM4tciZETthnQXJQJoR7AUPRoXH139qeLKtw6LiBzc6yjSPfuo7GBJvHNkTwQWghqjAFgnSdCq7Y",
  "key6": "2pAsD9hNqFAVsoiynvCMzXoixAjFw7nBFURPqRTAMtCwpeHjvj5skRS2MjF6n6162kukbWzzpZQvD2rahsnnSAAG",
  "key7": "57uBVS2SqNCfhueoeraMVGAtJoTFyWY5QLu9XgxDKwW2qPp5AfsejYbQyvaVcVJg2FwuEwXV5ypRB6tK8f8dTLWW",
  "key8": "5dgi8tg6AufdFXoc91f32WiuDuonG8P1DAEEtDprhxjHPA8MaJsVh2wvgbM7j4HKiTRKyxgQXLnB2L5xCLKKLuKx",
  "key9": "3JQfLPLfFdgSAM6qTP2fe9HF4FBu3ED8r7DvaFQEUqeHKT45mJCoo1FbWxqrMyL6kegfcjez9ZFrnu1jwkSSzThu",
  "key10": "2bTfsSpoQF9qKAYqotsXVgwrexEoXEzfUjPEA1WaaDdHRiffvjQYShoyWE53Y62SPdq6dyv9zsXkhskxrBbkfEk2",
  "key11": "2TcYvxCGMtT6kRQtJ6MXdU7VAu49wTsm8XMgJ2bQwqW2AM17rEwNuZk9kLgFERZpP4LjgGu9xPjiQu2asJ9sZKHW",
  "key12": "4i5MmN5Uj2qo32uDodmB3o8AmoKz5EVkgbFQ1FJyrU4wS8zqbTx7KLss9zA8wNwGN5d6oeHBowqBQSUueWt2mpx6",
  "key13": "4ihneRwJbqzbRPHd15zo7FJB9A2WJNkRHZdkuXqVW9Wqamqu8NaRkqk5QWhVBM8qYATB3uyL2EYCGP8jwHaTCEH1",
  "key14": "MPT7HQALarnkfnkk48DX8AvBHoqyNtrmmZ9H2cVuzTwwtSMAz5ngYBUy7NZS9o5Z2DX4e99CjxDLjh1G1TQQXr2",
  "key15": "5Qs1jAz6Vv8rEs287pvqb8rpBEgXq9fhKwqExAV8kXXZKHtFg4ucvyUoJqw4YhYLPNrhRS9bp2PU4MxheU7pH71A",
  "key16": "5VaEqqgbaCwLyLbUgDp6LFJZDf77aQyJaEWwBUNiyfk5Ub5rnkoMsEP12jQSPsZpVYKpkHJ2sntcKLHyzVUmiMoS",
  "key17": "4sQTtRX6NpJEy1suqk6Hnj2MHURbbr8kDvaSXLBPuwVRTpNpMAxXYinUQCqH6XDeq6dA81tMJULnKgb3x4dRxRhT",
  "key18": "3bW6ZG3wtGego5my2mTbMUciU2czu7ZRC5HeGmbbXeUyWvF4u49dyiyUUQSeWEFKCVjkoSjYJx3jCzDK4K5DVr18",
  "key19": "2WCCPj6GerHpJBqHzn5wAE8f5Wz9piyUDF9iuXDQusrP1HpnYugcAkchoZF4R69WexfZT7Dk44dczy5bwdwv9LcY",
  "key20": "4HcfrzRCngnoF3SLxJcdqQeTYBAZ5ZYkK7h4MB61NwKM4dZUPcrEcb3UJyyiEfrZx83Rj2afk4EXCwJhTEyGejTi",
  "key21": "37BsL6UfsY5e5tAbswGggep17Pwg928He6R8NnR8HWUfNsjv9JYHeUYczAXq3nZyUbYyMQ2Nra9saog73Zi8mwxU",
  "key22": "2CYQo893mUi54CLNkVHff5QYd4g6rK3dk6XvBQEihLizZHRxzp9uDqLx3QA6MGA3DhGm8nubu9QTtG5CMBVqEGV",
  "key23": "4UpDr2yTMGRB9itKLg1UDVSzioKAF1vxoURfkVudYFZfCgYZQFxFpwaS9fCFbqnTWnNq5gqXWNTYA3UAaJ8ioSF1",
  "key24": "2hVm1gYxtXiJguZmzfeaBGfnfydkGSCPwB9ta4aW5C6DCFemLxxHSbQNEAnGxP5KnBzQEdyvP2vuFzS76uH6p9L4",
  "key25": "2LuZxQvimr8jxrwLQnvQwFjyLTgvUs2LK963VBneQzdwAeRTBBj4vbm4jGYUMhiJ24kKYG1tn8tVqLbwiqgqaPMj",
  "key26": "43SrQWU5mc47Z4CtF1F7g4KgQ3BANcgdakrYj7F6ACzAxxiac2Ud3xgHiKHKNpu2HnnJKQpt1bTt2Fs6k9JEvsSi",
  "key27": "5BrJELX5LU71YesH1yUbVnD6FUbLvC4xLLiHpds2HVdjN9GjBLFLkq5F56SqViDzrE8V9KXjgekFXJ4E2VvNUsRY",
  "key28": "5fnZXTwX8gsqKyNVPzcnEVUnDPYyp3ah9WcBF4qnuDqWBA1CqQDANHDY7wCUGWE7gd64DSTuKxPQzN2CWMNtrfBF",
  "key29": "5jf3TpJeiaKmEFEiuZHTjEdaJaN6U8Duj7jJP2XeTRuzc1PTWmFSWM78mEFRaWfV2P35191joF2hP7TgvPQaVgtf",
  "key30": "44MpjtSAcUChYnf73pYot6WyHxqb9aW7cEwMvpLxhqjBwjEiLwKcE8dNCjjiFTZGA88ai1rnoN8HGQfnuhg5rh58",
  "key31": "JtCbnjYZB25QxV7S8qwaybPjn6w3xkso4geii71eyvdSwhtdfc6xfvxGy5tWaLvK4NU6nprxvC2BxRvZKmgxSMB",
  "key32": "4arMxYcBsF8G9Y5p8sxa6wWkyY1qGZ7TxVt7MLTAXmsicRHaM4o5mn2GuVCtMYY7trjQtinh3UTSoKupY17t5CBV",
  "key33": "uFW3Gsnt5VvgKf9FiNEknmZQVBcWAZNDtwD9CynRDTRn5ZshPGCpAngCiLHRH5ezvaeAkzzE8qskVVDFRrcQRpN",
  "key34": "8CL9N3pNoZHvjApQq3N1BxKKVJ32K7fGLQ8LxtMqW1Zgk1qMpXQ2EVa2a2qkdiHJCsUQYidgmyHBuECLj8phYY2",
  "key35": "5r5VNkLdSLV4cwTMoFiQ37Mf1QH1DHP3Vt3LWNG8yVpVwDYyzZZF2dLsxJwK3eL62Dmvz42kGUzRhTaUAd3fE7K2",
  "key36": "2y4ETZLWS1EmpB6AowLiYBojmUTxGKTa27QeSLkYJFrGyfetoaw4cNatqwFwcq1vZtrZxJzXNMHYtDo3tMrrRuT3",
  "key37": "63BtGBLeBU4FgzKbkkQpJLtidq5fmjBYZXTan3kfokNSHuAa4gL3HTB8tCe2pwPMFjCE1KZtfEJ65evQS8MCSe8j",
  "key38": "2zMuSvE4eRjrGBFP4qXQNLbX3ZeNMqa1KTfYq34fMcED2MSDTjHgxWiRHGR9QGdUuT6ELo4DRmqxmveYEbsuuo4L",
  "key39": "58gpfb7iHHMao74cMzdYuyH8E9YTy5LvCBz35CLmorZ7i1SP3PXbZ4Cv5zu3pmU6jwqz9wfdFS6R4DMg8HGBLYZn",
  "key40": "3VhRDM4LfENR8WBF21KCBvQF58cBpdKqUP5W2wm8JAvaUvFFJnWfkxrSxn8o9LPJkEniaKtRRwe4JqGwobG4B92u",
  "key41": "4uAufubeGjxs5xiSNPb38fZm6hpyEg8fnCqndEJnp9PnFCJbJd8wfBBM2rkhVbSkGpbnCj4WYp9SEimeQzcMoZht",
  "key42": "5rDkPndVzy4jDgUuhXpNNJebbE28EL2ZN4VwJdcyG4QmiGXCLsA8SVsca5i3FQG1UeR7UjLjUkBWe9Yucir6mf1n",
  "key43": "QP2vygi5cGKf4c21hZszfciwWuajW2iaDeEftCSFMyV1kpMKUh7h4ZjV8KJjPMC1WD3dQYNMbi4jnAMH8UekFrY"
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
