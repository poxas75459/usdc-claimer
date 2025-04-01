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
    "4HWAtdpziNW39B9wm7FRjjGzPKRTxj43FD5D3UPpWtYNXzUcxQjfaoLHZFhJJzVoSjiUD95V5CWYB1hgrgRUJ7Dm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o7rj26Mdt4FSWN1JCDoHJQuDDoj5wqpeCL2FTAsMnqvZYe1Rp6rsrMspSjz5kPLayJNmGRG3mp6VvLq5cxP5uGx",
  "key1": "5eckkucoRq1xLLTY5rExnBYqSwikz7qLWcaGxhvGrokyyEaZeoNz9DkiE3JRj8ZoJb4hxLUwA6kBXE9J1t7phQiq",
  "key2": "3Xkuj6wdeHtgyeo3znCG1xb9sz3hjARax5dUYkcfm4aZUwHpwUGQvFQgLBAUDuyj3JBB9r8syJPFwZLFEAf4heD2",
  "key3": "vg7jdxYo2GHyyec9BckK66m6qspv14ZUwsp9KBNgFH461EPUGegdDpE7ioGQCKKsEv18rRG6hSYwftGghALkFSK",
  "key4": "22A6PUxZpHpSnReTmiHVRchidCx9zqz4UUtUkdZ77vowmhrsRRdvB1DSKTmim9HZg6AJyfDEikAy2YQ6TYZSTBnd",
  "key5": "3yUJ9BkhVhj7i2MZUqMfkHmCpFB4gkhxTbyUBVG3M9y1wHkfqZ8BZVitVUARsm1khXDGvLZxL1Ji2GsCom3Ehbnq",
  "key6": "2tmYdrFZmEfNiadyKVyLMHB77DLs3i9aFDQuX7GosejSSUzmy4B3oD43iX3PMvp4sBVS2MHEkWqC1NgcxagtughU",
  "key7": "5QnqVKQ7BajYeTXwqPGiSa3S7SkfKy4muyywVuSkqooV569DyPPBMjSRjnK4b3nrcvRABV7ioYEPfQMDv3pKK8Ne",
  "key8": "2x2UfYYWQ8pCzuFhaMHNQ8eP5jYdUr6JAtsRnbEyvfPooYSQ9nzbSRwKoAEK4gkva5crsxosm2t1ed7vKaazxs8d",
  "key9": "5jLkHQp3dRDuD4tfwbgys55gwWS2ZhvW3bxu1dknqACxVAv5CPa1WX8u6iioh1BEFL67Ppp8Ldnf4MhFChMfnSCG",
  "key10": "4pt7t8guXTNs7Q1W8LGpKciBSS2BjXaosmgXtGyV7C7V1WtPm9957iZSmvJvpcW57Byeyq7PYwFckf1BJttr1Nw4",
  "key11": "5i2ig6aepa71Cbt784MjLvnNtnxUCRNgw6JKKm9nVMpTU4zVcvHWN2wQoXvYdPP95Xhd2AuNJuRWRLfNtQbSAbay",
  "key12": "283oybcnKn5WLptBHRdDbrPieznQfgcuUbNdtQSF58K36NTc8PbJUfPKz2wKzPg31izrW2RMBhqRAWJzpcPjRhHH",
  "key13": "4voB6Q6GFCSCHaeq98YtQBo9jUqgT5n2vWkzq9oNcxC63DdSHtQa7jCeEgoMofyW48xXy8xYxXdaK2MbYXqn8wBw",
  "key14": "5Wnt5NeKG7oBKmH1GrT1vAKGx9RHcoMqtePhnzF1aX2HxN2SJa42NrphvFoqCY84fefCtkA5mvAwnkr3UxoN8y6B",
  "key15": "jncxJD8kaduqZpv97fNmsRrES9bwFTVruzUDWVSLaXe12fEjx2dR1mXL62FKgC1sYNgtCywhV1K9bDnYVSJcpzr",
  "key16": "9DYZ1o87fCfbVjUUJPg6RUXCxBTT2nyDMCXfJ9ZACxCEhwGMp7173m6RFREc4mh9g4dMNbtViEuXtTTi8trc5Cu",
  "key17": "3JJiHvA6mB3CVsk4JEuFEAyPgyv4q8NoZgAqn6mSUBq6oe3fsq6hnKYk2tZs5fcZzf21PCysQU8tExMCgzqNU7un",
  "key18": "2jYkJ3Drn9mCqhPHeFzM1EaasJovFQaMEmQzo7b664eym2FvsfWhsoLhkYeDEULXiW81ZJVLP6T5YEpSNRWco4bP",
  "key19": "44xyuC3xjmzGSZSRpHDEFsxm1sCxHhxEw4tEX6bygvViorqJjDYUpqJJiGR9tpwBeJjxEWGxeQhisHVQu7zZXagE",
  "key20": "38G3KpUBA4QoiUJCzoqnQ6EQTZ9MduoEy8RVFmKGz4DATeJuPEhnMSBM1UAWsQt3akx5f4Ksc9tan8Pwg8rGTL9T",
  "key21": "4wVgBKfmcJ6G23WEMQ3oTPZa8P3rTCGR6ebLHYg7qWQVaumMQeAtQLHm8fL4k4DjyeZYxGK8fmbboLuQG2SYbDRt",
  "key22": "xtuxwxrHvLhbfgZP59WXdDjpuoeSFLZhJ7q78HgZJbsC7UbQNyr8nJ96oeSFs91saifcMWgsuy5otAdzpXLtzT6",
  "key23": "2kWGz5jBfmhoanCYawZ3VWWpJD7EPzgMYnrtgbfncFYt5vYMc7sCyaVrPdALY7purW5gHzwdRZoFv22iHB2ynRjP",
  "key24": "3rbmSNuyECoisWUvVCX8Th8qYhXmrwfUnj7zJ5c2sFPaYJjcLCqmHe6HCP7SzXwTPcj3izTYxoANhqjVy4NZDGGm",
  "key25": "jMp4ATrQd3GQyuTQ7BK4xJkJEtxJBeZpcQVPrry2M5oKzPzNRCrFKpdKL3aQvwvrdsRpeTduiiqAja7JSNdD387",
  "key26": "4dPcvCM4BNHgETz61Vo1hCg9Yd9dhC8PLNSZNQRKGPGKZo7R3wEVQvfLhTRqNB4YBNegvqJbkoKi21fv6Wb6pk39",
  "key27": "5LBPgLRgjQZmacuZ3q84HJsvfyh2zvsZ3AXtBgp7a5WdgPuUna84NbyAtVAiabGb2MVQq3znCY1WQWsXjFzchtKS",
  "key28": "XkME3BXWVekgmfdnKX9NdJVqChJCZTE7LkxxjjvbT3ivmTDvW2MWEcWjQ1mu18frwhEUdFdgfQFDcu3FfbBw6YX",
  "key29": "3DFzfhaXEAYRo793re8oDVn2a4iyFQvBTFsKmNWV7DbRGWG8cCaSDCmTQ4XZrpMexHLBNh6Edrf1U255XcUQDxtN",
  "key30": "35nmomomhQrBqQyUTwsuML486s1UQojQegbFcm46zwC2uPdVqfZxs6B9dqfKg2ghUAZdSrcnzFz2tXrxH9w6F3wP",
  "key31": "2iB8PpAbyz8PMLinzDA1p2xBBfD3G7gxEDHXNvEJs1Y1wgLb3qSSxjReMPQxVjNVnes6YdBoughM2pAw8eia4W2a",
  "key32": "9UiqpXR1TeR1ZHw3aRXZeqQ3pVo4LkgB8xq61fj2kfYRHr7q1e1BieccJWboAPfQitvnJtxCE7ob8AZyqHLC7Q7",
  "key33": "2ZGJ2fsmvSZH4mACkKNRSCAc3YwSjZYxXWJHSzxceXZoRoV3k4SmZ2fbegxxn6nkD3cWkcuV8iXXEqwg52miM4Sd",
  "key34": "2TzXipotfc36M8v6QBaxcBbUgeW4G4SAXGS4kv7Nth2Pei1v3YeHBfb3hfiFixfZwQsbFHfNq5efhtdh17RHiVyH",
  "key35": "3XY4Wyukd3vY9Q7jYr8pmeY3QRyM994D9yuu2dCkbLZiNJkfCs54ZHAUrLPW2n2oPn1iNLJDH82cBA1TVCnffywx",
  "key36": "4N7FYgX1PnFMeBKR9oBiCdk6DDnP4eoybkRu5UHWNtwmHD1PnbTmKYfNFXgXjiLpxyL72ycP9V8MCBMc8xnmKmSJ",
  "key37": "31CkVspQyZ89QiLU9vcdbx9cjEShkUqLWk8c8yGP8i1qCJDgLRBGtwB3ZpHDvoyxBMmpULesAnwb8dvzCRiW8VTQ",
  "key38": "4S5GmMCAmLoj5CPxBhBXgsbsMf97u66sEcahT823J4FhBW65E4nh8MRsk7FPgUSfEWcUjsAVNgRAZ4RSGpU7VYrC",
  "key39": "4QLhqLj38XKhxPL8YzCXoV86S1mqZjAa6jToHuttDS7guxFzkk8npddH9GMajuhHuGRcafGRpjQjYx8YFAWNgzWP",
  "key40": "4dQxyEJFyfYFqhEy1LYWS9C2KXCVLnmG7GMu9L5g7SUbVue2SPZVY29DcC9L2mUATeguMvPNq3bNUwJRWtpzqKVe"
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
