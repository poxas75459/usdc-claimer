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
    "FV9oHz1iFUGdgD6rZ2AfLj1EpnsNYZdnjqYJr2JnM6kWBnNL4aGT9n6VCdqHvo39KVrm8vAT99uvkQR1HVCiGoN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8qLFySLGr31DB4hu3Vi9DuPBx4mMLDc6okKfnPWey6TkEguCyRvFZMYyVfUvxEUHcmfryi89Mm8Pmdu7LUV2B2D",
  "key1": "B2VPtFhkfBuGRQ3ZJzTyRQRNrPFAUeCvsLfFgR4o8Jynwh6o9djBgft9SA3XKwcrDa8sTaonQNtHBwQfZ8Vt159",
  "key2": "2wJNWne4JpPwqhhb1sAszqAm4xsiSNyUEgnUZqncGPqk4T4CEJKteYD3ntNWXx4d2skbRYbjJSQi6S4SWrP8neP1",
  "key3": "36HJezRebf4unYsD9EZkbk4eUtP5N61LWr3pqKjeG9BcNTuwVc1mFRKS3n2nW8qPZSoK2EiZo1oAqGjHXzRNtiDr",
  "key4": "4FpiS9DntohvfnsfdYzFmsoj4X7BYnooAiB3qmwC2r71EVNS7poEr2ELMuWpsGpEMLfKef54c86zcdxRcvg4ryk5",
  "key5": "5128mMFdoEYYQrCoTdirRX1SMt5SFSigsSnCkSrSFAxCz3XqePHviMNdT2hPA3m1tdq4i3YWfsVPictBZGVsBwFk",
  "key6": "5o7B9nPrFTj8AjAQWpTE2a4Vi5mpE8se7GZcKyBeHwAaxkLdmGtURgNKQBnP8tPcSvLHkWumoroq4foHfBqtsPb6",
  "key7": "5NP9k6WU7eBkAkVPh9EMk2atrDfQG8965JMTkcQpyKmN7Luetuphh1DRyj42mxNFsgq3otzbtvvycDzUMyHPBkN",
  "key8": "5xFYgxjysVJiGi7ftzxBy4G4wBbMUqv7yzbtGFQ7YqVd3opaCWtG4o7PrKAtMxHQ7QgbSq2E93Wr7h49rzhVThHK",
  "key9": "Z9wLAHMz2kmMRDcw2X6JeMu25AQxUbsyzFoWU5GntGre4qAWeE9PkqVHXtEUQ1SKDTDNmzZi4uMJkdVGNkAVQk8",
  "key10": "3pwxa7zCrXQ45vC5uVdASQ8FpiGZ2PdFxkZ2QZwqdCrdq7p1BpmZd55eEZ88bpkgmJxYeQixJvYqKoC6Bf6xJ5hP",
  "key11": "3pAfec7gxLwyLxw1ytBHNcyRAHckxFCbVDvPJ949AUC6EGzvJmMh5z37PrGK1LW9Bpxp8KKvdJLyLWjZcpWspwTt",
  "key12": "5iLYNfbjnzvfiViNXNFQ7g5WMHRZHKLtGd1s9HniTcwCwR7AmHLRFAmzxUWsaBhrazZjA7HVDNwCAcH2maa3vCRB",
  "key13": "35MpQrEes2sWR3kcsCyxtpJaVpKPraCcAqNyyqFjsRwtWDUqWm2ncRi4kE7LH6zZNnKCGkVet6s6mbjVAmUYAaoN",
  "key14": "3cNXGScKDhG4cdVG9tssRxyg87kzc8prTTrWgVoNSe3GFT5sMsMSamuM3yJmxeXRzZZsmwXGmZGoh14PKjFKbqxR",
  "key15": "5wdu6ncizBvP9obtESwSrkbDFYx9NeYGftf3ReJ5yAxNy3kBrkSdAozYYSxQaytTMv8zDky7YRpSr3mFSRgZu4dy",
  "key16": "2CaJdxpUPNkNyiqPtaJ6Wqt2HfCC23wU5zMJPA1iPMWzVQNGfKNdys1b5Rv17wCSm74hEMzm2cBswWL5kRZjHcME",
  "key17": "5zBu762VjWLNwrt48AVKiTvkCFTAayztYNhjPwVeDviTmJLdBJq4jJQeXNswgEanPUi9H47mQSKXZGc1BuohXRPR",
  "key18": "5jPW724r29hUrnEFw8t2ae6M2Bw8yGFhbeB4hbYKvK1vptiZp9Ho42mAjfmpEtrtW6D17F5eALxSawLjzhVr7Tda",
  "key19": "2eLLUte1Ub3dadtCnU3sx4HkSHKiQGmjaPQsyJYDWPBZD2y1aKfJpacQwQhhJX5DVsayLpJY5zn3kGHDQxrv8skf",
  "key20": "4N1E7zEL8HKvRxrFdoomTD6N6TtUhQTRTNEmEcwoF7gcoCzFEc6pVDULoNXnGPzCb2UdYfb6aZpxvau7WecJ5Kzs",
  "key21": "2rfcchx3QJRsNSy3KMkmveHyuZ58QWjGDNjJBzs2zV88ioAg8uYDSUtHezfyGTR9FgRneA57PGEDFsj5PW4EivQY",
  "key22": "34faZjGa6oLVEc7M5iaPuJRrrCJu6WE7mg1aFRsCztDoyQW5wTL7wsaMjxmgqe1VQjXxV4r3rcHMWsEfShHiiMsd",
  "key23": "3gvrD8mqJYZn6AnYMjVoQ3LdfyYTWTfwp3jJ8e4LDRjoHgSVA93eCGzygeUPGwAEXBZAXdauvuqGwZtGDR1YCdLp",
  "key24": "3mkRHLY9LaMdykVep7PoWrn8ERUt6BE2uF7ShAWD2HNWq9dVvsh5hmW3phnuYGoSufK4SDABrpovhdQJGxZUH4VF",
  "key25": "62ajV2vYFGeEeGYeaq3stkidjcoXvj84JDRyKH8fqHC2391v2vMrzabzMrLF8a2G2W353GMqFHXi6LDsjVsEXc17",
  "key26": "5iWQVDYTeUthzZT6zSouXqvVdyegCkDeuBnvaAXUWiKMVE2if5isQ3WZntM2Lh7Shp3ncgtq8ikahr4ZpXXCdA26",
  "key27": "53zCjcaDL5pLpGS1X7kQPcDZPxF5r1Dzub8LGYtaajANfeJAwwHjCAo7KgQFo3Z9GwYSJSKbRkw4Fqbwnpn5chCT",
  "key28": "2NiUPu9JPh6UMYu6Zpdeo1duH7WU8Ma5JpRmxZQEaxxxMkNraUb7Hit3ViZVoNmBpQg1G85A3gRKGMJEMifKrRKk",
  "key29": "4BiUUVaAx4Nz4PX9rHr9jKN37tqCh1YsX7Z2yv7z54y7CEWHUYCjyAcc1Kz9PWu92vN9rQCspTqGjrSz1b748k4B",
  "key30": "5kJuiQsj9rEAcwSDV8L8tiwoH5wU6aqdgJZGD2kizkUZVGy8AE5W2UVbuMNcAY5LboTxUQrp2cBJbWhiHd7QHFqh",
  "key31": "32TP1qAimCenYwuDwYaTc5E3MUHeXrGLW3g3B1ZRi6o9BGubiXV5XhgycpRJLt74v8pgZayiTZjn67robarRqNp5",
  "key32": "65uS4H2T11LW5PuzbfCtGYAWemzfRLqquhC2xj4MoyNw6Cp724aQ443HaYVxgiNKDaoFU438XQe6m7HiMgHkrDG3",
  "key33": "53AFrrBL5NeNDCArMxycv1r1xuhEECgDNrZM4Lb2AfAwKPqtFGHBTpDpxi1cyCtrg3rxiv89hH8CBdzGW4bij5Ba",
  "key34": "59TycpZaKWnxg5ywtFNH6ZELqvG93DQ3jqU1omic5iLVXVYpzjGrTenwc1hE3wPvqG46tWiUeexV739RRyASrzf",
  "key35": "5p3Kas4McmotCrDuH5jv7hWhZrmtWaNJWoeJmL63zhub13187gY6ixeqtimzCQjyK4aTL3za82vjUTKeLoogeqP",
  "key36": "5vorMnzhzayEiuGqyLuwVqz4HHk3VtX9L3q6y2i8scxoZ7MxFqynerLhESRawpKyX6DRSKdekUGFiEcQz96tWCUf",
  "key37": "67kZCai6Z3x73M22cPgP2p43s2bwCU4Fa5QxPG2jt1m8xBLR1TeDpL5H5rbfLV7q7QcjGT2Zg3U5K76fv35FGmt4",
  "key38": "4tQiHSRgts9RWVwZUvrApGiKxjUPwcqicUiX8ovcZMx3zqZ55BijmEWr7MTsZzx2Uo3t74R5j7YtdMt17c5z8MCh",
  "key39": "qCqCaS6PNi7pdRmGtDvELxGyjx1612g7VXw8LfBVqub5W8BBjvaQgPSZhDUDqLVN5XYUnh8vgYjKWzxyU1WsZ9w",
  "key40": "3ArU2ZXQf6HdgSyTTMJp15FKfNSo6mLBJ9WfYECXpmwyy5typ83tsNShJ9bAMRDgfQEJtiLNR9wN9RdWZ4XhUA3o",
  "key41": "5ow6xuu5DJNZdoePLp3nCdsMrvZuQaM9ZuEA3yHT4baWvasHjiL4nBQNBfoMBQ2AFxqBHdZUy7nWbaBuwRmrGEpx",
  "key42": "4rZBJLNH7oSy3A5vDjRcAV16BY9Kzdd6avReY3u9Ntje3GUcGSxHkZZSYNrfwkd6m9gBGLMicSJxCz87j78TPibu",
  "key43": "3JHqHcTJ3MfnbXFZCR5HqFH59DcHKnKVV1oyMCBttgimaCfQ4dXu1ijVGjeLvsWtWz5qQuPjiets8DFxL1jCbGZ9",
  "key44": "3zDDPaPG3ESGwYWkPa7XaPxXyZTHkJ4RanzzowVZ6RcTHxJniPCMLNLDpRDKMQ5WfrwKRHT5iUNBNhmuHy1FMuZQ",
  "key45": "2EGq9wVHTucgcHzGFkGsbrnXgijpwaApnjuR5PXnyzoPZS3YgVh2vewxNP7thqSBrFTh7nndz43n3GaP5W15WLRF",
  "key46": "2P1vZ1J8ui7SMBmNj6w7X3V55NzA3oNMoJrMnLsKsYiRXTpt56nonh8CEKRC8LgAzBgrRPoTv9D8A2o7ct7gdQ7Q",
  "key47": "4jJSJ4cLZ58CeJsMjFoTsoqovESbBVoEKHMfuTKq6JeRVZ7mMnZT1n4hFYxvrMH5qB2cL8axQwxi6PrjtitQPi3g"
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
