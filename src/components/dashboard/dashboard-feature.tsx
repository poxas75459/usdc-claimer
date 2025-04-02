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
    "5Hy8gi6R7tGuVwnFmyj8oVAaPk8w45sXeeQLr8MNPZaKU3K4DLR3KpL7F8UkKwTxZVBretvGTBTWHNGJkpvtJqyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KA5Phvoy7pjyPVerCew5cw2JbC1co3umEM1TF3AYniqWjRRjcrfybSaUmRdZr9wEf9R8f4myqcQsS9DhinqqLCT",
  "key1": "47i3qjhhoXSRJWUf6Skz1TMaVKNEQsyzSA9eGENMfm39rkfDVjETXrkGwq2TRjPF3Zb3zmqCf9CbBhkQp5gcQLhn",
  "key2": "451TxcSUfpe6iVT3kCpCrDjq8bDhxUhfZ35HphmXLCsRdXm95LPB28xNkSMgCYF16dXBKdvJXhh8rVg7t9eeML2y",
  "key3": "NhUVCZgoHDKLRaouEVoLgz76JseEuKVC1xH321AVxUtbfuekDD8wBN1mbdQZfFEY6X5c7T5zKZPgRs1oSDnsnrR",
  "key4": "54ebMUeoMRXKq5MTQyk4YZkAF4AS2pz6rv85JRbbi8JSQLnhfr6ephVXMxGGJP4FnVJS3gnKA9UE7jzstyNHqH7d",
  "key5": "4pi4g68HFmesa6JqLF1CgL8M4Ma5ugPxkcJQyDjKwQdXGoQXqxApwunuqukfU6Zz4GpCqBVwANNP8eMZue7Vromz",
  "key6": "YDENgvjTRiVFWiN873v1sPj4a4a48gwUKtHJ7phyN4sz3rfUotRv6n8GH2URVr1dLFZYthAo1yGQCR7kkw7yjLR",
  "key7": "u4scNbwiNGbuxWqDJrt4ofb2mCv5v7itfyYEi9w9tpHtzvTUTenBLDEFQVgW4LRc5zd98EmgEgq7b3RUp88xdug",
  "key8": "4ZHgzCvVjGpWGa9rMfefDk5R6BuFFZCGU1MwTNcU6qFqv4TgQZjiWJoJCrYrhvYVAiii5Rz6tB5woHcgnfky5Q7S",
  "key9": "25bP2tCpchz3iCyzUSWdubKbT2RQeeaHThXiQgFMWPS4DMLZdJD9exyxtZD5JnFMkZpympmS1xxBbsGuH77CfkAM",
  "key10": "5jnB8fC81FVcDgHHcKdJDSK7VuzFBqq5CfQberva34eotbuWBYisFhjZo4drdFyMkbYvN9qtwQkM81ZS53s5XNsj",
  "key11": "eA8CV3xWQWctiRXVRiFnF9UZiSHkVio5PyDysixJGbkthoksVTfk22PZRHhSvRAiivnTjhiFSsnVPkdnGAbjghD",
  "key12": "4EJfTGzesweUHbNiXjjX6hBw4yrV9jTVPNqdUrUeexzGaKcxMjLopmc4cXQ1oYrvDXjgt24BAypBDaw6YCNi4Kve",
  "key13": "64HxkbEt1uhN8rU6ZSGViZbiRLVJ7V3VSMmF4VabwHeF5ri9Sj9pb36SUmbRCxNCbmJVMKPMpvFEVSYzXhqngNcD",
  "key14": "3MgMbMiRn4WUKkSufdYAYpSRke7CepQZrK8jWVurG7AiUce5dNh6Pyw76ZjEVfZrFT61smRxRU3mx6V6HEaz57PX",
  "key15": "5d9c8uQRZc1VBJPbrXahG7BccJzd7HsbNy7koCx1MWTs5EtU7EdKeJqZGZjxfB1tkRUiz9SeT9txzbSNUg8UnoL5",
  "key16": "52vjghExWSKqXLH2wp1Aj64K3jxmzEZ3v4tuJawMzFWBPwAu1BRbeQgMP95r2ehQZFYGu7AjabfDVK8ftDbGDezG",
  "key17": "2EBpKYzr645UUpRvdM9G5ctzuf9iwEzYmVXXk4PjeAywPrMVj2qRwABHEjezjNeUWuEvFGppUUCK5h29GUUf37h",
  "key18": "1so8QFnfjpRehPbnbJ6zr2dpANaqrpAf4tsevURSwGAr6FhcZy6B1CYE1EVaH3E9cvMb3u1hmaEQW7e1EBRzgV6",
  "key19": "5Zw1LYLXNnZZvLG3Hkn4mAq12hxszXy57fae5uJxZ2cMUsFEf9G9BZthj4pxgTmBgkHxYRdemoSPY1gFyFbjTNW4",
  "key20": "46TXFBAVu6U73Fk6hW6NAToFEU1vBdbDYNJZi218sWeaJnrDJ5pFyhaeXGh7454vpa5nY1EXecHMJpZQupZEDzCu",
  "key21": "4ZoZ5wm2M8hooXVfKxARE4f5RAidUy8ndC8HcncVDkhHah4v8hkdKejTVyhvPc4JTcVwViCEfpmrJYECewyviAiS",
  "key22": "64hmrFWwYtko56kyDt9fhWsKsoiMGdLVrfaLW1c3F4N1z19XDECFBjhGcAPZg1WnPGCK5rpT3SuUf2iV69QBd3wg",
  "key23": "4e2n3EGmPy92RfV9zNGZj3JULpjgM9yer38oX4houHBxrpsbcn3pW9cxAd9dbDWiJV73v7TsAVBDfxs6xtFurumX",
  "key24": "b8sNq1qL4AUWU7TCT4cXffebAFgvquW5LB5uyhfL2wKm5imD6me4jt9NwkGopanBkeHDJiv7ktgMXvhSFX61Q3N",
  "key25": "548REoYSuS7YEXoV6gwWJYfa3YFqYxhuRTPQt8cM5Mr6wSbL8h6543VSqpPwndiQPf4M65tN1gS1h3TJyeFTggtU",
  "key26": "3epXoPCRYg6W49drm4tm2dMeHRTN36W9AcLMBFCqwhRGPha9yRCQcWYKJVgNvq9hKiPMXfYbuBaXwqDC8JLPBtWp",
  "key27": "2sPhfCzEfNfD1N7e9Qqci51hfBDqt28ipEVoaiGmgvhA2p4H4iBRArGZEiWwr8Yept2n1ATei9Jyd8ZzmviCZuQn",
  "key28": "5eA8xKFxYx9GptxDq8eu7X8jAwTxLVJLb6VssqfSvS7GdyUznAy1Y7Q9eyYwpK7pU1TZ3kd63SJ2KFeKTinxmqfy",
  "key29": "5XPVs7zRsF3htAB14btYPnR86DAjNwoDTYNiA7M62AxgkACJ9i5JPmQnxxGsBBh2qfVis37j6LQduU6kEkXhFVUn",
  "key30": "5ZECh71RJ7WqNNnmksuxUicjFpbaLniNQ3id2jx4WUMP93kMsQfturQW3FXtoKzyhBXdgWAKgSruPvTeCHZRh6WG",
  "key31": "iuVRSueBFbny8YPMLAo4RY7Qa8iGMf56pJW4E4RZ135c3jJiM15guVvHJHiXHEYtrLUHoWPe6EeHy4wxeFLEwoV",
  "key32": "2JHbMz6VUfVY7tik8NyzgTN8CuSsCxSkYgdXn7QBFNtUYiGRHQKoPFekN4gwtD2r8QSmJRPNzjRLkfxbL5eMeYFj",
  "key33": "456WW1LbG8VntRMCzNN4m6Weh4tALh53Cr9jY3Uwq7f97kC5QCkuFuNexjLVVTgJP4NtKbEe4UCTGUM4Jb1dPqEX",
  "key34": "388mwf3nNHZcSP5EaLqqwfW7HYYcj3XSWTfSPcBZ2wzSdPceTbfj9msYmZ2HiR4z5upfVS1WTsKRQ5dcSU2gPjyK",
  "key35": "53AbzizAVfudhG84LcjumEr3sReHCFRa213hdzudTFopPBMBReYHrPVdYY12PRwFcG4aCSDbJ1XzUbXT1YhExjeZ",
  "key36": "2BHqdAVx2gAgb6rarVoqAio3wr4NXY6t6MqY5QfjQBNaTxPYndJ9HV8UD1LhVPfeMbz5cp44d5nwVZg1QwLZZkyJ",
  "key37": "3Q1ZUSzgKtkun3m9HrV6Guyb19LJenMVrbHLJ9mMUV336nt4N8tNAo5R5dDD1tScNEHJf8AkhxBbxpeBEAzeL86d",
  "key38": "2MHZVbrUhhcVSvwXr37FJeFSbGcwBymZxbrnUTsjBaM3KgpH9Hj6FjzjyfYaczYKFcEx6oibi7jG6U6UgETzMVYK",
  "key39": "2x3Hiai5KYTAvVZ61mAoSa1hJ1MQYZe1E8cXxkrXct2aizENq2Yv1j5ocCAbM4aZZk84XSJ9FfKWbQ1KmMwzxKUp",
  "key40": "qk3HCGhHrHQCP3foxZ5qBi4X9fiK8GRAvLunrkmsz37TvskzYhXLrdcEerqy9ES3MbZbzncUigZmN1cVLhm5U9b"
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
