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
    "3mFuwrQdz73MTEnhgXdNmriFE4hAXcRVJGL4nCEj3t7WEzQM6D8memV7icohY5tBBipddF2kPCHS75rT19zM1Cne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fGNqKxBfBuPPcUjSifDcwLR7LYKGykpunzKXvBPNva2KHjGfrceu7wHsPwYGo1FtMeMybdd2x42KvBjtXtVaRrs",
  "key1": "3YqnJioQgCFgTezMC5RQnBRN27AFHCiYhmPJUgzVWD9Ece7ve9yKHqnKWmCHc3CCzhu4z5cYjyxRFzVcFHEGAmGH",
  "key2": "3JSwGig9P1siycRp7ova6DbAggW83eJXXmhYyEUa5A7BrcBnuJTYwF86kB1mj1uJfKvdAYNdVBb1hsQeTBWRtKME",
  "key3": "5MDz1s9xzPNjpbhJzBgNNYeqTaUe54ZqTYu7NFfFeyzAy7JF4etrnhKLvfvxxi5W9FnhcR21rGMsFogAh9fc2hU3",
  "key4": "4jvqrhWLE7piGsxTfSHZSRdbWYDQffbhHYggdsLtgwwy46RCMoe2eQNwCrhbZMX2oGi1KLVD2uTBnjg4uVVHUnoC",
  "key5": "fm5WGFtZ4uxxYU3ywx7PrvpPeyRaik7Kh1Cwm9vJ2TrxDT3gsG9C66ihKmXGVjGZVm1BabpPgCjhpohmhhWyKko",
  "key6": "2CbLhUEuAR1sbvUgzwkSTifBnAQxampUFE7TKf9kctdcSiCXRQA9PL1SP9AWtp7coefuvtDTLHpreuLMsHY8Rmsg",
  "key7": "5XjAedQhfntXrePoWyj9RKPMCpTidd8M6rqtXqMJ9swkibBaxqfEUq5rkmf9t4C9VXpUhGbWabuvjcH8A4EJLvA6",
  "key8": "3MnfpNj7ewAtAAW83ZjyzCtJ47uwWEJ4au4Z2396feHq3C35Br8vBVVQbipnHWzv537kJ86p2niQRkQARjTkRJe2",
  "key9": "5vxmRt8ETTxz5WPq35kEaQZbgHSZo2HLYexz7nckBnZkpB8oqd4i3tHC14joAPurSW8tRFYUyotjqcjg1eyzLSfJ",
  "key10": "275yLuazSvSqbx5FrUd8PJ2kPkpQ4w2o7m4WnrBcZVDTKkB5srEvGXYvdevgQTdcyZrPRFDqiby7Ad1KnyXq89C7",
  "key11": "3d7JuH8uB6w8pBwR4h22h6L4xpveTRXeN9D47rmFgocMMhnEmSN4LzdmasXBuMz1cUZYkCvDVfULR22De6tDTCqa",
  "key12": "2pxALxAvPHTLdijHP4dyN5qrt1xUypvYsddNmT3dwaEGuzUfi1Lz7D8LUZP4yDrAKwjEMkXpBBVbnSA8nbmaAq6u",
  "key13": "FHUCyeBeHH3CJCX7E3jvYykEq9fQoz7PR6WDyrDQng3ok2YRm27pcxHfursaSqGnxyAVCNpwyKp7Sr9518LVm1c",
  "key14": "5WPzKwKWsb4s5k5h7Q6aaqL4GRqQ7inpMbU15hDTL5biVx8ji5iYmkPRQTGpXmjy3s3PeY3y26oho2CTcR9qKdMU",
  "key15": "44qayYMv9HrBxsKJT88T1npxAbyJcKuFEr9fjUnUpwLddzZNqTxcHQvHpMxRLfu1YbRBNLybvbeUTKgPtsfMRJ1J",
  "key16": "24YcjxscgB6XJeEtQSRKfTd9VKLydGJRHzLmKwPspAcwL4QSD5jnNTjhFtS7ZrJC3v9TwKJoZaqiktVcc1DNLSbs",
  "key17": "38uuXk32fpnAma1jdiiMGVFmVFGb3FLccoupyF7ufcr94H9XBHc5XHVkjeHHDo6B5SwjXLRajJa7t38hz3sAVn52",
  "key18": "26HFXPwkJ9TrvRVuyAV5AkMvHSJSij2CdEhWhZQA64ukF2pThswUiw5HvqszUQNSQVR5hAxydekWijwyaULju2yq",
  "key19": "3WRdnk8SBXzjMRsRTveR6NXXuenrN5v7Sa9z1RGiaMEchsMfHTq42JE7gkWaS2eiSvxjTLCvkjXEUg2thCHaA8A9",
  "key20": "SZipddT3veNaYfFE2HUZJDg89zFcqzxr5f5CxQtCbT1mK6wCYbxSYuNKqdQhAS2rjxwyNT79RLjgrPnSEUB2Vfe",
  "key21": "2wQienv1E8FE3oWkmB9wBQoXi46iiG1ZQ3vpZqciNe1rV9TwzGhmT77ancaSihJ8coYAEvw7Whg2D8QzW5BMcve4",
  "key22": "2Z4Ez3D5DVcFrXQhF4ECcbn6EwQbkZ39riED4bLt5LZQGM5nL1wX5SqFCGvDoFdJuQqzaRimmJAJGAqpvyhdDHYT",
  "key23": "4L8j7EqapYmrNn12eQTaAZRVR7E9Jhryt9SVv6P5UbVpEVLgcJRczgvTLgR5aMU6BMDd4KsvMqoweqHKezu5JaZy",
  "key24": "2Co8oUqpQNZ7rSbNqt3b8AWmEduEfwhhiFa7gkjnkig6U4JwuKDDdoEA2FLL39ARxezsb7GYQAwPSVnwfnHndhqU",
  "key25": "6dGHG5hSkp8xrUVYRB9mVBH7bPj83ayrtCET4bTHjnG4X6vJe7pC8eKWjQzHPuMbqaNzvaVPRAUedSiqHxkxBC4",
  "key26": "twrRco9bgUz2U5oASnzc24mXFALLCrqfYqMYnjGEMAgutwwxmD88LWMB6drWwSCSqt9haojFsRFXKosn97NEJY9",
  "key27": "2dCT3aZcP9xjfRMbNpy7R863xzq2jRwWsLE9AG1ANRfNfVXgmoz9BvKKqPx8sGjLMs6WHPgJmDvSpYchjJ8Wo71B",
  "key28": "grTgzq5gxefVHyqJZE6YKefhHQvYNQUohGq8HTrbDFXdtZr1seXXTtuQxmhtYsSqrFfpvKULLXJYSJcEQZjWu8n",
  "key29": "2PcRun5jwfvJjaj9V9kDFY6sqyjVB2uonmRBTHo2sJonrvH889g6tNuAYFoP81tpdkNytV2oGicbCC9qTKvdyBmU",
  "key30": "51jT916j13H6diBv3eZmdcUaND4XNCf69ESfBHqbbG8QJzTF5WwNMenBuwvBDZbj2HxoVFQPMwSrjSxjKzVVpsLJ",
  "key31": "2JXFwUPrCzMCRkEj7BJiENQHLDr4uPifJMeuTo3uZ8wC9BstSNMPyPjbA9kG7RiDxdXkgGmXQkq9AgXvbgiDmf9r",
  "key32": "32gDJ4ZYnp8p2kFuC69F8RCk2SfaqX3t6zNBW3Z5jrWsV7KBsywdJk5xMzFqpCF3oixTw2i1ECVcjT8VndcHae3V",
  "key33": "2yhEq5ZytrK6oi7LGfeLuZsQka68tNXi2cY4kfDwUv598yknhUsYKuSsfCiZGSSh4UTamrYBPqagLnTcMXf8jF41",
  "key34": "4tpiUQ2BStzoTGGtmY9gvzYC3Sd9FFqq15ycsyqVhsMGbNVohMMNHnm88cTNJvuh2DVGnihCA2tT1eo2UsnsPTWK",
  "key35": "58eREcbc1sQZbHjHjQxNZc3FpsRSQXkvb8PmS9Xf5QH8hhVMhD91sYHWCfp9soAK5qucbothbLapSwBBXfnp3ncp",
  "key36": "2VZQEuqA2rcj6oqjrP3Yo8Hp9RWZfU5zrFT6uDEQXTeTXMieqVbaEKcq9b4g9kajT1gnR8gV8HuDDZEV78teF24D",
  "key37": "3j9UUmDGjLijMK25xTjF4n2MbGaqLtcZ9oTTzmJ3BPXGDRFS36JtL5pSWxYF8yXag4esPpdLdwz9C2a58XJ1xMBs",
  "key38": "4XnVoPbNgL8UoMGvAdXD7q8A9vBMnuBCW98h594yBS7gLbyPh32B5e1NfiftKbbWAjaGr7XbiXDe4vffE4VyYWGb",
  "key39": "5KNoBzormzeSHZMYg8ZnFcatvaSG12kWfoJoYSDCuozEkeMb4uKCrErdDTg5TYm9gbFyDEU4q3i3qAiKYKnqe3Bm",
  "key40": "5EPcAfyQaaGNYVhENNtmXXnFDQWZMD1KZFE6e8ZwdZFiUGQcm3EATaTdfiX6qFuFtd1zcqbE1cAwFRVTz6HMSB2r"
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
