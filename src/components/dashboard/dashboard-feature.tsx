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
    "2pbMNuVGhf3F7T8cbWqWnNTkisjAZnPtY7awMsjFbneemFp7ACYrgwgLmj5HvNUmNVKv4DCz8MjfJ3w1Py9ZtxQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hiuXTXnnFtUAEFDqjdHqztUBCRWcb17iDtJEhgtTcnHAuhzdHLdWWcMG2kj8azQ5tzcNv3FNMEMHY2gLH7hniTe",
  "key1": "rcBR5CKmnNYhpDZAQcptpSMLCnuP1K5y3p6p4PgRSjtp6jq2Tfim5mueLVrku23tJH4Jhf6dNNAw7pkFr4yWUs6",
  "key2": "j7sjb4mhj3gt23ue2ZEVkGHodisjyx9W311asyVE9pp1ax8iem1ysUKHAw4rj68AYuB9pGML3cmXchG3SJ1fvZG",
  "key3": "2MNn6oCRQ64tCEomsLcdZK7EqYweZoKuQ2kxJAFKEDmXAHHQA7t6LqrVNnbHGAKJVrrqmh99THb3z73Vsjjx8N9C",
  "key4": "2EJHnLbXW57nWFaynPW2NEn1rSu43gwdH2Gqy7rCt6heodQ93KCTKqWV7cquW4eAJAVoj3w1cz5AGJ6s38cAM8gJ",
  "key5": "BdkMrZDyk6eBi64txodW1L86GoB5TBdqmdMAyPLXtbA5NPvcht4CFhdrVnuaszfjB8pQ5G8Tf7BUKkNWmgftvUe",
  "key6": "5yNCNMakGMxHkh2a3bF3i3zJr2NS3Vkw9Shr5BUtsxCv3cVfW33no6HeGyMvUiAxwSyu5sJhpiM8HQsqjTQzfu3w",
  "key7": "4fjSSpCXP7jWwR75zUteZLD4ycJRtVgAHteoqvAVJS9TuEpCXq8zeVxxP4NGbCDwAbUFRS9ppsQCTMHDA12V3eBb",
  "key8": "3g8TixTMuMWmL9ihWtQg8cja6HgBYW9WgPAedwZs1BPXRvPEAhPGBNG7kS415ZUwJr8yvaTv4feCjipWswpAodz1",
  "key9": "3iusyPqU3hCcFjbmrWKEMHkHYPa1s2HMoPng9y3XhPHbhEDHy9Sf9ycTXvP6KqtwGfQvVhy3NidJ6UZUL9Ncw21n",
  "key10": "4wBiZgjhDHfGnLvxDWkag7T1DL8RMiUN2s8QhNc1h17EWAhD7XUrnC3zEfPrS7fdG2uxcogXnsue73AhsyYmQKJM",
  "key11": "4psFgnfm5Eo8gmjYh695LWs9pQfGgaeStZChbLr6dBhpXBjeWY4Piyj9T177x9UynAr4vRN4gpQACgjHjf1oz55o",
  "key12": "2MvqojZAYnePgXitsWWCVgRC2dwCSJb5DeJXtCuTrS7Vcd84btn3mYckjrKTXJhjCzUZYaC7a594Bc3f6Xo4SS8D",
  "key13": "3TeKbtrQ1VchQWeUxbo8xDt3fw1d8sSXHusYHVuEFCTw3SXPuxEYH9EmP89tQ9fnMANtuKYbwLZup6B4pR4383Ym",
  "key14": "4oK4Wt7Cw7c7mFWZiWhEnBF3MEWf86DRKtfceK6eNmTqN9mGi7TekscBWfPaZn9UeujZDcC9LjGQuhF9p7UZoVEG",
  "key15": "2GbXTqyRv6rdxL2sYBgNz6KDDjEruSPGnbNd8HhfwJrBTyxbXBhj5v4em1xfFN3cQhCwBcZmKGPruFFeq6mWmJFm",
  "key16": "ugqUoTZtvRN8G5VnP2nojEam4sgegfMwkVox3VrP6JsupvNhxQsqXTD9fFuVSFDCesLVD3nPRPG3SRHRyGFJXc4",
  "key17": "5cnSFePJo1scw6PMfJsrrZL5bbtgUbFjHCtCuCdsEM3B3EHy5Bv8ycR3UFdixSfpG74DwWVnTfcwvSfRkbhtfcjs",
  "key18": "2paEzxGoUqnkYhECy5hk6da84mGgTTJ7ocdPVJwGRNWgiMgjKrgkfN4Kfjnf7pdACCPoKsvV6jXTCXB2Pc2Rus8W",
  "key19": "3g8T8awqYfem6DgusmcG1zHHDKewEcKxu37iDa8vppA7xpjdmjtJh8jcDgrchQndGjWnHaDX7BRnDcoonanxvBvE",
  "key20": "5TdCZ34Gi5jaXWNQB65xUoGXRLxGyiSrKE5pLTYYWy5nLMnVZjbH5FpJbAGVsAEk347FEezsYVMEaXYcrce14JZj",
  "key21": "4CZqBxAG7CBnrX1hsHQfBcw2vqCEuA91nQ7KhP1j186JKp3ZSQF3sKzWgLazBaEfzbskPtMFVz7mtygP8JNJPYPY",
  "key22": "5YSkLs5ADUvHh7DUZLJjDpLx28oAfnnNbUwti6DQ7dFgRBoCp2kuU2FHmqi8xLuh6mzomSrxTw9pWFwBKAdbUeVm",
  "key23": "2UtnSnTDggYw7pXhLot6vLxMtK3FjSVb5VJ7uwhxjGAPtTdoykcHeC1yQf8DzpZrPcNYckJVQaPPARhd1bU5RvM4",
  "key24": "2GQEzN5nWf3zT4JMbMMnRHdd4MW1wiN3k3p2fpg6mMou9AEQVLGSYafuCzREWnuqrDpLZtgW3J1yiXLppBFoUdh5",
  "key25": "48Y9AmHW4PfZE9PsKwPfUF8HNEcqq4RvyC1uAr17eUB919q6feUixE98UBFtUqyXKKtMcj3EZQGyAJqgfYYPQt8p",
  "key26": "2Pce9aiTKsDRQkiH4WwfFKPJs5WHdtE6qJA49Y4sZ6EAXoUHHbTBPy163c6yGMpcZAVEXwaeC6sb2EoQCWWhRse5",
  "key27": "5UcS23HoBpRsqW2RsCNg1wHdBeAT4odpKyagnFLZCDUnxHzrxCCH598kWFNBUD7E4TvNxrf9DipsGsRwtC41kPas",
  "key28": "299WG9ioNyLRduNDPR2Ty3ounkUid7sxVEvRX3HpA7c9xS36vcH7mpdRLA3R9kH5N3kF3w9VXPDrwm2Eh9zTPMR6",
  "key29": "23ENeb1qnJL5b2w3t9hMntb7XgxbasPKPFnjz88e3H5fme2BfFEFfd2kqCzmgSkJgh3Z7D428Miv6zLwrseBeYME",
  "key30": "4Mp73gC3KdzwBcj68Fp7ihD94eRDwQFQUcv4uhnERA9tWEp8FB3FmzhpxHYXUKuBXxWYx8yzWzYHb7rGeZARGPn4",
  "key31": "5xWEh4m6w9ZCKGgqnLQPrEy3jJCVs6KaBY7eM3nTAw9ULJLtc21FfbikzbEA12yEYVuuwvnqTuvvKznX1RkkpwMK",
  "key32": "3oiEF95cUULp8Euk6yVqARnbrn4jMMgh1g7oyVxQhUgSMDgqGtdfVH7fwVxEnbTwkoyP5mSoUN6RzhQsRj8t5yck",
  "key33": "52fvctzaCzeSnkt5SYErJzq7Bjf7aKJCdgcmR9ByVy1m9jbZ4Lvz1naFhwxMyqG2xfp2iBwu2RgLXBVYhbvpdxLa",
  "key34": "2NYW9rdgjksN2ZcPsgJEu8RQy6LrjGDyPZZDBWvY3eUF8f6YReikopuMAf26cSXAsNqewxuLyVNMB2zoTPxv2kEe",
  "key35": "3gMPBNmcmCMudp1b4ntNpYRuAH7bPJynYnWCm4xTmt5gJ5fbjqLcs5NDEkMVXYSUaEdoNMB92ib9M4SdQHLDuST6",
  "key36": "MwrhTV4sRN3Ko4gkAPB7F5zZF4Nan8rpdTn5y3tu4a69KXqPdNZDKYKXBFZciivdHCuh8Z9LrjQ1mHvKofP4tAU",
  "key37": "SaXEW9WrUq5nA4PxEuyZMLLB3ucgTTzvE15aajmY2dwAL6WAdjUpcAaBHnhDfswSNzhNdaxgErFj7avNs22xYDf",
  "key38": "3NQxbd1QstMRHkQKCBTgPJp7cEoFhqHKd6F1wA6BRvvGy3jt7L8L1kKeSMyuUrLtWSMeTopfSqeurxGa14HueXSz",
  "key39": "4NF4ZwjqXd3qreb9ezmNeqyG3PDfszFtJKL1gTj25DN8ptV1pXo8qaw2YcNsqfSrpcjN7kDzVQEUMwKQf4Jba8m4",
  "key40": "4zFUtAmdu5jiVk8s7sTfVQp5gs6Sy6HRkDZq9HAbHWCRgz8HuZ4HQaUiE8PgHBvBCfkNbZm2sDzKWJLmwcbzwPTH",
  "key41": "5QGn1gzviXaUj1yzC9ZZv9LxPiKTSJDsuxpUnGnn6rQpEhN93ahtocEEpJLQp5LmZccGUg85E5pJmvfJvmJkRDT8",
  "key42": "3jh2KtMPd9ptassWbWQmaEuM5XemhCdCsYMAie2BvjExgDHkJVqHsKGWtwfxdRdcfexh9gjqj9SjPeNJpqAG9xV",
  "key43": "4AGsK9evjSYX82Dm9r7fjVS2fRtMGix3b5taci3dU36TWPiAs1z4JRd8hp135hnHUNZ4wsogZKJGk5jUEeaPgD5x"
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
