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
    "5Hs8TvKteeHw5K54bqmSgtoN19zY1cGwF5ZYQsHuZDpMMWdpWQC7FRjGM8Fvqjbcer1SprHHTdhA9d8oAy29eonD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ikSeP3uHysaw3LK6tA7yDummUJaZCSTgtiFSNxmfXZN5P3idhJ5gH27eyiDDAFVvj5u8uyK2N59748qWcarTPet",
  "key1": "5uRbzunyjp4xUDkhBsHXkduwRrscFs8Q9Gvr6a6gVHZZeR61GXXdn2wGoHMegLXs17YUxVBwJUcdzfPACesoM4c6",
  "key2": "4vUwX9ay3cH2HXZVHhCqbQAtwCducm4HGHBEZYU4VvUxQtTZ6QavVUKTMFzFpp8reBUqQmJQZRNRoS3otUzD7apz",
  "key3": "3Di5Dr1uvfxaLd8jGHeqtZaZCBtvvv7Ah6YwPJkV1qivZXDeJdUa1GUsYRjDcpJyuVJWPvSyVRh49HvF31dggwZj",
  "key4": "2Mn7WChZYDrsxmDr9ZgDU5z1ftXpTnm9JwyYcdE3uAZcPtsKcQuoVDdTA1dRpWgzUyy3RsmkPLVds5JpB9RZqsHC",
  "key5": "FkEWco3q1a4z62KPigALBbpsivp2uCANFKMPHGE8FQuV6YTMXnjWT2RDNdFBkAoDjGFUdMEqGaHaSC2sgNsUJJV",
  "key6": "4cCTyB96oZfb7Efz7a7YhYqvT8p6ULkX8VXmAUxsQZipWU6ZF9jmYnf1vYhiNFj7VvN7iFdui7AStu9UqAzDYKBZ",
  "key7": "LZAj7ZKR8EkeBoVyLh6BcknNp2wnU8ntzMCGkkPXoujhNycQLoVYvhC8DDRdP2FPr7w5XZu872nybdkGTx5UCWU",
  "key8": "2xuwgGH6P4xVEnaSihXzEqGNezPkWF885DiJYeHmNSS2nNd9tGiDr8QB73fUecyaSrNU3z2gRqVcS5eLYDQANrq3",
  "key9": "5myRdLBk8EWD8KJT6oUSVBhyGT4omt8cbproCC4x6RcZS8BCzXHZNhAR7w9wSzhy1gBd1Hm86E5c2fzfs9AbRphW",
  "key10": "5Tcm6UATjb8YxXfTCTYYfWsGPWSgaHsauAU3XoM4RYez4qNWk1Mtt8xG5pwqHAz1Arx3uvXebdqfmZFhSbPVB6zu",
  "key11": "3paa2Aa735waMBktRWkG6K2FruhWFdBFvQPm2M8kNV6mCw22WJM2zR4g8DkNHbuKcmPxMUqErjFsNnL5cJzAuJXe",
  "key12": "4XFgHQMqMjMLivRoWJBHLLK1XdSgamtm98aqN5GGwNFvAu2XRdqve84nHNmkCje81LgjqGrQDUHDnvj9zaAu5Rk4",
  "key13": "MVo2FJREyb8VuWcDf6BXiGz1zmD3WvRGwEd8gKQXeTuXyB8UDgrtEcVnPaG5vcJm4tWBCxRmjHeZUVxNLDE9hhq",
  "key14": "4utV4Rj4TgVdJqLvRF4MVynhsxo9pzYoUwDorCiL6jUyACeMn7bNcWm1sp68xjNBa6ffBZgp85qfY81WnTFvfJb3",
  "key15": "ZAMqHATxs86pscSA9idYwNYbGRDnxDkZqJKEZ2WRYYfmoMRPEuVgjYs7b8z1UqqK69XLeYTeQ5Ayr8Bv2JpJbM4",
  "key16": "4LiX1zeEcZC3Y5rwdDuVnee6NJeg9tix2jfjKepstjnrP4deQAZpbgEVkq7otLXqbdGBmqrNt6ZNsZx3TsTCnXV1",
  "key17": "Be613PJz6SS3ayh7ekXVFfzD81mYB4vsnix7FqB3RF5SbhJZTTxuSsF26sPHuDxmMbj6ZgKFrDz9fP1dX68P7dS",
  "key18": "4VgNRPBA2fWkvsNVmpij7uaXWsBMxdfQ2idocnH7Ru59cXa9epNBoq6SgDnh7eqEiwNACjgDaR8W1a3xR7bjRwQH",
  "key19": "4oC3WTZmCunhAuzoUJuSAaLj6afHCq9tViK17ujLZ85RCujWkPhv5YAJMaqa73rv3y8fjSfccfGhYEmKTN2LufMb",
  "key20": "5A9mzDCLswyHoEXXXXSkTG8h1BdTjbG4zcU6vs5dkxndP9UB7ntvjNByegUHwhaFUS1veDx67LGTTym4gTFfVUPS",
  "key21": "2LqzJ4FBwR73TzxBRb9T9ceTwA8YG7Aav5cshRAPie7EwJ7yVNmpjMWiE8KdFXrzEhyXWzabfB9gbvhx47AqRsvh",
  "key22": "53eBcrdMRqfZt33Hzc5yQj5DDr8sKvdNCuVc6Yjp15TKLLLdXwzYm56H5NFw8Df8Shx8YT2CnhWXheeu6wz5rtQF",
  "key23": "5CGrpZhx9tuHuiCrC25zgz9rCBMiNHcGaT7FgP7KQYVoTvcbSD96XVNLMi8iddDwVLgwnRXgZYWD2cnoLUPLJAVV",
  "key24": "TS3EoU1y9mWcPZV6v3fwp46GhBDwjSRz1aoWiS9mWWhMpcjbp3c5Q9cGC4KMBPhjwgYLTVFovHzarr3xr3xfF6U",
  "key25": "2h1nG9reufDrMrLg9CZPmxJvhUdfX6pH5WEvuyHgPXH5vUGuc2WhGhrFTr8TYjktV8auXskKANFx81L3zU8bngK5",
  "key26": "54ZmDE4CLZwF7iN7Uri2Z6byCsepgpLwgYq7AbWt2qULkaakxF2AXy6AvK35ydqAM6r9gAWa62Rg6F6AXLcFGkpr",
  "key27": "2uNq6wNHUZtrZNtahnLwnoXPeUNingBY9s5NdkMj6w37k74FUXKz4CGEYimtpjL4Z3iba3ozWGx7F8m9qZ2d6qzc",
  "key28": "51BiuQQeUvnZmDkU656NuPhZsXk37BMJgDjd1dcMz3QLr9KToLLCifFS5cjjzThTfKYYQgZ2nCG4VCEDoKoGxVhx",
  "key29": "3Uuxsw9a6J2xNfJMJ6Ua6R92LZmvMFqXYpowu3y6s6N4mw7Nu7VEJmuxXGcwy1nc4TnhP4u1ieeWupeBRcvxFUdz",
  "key30": "21kD2EYY477rg7N5FEbXWtQsSguehV7ppXmH3EfMFWjVyXvPk8yUExnqDGkBrdSooukTR2nejeseDDszpHKkmNDU",
  "key31": "2oHDLDHwxWfVjKbVW8SZcjDoLVxX5ciUEToMjFDcz5VG3J3YQpPGpmhx5k9XuHB6m13FHCcRgxDeJkx3yvYwLSht",
  "key32": "4RcpQv4osNnaxxjX3Z8K6DkpvX5GzMVYXt3FNjtQJBTY5xAf916H176BmzuBs6MfKJ1e9TZ6aPVduBRnW2F8iYDM",
  "key33": "3h9xV6QQkDSk9KMMLNzHBT55KxpXaMvxRSFahBSP723m6nwRAeeLtqj6poNUQMqozHTpzjDayvreEXJDcTkPjHgg",
  "key34": "3SeQLqBPPLXkNyobjBrWBwXu8sKDoJZAdqdVHopz6sTMLNGcNTqbn9MAb4expUprsuMq7KX2zdqVcDLXGrL2iArz",
  "key35": "4iUf9HbK5XWcNJqLxVwrdUaCrThaXDNso7L5synBnn4tfhuCVUZn1Y98DiHU1NSNoZnDRdnWtbCHaPeNpWNksm4e",
  "key36": "2HqA1vX9zQJ4jFq4j6PyQjfxMJRD7FWuJjuzamzT7TuqxU5VYLcLefoKcf5RvppQdrRSpZ2Y5bRrq5ayYU92vjJV",
  "key37": "4gj5mCYbBtUSB3siMoAU3RFC2tBy598x4Ahn3YiGBGFjotcbKgvk2DNRwxwiHJToUhhgUCv4t2A9Ab9rba8te3jY",
  "key38": "3tJdhy6Raq8ugzr4ajf4MyVr1C8t5BG4iypgyCqoQgnQqHuY3q7XSm48TrsjsxGUXHnxUKeohzk8zbmXYhYvRnyu",
  "key39": "4vChd6RcBFL9Bao5DhqUaoYEfEVWgqPjtLHGH71jroeic8iafcoFgKRqgQ4DgMPyXehbyPTgo6LKuzAWXEd3x9zw",
  "key40": "62AxBaJz5XcooSvmwv6LZXNFLGU6Tbtj4xQnLQ2cfSShDowgcBD19fxDxqM27m47m41ytPYkDB93Lvxc7ZwbCLiP",
  "key41": "33TY163B6xJZcS7dkC2NCV7Nj45SWVruH1pXo4VT3i1dSVf4oEKidtVwDaHPH7Xsk7S9P7UihX8Ayf4VWn48Uk5s",
  "key42": "BKk1GoxnJPDVovuem1J7YdLhZ5r1nonHUqTSHRJ9mRvPWUNSi6AoYnN8ZzSaEcqvR3VkQNVn4VZJDYZCyDuh38e",
  "key43": "4cQ4BzRHHz5zkzHmWkQWGZrTioiwvbWBMu9ikctmnAcRYw5e9wSTSggkEjeEsbpgigjKwRr3WVdHH2sLRT6YsQki",
  "key44": "4Q7CdEiZMxuspZWmTCWeJpzfyHTwHWFuQGGBQrCgBg8zstyZG4YPjEE4sWVDnSa16HRZwEbRA97BXWD9UGogaPN4",
  "key45": "3mSMdnVtoVHGF5rS6Ks1FbMri6ZXLJ6HhQVso3txC9zcvb19bACJC6nHdK1z1Y7TM1fdRZF3n8jvCAjiVye85UT3",
  "key46": "3h4kBr8DaBGiuLaXwgb9Cox6jYcc17Mt8tyJ2M4UoVWqKriirK9ZCDTDXFXf12Z99b4pCseThE5nbJuS8wLD4qC1",
  "key47": "Kh6ejf6Qt44U7bG5Ko6YhLa1djFX7XUthdGbiUZfyCFUoiCq8mMsrNQpMB7a6xGVT4hnf3wK7rLNCM4JJvEMsdB"
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
