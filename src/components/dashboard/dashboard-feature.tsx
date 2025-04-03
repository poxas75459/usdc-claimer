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
    "2fCprM3h8e3mZN9uRPVGNqHHDQ9iPr64Ap1kPyisWX4qSsU2FVSu7dGQEugpa9uHoLBpXzZHQwdaYoAv9ffvVrUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2narysM8dvx1ADkFaVpo5dw7Rg5HExZ2wyemGLRprbk2P7hKLVaq9ac3fumz4KPkhk8RGSabkE8n5GitYA8gQdV7",
  "key1": "48kD3SSUeHZSHYxTJkt6YkXy4BSrxyoxg4bfUDRFFzjj74g4nhGUz8p57XcNarDBFU6BuMLAdcgeT1pocJCrEE7K",
  "key2": "EeTdfYcANLUDZPM6BJR4W5VHJkU9j8DjbsTDkzP6VFc7HAFk68B6wHBrnKjpqm71rzSrv5yAz5p8QaNhGpYw51M",
  "key3": "5CkQPpGzruQWoTb9wFz1643ifTFZnW8CaiZFqkrqQdea8xbFDvwBci8ZCAFquBzgtHBekFx8TksM9zvAb6MgBHcs",
  "key4": "5NE47QK4hLNBzABPVFXBTwBBMZciLEsVZjrTXzKR7Nb59Yhmen4VDriF1XatVR2WQ62oJTLUg4HivrMTNu59odkN",
  "key5": "4tmpfCsmoWTKeC5nbdkMJmSpkwopLzh5ncWSciBV1EMUg2nsoprKv2iFdzaAZipAg8yHcPXAXU5M16CPhHr5MK9J",
  "key6": "3uNZTpuEMTyqTc1WxEra54PBBrpfyL4Q2jQ5crhCaFGrZwveWnhrevpFZ95vZWsk45tZiqYao7iP5ZZ3JE7GVFqb",
  "key7": "4U5jAxYQXQi4bTMib3TtBWPmnHrXppnyShBz7VTuRkc89iVnnsbHu9KCy692FseeoXEFvKmiDWEEPx4VWtsDnV1U",
  "key8": "4x8nBSVyvbA56yKRPJGGJHFvn4QAjqxFoXeHRJbNVQMhqERD8mCLEK5pcSEyiQ46Gsc9S6ag1Psr4z6wHAHcwQpA",
  "key9": "GqVP1SqLWqD2XiS4bCqLXDYJavau2KQ7pfMDsyHhh6sLBWbLvQr8Nts5acyJDuDigZet2xhgvA7dXTznSxe5kcA",
  "key10": "QffFfkTZQGLWNzzJs1CHRgSfLkgLN5wXTez6v7QeSTEj8QUTzJNwjyzt5cyma7a2iHdGPCSh8HZdUfiuLxLyYwX",
  "key11": "2xdW7eBy79ztYUmBuRh4NjwkoCtag7eT6GUHeVs42RNPEjKi5kewjA9fCPnTBqnkMHcwoUrKM6UcZSBfKxHU917p",
  "key12": "3ALHaRpVmB3mrnU2k11dTeto4xACXpExxeddwNtNd8iM6834BN8z4nLTpPmu39GFNeRFwgKAeVga9jX6mpEi8FJE",
  "key13": "gRaKtrT25a1ne3FceHrrpUbiDQ5kiQJo8WrXRNYffXAGD3i6CchnuoGAkX4BmmQBit55ycUWy5fx4zTRcuyST1q",
  "key14": "B4EwVa43U23gJj7QUArLaEYDM93iRs38cuGQHBySzNp57Dm1zgq26RwDa7sPR5GqeeG9wXyg23HTwcYMomg7p8Z",
  "key15": "2E57kyTfhLahp4aiZur8V4xaVMAga3puf3HYqFrq4QZB1GUAHt6m4c5kE8sNjqjLh6TfVuXPocmBuQTCp9SBXbeL",
  "key16": "wZhkS3Vrq1Cf8bx8S7XWzSLwqvrq5fnoYujZ5xddBQNieGugc78BzFwcTXv6qJvYGzfb84v4V3ShhVgCf8NWndv",
  "key17": "45sacLJNZEmNkCCfnM6iaQAJUK2d88fHAYDi7RtnGDWwTJN38FC7Hda79xZzxubqSkkteZakCmZvyTuko4WmKxDC",
  "key18": "21xPSXZr9dXUfvW7yj1rmcczUemM3dZyUiGycMgQScEJTKMagAj5Dpwv6LY8XYdXS1J7pp5U2QEmdjSu3F8epxKg",
  "key19": "52rKxoVUwkT4KgnTxKBNgDDjktp4FjQjvZK5Y4WQsn3BiomsULZuJpRaFqSWTu2nbmxSdDwqPzMBqhhLCyrjiHDa",
  "key20": "4MQq8srPLvy6TeLu3KnZZ3qh5FnkJ3GYnUiuwyi6BTrvgF794L1BJvsEARSasWPYbaCEpm32gSrKq6yeXBAqxuu9",
  "key21": "41dFwNRr1k64wTfVeqh1XRjqaMbEXR156fjxbMMs12eyr6bNpJJjCCs6TTM4A62L8vFYbm1vDijrZtw18ydUiBNH",
  "key22": "3sNHUk78FjVyw2N9CAr5xz6MN1VxwDYt6KdjzrzuAQD17g666QSdguZKsgdLH3wfapstnTH34NXenFs39r6YwcQk",
  "key23": "5yci4sgjYnwiWPBVuKn5u2mk1kZZeHx3QScbUEV2j9o4kd4KoNmqTEMfrXHcWUzVsi3nNeP7v1N1Z8hgQkw61PtQ",
  "key24": "3cLWCzU6gSkLgJ8kyNTUcq8TQ9EJ93EwPVwKfUhV9kGyJxJm4BioNREcAFVe9Twv8jaTui8EByptwt17AA3KkAYF",
  "key25": "hppVw5JD96dr2uPHWNBRpNgk99HPtnzzv9k9QC5br6h8QJoNh3ywWEJeEVuN7atX6BtC5dMWDJd7FRMd7cbhKc7",
  "key26": "5P8bjZVLebRo6nRq6CREz1M7YCoQwyGpcgcGt81B3nbiVXx8Z3cb4oGiw74yPQJ5ekQn2h9G16DTB8XzTMhFVvGS",
  "key27": "TM7ps3gp6TyvuAzK2xNFYEVjBajuij89kgyfank1QrMmK6b6qwgbX6AH1uNz5AKaq4Pzk7bXw8CeV9D5xGdXydR",
  "key28": "q3goq593HkUyavAvphTLcv8FKktEFy7ESWUWHkZ5zzZXooqQxkES3HYqLAFHLHDTfvwz9jiQsu7Z4LWrvWnehN9",
  "key29": "XToCtiFiEHN6AFt29Yd5sENnuGPCsjdDgRNvJ5itxQ5Xu1q1fPJzL53HZajbXgTJX63UfPBAoRYFneKDNk5eJZi",
  "key30": "44LkizELdUL8NcmeyFX4QQRADXhCLe6LEE3kYa9qaoYRH5zNosxMLT5d3tk1oC59qb9weByYfixms48Q2CDe4REV",
  "key31": "2SMFH8oCvXybYeUh24c3HP5fe3Gshf7TBsfhwsPRiWEWJmZgMUZyJv1vX52L2atbWPWZxqKT2o5DPSLBD3mkTj2L",
  "key32": "42pn2ewg5arvctnpjSCp4dR3iE5ymYkGckzafqdC3MUcjt9q5YDLpmCmMLRhAxZVJvfWLov2gfJwAnmxrLUtALeA",
  "key33": "5VX3cdcCcNQG9ekyx5zQVu6pptnUyzPJcoaEvJk6yCTTm7fzszPvHJH6hsoPfSXjUpKisSQaAZdNAx5GVhgptYPu",
  "key34": "Hhq8UjWGFbvJFSh1sTDCrC31fdmgq3qfTQs2YRcAMDvcqrL7XaSfF8xdEp5aZCvUHtWmp3hYLCfokA1628pzLQw",
  "key35": "3nv9iygWFtTwbFEAb3PEjF9kHVVNbkQT6wASz9tRTqq3EyB1AgLRCQCPRZ8nRXHAHmZsdb4bjqSCPWr8aPtA8qpr",
  "key36": "2xFqEkvXztWa9zpLAu3GcvAvLQiofsappa93qbjxAx5mkj5B1kH9soZ9DWXczfttcSE59szdjwVGtZXytJxiTvn5",
  "key37": "4ozLbvcmANqesPW1kNkdqnHMgKQDYvQZDd44hHp8tY7TtPdzxsAACLa3QDLiRWJnmin2Ww7oGbztTBY3eRZ6kKm9",
  "key38": "HBS1upJQs4pxeebtzbAzZsPmZEz6npJbK6YangihqP5L795WRecXvgvGjY9ce9kU4o3Ldo2VpdXZG3uMVKcWg1c",
  "key39": "5BXffb1C5nHF1EhKiQfg8ENEEqgxJvJNRXbNDrk6F4FUMYcBZtLf5pZo78NS5KwkmQuenhyxKGtCmSi8kwNqsaSv",
  "key40": "3xki7N9E5SumFHhWzMSNUBoCfwHMkx6ASaDQufC5Xx48ykbcuP5hhsSoENACXbeHqpJwYVBwe7nwuFayZ8ayKHX8",
  "key41": "5ninaqn142JqDWEJWp1emYvSDKk9cWE7nXnMdssrQ2qsxawwmXudm5dddqpYRAp7NraRBxZgQHuG2DMxX2x7PVtR",
  "key42": "cu6fS4bxcupWFAnbjcJ2eeW6qSf67jQaDu8yJ1J9GsMAfuh9sxNmx45zduXvfTssfsC4xsi9KRLFvcPkBrGmr94",
  "key43": "5uBKAfD3YWtWTDk8g7piFwGExo9nnUscrYP4C1kGbHjXKtv15U5J2dj4xrZTmzyPTmrXCD9LPvtTM1wJP4EXH7Lu",
  "key44": "mkdSdsNKfNRopUy1EfYUKQJaTz6dzVie7XNxUJNpU8BCAKMBvHTh21aj3zwdfKS2Dh96HVA29AdmY8zen7quUEE",
  "key45": "vWHUp1P223f4wKdUKxiJFK521of949mtSnNmGYzmE4nij7Ew9RsTLV1w5af6CP3Ww7zEdfBiBcmyKhVj84Ji6mp",
  "key46": "4nsGzydpAbavv9ZbH5U6XBNBS2KFWnZjccXkudiXkjJkN7gSapcp5zTTLhvGt9aova117Xv7h8VoQfHuE2EqPns6"
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
