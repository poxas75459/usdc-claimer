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
    "93VDicPD2YZtWCzvvtEZZgiFKVzsgm58dtRfCezPWvc5rPYAhqTQ3TQRxLXTAgCxNAaeqcFCGwdosRztrFWra7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wJS8AkUQGNpN6ee4yKLpMBxVspua7y3HGKK58kpJQLQCuB1mzWz3LxLxrU78PaAobm84nMEZgjqWRXcJ7qjApjr",
  "key1": "29eNXcbZ1gUaugaDMfF7XBXqFuq1eaCyhkdRQmVMa8QJqLQWLm4M6c1PYMFeEwX3poyFnhYKTmYWDiFPEF34NBbr",
  "key2": "36n2s2u7BDy5bGcjreRPG5etkHg8NiNZEMxJ7dkfEpyz8URMq2XeuRU9WCG5A5Va8WiArAyy1qrjqyfwCMzzxvjr",
  "key3": "2yHfuSXeX2cjn17h6SqQvEUUg7h8jJd8Jgg39ZeXAxJa1RXPS18PGmoHcvbYMjBdF6LD4uKYbbrfAhEZas5jAMTd",
  "key4": "9iFXBSPvdo26TYwfB6nLiYTEMz5icd92TYcoK7sPLoq2qYD96Wefd9B9GMo42vRQKQTvJWY7MYGXEBDNy2gVu8u",
  "key5": "3ptxXVrtWF6xB35UK1ddnNYhbv51v6KDWvQW3CDJV3FSDsNty587CpBe7TeTaUMQ8FvchsWGakS7u5KMsruzztwc",
  "key6": "3WFxZfGRP8GDV76B2APwwF9aaUv9KWs4VoZzideiuKc7xR1JJhCqzpaif5ARBkAky47dmWDj7VTEzH9tGRCwDzLT",
  "key7": "Yu2WpWMDBRNMZqPoPh9RmwHjeUJoZM73C6RPG6firPoVVfkHGhPd26mvzky56MvyJ2pzvjz7tyHw7zzGTrRPXDd",
  "key8": "5wAg8DK4pBSk6n3Tm5EAmNNRouaXeT3DD3v3B3eTRC8bcTvUKaqhLbQ3jXFC2riFfXh9R6t1sjC2SLST73LKf5xw",
  "key9": "4j6jxuB3J9WDDCuVgHRxUBK4DKy7YdeDdrnYF9YwPY7swDR11QFw3V9ZvCboMvyrbWoNYvSQUSRfHS9hGz5p2zFp",
  "key10": "5RvBaJmWabB96qgAG5Z3zom57VjiHMVtxuvnBY6YJ5gCgncm3HeoVFssEFrKmzV292eRDeZ9yyVvd71PvKuqmtDN",
  "key11": "TUzvwzvd7RswW3sS3hXUCZ1yVUnTfRvbfScAQYEgkxMKaufhwbzuesd59HJmhBCJ53f8Cj22USfkDhmJmTxwxNq",
  "key12": "64HHm5UDpnFZkg9cLivPseeu4KBGcuEiRMHioFvJfdfnXv1neRHXATTRfjypeGGx4kU2f3SobLVmaZWn5dx8pFze",
  "key13": "3j2K6JFB2UAnHBGPXYUeT2pSKKhgBNPMqaDE3j1N9U8yrKHnTKhmk42m8cJ463UqkXTmW48WspHP6GFS3ZjSWPu1",
  "key14": "3CJSf4phZ1ts8deirB1tt6bLEnc75A94J1TDNjo8ix6jSfmBQJnDP42JstDUvUzCrD1FT5bRjWeCrX24SwFiHWP6",
  "key15": "29xRZfNRDHAZJxbMtioVKFU1mq1kaxAgVtirfeWfS75t8SyLNARBi5hvwEDYzHywYhnb55vMph17QrvD1hVocSsF",
  "key16": "56qUp4i9wdMP4gNfDq4aD3PLpfXgG2rtGZnqpHwV7d3rb5Xp5guDCnwQVy4ySHR7XfTbSLD4sbgoaiRCZrPV1EH3",
  "key17": "2aTHzL4PEAuuw7F7xkJDGL7VNS3mCNWH5RuU12z2X8GFpArXZnAKoNHa26Hh3LJxuufhZ3GSJ4vM6ZFuvMbDg3Wq",
  "key18": "4TXDKYTyLN6SR8sULiuY99fRFs7zVo2BwxA9ABgfjxrk39Eb9ZKZ4XdS56sy8q6dW7i3MmmYKMsFKAMLyfZYnKCg",
  "key19": "36ry1DDZDyNn5rPxc4Xzfh1gNmeyf5U1aeabwWVkokho46ksvgkDJP88ABjuemBPPw4cKe8PrySweefHquZSHBUK",
  "key20": "4kvzVk4TXxFWLcEyq6C9i8FFARqUQqtLt9Bkgzjz3TAaDGzvwS8vFZAx3WdcukoBtBTdLhxDxP2JUWfxVBbbGKQ4",
  "key21": "4tovjn7vrAAfD538R3TtunaycHhesHEDLRNQSP2tvrigMqKXRC5nsHEC6eDgrg9o9kB5PvedEuTAPQsFcsSargrk",
  "key22": "4qtobrXQFAFjV5TWUPgQJQQ1xwFWRJCHxjYry8ynJEg82CXU7nxiSkUR56RfDkp1VtnzujS7rUH7q4D6xd6LfqbX",
  "key23": "4cdUN9yytdDNwkbmDPUv85yCe1pWd7wgZczExtMcx27iB3CiMwPyU7yywFhvMr1zFWQzWMfSz7jdnS9MCR5ZrKg4",
  "key24": "3crQng7RzbWdaPGCTnfa2M5dUwHJnE2Eb5FeqZTRzgNfC6EznZrgFJKigjrE3m8r4EgL73UcuMrnhwcVffs2iVuu",
  "key25": "5AkGUJNskJgDtZm5FQGJNh9EcH7mspqc8LjdJsVQUtmmajnTShV3FdFQyu8dThut3VLrJmgKHQweB26p4BsHuVVM",
  "key26": "5cgDJKxMK5Hq96dcsYGNhoxNcJ6r2rCzRUDgpnisU4z8QaDJnLvCovqLwms6HJrQaQn2VvDLNDCvTc92wSi2LJn7",
  "key27": "1MLvG2dxKnQuPQqkR5yGVTUkp2UXfzQaTcSZmLjXMwxY8gJkyAXHXz5sMPURbAHpNCo1CRavjf9gjvnzdKkePGb",
  "key28": "4USfxoBAjezZHhB35msVMf7xtGDpfpkm6utNJ3fnWyBn8qSysWnP61fQBVjsDjmzCoQ8b5f1o8tp97mFnYwWpLqf",
  "key29": "2CyMVwfg9TfDg9SLgSqqpXrVgH4xGwdhRYhg7udkntrRUxgbJgUJAXSaaJC7BQ1Cg2m9vaaEFfx1inZ4bJ4cQSzR",
  "key30": "35rGk18eZbRQ1qTAKAfrroFtBUXq2tQtkT1d2RLhbz5wrYJDEhkinRVHn3kSc2tcr58kUmUDc6DnzAda8s9TE7qQ",
  "key31": "3rs3GNoUJrhFRcT55XtjBRiuAdXESKjfH9HoPzU7MxjGgjAVDwrgzGcRP9voHZFSdGkLaGvbUAuJaiDN2eNuhnD5",
  "key32": "51LCR17CWxNkcyXMCiyTZndQJ4yJD7UA1Ke3QWVgZJ3TcMHx4gXHCYGpNybvqmxsYMBABEoSijZSXk1EsV4gRGSj",
  "key33": "5qULYwpfeMpWaq2HXhcssGTT6b4cTbxYuqT5bWJR7Qz4gq3DRGYvxhn5rjQw3YJ9gmPPG4jsuiAadtUmL9ihgLtx",
  "key34": "4BHvLMpTq2Vgvxqt6nVaQShwffsfmk8Yo5snRwTAcQswpLGUGgmqno3mFFLSQMjuVRFcgQFmEzaEbMWtzBUnySqc",
  "key35": "2iBsjDQxcsbFXSGkLAu7LFhebfZvGUFewQL9Wo9V7sAbLjvgzAEXFvVafysjuqB2DyKxvUDV41KcGze78KqhUPmd",
  "key36": "4f7tpnwYhhJpiQoGDuwoJ5jNtmXLKqLp5C9BuMyv1yakJzBGvW92qgvyJSRWwM1a3fw3Xc75z7gFq8GKajmShvmt",
  "key37": "FvsTA8cRHorbkSSYSDoNeRZaxi7tweUgmkq9kG5R1BjC4Vy5y1Gc1YCxCzDnnbXeCdevcLCZu9TQKHPkNyyMYUN",
  "key38": "4VXz13hQwdQjC3Z3CTKj6P3N1TsNPLBCSXTkMy2n4crnq4hKWJkGPM6iP8pCsfLcNBToxgdskgyeyN6BGpbfDzFt",
  "key39": "Y3gRpN3fhGxpu6FNpgo1sDsMhciwNXqVhmCWwuHDshiYrQSP686C6SBPvJD222AP5hhW94GyB35Hm1GTYA7BBVY",
  "key40": "4i8m4CQwHxoGAjiMhSJk9iMLk1dYeegWzTj1TZ1KERgeandPHQ2yg5baqTGEGFekvwBHvutmvEs7fEEbfFe3fMTC"
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
