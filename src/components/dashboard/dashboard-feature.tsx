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
    "4HzsyXuaEvspLTd3XsCjz1jC2X5aB8QTJjFkhitPeJUKjvow7C6UnUVDo9fEqnoH4hnafFTPhepgnmbrnMqqqBEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eMmjhaHudUMyahxqfWKuW1K8kow5DfHH1vN42KGWRHZi9dcp9BqmoCNamfukLy4Y15bibcrizryX8YfWEgzdDEf",
  "key1": "MUmYeY7r3mLnKsBJwX4VPS1dnJQpjLVgz29dqx21zqQtGXTPCnkaHRVrQxHJPotqESzRnQH36wPvDkdcRvM65DL",
  "key2": "36MvDYG4XuhPXyL6WPhc3LQSLTqskuF2o2erwkW6sTsqWLTtCEo8Y1R6mgk8nG7z7QNUPAECwcA3HiLTiBqpF55p",
  "key3": "2xeCptkKRkhJuxZYw2ne8AeuvdCVaumg9Y8B71S68wi25fdKds2keyMLMbzAPX3cXSfCk3CDq1AH6Ez1JGRJJLVx",
  "key4": "5BJnn36bDBKgfxjju5MCewaVTJRufb9gm3X5ZmwTaLn8ajB8NowzuMjXoo4Kht4Fs2RcYCLfDRf9FiwLBfNHXvRh",
  "key5": "tarnJp4CMtLKB1d7QHTvvDjiKZEj1GGGsKBvzwzhLaVgRrSx8RYDugi46539BiRmV2Xnkv1D215agadGsC7qtGR",
  "key6": "RVHmMPG494gybxH7GWVthCBudyZyZaKTTT7SLTaehJXid2Wrz8joM9EQhvpT2dwapnv1zUKnGFReRgdThBaQd3w",
  "key7": "zYvVnxsPQjadRRVBMPpW8Bg16rrDoY8KEQi27fAaqLv7wEGvGCpkDYFLFyNrvVMSbvU31smQQUTB6jc5cBqedjX",
  "key8": "4v1Hdy6WxZ7AahKGzyERHMLvK7bEnwZc2nwggGCzBBJbzCai4vNGVTnNBd4YrXFjSAq8f7rT5GS71zVWgee4QD4a",
  "key9": "2VpN81KSAkFYXY1JeioncttUWTHWLnxEBfUSguBqr8eevdDX3wRras8pZYNeosSkL5HfYsVKhXw7eB3jTtBkKAPB",
  "key10": "2VwRdCSxFHCC4xA33Sx8AS4Pop3aDEP9TG2XpDYoYyeAtVAnoYXibYUF21t3LZK45egUq8hRY6SA5fjkHukzp6Ln",
  "key11": "5Wx3BDU18tTbmavGJNXWKpuJ2dL7pjBWD9myKo7aj4srdm9hgkgJJpHbigSsqFMTfjMJVAHXqZD6PbHyHmgs3gva",
  "key12": "5cvVgLLEgja6fqhVXg4A9sseuq6eayL4u6NS4ct3HPDHqVmMRx8r1STNhVUEw14LJSGZAY9XAr54ui2NGJaZEoSH",
  "key13": "3atPuPcSeS9crPzc51E7iHEMoA5QmvvnhKgBXnvkhmBD9hPJnG4USn4XRjjgV7hZkGnBV3wCv7mjt818NAZQ3pu5",
  "key14": "5wXzCV72eDkMWRmMJnvkbuwecACJRGVZNrqEgCHTXjnYDP39VsipYiYicDQhrLJXRUw9avCzUYDbqqM2248HyzNY",
  "key15": "J2j7R1dz6NQESmiXvdvKFCTxTtjiSVjC5QUQ8cXWUZ6sxL6tDgCFosAJ5yC9MQJTVMZEQvxRXmJLT9Qq5K2hNGe",
  "key16": "5yJzLvu7LyttGAq4N8uKSzh8bD5rjS245TQAJHSF8moUUURX2EYPegTEv2JrqCb66f9Q9GLEtDDkntkA377ope5J",
  "key17": "3dyNw7poYPf8LNsCnkfe9uDJLmkhXHkovhQNPwwwmwMPvDUgZg5gqDr3nTVbMbA6WFas8CCXriW9aV3BpzvVwB4q",
  "key18": "3jUeaqWuauRMyj8cE8y9gYSPHDS7zuyVGirE1vMYJ893Wb2sSCchXXNHYCc5AfyDbBQaCbdr2raXiguXArZhTh3Q",
  "key19": "3BcPU5mTHwk1ndVyxAEBTj5ChxLkzKj4AKeMhfk7upQ6osJV7cQCViVj7Xq5HzYhuLfPMRWYPj4jyRk7YjW2mPqx",
  "key20": "4cUktgELn3A7rbc1iiJgcKPRqC3wVzsDQnGYVH5THtXYURoy3XBjRkCqJjsWpdqKf4f1g9VnttDSey2jko5hFqpH",
  "key21": "3XfvNBH6uGmyTEmgbuqMNdjZdpQD8iZVdoYTiFN9b6PsdnZnE4qYmMQTGbZ4ZkuoGzLtZVCo7bvrSxG6AhbQTAQF",
  "key22": "4cRBQHySeSPkMfVfQ55WzWu1BLwrAacdZGheeGhCmPyrsvV4MQHX66siXU3mcDQok2UbDbzsELnAGvhTSmsidiuZ",
  "key23": "5JmdgWyLbU9XV7R9PPMdvNNfMAizgYcSMAby5mzfrxqX9ku24ukrFbMhKhzNRjP3iH8ZHquihLfGu6CCGYqqK7Hi",
  "key24": "reZkLhesCG5itYj35CrmxeEPFb91MBYq7uU2C3zcHpdn2zgZ75yvgrZaBKdSG4qE69PXrPM2vEMEq9ptUcPP2cu",
  "key25": "5Lu3ezkdr3hCorbzDtFYnXivBCJMwEr3LJjSZhQM2sw6XmgyY167ZapRFsstGMHbHLZaaqcRqE7zFF7Hnn1XYduP",
  "key26": "2eMUggT7HR1zh2NzUKqDmRBXG54PYmPrjF9HLEPrJWCbnQY4PnZbPLRTT41MJP5Ng4VdDoz1UfFq3HNHH95LAH7z",
  "key27": "3R321geZnBmcRoURS6DTnsSwGf9MGyyTFxyMbqvDojwGqLhbmUxpbsicMQy9Yf153jQJVd3xgmRDTHKgdmfi2okF",
  "key28": "MxEv4yZt96XFPwUYvNYzaW74q9eHoCwwNiG4sSiGEbRJkchkXbmGVbAVXy2n2vFoCqScEnNrExRiVmZMfXJ6U3Q",
  "key29": "4n4jQEJcUgMkG5ke1nFBP5BnWKppPDXdGcwBUWfxRM5eEYUQcSoQR7Sj8FFHJfHF3U1J3aGKx9uqiWbvZiVUxRGy",
  "key30": "fBFgE8m9jcoyrPaYmV4j2Jms4GNuz72birqyZzH76AcPa3DypT8wqrawUfty5gWhA9pxFFoeFYFvj43RNzSzL5c",
  "key31": "4P8F6uVKb54HrWBbG48PK3TCU1NUe8wY1zSak3vT3afMuMicVNnvaCCQB6oDw4ebUZABJTphQcSQDbkaknyWi4VH",
  "key32": "2CUasMkho7QA5H9LRoFcj8gdtCmqtkftnWm53Ndj41zKphzfVn9ZYEBsh149DZ4aLSc665bdugrZPhSwbKZZXNj2",
  "key33": "JwkqytLVQxvuafa3WD252fTiXwRnR9quYrnxb3niNPqK6vabhkUVn966kWfTAYfG14fv6tc9stf3qJjtexmgPUa",
  "key34": "2ZfyYmwpyE3QeXUCw3yz5Geq9sktZKU434DP5yuPoZaApVXtULgbhkZiMo8eM5QgpoQY3GrKURQEmyFTVZUs4CT8",
  "key35": "5mw7J8x13pYM1QXPdRK4YvjcuxWiVVAhPj2VJJCGjtZpJKpXrpCFP69S3GxT5vczmxhFbtcGxuxAPbGcod4AobUs",
  "key36": "3xEJfmEqJ6H8fUCEEDjhonadCVg1B6AkQCNbEdYPzT1G27FKSEXFyPVbj7wka5CsXkGz5LLWLq2wvvfTp9No6hT4",
  "key37": "sZ9xQmyBeS1YSLG3YEdMwLJV837D8x1wJp3FEYd18CaJerqsgyQHdhg1x76crZscHuTqGqyELaejtE3YpnY1Vau",
  "key38": "5MdSD4yMSgdgS8tJtP1XeCgtoP25yQHDepdm3FAg3LX5iVxjJpjDtjz9aFwUjGfy8kaEsegbhq3wWcxw1HuA3ynh",
  "key39": "2P2k2HcQa4FJQWh19pEeFKvqryPRUaLqXQmnRXskLFCMTi3ECmts8K9JdBDHh7vNovgWi7VZbMgBZY1vtRxPSmgY",
  "key40": "2wPTycGu8sTFeeM4LJR95zd2QYkYCi3siFigL4coHergW8byBs8E53xZ9JRzKRUp9cfobfjNMR6LmwLdJKhKu5Ft",
  "key41": "4oX6uYtaC3XYZTCMq1yHzaLGLQ3a7e6caRhqG9bVRJN9jBRRuz8AsYd4dZk5M4akzRkJkpagNZNM2vZJycmkKFyg",
  "key42": "5MqGp1nT3MjG8gHH1PKyNj1H1Fr3M3b187qQCLeLggqKp1c29tk4Cz2ZFt4RhfWFTSvq3r2GQGyv9uPczcX3vy3r",
  "key43": "5zGmDtAjnS5x9iTuk3UxUFg8hbtYj9F9VS9YT584UPuEGVh5En2Xat1F2mhEaPo1c83MHDzLQFf1jRDzoRu4WqLx",
  "key44": "4kayKe7M9U4vj4z5XHYNXS5H2X9dvRnaNZqr2LNjNJVRK4SFEmbAyqD5JCJd2H6nso5ug5UDnsxTaiSvTgGhLgEw",
  "key45": "5UUdhSr8WtzZ69tdP58porGaTfL7UqqV3NE5wUnwxSsgNG3gUY6FsNYfjWAt7FRn2SGDAd7PjGhvr1HYjUnRkHXP",
  "key46": "3qwfbbzLEmut1JrGrSU462iPMbeQ1az7JiDB5q4X8yPUwPjAMqHu8mGKD2b5NqGcvxUC6gfJEyxd6tMTN9KBTgqF",
  "key47": "47gAUdx6dzarYpLgaqfMtNZ16EUFF1B7nUQymX9Bx76Xzuc3utJUFxGacZyWjT8tbSNtp9415cacxnGG6gQY3vEF",
  "key48": "5qXJNtvQWjsMfiBD1jfDE2z1MrSRemY3FuUhbyzAYpmTro85dTDRa7DLpcRqAZ6LfJor8izWhzhk8bgHrmdRUQ44",
  "key49": "4R7n7da38pQkgDTA6PGLQwxYqAjnz5PsCyKS3Tk3SyrEKXczptwkmDR4XWANCi61jGZNk3NgzbemvHnpNYpiotfp"
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
