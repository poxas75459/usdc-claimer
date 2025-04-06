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
    "V1adPbWP1YWnAq7nFQjfqe9LrR7Now9SYReNgyojpNmPpghzo8vqaJqY3mL54MtZpTf7GFuhEECVN8qy8wxMKqt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58xXtEpb5UAFU2xnHMUYL5hMq2aCPFPyRogntnjX9W2aQDob1CJCBfs7HyYpyH4pRd8fr5WRnnQnDiUZZPCXjaMY",
  "key1": "3kaDFk1fVFCtCeXudwNv73uLaoS9RARFasXfjXcuxWQATs3KooqeXSf2D2yutwUxRVgaCj9Tzg3K6KSAWQsiSCM7",
  "key2": "tsBdhgYjH6QqVr2NVavyRVx4iQHZxzG6HQFGJc3sFvcbUP15gtytTSyiSVQeqWkv9Ko3ENXTxYaMq2kJgb2FVpH",
  "key3": "41DYkW2nk54duWCxH37Dc1upeN5g9cwMyyaEhKFatTdEuTZibgNngF6ZPB74G4FZVtieenezQMMTTApPze9NSuzK",
  "key4": "2TVnZAFhpVfFJKJoGwR6pw87TFx6KRXFb6Qv5L5f6y8ELogmsxwJo7BqJj89uyf1qb1XXvYamTobSE1vVrX4mgw",
  "key5": "28qG7xKe6jLuKzUnZbm49fk17PjDpYJZT5svjyno3b3rEXgcNCW6Kg7d9JxcSWLaA4Snuc1BVJXbw4M8iigkDtf3",
  "key6": "LCcfsZu5t9QrKbwtrDZmPvxo3h2Tp6DdwYYSe1QSVCeutE55gNXB7gyB5hfh5fMjwtX9GVfPyyWWj92g7JHSDjD",
  "key7": "451MZHYcMjWLgt3r1Uj46uSL17eoN8tvahm3hF7FMdEmKRqVo2vzntQzmugvEmzuG5iM7KBPqDQ8poa4t6uez6nq",
  "key8": "4fp6nwtr2eQpov3JB9YUQdeXBczpDrbM5hHGXFT7qbXQB6DRnPPx5zujwS9TCMf8D1EG3zJdd8g3Gj8iHZxbvaBf",
  "key9": "3wMSpxxDRR9aSDZxtx5WYgPbsmJQ4E1mUE5jRqQoXpytr9C9xwkW9e1LHAiKJsTkcuVvBbqeos2FC88zs4EXzDAa",
  "key10": "5m5myQB1TEDTDPba9FNxumNbsHHr3GgQ7d3BXGXv4dUK4NkfSRZpyyDbocB6QUwepEY41o7yb7by7afYmq3c9itU",
  "key11": "46nkfnYjJLNkuJKpJ7YJ5qG4gk7mbPPY9nHjGEnt8CceeyfpSKo3GCjzWTTqNsKrXuSTrTxRDgNmAtsZHVp9SKnE",
  "key12": "277y4hxet6Yy8SgfzufR4nwsmjCxkdP3AQgsvUVb1EMYhktu1Vy9XYTATtbfGdtLBaxUpacFXnT7XR8s597FhgmH",
  "key13": "D3e1M7coSTRuDFeNC4cr4BNrzRA3KqHsjUkaR2p8McSGEWET7Cap6cE8APfpqtSCjaPM9eqgosbDsBuTWp1wqup",
  "key14": "2G4PZ8ktgzJMBo4Y8ofqTz5BDB3ZaBJVGuXUGKouBtfkk3ks67SmcMJY7ng68CsVP7HpiYLkbADzTMETtKd3MBt8",
  "key15": "1vCEYQuKfQb1vBMnmsVcaecSBHAwMGukDYcHmFU4m6Thqrf1eD1gV7gEdLrJvWPoRucCFEbCHUTovBzHdRiggUR",
  "key16": "3XQmk3f8ZZQ7xQMYnzgxne8pmGTUz5rJN8nzfQTuEPVf1aNR9Xkfqr3REWiUSuvCrYCLFfVQa8F5SgXCZ94YDz2X",
  "key17": "G8B5vWKGLmGPNb9bBEkvLRCANf7pKRnHHFvFN6V8sH2u9G4F1pYyE3v8FcAwMoqAi7nsErNABApGWDMmwqVApL6",
  "key18": "2XtJF4d6Db8k1i1hhD93UszfgMg2cQcT2KZ4KPbtzSbqL9GMfpMZ3iyy5qHnTjvA4MhXdXnUDeBipXKNCH5KwoBC",
  "key19": "2iYv6QKhqWzyWvmYwudLM7Yh9bw9fzdyEzgL5dz6f58b52gaQQ1cjamb8C9pEvLHj6iBHUbAYaeJz5hnhgzAvGor",
  "key20": "4cKuZXnL44mfgdhj7nGknif4pmw6TU6e7ULK9ACH5fCkcLtPg6tzxavrQh9GfTnYqzgnBBMrBcyA1JTRbQEXasJ8",
  "key21": "61efw5Wps1Wj5DqBHbMyJnFoMsSyAYh47pvUPiEYuz2ZvFvPfFn8Ay78VVUgLefngnz1fbFiw4VLyp4XUaxEPRUo",
  "key22": "5w11wbJn39cbrSLdGHwW1W9vDKZxot9VQ5CesLaQ8NALXzEhHcvYk4brGQByR71hnENPUjCQeWaxhVtzYVTwCy3C",
  "key23": "4i9HR7D2LiDBRQzZzyUY9PUK5YwKBGQf2PJKdbiKpfJpVj45BBnh41tx14F4G5x6dmQjjtJkc2bUyCqAsBT9TQfz",
  "key24": "2ZRbZZeHRFnzPqF52A9Nrd5xxBYkaYBUJsYbXiCri7snKfZ2jVWBgkN6NhzHS9z4roE9MLvDU9tLnziwvLM5q2Y4",
  "key25": "mBkzwLS276g9bPXXBxYdLaTrtfLVggfFKwtiezbdMBBiEAfpMGzYjiqvmQCvC6hV9U1bn1NaRxi2nWfqA6361Kb",
  "key26": "4GLztGUtDPNug3F3iEknaMP2CT9WUSXU6mktNPWe1tdZXidjdPW6EaGnQyLPuumX529jupMrB8bFAxDxhjBHPoFT",
  "key27": "PT9ott42nu3rpj297sVu88YDKTSrJpHX4B99q17Aagf9fKNPkJa7Fkpiofixj7w9QewbPTMwaRDTXGrajeLvD14",
  "key28": "4v32nThw4ruvCGUb8vTZuBXPTEcPyXnroi8REY8yvwA8eva52fuDBAddt3yjA5p1UxH6uG7gKxu45PxBUjkcm5Rt",
  "key29": "UT5ScSjNirubnw6djFPGEzZ7NkdNWHkdEAgFzzJ9bYKteznTDyYr985coVENPuofDceuKX4GKNkDgCat7a8xuC9",
  "key30": "5GFFfxk59UoQ4ii6NxgDhWB31Shv1J8cYFBbPYyFDbf5HTDU74PYnZsvJSyrhXWcoEkXaWZib6pEK8F1Eo68VWwW",
  "key31": "uzkNgefpNwB8E6KxivtLYE3pGTECnF4zHniTUZUDZiGLKdqvjN8ha4h3YGDeVvgag2TvUKwrAKKbiDYCoYoSuJb",
  "key32": "5qksHjMQ9VQZpSDJyxCRhJvEbr6XWrnvCyvfJ6P2hW8K1NgirwEpfgTP31QtpnGunzwTgGPzbQ8sY4UNRXn1Agpv",
  "key33": "4GBvFRwKn7n87gA2VeYPH673aDcoRYCo5iDtsnmUZ5NPZvzWMbcRxMzFrgpiWftZ7vh8PiCddT5Kfbsr8ooL161y",
  "key34": "2w8fJgdFM7vbFJ2rNECprNpNSC9pUwaW8c2tVJZZv3NM4PjGTjFvV9qXChNYPHWVPNmFNPfJkXFsjqUVDypjZUU3",
  "key35": "5Ag64LwXXQXzmcMMQHVZed6XAN6ttNvim69gh1FqsjCmfMfYktmwB5qkvppFWB48TVGKdrSqMbPP5NcbLCmpoc5L",
  "key36": "4X6MPmDg71LkL1rfhM5yu5BUWjGH6dybUNKcVYWAQxzJzF8ydVSmkxcd7BoF15fps2NXJeJD8zGXXFYGvZVxjspk",
  "key37": "33ajauPmZZHgMZqYcWureq3tcDLsjCkmapKLNZijJC6MeFgAJkie6jjoSHWNMRA2K19QQjhQ4tQd3nCbGXi5a96d",
  "key38": "3iAqWZqEFHE84H2YZ3iRj4opGxxfoQNDpHERXfzYQ2Ku4LPpYqz8Uaz8DzVhHhF7gupKTqzvbfASuNwzUWxin8P9",
  "key39": "5Xm3ZFjBKw6LqAUsZpPGZUBHoH1BN9dH4jmcgeKApjZqSzU7Stb1DvpNVpqKQADrRDnpH2mq3K46SFAbg6BtEnZG",
  "key40": "3wmqWTiYC5QSSYR6UEC8HchpN6SUTQP8GoYuZ9KX6q8YSVQgkkwfTJMQyWXzBaBM8WoX9YymzmXk8dCdT1k4z7X8",
  "key41": "21NVMspXeogh8hDeeGpSsCGkSKAdmMP6vJnYjzNDSvRAk1Qg4oD4EZwovFXEMEBiAiANhnpdonFgdmkckHhEZzeN",
  "key42": "64EEmYnXvanTuJayk1BazWcduj1cUBdRLh8aM2XAkzXTJGFNWPrz2ydWtE2kowmaTHnUYv1it2LSRwVHdeEDbyCP",
  "key43": "5hk32RDY6KFHuHDMvvudW2PyEq64bp3RifyYMEzYp5SuMXWJT6fmYaq6TemGxktTyzFBTDmtGR7KhDLaEpU73mn8",
  "key44": "5onhkbiEGp13PK48v4DVMM94H7WdtqvFdDsjxiegWShDmvVvbzaqu3aFN2V7A2CWNz3E8PNimpWYxnojQMXKgngm",
  "key45": "4ndzqRu61UUgFkM4Sfvb5aRcXhsFVWF6iDYMfHBdFWq78pwSo8osyTa23VrbKBhLkk8eqyt2RNqcZesZ8tKNWaMr",
  "key46": "2Js29WsrMQtGWDhvWxhwT5EbTRtBdzRPwEgdkARBgZpqEHaHkThZTTcGEXtvQpPdEq6CZgiey38d3yNdqbTpRtMQ",
  "key47": "28exwvDjUd9Tjfjow87XGuLLRgYyPkTrf17c7DYDSvg6d3xCrMDYZrvDEQRWFZKj41g7E5WH1vSxQzmftAmkMNvQ",
  "key48": "5QP9aFtQbAx2VCv9F9twbpnbZid73rTr3TPxB9zr1eQUr73Pgy78nbShm9auDo2vdYpmnReJrrbSYEDXxsYhgcxV",
  "key49": "3vtVDZVRGBXoZCT62wFd6qiL8cdcN4kZAvt1PQECvEqFQ91k6pQW47b2YgBec6m8LVJsCPjGAsjosqe7ZsKQW72H"
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
