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
    "4q3Qo7BDWKTFZ8ePBYY3rm68aparp353mUNVW6pCLn3meb1S1xEknHSzPQVBAYbPzjieP7E7YNuzfEKhJ3tBXpmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aXxvsisWH9cv7fLPVyEF2aMdpSbBYq5x7zjGSTyKHZAJRngZW9pPEh5qet3rjtpKyEpvrRj6ecuaf8vCNMauart",
  "key1": "3vXWSTDdKHwwUsXroZWeHwt6UYMV23bGDtHLHkL2v7x4Up24Jh5gjq8LKY3jHEuRx11Dju8uaHEJ3CPXWi6yK1HN",
  "key2": "3nSE8VmdrHrB4JdjxwFg6wuS7fW1cNtkfXxCsj4nZ3NvEjcXNaYzmhExaata2gYCM4RbqdJqaNhNhELdvENJTCwQ",
  "key3": "ZjjSRG8sE45LVSTQz8y92HvHQgNqJi92fU5xJzWHXfzsmV8bESD7UzVu3VsZS1YyyHUMHaguVik2GgBbcV4D4FN",
  "key4": "2VnX5Xiu721gsPKWeLaEhjeBkbhr5Fv5ziUFg7QtCMaCYTVymYiPPUw8jGwnzU424C42XWvtuBbZW8PjWgEYD1X",
  "key5": "2EYjrKaYJw9QmsNbDSUgRpJNXsAdWq5wif8Q5Y7f8s2EFiTs5P4JDoyaMZvXmR2z6SR9qLUeUAAiqsfPY7P5awjH",
  "key6": "2qZZwf7G8oXFGE6cWhaTgoPqbWh6qXHJNenYDfNieNQUo7jxTht2DPwZUtysBbSnkw7ZAgiUofPaC1sSNEwtJbEL",
  "key7": "FHytwrWWN2qQm8kCQScWTWpnod3zqWpPRCWCZBoZE4YBtMEXAGswM1MVSmhfRVR3zWEg378SHv6BryfvWRidfNX",
  "key8": "5s3rqmrWDRXttPHHyvtiuJbTGi7w9o9juZky82nHzdvmXBNvGrT4wN2YX2GCioYV9bopH5pCNgzwWpk3z9MhSrTS",
  "key9": "44CAytGDsWubc7XM6iKG1vXcZQFf99nauFWYPvzs6fKwGNSjqoRwxw7giCwP4uU26kiiFDhgT4t8S5jKW9LhYkkQ",
  "key10": "2fNAJAQcD4dUZjMAumAM72Y6pDeE3bDefRHDr7sFfiaEQ1F881xmzNyUEpTJKqvyDKaCeb26Uk9JjDXDBH6EtteT",
  "key11": "mcmqRQH8aX7Z2dnD5grZwqBuKD7XkT1J6kmhELVJw2jHVgFWGZ1kt4yhY8MxPyzcvsjXvDWb1Quwus54jYT9p7Q",
  "key12": "21wkgsnk5JQiG8FChxjHCRWqFCnQLqzhfCvDGzmDXwr738FB85itM16CVi2rpR6eu2CndpQWMxXmu3xT5KWSQVi8",
  "key13": "25DnXs53A4jdTNntCSTGxbXJPHHA2hoNFiiKNsVP1yXRYkYMPLM14xmW7DEm1paGizeuBuPeymgMoQRJCMshfyCe",
  "key14": "3187mk45odorwSHTy7818kDJtALYXsLzn5JvcUKnRGADEet6ytiz7grwuC5FzBXoGVGDVL3w9ojW2oLdXwHzGPVa",
  "key15": "4hkWQbpG5Toovgfr2xdcawfPNDSwnCBikXSmEZsAJfJLibMaVbC2W7i8V8SNvHXbWeG23y6TBRJwhVdJCXQweBab",
  "key16": "2BqsvQmrJPPVSvUetVxkHmExMrhENCMGEfqcYPc2bhipcqx77H3myjVa3xLPv13jfBKdbpXbBonc8FtQZB34YgUe",
  "key17": "4eEfQBStPbjBKWbGEoAssD7PstWEzfDSN9sS8JDAvNPK4Yc8rJucCSmnTDppd6B6gGpLoKJyJkCRkBG4CzxcezEC",
  "key18": "4HJQqYCMNoyMVFsTipcAVDR9cCVknJ4d6HS9DHLWEStR7tfdgAjDuD2aWQbfiMVrPvUHw1vdpZdFMWwxiH5wg4Qz",
  "key19": "3SBygos3CPywivaf3n7FBYMhtJhJ64oEVzupU8yarZXUtv6FrUwJVJkocKXeBHDaeWXQuuF14gG9qqdt5F9VwTBT",
  "key20": "frw3mFoxyYMFT2g43ouvFXyKvvQGiQm71a6AoBTByoMJDVvnnE3P7JYMoix3vhigjAkkdzPqFMvCgDXgweEAmFM",
  "key21": "5vFuT3Y8avoCepW2GrcehQecZa9hsP6cLDP5yWkgrKwnQHJekf97VVB6EB5ioHoV3Agifjoh6ApoQa8D7g6o1GG",
  "key22": "4KWQREkFVAuCj5hc5xVcPHbsGZJSrDgtEhQ1DBXcc2bxJC5XNk4YCEi8Q9QRWc3eGB9CkU5jGSaVuqXsGre1ZDeK",
  "key23": "35QQvWRrGLgLkshYnFQyaVcUsxMec7J9oW5bCMSLk4qhmhX7bwsrKf8TsZnuEKU7btdmSb8s2UdmdaHdpxPRB9Q2",
  "key24": "46zFgh6Yr9kvcEMZ6wNTPHrfJknz2S1zi7E78G5Dg748KWUw8i56tCp2wC67MtHbbbq8qyB229VXUrFh89BcbEA9",
  "key25": "4mgubHB4XqjFyF2G3dU7qDX873BYib3wWmvekNBsJuuRAFuhaauic6sQR2uyVYfyEtVM3uuiSVQ5n4U24GYv84bt",
  "key26": "5c8zJcW52J8pYwoKV9vs9CrPeSHQuBTChPZVqyre8TkAwv36sHtnhRfRMZsbG7WEt2nRPudfj3kdSAWfz28xijQ4",
  "key27": "mzH9i2Jcp2NjugzN1Vemozp8ZQyHyDpVDuPMo3EfPG2a2YTV2DMHoVM8MLXuskTB3zrmoAp2Pyby6X1VgkhcXDf",
  "key28": "2BTnLn98PWEAWFQ1yyzRq3V8eoCnECuiMEMyXcNAJt6KcLhBiMziEEuMnYp4ycHcjMZEzdYvZhUsweGQit8vKh7f",
  "key29": "5ELskukbncd4sR68aWYFPHDXZsL5misD6bxru1N6nEhe2c6RcBSqxFrvTjE6G2wLB7xzRGxdi1yZYZTBjeWUNYgx",
  "key30": "65mkntgatrrwjzsQUD3BJaHqZHd6aom7AZk3ZGSCCFuLh8iAjGojtinCygxfUPZvybcywwFGWUXbjvFLTXUJnGyD",
  "key31": "5FrL9AqBUoP8w6cvWYj6p5obxcS5EYW5kTK8L9RHhWR1CcGdykcGXdyPfi4ZyKs9qfNsuTihEQLciddLFP1wkS6B",
  "key32": "4Ec9cEU7Q6VnKLVq4R9WtqN1sEpoP9rq1pE6GUCkaVCS7nwGFYfb9A5CD97znbr8XFKxVgNQ6hEaXc7mmzbtKS3F",
  "key33": "4w5pA8NMQuYysb9c6B2gGHZPmM6htewW7Mze2gUDFQVYMfWFtQwpHskTWAecr86JcBZa8PhskMurnvJRPxgJQX1n",
  "key34": "2tzSdPCHbQDsLES2U5S5JxiZbLWE3igETWBY6mCXc4wr2tR5U6WaGKSjXoMh3EjqnXDwYJqSFAhhtQRZLrTG8qdR",
  "key35": "TNNJjwymLnWRQGwJ1CX4nLRSK6AJ9NcK4rGHn9DsHncuSayNd38pxzhn9E8BojXg2w3ohzEs4EwgnA9zNEaA5tF",
  "key36": "zVPejVtuPuvxKTGsNmbdhwHmHt4M2H9ity6J3fuHYuMgKru68K8CL1TFp3xuzuJhBW4fwe9ck7PaArXipgishbo",
  "key37": "32jrT1wapVPxLp2ZbaACy9CC7YHuWB51UU8sWxHwhJ78oJDKTBKDUmnt1qQer8hDP4WzvujaQ1WyFyQeGYZASnE8",
  "key38": "3VqbbUWMBbmB1Fo3Zox4K7EcJGk8RW2JXCpYr9EbqTsSJXMnJnRMzRo4aq6rhQvSp4kT8xLwYvQbvADMyDQrgcgj",
  "key39": "3Ynig31jxx85aRx1cTrewxvAzA5W7NpkQ6EadPMuwvREkKjLTYxac99nLWzY1eJMR5momQ3MgzuYLULfzYsF2xu4",
  "key40": "3ZTfUs6d3ZiHCYG9bK41VL96coxth81zmDL54im425DCGUTQ789FhSMaMU3NyJzBKisPmC8Jn6oxKEb7tipicg3K",
  "key41": "4oyLB5atFdq77rrtSm2973JF39ms4oqWrfq49BPMgsAnQYymKgkFwu6kDN3vRkNnmKUS1FASUh9hBBuUogT4E4g9",
  "key42": "61RDK8RKQHGxKHKEXt4Ze7ggAhpFDCbNXqRXVTQJMtWZQdDTRPxaKxPCWSbdDbT7qavkXSamQsJB6Lyr9h2o75mK",
  "key43": "3ickATCjpypqJANstJXAHGvXGNSmvPnrMCnw7QVVdBRpmUKmq4wrA9Ly7JdpTNRS47aoVn7N3Mkg2P8k5wQUGKTa",
  "key44": "4UjbkbSRfnoZqxLJzCG3FnqAZ1AEpUS4SstPW34RZeaWb5DtfKqfBpdoLinBf6X5w86vMjDDUuKNR4epKgRc21P9",
  "key45": "3MJ1XZvrpEhSa4ATxj5jWWJ8jqjCc2dXnrMEeW29qBJ46sRKnVMJbeNkpXTDWRVRHrEPR3JUBWXXBbD4egNGoJeH"
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
