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
    "34RNxMa9xJRtdJk3ZnjzdLvEFhoSxScCZJKg4FmKBmDv1j2bmmKzvL861d9tQbV39m9PttFdEeoUS17EMdcBcqjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XYjJUj1MX16V8v41gAjmBP38M8e6eXvKTtxh538HJKJPayW1BS3YQh79btVtvizpUyDjpsFjTqCXwLLz1R6kQ9u",
  "key1": "4Y7Dk1iHfEsKbmg62xShSzwKsW1qie9xrdvCQxsm7HskTyYzzKg2iTNw8La3bPT7CDJQuxMcK7K8NUsxwwfhCXKU",
  "key2": "5NRhB8xQpyA3ARjcZP217JaNXMEXE9s6dQmWn8yUrsDoYxnd2UkaubL7iUhrkBvpNo9NBr7Ki9cYj8yBmi5HD1GX",
  "key3": "4yHudMTFymiMzc6a2YiH6HBJuwKKXojms7QMexoDWsaKn9v7AHiSoM7BDUYxCgn5EgY52RGqxrEugFgERtcEAwJe",
  "key4": "byTmjzT7RgxT1dLRVxJaEBqt5xAA68o3b1Tw58npDD7tdoYGTeKFioHmcrTSQ7i8yqWk189jH6iwmak8kZZzMdc",
  "key5": "46wU2At6xET9hwuG1vGZZeMYSDTqzWXATggUF4FmJJLJTfAJZLr1fRHhE17k2ygFXwN5d1dxidiYdtFtaHmCgkLw",
  "key6": "66uC17Zzkjf6w2UUnVJF7W8fECHbCzriF55T7df5D5ExcbQGKBrCFCdqJh55mQCTz4jySSFxfVidAsJiYUfAtVDh",
  "key7": "5yN12B85kmQoTwgpFmnek7wL6EhDrfzwpGqUgoSDFCV8eE7oh9dhuJgHiAAyL4Wso5LuJm47zDSaQYC7FACHWVfE",
  "key8": "TguRLLm6BZWBcyf5PLkFYEaUsXR52pai6AMdfHpy8exMQAmLkfEoXhhveeov4wWmyZPPGnTna3Y9JQFCt4npj6K",
  "key9": "4p79xEG6he5zyKsq96z4SoMQVwf5YsvKFV1gVhhWfJADUZp67MrCX5TNfcsKUSYirXbUhFxALqT3jQdmQFVhaeCk",
  "key10": "2prvxR7uNhBwB3XmW7NhULJpc447ristq71WoYcZoSx6ym4fukRL2xh25CisDRGoSrNyLxMo4axbmCduDVQtZcWQ",
  "key11": "jstaJ87y9ZuWV3Tf8QkC9Vsfwy4r5KA23NbhmCJkGbXoP5oTogjSrArHVf4iKU64ZLbLdNhxq5UQjGfUij2kue3",
  "key12": "osUTxLKhQmXHzUAZ9dFGEgZtSacWrCT1vFMCzWzafzXyQbvRLMLDP5brJM47hAE2KLfHvvzynVrk1oTDj7qXRLa",
  "key13": "5x5pybTvzQ3qt2buXNZNQMRL2DYF85uEtSusKvB98BVsVgQsqrhpiovj4nNcpJhJXKHDBvrStLdx6u7yhXv8dUeK",
  "key14": "KdrdBqi8mVRa6QQfp5brM2nyg8mRymWyzxNvoZEJYmQbhhsRuHvuLKHTTUHCAocmgsKGPnPnAwW92QfXZ5646eY",
  "key15": "2mojwpziPXgCroN4TMNwx4EEQdtRyBmUwEJAqTW1JBNTSVTvgnmqCeq4kuZzTN1Yx2TW9YTGjdc8pAb8L3J6fNks",
  "key16": "2ayaB7ytUh1BHkL12aeM3m1TTpxaM1v3fcZzaKokT7B5wLrQTCFGB2jFWj4bEznovm6ttdk2ogA44fsWQ7qPjuqu",
  "key17": "3R9MSuCM4iVqoRrGMTsHkWGgtChTiVbirJyge1JnrahgdVyhCQeXiKnHwb9vLuuftJyas4UfjUah3iqn9T2AZ2sg",
  "key18": "HqKVWfVr5ikVV2aKEgHDjQ7q7Bxk2DDUbNQuaLKxHEEbos4aE4YBY1BCAH1ATQq3nCnEYskYuHFVKXdEBwSVYjL",
  "key19": "2anThuieXd2WUxdQLkELqMk6ykhzU5w3hw3FQp1WfDDTtXY3KcTmaKMpXywUDhQN4dbbCr8aEXCPPTEA6d93DpVw",
  "key20": "61EFQA6zVhPYJ24idMZepvPT6jgv7uthwe3xYREKJbirp6KCBb57rGdhkQa4pT1ykWBYLngvcruVenGpBXH898XT",
  "key21": "3KMm4EvrbkiLKohtsqP9es9YqygEAm3DbLgLLe5vtXHG97U4QqwqpHfxgQg2TK9ew6pzm7dvk2s76sSkczZUJCZh",
  "key22": "4tnHJ3FcQynUaGrddADYvRDMrvfbNxixDhhywSzFssfDPCKAVJDVofZnhg5Ev8PvSfj7MTv8VSR3xXzWTNuHj1Xu",
  "key23": "2NiveLTCZeM1N4eePVyKbEm2QRNMnG9fj29RDfErdFg9HH7G2utanj3mE3T4pEKVxCu3XmdXzVSfFpbkUfRrSdDR",
  "key24": "2y8GVCsnqnhugpJ664ANvPzHPDgsvxgiFXmPkNnFaH9vmbTyWyvBbBCdMpF8A1jaMWFqKUEA11VzAn6qCnhpyRU2",
  "key25": "2noRBMctYJ2WC696fNyy1t39iFdCDUn31GXvzBdhqZCQrqySySGG2wRHLVdGgaUqiV3oVNcqPHUArhHjy2XGwsYd",
  "key26": "5ty3AFGuQPBaZyy8jrH2ZjybEYESZiujzryWXKL67Rq9HmbXzYuqby83bSAJowqbZS9RjfTtXby9kfBTaSGUiQJU",
  "key27": "3QEYrLiRZbd7im5FrATbcR8bHVZvuoFr7tMzZQxufMwdxUnY9ienPJ6F67yhsSxgQC2wBRVVmg6kaNUqxFPsmTDw",
  "key28": "3NfwYj5KYhgddzANRrDyn2hmiKacpZMAQz24b2RFsrnCwEdMD9oynLcMcHtojbGqi7CL6Ycxc5JKFprYfffRcm6q",
  "key29": "4eAiHGT5jF3LkEQSiAAwEoq73HDkJtyEUiP2qUpWxYeedRzC3VA8N6NNKrZD5XPt3PG2dd4gPJvzPdm2zt4iPrE8",
  "key30": "7ToxGMRVBWXpP2k7sNhzqVghZijMdyZWVmPggXw1arqa93QH2exTg9GXQz79nFLvPkQKx59siiCTXcTFBaMgNk3",
  "key31": "3sFJ2bD2zToPDxMykRjpjr6dWHt5HFHyNLNwVLzuJD96Qj5wZsAkaEJcinGXb8ZGBjXmbQaaqUSG2acKLpDTMjqG",
  "key32": "3XETvnfhN1wRMSXZGSQ9yGLYKCTXSsypBgwbZvzovdksmcvFTFnuV3WmHBvX5qyLUcsGjtaEyxRDz1jBZ46Vj6ct",
  "key33": "4otaG61ZWALpDNemBxw11x1z8VCPYMU3VyfTz2hvMgA7EFMToNdLWf943W43PWvXUGa7tmgXPxWQt5eBpWKmGMeV",
  "key34": "4HXsJuLMfQ2aBv5SjoC9QaUTo8azXKeYu4TYGteu45CGy67eYZ56TAGSiDj81iHF9o538KknTmJ8yXeb2svwVRXT",
  "key35": "3eBzg6Wmmhf6L14QT4Vx8o4tEe5DA6Gm4WYS8VHTyMwXQnBspC6YTgfoUxkGgEmHDou8xv42cjByE98cFuRv3RQB",
  "key36": "EA1bRVQJWp7DLyuoZnrsGrbS4b5y8dWTkvQEyRpWi8PYr7mL2RYecmrMAWdHufncPahAA1JnHkzmcbAdrH7iwjD",
  "key37": "3kiHKT4r3mgjhQSKnTthHphvvRSUBuceasxPzS5P1MiEtVisBFsMoGHWJkovJX8kn5JubRJoeUgyYh5aAcmSdiX8",
  "key38": "vN9Zqd3J5n73pqjbMTd4hcPsLJvYYvhgL75tUUm5RYug4tPCwnzcQnQKYAkQRfCbFoY1ceCghG12X57Qj9Vm3xv"
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
