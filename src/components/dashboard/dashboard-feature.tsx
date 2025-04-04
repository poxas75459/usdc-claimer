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
    "GJNHBhLrjk8H2q5ugGd4a2DSsmTLiLMpVDjXDP9oTXXDXu4Vx9qhpWwebe8pcj7yz3DFm6qv6RLGWNcvHiWP9Ki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EYpr8f3xELUpTPXSZtnZWZyjQMRoDLkEFGyHTxPxFx5GWmxnAAYD2qQzhf9d6hkKjyssLnycTNGM2ovfgnMnqCo",
  "key1": "5RSqVxRkpR37JruECjH7J1NwfBV99PckcMEK1vCRAmPBZrmS5N1ccT1rd8RS94GWtG6eiBjYmEYR4Qe8bvuh2acT",
  "key2": "4LqVtzNBDGyNKkUxK8NnmgfDSFZnDSYS2iqhswVuT4n9HWjp8M83NUoG3bJZndjkuDtFbyqKHAKpSLi8GYq1k691",
  "key3": "3xFppFsYriJZeuFECZTSrsVGu5q9CKDS8zghmtAwF8XA3vKGhvYu7XyPTMBMYfLDoySo6unw5DB7LbNz4n871Rmv",
  "key4": "sYY7dkWngFpbPhXFeS6K4kVFg81fmUGkp47sr5UxjofGnRzxMjgL2obkfh6Z3EFQ53SL492m9kcMaLrepeUd2Lv",
  "key5": "4RL7b9zRefLRgFnkNnvxBEqgXa5nUuuPmb445uscKXDTJBcu76JgSR1whRXvFmMrbaY9MtdRyeNmrUHfAN5CBgef",
  "key6": "4NvkAffv7kn4o9uUJbqpMR9nZaYsmRvGxTtoJyXkDL9A8p8P8i1tHDNsRx471uwkcWZZHaHWhWfe6T3F5dr5r7iF",
  "key7": "tjHCj5FHZVzaemtTJFRu5pNDj55MGdueMBrCRQpyDoqZQfZ7KurCrpxtEFGLjokw2pQU1phXUK8ebRhAEeqMBFY",
  "key8": "4gqEyinx6XR43ovyRSjKFKACZ8Km3LyTZo788yBMBQNipVqgmRMDtNfciVspwYs7NQmvk1jGsz5bNEaft7btkivY",
  "key9": "23eDApEJ6ogsqTnsBComKmJygv6bnk4FRqyy2u9PawxzzemKm6dwC4oeKz8ttg46HkGm4MV9KLN7H8PRWgDSkqRp",
  "key10": "5gKKrmJMsYyocMguanWYXkppaA9L842FWkgo6gRFYSfkcYpHqaM8CswtTKm7j5gvSazbyAZZos2HcwCUjxXuCaA8",
  "key11": "4onmaZuKCXEuKQA9iJNGki3FEywNZrKf9ShRk9bigsWwZqajgaWqZbb6fXtyAethFWnoy5tJx3XYyFQDqhBahmwf",
  "key12": "46PAaAA5L9LeNVpV3fhZFwordEYbEF5FNEo9hZkttGNSir5fwwRFng3yUS2Q87NsCw43AUzEPzSxAAoQ3gYf8phB",
  "key13": "2zwWGasGnMSzcwoiQtuN6eX9mNXwE9G4sYc3VjJsJ1ULFKtQRdVh9cxaYnsQnAorjDghc7dcj3Y2rRXsdk9fX5D",
  "key14": "4poEGppY14FSspDEEPMg8VrT8WjgPavGKhqnZo11iyTmucvPk8KSPhrn3ojQrTskSPsK5EzZAZTAC1D4ojF7shNk",
  "key15": "27KzunVF6AKH9FYTVrwsbH8yS7GrGW6c3a587HtdSoFdau7eimZ4W4yYEFnQZBXLYcMqvPNFZZnQvyKSuKRDGmtD",
  "key16": "woMAfHFgPJQhhNkCNzagxMPphNX9EQsZWMsQs5KvQ2FpnUshYUtTJiX59MKnY4Qhh39RoJpBswPHkBFn2K11AqQ",
  "key17": "4uq42q4gGyGu3TnHLzGprk3wNTMTC7RopcDDJ3YQmdjJkQV3gYgeVZWALDaZF1fRVKZknS7vkVYUwuaArymRy3jm",
  "key18": "2WvEGwbSPeN3HfXNHRhASsSWPRejHdjmM7njmQRrVtuSRi7vBGoWoXDPKmFPkwb7s5TCp3PdMHeqKDjCLiSfW9A9",
  "key19": "4Xd6vwZStRxMjVMXnr3RHv3GLXsvRU8gz4o4AyMKnCQ16xSyuN4DpgnpXrK8CP119UEShjEJhigUY1wmhqfyeJ1y",
  "key20": "3DZ3cWxNUuvLzeRKi65FeMe1W8b8gT2iTsPsjdqLgh476pH7MMnfyDQREJ6c8ru9YZkzSFFXaKRXpVRJvKZ4pdFp",
  "key21": "5fWiKsEq4CGKRjFaoqwjccdDhZsnc1jP1NvpoCvcttSCerZp6XNVGrxoRVfkBa6NFqustHSPymyemUjTZ4CeCzqv",
  "key22": "2UvJa8oC9qkCvCMmBWmAsoC7LwUfhyhkUnY7UsffQ95So28i1R6rqtbM6MFabb1wuXJQSiz3W2EUY4CVpnEb15Yk",
  "key23": "5wMo3HBtjx53cqnya6gVby1JtE5fL5udtUdkA7LjpmonsWrfE86TFRp2au8h8dsw7WUBpCwSoUxfSMGXJY9qsUC9",
  "key24": "wUDdMAKGcJcUFYKmf8Uc6W8bSSkJjHwQxvKRDHt7yzwzLQFUs9MUbr848E8t4Ztwv5ToECDGDn7RpDzXPu7TL6e",
  "key25": "byhtomMZds7jGNQhNAj2Edk6BmhcHJeQsN11dFb32TtC5hzX2egxXLyL7naY8iSP4a6RkecfbxoVBRZXDKbwNXQ",
  "key26": "557km8W4cWHbaXnWYy1sp7PiuDs25aCgjj6rtxvq2bDn4Z483EZuXsErQsscVU4gjw6eeTGj51ojLNBWabyHP8to",
  "key27": "5YXEzXMRKuoX9x4mVKNskVj4RghqBoLLEgN4AwhffszNEgdsbV8HPnC53QPU33Vvk8vLXajPYB48Go4s96WrjWFF",
  "key28": "3TmJhLh3Ed7RmNwSuWv6VQywD8na4Vkv9opwWDhSjrdg8xJ6VUfDjaxvSkv8psjwq6iZvUSUe2upn5YjcTFvGuas",
  "key29": "3J7R3CiUWZzQQYcrQ9qBZ1hTL2XWw6caSC22pgGvEsxs8m1Uu1g1UTsaHK5RB6CLQaZjvZgK5VNjgQUijb524cJR",
  "key30": "3NmRpiu1vNQ6dfRCBVuZVykvwsTBPwdFW4r8is515zVLT4ygQ4GsUGBq8CL7uc6GSqPnHAPQ1Hd2rcSKZsLab2HP",
  "key31": "4mHCFvDdYL6tM6MuCME6aVTsDYjJPdvF9PibDo5e9dGGcuKNHtRwg6UPEPoqeGGTtQX4oYaPTKQor53ypkP7zDH7",
  "key32": "5QRK3M9KTCD9pJXRDSVQDWxLp6XTHRqjTdQn5UZC8g2ytjDbCvcw659A1XaixDZYHMRCHqowwpj8yXr8shH4H8SQ",
  "key33": "5NHtXWfyye9oXJy83DpeNpuuQ3vTdUXJtScgTXsr4EHnsLrchZJX46Rk6yKJznFTxBt3KYtg6qWzsjxTZ3PCgHJF",
  "key34": "Q5UrbdfjVshJ2QqFoBhqTMrocQm1MGk6Kyq97TmnVe4CujjeoGQRstjpqzMe9j44wR4TF3a1SpLiF7W7QYuU5t6",
  "key35": "27Nb4ZEfnm2tXQT21hjEBr5Zb9kUT6qpJhKmXXA944LCv7ugzA6SaNNBeVgbcaWBE3DngDMEYxhmNcaB3T8U7EiW",
  "key36": "5Syrzsn5i8LdhXDVoG4QrTLTzvwfeYnjM86qX6Gi63SUNwutRgkps3vuCmPTgRxskuVNd8nk49m8rjZ5CfZRmAKD",
  "key37": "g7eALYB56SqK2fX8UrBnV5aYtWdcyUBsaussMVMr2daQwSfpQXLJ975sWHmzu5qpJCkfYrRpiwG57N7hF4PP1eu",
  "key38": "P34hs4gqHeVcPWfDJLeoFPL15xYiwBBC9zof3ohsmnRS9YXFQUZDrupcrFc9xetEHZLHdabwBW3bA8FQ5mfMH2d",
  "key39": "2xJfZZEKya6m7enwTG3YRVnYfWTyNGkPxgCMVpM8cFioBrwaPH7byxEQkREC2FUQQAhuBK1jEdEFSJoqJFo3Losd",
  "key40": "4dv9oXX8yU8j2nfPU5fqouLY3vw1M3uCDq7mitCrg6sDMzKmeubxo5DTaGJf5LmBTV4PfUTfccTGhdEHycEuzrDW",
  "key41": "36H3ykXLJzwxc2vPQV2Feo31kfG6VfuiLKo6RA5aawvzuV5hUZbRgnJ6dUuZQdtosJYzMpyxrMMiKVLd9HKfjyFM",
  "key42": "3Nhj4fcdXT8Zxou2fK424qsgFdBPDG2dgApB8TdnRopKz5pvcr6PzmRVAf9b5u6R1gJyo9VhTkPnKHGw1beuwnTn",
  "key43": "2LLa2azScXvAnGdpjsenxqswg8esJjnkK4mQ4PtddUnYubMHEJL9LKTz7PTaunHhxCoo3XNdrfg31jsCcqNjKftz",
  "key44": "3LLfo9tXo3kxdFiqtWDUbeKzTa2RuGSJzU9jBEKhUzdBseXJ8xLRAsg2dbcTX9qjALmevc2WaHouD9hYgPwDqzNm",
  "key45": "3QUVK2YKrwSUvoBSR6E31N8UZak8GPo6d9AWfv3P5m1QLirLiQtX6fCjCmtG3kkTtpnNp5DrMccxBfJo45UWHUVp",
  "key46": "mfpLRn1GuKhdedeKusMpdmcmEB6fBhL4NUSguJvr3qG7dW6LcK2mEbhLcoMHvGZzDHfKgq9hywU16GrXUfCR2e5",
  "key47": "5tarom23TrzGHZ4M53mCk2YCtk6QRMZPrwTZnVBhZRSrs3KhvCrj5mpCkySiyYmXSbm9JYR9DJjFY4zADDkogqA9",
  "key48": "5V3rLikJwab4pdg4MFW2saFSPjewq8w3queN7cPSiG2sWnPdHqnxfjVWJPVq63pwzqgLAczP8dx8Pd6gEY4oYaYy"
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
