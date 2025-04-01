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
    "4ejdUSGYQ8WGqF2JRWquYnita1eyr8ynV4Lzwot7TsGcszqzQGSYGgsN1dkdKgYUr1wBNSrsWv6Wo2iuyUDghuLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PZ2DhA2LAa66DHNcKoiwYJy8ViBPA1jKb3AmDgiKRR61ZuECfcAiAzCLELHxqrbsRQhctHQdHf9SDo4h2sBcMhM",
  "key1": "3ZYajQmz8FhfuwrUBZ1V7p8Qx7QcabiRuZYmbt6hqRCqdrZWGjvMCWgZBsqGNrfFTbykrvBf7eYy9a2hUW2oX5V7",
  "key2": "PxZ5ayZVPig9kU1DDT1qV4gtJPkqUdwwmVYUpMe7sdgBe5AzGrTXhSPTC4HwvCTbGYtVUJ9HoE2W9iXqahrHgaz",
  "key3": "EUQt1wMQFCzVRUCSKkE8R4w7yE8YSDdJZG3b7poZr36VSc8LWmWzyVi6Z6kyPzaaWpWCqgvmzGtzGosqnTai9TN",
  "key4": "5KoYCYbUULoQeZGtTusc7PXrN4QKdD9wL29m7XSF7Na9cqQJdtEYcgJWCHpx8EnkHJNhMvtQszq6Ryeq74j7iHH4",
  "key5": "31pDe5Ze8qWAaF7wF5LiGVUgB6gaSzQ6ynKQEwKNL2wf9xL5GapE98nSAqVStDRzQUTvnByXG3Z4x53FSF9a4C8D",
  "key6": "2AbMpdR2w9Qi6zDu65HPiN7FYZ6ZE8JbZ87XQQsseyXKfXNZVkZxeAjyErja5HAoo8pNNxUBMsyoHekk3hAK1aaR",
  "key7": "5wVQGdoJBJKtjjW4B7PSPh28jrkCRTrGczNCPqB1zChMkinrKC89Q5ixqkzVDwkkJJ8PWtZvZwqQaooeDWD1vjU4",
  "key8": "3FLakr58YXLG7k9uAdtWqdZjNC33QHGQEpeF4eDgbRKdyX9cLtt31hyhfS7CePPT1Rg7LAFwsCz9p8okqTtM4J86",
  "key9": "2Z4BSe73X1MazrCpo6G3RRjNAmvTDMTRgbCJNX9WutNySaLqbEoLNNU6ZhQfhgbTZkjqaJqLzDwBd61vtdaPhPDC",
  "key10": "3GgtrwE5U552AUyQ6FnzaqCH3CRPfQisE9mTmtPmr4pzD39xipRUsokC442s61sGShnY9EtodXUrtS3fjtHwBPEL",
  "key11": "3sGhzMEUPrty3fbbsGBH7tzPt21qsoDid5AQLBrGMCvaDrRTb4UrAm5stp27WJkq4yQJUN37NAbtAxuCDXzzB7sC",
  "key12": "x75wSbw3SmNR5t6SzCkBeDD2XKtv1METjqppQDhVuaprZ67sk2BcAHLqYMqkchonfP4BLsar8NMQtMXHzAvo2dE",
  "key13": "2HS7a7sq64Zjd7vxieqyRajLZSjQnhSmWEnoVvgbQYCzdhQcFySkNntennrQDexD6HQrNJaaegbR9wRggQircuxa",
  "key14": "351S4618YEDz2eJAzjw3UiieWezH6xRaLphe7t1ML2kUeabNYWjeyEnaMfoYt365qHeQm4MCf7q9nyJh3pArYSFe",
  "key15": "3kko7Dqti6JWNm1qFhEczX1PiXkKXNuFdtNaSwPqN8bnTDFWnHtd1nWNeQNFynpTjKARRkyDw7ThyPKh9DGB6EJV",
  "key16": "pzMptM3z3CBMvoXPRaFh1UaY5YqfYEXWUSypG6EPdAjYAYvD6NpzMnqmvtnjXBzBRESWF9cPTD6ptygbaMqemd1",
  "key17": "3xgpz7dFbQVGz7RnoHYkMdZqrMAACp615i4KHMeEH9WRVUyGv4izQgkgGaWYbDbvhQ7QDU88D6bLEji5YmjzNBrv",
  "key18": "MmiwxcHqRbJQDDpXeG4bbBhR9xC4sv5YTrjmGyddXqxcqkxbHMWDBqAQaobz4yYVcRfFdg2oi73ZKXeN8gyDJKP",
  "key19": "5ctKiozUMUVfYvP1MpJ72iTEs8f5pZVRCwNrcvfx6zjQJ4hnfUyYJXsEUGqodeyAE6Lg7CmsPcr9aYHuxmniBzsy",
  "key20": "499ibCy1Xk6WzP4DfcwZq2iYmdUBkyANLjs1wrQKYW5S5nMmigAcXTVApFBHe3J3QgfgzT2KCxDDUVw8i6vYj9nU",
  "key21": "2zF9KQYsN26WTCF2PavBVSf8Ye2aYgbhbHZqe4jKbRPCDAH7xMJ4YU3v1VswCDaXMyCdRe86XJd3rDrYG5c5uY9i",
  "key22": "3KTnxJJ6Waj77uKAHzanZWmsthQKjdGLSMfeu3vVycPg414VMpQf7vjpwFC6ZnFVCHizRBjhymySAcrArqzJUAhW",
  "key23": "dM5ho5CZSw7fXsURXsJyU6YSR3rFpnnS5v59StvPRsVohdnXZWRfDooWEVfgFYwBXgVTSq4MNzcdtELBiGU8KeG",
  "key24": "3qvrJWk14iBCdN6YjSzuCNMY945swPJhLHRSnZnuQQNqZD1X5pPmeLACRYZkpvBEdiqR9hMwFv4BdmU9qjP4DuCh",
  "key25": "5yhcbMenWeUm9SgvMyY34oiSASJAtZyVkcCN5KVfHSJQoZoBGfAc4ScoQ5Nvgud1xQhFiEBUMdZt5PuDmfG8Cn6r",
  "key26": "4CDuF6QaQr7i1WoKuke4NnV3kdmev6AFKdxZZcJpHku4z4CbaVnxaZjuyFp8Ugojs4k2hpuYSUAvhK9ZAg5R8zuF",
  "key27": "4Hf41sxbGAthY3JCSBLdFV7AwHjetXQTVYFLxnMsLixrpY2JwyPj4AGtthdniidpcr22tGHxaFM2LyudSTbMA9Cm",
  "key28": "2cHrJB6tw5Fe4v3Dhccvxj2rr619JDnRvBviai6UmCdMKPsmFY7LKiXobNdApotffBwHSQCWzdUEom1otQjuEVJV",
  "key29": "4WDc7b4tGr9AuaKqh7vgmgMpDtrkcQoygccvfv1vmMuwzFnpfhDbvc35bFcgqWHz51o5a5TXesp3zHiryvDunz87",
  "key30": "3iBmDRHSp8m7eyRryrth5ZYA7uDiaJuzoEFLuCCcVRmbpeo8JLy1g4kLYtfHtiv2d32AHwCZb7BpXVgZYvSb9uPi",
  "key31": "61ze5vBZ2XJJi2iCrmDsB98QPaGaW7SMkXeBRezm2AYTG2tJyinB5Vr2e6e6UACz78sCP6xhWLoCwwDRYvQdRTht",
  "key32": "3kuKXTvJpHBqEtZgeAUMTFy7gmc68qr2516ScEuMyrmF8R8e5Wpp8vfQzzeHsWry9Lgkw8777qNxxU2x9rFeK8TM",
  "key33": "3uT7CEpbt95vqoqL1b2fno9z6K5LNXEcgy5B1va1vCLNumcAtACNgAYvNE4A5Y68DehH7tiS3315hquSFGaN7Nwa",
  "key34": "4wvXQMSUDJDNrjtMjfjQsA7p4BeP86AYtcHsNrfwKLWz4eQ4wMN3442FrcyNQrcsLxn1xmtubJSYVzdvw4snWynw",
  "key35": "48VWaHSA8rXo3VLwmXj3GrK63mtdwMuT7oQ5K3sA6KMCftmsKyv3LKArQyaU2JFjbvSKpkmQsfv4mHMxNyYJcs9j",
  "key36": "3x7vdFNNC79z6eETRe8Pu3578YdAjzhoUMvQ9BnsPh17MwAcRQsmoP2mxQz1uAet7wLssEKUbirs6khbcq86NFFN",
  "key37": "5Qrva3DPGdZiAFtoAhYmQksChhz5cvAPrj465DbBwhErbgxpccEBHUQnG1SDP6Fat1tUiBPhfJMyeWC8YidYAa8j",
  "key38": "6BmWcY1BYaG7SdcjUXRQWaHjEFivrJziPnZft1HgQS5eDBFEYQSt5FP6y8MRePHivs6A3q5L27sy1Z8mSCa9thn",
  "key39": "4ioXFUKDb1E3LFbSGMPcWHHwuVGTgbJfgv2jromkhM4b5YiH2jwv52u5N6pYkEBTL5bbXZEUvgPEYjSPmADpQTT8",
  "key40": "4Jhr8SPBdXmpSDE2Upvfe3tJYmM3MmANbtqQsh3PGegsVQBkpg75UpcVBRCBBgqd3Uex5M5tcHYZPeaZWd4LbfPY",
  "key41": "2VHFbwfrHkyB3ZwSggkTaV9MBbz7463VAW5TWuSCTXdfrrCkxvgYLmc6DUZ37NvYGU8bdUiG7mSigDf1qd1XUc1z"
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
