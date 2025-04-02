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
    "2gWD9eqKnzT5rb4XmJFfmoJFSNmTL2ZiewYHkpzG32JuBZbXK7vGp8q5iBKey2tB1sa7twfy4TzukVpuvEkoVbye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oPFpJfB6ErdgpC1A2gppq6i85zMhew5Zsr3nyEHbRyUXNZ6h4gcqbGWZLwuzAzHij6hxUtdhqHRCYzC34YV2uVg",
  "key1": "2yrJ42viPykVwuWckXqfPL2fovYbY7WjzghrNbKFvBehWdyv4iui62DUUPexNxScxh5hi573ZYsiVjVAtPSwArS8",
  "key2": "4KVb7MjFcsNQn2rBzR6GYArdCUNtBcrtnTDFhkY3aGso9St3iMcMms1eZpfveWmL7N7iRBW9RmjsBa95KicLnxKd",
  "key3": "StoSFdU5y5eSUt4MEZDQsBpZo8kdi7ZBBZ9CnAHNaQcooUEtGDFvhFLAoNd5y5ZkJEnLSS1N2GSDLp3CrhWv9BL",
  "key4": "2MEUbTEAPbpNE4JZqHcrQHGU2G2mK37CdncsUEQAxAkSgZ4vNeXywfxAYfGU2jNFEWbBGfQGaESd7WCf21p76WbJ",
  "key5": "2W9TLt6r88WiAQZhdojAVnKvVfQpgPLU33o1zAszcQv8TMJcrHy4bDftPP5Lav9d5D4Kq5drBXVMtLAbexFxiL3t",
  "key6": "RVDnCDjqV7rZZPJrGR8Y7bYGTQbzkpmLB1xdsZmszUsjHf4C1FCPjxA8mZz1VQPts7SNCoRB3WUSjBd4wuwJ7yQ",
  "key7": "2vdG3SyphhK7jkoEPKfgQCGVbD3eU64kbR99YhUJLSqmSuHJAyMqGBgSr4tsDGMN5RuxKhAPn4yRHFMAWYZfqwhv",
  "key8": "4kckmJ3zhpv6VinWr1q5XSHcm48Yeu78LsD9WjnPdmL1rFyUWvoyqPkAN8JKFE7KdCzPMFvV3JND2kgqrcHzSTUR",
  "key9": "4m7gKYQNwSo2jxjUQJy4US9Z2ZfReAskhe3B9SruUUKqagNu5ehwfMUwERaG1fY71XU8vP74pxgqfJbKpBxyTLka",
  "key10": "2SdxPzQpDdBsHJZMoUqptw5Z2fpmAMM96ViNSVMjn9MLAGfPB2gKmDPyQSqmopybHLK9boLQPXmTeSCed3PGN3mY",
  "key11": "4fLyEkEJLUz4935aD5yna1zZiqDY8NwNE7s18oovBQKDpo9YmQbyMMUj9BTDSvsbqdmNfwLA5TRiGZUYxQ35TFdh",
  "key12": "9E5y4vMcUeg3gChbuEWfXxKDHfzY3d1w3ng1B7GksShQnVzDhoj4EtgCEzw5Wy3ttVuSxP58ct718g9zMHRbkdM",
  "key13": "4NmS6ccmwXdiBvyxPn4m1NZR4KNXE3YkDfNpPXwxrnFFtisfy8TWEU9W8nCPxocSkqcWgxX4FhfVYgt1e6raMg7L",
  "key14": "23RfRJamoFs8i8fha7J7QBQaygVoGExfKZ7drQQ6fy9NjekT9UzcsGto1p1iVbYjYK6MQQHG12Y9tmdzHWat47YG",
  "key15": "2DgmePjxn3hf1RvtS1LCT75q8QT62kU1dcyFpASAyULfFU7tfkpRBjm2kuqmpEXktgYmPc1BS3nSnPuA8T6Hp3N6",
  "key16": "48zLFZ9wNksmw5rhyea3DbLYHByZxCsitoejxUpaPUUTDvHP1w1Pn6SedBPvoKf3RcyT3zDKUiUgLynPNX1sSFbC",
  "key17": "AJXGLKoByhCksMJUo66XtM1VNM7T6yV1ZSiKzcJ4T2VZT1E9ZKQXmiUjiiHFj9JsnHhKv2WhNN9Cqwa4dYxDmBV",
  "key18": "3nLtUHrEguWw15Evr46ZNaZNHm4PqdHhZHFTKRxDFTgiFMRBMnVFpzZjCzHCzrFzn9rLcyu3Ku89V5g5XvkntZPo",
  "key19": "3EvY3gYKYL2yK9pnVjBCPCX4TtsbanEuVLBrMrkdsZF5u9TavNufLc9zQTmC9BQeSAiku21U3jiKbbiDuGo3Ftg1",
  "key20": "2GKhionDryYNytnMUAvamPPu5JWTp1vMNk7dywaGEdVWVhsAtz5r3WpJz4TamNBJBap1Zsc8DaHkMpFxkqseNgvk",
  "key21": "4Fh2y4LL8ueaCF3wqNPMg9eW7GZkdJxzckiSfcdLJp1s72wNqdJinnnE38isJ8a4noJzzoNAbLNMKGrwSxdF7mAf",
  "key22": "4vxyV2oz7cXNNudVVkQyF14QzqdJdynZv1tfrS2CoHMvrZbCpxwzYEJmbvPkYDRAmzxE1sYK3BmwmuMjeeK976ju",
  "key23": "49UewqWhammR688N6FqMLk16daLLjtX1DvHhdBN2iSoQ7YoaYtQSdGHmgFjWHpBVYtka6iqnrT69xwBhvqktYYJN",
  "key24": "5mh1acvtYKtnfCPND9BejKC12CcfqX9baayo5YJq1mfweZeoVMyAW11QqUvJdcGE3KwfUdBbuufaNtyvLHBA5xf7",
  "key25": "3JdKaHLVS1RMVSKRSJo4D44igvqwyPeFFiuB2xyVNn6Tq5uzE4yP7jWQsVu2wabGUkoxMuc7mapL7gwSeFtGgVua",
  "key26": "3U1bWdy7ziBxNMFLwBiyDBKtiWY781MiWVbkAhPYbnJCsBKBqXHSFfHDknFGPzbeBaPXF5aKcz67osjkHZDLpLGY",
  "key27": "4oUtTXEHNZHgv3y4hGapZ5cwtjG2Bf3Ej4tGiEPKsseRdni8buZmqV7k8Kxi7zQCbg29xfsDxa4Sqot2vWLo7tyh",
  "key28": "5bKYVyJQuvYxCPVBy8m3yx3FXFsBSbpCJXnBYYbqURTTTrgYDybMk2mNGJTGyC7jFgLJ1yoH4fMKU8L5FZqwxGoG",
  "key29": "2hJuQFtWHF66GYxT2ynPYZN33VARgpf1ZTVxoCuwjiUK5Xm2N668dnRYDN32GZyg19t1DBXLQfD2akXinmMA2izR",
  "key30": "2mHj7mBkZKZxkey16p5CeBhzkefxv1UqQTnarGu21XRnrEBPyYnqfGuxx3YHLZNeYAWkJ9dsp8mMiEnKGp1tCebN",
  "key31": "4MqjbPnsjBdvFr22jd6KKDtm27zifKRyP3AcPXH54RopbsivoAAhHmXLnuPTBGvgUhS5oBmxri4gZjJVaXSZmD4w",
  "key32": "3gxYP6BEEdmfZEGqARESY4DLk8dRA3dn2BsZxANNhBBkoNCCTDvUH3PEgVhA1FXK8sxFyaMbciEpH7xAxnknA689",
  "key33": "STMe1qaSaX8YNsN5CJSrEc43WxGbvauhw4juKdFKLSdDBQfjrj2UU5KRgVWTvCAVh8LiB19kfLAQUWigo4h9qjC",
  "key34": "2fjJYjPtV1QVuP8xjgfyNhUPmk9vPguK1uJaXjXZey8rLbiiLxNHotHhMzuTPu9B4rXxy58xwHKvhJz8jcp9nHqT",
  "key35": "4ME6P3P9Uy1ZgoLS67kceCH113Tr9ZjM8SHzH2tziLjiPfQFmaGzmfKKyLcSr3GHNT3FCqB7fJffctMAtAJBSJVL",
  "key36": "4SZJP8nnj4xRoZhF8J6eyVzAE5Cc4nT1E3hMyyVxcmSziq6r3Ax6uownHRv31mCFjyDUhP7jWU2sizNe2hDwcyPG",
  "key37": "5xPt8H8dYiVKQ2XyySie5NMEmTWynHa1CvMoJvzAAdJKqr5mX6i5fapWvC9gk9kZMJ2CrxerNVqTiiHk9RH8Kvo4",
  "key38": "4YV8vL3PMtuwXitK9DJ53XkPTL5JnxWSh7MPzKZWapVE9ax65mF939NnScch9tuh776jR5tUWZJCcQQNxN3jVTeX",
  "key39": "2sgmfocwq8aGd17cxM3RctdJDFUbi6gTcnd2Q4byy9Y5WWNjY9yQ7chBVutMyRjTLu3frd6dooDYanxHkWjQgBnd",
  "key40": "5WZiZBXxmuN6gvHRbToUtFeQrL14b3B9q2rkuYMBWRt6NwTTaSRENLmLuS4fytWUpP2jF67JgktoNUHvDxUrdT11",
  "key41": "3nhDk7Aowo22BjfuKz8gPsqLgwgvTrZYLgadWbVHdPTM1GyeL6HGSu2xvNNM4GfU4wEittDGe7Vq2JmQqnGaLmdn",
  "key42": "2ECbbfn7dwjuD3sfpS128915evYxFRcao9kh7F2kT5NsgNrvp75MoQuPHDM5YeVurU1u6CcXva1eifqHuuCjxHu2",
  "key43": "49HqTTDe4ZLH1Pq5dfw9qVQoagP2RjUXwf2TEBNk9LZfdNi2JabyCRoSV87HgXEybDP7uNKFcaHbfQFoUZuKmxFj",
  "key44": "5aPeQPRAADkZe5aMPX9eqs68vKVStnTGt1i3vz9adx4BCuNKQDCw4mLekQuReWDTtg6G9y6XZvWkCkxmxoo84GRU",
  "key45": "13U1bM5YJNMpSXRkJ9XWmgyMXeg5rdXFo6tgGVPyvMuRmKsq9y4dvZ4JppC92uFM9dYMW64puLPSvEDK7xHBu2q",
  "key46": "3RQWmPGcVayMFnzxXQss11fjXzMcXEsce3Drea89xLWm2qFgu2GqNvZ4CiBZGWqqx32t95jE1ZeZnWkoAj21GpVR"
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
