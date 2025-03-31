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
    "3yszpyooBoayJNmpkfLDwKS38uYq7TkQoy8pqtbecRUrUpqS2Dgqj6ta8RoGqSKr9TPxjBLeY5u5PFsyXBAFCNx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37oyA6R7Qr2LyS8NhzY9Sx2KXC2JcwJ6G47vyBL2w1mmS6e42Fzmr2q55W4dLSgMzYZ9eKDNrm4L3jTJYhMwnP7J",
  "key1": "2wzocFCkHxUUZETSqYG6BCrZLRsm1Q6GFVsVsNJpr9aj3w6bFvVSiBLksjwwqWdCMQMjcsXwKZHMTpLUovjgtH4Q",
  "key2": "5pDnJAEf734dJVSdS4Ch7pud9QqfJacrkenM2EtMZi49c46xZ3mb4hWo8kQoWkjdDAga5SCNfWCikpGbP6pbBhYm",
  "key3": "2oMYB6NJ9R1W4i5GJEo6UQHAiTnhy3xq4ZRZsDyru4JHWiiGjz9yMsUufcKJ2uyC5LpkSAH2dkA8dZihxwKxk8hA",
  "key4": "2S5Z9BteZoJ9rYYqs8ZvHb4Ki5D9n1TrS4Nas8xjAFLgpo93xisbQXrHBy2cXF5rrE21H7amq8xNSP6htgPgna8",
  "key5": "4txRKjVrf2qQ9GFGK8eSCpE6VN8Z6jsajAZFTNwZ8whV2UXN24up2FnQZZ9EJ1qmMFbHvrB8vHmtfjPYMNnkWVgg",
  "key6": "2sCTiEBttfLCpq3xwyp6ANgE8Mxf6yFeM5UiW7SKi8Zecsi79S4KuxYgjUtiNCBmsUEbmDbLKnnVBFoFgYzjtfHP",
  "key7": "nwJzhYYYwrkRq2LasEjCHX4MUHkSVL3ECUZMxKu2mCqSJVwwzDbQHGzxm2r5J6yU51K2gFwoSH9i68bTq1DtXb7",
  "key8": "5bmKtNMswEzVcX8XKXDqDE6zttGQKbHVVCyEKwspsm7pGdCJEi3zLMxTN1JN2cJv3L2KoMU5JQvEAqwnnj835krG",
  "key9": "2TtsHGC8M7fnyrnWZpCrz31m6Mw2aHz2E9BJtxSkAmzaHqpYHayZWkgKZwGDdqAjPJp9c3qYsVzwCfoLwWi4ePUT",
  "key10": "316dDSsbKc8hRhLcvkiwKrbAMgXz7ZaHUpNHd3QBj7UWxp88b4v48sjVeq5dfj6CB7JxycQSm3qH9BDCXpFVqi3x",
  "key11": "EzF9zdMajTAQaoUBpMHcySiKzfB8hD935ht4xDxY1tZyzJ5fQujgtJCEdR6ZhDCEqEeU14SZzeUqTsXba38nxip",
  "key12": "kKaZe6iwEo3X1csZMzxVsYjXUGfdPHEH3f3U3iXwZcUixyHJshzGnugzjgjvxjPpSkXo3z88uEnQv6dZMc7yAG1",
  "key13": "3ZJ57hFAZk3rsoK8tBhTnYQGKRTgqRLS3DjiEeQxVnFYwBQ9QBJKnWn9MFudQqsY8ygjXucBa2A9pJmdBfdM6Nde",
  "key14": "4rTUM9QUYWKsHJEM5XcLAsuTaMdwSfdcMNYxJJb5ktAxrZfSN9LD2ZwMYkK4kg8HqLoDp7qkSvXoKYPa4RG81b2T",
  "key15": "3cMMsXbaBnMck5EkJmJHrxxG61smQmpZUbWZuq299AonUSxsDzV5VVcLaBfPWVsz3z1N3QKpyFJMZwiKdxb225pe",
  "key16": "XhojVhkPAphNWjKpnbBABQ7oajC3WUEEonHcTHXH8L9Y3KUmy5wzy9W9V2woZoqmLC7Lw13XPGLuPiPmynyfSfm",
  "key17": "5KSnoE2iUV3zC6CGzdBMoZy35dnTb6iQKMJifmF55ypoY7pJKew4otNFs19kc3Zj4SKkRWyn55jjauNgVWKFfmC5",
  "key18": "4wTjPbt9dGFuqqfbAicxh1EXUk2ETPioEy7vPX5ErjYovsxvf27ZgZf2XmjZQanuwjRktv2b1zXUvapqMcuiWPSU",
  "key19": "5MdWzVcjhEK5duGzopH4XUFbXv5RHZ5MtQszKMJdef8dMo9r776R4k1X1dvDE9XDUPh1jeNvPAxpa9dzE7yr4c3z",
  "key20": "3XvocK6iwGz3sjEjtzf1bBcsmCPHACrzwCyG5fPpC4QfBLWBsJrQuavni9UmnyxQZFm7ws7PNwvbSojzm1FGkdEc",
  "key21": "MgdmJZ1QnEVFn4PBXgctxc516r5ST1RNNsv7PPpi37pt2ASL2hqLp5om8xjtp61M5mHqD6bSDXuB6UhuK41qXoU",
  "key22": "44cuFAhxy93asmFU1BD4av464dPgJwRV2qLjvzA82hw8i1nwUVUztE9iLrVmokkKSSAUUkMxZ1keHAvs8qp7pmUD",
  "key23": "5FgKcL8k4NZHFMhNHxgfGZLFtfUF5wJjVazb99fKLXXEfhT3FmFV4Ksfo7UMREVueFwirCMMuCmkN52AmwWaMeoX",
  "key24": "fg7a1EEc8jvDNEQ6uvgVXuhKqyNuWEPmYfcLHoSqvYuwRYQ69muRXgfMoVEFPuRSSDGMmktYG6pBWt6vQaKLGh4",
  "key25": "4Jq4wtpZ3HgKigsGtcvmL3Xd7e6WvYkhs1uxgk5M7yvBbCMVEvutvBaoB6iVdsQxoT7U7DUCLvHnh1ezZ7e8QNpW",
  "key26": "5vUAzzxjcG5QBzVtkorQsrk6zp36PUDacPtFWHv3koRQrdSLdatG1VgBjhXS63PQ9m8W1H87pmkXcDUhQEqaq3JA",
  "key27": "3o9qDVuoLJMX1eTA2tpVKDbGJHZmD8W1yLb88eUWyuJ9oSZMvWjdSoP1zEMiM62n4ojM9Jop7NdAGuDVzD5C5bSP",
  "key28": "36jiLqVJgLWN8SjiGZu6ETPzH5EWMgdKz3jFb1S5uSEvetDtLcyXxcMaVUQ48hFmo4HKHtURaZu6XL1UkptfSXtt",
  "key29": "5324sFd8y6fWu1CZzvJUFJ3rE75nqNorWQnvXDVdGbsiR2AFLkwNDRwKDtibXDYX5zNv9UqZHhDj69bY8FFkunaF",
  "key30": "2grNwAXhXXsUwR3JLgAswNqUkTqMwfPgHBz3XgcV96c3GyjFrH4vhAakZVj1QZHiRpiFE7GsFVSHCRQKX94YnBpx",
  "key31": "4uQDd6ufXm2p4biw3Q6DRcvSdshEULAjHCfLyTvsrJHurXmx88TUFS9tSEMHY8xncPdYAApzHCQkUJn4JMk491P",
  "key32": "2g4z35U1ZUCSA4A46Hy61THsofGpv839PkCcBQssXhF15DNEoYXRYoWAEnm7UmvHdgs5rgi9LMFQsyqZ6ofWfo6r",
  "key33": "64R6f5NGoxinCLLuLa9upaxjcqSpDnFLXdX13pf9y8avjzrNrjPa6eX4cvNmZo9u8PCBYjCZmp66i7pmDRgV3AXS",
  "key34": "3WfenBzkazLHyghRGL63MLLxzLUBGY6vPuWSNXYCf8hXsf52WP8tSvm3KRYGd6qAgtVLBcAdti1kPDeKa1gzAqrb",
  "key35": "9C8vzDZas5awsp3YtFDA14rzyYbQb3zbCC7Mh2QcMUvjr5mYUkvgponQCg1t1PksJfiryZTwr1u6hwLf3wcywSf",
  "key36": "5yenHwbVCa4woJa4tbWh5Gfu3cn22DJBz3PrGAxRgarwRgkk8wXuKiWQgH9HpdLFafycf6KmavScjrodEnFykUGE"
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
