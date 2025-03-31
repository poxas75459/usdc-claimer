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
    "62H6Dxvv6kBZzpPdoBBUq5yDknBHNdoPNfA8rDXWqFJHaJybHnpa18GLFmdG7fGqRi7ArLfCp3p4T197tgfC7Z3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k18dY9MyUWsuCWThnAYisuhZ6CGnCrg2Ev9zzQTUYTHCtQG5rAij7TYQz8jpdYrPUohapFasPFdMC2ewoXpQUy4",
  "key1": "2vrETJ16qZJjcHvNqSR5XcgKK77yHqyGeLrVN3XEiPr6jzV3EzszJzpN5799rhRBea5a1Co3MMtaxHK8HEKJ1ku8",
  "key2": "YKEDH5ibzHY2Cxb1XD6Gq68FBkLiLZXvXKwQzxQ3K4njwwi38DjKYfB96ZbaWivVGoMLYK3mk97VjQkR919Zk6N",
  "key3": "45tHHSXt6va38wP6FadNXDaQnCvYWnMx22yTLzQ1iBhsHzmTLESqgj57XAhx35GEYrnjatPkYFBey7T3mjZzL3EH",
  "key4": "57CF1XiVT4695YQVNw5JjjvwE3LcC7QjN5vBYMcXqY2cQoyvy4bzUYDw9YRqj7gEXBEHSMLPyhXQyHMkeaXPW7dj",
  "key5": "3KkfvLzHSWP21EqpAJ29c87WMhg4tYbzWErAA1bALxTxC4fcEXZPdkvDnkxKZF49nEFicyQArTxjPKmLW6sHe5ee",
  "key6": "4CSXfe8am3UVRjB3o5t3WA4gwHidJAYy9kPa4ch9ZiopnNj6ZCyudCk7vdxbZEhPaFZCrdxCj37m6hu2ZeqogmgW",
  "key7": "W25KYu6VWP9fPqomvVqrE9Coxj5B66C9wjpF9MJXxpheNLu2L7AG15urimXAtQZEpGn6cGNot98ULDx1FjU7R6Y",
  "key8": "GzKeapAVYMMzPQnjeSU71EWhXjBCXzsuq4h1MZFyvisaMAciD25ZUoZGZyGrqcXVezrZzQhGK4ksrjpjYDuU2MQ",
  "key9": "3osGDzKFjUrumj52Pj1qLtb9D318THxFnBGBRpP3EWVG3aKbb4ndYbRfXsaqSgocWXqq465pxbBXi5ucNPid8Qiu",
  "key10": "etJpoHqXk8aGsewtxNoU79oy5WsnrvFCMpowMoxQ5shstNpyp1TmcaQbcLtceXzJPK4tt31WcJB3XyFWGoCbUPS",
  "key11": "29grikV9PvbqE8oTGS3PcG4A2kn9dfgJE9Yvm43aPmL3vqpcLmqA2tYkbSh4MndiUcUbFcDkCUEf6QCdaWiyq2Mw",
  "key12": "63Yia7BkdNbjXR81dZ3d1mKyEwaMPRMWD3dTGjfJMKAmaR3hGqzv3m6MCYAvxiH5oGjwy1b6e1a8GRVCf1K1txoA",
  "key13": "49tkfDeuFpzJXarZwYrZCtRqWJ8NbbrMiWsZCvxVznLHfHvtUsAqNwbAzsevhoFHk1R8fp2hZSgZc9tWfMcfUWqu",
  "key14": "5LCs6UmGGPnc7auySa2EM73uJv5DV2bZBVTDk7uwwSnAoKu1YGfEa21WcvunCfGxMMYrMwf8CAi8mFifM1Yj3dYm",
  "key15": "42pYuXREkDyzcV3VJ1D2Y3dm8q1FfB5xMcdncjAxU533egannTdGiGZATRqZRgVHegK6s1pNXZJYbiUqMyttzVpx",
  "key16": "2dB4iVjeeFSe2Z42W2GUdoqEQFMeB9AGYjN7wnauMvGthDih24hY1vRR7SLsvfV8n6YMhM5Mer9JJ7tkqduzmGcu",
  "key17": "3No1W1NGgfrUm1acLrXERiKoxsjKnea6Zkh7z2fvvdpWBtPB5KUPN5GfzzarAWxfB8DkdBp7P9RozQyDnULb9otE",
  "key18": "UWpFVpF3Rk8zTnRHNi7V45RdV6sbX8CU3nHF9b6xW63WN5KCcKwGLXzL3vrSrdTJREHsA8e8NZ1eiffDZCyK4hp",
  "key19": "22M8iDYGjkMMRqd6DUkNijMg5pG1ih3HLoiSA7Ez9HcYXDmZPTEWCCkn9ZvAGrR3mQYC4UkZp7HAAhYLVNjqPUjR",
  "key20": "2doJ5W1p1teQbYeYWEzs9MeyWte3XatEwWpvAG9xXgF5UyMgWAHJTHrRLChzR52JSCkKCSqPnas6K2oj3yUpWcR1",
  "key21": "o81E83YKrD8Xx5ZHY13SC1x6k3PZrGGrM4oEJV8RMKHzbMin9htXhKydR866J1mLAsNXY5KYJ4gGd1Qs2ra7pne",
  "key22": "2xQ1gKnvyrULp8XdfoiV1KyKjpL4nBAUoXL1MjMNeMEaGfVG1bUxsgjTuGcWQjDRHNNaAXmcud5wWtTVpQ3JsiYH",
  "key23": "5Py3T51tSWXsena3g4atnFYFwo3FcQdugK4PLetP1pVso9e4AEMrMynza7DUwwdeuz3popRggYhJJSQAiwjd4nAH",
  "key24": "UXvKCbThA9WcUb23rvWEofevpJwPUSZaB791NGkxC9Zf9FsH8R2dprh26FLEoSBoj9ioCsoa17cYDTotMFb9SdW",
  "key25": "5mx2bykiZLQSjBLXdgMpCxV8ctjAcLs3q9Vh1d9yMkKtbWBUEAmESw7CWfHZhRH23FdQFids444sdzdVaFLAQpFP",
  "key26": "digi1CpGVkfSecoEXeZrg7jS644rmC3hL91se1vv8iDKB1QtKmuckp2VZHrAZNRVtyM4LfKiwCwRHphtzaEbgJc",
  "key27": "2Eoi1UGmgnC1MXPnHw5Cd6o7JiAVu3Yvp1bEm8RniQwy7YGqrpcxSK8gLtRXicQr4pBVZNVGAo2W8Y16vnSBJfYq",
  "key28": "3CZzhkocVuASRZGYB52U2qxoQswrMcaAof7iaEdkxjAMnPLn8e8BGBXkKFHUdQKuNycTrfnBxxVfzcrfM7Wgsd2Y",
  "key29": "3vAf4NcHcE1h7Z88W8FjxbNDweyPT3oeEjDNMQFYrXPnRPjoYmg9XzncJY6G9JnNqiYRWy9uWtZDhnzBcJSmKLNr",
  "key30": "4VacEbKL5xriGtQmELGrq4RyRqUCBwmZ9AXpnePGtSQdJKryPdt9vrdNZH8W7mamFnFp6TQakAH9c89zp3JdwrPb",
  "key31": "2rqMHVZnF69gDAQt9JQsctzxAgwpJv6VcYrkHSV7ii2TZNK21TgieKVVYQBN5WRZiUH5n78o2PgRBPkD6ubgnXoZ",
  "key32": "4ArTEHtu7c1CEziZjAfkMAHQPNmxqzHoH8aYwJ26qHUfYJVDpMfo7hJ3EQiEEyFcaN51CdkzN7ofzC6ZU9KZNuoP",
  "key33": "3k5QS3ngdpszAYAA9D675VcVhYDMZziohx8KysomAi1PuratpZ7DKh23vxcG82NCNB18o7RFUhm8BugnQyaTy5B",
  "key34": "62DZA8wEVk5YWQaRmpKyut12sNNw8TcHqAYAghrp3mUegKxuJmiignru1c7bXbQFaEPKmzP6ZcdewAj7SudGjbKt",
  "key35": "oSKHokcQvZa9sYLBpV3tx4UnmswbiyqVFKidBL9557RrYveywc6nmEpZgQXYx1SMqnaVuvhyNtFGJxXpe5xb6Tf",
  "key36": "3uAND5moDpAHEa3gvn8Ntov7idN1WfZcEFsumc8ev7msyysFGWUhEvk6CaTCAng374wtEqzFoyn7q3RoL89NM5a5",
  "key37": "4dHYjPTutnDoqqTmq1i2T94nAvkp3ohCattbYLMigb81r1ek2Dmre8KTL4MegCbeni3L3mwe94SZoU5LucWnAjzB",
  "key38": "5CWE9gJqijeFQu7KjHfBYoUPnU86npR3SQeceGSqqzAjfviv13mupa26VtP2KdHZS1KQatpCwyp1ew2bKtyetKAg",
  "key39": "63XdUzFDEaic8bhvzN9yaMMPVRuEFMnPdV2tUFP1GngbWuXsjLycV9zTcZ3U9DF7BgomEkxHKozJ5jkfHwf5naWK",
  "key40": "4hmdS5iVsX3cz9wDaHbVKjewdpV4V1PZ6zbv6yeaUmAgeVtN3RWxXF8xMuYR1oT87bG84tJ2xTHxVJkPQyYrhrhx",
  "key41": "5wipcPvzuMnJfgp8Dsg3QsBKPjX4RPoefK8ihx8LnJsS495SS8girbBABEQup2GTUtViQRWTNFU6uPfxrSvN3MDF",
  "key42": "4kUwy1jx4Mcpq1Lai8kuQFuub25utkEzkFXkpEFZ51BLGUmgqBz7wo7Wx7rxKLUfAWcJUwPjdjqqD8h4Y5yuP4DN",
  "key43": "5WGJHYkYoubejuF8NzQhn7FS746xpKjeKAYKpqXyxVBxkfV5Xr97mw2bjLvdSiAPsxT59sYCZ3LDnjpfShWrwGHm",
  "key44": "2ueayBYn2sBWxn6co2pTbXkNYkZy99h31Rck5Qdr6f7apu6KgADYSyRVWVciq8o748CWAng1uL9vbDbWNzHghpDZ",
  "key45": "4UnQUDdKT1bLcu9T62uSTNuZq7WXsLm43aDxtn3Ah5DQ6BUNDCBEkB7aigegBtJhdad4u5mbacZhCy22KncB1e86",
  "key46": "5fAdp9E8FSjde9KCLv44EGjXwNLZatAH4gA8VEZz3EnF1xN9Wz3YxqwQ4wZNpeWQuz9eU2Rh6QX6kr8e5ircT139"
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
