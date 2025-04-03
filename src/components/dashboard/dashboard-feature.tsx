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
    "5FFb3QbQGfLSCGFUn3tSxTJxmzLoKF287UUXnwxsrxhG5c3odrHDnqik6gZLsH26UNa36m3PiYoWgCjSe4DqycLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SSbS83KGv8999LaxJFj175usZLwcicVxfDKbcwWDSr5gbEvv8uEKzuBoBF6iiiCtXp8tuuhsrhCakRCEDcjHRp9",
  "key1": "5qHdfhGEAUAC3yh3PVGQ1Uw1Zn8kvZYSTzncW2f4SssBqvufNA2mybeFrTdeQiu3uBfitQejsfuJVcEPSWZzLQ5F",
  "key2": "4tetNJQH7bqponCsXxFz9aHEeUN72RivzKMdRHDbpfsNZxefTEz2HFqme5UrHAke64RVBBzneDGA4ESG4FRxrSix",
  "key3": "5PFsusbbeRoJ73K9k9vFupaK9cg1zEvArheqArMUittqgjjDAL93xZ2PTWWVQP19QhL8kNG2TCxuYubRWP3qpzfT",
  "key4": "CRuENNXxCAnbeXMUvYwsXvVaurtHsCCH1BgUut14o9c83JZcpn9ZkAooqUujHsCsEz9NUptE1UjnYpWPMtrFejY",
  "key5": "3y5Ef4Muj1DizzsXYVDJkJ1Xvwq5Pas5YpQjyeYhTMVspcHbCiEWJqEY5k4jivJoCrq3SQKyjzVV9ym2P5kQtWHB",
  "key6": "5WKEiKZZDM4D2EgqZ6PqKhN1WePrHxTuSPEX3c3UqkspRdrGKTcCFZSmD6KZ27HcWfGhX6YxdUX4mZYf2ykscBUz",
  "key7": "58Cx7ZnJEGVEURP1vgqNBWSCYMTmcDq4hSkUd8kfjm82AezDihFWhWxgtWxE4xh236C6MkfLwXSaxcrsgxvuQ66y",
  "key8": "5yPqHS8j1BKJHsk8mRgf8zNbMxP8a6WPdWmQFVD74KZiQj4nTkHA5fgxFve12h4cjeKPjaLXhNyrFwUsxdrr1Lcf",
  "key9": "3wbBvPwx4eXumCvXWA3Tm9MvDkeEUWSVpgHnhL19PiJm3npAcvK6m3zpnw6mxsNqDWHLp8UN9C6qcrbaUYN3ZjDV",
  "key10": "5zFiWFByQevQmhpeMgfrYCaiMK1Fpd75e2ArFAkFUvwLGbJGChpskdtFzVDtVFBrjcRWP3CycqktkTLrbpRUZCfv",
  "key11": "QCScFXvaNGWGa8TYr4Nwmk2Lp7e2KxouXJ8ZXdADq1Y9k2gnyR7fEp1UrqFBJNnL2zsAZKtTcQ37v2dQXRKzHwF",
  "key12": "FNpZun3rFru4TAWoWUhqgA3vjWFaE1JeDP4NcQCHGdchdqFqvMQ55uVvnCRNAMeqH6sy8DuM3tvgfBbeC25VmKV",
  "key13": "5oTRYbW8jKWrLN9VE8UmEpAsM1CmQ6NXzwEzAcZwqXTCf7mtpZz7Czuu4DbeyS7jZrbZWuzfBs4gPtvC5Pvx9Da1",
  "key14": "2DRrbPUzJiaNXbURkdbjMXYjVLvce9tVyqbnDLeXYzUE4UZRYrmPtQaPje9QmuXeLErBJ26hqY4AeLReB2WscYGF",
  "key15": "24GHG9EWErkbiXhepDHXcLKLUjbdCR5Jat3ybvJ9TvJXgXWowFrzPV3SCYKW4zuA1KpELmtuVxMf4XUWtySGNc22",
  "key16": "3x4nx32gUNQtLaGz4N8iUBRsAjmEUSBnMsq4WZeXTThnhK8FkWZpqeVGjVzfPT1iN5HjsuDkk2keSNeFHDb8fkpa",
  "key17": "3jVZE1aeK7H7SFkC4FnTvJpWjPuED5smq7VyboJKChdYNBLXYUHh3Weqw4F1kcoByJV7n57HVsDseSdFZTZVh1MB",
  "key18": "48qaWTiZLrePRR3orsKgogFxPv4SG2abT9b7jPyzdJ6hjMCAXJcuxWiJ6MekdjMoawqc6LgpB1bQedpGctyoJWYi",
  "key19": "379RJdMx4rS771ASFo9Pcm8jGeniLJzpsaM2A1r75pipGuoBvyQTetJxhxDNr9pAoqgEMVQ61kTASatZ26jLn27b",
  "key20": "2bohNuLAai9NQeGmzz7bPwagDgnspAXF69mYGY4NiFu6quVQEMuzL8w8w2ru7ZT8jRMPnZ88Nv8r8GNRKYTbH6BP",
  "key21": "2mpP4hDysXVE92nJbzvEnkQaeKyPS55cU5gis11THJmUNmW1oYhxv7c3kid1p82geJtD2unmYRJrsgp7QHgBFZ15",
  "key22": "4kGMMzEvzAabaXbfPhGpkSWbqqpH3rWeueMAL2MN5qzotSkuguz1WbELAQtMbUa2bYRVv8okHPYTDd4BsY19Veu4",
  "key23": "5gu9451ih4hi2H5J29HxXoHvwiueDXieD2aJPCgdkvRYsPNpZPy3sWZwYNJPunNNkbSfWWFihYLN9jJgaCqxt3Cp",
  "key24": "2SCXBwoLTKp8AFuE77Aton8vp7wLLkyExXvJnWATq7fBhKPTWyvHgBExB1VJHReyY7R6qxhEn9CkQmMDPtrH7u9z",
  "key25": "5cCtWJdP4t34AydG3G2FZYbJpTbY4aNykhX873LxV4z6T19rU7EmPRQRd5bJz3WSm49Jm6y6uXsofLefRiHZoKP7",
  "key26": "4nnhr444e95PBayLgPb7WTNESmby2Wisz6oGtVjZ9vmyvmeCKp8aFrD2oL3NJXHjGNxAgUQ4x8rk3DXmqYX7ucJe",
  "key27": "4re45f36dmQZwF5o5PR27bWV5uzUhUcPh2J25HcMBjcqT8wGnabG7dc7PCLyk3Qu2atyaU2GAuwoZj7stF2iHBwj",
  "key28": "3LJi1YjaNBpDUQaiTn4zWjAUmRaEeVeBaMFYDEerpvMxgVNaGDKCiGEM9mBGiXhjbrQPNPxyGsbZ6e9tffRGvixc",
  "key29": "ixBPRTVYmEmjVYNvjynAFhFD82rniQc6jx2s5chSpaShpGq7zWi3HXE3a6zz2dXuJN3hCk8QCaSo4gg6pQMDLzf",
  "key30": "hp5zoPY333dVmnuh9LtrYhCZuNSmrP2vzUvqgHqB6HTpmrHgrPRh9b93bk4iocRtPcFKbYNxaG1GmBA8QuCYPWJ",
  "key31": "WVtkwdS4Q1UvjvFPwTW6Gf1Da8S9TtouKyVuQtn23srGFYXLLooWzo8oc4APWTgpqqYLdi2bGKWBfiVPVvGvqV8",
  "key32": "QsfeRZziX49R8BMgi7upTN5VD5i646s8xVTCEd3KsbQNjrtZChPxhSakAehgWEuAeptYmfTF3hqSnsNKPfwqrS2",
  "key33": "4TsFQpxtv6LxnotzPw7rFUzjioxXGydWUWAVyPh5ZFXEYmfgZn44yi8R6eSn2DQanRAZTG3mcoq5uZagDDPNTC2T",
  "key34": "q6Ah2gSXG2eJobVZtt93HME48UaZW1uRudEabjYX5WAAMp7KkHpvpFv5yx3LwmjvBfY8VthJATi7ekj4UeBk7yN",
  "key35": "4DeE2Se7EymSzNfU4VNx26ZqcGuGpAyNhpDZ4V46iHwNwy2ATNrPggCfD7geEpDXZN3H1wxkQZJiZAEWy1usuhr2",
  "key36": "2dsnZvTpTAhEr1yRuxN3gXM4Frco3puAcwsVEmQU62n193Cs9A4y8aYSPV6uMyLwxDJDQYsusAJJX1z8ayrx9YjG",
  "key37": "2SEzCKqVP3ZVsH6sx7tSuCpzrwnX7Qa7S8VbDE9K4LWwYxCtrsGni974utojQLnbp26zJ4bAsab4AK4ijdmtn3vG",
  "key38": "4p5qG5fmah7WSCS5NLEGmXrckhqa5FyuwqqkSyfMx8miqJXhGq8qeUnKEX9H1Vat3ruybtDdyH98aZvBam6Rrct5",
  "key39": "2hgwMeLRvaEdy3kai2cc5iKuZoUWZ2rbbQafz2V492sAZKmKRCmzCfEtPaQEBc2pmS7d9wEykVznh1vy9A1s5Yx7",
  "key40": "4ysRcjr3bEeG1FVmmfcbi9M3A2MZtFAFJ2VCsHyuZNBYEqytoXccvzxhC36MtzTs2CbfGp7adcWiAckmngMNrsWu",
  "key41": "4CtKEb26CWiUgDaghTvsAdHUFicHoGdVZvhViptWDb6Wrq15KXsJDP9QeQkEQH4vKKzXRLkQ5JwYCzHLVfAmefL",
  "key42": "3YaSEfm7DHxhXG7cuB5Bu9ZaKishMVDUNVsZ34LW2bCvkqMn1pC8fSFg3J4FwXmntbC5wv9QTdiqii3DTMczMi88",
  "key43": "5XwJhZfmWX7dDz5DvmRcWHnPnyZBBaNHJ3qEQeKU94Jrb5VctZ9SG9gBgnpHUvdFRXVxqAomCQnqhh7cxNUTQuca",
  "key44": "4D9CeHr6mvGKKhRULbxNptDZSA6raP7Z8rnhKrb1QyABgjuQVFZLd1Us4SXUg9FfBZUnDvVLPhmeCMiyap7ktBc1",
  "key45": "KJBRh3ZfufvRi8eDtiygMUgj3h1eiXzmXnAmcRVQV5uVaFtah5uPj9kDCoGminSM4tXd19Hbna9CoXzfy4GsVXb",
  "key46": "hThyAgfX1n5uHoU555rhwU85hmEvgGukiMKNKgLPMME6UJTXf1VXSJWPauacUWFY6U6mfzSLojcbJbVJRtXa5KP",
  "key47": "ZS8y9mv58QGpwxvcbAgwHES2uHHUSpomqYKd9GXJE2yjUCHiRnST7eRMim5c6Bp1Pyi3nJ8pN7Wqw2ZAjdp41yZ",
  "key48": "1H8PSyS2rnP1n8GZ5mVhr8SCPePgkfT5cXYKfRa6QrxfeaccGDcmW2JUvm2GWhat1TUBR6rZPsEgg3niFrntoNj"
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
