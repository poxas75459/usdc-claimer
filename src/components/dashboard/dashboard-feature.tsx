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
    "5KMANgwCjNbej5rL2Rd87EqYPbadmF9nJqnHNbyjmTpFcB3NkPWYzhVtg55bU26BuhbDiikLZ6BED8o8bWB1fkXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yAz3diwD9MaQ6i6AnJSgmSuov6zAggKUABTBZWLMxmPBsABgRrm5cxeS5fjo4KLb4YYrFkcMtEjsyyEyKUoQP8u",
  "key1": "qX7DtLDMYJNT7woHFrxz7e6Keaf3ocLwhp7ZBBjYPcKPfZiSwRK74zoHSQAmBJkCtkEzbpbYuUT3uDR8NYrNdpT",
  "key2": "T8NTBNhH6dA3siEbYM25hQJZdnwTZASgZ2nk9qsR5YrSYXnUWNQhyXJcoK8CcVY1ScJVMjDUHudMyLdqx7MNB77",
  "key3": "485tc6uRCAnsMjpqxzSCaSjXVkz6U38GqGhZ72c1HVp8Mxf9WTqbMBamBgEmpk5V6u6JCnmvmnCahw1voqLJD2GZ",
  "key4": "w7vjE6UcWhJzDsHCvAqZr9EHeggjgzbG2JKF7wQPX2ky9wDHBrghQED72S6A8LGrHcKFo8rHbn5kMDrTQmWKesc",
  "key5": "2oi9X6YzB9Dtnyty6vEBZSjxJBrbG8e7TTPVUQSzSW8o5YCjdgusZ5z36VSFbz4BaKYxWFaS51noSHYKBSvc7nec",
  "key6": "UEUEuwFPjQiXXbPACG3ZrbjEypJTSLoiHAtbSLRshnazdfADGYbXqGEaip8vFSXZxAnCHVg1HDBMDtnCmGeeGuk",
  "key7": "2d8hovKdjQaLmmRXv9uZzb7mKKu7SEhR7AgfAdKe5TZW4PUDGx4j27CCHKx1wwfHVaUpnmUc8j1Tvnk3JzFnycqB",
  "key8": "2rsRfDjWSpiteQL5wVo9nhd1dfm2RFket8FhqiBqVdY9k7Foz5AbZhrCyjDQLfeYSmUpaHTkskucj8RFozpbrWqt",
  "key9": "5WrKAkPnBLVuiHuBf4jUnxkkR7qxBF6ZiPpvHA4pu3mzG6wnyLnsoukytdeRNFLC9wRNLsvTxsGr3LkCjQknAK5k",
  "key10": "3K4FywJXqJp7hJCmm4xXdttPwMKYWH42KHSJW6VTtLohpqEcMU4ARcE73JYFD5P86FEDYkKELgsNtwcxrGhKUscS",
  "key11": "C5H8iVscUAU6vDTNnn8ZarEcCJ3mmgj52dcgRNSh687cc41hqs2z5zWdkRTJAbk299oj8JyEsF7fyXN75xeXXas",
  "key12": "5d9APfhMk5sEvMm36mbYesPWxCdFu1GJCgRETjtKGtetvw4gFj11E83MyJ3YdpB53D598oJQUEGtqHW9ofsbveeY",
  "key13": "vP9ptQD4bKQeQvBZGWcvinq5cN4vCFCqX7TKMBvnC1eBTAMjyRobNbBzhZACskL2bNovpRaVrW9k7LywKpJ5T6X",
  "key14": "Rvq1R81s6XB9pm5jQyJfyhfVah5D2k6bGfgKws977Zq7KbBwuyRJRiv1nDg3oHFXWaFcUVMjmWjLUgGsFDpozGB",
  "key15": "3iqWN8VRpo8nr5jXjuvUPfJ7cVv3YfQdvBL5aWxkJDWAQc4WoNKZEmowmCREXDcRJR4hFu1qC2nacSABjh1X9HAp",
  "key16": "4nrCZH7SdRDsV5McKEjbWP1HDjGLctjGtHu8A7RS7Eu6dRhquiSw9SbftDBoQEPigh1Fbqx1CHuQonCfDG2SELW7",
  "key17": "UTJQ2WEk4SyAMvmNNuX5BEGw5ZiPF33jA7e4qN7RD97u5bd4XRnTiB79scS6bTFgwob3MsB1pXvrR2mp1YSBqs5",
  "key18": "XzQoswkSpLardsrs8KTkYnc95idckMNssdVhGLc5xtH7FrWEhmXiYzBVycWgPfEL2Tz8NR35AMLzCGSoUePomgJ",
  "key19": "5UZ3hpwnsY4W1BLBHG8UXXoTXRQCiHMBcuh4pHHxPXMD2U1mn7kRZKzeFmsoX5PTVdM8i9axwXtvvAswvbM1EoRJ",
  "key20": "9GUqsggCs3UsJY3t2Vz3goUNhk3CT6VwJ4WcTUGx7hQsn1VcwQJtBESnLQ5qYjJTEcbQnXnpjUEpF2vws6syfaC",
  "key21": "nvhrThnYqcZ6QB2FptQZ8wQLX41W35DUiRTgK2f99dWAzyv47b9Fx7iq2mCqTMu9G2inRs8CEMeA7Mx5UKXS8kq",
  "key22": "3T8kPdZvzEFzQTCcaVzLHENieDXkFuraKzVQfYVmXi8Zcp9KhbKSiydRhmZ9FkWj1ZsNhYmLPFjndVhHuHCrnuih",
  "key23": "2qzfFKt8mAgxxZScDF6DnTnVybR9ZGHAEwXyoDWAqzq3TqFScXSWPC8hTALyz6hqQ5FqWVgBvbdfRTXCzNv6rtWh",
  "key24": "2HZNMzgC1xUEtKFdqDZi9JmKgG1v8QySCgbL987kp1NLobfoAdFuqArMm7BW3ruj9tnB3zN9foT6gCjikty3ZTra",
  "key25": "5VM8thgJSX5xUVEZ9tJHYhsympi6Mc1r7xtXXX54cH99AjoLJNRx1EPzFXrMWScF2iZ2vovW1rH67ZwY4iYwHhNV",
  "key26": "64BubX9ifabB12nPWkMdPnjrVAW9C1a3RHbGgWvdpd7oxKswoPfSnt7FG2FLyxjLfnKJMGPHV9CcqUTBGThgSrXz",
  "key27": "4RSLjAgo5jD7gCvKbkDx3Mvu8fuK4NrRyN4FXGFEuHJAQdMTahNW4QCuHTqwJsPD8ojGv5DQPyeBhTRe3BFCb4HC",
  "key28": "3BBdngjvczisuS6PdbtnqFp5jNyEqHYKcJ1vf928SBwafBNWF9MHWaYURp6uRKd5sK5mnu7YKcSznXbhJiJBdLyE",
  "key29": "5YmQVBthyJf5JLrMnp2S9wub14i9EVvW54BDvUN5CYTiD5zjSaAb5znA2PvFANHCex77VTm8Y9C5APVmkHXpRdTs",
  "key30": "2t5AH6yD8iiYfM3d9BjiMTV5XkjFeCVa3vvA2gFyVFDwYUvnNbztTxJTQxD38cMNuUTapspCQKgVcgxS4fJnJrRz",
  "key31": "4dgySa2k2WTce5gczdu1EYRC3fw2cwQg13EW3kdVBHaLf19krXtoiHCR9VfNNvGTA9cKU7mFHtoVLJ9iLWrpKpKh",
  "key32": "3TyFEFeAcTUJJtN6UUZAUNzm2TNmidxaN4WwV2A36beLPbQJCsc3ZKgv83Wu276YYHvoUY3V8KpyVkhKSWAKbgCt",
  "key33": "2Y5o3moNHVcdyYfFDnpzVH6WgC2eovgpzndVJ3GCGYagJNereVJC2jUcVjm33rGnWfrxN1RW3ZoMFUbPneJwjHjZ",
  "key34": "4TfyRpjvvJriBT6SjArr6i6ijbB6qBP41CnB1niVb5NMVLwMvWbC7UE1Vcfr5QzUXvc2Q4Zh5S33No4g5LpyBjK8",
  "key35": "2WSfMcPCKTU4CVptFeRUqMBrukPCu2NHrcweJ8TmyejZt4XnV7d1geNmnYU19KocLgH57X5XrBijSBoiATB5V19h",
  "key36": "4bT1Ts28XSjmYZLGdB31oAJ6VaKa3vKqDFum1o3NUbCEGTyQWHCKe69FZMuiUDPXGw3ZEK8v3Qr7Yafy8pazUST8",
  "key37": "4uzkKjxHErZQa9eB5kMp5KgsUJcUMSPRE5QMUgBX1DMWbrzVA7AqSJ6m6pwjbTH18ETZAbS2wn9dncnPsUe7Kyps",
  "key38": "2C761ZkdC2wRGiRECKDVrjN2pZyvgpyp13WW2DeLumPEjxJ9Hgi4SQhQLBqz6uQoy5X92xgEj6uDbi8fRZaSkDRV",
  "key39": "49pis7eyGeGDvqhpLaRXFwHTWHF74D3LfLh8DwVUaGhkjzJy7KFTdbVSp53tbbUAWj5kwpRYm45dCmgPZfMcNXjx",
  "key40": "35SaCu6kWEe9h36EDHVvDEmRT4RAo3uAX1BR7gQ5uaaH6zHBBtsjA7Z7orbTbmWmz5fkkFYpttwuT6rzraqkG2ge",
  "key41": "6C33Fw7AdcFMsH4mcMVxCHyQ8v6RAMw8t3MC5oBNLic5VRPPUDRXonYkn5A2q6f2jqXTyezMgmentMuMAAo1nyN",
  "key42": "639iRn1t8YNQiAJWJbcjWRPzQUanEVq7RzP2dzANjjYuWMKLa1taWLJnLBZrdPZ2voiNcZZZjfYJupzD7rN1xZYc",
  "key43": "3rGFMXCpNeAggkp65vkmohX43D76YXG6D6fYXWJ22mWqjLwqNYfvnj21WPJbwKsAgznvLySYiDYikkLNZiehyU8G",
  "key44": "5QCHE8LALZVC54CyoqSuRuXBKjpBHshFp8CfZJEkKPwRuYFdJv4j4Uj6Y7jW7bkL9WoMMoMXaDkWMD2v8TU9MUGn",
  "key45": "3viNkYTftfQ2ZmXHijiJm7R7TbpAmoBKiCkcJL3ZyjYE1VRWh26oq6H4tPaWwu1T5MEXw6KZk49VhR3L6m96qUSx",
  "key46": "4mvBAfqDZhZXTMvVrJ8eeCWFeAwjRQ6jGUh7KgqyEWaLopyctJCw2KeTeapNTmem6QJqzSka8qRMxP5d7dTmJmex",
  "key47": "3MQoUoQSo17dNXNvhZLQfFNQxnWyMS4wwidBjXyi5xMJuVM8S67fuzoc4EqFxgbMjC1kNySGqWSQx2beyUPPcKc5",
  "key48": "ex2snPM2SetyMpujxz3BWYdAf5mYPeQEhDGBuqNcvT4sd7DQ4B7ZyqgnNBc9Au48q71mzmCQH2pYmowQdXUzriM"
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
