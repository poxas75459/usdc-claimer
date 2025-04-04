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
    "3BnaMAcVJYjbZJsH7D4R231A1b4dNsc28KCXbJy1AGAa6JRSmdqschChcnuaaKdgH7asFwDaAS82Rr7BRcxATbou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zKAeM96KPPUWew2NHkhq942i1Ro9FPPk66H1JtqiVYaSJBM7K9A8kP5G5tCpb8FHTaWV5Wws9iLrBn281Tqw4Nw",
  "key1": "CcTRsoSLeuK6f3jNPzwGziiUSPn1bKcECXoZhD3GAbnWhw3UZ2yCzdXKyof3fLXPZYSWLdHkorNr6LetT3ucfVS",
  "key2": "57fqq78Qvr19QSzjHKwRbgyRN3z7r9q5rYDFvkiVZMXYjmv962yseXZZzS3rfzmPoBMAgS3sgEhbbfPf6YUXka76",
  "key3": "3M3GHhy3gmkyuC3WWT6nF7DMJrpWU4NnNTeBZDSc41VJkN5Meojd4Tto3SJFSarQqBHYWHot4zyKRJFmVk3H1gnA",
  "key4": "2moXBpseAiUQ6SUht3tW8PvEC6du72XaS3x326HRyn7URAVUu2ZZd4DdrdwYF658nBxGTqPgEK4au2qT2zFdkvqq",
  "key5": "355iBLoJvoYBhtHMJ5Fti13h8XgR4AyGoUVvzWU4yfkTqEXMUTZdYnE6H6bPTceufwC8pbUWUimhRwxzKyHdvMJ1",
  "key6": "1HpGMfVNqV7zfWLQxrZnTrdFuKkqMbCKw82Ux49fCnv5Tz28eWTv7RHUpMwnXrwrH8oC9cgGLVLvrBu1VuMdF5L",
  "key7": "38kvg491ooJh8HpEubTo3AdVLPaEY4LiA5nvV4gxFmgAgz64Fa6eWXTHrQms8s6ZEW4GHmwBoQMqkRGSAybJbXPn",
  "key8": "5QHTs4JPeBm9fBS2h762ok5ErhC4ArnfC4h3Gj5MSHZUxDBYjHdEmHQZ6LHuBisu86GUjGmD9sAAavZV3ohCBXkh",
  "key9": "5Jm34eV5Gno4uTbK6AHzWtipXjQ6kUTV2cqK7eCbGdJV8ggGxiajpbGbCWPWvEMZh3hzkAJT4bPY8Pkex2qmhquA",
  "key10": "4ZfUroGjuBh9VXDoj2u2WNmuYUR3XQkZLHc3wwG9HS2ZAu9vyq1exusydg7UtvguSvfj1vKWuVcWj1EmW67tBAKS",
  "key11": "W8NgL3XPEN6DvjJutAA8NztfRjh4Ca8yJr3bcm1eijqjWym5gLD7ei5VnsRi2WSzuxrBhrgfqAdNzsJHd8kFF6L",
  "key12": "26M1R5Gojj17zwzrLumVx6kzrjvSn2hsDWNJDNRLAv4PYXYZvSTJku9NPCmUbJymX3D8fir4kuCxQBvWZNnm1jjp",
  "key13": "F39gc3ioyKyivwh2ETpabNQMfJyaKegyNR8sbm48EtpRfAApQv1QYA9MnXStRBRroDUKcb3u7sKTaCPa36V1QTh",
  "key14": "q9SFR54yVJkuF2xRjhE63ej9X9bTJjnvSLrgRppsRZEetuzxu3BDyxM5MSqYCmbqwVgA9NjUpYfFFgDxXcFEwg7",
  "key15": "5Cw5Atkomdx21t2kF4LLzFZKsAx6qrp1zeLAkYfCJXWQGfiKHtLMHss6ySLnLmno5d7HS9XH9j1jg6s7JBx2FG5N",
  "key16": "5ss8kN4U5ihi5D2QTxW95YmAAwNM866zy8ymAgqunapwmWReLuVo11tGmrDmCJ8ezr6wUH8wLWSThyk49Ed97SMy",
  "key17": "ZLV5Fwi7MRz1br3b45dv9CUy7Rg4KRF3brEtw5b9by7RBmrSw2rgMpw8uBsuP7cX2WaGiNA1nLNF5Zngq56zmE6",
  "key18": "o8QxmxXyfuyWUJW2aNeNKPCwwHn9MyzjJN1S3Nu67bvq4cxwqHn7RTZnbLsmnUmzqYaVuYLCRhCbPkAjodTcQ5Q",
  "key19": "38LZ2hciU5UVA6TpY2H2ruNnEh5M2sizKErexTHND71hY2hKNc1nndLVf76k9Cvd1Egwk4HpqViUNaZSzimc52YF",
  "key20": "cDL38ZHRPWCpmyavjr8F6e77NKjkroMtPz8xpqB4tsD8BAKRs9W2gdHATSG9nP6Bs1um5idP58s6cLj49HCrnj8",
  "key21": "4iAcpHHLxB8KE3J6fFMUUmBtX6KKuZTZphnLXT4WJTrbeeyeELXyiBVhkrsS7k4EphHN5pNek1mFk1w1tzvmiWoo",
  "key22": "xE5A1gBps6SyNX9PCsDqJEzSua9pKQnbUJsFdm17nLL77FhTdPAaFdKYXt1NQG2eb4j6dwzTcLjfJGT9L657kpo",
  "key23": "pLzyboJXvftrNWtSyoM57EGncMJ4W9iKRwvSjnryKmiiKj9xXJp8BzwxLQ4AJdcjErC5wUUE2jaA3gWkg4G6uzC",
  "key24": "4BZQTYHQqyqMfK6Au5j7truAca1CrtpCo5mLzyp72MMBSx34D9eGU6Ej7RxXvaPx3D75yHBEEzUUeqCypaazo6qF",
  "key25": "2uFNLRcGdFd1ZwghEG5jQXf2yHoWeiK3iRN7BZKP1AGZ6JtqtZvSHvo7yZ5yRsXyFwmohv1pFvDteLxXQvq2BXxc",
  "key26": "4esZ2b1KxuZvveSmRTrbSGZVwNyhm6rS3HVEMysuV6GQs26HtpXh6AQ31MasiZjHca7zaR5hQcft1snptMn6hXmD",
  "key27": "4MFtNssryNWr1VkTBJyomg8P7yv68dPzf97MNJ9qUmSnTuURDz6UbpgPnQ7fwA1Z6B7dnr51XXrDDy4kVgbb7yVD",
  "key28": "4CsnMfnxwX7fTxVbb1HjowymoHLVQwRjgfoBfg9J2NKM8mLghSZtgyNqPX1oe7yDaqLiG434ssS1upyQhbCnFF56",
  "key29": "57UE4jL1PVgyZVER8FiEZMaxTQMsmr2UFiw8T8hhtmjMuXXAi2s1c5K2QAaq68xQhYWd6eAiytjADJL3Vm56VUGD",
  "key30": "qdJk7NHRxRbSQovUQnHhuQ5g8rQfb4wjrPmxWiP8UgC4X89pYGHj22ttXwBa4hm7kMjysQ57HERduYYjWvUPgGZ",
  "key31": "5VAFyaojrk4MdrQ8KZP2j4KHSRQFq7UB3uFiKxNATeZWUDC8Ghm5FiB6nx2hciSzYQb4guBz473smcDKrw64rPUe",
  "key32": "2tTCaYpyN72YmB6A1AkfMBiaCSKmSDASwfvN8N15guEduqwjXs3q28RhNVnREC9Pg2ZL9wWZVqe65cpJoLv93TNK",
  "key33": "5MJ58nAK35CCtKBhZoWEZHonJnnLmexPqPfCB9JuzuWSN8CQ8zBzT6pMJfZ2vpDZJBmriajp5uuTvssyVXUoRKUx",
  "key34": "64x7WxzyKSMf6QGgWNW7fHCXmKJsgL93mZDPrmkLH6ByvFB6VaXTSdyT4pcwm9CgGCQTKCzpCPSjyxZ72WoPvV4E",
  "key35": "5k1cYho84mtBMzUppR2GQKU9rzuMFnX9ArNPqMjjKkUDCtTufBC2KLrACzP4T8ziWpkyUCNMyYFc3SBqAtFdXiRb",
  "key36": "5koGzNBrV2cGmBXtb8exMogXcE1i1ybjev8L1Ekh6qHPEkg4gXK3aymozPQJ2vBBoZDBRrrmTJcmLzpVjpav6oPp",
  "key37": "FKYg62KE3nazCXgLmuiatM4J63eKECiQ1RvHNNCLuBQZkVeQipKh6ipmHsFCLg9ch7fCkdaRo4hdxUTpmHuRJnh",
  "key38": "RXdeZqMQfg3Z1adqYzTeZNMKLLavAqGJjsbPzEzddzw19qFDn1gjLDfRD4rdexbMKwD6pzw6RjYuKzsfvBC8Y8N",
  "key39": "4AHUuLVpoAiBS7H3vwWuL1Rk7dbHmf2mdvrvHDbWgPC9zDVaShpkpnBvRkVCjPbUoXEkdhBGXAZUqEtd2tVwuFh7",
  "key40": "478hbtasSYMR6EiqWuNzZUXPDZ3c892LZpRFZ1Fnv2VMBVcMdBCWmJfMayxrp48sGj1EdiTgysi4uCGv1WBkm4r4",
  "key41": "4b6xYA4FQQyPJQAXPbirpSYQDsMAwFkXBqpEHnnLjFxD5T4EhDtnGHUxwHH6Rd7V1gBBxmujhSUpeQU6ANGN5WNs",
  "key42": "41zeC3sH9TZiDa8WZ3tTMXdRJQyRR7nxwVKyRTHjMzJ5zfAjQfJELLGAPDk3WkM1oL2nCi9NvmCSD9m3GgwuuHdp",
  "key43": "5Tu9ZPFx29DHu4476wL7Us3coQYssFAR5uvpnHDbeuCzZEPhrxcesGUG5KjtTEPUS4ti7ZTE5apBwrp4yRKo6uaL",
  "key44": "5SFvMdH6w8b9za47idswVvNuWZarM86PWrQ2Aq8sozGMrHjLzBsTqmgHXqoR9K7WGermB3tPgiXNX2Ro1vB9rfue",
  "key45": "31XyJK3uX6nFRD8gpYbY2wQe5MEVtpD3YWP7dqu5UqsVQNe4Tb4Pe9C7JRZY6vVEJ6o2CgPpFt5akpb1qpcGYKvw",
  "key46": "3zPaiwGwKMwqKnnZV8PifQNhJ7jBGdBGnpb3xRdJFy5peHmGRBFtuJcbUmGsRNyYtaPyabWys1kxUi1mS476k6pg",
  "key47": "3qoHuswjDvxyVDseg9NuyYwFQ79FS3UACNwirDPetZxWj8A1QkNd8kkUZEfGqetZYRY3pUZWTjndSECYoQ63gRWp",
  "key48": "5bGgnXoN6HrUeeZUpNBsSED6UzdayTyZHcaFkxhpKJu1kb7t22YcqGHpZiHNJ7QpaMfGW2hNcQzKLT7AkdCP9gYd",
  "key49": "5KfSkXCWayZAcmvu6QapmSwYwkawWXX6z3o5xi9SEz7RJbGyhb7C15beCNqtDiDNV66uSJQmZo89bVbps6E6CaCR"
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
