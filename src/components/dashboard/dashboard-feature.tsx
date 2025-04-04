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
    "25xyB9gsxA2teA7dTJicKKbmBNSZ3ER3cJbnS9aHDv8x5tH7W2krVM69bFTSztH1PbvM55kp9FTqzzp8UkN12X2S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4inoBdys5sKaF2z4UcopyTpcYm46rX2EcrSGD7NXPqkwvHhLrE6ENNmbszhZaEevS9uL3wvKFnsBhDnt8QBfSqSx",
  "key1": "2h7WbnSb6r3sqbVvMpw6PYhxg9vGZbypsVn8Ddo8Jx1EpedhuwiNjuiQJkcVMuNohWj6byyC3zaJFMMnXaEttkg6",
  "key2": "4JmVw85XTvcWkPnVGWAH2USha76jhVSZEd3zj9gtZfxX21V1dso5CbxZnK872Yi7aKHL8Mj2JCkifreJpGLoswmR",
  "key3": "2bgQmoxzFmAWW3dUh39E34Jq8sBn8wfSun3BPhnz8mLNjE1sF38cooGNfdMnE7NeG6PSRfibWr6AsQRSuPcPfSvb",
  "key4": "3af371Rwf2odXmM9sphCetSHFHNZWHbhBs8F9Uh6a8fLrAvCM51pTJiN7xnE5kQr2Nof2m4QKfndKcc5hktCWYQM",
  "key5": "51iH4fg5rcbHy6SqrbDP86RuBmWYqtPKsa9RUBUnTfSNZTLoCqnUViqaAYybQ9B1m5CbRMUjDqWuQdMMGHqGyHZo",
  "key6": "4ry9unL5pQDNLpwnDw3iLaUVvd6BPucGch6nedYK5V8J5B4rZao6S3ruJYwbdYWEuaaq9VfhLZNLoZQkVCQVaFfu",
  "key7": "5qEW41TFj6MW5braQEooX5wTZbrtgATbJiy9bKrGXKDM4fk9rpZS4G2khZDWmyjzzzg88CPTsMX5iw3a7MxunRr5",
  "key8": "51u5SApWrbPG7ykCqLRsSCUx5Z6PHsKPVkZ5pbNfbuy22QAQjSPwrdQNw4Wq71oegAeFaLdGdzHcYMVTygCg57u6",
  "key9": "5JTHyp3ea5MfcJrZm5qnNc62xtMJQ8mD1hRfrsU5e2RJu2EkZVGwUuwK9wTCfksX1RVLcJmnsxcBgbUkA2QGyEsy",
  "key10": "3K4u7fHwK97Pkt4J5zhvdJVBEMMJD3oV41gWzjicZtAaDyzx8QejaKD7XtpfWLfkXwYMWZzyjyrDgcFm89F42rwo",
  "key11": "38Xd9DaF4TMjUQNfT9xBmFzahY6tFmpmsH6p4C2hJcjfRqbYyWzqAdLzLV9HSdxWpppWkafX7xz7iYMGCvPqkpGf",
  "key12": "28k6j15kcZvHZpQbLGwQUdhAHJqhN2sjUX37d5FkWA2V12miRGx9wZDHLCDWrmvoAzCssdspypF6vYipZETJdeGw",
  "key13": "7K36BzxxidBuPQjxZ66gNCzjyEccSgGURqamq6HzmFwFP6gzr8t9Kng2pwNpJZgYFmng2zredX2RCHpTky3josX",
  "key14": "615HuapPbar5EGoTDhZUWpCw1CAsRqEbvE954AAqJUkYii1Je5KJjF4sAQdwftBbwkBFqb9qGQwffJKTWcjGfYYk",
  "key15": "2Hqb4mBr38SRMDBtkrb7tvDNLCmm9vJJp9h1AtWHGJyoTYFkZdSGLaNE8RZbf5WGN8aZArY6xqY4Cxy9uEfDQ2kB",
  "key16": "5VbzFXedT4pZek9om3cft6dHUBJ5vLqLx8fGj66tM3oURk8fEJSCqVPKGffaAp5dM8UnuLDAfYUYBWsCax6rzzdo",
  "key17": "5RikHT7rVYnjiniJiN8DGFgyee6QJanCyms4GAb1nrSnALhNum6RxHuoofUTDSoLmckUNS4MBfvh3hzjAuyDx4Yj",
  "key18": "3tXNMmS5kp9qfz6AkN7SpBQjWWUg95TJ7cVcXswYAfC2v1zaVojFw2zPvCA75hVqq2PX74X3upDhvaNCDhodx8aT",
  "key19": "2kWj5cA9ojcoJkaW345TJJ7s9ayBSdcoG9797mxBZW9WQKzNSY11DASxDUFvVVhbmvXL2VaRU2Dv8d8tSgctJXa2",
  "key20": "6JgoTBaob3Ct64NrbhSSesL1VNDDZ2LziQ5AmeLuXonrwyyd7pGU3NVSfHTNc6DJWbuNZmh38r7DbVf62eDbfUq",
  "key21": "4kJLjuKea99giuctNfSftanzhys1mkBe2fXRHMV7S2AidKtoPYeSd2AvMEiqgr4kQNrHUjN7xdZCUCia3w46JpVy",
  "key22": "8mwPYTssx5HmP8rtTg8N83XMzSt1mkoeeNxaAub4o2ZwdBKzapfTqfbQwKoNofVBwGbUc3vp9Ao85RArKKLvUuy",
  "key23": "2G92TdTP8iHuSQxDyozyvwsnRsSGaesVUkkiqmfb29yoN8BNMqbzkZBZFCrC3dZe5VUcuuk3CLSSMgWPTfZwtpwH",
  "key24": "5EgFgqSiZ2htH6YHFbBxzAUFfo3V5Z8YZccRPbFHBM3e8qCG6NNGY43tQLUG9t92wKpsTMMFuNNeABBqftX2UNn8",
  "key25": "k49BXNjtAi8t8Xxh8KJsNfKA8KbAPaoWz74Kr6VbygMBJAxerab5N5hmt1jgHdF34ajdvjcUgPx59UL8qDrVUo9",
  "key26": "aU3ECEZLV27XuwYzobLoVZmynLrfjv8BTrFqtnvNMSArSFuQPKapBhEzXBhfoEgAURoncxZYonhnbWiTB1NUAvH",
  "key27": "5uSeQjCNeSmX39fJCqsffuhdofGXUa6LCjbx56sDsHJbiN7V4anfHZ9a6vrt2rh8PGaMUWZp4hTe81GnJLpjfXCp",
  "key28": "VsAd34jwHrPCmzAecqr7e9uYWGswYe4bhthf6Zu33vvkzXxLZwFxd4TmvmX5JXeYFdNwDhQ5urLXiAvn7HmMpFs",
  "key29": "4RtXH9mcFrGLWe4fTKYuuhcyKu5S3sQ3DFTDuDnwm6cP7tMi3MJNxsV3Sw18oVnS7gRnpc8NhXEBXb2Leaw6j8iB",
  "key30": "4ZezfN13vkzjLNjZejZERxbEmryAtnZ8BTJJVQMJmtc2etba6V9kwE2yagLrW8fjHj3DbD37N3b6JCvG8SrYWJNT"
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
