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
    "2iSpcJapEYL36yybYAjCgHRs59u9MXoJAxTeoHhU2KdPKzvZkBr4SoJZFkuxWiAzN5Gym1ZMmEv7s1KATjB8mWm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MdyqFiWUq5j1W5xxNXcG432iEAYs4fgrS3HKH877nvMFP35AaHMwfchZvDz7zt4spjDz49Gd9DmrTh3XfooCVCm",
  "key1": "2EpLsKM9maYrY9RrKNiHLVoMUbSZLLUJMDbzGyrUQ384zAav3cCPETqu16XLQFNEDZHj3YfwSuSpd6hpHmfgd8eJ",
  "key2": "3Ww1BQy3uRYf2wpsfHwxy6ytYbDLTmoUh4uonGe7ujgLb1xJhhUrzpEHr464YTuCzarZEiuiRGtdYsmnBTvp1fvK",
  "key3": "53nm2cuLHJzXhUGCMC5hDKWUJq4tuyWHxUYkDCyd6XDyEo3cMHodkiEaNjQpQxXnaf3bRxsALLDUJSaJNb6kMwku",
  "key4": "5rWbYm53cZMyPtK6bPmcLm34HBpqsh8UcXDP7WnW7hd2458rii4XP9twSiw9z8A2YGuqi36QMCcJXxb3ho32cZJ8",
  "key5": "5NGh4J8kEj9JTfsym2nvdAFF5fGQic6L6PJT16iRCTV1VKMzU4PwQtgQEsrzPvYSzFKvENMnfEuA6DQd3VBNU9Hq",
  "key6": "3a9mNwwgpf8Tr5KDNWfpJGHuJy4FgJPqtWWzVXegcu3GJsdXEVTGpsFWjtSav579h67FofEQev93AvK5W1mjRn1D",
  "key7": "3YnaqJDLf56oZNTwqaaKtxdReJKD4YZst2Sc8XFqfkqifgaxQdkGXVsiT438MVLr5kzir2DvMD2byBoCDSPaiXXg",
  "key8": "4js9NsfQPCrB5nrxaqmqQam9HQ7ehd4Nsa8TwoHMKpnMkq71XEYeBdSEbJ2zCpdfNuWif8uHgTBWkXu39yabgRGm",
  "key9": "3Mqo5RnQ17Abum6tk9SKpveAa5ub3xE7YuqewPThGEFjcW3HJPXPtTDCBDHqYRf5ndDL3BSnA8rBg6ZnggPKxT26",
  "key10": "4eHkz2yTXwrGSGWKb5H3nBQ5fh3dx2o2kz5A2vz3XP3hg3KFzcPUVRXeGJ1X9H2KG1RXgA2aTGZdCQrZh85Yrj5Q",
  "key11": "4hCTFpEJowYrXErSiRwZLFnAGeiwvBpy8SonYe9Cj2m3EohNAVdL8TcA5gHs44wRURCYaGZ9EVGu9psFC5nh4tW9",
  "key12": "3zxEiyK5qMCmQ4frY8EDW2XUXe6ryNJxC5iRfbvMevnDjZryczfsCi8Jxu4JALXMeJMF6NvE6aoGaJgdneAf6AGr",
  "key13": "2ggFPEt2HzrGXbwws4Ju3DAxNjme7pAVaiwyDawVEgQ66ydZqMq76NqFA7PTWC6mrTmZgLFT38dBYeCwBFTHDuFB",
  "key14": "Rt6XqFS14hpHuwRtJD4BEwBXKugCEiNXHhgKZ2GACvX3ak9y2fxfrj7uJFthj5iQL17ZwHJWAxd4QhczyR6Zz4L",
  "key15": "4hpNKHLFm5zWxv6y4qu6hSQeoEEBthrbJWm3S9i9rXXFrjZzEx3JXkjS4s9LCMzWxvq4ZVHPsF7JPuNCRgMfoNWx",
  "key16": "3fjh8pcX9eAH5pwVyv3xDbzi8up3HApfJuyjTSFKfFTgMrt3ES7KTBwx9FXhhxCDGKgmwhi9zhg3xufVcS6WAXiB",
  "key17": "5oTEYjPwAco8dtTwSVJ1dytbNC6fV9AefpyJcSfuRTHs7UkQiPqzw7dHc2h45mur71MLWSGcrm6scdX1hNbz2HF4",
  "key18": "4KBcJn5KgfJWBKMDjBPHapF19uSjTMZaYm1e8hk2K146PC63Pgow9YQ5ACBdZGqaBSUEWjKCW17ZJBDdWfVujJwK",
  "key19": "2VzqDSVVDNiGSTcZUdUjS5BFwr3GbpFUtB5Fv4XsnH4rXMMBGa1idmu58r7153jFtoigaLod77F1sHmqLcToY3Li",
  "key20": "1TFM23iphgsn6NPRGFeQv5TGxa2mCEK4a6nbLgfgWAm9jvTLRy5TsqLNU6wvYPvteHhasyobfoQ9KjsF1i52YBP",
  "key21": "5aQef31coDtLsGLK2pE3h4HifADpZ8gaww63Ndgnn9oX3v6YSSdXhVaZN9MQYZWvbGBNCebqTaDZVaH434uYsjY6",
  "key22": "2e3WyvCRGrJAW2fTzBqpgPKQWCv7BpVHAxCQFZkciBjKs3aWdAD5FPrQrZvGYuiNhwmCC5TVzLuzsGYGbtumXo7J",
  "key23": "25BFQkPbQUZSnGdpfetf1ZZ1E1roEcGpxLHXRPP6k45j19XRGaofYhW5cDMDM5qVBKAwFTS8qhQLPxSNoRnsEbsh",
  "key24": "bYG7qEbWmn9AyyEvQs1ktcCMzR19eHrKov8nRyK2yNZ1PU9tfAy44n38bioknktFR4QymUFBQnMQhPtWrmNiT8h",
  "key25": "7bXzH7pkAkGnNwYKDifozwhRh16TgqDxcnn8sAJT8qs4Bx8umDmNi3yqxJ38MNNYFFC499w7vdqzrXC4vZ5Xp5u",
  "key26": "5zogzdoE6HvxrCZrvN1121D5WrFrc48JWrBPnUQEYrrj5sKxKx3ytsxFH837jEc3Y8cW49bkk5vbQ1ojFdWzRfv9",
  "key27": "3g1zNNKkDybhwbQkcJseM1DeZsakqJBd72Fi8DtHm2MwnRQZ4w4kekaC185dRGbsUTzfcCsMhATapZhZNe3H44eK",
  "key28": "4ZCXnWsUVDpSFu9sJNVwJpub2CGmME6oGPpuqycyctK1ocimNw7u5R5nYBJ3Pm3q6qssxuyQetGUf996YM29pWMv",
  "key29": "2ATk1p88Qwq6gujjuzicbfyDHzYR3Tdm9hGEviQATPwdyQkc9xwSnXHEvZqfn6wBhmVknQhvhLefbzAMkZVmAWS6",
  "key30": "2XNikHdgqZ6yosYiG269nopyHQHfqksarHTac94b6TnxVi9iSZPkEcZfNyuFPKpHKuSogofooMhd43XX8LTZf7J4",
  "key31": "XeBWDv2GAkxbFY4EQtQhRSRrNnKHb4dnes7u32pfEAa2F5HdQLdUvrmxvf1tpL19UG3YyyGWFr42bauAAqp8xoF",
  "key32": "3etESrRfnsdmALq2hGjj3H5uZph2vM6t35yi9fVyWSa2Spd42mZi6SsjRgnmFA19Vzs7BFeFpDVYqzaASse1M8GM",
  "key33": "2GYDCjU53QaT7fYqU15eMbAKAKwS1fffpv1nszUTFSE2y5kCJpCfynAu76wrdRGXF97RApBKcGcNMNzL64beqiqi",
  "key34": "q7QuAVN5nX72Nq9Q9hB38UJQ6BhEvFc4X1uybRnCbTBBQwg3Dus7vXwQ2zLpTKdpKThPmWJaNh4XXSsVJ7Fur2m",
  "key35": "2dg2qcYuHF17uk9hMbdeFLweSTtAKNKq6pL6S7CsPPjJbaE1M6g1hdHz2CD7gxpJ11hkpJjFYhsoPjrZcfQmsrZ8",
  "key36": "2Uu6N53eFujmf4F8tqHkBpHLN4vEhjXed8nUsD5WK8gmu1DjHTJKK5FbZ7AJCGUcRU4sMN6DjF4FrxN9jrq8kmQV",
  "key37": "4AKBSGEEUgwa2UxG4DkQhouGHqPduiv3oLDgnK2goB4McJFNnro3sV2zdY9x2y6FJZZ9591g4s4KZiL5c435KApN",
  "key38": "5VYugLTLHzAnqfxt5Q4sCaPZgxYMyRae5TDSg5GqiZKSVPaCuwdFszs6bRBK4qVC529X9MUM3JpaDxhKXBp7CmE7",
  "key39": "3zZifogxj9gqfBirSHUij3ok3Ve5TMABd2SJYYEPHkd5kJ5zjtey4ZMctU3sadc7m4Krx86mQJEqNiCNPWYBAxoV",
  "key40": "4wfHtcpNXgF2WcG9nego5CwAkTSaZe7DixW6cFna2ovEfzzPQURNtSqpaU8NhSjxbf2HzmsbP2XnfFAT6QxC72W8",
  "key41": "4A7NoCU25Dqqe45qVzCXFeuVRCYqLQJm2rizTL6f6dmrSYhsyqQDKoCHMdU7Hcd3iTvpprD9DUrR3etoARPqEBoR",
  "key42": "nayR75poVWkFo5wpiZ4NpJyiZQGmD139UGrvM47qt2sEww6r66xtp8eCQA46wh6GFnnkwThXtjHbgGSTr7ar7BK",
  "key43": "kCq1fb9qYrJ2ibihkuM1BSXqqjwTkJf9fMV282xnUxFWvsQVKVqMRgQ8ttZJMp6h6CtkpndGPpWSugDNkGGuuBS",
  "key44": "2k5dWBbMoi8rRtUKDcnGJfuCGnpzJzro7NFqvsRwguiewe65ycYgfQNcGrtY8ddPpKvZ57TfA3KJMfbsfXNH6Bg1"
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
