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
    "4FoK5dT69roCAJD4SwqvthCkQks2tiKuobuoawtim9wro6m8qqMvxNxsMwZZaLrABwppsE3fgXPnBTb4Y5MKbAg1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53Tg1hdemM9uEHu625NM7mqm8D393SvaD9GNuUEbSxwnjgt1NEQ3Vfk9fAbUXhjmB22s8bbFYrTJ3XrZeejAscYf",
  "key1": "Qt5TVSpcrdMR5WiBh2Ef4P6rujJw7VWR38meTh62RzLSSs6cTuaqAeFJrpa5pFztk4CWTbuZTmT8cgFVFfBpxcf",
  "key2": "mtxini5vwxs3eV2ChyxTMqoB4o1Qwn98r1urrow58nbwbMdW9VRYNYhw1LeNBiJy1K2MzWWfKebwUGZTqskANt4",
  "key3": "2sumrVyCcEwEjRGa595JR7imP4UuD2QuwwQxqaGoQoFQ5Kwxu5P7jrvK6JHuhxygyPvazdhKXkHFZpe3wvSWdnGv",
  "key4": "299iRktcRbLUJpAKrvdKwTwwJxHLrgYk7vqkv1ZQrVZ5xykkxyr51jJFxYEPqnWBsGYdntiAsjxdpdnYudGGPdhj",
  "key5": "7yW16aHmXWZGLrMCrijqw2UxPGh4s8c7W2H45dhocJiPZBQgustPQEvKxQzQeKA9hpUf4JHXivreZfiu4VPiE1T",
  "key6": "5C3mmstbiWzjihbGbQiDWjDiiLPetV6nYAFzdCZA2s3zWARCxcjjqWmT2gNEfCd4FyEpJr89VvigDHgPVUf1GUXL",
  "key7": "4zu4xLsVZZJ4JCe4BkwmEBEPUupBYuFUscHreNRgsp9ByAyPL4TrUyVCzMjxvVyayfLh2UZQra2h5gV2kc6GTVco",
  "key8": "4LCTxAggNAvCCkmm8kZhK8dAtzzYZi5JggZ75gfzLsKoqto14GRHTgGC1pRW8NbFs3YpfCUYEFPnbhStRTycay8a",
  "key9": "4ZKwhRuU8KNzrJrjARGKF3wD2eKHHnPz32UAZp3ZyGS7aJfx31djEgN6U99tTg1VVSg5zY7NhKc2QBCMH8KBjaRp",
  "key10": "5zVRjiwxaF39wvrHh4iL1oPWnGhXgrrH3bUAG1WUakaBd7dzScDFkzYQ1ioxQN3vKrC33HegcceQjTgem4K1PRoi",
  "key11": "2ktUUdLEjMVFJZ2git1fiCmMgTZwcbsmGR7sXQZuAsdkJ8XFyZ9F7U8yohYcnLxwBrNh3Nj473fP8DoMaaKu5qqz",
  "key12": "2JGoShqUYiwYuBkfBg4EzdyQw8PVPu4qgbo6WF17b9reUgBb3qUTdkY9neyaP3NoAzcfrbr5WHNGWW9aVZdoKGZM",
  "key13": "4zQkPWYk3xD95p1Rfv9moNXWArNUVoaB32ezkK4tmfs2FoYuiFJhb11LrxRenukrqaoGVctqod7L5qvt7cu3by6w",
  "key14": "UuGQLqNdJGZLQWtfbETAG1DRdExnv1p6mVKZocau6xUSpdNadvePtQCBNjxf7msx22613GouAXeDr16tdYrdUZ2",
  "key15": "8X39X5s6DYAaRHnKGakCsYqMVHL8Snb9fgAJDTQkSJR5vPpfBBGFA9SNvWG5EWjXuGbx3btJ3Do1RPvWHHbmYjj",
  "key16": "BUYyjwbQRdbn3pRfum5nvXTNhVn31U8vDR5m1ftZ6KasT6nCdFZAyyYn3d3xn2NvgBhpZmMo6AFdjiKgAQfgagG",
  "key17": "5Yp2QWxQ8FwM96RoZrSAeQmaQ4TpybutceavuChy1usuRudXymKNtuM9StYSxjpMpXi21q2ZFJf37cZtsYomnqQe",
  "key18": "5NkV1SFRcPAyerUtSM316TMxgsLLxDTdtcGe59eEBNkMUPo46p9jPREyrFisW66paDJ3M9L5EJKA5sLfBWNK4NHb",
  "key19": "3ya4EMAMWfnrAVfEgUhfFyoi8VUpYY6RoL3zT3dbZvBCKQqrKDmELANt6MDYp67tZnKE2DDbYWd1Bh7w3nuHGk3y",
  "key20": "45i1S53gBG43ET5ctwHFtkHQkhbXdVe1LJWexRpBgPRkkjAjLNusYwhtX3rSTw1Vgis7e8wTaDYqas4VVn9MsM6F",
  "key21": "4YJdQz5Tetwqm5b2Lkg9oFxqSLX2yTDAXxQx1JcHLadm1Yu5KN2PB7zggkQarGggXhXE6soNJ9ypJCN3jgoySR8v",
  "key22": "eCdeSCp12rz6NoxG5tVrBcFV2TQjEuTFSpLbku8KksDiZCmHPCjZuBRvQJbu9pT4yFwmQFinDdNbtxFg489gBmL",
  "key23": "5ZvxW5oQ35YHg5Lb9aBHx7iwpYRGXwJ8dcVKNf4bNhwm4zM9b9xCWwuz7MPa6Ah5u3nooKiWdJzZgfgPnDen6haZ",
  "key24": "LeyZZEw7tRzeuubUahwVJDL31AE3NnuCYtmVTyjPyTN2vqe5UbdSaZnkmrGJ1nHcPsmSDCVs4sgCgBBNBSauYym",
  "key25": "3MNsoBWGw7ps1JPA3qC3mf6EiPq56SpXEC5CSE7xYxEvw82LLAXbUcHK58dgxDREgn1zKxCEveJzvgQJFT6oRMYL",
  "key26": "4V6NufuQXy8Z329uLmqkVBmeuD9WckWWBesa8VVER2fvgmA94Jr8uFeqSVrcQz24vEYwfbLViLySz7hdW38psAqr",
  "key27": "4VGrgQ3m8ov5irKrn7UDp97JVuhLeDxmn5fpLxB2PqVwhERgMPQHekCjLirw4qqAnkuFFCZ6wt3sj9kUCxYmBPHG",
  "key28": "ofwgSJKGM88FHCbA4cSptZMsUjRLD5nNvxk37dzJEUvjLgEQrp2v87cccBs2DjBPVeNdZybQ21GhmPMnskUXV6u",
  "key29": "5tvKd9qs63UEGka9fSqgQGXrDSDyv4FHmD1vfDhXhaKrjdLto99wKM8z8kGRNNpJvG885ZsbnXb7Rg5RRBa8Fwjo",
  "key30": "Q8B8JVZcMSW8aaaFqZphTUCZ8Yy6Qa3KiDs7TjpCy6GG235BBQ2K7USRgKZezJXyuKrD1XcXu2pRBhHxeaSKezR",
  "key31": "4QuWwoEZ9Tw9upfiDyNCPqc8wMzraeGkd7bzBqvCQF1me3xRdTZ261jKaXFS1QZzHy4oZM4U8E8GPr1tB1CuLzBC",
  "key32": "2nuW1P6gjnmMMRnABWfzTPutqYgYkF92reRi458gKvXeqXpPsa6o1a9Nqt18TcjWRoH6fvcVJWrvTnwrjSwcfvcv",
  "key33": "2n869rV4RePAQpsDoa1uWEZej1kuhuKNwhetyFYHW1as89SxA9k5uxiqzwiwfj8XRTpxYkChtKsqRcAGdb952kfG",
  "key34": "3R8D5W9eJyRi1RQJ5Y7uNfLS3gKsydHBaxzf7HJMKPL1uYzdbbeeVaxFze8E7UwbK2sytSCMRHbSknUCc579tgea",
  "key35": "64XLjHW8Mwd9jBrVRuVww6iSEEadCLEW17mFkHafPifUYKJE3CJxev1Hb1DSzLRb8uW2EVqS5TchZ5PafUi4ZL86",
  "key36": "4hPyG6VNDhchtJgMwFCB9h38PQwYKnS5mSBdyqAjp434RTXyy3DMriHGmndJvjvZvCGU4RpmP2kMaQNxjR6hr12e",
  "key37": "3ytcHMX1cbShZ5RWBDRQVhTkGUeKfr3eLW53JXKwimrpB2fdBkXkF4NgN9ruJkwtYdpzDK4mTQYZ9UHrnMFT6Ldu",
  "key38": "4q55V14unH7SjmNaGyMiuTC5HvCVXbouK7EYBbGVg3ckhdJNRyBavRAsopQ6CDuCYKxsEThBiEWMARV9dFigmS3o",
  "key39": "3T85rfFf6RXNgiyYG3V4DSemvdZ9kmpNnuB53zQ8VMHTgoAwyn45FpWWPPw2bBidYK7cor3LoNwfs4K6oBBE23Gm",
  "key40": "4ayA696T3GEk9DZDMbu5udyDDUK3a2mCcdaZ4g5ohVVMH67jF9EwHdZmgFBcC9NoPzN8xwBkYdtJ2n18aH8YQi36"
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
