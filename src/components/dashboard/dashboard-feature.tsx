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
    "4ArqEzX6Xu27tQtzCVk8hEWiQcMbdCUCUwKaeBYzpnEizLKSHZz9iJ4JAywoCvarJUpUa8FuJgbMF3FC5yF81grc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UG2oga8PstPHmG3yC6hXy1FadsY4PDEVXLAtaicNvanRbFYTeBtnu9HqYu4oxumecyTQHEFMY1PqnFamiMvTLB5",
  "key1": "3F5KfQDkiJyikhCvecw2wjzVSVvkMY5M6NGuHr88KC4X8q3bmNnkLppXWjUhvyaKfJisTvEruf3bJ9hM9W3uaSZB",
  "key2": "1ZQpB77yNBNK25bcdKvRg1p6WUMJ6xR65QacuGpzPbnt2qrsHF2wbf4MJChWrRUMFDza1arYNe8oHx9sQvjov6e",
  "key3": "4hb4FwKA1Hg9ShR4bpqFBfV5jnzAdy4G57h42e6akR5eMsBXzLdAC2zTfU7xDJ6CXn8ua1m4xBcUaFmeYZgAUaP9",
  "key4": "J5FmGye7bXBRToHmnvvv1xeNuuYVCtfNoGSHiuLKajFiPSVto9nXu4BXUZcxU8t2X3xXAsRnLcfVLP5U3q3isxv",
  "key5": "3mibkBgvGEpGB6HWNjnJtvC3yFEAcjnSRwaB35GxRtjNCWJurL5BBBDkMSr2DGwUB7GHxUZJ42WCNex1DaHtMvWp",
  "key6": "pp8NZVK1NqsyJNysm4r3RVyVsJTmeXuiZ64vhwhQXPpEZugb5e9VXPapATJ51mksYTV6n3km72pdhFZp3U54KxA",
  "key7": "3na1oZsQz2GKmecy1XtdZkTb1CX2NBh2u9effN549ArBMLqizr99B3fUhKYj99AZXMeq9XzCMJknHkRAhxkUfUKK",
  "key8": "pxJSAQajVLmTs48wyCLNUi73mJMFmqQEz3PVAX72yXc5tjAZDgZxVMqKEP57KuUjJwh1WWsFJu3nkdj4kytvSwi",
  "key9": "64dkZVhNqnTTnUsEqs1q9G2Y77yJqmt4saCUTpyd8wHAyjRZLSAJB4VtewdPurKqmfSAjaTmCk9yTzxkcgao8wqn",
  "key10": "fSThkBAP5m3QJjUMy3turMYHDxQr5LfSW3XDyKi6pq6Rx4VqadtDBxyvg5bM7XcUrMNQbcDcpHuZwgnZzYv2zj4",
  "key11": "FZGc4TinV5HFBpL5iTKJqsxdCyDQTa4rTQCpUrDEoQEaXQZrT85t8GYqDHciPftkiJiqxFJutdVjxYCQJ8GHu1k",
  "key12": "5jkxp5NdiNV4bUWvnoZ8Sa6Ut47mHN2J8Zk8DQyUbq2zNp7QN5r7DiHap96Y3Ausccv8AGHxUTvRpZRnYwEa4apP",
  "key13": "AxU7pJvhDBmgAtYngRMMxhLBbKyhLSzTMZYQ3p5VAU5w9FGFKLMm1SBUKVBM8DAvxU5qTbizGz87PqDeMtyMGXd",
  "key14": "5hiW3GsEdrsT5STLxa4k9kf4rDqjFWVsDctCPYzpGiMbPMxCn8sMeNSFmz26RF1kx4XyVsby2K4vPrV2ryvcNspM",
  "key15": "UgbhySLPnTFTVPwCExJqVkKD9fDtgeqUmmejjaQEn64H4MkTGetRbEJNPE3WWXo7LDxGupg6H4VSmtu5Rd9jCEH",
  "key16": "3VnMhRHHs6uetFYmeWaLdRSzLMNwMoL5FvE17Pm4KQYWt9m279vNFJyznUbmJyQRaTDmwhMndrsBMb9JY6xJWtBm",
  "key17": "2RyCuhj7YbskgsZXJD8sZC27DmyuiDkWKqX6wHKGee29mNU4dSn9J9LKVQ2D3n4FWvJkPMKVhW6gcdfxui12FBwd",
  "key18": "3HULzU62wkTuw3KpZ5ruCwsPwmNu1a4EU7Jv55gAKSPRm9UH3byKcquFXPigBTDJaHV9hKAgHghZMe6YQ962xzj8",
  "key19": "516zeRdXPBcDsLs1Z78PJ6kqkVq9L3tDyKMVeT4PhfusiqD1hZBw4zZD5CEkJpYmoavK49kmKQoh5Pvt2Euxfu89",
  "key20": "A3NNapF7QSR14Ear7mDu598thMMCXziWFpB9uhZhJXPwp6SGfZpSRestCBy3cDHqjLdzNtDBMm6KUzH5DQDJWXU",
  "key21": "4uSmPmXCBdzL8bf27exEF3REhBHVp18zvFS5ixNqFY7WSqwxqr2mJiPFYjZAb3K5kXofKBZvg6qxKKXWCEBh87wo",
  "key22": "5xC6iaa622Q2WuHi31BKfki2T24ry74rqqDrpCAMfPMubEQboTozK32aoYkEPygPVTmpFRsFzPgbEwLCaZPyBGXz",
  "key23": "49aX6SnRV1YeDe23ZG3KWwMtRfyazGcmk4QpPZx9a353d7GcQ3kQ8tidCER9hbHx3YXdaA2J8sJMsDWgJ8nprZXm",
  "key24": "4WBE2dQznEA9s6VTvtKUZUEXbxAwTFTM4EnnqBUFj2scuDJjEZKhhzqU1xekPkRDqpNumyUEg1mfJ4hSs3w1qXZV",
  "key25": "38HWxmXETCx1Ncms1j1iASQQQi798g5m7aHfrBmQhCG8MK13c4NvzngG842C2ZPYpGj3noESGC5LtifY2Mu45xq2",
  "key26": "2HcYC15hiQ9WyyT9GqFt4v3qYs98YucZktYXTWavURW3e7eefkyu6tJnfGtEeFyMeWbV4rnH8wuD1i4wx6uC9dmA",
  "key27": "8Ao7bPLztiywbbDfV3WKDb9yZjG6TTB3jyKdUH8pyh29cY3iB9cAaJRVyu9dKWTH83CfwsC2vhNYzZRuE6A1QLW",
  "key28": "3tG3Q6wjXXDD2hxo5CAESqSXU5ko5HB6ygDTDnbHSjcLVXdR44ejxp7mAXk1JAime5AE8wS8Pj9VjJDpn27vtXzF",
  "key29": "3qCxEEqr2p5v1WQ5HarstAH8hW7ot8YuXbmNr6DweFgS4dBb5mFJXxYvEyVRg2ox9naRgNYPJBXwBMJ3w3Tkwt7W",
  "key30": "3gFHZQwRsuWxci6Qq75zUHRJeNFwyp5N6qYwZfJV3CpVXWkEtHZ6tkYbLpMqFivwhJDj7otf8pWutkvbUTkAerWr",
  "key31": "66GV2c8tuQpBReDz7U3BdS4DNdXRPUSMa8B3zBKg7Ay5uevZZajnMXgnjUY1pVhdS89wMD4KabUh36gjEkKzaC85",
  "key32": "5D3fj9ktPTKpiZBiDQH25JBbCNXWb9hEzNJxbZ65U1A5ZQ33SN13tciY3soxrswHUEGrwW6XTfdNGvWiE9VQx7oB",
  "key33": "21kTKU7N5ozds8b9qL1s1TDFcAkL6qKNTS8PuS3ZDUuhEjUmC5pCYFfGQBqgnwi7BW2eseYecM9KdjiKTmMTALP4",
  "key34": "3spAKy3CZdMSNoHmNfizonMYUWPkyxrCtXhJ61rA5p56g68yg3tpCPoRBifs5Pay67G3251KnwANfghoS6T3Kqyw",
  "key35": "2GvvUzqdZQX8gstqqnVmvGQJJdzX8HXdzpt2ENETdoaU7icJK7sLkyz9NVEqfgVb7AJWnesu1AMzx33pa1eMNhzV",
  "key36": "gbKmTxMj8991zC35nej12kAMAFFFEdVsbugaoTdguz5ZUEqN7NyjRMcGcC7rSsxFVaq3WiMgVF1WuGLuKJRf42m",
  "key37": "29GRqZgQwihNUxUcFUckRJe8bLatpHfbqnEwnWW9kuKDwiCvMBufjoDHfdq76GAGMp8kRQc3toKXT9vUKgxSyoP9",
  "key38": "5t2qD5APeXB6EVLinzBES2YkXjzcn55554sBDjNrEdE3SUyw8RJGDu6oF8eXmQhpGREK1rtCyVsMDFNT5Ag5CU88",
  "key39": "4bd3YTY4MrNmbohtzPDFqCUNhXniymPv5WWUKSR4p6CFL62jmmxRppwf9b7N2bEKV1bqez8BaVjGQNr36DSCFQHm",
  "key40": "3vQtcBVcZtP49n6H3oKQ69jomWEA4CfRrgM2AUxbbD9EunjUAWUSmKVgqF1ycgcb5icFqU9P1keLMMdbHA8xbM8C"
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
