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
    "4aQyu5coRCqsDvhiKFetSeFVJiJUmiRk29Nc2SuvrV5wuvnjFGjdwA7xdrDZVCcwrqShQh8jPfMMiJfx76FCVMyY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vC9q6xTVbuuVy2NxXZH5hitrg75sLZ2CdrTRbCvvnamyuZhbyDgotbHHC7AcHEEus13gHz14q17MKe3FhTQcEKZ",
  "key1": "3BzD3tFCBwyWAPiAfZJ9vSXFEZ76bTY93AtaX6DHRmjQbUQ3p2vGCFdQQkRpa7Zu8q9w2AYayDwQfWvRygNQH5wv",
  "key2": "4stpnFHnD9NrWFbYUq3QdYB4An7yEaJyML2uJwXAuRaYBTFVu7Houv4k3StAaQeea1gaajbuFjDEvWk2v3Q5VLTD",
  "key3": "5aXAG7xr2By6sP6hsJkpa9nZC7zXXR5eTbDo4x8QdbjXSmXozDWh4nfZC4TLd3Q5ZTc5LD5AkQCpmK3GJw6D6dNv",
  "key4": "5L7oKw55jzAfiF2THdpaFEfVvuK9utDaRxyhioN5ua6uE6z6499RBXfKWG4uyNpSeoMw8g5jwim3D3QgK1ebHq1B",
  "key5": "2ufGFdCMKBZ9nWNAYtm6GRji5AGeChtSaAwq7YdGeuYoBQnpb3XiqynGUsJzGAcpvU55F8fit9tQV29XiQTyuVnu",
  "key6": "39uGKrvHWgJprnbmZptEmYqY2aphsVkRFD1d4sn7yVAU3Znus2dqjdLaLnmyihWjr4HpiT2Ji1mAxU4XKSC264NK",
  "key7": "pwWfr7TVCpMQnoJqtDFtAuw2fsoWWxr8zF1s7A5LfT8q9JFKGUTZerpzaW6uhzjM4qj51u77agFZLTXciJfghSW",
  "key8": "32CKJGTxm9duGKFrrFwYosStqEfrKxK5JTB4ZGwkX3TirZLot8JgrBqxukVACYxkd9rQSxXeKTMNCHAzkXT4hD3t",
  "key9": "37vQiehtRP4TVM9uYHex47jF49itgMDFFwTx2nAEdzvdY2nNxfb5kYhZZgCz8PLdmFHobZXuqg9ZdcXu8vskZPd6",
  "key10": "2bUxNr9Ndcc5ZBnZGzc9P9fVotGin3z5qTKMokuunKHdgPJdnHfeaxZvwpYgcfoupx9c9JzXZfzLpL25hDYCuqbe",
  "key11": "451vwA64ET7ABjWjrBqMEDVsSuAx7hFNmkpTvqAa96WVFqcKsGS6jURtD4Xj7jfVzDSTiM5wgbnKTzoLnDtZPabX",
  "key12": "3jZaJBqrGiSwth145gJip21WgPCujU9UCaQcKFR1n4Hk7f9KcPsBH6q64KUJz19SnM14GSyuG4zvaxyhjr6TZshs",
  "key13": "3RaUDjG6YTt8WLSsZNmkpWtEtFRKBVajSBxJFwBfpJywjFN9LZjJysaR92qQY21En261tFnwuzQEgVMGtPiLCokv",
  "key14": "3utLvPiy9BtzseWzPbCKKDgzFDk3V3jRo3TwcUpkKt4Sf6Gytykk1U56vba4NnRT2a6j8AhXEo33GA946w5NjP9S",
  "key15": "4XQxFBTbgP1yAGqPbGyhXRdcjib7cZ8cMCNJH1ForLyn1FRpa1StrkrLZeK7DND6W1Zb9vJKyddBQwee93hwni73",
  "key16": "wFZM387pjfvhxJXcY7bsmKiiWSQUsyHtSULXY8TwcTzz2ewn6zrNvkbiouvAVnp6VXkR5w3wNLqzqZ9VCQY9uvP",
  "key17": "DgFxohPuhpHSm3nnE1R76ifGdcF7Ko9x62a9DeWQU2NWVusbNvthhs19ViY9HY5hyx6PayeQnoQyv2UHk73LzgA",
  "key18": "533WJ9LYBBZzx1HBugjTqyV7G5tr1eBtg96LcFRcnQRtpJFHB753RKeEo1fdMKEA6xUn1A5dmUafVhnc7XTHfEBW",
  "key19": "3zpUpNNrMhd7vqBNPtpFw1QwW5tpBv5W4aSUhfoWzLgurELE6Hz2z6Zc5GUqwEyhPAJHE6zPrSGoucSVJeKkSj1q",
  "key20": "StmvcxuZXxoVFT3j7cGHP4G8DjLZ7MPT4iyrbkzwN1BwrBEU26BP8Rrx3GrNVeX2qmRGHcvzqw9hY5d5yBU9dPr",
  "key21": "62vV3JmyCZDSRhXN6iHw9thTnmhUasTiDbwezNXZUCKw4GbQQuLuqpJu6d1AxR2K5kci8i751X8DntBbHrS7ePNc",
  "key22": "3W13CG3tfEfHTBZA7C8BE14XnqTmQg4AAhR4ZoQqY2Mbi3PM63Q6ZL7SHH4kQ7i3ofEEVVe5rLDNkqTb16jwELmj",
  "key23": "4NEY74SJXzyY2XtYZtyHiQP9TabJkyJ5G1C6fZxJJPg5jphWSsSo2hrU2z1gRVrNXnPE2EZr7KXkBPh8cnvj6Ygp",
  "key24": "oTMcS9frLuBahbcaN61tH63EpJrfAiGFtNq6zFPhsrharS6yf1ty7dSuL3LqLrPnwzUTN5JdqrGCeAfgiB1Z6Rk",
  "key25": "9zdBpvNBJp5xcW2vtBBmSE6a2vqq9q5EErib5iic8qUUzcfwnAjRuDnY59WY9A53UheXbzTuhYt2Us7ioJnTZUW",
  "key26": "39vodyRCuuupTx6KGUk2Xd6HkJkCp4XjdkdU3LaHa54qYvjpz4nYi3tVojiEUD7nh6k5FeSVBquHiF7jJCjSZkkK",
  "key27": "5veqVBmSC5aP1VG5pCjmzuT3LEq5qKeG69iCAAUpWttG9KYiaoXvvJHk3uqqSNEkPRSmdf9gsS6pkH6eLxwfvGfu",
  "key28": "3gb4ofatyY1dDE7FrLXDzZoQ6HPkAQHtdqbBnMEaHspyE43ArNg6fgnuroKbHiuLbdjTZBndQMqRxz15cg8cNW2W",
  "key29": "2scjYa4fFgPcNgkA7AMnYZpeAuWBXgYFrN7jDExmof6N7bWVZx53vwy22WKJtPubQ8JkbFn68dFCxYNyoTbFZFFv",
  "key30": "5H5sjTUeiPG1oQoQZQCjSC1sowTEqJJ7eCGXtKHrsfygNWUVTfZ6PNjfwkfL4SLyJTCPS8CvLoYznuKopaScHeHo",
  "key31": "29e7TdefH5nnC7nRYMqCBWURLMKybAKX5QSHYbmAa7dEY4vTLTLbx1pzXKLm4mGCPGo63Lp1FaYR3uWQLjGAygG7",
  "key32": "3zTXThKEiyRgNoYyR4bs82awgnA3h5fVNuSdy3fgirihfjACWzNeAWAcmrd4M5nR1ZJthmHtMDJn6bNeVXb4WS5V",
  "key33": "4uF2TsRJy9QADPnQG3y1gNsgmSWwtPQzWALT8we9UT5wFn44bSwNwbYqdHDKP6Pv41eSTYqjRwRjzoAt6Po2FFKb",
  "key34": "5nqgNKrwJLzRaMTctHmJunf9oZaPXG2YZLBvwLBK1M3QNn6s22Byn7gJPWKYsTGVtmoFvAY3vkNxH1bEFCgex58Q",
  "key35": "3HvHczZQqmRbc7vHoDmTbbXTJYgk32eWzsvMojaf9oEsYyTnXy2VKGEBVEwsJC97N8cJhsdv5FC3yAicY5PzRh6N",
  "key36": "VFV3FXfk7EmzSBCWG9hKTJwSSY3ox2K1qKSVNhzfLJz22G2FpSjwjdomJ5Kftgj4K1t979KtDKbJRBfxfUxKvoY",
  "key37": "3SfGtdDbStRVg4AQfESxbY3T5P29q4XUxa33uwyava4SWzN35hWhmHyA1WJfSSrzVpTjhWwDvdc5S2NYzgNH5bmW",
  "key38": "35DUdExBN4SX4RmLUeuBULHAeimdZ6bxt7yLwijkQowmGtN6NHQZrsWYyqyz9QMttobyRfUQZ9tECV1sJ8QWq692",
  "key39": "3e9PuTdyjZHGqwB6rL5X1TpWTkQPRSeV4Cpwyq88UXDvc2JrnNgM2aYbGWpC3vHDDRbCyYsJCihj2uHwaYu5pWdy",
  "key40": "XhtUJ8kkz2wCbfkK6bKaSeo68cVoZd4q4a3DRwrQLYELZtx6AXTkyq2G5EzmZgPFvJHskNhJeYwZoZLk5yfL7yj",
  "key41": "2LhxppBQkWzcz3yod6xG8eBLmpoiS2Hntde1mZsYKrZQxTAY29KHZ7mq43W2bqLp7iXfZx18Wgqp7pmwkh27hGFj",
  "key42": "wFNqkmpMobEiei71pwRKQq8kRYTKKCtvgC49SVxWvvTzGUD1DwPhjzjEWy3gQXv6viEPZT8J1vvXwnBzoZDZ7Bj"
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
