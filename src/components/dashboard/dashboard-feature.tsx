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
    "553YLk3VHWAwQowGhGhrkzJLM33rHB29LApVZwogYmVCo5BdtRNis2HYhMzMFFBYE5BePe8E4KybKs2Dbhzx9ruc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JY7sY9JDJNhoYDHsznRqSGohww4kHdwzKXCVfd3bmhKvB2RJGYYgqGX8rwfedMaEGQquEpmTmMwaJxKJjtNCUws",
  "key1": "4V5gamUi3MSqR6HrRtsuwNuUuU2V3Qj7qJ6HioyoE4cnhCy4AE83VbraCcuSCqCrDJz3H3X9A5NWRSLSZV1UMs5M",
  "key2": "3FYJ3bYcSbGGZHowm6596wqcJf7bGyA7pgQD44s6X2EfoQwPQFbRwWigASuLF5uK9aRCxWA4y7VExsToLyM4rx6q",
  "key3": "3GRSg8Byp7EAS1EKmXHe35PzntsWQqv5eN3ck258qr22Ax5tTEjp1tRBtPt1cYfeYfuZJg2VcBT2U3MdttPcqaEg",
  "key4": "tB4aFe2ABHeqhErQSZ1ieDhx6gmwLyGVN8MUsfBTbVMB3g6AB1nG9JUNodkz6G61qsRXafUf38mD1xGHjTdfiQa",
  "key5": "5fvcW96ZvvvytEQ7EBbs5pBt38oLDdge5FByNY9FnGWssCayTdAnfbxHbwmSmJLwuvifoMUJUhrMeJzstaDxruE9",
  "key6": "5H9v1SAW82rmaBBN9u1RAUZk21PH8tLhQxcHfej8985qSZr4pA1JadtFdrDvpwJe4ymxJtxJwUYsciyVThzSLrxr",
  "key7": "kVBgciQnhpGZtU1Yt1AbgU9cMK1iDrfNTiWV8xV5bXMxhYS1VNUByV2PoRoaH6461pJyjPoJLXM8gcPkNWips6i",
  "key8": "47iTBmxBc19BHvDUVCWTsHjWvffzCgVahdRLpR2xis9e4H7AArrz6WSorogfnauTZ8Ae5sS14czzRzA6bENkv2aL",
  "key9": "3avpC9aCQ1qNNuH7ebnqnfSqZjyJZYgEDteqqgsurLV6XrcEx2MwGxjGbDZCZgP9zULBL4zV6yMLPTeEsS4YVcTP",
  "key10": "2XEKosuKwsWujFeA3x4cNVi67b5KptmpxA7UF6xXtwyJ8h8c1ydYNnvTkrN6VT83ds21TXdfnXjaRSxxpT3vj5SQ",
  "key11": "oGQKegUTo5zM9EgEzxnTypvkKKm1FQKxsJdiZZqgyaWocp4DMExz9N7qCiiky4ucND8dhkz98DHk9BuPeDsqcRq",
  "key12": "2MPCo9KvsYRyV2MXdtgpYPQYYFPfsLnWZRG1UCSBMeSbmCpJzPJNtBxKc1iibF45Sjz2WJXtvES8w3vJ1D1SM3sm",
  "key13": "3r1XjQHhz7fZgTGpfdDWoxmhmvcbw7M4CXHBacJDDWZVpEGd5c4fwze9bV9Lwh1tagDd1HoJ1y4xNhn4nTyChqV2",
  "key14": "61TgjwR2f9S98eX6ogAHxuGFRAo59AYbmNsRgUGtLT2PaooFfdPMTzWNj5BnDXMEputMxMLbQiXBnJyBkzcZAyyz",
  "key15": "3SiJ1Y3tJkZqTMykLjPGMew2iBc5eoRJKWRQvwwBpf3vrqteQcLydRuMamJsjSwn91QKKGhHoPVWerNcszLgKghn",
  "key16": "SguxsTCT2iYdW8mgZ4TyeB8P7bLr2teCWE9dc8gdAEEQnH1osPWRE7iYqVrEfEkuaeqFZZqvcpQfZu4e9otzpUf",
  "key17": "2zRZv49UzYgQb4aoa9521LpSUMr5fAA5jhAqgDM8aKNpJoCgyo4Jh6RekXDRHvfM37ZXpz9A6cJjfLsYP7sdb95x",
  "key18": "4sxJiGwnyPorVvvm3Y7AYvD52fL3n7YHA46yQbDECMRuJPPNFXceFecvLEvMgqHeCBBAC2aYi42KyC6FxvxKgnU9",
  "key19": "61Ty8Awoz85RhwfALS18449nfULhL6DVHmFKaZFARkinNvPS4LeAWPwouPEyHecQW6aUjsnADiKCuwdd6hhcdQ7B",
  "key20": "3jSru3W4PcNAvZpKkALsF8BacQjkQs2f2seBEypmAEntzfvtDzkPt4JoWrRqvk8GkrKZ5v2rT1w74gq6WRrbMGBu",
  "key21": "WGSi4xhRBiuuzstRJumaW84Fe577aQBD9511Vm53KBdcRXT1L5qdBrnnwiGJixe97yywpvLU3YVhBV7yySK3DhX",
  "key22": "2BTW4yDtfCYAKXSZkXWoPf8835S545HfCWdKU6UB3SR4upgCC5vJQyTdijxEtm5cvnXZ2RB2f1Wk14gZGxHRxk2f",
  "key23": "2pDCaFGirQnrLbrDQPUbqJTNAxpYAYuzcfmUboXBqS4AmjhSkurihES2mn8LE4utnFyDrN1Ex68LEUtUtJEPvVrz",
  "key24": "2gcmURas2RgJa2gq3m2EnRcr73CVyDn2S2o5yNbUFaJcLq5EjA1si6EpqdDnoL2okTGDBYcP8XBsWjTaH4jf7ott",
  "key25": "5KMbNB6TR2TVViWPGX1GC9D1JuTB6fEtYKmkj93Z8p7jE9gH5EA4MyTCMtEtcGmHPE13UGSD25jVAK2mLkinyqD8",
  "key26": "5VoWmhVp868XDwtrkaxBh4N9KpxnYuwWixtehkMhFd2DPeF5RUHZX9SSFd1FJpGFcnYk2np61bUo4aTnWFHhG579",
  "key27": "5HE7Bb5dWoE3bbKNPqm8iaGkKmmoaYFASWQ9sM14TgT4MSdtnTLZdDqV4vR2ASVT6fTF1QnFKri1wJypGTmL1MSN",
  "key28": "3TxwKKAL3rJAL2NogZZ7Z7KNLAsS59JJDo839ftcuqWojjrHzFzocoJXtHwvcim1VjVLP7XWhSnkmMigrxcJUdgd",
  "key29": "4Buj1x1gPUFFEgxawC4NyC5SsGCGVgE8vaxmxKpEHQKPY9ta7J966d33f9fHDwL6jhifwM4TitajCntEJsA3Raam",
  "key30": "3NWjqFBSgJwYcHuDj972s9AiLoyeNk9uTyYCASdxMoD9kqbgiYEJ3wcR32ycDQRDFGprd1qzgSZF2ZPqJWMiR4Nj",
  "key31": "3tmMYBEV62bhtuhrkbNWke7ijGvGc1Dcshm55HpdFnpuS3jTtG9wNq3ZSYUnWH6k7SCqLSUKga2mpZGNnZ6Xaxvm",
  "key32": "9jwNfPvCqjgh4hrMo6qv3KxR8qW5DpndX28ddjdraJcEzKmpY1uBiAowkhtiFATKMNjmLwymxzfpQEkvCkivQZk",
  "key33": "4Hao8idW2x6J6bAUQJiWPpE8P3nzyYdyb9EkndzZPebhs5vinZV7sqSpMLNTHcxF14jfHXNUkU2vquZRrnPkoyXX",
  "key34": "2eW1aFyaK4gLwvDaABbCkjwE8JRwnxHbFwALWA49zdBuCkx5FXbDDArpXD7wVhwhqLDhAm7MnKtfTm3LMdpGboZ9",
  "key35": "4JacGzyNsiiKtHadwxSC7wh5Yx4BTUKoBiUh3yRZFxZ1JLxfeA5NZn2t8AVGA7btgznxQyeeMdf3Vbv3TUY6a697",
  "key36": "2MM1iUrF3Ji1MttdC77dEonytAmKW8G7MDCrDSfajFNdYJfc468Tgq5evBvFhoGrnk98v4gPhAFGaKrHWuJGLZM4",
  "key37": "XmQmvFJDiysiF4Wa4NL71fUmFUNDxYnJwLhCTBvQ9qZQQi6MDDA6hxSDCWvuugqu9tYNoDPzo7Awc3yP7LdtrCt",
  "key38": "2AjrUWRDk9RHJbCS9rp2w365d8Q53Vqqyv5N7UxZQHGcjd2LNsgoZhBaJsh8qE1TaNLqWdrhCX8Tx6fu59QQMk3V",
  "key39": "611QdDw7v5LhWRgitU6EsVcrGDXhAtoMpBmSzxCYDK2sQUW3dHoWWVC3dwXe4KNCJ5dUbX33W55C68BFrxVbivBi"
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
