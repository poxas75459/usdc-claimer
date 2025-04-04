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
    "3qaCaJ2hSHzWERXCuPYDh7VhM97nsEqZsrY5wiMQ1HSS9aRbSa3KLzeShrPEE4YLMgCogekSwVy87CBTmzjvAwRL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G2XGS2v4vd3xayYgvp7YGC7qPrJECR8d1NJ5nhyGmi8Zuda1c4MMgjddkTn5wRvrPL43NdtUUVoGd2JMtSQZ9kC",
  "key1": "4ix9fRjPBeW3op1AwtrWcgUhBi354pPdhnEULQh5azWVj1oDDmwGyikh5pXoz2MfciqtcEyAGpjigm3Pqqk6aszv",
  "key2": "6JSgKqc56TmNW7o8MGrrrWve8ohYjCqbkW4rQNGe3Zqez6otczpjYn2diDoHCm9YDNifHULBapACMxxgG2HpnFS",
  "key3": "5YyVYmXa2wfh9K211cghfZruRVZPkcfME8MZR6sxGNNnsGizu9iJNbWpgBb1mpJtBYEJH9gdxJKxxkcDEjkLWcwy",
  "key4": "2tKuS9ai9gg3YQsLAKPwoCKwkZYvTSoT4AqRVhDWHfqLne9QH99fYWSTEnqhKr1XrZSSTaAbYX7tLLsAUNutfwUY",
  "key5": "z9YoU9qJqxUz2qgHjLk1gQANSn2oPuenbrQ92DTVb4uTwoQYHWRLXdxSuAvqWQW12oa1RYjDUNLwLAJwudKi18U",
  "key6": "5GdHBZ2YtkVMWnaWtvQtUjrA1WDSPg9Q5UGYxR75VFjLE33E6dEWwvAxVNKzihVVFSFKsfPnxs66LeCM1hF3oyDT",
  "key7": "9zae3ghEHZnei2aKWxxpxSkAb2r7Dgwu2G79N4wYfD6YDMFM2Y8erUShBEaDwsDfU24K8mQRRgB5qLPqFKGNETf",
  "key8": "47iQPYYe1VJi1X6wmjFQKsyi77cmHmwBe9RH9Xs2c8wSdyzYvES9TxKRjfukmhNdE4qYLqfJLdStXRaSyusCUp1v",
  "key9": "eE94pp2ShQZD4vyYQXZ9xGNsUfBJumeMSSKtUp4oS9626ZD2YbvdB9FJbnSjqLoNwRge7Yom825drMRDuyZ9eFt",
  "key10": "HoibeKPr3XuVe8WsdrPRvngmeCx2VwQ7FGdxJHpFvxC16S2NEnxnH9pBwxZ769B49HdE3uXhfJV73JKCaBnaX5C",
  "key11": "3SM9UeZBuqNh8GnEMt2WKKvr8dLD3BohypvoMYkbpfgd3Pu5qowCyKzGCk7mACt93vS6nXrYVdwpUebfPqeshhTa",
  "key12": "5WVs2HVvZtrnvdzDb3Sb3m27cNiSNoDDix3beP9ThDhqR6GxZfbCzccaDq7wBv4MrfVhHVoyyJ7nbm6BdgyB8m3M",
  "key13": "66QjihSZyAJyQAged4gGe6zUUvkFEWFTnGVE1AkAq7xYjL2FdPihUrc1vYi4nZfDqDpkNUC1fXLuTmFx6AFtEHFe",
  "key14": "5V8jitPYoMfpXvXJ1adc9hU3Ssa1c4osvyDG4EFcQHf3HrdU4PuNFfXDnWfkff29EZL345wTFq254TcJzNkjgZPq",
  "key15": "412yNY2rmA8gCg144cijZaDhABBn1vYQiveVEjQHbPvuPucUMT84PxyR2ZJotiEWzBGywAe5DuMqJJSb2fWcedDU",
  "key16": "6go632jaSMcPH4jfWGKWzcu7BR4vVtoQ8q27PVrRRcpUC3AaLj85Mr1mD37mXHeixuYtRAuNmSgYqn8Xa5AQEbw",
  "key17": "uiUgnnAtxDA9n64jBFs3Xs2DrTsJtrpv1Xp2GZyJhr4cuLertcX9fBG2Eu7TbP1G3YkcURbxq52AHFccEhB3a7d",
  "key18": "37daZCUJ87UDLERP4njiTS4AhY5YDX88hi6Z8Tkn4XKuc4TGAZJqeBkmM9Zg8nwE8m2XaUMFnrzyF6QGwFLR13N1",
  "key19": "rEat5EwDoaCnv2pH6DwvgYXUUrFxiWEHM3PuMm96N33FDJ8P4YLFSpvTewx6MNZapSsan6d1feMp6N77zYSFV43",
  "key20": "5gEkErtiDyQyxvu3MG7R4qaMvJM1aNjCiGNMs31k8scsp9QcesnGpJk8bqJXovhBcNkiWUzXCQemD3c9GTbyvUf2",
  "key21": "3QUe6hiKDhqRez4DeZ9uLj3WiQzZcuCdvvNTRkJHpcCfbMgbpSR32rmZcgkL8Sav8vujrYDnXyfNW5BHXNtBFaYy",
  "key22": "23LBbw6cBAtyFuNc9eNAh2pokzsi3NP8jb3CDwwkd8bpvhYHf25MWPS5uKQ7UNgxbnjwZFarzZnhaAPyuRwzTNQg",
  "key23": "55wpCaCgGQuJqbU45qMH79y5DzpjiZDxZoaYA6yrYvhpqViasBacSVNAE8knVd7u4JDxZY63QNFwgnK93kgzDGoe",
  "key24": "x9o3kHeS3Wqw5iujQqtQqZyS3TfiAf7x1Nhanw4Ma7HpTsv55fPyZqaa4PxAdEtTZmXutuVtAyPx866wu8w3ATM",
  "key25": "5uGW5vKd4AVfHe2dPLX2iKYiv5Q6zBUt3PjoMWGVFGHuxgjYz11s7yeSvxaXpq53MfJXGZfUF4xRiUJbukMiR6we",
  "key26": "bZTBhfFAnqu5a9JagEK4qUs9KyTXD7oC2mFB6BphTy9uphdB9Qdc2QTj3RvT5uynJNViPvjBCQF48nuqASp4zbR",
  "key27": "Yd6H6WpJ4MA5rU4iBTUAKZByNAVoS6SZ3o1sRbzSJo8bEvQNyhnnuqpc1xQSrqFaryigdAABt71TtE4EVuiAhp5",
  "key28": "2p9mcsTSBvWMLHs8bWi7QjeTZvzjxUdmr5RE4qMfCHXMTgK5fyg9M6ZZ7CLXbNe7afUi93x11mwfRuKaNgyKVwq2",
  "key29": "Qbg3SxwcQmX715kJxdsrnraX4fMjdUnKA7V9ph4B6YqEqcWXLAygaEYXXHBUrwPBBR6mdQnR9yFC7f86XcFjvEW",
  "key30": "3ocL8B4XZuVmqZXvS35pZVPj16Rpab6RT1juXBsM3Uj7pDU2XSMp9g2KspZaxVtF9kirjQooW7eHMye8ucG7iGpz",
  "key31": "3beojmx5bFiPYE6e41zL7zuLWQK9QSM9ibUuFz2wTUphfq2eUek295AHMbAxKVgFawscZAf95DPbiT2Upatur51D",
  "key32": "48Fz1bA2zX13CkFtoF8CJmFvV21ePyzNbYH3eBgD9b3A3PXB82qjQnAbh86UZ6fw3zgFFPe3xiQZtYshQV4Qc7su",
  "key33": "5fBd7b12qWX5TXQupd7iotGntkrtrNm3nD2tufYz873wYSVoejw5EYZXAXyLQ9cv8Hp6nmrbH9TrGE2rBFR34xRy",
  "key34": "2FWUN7S8kpHEE61stPcYyyGqX3YxhTUy92nhz65YRKUqLQpPsHwjVqxGTZHikr1f5x9ExZY2jaio72GjJJZmGWFr",
  "key35": "3ZEZTmGMkhBpMQYaV41j8LJRDySRUFmu5TDGYo5y3TEvRWWsZAkv32nutDWJvg7MNXZeEPaG2upP6aHnaA1MCv6",
  "key36": "42VrfqxYQRN2g5RmtucCtsg6WkYfwX32dvwHiVZ7QyXi6u7phwH6eYgd4ee9vRCxm3J3LswCb7buYygGYZt44qmL",
  "key37": "fqyW6JhxAfqW5ib9rj2jCt6BMTxn5NqUuX2XHK84QRWkxAwR6YFiRec36SLRLVGTkpe6JPsS8FKMXUmp2UCs4Lo",
  "key38": "3xDpaohvjRN8G5kpAdeNanymg9T78Q8uu7vzc4B8S1jCKnMEvCGUBvy3hP8jFPNszMToiigMgxEGRvGrBbBDWLeJ",
  "key39": "3pc7Uq6btoCUM2C8rAarRcQwKGgTpov1XgdVu1j3innwsGwhrQQeMTahfv94tj2vcrAvsudHwmEwfuakB1AftDUy"
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
