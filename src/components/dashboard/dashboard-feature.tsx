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
    "5B7JaaJTqw1wGGjjvFVkPi7rtL9G6X7TRZMTAE5HQvo61P5tAXGtCAcLCWiWv7LSGNyXep4By8rZ4rwfZGa2V9EE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42uoYZNHjKt7z6GoeQbxs9Gm9WaKtYeve1RPDwmJyCSje9S89jKTs9eAHk2Wwu6akfVmQwh8kjdRoDQgZt8FsSse",
  "key1": "4ULpuxt1AijP3FRW6HdyoZ4AfSkLgLYB8XUZ9Tp4YkaECZsPAxy7medzWxz26eogZMojR66T59u3mcEb9vrb97h4",
  "key2": "373ZT1A1eJzPgewpU7BqeW3kthWzzVmsg9xQDQBwY1TouBSuykmg3pqg1QQRLXqp1rLVoDVquJSgbd1FSLRZusAZ",
  "key3": "38unX8ZThuAfUxo2pNrr1JYdNwQSq5zc1zTY7hzVLN7PsXqBJVxRtZAAYBKfCHBFudqqL9MbgSTGY4Auj6mJnbqk",
  "key4": "4YVkZSqMeJvPvGPA4Mps7rV2RSBoZmxU3Kd3GV5QyRNQLp62DFedTMqYpD5jRAErfvTzogWJGRzWrDxxCN3iqpsY",
  "key5": "3KLtgCmBDUykabmHtq64yMVuebU2DBoGP5yem3Yj3GrCVz5HhTnUkUzEWcLNKWLzF2ookkvVUJ52m8PmHDze1sBo",
  "key6": "4zJCQCkUe6Kn2ntfFpsHGSxBG4T7hdV1V5zQZt54jkXKvWK3V3zfvZMeQigZXEwPzapcCPuE7QsJqcSeKnAYF8gA",
  "key7": "3swpaa7EeojigpxJEv9DUnGXf5CMXQ2DhhKapktbKyetJAV4o1zQ8RdQSx1KXxwAvSdXdsP7pWtcuCqJBLURHk9X",
  "key8": "2nnJn1fEZeP5mtYF3aY86R7xAv5JLbHwVjaPH477Hyz4dPL5UKMavMP4us3wPNduBqnvtAezuAJ278g8QYRHAVR9",
  "key9": "3jTGdioGqbB7aUYsenAA6AbMeAjbfwjVkb7VvPahbs9WEKvs3tEHtv7jXgLj3Bj1mzcHp8j4xQhtQu9aEznypTiK",
  "key10": "2PC7jUy438JFJ8EMmrwPtZVpE7UF4UYCw3FCvn8GHYDwJcqG55qYEhSQbduD5xUNyCa1PvBcYx3zc2EgigrXoFwE",
  "key11": "XRujEbuMwL5jQ8RipBrCFjXPcYDhdHn4XkNYq3kwBMN5u7uZP4r3j2kXtRVchV8ckL5SmKr3ZDtrcRbZ9nzvtkP",
  "key12": "4FdeCZBQvwqsbGjwjpicBCDCoCboWJSveD8nVFvVm2sxKe68XUupf37fRryQyYa6vpyY1sv73f9tMYfGpP55uGY8",
  "key13": "31S8xNosCMJHtH7T2kfApVMomArFtUs4pa5F7jsXsrmopnXuJttRJL4peeRv6R7q5SRX9jta2PkEw9tcqkrKZePh",
  "key14": "2No5uXmJq6zgqfaUg88jwsj9p2JhNDWJZmRmJm9nJbUD9QJVSqkqNymex4mPmA3gtr6gjnsMEV5u4Fks8AHFMJNh",
  "key15": "5mPGAzG2LmnZbHVe5bbLp8qrUc8g3mtANZ7LR65jqmrJVH2jArXdZkLP8T9P8iS6yoUeYjScXaiUSC5MhqKb8P8X",
  "key16": "59fK9wUVhDAWHjLGt22WUykeqaU5Fa1M3Uo3z2UxLodDvrpRqQYGHEJCYajtTpd4MRu2JW7qt63Z1sJcRDktkrGW",
  "key17": "3FiJGzZhxAyYPavbrJ9UHB6QYoj3UKHmaXQ2Fv2qPkAsC6Pzyk18ibEMbTuyfE3K964Sa29Kh9oiW7qjr8VxuKwi",
  "key18": "Tfz1rC6cWjdGrsKE4KqYjbmKXKa8eJP39onTgKK2s9b8QPCLmrr4k8tNPrJyNfpJLtMoamDL7pkBPnkkcZzpT1r",
  "key19": "zRzGVvXz4cduDivfHeUF8zd2fDXrd5xcWms51Cvg5deA2U2meRdhxCwFQ3Pbpxwg4jZmcem6FfRnTBqQGFdvPtC",
  "key20": "2LKWwTREJDzpjn2qJZTEtBQpnspPVm5xfWkvVcVUPKhpHEoy39Wrj8Yhqv13vhk5ez989Y4XqcbQ42cJzbxojbwA",
  "key21": "5HUTSuQJvpapwbydJpLX19rXwJak64kB2nZY71n7eRpuXA5Ux4tnmH2vZd8XENdHgpG4UJDhoAVNgE36CVT9NZaz",
  "key22": "55SVdA67y4GzeXhBdweZ41PcAubX52xRZweE3J9U9QzfBRZbgX2M7JAjUEa2EHaxSBx8RBoYnCLRm5shRoxJCSv8",
  "key23": "CEzJvQvsAPEZRyWe6862TakvCezAg66EKNAPpoAFD3vR9ko6kpRBYvXYikJoEsHqgGgmrUSFovTDXeRGQuBbwG7",
  "key24": "4S7LRqWP8xqHeXpDNSGNf5fWiMu1JVERcUDp45N4zvDCMCNfgXJz8GiBiMzguTEKHhaN9s5kJWmMsD7h59yDDpSv",
  "key25": "4MyQtS1vbvETGL73HxEmaeGUMV5FugccivMqoWJejaHChS8aqGhHtE76nGrQWwhKbw4WPCmSvRLFehpJVJK9FWDp",
  "key26": "2ZYSCxbj7gtrYuSF3S8XcnwK2U5nu4tkini3MdHrmyaSXY46roMcS2LauSWY6FoJU4YAkaie5yeGYx3jBBjniahV",
  "key27": "TEAEpb6WFGKak8aXdMxQ8dxaM6otBi7eCiiJdjg684dqsYzbxFuj6UsKELuFEfp5YqM34Quy7mBnmfJFWeyDgVJ",
  "key28": "3KPaF7jcg743AS3Nh4MHLrzSysUc9pfKF5Z9mBDc67K6nyF88V4NZy5q5FSRQc2XuDcnpuMXn4MCG57m2YyUK5qe",
  "key29": "4bFTQwjecWxgvjEFyoxRQSiQDAEKGNPPWxtb4z3r9nivWGQWy9U9635fJnYxh5RzH9e65L7Sw9RcaPd1b6xTMBgp",
  "key30": "3KyhzKdFY5YTNEGeHWVYoLRdBw2FDmuMJzUSFsDne6AkYcD3iLEkHgc8FF5pwNXzHEWEkRf7GDJPzYDNWweBye8t",
  "key31": "3vZNKRS682TxYH3meCUnTXuG5r7U6xmBzs2NP1pVLFoA86afmvabjEU3faZXf5FvcZ5LQ6USXGsjugATusHBWxyr",
  "key32": "58stm6ULwMCUVHuL4vZy1M93WBTQfqTq6333vfKnFP8nkVcjH5M8M9xvuZYyXTnaKnVbrLHN8Eysk6BSDrcJCXrj",
  "key33": "5eanSXKb5dVTa8XAANW7YKhj8eKndZnw3kx3HgxA5tnKs8BbaHBisvpD7LLRawFGgdnwXUdgyLUsSSWjRtATFLuA",
  "key34": "LYRqPrfFQ5a8eMMMJrtFuaNefMACnt4xgrLYcFDFcXBzVbN7Nr8UDVkAi2ui8QjxBkgCDsmYTN7JSJw9jJU4cM7",
  "key35": "2ZJtn3YJKbrXWqWvCoRc4rj1Qa7jrzrLHJzDkf81NsU4PBLXZTqhbquKmiPxLcKgLHzpbnShNapWiGRqUgss6Hn",
  "key36": "3twZCN7y2z1B5VRE4KRFovbvJcqCJQx2uZX7CTPWsMD5jf5eJGYBVdQbyFm7UahrjcM623t5CCiF6rs8TYjJYJ14",
  "key37": "3XHmh3wWnkEQbvjPAZVky1BU1KWY1jhvhC5tfDhHByH6c568xSW4YDzShapHtoCytMFTdF9LT2tSTihBqAmQkDp",
  "key38": "AzC7jwhqtYkfZDzj1KJ6tTBDdraaA5FVENcmkVTykE1zd18k3tgJjEEZSHWHvzNqRjPam286WfSNdVzonw81MVg",
  "key39": "YgSxkixQ6WV5zFiZiEmP7p7fbGi6X8KxWvxRkYRKw9mdE7cbomcahYnYtpbj3kagsMNbJUJHxYBAYanq7aYFceV",
  "key40": "4sCnFu3F7AGKfoCMJzD7z7m7ehxzP8QWovXH7gnoY7WSxWhrg1DvzfQhekX5mGBui7KhJgh1TCHUGiASzHCE3tHA",
  "key41": "3U2FVmaFg3wQ6sERNDaG1cGqEybamL9CVUx1Ws9str5bMTbqSQgVPA4jDnuQGaTj2EprfwdUmSwumkmY1unmmrZo",
  "key42": "3i9gvKYX4nNURxraudRk7fqtjUPamEKygbg1bb3ZhvSWXfspzYGhY49aUZsUVisLfC8SpA8ScV89qsxCLgtZ35cL",
  "key43": "2LxmYMsGRoxsRFNvSaKWau6zUfRhVVBqQV81CWUT7uoL4GzP58d67BNwQsN7zsXvRGfwBWFr2GYUgAn1Qh88wwSk",
  "key44": "4VWpYq8pmWWVRSsa4ZjzaqHbSgUEGyqXbKM3YePQmKMeobYsAUTyW8kbFw4Gc92gN5uzhRB5Ca8W4brA2vPdgdsP",
  "key45": "5VrYn9TNQdatrJFfbtGppQd1RrVWaNvVVxm7ZYgjKb7V3HPdqi16UTjMgPUGxUGZGreJ4nDEdpPx9s5LSUMn3ohN",
  "key46": "5BZCjEQsfHXXZCm7q7wTAxxrx7ZPfkERUSHmtxPXQGp9aK1FjiFNJqEiYPvpZQVyEw3zxJYaskJA6oaFvJnnGzUU"
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
