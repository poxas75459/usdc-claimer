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
    "5tRshnaErWqX8TKrcW6x7CamkGNR1BLuSnVHyvoNAQ169azF5d5NuAan4tSRssmE92J9tsosDco1DsqeTPhZoJaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EtM5GZRPYaMNDtvTsahf6zFGxH72h3oCVpYcPyCsht2Eh8iKd98fwpTqQBNkPMG59RxT5FSbP78ZBZh7KAENYc4",
  "key1": "54x7a4UGLvqBtBdxvEBzddSJjo4D5JfcUKtXmxFa33NFoTyBJREY8y1gYPfppwza1SAYEpvYq9gTNoUxd7XLmUof",
  "key2": "VwH98z2623WpuSdKy8ReA7ZuDwJmUTLvapWq2CrHJXwEvZaBw3cjv7pvYHurnE5w1Qna6q4UNbzckFvcKmAKNQF",
  "key3": "1cojAqVbQLbdenSMu5nchhyWi3iWCJGaFzSHFpyDQgTcpkKvLdR81JdEHxXRDuARZEkPPKGdM2fJWEhobjkPBcL",
  "key4": "8ssCb5XEqG7sdRWARzkou54KNHXEiR2dwjBDEXqaf3SZt6p13uhnVC3KgKh2dhos4ich9TdZRcQkmKMufXK7e4m",
  "key5": "Pbkz6gd8rehJ9Ga56CNfs3p1f6Rwt2JLVEU4CuSWo3ipVVaGUcPMgVNKqxwipVwwGk1pvcG9Zv4BkrVeq6GdP3X",
  "key6": "219ruzFUqXMm8wYDtegQELx5muqQDexSC1wZoaVcZxFJiTGJzkrL7JKizRrWL4ix5KRAwi4gYWPk78VqqX1P3EMH",
  "key7": "2xLWxdefVdXHCJCEcrXBs3CGMi5QfpxwRDr4DmMtrYYmNKFmz2CQTwcXFU6AspJwk6h1bMRCY6BUVZ49wRTBHx2a",
  "key8": "8su6rncZr9Dz1VZT4DR34PLmxUZM6HnyZmUUSBe4C5NafmU4LxBGodJh77koRfChU3Y8uF8AUf4gdtBC6RsRsvB",
  "key9": "4YLzN3eeU12JhQRFro6SKDn49zuFxxpXbbjHvx1yssYScXrrukoMaWixEApbyYNvMCcnABrcuEEkucLLfoVNi9Tj",
  "key10": "58KctsNzds9yKUTXduUQgUrGdYN4PA6ksanT3TQxZDUUXTKbsL99ydPP7tp4evmTMJ9M3pNqJL83qhx3ntJRQ9Ss",
  "key11": "3zh8nZqCguSzpHDfGaaQa4zERWEVPRsjJTt11E9c146oj3Q5hidny7kkvAnJSp5x5N8gMMhbpoWmduRGzQXoTE2J",
  "key12": "5W2JFEynxdaB4NQc9dStYpY5V2A8vWm6AnLFYZRZym82C59zBDVVrbYFLvPt5iPGrcpDYPQuxZ9VLP4NausVbUha",
  "key13": "3vDyuN88SfaK57VbccxTCfeY57TGZNBuqohqmGtDQTUXetwsd3Rt7tmw3sSpFKKJw1TVFgSRH4EY7cuP91xTs7Ux",
  "key14": "3FxwfPYpNvNCS24p7xb7nrPmc9vTG6HNShcnV2MVHSceFvwHzCzsyAtTo2q51eE2n5UTQZqvMfwHv2aSK1zbG9Ji",
  "key15": "2MKahoxmHZTibM7qK5VS16GDRpA7r1YAerVHu39LayVZVwe7ELpoY978KAyE7s6rFgq3QUKqtZQ8Qd3RxvDFCHw4",
  "key16": "dgZKXxjCgxnfJvTn98KN1W1wJQPx66uaLdbpW9vqtgCXcDprihqisQiixkuG8SVq9Wr8foLESKZuQFovCttaHvX",
  "key17": "5wyMZtdN39JWLBVWPRaECBxtp2yfXEEM5xmQwaDVnrXuvQLGPu3jFwFpykhHQFGQX3uJsoLkxS1hkv31zEJHrBeh",
  "key18": "5ub4RLfD47ZkCFFmH7uen93NngKptFAcFWgm3oyJSf6VCP2Tz1mHFMUb3bTA4LRAs6NXBLQumiVU3RBFHZ7YcCTm",
  "key19": "4NQpnFaVfGUHnHjUSMvadWfucV6GryRJe9dzwiR5Kf6anp3VY7QtkBQLR6Q5iHkcvCBiqKdTncsaHpzbvzUDZutK",
  "key20": "41FAxN4nyK7aCFMQLeVY1wDU769jZ8kGh9uzKKGTT8yHtk8ChWYJYC6WvBLn2c3ajSYbsNUsqtdsMEjhVuTw7nZU",
  "key21": "5CsnwpnbonJWX6KTX83hPg23YWUJoCvPy9m5SUSoDbWURkiVVfszx1Sw1qJZZH6fHm1Y5QqwwA9R2TtRngakoz1z",
  "key22": "3NCsyQjuy5i46iyXR7jXGaBiyXQJ7keeLSMyRVbuhST8g9rMMzC3sd4M9HTNj2bMdKz3pgAE8morqWcNj8Nir6cs",
  "key23": "2czcwqb41GQD1ZHguezS3HjKVAFyxrptFkxrM5o543aJxk8HDwhJW9RNhZmK26cgG68hhQ2n7ppXbeYuymF5fmNR",
  "key24": "5sF58ZMRv7TkSbexEXHSzpJNxaC7KXqijYJznowQqEbrYHdDeVKdtQKhndF6TVGSjtU4V9t5JCFWue5v5e3HZ3x",
  "key25": "53rA3dfLQCBHhF45zwsaL7m2KJvjGSSQ6PM7qQrDxc34SS6X7dpy7vLxLQb9yRPH319p1BpKCW9DiHmmeznAUgzK",
  "key26": "E5638eLDQjXyKeqqV7Geg714Qk2MHCTDreQrfejPQDa4L2QRNQfCrfYpw7jxBVux2vd2ivPHfKfgDj3bgnFMeNY",
  "key27": "4U5JvGcukceEouzHx9LZryJGE26gSGNJRFf3p5PYtyKmaBo8myFhmb5gYzU2i5zW86Dd3x9iCN1FjRruc1mcgRnN",
  "key28": "jnnqiXgju3z1himqLsmbV2HmveRVP6dvbW3sprufUBLp1CtT1xE3JRSHFGpWPJ5ogSQhQDqpy6fQPyRZ3Pt9Ert",
  "key29": "2TMBB3HspkVQTjRpFRJTo2Z7Bgui33qkRavArpdeKCY8gpuxLnReA6w9e1q1kVYW4ghCAGGdJsFfFHD3GDXHrYYF",
  "key30": "2GSqZEAZqDd2iF13G76bWspSzM5SvbnZ4YGXGNoHhJobAPstVBVnNFRb8nWRvscM8KLVAs4ZStMvXZipMYmwxyv",
  "key31": "S3srauZcJWW87aQ8FrsccyK4ZKHXb97X2RWve8dJzkek7mREgj2pk3WhQULLbTzwwx885C5E2EBcG4Aojmzufmr",
  "key32": "MtrDuGGjf7iNrv4vkp8r3SbZoBxUzXjUDv74Vz8e3VRPb25NCYPYy71BSrW24Ab2QF61RKWghakYmsAtn9zURTG",
  "key33": "2u4x7RUW2z2yZfd1yG9cCHihmutWpsxUt8fyxXweNWdCfKhMGGg9kU3ngmCdvbSeoQZfpvm9uyos8z5T9Meupkt5",
  "key34": "312aobksj5RnNCjTAZFNFX1BGBYCofoN9JAH8tUuxSiZUXjURVkxs1YtpqQua8ef3gtGPHENKuWi2ECUBv63Dnkv",
  "key35": "4XYv5f5HhqVqnj9GNdSFPqtx4znPVU8mn38p1NzcxHHe3c36mw68oXBsGCN2riUJz9eqTV6xgsGCyQ29odG9fj5x",
  "key36": "3PqvoezF2CWQhM3s19tjFuFaRaag8w4ubWkuQFzPFGoL7sGQ3hSoerZUf5f2cANQ1nMuv8owHc5qqakZtJG4KE56",
  "key37": "4FnmPo1WV8udM863YufaEohKJ2UQLNtzqpVPVAnzhAprDMgCCckpgg6Wg8mvcpAiYWy52haHxEtPnCYHm6PgfKMn",
  "key38": "27V1QjtCCpQRNp77Ye1f6xktiyGQqVD1eVMkMSZ6ipcXwVrq46EE5DafsbuGhm87UiR9SgN1vYQsf4G8chf5Tpoy",
  "key39": "3DdnbHG8VDqW5DJH33dvEmx6uYsh7YTxCqr3mWd1QfGPxFsmct6hcNyp1ZhQKW5J8DnQMduod8dth5S1yfreSF4S",
  "key40": "4YoKdXQNRnojwfnKTRtrkudzX6TvBsMXMgmKZe1wwCdf8mCkYKZHPN11QMX4BjdppK9dh1zVCZ6eFc9QjEHuUxGa",
  "key41": "2cYNXaT1JDyT5mzTYB8VipXLBoNhUMUDDY7eQFVU8UM222tG2xiKpGvFb1PXKR2dd1uhf5C5t6F5D9FpUfDut4rA"
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
