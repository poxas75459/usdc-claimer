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
    "5zrrgtPRNewEXKocWLVDTFL3wDQCtBbiVhJbWQtrfnR3gAWQ9sH27Q8rDf1LNjEBvV8oSG5LA7Rxa4hCTFupTW88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bs6VpPUCdZmA4PnM9DG7UZMjX6c5mfQDiu6nKhfcPE8hMi3RPriMr29AGVUWUhvBzkdirH2xL1eukmxgEmExcGh",
  "key1": "5wLFTLeQFa8GZAW9ZDMyXFDiegSLzmsctcjhUYRU1CqCdK6AHng1s4zuZzdDQ4TskEok2kPfwtjWdJqpqTcv8cge",
  "key2": "3dkq34CovnYySEAbXMPbaWSLBLgMjyDfq5w7X3AhfNjCaJUa6vHAJVNHWSxEhGqMMQWLAbLH7Yi9yAd1iunzaCG9",
  "key3": "3SPCkpkgfxp5hoMXq8qfQ8qN1PC5HeNvFxqwhyUym3kvzazvnUQgoCz4sYKLTv7LhPcwnvGAjywi8WaXCX1oGmeY",
  "key4": "5i5dWkiZzaJP9FzwT1w8sWvAdjq2dPBSbjdFYYWSxLYS1sLkJRzbT43z2FQ8xw9jJkDMy6Bx9vAbjbhDHvRdmRHf",
  "key5": "3fDnD2qGSZLBtaCvZ8y57WWxSZQs1a6PzkCFEo6jvSRohJiZzEdfDq3chyn7UtwSNgT2iHH7UnJqu2GMhUFKuC7k",
  "key6": "5Jstdf2vHE5qdkeV7U1nHpBgctGXDFitx7VeLWiZN1MeCsYgY5GtsNYiCaKpqFXHKY1g2FEKVgtrmJh2JHC1GKkW",
  "key7": "4iwXR1nxDH1ye5yoykPzpspKTKaXTorcgbVxMbnFvUfXuRcjwboUPxVraC3W45fQLUq2WezuKh8ziz1R5JFSD4TA",
  "key8": "3F5WKEVSW3AnZ6gSigQacSQzFSYYEEDwgSo4zvhaQjKNPeCPMcxaXdH8xFLpBV5DVoxNCWwRnCovagb5NEuX23rw",
  "key9": "KE3WNZjjveKM167RPSJ7FY8xtSffigyr8d1wJgryEN4DF1t2UkshNM5pSPNVGUXowCjVjVjKcYxiykEWGdGMuxe",
  "key10": "3zHncNmzSX71LwPpocAqhNS5Kb8VC16hdkPWwtqWHtAeg2DUyvRrHoPLfZJ2X4Br5SR8VCLHKB1eKAEBTprpmJnc",
  "key11": "3w7Lrp8HUEWwDzVUHe5yYrxysYxWXTXzQRi8chAGkEbZvckSyUczZXHkXu2vttbLLr9hnhmhzhFzhHBDDmXCdyLY",
  "key12": "3DH94mNXwqmSAt6Z7J3NVVzSwfaxJPpY33TzDt6ThDAHfVy7Wegza5rJFmNGvP4Fdj6bkkg1UWnsvPuDxkjdezLs",
  "key13": "2T2C9yxzGMBnxemX7yV3xmehDhZfU9AByTaoxUuhhtyk7Uhw3ham1g4CuvdDpy2gvuAZbopwZZUEZRLmehZaHuXk",
  "key14": "4YhbQvYh7ALwetCrN3y7B2fEtyA78JGb8qRowHJc9JrLrn72GdBAqUfRyEiycKsYZLfSfxt9UTN69rhEXvXmxQMY",
  "key15": "5K5hPa2hMhRfjuTBQB8syQF8TymbU7h15GvDQ6uBmMHVJ7b3Ld3sm7mGFQpcWbt4ZBj2L3gR9p3QxBhFYEyfXT8J",
  "key16": "65vHHtx7MxVtBaGytSpredDYHN3XvFLaoK4QXEmugm3B4rJdFTNM3yMW37UCfxZU5b1g8m8cY7uc36fqB2LuAufq",
  "key17": "3P2nxNg2q9pS1gmwUWeQDLNaELokjMagpkXECJkQtq1ed8YHSugbXKmBd1B1S53XhASdXQ3CDiCVno8o7nE2JpWT",
  "key18": "3ZXWr14AXZygPdxmL34RRt4FMorEMiYujwEBndtPWwVfDvoE26kuQxQowMZiJRxh4zgy71gjgnBLTRpSfYa5Uzb7",
  "key19": "3SNTFahaEK1PiaVzMqox1rKBjkKFeLuycNt9tpgBgnCCstxF5DUdHCr3ruRyTu5D1PoKUXEFjw3mPn8muK7cubA4",
  "key20": "w1gteMfLtW2UovoY7jAJzqnpe2Z8fgKv96SSB3xJhraE7s1vhJCHJV5gHyqGewZAnLCC6TNThjdctm5gDRDJQkJ",
  "key21": "36SqxEkn8EqZt9PMQkAFfYYsFQNZy6Dn41q6EYp4Q9TNKNe8F4xayjm34zDSxd7Jxs4KrF3w1BrNCFw5QTFVark1",
  "key22": "6pGJQkxLhjiFZ1T3cNZiDgtdxQ9A9YHpW7qy1dif4LHXnTS1Goipt3gDsr6j96MYmoJQPakz9yY72Xj6ivQnQBn",
  "key23": "2Xj6CMdGJPgfB8uMmrQDcr5ATYUUG2S6mPbfHcAxNS41LZoceW5VsWPL8EdVaeNouemXKYnGm94bpa5GeYHv9aRT",
  "key24": "3X1mgshVp559kdCtjNXkdyW79mxRYREpGZEvcUhFWyYqzGYVsGSAPiSYgbKMEg5z8b6yQkMJWX15kgXLM72KxpHr",
  "key25": "5p5twjo3yU6vWyPgxqU9pmfnwwhrVmzxWTgQicVVCK2xpMgoLT8yLcQ8arFt1Sjf1EvVYJAQ6yUKiTzwKuAFY5ge",
  "key26": "87rBfAM3LRRwMfymmf25FkEGUn9gRjYREDeb9SBYKPm96L3KzDBeFoJTLS5LFUCQ7kw5DAe6Z5W8VWqqXAB5S76",
  "key27": "2iieB1j9JLrMer32UBy6QeihoDzNxuXPBdWVQTwDcwPkYWFwcBtEoiT4wKxP2KdFDQs3xufpdD7TN7TYboD8oxUE",
  "key28": "3SfVs63TfVpe8fuJE8XqVkc3nLCRGKZgZm8BepEYSaoJnkCeoXn1MxmF4G3g1ewoasxBVbZhuBmQUXAVxF4k1oyW",
  "key29": "4im85UssegsKcCguvEeYheQbKMc6qBqbevQpE52pRcvQhPjHTkiDjrPRmbAg7PWyV1CAE3QfFVTL1hXjDkgatNbH",
  "key30": "2ywqY7iSxLf6vJgHvKXF9Paujn1RDZUqWyz9t1EVc9XvHkRriSJ1Kknt9yoHbatHEqovBkfVshQoMFrhsCW4dreh",
  "key31": "4W3RZWtqm1eUrpMpRF62QyLyKJRBNhZbXoUwVDWkEaS1vG4y15czsMPxsAuD6KutPqkdBtjw1ivW2HtvNyLV7kbb",
  "key32": "NouKrVAqQj3WWDu2RBkgGZwmMWkEbPZvj7Rk2MfB9Tue1dBFs7JRAvDb62a2ndd4cDw3PGs9ig9r2JHYzUaQ77y",
  "key33": "W1HWrhnTfdKubWez7cxF3odVk7KE6bbVXJZscsspKGzx8WR952Qeo71zq7ttcK4oZdtsPrv2vqD68ZDjkaLpdiK",
  "key34": "4fi7zHMDQ6uvyuu1NtUn384en8iYmis6DpdMtmZRXbx31SzJXa87w2Lq4TppNbdDBJtq9yrWW4H919am8fgsJKzs",
  "key35": "5vqcfjt5mpQZAxJvQyb4USae9q9eG8rKnK6biAPj1eWNJVsomvoVm4ZSCv5ZonuWEmUTpGkD41TMgMjNKiSuZvL7",
  "key36": "TVPJsseGu5f3T7xm4hguGAc5w1DTC3TY3CYXqkKypfGtfXY64izkBUQnf5SwU7vpLPGkSEuGeBC2Wrz3rrS1iMs",
  "key37": "4u2snSJy8z8nncKdnFJE1EHuQrcaSqFJsC149d2d3R3BNTs9wGojCiRTXAMjaHo6JPhvkfhxBzrsCGjT5jdUj1G3",
  "key38": "5vcEHaR3aNrvb3wRaFfuq5WpLgsMy8jvBUGxioRB2nnZHXTZ4UyG61tG7LDxbRYNYPMS3xWZA4bBLLZiR6vNZK1R",
  "key39": "5ryu87FQP4uCWuZcxvD1QXXY9QzNMDUC7huZAN91hQCHsERosZgycvaLZdXmcJ8213Z8ux9NWgeWfcDGJKo131vR",
  "key40": "5rxUpds5fyMSECmroTdLSNNVnQDePgRo9Zbm7L8tkQtkQ6zjYcG6KhEFTSpQCu1cBMpQgMZjDfRS6bis5TdH9mTK",
  "key41": "5zgar8v3bV5DQcofAuxPAzyctMY45yGWYEbjZQ7pDwBbNvfxYwJiRtq9HfAsbccVoQnRh1VZDfVcTN3hWqQNStdF",
  "key42": "4q8aoT75hhiNp6v8opwLpY2ZBAyHGwuAQ9NqXRjXoVFJvjcueDNcMAURCoqggRhMVaJbQkhDvRfdybQoa2uhQRJ7",
  "key43": "2v8f4WjB87WXhhr4WuQRyRmFWbvP1AFUdxXTbbDXmbGbRrbJaj4KTEhK2i5qtZ1qUGHz7eQ5eUvnPGPrzcAwbEWk",
  "key44": "2mqHsupJdcx8aPwYahQiZbUErtPdEFCtaxHBygh82gbmQYGYhT8uLGhyPfpQce6NiFTgGr1hzCRgKUC1HnsqLfkr",
  "key45": "3xVqUD5xrFXE5NKWpN42iZ1ytzChqDaZZFnqXvzBxuSfkdnumZRuhrL4J9gkz7p2fjYyG4pqS3eUJVogL95QuC4Z"
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
