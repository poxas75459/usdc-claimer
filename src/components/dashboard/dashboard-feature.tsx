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
    "5MCht6A8UxDmE7GyKEAe4oKzZWyzMGYpVhqVrcT4UMnD5NySyRL5vd9o6aZcDg1mFfxTRPqthbCcMLhZhmXoXmUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YWN9HiGVFjV2VRgg2snuFBctfysb6QNfzmkthtCBVeayxpGv17DTPT7bhPVc7uUeoDoRZFk6jSHREacTAojzTQ5",
  "key1": "4BubuYsVtXokj8wT1kUYwGBGgV6aHN9XK7cMZTy1wV4nV2qkQksbnvrwis5k4mJswx8gxb8YiyqTkfEmASmzfYu6",
  "key2": "5LqorGnD5huU3zhxPo6VtJQXKtgjDmmNiidZ2vi5hkhPsySLbospRpZXpeb5VRr7S3VUU6zUypkiZHwK9nqPHcXd",
  "key3": "usAvyfgRZw5Ud8gn119Nrj7Nsxw9x1WadNx2kUWARBECCxYDEVZzwbw29we48DJsh6yuEQCoj2ZgVNsTry4g1M1",
  "key4": "4aAfaHHRwsRmkJEHWXKAu7XRkeX7AzmTkwgJFDjqy5uyR54e2KWedpsz2EJNhUDViBHHEiigbcav3H4jsWMGA51C",
  "key5": "ND9gTooa4qoKRQf2jvJsQS7KTUpXLMzY4Rwt8rEMSjg6eY5kfkZ6h5nR9FVv8Ed2MqX7EcG86Da8pJjpis8CX4m",
  "key6": "2Fed1FDJHE3gEn4LjEQdXYmkqrRdH5dzytnyCf1w8FwZfD8sHV3fVHXmXmEz6Sefv5schdz6YjvDAhfuJ6BkBr28",
  "key7": "2VMq2YsWvm895mxWKPnEhRvi5ew4ijige7FVqMtdmv6vF8WvjoTD2fXmkLYfJhDuwUmSJWLiXjMb3ZvTUJsWf42s",
  "key8": "2zFRa7GEkLtNrX8mbwcfDkci8V8MtPxV9C1yzvFAKWPZZtYsdPbWo45aXVE8MVyzbHpfxpBtYsTUeRX1qUm4FqRn",
  "key9": "2egsKj82rtsGaFAB1BCAhNiT1oj669DVent5oRK3uwpCKRvmeNGRGaSMSWgtTAE7T6rxuFY1GTghiQbX6nacTHQ2",
  "key10": "5NmAGw6QXiyULAi5ko7usYpLgB3Zu7trwx9btw7aqwvynUr3LGcP3fzoKYRUmG5n4Smss7Z8a4yoSfx7KLv1KiD7",
  "key11": "dBBTVGMJkFyzqTVVP3mMdRDHMtZbZYtSw8pJLv7eGcRxpkQcLWSUhkGFSVGRxhzqQEtCCys61Eehk4ZV9fpEQDM",
  "key12": "25ZpnUDHmmETLNwjjSzvf1BzVVXQKrDCWywNyDMVq96zX2j9KhpkziWKAkM2mndseWV5bdTMZuJyEenD5ayBSNwr",
  "key13": "5h5uPgVTQtX4Tc16pZJS4A3grhMoiRArQGDiaChPP5WvaGg3fKECRefG5FTkwxvbNvF5j4CdpCkG2W1JwEfdbDJQ",
  "key14": "5x3ypQEFmRKNPArvZ94YtpWhDLruyY2ri3DY6PkESpyAPcp7HK48aSsKXmfxZyDJwPrtE3ooyoufAdHP9BZnHku6",
  "key15": "3WW263n1uaqP5bHS4fub9fts97ZdWoj9TmAmmTZMkxcriBrK1Wt6DstdAWY1UZJdhqWaa63E2hghkGEf1aLkdxTn",
  "key16": "5sMpdNMe7g4cBra4AU2EhJQfpLQaZ8sfmwzmrdQkKEhvk7dUbvQ6NNJcyV6wtuLVg1uLjFpxH88LGv2gnsiRgTzP",
  "key17": "4naQSW4nJZD7X1cNiHnsnUcwKiH6YWdEp582PRfda3wUgqF6oUyLogQK4ggXC6uXX5Gvy8AiAzy6pNXrnRBVkJDn",
  "key18": "nB5thG1D3SMZA48tHzPbfgitFH6hmbcGqwbeALVuxdyN7GYTc9oLf1h6tTNUXTxR7ESLtd3DW2yLWT7QmAC5jVV",
  "key19": "51cpq4v6PNwN3BvPUG7v4vyDp3EyCa3CcGdnk7rhmTMGezidwzmjXWSuCD5Lq55usW6NwptYcz4H6iy5JqVtYR6N",
  "key20": "4BtVvSQtrKVmNjFe1qu4AfJwqDnqUC5YYDK88ww4q6GdjFDQawqFuWGgNaf34eu6RFLHiFu1yaWmAt7ppjLnZ46k",
  "key21": "5s34dDbXH3zyrkNKjvLNt5XNeeYBBLoAjAkHdSkgqgWgV8P1iY6PWixkV9irMFHcDwdhfxThX41vYVkXmgUNqWMU",
  "key22": "5dFEMfm2rW72QuhoHgcCrPxYA6Ts1NiadToW7MiRZDqth7ppApYsQsY2ee2jgmfJJjn5SzeUNBQCey32Vm7e5YrZ",
  "key23": "64BdEQQP3qR7Bt7M34fRyJHfbuL41dQFFSs8qTBoJskwu5kTXLxZV5iJYE58kLMe8NxhxzdMTRY34sRKUGfaAMMU",
  "key24": "8cdhZugw8aQyxAGdg9f5nMvvyoo8uYtoEEgcnwZf8k1VcoCmGp2YYPWatRnpMj2zauYjxeY6Xzf7StpFup28sZZ",
  "key25": "Dme482BHyYNFMTGqDuAUGnJSgJUtZYBB9JBpJtkLBrfuknm3AoYuithK59eURTg58GDnZQZuad6obz9x43hd7op",
  "key26": "64bbSnPtu3uMzDmPzVC4Vw1myctVVWG7KXbRhh3PtSaoMvePsEQpu6jNzUZ3KS2zvAPxXFmqBDMbscpkZeqp18j",
  "key27": "T1XQZKEC1gUzzSe5Q4D6aLPruoD9LqQCPnoC69gLosv76BUMhv8VRo2sb65f3ip8UTjeUuHNw4Rpjt569dU2amF",
  "key28": "3hMaxf3K3AVnZx3WHGmqMmwPUmK33UGtMD2C33eBxHBReC6QTwyMGb4Sea6SxzfWytYPz7Fp7gzQ4Q6C44VJqjS2",
  "key29": "5bdA5gF3oFz3Sp8pr4JqKU8uZucQSWPY5cSV3spubv2HNcufmucS9VA3FEgw7dGzJUjDinsH4fspQmpmGcnMWa9K",
  "key30": "5v8CyfEnFQ2KAvBaiktR2tnV7MkXTm6YmLAvx8EiTUCeJWhym597TQMy1AXcqzvpfvqbnKC4soCZxyo2SEArwS7G",
  "key31": "28ket2wU4dnNa6tCsr6tWhSLYSAfXPtbHrsZ7YnDvsZWNtuWZW4ToXi8SbyqxDdodkCpYu6bCs1etbw7im1bw1ao",
  "key32": "2s1YSFkmnNVKpC3APwN5SmwYsL3eK3zN5ssadhCdHnfFbTzeg8SB77DepsKHqwRQ2p6YRChQtN8gQnEAtEDf6ZXt",
  "key33": "3uvPPfEUuqzqV9enX2dHDz8PJM33eu6PWmW9nWZDBPMZxS3DG1VanLUSGmEgebP8AcwZF5vhaaMRfF7JDAsXC8v",
  "key34": "5ob5V1E3ZyBjELSYgnuqy1r9oNLtzUB9ZQonXssKW6LWaUgjAkxtYCaBH22sP3RxewSDVXd2U1XB5avEXL2XvPsD",
  "key35": "5kF7FXeE5VE88z3gb1yeHq5nXQFKBNeKYZFt18urnjBtzHRJKqvdyxfTwKQAGr7c66k341FjNtQttpSdDmoKhK1m",
  "key36": "2Hiqexia6fbCqKqNxmpnDs43r9qsKrV9NPk3PMy9jtbtPEfTRyS5yrjTBLrmQ3oTZ8vttjbt9na59dtrQEKHT12T",
  "key37": "4oMrB36VPqaZTKLit2nuXuerkycZJVRwqbZHCmzdp4dCqEZ8HMRcgxEEc96DQzKKiGnbmjDjEiu82QKeNAj5KPZa",
  "key38": "kAexEAoamo3XFAvwTj7gE43ZXTQvwrcSygADn9QjbCVfTF4HEXSvtyMd2QQu3RuZfTjPsFeEAMePmqx9exCxWGk",
  "key39": "jL6N45euQMDq2c6UH4qwnFGBj6gx3mAX9tE4wVKYiZQkpv9oWnN42343An8TxGpy9xJegA6BQGk3Q69RksQ471R",
  "key40": "29J9b4n59xjXy42n3SuQTxDGVySVKFBX592GL75436dN1uakZJ1pPG3JsdLw51gHZqGNRTbcEvSpQJ7phpkrz9fJ",
  "key41": "3YyrRk1DPqciQ9NF1ycYLCrcr8GPQGGF9xZM7KUA8vbbmyJUcW7Q3bknr2APTSmaDTqQczBN3NWL6Gq6gQC8DQB",
  "key42": "4MP633PE2dfFW2KwAGQ1tQ5VnFhvjMmDbLKX1oAQTx1C4xo4wCB6NQ7HSMyU79h62GRYizuwgcHHkJzYo5pLgqco",
  "key43": "36U9mmpN2Su8DMm2j9dyLqy8xfHWLEGRnvHko6X1TEBba7PFE2e2VUAt8gotk2ofEdoEv3HekFEMhTkwMp6cKvnc"
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
