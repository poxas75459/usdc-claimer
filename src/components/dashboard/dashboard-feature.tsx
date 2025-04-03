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
    "67AGp2FHX4Fg17gvj56CZ6HRjKDWP3FJvHEHzwG4WaYKhBwKdWcfGcCZioEGc3EmCh8y5mg8DoLEG6HG8Uk2a2pJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LqGNfUkeJRsmSr9x792UmHGYEzWK8j5oRYk3Via3rvaWRUFg8MGeEmnVUdEaj4gjEDonizRoJH3VJS1LyXHRgiQ",
  "key1": "d9pZxuofhrSaT5VFBFCuh8gexVsCWJYQtPd9RVqPbErRmkwKmbWHjg3kejTGqY8yVVSiEC6wJahPvSzvaUFKiZr",
  "key2": "27QfRQiGczxUJEUBSRZCuXNFZLxwz3KWHWk2UHiuHorA73ygcpjRA63hXKHc1AUxQNhYGsWJoDSkdRnXUJ24xvtJ",
  "key3": "TZBfjJg6yuD529KHgFTqJQG1W4HwsXV9jDzECXTv8mocunuAXXQ8WTof6KG53Gyfp7rPXGj8LrFcKdcYN1ATKQs",
  "key4": "hsE3eujHfgdSHTM95bYD5NkZ6eqqS6L9X7zExSmsUzvb35YNNqa6AoJLduR1RaXvknYHSnn8VK8fa8SsH5qjiDL",
  "key5": "3sjkVTJp16kKYfzbFohPjohB4N57WucH41fF4LuEwB1i1DohvUSnJeohtPrBiDkACJgXHrQrNvmdNv98AbtdyHhD",
  "key6": "BuryVa54nejN6HPhYNLL2omw1kkzGG1yJfwgAt4PMXHBEvQAfW3CJ2SctaqykCMs3HPsgSwnhMdvtZSG8RZqVS3",
  "key7": "2WwySZs3KkTgJRinbgDWcDq79EwsRaPg385Age2iq7TTNx5DNYTaQjV8Ebp8Czpptw7gzgWWN3q6CHNuNFf42yBa",
  "key8": "YCkXfrPg1BDeD9q6RMZfa1DSYbzcU8qyw1WAqcFfwzGvMZL8UR2E3B5jGBJeKCkHvD7H75iFh6iJeQZCioYAyg8",
  "key9": "5DsZtq6GVxPbAAv5Paetudbd2ZPkr9TQs4fE7P7jNMCiWSchZ43qY8byCczJwyuWHfeppXpXTkNqmMH3V5oEmor9",
  "key10": "2TbNzDwX8U3LcCBGEfu4ntfFAv4h1uzYT1ddeoYs8q15kXVv5JeLyzD37j5msjbo7XYsb5VQsQiFae14qczrxAa6",
  "key11": "4KCpDnFwUFpduL8oqViLZVGWbcJKZQXahdQg1xaD4i6ff6GEFpQVabibAcyo2M5QTNa9R2H6NicBVHEDpwAciEQD",
  "key12": "5X9U15PBvXbHYnQ77Uvd2mGzSCL5FyEBvnBCRb5sTUMCiY4Y6DG1p3tE8ew3AcJMT8ocfdqfH1DsMgKxMUc68m7i",
  "key13": "BurLXCijcxsGehuUseUyWNfGzskupvhQRygPfZen3xXEBMGYM6pZXES75nqJi3U2yp4VHPRMUnqWz48mtc4Mp38",
  "key14": "5hwZdsZBVzZ2nURit2xH87qDnrzPNB17R55HQP3B2M6WsJEv5fgbf7HfA818pULZdxHro2JD6ty1utJgNDhumJpf",
  "key15": "5Xw8TRtDL8zFvcN4PMr377rtct57dGx2z44XN1qG7C8AJv2iqVmjjzB5EVVcJxiQiEp7FCj6t4T5dvNqKWPakWsr",
  "key16": "64198imetcUfTyBbWKnjkWJfHW6Ayfs2kQ5UNQe8Sviruf3i1iG21SjnnM2RsXB4ZPfgkW5EyHCCqEYpFrMnoZCo",
  "key17": "CYMBwZbkkcRo5i4hYJXoQaT1dSUYaDtNE5HsPJYbgXXNBd5ZGikfEii9NdNRWCQiR8VsLuRWFpWTEPGXp1hm2HQ",
  "key18": "3J23Gies9nXyQkLtsZpBSHETWnW71Avgm9X6VPFso7R3nTrCBcU8nddRecegNzehmW1dFfrzSDToJnmkNnkykbHJ",
  "key19": "3rAsVpCPQ1eToAUUdgJmje3FjcQMc1tVki55M9j9122YjumJpWoKoFoAYY5gPpXkj7HrhthUUF1eFpr6Jyz29YqG",
  "key20": "3gAKJPfKgUn2wR2Ay2ovq6iRwCV444W6VPReMgHZ9koTxKznakoQma3Tc86qEh1Cqs7K7YLfEMePA9vVVxt5MVw8",
  "key21": "Kz1RNVhscesrqEWdeZe7FB4aLjZJAAcJTqA82RbVPdV2YknoCddmYy3heGbs9ci47pVDyJt1Kkk6qzKHqxsFugF",
  "key22": "44vkBh5Y61d5hB1okqH9NrsmrQxVmF2kfDMcc6hQCoCwM7dT6NaEXpoBuWoZL77BJQFdvgLiPuHkYTj7Kj2i8xu3",
  "key23": "4LkWQT1QEdEb5cd5qQD9UnZjLvi1xX4SKnC7HPyV3tit7ThUqHhUKUXJenDCdwTTBw9WPUF58gVPeuojg2jNifmT",
  "key24": "5EyLJP83gmJUDXXgyWvox6LHnvJspYfkXHvm4i4nidyHPiPCTfaL8PTmcpt8tvPKymdG9q4tWByt7GHREqrSWwGS",
  "key25": "VYDv4wVVz2YGMVHuWzraNpwC5wWYvHnQgaMu5trDZBT4SiNptmBE2SaFoTLWDdNJE7C7NoFw7p7Sf6uHSUbfJmJ",
  "key26": "3jXgRYnopsU3xeFxfjnkhvy4WB5JEGS3PPpDVDQvuxr3FrnJT8w2AiZeLVrEXCcAgr5Cn24hBpcpQsZwWGCP13D1",
  "key27": "XXWLHpfFHxFGTwTRyjJc9h2n2T4bcd18XEJ324qfftB9ioHg5eaaQVVi8TExb2kDFCWVHeXZzhwSDV36pxEAMyQ",
  "key28": "3R8z38zH87M5uAcy2pEzqFsk5WcN4DBeoHn7bQ1FVyQsJowD4aFTER5wztQmWfMXTnYj28qgkfsUh8a4QVb8KMpD",
  "key29": "3DRcCm4BJDntGk1uwz2XCReL7w6JZD3xssmfKaNVkkNY7Lb1JadizwTYx3WokHpoF6bqGr6ArZcXGVzfDk4AejfJ",
  "key30": "2TxSUyoQeJTvhmwsvFgxk6J1Rd1WVE5QEkCUTWTWwZFQjzsVFdTSLD2yaVj2zQK5woaiz2rMCqpXS384PTv4wUuK",
  "key31": "2JXb9WADPLeLs97hGGBt8adKsCxoipRjAburssh5gdaCr3nYy8D2QzE8FvnUetJk6RnJuDzRZ3rHb9K27wt4ZADf",
  "key32": "4aufkU87MutzNshSLQooj8BMLsShwtJx4rHaXTdGETxnUkMK8qrWTuv3bk2nHSujHTk5owF1o1JXrQxzX4gsEiK5",
  "key33": "4DdZKTKpY1P27JFU9j5fwF7Pzph7jMWSw4g6TkntoS6ymJk1YWQPoa4vwvMDUnNR7gCVzShvhYR2pBk5XFMTb5tE",
  "key34": "48nQjPLv5ivkAd6Ywq2MfdEJi4CSYJvEUfkJVMt722RcHjfJNxmU116GBNvBTZXsQ7MVdU992YVPTxDW1goXKswZ",
  "key35": "44gjkjFTBz6hNZEGeAVDfymMtCv2gxnzoTRoPUozC3C86Zb9WGTY8AcuMH4qR4Dv7KnzJBcghUBjL3MX2wEanXDg",
  "key36": "P6kU3RRJg54xVyLSS383KY5cJZCkYDSJ4BJxfuZ4a6Lii5eLD1gtd4xKKXSDq7Cy2qYLii2sobkaFWhfrSrUJsH",
  "key37": "3Uph5y31332Nd1Nefhk92EipzpUpDqcLhj1dEtSGzhBddCKRHL4DMZKQe5DJJu1KtXteqNG4gUkWoPe7ByQ9WDFc",
  "key38": "5eAH5XWvyYV1vKx5F3RdzZZQW1ZXpdZxiA3vkYw3V3TAEZ6YLQGAKf24H7MWTGXZpVYfbj1hkQ6nXHyjrqthp7tA",
  "key39": "3g5PCmGccfeGG14oSr12pn6rWQeP731Tnc5RCeV4qboawq5LGY1jjUGYKt2rocEsUHi9xzKc3Q7ynG3jhrARVoW3",
  "key40": "4AuTZUZqyTcr6ubmnPKJMhYTm1U8KpBN8DeZF8jMP1d3esiFaoCCXtqwFJV7UaXTAE8mfe9XCPf7EAvFbauytJiQ",
  "key41": "2Ue4CfMnqorr48FN6KXd7UaRHMBLdU311cNerydD9b2E8E2hcoknFc3tRQJW16whSHd8BHko2PWGTLD6GLhDNWrh",
  "key42": "2FWcYA8NYkQNyp4ZSpXLyfnrpjZDWjznth698MPRgyhc28bTDa5f8DTG6C3pDAVHdTUWoQRhVTexDWhTnNkBv1Ki",
  "key43": "5mix7pXNhFxsVNuvBpMfKu9naWvmucWRNPoPC1XmLh8QwVptDLikTWZRfB5g9uxB611iXC1KxydB7GzBUFF8i9zj",
  "key44": "5MHQqatdcns9qzeohYf29mT45nYr3sbfJP9sYVkidDha3KVezwxxCeYDMbqMgXxgWMdmkZ75zCQAZBWj8NYHsZUW",
  "key45": "zcfqKpDMQtCccpQ7irj3eKtM4YtpCmzLZETPrFka7MLZRUd3vDy8Gn7AsztrFkd3SDYCw7uCuJ2xh7aFsEh2cj7",
  "key46": "4u6wHkjcqTvTFR3DN4Xx6WGExJntTbLaZsRJoKYbnepyF5X7Rqff6jG8ki4uiXn4TcvWBXAfUXqThoTBAZUUZrCt",
  "key47": "3TKcbyUte24AS1V6KphJkZ8W972DMr2rzr5AHFUeNkja1QPJxq1RQduHW4CZy23r57M6NmvLWNoKz9a9zkpJuQ6r"
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
