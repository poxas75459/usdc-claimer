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
    "64ehwgiiFfVaWHyJJL3dVgvNrCT4za7ZEUMh8hPWyp7qJxpvVULTQKfU8DXirpwSEWJKfDXG2JToYhi9HdUUdsQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gijv8zZ5ZZNGfynfUQaY3gdrYqHAsMqYkrnwhVmpXBLSjdCD6AYYMhh2AcQZtjhmj7zo53tTWdFudEHfbruFKmL",
  "key1": "vyEYViTHMAsxUaxasxgoRz985CWzf9EiwfysnpcvQ17ZXoskVRF2Nrn7ttXu1jpVkQWyQhsFTPYKZBKhM8vNem5",
  "key2": "2tXg9axCS1MoKcUuqE4paw7fLpeJLqUhmeSwiRTvnaJuahvDPhiQoAnhQGp1UhWaXLmeCzC7ZWycPUtP2r1T1EgF",
  "key3": "2FbqG7CtsGEWdEMERGByk6jcWWZJgoFXS7QxsqmHQjbozmNsZHpXBDEW2HaT9Jx21E6Eg7RtFyH498By1WhL8Vvu",
  "key4": "4wdUZFgtcEdgUEna2pYXAhezUuQMymtEe7jNQUYdWNgJ9wizMYWmzRJKCaoqktoeu7FBNko6uxdoEgym59TdwY2D",
  "key5": "2aJrLiH4yqGj5BncQi6xeqqrafM9JAMBtRfYNbHPJwRUP46vLofgtvxjayWhEPbvkMa2m4kLA9Wuvb9Y7LQVbEAL",
  "key6": "41WpKEu6hbEEXDHEQV2rWQDXBfDPHvsDFkAFNRFwM7C4kYKpsCSb7UqzAz6KLa3a354CnKczxHgptnvWNA6JMNUR",
  "key7": "4kH7Vb9ZiDM2LPbdceiCRcWVqstfZampmkfVFqWWNHR93EaNhQCdBGW8BRyKTYd8fRyMFbw7cB3MdQRtB6eqWVA4",
  "key8": "gXxU4itZfLYygwDbCThYucdTAwf8Q6j682m4wth8RqFGejckg19mQYreZmicmLGWeaay4hV27oJjMe6QaGYbyJH",
  "key9": "2MJJE1wKgDiPR9hRQMwxQUaoohYHgzomgvtKjobn4j5ZtH2MVBdbz99LCkT7mxVkS7AkeCaMr8LddG2fq3g8Q8qj",
  "key10": "53mhTz2bAufuuFtnij6gyCf2wBXoByhHWuN2rWDjWmeN6UenTjGbvmeGVrNmDmuFMmRayLxma3etXnYdYM28jdAH",
  "key11": "2qc1rDAhNW8Ntry7siwEmRwvATts1vaXS35oqMRvAKJw5gC8GRWMnAwh6PFJgzz2jNS6WBCQTaWqmiEg5NsFP56P",
  "key12": "vpxo8ecPNz1jaWpjD4qs98V7w7HtetvM5mwXHuAAmYm5W7VkmFxeN3oNLhutoBdkydn4jdaCtM2ZjWmvQcnBFvz",
  "key13": "3Y9XAYqJQVTk9UjpTm8dTHfRtWcCtkVpwo6cPEawQFK2cKBUCyh5J9ffmBm31jDCvqDvVBD4iAX9AaQPdaRGbQGH",
  "key14": "3gMbg7YnZm3rEU5Mq7q9vkw6TTV2CTyVa71PzeehuPG135wVbBFbvH9rrkP37Er3kWkWS9ZecAvpjzJQgCrbjpsP",
  "key15": "5izbNGHUHGnVN21PuesFxjTME8Jy1zG7ngKANLJiV4egjn912LLnt1LMHtt66Mi2Frg3qhQTDkMYGBbpHezmXsWu",
  "key16": "4DZyZcGGf8HxMNKyWbHLjmzNUan2eQm7p3GZcbwxhUgJKLcBYTe6aKcR1jta21FJvRfcrQ9uPEZGMx4gJCejkXx9",
  "key17": "1iW2BcKgfzz89ukzuNqq9jVG63mMfANdnSxHZnZGwLUsvnwg9ffr9cg2QY58p1DJdHNxvfhf3Hwr5ZdKsrBGnPs",
  "key18": "y9Z8t4WEsv6b6ByRciq2iN2yVn66Z5G9FfpmC6mXZS5mpyD14Rqfpcs8xoBgi2gZkywQ2pdw5s3qoN2DcjRgHzB",
  "key19": "5C31wRAzyQrmaJYyCZdNgevyRDVXgJLAtQbdwMjE1CxFqJbJJJooVpXzJ7g9mPAizUxhrcCmYgPnNwfMxEDL5fS3",
  "key20": "y9Yp9PGXQEvmKLw362C9tsqpanihCgCCmYb6YQqABK54rtBbEgvCZDftatf1wLwfSSYXfjaNDaJNgqSaZWz84Kx",
  "key21": "2A31ywWEhiwLTraVVdneygHdeU6nD1ankXbTaqfn4mB1qYRYuzQj3vmQbahKLiF6nKw971WibVZ4Lu2xyVvsFzwf",
  "key22": "29WcBLM3vyZnXhPbfxYFvipH7xw5aXc3taQisSW3WZasRDW5iWdzgzqbqLWwfdRi9S35PP9ddyPX3W1Lg2GiTyZo",
  "key23": "9hdvtwUAAyaYSe8dzKxEfBA6dmfS6orq2jWwFa4aGetsNZsCV2R7L4mEeqaiZ4yytB5oogB8A2Dbj8EGowhZCtr",
  "key24": "2xfRFnwTBc8nE5bNPS1QwCRrym9zvHYKZpRoErc3m9f3cBkBWNkPCGZKmj5rd76meAmiqtqCs8KxdntjqCZ29CUY",
  "key25": "BzGBJvaPD9367z6SgAGoZcsTvvPrHzaYYnTXBgrQRWfuMNLzWPfDibodHVj8ajuxuCJiCBEpCSpNiUUbsFtFb7Q",
  "key26": "3E4hMkrZYeRSuPMfWFVNHAsT7pkn3hCJoLskTp1ESXfNtyWyLaxwo11quL4qogvbCxx9NyQZP8AcnRyHbGfYCAT3",
  "key27": "X4EaW4THWdHCTkLg4tyWH4xZFPtLSorLM76Dto4gx3RypMbogGnAABK7JubPVkuY6dpMfcu2GKa3UMCD3Ahfh5G",
  "key28": "3u6Z64w41LA8jGypNpxVSK59kv5sTCEPYYxirYU8BS1YfWkpHxzizVAKxN84MchQBz9B6r37fRxGS2YscBUfEZo6",
  "key29": "5tx7tn9cuEv55K93mPpcvCbhL3EBGdTMHbC9U6bRJbA48KovdqgoZeTuyYiZp6si4TDAZ2AUmD63iF9t4eWNrRqY",
  "key30": "4rDTzZGAMEJi9j8pz3ubQfQRjsvrsy8FQkYLf81SSRXRJNep6NXSSioC8TNj9VvRCVvVSRJ6DdjexyJaesidKxfD",
  "key31": "zGbjECnxPwteLpEZmoVa3PPyLMgHk7YNuU9vfxfbra2XbhYu9h5ihLWboNKjboQZpa7NN7VvkU858xLqC4doXT3",
  "key32": "xhw6NBCEqKSRjB3iUf44dvBbYfuwi6wjBWa3iSARQVpPHEx2H8frswo65rjaC3oiQfZCipFGbj1wx1JpjnKiugJ",
  "key33": "4yAZV9euz3tDrqWvHJj2FfSvCz3y1Nwx45wveJWzRBJuPxK3FSnXWmR97FL1JtEFz2WnzUbnqagmpmXDVNh6QfEs",
  "key34": "2amjA2Fh7fuYPWva4fpTriKNerpuC4meybCixiVSY3b7aefLh1hiExYBfbV5vPWJg3H19gj1gvpVWkfnfNyL8EYq",
  "key35": "7o9RsthatHi2RdquPR16aHYMeMLC5G9MXdSLfrixowK9Gq2BMbkUcBwZKARhxSYL3cRTM9XsKQYLtr1bZLbAdTx",
  "key36": "4fGoDk7cPrAtDTJYg8PEbRMdvQ1Q1phkpVSxGkEhgru8CV8RUyykC1bAJyJ6KQYM3q9miL2RCMcx5RBfQPGUe3ti",
  "key37": "3ZyPQAaG2CWKtWwosw6MpQptcUGAug9GoA3WDerhg8U21AP1GS84vw89kkcuJkdKe5Cdmgad3uesQ4MLQQs9Q7dh",
  "key38": "2nTd9Kw2DmFDHu3hJpwZd1GZFbY9PFqhbD71c9yq34naTDhBJMXqA2Mjvg4j7hiAhZ8mZRkzTioQN9vtrGV6oFZZ",
  "key39": "5V4wPVnn4WC9rqCD9TtuPabwF6UMTsC8PpTStEeyxNWXTDP9qV7eoo4wdqi72SxaYyH8M2smELJuvBX7HKwjwEdL",
  "key40": "2pYGQ5dts1WTuRJsmMPwjMZQ4gM3LQSS1DGtPxXYMCpzv47Z67vyN6Ux6Jm8dvBLqUkhz6i2Vy3o2Wk6zFyXwNKT",
  "key41": "3UnRxmcRhVVATBgDkw56iBae5d8UA3aoD93dmXqmRATZ86tkusYTkdpe1ozuirqCJMeefRYkRpWfg7k8dULmAVYR",
  "key42": "b8UApP64NUQpoxogZACdhVBAubb3bZSwaP5ZJQPWDPF82r3ywrxYgQ49tHdjR3o5WVak9MmM9nCpSZd2msTRoLK",
  "key43": "2dC7KBNpLBM9DGQQSCTHUMxnPDvn2HUU3N6KfYVCURiwAc5Kb4bUwYbWaG8kveSohWTWSP2c9N76RDHkLiqxQREU"
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
