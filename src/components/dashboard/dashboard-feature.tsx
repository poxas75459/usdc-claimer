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
    "3GD6XsqjXTM1rq5CW9VjLWN2jVuc62FdrKkmbs4DVM15pDpQhoxZ761Q5qn8MiHGBN3PFY49gpVCqao7vL4R4ms3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ggQJPVgDYdPYmS81BcavqngwnDuXoK1dzbQ4dQgzPzjYDRiKKxp1afU5cmrhqMrqLpQS7kyX1QZMYvYBzgLrmBv",
  "key1": "3bcdLPiHp3TDCCy2tsuD7YA5ZcTERaXhXqzTz8NFqxQcA2Z4WruXRM8Rcq4Acv6dAoeTnDg6mtJkiEQSitvnx3cE",
  "key2": "4SNbZQbk1EJAGsrGVbVe96msMfkeE1wFgRPwEWR9JMravRSnimYDiPWycpYHx6Kir8L6opxGNov2LHSiJN4PbmdS",
  "key3": "4nqKP6TKhuaGauKCooukpidrdEfZQAbBJHffaHuKPE9Xeq6XqCoQjvjWJD4LyxJEC1sTwuZxqbbnj4yKQvBmXvaC",
  "key4": "5VtWhSufPfJnZASFo7nE6RsChQGNQEhWVQ6a9JtRkgkzDNhkiPbzTHkaZP7ntHWpoLS5rWkxm7skD563MN11kXTr",
  "key5": "5GhEyhdQ7QxPbkYDswgcLBkHc5GZnm8dScDNPhA3umRKGWqScXSo3LdQZGTkCmU3rAULaLKUuUG2B41qXsB2t93W",
  "key6": "56QUiP53GrhTk628zoRFqeYrpN7Mp28AS8mLj2NVLW5bFKNHNnV5wfgi1ds1m6wNERJvoJaUw7Re8DQ6DQQ14D32",
  "key7": "5HwkEUJ2bV5Au9CCnr3HAHAXXAWa2c7NWdtBV4q75MHDmMheKmFsy6DJT42jFJHru7Gyfehgs4rnToabqMxQcPMz",
  "key8": "4yvVy2fXxPunBHubeqk1wAA6Aa2UWgtg9x9xW6zwRjzkrxEKny2xgR2W2t8rvqyAH6ConcEHTZjm3uVNXyiuZrBz",
  "key9": "yXQD45heP6juxfNh46KstnoyF6L2NZGPtNB12yy7JCmXJH4zdvbRkiWKdNvB5gSFB3efCCe6KDMFoggjuLr5ahP",
  "key10": "5SAmLncWUGLRL1g6tDFaFLLxBsKpNLEp3f5WZUdyNzsDktzuGiVQMeu4hrTqm8v5XwGBg7ruq7M9L6YLc6Rki4xE",
  "key11": "4KJpzTnrWfgwunAxDhd6jS6izRzUboi6M8a4e6AJGMHM7dzFVg2b5YETscGMmsZyQFsbMqyjFwf3zn12V6d73NdU",
  "key12": "3BuRFBiN7zoCPL9xQZqorh44yXYHZJ4ZVaCWrgSo8eFM4C3tf6Ef6ZWMLA652c4zTWSoV2fNV47mYngGeBU3k9ir",
  "key13": "2AyWm44c9nGFz9s3fndxfgZ1f5E3BL4rpuGT2dQefyauvbYsEVZw2VHTMTQBkqdsSyyg6HnAQJQXDSzsumBAUxAn",
  "key14": "61yVDKGDxFtXGdH3BFxf4BwhPFHPq51x2HmYmDwUeZCD88D7UsGGy4WCzF6kJ4NGzzHXp3W7zagiW2PDRY5aRY65",
  "key15": "3VeZqToQmzbmUANxekpcMp32CRyUzynDaDYnKDTy13QCHh9qiFH6SEfmUQpvSTJ8W6UoZRokKtiVMCgQidz9MSfm",
  "key16": "4Ks5EY5uYadg41bKPDpmmGuFnBCTmXHyYpyDvpWjaZT4knuzsUYU2bqGW4UdtJxpfL9wLEHn5Phm7LtKD8Boofyt",
  "key17": "4naH8unFd3C2gPX79hp6mAGuN2bs14JTL6LdEnizotqynpppoHCiwKCCTVZm2H8BnHUcFEy4U9Ycd4fv6tbiZqHK",
  "key18": "3LFpnUuQnjvnyTZhj4UYmSu7UoWVKZHpqFAcpAYThKZojyNofQhm1fN7a7TdBbj1q6zTtWTCnkmiC2tEjaqAQKwG",
  "key19": "3nA4bZKinH6p4iMJYeVvTTwSNCMDAuUdDqz2XacifCUUinqErtbYph2Xh2eYHGYDpBbhoSXg5Dpx9XMX4mEPDBA",
  "key20": "5ETAqonoFZs8AMqDcSo46mcgHQegWHiRJrw5UnzHxBDE9VJ7z5xj3qgWZoqN8Yx39EJJVM79nuLw4usmhusRpFaQ",
  "key21": "34UMJiJCdsRNxwajHddfwgayNVshHkJftepK87bwW4r4jzzisGztRhoaGjpDUGBUDVYVduUmxGmaXf3TMyGCSQ4F",
  "key22": "9FpTZ4d2GCTevVzgvLeSDLjFPKXtf9ycmXpyKr9xiTHS6TJnKKBUJQyn6MkSReo3QvuHSmWcJvWLBb2VkcBC1cN",
  "key23": "5jTDs5aFCs253ZgAEwq7SDagmKRV8f2hZNWWWKkronHNyQFrw8BkJX6ArEXv8H686aBE4KcZWMwaXSwY7jf5BkET",
  "key24": "4qsmafKeW4quFu5NfETwo64KNZmyRow2TszbQpzywumhFYK5EFzMFCdzuzgigNHSAR7wF7MDSJY75dVPnbqDoEg",
  "key25": "5WUPHQ73GcpjbgkHLgLfxdSEB2aaRDXZ4kzL5hzKtFn6TbtgBsxYkAnxLYbZA8BZ19cYp3jnF6rQ4rE2enEAGztU",
  "key26": "4MiKYrfUthxv89cVPFHF33PsattYKSgi1fPHSNiZfDarmdfctNkSZF8eWPrQd5N7rVARtNmW8gL5k3ArV9afPtn1",
  "key27": "4nU7bxKF9RBERqnef3MHA8yiLdAugsNhQFCnqYZC2UEsTY35y6aLGAMzFr2aho4vs2aSZG8QY2uhqGuWQCCRw9Ut",
  "key28": "41xD3vXtZAeptQYScXYKyEzZHwNtAjfgLPTq9sjy1gbMuavfptfQBrmP2GJ8DnFiCsmKBAioF2mB5TPQG6gZJrn5",
  "key29": "3uADJNrZxSrXWbxeLbnbYArSQCcD3Ryy5Q9Rcb3ywaYPzpkpbnXhNqmcwRC74bh5wc9rMXbkNgMyCUDkf7DKfgzn",
  "key30": "28YKx4yZrxaNTQx5TkvGP3cAaKq3UdBYPy5icyQoXDEQyjnzGj1KrpMt1Btmy68KTEPsoWHnFwoxsSnF1g128Y3a",
  "key31": "w6oVDMQxH7h7LRHt5vbZxUSMjhnpzyKmQA9BSqBQW2YLEqyBiMgm3jpz2Hvy8FQH3taxrDAT8AHzL3hgVYGcjtK",
  "key32": "4eoPUcrPvCN9f3s1Rp9zF2kata3Q784jV7nHUxU3xyQNmWyZqnPFKjj9giQeTxxfTo4PKQFy4dxLJx5VSvguSrim",
  "key33": "5DGK4hhncAyfg3WYEevaDqKUGcURXCtnw1pYXmBnQHEKJZipb91MkRSRkiy9irbyJjPmFHCiASrkswv57Qc7ALVk",
  "key34": "5zLTWTQMorPMkSiL3wP982KFNzFcuBBe3wCMzFhtzEGMk1UzD3tpPiywCeVR5ni1Rf53ezL3ZrXEbSgP5FasS8MR",
  "key35": "4kcmPq2ihc484bw8jLXpkoxW6Udqnhto7zFyW3VHRNdjiWCPHnfe5zNfhspP5KxSWBEQzj9UkPjbukDbHycC7wB4"
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
