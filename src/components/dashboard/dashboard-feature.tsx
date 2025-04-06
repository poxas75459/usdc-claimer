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
    "24A5P2aizyFBJrTeFVo44LnZ72ynLc9mQbTzJtHtc8HKBMkmFFTPDVkxLjS8BNLemvanCSvFrumv1gzH4FAEyYgz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WbAJwe4dhuLKqD5GLk4ejvnMeWqrDYo6VJDb65kzoTupnwWN5RZjmuMhGbTHFxr2DaTbyRcxcyLaH6kjQwiV2cU",
  "key1": "2obuouS8RfYFzAmrJGfXgnkszn8UWU4qpyX8Ca5z239ZRs6hSut9wFNgyokH4PgznhTmAz7oaniFuhkabroLn91R",
  "key2": "585AZXJfSZ36bBNkVtKxDsbQ75yjbpdSZxzHVdPbqt2ujL36VwmqxQPNEen97dvb7baQTSJQYXUrFE8tWwRSgzq3",
  "key3": "5edsWiMBwqwL6sfnHBkugjaBJfe2WmFXWfJWLx5tYoFa4dnkUa6asYRDSqCLqWu7CCLXVaChkp1ZZZQrQMb5jh94",
  "key4": "2RUvPe6N5gXLQmH3UAUUevEfyqU7wAg615E2cdoguGtLpicvSXZmMRcSKqxsJdCu7dXdXsrn9VqXAmoPpbknd5gL",
  "key5": "4FvSiy1NfCJtkvMSk5ovZxMBT9EkPc4JBiTfxu3vYs36exVMgVFPxXeBWKFgPHhkWw32snv31RsHjraLgecEHJ2y",
  "key6": "2Rk4mQ2khXQhUQDVAEcqwndhYhUg1MyEbRy55vQfE2TFqvvWC8oDGtiXSBkLxhqgUgn5dXSsPxVh8fChwpgbXQ7k",
  "key7": "KmwoxDgCeW78wyYiLdr7FRtVJhvqLrYEnWuRxZJTtxUd9DsyZR8ofyEjoU5fJPUKF5yiBJMKyo5MxbYeDTADVyf",
  "key8": "22Jd8yc177tXQ5wNQ4czga8n6BPbRJxQA3MrKedvgRP3YfFKdP75nEeNkiq5E4XjFdSa1GKut9syPntS9AvAwzCT",
  "key9": "5BZndSqEJ3sxjBK5XwHFWFG2ct3vMFtARYcALzCvHRqLC961rTTe7xzjKqc8eqrQvdbYpUDXS9gQgJ6sspJSD5ny",
  "key10": "3cfjW14PhxcJVUei8HELALTVAoouN5Q4prVMWpjXi6sQtR2T9qDj7e8nB4APnB7hUEFSSEv3rHVnuBLinAekvyqD",
  "key11": "5dBTfjeKkVL4ovtrrrM4v8XgieVW81EDQLu9uRZrKqqBTXYT6w3mDGzvYmxSwfFkTz2eHLULhuMvLdzptmxJFyaC",
  "key12": "38TpYqVGG5A7FmgAPDrfSf9UUGiLrDdmH7yco74zZvuFqoaCKp5fXxDPUWGGEFsGdxEhcgL7AgGCWJvYoswa6P5D",
  "key13": "4dksGYTGWVP6rp9jh1BwH6f2wxVfctt9UUEouLyNmAfmjjVMJXRXhgLnwD1BDAT2q7vXsiXvKgjdsRHYX25NUQKz",
  "key14": "4dv5ZUSVcGX4pGUvAokZBNfz4KRnMbMocwj1nonpgav1HJhfUzb5XBNMNdXRNXZVsKcCGN4RTG7tEZJhjKzS2Gi4",
  "key15": "4zKed6LeRHLvHgVE1FgvAYyXC5AcT1kaK1hY7UxWcghufLkuEUDe4P6HPEo56uiQx4RQASWsNeMq187psaFoUNCm",
  "key16": "2akK2zKrMBJ4qqCVJtGyske4vZHdYhgsho8fFFrEdLg3kiEo3CFCqk9sQbKsk9Vuq45NHSQfrsUNRuUzydoNtKsU",
  "key17": "3bggkMnZTpEXy6zaJNGWRWGspE9JDhsFysvJufRxafmWpc7U1ewbt3aVLaMycnM5UNGgBfsG7JxEZ9cwUsmD2ANU",
  "key18": "3zcFjw3dg5Xok3B87fMxXkeuyYhWoRFE9bCF84xMXYZjD3RrCUcNv4WgNQGu3TUFS9B9xtMvdjCfRBVrAHjMuaFe",
  "key19": "3bpdWcZpmdHz838voorawQsX2KeBiiVYeSZ5F4NfDko6zA3iuAxwN2vqbeLn7qoRuJEA2EwbmMPgC4mNw6pFJ4Lo",
  "key20": "65QKQkba3MdhpApzvACxmahKWSVGy1E9RR1ZdccFxWEsSci3TwHo4ahF49pCJAZLPRyt3THe4GS52xBSGnk6iinJ",
  "key21": "2w78XbVLaQg1soawzpSAProRVK7E4jXRg5VCFJjEygFEQjhEVpjzgxaZPxeV7KFJF1qnTDATg7urac5c6xakMgA4",
  "key22": "28APvpJvm6mU1bFZVZEJoQP8VXimWzgFdDfRqopc8CZhtnt8BW8kUW3LfpUDQRn9ihckaSJip5Qjne8xo6ZFDR7F",
  "key23": "2S69SbAAzJBT4LemamHSsK39PeGQRVzAq3yN4WAcZXvgDzKeXiR45e4Qx1TUvmvAnBPNGDP66NGKc3Y61kaX3hVB",
  "key24": "QUYV5Dx1SePDi2FCULVWyuvzdwEZimNqsFFmWn6FLJx3L8cLZ6sWGV26uU8xxgv3u3bAe4NrCZLNVjDdhrEpH2d",
  "key25": "2BnjvPaUA1i2L7VYLqLyBVrBycnCoVRYQpbyXgMiPNpuXgLxG9A3mMK5YrWC7WHyZDiarU95Tzg3u6cBnnQnnWB1",
  "key26": "zA2j4StCBe7taLwL6uLNFcQ2Da8Lt7B3Dr2CSYv2bAAAGXRPZgbmNmf2XDvASmw2LCD1ASczy7iuSB9nEjL9Fdu",
  "key27": "tU2mpd7pL2BMX66ZxXtTCkuorkCbBU66DcB4dPTkTfQXNACLhrNKeKRR4HmK2vpsSRNqECUcCfs5awQkePEvABZ",
  "key28": "445a5rrqmc2PfQjCL11n7M8DXjvnZS4weYxWvkye2tQ7xVsFdEzLri5CXJ69pqnKT5BpKhSuGuBYY4foUsp9n9LL",
  "key29": "2yDK7rEwyDkZQYguPFBUf8d9qrvEjMRjrDsDUGyhZ4Sb8NfouDg51KcEA1xWcWqNXZzbkSAe4HvmMh7fCR8nkPeh",
  "key30": "415EWXMBuaa5qobaW8nSjg4GD9emdADvckDaDes8vMkxAgWSoUF6Mnk8XGV63UNHQkTvyC5WEEGFyCPUfif848Rj",
  "key31": "5qtXJHdZVfkmfLAyws38w6qkWgY75xkySS19iYrfxWfsHG6ozLUR3pUdD1wvHPmdNeKuvkZwDweGKDkr6nV9LrTk",
  "key32": "5x8SNdCv235yqeepyVci3nVSo6CRhyiXMAst7yGmEjnnqJT5szdFa5TUWboCtmRbEhuomWKAnFbENknhmhPXxCy7",
  "key33": "35UUpFx7eJNUdE1WcpRVgGXePqh5C5ErwUZjw6fFx42Ns8pkUUaKRKr2jws5nM4r3y5s74NVUYgrU5k2ggFAbGfH",
  "key34": "xm4MiY9euwrPRGdhWspboXJ7e2DBwFfMNRSXAx9eJmkqYGxQEMeJm8ArAPDYEExmF6sb8CERM8SaqriQ6btby2g",
  "key35": "MBXCDS9fQF5Q6SmxB8Xw7JpJmk5YgNzG7jBqjQgY5i4wsi2evsgRftVkoHpSnZJf6jh2ygkVGksG9bp8J2PsKVX",
  "key36": "4bQi2rCSFyHogYyw8JBEybdkiqMKBTQEiUryeQBrfgygyqEwnz1JJ2KMdQKbsiwGC9Q4qwhvfXRkq8NirWygJRe7",
  "key37": "34iuAmvycZtEppBSFycZm7chriRNYAZTkrhXAaTeH6yywaFvRcaPVGpUYfjYqfSCfwYkdA3WhqQG5VbmFvrRxaPQ",
  "key38": "2UCRtzGNoS27FPDeEUXApgigf39LguCgD5w5WhBWqo3a8sqzuqNtXibPbihU8rua5uZLkm8RFoZ5TAbJSQrVfKfe",
  "key39": "3DMS8zcTLT9Ymv19ZXepEnkQJtGRYWFgAMmHs5976yVg3HRxrc5DRHQbo4UJkbwHKJFcBMJYLor46PiPBUiEP45Q",
  "key40": "pUGAwgnJmSWvF3hQ4Bg8fJ5HXkLzsfGoCJSdHyNQDJcabx4JiHhB66yHobNeMNvDKWtMfrFoYj3hZ2k1rum1QuC",
  "key41": "3gVspxf6VepH7zPDDPS3Nrp4UR74QDJCZwNDVLpVJWB2LbnjRYMkQPc9owYing4eK39LqtkFYKvZYKQCgxrJTfP3",
  "key42": "WSn7NYwxA47iZKKe1Ua6QADWyDrvwXLuxFz6bmwi7Se3r9pQQnx4rFj2YjbguFKYCjnWQsTfKQB2Tq5u8U36GeK",
  "key43": "5ZFiBAvQw1YiM6fbXT19v8KCyjpJrW5ZJmT8Gq3PenTs5KYLrKDAwizUyFQamRff2k58swgunMksLeFZ6FfWpZuT",
  "key44": "3UhNwJnMPXdazTYHp5zTEhHvq1hHDJFcuBAGA3yTam2kGsL7JD5M9LQdcWpDxaCBKACNoB15C4pVrXKCFrD9MypW",
  "key45": "3XU8ZWnqD4NczFGuJpgC45s3zRMxso2KPQS7ujZdXLDKthxXPz3P8An4F4XyuCSuZBBhcV1DQ8DZ8GiromARpA7i",
  "key46": "5zkWX3G2a7opEttrjGSiEuApGccr3KMHws9HQMd3aDw9pZLKrAqbp6XTQxUE3KWHeVajKMxbN39S6fuu8qVqHJB9",
  "key47": "7XSCMHCjsTUdgkdCLGAcCLU9w26vLKJAY45EeaQhrd3vcBjpSvK5Nvv5Y3RBiEaD8ms2fS2HU4vMWsGgscMpLy9",
  "key48": "HnFLJGucqja9nuq3M1ze8PuPy84dkVtKH5AS3T2k6YtQPWPjBRgiSRGcx7noxNucPoHymi6cspXFcX9za4ttUsf"
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
