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
    "2QrXqrq9NPLediPHyVECsmNEXKqaHsHnM1hwnvFqtuzuZ74mBHEbv1QF9JEyrzkRSQXtAxNXLonJx18k8nyaMqoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eTUPQEhgbJPrxRgQ2yVWqvNKGwhyXDkjPPZ3nzT24UMfYUx7fttLg8TK3HYb6s2DFc1U7RPPYLtzB4Z1dKsvBTo",
  "key1": "4QXPQsQNTvppxKtQmYy19AcrvjBQcF7LztY8wMrYfnXLyQ7n2cFgHHhXE19xR2TvDr3WEufmWKsKxtWvn56EAzpv",
  "key2": "NCxx7oM41TPkJHm5M1mzYYM4z2RvDkENRcfmCYNZxjaFkaWusVEN4zFLnQxWubhXZK2tFLpYaACRN98gEuG5THr",
  "key3": "23RyXxEQJGv51aLTcDtyViqJHSmvAY7UVwh7M5EJetVxU62o92dMFFHDtAm5G7KpyewgNdKJm22dMpu5frSGt4kw",
  "key4": "5nVHcxTKmycScg17gEVy6eSHVWUT6MktF6ipZsrAWnpD9s6CDe3xn1MjGKYtU8yYwPVdxQgcDbWCzec8aLuqLCH7",
  "key5": "67MQCtd9ZHUfyDVVYob8S2fs9RAnSec6JiuECFRWW2PNhSsVzMKZk1mSVZB2mdhK1bQNdpoYhfT6yArhnyDvtpJB",
  "key6": "4o9vTJNzCtB4FJ1rzrWdEc2nPLeTr2GXKndDJU2MHNUpyeqAh5RB8Nh2ZLEqkgZPzf2rfV1tYWC5mqzF5b3N74ua",
  "key7": "2aTPWCvJusRxU8dANJj9xosNEuqLPXRLd7MqW5MJ91LjjCzonBD6PwW54MFLPwSxEJ1p7mRzti62Fgte1xE8dC86",
  "key8": "3YSbhWib2jGdgSmCDMwzVnrTFJ1cWpXausaFThyXbViqkvYfHeVwbMosBZYfgU7HWTid18fCwMZCVwiTE53H55Lk",
  "key9": "3BTYxNZARu4xUWQSP8E2Am7CnMxWn9iRsLCL7VMbtZPcr1Lk6TRspGL7Jj18n9SZJxgoX8Dhc2ndhGLmydBMFS6f",
  "key10": "24WkLqrkt6bZLJuqX4hetAp9j86wSNrWEq8Tx3hxaRp5EbfFhVNkvf9j8m5CiSAAecHydw7aG3uAPiD6znZPoyMN",
  "key11": "3wfbNJerfKGe2h3uG6zh5txG9xfDDRKG3PyNmtpywtoVrTKC5Ur9iRJDn64LfHJzNuEQQnkTukpjYdcB9FsRBw3c",
  "key12": "AbBYLpKqxqkHumgfDYb4S5VzxyxWjFU9b4EHyKBLMremQfF29RgXDA7e8kkW5jE2R9QHTuY6Nv7jsGk9oHFsynn",
  "key13": "2y1hguJUKbEMqs2sFpBrY97aPA6wSx9gNJEFhySsfSgdhP8eCyiAaZTCPHEea6JstMuMRsVreVy8Wueausox9c43",
  "key14": "3YJBBBnqqmuTmkDzBQNCfTcxacEMAExhspZB7bAAZmiBGvojwBBYHWN9fcdw5b4HSmw3WKsHTK8L35zK7tqGXE7W",
  "key15": "4bZ65L33gZLgtW1cRukqrhhqR5fXvSAdqHbCZSqu9gtLcsHv4vPSFxshdzscRBfiAK2N3tXM6yb3sthiNh1pSVaq",
  "key16": "3J7ZGq5yRS5jeQAHJy4dFBw751Y7M8mJrQdqf33Wdz1SAEHt3PboMvKBtySF1wkigRLLiCon2cySPSseS4c22KFe",
  "key17": "4h988zWBGYvNkdjLa6cJhK6svw29y3n81A5feTgf8revNKzo6L8A2PwKc5ZcSPRXdUGiSnPhLxfR7iyb89YmWaeo",
  "key18": "3b6HFXsrfPgDQVtNwbvNCGgnWKkahvYbuShSkGM72D2HiUymDoZ7cbJf7iU4MVEP4zkdTz3L67fxgfAdGABctsRK",
  "key19": "2cNb1bC9X4KLiME6GCHKHsfk5zbHAejUJhDibmwXbVJij2VUHWEn1oAZMGqEXKvpeLnLHZhBmBdRDHrn6aHm9843",
  "key20": "5mXQJog6eLWBXDVa3gH4bdxEcPXqbXUZc6FWGY9QBCh6apzyZQmResS695jpsyzNRD4snJzoipnuVJiYQ6gm26dK",
  "key21": "5PJhebzpxuhisnvdsjyMkL6j1skYCayToYtKcoZZyNwV1TekyWSzL6uKC4dPeZeojxV8Jo5zgmnB6ShZpj7DzUvh",
  "key22": "2o3ZEny6EYEKSR9qvmctrG1xXYig47n4RHxxh4KfR8GF9dMwP7CaAgfhsxm84fvw73FchYuAGneuEExJf8iEEbN",
  "key23": "3nZ3YxybWKd8p1eYJjRp5PN3gcg6E74x2TLn53ZUstW8QEQP9en55cLB5rr4CTf9NQHZ89tQoLUFuL8Qg62DRdEQ",
  "key24": "477sgid99KkYCvnEdryJJUCDBvrcsuMKrv8hAfECM2Jw2J8HsbfdKnYX6APrJWN5WXLGphsGweZyXqGj8BjNMzAV",
  "key25": "2c3dHsstR3UEmuazvsqpfgh7zNQGdfAiznFnDWPPgkzsHnAJmQXjBsM5XUCETvNaYBMw1jykABwptZnqvNWUhKQ4",
  "key26": "4xoSBo8wtzRor3w8CKVcx6KMF58BGrxjYePgwtPxBH2K6ncNVJuEupz65A5kQmTiHz8RFj9PRhR35yShqvVp4KWQ",
  "key27": "4gHAM3RSWtbZbf4TEvomgWTaLVZY7LoakoYs4UJa8FQowC1oyThtmjaQFhL21dCctURzzoumSA3pK8kq9FxaP2f",
  "key28": "58fUcV1X9RpopyjKjzEhoueoE9KDw8bPbUaqojkXsGaqhkCXSqAHLgaqVEQ883GgnX95UsZXmBFc1UpJS4qbGW4L",
  "key29": "5xLHfcY8T62FsCULMn9XZgVKMAs58wwQjaK2bSsAgsq3PRPAVKfdrsxPp2Dmi1WGvUQcY5g6DwvL5N7DfWwtHkEa",
  "key30": "529k9wujLwTjdVbpXdNY3WaYnFgTaWzvJ58qMuYsh1UxwFZJMShyfRXUCvfhmZkHfVsVKPUrbZX1RUJRpoo4hYiT",
  "key31": "2ZHAegpTVQoNXmo4W4NHUivrDHmAC85HW4EC41AHo2Mdvfm35mnC27bpJ6Q9AGSkF9f4PmZVmvLsmW6orb7NB8dB",
  "key32": "3SJDCsHPBARMuzDgu4WGpu89dS7Vcp9DeMQSwdGWWFXcJ8MyqAzaiAVaBAwwA4K96A6TiVroNiBGQEGeAUKyRFo3",
  "key33": "28jDzbR6n5S9fw4w5vFzuDAtB6mCbMudHysxZV4xSJmgNSqMjpqdKBGfM5pyXZGnzF27ERkTaCGakpp6LzwZNSmE"
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
