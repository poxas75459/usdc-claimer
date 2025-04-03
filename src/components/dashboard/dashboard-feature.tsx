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
    "64fWvN4PkzMLu3WDLmTRSDXDCHmDu6esmGmd1FbpcWDHL8ea6rvZLBjFfc938RKsDPXKJWWY4q5NMnziXtfooBh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JxwaNs4zgmrRX2rAV7vpkXC7a6YzF2meh6wsLjkFaKNNadjdpFRXhiW85scpDPZmSsAPE1jYFEQMEWkCG3Z49mk",
  "key1": "4kWqf83CTmBuXjwQG5SWeJyNgREBYs1j6UQQPstj9awwAcAU7xeKW2B1JRLAmiADBue6M1JoK5yUy5n1uesxKQni",
  "key2": "2GZwrbLXfj2Pa8BKF3QfkK5B7BHJtfMDknFFRVMoi3tHYwjFtzJp6mMppa8P1xdCjNB5qUvLhmPZiGRvSHcqETJJ",
  "key3": "59YUTn82qu5qZR8ugkPvqn6TCkg24dZC5k7KVaonfxGhzhNfN3CAGaCDPT8RNuyobB97Sm3XNGSr5TUEb46SMJop",
  "key4": "2q6cv7wyGe8XxLRGzBfe43ngrDtWBvxY2sWbMCJLDht2UihC29sAzvn9XM8PsY8AFdfgTWz7C2TTvzUsGhMrGjcL",
  "key5": "nh2VjUwSGEYU8kCY2asrzWUaPrKc6UnbgTvAufs4wbhrLWwYQ4ZAxhZ4CC8dYM2qWeizG6B8Yz26ugQn4qFfXA1",
  "key6": "2UXMWLx2daWetz38dAKZ4gXVnUsezLkxbRyMFiMRT4KHSojzMqi7vsLBUWjgqhFJUdrjUVmpfc48m6i5VZEELq2e",
  "key7": "JpXShEGn8HaPC6hzJYBJMChDxCsSZS7Tdqgk675XFheKvaSLvpVreWeZwXN6C45JFcfSkPJDsR7SZzSKa3PMPTU",
  "key8": "qtUhGfpkybcYHGspGjmARf8cvv5BsVAcgAN7UMS43nGDtyonEWFf2TjNTCbExtB6fzDX2pS75UCvYddYwuEN22x",
  "key9": "2pH4NUhjcaqHt8HwTvCHXJrXJVknrpw4T8Vf9cCXb1Trr4kUMd2Vw9YtJH4j2UEMaw89VW9X3PsfEse6EbsT5pSe",
  "key10": "bfdvveyck9TziBEC2HcfFbw9UHxgmT8UEM3KmBWJnMuEt8qPKuYkHwSEWbwvvGTJqxJdcAjvqW6FLvYGSz4VZ6T",
  "key11": "4FEaRYwsuFsSTWUnY7egnSieAwmUprgZvaiHQcuDFeb6nccXiJggy1YGXpjgVrL6y1E1dXTLYG3i1mwMgh9p1dMB",
  "key12": "233kXKUyEHtVaudVEBWKMDoxaB3nXMshyGVxyGBkx9WFdLEATp7Vi6otrXmzdaaaNPfZSCN6jQv6zePFjYyMAwfL",
  "key13": "54aD5qSXy1x6cfPB3PnCjapu2ujXsErMW8ZTjWCWgYLEgk9kacj8tNgU4rMZ13oSPQhviXUviBnCKuFV2VCucQgT",
  "key14": "3H2tDsawZSfAS8mLsbeXzWEGTsXSLcuV48SZheEseThie3LLqsus8Cgz6wERrYMUDZZrsYEd6HhLViFMB39u8QAW",
  "key15": "5pSuWAi9wvWbabrDes8YHJxbe1jmGD9LaAVgVgSXF5T8PJ1sks5HQcmKACi885pb5YeSDpgbN4TjJpDBY8YRspAs",
  "key16": "2sgtpqbpD7JVVGFLZQUSfVmJ9qoPnMHinEF6pduaGCduG8LXuH9gFEZLRBsyHUFLZUtBrox4REXV47gMU1GzMJ2f",
  "key17": "2UKuiiDY5Q3jfHkUa8kYEf8gA5hHBCfPmC78L1aUdwmQq1xCcxjzwJy8vKT8ioCdHCE2xF39JdX6bnJ75PWCvyUv",
  "key18": "TYMzrMgzfhUGfuh6Pr9vHfHGfJAgZxfpwEU122EQJr86wqNe4bR3PLURhMmSNqJXWLxAQpjMr7L2yvW6betdAQG",
  "key19": "4bk1hA572BxbqU49tqnCd8AJDn6CgvaY1iVyFNrcXwz9NVvPesBmGu7QodD9veq177uThxA2rhz1pQZLk3PgV2Au",
  "key20": "45uaL5bMLxCDyDjXwP47MGoDDcmX6fDVLgRGRs6kJdXAksEFBf37foC2wwSPPDGH7d1JWN5BEiX69VMkWTDdCHjH",
  "key21": "5q4pXeQXR3D5oxzF8bMm5yRYBER1vzFidYHLQRMxRQVajg9XeXX43oz8JeQobFA8CaLXXxYJ7Wza9LivM2bHnhnr",
  "key22": "EKpC9e6zdz5LDuacwCvMpr2h1sb6MWn8Xws4WLUfqy22K5Ua66JceSeQdY1o9QgERnrg5y6tXPKJD9WnLco2tze",
  "key23": "4adA9E6cBJNZ3uLseZdNcyEB8oJgGWoZVf9ujgSga2iFgvNXPwtxQAEJsFHmtAomzTfymBG6voEkgj19QXK8EwFE",
  "key24": "nbg2Rv9qqAKwa7ftVRwaxmEk1AUr9tHgnRWbN6E4JsMNgW2tQVohkyEwjU9RsZJDXdZ3en8LvzKoCiyz1hhgFuh",
  "key25": "4Uk8TV6trvLkXK57qngywsSvZ5UuWtWEgbK7RUHmbxe6gHDxL89vFNEtxQDF3frafZwAFQnivear22yo9fE8CKPs",
  "key26": "37NcsZNDK8VQ3LQXfinbKMZt1TB5ngJNLoFqFHcCEfvut6Fjfb7jC4ubJJU9m9C2yfxRLdJHKjLHDcU1AriFKHwM",
  "key27": "4mcYjnivKsvHyLmmyPo4YjpQYwoxR4WkgNrC4ABPSbavR1AdNFND4ZwANBoyYQRRGow2JTZbKGddcFyqYqc78xnA",
  "key28": "28yV5tU4YPDgb8xeNmsEvHDJGeYbGY8AjS5gP1VMywt4LBAd8cWUKchj1CJ9Si7ToWKCwnixrzpM6Xw9hB6FE2N4",
  "key29": "2pYYpgfW8ghLTHQwaARPr18iJjqj7nUXNrv4hXj7s85LofbGwG3NxcBo8W86HENcjqCcqodRd7vFcYMGHifbqZbX",
  "key30": "3L6Yfb4JMuuWDAez8Dt25g4MtowvnuX2cpGcsWSm23bzs7MaAvyF5kqFJhZZhBUpPUYaLskHwoS62eiuBRxznKrK",
  "key31": "DHutKN1dGfjcddQCvYcdSRLauEwNmjSoQu4r1jqzShG3NC3zLD3yUEZazMjN4GvK7iraV8sjCRCaHcrzZYu4MRv",
  "key32": "3cXbq5GZsRbp6Aa1s2g1CqneydUk3zvssoFft5LyejBz2DuUqi41hLQxNibHp9Suvyd1KgfRitMZDqSBLVF2nmMq",
  "key33": "3nWw56M8Yu2EmYkVyJmx8j1Yv4FKM8uNcu7QCG81M6xUW2cGJPkyJhUXsdYzTWR7GWT5DeN8r9sV8QgEYHrEZPkf",
  "key34": "5bkRoUih423D96hkC7U8SLCgWzWaXgcJZD96z5JxoHEdANK7yfvYVsC4TMfsiCNjbpZy9VoVDYuiX4qkMZo9uJq7",
  "key35": "PHWLFZoXFXa7yJ9FuEmTRu9um1bh73DyqRBX3U43sPET5VcFRvmNDAgKq8kK8Sd8qvUdRKPEGBEvguzy1atfC6V",
  "key36": "2dcYvecQsaMcLjiKbRjQv6WWDfS5nEcVUw5kj44QXAec6yz1W17Cz2aCchWgxxT6FcWiKQa9z5wtpXJ6pzyTz7DM"
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
