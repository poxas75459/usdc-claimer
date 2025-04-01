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
    "4u6JA7sigNCnpwk7gySaqxHntZCPRvrJRmHA2VLB3pjQwKWdNEMvUHTgPwiJzFmA7g5ZMZLsp45ZHE7Tnia7DuR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mqT4xivzG8iBGB8cLWjkQ1Xeh9B6hR9aFF4MuzLyRQ8dP8WWb5RaiCierrXkNXSDwXEbJg5BnJz5prDNCbJY3cV",
  "key1": "2zDoVfkevwUre2XfLqefXnNpqTHxfjxjHmVHP3FYf7FYefEnSh9UQGbxw4Vs5NvfM32QfhjuTtw9VeyXrS8Si9gh",
  "key2": "4MLvYSDzjKCeLh2rVvMFJaV4JpY1jx4uvispM9sm9BSEvHAjrrR536nw8NYdoo98SCsUaGhgRtMLV3QM6K9HbMLn",
  "key3": "3YRb6pptP3xd8aWAVuCrb5ULTGJRFRzgYm6NbG41N5Pdj6isiVVGreCkdLtgntR21MLWogoLQ3gv8Qj7mFzJWYUs",
  "key4": "3Emkq8bcCXddVMxGq8SDBCcJevfi6hFt7j7ShRThEp7Go5iYAPv2rq8MWhaCoFg66rmEKazkUGytXNku8oktsi7W",
  "key5": "3vqL6WZq1Q5qJ3iyoGr7gnhwrsH5h9XaWuB3Z86xgzXf65aocopa8Eo2Hckd2oam49uLF6Bh9sX3PScNcZHTuVuf",
  "key6": "LEYhwhguitKrMz6fxRFSZFxAdEwBzwzvNp6CzcrEEeDYojzq6SCtgTyXU322DCnoHkeR5oGDgvUaDfxXk23enmv",
  "key7": "3Mxze2QgwobzWihSPGSnua4GMpJXqu49juRimXU8A2MNBddiQ4jyPDUGwKrhqTiNg2qyQm9CqT1SeJAaWeW3arD2",
  "key8": "2Q32bxNeEoYitahDwEGtZXKxGLUyv7t81kZZfVuGXymfg7avTwgNbCo5KNCoTBhH841b6aqGWfuptf6hxmWZNNGn",
  "key9": "2VHye7Vhb4HNDF78WpHrC91hEeVJqFV3vmVHNcZaGqWZCxKcaZcBgy4DVi4acuXM1SDcwFTBrevQivwFAnBeXRp5",
  "key10": "KRP2RDPGbxATBRsDHF9s7AWUEU3ouzBfqnAnnLShf3CM2eY6WpQXfMfLoPDXG3Hu9r1ZGgaKy3WXwR1iGeL3W3Q",
  "key11": "5ZC6ZVaDtD1fLq9Qh1MwduZH1qvCHCf9pYJEbG4wNPxTGaTsvnpGHEeP5LUGjJm6VseYULrrdvSzYLgZWxVgvqZ6",
  "key12": "3ymRgRsg7yUSiYhDJSnszD72rjhjK2wbiMKH5bqo28YWKJfBUFCEjCncuX4zDkgRAUzCeJakk4co1F8BUZ7V3ELK",
  "key13": "2kwQRLCeR3yvfXZa9e5grKcyT9gqqZ8oej8efLc8SSkR8X8eYEYvvRG9SYdzEMAZsn4uaJCjjyqyYqUcqVjCbQyL",
  "key14": "2PbtmvA2N16xagSAJKcKdeVWi7f3viukva6FEQDzdBgFUGtCALiVh8nDs8FnF75x6TUSnMpuvQjEdTyk2xcHdim3",
  "key15": "32BraSesiSVYKQY76whWPtRiqhh3pVux81g2x4wz6ymrYYREMgMhoRn9VX4x6LsVwDignuuvhwMY3FUti7pTziMu",
  "key16": "2NeQG8fMpyqoTkbRMrH7nJwHzzj5GtUyHavW2oCHdAce5tpciZrpPFQJijpeMTKrU1jcorhN4aFYokAVmTU4XgUH",
  "key17": "4pAzp5vxmfemDcnT8Wrs6JjxUfnKyiPgDHbgV1oE6A4Sb1ynUg4XLhdijVbLPw6KEdbnBrhFLCz8qaJpHHqxkDcJ",
  "key18": "4B2SCkkF72v3usRMmpCMXjaBKgTe9M2XkfPeV3JHdKAZAwsSDXy7awBtab3Qbt3feBNGm6qMzQXMmwj7da9dymjh",
  "key19": "5nbapfZSChPDmXjGTfPXaAxVcg5yjnoN82hb3dSxGjGKnTecMP3XJmm8Ypsc8o4BskPUrHLyDtS3FESHMpk2BLCn",
  "key20": "fcjXHe7cMSBBTPUmdUv6XCxJuYLq2sjVeYDfGFhv8iRHuKpubXmSoaTAf1XrsYtZSGwvnEAf7ZXXciaBcbTAvTF",
  "key21": "3b2dRsyZ15N9EJZeFnjwJ2iRChkcH1bCsjFnLKk3GpUZN4FfZdH9z7tBKyojLcaLivYnffrYABE3bm7HoCr1XSxa",
  "key22": "4rFaj4YznJ5APDP7AwUUE9SfMkPfPYMt8PfsjWYYennSpxPqxprxniMLDvakYZuHV1B75f56Abzrof3NGitc1gYc",
  "key23": "5JSfiyzP45B41R6dN8zsuM5GpPsPRXsALXBP2LwDxxuGXjVPwq85wrnDnfZ3gqt7mUkBsFmKm5v9LFPAvudxBnLQ",
  "key24": "2AKWNnchCinBihymDC4hccnDtAdiqWDKYatpkPwdacvpqxJvVeBqhfNpyCssYCwhxso1bxw1xx1Qpc9hL943Xzes",
  "key25": "2EZGiDWCiPMEozFWbdp7JozrCQmohEnoRCBXN6ph9ef1ReLuoyipkFHu7cqJrVWDfgwTWv8ynhrVS3jBaA2q9Hvb",
  "key26": "52pvwti1exKUCBcdRtrdGPVK2qiYvH9gkEsACvhnHnayh5rjRsWLb55V58v1moChDrhamrdmUFaCmCgePN12tN8p",
  "key27": "5jWFi68AQiCBEbc2vmgoh2hPraT485uRzUmfy9UTvjTh4DHQu3DaYUPfDvr2enKZQk8kU4cxsYJFcVC5aBpLDtif",
  "key28": "iqAdUCNAQBJC9UHxo1tMB26fMW1eXzTw6ZGDzgPdNx4c35M3nPSAPNeJm1cikLG7RrdvKKFWfsiEs1W8NFYXXZR",
  "key29": "2ekia1hE8sLv4SFThu8oJdVMbrrGK2suYpzxjicQwGLcfeetEMRM5bKzjnV8VmTh2LDxF6nZZ3V3y1y72hgstTt3",
  "key30": "2iKzEJqGgGB5KaP9qzeLnkafsUgVgkmNRrmj7AiWB5rqqaw5NTdTHotpcJHgdSEvPpncjaFRmaSfBf6WHQVpkHSs",
  "key31": "2rbGLxUpPoVyfdCogXxgx1JyaZ538y6ydx1Y2s96zkTaRiwBrzztoYt4q2QRhttX4UjQ2kxPae3ayL5FhmfU4JTN",
  "key32": "2zbrvhzZm8igZcVPzYKikhMpJTTDtzm2qDt2snBW58T5iaNHhcEmktfBZyTuh6vvzPb9ifMk5hb3Hi9EpAZkx764"
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
