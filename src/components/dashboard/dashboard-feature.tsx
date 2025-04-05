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
    "FQH7ZryV1K3F5wNC1skBnJ2rFMP6JHjo73DyRxEie8ioxzFsEMnmPisSdDjNX7nxD9F8B9Fe3AC89BvvRmAdsru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5msuV41zfaytpZuNAqn9Er9unVxZWoJgtP5ZqJNji5Z3JWqwJaK1JwNXfwEAKrfG2GLsH8zGSgzY4dgAwZ67egaK",
  "key1": "2UVTsD7wXrnzPTyMEhoxxJMhbgUqMEJaVYjgBcAJiYqqDpD2XFwPkjtQLkqxAh7xdf8WKUf76ViLo5AKVvvtvdma",
  "key2": "3FYSbtd4eqhvpk51E7pJbNiJqN8d8wRmXNdQ6FefVRGD4Kja54V3Waz5VCy1syz4fBQUTjG45yj937co7TYyYN9e",
  "key3": "3WRA6F4m3PcgQNABH257EMPEF2KHgtr7zvP6aLyf42E5pyvmmGi8dJ1q6o2Q1peSKjrFwSpRYgM29NGUyQqWFeVP",
  "key4": "29a3wHJDvUYGERFRHg7ivAvk2HhiPxhfRMNUfkNThueeeBWV9z1UsUiDVrFummKYnGS4ZkrV2XKwG51W4pXPKWV7",
  "key5": "3i48J6GQWkRLqjxGRpPdAV8tuGxt1SXDAfWHC32S2xLaQsZhgJo2jaBYyiEPxU5i4QPY2nJxxyvmHAk1hR4Rpr2Y",
  "key6": "2akKCbYeWCqGpv8FEWVwSj1wty61vdgs3dgtsp8boYeVxA7qdo21qPnNBfS6g9yYq5C7AJrrh6Y8zYYWT5e2Qsbi",
  "key7": "4mfMqvausREBEfdJXHBw9Cxcbg3GqJzDVcEsi56MqMB9dUt6y7FrtTgPVbR2dZyiujJBMawCW7LFru7yHZVNC23t",
  "key8": "5cTczHx92667eGMkHUU76m4TEYjZezqa5nwRPbnoUSACgWJNnVVfbhRUF1eMNCiyXrzHf1HWxn4rLBZQvLg5NbJL",
  "key9": "3xvMPH2afrfW9KiSbZ7QaBHUbcjndEKcFEHCUYZ5TNCYAarrkR6FUdAxJbfrw7sQmZfCEbK4sP9JDHNHyDHvFNVU",
  "key10": "3kHFLRgZXtrNyZjSMuWBa3PdTQzr81tpWLWYucQ6T7Nr9mmA8MU1iZ5oYJUmV3dQibiHu63qQU6VbKxJi1pu8iKL",
  "key11": "5bRDBBmEfd8BkcBHPYvJAoF4fiEe2raTP3NmSSuxBEbmaMCskavQJ1c9ZD2BEkyUqTpwcTqxNkv8VHCS1hjoEs8E",
  "key12": "S39P7wjfjAkgT8C9FjWg9qKmaLiyev7MnnZhhZEDMVFnpSoUpi7VAHioSr2DCiPWEw3zBkfmJmoxR9V73eDPcRf",
  "key13": "3w2rJfqwkvRaxBCrSQtduwY8hnz6uaRMyNWkkgPJxYXpyzvPHxhkAcKb3e9qBxVz4cMeugEd5i728ie8iuT8Ggqx",
  "key14": "5nMCooMoHVkV6cxBKVAHdJtAqG3zFAAySFKMn3eY3Fx5qAudyHavrbZi9dgCJVTnuG9QZ1o8V62YtjVBmpbWBiG",
  "key15": "4GTtmDNj7RvJT9NzRXEJGqf3xeN6faUBLThsNuF25jdV4AvnQGBNkyxfwXqUjzbsifFa4V1iyeEpFG5Q8gz559es",
  "key16": "66JitSdCVBMXucwituCApwGF8sV5wmyjGouviYVHvtSiz6WYUuQmm75ABnMSmnym4Ys1N1XRG8gBbnWAu8dJgzVo",
  "key17": "AkJJgcNJQX2mMF3FEU9EnLb9dJFrXVizmesPvZhyuNE5xDut4yq3YG7oAzFgZZPayUqr6bqHrZibpYm2JnCnt55",
  "key18": "3Awojk4AtjxRaC8dEWtoR1QgQfLspfHmAbLbqVpoPhr3qfTRiQApktpurgznaetGauvKSDP5eQjm8jQjrUcbNUov",
  "key19": "3qtZE27N2TtnDFsQvayjpWDa9sGWY3fMqWdnpaWhHT5bGTFyJ94MD5ocdGFT4L4eBL3NWGrdciSYZi3R4jvbpaDv",
  "key20": "62BUQ1NeqLdQtsDV4gS8aajKukZezJxUjgqvfEUFBH99GP8h7tHAkBDPQosYSMavCXGj8QS4FW6FdhNXTCnNLHv3",
  "key21": "cStrhJoAippX8khCpaEyevDEMjFAx2KpYMe52gxW9eUXft9kHu36JLxxdJZTHvZpqcEH2TxpPBTS9fLr55tkV62",
  "key22": "3BA1NZU88QNru8DfnBrMKSuyMjfLdYsL1FQM3HtmK5rUzibc1bB989V2X68DtfpK7oqiMEgkLt6vHsAR9v7qs2TU",
  "key23": "3MbXM2foDZdqEKqgkjms4qbRwAUp5ooRw3kXSJxL1s11V8sL2kZXGBiBHkvTWuvtpDbQWXTpHpt8qYgQdvkRGeQj",
  "key24": "4xG1JXckDe98TcAwn62wEeyNuehuLsNGXtAkK5xpR4mdTCAyh5Yhu7oVVyAL2D3QaKj1y5rWi8TRPeFTg8mxfAZd",
  "key25": "2EBEvkxZt11u3gkRB7m5ZTWeq5UCZT6Jmf7hSqL2WERuSpLkMpMj5J9Hc4FtLZNy1ZMYPC8BK4uGQrB4L1dUvttT",
  "key26": "3MZjJsKvsCfidKqpnT2bXBE2jyxita2XxRuKwTgwPGn46MwuQnjkUG8qpX3AGYvHnr2V4wW3WT95tWJqTFWV3rnm",
  "key27": "2BvExpZRSN3VLc5HgdQxiEwS8t9LxGyz2nabXQTuwQjQft2W7vWjVixKfUa5ohyyPiESYP6ycv3qx85PXDUv8LB",
  "key28": "438iZPRZybvjgLDoqk1iwRBz8Tfjr3bfJxqBRKUS4MBVLBk3xumng6fU9RfQTFndUWrBbD9MfcmDuDA6t7cr9RiV",
  "key29": "3Z8LHZo3pX3V5NUPybcUKFHdaDNe8TxvG1AkRkRyapgw1eGV5R9qfRVWfvRmiQ2gmqvs4vnPf2DVGJ8eMLMqeRMC",
  "key30": "4ybyX9fRMuNyfcen2Q3vLhMKb2RiQMHxHg9icUgd3an6wX4f1qM1HgULxN7QGRMbcT4Nq18tENDM8Eab5ymt3wEA",
  "key31": "3EcAzSguGwze95Y71PZvi4E7ksvgzvMsnjqKvU98weRad3eXUTBdx4pSrfJKkBajawHD4Kxxdk515eyr3SVedboL",
  "key32": "3VhhBuU7GjLzz3wrmiSV3XswfH4DVcjmRp2i1r8mkzSSApM7kq2kcDShYnhof3QVvGMdF5AyPtaZz26SUgHHxxLE",
  "key33": "QVmHajfjyAxw1PHT2kAaUP4Qa2pJmAiMBQjHbjHKhS3QnBTBAK335eU9WnVShJrPV9Lm1RriuYFJvpYobNXWGdZ",
  "key34": "38V4WkVqY1mzFuxXLXaugnk7ZuNuwSMHNzwXeVDYTzFQu481WZ4R2TbVgLV2Hunw9ofYAYphh72EVC2fFfWPWsDN",
  "key35": "3kRFdGLfjEmuBFzzgvhMnmugvxKX3TFMAW9niFjHjkVb9f5Uq5eC3FM8sgSPCcxmHxKqTKWSs4RwDyitTism7kwz",
  "key36": "4eFhADsv65FCSQPCtRGv3fbsBnxX41hYuaxdQdxzrFQpkSt2s8EHZUdN3PYZFJguFAo4t1z8MHWEATKoUi6fP4Yy",
  "key37": "vXWwWcG6NQQmVUGkGSFZzH8dx5u4ffsMyEe2Vk3dvwm3yrKxYLwuaHcJwT5w6UxcJmbHNgPaFYTaDLNUo8wXHwW",
  "key38": "r5NyLu68q1bYcscG3wxX3exnduM4uRZYEdLBgPzjKh8LPjDemnxyGv42Wi93znAm2wbnEX4TFs8atzDB3Wt4ct9",
  "key39": "2zsQZxjZohVNhdWn5TwmSe7sFTNnn95PERNqbscZdS1AxzTr4YYUWsBrRsSKHXsnuGnsdSP53nKrwpiAeBgW2B9k",
  "key40": "5QEfuyqatvNeEw18vjcoV9sjaJsxk5ib8JygGKpN9qsTUQ3NGTq8VDUAkqaV1B7aZiDai8mTnyhfJ2EfJcXLZTmW",
  "key41": "571tUG2ayoHyJXL9GPmiKGr9AczmshDtqH8NfnucHZv22vGTPmDrwi41XfucamjEqYmPwsF8EETzKGumCoajYQRj",
  "key42": "4mEj9xxeWTidMvVxDHD66qgpvLXyovW8jqeqrwb5Hj3d5zPAqSJjhBWnX8kMd7SmZLbueTg3xxr53byQYNMkHw2X",
  "key43": "4Agot6Q2uCUVo4oGKAmGTWELRK1KvM2LmTxWHeSAXwmQBFE1JEQ6H9Cb3WWHuiwyCrM3duhtEFTjsVbgQXVWFY8U",
  "key44": "Je7eMHbgbNUJvHvxeViHwJyikAWJHKtqH6p5txQd8CHXhhDx4xEvwAcGLbYKHqtNGSNHinSqvkLvnZ7KF58g3Wv",
  "key45": "3JAsRZVu6eSNSmYBtoF8qej6X4gSttfQMXvjHjJgPs4QS3wGXRQvhWCJ5TNjg4ffS6HbPAo2xVaEm8KgBkWubaZY",
  "key46": "461si4wfu92oHwBeTJKY5NPjVzc5wBGVLizUTdqagtC7swBqbzoDZskiGdAfbDSG6Zrwyx3nzmwKQb3vnUuMoqRs"
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
