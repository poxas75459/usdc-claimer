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
    "51CrogNx13NQRiTY6SjfH6PBqVMGeSw6UW1tKHidmGFFRRm7vCdir4whTR8b2UPGzprTafoPST5sM5zircTjC9Lq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31uWCCS7dAVA9XrbTjPSz5H7SaHLZeLohvYCGs9b2KD93ss63NJvjiq3HhB6xydw9DkvnYsTsUhhocYKmmGGDXUA",
  "key1": "2RgEhMDG2vXLRgQVW95ynrY8iKB7T3KhEJwYb7uQPta4uS8En1qRBn4xGpDN8TckZgUUJZ3M4MpYdje4TLH3jWpN",
  "key2": "43sYoBtG9xrT3gcDQF5FJdpxp78296x9Zeih9VFo8YGybfCkx6My9RanPV1rmWYB2vX2DGCWhv2mMRKTkH9dbmrt",
  "key3": "5niJp9s9SR11GCjr3AdwADHdXDbxj9UWRREvhczhxvx2C2SzV7rBvC3B25dUcKSDiDsBextfVXhA8RdjZj9Ge6iA",
  "key4": "2QjwPBoHKKqWajw4NXhMv52caLiWJJHApmFz7UokMM9X8qY6eCbSTLDuYKvZG3AEvQjJvQSERQvvoSEkbYMqiFHY",
  "key5": "34b42wB7Ecra8ouSaqpkmGHC6aK6pFKVAyecM54NKPCumCxrP75MHkuv8K3z9Wck6TheBZ96hndjoVpc4XwsgAEM",
  "key6": "xHR9gaomu4CYeKN2eS6M5gx9AbTFncgoQtzGgwkmPo2JLE7NHxq6zvDUnNwTG88kTmtevufLhJQinoHht4cXMV3",
  "key7": "3E3554LTXtXNNM8wcBe1gvRwm8k5uP7Xnas5tqXC5vMq2gkSGxV13VjX2ygWkMfd5WhcP5twfpi7CGWLNMBdTEQJ",
  "key8": "uXgVXgEjmeKDuywg2wE9bdbY18HnoTyaaVV3gbBNkTjTJXTs8Y9QVL8mKkSjnYCQ1ggPvQjZWsuE93xR3mmpVvF",
  "key9": "4EVsBw25iwUcKxKKkYwFGExkUd989Fw8X4K8gFQR16TMKE2aBkAFtaKy619gECyRhZSN4qSJrDqcrShZ4DN2pqmq",
  "key10": "4tKdscYEKc1R6SZ2yQRteeGYGyJiCVBwfFftBphuxgZPFdbR9HYE2nqP15BMNAz5BivJjtY1Fmf8jMvMrARKGCuz",
  "key11": "3YpmfAL4Ya2Bg176QgkGp47m1CT21RdrQQSmhy8ASu1pNawBCFSas7kY1QvxinPLnrTimicCSnEfAf7hhPXCccuQ",
  "key12": "61amoviwpyi7pXW1vvSQeKok8W9pQctMC2Ptq1Y5r27CUaiKrRjy9PrYtqErYZBQ4U6CA5bExsK94mG64Yy59vqB",
  "key13": "dv2kPC61zZ2kUbVM4mjMYk3b4dk8TpDYHmziooTYNsqoPDHGS9XkU8gRCc9dnbUQiGun3D8oHEkUMGnNdgCTgoc",
  "key14": "61KXRZZVChvkFE8kaXCbxgcKsAs1Eg4RNqDmmdeERdznmqwoeVn7yhcV5NefZeXGvcaqCA1fcE4SsGRPxizLcJHb",
  "key15": "3ggGqRdVzscKFLX8FYDG3duJReF28mHkHhMqreuw6uZmzvs9FTKBZimaWk9V7Vk2B9rLEDdZwhQaq1YLJfBYcqX7",
  "key16": "pYTggdBRoRjDXKDxc7v2KGg74LgwAATUBckNPpbFPQdfzbaozw7AcURunhXRu851PJMpJrACyEpihgBHkYt9Pne",
  "key17": "3NDb9Ju46aJTecbakgcD36x1gFyYc51ZtXNfYa72D39uj9QqYm58jh64TfA38Z5Wnmv2X3Tyc1DyVuZLQcJJTj55",
  "key18": "3QMP3YdZrC9Hx5Y6fXz2zBhvJfLVdfPAeVge3seddj3tyHzioyjKPr75xbKpgpp1jyiY11vWKpFUh2itsGaDx7q6",
  "key19": "5eYZwQ4vSBbs9qE5TympVzLH6k2YKVVdfh6XnaBxSoBrHAsqyZfTEppD4WNfhbtKCj2dw1KXua9vhMzuPnvdxwFH",
  "key20": "43dSnsS9NMDW7unHS9eeHjP4Up7Fu1tHCJEoSLwMDezxHMc6hssosyW8nrFmq2GNnV2VjuNrG43rUoHfkoFZRM3j",
  "key21": "adQdnD3XqgS1Nxv5t1BSMYhjhriohxYqJoRV7WsS12w3x9cg8oZRTXd34v8qqP8M4f19ap8VzrusQD6K85R6fdo",
  "key22": "3njB4APoRXvHsj5bEnzwQ3CjGxTT5HytvEnS31cYY12QdmbNVksb8CRbJhWpQUKgZmSZWXhdmpjQRGpLapLBREo8",
  "key23": "2QN6wrdFjAPimT7Q66G4TfvjKPUhyAHSNHcCuJ16Ts5szgvCawSoFqneebeXeRJPsd889iaeofxtt95JkaxWkS47",
  "key24": "wDRQE2GVTaeRrwjL3kYcDA9VxEKNssoxyCZ9yrxJYdRXMf5m4SyCB7WHJLu9fydR1ZknLxHZGECfPnhjSSqLdEL",
  "key25": "4gJA7Py81seGi3pPdsAVpouMhpE3RYNmJfEEGBkEQ5zENmyefVvUjVhbE4QNLDWepkefebCYQ7HJPzwQFjqaMG7G",
  "key26": "Zuue4dgxmYUuP8WvBxFeGDdsGYUgKpjFV2E2U7oY169ZHG18BjdefrWv1v9LCrLbv4WteP3E7QhLHTxVnWfDYLs",
  "key27": "2kx56WVYLJxRpmSmPW6ZdLPRteCmqK7epbuSGLzofXm4GbWf83pBRVGQHwXUe3xpzYRErY9Udh53ySdbQ5mn9iC8",
  "key28": "2Bj7q7c83hrGDGb3KKut7DZt8c7F4vpfRoadZ5uDnpLAcmwn5raZAjzcfo1YAC46hgRci2L3FPma9Trojecgn9U8",
  "key29": "65SUan36yviRM9pZfDYH6RXmGJU2EK76ZsECZyhmAoVsbK3hNWJjuRAzc6dHtYfBjHZJRtrkte8x5b9xwMYe8A91",
  "key30": "5s9kfAPsHSJU1feXjj4ssDgaRL11fGFQQFdUvcejxtxnLU33M3GisQNqASJZ6JewpEgodEaoFbgtbMQr1sutzjmL",
  "key31": "2cnKujPGFy4xux1XiMtsLYcWrhoAowbdUji3yGqUVw3Jt9CSHn182Wy6GoCJTMyJAXwjWr2hwGGMRavikr3pQfg1",
  "key32": "27qYo7mtK3JK2zRNj6YWHKmYefNDQXrU17aPio4mTE1DUQ6ssTrWYzbhZWYwyEAP6dW2a9gzHALmL4h1S1GLp2u3",
  "key33": "aFXPRdBUDSC2g4wKo4grYMJ4AumyWLoaoYBMtjAKBeu66JNEXGQ7HjafADSzhNJceztkkD1J193EzYp8DjX6xBe",
  "key34": "78tphu1VNChcwqAr5yu1sTsq3vCeTSM9jhi1ppJgAVnftQWdbT9AM5h57tZqAjM6p1gRWcMXD8SJSGrXYnhPkv3",
  "key35": "5jWRqbAK3MABUEUy1U7Ptxi3Bv5GinkmTGozpBG36iTTn542CUADv71ECtGGhb1tXDPt3DntwMD71nt6r5KfYHnc",
  "key36": "2xVpUZidFPMWAixWJWEeWm2pHzawkPucAhLpnfNuHCKvnYsF4daQJfzJ11xco1R8TdXbYCwRVPWgnets2u8mteyN",
  "key37": "t9cPN5k1KZLVEdWSjNVyhpgADhnqc7Z73f6EN8bDFGsBsxfookotGV2NvQ7RJa9G9VVwycRvZX8YTKe3SDL2oJ8",
  "key38": "64WKkZs8LfphTDc9o6HpQz4oVzbz4TDSH1inYfDyBEQWq4onttW727n4aamoHu3zLXoetCpB6BBiN4HrF15UwFrx"
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
