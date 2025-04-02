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
    "5n7Z1aF6oVpLz2Mi8iYDEec1MrEKs4eW4KieJK6iNjykYwfxxVGv9cKitjpQWXqWEYr7xCKSKqMARGFts8YPeJgn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65fcnTPcfWSpZ8dPcDsP2ssDaPsecbBsPLRgEqDNUbbeKUFhRwnkWUHSCU1oHySwArMYBLfYQibrs7is3JPQeGWc",
  "key1": "2KL5266BF6JWgwswwuFcf34GeDsVmrX6XfSNE6XWUeKYXsZukevABeE8igEfNT6EtjkPWxPx9mU23KDwm7XmezZk",
  "key2": "2QdRnoHXde9ZDXwsqQtQ4Z33XRQtSK24xYFrauGKNGVQNKHRpgyAny9WHC7Gwxg99AsyDsMqpa2kdWo6C4kbWNmS",
  "key3": "2gyQhsMo5Dd5pfevzghmn6mNEPC7PnjGjpwrtnbsPrQaGUNaztJzenY7nSR8f6rBYcPcJycGwe5mYL87A4JdT4aG",
  "key4": "DCqB23upEo8o7NLwjwiejbm6CTE2jjHqohQL6hzSDUAhLHhDwzb6uz6tL5bovUJmLKjHpgBCkCPKADxYUnQRKvP",
  "key5": "2KrcDJgjvdaRstTLCLDrpBN7Gqucy2jqtfeg9hkBZKoxyZzkHg7J27hvaw9Tu5nCBdyFff3ajeT7yXeyACJPEYsY",
  "key6": "3PNGBhRwTurBHAuF5zGGuNNKGwyDq3kxgBxBZmNaCA3ro8QJzd5RtidELdpMbCtE9twUqWcH6Ao5JoBCWsEMErfX",
  "key7": "39t5h6HcnsSHN5j3WUgxC3JWg1rm4oBorFwPaaPxGGUiijz1GpMTG1ZXVYozr25oF5aocL1ZMS67VK5wiynTZUYY",
  "key8": "2KoDHirjCXwUG9YitmBzSXejy3XaK5nMEojWmE5cLntFxrr9UFuZpByfamQm8DgWYCacsV8JyuVR92cwg5xdz5xf",
  "key9": "515Lgkx6m1GAz8astoLx2mfNfVJG848dfjT38KV4T1R3AxMfS47LCBfT47AbGR7CnBEqZSg3RQJ42od1Ud2Fh4Qq",
  "key10": "53NSTTMeu5WtoMHv85pKeCRZLZ9kwSCdzNpTmB2M8zw6Le946ZJjr7Q9D7iPxvQDx5TEPQsWsBbYgkvynAWftPSm",
  "key11": "4XoBVchyuYjr3uNM3HxupfvfU83v77h47PAUKWRshG8wEQvwn81A36VZD8anLPW3bMp3WU7MZSwh765LNt7DuYfK",
  "key12": "257QDC8pXX1gKhffpLFgpQWnCNgXHFH7sWRwJgWaP5U7XFKgvEacwuZimV4GjVGqU9ZE2y7zFphRFC8dL7Jc53Gm",
  "key13": "4Dkx4Crih4RbztTb6pjEZRy6xN8NtPUi7CiqDM6A9NJzUr4Px8Kpkr1HLSnn77AUUSPjHGLf7xKC3hpRnRw9PSg2",
  "key14": "2kMNdox8LtnkJiHsfAH9fXM5ruFXMd7Zwxsdbrjqz3ZQc6CVm77odnTZugM2BwfB36biePx7vxdjzxLbyHymzW1K",
  "key15": "2LAb5EDnxUe7kf5ae1cebND65bTsXr6XNNL1MBwoT9WdYSTzjnEsUMRVazEvoj4QKBuotXcL32axAwKbhWuJjwQr",
  "key16": "3VCdPmfoXStY4ziQDyQDnYUBR1yWQG3CGTfudvC81kLidyVfT5Z95V2JzY2SPb3iKNTzkkopHXAn69UUfb5tT9JX",
  "key17": "UZvUcAR6YXLk8b4JNgavDoeFZxVG9We7owmoLU8tNeYojbvqR265oMUPnahNnhNf2ajSyxWSkCCDmG9Rqb9BVHU",
  "key18": "37SGfrP1aSJMqS51CUV4RQsNFtPWStE4MMvBotNdqruixx82Dkhg7FuWPZzeLBBwLbXdbs2Hj7zSobNvrcMjWysV",
  "key19": "3S61dRWXed8RZVnd2PVPfjxHs49FNaxtPTC7eyEDagwTyKPW7YkGecs58wtHA8ni8pB2HH4KtjQKVJv5aT1exJQ7",
  "key20": "5FnVFQGDajHxu68n7iimM8BpRwSK32dwAvKMvpDDEyfR6YgkrocEcvcjqABttx5umfCznzPvMuxpzq53WWip8Hsc",
  "key21": "2T8pjFLTkFtaUXJC9ycobyFnhprbVLKT4ReVd9yA1veXkTvCTXvYqSaW47nBAAXkd5AQwkg9vEHAwkvyzMHS8GUK",
  "key22": "4SsaQfbXCngSZk7QJi9eh6Mpk1AgJX1yznhzknY5rB7bgohSxpxjHwM9xvKFdDTHchLsW1NNzMCvZK5rS9JLwuah",
  "key23": "347Xdmn88EPiggPijPxnK9DoxNkT1v7mtyQWfRYdUyGLZVzMtPjMKYMg4UUnnzo9KBqUgs6AkmHWu1WjyfmmKapQ",
  "key24": "UB1eS6AApuxCLFqBtjSmVhqgZxTh3XtVA9y8Zop3ZDKXDEhQQFdLZx6PuC6XmsPxcdhPrqJmESzoL2NpxWSvGRK",
  "key25": "2NNohv8yMuGSoDCX8V4wG1rd7XAttqowD9jk15TLmFRuBvi47rbrPebVmyW1th3Evvr4hqXexLL43XCQppRzZsCc",
  "key26": "5zzGb4CnJPdPdedE8fiT2pKMyvBzZzjMqAWFRj3Qn1RV3eLJ6CnW1qR5MZpgt7w4absH8JverLnnCAmQBrBdmiUA",
  "key27": "4wxpS2eUE1uCZcwi4U9ymj7eQY7znnMzrV6wvK6eWZfqX6D1K9pmhM1cLdRCGCktSUuGp7iqDN1DEKhkU1AiKsLF",
  "key28": "3oj781kBQmGJuErdu2DghGqik5H5FPAb3DTbdmLsuwBRVe6hvTeYZ5Q6FyhwtxLtXVfy5BDK3sRgtgiPPoBSf4A8",
  "key29": "Uo15uJFouckGeN1TE4DkiHiEC4CbMSkuq3yxUTwER3Rqrzrjenf2tYCQbYLAevxPcFizPQrqwgWbg6PKTyiXv9K",
  "key30": "4kY11w25iKSyTV8ncKqxgyhug4gpGoYYGc8XYkLaAwApD9UHRugrPFc8K6Fh55Gtv84Muesc2g9VH2wvxhGXKEB",
  "key31": "3YFJirpCetLzzWjoSAsYC5DitJ66KxzqNHUfjeea1Zc2AHstzKk8MGFPd3eh8iycKtevhVd6xdpPU7QLZDhSSMxH",
  "key32": "3sueacX2VjZ8rm1it37omEw3PKtnG6JLL82DpsBLCTv2foQDfg8fYrDzSjZ4aLDzxQbSomvNftQBYLLZ9TT7EPmn",
  "key33": "5Q6TukcwKVtuAU4SVCowpPpKWy2e6Tqv1Jmyjz4BSG3Fz1y1VLRNQc7Tirhuoc64eecBZmkQUTRQmC4eYg7A62tu",
  "key34": "5cyK42iKM7tnJZHhwyZRTG9cd8XZmXzTrkhuY6MDvpyceRoCsj7iR3EUvWhyEpmbUZcvyJigQx2qHWakkuuAc8rn",
  "key35": "3dygrnKLEAmy3n5A1VtVWeD6XUo56mLdgwwrw3wD3NHPhvTqDkg4G8skHH6m99MaDkwoerpQ9rAhTpbjRLoetBgk",
  "key36": "53FNvg7q2vP5rpct5wNQ9zHViX217Zq7yxAtKFJbpmtUzEGd5b4s9HRmZiSTuhzhR1AeF2LH2Cmasa7TQ2eqVCeu",
  "key37": "5LxsrXdh6vmh8i8NF5QbDLy3x3yzJKvcr7tJd5N3pT3PkcizZbaND7Fqp6SuJGjCjEUWjLxMSBjr7sUFLCuZ2pAL",
  "key38": "5sjF4UoWtcjPY62q1b5ykPDwGtZbmkf4A81hMbRxk3EUYPAUgZYMN1YWrVR58yPpB5B8dP7mAHYjzJLtkbjQ2FR7",
  "key39": "2gkFUN83dV1hBN1tofk1xtbU7yU1Ms8nemPTWxiCV8Y17hvqcVfa7Xtk8ExHv6ZA9EuY99KtfBKsejKpntsVHbiT",
  "key40": "4J5UaRVz1CtQGYPCMTPkmKMo5NYKpHQGrrdhJQjHTU8N8tT8dMkRt6gEPjz5C8ShGkH2AEpMtcngjXPYNgRCYvn3",
  "key41": "65zvAVgfpiPooc2yVRAsvp9A1WsniRg9yBiY8NAqYhjXdVQPcWgZKzuU42spny3zcjS33vXrxDfvXMBh75mgJVL9",
  "key42": "4sDdHYk9Vtgio3K75rrd36M57m1XCKGnq16pSosZkHTyU3K8zmYisDeUKDLUKn4eci5npiqjj9qzw3HXmra4BckJ"
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
