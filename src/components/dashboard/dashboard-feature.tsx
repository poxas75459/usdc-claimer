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
    "4KEn3wsWtuoRxtDFh3HmuWM44w6u8D74R1VY7ii4uYVReud8GHGWtiRzUC1uc3KgX7isT6fTpBLfoPSR2hccgj8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XtKbpBATLBM3KVDAu96yJhVZkyBtP5CRyso7Fp8CNr1mFTF3x9NcvkRhzpQePsB2kyhoAxWAjC5GuEDxLgQs2C7",
  "key1": "2k1p5MaQmywVfeDUuW2JNooxR9ZAcehh5vRmrnAhpX1jhN4jZSgWZgH8NKEFAip6LzMsGC9PVhhnNraj9YxFY6RV",
  "key2": "3HAe35KPqPdaeCvq3BPeHC2kzXw5z74jGxQ5s4x4gmAznhrN2mCV1ds32DvbrfStBgcLgo3SgMQGV6xr5rHxk8GR",
  "key3": "3F9FQ6HTPGZD9c7bUWMmgvtdgEqQ9QnFTCnNVQbP349rGyuS4TB3WWjXg9YjVQ8dZ1ePnr6HqeXy29qZxEvzKNTs",
  "key4": "4okErnQ9dWyywD2YZHFzwPCsYZDssbuVBZtUWsrG1ekjTLEi7QMRFfenivsEtmE4oimFmQiDno4y2XDABzeffUqv",
  "key5": "5ShCzfqrqXgYDauSqNP3MSGNqtCH4QQn5HJR6VRgCgLLYG5ufpVGVLrnbyd3ohJiP8djkyAbVfamNJgcvV47LevH",
  "key6": "3oF9YQGoP7yvTSHx1eJZUjWj227qFmP8DcD1fHRmMSopXfcCEQghHap9npTTiT631khHNG1d278oqyRRq7dorhmA",
  "key7": "5S18ZZKhykBoenW298WKekqtJeS5SeiivL96BvbB1fXnvCqzqt6dgJnPVaXnbDG3BXdSPfJJw18Mmx2T2XRWLSXF",
  "key8": "FwzbjtguCNnkQzgTchA4F2eiDcnECVRWtHZ9Ko7MJnmjhykALfhZXQm3AKw8N4Tay1ZMqAY7mxcsei6WPTh9PhB",
  "key9": "27KNNaT3tbm24DWceWHJ1zp4eYbUVVi7zQfZSrti6PrDHCHZS2ryDFnT29Na29t5XytEaV7Cysf9PK1bz3qBRA9o",
  "key10": "4m29ozpUnBSoWd2bdmjYDk6P6GMNheNfreda6WDLq22KVhF5rVumvNMYXRyvVgURDyCEb8wxHYa42vzfgnSCz8XU",
  "key11": "4NsbyvgDhCizEDgtGtPUtAiwWYEH5RW35ANww2hYM29ZJQ2m9RhL4Ntj1859FUCwuhFBWP2RKKWsGwjRY1jQqVis",
  "key12": "61QVGp3fqC9PwRYzNzACToda19KkgW7i1Dd6uvBnrovfsy6vT51AdCm1maAnUXLho5rhRaBjSsMV8dJiBLfvFnuy",
  "key13": "QDRZpjXVTwyJmk2XAh9CrTRWipEPSxZ5ZEqqngMh3DgDsUcqep1hZ23wHK5trxYs8eDb9VS79ny74Li9zt8MFkg",
  "key14": "4Grf8CJbHVoPeSUjuAusMoqG1XNAmkEPEvLVVv2KPf8WXVGnDQQwS3sPNCuoUbe6CykqJPdU7sVRcnF7oaFS5RF9",
  "key15": "wqca2WdovReY41TvK3UMgcwSC4bNSovaTGSDKDGLG6nUqBjxen2MnveSdMcZidK3MxCysYJzPRZjB6TsFtwynfY",
  "key16": "2e9TVxkYxZcwBETt5qxkfDvN9SE3TFSDqHP9z9auHSQvx9wBnwGxZ4aDCjNbWzefBD9721SY9Xfek4zEgozyrM6S",
  "key17": "5tbZdF4MeqS3CBxBPiJURfDXXihaQDa5J19KfqZzwgctQTc2ME9cS6uCxgaUxRet1NhSUAp8Tdg4tCvyyThNGGTQ",
  "key18": "4se7td7ADMD7U6sxDBNWUZyx7HDaVNeJq6MtkbS89ppLwidmMmWGLvxbpFE2uEVnpsaPhm5qf4XGC5VdYRmAArGb",
  "key19": "3bji1WSeQxKj4nKnpfxtMWMbWvggH4gKZnYDebsGYesCcjjBbC9Xnw86bP3NadjxRHaiDsaUBh3ScrRKGtxfz8Et",
  "key20": "25qk9f7sq62p6u2fgUCARPATHn8QC1PghPEmsXx9WiCbzQRj7NAnfCTwYxpo65vmsyAq71nnYNtHhupwstxJG1ik",
  "key21": "3YgdfiYRpKTQHzyqXEmuPj4WzM1LBevxYPYc8WsYnrNR92zksaVyCefCHR8cqyCK9P5XpQHhJRngkkenrRzsdna1",
  "key22": "54JjixJnsNjX3yPMz9GBV3mqgyXHYCuYAtunJqq6FKjiuZ6z2UzmQujCwUqhXxddHs3ZZUtWYN7DWhmxUMQ7bprG",
  "key23": "5SHL7n2NBqFxnmgnkAraz95UFFfW4CiJm2qXksS4PckskNTyiRQsJhiXmRDc9KkVenPMB8hx2GMzW2EotRyE6WUi",
  "key24": "38fksmfpHbFQ7vTjMtdWduqb9QEV3DLushA6J7kfSdqPsdFW63D4tJVCirFjNRjtknnsS9qsKXdvnpdaRF3tfjy7",
  "key25": "41CCPKwe62Th6VQt3FzskxFuUQVU5X1e5Ps2yjR7FnuVA1us1HvEJundkD5f9Nr9tKuWxEvKfJSp3FytsjA2dr61",
  "key26": "4m1xdst2mXH8UC9tE8Q8cnZ7AABqeSzMd8AxLyCm7U6X7jjKXPQAStTaet3wPvqf7s5RDzjVtJq18FWnPfTGiAkp",
  "key27": "44c26nL5ks5mpHumg2668oFdKrvTC3hmYo3LwWfhsRmB2xRdq24Pb1z3muCCuTcZJ9R5BrJGprB67bKJXi3Vbyjk",
  "key28": "4ooC22FUiUr2koX17f9iTDZKpn8W8UjpvA4DXUeUwuHmpqhJBNPbVv3SZShEmLDvoNyWhMp9AmtWdGmPZC7ywXQo",
  "key29": "3gtfAvCrkjW2TtSuCVr3F2gozbphatgsKLCobccM1UcwrrfWCigzreP4xpRfADBM88FH99LTHmjiqGmM4my2A8JC",
  "key30": "2wzqbgcTAtSupPY1BtxnKSNMGr1X1vp8RmhEQ3Dtb4ZErF9FabQ1hjBYQPZwBLnCP4f6G3FEFgsdYvqj9otjzx1v",
  "key31": "k5dQGMQ7N2ktjqyZ3v8bX1ZYQay4gEj2VbdUQ4HbBsZhGH54qm7BbgsftGh4mzoWfdBoeK3yuBgbPUxmb5HDydP",
  "key32": "3JnXy3rQFpAdrnGdm7CbH9axfDNw218e6QC5xPHDQcs3vA6tJ8uQtZ6dXgbBkq7C3AjyMmSyzsnRerkVNt7f5atr",
  "key33": "5kar5tuRKWnRaU2sqnNbcueCTd8Te285T7w8z5PHyHkVp4LE2Twd9YXqxYVEbw6rjg5Mq5sSxiX4H8KKa1cjFFKW",
  "key34": "3jGU6QADyiSGKYQpMtMy5j7MYvFRqNsSbFmeu65bqewFf2piyPQRJqMZgQW11cPMgDkVTRc2S7EiBtFxaFL85Sb8",
  "key35": "5UYAJ7kgzojaWPdfhxCwkXpbEbQrj1QJZF7VMSyGax9zFczbVVNdgxAHWfFbBWh5nrKGzLy4vD2Pm49VHgAspByp",
  "key36": "hiSvtaZ6tzwAVT6rJQDY6EkpN5DKGzjhSWJM1CuF4z7VG4d1ZczXowmBGiMymFyhdia7V4yQJzniFCHN4GMWAd3"
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
