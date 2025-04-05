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
    "5MDpBrqWP1GdaYoupi8sPX33yvpbUr4p3KgJxjXbCaM5o72Cc4NRHLWuNDdTspee5fJyb6RgqM5B3uyYqbV787Kt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HcCzcu4uPFbrCAj9BTRBxkrKFLQEKZUHUmaFF4iBtBRhqcX5KpkveFp37b32DgM6yix18YNiPbG8QKivKwTSWGm",
  "key1": "58DL8oDE92GYiHcZCpnFroVea2tmRT7MkY5gwANWQ2DdMSY119dLhRKQs1BF5cwRXpfGXaLr6MwPxX2xA19NQtq8",
  "key2": "2XYozTKyNMg2qkvv86rquSLnNocJrYmUDviqmMvyWd8H5fmW4d7Pob2576tNs1Ps8tLHe5hE5mV8T8A5bR29NtCr",
  "key3": "4XT4WPvwnqJ5fLzrAkNeqjquxfVJVDcBFmLuSh8yEYUX6P4aEbELJGQoi8XQTBZLY4JYCq6n4hNGffpri2Vw7sDY",
  "key4": "5kcEoLSHS24Lb78Xrvu2ENWZgs5ZAgW6y8zyc1vfxoWr5Z26yMJ4VbU52tJz27pW2NCPetB8shFCUpmHgTdaFshB",
  "key5": "3Uw7pnTv2Dgh5L631HYJdpvR85yaiUDyE4jLhixxBTJecvyya779qh57NpzfXVH52WYPRw9nS8QV3Kqrubi27HkQ",
  "key6": "5pw9wLBoVHyVNApwuEsM9CdLhbQMMBUTBripWDegw6XekhpB7nKfwqo7TmhFD53vRtCjT8spL3uTnmss4xMCHSui",
  "key7": "2ExoyCWpTxStEhGo9XRwJSei7XfG7UMHgLghfy2pfEGZBfGirzpMk95ftidSBLcCpE1qGnHjKaUvu82oaDSuuizz",
  "key8": "X16TyNcnP8CgqcsPhEMuXLF4yPThW5rMLdJ4ikHyfy5kmithiyFuVoUMVcuLJXh9nhVMZTDHd82u48YwYRfbsfv",
  "key9": "3VwvYz8CbDTR6BhA21hGXQFfL7fsL1CK8b2BsaziQPEDgX7PCU8eZipotwEurpVKZDXihmaNdeNxZdxq2yDevnow",
  "key10": "2WHHDd5BYDXuTPS3PyrapP6g7hRm9xxPVhL7Cgzt891kwTH5mhiAx6Mrb7vRjWxhRTEbaiaa1f31QHxugpCgTLSS",
  "key11": "2nMfdRSr3qsVpq82L4fCGa5ey9aijBSavSuVJekJpiFVVsciZttbEC1eBnMbLHJy1YVJFvUoottDCn47kMbbj4Pg",
  "key12": "aeGi8c7zzLigsTi2EMv2JDfyKt93vXwEBBQj5wjWA133crVcfZjBT1e3X6BShNyNrrL8G59aqo1ZSD9ZkTrXY9X",
  "key13": "5FStsj6peK52RbRTrggTn5mYhd7Zu2txsskkKKswgvCLroWg7j7arxygDEwiHHVxaKVtF6V7j5NTp1C84DFMudAf",
  "key14": "58Bku4c4ohYezYraWAacT7LBSZUDbAUrZaju85Kw8cRtmhJaHEbcJR1vL1ibq7YcnEeVjsMXfiyjEZ6nTRNxXs3d",
  "key15": "59xhYZ74e2vVFuyQ293B1NwAZgrR7Wi3u9kuh34CqU7gBw22MKMQbgLCE7LEiyki6goZr4HDgB1B35FQ8BFabidj",
  "key16": "4JLHVCBLgbb9QyVdVcUJYt1ydtF75R4qnTMG4i5BQPnbiUqugUoqxaNVStp5zLc7gVx1dK3eDKLwJUoFT2h672R5",
  "key17": "5dxV85ft9r87k1f3euQEJxvoSoTBTkYKZbf7UB7dv4D6vtjqzPRKjwBVcDsy7NCcDumytEha53LC8TDiBakDW7fV",
  "key18": "45H747TL4cT6AHBQ6RUf4YWSKxXUWsywr93qeurzLnggWpoBYzLchaFN8m4V9uBMbRA5txXkkHn14nQMC1z6mRm5",
  "key19": "5uHbqTT1awBpsz5o1RRx4hmfUphuaVbMqFvBeXvMfhKHQrJvvECzoerDanC3AEmfJdCthGYuLjzmQuLuoHPYF8Uu",
  "key20": "58dZjTjs2iug4DhEXEZoxk6nu2NtV6ukyq7QRR3Qxq1Xz3oLceQ2EiPHFzb1CZjQch6DyNBtBcBhUpUjtPee6wvJ",
  "key21": "2XLuv7XTQ4Xq1Z4QUqtadCaMmk8TTZLJwQrZ4qC9AHxLUSd8kg2UFHRmwG6H1HB2fNNMPDUdcyUXKGsYP8vtcHiy",
  "key22": "WpLrdfPVxRhhhTjTHGKrx7xfjibPHnQhriBe15R7YFDuVBZarGktqC9D72AKo8yGTiyP6GNXYYDsnopfPiCbbji",
  "key23": "3VQuzjvdauRFaU1tWTipAQV6h774oSS5s6au8Bm13VjjBYqzVpmxF9B8xQqAYSs2PsJL4QKcUQTKWazR2M292Gk5",
  "key24": "3NJm3LLqNmBWeWs62keyC6nEVyEyc1UQzEyr3Z83ijm9Xqnsto1gQbFKqUtn8Jp1862wnLoSTNb5Jau99KCW3qfz",
  "key25": "5cjYC7zPYFqA8ZDD1AKTgW95hCCo9ag1GTzkTmnzk6E65xpWPkNycieDyyoLH6tTGiU5DB1RWqZsxkgXeUiJFPTu",
  "key26": "55jpDbu1SQaP6MRaatq7c2Apm2nv7fBdcyHi8Q4xJtFTCiZB2ohqWcDEDVMXQfJjrEpsu37KS2qt1RtcMz8qyqz9",
  "key27": "4o2u2TSCuM2FkKremnjEoQZ5Jfu56vEkZyzYQL3xy93SayfduvJELA7g6MP5kwyf1jpCsU1gHACzKCFcJEYBg4Zb",
  "key28": "62veTvphG8GgRS72CQJBosUmwwgzEuALBZaJA4CBB8ELBawZLNMx2zi1WYYZy3ZceVfG8BCCoCxkuSZEBfiXhTPF",
  "key29": "UnSc3VEUcfeL5T96Vu17KGyu2iCg4Y28E7ZNdZo8Wbsoajbp9RnsuYBNRdwSmWNdpuYa2e81711BzHZZjy8S4bd",
  "key30": "65jPn1WnNt57VNiovQ7YCjNs3GaLX3ESv5jaiR5LG4vfU9W2sYQmGbwDCW5xPwgvmF9uSj2wy35gadV62bFHADjW",
  "key31": "3s1G14Xqb5w4h9AUQHgGgM5VNu7vFRnn7ZvePV3hK3DTtCKUcJEzVpkaSmkKFAYGuCEWw9toou4bDAdSSEH5V3VX",
  "key32": "pLVfFYkzkmZWfonHhjSUNj5zagQYYK3HAguwef9goYLQYANERChx5FmLJCrZNJ69USx15NtU2yXad7NnpNpZgpk",
  "key33": "RjW4syg8m1FBJhYQ3p5rbmH6hBT5g2ahJFKtm6wwY7UAsnLu2d4qAR4YkfBksrkqF2mXG3jSYDS8xC7p9tHieq5",
  "key34": "gQ3nJX6q5XnHKLdRBMLMdSRMc4xgjczfFqtYJSPLsdYe7JrKSVRqtcPjUVEreby2Xt6QP79xBjaUvEJLpPZ2kGi",
  "key35": "3PZ2LGwn51MmpYcRzctuj4YEzPuNATWJKAbFJD2RxgMPWGUGX8uHSPG5rWAVAbkUAWBKzC3aQhmqGwSQa2eSba9s",
  "key36": "5RCC8ZGxeNJ8X8XYndFhKfAFepy8XRZJmp1JEZwSB6wPNpHNYxJhjZhsr3WoZ4mcNM9nVgoe1uEt3UZEChhTDFa2"
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
