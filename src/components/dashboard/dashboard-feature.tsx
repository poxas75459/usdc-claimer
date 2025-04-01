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
    "5UTLWk9kiSVK2v2P4XQidUQ8FeWHX5m4vCiFng4cSbGVBRuEKRstTSyY1FvPWsKSdTNFgSwMs2qKpbCHgg4ff1tm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bm23j2HZbm8aqcs9F1orj8A2uGnkoUNC7KsjsnX2HPLbybzqB8PgeAYaHDJpu8iJoiT9cY3QYBzhxTrxN24rd4X",
  "key1": "5KRm5S2imFQnrRMJqyiPrtZ4pUwTpLcj67r3S1cfm5fbC4YuoP2vCHBzGEoVis2BBmcVtJmkeAYoDbemHHvvt6zf",
  "key2": "2nEVs5tQarnwip5ute3iVGLQWGig4HLyveQV6hG8HNZzoE9SzcUsP4WNjNFi5Fzexva3eLwjrTKnggCMaPq7jBFe",
  "key3": "3UJNmgru6W4czPKTfTtGGQgZ94iczFkKJwYLXATUwKhJzLcpNRDMhg3ggn18kDePDfuvHUYBQYmYEm69D1ypoZ4g",
  "key4": "4j9Z8pUtGEbDXSz51jZmz7TkLMTdi4A1jPyqwW55QC1Jp1dRiGqJ8j1qcMLyqZ8RBD522LE2sHDr9EfJrR3JwiJn",
  "key5": "5rbLAJ2bscm9kZmneAR7SUK1fY8hT8K1UDFPFTZSwh3D8WFH9vCiai12qEV8ixJfEDj38RPqWdJYykxWAMcdQ9zP",
  "key6": "2AVh1DKhBaX3D9SuRNmXgTQ6bAVTrzNkNnq5FRZj1WNtcikVSFQ6vDFavKQDJ76j14Lt3RuyP7Ky5cET5PHfLqYu",
  "key7": "53JV76xaGe3gSzKvfPpdR1c3jTcDbYxKWFURrqoyWYUJbQdHiqfYJxXWMtPFDYm1zvthEnG7wpXZK7MKyT3GJwxr",
  "key8": "3ZEC96uZdvjbipxUwULZy9avg8ZsLsZhu4F8VogCJKhVveJ3bpaFe2JKENWr2wn64JGV51QccxVV5tNzPwv81gGu",
  "key9": "2K4CiHxrrt7wWr7zPa5Sd8jDAh3zWa7pntMFdKnEnmu4wGqaALMBydYJz6Ku6dqd51WMVR5K7zRvvbJpo3gASP46",
  "key10": "2penPY2ZRdZWBvoVjqkiK8HcbKX1ufhnwgvvacG1eBsLPfmKZvBF8V7ph6Lwd5i5hWnPVrHYwtJ4UCxtQeoR5d4C",
  "key11": "it27wxWSvhZnXLNupBasMXtKP2SC2WK2rFghWF5ogpVU1rz872ttibdKGQMUvJa6Yw4ud47jbuayBDbi9G1Z7Yh",
  "key12": "4BAkKxg8Kj6ucaUJk9WGu3DmimNQfGLcsZT3LR1AeKmgPuxuzjCGE1ixZsWx5sHRYjKWYwd6pVNP5WVdexKGkwct",
  "key13": "2ksi2APxr2HDZ8D91utYbdNSzPwMTSyUMaX49doDSbaip7QafNK7oFyYEVTbruAAzbVFnkJkKnFUWvLhj5UiDBFY",
  "key14": "4r6bFFz2KvjWDVh9hyHEPBzezG8FhZNvC5rCiA7rrgiDXVCq7ZqXkMZAqX3AfHjixR6aC84cznFvdLqjP26WmG28",
  "key15": "4ydUnPCzn1QHM53468pgdTS8eeJsNT26E9q4e3qZnvEgmDiuvURAEgor65rD7ZLArnGtRiUV39nQdcVErg4uaqGn",
  "key16": "2j94yd35YiHraDoGQSnLPt5SxSZt1z72pm9K8ecyPjJRFPysfL2HhgaknXhkPQCtorX8yGcbgQrZ8o4Pdm5y5SHd",
  "key17": "3PPzAv3YpNq5sRzNiWa7VhRb6UcsHjmFLvWkHkz3trdsiqnJWTDhMgtrMYVdZ8q2hCLwniFJwdP1YL6t11qq7V3y",
  "key18": "2yE9YUdhwCeuSHtthwLeVGVjkddPfNUBnajbSuHmpbRY5tsbL5grJJdVxQXY37GVKqk6Nadea9wPkQuY5Rnkb12F",
  "key19": "2StLX7ybJH4CHwijEwwv7YpWPf53jqCfuNSPw7cNrAoh1hPWXMBKtQZRz458kniG6JCrNE66dvj1ZusPtgNLwZmE",
  "key20": "DMGAq2aUx3vNDFJrPyYqRMj8ZAbTGyM3LZ33wJPWDGxNzKY1KtHxWsuQ7SCiQQDYETmMy2BSAmtcUTdAEriLqdU",
  "key21": "3NsUEBxhwXnJUukomtakW6eT3NZdbenFwn8kwB34QxJkMdaoGmwtHYEVYefvGLRNHyU247UwrQMQQ4uHYKsEBNMf",
  "key22": "3Wh6EzqegPYgUJq11iXAG4s38gmtcei7i2zVVDi8kAb8qPaFGLBZC1LufEnPBVNcNiJJvFh12ZJxUpYFNvF7A25V",
  "key23": "5JQo5B7NeJ6r2YAqHQfZ8DQf2ho7ePh1cxfKzojmtERwDpUmRQDYxyQjdxqzF5KSnZZh8V2uAQdPUJRyd14RFGKh",
  "key24": "YEMaDwivvHH3PakMfcEQh29ZFXcKrpHrAgbmiKSwKZHQoiuYjUWKtZzLMVTtJHnYdLaL3kCx5CkeJ1GWrFTUMzM",
  "key25": "2CKFKnRpakbHVGX65Ui21BiDtYcSsTLJZEepLM2vf9yavBjGtT26CtMujxR8doE247mXRf82TcTeGipJ97BSviur",
  "key26": "ESCLtrCXFc3PrMKVQMxgPxhrJ3ifA3oFDiV6Rs3pHXrkJSxCdBAywVJZebbMxoH4LXVdeW9X6Uq5gGSyxC2RojL",
  "key27": "3gwVCvPZCb2xJAmgihgDaBe8PAHxeD1nF4akoPHrHQ7B1UunmYzZxA5RUrX7roiNgdyUwwo9c5d41cFQMtrQhGzm",
  "key28": "3MZ9EzQj3xpKf1S9Jt9XSTgZebwzxeXnx56YRYUquoZgWWA4eUwCjbGuzVyPyNrQA1RgTZYmmApzKWKGAS9Zy9Ua",
  "key29": "3k9pKdynaDvfYBAF3VfPuscU11NMdmkFRMVTo5cks1xNu3qxwfWeDfwLaDbvmAyEvDnrwrNn7b487LiW2UnDVzmg",
  "key30": "5HbHcUuSFVsS2yqWNDQn5RFJcTznbEfSYKfZr3uuApcMmZyA58qym8VaYx1xn2HpswmF7EZhjmhW4eSegj2nuSs1",
  "key31": "3FpXHYXDBwpPGCucAuacrJr3YQ45v2gg73kaFQo9hhQiyJsdZpfBBGmdFb1cVinDGQnfoWaKNFzHUNSjBvJNF51c",
  "key32": "235ax8pjDoY8eciFJZK4HJLrVMFGGQ9eoaq9TPMb4n5mgnBQZKhTxDoUnthNxVK3M4zf4pxkAL8Lmr2wRd5vSYXg",
  "key33": "2GhZkQqT72mjPpCK1E5VSZDEQU8NPveDaSJrC3eVdL9anq8E6ztGrTtSZJPqPBokLHUKXmCea3MhgCSsQrt5YnAa",
  "key34": "64TDkkBburTVds69KFUujRL8acsn5dkw4RDUs8R7S75rYjfi4vvj49XKqFwLXf6F4XbxYeoETWmu2FbUXhv87svB",
  "key35": "4kFqbKAs9HSQctR2ELboRXYKsTwTJXKtanDVj9aGqDeFgQwYsgxp1FRFntr5awqHHc8fDE8eZQG59xxhsDupFMXy",
  "key36": "3VMRTcQKebEicBrUE4L6iXLEXXvJiX65DzWM2YkKNvCiLnZ23ZwRZZTeguv7YZipdLtrzKGQmE5jycDqKPfSRevr",
  "key37": "4Eudriz7fxapVfoX4T7ztEWwzfrEAmqQLgN7X3bC8AXDAEjtGVP6VuD9pRPjRRehxnGyfFCRhQg54bVPQYg6tbwZ",
  "key38": "4FF6SJexeTQmTFWvnMNQEWFoVuxXYeQGBPLxMKnKpXVyEbKXAYA1qjU6cZKRLRci5896B4UZbDZSRVDYRDRvPxpB",
  "key39": "41zSCu7Xixde1dugpks6hNZvPnNSHjgBfM9rsu2sTBgHT7hkN2SkPJaA2gyity3cQzqZfYka7fFuZF2yhkm7XuWb",
  "key40": "bXLHKNBxUjbrMwfe32ygDWVmFhxSsNmSbuE2viiG3CT7fxKEQXt3ZJVvUAApf3Mhe7rRtvNSHoLBpwzVZXTHnD5",
  "key41": "3CaZLXQ8uqpyPw7nm2toRGKv3QmKi5ztgDJWw9crvNUQ6csvUaMPdqwicoins2Cmm2VGQZr71ax5JpXjnaYgFsW9",
  "key42": "2RdVMBMZ4pN9q2fxNMRHTy8ToDhRzzqLPjNcZ9Wo6NCfpuWGVVJZkqPF5n6tMni4quaRvKcKXCkLxxsDGCXEFMPB",
  "key43": "aKDmaUBTtVYy1oNcPT6j4i9Xz6EKZUvt6MGHVpUpuudjX7Vmh4M2dYPB8n6PtgwXGq3o1KiCYgNM7ocXYwrbZy6",
  "key44": "rxeJd4R7ZjDLKZyc9iozBPvTeKH4SPTVpeRKLoEETSszr4r4C5sqnn3C5NFrYxxHCHywfh4HnMrMM689xqzfJmG",
  "key45": "48JECgm5udD6zTBPy2cxBFFWvdzi6THFrcq113X3pn8kYPzC7nBgKWDHEmaPmD41k4UC6aYdfHeyFGUkffyzj38Q",
  "key46": "5jsBoFH6ksqJfbCXR643CEEWRzyHfnSHCAgqL9GLzUdcWDGQe4pFgnDNtKtMEvPvWeUHGsNy7s4FPkMAZET2T3b9"
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
