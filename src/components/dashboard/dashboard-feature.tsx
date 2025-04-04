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
    "4AMtiDHHtWykHTdvdhhonag3ZaGAB3fu2V9BLjTvZWvEp5ct67AW8EfcBky16iQBwdibpVDZdNxn7y6WXdyyx3br"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NNdY4ANNxKbT1cX6tqiyMLnF4bxbVrmSCUYzGtFgMXccBhN2doyE1BkRowXUrf9PujBMgbrVq4uMfJZCz4dUuXQ",
  "key1": "3TgzvnHEcBrPL9XoGCokYAFz5VpqNmUk7XiyGe1WuiMQdfd2v7voWrnZvaBe3xnKd8mgpeZi67H7yaFXRnUar8Jt",
  "key2": "3sP4Xi8xoTVLB2xtXggcKtqsFSHUbHHbQWNnZfLRut3HzcamB4GABqQ5Yex793KKo2JAnBQaAmFZWw62XgVKyd5A",
  "key3": "3YFrtnsJGXbctr3cg8y3dMkvf2R5uX6kMNe5hiBN55tcXVkFuQhPRM6cvpFfJfDWLEPMY9FLjs4QKaKa645dodrs",
  "key4": "2Ft6dpgzpdt6wvkQdua2cGQdE488o1yy34c12DFyJia1XCzJXNPaytiybTuiF7Woo1U2QmizmurHbDXd1PFHza81",
  "key5": "2qrCTSML9wXGBuZz2j4LF5kewKtnrngZjcjiUiKjTi3m3ajECKzocqT1TWoHZgWvqvMZ9XeC8XSH74H1BdhhzNs1",
  "key6": "5eaR6cosM8SJRKcQw9vTSctZZFBPyeSkjhJpTUQMGc1hzAVop36tDFcSWkJncFVpxqCDPnTDzg7daukALpzWh1NX",
  "key7": "fgBpP4UzZwY13d6iHGsGPnpVn7yaY8qCJ8XgrEiKCyNzqMWQ67ohiSmbkkCmJ9TxFCJZqUSUV3djExJvFRMfVuY",
  "key8": "2ykqsQAsNC55VbFqgzxeXhWAZfxbU5CCBAvHru4w3nbEnSt5c7HKRScKRcwJWEcvC1zEEMkAUQRM9SruZKP733r2",
  "key9": "2KQ8g1LqsyFHBhWBe7Rz11d4jQRKLkHwEjVhgg4BcCWQhJPcW5jpp6KnbPcrk1uo2bfNmWMRowrMJWsNaGtQ2Ed2",
  "key10": "2kGkftqvZrsBpPb2praQLdSA3SWVLaAyHaCFW5LSvxA5VcjDw5vC8ujB2UCMt1bA1KsL22AbWyffXmB3VqjfbTZB",
  "key11": "3D8cHAkt5BR3FsWTkR24hoyWgkBmeHm6r2qwH5bVGSNan7CZkFtWN6AfUByRw3NcgFVThj2cViCvhu2HiESyEX7A",
  "key12": "r9StRFv23fR99TwasS17pC1QSKXroMrXLLPfi9ZTNFn4iWrXcY6Y5t6BQ1G5Kpw8xdfRz2NXDZfjN1XRaTZL6qH",
  "key13": "4HvKJ2jjcnKRJVGFv4wwUjqX3G3qLZwyrcP39cB4D2aHQXggqpqQQKwT7WmTCbEgLgnxnATtNYYs3awVuyFRsBjH",
  "key14": "3Q8toCF2Fig9TF2TrD1x2vQb6kwR3jsujC9NvkKqTcRJbUmpMZAqWy6bmUKKH7TyD52DacsYb2YJuBoasiHNsxRX",
  "key15": "4C5Sc3Dd8ya2D2a1jRT7g4qQ5FW7adhwXFMpwaj4SfrcLvrmQxk9S5UbkvRJNSyu9bMt3SVqA2ShTdrQvGYuFCGF",
  "key16": "QwN4aZT6iUc6AwNFFCGiunfH32ALD3pLtWGb1ukj9E8cpVijw3YxLFAhZ3xpSWcgR71rbiz5gUi6tH1kquz5cbE",
  "key17": "4qaAYZj2618AGugcaQExTiceqY3i6Nq9P89EopvWEVJ4EQDxABGNDaXgJPyUCJsc1aYyNN51h1SkYuxos8E7r7ms",
  "key18": "tfEKsfdYeMkZD9dueu1Wy51buJFN1iMbpT8qnSY6wMxz5bhX1k5Sr2CTt3Jdhu3nCxQfFUrnemvkRLGmWCtDQXZ",
  "key19": "woHXTmS7A6gu2Xru6JWzBKDAcAbMmVouLBFmojtJ7JZsFyhWagMg3KUvtG3mRPpA3WNrTkMUeSPtodEcAQ2u6af",
  "key20": "a84rmJpCxX1Z5Px3GyZtuv7G75caJ18XGMycwciKaAsXUYJ9S1K99VYQwDv6gjBYzMpszkrWpYcdzwMD6otdm4m",
  "key21": "34Jpp3QZ1mmTFfXVV3NGBYkWusSbmiaHF7U6xEAoeQ9jgRoraspRGuHfS1rZHUpszciqWN52GJSPaSLX8Zc9AhjE",
  "key22": "2SdX3rKUic69PV3K2sf44oXZGXaCMLUM4yBLEc4iuuSjocRjHuA1oYaJhknDjbaWFX77KzQx4rAomTPLdovATAfh",
  "key23": "4fTn17PtvTmZyhzCWJLrP7PLp3ZJbc63uyqEJvgfjssPWwGNnVP6WARGjshrtZa5M8CevJK5sJU1iuUDRabM4H2N",
  "key24": "2qK5GtWqkD3DSrj6CEB5gxRuAtdswv5xRhxdrHyhjiSFJ3sZgVLDMRrHEFSYgGiWZRqbdeVUcXycp1GYzgzr8GJ8",
  "key25": "D9SGygdzMVtNVQsvVpfYe5T2fzoscoudfAKueyTYFFpBZsQADmChBYSaqRvywTydQbhm51diVcdyLZYHHnD4UC6",
  "key26": "239fi1kzbPStLcjkqLhr1gZWsVFLUxTTVQsuAxjqxbuopXkzoorTZcivMmmA2hqyKHftheSorsfMVCJvkYuDwjvk",
  "key27": "fE2ebAzSi1GpVpuhf1xLDQ7yGx3zoB9tcXFR8btMa4JNL2VUhkZmEcLkYPfcumEVFda5ZAW82qAW8TEMqhi4fHT",
  "key28": "zyTMXry5nBwfm4c7kCZ571bc9ZBRmf9MAq9t1EcWM4hce7TfcGiZKaaHGX1iLVYdzrx98pR7goDvcJmcBJ7Kuss",
  "key29": "3hmykQxBJPfohAHqKndxhdGRsJiEhWgzefZWh6jaLjH9mWyWbuTLwiCeJgJwHwRHppfuQdyYdxwxmCzgqLgVRMYj",
  "key30": "TgZucTp7Qz3sRM6z39a29Ybf8AD18zCGkPzvFH9F4uWkiCpn5CFZnkHfXHBGXJbGw9bUmQVRx2Nr9CnUvK8LhVo",
  "key31": "d8M7SsDHW1qkUtfq4vEPGnGrf9XLkdW9FK8b82j7THDfdq6REBrDS8qyNkPcJ7f8MX9WF5mkXxSVj5gKz6bq1b1",
  "key32": "41AAkZN72LBECtWpCDaYwHMp4tKNMNTSLnefTrimbsg9Q4RpUFQwB7qaotiwYzaRpMAYimb1aSvt4FAtFy1pt86A",
  "key33": "5qx2TsoAd4iRycVGfciZsV6B5EmbkZU2KCwY9Kvr7ZyRYstauFwjJQi9iBh7hAukTGj5PWu1zF2TZwqoqUaMgRCw",
  "key34": "2rdzq7uX2orKxchi6b4MjdfgK6uWmc19gAyrKHNR4cFKgzbfeX3V3JCb1eByQ6N6JnWYdFX2FoGbXNWmQGNdwANN",
  "key35": "4tkBkQ4VCy4BAxhHsNBEUSfSL8B1HLWjdZC2jsmEtpSTf1qn3LC8MwirkSKsFjc9JuRjGkApsdUKb72EJ3gMyNyE",
  "key36": "4KTaR8Q5xPVPwMKxzsAu5FkfwhnuJnJruMBQh8tJf2Fgvc6Szfc9aWSY38v2CojkzekwogS2BimekvWaJD5MZqsR",
  "key37": "52rANKPoEvv4m6KL1fadMgUapoTu7zp8k2wYaqmQPVJoyTYubVN77NhHWBhXk74aWrjgVdBfdNS7TzBgjo4LpY8Z",
  "key38": "Rr4jP4FyZYgepeZdmGG2i4atm76da1Bq1e9LWuNcfCdUep3gU8yEZMU5sTJJtj2AVAvJxXv71gijBnhv11Rs5o7",
  "key39": "46i9KfWhoGpwPesEY27GmRkwBp84mmrfCDBMpyeAjrxqhxtNNkmuXR9z9FL35enuHSdLU7NoeYAHtG3Z2VABhuv8",
  "key40": "4iTYC5WvkaV5pbRUFiFvg2ubw3mNQ8uQ3D2PPh2v4PYep7LBfUPcrWHM5U9HXvrgTocSDHfpWPHNFibvuWWBXdEm",
  "key41": "44NQrM2AC8fsyBGmWH6YzMMbEghR8WDaPT2NsvGYZNbeLKQoSx2SXgUtiJcM3vCi1nmSNX8fkwDpuFQN3WKYnXKP",
  "key42": "o8aBvoLgGvgfAL7DCwwwZMBRcjoqaRvufMepmZrTLSQ1hdsvv4LkUE6NoRfKqAkWnuSFyUVQKxCCXJzBcVTjyf3",
  "key43": "41RvPE9hiDecqcpJheRWr6BRvy8QVJCkAx96bMLKGvvThY2kthoqQm3gDoqP4YYD6icSFoEft2R5YA4yMqS5WCud",
  "key44": "5T3JbJYUSrMj1XJsEfAdZZ5etYJ94NeWSHLepnPRHobJxwfzyDuRhyf8zndxvssCidh1sKEnFBZCvYCCkgrCbAxG",
  "key45": "5yPCkQMP4vYNq1xBHQ9CYrbr6bgotqkjdV9HzK7tS8DttbH3XxqsWpLWvqRHLwe81Hrzs8DzZ4WiVHdFpN8FndeL",
  "key46": "4exDyqvCmGaTrG2bY3dHdGqSfZL1sTGcDABDdXht2KQiV8ZdjYx8Afph5GVQt318ospJ2R7HXQiESZnGDss2fvms",
  "key47": "cnpa9EVh3YkhaFbsYXgwwWzxwQpHWSUpXFhSU1Ymi9mLHwPLDpHfRLbuQPrXRqrdCVJLSjVRfR1FJtXb6Mudd6M"
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
