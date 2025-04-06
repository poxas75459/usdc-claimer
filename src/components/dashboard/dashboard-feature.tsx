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
    "2XvkHVzbAwv3gJXmCb84BaM4L2aACi3MTkZYFZ2YrTE46wxgJyErW6YUESyNEKDkDJqiwSqNmKNNCV2QuJbDPjVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53uzkjd9ZP3ANgh1T7ZYWt2RWgB7nSdjht1QzYYJFbwrrf8jLUQLjGixNtgGM2ME8qQSmnH1CNgEAZapvhCB5s9W",
  "key1": "2deW1CQK3bZ2DQSvvgc9mdxvzsaDg5mnbRB1f561W7DHRJQcQcZWKznXwQK9uE1L5JQQRSxPsb4norAx5BjCKZDb",
  "key2": "2zmSWppgzs6QVfmnH5jE2GfUaehrAtW7CKmyZZ8dXmTi7EvW7i6RCwJTW8mPjqeBBhJnhjak8XJjo9zbb1BjPYPa",
  "key3": "4qaKWZtcWjHFR8YNSWwU4GKAgqDZm8HYaNF4Uh9NDeW5RShuYHKuu8UQ1j59662mCArkCrTN7WqSPkbXATfa7f3n",
  "key4": "28A8aJP61jY1xryL9Hu3kXMv1R11c4gugA17UxRB3jvBDXHJwh8N1toyJVuSTxT4BYsaHJTezjmi4S5S5ahWp8vo",
  "key5": "2Qc2i8jbMt9zSb698Wwwsd1hwuckD161L6o5WfK6wRy1H27igb3dKTBC2z18FzSNqqUQ5qrDfmP8azZfkGpjrTsk",
  "key6": "66fFFGoRQ9AQZtf8woYQhdeGmBfjq36UvSZkXxK2gYY2vrwhPT1U5hyyaD69T8CJru9eioZotkY8S96DBSwLNN5M",
  "key7": "iUH6GgUDX4jQJPfPqDBYriFoAhKVTacpjpE6m5kSKmwfBPPqBLbSUBfiKKLJrncMgxaHNr5MYFdKuKgzusDGgvD",
  "key8": "5T5P39dCqVfGD7whP9qptLMrQAZisv12HG85kXAa99xkzhL4QiUXPz6gSbFPRQqVcd87kb1birJ4AsFEBUKTmR1N",
  "key9": "81nVWU1iFSbjmtb5TtDjKzy4mXSCMVeGWnWU2LuK1vy1XxajUW68SHn1TfihRZvvAdeVbGZB213Ka5mz1Mx3tBX",
  "key10": "4Tjch3sKpukpkT6PXAksv8mqQLtQRkZdq5mRMyoGNvm3XNHA2rkeZhJdcrFEKNo5DvZ2rgv3YQnsAAQi2HiioiMU",
  "key11": "44c2DBcutmWATiWetB8TJMmLoej9QyiErjv68YqrtXkh3VEfNnCyfqtBi5T94VBFPLqDaL1q16z3pQ1U9jnkmXkN",
  "key12": "ZrEVRpCWRLPD81AaKkKcaokDR4WVrfBsibxbuySTJe5CYzuEbNcjkkzDhvrsSEYxRMWfZhDc8GVq3fCdMrydtCw",
  "key13": "3mBxvnvbasWV4FDeTn3pviiUL7foCCvtYnkHd35WLoufxqjybXWGwKHNLVUctRyBaoSNSptUPCVhMj1bTr4bEdqK",
  "key14": "3yvhxnkbkVBCetJDemvmym918UCMb7oRdwVbxcxSHY7dPz4Z66dqjut4Fn1Lw3bxMXpz3AFA7ribKun8ZGE3uynp",
  "key15": "2qkc8CawJvPDSKG73L6tk61fQvnFyZU5JSNVdY4dxUQ3QK9T2fzDN5EijBg1NnECTZaUNL3nf8wgDBPSv2xXjfzM",
  "key16": "5HZUBrGYremSWfe7j7VCaC9FoCho1umcUtqKMyrfJ81eG5rkJNKHd9dkVFc8ByXZxzSfnn4Twvs25u98XJq7m8qk",
  "key17": "3MT5wzGq6aR5AosWxq1oBz4mfwhTWxaY4fBhZatKmWa9EoQi8rGurDPARcLKDiSejUqahkgeSkTGK5M3NAJ63Tas",
  "key18": "aLQAnvSHSgVX21vrFbhNQRvZ4YcaPvtMGFGNT8miNucWz1CAmZWSp5tNkWTEi7FVt4Y5P9t9V1DeB6fmK518CpU",
  "key19": "jMQRcEBLLcovwigoDB4r1ALyp5uULgB9ecvPso9srrpkqg6tJC11PmmswVsBnNnCbzSAGJYe7VS1dHnAwcXMgt8",
  "key20": "4urupxMeEyehYTaznjrSommTwTzpH9PJKCrnmFnnLmEMjLjhLLdvgQprGp9Yf9kKYRv66HaMjwB19YHxL1h7n2vK",
  "key21": "5drjZGDxXEXuUFXscuMjNeBoY4cTjj2ro1JswcuEMSxcKtPYHaQS45KAcN2XHVWjuGbZZxzVkMNiTd7r3QWsn9tk",
  "key22": "gLecrwv2Ni9LSc3GQAmirn4Ns7pTx1S2zs9MtDK44rGYGHE9s94BfWPufMWxMjUHxmwn3zPY9cnc6P1wsiWjDsD",
  "key23": "5uHZBbYfMeSKgR2REMZXVQsuMB59QyXsAHgnGvhs3rw3Zs47UwAZRQqftvCSHWjL2hDwzmK21Miyn3D6xeXoAMC8",
  "key24": "3j1PcyyhmQBpCY9f8VumrVo2iDGsT15wYsDSFBxTBqx8r4H95xjQk4fJU1hLVemJ3EqDXWmBkqL9MoCohX7dL8Ph",
  "key25": "2WSZeCVBEQHoPvkc2hjfbgDGB9Z3R2NWvGZ96mQ7kRt6NogCkXdwtBgV9URpBajLVKxXjnY3NFc3YKtpKZBUPGdT",
  "key26": "4reWPGy3FbgfRdPS2G6iwziQA7z5Zy4ykpVKMd5PSbqVtMratJAPgjqkdssy23Fnz7ZLGiUMWruhjNF26NjFoUTE",
  "key27": "3avkxvqMMs5BV495TjkHZKBY1Xqf9FsiYLLnQuTmrA7crMd2Bu3Eq7Kvu2joi6e21GccgA6EAn7wLoaSeWVYXQBY",
  "key28": "5UVJ61oyBTwF3uuJSgG6ddcZXXyWuSsjtQDDTXSzZ7vnTebh18bfd3coxfJwpMps5V7BVTWZ8LLFGfg755GoXVtE",
  "key29": "ThWG5LkQRefxNSMSFQRJZUJqnmSnfehMLnjcA9gRL5L2L25wEAXMuUeZXieLPWPHEBkYQR3fYnVXBga8yCM3XY3",
  "key30": "3EnZmDQUdKQj2mqWZP7SFz3PTV6GxgTfskFE7DesJgoST4mfzvf4eKFBgo1toJqN6c68DesfMwFUG37WkK91vqN7",
  "key31": "2FK9NzfbADdzHvjaKGLVuT98znhjjqogE1wmnZW43MQ7jb8aYJrxFGkSF4yKn8Ckeb1sKqKjz8XaUzyE677T2aDu",
  "key32": "669S9aqLy4F4nJb2vTpGD4o55QSxU2pyoabmdgRawi64ZAL6iZDVPJ6M8dfMNgiuCPosXefe5LJdugiWGyykfhzo",
  "key33": "5qeyGenPKX2Kx5GxLQyifkMkdkDgUGyEimywQ7JMs75EUN925VKKGSce9D8giAiTMXo4xnGZ6bFYAv83P5oDTrcd",
  "key34": "5NJrxYej4Ciaj3DULnF2ZWVEd4QS5gtTHi3QKmUa69dcZiTF1SgDMTPepo5NB9ctaLYvzH8weaBfuWhczheAyb8M",
  "key35": "61f5c4CTNnvq1kvBqg1qFiqYTvDSP7csgiyuEPzmZsTo7ihTiFb1DJdmk2VWTyZHRJw59dwLH2Nm9BzPWTYjFGKz",
  "key36": "5PaGBNYtrbeCtNoFRc969mAXNzdtsmgXYGn5asgHisfCzTTP7Jr6Anf2tAmzTnaNnCFWmYFTAgXrRGmhCvtuNHsU",
  "key37": "43GPcDW3zQc1KR5P7gzsfL8MV68pUPz7MRt7MNWReLBJbTEzYtQMQKy1MmozrVhJcheCLXhgNwKfWKfYYaHCvga2",
  "key38": "38ez9KJ3nmBvkBi8fJW2qgnpz9T3ne5R9F6GfE4ni2qa8hLb2asLqmcDaXiUj4WDpYLtgZk1xxYo7LREptGUYRjV",
  "key39": "4tHSp5KHaQBfQE4YyQvWBBzNMZZyNvM2jqvcvaNvfyXaEFB3FfTs9ztbPyrVKz5Yt6STjAgRYLZxQAZRaqRykhsW",
  "key40": "5sH9z87onH2MHR4Hq3B9z1YfCv9QBi26H94Sq8LfYoWzBqZNBydq91JE6WFzHDHrjWvG9giRegRF1kgNuPZPKTmv",
  "key41": "2DTHuRBPbSUUaPi8Meksviu6EErT9g5R5GMjsBQu6PePrj8M1epMkBJmPkCEU5vQ25F4BP6EToWzdGGoC2PFk6s1",
  "key42": "3iK5cE54pmRU7sSjp7otuYLWthuxsob5bGCJigW8Sp7Pkczs7comakz4V3CjkG95RqR2AJJwe5YQy3GCJp4BExnw",
  "key43": "NNyARxzjcCvhomuFQPXtuLDMFPPvF8gTjv6PzLM9NsfJYDQa7GWk97VLLiTfGnL9BDU5nnaSodnecxEKCuh2t1S",
  "key44": "2vbiwHpNvGTGx4nCJTXSZPp9GjbpGTMFHLihSRQXWNcvJxqRRfc531Ru4TYNirzNqCjrWjAxsnAqxzWc7SunTaQV",
  "key45": "27ras9pMA7pXKWLHhK14NVtbaRddU3X31NdwHwsndAmWTaHzgCG37LeB8uJnz3kGn7tu1zNeMdAnkLGRTVrxewt2",
  "key46": "HphVpvW7GsdcFaM3hw4D6AXKVQpofq537WihFf1uK4J39fUMDip6NJiaVNaWSDbexNJ5gDsTTfr6YcvQPnHDbLP",
  "key47": "5VMmJyLy5AGPNqLy3sUy4j6Y4LM8F73L7k5QHEkiqShuJpZ4PyfxddjRF1n3mk6smj1JRSu1AyUfD9qaCnxCCf2w",
  "key48": "2JCbAT7q2W3Edc41dnTsmoXN5MmWPtWZiydaDo77fn8UUV3eG4amJRYKqGBNBScLT3oPU7BgsHWFZiNeXMifcz3m"
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
