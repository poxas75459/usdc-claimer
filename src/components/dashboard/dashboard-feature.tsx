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
    "31iDsMAgLg9Gt2ZPQSaNkexp97BLgXFQSmEXkoiCrRu7RZpacMZmDUwi33RJkkWjZBkFjcS8h9AYhoNg4XDmdada"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qDtxjvKCoLbbQfzgfYwh7LLX1rLHMrXaggR8Lj8Zm9XgDhTFkhzFbm6KfDFLhhBoSW4KCXsaAGaRuwAeiSv1DEt",
  "key1": "bYsqJK7M2SfeiqnnpCAmzfksG9dBbCM8DA6G61r1xxudiuZE11N5Y7Y7Eh9K8jPsg3Kq614eLKGaKw6iiJ3Qahg",
  "key2": "3chhMbTJCmWrtV2LDsa8EGRjy1nYSWY2P8DcLbcij95g6qbfzk1cJSim27kFLfKKfmSxEovuPCtBZUtp9zmvZ5bV",
  "key3": "52ZKcDhchLuRM4WeKjNQZonVzwDzvkbsrRtnD1SeN4vTyLQTLJqtpgbZcB8f1Tbz3mpy6YH984C32pkA8XALxiHr",
  "key4": "3cMLe1UjAeNC6ar1uYbmpwg8U7kBPXiKSGkcr6ugsSgMZazA8EYMHoYMuguPqQBtYBG3GPkrPNMBHuFMdh85JsNA",
  "key5": "5kXuhL4NXmsYMr2ozzYQaHtFJT9ySmovFKVueCmooT7eMtG1GMb9taKuzFT8azR2JZTa85yz1KXqtefzBZkgdVZj",
  "key6": "2H6mJ1dBa3KSgjtJJtXvY5WgJfTFPPPATKH42YkkJgZWxQAuDqy1jLN7Z3mudYffBpzAntPgLAEaptoJuEQxwmkb",
  "key7": "yYpNnDgWh8YC3bt7afrd52DdGwCaSBj5DSNhN1djXykjPyXDYBEceXnm4vonZHpnWFrGWZahKsQYdM849wtsG7S",
  "key8": "4HfeXgm1gtcxFNK1MSY8QqgB5qqP2GsVvUe8qfhZi5QpfD8bXsmJMM5LfH94XPNUbJj1HqxsQHEMyTVAqSY4tmwY",
  "key9": "35fdk1KWjBPkRzcN937jrxo8xGPhpdnooVQMUFqPCbamXZyqtEdz4jCCxTjCGwhRPHvjDSL7JLnYe2DdyMzgNG7Q",
  "key10": "4S5pyUSH41SF7NZTRtzoaRd596K395un4dGTZJgaYD8EybbmqoNHFzwRcNe57XwBb7Lpv15VoroGTQFCuDMsyuJM",
  "key11": "286wJswyR9QwbderWbGAbKrPc8H7ox7MEyT2iRTnssAeGRjeXRT9ZEsvPDbEDba8njaBsGgbY9svG1VEnumyxWu6",
  "key12": "3o6aEJxY9F3LCcpX3QWJPtLngXSkoiJNcMV3WyfVqLm3YP6Pcr38n89NwL7R6DK15AcXkBe4DMLXws9AsCQt2Yfe",
  "key13": "2oAyivRRtaKoDUHXVf7yLZrvGzXa5PiqkPUmk9976mFWW2hwJqiHTGvxteGe2MaqBJJcykDzcYuYuFWkizgGDFho",
  "key14": "5cTMakkPCZu3nCRANFfvbjJw4y6AB4sDvBRqJfExNzaMtuqmRZjJA5GGQDqA2AqSM4czcUNvjABUdDMTgC18gmG2",
  "key15": "5vGuCBB1eQT4AVT6Qefen2rQr7PnuQRU6ehrwww64CijBp9H7D7wmgbnQhXcSZLM6rncLkLrp3dpFLpNuGAaB4iB",
  "key16": "xCEQkExUKUwLzJi4vCysWba1kp1sMFQu9DsUHdk9abPDFXcurnhXyeJESTQsiLeus46yxPZUTXAiVB298hqQZqe",
  "key17": "QzB9Bdtqj23zVAFsmczcdf8ftDXN8yoAfVHWLwkSRmbGtdjpoDiXvnVr66gzL8fWoUPaQ7H3PfiHKFueYbhAQfT",
  "key18": "2JfyXcRHLcjcLzTEjAzcHWubK9KKj24AYDGK3krmZD2vCi79grbWWxhdKkGJ2DxvQ3odi3Z3iukfpYufd6JT48gk",
  "key19": "218TKqkinAtGctLpCKHXaLir3Ps6P9zjGRQAazei4kLFbfmDDJPvCwhfVPU2rpCQFKRbfj63iMtwiKW24HymcZPv",
  "key20": "4iApWWkZXK5h3P1wYYndJURvVGxWFA5j42bSijeh3wQvuQnSE9CdWfzpW245dbhorJCdt3w1yQD4jcFVrurhXSeU",
  "key21": "3qMKHDAYYadgBKaEsLVzGvq94oc69rMApWPJX2KQJoF4kp24U2fK63tmfq5WQpDpd3fLkFPS8hRHvEW8FNL3oFpd",
  "key22": "4vGPpVtxSymNwbVuBggE98vb4DpoAh9SNLteBDTqRvnpYrzyZswb5TqmZ8vfDnnP8W6Mu9AYWeAdq2ztr2YG4pKn",
  "key23": "21Wrjz4MNHordeaw1WR6e3yY8dj3qcLh29RviXGHLqenPVNEgpDaYbWhBWtM5JffQBDPdZ3Zg3pw548mvtcxf5V1",
  "key24": "4xQJ7sdPz2DctLqLgCBDGDX3xVvHP8nbKppp29PunYo32cu8RFu4C4GmxDBP5243uLkAVky6xSYRu2QWfJo6qxzF",
  "key25": "2rLR8vCQNmSwZx7DGwEHy7cj5T2tAvXUmcAHxpNiknoLYuDxuNBBdrrSo8PFnb5tYHLW2sxB2N8NwPyGdb9ANcPF",
  "key26": "2e2mWX2Ne6zHHNt3xTC8TXd2zfR9Fv44M7VyPqLHczRfmzGJNafsdvGSb4nQXMmz4bahxZctUZSdPSU6FNw5PN8Q",
  "key27": "CYQAmVs2TVNNhjLw3vYCTv8YPfqQTe9jFWsnTqih1VhPqxsk4Wx6mQPxHPBUpTpNUxoDCuv5xmathZtdo9tdiEq",
  "key28": "5vC4RSWFUy6z9kA1sVVhT153Db1qeTksdSdCma3zPRz9hjvwweBPm4et5PDy37rR1wFAvnAoKYSXv8eJfUfsU2mJ",
  "key29": "2zXG2CdefmHHkYaQc8FQ2CCzD9MKZWijUZEvv17ABaQLMYCpC2HrQjTFBGb3UA2Ly7q6hX1eCsebXHh6b2TgwBXU",
  "key30": "5nqSkcYEoAn857dpkK1Nbd1hgsXHWaUVYSmK3YF9iZHJ7KscLmkYUBhFXUKptxYsnfGzjo17zt67XaYk836QRSd6",
  "key31": "513AfGieWRNohA5uGUeAvGXzJPoYsb4F5v9c2vQiHQT3M6fB7m4XUFAUtp2GZY6BVQRXhWRJDCJRxMjzW2oEvgYh",
  "key32": "3M8TB5UV9NjSJpQgLNAbaP72q1CsPJhQ5jRghJgeB1iKLUUkHEjxTxZu6WcRHarXpmVQ1MFx2M92kuVv7mrapryK",
  "key33": "5xrBpTaHS6HpEyLpWUY5VUyJtpHJo4TzViAX2FviX4eCiB8C1usgrDB5wFEQRDquUfn1twPw8Fird7EZdE7fWzcN",
  "key34": "4dCiufudw5h8wKrZAGPKB3ip7LM2JJ3HwFWxe3LVYsn7uL3bV25aonEUWWC3WEo2hPyFrPCwz6Jt5Le6Aj3sT3cb",
  "key35": "5KVqyhcRdRf1H1P888BTRpBkXwwAabX7npe1BL33wZf9niHSQwoHStzGV9SmVG8RvjgkTbjCbj1swYU9Vt93ECYF",
  "key36": "5fZ2faCPtu7bZLNUJAuYY1vZhQvpyN3UMbES1W8wuAKymf4qsPEZSmiL7x2KyWzDGX8GhQ4W1A8NccY45TEryumV",
  "key37": "5KmhfD4ABFDzv5u4sDmzAgigcEKHZtM1Jo4nx7XJ8hoj5vbrRWcgQqtvmkaTdcTFb9ERFNRXxKrbfvRGYtRjH6ps",
  "key38": "3FqGUHyqs2N2AWELWoczodxmudHSHdsovt8PHJaaLq4a3sv97RXva2WNLWJswYk77CFmsP6bodbX1MNgxJipfs6L",
  "key39": "JVBqAom7yVpQbd8UR3SwbumBFSKapqdvzwt1mLquqzLJqVCM5xwMosdRzLE7pUF47Zrvvv4zejnpHuK82zkPLue",
  "key40": "4NzXQcNPynmuDvZRtohz7oRjeWJMrmqDKLszsdX9QmZjzgtuM6kyZ24zhe2dJLzFSEGZE1CSFBacRQiroejzfu6C"
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
