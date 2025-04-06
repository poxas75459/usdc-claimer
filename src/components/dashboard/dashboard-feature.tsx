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
    "5gFEMimKF6Lszme42dq3eekKwWJQYXh42jKnnE7GnLprFFr3XXkzN6s3kM4eJhuQQes4ebdvBvU1C7WC9dDVXg4c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rk3g7Ay1pXQ3gsDCPUpsM6o41quFFbicnDayTAdT5ZVZSB85TJrgayPiP6tvQLzgCfVF8ujYScFALmHRUnMZq46",
  "key1": "4yT1ZgSDuSxcz83USu7nbHQtieARafRnvNCHQ9ZQNJmMN3GAF3NJ55Zv3z3nX6pPexVy6yuuCMp8W6Nwk4heRRDd",
  "key2": "5jsC4WFuHeLjA6PSB38ZLfDQs8QNXDwZW52hMdUd2tsk1ubSUw75K2Z5Y6ENayMatXSA9aPXgUTSxmhYVm1wSTXo",
  "key3": "5x6mBV5WYAgFeaN4GngAw2D6jkLE1jnC8h6ARTJCE4HBkzDACuUP9AfhuuWiF1BzBxysAH9GLwpDRgMh5UhrkWgy",
  "key4": "5n36F1wUT5fgpwzeowVSD4v8iXQsPFH2gVcqC7ihWEVaSjkT6MTRB4riWmY7MS7gaANB7oubNBdxdmBg7LFUeAQ",
  "key5": "4GUc8BPBaYQBPv6yN4q3PWnPSiRTocZAirePrzUuFRxsCKbDzyQWsM3heq6AQHHZcQpZhHmpBs6cftNPRDymcHCR",
  "key6": "36aqqGz9xfoHnxW3ft4whMheUpzJUG9E3WeJCfzGQnNAW2qhmqhxFJVinopM5UxzQVMwDJkDfupJUfWuYQqyxXA6",
  "key7": "5v9xfrhutBukbThtcqnXM9ejLS69ao4fGQxkMWqSKFwcyh1xgJdThHpg7Fw2yYoZWna5CqLqB1QjMkxQiyqmEhDP",
  "key8": "27M3toWNSFz7RijsPc3GDbMgP1VTtZeytRCJrmqvx1iJLgeUUyvkvXKKyvxwVDVK7trA4CKGWXdaQKwvRaYZRA31",
  "key9": "4qXSrNirfmzukk8PHKuxJQ6t1CxipxkJNvWKC1fd18pTnyrixxHhXqdXUvs4tb5ySBhUKV55sQ8xNiec8SjkWEwv",
  "key10": "4Y5RPX3p6BvE8D43BRe2ABQSKEerg9Npevh3TXAiagse9dEVAMG5sEoRRpnp5in2weXWK1us79WLt77rMFrxnGwG",
  "key11": "2eUSfCweF7z7GsB3hubEazuWALZBXtX85JG1nAoqvNk8zEsuGxv6ty8WnWoL87d9S8fzexqnG5yBZUH9fdE8Essm",
  "key12": "33CsGYkFUCcC3MXE6rtFM5N91o4tUqBT8sBKZkz4LnZC1VynJn1BtBHWrg5y684ikNSSjxLMTM83AsgzuWnX3dhZ",
  "key13": "7Fh9FVmpbyP9j2K8EDtBog23M3KLvRcBGaqVq1VCGhiPjdyd5anrU1zXQ4P2BmaFzXwWHMNSc2YBXgVmBfv8kgK",
  "key14": "UnLjPsBVmFUcWaaUrxw59ybjVZUECjhobGt7Y7K6w9otgZZESi5ghPeraAopuBcPBT4HUhMeYsim6eiG3ehvEqC",
  "key15": "236HDAxP3KXAC6SyW4gTztzJokTZJHHxKmbE7pkfdrbZhy1YTkYyi2iNo3gcR5j8vGEyrqc5633z6HRgv2DvAGnn",
  "key16": "34WMmYSei9LDZJew3ubtLTdkSwEQwqszG15zpvqAudS4B1HUu6AbdBwQzy7hALxMgAiJRf2BiVaas5nQkgtryuTE",
  "key17": "5HWWxuA26nvraM4teMBqdyZkkpuF1LpYsVP5qsYbHoFu3AwR1mCacqmbNyqBJtk7VUkLBPxeUS1i5uNmvY5Yv4X8",
  "key18": "59i7spG2az2qrN89oTdfrEfkJeqS2cFDuJkkafi6TcFaMWwmPf4xnAo61CbqWPu9koJYaihJkADDGREMV3LzCAZm",
  "key19": "4CVkQwCtJ1pTvAGHwtT8YQc5V2T4Yyt6YXGU9zxikMtxw47Mk1u6cm4BPRJtMvFCviRQdN13haMAREKXgyTppQL9",
  "key20": "5XGKMu8hTxY5PiZLUJ9hhRmPGpQTYS4GXKF2f2of9DpU5f9KycQSQvg2x8TkDU6VcGKTiaUt7bXyAv4MDUqfYHTX",
  "key21": "tcvpmKBDxoL5C7GJo9pEtQ4R7b5WGEAQBwiBW5baekvaNktbjeaQG1J1jvmgBXuD7HFZvvws5Z9C7f1Akdxvo45",
  "key22": "3Cis6fzvPkjKXDugK8BCmVB7So5EtUkm4ndUaNEXFLjQ6FtkPX59zA6mxhd9vgEeVg42Fupm32tPtZcP3wAUT7QH",
  "key23": "gUvkwZyzgGE3kcVoH5aSfJVnyb2tTdVDZG8sQSjcaumLh8xq7ZMGYcrPTzSTyjaXrDyziVaUYBdEKomxynoHvAC",
  "key24": "4cqf3HkxNgmy5Lg27RWLtGLuvsjR3rcacTMW8ys995MxzDefJ7m1dyLBFeQEfeaCdatULv83g7ppmYUqMUf8B88U",
  "key25": "3hbFTSeewnpma7bjw59BfDgsKBbuvcgq42hD6AM5nXHRAA8JbgzereKw6MqKBgiXHAqTRGMYexkMoLnHxizgGQjy",
  "key26": "5rsAiCrem9MZ2AhRCFYo8q5HaAF2KZsypU9UcaZCAsAbDndnHbLN75xZczikSxsc2m8X9KX17hULz7tP3mfbsnbj",
  "key27": "5UKYSPwji4PRPYtBXFM4HKB1emCxMQy5pw6uN2xcMtcumFqF1Mhu28RH1cGHiNAPELGvnaJa7TiXFsYRpCw444F6",
  "key28": "bW4gziTwzUhDjVGLMcke18RzBQNuR1ZqUfiMYaKB9eawhu8K9YBWi8S4upVr8u6LZR2eT48Pu7DY5TmmupjK2SK",
  "key29": "5EPS723sFo2BhcFcvwLtjGL62pbTjoas8TxD83mye5RfQ4Q3evircGVKg9EsrvJ74kBcrmW9vLDpDJEoGJ64hhZZ",
  "key30": "65H27KbmL5u2KotAyHFuhQq664DCtvEvA12mZLQM7ryDyCjRRbayxRm9xiP6ZxTW3P5om2nwxvmf6SDDWs52U3bD",
  "key31": "3obX7AnRF6hiKMBsatE1hfZdu5ui8wTywYm1GJJqADgd1pggijw3387UcmPE6XvzHoekXVY1nPv6bsgABUJJGiXX",
  "key32": "32qi8551waoKaNcKvBizjERiAcX34JHSj9pzEcTj9AaUwh4twt5SkMF18Ph3AjJPXRtmuufHh5Xzw61diszbHg7v",
  "key33": "3C54KBPd5bQ6LHtHyyU5t3aLWa7J57EmGtcBZytNSzhLosTQev321LZrUXY77b6x3RNsEfP2nGXYiWW2P9QgScoK",
  "key34": "65VeWro8vXRTwEz9XdES9SZyL36TywbBbKnSG2EjoZSvJ5HPcx2wTc6GEN9vb8T91BDz9YB2m3BcbqU6Yeh8uVNe",
  "key35": "Ake2FzBzKYZVyoi9U7EMCZt7bxsYA6C8vQrjSQeWs2NwdouWHxpjM2oxeg11JyjWGhrXpYmAYixnP2bJyuQsVqr",
  "key36": "2CaxroBowkzLfnnW1tXWWRsoKE7SWf9kEdMzRu8NdvN8DoD4dyzWKCaT16xihKnNXVWcZmQdTkCZPTgfDTBLcG7k",
  "key37": "Tsik3TZ6Z5W3QMGKQnmwU7fs1B3cnN1px9J366EEZiLAYBiwYyJA2T98ug1v5k5QeSKNHg8NvXfM3x7BqwHHN13",
  "key38": "3H9wpLGRnNAbxLyE4r61kJtsxfgAfmZvWZjfDLQWSRYn21XpuP9YDmMjbAVZVXb13u5CVCuxApum8E1woLyhZwpS"
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
