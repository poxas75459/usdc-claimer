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
    "3uG4pudtu6E5PaRtD6W6s6DLfAETQg3oDUYM67HsmtD1y6RmwQXiYgK4buPmrcWAUXgy2gNu3n4gTmMRBngxuF1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nh8bqfm7GCnxMhyFAJ8ug4FmGbbmJ5KVgyY1Ris5DQzA5owgcJnH5ohcEQvRKxJkb7bGqCnHdPz76avqM1YW452",
  "key1": "t8eQxxL1YgVJvdeJMwKwH8RrJj1tSQockr5YsSyzYonxZNzB3RNTiJPT6GXDZjZsXZx7jgSQMAFJ7b8RaSngqxF",
  "key2": "5Doz2yjxZc7gL91p6uWGYtCj71rGDvbPCV3wyMBFJj2P7PgRcX58W7UfdnNaQN21WJLrsGRwFyYTXoZA81fCRhZu",
  "key3": "4d4AKA1GddfwqWvwJmZ5RvdoXg7poA3duoZ2Frn4VbDvDS5YModYP34iBbVeDSqnMKWDuZWThhtfcXsccNSm8B4h",
  "key4": "3Gbn29ZWbaskcj7uZcA9P2K83x7rDpBR8QLmzXaeRdZroPTKKgtz5xRZRV1Yr8K4Pf64X1bSiqpFy1f3H4sZePTz",
  "key5": "2tvqAST8wN7GwAZDCLuQQye7t26NftcUhzfTeRRqHKhafCqwtAVcQxTVVdSih6bxqDYxmdNhMCmUapWDTGYa6ic8",
  "key6": "3Kn6wri9bLYLX2dFKFYLm7Ey3igViZLV11MbyhLVKt8K4GsGxNmfzAZj3r5vnL4p6L54JWPmb7hrhR9BhRWNrGJ",
  "key7": "qZpurh5rwwZVHskZ7JhWMDUqEDQt7F7CK8WEo4kMswJmDt5ppHush5X8XRchLztRLL6ufLKKUrBh3qEPHvRuvv8",
  "key8": "28d5NcZstddKUvumFeer46AbkLEfctdVCaTeEcvC67AtZgSmyz8aSrETSbutkdrEWkW77vgEy5QkghtiJ75r4qvF",
  "key9": "jD2S2X3tN4tYEcvv3qMbpwZ5Er8y37h7mY9c45hhmw6XRpnuLaGkSP7jhwtV2C5SCrcPg4wL63xTNXf7ZmtGw6Y",
  "key10": "Je3qb9TB9vyLoabUAcSn29nGzVbgFpMtqpT3AAZX886La5ZsQGarNLAQjCrNf2kcd9h2qiNWEnjubM3vmXAKckB",
  "key11": "i4cnbRXbtWFzi7hPiU3grtkwTwfk3RZZzCtQAQfrpAW2eR4LjJEYeCsSqx3KxvW4xVGQKbq9YJDuzQrGQefdNjf",
  "key12": "4wohY7jiarFRjaxtL7rJUciXpCB2XtjUCDWv2bdkEsLg7guEsosx6WsJ8cei5fYt7hE67W4iTDA8QYbVdQzm3HNd",
  "key13": "64mbwuAkX3qMacKSGnt6ebDW4QZTiuGGgxszMaTt1vS5pncpoXKQUbauwCWAtZM1cbBsLRSyYPDDeeZPpcJ915Wc",
  "key14": "2C2YZBLNb58ppYdgYuJonK42At4Vea1AoSX943mf47XWzQo8BKkZK92Rdjhx4pEjLHayTwsJm1L29VKJGvq92qNY",
  "key15": "3zWkfz1Cmhsc9va7YWTNHRs4mC6FXmFX8YJguCC7sYZf3hzxnbF9WQWQAyWGzFxA53uw1M7AVdV6QLoZnwrqQsyE",
  "key16": "2DaEZNxCGSQuEGWL6tTAwSvLMnE7ummdQvXCzhX5gbGUhc7YJgVjDcnmw2RToXHscFr83dzbVWGhtwBfEfzd2BYC",
  "key17": "34F87cM2gZhTA6HcU8uaiTgxcoPnEn9P5ZrgtK5fuezYjb14QW2CRzN8sq6PZK34pibKmpANW7o5J3uTUVWGwiTK",
  "key18": "gSEt8XZH8dyi9PdFM81UhbaBbdtvo6efvrk1ZSn2yhrwn2vB34AQyiPsmFn9P1qFj2zNXFTrT5msr7zCc4pVD8S",
  "key19": "4Tn9Pz6CRERg3WZ14Ge1Dzb2yVzm5hv2PgBJ9bgYhB23fcZwz9ES8z3C2bNZDybnDkLqpGZnHDMabwYzWZu1p3oZ",
  "key20": "3JndvXVsRweGMbm4zBz3T2K38J6P5zcYBuKyctFm32z76SvDuyRbomwwZjRW2qdUgfY9HRz3CkC7gX6tUyfj8T8Q",
  "key21": "5qCxcKGrJd7ZMkRXpiYEkmaHfw9pfaDiiUVEgKiJpprijD3P67QZ9TzwQecRnm5oMFz59cRAYu8Qun3faNsaViS6",
  "key22": "C1x9CfSQ3PqS9ymYWMcQywzQu4ahyQ71GLPoLr2eFUbxJewc3bcyz2mDDryynUQYhtNXKZHSBQtfsoUTSH88Wxw",
  "key23": "g4qUi81cbwRtuFtpyHqcxsm22f7EenZjUbKWmctsB8eQAz7qmvdxTHs8eGtNWXoKdPNz1pWXiAGrRBygT3WDEpc",
  "key24": "3wFPCSzLb7dCz6UqhaXhQ4Q93zyX6BNaNhKF4KBKyEgtBpMjiJBmgkAhQipvKwXryTzitDpygzTGPzMpKeghfttr",
  "key25": "P7ET9QfjtwvKnaHf3US1kxwrZRcw6i7p53562BP3iuSoAT6mwNP1rUdTuit7vCJyaKT84GpHJDrsWLy59yWxMM2",
  "key26": "442XfwfaMu5NN6iDdqWasec3PTQDrqEmgyWDxA2PNAmEPh5Zzf9DY7DuZedTC5KYXHQuVqTikQMr2zAgdRSYLE8o",
  "key27": "26Y59D92Y4tTH3zNdDp13vtjMZRKjA42RrWurQ2JV5KAYzrbohigr5F1Cf5NmmKz63Y8kHsekUN9Mihkzr3HegFL",
  "key28": "5upFMhpaDgHXJKUqQxBnYxd3NYzvmHnvYPqPx92pcUCk2BHyja9e4CPDmzpqzrhGhc1MuvHaH1tFQc6s6WGjhBhs",
  "key29": "gxqdeN5kNCgAJFdcvgSPG8csPs4Zksb3cuUSgok7gKoXcgcAP2HCy8mwbCw6UDFUPSbJs9FKNqHDcnZLq114QPd",
  "key30": "ca6CESBXaGM1MqctKKiwcWhyUUcWC1bNDsGnUKbTAqnb6eRTyePFUgymvFAP6tjFvkGJVwbqc2ToPg2EBJVCMk8",
  "key31": "3uZSZp4tEgpccQf5XzZhji2tJ1nrCafhuJf1dEW6ikbmaBug9ZiMsTnGFBEdFnAwkQuQmzLriDGzMgWaUcMui42G",
  "key32": "5EAUynew9nABB4H7g76eY6eDXBNuxHiiUr3DtckTGzzCXxPrtHmGZ21FAboHvt7iRaBmvkiwkerV5HgACC1SGTQN",
  "key33": "61nK7Sm5Mbgfum54HFqWXkdHLHNpjFYxYpaU7pDpfEzNcS6QKcmpozJsg9iRJrWw4pyTkNvH1vCxVPGumH4MGbPN",
  "key34": "5zbbfMGSHhbW74MrHBp7N9A7uoKMfzAzHGZnGGLjoeh9u4GnGaHFYKzCkvM3EWFuSKLgonvTs5QgFUSyPp1z649E",
  "key35": "51b2KwUcnjgfXBKZwA5DBZrTfb1b9KZL1Y3LQ1RDHYeZ5X9fSrBEa7zn2SonZVqErNayh6qL7nRjFvXGMJ9oP9cD",
  "key36": "JR56iDpfroX8BnepFG2tRY35cC4bwGXKogPjBDDKLiBXsYqER4wSrRwmxNwsvjLrmRzdTGmtKjNcghffV9kfwX8",
  "key37": "4yJptc5zkqsy9ZrTYRcDmKfRxfom8dmCFRvsud6jVBWWFs4Jb3D8LYMSEK48Uyi8auPUzT3kZUcxSHE66fhAdC89",
  "key38": "3gdGn6sELRzAQLntrvhrDJBw1xyaZv3iKXrNWQ3GMjV3URiuESnpkRXtaD3nH6WoNgxjwKqGrBPfXKNBQKVERBa9",
  "key39": "2Lvws8EwtcviN9XAQ2CVQm3g7bMAedcAaZnML8CbnP5kHAKwkmjvSKPqNHewvH7hdfxF6yk6Tvuw91qUd1faMzST",
  "key40": "EEKZ19xFqyTLbVRedpTxTVu3HcudBvB4bBvkNjNAVnZ9RSYDmtN5PCfiq48vtyoGmpZoWJH75pr7rfzvWU9RuQf"
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
