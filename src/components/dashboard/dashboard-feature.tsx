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
    "yNiGScjsNpAyCECq4y7dCvZPvxbBLjWyFYY5E3cXEpbGU5aroLRVNvr6njtiLCNx3bY1zuckDB5urHfqBY65DK3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PrTDfkxjq8jAJsxSoJTQmKvLeoeQmAQFDv2p8F1XjWXF3RfCoEDVHWNbwrRAsckT1qX4xjpQiQWVKZcQgqu5JYs",
  "key1": "5sDJiazajzuvFPwhWzno9oGvDN8ie8RppjZZdERDPX8SjvAXdWfsCEZNrUcfgbpKzdThqwv3ogGwCn6EprrGpwu3",
  "key2": "3th2kh6MctAMbbyvEqZvgVYZhnhtx8o4t3aCz6cTFeniQF8cDwwRvX5d6suD67vW544MJ8dx4kKbyQ6dntDosPjX",
  "key3": "5BPEbrMvnTfic3auqAW29DSkK1oHWfhrYswe3bccUk7SKh2wxaTvenTqewuriKmxzV1BcwV93hHVBpQfgijL8wc5",
  "key4": "5pbvvg66kJF72dok7M1RKT6x7AqYCPSNWQQTkMwFttj5iDTLAX2Kvry5VkAsfnzsJVDBE8yi6Fp8RRPaDW6xYx5i",
  "key5": "RwVzg1hqRjshTVMo7e56Pyjqs9Lr3PymK1LDNuknzW7UioqzpAkP1gnvRwqN5cBwvvaXBZivVvCLuDGYdFQVCj6",
  "key6": "2pN9VfsotXZ4vjesjd6wWKb9LETsejpgVJ16QtN3W7TLpuPkvhwWXirFnDKw752ooYf9x9jGSdGNTeg3SyGdNKGu",
  "key7": "2ve5qnGMVARcQQx8nzf7c1T9jgSpUU5DvYAyvm5fceRSB1nmUX6viwqtrXjyiG9F9vQp53Rw1UMQGLQEdzaX9RnR",
  "key8": "393CSWo8pcfCyNVBXor5d2HxPpvEezArAaqYseQoDxvkjLoZY1BipVfuNnLJEjpuDKSkrSzhPjBZyqxTUxkwTby5",
  "key9": "55QVMMAd81WDjuLebeFiAEaxv9AtvLzZZUcZMFqy5H7xYApV3FofjVJBaTapYwBo2y3feusLgmQJNTZQBDTuD7HR",
  "key10": "4cdL7TVDLvPyY4zLLknQYss13nReBv6fir54gR9ey8QsJUHj7pmw37Fux4SkPWz6cKVLWWcbXyXq4u7AxNBYp9bh",
  "key11": "4JT7ptbYZGpAsdhQabrFt1ujW8jG9frbninQYaWFgKG5DMwQiw4Sj8dBukirEaNTSvX7o6Ss86UsUJpbsXSF9y2y",
  "key12": "51xAJQJWpVL3Wwau4K3qXgCjc6cqfVQQxgeQECh9RHSwD2wcDvcYARe3TrvENfKboabKLpqREZSXtDvTWYic4335",
  "key13": "3edsXWqQ6UpryAi4Zw3nq7pnVapV1WGbwhSVEWjj4QRteopadi5NCJTuytn2oyQZxkAUTvK59TuRjrd9fvxk9TA1",
  "key14": "2Q91NtPuvUjtZoET5zmR25BEPYBnD6pZs5QhTYviVTohSpmmrjjuByJ583dcD9CABNv487jgAHuyJe6P4Zt2uRUT",
  "key15": "4KNgPUDa3v5DiHped8Bfgd9HyXeQnf9WbxWWJQrTExhkhMgLHLpEKjHsred4aHQgTZTmrZrRB9L84sdC4EF2x63V",
  "key16": "RrLdJhrwPSvxX5aFvfQAAfjPY77VAfyXdAFRzxUZADZftV38bmdY4kkh9wLYK1LsnPxPHNp91CgEyKDAQrvrY68",
  "key17": "4GvhZP21syG9MfwTXu1butGPbbbnqoSfuvgqQghtJrGrm1iDRABNgJvwBP3pdAgDPHUSsihfsCFcp4RoZn33UM4C",
  "key18": "4eRsmqPchiKTAM4cqarrGheuqfCw5BviPzDHcRenz19P7WzdjxfsBeceYyTbuRHZDkAooWNpj8xUwKJNHFCeikuA",
  "key19": "5Ei3cW2TgbrxV2H87tW2dqoDFDn5RXXDx2i3o9gHNqpaLqKCViE4aXHCazvoaFngcqo7QLrVDJfSQki4LMZMVDq3",
  "key20": "4FMLQHed9ZwVqzpvJ5eX5uPnomKqpAefShBVKqdhc2QwrpSWwc3kEW474tGquPKKYYfX1ZxD85Th4UrBibuoXqdp",
  "key21": "3hzwWkhExcWVy785REzAhYwLWqaY3MjzbCqoyfK5UJ1teGBzNpTZ2EcFoCHfPmPkRRcz5pQosRTNVKoECr6SHByU",
  "key22": "2QCUC6q9e8gFzAD1JDAUC9vi1NxdUcRaPv7T9N5oaj6DaWkYxqDJq1zcHfVUujeavVPdGLfLcU1yqW7SZR5U1gct",
  "key23": "47UKN97oEsZSdksEjAxaxRtsdWqJ1rqSS8qJ1DYj2CttMC1eAzQtRZz8DL27A9v566y7sSt7tVHrYM8KC1yFpcwP",
  "key24": "2JDsSwPst4ucmsrCmDFQcfKR9d9bia21VUnjnCWSWcG4nw5TJAWzj5YSQ9B9JHQA8E5h3g7BLK6DbtTV5RqtusY4",
  "key25": "3uzHRcmF18XCNN1d655bpaXfPnDAPQY22YmTDqhyJTVVZQ4GHfSpCFiPi2WaVmxteyrwVUPaWccMS6VRUv6ieZSs",
  "key26": "3yEYEgFpHCcd3YLJa2kQ3Um3KBZcCtnwzsV9y2TzQbJxFeLGMsT9GndmzgLXNiy6MEuLiFphDLeQnfpEgJLu3roW",
  "key27": "4aaHrUC1UfeRjAm6bEfvwXG9XxTdoKfd42aTGgwRCGKdrt81uzeXYE9wWnizCDsoN5awZr4Ar5kotDX5CVpbsQd6",
  "key28": "27a8LXkKS4CrZJWUy6i4pN14phsdfjG1Swmoksts2JWoYLL6zNm4whbCcnopejh1NZAigAy77KvshjqJwAne9A8J",
  "key29": "2fQ9isaLE1rbqzH9NHaNMG9FTJSQB3ViLiMCJPgyGuVGE8jHv21m21Wj8budaCn15W7PDoSn6kFeFNP3ySUh1vZk",
  "key30": "4duVnzBHHoprsD7BZfs8Dj5RkTNKL8VcuNjoYWtDujsNLaSuKptgDdToMGdrpBP144LXiAAfVr4F2q3pGvcGBZ7",
  "key31": "29JxGAuuFNSfRwkg2VbFUaxhwrwt71oYrZTCe2gC8U129GHCL2AfUUXSJuLPdqhh3ncypjmrpiiEcT21bN6Wdoy8",
  "key32": "2F4FjRckFbgPASShwfjJkPHE4JzqU5StoSwGbzXAPteLBz5MwcvYAuARc83sbSUAvepQ5y5hqhmw72FMmDpuGt74",
  "key33": "4zrH21sAeiKEvspD2mPAVsLpymp3HkKi5zRPe853Tn56McFLf258ptiCQuZv6k9H3RLk66reRqY5JsQQNCWhxu5X",
  "key34": "4MDYW8PZbfc3ofuPRHcBeRBV87sL1Ub3f2z3PgfEyfYZ1NDvXhmUyM12KR5u4D52ExDQabnQkL8o7Azossd9Voqn",
  "key35": "3R2S1fDkQ2StPPhf48GVfXiKQag4vhU8H78K1VVL63j1bbuJNW5tqyFpVeohaYkwr31Zkg9wNJZcHtGs3TsvtkRM",
  "key36": "3qVqPgiqKwwkqok1BaV87Kjhnu5Uxn6YudLyfTLPcyknkxKQ2zcF14eHRBMwhAm3Fcmm3sHTzT7LBvSh44ZGLji8",
  "key37": "3WzwBwcJx3JAuXwXWMCatrjip5K1jzhaJtLBp14Cj28Wz5XqiyRgFfaT2Nj3WFpvV1P8rYbSJsaLVt1c4XjhMdg1",
  "key38": "4e7JdnLs9PhZYzqTDNMFU8N5AXU2Ec7cr7BCfjy7QMzA8zDw8ruuPi6skRPjujps5LmtSv7wnJS6HTsyZhonVgVt",
  "key39": "5aGPbTWcuoiXKnkuN69s9WEf72vHCS2DofGFAGx1BwWKxXx2y7vR6khTRziXattrwqhu9EFy9ikxoAVvB164NZLf",
  "key40": "3kQuXxwPywiasDZsbQ2HBBUuzsQ8BYEkX1z5isJH1LQ6vhp11osYgCPkLGWWprq9YQ4F2hRXJNn1UvmmQrRLbqX1",
  "key41": "Lam2htLQkWVWitiCuySKymH3aKRFnqoHcSDu1RSL6Fh7xraedEcG7KzZR2MwupW6CAUKb33ATZnmP4P4aXQKzpU",
  "key42": "5hVabxtFH1wb4j3F6GeHaM1qopatqb8hjUbMKiyWwNbFHWzYKR4MqKFNRT6J4QkY1bsRTmWnSYxfvK8YMbwDhVvV"
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
