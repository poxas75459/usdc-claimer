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
    "4ZiwTnrm7mtv1kergA6B3zq4ASZeJK5ktjJGBSS1uJS8j8Qv1r6zfgn78DWRgkxgKYKfTpjBvL4iGSwEcvLbvNvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tr66y2tg9VauaHqVgmV3rJXCKNZwQUtUgqNHpBD6AWfUBdYbVnqSXwjtsp6rzA115ec4mUceGL9uNX7gPWMZYYR",
  "key1": "2Ra6iAfbRWbtwuqbt4yMVQktRRtp7y4E9wHCAKT6V8iZG4M43SnugS5Ue1iDEkH78TX67q66na81xByUdDTpg526",
  "key2": "2nPn6Q4tUFZWaCcTdyL4kay2XP3wECSazysLyQsf88CXegeg5dgXoXxZkx91rKy8d9A7o4TpWqurcpDwUgQ1TR5H",
  "key3": "531QarTjz1H3LmJJWcU4CZ5YWAnLnxASYKCtZdb1vkhPsVRC5fQcaRuqj6Tr83HE42SgvxuSQMk87hy4HAk8EEfH",
  "key4": "2TJtZwqFdWP2bFbLKw9Xo14jR6HTgf7Hy7iDFzbkEdCnnzfy8Y4fTUjJqodK9aVXyzfbevSekvo2tACm2z9aKmNx",
  "key5": "4snSiyZTqNjFpcKAAtthqQSwKRPB787MyMZ3N66QD2doAsg7Yx1Z2TBtogHp9NE1QTHcGAG8vrEtRBiNBNL764kC",
  "key6": "ztLaKsmP4p1DnwaSnytxJCGin3yTJLujYgnRmHNwWzPh2zPDvTUTLVrH8UkJihVytj3K2qMpf3CxRGbUXwHARcc",
  "key7": "6frsBtgtfup6xgK9iAEEC2xD4Gr94pbn8JBaiD78CKWZKY12MuDMnV9vzo6GV9tNLZAs9gdSEszVvfswEXbKKDm",
  "key8": "494TQRdUXCEELskhgaL8AKWkMVgEtWU21xo9qpLd8FmvfSkRUq3ci6DwJjn4RqcBLdLJEBUj8FCwskgCteZ5x6jV",
  "key9": "2pZGcYLEBrSKVksRmhMtQx2XnUwH6UBoYeMPke11koWGRRGTjmivbpzJJc2S3YYAHiRDPAVaQPPu3ihAKfNn8chL",
  "key10": "2hGZ2nPok6STVeczAEyo7JWwf3PSrVNhbU91v94tjmn1PJDzGCTqCMUXuiPTJMD3FEvV1v2xTXPfAiqnHrSo7FHc",
  "key11": "3HJJ8t7K24sakhjy3h1mjc31TmCAmbsExQKCAR7NweFUxLuCwhc9WDuEN9t36vjJrfKaXq1r73gP5BmvZNzucxXE",
  "key12": "uiC4WC5f2t7FqaCgn1xDZtDFwgWWLjj6VdM35wrhTTbjfDHSRbsCSQDsjkiGAHKdbGiKB7dGoNZEPWPFtmzZVnB",
  "key13": "4tBLs9zmUCiVdzK7wNApgRyJnxiPuuJZ8j4b15xWXptgtmwboUpnpbgMVNXCbBK1kPEYYA7mWdWAjR3ySiDrPx6P",
  "key14": "5KKXkW3GPAAWD1Erkf8Ns7cNCzf3MmJHMgmCvWuzmoTuaV8MSYcmFPEQqgtsSUBMBVWHM32ftQVCj78iSuQqoZoN",
  "key15": "YNT7u51NDXsFQ3FLiCRKroyYDBSCsYzn1TVpJM7w9AuzAtdpnhA9GKd4mbk8HTboPKCLX3CwJriYuuyJgsFS5ti",
  "key16": "1QEx68ZPkr3aD61A4HzroaRwH5W8KhHYNLbHNxi2XPvC4mbB9tydmqEeKoPqK5JqQ4NZowxyJaUphRMQ8UW6JKv",
  "key17": "5tSrCrbExFrURxBVKWBn493WCkRJ7hZr6mHeFSveLLHeCv2wZv5Z23BTkhfmfSg69kjCwpNtGVfasHZcURmLziyo",
  "key18": "479G5GcsVFgFDk8UWPhHGqxuoznmGreT1NxDRfjYZsko3T94GwBXdwMbb4zRJ1khr3PSjFHLjhX6vsxw84MiASii",
  "key19": "3q9mtsrJQfLEEmzqg41r5GXWLrmiAcVLwuTvv7WUXgvE4KvGdtpXo6bho7DuyVNwNc77XYhnf6g4cXVkU3J1Qrh6",
  "key20": "PTm6LAgvYLrCyvLhFXnbvtBed2sRNBFi1Hg62ENVTL6AxPaLgGCW8FmLYJS2kxnFJaVCf3QAvJRAZjZWbRLXxWp",
  "key21": "5MTpzgvMzreDueWU3vCYAK6591EckPHZEDrZndYNUJF4XSvZgLGytidZRtsVcfuCqHG5PqeSVterzY63GtgZxmrb",
  "key22": "58PCd134HejNVA2mkEyjSpYU4WJD4GPSTHUS7NaDtU33gVjss47qxAqr57X6Wn6GHhhyTRWzeUm5NHYEFpHYcduN",
  "key23": "4fUhhyKzzX2eo155XcF5i5G7ZHcdGX4eogkhgfrEasTh1hMyNttsMqzqU19DffKAYThxPA8ctNMD3iyn3Gm4Ydmw",
  "key24": "4SQLtiWhnXduCfuBP5sR1gJmeFmaqM8YNnovY4yJ14BCAFCDXHNpHNuF6FwL2e9H6TbDQQUFvb8G4TtcoWTmpRv8",
  "key25": "2JdkNPYy2LTmDdWjS9cRcGCWbVMZHua1cUpFqc2HJ1pkJNAN9AP4VTU36EdFxkaspgLpzNHRJVCbrh6gNrf746at",
  "key26": "ZNqZwUe4an9hucHzNPCFB4nMP6GPzo7dqpmLeAhw4aJXsRYm4o7bX6V9afxjDhxdam3EyHpWeaiEsVAb6dLxXKd",
  "key27": "29Vw33mvf77FQyY5KiD1bi6xA1FYv8VoJVpdsM94gUjSguaiwu3i8rgrGpzLEeFRp4vjjsmZVG3Rfn92GVX7ngdW",
  "key28": "2aSNA4aqfvQmvFmAaEmB9wsi7mqY5dpVWTNmKDRoouUJ3CLbQtKRC8jGqh2wnH4EUVxEDV4fLeeo3j6HvtRS7dXq",
  "key29": "TS1f8PgABNyRkf5SsMMS2mthiF7JLNyiysxpgJqdcQKv8zYBkLe44EufbkT79T1z2hnqkUnmio6KS7FsEwVB7st",
  "key30": "4ASA4BWB51VwLmkEY1rbLmpKn5TA2YtckT6nwoHEGNb9ccgrQDipAXXiQoYbWY9tvb6XAxnYg8LHHN8iC4b3jVpC",
  "key31": "4fsviK3fDQ9s7JD2Yh5cPVnWRXXUUXmncD2HWvZJsPjeWNmdB6Shn7pKYPv2TAxdJ8tEaq9r2KYkUVnsnoxe4Gec",
  "key32": "62KoGstHTa8F8GhGnuA2S2qktxaZ6KcySkggkpT6vWLGydzmhDzW7uDPFMZjqUwPGv6QibWFLdW64CLMY8QLZ2Qu",
  "key33": "32v8Guy3zCU1UgsT5xje3xMrZEKFeCPft5UmJQ55rsrMZ8G6b9wJBB9rWXV5wbq7JNB919PQFdtSSi7zFKhSQmni",
  "key34": "5xw1VV5UDBLEFo44vG761SJcNT8se9hXDq2y8ri4RpqDMnmoGGRihwfiNFaS8M98AbXb4gQqgyQ7DNaULXW8sTGD",
  "key35": "39wcmjG2ZuGPHGp2EkVNHu1VTii3fkacvHg8zi16WtQcboSa6pTLiNR1JY2TPyZtq35r9urEayuoAMGnZMhRHTaq",
  "key36": "2WhseJQmH5TnZVDZ3wTrMPszegxmYrP8XiguQz2W9RCZ9i1wmuMwBgWCC8UKZbA4VVNUmebspgZExg9PYibZXWjd",
  "key37": "kiNrPRnFGfaiHvfLpPFhessonzjjEkkg2UVT59f3J9JSAGEDZW9JRdpdcYrECVSnE5Rm1iidPjWkLpBjfEET6mR",
  "key38": "639TAq4GGtDFtWSG3LExHvYm5szNyMyZPsP1VJz8fAr8wVwUAbyXWKY6DmucXr2ZvVqi7EhTPubtDe7MBHAcDdkT",
  "key39": "4VNLLcPtjYvvPLPCqD8DbWia5f6g53njDuKnhsxoq8ma6XbgwhTJausA2u7GqaM99mezHrKUZYz1Fz7iACckADma",
  "key40": "SLWBd2zPZybEF81pKhXnLY3KK7A8Jinp7kqum4iUxTTMfb43mcfMckzuni43RVpb9CdXmhgex2LyCymvrxaMbPq",
  "key41": "3Hfo8vKWfdXeQWYjFUGh8kyKK8Hyjo2Mp9cQz6E1R8rNFQe1YKuYNHQYWs2Gu9hvD63xpVsciY7pkBkXDS5aySTx",
  "key42": "5sPwBbuVVJJnJn7uG6opu9WhAkYGC7a1oZb81Hok1ABQxQERWNv2x3xDxuUP7eHdBcUsxHFkQ6D7WUPKZchuLUcG",
  "key43": "4S84MzYfoJXZDeiDGqcSxuvqEXdSFP65qH38ds6qXigSjjCQAKSMEUfu1nGXPqzNXD9Nv9KAWSDsLaqRBpT5BFgi",
  "key44": "29un3vFx1NPbUE11YQSdqBVkA3vz7AdXxpySrPhY7U3ctFQp8E4MHiAz1tQyRcvR1WtpAfWXnuPUZq1TJq6aabDR",
  "key45": "pAuZfwwEqTGE7Lss8eRJEeQBZGoQK2GCAHqPBAivxUE7JrnxZmBwohq5ToX5TqVjBpFEvPTLVjB76bSmZxDEADM"
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
