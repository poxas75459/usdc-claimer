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
    "98eNKne1SS8HvTiEHgUfTLZuB6zteDdmDQbKA424Bpa3j1FahzhSvyoC8AjpCY3kYC1YuaUAWG3Xi9oXiSLGccy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JVdSPyawbnz7zMknXaUCp9vNXK9iedeCBDCr1Cs4BET8FzxPUXCFRd3YC6jRCVK6rjFubzFzEvz9emcFB6KpTWc",
  "key1": "38YeymopXu3qSBBLJ2EjhesVzr3MmNUgb9ZtBB6apvqo3tnUJD9VeGxLJaVc4A9VsacDjXJLBKyuH964GuzovDq5",
  "key2": "5jWAewJ18iftH1itiebjc26McQpGy8BG5uGaEd5nNJM2fyAgcYmEetx9JrVQzvF7JKZCP9k7W5CfGLU3B8rVkVXh",
  "key3": "56EQ5LnCazTNLVencwsiPxc2dbAvrhhDC7cwuADnkkMDJjTAmxqcWqqgDaxhfrTjN3Gxyvo5t5iRVwbfU5RLvQjr",
  "key4": "3gnj2w8BicVFqANUg5QvKx5rL8goUf84Mj9u7TkyF4fmSD6URyt4GoZv41X8BQktnqUPnqUgdmbCVQDyRNYLY9DE",
  "key5": "4gfSUauFSJyPg8tupx96jXvyY9m4sT3XVqQihqe7eBchJ8zxcsGeX9tqyL6oZNv9GjEALXKgZWQNm1K8jQ8xKNPP",
  "key6": "4h4T4kmX26wwaHtAM5LtLDu2P8g9oYcA1pvxHpGAnhW5tRcuDnvNnbCLBNfGRBxrMZTnmZPj8MnyasDRZKvYdNGs",
  "key7": "2J4dhvDGev5Ei6m4gfESAUdN1nkqG18LWCFL11Tg4zbouRyLj2FP7EmZiVZoCnFdKine1uNemX1SQnmX5a1yQ8dP",
  "key8": "5sofNC7TfpCibwGGXhfkAbdGucz54AceMddNdfV2sX7AgvUhMn4zWsw53heY6MaumCs8MYiepZnoi6zrZpDgto8Q",
  "key9": "5Ps98dsaXQeaeQHSZCNMua9b7Pv2khophf4CYAKDh2eXTeExXwh2hCpnQqYTKDJDt5xqaWvE5f1AP8FoBUmS5HwT",
  "key10": "3h6Z4ugujJiqtwSBagL9AaGBrKCgPRfgU6wUHRnK1zbCtYz72w3cbbhqQsL97Pg54zJnrreXacLHMgLXm3orLBPs",
  "key11": "5FhAyy4ijp47onTT6Jab3H8Tryo4WuQA7BEo9vnJcnG9HhEW8waTD8Lq8mARh29Ygr4oZXqN89xUhnAWvWUeTLeA",
  "key12": "3SHv3JNrmVL7JexHDYo4s73dsspS9crPktSFczLzmCagTWxRnrmm1UFZk3ZFqvtzqWqo88a8iKjgCtFmpGbdLe96",
  "key13": "3i97xbgUCsiaZAA6DKgZ9S3HNxrsnyR4TErdaEJ39HATGqmW97FNJrMQ4mXvWxr4KiNmsNG3JD1k911QP3TdP5CS",
  "key14": "4BvrRS9b7sWQCH4eHcg94nfsXyVxLWnVqaKWfLYKHBJfUjzqKGt3Mym7fE9aCkwibCqr5BYGB49vUMMk51HYyGwc",
  "key15": "5u7rBSnniWBn6yofWhoexCJ2skAVM2FFgsA4haTgL2PsUBUTXfhRYH9s5owPiPWfw5AaxyvtvULRrV3ARwcyQk8E",
  "key16": "fVH6awyno7MnjjsevRv23eAqm3Z1Xk2t5Ywkm3e4MJyrCKna6Kz3nDcef3eCr9NgS9b5wyqr6vaVZ47GkoLYoPF",
  "key17": "3LHRxTNkVeGsk4uoTxVywE8ikKR5LMJM8qMwYbAH1RqC44oVjSgNMkG114jHoA1D2yTtkLDYFBD12e7qpqYnfM5B",
  "key18": "41LWJ73mqoRmppy1UA9utf1JnQCLMf4MXxY4oaGchQ64sZTf4k8PHBGMddDwoD8oDr3MegVZJFVWVqdCN8oZJXbZ",
  "key19": "5Z3g4ZFiS6FjvrAK8v8sF5t5pR4XYGqP1DxJSYAGEPeQs6ciVRoNMAw8vFQNhbqNjJ2seYi2QyQ93tvmZ6bdPAtY",
  "key20": "67mZjdVL14TPj33Qmvhi9aSEBXbQ4aQCYxkm4u7RkMx5FT2pAEjKcrQid69HNggW3Btg7mVXyBJKFKmiGyi49Ps2",
  "key21": "4DVyd5Wc7DmHME8tJ1MqkzSzwXXnRDHFWbQatNpm2JiEHvevYyCVKhpEmu6fSXj97HdMb9Gq6EYpjPrUBzcx7VRW",
  "key22": "2cXmaZNDtrTAqjwsTTzgNh98XH9VQouT5DHNpEVfxERCr9pEA3pFtsv5pJniLojMHHT8mP8EYffLqVfanofVNYxU",
  "key23": "4X1PbTRdhEnwA37DWJ3ADdKcdF2nhvgQzbeMwLkQxuvNdHMNPvXjg8N24mURu5PFgRzrH2dNw5JexzS2My3PjFQW",
  "key24": "2uptbJGLw2kBiHLmA9bWWpWbFYCa4DybJs8CsQn2KSEESreQSterVQXo6XiajU3fokS83ZGUhWhs7MPijAEzdvQv",
  "key25": "2PpiPpUyDcZ16DS7pWK1dWno3UrZ4DfSqq4Q33fddtZHVGCfDyc878vAwPGX2JksbtnELquTkHvHD61BnQnC7Ave",
  "key26": "5u23sDhkiHrhqq7tCRWnZSPaZbDp3WHLFQwcR7bLZazXMuLUWjXskLPhqtzHFYvzyY5v6NytdRzbUJx3oBnAJUSD",
  "key27": "5ZBRRapLYdwt5Sz5DYoxZLzXVLuHjEu5MC9LcUaTSGBMBa9oRFNM7MB49f7GbjT3BumngQy8yTmg6rRbt13t2ES1",
  "key28": "5KwEV5PcDANav25vULvNXSkybSPeBa8x5H77CVdo929AXwSAa2rosLLVrgqCXrN8a9YWzzCSgeYEeKPrZF23zUPq",
  "key29": "48GunV5stP6GzdwiNpRah3jgxhnjxMTgKFxvdp1KSn5h12NpiFFcYLRuwwENDKCU7tJWYM8oH7JPVWLGERrQ4eNL",
  "key30": "5hjdS6c7XXG1ciT1jb5JfHJvEryJcNJYaEvwaXX8yKzJRUxfzYcf6p9roeYF3uEtJs5rnDiX3SgSfrgCUhAT9t23",
  "key31": "46jvBk5Sp4iGqpR9yxna3EBPkeddHvJneJHXMHa9Zq9SjsGUihE7e1gwirbqJWvdwSxM6Vv8vCCzhuZYcXQkEhET",
  "key32": "3X18MyihpVuN3ZKkWoapuBREi7wfUeKeST8E4hiW5FGWBcFfTNEL4LHLWGmKuPQHYWhAgTtiXsB7Z9JJzoYmbe6v",
  "key33": "3b1hTPpCbPBbi8tWW13HuKqPMqh9r9UkcfmLq3B8Pj8PBv1gB8uMsnK3yXdjbYpLvPN8Mvq8eRPqatejv9P36D3Y",
  "key34": "4xJSNpsXTySFZeSfJnC9XY2XEtPPGrBwLi71LHJS51EUyXMNcKj13K9VzaQgYPS1yGAPz6iNPhxcALP8M33RD8MG",
  "key35": "5umx43FBvKHnCL6PE9J8pAEVWrwdjF5FVzmm2qzXVPrq17phezSp7PEmUKMh138kpc5kTfqhL32LxhbjdAVutPdx",
  "key36": "2iWb2KE7VRjaMuN4UKEhicUqDeNq2ZKNjoKT5PrpngK67jm9jqNYYwRRYeTWhfnoBwaV1dPYi9cFP8tcZtUqSzQ9",
  "key37": "4k6vDpdrWVujvz67HDnrb3Rxv2wx1NCMfsJ9JaSfYKC1HrAErYPSCLzRtrMGxEKDoWb3v3gUKiBxtdxvmXaCieR9",
  "key38": "e5jvyfxiLGjkQoCQ46TkgbZwrVZSMJ1UxRiBmi3tydymtoYYSdVqPUWSaVgt43hWWecVtn9iopvSj9R6vq9yxF6",
  "key39": "Ut8js1dVvThR7ZtQGMLYbqMJS9feNA6bsy3Sd4SyVzKRMDWA7pmRombCihqcGoNE5bsZxaJXkdpeehnbZGdx8Hz",
  "key40": "5biyJkyQJLPAe1rQvVGCV3Bh8dShmc6amH9wYsdvsFdL68WBUpZT8mon3C444JX4fRrDwXx8pTWKaW3EQqZ8AD65",
  "key41": "3brGyjR9vZhBuvr5Y2tSDnJdSWShHGGcSZ9ZDfyCsYUh1RMcRzczmNVDw6CKZQEYY2MUBu9bMY55xDgWoj8bbpSw",
  "key42": "2hB3eNAsmbnJAKtVbJASrMwaBbBCBUkns2GBnc4Q4per1Nbe2rcLDBsMJpx8zyTMSCfG5vqYHCS49xj7u9XUE5dB",
  "key43": "5yhThEhtWHS57xSc2e1M1LgHWegHYpJiSZjtBMQTFDY7vBa53KCVViaaDURpsyMRiEpfu1dkiDJkHFZTvEGyWz5q",
  "key44": "pNu13TEgPZ4g6LLxdmAiCcpU2wjjDLenLz4vrPSremWEUbZcEaDaXU9y9qaBf574PYN4aAp4vL1NPbh7pFea6Cq",
  "key45": "R2JFv1CrRwMG2qP4BMEEtyG4hk5Sqrsa8kk79nuyUVwPHh573NKy1wf3t8PURkdDYhwjRqjyuwCynhMg7jkBYBT",
  "key46": "gwk7XY6LHNcwuRGnbuRwUSxNG5DYBPgYqARtnaKL56s3VzpjoMEAZt3iBA5bxiX6UFFqAG8duEmPVpSjvnWTAXL",
  "key47": "542zN4Qsy1LuSki1GdxAgLiRJg99bdGyUfet19kgsRYwRfh3j8inZYh3ECci2amfUu8FjbETBKhgTjX1iypyiZsy",
  "key48": "5TEr29Za9GFVuaqBDW5NzDmRj9CKtLQToPFKP2wkG4skDWxZdNa547D69nKKQNvANvYmbydGyu5DxUMFT2w7DRpK"
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
