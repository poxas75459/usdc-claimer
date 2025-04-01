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
    "GQ6nn9Bk3NkPGArPtq9vbbYC2rVDTfV873YvkpAuWKaW82gu88nYsMBpMRHCgG4FWD7KWRyfgV4cKZp23Q9wDbe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BFFKZWpLDdx9WMb2k842Quqj3Koq7Fa7LUiSCjiYVU9xRZJNjHXvgxQBq4sX6AKNdkBPnGLz6ztAunfwaQyqkhE",
  "key1": "cUWKHxTJphtL3bX7RtUH4RFLCpfmkcgBcTaXKuFc9oiKYUijrh6oTZxWjhxWqPi74UxM9t9Tt3b4D1EENq4wFWc",
  "key2": "ndT2DVzxk5gKwyA7s12SULcuxnTgZz9sXYHPMpy7fWETWfTNWhxKBaPGy5syWRSw6DvoKQBJwtE5zf8uyTh1FRY",
  "key3": "5kzXg7iXVc9gLLA5SbDRRSN1KXbftEqE1iDcb7S4xsTBpCETDajsPjXJZb2jVbsPQVb34JxTg2KG1Gpo1uG6FuRf",
  "key4": "4mjJ5WG9ihRHhVAWC26uUnQaNMKTWKHBHRqctwVVEkA4j4tFVeTpHsgFPSRUQquNchpZBqfy7cjmcivtfKNXwwV1",
  "key5": "62FdVoykWp4KbLmh5v4HQJ8Gjc2DFbyLePNRpyHn2U1sqghgKt7R1bwzhbooPQ4qKmo5XyDpa9mFuHh9Aqj1QCvu",
  "key6": "3QjdYjLqJjbDUwpfWoeBbowKSkqz4uzF5G7rVnRJfgcNaCiYske3wy7zXdKu49yHqcJJhRJDJcRdxdS2SpwZhKwz",
  "key7": "3dBt9BLwZNLgtujjNaQVxsBFozAYWfV18eCRfAqK7FPYHhSWMWNAJ8vYV2SMKsU7CF2fope2qedGs3DmmJJCedDF",
  "key8": "2xSirm4YnC7zXv8mBPrQ5z4JvGGHLWMdgoNs2p2iyAQsTTFnEGnp78ZvMwKZzwJ6FVTXToq5S6EJdVoqv7KDdaHs",
  "key9": "5RjtAQizShGJeRcErfC5XBpu1x3znrfgVZVDehubXqZJ9iBsfbL9EP8a6WWApRZva8RrsQuYbwJzyGJZGzhPC9PL",
  "key10": "3JLNguM7AAskevueLGgTZqp23XnJ3bzjP3WsBRZuxuvWD8C1Vif2DtHx9AfVJU2Wo4QMRu3WKwzAr59U8cR82Sai",
  "key11": "4qSK39Mbt4d3zxhehaMj8PyVWB2cViCwjau3jhtqXm7FS1p1H5XAV3v15X47jYNf2c91eRHyKVsaXH4UbfWYgJwB",
  "key12": "2CN4gxCGNcGmaiJd2D5n4D7FzBW8pq77WdwEqWYEFeaRkfbPz9wVisx43KJyw9NTiYdQuEJLXZjLMQin4b4x926R",
  "key13": "5FWZ38kz5GpLRkWYveovC8CAqYkdQNi5yLHiSoXoERgYfG8ZbD8ysz2BtZaXaT6RZD5WT9CkxAvXYq6V9ZxyCtSe",
  "key14": "4eLsoEua2zpfgnhykiP3KSeyJhBwNf9EfvPaJZxs4ZdeH8pgweNkChvQhdEWsECmJwGiQbHuZqBaPd39ufGs354T",
  "key15": "59ghvo6jhDzAnr4vG7UcPEWrrnwSKjy39JneDH9LUKdsXXEBZ8dqZVHbPx9ZnWMb8R5MUzBfUx7cgfsoqcQ8tyHY",
  "key16": "2viSFQsZvw8QrZhSLc2kkt1zNPzebd7BiqYBa1rYPjTNcR6qhJkX5aetzuXuzpaXRcwSsWVNUFmd57MRZeNNmbjb",
  "key17": "UWbocKfMbtrUXJVPF4uXmyp3QTMn1Ti8aLrqdwyPC8HG3SBMiBp1Snqqtnc5VRJN6kJjwWRxFcz77KDh5Ta2QhV",
  "key18": "M5NzFHzUxE6m416CZpUqSYoUTyQsXe2LGqrBuekXcd8pQzG9Fd8Nwm2Cd8DbM9KP4HBDF36WJJD5qnL6aFZjA1b",
  "key19": "39p3fDcjj2g8b4RjvJZVVoqhvnPF7vTxCibRRHZMX3eNMBfSFukwH5H8FKA9Cmr73PdGA11idK8BkYsqoUcJKQhi",
  "key20": "Kwz62MshM4ifDc36FrrmMHHRmVuvSN5GAfrFGTL2vhqyxPYdKNSNrpQzW5JhxRntrVd3KGn51BmWdwCaX7wWGhm",
  "key21": "3dEoGF8ZCZbNAkDbPrT4FFuMMGrGqKWyBXghRjr5LMupczFSKVU6H8tSvR85A6PsdmWE9NgXR1B98PB19zm59TEy",
  "key22": "2VsQ3VqpPhJD1pcTqqWkU5DJ1HJz9AKyp5fEyVbeamh7hJz3Koi7FPC65UcGcBR1haXUb2KN6WL4hrsYFM6EA3eZ",
  "key23": "2xVRh5m2wf5HFaeXJWiJWFLvBBqmNsRcfJcVhUw2J7oqSGSoviMdjmHpRP7zqQEBf2KUe6v29RkRZ6jfNm1msBQX",
  "key24": "2u98mXMuXVvqogsfw6UAot6hPrM7HR8hBdhmZoeThRHWCtvqwuqNRgbHAxagAsLsJaNyWbHjzmAiGdcXHXgcKRas",
  "key25": "3WfFR8KGF11ZE952CWTHeQLAV1MycXoUMn8QbMPwcTNux4QXckSPMfbWX4Nc88sdxg4wB4hdPG4RDPJNyQRkcEyL",
  "key26": "3X8ZKF3CP89UmmckWuiWZkuTCUthhUYRjhAPdLovpaiojgShw1EQJE1ZfWHp8k3RaNttFDmevYpMEti5dZJjVisp",
  "key27": "zSkTRvJWCu2bMCFBnYrymj7FtJ8PW3ELJTtmGQiWHb6WMni3JsQMGnykh1euDqpg6xzjtvt2G8sztKwhdZCGkC5",
  "key28": "5ypy771zsPYfvq8Hp8jFejjpMmzStjvXn42hS3a87HUfdipt2u2bskFCCRpirC6PWPZvdbAguC1eis5Um5JbFKv5",
  "key29": "55LCM191fnCCCQDGtZajknymvbAa5XwyQyUjkX8H4jMxYGgPVgVjGcBHUFobfx7LPFBqnZgkZuBmFRJsPvMjTW3e",
  "key30": "2dHwk8Y8viA1tscvzSzgK8YbnzW2QZ9qgt9adQpJqcix6JD1VPZg2xfHRxVkeixq3XXU62zXJnvZfucFeNTBQS2N",
  "key31": "5JQGg21NVQ2dNaFCtKzFCazmjD73Ah24tZs7GwkQYnAGWB5pkftAph3tHQNzJb2tRoyk6ce2xPyuA4qq4CMCRQvQ",
  "key32": "3MNKrZjQbiC3wnFeM6WBycz9hE9r4XL2mq4jbG4Es7tE8sCdHjBbqVNvUV5N2MLHbxmY9HeccJQBEq8TEL58N2P2",
  "key33": "2ayRFx4y8jxQj3KcNVkmEzgYwrKTTwMewy8LPnvBpNgjNfCa9UEZKKEDsSzFijgYVPGzBbcRrLmFCRChPsV7r8PP",
  "key34": "5BAPrpiKBsXiiNYt88kn3fd8KPFqDWkEZACQMfqMy6G2q8ZyMaanjXN4ewhcfVTDJ4mLehTDCapQ2Qd29K7R3xFQ",
  "key35": "u8jD8e3tVSK39YUkajusTJC7NVbAxoVTMBQkCBbbnox5Ve4sMUvGc7YDJ74KqMv2kjbm5sBucF5VGwxr81xeKvY",
  "key36": "58FoQtZ7kgWQGwBdZxuq8NgmzejhEKZ7Ldd9pe1NTsxTndy6A8d5YpeDFuupkYWdQ71AK4vXnHzMfKtrs5vXyEMR",
  "key37": "3iX51DnEMzVFtradyBitnbRyNxme1Wg4Ziyng7q271Syu3E9TSTU744Ck1E5qdFeGCcq2SToWgEVowKb3XPx5UPk",
  "key38": "2YhsrbmVbjYNeyCM5P1mMiacXAR2qxtVjjoBh5x1sjiorRcS13pKFMiSKPRfQeDXq6VNZ15ph5XtevZXfTvXoNds",
  "key39": "5HzJ2D6YfebEY5uw9T7ncB4b6GEJw9xBSnegYgttMFE7akgbJr6SjiNSzNoo99EUAytGDaoqVWWWufA3KgTvoWEh",
  "key40": "4CmGu7FnGYQeavvJ75uiodAkk3RB2hgmgPMhecdaYveGw98GY3GT5T8q6SFWD97moYAXvjSSnkmtCv3DwvYxYnSc",
  "key41": "5e8asTFNAxqHAy6uPNPhLZ6jS9gMjzXnoVvQ9NQHjFb2bxjHMCNYGkM5Ypp5oQtCUwrZRW1Easy6S8SbRJ5Y31sX",
  "key42": "28PnTphMGG6GQmoKKzrJdquHBphLjG5NKYCGDijpyxNP9QzyjaPpskuYaQtfYbDjPh671iy8NF74NrCQmTtFmbTd"
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
