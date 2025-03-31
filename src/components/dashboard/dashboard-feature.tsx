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
    "2YMe7bNJuNJSv5YLhEicTDUJq3VDw18R5D3kAuvJdsNwEJ56RZUpyYuYgLPjknNT5F6rFmUhdA9RvquGyPSqMtw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PKzsvW5o7tU1ggiFqKnvrJyzR3MBzpycKp3rZ1tVHzynKyXVrNCKcjbyYM2NE46S7m84hspfguFVcyXsLPEdVuZ",
  "key1": "4k6bvTTJoYb2iRtT5wuoXNZkWN1MubR7XEQy29PoprxTprWfuyyupRvwEaKW2vZUXNedLnTxxYdhhk9ey7gbUV3m",
  "key2": "5QFPq4RCvNjEghwKLsGmVyxs9menEzpsrCEoFmKPbCZGzRtbc8FiSSztQbDiwMYVTrmiCbrAxjiZ2kLLtJzGHHBL",
  "key3": "52rh9SVf4VkjatN2kGmUyeDDqtKkwjEwUGZkoizyHdG4SweUco28pXnYv7UR5XBJ1XMTA8VkN2axgY9HSHQA74z",
  "key4": "4S4PhAyDyzNCAVJya4ZRXCsdbck5JbyFaPAQnp8iFq43LLhab77tQfHuBMCS2djxzuWgLg89TpxRqarBqMy8RGf9",
  "key5": "4geoKeSX8V1Gvinvh4UG4JGcUR1wFReTSGN6FzQN4PmUptJJ1XmPARinvHuTauqSdTKv7cV1ztnQGHxWYm6rVPeJ",
  "key6": "4wF9VBZDiP77wPjgAFZbMwwaTiF7ShkvBofyj3AnEB1G37CYaxT2SYNr5mgbLkoV7gLPMXHNCeB9gWUR9ZAt5shF",
  "key7": "4pth49kRMu5KgKXW1gtiqbgzTs6pqgXicLjeWDYfbhT94jjhrmCuoP9K7kPmZ35Eqn9seY2gyhMZ2tMaFkLMZN8f",
  "key8": "5NEYWeqntpPL4a1MEGnQGYqJ62fc2XLZfy9NdKMmS2AwnYWFU1m4VcCvG285zcFuGymnXaJ57wVKCEsjr2FNctij",
  "key9": "3gf3U6h5zRuMcJMDCDDK2DUMLjDz8GwztAj6KqevECkvyrXNRSvLbVzPV71WHQ3s3RALyE8epTNqv2WD2vEt44cF",
  "key10": "4ZpmYP9yhDtqw7Hs36quemxKe6eTWUHaFdcuoVxo2eDLH8tZjuewRKCSDgHSm2zZi7fgajCEdFAwotV4vpWjm7eA",
  "key11": "9BexP8JqMoNbgJCbgBZ3xPxcBPXcTtHhGQK1ZnLdFA6vr7ZRS2y9RyStUcbEAMCEMUoLVMDdhqW5mttZfcMLYL4",
  "key12": "Q6sCV1kFhUJZX7LJSsDUiuFynpjRisRMf9KPk1ETaepLbfkVkPekcd79m2jUvKhwTbYgs2FSJBZTVXEJaxaPFAH",
  "key13": "4W2D3a5sQWHBqwKxkQdE27CDNt2ktGKRXtnTJ13DUmPsuTbWW5p7t9War3fTskv4EV2GvmjjSrYTEmhVKTE3wee9",
  "key14": "3kGa7RvzWdNrK2m3zcs2ozjZUVVrq2StbTh88m2f2uLJWCBgUzGpAuhbdzdqWfDRUKNbKXuzHUHFCZ14DaWunHqJ",
  "key15": "38rYa82uMwXMG8eK6dV9rrhUZ7EN7G48bjFfaZkNA1smd7phZkZWm61nc2EHrWzTUS3qauqh6h82LEw4ZatD3s2E",
  "key16": "41a42N1cNuTZ27PAT5RL1MKG6refFDJRaapZT1Z2YpVoZkwJysWPuaG9pse9sjLUyGcxTViQ9FfPNRtma8QdZV4f",
  "key17": "4o2su9YfoZf4RXAK7pQzFy6yJC2pkZAKD2Q9YpA4d8VuWV65CCSdX5WotZyiwEvH1h3ka4tVtnLC4YbV31jvSBq5",
  "key18": "Bdt6CQYmfjbcS2T8myRA9QrLNmAEeb5Mg6vvyMjcfZ93FT3fYbiEFUa92Nzf39L5G9eBfELcFetS6vQnmd7Buat",
  "key19": "5Ft8Lxes9Vom46KiMVmDawBemUf7PdLuLHPexSNES6kD2QZhm2AMpfDqDVHHewDG8vrDALxgFEpXBnHr75TxNf2Z",
  "key20": "PgTUvwYeCPCN7NR6vVF4xhzB4vcKVXRgQqqcJXxnQTxUhk6ddTbi3fgsqDMTRpG7ec3ReBKwPrwm5F8NDLuEpt4",
  "key21": "3ddZdj9JBQTztxXoQHm3qPMsiAKfBbpgE3vvTR2YJbwz1BdipdxZV9y6QNPMr5mZUwSxuKcDVfJoRVFDr5XdKjCs",
  "key22": "QBr6zGXecaEcAtFhNQnbzbsCz1XU7AzdbELkVuBUYigRfZPdxPxMTvCMxgRHhJauzZCYv9RgmbCz7CsSLqcrSEf",
  "key23": "5bkM9DFENRv8nh6AhX8BEXUaU4Z9q5vx92X14HRjAT1be1y8jVpihtqajyyBLygUk4qXmPSXMCZKeFKSUQQtKiC8",
  "key24": "3WqibcZhG43wUHJeM5pELZBvTz4ZzFymLJ3yuXGurxQWbWeZ7n2ekS7zdNtiwoo9EKXkKBVPz1RqYSYuFFgWjyEh",
  "key25": "5v75RP194QHBQ8Wr9GxyX3F7VtyMsGvkrs1V8766i1pGZwXK9QJDndo5qCbGeTSavMGFoBQwJqM9ekyhzvRN9SF7",
  "key26": "DLdsbizDrjN5F6tZVfRJVuLSTbhPANpE4NDSxEZrpvVDyosRTfMYUXgCAh1xQNRidvMubM4JjHsPG1TBenGBrU5",
  "key27": "2aUnoaGg1Lw19yaHusP2gRJFF8WYNn7YFUKGQV1bdfEeowmdwEVNhxFaupzmAqMqZtwJ6fTfYu49TrsDhB8GFH6U",
  "key28": "3Sigq5S5rjY5GMZH3zQ6RQ44zpP451EoBP6HZz2ytskAMGLjcg9WaypoLuDEUkiHoo2YpN9qh5XpLHEcRLx8bDwa",
  "key29": "26ErTTjJJ2W4vyqCvSz4rvo9dGdCaRZLiuAG2WUgu23z4SN2U1vLBtvu7t55XW1KYGEZnNNoPhDqxY2YgAvMmFTP",
  "key30": "5Fc3wNhiSTtYHDvpxK3M6FF2XCgYrXHUvZQqhBwBaZmasDPgBxJL3L2JRLnGr58FB5X8ntd65YSrBxrGoHUibUt",
  "key31": "5tRMMX4ZWafrWJVLSM23TM9doghzK63QfKQY31RM69sMnqgME3wWC6eoAAvJJSJbQEKmBwcewsDLBjguzE8GssfY",
  "key32": "4t6RyupP6acQhmmqbcM3EFgvqkSQGQEqrrFWHdwjUnH7E92SqoJpG5SAC96Q2CCPM4md4eCuY8g2Lg9U2ygkN3LR",
  "key33": "2aUkm18MHqjZ9wXGvxPH2iQPpYBTCrusZ547ChzzDibrUABtf8EGW6RdT4JortxdqkFMNHamfDUiBxhFd52zGeNT",
  "key34": "NHyHKUM1DpPqaxdcW5JsDSxypEhkkxU8QT7rZCxcDbBrY1Zq7yFEuGbJupRgWfCu5vvP758FyQLr4ZxwX7bwj3v",
  "key35": "3kVSND7fBoh9MURwS3RX1D9fUGDvaF3CbuQQPMCmGnkVrGztoMxcrALT82VqdSwe3QGLtHXJqg93riPLFCqy8v9p",
  "key36": "2KzpRbnJ1SK7zaFpv9WFByFsW3PbbkwXdHgpoDqWfht7kjrfmfwtmguxnEqjp2jMUyZG6QqzQuoR7jn1oDFx1sJo",
  "key37": "RDVkioEWC9vgBJpF78tnWpggy1ZysHGJ63WTF6F9zN5ctf4GsbTGGKcYLyZ1yhJ3q9t8eveebjcqz6967yaciY7",
  "key38": "4bN2KkvvRJtTPYTsRUiQg3F9exx8oAHhta9rRcTvngjcfgxQYHKWLeThZhUTteXg8uRR8NWQhSSHyU6KAt988Kj5",
  "key39": "HzEKSbWd9xya25ft8rjjjreL4s9aq7DKWfX3VfQZHJWCsctUYKnNrHrpUvgFsYiV9FVkP1aQt22fhXEhKhrY5Ss",
  "key40": "5Wqx275Wc9ncq7ca1XKmcoDKo5WiaahqFmn7154eUxgJb4zu6ewsE55ggVtgG3Kg6PzPMz6rpjWnhi51tp6Pdocg",
  "key41": "4sj6vEnwFihFaYPXvEdoUBUDJAzKLvTzVnogyaspjK2DMRuUfewk5CgYPmcHrAgaGGXyoDaDUknK7EpUVZdC5xqU",
  "key42": "3N1V75a1J7iGzvp4PJrSbwyLG9AV959DPkAgx2YY4zCTvw1ANM2a23H85PGtKwQQk3D4urSsRUXyRw7EM2sM6ENE",
  "key43": "2A7QK8JGse1uaMmNv3grhw2NrVvLSZeaqQtHGbCGUFmmdh9eim7Km75S1aC6TVuNbtngLHCDVAprga355mgy5UzE",
  "key44": "2Gtpk3gWrspRrV8ahgAjGNPQa9ETXTNmLPZeAx5eQ5XHy6Ei8M2V5VQfL9Jfj8rFeNZ7Qm2AGyhyZ92V6VTsVDNW",
  "key45": "5VsDQ7Qb5h6Jo8UUHPZPsmgnydQ2xK4kFKhPiDyS16KWLmfVJnWADJ4kNH6T1bdVjuwVXojmqEG4Lm6mDnJVcbhz",
  "key46": "3cNSYgpibaBGREBsQ8Heo7gDKB63nW7wrnh2XcXmtv2piw2Pwd6Z1x5Cf9nUEpGyxgYFWZeQTNgz93cSeuoLxaPk",
  "key47": "3xKvjhcA5vgiRX7ypP282qPps2VoVpt2Ya1gzaRAygUGcYjqFdoe9pzPCLi6XSEeKZBNLXZv6dFYzQz4uu9gTxnF",
  "key48": "5vwJPdNbRV5Sxsv3YJCD1crX4PRNAmfsXU3doaRcoKfj17Wu4JgeE3a8LjQqQb6T3wXvRx1bzL1VSSJntENGTowV"
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
