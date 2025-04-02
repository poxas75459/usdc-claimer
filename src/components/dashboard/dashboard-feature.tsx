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
    "dmcuWoAKJftPF8vaj29XAQ9SeVsz9Mqn8KTjLCCmQnZwgZMYzmBHqAu7uF2kb4UNd6WZGLzuKD6q3zepCQ5RJ7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PqRBk6HRxMgV7S1LWWt7hX6oCtp4zK38thQQ3z7b3mWnt3gLLXLwN6ENxNRRh924YLmYn6P9tAp1v6SH43H5qos",
  "key1": "4jsUbYvpWDvgx4fozrFY7Wr5m8LerJ2qqSqBEQZyBTFbYgghMbUedmLSCHtCbd7LeamvjprHzTu4U8PLa37apAht",
  "key2": "5zP4BzrWADh9U8PnGdV4nDH4Y32ZmZaQQfPyfceAtcq3kuidR7MdJee5Y3pk7Ck39XyAHG4RN219jbs2LeEEjgyA",
  "key3": "42YZjnz67tDtMLUkXbj6efEo9PqhHY4Yf9Hg9xiacyVPnedJcabhqFGmvsa7JHZD1JQEcJdC3QWoBVBc8VYQvk4r",
  "key4": "46yFTyenTUDHBDv24Zufz2UL5dnz71Cgh1zjVGUYDsARfM5Fh8afeup83iBQvqihyBEih6wrstxoUqfPtTKrHF2y",
  "key5": "2jtSmE1wn9YrYzTho86jBhyshPyDi5pn7FoaR8t7e6x5gNKGbFLQK5BhuLAeRX9zTHAXTqoWTTYYeyVPZ4gYm9jh",
  "key6": "Q8opGGGE6tjbMaG1PPXoynKfdVM4KSAye4ZAUDuFuPLjoiiZPyARrges1Fe4feFXZBA65ZHak85HKbWWCRre68p",
  "key7": "5j6XsG3E3jBwp3nUEWMWgTQUMGV35tEk7rtaXERcp3wsQCqqJmtFizreEzjqnBbDn2FtLGMTNvWxphD6CnJ2E48v",
  "key8": "5Dhs2AXbMnqPornd5Eqe2rNp4A1Pn8A9qqUgXzdyFNJ9gDiscc2k26mQndXTWu3XNJkFmHKZ1nZPTvSpd1cDF5EX",
  "key9": "4oVFRg4w9dnUqZcJXXgJYWqimtq8SxnPe3mhfmWgWuCg4Qs5G2MV1cMakw8Ch2aWd6o2dsowZ6P3hhs7DD8j33wV",
  "key10": "3topTH8yzrCMM5cdwsGbjh4yRBudFWmciCAZRMvMDNiM9tqRweaSvCu4sKAtMLz4deyZWCN47Yoxnn12qzVZD2mg",
  "key11": "2E5jg1V6D7WNBw1h11PbAvLb8vR4ZZ8xpbNSDcaCsuyjvgf9yGkKfvo77CDsKBy2KnP8Qz4cZbnUcguizZ96KyoL",
  "key12": "2dzc9ghfbbqgSL5GLdUzfpwzAYCxPGjsUSm4mB1JNFRZsHLbPhPTuPw3ZNoQG7mVMUjJ3AiZ69PQkXa7v68uGwBs",
  "key13": "29beytrUAz6rAnDVCQMyrk6XW4n3gbS16ztMnTv1i7iVUNMtWjPkMAgZWzMFRvrKWMzCNENwGeNsTXhDjNsNJA6E",
  "key14": "Szb4raUmKZnocfZsRMGTqVqyDAXUG7fZGidhhJchp6PVACJTxkYyDgjdqFhZFMUPvvCyFw7eUKHESdNGR4uzyfU",
  "key15": "5vCnskiFbqQfeKUGYigoziSuS24fYo5UFX68P7v4EZ1gKN9j4UTHoLpXvoQax89xppCA12X1mcZBByvPJrnaA84t",
  "key16": "5GEQj9XiSd1WtmLDCLUSjFN7JwBrYV7ShrdqiLy1KA2N3eGGwFWdQvSSSEtFAbE2wLDoRqop1Q7Hw2fDKSnFzarr",
  "key17": "2eyt9tM7pmjDkQAJGdeWZaw6q4YMDp46x2oNWxuLEYkTC95uJ7UyBpLPFgEPSYTD1GMVWGvX1rMrXfp29HgMFfwp",
  "key18": "3RbkfCn2dTHhV5hYo4MscdMbn2uhJHXKP4aWsD4pLGUgMC2U58t37GwMEPgE2FvsgXuH9PATNULhN9bs3Ag1fcs3",
  "key19": "6LTwUznntgdnvatZRyXd42AievSBs9Cix4gs1h2oEKL83fdcdCVN3exjWw5mQhGMAcSq2Zge9uiLKWXW5vRr6tp",
  "key20": "2sPiRidDu2mTamwXmrfGkwqPwQDxWrF9tCzuk7oMQdd7tFjJPRR1tdeVk5Kend9bgRGrScXoaZizwfCohwi8beCB",
  "key21": "4kBzzTKMGPfDNYTutNbP9koY99pZxjEXAaGL6SwUnx9KrGjAkJQctVjkg4cWMH9aKP26abrnMQo5tBgZyapZsZwE",
  "key22": "3J1mbLU7U6tvhZoNje1wXURvTPHeCZCCMV7Z82YGBmtgVKWLquQMLxUWnyxtYAxoRFCyCkRp8R8yHqmiFW8JFAR5",
  "key23": "3EJGoTexJwU5DeRGn7iA6Xu2s8GrSaWUgzSM4cd2DtBGJUtS5MrNu7CVT75ZgajafEGgWrnV2fVRtyy9a9U72SAW",
  "key24": "2pFjpRCFa5TyWrXc4nBsKZZ51CGA4evzLmn8cQakXhBiMr6nQVd1i9AaCaziT4QNPJR1muoqWS8twGwGWKUdmBpm",
  "key25": "iE7bT2XQf5NNokKvYyKoB3ijZ4mwZ75JhqNdnUycJqQGVUJvFScGmqbKFHQdA2sq7pELRBQTBx7CoMkS8HShRoS",
  "key26": "u7BMZVs9b9bbcChTNfCNouoCMVY56t448Tg2Nx4j5qDYZuKJ6GHCCTV1JGTMgb3ZKqLRKiYfFMMSUn1JfSPFjUw",
  "key27": "3duTEY2EXqXg6pMYncFTVer2onb9ZFSU1JjJYpKYY2PhDDY191yrKUr1m5LVDfN2nkEpKAqxX9aAHWvjv83JY4Vv",
  "key28": "gjsJ1Gp6eQftRRFk6CrQ54zDeYHG4zK1iKFVbX3CxDVYousTm98UmXZz4prLsUYG84hJAWftNpddu5xDZjq7T9g",
  "key29": "5Tq1wYfaECB6jxYq1BizLgD2LarQAJUu12Xccww7fQ9axCKv9h7usyghCwbUBeHZHfB767pontjVncDdnCoBknmC",
  "key30": "3vu4uGjXA1Q2t28un2Afoyhibty3ZAhbdyaEbJjzkvrxdDdDagFrDRjss64Uxf688qaJaq8tqJZVFGMyV7aUhjvW",
  "key31": "34tcCPf9TJr6sjEWdkDpTb2MnyfFGuKy6aCVDvJ3WiWgu4tz3ncLRWurYvAp79tRTnRS9i91V7B6hPEYC9yQVWkR",
  "key32": "3rwtDDDsCNueVBsVFjhk96xdApZo9CQpz6q9b2uyhnvrf3ki8J7gVrSnTMsjDuiDjCbTqdDtYiZt5WmzrzrUGFr6",
  "key33": "4qpUJXVDLYA1jgy8bD2jsxCDw44LfB1C92NKZxGZmMWD6wcNjMzCku29EWDe8ARWt6x3zxuNaMRXWTyBkovbo6RF",
  "key34": "5FfRyyidvmjJXU7knfPYsXRiGGXtwUNKHKdAye3ThGLsRBhvvAnKL4noed6VyPqQn3keeDaNfXRfhwgwSBprsb1v",
  "key35": "66cLzigXt6batZr7ogoQ6fGuRHqUMeM7xA26WdjgxyxCrpojsCtzBvQq7owsD1ncbjdPqgRdELczxmxjhp1HgMDJ",
  "key36": "5j4SzVFn1gVLzVJNbSRYW3GokLvFa3XgeRQ4QDMr4zH3YZCB3QWNjQfaFsCNNVtZQ76AQ1PAefApXjHJAhz3wuVF",
  "key37": "4Tio4n9z2bJg2vNFVEudCCAkLsJP72yN42BhyPdAV7C9tbdWib7rSjQhAZsgvFWLov9fbuL7NZUgoifBpWWe4qxd"
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
