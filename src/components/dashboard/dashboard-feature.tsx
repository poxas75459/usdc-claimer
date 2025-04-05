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
    "ss6Nit6tekmL9gEYa67pis5UqL5Ge6cKo6Ba1KgZNhcD9h9tZKjBbbdaowHvR1oS6yrQxpru99qPANia45xwJzJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D8wissUEg3skLdGPV9rqSkULCnJ1isvTUAissVcW9AyQhJa1NEnRKGiEPJutnUJGyKtGXNfCkmA46hBKkeYdcUE",
  "key1": "3EgugmY3kTNgMyHwVWYKDwrPfv96pFKACCnTKSuMGvZg5AjJie3uKRgzW78H4gebXtJo8k2nFxZPYxCadfSwFZVP",
  "key2": "5puDDDAFdM8Wf8G1yTSH6hhK2W1cR4TLvuAkW7qzyXe4pWJDtRmYDRBsRh6SLPhivNrjF3PkLDNWXy96uacB8yJs",
  "key3": "meSQuZmqxQKhomMZ1NbPbESKkyGd1a8y8bj45fWKgXCkpu67JJiUzXMsMxp6TDieNuHajmCC6AtWEQjE2xu4jLZ",
  "key4": "vz8JLEGEamMA54hMm4ASr6vL3VSr8YZqQgeizdxeUmff7AkUPmCgUV1jnMPxkMCR9WfCaBdLe19vGVj55wcBBQg",
  "key5": "3qf6xiDh33fi8MrZvzTAwZWisqCkNvBwhYpYiUacDVjhsRyVfUadht1QUMaBrMbgq6fkn91kbsa8NRdu3ovoetNs",
  "key6": "2YXBVeJwtUeS5fcHxj3MnQnQ3f1UHxAkuz2e3jFhH6AF4mqBe6VTktWv9DTwMpoNaFyMF8ypyk8cBxYKQFSLfhCj",
  "key7": "4pGR9fQABQnsLroywVXFz5RkQEgLUK9uJcuD6e1FTqqeNFFqRuTrdof4MEbd9shxg8NuGpqcMBntWwCtv6sKTY46",
  "key8": "a3Zt8gMZt9oKBGQxB9oHRWax5PgQ24Bw8PeWk2KY6Hn9JuiSXGbvwPGmaHZnNe33nCmYk9Uhm6ZqpvsoD15nX17",
  "key9": "3gnUoBAKv1CEqanUdwhuy679fk4h55XL7JNStakXjKFPsajEpuxgxsPANHotG9b7p2YXhxhXwECftpd8S5esmFK1",
  "key10": "8oJV9JiAUdiggi1xeSggDCRPX37gznYV6bEKNZJkg6iYFhUHwJ7P8xH9qX6AFnowFT2GjonjXNPARcsqnNH5szm",
  "key11": "r5usXyEh42qwALttarSbsx6rSCoSm9c58xnEXwoT1nSAxm7fBDFvnYSDCYvB4goerr3ofyb6oeHeWdyX3cBTgVh",
  "key12": "53zRCYBadGuSAcrywvkJAnjkb7QqHBMcgq7tM6xnqL5oMXjsVKTZsLUH75pMySWqcp6XmWY1y4v8xBpaVNw9H7vy",
  "key13": "4EXs4uvW1YL96nCQK677Up693JKeaW9o8T1fzp8HRNWnFAfBquLbKj4SFpBhYz23c2K6FkvuDtqNhPB5zpeRmZsm",
  "key14": "5vhcPe3kNA6DaznPUntyJjtQHjk4GKaoXvG4AYzjekrVLVhNACmSq1aZw61eWqCB6wBcDyUkTsWKb8LHxQsv2RK7",
  "key15": "3mJHHnnJAB5FLMLW2nytYBWr8Rj5vdvCV3JWp5BN9jcXvDmeks3dLGgMYHSPh4Wg4n6ivWg4BjLngc155M9sHPiS",
  "key16": "5DAkgWL9XYCzdh38svg8LPAWbCdi4MCe3S21a78ecVFwayCCx7CgFfvTV1xd2xa2vjPMckTmbc26q3Fpu9CasjtT",
  "key17": "V4Agk3xXYQ77fNjdCJF1FjWPkD4qbAZr97UkaB5WKKFV5hnVEVHYcWFRCuWT6DgtXCCQmxiZCTe6is4Ux1SJrZo",
  "key18": "1jDHpzfpqzBidY4AjD28aeRnpv2HGd5vwAcUqgrbqcZQrQPw1fsU1KkoATPF87csUaFPeXyGXovve4K3FJUvef8",
  "key19": "3cs63R2Y6Ry9fA3dhbFQ2m65g6nikt2QQfNZ5nTGkzEcWoBBhzHftQMkf3J5KoCVtLAY9GtNcyzJRJVfDcuA1MVd",
  "key20": "3p8WwvALTKPqhohUEqWi9Ugd4rZU7xPtCgxXfzatWwd2vWHyXqho1bQT2sostYwPBKeZWHcnAr3j7fHwZ58MaZ27",
  "key21": "4sgZJsnLB6BFvL27rgAEGET4iyjE5UbkYbpxrXSKKDowPmCyqwRvNwrh6TAUfXg2WkjhQoWXNSrJLZRV2JrWjTQn",
  "key22": "2vYjvXzCV5uzzoAbMVf7z6ntR2D34orSy4dhbRN6aSzZ2BbSmbjNwvooELmmbm5dfF83je7V7oQNiBAvLQmUUgVN",
  "key23": "eXaVduAE9HPUoC6j9rt3inbhWEtaapQ4GicyowsHTC2mtNDZ5B5RKhnar6Mt6auoyN7DWS9Med9CUdckBCowA4Z",
  "key24": "4P3Jh9hWB6HkZ4yg5wVs4vLX89E9JARjARPtcuR3X4SMibjRGsB8g3V1iTpKMZbHjy1yALJ7RmfpCF1ogydsxb5W",
  "key25": "5W5oB7hVTAaaMpMgcNvyrCFWedSYTqXTwCR1yPPG6v3c1eLP3EGdTGjFG3LM6jz3tNnBrA3k3dUC2o5Ydw1jhjmT",
  "key26": "5iGF7yUxCHRS2LBNNUfdEU1BLcL1YvdgcwqbtVbRLoaJHTRb9oLfpDcdWYQiksS3YFYTwXChtNxeLcZVMQbkknW7",
  "key27": "3BuyF3stDKTYu5PWD78tpvsknhGV9JB7LQtv5mFQWeBvKPAmaWSCmUFjWiQQuNa1T6gVohCL12KZVwJYt8o76sq",
  "key28": "41VSoSRP2ot6WJdTZ4v3ifgauVpF47MSXzhrJW1wVQXAa1PFDivzCuaLXmpxNG9BpHDhgyjBUDqkEkToBPQqEHu3",
  "key29": "4dFvN5r5GrULhwg5FRxBfV6PUzetYJbqsmsVkPec29hVg8WaxXQmqDoiZqh6sfcMtQoGxmNwecQd44Wof5ScAb4i",
  "key30": "4GG1gnqhMuhY71XwksSkmWPAB4xFuAPke5eXVEbYvBFex1oR5FXNSFfxkrLPCjbVS6wxVHKkPcQSuTV3KDjBnKFj",
  "key31": "5KGDBEuAuZQwty9uvRHzN8fy7BLuu7J5vkKjnivC5aavr6yYrgMm6ZgxCqxnaRvjVCAi1wNHchM75kZRgET7Cec6",
  "key32": "33wBUzXiHHFmLdWyrZQj1QgndmQHyuutzzxBQ94QD76Ja6gFQhjMysgeRaSNFBtQHGJsQ9gnF68wYvU2K2KrK1Hm",
  "key33": "CVJYas78XC947o78xWVzKjv1LBotxn2EcEP24SN4mHDkqXD9WyWdL9bY9zxgUtbYn5Pnb78VhzEhifWoEDCRK91",
  "key34": "dCYbxv5mpkTfAMnr5DZYrTSGKBwci8TmKMcqoCdLMqkA9GjLXf3UkC5c1qdB5ihBSUuDe4dhi1eFL8dNAahJoA3",
  "key35": "5CmEEazGz5d8tbJhZ1dMRpyByespPW1n5tCNK5crXqtrgVgDAJbsrK9Y5QYVJabH24dqZ9VF6VtmMWJTiEGDn96F",
  "key36": "5vcpP9QcpHpd7guWjmFAp7mTk2KDk6eTQwaxWjiagXjyK4EYP89HaXsyJbV6VAVRNGzDGi7d4jcvhhNMfzoDH95i",
  "key37": "5FRGsX2dw4XBZQZCh116miXwqdyia9gkgHPHuZNqUVmQWKodSbJr6YFirhUegAU5b9Jw1y8fPsydiGLvM6cyTT1c",
  "key38": "2AmTAo4D4zqnXAHqb6xuG1cjAqSW2LHGMLee9VwRvcCZgwYxHRwdT6uYY8ABSkJtv4dopuqDXfjGkLW7vEmQdBfg",
  "key39": "4BYbc76o4wpDirYhn1V1Kxs7UwExYUZF3xKZpT24EhhXeqkhCULgmPm7846s8ZfkCMSi8mrSdfhL1ekYg8cCgVci",
  "key40": "2YuJkEHVyy94b3SHHscUPuHx4gHhLDdpgqvBFnzrSgaY4MyxZpPWLpDmaQpkbzCFRsFK5VNj1zuF1HFxuisxX3RJ",
  "key41": "5tJoaoJEpMpYzvQW1Azm7GGvdsovsZ5kY6mJQnRTMtHuhP8UngEZWZr3au1uGNshfiCR52Dz9M8asTELuXL14vwi",
  "key42": "2hYbsnDZxzFSAEX7dyNC7P9CZrEFXJkQdPXdrBQAqy6FnmxY6vttTE2Rpvc5DY6xk7pJgDgsF1kv6e8iRJvQ79vn",
  "key43": "iwERgbtkhUZHQKgk9yHDnb1aMr1yGxkY8bN8eTDyZqnjC3PjzpPYk5egoNEjVKdQttpBwxxLTYnHb2SkD38Pfc1"
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
