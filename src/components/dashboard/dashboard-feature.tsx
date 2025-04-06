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
    "2LjrmuXCxmN89dbA9tMN37bx3AXFGT3SwcMSerXx6XNgYiaFgiLhdxPJFLuz4pjWFnMirRCqKWwkRbHaXiqSBver"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aQLivcTe3mxJQYsoq1wuaJkQPKcUjw2dcmgmEFkT7785yLDJsV7TWkQw8x59h4mwXvBNSSXfd7ATg87ybTQFwiZ",
  "key1": "4AF6xEW68YdM6NJ23QCAHbp4q4kdEc38J1zQzViZxy3cwH7XmNEKBmpsxPMeKUGwWFBzzKomhxX7y2ZBeMWDhAis",
  "key2": "4NugeHMtEufsq7yyNK4oc1kdWGJCEfMmSwgZtCuzt46hoyGp8YUL1qNP351DH7du8mGixrnsyMRwnA2DCHeEi9Qa",
  "key3": "3FZbW8birjnyknnJKFiWduUzS8X5xvGT7Yr8XEggFLMrnq1tqzkjFvQPPPphNoa4Z1g3wMc9q2dBgmxEwmdipwDs",
  "key4": "Xj3nFo12cZPSvwhhzwVnDt3MdsWy7A1LuhE8zeSUaCp2pLMkt1FTc8roEoVPmLFvTzPnhKmkpeB545xQbCNXiWQ",
  "key5": "4oW6DeqMx14UrWoKo3EEuiZcsF7iZf8nVBnM298RthYAHZEjz2MdoV6CKteuKeiNNoFdFrvzq87pX3uVfWUHeQgA",
  "key6": "RriRsDGE2b3TBoevazaR5EFH4QJjyvo2scMohuZF6KSVmMBhamuSfHGFxbt8QZ9EsJzw4Mr6VcU58eDtmdsqFzb",
  "key7": "vyLbMDjpNwqtTJkx8GWT46GSj3ZRmMgspzjqvLnJSnsCPXzuQXry7sHbSLsuoJ9HJAmC789w7idmVQXTnrD7HnP",
  "key8": "5qAabGY3nrtEbYQtXCB1eubSnQ2VAhuFjb3hVvsiZ9z3mdcT1bdLLX4aWcuJoGHFA5hQTob3uHa8qEHrCWGj7Ytz",
  "key9": "528XZgxyMQbyCHkiLve2Yx7W2zKc3MLgcG9joCjD2ukVHvAkdHhtj7JqUXhXHPw6taWF1vQfp9uqemrTskbw1dvm",
  "key10": "sqsW6Cs773DftnRUxPrgivHnmv4ehtF2yS3iqMPzzxdhrGcDhs5v26AL62rGofUvsvi1gV8RQf9Kg3nKSQxcARb",
  "key11": "3zC2KAyzsbQ1fvJ1UXaxrCPPe3vXjNUtWAg7R9pDHWUDuV8je5t8SUcpsHk7dXyVTZMASizMXDFJrFiy9rpCnm3D",
  "key12": "44twp2L6KrPzTQGiSKd1wymRSxn3D1Gx7XhEe6gwN7qDbKTyDkkuUWqq53ZVmo1SFHkn32WnSMiPSqmUyLy5Zo8",
  "key13": "2JE3X7c2Aqf8Km6Pmo2TuD3T2bxyj1QXc9V34i2wLT8oxKpQThwkmGvaqumaLR5GjwwA1w1QqojEb5Vwn6wQ1dpG",
  "key14": "5Lmk157A6sP22G3CqJPhX4BGnRN2eAsFPHZxKp15XUYwgnMCmzVWbpjqjHRdkQBxLV2S8YYthZzAo9NiR4Gr6Gh1",
  "key15": "2AuiqUes17TTDeKsj9dS934ngyVV6ib5M5mQPz64jZQmZsDnCf4fLNAFJs3BPqQKtvK4cu9MVx5byQjxVCHyvqBZ",
  "key16": "5Af5ba132beanXV7uwU9FA9G26aqHP8DXk9RRZqSzFokhQhD5oD8LBbaEwJiKPMUhDze2PwtRXa2RmTAt9M7fCq1",
  "key17": "3xPZXDHhjQT3iNzY5zBeXXq9YEoHLS2ragCLBiaWfWa98vq9zsVQBA875mv1Y4QCxDLxCvdaTSSC5WJi3ppwADdv",
  "key18": "61mcoTs7bnuA1JTARLnT3eVmQusdn1crxY9BzncT3QBf7CkUp9btAYGDjeTAwNJ8ncNixzQFQEgBTiar1QwZCH9X",
  "key19": "37SQ5qgQ7rqSPMEEt9GQzZRGrgHZwMPApp88cmSzGhCmwrmWPGnX45tpPKmRUCs3JYapQsZLtBUcZhpugQKrDA3b",
  "key20": "4nENUY6ckhoznYjTp7YNdtRt9YYeGgURZwbqURdBnitLUqf5NUCKxWC2xocVjnbRZaRp9cHbvRfSPq1CFtV4C7pG",
  "key21": "3JQqhne31HExnSwdzEN9YF8x5noNQVcRYtxpqKxvZpzb7d87YkNvY8xXQD2jdFcv2WQefmVYmyDNCMXMBuYK87Kw",
  "key22": "4gyaj94KRbWqqpPSArzYwQoiLZsnbujDj7KM4igLuRHkdwtgJfCdGzERQvWdf3cHuWuTe8qF5zAbK9Qmv6HvgTvr",
  "key23": "3AsMRFQq7FcdZ2KCidZKjfRUJX5qY7jnVzyZxhW4ighusuQQXY3GtogvJrivTHMVL74LSKE5PrBBD76rXGjPUt2P",
  "key24": "5V4fYRe4kKpXLWxegCDTYfFKiHg79Qieoi5tE4dUPrmQ1txmBAntcmUC4XAedxwk1ucDDDgvgyqfpCjDRowp7U37",
  "key25": "4MJ1SXRV9YfWpqxW9fvTadNYzktdK8kMj4TTEf5XTG278KuJifKXishZ9hFHAecMFED5Two6Y5NXDr9yfpozAquT",
  "key26": "2ekm7FagPxxqCQPJ5oArjSuUM77U8eqzs8vCCyeZT9AkwWyDGBpT282LbCMBvwUAVRCM3JjucQfp3qGwwHxmYhep",
  "key27": "iqMjf4ZQfMpcGDu5wWBjktZEf9DgCjHZs6BFGESQ4bUwJGcYR4WsXXqfjqweHpJcgWgwNZh6h3qYEGfHNLYeN6k",
  "key28": "26YY7AMJYaQP17ry1wXsdoCTAizB1k7AMd5kqPttbhkHXvinj6RtMcLsX2Lj1pm69wX15CdpKTkU8pRA6Qpdiafe",
  "key29": "4CWepfM2zAxSGBJETEmfGmnvcxiBELUbWgepLR5fczn72dsyG9g9z4yCBLBtN47EiLTWK2KvAVXNJTCb6ud36UJF",
  "key30": "5cVzhTPtbnbccgwxb6ybGEnC9mEaN3CuiS9NxjD5TcgoFTNVnfdU4Yk3Pe4eEWVfgE3bmaU8LVXx9ZYTzJxwsFqC",
  "key31": "2chiVrsAP5gDBNT1ovD9vVa24GGReup9MfbVWAWa8phqDtwKmE1LnS6Zsp6GbjpNDxqFaV1mGFayH44UR56MKMZG",
  "key32": "5LQ97GLAfpGrfu5covZJXp1iBhB72hRA1yrwhZx1C4VWWFrVsEsF6rdXSv8JAyAYduHd8Loiobn4ayyZJvVD6ECY",
  "key33": "26JGKpHqvKZ8hyvsa8BKDqCfAkypsvsKchPxJPi2S9iubUqsnrefRZa1GXGQ9WvSTACr2x6u6hG5sCX192HqfZAk",
  "key34": "4iETSbRTTGG6jTDaqKFVLnDMtidLoaVfPkch6PURHVt2H52S3md6AeAkjbrTi5EkHBd1shATMcuDktXWeiGhz6R9",
  "key35": "5Mg23iZez63iSpzVULyVdFeYyp2P22nVrWm1uKhRsFBet6P26jqae4iyXvxbAjkEjAUFfJjRWxLsZJD128ynLEnv",
  "key36": "28L2A4rqDif32QNbJftRXcSBipvJ778kE2p2aGFTWPwqqM9ZdKxH3VLEMW9Re8Q8F5XdGqziaFUUL2fTQhC4oG9P",
  "key37": "4XYxQkpE1MtYoisVxQn5B5YgvFG3wdVCRRonkuYUb1G3HswCjbFh7bj4fUZZXzpLRjY2HWbixa7Agq7wvJxr44bZ",
  "key38": "5fKJJDpWLt2ZuijkBDLhXUKPvVhXR4AP8gtkM2Jhb5sh2x7QpGqMNQEytKGK7d9gZxoRLduy39wkmhmLy3wW7y3K",
  "key39": "2b8MhA8XnBYPu2mJ3Vm6D24XHNHf2Ke93G6gsUcPHsSv4Qa2PhwJPH1R7Jsj1HNTkmJbFJBJJcJVpsboEYsh3U6k",
  "key40": "Yxk4hHY7dj779jPKTYGK7ndUTEPc46jhFKDFHFkQU46ksvbWk2tWHiR2511HYaAffiLhwMGrvxEzHFZuWJLe1vK"
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
