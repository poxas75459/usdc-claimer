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
    "3auT3JYk4ZcNUAEcGWZL7DvZDdvC6Vgoj3SUfQ1hmt4A1v2MQD8roMkN4eDuXUiBe8zgSbpFykX2FLLMWs4cFEe1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22jX7kBCK9LFU37TcBTb9uJBfBFNaFWBAP4PeCi1pn4xE53mSurdr59h5gi4UPh9X63VMaWquFmVudk1VeuwLBqK",
  "key1": "3JN9LD3aDxCyxdaDRMp5P8JmAy1aMHGBfauyRoMuytC98WV6k3UuAdyKDjDQQDp853y8iPPtSzwtznoEDQc5EDqX",
  "key2": "5KKFQRP9puRwZ5v48mivXnSGaEqGmPduNtJ34v1MXgcB8YvmC8NBuiAH6PdWZ22aQ3Bq56FnzfZEWijKF6SvLvfo",
  "key3": "66HKJ31s5v2KtmvjuUnacnfjzuZd5xzss7tSDoVnVmza4LDPJA2fa6sHtzqtK6TsgUodPFFuwgRJznhX3dL7WMNe",
  "key4": "4KRuTQBtB271664PqnwkFQFSvzsJJTwM7K2MvQ6dYweVem1HVpX9D4j5F3vvKQZA4ywfCUF8SViK7YniFATq27N7",
  "key5": "2RfAHR3wBJBSdQgHdqnBXi6LsPa1H5SrtCxoCrErAwZGW1vHGvVojNAzXTFqoQ8JPLdRKvNvbQuffB62iewAgdZ4",
  "key6": "65aUtAdJzKBjpci1GA2xBpc9ySnM8seWyiiziNQRXi3xrVtdBs9UvWsgYWb8hdtfPbvddBc6gxhtgsVgPmj8MtcX",
  "key7": "4fxFYa8ufE6KCoBvjfjr9bi2aoN5X1UdTZEN5YqoJCXmvUKzcLEpg4Xe7HGqDxasCWYquHDYHxvSz3RUubxLELgQ",
  "key8": "3jMuNunV1T7DbgoxCLUYnAHyGyzsp5YdcG5XbSVhNy8km3jNtJ8V7j165HDQLEgGeHuBwmPRwnDYXS9QkrBxiGeF",
  "key9": "54g5JhRLDmxaQUdrBZEhuKzmCECQFD7mhh8aptCuTqoMEZZ2edWdysCmjK2gf8tJALVEudEnS664WkGq8u3s4WL3",
  "key10": "5vbHKwcyqb7rb273anbL7isPz5zAwDvuJ7jFHXEz2kHSp87KnBnqqL33bt1qqei69W2w9KshiPHo8pakkwa2aaDz",
  "key11": "2RPR9u7XLWBDZuhHGdY7kwobjiC444k4e2JkjKjB8guRU6DULEGr9qur1VSdBLPdnh7U2iK2q9rBDfcsDQhGvdaP",
  "key12": "5j8TY3giyqEBdXHMNgtjUWE4BXA7G4UNFmXPWMN94rrLKxYk3vUpEZtKC3dcDXX2KaZ29D2Kpo9QTR6Mwd4WQdDb",
  "key13": "YLyAfk1mNMYCKFia8Y8mgoZkMc21NmN7TTzLQrSwAuvggcwy1Z6itvHUGk1ViRJdABr8Mx3CgE9jPGvQWr1Qj5h",
  "key14": "5qZjsxQBwvswYHGosdhNZtCVnLaBfaer8SQmjyU8ERzDZMVe8M5mYiU9DtNeyD44WHTi5cJedoDJTDkMjPsESCBp",
  "key15": "2Jwc5q8rxTxYnJsNoM37p3QRuLD2phQHtvrDfRtEX6VM7U4pePUaAC4h4iTUMRYDJbpBJu3icCiLhLQvkb2TJEFX",
  "key16": "yvPKVopUqpty6amekuCausUnTDDfFebksXeaKdRYnvZt9F7qdaikXfPfYaD8NrWQ46Gaw1JEm3VSJzpMGN6uwhv",
  "key17": "42RdPAR4AaoXsecofv3ijd2RVAsbXvHR8LYavX2guFKihE4DFoNH8UxxfpdYTx1sTac1DV8ahHkpMrmwQvXX6Kge",
  "key18": "AkT4pfThxXADQrFZ5uNQKTRWE7HRHPqB9Wnj9ueRRvzY5znKhgRjKKpdFXkhAtNNN2KhzJbhvEM6wyzfpFPuoP6",
  "key19": "5NNfvJ7VPtBf3ewDAAkH7xnhtRePWJo4TmBAf4msyVcjX1aXMtYBGgs8PU3hWourhh3K3mxnyNVZtGo9nhuq6jfx",
  "key20": "4M3ng6FCF1AvSccf2bX178qHAqJ4WRmFsiuB12B9ZdRaXjFxYxcmVSZQSoPAvi3qFp37xitvTAG4QJZ1TpRmGNDC",
  "key21": "TFknieFyHGrzDhNVTaHeJnwGBxj3x4WQTKgHYtMg9TBjGAoCJegzbTuGynGpUbBAdpcsvMuEDz9mhQtedRgR7Y4",
  "key22": "2nLqjY8PsFEBwBHHw7x36MWzb2j3S4Lph7crpjEhgew3jZ84KZpBZNQ9PZTt7BzfRaCcot3yhfzbcw5vLxvMstDp",
  "key23": "3BgLnu7ETEyhtvUQixxwnE63htVPuAEAEHG4fvCujGa7C8MrX2V8FTiA6DNQY7eURhSFwXBRMCJgjzNAhYFmdE9w",
  "key24": "61pJEhg2aU9ghdT8cBgrgoxjo52sZhJreDLYE7eKqES85JdrWChQbCVS3h4aPc1od7bDHPKxhqkqBixZwvsasCBa",
  "key25": "3EmtMscyysHHL3edZVYz8E9MRdxPAcY8KiYjXzTGEJsr623BC4Bf6qY7U2B8Ewv9im1BZvdroLz7MJ7CwpKxuC4X",
  "key26": "4BQfTuarbTZyfp3B9iyUtcj4Fsm2frYm7CAr4wkaJtiFmFj9mJDNrn559QfVtUEb8Eto6zkk1ofVFd9kZTYsq18w",
  "key27": "5yM9F5quTgy44uV9zdU17ydGW5VAmbkhvz18TFiz9RAHFJnqcBHV8guXGnDtDxTxKbNR3pgy8ExmLCR8bhmTy8ZS",
  "key28": "fN9zQUPML2FYQTaW9WMEDq2s5c8PqdMqCeRZiiGRF9eedPqF7Kys47swZh5c9vQBZFJ5d7QkycjnUq3rj84AwtH",
  "key29": "FTCr74MyxiRdTYn8hG4gMDwLetEByQjhTYV4P6aZLtn3sXGpJnaUvhhVoXV1qfXaL9sLiELwjQriswdMYcThj7G",
  "key30": "2BwvxynPAxQdcMpY3tNeFsPXaR1h1ETazrByjuZm8mQFojSejb7ZmzXuVJ3zMZU3S3j2SERBR7qDadzC7TWa31dP",
  "key31": "7NLRbMhuGSZgeSCqgWLwcDJNm4LjUKbrsNDk4y9XPDe7YpAG1GDnVtPNamenaWCqpnXKL3dae5C5WDnqmauePLd",
  "key32": "5DeJEGPjSzkAv9UX3Q9byZ7wuBniC3C3pvkF8NbjsGJFU8XxETygwqVkxAvRu5HGk3KUU358yDY19gYkzYFtUQEq",
  "key33": "5bAF3S4SgjLa5mhCuk87Y4hhjcwvTnNYy5hZjb6nHPVh2SKYUXLscU8EPvjuWGxScdggsYpqi94TYcuT6MoTCUSb",
  "key34": "4cyr3pPaYD6zoTrp8oQxGHyedDowhqMwDnSVFs9QfxG8HNxFew6CXAegZ9Ce4mn8eFPhNtiuoHQCtdq5y8mvqUpD",
  "key35": "tSQnkqSrvwQkngifFdcHVG2THfxqBFdYDeK3ZxSeRGomw6vbEb3PKvRMMWma2x3YSbg31QAFUY3V7mWF5qsKXhs",
  "key36": "5n54mfqLvtR3shi9zqR9bMFpGttc2oip4rfLakoJSpWJWQCWyS9Pm4phtvjrbdbpHCuy7DGjtKAnGoURfNm8XKc6",
  "key37": "35kSud9J5SPAUd2Lk5vndZMJVFzJqVrQRKZRGMYbeQiZUjS4DWTPhyJNQDcnXiTKJmqAVZNCskk3NHR5h6u4s7jY",
  "key38": "3D3FPJdPVQyktnHMroeXNucDSY9pAVXJx9kPk8hEA9t8wwFRRf2uJfj3GKp3UScLLBf9ivZV3zN8iSRFtDj8bZ49",
  "key39": "phTnJAmS5qDmA3y6pvuEmNSZtDX9rMoJCFnvnBcRkAUYF9jXJxTvLU5fTGbQVk79pEMYXcoxdfiuFabnizJNaM3",
  "key40": "ZRBcY9on1oLLNnHEc5UJPxZpd9LeRJv4EFGxXEXXCHd1a8jeTVfDzB2Hkcsq84UBkVScMErAZFQvTPqCxJdKGxo",
  "key41": "4wXry1S3FkxcmHTsdHhL9uk2hCStnWybDSJsyNQYJwh3eChEFvZV33W81TF1rC3HbSSnAiTN7RvHWoxifBeeNdSw",
  "key42": "4xMtkD7yLjDkREZEFT81L6SeeNCsQzwTgzr4cNkzRvmMd4UoDr4xufc33LBb7AR1UhbJni9SZ1FaQG8cMPM64F55",
  "key43": "27ML5LwNXn8A3qdnUBfJhZ5KyxGAa7Dw2F7fMiQ3orXcDmRYqxEeDmRdhwYUR4oiDjdRwpR3RPdLQYUzwuQbao27",
  "key44": "3p7nv8jcbbyxoL4gZCBjEcx9nF1CXqhB4Nxc3ZwWQJB9q1qKZeUA1iPVKaX81bZirmfw5CeZ3oQrWhwvRNMCmy3E",
  "key45": "5LXCGYejo64X7j33DittfWwsh5sGrzTFJtM4jqZinfvJJKdTzJixpwkaW1e211fDwiwvba9tw3CHUkQ2DYGCHvjU",
  "key46": "8sccgiJmFYyJUyKmPJqGs7c3KYKaC1HeXXnSTdTzUifQC1JDbWRSun8YHY3iK6BTEgmgic5ou4HX9cpoLTu3gpW",
  "key47": "5VpyDQ7QrvGKFdgE6z9tVqWbtc9So5NBoqmmzTAyLgpBtQREHV8kxoetwxvCXe9nMPD47hsn8Ee35aGqyLdmCTLH",
  "key48": "zuqqFe5EmBqLznRtk89vkbX7nwdRky1wU7Hwxtb7RDrfYobahFEoKMvKU14sAqrkgJ19Mi6pCr4LJaMv9cbAANq",
  "key49": "2ADw6R2ueJ4FWk8cwdm6QYhFHVCG9YTLUMHueu9LRwUfw74HWim9Rry3QXVFJxZiK8MRC5ssryr36xGNc4WkWiyf"
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
