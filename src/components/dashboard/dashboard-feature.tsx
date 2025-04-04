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
    "5UxYj9LTxAVBR4YvDRcSFdCEp1S3N1C8ngVXQJpsWVHrwHzLy3hgBHP3xR5uAEDBD3riRsje484XPwH4p7DsYAhQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p1Anwndtw1yCxF2m5hdjMbbDwZizsX31DtjmS6SFfPvsoMF4ZzZJPwnpUx62BGRcQC4Gz2Wa2D63aqBBs5E1XXS",
  "key1": "653D3YLCKNg5ssUWH7qk9H49mGt5byT2J7H4Ld5tYwY5ACmUtzceNeUXfE4RScaqdGYcUmwJenYQSZscRHb9HzhN",
  "key2": "3DJWia7epbG2T8LuFchWjrHeTuMJiwD9wJV4s9LA8nFqCL1aUgSwk4e4CU2TRzrAjoctJf73UaQHEL4VWYnkihJD",
  "key3": "24a2FaLfqKGxxYzeEHYC6ASK4JUt2gedXKpzdLoRko93yUdy4TGTJrRUntDjsQ4Mejr91PTh7G81rW4qknRqdKT6",
  "key4": "3HNdZWdz9vNQUR5pYfun4pZ8C4TuVkPWD3WP75XPZ98JKmDEZTnyAAX2rj6QQA3C4zR7QhqbWH3Jf5UsZZN7xzrH",
  "key5": "2BENsGznd76QSxfGUmVk2iR4CuUKBjuf3dvXjq6oyYQnBeRnDauTiobcbAKVvUkyimWn6veDirDudi2HrCeQfLCe",
  "key6": "33gR7AQx19G8yc7sH3pZzheP9QWiRQ7zYczr2ZHJSMyv6idMDMVVMTXUfdfiX9ybf1CRY51JBsT3CUZaz3P6akqM",
  "key7": "3AmfCYKJWWnZ8GSuP1vNWF6P9t8Vhx1EEPsUiegE1nu8eLGQc6RUPjmuUhSVV5Rc7LqrHowUma4E2JmcqoQcCqRg",
  "key8": "24jWjg8c2XCCVUqps3MNH9aYjQzKdZkqtJwPTkL1wsXwWrQVma4ZMsYq4Xftwo4192kKHXR4WFQfQvrTb1WBaqND",
  "key9": "PMj6M4GioEygenAZ3kfNjWVrCtyFuvBAPEYdev7XacmrGZhfcWYAWH81Uwfng2QBiXy2K1WRi1H4E4ACb5PXvdR",
  "key10": "5YXtE3xmEyhVNKpgf9JhQYAcs3dtcRAWdkZQjeFiQFPmH731ds5sAJBddoG2v5jmk8yMMH9CVVerDp9UEygXzPUU",
  "key11": "38gXGAeQ5d2HJPqY9onuYRQbjP4o8THfU3Hv8iNZHyvEdqAYj4MyVb1dkoDybZhA1qeTRJ1Fw22RBXeEoosRQNkK",
  "key12": "XCBCi4Cqy4DoCL2Arq4Nuq8Guk2FtkWvV5kF7AU43TpmbHM4vLjLF5H9jMMuuUYtZvSXu5pXbCBcJ6Myj1TexUg",
  "key13": "XF7CexmAfYnL41ZQ1pw4dREpV3hm6NvBwuKwUSW95GMwns2S498TEqNU9k11rU6RXo4zuFqZ5afhqHtcwCtAzML",
  "key14": "4fKVBCbRMEVbkMZhzJVJCuESZEbttrNWhWn4XHXr8Hm4wqCA5DGcQUQjY4EykGxsgSrFcaLHk72EYMkMcnsSzoxb",
  "key15": "5RF2VgtHFCV27wQE2FaTgMwEdyogBFUb9LHPeAdwGZWv2yvunseUozLSqSyzh6hL3PTFdvAwV9Nso6N4FfmKHKBw",
  "key16": "84oZ1iwvzcuhHn8FHY33xeDCxceXAi4145W2Y8UenPBC2X28GWX4srwRdpTpiQF5GX8eGie6eQ6PLwFAzuC1huw",
  "key17": "24bUay8XRTdswNvMrQYjsS7ZBvDoFHobkd4z9Eihft8ZoSVmdcKGLskgajKdMMT6zrXr4QwbDPhzFPUzPuQCfPu2",
  "key18": "mdwiCt6Fq3K4bLtXvvt6dGxo6mVdBvDHA73NpNVos6HpSLA5wjaaLSVDRc2YoR5HYSn6nFeh7YwTBgMEE78zorR",
  "key19": "3wpycM5YHq7RQRDxfEMLfj2Yt8aWo4tGq3CcVPAgQtwPqZr7qCWKejEACi2E5CGK5JamXSnSv2k5YooqH2f8qnss",
  "key20": "35PKCMvgr3BaxMuCGcC2wXhi5ZzbpJVCSttcaQDcGQwbCDkG7WJU5zFgiRnc2yp9xgqx3xB8VP5LYruaLLowj2UP",
  "key21": "61dcncC1oVQk5NN8V7RKuPS7TSaD6iwgFgmVkq6QSUZZrLTEqpBDnktnxbSsapUWv7cNpGjLfGLAZfQCh3gnsyqX",
  "key22": "34QAq1RQhLfTYDZ7MLvpM2SqLMkA7zjbjDDuPQQdcwSWpvtAEqSZ1YgGw6mGXXf9LdaDgEX1KyA7MnaEjdZTSN4y",
  "key23": "3bEHtfroWkFwsrExG63JF9zKJJh4BNoaC9nvu7vdpvCUkuPPS8EP4ZicyC1hNF5eWRQiALeXziVQRfAhZUiXURU9",
  "key24": "4bM4U1mvWG3Pt6PQJATAiuCzHhrYwWNQMBWM8QB8pmxDn4oKs76NnUJ2vf9PSt9AEWVfDjJQYtULfdSdzTa5krog",
  "key25": "3NqKSswrsBcGhhUmpud21x2Nw16iq8nbbM8mE4gBEophdR46QGVrRhBmSpwzhRBXeJSN7EQM57Sjc8x2rP5m7USo",
  "key26": "28Z9q25tYpSSGv6NsZvJz5t59fQWFBEHyEktHLsZNdnVEJbMnAzNnJtuLK5H6rE1fgaYK67D1csrxdayr13Kkzkz",
  "key27": "3v8ecVYU3Rv9bv3YUqq2rQhkcMdDDwQgFJaBD3Uk9EdWjyeKL1cSmH47n36bnhrufWQ7uBdHgXj5B49ehcLmtDaP",
  "key28": "5ZqPLEtHVUB3JiauW1vvj4NdJ4MpwFgXv6XEodQ4fh59g48cp3fyP8k5JVUjz2ACirhm6oi8x9YN8PQUuCpGyDyV",
  "key29": "5zsSRYz2FJQ1AZez6sp6APVe7iqP5sn5yh4CHBSoHebXEwvtQcA44psJkxWX1zaMPCNfCQiCsV2ycqDjvSvWJL9r",
  "key30": "PEpA2Hk8jQnY23cqsceFse9fbzsksZRT8pBvHSj7DDfw5SvQn8MsX9TNjn4eb6x2buDUvy9pd8P7Lhi5v3FNG1r",
  "key31": "GgSKQb9owsxoTMAGWEt3SQLBgdARhtGXmKKPjRF8W65yH36QgzfYmRQZK8hKZpSwJvvqooZJkgmWhDmi6sXNzCR",
  "key32": "5g2xh13BcepAsSMJVM61AAx67kTVmHz8jkhBV8oho39nGBETBKgUjbeGwkK9gXZcLt2aYNqF1bTvhCf6PZr1QPMg",
  "key33": "5khg48fqyAtdjd17VTnbaHoBwVu58E3TMitkpVLo2jnGLNWc2exWf9kskTSvmyjd8d3YgLeWjbYaDrT7SauTPvKw",
  "key34": "51niSxajtKQwyUkfHrhJwCbxdQP6yrtwTH23aRBEngpejXaLWQeMqwQAcsTShHcFBfvs4umCvvYy6UwqPsBLSp8v",
  "key35": "233uthknT5688QpFei2VPoarDoDit9xSjtXraA15NnTv1bJ6tfdvoPhEMubT2pUm8oQSTS8j64AXwJh3YXf1ZKpF",
  "key36": "3aE6BKKmAX5p51FQJkvnRRSScKRZ43bPV7yki5gvhJSUC9G4uqVp8W9tcVMkjpwRiBP2ScMf1zvReydWNt9k6iYX",
  "key37": "3N2Eh6SjqEbj5dDbneTBzScRAG2KWyPpdBT3qLSEWEJ2ZaXa7UwAXhhp7D1kMEFg2EZ4VAoPiRdJs4Wkzp8cfxps"
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
