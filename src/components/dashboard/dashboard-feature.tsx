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
    "3xmBnxNgwCR1ayxiJUEswUsHQCFqgQVQwLDBkyX9hPVTSUjt7RHDfNQ97aGkpRNLgMLp4ZEKuM7KvDZqS2nZD3MQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oC2P6AdL9gRU2ZxMw7etpAqbCVybiEcDQcmJngbcAbiVqJ7cVVA3MDu2b5kj4aZDruyjPLDsgxgyoTZEmfWN5we",
  "key1": "5Gh61ynuJvmgLBQeEvVZosx2e8c3RY5bVQxRjM2dkAzC3gWTomrC3vkGSQJpQojdnXS58xJ7mzMZLmcaQdebGYRo",
  "key2": "454X4WwDTp7QHq1TvyP9rgQ2gkHW6fmZGwZZ8ZtL9FiftQPFDphxZnoyex49TqpYWDPu9kYrez7s1QPTp1ptjgJ6",
  "key3": "4J33eNNMuqXHJxv27QkVCxsYjz33NZ4jQ69JtDA7KFpYM46oxiP5EEW4ef8AwSGhQRQcxUiE5K7hv7nVyHftKtDg",
  "key4": "5oUmRCwYKDDbLjXepyHbvTsJhMwM9iEmfrogTssk3BjbJiyN7aNV4LqjWhT5wSSU6iHwpjLNdAL7sYAJrBbZwFfZ",
  "key5": "2iBnfZPXbd2QusFBGxsHeuDVLp54fp5jrq5ZUHkmE9q64urf3ZJxaRocfLXExj4R2y6a8xP4NTwFpty4rT4VroS6",
  "key6": "5JuTzQTBpT64sHLfZmkyxLcdUf7f5z5PsKdutbCh6NFjpGuxU646R8N1JUJSLSUfyDLQMuWRzbkcFgqz5F95UtmF",
  "key7": "5asMkSCUJsHJ3gjyb72yqe174HenJXQZoqjwWCYKGR3WQLmDNkFJqucugRMgVtkkzRmTCRpsme1oCHLzabkoFmzq",
  "key8": "5BXHcroBsVu4LVAmDknEkwqFL9PMGRHCDEri45igQcCLdfTWa6JqDwMqDk5XDM2itbA2tMoi1kp9PT7yjUWmpoB4",
  "key9": "5F74f6coN1TQ6Yh1x9uQ9x4rXqEG3bPFA4xcP3TpLVdY7bYUm7UieBinJReQ1vVjd7MTvxEnKBXFtb5R3W719ZLU",
  "key10": "4K5dsFHP6hW2ZQwjDzGCj521wTNDAXe84oAwvyiUjD1H8pLgrTynj6UaxgD99ugB9uH6Bj9f4qgd4HhX2SDkPQsf",
  "key11": "51VZCwb5jTu411Eog6upyecnXqBCLHxkAutUqBfKwLjETFBuzwJdyp68HmnA1qFjCFDmPLjxCBr4ozALLBPZfNpL",
  "key12": "3TRpYHxEB7ZBxhgrZNL4KFeh7gYLbDeWYBbr1r7h7n89qzQ3CqYVa357HeLuVm2rFnk87kj5FS9p4jM8nupVoXWN",
  "key13": "XAdzZCGNyqSCVa3EUtTCEfuVKiJ26YhBd9DPzsos16kg9HeP71FbmXBjVGswnoe9GoLJY45XAE8oJARiAUH3T6F",
  "key14": "43tQC77oEf1uCdwxHMy3kditzjEgPCiAbpx1vUvFTGiqZCDsTr1ovaTYUGzao5mv7EPtFbfMa8mC2ww8fNzFvotd",
  "key15": "3Xn3wiMEYXNuFWJ5RtB1pf53KTYYrTQnwBfzjd1PVtasR53TpxFpywC1c8QwxJcbhy4jyMxSKeS9cWd1WRiWZCNe",
  "key16": "652VKtBcocqJjHAenUdJg68FUmLo1DTnXXXB9WKzRNPemGhXovtSnrg9LGxXLUwiByUgcbseay33vUedT3HS6tkx",
  "key17": "3iXoRz38sqG9uqBbtuUQfL1z24GHu3zvMkwqedeZ4SmKUGNWsvtc1L7voXtbgXs58A2XtRcpCCFHnf1MzqVDx9Gw",
  "key18": "2FEHr9bUjBUnGMptQMi431Ftg7LTFtSiND3KF97HgJpA19kbCnqVfa3FJwbWZAyuSmzBMNYXvWga3ku28QosN9Je",
  "key19": "5t6VwEL7VafThFzWo8u2yYYebMYajs4RYjWygr341SiyU6bWxZfuh3CDK463pHdSTNyLC7bToTV6tNfjHgGYHeSK",
  "key20": "ip9PtesNPkGf1HN23wJp88Ma7HhiYTrtYHB2xdVeVZAbQxcqhwFobntnGiJf3FaAqfJaJPLjNLyzANZxGZjG21q",
  "key21": "5oBtmuoc4PB4TwEiop4err7hAik3DVJjL8iYBaFTgD8GnWsbeMDCipeq85cbHxRZwwvYrGdbDnJatNUPGutF7T6r",
  "key22": "2i8ngovQCHRdEKTEcNzP79Q2DSJavDdikNW13pyyCcUHkYK7pHDsfDo5ZLk21strynHT4Jm8MmudFeEmAmUVbc2W",
  "key23": "4f1cYdfypcqdXi1Nz66t9oZuaeuTHk8FbxY4VhEmXLBBDr2dqYr76iFJbXdh7nK7xYABgXGVGx3yP9y65X7yQjpU",
  "key24": "9HzNTLaurANdGP8de5yEqsi5wxFEVqYGRxb7xFGKpLMWNnEykc2erF5oQ1iwhtEEwK6u1QVv3pzBjxso4p6Pa6h",
  "key25": "3hZpqj4Vx3BCJNNGZFsAc2qoxoZqmpifahqp93jdCZU5xhcj2Zb2xThQhLURbf1ZdE2EEcqDcVFNNHyGj17ccKVw",
  "key26": "5yS7yqdwv5Bf3mdwfUVeu2xQRCUAsEGnmnKGG4Kj4LGu2hrQ4QmmEgDcDNqSXTux5Y49ZPhWu1QskTmziuFv8eK3",
  "key27": "8zzvFHFnqto4UGfrA4Z3wVGsKwDiTfH6MxkmofY8DgxDbbrQQhdg5puppAmwjYWFLohPRbC4QbiWifWJcR3YZJe",
  "key28": "MrgztTuETUyrbhfejPT85A6G2wdMg1t5iNJsNPH1sDaRMWW85NAqqt5PkFk8JK4wENbBiXLzmFY98BCwqkJRSsN",
  "key29": "3g6BZpxGaRhB8KMknRaomADsbhGy4o6WeHGzqH2tdcXRzAbsxbfrf1KaF4iHeMiL94aET6u6WRFZMZdiXQhpcaP8",
  "key30": "4T5uQJp8LJrtFd3UGFJzDZUQtP31Yaz8JouWsrcPrsFiZZxi7th5DqeGznt9nP7fcPJNttuv9G983pBZm3C53TdC",
  "key31": "4a3ykKeXXgDmsXxprfn8kJcFq5JHbrNXs8AK6k8ySDuCfm46q5B91zUC8WzdrWrBFvJYhguBHBi2njGrw9xNfqys",
  "key32": "2sF3jzt2XBDsr2K3UJRJ7qjcsaRFyHKA8u6AXuu1nsHMvRzCuvw62qM6mMYa6ED1MgHfSXEeDLUYBteY59vFQK36",
  "key33": "FRQoGwFjPp3HfUuvm5CAvTKaHg7F92gnp7GnGcKndKEew94e54asP2KskYKetLRd2gJMPMX6gPk5gkQCTPssxcm",
  "key34": "3B5swxSY9ukJj5kFKjMVMHPSEwf3M9FaA3zsEpLLtTpj5QxLvZwLgfwftASTtfYRLJA8ZFNbDW8taD15oZDoEqbk"
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
