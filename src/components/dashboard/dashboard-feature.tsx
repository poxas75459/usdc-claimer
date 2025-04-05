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
    "5UeM3crtLJqazXZDEsGpDMa6oo87ZaeaktcaxA7QTkSLn6KX2vDSo4JByNgz82C93LbJVTB5VHvF3juiEBcc9nm3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pMEAZJdSPonXAnF7fR7zgrW3wTDF4tNTDuwN7ZLJYn52bZqcphcdQvpj6XmEaXciarBrRBnHf7n8oCFsLZW4nNq",
  "key1": "yDdW95TnvheQ82AEN8jk9T72j9Wra2DnZLaJA74XUzmxarCDT3BwxEJppMVM4n1CKm2831NTRWy6NjQZeRMUrQc",
  "key2": "4iBiZBwug8N9TmhwcDosrhjEMmTy4WkMhKtu8PfLKzPsePae4JyrvLFLay1GzwTvRUKF2PCxX7eg3izc7vC51amk",
  "key3": "84caE2BU1ZPQP2ufbXKxsLLiYdKTyG9DJmGCamn93T6eH7i1CMDeBPX5zXbWcwfHuA1dkncN9PQ8M54YoqKNz13",
  "key4": "eB2DvA31UpZinmUcd8znEEMyFd8Q7JVq4YGKwZw9nLLEntEiBzTfvAvcPVnFNsCjmHcSqYzUZTnDdunnwsmz5Ga",
  "key5": "2UpL2ZMUPwA9BcAYYYSjfNu6eexNyFAhqG5MuoqqDNuPRPZBkQs1CYVSh3RENrFYVQgGcHREn3VCMdXBzh7RcrLJ",
  "key6": "Pg453PWV8Uc9qZJ45Ba5mgJn6vMR2iQLBNfAXa8NgmeQXC3cUGURnR1exzFZtrdkFhuK6w8GdHeySbezQP5FLn2",
  "key7": "3gCk4haCX5YuzmCz4N24QvpW1B6V1Q1TN7x5dnrrUZwHyYeTfnB44G8Kswi7adxtygaES6i224PaMcEnvVHnqr3M",
  "key8": "5mvM5PeGxr2dPJAvkg9UStEQy5wo3224Wmegxuwq3amMm4hvV3zoXULNNSKTqwVapVgDPTepCqrErQ5uKnjNs8wd",
  "key9": "5HDFJEHnD8oYjneb7YnwJ6m1pX4cUnSUUPKdZaZT6rD6g9iVqCB7ATWtkDNe6TRgLTeeTAHK3VfhezezsD9g9jmq",
  "key10": "3W7wasYMmN4HJ4VQVzfGPSf72xhXnDsUcKah6KKETFvZVgeLdcMAfGXFevuVpQnALPeLmFGkPM5PRteNUQLrMp2K",
  "key11": "SHhiKUJKEK3qbShe7Bb7MTYcUXSELYhvfoJ5YZMqci74oJcq6qfn6gA6aCsMsmNv81CnLs6nQYgc1fceJU96ThW",
  "key12": "5U5K83nDG2zrVP9KvQ3UsNTF6tQY2q3AKjJtmoLKLuoYwtDZuUKPmhvxe65wDEagReHf5ggYpkV2Qaxo7orL6uU5",
  "key13": "3cUKQTqJJF5i7UdpjnC3pkeAy45mXkeea84amky8XQtWXVSQdv7HVZK1SkVAB21ppnc32gYyeAwFXgDNDNgA1uHa",
  "key14": "59Fsw1EWErYnHL5JjVMoYMhmmaWGRShAHJyYSbT11KHQKMHApPTHX3iynAEd7RzWENi4GqMD9PdVZb7cqUN2qKSg",
  "key15": "LQ9dubWHq8z9aHSFCj7Ejg11MyPfDc6UoUekLgzHPrBjabA52g3SzkgsF1rAFi8ibcbEbQGT1iWg1aiU338Ab5a",
  "key16": "3rsEUFqsg4TUg2Y4Go8kRMYW6L465UrnPHTTew3KhhrLK5YcsbMYZsfCPhYAmZyxfq56KCyZLLUUEQuc6W2vSa1U",
  "key17": "4DnS6mr6wzLjBAyqqdBxibQR4nABm9Bxt5hRDLqrRrxFRp99mQdQgDLDi7dTYU5GA9B1qBk8tAkVc65H1qMrpd1H",
  "key18": "dixbNgsnFeEEU1yNzUpWVCaoSRDunqMdkGdxR7VzEpcSzupmbbB2VTUYpHbpMsGQaCLDUvPvG3Zm25nqnj7mrrJ",
  "key19": "2ydTtddnonXeHQA4BXVXfavsRVnKcEJHUt5sooH5hHGeY1dnTCTVAFgJqbS2bX5QipZm1owP76XMzwhRrawofdFz",
  "key20": "2HVMnYeLzkGTkXw8CK6vxpwuRM8ehTdC7gkcnLmCmugRweoBdGnApr9jwk2c2pa9XrmLwCJGyiWSz7Q6vU5fPNDK",
  "key21": "2jTKUxfsigsbt2d8QzBGAVtVBsisV3zvwN9Kc4mhh3ZGNqqhHSitxe274D3zN6PTbe59D8iFoBcUC8VqjaCctKX3",
  "key22": "33ekPAdEYTK4uJh2Tz2zPmaj8WGJYhY6AEwvgkmkjeyQa27mQYP9KRzVsoCz3vuBeG1KU6vU55udtJDAYq2v5xM1",
  "key23": "4aew7L3Vb5y1oZEZCvwTCXRi6PMwSyYXioA8KAbpdduguubZy4W9mzuGRu2s2JwSMZMAd5ZVzBgNdGfuirdCy1U7",
  "key24": "3Uz5PfwNL691zFKLhE9ZBYqY7R7UF8NfSMH4wmLk49zkK9E7A1n5KGZMfQ7MFiYV1hi4DwPQjYSoE6hhgbLBPBkZ",
  "key25": "4whP7Uz9vT8fhL9WACMsVWgMRwcwauGf67odi6RoAXzqV3Mv2Dc6TSaL54JzKSVAksEgEt66cNEYcTUnGwYxb4ZM",
  "key26": "4ZMzH3trxLUYuYMwcJa3ZPwGfPR1z9YPX23HAk26xcaoQYBMu6jXZpJDrsyk58rZ522uqBwq6ufshiEvSuexCP5q",
  "key27": "3GAdBeTLL8Dqd1r72k2qwfbPf7cuMangYZqZ1JEC198L8A4eLpB6qS1Q3vneq66KYQDmQtH2WGKttw61Yw4oPcEZ",
  "key28": "54pgRGSuar8rv2N5ZFXiJotKKT2B9RU2JeyVT31foxwQbED4tHLfEL9sZ1szSoPDnvT9MoC6ktsz2B57HhzGhhPc",
  "key29": "4fjMWWzBukJEwhxocYYsvPUcvtPiGrJNjEFDSfuQ14o8QNksGhkWr2A6vupYArh4r7PkfUhLhCfAKEkY1GeSnxug",
  "key30": "4aCN4xU62pguuQm9ED6jr8eRLkCDr8La1KKvuMLfmC1hLNU4RFgwxtTAj3nQfLwnAYFFaRJcASRnShu6Mq1jyUEg",
  "key31": "3gE4jg4Gfk7fcGGuigPDtaKvbPn4rbbN8BeQrPbf6fy2HZeiZ4zvTexVuDeyf6fL5Nah4gdaodGzz164qxdpL7k4",
  "key32": "3HP2L41ovU3yUtpAZ9tpFVuaGLkawTtx8Ti61gDn5h6susVELwfLABNu4QTxwBjytXBFZPPH1cxDhfPmUunhmBUW",
  "key33": "3FiPKydEkWiD17GDQBVwJUMLH3Hbz9Pnf6Q6NNt1V7sFqB4FrYmaAXw1Eou5pG1tDoRYoks9jSQmK1MtwzALVp7z",
  "key34": "3zSdjCxxx7JRx12tJyrPe2aGatau56X2L2uYmf8uN9wUrziDypnmAKd2fronRTmRqFZXUp3WSzN1MTvkeq1yCQdi",
  "key35": "3Snv99UNqq1CC61RHTEU8NUkUkGY9ueB2dtR5gKKGMq88br4yuoZvstZLePysSAMReBFfWuAHiQzD7Ws2ex1fYac",
  "key36": "nfcYASRzZx34UnVyyUw5QJQXdRUfXQebzmQ491ogNbXfmQewZfjgFmmnunPLSUewmbCMK6X1bB3tjQuWujfuuVv",
  "key37": "4STFCB2jP2QSp9XMG5j1QfkikgYB79DJnGS4n13TeUiVtmdAELbS7rJfqrMXqdxS2YZLmtGF16U1okPJ3agTKeoH",
  "key38": "5TxpC3cqWTwzFa7aQcqSzLHePi7Do839xVaeuVt9uc9Z9qPjkk9LG3Qc9WqAR4Hd798spTTATgTnkNk9vu3YDMoc",
  "key39": "PTSgHFxdq9UztidM7EttczX2Gepnw4T88pdJqA4J9HRMzuE1aeKbadRhvWKKqviftj2R9jcNoajmUX1iA9ZNjd9",
  "key40": "58qie5FaPELu8UCrpvfzoeUGRuvu47i4Ud2LoTTM1WdbrLMnv3nBWUnrgcbWZyFsyAhCT5Hnwg5tZZND84swTsbG",
  "key41": "4wBHYLVgbSDnbBi3AnM76XgSuLAnNPARmtxbc3W9A1oLAT8zcLjzSeT7sfihiytDUwiJM9B9C3EAntror3wcW1ye",
  "key42": "41mZdhcWBgxvqeKon55GjP2CC8Ji7Xa7P69He2g2KJSfxg9bY6bQcp9Da5E3Knp34mD4ffzbr8t1WnnVSpFw2bc",
  "key43": "5PvqAnf24sGsq7rx465Ub4S9tqN7Uh5L4cap1raHPBhTVasCgfh2Q6aADBfR8ofvse29m5J5UG7fjmmRZpQWuyjg",
  "key44": "4ugChCyLstEJeC967mQD7Zi1eqGuuNJeWFU5ZdAXJvyHYgCus1ayrGSqaJ32vGkYWf1C3DmmqRdqCXiHoe1UeWzr",
  "key45": "51iZ3gnbKGB9Hyjq8UvuZxBcjfhMStLdVXrzV2ej8fqvcFYytTjQFdZR4uGXHkCGHeGJKt69T7GeKbfiuFVidqZJ",
  "key46": "syYUSAWRyQ4mfaYEJb7FW63JMHLSb7ce6MdZMGqdDYc2vSFcGiqKnQbFFuEJbnGoGii1QuCVTz7ewo9bQV8fYg3"
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
