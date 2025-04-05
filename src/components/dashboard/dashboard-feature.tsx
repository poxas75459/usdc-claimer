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
    "5hDppcZyUmhqCQorTVYdaiBQp48C8xu6Mw5ggCXF7bWZrfpKfMGxZ7WxNNuVbQH79BKss6osotBJT4GWo8Jem6ij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E4jXxtRDp1MFDMHFbnbzxrkW75jBfpJFgsiVuqSFcxsAQ4c5aJV7gfSPVEbYrVES8J3fB6eDDRAK7gSgWMi6Rmb",
  "key1": "2LyDdecxKPVGFHrGj3oUZNva8pwL7o2eACHAoC4BVxb8NAWEYZUkziN8AWpYvVxvTZcnwxWwQdknjNp1X3zBqX9r",
  "key2": "2Znn9us1oFoQipGjeyvm4VoqzCU6Yvoo3zyiXsY6ZYZ5QWZ8S6HYmxWhcHfQyFyyeWMLAfxAuus7xdeRvsQuK3vK",
  "key3": "4q7zYDmB7XPbDozmQuhH1EzW3hnk8J3DxFFBha4LkJ7wyVGcN7tgCJeWqABQvGBcq32SJPRiNfCZq2RVMqd6ZErd",
  "key4": "5RQ64pHeCkVGvgstCJfPx72F2XDm2eZkTKHU8VmQ2VEWSzgbfZnWzJ3VszyL7fEj2WiWQAnVZ7DRnVYMQtBhWrAD",
  "key5": "2iTH2AtnVwnqxwAXZFWAGvFHTdfVxvLcVKL2CSzRxChch5bSNZtJgs4rTvVNFvQ9FCeDUkVTWaU8AEuWVvBVZzRy",
  "key6": "4ofqHaACV1RgHKMojkZ1wiDWyHYPXVR6vbC5ai5Vs1hMBpnMbHs8k5itXpyoqBGNLBqEDWXntmHmkR5Wh7ChNMUY",
  "key7": "4FQczTZcxdKM1iBKTrgJEAeSZiJaBLf2MT4F1iwfxQCLywPZgTixjkKajkmqWwiLi8ZJ3C6BmVoorRd399yfupYG",
  "key8": "3L76RbLTm1opKSmkFyrnEiuag3VWXMMLnpFQG85EQ8Ln6pYe4qAiisoJdK6PmDKAtHrGVVfwo5Dks5K8LPHbEB38",
  "key9": "3ZcATdMKSRM1uqSV3bHttR38VPQgakgNhVsoquQhJke6ejm1k2LxpKtWLEbi9bVuUSBCXRRRBngRkFwVpSGD78xb",
  "key10": "5FrE9eeKcQf9dAynkYcBVMk43u3f94LbkWWRaCcWutGh6Ajmp9YW4jQZtr2HbjZ7uyo9ZdxLT28ZMwR9Zb3ThtYg",
  "key11": "5yGHzzwMcYAXigwm6ge318NHV8pA4yQ8LSELA51oNS3fx93xLbccAs5MhBLWWLdHNu164gAFong2KUaXYXa1exDr",
  "key12": "5EiBLq7L6SFydK8hqKdQSxXLAGX1JS1CfVJRjdjiPQUovCmtqyPLdUkukEbm5ATszitUkhASVADHnHzZiJgFtdZQ",
  "key13": "2NppzuJWHmBQBArvpUA7QSHNJgT5x49pvftxBwdjBUXA38tK4zH45yL2pvq93N5DDYCoe7hVoM3h7N2ZuTkenqxJ",
  "key14": "56AFArHrGHSgRrhu6haxpWTjXsDJYFrRqxrGPRNaLivoLbQagnnp4V9tFxy28Svp7UoA7qMXefefi58pNbQ9PzRa",
  "key15": "4kqBUMhhpiPrdn72bxQjKan5kGxG2T1ru2JXZcwbKfp4U8orBSuMgCPbbPByq4d74hYPPHmfaSWkmRcciS1DRDGZ",
  "key16": "4gPQopqeWstBTmNKyCTA9ezh4aNEZdtDLQvTZiHXJdLzGCzmWMR6fGpdd3ngeeBNjQ2ZyKt6s77TeFMFnatNMNDy",
  "key17": "2NJBzAxPS1FV8rpW4tgnfY6yRjqzLqygZTNF9KWZxLKWtVk2i27sQtmUk6BSzvuEq9tTyVGX2dESEq74oTrhxbVL",
  "key18": "4tdj7mw44T5roxunW93N5TiLkB8AnRE4PzxNup8BHLKggj2PP4svYj9z35QW6LQtExuuY7YUfcD3Zqpg6Kxp584B",
  "key19": "4Wk9NZffbZLKG5KoBPnVqnth5VXmhiyMJMD3g7odZ6hDCnKcxGiEz1UdHMJcZmJhjrk5zZ3HFN3DejamkSSeUMQU",
  "key20": "4SQ6UuNVKa9kk9N8mDpBDE2AFYxR9Faw9hqUgbANcY4Zi4NpzZ5XmWXaYbwF3tgepzbLAmQyWqfA55mjt13BA9di",
  "key21": "5bsMxyE9M11ctZ2SgpLo4Zg5y4UuCofUh9n8sjiTZue1DjtyCJntHHU5kz9SYfoqEr5h8hPA1SLMpe3kyK48qYJu",
  "key22": "4vYs7mJsXykCMUukUaNwT3MPygTmEs1AeGgbKARgMhnjhjkEGsSv6FxMcryyVjm14YAJ3ptBbxcyjGWqkwU9XLjY",
  "key23": "vDDNUymgjBwn4xE5NDoUZkkNppyYj8X6BbnqkETJMNuDGV6NsGePxUVJM6L2ebJoYMTfYvuNBMsCzb2vLJPTX6A",
  "key24": "4YygNjPDAbk4ak5n835sWWdZf5TinArmmY4cHCjTE64j4Utbc63dwSoWJ6rceTKq4LXwT8mDHpC8YwbztAU9ixZf",
  "key25": "3Px11coKDC75jQwjZufPnkXH2QhRoD3EoTJzvQGYzr2XAyA8HXP3Jcb3mQKJjZ8baxDDB9v9ih18LcSGfAw6X1EB",
  "key26": "4e5FC9X9AKZVwwtvssUftGuewGL172kjkVAJnbbsYSTNjzGf7xAggmp2c95qDXg4vVznDxXw6ANJg9N1WPE41ExF",
  "key27": "3sJdkm4GfkB7VjTkEJn2hCzNM37584NU9JYGq1RGjsWfRZv6tQ8srzdamtSMTramCQxWanuG8VYJqswyJFZKJ2CF",
  "key28": "3JMsxEJWLMA9xbY41peG381A2F32zc4Y4bX35xYQuTBMCTCXVKvd9WE2iyZHY5qaq6sYG9m2MRJ2weEeuFeWyzYW",
  "key29": "296RYeNyZMWD5FbuUKpB9nzCWfvXAgx6uhi15y9CDEbzBNksHxMpk47YRroAhk16dSQncvjgqSSJBE35qCJU8XVq",
  "key30": "2SkgLpTAKY2M5TfM4Co6K59LX658sRUGXrVRaWvjQjxDmjcXLrg4gnp2f3BGifNjHRE634wL7zcSNMnEEPsoCfPR",
  "key31": "2RZ8Ny8xmpWYahnX5P51QxTqQC9m8QxQT43JKGJ5tZxjqrirEDnb1kVPYs7LaxF7MMwgDhyEifp9X1E2pCqScVwt",
  "key32": "56V666L3idVodAHWvwXUm9LdXszQwCuw3kKHksCmRubq7Dcnysys6PhYshYvgaD24W8QyNFWcM4dwTf8BE5xiTHr",
  "key33": "8bV4v6iiX4HzFLXvtG6bVYm2FNtp2sydzTEUy7V1TxVmKhYEiAQLjFnSbGvFnkhyMexxi5Upgvume7aV5b3TSsM",
  "key34": "4w7dbPi6ZoRod1idZQxFPgRuHjbH2efDDu6uiADoD7kdbv2HW4U1skR74s9AFqeCrDcHPhPssJmoCMZNvkitydsy",
  "key35": "5tej7tLHrQYBoEGMpKMDAkM9RKaRCgwXaP4VLJwFtmBUm2FVzRPEhyfEsUz7Yxjx6g2tm1vP4zkEjpTCrsWoBv7P",
  "key36": "2oDHPxTWfgBSUDf2DiWatrF2TENaH18JMektPvxGUmDNcKAWCC5GKjY7ZBqev5k3zJJJGka8qywLae4rVdAGcw8c",
  "key37": "4a5xRgoYRbLSPN4ZZv4HkQ2nrS4bt6mfpD81G2DWMSqthK3Uo9qmY3FXAceFDiiar1qqpr1ogYtMJLDAX5heuq8U",
  "key38": "5hB6ZDYrkQZUc3kxehdUFKAvZUoNEjoFz3qmXAcFGJwt87CVoajAawYUFQNiQLCvZdMEHk55VW96xsg6RVsFSxy8",
  "key39": "KdNYNvnhEtiAjeUWqnnXXPq3rQJFn7fKHMkkSYp2WrAV7rH84RN1cqRu4hmEcQNGDwFUAAZFsG7cQ5UDb96GaWM",
  "key40": "27LuFFAyPjtgtb4JtoZqruiXjmyiu8zDKYM4HyxyEF4uAGeQC4w7aT1XQSFxTibjN1zc9WmiPsgNsYjyN3wQCo1H",
  "key41": "5kt9b4PEKyPrU4AGoKo3GwbrJ3ikJF6r2NA3S9pgntXztSmqACekDZZNG7gVysbsMDvhEGCsBRn6BYGjvZ5pdBLC",
  "key42": "5zRASZEkQ7VJLpPx2jNrFayGzrt18LhZXxpfrXQm741zGBHGvQUaZbL2NX6Vvf1STsGPvT1gMX4HFQUHCRX5XRQK",
  "key43": "yJpb8vFVBasJYekoQvdvzwiqCWUrm6arS4TCYwezdQm6iiT9cyuNNUTDtUZN7PTZBBGBEVhaJSwmJV9nkvFNRrq",
  "key44": "2VZEb3hkoQfDwYQyKSNuZ51k12MQRS4jwgmagtH7Fuj9TvZt61RF8N6uw6yBLaGR4nudh4m1NrUPs4KqxFj3Ru87",
  "key45": "4vsqcFFvjRrtjCoWr5GiKtBGMMXNwUd9jqsn9VkrujkFULTnEvZGyD1w6vhoDFunHTzFLbXkRuyQUV33Ln6okoM6",
  "key46": "44rgagkeUGQN3ovr72BMFKe7kVSHTw9Y8Fred5tsE225J7WSgyDysqhbUyPqbuaJf2hrNAHzULpTsZL6WUkvp7Fp"
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
