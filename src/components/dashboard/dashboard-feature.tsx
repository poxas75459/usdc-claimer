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
    "2iiPJ22EqPSHMe4kwAsRReUCAGds9zZ9T1xhKaaN8SEe6HAcf2zk63ULXiT9jQjf88MaJvRQtcDBX74o2oYAxpyc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PNmGawVTyruBg2ZZXhe2qe1n6kj6j8hADTsRP3jJLoBEEDVApGG2JWzJt2AmYAn8r6NpkDfUr5GArpLfAu8iTRD",
  "key1": "3n9mYpGnJERpF4SBiWCbu88y9CnJqhBrquSfwDWzJ4qMCbuQcLNvKUGKT3bEGNx9FVgbk55FaB72RDPSvS5StwmC",
  "key2": "kRikYSZ8tEbMggNk2k6bo7Mu6HmJZrebHHcqD2zvdN6k3ztMgDBHQKotL8SL9qrhHNexeFE9ybLmmKA8cnq7sQc",
  "key3": "NGfJVmCR6Q92EgPb9qsR4FD3eHVq5Lm2GbZJdjD8ex8wp7zfNZKsskRa8BtTNseeUPPTHSrEPvyPNr8FFPmaTJz",
  "key4": "5buohGqk54z3o9HtaWMvATf1MTfxiXea4n6EJQmbKuZEtd2Utzi5BZXd9fi2uG4gQmHxqxHQMmn7HsX2KJYqhiHX",
  "key5": "JRPyMJMpzqrvzPPm4WiPZCyxKf36XWoRAqyAFw9dLN5gzV8UbUiRj4KHbVN1zEqqGw8fwLgw8a7njCtEmqYFGYC",
  "key6": "BrQELU8unwovYXtaqjL65WRBxQUyCXjxqLuXvJ6c4gZQvtwMfjjf1PxeYBzJpCcADnHFnPbQzZmEBnBBhPEGaDe",
  "key7": "4t3xhVQbAm11nJuLdWi5JY1DxECaNq6RgXwZzo6N1mbdoKpgaVaM8KH5LurTZLQtnZKubGWM6kas3E6z6fEXNTfd",
  "key8": "5biLPii7JWR8D6PXCZwwzeoHqk3wGeuiimD15h3yMzxxYSt9qT4gBjLvD6GigCjZZpMXckVMMGhNgcpPjkx5Ydy5",
  "key9": "5GNDgUEdhgeDuCHbbGCLZJ82fferP2Ds1QszaBsJBo8jBmJRuGG76dXZBpwgG2VBHxZJPsMaa3FfUFtHEsTMZZmk",
  "key10": "3KiDj7Yydj6fBRtGZbyThLRgUg8jxd8d5gVkjTRPbRFuno8RXvVySoQ4SsYkVaSfjZPx1NrvjHLWsywWf5eV3fyR",
  "key11": "3sU5wX5Fh6vAKnEhZJCUCaofzQC6nV8CPTywVhDL2GTcvtZsWhZpzoZDSQz5Pd9dCi4hKgzEKreESorWgu3pV2E3",
  "key12": "4GjWGB9UN2MnLgy7cbFpkeLsDYBS7EEuYfC8tvTR5CwLoNLFPXkr91RxxipQuK8AmYo8W8v1ZH95Yjprvd78FCkg",
  "key13": "xbTpsGiMUHeHkVjqMsWGoUpwcNLMukVgRCro4Af3dU5ZLQbgGJxMd141n7zxzxFRzLP9ZTny43WKQm6bKNMzzJb",
  "key14": "54PAJTzZg5Nbzrg2VTcqSyzBeAvp22rcJq9MbggX5AQgYZtckt1286ASXmfyjxuQ6H7sF6t8Zty68jvuw7Vog4ZK",
  "key15": "3v9Q7hG9Fsq4ieoZwy2TB2vwVHYKizU1ec5ZXSjv1gdAQmqs5kWyrpWL2P9JMaAALFNmb41k5yrbCqhPErVTNpHE",
  "key16": "5eUchmJ9MHY85vDTFiq2jce93mrhGEikKXuiUgn26AGUG9LbXX8d4FyUfdepzKUuPpxZZS6sokKWy6xeSoMze3Nq",
  "key17": "42m4bRwd1B7VfoNHEt1Gxu1q9DzxAvCtdJa7wyv8EDNG3H2d1MKPdkGFiYaf8yp1PEwyjrKcnhrSAFHHF1BAj2CD",
  "key18": "2ZEV4gXuqNnnJqqgNMH7EuGjhyKCaLq62EFxiDcwzoENjDeVMeLsRCYzaVk2AH2spAc8njSnpWRAm4R6aCssnDxn",
  "key19": "2L4h1Pm9quudPDAxDoWgePxNuyuQU5fikoDcBFKksHGSYaPZKr7ye48DuqB9KcqebMWdS6pFdVUjPzFqsDKewbmJ",
  "key20": "3dpcpAh9hxQKcH3eUQ1AY2gC6WeMcZP3KMd6pjJ2zVFrvLDDPPv5NCzGNZH67rCnyg4QzrnD4RnZdU2BtgXAHovJ",
  "key21": "5fRQh4pDJEZs3syB5SGC6wvkRFBkWXrwxpoW333NXnGedUhvyVijAUmHP2aEJq5ARw2JCE8TKtrrfZvcSdJkCqB3",
  "key22": "438og9REPVqxjq9u5YFUteJVUQZuyQ3aVBxXbRHXmxYPk6mp4NcfZCM8bz53tGBek7H1xBwxGUhw1JsghcEqSMKo",
  "key23": "h41tyFFsJsVENjGNGys8xYYMcRu5bCsbmJdhdwM585PLwmVJskjPVPCsrP7hWSyNwtkupu57V7QgM6WAZkn82J9",
  "key24": "oTHkiygCJG7bEyNBbg38Z15UH8bPLVH14px6a9ZToAwrqiH8QCNUtMN67F8PTNRq9GG5pnB27rNwgmru7jhLP1Y",
  "key25": "4MrbaVkCV3v4xKbFrz8srR2gq394ptpXAKpEaWawSH2Hyn6GV4ZjV7bbgrut1455XU9KQ7ibEaQKVHuKDJEKvac5",
  "key26": "4Nyfzq9KdFWekGBLuNGLHfBrSyv41EybGVR8YaoQv2X8TW47tP6VndgHSyRPvZRrX9zxfvKyf77EmP6R671LXpb2",
  "key27": "4yZu87J8a2FgZTbXPdTZBdaArh7FyV5XbPNCyKRmpx8vMySMBY6fqSCgEmutcgeBXrvSnA54HeBevBow8yHcYgg9",
  "key28": "3kECiEbFfFdyRqdJUubus6UKtpfCmkgLiCkvxoQXubMXHkwZFg18FbDca25gjxDtwEAhkb4EEDSG6BDTf2DLDfTF",
  "key29": "3XToMc5d9FyWtZgkBNdb91QuMmjT35UDt6i9eTss15TG8avkbzaNHWfBmhsBN8mhAizgbVtfvCC2aZViEeRAmScs",
  "key30": "4R7EmPHjzVtk4iDkUoT8hwvCWGNGiVKoY5CBgfvqQZDW9KL4mY7gqLu1bKp7z3ZjSnDm3A2zrtWUeTuFXBUPmXk6",
  "key31": "2S3Kffma9AREbeh2jyVCeoNKSjM9v5V5NL6kUM6sgy28SZQt8RiaVquKPkC7orBmYYjmqcnWS8svkPAai4kcpFQQ",
  "key32": "4uVtwwttqkK8iXqBzgFysNHQz6zjp7RbfA9ydbBkdSXB8xtmArXDpWrpyhwdGycq3MCEjg1CyRTS6mxat4mRbBhj",
  "key33": "5KNmmjXxnzTCGdpBbnpVdTyrsk7USUu14ZAGuumVnGGEP2zE5RmHJAuCRHvsGFK96dx51EHNSdKqVFJC48xtfPiu",
  "key34": "5494ahGAi4dfACHgkckEUsP3MCoqSux8KijKB7Gp9FYVx4Sq119cWYx9yPAFRHY6f8K1qpS6kK9hr7oZox5ypQw2",
  "key35": "2UwYPPcPFkT2CsGcVe1qtQ7DdEL3JysEjDLqyH9JmVDgGhNPMFcz66hxaTZbKc4JeyezUVzxL33yogwPDjJcXGwx",
  "key36": "4CUtGcndwaZBMs7MNVqrd8MJsYw54PXb9Hso475bBnybGpiwfj1tc5cvHThy9LBtJTW2YWtGD6NYN73JEPB1Nvgi",
  "key37": "2uz6Zr8a4EkNkRiq8hTtXDYng2TB8TYjTVtmGroYwjEfazbNUooXW3Yb43fr1zm7AC79xdD59YG1oDS4WAZwtLLj",
  "key38": "3jw4MdnYNiW2oVfC7cta5pDUbYnSyY6pKBX224mYWg6TPdCCMPHwJPYq6HLjXChCYjhTjJwkbmJqZBWSFnvy4zxJ",
  "key39": "jnRqzgSrSZxZS62uTc4VhVYTpEa1ppFRgCZPwKY4q1qZVLsEK7BaLG1HMcTiNuJRp2RHYNESC7WaceDJMCdsufN",
  "key40": "4euGEsdYrFmDhTGVp6QJKo3jAgRDE4LopE5oVe6DCJ6WE98FsL5R37xvKmUWpQTtnHzMwaCup5Ead3ocQY2MN9gt",
  "key41": "VJPp57qPMd15PzXjohRAKR7Nm5aVfRcAaFisFhrcTRNtPF6X1LfdywREmPWyzXWT21sy1t46thpxgWD9h2VsCxT",
  "key42": "5NxYqB72prxQAePFfESr5nMQGXk7LJHfTkm6R3vPTAon3G6gc42gjDjxbYiFowB49eMgQ5DtJXd5pjb6DastsnVi",
  "key43": "2yuGynKfxWSQsFGGbcUbViXXzNJ9Bi9WPACoRXoGkvfHgrA7VfmAQSJjeNYoEEbKQpuMMJh7ydFi5sSx3Hj2URgd",
  "key44": "5uhG4YvUyrNwfaNRdbi9DVLeJBTsLbUxJNghCQ7YKKjk5hR9PPuvjh2gk6Aq3BoJTXR1sSkiZ46X5YrmpuL2ESiY",
  "key45": "5rqQAf4BTXowDzznxf3UhEUvP71eb1N8XjNG9kF8PezPwoG6eEhPH3KzyGCn7nUMY1hsiDCroHv7K52xHKSuyNdR",
  "key46": "2kUzxU9PuSpsR8TefLSFtxXmnCVcqToNyNpTcJ1sETxRsp7bHCtSPFSPkMDuNU7DwJd8ymEhtSHczig9W4LEDrHW",
  "key47": "5GZsa9P1cGG1YRXiHe6vfBzJoYRq22WXyQW7nUExdJfxraCeB2jfYrnp29ja4miZADRxmRKPBP7J8beM4BGrSCpN",
  "key48": "4YiR3iW6gT36yV5NuepSszU5VvZ68VyZipfsFwdy8CB5d1MZNjMHJYY8FFpouMwPxt8nbHdgmbjW63bMWym6w4Wt",
  "key49": "5f3KtPCew5TvKS9wjhmiFsURPN7s59agdKTHoEwyqc5czCERupDLuw9CzbNmK9BnAPhXPeHGB1uqox8GezaEHz6e"
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
