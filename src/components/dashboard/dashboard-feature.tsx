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
    "pYP35jJZQQb7PMi5G5yg2453GGUR4FSKAEBcvovLQshUVex5Eai7RCRmncyKAAVcGGQhwQaHAxQ8JKDC1duoVYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k8kSV4vJ64gw9AjM18XWhF33q6XnARHFZss5RWM7rxLG67QGj3jTmLo4MvgoLrLb8EwZkEpuyaCf9sXfv1BURs7",
  "key1": "tvbhRZaqC3rT9GsZFSjyuXYKg4eKpcRk5zgcGP6sAzjdPQAA3WTCw8UnDAA43Kq6ZDVEFodm6TXqZ7Yagm6Qwjz",
  "key2": "3wyZ8nfpZsNmP3v1TztSEXbL65HmijBLiZ97kPrYKWaK3XBCuUpprPMCDh7Hm4r6tRVuBinmpEVghZWtjKqTNYo9",
  "key3": "PeEwJNBjzAtz7A9PrZvfZyY3saE4cQ1Ls4GzYrvJhcTZTyFchL7aaTkMtGEUz1uix7t2eMNAFbNDJ7MEYA2DtVr",
  "key4": "3VdodbQUXx3n888oku6ssAiAUiyNNMJWVnckjHrxVYPU92SSsgXA46mvf3AZPSQwSCpFtrCtSv1qRx3bV1HwgTv8",
  "key5": "BK1ENtEURhrzXzcQAJRWvoRZXkzCf4bCgajmhkYDWJM197mAacSMJ7ZXphczVQxQW5hJZeZ6bsShzBV7WUKWhq1",
  "key6": "4VKFhw7TDhhmnXiedvSabNjQFcYLHBi7AoeQwUpEXXDw5sVWB6fnrfWp5VvUr98Z55WF52Q38Ksv6VRKdHR3qoYE",
  "key7": "3c5yCPnWgK4MvJv6mWmJG4DmrEjUgQ3rE9pc87yGiJFfAvtiFqE69WFoA6CwTYt77DnKYRYPw4p9MfPnz5Dg1cUb",
  "key8": "3gn6foCLxuWSC92X5wYeDBkyJx9SVkxxuYiomRj3xxXVJWFZZ9ub6JsgNCzkGwvy1FaeWDsP12i6RtLe9cNaqmt5",
  "key9": "WrCsWtpQP4oXazxTpZiSpN8UNBUGtfgBfMGaZpAPadcDY2zAiimeRrzt3zfyF5MoPbw6RHAbdGptCwdbGe6ivM6",
  "key10": "5Sae858xPdrZrasoSkdSX6V9AL7PpqSDxXvW8GUZznfmNFSbtqx24b75uF4c9QCQFx5MCUv47Ljy8nCLnGFhyouU",
  "key11": "35M8ijg4asWsS7mkAYgPzDLQs929P17H1Eu8Bb4i8xgw3KCwWJuDMDm8Qyu1cH9tPqLd6BxwnwREz9coXT3n71Ay",
  "key12": "E9Qcy8M7rc8VehEBzrtyvpSfLxf7Yh4GDPfdoG8tR57zfP8oqpLHbmfwGruPqpYKpoQ1ae5bRM7csEzEJhvb49G",
  "key13": "5xXQfVrm51VEHN7oH2ZBhKHfC2UqEyRhXAULdN1LC9e6a5SboB6jQC5ySyqSLw3wAW66Jz4npmut5J6hoxj3ATrY",
  "key14": "2sKXViVXamKkYcC6SMrBUWgMZVQXzKuLirym8LhjSRGJo8u5zziBWfAGhVdhqBkJgxBJKcfZQc9f3cPTnUbDPa9V",
  "key15": "x4cH4KNRgobi2pVtV8mhtbTEyuwD8UAPMsvzGGQ3cm54D8kGaVzP6EzzN2y7cGHmq4hrqXX4cgvFGksAuDkSgqs",
  "key16": "5P7Rtu8gHwfeX9A9A61YJ81HnmmUkknqNnErdYvQhhxc3r1H1g5kGYVSnBEdSg59XDQq41kodjLFjmgkQrG8oRfh",
  "key17": "wExQnfAt33JhsoVJuQ4BEVCpNsXqYBY4LwsRYQ28jhtaZvJg1NLayuFgPKFqaHtd65vn6fJaH3SHhr8BfBkZ68L",
  "key18": "2ScnA6WgUhUEniyFadsQsedQuJbZQe7x8GJRdTZMJ5Qztktx4EhbqtQQ59MnPZPduWGsSb4ju2G48GeAHCyZn9Hf",
  "key19": "3qdFMN4CRE7AfAHeS4UUbAq9AtHbewf6xxqTGrMk97jLWComktCnDykpDEghvw2bdDQY5ujdZcW4gATtWzXTvPGm",
  "key20": "4zi2tTjFVkieQJ6AvEdiUuJt47TUXraBE7sZW74wuE3DBT7feh4ug6PGFchf2fEkxZRobrvd5vfEFyHtXhYy7WpE",
  "key21": "3RtM6ZWfxZhD2uZMRoDhXJXVU9kSZ46UuFmdtbPtBzv4mrXuq2Y1JueMHB3FGy415wHxmjAYBauN7vBMjfvt9dnS",
  "key22": "5y5coZDFV4mqbjccE5btXcuw1ZUgh6sBBqn8e6sQcnLJb2JFP4ABbmFDKkfzhoC7jNRUrMZdgXb9N9a3YRQYDsvx",
  "key23": "4ShjNa8VW3EMAjzmJAqBsP3auyt8SPLin3UzmMLwFLm8HGVbKcpD4jGhdZAKWJU463MHWKsYr4eXKtY6ewuh3pGw",
  "key24": "3XTS1FcnUnzb3hbykHaQh6iJa6G9jePYovNUVcpoXERfLiQjeJfgcC9G85XHWTgfRw568bacTjir7KyBisWixPbg",
  "key25": "3rkdb1PYH8xjtGhqvGy8TYpwPgFkz9X2Qb6QYmrVzYPWacSkpCY89UFXaG4bczK4UUyFp1VuLA1jgUtqwGF9sFyy",
  "key26": "4TYJgGcucqr8iMghgiPdyj7oDqt2o8YC8pVEtgQMJSAApbdNdJzaa86sN9GVpF8LNoZQgfs7YU4PZTXhCFq6KZae",
  "key27": "29BUW8truMqb9JYYg69JqXxp3KYetSoDXtnjSHuBKMwZxepRU3AyGBmuxGYHdNuv4aJE8Z7m3ePuAifNy5q2gQDo",
  "key28": "42uVnu93fk4DcprLozEp7QsQDF5rNTEVu68GY23AXfRGT5yez4wSMPXPL776uzCzfZJgJDMuCADsBDFVdFtRiJgD",
  "key29": "5LARFuk7w1APTT1uucSN5KzsMrrKoipyqsTtBLFEyZ3YMg3Aq3kQgeHuDHzWUGZ1fUe3LZzAFUihwi73G4FUukXx",
  "key30": "4yJTNkMdjWPWyPgRxgWB28mYcE6TsrCpBH1NNUrYgDK1ruFs1fLSh1CJz7GeSw5nvPCxVaKSKWTiaDEE2jkRAYY1",
  "key31": "51QXFXvrWHrM8N4xRMvW5Epz3XDxPXATbvnhduZKMKa4qCChrxbCjuFqJE2EThN2A7MP8XRt9UGJTgJ5SmCfHaXQ",
  "key32": "V9m3oYDXNYTV9RKpsYLq9huonvXxJMFapRMuz4YRPqmJvx4k6ZPKS7JWMKTyVMthyey4jCo8WHwFuiG85m51QUB",
  "key33": "4RWm9otzkMb13tKB6NwBEMX1u3LZ71m5ZgPamGfcs9jsM4fJ3ZAagXvhqdEVKLj4XhSFo9Xmu9smR2DmqDZrBr8g",
  "key34": "39VH2ych8u2gogAQPBhSvLv3K4GyX9xZRDcwvLpHB7mEnBUTx3MbfxDQ9hQVkBsuN2WdX5iZZtVkWb6ins1jEurg",
  "key35": "5QEt6fRn8KEZLsn8FcRq8c3ksbrZxx9AxtfK9MBkcEsqtfYwB1gvz54k9fVtTDiVFurg5rftJPy9riVJkBay4pbd",
  "key36": "3fCi6h6ZQwbHAggWeGAN8HpcRWgkyrKGyve4rAyDfMPZh2psct3EhgBnRzwzifchS5cEB4dL8oFM8AupeGCbMKHt",
  "key37": "2Q7PvXyw7scoXU8fXti13TDqtuGPHzUWDz7mGzwnSoHe6xUUu8WVeafKT6JvhG9AxarTtAmzrTj5ycU1hbLTHbV7",
  "key38": "2fyuVbmSDJiBYvDp7UP3DmeWXetHGGdTFrfp8pb4Uuv9k8yyshbsv3o371sXUSDEHtzhpZpDJDi9QdAZnNXqD1EC",
  "key39": "4woYS2hMZo5oEMQwGjpJ9b1Z4fFjA4cyqoz4AQa8HQk7xSqd29stuxrNgP22q4jAMDmLewjnxJajMaBfTYqtWsvB"
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
