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
    "2cVU71zu6foZk89xKar3WRWqzhEoPdLirgbAvkJT6DGzAtHkcqVeYkoXVL93wzXhsr2JYN2sXxAh8zzC3Jsrbxw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wi4aKCD476uGbq8nhatBskMR3zSxRUdE2Qhn5uAvJGkqjpYXfJCivv9fh1xCh92979m8xfqv2wFd4pnAb2u3t5u",
  "key1": "p1Lm41MH7NG56XbwzecJbTV3gH8nJvbxPDyTVSPQ41ngQQ7DSidSY6tBbq5egN7C4JeKBvKFfLvtLyPmLShNTXr",
  "key2": "2DLHhjPTZNJAabwGbDy8cezX7i8Z6DivWnkAqr5gGWcQgim5u6ZVrVtsUTiXtJqKCGoVuT8QDskFqm8jhMrxSKyg",
  "key3": "3X5NYKRaq5ArwPZdLedq79fZdyUeidoJaASHyr6TnrBskigmxshd24mhzi2cq9KmKAU4nhKiAoXLAxBr4q2HEMSd",
  "key4": "4j6MLu7yH861R56HNoW5JV4B5y3aWFArMfMNbe1C67zEEGb2Torr3pfjfAi7J5MZi3J5f6nJB8T9hsBCPHAuiaHc",
  "key5": "51hsoEDX3JTicKD84HcZDt3DG5E9tDJPNUWNh2rTis3JSJX7jn3T6guJEqABkDi7zkxEb9bF7gfzXvA7egstGeBP",
  "key6": "54kovnREnybnC9iUFqHKmK8LxPF88pfp11QjS6QBptyGkWNDhcPe4F26kbbCaQjZUj5EFpAgA8xviTEjqX2oSQs",
  "key7": "3DvS5g66Qdn49PfRS69bEQHWmwYkLqVSq7xz4YFRUYFpcrPMGk5MXTEUjsv8zZTN6rQWXLNeb2WtQJWLyVZNHRYx",
  "key8": "3TcXUfU1BVMek3hy96LD1xdJTyXUQqCFqjB5ACFBWqAXr4sWRiC73kyBg8jdPrUVv2o5YKY1cRHV5pBhxVPVG9sY",
  "key9": "4K8kScigy6SKFYkVcvRS1DSoMvxmyicP7wGnihJb7jPgDtjhkeRA4HMBTPQrR7TPZbwQ4TBK59MZvZbDuSoVGR9c",
  "key10": "5whfkz3XPB7U6STjpgiFsjVbLobdcCDkckata8Eh7bWmFp91YNQnw3tE4HwE2jmV97VNxdonxD7MiMdXkYy4WZJV",
  "key11": "33gY3rd6f5A4cUeWRr1q6BZ9CBVfkxhJ1XzZ6hBm4B71RbpeK24gHRokZswnmXbtGseSoVX12Xbk9vCMKg5hdTDn",
  "key12": "47HKojp91h2VQNrH4FPrw1Wrf3m7RkZorzRQ8Cd7yyye4zURSkxo8GCEgWz219zCREqRYSuMrakcDYpk8uru5SYe",
  "key13": "5SYnfPJVDLyg3rjNMF3anVtPcuYqyZQTHw7aR65vXoKTMdmpwFZhbAhWispfQ5Bp3nexBP4PYmNM69hCKSUe3xHe",
  "key14": "DZy3SxSxTbYh1zvJhSdrskw1AC4FZtEQdnhc7zXUaFXk6aRnhYfWqqjovGcFwHvbobBJWy2SH8xatbZTjaV9Kx7",
  "key15": "PA2udzQeaBrVZNVXo4YwyF7k7aKuRc56KjN77YcTZPZADRb2SimH9XboQUJ3JuUCsC25iuxAM4UN9ckuGsoTLxi",
  "key16": "2cbSdi8K1pCcH5cFgnAjUCkhg9m9k6XevjCuxmVYZKYSZnf2PoZgmyZYKwerfsvE6qTm1QQQN8XQyXXBxh3y1fZo",
  "key17": "5C46GKvYKUKyh4JaKRFu71iWaZyJwKK1XLu3PmYQwSfVrhQDqPpsYwSj4W7fQzi5xv1uFhckrFR4PzaSempBMqsK",
  "key18": "5RaWgvLB4u17LFiDeFJvjntsUoawJUDRdFA6buh8PSvF6RU3f7f39tDgGs77tqoijfp9Ly9neYnaCSwY8RdHXyv3",
  "key19": "5Xy4FyZn5P8GFVL6PpJvPNu4gtZqrbefY6uqFMjARhizbKVTWyD5vVjKaVkbiYEHjC914za3DnV6D2Ykj1uexymn",
  "key20": "5JHoXAPJPeSyE646wnGuJegU2GtsNk5Z1dsrU4VUPgHYnvjDvMvZBGU3wG34QcaQAVmUsdqzn36yowagWJ8JUfdc",
  "key21": "5yuRxvaDHnMmePeHHz7SjJYnaS3Gdgt7qFV8rNvfJb8J2QkrMy1PLXnb6jL7K4JBoLyKk9yq7w749vk4p2sUQiCM",
  "key22": "JyQXdG4epsncD7PH4rBi1ETxbQhQ77uv1U6scxgcbotyqSLCMoVK5ViAsa5nhKzxmtW3B4UFAEmysShNHd1jFwR",
  "key23": "43dTdMwTjHfwGsdTjVoV82PAbTQQBfknGCuT6R6UtWeQe9FMmqRBWWAeZimjaVrcR8jQyzX2y5o8CL9UrEcasmk6",
  "key24": "4i3TEcCz3KshYWLKyiNYeDgVKEi6jSRMsRw24qcA6V58HNR26LLXGdTcafUDELB8zFsZbSzzbnmhtdHw7Ezg4EeB",
  "key25": "5ReoU1s4vpiRjW5ucuJd11Rox9E29UZe6Cih3ZyMZTsWKy4qnCEU9BgimPq2getRRvuGXK38rnwFXU1AaqiBkLo8",
  "key26": "2ZwsiE2KmrfFYYCgGPfqLsCsZSdH8f5p8MAtRjWRVwFqkM8MN1mM3k3dHcRRzZrqFwbdMssdiip6EEFPfG9uDftc",
  "key27": "46Gy478Lx4aJdLTuUaWXf233aD1AMjyrhqDVxqJmcYNqDpqD3TEBfDsjLPFQyke9pRxDKuB3V9jXoxCEZeNtX6zL",
  "key28": "4Vjkf3WsSQiDXg17xtPtiydS7HvKtxcgJBQT3b4ajWvugJyihWmtorhx4ynhhhoumwRbJpbcxUSVwWXwUfFskSTM",
  "key29": "2sd4KsCfBoz2ccfL9cLPWDsqGSVp91x5ehGk6VhdpfkXu8GyqqUJQG8Kr39hLCCCoVEygaPd8BBJThVrQ767kPE9",
  "key30": "4uP1dHMnwVX3wJ29BrNaV5QVgnpzk2iqmgd1aJmKN5HBvmRAurwb2AMNaKemG8crnWt9JGgQ7Kgi9ZeEtisn8Bip",
  "key31": "KUpZBix5sV7tvbfyziFxtj9mAQdDibGDd6PuoJQnXATXwNwP7PK68KuiG4sFjCXg7ekTQYcituBuh15xUCh3rbe",
  "key32": "5TWGJfAr2KDNeNXrBSQEosBqM94z19P1joWED1S8DD2QcKCfqD39iovdvEKd7j4kY78dJfKFF52QkK86NcHMxVGS",
  "key33": "5XSUrmaEk8SyKHy98HCPLWCsuPBbQNsxZmUwzJmn2KEPp4wHyEC2Z7TDVF6S7p3iPEVhCGUshys2ojmsY9bz5W3e",
  "key34": "2J8DzfMadjni6G7gGzLbVELiS6Jq65WAP8JBsFG8QYdTWon8WDP5td4ngF8DtM7DPLaE7SHrM1niWqh6MTdPYuhS",
  "key35": "wkNXvwN5H7JoJafExQYBvXXvALY28giQu17nScEpBQxouSERa3CBRMrLmcm84czUYSJSMXhEvQNigFyAfcExaz2",
  "key36": "2S9jYwj7Z73NJ8RmhUhCcXym9a68WehddKuoS7cFVzCjUPLXoaUsJRVQrFBHJuHQef6CedEurEvmqGYJ31kDYA1N",
  "key37": "2D7fEyaUb2cq4zp1ts3yQADjRbM4TQoKewbfjXDQQ8v1Ap9fqUfbHZGwpEgP2iSnJhBJQoS1uUUkEqTTXMuAYmsh",
  "key38": "2wyE6Wms3LLJDu9ANbamWR7gmeuhb2AvcyHL6RxFMV6XxjoiHpncK9oZMNBSEidU6R92A684QJ6sa18NVmwiTVUv",
  "key39": "5ULhTQRtLhTFAwNKuDKmie7m8kftyDSDUqKwkvzM9oCbfe9vV1iJhGd5avuFQxQi6agdj7iQgnJwnHcobRB6bP3X",
  "key40": "gvYsPYPiVqbEPRCUZiyLdX9v9Dq6uJei3EUZEkVMur8JRF4ag4Lp3Fp8hUo94VJARASneEoEhWy5Lo8bLQkn2wG",
  "key41": "4HqK5H88YsvESTnRXZCxoEGSK8P8ijq3VR6f4T9jGMx2E2uFvHMjuCzpkMb8WP2kzZHgaVP7ZoN4TMasa11FTY6m",
  "key42": "5P5s1xWbcY8CkNqaXCkDHQVDFtDsMAGQxWwdYbRZW6xVjrqMC8Km3SAn2zJDM4vmg3vrePU7wDqwF8A1YThH4Js4",
  "key43": "NjpPiz7SurphQLncqTuRonjW1nHU7tSQpdVKQaagoMAs8hJ7CRtkr26AAYDygXsRgXD7iyt7TeWw5A77QnrnGYK",
  "key44": "3z6iaqe1TqQPPviu9YNJWw78SXq2GLhfp4zgi9nJnacdmRKTiEzuEeEgnRHNFHPDAxThQQKfdTvXsuQgxcFiYeCk",
  "key45": "4AgHwdRMWxgCWAC2xmVaen8NTaPxDXoqvwTdrgJfnRVpEFPwFmVjPnXDozfP57cJ44gT8axkAPX4y9jMkkvjytKi",
  "key46": "ueTQh17conN2Tq97VqKF95yKMNhPadEKRBYVTKBSV6MHUe8kTCpQSDZ2a1CZWWUEtio5a6dqvE9vkp2cXqA6yXF",
  "key47": "3xfgjJdVCrBQpejcLmn4mebKCSmKq2T68pkMyYVYYFhyBgHVBTzDiFXPYDyM9LEBrtgB4phDkRwqnGhE7HpkhcP8",
  "key48": "4AkqhbwV39z31zib7N546exBHCFrvY4aneuxJQyYWsJd2qk28urXFYnZCpXptghnQxP8mEVHpDNCQYcBvAtgijJV",
  "key49": "39cHex7mdbee3ZxMdqgEMeMZUTmmtiWF3DPupNmdm7k96cQ7bhcqzVz29r9yiLwgkaDDJqUPbxX9akZGNZXjAyv1"
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
