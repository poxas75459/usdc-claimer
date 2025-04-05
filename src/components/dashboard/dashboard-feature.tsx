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
    "4xUMr9GFhXQSiLbf2YKqXn6asJ9WX4nMkE2gjQGXngAqtEnoC1NF3CDJwzGJCF5MsrrepoTkLRTiDexiQ2zGw2K8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hrrRnsyU6TqY2UMapCjswPAtpgkvE7oRZ71VYvBPX1ABjZyHCnTypVgdp3XmBgwK3zCaB356dAKFgZV3SURnFPp",
  "key1": "5BWWaS4NKNN74ZxuSkTtuekAp5cieCV6PpG7uHxfYvYsmhYwPfBBLQJjtdmNjrvCr2xD3RVQUmsjikdsMr8fAZhJ",
  "key2": "53EdnKjMRUEN5s6yAGh7TSCavr3JsGWRdx9tCJnF6d1bxCEEcgdcwHghuZnZU9gixZiWnU4nrqoqgvadJNnfZ1Ut",
  "key3": "2dpkPuS9MjizWKWFnr9B9hPhfKGRGsPQh13SPLaz8XY8h8EBiPQdA2DtwyTxpUjuoL24ai26MuKixuaKoz7QYify",
  "key4": "5arowgnpn8zxcmJAd4ygzTGC7qxwNzJ1wFLeY9qkPf2hvFiUDS7vSx7pc32M86xAA7CqWcwPhdQwErsrxqQJvn1d",
  "key5": "5aXe6gqfBzfTPERRAmCnz6EMNgZ4Dt3H2zXPF6jeM6KWKk787ijerZZiCBRkVgUWZWdEKxWtYYs1wz5emxSbSthX",
  "key6": "q5D8QRK5tGN7P35mUR633nxsd2u79a59xyg1XEuiGdcUmmTTqBd7es8c2k5rXkhMkiYREfLHY6vR2JFBFEyAjcT",
  "key7": "4rsbeZ1ukBBsrtc4gvDehffmMQVuVTzHouyyWQzCczubujFZXnVke1Rnt7eZtpT4uJRAmPUfT729YpsYujmaKmAN",
  "key8": "5UQi5zabDtLbxBYmwChiRRVHvG8qYwrZVXbpcLDFaaJ9srzp6Kz87wgkkBGAhcRHorZRAXv8bCokXCJfmVoBJhPz",
  "key9": "2TjESEi1CmJfBNKSCP2UWj96ffuDfSAvUnFSbb8tewjBigQbZq9oDMqGGizL5NUMbVwmNkNaGEi4yv14vNvw8Rko",
  "key10": "4A2xY165aXTpKDgyoD6h8qFnxd4LYQfm4KF5QdMocxnvsUCjhQip5KMAGvf9UhgGAEyEpH55ovLMuJLvnTxakaqi",
  "key11": "SF5gjhfphA3ZWqRzoam9Xtg2nuXmknS6rP9ttrCQmbQ1vyyiEWwo5o83t4xuwoGPEDi4DYwcmAfUohZ5BJv5KiB",
  "key12": "4nCgkguw7iguj9w1Dzu1mebiQ3hFVPcPWqKPEUs6y4wyDZFaaKtnTLrQakiGd9fTBYgpCR5gSr1AqtuqkjtHTQUz",
  "key13": "3FbWiX6aBwES7W9MyComi6KywSufLiRyzwuhb4JFBFDQSonjrAWxHbNDW1eNgm8W31hNV7W9WoEtfApDaX9LiSed",
  "key14": "21hmmnLkhTfP3eBJURFEpto3bQPwtTeQ3DNd4mRnsSUB88BDthybPQFybsWBzdkBJ4gNoDSEwrpSBTT2Z73puHb4",
  "key15": "5iSpBxmSWBgCpdUhrrNfnisWjhRtsZb22MyCJZXHMScD5ok6n8d1CfXqNGwvsiJ8fhiJoJ1CJSGynSvaxCkfi3jc",
  "key16": "367dMgr9bPWfDsLu8siZENwZLy5a27JVRqRCDGCX8cGd7s3Kq4rKPX2K6xhFhy1mtESrzbjcYgj8KeyR4oDyx15A",
  "key17": "5Je6GTJAEhdzutFD7iZyFy7jrTsXVrWzP85cypWPgLKQdVY5jGndsjrMJNTFxtHaeJRtWcTGWSRU4NuRodsPAezi",
  "key18": "4sNRJwRhET2no7SMnKxvXLXZuWivZazziLG3k2G2f3Dtn3m1CP8U2dZdfmHzdWCepWxxAgKjqN8USN4GuioDsyeb",
  "key19": "5NCNVUHVTZqyZt24C3yu1b7LsBzUTQ2y7u9Y8fEjf5JKpGJ7QH1rUv2v7B3fQ1Ux9pcxhYB46i19fd1YgjLEF9dU",
  "key20": "3cUdEccHBXc59ZivrQMyLrHzALvgfhT4UaGtbksbbs1Ztu7F4SwCjNnncuQX8gbzrANTMZEsMXmYoD5BEzcQqejv",
  "key21": "3HgqXrcyC7n16odv75Fckp2UnaUqDoH4ytaix1HbauPUSjqtqEjsxcqZkWsQZEkg6qXDGaKL5U6ezrCPZ52R9Chp",
  "key22": "5xQznXuuZW2YDS3rGZEiNqfrafsCVBqZgpRs78h6TmJdAWBBujuH3u6qMz1337PjsuvypokffFWxwV2emfsTpQZa",
  "key23": "q7mZbqVcEadyLe3n5Qp25ZAT7Yohn2fEbr7Tv7m956xXnV3PDQKwf2egs6TrgqMqq3P2w3RoFMS1hxHr6H3ftAf",
  "key24": "2MpCK9vtcqt57PQ4AVdouDndprzaRndLar9uSDEgcMY9KEWZq52yVFTKgfEHBjrDvStbtoiYX5b8oUiksdxgRNCv",
  "key25": "2wpAVajz1Urc8psif4U7B79HPwB2P7BekUbEFaiSqyNAQ4aMZeE9B9rP95h2iWUGUUWvkb9pQrtCh52TCCzqbSKm",
  "key26": "4PGvRDRZ4rv2fdtwbRT8DVoLyCAvamzmzUx4hbi95djtxnjzPH3iB65vPQ1F3PNyUSkDcgUzBTjMezPLHQdTWNmH",
  "key27": "4DopSWXCj6d8BkG7jLCb5ki7CgTHU2CKWwWmEskxe1dMhb7LTHxt1L9Hb46gh58ud5brywKe7TpJF1sKcQPivFGh",
  "key28": "5QuM9FxXRmSHs8v52dW7W9FvHDnfKqLYcz2cqZoRRn2XBjthL84qdgGwVRssUyhLNbBpo18x8SHMBThRi2yKarYU",
  "key29": "aYCSg3VM7zvhiumZH87U486nAY5JRkF97LGmzoLYMkwyXxrBCATiZbnvYhKyZio4tAU8AkeiU3bDkwow1xXPUCA",
  "key30": "4uQL9VnTaghxG2aB95BatQdmtfQRCH1PiR9QDJ4T9vpeP8bfbhkuy1876Uy3Fwa317ag2881WDdm1Yyn6yyrofQw",
  "key31": "RAcswSScTnq3Po75pzE7EXonDDdiNA9kc3EmQGQZCCKezepx49qSLhXzh1c7afgerV2XBBY2jzEPGLNHzSb8dCv",
  "key32": "3Zw1bog4SkjWH2KSKJgZftRkaZz9KQYwJRBH7Wvnnx7Z6zorXVHC7m3VeMLpHMajK1MjZNgSVbS3ySYjiMKPfYkE",
  "key33": "3FZBN92CqPzVVqmqyxyK9FscJFq9dwTcZ7tcG8kNVzjc2z47e9wSJD3fCsGHtbbBDxFfm1RC2Vb9bW8uCQXhc5xL",
  "key34": "3bGwncqC4EbP6xBQssUQkvyf81vUQTGtP3bSaYm5whubsr6Wq4VNNFmdNJETWX4tmYbjHBLVQoxrLoqGHUUsudee",
  "key35": "54LDDD6455sL7jNubYbgUKqpnaixDvcj2kKbKMLsCThYM5MRtNmAvRomiRvir5Gd77Bf9rDdx43J8AWwo9kqqUDF",
  "key36": "5hdKapvRcrWBqgDJMrinN4Mbr3B6ndvZeN8frhm258DVtpiDeovcMF4S9ULTC6NQRmPzG6j71BPTM1igwfNN7rQC",
  "key37": "2gZb6xJh2TvzUDJAZMeyrmiCi9D5vtEfYdFC5pgKiJ7GmpvsU1ABVuiv9HQEbqtZauXFaGb5XfHWefSUczEBZkRu",
  "key38": "GTFYCi6LwGAQFaFUPtE9udwvL5vSpVuBUxCwo272tx2LbxB3en8zrtQpT894ibrgUg3j75aC7fTtCAF3Rwek99B",
  "key39": "59iRLSUPFZt1JzPhfRE8rtCRE4BzUTxM4y4rMbBVSRSZn4LyXBYrhnhB7fctptTpm82kwypb7GPVeMaL7BWPTZhR",
  "key40": "3cAYbU2dWjthZJNyYkZA6XmQzwEuQYggnA5yKVttJPSdQfijip3ncXqegYwgXbYHYD3JvATDyG9tLKm5bn8veu6o",
  "key41": "oRiv5T9z1fPx2akrzgkTtvNAd2dre9M8qmAbNBhkXbAr47sqwvHnV3miyTjg8hioRvZw45x1v3GeLpdm7HJNBZB",
  "key42": "nCrAbhyk5SXVj2JTEDnDjdbGGCpVJq6V1RnK7Z5HzwrcSaAa2QdmH9xmLLH6r2XBKJqWJRvYNfjBuZKoxbu898U",
  "key43": "4L2PQZHg3hUYVApNj9AVZHAfxLVJwncL1mxvoGbzRaAKeNPj53S2aLVaMUMTEuqaj8LLWE9o7Sh2769f9HjYkTfo",
  "key44": "2E2B8WvF3V4ZbwdhLDZpUojE3sQpiddhqQPknGXGCuCFwLdcJ5zV8peqaUD76b2F6Uds7FuyHk5vchEaZuhBGjNB",
  "key45": "4n9iofSdD69ZMsNABCVWXETdkAuGwwLqLFsc18fK5PNGkxs5eV1omf69a7p8MBUQHnoNF14QiZRjStcD6v1CDK76",
  "key46": "2QDFntZ8SEE1YnMk7oESvztymYrXPbD5bLhLCqaEEVczsba6WuQNHyYQr3yTr1zxMuJbu9KasRPuvMpzHA6QYUpP",
  "key47": "3EFrPLDtCbTHHHtKLt4ZEbHTMJM9Y7fTvy6YE22rxYCQFKQDis9QNMwGKwfWzuMnamjRxYLn5J7kbLR8fmacpq8Z",
  "key48": "TKY5aHhvQNrdtPHs3bwrzVEa72baq5p7u5AjhfrYCmPMpQn5jf9cHC6Kma7hxTEHMaKmqMU1wz9WAHNjfDNDg82",
  "key49": "2e5jbKFedopbz7UjRzP4iosnV1gcC9yQgro2Lo2J4hVjbaYPLupPKi2a2nqKQnedsQZp21rYbtUUbRTpasZKc3Lp"
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
