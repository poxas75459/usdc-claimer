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
    "5RJwSmUX3nSyH6aX1MGDUvPpfM3t6TVsvqmu1n4CUjURWkpktmazACSrg3EVa7WVFJGxA38DeUAd4NjmasVuRHwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LdQeHDh4QJgzkP2dXvrxaL7KmA5wXdVHwRe957HYhrJJY7xshQU3H5gkqMBnBMMn9nZLJpwHqxhAbRYeLLbvmia",
  "key1": "3Sup3MxxQVvNFsaxB86XaxEHgfqidRHLYJDBtRkajaGiDVbJ2kRWN6tXBSvJE6RRZ9zpMfytFJ8TrZJ1cjqXvC2h",
  "key2": "1RZxYTkiLLxWkurCR9SyBfCTxEBUmYMC4wJg31xaau3GW4m8Cr1LxsEPZXiQoWoMspSKvuJyApXY2is9nf5y8os",
  "key3": "4gVGUd2DXaTCSbFrW4jUfJpegBnZVwZoxith3mk7n9VPD5SNoTZ9RKqyEQafEJiEmo4KEE9ATitTkQkQcy24mJ8W",
  "key4": "3zPM6A3QrYiU19AiUaJxcYQuLyXLdyqeMJXNBPsAx1XzpMNtxEnJF2k4tphjLi5RMMQq14tHu5TL2JvFaPK2b2kM",
  "key5": "5Uhv6tAKJGaLPtWQVgRpKu1XZnguXwdsr2h6KVfjn4P4rG1ZnQBr3gCi2nfPQSnykqc54nV7epn2xoSifPr1XRGN",
  "key6": "5ioAyXBCsq87wTYWqrFoxqRnoLrPcAiYa1U713YFyxG7oDK8weQhcaruTM9dabPTFz3RXoPe5KvNV1dzcxDK8sU3",
  "key7": "5AbLHQeBrWoPUtViNw2th3NHMJ3Qum2492enagrMaJX6T55YYMx1VKHi6DdX3BM9ixoCbG648B2obBuDWE1wFmtS",
  "key8": "4Bufk1eZw4jdDTeLg45erfEX3xbjjKcKn8zjGKZ3A687JvwhBZA8Vn5pWM4pkUSkcVPWBZNhmXGTUhFdUG9LqAFC",
  "key9": "3NLeaSpDj3k8nvVsZsj3iA6zfQ2D9SrRZC4sDaZEiaB4DTZPp1SirEQaveatBVSK5CuJyp9zu6CiR3hHnR2TNCjw",
  "key10": "geSfR9f7e7o3tSGHveCvevmG6zpcmw8ZnEgjSvh5XY13DwFGoRYpkM6yZg1SCrCw5QUt9FjQquVLcM9yrrBWYRM",
  "key11": "2T8rjWh8gk7BDRfsH8XhFnBXkekVYJLaBmR3qfoqwg3oawpju7Rxq2XUvskmeuULZjGTS4ZLhLbWpLPfP7TkFvMT",
  "key12": "38P11WqyXVVpKxtwHa1VjZyjowQKLQ3fCJhyr12SrNiuf68QjzyM5aXR61u2KepK4qwBwgCAJ46f4LB9kpadCwxH",
  "key13": "2iyjW4Pw3gULFTmrkhPYXQ5PBAm73ymebZyTeYLMwEzGEUdqijCBWxEr1r8Rxtv2Ur3bCRQZYtLRafrtJCgh4yyY",
  "key14": "3C2j3kziK4B1J5bzgaNpqsAs3JLqBaTWJpkWHN137N5Gmmh5wAFntXSQ9mncScqGYggyDJU4oXdrBkqBZcHiAmUi",
  "key15": "3rnA6joxppqnFX4aGXW6eDjuCxai7Ky7dHrneuckq4CLgt9mZ1r77sZXxmK3uw3jfBWs59qtGGxaVA6XTTXHz3UW",
  "key16": "6522QfHWDCTgtxVmZG8t4N1zC5i21Jy473mG79M3qiepS2GNyBEp32fT3q28NeMgo68P9soq2qAn7ZLjs98rWq7L",
  "key17": "4nDHrMxpbygsdSRepChLSfREHxshMGXVVniEfQXKymnmVdrxSiEiv4QNzrMgy9hqJBH74b6LzHCMEtULWDsEnoFn",
  "key18": "47ZHSQTMpP4TuoctqKJnqe6iTE7o3pidQ1AaxC5Fixho3TtEkyohQ4MQmMq8ThfPcDhESWjwuLnJ9KPAtYFf1vJx",
  "key19": "QXiT1w2PRBhHB9f3hSAuuqQDxMZZXbj55kgTWn3GioX2swhbgEhM5cGcswnaKfGEjnoZBnPHyMPNJB6DCdAeCQY",
  "key20": "5tLzrtZ8gytdLhByXPccUXdzszza37T9CQ1Gj76825rqPhNRZF8fMhqqHv23pZhfoSgkU5ojSf1Hw3jihdUPBVQe",
  "key21": "jh6dBogPBP7UWTbgY8yF1BWddzGY74MMwhzqsViSxY2w6hejaA9dvnma9tXyRyx3FKZTmLkDKQs1fBbo74MFBV7",
  "key22": "5w73SLW4iaqJPi78y33zcyjn7auBzKNhLH8H7HZJDWDX96ExVany2U8bK6s24UjZM3MNKyT3418sh6ERWWFt7dR6",
  "key23": "5NbcrdeHj54Y9uXRkAE8cUJQgUrS8pLZaFdvibDbSGWxtDKEwuZAgn67uQo4GWpmogM9NWVLvcxwHeRA8RqquAxp",
  "key24": "4GQ4qxEvxU81a4NJeVmP126WeWG7DMk41DYdnN89GaohZPrcJh691y7PeChMkzyAtiiuEewuwTf2a5nWYkqUpdQA",
  "key25": "4fFoJ5iN7NJtgxDER6Rcfe4Miy2YZF6i4Gs8fq19fvYsE2qZArVnCJ1oR6CRd6vFkgnUD9ZZNUuUiTA1MqH3nFwr",
  "key26": "2DegW47Hw4VLE569MJQ2bzt1CzGSuH7YYresLqQfpaiA5aw2H5jJZJqNmGHG5d7m3MatQkafaG3cQkEowLJoR9pg",
  "key27": "tkfnDh4VjGJPoreBDnaJmDBsv9JKCxmEQzkCv1AVvtXb81Fat4gtgfdFUMaF4hC5my45Zt65Wfqmo82aZxqpVEU",
  "key28": "4KfmijERvRTXztibg5SbqkVZ8kfVHk6iQjU7EhCwJeFoUssX8E9aECfehwcdCpXKNYkGYBbz8fSZJHfGQxDZmPRV",
  "key29": "4yP94QhSm32v3yoNFcu3MqFEYUWT2nqQdP7N4CYJFE8Gj6G7bnUJ19SM6ESz2b1saxoYC2KbZFhTUxnS4giqnSDs",
  "key30": "4jdp8gnwHJ8kV4LYk33oidFEJUymxhCa8NmusJBmycxD6SdzFD7tu8aMCqo4phG89rX776wN7Jt5Kp4Tfv4UgAfc",
  "key31": "1mtWxSXZFvio5oWaRoBxq9oKEo9FTfatByTMr5hnQweoSTQ8Drx6yUSfakVesGgNqN1mP7CpKzzUd8jTbz5u5sy",
  "key32": "41A6vhpESQ47aWWQwP5kd4o6EdSsqNfP8TNDPygfscUr7JieGtkcaz6ZphnLULDbZDoFzXaVBdDGHFCwiBeuT7BD",
  "key33": "5Bee7wydHndxcXwawS6zBnFwfPkU27yS9npETHJqDLz8aj1xWUcsgwadxDVmcpUc8VpdybiwKcGbchdViXh1DSHE",
  "key34": "32sVBL9z4fZfc5NCBp5oSaub4vCZcrmyogKgfbzBptF1iLPoSajCZaxQdrYHeZoiVBkYHu8pWEgddxuVGd7NU1fe",
  "key35": "5eoqe5H4C2FGEFPY2X6McGxiGqmRJDEqP98NLcLifLbxW3cMuwNABZWBVi9gi8JBd2FjsoZ7ymAA1Gs1jSGmUDpp",
  "key36": "2Ze5HRXJpggB2Vbiw3YydWFFTUyxS78iAvyJRZxjVX1db2w2KsWZFMho3g8PFKjuebiGKpR8WvCX3Yr3yByh1D5o",
  "key37": "vPFzrdHKA5YcJ5zxxUKHPPjJdW3vWsQMsnzPSSaNnj3JFbZNArcg5NeyvQcGTmEUhh1LrRwkfM5naLGwQosXrMC",
  "key38": "5yHkK96BBe3vPzg2fN9CkoZgEjWTmakDxdMqV1ib2tojt8jfVQbDyHKqkNmSSc216YFCZdgXBiqYKBeR7SiZRzF3",
  "key39": "kS9yXbcxp5USXiWDSMNDMNRDNnt5hLs72iy5pUqZhZQVFiTSwQpuYxf3crSaKSH4n9Mt9G82oj6T8gMkPDVHgBG",
  "key40": "227inKtbg1kx4A1GY4DXufHinEkbwRS3JkhfmXW11gzHoEtvo64pujJD3K1dY63eanYGjz4ZbZSXvKP65jktQpiQ",
  "key41": "625En2akgcL2ekABALV7n8iAxcdcFXWyYkFhG9HFMvg4hiHLvnjfSo5cGNExXCc8gNv94A7pStF3rqDH23j6b5yN",
  "key42": "2yruapquUXTzFjAVCgNY3B5pzcKYetMZXkZM2629bAigFaaX4bWeZ4U14KymDQkHb4zGq1CrEiTmvHzJ7zCep6we",
  "key43": "2Ds9hcFd92zvhj58ipH7ERjqhxw5kAXignCPt46TBS4r2KQa7jSRy9F1XzUgbuSsS842JNCQ7zA5VpMAHVQyoedq"
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
