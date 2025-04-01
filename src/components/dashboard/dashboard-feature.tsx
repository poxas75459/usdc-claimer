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
    "JYsug1pDnHhLg4iKvbtG6aW3fqUo7QeWNPnzmVk2NseQVTWYsqRaQbfuGJiEwkYfKZfrHKfSNYHk1Rq5C6D6YzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S6U49FZTbzdLnU5dR6BEDuQfSwLFjeiM9VQy1VxiaSpGrkPpUKaeda6feGHDs73msQ6uhSjmVdbHP9VJqxaQwAy",
  "key1": "5eDzXWbzASz1pGsh12f9MtbGUs2NAM7b6aixn8s3K2AyXLcstiBSKCRAJaJSVyR1fXUFuuR1AGRBa5AC6gZoGnvE",
  "key2": "5pRqP2w4uYeEeuqEXgDS99fMFdoks6jgiY1MorMmdvsPbgb6kgAGNAVDM4yHNpS5u1ajwcBi65Pb9wvjMGaEte1A",
  "key3": "5cWAMFwxcDnAyES3ATjEnkBE3zj1kT5auour7R26TLrgp4i52qDaKzaQdL6KAkL6FzEtfiNdYEU6KnWtNR3ZAJKL",
  "key4": "2PETYQ77xGubWSCZRszC5pSjvYDZrs3VqDRWA1QvnkjJfsYGPWzLDFvNX5uo1odUcv9ictjw3gYModecw3STCT9p",
  "key5": "TPKMH8PksyLeFLATgFs4m9MDb9mbY1NG26KcRRekkbaQVdo42c8UB9Wqz4tGFzA7DHGPBBevsCyMCPcuab3aKy8",
  "key6": "3bqffraxZ3e1vz6k3XZxcLGuxWAWZF9XL9Xdo5AfszgeCTtKHaKjxUWCxDWUQPcL4zrgzGEwjXZt5mjfwGvnHisd",
  "key7": "3d6ezVU9qNkpVdMDQk8iLp4xuf5uoY81KQHa3BGCSraaTQAzLW5AdaDwjBbi6e4MW3MKzeqfytwJQruCwekxJjmj",
  "key8": "2e2KMt8UCHs5enkXtn8ukR293HyaFhBUJgWhcDtg8KNKepPSbM9eDbh7C6KM5VRCjLQGLe5h9nwRpiLa272ckzU2",
  "key9": "5KRB228R9gDFMnmd37PDbTYpyJf5BW5wk8DNYHg1uunKMXbXke3TPEgQjc1Qf9CKc7UxH4HMU4MLet3XgoCBpBZD",
  "key10": "41sz6caGs7maGtpGta2GDE1FUgX5iLHc2uzBUpnNGe6JrCGbZkXDu2tdd7GcjGckTq8q9R6D694PEEmiQrMFKz9X",
  "key11": "32LX78Jp8tngfhZdAXAE1QtRWs8P1Pbe9bC1RWWdYE8EwoXtvXpfhWdD5wA1Uc1m5Wwy7K3WC1iWucTtXigBtWfG",
  "key12": "3hx1kVA8wV27FbMWnGJUmJLYaKaTUgaUig2eSC64bQCWUy3iTMyy7bYpRdNMrPGFr4eYCPqTAxX9eQRZsWa42Smm",
  "key13": "3TDX1F3zdx94Q6271xYgXrcE7zebgFwzu8UuaK9arnEpLNkwJFDpdgTc667Hbbb57hJzpdcxKpa61SqXX96P9SZV",
  "key14": "4oAik7GHH4TZWcog9WLWGURJcbCVAdnR8yM8XbAh4g1y5jACznupzMrkjeiZRbEDSAGzNwdJSvEEQeXt7rX8aJWa",
  "key15": "2LuFfwBJvKJaHioreA9mSkY7dMYZTVg4v9H2HDqxwKX7FoCjB4CxkwZXwJxvrYZsevKQuQV3k85rqgtRJY19sbYx",
  "key16": "EUZaxCJrVxJixkBQMx7odwEsHXzJ7ehRMsscGiVhKroLV5x8oxhzgD4vzDnpo3XAWpVomDPngpMuPqYSFySQiuy",
  "key17": "3xxtoYdRkmytytETzKc3hMPnKpGPnXtMQsUrowKgJQpb45JExgcxeCpGF3PMBUHAegoFGUuxRHiw4oe4j8yDbt6w",
  "key18": "kGwPQpwLhVfeuGy6QPqiAwUVP9hyzxurSr1FNY6f3gJ1cyKEhB6kGbxeznNvsAfu1X3Mo62TCJVhuwxo2k1KMEc",
  "key19": "3fuJukXhn89JnhBEk7Yhhkt23YSbJph2bJMSD1iEJ7n96FtxkKru12PsFNH3VeepsCke9nFRHwdthZC2qvfWGtDU",
  "key20": "2K7AWMAZ6c41K7tDKw4abiZhvbWhL6RHE2eKFFfB3vKrEGqBG31kZLA2qE8cPj41KSWjUUWtyQYacn1vLBXgE7dB",
  "key21": "3ddw27CGyv3AXhCGnSpmfeTRGEK3X1hUXd68PAw27rmcDbB3eYSB8KzUij5tKkdwCah3YXPgmjwibMGPtV9B1Huh",
  "key22": "uNan1Yom2M5VAqJNasyFNzMgGndRsWsXcvedUJMiR1N1USfbZieqkUPXFDLEW5DcxNvZ2tt2rLttwwnH5qqehiG",
  "key23": "4WtCRpX2fr3uaHbC1CDj74xovD4F7e2diR6oP4e8ogRviKwJ4mC3x49cBBpYpWByAL1XeyXQw1gUdkxXj7yG44rK",
  "key24": "61oduwfFf5rQZUnBqZde4N8qJ4KQ4FYa7W6WNRc7JUe7hwU62w18Rogww5Xh2wZWLWeQowXnfQGiFeaND9GSW3pg",
  "key25": "4RrNGJBRCDm89tDcfpvGoctsmRSUpZ3uXrzcDqgaVJUhRAJwtQXsEN6i5Z4R6t56w6W3oFVNGvTvsp1SdkF1BmFj",
  "key26": "4pWHXpJN4eL8GkyCusipK5i1gLRjTgcd9fjS2TPX7us7MuGJgPgENiTtiZPH7oY2h9U6b2T9A7sb442zR8CjtjSr",
  "key27": "4y9nroQiXXDogTv6VBAeCqjAhqzfxDwRvnCes7pM4NWKD4YdRUpQpkK6dBHQFuFbrjP6XpZ9dwWtMYhSXCJfu7h9",
  "key28": "5UpidcWdYXK2GZPteX34Yruamw7mz5W9fUUg1Lx63XB8HhoKu8RtBALUmgGbypdd7CmtBzcWsERbV4KRG9NfJ24y",
  "key29": "373N5KyfB9cAYhryb3beU61Qgc48ZkbFRwDVvVhmS4UNT88VbTteSrFtSB4z9iDzjvTUbVW8QWCvWQXWhaqLDKPE",
  "key30": "24KqXJimPhjiEALexW4jkvcZ84XGGVsp3DtKvRFkSbWkhUy5DK2KiosKuHYNTubtgav2Nrq8BbMX5RvqzFSFJaqB",
  "key31": "3K8B8VjRequYxPLYuefozXCRTrF7C6WjUfdU9ksPZYE9vWAWxEgDHRnMQdGbhBe1FAroWGWjfXV5DHYkY8PcH33r",
  "key32": "2zo5eFXYvHm6LBgC61U5q2w6nt4j4rNg6PxMz9mJMaorka5QtgbQUZspnc7nXa682ML6UUzCToVpXyN8a85k8cyf",
  "key33": "34xY9jLupZWMQcvfvozsrjDQ9VThyZk5FNGgBYLr4EvjSbJHh6au1wKTxAFeUGcmGbYwdcS2Yfm3P4ELCi6MsxZA",
  "key34": "5CMmjiP4MxLqx3AwjVKcFziD1QKqBYfStthzpQn9pemKwN54pUC5uURAYP1b4JsoxUMkTgNXvJDgBkgcHvCgCNGF",
  "key35": "3Kmcjh2295CLvDv7TPFdgZhEbFf3FrBfskdhsf6a5xjNWMCo9QUWPsTgKJmosouSeVZbxwFRBjwjkk72YAQC6sBb",
  "key36": "tdoLCeiuVM4RX8ruWL8nvcEAErastRa8gerX3gdofoziREwzTYuABEoop2jxzLNDFzqBWFBA1GUCikZLMypXJx4",
  "key37": "4SoZA6VZwovkGSSApwp2ZoTDTZJSnkwVza3DWyuMxxiB6kfNhXgzE8C9pJMSmkHG7RHLacmQd6Qkzp7BKggKp5ar",
  "key38": "EFZXfsmycySzMmhx4KZLDthAzKKKCjLqwomqbzvtEwKqJbXahQatiGkEnGc2FkJtSjrYtTNR9iMiV2kviN8Jbg9",
  "key39": "3yWKRqmVmUmk6fcka5YWmMiJLiny1FSucSp6buFoiLT1HJdXCRVC6BRMUSr8Jw4LForhDFCqCREucj4ZrFvpaQw6"
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
