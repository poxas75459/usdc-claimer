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
    "5XEaGpcLnRdgZrVzaBMosWt4vCtf5MFwkAJAtMzyQg9VZimNaxejg9qDQdY8PySBBUaJMpHS2YBreDYL1AC9vEfD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RUKnZLkWK1vmKmpHaP7e4R7wcv7p3BER2etZGug7FoBgCCaDarZR2SjvtPMJoGL5Ndy3E9rmoi6gZPRiyLF2tBF",
  "key1": "5aGeLtUoMk9gZ5zJV5FsRsU348Exwuv749F8zfUHdgR3v4qQTHi8NW9MTVp7HzggDKuN4hjoac4p3vzrDSydqzEo",
  "key2": "5mi4C4zcTUdNcyXcerrwU7EjiA3hevQwL5qMfc8j8CqckdT9HbLu9DLuYrxYLxUpf7AbHSgtBLCmKJqohVvxqLW6",
  "key3": "3YpEEtuGdzHfimaHVYu8QM737KV8DbRzcjH7t2oszwDp6uc5AjY2grHm2RqiZT6tvTmfxNunXzfKvegnbw4xA5h9",
  "key4": "c4LsfqDax9rsizfQjQkdJ72zeUaH834CHZBEvwvmobDAmPQdzk2WPCTy6LCYnLGyrkdxNbP6CF11nM1W4asSZ9u",
  "key5": "5rCUQ7hCUUpkEokLmhHrcUrAiWSw1anXx3roTimc8YuvyGy5vtL8VkVGzYp22vbbrS1UDMDQeYcxJPmdzkmNyB6K",
  "key6": "3ZNNdNzVzu3WFn9rfXU5SDp5MAH8LihRcQw23JGMtk923ycyWPE5Vd5kHMuxLVufJ7YsLP97vV5RJUBrhtShBLM5",
  "key7": "4SerJu195suWFvdJ5Yx1ZwBiCvwazwF294qyakxrbtJMGRCeCSXRRKKyaggGnnLwFktDS4dA7QBVEh4Nm3wMePGj",
  "key8": "3cfEDiFnbYB8rqxJ3iUNv9bTQV6AozVLnXgPExQBkhY7GJLyMkGfwaUfr4gHDM3w19wkJ7JSk2tnEuu8q9E6yy4Y",
  "key9": "5JTxiA2xDcCWV5mDAF8SdaVSdNkJNh3nFFUFMswBi9T9gxmxFsaXcZgcdNFwds1JaU6WeS56fKNb8ZY3Bk382NBE",
  "key10": "4LzThyWJa3BQ59Y6VnCmcD9XqxW4pNJmnqUMRwBtxYLiYwVJpW3DX39HdipEyK79qiRc6mQhmhsTTXYBBLtQUuio",
  "key11": "5r2W6gB8JmMhYYZMjiaGyc918Qmc36guRJ9fHbDKKAMBHKzz9DnhQUopuuBqbJwTy89CkSNNuFGVQiRaL5PbqZWH",
  "key12": "3rD5mjbQqBByJTnhdXGrwpF971UWboMq13APgbuKyRbRhANNjnUge7YXN6hK2eU6jhh5WA3CWqYaCQ4sy6zKgiVe",
  "key13": "YZrBxPBzq71K8pmFuZ1JshgFyvkBQmUuLE3EHK6kHREKhAegeVwWKKS39UymqKuE31AKLtAr9FunWkSQAErgXtu",
  "key14": "4i82QET7gZCJNdV7JQbH16SB2RxZszBRGdCL1bZhmAWGyZR7ntufoK5m29TmUkBnYmLBJhXt4kpPYSX83KicTAZ8",
  "key15": "4mYWRF18vaCPhv1T3YjS3VqEqYqRdhaBLpJgMJptYR6SJWUUTdEBaycwcEDz7hZfgNsEpZsG2YANXGwEiGqnBhoN",
  "key16": "2umHC6fx68AGtgSouYNhGV3qix62m9WVLKffEComGJYJs1c2gf4bKuKCDnUyUdchMz9fdicfsK4zZxLRpj1ffKUC",
  "key17": "5V2UaJe2FLH9zQ9JruNBsR1egd3Yn3Z5eFfHhj8Uhay418BpJaAaCE2zERsw6xPe3SacponMibdovF6vhNvxhafM",
  "key18": "2Q75umrwX1GHb8hdhwkp7FgMeBF8VcBWqVqMwuzcWtX55HChmUMvrGELULKGuSbNxQW4yrgS49sLQ1rW1B435zwQ",
  "key19": "2smby4VKAzwT6HD1Z2ZuXUVZRtB2BL6fTpsKWjGakPSsPkxQF8QD1CLnTFWY4wxyzsTf1RU5bKmDFY4KdEVMNADA",
  "key20": "3JLKt19UM56DDN7stc9KzxB9EUzn14TZvJe4iCq6yMLdWK4JwLkNHfqHPcvsa1h4Yq4bhXG26GAyhXmx7aCWwFsJ",
  "key21": "4ny5ovymsGUYoGAeaatf4dAG4P274wPLagKCnvdkecMutBTCLFU5Udci9pYeWGJVKGm9DCNHTJaD6yUPoVCfebGL",
  "key22": "5VQasZLtK4ofWxyUUbHVrhzcUofs1REjJRtuiLu41oXhFss6Yo5zSCH1CZ4vFP8UA1RCggZtWN6ftP59FVERLeRy",
  "key23": "A78SqWdGa6NQ7syVjAAogzKvsUu81XKyaUn9Kfm4K81nvhAvuxdG4NopfvbZ6G8taJvDHqUNBQvPbG2rkbna5Gy",
  "key24": "4qMTNrwiUUnLtUaN3BoLiBpp6ipBjdLsgseynBPvGtczQnajUUmCzW5KhLnyHmABukPaD9PgYTqzfvWcB7GDgkq6",
  "key25": "2qRWzQhtU5NdMoPyQoNzHvW6iCEa3whUs8RC2wP75TvHwDeLMi3tt8NdwLGuTvAPTH6a7w3MVurtwKdXcc8q6WGk",
  "key26": "4nKvQ12dUgufpdAmy9KKS5wSETKnZDn5DrmYncaTHYw4zscMCTBKJST8wiTN7iGgHdB696q8cbfgNfHfTSVrVgdM",
  "key27": "4x6Tdd1zqWj2nk8sj637P8htR9aGCkH5UVaJ4PdRhf4tBqsPEjrmoBCKBevDBwGfCThoX9mAdJPbgfWGMHZqUMQq",
  "key28": "3KEFdabwFHMfMrJts2Fk7HmVXoQ7dy8hjspmCxWEmQQR5hE5VXKQJLvarpaJizZLijdzQc1vyV9YR3AhisPYZyW2",
  "key29": "5CYUACyZREuuAUMzfrv6qqjremxKneQeQ8jCvDpiKJYoB2ghpbLGX6mXNzzGWkPkg925nAsMW9Swz5meSmPXYhLV",
  "key30": "5VKY9tsJvKF8hwJ6BvJTQreSPkQPkTg67ucbraBDiju2SPhMJc2GhfN9wCq846gcCmMGp2gbFBxLVA9ffePpeT7S",
  "key31": "52UVaHgfMWh5xZAf6fjLaioUUznKX9HsWcLLb2nnR82LysAwGUF55d4tTu2BbnXYYrfGacAxqPsuUZe2f9y6ood8",
  "key32": "3rbDPM8LNYSmGWxQwgGH2aHxojbuJm6yQ9SAvjNvpJNTnMwpiKD1jQiNimbPipvwhZ6UaFwpDVeU9eo7X9v4xncj",
  "key33": "3BsLW93MywtR9DrDk2yuH2d7MY9R2FG7JRRM1cggb1SjYsmMYbeze4B95hA4gopUjxfRqGw9DrFMypu2FVaq6vvV",
  "key34": "5quycZaSZA5N5U45SkWbfQKcWqEjd179diGmeQJwWSiz88t6KFXh4QCaUfig9TApVf2oB4cwwQXZeh8krm8LS6Vt",
  "key35": "3U2iVwdUo5hqRKky8CC9SX7bR7bH6LRsrLDXsxngfGh1bJwF4q6TtbqHmFyuiaQhbGr7CgDmu19pMsjEe8Dn2hu7",
  "key36": "nPEx1ZKXsdDPMjji6qWiSJiAYogyFcNdevEYQwrpBDuBWxehXXaYQy71RXrhQWiz7HuNRA2L6dT6utrJ8efJK4H",
  "key37": "2xNQET7gQvChPyLheNGPpoZaXQs96xKMhe2h9PFCkqyG4ozksmUWJMhj27PkNgFc6nTkWv5xeuqd6ULTYom8BSQY",
  "key38": "4xncQXdcS1J7qzCMWTQUJzBbZ3HLJFfohLDKekC448p3Wr1RFazVgWrx6Z4dgcxjjtaLB6cPTJNieZbJgAX4jXUz",
  "key39": "4Xz9npTgeMEx9PRn2RMPefxqN83CqtBHfRZBUreMgadNntBZ2V3ecqjC9eeJPKDmSgs89JzkwDVhCVLya8Jm124v",
  "key40": "22cxdC1Bc7rv7GQQfJ5TT9oAQNSUJA1V9uG6Cg43aQ6z5fD9T16FXbfJ7XJU7KtzYa8GUe1HMvSCXjV7PStg5arM",
  "key41": "4gLue8aEnBW4zEde5djNCPRvSaaji9Fw7Ez8vbmunVgoKfMN8Hv5YehbPuecYoFqZXe7MFXXGXmRfr2QTyrVWnCr",
  "key42": "yJHzTYMsZqDQ5vo1L2sRuwPtai7boBLXRr4bbUuVG7PHmoJXXsYi7YVLJspUUvQxWJfttcBaFnfY2oyrfHRz5YP",
  "key43": "5eshDjGUWUC7EvKC7ix7Ts9CeZEdYgF3pgWZKy43ZGNZx5WZ26tuvDUoiHoDsB4nT8PmESLBsjwjHiU8upi5nVU3",
  "key44": "46LMVTVbdQNjQcqekBH9eKTaGCS5grxFqXiS33t4DX6y6gEmnjVdkSZC5T8G5CfNranJwG8qZWYyCPtqZ9Qs8ZbS",
  "key45": "42i72HMr78HenGVy849p5VeDWzd8M6E6CfYe4ZH3PBGRTPcvxDRQow3UzgWLwUbLj9JUZfmMTiGaXbxPwmrVoozM",
  "key46": "3qKgQAb1q2fqVgThJ4L7APmidwBHPUBzXu3uYUa2VrKjAeYZEfaxTyxqujx3uaQ5hADzMRQLFevqdfKdYkcuAF63",
  "key47": "5WRhmpzt63N1LCxgmrgcc4aEF7T68BBB1JXwv7X7ub6pCd4vMpGpP2nVrRE2MfPYLvZBQ7pDLPWPhjvtaswNM9Nm",
  "key48": "3BrVoue18hdfhns2jRqSgWWaaB7SVmwfwnfHvcULB9yfeA4c1Ss3Ezwys2z5kbW8XyW4z8JRBg9jgHtg6HCbQ7ov",
  "key49": "PqwgqamzfgfNRxY449zFj7C8mdHCoKGEeeHtDBsmF1Q3gZZV8fxeL7hig3C5GPW1mmyxFMRS5LNkkjqAp8jom6K"
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
