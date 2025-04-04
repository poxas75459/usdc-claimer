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
    "64Mwy3pxFtyVP1zyyKzTiA5cFqDdeW1DbNgntt3r15KQQBsrAWPQjWXgXgV3ERJm6TkdSiWis5TfLwV24TYvsNAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51mnKkwusce3A9y2KrPXVUoY2oNApXrxi87YveNyX5kEiBrAaPf2FrnykZa7mYfqx649SMfujQTPcrZ2HCistsWv",
  "key1": "2zdFzEhfKBpHCgBPG9CJHNjDxdLCidBb6wrLVrk3D3MKgBCEQVLumqQaH1SdkqPqk5b4w2sZJ1zanNAB23QGNuRn",
  "key2": "2WkPf7inc871PvxsgPGiFi7Cd74AKegiyjgENJEHk8qf462h9DFtyGZtAJqRNzkSPUutJGptaymkFvLduK4coh1x",
  "key3": "5ea8t56eg7X8D7FLKQQFjjCTcemP31QpCHUwdSsmAqfWmFxtBvqx7K6RFNVUurX2j4RgM9fxKtze3ziDBANrJ7Xu",
  "key4": "2zeNNw5QVqaxhH2XGFTxwon7WhEPfPnd4pdc2jE2md1xP4euPzEVE29owr6JcjGrUNKL27fW6opJX3UkaKKYCj8m",
  "key5": "w8t5xsfLwoDNTTdzTg8GQgTQDTu1Wbyt4Ge4mXJGGFwuMbQFdjFdpQewKLb4xkMFsCeS3Bq3JYhUmFvWPCay55s",
  "key6": "4dtj8QpotN1wig4bfPMdmK45aewz4tVcuZ5kbW2UyfX1txXkM1bCmG5CbccAj6jJg721a3MsTsjfKGzxrvXp1Gzb",
  "key7": "Ws3o6KtWsF8sN3Sd8VjpE3FLpJbEmUDFd3B9D3Rk9uFTiaEGmUqN54edfL6Fec7MY2uXQTRfUrpRAPEQiwepewH",
  "key8": "TvAbyvATYeK4X6HeYWiCDMCXC35xoBc8vVvYCNQYtKTM9tSygxJDhnF26eJ9CvUxFTKTCPgH9nEYvp6z688YL7p",
  "key9": "5MsCXwDQVsugWg1q1fkAF3ZH5R9dfcAJsyM314bStST3qaRcUHn46LjJMsWQUQYmM6g2JEdzF1Fw4rCN68fhQpZu",
  "key10": "5psYqeArmoBZ7SuNjD3PAjH3EzCrMf2FmH4KaSSD14YVD2a2iq88Ej1kiAxF6Z7tjbdwu232hz4fia9xVtNEQysY",
  "key11": "4QeVZNPvsTcxQeMdt3wZfUKasTUGXDkeLoJLed1VACArvs2d2UMr2QAeSMqL9Qvq9HVCPrqFFcZZmVuH5MKS7zHy",
  "key12": "5cNuzqtGH8HbGzyRw1F4bPFppFsMp4sbrji3CHcn4iqaDe59DDsANQzat8xpykNT7r5AYEmLNMk3ZArGajjBc4Yt",
  "key13": "N5jbhxqeadXSMjuRHbbSAyjKGzQPY1QcbVQcVVh9Sbx4uMo1DP84ceCoaos6YHph7wrSsKKvZjZJqLLxj4HK53z",
  "key14": "5FGfu3oNDkUqewXAPoAwtv3SVvQWEF9JDQaLVbxhDGzf15oS6nqrvc8gzy7bEfkySBP1JXPE1UQFsaDALBeZ6XLa",
  "key15": "5JbeGvtc2U5skLFxQ6gH4EXtzJrT3TGvyFoos34aoejygTpbFsmtsFenHKtbBzthcVqVgJaA3iRp3w8CHovdJrMe",
  "key16": "3GyTyk3rb9pyuEKMY9U45RWwCixT1sq2rbGuFLjAikpJcwSBTmfCqyNcWgbG3AHYU8KrXuhvGMU3JPZPsxLjhPoj",
  "key17": "39DVX9gvhhTeSUDaPgTXgNL7n6MyHZ3QBEsAaEJc9EWU1j2duAJMkWaW32k5oB44qTAWjyb8ssAGcfF3KTZGNRV5",
  "key18": "5NyMFqAZ5UyUVCLRV534jUYkvkfk16f9dPvfTdWsLwHyKFTyKnyQ3UvTcQA3jE1bssXAFZzEhHcSHRbJ2RWztU9E",
  "key19": "5xNH3ZtwcG8ZmkJxV44gey3wVek7vUjyWXnwUEuNbArJ7keU78JKFqkQwkUQa5xNWbYDbgfBb3QBLbj5MXVp3Cnw",
  "key20": "468ZNmoec2SjrTNpJe3qeQ49u8sZe885jJ4g5wEekotyV66c8ZLhFonmtgGHDhcb6rSDW9oW4Qp2PemSjkRSaCn3",
  "key21": "Ki2T5EG1yqdqpLWHGt7SGVSyTcadYvojzYz3iHfgagNFMYHh2F3t7uzxAyH3MnJx9HAoavNbRwy9bchsEDGoJvA",
  "key22": "AwdtppKHxFwqZKZaFXw3GZsHLu5Q5Q98ZSA6pZdPcFYhd49nyxazFLopejgUD64nzGa1oEZjbkeMF9kjCHYdE7q",
  "key23": "GzRjh5FiTUcbmhMzVGCrRtcvoebFSWWqLknQU1tCgDiEoXa3FvuieMx8cRo2grDWTPXUEXzkCBzY6L3RBKd2VMQ",
  "key24": "5jB5XYuCmcHvDk9X5qpQ7fBczSsztuafRGc6v4mNCLGVAMy8ymsRwsb5NuUQXq8xPHkwP3YhCX3sj3XhLUEPpmUx",
  "key25": "5Bh5mPauGeXUdbmuWQkE46cKjsLorX6PpeSDnV9ixPk8LNAvKQGhJHHNhoK9c5vZgEMwvsiHuqM2Ft5zzMJG5skx",
  "key26": "81gspnu1sns97ZqnoF5TCsypxudMW77dJeV9FqV69af5BDiTJbhwrpwT9wyR6cwJYWatBBZmPcN5ku8ezmn5iZy",
  "key27": "4si37WY6HGW3Gwd1Ps69owxXmdDWn6eLiATcSNMCWUkjASGdpuzabMTh7oZTGUzjV8hYvK3m63hsCaGXQYLpMgJv",
  "key28": "rcn1y3hBZcXVJJyxLD5Y3V2CoQHsSkZfF7icryUHgDHmB4f24iFUsuPwBUBJ1r7DSiwfuK6DhffSNeS65eV24Wx",
  "key29": "2s7nwWHjUMQ3KwGg1GWo4nvXYU3SoX2GTaMv4UNN1qswbUQNyLWKYTj8GBTXhsYpw7dFFytUe2rrLB4qUUjj5ERR",
  "key30": "3NkipGesuTsynbLPgDK1Jvgt9JH6prgHVTHucJJPrUe9wSbCmrpJc6jJzucjRpF1ymguTJkgWDhKJEGDgRi7Sw2h",
  "key31": "4s2ArWjmeudiXKPHXQDWCCtkRpuYeiRYLWqwZU94UpgMUtzmirEnYZBDJPaZ6fXXdh4veEnV4zS7S1b1DqWczUEF",
  "key32": "4XMnTGaKTVtvx7DSirqGWJUmkmKBCTGcJV8Z8GEoV5wiNEzP1FpSoh1UFJb2WHyaXxRsrYgQxAq9as2r513GmEot"
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
