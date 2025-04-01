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
    "5i5YDkfvsDgZHQJnWeZpx5Vq9jEg8NvAFCb2gpHkHX6YFK2w8xsA8zPJ9sPpDY6AjZasK9ZdktFgmiBBpycbVD1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hkexTf6veNRQZRhoLy9LUQmGhpygEMJH2FwWtgz1Tjet2KGXryfiPsZSf9CCYaQvUJeAS9eBDpNJGJcHmFimouc",
  "key1": "5EGmRm6odwZ5R5XiGkQggUETF5UVxU82ePyzxmn7LeXGKV8D4f58jUzBCkk9UoxSzEBr2Lqg749J689PZH2zmDv6",
  "key2": "3ahU6nvFpKYeqSy39J1jJC3yfC1yVBZWSs6a2wHAcsjU38iK5t4tYuoLexiXQmFVH8uHN9UG5uBnn9fgxTAjABys",
  "key3": "35ewpbCQ5hM3sKa2wkvgLpcRYznA1xLHzyTYCiaxEh7Hmehshw9KofFALLCfnLGrEsgp57urG6gagukGzqoBPcfu",
  "key4": "2fYjZDA3dmnVZPbPTKBPCNepShQMrfeTTq7kTnXSrg7YMxApsVz9YjSAB6Bb1rz7XTzQXdGy24LyEXet3tAXeY3M",
  "key5": "36YNJti27T7qDCG1md3jsqEXoZQaTfBcVCMnN9EPNBRGWmGLkuwxUk6AS5mZp3A9wy77Qd4RSWbsno1KwBRNXYD6",
  "key6": "AN2vcm7cbVx81T2HLjUrPHH2bfx1EGC4BrPJaTEYSYQ9FyAsEy6im3hs5r2RPJaARGsY2ev4mvLqV8YAfEtRgZp",
  "key7": "5ZedqNV781x1QPdfeKkLfkmejsN2kJY8sFKFU7CsPvoa77TcsSPLzyUuqgppq78x7akCrkeNGdUnW7B3jJY34ftq",
  "key8": "2hzEgyXoCq48kjsLFaY9jsHPsJbLTQzqPVd97E96NSDEeKmL8YEv7GBHTzG5ycKNYdbA8fRaCBe2UghqUqLdxiWi",
  "key9": "4q8HZDj7iu6YM26XewbL3tkeehzwm4Vv6NBa5uDNzctuN7hHAiP78aynbhLNsdmYjrKyRiBpbCuMdpamPYjXrKGP",
  "key10": "2fdopAAwHtazmJkb2WhttdwcgvgRhmvqqHFfyNBWWhrkjwvPVn379baCHDX7F4PyFgVwS1S3qzG2JDFPc1Gwi5F5",
  "key11": "4VCngCfxNjuyB55nEcUzqh3iyjDzLLfWgsdoGhQ2hRFsGdbXvfTrZkB5QerSFNhBDrTsvD4YiiNqVhfnsjthVMCA",
  "key12": "4Ki7p6jyT71g8AKhsEfMuG6LFNroZ5JpFA4XuZNQeLwfLDtBW5zj63bvUGhkvq71pyJZbzB8WxcWGjELRocph56h",
  "key13": "8LfHRKqaUMFkEuMrZw1BRm52oTTYzSBFTdbccsoFNxhgwx3EKfY2H7R4B5qZWuoL3mBAwqtf4PGayLUW99VjBrE",
  "key14": "5pQiDgSgmn6WdkesK9P1WtvEcAK6oD1CHMoZzikPSajGg275kdbGp8LfmdpJkV5cWML5HLijyb43ygiBAqQi1FER",
  "key15": "613A3GbyvPpNMoJGbBu3zTZ8GNAffSQokLVgqHmzNoDQ1fNV5B5cuqLeGzFr5v7vnm6DRWJyxqTCFguGd8ozbEKS",
  "key16": "48XAvdsbqRre47LuoZjP3g9u7dqxVebPLzUk8B9GBoB2kR1pqo7hvn7AqC3daE3iWEQhq5a9sMHZrXzwfm756qFo",
  "key17": "5D1LWBBwmhNW5XFY7tW1uHaos4mWBryhSAbn3XDwFAitNhwMhZJNotMK1LjLkQVt7hRPREMxkqawmGAZBxjum8kY",
  "key18": "9y6PtAzRtSonCrgeNJC6iPiqFSeLzuKJzWn8W5RnJjTjhBnzVGFiUqXhdZQKxgdbPySZyoscNV7yshE36gWwTQv",
  "key19": "4vUApoThByJJFfS8mGBPNmrKrfAuzdwTRtfdJ6ok4FzETswfqzqMxjYR3hCmzQmhx6yPXkfjTTqs8RuQX5YxJM7g",
  "key20": "4czxvVVWSJjpbCAH2RYj6LroTFGD5b3vbToNm33gc3SPrKa2CA3nGHTJBJ76MiMCQ4G6rQYxrTBG16RgvHMHs9gF",
  "key21": "2eXS52ZWBLNdjrvaHh1JYwcAZ9SeV7cpN3E5xUbMRBN3jSZq9EMaW5TZoF5MA9XKVYXczkqWs6FL8hro5ojW1HFa",
  "key22": "2k9cx8Ei6Dv4BUtrvF1gfLs5acQ1whzxKYBkRgG7hjmm6VeEx5ywbeNgRFES3XanexpsrFnJFr5E943GG1Fe6szB",
  "key23": "4bvevvAfPCUsbWs5WdFo6CJsuSmXdCWoSsKN3JVXpFcChW24212utpQsWmjz4rnrmcUwAEnTZHnyKvrALCs93bEq",
  "key24": "4cwFLdbvVyc6eZFBxCZzAcDi2d3FCKYaZj8Pe9UMoiC2VX87SVtY2zjb4Vq2PPrLVJgi98H85YwwHxKc9PNtPeCT",
  "key25": "4SupEGCrmx3eQ3qcBZkuoDfyZ3uGuW613ATnbRz78piTNJeA7mtmg2NJD7vSpFYPpXn1XHkd4PQhhDrcEkkfS1hu",
  "key26": "4gVkxBvd4r2JhM929Wz4KxSWKbFnbrgLV2QnGVBzzBZvQHGBz5ZHNuNBo4Fbv5jSD7qFGzyYftywe4cfBN6PzYCR",
  "key27": "2oogjhYgziEtQCRSmcLZxntngtYVmT6XJiQAjtvsNMA9NyvQUdg4amUoRDvpnFepADvGgUJtA7GidcQkU7iun1D2",
  "key28": "3aQYXBNiZyfcH7MLoHWDxUtLuxPWMfjqnrSoMjEDqHmW67P25vS3Uq7UvBky9iUTNiRrH7aiLfzXKsdh8cbsEGGS",
  "key29": "4crfi57VehQwKcfjWFihzx6PAyZyvkDHGcH1XantaxCnx4MokiAjcdpAWZmLfUgRzc7BwXEdKphSwQNJVsJvhpyb",
  "key30": "2cz1F77pjod1x6RGyp6NHfKD8yAd8xzzMayS9gvfSDynkhVw3VEx7yhVyWnmTfhEhovV5Cc1wEawGwKGQTdKm351",
  "key31": "E94kPtAT3GUQxu7fviqX4coYATdpMZcdxFCJBTd28pgGowWgPGUZNzoQseCK9MhhRWgEzWvAX8c62BhDvi6dg6W",
  "key32": "4gNFCcqVYE3UBKphMQrXowxEQ6ZjTu7mZM9jQYBNYjgUDiw74NHoqyDJQEzbvzDux7ty85Y6iRtsPpAJGxX1exRj",
  "key33": "4D6KNAsHim9nVq5Z28ombyvAajujcchb3MBjoZZCswxZFWCtgp2tMs6ZjgcTRq2oB6L8H87yDhy13A9d8pbhwJE2",
  "key34": "rctk5NXGWefgZADURb2hdgN9nfzN2DyTQreW7YsRXfsvcJo7v5pVcHBmc9k3GZsjtuBY8TTYjVdCXi8PyuAAi6R",
  "key35": "34XB4kzbWskbRARF7gTzHAjZbu18uPLt7hV6z55HyjArVVFfqzxTt57TeveZgoj8hsqX7tRfpdL3KmrTnAvSaKkv",
  "key36": "48Sgi6fnP8gYZ2KVqjJ2dyr9zuFciGWbRjZCAikYHhfEtfo6HqZdH5AVEaG854Gaat6xm3bxm9ivSaPMgHcd82dj",
  "key37": "tKA711Htz5ZVh38tSSK6pPkAWbfFdf5YPFqjbSWnzC1SFfrVgywHAdont8m6hEMnpHA4dpSnmPv8pS9YNDYU79v",
  "key38": "5Yq9nCBe66xPkBYAoP64v41w9vFfMKHAduNWtRihvJr9PSwjxB5HU56dXVh4T6SyXK8YBCS6Fo53pwm57nJ7SYCD",
  "key39": "4U4RUFG6DyGEwbV7tH1tAdTdQihhFWnXUMzsus6cnHxHbcdSkfLREqXPPX8xLaaaWxq6dE7e1RtSzSuQNMeiHrZX",
  "key40": "61mif4LyjnxX7terHZPtNqePRXMcuUbRRaEPynvww8cgZ99W1kxQPpKSJJ845NKY7KoxfkR2wYMZsdZReBp3sApY",
  "key41": "4qZBULVdqBfDJMAG5JKga9FuDbVsrNuCcV9DCEgDhZzEFcViANsiiFqsUyndSbTdnfaGFRgZfz5b8UD3KZQsBVg2",
  "key42": "4yadXQgHcSgoCTThoK1XjfUTD3NE9qVojPqPUv6wFwFA8EwFuGpVchPpKPk2uo5W8m2MXXN1LUMHMgyCVkVx9pqE",
  "key43": "3fEnu1wgdu6zqjxsJ79myuosQAuQYPkxcwMvGvkJYfb82Hrr8QHS1zyX3LX5YtXms6CeGXkyAC4itbAGU4MDu5cK",
  "key44": "3key6yVDEDPhzY9tELDf2ZywpKnYLs8aA8VMZoDjpfmUJiotHFWfFgsZrwroJKrcw5ArCWzki1JH6f3TySE3Xj3",
  "key45": "4wFxuvufer3WKc12F6PrvNdm7gLGnKfocVstAejDT32C3nMNru5SXsPtyWAYKNxfaFWBHrHwkaxmdbDJc7HmTjhx",
  "key46": "5u512WzVM8Ti2z4dtdiu3BjhH2q3P5h2VMmQNnbrQXbvxtABsWn16mm94N3XU7ygbW6mQyMHYnRvRxYpdrcxfLxX"
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
