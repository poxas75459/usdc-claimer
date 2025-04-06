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
    "V51PbDskomZEMriFHFzEoN7vpuDWYTy1SEZbNeBCWb51rhBzBb53gniHCxZ254d7hFxyGms417VxN9j9f1tptpE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VQVBEcSrJa8tSfi6Lu6TvpvFghwJNQdGhu3uCCtXK7wP3f8kQ4mGsfDqekt7QYTxnhdxNstwjysMBp6CawgGnEj",
  "key1": "BsDmBxCKZBAL9vGyK6pSqDJLrwNdqjQ9AKRrZy9pLy9T3hVsW6gcarqx1MaoQfvLSG2ug1LmALnoEqpndYeR72j",
  "key2": "35kS7pfAZVStwXLi6TX9J2YWDCWdHQW22GQPmdmZ8m2iPmfccPvZfiiqLxP1RG8wood4CFhHesi65rWWTsgUTqzr",
  "key3": "36g7r8gmRdbdRQsyzJrWvTKKQWnxJS9wiZx8UhNY9d7YCzp8D6KfsSAjU2bQSHsSHPA9LKTtqn5tZifJf2pLsY7R",
  "key4": "3t37Uim9nwZ4p43hgDeaEUrhY9kWsAjgpT7WHRHoXrJD83Ng7ZRHHKMTTVFNn6cRePmdYbL3vqVKPZn7bM18rJSR",
  "key5": "5hAp4EnKPoktcUzuN8N8pMWK7WG8UZhs5gJ3XAqFAyt6cgg7EjSaR1a7b3RiHwPfpxuf3Fys1kWxRjBHS2ZWNySw",
  "key6": "bg35EwGJWtneyGjkDVRDKSJpbx7TomxyYdduUeqU6uSUYL7xiTVeoet4cu69CF49M2d489JUqgavnTkRywkxWRu",
  "key7": "67Fs3vnEz9RaaLLdHVihQJnVtzpf9whtCQndNdyS4NA51svkQ12qbwgS2crmPUfKUU3zPU4n23c7JTmcjyYUNDvn",
  "key8": "4pysPeJhJnh2kQ1fjhtxTppvpdMxXcCiWZGEEt8hyPBWMaDVaFLeenypuY9SijwYt6Vj8SFicapPXyxNVj5d4ew3",
  "key9": "2FKJNq6boeyzjjuwDYGByuJEDGMVYsCy3rS2a6L38pg2q9fPHHzsz4389hGSxihacw4QkpYYwNR5nGsaNMhhn5ks",
  "key10": "3j3GiFEwnYWjuzqVxN1BJF24NS4VkQpfp1aNQ462KEXxvCfyRXZUEUpWNea6iTuRB8MiUEt1DaQ8a64XaepnNYmP",
  "key11": "4xAkjSGn2FNLJZt6dmaGhFZvU1ZWUL73LWGMmRzhzvTK3j5ogQUvMmA99bpn5RxpnWgwYRLmd3FqVkZ3mQDPYYDn",
  "key12": "e5Kt19xLsHM73GcudECXJN4YKLbHfAZmTnLwY93p4c1SEJTdhA9QFcAf93K6dB5GHyCBsEpqJWxVY1jzTsr6Q8b",
  "key13": "3UDuzVcQ8mJSiKARhcx41WhMbjmfBrHEW1SsLN4uFPAyqFTW62uA2vsxSj3S47utaYrWpLyrcWMu48tAQoXAAkST",
  "key14": "5TSBHVsWs1M6UveR5GYW7enDVDRwUTFRnAovyoEf8ihcwNJzdWT9m1erisheXuZpMGeVQsuy5bBkpK5Y6tF8sPWC",
  "key15": "37Lwm9MSeK36Sc3TWJxF4sjCMwczqFw6PAvvdPRnjRMB1eWzSmMrmPAqr336Uesxqe3tBeeq1UbNBdhAjpeRSUwZ",
  "key16": "3PpThJs4x46nrPqCRHWibfbfHB4ReBgyMfe6hTdsY2e33LUPuxvcoaxygfHLT4hKmUqyjLhdh12ETqHqCZrjKT9m",
  "key17": "22r6gnTaCVdDj6rN1gwJBXn1N3aLcBzmW7xYVToW31eErxw9gSzXphW55PgTmjoZvHdxEsLbBRktZRhHxm6AHWBg",
  "key18": "2YQoPc1MzGzP7W78aQVCfq5grKsu16usAJGxLYWM41NWHs4p2CVEDqsjYHXxDbZGk7YLC5dpDkqzUYDTrf4mSxfX",
  "key19": "f65QVh5LKUi6xCzbm93BthfZ6wUu2Sf9pE2stCexzjxL68sjCs4hNUNssMA2wf7qmjj8FPy9LXrzFcS3ixj3dW8",
  "key20": "4RTtFb8uYtLCamL7GJeKiwNpnRgb6HTNfwNpq88czVLTQbHgevQYKvAG8WnbAAckiGGt5sLxmgs6XqibmDyNzgCu",
  "key21": "i6QCxdAzARRcCPbh7S3w5xvt2psUXbRyN4yJzA4C7Y2Tj1VkVfrgzKVCrB6A2kGFw3Ynhy3NcFasBzB3E3Lee8n",
  "key22": "4nsFwjQVJPQo5TKhRSP3Q2ZBhnXq2Zc667ndaxV8wU3jRip2brYixs6uMUaA2MUNZYrDVj9TJkGYnDXLQUDyfTFt",
  "key23": "4jDPRrYvuT4HgaSkdvBEdqUJdfKA174oB3reL2ESMUZKzgRX2rLbbzEjnjpt9ary7XPheNNj7FQ6U44Qyc8LMw1B",
  "key24": "jc9XGRd1sMS2XqQkJvZ5e1SbEdPz998X9DzXjFEwwjyDVDvzhJPe2jmVM64Gg64K1wWckEg6pX6qcJBxj48t2oK",
  "key25": "5ovA19GrqC1Nh6RWwgqQYxDENHjNC2dnpFMmTTUt7ETtZfUK1hHhCQFs6oeAArchfeph7oSfgWLLK5hhmFNp93Ei",
  "key26": "2CjS6NeLMQhm51vZxPtQxy2LrSap3dJ2PigDzG1v9hwjyXyioS4inuU7Pmw6A5p89syMuHPdQQxmst2JsrNyHcaJ",
  "key27": "2xpGui5qRfFjtADNuF93BdFZrpYuK52xhMNKPo5UBj5xMKdRK6ddUodfyR1s1JuP1yoxxb2iUyXCNfadUNfvfrYo",
  "key28": "38tkDb6jj9G98TVNJeh8nKeh5CpQEkF85XUGssmPbr8LpAJQc7huePsEWk9RKmHRJVnUAuzh53mvDuD9oVSBZ4dH",
  "key29": "3qhoVEgUJHWcTkgUeiL1JwD9z7p99gjKe6YWNU8yuLSWDi8G8YPYY4VPk3hCvRs4jkH25pr6b8TWSmdJRA8SCcoQ",
  "key30": "2EdYspB6bhTsi5GM1EtgsqJW1LrNK58sjtA8aNUKChXct21aAUy8QHQMwwT7WBVgsLjSwuKGedwHjcMMthkpvdj6",
  "key31": "5rVbfs7PoSJKgY5LKCVzn9bi65h3SQNGC33fnqC1cMSniJH3QerJcTe793BmQud8w5dqqH5nsgD5RVAVMk9KKRhH",
  "key32": "5jExF54bUC9zhN1q5GBLBjjjkugmuu2c9okohiHb43Ct4dKnKDRkUfh2EkYnZVWT3soKcg2upPs9cpRWzw4yZY4H",
  "key33": "2us4EL2bhSuSkoVZANeDaQv2pXb8v1tvDTWmGb9wzidJV8ogAdiz5xCvGHchdrQyrvtA7iDJKxH76WowqFo7m6c",
  "key34": "4ZNXbjZy8ME2Dn7DakHCo5SvPw2ebddujVYogvjtikdtp5t5DW4MYTVZSD82ytg3QZEaTrhZb1BXWtPYLwoBc16k",
  "key35": "23RrFgqCQsAbo969Xcomp5AajHBG47U5wkBXGJ2cxcmWRTReNpqtVBsQmkAk5BDogkQnFp2GSYYtc44qKQRpwYHm",
  "key36": "4ZMGpYhr3rKfPGQcwBUjAsmJG23J3ZuWJPc7T13EM6aSVLb5Dcp44gVgmMQ1x7Mgw2grNKixjrUdPoAc5gHJz4K7",
  "key37": "44W5qdpfbyKFgKUnZN3n1KrQMbWgJYBHoD5BkhrcQp8nrdR6yANFmvNUrCyi14cgxrAvXfKPW4SrzE59iqhqoBC9",
  "key38": "4NeCnzFhRgRKMd9Xw6RqqguHWHr7f3DzWsYABdsCa4XMYNQnxSVrhoTMRV81B9ySvnAg1xaNxzcy76MDqrMZdj9W",
  "key39": "26RWrJqgP3rk9orkp4KkPpmssHuVLS5b9qrhNH1LVXD3kvCEcTqdUQz5eFjsaecj3oTT4yTWp6ufWTDk1pN9JwYn",
  "key40": "Y9vixRvzG4MPH5TxuBwZSioFCwX1wf6QDdePg57GSDwZbLEXnidTM6iNhu3u7XZ6KkhScdyQ7sG1tTFwXdH2GVs",
  "key41": "37kQyT1fEM4Ki6SLBCvzjQSWThqQzdXXF5eUttNFcbHYvjKCG8a992DrmPWtGQerWTvcSf35tktwKGWVBDCT2oSg",
  "key42": "GMWfY68A8UYA5SBa1fyNDiEWyKjKDP6y4cx5RwVxSifS2p6gdVtcVcqLH8UGHhLBjPfXUraQit7WfbMfQchMyug",
  "key43": "4HjVrmuLn5gvQJqHogiT3as24pHeK3NjnHtu13fNjbquR45sxjwWFJ2pEana7hLasGveZdiSuHv7DNsubJXeRk89",
  "key44": "5ESJGb6QLb59FsdXA5nG5td4A7hW7kMZCQGxvkC3K1cGAznZ6aBh84KWfwgMGNqYgatfKNevmii1gjuwyGheqiQJ"
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
