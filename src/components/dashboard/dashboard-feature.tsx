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
    "2RqpiHEyYRtaCatNr6SKvwd1hyqqvL66Zm3RXP7ojZecutbiEWforYetLs35rByeWoWobWLi8cQKfuWNHAv4oLS8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ax9J87hbkTeU2JcaSX75GSBtv7mSivrSi275pMPmG7W57BEGcACGkeUaJa1PiYB3B3Fn64PTVH8VNu4xyaxd754",
  "key1": "5E8VynskCqBgivywzkjnmypve6hTLwXS7z68tn45pDxB6HJB4a48Fda9Km8ujSS4RMRc8LSQSVdnbLonuZnqaUhw",
  "key2": "gdAtP8RgaVDgcrDQN9busmh5tdAcwYsRpZcP3ZxecVKrX1S9yQZqNBKy2kg3bVVEju9zcUa83d8ASYRfp8hAZ5S",
  "key3": "3zj16tfT85cz3ktvunPKCpbYNmUoPVeQJetoNwgqg6L8atzUqPxkKCtmW3msKHSPBGmAnF59UXvQiwyJWoG8ckN3",
  "key4": "3UX6uoQSvbH6YsTtRNPnfHPogznT6VeMS8BoWpwhvXVeVJEeSy2ToKKJLEQ8SoxMgPzSaD9H1J1ffxUm6atbRKqN",
  "key5": "2PpS6xJTFBg78kATLyGLRdYhfuLEhoLqtrWauYmFPubjQAxQ5CxkBpTyYzZ4tCGnT6mL9uj6ShY2JJ2QHed83X3W",
  "key6": "2tSGDuQZ3RkLcCTFQ31tuS7tuGrohBVm2Zfj2JZah3bSVm5uSZDse5HqQsNMD766AWnx9Z5vT9ixqGYesa8c7McK",
  "key7": "3bvaDCaxHA9SHrKUnDjAzx5GGEhWxv7uNU4noHVxdNngpPNiroxgFSUTeNW3cEWoBnoS75SbcnmpmiFfaZhBapx4",
  "key8": "xRRGVitp3c49C5XadninQc2zMLWUuN4Z8hf9jxCfL4iyA13jsn3raFudJS6BWSpZSaj1sTkPMXUmrs2vSUknrNs",
  "key9": "5SVykiEK3YCUMLqVWav4RyZMaJqn9uoVWj5juxRSovhc5h6B7rWFwtQEmaXZkpt62QB8e4ErUfqFUe8YDVXZ3zHC",
  "key10": "4pom9hzVmprTAwhQvmtMuHvEv9eJVEzfSWUqG4LnTxDCvGWt3C7QjxEw7BtnkPQeYjqN2tfuiaNEaQv819prQiNF",
  "key11": "2U8QTi4TcsQr1PvFzcpJhzigctFqrWcFzEw3maEgEMzJA8YHTt6fBXJQqfqcuDKS23cUGCKCThndLN8RNEdroGgt",
  "key12": "2cEA59WFPYHhvkF6tsyekmDtZz5pFhufByP3qs6RvQ7PDKytrbzPhNND8zybkEPQG3LCPkHwJ3BKS8He8iXmvjy8",
  "key13": "2Q9F9Z5XFYha4Gmyfp97aYp2Jm6kTXULcdtTk6HGdPrvzebL933DwnNkmgfXAd4rYnD8Liqs2sFGR5kasnWmX5Qp",
  "key14": "2LKh63vSVFoCmmLWbSewKk3N3H1AoJ3g9bUFhkAcewyCWauDht63WLBnsnZbz8oqqr8YjhYhNepRDhZWmR44nYCh",
  "key15": "33fhDaeaLrWs6V4p3gE4nzeVCcsr1TkLNrTw3xrNu2cvkqzo9fW6At89rpWwLcTQYi6ZzBAYShniPj65DmCfmZTg",
  "key16": "4bkJ84BYSFyUqfpvYnVf7qjEeRXdHdtdT5JsRgUwCh8qv92KuTas4rxU6X8MNQYZTecJeA6hLdgJqeMUKEHbGmkx",
  "key17": "PHRVkCHrdJiGQiFLi5pGZkzegvGNVxiTFrT73eR2wMkcR8ucsyb36CyrqckGwkc1EGgow5TsvdbnprNVEonnJRP",
  "key18": "4kgTozbnNknKiUtH161XJqLN8epMdZqp9ZBQYnYz2zsoihVcnGj45cqhUSPZC62r4GyYXgghCh8ZoSqT6zfrDfv6",
  "key19": "sytjcXqQUu44Tu3yeLx7fZshPGrWrwvn95ZsafBaY86PPBGEm3J2NNqW1tctUtZm8WJdhMMUoMTYwksBjbbpNKT",
  "key20": "2icpga7ADZN6e7gNHmFjacCps2REEQG35jJNd9ZkybaF4oWNMpvYxQrfMNDoBfeecZ1Px9Xk5ynxSufen61n1FMC",
  "key21": "3CEVDNsb8vG1UQhu4NzWRT5Ck7ckzTKQgJC4EKNmB5XCmDV3BhEEb1qdMAtngEYXi3CQmkV5DnjofH93JMxt1wUw",
  "key22": "5pCg49cuwb5jgrKMZdXszj4kqS9EiaD5jhBhtY45rf8MVaYV58LC78AaMjKFPAw1uz3pqYL9QRK6mxq1Ki2Ubv4Q",
  "key23": "4w9Nep7UU75ZRGYuQpbWS8eDqmSSpghcR3zEkYiBbMFDnEcptJHGtNFtSLq4sgkvMBbN1eriJyrHxKh2xPZVRvJY",
  "key24": "2KQnzRRqRy7xEYubVwC2qiKTqAgfUXErD898DSnJuRzXDbj4m79UqSJVjKSPAeVichD3f3Su73QsXjZC23bmNGDk",
  "key25": "24AUuCzJVecpJZGXj8wDjwZJyu7qX7rFsgzjwaX22vzySBM5nt9jawWXGMYftbu4hJxpd6GpZwn65suC6YUeCWzM",
  "key26": "2H4bn1oD9tRbbZ9MXZ6NySYG42jYCpDZb3BCSrHBjaG42ckc8BffxrrRstUYb1ZJzW1jXdyK28crzGQ3AUi6Ugyh",
  "key27": "3uNskojYidMdo1sKsieAduJiYuAdgfX9ePByqvaPeQpAadeDJDVHGcWSxPUktyNmq8JVtreoL4YE8FKRe57QLGqD",
  "key28": "3ndijhcw9mZCtPPJVRKxxGieqL2FbsMs3VYoLqipM5gMxGhmiiaMGNKyoS3Gpp8Q8UZzCmprBfSnLJNE69atQxsR",
  "key29": "2F2NDMz4qy73Hw3Zt1wNFr8kUa8xznyhHcyDoC3KPF8qgEFvs2NdrWoSxnJWGnHRW1rH6KN7UTTWfW5BHoexkkPD",
  "key30": "7zU31pwTNH38R5UtsFo9oiBtH8obm93wvftLxHpaywDsY7fuLizgYK89g4Ahu3kvjETdBVQ3w2Ff5F5Dv4DZ2WW",
  "key31": "8rxjobLEdf7kwPS5jTVhR5fm8NbmmV9K7xSoTy7Uz7QLSJXvX2sSzsrQwu2xo1Kuu4CPa1fQMqi8s3udB74HMv3",
  "key32": "3VZuEXxaRwwDuNey1ZYVciH9jESFoeQMgkGSbPUTBQGrMzraPMQvWBKdavSynhcRvQ8peVqraVmTwXbEdYdAdG6m",
  "key33": "2FMd3RHjopmAc8kebrfWNSgH99rc6NbMAV9Lfu6pZ8D7mUiQMNfxZR3K9VSJZQ1M2Rac74zHZMAMe2ZkxfEH6Deh",
  "key34": "2m9vee1p2P7unvBxmNngLeNABW2m4qkFfAwhNgDkqfLAoA3ZUhUceKVPoofETTozKtB9hLwSLiaY1McPUAPQDicH",
  "key35": "4aTYyuPavnaiSifwdwHBbYdqKiLsiX1yWGBbyyiCYrUTSWNPyjzSWPdYKEmbpAy4jui3et6ivHUxraB2K1WHVbeh",
  "key36": "5t7THViaAnNXWVZCZJaXM1CVnGUz7oV5fPc1yV6cSgETHwsVeXhcGbw4y8jTVMxBBUuJReDze9rUNBazbiMG1RuJ",
  "key37": "4ChvgjphMd8h4Q4Y8w1FFmfLidADnJR3KgbJnwR8tsZYBzz5xmL7DTfANALh2Aawa14wH6UjhCzMEhTQ57CHR7HH",
  "key38": "3y4brhcZdB3SVvodNAe5MwWq4S3nLny4nZHYiKPW1o6pJsyHTJsdjqqD9Fh3y3NUsqD29Z45P5p6Q4g5VeWm45t",
  "key39": "tFdvtsCKviy5xdQBq1bbLKuiBCiBuQxuuw3GTvXhz4TYkebeMyBj28v8mkGmXTTLK98BLTjrDQkQdbm3V26surJ",
  "key40": "4nwv9F2XGRru44YP1zzv2nj9ZUB5WBxuho5YRxdWbeTPNuevEz2L2SvBrRLPfjXMpLZEfn1hHLkEni7RSs71aK8",
  "key41": "D3Ps8qaNKEv6dAoCKxERkpzTyyDjCwYYuA4b2Annhco8n6iURS1uvNUnxToYKRmWNzS5ivJjRX8qhHSqKZxtqfu",
  "key42": "ge9GY1uUeRyKXL8kwhFHxdY5tAfAeE6P9is3cjMozEiBXm9PWzeUsuqtRLSvNqvQTBnTNKGAe6gLBYRs7GpHw67",
  "key43": "3b2TWC2YsETQAxWph7pQXG7nGtNghysJVxtKqnZrXEnipbLppWAQhCpGYW2cER2834yWeodz8LyKW5CzPSCskp5n",
  "key44": "FYTXvnfwrcrdM8w3zXtuKu9PHaxnUowN4QPWN7uccFrnFCqK9CvJDbq9A1Rzkzv8xg7ZrR7w2aJhqQus1qJRbxQ",
  "key45": "4TwavZwZkMT1WHKdMLPHLwupSfLSiLpLnQzeFiPKBtjgzBZJWVni5YdSPNsJUx6tCAbkJ3WgpPxF5gxtXvFAUcxL",
  "key46": "4XXu7422JzEeSnwQQrQscVC7zGWgBZrznuYJTe79Pm6N4CjgUkHmZa8EMfnMKzojpGq7eTfgQrpuKyCWSsVees8s",
  "key47": "tZeFPqGfCAz6XVvwoBD5bnSc3MCWA5vV4CXhiMBrTMHic1joibctVvVZUS4nKGF2KqhywpCoJP4qdDSkNTpV2H4",
  "key48": "eQCdc4XXRRzNyqfxz9pbNTvguwCwv9kmHUs2o6UpZUSsDeBkP1pzBG51JckXbg3ypEVUo9K29bxk1fLSc1W5R6y",
  "key49": "6782uUntUURML4CYy18gKQPTdZneW44jkyaLdFZsTv1MA2yAoMYnoap3GbK9cEKumwLwkT3tuzKNe7wj7RvKLedL"
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
