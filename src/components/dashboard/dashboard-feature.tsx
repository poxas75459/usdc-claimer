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
    "rt5qU7Nm1NE4dTW2DhRtykg9deMTWQ8iaeDnJ5renL7SwhijNqZuRRn7EF1nPFDRoi5T3YMUwAGpGB4NP2vRzTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vUnFD9ng8XHGVNcMG5SURifFvCbtGsb927ag5sKndqtagyvdPbZRwnC479EJFFQZGU5TKoCHbNp1yuJDn3tN5h5",
  "key1": "2DN2LwRzr2vbio61U6aPCaSvasSmreBgxXo4ySvmG8RRFAnVdmX5eZxjeNbBuxiRXBKsL4LeKrfTELMpeLdQWKdu",
  "key2": "4a7tbnFRKK68Fr5ssr2TN9fbBezKZYgi8waQQcZ3eHCxd74kEfRzdqfuwzkQHZHfEnYXcLJ7XrN4mkY6CT4Uwfuj",
  "key3": "1HQDDXgAuFhgxSEmxCDLRj4rRjyjoNFe4DS1NvqYBK4D9h6imJr1W2YLE814yh2XSKkGX2YsD7Tcg732p8XcwMH",
  "key4": "3C2pQYfejtkzDZGLxbZxKyZHRDfDCks4BEhyda3q4TXnKDEuM9Mfu2hTLH6hfJM6zgUQVZEkxpLjCpLjAEztYQsF",
  "key5": "2T8W55PXDCusmWCX2YYRgVj76LgyymyGY6sBUXSpWXJ8f1rynrLDzHxJ3FJcFx1wSD9rhQAJA9BE6uZuqqH3Gu84",
  "key6": "32m7ZmGfCByKgARZcxZ4zsvUdZYbvEm5TsQm7u1njpYXm83EJfJQC21dovx5DQPPVHNr32H5q8XZqP9UGkUz636R",
  "key7": "5kACysRq2RHGY9iAjzEAWxFSwohoRzEGwKvfLNGGYos896YRgKYviTcKHEjwWvshDAKu6kBKQWYDLNDsSxdgKuBv",
  "key8": "4ZXM1NEZJff4YRhZCSvs5Fk8Vum68PgY7oY2qn12J9YEFqB61tchdiCHxuCmfEFsJTm48vgK8mffgBEA5ZeX4bPn",
  "key9": "zrbXpUX7WAweAmaUPuCBzHbXmuaKLnDnbQKrSuSnP647jYcV8hfFDobN3W5CanphGr89KFNdwGSuPsne86HmsM5",
  "key10": "Xu3WrDJMUuRhHihCxJ61woMiWpCUnFGHwD7zk5nwpRCfJrpxcRiRh7h4bx7KJhSSHnoiNajEcTMrCY9n4gPz53v",
  "key11": "3NM7Jio8AmVYuVQSJJZiipTtwLFnzmJdoNyBGjCVuZPbmnzZEApC53f7mt78wKRFyd3NLSYNDeZnsAgyGfnctiJP",
  "key12": "2MoEN3NZXiaZ5Ykqr63CJ7B7Zyg9AC2EzXv6Tqsg3AoeLyDivKDVp4wdJBguPxke2oyAb9zZCfmQtEPmPwK3dQdB",
  "key13": "2Gey9JYTgLjmSHSmbtAvNDc5sz82dthdnojsKq9zVH9xsL6Rc8JjJixLnM2qW2LZpRsqfjaoASKoBs12ft2QfgmR",
  "key14": "3prKB9EERMnHvBfNWwM7WNS5TdKAWt4kMAUa6Wggz3ehMMUo9gxAC3YefoAQgfvy57RSEGR2rQdeeWDYe1nHGMSc",
  "key15": "2YnKSbvbf2GH7yt9KuMVEus2kDG7JYKDDTDtAzW3jVbfk2YjuXN88Jd4S3ATBi99NVQbkuJABdQyPq3VkS7SJbL7",
  "key16": "5AiGRL6HZZfkzzv7VTF126NhXViVaBp7k4tdNuZj9a3kqEoYkRJzB9r3P1A9sFkC8JeNiA7xM8UVUoUD3G54VYuf",
  "key17": "4bxBLMvXoYzFntp4didCemt1mEXZcuzgY4rrmBaX5UXFb6H4xmqSWTEsVAZJGeBvWGAkGWxwctUkPnJLYMB6MUiJ",
  "key18": "629bFwLN3GPrXJSsocMG3U6CHSbhjSDVAiw77xmWpJrxr98MeEApaNNfYi7RPnETVJgRCJoqtAp9ceP66egZT64s",
  "key19": "2N4ZyL2aXogj9PH2EodaszY2anWnMo99JwryFfxXYNk3s2RRmfV6tdGVVvnctYQY8qaFthh1t5J7VNR6Km5Uqxeq",
  "key20": "5SX9KYw2UoG69J8tb1HTQL5abXgW8oM26jsyPaFC8B6itSNxPCgj7hzmFzjFJ2U3R8fJ1VGEPddmVMLX4RfhDiQE",
  "key21": "53we6t9cSDxPfqCPo5HBMNBi6UcWDnRP85KwEFdAd4LKwkHDQWxfJhefgJf98grvqcbQAti9E7u4MbKA7NbZXH9q",
  "key22": "2SAThZdaU7eKodBnHxkSaK6TCVz4aes4cfBrXGNwPJ44XwXfcgFPC3mvXYV85zKgkxGjMxLgTc8QH3WrLBnhgpci",
  "key23": "5y3tDF8SQEBZjaa2BLnGqgZ4zGo16pM4RQA3TsF3aWaTkhkSAXN8fpdxUHyDAYSTUz1FvpUUDXUrT7E8imJ2xcD6",
  "key24": "2HfK1DnkuzGuYjRWWZHF6VACzEBXXibt1mz94zG4FtUdbYWExg8eEAFXRR4NBzqpx8wtLwwsRvQPmWrwj8gMb7KA",
  "key25": "59sjenUjaZcG4aqJTcBaLhhndP8CVDvRrp1khMKkAjGj7gr2GqybrbowNmcgT3ZvpT8PK87a63xt7PxpLSrAV2Zy",
  "key26": "3BfABfYGL6jUgPTubbJvX7KUfTXanGttqvmWo3p2aFD5L9R145PRqCJWn1V32pKz92LMU3sgCornhQbef4Ga3pf",
  "key27": "5ekdzzs1xY49JQmrM1MzDFVM6M2z4EnmdQ1qBuYWTKktZh3ZUD1qhqrioon3GVhw5hXw7u3CfUEL9nR64hTvqqSr",
  "key28": "5kkjLGMbt1D4NQ1wt4j2mRCrxi5xDJED43CCeGrG81t3gh1zbKrCdG9XKnsyYJijpWsF5QcMaKvgrBuyyYPac2zM",
  "key29": "4sZ2oFcPW5XQbCubPcombBBQXRPvrPPhVaLkuxvo5XZUZgaR1LSVm5U2g6kAfNRABcxL5p52C6r1bCqYMmmpHh3u",
  "key30": "5cLtyKzLxuLApKf5K9QzbWWZUMXHPn8XeoKmcTh6fxtVVViXMDKjbhj8SLSihwYRCSkBMCy9nrCMBEHAkHMhUwo5",
  "key31": "4vfK9XFUuiCnFvctiei9YsX7QCoXtCeeW5RbMCcUFrSzJCnMDtML8rpzSECkWkbwufdaF5PuHbpWZ4zM1xwNrxni",
  "key32": "5Me3gQqzvCiwCd4dGHGaK4jqihLyAMz24Ub87ex8U7LavD5bZhofZCwQh9NXjqQTDJEraq97drSuDrKYBUAY5PXk",
  "key33": "w3yTv3T8YqZgiBKof5Yf4pfsPeNuH21LSEwrjub2VCw6k4WadFKmxc6TrNTpHcwFL94dsdqETNthpoBE5EuCbHh",
  "key34": "4SYsvetw8vN9NFTXiXoQiqxSWBZuYTrTJbeMfm7nQRikzBCT6Eyf4qNsb9w5VttbpYGZYG2AMnVekDKA3eUmMEDA",
  "key35": "4s7nUwBLj3CyeAAH4zMCR1KVa8SXTz5NFMRnnPfV4KpsyrDasd5jKFXTpZ7yHqxqvQ7Jj6Z6KC4rmwy4MKsqF4U8",
  "key36": "31fCGNNYtScc3wAZbRhifmRDSFCikxdneV971U1fvniqD6ocVxebxeoyfa2deBqZHgUSkkze5XtoAaWdMq98Pmgm",
  "key37": "4Hg6U2ifK6YqxqpSAxQwTBRrJEFP6kXBtjR3kFdkCw18ntYEB4KQz2rZQkoHPbdiZJwcjwApFzSJ9DeV2XrqEUt6",
  "key38": "2QiN6sqR9dVDXzgEVWkwJ2wNMdNKvENNQnUhEHmoauDbib2H81KhuFawY7qNcUubJGyZzpjQiqV7dKCbRsDaVa97",
  "key39": "2Z8Nh2gAgeyeRMpXdJJpQxPYrDX5g8xuYRKym9tH3EErdTsRLidx1vNVSrCKFp2JMubuRMfT3qtZ9xKyTdgL3dFW",
  "key40": "2ZfaCimnj4rLh7tHdvn4KUX656Ed8ZwGbzWuxSWQsArbYRk1iVC6mKoD87jNLhnhsLshzxiPbp9GLpDpkErFoaeT",
  "key41": "2ACGiHnRoEsiVYtb3Jhuzp9y9ofEJoafuLnAmN1hLbmcjyzsgKGkX3pRysdcos8QiKsuk18zqgCsbsUP9SM7dfcN",
  "key42": "EwvjBQEgZHGgbFZnacTzxgTZr9RXAX6d3E32a66sneCfsCar948Wv3V1dePvo7pVQ54bZR97524NEPB8mPrCva3",
  "key43": "5vbcGCw7ZsGRGDUSYJ1KP6SREYafMiHUbpMgudr5BBqvvYBhfkkf4og9GKpcTg28CkQ97EMpxCZq6JGYBtmD3J8b",
  "key44": "4yRWqzba5TX27wc8wMmY1f6ekEbkbTpMn1VtfXZyxCCN9GVhQXKMiLh3KD7w2fWWJkzc11CvbMPZEEj7uR4ug7gr",
  "key45": "3DC8T8W5FiUGufXxxcZAgExRJ6xYW3mVozLvRetNp7PTrggG3pdCFzgsiahiojMrWY2r7n6ggAybT1AujkZpqNyK",
  "key46": "5Nr3L1zRi25hKWTSGvE6iYTZu765V4kCSn6jMFqDZy1HkF3N7AMx5mRGLdKDARx7QQAYbJxbtjeswDy5kurRtuKx",
  "key47": "37zeBnJcnqnTw57CsHqTauuZEPzBUA6nunaU6cfysFcDzQoHPC27KCDV7CQVJT7nvz2Eij15woxPjwpireRiA9yd",
  "key48": "39L3jGmysuRtcgkM6DFFjA5c3R9p5c4Qb64n6tNWQyireWi7dQz9b7UTtgVXFgZj8yeHUTmcNpSwhRAdTcPTrPwF"
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
