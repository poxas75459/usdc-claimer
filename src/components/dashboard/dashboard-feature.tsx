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
    "6NqhUb51VpUfnPiRYVR44RWVyCcnLhELqcjZM3C9XxesTanATogT7rgNSCBbNdMDMoGHKSf9Vt6KaAehfqvQ7ga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pSjv8JfEVgorgyzueCXi6reuF2ifgAw7BCTyitGNBY4JYeePZu23HtJuCbTfo5jFGTXpdev1YMYE8uoi88mcdUw",
  "key1": "vydgpfSNUg2x5JEHxWcF3dvsEiBMX3BP5sRfUn2YHwdHVHz8PtDpTXevbsQivnKU9Ghfu7k6G4XevoE7s3BEd81",
  "key2": "3gZSC4M2Xe2ZevXmXYkSzV2eVBaF5oKHiPc3V4t33zDh66QsXN3TmmnSCdF4w7WSh9tFAEGqknw6gXZGLFd1Ec9b",
  "key3": "5napbwmMgjFL5m3gnWHyZGQjQU6wQSiCeXJsafk7U6r5RuRm9NnjojeUisUvhywXR1h7gxSTAvJ4pgm3XCH28R9L",
  "key4": "57BWCK5xWde28NTZwwLYEfCR2VFVeQCRiXHg2vymbmrU8pFtdqBKvSK2nKEbf17m7WQNTZnzidpNnB4JcF8DHhb2",
  "key5": "5h5tdwuDB3wBTusZCbK926DeT8HdZPZjvepS1YAKoZ92Sd3Y1CjWFL6wB882y21tA27WhVkDqByU2MUoQTmRJq6k",
  "key6": "3Ta4bjovV5ks9FGPzGjBSvcU9mGPGT6cTXdEcPuQgSw2FC3i2i3nzk2iWENhWtec6UvkNC8KVEA6Eu1jGRwjqerQ",
  "key7": "4AQ1d2coX9XAq5zQaRtdTvMypDCjrWCeBNdFTe6FM6zmuhsmgnh9WrdkLotM439U1Sfgi2Jbm8VRsoUKjXAo4vVR",
  "key8": "2FeNMRxJjNj8iXq2EJF8Le2H6nLgLbwqwsB4p7ukGxr1S1N3zVpAv7zDwEwVJdpfXQdh8Q6riZnFwZBuTJGFtE3W",
  "key9": "5Dhtfv7gxoRodwUbssnJhiKt1PKFvydYbZWp3tXYyPMP2D7Mtgxfgwr7igm7pQ1cKkG4r5qDGo1MyjiiGS7T3LaA",
  "key10": "4B44gPBFgEcaNU7fp3qwhqJDHD8JWkLH9npGFKqt6NL27zC14ju8yFpq1jxWXVfC5VH89qHTa1H2NtPF4gKBExWC",
  "key11": "2sFYjkzTmg3pxyWCGa23iCpCvw6mfJUXMq55Brtvk1HsqwVMP8iYvna1aesfD6SfFhEf4LytX21zXoJQu3bLoRnv",
  "key12": "2cJB5L5EeUoXpxhn99bcMgePiMz1RshHLJPAoYEwG6eq6UCf7jvtvdm2hxFfwcNUrcea2Ci8CP1sGMEMN4etnts5",
  "key13": "cb2JSb3jubJiwXCg34jMuuoHuJgKBkASvbG7GjuKdvrzFWCXCoxZUkFBYpqzKzrf8u1GbiqKDD5ubNKcxzhTxqa",
  "key14": "638ef6T6zfHzRkYhTQv8t8GGA47QxCMH6Pgpj1dLRdTYASnNcVaeK7SQFAYiKeWdbk6R98r6ZYyMTEqyZWyFDdSt",
  "key15": "3d5Mrer8MS1wxgVR53Pk5g7mt1CD8dPCvzf5VH8BW1Nvj5YiLh6z4qW2jJn4RSiMf1kgeGdcofDBeFs3Tig8QV37",
  "key16": "4MDyNsE17Dq1FHzPMvhQHwMPeYqWNC8xV5dyeYiPEDUZS3D6UyZqZJzuJSy45oce4WU8pBvWJ7CnHEqEBuMhodmK",
  "key17": "7ZM7ct4tirs4abHVrxSQHyTnNAjnXCGPX8wUDmrWZwEp56xGzSC7YQGvNDTxHkL3p4R6ez5zjkJkmc6XnGg6KgP",
  "key18": "2E4M4hBuWTHh2jtizkyWWzhVecpewD5UCdHKjHqVsKYoKSfqPmF3nfS2VjzAoDFBSkKj4Yxw4qYzUZTtgmwtbhb",
  "key19": "2PN7a1Bs4CvBQjWtF4knY55ubpXz45nWqupZCc8TnyBf469tYYtGRSCEGCz5qDb89Mx2HHz2Jz7nVjfvh3uyV2pa",
  "key20": "47kcc2EwysAw1QSYo5af5eVgMgXeTijtuTikyRA8VVj141CtsRKZUKncoQ6bL2nmZFcBFiAVRn9T5Wh4yU1Zrtxw",
  "key21": "2XHpYLEQwTCV2XLfSEyuSVWAa67oQmAc3xgKD4breyGPyhuffU8VFpKybH8YYwpD7ioF8j2h9PJvMnAPD6sMRZka",
  "key22": "s3pSc9KktB8TmjcZrVodvu1dSDKNUWmaiV1zuFPMHqmDnaJwJ48jXyCD5XjpXnNZDMXgCdzbHCUr9HdiwdqqxES",
  "key23": "2i6AsQsAm1jY5b8LxgemryPQsJrGLXKyooHoakFtGFeCfaFEgFrTZ6DfELuUD6wfqh78W6kvmcPEXKBsiLwCMNbJ",
  "key24": "3ZGSPqnBEEpN2mQvWftG48Qwgcukr4YSaEMEx4Xwy4nLPuTeTj2v3jftENqPkEcrTMCpu9ggwNBnHgtUrDpWxf3Z",
  "key25": "65QGXjeWV21noLQEs44BfCNYNmUTXscBjRGJZPdQVxRQEYej9CAW4KEkdKbWnpVnEwyDiS6XE6YLsTqKdyjbHwye",
  "key26": "5yXkHnvpzZkVLRdBK5BUTjWidfTFHxdrVe2FHwmSjPzM2QRAQ9x7xSy4veFBXzSPfgio5TKT1UT8q2XxXyPNZDKy",
  "key27": "2nUuLo8quyK6F2iyxpoaKYwNYZTWpfcfPRHtoQ4NuH93paVgFzHKNuXWwoScvbiMRyRkM3ZUPDCv2SsmkvzpRE4Z",
  "key28": "3Sy55kZhJyCftjVhbcu5K1Kp2AF6PpijKZ3d6DtKo11NiduPKLRP7hdCpDpAmiczL5S3BahgSVb6v8LnMAgkw91w",
  "key29": "3hwovq2nK3vyVwwJpAwyehoA7RkhmPpn1cqfau5qnChco4e2xoiDAYubqQPXkrU4WEHTTgxT4P6QBWkyhwZBqoBV",
  "key30": "4GSL63D2VSPXoj3REG9FpqeXPXXJVXQJCuXa2ZhuJxWzgRNsKUJqtkzRdiWGq5NkRuk5nmJa1EtJDJARmuRygmJd",
  "key31": "2np186iX5pTDTzatt5zes7QVrA6BdkWdGzznwoEZ6DCtMLYgrUMcB3jF4gg7BM2mDVs15LwZzf98kQmRGfxz62Cx",
  "key32": "56cRPmS6siHtydeBTnznwyjVmSX7BaXNAShjUewEUnt8DaY11YTaMbyP4zpv84bGWUH1qi7TRK6G8sKN8odi7YWG",
  "key33": "5qkxta4KJ2XgjsutJVPXrX97rXrXbS3x6zrRSut1ZN2jMvaEriaX1SC3egtVPyRhN2cKL3LjR87RGyKkfxdSmQPt",
  "key34": "LGdcYQyUW5q5PsZ9TkwB2Q9HmCVBvhgoVB4TPatTqeh5rurVx1x82B2ACbobMTEyZaT7bpWmnWD56mbjBfVHdwh",
  "key35": "28yyBPTQA2M7nArpAweXTFepaP85fujwjU8pzPLSwvs2JvoECnNxj3dEfXjXBrVcmPfRY63Sxy8fxXCy2mKSH1fJ",
  "key36": "5qXfHDCPBTMPdSXWzNnzziobjsnjMfje67USKqLdsgrq9gzR9b1UJkU8zgforcKGjDSVZqmpp2bssJg19ukF47MR",
  "key37": "2x9PdY6a4vbsKujeCFZvBfkE6dXBBGDUTmRwKXu6Ron92SqDpKmLRAFCqvDg6QWVRXFWv4HC8SE62FfrMDvs5Lve",
  "key38": "Nh2Y8csGbdSqaSCvrDAG99bfEidLhTiTCWRuyhVdE2ZQiWk7k4EG4q6KiJcDRQyK3GuT8Fqa5KjoFRuZpVXW8qT",
  "key39": "4j4tzTxaC3pXmCD5pt6AVFt2GJ1BYCfsbhZ8bgDSedQMpATKaEiWCQ6mMCV3LoMHKmgSWPH3BjokTBK54utdLNQ2",
  "key40": "4fJhVcvzpDer96P9VzGokm6AMTYcuhDuHCpQ1MLZygHtz1hP5rrgDg9xoUHfjxRkXZn4pHxJAWgGpe6kbHbBMb6e",
  "key41": "5EUb8ELedZcfSLcKKLmkMUodpSVpXJPq3eycp6cTwrZ7rnFAUgCS7ajWMZQHYPY6LyXa9C9B7T4kjzKMDja7pgxF",
  "key42": "VucvpscaMXuRKa8aMfN1QWSyRz3aQ8FesL21av7CDCr5iUqQUHzmboz2d4sgPZ55g7XHH73gx7JtbsW61ScmpzX",
  "key43": "4HYGZNdck2kB5dxdwoLTaba89kqtgGahx7fJjg8D6W5wf2RrgboeMp7dMrPTJuAJumb6S53v4iU5UhfDgupXrMx3",
  "key44": "XmvAauRHQg9DcWKB4gjSrELXPXhh7kfmCpmMhWLCe6CEpLTPHB3iJyAEvmoEwv4d2W9wqTNZvYUuQDLusLPpLBa",
  "key45": "5sgmeFvrCPBW6be1CfqcErRAwbUAuZAtAAAioTbAei4Q1SWX99jKbjmaKcduEGUf3AnirEowCXQetDFzWmMwVJNB"
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
