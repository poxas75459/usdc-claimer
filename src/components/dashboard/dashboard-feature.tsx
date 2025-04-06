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
    "2da7RhRnBDm5hwT3X4hjqT5mUQNyZnTFXKnKnyJ8iVZZcK3Y9MmyT6UQXympeD1ts2vD6mtmkJy44LezJdryjWo5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QsSLNRc2n9vDQ3wUUTs8GAByPEgMuamcUDfUtHzddP7kN65wqCkrsnTi1G6fLjG7nsFoU4PkeSwUyfRWLR9zFfG",
  "key1": "3mLQ3H7t9UwYzcTeK7Nq1v22cQ6yCkXpow4MgyFhPAynoVGcmoqNwGspkeFfsyh7pdbLwHHBAiDTuCPowqSACQt5",
  "key2": "2PkxVkJZbfNWn2o1SrajeiCt2SrHbpUKs8VDJjeMGnN4jG7LgKuhTZxb8ocLjHbQ6NmSg6mTjtuHiEG3sciCt6Yg",
  "key3": "m564j3BaM8suxPZ2hkCczxys4HEuuSBo1Ck9WpT2CdFkEMMyqiDSPXxKcTaq7qnpB43r4icdTz1LwHbXNgdNUJ7",
  "key4": "5CxyMKr22V4tcqyJBiHfKkF65qdPMytrc5oMLpFKXoSuV1tXiEud127QmJtbHZJ3znH7PpqFW9npDEvHkJ8TPgn1",
  "key5": "42NE7cc5jVaFpyp13moFyYJCPikaDE3tdMAmRMd98nwYzBFmnbUypP9LLTTPs3WpMY3M7W4NfKyyxKLb1EjE2NUL",
  "key6": "4u8wpBRZShUwNfVBtUeAf9Xjesw1Z9podyPw6HHKKUXnzoVAEaKpEeiKZMxdepSHpZfdN8ixeDZXgBJNGBJZnQfU",
  "key7": "28KCUtMuHzYvvox4rNm13AKtgfyngkQfJSyzef2CXSaPZmZTwp1ujjNf8BbcsWnjBkEUgUgzsBHx1Zu3LnjVP4J9",
  "key8": "5fwmXAMVrEftowueypccsqCRpymWTDs64vvmi4txdrwEyuNuVKmd7Yz7PDGV3DEuRAg2vCKuEF1Uju3AykSCNCEx",
  "key9": "pPqS89vTbnF9xUUWsWYHXqhD8Gmx2aEHksCwVchKQNwZSaTsobUWnPGt5wRG7RR8tjpjPfZK22DmJwEy46rEpMv",
  "key10": "XUSnKr7aMr8AzM7ehf52HtAoY9WXEwcaQPTiXGWHrNMc6JgC3nmCmoXJ4djd1TrcNzLZjE7bKQLmrgt6u41eeaV",
  "key11": "jWfBvERJSokmPCq6XiPbJFciHQG25D8rUdJG8WdyMm7PrVM7vf8cqaup5g971cXsxk371TVocR8s1hCYwvR4ZTo",
  "key12": "63LJqmLMgZDEo2jntFQ2DENWRF1Eqty1pBBdV6zkSEJWr2ejUaATCFfQZAYZ8zdcu8bpyoZ6b4krhYvgWNq8zkty",
  "key13": "3Rtb6Rmc3H1RNaY4XmrxGYxBwF7hyDwedB4FY6RwpmTwxTk4MqCmTEssKrEE5voN3Xiz5vXJ37qpj3Erfh6CgA6S",
  "key14": "5LsBGdXvrzdwg3pUm2YiVyJEwAYok9wwLuxhJa95hXgJ5LaNUmk41B5nE7Hi34TUKPMYZjjcBV8o68MsLQnujepn",
  "key15": "T2A2Pr6aAqT2AzxSzyG8akHpK6niDdqLjZy8GUvZUXZZSLyv1WBoigXq8L4oTxQF2HVDf3fhc4psih7BxB2F32x",
  "key16": "53KzPPBu9vrVD7emmB3a4LJeivAWAV8DAte4jSCCs7SyaaiaJrVWZ4o5kMfpLPShS1RzNyXf65fzPTVTnMZvxUHy",
  "key17": "zwDXjWqz6qHhwaEAvEYnGSuEyhQ1E4v32r36ffV62VgqBNyEGo1xS1nRnWFp5c8MLpFs1ZrWyva7V721qFWGKWq",
  "key18": "5azfxodvbta93gNsU6HXAD5H3HviGMDqSR4AtW4RUt5L6mddxkMXunJuAyaeG2HgYKQDtHBtdu3XRWXCzshCJjDb",
  "key19": "3LHxoDgNc6G6ZA55Er36Vd9eu3u9vdoydgS99n1rpmTi9tJPDSH5Hm8ryhHGE1ttZToi4vcCXj878eWdNZ8r36md",
  "key20": "4fxwwaC9JowhTqthDsXztZ6KYenCMp3n5dizxiqaMsnkrCQcX1UoznRbHarffEpiDxFWYicwYJH1qzToRyNndGdD",
  "key21": "oRtgdHsaycveZ9KEJw5uNk4jwv9a4jDANbJHYiM1t9iiUdeSS7TupkuNbCickVvjgrADKWivTyFtHwdf4F8D8EH",
  "key22": "5rvvar5TRdySYNHDFM8frQALeFGN4c3R9W8D64iSpQQqJPayMcAbuSGVpXBEePcPHrQanRNowVs3Yr8iryGgJ8Ga",
  "key23": "2Nqb9Tjk4WM59j9ig2dhksf9v2FKHKNpeWgPqJ9dXdhP51RGYmDPptzPtTFbwTBEofEbb23U3V4ZNyn5Z7KovJpf",
  "key24": "2ceUTtSeJA7tPCmoyyQSSJDiUCPSCbWjNkuynnmyFEPVoL37HLwgFMi1sfepJySiAkBdSememrVC8Ju2Pz6FDpSL",
  "key25": "2y5BQLYdTTnrxqHcFpC4tjRqVAgn7bWG1X3ffTfUjLRd18R7apr4FPLU7NpHQQnYoxnFD7CLLpvfnaje2WqMWPbP",
  "key26": "3TXz1pjAsxY3LuAwzE5XoAnFa5QzvDwePpYpTuhjSdYJeuKt1PpP9EiUTHaxFibwyqqUTy8mxcyHNHdmtywi6kGe",
  "key27": "3Uvc1c511xmgWjLhuyHyqJjMrNYJ2iF8hBPD7j4fBC1heL7fTKkCiHch1suQmmUNwTLZdbxwpbYkj6weJGSNbmBc",
  "key28": "24igs9FJg9bkS3X6hPsyxKxBp8m77TpC8YVmNYpmG7pjwhXkRCPYiMWvP7XG8wxr47TrTwq6XSKPfsi48s5uQqRU",
  "key29": "2iqV1LJr34qbrVKgWkZMPmy4WwqJDvMKNG9bQRXarXUVbv5GwSLDZcpjAiVYQwyWwUQMR62xMtYVxd2TczTk7e3H",
  "key30": "4MmAF8JppDB3vhgxJhnmpNwKKTXqgdsoP9UQ63DvcHMpXFqQGQWXmkAJvo69w8t1v1CPWZbaNcYLdxg1gvfVjyja",
  "key31": "2TQquzcJvnpF82jwp4dfLtwdBPZJKHayaHzNKZK6ugTFJhhkno6W95dLmMX6yJweNvCjKK7KfNb2BtYmrfSWVXmL",
  "key32": "3VJdL36ppjFdRgBv5fBsMkwo1QcYBuBZGGZkwS43Yq27ZMT4DY4AXrQFy2MXRHZsSZjZuHHnas7wHwEzPoVdiM6q",
  "key33": "28zUrH9DLMv1wDBmJks61MaCF9QNHnpwPGRvs3Nj53csaH7dyRjUoNEc8N3MzasoXTgh8QWBqH3HAGBGzBQuezgF",
  "key34": "4FAxDGQEjf7ErH83n843GsRNYzPPMtC71cGjmJTYEMgqLyvnHGvnP17UT6gJTMxeLkiN9St2obAW7JwqUqdJSfrj",
  "key35": "1cwAyW6c3tRfH615ZUvFUhbWYM8EiNUt9Yy7Twz5fkXmL4gJJL52KciGX4XMXMRj5kZt3cdw9JA8nzuzBZGQTAf",
  "key36": "3nFnDwS3FFRGGKB7fAE1j8M1vBJN4ytsp1hzVztwieJqnyB9FNPU2osHWo4prLbgTw3JtZMvGDyh8gP6VELAkujk",
  "key37": "4KbwGoAn5Bfn4dyqDLXR2vyzRAEaW4FxW2DgoE5km8J5sUfeVwxwpqfiwJ9qMZv1L3tFhudmP3TdxpWJHy5SEjT1",
  "key38": "32ddp6HmUReKBJaqVDyFpoy4X3psfPiTwsTsa9aD7ELtwqxhHPNZJgPZAfTaffCsL65gxup89VMV4NpnwYB6h1k8",
  "key39": "4i3KGGaXoA59AVy6pzY3sWhdnvwvX6UP22Bx96R8365EgfpFDJrBuGzu13xCuh6CixviX9RLY1BeGkuvyB6y72vk",
  "key40": "5ww1H8dHY1n2BizTbUNy7YQ9KJKo8quk8q9Cn1dqtTEhVGWDhmymtYiugi7RkBpUrjU4UdPKyw9hHkJJPd1gE99J"
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
