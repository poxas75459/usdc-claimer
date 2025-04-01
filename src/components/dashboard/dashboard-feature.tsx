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
    "57R5NwQDHLUTfuScXbFBEQtp3o53mv4Lnu89FqZtV76wRNfVMh1QmCb4ggvp7SgKHFmVcJD75PkpALW6HQrUvEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UqGMKLa2dcmnAn8kwtYwFZ42oMMxoC646v1bDM7PU6bLkYyMaxfJ61gorisBA3Ff1pAdcsX8xvWADe16SKqTKaK",
  "key1": "3GxXcyerCXcRtp2VcTwaEQ2udDycuqFwxw8XB7vXioqA7LsB8zGc7WX7ihv9VhaCtwGaYvwZHgBDgsnZP2Gdpo6k",
  "key2": "4eMnQvho4f1LPt4zTByeVVChBmGKSTNMnPhJ8L9AtCXAGLHQbsgzuXNSYDaHNAWsNFH5EetTkbFHhfjdSrGcsUUK",
  "key3": "3SLprqg45dKjUJWke5BziPwJAfnBvDU9KvGwbryRKP8Li7g12k9kG5RZ87bLgRwehFHrEN8oEvBzhystuFyLDAaK",
  "key4": "44XQKHepJTxe3HoNZYECTd4am1j2hyHN7eyjmScgMEPic2CTXTJzPD55hdgoP6xo6iTAs2q7UAEXYG5cBXjE7Mye",
  "key5": "42rPo9vDBt3HkVhLr6MRjR8GoQumpd6wFwZ73uT3Sci7uvxbMhDyhhmK1Xvb8DZnP9ToFUF1fVssQV7XKpKum5Mv",
  "key6": "2KjoB5SoeyLQTGimq95BRxvrMNWiKFMEqbZwLLy5LY9h6kGku87HLUdFATY19Z3kckGT837UhfVqNB8qaobKreMj",
  "key7": "5t46L5zp8oiAH5khLU245nSaREwZ6XzqiCPEe7jLkzkLsCQ9ThvziJN9UcSoyKAjK6ZUnTNAzypVLJfHwRPqkzrZ",
  "key8": "5NRCgQafXN1aJtfjYonfYuwCtdpfu3ydwxkzdzc8RpSb3n6jJci9GKES6omox6SniCNyD9PtLwDyDsxiYc8o1e7k",
  "key9": "2sDbQHJRGuDDrgavPTwVKeiswQfysGfdmWY84711vzjTLyqJzfh8XsHdMhZV37BctKerfRc9K6XqNB2tndanEHsm",
  "key10": "3hbdeiVhFwJXffQLgF4V19N6V4tVKfrAqmW8g6QmPef31Y858CKB1t5dfmznqeEJ3jGqzbi1DsDaYMaMnCboPwcP",
  "key11": "4RY4m9Yoqay5ifF2iCc5cZHqyAB2wUHkDcn4UD3y7TomD36w3Sk8ZScpn9o3Qxh28dxcbHhdsRR1JRRkypQ13dMm",
  "key12": "2tC9XwaeFRhnuQ3PuBMZG5sQ2zzFj7p5UPt2GfhAjrowg6f1Wq7msNLYTCHm7ciHuMeM65voBwUkpeDyxAd5YaHC",
  "key13": "5nR8WWC2bqhmRczyxM8LfoRWthzNEGeCDwnykLdML1RiozrPmcD3GXE2Kmr9Z4FGpPaE4ZVwnBgXDuBQdd84E7gD",
  "key14": "5PMoR771xMRZmo6gxS6oUJJg8LzYr3EiuMpJfHMUB7m6jDheW52ar8MysmhbnwDigFerUwUyzCaxcYUsStRHxu7e",
  "key15": "EZzu8NK5AGch4NRsGsjjePoVQwA1wZH3UJSAreBiQFzkqRrhnRcgqYtGmSwvBUseqSF8FJyyUDL2njEBkhGMxZ7",
  "key16": "3q9Ma4pnGU2DpCpn4TQpPteWSbypziigvubj6rShCAA9uaH3dfBWAkFZZRSQN21cCuNag3AaSLBbKumUQ4HoUT5T",
  "key17": "4T3kM7rmpbHd46WdGb7ToJzViZ2C2iByW5ARTnJp7LsvQKmW9NYrdp6ZfWABvoKjXhaNdgypGud9ekKC5cbXwetg",
  "key18": "2gMUiu9f746hYTHvVwKGvnf2jZ8wyYaLw4N71Vkwi6nWZuje386WdJxSYa9UVZhHXVshoUvPWzkojVQHP6BiBSa4",
  "key19": "3149AVaLwKmZ3y6Vg1wtFKaQVRYEsYu27MKqNg8owuTWvCX8HosfGsx7MMeq8DAf1TFfsaqjHt1C1Y6kPDG6Ya6Z",
  "key20": "2JV3uMwFJ3WUqS5WwAQJmpKinQB9uELfJy1Sy7Kav8ZrrgRkHt9WiAZMjirsej5iWHZiossjUtoDpxFjQGLjHeSB",
  "key21": "DDYScGDCxhwdCn63zp3TMkqoRusJruZJYkW9n7pjRrHNcr6MzEq6S45e44PJaFTEf6X2B9ss3Sv99twcsaxC56H",
  "key22": "4wuNEEo4tpDP2ktsR1kdhLT9Fg2f1uEoL1S3j8zkAjDPZCatFwvfCHH3jJpakb1cB5MScWYsdaeiPbKveHDh2kjn",
  "key23": "2FbBxJxWcWPT9rQ6phcbtNuPNaF1NphdXLLeHtd3XmhMJvmsyv2yqEAc2rhkyse43KWjHDtnBCTEigdSftVqGYgq",
  "key24": "3HESuexfyihmJ3VnMRsUoBpYYh4zKDgkCaXvPJFbG99A5tSYKSwPvWDqWxQoFLb8beuRPrXxtky2zoqRPp9N2uED",
  "key25": "36btS4QyYW1H8WvrzUoLUcTDMDW7hKRRWJMFjHF2AoP3nZkCqLnUikJ8x6S2wJDVj8AyWEhwqLrtBfShhsuCiMKP",
  "key26": "85ptcEfKePvwewLS3HfGE6QhHNfB23SAsvkjC4QwXdaQ3MgXuVrdzpr2HYV3fbSp7cFN78qdF8HTpQxpHR16EKH",
  "key27": "5Pn35ki9Nz23Bd4aLXw83guyE6fPUo1Ary9hdUBVdFWpJNduer1wkUK3tmtkXz2C51NHKXjsbDFrQHp2oQyz5fGQ",
  "key28": "7u4ss2Wj6oDSQPvipbNCMygtbwvgpvS5Gu2yu2FrHppDLME3HXipFVeqyFSdY1DJhyk8JiB37aA3qyBtwPuqGZT",
  "key29": "5bD7ze3LfApeoTgqyHUr47UvXY1NxXCeRpUKmcvSLgYaFXicRfv85rJD7xZVSbjNhiiyRH8jdRK9zbiimquDL1sB",
  "key30": "7DFdj1JqpZenFsLQxGbeorXUoc5CEcL9duy7Ly1CHXFxqdfe5j7mFNyjcRG3RsJDsorTrjCdLah9QCvcd7KDrLT",
  "key31": "2XCK6UhMA149hpxk7cq93zUB58MLH6xovCUZw8p2NiyEt88DXcJSNHoHxPR7AK7BhQgZtkbTciW7GsVAMeUFxfXa",
  "key32": "2G8LYDMTchRV7im7ABrwq2mMgJPQxmyezS6eHEKzWLDmPwmwSq5bLP7K5TNaVMsafLQBGvYDQAAzacfeFj822qdS",
  "key33": "25CMWrC9E7tFtgwVFxWa1rpg5i7jFRaZeSdmZiMF9QFYbyD9J8bAVgd6NESHY5ap9K2e4PRApiDSZEtUvkdCYC6t",
  "key34": "3xjP4mkgeYWkqXYigjSM5KD4mzTiUrpiiLs8GBBvWPapmoRhyJdn5wL58QTMtAZEvRxwFbG63UZYuLLPrZ21kxDY",
  "key35": "3bQe1D8cmWYWteheKaDznkhyBCccGwZopfPYeU5SbqheaaxgQTr8BKvYHYon7o9XFk6TcfG38Mb36uQ4Jpwncui8",
  "key36": "42ZGiwbJDnEicdM1yhAnQ86obPh59EKRsAvecMnKrV6DwJMk4tLBA9J4j8RP9FNs8VeJwWLjq8raeaXKgoxMMzvb",
  "key37": "3y5bEhWzsfYCSz7YAS56bbP6HhgZSokQUqHAmgyKs9jrG9MJa79Db9fkFu7ej7fquM2EXQyCsAS4567aGXo8PNhC",
  "key38": "2j589v5XfXBbErZQYsr2EWKFcTELkvQKvKv2xZD1CB5NGFbr3N82NJ7qp582tiZyVEEAjqcEDrpHT3AfFoqouaBJ",
  "key39": "3QZgFSrh34B4TZdbx8ixmqxBLgYHsSYaKxpiMCXiBbSaMowMZioANRsnxjo4iG2Q5C2YiMsRoSdNzbngs2aGZ9Mh",
  "key40": "5tM7xaWFJ1Hs1Yznb4wG7GoFwNEebdM4eHSYKRsg2GjwLG75goRHirSESJKPvCofCwKwd2sj9BzY7jVsZrU6XXEm",
  "key41": "QHwxekeKYgqASvKXFchKX8NVVim5WMyN9hqXEHi7b2MmitcoAQf4vrSao3Qm6Do4YhMnvo4JEyFpNQL8A1CQE4b"
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
