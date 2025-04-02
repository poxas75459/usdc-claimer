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
    "54UnThb1N3ufsGVJDLEnfuQqyv36txUDcYhpTofsUNMUkGrppbpptYFNKKwTqt8pV5pYoJ1fHRFVofp2AsztXfdY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xsvKdHuJRNRYCzTwrctstbebN3CYL9bp1zxfkXyg4s1JP2iecMB28BWXH8S5g2P4j6SaUwr3t862pGtnA5SZ1Sm",
  "key1": "2F1D4RCUY9H7yw96cPMT8sdQyySg4cg2cafXePmmoVbHSyJpKsABGw1ejYCK9seUFaYdG5N4NvFCG8ASNdxJo16m",
  "key2": "3FFEVAvbNy6pAni228pg5JDpnNZPi3B8YPcutKGcMPjP3J2tjhEqptYABmuprRLdyZfUNzykQTv7Wh6bWEKMW9LG",
  "key3": "LWXzY4JfpNiuvRzXs2aRpBUvNnzTxiNCqKErDLyZGEenTzgJ21Ybt6SNSFGguDv5WiaVHp1W3jSqqo97r6TKcuA",
  "key4": "5Hq6WVt2rDw9TdtCyHiR2C5Qw74XtmVRqqsFcg3Ft1yCcLJ4QYfqKaKuXZfSZWbJjgHHXyjie4MhQASfxmwjB1mY",
  "key5": "oRY9EUuZKd1GfVEWHFu5dDt3VWVP6Wp5CwF4zeM6AtSuquMGSEuub83oTqhw68rhGwpHGTv1ZS57QBnHuwkNyYj",
  "key6": "3GDzAjAErLkVPu45cfBNMEN25CGB8eV8atE4367YzjautaokFP3chTyuTUvTV6Bb8tzEeGT3fcHxxkp8JUJCUAMN",
  "key7": "5QY6si3bDoupxVT1rrt5mg3vvQpWs56Fgw97sARGigVHoXERjiJZLtY4CktYRpsiT4V4coAFznDq832yggDaCm2C",
  "key8": "9wqh1Tx661JRMwfr5fYVmEtGZe9nzhZiGjxS2qTWuEUudqzPqnXjzgseUajR83d7XVdNAgU92dsXxmsfygwXtGu",
  "key9": "5ifywpkYFQR8aRDEub5rB9vvNzMDsfiLWEVQqqePFto1DMFZUaVunbYra3EEC6fovi1moy2dyqYriDJ7FvLf1LMD",
  "key10": "2oXjyvzmg6pCrkqkCHsEvcRHbN66NsX1GZcNx1VM4x4NtdnEmj8CVXJ1htPJhBz71faErNziVivx8PRuB7GkLEGu",
  "key11": "4KpAQn2D5ENUTiSYdmS1Vug2hhZyXcCAtrJWgDBgyD8dzpqSLoEfirkFABF9au4hTsFBZn1e47Szq5ws1yvqJLoj",
  "key12": "3WYXTpJCXAWW1BGpt9Wy2PSHpfCsyvHyVaxQGuUAgncMfuTK1Hu6tkWCoTt2ydVd8HqTrVi5msABsJ6oHh2BeCKv",
  "key13": "j1R7EVSj8kPoNHrd3FKDcNHhSwWcwe9EeMF1VQNufudAXngQoycgGd6owjNzKwM1t5HRYsv2F9R4wVbDrdi94XM",
  "key14": "36bMM42Qfx1W3S9AKFHwWKDx7oLwiM7A9ATvf1EPfiqYUCmmoGq8w5Lnj5KycKqkgECTxwY1chEqofyGa5gyWrwP",
  "key15": "24ZYEmxKRW2NnnEKYW1SwBA7QZRRVqBoD2xHnXPDRiTvrm8FZnaH7iScQ5QmMDzfrTf7iGbwAbiAhLyMGzyynZEJ",
  "key16": "31FzCvPLLpTLyiZywKgQnFjhvnRBSS4VigwxoNTvofhZMToZ4SBeyYcUifTM8gigUWu2m9yi1Np1X16ZqzURGpQp",
  "key17": "3ozpxs4wxABuHaNyDLTdbjtwNrv4xhXgEKt4deFm7TWjxdctKRe525PCZrJY2k8Jb1W1gxtkj12d9AEu4UV68Kb8",
  "key18": "2WWapAYYUshJ8Ligp6ND2JTD34t5JpxbUU3ogMUZKev4kVDvx8pAfKEyvKqmzDkWu1RaHSvzQVPNMDUojfR6Nzzu",
  "key19": "QJMN1J1XzEZrMcV2xDxXr1uytKBPShEsPxghgbgXjA2YBREYyf9zVa6x6H77TVHZobDBxC2p6gJrrF1tvp656KG",
  "key20": "5zf3N2xqGYCHk34zJCRXtjZz3HG7po73gtQXpDh4oquNE8rRLiAjgxurSPboLpzP3W4AsbFK6oi1ZsVUcv36NMsA",
  "key21": "2Jsj1fzhnyQumJKMsPmmkrTeZVVQmuMndCmqTshY3K5BjqQrpXZugLZKfPfthT78BKfPUMwdbSmH7ubj43F95YcE",
  "key22": "3AiRk7Akcjzsxj5uSWy2M5MNZRdxzHtjyuBqSat6tsWFUVEPVDRxLXCRCUXK3G8rJVXrrysKFf6U2jcqeWwaLjEu",
  "key23": "2ULLcoRAUW8SQ6DbqCnScEEThUNYV4oJhRBtMVLVdPNBabjt4SndcijjN8E3eLppSz9HnsP4YywADUUkpQLZkMcd",
  "key24": "h6SP9qnuj48dMH6cotfaiUrtqjCcM2vuY1W56Ubv7TfYiaJnvcW9TY8q9JC3DNuJXB97kF8A8Hp6MNLnZixaQMq",
  "key25": "4Cpv8UgqCZ3R6tWMUXcT2j7qFhmcxjmsuBrGay6NoahyehiJsXWdDPFK3x94A9VeGPn8gcSjYH8sZPH25tvTjwtM",
  "key26": "zK4F983ELpdBrKCLfMYTrvmcami7Axze6CFiUj3GXwzbnz2qtr2crwivB7iQeecwGtcDCm6LDmyFWQ1dK6fh2Sh",
  "key27": "2NsM3n5KWS3VcbtT5auf8tyx4hGjp21NDs9gu1u3t91rsw7whi5LC2ZWo2b9Yx3h9Hs7v31oL3ebEgHCHyXjjwLn",
  "key28": "5VB15bUtjce8XZemSP6cX3J76XyDS4FPJ35mHing9FLD2cjhAUJ2cfUhey7sseeq7g6v2d1b35uh26DXY78LjF6x",
  "key29": "5jJW7jRNcYHySxdDbu1Jc59BiUooXD2ZRz8sPbWqe9Wire4PxeqVZCjbrHtMT6a6HqovipdYRuhKUBjDCqrx2AoH",
  "key30": "52WgVkLrF6q7TWn6umcuMrsDpktitJktsgYnoPt9uqDEp3QngduxypRwLfHDwy1HYSWH4uQiFfs9F5aqx6aFRRaC",
  "key31": "4ai91YPr8E79wSHbybdKTBP68bLxWYJdcBcMJ4sDuEsiRV9KTjsVU3Y3qJ2VkKirh4FLnwC841kcnpjZQqo51Eeu",
  "key32": "4aPPiiKRzWNME6odj8C1ZzBpp9Rkf9zRzHynrUdbKTas8qtFgFJv5VvKYKTQWc717JaZoNmtoVTmVnuzbaHuoSDR",
  "key33": "3EkUQm5dBpVCHy9mnHkXMhRDTYvXQmL5erBXQ7zVo3agrFXiPfCRJetasiM2KdsANaCbhBqLUxjhhcAosCzZk2Rn",
  "key34": "4SdVqHoGrZSm13P7wPiGHByA31f8ozs1U7NVLL9doGNPKzQT9W4y6Q3Hj33tz3iVfGzjxm4U57aUxHpqc1KJr8NN",
  "key35": "4cUe42FFVpDFK1feMmfUoy4gnXpt5AXBsR1uNTMQ6xzNVNjA8hpFAC8TP46mbLsbWhzgJqocaRSNSyLppsFjuZXb",
  "key36": "4T1nYCKF1Qk4EoaVqNVXR4E9Brp7WVxHM17wredndiiLT4uu1L1XFo76HQMeLT3bVtYE7qdYVrktCH6VpoDbXyfc",
  "key37": "o8CDqWiP2CZaGRQpdxpgtP1JXR4eq6tU8ASHgvrQzoKbMdB28dDYjEaoKE1pvviLENLZgD2gNchPzZDbACDQHuQ",
  "key38": "4BjBq29GUyZLXerVK7LrN6VGjkZ9TJGjYu6dVemStPPwA8iJYgJy1VghGAkx9VZibvV5cf4hAep1YrC859bogjJm",
  "key39": "7KxzCnJG3mnn98Sv7sZaxWScpPYkwXTGTd8J5skcwevED8RtWmLxHBVt3xEwp37okNXpjq2VxzieY76wouLyqpN",
  "key40": "26PiTs3BZTrtv1YUdkk2PEyenqCrqxJZbHAi2oeg5cUFLz2hLwfEa6HRp1KsSm7Yz9utq37UbG6rLGiot6kttFW2",
  "key41": "5WDbTjX4Gv4uBhrVn9GDUmAZekJaKTCgRQ8v16Dfe5Afzfsyb58mqk82ok56s6cCHu1k4opYoXDmsNHtZtL1Cbuu",
  "key42": "G4oVtFkRj6Co57cKEmsyYJ5a4t7Ts5HYWJCJz7DfZj6akhhQsSR5uZ3JALvYq2bb699MQEizKQEs2jQKiamcUXe"
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
