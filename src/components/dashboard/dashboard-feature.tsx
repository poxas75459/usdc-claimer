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
    "KHoDofd4PTE7JhXBu43Nno49QLuLJFNo8kJqTxBNssECEbziRxSX6MUx9Kmi5NjAS7tbe62SbHhxXcWV2261xo2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nzNn3ytWNcJVLbKhuUrGGMqinV9vtFzsTh4GSCTL6x9yNJ9jkbjt1VQx33iSbX6pn1rQiR6Bs83N236vRtmhdJU",
  "key1": "WxgNc7WChkMb5sxX3z87nZH2iKo8E4yv8sXgBYjbeASTH4nbNxTHGShSfAvkJvh5EvbiyLTfMR192cwy6sK6B8N",
  "key2": "2yhjNwS2WRu7wgsAXoR58ZFDDKpZTAqzReGnKjjqzJXjseewhCswQPAv9E8iVAnWnu9H1gq7npUYa8RcxA8Nr1Uk",
  "key3": "4gKuR9Q1jcn4hbkQ15sfA45asN4GWsPn5u752DediNSufvE1PaW37DwN8Xu1Xp2F8oEWQ5JYYKkoj3bVpUeGnZiU",
  "key4": "3BxhYQnqCBM4kksw3RGHBoHgGoffoyufZo81Nfu3tVaBvgL7Te7kbbKBfzs8p94su3sMyUeWRo4afGdTgftfBWQv",
  "key5": "5Ch121PgG7ij8q6nUWqFwxsmvZUKzuWfzayDbQAhszP7AEmruqbdpZchBg4n6zULfqxak6xcyNmesC1RCeB4m8vo",
  "key6": "5CZ4ey6Q7VsBaZSU5Bo93jn88sTdWqRxfkuMMVZYP5C9cgAmw14y89cQkBh1QpMoNASeXyotvk6zh2FrRGP8Vcmj",
  "key7": "2GBTzbYLDFaCeWtdwvVVBrqCdZoAJVRQbacyQk2YgciVmuX9jQNiXXtYN7PYaNaFHeARryyL2Tmvoy77ba1oWWTR",
  "key8": "29WN5XDBoebxLYHNaGbUdnphdLUrHuQqX9486heRTnzbqCuuVR5z1bTuwqxxrWrdLZBvbxQLW16b75gzV4oesXix",
  "key9": "5zU6cv1BQCJd1E7W2u1afhX62yergwAQwhNgnhbzzEz4DTqYGPwwXfgz1N9ESnpXSRwLkxHZFzSJMqWvs6gAQcL4",
  "key10": "4wvrqqWDKWeK589uvGRCSf689uPM7D3ZjE7K67bZp16kgUCeWtAAYUoAHKrp8Rxd6B94CGsCNc7Cg5i6ZVs46Y68",
  "key11": "5CfJL9gKZW4xPX1PXjV4v2GvnNbXEJ2uFbHMMcoQQXZdFj5UVytsraBafFFnpKdf92D2ZaZ6SzJ1stTrHrnM6Y82",
  "key12": "L8V2wXubBnB16qSKMh2Sjp7iPkBWxGXaG2LQsEjdfQBoJogY8opyoGyebiUtS2r4TCNDgSM3tkbpAT4JqZxx9n6",
  "key13": "3TDodW4Cbua7LPYfybPhYQwkgrGtPCZAmT8UJokXE2WDQZeGp3uFP638JoLqvRcgEJkCvovRUSfoXqePdZG1H1wi",
  "key14": "3FJvho1NFavCqsu8Pxk2JBAnjEdZSX9mUCZLJuP2ZX6bJKCoACiJ4AWNirFveT1qR4WxfkfrxSfAc7gM1qjyhyTN",
  "key15": "5cc818LZgW8yQ33w7E2giuuhwV9hX3fdYMuQni8uPdPrsUMAGN1CMVH7iH5agT6EzrxZZnyswpo4xWqGepLnRGfy",
  "key16": "2y4yWTWUABuBWa6ULNkUdw17gFqaLKZbCgSJ4kmw5yHNVMpuPa2FN44Lt6kFMpA5AcNhL3TYS2QfUsYWZUrhme5x",
  "key17": "2MB8KUmik97pCCWJSYgZvwXtLfA3XTWrhe22fCbK4FcjHRQHHNiP9QqxpVZpzRYfNEYCvDivVQPhVh49SZ5xbs8o",
  "key18": "428n5PDdBAYnPdkM68MUhY1C3rK8h7St4n1wK7KtsezriW5aCVXnFh2cXm89dZdSvn4WjLZYBjDqxGtaSQkQpwW9",
  "key19": "3AVidrRQdZ1W46fJUJMVhB6gFfJXqecp1yGKWhHE7AV95SPFGHCND1vxVFJmHCwatFGmtRhntBj1ug4XsArHdr3u",
  "key20": "61snRp5KY49rMp7E3DUA99s88czqh7yRcc2kc9sHB8L7HWhAur1wP7zucCSqR9RFjzmfTkxJS7R5U7mDcQfHsx7k",
  "key21": "xdLwLpnLE8bjsc6wHLXm26M4EcaCimfbwRc9aLkhnMSAU2vWuDyFJFJG3mYuSmedYz3YKKS5zBb97tp92N145gE",
  "key22": "4tHGknYhXutZrp5QeSuepNxzZedX1uqxknw55CQ9k5HLXUuSJF9J3fnKqPsFzVX8Lg2RzSZuwx1gCn7G5gzXREEE",
  "key23": "2nzNsCPFpPmqPWuyYY6zb6KWdjatkTDoav6Bu13PhjrhH7THSX6RH9tiwtc2RXFvGu1ryrv9xxy1qdBxV5DE4ceE",
  "key24": "2Ny7siDe3DMD1CkMiMLXLR7TgbxpBsjppi2eRqzK39QqAvTw4e8MsiRt7avQDhHuS82ZHpzyMTwfTR4nPExr4ZfN",
  "key25": "5aLxa8CL9CJi7DhjbG7U9nCvDQtewXvZxtsaopufiaQwBbF89AXM9vtS8jJWZfMmcetbJdSC2gXZVDRDj6SY3fZU",
  "key26": "3XReT1NCe1bvC8pfyVge9R7ZzszDoiSSZcBeaLzWioUnub5YuY4PbiDcuFMDEDrQK9SYbe4c5vR5P6DmVNFbvM9A",
  "key27": "5VKWkJKk1bv3vuu27ikgW1kXVRQnRPEbUKPnL7ARzpLrvCpuCMBUaLu8Y5uANXbZvscR6tZ3rXrFtNxA3JTswCUL",
  "key28": "2eSKbBza41j3KUywfhbLw8ttnSF93ayvVVrkq5ArzxsN2yeAYAhjABQTLqSrttRcEmEpRDocvBDGabzAMUfLr73k",
  "key29": "2rq3RVD5F3XGJHiKSqSoBEScd9Si3B9C2KbCPhYyA2UjDPiiTFGSYsmLGbf3f6YVSGUpySRV4GUvN4mvrQVBB3DJ",
  "key30": "2bjv8z58ZFKdRdazBkCjex5NTVdmZcWYMFuLuxiZh3aBtqYuUQYFFCd9X5mdWBv2qVn5fjP3nYUqaBypdwdFU8EX",
  "key31": "2e8vhnH18oZ4vxcfUQVdGB7QRdmUGruWQJCow6Xq9zeqzewiPoDcB2zCdKTa4mYB3LcBxEdzZgaxzwS9KiKEDBo9",
  "key32": "5VbvoUjUKdHamRWmFvtp7m9pVMHf82n346ykVa9XsJiAreNydhs4noc9ZUyuDiTJnPtigv6cJTsjDsxo5WTmMdGZ",
  "key33": "ZpsESzh5cZ8bLUrXREKCnZR7rYHXtMfCTSZGb63X8BHCr3Ub1RgsP9q8aowsBdiKqCiRiLXQTFvYxwh3foNkZcc",
  "key34": "61R5ZgRikTYw8ZeTABkitc8HT447JMj1tBTKoJkFUFjPUMa5xpiDZoEGzjDGDUZBEKKGqqeY7dvwY7ixA6N7LsMV",
  "key35": "4oVwJcfEsh1wL2fy7qx9NEPLwmxfvxPC6wr96Ce7VTcwwwo23wrgDS6Xz9sWnsr19YknQdgbnKt7vtSqMJhLRyzJ",
  "key36": "4tNZMVKTYwJjxd96jNBRWZpWhkjFdJvPNnwzCZc3YxSjc6ceQkbqdxwXfVYPuFpWAFuf3dwNJzKqWUGuwekZTvCi"
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
