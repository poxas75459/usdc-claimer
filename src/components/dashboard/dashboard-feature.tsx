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
    "2ohwS5h2qAUqrekUg5ASFpD1vAvLiJcgoW5KFbyukBLFbGvCr2zDSwRsoMnM9Sv1ajbC6nm6k5kaiAuxdMEuLX95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PSQzYfEERsyqmF9NgrgHsy54g96aNpwui3HRHA6imS6VnoJgVjYvXQXTVvSd6KEPEpbrcq5fyHp19g8i3gwVBqw",
  "key1": "5x6H9h3edcCy1erqvkXswP8rPHiBfpeC4TCmEqUAFwBxXr9ZC8DutowbZMA37qHKZQXw65fxBpN9icVtZMRSZCgR",
  "key2": "rFQGebA75ybiKFuW68wFsuZWFdZ7UP8mgL5hRo7nuKYy52PEsFYwKReFUvkTKcEgdms1Dv5i4hSxUqDHQLkfpT5",
  "key3": "2Y6F9DJKuqXRQvNMHQFaL4vjpeFxFr74F8bqGaMujuc8x3LNtpTaoA9GgitUF8h6TcBSDm2sbs33SC1bz4wG1cYf",
  "key4": "2jir5pLXnRpVdAMgcP9ZCaS8EZJD1V1LNTBjnrcyYBTRK4uE3QUSnftrMN6snvo7jQ1Utxip7f6AbbgL17GTT5Si",
  "key5": "62G7zhrjENxpTRsMhXhy7cqGTE2VGjZXp62ViDCh3j6aBkvvM9XJgDGqPTyKXKH67BeGBe9Jc5NH1vQ66AYTYH41",
  "key6": "5RxsV7kc82bGB2XqMUzkje8GJV4WLcFArMmQJYKytPBgKQGsD53VTxmgtSCqarjjShzARiUWEBNyjYUb7YzHfa8X",
  "key7": "YEAawcPFyo5vXgJ7nvj2hsaoJx7hp6zJ8tmHo43gRTnY3EpKcVxdZkYGD9CewoD43xdTq6AMvZC9Sc3vCeLKjQa",
  "key8": "5RfJxhXE45pqJowDNEzJzWGgvTsgnMtQXV9vwf4uW84dQYMPHPtsTxGQKq97aSyvX4HYAfwNtU5kq52ofJLgJi3m",
  "key9": "4cbQGR993yqHuKMJR2R9yGYXxTLYB1iPk7Ti6exnbqa7AjGDE1d9qEeCzWaMaZtYaTk4A4FWag7y8MdcrKPM7L48",
  "key10": "21TX27TnUftEkFWjDi9aBiZs6LocEMLWU3USjoMtHWtPKE5QmiL9CetzB6WCajYWDUqrry4kzMs9GLgB5cwnrN6N",
  "key11": "4ELc6KfvXCdKBTZKuCmfFGSQPi3HCwBFRfWz6JKpBXJP6UFjmyoExgwFS5gXqmdStFxF2qXWUYQRnWYKgDJ1nfiK",
  "key12": "3XkQaFgHAohTWvAf6vwHBdz8whMBv1zykPGiqkXwDgjTZrJ6NVXrYJQrmDhX674q2cyJbKT78JniXPj8PHBR6zrE",
  "key13": "4t1XFzRTGjRA6GKByDv9vKWZvMWEUCUmWNDPiz7n6eWYFGwPDQLVKVsBgMQtyFVPmohWzdQG2zkrGktdqHMz2Kag",
  "key14": "5AbkhT3HYEnhAuaTqeDxpWcZchfueAYpDSCAZt8G3bhaAvVcnBDPdAmTkFitNeNZjB26raXsLX3D2SxyeshZ3Miu",
  "key15": "K851zsScgpeuBxUAXq5XbfHSKtXkR8YQdbXUrcR1KT1MpaUryTXLnWDy72RY4bri6wPznEAZH75dSSW31hzj4w1",
  "key16": "5Sogakb8JUCyebfb6BMi4NBkwe4gfUMPeiqhmeMg9FW6a96RRFjBd3kPnVbWmTziEm1w5S3RZ4vsAoPjrjkEtGgQ",
  "key17": "26t9pUGMZLhckztTpinFHvhVEvfJzAcp8nsgF9gzH7BY5miLvNceqibAuhofg62jUMyFSsFjAJeoaWKCnankzQv1",
  "key18": "5a3ZbvGCWaLQ94zbFazNVTk78jJMEFctN9ZYTuv68vpqmFLymyXiBNogeukB4WNRnoct76shcYcWFohx1Cygeudr",
  "key19": "53nbm8Vw8hhLJ7SbRcFByk6Hnx7ifwMZHnoEo76bG27ryFBn4JYvwGEN9WpcHUDr9bjTpiVG2EEhfyG9EDp6wqJ5",
  "key20": "3YTLEiPjiQUdpjTCMLpsRTgMudJXBvkxiU8gFadqNZvP25oKsisQpVJNyrFqxW68BTABdzVZZvsXawqQwMdqmGp4",
  "key21": "ohP3KJq2Nq6WobRk7neBV4rZ3hCgbDa9EhwK7tTwUuyR4fhMKPYse8X8Cj7ePspyXMPcSDPTcGey8w9G6cMhmpk",
  "key22": "5SWp5Nr1aEmYq29K8KEd6tUetFLDzQEYyo4uGhrJCEFbpvteaT5WASv8DE2eJ9swpCTEigFg4EGi7oLKfZPv6YGX",
  "key23": "57R2J2QRveZXM2T6m8Q5erRSgjohbL5in7vKzgZHCVXA6M9nMnnFw7HNYSemEX5tn7HYKRKAHxhrxnSnLSErddS8",
  "key24": "kp82fFtGrKPVXBkAk23J1jgekHsqsLGSnqhnhfJwCrJjBHJmkcStPkUkFVmDhgzwBgCEcw1Mkmyey6umvUrLad9",
  "key25": "ZMVegsaBR19g1QesetEnwnA71R6UCWeh5PJeXGNzzKjm4Zsn4xXoMDYH9nyYKyYTMKdbUx4a8gPgE7ZkDHA7Xni",
  "key26": "64ParRc59yMin7DCE8KuFLg1AfAFoHx5cK2TRToZs6unfPfGAyuvW6te6H5RwkVC2Nbq5Tue36b68pRK6UpFh11n",
  "key27": "5KN8rvst3Nyz731YJDfqxdCchVViSbnefsnFoLzUmqgJzzBfeLWUSe1oxxamDj31FDULTj3nupJho1LbXEGiUcoC",
  "key28": "2pScbiKrEC5vJNoFkRE8DgPjjWjtEPyBVNrVXXvYFsFY1xD7WeAJhhgeQGjZrX38z6ATWqqKcQRFXGKzZgF5zBt7",
  "key29": "4DNL38A29eW2ky8nngrqHZUSFhavscHdfYADgUPcBG5wmGi5SWnVmfdExhmNjoXgxvS6WZb5MuBEDVKkQw9NqF16",
  "key30": "3QjUrcH3Cu5SGYGniER72TPqmfpSFzNA2Vs7AvfpRf83Smjvz7BNSRgtu3XFa6mmnRHS8A3SxgyQKVb9BXSSEGzi",
  "key31": "5MBfCYS7BGLeMUNqDMh6EYCZ6JCdEfTjBp9ZbQejCPMmCAR4xEfuMCgC9uwCmDjLQr8pbJ9D3zGiUQE1aELCzJnU",
  "key32": "4gYqvWx6YwLyBx9fdvjS7cPzPHEwnkJSmUgYXvzJD4tqfeYEhcRSFejm3qcxtC4yx8RcYRFUQBeunSGys2Nu52uz",
  "key33": "3dJ5d8SGqq8vQCzrEKcMkaDoR6ncLNVFyy1oQnNubyWwzcfBjuzbtn3W9Rd2AZ5De1is8xxUfoMEwmQWc71g2r8a",
  "key34": "2qRd6MRQCDFn44BZxcGd1R7387vFyb3yhGPY16959manFkueS6kpnn3dvV2GkGQBf7MLVhKbcuDaGyHSdNomGPUE",
  "key35": "5otwjN9Z4t6q573DLVB9JEEZXbC22cgokFEQcCKLEstMcMZ6yNbWx1FqC7zv9b5oKpjHPe1cv2HhJdma7ijfX1SL",
  "key36": "3fp4hiJyB3Y4FJ3QVfSZFG3NeirKBH51iAPvTHFg1mz7oMMMT5jFRF2jSYKL2s9ZHNT2P4PUtYjtn2XRLMdJ3vZn",
  "key37": "Cpn814vTkG4W7VDovuL7DD4msCGEuVGwzjFWC7pvCZrWAPjavPmrgRExQztitySobvRCo12ZgN7fPRPHVHuMkz4",
  "key38": "32jHdcarWe5zfn2FsjGNm9ks6g4HpJHWSnfw8ZD13Fag5geG6iJF5XnR5QmcX79JkiCFpm7TysfvtsYtTeiXQgYM",
  "key39": "44uE9Dp8Y5S2i23tkf6Ds5jdP385RK6JYcLH6Am7r2JntzTJWE8ZWpxFNxNJFX6XqfpP6vzkHqTYnyGAb7XGnW4K",
  "key40": "x39cdupw9HRdQbCRZDenUt4Qvpno6mcdQeAffuTpHdDhKEHg4AZa9UVFthKqdTg5oz8gWmeYGsiboNY6PGdpXJY",
  "key41": "5ouKCN5HSvoTvrEYLTstCFkUNBPdELLEFg3aNjKGrym8Vrjc8TPiVa2Vjmfh2sHvAidGu4K8AaqV18AbfEjvDUGw",
  "key42": "3KMxtV5TcdWxRmw56a3xdETw7kvM3EoMdQK8hqABBm6B8nQLucuxhV9qpxtK3b8E4hjDoux9m4YJwBMMQB8xahFu",
  "key43": "DRmADN1cPHrASJNHbLLGqssy7HLQQ69gruzjJBKQSnhEqSQB6Jdr5WyBkZjufrFo835GxPRZa5YoJWu6HjXJ9p2",
  "key44": "3FXRirvFXeVJpZnJp6Cz5cVJCSGjPhW7je2eUREq61Rmxrt76EnfsjF3JAFfpkxf8MLPPFzfQRZFo6ksbrhy5v77",
  "key45": "8iNsjpxg76rrMhqZiduBzj7ZyAy3zRvnCB3ecop3MQDXu3nxrM5CJasX3NoubNF6E3ys1duuyB2PVt3EknERwwF",
  "key46": "2hcdRCbz94DcMfybE7ZJZrPJkQ9Z4vEvPxZhRTAK7XPhW9Ef9qoGzqqQVSFQszfxtawqw5nxjBUFEkftMv9i4ZyG",
  "key47": "3KRfPzGTbMTJgX9nGNiAQcrmtGmzPtdB7zKbnJUYTdQSkgofjLbvADwJGrT3TH22xFtuJxFysuGah9AU4Ji3uvk1",
  "key48": "4k3b4UmR6TjNkfTxvdfPeuprYf8XnUyzy9s2aFdcGFf5F9S6LeHDJZbhBk2jmxeqXDBQb2ezHrn2vacVMDZab3nX",
  "key49": "CajV2eouHwNxTAP3skaeqEeUdpXiVfHtKUMxsJVchCYynifr5E1NKq7KSfc7jLPha4ZycU8JR2PGUc5rRVzema3"
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
