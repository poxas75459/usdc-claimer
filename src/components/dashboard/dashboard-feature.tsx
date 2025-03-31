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
    "5KyZqD2mAJ3LeUNjryTN5i8EmWx4mWLN5rcwQcCdnyNpuLENrAfWayyLHtbfRWQYteP5uhHnQFBMTm3RLbTwY1SY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6xRmhpvJvgCU2Ug8NmYuGGojfKEpFkdvYCR2DzQqFDKr7rFYZk1SDi8Wiyt34SR4fHqzkrFUrWFHMTfBkTs9UAg",
  "key1": "4dWJzL73RS4fK8seR8svfWdTH17nqggrZADhuzMU3bzkZM13X4xwTFQrvFErwBw29rysPyJfqiMo1UZwXJAvrUDT",
  "key2": "4t7ecBrKGK2vd3QTvqYjyJ7dtzztmLr9L7HPgj9tRRBbF7JULv9Uib7NHni9JNMv1zFxteJs3MJHqnMsjaNh8Ku",
  "key3": "5LjnwdF9v2YYrx9VK2Akg9o75cXojg5ahcfdGybyGw5PMwkF2d8s8X6bLyVJAsw3eT2sHYURzJiUuxJTVcraoNNG",
  "key4": "26NBB6oMqVCV6VXeZzCM7qWLWgNtwDHwptJduNv9ARFXTxnfzaYn1XmjVPJJiHC8AfQfcxisBHjtjABgKxdrEtKr",
  "key5": "2FuAd12aMYTFTL29Kgc8qSmZM9wv1uPiJCh9Vz4FMMK8pAiG7zPCLRWo7mf3vGXQ5a6diM6GXhrH9kG7ivvXtsVz",
  "key6": "3YVnYN87ri3qd9Pim3xTr4xqhU2KMpjmjgWDGx6fruYfKPQi7qZ4dSM5taGzJYih74m45sbD3Jdr5gguCGss839M",
  "key7": "2zsXEjHYJgGiiMumpTZnAbue1rPDcVbWsULLPgVPvoNN1uCGKio5q6MQN49HLt9Z3P5ZtTTdMYEu5yfdpQVerF3B",
  "key8": "5kqNEBFsiY6WnPdyiSF54Ej5eQ4YfVW7TVe8L1imBdtfna17ywoQHwx2bdT2Z1t8La6ehgEQZ4AGKXasVMi7GP7t",
  "key9": "3aPMNbqTaUPChwHhAmSeNGaMzaAYBg1FXt3oUztSvANfBxVCct1WbyxpLv1mzC1dE5x4csnpnvjoqASEbaiFT32q",
  "key10": "3Nob7BFGWAgpFW5r9rvhgerWDz4vY1m6BpzSvpD8C4dkVzqHhgrCemBsSqPxayoewt6QvX5PjtomJXc4TuqH9toW",
  "key11": "23xraQqJzK9RP2iPeZXeVCrPfTPBJ9NBthjF8MmgGu7nCUmt5ZcczBYeHVwpxNrY2RzA5RH1YqsGEZv4Xiw1C6wL",
  "key12": "5ucde1wJr88jU1ckWgomkwCLU9ZmnPnBjhXydY35gURLuufwrxxYe3DzxeRnEkgZAHRgXnmtfh7XfNWMGPX94qeJ",
  "key13": "ZgMnVfeu849x2z8pucEDzAzHr1JJqQTBA4X4pzQM7Xr1cdiCKu3PioCZgk45bvGt3hwxXi6zch6HzZzCpsup3zE",
  "key14": "aXHwEBoVQ5e5cD7oFW7ZqokRZ9a1KmUy5jHvCmL7gvk5LgbWhJufhNywQBELeHNJmPMnHR5qtXSWk7VcY548sFb",
  "key15": "5f4Jf9A9L6duNHMzMLajM1eYXwB7gnfQeFtnAhrhnHpsNezwMyeB63FQN9tb2hbHeYVLB442R8EBK5snAvmRicAj",
  "key16": "SBzT3f4vqEV3YzRgjxqg5FAVntAASRerwrhWnQ5XmE4UZ9FQDxi8XMH7hLKeY5nHmny7mpZiycdy7MukHiRvBj3",
  "key17": "5SKdzSkZ5ZU3BP3UaQH7NV4Q49i9nuirU3pCk8CbmSKyWUXyY6SEPmKKJ8YDzVKc9so6pebjdMani1HL7SNCMy7L",
  "key18": "2EzyozaSGKqbJ45otMfGoKknpphqYfYxFjBncJmaxahbggmszABAj5NdXZZ8U74J3cJtWUJoMMgtdec3LhXmXaNP",
  "key19": "67UeZ9WsLiVajpzJehiM14jLUHyoPXP6aMEdgqhMchg6in6eZwC9xW1CkTKjuY22Q44DZSavnLfBLxZ7FLrA6wRd",
  "key20": "4TL2yehAtYtww8vqgs6Aww2fJZXTPzG1LDG6YtsjtoZZv3ZU4oxfb4gZ5b4bnyyyAvZcznDh9eQBTeTLqcsbxyeW",
  "key21": "2gy2Qhxu6Eu9Gft1atrGTzDsg2eS86EBpeXGf9WRj9xMkdnZHmShG7d6XS95pCtQSFMEcPv28aAr9HXAzZHFhGNM",
  "key22": "4yDXY962FKo17VHjprMxwVgLdA2LnQd5NY4svZbbmewUE9CApVDqccHHSxL2WSGhuDinbfykCUNwJkMjkEFfkyFp",
  "key23": "5v3HDYArfSzJDUdbjufJQkJKxRd7CgWyqMsmLR1gFKgB32PkPA7drZaEbfSMHTQtwr5YF46xHwZHrKEN4jA7SeLo",
  "key24": "3fppgUhEr4Tms8JXPyXNnWUmdhVzYSY9Rsy33HiTH3eH4YSa2n7542gxWo2zUKySRdyGyxtkp7NvsAvYMA29P6bR",
  "key25": "3CPkWfDbSgWQ1KPSryPNNWHyvZi6bJeobGmsf6C7FPU1W8eCW4hRwcwEvSdcTJjbX1EC8PVyqrmBztNApmGh8sHr",
  "key26": "3w34SksWWDf3H6fnW9ZRgjwyfFN5Fev5pr8ywaMLEjNPJ7Jgh1UmuarDtSLvkSk5q13iQ4W7ibk4W5sGFiAyw4DQ",
  "key27": "azyjr3SDK24VUeFRcyL8c4jMNcZJqKqUa13NUfQi5Le7xdoBgQ2Mur9oZW5RuLmf8npzpMMhKbJGVg4F97ztXA2",
  "key28": "2zwRB75Sy2JN4tBV5kSotRnxCDsCp2nmWd3eZtRNbACJZZxjGesDE4vqsYAVhUPpEwd2LUa2Fwzh6JNqY9yPn19B",
  "key29": "3g8G7GPq3WrX66M8MKhtMGbgQpyh2wWwdTzBajWqYiymw2gV49yKvwx3JFpvzdSrT2B6jBzbmHX7N3dNuLcZ4PpC",
  "key30": "4L3q2h8Xp4rxUSEHssmescmjEuKBKc2NrgQyKiYYeePCJvtpEPax8TsunpdyFLg39cLA7ojKuJ4LUMFY7em7XX62",
  "key31": "5FitB723LV6jnKdinLrGESB9Yki3hcntXEbM54iJuJseWsZzkjhVhxAwMNpqCjWFPMkU51qeF9RWwj62VnH1YzJv",
  "key32": "3jooD7G5B1YFW36p4Waur9CCjpcDXk6nrDDZN8jY4k9pTZKe8FoGXDUCN3W5Hgz7aN3XFC2gnGt95VATdMXqwYwL",
  "key33": "4MBH5gegFdYDKGK3eW8MWhreUnWUPmeTqXXg6Trt48YgRVAra1MwApxbCVUSmKg6vT4TocQuGasrUyAzvhmnXhAU"
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
