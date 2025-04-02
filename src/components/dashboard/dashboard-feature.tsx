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
    "2FncF73FAd9pM6yfSt6ibYYYqPQTQ2Dy9DG5rT6EpUYWAg8cxcHZeKyanjx9TGhCZUK1q3aJU7mZzF4u9cVFfCPp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7YMxr5LwMueXVGSyDFTSxYxP4quQwiFrGxbfcpUEFacKFVKR97d8vCxDwXeTUZHr8xJwDnSxYUn6fRCLap1yy5Z",
  "key1": "2R3bF7Lyn6E71N2pwBwuUhtj3c2nCd5oGAzBjz7fYJcWRgaHdYxEhyVAMtp4UFdSMKnPNJqPhDBJnpSSvs1mgFC5",
  "key2": "HoidnVNB1vhLg8V5g9KTA1j6bNfGL94RMNeNKodMUCEu2dmbEfNdR52JXiV2qJ9PgdwK2fAH5vDCJjVkqX1dv1K",
  "key3": "572x16xk8owvtj57nNXzSWMqWL5MSffZzoSRoXZEZWZRYwQsThqa8HVTghyf89Ryk4ZQCbcm67zwmd5Qd27qr5vP",
  "key4": "2pQHevXF7w7Ra8xQCCAzzLBx7VjodSdXhKgti1Rhkic9jbCA5fQgEEC5B9H3cwqGV7Fnx4mzS1iibb9NbKPf7vpD",
  "key5": "3DcBMsPzSmze3fZmdzC1pqZUseaCYBYQEHj4WvgHzqQJbjtyQgxaiDkcycM9x4bWPCN1a5W7teUD7UXMcGcuzxeB",
  "key6": "3AV7kRrz8KFUkT7CL36qjZ9VqbVQWJyoj2PfYXmWbtinnqYBW4nR3N5ZKRQxAsVqaBkcqEdP78MK2YYELXP9jyMf",
  "key7": "2H1yKQWAxoZz8HAs4AYz8Lv8TXego7N7TbyUUNTC9AuthY1EMX29BKfkSh98tGecPGuzcrsj5XGBrWJEdvuvNMz8",
  "key8": "1x8goH1o6NBQWimkUhSvuVwN3m24rnqmLigUxcqedHVF6qvrMFehfgEaYpFPw2Mg8oFTqR1pm9Nov88NDEaVm1P",
  "key9": "4qiHf8tvA4suUQjo4y19eSRMqGjGFeLvL5KkDKcRrKFrhuNH2p7eCmQKHtyZc7wmcqmQcqULGJZXQhXD8DKrRZWC",
  "key10": "5SbaFPN8B9JXgwt31gPM23NJiyGPsnpUtCSfd7eMdxwfj2sT9Qzgfcbr8B6w8AVHp7C9KGEFKubrzCJJn9ENtsg5",
  "key11": "tYAkf899kTpK4w11QRwHvgPtht8qwVDYhXuzgemZaTLXJ6Fr86jx9jKb6eTGTNTyp4QpfZNKetiVs35rTu4tX3C",
  "key12": "3HbrrDyrMi1cfdmphXkMwjHExqvj3sLf8uq4EsteESLbN2Sd8PKccoX6ULeGJk1vimicpB11tRRh1XcLdYWfvjxU",
  "key13": "2i11JmXiFPZJFkQP9MmkHXHX7rQqS12LqbXSiKTYCjVaJipRzdf3ocZ4USBPqhdyvzAK7mPwxpGZ4tjTEGqK4S5a",
  "key14": "4spLcHkGjqHfwvztaSCc4eGmPXbpa65e5d1mDriL2Nmwy4RRe4Kdr1aPfc7tNoCULivUSAhEi1pYafALZeHWuvXM",
  "key15": "5Y3idqZoPN2xL9CLGH4c38BzBbcmxVMPLhNZM1bo1urMPJs13Rooi2F9sjzPWQ7c3vtKBDwFR7eUKKDF5RKMbELa",
  "key16": "37TYVSchmkFpoYG7rpKfNU93WCKjnHxgmfvgm3KLuUrBurr2NFBMnNFDjHNybjE3TzQ1tCUGXpu3E1eBkPWtgQd4",
  "key17": "61cZnv96qTrt3J19ub3Eixu21T5CMysqJzc5w442uKGjee2nwnFHKBNwYCruWZChyBcDLFkAcDNzzXuJ5kXVhb1o",
  "key18": "XVTm43NWF2QmcTkJr8uikXsNBLrFAeuWukeAdgXfgWBEA3M9bsYRwAJ8ejcUpzoyb3JfxJkyJNRFezq4jKMacBt",
  "key19": "4zCjBVtn82Au6Hn5nmFZvT16t5Jk8jvxevyjv1DwXzMLVCT6PQZj332ZmHhQUmy2EMjnjBGcWfA7tsnqyBjzH6Bg",
  "key20": "iHHxNvrYmatZ7sRtPNTEJmF37RwEajd7gJ5E4oiqEjWYcYEex9hWeJanLbZB1LHH668GFG7nA5rryEVBxKSusqX",
  "key21": "4YkzWiKeSviyeD7TRMTA12PnD83bQH9cDJofJJYekp7QMmmv4Dw4QhheZTgWGuzwWpwJ4AQhtWi3U8xUYGJzu6v3",
  "key22": "2fBHRz3spMeX52BiGZ4DmRwa7LBYKzvXR75JNpqavbNqgXz7q2VV7HhTGL9ZrCGQdnZhtiGr6SeTV3WaLa8k62nC",
  "key23": "oGmmK144ftRbxFMFK39jdxDRvaghJgTMCGCTXcK5HSLg2sMPYDfCT5Wf5HWajyxAQQh1dKzpnBqKFTJzwtKCmjy",
  "key24": "5gB4XZ63SgPgYQJk6b73giVa6cJA7ifcuuLEX3WwKKviJF8jrSHqhZgCcsmeZwStbPMee9kdZXCZfBRnjFXFT8vT",
  "key25": "2ADsQpGeRmm8FJsjs9pADX2NSv9SiHVSvoaC2GJe8z14BHbJdKKXHPXq31cCTAjESqkk8gVbiaoRF13ycPvPbtdm",
  "key26": "5YnSZyLeew5QKMXVyQQNJp9X1ScM1x2EAzGZmhPdByfTFbU7J9xDoUkCkfwRhVsoWfjnVjKZ7hLbk8hKpJiJdqg9",
  "key27": "J9dW84bCoD3wAwFxpqqwBKMQfDpsDXCcdghmZPR681sadTjwpuBeMWy2vHoEFNpKYoHWtoh7nnxUMyLxgicRZJ2",
  "key28": "wnTqyC6yo48xbsb1qBREmp61pDJtkTMGSph94t4xyE2Ui3zY32QPEzKHJzKiicprHyRcwmXu1ztj3AKhqviSrJo",
  "key29": "3K82afwRTf4HpAhncUxo8EVoNtPbcDsftxwGHnAVJ6YRsF59RZh5dFpkvd6dNs6yzLPx3c3bW6rPjXhf2EPT4YQ2",
  "key30": "oGiMTipa13snb37qmH67PQen1x6YLmkM7ouDjmQtBDQ8Y8YXWgzr3aSpGFrj4k5L1Tcecc6s5uB5GDBhtxUaZRX",
  "key31": "2bihLaEf7SqFn74PvFwy7Rr4SmZc1Movf79FLMjJAJeyk96Sv4hNBKMNu2RWYT6EQybkJpzoRF4CvakcpDnv6Hov",
  "key32": "CzbXVKfeorChkcQAfbsioTpkdmjUVAGFNRr2afgjK1UkQyJk2TSWoryNb2rcV1eoy7QZLAm2x561tYUa5JeZZEW",
  "key33": "3XAB7mjBomzDXCob21mUPL4y76mXw9wjrc7GdDgC5GczfZetetAupo7auyu31ZwQTk77M6qvSpyj4yZyFFQvJt2z",
  "key34": "4Tutn1G6P1pj5naj1GnbakZnoAgnwu8x7Qs4y7bahKyebrmhv2UJsPYYu8kyShEujkCZCZVTHDEYghWVUP3vcDW9",
  "key35": "2RmT1VPiG1C3TrrcgiGV6LHt6BijpY2ukPLRQuQXZbPEGRuFECXxiy438PkuwP9roifLY1VnR8ZrjTNEYH3Mg1jU"
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
