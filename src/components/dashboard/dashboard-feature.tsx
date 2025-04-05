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
    "3PQz2RA3ATwNYP9FHDQKccT9EH49uRf6LYsFtCPpmmCfKVTeS1BJL5d79aH5PA2kxfULY8SsA5FhGfvjmCqRRkwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21XAh8L31GCNDEM2LA5HUKvDgzhPTgCM6rcgBcpmD9vKKusLBWuvbNEmqbPg1k6TyYyQUyrz1BynjpAQ7ivhnH2n",
  "key1": "RF2BN2RJKtdLbPDAALLtLHPhTKhkaZ6mXRjYMsavaLhrewpndRU4wbbHYrFQFgrTrp11TtiDT1qW7Ft7yGY4TPm",
  "key2": "3G8LCgXZSACgXCp9FjxUPQZX15xPbBwznJtG2jqTKhXzvpRGcLmgdXGs4ULLPtJcrhgD7Dsos92c2PzScgD2T72r",
  "key3": "5UQXaKSvVyiv1hYN41s7VzwfSz5NVEiRp37mETvCJmVYXVR2qBWT7wqoR1d1Hi1FGb7ih2kzXwQ9XfTZydFEm1Un",
  "key4": "25KZLEnkk3jsG2whMYkGoTNdr6mqR9FsD9EzHNcrzeoaBgje1suz2DHCSZaHizK4J6eYN9Ta4iJDs3ruoa6GKo6Z",
  "key5": "4wpuK9KvmKKztW3VKNhsbb4sjpuF49CHWSRLvCN7mo4wD5s9vhsfHeXFyeNykDfTSStNjtnpMRvDYWbH7ZKtF2aU",
  "key6": "5Qcrm3ahTfCf77qd8Qr9GZxL8aeWD57p76qJr4crR7PtUzwMJMw99kVuRLXZ8pcfZ9apXjDJFPcy1NzA7t5Z8MbZ",
  "key7": "j29kRSL5QPtsAEbM54dwvVGz9t3Pcea1Wv9QbNSF8i7fhTVY9DYxSGSpgo6GTeFitsJc3Ew79vePxmrPMJvGQ9Z",
  "key8": "4Dr1ARFK8un6HpxEziw6fo8trqhW54wjurtTathegofmwegcDubsCRHEvm7mCeDwpzqBgbkT7FPCKEfghzXCe6fX",
  "key9": "3SvnSn9sUXEkUoK6feEg9qyxTsUUe1eQGn5bAnm4WKUTEMBStons5Dwjqa2f5MKzWnrbaGwrbGkDtAqQJyPH9PQ2",
  "key10": "3WsWGLA3KV36LLUQQZjmYWqXgNStga2HVP3avhWhfZVdGaMcjhbXY5WhRLW9ZijGUxMhZ8roq4JM7jRpopq5caSu",
  "key11": "49bRiK4mJuJEpuxSASj3BzAJUGjpzJR1j1aypUJqRyRbotTY2GeouCADvc7d6Pu1bqa9B1tRYpDAKmuKRGZjgLA9",
  "key12": "5hREZKE1tz4Eno8WXZBDKEuQoEhxoyPhqoWuuncAsf2QG5n8dCJyVwCkriq1qmrkVEFj7yTC2BJ5koEX2AVvQfnS",
  "key13": "37i8HmkWVu5rjFDtZ7Rg2ZTbGpuGgNuEd3otqrtHvAhW4u6Pwa5roM1PDriyrHiQP3nN3mKJE4JTL8rGn4QoUZCV",
  "key14": "4fp33bj6mE9PYuCqmZGJsjmdbQZfc1z92GfTjrL9nPYT9mk8Jb1cry6DcoKNZqp3jHz1YHWnNsWk5qg4kK4W3C8S",
  "key15": "YaPLYHRH1QZrZVEdRDWZ2mMGQy6hnPDcRfEGq9yAAGaQ8kkfqPoraqBYfLNTXobJUpeowr3E41wbGqTR2X69vyc",
  "key16": "wdTXfBmLeLP6nZVANbTFnGy36Rb3N7btMPBNVSNNfUke5Lh4V1pndkKJw9L4c9X51GScGcSUvwhLyYDznFhkrFG",
  "key17": "5nek8KpTgwn8DtxaGx4swNRshybuxEkKT9ZhfDHut1RygDtp7bRuLGwVziGkLQLjJEC91pfCotKziBwhzQwUmr1W",
  "key18": "611cGPhpDLC1X4aEUfA24JerHfxJByYKbGyTxmXoNjJUhA8HM5QLr4b7UwCZne2YksDYGLw8rNhw8767QTGwCE2z",
  "key19": "2HD48gRfzRTDfrFF9nFq6Yey25inHx9gzLPzqBN81p49x1m37B7BufysE15kxtU73neV9Z7HuofWHR6C5zHHwrKy",
  "key20": "4UfXHP65mH6R3PYu1ogSxcx3PdTCp9cM8JLDL7z38FMqvsJHSXLFQzAdGR7MQ1pzRrdJaNs96QzBws6wXjfRQfcP",
  "key21": "48VcFhnjgAajy6qHKcdxu5tXMWsRHyNuHgX9SrMc4w9WdYBMb3RyQQfjdQsgDH7V8it5JZdziaDKhPxUe3pTSJHL",
  "key22": "127x49fMzeKCierGsax9vMAvcmwyGzt1HH59Kg4EYC7VYVXMYu8KMQ2ZW6AdSnAXurcEdGvfXYgzvUTjvsrdByFb",
  "key23": "2fDJdUsj1sFSQgkdpkYGEPfQwpe7MXCZDXY1NYqnAZ3BPFwXv1WXqKhR7e8VLjSDdTEbLEztaw4pY5JyzWeS1GPb",
  "key24": "32ghChsTuvMFRLVNgXFAZrwTtuv6Y1kQ929YwdyBuAfpekPPYNewajTndctL9y34e97DGGuN86PdXPxLEgavYPpw",
  "key25": "2tMapvZGEMB1CycVtjV3kQbbEeuLnfxMSTPF6MvZmFLJktiaKmExVe9msBxbL7fb7AzTQ9ovxWugVdo2Ss6bymB3",
  "key26": "3c2uCEBdLaWqCR6c3cLViDYMjZjdfLFqUDN6QfSuLHvtoMQwSp628UuRFNZtYF9dD9X62bsF75XtPk41S5KtkLY",
  "key27": "2tnDnZ7Dg1gcxpeRzxH4LqtaQSTz7H6NFckKQ6AoxT7Qjf5G9mHiBmtfnTFZZ8Y3ChaH2jdWWqr1hFrvgjF6zwoT",
  "key28": "5PkkSnYspjG4uq2gwo8iAX6K36Y2V1fq92M2qCGk5jovDqbjKMgUkERVpj4wE2N98SEjcySUaVPNxRPrtKowkuH4",
  "key29": "24zG7FMNPwKBryqkMzzsFZ9TCXBVCZwGdcDm31eouLqQRgdP51L9XdiCLr3G4eGK5dUyMKRCP6PfW8vkKQUSbT96",
  "key30": "2b5fs991sWrJ2JvuuxggvaeLvuBYhfnQaiYHZ5GYZXwnMaBpwpyr2R2Xy5L7Am95KigGnKTxT9tLdtT6xVsZkY71",
  "key31": "3i4MfchsuF7Jg37Ty7vSM4x1asH3fsv8GfDHmtu8L7ZtQfchf85ydxLRFfSGSSjjyRgmz5e1DrxQG98cnK9aZPfs",
  "key32": "petsus2mPNwKrmz2PnJLWCBWXE2CHAWPads9ywvyfv2sWkY4SQiJcibEMacLkTcLQzJAbyfhiAkMX5SwMMmmnW8",
  "key33": "31GgG7Ld2RcE8JvUnxpLjPRPpuS1TwgreQQQMrMpdq1bWucV3DVTWDWzcMMeiBFo12xHkaYuLHMa8y6HAxVBhBEd",
  "key34": "4zNzUdwivjcvaUEGPTGCGvtuqimRoPij4MU8mHm5ub7D6peQK1GPV7nrfJBt63LbmWZnHzRpWAzRgf6Nrbt9xaQ1",
  "key35": "5U1cBs2tsea7mVzmqHCbphVhKj5LkfjqtH9PCQsEPbmB4CquZbQ4BSrC2u5PtLdMGUabw9o9Wo9tWk4CWSTK4Utg",
  "key36": "jjystAR1qfyaio4HHaKs8yBZYzuSJ1yuLi7n5p9ntFZsJV9jJAqjQKVAvasBnBCuJmmJsQtouqG9ET4wVAb8BQA",
  "key37": "5Hv9EBPU3r2q88gGic1ipJzYtZXv8Jko3jWM3qaMz8B7DaXKyMAjPBPzyjKgrGEVbSLUdaEXwrCsmb6tqNFnkyaw",
  "key38": "3wo588kFnW1GmLJZkkijaMJAThHe2iWUq11UFju3TWSgPDwM2nEaC99C6kpAZRWihMhJELJ5vMUbp1vF35u6rvim",
  "key39": "4JLZkSPHBbiXEsgXNMmXwt2o6LeyMRyQNJug7DaU3cQ7g6tWuvg9uhRX8iAN3ePqTrFdsbBdsz4vi9eKrw8ZmVgJ",
  "key40": "5Pf3vH2X4uWJtugsWv9v8sG2GRD1hiMMJGnhZ1STgQqh9Pi5BB4CzktJPXm15NLXL3x77UU85vzQxiF3qKhLhPVG",
  "key41": "2L9ZpuaaRcUEuUTrhQDuPhixoajgg4g31zcRxYn3bNCkdYdy9sMBLd532pcXWg7TRoRcizwruWz7cazRrX18gnu8",
  "key42": "45TRxUeUHGxCtgpHoY23CgAJhCTsnxhP5BZwctnCWtF8GhUefbJJUR6TzfyyQ95xoD6kesijfUvqM8HBDmAi4SuQ"
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
