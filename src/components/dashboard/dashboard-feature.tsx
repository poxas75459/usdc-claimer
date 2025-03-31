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
    "HFAUzDT9xYdBADtMY4SVgCDcAwA5be7v7TsU4n5GYCixAifdrZuStfJuwMnttFePS8Py8thKpdskcDp4JNzPDzi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kWdaihvXswvi1Y1XmscPuikbPRprbMRTqrqzQ2ScSAzq9pxnJ6kRqpgGWrDqPjwuStgkUjDUo7Wr5ZzZmpZgrER",
  "key1": "4FNA9qz3pwJZf2wohynbg8VrStVoLLYEg1nH9WcbAuwK4otwdE79hvJVPPP6Zfb2BnGEiavgE8SGUmaszvqUPCWz",
  "key2": "g2omvkogupmhTyRE5H3cg9dqAss8zmQCkAiztyt9F4ttbce6VFya4SVCAyEPpoJzpJxLofib5BrckzujAW9H2Fp",
  "key3": "3YF45erqDLsh1pjcc7zAkzT7Ge6M75koe9EC6doRRTjKeZiZ3LsS1aozHL8pu3An4VzGLDnbcAVFNefHGNQUzqaD",
  "key4": "5omamrbFGkdC7w2qK3fMTQQuGiFQBvbfPYv62Bakj6LWiuZ9n7gHvQaDbhTxgBK2QZVC8HTLMoYdoFsa7p7bh2Ad",
  "key5": "VGvD42LTvnVktgwGkmPAa4XWjJADgwQnDdooUFi1DzeXQNpXNEVBzVuapz2MLufUVk9qdfysynswqhhWeRWCNhr",
  "key6": "5bgcMedXZQvV2DgQuZhn92NtasCgRguVsYNmzmieXbNjkyPVcVqYT2TA4CAdmZaRP79JXoEy1Z9k1VbuCG8pQgXE",
  "key7": "5MgbJk7hjv8kWKD6pqJdsvosCJwEbtKbjX5dYsi5B6iM17w4aB5FKGo2u28YKnfg4qKuzYWwcxemY2QePVKoVG81",
  "key8": "4ZdzCCndYjz4va6m2nS7uwiWAK89ABvmTywy6rXhTT2i31SQ8vgmtTaJ2iw3RJV3iP9N9Dfi4XgFc4k9PqhVLY4F",
  "key9": "5Tr5dCPbH86YYfjCu1UZBs4Nfp6efkKCc3EXvnAt9yZ45zuvWcSnFnuyVZNqyxtMQ6UW1H43wu9QGMg5TZiGqV4t",
  "key10": "4o7H99sumUHnC5dWkUzJ4Tkmvfwbj27rEtpjkRcpsFLeTVGxjzMmmS27SSctUe94w81DGoXR7szDKLGsNYkxG1dA",
  "key11": "vUMAZQJgLW6jSzaAmdJoAQxzFR3gdr2SwFYwLRQNcZ9xCLh6HbFv5939UGMEhn2AVwG1FxrsDNbif2Ba74U9e5i",
  "key12": "2Ao3oi6e3Uq4BhouwsYp9q8SKBUBbKti5AKpUJJGFYwGix5F9aru7ER44JNKMCrSzqmE7iNnaFFraARMmYqK5L9a",
  "key13": "2uF9WKrhvmukiZDY8aNZpkoDfx3ZkZSLku9E5L8JZyjco8v7rtA8bTWHn3TjwoiyD6NimRyNaa99sDBZLy1XqSUx",
  "key14": "2VoyCkk38NhHGdpXWwB3xgQySBPX6oebXL2uNWVttfQKtLGsPJxf2dNYBb21FCYb6b2zE268gxMsGozJtmXPWDGC",
  "key15": "5QgthS3uAVGhL6h6ZJmLY8CinctVQsbw4Ab9nz7pGoey4diXRqkuwksvho3sVdMvYiWqtQMEFoyqWk8W71UCz5JV",
  "key16": "5w4quB8aC9azo8gQfYKHwRL9TkmWWF2DWmFv3Ha9tFDsXsiFGKxhLPSeDqAWAWQBjHdM4joWZatyZUaYKq3HwWLV",
  "key17": "5Mc3RBygkT13UrAi4cUg7sADRuFQ1yASvzenz6myWfFFsWDpuQEoLoF5NH4jaRmPeHnZV9tUL75Kb7ipT4JURsah",
  "key18": "3vBh249S3ZzTxMmNX7MoVUAqPmB5FPRJhApz22jbvJapZeehiceqF65tGmpb1QTYRSrdBvLBGAiGpuz6AkoFbs9n",
  "key19": "5RNuaP3Ba6r6Nr4GvJeEqb6HGtq3hQoR73KThsxPu7GPfwYFWdCBSzathTSk3ESU8GqKUet1snxr1fmVp9KXHr9b",
  "key20": "5HJVTv7NQFFraj5NcJSSHFscQy9DP51nt4h5RBujM8Ra4tKsegW6w3bHGzEhnzuQ6fa9idHYBFGMdvbszWJEq4Sr",
  "key21": "5khjjMQQeSoiL9TKcNTokqCoCdWq7nXDNSt5fZkvdMBuhYGoHM5MojAbQhC3y64skNFYcHXodgfB9Zcixo2ApNQE",
  "key22": "3yPBooKoY7NjwcwePQcpUco7T9s6YpGLstEpSFiNBAwEYGNMSgnaC9RzNcdehcyUGJzkLRGwGMXJZ2t4tJAVNRwf",
  "key23": "25SNmKsVTCpCqbnm1o6PYEC2cHLqA8eLNGmnwc65yGJmfYJiWL6frtmkHtjY2NErr8jzS6vgt9DhLG7jWVvt4bPm",
  "key24": "3PQqSThDUdXU7kmK1GEaBJHSrZLEHGyBuNxYURAMtBuzCMUf2BJsJpGMTSVQvR544hmyJ9fizTvvg1tDtsZ8ywmN",
  "key25": "3FBSkXor2aVisgFyVCUMUMS46RYp9JcFNAFtATuxsBwRX634NdeK8oUpipio58fpGzunyfs293btd44cqPHcXLdD",
  "key26": "2HXnbSTJPzG4u7N2y9od32p8f7cSCpFeFmTRmfeswTiuA1FqvBP5MdzAdBuxQHiBqJp3G8LtsoyrbGsrGo5WYSAD",
  "key27": "5iZw5fTPB8qVDT89ZUng8kTRfFnbW5kCmYS5Ws7kKv5WMz9cMwdGpWJqEXjWqKHfGrYHW2eR7TwKMgDP8P6bRd4W",
  "key28": "txpC8fkM5yCJ9ZKrv14xcYGAnFYkVfNkVbSMkA3B7YXAJzLVkmmAPxiPGufKYZK63bHXTMZxyYBtNiuG9FEf2aq",
  "key29": "4sUXmFLVq6VHj4Gu4w3Vh9KhJZg8PxfNEgKJQienym5CgzTL8pirTtCieHQpjXDUjpthx93DTPsA1bH7CBoFnLbk",
  "key30": "o1aKaYRJxFWtxiSLkVK6naZHHLBAoD8ZCsMZM8dbt5QwUjMTYNmMDfHK4LgVyfeNbuhiuNtWN71rcpqRRw5mx1f",
  "key31": "2ygA6rUTdeMjKXyKUbSCTBjH1BwZ2G1Kg4t4syseSjYx46ADfF3WF5a4JagyjYbsudu4QW6r4u8Q4jJD5K8KT4Dt",
  "key32": "48RQybdYTRoxXmPUQAFAp7rVfqREfuhqj6E2xNACZRbJSngbNfQ37fWuWbw1RHebRzT4FXzoHbtEPNSQrRUTN8Xg",
  "key33": "4dgDFwdwHLxiDiJSz5Q159kDHfdfxbkgA2YWX7oT78P365wZHrJjMvQRdpqKTrTKZ9m7ucxzsfWEwdWMdUMhR5Sm",
  "key34": "4kSpc7ADQjNANJ1xVzbrdN6ewGFDcD8ViD4LerMPo69SwZmpgrHfEkvaoDQ4HsFvdELdZh1bcpi1Fa6nmUdn5Gkv",
  "key35": "5NX98ThgYFExjhwCzYGqxcx8niXDwpy3yQ9NAs8fkZdMWJL9WJQxUK9YYavvXqVDt2CgES83Ewp1ssKN8Yy1VJMZ",
  "key36": "3RMWBLCapBmBuZf61xpz4RhKZxn6zyd6zAD7De7iQsmM28rN81gsS29yifr5Pk7pmasBsJEak22XaK2odQgd2fFr",
  "key37": "dGMSFMvS1ArTQPmAPr1M1uGhUBw2qPhkgeAvmSNbUn7ThTSHTEGxza8PQokxvwjkhMtJVxpiV7nATBqUmvm21mv",
  "key38": "2UBhQZmThQNZPWfGifnsvbcJd1y5ZXvymMqtVmiwwKuE88qwudv8yPe2dGDJ7HTrmc9eiSzvVwY1GmzmoSQyDxRY",
  "key39": "34LZNu8SLQK16JgRNi8mKUYDLFJmmgnAht81yt6bLxRoNuhcN9H5yNhg3TSkVhDqtuJJAnpwFWsawRgjSnebSdWF",
  "key40": "5gFJnNCcRcT5EVzXou1CUBEQKKaa6QQnBmcu8sFNxYCH3hUvf4v2sUiJHyJeZUiGg3juzJPGu14cHb21UEmk7obV",
  "key41": "211JokRMToscNxaq8t7K8ttyh1LYWPYYiLmhDCe7PLp72852ED5keqJZ7kEsMYjyWRmopyQr47L8FXyHNdQDr3nB",
  "key42": "591Vb4okPkGyNEu1CJHLcird3fpabPm6gcVNCYWAku8xXgyYv9qYjGu9itM4NNnQRVA6y3mUBYV6PsMTn3ZHiWfQ",
  "key43": "y1sfn8P76ZVadcjG5WMZR11fZ3UQy9YswmHvNLC35f3i3E9xnjE44BfDqksiCSmkUgPd3s5ixJeGyPsUzbBPEpn",
  "key44": "4faz39aQZqzeKUSkjU5jLemjZrJkoG8jNjP8PnsB3WJAHjh9acBaYS1ULNu5vkmhDQGnyMGyX2tyUS3NMurVFFfK",
  "key45": "3PsYjUkcpLhAu4MxzFaiB4kh1zy1R7Kqu3XmxuqWwu4vdMnyVPdoFz7UBukgSka4rwpX9o7fGMZMGBTaqJfFCQdw",
  "key46": "4eKawSCU2riBrHzByTqMQgUWkEPF3GqpGAuVdpFEn9xjrq7TPHqgjK4ewT7NktfCfNpHfA7v7wn9mJJfWvWT8Ch3",
  "key47": "5Jf9o4pdnSpCtfs4cqxPhpjraPgmVv1y9FmP7oqt2pYvQ8AAAFK9n9jKuR5vHVsiXUEqvUdedbkMjsSnUN6bz8Y5",
  "key48": "MUGCFHJuM7PFRyXLTBY89Qaxz6Vsqxm8CZjiBP2dvY3fXLKszHAVpqNWfcebeQJpAnsk5sqXoAt3D5Rww8aqHb2"
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
