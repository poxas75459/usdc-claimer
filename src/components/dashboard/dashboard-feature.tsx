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
    "p69tgEfWonEiNnBNDCuLXk6Zfn7Fb4bTuxFbnxaxfQ3yAjPEoWjYt1StAkU79zzsqzkM24gepeMtRkfwfQXyq3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lpa1ysq2nMprkUvDadj5Z9Z4HYT1W9NYtpMwn9uhwXy2rh6qosUNQfdemQDPHcWznkTJfm8VbS3vAsDNweqiraU",
  "key1": "vTiBdwDaEuZwAirsm1XQ8nWiS16CNAcsAvrzscELvKGQXPNUQ1hU25z7c6V3EZ7whDZpxcKeLmvM68EHCcqsPyW",
  "key2": "sJGQAWyqPFJfR6Tw3oVYn5df8Sqdkw7W9cejdA82cqarAboMsTTxRW3NgNtYs1hiyXz1rmhEsv9EdDoQg6pKjoi",
  "key3": "4CtB6L5goVdxaHPVEpgZNjDkJHRrfJSRRpHdiLWoCHfcm8NLByqjyoRhm89DVf9CS62XXpfngQ2cWKLVp9Btqpve",
  "key4": "4CaNsnVC8fFdgo74enb4B4wKH24cuaVnAjMSyF9aFf8D5JbFjw3wjNW5x7fgYYNnuqFR34H2SiGGVFVULuMGeEgE",
  "key5": "5f1vQYExomzYZkA1wNa8aWhdj2AyeMrBrZm6PPmLg4aqW2tPzEvwH3vRdoQ5Y2apw6mwmVK5etUg73Rx1MNJBYgZ",
  "key6": "4TEFxLpZowTo5dsj9iVQE7oqjASh6TFrPDBGg6dWuyrdTuhFhtmw1LbuSUjpZNPa5suZrJcP1Ek2tmL4kPMyFEsc",
  "key7": "5NnGb1zHbK8inNHMBQzC2tHACDtUPPAKLhd1W3BGTUwoaQ7KmFFQLQaVQqqN7fqnpTAR7M4tTxYtJUwMimf86TSd",
  "key8": "5MbjMuGzLbH8E3eXNypaq36i93P3WxLzo8DgyCyEMom9mb2rqoqqe4pzoy4C3MfnwginD3ha9Rb2pG2F9HD1h9Ho",
  "key9": "5stp6P2YSny2w5QHeu566aXxtaoGfdbG2nQXTYVtBfnFMmgEJ3oAypt7CXxJV8WmGUd9RYSJD3arrC6UpjX5agQz",
  "key10": "654MM2ac8vGo9FbeEaYt8h5pyvDv9YAdNZ7LSR4ws1eoUUGH4MHAZi9vKUoft2kzFtHfpN3BxQPs3vYr6hEPBMK3",
  "key11": "NgoEGWCpEJPJFVsEbtiZ7PHEGBbN5mn9MzhF3FVbssPn56yy7dj9xidWQuNQf9NvFSPN8WDQXnzQewF8sKVPiuV",
  "key12": "2rwWNGA6eHvpMxXB9ugGwhRLPHhqwY7GpG26Jw3HHWLJwGqp28N3CkDZUYac4mgP7WXjbmFC3nPrEkTmCCFd6ugY",
  "key13": "4usGYB3hwWx4weSRK3JB4x9yaSDxcRznmgSkLfDEFmYCqs29uMQzKQ9P9Z77T93WGPoe2GC5YojkHtXP8mskzW93",
  "key14": "3CXdpYADSU3e8gWmL8Xdy135MHC96FmJzk7zc9HZ12yVqzG5vgnTSre6wJY6fGrcdYEpdNX2rPYDtgRT8QxL4gSk",
  "key15": "2YN3N51p2zhVLyN1i6XrvTkacaFUjK4fuu9eVJg15ySWtvSvfMVUDx2R68EeGwFFTXLhFBegYB4BGKNLsfFnZauU",
  "key16": "46k9PdnBjg6sxR9ybtbzKvtugFLVf4x291kx2nPUJapdXT1abJnT7HkNBH2eUuNgVxcJjzEde2n5iM1GTKuMfY1X",
  "key17": "2KkDM5xVXv7MkBJfoXxGgoTU2KxHcQfH5vjxc2JCY75LxvLMKndEUzg7ncGLxyDc1ZX1NGiM6az7cqaBVCmKE11E",
  "key18": "GkQC1TvPZwq69E2XN9L2CbramQWGddScFfPHJQf4Cuu2PFGyM7o5GV2jqr63NkEqL3ba8ZSqQ3EQ4xF7NJgxYgY",
  "key19": "WYyLkdGu56nRzfJKEfkH9isnYgp8B75gnVbbtN8EmBCa5MjmPP8QveQbg7JD5i61UnWtHGNECr28JwYmLMEqJH3",
  "key20": "2SKrEMYFagE8jV87mmXMGtPLxDooGi19VY8CkdwJjrCfA8RygZRXSDxoikjHvzJ5CytGEvczSh6cDzgK2E5hb4ue",
  "key21": "6D3ipWZxYQCHNdsMDCe1gTnfjvzqxhEzhHrL51JwBZvdzRDfuSaGrv8k5fs2x8K3oorcDop3vmAQxWsioEtJSQy",
  "key22": "4X2144xyMEjzqE6AnymMApK2UT87cZUWyJ37gNVfLtCzsFZsdZEEPbXS6mj9ms9gzpYwzVrFcpaLD2gL1onbfUyf",
  "key23": "531oco8LKZtbcrbW9voMoNy47rE5g2rXNn7oyua7XPr5zkUrFoZBX8VHXbTC87pySFMpd2pcwNZyVXWKKjm2P3sT",
  "key24": "4jXrGtys3tAXaLoWUgRQrH32HrHJtoQYBh8V9EGVuHz2eqFngAXkote86W6b9nKUGFcSKGBu3Cx3RgAo9JHpqADY",
  "key25": "WT5z7R5d44z9inNomXEArDF1PqjDYsB8QohaR9x11TBSs6tKHZ5DWvAU698FH3x1FpVYxY89Yv2enGukX2KkiU3",
  "key26": "3kj9RZwvbCyym1kci33ZESVVFz73PJ82HPMrfo2ZfAUCSPed5sdDihJVoPihkotqfUM1FcBziY3szGuKcn5HH4w6",
  "key27": "3zPSA6nF8Ucumu79gMejdLvhLwrnXSorZqVvA499htuuuGZ1DXpGVQSbbu6cFtUmVEezNZVftLqGgw7KjxM21Etg",
  "key28": "5MKu3X2inyM6uv2pB1Sfx99wVWXrQwFy3v89njoyUzSiyXWSqXRkotUa56ZcBEUAVZqVZrexn3RWsTJmjCP19VBd",
  "key29": "xBUYijkUHoEmBXm7usrn2rJkzVzndooa9TekBx6XwRPJWsYtaGXRTKSi4AJBVzqViNrbwDMNfLMS6nJTPgGe6Y2",
  "key30": "3oyRgaQwxm9qjL6nPeKNPw8M4WLGnhhnLKWRE26qqaKqhJu8g9UXn67EEw2bVKgXkdEwABomXgWBh3ZVuuZmH5Lx",
  "key31": "3m7MVZVFA7EknP64ShEEGT9Ri32qDneKJaGMKk3zRkHRZD5pnpZe6ym8s111yXrFLgt653PaT2vtSFGFiNVo7C4x",
  "key32": "5r8nWXkHRYcneJ1gV3wDM9GofaxtxHbDr8ud1Ck8yC9GZvYPTAKjthDNTn6J7YTedH7UZDYB2qJeA1CBBRAWmuCc",
  "key33": "3WdQdpNZ2RXko4NzR17WPSLFADu5sYwnwMi5Ym6rkNNEJow9e4nxLKLeFTUP29k5nfdDVUBebSzMfHGg8hCgvr97",
  "key34": "wx4r5nBSsE7zjQfndCSdqDN7bJKB3SPpidkLiqhsdAu48hWSmXrn6rb7xYMwHU5ShhCBDEsnXv1DxnThy3CQAPg",
  "key35": "ED9UmbKCRnvqkT27AYEKMXFJqVCs72mErExTVVNMxT4y2dc2sS7Uy5H35KGiHHPpqVuhy3F4Ds1QtvkYiVxbxhZ",
  "key36": "4QD6Tyy6CHjr1pH93Da4nWdmcyEa5AAWWFRVuzFyopShRZf33x1sCVj3vZdZvpHREkfTG98bX9JAZzXiVNWiaede",
  "key37": "ZoxdNBKystkfADxVv5Ch7Hreiht41v7gHCQLoRzcLxmarjDMu98b6CC1bnLdnw8UL9Fqd8DvFRN2CBHLsK8PUV1",
  "key38": "5BGu3iF94jwVYji67xq41HMqQ4ouo6nTwyNxDxDhueTDeTSZGD3c6wTEhyeaa53DfXbw2DoyDdgXiG7rH1z78Wmi",
  "key39": "2FsP1iTuS5r55rketMr1EwrakiQ5ywFFEtMjqLd56DCs6inoRucpKRCv7RGVEovC3Ct8FsVmGt8zRUL3RbdgtX5f",
  "key40": "5j8KGnSRrMHoE2Gw4CaAwLRxY2iiNx8HJYR35Wa1mm96CFiQHC1zA2tbiHwSRSVopnUnZYjacZMxmQTYJy1K1ZNt",
  "key41": "2FtgmcEtPLoPgv4oixKW9wF6RtrGYDuo1rxuym37XooViXsHVNXMBsfDgQmsWmcJQaSAzYhqcs5NVXFC1jx91UtD",
  "key42": "28XhQr1H1rszKS7azKLJePMgkzr34bp7zwyBChrhBbPYZLuD78m4h7k6xjJp4ztrDdDrgNyfhqFi8GKRFFvn19fL",
  "key43": "SPq2eqrwCrc9qXzwdNg1UVJ6UknfR3634UTUrwZcTNEA9jcgCmxuoza38B9EyuP3g4sKuDsyjDNQZpMcCvLXvMu"
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
