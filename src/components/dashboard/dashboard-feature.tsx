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
    "4FoZb2iJVQUEDx5Mj6sNy3m2YSJTWr3ADbuYka3Yy1aXk2isW2VGo5HjZrm5hhePZALggk1hm5RXeJq9eiDcVja9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D3vgCibvksaW6V8FFTdo5HzkvzpGP8JqetLCTjEP5YhoZcuHmeXpJBenLmuajTU9MRo64s7EpMbrob72yKw8kRf",
  "key1": "4Zm4Cc9Ewwi2R7Tk4JynWiRo37TFxqR2Nuq8PKxzsaSScb4sDEz5RWYv6PkUunof1P6rSvQxLhRqaLiY3ikNyTht",
  "key2": "a2FJ4x3JZrF8Wx5Hdc43ARjyXbNfRUuGWVrHVsgRnGXzCMmQYHHm881txH7Cj4x8qyXkVfZBP4fuW13QkiegUhV",
  "key3": "KMH7YEz1AJZauVRmY6kKxsLJTd86uWojfDE9RNDQYEp87n7fnQ4sfNL7sJrjW6ELmEPvWAe48gDSp7TykKqqhWp",
  "key4": "1xE1A2tRi7nVcbprwCroS8RXrq8mV9iM4WYAs2vsX1oNbiS6tgSNEp3Ctud1TCT3yUa7LpDMgiq1kcZWLdeMrUS",
  "key5": "5vHw2ygjhGJ6UpgaLzv1cjwEtgwuMycMYfAxPS4CfjGzLFpFCXehJk4vKuTX4ByoPVKepfNJcKBYAAZWLwhVGfUk",
  "key6": "bPPt1E1DVCBAWd5ChXpaRTMCA3ai7YXDL2yU1knj3VrRcqwMzaSY1hGNL6uvwtagYZoE5f1cWSZJAcPvFGFJEVM",
  "key7": "ghxinT8NKxoXrfdmX8oGyQ1xt5hLDpeopEGFK19mAdd67EqJUfhtVptmUixaiqLDo4rkY5GXJedbj2ZN7QYe1Hf",
  "key8": "dMGT4b594yyg1K3LksDoRFM6w6KhrFUZUkd94cGWR8kBzFadqrFGFTNNps7zNy3azH2fscgeRMoRgdPc5g37jeU",
  "key9": "4jX11UpRKEvDuGM5KzE55FqB4BmTC4eHP9JzQwrAmjgjTRKxwivWAR2D5tHBWDV165rCjbHXG8e6KTyRxDTvUbNW",
  "key10": "37eFuedub8Cdd9CC2wCR5Pno6grDYupNNMCgTxyA4Q2VLmkLqdZGQhGLgLpBC5rQBdxRBXcPnXhiPYvv9KpVJesK",
  "key11": "2wsoFL3aXJNFeULT4cYPV1rHua5rC3LuCufCwrJ1FULQhUr9cBxBNnY2v3tvrBf1V3Fy8eZ5pz27fQp3hxftYVDn",
  "key12": "4UwzELCLj1MQrYqoJUFqDZun7bXqpEwAVB1fpBXRWiUprfVseMAudjkkQrUR7j3ifNEUYTYPVrka542FL73ZLi3K",
  "key13": "2BUzLV4ou2Pm36kaiVLoYPDyoM6vfzq6941A8NqgiP6Dis9tWmdSXxzop9SLe3VCmiXYPdBRJfHJLWBfUwdwVxyh",
  "key14": "5Cqptws4B1BxaBrAyxAEbBqD543TvvvVrZp4htHSi114JsBu6nsFpWg4twQR7N3nNozwBHTGEj1NNGVakpFRb47Z",
  "key15": "4UQdQxKoxjK1k9BAs8KjhWwjnM1H12vxWBG7MZJia8B6sHCQ5yjxgqYjnye2SVgj83PQTngzCHK5nKLZALjmxcMe",
  "key16": "3hkkEzEnjrFoccrakr71sNF3huXZjxt9sH7dyt9KHnidNAVv1wUTzckKHAbSBAcxMnXiC5mv6GmFHtJNgTZ5NiPH",
  "key17": "4vTAwpvUNhieLcCw5ccDwfBmXnEdzFARmtaNE6jTHyARTJ94f5DzauettACWRFDBsDZ43vSW1yaLzEPgUPPwmMue",
  "key18": "2rzZKqmKfUzPdT8Gc89CWqwLGzzTcsKhmeKEsLwjV6SUGWSb53rjBvZa1zXkdeujZjKmVDPAvrpvM9d5JUB32jh6",
  "key19": "zAvucHB3ygJuJgCKgV9EuQKY3ojmJ5CEKfBes2635NLRqNy2ZPs8LCDNRJp2mViSSTLAZegTXREgGXpzJBDj2An",
  "key20": "2PsZq3cy5zpiv3oYJHvYvHhybddQZYMRJsiajWvzzTgvDssyExKb3Z3Z1nUTw3qPvu3pz3kyq8qn8ktG6weJYfDN",
  "key21": "2nHYAVxYkwy9Ur8CDyEbbxpREsVrGKc1eEWt14Mdq5gLKbMpfykTZGGRR4mdWgAX74SYz8jaJYv5TRSPgw93uyo8",
  "key22": "2DY5RzSBJsKqiRYKA1bbVC96nDLFTMii9scgpRYL7TJtPnCV6LwngGLKU8HqVLzDfXMYTcZAy27icXdSQytFAx9m",
  "key23": "5pQ6Fp5nM2nUuKPTgDtMMh8QeScQPYe6DwKMkbbh2AprwDWnS3C2aCy9UkLTTayj2z9L1fjk6i9enBp3Us6ETG9R",
  "key24": "4JgtSAxv7jU8v2qyuPgCSmUZDjjMN7FQYrszcJUJcqCGCaahQe83vbJMgfavmBvgN5a5n2RBVBywviNhMymEthvX",
  "key25": "2dCEd7P1qR5YJZjN3paRN5HDQG2frkTpG4qVu2HJ5NnfYrgPqRkKPzxh5fn2NgX32cCfAXmbLYNbRzkppVzbhYeL",
  "key26": "3iYHWo9kWe6E39Mf8bFjBqGfbRKZbpZpgmdxZNocR6CDHwMGqCRRhY79xrY2Ltg9WUJcbkJNALSwBYRmvUcBS7rZ",
  "key27": "3CDm9os9rQJehRmbXShqAfB526Yq1aAoG285Kzijq1rECFidagZnjJfug36ydQz7uDvp67tZohKo4aZfGvJmsL4a",
  "key28": "AAKcGrHVsix4p2b9CThbwQPr2p36vhT6qg2BmiL6FGMkV2aK4LDgKopuu5ZgsXGoYMP6xkBjLDNgPA92iSdYTcY",
  "key29": "3g4SaWxkmaEkUoo3kci5aBjqban8ag1pGXCV27SxyyQQUEEqzdLSE5CTtPx4bWowhsURxHTWyH48CFPKxj29M594",
  "key30": "58ZXgkynU6vHz9QzJBaSwAu3h7DPMT8Pf5rtsRQpkimj33gJasqX8MK1qtssNYuLo1i5Dr31ubCVBCp6y3bMA2N4",
  "key31": "5czPZCp9dvdNKdaZEexBiE6EREqav9nTE93RsBiZ1irq81HQB2VctTgcbbS5VbvqA1p1TwEwhKcwNN1FPuumijTM",
  "key32": "kccKe5fmSgGsYLU9N36Wbm73x5Cd8eGQiVj5DMzNvUDA4Y7em6w2rxMzmQt1P6VRpT7uEGQpE72ZJ3xnnQVzuAn",
  "key33": "y4SQ1LBP5X5m6B9iRB4WiL8UN5UXKuQPyFBhoycv1B3n4S3bsDWZFyMZX6SQBUjhFrv3K25Nxg6TzazzsRGksXH",
  "key34": "tZV4PY3orehY6i1R6brTkFLoDwwjVRoEf5kgPeBrKeVUcGEMBSCE42STMTzZhH3mQKhrTqANkWELnJQq4FvTgmU",
  "key35": "4U2oSLBiuUWg4i9h8Jb7CY1vzr3VpSnrBnb7oUz1Uig9GRtiDLnnAyVm3eYxA3WLdioqMkKStgEBEuduUpjYdpMe",
  "key36": "xfcdCedVGgGNomXYofFZMkwV4Uispy4qEDyfKX1qV7B22YFQhcZhbepejVeMskpS8QjJk6SKWbPhk8vGtCuEMkL",
  "key37": "2dzmoLkbAr1bJX2eZRRt2NMoJsrMyCCWjU2Yc48eAkhS2o2NcGrzA4cg68xd12fZK8DAs8dnycPnUaoXB693uwkk",
  "key38": "26VdKo15AhU67mEjeFuyFb1M3Hot4HygFu7cf5rLmVbQbmChTDQVXKhJ2XpP5QMCxNVucaCLLobVVVQZjTkPjoaj",
  "key39": "4xBruyzGY22bjiQCUDDgGcvvMCtSMtiT2TMVszp5NPpUf5zUfibWF4RC4WxhVywWcF2t1UTt1T5yguPJU7YRKQKt",
  "key40": "55azmTrLocQ692GmtiCf5diuD1NbQtRXEaxLYTmHv1KjucM2z1D3gN8jjrVirkz2EEkC2JDTpDSW6tNzN5sSxEwF",
  "key41": "52WHpsG1gB9sqcr8xME2VfB3Y3kwFFU1ZTeqPEquZ1yP7DM6h14nrfR3aAGpULCtq7KoWvmBwSbpr7NHGFNMSjcc",
  "key42": "ys9bMZgfGqxEArrneCrUsDcP5KfXjJBihGiV1XNDgqcPJZ9EmeQ3dGQfrDpy3CvUSz8xPuzxkSo3P4YQJBWWaiX",
  "key43": "5a1zMEXzmsK515nSnEyXqLnFYNhRFU4KhByqJCZAKNP3NwJ3AbTrFF3gYSGScharZ96ie9s5ZnYFRYKkzHNJGf9Z",
  "key44": "5rsGgBUwwJMifdYCXCbq49D1hSPMknLQrWd31KGPdLfZvLhML5q6QYmdHf4YCy6M41YnjdwKihPjkMcip2gdTiiY",
  "key45": "4bRHMbukMeerweNcP8HzidgZu8WsNCuaf8ThrXW5Re6HZqJzTPZBwuAa3xMxUQsLbtaUH9A8GhtY25caj1sVwWJe",
  "key46": "3u2FirTYxWxbMbVjEBafKtBR2Q7QVkSHQHTwpvp9vgYchr5zF4wsYbY61N3nYSsF5iAwecsPgZnDG46AUxPAVpDT",
  "key47": "3gGdPJVnXQNUsQtkMAUWahWWvt4Kn3V9evjq6YwVX2awnay7CS3qXWRvV63e2qhrwRyp6HQY8dwoggcZa723UwmD"
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
