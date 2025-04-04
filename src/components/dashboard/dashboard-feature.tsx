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
    "3QohnJ6T99XmESBjJK7agMTZSbYcEaXs3j7qzokMe9ZBiFV1uNRGdHd35jRZgWtyYvJ2naHZxxbZRypPSgxGRQsq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wBmfaKjkmU3ioa16CL7jvqpx5KtbxbGVrVvkP4kbpZ9vSQYebS9R4L4wFZCkZEDA7tYAFvGM7FHipg6te6HCuHB",
  "key1": "3eW5Jn96NNo38QVTzKmAifEQiZFEPYaPdFfbHZa3VnYzjKqUMrGkM6Kqdtowx2z1xxETuf4KHLutjweGXE3mgnJU",
  "key2": "5LYSWkDMBegshf2bgFMp8PyTxuhW5UHnHUuU6pToqKXV685HiF9jStCZPxEY3jA4w46Q8RxwFYxs1P5sifznCU81",
  "key3": "2UWqoBVP1Z4ZXS9299QSVQz4CBLjFF4HMKfC8WkgRFzZ3VYrjaDPgndujgAiFd24BSJAGVFjArY16zJ4X5VnuHJn",
  "key4": "3BzuHFEJm1AEffrMAx1SnsSKdfWXZ4NUuSkubF4g5wWpUxM8Uhh2qMh2bzA34qkjKL4rVJX4j1UUng1UqBeXX2Mn",
  "key5": "585PdmHKCGyfcmx9wdPFiR3xQKcFa3wJx1uZceqQQhdkVc7Q9XJdURGeB6YRdGJqsi9RTAiZAhQLfk6WXMzpqHa5",
  "key6": "3hZ56viu2vb6vuwBHDEKX2jtZZMMxQUhFQgp9M63S25WRc5PTaAeietb2EtnToDfbVBXL7tmP5ginzwVp4uQcxRa",
  "key7": "qccnjux2yhCnzEy5XXgstzGgvJFCHrHikQq1PLRSGwHxY6JLdH5wtfqVyw6LN3DfPiuSHp5iqLxYxVzboDz1KyD",
  "key8": "56qM9S9qDQVfQnmBEjptifGPRPyE8QpdcC3ox8BnXw6NqqNyUcf2e263yhz245awVgVZpfCuHoPemMeE2M4NsHLt",
  "key9": "3LfYdGiwQu35SgPed9qDzvauaoDoJefubizbonByJaeCrsVtcusKoki1nJbhnyDyGpRXTx3CPUuWdv2KdnwGwtj4",
  "key10": "4tdBCCskou4caw2GJ3fpNffuE3ayQ1hiF5vU1ATMYTwL6KPCkxHP721rcBhqAY4h25TriVVKdKbE287vPfmr7T8t",
  "key11": "2MRmXStoK3Tj7TDkUEJNxhpdJyAu49qBupmjTZybNi15p781nGEgyTqRSYJEwqAYoggD3DeHKaLhHwo79N5i2CeS",
  "key12": "5Wvkw2eoBUNynWcBat1mfNnojde7zfFRed2QXyvPgGi2QDujX34g6HJBVebn11bkCFLXMVwNCwywXAYQMfbQc8Nc",
  "key13": "3XKUoSzRddJpgxSjAz6urmyPx31o4LQtdhNsdefu7eBE3LsbSyskPKDTfx8da9331tfQ3GBsnXpcHusv9hnpJ54C",
  "key14": "521uMfUWWZhcaFbqSf6H5SP3UeJS5kb7S8uTooRdVYzv3F54WPjXYkogVf1d3zEKUMRUSBHhfYbK7pzTyrMmsMTm",
  "key15": "3C5RcC1M1FiDNewj2xxNTt8As4WPiqMnaRNfuXfmQYD5XYtH9KM3hjqmn3pNmrKFgkFJTWdjX8Fa7h8Ycdq5NJyg",
  "key16": "ZzoeQB9URmSKq6D1dxZR1bfdowKzjTAPZwsYUBBrPfa3KLuJxCz3sUF9FBpRrxFmwLsTTD7YTQ8iLtkPdtVdNiD",
  "key17": "2eekf7VU1pbMSMbucHo7GUf3zq4XXZKKDJegT27xvCgKKzxpSku3jbBuruaRN9Yw4X23Lf5TbtKY5e9pw4xpr51d",
  "key18": "2JbUoGiyu4Xz9yWrNYYE88tC2tGb7EMSu7tTmagkWHfwco9iWK8f4w2FxPntnpHdBB7QwcJJTFdcQyJkGkCCTetp",
  "key19": "4rZNMbyb9BajVNd2XaYg6mncPBkSKTuXfN6pQmdXkRcGfZjJgXcXsj7TXGtWH55zBMdPQVosCtg9eCQ8Yx149xme",
  "key20": "3aNjxWEaFZPZ9G4ZrzsSPAHMZkmbn5ExfctKiUDKynd6P6BXUmibKfMSUxbRA2pe41Csn9q3HX9gREToaqznbZw5",
  "key21": "48SspcpS3mzCxXWjpPjr834WTrmTqA6gPmrvKEMaNfNcaDUQHEyp1kz8kgEtfSdETHWfhKo2k9wzqngkzW7WRfhy",
  "key22": "3McATXFsfBAYsRJVj1XsdUAL44U3ivEZiZv8F3cNEQWyftKwQ258aWDEXKBHRUNhKZCYuejoCV1QTbcroEgeuC9r",
  "key23": "2LSpj1AJUWSPpbvZv1eEXNbbv5BBfSbt175vXcaqshitGvyKPgsoRFFeKztnDX6FG7CdW5HKXZe5M4CihU3vjrUc",
  "key24": "2LrAvyBgBBCj5axhRWHdR9bBgeKWJWe7QHxwmJCLtffHVRP21KJvun4ccikApUJ8smrFT9nLLa4cR5YfyPDFM64o",
  "key25": "5dnoXowUBobrch1z5Qk94RWc7z9gPZGfZApccq8KPLykvTP9xJnx3vJB78jMETW9YGFgTsa39hJAHH3bWLZpKgw4",
  "key26": "6A479YmuRusUXKgrheo41R7v8kvD1GYQpbj1ikPHSr9xWEmWGn2ZBdSAoQ5t2fAG85SYaVRkyMcJ9K6svabfvWy",
  "key27": "2nLgWvVCpBC55hYb6fBGGmuCYju1dfbaoC1xefRA91Yg5e6a1ZRPYp43ep46MWD2Wzfn3nnVgj6Kzzxv4yGMYYkc",
  "key28": "5rpkYNc58u7yvjEaF1DCTBqHbT5aMiCMFtHquWBGvvyUUfREn9wYPn47yg3D1F5Bo3v5d1Rqpgv3hHWwqvdKHVq4",
  "key29": "5R1cCMka2zD2ARCKWqvbSADQXUBihX66uUc8AkgG4XvcaAoJ3rdTAhM1AFfPXX6eANgBo1UnNNGEjUcvRDaCwVNf",
  "key30": "2Uu1GKuhJYwLWAjunvmCLLvMKw5y5AUcSi5nJuQdiF9KKqJsnMS9zvmqa8qHt5c61vQLVgQrHCojfg9svZhtbe3R",
  "key31": "2XTFT45VtqFNNBvxSUf5N7DP455vkWqE6JQmUHEHcZ6G8hcTghvsjdtwDcJTRNFd1V21CHN2xrgq5pJ1YaxbEf8E",
  "key32": "5GvMpbjDnvARUwKk1V3pBApEu4xiHtG8CVdA27WStoaov5zWw57oS3Dzy3GY4SF24zWXaSE9K8SE4PgGF7tPHfdb",
  "key33": "iSqWPA67RBHsCtqmgzVB7f8sHbysDqimpjCb3oLbAmqc2mXYRK55bDPoCUQtFaKLjxPnSYLVzHfW2wCqbXqGnvX",
  "key34": "5eKonZGxidm9XFwWpviUDYLhm3Uftyxsym4tghMKdbT6kt4xmUevdsWtH35Yr68TEMyXi8v5gVCtJQ1NYdQe8Q88",
  "key35": "4GUpCfRv7nudEdu1vANeTpPnm63qNWcH1azEUNGxQWcgh6j1iiCsDZUcLXWaV9zvE8o8FQocKcw59W1XDRBvmc11",
  "key36": "5XBKPGLQbMmQZ1m8jaxNbttJaLmRMNUBqndmhmriiWvT73rQ3ciecuYAuXhwXZ2Bxy7WSFi6L6caAicHxwqsLcuH",
  "key37": "4pSt4Ce5eig5Ayp6XbCqA5FWdeeD5LCMmqxRC1AVTsb8yGjPRZ773jCvCZyzEQjyyxm4atiWzPbAuv2TsZTzTKd2",
  "key38": "52U5KjAVmXTAiEt6cfLFJaMJAFBKSBJD16ZgaRX9t8oPVnLG1X5zLz4kCNQtDSUrBiermCWLrQGKSZLRBmr3fzh2",
  "key39": "5tTzLKZxpfA9ygSPzZ4sV5vQ4mrPu319LWmikrZxLHXfb1eZfhjU4dSyj3v7azzgLJJiCF9DtvHpokrRmY6vsrSG",
  "key40": "5RDZauWnLAmWPmAmWY31mQ7gvKkbNaypdjvvbhGCu9jtN4CgXeEEUUAerZ7JjNkzpJQm4BpFoXQPx41JSEx9MBjn",
  "key41": "44TAMvKkAwgp17UCHN3X13W9yr5WFgn1GKwbrN4SohUbfGDVBVeJj7JSpCFHe9ujPNGx1nrVRehdU48PP2HDrssN",
  "key42": "WrNqtjtGD1Dnxc6AgWFG7ds3ET3jnDXukUp2Jt9pYwKYoAJ54yQ78pQpfQnRLYEuzsyWXG8XU3DCzR34nhoLFsD",
  "key43": "LtJMYV97K4v8eNCRgiH2oLug6GbaxDZfZT1YJrZHHDpEg5rghYiS8Waqicxmk4zMMdpCuF6bSF4ji17kAeXc2J6",
  "key44": "5wowD55w8hiMZDwkHEnVf1THjKJWcHcmbE5XT3PjH8GAgzE1GppNucLcUCS6XW1Djxn2bGYXT9mpZtbaiW8fLind",
  "key45": "42DVCuNWWhtzJeDpuKSW28T2XQdH7KZdkqWKR98ke4M8UeyFFSYmZTBjLSLmF7cnrzavtTAK2NWXtvmq9beHMRMP",
  "key46": "5tXJH359CpRMTNkdVou7geozb1PT7dnEGa68PTL2oYS9HhJ9eDhSyTwqtLLDaT8WUPFzmdNTPaFarzpYe9mqsEpK",
  "key47": "MhgVQhvYLMji9YkMRs1XySpQfuE4vDSzqYRqYD3463aSgn4Pp6x1Z5PA56TDeVwofY4z65g3mVbfGwVC8PKiF7n",
  "key48": "3BTeGg7yrn31EnwfvNCMCkEiqLmiWcXPFYwHyEqG2PvrNWuP9K9jqGqmS1snbr1JimiVXxk9dWYbdBh2XUSTZJff",
  "key49": "2oSJFsizVCLQj7oAahrZVuua89meMUgwzerkcoYvsonjcFcZg3dDHGNTCUGdW1x2PufR13fPbnXtSRavqoJ72phN"
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
