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
    "5Y4rv4cR3XW1qxKpPoeNZdV6TLFPf2MKxmAwf5CMY9zTvRucgEWcDu8bZL33LyhJLRiNuMRHKRzdwNDrSXokn7Kd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kfQrwZdospRh5KLvVxdMuZhGfiNxrKnDtL4kZ3WmPUrHsCYHS6xiT5u5bxJeAbJH4YFKCiHyS91NbH6J4adi28X",
  "key1": "5buQg2nz772FQw7rhtJUfLPSzcC1Tbn1T1jJnSqjVQqctG7DwEJQ5Snb8TwgGApUSmsyVE4afxCTqZQuyJB8JsDU",
  "key2": "4yuHEmYnkMjSFa8RkDYbunArJ68UPY9yMQZ1cFx5NbqcMJ1sx8dtwcH8pKtLJZ5HXBnV8rfVqUnp9PfXnwhEJAck",
  "key3": "7fyB9MDubjm8HqQ62B8DSFYXiBNEL8hC8hXLw6t5pMJ4mpmpH74N2JduiWgpMFxzfN46fuEoYXDJ9v76Dt3iDJE",
  "key4": "ZYhz3xsMB47LyGCghaiSfamf4wDPMZWgwPQGWEeA3A1pBhJw6UMKcA3iMpVt6Zdz9LimquqEnsjCVQJ49yd7RnE",
  "key5": "28HDuJE3RAWujjY23ASSJtPZnLMobRnyk65x6cibgLF4dEjqnJJZYLs8Rwv8jEsckHTS1BUrEGXTHmL9xsvRUY5X",
  "key6": "5dMnsjDT4PFneam29E5vVM3fQkZxfqR7MK2yogJkAA2bPcqq7gJWFvirxsD1gaCjDP5uq1QnRFufsUTUQnMU1SbW",
  "key7": "3f5ZEyBXNdwnrp3dFLQe3BxkbBjfyCUrbJYhX3QskvtvofYQYVmHzD34EWFQjKjvYDgogr2fCqzWpXthnEgK2GL6",
  "key8": "33K5LsQUAWZ21RD4tZY3xDdamBxRH2xMqDqmdJY59WkTQ4nAQFKxiDPE2sLCtjjtGY8pcXfSFYfGFPgePB2bSQ56",
  "key9": "5SK9ngWbR2erHWPMv2e1Buzxa4bunK4g9dv84rS6PyECHkhCPiBjexX9L9aA3CeErtPTWgCzK7LxVoRny2MKmPeA",
  "key10": "BZn98RiksVLacZz4WgxvRV8xTgaFZMic65jVD579Ny9fdphuQvfraFpmvCNBtNP8Xa6V7rixAR1WWVF8DNwghHK",
  "key11": "3VaJfrbNAmaCR19ktVr2ZHUkXoD6k8yjEBx6Ns6eH4h1seg5o84Z6KztS8qTvKQ1YRUVr1kMgsEc8CdUKnaDhw6D",
  "key12": "3xVTvCiv89yUkUT9t6EH4VnfHU132THjMwcSPGAULeZYvBk55JJrJ2Jac8snjgkhQVXsxqVt5ZXzKGRGqb6kH1Qc",
  "key13": "4k478kEJN3mBnHgVxvz9GydaZ6ksD45gZWdSavSuvMymQ8bzsoKkbHdwrKev7qMmcGCQ5pXqDRmxn94DQFgRksJ4",
  "key14": "EmWVLvGEaQ6xH41F41vyvpS1RnpyDbA12xATkqxpAa2We5xBdJV27iDrnER6htuwZSv228uCWaakjaajYMeNeu4",
  "key15": "PVVF44oARrjk7zGZwQvtwDUAFe7boUCES6Pq7bGwwD13ztkPaaHzVB6i9VFiuyiDniYUGbQWyqAsbA126VAqGDc",
  "key16": "4vExdisFUfekjjgFgcHQjpjNyZ3vHR7zHnn7E1xe6XqhtmLWdspsCnkttpx9XHSiN5zcxbAQ8Xkc7fF8jUpwEok",
  "key17": "5kmJoT8xSJSCjt1NB14U33T2f5X52KoNmC5zG1M2AjXDjc95v5FHdU9GxagoFbEQxycy33ADCFCmsnKTxhmHRqZM",
  "key18": "4u2S1aWG4DdmKwCEim4D7BinSkRTyhH7vQ1EDSFGLsnzmWBCEDh5itD3PNMYbrgu1KTUx4jA7tiHiyKVAQ7UwPYA",
  "key19": "2R5ax2qZxmx7vnCfCNiGUjgFnLFYCrZt9MNEZXgUDUAUsifrv2AEU6bTv11UX9aTyP44AzrtLhRFhHxBmjdPyeKg",
  "key20": "5KqtvocjdiwbMKoLRraqxrM4YWnuuW7oe3EqLR7pJAPosuXJEewCGVm32N7VbzxSSKGiJb2M4aXxcgX2yEGqBs9Q",
  "key21": "2tEkPVGHUJ56zekw5BZfWxyw9AqWvjndeNhZNQ1PLBKEtysowAnptYiz1KD8fgJSKbMteyrk8ZoS7b95jpc7qxtb",
  "key22": "5g7HoUXygSx7WqxSSinSoPyYP5ongtVBBrT1SaS5VPpCjhjaWETmXDgj6mKPNuZXnfar5mxkMUBTwFY7FZasYHFu",
  "key23": "5qf99uvs3iRH2X2q2eKYTvvh5WeTaFHA5yN7naPQnqycSv1QF53VKHiMQRnmk6kVDSu6YLJW28hsbuuKpfCR2iya",
  "key24": "584jG4MvagqSbo2SCqZYLuYMMa1zgkZGe4qC4yRaYJdkMNGz7YwuNNdyw1E7sG3USckPWaSjaW48yy6KZP7jmC2j",
  "key25": "BUoTDNiQnRQX9xEP9QxRM4U2QXSprZro7rZcNCQEz6S6hiQJ1cdmv8E2FJEgdVZxADrywcquw7iRC1vHnUHNE3K",
  "key26": "3xoh7Vp1EDdqmHRAVcfatNFdhk8rUDYJEC4BWVE5UH691k7eKED3R92TDo4FfHjC1EaRyzKXgZ3uSxreF3WMz6zw",
  "key27": "4DcPjqKLFTJfi8NDnYk66Vb3BXTgQ9xobzcyCYK519RuNEAP6MRAs5P7xC1RRFL8c9awJ4FMaU912DnSvERQTLPE",
  "key28": "3bUzL3wCDJcqGiuF4pWSxBNzzYPVqhRCqYUq6qxNgNFwzr9EHHkE1JjN1iwaaen567hmY1bucf4jrhhHXV1zZEzG",
  "key29": "YKY4HHpNNjkjqxukmAV9nwxFNHJtzrBXQXU82jLT5vTMQwb5Z5K3MJ9A9KRZcxSdC48SYorke2qvQgQa3ianK4F",
  "key30": "2XZtJ72Ece6AvF8W9myWj23fZnxHfgWBCYUjzLJM7Y7vww2wru2eTpLWfCjPoGt5L5FSxbi1jjsXaSK3cJswZD8K",
  "key31": "4MKCFcDUtNkvdGn8KRy5dJhAoGq2kWzGc8xhbCVN6bq92eLWnzu2zNJHYmHun9aHqL1zU4DxEsnkGFErFYFuVKtR",
  "key32": "vsuu9JAW7gydszHHuRfA2xWdstxALFgxpXY8bhDBBqhNi5dZBEZUHhBRjf5WhLhNb1T5qgEwbrhfwLooM2e8FVF",
  "key33": "3K8dLt22QZ5iVLFXcdz1LzHi5G2Ci2hzTzHpW85QC2TsWCSGFw3nEQPmnECLcDd9aQJwF5YTk9xUJWjA5BxjsMyk",
  "key34": "4MUjKVngwUDSSq2RcgzH6aN94JAjN4YDAg9nSysSVfYUDVCSHErja7bmjYu7qs6CqMbnj1auErYCkEMxfFibihQC",
  "key35": "3A8cdnYsKuMzskphfyDYY1smLmDsN4hEnbFwxPSvSsuDTfeyyko32KetyGwA97Q2BXJ66i7fGksuC6CYQo3JX3ah",
  "key36": "4W8o3NBHfyAidVV7H27JKHyE3UEyzW6cNXWxp3SgYVSx1zPR3H4UMHnhZiDMwoPKeREPVuqW1WyXfcCo2foBFXYx",
  "key37": "3aDhXVDt7gfrqA4FfWRB4LbSP8KXFxy5ttKs5ujPgm2pZQkRrxr8iYP3BkC41YkfqDoGuzxtfrQxxDnfTvUChVzy",
  "key38": "4umyDjRmv3q77ADsfc4nUHUdFyCT5NgPMnL1Kca6Lmj7oiNoBrS8uxYRzBUBgbvemHtBpWU2EhCrxwnfyzkNwJym",
  "key39": "5ZvurxMmFUJ7XNxK8we78hn664J2e41NNFrdjqvVbFDLmPx1kgmGfJzR5uF6ikgQa8CvxWGX7uoWpC9M8h5YXbvP",
  "key40": "xDcKo1UdR1yKHBPa1KNRYKokggWz3iz9uyiRyWn1ydAwcaH2RCfapn6E8NXgaXuLaRBwxb33wv3X4vKqR2TePAA",
  "key41": "3sY6N5oQEYwaWSAXMyWsV8VxxxBUbJkSZYqzg6YhTWTxq9xM9KhMfx2UGD1VNo3W2AkeWZAokgoZdHtUVKdLZJg7",
  "key42": "3kAvZWTs4RrzxnYBKdVEL1ans9GYbpNai8MyQGxbjvxmxAwndu1wcdWrwvV9ppYBnzevNUuoWGSXdZLRQSe6QgCU",
  "key43": "52fn9oBMerfRGqF7DTFPuNyEHZTbEWXET8byGTnah7otujaSNNSG9P44qADv95VKL2cXEYV5k24EvDwfRSNe2agw",
  "key44": "PKaa1yyfVP6tZXz6mQvNwfnH9qtYp2A687sWtiK9w5SEuDuLEfT9rwpuV39ra1Ca9ybLFCj7ZqfPAqkjRaUeb3q",
  "key45": "5W6RVmZRKuV9JAPGnWn6zTQhZ8NSAp7deA4PJwQY5kJNDJyQQKHX8wnv5bQcoyv4WYVnEt3uV9LzZrkdogGpeMEb"
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
