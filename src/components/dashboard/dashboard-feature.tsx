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
    "s4SE32Nxza5eRJeNk2c4UMurpSANqV55C4G4FUg4cvtLiPayYDbJe7dNu9E18gkkNMLQzKEc4tDTci1BfhwFkft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z8aB1VnpRgQXmrytcLqPom4t2xQsK9FPzqTXJzFYU8VJRUg74BpjJnWjitvecRgof6zUZkkV81HqYamG1GEwHED",
  "key1": "56Lb7anQy3HxqAoQAMYfSJ4swASM3QnsmdKEp75jN1GHH6DdCyuv9qJJhqYv25j1iQEYRyScJbnkY8M3sHyGunHm",
  "key2": "5yb96nUPL9ywEv5fVU9bL7gP5EEHyS2WgiUa64j9ASGV71W8ec3nWLCwYCEcqokUffBcuJQxz67bZKHZxq8ZNwo1",
  "key3": "5L8TzNn3uEeZMzz5NdrrsnnsoUvprgqg8fUkZFjLWrHpjhyHMRFASEnW3U4rdcqXCmAWToSBAnR8kR3THDUFPsEN",
  "key4": "3CJq2fKZZFxMsCHVoLGC2DU4R8ShJFjUMQbpyEjouZxzkqVAAFc2NfNjwSDn7gipBWRiZ46qCnhv5Efbvm8Fpxzd",
  "key5": "5Qiw1EXCx8mxq2oZFotWJJVWiqHXyVrtH38tSHboWkk6G3cc6rJ4uwPTiZxSQKTLHdoMn52p3wDjj4X6DW6q4neG",
  "key6": "2jevEfgnqy9U9hZsbYGN7TsPWCMNW53V6qAZCwT6Vot5JhBpDaqHNbno68EAVutCMvPr8ZsDAEMihTLfPwNDuEMW",
  "key7": "5ecf5Cpt4SFpD4LhTWbZAvLiWeV3CuGDB2qHkHjXmhSWQd5WV6MyigMHKJ1efx3AtyXjHaQSM64SedLcrRLMrqhy",
  "key8": "2F1dedjf82BGKJX1Jc2N9b7iYCM2vHLM5uCAqMAPj2DVqhepgxaPsM2zPpX2CEsFTNvKLHMQeX8DiKVk7TuQ5vst",
  "key9": "2bqVhA1chNygXxPRvxEVtAbqhN4B4qEmMm4THmNRQsTeavhrV4w8AnFf1SRsgKsW8by1P9SMQqeUTys9BjGBD9d6",
  "key10": "2uGzWGTwjGGwABXFvqTbcSHPELmufAaVC4aBxzv4mFqpnXT1MwVAWSbL5brhwbADCT6ywdzUjAbAfmfvNoSN8o2j",
  "key11": "26zUqJZtzqjxagsbi8Er1aWmwiRqU4H6QzhMYreZsnbgkxgAzbNC5Th2mZdW7MphKeQhXJYBBzAWeGhR4uZMQDd2",
  "key12": "2wiSwmkps6rnswru5XQyXrhPXJUncABdabCiWePA644QUY3EteW4HaZphRPYGgA6rEbmDhwPSpQkoegpizBG99Bg",
  "key13": "58vAcpVK9j8bu9H5jDSiXRMk6efzEdHsUczmPNQDxWJLQMedMv2j7Q8ec3eVTnPBLt8b4cFtw7fXvGm6oJmMMRdm",
  "key14": "NTs1EJ6GqVjDzRkrAGXxxdgAaFpABNAwNuJzibnEdWbDdWMspntt7zBSJY9iVJongArJGny3gkjev87jjujhRLN",
  "key15": "3tCgkn4BciZxoE92tUfTcuBu56LtLNSpfoq8TRGJNF7BoZeiq7Wj7nde8bbgu4bb8FXnKxhnT9oVJmZV1gE9eG5W",
  "key16": "3QjpinpYFDsXAFWUbUZEpZaqYrnVtXotDaYXKroCgqrDAZDMbFu5qgvEzFgrmwA4tjzvoBjBZKYcT6AphK1WLpRp",
  "key17": "3sNbCCDK5vKUE3ad4zvEGnXuiMh98iSqJFiBBvXtTwo9DVVkbHARvtM2Cb3spzcgm7XTq9v6jDwcJQLmGcw9f1eg",
  "key18": "5mupMzRwtxUura5FYKzAwdPBHESoyvMMkQejbNsSxhLz9oogRzM6AouGtFgecyjHwDMzd6rXVSXdL1EvSvM1epYG",
  "key19": "32k7P56R56wFCYQcp4qYU1934nmef5uYuzwzCPk2u5yPoUhjw6kE4w2ZREKY5EAFgrWHA4D5YnDsXSE3G8JbLedA",
  "key20": "6Ctjt6ijcwdeC6JcGfyJJWeXcaUwNDa3buXu93iDTxLeEb4cUmKYsYGYzU51EeyifrGW5FTwC2SiSSq3QyZYrVz",
  "key21": "2k6yDXLkxum1tpVHVQ78tUjHpqKyskE5hsAjMZFScpskCtYZcdBAtA9j8siP4xUNZawkaUwCiY8dPP8TngqC2NFf",
  "key22": "4Ubzsjhig6bqPzVGgmGZeGupaqkkv9H5wuWgNsD54BXdsphTRM4UCgFAqHgad779CL4Vc8qCeMs49Tzt7oUTEMBB",
  "key23": "3QH235ddyRNDSdwvM2CYANi1sWnRWwCC2kq5ttsJB5GMtv8Ahb3aXCVa3rn7mPbUUsDKYghLjz1VZGraFMKNc8wF",
  "key24": "EYSK2WisdWzAeBNRSnhH7JYKydKjSR8txCe3ujjzy6vEX4MHZhmepqymYr2y9wXgMiH8QM34ird552mLHTwTCNE",
  "key25": "64Wk9o1drUgiyZ6BaJGcSFLYrnYd3GvrkapUGVTc65KgYUgX5QsSd64fuVY57V6ki6N1dTubwvKnSsQPqcjrmVWG",
  "key26": "5z89g7HMvXf8noWYPrkayaAcge1v7CMXu1JihZWEdzzEvYYCD9ftTAj7nRqQkRoN61NbF5LxWF8ehYko5wuA7xuW",
  "key27": "55n651v4hWRqd7zK7eqdv2h1wXo3cdgy5WMQJvoAEa3amTojckqFL876DwEuhT5pTNhXL3XRAQ5nJMtLJj9s3r3T",
  "key28": "65Ys6VHiLLbt8kmMgtvJCFjKyuUGnyvFSno1zVPsJd13xvY5H324wpn8YFSf6i4W3JVYdskQS67MC4muaR67ADAo",
  "key29": "4jcWYBACCgg4Gy9y575PjGBzNBxwMPcTypHnWtvkyCYbBHFUCPAUVNhRxjPC3r5et6bwjxcsxC5UvPiM3wwJUV2e",
  "key30": "4yxDD3PVBe8JQJUtvth82iA8orShhqfiezdxL52FjmQ4Am3pUX3isKpGNtAEbRRaeaqTS4T2XSV74iyjxksSz9vZ",
  "key31": "5Uz7iqtbCpAqbCCAJW6f9CeikgtjUYWA2ttUrEYcHUWC1gUF4U8yRre5wA4n9ytEw93unt1zuJbZCeA76q7tofwj",
  "key32": "2Xt6JxNE5qLgSP4HyWaENPKdZHCBtUymDis3JcwJha7qXMCF5PQf2a5NVRH3Nq8TgANeYgu2NHDih2SvPKktDZ6A",
  "key33": "hWfghTjrWNCF7FhkEC9zJhmCHsyw8PwefVs5TAcGXH3tBZ288b1oiyntJTXNNeF9tZV7yvG3XCxbUJN1FFbAzS4",
  "key34": "5PzrVh5D3g88Fh7EE7W3FA1nHpYmKrF73hpthqFLXpwM7ZXYwuVywjxiP5PZPD1jS4i4rmjnMK6siezKjmi6vpyx",
  "key35": "4AsS55YZpZiiGjsijeiDhx7mpCbqeUzTQyFNM15bPmTmSXVmqn29bZTVnCSzgqCzRnwcKmwjfkQupuFznT5GhDE3",
  "key36": "2KPgqBYFE3GuQezw92kpu4tSEm6fFC6Xr3LYDW4nLaXD8HbqVYJQvL9kASX433YW8dZB1PtM3R2kWZgkJh97vAoJ",
  "key37": "3HTM7YoowD44p59cMhpj4HT4RxovnqmYrVzLEwyGC9YtXtTtdLEFrzAB7Ng47vTzJnx3tDoVXKdkovjfJ3PU5XP7",
  "key38": "5Lq29jV2afCme2boDXVSJguLCxwUiCAiCbJhy3XMqGmCQE8PjMMwEjwq55p1A6d5Cr6CyRFgC9xCUpWd6LBsGuTC",
  "key39": "sTMWjcjpi9Kg63YFPBJJunTYgCHbgWg4WLmV3troJpfk65FDvKy2apxq8jDnvEVKGmr9771MRvLGD1dDGq5nVpX",
  "key40": "TeVJmkvTYu7htXHwQjusmZgVakLMAJjExKZUMqCcFufmLuaC92iALfJKgK4whuGGUkYJfJ1LzMGFMFZoMEf6hpv",
  "key41": "N15PYfaZGUjVJPQ5sLA2jZU8gGjRumFm72JozD953jLNiq7UJ26wb4kaEHi2mnxcaheDXoENTnwyrtBxB77aB4o",
  "key42": "4bjazp7ddtbPv77N6DM4V95yVSSJpFGZKvBsdBUJCrhwhHPkpiFgvYNBnAmY6udYZND9idEyV3S2MwoGY2rizD6U",
  "key43": "2t7JnF9hzjc58XAwRSadpnwS7ueC9iZAHH7xNHFocaqNPfXwfiQ3qjSSi35b2sn1kUyom6ehKuL7FPFqKj6sXF3e",
  "key44": "mBuqNacd6oExH17kTb97z4yfvE2sWRo5PHGUBUqQ9F6L13aUJktByhrD67kSakmnhtFpuS2WpAqh7AfY8yG44hn",
  "key45": "4sa5aP5eYrmEh5Yu4KTSjkAoBa7UfNFyY9cneXLBtePQ36x2MPhDB25XacD5o3F86tcBGKGmRGMjBykTMX3X4PNf",
  "key46": "3twq643AuYCgy5gkKHJpz1oyrVtxuSvGMrM34vi8qMk39rA7kVXbRxd7NbbefkePGYT2ENhwwKGbLoSQdwipFbdr",
  "key47": "3MRhKPqbSFBuAth9AdbkbiPA4phKrm9swMVAmm45zLfcpUvuQXjc7stJjrLWJZrRkvG5PAtdk7BRtKAJ51z9ELrz"
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
