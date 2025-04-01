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
    "2kWcsDd7sje8Ush3xAN3ugqdNoqAJBz6wAKXVoqaiMnqh83aCqrL7RdMmX31XmEFisiaMxociQcEvG4Sp7Rg7wRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AsMcvhWoVGeUcEbWQrKgi3acKjXcwar7DncHorHoCvLy72Qp1MxyiuvXuy93Rrqt11AbzBcP3DvTkx1M9U84k8H",
  "key1": "2eByMkUMQBT9Pfs6nR6NFTqsNFcDzzHZPdEUinf3XQdaXdFopiGX4WqQAqXrWByQEtyqHgHVEx1n4E9h4WSffpwG",
  "key2": "296n4LUBthkzsJ3A55siSjaPyFoyUgSmhTFgRwQ1k5HEyQY1gMJvZSgKBQWBKWaWQ9UuEm72BHCg62Pi1LPw8ouQ",
  "key3": "5Z1CiUUWSPZCBvdy2RFAgCJjVj8cHJ5nswbHUTfDWSdbgrFbASzNK5jsmWev6NigYc2hqqATYoBxCq3VyR9qs7bF",
  "key4": "5bgHttKWUTB33y8sAv7txT8mL23PhiKbWK3orTXMdj7wsCrYY8iARZMWfAe66Py7XGYGLvdfgG48D7cH5bRsVjRT",
  "key5": "jHuwFqSVxhp5RxhQoTpPwuZhRebmQEfkH3gcua9GAevCM2juwUmDwKPgGTPdwudy2395sZFskpf898f5aYSnQqf",
  "key6": "3iEnGWkJy7A9WdRkFvXmkVz5DZhE2cSbUgD6VwXXCvQ2m2q56i4GCeNxku1rxQtVXbiqcoxZwNGx8hs6B3xvken7",
  "key7": "tPEYEoJ7ZC41bbbgxtajzyQTLCEp9CXyhjDiQ5sgV6Tqtv1Km3z4Untw4MRPjDXAfHStJmjjeS8Kgm6ZtuTzMHu",
  "key8": "5CUNVEuWZFEcXYgUxyainqUXJTspdMo6fokPBUefDQkEvnj5Va2HW1m3UezqQRmmUi8ZPUBYZVVupZDMAjqvb5Pa",
  "key9": "5rkCf4Fu2DFfyaNVMdkpFV5EBuE3sDXY5d7REJTvHzx9KdBdF3B72vjs5DPDZzTpNcs5S1vJ5wFYZ19p4XEBHMB8",
  "key10": "dM35Fv96K1VM2XPtDrKh7DHnPoh2DdADjGUxX94sLg9fRzT8chiFJMUV6N8adfSD66gXgPPQuSKHbH3PEmYYrm7",
  "key11": "5bSu3L6EYxCCSZbMUfW5E3vmx4goKX6wGqJ3kLUDzfTJzjwzT11MBavuM1i6SRGJcPta3xB5W7tsweX1EC1E97EB",
  "key12": "FxaPdw3UpEWvoVcitJCP7X1KFLtg96QLoHobqSCDXPdqXpqoTH1ht1vfBMBMhWEMRK27a7iQKtt1VYnLzt2zGNV",
  "key13": "3UNu4zpvw8MsU3pxEZYXgtuiJLNaW6cwsbkTuBf66q6KaxY31qfhyuGRC97PLQbX5ZmgVB71tKJ2QHLZbGFFACjt",
  "key14": "2GVZ9uWtnwoQEBahp6oYom5wNnrCmZwQYEAabiSA9222MuErjaGvA6LkQAjKEPaSTJVSrAYxhzP9qd4z9d1wtpmn",
  "key15": "BP8Sg3MvoG7UKYfXNF26gvA4yXh3GiA5hQmTZYifdhByqeybLQ4qVkCcw8wKXHzcG1t6qwxbKqrdt9WC2HESwbb",
  "key16": "4snuhDQxj7SgzLsjwuKrfauVUMvbXgy3n6hfRAJwnP9fTZ2ZJr24gM4sVpf5k6ud7VjnFFyQG96bvd7HQ5zMADre",
  "key17": "SWpimy9xWVTSzdrGZwJsYpmX1Dfu3Paw179BmisXedLC5SHjDnniTtTnbC74zwjLX5PbE5m89W9wKkhrEkmh3VP",
  "key18": "5BriWbVo31scoJSCHiocT6uFWHtxZvMoZndnFHQnDZs6qx4pQGBXoa85oMT5Bi2GtFpz5pmz4YLYo9oDGZc35kNB",
  "key19": "2aA6GLRDmDsWovRZwgkjiC85qusJsjJLCvcBFbauVxMPdQPVx6Sta4F5enJiHWJ7AGWDLu5jec4YoMbVZsKquSFn",
  "key20": "2EGt8ZFymWPgRnH9KvvNAiJriGUjVETHaoGhmR9enHFjdp9BwZbDy9hV7y9pCneBMkUhwkA9qv97ohQubJnJLkDx",
  "key21": "s7t1BgyWYfXFQoWTiw7tyRS5VuUK55hDAqd4cVbbtvHnsVBqLvNxqbS7C8Nn4MYfK7T3qsctnbvdNK8vfmrCGeV",
  "key22": "DMjHuDJU7yuDGSUbo6Ken93ao16BVrE6SUSFHhH3Ww6hdouLQZDfTMcyFRJRG4F6WP7XjRXHJ1a7dYXUR6AU6cn",
  "key23": "4GwZG7b4TJ9TYpsorLd4d2Hmj82nHnQskUwWrSz2jGHxmvBi9AZ48qnYzyKVq6NeXtgUGcc7CcqmJNkCCNKTYPn9",
  "key24": "4N67abuFAyFxzRtjZF51217LMNVzTd6w2PudQstc8Hn7ggaKfjCgfZxybzCAPrvqwvbkuMcLDvvHEKca71dqoEMr",
  "key25": "47kUbA8neAnuVjPJ1GyhiYvZxSK84eiqhXjPrkbuApF5KpsSeKyxbtPQe2exfabsgZmFAKMZuHpzQ8z3i6b2uKge",
  "key26": "2M9SLT1BHZ9pPetAwFjPhaxXUDTB5nukeoPDhbuV2tPvJJ74bY28aqfP4Aa36VPyt8eWsTR3JbWcfgdvQYNfBrJB",
  "key27": "5QGdTVzPkRVU8USWy6FUqc75rs7dyDzVBGgmgBKvGZuFFadKqi9sTq9PtBq3bruZcqmBKK1MvnRfBg4JDjt7Qy4r",
  "key28": "noRZw6iDzgBweHcw4baHZbjLsBCWPpMTGPgKMqZo9pLa9ToYy7pb546hek6DJmCwDyM6F959dN8JfCYd445Ko7S",
  "key29": "4ZfF5paC6CN5Pw18CYsmTGNBUbue4QLTwTFYCHU6xzXXcPhwZsEHCDhrGGNpbrFWuEkXoNH9TQqkWLqcR1JBBwaS",
  "key30": "5VxRAKkHdyttvu2VRa4nDskSv4sJQSgRJ46W5NmRnyMRhbgVwKSiESJseurkcrZp6Sta7X45HMa3vmoa5EfNnfZt",
  "key31": "25VvuvpEodUtP56Rav2euD46J8wY13S3UHKVzjoTu58KR2BtKqPWVf172B6qH1uJUFDQTFDA2PGHrggx8RWszhpc",
  "key32": "ZMkLYTotBe1trAcBvdF3dpedpMC1vNNFkzdhC9ZRYW2QHDM2jFHm4fSLMNJWtUAwqUh6UJaziGL2Y54SLQWXoDh",
  "key33": "3ms3yvidyKgZFA8kD9z3N5FVZy7t2QubCFY7MWZSZXAey6RCc2nc14SsVqhUCum4ooUQQntrJ9Dvck31wg6jiEAr",
  "key34": "4iaafMKswxTNkY8vdPJUerfaB1nVUoAuxgCjCwQt6WBrn5LG4gtGdUDhaKvgpvi4XyQsWAiWxWfmZh8MEuxGLSJo",
  "key35": "3qdntaX5f5vEWkng5j18Bo5hSE4PKsuyKBxYorvna2XNPYBiS8SAZdiJem1VoZSJaPKimmpiWyMfZJ1hwwFCaxzS",
  "key36": "5ostg3Z4ovU1eG2cDAvgxSZ9jtQDXQ6YJWmjVVpZU8LMj8e9kQET4WsaJ7rgnqXaE6KDRdmdGhabbwXT6DVJ8d71",
  "key37": "47iuxnnAjSLBrXCJCcyU2hGsZpC4ZLkdjaqq34KJL855xPCiAehGhWVNxFNXtQUudfn32XLxBdmkMxHNB3u8Hdcf",
  "key38": "3HaSuo3WvUtMhzzJayKeHcDkvr97Y2DfUhBZKJcDy6jutjn6wFG7WrWjrg92NrAhfeQrs5UvVy77EPzHFoR5ZwrZ",
  "key39": "3ykBB7DzpKx2BPLamnKEcoYQti3bni6qYFKg5qgAEU7m4VWhByBFq8kYTTzM236Jyw2mdFWE9Bu8ejjVAyLXc3fD"
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
