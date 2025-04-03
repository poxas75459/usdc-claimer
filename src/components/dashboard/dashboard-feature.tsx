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
    "45wLwT99ob8FUbcZR3H2JYTEtmqs3ftjhmM6eEQ4xj6L1NCJACSbtopbMpZMdkY4zbAXBW7oNP4Vp9AabfMtta1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oGoCyyNg2PbdSyxYL7fxCsnJLsVQRXPhFsqxCpRAjDAnkE1H6WJsLCZXvNCBmbkoy9wsX2AFov6Qo4NZ2WkBQu1",
  "key1": "2cnwLbpmAT2qM1CmmGZmeJ2Qt3LURGwX4fWpXxVZwHpeELA8VLns4N7fz2PvCPRXMkWJgi1BbQUj9bJy2qCHikG",
  "key2": "3iSN5FKpHtruneofufvCLDewRZjTqEhzWzKJmSvvtgAVLeKdy8s1mzb7QsFWtivx4UbnqeX5d2zmZ9zMDG5nRjWA",
  "key3": "264fpLUVxdh9qYgCYbAiVQ5Tc7yGyfqffwE2JqL3CvPZRw2ARNum4HP2epzdr6skj2kDSf9qqSVfREKTbP7sTcXW",
  "key4": "jT9G6UUCiMq8D2Rfgr5kstTYmyKfEQA95B21cnU7hPkveNFFgXH47M4TUfW2NS3WnCEHz12yahfstjFEKLTsnyJ",
  "key5": "23VddmeSG9VdXcPiMfA4smPU44Z5skKebLcrUSTKjxv6r4RToRNwZLKgdvF1TtNCtZ9R7sGAJTvpBkt5gMTZuuzL",
  "key6": "3S4xzwDz7nozH3jMxuDKsAcXkHcak7atr2x72fSqBMHY8JqgfVijk6DEjV2uPcButTAH3A2UiXeQdutYDcRh5XAC",
  "key7": "65AxjKiuxm1L3PrMSN1hj5G8Tq87moR6sfCuYeiy6pvoxXVACHVEZCjQGwg2hQAdUbLznhpL2foN5LLhzYfAp1Ay",
  "key8": "3L9Z2ByNktRjnnreptS6ZkaefmB2qpFUsAF9oQwAosKnvAwWpkab6h5GASW8NzMNMHU3TXVLWVqsNQSfAbjQ3VX3",
  "key9": "49EBJZ6N2SfwznXJFCLuzV7nACbUbNaAYzmxQwKvKLSk7xJwmyZsn2ixvL2ekPw9Usv6DAKtpmkexQzJfyWCEX4q",
  "key10": "zfc936cypLRNeshY3sxpvjN8HCYmgSdZGPWZK4sTiXF4ZnFDyrHCQw5R5j53uwny49TkbGbCHRWcre1PiuixnQm",
  "key11": "5MRFRXUEfjhgyrhX7roVA88apZz9B6awtFMRG3xz2ep24s7BTAvVEPHu8uDHYy7CCsKC26G1m3upDooBm1Sj4FFY",
  "key12": "6199QfqWdZGvmZGQQCaVGSmUHQZTYnWW6hFMA93XZYGS22UNPaxFLywmiNDDZ2BFzJwBGSjiHN8BsenZJ9fH3j2L",
  "key13": "csEgKhtEkuwnS7d5yMbvm2LXgB6BnHUh6ezSKXT7CAtEMXW3C1Re2aY9jkJJDoRySmFqAxALMiPGF7RAu5FyoqM",
  "key14": "5zUtkapURw4ivoJ6t8nqPzPgApYnrjE43gokTJVhftCPcuKtwBDAedQUVpazGYPEHNs6iSH6xYrBrLYWR9aM6cJn",
  "key15": "nYa35buStScFvzbv2hHCq66ztm6PCj2XCqhcF6sTAjdhd1cXvtjtQKQe89PSTyWPoRGuwnu5v8YEdGYbgo4GwwW",
  "key16": "23qXTTtP9kdMHQtdjjzepk5L5dihd6JHkZnyv6SFMirfXcAS1yNSAyQD8anBbpra3gWv7nLTFEGDbvfnDXEh9wfk",
  "key17": "4LNsCrtSnrZ3mxpFmwCB4uLAd4zVUAPp4rq3B9odNEvvmKntF9pUdJYp9vVgYSLwPS2anoAJ8hbmH37WVzvbTjqo",
  "key18": "3z5UG2m1fqDRWE4CqV7xhk3pouCx8cSisRysFb1f3j1zkZA3M45rZ6ZFRWaeFExJ6ZwJjcfN6HhvVP8aoLoac74P",
  "key19": "3BwK9HFNvekvYookq5Cghbaxm6SsnZQoacXdjtkX1QCeyYgh3m2QGuqVPdchPALNy8jJEiAjWtTJKFx3edViQUQp",
  "key20": "649DHK5WriHih33qZ33DMrmpemGLRhBjJ5B8qTwipS7ECsonGmGoTHWgG5Hz2RqXsAzNSMmPbjJ8NiXaSnkDER1N",
  "key21": "2VM9jds4nFtRjpLKNm9eAiSEayRmX5PST5mVf7NeEUvcmgjBYVzdc4YxUkZokoxPLtMvRo4BEfWnWuGVzeL6uc2c",
  "key22": "4nqqgDP2yeJsYD8JyvU7yGphoJFP9L2cYfqEyUPcLuz9JcTm7tdRi6oTrFB74LiDjoZTggYrxzhf68Eh2XwzYcbw",
  "key23": "2EwFhpjf2CvNNVM1NZTauvhw5yV4yKRTBhYEci4kgrtXEDRVxSf4GcJskFfVMxuM5amNpMRcdN48G7w84CtH9rLH",
  "key24": "3B3W1i4FquDANixYxpdKw55eQF4Kz8UHfUhT5EeKe3H3RvywhtL18STCkVidn6M3vtzQcDvxZUu4NdMUDe15hQ2y",
  "key25": "4ipP1m4RETmSGjfgfz8gnohpFi3SGsZhKYj66yFDXVGEK1PY8wzwRkXzaduz9pwg7jp9W3xA9zB1gm87spGCcTyg",
  "key26": "5SwgwNEVcd7pfyyMYCQ16dmR1AS4XEkL793kZmADrG3GKHwXEdmS2FEoTXQsZrC2qco3jH3ZcC4B2ct5mpbkNJHf",
  "key27": "56xCq9MNsvk6LsB5MCmSyomdRLh75nqGGhqLJKLNf4rrxHSUcF2yxwbFMyTqZrHNw1nLvgkiRSeYG8Nu1sa58nSN",
  "key28": "4PZKPpXJmdagLqnMmC6gJ3jUNN7hB4S5wgx7Ra6y9sTYGuLmnKYEsbw3iKiEGLGK5XigPZ9FdBF6c8UQGoU3Gh3g",
  "key29": "32H9kZjNS5JesVGyW4RwmJpAK5gxnVVHwSsw8Gy9LeaA6z63PBi5X2bdtGy5x9CXoumi88s5dE5nNWNBiVCJG1x1",
  "key30": "4zGW8AUbDuNTw4GAmg4fxvHoJiWq9oiWDckPQkDmrZ6vSUswyc6qGG8F5wnTN2jSt1kUxQUgRLEUziWF5yynSjGx",
  "key31": "5WfgQ9f83sKwKNDc8NAa9gMMjxgYJuu4iekhmHwrSVWZmoepSseGWHeRb1n15fXK2j5dD2f6zaZVUeqzt4HFVWx7",
  "key32": "4CrCyCXUgjmscXNbMnqu525dpAEHxZDocaCHS7Kug6L5D4qwMLQYJbDfzj6e1cxW1TEh4UkqXnAkzD7PtgqcCB1t",
  "key33": "RBEDonER3jAd4PTJhhFteF3fD163mAVgixJj5FsoH9gqiZ19uvpjVHZbjdNps96XgME9DFpcsA7MSveCbGVBE9x",
  "key34": "4JBYJMWQvK5NDTjYMLnFE8Yiw2QzqgSsU9EJamJ5dTx4p3Cn79sZA1Fk4WoJ3mQZidv45KCH5QsJRkSfQ2nrh7P3",
  "key35": "4GCuS42PbHWGv4xwwghTM9rNguXGqHH7CqV9LyewrKCqcLEbzX1YYJtQiXG1K7GoGufyhfCqS4ENZY1v8C8W1zdx",
  "key36": "mnnra3o1s8Wk9NMyvTFyZ49cjJACERH5HL9mYU8wUJuFDBZDrWjQVhsKGPzgdy5Ym3iqiUYcq9moZDQBT5KesbH",
  "key37": "3VQF77u1TaQh9E3nnWvnX4AEprmDhD2RgeQ7GjdTKPuSBSVbaQ9bCirhZbbziDvyf3jthMidzXTRKjbYSuj3nm3Q",
  "key38": "w6Vu9JFtbC9kbWz8vRksa3ahAaVU3Nbnr9usnNfVHkuDpbNb2RtaY3jbH9Jv6QfZy2sT1BPJFHFUzzpJcsxVAM6",
  "key39": "G5p7bnjbfUYRYXnJyJJX6HtVzo5ibi3VxWvFqmzb3JEtfYQQXRZzP5skC8srTWhPZi3GfaQqHULduKE2YchwuhB"
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
