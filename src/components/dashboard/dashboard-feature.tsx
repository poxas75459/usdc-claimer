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
    "3D699NP5vAHa3xF6Eon4unhFyaizQPtVK2YVEZFbqJTTTKv8jLiYVkUMsj5cx9idKoqiG34aUkxBzZ3QamrKQyUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vjsEwndawxqGwiq59dj18LLRY1yJKAviPEZ1GcKg4DzayAW61YHweiaKHnU7KAXV58wFgJb6B7YzisXUbTQukUp",
  "key1": "3qryVy3YPpBfQbKvnRg7aY3ABuTP2eWDKe7XyLMfurgeAYq89yCVmxFFaB96T6wgzscmX46xt3dFz77L5pjkUvB8",
  "key2": "5Bbyyyy9qNxPt9RFZUvKssTZGBHJxSicZU6tyW4UnQBUwVMEDEKbrpUx9A6weyKfYQf3nADriHD2qeCT8MC5Vm9o",
  "key3": "22ePmGgGd5d93zsmUrR7g3VfuJfCXWfZ5kQd1WtNB95RKDsfUE7UrxXj33h5W8qMqJ7oH7wZhG488i6pc9fnjG75",
  "key4": "4H5NoQ2oM8fk2fzUbSBBtiui5Gb9H1PCsm66oszamMw61jD6SgiMnCmdYwKVJeSWUPhWbK4BrKnqsAoCnk8u2HKQ",
  "key5": "63yoiSQdqS8rSQQdKdSAifCbmUXp2q1TyucivCQWQABcs9oZziexorUYtkTkg4dvTyiyfszWpx4zDTgkUA75gzYa",
  "key6": "4qobZXWYRCzNVy2gtMoRRQHHDrTEZqHJJG8yPcCukn4Tg5AWpoHdekdMpMfNt7oZFwN9i4cNu2q4YBARGCa1gxHP",
  "key7": "3dTgQfFqrDKZdyGiUZ67qbhkF6ZmP6NzxQJBpLTTfe1obzqWjpRUCsEPaDX5N2BsiZT3vvV4XHcRkshEtmHMkVLC",
  "key8": "4wStXX8MreLWAHEtkWBFzkadHu3zqdbe1cfhgmvrScTAtCH6WD7GrAyvLg12vzEEefafXQvZjPM1DHAGy5tUWrox",
  "key9": "53w8pibS4Q5KNEQDZKRcTdAXPYB7iyzfBch8YoifSHShyEoxXWV2XMQ8K7WHQaEZ66fEX9ifhuw8Z74q5tDJbFpC",
  "key10": "5XT5pE3tX1KZhBjNjK7UasTybVFB3j5Pd2boxqi6ertj6C3uE2RbW2GfP1RwyhX3nV7YbQ4TMEqRuqtRyFhF2nQk",
  "key11": "5khtAQZD737VeoJuYhrEWkud9YtNpKvSrdXNjtuCKxaKpSWoB6UWzia4xFa14KT4GvPTUTDZvGw4ooixzffEJcPZ",
  "key12": "rmwQGiPpKnqLkHkmh13NEGQKZS8ViYPqfkmw3YxYRq9Jn6hgY4emXjARdA4yr9bkE8xLnQTUsiwmK8hdGvP1A2L",
  "key13": "2PE46rDmCrPdKwEWEjUyqxAC7XX9Awfyeqon6hhda31WayVJ28Dj6iEW5RHTKus4gdEMUj2qPuZYLYFKkcndRonu",
  "key14": "4Ky75irYh2VMzNMKV7vpnxuerGCYZyj94n7GWrw6SAM6Acxn1J7nxhYcSkA7PLpp1TvJnUSNmwNfXaoLX9apQZ3",
  "key15": "5tnYZa4pQthGkvxsHMNaQB4aj21ro7JnQuSaCDLpYSELPt4oSzEwg4jkvhmM5KooMNTPwGjTncjtvB96NTuhcqMM",
  "key16": "2xpzjKsuyBmDMe8wZ26zaHCTdBEHjgsE3A94YmAnnT6dgP4PR5jnFnjKhv17XPVU9Qe983oA7ncMRfgC8vV4kWRf",
  "key17": "TtgWGZs12gfMevRcP4MXRLxmSooECEeuv7NN49ws3aVokKUKj9BciyAaFTB1vi4Q8juJA3Dpj6u9qNubiF6muY1",
  "key18": "kAReft8M7Q1kpR4TU9wEjt7dKA3vBFtvDqmpXvK5oEoFdVbmwdwmXH8x3ZNW5NEGdgTFyZQKDtunzm2eQE3ZPFn",
  "key19": "3aXAfL7f4F79PGeX1JKytkp1iEUWAiy6bQddFnUbcisNw6GGb14QcysbEomKW6F69nnzSAVbHAzwmkreWzZo8H7F",
  "key20": "4iCdHjQY1GAPYBisC52gPr19a5KZs1crzR1XQiTEw1i6rsA2JLaJRBExGshFQBzUBapwfz5B5keKWdtSNGUGb4e4",
  "key21": "2zKdzdzJoTz5RHNk1hYHBBVojUqLsFjcA211hjRp2hEb2fzifnySBxGxrDsyx27YHSjXWQn5QKEfWxmkRyGtXHuK",
  "key22": "1ipphD8Ak7m7APhmuEwzes9zUPvrPKuZZJ6Ua2z7K8VtuiRH58tLwUps9UGeKwQouwpAN4qvYZ867AReQMULHbS",
  "key23": "51GaWYwX2aQSNeQByaK5nWVPNH8iR34n38J2eweAcsCVHY7JCyVfnCvQSdwtutw5qLTv8yX7v3sLcqKAKuZhDpfD",
  "key24": "3bEso52ypMZgyCurmiqczJ9YnrK1AziHy4aVP6RFCwRmEJcNyKzAQxUGxPbqqZpt2KnMC6BbkAFcKvpbKvymhiE7",
  "key25": "4FFLVM6eamc22oXdTJTCwdpKQj8xgfUSAcYL2YSLbUp4fbsxu6zRw8HqAhWYvYuwQg7Nm89wVyrghgg3qdumCQk5",
  "key26": "Q3J52K1vd711misr1S57uAyML8LfG9yHBkRyD9Za7LrUJrxfFqs7q1od3YGbkEYdqxSF14WjySQAhPzdJC43nq8",
  "key27": "2zb26uRL1847pvC9tn1NKdWUfFmqFs1R7YPmQcKsvGCK1LnskCN3ECCsCS9WQgLPUN7FED5QDwAWz55VFoSVoNeM",
  "key28": "2sGp4BCYuEvZ6oyCgCXL49H6PYHVNmmhwWB1h23o88s47kXpXS4BjbA3BLM5X9nkfM3gx5W52nK7xqtqD5PFViLZ",
  "key29": "45fsx37Q9aGcJwzt7642mJkMg7z2VFbWzaiVrHGpWdrhMmDiHqRuVmAJTBuPPziwvSkxc3ThCcKTvnrZQnmtiP5v",
  "key30": "29KYQ41DX5KzdiikkpXJJdConK7F7iuLGmvASeL43XFddC96XGB2Nv4KcSfJ2TvF5tXuSzMk2uE8XEfnXfjRrEBd",
  "key31": "3Mhxw5WocREXkW6qkVqHFgWVRBHykZCgsqbUJWqcWRrbkVjPCsr4t1MoEKNi1AaXKZKs2wtiyWF27bJHzjKzhnBT",
  "key32": "49VZDrn1xHdSUwoSYom4DQKJ1vxehUUdy1TrT1yLm7gjU7UPsZt8yPP8r2ZeHqVWzkDuguDfLA41312jh5UVkHZy",
  "key33": "UgVxTiKYRy3DNttnFnisSM4MA18JaZ2bP2RYzMGZQfhwwKkHKU7YcFD6yPH7a6pLMpZU8s2Tzrr6WgyTMf3Ds9q",
  "key34": "5H9Jo9fq1UGRd15F1zhtrz4BTKFuYhxRmKVJcnezXXeyatuwuFS3v2me52Z9A4YMFoswAnhGYLUoJXH4hBATwMbF",
  "key35": "2pJHvrZTNidPfQoBB94oiPCZvN82DJ5aZ8GVBJ26uMe1hAZBK96ZiEtuQRwZC369aA97qSKZaEV9cnuQdk3sGiju",
  "key36": "3cQJV8w9xLT8zFrp2yJyKrSyNttJFLTjACcbUnhoD3CM7VQXCU4TPHzTewzNdhqDyX7iYzBMa1q8d7oxZTZS6xf",
  "key37": "38HaSZB45yMfSY9KVbqXts1nGz4VRAkT4p1F5JCCz2uCDtesrHtyqhavix4bEuU9zQzPFwQcqzvAoTKCRf5hHUDK",
  "key38": "5rrZ4BMXWmwrdMji44jKxXhrkFybhG2BPEKdCc65P87sieFkpYSC9a9KjLKtAZTjWTiG2d12VKgf9bTHatBQWhdm",
  "key39": "5fkd49doJHDc6vsVLBeUb8v2VQksZWp7jbNJ9MkF1383DBSC8R3PG1uss2vXAPGmMba9XbReFjNm7EkEtDndJQA7",
  "key40": "4nEHpuVFNfdFSarz2TzejRc8Ff5iJwZGY9wnQtggsWUnWN7MQ9KwMxBypKTJxg118qTxT6wbSDd494sgevAvyuF",
  "key41": "4Kj6BVPgYJoZzNBUyNMi3YQ65YtgUVJvyhXahoeKh7VBGgKLUgqB29dzTPupiFt4UuZAHbnti95Yef8s7pRZhGAk"
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
