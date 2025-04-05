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
    "63gNMarj5WBbzdhFLxxnT6zuyw7TWTUggQwMsBMyqvpu4ZEubwmCFxB5Mj9H1tv6tMoFGiNaKFPA1ThuuYtLoBM6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DSK58MmUTREyb7SQo8eySERDmsNuLZDAYqUWrbGnwJYsWiSLDzXgXRumPet9YJGimpDjT4vPQLWeze2LnBUkGWs",
  "key1": "5PcH3w1VrRwEmgUTuVCitZuwdRsmZ5orPq87eLaryJV6bpprfeJ213Giq4QAhJPpxzzZDW9ERBkrJvMxyn11jSRs",
  "key2": "5rWVU3VwhzAkPtTtmcGGagXYSq7DsoXrQ1StMJFo1v1bsrekxYhvm81hZGHFDEfwmV1Jt19jWHHeeyTCtXMTd11g",
  "key3": "2mKG34F4MP6UpqVjsDA5MrjdsPaviXZVbPwbfwVeLQQeYJ5788eXJzFdUJhgU6LitWdGKYT82pZbrAeb2KCevHJ9",
  "key4": "2THGoBdpXKaUhUeyFkz65AKw2TzvTPa9oZpDZgynruT4VJpxD25Fr38gZ5wUtzorBCcJGfxERfkc3EhtWBM9gXUX",
  "key5": "42dERnvwxtYG5MLrFBu4xVh7iJTTDSE6DWCd8JRFNMNhcuDasPuf8kgb6aYBUcc2ZguEfUyR9NvyqMBe4pgJ2Sny",
  "key6": "3vPmWZftPSRjM6gAVGNyGCFqVuMKmajmPdfv9m8pC3tmg3bruF1CvNYrqW8gErssubGmCirv24FP59AQoZ7K3HP2",
  "key7": "2d1UA6SZYhXLLwsaruaxrpW8Rxk64rNJy1Skhcc8RjeLe3dzywjhaHyBr1xkPXCqZ73wbcFKyNprbxSnsXaU1QYa",
  "key8": "39hmacCjQSid8zLmF6edsRuKQMP1zhfd9r8Q2oEonGFcFMszRVQns7VJTEQLF49qX8CyVqNr3ErD27Go9marr2yC",
  "key9": "2q5WgogRA2jTqqpyXoLtEbJ96RmE2T8nqR7RqZ5vXZepe23TcsMq9nJe3gLuSzD3nN5jQXtd2UjFGxRPQmGh7bHx",
  "key10": "51PoikJoXZSdRpzJTcRhX1Hp2wFA3UwAQAHfRHE2ncJzx16f6FFoXBkiQhhpsrqQSsw4PYSrNxk4pbycXUqJg6nG",
  "key11": "52LSoZ1yB2EhtSuhhpvUG91ocgeMCakqKnLnJHzMsTmvxBNurEs4KbjM4HpYhSi6ZretXeANuEBY6prvzxfnqrTW",
  "key12": "4xD3S9YvTz2D8w69UeTrm259Ykhpi8Mt1dFcp9Ktmd852UQbhNGXUm4x12U318eyTESwsiQzdE9pUaA2o76KKut4",
  "key13": "42DJyG5eA4LC59Z75DZnDE5rzvm71AgkVbfTz43ifQR2sKSoTsaWD3TkAcEdxW4XupTc2WnoUBbSe6MZeHACEPft",
  "key14": "5SnycGG7Y2QfRWFAYBNFM7Tcns9xTKYf9UJy4vfBEQ4Pvxpdwvt4P3urgc8ANGMbGPXFKGqMyi5TSDjtNfDAaHLn",
  "key15": "2xog6HRE3cS5LdkJ6QrKZEsHNthzVw3PKJscYJuXSJqRn4U8Nqp326LitFkXmbV8VLr6QYop3F7k2hhmzWEMYSio",
  "key16": "jifo2NF5BrQejC1KNEhZEajiaQ2he6xse731KHqoQaC4knoKpLz4yTjXkJBAHMtCwAobCaZkPq24NY5HLS9EoDC",
  "key17": "5jfXQ6dBi3DV6hRiwq2DQSx7Aaye1eXfqW1AxEhNvM1GEL9Xvvesr9WWSkw63CUrLbh1pq1We8wzTYNQphao2fju",
  "key18": "42HZgnpWHyuTau4Y8SZwVfrZC1e5xuKdNtuwSw8WMGzCw96gwkdRa5qrnz4n7NKEY5N9jixh5J4YmneM53m4Bgc6",
  "key19": "fkUdBTL78kKAc4aUyYxmv6JzwL3pNAEoiDYyNjBxX368Ba6qTpxLjGWb1uHYtzCZnCFYHYYZpMr1zVzkWy3Bct9",
  "key20": "Xdrzyz5fjVYDS94QTtn3XqeyRdkJojVWhcvtuMxPfj6naAUgoUUV8izSk1LsB1rAPxdqsBm8ZQ1bKsHQuyHS2Sc",
  "key21": "3nY3T4yw7X81Gr7HkqGzwbku6ZGNcD5EHdZymtAdbK6y85jn9F3MBEcLFWuXv2MRGa3H1CNBuXfqsD4pyENEmrqc",
  "key22": "4sREFRyLWiSEdieHY4rGq8s7guvkzZzrLqpYxw4AFWopDm8PDVKaLkEeCvnftXj8BMYKTdfXc7brfmQNxrp1LnQ6",
  "key23": "2e76VWndGBAnQdNqpVy7aUj7tc8nUkpf77oUQ4onccUMsUdd9hCnPpEu9Hz63ioCfG4KPqCKXasRdoppYqsYsp9E",
  "key24": "2DPxzCHp6djQNUcqsJ8zSdtSY48P69t2qHjKKavTjh9uqFyyU1Ceavczvca1XdgUQkYE6LuwpAT1Cimrkc4oxZ6p",
  "key25": "xsdoTuuAxaLNKupiF1D5RrUzxRuZGH1zkffwQbF1dbZpaw47J5Xx6VnmDg46qxjPU9Eiu7EQTyxsjDhNuJZ58Pw",
  "key26": "4A2Ub918Ligyq69iCopQA3Y3QvPh9yMP4ocjYWmA2vL2jfNwkbGBAevLz3FunDb2iTTcgSXRmZuuowu394XPvv7E",
  "key27": "56FcN7iEPAV88xijTj8PL48UEksSkrSBGWpqwfvwLghR9SMn5X8rqp9nVVoLDe5hbC3jUQ2swMczppsHcjN6WfAc",
  "key28": "3ErS6YjYjXQXUWyuvuSrXTQVsmhPTfpiQ9M2KKAwnrgpCmeLwDYMXEcToQEuWa27YF716yFaZg7M8iiNBAtjpAPe",
  "key29": "4b7j439qDkeJhXpyBkpoUTZWQ6z1Q5Y7GGzeeHJhfL164Fy1JsM4phGiwf4CSSgWsfnF5t1oB45KGNqzDKWEcso3",
  "key30": "2bDoc4E4bfTP8md834N4ceVF6Di539oFnSMzNGqaaQyWhegcFnVG7B6ERao5YzBeLrJJsiCo4wW6xgAtmvqT3NYA",
  "key31": "41b1oWhxrPWSYQmCPgVUMGesMyCxqzj4RgEUW39ikAzAPAAwARD9FdncGCB8by36k72WXWcDbgFAK7PFXfbpPwdz",
  "key32": "5GwV81wtW9eiui1FF5kq6oPzJ2HqDe1bdARF5QiUZRjwpq1HksegyA7PrBa4CU1zWXsZQQVaGKvfViNQEPRvfPcs",
  "key33": "3Jk6eL1PteGUk1Kv8trr8ABvhCbZGkLQK6hznMUbYqNQx1RCvidSxSYCPhai9KE6FLWJAukXHj648cV8zys78zpR",
  "key34": "3QGabBwT4fdhRq3HWzKkbr7KevgCEBDeBUoSwceMCQqQuVTqm7Ex172CaoCiUzY5x2G8xyqTYvSCqPTMq9eSZ41X",
  "key35": "2NDsbLeeXQjjEvbCaxkwD8j6Cj4hV2LB68jQuBqwnvrCaskk6ydbEiZAaKPZHBpGHvm8bkmggsva4rfuhm1ViEsX",
  "key36": "5N2uGvpesWmBRPAe77AFTcCfhEVtSjEeU1oi8pad8jEb5dUirP95qKzz52QpkaRyRiCGuBB34J1xzqPWnjHgT2ZW",
  "key37": "4rPSAZYf4uYJcHzGzW1brUrt8XhYJ3hD4HJhfm4zT3PoXkp1RwhHnAnvEKQ6nhbRxVeqGCRWte9Ruop2WP51Ykrw",
  "key38": "4t5RqEpEbMxzNMtwqw6f5TJVw1oU6FjZ6rMiHzduUVnymoSnA1SBe3e9wkECnh8hjJj7UsBoEWwpt58tjXeDwsYR",
  "key39": "5Z94AZPyfLgUB9mDAuKWcM18AdHZXRe1WYnJ8mjTogqSZVAGKC8rW8PUFAcV1ciaqe6yBdTfAbJvLM1KzpqR2xP6",
  "key40": "kESe4iewviu5tNgb3oFzT2xwRvooqHcougbBn2QCRakGHFZGw2X5PwVDr4QrYJ4cXH4yNSLUXnpT9UhUm2m2VBV",
  "key41": "yhz3X3XPVkEfTnniQUkWdxNiE1CfZXKbJedCvZ3CUww4eNiaKW1NmZ8r9yBXzqMY69P1n9ATx5YitinuTAfmbHG",
  "key42": "4u4y2nrtafyt1Uqf9tBHM3XnZruMXUU9RyaXMZAMQmNmChFm7XqeJrTxcmETq1Xut6zrK9rN23XuwGaEHBwwv5Pw",
  "key43": "5jW13J7Fw869a14u4oiWBNvBaKcPHd9Ra7vMjP4eAKjz7UgxAMy9riEK8cfiQR4gCyKL2JEUPZ9ZRRp8cqtGeMyK",
  "key44": "29pdx6wNmmr8yfAxkyU3yiZkX6V4YquFLN2bEZEdTXa8UM3pVKGtU4nXB8Kws6ZSfVAFe9iuEsZ6dbHF6veM7q5q",
  "key45": "3yYFJi8XVM2GHHZXPZ3VB4UkiBzDF6KKjGEesybxp9VGC4zUzAYPaYVxZ7MATZzHDohyJxFgZdquVkBNpTWjikkL",
  "key46": "2AeahxL447UuX96g9XWvPiAo31ySo8yLp3NA4bwQFVyPAKH27TQFDJidqXZHAsnVewEVy3s83LdtRfZcnyEoD6Ga"
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
