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
    "55otJVLsRWXKYP8WHhzc1BE74WnqsMHkHAtTuPkQ9hoGJhYzBqU2xLhTB4cXmoRXCpcXX8v86Ds5aMttekWvboco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QcMRftv93Szf5s2wgEtdHNcw5LqmJpoTVin9NvGJvLYWsZPHEQZMHi3AVpKURESNWHwBVd3fkKxE35Q8CAYjdLj",
  "key1": "2TzjmoZutzUV9oYR5uWHZ5UpyWzuUqK22CPeDCZtx1BQ1EwhCgggA7cj9LVqXvMfuJBhBxesUwpgaWsTigXsW7Sv",
  "key2": "YB1m94pDZmL3HUTEmmBoM93Mg18qXBMyP2anu1ARGghCrF215cpg5KJsr4GSuNT5WrbzAsGUtXerz54Vz4a17Kx",
  "key3": "5f1KMv7uZgGm6hqpsmsexVLeFnViTdePuVtH5rYBjzXTGTahz9WzJ6rWbpXGQMpYARmp1onJmsh89JaX9qCAYMNH",
  "key4": "55ac35ht8C6mfMvpqYSqCnwbjnjw3hswZKU56uMQjzq5P4ZtqGm7XUVE8AD2VJ2TzL6Ec2SWKbKWJ9tG93d9N99Z",
  "key5": "65q3nEAw7Bh534HipoXXTdpbu6F38uC79QTgdVYQYupWgkytxb3Y5z224vYhtdFCR43eo9YZJHB2prwnbBT97ZKa",
  "key6": "PZuf7AU3dj42CthT3aZnwti7pssUkYuABqF3JXEKhCMrJ3bZRhDyu2fEMZkRFoXHFNpuJovBdeEsShEdYjnM7xJ",
  "key7": "fLa3Hp44LYVMsVFd64gwgYePbdkfEn4gNzT77BvH1qk9pXzb3Y4aNfsqschM1zM2Koiyu566rFjU8An9VAUHAyF",
  "key8": "2PsAzRprZw7KhPRoxx88DjQquUgn4pCs7qLGmVEewii9eAfA8zbxWaQaG2y7E8tPUXifCiz568N9GsRpkFj6jQKU",
  "key9": "5FL6T2xR3GwjKNCCaqbXycf9Kpt7NJKPf55GebZFHQ4N78st2ivMqcAxKKSSHsWGd7c4d64aBQ33v9WWsc8DwguY",
  "key10": "4dDf48tHyThNGWnsGLhDEged2UgLKu3qVQvnB9xsjTqGcKhVwdFva4YYe38s5EuwTcureiSsERU5xMVxEpJB5hC7",
  "key11": "4g7Cr2Fwd5Kaw17LzkWEsNesyu3VfM6VdJbQfdYr97wT9JiuaUWDe6RYLJFBmZ7t9pHZqkVCNG7AuTW3kQ4FzdCk",
  "key12": "dYLMmBjYnD1SD6BXrALnmsomtc9iMxR2YUzatSEfn3AYMmygcfGPFLkEFh9ERXwr6AruJU3BRJWv4PU6rNVqLC4",
  "key13": "pc3eYHp2gf3mRxmeharCjuNpk2UT2tzzDKm4mCknkKdo8EZQRNfYqoNdG2YnJmpvhbbxdY9pQQ6YZFHnYW6fjU6",
  "key14": "KvKjscKB4ZZ9PTQEivjbLon48cXJNhvufbst8YVDdZEUdvtWNPLXzoF7ajLTKCFxAQ2ioSJJfa5WJv99rYj9BDu",
  "key15": "3Z6PVfCnhdwU5c7yQW5nSnMJYYsaY1oYPXKwuVjvw4e6MY2Qb5LfYs73WQaSfYW5McMkpDmevjMFTXQLXxYsVZxC",
  "key16": "22seqyAobYFkZGSJ7L489y29JnucQ54oqwEF8pCS8Ww2QJJcunbnprknET5DzWonpu1u2WbT6yt24dUb3agLaiTZ",
  "key17": "wnuSrASg7JiyFywjfqk3PSmMLahzAb4QxRZwT2CcLEhH8pS49bdwMtWaMtWKHNoKdzMEyLbLXU1GyQKaaHvcw3p",
  "key18": "2M2nsQTJSsyMUH2EBGgacQFmhXmUjLG2sNWoHamdurZ3XUZ5TSbd2M6BqfS9Kz4EcsYccKDVjsUQHBhAwjSzs6iX",
  "key19": "XkDUxh7AMiDUmruCgJsHmFo5vPqUmrNCb4qgpQT6P9F2jscqe8FrdMCGmPjmGhMy3YWVixU8UmuprVDXV8SRZmZ",
  "key20": "tjWi2Bg7v7hRUbKVJnVt5jv2fVX5YsY9JNsMj5CJFSby2ALVbE38iNfvV8JMY33G8Y3AmWB8JhGoy6gkFuVa22j",
  "key21": "4HEvNuYP6zjZTGz3Hzb4TAY5P2kEnWxHCwcSRVd76XS2zD1irUg1kHwjsxJytPxX1FtFXiHdzSxicpw5T3JcKDES",
  "key22": "38VHxnQW3proFK5UTB6zBwhUWTDs2SskUaxqmPfgpPam6SmYmB1rpmBRLx1u6B4dLa6iMT5ToV2X98EzpjyG8L43",
  "key23": "3XrzHbmSzqzmtwdMJ3tZK1Jvd8CVkVJFUKBL9E2FWYdozR21S1Jh3aJP7wLzSkCtwQAeES8wApYwdzbcep5H32Xd",
  "key24": "491tTVaqSHC9uvi7zb92hC1xBMjJ47KPAd5v4kTosrHKYi3rgBCZHKm8W98gz7H9paCuAXYkAodSvcPW9Kmc7JPj",
  "key25": "2zwy9gMzBHWg3VuoSh4SagWGR97bQJYcaE81LgbQXrY2u2eWUEagZ3RGQ9mfxdiVcso9aMNFzG1rUmvXrBf7LSeU",
  "key26": "NTnNteqjREM7q3z33rcY9uxo4fdC2Q2zdDoBw3QePJRAM6JQrZen6VZNFZBaJnYJTuRL1SmocS8HHWV82995DRr",
  "key27": "2JCMa8wJHA9FPW3YEjYKGNf1bYRJuBMo3xKdb8WpjramjpQj3WQ6JXiH2qA6N6hwbHANwVPwV2WgFKv1dUd3besq",
  "key28": "29m3W8pYCuwvnvTxNRxfmwx3nbEX9tgXJ3rheToTGittev5hvevAhuiLcmTiH9w7qk21tpwYu4LkS8mySZeX9B29",
  "key29": "4itXPUi7c9ZfV2pbJw1uc3xQD8xWzKaicPvgRPTfTbLLkoJG5NQfXXi6dQzjteBs3CABn9LnSknJY5Lighx9Zpqg",
  "key30": "3ieUus3uSoKQBe8KSzJXYVKTd8T1wGaFt3BQrVNXW8TMZsNA7AwrhyEq7rB3HhQcBe5kYie3mv5qBoLaEUUjY2tL",
  "key31": "5BNy4y1sUczoUVzKnV7Gwz1DFH6BvUdPdywJiSN32xQFJSG553HqqCvkAJxT4QQEmrmgXDrQhu3MxZG6k1JNvWw6",
  "key32": "5g99AwEc1SojQ2qWs67Fca6NiNCDZds5e5sBEif1m2UqNpPnSAXiJRQVdbmdfY4BVv8duRJYmfXj4W25qB5g3P3x",
  "key33": "5oTmVRyqkdupQWdzi1cU3DgmhDE28EZDQt2eNLzs3NU4rusWbWvVNx8MfjsWCQLhqUk5mANcZdXK5awJyNcQa1Ke",
  "key34": "3Ct8pfRiztLNq8p323YLYBz2EDcAevjD3ettJXFMCtNnbG1qBWE8tXxzia9x8yrVcAewXPqPSGosLyCkA5ip8oTF",
  "key35": "2UKfXFDwkzgzusoFTJLZXRCrLWrFT8hk5fYrA6TKk2oEDbg3Pvxy4ZJHpYJqFtWJN36kqCkv4tgyHGrrwmS59XNn",
  "key36": "4QiUXJQ2jpzdvZc8anQhD7tzcdjWLioeSCSiE2D3Jm8uWHAPzLGvnYSqwqT8ZwLyVoiywkFmav1bBKFdCz64xFbC",
  "key37": "2yZYHdCXpphppuTyrjyJBZTMCKN2o1p74X1i4Zmmj5oA2n8c66KYYhdBESK5ypPYuiRqk3ZgBV25vJCUyVYx28B3",
  "key38": "4VmZas43vpsxgptU5xxiseDPkk2WVfpYULobPUnearUcDCYBfH3HihALKpDqtXUeG9YeZ9WQf9jCuqcH5sVypN68",
  "key39": "3TzU7oADtVzRNoQAaX4roLRo5L5L8P6BNpDG59VuHJjXvz3Vgmh1m6NCiPXVaz9739nLGXQPGfXgJ2mfgQrVmbXQ",
  "key40": "45ZwqEtZyao7Kc698mvkaHo1ad7BnuxSew4PZixkTXYMN1uz93aqFfMZJwakhh9Ni1qVKc5VeBPYqNnAgRbg8kfK",
  "key41": "62q1ZFGpj1HZwFpiEa4UWSyqA9Q35ZcsFQP2mNLjg4cmcfoFPamZF5WrcCeLQeBpWALnrw8mM2KmLAcCA74BktX4",
  "key42": "5X1XpbLpFRGqrHMmmDvQnwPLYuh7tnkBcYBAxz6iSRrnYt8ADNFvXCH8seEijSmj4ELtZSpJMTJPPNN9TSUP19Y7",
  "key43": "kKbKKyurDZuCrdJEt44GajZnHYDCamwBZQ71Aj9DrpsBDn3G61GoyS1Xt78ngsnfyBcBwbNZiMLP14CZy25uE14"
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
