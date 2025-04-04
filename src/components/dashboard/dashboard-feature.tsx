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
    "2yt5cRfaFMAqgrUQp6yAX2saK2XvoGfETUhaGSKhpAS4xLG6K62xdnQVAKp4HXbG1h6gFgvdACUiWeRgtYND1AeA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6ezxFuBika2XEfY4YbsTDDUWb5c5KvFNpyrmtTxXDJKdRtvYfVoBSmgDdAuWmb3MyTnfz2pkKK5NFW1h5AKjpfA",
  "key1": "4zv2ZQqNdJQKQHdBEu3414i8U5SmQPAEjUJukGkwt4EVkwamiRqVmpV9vAYEVrjPAQZFMFVB2MM6x7iiM281r6kx",
  "key2": "3teLmjisnunC6hTUGwJ4MDcorfwQnJh2w1bKzr9NC2sa4KkM5NfPHeBTYHUZ7XXvWxM5GopUWDJDkerGDJndzP6w",
  "key3": "4EF7y4isQVNGGXb5bCCv3z3F31zynoYyBf9DmgtLRvGdfawuCd24beURbTxG1bkdpiGJUz44cHfhCGvYcsfVmH8n",
  "key4": "5mhS8QMZWwTT8eoa78H2ZzQDWfXS6WUGHCbkb6y3NTz7cxzazXy6sc9fHSjKNRbTzDdkaw8rUcJzgiZ3EpsszZJK",
  "key5": "3VRy58FWbH9Ada5TC5RMV4f2nyhC91DKAjytszULTQihu38SUeft7aFhZhp4Kx2nh3yKDmxnLNUW28gUPEKLimu6",
  "key6": "vGngD4oCLHhxswMDArhUrjEJfhCd43dKTWutt2nK1HyMu71dfVT3X2QkyWrbRTN4YByykatEyhezfevEWZfBQEx",
  "key7": "4YCySzDofBaGHdnWrs7hW33BxTLJEbTc9ExKabcuEStX2c6jFpPEo93epDJT3hUKyy2W1aRBYjWHXWjwQaXpt2DD",
  "key8": "4CymQmZAWNTXVSCgsEVtC1s3nx6FegJ621gN4XifZySJEyp4ocxawvJiphNKa1wYNjVHFtZdV9YCiS2dWjD8UvD5",
  "key9": "215gReA8w3HTpTBfpxtS1ZoBT2ZQGnszkEvPkuAyU911KUUaKEfkU6xbAy3kaXTzw9Cw8g1RAnxpStaJ9BXueg5r",
  "key10": "GYRiLkaF3KJPb8JESzmXVbwwedxy6hmBsA4u9D5z19yVRLyGocsB9JJTLVVZm7EaiU8n98YjRWQdxsaGezMCMDH",
  "key11": "5KGnjm1NMVZjzKySZ881pun4Pxe7ZsfJoCgvGGSD29jkdNRULLepyygyPuc8fFBdsfyPcpiUTfC7W4JFFgMF4i6e",
  "key12": "5DtiMhWe1KGJ6p1EJp8JRP1nF9aDepVpcdRvokcpMdfY1s8TyhBa9eTpRAb95AGqrSLQQCNdTFT4ibYZLXcCwebr",
  "key13": "3oXunKtfytYDaguJfADeE4Wthu1qA1rzVfxUsZDf1ajhkETbVv4S1qsNZTKvAXVrnNqtYM4bFSuPXPbDb1c63vLj",
  "key14": "5rjDqdB7Pu7pKS5sjFUHhRtJMAuWbuS4aKDhaAUBE2cppdL4aUvjrkfwmM3KT1cSnrsnjMm6wsqxKPsYtzfN5Yrp",
  "key15": "3KwGd9FFbCmxhyGswSHgopCRD3tk2bzwUcAn9YQ9C3CWwGHU1iL4qeG7btvFx2mhthXLtSmxpVwY2xw3UyXk3Ntf",
  "key16": "dmHrpwwFabktWuH6ve18P4VMp22KfcpYEpVdQEr2RerwRiQeSJCSk1QzY7qqmwgHG6cqsTsCw2dB1mCGdeELmkp",
  "key17": "2j1DusKvCSzWjdPcxxni8AQQ7MxrKLPe4XdzwuhzyqiEnnMZkgnTJbnUbsh1i3XzLbtRt7TofvE6DAEESRzqBn24",
  "key18": "5jxy79rFoxMTZWt5RgnKvbVcfGLJJwhrHik8tgYxivCHTGsRYdR5FboQyAwNHsxHj2te67nBhBgoS4pRVSD2iRkx",
  "key19": "2RQvqdy1igGzsanoNvMfBN4YtS3MTEWsnGu9yH6UTySCRf9YHrpujvS1wEy6bLH2ffKw4yJELSCkBm9kxmBAbK2k",
  "key20": "5R2aacGy2gLaPq5fEwJuAubcaJtRSgYNpFFekMTjfj86JjPVFXy4Bu9ewrfSHGS8oXsYcMFh986wrYbTNCkcqae5",
  "key21": "4ogRA7bcnpwoe8MPybCk4imaCrBSjF2qE11NgdnenxcUMbiBTw3uSB7HqsuE7JPWAiFXwRGnBwstTBy42UU5jCVj",
  "key22": "enZUG8ZnWgx6ZTDVyXdopB2of6dbwpZ8fTtimcKSdvJtkB6djY6Ux1iR1h1jpyx7YPCx8jRiWTCndABN22ZWGgy",
  "key23": "2C4Y2QX9x6UyWQTCtj7tKvYpfLq3PCvyah62x5EJyvEHiNA16DrKSk1hpox2khUKiL7hjsqP8S3nwZa4g1EEMjjZ",
  "key24": "3sVZz86jgjS4GM4nprx289mygac1gWiNmHBDgqsuKyZNBgPGMwZ53zGieGd7FKW4bDWVxzuPmfGrAKe7xSMbtSpG",
  "key25": "2wbjTXujiW3ESuN6aUWVdvPMz9Yk5HPfMSfpxq8yXRsNfpourr1cYMt1nNtvjwXzuqDBVnaxnrccG3CX5Zsv9MF",
  "key26": "493zDTmFfEbxSS7cHv9i5gmkzShdS5h5n7ZsecYjvfynzSgZEfkJQT4Lvg67yrEnusgNAE4ycZiLtBsHaFh9bmD9",
  "key27": "2wZEJhcw9tecHE14jk8QEfcgpquhzvHCG23JeW8CxFYLVQKYYjkgbn6mWz3YnYZ52v1HtcqaVJhGz7Z5u8Y2QKoz",
  "key28": "4xxHrKkTqWDj3LufYuT8usFXnBWCQpW4GMUq2jJNvcyTzA4waFyuWKzwwArgVK4bRxxWezWKEZfRrX6XdGbiSNT6",
  "key29": "iTiyBZxC34xypgB58hKVVnRtpqCRHNNU4EdmsSFU485GqgrzgXJ4qF2VLQFnMNEbGYmaf8HYcUCSCo7qQVGFecF",
  "key30": "46qqoYz4AWbMz7n2zGFVTSMce4CR8uFR8S69jMNj7uWxqdKjzuLD3oBnAKhAiirYGeoW11yjCeNVPZijw5aWgxBT",
  "key31": "2FjFAoW3GLUU43S4vbzSSnpbwY5d57ner9faYHub2WP1LKTF7ooZBqrcz99bhK2gJqcDPntfzGVEqsno2rTk2KKZ",
  "key32": "vuynceCJS56B5TJfA6SkkFFZ8riLrBMSJQtuZGc5sTvgznk3pu6NiN8fUKz8Ca6uqr6GYejJirfmu8JJenrck1F",
  "key33": "5jQS9WwXXrKQjvLMByMdzG7Vs3F9gNdrTTtBU89CH1bJxWcqnYcCUVZwAmbBzuWmDYeqeahhGmqvbazPjJZQFye7",
  "key34": "4y7ohFrmrTWVKghYFtiMVFEv32Li5B2L142Ha9KtFejGaPWUH5cByxtKcnUSJfsavVQ79tatuSBwhtcPTdqKK2aX",
  "key35": "2z67CTnSoQEpRw9nH5TL6EWkpe8s2mmrZkF4KWFGNjcUYauWWwyJuqkfp5j6j7j9TZWD51VBktkRCdd88SRs31u9",
  "key36": "TPkCkhMePD7JQrwvXqGi9SRLN5fNPnfcJ45qHHVqWdUqG5SMewVwJA4jbvRcU7BYVAh25hZzkwkBXtUwWf2gVPg",
  "key37": "4VCrFLN45TmwewamQBmn9TjNHmmMdGEY6weQeRHVxX6PqdWya97F9hsvvjKwANyntWwZiz4xkz9KdV7kjXxXsya3",
  "key38": "63oXSEPqnRaJeNEp7HLtDJFKhYrPM46Em5r1hSQ6Hs21LD57XHjbq1T88wC3PdE5eJFXVuoeG2y6yFFKjXPDYn4T",
  "key39": "3RxEFhmcMnkZqgmGf4mqjL1qXENpgHM7wxY8smmW64AbweTr18nmiuzaRLo4uBnNyE9kMmdBsC5375X7F6mJHGpf",
  "key40": "5k88e7LHBQDcriUnZw9ozzn4dzPm2pRKZPL1Xt37QwmRw8UAgXAyTym23bZV6JabKccbzXPF7of7KAW33W4aqhkF",
  "key41": "hhwtCqVLLp6Xk71puoD9pr1TjSUQXwh2Gr4Uh92XDoQr9pyXuYHHrH6bbGiYHDCXSnP7sQoTWuQcSJSRpSGQgrW",
  "key42": "eHWqTUGSfnoctWMhv3j5fyXZdXVZNuFbHZQjkvdfeUPghpNDU2VjCaZU5otRFhgnzqUSogBKjn6AGjHtHeLzHP9",
  "key43": "2GLnFQxkQSx8a7VzvAV3w2aHMmidoSoVBNDQLfVhAWCYBcwJy1sPGaKMiFrchkuxPZicfzynyKmMNJn491YPdocR"
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
