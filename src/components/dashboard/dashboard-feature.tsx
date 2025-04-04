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
    "216JphozFyBXDZYUVbYEG2byZGYohPegAkHLgSvUpubY8EbLUG4Le6g59PzjovbGQM5aozPMk7VtwfyKrFFX2BoD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rQRRSfLMNdZ9BYTJKAmpooMc7zNbmPdhgDNJ4yt5eQ8GUWGV8rXqpow2ssmtxYmZNGSkEGogssaWTFAgQpXdCTq",
  "key1": "66W4VQTvyUiUt1oGXw1Mv8aGpATPUfBkr28aXSL5wcAowRe2bnu5TfJmCvBNuwSc6SAo9nUam3mHtCArCzDGctJG",
  "key2": "5G3JFwN8xJGiXwfqMpaw81gD4hqpxEHiFWHsBWLWp2cuzdubrx9jqvPS9ACJJq8JEkBtaPMevh2HQJqmA8XG6UQ8",
  "key3": "T8JtBvFHKM5iGZ3tpNGumFtZdVqxwTRvKVVnJFLCq5GYETgauYjJYNt9Qaxf8pQGpu7aiRqRabFrNCPUuF5KAhf",
  "key4": "r2HQp1LaWF5oEcYzYi2vL2vS21h2TEGhLBrjarydHQRV9oKx1Xn7biaFP6WjTCYsWqBd6RUQ2g9W9Z1kcW7wApU",
  "key5": "2MW9eM624e85CCYt7taYkNvggCdS2v7ey7MB9LEYjrjTcieDQLyoqM1omwiDLRxFysccizhvnEvh7bj9bRN3c2wg",
  "key6": "mcweeB8EzZyXD2qnXcCu86Ku2pEYPJ5aQzSZrfUPkfZ5Upci6MwXwMAGv3DMYAhN1nuoHCrSeVW66en6mYkEBfM",
  "key7": "3qpuCoPYtwiTwvuco4nFBvty92EHEyAWMVtV7vNF1qmmrtQc7keZotcy1zo6jCdQnvpXMfBhK6siqA1H89c2EWnK",
  "key8": "4x5up1s6PNfHeNXYRTTzcHWujKzyQE7N3WwJTNcxEkELWCcR2xpckxWP8TviPzvqV9rfWBu9UhPAwwUZM18vNSRD",
  "key9": "5AVdxu5728xVMS8jUw8cNDnZeshScbFksiCJD2TiQqwqUoe4VzvhJ3y1X4YFmNumuX6oTkuZeJpSxbv6YmfjEcM2",
  "key10": "4T8q45syk2SRKWpSkNSNEwurPv8LVFAkMvrQKuQqZRLR7hvHjFwyvioUu96T2bbCSnWwZJ4rXYshjviZBVYxEmPq",
  "key11": "8E4Yu2a22Zh4MnakxoHzAhGoMak7hKqmeq1mksdE8Z5Y68ZcUwMnGJC8P45gaQQ59t54z7i5fyy3JX7Uyjz2uKV",
  "key12": "5BZHKKLbBd4CtUosqajLxkmKSKyk6GVQbiHA6jzKWNCZWj8FMphsHJKiZVjxJd4KiHhm1wb2Vf5JPHBm5QW6xSjQ",
  "key13": "4NgGBfBaPnHMoqQtgKNAf7HCbvX43a1dqEaC2QxPpDmgXW1tudxczDvmFt1Q5ccTxHB8wwwfnUkzibAyfuAEU1Sf",
  "key14": "2m1Tn6BsUKqpoGGQqKQ6ptsMZg9HQStqiUrm9FS3uSYAGx6mSzoLzoK2hmGm7VSgVetUne8m9dRwkDT9ZbRvx4yW",
  "key15": "5hnT6xp478racZqaWNcDwstYoL3LwxA4qjPLbbwDfVPPFdzi8NvnHqUWuPMGJvaizUnF2tBcB1uch3zt4Mt7Ahbg",
  "key16": "5JezjyWYwXNEYyPz9mkmN7399BB2U5bpSro9LPxQWNBdBhL2L5a7q5Sg6Cr3L5YzbZK9RdFcCW2iwp1A2T41nUga",
  "key17": "2ziQoM2iC8mDV65SscrLLekzAhQMvhY7iVvxodwRsharxQYC2niKJayyTkMg3jQt8ps5xV9E3vDLXeK4J9qPmFuW",
  "key18": "4djRgh2yCGqvy3HU1HAXPf5fhVfpzJqhkKjkFggwhQgw9UvGBHo8Cnei9AS4wa4UsDLTu8dYFnYi2vGiiG4kVgyv",
  "key19": "FoVagw4msH7brqsKmAgheLiPq7wrz7h35e4V265448WWMUTGrcUP88AAKmZdnmkdtH4LhLmc8KUyArn6gmDHk9Z",
  "key20": "4wUr2wtDAwNiKy263Tpy8F6pgcGFP5KFXn1YZHw8GwJLTFvrFq7SeDY2hnmtU5zRDuNBuzafphfVAZs4eQHVyQcx",
  "key21": "rLdkNxarag7ytpiSm3VyK8dtH1UzpDrRXVYvqe6FhNMgAQmqqrQQTfAwiabzxebHydqdCXpUqWCCkuoH8LSjHNM",
  "key22": "RajjLjthXHvXGnnhvFGjMuXq9CdFUV8k62acANdqXGTskY7v3W3JAW6DFNX9yvWEcFiXQs5Yiqr8AqCBtG6gdUi",
  "key23": "2Cyz61Lgw6Eevq5aTCiUE7EHoiQX16iZ6RZnfrANWhKFsHCeRdBhutkFUJ34PjUq5wM61eGynkpEFuvmdGsuUJ9F",
  "key24": "L9G3wEMGcgHTdAZgxycBJA6XX8Le5wDZQ4BfCGcstVSE2VkSEhmH8zyRcabUNyocoxeyLgSiSc8YY5C67ou88mL",
  "key25": "2PP8a8Gyyx8nfJKwp3b6zZ9qej5nTp2MoB3QScogaWhzx3Ve3CdkQaoGz5wHuqrmZ1UqEtJrgfFweC58LRWLzvz9",
  "key26": "5qHjJUeLKaPk5tfXUuzDefQu1VKvWy3gZpNUopuk7t6b8WkrtAtwsnaLH3foDinnQWyWQktqFz3BzVanC9PPSjFR",
  "key27": "4Qg5tGH8Y3kd4z7Ckx8KKRsUg8CmdJ3VZVT3pj6JiRXPHHXthXanq5BQwWcp5DDyZz7KXV52qF495wgq4PjJTAqk",
  "key28": "5gW6W5psxV1Ju25i2jtBQK8Rfxnzbr1CD4Xx9s87W7FcpPbzruMvDawrWYKn2ZrQd8Mmun6PbppNEW8nmx8AqL6e",
  "key29": "4dzYPkR2z8cF8ZXhgS4x8TpX8Q7NtcABXNUej5feHU7BmRrUziRPh2U3C8xKHtRc8nHiTbLMjiPR4W471iFP5AsZ",
  "key30": "2qekX58GCpExp3NaSYTA5rnFQKy3Sh2T395SG8uKzNSWFGbcovHfbVX5vK2waiGKzr8p616N2nYSVbD3ix4Vm7bw",
  "key31": "3iU8bxNjif5Yf7TjM5MLBMWDJaiv95LYd7mRssEbGgAG5rAHBe6MFeSpTUU1yNuRj231aU7Hd4F2E9k1HR3Kg9Df",
  "key32": "2rLnYQnuTqQm2k4E7ufWffcA8D1bsyFtZb5RHPTRH8TJHcJzqyG87Jreiy5nHnop9jSByN4spcXw2aG8o515BSK1",
  "key33": "5AuL9uoRBVjhpS52CU4pwSENcriwhn16DaNMQSbaAgLW54U2N515WE1JPJmin9fSV8BqGFnFkrEoxxL5VyXUmxvp",
  "key34": "5G1TCQu4jWUvzUf8FdgVq2fGmkAmnvA11Mfa5o4PseXagGjUbM8QrniKSUwJva2tPcBzCNy4BCYVx6adp9BL2kMD",
  "key35": "VYMEVRKE27g3qEXnWHG2akuTcQwiJFa95DQA6oxfTck1ZayEGx379E6o7J5VjwNgCpStpBgmbhsn2FKuBAVyGr6",
  "key36": "21t1ekV8ujMaFCuvFwzWgqxxPtsbmcTvV7U677C6KJc9o9fp8LcmWQY1wGNPAvo8pfZbd9Mz3kiNunV4PymF6mBp",
  "key37": "49f7MSnvG5oNPMZBW5cD9uf8dgHuLQrYENdmbnZzRcyURybHpqSpKgWGXiJ2drpeqoFieB8MM2yuUov8GFyfcHzF",
  "key38": "4Hx47bgNnkCfr8jpDrSARQjkSFPa4yPoT2kaFjvShBgUhsr1LVzcMWcTEbGhN36uUjkYgs6h8ry2afmKZSmKQM3B",
  "key39": "5PATf4HDqk7Xp3xKCfk8MfeDciztRXb3Nb7tq1oLXpvzdWSAPEVsQ4kKPUG7yuDreirDVWEBQwo4mqdR4YBqFrtW",
  "key40": "46oGU68heSSh66hPJ5kfTDpZBvongWrc8EzLqVQNxWVwuNyZRqVZkWddhZnyaGMPtmKBEGq22jKP9MXgUY3Jz9ci",
  "key41": "3m29wF2vV7gLqwBRaVCD5k8q8xZsh3PuJhs23PbSwvqGQXYE69Gxgu9gWuS86SLWTtv4iZtCnpf4uK5otQ5gbk6q",
  "key42": "65wUBhcfWZhyCbWGaEQqQ7whhEKVwnM4taFSSiNTb5ZRw9j5SrPcENML2bUPwR4nANY9CFv99sfmt2GM7bQL2wYZ",
  "key43": "3sVG3hxCGePt2uShMm3Gjxt9sBtKntDWPR1uhH1Pf8gxA4VQkAoGHLVetHFyczndauJUksnDWPdMNtiDqUFydVXG",
  "key44": "5zjTADy4MopSPDD4FAq9HZsyTHcLJrLm2bxiC11vtDVyg465AAKEwZUV8a6C13FR3xQK7NzyMfTChzdHPhfGAGxK"
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
