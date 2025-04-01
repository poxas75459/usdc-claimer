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
    "2J9GmmhUymDzq2YxfiNVdeFxmmhN2STFVf3Lt4vX3T4MPHhTmYFxDtJcVGAhcrk9VBXg4ncbED3v17N13sJS8kFV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gdKbajKVWSZ1Xfz5PZHg6yjSL52icmFJoZVSVYYjPrv7tKhYDSKfZk8uG7G2Q1vvbYdVe6yyPGmdkyynrZzoRLk",
  "key1": "2ycJGx5RBBRu9XVNBKFgcWzu8cT1RDVUttCXsHKpaaBrLiQkQEkocTvcLkeovsWgEC5h23ihPw4RsDnCFKSbddKz",
  "key2": "5WNmzGao4Y9B7oQ1CZuyLt6KqKeus9Ljfp4kzDGDuiJMzbMhccJ9yRwUFF6KXsGkjdyQtWTXtZot6GSnWMv7LDtm",
  "key3": "LCsQEcD4LonUNftBNYxkV7EASDM8wsa7MpCeaxudcu1Tbe5nbtWMFe45q582Ch2wUgS6yaWmahcCFnkQ5srUbkR",
  "key4": "2iPY9StgPRpKvdCwWnXoV1gGoEg9FGvonEurnkc5CKL8Cr1UKh2pEPfssYepfRbh7pBWaZUtpHMsDpADitChnVpC",
  "key5": "3JtcXqFyJxwfX2HRZFhn17M5LZAHjBKaomL18e1aPZkD6pYTrcjmfvfdMRm372VH4LzqwNYVHqyv8bhG219jATM4",
  "key6": "3hw5tHgscErjrtniqGhfXjEVgHRWKndmEfcsmyziUb291JWDo2hbtejfJ4dqkrKv5Zs7wJxbM2ipEvzHZ8CzoDow",
  "key7": "5yExxnvMxNobLPNdWVm6jzJvnpfv46LQsBpi3udLFSSXPokkcUVxgos5qEcAW78cvX8B43wSDkBEYYByXaEZgmct",
  "key8": "67F5STshYDmqXV7h3uGD9h4ZnV8BUmENkAiMLojd5poe16CaaiFQwygt8ePj1GenDCq4tu2NnDBK6cfHJXaBH73r",
  "key9": "XiPcZ2u19ajw7jwKTNR1HJcyVeak7pnbdPcjyvThYQuGu8N8iPN13duyG335g7wWharK2eXA7nFikJANUs4c35Y",
  "key10": "3LGMBq7gNsaeba9yDkVvKMXfn5tJewLmDaS1etTb4mo7EEUAZhhjpS2bmfDinPbvH64Qh6PFNWZeAhsXYqn2VaVr",
  "key11": "3oy9EZZRYbxHkZKCBBRyyBiEnFxpqibMrErfD7Cx1AJ68AGcNmvSmCyuEgViADuj1sjQ25i8Phzy2pW6zkDJQTnU",
  "key12": "5W7G1kiSSHYryCpoywFNcArdN1TknM2mV3HvL36KvuEKne1831XzN1VCU9qoeY7kdPrFN3Xft1LGyvniujZpSoY7",
  "key13": "5vt3865rDTtAbaY8WpqZfCjvdUVKHZBYt87LoamKjxyvWrdALRjxexft7nyYUJJ77gFQsxzrq3U2mgphzT3x1nzJ",
  "key14": "5uvFkNxPSgG1d7snndKfV8Thn7pqTzXpvVN3CLxUJ64SmYmeczbExNwoojPsYTTfh6LJXZLJqi7cGknCoJHCYwFF",
  "key15": "5huMUiyG3kYGzLmgqH9ZZ7bW676BBtPKNP9tsyEruEJmUyFmrfQ4qrD8pdYFCG7nnhYGu9BQwPV33NS4ECdSXZsM",
  "key16": "2vsQT2JEb2m4XCduHi8JU81qyqPxGq1RkAab1MVBB7hsUovUH7u4hx3NKkMosBj7G7BhcXtswwS2zMBU5E1BnTCj",
  "key17": "4ZFowNp92WSoAFJsqaexG95MHhuvaDBfmnEkLVXtu3owiGBTuE2z6z1GvaAxAujtVT7XaV2d3FqybfNJdrSkLYi2",
  "key18": "3xfsEkD9gRWDpALaEaubvLvELdt5CjZwgGqNKBJqCPKa8mEfvSB6qsBVGyfDgj4igMxX8gyUv4WeDNCrrWkYZXXo",
  "key19": "UiQy8TAc5EbeTSW5ZFunuKi96WUHatdQ5r1vGsAbxMMoJ1kWWmHKHm8aPV6ti79pFVvXNUCzyKd2nq6zzENSLZh",
  "key20": "5HoEa2vjdBY4F6KgErxtFTN9K5jBm5cRED6Uwq5n6zGZk6VD3o9AVqo8Xgin48kyXwffg5P2BuLuZC82VxqqfDch",
  "key21": "ZSEWes5fqZE9gV4gV6nFSFT8qJx7drugmAKCu9EkLvnMprMf1JHJVDCohw9iZkkBuxqkSUY5r852p26qH2Frhsr",
  "key22": "2zr1VoUj8u5C6wt95Z5LBpmKuR1q2nBKCDbAwJccUEaNimQZpUDj7fmh1Wz5JreMVubFkguNH3VpGtxHjyVq13mJ",
  "key23": "2h2L1eR1xsGYvbC1DuEeU2dfkhUXAtcw4jRuYJNAYGjJABE6A5JkoGdCeey81En3HNf4fiLY2Sz7kKFyj9kyrmfH",
  "key24": "w2EgnztwLG2vFCxceQCoshsNq4cwvwFwFCYnCnkn2Y1mEVx39QxTwN1bRyHUQzJzf1rQsFxY86wLk7bzzjdekGs",
  "key25": "2V7SGSnUmwH5KCJHt2Q54QNGP1BmSwSZEB9AN8AQsWh2MbeQvmau4QE63MdYkKSMzt4p7jjRy4sxDVL63jTvLwWU",
  "key26": "51S5LjPYgE7rhdY2CiAUfJPa66zkCpvh7wF1iYTFcFo9pToZNVqSJsvHJvbWK6wvt7H3Ss8yVfD4Ns2SS96JNKBW",
  "key27": "4odPZURF6jdLRk3Uk38N6SdTkpozvgnrx2VMN94HUVxMRfkG82EpSae42Jhsx1ebA4QQaFXe5b7RPeLDeUfLasNG",
  "key28": "5a1ssoPS8z1czWpL8aoqmm6YYtCDu1WT1aggqqKMWVS1vZcuP5yXNMBfxHB43uBwbNWKSigXQhjKM3Vaq94MbpVE",
  "key29": "5HtDmvHhmDs1nmVDxMHKf3ukffTf3wMjsYetaSX8XJHMuMnrmSgfH9AKAiErXQnYBjjb1hDaudwWybJZ3kSEERT8",
  "key30": "4fuqFPQrV2EBLV4vZS9s29yZkcng5PxbkbpyPAQYGjpEXiX28SRBJmh8xmEnsMTGhvh5LJNY2yPMqxMJyoe1NF4j",
  "key31": "ED55QC75MSk2aw57zLTSkfzZioj3nrH3ZNr3gPyrTsRTzLFQMinLaEZAfyRtNgQ4E3nVnNKCNDzrxkx1mWHJbgQ",
  "key32": "39B9PRr1R9ZUVtxXmRPvsjPvJF9Eh2vYwsaSZD5ayAZwDRgX3XTcM9NeyaRKkVaSjiKAxfVBa1Qts74SGPiHfpLp",
  "key33": "43zJyvAWG6ZRAndJYBkXPLFs8bwKUPzLzVwGWWUaXstzTGag5NGmM1Wi94engf5EGiUP9oDLU9oAtKJNxF5wtbch",
  "key34": "4yWnVkkFdkFp17sQpBoPT9c37pUGgdUadXdfbQ5tbb2BkGmHMYHWqSuxgp5jv3iW9itzwVe19g44hYfWP2As8soK",
  "key35": "EAt5oVdbA1Q2tJq9qVYB1krgyE7m12t4qMw3hv8ZX8kZvXxYBjaXatwMsRGAiR3sM8hHxsoEgJ2Vj4SLW1TwrRQ",
  "key36": "3SHyKvMPtmiPJHGpLVjDWXeDvkRZJupXsvehDi28YYrnvKdLW4fdXzJMomcvc9w16Lx4aJuKG7LVSZtwjeFnTjnH",
  "key37": "5p6oH1fVu4BwKYuqJwrhFkHctatjsDdLkBt5BnrpkVJc5iF7bXRrrVDpFuzALPcbQ5PvnW7kVLAu7gP3xbWZZ5L6",
  "key38": "2Jy442o2C2QW4W3MyGC6QaTD2ry5xMpJ5gvuFfZQtnDyMpEpCUfFY7c3eFCZoWWfgGgDfYr9WeU2LsQhL7bNSZtu",
  "key39": "29NugdEUJgBwaCbUU2yYu849Ry4Wyrz18aKEwnNdTfbo3GitArBEGNfwhtD4W1qQ9U4Nwx9RVSLqwRwBTDmH2LSS",
  "key40": "BXXTbxJ6xNcVNy3PH5YoMHUEMUK1XoeqMjELF4fjossQyw2hX1AFF3yDDH6VjWU5hSymTfwf68gR8oK3epXcjCy",
  "key41": "2CHvbbaugHCL83eUmrhBMz6VLJRKfb4F4P8HCFUAwbujBkhDTzRHbpXFEzT1yKAdAe474LTsuGMBhRG3HocFNE6V",
  "key42": "2A8ET65BurUJB2pShsL8HbaehMaTvxdC5Y96xUqFL1eXEVpTs9r1QFDtTewu55gpJa1BPvrSwUDoqVX9rXkiN1QA",
  "key43": "5SaTz4shPWx1XbG423LcMKcsGYan5SAJeX9KCq69BQWR4ADphq1uFZK44DAgpo22GWnsyoSSyVyD7rLn6y4Rmye9",
  "key44": "5BTbW5JsQuGUB8DMTPfNFwj2LSvFKa2UkEr7JmLehSnmcGHQhRN3cRJqac4KSdWooVVtFuJKHyioU2yQQ4jMvztW",
  "key45": "36exdba2aZwYLv1rxMTfePWnoemTwTiSpQ5ojzRUNZJAefVdhNbwh2EJim9Lud4hZffAeCUfbLA5oFQoP8kg4ABW",
  "key46": "rvhkr75JyEWxgg4p1jn57qvh49c5ghxB5iHwRxpBabkKjZtEGr7KMApbKYJrWavwPqD6E9MS8H6FoYyvruUCq4B",
  "key47": "23u9ZLGBcA8icX6jTxaLvYUwSif1RHtYLbV4Aoswtjqwg297AWQNZdUT7TpUjPFD4d8RyNL2j9vbyCQJijA4jmwK"
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
