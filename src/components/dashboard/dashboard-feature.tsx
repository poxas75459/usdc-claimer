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
    "2ZvGgaMDaMTKjAGDEJAwDSmxt4FFCTHsGHjEVxZgWoQww2PTH9dP2SsdVGKLJZia6LvK8PQkLj1rVRYov1Q6WMGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JekyGDZYXUGmw5nVLnoEQFSnM51N83xdeCLeRKvTbPvP5CB5y8632vkYbmo7Q4vojnjQ19zJE3ofBXzdnm9rN2m",
  "key1": "3iVJeysVkYHZGcTyYrHro5mS6AT7SiYCh5VWm4tepNbeSAkfABA6Mkpw4TNc9aAYeTvnB7QLLEnuv5WWpvpGpapK",
  "key2": "jRMu9swx2UwUqtqzRqFgm6SREovmycX1aJPcN7audro1qk4TFb7xmLuKyYUCFArh97Db6tmF3U9XpRYA3mRZ5wy",
  "key3": "5gcfgUcZjZhaHwKzRiJ1LcLBEoMqp3EDDMpsbSFvDVDBaNX22sPDRjRUisr1kAKbeR8uyobcZoCqDW7npTGLNB4C",
  "key4": "5whrvw2ppScDivk3684Ayju1tk7joVVYVgyqYA1vSLnFS4ndEQ2rrGsjGCYSAvMT2vqWH9j6bn1LhD1iacSv8prb",
  "key5": "4tMa2vNs8qUmF4T1rdveAAGHgyCkoNNqHauYUx3oJWdHYGR8Bsf4LENRzDexyjGtXJaUrdW5Fravyftu6rrE3WmJ",
  "key6": "5nzfya2aKHjpE2a14Dw7g2usV1UoCFFPaGzm8jJHKjpy5rsnjQDTwsq5yt2GqtRgHHsf5UVsnEnPrNQgy4RQFg71",
  "key7": "51YYoVCy3JtBdAmuCw9QWaH6LLmhZiyoZRk1yJYd5oGojWwUGDzevqxuRNetf4x1bbNZ5Epiz3XioZG5yMDVp3e9",
  "key8": "UXk6cZARgL11XemUamYE82nEBpCrmst5fx1U7X8zyEXPGCr1hVXbkcp6JQqBHKUcQzMt6DX59W8mW4QwThaJmDF",
  "key9": "3yW9M88YcJsVFJSBa2SqAekMDkSZrjA9HfQS9CMN7aGNm8bXvseJy6eMEL9bbpuZ7KxiSm9Ts2ShLFv8xjRyMp2X",
  "key10": "Nf3ma5WjPE6HnHE3EfkCJNEWprAvGhseNYrMHFunKbvfW2iyx5mL592k7Fk1saf3HL8zqMb5VPoTrc7Rb8rDpWh",
  "key11": "4e9d92VDsN1XbfpGzXrhrcwdBkHfBn2aL9yURSLBi5DBf5VF2HbNhHhL5VFEeLSboNT1omx98MPTQnt9Brh3QHdU",
  "key12": "2CYXWR52HnqW6dhZwFQV8mAPBYMneYsu3gzRaqnU8Ub8xmtwH8Tn4FwCQ3y7YNKds2DxWJAX69ZyTBMpmVeJhXVp",
  "key13": "63863gAmkJ6rS6GNJAtvWJvE4HU1Ug6ABmGeFFFC1m6vTEjYB8KFueNjDQBPg5vxgqHc9pSHNtLAHdocw2eJJbZ5",
  "key14": "435wLSQNS453W8qabAMv21ggwvnL6ruKMb8NXnf52DiWfqH6ag4Q1mwjPDStFDhX6qbk7F9CyiLJtqLJRHqm7XQG",
  "key15": "3KdGzoXomLT3MjN8Z7hWyXphvct8c8RSmFS3dpqtKQvrtWiWcJ1uEgyqjhdYA8xtQZB5cqG98khxvWaxWRQzT9s5",
  "key16": "2QvKQGVtRAoaXZB1rLQT38q8xVHsqPFkfVVox9xVd2cgXCnXonk4XNWoaHAxXpaaGVFeUCsaHE6ydeffqBoTrvF5",
  "key17": "2jmHseufUWYcS7RYDkXdeX5toxWSDpsmsoi12Z4vejxxTD52NsVRfEqoba1ykx9rtYZmiGdUemKtDLn3vxQh9SdQ",
  "key18": "572SAnSoxXd7KcfAqa3Bo4Fgof6ZLZrnjDt9EXRhE7JSuRU366Kj3Cn5AdxGxqXMyydc1CoJRzgytzss7Mr1Vmtm",
  "key19": "4UtUWh8L7FaN2DG6x4rxFZK5Lr5EmKweJnhFR41nEC4DmFtt1Di1W9ZLjPpCDr5cwZ41gSbKNWcycpfsL3znuVy1",
  "key20": "3pBJwWTurmqSJNGcuiZDqo7z8ur2qpmUPfJ9R2DKsswcqJxggWkm3ghMB8rPpGkE3Quo5CCXvfYbmQQJ9HAABAAf",
  "key21": "4F55zB2XnMnSw7neeMvbhBbt8pBQKAzYDkfkM7EYhJGBFBd1sZN1A5CUp9HtZMDg5Y5oCQNhpVRhQVv3xgwJKnBD",
  "key22": "ZWhcEecn6gM2CYEFqzqH7ZMfrwJGidtnNN2PisrfRy75PGZfY63xBW9bCmErmzkBHtAEuG2sM44qgbEyZkNxtrS",
  "key23": "48NXzQsidkyw9iGC8H1uEK1nHTLivrqSwjYMjyrbm4vdVGmYH1wEkctKoZmTg6AWbstq2a6YYjBh34jiCup8AZmE",
  "key24": "42hEBejW9HdBdyoijgKGEZ6xXBRhFDxyVttufQyFevVE9hoG9kLKHYGuqqiww5s9HCLyLcu3G2QacJxPRddJvb3k",
  "key25": "4Lp5FF8U55GGcXYVo2Em219FvzbnCZdWrtmWbxocSVbwHuipq2Sb5BXPSxYwqv6yQx1DxjZhGLSTRpTNmdB6GrDR",
  "key26": "7e87yoJYVWzdwgPe5xMEYDjJFL3jxA3JxaZauLhtzGHEVoTdmTWZWJDrKucgzc2qmDyRnGhZMSbH5sNsCzgEbWd",
  "key27": "5JdtneWTPeNUVTs4FhMDxqZYo9k4c2o6CikzmPGX5bh27RbtR3USTHQmkRdtZBifiMpytQ3gMnKod7LZHwsQH6vk",
  "key28": "3MdQytqdusssHH4fz7fxpxX1ZB8ALEUxx73Q8Bi6AfahvYoLLcvKG6mmUyLn2v3WXAkPEScw6PB6dwF6qgX8Wq1a",
  "key29": "4QSspzJce1PqprscTkYw3ooztVKiahbAMeq54RAoons4KRkXFSABkBjiFLVzr9C7tXEcaHKm6MjtgEot4khsdB9E",
  "key30": "4nF7gnrZXbFReNdc7F7yZXNdVhYSncfphxeRuLzpgTS4gvC7CwFRCk8mE4dp69iHwLmfXoMQufGy8h4jBqq4KRsp",
  "key31": "5LJJDnWto2zbcHqjfGtm1Y6qeEczJAURyE8YxbDzWhfwDXZU1zJvMxWs29bTz5ueZCtTcwMVL9vntg9syNTvpzYc",
  "key32": "3QQ8unJQJtpxpg2XQF5bWUZKaSKjCgBuzVFt7tkg8do6q1rfeXiqCVB9G6qjtxgKDDPgrApKcphrGEAX9xHzFVma",
  "key33": "5UeG8soEJMeTAGLki6bdDqULw3BdDG2tApHqv1gw4D71jbGZ6HAFwQ3B15WwuDKDAya67TvaNg7wKaS1P6fG1zVK",
  "key34": "w7GAiAbqMb88hpmXZ4bo8xr7tNTw9DGjWxCCY5a4RvZ4xT2Fs14QsztcPRNYzK5xYgCo99inyHVwa8i6J8Ci4yd",
  "key35": "64iYkJRRLFhG9L9j8mktVuwns1cHk19bCopuXVDT6GNR1XrfTonzuQuHZHaYMbccvS8Fz1vTh1Y6Xe3BBS5g9QXM",
  "key36": "5yTPYB8mLg9idNVafq9kcrdXyKJ3hpbyMGxaZX8da8au539eRoe6SR4WmHXDudaapAge8Ev9bimoFSSbVauedr2q",
  "key37": "5XjUCgnU1C9SznwrVdETja1tkzkoPRVL1R1iSdfinkmtGToiaUe123kJ55LpuwGY7Wsm9i64onfFm4uFuZBmg9oH",
  "key38": "31Q1ATzh5G21ybtfqwSp8fgd2qSuUq56fkeeF4fR8syVEU9z5hUjqSJinMmryDnAY6NM4zn7fzxV2ofqnVXFba6j",
  "key39": "41vqTG3XEp6YXmJP6bWwSXVVRgcXMrgFkTxd7GBgKeZ7pcTcHq8zV5TaQNmfyw54YruRtrccXifx2624GvAopdKF",
  "key40": "622okt8frykQon5dZtYM8uUvLRJc7kGZNHaqmECrsmQNgzuF12k24Z2gPdD3AT9MEYJ36LpNVBx2e3TUyCgRcx6P",
  "key41": "4mmDR5aCZiE6wbTzr3Crmtg2kvGxbe1NqNdCoVJZfHQVkRQ3GYuGxAuXjXaTYva6hmTX4D7GDJLuSsJp6wYP26YS",
  "key42": "AjLpnnLWVK3mr22TuuGDDB7nVPsLM9BwYqzSEes6FJsf8mLt5LhVjuohuSZPjXcNJoFPEnSjRcyRazLnH66NzER",
  "key43": "fTKrCBvHtJ2iArRfkxjy5aoW5mkkTu1xDyy2vA2VpewaYhCrUZq7nDvwTsbpyroPXaAmksDbC2T9wzbtDdch4Nc",
  "key44": "rVMmbuR6wRwNJmDGrm6NyHPEfPqwoYQkCMWjGGbPsuEQXNfzUiDPX3YMwdU89advzBW31AA5GMC2KA5QM3DwQCF",
  "key45": "2vzBixKDA5nQsbAWYPHshNEzCJE27DULV4R8BpaCZYg5LkpXLCq5BUp8wiNAjfw5KkGBJzUPCWnrSXh9yxAgPKCg",
  "key46": "5t8fqWcTeQoNroNfc2fJb5Qxhf9tFR3HWu3oGkNcvzQAnS9aHK4P3B4tcCpy74czwzKSeVE3TBSGMdJjKhB7shDN"
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
