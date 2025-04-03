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
    "QgJHgq8TCJpDC3jEHtzULChzUrTxJ369xq6iCXwHqJDDk8WNCDBu6miCFanh6tP4kzSkYQRFbM6cgNF5oA1gkui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kCnJQmmuqFpG3176n2MEgT2A3TmdsshgJxjSHw478mM9PFMSdjtRUS3gnZV1URTZwaergVKWjVKxYL65bsG13BH",
  "key1": "58WYhi4qRxRtujUydqMDRbpeoLxW5khJE8brcFSzpv7hMcrmjfWFMxs7xFrxuWZuWd4RQxzCYiuPM8CAUweJncPD",
  "key2": "29sJBFc1jQisHZG4q2RkXt1cSjgvPwaxYxy4E3jDdyTYpaoLsYbXjfVDQoaY23K6NhBcoaP91v81xRqZrooGtCHH",
  "key3": "5jmAedbQDvNesEDaByX1eS6BqUP1fA7mQq1mP5ERhpXK553xsHdEojywR1sfNZjdDkJnB63NzZwBG6gYAXK3D1Pf",
  "key4": "21usNGk1W2RSdCe1y9Zm1VkBgRcmnhdPdu2c9BpXUAZsxDbapmcBProngzrgYmkRDqe9d8H6hE8obKsWzbMgyJWy",
  "key5": "47kqJwhKJoeWEtE17Sfepw887PeRfH4VhP5jpxWrjmdi57iR8neLPcWXzD68Bwv6sGTAtU5zN1g5sKUd1US7wRVy",
  "key6": "5wmYCPYNA5ezabZGZtmNf5BeEN5zUpFra8zTinuX4ZMwMhKajxKo2iwMQpLugKUYJt74EngCBC6RPgijRp2VgAGN",
  "key7": "6xZ9RF2L48uKVYCpGDGFuU6KzBnr8QErfPEi1VEow7xz1m2SBgkzr9hhpeEE5RdnTu2JApXtscUYpZdMd4mnBLd",
  "key8": "5zthBtHVvYvorjEN79fMrJw7HQ1UEcNSYuGZAX1UCGHhMJh3S87Pbx6qkTfL3nZwFizGmggayBW94QcYzAJqxPav",
  "key9": "5uxv4WgwmfF3dm3vGbnKF5LVB2sbgeXDH1Z9kEEhGd2ih5bt9phVSu6XQXAKzgztiRjPhma9MnVRPC6ipRTfSTcT",
  "key10": "4ZGPS4iBPiHZT9xYFmQsTTeXueUeeyB7QjEX86YW9s6ihRzNnT9W4yQPiYEgS4npwzJNuafZ24q7fWSs8opaRoJs",
  "key11": "47yPexfHxqQnn7Rzc4hJdhFrGJHGt9pyUztqop34YsJWP3FPy9WAD7tb6B8sDK4FzU281Rqq5vpi9o5TaoLZozmL",
  "key12": "QH6AJYcq3E49893wcptiJKpXWQrRYMGTW6cKr8NSr6zfEZ8eZd4DPWFgjsFPd1iLc6Zmao7fHwPcBZHUyGkQ6pa",
  "key13": "42nZLfsxwWWzDXCtcxwFcty5Xp9xkPiA5Ms5qhr9ycY8CRaodD7ENDrcWYN3KZ13JNPx2cHzssWTUi5TKsReBGqL",
  "key14": "5R2KF915FFQeJ8sZsxayasnaXZUSgFnp9LonSNfXpyj1XWefTEtt3dfT4j6qE6i3j1wRFm2XCifP3T3HHUUxNJmu",
  "key15": "2RBDA8c4ekqGd8RAswAxG29YSo2i837Lj2UFxARpMJnRz2QeTQ9JgQCvKZrNpmGCqreBfYe1STCuMP7CPeoYSTG8",
  "key16": "3TuvxH2iUgfAnEDV5cBH7bo3U4YyMqWiNhYAMgGaxWqHNd6ktmHGoS2fJSKFmRWtc7x5caqMQNrYSeHynxepBVj",
  "key17": "5QvX4g1MT5gsia7M6fEjqHDZFspmF1rdrez1UzWfBEeCg52wLWGzMcSzn1fpf1fU78QNqXN7HotGdAuaL7QgnJ5q",
  "key18": "64wso8AuyQyiviAYbi9fke2MWWGCxxd5SaeVws2gigp9MGZe2tkGQMY5GtQkV9MhztNq43VgmH6DnxQgSHtBzJbJ",
  "key19": "3q7KzRgcv1DNZFBiyTQkVczsFJGmJg1s9Nea1hYPnrkdXqV8x4yAxHZCDfeNy7KrSEiAkUCn8M3scUhfq1HQv5Y9",
  "key20": "5BXkX1eSiXwhqHreJuQErdjjYNFPVfaTuXzgmYqBRN6rsdtgXY1x4A47mA9aZN8DpoCAbc86hT3kHVFWFqfY5MJL",
  "key21": "2KWVKERuMCdGMZWsXm1Cw6rYAxXXxvSZ8jBEG4HTcwmwij1dpXHcWRKVt8NemcTDkQ8Egy5BbZGv6Y38Sr3f36mn",
  "key22": "FmKMuReFQa66FAsebLhRsDDXufoMj5ghnevjkRdALLTVBcP8DTy5XaJsxGHvCNTyRqqVyuekerPiTLZ1aePEnYk",
  "key23": "4C64om1x2iwVgSLRDHqz2d7CHsBArwzFnjzUguV2tQVFHWZ48i3Cecyj6MoxZDKwK19Z97eoS18EF2JSuawEpPxW",
  "key24": "3rbh56P3FCaTEB97PA1YaRU6Hg1wd2BG28b9KA9w5PnLxKiZXnp5JiwgYYHdmtte4wUa5c7QGVct8NU9NVRf382d",
  "key25": "53hMcGmRkJQyFZydg9h6Bsi5yinND61ytaVakAJ7RPZd2W7wFpsBxciCpjNmYZiCDPUUh4EVanS8niod8crCM7Xr",
  "key26": "3FfXLykZd9ra99U1buhDkFxBN5hdXghyNAhCaFwHHDfTFEZjpfKpDQQruCa8Eh4pxM7vDuUMr2KXRMEPUpKrY3kJ",
  "key27": "37DdJLBRSKTkLchoXX39S7CT12BFHePJdCMYs5drgsSwwve6Jjr37MRj4outrf9JMj42YwyS6XmbP6tNpCSAhCyR",
  "key28": "4d5SbKNHrYueoXPYqPyFKtH3RUjqReJUKhDvTKxJ98C4wif8XJFSUsy2Zoz5p7XYbfFE2Yw1LfpqTznCjQCM6qAo",
  "key29": "5B8u5KmvoRyZoyFiRTfr4ZZFZ7WodXFiR5UGXBfaV1X47mqZEFR2E2mX53HVZvwtxbb2QJzfrDCYRL9HL3RsBEYy",
  "key30": "4ypuFsGFjqJ7moNcqVcFeeu8CfZYei79hV23hdmeai7FZG61o7g6jjx3ounwbNPBRt4yJVSUasMPvXXc7LuxCsn6",
  "key31": "3TEwxJASv9msCyqfJdm5njDoaerrwDsy1mM8du7PhugmzWYpEk2UgNHaWqHiP3Bi3CULNGpvN3xxge6vpmZLdkaH",
  "key32": "4QwqvMuwUg4q2yjdaEHoWCrWvsqHnRxPZi2EdXNKGdbjdquS9sXSFDtXfy2PntoTAFtVmE2pt3DWWWFevpcsrUES",
  "key33": "3MV42BHRWaVXSAhmZxWYkFytZgdRQmS9QtibWDLo47Np12GrSu67ZkZYj9g9QtcNiFSS29yGE3JVLnBYxYkH5H1P",
  "key34": "4BCjffV4tVsRFdapTeAFfjj2YxmbRwvxqtWdajn1zYAjzA9gZCMW5q5mR9vs5Hrm3PGZqNupnCXYxUDkTwcsDwJw",
  "key35": "sS6tCMU5EvMFMHXMUGoMnHiDXrVJBw3S6hV1bw7ANeDciR6aPG7mTEofCbL7rigdZY3tiNLcYfsDLmLbRuehXUs",
  "key36": "5qRWNtBS5rKdJFGgTLkxqdnu8YwMTc4MARripHDj8yJYuJSGrNNp78LJb764MCyeWY1BG7VjThCe2jtz2hsZk59K",
  "key37": "44mfD5CvvWxMB9zmdS7raCBTprQqC6vLArhD8FPij2zvQ2s2812e8Bzi8KassW2G6BR1BaAdCakeVuCxwaG3NDeB",
  "key38": "59q1DdUnyRNZkm8zeFXnV14V5vgytjCJTAcJeg1TN2CC4X5PbwXJKudksKw79oKv34UESSxaRphYmjXGUvQ5WEcf",
  "key39": "3P6bKikwHjrrz2eCdmyZE734ZeQu6XRrr73nTAAQVzV8ohphWsMGtJAn4MNnVGAB4JerGPQYwwFTZ3ybVr5mhtrH",
  "key40": "2oQrkobbLk5SGRSZCJpBsa1DQv87ivb1fpPVPSvHEwY8NEgM9Nc12YtD8riVmE61r6NucrSEPhyMn2y7bnSnJKnf"
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
