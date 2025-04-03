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
    "RR73TNy6iLnTzWmHe4bHnaaGDdYkoqCPkECGJCdY4aTXFQWfUkWKiu9ZxQGobu1rSVLKYGv3EmwqEQfHNwbEy7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GKCVzynLoYQ2aPVJH4L8RWzuD6BPQqJqexZ12vpw937t1JrDMYZqndm1w1AuKS5kn2MWT1p1UD7xuEc51Enp9Uk",
  "key1": "4T8cbKHv7qkXR8z15eZkgSV7VphYx2foGBUeiriLE6UeSEgjeDGNDPGm1yxRnv8yRUKfbgXZSYjVCRitekChLNpH",
  "key2": "3FJ9hycsycmnDotTQrRC7Pdg7ZEnRXzUXzSdK791aJA88CYRzAz2yLSSrbJ1nxqsJVJYQp5cz8k5wrfokXEe5aa5",
  "key3": "Pe6RFUYro1wBHyASinkKd86ThtqytvGyKj9VYX4tcXnxnyefmspkokFBkD3GL9s874nrFoQfFM3bhuxSFxAHXaQ",
  "key4": "4LnVdg8rMyay4tviuWg8aAizWQoqtTRDQKBESmWajdrewuDLwujtnZfvZTteo4xGisBToq22Esde4GRuhdsfee5M",
  "key5": "3KSiseqnSrbbPbCZo5rNP4kWiRbRF19jncd8wxz6uyCgqT4xSWDAxbXexDQxPw53zJQ97LwthZBsQpXAci7WBWft",
  "key6": "3Uz2YffbAgLXxj3ahyBaY5gZaRe3xHqdhHdmhVpp9NhwtA639YwAkFWeA7F58dfw5u4RKRwGbKBrEFtJDoBNSVdu",
  "key7": "5yK36KXfHEaFhPvBYFy23mEkEaVkS38W28L9k5hY5E1B7g2pp1G3SL1nMsJLGk5QEWG2BuFSb6sPB4wTkjo6cU84",
  "key8": "657PSkVsS2kTpt5TwZhcpEm63pVork5XVumJ1FkRKhHrKqK4g8yPH3aav91SZPHDTF2HZTQFWsjZ66w19JeXGVjv",
  "key9": "5wc6aCzMi1AYcDeAzkGGPWDKVt6Y2ZGE3Q4mVFKgb4C4VQmHa7LGLk8XRsn6v2mHitmJW5Lz8dfwh7AWSwNcZVdS",
  "key10": "H9rkDUGKbkaETLZZuZQavUyUbRP9Y4CGtG1huCARjDaDoRgEKdqsyhTngboSADDyXwYPAD9xCgEExqqSUL4kYXf",
  "key11": "2HQBXvsw5XizbmDb8EbZnuNrdU2kifvRGsvJxVwmavwjP4AS2scBNUB6Gb7Ehm8FR3bMucKAT4Vdd7157XKVHAZ4",
  "key12": "5JfQ9TK4jBuGCbHXbHho8YE48D7z1T1yyXF4VNhVzz6AmKwsQR7QUgqhXNa9RTKLaWNcad8foL7scWnmV5nHmrin",
  "key13": "3QmfmVRLHTEfEFsC65VKpxNGZow5nsq3yzQMVXBejbs4HF39ieGsfP8w9MqmfwxeNKLMuxdHTDwtyGjYsVBqx6QJ",
  "key14": "28s5DpbhVAGvixHXTkMCaXtR7rs1xffhtVq1CT9ViFRUBR8bg9dJPZ26MuaGr7dJrM85X3GxozMVzhYVKSqMxSTr",
  "key15": "3pLrygJ7MvcqUGaFZYPN5w8UTYZxDqbygAG61whHKjjfZ3xyqEbUfm4sieaNSGp5r9QMJabuvZD13To59UbMfb4D",
  "key16": "86qVJoxZxeyPxJwtZrYs3F6sRyacvcN6m6Jwc5NRFC1bsFzWLx9vGuJ739PK8Xt74b782Eer59wbNm2efFfwor2",
  "key17": "3ENsMfcK1qk1PUE35oUaUNEMtayQUG1aDJyXE1UnoJmy14T8shD6kbnvXtJJFmoCUyrbX2McCQKB1NCeV1EVoXSy",
  "key18": "4qTgww9rub8W9k3bWRntQWLeoosRz1DcpnaPbLp3JX5scGsESZGWffTsNTvEr1WH6eRd8d2W5rPPnQ5XdiEB7GkD",
  "key19": "2u1CPHQu6jjqPPzsMyttt3gecS1x81Fb6nAwVe1KiEyr8xP2zfVJuk5P9rxXHTuB3J5fKjdCD3BtLHWSuzypLii3",
  "key20": "ym5pAPTQR9LmjYdeJCoKupR5GbGQSYZVp7XK4ciVJycVfpZq7GMGZTxiNuCJ6vmW5N2AGwUEZEoTayXXctJrrQW",
  "key21": "4ZAai51zoXMV2Lyi5NrKeFppoczYLUQiXkw7W1v81fxJvSqUUqU6BU6cdu6vXNdihrvJvLVsaGNGboyqf9nTj3Nz",
  "key22": "4F8HApAN7fqHy9vHwQHAfY2gnv7wgKUA3dpkqKAdz9Qp9UoQHwB71pFy9WamVg5PodbgP84yq6xg4AmjuzWYTG6w",
  "key23": "z4Vr2W1GePpG4Wfbm3T5FJAV7LhZo5SUTHDG8Fd5cihU2dDhBY42UWT5MVrYmpey9Bf1p2NGZwX5DXGAPiwoq1g",
  "key24": "5EwXYcKbAJsoo7Pk8iKQHkBMuwHAd237SxmAWGy7mHdFDj9udJVsC6tQCfvcWFVpvq24gv6JPGJTxJaNuYsLAuUi",
  "key25": "4rX3hjHbmnBakbvGgBUFh4fHqScFG5cDbp1g6vs39AMKffj4jJ9ySR5zozJ87LxCW8hegDXgUM8BPxrusZ9GodZk",
  "key26": "496HHpoj7XDkPs6RA9dkWvnwhPuFrYXySBCuhVcQkSQJFdp5htbK4dnu2troysdFMpyDaWeNkfREcYXFrjiRTma",
  "key27": "PaNFfYhieBDRYH9FAoRZtrBkgVmKbsRh5nPY2HEzVF7DXXvGFJQcKZSJgXWes9oDtiKPKjNp7MrwZnQmGWq3D1d",
  "key28": "3LubY8mTkz8QPoN6TcFq9J9aXFCLH3T48mE9vt98K14uzmnqTME5TiM9sWqsYoRQ5AnnHJiJt28vU4DyVSsGMsZK",
  "key29": "3xnB1AQcdTQcLSdcgXZoVgiB7AREBqaXqsMLGSkGbqYxWHBbYV8Q9knVM1i2iiS4yJvjyEG1YLiqKxWykExTREiD",
  "key30": "QjSCx6xAKzJEE87N9ECVa637U3ef54dXPCtXY92Ca2zdYwsT3zoZhuf6pA3HM88kFRF1jM5GvT98yi6VHx3qXGu",
  "key31": "3FJkeiZ99qZZZvF1X4KtCi4kKHoz3uWEVoWDReZpmry2fqCut69du6csYT1KEeJYAYbTMvNcMBVGKvUEyeb2YCFo",
  "key32": "5MZUCp1j2UeUn4zTUuzzppvVqsoFjs48owUXykE5xSn8bHLmrwjSghXQu6DePqK7nDA1L974cLQecWRY3xp5t3Vv",
  "key33": "2JLhSeeTu87NHBtCvEQWn7XqDRVf14pPfnPzuq7eCTXkyvdQnC7QPJmqLhyXKDjambnHdBzBXbC8Y3uGaBV2Wryg",
  "key34": "U7z76uRZnWwGAdzjKVDjeCifrc8Ad6J8ipuceXzvYtE6EE91irQNyB4xcjAQtdHUqBCQtvMe71PRFivmudi5cjn",
  "key35": "5XMvYgN6poZ5G2Gpiogcr92KEAh5P7G5Yef9djtNmZ93emk85cFQ9qTYTPAHWbgcoZCDJU8x8ERQfB39NhcB3AGe"
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
