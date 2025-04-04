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
    "2vxq2GGyVQamuXPD3YuD4X8WtJH8cgEW7vvccfaxM4cMoVbxE9mRd9KRgSCYKsDZDeQCFF4jdgpbL9WMZxkW85nS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "84S2vq56RPFRtrMRgU7deJyss7kSnpQoCSRUzQkjJEw4NMkChM8X7EDof9MYpTw1LZhcGLEC44jN9jm6EtxACvj",
  "key1": "5383frCfiBvMZeZmhoNYGG8GfxjaksTXsVCJxRZhwcfErxYVSvSmeGLnJBFdz3AtWaMkYeHB19b1yZd14GPnSaQN",
  "key2": "2Ui2hMRWVcmLsYkhLDrMHCbqLs3Tba6G15ByscdyJvL8x6om5GYmBmSTPh5QvCjdfrqzNWAshcWwPdcV5Q6bRzmE",
  "key3": "5peihRDyaTCLzr5kL7hvSmXuQjHxdUfyXcaHnWakSHM75XvkBrLmK3che8bRnSWshA6m73NcekVwquAP9GDh8Shf",
  "key4": "bWLaaxYCajte6Swrsiimn32DdtVnXMQjV7YmBx6yYtYG51u6k6oVsV1ii1TwR5gvAKbot96WZztgcgbVwVJPWX2",
  "key5": "3UHKoDfT9WcxmTsp3Jy2gV75ndCvPWyhJh2QXgLuUwZ4mxrHbRWCnSimpENZAnve3AfQU2vZYMXXZ5LanA7CW87o",
  "key6": "61aVffTAu6p8gNmN2PLSrCbeoYwxMkg5VxRBCFmtkPua8SK3PZ6gcSuiVN4qnFCGC1S8m2kBNTMVwTSKiCEYPCe3",
  "key7": "2nUCVEgbUc6Pw4DHUVTPVaz8d47jmMQqmNB6gbgkyMeKniCcWFS4uzvfUSsj99YDyTJHYPNV5xu12k426Zgsjj8n",
  "key8": "5Bw3q59ta8GZ9snhikP47TSGBHLjVownSMwR1QFoyeWZ7JT3tg4faDicCHAha1poKr9jyAungs84Sg9AzQu8EacA",
  "key9": "66NKrR9bC7iaPTnxrEKECTip5q3pxhynUt3AeQESSkr6JUWY3Krj2tyondVnx5ZyNPAz788nLFdq4ZU2wxZ28Tcc",
  "key10": "4HCg2yQ1P1gsa3xo752fVTjfdgoM1GdfC7H8wu7iTkvBPdXtQBLkHLPy3xYSE6YhdvaBvXCjov15C3WF9Dz5kApZ",
  "key11": "56Ah1boMdTLQRbKy4zZ6H3ZqfjV8jFg6sQv7Y4ZAFKcWjuwZt45J24v6QMcybqrx4TKzX23Xga9GQtCcVWUb6WcU",
  "key12": "5DGGiyAX36GtnCDyYepCTiaHTL7d5vbRhJdU4dzvgrPemR8TL8sGVyUYUPGbLKdJXJamtBVQufFiF44QwvHEJuD5",
  "key13": "3t22ijnwKweYRg7GYLwr6MLwriucMoWjKQmExLSVu9WhMKMntkQBiELA9wRQy7FzWUjkxpzmvWWm8wNFWhi2Jxj1",
  "key14": "56pRfycqc8y5x1zqWLWF26sgbRSAW5rs1PYM1e4n4KcuqWhidubiuC74aQRTfaRbPF5h79yNyN6jRroTn3981BLi",
  "key15": "5EmJsNr9kN4ZD6D5vc9xyLAENAMPo1Dtuvaq2t7thrqbSS6EDLUp167oiHZvM8E4NEuKS8FJQdTunYpyKepMzFpR",
  "key16": "2x7rK51v9errheayNomemZWGZpeKQriYjxeyYJf9eJzxWn1yGcWTSQk9uRvheAhaRvHQvmf4ziFGapuLyiQn9Bfn",
  "key17": "3Ag9Rf9hhu9YRG2WxJ813Df6RDnKTa3PfkRtRprzV38Fg4fMj4BB1EjJ4zZxU4hyihzmAkdw8KyxgaqTCmPYwiD9",
  "key18": "4qaGjvw53ubXYRNvJspbqMmLfxBkDCVFJBUPWew3V3gu2TQymg1QaP5HBsE9fh5gDgfCMarckx34Wt3vsZPyMsKK",
  "key19": "fRm8dTXENYZepJ3ViV66pQbyqWxM3cr6uKtVQ6kLrKD8sSU6YeThack9axekixLke5RfoFZWHduVPYouUhT9EtL",
  "key20": "AvidBRSrYFeZizjxPEQug5FYZzmEZX1xCGjKG7X5hNbwvwE5xHUsYVmocmLjDTzhHE7RnTdeYLn32avkNSBuiP9",
  "key21": "5CgyAcFMj61ndf7wVMfqjTqGwPjzCtqd31d1QJFNhFP37hGoMV7xvpMwpLc6ysF1sRPzLeqWLf96HGooRatjFgbQ",
  "key22": "tiUaTNirjWbgCyEtr6K7RSdYgDUksSeYR7WMK1HqJS9aVqSa2rQBVoWP91M7Q57RJDgs6XffH2zmvTZPGTwUREB",
  "key23": "VbXdvav95nDaKv4FmXU7VmPeCs52rgACRSaAyUzCL7Z7cgKjbBAQCwFPBFzL8DYFjhqwXVu99xy7xCcjNhoSans",
  "key24": "5j5Wrdq1SBMjw4eVvepQnf28Z4aoQoqWpMGKRaQ4iTtDwrgZ5BfEHndrxapk8dQU5CMxs5uBXMvSS2tXLMMSCkkN",
  "key25": "2dptYLCWRqiP8v8kAmx4f174TwQNd9ij6DYpipsQVnxbThrXqiAG7YcHY2qUqNpCbFYamUGdYDzXkuPdpfmagkTL",
  "key26": "dY9EVKtKniq7TBeSt2MzxrdRxfJfuCiHZVJxait9ZGBnB5fKGKRKeqPZRfxJ1N2De567BBtYkQBxu6pFoupCH71",
  "key27": "4J2j4tDcNGwWj8ERw39hEb2V2UPYmgJmrxmfR7CUnFbupme45MuFFcPJo57uU7n5e8Uwy9KqT9sfFZzMGSNooDLv",
  "key28": "2sSjBncKgDmqNoDYE2kTF24hfCFgse34KWbizQ3RD2QLUzC1HN1RYo11sWS2fc83Y6kRgAWeyJYr3ztGC5awjBxX",
  "key29": "5591TpQF8df1FgQh7b5xsbq73qW3n38TTwWuMuFW2ciaEzxs6D4wC3yTZqzkyh8ZdMGRzaQCaXibDB8Nfn2su9Mn",
  "key30": "2oSz66R9BuG3NjCAoy4x8KrzPk5PbnwgSvGeAe1PXqYvqw7vwxrms12QR3T5UHmcMf4N1Mt9kPcq5z1gg1xU7SSW",
  "key31": "36y4xmpisJDFafp1PJXyrW1UxF5ARw79Y5dbWsqra4sE4TeEawfCAPxZ8JoemJyPXduVGyG71MXaTsemqfYzAYYe",
  "key32": "34LemAYKDfnifZb1opWY7NFgdHxM7H4EpjdB5v7ZGwuvWzQJjEv1Cq1dFoSwuAxj2XJzZACnoJrmdJNaZ3rtof6J",
  "key33": "vYT3LHuBUp4qocZsDbFVCumHHBfdNLwohDgNC5syGjei7mKY6gLmeTCuDhCNdUbL2iLJs2nYCdGEFuwJmX2515Y",
  "key34": "eumZwrFRc3zpjku5SRM3UarcLhp2uZ8NAZhoyCKC69cpH6TLYokGFykGvxcSZSjCwAbEyiEh3RQ6pwGvigrBJLw",
  "key35": "2XYrwis3zWNmvVepX2E24YBC4XhJ3ZquaUJuM8K9KRX9pBxhLSWxf53NGkmtieU3UMxBaEHok53f8idRsb6fnGN1",
  "key36": "4wTyQ9qfxbTWc6PpYk6gCmZzDyccSEZiGZRx3c4SJJSQEFFomUs3HKph7tht1dzmHRsA5rPD8nTGqHSUBp7KTTcE"
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
