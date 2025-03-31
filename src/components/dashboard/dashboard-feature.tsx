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
    "4Y2Z97QZwMdHizP3w3zNj6wBueL1CHbqN9gaTMqbEdLC2BddeVw8QFLRcoWWBvmrZxwBA1qDR6GadjxDZLAFjskr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GTVN34WMKCUwfSETsk31Q2dcodd5jkRuiZAgQe6p3oz6MacCprL5DmbnqGWMuVLoLZzXKYuboJLbjpiL3onNnYw",
  "key1": "4dEPKq1QLVpcYouFDQPBhEAD38UyGZro512ecuxCLttuYyajoDxXNCGz3WQM1fEXEtsyUb9nW8GZeL26j6iryuPm",
  "key2": "2ubNXzWARiSCPTxkZNcH3m31UpYfkhsWAZ5WJe8yKf9RPgf31kWm3GnHW4v83ASvWfooq7TGCBQpNq6aDJ7NdXVa",
  "key3": "5xAY93iJeDZsroK5gVvBFRG3r9P2XR2nSeAa2TawqirnegBHHfBJ7cDqtZY3hwopsA8TDCQQWQGLKvnMUBe1M7tQ",
  "key4": "3DuVrcqPPAEQoMntDCfLwKnPA1pqhEJvCieqA3nLxtAchxoMYGfXnefWuqmyhGfKqxbQHPxQ2AdynnywmzfDiGuT",
  "key5": "4ak8uAnVLJ7AeizggwRYbrJt7cXyA5SM1BrJemxiS2VAmj1fN726GjpbWE4eAQBbZfVyTU3CTpenu9m4S1u8u9DL",
  "key6": "4yKYzf5AxfzwJP4Qv7TB9AS38eTtzjvDFuqnnEoju1ENGKw3rJaoF2fe7uqoxSLWLME7xu3tTEmeo7fFo7pr8zqq",
  "key7": "4iqi8T3RpG61cwiYmhtKf5TfCKK36VtfXpBPcqfDWRrLjyLZ6UKuPAZo5mvfuPeduhSp1NWLpnuarxMSgxnjHiXp",
  "key8": "2onwD9s2bTS4Y7mNkMwfhC7RC5XejpT3sBNe94BMzRWyExoUofaHY44DWGkMbeVFobL3w3fsK47ZNYfpYrvKsg4k",
  "key9": "3JYgg4PuMjAgrG9zn5N1ZwTgs9ebV8RAYhMxjbQVckuXqzgmjVVeNfUQ8fvEvUQUqceQP8YH9Q5Kk8Jf9vYTAuYh",
  "key10": "5UcrpXmZCnGpbxuPVao1WUkx8BWHVWGX5brAePhTY9BuY11ngZ651jdwvEp3aj5YaLyF2tDJa5Qu7KCj2CCG4kNS",
  "key11": "r3tg1uynaXfrbpmpu9KQgEP25JutB6FvgpxiaBLW9TmnDABiu6kWsCChuiHRm2kPUetSP2vEqG4VqGQz3qCkcH5",
  "key12": "55XYP3gRwz4JK5zGVqfEoANtjgS65Pq3AYa4MPqef9ybVZz98fkqHTv2HxcxbpoBveUjNkxN2uwy34fuAYLSvGDg",
  "key13": "sfxmaZgDxgRium61k8Niqh51YX4EAfUT8mWUa33EtxQDsLw4VCgikD1Vwiu6rQyND9gpqRxNn4Nx4YCG2zQs5Ni",
  "key14": "3M6NJDFatcWhF1PHQa54EdWBg89JTrDPdsadFHQGenpjYchpE34G4MHaHW8dgFdZhmrjco5eZ3hSRnHGo9h4bej3",
  "key15": "2Stv5LKHaTQgMZqG2YrJCjF2AWDPtpBKFfXxDcbay7pEd2ZoEG7mubE6HHPvcTw6CoNdMBAMV3BrtX9Dwv7aJY5w",
  "key16": "3bVpJ5GvZMrH2pk7xYqbycff9VD1gnCDTZSHRx45XNMANW7PB6BqGcvusLMiEqjpFVqdqsc7FVkEAyJH1V1DgW6e",
  "key17": "2NkvVpYofZv6JjeUySZumEMPKj3Pdq7CaVQ5g2u3BJgdzXWLywaJpLB1SUcQDKMHeT2ZbEXDN82jwMuURjo9Qkx6",
  "key18": "5RekgrSaQ3YHWTxeu7Fu8fg3ZKYovBHhzvmiobsJka6uY5s3WkZCP4oxAqWNKLECxRChqeXjnkzhndd6PB2AFwsd",
  "key19": "2tw4AtTmbHH7YtFKhXcBT6oVVX2iMxeTPjX2FLJKm9JsJZtkDAnPsMoY21uLXfDokVSJdQUjQ9HxoxqyvggNm2rE",
  "key20": "2fVKz6MAyUqSdmyv9cd74j7YVk1LxSp9a3rsC2kqydBo4AMekLh579nDJh3SkYmiEPGRXwbmxdVSEmidcRHxeZFw",
  "key21": "24XK4DEjZRVr8HWJSQUY9gzpvEJocPeS6TukLGkeGcrm92nEFSsrtvhy6MMXrYQiMFKKPZGuoYjUwpYMyuWtnjpk",
  "key22": "4E7fKAPZG6cw394Houu1LFEifb25bAwwc1meSXjCiQL3LLPa1s1yGpVRRTWcvQ2vAg6DPfvdWp54qM7Gtv4asT1s",
  "key23": "5eKbbb2R1pFnjRuynTry1bxMVXmbztnAsao9Lv9SwBuXYXtGqUXeHkcETFRZxiHtiwzB6x7YRDUKG8YoqAGV9diY",
  "key24": "5vguvjtTZWuXYqnPZiPRZAaVi9n3jHkcJQaFeWjfD8KVY6Vqiq6mHt4YcbDRjuWj4ATPm5jp4LmYexBpMP9uKqTD",
  "key25": "31xvBafYXKxU5uT9fsXzZj1WFQEpmU2SfBjdAW8yyDtLMafr2yyuRPp5nmr1dSNi6TPgijQZAFhXbJF7gnnPYjMm",
  "key26": "56VUzKpznigTbKbbA64ePEfz2LRKsQqx4x6ePVjdkBGvd8ptZkrnn3HdUqnWrRYesjkC8jv3v1ve45E8L3TGS7Xd",
  "key27": "2LEUAvaAEQSCDxHf8n9GuFxXqEDWAKBU5WcCyRDmfDLpvkoovZTYLjPSAQE9CNW4fK9JuEULwUoJ4pYm1Mgu12Cw",
  "key28": "xfv7rUpaPqQ79e7a3zGkAHERDHkv8hTRsWoqWeqk4pahReVeci2aiv7bnsfrFreZaHffi8pK99Z8doaWobYxB2x",
  "key29": "2gdcnnpPwmUJ6w4C5QpyhmK9UyppfXw63D82PJt7DJtShyGExD8jnvvESy2RAJgeYb3gG6HsEyCzWTiDCpm9nsmJ",
  "key30": "57Eciet9LyQB4SdY1iEn5VNd8ov97yrhM1JZcgYUAUgQovvm8J39sNajt1e9sSRrsUr83J8WANfouwpzN3VP9LS7",
  "key31": "4WS5FuSWjwF2u6d9DTP1xAyDuAXFTJE4ictJbA2zJmjAjDpPyc2mPrDLaQHtF868vvJ9GqiUk8JHenxZDXkVvyrr",
  "key32": "4vLnkX8nb3iUPzNiA6koV1Ssf6HcG92QXszUa2ezd8wbyqzGQPSGVhTnKNLhS5NgHghtjxetogKjrnboW7oiBvgV",
  "key33": "3SezMHa15qCbatD9t7WAchpwXeYAQak8EB46jzuGdrWZgLkZyLyW5WQB4P58vwZBSeA7NpJ5m4y4yPGZ4Xr6NrRi",
  "key34": "5cfGPp1Jv12MsBVYFBRGCQRjYUpCj5uKu41eiiMKuR8QHDuxviv1nhva1mRnmv9BFtE2f3uXHKsjjX8d42XVevGk",
  "key35": "3BUi2oMPXPqiAs6w6mzf9mqczWtckbQK8ZuZRZreNZoXEJ7SQzBXbT5C7nLbYjLhy98h74MsSDcNT6d55RzoFfgS",
  "key36": "47pY9MyZwwt5AK92ssXSgewvJmeinhC6nj89Mnq6XNj7x6SnrtfwokRv5nsMtLtmMK4nEfEpXmVFa3xDJq6CmHhn",
  "key37": "2FfDQwjHx9hqb8iDBuMV1fRdFDPNMrJJxYKGqHLUKaLZigszQyFntkt3gUdzfJfCUxfzG3GM7E6JEf3DC5X9QfX7",
  "key38": "LAUHqBZeT6fmTfPuC22En1FydohCMox4At8kPLqNMWqysbGGAYhkJnyTcnbnyvxX232uTBURCumhAD5PNGwQMyu"
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
