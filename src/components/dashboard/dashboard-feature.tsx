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
    "3buRXkJ7ANr9voCYP5rBtZKMWMptTsvJLj6KzG8keJu5HPo2aCPRPBYmLFWvbhtcd14WEX6ZReqEakim5oQv7X79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oMNByR9EJHnVF3VeWVLUt4v3Z4fVi6WQZSgi9pVrXGkRqJmLSnaY4yqpb6afygyvaW8uNFnc8XdLYYdnrExBfLT",
  "key1": "5Be5xYQ6NkbndBnKD9kSZJWodyvT5dt7Tz13jAZUyr1rLYSjaSW1FYB7U6g82AWygfC8GkacUnkE65ep7hoSWNXy",
  "key2": "4hSa4ANg47uivRzVLEHPoRUAJLyDgP9rUxWXaFHJn2Rdg2E4bZRj88as8ZEfpxWbuL9NkrnNbNVJYmzPEhYQLVRR",
  "key3": "oLVVDKisExXLJbuzozTfdJz1UskWxk4VTCCFEKHNHhs6zdY5a8xYvmUw8FjT7TJGA53xaAJwbEQNyeYZYqs8nRC",
  "key4": "28o9TF5hTFR7e7xf2CjQEpLRHwqCfk4feps92ebJoTXf13BqmXrmunqsGWYVmkM6AQh8nBDQijwNHFm9sFKog5zz",
  "key5": "2o8sxgptBZQnyBHCAi38uX7M5CXhp8AN8bc5198hsrqg9uJe7Qn41KQWCAtHkiYzqxB15rDZbHaQfYGjQ9rqVzv3",
  "key6": "4qR7FNGGaxkQmpt9QtDTzZ5Tb2TduPE6XD9Pt9fFcEDoadogjmXWahvbppD4WoNi5KdiPKjzbPuJCRzrtv9Y7Rgf",
  "key7": "WL4iuK2rQQrQZux7pmGnwfeUKnWDzij82gjpfCUPg22X3b74yHtzRfZofuaFp9YwzExVx7CiGV6Kk9wnDt3Ua4M",
  "key8": "3kVEWwFGpNB6rfUZeb6oZbb3mQX1rWF3vyaVDJqpeYFFavjoXoJS6fhbJKKi1Uba91hJaEnWdxi2Y7SnzGNKGxv4",
  "key9": "3ca4rNbXKrFxFp68DjQF4fd5F2fFDqoXiQAZ9xSdsX5wWzmQgc48LprTZ99gnsZvRw9LX3boVHTqNKF3VsxWv4Pd",
  "key10": "4FS6UwWgMbwnh6MhFnm7EMbADjwZznqYaxetUGJp15vVNQPZSrMpx7t34PGJTGqHhkeSMaJmUyjtto7j6CgwWTe5",
  "key11": "5Q8EWSAfNNfsRceLkAU575mhNP92T9LxL9iKM1LjqJPFu7qk6HViKaa4R9DsSpAWpnneWi2B3AiaK7e8XYMqfqwj",
  "key12": "4p28FZRn3eYHWexesmfgteQFCBTbsWydvPaafkZ8MwpyjZ5WzaVAN5KnkuTaBZUBnpSjKyVpQDEg7B34cXM1Whsz",
  "key13": "61UABP7aZdhwLCi7FKGjHumKatdAqrVQHvf8Ck8C9oMA1XdoV1fxvrxD97vQvs5YYLCdivVZUn68JKAiLFUAe5kk",
  "key14": "38yJZG92PKQEF3A8cSsLGQsnFDhJ4TLg9qtZf9W87uKLndJf8HeKDx8XxPkhFBz5HWzV25sdDQ1VKSXsw4Zb8Hwj",
  "key15": "624j1ZtbcULgNpYNo6Ee96MCzPeSK6iCWfCgDxuyZP4y2X9Y9mx5S1WZCQJBF2uwrFMjxMw3sv6XAPq4QjVytjTv",
  "key16": "4jEEFTgt1YNWp5a7ZG5CPAJ2wg5U83tmAhZiY6oYeHaQRSWcBfttnhjMrj73FXp7XpLujs8FhiinXd58brZLQ2qe",
  "key17": "2QGEqiez15TnYwbvQMCBg33RuMhtSrkp19rHdAQSLGU4NM3Q6DQ5JsaspzprFB97u2B4it9LS2VDmRq2hz2GDGTk",
  "key18": "4vsGpJdEBcPQzngnkuJSJmHjVTkQrpRprADwzBe3LQtP5bHtYasv9ayS3LwBUo6htxwpFHtTXGbcCuaxbY1Qdcat",
  "key19": "bt5YWoGGRyDbJGcnfXKU11c5neQ8sTWgT7iAA5beJV3h1V3aHJC7p7Q7Gr9epB6mAET6mwiwNcfDhnoFFoDCY35",
  "key20": "2thPpLPjFgZJHsyJVCgfnSerqf2gt6ncSpF7vg7vc2FDYYw4dvfXxL7Vv99VQpcKLFUJAhwvRbi8Bj9hGjQMq4GK",
  "key21": "4HzMC2G2CGQYABGVRASVhQJKWGhp5VdMgYQGRoQy8X3cskoQViGAjSRApppaxqDopgP4WWvqwGkHCz3NTEQz4S3Z",
  "key22": "63JtJUFjFC93vSnNqqQ9JcdMi14vfS8xfpCinz1C2YLMvScF5eXBvDowXyqrehRD7m1bmEihhH1heEtpnSg9y7yj",
  "key23": "338HrU84d4wGed9SvbGquKSePVrHuLMSWySbeCxkurUXWUXP7XNDv6axdbq1ayZuHfEW7sAqTit6XRt6S531jZaR",
  "key24": "5GiF9yfsaTMRcrVKT9i6m5w1B1qtJtSrYCYUUuz4Zj1uC3n6DKhpVUJV1CxVupmtfYZCxYuNd3tiR4m46ypfnhPq",
  "key25": "63zL1MDuKRthQJ75V2W6BY1zQCY9vWdVeoMzJAQvgah6R2nj5LaivagQRLvq2wyJPWT44UQJNsW8m4GU4HVdeXj7",
  "key26": "5uQgNzBZVctmHe7oT4wgdvKV9oJs6ZCgAiWGaMA52Cua9Z1ZEJPNHmAG141Wr9C8gCMUjY4jfP44nDWkXe2cvBE8",
  "key27": "3DpiQ7DUGMxU4WfMr5Y3cRGWer2SmpEUJ3LoycTxAN6LRRq74rea7U9RCiBcEwtcTZkgXusRUYCrf7dgP5hwVJzk"
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
